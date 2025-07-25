<template>
  <div class="top-container">
    <div class="vab-main">
      <el-row>
        <el-col :lg="7" :md="7" :sm="7" :xl="7" :xs="7">
          <vab-logo />
        </el-col>
        <el-col :lg="12" :md="12" :sm="12" :xl="12" :xs="12">
          <el-menu
            active-text-color=" hsla(0, 0%, 100%, 0.95)"
            background-color="#191a23"
            :collapse="collapse"
            :collapse-transition="false"
            :default-active="activeMenu"
            :default-openeds="defaultOpens"
            text-color=" hsla(0, 0%, 100%, 0.95)"
            menu-trigger="hover"
            mode="horizontal"
          >
            <template v-for="route in routes">
              <vab-side-item v-if="!route.hidden" :key="route.path" :full-path="route.path" :item="route" />
            </template>
          </el-menu>
        </el-col>
        <el-col :lg="5" :md="5" :sm="5" :xl="5" :xs="5">
          <div class="right-panel">
            <vab-error-log />
            <div class="right-menu">
              <vab-full-screen @refresh="refreshRoute" />
              <vab-theme class="hidden-md-and-down" />
            </div>
            <vab-icon :icon="['fas', 'sync-alt']" :pulse="pulse" title="重载路由" @click="refreshRoute" />
            <vab-avatar />
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import variables from '@/styles/variables.scss'
  import { mapGetters } from 'vuex'

  export default {
    name: 'VabTop',
    data() {
      return {
        pulse: false,
        menuTrigger: 'hover',
      }
    },
    computed: {
      ...mapGetters({
        routes: 'routes/routes',
        visitedRoutes: 'tabsBar/visitedRoutes',
      }),
      activeMenu() {
        const route = this.$route
        const { meta, path } = route
        if (meta.activeMenu) {
          return meta.activeMenu
        }
        return path
      },
      variables() {
        return variables
      },
    },
    methods: {
      async refreshRoute() {
        this.$baseEventBus.$emit('reload-router-view')
        this.pulse = true
        this.timeOutID = setTimeout(() => {
          this.pulse = false
        }, 1000)
      },
    },

    beforeDestroy() {
      clearTimeout(this.timeOutID)
    },
  }
</script>
<style lang="scss" scoped>
  .top-container {
    display: flex;
    align-items: center;
    justify-items: flex-end;
    height: $base-top-bar-height;
    background: $base-menu-background;

    .vab-main {
      background: $base-menu-background;

      ::v-deep {
        .el-menu {
          &.el-menu--horizontal {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            height: $base-top-bar-height;
            border-bottom: 0 solid transparent !important;

            .el-menu-item,
            .el-submenu__title {
              padding: 0 15px;
            }

            @media only screen and (max-width: 767px) {
              .el-menu-item,
              .el-submenu__title {
                padding: 0 8px;
              }

              li:nth-child(4),
              li:nth-child(5) {
                display: none !important;
              }
            }

            > .el-menu-item {
              height: $base-top-bar-height;
              line-height: $base-top-bar-height;
            }

            > .el-submenu {
              .el-submenu__title {
                height: $base-top-bar-height;
                line-height: $base-top-bar-height;
              }
            }
          }

          svg {
            width: 1rem;
            margin-right: 3px;
          }

          &--horizontal {
            .el-menu {
              .el-menu-item,
              .el-submenu__title {
                height: $base-menu-item-height;
                line-height: $base-menu-item-height;
              }
            }

            .el-submenu,
            .el-menu-item {
              &.is-active {
                background-color: $base-color-blue !important;
                border-bottom: 0 solid transparent !important;

                .el-submenu__title {
                  border-bottom: 0 solid transparent !important;
                }
              }
            }

            > .el-menu-item {
              .el-tag {
                margin-top: calc(#{$base-top-bar-height} / 2 - 7.5px);
                margin-left: 5px;
              }

              @media only screen and (max-width: 1199px) {
                .el-tag {
                  display: none;
                }
              }

              &.is-active {
                background-color: transparent !important;
                border-bottom: 3px solid $base-color-blue !important;
              }
            }
          }
        }
      }
    }

    .right-panel {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      height: $base-top-bar-height;

      ::v-deep {
        .username,
        .user-role {
          color: rgba($base-color-white, 0.9);
        }

        .username + i {
          color: rgba($base-color-white, 0.9);
        }

        svg {
          width: 1em;
          height: 1em;
          margin-right: 15px;
          font-size: $base-font-size-big;
          color: rgba($base-color-white, 0.9);
          cursor: pointer;
          fill: rgba($base-color-white, 0.9);
        }

        button {
          svg {
            margin-right: 0;
            color: rgba($base-color-white, 0.9);
            cursor: pointer;
            fill: rgba($base-color-white, 0.9);
          }
        }

        .el-badge {
          margin-right: 15px;
        }
      }
    }
  }
</style>
