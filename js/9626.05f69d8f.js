"use strict";
(self["webpackChunkvue_admin_better"] = self["webpackChunkvue_admin_better"] || []).push([["9626"], {
25279: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  doDelete: function() { return doDelete; },
  doEdit: function() { return doEdit; },
  getList: function() { return getList; }
});
/* ESM import */var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95508);

function getList(data) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/userManagement/getList',
    method: 'post',
    data
  });
}
function doEdit(data) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/userManagement/doEdit',
    method: 'post',
    data
  });
}
function doDelete(data) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/userManagement/doDelete',
    method: 'post',
    data
  });
}

}),

}]);