<template>
  <li v-if="!item.hidden">
    <template
      v-if="
        hasOneShowingChild(item.children, item) &&
        (!onlyOneChild.children || onlyOneChild.noShowingChildren) &&
        !item.alwaysShow
      "
    >
      <app-link
        v-if="onlyOneChild.meta"
        :target="onlyOneChild.meta.target ? onlyOneChild.meta.target : ''"
        :to="resolvePath(onlyOneChild.path)"
      >
        <ul>
          <el-menu-item
            :class="{ 'submenu-title-noDropdown': !isNest }"
            :index="resolvePath(onlyOneChild.path)"
          >
            <byui-icon
              v-if="onlyOneChild.meta && onlyOneChild.meta.icon"
              :icon="['fas', onlyOneChild.meta.icon]"
              class="byui-nav-icon"
            />
            <span slot="title">{{ onlyOneChild.meta.title }}</span>
          </el-menu-item>
        </ul>
      </app-link>
    </template>
    <el-submenu v-else ref="subMenu" :index="resolvePath(item.path)">
      <template slot="title">
        <byui-icon
          v-if="item.meta && item.meta.icon"
          :icon="['fas', item.meta.icon]"
          class="byui-nav-icon"
        />
        <span>{{ item.meta.title }}</span>
      </template>
      <sidebar-item
        v-for="(child, index) in item.children"
        :key="index"
        :base-path="resolvePath(child.path)"
        :is-nest="true"
        :item="child"
        class="nest-menu"
      />
    </el-submenu>
  </li>
</template>

<script>
import path from "path";
import { isExternal } from "@/utils/validate";
import AppLink from "../Link/index";

export default {
  name: "SidebarItem",
  components: { AppLink },
  props: {
    item: {
      type: Object,
      required: true,
    },
    isNest: {
      type: Boolean,
      default: false,
    },
    basePath: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      onlyOneChild: null,
    };
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter((item) => {
        if (item.hidden) {
          return false;
        } else {
          this.onlyOneChild = item;
          return true;
        }
      });
      if (showingChildren.length === 1) {
        return true;
      }

      if (showingChildren.length === 0) {
        this.onlyOneChild = {
          ...parent,
          path: "",
          noShowingChildren: true,
        };
        return true;
      }
      return false;
    },
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath;
      }
      if (isExternal(this.basePath)) {
        return this.basePath;
      }
      return path.resolve(this.basePath, routePath);
    },
  },
};
</script>

<style lang="scss" scoped>
.byui-nav-icon {
  margin-right: 4px;
}
</style>
