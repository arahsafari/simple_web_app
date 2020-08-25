FROM node:lts-alpine as build
WORKDIR /usr/build_app
COPY ./nodejs .
RUN npm ci --only=production


FROM alpine
ENV ALPINE_MIRROR "http://dl-cdn.alpinelinux.org/alpine"

COPY --from=build /usr/build_app /app
RUN echo "${ALPINE_MIRROR}/edge/main" >> /etc/apk/repositories \
    && apk add --no-cache nodejs-current  --repository="http://dl-cdn.alpinelinux.org/alpine/edge/community"
CMD ["node" , "/app/ip.js"]