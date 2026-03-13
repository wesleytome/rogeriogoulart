SHELL := /bin/sh

PROJECT_NAME := rogeriogoulart
APP_SERVICE := rogeriogoulart
COMPOSE := docker compose -p $(PROJECT_NAME)
PNPM ?= pnpm
LOCAL_PNPM := $(shell command -v $(PNPM) 2>/dev/null)
PNPM_RUN := $(if $(LOCAL_PNPM),$(PNPM),$(COMPOSE) exec -T $(APP_SERVICE) $(PNPM))
DEV_PORT ?= 5174
PREVIEW_PORT ?= 4173

.PHONY: help install dev build preview typecheck lint check predeploy clean docker-build docker-up docker-down docker-restart docker-logs status deploy stop

help:
	@echo "Comandos disponíveis:"
	@echo "  make install         - Instala dependências com pnpm"
	@echo "  make dev             - Roda ambiente local (fora do Docker)"
	@echo "  make build           - Gera build de produção"
	@echo "  make preview         - Faz preview local do build"
	@echo "  make typecheck       - Executa TypeScript sem gerar deploy"
	@echo "  make lint            - Executa lint"
	@echo "  make check           - Executa lint + build (pré-produção)"
	@echo "  make predeploy       - Roda check e orienta a publicar só se tudo passar"
	@echo "  make clean           - Remove pasta dist"
	@echo "  make docker-build    - Build da imagem Docker"
	@echo "  make docker-up       - Sobe ambiente Docker em background"
	@echo "  make docker-down     - Derruba ambiente Docker"
	@echo "  make docker-restart  - Reinicia ambiente Docker com build"
	@echo "  make docker-logs     - Acompanha logs do container"
	@echo "  make status          - Mostra status dos containers"
	@echo "  make deploy          - Alias para docker-up"
	@echo "  make stop            - Alias para docker-down"

install:
	$(PNPM_RUN) install --frozen-lockfile

dev:
	$(PNPM) run dev --host --port $(DEV_PORT)

build:
	$(PNPM_RUN) run build

preview:
	$(PNPM_RUN) run preview --host --port $(PREVIEW_PORT)

typecheck:
	$(PNPM_RUN) run typecheck

lint:
	$(PNPM_RUN) run lint

check: lint build

predeploy: check
	@echo ""
	@echo "Checks concluídos com sucesso."
	@echo "Antes de enviar para produção, revise o diff e publique só com build/lint aprovados."

clean:
	rm -rf dist

docker-build:
	$(COMPOSE) build

docker-up:
	$(COMPOSE) up -d --build

docker-down:
	$(COMPOSE) down

docker-restart:
	$(COMPOSE) down && $(COMPOSE) up -d --build

docker-logs:
	$(COMPOSE) logs -f $(APP_SERVICE)

status:
	$(COMPOSE) ps

deploy: docker-up

stop: docker-down
