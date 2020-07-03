import "core-js/stable";
import "regenerator-runtime/runtime";
import Vue from "vue";
import App from "./App";
import store from "./store";
import router from "./router";
import "./plugins";

if (
  process.env.VUE_APP_PREVIEW === "true" ||
  process.env.NODE_ENV === "development"
) {
  const { mockXHR } = require("../mock/static");
  mockXHR();
}

Vue.config.productionTip = false;

new Vue({
  el: "#vue-admin-beautiful",
  router,
  store,
  render: (h) => h(App),
});
