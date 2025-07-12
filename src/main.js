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

// 只有在启用mock且不是生产环境时才使用mock
if (process.env.VUE_APP_MOCK_ENABLE === 'true' && process.env.NODE_ENV !== 'production') {
  // 使用动态import替代require
  import('@/utils/static').then(({ mockXHR }) => {
    mockXHR()
  })
}

// 处理Chrome扩展错误
const originalConsoleError = console.error
console.error = function (...args) {
  if (args[0] && typeof args[0] === 'string' && (args[0].includes('runtime.lastError') || args[0].includes('The message port closed'))) {
    return // 忽略这个特定错误
  }
  originalConsoleError.apply(console, args)
}

// 打印layouts/index.js中的信息到控制台
printLayoutsInfo()

Vue.config.productionTip = false

new Vue({
  el: '#vue-admin-better',
  router,
  store,
  render: (h) => h(App),
})
