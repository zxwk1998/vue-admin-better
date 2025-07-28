"use strict";
(self["webpackChunkvue_admin_better"] = self["webpackChunkvue_admin_better"] || []).push([["5485"], {
47795: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getNoticeList: function() { return getNoticeList; }
});
/* ESM import */var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95508);

function getNoticeList() {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: 'https://api.vuejs-core.cn/getNotice',
    method: 'get'
  });
}

}),

}]);