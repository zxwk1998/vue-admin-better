import store from '@/store'

export default {
  inserted(element, binding) {
    const { value } = binding
    const permissions = store.getters['user/permissions']
    if (value && value instanceof Array && value.length > 0) {
      const hasPermission = permissions.some((role) => value.includes(role))
      if (!hasPermission)
        element.parentNode && element.parentNode.removeChild(element)
    }
  },
}
