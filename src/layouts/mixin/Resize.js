import store from "@/store";

const { body } = document;
const width = 992;

export default {
  beforeMount() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  mounted() {
    const userAgent = navigator.userAgent;
    if (userAgent.includes("Juejin")) {
      this.$baseAlert(
        "vue-admin-beautiful不支持在掘金内置浏览器演示，请手动复制以下地址到浏览器中查看http://chu1204505056.gitee.io/vue-admin-beautiful"
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
      return body.getBoundingClientRect().width - 1 < width;
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
