import { getInfo, login, logout } from "@/api/user";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "@/utils/accessToken";
import { resetRouter } from "@/router";
import { Notification } from "element-ui";
import defaultSettings from "@/config/settings";

const state = {
  accessToken: getAccessToken(),
  userName: "",
  roles: [],
};
const mutations = {
  SET_TOKEN: (state, accessToken) => {
    state.accessToken = accessToken;
  },
  SET_NAME: (state, userName) => {
    state.userName = userName;
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles;
  },
};
const actions = {
  login({ commit }, userInfo) {
    const { userName, password } = userInfo;
    return new Promise((resolve, reject) => {
      login({ userName, password })
        .then((response) => {
          const { accessToken } = response.data;
          commit("SET_TOKEN", accessToken);
          setAccessToken(accessToken);
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
          let { roles, userName } = data;
          if (!roles || roles.length <= 0) {
            roles = ["*"];
          }
          commit("SET_ROLES", roles);
          commit("SET_NAME", userName);
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  logout({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      logout(state.accessToken)
        .then(() => {
          commit("SET_TOKEN", "");
          commit("SET_ROLES", []);
          removeAccessToken();
          resetRouter();
          dispatch("tagsView/delAllViews", null, { root: true });
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
