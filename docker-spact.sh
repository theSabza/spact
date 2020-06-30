#!/bin/bash

set -e

DOCKER_IMAGE=$1
CONTAINER_NAME=$2
DOCKER_LOGIN=$3
DOCKER_PWD=$4

echo "The container name"
echo $CONTAINER_NAME
echo "the docker image name"
echo $DOCKER_IMAGE
echo "the docker login"
echo $DOCKER_LOGIN
echo "the docker pwd"
echo $DOCKER_PWD
# Check for arguments
if [[ $# -lt 4 ]] ; then
        echo '[ERROR] You must supply a Docker image, container, login and password'
        exit 1
fi

# Check for running container & stop it before starting a new one
if [ $(sudo docker inspect -f '{{.State.Running}}' $CONTAINER_NAME) = "true" ]; then
        sudo docker stop $CONTAINER_NAME
        echo "Stopped previous Container: $CONTAINER_NAME"
fi

# Removing  old stale  container before pulling a new one 
if [[ $(sudo docker inspect -f '{{.State.Running}}' $CONTAINER_NAME) = "false" ]]; then
        sudo docker rm $CONTAINER_NAME
fi

echo "Starting Docker image name: $DOCKER_IMAGE"

echo "Loging into Docker to run containers on our server"

echo $DOCKER_PWD | sudo docker login -u $DOCKER_LOGIN --password-stdin

sudo docker run -d --rm=true -p 6100:6100  --name $CONTAINER_NAME $DOCKER_IMAGE

sudo docker ps -a
