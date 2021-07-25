import request from '@/utils/request'

export function getNoticeList() {
  return request({
    // url: '/notice/getList',
    url: 'https://851edf02-46eb-43e6-828d-64c7e483ea41.bspapp.com/http/getNotice',
    method: 'post',
  })
}
