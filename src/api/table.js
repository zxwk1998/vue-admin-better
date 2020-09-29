import request from "@/utils/request";

export function getList(data) {
  return request({
    url: "/table/getList",
    method: "post",
    data,
  });
}

export function doEdit(data) {
  return request({
    url: "/table/doEdit",
    method: "post",
    data,
  });
}

export function doDelete(data) {
  return request({
    url: "/table/doDelete",
    method: "post",
    data,
  });
}
