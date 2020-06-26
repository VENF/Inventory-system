FROM node:alpine3.10

WORKDIR /app

COPY . .

RUN npm run build

EXPOSE 4000

CMD [ "npm", "start" ]