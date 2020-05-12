import store from "@/store";

export default {
  inserted(el, binding) {
    const { value } = binding;
    const permissions = store.getters && store.getters.permissions;

    if (value && value instanceof Array && value.length > 0) {
      const permissionPermissions = value;
      const hasPermission = permissions.some((role) => {
        return permissionPermissions.includes(role);
      });

      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    }
  },
};
