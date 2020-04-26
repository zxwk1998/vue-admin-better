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
  CHANGE_LAYOUT: (state, layout) => {
    if (layout) {
      state.layout = layout;
    }
  },
  CHANGE_HEADER: (state, header) => {
    if (header) {
      state.header = header;
    }
  },
  CHANGE_TAGS_VIEW: (state, tagsView) => {
    if (tagsView) {
      state.tagsView = tagsView;
    }
  },
  CHANGE_COLLAPSE: (state) => {
    state.collapse = !state.collapse;
  },
  FOLD_SIDE_BAR: (state) => {
    state.collapse = true;
  },
  OPEN_SIDE_BAR: (state) => {
    state.collapse = false;
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device;
  },
};
const actions = {
  changeLayout({ commit }, layout) {
    commit("CHANGE_LAYOUT", layout);
  },
  changeHeader({ commit }, header) {
    commit("CHANGE_HEADER", header);
  },
  changeTagsView({ commit }, tagsView) {
    commit("CHANGE_TAGS_VIEW", tagsView);
  },
  changeCollapse({ commit }) {
    commit("CHANGE_COLLAPSE");
  },
  foldSideBar({ commit }) {
    commit("FOLD_SIDE_BAR");
  },
  openSideBar({ commit }) {
    commit("OPEN_SIDE_BAR");
  },
  toggleDevice({ commit }, device) {
    commit("TOGGLE_DEVICE", device);
  },
};
export default { namespaced: true, state, mutations, actions };
