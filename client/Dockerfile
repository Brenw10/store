FROM node

ENV APP=/home/app
WORKDIR $APP

COPY . $APP

RUN npm install

CMD ["npm","start"]