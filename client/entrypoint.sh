#!/bin/bash

if [ "$1" = "dev" ]; then 
  PORT=$2 yarn start
else
  yarn build
  serve -s build -l $2
fi;