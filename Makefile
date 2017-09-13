SHELL := /bin/bash
PATH := $(shell npm bin):$(PATH)

dev:
	NODE_ENV=development rollup -cw

prod:
	@NODE_ENV=production rollup -c
