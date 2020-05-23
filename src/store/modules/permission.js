import { asyncRoutes, constantRoutes } from "@/router";
import { getRouterList } from "@/api/router";
import { filterAsyncRoutes, filterRoutes } from "@/utils/handleRoutes";

const state = { routes: [], partialRoutes: [] };
const getters = {
  routes: (state) => state.routes,
  partialRoutes: (state) => state.partialRoutes,
};
const mutations = {
  setRoutes: (state, routes) => {
    state.routes = constantRoutes.concat(routes);
  },
  setAllRoutes: (state, routes) => {
    state.routes = constantRoutes.concat(routes);
  },
  setPartialRoutes: (state, routes) => {
    state.partialRoutes = constantRoutes.concat(routes);
  },
};
const actions = {
  setRoutes({ commit }, permissions) {
    return new Promise((resolve) => {
      let accessedRoutes;
      if (permissions.includes("admin")) {
        accessedRoutes = asyncRoutes || [];
      } else {
        accessedRoutes = filterAsyncRoutes(asyncRoutes, permissions);
      }
      commit("setRoutes", accessedRoutes);
      resolve(accessedRoutes);
    });
  },
  setAllRoutes({ commit }) {
    return new Promise((resolve) => {
      getRouterList()
        .then((res) => {
          res.data.push({ path: "*", redirect: "/404", hidden: true });
          let accessRoutes = filterRoutes(res.data);
          commit("setAllRoutes", accessRoutes);
          resolve(accessRoutes);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  setPartialRoutes({ commit }, accessRoutes) {
    return new Promise((resolve) => {
      commit("setPartialRoutes", accessRoutes);
      resolve(accessRoutes);
    });
  },
};
export default { state, getters, mutations, actions };
