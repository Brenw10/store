git pull
cp -i .env ./client/
cp -i .env ./server/
docker-compose down
docker-compose up -d --build
docker image prune --filter "dangling=true" -f
