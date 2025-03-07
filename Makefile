BASE_URL ?= https://example.com

.PHONY: help
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
.DEFAULT_GOAL := help

.PHONY: install-deps-dev
install-deps-dev: ## install dependencies for development
	@# https://gohugo.io/installation/
	@which hugo || go install github.com/gohugoio/hugo@latest

.PHONY: build
build: ## build applications
	hugo --minify --buildDrafts --gc --baseURL $(BASE_URL)

.PHONY: ci-test
ci-test: install-deps-dev build ## run CI test

.PHONY: run
run: ## run applications
	hugo server
