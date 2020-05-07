import Vue from "vue";
import App from "./App";
import store from "./store";
import router from "./router";
import "./plugins";

if (process.env.NODE_ENV === "test") {
  const { mockXHR } = require("../mock/static");
  mockXHR();
}

Vue.config.productionTip = false;

new Vue({
  el: "#BYUI_APP",
  router,
  store,
  render: (h) => h(App),
});
