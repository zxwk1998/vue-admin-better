/*!
 * vue-admin-better
 * GitHub: https://github.com/zxwk1998/vue-admin-better
 * Gitee: https://gitee.com/chu1204505056/vue-admin-better
 *
 * 版权所有 (c) 2025 vue-admin-better
 * 本项目使用 MIT 许可证
 * 构建时间: 2026-11-8 08:24:59
 */
"use strict";
(self["rspackChunkvue_admin_better"] = self["rspackChunkvue_admin_better"] || []).push([[9831], {
49706: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var core_js_modules_es_array_includes_js__rspack_import_0 = __webpack_require__(19945);
/* import */ var core_js_modules_es_array_includes_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__rspack_import_0);
/* import */ var core_js_modules_es_iterator_constructor_js__rspack_import_1 = __webpack_require__(65649);
/* import */ var core_js_modules_es_iterator_constructor_js__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__rspack_import_1);
/* import */ var core_js_modules_es_iterator_some_js__rspack_import_2 = __webpack_require__(70705);
/* import */ var core_js_modules_es_iterator_some_js__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_some_js__rspack_import_2);
/* import */ var _store__rspack_import_3 = __webpack_require__(91217);





/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 检查权限
 * @param value
 * @returns {boolean}
 */
function checkPermission(value) {
  if (value && value instanceof Array && value.length > 0) {
    const permissions = _store__rspack_import_3["default"].getters["user/permissions"];
    const permissionPermissions = value;
    return permissions.some(role => {
      return permissionPermissions.includes(role);
    });
  } else {
    return false;
  }
}
__webpack_require__.d(__webpack_exports__, {
}, {
  "default": checkPermission
});


}),

}]);