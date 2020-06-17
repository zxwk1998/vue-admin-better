/**
 * @copyright chuzhixin 1204505056@qq.com
 * @description 路由拦截状态管理，目前两种模式：all模式与intelligence模式，其中partialRoutes是菜单暂未使用
 */
import { asyncRoutes, constantRoutes } from "@/router";
import { getRouterList } from "@/api/router";
import { filterAllRoutes, filterAsyncRoutes } from "@/utils/handleRoutes";

const state = { routes: [], partialRoutes: [] };
const getters = {
  routes: (state) => state.routes,
  partialRoutes: (state) => state.partialRoutes,
};
const mutations = {
  setRoutes(state, routes) {
    state.routes = constantRoutes.concat(routes);
  },
  setAllRoutes(state, routes) {
    state.routes = constantRoutes.concat(routes);
  },
  setPartialRoutes(state, routes) {
    state.partialRoutes = constantRoutes.concat(routes);
  },
};
const actions = {
  async setRoutes({ commit }, permissions) {
    let accessedRoutes = [];
    if (permissions.includes("admin")) {
      accessedRoutes = asyncRoutes;
    } else {
      accessedRoutes = await filterAsyncRoutes(asyncRoutes, permissions);
    }
    commit("setRoutes", accessedRoutes);
    return accessedRoutes;
  },
  async setAllRoutes({ commit }) {
    let { data } = await getRouterList();
    data.push({ path: "*", redirect: "/404", hidden: true });
    let accessRoutes = filterAllRoutes(data);
    commit("setAllRoutes", accessRoutes);
    return accessRoutes;
  },
  setPartialRoutes({ commit }, accessRoutes) {
    commit("setPartialRoutes", accessRoutes);
    return accessRoutes;
  },
};
export default { state, getters, mutations, actions };
