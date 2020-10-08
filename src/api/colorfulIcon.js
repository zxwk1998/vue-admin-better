import request from '@/utils/request'

export function getIconList(data) {
  return request({
    url: '/colorfulIcon/getList',
    method: 'post',
    data,
  })
}
