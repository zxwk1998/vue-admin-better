<template>
  <div class="app-wrapper" :class="classObj">
    <div
      v-if="'horizontal' === layout"
      class="layout-container-horizontal"
      :class="{
        fixed: header === 'fixed',
        'no-tags-view': tagsView === 'false' || tagsView === false,
      }"
    >
      <div :class="header === 'fixed' ? 'fixed-header' : ''">
        <top-bar />
        <div
          v-if="tagsView === 'true' || tagsView === true"
          :class="{ 'tag-view-show': tagsView }"
        >
          <byui-main>
            <tags-view />
          </byui-main>
        </div>
      </div>
      <byui-main class="main-padding">
        <nav-bar />
        <app-main />
      </byui-main>
    </div>
    <div
      v-else
      class="layout-container-vertical"
      :class="{
        fixed: header === 'fixed',
        'no-tags-view': tagsView === 'false' || tagsView === false,
      }"
    >
      <div
        v-if="device === 'mobile' && collapse === false"
        class="mask"
        @click="handleFoldSideBar"
      />
      <side-bar />
      <byui-main :class="collapse ? 'is-collapse-main' : ''">
        <div :class="header === 'fixed' ? 'fixed-header' : ''">
          <nav-bar />
          <tags-view v-if="tagsView === 'true' || tagsView === true" />
        </div>
        <app-main />
      </byui-main>
    </div>
    <byui-back-to-top transition-name="fade" />
  </div>
</template>

<script>
import { AppMain, NavBar, SideBar, TagsView, TopBar } from "./components";
import ByuiMain from "@/components/ByuiMain";
import ByuiBackToTop from "@/components/ByuiBackToTop";
import { mapGetters } from "vuex";
import { tokenName } from "@/config/settings";
import ResizeMixin from "./mixin/Resize";

export default {
  name: "Layout",
  components: {
    TopBar,
    NavBar,
    SideBar,
    AppMain,
    ByuiMain,
    TagsView,
    ByuiBackToTop,
  },
  mixins: [ResizeMixin],
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["layout", "tagsView", "collapse", "header", "device"]),
    classObj() {
      return {
        mobile: this.device === "mobile",
      };
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener(
        "storage",
        (e) => {
          if (e.key === tokenName || e.key === null) window.location.reload();
          if (e.key === tokenName && e.value === null) window.location.reload();
        },
        false
      );
    });
  },
  methods: {
    handleFoldSideBar() {
      this.$store.dispatch("settings/foldSideBar");
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin fix-header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: $base-z-index - 2;
  width: 100%;
  overflow: hidden;
}

.app-wrapper {
  position: relative;
  width: 100%;
  height: 100%;

  .layout-container-horizontal {
    position: relative;

    &.fixed {
      padding-top: 96px;
    }

    &.fixed.no-tags-view {
      padding-top: 56px;
    }

    ::v-deep {
      .byui-main {
        width: 88%;
      }

      .fixed-header {
        @include fix-header;
      }

      .tag-view-show {
        background: $base-color-white;
        box-shadow: $base-box-shadow;
      }

      .nav-bar-container {
        .fold-unfold {
          display: none;
        }
      }

      .main-padding {
        margin-top: 15px;
        margin-bottom: 15px;

        .app-main-container {
          min-height: calc(100vh - 180px);
          background: $base-color-white;
        }
      }
    }
  }

  .layout-container-vertical {
    position: relative;

    .mask {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: $base-z-index - 1;
      width: 100%;
      height: 100vh;
      overflow: hidden;
      background: #000;
      opacity: 0.5;
    }

    &.fixed {
      padding-top: 96px;
    }

    &.fixed.no-tags-view {
      padding-top: 56px;
    }

    .byui-main {
      position: relative;
      min-height: 100%;
      margin-left: $base-left-menu-width;
      background: #f6f8f9;
      transition: all 0.2s ease-in-out;

      ::v-deep {
        .fixed-header {
          @include fix-header;

          left: $base-left-menu-width;
          width: $base-right-content-width;
          box-shadow: $base-box-shadow;
          transition: all 0.2s ease-in-out;
        }

        .nav-bar-container {
          position: relative;
          box-sizing: border-box;
        }

        .tags-view-container {
          box-sizing: border-box;
          padding-right: 5px;
          padding-left: 5px;
        }

        .app-main-container {
          width: calc(100% - 30px);
          min-height: calc(100vh - 127px);
          margin: 15px auto;
          background: $base-color-white;
          border-radius: $base-border-radius;
          box-shadow: $base-box-shadow;
        }
      }

      &.is-collapse-main {
        margin-left: $base-left-menu-width-min;

        ::v-deep {
          .fixed-header {
            left: $base-left-menu-width-min;
            width: calc(100% - 65px);
          }
        }
      }
    }
  }

  /* 手机端开始 */
  &.mobile {
    ::v-deep {
      .el-pager,
      .el-pagination__jump {
        display: none;
      }

      .layout-container-vertical {
        .el-scrollbar.side-bar-container.is-collapse {
          width: 0;
        }

        .byui-main {
          width: 100%;
          margin-left: 0;

          .app-main-container {
            width: calc(100% - 10px) !important;
            margin: 5px !important;
          }
        }
      }

      .byui-main {
        .fixed-header {
          left: 0 !important;
          width: 100% !important;
        }
      }
    }
  }

  /* 手机端结束 */
}
</style>
