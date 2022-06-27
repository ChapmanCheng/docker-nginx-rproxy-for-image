FROM node:alpine

USER node

WORKDIR /home/node

COPY ./package.json .

RUN npm i

COPY ./src ./src

EXPOSE 3000

CMD [ "npm", "start" ]