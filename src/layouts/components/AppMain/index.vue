<template>
  <section class="app-main-container">
    <github-corner v-if="nodeEnv !== 'development'"></github-corner>
    <vab-keel v-if="show && skeleton" style="margin: 15px;">
      <vab-keel-heading :img="true" />
      <vab-keel-text :lines="7" />
      <vab-keel-heading :img="true" />
      <vab-keel-text :lines="6" />
      <vab-keel-heading :img="true" />
      <vab-keel-text :lines="8" />
    </vab-keel>
    <transition mode="out-in" name="fade-transform">
      <keep-alive v-if="routerView" :include="cachedRoutes" :max="10">
        <router-view :key="key" style="min-height: 80.6vh;" />
      </keep-alive>
    </transition>
    <footer class="footer-copyright">
      Copyright
      <vab-icon :icon="['fas', 'copyright']"></vab-icon>
      {{ fullYear }} {{ copyright }}
    </footer>
  </section>
</template>

<script>
import { VabKeel, VabKeelHeading, VabKeelText } from "@/plugins/vabKeel";
import { mapGetters } from "vuex";
import GithubCorner from "@/components/GithubCorner";
import { copyright } from "@/config/settings";

export default {
  name: "AppMain",
  components: {
    VabKeel,
    VabKeelHeading,
    VabKeelText,
    GithubCorner,
  },
  data() {
    return {
      show: true,
      nodeEnv: process.env.NODE_ENV,
      fullYear: new Date().getFullYear(),
      copyright,
      routerView: true,
      skeleton: this._skeleton,
    };
  },
  computed: {
    ...mapGetters({
      visitedRoutes: "tagsBar/visitedRoutes",
      device: "settings/device",
      _skeleton: "settings/skeleton",
    }),
    cachedRoutes() {
      const cachedRoutesArr = [];
      this.visitedRoutes.forEach((item) => {
        if (!item.meta.noKeepAlive) {
          cachedRoutesArr.push(item.name);
        }
      });
      this.handleSkeleton(cachedRoutesArr);
      return cachedRoutesArr;
    },
    key() {
      return this.$route.path;
    },
  },
  watch: {
    $route: {
      handler(route) {
        if ("mobile" === this.device) {
          this.$store.dispatch("settings/foldSideBar");
        }
      },
      immediate: true,
    },
  },
  created() {
    //重载所有路由
    this.$baseEventBus.$on("reloadRouterView", () => {
      this.routerView = false;
      this.skeleton = false;
      this.$nextTick(() => {
        this.routerView = true;
        this.skeleton = true;
      });
    });
  },
  mounted() {
    setTimeout(() => {
      this.show = false;
    }, 200);
  },
  methods: {
    // TODO 骨架屏处理还有bug我找到更好的解决方案待修复
    handleSkeleton(cachedRoutesArr) {
      if (this.skeleton) {
        cachedRoutesArr.push(this.$route.name);
        this.show = true;
        setTimeout(() => {
          this.show = false;
        }, 200);
      } else {
        this.show = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.app-main-container {
  position: relative;
  width: 100%;
  overflow: hidden;

  .footer-copyright {
    min-height: 55px;
    line-height: 55px;
    color: rgba(0, 0, 0, 0.45);
    text-align: center;
    border-top: 1px dashed $base-border-color;
  }
}
</style>
