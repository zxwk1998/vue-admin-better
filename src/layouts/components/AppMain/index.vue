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
      {{ fullYear }} 青岛市崂山区最强前端小组中的最菜组员荣誉出品
      <br />
      我的终极目标不再是做一名优秀的前端，因为我做不到，所以寄希望于协助和指引更多优秀的前端
      联系QQ1204505056
    </footer>
  </section>
</template>

<script>
import { ByuiKeel, ByuiKeelHeading, ByuiKeelText } from "@/plugins/byuiKeel";
import { mapGetters } from "vuex";
import GithubCorner from "@/components/GithubCorner";

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
          $("body").attr("style", "");
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
  width: 100%;
  position: relative;
  overflow: hidden;

  .footer-copyright {
    font-size: $base-font-size-small;
    height: 70px;
    line-height: 30px;
    text-align: center;
    color: rgba(0, 0, 0, 0.45);
  }
}
</style>
