import request from "@/utils/request";

export function getIconList(data) {
  return request({
    url: "/colorfulIcon/list",
    method: "post",
    data,
  });
}
