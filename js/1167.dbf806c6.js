"use strict";
(self["webpackChunkvue_admin_better"] = self["webpackChunkvue_admin_better"] || []).push([["1167"], {
61953: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  doDelete: function() { return doDelete; },
  doEdit: function() { return doEdit; },
  getTree: function() { return getTree; }
});
/* ESM import */var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95508);

function getTree(data) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/menuManagement/getTree',
    method: 'post',
    data
  });
}
function doEdit(data) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/menuManagement/doEdit',
    method: 'post',
    data
  });
}
function doDelete(data) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/menuManagement/doDelete',
    method: 'post',
    data
  });
}

}),

}]);