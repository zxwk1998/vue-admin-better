import Vue from "vue";
import ColorfullIcon from "zx-layouts/ColorfullIcon";

Vue.component("vab-colorful-icon", ColorfullIcon);
const req = require.context("./svg", false, /\.svg$/),
  requireAll = (requireContext) => {
    /*let a = requireContext.keys().map(requireContext);
    let arr = [];
    for (let i = 0; i < a.length; i++) {
      console.log();
      let icon = a[i].default.id;
      arr.push(icon);
    }
    console.log(JSON.stringify(arr));*/
    return requireContext.keys().map(requireContext);
  };
requireAll(req);
