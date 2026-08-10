# syntax=docker/dockerfile:1.7
#
# Production image for sustlabs.com (Next.js + Payload CMS).
#
# Four stages, because two different things need to run in production and they
# have incompatible requirements:
#
#   runner — serves the site. Standalone output: no pnpm, no source, no dev
#            dependencies. This is what stays running.
#   tools  — runs `pnpm migrate` and `pnpm seed`. Needs the Payload CLI and the
#            TypeScript sources, which the runner deliberately does not have.
#            Used via `docker compose run --rm tools ...`, never left running.
#
# The build reads the production database. Every public page is statically
# generated, so the HTML is baked at build time — an image built against a
# different database ships that database's content. See README §8.

FROM node:22-alpine AS base
# libc6-compat: sharp's musl build needs it on Alpine — at runtime as well as
# during the build, so it belongs here rather than in the toolchain stage.
RUN apk add --no-cache libc6-compat
WORKDIR /app


# ---- build toolchain --------------------------------------------------------
# pnpm lives here, NOT in `base`. The runner inherits `base`, so anything added
# there ships in the production image: with corepack in `base` the runner
# carried ~20MB of package manager it never invokes (its CMD is plain `node`).
FROM base AS toolchain
RUN corepack enable && corepack prepare pnpm@9.15.9 --activate


# ---- dependencies -----------------------------------------------------------
# Installed inside the image so sharp resolves its linux-musl binary. Copying
# node_modules from a macOS host would produce an image that fails at runtime.
FROM toolchain AS deps
COPY package.json pnpm-lock.yaml .npmrc ./
RUN pnpm install --frozen-lockfile


# ---- tools: migrations and seeding -----------------------------------------
# NODE_ENV=production keeps Drizzle's schema push disabled, so committed
# migrations remain the only thing that alters the production schema.
FROM toolchain AS tools
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY . .


# ---- build ------------------------------------------------------------------
# .env arrives as a BuildKit secret: readable during this RUN, never written to
# a layer. Next loads it normally, which matters because NEXT_PUBLIC_* values
# are inlined into the client bundle at build time and cannot be changed later
# without rebuilding.
FROM tools AS builder
RUN --mount=type=secret,id=dotenv,target=/app/.env,required=true \
    pnpm build

# public/assets is seed INPUT, not runtime content. `pnpm seed` uploads all 38
# files into Payload, and pages then reference them as /api/media/file/... — no
# rendered page links to /assets/ at all. Dropping them here keeps 43MB of
# duplicates out of the runner.
#
# It has to happen in this stage, not the runner: deleting after COPY would
# leave the data in the lower layer and save nothing. `tools` is this stage's
# parent and is untouched, which is what matters — seeding reads from there.
RUN rm -rf public/assets


# ---- runner -----------------------------------------------------------------
FROM base AS runner
ENV NODE_ENV=production \
    PORT=3000 \
    HOSTNAME=0.0.0.0

RUN addgroup -S -g 1001 nodejs \
  && adduser -S -u 1001 -G nodejs nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Mount points for the three volumes that must outlive the container:
# uploads, and the ISR cache that revalidatePath writes to on publish.
RUN mkdir -p .next/cache media documents \
  && chown -R nextjs:nodejs .next media documents

USER nextjs
EXPOSE 3000

# server.js is emitted by `next build` under output: 'standalone'.
CMD ["node", "server.js"]
