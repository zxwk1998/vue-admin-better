import request from "@/utils/request";

export function getNoticeList() {
  return request({
    url: "/notice/getList",
    method: "post",
  });
}
