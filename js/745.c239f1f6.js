"use strict";
(self["webpackChunkvue_admin_better"] = self["webpackChunkvue_admin_better"] || []).push([["745"], {
79446: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getRepos: function() { return getRepos; },
  getStargazers: function() { return getStargazers; }
});
/* ESM import */var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82194);

function getRepos(params) {
  return (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'https://api.github.com/repos/zxwk1998/vue-admin-better',
    method: 'get',
    params,
    timeout: 10000
  });
}
function getStargazers(params) {
  return (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'https://api.github.com/repos/zxwk1998/vue-admin-better/stargazers',
    method: 'get',
    params,
    timeout: 10000
  });
}

}),

}]);