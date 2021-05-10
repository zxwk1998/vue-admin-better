#!/bin/bash

npm run build

docker build -t vue-admin-beautiful .

docker run --name vue-admin-beautiful --restart=always -p 80:80 -v /var/nginx:/var/data -d vue-admin-beautiful