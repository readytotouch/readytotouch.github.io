build:
	npm --prefix=source i
	npm --prefix=source run build

view-online:
	firefox ./public/online.html

view-online-auth:
	firefox ./public/online-auth.html
