build:
	# npm --prefix=source i
	npm --prefix=source run build

safe-build:
	docker run --rm \
		-v $(PWD):/app \
		-w /app \
		node:20-alpine \
		sh -c "npm --prefix=source ci && npm --prefix=source run build"

fix:
	npm --prefix=source audit fix --force

dev:
	npm --prefix=source run dev

view-online:
	firefox ./public/online.html

view-online-auth:
	firefox ./public/online-auth.html
