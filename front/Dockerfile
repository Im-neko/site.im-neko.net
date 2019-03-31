FROM node:9.8.0

ARG $FRONT_PORT

WORKDIR /src

COPY ./front /src

CMD ["bash", "-c", "npm install && npm run build && npm run start"]

EXPOSE 8080
