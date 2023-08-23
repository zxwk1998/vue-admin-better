<template>
  <div class="register-container">
    <el-alert
      v-if="nodeEnv !== 'development'"
      :closable="false"
      style="position: fixed"
      title="beautiful boys and girls欢迎加入vue-admin-beautifulQQ群：972435319"
      type="success"
    />
    <el-row>
      <el-col :lg="16" :md="12" :sm="24" :xl="16" :xs="24">
        <div style="color: transparent">占位符</div>
      </el-col>
      <el-col :lg="8" :md="12" :sm="24" :xl="8" :xs="24">
        <el-form ref="registerForm" class="register-form" :model="form" :rules="registerRules" size="mini">
          <el-form-item prop="username">
            <el-input
              v-model.trim="form.username"
              v-focus
              auto-complete="off"
              placeholder="请输入用户名"
              style="margin-top: 20px"
              type="text"
            >
              <vab-icon slot="prefix" :icon="['fas', 'user-alt']" />
            </el-input>
          </el-form-item>
          <el-form-item prop="phone">
            <el-input v-model.trim="form.phone" autocomplete="off" maxlength="11" placeholder="请输入手机号" show-word-limit type="text">
              <vab-icon slot="prefix" :icon="['fas', 'mobile-alt']" />
            </el-input>
          </el-form-item>
          <el-form-item prop="phoneCode" style="position: relative">
            <el-input v-model.trim="form.phoneCode" placeholder="手机验证码" type="text">
              <vab-icon slot="prefix" :icon="['fas', 'envelope-open']" />
            </el-input>
            <el-button class="show-pwd phone-code" :disabled="isGetphone" type="primary" @click="getPhoneCode">
              {{ phoneCode }}
            </el-button>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model.trim="form.password" autocomplete="new-password" placeholder="设置密码" type="password">
              <vab-icon slot="prefix" :icon="['fas', 'unlock']" />
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="register-btn" type="primary" @click.native.prevent="handleReister">注册</el-button>
            <router-link to="/login">
              <div style="margin-top: 20px">登录</div>
            </router-link>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import { isPassword, isPhone } from '@/utils/validate'
  import { register } from '@/api/user'

  export default {
    username: 'Register',
    directives: {
      focus: {
        inserted(el) {
          el.querySelector('input').focus()
        },
      },
    },
    data() {
      const validateusername = (rule, value, callback) => {
        if ('' == value) {
          callback(new Error('用户名不能为空'))
        } else {
          callback()
        }
      }
      const validatePassword = (rule, value, callback) => {
        if (!isPassword(value)) {
          callback(new Error('密码不能少于6位'))
        } else {
          callback()
        }
      }
      const validatePhone = (rule, value, callback) => {
        if (!isPhone(value)) {
          callback(new Error('请输入正确的手机号'))
        } else {
          callback()
        }
      }
      return {
        isGetphone: false,
        getPhoneIntval: null,
        phoneCode: '获取验证码',
        showRegister: false,
        nodeEnv: process.env.NODE_ENV,
        title: this.$baseTitle,
        form: {},
        registerRules: {
          username: [
            { required: true, trigger: 'blur', message: '请输入用户名' },
            { max: 20, trigger: 'blur', message: '最多不能超过20个字' },
            { validator: validateusername, trigger: 'blur' },
          ],
          phone: [
            { required: true, trigger: 'blur', message: '请输入手机号码' },
            { validator: validatePhone, trigger: 'blur' },
          ],
          password: [
            { required: true, trigger: 'blur', message: '请输入密码' },
            { validator: validatePassword, trigger: 'blur' },
          ],
          phoneCode: [{ required: true, trigger: 'blur', message: '请输入手机验证码' }],
        },
        loading: false,
        passwordType: 'password',
      }
    },
    created() {
      document.body.style.overflow = 'hidden'
    },
    beforeDestroy() {
      document.body.style.overflow = 'auto'
      clearInterval(this.getPhoneIntval)
      this.getPhoneIntval = null
    },
    methods: {
      getPhoneCode() {
        if (!isPhone(this.form.phone)) {
          //this.$baseMessage('请输入手机号', 'error')
          this.$refs['registerForm'].validateField('phone')
          return
        }
        this.isGetphone = true
        let n = 60
        this.getPhoneIntval = setInterval(() => {
          if (n > 0) {
            n--
            this.phoneCode = `重新获取(${n}s)`
          } else {
            clearInterval(this.getPhoneIntval)
            this.getPhoneIntval = null
            this.phoneCode = '获取验证码'
            this.isGetphone = false
          }
        }, 1000)
      },
      handleReister() {
        this.$refs['registerForm'].validate(async (valid) => {
          if (valid) {
            const param = {
              username: this.form.username,
              phone: this.form.phone,
              password: this.form.password,
              phoneCode: this.form.phoneCode,
            }
            const { msg } = await register(param)
            this.$baseMessage(msg, 'success')
          }
        })
      },
    },
  }
</script>
<style lang="scss" scoped>
  .register-container {
    height: 100vh;
    background: url('~@/assets/login_images/background.jpg') center center fixed no-repeat;
    background-size: cover;

    .title {
      font-size: 54px;
      font-weight: 500;
      color: rgba(14, 18, 26, 1);
    }

    .title-tips {
      margin-top: 29px;
      font-size: 26px;
      font-weight: 400;
      color: rgba(14, 18, 26, 1);
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .register-btn {
      display: inherit;
      width: 220px;
      height: 60px;
      margin-top: 5px;
      border: 0;

      &:hover {
        opacity: 0.9;
      }
    }

    .register-form {
      position: relative;
      max-width: 100%;
      margin: calc((100vh - 499px) / 2) 10% 10%;
      overflow: hidden;

      .forget-password {
        width: 100%;
        margin-top: 40px;
        text-align: left;

        .forget-password {
          width: 129px;
          height: 19px;
          font-size: 20px;
          font-weight: 400;
          color: rgba(92, 102, 240, 1);
        }
      }

      .per-code {
        width: 100px;
        height: 36px;
        font-size: 20px;
        line-height: 36px;
        color: #fff;
        text-align: center;
        cursor: pointer;
        background: #bbc1ce;
      }

      .phone-code {
        width: 120px;
        height: 36px;
        font-size: 14px;
        color: #fff;
        border-radius: 3px;
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

        .el-input__count {
          .el-input__count-inner {
            background: transparent;
          }
        }

        .el-input__prefix {
          left: 15px;
          line-height: 56px;

          .svg-inline--fa {
            width: 20px;
          }
        }

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
