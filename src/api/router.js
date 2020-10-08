import request from '@/utils/request'

export function getRouterList(params) {
  return request({
    url: '/menu/navigate',
    method: 'get',
    params,
  })
}
