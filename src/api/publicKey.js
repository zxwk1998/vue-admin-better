import request from "@/utils/request";

export function getPublicKey(data) {
  return request({
    url: "/publicKey",
    method: "post",
  });
}
