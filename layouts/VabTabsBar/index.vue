<template>
  <div id="tabs-bar-container" class="tabs-bar-container">
    <el-tabs
      v-model="tabActive"
      class="tabs-content"
      type="card"
      @tab-click="handleTabClick"
      @tab-remove="handleTabRemove"
    >
      <el-tab-pane
        v-for="item in visitedRoutes"
        :key="item.path"
        :closable="!isAffix(item)"
        :label="item.meta.title"
        :name="item.path"
      ></el-tab-pane>
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
        const { visitedRoutes } = await this.$store.dispatch(
          'tabsBar/delRoute',
          view
        )
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
        const { visitedRoutes } = await this.$store.dispatch(
          'tabsBar/delRoute',
          view
        )
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
        const { visitedRoutes } = await this.$store.dispatch(
          'tabsBar/delAllRoutes'
        )
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
    height: $base-tabs-bar-height;
    padding-right: $base-padding;
    padding-left: $base-padding;
    user-select: none;
    background: $base-color-white;
    border-top: 1px solid #f6f6f6;

    ::v-deep {
      .fold-unfold {
        margin-right: $base-padding;
      }
    }

    .tabs-content {
      width: calc(100% - 90px);
      height: $base-tag-item-height;

      ::v-deep {
        .el-tabs__nav-next,
        .el-tabs__nav-prev {
          height: $base-tag-item-height;
          line-height: $base-tag-item-height;
        }

        .el-tabs__header {
          border-bottom: 0;

          .el-tabs__nav {
            border: 0;
          }

          .el-tabs__item {
            box-sizing: border-box;
            height: $base-tag-item-height;
            margin-right: 5px;
            line-height: $base-tag-item-height;
            border: 1px solid $base-border-color;
            border-radius: $base-border-radius;
            transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) !important;

            &.is-active {
              border: 1px solid $base-color-blue;
            }
          }
        }
      }
    }

    .more {
      display: flex;
      align-content: center;
      align-items: center;
      cursor: pointer;
    }
  }
</style>
