<template>
  <el-breadcrumb class="breadcrumb-container" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
        <span
          v-if="
            item.redirect === 'noRedirect' || index === levelList.length - 1
          "
          class="no-redirect"
        >
          <byui-icon v-if="item.meta.icon" :icon="['fas', item.meta.icon]" />
          {{ item.meta.title }}
        </span>
        <span v-else style="cursor: pointer;" @click.prevent="handleLink(item)">
          <byui-icon v-if="item.meta.icon" :icon="['fas', item.meta.icon]" />
          {{ item.meta.title }}
        </span>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
import { compile } from "path-to-regexp";

export default {
  name: "Breadcrumb",
  data() {
    return {
      levelList: null,
    };
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    },
  },
  created() {
    this.getBreadcrumb();
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter(
        (item) => item.meta && item.meta.title
      );
      const first = matched[0];

      /*if (!this.isIndex(first)) {
        matched = [
          {
            path: "/index",
            meta: {
              title: "首页",
              icon: "home",
            },
          },
        ].concat(matched);
      }*/

      this.levelList = matched.filter(
        (item) => item.meta && item.meta.title && item.meta.breadcrumb !== false
      );
    },
    isIndex(route) {
      const name = route && route.name;
      if (!name) {
        return false;
      }
      return name.trim().toLocaleLowerCase() === "Index".toLocaleLowerCase();
    },
    pathCompile(path) {
      const { params } = this.$route;
      const toPath = compile(path);
      return toPath(params);
    },
    handleLink(item) {
      const { redirect, path } = item;
      if (redirect) {
        this.$router.push(redirect);
        return;
      }
      this.$router.push(this.pathCompile(path));
    },
  },
};
</script>

<style lang="scss" scoped>
.breadcrumb-container {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: inline-block;
  font-size: $base-font-size-default;
  line-height: 50px;

  .no-redirect {
    color: $base-color-gray;
    cursor: text;
  }
}
</style>
