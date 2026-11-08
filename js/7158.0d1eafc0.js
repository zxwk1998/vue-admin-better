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
(self["rspackChunkvue_admin_better"] = self["rspackChunkvue_admin_better"] || []).push([[7158], {
16293: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var axios__rspack_import_0 = __webpack_require__(63158);

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
__webpack_require__.d(__webpack_exports__, {
}, {
  getRepos: getRepos,
  getStargazers: getStargazers
});


}),

}]);