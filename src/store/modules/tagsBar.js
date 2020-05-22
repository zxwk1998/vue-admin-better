const state = {
  visitedRoutes: [],
  cachedRoutes: [],
  skeleton: true,
};
const getters = {
  cachedRoutes: (state) => state.cachedRoutes,
  visitedRoutes: (state) => state.visitedRoutes,
};
const mutations = {
  addVisitedRoute: (state, view) => {
    if (state.visitedRoutes.some((v) => v.path === view.path)) return;
    state.visitedRoutes.push(
      Object.assign({}, view, { title: view.meta.title || "新标签页" })
    );
  },
  addCachedRoutes: (state, view) => {
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
  delVisitedRoute: (state, view) => {
    for (const [i, v] of state.visitedRoutes.entries()) {
      if (v.path === view.path) {
        state.visitedRoutes.splice(i, 1);
        break;
      }
    }
  },
  delCachedRoutes: (state, view) => {
    for (const i of state.cachedRoutes) {
      if (i === view.name) {
        const index = state.cachedRoutes.indexOf(i);
        state.cachedRoutes.splice(index, 1);
        break;
      }
    }
  },
  delOthersVisitedRoute: (state, view) => {
    state.visitedRoutes = state.visitedRoutes.filter((v) => {
      return v.meta.affix || v.path === view.path;
    });
  },
  delOthersCachedRoutes: (state, view) => {
    for (const i of state.cachedRoutes) {
      if (i === view.name) {
        const index = state.cachedRoutes.indexOf(i);
        state.cachedRoutes = state.cachedRoutes.slice(index, index + 1);
        break;
      }
    }
  },
  delLeftVisitedRoute: (state, view) => {
    let _index = state.visitedRoutes.length;
    state.visitedRoutes = state.visitedRoutes.filter((item, index) => {
      if (item.name === view.name) {
        _index = state.visitedRoutes.indexOf(item);
      }
      return item.meta.affix || _index <= state.visitedRoutes.indexOf(item);
    });
  },
  delLeftCachedRoutes: (state, view) => {
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
  delRightVisitedRoute: (state, view) => {
    let _index = state.visitedRoutes.length;
    state.visitedRoutes = state.visitedRoutes.filter((item, index) => {
      if (item.name === view.name) {
        _index = state.visitedRoutes.indexOf(item);
      }
      return item.meta.affix || _index >= state.visitedRoutes.indexOf(item);
    });
  },
  delRightCachedRoutes: (state, view) => {
    for (const i of state.cachedRoutes) {
      if (i === view.name) {
        const index = state.cachedRoutes.indexOf(i);
        state.cachedRoutes = state.cachedRoutes.slice(0, index + 1);
        break;
      }
    }
  },
  delAllVisitedRoutes: (state) => {
    const affixTags = state.visitedRoutes.filter((tag) => tag.meta.affix);
    state.visitedRoutes = affixTags;
  },
  delAllCachedRoutess: (state) => {
    state.cachedRoutes = [];
  },
  updateVisitedRoute: (state, view) => {
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
  delRoute({ dispatch, state }, view) {
    return new Promise(async (resolve) => {
      await dispatch("delVisitedRoute", view);
      await dispatch("delCachedRoutes", view);
      resolve({
        visitedRoutes: [...state.visitedRoutes],
        cachedRoutes: [...state.cachedRoutes],
      });
    });
  },
  delVisitedRoute({ commit, state }, view) {
    return new Promise((resolve) => {
      commit("delVisitedRoute", view);
      resolve([...state.visitedRoutes]);
    });
  },
  delCachedRoutes({ commit, state }, view) {
    return new Promise((resolve) => {
      commit("delCachedRoutes", view);
      resolve([...state.cachedRoutes]);
    });
  },
  delOthersRoutes({ dispatch, state }, view) {
    return new Promise(async (resolve) => {
      await dispatch("delOthersVisitedRoute", view);
      await dispatch("delOthersCachedRoutes", view);
      resolve({
        visitedRoutes: [...state.visitedRoutes],
        cachedRoutes: [...state.cachedRoutes],
      });
    });
  },
  delLeftRoutes({ dispatch, state }, view) {
    return new Promise(async (resolve) => {
      await dispatch("delLeftVisitedRoute", view);
      await dispatch("delLeftCachedRoutes", view);
      resolve({
        visitedRoutes: [...state.visitedRoutes],
        cachedRoutes: [...state.cachedRoutes],
      });
    });
  },
  delRightRoutes({ dispatch, state }, view) {
    return new Promise(async (resolve) => {
      await dispatch("delRightVisitedRoute", view);
      await dispatch("delRightCachedRoutes", view);
      resolve({
        visitedRoutes: [...state.visitedRoutes],
        cachedRoutes: [...state.cachedRoutes],
      });
    });
  },
  delOthersVisitedRoute({ commit, state }, view) {
    return new Promise((resolve) => {
      commit("delOthersVisitedRoute", view);
      resolve([...state.visitedRoutes]);
    });
  },
  delOthersCachedRoutes({ commit, state }, view) {
    return new Promise((resolve) => {
      commit("delOthersCachedRoutes", view);
      resolve([...state.cachedRoutes]);
    });
  },
  delLeftVisitedRoute({ commit, state }, view) {
    return new Promise((resolve) => {
      commit("delLeftVisitedRoute", view);
      resolve([...state.visitedRoutes]);
    });
  },
  delLeftCachedRoutes({ commit, state }, view) {
    return new Promise((resolve) => {
      commit("delLeftCachedRoutes", view);
      resolve([...state.cachedRoutes]);
    });
  },
  delRightVisitedRoute({ commit, state }, view) {
    return new Promise((resolve) => {
      commit("delRightVisitedRoute", view);
      resolve([...state.visitedRoutes]);
    });
  },
  delRightCachedRoutes({ commit, state }, view) {
    return new Promise((resolve) => {
      commit("delRightCachedRoutes", view);
      resolve([...state.cachedRoutes]);
    });
  },
  delAllRoutes({ dispatch, state }, view) {
    return new Promise(async (resolve) => {
      await dispatch("delAllVisitedRoutes", view);
      await dispatch("delAllCachedRoutess", view);
      resolve({
        visitedRoutes: [...state.visitedRoutes],
        cachedRoutes: [...state.cachedRoutes],
      });
    });
  },
  delAllVisitedRoutes({ commit, state }) {
    return new Promise((resolve) => {
      commit("delAllVisitedRoutes");
      resolve([...state.visitedRoutes]);
    });
  },
  delAllCachedRoutess({ commit, state }) {
    return new Promise((resolve) => {
      commit("delAllCachedRoutess");
      resolve([...state.cachedRoutes]);
    });
  },
  updateVisitedRoute({ commit }, view) {
    commit("updateVisitedRoute", view);
  },
};
export default { state, getters, mutations, actions };
