import request from "@/utils/request";

export function getList(data) {
  return request({
    url: "/blacklist/getList",
    method: "post",
    data,
  });
}
