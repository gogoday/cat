#! /bin/bash
echo 'start install ...'
projectPath='/data/cat/'
#projectPath='/Users/sampsonwang/data/cat/'
git='https://github.com/gogoday/cat.git'
# dir
mkdir -p ${projectPath}
cd ${projectPath} 
# clone
git clone ${git} ./
git checkout -b release origin/release
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm i 
cnpm i pm2 -g
cnpm run admin

