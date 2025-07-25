<template>
  <span v-if="themeBar">
    <vab-icon :icon="['fas', 'crown']" title="主题配置" @click="handleOpenTheme" />
    <div class="theme-setting">
      <div @click="handleOpenTheme">
        <vab-icon :icon="['fas', 'crown']" />
        <p>主题配置</p>
      </div>
      <div @click="handleGetCode">
        <vab-icon :icon="['fas', 'laptop-code']"></vab-icon>
        <p>拷贝源码</p>
      </div>
    </div>

    <el-drawer :visible.sync="drawerVisible" append-to-body direction="rtl" size="300px" title="主题配置">
      <el-scrollbar style="height: 80vh; overflow: hidden">
        <div class="el-drawer__body">
          <div class="theme-config-container">
            <div class="config-section">
              <div class="section-header">
                <i class="el-icon-picture-outline"></i>
                <span>主题风格</span>
              </div>
              <div class="theme-options">
                <div
                  class="theme-option"
                  :class="{ active: theme.name === 'default' }"
                  @click="
                    theme.name = 'default'
                    handleSaveTheme()
                  "
                >
                  <div class="theme-preview default-theme">
                    <div class="preview-header"></div>
                    <div class="preview-sidebar"></div>
                    <div class="preview-content"></div>
                  </div>
                  <span class="theme-name">默认主题</span>
                </div>
                <div
                  class="theme-option"
                  :class="{ active: theme.name === 'green' }"
                  @click="
                    theme.name = 'green'
                    handleSaveTheme()
                  "
                >
                  <div class="theme-preview green-theme">
                    <div class="preview-header"></div>
                    <div class="preview-sidebar"></div>
                    <div class="preview-content"></div>
                  </div>
                  <span class="theme-name">绿荫草场</span>
                </div>
                <div
                  class="theme-option"
                  :class="{ active: theme.name === 'glory' }"
                  @click="
                    theme.name = 'glory'
                    handleSaveTheme()
                  "
                >
                  <div class="theme-preview glory-theme">
                    <div class="preview-header"></div>
                    <div class="preview-sidebar"></div>
                    <div class="preview-content"></div>
                  </div>
                  <span class="theme-name">荣耀典藏</span>
                </div>
              </div>
            </div>

            <div class="config-section">
              <div class="section-header">
                <i class="el-icon-s-grid"></i>
                <span>布局设置</span>
              </div>
              <div class="layout-options">
                <div
                  class="layout-option"
                  :class="{ active: theme.layout === 'vertical' }"
                  @click="
                    theme.layout = 'vertical'
                    handleSaveTheme()
                  "
                >
                  <div class="layout-preview vertical-layout">
                    <div class="preview-header"></div>
                    <div class="preview-sidebar"></div>
                    <div class="preview-content"></div>
                  </div>
                  <span class="layout-name">纵向布局</span>
                </div>
                <div
                  class="layout-option"
                  :class="{ active: theme.layout === 'horizontal' }"
                  @click="
                    theme.layout = 'horizontal'
                    handleSaveTheme()
                  "
                >
                  <div class="layout-preview horizontal-layout">
                    <div class="preview-header"></div>
                    <div class="preview-main">
                      <div class="preview-sidebar"></div>
                      <div class="preview-content"></div>
                    </div>
                  </div>
                  <span class="layout-name">横向布局</span>
                </div>
              </div>
            </div>

            <div class="config-section">
              <div class="section-header">
                <i class="el-icon-setting"></i>
                <span>功能设置</span>
              </div>
              <div class="feature-options">
                <div class="feature-item">
                  <div class="feature-info">
                    <span class="feature-name">固定头部</span>
                    <span class="feature-desc">头部始终固定在页面顶部</span>
                  </div>
                  <el-switch v-model="theme.header" active-value="fixed" inactive-value="noFixed" @change="handleSaveTheme" />
                </div>
                <div class="feature-item">
                  <div class="feature-info">
                    <span class="feature-name">多标签页</span>
                    <span class="feature-desc">开启页面标签页功能</span>
                  </div>
                  <el-switch v-model="theme.tabsBar" active-value="true" inactive-value="false" @change="handleSaveTheme" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-scrollbar>

      <div class="el-drawer__footer">
        <el-button type="primary" @click="handleSaveTheme">保存设置</el-button>
        <el-button @click="drawerVisible = false">取消</el-button>
      </div>
    </el-drawer>
  </span>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import { layout as defaultLayout } from '@/config'

  export default {
    name: 'VabTheme',
    data() {
      return {
        drawerVisible: false,
        theme: {
          name: 'default',
          layout: '',
          header: 'fixed',
          tabsBar: '',
        },
      }
    },
    computed: {
      ...mapGetters({
        layout: 'settings/layout',
        header: 'settings/header',
        tabsBar: 'settings/tabsBar',
        themeBar: 'settings/themeBar',
      }),
    },
    created() {
      const handleTheme = () => {
        this.handleOpenTheme()
      }

      this.$baseEventBus.$on('theme', handleTheme)
      const theme = localStorage.getItem('vue-admin-better-theme')
      if (null !== theme) {
        this.theme = JSON.parse(theme)
        this.handleSaveTheme()
      } else {
        this.theme.layout = this.layout
        this.theme.header = this.header
        this.theme.tabsBar = this.tabsBar
      }

      this.$once('hook:beforeDestroy', () => {
        this.$baseEventBus.$off('theme', handleTheme)
      })
    },
    methods: {
      ...mapActions({
        changeLayout: 'settings/changeLayout',
        changeHeader: 'settings/changeHeader',
        changeTabsBar: 'settings/changeTabsBar',
      }),
      handleIsMobile() {
        return document.body.getBoundingClientRect().width - 1 < 992
      },
      handleOpenTheme() {
        this.drawerVisible = true
      },
      handleSaveTheme() {
        let { name, layout, header, tabsBar } = this.theme
        localStorage.setItem(
          'vue-admin-better-theme',
          `{
            "name":"${name}",
            "layout":"${layout}",
            "header":"${header}",
            "tabsBar":"${tabsBar}"
          }`
        )
        if (!this.handleIsMobile()) this.changeLayout(layout)
        this.changeHeader(header)
        this.changeTabsBar(tabsBar)
        document.getElementsByTagName('body')[0].className = `vue-admin-better-theme-${name}`
        this.drawerVisible = false
      },
      handleGetCode() {
        const url = 'https://github.com/zxwk1998/vue-admin-better/tree/master/src/views'
        let path = this.$route.path + '/index.vue'
        if (path === '/vab/menu1/menu1-1/menu1-1-1/index.vue') {
          path = '/vab/nested/menu1/menu1-1/menu1-1-1/index.vue'
        }
        if (path === '/vab/icon/awesomeIcon/index.vue') {
          path = '/vab/icon/index.vue'
        }
        if (path === '/vab/icon/remixIcon/index.vue') {
          path = '/vab/icon/remixIcon.vue'
        }
        if (path === '/vab/icon/colorfulIcon/index.vue') {
          path = '/vab/icon/colorfulIcon.vue'
        }
        if (path === '/vab/table/comprehensiveTable/index.vue') {
          path = '/vab/table/index.vue'
        }
        if (path === '/vab/table/inlineEditTable/index.vue') {
          path = '/vab/table/inlineEditTable.vue'
        }
        window.open(url + path)
      },
    },
  }
</script>

<style lang="scss" scoped>
  @mixin right-bar {
    position: fixed;
    right: 0;
    z-index: $base-z-index;
    width: 60px;
    min-height: 60px;
    text-align: center;
    cursor: pointer;
    background: $base-color-blue;
    border-radius: $base-border-radius;

    > div {
      padding-top: 10px;
      border-bottom: 0 !important;

      &:hover {
        opacity: 0.9;
      }

      & + div {
        border-top: 1px solid $base-color-white;
      }

      p {
        padding: 0;
        margin: 0;
        font-size: $base-font-size-small;
        line-height: 30px;
        color: $base-color-white;
      }
    }
  }

  .theme-setting {
    @include right-bar;

    top: calc((100vh - 110px) / 2);

    ::v-deep {
      svg:not(:root).svg-inline--fa {
        display: block;
        margin-right: auto;
        margin-left: auto;
        color: $base-color-white;
      }

      .svg-icon {
        display: block;
        margin-right: auto;
        margin-left: auto;
        font-size: 20px;
        color: $base-color-white;
        fill: $base-color-white;
      }
    }
  }

  .el-drawer__body {
    padding: 20px;
  }

  .el-drawer__footer {
    border-top: 1px solid #dedede;
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 10px 0 0 20px;
    height: 50px;
  }

  .theme-config-container {
    .config-section {
      margin-bottom: 30px;

      .section-header {
        display: flex;
        align-items: center;
        margin-bottom: 16px;
        padding-bottom: 8px;
        border-bottom: 1px solid #f0f0f0;

        i {
          margin-right: 8px;
          font-size: 16px;
          color: #677ae4;
        }

        span {
          font-size: 16px;
          font-weight: 600;
          color: #333;
        }
      }

      .theme-options {
        display: flex;
        flex-direction: column;
        gap: 12px;

        .theme-option {
          display: flex;
          align-items: center;
          padding: 12px;
          border: 2px solid #f0f0f0;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;

          &:hover {
            border-color: #677ae4;
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(64, 158, 255, 0.1);
          }

          &.active {
            border-color: #677ae4;
            background: rgba(64, 158, 255, 0.05);
            box-shadow: 0 4px 12px rgba(64, 158, 255, 0.15);
          }

          .theme-preview {
            width: 60px;
            height: 40px;
            margin-right: 12px;
            border-radius: 4px;
            overflow: hidden;
            position: relative;

            .preview-header {
              height: 8px;
              background: #f0f0f0;
            }

            .preview-sidebar {
              position: absolute;
              left: 0;
              top: 8px;
              width: 12px;
              height: 32px;
              background: #e0e0e0;
            }

            .preview-content {
              position: absolute;
              left: 12px;
              top: 8px;
              width: 48px;
              height: 32px;
              background: #fafafa;
            }

            &.default-theme {
              .preview-header {
                background: $base-color-default;
              }
              .preview-sidebar {
                background: #2c3e50;
              }
              .preview-content {
                background: #ffffff;
              }
            }

            &.green-theme {
              .preview-header {
                background: #67c23a;
              }
              .preview-sidebar {
                background: #2d5a27;
              }
              .preview-content {
                background: #f0f9ff;
              }
            }

            &.glory-theme {
              .preview-header {
                background: #e6a23c;
              }
              .preview-sidebar {
                background: #8b4513;
              }
              .preview-content {
                background: #fff8e1;
              }
            }
          }

          .theme-name {
            font-size: 14px;
            font-weight: 500;
            color: #333;
          }
        }
      }

      .layout-options {
        display: flex;
        flex-direction: column;
        gap: 12px;

        .layout-option {
          display: flex;
          align-items: center;
          padding: 12px;
          border: 2px solid #f0f0f0;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;

          &:hover {
            border-color: #677ae4;
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(64, 158, 255, 0.1);
          }

          &.active {
            border-color: #677ae4;
            background: rgba(64, 158, 255, 0.05);
            box-shadow: 0 4px 12px rgba(64, 158, 255, 0.15);
          }

          .layout-preview {
            width: 60px;
            height: 40px;
            margin-right: 12px;
            border-radius: 4px;
            overflow: hidden;
            position: relative;

            .preview-header {
              height: 8px;
              background: #677ae4;
            }

            .preview-main {
              position: absolute;
              left: 0;
              top: 8px;
              width: 100%;
              height: 32px;
              display: flex;

              .preview-sidebar {
                background: #2c3e50;
              }

              .preview-content {
                background: #ffffff;
              }
            }

            &.vertical-layout {
              .preview-header {
                height: 8px;
                background: #677ae4;
              }

              .preview-sidebar {
                position: absolute;
                left: 0;
                top: 8px;
                width: 12px;
                height: 32px;
                background: #2c3e50;
              }

              .preview-content {
                position: absolute;
                left: 12px;
                top: 8px;
                width: 48px;
                height: 32px;
                background: #ffffff;
              }
            }

            &.horizontal-layout {
              .preview-main {
                .preview-sidebar {
                  width: 100%;
                  height: 8px;
                }
                .preview-content {
                  width: 100%;
                  height: 24px;
                  margin-top: 8px;
                }
              }
            }
          }

          .layout-name {
            font-size: 14px;
            font-weight: 500;
            color: #333;
          }
        }
      }

      .feature-options {
        .feature-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 0;
          border-bottom: 1px solid #f0f0f0;

          &:last-child {
            border-bottom: none;
          }

          .feature-info {
            flex: 1;
            margin-right: 16px;

            .feature-name {
              display: block;
              font-size: 14px;
              font-weight: 500;
              color: #333;
              margin-bottom: 4px;
            }

            .feature-desc {
              display: block;
              font-size: 12px;
              color: #999;
              line-height: 1.4;
            }
          }
        }
      }
    }
  }
</style>
<style lang="scss">
  .el-drawer__wrapper {
    outline: none !important;

    * {
      outline: none !important;
    }
  }

  .vab-color-picker {
    .el-color-dropdown__link-btn {
      display: none;
    }
  }
</style>
