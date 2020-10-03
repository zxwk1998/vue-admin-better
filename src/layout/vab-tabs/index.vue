<template>
  <div class="vab-tabs">
    <a-tabs
      @tab-click="handleTabClick"
      @edit="handleTabRemove"
      v-model:activeKey="tabActive"
      hide-add
      type="editable-card"
    >
      <a-tab-pane
        v-for="item in visitedRoutes"
        :key="item.fullPath"
        :closable="!isAffix(item)"
        :tab="item.meta.title"
      ></a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from "vuex";
  export default {
    name: "VabTabs",
    data() {
      return {
        affixTags: [],
        tabActive: null,
        created: false,
      };
    },
    computed: {
      ...mapGetters({
        visitedRoutes: "tagsBar/visitedRoutes",
        routes: "routes/routes",
      }),
    },
    watch: {
      $route: {
        handler(route) {
          this.addTags(route);
        },
      },
    },
    created() {
      this.initAffixTags(this.routes);
      this.addTags(this.$route);
    },
    methods: {
      ...mapActions({
        addVisitedRoute: "tagsBar/addVisitedRoute",
        delVisitedRoute: "tagsBar/delVisitedRoute",
        delOthersVisitedRoutes: "tagsBar/delOthersVisitedRoutes",
        delLeftVisitedRoutes: "tagsBar/delLeftVisitedRoutes",
        delRightVisitedRoutes: "tagsBar/delRightVisitedRoutes",
        delAllVisitedRoutes: "tagsBar/delAllVisitedRoutes",
      }),
      initAffixTags(routes) {
        routes.forEach((route) => {
          if (route.meta && route.meta.affix) this.addTags(route);
          if (route.children) this.initAffixTags(route.children);
        });
      },
      async addTags(tag) {
        if (tag.name && tag.meta && tag.meta.tagHidden !== true) {
          let matched = [tag.name];
          if (tag.matched) matched = tag.matched.map((item) => item.name);
          await this.addVisitedRoute({
            path: tag.path,
            fullPath: tag.fullPath,
            query: tag.query,
            name: tag.name,
            matched: matched,
            meta: { ...tag.meta },
          });
          this.tabActive = tag.fullPath;
        }
      },
      isActive(route) {
        return route.path === this.$route.path;
      },
      isAffix(tag) {
        return tag.meta && tag.meta.affix;
      },
      handleTabClick(tab) {
        const route = this.visitedRoutes.filter((item) => item.path === tab)[0];
        if (this.$route.fullPath !== route.fullPath) this.$router.push(route);
      },
      async handleTabRemove(fullPath) {
        const view = this.visitedRoutes.find((item) => {
          return fullPath === item.fullPath;
        });
        await this.delVisitedRoute(view);
        if (this.isActive(view)) this.toLastTag();
      },
      handleCommand(command) {
        switch (command) {
          case "closeOthersTags":
            this.closeOthersTags();
            break;
          case "closeLeftTags":
            this.closeLeftTags();
            break;
          case "closeRightTags":
            this.closeRightTags();
            break;
          case "closeAllTags":
            this.closeAllTags();
            break;
        }
      },
      async closeSelectedTag(view) {
        await this.delVisitedRoute(view);
        if (this.isActive(view)) {
          this.toLastTag();
        }
      },
      async closeOthersTags() {
        const view = this.toThisTag();
        await this.delOthersVisitedRoutes(view);
      },
      async closeLeftTags() {
        const view = this.toThisTag();
        await this.delLeftVisitedRoutes(view);
      },
      async closeRightTags() {
        const view = this.toThisTag();
        await this.delRightVisitedRoutes(view);
      },
      async closeAllTags() {
        const view = this.toThisTag();
        await this.delAllVisitedRoutes();
        if (this.affixTags.some((tag) => tag.path === view.path)) return;
        this.toLastTag();
      },
      toLastTag() {
        const latestView = this.visitedRoutes.slice(-1)[0];
        if (latestView) {
          this.$router.push(latestView);
        } else {
          this.$router.push("/");
        }
      },
      toThisTag() {
        const view = this.visitedRoutes.find((item) => {
          return item.fullPath === this.$route.fullPath;
        });
        if (this.$route.path !== view.path) this.$router.push(view);
        return view;
      },
    },
  };
</script>
<style lang="less">
  .vab-tabs {
    .ant-tabs-bar {
      margin: 0 !important;
    }
  }
</style>
