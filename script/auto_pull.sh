#! /bin/bash

basepath=$(cd `dirname $0`; pwd)
cd ${basepath}/../
echo `project path is:`
pwd

git pull origin release 

