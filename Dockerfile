FROM node:18-alpine

RUN apk add --no-cache bash

RUN npm install -g @nestjs/cli@10.0.5

ENV DOCKERIZE_VERSION v0.6.1

USER node

WORKDIR /home/node/app
