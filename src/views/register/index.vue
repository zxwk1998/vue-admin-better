<template>
  <div class="register-container">
    <div class="register-background">
      <div class="background-overlay"></div>
      <div class="floating-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
        <div class="shape shape-4"></div>
      </div>
    </div>

    <div class="register-content">
      <div class="register-left">
        <div class="welcome-section">
          <div class="logo-container">
            <div class="logo-icon">
              <i class="el-icon-s-platform"></i>
            </div>
            <h1 class="logo-text">{{ title }}</h1>
          </div>
          <h2 class="welcome-title">创建账户</h2>
          <p class="welcome-subtitle">注册新账户以开始使用系统</p>
          <div class="feature-list">
            <div class="feature-item">
              <i class="el-icon-check"></i>
              <span>现代化的管理界面</span>
            </div>
            <div class="feature-item">
              <i class="el-icon-check"></i>
              <span>强大的功能模块</span>
            </div>
            <div class="feature-item">
              <i class="el-icon-check"></i>
              <span>安全可靠的数据保护</span>
            </div>
          </div>
        </div>
      </div>

      <div class="register-right">
        <div class="register-card">
          <div class="card-header">
            <h3 class="register-title">用户注册</h3>
            <p class="register-subtitle">请填写以下信息创建账户</p>
          </div>

          <el-form ref="registerForm" class="register-form" :model="form" :rules="registerRules" size="mini">
            <el-form-item prop="username">
              <div class="input-wrapper">
                <div class="input-icon">
                  <i class="el-icon-user"></i>
                </div>
                <el-input
                  v-model.trim="form.username"
                  v-focus
                  auto-complete="off"
                  placeholder="请输入用户名"
                  class="custom-input"
                  type="text"
                ></el-input>
              </div>
            </el-form-item>

            <el-form-item prop="phone">
              <div class="input-wrapper">
                <div class="input-icon">
                  <i class="el-icon-mobile-phone"></i>
                </div>
                <el-input
                  v-model.trim="form.phone"
                  autocomplete="off"
                  maxlength="11"
                  placeholder="请输入手机号"
                  show-word-limit
                  type="text"
                  class="custom-input"
                ></el-input>
              </div>
            </el-form-item>

            <el-form-item prop="phoneCode" style="position: relative">
              <div class="input-wrapper">
                <div class="input-icon">
                  <i class="el-icon-message"></i>
                </div>
                <el-input v-model.trim="form.phoneCode" placeholder="手机验证码" type="text" class="custom-input"></el-input>
              </div>
              <el-button class="phone-code" :disabled="isGetphone" type="primary" @click="getPhoneCode">
                {{ phoneCode }}
              </el-button>
            </el-form-item>

            <el-form-item prop="password">
              <div class="input-wrapper">
                <div class="input-icon">
                  <i class="el-icon-lock"></i>
                </div>
                <el-input
                  v-model.trim="form.password"
                  autocomplete="new-password"
                  placeholder="设置密码"
                  type="password"
                  class="custom-input"
                ></el-input>
              </div>
            </el-form-item>

            <el-button class="register-btn" type="primary" @click.native.prevent="handleReister">注册</el-button>

            <div class="login-link">
              <span>已有账户？</span>
              <router-link to="/login" class="link">立即登录</router-link>
            </div>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { isPassword, isPhone } from '@/utils/validate'
  import { register } from '@/api/user'

  export default {
    name: 'Register',
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
    position: relative;
    height: 100vh;
    overflow: hidden;
    background: linear-gradient(135deg, #4d8af0 0%, #1a56db 100%);
    display: flex;
    align-items: center;
    justify-content: center;

    .register-background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;

      .background-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(10px);
      }

      .floating-shapes {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;

        .shape {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          animation: float 6s ease-in-out infinite;

          &.shape-1 {
            width: 80px;
            height: 80px;
            top: 20%;
            left: 10%;
            animation-delay: 0s;
          }

          &.shape-2 {
            width: 120px;
            height: 120px;
            top: 60%;
            right: 10%;
            animation-delay: 2s;
          }

          &.shape-3 {
            width: 60px;
            height: 60px;
            top: 40%;
            right: 20%;
            animation-delay: 4s;
          }

          &.shape-4 {
            width: 100px;
            height: 100px;
            bottom: 20%;
            left: 20%;
            animation-delay: 1s;
          }
        }
      }
    }

    .register-content {
      position: relative;
      z-index: 2;
      display: flex;
      width: 100%;
      max-width: 1200px;
      height: 600px;
      background: rgba(255, 255, 255, 0.95);
      border-radius: 20px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(20px);
      overflow: hidden;

      .register-left {
        flex: 1;
        background: linear-gradient(135deg, #4d8af0 0%, #1a56db 100%);
        color: white;
        padding: 60px 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        overflow: hidden;

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
          opacity: 0.3;
        }

        .welcome-section {
          position: relative;
          z-index: 1;

          .logo-container {
            display: flex;
            align-items: center;
            margin-bottom: 40px;

            .logo-icon {
              width: 60px;
              height: 60px;
              background: rgba(255, 255, 255, 0.2);
              border-radius: 15px;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-right: 20px;
              backdrop-filter: blur(10px);

              i {
                font-size: 30px;
                color: white;
              }
            }

            .logo-text {
              font-size: 28px;
              font-weight: 700;
              margin: 0;
              background: linear-gradient(45deg, #fff, #f0f0f0);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            }
          }

          .welcome-title {
            font-size: 36px;
            font-weight: 700;
            margin: 0 0 16px 0;
            line-height: 1.2;
          }

          .welcome-subtitle {
            font-size: 18px;
            opacity: 0.9;
            margin: 0 0 40px 0;
            line-height: 1.5;
          }

          .feature-list {
            .feature-item {
              display: flex;
              align-items: center;
              margin-bottom: 20px;
              font-size: 16px;

              i {
                width: 24px;
                height: 24px;
                background: rgba(255, 255, 255, 0.2);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 16px;
                font-size: 12px;
              }

              span {
                font-weight: 500;
              }
            }
          }
        }
      }

      .register-right {
        flex: 1;
        padding: 60px 40px;
        display: flex;
        align-items: center;
        justify-content: center;

        .register-card {
          width: 100%;
          max-width: 400px;

          .card-header {
            text-align: center;
            margin-bottom: 30px;

            .register-title {
              font-size: 28px;
              font-weight: 700;
              color: #333;
              margin: 0 0 8px 0;
            }

            .register-subtitle {
              font-size: 16px;
              color: #666;
              margin: 0;
            }
          }

          .register-form {
            .input-wrapper {
              position: relative;
              display: flex;
              align-items: center;
              margin-bottom: 16px;

              .input-icon {
                position: absolute;
                left: 16px;
                z-index: 2;
                width: 20px;
                height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #999;
                font-size: 16px;
              }

              .custom-input {
                ::v-deep .el-input__inner {
                  width: 100%;
                  height: 46px;
                  padding-left: 50px;
                  padding-right: 20px;
                  border: 2px solid #f0f0f0;
                  border-radius: 12px;
                  font-size: 16px;
                  background: #fafafa;
                  transition: all 0.3s ease;

                  &:focus {
                    border-color: #4d8af0;
                    background: white;
                    box-shadow: 0 0 0 3px rgba(77, 138, 240, 0.1);
                  }

                  &::placeholder {
                    color: #999;
                  }
                }
              }
            }

            .phone-code {
              position: absolute;
              right: 0;
              top: 0;
              width: 120px;
              height: 46px;
              background: linear-gradient(135deg, #4d8af0 0%, #1a56db 100%);
              border: none;
              border-radius: 12px;
              font-size: 14px;
              font-weight: 600;
              color: white;
              cursor: pointer;
              transition: all 0.3s ease;

              &:hover {
                opacity: 0.9;
                box-shadow: 0 4px 12px rgba(77, 138, 240, 0.3);
              }

              &:disabled {
                opacity: 0.6;
                cursor: not-allowed;
              }
            }

            .register-btn {
              width: 100%;
              height: 46px;
              background: linear-gradient(135deg, #4d8af0 0%, #1a56db 100%);
              border: none;
              border-radius: 12px;
              font-size: 16px;
              font-weight: 600;
              color: white;
              cursor: pointer;
              transition: all 0.3s ease;
              margin: 0 0 20px;

              &:hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 20px rgba(77, 138, 240, 0.3);
              }

              &:active {
                transform: translateY(0);
              }
            }

            .login-link {
              text-align: center;
              font-size: 14px;
              color: #666;

              .link {
                color: #4d8af0;
                text-decoration: none;
                font-weight: 600;
                margin-left: 4px;
                transition: color 0.3s ease;

                &:hover {
                  color: #1a56db;
                }
              }
            }
          }
        }
      }
    }
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(180deg);
    }
  }

  // 响应式设计
  @media (max-width: 768px) {
    .register-container {
      padding: 15px;

      .register-content {
        flex-direction: column;
        height: auto;
        max-height: 90vh;
        overflow-y: auto;
        margin: 10px;
        border-radius: 16px;
        max-width: 100%;

        .register-left {
          padding: 25px 20px;
          text-align: center;

          .welcome-section {
            .logo-container {
              justify-content: center;
              margin-bottom: 15px;

              .logo-icon {
                width: 40px;
                height: 40px;
                border-radius: 10px;

                i {
                  font-size: 20px;
                }
              }

              .logo-text {
                font-size: 22px;
              }
            }

            .welcome-title {
              font-size: 24px;
            }

            .welcome-subtitle {
              font-size: 16px;
              margin-bottom: 25px;
            }

            .feature-list {
              .feature-item {
                margin-bottom: 15px;
                font-size: 14px;

                i {
                  width: 20px;
                  height: 20px;
                  margin-right: 12px;
                  font-size: 10px;
                }
              }
            }
          }
        }

        .register-right {
          padding: 30px 20px;

          .register-card {
            .card-header {
              margin-bottom: 20px;

              .register-title {
                font-size: 24px;
              }

              .register-subtitle {
                font-size: 14px;
              }
            }

            .register-form {
              .input-wrapper {
                margin-bottom: 16px;
              }

              .phone-code {
                height: 46px;
                width: 100px;
                font-size: 13px;
              }

              .register-btn {
                height: 46px;
              }
            }
          }
        }
      }
    }
  }

  ::v-deep {
    .el-form-item {
      margin-bottom: 16px;

      &__error {
        position: absolute;
        top: 100%;
        left: 0;
        font-size: $base-font-size-small;
        line-height: 18px;
        color: $base-color-red;
      }
    }
  }
</style>
