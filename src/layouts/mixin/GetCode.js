export default {
  methods: {
    handleGetCode() {
      const url =
        "https://github.com/chuzhixin/vue-admin-beautiful/tree/master/src/views";
      let path = this.$route.path + "/index.vue";
      if (path === "/vab/menu1/menu1-1/menu1-1-1/index.vue") {
        path = "/vab/nested/menu1/menu1-1/menu1-1-1/index.vue";
      }
      if (path === "/vab/icon/remixIcon/index.vue") {
        path = "/vab/icon/index.vue";
      }
      if (path === "/vab/icon/remixIcon/index.vue") {
        path = "/vab/icon/remixIcon.vue";
      }
      if (path === "/vab/icon/colorfulIcon/index.vue") {
        path = "/vab/icon/colorfulIcon.vue";
      }
      if (path === "/vab/table/comprehensiveTable/index.vue") {
        path = "/vab/table/index.vue";
      }
      if (path === "/vab/excel/exportExcel/index.vue") {
        path = "/vab/excel/exportExcel.vue";
      }
      if (path === "/vab/excel/exportSelectedExcel/index.vue") {
        path = "/vab/excel/exportSelectedExcel.vue";
      }
      if (path === "/vab/excel/exportMergeHeader/index.vue") {
        path = "/vab/excel/exportMergeHeaderExcel.vue";
      }
      if (path === "/vab/excel/uploadExcel/index.vue") {
        path = "/vab/excel/uploadExcel.vue";
      }
      window.open(url + path);
    },
  },
};
