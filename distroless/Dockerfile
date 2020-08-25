FROM node:lts-alpine as build
WORKDIR /usr/build_app
COPY ./nodejs .
RUN npm ci --only=production

FROM gcr.io/distroless/nodejs
COPY --from=build /usr/build_app /app
WORKDIR /app
CMD ["ip.js"]