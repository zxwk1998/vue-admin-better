<template>
  <div id="tabs-bar-container" class="tabs-bar-container">
    <el-tabs v-model="tabActive" class="tabs-content" type="card" @tab-click="handleTabClick" @tab-remove="handleTabRemove">
      <el-tab-pane v-for="item in visitedRoutes" :key="item.path" :closable="!isAffix(item)" :name="item.path">
        <template slot="label">
          <vab-icon v-if="getTabIcon(item)" :icon="['fas', getTabIcon(item)]" class="tab-icon" />
          <span>{{ item.meta.title }}</span>
        </template>
      </el-tab-pane>
    </el-tabs>

    <el-dropdown @command="handleCommand">
      <span style="cursor: pointer">
        更多操作
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown" class="tabs-more">
        <el-dropdown-item command="closeOtherstabs">
          <vab-icon :icon="['fas', 'times-circle']" />
          关闭其他
        </el-dropdown-item>
        <el-dropdown-item command="closeLefttabs">
          <vab-icon :icon="['fas', 'arrow-alt-circle-left']"></vab-icon>
          关闭左侧
        </el-dropdown-item>
        <el-dropdown-item command="closeRighttabs">
          <vab-icon :icon="['fas', 'arrow-alt-circle-right']"></vab-icon>
          关闭右侧
        </el-dropdown-item>
        <el-dropdown-item command="closeAlltabs">
          <vab-icon :icon="['fas', 'ban']"></vab-icon>
          关闭全部
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
  import path from 'path'
  import { mapGetters } from 'vuex'

  export default {
    name: 'VabTabsBar',
    data() {
      return {
        affixtabs: [],
        tabActive: '',
      }
    },

    computed: {
      ...mapGetters({
        visitedRoutes: 'tabsBar/visitedRoutes',
        routes: 'routes/routes',
      }),
    },
    watch: {
      $route: {
        handler(route) {
          this.inittabs()
          this.addtabs()
          let tabActive = ''
          this.visitedRoutes.forEach((item, index) => {
            if (item.path === this.$route.path) {
              tabActive = item.path
            }
          })
          this.tabActive = tabActive
        },
        immediate: true,
      },
    },
    mounted() {
      //console.log(this.visitedRoutes);
    },
    methods: {
      async handleTabRemove(tabActive) {
        let view
        this.visitedRoutes.forEach((item, index) => {
          if (tabActive == item.path) {
            view = item
          }
        })
        const { visitedRoutes } = await this.$store.dispatch('tabsBar/delRoute', view)
        if (this.isActive(view)) {
          this.toLastTag(visitedRoutes, view)
        }
      },
      handleTabClick(tab) {
        const route = this.visitedRoutes.filter((item, index) => {
          if (tab.index == index) return item
        })[0]
        if (this.$route.path !== route.path) {
          this.$router.push({
            path: route.path,
            query: route.query,
            fullPath: route.fullPath,
          })
        } else {
          return false
        }
      },
      isActive(route) {
        return route.path === this.$route.path
      },
      isAffix(tag) {
        return tag.meta && tag.meta.affix
      },
      filterAffixtabs(routes, basePath = '/') {
        let tabs = []
        routes.forEach((route) => {
          if (route.meta && route.meta.affix) {
            const tagPath = path.resolve(basePath, route.path)
            tabs.push({
              fullPath: tagPath,
              path: tagPath,
              name: route.name,
              meta: { ...route.meta },
            })
          }
          if (route.children) {
            const temptabs = this.filterAffixtabs(route.children, route.path)
            if (temptabs.length >= 1) {
              tabs = [...tabs, ...temptabs]
            }
          }
        })
        return tabs
      },
      inittabs() {
        const affixtabs = (this.affixtabs = this.filterAffixtabs(this.routes))
        for (const tag of affixtabs) {
          if (tag.name) {
            this.$store.dispatch('tabsBar/addVisitedRoute', tag)
          }
        }
      },
      addtabs() {
        const { name } = this.$route
        if (name) {
          this.$store.dispatch('tabsBar/addVisitedRoute', this.$route)
        }
        return false
      },
      handleCommand(command) {
        switch (command) {
          case 'refreshRoute':
            this.refreshRoute()
            break
          case 'closeOtherstabs':
            this.closeOtherstabs()
            break
          case 'closeLefttabs':
            this.closeLefttabs()
            break
          case 'closeRighttabs':
            this.closeRighttabs()
            break
          case 'closeAlltabs':
            this.closeAlltabs()
            break
        }
      },
      async refreshRoute() {
        this.$baseEventBus.$emit('reloadrouter-view')
      },
      async closeSelectedTag(view) {
        const { visitedRoutes } = await this.$store.dispatch('tabsBar/delRoute', view)
        if (this.isActive(view)) {
          this.toLastTag(visitedRoutes, view)
        }
      },
      async closeOtherstabs() {
        const view = await this.toThisTag()
        await this.$store.dispatch('tabsBar/delOthersRoutes', view)
      },
      async closeLefttabs() {
        const view = await this.toThisTag()
        await this.$store.dispatch('tabsBar/delLeftRoutes', view)
      },
      async closeRighttabs() {
        const view = await this.toThisTag()
        await this.$store.dispatch('tabsBar/delRightRoutes', view)
      },
      async closeAlltabs() {
        const view = await this.toThisTag()
        const { visitedRoutes } = await this.$store.dispatch('tabsBar/delAllRoutes')
        if (this.affixtabs.some((tag) => tag.path === view.path)) {
          return
        }
        this.toLastTag(visitedRoutes, view)
      },
      toLastTag(visitedRoutes, view) {
        const latestView = visitedRoutes.slice(-1)[0]
        if (latestView) {
          this.$router.push(latestView)
        } else {
          this.$router.push('/')
        }
      },
      async toThisTag() {
        const view = this.visitedRoutes.filter((item, index) => {
          if (item.path === this.$route.fullPath) {
            return item
          }
        })[0]
        if (this.$route.path !== view.path) this.$router.push(view)
        return view
      },
      getTabIcon(item) {
        // 如果当前路由有图标，直接返回
        if (item.meta && item.meta.icon) {
          return item.meta.icon
        }

        // 查找父级路由的图标
        const parentIcon = this.findParentIcon(item.path)
        if (parentIcon) {
          return parentIcon
        }

        return null
      },

      findParentIcon(path) {
        // 从路径中提取父级路径
        const pathParts = path.split('/').filter((part) => part)
        if (pathParts.length <= 1) {
          return null
        }

        // 查找父级路由
        const findRouteByPath = (routes, targetPath) => {
          for (const route of routes) {
            if (route.path === targetPath) {
              return route
            }
            if (route.children) {
              const found = findRouteByPath(route.children, targetPath)
              if (found) return found
            }
          }
          return null
        }

        // 尝试查找父级路径
        for (let i = pathParts.length - 1; i > 0; i--) {
          const parentPath = '/' + pathParts.slice(0, i).join('/')
          const parentRoute = findRouteByPath(this.routes, parentPath)
          if (parentRoute && parentRoute.meta && parentRoute.meta.icon) {
            return parentRoute.meta.icon
          }
        }

        return null
      },
    },
  }
</script>

<style lang="scss" scoped>
  .tabs-bar-container {
    position: relative;
    box-sizing: border-box;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    height: 54px;
    padding-right: $base-padding;
    padding-left: $base-padding;
    user-select: none;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.6);

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.2) 100%);
      pointer-events: none;
    }

    ::v-deep {
      .fold-unfold {
        margin-right: $base-padding;
      }
    }

    .tabs-content {
      position: relative;
      width: calc(100% - 90px);
      height: $base-tag-item-height;

      ::v-deep {
        .el-tabs__nav-next,
        .el-tabs__nav-prev {
          height: $base-tag-item-height;
          line-height: $base-tag-item-height;
          color: rgba(0, 0, 0, 0.6);
          background: rgba(255, 255, 255, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);

          &:hover {
            color: rgba(0, 0, 0, 0.8);
            background: rgba(255, 255, 255, 0.8);
            border-color: rgba(255, 255, 255, 1);
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.05);
          }
        }

        .el-tabs__header {
          border-bottom: 0;

          .el-tabs__nav {
            border: 0;
          }

          .el-tabs__item {
            position: relative;
            box-sizing: border-box;
            height: $base-tag-item-height;
            margin-right: 8px;
            margin-top: 3px;
            padding: 0 20px;
            line-height: $base-tag-item-height;
            border: 1px solid rgba(64, 158, 255, 0.9);
            color: rgba(64, 158, 255, 0.9);
            border-radius: 5px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            overflow: hidden;

            .tab-icon {
              margin-right: 6px;
              font-size: 12px;
            }

            &::before {
              content: '';
              position: absolute;
              top: 0;
              left: -100%;
              width: 100%;
              height: 100%;
              background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
              transition: left 0.6s cubic-bezier(0.4, 0, 0.2, 1);
            }

            &:hover {
              color: rgba(255, 255, 255, 0.95);
              background: rgba(64, 158, 255, 0.9);
              border-color: rgba(64, 158, 255, 1);

              &::before {
                left: 100%;
              }
            }

            &.is-active {
              color: rgba(255, 255, 255, 0.95);
              background: rgba(64, 158, 255, 1);
              border-color: rgba(64, 158, 255, 1);
            }

            .el-icon-close {
              position: relative;
              margin-left: 8px;
              font-size: 12px;
              color: rgba(255, 255, 255, 0.7);
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
              border-radius: 5px;
              padding: 2px;

              &:hover {
                color: rgba(255, 255, 255, 0.9);
                background: rgba(255, 255, 255, 0.2);
                transform: scale(1.2);
              }
            }
          }
        }
      }
    }

    .more {
      position: relative;
      display: flex;
      align-content: center;
      align-items: center;
      padding: 8px 16px;
      color: rgba(0, 0, 0, 0.7);
      background: rgba(255, 255, 255, 0.6);
      border: 1px solid rgba(255, 255, 255, 0.8);
      border-radius: 16px;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);

      &:hover {
        color: rgba(0, 0, 0, 0.9);
        background: rgba(255, 255, 255, 0.8);
        border-color: rgba(255, 255, 255, 1);
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.05);
      }

      &:active {
        transform: translateY(0);
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.05);
      }
    }
  }

  // 响应式设计
  @media (max-width: 768px) {
    .tabs-bar-container {
      padding: 0 12px;

      .tabs-content {
        width: calc(100% - 80px);

        ::v-deep {
          .el-tabs__item {
            padding: 0 12px;
            margin-right: 6px;
            font-size: 12px;
            border-radius: 12px;
          }
        }
      }

      .more {
        padding: 6px 12px;
        font-size: 12px;
      }
    }
  }
</style>
