/**
 * @author https://gitee.com/chu1204505056/vue-admin-better （不想保留author可删除）
 * @description tabsBar多标签页逻辑，前期借鉴了很多开源项目发现都有个共同的特点很繁琐并不符合框架设计的初衷，后来在github用户hipi的启发下完成了重构，请勿修改
 */

const state = () => ({
  visitedRoutes: [],
})
const getters = {
  visitedRoutes: (state) => state.visitedRoutes,
}
const mutations = {
  addVisitedRoute(state, route) {
    let target = state.visitedRoutes.find((item) => item.path === route.path)
    if (target) {
      if (route.fullPath !== target.fullPath) Object.assign(target, route)
      return
    }
    state.visitedRoutes.push(Object.assign({}, route))
  },
  delVisitedRoute(state, route) {
    state.visitedRoutes.forEach((item, index) => {
      if (item.path === route.path) state.visitedRoutes.splice(index, 1)
    })
  },
  delOthersVisitedRoute(state, route) {
    state.visitedRoutes = state.visitedRoutes.filter(
      (item) => item.meta.affix || item.path === route.path
    )
  },
  delLeftVisitedRoute(state, route) {
    let index = state.visitedRoutes.length
    state.visitedRoutes = state.visitedRoutes.filter((item) => {
      if (item.name === route.name) index = state.visitedRoutes.indexOf(item)
      return item.meta.affix || index <= state.visitedRoutes.indexOf(item)
    })
  },
  delRightVisitedRoute(state, route) {
    let index = state.visitedRoutes.length
    state.visitedRoutes = state.visitedRoutes.filter((item) => {
      if (item.name === route.name) index = state.visitedRoutes.indexOf(item)
      return item.meta.affix || index >= state.visitedRoutes.indexOf(item)
    })
  },
  delAllVisitedRoutes(state) {
    state.visitedRoutes = state.visitedRoutes.filter((item) => item.meta.affix)
  },
  updateVisitedRoute(state, route) {
    state.visitedRoutes.forEach((item) => {
      if (item.path === route.path) item = Object.assign(item, route)
    })
  },
}
const actions = {
  addVisitedRoute({ commit }, route) {
    commit('addVisitedRoute', route)
  },
  async delRoute({ dispatch, state }, route) {
    await dispatch('delVisitedRoute', route)
    return {
      visitedRoutes: [...state.visitedRoutes],
    }
  },
  delVisitedRoute({ commit, state }, route) {
    commit('delVisitedRoute', route)
    return [...state.visitedRoutes]
  },
  async delOthersRoutes({ dispatch, state }, route) {
    await dispatch('delOthersVisitedRoute', route)
    return {
      visitedRoutes: [...state.visitedRoutes],
    }
  },
  async delLeftRoutes({ dispatch, state }, route) {
    await dispatch('delLeftVisitedRoute', route)
    return {
      visitedRoutes: [...state.visitedRoutes],
    }
  },
  async delRightRoutes({ dispatch, state }, route) {
    await dispatch('delRightVisitedRoute', route)
    return {
      visitedRoutes: [...state.visitedRoutes],
    }
  },
  delOthersVisitedRoute({ commit, state }, route) {
    commit('delOthersVisitedRoute', route)
    return [...state.visitedRoutes]
  },
  delLeftVisitedRoute({ commit, state }, route) {
    commit('delLeftVisitedRoute', route)
    return [...state.visitedRoutes]
  },
  delRightVisitedRoute({ commit, state }, route) {
    commit('delRightVisitedRoute', route)
    return [...state.visitedRoutes]
  },
  async delAllRoutes({ dispatch, state }, route) {
    await dispatch('delAllVisitedRoutes', route)
    return {
      visitedRoutes: [...state.visitedRoutes],
    }
  },
  delAllVisitedRoutes({ commit, state }) {
    commit('delAllVisitedRoutes')
    return [...state.visitedRoutes]
  },
  updateVisitedRoute({ commit }, route) {
    commit('updateVisitedRoute', route)
  },
}
export default { state, getters, mutations, actions }
