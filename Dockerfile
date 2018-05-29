FROM node:8
LABEL maintainer="juan@aspgems.com"

RUN mkdir -p /var/jsondb
ADD db.json /var/jsondb

RUN mkdir /teamleader
WORKDIR /teamleader

ADD . /teamleader

RUN npm install
