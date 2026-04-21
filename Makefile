SHELL := /bin/sh

NPM ?= npm

.PHONY: help install dev build lint preview test test-watch test-coverage predeploy deploy clean all

help:
	@echo "Available targets:"
	@echo "  install        Install project dependencies"
	@echo "  dev            Start Vite development server"
	@echo "  build          Build production bundle"
	@echo "  lint           Run ESLint"
	@echo "  preview        Preview production build locally"
	@echo "  test           Run tests once"
	@echo "  test-watch     Run tests in watch mode"
	@echo "  test-coverage  Run tests with coverage"
	@echo "  clean          Remove build and coverage artifacts"
	@echo "  all            Lint, test, and build"

install:
	$(NPM) install

dev:
	$(NPM) run dev

build:
	$(NPM) run build

lint:
	$(NPM) run lint

preview:
	$(NPM) run preview

test:
	$(NPM) run test

test-watch:
	$(NPM) run test:watch

test-coverage:
	$(NPM) run test:coverage

clean:
	rm -rf dist coverage

all: lint test build