/*!
 * vue-admin-better
 * GitHub: https://github.com/zxwk1998/vue-admin-better
 * Gitee: https://gitee.com/chu1204505056/vue-admin-better
 *
 * 版权所有 (c) 2025 vue-admin-better
 * 本项目使用 MIT 许可证
 * 构建时间: 2025-12-20 05:50:40
 */
"use strict";
(self["webpackChunkvue_admin_better"] = self["webpackChunkvue_admin_better"] || []).push([["7802"], {
41921: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getRepos: function() { return getRepos; },
  getStargazers: function() { return getStargazers; }
});
/* import */ var axios__rspack_import_0 = __webpack_require__(45053);

function getRepos(params) {
  return (0,axios__rspack_import_0["default"])({
    url: 'https://api.github.com/repos/zxwk1998/vue-admin-better',
    method: 'get',
    params,
    timeout: 10000
  });
}
function getStargazers(params) {
  return (0,axios__rspack_import_0["default"])({
    url: 'https://api.github.com/repos/zxwk1998/vue-admin-better/stargazers',
    method: 'get',
    params,
    timeout: 10000
  });
}

}),

}]);