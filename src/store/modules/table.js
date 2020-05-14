const state = { srcCode: "" };
const mutations = {
  setTableCode(state, srcCode) {
    state.srcCode = srcCode;
  },
};
const actions = {
  setTableCode({ commit }, srcCode) {
    commit("setTableCode", srcCode);
  },
};
export default { state, mutations, actions };
