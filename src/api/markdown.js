import request from 'axios'

export function getList() {
  return request({
    url: 'https://fastly.jsdelivr.net/gh/prettier/prettier@master/docs/options.md',
    method: 'get',
  })
}
