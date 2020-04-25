<template>
  <li v-if="!item.hidden" class="top-bar-item-container">
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
            {{ onlyOneChild.meta.title }}
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
        {{ item.meta.title }}
      </template>
      <tab-item
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
import AppLink from "@/layouts/components/Link";

export default {
  name: "TabItem",
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
.top-bar-item-container {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

  ::v-deep {
    .el-menu-item.is-active {
      background: $base-menu-active-background !important;
    }

    .el-menu {
      &--horizontal {
        .el-menu-item {
          height: 46px !important;
          line-height: 46px !important;
        }

        .nest-menu {
          width: 100%;

          .el-menu-item {
            height: 46px !important;
            line-height: 46px !important;
          }
        }
      }
    }

    .el-submenu {
      .el-menu-item {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      &__icon-arrow {
        right: 5px;
        margin-top: -5px;

        &.el-icon-arrow-right {
          right: 10px;
        }
      }
    }

    &.nest-menu {
      float: none;
      width: 100%;

      .el-menu-item {
        &.el-submenu {
          &__title {
            text-align: left;
            box-sizing: border-box;

            span {
              margin-left: 5px;
            }
          }
        }
      }
    }
  }
}

.byui-nav-icon {
  margin-right: 4px;
}
</style>
