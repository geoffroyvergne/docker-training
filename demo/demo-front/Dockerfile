FROM nginx:1.15-alpine

COPY default.tmpl /etc/nginx/default.tmpl

RUN rm /usr/share/nginx/html/*

COPY dist/demo-front/ /usr/share/nginx/html/

ENV NGINX_PORT=81 \
NGINX_SERVER_NAME=localhost \
NGINX_AUTO_INDENT=on \
API_URL=""

CMD /bin/sh -c "envsubst '\$NGINX_PORT \$NGINX_SERVER_NAME \$NGINX_AUTO_INDENT' < /etc/nginx/default.tmpl > /etc/nginx/conf.d/default.conf && \
envsubst '\$API_URL' < /usr/share/nginx/html/assets/settings.template.json > /usr/share/nginx/html/assets/settings.json && \
nginx -g 'daemon off;' || cat /etc/nginx/conf.d/default.conf"