/**
 * @author chuzhixin 1204505056@qq.com （不想保留author可删除）
 * @description 异常捕获的状态拦截，请勿修改
 */

const state = { errorLogs: [] }
const getters = {
  errorLogs: (state) => state.errorLogs,
}
const mutations = {
  addErrorLog(state, errorLog) {
    state.errorLogs.push(errorLog)
  },
  clearErrorLog: (state) => {
    state.errorLogs.splice(0)
  },
}
const actions = {
  addErrorLog({ commit }, errorLog) {
    commit('addErrorLog', errorLog)
  },
  clearErrorLog({ commit }) {
    commit('clearErrorLog')
  },
}
export default { state, getters, mutations, actions }
