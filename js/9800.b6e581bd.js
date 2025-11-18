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
(self["webpackChunkvue_admin_better"] = self["webpackChunkvue_admin_better"] || []).push([["9800"], {
10299: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getNoticeList: function() { return getNoticeList; }
});
/* import */var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71763);

function getNoticeList() {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'https://api.vuejs-core.cn/getNotice',
    method: 'get'
  });
}

}),

}]);