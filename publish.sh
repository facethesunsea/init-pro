#!/bin/bash

## Build docker image.

version=$1

arch_name="$(uname -m)"

if [ $# = 0 ];then
    echo "Version must be provided. example: ./publish.sh 1.0.0"
    exit 1
fi
 
yarn install --ignore-engines

yarn run build

# imageRepo/namespace 镜像仓库/命名空间
# docker login --username=xxx imageRepo 登陆

if [ "${arch_name}" = "x86_64" ]; then
    docker build --rm=true -t imageRepo/namespace/vendor-test:$version -f Dockerfile .
    docker push imageRepo/namespace/vendor-test:$version
elif [ "${arch_name}" = "arm64" ]; then
    docker buildx build --platform linux/amd64 --rm=true -t imageRepo/namespace/vendor-test:$version -f Dockerfile .
    docker push imageRepo/namespace/vendor-test:$version
else
    echo "Unknown architecture: ${arch_name}"
    exit 1
fi


