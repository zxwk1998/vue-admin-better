import request from "@/utils/request";

export function getList(data) {
  return request({
    url: "/goodsList/getList",
    method: "post",
    data,
  });
}
