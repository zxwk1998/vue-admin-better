import request from "@/utils/request";

export function getList(data) {
  return request({
    url: "/goods/getList",
    method: "post",
    data,
  });
}
