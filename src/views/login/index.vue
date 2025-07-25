<template>
  <div class="login-container">
    <div class="login-background">
      <div class="background-overlay"></div>
      <div class="floating-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
        <div class="shape shape-4"></div>
      </div>
    </div>

    <div class="login-content">
      <div class="login-left">
        <div class="welcome-section">
          <div class="logo-container">
            <div class="logo-icon">
              <i class="el-icon-s-platform"></i>
            </div>
            <h1 class="logo-text">{{ title }}</h1>
          </div>
          <h2 class="welcome-title">欢迎回来</h2>
          <p class="welcome-subtitle">登录您的账户以继续访问系统</p>
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

      <div class="login-right">
        <div class="login-card">
          <div class="card-header">
            <h3 class="login-title">用户登录</h3>
            <p class="login-subtitle">请输入您的账户信息</p>
          </div>

          <el-form ref="form" class="login-form" label-position="left" :model="form" :rules="rules">
            <el-form-item class="form-item" prop="username">
              <div class="input-wrapper">
                <div class="input-icon">
                  <i class="el-icon-user"></i>
                </div>
                <el-input v-model.trim="form.username" v-focus class="custom-input" placeholder="请输入用户名" tabindex="1" type="text" />
              </div>
            </el-form-item>

            <el-form-item class="form-item" prop="password">
              <div class="input-wrapper">
                <div class="input-icon">
                  <i class="el-icon-lock"></i>
                </div>
                <el-input
                  :key="passwordType"
                  ref="password"
                  v-model.trim="form.password"
                  class="custom-input"
                  placeholder="请输入密码"
                  tabindex="2"
                  :type="passwordType"
                  @keyup.enter.native="handleLogin"
                />
                <div class="password-toggle" @click="handlePassword">
                  <i :class="passwordType === 'password' ? 'el-icon-view' : 'el-icon-hide'"></i>
                </div>
              </div>
            </el-form-item>

            <div class="form-options">
              <el-checkbox v-model="rememberMe">记住我</el-checkbox>
              <a class="forgot-link" href="#">忘记密码？</a>
            </div>

            <el-button class="login-btn" :loading="loading" type="primary" @click="handleLogin">
              <span v-if="!loading">登录</span>
              <span v-else>登录中...</span>
            </el-button>

            <div class="register-link">
              <span>还没有账户？</span>
              <router-link class="link" to="/register">立即注册</router-link>
            </div>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { isPassword } from '@/utils/validate'

  export default {
    name: 'Login',
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
      return {
        nodeEnv: process.env.NODE_ENV,
        title: this.$baseTitle,
        form: {
          username: '',
          password: '',
        },
        rules: {
          username: [
            {
              required: true,
              trigger: 'blur',
              validator: validateusername,
            },
          ],
          password: [
            {
              required: true,
              trigger: 'blur',
              validator: validatePassword,
            },
          ],
        },
        loading: false,
        passwordType: 'password',
        redirect: undefined,
        timeOutID: null,
        rememberMe: false,
      }
    },
    watch: {
      $route: {
        handler(route) {
          this.redirect = (route.query && route.query.redirect) || '/'
        },
        immediate: true,
      },
    },
    created() {
      document.body.style.overflow = 'hidden'
    },
    beforeDestroy() {
      document.body.style.overflow = 'auto'
      clearTimeout(this.timeOutID)
    },
    mounted() {
      this.form.username = 'admin'
      this.form.password = '123456'
      this.timeOutID = setTimeout(() => {
        this.handleLogin()
      }, 8000)
    },
    methods: {
      handlePassword() {
        this.passwordType === 'password' ? (this.passwordType = '') : (this.passwordType = 'password')
        this.$nextTick(() => {
          this.$refs.password.focus()
        })
      },
      handleLogin() {
        this.$refs.form.validate((valid) => {
          if (valid) {
            this.loading = true
            this.$store
              .dispatch('user/login', this.form)
              .then(() => {
                const routerPath = this.redirect === '/404' || this.redirect === '/401' ? '/' : this.redirect
                this.$router.push(routerPath).catch(() => {})
                this.loading = false
              })
              .catch(() => {
                this.loading = false
              })
          } else {
            return false
          }
        })
      },
    },
  }
</script>

<style lang="scss" scoped>
  .login-container {
    position: relative;
    height: 100vh;
    overflow: hidden;
    background: linear-gradient(135deg, #4d8af0 0%, #1a56db 100%);
    display: flex;
    align-items: center;
    justify-content: center;

    .login-background {
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

    .login-content {
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

      .login-left {
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

      .login-right {
        flex: 1;
        padding: 60px 40px;
        display: flex;
        align-items: center;
        justify-content: center;

        .login-card {
          width: 100%;
          max-width: 400px;

          .card-header {
            text-align: center;
            margin-bottom: 40px;

            .login-title {
              font-size: 28px;
              font-weight: 700;
              color: #333;
              margin: 0 0 8px 0;
            }

            .login-subtitle {
              font-size: 16px;
              color: #666;
              margin: 0;
            }
          }

          .login-form {
            .form-item {
              margin-bottom: 16px;

              .input-wrapper {
                position: relative;
                display: flex;
                align-items: center;

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
                    height: 46px;
                    padding-left: 50px;
                    padding-right: 50px;
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

                .password-toggle {
                  position: absolute;
                  right: 16px;
                  z-index: 2;
                  width: 20px;
                  height: 20px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  color: #999;
                  cursor: pointer;
                  transition: color 0.3s ease;

                  &:hover {
                    color: #4d8af0;
                  }

                  i {
                    font-size: 16px;
                  }
                }
              }
            }

            .form-options {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 20px;

              .forgot-link {
                color: #667eea;
                text-decoration: none;
                font-size: 14px;
                transition: color 0.3s ease;

                &:hover {
                  color: #1a56db;
                }
              }
            }

            .login-btn {
              width: 100%;
              height: 50px;
              background: linear-gradient(135deg, #4d8af0 0%, #1a56db 100%);
              border: none;
              border-radius: 12px;
              font-size: 16px;
              font-weight: 600;
              color: white;
              cursor: pointer;
              transition: all 0.3s ease;
              margin-bottom: 24px;

              &:hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 20px rgba(77, 138, 240, 0.3);
              }

              &:active {
                transform: translateY(0);
              }
            }

            .register-link {
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
    .login-container {
      padding: 15px;

      .login-content {
        flex-direction: column;
        height: auto;
        max-height: 90vh;
        overflow-y: auto;
        margin: 10px;
        border-radius: 16px;
        max-width: 100%;

        .login-left {
          padding: 25px 20px;
          text-align: center;
          // 不完全隐藏，而是简化显示

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
              margin-bottom: 10px;
            }

            .welcome-subtitle {
              font-size: 14px;
              margin-bottom: 20px;
            }

            // 在手机端隐藏功能列表
            .feature-list {
              display: none;
            }
          }
        }

        .login-right {
          padding: 25px 20px;

          .login-card {
            .card-header {
              margin-bottom: 25px;

              .login-title {
                font-size: 22px;
              }

              .login-subtitle {
                font-size: 14px;
              }
            }

            .login-form {
              .form-item {
                margin-bottom: 20px;

                .input-wrapper {
                  .custom-input {
                    ::v-deep .el-input__inner {
                      height: 45px;
                      font-size: 14px;
                    }
                  }
                }
              }

              .form-options {
                margin-bottom: 25px;
                flex-wrap: wrap;
                gap: 10px;

                .forgot-link {
                  font-size: 13px;
                }
              }

              .login-btn {
                height: 45px;
                font-size: 15px;
                margin-bottom: 20px;
              }
            }
          }
        }
      }

      // 调整浮动形状在手机端的位置和大小
      .login-background {
        .floating-shapes {
          .shape {
            &.shape-1 {
              width: 50px;
              height: 50px;
            }

            &.shape-2 {
              width: 70px;
              height: 70px;
            }

            &.shape-3 {
              width: 40px;
              height: 40px;
            }

            &.shape-4 {
              width: 60px;
              height: 60px;
            }
          }
        }
      }
    }
  }

  // 添加更小屏幕的适配
  @media (max-width: 480px) {
    .login-container {
      .login-content {
        margin: 5px;
        border-radius: 12px;

        // 在非常小的屏幕上隐藏左侧内容
        .login-left {
          display: none;
        }

        .login-right {
          padding: 25px 15px;

          .login-card {
            .login-form {
              .form-item {
                .input-wrapper {
                  .input-icon {
                    left: 12px;
                  }

                  .custom-input {
                    ::v-deep .el-input__inner {
                      padding-left: 40px;
                      border-radius: 10px;
                    }
                  }
                }
              }

              .login-btn {
                border-radius: 10px;
              }
            }
          }
        }
      }
    }
  }

  // 添加横屏模式的适配
  @media (max-height: 600px) and (orientation: landscape) {
    .login-container {
      .login-content {
        flex-direction: row;
        height: auto;
        max-height: 90vh;

        .login-left {
          padding: 20px;

          .welcome-section {
            .logo-container {
              margin-bottom: 10px;

              .logo-icon {
                width: 35px;
                height: 35px;

                i {
                  font-size: 18px;
                }
              }

              .logo-text {
                font-size: 18px;
              }
            }

            .welcome-title {
              font-size: 20px;
              margin-bottom: 5px;
            }

            .welcome-subtitle {
              font-size: 12px;
              margin-bottom: 10px;
            }

            .feature-list {
              display: none;
            }
          }
        }

        .login-right {
          padding: 20px;

          .login-card {
            .card-header {
              margin-bottom: 15px;

              .login-title {
                font-size: 20px;
              }

              .login-subtitle {
                font-size: 12px;
              }
            }

            .login-form {
              .form-item {
                margin-bottom: 12px;

                .input-wrapper {
                  .custom-input {
                    ::v-deep .el-input__inner {
                      height: 40px;
                    }
                  }
                }
              }

              .form-options {
                margin-bottom: 15px;
              }

              .login-btn {
                height: 40px;
                margin-bottom: 12px;
              }
            }
          }
        }
      }
    }
  }

  // 针对iPhone SE等超小屏幕设备的特殊适配
  @media (max-width: 375px) {
    .login-container {
      padding: 10px;

      .login-content {
        margin: 0;
        border-radius: 10px;

        .login-right {
          padding: 20px 15px;

          .login-card {
            .card-header {
              margin-bottom: 20px;

              .login-title {
                font-size: 20px;
              }
            }

            .login-form {
              .form-item {
                margin-bottom: 15px;
              }

              .form-options {
                flex-direction: column;
                align-items: flex-start;
                gap: 10px;
              }
            }
          }
        }
      }
    }
  }
</style>
