#!/bin/bash

if [ "$1" = "dev" ]; then 
  yarn start
else
  yarn build
  serve -s build -l 3000
fi;