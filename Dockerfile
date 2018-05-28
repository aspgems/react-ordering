FROM node:8
LABEL maintainer="juan@aspgems.com"

RUN mkdir /teamleader
WORKDIR /teamleader

ADD . /teamleader

RUN npm install
