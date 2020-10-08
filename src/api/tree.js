import request from '@/utils/request'

export function getTreeList(data) {
  return request({
    url: '/tree/list',
    method: 'post',
    data,
  })
}
