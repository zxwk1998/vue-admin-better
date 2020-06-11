const state = {
  visitedRoutes: [],
  cachedRoutes: [],
  skeleton: true,
};
const getters = {
  cachedRoutes: (state) => state.cachedRoutes,
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
  addCachedRoutes(state, view) {
    if (state.cachedRoutes.includes(view.name)) {
      state.skeleton = false;
      if (view.meta.noKeepAlive) {
        state.skeleton = true;
      }
      return;
    } else {
      state.skeleton = true;
    }
    if (!view.meta.noKeepAlive) {
      state.cachedRoutes.push(view.name);
    }
  },
  delVisitedRoute(state, view) {
    for (const [i, v] of state.visitedRoutes.entries()) {
      if (v.path === view.path) {
        state.visitedRoutes.splice(i, 1);
        break;
      }
    }
  },
  delCachedRoutes(state, view) {
    for (const i of state.cachedRoutes) {
      if (i === view.name) {
        const index = state.cachedRoutes.indexOf(i);
        state.cachedRoutes.splice(index, 1);
        break;
      }
    }
  },
  delOthersVisitedRoute(state, view) {
    state.visitedRoutes = state.visitedRoutes.filter((v) => {
      return v.meta.affix || v.path === view.path;
    });
  },
  delOthersCachedRoutes(state, view) {
    for (const i of state.cachedRoutes) {
      if (i === view.name) {
        const index = state.cachedRoutes.indexOf(i);
        state.cachedRoutes = state.cachedRoutes.slice(index, index + 1);
        break;
      }
    }
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
  delLeftCachedRoutes(state, view) {
    for (const i of state.cachedRoutes) {
      if (i === view.name) {
        const index = state.cachedRoutes.indexOf(i);
        state.cachedRoutes = state.cachedRoutes.slice(
          index,
          state.cachedRoutes.length
        );
        break;
      }
    }
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
  delRightCachedRoutes(state, view) {
    for (const i of state.cachedRoutes) {
      if (i === view.name) {
        const index = state.cachedRoutes.indexOf(i);
        state.cachedRoutes = state.cachedRoutes.slice(0, index + 1);
        break;
      }
    }
  },
  delAllVisitedRoutes(state) {
    const affixTags = state.visitedRoutes.filter((tag) => tag.meta.affix);
    state.visitedRoutes = affixTags;
  },
  delAllCachedRoutess(state) {
    state.cachedRoutes = [];
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
    dispatch("addCachedRoutes", view);
  },
  addVisitedRoute({ commit }, view) {
    commit("addVisitedRoute", view);
  },
  addCachedRoutes({ commit }, view) {
    commit("addCachedRoutes", view);
  },
  async delRoute({ dispatch, state }, view) {
    await dispatch("delVisitedRoute", view);
    await dispatch("delCachedRoutes", view);
    return {
      visitedRoutes: [...state.visitedRoutes],
      cachedRoutes: [...state.cachedRoutes],
    };
  },
  delVisitedRoute({ commit, state }, view) {
    commit("delVisitedRoute", view);
    return [...state.visitedRoutes];
  },
  delCachedRoutes({ commit, state }, view) {
    commit("delCachedRoutes", view);
    return [...state.cachedRoutes];
  },
  async delOthersRoutes({ dispatch, state }, view) {
    await dispatch("delOthersVisitedRoute", view);
    await dispatch("delOthersCachedRoutes", view);
    return {
      visitedRoutes: [...state.visitedRoutes],
      cachedRoutes: [...state.cachedRoutes],
    };
  },
  async delLeftRoutes({ dispatch, state }, view) {
    await dispatch("delLeftVisitedRoute", view);
    await dispatch("delLeftCachedRoutes", view);
    return {
      visitedRoutes: [...state.visitedRoutes],
      cachedRoutes: [...state.cachedRoutes],
    };
  },
  async delRightRoutes({ dispatch, state }, view) {
    await dispatch("delRightVisitedRoute", view);
    await dispatch("delRightCachedRoutes", view);
    return {
      visitedRoutes: [...state.visitedRoutes],
      cachedRoutes: [...state.cachedRoutes],
    };
  },
  delOthersVisitedRoute({ commit, state }, view) {
    commit("delOthersVisitedRoute", view);
    return [...state.visitedRoutes];
  },
  delOthersCachedRoutes({ commit, state }, view) {
    commit("delOthersCachedRoutes", view);
    return [...state.cachedRoutes];
  },
  delLeftVisitedRoute({ commit, state }, view) {
    commit("delLeftVisitedRoute", view);
    return [...state.visitedRoutes];
  },
  delLeftCachedRoutes({ commit, state }, view) {
    commit("delLeftCachedRoutes", view);
    return [...state.cachedRoutes];
  },
  delRightVisitedRoute({ commit, state }, view) {
    commit("delRightVisitedRoute", view);
    return [...state.visitedRoutes];
  },
  delRightCachedRoutes({ commit, state }, view) {
    commit("delRightCachedRoutes", view);
    return [...state.cachedRoutes];
  },
  async delAllRoutes({ dispatch, state }, view) {
    await dispatch("delAllVisitedRoutes", view);
    await dispatch("delAllCachedRoutess", view);
    return {
      visitedRoutes: [...state.visitedRoutes],
      cachedRoutes: [...state.cachedRoutes],
    };
  },
  delAllVisitedRoutes({ commit, state }) {
    commit("delAllVisitedRoutes");
    return [...state.visitedRoutes];
  },
  delAllCachedRoutess({ commit, state }) {
    commit("delAllCachedRoutess");
    return [...state.cachedRoutes];
  },
  updateVisitedRoute({ commit }, view) {
    commit("updateVisitedRoute", view);
  },
};
export default { state, getters, mutations, actions };
