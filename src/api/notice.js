import request from '@/utils/request'

export function getNoticeList() {
  return request({
    url: 'https://api.vuejs-core.cn/getNotice',
    method: 'get',
  })
}
