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
    // 打印layouts/index.js中的信息到控制台
    printLayoutsInfo()
    Vue.config.productionTip = false
    new Vue({
      el: '#vue-admin-better',
      router,
      store,
      render: (h) => h(App),
    })
  })
} else {
  // 未启用Mock时直接打印layouts/index.js中的信息到控制台
  printLayoutsInfo()
  Vue.config.productionTip = false
  new Vue({
    el: '#vue-admin-better',
    router,
    store,
    render: (h) => h(App),
  })
}
