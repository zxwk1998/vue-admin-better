/**
 * @author chuzhixin 1204505056@qq.com （不想保留author可删除）
 * @description 代码生成机状态管理
 */

const state = () => ({
  srcCode: '',
})
const getters = {
  srcTableCode: (state) => state.srcCode,
}

const mutations = {
  setTableCode(state, srcCode) {
    state.srcCode = srcCode
  },
}
const actions = {
  setTableCode({ commit }, srcCode) {
    commit('setTableCode', srcCode)
  },
}
export default { state, getters, mutations, actions }
