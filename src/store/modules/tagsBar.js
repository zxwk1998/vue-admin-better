/**
 * @copyright chuzhixin 1204505056@qq.com
 * @description tagsBar多标签页逻辑，此处借鉴了很多开源项目，踩了很多坑，请勿修改
 */

const state = {
  visitedRoutes: [],
};
const getters = {
  visitedRoutes: (state) => state.visitedRoutes,
};
const mutations = {
  addVisitedRoute(state, view) {
    if (state.visitedRoutes.some((item) => item.path === view.path)) return;
    state.visitedRoutes.push(
      Object.assign({}, view, { title: view.meta.title })
    );
  },
  delVisitedRoute(state, view) {
    state.visitedRoutes.forEach((item, index) => {
      if (item.path === view.path) {
        state.visitedRoutes.splice(index, 1);
      }
    });
  },
  delOthersVisitedRoute(state, view) {
    state.visitedRoutes = state.visitedRoutes.filter((item) => {
      return item.meta.affix || item.path === view.path;
    });
  },
  delLeftVisitedRoute(state, view) {
    let index = state.visitedRoutes.length;
    state.visitedRoutes = state.visitedRoutes.filter((item) => {
      if (item.name === view.name) {
        index = state.visitedRoutes.indexOf(item);
      }
      return item.meta.affix || index <= state.visitedRoutes.indexOf(item);
    });
  },
  delRightVisitedRoute(state, view) {
    let index = state.visitedRoutes.length;
    state.visitedRoutes = state.visitedRoutes.filter((item) => {
      if (item.name === view.name) {
        index = state.visitedRoutes.indexOf(item);
      }
      return item.meta.affix || index >= state.visitedRoutes.indexOf(item);
    });
  },
  delAllVisitedRoutes(state) {
    state.visitedRoutes = state.visitedRoutes.filter((item) => item.meta.affix);
  },
  updateVisitedRoute(state, view) {
    state.visitedRoutes.forEach((item) => {
      if (item.path === view.path) {
        item = Object.assign(item, view);
      }
    });
  },
};
const actions = {
  addVisitedRoute({ commit }, view) {
    commit("addVisitedRoute", view);
  },
  async delRoute({ dispatch, state }, view) {
    await dispatch("delVisitedRoute", view);
    return {
      visitedRoutes: [...state.visitedRoutes],
    };
  },
  delVisitedRoute({ commit, state }, view) {
    commit("delVisitedRoute", view);
    return [...state.visitedRoutes];
  },
  async delOthersRoutes({ dispatch, state }, view) {
    await dispatch("delOthersVisitedRoute", view);
    return {
      visitedRoutes: [...state.visitedRoutes],
    };
  },
  async delLeftRoutes({ dispatch, state }, view) {
    await dispatch("delLeftVisitedRoute", view);
    return {
      visitedRoutes: [...state.visitedRoutes],
    };
  },
  async delRightRoutes({ dispatch, state }, view) {
    await dispatch("delRightVisitedRoute", view);
    return {
      visitedRoutes: [...state.visitedRoutes],
    };
  },
  delOthersVisitedRoute({ commit, state }, view) {
    commit("delOthersVisitedRoute", view);
    return [...state.visitedRoutes];
  },
  delLeftVisitedRoute({ commit, state }, view) {
    commit("delLeftVisitedRoute", view);
    return [...state.visitedRoutes];
  },
  delRightVisitedRoute({ commit, state }, view) {
    commit("delRightVisitedRoute", view);
    return [...state.visitedRoutes];
  },
  async delAllRoutes({ dispatch, state }, view) {
    await dispatch("delAllVisitedRoutes", view);
    return {
      visitedRoutes: [...state.visitedRoutes],
    };
  },
  delAllVisitedRoutes({ commit, state }) {
    commit("delAllVisitedRoutes");
    return [...state.visitedRoutes];
  },
  updateVisitedRoute({ commit }, view) {
    commit("updateVisitedRoute", view);
  },
};
export default { state, getters, mutations, actions };
