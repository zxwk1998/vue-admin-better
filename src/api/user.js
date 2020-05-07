import request from "@/utils/request";
import { encryptedData } from "@/utils/encrypt";
import { getPublicKey } from "@/api/publicKey";
import { loginRSA, contentType } from "@/config/settings";
export async function login(data) {
  let headers = {
    "Content-Type": contentType,
  };
  if (loginRSA) {
    data = await encryptedData(data);
    await getPublicKey().then((res) => {
      if (!res.data.mockServer)
        headers = { "Content-Type": "application/json;charset=utf-8" };
    });
  }

  return request({
    url: "/login",
    method: "post",
    data,
    headers: headers,
  });
}

export function getInfo(accessToken) {
  return request({
    url: "/user/info",
    method: "post",
    data: {
      accessToken,
    },
  });
}

export function logout() {
  return request({
    url: "/logout",
    method: "post",
  });
}
