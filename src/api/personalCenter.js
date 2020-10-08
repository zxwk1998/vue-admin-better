import request from '@/utils/request'

export function getList(data) {
  return request({
    url: '/personalCenter/getList',
    method: 'post',
    data,
  })
}

export function doEdit(data) {
  return request({
    url: '/personalCenter/doEdit',
    method: 'post',
    data,
  })
}

export function doDelete(data) {
  return request({
    url: '/personalCenter/doDelete',
    method: 'post',
    data,
  })
}
