FROM node:16-alpine

ENV NODE_ENV production

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app/

RUN npm install

RUN npm run build

EXPOSE 9000

CMD [ "npm", "start"]