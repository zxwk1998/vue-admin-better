"use strict";
(self["webpackChunkvue_admin_better"] = self["webpackChunkvue_admin_better"] || []).push([["2380"], {
43761: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getList: function() { return getList; }
});
/* ESM import */var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82194);

function getList() {
  return (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'https://gcore.jsdelivr.net/gh/prettier/prettier@master/docs/options.md',
    method: 'get'
  });
}

}),

}]);