import request from "@/utils/request";

export function getIconList(data) {
  return request({
    url: "/icon/list",
    method: "post",
    data,
  });
}
