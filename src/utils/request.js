import axios from "axios";
import {
  invalidCode,
  messageDuration,
  noPermissionCode,
  requestTimeout,
  successCode,
  tokenName,
  contentType,
} from "@/config/settings";
import { Loading, Message } from "element-ui";
import store from "@/store";
import qs from "qs";
import router from "@/router";
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: requestTimeout,
  headers: {
    "Content-Type": contentType,
  },
});
let loadingInstance;
service.interceptors.request.use(
  (config) => {
    if (store.getters.accessToken) {
      config.headers[tokenName] = store.getters.accessToken;
    }
    if (process.env.NODE_ENV !== "test") {
      if (contentType === "application/x-www-form-urlencoded;charset=UTF-8") {
        if (config.data && !config.data.param) {
          config.data = qs.stringify(config.data);
        }
      }
    }

    if (
      config.url.includes("add") ||
      config.url.includes("edit") ||
      config.url.includes("set") ||
      config.url.includes("update") ||
      config.url.includes("import") ||
      config.url.includes("export")
    ) {
      loadingInstance = Loading.service();
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const errorMsg = (message) => {
  return Message({
    message: message,
    type: "error",
    duration: messageDuration,
  });
};

service.interceptors.response.use(
  (response) => {
    if (loadingInstance) {
      loadingInstance.close();
    }
    const { status, data } = response;
    const { code, msg } = data;
    if (code !== successCode && code !== 0) {
      switch (code) {
        case invalidCode:
          errorMsg(msg || `后端接口${code}异常`);
          store.dispatch("user/resetToken");
          break;
        case noPermissionCode:
          router.push({
            path: "/401",
          });
          break;
        default:
          errorMsg(msg || `后端接口${code}异常`);
          break;
      }
      return Promise.reject({ code, msg } || "Error");
    } else {
      return data;
    }
  },
  (error) => {
    if (loadingInstance) {
      loadingInstance.close();
    }
    /*网络连接过程异常处理*/
    let { message } = error;
    switch (message) {
      case "Network Error":
        message = "后端接口连接异常";
        break;
      case "timeout":
        message = "后端接口请求超时";
        break;
      case "Request failed with status code":
        message = "后端接口" + message.substr(message.length - 3) + "异常";
        break;
    }
    errorMsg(message || "后端接口未知异常");
    return Promise.reject(error);
  }
);
export default service;
