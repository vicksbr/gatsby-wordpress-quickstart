#!/bin/sh
# wait-for-wordpress.sh

set -e

cmd="$@"

until $(curl --output /dev/null --silent --head --fail http://localhost); do
    >&2 echo  "Wordpress is unavailable - sleeping"
    sleep 5
done

>&2 echo "Wordpress is up - executing command"
exec $cmd