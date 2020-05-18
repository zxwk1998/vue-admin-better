<template>
  <div v-if="!item.hidden">
    <template
      v-if="
        handleChildren(item.children, item) &&
        (!onlyOneChildren.children || onlyOneChildren.notShowChildren) &&
        !item.alwaysShow
      "
    >
      <app-link
        v-if="onlyOneChildren.meta"
        :target="onlyOneChildren.meta.target ? onlyOneChildren.meta.target : ''"
        :to="handlePath(onlyOneChildren.path)"
      >
        <el-menu-item
          :class="{ 'submenu-title-noDropdown': !isNest }"
          :index="handlePath(onlyOneChildren.path)"
        >
          <byui-icon
            v-if="onlyOneChildren.meta && onlyOneChildren.meta.icon"
            :icon="['fas', onlyOneChildren.meta.icon]"
            class="byui-nav-icon"
          />
          <byui-remix-icon
            v-if="onlyOneChildren.meta && onlyOneChildren.meta.remixIcon"
            :icon-class="onlyOneChildren.meta.icon"
            class="byui-nav-icon"
          />
          <span slot="title">{{ onlyOneChildren.meta.title }}</span>
        </el-menu-item>
      </app-link>
    </template>
    <el-submenu v-else ref="subMenu" :index="handlePath(item.path)">
      <template slot="title">
        <byui-icon
          v-if="item.meta && item.meta.icon"
          :icon="['fas', item.meta.icon]"
          class="byui-nav-icon"
        />
        <byui-remix-icon
          v-if="item.meta && item.meta.remixIcon"
          :icon-class="item.meta.remixIcon"
          class="byui-nav-icon"
        />
        <span>{{ item.meta.title }}</span>
      </template>
      <side-bar-item
        v-for="child in item.children"
        :key="child.path"
        :base-path="handlePath(child.path)"
        :is-nest="true"
        :item="child"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script>
import path from "path";
import { isExternal } from "@/utils/validate";
import AppLink from "../Link/index";

export default {
  name: "SideBarItem",
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
      onlyOneChildren: null,
    };
  },
  methods: {
    handleChildren(children = [], parent) {
      if (children === null) children = [];
      const showChildren = children.filter((item) => {
        if (item.hidden) {
          return false;
        } else {
          this.onlyOneChildren = item;
          return true;
        }
      });
      if (showChildren.length === 1) {
        return true;
      }

      if (showChildren.length === 0) {
        this.onlyOneChildren = {
          ...parent,
          path: "",
          notShowChildren: true,
        };
        return true;
      }
      return false;
    },
    handlePath(routePath) {
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
