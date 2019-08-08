#! /bin/bash
echo 'start git pull ...'
cd /data/cat
git pull origin $1
pm2 restart cat

