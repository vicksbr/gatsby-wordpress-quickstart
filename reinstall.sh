#!/bin/bash
rm -rf wordpress
mkdir wordpress
cp -r './docker/wordpress-files/wp-content' wordpress
chown -R 33:33 ./wordpress/wp-content
docker-compose up --build


