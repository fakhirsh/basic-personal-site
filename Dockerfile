FROM alpine

ADD config/default.conf /etc/nginx/http.d/default.conf

RUN apk add nginx

CMD ["/bin/sh", "-c", "exec nginx -g 'daemon off;';"]

WORKDIR /var/www/localhost/htdocs

EXPOSE 40001
