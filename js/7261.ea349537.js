"use strict";
(self["webpackChunkvue_admin_better"] = self["webpackChunkvue_admin_better"] || []).push([["7261"], {
88768: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return handleClipboard; }
});
/* ESM import */var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55384);
/* ESM import */var clipboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99013);
/* ESM import */var clipboard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_0__);


function clipboardSuccess() {
  vue__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.$baseMessage('复制成功', 'success');
}
function clipboardError() {
  vue__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.$baseMessage('复制失败', 'error');
}

/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 复制数据
 * @param text
 * @param event
 */
function handleClipboard(text, event) {
  const clipboard = new (clipboard__WEBPACK_IMPORTED_MODULE_0___default())(event.target, {
    text: () => text
  });
  clipboard.on('success', () => {
    clipboardSuccess();
    clipboard.destroy();
  });
  clipboard.on('error', () => {
    clipboardError();
    clipboard.destroy();
  });
  clipboard.onClick(event);
}

}),

}]);