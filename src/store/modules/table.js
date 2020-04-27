const state = {
  srcCode: "",
};
const mutations = {
  SET_SRC_TABLE_CODE(state, srcCode) {
    state.srcCode = srcCode;
  },
};
export default { namespaced: true, state, mutations };
