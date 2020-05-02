import request from "@/utils/request";

export function getIconList(data) {
  return request({
    url: "/remixIcon/getList",
    method: "post",
    data,
  });
}
