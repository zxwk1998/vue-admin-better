import request from "@/utils/request";

export function getQdysjList(params) {
  return request({
    url: "http://jskou.com:3003/contents/list?type=0",
    method: "get",
    params,
  });
}

export function getFbzbList(params) {
  return request({
    url: "http://jskou.com:3003/contents/list?type=1",
    method: "get",
    params,
  });
}
