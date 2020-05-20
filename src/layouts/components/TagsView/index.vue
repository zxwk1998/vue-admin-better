<template>
  <div id="tags-view-container" class="tags-view-container">
    <byui-icon
      class="tags-icon"
      :icon="['fas', 'angle-double-left']"
      @click="handleScroll('left')"
    >
    </byui-icon>
    <scroll ref="scrollPane" class="tags-content" @contextmenu.stop>
      <router-link
        v-for="item in visitedRoutes"
        :key="item.path"
        ref="tag"
        :class="isActive(item) ? 'active' : ''"
        :to="{
          path: item.path,
          query: item.query,
          fullPath: item.fullPath,
        }"
        class="tags-view-item"
        tag="span"
      >
        {{ item.title }}
        <span
          v-if="!isAffix(item)"
          class="el-icon-close"
          @click.prevent.stop="closeSelectedTag(item)"
        />
      </router-link>
    </scroll>
    <byui-icon
      class="tags-icon"
      :icon="['fas', 'angle-double-right']"
      @click="handleScroll('right')"
    >
    </byui-icon>
    <el-dropdown>
      <span style="cursor: pointer;">
        更多操作<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown" class="tags-more">
        <el-dropdown-item @click.native="refreshRoute"
          ><byui-icon
            :icon="['fas', 'circle-notch']"
            style="margin-right: 5px;"
          />
          刷新</el-dropdown-item
        >
        <el-dropdown-item @click.native="closeOthersTags">
          <byui-icon
            :icon="['fas', 'times-circle']"
            style="margin-right: 5px;"
          />
          关闭其他</el-dropdown-item
        >
        <el-dropdown-item @click.native="closeAllTags"
          ><byui-icon
            :icon="['fas', 'times-circle']"
            style="margin-right: 5px; margin-left: 2px;"
          />
          关闭全部</el-dropdown-item
        >
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import Scroll from "./components/Scroll";
import path from "path";
import { mapGetters } from "vuex";

export default {
  name: "TagsView",
  components: { Scroll },
  data() {
    return {
      affixTags: [],
    };
  },

  computed: {
    ...mapGetters(["layout", "visitedRoutes", "routes"]),
  },
  watch: {
    $route() {
      this.addTags();
      this.moveToCurrentTag();
    },
  },
  mounted() {
    this.initTags();
    this.addTags();
  },
  methods: {
    isActive(route) {
      return route.path === this.$route.path;
    },
    isAffix(tag) {
      return tag.meta && tag.meta.affix;
    },
    filterAffixTags(routes, basePath = "/") {
      let tags = [];
      routes.forEach((route) => {
        if (route.meta && route.meta.affix) {
          const tagPath = path.resolve(basePath, route.path);
          tags.push({
            fullPath: tagPath,
            path: tagPath,
            name: route.name,
            meta: { ...route.meta },
          });
        }
        if (route.children) {
          const tempTags = this.filterAffixTags(route.children, route.path);
          if (tempTags.length >= 1) {
            tags = [...tags, ...tempTags];
          }
        }
      });
      return tags;
    },
    initTags() {
      const affixTags = (this.affixTags = this.filterAffixTags(this.routes));
      for (const tag of affixTags) {
        if (tag.name) {
          this.$store.dispatch("tagsView/addVisitedRoute", tag);
        }
      }
    },
    addTags() {
      const { name } = this.$route;
      if (name) {
        this.$store.dispatch("tagsView/addRoute", this.$route);
      }
      return false;
    },
    moveToCurrentTag() {
      const tags = this.$refs.tag;
      this.$nextTick(() => {
        for (const tag of tags) {
          if (tag.to.path === this.$route.path) {
            this.$refs.scrollPane.moveToTarget(tag);
            if (tag.to.fullPath !== this.$route.fullPath) {
              this.$store.dispatch("tagsView/updateVisitedRoute", this.$route);
            }
            break;
          }
        }
      });
    },
    refreshRoute() {
      const arr = this.visitedRoutes.filter((item, index) => {
        if (item.path === this.$route.fullPath) {
          return item;
        }
      });
      const view = arr[0];
      this.$store.dispatch("tagsView/delCachedRoutes", view).then(() => {
        const { fullPath } = view;
        this.$nextTick(() => {
          this.$router
            .replace({
              path: "/redirect" + this.$route.fullPath,
            })
            .catch(() => {});
        });
      });
    },
    closeSelectedTag(view) {
      this.$store
        .dispatch("tagsView/delView", view)
        .then(({ visitedRoutes }) => {
          if (this.isActive(view)) {
            this.toLastView(visitedRoutes, view);
          }
        });
    },
    closeOthersTags() {
      const arr = this.visitedRoutes.filter((item, index) => {
        if (item.path === this.$route.fullPath) {
          return item;
        }
      });
      const view = arr[0];
      this.$router.push(view);
      this.$store.dispatch("tagsView/delOthersViews", view).then(() => {
        this.moveToCurrentTag();
      });
    },
    closeAllTags() {
      const arr = this.visitedRoutes.filter((item, index) => {
        if (item.path === this.$route.fullPath) {
          return item;
        }
      });
      const view = arr[0];
      this.$store.dispatch("tagsView/delAllViews").then(({ visitedRoutes }) => {
        if (this.affixTags.some((tag) => tag.path === view.path)) {
          return;
        }
        this.toLastView(visitedRoutes, view);
      });
    },
    toLastView(visitedRoutes, view) {
      const latestView = visitedRoutes.slice(-1)[0];
      if (latestView) {
        this.$router.push(latestView);
      } else {
        if (view.name === "Index") {
          this.$router.replace({ path: "/redirect" + view.fullPath });
        } else {
          this.$router.push("/");
        }
      }
    },
    handleScroll(e) {
      let $wrap = $(".tags-view-container .el-scrollbar__wrap");
      if ("left" === e) {
        $wrap.animate({ scrollLeft: 0 }, 400);
      } else {
        $wrap.animate({ scrollLeft: $wrap[0].scrollWidth }, 400);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.tags-view-container {
  position: relative;
  box-sizing: border-box;
  height: 44px;
  user-select: none;
  background: $base-color-white;

  .tags-icon {
    float: left;
    width: 30px;
    margin-top: 16px;
    font-size: $base-font-size-default;
    color: $base-color-gray;
    text-align: center;
    vertical-align: auto;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
  }

  .tags-content {
    float: left;
    width: calc(100% - 145px);

    .tags-view-item {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-items: center;
      height: $base-input-height;
      padding: 0 15px 0 15px;
      margin-top: 6px;
      margin-right: 5px;
      font-size: $base-font-size-small;
      line-height: $base-input-height;
      cursor: pointer;
      background: $base-color-white;
      border: 1px solid $base-border-color;
      border-radius: $base-border-radius;

      &.active {
        color: $base-color-white;
        background-color: $base-color-blue;
        border: 1px solid $base-color-blue;
      }

      .el-icon-close {
        position: relative;
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        justify-items: center;
        width: 15px;
        height: 15px;
        margin: 0 0 0 3px;

        &::before {
          position: absolute;
          top: 2px;
          left: 1.5px;
        }

        &:hover {
          color: $base-color-white;
          background-color: $base-color-red;
          border-radius: 50%;
        }
      }
    }
  }

  ::v-deep {
    .el-dropdown {
      margin-top: 15px;
    }
  }
}
</style>
