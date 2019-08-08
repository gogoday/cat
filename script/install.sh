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
npm i 
npm i pm2 -g
pm2 start app.js

