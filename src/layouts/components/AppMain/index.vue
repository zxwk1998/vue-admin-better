<template>
  <section class="app-main-container">
    <github-corner v-if="nodeEnv !== 'development'"></github-corner>
    <byui-keel v-if="show" style="margin: 15px;">
      <byui-keel-heading :img="true" />
      <byui-keel-text :lines="7" />
      <byui-keel-heading :img="true" />
      <byui-keel-text :lines="6" />
      <byui-keel-heading :img="true" />
      <byui-keel-text :lines="8" />
    </byui-keel>
    <transition mode="out-in" name="fade-transform">
      <keep-alive :include="cachedRoutes" :max="10">
        <router-view :key="key" style="min-height: 82vh;" />
      </keep-alive>
    </transition>
    <footer class="footer-copyright">
      Copyright
      <byui-icon :icon="['fas', 'copyright']"></byui-icon>
      {{ fullYear }} {{ copyright }}
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
    ...mapGetters({
      cachedRoutes: "tagsBar/cachedRoutes",
      device: "settings/device",
    }),
    key() {
      return this.$route.path;
    },
  },
  watch: {
    $route(to, from) {
      this.$nextTick(() => {
        if (this.$store.state.tagsBar.skeleton) {
          this.show = true;
          setTimeout(() => {
            this.show = false;
          }, 200);
        } else {
          this.show = false;
        }
        if ("mobile" === this.device) {
          this.$store.dispatch("settings/foldSideBar");
        }
      });
    },
  },
  created() {},
  mounted() {
    setTimeout(() => {
      this.show = false;
    }, 200);
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
    min-height: 35px;
    line-height: 35px;
    color: rgba(0, 0, 0, 0.45);
    text-align: center;
  }
}
</style>
