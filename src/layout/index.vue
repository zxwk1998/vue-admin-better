<template>
  <a-layout class="vab-layout-wrap">
    <div
      v-if="device === 'mobile' && !collapse"
      class="vab-mask"
      @click="handleFoldSideBar"
    ></div>
    <a-layout-sider
      collapsible
      class="vab-sider"
      width="250"
      v-model:collapsed="collapse"
      :class="classObj"
      :trigger="null"
    >
      <vab-logo />
      <a-menu
        class="vab-menu"
        theme="dark"
        mode="inline"
        v-model:selectedKeys="selectedKeys"
        v-model:openKeys="openKeys"
      >
        <vab-menu v-for="route in routes" :key="route.path" :item="route" />
      </a-menu>
    </a-layout-sider>
    <a-layout
      class="vab-layout"
      :class="'mobile' === device ? 'vab-mobile-layout' : ''"
    >
      <a-layout-header class="vab-header">
        <a-row>
          <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
            <menu-unfold-outlined
              v-if="collapse"
              class="trigger"
              @click="toggleCollapse"
            />
            <menu-fold-outlined
              v-else
              class="trigger"
              @click="toggleCollapse"
            />
          </a-col>
          <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
            <vab-avatar />
          </a-col>
        </a-row>
      </a-layout-header>
      <vab-tabs />
      <vab-content />
    </a-layout>
  </a-layout>
</template>
<script>
  import VabLogo from './vab-logo'
  import VabAvatar from './vab-avatar'
  import VabMenu from './vab-menu'
  import VabTabs from './vab-tabs'
  import VabContent from './vab-content'
  import { mapActions, mapGetters } from 'vuex'
  import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'

  export default {
    components: {
      VabLogo,
      VabAvatar,
      VabMenu,
      VabTabs,
      VabContent,
      MenuUnfoldOutlined,
      MenuFoldOutlined,
    },
    data() {
      return {
        selectedKeys: [],
        openKeys: [],
      }
    },
    computed: {
      ...mapGetters({
        collapse: 'settings/collapse',
        routes: 'routes/routes',
        device: 'settings/device',
      }),
      classObj() {
        return {
          'vab-mobile': this.device === 'mobile',
          'vab-collapse': this.collapse,
        }
      },
    },
    watch: {
      $route: {
        handler({ path, matched }) {
          matched[0].children.length > 1
            ? (this.selectedKeys = [path])
            : (this.selectedKeys = [matched[0].path])
          this.openKeys = [matched[0].path]
        },
        immediate: true,
      },
    },
    beforeMount() {
      window.addEventListener('resize', this.handleLayouts)
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.handleLayouts)
    },
    mounted() {
      this.handleLayouts()
    },
    methods: {
      ...mapActions({
        toggleDevice: 'settings/toggleDevice',
        handleFoldSideBar: 'settings/foldSideBar',
        toggleCollapse: 'settings/toggleCollapse',
      }),
      handleLayouts() {
        const width = document.body.getBoundingClientRect().width
        if (this.width !== width) {
          const isMobile = width - 1 < 992
          this.toggleDevice(isMobile ? 'mobile' : 'desktop')
          this.width = width
        }
      },
    },
  }
</script>
<style lang="less">
  .vab-layout-wrap {
    .vab-sider {
      position: fixed;
      left: 0;
      height: 100vh;
      overflow: auto;
      .vab-menu {
        height: calc(100vh - @vab-header-height);
      }
    }
    .vab-layout {
      padding-left: 250px;
      transition: all 0.2s;
    }
    .vab-mobile-layout {
      padding-left: 0;
      transition: all 0.2s;
    }
    .vab-collapse {
      .vab-logo .anticon + span {
        display: inline-block;
        max-width: 0;
        opacity: 0;
        transition: all 0.2s;
      }
      & + .vab-layout {
        padding-left: 81px;
        transition: all 0.2s;
      }
    }
    .vab-mask {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 998;
      width: 100%;
      height: 100vh;
      overflow: hidden;
      background: #000;
      opacity: 0.5;
    }
    .vab-mobile {
      position: fixed !important;
      z-index: 999;
      &.vab-collapse {
        width: 0 !important;
        min-width: 0 !important;
        max-width: 0 !important;
        * {
          display: none !important;
          width: 0 !important;
          min-width: 0 !important;
          max-width: 0 !important;
        }
        .ant-menu-item,
        .ant-menu-submenu {
          display: none !important;
          width: 0 !important;
          min-width: 0 !important;
          max-width: 0 !important;
        }
        & + .vab-layout {
          padding-left: 0px !important;
          transition: all 0.2s;
        }
      }
    }
    .vab-header {
      padding: 0;
      background: #fff;
      .ant-col + .ant-col {
        display: flex;
        justify-content: flex-end;
        padding: 0 @vab-padding;
      }
      .trigger {
        height: @vab-header-height;
        padding: 0 @vab-padding;
        font-size: 18px;
        line-height: @vab-header-height;
        cursor: pointer;
        transition: color 0.3s;
        &:hover {
          color: #1890ff;
        }
      }
    }
  }
</style>
