<template>
  <div class="login-container">
    <h3>登录页样式未开发，点击登录即可进入首页</h3>
    <a-form
      layout="inline"
      :model="form"
      @submit="handleSubmit"
      @submit.prevent
    >
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
      </a-form-item>
    </a-form>
  </div>
</template>
<script>
  import { mapActions } from "vuex";
  import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";

  export default {
    name: "Login",
    components: {
      UserOutlined,
      LockOutlined,
    },
    data() {
      return {
        form: {
          username: "",
          password: "",
        },
        redirect: undefined,
      };
    },
    watch: {
      $route: {
        handler(route) {
          this.redirect = (route.query && route.query.redirect) || "/";
        },
        immediate: true,
      },
    },
    mounted() {
      this.form.username = "admin";
      this.form.password = "123456";
    },
    methods: {
      ...mapActions({
        login: "user/login",
      }),
      handleRoute() {
        return this.redirect === "/404" || this.redirect === "/401"
          ? "/"
          : this.redirect;
      },
      async handleSubmit() {
        await this.login(this.form);
        await this.$router.push(this.handleRoute());
      },
    },
  };
</script>
