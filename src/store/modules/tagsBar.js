const state = {
  visitedRoutes: [],
  skeleton: true,
};
const getters = {
  visitedRoutes: (state) => state.visitedRoutes,
  skeleton: (state) => state.skeleton,
};
const mutations = {
  addVisitedRoute(state, view) {
    if (state.visitedRoutes.some((v) => v.path === view.path)) return;
    state.visitedRoutes.push(
      Object.assign({}, view, { title: view.meta.title || "新标签页" })
    );
  },
  delVisitedRoute(state, view) {
    for (const [i, v] of state.visitedRoutes.entries()) {
      if (v.path === view.path) {
        state.visitedRoutes.splice(i, 1);
        break;
      }
    }
  },
  delOthersVisitedRoute(state, view) {
    state.visitedRoutes = state.visitedRoutes.filter((v) => {
      return v.meta.affix || v.path === view.path;
    });
  },
  delLeftVisitedRoute(state, view) {
    let _index = state.visitedRoutes.length;
    state.visitedRoutes = state.visitedRoutes.filter((item, index) => {
      if (item.name === view.name) {
        _index = state.visitedRoutes.indexOf(item);
      }
      return item.meta.affix || _index <= state.visitedRoutes.indexOf(item);
    });
  },
  delRightVisitedRoute(state, view) {
    let _index = state.visitedRoutes.length;
    state.visitedRoutes = state.visitedRoutes.filter((item, index) => {
      if (item.name === view.name) {
        _index = state.visitedRoutes.indexOf(item);
      }
      return item.meta.affix || _index >= state.visitedRoutes.indexOf(item);
    });
  },
  delAllVisitedRoutes(state) {
    const affixTags = state.visitedRoutes.filter((tag) => tag.meta.affix);
    state.visitedRoutes = affixTags;
  },
  updateVisitedRoute(state, view) {
    for (let v of state.visitedRoutes) {
      if (v.path === view.path) {
        v = Object.assign(v, view);
        break;
      }
    }
  },
};
const actions = {
  addRoute({ dispatch }, view) {
    dispatch("addVisitedRoute", view);
  },
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
