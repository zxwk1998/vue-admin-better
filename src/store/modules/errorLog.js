const state = { errorLogs: [] };
const getters = {
  errorLogs: (state) => state.errorLogs,
};
const mutations = {
  addErrorLog(state, errorLog) {
    state.errorLogs.push(errorLog);
  },
  clearErrorLog: (state) => {
    state.errorLogs.splice(0);
  },
};
const actions = {
  addErrorLog({ commit }, errorLog) {
    commit("addErrorLog", errorLog);
  },
  clearErrorLog({ commit }) {
    commit("clearErrorLog");
  },
};
export default { state, getters, mutations, actions };
