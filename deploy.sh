#强制推送
#!/usr/bin/env bash
set -e
npm run build
cd dist
touch .nojekyll
git init
git add -A
git commit -m 'deploy'
git push -f "https://${access_token}@gitee.com/chu1204505056/vue-admin-beautiful.git" master:gh-pages
git push -f "https://${access_token}@gitee.com/chu1204505056/vue-admin-beautiful-element.git" master:gh-pages
start "https://gitee.com/chu1204505056/vue-admin-beautiful/pages"
start "https://gitee.com/chu1204505056/vue-admin-beautiful-element/pages"
git push -f "https://${access_token}@github.com/chuzhixin/vue-admin-beautiful.git" master:gh-pages
cd -
exec /bin/bash




