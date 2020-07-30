import axios from "axios";
import {
  baseURL,
  contentType,
  invalidCode,
  messageDuration,
  noPermissionCode,
  requestTimeout,
  successCode,
  tokenName,
  debounce,
} from "@/config/settings";
import { Loading, Message } from "element-ui";
import store from "@/store";
import qs from "qs";
import router from "@/router";
import _ from "lodash";
import { isArray } from "@/utils/validate";

const service = axios.create({
  baseURL,
  timeout: requestTimeout,
  headers: {
    "Content-Type": contentType,
  },
});
let loadingInstance;
service.interceptors.request.use(
  (config) => {
    if (store.getters["user/accessToken"]) {
      config.headers[tokenName] = store.getters["user/accessToken"];
    }
    if (config.data) {
      //这里会过滤所有为空、0、false的key，如果不需要请自行注释
      config.data = _.pickBy(config.data, _.identity);
    }
    if (process.env.NODE_ENV !== "preview") {
      if (contentType === "application/x-www-form-urlencoded;charset=UTF-8") {
        if (config.data) {
          config.data = qs.stringify(config.data);
        }
      }
    }
    const needLoading = () => {
      let status = false;
      debounce.forEach((item) => {
        if (_.includes(config.url, item)) {
          status = true;
        }
      });
      return status;
    };
    if (needLoading()) {
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
    const { status, data, config } = response;
    const { code, msg } = data;
    // 操作正常Code数组
    let codeVerificationArray = isArray(successCode)
      ? [...successCode]
      : [...[successCode]];
    // 是否操作正常
    if (codeVerificationArray.includes(code)) {
      return data;
    } else {
      switch (code) {
        case invalidCode:
          errorMsg(msg || `后端接口${code}异常`);
          store.dispatch("user/resetAccessToken").catch(() => {});
          break;
        case noPermissionCode:
          router.push({ path: "/401" }).catch(() => {});
          break;
        default:
          errorMsg(msg || `后端接口${code}异常`);
          break;
      }
      return Promise.reject(
        "vue-admin-beautiful请求异常拦截:" +
          JSON.stringify({ url: config.url, code, msg }) || "Error"
      );
    }
  },
  (error) => {
    if (loadingInstance) {
      loadingInstance.close();
    }
    /*网络连接过程异常处理*/
    let { message } = error;
    if (message === "Network Error") {
      message = "后端接口连接异常";
    }
    if (message.includes("timeout")) {
      message = "后端接口请求超时";
    }
    if (message.includes("Request failed with status code")) {
      message = "后端接口" + message.substr(message.length - 3) + "异常";
    }
    if (error.response) {
      const { data } = error.response;
      message = data.msg;
    }
    errorMsg(message || "后端接口未知异常");
    return Promise.reject(error);
  }
);
export default service;
