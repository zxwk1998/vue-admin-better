export default {
  methods: {
    handleGetCode() {
      const url =
        "https://github.com/chuzhixin/vue-admin-beautiful/tree/master/src/views";
      let path = this.$route.path + "/index.vue";
      if (path === "/byui/menu1/menu1-1/menu1-1-1/index.vue") {
        path = "/byui/nested/menu1/menu1-1/menu1-1-1/index.vue";
      }
      if (path === "/byui/icon/remixIcon/index.vue") {
        path = "/byui/icon/index.vue";
      }
      if (path === "/byui/icon/remixIcon/index.vue") {
        path = "/byui/icon/remixIcon.vue";
      }
      if (path === "/byui/icon/colorfulIcon/index.vue") {
        path = "/byui/icon/colorfulIcon.vue";
      }
      if (path === "/byui/table/comprehensiveTable/index.vue") {
        path = "/byui/table/index.vue";
      }
      if (path === "/byui/excel/exportExcel/index.vue") {
        path = "/byui/excel/exportExcel.vue";
      }
      if (path === "/byui/excel/exportSelectedExcel/index.vue") {
        path = "/byui/excel/exportSelectedExcel.vue";
      }
      if (path === "/byui/excel/exportMergeHeader/index.vue") {
        path = "/byui/excel/exportMergeHeaderExcel.vue";
      }
      if (path === "/byui/excel/uploadExcel/index.vue") {
        path = "/byui/excel/uploadExcel.vue";
      }
      window.open(url + path);
    },
  },
};
