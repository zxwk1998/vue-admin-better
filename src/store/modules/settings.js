import defaultSettings from "@/config/settings";
const { tagsView, logo, layout, header } = defaultSettings;
const theme = JSON.parse(localStorage.getItem("BYUI-VUE-THEME")) || "";
const state = {
  tagsView: theme.tagsView || tagsView,
  logo: logo,
  collapse: false,
  layout: theme.layout || layout,
  header: theme.header || header,
  device: "desktop",
};
const mutations = {
  changeLayout: (state, layout) => {
    if (layout) {
      state.layout = layout;
    }
  },
  changeHeader: (state, header) => {
    if (header) {
      state.header = header;
    }
  },
  changeTagsView: (state, tagsView) => {
    if (tagsView) {
      state.tagsView = tagsView;
    }
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
  changeTagsView({ commit }, tagsView) {
    commit("changeTagsView", tagsView);
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
export default { state, mutations, actions };
