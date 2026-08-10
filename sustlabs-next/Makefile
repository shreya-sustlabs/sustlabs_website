# Operating the Docker stack. See RUNBOOK.md for what each step does and why.
#
# This exists because two things are not Compose's job: setting an environment
# variable for a single command, and refusing to run a destructive one without
# confirmation. Everything else is delegated straight to `docker compose`.

# Local machines have .env.docker (gitignored, so it never reaches a server);
# production has only .env. Detecting it here means no --env-file flag is ever
# typed, and the same commands work in both places. Override with:
#   make up ENV_FILE=.env
ENV_FILE := $(if $(wildcard .env.docker),.env.docker,.env)
COMPOSE  := docker compose --env-file $(ENV_FILE)

# Compose does not follow `docker buildx --use`; without this it silently
# builds on the default builder, which cannot resolve `postgres`, and the build
# dies in generateStaticParams. `make setup` creates the builder this names.
export BUILDX_BUILDER := sustlabs-builder

STAMP := $(shell date +%F)

.PHONY: help setup up deploy migrate down stop start restart ps logs verify \
        seed psql migrate-status backup

help: ## Show this help
	@echo "sustlabs.com — using $(ENV_FILE)"
	@echo
	@grep -hE '^[a-z-]+:.*?## ' $(MAKEFILE_LIST) \
	  | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[1m%-15s\033[0m %s\n", $$1, $$2}'
	@echo
	@echo "  Destroying data is deliberately not a target."
	@echo "  'docker compose down -v' deletes the database and all uploads."

## --- lifecycle --------------------------------------------------------------

setup: ## Once per server: create the network and the buildx builder
	@docker network create sustlabs 2>/dev/null \
	  && echo "network sustlabs created" || echo "network sustlabs already exists"
	@docker buildx create --name $(BUILDX_BUILDER) --driver docker-container \
	  --driver-opt network=sustlabs \
	  --buildkitd-flags '--allow-insecure-entitlement network.host' --use 2>/dev/null \
	  && echo "builder $(BUILDX_BUILDER) created" || echo "builder $(BUILDX_BUILDER) already exists"

up: ## Start the stack (postgres -> migrations -> app)
	$(COMPOSE) up -d

# Postgres must be healthy BEFORE the build starts, not just before the app
# runs: `pnpm build` prerenders every page and reads the database while doing
# it. Compose builds images first and starts the dependency graph afterwards,
# so relying on `depends_on` alone builds against a database that is not up and
# fails in generateStaticParams.
deploy: ## Rebuild the image and restart (use after a code change)
	$(COMPOSE) up -d --wait postgres
	$(COMPOSE) up -d --build app

migrate: ## Apply pending migrations (also runs automatically on `make up`)
	$(COMPOSE) up -d --wait postgres
	$(COMPOSE) run --rm migrate

down: ## Remove containers. Volumes and data are kept.
	$(COMPOSE) down

stop: ## Stop containers without removing them
	$(COMPOSE) stop

start: ## Start previously stopped containers
	$(COMPOSE) start

restart: ## Restart just the app
	$(COMPOSE) restart app

## --- inspection -------------------------------------------------------------

ps: ## What is running
	$(COMPOSE) ps

logs: ## Follow the app log
	$(COMPOSE) logs -f app

verify: ## Health check: containers, homepage, sitemap
	@$(COMPOSE) ps
	@echo
	@printf 'homepage  '; curl -s -o /dev/null -w '%{http_code}\n' http://127.0.0.1:3000/
	@printf 'admin     '; curl -s -o /dev/null -w '%{http_code}\n' http://127.0.0.1:3000/admin
	@printf 'sitemap   '; curl -s http://127.0.0.1:3000/sitemap.xml | grep -c '<loc>' | xargs echo 'URLs:'

psql: ## Open a psql shell on the database
	$(COMPOSE) exec postgres psql -U sustlabs -d sustlabs_cms

migrate-status: ## Show which migrations have run
	$(COMPOSE) run --rm tools pnpm payload migrate:status

## --- data -------------------------------------------------------------------

backup: ## Dump the database and both upload volumes, date-stamped
	$(COMPOSE) exec -T postgres pg_dump -U sustlabs -d sustlabs_cms \
	  --clean --if-exists > backup-$(STAMP).sql
	docker run --rm -v sustlabs-next_media:/m -v "$(PWD):/out" alpine \
	  tar czf /out/media-$(STAMP).tar.gz -C /m .
	docker run --rm -v sustlabs-next_documents:/d -v "$(PWD):/out" alpine \
	  tar czf /out/documents-$(STAMP).tar.gz -C /d .
	@ls -lh backup-$(STAMP).sql media-$(STAMP).tar.gz documents-$(STAMP).tar.gz

seed: ## FIRST DEPLOY ONLY. Overwrites CMS content by filename.
	@echo "'pnpm seed' overwrites documents matched by filename."
	@echo "Running it after the content team has started editing reverts their work."
	@echo "There is no undo."
	@read -p "Type 'seed' to continue: " a; [ "$$a" = "seed" ] || { echo "aborted"; exit 1; }
	@# Seeding writes through Payload, so the schema has to exist first.
	$(MAKE) migrate
	$(COMPOSE) run --rm tools pnpm seed
