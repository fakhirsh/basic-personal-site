#!/bin/bash

docker build . -t personal-site
docker run -itd -p 8080:40001 --name personal --mount type=bind,source=./build,target=/var/www/localhost/htdocs personal-site
