FROM node:alpine

WORKDIR /app

RUN apk add --no-cache git && \
    git clone https://github.com/miltonCastaneda/domina-tec-test.git app && \
    cd app && \
    npm install

EXPOSE 3000

CMD ["npm", "start"]
