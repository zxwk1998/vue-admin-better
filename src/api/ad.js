import request from '@/utils/request'

export function getList(data) {
  return request({
    //url: '/ad/getList',
    url: 'https://851edf02-46eb-43e6-828d-64c7e483ea41.bspapp.com/http/getAd',
    method: 'get',
    data,
  })
}
