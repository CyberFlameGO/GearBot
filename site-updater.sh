#! /bin/sh
python3 -m mkdocs build
cp -a site/. /var/www/gearbot.rocks/html