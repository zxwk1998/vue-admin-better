import request from "axios";

export function getList() {
  return request({
    url: "https://cdn.jsdelivr.net/gh/prettier/prettier@master/docs/options.md",
    method: "get",
  });
}
