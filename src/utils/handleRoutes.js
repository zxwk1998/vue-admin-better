/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description all模式渲染后端返回路由
 * @param constantRoutes
 * @returns {*}
 */
export function convertRouter(asyncRoutes) {
  // 处理空值情况
  if (!asyncRoutes || !Array.isArray(asyncRoutes)) {
    console.warn('后端返回的路由格式不正确或为空')
    return []
  }

  return asyncRoutes
    .map((route) => {
      if (!route) return null

      if (route.component) {
        if (route.component === 'Layout') {
          route.component = () => import('@/layouts')
        } else if (route.component === 'EmptyLayout') {
          route.component = () => import('@/layouts/EmptyLayout')
        } else {
          try {
            const index = route.component.indexOf('views')
            const path = index > 0 ? route.component.slice(index) : `views/${route.component}`
            route.component = () =>
              import(`@/${path}`).catch((err) => {
                console.error(`路由组件加载失败: @/${path}`, err)
                return import('@/views/404')
              })
          } catch (err) {
            console.error(`路由组件解析失败: ${route.component}`, err)
            route.component = () => import('@/views/404')
          }
        }
      }

      if (route.children) {
        if (Array.isArray(route.children) && route.children.length) {
          route.children = convertRouter(route.children)
          // 过滤掉空路由
          route.children = route.children.filter((child) => child !== null)
        }
        if (!route.children || route.children.length === 0) delete route.children
      }

      return route
    })
    .filter((route) => route !== null) // 过滤掉无效路由
}

/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 判断当前路由是否包含权限
 * @param permissions
 * @param route
 * @returns {boolean|*}
 */
function hasPermission(permissions, route) {
  // 确保permissions是数组
  if (!permissions || !Array.isArray(permissions)) {
    return false
  }

  if (route.meta && route.meta.permissions) {
    return permissions.some((role) => route.meta.permissions.includes(role))
  } else {
    return true
  }
}

/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description intelligence模式根据permissions数组拦截路由
 * @param routes
 * @param permissions
 * @returns {[]}
 */
export function filterAsyncRoutes(routes, permissions) {
  // 处理无效参数
  if (!routes || !Array.isArray(routes)) {
    return []
  }

  if (!permissions || !Array.isArray(permissions)) {
    return []
  }

  const finallyRoutes = []
  routes.forEach((route) => {
    if (!route) return

    const item = { ...route }
    if (hasPermission(permissions, item)) {
      if (item.children && Array.isArray(item.children)) {
        item.children = filterAsyncRoutes(item.children, permissions)
      }
      finallyRoutes.push(item)
    }
  })
  return finallyRoutes
}
