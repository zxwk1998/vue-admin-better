/*!
 * vue-admin-better
 * GitHub: https://github.com/zxwk1998/vue-admin-better
 * Gitee: https://gitee.com/chu1204505056/vue-admin-better
 *
 * 版权所有 (c) 2025 vue-admin-better
 * 本项目使用 MIT 许可证
 * 构建时间: 2025-12-22 11:01:48
 */
"use strict";
(self["webpackChunkvue_admin_better"] = self["webpackChunkvue_admin_better"] || []).push([["9364"], {
61343: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getList: function() { return getList; }
});
/* import */ var axios__rspack_import_0 = __webpack_require__(45053);

function getList() {
  return (0,axios__rspack_import_0["default"])({
    url: 'https://gcore.jsdelivr.net/gh/prettier/prettier@master/docs/options.md',
    method: 'get'
  });
}

}),

}]);