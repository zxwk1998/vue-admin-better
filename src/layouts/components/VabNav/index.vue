<template>
  <div class="nav-container">
    <el-row :gutter="15">
      <el-col :lg="12" :md="12" :sm="12" :xl="12" :xs="4">
        <div class="left-panel">
          <i
            :class="collapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
            :title="collapse ? '展开' : '收起'"
            class="fold-unfold"
            @click="handleCollapse"
          ></i>
          <vab-breadcrumb class="hidden-xs-only" />
        </div>
      </el-col>
      <el-col :lg="12" :md="12" :sm="12" :xl="12" :xs="20">
        <div class="right-panel">
          <vab-error-log />
          <vab-full-screen @refresh="refreshRoute" />
          <vab-theme class="hidden-xs-only" />
          <vab-icon :icon="['fas', 'sync-alt']" :pulse="pulse" title="重载所有路由" @click="refreshRoute" />
          <vab-avatar />
          <!--  <vab-icon
            title="退出系统"
            :icon="['fas', 'sign-out-alt']"
            @click="logout"
          />-->
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'VabNav',
    data() {
      return {
        pulse: false,
        timeOutID: null,
      }
    },
    computed: {
      ...mapGetters({
        collapse: 'settings/collapse',
        visitedRoutes: 'tabsBar/visitedRoutes',
        device: 'settings/device',
        routes: 'routes/routes',
      }),
    },
    methods: {
      ...mapActions({
        changeCollapse: 'settings/changeCollapse',
      }),
      handleCollapse() {
        this.changeCollapse()
      },
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
  .nav-container {
    position: relative;
    height: $base-nav-bar-height;
    padding-right: $base-padding;
    padding-left: $base-padding;
    overflow: hidden;
    user-select: none;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
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

    .left-panel {
      position: relative;
      display: flex;
      align-items: center;
      justify-items: center;
      height: $base-nav-bar-height;

      .fold-unfold {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        color: rgba(0, 0, 0, 0.7);
        background: rgba(255, 255, 255, 0.6);
        border: 1px solid rgba(255, 255, 255, 0.8);
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);

        &:hover {
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

    .right-panel {
      position: relative;
      display: flex;
      align-content: center;
      align-items: center;
      justify-content: flex-end;
      height: $base-nav-bar-height;
      gap: 8px;

      ::v-deep {
        svg {
          width: 1.2em;
          height: 1.2em;
          padding: 8px;
          color: rgba(0, 0, 0, 0.7);
          background: rgba(255, 255, 255, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          cursor: pointer;
          fill: rgba(0, 0, 0, 0.7);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);

          &:hover {
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

        button {
          svg {
            margin-right: 0;
            color: rgba(255, 255, 255, 0.9);
            background: rgba(0, 122, 255, 0.8);
            border-color: rgba(0, 122, 255, 0.9);
            cursor: pointer;
            fill: rgba(255, 255, 255, 0.9);

            &:hover {
              background: rgba(0, 122, 255, 0.9);
              border-color: rgba(0, 122, 255, 1);
            }
          }
        }

        .el-badge {
          margin-right: 0;

          .el-button {
            background: rgba(255, 255, 255, 0.6);
            border: 1px solid rgba(255, 255, 255, 0.8);
            border-radius: 12px;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

            &:hover {
              background: rgba(255, 255, 255, 0.8);
              border-color: rgba(255, 255, 255, 1);
              transform: translateY(-1px);
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.05);
            }
          }
        }
      }
    }
  }

  // 响应式设计
  @media (max-width: 768px) {
    .nav-container {
      padding: 0 12px;

      .left-panel {
        .fold-unfold {
          width: 32px;
          height: 32px;
        }
      }

      .right-panel {
        gap: 4px;

        ::v-deep {
          svg {
            padding: 6px;
            width: 1em;
            height: 1em;
          }
        }
      }
    }
  }
</style>
