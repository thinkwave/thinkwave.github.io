#!/usr/bin/env sh

# 오류 발생시 중단한다.
set -e

# 문서(md)를 build하여 html로 만든다. 
yarn build

# build가 output된 폴더로 이동한다. 
cd .vuepress/dist

# init + add + commit을 해준 다음
git init
git add -A
git commit -m '$1'

# https://<USERNAME>.github.io 에 배포하는 경우
# git push -f https://github.com/<USERNAME>/<USERNAME>.github.io.git master
git push -f https://github.com/thinkwave/thinkwave.github.io.git master

# https://<USERNAME>.github.io/<REPO> 에 배포하는 경우
# git push -f https://github.com/<USERNAME>/<REPO>.git master:gh-pages

cd -