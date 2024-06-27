#强制推送
#!/usr/bin/env bash
set -e
npm run build
cd dist
touch .nojekyll
git init
git add -A
git commit -m 'deploy'
git push -f "https://${access_token}@gitee.com/chu1204505056/vue-admin-better.git" master:gh-pages
git push -f "https://${access_token}@gitee.com/chu1204505056/vue-admin-better-element.git" master:gh-pages
start "https://gitee.com/chu1204505056/vue-admin-better/pages"
start "https://gitee.com/chu1204505056/vue-admin-better-element/pages"
git push -f "https://${access_token}@github.com/zxwk1998/vue-admin-better.git" master:gh-pages
cd -
exec /bin/bash




