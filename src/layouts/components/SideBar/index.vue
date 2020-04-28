<template>
  <el-scrollbar
    :class="{ 'side-bar-container': true, 'is-collapse': collapse }"
  >
    <logo />
    <el-menu
      :background-color="variables.menuBackground"
      :text-color="variables.menuText"
      :active-text-color="variables.menuTextAcive"
      :default-active="activeMenu"
      :collapse="collapse"
      :collapse-transition="false"
      :default-openeds="defaultOpen"
      mode="vertical"
    >
      <sidebar-item
        v-for="route in routes"
        :key="route.path"
        :base-path="route.path"
        :item="route"
      />
    </el-menu>
  </el-scrollbar>
</template>
<script>
import path from "path";
import Logo from "@/layouts/components/Logo";
import SidebarItem from "./SideBarItem";
import variables from "@/styles/variables.scss";
import { version } from "@/config/settings";
import { mapGetters } from "vuex";

export default {
  components: { SidebarItem, Logo },
  data() {
    return { version: version };
  },
  computed: {
    ...mapGetters(["collapse", "routes"]),
    defaultOpen() {
      if (this.collapse) {
      }
      let arr = this.routes.map((item) => {
        return path.resolve(item.path);
      });
      /*只默认展开除了首页,登录,404,重定向以外的第一级*/
      arr = this.$baseLodash.pull(
        arr,
        "/",
        "/!*",
        "/login",
        "/404",
        "/401",
        "/redirect"
      );
      return arr;
    },
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    variables() {
      return variables;
    },
  },
};
</script>
<style lang="scss" scoped>
.side-bar-container {
  transition: width 0.2s;
  width: $base-left-menu-width;
  height: 100vh;
  background: $base-menu-background;
  overflow: hidden;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);

  ::v-deep {
    .el-scrollbar__wrap {
      overflow-x: hidden;
    }

    .el-menu {
      border: 0;
    }

    .svg-inline {
      &--fa {
        width: 1rem;
      }
    }

    .el-menu-item {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      height: 46px !important;
      line-height: 46px !important;

      &:hover {
        background-color: $base-menu-active-background !important;
        color: $base-color-white !important;
      }

      &.is-active {
        background-color: $base-menu-active-background !important;
        color: $base-color-white !important;
      }
    }

    .nest-menu {
      [class*="menu"] {
        background-color: $base-menu-children-background !important;

        &.is-active {
          background-color: $base-menu-active-background !important;
          color: $base-color-white !important;
        }
      }
    }
  }

  &.is-collapse {
    width: $base-left-menu-width-min;
    border-right: 0 !important;

    ::v-deep {
      .title {
        display: none;
      }

      .el-menu--collapse {
        border-right: 0 !important;

        .el-submenu__icon-arrow {
          right: 10px;
          margin-top: -3px;
        }

        .el-submenu__title {
          span {
            display: none;
          }
        }
      }
    }
  }
}
</style>
