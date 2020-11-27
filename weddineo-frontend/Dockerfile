### TO BUILD FROM MAIN DIRECTORY ###
# docker build --pull --rm -f "DOCKERFILE" -t weddineo-frontend:latest . #

### STAGE 1: Build ###

# We label our stage as 'builder'
FROM node:10.16-alpine as builder

# Argument for Enviroment
ARG  NG_BUILD_CONF=remote

# add git for commit versions
RUN apk add --no-cache git

RUN mkdir /ng-app
WORKDIR /ng-app
COPY weddineo-frontend/package.json weddineo-frontend/package-lock.json weddineo-frontend/decorate-angular-cli.js ./

RUN npm install --unsafe-perm

COPY ./weddineo-frontend .

## Build the angular app in production mode and store the artifacts in dist folder
# place for use ang enviroment
RUN npm run build

### STAGE 2: Setup ###

FROM nginx:1.13.3-alpine

## Copy our default nginx config
COPY weddineo-frontend/nginx/default.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder ng-app/dist/apps/weddineo-frontend /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
