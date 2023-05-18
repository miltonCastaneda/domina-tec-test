FROM node:alpine



RUN apk add --no-cache git
RUN git clone https://github.com/miltonCastaneda/domina-tec-test.git app 
RUN cd app/back/

WORKDIR /app/back/

RUN npm install



EXPOSE 3000

CMD ["npm", "start"]
