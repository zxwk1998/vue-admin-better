/*!
 * vue-admin-better
 * GitHub: https://github.com/zxwk1998/vue-admin-better
 * Gitee: https://gitee.com/chu1204505056/vue-admin-better
 *
 * 版权所有 (c) 2025 vue-admin-better
 * 本项目使用 MIT 许可证
 * 构建时间: 2025-12-22 10:59:09
 */
"use strict";
(self["webpackChunkvue_admin_better"] = self["webpackChunkvue_admin_better"] || []).push([["475"], {
48854: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return checkPermission; }
});
/* import */ var core_js_modules_es_iterator_constructor_js__rspack_import_0 = __webpack_require__(17932);
/* import */ var core_js_modules_es_iterator_constructor_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__rspack_import_0);
/* import */ var core_js_modules_es_iterator_some_js__rspack_import_1 = __webpack_require__(11546);
/* import */ var core_js_modules_es_iterator_some_js__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_some_js__rspack_import_1);
/* import */ var _store__rspack_import_2 = __webpack_require__(38093);




/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 检查权限
 * @param value
 * @returns {boolean}
 */
function checkPermission(value) {
  if (value && value instanceof Array && value.length > 0) {
    const permissions = _store__rspack_import_2["default"].getters["user/permissions"];
    const permissionPermissions = value;
    return permissions.some(role => {
      return permissionPermissions.includes(role);
    });
  } else {
    return false;
  }
}

}),

}]);