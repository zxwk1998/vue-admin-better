import request from '@/utils/request'

export function getList(data) {
  return request({
    url: '/ad/getList',
    method: 'get',
    data,
  })
}
