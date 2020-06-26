<template>
  <section class="app-main-container">
    <github-corner v-if="githubCorner"></github-corner>
    <vab-keel v-if="show" style="margin: 15px;">
      <vab-keel-heading :img="true" />
      <vab-keel-text :lines="7" />
      <vab-keel-heading :img="true" />
      <vab-keel-text :lines="6" />
      <vab-keel-heading :img="true" />
      <vab-keel-text :lines="8" />
    </vab-keel>
    <transition mode="out-in" name="fade-transform">
      <keep-alive
        v-if="routerView"
        :include="cachedRoutes"
        :max="keepAliveMaxNum"
      >
        <router-view :key="key" />
      </keep-alive>
    </transition>
    <footer v-show="footerCopyright" class="footer-copyright">
      Copyright
      <vab-icon :icon="['fas', 'copyright']"></vab-icon>
      {{ title }} {{ fullYear }} by {{ copyright }}
    </footer>
  </section>
</template>

<script>
import { VabKeel, VabKeelHeading, VabKeelText } from "@/plugins/vabKeel";
import { mapGetters } from "vuex";
import GithubCorner from "@/components/GithubCorner";
import {
  title,
  copyright,
  keepAliveMaxNum,
  footerCopyright,
  githubCorner,
} from "@/config/settings";

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
      fullYear: new Date().getFullYear(),
      copyright,
      title,
      keepAliveMaxNum,
      routerView: true,
      footerCopyright,
      githubCorner,
    };
  },
  computed: {
    ...mapGetters({
      visitedRoutes: "tagsBar/visitedRoutes",
      device: "settings/device",
      skeleton: "settings/skeleton",
    }),
    cachedRoutes() {
      const cachedRoutesArr = [];
      this.visitedRoutes.forEach((item) => {
        if (!item.meta.noKeepAlive) {
          cachedRoutesArr.push(item.name);
          this.handleSkeleton();
        }
      });
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
      this.$nextTick(() => {
        this.routerView = true;
        this.handleSkeleton();
      });
    });
  },
  mounted() {
    this.handleSkeleton();
  },
  methods: {
    handleSkeleton() {
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, 200);
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
