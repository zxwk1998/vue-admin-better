<template>
  <div :class="classObj" class="vue-admin-better-wrapper">
    <div
      v-if="'horizontal' === layout"
      :class="{
        fixed: header === 'fixed',
        'no-tabs-bar': tabsBar === 'false' || tabsBar === false,
      }"
      class="layout-container-horizontal"
    >
      <div :class="header === 'fixed' ? 'fixed-header' : ''">
        <vab-top />
        <div v-if="tabsBar === 'true' || tabsBar === true" :class="{ 'tag-view-show': tabsBar }">
          <el-scrollbar>
            <vab-tabs />
          </el-scrollbar>
        </div>
      </div>
      <div class="vab-main main-padding">
        <vab-ad />
        <vab-app-main />
      </div>
    </div>
    <div
      v-else
      :class="{
        fixed: header === 'fixed',
        'no-tabs-bar': tabsBar === 'false' || tabsBar === false,
      }"
      class="layout-container-vertical"
    >
      <div v-if="device === 'mobile' && collapse === false" class="mask" @click="handleFoldSideBar" />
      <vab-side />
      <div :class="collapse ? 'is-collapse-main' : ''" class="vab-main">
        <div :class="header === 'fixed' ? 'fixed-header' : ''">
          <vab-nav />
          <vab-tabs v-if="tabsBar === 'true' || tabsBar === true" />
        </div>
        <vab-ad />
        <vab-app-main />
      </div>
    </div>
    <el-backtop />
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import { tokenName } from '@/config'

  export default {
    name: 'Layout',
    data() {
      return {
        oldLayout: '',
        controller: new window.AbortController(),
        timeOutID: null,
      }
    },
    computed: {
      ...mapGetters({
        layout: 'settings/layout',
        tabsBar: 'settings/tabsBar',
        collapse: 'settings/collapse',
        header: 'settings/header',
        device: 'settings/device',
      }),
      classObj() {
        return {
          mobile: this.device === 'mobile',
        }
      },
    },
    beforeMount() {
      window.addEventListener('resize', this.handleResize)
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.handleResize)
      this.controller.abort()
      clearTimeout(this.timeOutID)
    },
    mounted() {
      this.oldLayout = this.layout
      const userAgent = navigator.userAgent
      const isMobile = this.handleIsMobile()
      if (isMobile) {
        if (isMobile) {
          //横向布局时如果是手机端访问那么改成纵向版
          this.$store.dispatch('settings/changeLayout', 'vertical')
        } else {
          this.$store.dispatch('settings/changeLayout', this.oldLayout)
        }
        this.$store.dispatch('settings/toggleDevice', 'mobile')
        this.timeOutID = setTimeout(() => {
          this.$store.dispatch('settings/foldSideBar')
        }, 2000)
      } else {
        this.$store.dispatch('settings/openSideBar')
      }
      this.$nextTick(() => {
        window.addEventListener(
          'storage',
          (e) => {
            if (e.key === tokenName || e.key === null) window.location.reload()
            if (e.key === tokenName && e.value === null) window.location.reload()
          },
          {
            capture: false,
            signal: this.controller?.signal,
          }
        )
      })
    },
    methods: {
      ...mapActions({
        handleFoldSideBar: 'settings/foldSideBar',
      }),
      handleIsMobile() {
        return document.body.getBoundingClientRect().width - 1 < 992
      },
      handleResize() {
        if (!document.hidden) {
          const isMobile = this.handleIsMobile()
          if (isMobile) {
            //横向布局时如果是手机端访问那么改成纵向版
            this.$store.dispatch('settings/changeLayout', 'vertical')
          } else {
            this.$store.dispatch('settings/changeLayout', this.oldLayout)
          }

          this.$store.dispatch('settings/toggleDevice', isMobile ? 'mobile' : 'desktop')
        }
      },
    },
  }
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

  .vue-admin-better-wrapper {
    position: relative;
    width: 100%;
    height: 100%;

    .layout-container-horizontal {
      position: relative;

      &.fixed {
        padding-top: calc(#{$base-top-bar-height} + #{$base-tabs-bar-height});
      }

      &.fixed.no-tabs-bar {
        padding-top: $base-top-bar-height;
      }

      ::v-deep {
        .vab-main {
          width: 88%;
          margin: auto;
        }

        .fixed-header {
          @include fix-header;
        }

        .tag-view-show {
          background: $base-color-white;
          box-shadow: $base-box-shadow;
        }

        .nav-container {
          .fold-unfold {
            display: none;
          }
        }

        .main-padding {
          .app-main-container {
            margin-top: $base-padding;
            margin-bottom: $base-padding;
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
        padding-top: calc(#{$base-nav-bar-height} + #{$base-tabs-bar-height});
      }

      &.fixed.no-tabs-bar {
        padding-top: $base-nav-bar-height;
      }

      .vab-main {
        position: relative;
        min-height: 100%;
        margin-left: $base-left-menu-width;
        background: #f6f8f9;
        transition: $base-transition;

        ::v-deep {
          .fixed-header {
            @include fix-header;

            left: $base-left-menu-width;
            width: $base-right-content-width;
            box-shadow: $base-box-shadow;
            transition: $base-transition;
          }

          .nav-container {
            position: relative;
            box-sizing: border-box;
          }

          .tabs-container {
            box-sizing: border-box;
          }

          .app-main-container {
            width: calc(100% - #{$base-padding} - #{$base-padding});
            margin: $base-padding auto;
            background: $base-color-white;
            border-radius: $base-border-radius;
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
          .el-scrollbar.side-container.is-collapse {
            width: 0;
          }

          .vab-main {
            width: 100%;
            margin-left: 0;
          }
        }

        .vab-main {
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
