# sustlabs.com — Next.js + Payload CMS

The SustLabs website, rebuilt so the marketing team can edit every word and image
without a developer, a commit, or a deploy.

This app is **independent** of the original Vite app in `../sustlabs-website/`.
It shares no code, no imports and no build. The old app is untouched and can keep
running until you switch DNS over.

---

## Contents

1. [What changed and why](#1-what-changed-and-why)
2. [Running it locally](#2-running-it-locally)
3. [How the content model works](#3-how-the-content-model-works)
4. [How a page gets from the database to the screen](#4-how-a-page-gets-from-the-database-to-the-screen)
5. [The seed](#5-the-seed)
6. [Adding or changing a field](#6-adding-or-changing-a-field)
7. [Enquiry forms](#7-enquiry-forms)
8. [Deploying](#8-deploying)
9. [Traps and gotchas](#9-traps-and-gotchas)
10. [Guide for the content team](#10-guide-for-the-content-team)
11. [Known content issues to fix in the CMS](#11-known-content-issues-to-fix-in-the-cms)

---

## 1. What changed and why

On the old site every word lived in code — 1,874 lines of it in
`src/utils/constants.ts`, plus the legal pages hardcoded inside their components.
Changing "12k+ deployments" to "14k+" needed a developer.

Everything on all eleven pages is now editable in the admin panel. Three other
problems were fixed along the way because the migration touched them anyway.

| | Before | Now |
|---|---|---|
| Rendering | Client-side SPA | Server-rendered static HTML |
| Pages with their own `<title>` | 5 of 11 | 11 of 11 |
| Open Graph / Twitter tags | none | every page |
| `sitemap.xml` | hand-written, missing `/fms` | generated from the CMS |
| Unknown product URL | silently redirected home | real 404 |
| Assets shipped | 81 MB | 43 MB |

That last row was free: **15 of the 53 asset files (40 MB) were not referenced by
anything**, including a 24 MB `smartdbBanner.png` superseded by a 172 KB WebP.
They simply were not migrated.

### Things that were quietly broken and are now fixed

- **`ProductSectionHeading` read the copy to decide styling.** It checked whether
  a heading contained `"o4 Ideal Use"` to pick a colour, and `"for partners"` to
  decide whether to break the line. Renaming either heading would have silently
  changed the o4 and Solutions pages. Both are explicit fields now.
- **The enquiry modal opened based on the button's label** (`=== 'Talk to us'`)
  and on whether the URL was external. Now an explicit "Opens the enquiry form"
  checkbox.
- **Analytics event names were built from button labels**, so renaming a button
  would have split its metric in two. There is a separate "Analytics name" field,
  seeded with the current labels so existing reporting is unbroken.
- **Feature card images were matched to cards by title.** Renaming a card blanked
  its image. The image is attached to the card now.
- **The enquiry form dropped the message.** `comment` was collected but never
  sent, so every Solutions enquiry arrived without it.
- **Form failures were invisible.** `mode: 'no-cors'` made the response
  unreadable, so a server error looked identical to success and the visitor was
  thanked either way.
- **Name and phone were not actually required**, despite a commit saying phone
  had been made mandatory.
- **The QR code image had no `alt` attribute at all.**

---

## 2. Running it locally

Requires Node 20.9+ and pnpm 9+.

```bash
createdb sustlabs_cms          # any local Postgres 12+ will do
cp .env.example .env           # then fill in the values below
pnpm install
pnpm dev                       # http://localhost:3000
```

Minimum `.env` to get going:

```
DATABASE_URI=postgres://<you>@localhost:5432/sustlabs_cms
PAYLOAD_SECRET=<any long random string>
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
PREVIEW_SECRET=<any random string>
```

Open http://localhost:3000/admin and create the first user. Then load the content:

```bash
NODE_ENV=development pnpm seed
```

> **The `NODE_ENV=development` is not optional the first time**, or after you add
> a new global or collection. It is what lets Payload create the database tables.
> Without it the seed fails with an opaque Drizzle error about a missing table.

### Commands

| Command | What it does |
|---|---|
| `pnpm dev` | Development server |
| `pnpm build` | Production build |
| `pnpm start` | Serve the production build |
| `pnpm typecheck` | `tsc --noEmit` — the main safety net, see §4 |
| `pnpm lint` | ESLint |
| `pnpm seed` | Load content from the frozen legacy files |
| `pnpm generate:types` | Regenerate `src/payload-types.ts` after a schema change |
| `pnpm generate:importmap` | Register custom admin components — **run twice**, see §9 |
| `pnpm migrate:create <name>` | Create a Postgres migration before deploying |
| `pnpm migrate` | Apply migrations (production) |

---

## 3. How the content model works

### One global per page, collections for repeatable things

```
Pages       Home · Ohm OS · Smart DB · Ora · FMS · Solutions · Support
            Product pages (collection) · Legal pages (collection)
Site        Menus (header & footer) · Site settings
Library     Images · Files
Enquiries   Enquiries
Admin       Users
```

Each page is a **global** — a single document — because every page has a
different, developer-owned set of sections. A generic "pages" collection would
have meant either a union of ~90 section groups gated on a slug, or a block-based
page builder, which was explicitly out of scope: editors change copy and images,
developers own layout and section order.

**Product pages and legal pages are collections** because they are genuinely
repeatable — adding an o6 or a cookie policy should not need a developer.

**Images and files are two separate upload collections.** `media` resizes every
upload with Sharp; `documents` does not, because pointing Sharp at a 19 MB
brochure PDF wastes memory and produces a broken thumbnail.

### Field factories

Roughly ninety section groups are composed from a handful of factories in
`src/payload/fields/`, so the same idea looks the same everywhere:

| Factory | What it gives you |
|---|---|
| `headingField()` | The eyebrow / lead / accent / rest heading split used by ~40 sections |
| `basicCards()` `numberedCards()` `eyebrowCards()` | The three repeated card shapes |
| `buttonActions()` `textLinkAction()` | Buttons and the underlined arrow links |
| `stringList()` | A list of plain strings — **Payload has no primitive-array field**, so these are stored as rows of `{ text }` and flattened again on the way out |
| `labelValueList()` | Stat and specification pairs |
| `imageField()` | An upload plus an alt-text override |
| `enabledField()` | A "Show this section" toggle |
| `seoFields()` | Per-page search and social metadata |
| `toneField()` `accentTokenField()` | Design tokens, as constrained dropdowns |

### Two rules worth knowing

**Design tokens are dropdowns, never free text.** Values like
`tone: 'teal'`, `accent: 'var(--terra500)'` and `size: 'large'` are real inputs to
the CSS. They are `select` fields so an editor cannot type a colour and break a
layout.

**Some "image keys" are also CSS class names.** The Smart DB platform tiles build
`sdb-platform__tile--{key}`, and each licensee logo has bespoke sizing under
`ohm-os-licensees__logo--{slug}`. Those fields keep a *separate* dropdown
alongside the upload — replacing them with just an image silently breaks the
layout. They are labelled "Frame shape" and "Sizing preset" in the admin.

### Editor experience

- **Tabs** across the top of each page — one tab is about one screenful, which is
  what makes a 12-section page usable.
- **A live heading preview** showing the lead/accent/rest split assembled. This is
  the most confusing part of the schema and it appears ~40 times.
- **Row labels** on every list, so a collapsed row reads "01 Sense" or
  "Book a Demo — secondary" rather than "Card 03".
- **Help text written for a non-technical reader**: what they *see*, a real
  example from the site, and the consequence for anything structural.
- **Validation that explains the fix.** The Smart DB comparison table refuses a
  row with the wrong number of cells: *"Row 2 has the wrong number of cells. Every
  row needs exactly 3, to match the columns above."*

---

## 4. How a page gets from the database to the screen

```
Payload global/collection
   ↓  src/lib/cms/<page>.ts     mapper
   ↓  src/types/index.ts        the shape components expect
   ↓  src/components/...        unchanged section components
   ↓  src/app/(frontend)/...    route: fetch, then render
```

**The mappers are the important bit.** Payload's generated types
(`src/payload-types.ts`) do not match what the components want:

- Anything not `required: true` comes back as `T | null | undefined`
- Uploads come back as `number | Media`, depending on query depth
- String lists come back as `{ text }[]`
- Document ids are integers; array-row ids are UUID strings

Rather than loosen ~60 component signatures to absorb all that, each page has one
mapper that converts once. `src/lib/cms/helpers.ts` provides `req()` (throws a
message naming the missing field), `opt()`, `image()`, `flatten()`, `table()` and
`resolveUrl()`.

`src/lib/cms/__contract__.ts` is a type-only file that asserts each mapper still
produces exactly what the components need. Nothing in it runs — it exists so
`pnpm typecheck` fails if a Payload field and a component prop ever drift apart.
**This is why `pnpm typecheck` is the main safety net**; it caught the four exact
lines that needed changing when image lookups became real uploads.

### Caching

Every public page is static. Editing content fires an `afterChange` hook that
calls `revalidatePath`, so the page regenerates without a rebuild — verified end
to end. `draftMode()` only switches a page to dynamic rendering when an editor
actually holds a draft cookie, so visitors always get static HTML.

`revalidatePath('/', 'layout')` is used for menus and settings, because those
render on every route.

---

## 5. The seed

`pnpm seed` loads the original content into Payload. It is **idempotent** — run it
as often as you like; uploads are matched by filename and documents are
overwritten.

It reads `src/seed/legacy/`, a frozen snapshot of the original content and its
types. That directory is **seed input only**: after a page is wired up, its content
is edited in the admin panel, not there.

The seed deliberately imports the real content file rather than transcribed JSON,
so every transform is type-checked against both the original shape and the
generated Payload types. Rename a CMS field and the seed stops compiling instead
of silently writing nothing.

Order matters and is enforced by the script: media and documents first (producing
a filename → id map), then settings (so `{{settings.*}}` tokens have a target),
then navigation, then pages.

### Shared links

Links used in several places are held once in **Site settings** and referenced
from sections as `{{settings.demoBookingUrl}}`, resolved when the page renders.
The Calendly demo link alone was copy-pasted into five different places in the
old content.

---

## 6. Adding or changing a field

1. Edit the global or collection in `src/payload/`.
2. `pnpm generate:types` — refreshes `src/payload-types.ts`.
3. `pnpm generate:importmap` **twice** if you added a custom admin component (§9).
4. Update the page's mapper in `src/lib/cms/` if components need the new value.
5. `pnpm typecheck` — the contract assertions will tell you what else to touch.
6. Restart `pnpm dev` so the schema pushes to your local database.
7. Before deploying: `pnpm migrate:create <name>` and commit the migration.

### Adding a whole page

Copy the shape of an existing one — `src/payload/globals/Ora.ts` is the smallest
complete example: global → `src/seed/pages/` → `src/lib/cms/` → a route under
`src/app/(frontend)/`.

---

## 7. Enquiry forms

Submissions go through a **server action**
(`src/app/(frontend)/actions/submitLead.ts`), not an API route, because Payload
already owns `/api/[...slug]` — and it keeps the Google Apps Script URL out of the
browser bundle, where it used to sit in plain sight.

The flow: validate → store in Payload → forward a copy to the sales Google Sheet
with an 8-second timeout → record whether that worked.

**The database is the record; the Sheet is a copy.** If the Sheet forward fails
the enquiry is still saved, the visitor is still thanked, and the failure shows in
the admin as "Sheet delivery: Failed" with the error.

`leads.create` is closed to the API (`access: { create: () => false }`), so there
is no open write endpoint on the production database — the server action uses
`overrideAccess`. A honeypot field silently drops bots.

---

## 8. Deploying

Payload needs a Node runtime, Postgres, and persistent object storage.

Recommended: **Vercel** for the app, **Neon** for Postgres, **Cloudflare R2 or
S3** for uploads.

### Object storage is not optional

On any serverless host the local filesystem does not survive a cold start, so
without S3 every uploaded image disappears. The adapter is already wired up and
turns itself on as soon as `S3_BUCKET` is set.

> **Configure storage BEFORE the first production seed.** Seeding to local disk
> and adding storage afterwards means re-uploading all 38 files by hand.

### Seed before you build

Every public page is prerendered — `next build` writes real HTML for `/`, `/fms`,
`/smart-db` and each `/products/[slug]` from `generateStaticParams`. The build
therefore **reads the database**, and the mappers' `req()` throws on a missing
field, so building against an empty database fails outright.

Two consequences worth internalising:

- The order is **migrate → seed → build**, not build → seed.
- An image or artifact built against one database has that database's content
  baked into it. Build against production, or you will serve staging copy until
  an editor happens to republish each page.

### Steps

1. Provision Postgres and a bucket.
2. Set the environment variables from `.env.example` — including the S3 block and
   a `NEXT_PUBLIC_SERVER_URL` of `https://www.sustlabs.com`. Every `NEXT_PUBLIC_*`
   value is inlined at build time; changing one later needs a rebuild.
3. `pnpm migrate`, then seed once, then `pnpm build`.
4. Create the first admin user at `/admin`.
5. Check the site, then switch DNS. Keep the old deployment up for rollback.

Migrations must exist before step 3. `push` is on in development only
(`payload.config.ts`), so production applies committed SQL and nothing else —
run `pnpm migrate:create <name>` locally and commit `src/migrations/`. It needs a
TTY; piping its stdin makes it exit silently without writing a file.

No URLs change, apart from `/products/o5-smart-db` and `/monitoring/*`, which
already redirect permanently.

### On a VM with Docker

> **[RUNBOOK.md](RUNBOOK.md)** has the operational commands — starting and
> stopping, database access and backups, and the full first-deploy sequence for
> a fresh server. This section covers why the stack is built the way it is.

`Dockerfile` and `docker-compose.yml` deploy the whole stack — Postgres, the app,
and a one-off `tools` container for migrations and seeding. nginx and TLS
terminate on the host and proxy to `127.0.0.1:3000`, or to `HOST_PORT` if the
env file overrides it.

**S3 is not needed here.** A VM's disk persists, so uploads live in the `media`
and `documents` volumes and the S3 adapter stays off. This only holds for a
single VM — two app servers behind a load balancer need shared storage again.

One-time setup. BuildKit refuses a custom network under `build:`, and the build
has to reach Postgres, so the builder itself is attached to the network:

```bash
docker network create sustlabs
docker buildx create --name sustlabs-builder --driver docker-container \
  --driver-opt network=sustlabs \
  --buildkitd-flags '--allow-insecure-entitlement network.host' --use
```

`build.network: host` in the compose file then means *the builder's* namespace,
which is on `sustlabs` — so one `DATABASE_URI` (`…@postgres:5432/…`) works for
both the build and the runtime. Attaching the builder alone is not enough: RUN
steps get their own sandbox namespace and cannot resolve `postgres` without it.

The network is declared `external: true`, because the builder has to attach to
it before compose ever runs — hence creating it by hand above.

Then, in order:

```bash
make setup     # network + buildx builder, once per server
make seed      # once, ever — prompts for confirmation
make deploy    # postgres, migrations, build, start
```

Day to day it is `make up`, which covers Postgres → migrations → app in one
command: a one-shot `migrate` service plus `depends_on: condition:
service_completed_successfully` does the ordering. `make help` lists the rest.

Two steps stay outside Compose because they have to. `make setup` bootstraps the
builder that Compose is then built by, and seeding is deliberately manual and
confirmed because it overwrites content by filename.

`BUILDX_BUILDER` is not optional, and the Makefile exports it so it is never
typed. `docker buildx create --use` sets the builder for `docker buildx`, but
compose ignores it and builds on the default builder, where `postgres` does not
resolve — the build then fails in `generateStaticParams` with `getaddrinfo
ENOTFOUND postgres`, which reads like a database outage rather than a builder
mix-up.

### Running the stack locally

The committed `.env` points at Homebrew Postgres on `localhost`, which is wrong
inside Compose, and has no `POSTGRES_PASSWORD`. Rather than edit it and break
`pnpm dev`, put the Compose values in `.env.docker` — gitignored, so copy the
Docker block from `.env.example`.

Nothing else changes: the same `make` targets work locally. The Makefile uses
`.env.docker` when the file exists and `.env` otherwise, and since it is
gitignored it never reaches a server.

Running compose by hand instead means adding `--env-file .env.docker` to every
command. That flag feeds compose's own `${...}` interpolation; the `ENV_FILE`
variable set inside the file is what redirects the services' `env_file` and the
build-time secret away from `.env`. Both default to `.env`, so production is
unaffected.

The seed runs fine with `NODE_ENV=production` here — migrations have already
created the tables, so the `NODE_ENV=development` rule from §2 does not apply.

Three volumes must survive a redeploy. `media` and `documents` hold every upload
and are in neither git nor the image. `nextcache` holds the ISR cache: publishing
writes the regenerated page there, and without the volume a container restart
silently reverts the site to its build-time HTML until someone republishes.

`.env` reaches the build as a BuildKit secret mount, so `PAYLOAD_SECRET` never
lands in an image layer or in `docker history`.

Redeploying: `git pull`, then `make deploy`. Migrations are applied
automatically, so there is no separate step — and a migration that fails stops
the app from starting rather than letting it serve against a schema the code
does not expect.

Back up both halves — `make backup` does the database and both upload volumes
in one go. Neither is recoverable from the other.

---

## 9. Traps and gotchas

These cost time to discover. In rough order of how likely they are to bite:

1. **`pnpm seed` needs `NODE_ENV=development`** after adding a global or
   collection, or the tables never get created. The error is an opaque Drizzle
   query failure, not "table missing".
2. **`pnpm generate:importmap` must be run twice** after changing the config. The
   first run reads a stale compiled config and silently omits your new component,
   which then does not render in the admin.
3. **`robots.ts` must live at `src/app/`, not inside `(frontend)`.** Next silently
   ignores it in a route group — even though `sitemap.ts` works fine there.
4. **Drafts skip validation entirely.** Custom rules like the comparison-table
   check only fire on publish.
5. **`revalidatePath` throws outside a request**, and the seed writes through the
   same hooks. Every call is wrapped, and the seed passes
   `context: { disableRevalidate: true }`. Keep both if you add a hook.
6. **Seeded documents need an explicit `_status: 'published'`.** With drafts
   enabled they otherwise save as drafts and the site renders empty.
7. **Version tables double the schema.** `drafts: true` mirrors every table,
   including nested arrays. `versions.max` is set everywhere for this reason.
8. **Postgres truncates identifiers at 63 characters** and truncated names can
   collide. Arrays nested two or more levels deep set `dbName` explicitly.
9. **Adding an option to a dropdown is an enum migration.** Enum names are shared
   between fields with identical option sets to keep the count down.
10. **`payload run` exits before a floating promise resolves.** Scripts use
    top-level `await`, not `main().then()`.
11. **Server components cannot pass functions to client components.** The enquiry
    modal is opened from four places, so its state lives in
    `LeadModalProvider` and trigger components use a hook.

---

## 10. Guide for the content team

Sign in at `/admin`.

### Everyday tasks

| To do this | Go here |
|---|---|
| Change wording on a page | **Pages** → the page → the tab for that section |
| Swap a photo | The same place — click the image field and choose or upload |
| Update a headline figure | **Pages → Home → Impact** |
| Add or remove a menu item | **Site → Menus (header & footer)** |
| Change the demo booking link | **Site → Site settings** — it updates everywhere |
| Update the office address or copyright | **Site → Site settings** |
| Edit the privacy policy or terms | **Pages → Legal pages** |
| Read enquiries from the website | **Enquiries** |
| Add a new hardware product page | **Pages → Product pages → Create new** |

### Things worth understanding

**Headings come in two halves.** Most headings have a plain first half and a
coloured second half. There is a preview box above the fields showing roughly how
they read together. If the two halves need to sit on one line, end the first half
with a space.

**Fields marked as colours, sizes or presets change the layout, not the words.**
They are dropdowns for that reason. If none of the options is right, that is a
developer job.

**"Show this section" toggles.** Several sections are fully written but hidden —
the FMS FAQ (8 questions), the Smart DB specifications table, and the Ora "what
this enables" block. Tick the box to publish one.

**Save vs Publish.** Most pages autosave drafts and need Publish to go live. Legal
pages do **not** autosave — they contain commercial terms, so saving there is
always deliberate.

**Changes appear on the live site within a few seconds of publishing.** No deploy,
no developer.

**Alt text** describes an image for people using a screen reader and for when the
image fails to load. Say what matters about the picture; skip "image of". Leave it
empty for purely decorative images.

---

## 11. Known content issues to fix in the CMS

Found during the migration and deliberately **not** changed, because this is
published copy and the wording is the team's call. All are now editable:

1. **A stray `|` renders on the Ohm OS page.** The product-layer description reads
   `"…appliance insights.|safety alerts, predictions…"` and the pipe shows
   literally. *Pages → Ohm OS → Product layers.*
2. **Two FMS questions contain garbled duplicated text**, e.g. *"Who receives
   alerts, and can we customize that?ors alerts, and how are contractors
   involved?"* *Pages → FMS → FAQ.*
3. **The parameter count is inconsistent** — "20+" in two places, "23+" in two
   others, on the same page. *Pages → FMS.*
4. **Two setup steps are both numbered "03."** *Pages → Home → Setup.*
5. **The privacy policy also contains the app terms of service** — about 36
   sections in total. It looks like an old copy-paste, but it is a published legal
   document, so it was migrated exactly as it stands. Worth a decision.
