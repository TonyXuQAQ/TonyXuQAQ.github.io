#!/bin/bash

CMD=$*

if [ -z "$CMD"];
then 
	CMD=/bin/bash
fi

home_dir=/home/tonyx/al-folio
container_name=poarroad

docker run \
	-v $home_dir:/miBoundary\
	--name=$container_name\
	--rm -it zhxu_miboundary $CMD