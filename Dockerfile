FROM node:8
LABEL maintainer="info@aspgems.com"

RUN mkdir -p /var/jsondb
ADD db.json /var/jsondb

RUN mkdir /teamleader
WORKDIR /teamleader

ADD package-lock.json package.json /teamleader/

RUN npm install

ADD . /teamleader/
