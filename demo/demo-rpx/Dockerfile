FROM nginx:1.15-alpine

COPY default.tmpl /etc/nginx/default.tmpl

RUN rm /usr/share/nginx/html/*

ENV NGINX_BACKEND_API="http://backend:8080" \
NGINX_FRONTEND_APP="http://frontend:81" \
NGINX_PORT=80 \
NGINX_SERVER_NAME=localhost \
NGINX_AUTO_INDENT=on

CMD /bin/sh -c "envsubst '\$NGINX_BACKEND_API \$NGINX_FRONTEND_APP \$NGINX_PORT \$NGINX_SERVER_NAME \$NGINX_AUTO_INDENT' < /etc/nginx/default.tmpl > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;' || cat /etc/nginx/conf.d/default.conf"