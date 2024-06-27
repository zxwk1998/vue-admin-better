import request from 'axios'

export function getRepos(params) {
  return request({
    url: 'https://api.github.com/repos/zxwk1998/vue-admin-better',
    method: 'get',
    params,
    timeout: 10000,
  })
}

export function getStargazers(params) {
  return request({
    url: 'https://api.github.com/repos/zxwk1998/vue-admin-better/stargazers',
    method: 'get',
    params,
    timeout: 10000,
  })
}
