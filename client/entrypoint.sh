#!/bin/bash

if [ "$1" = "dev" ]; then 
  npm start
else
  npm run build && serve -s build
fi;