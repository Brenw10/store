FROM node

ENV APP=/home/app
WORKDIR $APP

COPY . $APP

RUN npm install

RUN yarn global add serve

RUN chmod +x $APP/entrypoint.sh