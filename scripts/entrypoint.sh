#!/bin/sh -x

export USER_UID=`stat -c %u /teamleader/package.json`
export USER_GID=`stat -c %g /teamleader/package.json`


usermod -u $USER_UID aspgems 2> /dev/null
groupmod -g $USER_GID aspgems 2> /dev/null
usermod -g $USER_GID aspgems 2> /dev/null

if [ ! -d /teamleader/node_modules ]; then
	npm install

	chown -R -h $USER_UID /teamleader/node_modules 2> /dev/null
	chgrp -R -h $USER_GID /teamleader/node_modules 2> /dev/null
fi

/usr/bin/sudo -EH -u aspgems "$@"
