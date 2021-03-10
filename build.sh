#!/bin/bash

git pull
sh env.sh
docker-compose down
docker-compose build
docker system prune -f