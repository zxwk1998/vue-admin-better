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
        @click="handleClickOutside"
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
    handleClickOutside() {
      this.$store.dispatch("settings/foldSideBar");
      $("body").attr("style", "");
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin fix-header {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 97;
  width: 100%;
  overflow: hidden;
}

.app-wrapper {
  width: 100%;
  height: 100%;
  position: relative;

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
          background: $base-color-white;
          min-height: calc(100vh - 180px);
        }
      }
    }
  }

  .layout-container-vertical {
    position: relative;

    .mask {
      background: #000;
      opacity: 0.5;
      width: 100%;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      height: 100vh;
      position: fixed;
      z-index: 98;
      overflow: hidden;
    }

    &.fixed {
      padding-top: 96px;
    }

    &.fixed.no-tags-view {
      padding-top: 56px;
    }

    .byui-main {
      margin-left: $base-left-menu-width;
      background: #f6f8f9;
      min-height: 100%;
      transition: margin-left 0.28s;
      position: relative;

      ::v-deep {
        .fixed-header {
          @include fix-header;
          transition: all 0.28s;
          left: $base-left-menu-width;
          width: $base-right-content-width;
          box-shadow: $base-box-shadow;
        }

        .nav-bar-container {
          position: relative;
          box-sizing: border-box;
        }

        .tags-view-container {
          padding-left: 5px;
          padding-right: 5px;
          box-sizing: border-box;
        }

        .app-main-container {
          margin: 15px auto;
          width: calc(100% - 30px);
          border-radius: $base-border-radius;
          background: $base-color-white;
          min-height: calc(100vh - 127px);
          box-shadow: $base-box-shadow;
        }
      }

      &.is-collapse-main {
        margin-left: $base-left-menu-width-min;

        ::v-deep {
          .fixed-header {
            width: calc(100% - 65px);
            left: $base-left-menu-width-min;
          }
        }
      }
    }
  }

  /*手机端开始*/
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
            margin: 5px !important;
            width: calc(100% - 10px) !important;
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

  /*手机端结束*/
}
</style>
