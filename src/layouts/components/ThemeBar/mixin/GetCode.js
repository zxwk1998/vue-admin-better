export default {
  methods: {
    handleGetCode() {
      const url =
        "https://github.com/chuzhixin/vue-admin-beautiful/tree/master/src/views";
      let path = this.$route.path + "/index.vue";
      if (path === "/byui/menu1/menu1-1/menu1-1-1/index.vue") {
        path = "/byui/nested/menu1/menu1-1/menu1-1-1/index.vue";
      }
      if (path === "/byui/remixIcon/index.vue") {
        path = "/byui/icon/remixIcon.vue";
      }
      if (path === "/byui/colorfulIcon/index.vue") {
        path = "/byui/icon/colorfulIcon.vue";
      }
      if (path === "/byui/table/comprehensiveTable/index.vue") {
        path = "/byui/table/index.vue";
      }
      if (path === "/byui/excel/export-excel/index.vue") {
        path = "/byui/excel/export-excel.vue";
      }
      if (path === "/byui/excel/export-selected-excel/index.vue") {
        path = "/byui/excel/export-selected-excel.vue";
      }
      if (path === "/byui/excel/export-merge-header/index.vue") {
        path = "/byui/excel/export-merge-header.vue";
      }
      if (path === "/byui/excel/upload-excel/index.vue") {
        path = "/byui/excel/upload-excel.vue";
      }
      window.open(url + path);
    },
  },
};
