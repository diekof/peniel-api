#!/bin/sh

npm install

npx prisma generate

npm run start:dev

exec "$@"