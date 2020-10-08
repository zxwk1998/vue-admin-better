import request from '@/utils/request'

export function getTree(data) {
  return request({
    url: '/menuManagement/getTree',
    method: 'post',
    data,
  })
}

export function doEdit(data) {
  return request({
    url: '/menuManagement/doEdit',
    method: 'post',
    data,
  })
}

export function doDelete(data) {
  return request({
    url: '/menuManagement/doDelete',
    method: 'post',
    data,
  })
}
