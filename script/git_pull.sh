#! /bin/bash
echo 'start git pull ...'
cd /data/cat
if [ $1 ];then
  env="$1"
else
	env="dev"
fi
echo "env: ${env}"
git pull origin ${env}
npm run build
pm2 restart cat

