import request from "@/utils/request";

export function getList(data) {
  return request({
    url: "/goodsDetail/getList",
    method: "post",
    data,
  });
}
