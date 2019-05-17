FROM alpine:latest

ENTRYPOINT ["nginx", "-c",  "/nginx.conf"]

RUN apk add --no-cache nginx
ADD nginx.conf /

COPY docs /app