import request from "@/utils/request";

export function getList(data) {
  return request({
    url: "/face/list",
    method: "post",
    data,
  });
}

export function doEdit(data) {
  return request({
    url: "/face/edit",
    method: "post",
    data,
  });
}

export function doDelete(data) {
  return request({
    url: "/face/delete",
    method: "post",
    data,
  });
}
