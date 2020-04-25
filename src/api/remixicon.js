import request from "@/utils/request";

export function getIconList(data) {
  return request({
    url: "/remixicon/getList",
    method: "post",
    data,
  });
}
