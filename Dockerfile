FROM nginx:alpine

COPY source-code.js /usr/share/nginx/html/sourcecode.js

RUN printf '<!doctype html><html><head><meta charset="utf-8"></head><body><script src="/source-code.js"></script></body></html>' \
  > /usr/share/nginx/html/index.html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
