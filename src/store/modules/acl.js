const state = {
  admin: false,
  role: [],
  ability: [],
}
const getters = {
  admin: (state) => state.admin,
  role: (state) => state.role,
  ability: (state) => state.ability,
}
const mutations = {
  setFull(state, admin) {
    state.admin = admin
  },
  setRole(state, role) {
    state.role = role
  },
  setAbility(state, ability) {
    state.ability = ability
  },
}
const actions = {
  setFull({ commit }, admin) {
    commit('setFull', admin)
  },
  setRole({ commit }, role) {
    commit('setRole', role)
  },
  setAbility({ commit }, ability) {
    commit('setAbility', ability)
  },
}
export default { state, getters, mutations, actions }
