/*!
 * vue-admin-better
 * GitHub: https://github.com/zxwk1998/vue-admin-better
 * Gitee: https://gitee.com/chu1204505056/vue-admin-better
 *
 * 版权所有 (c) 2025 vue-admin-better
 * 本项目使用 MIT 许可证
 * 构建时间: 2025-11-27 13:18:44
 */
"use strict";
(self["webpackChunkvue_admin_better"] = self["webpackChunkvue_admin_better"] || []).push([["5505"], {
52120: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return handleClipboard; }
});
/* import */ var vue__rspack_import_1 = __webpack_require__(97078);
/* import */ var clipboard__rspack_import_0 = __webpack_require__(2122);
/* import */ var clipboard__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(clipboard__rspack_import_0);


function clipboardSuccess() {
  vue__rspack_import_1["default"].prototype.$baseMessage('复制成功', 'success');
}
function clipboardError() {
  vue__rspack_import_1["default"].prototype.$baseMessage('复制失败', 'error');
}

/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 复制数据
 * @param text
 * @param event
 */
function handleClipboard(text, event) {
  const clipboard = new (clipboard__rspack_import_0_default())(event.target, {
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