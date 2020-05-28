import Vue from "vue";
import { getInfo, login, logout } from "@/api/user";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "@/utils/accessToken";
import { resetRouter } from "@/router";
import { tokenName, title } from "@/config/settings";

const state = {
  accessToken: getAccessToken(),
  userName: "",
  avatar: "",
  permissions: [],
};
const getters = {
  accessToken: (state) => state.accessToken,
  userName: (state) => state.userName,
  avatar: (state) => state.avatar,
  permissions: (state) => state.permissions,
};
const mutations = {
  setAccessToken: (state, accessToken) => {
    state.accessToken = accessToken;
  },
  setUserName: (state, userName) => {
    state.userName = userName;
  },
  setAvatar: (state, avatar) => {
    state.avatar = avatar;
  },
  setPermissions: (state, permissions) => {
    state.permissions = permissions;
  },
};
const actions = {
  async login({ commit }, userInfo) {
    const { data } = await login(userInfo);
    const accessToken = data[tokenName];
    commit("setAccessToken", accessToken);
    setAccessToken(accessToken);
    const hour = new Date().getHours();
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
    Vue.prototype.$baseNotify(`欢迎登录${title}`, `${thisTime}！`);
  },
  async getInfo({ commit, state }) {
    const { data } = await getInfo(state.accessToken);
    if (!data) {
      Vue.prototype.$baseMessage("验证失败，请重新登录...", "error");
      return false;
    }
    let { permissions, userName, avatar } = data;
    commit("setPermissions", permissions);
    commit("setUserName", userName);
    commit("setAvatar", avatar);
    return permissions;
  },
  async logout({ commit, dispatch }) {
    await logout(state.accessToken);
    commit("setAccessToken", "");
    commit("setPermissions", []);
    removeAccessToken();
    resetRouter();
    await dispatch("tagsBar/delAllRoutes", null, { root: true });
  },
  resetAccessToken({ commit }) {
    commit("setAccessToken", "");
    removeAccessToken();
  },
};
export default { state, getters, mutations, actions };
