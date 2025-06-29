<template>
  <div class="permissions-container">
    <vab-page-header
      description="管理系统权限配置和用户角色分配"
      :icon="['fas', 'shield-alt']"
      :right-icon="['fas', 'user-circle']"
      :right-text="`当前用户: ${username}`"
      title="权限管理"
    />

    <!-- 权限切换卡片 -->
    <el-card class="permission-card" shadow="hover">
      <div slot="header" class="card-header">
        <vab-icon :icon="['fas', 'exchange-alt']" />
        <span>权限切换</span>
      </div>
      <div class="permission-content">
        <div class="permission-info">
          <p class="info-text">
            <vab-icon :icon="['fas', 'info-circle']" />
            intelligence模式：前端根据permissions拦截路由（演示环境默认使用此方案）
          </p>
        </div>

        <el-form ref="form" class="permission-form" :inline="true" :model="form">
          <el-form-item class="account-selector" label="切换账号">
            <el-radio-group v-model="form.account" class="account-radio-group">
              <el-radio-button class="account-radio" label="admin">
                <vab-icon :icon="['fas', 'crown']" />
                <span>管理员</span>
              </el-radio-button>
              <el-radio-button class="account-radio" label="editor">
                <vab-icon :icon="['fas', 'edit']" />
                <span>编辑者</span>
              </el-radio-button>
              <el-radio-button class="account-radio" label="test">
                <vab-icon :icon="['fas', 'user']" />
                <span>测试员</span>
              </el-radio-button>
            </el-radio-group>
          </el-form-item>

          <el-form-item>
            <el-button class="change-btn" type="primary" @click="handleChangePermission">
              <vab-icon :icon="['fas', 'sync-alt']" />
              切换权限
            </el-button>
          </el-form-item>
        </el-form>

        <div class="current-permissions">
          <h4>当前账号拥有的权限：</h4>
          <div class="permissions-display">
            <el-tag v-for="permission in permissions" :key="permission" class="permission-tag" :type="getPermissionTagType(permission)">
              <vab-icon :icon="getPermissionIcon(permission)" />
              {{ permission }}
            </el-tag>
          </div>
        </div>
      </div>
    </el-card>

    <!-- 按钮权限演示卡片 -->
    <el-card class="permission-card" shadow="hover">
      <div slot="header" class="card-header">
        <vab-icon :icon="['fas', 'mouse-pointer']" />
        <span>按钮级权限演示</span>
      </div>
      <div class="button-demo">
        <div class="demo-section">
          <h4>权限按钮展示：</h4>
          <div class="button-group">
            <el-button v-permissions="['admin']" class="demo-btn" type="primary">
              <vab-icon :icon="['fas', 'crown']" />
              我是拥有["admin"]权限的按钮
            </el-button>
            <el-button v-permissions="['editor']" class="demo-btn" type="success">
              <vab-icon :icon="['fas', 'edit']" />
              我是拥有["editor"]权限的按钮
            </el-button>
            <el-button v-permissions="['test']" class="demo-btn" type="warning">
              <vab-icon :icon="['fas', 'user']" />
              我是拥有["test"]权限的按钮
            </el-button>
          </div>
        </div>
      </div>
    </el-card>

    <!-- 路由权限演示卡片 -->
    <el-card class="permission-card" shadow="hover">
      <div slot="header" class="card-header">
        <vab-icon :icon="['fas', 'route']" />
        <span>路由权限演示</span>
      </div>
      <div class="route-demo">
        <div class="demo-info">
          <p class="info-text">
            <vab-icon :icon="['fas', 'info-circle']" />
            all模式：路由以及view文件引入全部交给后端（权限复杂，且随时变更，建议使用此方案）
          </p>
          <p class="info-text">
            settings.js配置authentication为all即可完全交由后端控制，mock中有后端接口示例，权限繁琐，有几十种权限的项目直接用这种。
          </p>
        </div>

        <div class="route-table-container">
          <h4>路由配置表：</h4>
          <el-table
            border
            class="route-table"
            :data="tableData"
            default-expand-all
            highlight-current-row
            row-key="path"
            stripe
            :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
          >
            <el-table-column label="路由名称" prop="name" show-overflow-tooltip width="150">
              <template #default="{ row }">
                <div class="route-name">
                  <vab-icon v-if="row.meta && row.meta.icon" :icon="['fas', row.meta.icon]" />
                  <span>{{ row.name }}</span>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="路径" prop="path" show-overflow-tooltip width="200" />
            <el-table-column label="组件" prop="component" show-overflow-tooltip width="150" />
            <el-table-column label="重定向" prop="redirect" show-overflow-tooltip width="150" />
            <el-table-column label="标题" prop="meta.title" show-overflow-tooltip width="120" />
            <el-table-column label="图标" show-overflow-tooltip width="80">
              <template #default="{ row }">
                <span v-if="row.meta && row.meta.icon">
                  <vab-icon class="route-icon" :icon="['fas', row.meta.icon]" />
                </span>
              </template>
            </el-table-column>
            <el-table-column label="固定" show-overflow-tooltip width="80">
              <template #default="{ row }">
                <el-tag v-if="row.meta && row.meta.affix" size="mini" type="success">是</el-tag>
                <el-tag v-else size="mini" type="info">否</el-tag>
              </template>
            </el-table-column>
            <el-table-column label="无缓存" show-overflow-tooltip width="80">
              <template #default="{ row }">
                <el-tag v-if="row.meta && row.meta.noKeepAlive" size="mini" type="warning">是</el-tag>
                <el-tag v-else size="mini" type="info">否</el-tag>
              </template>
            </el-table-column>
            <el-table-column label="徽章" show-overflow-tooltip width="80">
              <template #default="{ row }">
                <el-badge v-if="row.meta && row.meta.badge" class="route-badge" :value="row.meta.badge" />
                <span v-else>-</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { tokenTableName } from '@/config'
  import { getRouterList } from '@/api/router'
  import VabPageHeader from '@/components/VabPageHeader'

  export default {
    name: 'Permissions',
    components: {
      VabPageHeader,
    },
    data() {
      return {
        form: {
          account: '',
        },
        tableData: [],
        res: [],
      }
    },
    computed: {
      ...mapGetters({
        username: 'user/username',
        permissions: 'user/permissions',
      }),
    },
    created() {
      this.fetchData()
    },
    mounted() {
      this.form.account = this.username
    },
    methods: {
      handleChangePermission() {
        this.$confirm('确定要切换权限吗？切换后页面将重新加载。', '权限切换', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(() => {
            localStorage.setItem(tokenTableName, `${this.form.account}-accessToken`)
            this.$message.success('权限切换成功，页面即将重新加载...')
            setTimeout(() => {
              location.reload()
            }, 1000)
          })
          .catch(() => {
            this.$message.info('已取消权限切换')
          })
      },
      async fetchData() {
        const res = await getRouterList()
        this.tableData = res.data
        this.res = res
      },
      getPermissionTagType(permission) {
        const types = {
          admin: 'danger',
          editor: 'warning',
          test: 'info',
        }
        return types[permission] || 'info'
      },
      getPermissionIcon(permission) {
        const icons = {
          admin: 'crown',
          editor: 'edit',
          test: 'user',
        }
        return ['fas', icons[permission] || 'user']
      },
    },
  }
</script>

<style lang="scss" scoped>
  .permissions-container {
    padding: 20px;
    background: #f5f7fa;
    min-height: 100vh;

    .permission-card {
      .card-header {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 1.1rem;
        font-weight: 600;
        color: #2c3e50;

        .vab-icon {
          color: #667ae4;
        }
      }

      .permission-content {
        .permission-info {
          margin-bottom: 20px;

          .info-text {
            display: flex;
            align-items: center;
            gap: 8px;
            color: #606266;
            font-size: 0.9rem;
            margin: 0;
            padding: 12px;
            background: #f8f9fa;
            border-radius: 8px;
            border-left: 4px solid #667eea;

            .vab-icon {
              color: #667eea;
            }
          }
        }

        .permission-form {
          margin-bottom: 20px;

          .account-selector {
          }

          .change-btn {
          }
        }

        .current-permissions {
          h4 {
            margin: 0 0 12px 0;
            color: #2c3e50;
            font-size: 1rem;
          }

          .permissions-display {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;

            .permission-tag {
              display: flex;
              align-items: center;
              gap: 4px;
              padding: 6px 12px;
              border-radius: 20px;
              font-weight: 500;

              .vab-icon {
                font-size: 0.8rem;
              }
            }
          }
        }
      }

      .button-demo {
        .demo-section {
          h4 {
            margin: 0 0 16px 0;
            color: #2c3e50;
            font-size: 1rem;
          }

          .button-group {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
          }
        }
      }

      .route-demo {
        .demo-info {
          margin-bottom: 20px;

          .info-text {
            display: flex;
            align-items: flex-start;
            gap: 8px;
            color: #606266;
            font-size: 0.9rem;
            margin: 0 0 8px 0;
            line-height: 1.5;

            .vab-icon {
              color: #667eea;
              margin-top: 2px;
              flex-shrink: 0;
            }
          }
        }

        .route-table-container {
          h4 {
            margin: 0 0 16px 0;
            color: #2c3e50;
            font-size: 1rem;
          }

          .route-table {
            border-radius: 8px;
            overflow: hidden;

            .route-name {
              display: flex;
              align-items: center;
              gap: 6px;
              font-weight: 500;

              .vab-icon {
                color: #667eea;
              }
            }

            .route-icon {
              color: #667eea;
              font-size: 1rem;
            }

            .route-badge {
              ::v-deep .el-badge__content {
                background: #667eea;
              }
            }
          }
        }
      }
    }
  }

  // 响应式设计
  @media (max-width: 768px) {
    .permissions-container {
      padding: 16px;

      .permission-card {
        .permission-content {
          .permission-form {
            .account-selector {
            }
          }
        }

        .button-demo {
          .button-group {
            flex-direction: column;
          }
        }
      }
    }
  }
</style>
