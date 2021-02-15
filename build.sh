git pull
docker-compose down
docker-compose up -d --build
docker image prune --filter "dangling=true" -f
