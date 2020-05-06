<template>
  <div class="login-container">
    <el-alert
      title="beautiful boys and girls欢迎加入vue-admin-beautifulQQ群：972435319"
      type="success"
      :closable="false"
    >
    </el-alert>
    <div class="login-logo-bysj"></div>
    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
        <el-form
          ref="loginForm"
          :model="loginForm"
          :rules="loginRules"
          auto-complete="off"
          class="login-form"
          label-position="left"
        >
          <div class="title">
            hello !
          </div>
          <div class="title-tips">欢迎来到{{ title }}！</div>
          <el-form-item
            style="margin-top: 49px;"
            prop="userName"
            class="login-form-admin"
          >
            <span class="svg-container svg-container-admin">
              <byui-icon :icon="['fas', 'user']" />
            </span>
            <el-input
              v-model.trim="loginForm.userName"
              v-focus
              auto-complete="off"
              placeholder="请输入用户名"
              tabindex="1"
              type="text"
            />
          </el-form-item>
          <el-form-item prop="password" class="login-form-pass">
            <span class="svg-container svg-container-pass"
              ><byui-icon :icon="['fas', 'lock']"
            /></span>
            <el-input
              :key="passwordType"
              ref="password"
              v-model.trim="loginForm.password"
              :type="passwordType"
              auto-complete="off"
              placeholder="请输入密码"
              tabindex="2"
              @keyup.enter.native="handleLogin"
            />
            <span
              v-if="passwordType === 'password'"
              class="show-pwd"
              @click="showPwd"
              ><byui-icon :icon="['fas', 'eye-slash']"
            /></span>
            <span v-else class="show-pwd" @click="showPwd"
              ><byui-icon :icon="['fas', 'eye']"
            /></span>
          </el-form-item>
          <el-button
            :loading="loading"
            class="login-btn"
            type="primary"
            @click.native.prevent="handleLogin"
            >登录
          </el-button>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { isPassword } from "@/utils/validate";

export default {
  name: "Login",
  directives: {
    focus: {
      inserted(el) {
        el.querySelector("input").focus();
      },
    },
  },
  data() {
    const validateUserName = (rule, value, callback) => {
      if ("" == value) {
        callback(new Error("用户名不能为空"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (!isPassword(value)) {
        callback(new Error("密码不能少于6位"));
      } else {
        callback();
      }
    };
    return {
      title: this.$baseTitle,
      loginForm: {
        userName: "",
        password: "",
      },
      loginRules: {
        userName: [
          {
            required: true,
            trigger: "blur",
            validator: validateUserName,
          },
        ],
        password: [
          {
            required: true,
            trigger: "blur",
            validator: validatePassword,
          },
        ],
      },
      loading: false,
      passwordType: "password",
      redirect: undefined,
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true,
    },
  },
  created() {},
  mounted() {
    if ("production" !== process.env.NODE_ENV) {
      this.loginForm.userName = "admin";
      this.loginForm.password = "123456";
    }
    setTimeout(() => {
      this.animateShow = true;
    });
  },
  methods: {
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("user/login", this.loginForm)
            .then(() => {
              const routerPath = this.redirect === "/404" ? "/" : this.redirect;
              this.$router.push({ path: routerPath || "/" }).catch(() => {});
              this.loading = false;
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.login-container {
  height: 100vh;
  min-height: 600px;
  background: url("~@/assets/login_images/background.jpg") center center fixed
    no-repeat;
  background-size: cover;

  .title {
    height: 50px;
    font-size: 54px;
    font-weight: 500;
    color: rgba(14, 18, 26, 1);
  }

  .title-tips {
    height: 24px;
    margin-top: 29px;
    font-size: 26px;
    font-weight: 400;
    color: rgba(14, 18, 26, 1);
  }

  .login-btn {
    display: inherit;
    width: 220px;
    height: 60px;
    margin-top: 5px;
    border: 0;

    &:hover {
      opacity: 0.9;
    }
  }

  .login-logo-bysj {
    position: absolute;
    top: 45px;
    left: 45px;

    img {
      width: 180px;
    }
  }

  .login-form {
    position: relative;
    max-width: 100%;
    margin: 22vh 10% 10%;
    overflow: hidden;

    .forget-password {
      width: 100%;
      margin-top: 40px;
      text-align: left;

      .forget-pass {
        width: 129px;
        height: 19px;
        font-size: 20px;
        font-weight: 400;
        color: rgba(92, 102, 240, 1);
      }
    }
  }

  .tips {
    margin-bottom: 10px;
    font-size: $base-font-size-default;
    color: $base-color-white;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .title-container {
    position: relative;

    .title {
      margin: 0 auto 40px auto;
      font-size: 34px;
      font-weight: bold;
      color: $base-color-blue;
      text-align: center;
    }
  }

  .svg-container {
    position: absolute;
    top: 14px;
    left: 15px;
    z-index: $base-z-index;
    font-size: 16px;
    color: #d7dee3;
    cursor: pointer;
    user-select: none;
  }

  .show-pwd {
    position: absolute;
    top: 14px;
    right: 25px;
    font-size: 16px;
    color: $base-font-color;
    cursor: pointer;
    user-select: none;
  }

  ::v-deep {
    .el-form-item {
      padding-right: 0;
      margin: 20px 0;
      color: #454545;
      background: transparent;
      border: 1px solid transparent;
      border-radius: 2px;

      &__content {
        min-height: $base-input-height;
        line-height: $base-input-height;
      }

      &__error {
        position: absolute;
        top: 100%;
        left: 18px;
        font-size: $base-font-size-small;
        line-height: 18px;
        color: $base-color-red;
      }
    }

    .el-input {
      box-sizing: border-box;

      input {
        height: 58px;
        padding-left: 45px;
        font-size: $base-font-size-default;
        line-height: 58px;
        color: $base-font-color;
        background: #f6f4fc;
        border: 0;
        caret-color: $base-font-color;
      }
    }
  }
}
</style>
