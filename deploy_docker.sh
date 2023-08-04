#!/bin/bash

docker build . -t fakhirshaheen/basic-personal-site
docker run -itd -p 8080:40001 --name basic-personal-site --mount type=bind,source=./build,target=/var/www/localhost/htdocs fakhirshaheen/basic-personal-site
