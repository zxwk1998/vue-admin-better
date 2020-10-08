import store from '@/store'

export function hasRole(value) {
  if (store.getters['acl/admin']) return true
  if (value instanceof Array && value.length > 0)
    return can(store.getters['acl/role'], {
      role: value,
      mode: 'oneOf',
    })
  let mode = 'oneOf'
  if (Object.prototype.hasOwnProperty.call(value, 'mode')) mode = value['mode']
  let result = true
  if (Object.prototype.hasOwnProperty.call(value, 'role'))
    result =
      result && can(store.getters['acl/role'], { role: value['role'], mode })
  if (result && Object.prototype.hasOwnProperty.call(value, 'ability'))
    result =
      result &&
      can(store.getters['acl/ability'], {
        role: value['ability'],
        mode,
      })
  return result
}

export function can(roleOrAbility, value) {
  let hasRole = false
  if (
    value instanceof Object &&
    Object.prototype.hasOwnProperty.call(value, 'role') &&
    Object.prototype.hasOwnProperty.call(value, 'mode')
  ) {
    const { role, mode } = value
    if (mode === 'allOf') {
      hasRole = role.every((item) => {
        return roleOrAbility.includes(item)
      })
    }
    if (mode === 'oneOf') {
      hasRole = role.some((item) => {
        return roleOrAbility.includes(item)
      })
    }
    if (mode === 'except') {
      hasRole = !role.some((item) => {
        return roleOrAbility.includes(item)
      })
    }
  }
  return hasRole
}
