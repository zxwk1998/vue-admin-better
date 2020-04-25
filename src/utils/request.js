import axios from "axios";
import {
  errorCode,
  invalidCode,
  messageDuration,
  noPermissionCode,
  requestTimeout,
  successCode,
  tokenName,
} from "@/config/settings";
import { Loading, Message } from "element-ui";
import store from "@/store";
import qs from "qs";
import router from "@/router";

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: requestTimeout,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8", //这里是个坑哦，后端数据接收方式走的是application/x-www-form-urlencoded;charset=UTF-8，大多数公司可能接收方式不是这种
  },
});
let loadingInstance;
service.interceptors.request.use(
  (config) => {
    if (store.getters.accessToken) {
      config.headers[tokenName] = store.getters.accessToken;
    }
    //RSA加密不走qs转义,默认传json给后端
    if (process.env.NODE_ENV !== "test") {
      //这里是个坑哦，后端数据接收方式走的是application/x-www-form-urlencoded;charset=UTF-8，大多数公司可能接收方式不是这种
      if (config.data && !config.data.param) {
        config.data = qs.stringify(config.data);
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
      if (code == invalidCode) {
        errorMsg(msg || "后端接口402异常");
        store.dispatch("user/resetToken");
      } else if (code == errorCode) {
        errorMsg(msg || "后端接口500异常");
      } else if (code == noPermissionCode) {
        router.push({
          path: "/401",
        });
      } else {
        errorMsg(msg || "后端接口code异常");
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
    if (message == "Network Error") {
      message = "后端接口连接异常";
    }
    if (message.includes("timeout")) {
      message = "后端接口请求超时";
    }
    if (message.includes("Request failed with status code")) {
      message = "后端接口" + message.substr(message.length - 3) + "异常";
    }
    errorMsg(message || "后端接口未知异常");
    return Promise.reject(error);
  }
);
export default service;
