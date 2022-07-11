FROM nginx:1.16.0

WORKDIR /plutus-vendor

ADD dist/ /plutus-vendor/

ADD vendor-nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80