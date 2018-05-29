FROM node:8
LABEL maintainer="info@aspgems.com"

RUN mkdir /teamleader
WORKDIR /teamleader

ADD package-lock.json package.json /teamleader/

RUN npm install

ADD . /teamleader/
