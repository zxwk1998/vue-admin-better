import request from '@/utils/request'

export function getList() {
  return request({
    url: 'https://api.vuejs-core.cn/getAd',
    method: 'get',
  })
}
