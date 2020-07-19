/**
 * @copyright chuzhixin 1204505056@qq.com
 * @description 所有全局配置的状态管理，如无必要请勿修改
 */

import defaultSettings from "@/config/settings";

const { tagsBar, logo, layout, header, themeBar, skeleton } = defaultSettings;
const theme =
  JSON.parse(localStorage.getItem("vue-admin-beautiful-theme")) || "";
const state = {
  tagsBar: theme.tagsBar || tagsBar,
  logo,
  collapse: false,
  layout: theme.layout || layout,
  header: theme.header || header,
  skeleton,
  device: "desktop",
  themeBar,
};
const getters = {
  collapse: (state) => state.collapse,
  device: (state) => state.device,
  header: (state) => state.header,
  layout: (state) => state.layout,
  logo: (state) => state.logo,
  tagsBar: (state) => state.tagsBar,
  themeBar: (state) => state.themeBar,
  skeleton: (state) => state.skeleton,
};
const mutations = {
  changeLayout: (state, layout) => {
    if (layout) state.layout = layout;
  },
  changeHeader: (state, header) => {
    if (header) state.header = header;
  },
  changeTagsBar: (state, tagsBar) => {
    if (tagsBar) state.tagsBar = tagsBar;
  },
  changeCollapse: (state) => {
    state.collapse = !state.collapse;
  },
  foldSideBar: (state) => {
    state.collapse = true;
  },
  openSideBar: (state) => {
    state.collapse = false;
  },
  toggleDevice: (state, device) => {
    state.device = device;
  },
};
const actions = {
  changeLayout({ commit }, layout) {
    commit("changeLayout", layout);
  },
  changeHeader({ commit }, header) {
    commit("changeHeader", header);
  },
  changeTagsBar({ commit }, tagsBar) {
    commit("changeTagsBar", tagsBar);
  },
  changeCollapse({ commit }) {
    commit("changeCollapse");
  },
  foldSideBar({ commit }) {
    commit("foldSideBar");
  },
  openSideBar({ commit }) {
    commit("openSideBar");
  },
  toggleDevice({ commit }, device) {
    commit("toggleDevice", device);
  },
};
export default { state, getters, mutations, actions };
