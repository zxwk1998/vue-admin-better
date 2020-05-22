import store from "@/store";

/**
 * @description 检查权限
 * @param value
 * @returns {boolean}
 */
export default function checkPermission(value) {
  if (value && value instanceof Array && value.length > 0) {
    const permissions = store.getters["user/permissions"];
    const permissionPermissions = value;

    return permissions.some((role) => {
      return permissionPermissions.includes(role);
    });
  } else {
    return false;
  }
}
