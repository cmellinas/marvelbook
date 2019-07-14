FROM node:8.7.0-alpine

RUN mkdir -p /srv/app/marvelbook-client
WORKDIR /srv/app/marvelbook-client

COPY package.json /srv/app/marvelbook-client
COPY package-lock.json /srv/app/marvelbook-client

RUN npm install

COPY . /srv/app/marvelbook-client

CMD ["npm", "start"]