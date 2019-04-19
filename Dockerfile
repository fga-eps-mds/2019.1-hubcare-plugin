FROM node:carbon-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install 

COPY . .
EXPOSE 35729
CMD npm run dev chrome