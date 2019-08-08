#! /bin/bash
echo 'start install ...'
branch="$1"
#projectPath='/data/cat/'
projectPath='/Users/sampsonwang/data/cat/'
git='https://github.com/gogoday/cat.git'
# dir
mkdir -p ${projectPath}
cd ${projectPath} 
# clone
git clone ${git} ./
git checkout -b ${branch} origin/${branch}
tnpm i 
tnpm run build
tnpm run admin

