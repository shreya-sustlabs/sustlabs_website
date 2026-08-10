# Runbook — sustlabs.com Docker stack

Operational commands: starting and stopping the stack, getting at the database,
and standing the whole thing up on a fresh production server.

For *why* the stack is shaped this way, see README §8. This file is the *how*.

## Just starting it

```bash
pnpm docker:start
```

One command, first run or hundredth. It checks Docker is running and port 3000
is free, creates `.env.docker` with generated secrets if there isn't one,
creates the network and builder, starts Postgres, applies migrations, **seeds
only if the database is empty**, builds, starts, and waits for HTTP 200 before
telling you it is ready. Every failure stops with the cause and the fix.

That is the only command a developer needs. Everything below is `make`, for the
occasional operation — logs, backups, a psql shell, re-seeding — and for
running a single step instead of the whole sequence. `make help` lists them.

There are deliberately only two entry points, not three: `pnpm docker:start`
for the common case, `make` for operations. The script is plain bash, so a
server with no Node can run `bash scripts/docker-start.sh` directly.

---

**Use `make`.** `make help` lists every target. The Makefile exists because two
things are not Compose's job: setting an environment variable for one command
(`BUILDX_BUILDER`), and refusing to run a destructive one without confirmation.

It also picks the env file for you. Production reads `.env`; locally `.env`
points at Homebrew Postgres for `pnpm dev`, so the stack reads `.env.docker`
instead. That file is gitignored and therefore never on a server, so the
Makefile can detect it — the same commands work in both places, no flags.

The raw `docker compose` equivalent is given under each target for when you
need it. Those need `--env-file .env.docker` added when running locally.

---

## 1. Starting and stopping

```bash
make up          # start everything: postgres -> migrations -> app
make stop        # stop, keep containers
make start       # start them again
make restart     # restart just the app
make ps          # what is running
make logs        # follow app logs
make verify      # containers + homepage + admin + sitemap count
```

**One command covers the whole startup chain.** Compose starts Postgres, waits
for its healthcheck, runs pending migrations to completion, and only then
starts the app — via a one-shot `migrate` service and
`depends_on: condition: service_completed_successfully`.

Migrations are recorded in a batch table and already-applied ones are skipped,
so repeating `make up` is a fast no-op. The trade: a migration that *fails* now
blocks the app from starting rather than leaving the previous container
serving — deliberate, since a schema the code does not expect is worse than a
brief outage.

<details>
<summary>Raw compose equivalent</summary>

```bash
docker compose up -d
docker compose stop / start / restart app / ps
docker compose logs -f app
```
</details>

Deleting the containers is **not** destructive. Everything that matters lives in
four volumes (`pgdata`, `media`, `documents`, `nextcache`), so a `docker compose
up -d` after wiping the containers restores the site with content intact, no
rebuild and no re-seed. This has been verified on this stack.

### The one command that destroys data

```bash
docker compose down -v            # ← -v DELETES the volumes: database + uploads
```

There is deliberately **no make target** for this — it should stay awkward
enough to type by hand. `make down` removes containers and keeps every volume.
There is no undo for `-v` without a backup.

### After a code change

```bash
make deploy
```

Rebuilds the image and restarts. `BUILDX_BUILDER` is exported by the Makefile,
so the builder is always pinned correctly (see §3 for why that matters).

---

## 2. Database access

Postgres publishes **no host port** — it is reachable only from inside the
`sustlabs` network. That is deliberate: the database is not exposed to the
internet. Everything below goes through the container.

### Interactive shell

```bash
make psql
# docker compose exec postgres psql -U sustlabs -d sustlabs_cms
```

### One-off query

```bash
docker compose exec -T postgres psql -U sustlabs -d sustlabs_cms \
  -c "select email from users order by email"
```

Useful ones:

```sql
\dt                                    -- list tables
select count(*) from leads;            -- enquiries captured
select * from leads order by created_at desc limit 10;
select email from users;
```

### Backup

```bash
make backup
```

Writes three date-stamped files into the project root (all gitignored):

| `backup-YYYY-MM-DD.sql` | the database |
| --- | --- |
| `media-YYYY-MM-DD.tar.gz` | image uploads |
| `documents-YYYY-MM-DD.tar.gz` | PDFs and video |

**All three matter.** The database is only half the state — a `pg_dump` without
the upload volumes restores a site with broken images.

<details>
<summary>Raw compose equivalent</summary>

```bash
docker compose exec -T postgres pg_dump -U sustlabs -d sustlabs_cms \
  --clean --if-exists > backup-$(date +%F).sql
docker run --rm -v sustlabs-next_media:/m -v "$PWD:/out" alpine \
  tar czf /out/media-$(date +%F).tar.gz -C /m .
docker run --rm -v sustlabs-next_documents:/d -v "$PWD:/out" alpine \
  tar czf /out/documents-$(date +%F).tar.gz -C /d .
```
</details>

### Restore

```bash
docker compose exec -T postgres psql -U sustlabs -d sustlabs_cms < backup-2026-08-10.sql
```

### GUI client (TablePlus, pgAdmin, DBeaver)

No port is published, so tunnel over SSH from your machine:

```bash
ssh -L 5432:localhost:5432 user@prod-server
```

That only works if the port is published on the server's loopback. If it isn't,
publish it temporarily by adding to `docker-compose.yml` under `postgres`:

```yaml
    ports:
      - '127.0.0.1:5432:5432'
```

Bind to `127.0.0.1`, never `0.0.0.0` — the latter exposes the database publicly.
Remove it when you are done.

### Migrations

Pending migrations are applied automatically by `make up`, so there is normally
nothing to run by hand. To inspect:

```bash
make migrate-status
# docker compose run --rm tools pnpm payload migrate:status
```

Both this and the automatic step run through the `tools` image, which has the
Payload CLI and the TypeScript sources the runner deliberately lacks.

Write migrations locally (`pnpm migrate:create <name>`, needs a TTY) and commit
`src/migrations/`. Production only ever applies committed SQL.

---

## 3. First deploy on a fresh production server

### Prerequisites

Docker Engine with the Compose plugin, git, and a domain pointed at the box.
nginx and TLS terminate on the host and proxy to `127.0.0.1:3000`.

### Step 1 — Get the code

```bash
git clone <repo> && cd sustlabs-next
```

### Step 2 — Write `.env`

Copy `.env.example` and fill it in. Four values decide whether this works:

| Variable | Value |
| --- | --- |
| `POSTGRES_PASSWORD` | `openssl rand -hex 16` |
| `DATABASE_URI` | `postgres://sustlabs:<that password>@postgres:5432/sustlabs_cms` |
| `PAYLOAD_SECRET` | `openssl rand -hex 32` — unique per environment |
| `NEXT_PUBLIC_SERVER_URL` | `https://www.sustlabs.com` |

The host in `DATABASE_URI` is `postgres` (the service name), **not**
`localhost`, and the password must match `POSTGRES_PASSWORD` exactly — Postgres
is created with it on first boot and never re-reads it.

Set `SEED_PASSWORD_ASHISH` and `SEED_PASSWORD_SHREYA` now. Leaving them blank
uses defaults committed in `src/seed/users.ts`, which anyone with repo access
knows.

Every `NEXT_PUBLIC_*` value is inlined into the client bundle at build time.
Changing one later needs a full rebuild, not a restart.

S3 is not needed on a single VM — uploads persist in the `media` and
`documents` volumes. Two app servers behind a load balancer need it again.

### Step 3 — One-time build infrastructure

```bash
make setup
```

Creates the `sustlabs` network and the buildx builder. Idempotent — safe to
re-run. This step cannot live inside `docker-compose.yml`: it bootstraps the
builder that Compose is about to build with.

The build statically generates every page, so it **must reach Postgres**.
BuildKit will not join a Compose network on its own, so the builder itself is
attached to the network — and the network is declared `external: true` precisely
because it has to exist before Compose runs.

### Step 4 — Bring it up

```bash
make seed      # ONCE, EVER — prompts for confirmation
make deploy    # build and start everything
```

Seeding comes first because **the build reads the database**. The content
mappers throw on missing fields, so building against an empty database fails
outright in `generateStaticParams`.

Each target handles its own prerequisites, so the chain is only these two
commands:

- `make seed` brings Postgres up, applies migrations, then seeds — the schema
  has to exist before Payload can write to it.
- `make deploy` brings Postgres up **and waits for it to be healthy** before
  building, then builds and starts the app.

That wait matters. Compose builds images *before* it starts the dependency
graph, so `depends_on` alone is not enough — a build kicked off against a
stopped database fails with the same `generateStaticParams` error.

> **`pnpm seed` is a first-deploy action only.** It overwrites documents matched
> by filename. Running it again after the content team starts editing reverts
> their work to the legacy snapshot. There is no undo — hence the prompt.

`BUILDX_BUILDER` is exported by the Makefile so you never type it. If you run
compose by hand instead, you must set it: `docker buildx create --use` sets the
builder for `docker buildx`, but Compose ignores it and silently builds on the
default builder, where `postgres` does not resolve. The failure surfaces as
`getaddrinfo ENOTFOUND postgres`, which reads like a database outage rather
than a builder mix-up.

### Step 5 — Verify before switching DNS

```bash
make verify
```

Prints container status, the homepage and admin status codes, and the sitemap
URL count (expect **11**). Then sign in at `/admin`, confirm images render, and
**change both admin passwords** if you did not set `SEED_PASSWORD_*`.

### Step 6 — nginx and DNS

Proxy `443` to `127.0.0.1:3000`, get a certificate, then switch DNS. Keep the
old deployment running until the new one is confirmed — it is your rollback.

---

## 4. Troubleshooting

| Symptom | Cause |
| --- | --- |
| `password authentication failed for user "sustlabs"` | The env file's password and the one baked into the `pgdata` volume have diverged. Postgres keeps the password it was *created* with; changing `POSTGRES_PASSWORD` later does nothing. Restore the original password or drop the volume |
| App never starts, `migrate` container exited non-zero | A migration failed. `docker compose logs migrate` — the app is gated on it succeeding, by design |
| `getaddrinfo ENOTFOUND postgres` during build | `BUILDX_BUILDER` not set; built on the wrong builder (§3 step 4) |
| `network sustlabs ... incorrect label` | Network missing or made by Compose. `docker network create sustlabs` |
| Build fails in `generateStaticParams` | Database empty *or not running* — the build reads it. Seed before building, and start Postgres first (`make deploy` does both) |
| Site reverts to old content after restart | `nextcache` volume missing; ISR cache lost |
| Images 404 after a restore | Upload volumes not restored alongside the database (§2) |
| Editor publishes, page unchanged | Rebuild needed for `NEXT_PUBLIC_*`; otherwise check `revalidatePath` |
| `pnpm seed` fails on a new collection | Needs `NODE_ENV=development` to create tables — README §9.1 |
