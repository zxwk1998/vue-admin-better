import request from "@/utils/request";

export function getList(data) {
  return request({
    url: "/userManagement/getList",
    method: "post",
    data,
  });
}

export function doEdit(data) {
  return request({
    url: "/userManagement/doEdit",
    method: "post",
    data,
  });
}

export function doDelete(data) {
  return request({
    url: "/userManagement/doDelete",
    method: "post",
    data,
  });
}
