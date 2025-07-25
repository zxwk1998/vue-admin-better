<template>
  <el-dropdown @command="handleCommand" trigger="click">
    <div class="avatar-container">
      <div class="avatar-wrapper">
        <img :src="avatar" alt="用户头像" class="user-avatar" />
      </div>
      <div class="user-info">
        <div class="username">{{ username }}</div>
        <div class="user-role">管理员</div>
      </div>
      <i class="el-icon-arrow-down dropdown-icon"></i>
    </div>

    <el-dropdown-menu slot="dropdown" class="custom-dropdown">
      <div class="dropdown-header">
        <img :src="avatar" alt="用户头像" class="header-avatar" />
        <div class="header-info">
          <div class="header-username">{{ username }}</div>
          <div class="header-email">admin@example.com</div>
        </div>
      </div>

      <el-dropdown-item command="personalCenter" class="dropdown-item">
        <i class="el-icon-user-solid"></i>
        <span>个人中心</span>
      </el-dropdown-item>

      <el-dropdown-item command="settings" class="dropdown-item">
        <i class="el-icon-setting"></i>
        <span>系统设置</span>
      </el-dropdown-item>

      <el-divider></el-divider>

      <el-dropdown-item command="github" class="dropdown-item">
        <i class="el-icon-link"></i>
        <span>GitHub 地址</span>
      </el-dropdown-item>

      <el-dropdown-item command="gitee" class="dropdown-item">
        <i class="el-icon-link"></i>
        <span>码云地址</span>
      </el-dropdown-item>

      <el-dropdown-item command="pro" class="dropdown-item">
        <i class="el-icon-link"></i>
        <span>Admin Pro 地址</span>
      </el-dropdown-item>

      <el-dropdown-item command="plus" class="dropdown-item">
        <i class="el-icon-link"></i>
        <span>Admin Plus 地址</span>
      </el-dropdown-item>

      <el-dropdown-item command="shop" class="dropdown-item">
        <i class="el-icon-link"></i>
        <span>Shop Vite 地址</span>
      </el-dropdown-item>

      <el-dropdown-item command="job" class="dropdown-item">
        <i class="el-icon-link"></i>
        <span>好工作就业参考网</span>
      </el-dropdown-item>

      <el-divider></el-divider>

      <el-dropdown-item command="logout" class="dropdown-item logout-item">
        <i class="el-icon-switch-button"></i>
        <span>退出登录</span>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { recordRoute } from '@/config'

  export default {
    name: 'VabAvatar',
    computed: {
      ...mapGetters({
        avatar: 'user/avatar',
        username: 'user/username',
      }),
    },
    methods: {
      handleCommand(command) {
        switch (command) {
          case 'logout':
            this.logout()
            break
          case 'personalCenter':
            this.personalCenter()
            break
          case 'settings':
            this.settings()
            break
          case 'github':
            window.open('https://github.com/zxwk1998/vue-admin-better')
            break
          case 'gitee':
            window.open('https://gitee.com/chu1204505056/vue-admin-better')
            break
          case 'pro':
            window.open('https://vuejs-core.cn/admin-pro/')
            break
          case 'plus':
            window.open('https://vuejs-core.cn/admin-plus/')
            break
          case 'shop':
            window.open('https://vuejs-core.cn/shop-vite/')
            break
          case 'job':
            window.open('https://job.vuejs-core.cn/')
            break
        }
      },
      personalCenter() {
        this.$router.push('/personalCenter/personalCenter')
      },
      settings() {
        this.$message.info('系统设置功能开发中...')
      },
      logout() {
        this.$baseConfirm('您确定要退出' + this.$baseTitle + '吗?', null, async () => {
          await this.$store.dispatch('user/logout')
          if (recordRoute) {
            const fullPath = this.$route.fullPath
            this.$router.push(`/login?redirect=${fullPath}`)
          } else {
            this.$router.push('/login')
          }
        })
      },
    },
  }
</script>

<style lang="scss" scoped>
  .avatar-container {
    display: flex;
    align-items: center;
    padding: 8px 12px;
    border-radius: 8px;
    cursor: pointer;

    .avatar-wrapper {
      position: relative;
      margin-right: 12px;

      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid rgba(255, 255, 255, 0.3);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
    }

    .user-info {
      flex: 1;
      min-width: 0;

      .username {
        font-size: 14px;
        font-weight: 600;
        color: #333;
        margin-bottom: 2px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .user-role {
        font-size: 12px;
        color: #666;
        opacity: 0.8;
      }
    }

    .dropdown-icon {
      margin-left: 8px;
      color: #666;
    }
  }

  .custom-dropdown {
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.95);
    padding: 0;
    min-width: 220px;

    .dropdown-header {
      display: flex;
      align-items: center;
      padding: 16px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.06);
      background: linear-gradient(135deg, #4d8af0 0%, #1a56db 100%);
      border-radius: 12px 12px 0 0;
      color: white;

      .header-avatar {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        border: 2px solid rgba(255, 255, 255, 0.3);
        margin-right: 12px;
        object-fit: cover;
      }

      .header-info {
        flex: 1;

        .header-username {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .header-email {
          font-size: 12px;
          opacity: 0.8;
        }
      }
    }

    .dropdown-item {
      display: flex;
      align-items: center;
      padding: 8px 16px;
      border-radius: 0;

      i {
        margin-right: 12px;
        font-size: 16px;
        width: 16px;
        text-align: center;
      }

      span {
        font-size: 14px;
      }

      &.logout-item {
        color: #f56c6c;
      }
    }

    .el-divider {
      margin: 8px 0;
    }
  }

  // 响应式设计
  @media (max-width: 768px) {
    .avatar-container {
      padding: 6px 8px;

      .user-info {
        display: none;
      }

      .dropdown-icon {
        display: none;
      }
    }

    .custom-dropdown {
      min-width: 200px;
    }
  }

  // 隐藏下拉菜单箭头
  ::v-deep .popper__arrow {
    display: none !important;
  }
</style>
