/*!
 * vue-admin-better
 * GitHub: https://github.com/zxwk1998/vue-admin-better
 * Gitee: https://gitee.com/chu1204505056/vue-admin-better
 *
 * 版权所有 (c) 2025 vue-admin-better
 * 本项目使用 MIT 许可证
 * 构建时间: 2025-12-20 05:07:54
 */
"use strict";
(self["webpackChunkvue_admin_better"] = self["webpackChunkvue_admin_better"] || []).push([["4763"], {
88534: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  doDelete: function() { return doDelete; },
  doEdit: function() { return doEdit; },
  getTree: function() { return getTree; }
});
/* import */ var _utils_request__rspack_import_0 = __webpack_require__(51860);

function getTree(data) {
  return (0,_utils_request__rspack_import_0["default"])({
    url: '/menuManagement/getTree',
    method: 'post',
    data
  });
}
function doEdit(data) {
  return (0,_utils_request__rspack_import_0["default"])({
    url: '/menuManagement/doEdit',
    method: 'post',
    data
  });
}
function doDelete(data) {
  return (0,_utils_request__rspack_import_0["default"])({
    url: '/menuManagement/doDelete',
    method: 'post',
    data
  });
}

}),

}]);