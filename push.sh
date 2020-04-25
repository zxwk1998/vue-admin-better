#!/usr/bin/env bash
set -e
git init
git add -A
git commit -m 'deploy'
git push -f "https://${access_token}@github.com/chuzhixin/vue-admin-beautiful.git" master
git push -f "https://${access_token}@gitee.com/chu1204505056/vue-admin-beautiful.git" master
start "https://github.com/chuzhixin/vue-admin-beautiful"
exec /bin/bash




