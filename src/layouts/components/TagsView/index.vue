<template>
  <div id="tags-view-container" class="tags-view-container">
    <byui-icon
      class="tags-icon"
      :icon="['fas', 'angle-double-left']"
      @click="handleScroll('left')"
    >
    </byui-icon>
    <scroll-pane ref="scrollPane" class="tags-content" @contextmenu.stop>
      <transition-group :enter-active-class="'animated ' + animated">
        <router-link
          v-for="item in visitedViews"
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
          @click.middle.native="!isAffix(tag) ? closeSelectedTag(tag) : ''"
          @contextmenu.prevent.native="openMenu(item, $event, selectedTag)"
        >
          {{ item.title }}
          <span
            v-if="!isAffix(item)"
            class="el-icon-close"
            @click.prevent.stop="closeSelectedTag(item)"
          />
        </router-link>
      </transition-group>
    </scroll-pane>
    <byui-icon
      class="tags-icon"
      :icon="['fas', 'angle-double-right']"
      @click="handleScroll('right')"
    >
    </byui-icon>
    <ul
      v-show="visible"
      :style="{ 'margin-left': left + 'px', 'margin-top': top + 'px' }"
      class="contextmenu"
    >
      <li @click="refreshSelectedTag(selectedTag)">
        <byui-icon :icon="['fas', 'circle-notch']" style="margin-right: 5px;" />
        刷新
      </li>
      <li v-if="!isAffix(selectedTag)" @click="closeSelectedTag(selectedTag)">
        <byui-icon
          :icon="['fas', 'times-circle']"
          style="margin-right: 5px; margin-left: 2px;"
        />
        关闭
      </li>
      <li @click="closeOthersTags">
        <byui-icon :icon="['fas', 'times-circle']" style="margin-right: 5px;" />
        关闭其他
      </li>
      <li @click="closeAllTags(selectedTag)">
        <byui-icon
          :icon="['fas', 'times-circle']"
          style="margin-right: 5px; margin-left: 2px;"
        />
        关闭全部
      </li>
    </ul>
  </div>
</template>

<script>
import ScrollPane from "./ScrollPane";
import path from "path";
import { mapGetters } from "vuex";

export default {
  components: { ScrollPane },
  data() {
    return {
      visible: false,
      top: 0,
      left: 0,
      selectedTag: {},
      affixTags: [],
      animated: "flipInY",
    };
  },

  computed: {
    ...mapGetters(["layout", "visitedViews", "routes"]),
  },
  watch: {
    $route() {
      this.addTags();
      this.moveToCurrentTag();
    },
    visible(value) {
      if (value) {
        document.body.addEventListener("click", this.closeMenu);
      } else {
        document.body.removeEventListener("click", this.closeMenu);
      }
    },
  },
  mounted() {
    this.initTags();
    this.addTags();
  },
  methods: {
    isActive(route) {
      if (route.path === this.$route.path) {
        this.$store.dispatch("tagsView/setSelectedTag", route);
      }
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
          this.$store.dispatch("tagsView/addVisitedView", tag);
        }
      }
    },
    addTags() {
      const { name } = this.$route;
      if (name) {
        this.$store.dispatch("tagsView/addView", this.$route);
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
              this.$store.dispatch("tagsView/updateVisitedView", this.$route);
            }
            break;
          }
        }
      });
    },
    refreshSelectedTag(view) {
      this.$store.dispatch("tagsView/delCachedView", view).then(() => {
        const { fullPath } = view;
        this.$nextTick(() => {
          this.$router.replace({
            path: "/redirect" + fullPath,
          });
        });
      });
    },
    closeSelectedTag(view) {
      this.$store
        .dispatch("tagsView/delView", view)
        .then(({ visitedViews }) => {
          if (this.isActive(view)) {
            this.toLastView(visitedViews, view);
          }
        });
    },
    closeOthersTags() {
      this.$router.push(this.selectedTag);
      this.$store
        .dispatch("tagsView/delOthersViews", this.selectedTag)
        .then(() => {
          this.moveToCurrentTag();
        });
    },
    closeAllTags(view) {
      this.$store.dispatch("tagsView/delAllViews").then(({ visitedViews }) => {
        if (this.affixTags.some((tag) => tag.path === view.path)) {
          return;
        }
        this.toLastView(visitedViews, view);
      });
    },
    toLastView(visitedViews, view) {
      const latestView = visitedViews.slice(-1)[0];
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
    openMenu(tag, e, selectedTag) {
      const menuMinWidth = 105;
      const offsetLeft = this.$el.getBoundingClientRect().left;
      const offsetWidth = this.$el.offsetWidth;
      const maxLeft = offsetWidth - menuMinWidth;
      const left = e.clientX - offsetLeft + 15;

      if (left > maxLeft) {
        this.left = maxLeft;
      } else {
        this.left = left;
      }
      this.top = e.clientY - 50;

      this.visible = true;
      this.selectedTag = tag;
      this.$store.dispatch("tagsView/setSelectedTag", tag);
    },
    closeMenu() {
      this.visible = false;
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
    width: calc(100% - 60px);

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

  .contextmenu {
    position: fixed;
    z-index: $base-z-index;
    padding: 5px 0;
    margin: 0;
    font-size: $base-font-size-small;
    font-weight: 400;
    color: #333;
    list-style-type: none;
    background: #fff;
    border-radius: 4px;
    box-shadow: $base-box-shadow;

    li {
      padding: 7px 16px;
      margin: 0;
      cursor: pointer;

      .svg-inline--fa {
        margin-right: 5px;
        vertical-align: -0.55px;
      }

      &:hover {
        background: #eee;
      }
    }
  }
}
</style>
