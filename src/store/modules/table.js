const state = { srcCode: "" };
const mutations = {
  setTableCode(state, srcCode) {
    state.srcCode = srcCode;
  },
};
export default { state, mutations, actions };
