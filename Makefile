SHELL := /bin/sh

PROJECT_NAME := rogeriogoulart
APP_SERVICE := rogeriogoulart
COMPOSE := docker compose -p $(PROJECT_NAME)
PNPM ?= pnpm
DEV_PORT ?= 5174
PREVIEW_PORT ?= 4173

.PHONY: help install dev build preview lint clean docker-build docker-up docker-down docker-restart docker-logs status deploy stop

help:
	@echo "Comandos disponíveis:"
	@echo "  make install         - Instala dependências com pnpm"
	@echo "  make dev             - Roda ambiente local (fora do Docker)"
	@echo "  make build           - Gera build de produção"
	@echo "  make preview         - Faz preview local do build"
	@echo "  make lint            - Executa lint"
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
	$(PNPM) install --frozen-lockfile

dev:
	$(PNPM) run dev --host --port $(DEV_PORT)

build:
	$(PNPM) run build

preview:
	$(PNPM) run preview --host --port $(PREVIEW_PORT)

lint:
	$(PNPM) run lint

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
