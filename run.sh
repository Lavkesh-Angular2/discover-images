#!/bin/sh
if [ "$#" -ne 1 ]; then
    echo "Image tag version not found...."
    exit 1
fi

imageTagVersion=$1
echo ${imageTagVersion}

docker stop discover-images
docker rm discover-images
docker build -t discover-images:${imageTagVersion} .

docker run -d -p 8080:80 \
-e RUN_ENV=local \
--name discover-images discover-images:${imageTagVersion}

docker logs -f discover-images
