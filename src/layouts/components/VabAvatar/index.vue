<template>
  <el-dropdown @command="handleCommand">
    <span class="avatar-dropdown">
      <!--<el-avatar class="user-avatar" :src="avatar"></el-avatar>-->
      <img :src="avatar" alt="" class="user-avatar" />
      <div class="user-name">
        {{ username }}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </div>
    </span>

    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="github">github地址</el-dropdown-item>
      <el-dropdown-item command="gitee" divided>码云地址</el-dropdown-item>
      <el-dropdown-item command="pro" divided>admin pro 地址</el-dropdown-item>
      <el-dropdown-item command="plus" divided>admin plus 地址</el-dropdown-item>
      <el-dropdown-item command="shop" divided>shop vite 地址</el-dropdown-item>
      <el-dropdown-item command="logout" divided>退出登录</el-dropdown-item>
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
          case 'shop':
            window.open('https://vuejs-core.cn/shop-vite/')
        }
      },
      personalCenter() {
        this.$router.push('/personalCenter/personalCenter')
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
  .avatar-dropdown {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    justify-items: center;
    height: 50px;
    padding: 0;

    .user-avatar {
      width: 30px;
      height: 30px;
      cursor: pointer;
      border-radius: 5px;
    }

    .user-name {
      position: relative;
      margin-left: 5px;
      margin-left: 5px;
      cursor: pointer;
    }
  }
</style>
