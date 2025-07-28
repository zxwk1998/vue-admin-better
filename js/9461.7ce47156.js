"use strict";
(self["webpackChunkvue_admin_better"] = self["webpackChunkvue_admin_better"] || []).push([["9461"], {
57492: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getTreeList: function() { return getTreeList; }
});
/* ESM import */var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95508);

function getTreeList(data) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/tree/list',
    method: 'post',
    data
  });
}

}),

}]);