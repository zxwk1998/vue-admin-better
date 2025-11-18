/*!
 * vue-admin-better
 * GitHub: https://github.com/zxwk1998/vue-admin-better
 * Gitee: https://gitee.com/chu1204505056/vue-admin-better
 *
 * 版权所有 (c) 2025 vue-admin-better
 * 本项目使用 MIT 许可证
 * 构建时间: 2025-11-18 02:47:16
 */
"use strict";
(self["webpackChunkvue_admin_better"] = self["webpackChunkvue_admin_better"] || []).push([["432"], {
4979: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return checkPermission; }
});
/* import */var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66517);
/* import */var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* import */var core_js_modules_es_iterator_some_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8485);
/* import */var core_js_modules_es_iterator_some_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_some_js__WEBPACK_IMPORTED_MODULE_1__);
/* import */var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9050);




/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 检查权限
 * @param value
 * @returns {boolean}
 */
function checkPermission(value) {
  if (value && value instanceof Array && value.length > 0) {
    const permissions = _store__WEBPACK_IMPORTED_MODULE_2__["default"].getters["user/permissions"];
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