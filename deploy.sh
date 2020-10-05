#!/usr/bin/env bash
set -e
npm run build
cd dist
touch .nojekyll
git init
git add -A
git commit -m 'deploy'
git push -f "https://${access_token}@gitee.com/chu1204505056/vue-admin-beautiful-mini.git" master:gh-pages
git push -f "https://${access_token}@gitee.com/chu1204505056/vue-admin-beautiful-antdv.git" master:gh-pages
start "https://gitee.com/chu1204505056/vue-admin-beautiful-mini/pages"
start "https://gitee.com/chu1204505056/vue-admin-beautiful-antdv/pages"
cd -
exec /bin/bash




