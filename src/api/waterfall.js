import request from "@/utils/request";

export function getWaterfallList(data) {
  return request({
    url: "/waterfall/list",
    method: "post",
    data,
  });
}
