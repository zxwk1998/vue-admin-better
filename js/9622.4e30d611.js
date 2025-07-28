"use strict";
(self["webpackChunkvue_admin_better"] = self["webpackChunkvue_admin_better"] || []).push([["9622"], {
8618: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return checkPermission; }
});
/* ESM import */var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46846);
/* ESM import */var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* ESM import */var core_js_modules_es_iterator_some_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1547);
/* ESM import */var core_js_modules_es_iterator_some_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_some_js__WEBPACK_IMPORTED_MODULE_1__);
/* ESM import */var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(118);




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