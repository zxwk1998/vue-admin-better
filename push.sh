#!/usr/bin/env bash
set -e
git init
git add -A
git commit -m '🎉🎉🎉仓库重置到2020年9月29日，Vue2.6最后一个版本，之前版本不再支持，具体请查阅文档，Vue 3.0版本即将发布请耐心等待！！！'
git push -f "https://${access_token}@github.com/chuzhixin/vue-admin-beautiful.git" master
exec /bin/bash




