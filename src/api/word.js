import request from "@/utils/request";

export function getList(data) {
  return request({
    url: "/word/getList",
    method: "post",
    data,
  });
}

export function doEdit(data) {
  return request({
    url: "/word/doEdit",
    method: "post",
    data,
  });
}

export function doDelete(data) {
  return request({
    url: "/word/doDelete",
    method: "post",
    data,
  });
}
