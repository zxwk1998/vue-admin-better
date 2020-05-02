import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";

Vue.use(Vuex);
const files = require.context("./modules", false, /\.js$/);
const modules = {};

files.keys().forEach((key) => {
  modules[key.replace(/(\.\/|\.js)/g, "")] = files(key).default;
});
const store = new Vuex.Store({
  namespaced: true,
  modules,
  getters,
});
export default store;
