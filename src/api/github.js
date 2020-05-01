import request from "@/utils/request";

export function getRepos(params) {
  return request({
    url: "https://api.github.com/repos/chuzhixin/vue-admin-beautiful",
    method: "get",
    params,
  });
}

export function getStargazers(params) {
  return request({
    url:
      "https://api.github.com/repos/chuzhixin/vue-admin-beautiful/stargazers",
    method: "get",
    params,
  });
}
