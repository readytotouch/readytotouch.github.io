build:
	npm --prefix=source i
	npm --prefix=source run build

fix:
	npm --prefix=source audit fix --force

view-online:
	firefox ./public/online.html

view-online-auth:
	firefox ./public/online-auth.html
