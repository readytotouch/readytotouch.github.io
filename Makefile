build:
	# npm --prefix=source i
	npm --prefix=source run build

fix:
	npm --prefix=source audit fix --force

dev:
	npm --prefix=source run dev

view-online:
	firefox ./public/online.html

view-online-auth:
	firefox ./public/online-auth.html
