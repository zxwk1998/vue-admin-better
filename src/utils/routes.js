import router from '@/router'
import path from 'path'
import { rolesControl } from '@/config'
import { isExternal } from '@/utils/validate'
import { hasRole } from '@/utils/hasRole'

/**
 * @author chuzhixin 1204505056@qq.com
 * @description all模式渲染后端返回路由
 * @param constantRoutes
 * @returns {*}
 */
export function convertRouter(constantRoutes) {
  return constantRoutes.map((route) => {
    if (route.component) {
      if (route.component === 'Layout') {
        const path = 'layouts'
        route.component = (resolve) => require([`@/${path}`], resolve)
      } else {
        let path = 'views/' + route.component
        if (
          new RegExp('^/views/.*$').test(route.component) ||
          new RegExp('^views/.*$').test(route.component)
        ) {
          path = route.component
        } else if (new RegExp('^/.*$').test(route.component)) {
          path = 'views' + route.component
        } else if (new RegExp('^@views/.*$').test(route.component)) {
          path = route.component.slice(1)
        } else {
          path = 'views/' + route.component
        }
        route.component = (resolve) => require([`@/${path}`], resolve)
      }
    }
    if (route.children && route.children.length)
      route.children = convertRouter(route.children)

    if (route.children && route.children.length === 0) delete route.children

    return route
  })
}

/**
 * @author chuzhixin 1204505056@qq.com
 * @description 根据roles数组拦截路由
 * @param routes
 * @param baseUrl
 * @returns {[]}
 */
export function filterRoutes(routes, baseUrl = '/') {
  return routes
    .filter((route) => {
      if (route.meta && route.meta.roles)
        return !rolesControl || hasRole(route.meta.roles)
      else return true
    })
    .map((route) => {
      if (route.path !== '*' && !isExternal(route.path))
        route.path = path.resolve(baseUrl, route.path)
      route.fullPath = route.path
      if (route.children)
        route.children = filterRoutes(route.children, route.fullPath)
      return route
    })
}

/**
 * 根据当前页面firstMenu
 * @returns {string}
 */
export function handleFirstMenu() {
  const firstMenu = router.currentRoute.matched[0].path
  if (firstMenu === '') return '/'
  return firstMenu
}
