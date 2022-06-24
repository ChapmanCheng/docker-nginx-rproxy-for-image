FROM nginx:alpine

COPY nginx /etc/nginx/conf.d

COPY img /usr/share/nginx/img