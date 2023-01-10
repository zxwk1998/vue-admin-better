import permissions from './permissions'

const install = function (Vue) {
  Vue.directive('permissions', permissions)
}

if (window.Vue) {
  window['permissions'] = permissions
  Vue.use(install)
}

permissions.install = install
export default permissions
