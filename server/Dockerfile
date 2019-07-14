FROM node:8.7.0-alpine

RUN mkdir -p /srv/app/marvelbook-server
WORKDIR /srv/app/marvelbook-server

COPY package.json /srv/app/marvelbook-server
COPY package-lock.json /srv/app/marvelbook-server

RUN npm install

COPY . /srv/app/marvelbook-server

CMD ["npm", "start"]