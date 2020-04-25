import { getInfo, login, logout } from "@/api/user";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "@/utils/accessToken";
import { Notification } from "element-ui";
import defaultSettings from "@/config/settings";
import { thirteenBitTimestamp } from "@/utils";

const state = {
  accessToken: getAccessToken(),
  name: "",
  loginTimes: "",
  lastLoginTime: "",
  avatar: "",
  roles: [],
};
const mutations = {
  SET_TOKEN: (state, accessToken) => {
    state.accessToken = accessToken;
  },
  SET_NAME: (state, name) => {
    state.name = name;
  },
  SET_LAST_LOGIN_TIME: (state, lastLoginTime) => {
    state.lastLoginTime = lastLoginTime;
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar;
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles;
  },
};
const actions = {
  login({ commit }, userInfo) {
    const { userName, password } = userInfo;
    return new Promise((resolve, reject) => {
      login({ userName: userName.trim(), password: password })
        .then((response) => {
          const { data } = response;
          commit("SET_TOKEN", data[0].accessToken);
          setAccessToken(data[0].accessToken);
          const time = new Date();
          const hour = time.getHours();
          const thisTime =
            hour < 8
              ? "早上好"
              : hour <= 11
              ? "上午好"
              : hour <= 13
              ? "中午好"
              : hour < 18
              ? "下午好"
              : "晚上好";
          Notification({
            title: thisTime + "!",
            message: "欢迎登录" + defaultSettings.title,
            type: "success",
            duration: 2000,
          });
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.accessToken)
        .then((response) => {
          const { data } = response;
          if (!data) {
            reject("验证失败，请重新登录...");
          }
          let { roles, info } = data[0];
          let lastLoginTime = data[0].info.lastLoginTime;
          lastLoginTime = thirteenBitTimestamp(lastLoginTime);
          if (!roles || roles.length <= 0) {
            roles = ["*"];
          }
          commit("SET_ROLES", roles);
          commit("SET_NAME", info.name);
          commit("SET_LAST_LOGIN_TIME", lastLoginTime);
          commit("SET_AVATAR", "");
          resolve(data[0]);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.accessToken)
        .then(() => {
          commit("SET_TOKEN", "");
          removeAccessToken();
          location.reload();
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  resetToken({ commit }) {
    return new Promise((resolve) => {
      commit("SET_TOKEN", "");
      removeAccessToken();
      resolve();
    });
  },
};
export default { namespaced: true, state, mutations, actions };
