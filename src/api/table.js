import request from "@/utils/request";

export function getList(data) {
  return request({
    url: "/table/list",
    method: "post",
    data,
  });
}
