import store from "@/store";

export default {
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  mounted() {
    const userAgent = navigator.userAgent;
    if (userAgent.includes("Juejin")) {
      this.$baseAlert(
        "vue-admin-beautiful不支持在掘金内置浏览器演示，请手动复制以下地址到浏览器中查看http://mpfhrd48.sanxing.uz7.cn/vue-admin-beautiful"
      );
    }
    const isMobile = this.handleIsMobile();
    if (isMobile) {
      store.dispatch("settings/toggleDevice", "mobile");
      setTimeout(() => {
        store.dispatch("settings/foldSideBar");
      }, 2000);
    } else {
      store.dispatch("settings/openSideBar");
    }
  },
  methods: {
    handleIsMobile() {
      return document.body.getBoundingClientRect().width - 1 < 992;
    },
    handleResize() {
      if (!document.hidden) {
        const isMobile = this.handleIsMobile();
        store.dispatch(
          "settings/toggleDevice",
          isMobile ? "mobile" : "desktop"
        );
      }
    },
  },
};
