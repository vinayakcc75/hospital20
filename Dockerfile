# FROM node:12-alpine
# WORKDIR /hospital20-master
# COPY . .
# RUN apk update && apk add bash &&\
# CHMOD  ["./provision.sh"] 

FROM node:alpine
COPY . .
WORKDIR ./hospital20-master/FrontEnd

RUN mkdir -p logs && \
    npm install 

EXPOSE 3000
CMD npm start
