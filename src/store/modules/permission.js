import { asyncRoutes, constantRoutes } from "@/router";
import { getRouterList } from "@/api/router";
import { filterRoutes } from "@/utils/filterRoutes";

function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some((role) => route.meta.roles.includes(role));
  } else {
    return true;
  }
}

export function filterAsyncRoutes(routes, roles) {
  const res = [];
  routes.forEach((route) => {
    const tmp = { ...route };
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles);
      }
      res.push(tmp);
    }
  });
  return res;
}

const state = {
  routes: [],
  addRoutes: [],
};

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes;
    state.routes = constantRoutes.concat(routes);
  },
  SET_ALL_ROUTES: (state, routes) => {
    state.routes = constantRoutes.concat(routes);
  },
};

const actions = {
  setRoutes({ commit }, roles) {
    return new Promise((resolve) => {
      let accessedRoutes;
      if (
        roles.includes("superAdmin") ||
        roles.includes("admin") ||
        roles.includes("超级管理员")
      ) {
        accessedRoutes = asyncRoutes || [];
      } else {
        accessedRoutes = filterAsyncRoutes(asyncRoutes, roles);
      }
      commit("SET_ROUTES", accessedRoutes);
      resolve(accessedRoutes);
    });
  },
  setAllRoutes({ commit }) {
    return new Promise((resolve) => {
      getRouterList()
        .then((res) => {
          res.data.push({
            path: "*",
            redirect: "/404",
            hidden: true,
          });
          let accessRoutes = filterRoutes(res.data);
          commit("SET_ALL_ROUTES", accessRoutes);
          resolve(accessRoutes);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
