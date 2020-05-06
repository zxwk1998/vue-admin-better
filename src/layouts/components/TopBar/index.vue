<template>
  <div class="top-bar-container">
    <byui-main>
      <el-row>
        <el-col :xs="0" :sm="6" :md="6" :lg="6" :xl="6">
          <logo class="hidden-xs-only" />
        </el-col>
        <el-col :xs="24" :sm="18" :md="18" :lg="18" :xl="18">
          <el-menu
            :background-color="variables['menu-background']"
            :text-color="variables['menu-text']"
            :active-text-color="variables['menu-text-active']"
            :default-active="activeMenu"
            :menu-trigger="menuTrigger"
            mode="horizontal"
          >
            <tab-item
              v-for="route in routes"
              :key="route.path"
              :base-path="route.path"
              :item="route"
            />
          </el-menu>
        </el-col>
      </el-row>
    </byui-main>
  </div>
</template>

<script>
import Logo from "@/layouts/components/Logo";
import tabItem from "./TopBarItem";
import variables from "@/styles/variables.scss";
import ByuiMain from "@/components/ByuiMain";
import { mapGetters } from "vuex";

export default {
  components: { tabItem, Logo, ByuiMain },
  data() {
    return {
      menuTrigger: "hover",
    };
  },
  computed: {
    ...mapGetters(["routes"]),
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
.top-bar-container {
  background: $base-color-header;

  .el-menu.el-menu--horizontal {
    border-bottom: solid 0 transparent;
  }

  ::v-deep {
    .byui-main {
      background: $base-color-header;

      .el-menu {
        &--horizontal {
          float: right;
          border-bottom: solid 0 transparent !important;
        }

        > .top-bar-item-container {
          display: inline-block;
        }
      }
    }
  }
}
</style>
