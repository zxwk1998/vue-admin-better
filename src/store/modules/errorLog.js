const state = { logs: [] };
const getters = {
  errorLogs: (state) => state.logs,
};
const mutations = {
  addErrorLog: (state, log) => {
    state.logs.push(log);
  },
  clearErrorLog: (state) => {
    state.logs.splice(0);
  },
};
const actions = {
  addErrorLog({ commit }, log) {
    commit("addErrorLog", log);
  },
  clearErrorLog({ commit }) {
    commit("clearErrorLog");
  },
};
export default { state, getters, mutations, actions };
