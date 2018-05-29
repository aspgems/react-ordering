FROM node:8
LABEL maintainer="info@aspgems.com"

RUN apt-get update -qq && \
	apt-get upgrade -y && \
	apt-get install -y sudo && \
	apt-get clean

RUN useradd aspgems -d /home/aspgems -m -s /bin/bash && \
    adduser aspgems sudo && \
    echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers


RUN mkdir -p /var/jsondb
ADD db.json /var/jsondb

RUN mkdir /teamleader
WORKDIR /teamleader

ADD package-lock.json package.json /teamleader/

RUN npm install

ADD . /teamleader/
