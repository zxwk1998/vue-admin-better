import store from "@/store";

export default {
  inserted(el, binding) {
    const { value } = binding;
    const permissions = store.getters["user/permissions"];

    if (value && value instanceof Array && value.length > 0) {
      const hasPermission = permissions.some((role) => {
        return value.includes(role);
      });

      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    }
  },
};
