import request from 'axios'

export function getRepos(params) {
  return request({
    url: 'https://api.github.com/repos/chuzhixin/vue-admin-beautiful',
    method: 'get',
    params,
    timeout: 10000,
  })
}

export function getStargazers(params) {
  return request({
    url:
      'https://api.github.com/repos/chuzhixin/vue-admin-beautiful/stargazers',
    method: 'get',
    params,
    timeout: 10000,
  })
}
