import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import './plugins'
import '@/layouts/export'
import { printLayoutsInfo } from '@/utils/printInfo'

/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 生产环境默认都使用mock，如果正式用于生产环境时，记得去掉
 */

// 检测环境变量或默认使用mock
const useMock = process.env.VUE_APP_MOCK_ENABLE === 'true' || process.env.NODE_ENV === 'production'
if (useMock) {
  // 使用动态import替代require
  import('@/utils/static').then(({ mockXHR }) => {
    mockXHR()
    console.log('已启用Mock拦截，所有接口请求将被Mock拦截')
  })
}

// 处理Chrome扩展错误
const originalConsoleError = console.error
console.error = function (...args) {
  // 检查是否为扩展相关错误或消息端口关闭错误
  if (
    args[0] &&
    typeof args[0] === 'string' &&
    (args[0].includes('runtime.lastError') || args[0].includes('The message port closed') || args[0].includes('message port'))
  ) {
    return // 忽略这些特定错误
  }
  originalConsoleError.apply(console, args)
}

// 处理未捕获的Promise错误
window.addEventListener('unhandledrejection', (event) => {
  const message = event.reason?.message || String(event.reason)
  if (message.includes('runtime.lastError') || message.includes('The message port closed') || message.includes('message port')) {
    // 阻止默认处理（避免将错误输出到控制台）
    event.preventDefault()
  }
})

// 打印layouts/index.js中的信息到控制台
printLayoutsInfo()

Vue.config.productionTip = false

new Vue({
  el: '#vue-admin-better',
  router,
  store,
  render: (h) => h(App),
})
