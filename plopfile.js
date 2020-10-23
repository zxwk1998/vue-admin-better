/**
 * @author chuzhixin 1204505056@qq.com （不想保留author可删除）
 * @description 代码生成机
 */
const viewGenerator = require('zx-templates/view/prompt')
const curdGenerator = require('zx-templates/curd/prompt')
const componentGenerator = require('zx-templates/component/prompt')
const mockGenerator = require('zx-templates/mock/prompt')
const vuexGenerator = require('zx-templates/vuex/prompt')
module.exports = (plop) => {
  plop.setGenerator('view', viewGenerator)
  plop.setGenerator('curd', curdGenerator)
  plop.setGenerator('component', componentGenerator)
  plop.setGenerator('mock&api', mockGenerator)
  plop.setGenerator('vuex', vuexGenerator)
}
