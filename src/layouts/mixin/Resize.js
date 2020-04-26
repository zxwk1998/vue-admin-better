import store from "@/store";

const { body } = document;
const WIDTH = 992;

export default {
  beforeMount() {
    window.addEventListener("resize", this.$_resizeHandler);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.$_resizeHandler);
  },
  mounted() {
    const userAgent = navigator.userAgent;
    if (userAgent.includes("Juejin")) {
      this.$baseAlert(
        "vue-admin-beautiful不支持在掘金内置浏览器演示，请手动复制以下地址到浏览器中查看http://chu1204505056.gitee.io/vue-admin-beautiful"
      );
    }
    const isMobile = this.$_isMobile();
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
    $_isMobile() {
      const rect = body.getBoundingClientRect();
      return rect.width - 1 < WIDTH;
    },
    $_resizeHandler() {
      if (!document.hidden) {
        const isMobile = this.$_isMobile();
        store.dispatch(
          "settings/toggleDevice",
          isMobile ? "mobile" : "desktop"
        );
      }
    },
  },
};
