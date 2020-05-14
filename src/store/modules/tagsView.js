const state = {
  visitedViews: [],
  cachedViews: [],
  selectedTag: {},
  skeleton: true,
};
const mutations = {
  addVisitedView: (state, view) => {
    if (state.visitedViews.some((v) => v.path === view.path)) return;
    state.visitedViews.push(
      Object.assign({}, view, { title: view.meta.title || "no-name" })
    );
  },
  addCachedView: (state, view) => {
    if (state.cachedViews.includes(view.name)) {
      state.skeleton = false;
      if (view.meta.noKeepAlive) {
        state.skeleton = true;
      }
      return;
    } else {
      state.skeleton = true;
    }
    if (!view.meta.noKeepAlive) {
      state.cachedViews.push(view.name);
    }
  },
  delVisitedView: (state, view) => {
    for (const [i, v] of state.visitedViews.entries()) {
      if (v.path === view.path) {
        state.visitedViews.splice(i, 1);
        break;
      }
    }
  },
  delCachedView: (state, view) => {
    for (const i of state.cachedViews) {
      if (i === view.name) {
        const index = state.cachedViews.indexOf(i);
        state.cachedViews.splice(index, 1);
        break;
      }
    }
  },
  delOthersVisitedViews: (state, view) => {
    state.visitedViews = state.visitedViews.filter((v) => {
      return v.meta.affix || v.path === view.path;
    });
  },
  delOthersCachedViews: (state, view) => {
    for (const i of state.cachedViews) {
      if (i === view.name) {
        const index = state.cachedViews.indexOf(i);
        state.cachedViews = state.cachedViews.slice(index, index + 1);
        break;
      }
    }
  },
  delAllVisitedViews: (state) => {
    const affixTags = state.visitedViews.filter((tag) => tag.meta.affix);
    state.visitedViews = affixTags;
  },
  delAllCachedViews: (state) => {
    state.cachedViews = [];
  },
  setSelectedTag: (state, selectedTag) => {
    state.selectedTag = selectedTag;
  },
  updateVisitedView: (state, view) => {
    for (let v of state.visitedViews) {
      if (v.path === view.path) {
        v = Object.assign(v, view);
        break;
      }
    }
  },
};
const actions = {
  addView({ dispatch }, view) {
    dispatch("addVisitedView", view);
    dispatch("addCachedView", view);
  },
  addVisitedView({ commit }, view) {
    commit("addVisitedView", view);
  },
  addCachedView({ commit }, view) {
    commit("addCachedView", view);
  },
  delView({ dispatch, state }, view) {
    return new Promise(async (resolve) => {
      await dispatch("delVisitedView", view);
      await dispatch("delCachedView", view);
      resolve({
        visitedViews: [...state.visitedViews],
        cachedViews: [...state.cachedViews],
      });
    });
  },
  delVisitedView({ commit, state }, view) {
    return new Promise((resolve) => {
      commit("delVisitedView", view);
      resolve([...state.visitedViews]);
    });
  },
  delCachedView({ commit, state }, view) {
    return new Promise((resolve) => {
      commit("delCachedView", view);
      resolve([...state.cachedViews]);
    });
  },
  delOthersViews({ dispatch, state }, view) {
    return new Promise(async (resolve) => {
      await dispatch("delOthersVisitedViews", view);
      await dispatch("delOthersCachedViews", view);
      resolve({
        visitedViews: [...state.visitedViews],
        cachedViews: [...state.cachedViews],
      });
    });
  },
  delOthersVisitedViews({ commit, state }, view) {
    return new Promise((resolve) => {
      commit("delOthersVisitedViews", view);
      resolve([...state.visitedViews]);
    });
  },
  delOthersCachedViews({ commit, state }, view) {
    return new Promise((resolve) => {
      commit("delOthersCachedViews", view);
      resolve([...state.cachedViews]);
    });
  },
  delAllViews({ dispatch, state }, view) {
    return new Promise(async (resolve) => {
      await dispatch("delAllVisitedViews", view);
      await dispatch("delAllCachedViews", view);
      resolve({
        visitedViews: [...state.visitedViews],
        cachedViews: [...state.cachedViews],
      });
    });
  },
  delAllVisitedViews({ commit, state }) {
    return new Promise((resolve) => {
      commit("delAllVisitedViews");
      resolve([...state.visitedViews]);
    });
  },
  delAllCachedViews({ commit, state }) {
    return new Promise((resolve) => {
      commit("delAllCachedViews");
      resolve([...state.cachedViews]);
    });
  },
  setSelectedTag({ commit }, selectedTag) {
    commit("setSelectedTag", selectedTag);
  },
  updateVisitedView({ commit }, view) {
    commit("updateVisitedView", view);
  },
};
export default { state, mutations, actions };
