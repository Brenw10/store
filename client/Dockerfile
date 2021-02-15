FROM node

ENV APP=/home/app
WORKDIR $APP

COPY . $APP

RUN yarn install

RUN yarn global add serve