#! /bin/bash

projectPath=`/data/cat/`
git=`https://github.com/gogoday/cat.git`

mkdir -p ${projectPath}
cd ${projectPath} 

git clone git
git checkout -b release origin/release
