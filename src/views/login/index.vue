<template>
  <div class="login-container">
    <a-row>
      <a-col :xs="24" :md="11" :sm="24" :lg="14" :xl="14"></a-col>
      <a-col :xs="24" :sm="24" :md="12" :lg="9" :xl="6">
        <div class="login-container-form">
          <div class="login-container-title">
            {{ title }}
          </div>
          <a-form :model="form" @submit="handleSubmit" @submit.prevent>
            <a-form-item>
              <a-input v-model:value="form.username" placeholder="Username">
                <template v-slot:prefix>
                  <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
                </template>
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-input
                v-model:value="form.password"
                type="password"
                placeholder="Password"
              >
                <template v-slot:prefix>
                  <LockOutlined style="color: rgba(0, 0, 0, 0.25)" />
                </template>
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-button
                type="primary"
                html-type="submit"
                :disabled="form.username === '' || form.password === ''"
              >
                登录
              </a-button>
              <div class="login-container-tips">
                基于vue{{ dependencies['vue'] }}
                + ant-design-vue
                {{ dependencies['ant-design-vue'] }}开发
              </div>
            </a-form-item>
          </a-form>
        </div>
      </a-col>
      <a-col :xs="24" :md="11" :sm="24" :lg="14" :xl="14"></a-col>
    </a-row>
  </div>
</template>
<script>
  import { dependencies, devDependencies } from '*/package.json'
  import { mapActions, mapGetters } from 'vuex'
  import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'

  export default {
    name: 'Login',
    components: {
      UserOutlined,
      LockOutlined,
    },
    data() {
      return {
        form: {
          username: '',
          password: '',
        },
        redirect: undefined,
        dependencies: dependencies,
        devDependencies: devDependencies,
      }
    },
    computed: {
      ...mapGetters({
        logo: 'settings/logo',
        title: 'settings/title',
      }),
    },
    watch: {
      $route: {
        handler(route) {
          this.redirect = (route.query && route.query.redirect) || '/'
        },
        immediate: true,
      },
    },
    mounted() {
      this.form.username = 'admin'
      this.form.password = '123456'
      setTimeout(() => {
        this.handleSubmit()
      }, 500000)
    },
    methods: {
      ...mapActions({
        login: 'user/login',
      }),
      handleRoute() {
        return this.redirect === '/404' || this.redirect === '/403'
          ? '/'
          : this.redirect
      },
      async handleSubmit() {
        await this.login(this.form)
        await this.$router.push(this.handleRoute())
      },
    },
  }
</script>
<style lang="less">
  .login-container {
    height: 100vh;
    background: url('~@/assets/login_images/login_background.png');
    background-size: cover;
    &-form {
      width: calc(100% - 40px);
      height: 380px;
      padding: 4vh;
      margin-top: calc((100vh - 380px) / 2);
      margin-right: 20px;
      margin-left: 20px;
      background: url('~@/assets/login_images/login_form.png');
      background-size: 100% 100%;
      border-radius: 10px;
      box-shadow: 0 2px 8px 0 rgba(7, 17, 27, 0.06);
    }
    &-title {
      margin-bottom: 30px;
      font-size: 28px;
      font-weight: bold;
      color: #fff;
      text-align: center;
    }
    &-tips {
      margin-top: 10px;
      color: rgba(255, 255, 255, 0.856);
      text-align: center;
    }
    .ant-input {
      width: 100%;
      height: 45px;
    }
    .ant-btn {
      width: 100%;
      height: 45px;
      border-radius: 99px;
    }
  }
</style>
