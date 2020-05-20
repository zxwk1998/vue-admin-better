import { asyncRoutes, constantRoutes } from "@/router";
import { getRouterList } from "@/api/router";
import { filterRoutes, filterAsyncRoutes } from "@/utils/handleRoutes";

const state = { routes: [], addRoutes: [] };
const mutations = {
  setRoutes: (state, routes) => {
    state.addRoutes = routes;
    state.routes = constantRoutes.concat(routes);
  },
  setAllRoutes: (state, routes) => {
    state.routes = constantRoutes.concat(routes);
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
};
export default { state, mutations, actions };
