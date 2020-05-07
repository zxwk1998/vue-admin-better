<template>
  <section class="app-main-container">
    <github-corner v-if="nodeEnv !== 'development'"></github-corner>
    <transition mode="out-in" name="fade-transform">
      <keep-alive :include="cachedViews" :max="10">
        <byui-keel v-if="show" style="margin: 15px;">
          <byui-keel-heading :img="true" />
          <byui-keel-text :lines="7" />
          <byui-keel-heading :img="true" />
          <byui-keel-text :lines="6" />
          <byui-keel-heading :img="true" />
          <byui-keel-text :lines="8" />
        </byui-keel>
        <router-view :key="key" style="min-height: 78vh;" />
      </keep-alive>
    </transition>
    <footer class="footer-copyright">
      Copyright
      <byui-icon :icon="['fas', 'copyright']"></byui-icon>
      {{ fullYear }} {{ copyright }}
      <br />
      我的目标不是做一名优秀的前端leader，我的目标是帮助到更多优秀的前端leader，停留在这句话的你一定会是或者已经是其中最优秀的那一个
    </footer>
  </section>
</template>

<script>
import { ByuiKeel, ByuiKeelHeading, ByuiKeelText } from "@/plugins/byuiKeel";
import { mapGetters } from "vuex";
import GithubCorner from "@/components/GithubCorner";
import { copyright } from "@/config/settings";
export default {
  name: "AppMain",
  components: {
    ByuiKeel,
    ByuiKeelHeading,
    ByuiKeelText,
    GithubCorner,
  },
  data() {
    return {
      show: true,
      nodeEnv: process.env.NODE_ENV,
      fullYear: new Date().getFullYear(),
      copyright,
    };
  },
  computed: {
    ...mapGetters(["cachedViews", "device"]),
    key() {
      return this.$route.path;
    },
  },
  watch: {
    $route(to, from) {
      this.$nextTick(() => {
        /*if (this.$store.state.tagsView.skeleton) {
                                            this.show = true;
                                            setTimeout(() => {
                                              this.show = false;
                                            }, 0);
                                          } else {
                                            this.show = false;
                                          }*/
        if ("mobile" === this.device) {
          this.$store.dispatch("settings/foldSideBar");
        }
      });
    },
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, 400);
    });
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.app-main-container {
  position: relative;
  width: 100%;
  overflow: hidden;

  .footer-copyright {
    min-height: 70px;
    line-height: 35px;
    color: rgba(0, 0, 0, 0.45);
    text-align: center;
  }
}
</style>
