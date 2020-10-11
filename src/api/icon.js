import request from '@/utils/request'

export function getIconList(params) {
  return request({
    url: '/icon/getList',
    method: 'get',
    params,
  })
}
