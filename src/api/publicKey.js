import request from "@/utils/request";

export function getPublicKey() {
  return request({
    url: "/publicKey",
    method: "post",
  });
}
