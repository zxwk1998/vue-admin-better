import request from '@/utils/request'

export function getList(data) {
  return request({
    url: '/changeLog/getList',
    method: 'post',
    data,
  })
}
