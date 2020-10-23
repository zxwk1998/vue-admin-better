/**
 * @author chuzhixin 1204505056@qq.com （不想保留author可删除）
 * @description 公共布局自动导出
 */

import Vue from 'vue'

const requireComponents = require.context('./components', true, /\.vue$/)
requireComponents.keys().forEach((fileName) => {
  const componentConfig = requireComponents(fileName)
  const componentName = componentConfig.default.name
  Vue.component(componentName, componentConfig.default || componentConfig)
})

const requireZxLayouts = require.context('zx-layouts', true, /\.vue$/)
requireZxLayouts.keys().forEach((fileName) => {
  const componentConfig = requireZxLayouts(fileName)
  const componentName = componentConfig.default.name
  Vue.component(componentName, componentConfig.default || componentConfig)
})
