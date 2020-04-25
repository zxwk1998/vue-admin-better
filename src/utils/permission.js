import store from "@/store";

/**
 * @description 检查权限
 * @param value
 * @returns {boolean}
 */
export default function checkPermission(value) {
  if (value && value instanceof Array && value.length > 0) {
    const roles = store.getters && store.getters.roles;
    const permissionRoles = value;

    return roles.some((role) => {
      return permissionRoles.includes(role);
    });
  } else {
    return false;
  }
}
