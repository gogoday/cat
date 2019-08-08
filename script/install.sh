#! /bin/bash
echo 'start install ...'
branch='$1'
projectPath='/data/cat/'
#projectPath='/Users/sampsonwang/data/cat/'
git='https://github.com/gogoday/cat.git'
# dir
mkdir -p ${projectPath}
cd ${projectPath} 
# clone
git clone ${git} ./
git checkout -b ${branch} origin/${branch}
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm i 
cnpm run build
cnpm i pm2 -g
cnpm run admin

