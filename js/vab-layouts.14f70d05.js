"use strict";
(self["webpackChunkvue_admin_better"] = self["webpackChunkvue_admin_better"] || []).push([["4769"], {
69048: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46846);
/* ESM import */var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* ESM import */var core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47827);
/* ESM import */var core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* ESM import */var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55384);


/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 公共布局及样式自动引入
 */


const requireComponents = __webpack_require__(42553);
requireComponents.keys().forEach(fileName => {
  const componentConfig = requireComponents(fileName);
  const componentName = componentConfig.default.name;
  vue__WEBPACK_IMPORTED_MODULE_2__["default"].component(componentName, componentConfig.default || componentConfig);
});

// 使用 require.context 安全地导入主题文件
const requireThemes = __webpack_require__(51035);
requireThemes.keys().forEach(fileName => {
  // 使用 require.context 直接引入，避免动态字符串拼接
  requireThemes(fileName);
});

}),
82014: (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2610);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44206);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".vab-ad[data-v-60afcd0e]{height:30px;padding-right:22px;padding-left:22px;margin-bottom:-20px;line-height:30px;cursor:pointer}.vab-ad a[data-v-60afcd0e]{color:#999}", ""]);
// Exports
/* ESM default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


}),
65742: (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2610);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44206);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".app-main-container[data-v-4b2d61d5]{position:relative;width:100%;overflow:hidden}.app-main-container .vab-keel[data-v-4b2d61d5]{margin:22px}.app-main-container .app-main-height[data-v-4b2d61d5]{min-height:calc(100vh - 60px - 50px - 22px - 22px - 55px - 55px)}.app-main-container .footer-copyright[data-v-4b2d61d5]{min-height:55px;line-height:55px;color:rgba(0,0,0,.45);text-align:center;border-top:1px dashed #ebeef5}", ""]);
// Exports
/* ESM default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


}),
92505: (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2610);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44206);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".avatar-container[data-v-2463f60e]{display:flex;align-items:center;padding:8px 12px;border-radius:8px;cursor:pointer}.avatar-container .avatar-wrapper[data-v-2463f60e]{position:relative;margin-right:12px}.avatar-container .avatar-wrapper .user-avatar[data-v-2463f60e]{width:40px;height:40px;border-radius:50%;object-fit:cover;border:2px solid rgba(255,255,255,.3);box-shadow:0 2px 8px rgba(0,0,0,.1)}.avatar-container .user-info[data-v-2463f60e]{flex:1;min-width:0}.avatar-container .user-info .username[data-v-2463f60e]{font-size:14px;font-weight:600;color:#333;margin-bottom:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.avatar-container .user-info .user-role[data-v-2463f60e]{font-size:12px;color:#666;opacity:.8}.avatar-container .dropdown-icon[data-v-2463f60e]{margin-left:8px;color:#666}.custom-dropdown[data-v-2463f60e]{border-radius:12px;box-shadow:0 8px 32px rgba(0,0,0,.12);border:1px solid rgba(255,255,255,.2);backdrop-filter:blur(10px);background:rgba(255,255,255,.95);padding:0;min-width:220px}.custom-dropdown .dropdown-header[data-v-2463f60e]{display:flex;align-items:center;padding:16px;border-bottom:1px solid rgba(0,0,0,.06);background:linear-gradient(135deg, #4d8af0 0%, #1a56db 100%);border-radius:12px 12px 0 0;color:#fff}.custom-dropdown .dropdown-header .header-avatar[data-v-2463f60e]{width:48px;height:48px;border-radius:50%;border:2px solid rgba(255,255,255,.3);margin-right:12px;object-fit:cover}.custom-dropdown .dropdown-header .header-info[data-v-2463f60e]{flex:1}.custom-dropdown .dropdown-header .header-info .header-username[data-v-2463f60e]{font-size:16px;font-weight:600;margin-bottom:4px}.custom-dropdown .dropdown-header .header-info .header-email[data-v-2463f60e]{font-size:12px;opacity:.8}.custom-dropdown .dropdown-item[data-v-2463f60e]{display:flex;align-items:center;padding:8px 16px;border-radius:0}.custom-dropdown .dropdown-item i[data-v-2463f60e]{margin-right:12px;font-size:16px;width:16px;text-align:center}.custom-dropdown .dropdown-item span[data-v-2463f60e]{font-size:14px}.custom-dropdown .dropdown-item.logout-item[data-v-2463f60e]{color:#f56c6c}.custom-dropdown .el-divider[data-v-2463f60e]{margin:8px 0}@media(max-width: 768px){.avatar-container[data-v-2463f60e]{padding:6px 8px}.avatar-container .user-info[data-v-2463f60e]{display:none}.avatar-container .dropdown-icon[data-v-2463f60e]{display:none}.custom-dropdown[data-v-2463f60e]{min-width:200px}}[data-v-2463f60e] .popper__arrow{display:none !important}", ""]);
// Exports
/* ESM default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


}),
91772: (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2610);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44206);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".breadcrumb-container[data-v-9771253e]{height:60px;font-size:14px;line-height:60px}.breadcrumb-container[data-v-9771253e]  .el-breadcrumb__item .el-breadcrumb__inner a{display:flex;float:left;font-weight:normal;color:#515a6e}.breadcrumb-container[data-v-9771253e]  .el-breadcrumb__item .el-breadcrumb__inner a i{margin-right:3px}.breadcrumb-container[data-v-9771253e]  .el-breadcrumb__item:last-child .el-breadcrumb__inner a{color:#999}", ""]);
// Exports
/* ESM default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


}),
80416: (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2610);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44206);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".svg-icon[data-v-df3a8364]{width:1em;height:1em;overflow:hidden;vertical-align:-0.15em;fill:currentColor}.svg-icon[data-v-df3a8364]:hover{opacity:.8}.svg-external-icon[data-v-df3a8364]{display:inline-block}", ""]);
// Exports
/* ESM default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


}),
99928: (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2610);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44206);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "[data-v-09ae1ffc] .el-badge .el-button{display:flex;align-items:center;justify-items:center;height:28px}", ""]);
// Exports
/* ESM default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


}),
17863: (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2610);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44206);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".github-corner[data-v-3d986683]{position:absolute;top:0;right:0;z-index:997}.github-corner .octo-arm[data-v-3d986683]{animation:octocat-wave-data-v-3d986683 560ms ease-in-out infinite}.github-corner:hover .octo-arm[data-v-3d986683]{animation:octocat-wave-data-v-3d986683 560ms ease-in-out infinite}.github-corner .github-color[data-v-3d986683]{color:#fff;fill:#4d8af0}@keyframes octocat-wave-data-v-3d986683{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(100deg)}}", ""]);
// Exports
/* ESM default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


}),
81331: (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2610);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44206);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".logo-container-horizontal[data-v-ff373e7c]{position:relative;height:64px;overflow:hidden;line-height:64px;background:#191a23}.logo-container-horizontal .logo[data-v-ff373e7c]{display:inline-block;width:34px;height:34px;margin-right:3px;color:#fff;fill:#fff;vertical-align:middle}.logo-container-horizontal .title[data-v-ff373e7c]{display:inline-block;overflow:hidden;font-size:24px;line-height:55px;color:#fff;text-overflow:ellipsis;white-space:nowrap;vertical-align:middle}.logo-container-vertical[data-v-ff373e7c]{position:relative;height:64px;overflow:hidden;line-height:64px;background:#191a23;height:70px;line-height:70px;text-align:center}.logo-container-vertical .logo[data-v-ff373e7c]{display:inline-block;width:34px;height:34px;margin-right:3px;color:#fff;fill:#fff;vertical-align:middle;fill:#fff !important}.logo-container-vertical .title[data-v-ff373e7c]{display:inline-block;overflow:hidden;font-size:24px;line-height:55px;color:#fff;text-overflow:ellipsis;white-space:nowrap;vertical-align:middle;max-width:calc(240px - 60px);line-height:70px}", ""]);
// Exports
/* ESM default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


}),
92371: (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2610);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44206);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".nav-container[data-v-190b7566]{position:relative;height:60px;padding-right:22px;padding-left:22px;overflow:hidden;user-select:none;background:rgba(255,255,255,.8);backdrop-filter:blur(20px) saturate(180%);-webkit-backdrop-filter:blur(20px) saturate(180%);border-bottom:1px solid rgba(255,255,255,.3);box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06),inset 0 1px 0 rgba(255,255,255,.6)}.nav-container[data-v-190b7566]::before{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;background:linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.2) 100%);pointer-events:none}.nav-container .left-panel[data-v-190b7566]{position:relative;display:flex;align-items:center;justify-items:center;height:60px}.nav-container .left-panel .fold-unfold[data-v-190b7566]{display:flex;align-items:center;justify-content:center;width:36px;height:36px;color:rgba(0,0,0,.7);background:rgba(255,255,255,.6);border:1px solid rgba(255,255,255,.8);border-radius:50%;cursor:pointer;transition:all .3s cubic-bezier(0.4, 0, 0.2, 1);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)}.nav-container .left-panel .fold-unfold[data-v-190b7566]:hover{background:rgba(255,255,255,.8);border-color:#fff;transform:translateY(-1px);box-shadow:0 4px 12px rgba(0,0,0,.1),0 2px 4px rgba(0,0,0,.05)}.nav-container .left-panel .fold-unfold[data-v-190b7566]:active{transform:translateY(0);box-shadow:0 2px 6px rgba(0,0,0,.1),0 1px 2px rgba(0,0,0,.05)}.nav-container .right-panel[data-v-190b7566]{position:relative;display:flex;align-content:center;align-items:center;justify-content:flex-end;height:60px;gap:8px}.nav-container .right-panel[data-v-190b7566]  svg{width:1.2em;height:1.2em;padding:8px;color:rgba(0,0,0,.7);background:rgba(255,255,255,.6);border:1px solid rgba(255,255,255,.8);border-radius:50%;cursor:pointer;fill:rgba(0,0,0,.7);transition:all .3s cubic-bezier(0.4, 0, 0.2, 1);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)}.nav-container .right-panel[data-v-190b7566]  svg:hover{background:rgba(255,255,255,.8);border-color:#fff;transform:translateY(-1px);box-shadow:0 4px 12px rgba(0,0,0,.1),0 2px 4px rgba(0,0,0,.05)}.nav-container .right-panel[data-v-190b7566]  svg:active{transform:translateY(0);box-shadow:0 2px 6px rgba(0,0,0,.1),0 1px 2px rgba(0,0,0,.05)}.nav-container .right-panel[data-v-190b7566]  button svg{margin-right:0;color:rgba(255,255,255,.9);background:rgba(0,122,255,.8);border-color:rgba(0,122,255,.9);cursor:pointer;fill:rgba(255,255,255,.9)}.nav-container .right-panel[data-v-190b7566]  button svg:hover{background:rgba(0,122,255,.9);border-color:#007aff}.nav-container .right-panel[data-v-190b7566]  .el-badge{margin-right:0}.nav-container .right-panel[data-v-190b7566]  .el-badge .el-button{background:rgba(255,255,255,.6);border:1px solid rgba(255,255,255,.8);border-radius:12px;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);transition:all .3s cubic-bezier(0.4, 0, 0.2, 1)}.nav-container .right-panel[data-v-190b7566]  .el-badge .el-button:hover{background:rgba(255,255,255,.8);border-color:#fff;transform:translateY(-1px);box-shadow:0 4px 12px rgba(0,0,0,.1),0 2px 4px rgba(0,0,0,.05)}@media(max-width: 768px){.nav-container[data-v-190b7566]{padding:0 12px}.nav-container .left-panel .fold-unfold[data-v-190b7566]{width:32px;height:32px}.nav-container .right-panel[data-v-190b7566]{gap:4px}.nav-container .right-panel[data-v-190b7566]  svg{padding:6px;width:1em;height:1em}}", ""]);
// Exports
/* ESM default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


}),
33073: (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2610);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44206);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".vab-query-form[data-v-32220eca]{margin-bottom:10px}.vab-query-form[data-v-32220eca]  .top-panel{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-start}.vab-query-form[data-v-32220eca]  .bottom-panel{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-start;padding-top:14px;border-top:1px solid #dcdfe6}.vab-query-form[data-v-32220eca]  .left-panel{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-start}.vab-query-form[data-v-32220eca]  .left-panel>.el-button,.vab-query-form[data-v-32220eca]  .left-panel .el-form-item{margin:5px}.vab-query-form[data-v-32220eca]  .right-panel{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-start;justify-content:flex-end}.vab-query-form[data-v-32220eca]  .right-panel .el-form-item{margin:5px}", ""]);
// Exports
/* ESM default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


}),
52693: (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2610);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44206);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".vab-nav-icon[data-v-6cc009ce]{margin-right:4px}[data-v-6cc009ce] .el-tag{float:right;height:16px;padding-right:4px;padding-left:4px;margin-top:calc((50px - 16px) / 2);line-height:16px;border:0}", ""]);
// Exports
/* ESM default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


}),
20522: (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2610);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44206);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".side-container[data-v-e39ba7e0]{position:fixed;top:0;bottom:0;left:0;z-index:1000;width:240px;height:100vh;overflow:hidden;background:#191a23;box-shadow:2px 0 6px rgba(0,21,41,.35);transition:width .3s}.side-container.is-collapse[data-v-e39ba7e0]{width:64px;border-right:0}.side-container.is-collapse[data-v-e39ba7e0]  .el-menu{transition:width .3s}.side-container.is-collapse[data-v-e39ba7e0]  .el-menu--collapse{border-right:0}.side-container.is-collapse[data-v-e39ba7e0]  .el-menu--collapse .el-submenu__icon-arrow{right:10px;margin-top:-3px}.side-container.is-collapse[data-v-e39ba7e0]  .el-menu--collapse .el-menu-item,.side-container.is-collapse[data-v-e39ba7e0]  .el-menu--collapse .el-submenu{text-align:center}.side-container[data-v-e39ba7e0]  .el-scrollbar__wrap{overflow-x:hidden}.side-container[data-v-e39ba7e0]  .el-menu{border:0}.side-container[data-v-e39ba7e0]  .el-menu .vab-fas-icon{padding-right:3px;font-size:14px;display:inline-block;width:14px}.side-container[data-v-e39ba7e0]  .el-menu .vab-remix-icon{padding-right:3px;font-size:16px}.side-container[data-v-e39ba7e0]  .el-menu-item,.side-container[data-v-e39ba7e0]  .el-submenu__title{height:50px;line-height:50px;vertical-align:middle}.side-container[data-v-e39ba7e0]  .el-menu-item:hover{color:#fff;background-color:#4d8af0 !important}.side-container[data-v-e39ba7e0]  .el-menu-item.is-active{color:#fff;background-color:#4d8af0 !important}", ""]);
// Exports
/* ESM default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


}),
88655: (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2610);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44206);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".tabs-container[data-v-14432d70]{position:relative;box-sizing:border-box;display:flex;align-content:center;align-items:center;justify-content:space-between;height:54px;padding-right:22px;padding-left:22px;user-select:none;background:rgba(255,255,255,.8);backdrop-filter:blur(20px) saturate(180%);-webkit-backdrop-filter:blur(20px) saturate(180%);border-top:1px solid rgba(255,255,255,.3);box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06),inset 0 1px 0 rgba(255,255,255,.6)}.tabs-container[data-v-14432d70]::before{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;background:linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.2) 100%);pointer-events:none}.tabs-container[data-v-14432d70]  .fold-unfold{margin-right:22px}.tabs-container .tabs-content[data-v-14432d70]{position:relative;width:calc(100% - 90px);height:32px}.tabs-container .tabs-content[data-v-14432d70]  .el-tabs__nav-next,.tabs-container .tabs-content[data-v-14432d70]  .el-tabs__nav-prev{height:32px;line-height:32px;color:rgba(0,0,0,.6);background:rgba(255,255,255,.6);border:1px solid rgba(255,255,255,.8);border-radius:12px;transition:all .3s cubic-bezier(0.4, 0, 0.2, 1);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)}.tabs-container .tabs-content[data-v-14432d70]  .el-tabs__nav-next:hover,.tabs-container .tabs-content[data-v-14432d70]  .el-tabs__nav-prev:hover{color:rgba(0,0,0,.8);background:rgba(255,255,255,.8);border-color:#fff;transform:translateY(-1px);box-shadow:0 4px 12px rgba(0,0,0,.1),0 2px 4px rgba(0,0,0,.05)}.tabs-container .tabs-content[data-v-14432d70]  .el-tabs__header{border-bottom:0}.tabs-container .tabs-content[data-v-14432d70]  .el-tabs__header .el-tabs__nav{border:0}.tabs-container .tabs-content[data-v-14432d70]  .el-tabs__header .el-tabs__item{position:relative;box-sizing:border-box;height:32px;margin-right:8px;margin-top:3px;padding:0 20px;line-height:32px;border:1px solid #4d8af0;color:#4d8af0;border-radius:5px;transition:all .3s cubic-bezier(0.4, 0, 0.2, 1);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);overflow:hidden}.tabs-container .tabs-content[data-v-14432d70]  .el-tabs__header .el-tabs__item .tab-icon{margin-right:6px;font-size:12px}.tabs-container .tabs-content[data-v-14432d70]  .el-tabs__header .el-tabs__item::before{content:\"\";position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);transition:left .6s cubic-bezier(0.4, 0, 0.2, 1)}.tabs-container .tabs-content[data-v-14432d70]  .el-tabs__header .el-tabs__item:hover{color:rgba(255,255,255,.95);background:#4d8af0;border-color:#4d8af0}.tabs-container .tabs-content[data-v-14432d70]  .el-tabs__header .el-tabs__item:hover::before{left:100%}.tabs-container .tabs-content[data-v-14432d70]  .el-tabs__header .el-tabs__item.is-active{color:rgba(255,255,255,.95);background:#4d8af0;border-color:#4d8af0}.tabs-container .tabs-content[data-v-14432d70]  .el-tabs__header .el-tabs__item .el-icon-close{position:relative;margin-left:8px;font-size:12px;color:rgba(255,255,255,.7);transition:all .3s cubic-bezier(0.4, 0, 0.2, 1);border-radius:5px;padding:2px}.tabs-container .tabs-content[data-v-14432d70]  .el-tabs__header .el-tabs__item .el-icon-close:hover{color:rgba(255,255,255,.9);background:rgba(255,255,255,.2);transform:scale(1.2)}.tabs-container .more[data-v-14432d70]{position:relative;display:flex;align-content:center;align-items:center;padding:8px 16px;color:rgba(0,0,0,.7);background:rgba(255,255,255,.6);border:1px solid rgba(255,255,255,.8);border-radius:16px;cursor:pointer;transition:all .3s cubic-bezier(0.4, 0, 0.2, 1);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)}.tabs-container .more[data-v-14432d70]:hover{color:rgba(0,0,0,.9);background:rgba(255,255,255,.8);border-color:#fff;transform:translateY(-1px);box-shadow:0 4px 12px rgba(0,0,0,.1),0 2px 4px rgba(0,0,0,.05)}.tabs-container .more[data-v-14432d70]:active{transform:translateY(0);box-shadow:0 2px 6px rgba(0,0,0,.1),0 1px 2px rgba(0,0,0,.05)}@media(max-width: 768px){.tabs-container[data-v-14432d70]{padding:0 12px}.tabs-container .tabs-content[data-v-14432d70]{width:calc(100% - 80px)}.tabs-container .tabs-content[data-v-14432d70]  .el-tabs__item{padding:0 12px;margin-right:6px;font-size:12px;border-radius:12px}.tabs-container .more[data-v-14432d70]{padding:6px 12px;font-size:12px}}", ""]);
// Exports
/* ESM default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


}),
26518: (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2610);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44206);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".tabs-more .el-dropdown-menu__item{padding:8px 20px;font-size:14px;line-height:1.5}.tabs-more .el-dropdown-menu__item:not(:last-child){margin-bottom:4px}.tabs-more .el-dropdown-menu__item .vab-icon{margin-right:8px;width:16px;text-align:center}.tabs-more .el-dropdown-menu__item:hover{background:rgba(77,138,240,.1);color:#4d8af0;border-radius:6px}", ""]);
// Exports
/* ESM default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


}),
58849: (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2610);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44206);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".theme-setting[data-v-3ec093df]{position:fixed;right:0;z-index:1000;width:60px;min-height:60px;text-align:center;cursor:pointer;background:#4d8af0;border-radius:6px;top:calc((100vh - 110px) / 2)}.theme-setting>div[data-v-3ec093df]{padding-top:10px;border-bottom:0 !important}.theme-setting>div[data-v-3ec093df]:hover{opacity:.9}.theme-setting>div+div[data-v-3ec093df]{border-top:1px solid #fff}.theme-setting>div p[data-v-3ec093df]{padding:0;margin:0;font-size:12px;line-height:30px;color:#fff}.theme-setting[data-v-3ec093df]  svg:not(:root).svg-inline--fa{display:block;margin-right:auto;margin-left:auto;color:#fff}.theme-setting[data-v-3ec093df]  .svg-icon{display:block;margin-right:auto;margin-left:auto;font-size:20px;color:#fff;fill:#fff}.el-drawer__body[data-v-3ec093df]{padding:20px}.el-drawer__footer[data-v-3ec093df]{border-top:1px solid #dedede;position:fixed;bottom:0;width:100%;padding:10px 0 0 20px;height:50px}.theme-config-container .config-section[data-v-3ec093df]{margin-bottom:30px}.theme-config-container .config-section .section-header[data-v-3ec093df]{display:flex;align-items:center;margin-bottom:16px;padding-bottom:8px;border-bottom:1px solid #f0f0f0}.theme-config-container .config-section .section-header i[data-v-3ec093df]{margin-right:8px;font-size:16px;color:#677ae4}.theme-config-container .config-section .section-header span[data-v-3ec093df]{font-size:16px;font-weight:600;color:#333}.theme-config-container .config-section .theme-options[data-v-3ec093df]{display:flex;flex-direction:column;gap:12px}.theme-config-container .config-section .theme-options .theme-option[data-v-3ec093df]{display:flex;align-items:center;padding:12px;border:2px solid #f0f0f0;border-radius:8px;cursor:pointer;transition:all .3s ease}.theme-config-container .config-section .theme-options .theme-option[data-v-3ec093df]:hover{border-color:#677ae4;transform:translateY(-1px);box-shadow:0 4px 12px rgba(64,158,255,.1)}.theme-config-container .config-section .theme-options .theme-option.active[data-v-3ec093df]{border-color:#677ae4;background:rgba(64,158,255,.05);box-shadow:0 4px 12px rgba(64,158,255,.15)}.theme-config-container .config-section .theme-options .theme-option .theme-preview[data-v-3ec093df]{width:60px;height:40px;margin-right:12px;border-radius:4px;overflow:hidden;position:relative}.theme-config-container .config-section .theme-options .theme-option .theme-preview .preview-header[data-v-3ec093df]{height:8px;background:#f0f0f0}.theme-config-container .config-section .theme-options .theme-option .theme-preview .preview-sidebar[data-v-3ec093df]{position:absolute;left:0;top:8px;width:12px;height:32px;background:#e0e0e0}.theme-config-container .config-section .theme-options .theme-option .theme-preview .preview-content[data-v-3ec093df]{position:absolute;left:12px;top:8px;width:48px;height:32px;background:#fafafa}.theme-config-container .config-section .theme-options .theme-option .theme-preview.default-theme .preview-header[data-v-3ec093df]{background:#4d8af0}.theme-config-container .config-section .theme-options .theme-option .theme-preview.default-theme .preview-sidebar[data-v-3ec093df]{background:#2c3e50}.theme-config-container .config-section .theme-options .theme-option .theme-preview.default-theme .preview-content[data-v-3ec093df]{background:#fff}.theme-config-container .config-section .theme-options .theme-option .theme-preview.green-theme .preview-header[data-v-3ec093df]{background:#67c23a}.theme-config-container .config-section .theme-options .theme-option .theme-preview.green-theme .preview-sidebar[data-v-3ec093df]{background:#2d5a27}.theme-config-container .config-section .theme-options .theme-option .theme-preview.green-theme .preview-content[data-v-3ec093df]{background:#f0f9ff}.theme-config-container .config-section .theme-options .theme-option .theme-preview.glory-theme .preview-header[data-v-3ec093df]{background:#e6a23c}.theme-config-container .config-section .theme-options .theme-option .theme-preview.glory-theme .preview-sidebar[data-v-3ec093df]{background:#8b4513}.theme-config-container .config-section .theme-options .theme-option .theme-preview.glory-theme .preview-content[data-v-3ec093df]{background:#fff8e1}.theme-config-container .config-section .theme-options .theme-option .theme-name[data-v-3ec093df]{font-size:14px;font-weight:500;color:#333}.theme-config-container .config-section .layout-options[data-v-3ec093df]{display:flex;flex-direction:column;gap:12px}.theme-config-container .config-section .layout-options .layout-option[data-v-3ec093df]{display:flex;align-items:center;padding:12px;border:2px solid #f0f0f0;border-radius:8px;cursor:pointer;transition:all .3s ease}.theme-config-container .config-section .layout-options .layout-option[data-v-3ec093df]:hover{border-color:#677ae4;transform:translateY(-1px);box-shadow:0 4px 12px rgba(64,158,255,.1)}.theme-config-container .config-section .layout-options .layout-option.active[data-v-3ec093df]{border-color:#677ae4;background:rgba(64,158,255,.05);box-shadow:0 4px 12px rgba(64,158,255,.15)}.theme-config-container .config-section .layout-options .layout-option .layout-preview[data-v-3ec093df]{width:60px;height:40px;margin-right:12px;border-radius:4px;overflow:hidden;position:relative}.theme-config-container .config-section .layout-options .layout-option .layout-preview .preview-header[data-v-3ec093df]{height:8px;background:#677ae4}.theme-config-container .config-section .layout-options .layout-option .layout-preview .preview-main[data-v-3ec093df]{position:absolute;left:0;top:8px;width:100%;height:32px;display:flex}.theme-config-container .config-section .layout-options .layout-option .layout-preview .preview-main .preview-sidebar[data-v-3ec093df]{background:#2c3e50}.theme-config-container .config-section .layout-options .layout-option .layout-preview .preview-main .preview-content[data-v-3ec093df]{background:#fff}.theme-config-container .config-section .layout-options .layout-option .layout-preview.vertical-layout .preview-header[data-v-3ec093df]{height:8px;background:#677ae4}.theme-config-container .config-section .layout-options .layout-option .layout-preview.vertical-layout .preview-sidebar[data-v-3ec093df]{position:absolute;left:0;top:8px;width:12px;height:32px;background:#2c3e50}.theme-config-container .config-section .layout-options .layout-option .layout-preview.vertical-layout .preview-content[data-v-3ec093df]{position:absolute;left:12px;top:8px;width:48px;height:32px;background:#fff}.theme-config-container .config-section .layout-options .layout-option .layout-preview.horizontal-layout .preview-main .preview-sidebar[data-v-3ec093df]{width:100%;height:8px}.theme-config-container .config-section .layout-options .layout-option .layout-preview.horizontal-layout .preview-main .preview-content[data-v-3ec093df]{width:100%;height:24px;margin-top:8px}.theme-config-container .config-section .layout-options .layout-option .layout-name[data-v-3ec093df]{font-size:14px;font-weight:500;color:#333}.theme-config-container .config-section .feature-options .feature-item[data-v-3ec093df]{display:flex;justify-content:space-between;align-items:center;padding:16px 0;border-bottom:1px solid #f0f0f0}.theme-config-container .config-section .feature-options .feature-item[data-v-3ec093df]:last-child{border-bottom:none}.theme-config-container .config-section .feature-options .feature-item .feature-info[data-v-3ec093df]{flex:1;margin-right:16px}.theme-config-container .config-section .feature-options .feature-item .feature-info .feature-name[data-v-3ec093df]{display:block;font-size:14px;font-weight:500;color:#333;margin-bottom:4px}.theme-config-container .config-section .feature-options .feature-item .feature-info .feature-desc[data-v-3ec093df]{display:block;font-size:12px;color:#999;line-height:1.4}", ""]);
// Exports
/* ESM default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


}),
59747: (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2610);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44206);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".el-drawer__wrapper{outline:none !important}.el-drawer__wrapper *{outline:none !important}.vab-color-picker .el-color-dropdown__link-btn{display:none}", ""]);
// Exports
/* ESM default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


}),
64984: (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2610);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44206);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".top-container[data-v-232009d6]{display:flex;align-items:center;justify-items:flex-end;height:64px;background:#191a23}.top-container .vab-main[data-v-232009d6]{background:#191a23}.top-container .vab-main[data-v-232009d6]  .el-menu.el-menu--horizontal{display:flex;align-items:center;justify-content:flex-end;height:64px;border-bottom:0 solid transparent !important}.top-container .vab-main[data-v-232009d6]  .el-menu.el-menu--horizontal .el-menu-item,.top-container .vab-main[data-v-232009d6]  .el-menu.el-menu--horizontal .el-submenu__title{padding:0 15px}@media only screen and (max-width: 767px){.top-container .vab-main[data-v-232009d6]  .el-menu.el-menu--horizontal .el-menu-item,.top-container .vab-main[data-v-232009d6]  .el-menu.el-menu--horizontal .el-submenu__title{padding:0 8px}.top-container .vab-main[data-v-232009d6]  .el-menu.el-menu--horizontal li:nth-child(4),.top-container .vab-main[data-v-232009d6]  .el-menu.el-menu--horizontal li:nth-child(5){display:none !important}}.top-container .vab-main[data-v-232009d6]  .el-menu.el-menu--horizontal>.el-menu-item{height:64px;line-height:64px}.top-container .vab-main[data-v-232009d6]  .el-menu.el-menu--horizontal>.el-submenu .el-submenu__title{height:64px;line-height:64px}.top-container .vab-main[data-v-232009d6]  .el-menu svg{width:1rem;margin-right:3px}.top-container .vab-main[data-v-232009d6]  .el-menu--horizontal .el-menu .el-menu-item,.top-container .vab-main[data-v-232009d6]  .el-menu--horizontal .el-menu .el-submenu__title{height:50px;line-height:50px}.top-container .vab-main[data-v-232009d6]  .el-menu--horizontal .el-submenu.is-active,.top-container .vab-main[data-v-232009d6]  .el-menu--horizontal .el-menu-item.is-active{background-color:#4d8af0 !important;border-bottom:0 solid transparent !important}.top-container .vab-main[data-v-232009d6]  .el-menu--horizontal .el-submenu.is-active .el-submenu__title,.top-container .vab-main[data-v-232009d6]  .el-menu--horizontal .el-menu-item.is-active .el-submenu__title{border-bottom:0 solid transparent !important}.top-container .vab-main[data-v-232009d6]  .el-menu--horizontal>.el-menu-item .el-tag{margin-top:calc(64px / 2 - 7.5px);margin-left:5px}@media only screen and (max-width: 1199px){.top-container .vab-main[data-v-232009d6]  .el-menu--horizontal>.el-menu-item .el-tag{display:none}}.top-container .vab-main[data-v-232009d6]  .el-menu--horizontal>.el-menu-item.is-active{background-color:transparent !important;border-bottom:3px solid #4d8af0 !important}.top-container .right-panel[data-v-232009d6]{display:flex;align-items:center;justify-content:flex-end;height:64px}.top-container .right-panel[data-v-232009d6]  .username,.top-container .right-panel[data-v-232009d6]  .user-role{color:rgba(255,255,255,.9)}.top-container .right-panel[data-v-232009d6]  .username+i{color:rgba(255,255,255,.9)}.top-container .right-panel[data-v-232009d6]  svg{width:1em;height:1em;margin-right:15px;font-size:16px;color:rgba(255,255,255,.9);cursor:pointer;fill:rgba(255,255,255,.9)}.top-container .right-panel[data-v-232009d6]  button svg{margin-right:0;color:rgba(255,255,255,.9);cursor:pointer;fill:rgba(255,255,255,.9)}.top-container .right-panel[data-v-232009d6]  .el-badge{margin-right:15px}", ""]);
// Exports
/* ESM default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


}),
51827: (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2610);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44206);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".vue-admin-better-wrapper[data-v-0e2dd9ce]{position:relative;width:100%;height:100%}.vue-admin-better-wrapper .layout-container-horizontal[data-v-0e2dd9ce]{position:relative}.vue-admin-better-wrapper .layout-container-horizontal.fixed[data-v-0e2dd9ce]{padding-top:calc(64px + 50px)}.vue-admin-better-wrapper .layout-container-horizontal.fixed.no-tabs-bar[data-v-0e2dd9ce]{padding-top:64px}.vue-admin-better-wrapper .layout-container-horizontal[data-v-0e2dd9ce]  .vab-main{width:88%;margin:auto}.vue-admin-better-wrapper .layout-container-horizontal[data-v-0e2dd9ce]  .fixed-header{position:fixed;top:0;right:0;left:0;z-index:998;width:100%;overflow:hidden}.vue-admin-better-wrapper .layout-container-horizontal[data-v-0e2dd9ce]  .tag-view-show{background:#fff;box-shadow:0 2px 12px rgba(0,0,0,.1)}.vue-admin-better-wrapper .layout-container-horizontal[data-v-0e2dd9ce]  .nav-container .fold-unfold{display:none}.vue-admin-better-wrapper .layout-container-horizontal[data-v-0e2dd9ce]  .main-padding .app-main-container{margin-top:22px;margin-bottom:22px;background:#fff}.vue-admin-better-wrapper .layout-container-vertical[data-v-0e2dd9ce]{position:relative}.vue-admin-better-wrapper .layout-container-vertical .mask[data-v-0e2dd9ce]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:999;width:100%;height:100vh;overflow:hidden;background:#000;opacity:.5}.vue-admin-better-wrapper .layout-container-vertical.fixed[data-v-0e2dd9ce]{padding-top:calc(60px + 50px)}.vue-admin-better-wrapper .layout-container-vertical.fixed.no-tabs-bar[data-v-0e2dd9ce]{padding-top:60px}.vue-admin-better-wrapper .layout-container-vertical .vab-main[data-v-0e2dd9ce]{position:relative;min-height:100%;margin-left:240px;background:#f6f8f9;transition:all .3s cubic-bezier(0.645, 0.045, 0.355, 1),border 0s,background 0s,color 0s,font-size 0s}.vue-admin-better-wrapper .layout-container-vertical .vab-main[data-v-0e2dd9ce]  .fixed-header{position:fixed;top:0;right:0;left:0;z-index:998;width:100%;overflow:hidden;left:240px;width:calc(100% - 240px);box-shadow:0 2px 12px rgba(0,0,0,.1);transition:all .3s cubic-bezier(0.645, 0.045, 0.355, 1),border 0s,background 0s,color 0s,font-size 0s}.vue-admin-better-wrapper .layout-container-vertical .vab-main[data-v-0e2dd9ce]  .nav-container{position:relative;box-sizing:border-box}.vue-admin-better-wrapper .layout-container-vertical .vab-main[data-v-0e2dd9ce]  .tabs-container{box-sizing:border-box}.vue-admin-better-wrapper .layout-container-vertical .vab-main[data-v-0e2dd9ce]  .app-main-container{width:calc(100% - 22px - 22px);margin:22px auto;background:#fff;border-radius:6px}.vue-admin-better-wrapper .layout-container-vertical .vab-main.is-collapse-main[data-v-0e2dd9ce]{margin-left:64px}.vue-admin-better-wrapper .layout-container-vertical .vab-main.is-collapse-main[data-v-0e2dd9ce]  .fixed-header{left:64px;width:calc(100% - 65px)}.vue-admin-better-wrapper.mobile[data-v-0e2dd9ce]  .el-pager,.vue-admin-better-wrapper.mobile[data-v-0e2dd9ce]  .el-pagination__jump{display:none}.vue-admin-better-wrapper.mobile[data-v-0e2dd9ce]  .layout-container-vertical .el-scrollbar.side-container.is-collapse{width:0}.vue-admin-better-wrapper.mobile[data-v-0e2dd9ce]  .layout-container-vertical .vab-main{width:100%;margin-left:0}.vue-admin-better-wrapper.mobile[data-v-0e2dd9ce]  .vab-main .fixed-header{left:0 !important;width:100% !important}", ""]);
// Exports
/* ESM default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


}),
54668: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ EmptyLayout; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/EmptyLayout.vue?vue&type=template&id=1a5a2161&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('router-view')}
var staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(71294);
;// CONCATENATED MODULE: ./src/layouts/EmptyLayout.vue

var script = {}


/* normalize component */
;
var component = (0,componentNormalizer["default"])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* ESM default export */ var EmptyLayout = (component.exports);

}),
21076: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ VabAd; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabAd/index.vue?vue&type=template&id=60afcd0e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vab-ad"},[(_vm.adList)?_c('el-carousel',{attrs:{"autoplay":true,"interval":3000,"direction":"vertical","height":"30px","indicator-position":"none"}},_vm._l((_vm.adList),function(item,index){return _c('el-carousel-item',{key:index},[_c('el-tag',{attrs:{"type":"warning"}},[_vm._v("Ad")]),_c('a',{attrs:{"href":item.url,"target":"_blank"}},[_vm._v(_vm._s(item.title))])],1)}),1):_vm._e()],1)}
var staticRenderFns = []


// EXTERNAL MODULE: ./src/api/ad.js
var ad = __webpack_require__(34669);
;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@10.0.0_@babel+core@7.23.3_webpack@5.100.1/node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabAd/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//


/* ESM default export */ var VabAdvue_type_script_lang_js_ = ({
  name: 'VabAd',
  data() {
    return {
      nodeEnv: "production",
      adList: []
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const {
        data
      } = await (0,ad.getList)();
      this.adList = data;
    }
  }
});
;// CONCATENATED MODULE: ./src/layouts/components/VabAd/index.vue?vue&type=script&lang=js&
 /* ESM default export */ var components_VabAdvue_type_script_lang_js_ = (VabAdvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(96453);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(88072);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(71420);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(8900);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(9911);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(27264);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.4.10_webpack@5.100.1/node_modules/css-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/sass-loader@10.4.1_sass@1.32.13_webpack@5.100.1/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[2]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabAd/index.vue?vue&type=style&index=0&id=60afcd0e&lang=scss&scoped=true&
var VabAdvue_type_style_index_0_id_60afcd0e_lang_scss_scoped_true_ = __webpack_require__(82014);
;// CONCATENATED MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/cjs.js!./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.4.10_webpack@5.100.1/node_modules/css-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/sass-loader@10.4.1_sass@1.32.13_webpack@5.100.1/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[2]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabAd/index.vue?vue&type=style&index=0&id=60afcd0e&lang=scss&scoped=true&

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(VabAdvue_type_style_index_0_id_60afcd0e_lang_scss_scoped_true_["default"], options);




       /* ESM default export */ var components_VabAdvue_type_style_index_0_id_60afcd0e_lang_scss_scoped_true_ = (VabAdvue_type_style_index_0_id_60afcd0e_lang_scss_scoped_true_["default"] && VabAdvue_type_style_index_0_id_60afcd0e_lang_scss_scoped_true_["default"].locals ? VabAdvue_type_style_index_0_id_60afcd0e_lang_scss_scoped_true_["default"].locals : undefined);

;// CONCATENATED MODULE: ./src/layouts/components/VabAd/index.vue?vue&type=style&index=0&id=60afcd0e&lang=scss&scoped=true&

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(71294);
;// CONCATENATED MODULE: ./src/layouts/components/VabAd/index.vue



;


/* normalize component */

var component = (0,componentNormalizer["default"])(
  components_VabAdvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "60afcd0e",
  null
  
)

/* ESM default export */ var VabAd = (component.exports);

}),
46649: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ VabAppMain; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabAppMain/index.vue?vue&type=template&id=4b2d61d5&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.routerView)?_c('div',{staticClass:"app-main-container"},[_c('vab-github-corner'),_c('transition',{attrs:{"mode":"out-in","name":"fade-transform"}},[_c('keep-alive',{attrs:{"include":_vm.cachedRoutes,"max":_vm.keepAliveMaxNum}},[_c('router-view',{key:_vm.key,staticClass:"app-main-height"})],1)],1),_c('footer',{directives:[{name:"show",rawName:"v-show",value:(_vm.footerCopyright),expression:"footerCopyright"}],staticClass:"footer-copyright"},[_vm._v("\n    Copyright\n    "),_c('vab-icon',{attrs:{"icon":['fas', 'copyright']}}),_vm._v("\n    vue-admin-better 开源免费版 "+_vm._s(_vm.fullYear)+"\n  ")],1)],1):_vm._e()}
var staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.44.0/node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(45088);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.44.0/node_modules/core-js/modules/es.iterator.constructor.js
var es_iterator_constructor = __webpack_require__(46846);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.44.0/node_modules/core-js/modules/es.iterator.for-each.js
var es_iterator_for_each = __webpack_require__(47827);
// EXTERNAL MODULE: ./node_modules/.pnpm/vuex@3.6.2_vue@2.7.15/node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(8507);
// EXTERNAL MODULE: ./src/config/index.js
var config = __webpack_require__(84465);
;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@10.0.0_@babel+core@7.23.3_webpack@5.100.1/node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabAppMain/index.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* ESM default export */ var VabAppMainvue_type_script_lang_js_ = ({
  name: 'VabAppMain',
  data() {
    return {
      show: false,
      fullYear: new Date().getFullYear(),
      copyright: config.copyright,
      title: config.title,
      keepAliveMaxNum: config.keepAliveMaxNum,
      routerView: true,
      footerCopyright: config.footerCopyright
    };
  },
  computed: {
    ...(0,vuex_esm.mapGetters)({
      visitedRoutes: 'tabsBar/visitedRoutes',
      device: 'settings/device'
    }),
    cachedRoutes() {
      const cachedRoutesArr = [];
      this.visitedRoutes.forEach(item => {
        if (!item.meta.noKeepAlive) {
          cachedRoutesArr.push(item.name);
        }
      });
      return cachedRoutesArr;
    },
    key() {
      return this.$route.path;
    }
  },
  watch: {
    $route: {
      handler(route) {
        if ('mobile' === this.device) this.foldSideBar();
      },
      immediate: true
    }
  },
  created() {
    const handleReloadRouterView = () => {
      this.routerView = false;
      this.$nextTick(() => {
        this.routerView = true;
      });
    };

    //重载所有路由
    this.$baseEventBus.$on('reload-router-view', handleReloadRouterView);
    this.$once('hook:beforeDestroy', () => {
      this.$baseEventBus.$off('reload-router-view', handleReloadRouterView);
    });
  },
  mounted() {},
  methods: {
    ...(0,vuex_esm.mapActions)({
      foldSideBar: 'settings/foldSideBar'
    })
  }
});
;// CONCATENATED MODULE: ./src/layouts/components/VabAppMain/index.vue?vue&type=script&lang=js&
 /* ESM default export */ var components_VabAppMainvue_type_script_lang_js_ = (VabAppMainvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(96453);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(88072);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(71420);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(8900);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(9911);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(27264);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.4.10_webpack@5.100.1/node_modules/css-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/sass-loader@10.4.1_sass@1.32.13_webpack@5.100.1/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[2]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabAppMain/index.vue?vue&type=style&index=0&id=4b2d61d5&lang=scss&scoped=true&
var VabAppMainvue_type_style_index_0_id_4b2d61d5_lang_scss_scoped_true_ = __webpack_require__(65742);
;// CONCATENATED MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/cjs.js!./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.4.10_webpack@5.100.1/node_modules/css-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/sass-loader@10.4.1_sass@1.32.13_webpack@5.100.1/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[2]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabAppMain/index.vue?vue&type=style&index=0&id=4b2d61d5&lang=scss&scoped=true&

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(VabAppMainvue_type_style_index_0_id_4b2d61d5_lang_scss_scoped_true_["default"], options);




       /* ESM default export */ var components_VabAppMainvue_type_style_index_0_id_4b2d61d5_lang_scss_scoped_true_ = (VabAppMainvue_type_style_index_0_id_4b2d61d5_lang_scss_scoped_true_["default"] && VabAppMainvue_type_style_index_0_id_4b2d61d5_lang_scss_scoped_true_["default"].locals ? VabAppMainvue_type_style_index_0_id_4b2d61d5_lang_scss_scoped_true_["default"].locals : undefined);

;// CONCATENATED MODULE: ./src/layouts/components/VabAppMain/index.vue?vue&type=style&index=0&id=4b2d61d5&lang=scss&scoped=true&

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(71294);
;// CONCATENATED MODULE: ./src/layouts/components/VabAppMain/index.vue



;


/* normalize component */

var component = (0,componentNormalizer["default"])(
  components_VabAppMainvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "4b2d61d5",
  null
  
)

/* ESM default export */ var VabAppMain = (component.exports);

}),
23997: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ VabAvatar; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabAvatar/index.vue?vue&type=template&id=2463f60e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-dropdown',{attrs:{"trigger":"click"},on:{"command":_vm.handleCommand}},[_c('div',{staticClass:"avatar-container"},[_c('div',{staticClass:"avatar-wrapper"},[_c('img',{staticClass:"user-avatar",attrs:{"src":_vm.avatar,"alt":"用户头像"}})]),_c('div',{staticClass:"user-info"},[_c('div',{staticClass:"username"},[_vm._v(_vm._s(_vm.username))]),_c('div',{staticClass:"user-role"},[_vm._v("管理员")])]),_c('i',{staticClass:"el-icon-arrow-down dropdown-icon"})]),_c('el-dropdown-menu',{staticClass:"custom-dropdown",attrs:{"slot":"dropdown"},slot:"dropdown"},[_c('div',{staticClass:"dropdown-header"},[_c('img',{staticClass:"header-avatar",attrs:{"src":_vm.avatar,"alt":"用户头像"}}),_c('div',{staticClass:"header-info"},[_c('div',{staticClass:"header-username"},[_vm._v(_vm._s(_vm.username))]),_c('div',{staticClass:"header-email"},[_vm._v("admin@example.com")])])]),_c('el-dropdown-item',{staticClass:"dropdown-item",attrs:{"command":"personalCenter"}},[_c('i',{staticClass:"el-icon-user-solid"}),_c('span',[_vm._v("个人中心")])]),_c('el-dropdown-item',{staticClass:"dropdown-item",attrs:{"command":"settings"}},[_c('i',{staticClass:"el-icon-setting"}),_c('span',[_vm._v("系统设置")])]),_c('el-divider'),_c('el-dropdown-item',{staticClass:"dropdown-item",attrs:{"command":"github"}},[_c('i',{staticClass:"el-icon-link"}),_c('span',[_vm._v("GitHub 地址")])]),_c('el-dropdown-item',{staticClass:"dropdown-item",attrs:{"command":"gitee"}},[_c('i',{staticClass:"el-icon-link"}),_c('span',[_vm._v("码云地址")])]),_c('el-dropdown-item',{staticClass:"dropdown-item",attrs:{"command":"pro"}},[_c('i',{staticClass:"el-icon-link"}),_c('span',[_vm._v("Admin Pro 地址")])]),_c('el-dropdown-item',{staticClass:"dropdown-item",attrs:{"command":"plus"}},[_c('i',{staticClass:"el-icon-link"}),_c('span',[_vm._v("Admin Plus 地址")])]),_c('el-dropdown-item',{staticClass:"dropdown-item",attrs:{"command":"shop"}},[_c('i',{staticClass:"el-icon-link"}),_c('span',[_vm._v("Shop Vite 地址")])]),_c('el-dropdown-item',{staticClass:"dropdown-item",attrs:{"command":"job"}},[_c('i',{staticClass:"el-icon-link"}),_c('span',[_vm._v("好工作就业参考网")])]),_c('el-divider'),_c('el-dropdown-item',{staticClass:"dropdown-item logout-item",attrs:{"command":"logout"}},[_c('i',{staticClass:"el-icon-switch-button"}),_c('span',[_vm._v("退出登录")])])],1)],1)}
var staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.44.0/node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(45088);
// EXTERNAL MODULE: ./node_modules/.pnpm/vuex@3.6.2_vue@2.7.15/node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(8507);
// EXTERNAL MODULE: ./src/config/index.js
var config = __webpack_require__(84465);
;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@10.0.0_@babel+core@7.23.3_webpack@5.100.1/node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabAvatar/index.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* ESM default export */ var VabAvatarvue_type_script_lang_js_ = ({
  name: 'VabAvatar',
  computed: {
    ...(0,vuex_esm.mapGetters)({
      avatar: 'user/avatar',
      username: 'user/username'
    })
  },
  methods: {
    handleCommand(command) {
      switch (command) {
        case 'logout':
          this.logout();
          break;
        case 'personalCenter':
          this.personalCenter();
          break;
        case 'settings':
          this.settings();
          break;
        case 'github':
          window.open('https://github.com/zxwk1998/vue-admin-better');
          break;
        case 'gitee':
          window.open('https://gitee.com/chu1204505056/vue-admin-better');
          break;
        case 'pro':
          window.open('https://vuejs-core.cn/admin-pro/');
          break;
        case 'plus':
          window.open('https://vuejs-core.cn/admin-plus/');
          break;
        case 'shop':
          window.open('https://vuejs-core.cn/shop-vite/');
          break;
        case 'job':
          window.open('https://job.vuejs-core.cn/');
          break;
      }
    },
    personalCenter() {
      this.$router.push('/personalCenter/personalCenter');
    },
    settings() {
      this.$message.info('系统设置功能开发中...');
    },
    logout() {
      this.$baseConfirm('您确定要退出' + this.$baseTitle + '吗?', null, async () => {
        await this.$store.dispatch('user/logout');
        if (config.recordRoute) {
          const fullPath = this.$route.fullPath;
          this.$router.push(`/login?redirect=${fullPath}`);
        } else {
          this.$router.push('/login');
        }
      });
    }
  }
});
;// CONCATENATED MODULE: ./src/layouts/components/VabAvatar/index.vue?vue&type=script&lang=js&
 /* ESM default export */ var components_VabAvatarvue_type_script_lang_js_ = (VabAvatarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(96453);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(88072);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(71420);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(8900);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(9911);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(27264);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.4.10_webpack@5.100.1/node_modules/css-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/sass-loader@10.4.1_sass@1.32.13_webpack@5.100.1/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[2]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabAvatar/index.vue?vue&type=style&index=0&id=2463f60e&lang=scss&scoped=true&
var VabAvatarvue_type_style_index_0_id_2463f60e_lang_scss_scoped_true_ = __webpack_require__(92505);
;// CONCATENATED MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/cjs.js!./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.4.10_webpack@5.100.1/node_modules/css-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/sass-loader@10.4.1_sass@1.32.13_webpack@5.100.1/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[2]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabAvatar/index.vue?vue&type=style&index=0&id=2463f60e&lang=scss&scoped=true&

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(VabAvatarvue_type_style_index_0_id_2463f60e_lang_scss_scoped_true_["default"], options);




       /* ESM default export */ var components_VabAvatarvue_type_style_index_0_id_2463f60e_lang_scss_scoped_true_ = (VabAvatarvue_type_style_index_0_id_2463f60e_lang_scss_scoped_true_["default"] && VabAvatarvue_type_style_index_0_id_2463f60e_lang_scss_scoped_true_["default"].locals ? VabAvatarvue_type_style_index_0_id_2463f60e_lang_scss_scoped_true_["default"].locals : undefined);

;// CONCATENATED MODULE: ./src/layouts/components/VabAvatar/index.vue?vue&type=style&index=0&id=2463f60e&lang=scss&scoped=true&

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(71294);
;// CONCATENATED MODULE: ./src/layouts/components/VabAvatar/index.vue



;


/* normalize component */

var component = (0,componentNormalizer["default"])(
  components_VabAvatarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "2463f60e",
  null
  
)

/* ESM default export */ var VabAvatar = (component.exports);

}),
86463: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ VabBreadcrumb; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabBreadcrumb/index.vue?vue&type=template&id=9771253e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-breadcrumb',{staticClass:"breadcrumb-container",attrs:{"separator":">"}},_vm._l((_vm.list),function(item){return _c('el-breadcrumb-item',{key:item.path},[_vm._v("\n    "+_vm._s(item.meta.title)+"\n  ")])}),1)}
var staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.44.0/node_modules/core-js/modules/es.iterator.constructor.js
var es_iterator_constructor = __webpack_require__(46846);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.44.0/node_modules/core-js/modules/es.iterator.filter.js
var es_iterator_filter = __webpack_require__(25885);
;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@10.0.0_@babel+core@7.23.3_webpack@5.100.1/node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabBreadcrumb/index.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//

/* ESM default export */ var VabBreadcrumbvue_type_script_lang_js_ = ({
  name: 'VabBreadcrumb',
  data() {
    return {
      list: this.getBreadcrumb()
    };
  },
  watch: {
    $route() {
      this.list = this.getBreadcrumb();
    }
  },
  methods: {
    getBreadcrumb() {
      return this.$route.matched.filter(item => item.name && item.meta.title);
    }
  }
});
;// CONCATENATED MODULE: ./src/layouts/components/VabBreadcrumb/index.vue?vue&type=script&lang=js&
 /* ESM default export */ var components_VabBreadcrumbvue_type_script_lang_js_ = (VabBreadcrumbvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(96453);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(88072);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(71420);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(8900);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(9911);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(27264);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.4.10_webpack@5.100.1/node_modules/css-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/sass-loader@10.4.1_sass@1.32.13_webpack@5.100.1/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[2]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabBreadcrumb/index.vue?vue&type=style&index=0&id=9771253e&lang=scss&scoped=true&
var VabBreadcrumbvue_type_style_index_0_id_9771253e_lang_scss_scoped_true_ = __webpack_require__(91772);
;// CONCATENATED MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/cjs.js!./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.4.10_webpack@5.100.1/node_modules/css-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/sass-loader@10.4.1_sass@1.32.13_webpack@5.100.1/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[2]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabBreadcrumb/index.vue?vue&type=style&index=0&id=9771253e&lang=scss&scoped=true&

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(VabBreadcrumbvue_type_style_index_0_id_9771253e_lang_scss_scoped_true_["default"], options);




       /* ESM default export */ var components_VabBreadcrumbvue_type_style_index_0_id_9771253e_lang_scss_scoped_true_ = (VabBreadcrumbvue_type_style_index_0_id_9771253e_lang_scss_scoped_true_["default"] && VabBreadcrumbvue_type_style_index_0_id_9771253e_lang_scss_scoped_true_["default"].locals ? VabBreadcrumbvue_type_style_index_0_id_9771253e_lang_scss_scoped_true_["default"].locals : undefined);

;// CONCATENATED MODULE: ./src/layouts/components/VabBreadcrumb/index.vue?vue&type=style&index=0&id=9771253e&lang=scss&scoped=true&

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(71294);
;// CONCATENATED MODULE: ./src/layouts/components/VabBreadcrumb/index.vue



;


/* normalize component */

var component = (0,componentNormalizer["default"])(
  components_VabBreadcrumbvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "9771253e",
  null
  
)

/* ESM default export */ var VabBreadcrumb = (component.exports);

}),
86702: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ VabColorfullIcon; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabColorfullIcon/index.vue?vue&type=template&id=df3a8364&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.isExternal)?_c('img',_vm._g({staticClass:"svg-external-icon svg-icon",attrs:{"src":_vm.styleExternalIcon}},_vm.$listeners)):_c('svg',_vm._g({class:_vm.svgClass,attrs:{"aria-hidden":"true"}},_vm.$listeners),[_c('use',{attrs:{"xlink:href":_vm.iconName}})])}
var staticRenderFns = []


// EXTERNAL MODULE: ./src/utils/validate.js
var validate = __webpack_require__(36010);
;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@10.0.0_@babel+core@7.23.3_webpack@5.100.1/node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabColorfullIcon/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//


/* ESM default export */ var VabColorfullIconvue_type_script_lang_js_ = ({
  name: 'VabColorfulIcon',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    isExternal() {
      return (0,validate.isExternal)(this.iconClass);
    },
    iconName() {
      return `#colorful-icon-${this.iconClass}`;
    },
    svgClass() {
      if (this.className) {
        return 'svg-icon ' + this.className;
      } else {
        return 'svg-icon';
      }
    },
    styleExternalIcon() {
      return this.iconClass;
    }
  }
});
;// CONCATENATED MODULE: ./src/layouts/components/VabColorfullIcon/index.vue?vue&type=script&lang=js&
 /* ESM default export */ var components_VabColorfullIconvue_type_script_lang_js_ = (VabColorfullIconvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(96453);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(88072);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(71420);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(8900);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(9911);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(27264);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.4.10_webpack@5.100.1/node_modules/css-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/sass-loader@10.4.1_sass@1.32.13_webpack@5.100.1/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[2]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabColorfullIcon/index.vue?vue&type=style&index=0&id=df3a8364&lang=scss&scoped=true&
var VabColorfullIconvue_type_style_index_0_id_df3a8364_lang_scss_scoped_true_ = __webpack_require__(80416);
;// CONCATENATED MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/cjs.js!./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.4.10_webpack@5.100.1/node_modules/css-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/sass-loader@10.4.1_sass@1.32.13_webpack@5.100.1/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[2]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabColorfullIcon/index.vue?vue&type=style&index=0&id=df3a8364&lang=scss&scoped=true&

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(VabColorfullIconvue_type_style_index_0_id_df3a8364_lang_scss_scoped_true_["default"], options);




       /* ESM default export */ var components_VabColorfullIconvue_type_style_index_0_id_df3a8364_lang_scss_scoped_true_ = (VabColorfullIconvue_type_style_index_0_id_df3a8364_lang_scss_scoped_true_["default"] && VabColorfullIconvue_type_style_index_0_id_df3a8364_lang_scss_scoped_true_["default"].locals ? VabColorfullIconvue_type_style_index_0_id_df3a8364_lang_scss_scoped_true_["default"].locals : undefined);

;// CONCATENATED MODULE: ./src/layouts/components/VabColorfullIcon/index.vue?vue&type=style&index=0&id=df3a8364&lang=scss&scoped=true&

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(71294);
;// CONCATENATED MODULE: ./src/layouts/components/VabColorfullIcon/index.vue



;


/* normalize component */

var component = (0,componentNormalizer["default"])(
  components_VabColorfullIconvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "df3a8364",
  null
  
)

/* ESM default export */ var VabColorfullIcon = (component.exports);

}),
30403: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ VabErrorLog; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabErrorLog/index.vue?vue&type=template&id=09ae1ffc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.errorLogs.length > 0)?_c('div',[_c('el-badge',{attrs:{"value":_vm.errorLogs.length},nativeOn:{"click":function($event){_vm.dialogTableVisible = true}}},[_c('el-button',{attrs:{"type":"danger"}},[_c('vab-icon',{attrs:{"icon":['fas', 'bug']}})],1)],1),_c('el-dialog',{attrs:{"visible":_vm.dialogTableVisible,"append-to-body":"","title":"vue-admin-better异常捕获(温馨提示：错误必须解决)","width":"70%"},on:{"update:visible":function($event){_vm.dialogTableVisible=$event}}},[_c('el-table',{attrs:{"data":_vm.errorLogs}},[_c('el-table-column',{attrs:{"label":"报错路由"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return [_c('a',{attrs:{"href":row.url,"target":"_blank"}},[_c('el-tag',{attrs:{"type":"success"}},[_vm._v(_vm._s(row.url))])],1)]}}],null,false,2176999649)}),_c('el-table-column',{attrs:{"label":"错误信息"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return [_c('el-tag',{attrs:{"type":"danger"}},[_vm._v(_vm._s(_vm.decodeUnicode(row.err.message)))])]}}],null,false,4162759619)}),_c('el-table-column',{attrs:{"label":"错误详情","width":"120"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"placement":"top-start","trigger":"hover"}},[_c('div',{staticStyle:{"color":"red"}},[_vm._v("\n              "+_vm._s(scope.row.err.stack)+"\n            ")]),_c('el-button',{attrs:{"slot":"reference"},slot:"reference"},[_vm._v("查看")])],1)]}}],null,false,3974643816)}),_c('el-table-column',{attrs:{"label":"操作","width":"380"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return _vm._l((_vm.searchList),function(item,index){return _c('a',{key:index,attrs:{"href":item.url + _vm.decodeUnicode(row.err.message),"target":"_blank"}},[_c('el-button',{staticStyle:{"margin-left":"5px"},attrs:{"type":"primary"}},[_c('vab-icon',{attrs:{"icon":['fas', 'search']}}),_vm._v("\n              "+_vm._s(item.title)+"\n            ")],1)],1)})}}],null,false,1671241222)})],1),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogTableVisible = false}}},[_vm._v("取 消")]),_c('el-button',{attrs:{"icon":"el-icon-delete","type":"danger"},on:{"click":_vm.clearAll}},[_vm._v("\n        暂不显示\n      ")])],1)],1)],1):_vm._e()}
var staticRenderFns = []


// EXTERNAL MODULE: ./src/config/index.js
var config = __webpack_require__(84465);
// EXTERNAL MODULE: ./node_modules/.pnpm/vuex@3.6.2_vue@2.7.15/node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(8507);
;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@10.0.0_@babel+core@7.23.3_webpack@5.100.1/node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabErrorLog/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* ESM default export */ var VabErrorLogvue_type_script_lang_js_ = ({
  name: 'VabErrorLog',
  data() {
    return {
      dialogTableVisible: false,
      title: config.title,
      abbreviation: config.abbreviation,
      searchList: [{
        title: '百度搜索',
        url: 'https://www.baidu.com/baidu?wd='
      }, {
        title: '谷歌搜索',
        url: 'https://www.google.com/search?q='
      }, {
        title: 'Magi搜索',
        url: 'https://magi.com/search?q='
      }]
    };
  },
  computed: {
    ...(0,vuex_esm.mapGetters)({
      errorLogs: 'errorLog/errorLogs'
    })
  },
  methods: {
    clearAll() {
      this.dialogTableVisible = false;
      this.$store.dispatch('errorLog/clearErrorLog');
    },
    decodeUnicode(str) {
      str = str.replace(/\\/g, '%');
      str = unescape(str);
      str = str.replace(/%/g, '\\');
      str = str.replace(/\\/g, '');
      return str;
    }
  }
});
;// CONCATENATED MODULE: ./src/layouts/components/VabErrorLog/index.vue?vue&type=script&lang=js&
 /* ESM default export */ var components_VabErrorLogvue_type_script_lang_js_ = (VabErrorLogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(96453);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(88072);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(71420);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(8900);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(9911);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(27264);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.4.10_webpack@5.100.1/node_modules/css-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/sass-loader@10.4.1_sass@1.32.13_webpack@5.100.1/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[2]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabErrorLog/index.vue?vue&type=style&index=0&id=09ae1ffc&lang=scss&scoped=true&
var VabErrorLogvue_type_style_index_0_id_09ae1ffc_lang_scss_scoped_true_ = __webpack_require__(99928);
;// CONCATENATED MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/cjs.js!./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.4.10_webpack@5.100.1/node_modules/css-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/sass-loader@10.4.1_sass@1.32.13_webpack@5.100.1/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[2]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabErrorLog/index.vue?vue&type=style&index=0&id=09ae1ffc&lang=scss&scoped=true&

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(VabErrorLogvue_type_style_index_0_id_09ae1ffc_lang_scss_scoped_true_["default"], options);




       /* ESM default export */ var components_VabErrorLogvue_type_style_index_0_id_09ae1ffc_lang_scss_scoped_true_ = (VabErrorLogvue_type_style_index_0_id_09ae1ffc_lang_scss_scoped_true_["default"] && VabErrorLogvue_type_style_index_0_id_09ae1ffc_lang_scss_scoped_true_["default"].locals ? VabErrorLogvue_type_style_index_0_id_09ae1ffc_lang_scss_scoped_true_["default"].locals : undefined);

;// CONCATENATED MODULE: ./src/layouts/components/VabErrorLog/index.vue?vue&type=style&index=0&id=09ae1ffc&lang=scss&scoped=true&

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(71294);
;// CONCATENATED MODULE: ./src/layouts/components/VabErrorLog/index.vue



;


/* normalize component */

var component = (0,componentNormalizer["default"])(
  components_VabErrorLogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "09ae1ffc",
  null
  
)

/* ESM default export */ var VabErrorLog = (component.exports);

}),
9638: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ VabFullScreen; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabFullScreen/index.vue?vue&type=template&id=0a14dec8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{attrs:{"title":_vm.isFullscreen ? '退出全屏' : '进入全屏'}},[_c('vab-icon',{attrs:{"icon":['fas', _vm.isFullscreen ? 'compress' : 'expand']},on:{"click":_vm.click}})],1)}
var staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/.pnpm/screenfull@5.2.0/node_modules/screenfull/dist/screenfull.js
var screenfull = __webpack_require__(45869);
var screenfull_default = /*#__PURE__*/__webpack_require__.n(screenfull);
;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@10.0.0_@babel+core@7.23.3_webpack@5.100.1/node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabFullScreen/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//


/* ESM default export */ var VabFullScreenvue_type_script_lang_js_ = ({
  name: 'VabFullScreen',
  data() {
    return {
      isFullscreen: false
    };
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    this.destroy();
  },
  methods: {
    click() {
      if (!(screenfull_default()).isEnabled) {
        this.$baseMessage('开启全屏失败', 'error');
        return false;
      }
      screenfull_default().toggle();
      this.$emit('refresh');
    },
    change() {
      this.isFullscreen = (screenfull_default()).isFullscreen;
    },
    init() {
      if ((screenfull_default()).isEnabled) {
        screenfull_default().on('change', this.change);
      }
    },
    destroy() {
      if ((screenfull_default()).isEnabled) {
        screenfull_default().off('change', this.change);
      }
    }
  }
});
;// CONCATENATED MODULE: ./src/layouts/components/VabFullScreen/index.vue?vue&type=script&lang=js&
 /* ESM default export */ var components_VabFullScreenvue_type_script_lang_js_ = (VabFullScreenvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(71294);
;// CONCATENATED MODULE: ./src/layouts/components/VabFullScreen/index.vue





/* normalize component */
;
var component = (0,componentNormalizer["default"])(
  components_VabFullScreenvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* ESM default export */ var VabFullScreen = (component.exports);

}),
586: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ VabGithubCorner; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabGithubCorner/index.vue?vue&type=template&id=3d986683&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"github-corner",attrs:{"aria-label":"View source on Github","href":"https://github.com/zxwk1998/vue-admin-better","target":"_blank"}},[_c('svg',{staticClass:"github-color",attrs:{"aria-hidden":"true","height":"80","viewBox":"0 0 250 250","width":"80"}},[_c('path',{attrs:{"d":"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),_c('path',{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{"d":"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2","fill":"currentColor"}}),_c('path',{staticClass:"octo-body",attrs:{"d":"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z","fill":"currentColor"}})])])}
var staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@10.0.0_@babel+core@7.23.3_webpack@5.100.1/node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabGithubCorner/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* ESM default export */ var VabGithubCornervue_type_script_lang_js_ = ({
  name: 'VabGithubCorner'
});
;// CONCATENATED MODULE: ./src/layouts/components/VabGithubCorner/index.vue?vue&type=script&lang=js&
 /* ESM default export */ var components_VabGithubCornervue_type_script_lang_js_ = (VabGithubCornervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(96453);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(88072);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(71420);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(8900);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(9911);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(27264);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.4.10_webpack@5.100.1/node_modules/css-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/sass-loader@10.4.1_sass@1.32.13_webpack@5.100.1/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[2]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabGithubCorner/index.vue?vue&type=style&index=0&id=3d986683&lang=scss&scoped=true&
var VabGithubCornervue_type_style_index_0_id_3d986683_lang_scss_scoped_true_ = __webpack_require__(17863);
;// CONCATENATED MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/cjs.js!./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.4.10_webpack@5.100.1/node_modules/css-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/sass-loader@10.4.1_sass@1.32.13_webpack@5.100.1/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[2]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabGithubCorner/index.vue?vue&type=style&index=0&id=3d986683&lang=scss&scoped=true&

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(VabGithubCornervue_type_style_index_0_id_3d986683_lang_scss_scoped_true_["default"], options);




       /* ESM default export */ var components_VabGithubCornervue_type_style_index_0_id_3d986683_lang_scss_scoped_true_ = (VabGithubCornervue_type_style_index_0_id_3d986683_lang_scss_scoped_true_["default"] && VabGithubCornervue_type_style_index_0_id_3d986683_lang_scss_scoped_true_["default"].locals ? VabGithubCornervue_type_style_index_0_id_3d986683_lang_scss_scoped_true_["default"].locals : undefined);

;// CONCATENATED MODULE: ./src/layouts/components/VabGithubCorner/index.vue?vue&type=style&index=0&id=3d986683&lang=scss&scoped=true&

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(71294);
;// CONCATENATED MODULE: ./src/layouts/components/VabGithubCorner/index.vue



;


/* normalize component */

var component = (0,componentNormalizer["default"])(
  components_VabGithubCornervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "3d986683",
  null
  
)

/* ESM default export */ var VabGithubCorner = (component.exports);

}),
11005: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ VabLogo; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabLogo/index.vue?vue&type=template&id=ff373e7c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:'logo-container-' + _vm.layout},[_c('router-link',{attrs:{"to":"/"}},[(_vm.logo)?_c('svg',{staticClass:"logo",attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}},[_c('path',{attrs:{"fill":"none","d":"M0 0h24v24H0z"}}),_c('path',{attrs:{"d":"M1 3h4l7 12 7-12h4L12 22 1 3zm8.667 0L12 7l2.333-4h4.035L12 14 5.632 3h4.035z"}})]):_vm._e(),_c('span',{staticClass:"title",class:{ 'hidden-xs-only': _vm.layout === 'horizontal' },attrs:{"title":_vm.title}},[_vm._v("\n      "+_vm._s(_vm.title)+"\n    ")])])],1)}
var staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/.pnpm/vuex@3.6.2_vue@2.7.15/node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(8507);
;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@10.0.0_@babel+core@7.23.3_webpack@5.100.1/node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabLogo/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* ESM default export */ var VabLogovue_type_script_lang_js_ = ({
  name: 'VabLogo',
  data() {
    return {
      title: this.$baseTitle
    };
  },
  computed: {
    ...(0,vuex_esm.mapGetters)({
      logo: 'settings/logo',
      layout: 'settings/layout'
    })
  }
});
;// CONCATENATED MODULE: ./src/layouts/components/VabLogo/index.vue?vue&type=script&lang=js&
 /* ESM default export */ var components_VabLogovue_type_script_lang_js_ = (VabLogovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(96453);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(88072);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(71420);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(8900);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(9911);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(27264);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.4.10_webpack@5.100.1/node_modules/css-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/sass-loader@10.4.1_sass@1.32.13_webpack@5.100.1/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[2]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabLogo/index.vue?vue&type=style&index=0&id=ff373e7c&lang=scss&scoped=true&
var VabLogovue_type_style_index_0_id_ff373e7c_lang_scss_scoped_true_ = __webpack_require__(81331);
;// CONCATENATED MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/cjs.js!./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.4.10_webpack@5.100.1/node_modules/css-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/sass-loader@10.4.1_sass@1.32.13_webpack@5.100.1/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[2]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabLogo/index.vue?vue&type=style&index=0&id=ff373e7c&lang=scss&scoped=true&

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(VabLogovue_type_style_index_0_id_ff373e7c_lang_scss_scoped_true_["default"], options);




       /* ESM default export */ var components_VabLogovue_type_style_index_0_id_ff373e7c_lang_scss_scoped_true_ = (VabLogovue_type_style_index_0_id_ff373e7c_lang_scss_scoped_true_["default"] && VabLogovue_type_style_index_0_id_ff373e7c_lang_scss_scoped_true_["default"].locals ? VabLogovue_type_style_index_0_id_ff373e7c_lang_scss_scoped_true_["default"].locals : undefined);

;// CONCATENATED MODULE: ./src/layouts/components/VabLogo/index.vue?vue&type=style&index=0&id=ff373e7c&lang=scss&scoped=true&

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(71294);
;// CONCATENATED MODULE: ./src/layouts/components/VabLogo/index.vue



;


/* normalize component */

var component = (0,componentNormalizer["default"])(
  components_VabLogovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "ff373e7c",
  null
  
)

/* ESM default export */ var VabLogo = (component.exports);

}),
13460: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ VabNav; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabNav/index.vue?vue&type=template&id=190b7566&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"nav-container"},[_c('el-row',{attrs:{"gutter":15}},[_c('el-col',{attrs:{"lg":12,"md":12,"sm":12,"xl":12,"xs":4}},[_c('div',{staticClass:"left-panel"},[_c('i',{staticClass:"fold-unfold",class:_vm.collapse ? 'el-icon-s-unfold' : 'el-icon-s-fold',attrs:{"title":_vm.collapse ? '展开' : '收起'},on:{"click":_vm.handleCollapse}}),_c('vab-breadcrumb',{staticClass:"hidden-xs-only"})],1)]),_c('el-col',{attrs:{"lg":12,"md":12,"sm":12,"xl":12,"xs":20}},[_c('div',{staticClass:"right-panel"},[_c('vab-error-log'),_c('vab-full-screen',{on:{"refresh":_vm.refreshRoute}}),_c('vab-theme',{staticClass:"hidden-xs-only"}),_c('vab-icon',{attrs:{"icon":['fas', 'sync-alt'],"pulse":_vm.pulse,"title":"重载所有路由"},on:{"click":_vm.refreshRoute}}),_c('vab-avatar')],1)])],1)],1)}
var staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/.pnpm/vuex@3.6.2_vue@2.7.15/node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(8507);
;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@10.0.0_@babel+core@7.23.3_webpack@5.100.1/node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabNav/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* ESM default export */ var VabNavvue_type_script_lang_js_ = ({
  name: 'VabNav',
  data() {
    return {
      pulse: false,
      timeOutID: null
    };
  },
  computed: {
    ...(0,vuex_esm.mapGetters)({
      collapse: 'settings/collapse',
      visitedRoutes: 'tabsBar/visitedRoutes',
      device: 'settings/device',
      routes: 'routes/routes'
    })
  },
  methods: {
    ...(0,vuex_esm.mapActions)({
      changeCollapse: 'settings/changeCollapse'
    }),
    handleCollapse() {
      this.changeCollapse();
    },
    async refreshRoute() {
      this.$baseEventBus.$emit('reload-router-view');
      this.pulse = true;
      this.timeOutID = setTimeout(() => {
        this.pulse = false;
      }, 1000);
    }
  },
  beforeDestroy() {
    clearTimeout(this.timeOutID);
  }
});
;// CONCATENATED MODULE: ./src/layouts/components/VabNav/index.vue?vue&type=script&lang=js&
 /* ESM default export */ var components_VabNavvue_type_script_lang_js_ = (VabNavvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(96453);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(88072);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(71420);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(8900);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(9911);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(27264);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.4.10_webpack@5.100.1/node_modules/css-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/sass-loader@10.4.1_sass@1.32.13_webpack@5.100.1/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[2]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabNav/index.vue?vue&type=style&index=0&id=190b7566&lang=scss&scoped=true&
var VabNavvue_type_style_index_0_id_190b7566_lang_scss_scoped_true_ = __webpack_require__(92371);
;// CONCATENATED MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/cjs.js!./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.4.10_webpack@5.100.1/node_modules/css-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/sass-loader@10.4.1_sass@1.32.13_webpack@5.100.1/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[2]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabNav/index.vue?vue&type=style&index=0&id=190b7566&lang=scss&scoped=true&

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(VabNavvue_type_style_index_0_id_190b7566_lang_scss_scoped_true_["default"], options);




       /* ESM default export */ var components_VabNavvue_type_style_index_0_id_190b7566_lang_scss_scoped_true_ = (VabNavvue_type_style_index_0_id_190b7566_lang_scss_scoped_true_["default"] && VabNavvue_type_style_index_0_id_190b7566_lang_scss_scoped_true_["default"].locals ? VabNavvue_type_style_index_0_id_190b7566_lang_scss_scoped_true_["default"].locals : undefined);

;// CONCATENATED MODULE: ./src/layouts/components/VabNav/index.vue?vue&type=style&index=0&id=190b7566&lang=scss&scoped=true&

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(71294);
;// CONCATENATED MODULE: ./src/layouts/components/VabNav/index.vue



;


/* normalize component */

var component = (0,componentNormalizer["default"])(
  components_VabNavvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "190b7566",
  null
  
)

/* ESM default export */ var VabNav = (component.exports);

}),
44825: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ VabQueryFormBottomPanel; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabQueryForm/VabQueryFormBottomPanel.vue?vue&type=template&id=7caf7b88&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-col',{attrs:{"span":24}},[_c('div',{staticClass:"bottom-panel"},[_vm._t("default")],2)])}
var staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@10.0.0_@babel+core@7.23.3_webpack@5.100.1/node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabQueryForm/VabQueryFormBottomPanel.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* ESM default export */ var VabQueryFormBottomPanelvue_type_script_lang_js_ = ({
  name: 'VabQueryFormBottomPanel',
  props: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
});
;// CONCATENATED MODULE: ./src/layouts/components/VabQueryForm/VabQueryFormBottomPanel.vue?vue&type=script&lang=js&
 /* ESM default export */ var VabQueryForm_VabQueryFormBottomPanelvue_type_script_lang_js_ = (VabQueryFormBottomPanelvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(71294);
;// CONCATENATED MODULE: ./src/layouts/components/VabQueryForm/VabQueryFormBottomPanel.vue





/* normalize component */
;
var component = (0,componentNormalizer["default"])(
  VabQueryForm_VabQueryFormBottomPanelvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* ESM default export */ var VabQueryFormBottomPanel = (component.exports);

}),
27454: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ VabQueryFormLeftPanel; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabQueryForm/VabQueryFormLeftPanel.vue?vue&type=template&id=28070dd8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-col',{attrs:{"lg":_vm.span,"md":24,"sm":24,"xl":_vm.span,"xs":24}},[_c('div',{staticClass:"left-panel"},[_vm._t("default")],2)])}
var staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@10.0.0_@babel+core@7.23.3_webpack@5.100.1/node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabQueryForm/VabQueryFormLeftPanel.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* ESM default export */ var VabQueryFormLeftPanelvue_type_script_lang_js_ = ({
  name: 'VabQueryFormLeftPanel',
  props: {
    span: {
      type: Number,
      default: 14
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
});
;// CONCATENATED MODULE: ./src/layouts/components/VabQueryForm/VabQueryFormLeftPanel.vue?vue&type=script&lang=js&
 /* ESM default export */ var VabQueryForm_VabQueryFormLeftPanelvue_type_script_lang_js_ = (VabQueryFormLeftPanelvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(71294);
;// CONCATENATED MODULE: ./src/layouts/components/VabQueryForm/VabQueryFormLeftPanel.vue





/* normalize component */
;
var component = (0,componentNormalizer["default"])(
  VabQueryForm_VabQueryFormLeftPanelvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* ESM default export */ var VabQueryFormLeftPanel = (component.exports);

}),
54946: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ VabQueryFormRightPanel; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabQueryForm/VabQueryFormRightPanel.vue?vue&type=template&id=cc186ec6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-col',{attrs:{"lg":_vm.span,"md":24,"sm":24,"xl":_vm.span,"xs":24}},[_c('div',{staticClass:"right-panel"},[_vm._t("default")],2)])}
var staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@10.0.0_@babel+core@7.23.3_webpack@5.100.1/node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabQueryForm/VabQueryFormRightPanel.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* ESM default export */ var VabQueryFormRightPanelvue_type_script_lang_js_ = ({
  name: 'VabQueryFormRightPanel',
  props: {
    span: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
});
;// CONCATENATED MODULE: ./src/layouts/components/VabQueryForm/VabQueryFormRightPanel.vue?vue&type=script&lang=js&
 /* ESM default export */ var VabQueryForm_VabQueryFormRightPanelvue_type_script_lang_js_ = (VabQueryFormRightPanelvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(71294);
;// CONCATENATED MODULE: ./src/layouts/components/VabQueryForm/VabQueryFormRightPanel.vue





/* normalize component */
;
var component = (0,componentNormalizer["default"])(
  VabQueryForm_VabQueryFormRightPanelvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* ESM default export */ var VabQueryFormRightPanel = (component.exports);

}),
8306: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ VabQueryFormTopPanel; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabQueryForm/VabQueryFormTopPanel.vue?vue&type=template&id=5c96577a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-col',{attrs:{"span":24}},[_c('div',{staticClass:"top-panel"},[_vm._t("default")],2)])}
var staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@10.0.0_@babel+core@7.23.3_webpack@5.100.1/node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabQueryForm/VabQueryFormTopPanel.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* ESM default export */ var VabQueryFormTopPanelvue_type_script_lang_js_ = ({
  name: 'VabQueryFormTopPanel',
  props: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
});
;// CONCATENATED MODULE: ./src/layouts/components/VabQueryForm/VabQueryFormTopPanel.vue?vue&type=script&lang=js&
 /* ESM default export */ var VabQueryForm_VabQueryFormTopPanelvue_type_script_lang_js_ = (VabQueryFormTopPanelvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(71294);
;// CONCATENATED MODULE: ./src/layouts/components/VabQueryForm/VabQueryFormTopPanel.vue





/* normalize component */
;
var component = (0,componentNormalizer["default"])(
  VabQueryForm_VabQueryFormTopPanelvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* ESM default export */ var VabQueryFormTopPanel = (component.exports);

}),
69994: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ VabQueryForm; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabQueryForm/index.vue?vue&type=template&id=32220eca&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-row',{staticClass:"vab-query-form",attrs:{"gutter":0}},[_vm._t("default")],2)}
var staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@10.0.0_@babel+core@7.23.3_webpack@5.100.1/node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabQueryForm/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* ESM default export */ var VabQueryFormvue_type_script_lang_js_ = ({
  name: 'VabQueryForm',
  props: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
});
;// CONCATENATED MODULE: ./src/layouts/components/VabQueryForm/index.vue?vue&type=script&lang=js&
 /* ESM default export */ var components_VabQueryFormvue_type_script_lang_js_ = (VabQueryFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(96453);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(88072);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(71420);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(8900);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(9911);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(27264);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.4.10_webpack@5.100.1/node_modules/css-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/sass-loader@10.4.1_sass@1.32.13_webpack@5.100.1/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[2]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabQueryForm/index.vue?vue&type=style&index=0&id=32220eca&lang=scss&scoped=true&
var VabQueryFormvue_type_style_index_0_id_32220eca_lang_scss_scoped_true_ = __webpack_require__(33073);
;// CONCATENATED MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/cjs.js!./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.4.10_webpack@5.100.1/node_modules/css-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/sass-loader@10.4.1_sass@1.32.13_webpack@5.100.1/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[2]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabQueryForm/index.vue?vue&type=style&index=0&id=32220eca&lang=scss&scoped=true&

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(VabQueryFormvue_type_style_index_0_id_32220eca_lang_scss_scoped_true_["default"], options);




       /* ESM default export */ var components_VabQueryFormvue_type_style_index_0_id_32220eca_lang_scss_scoped_true_ = (VabQueryFormvue_type_style_index_0_id_32220eca_lang_scss_scoped_true_["default"] && VabQueryFormvue_type_style_index_0_id_32220eca_lang_scss_scoped_true_["default"].locals ? VabQueryFormvue_type_style_index_0_id_32220eca_lang_scss_scoped_true_["default"].locals : undefined);

;// CONCATENATED MODULE: ./src/layouts/components/VabQueryForm/index.vue?vue&type=style&index=0&id=32220eca&lang=scss&scoped=true&

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(71294);
;// CONCATENATED MODULE: ./src/layouts/components/VabQueryForm/index.vue



;


/* normalize component */

var component = (0,componentNormalizer["default"])(
  components_VabQueryFormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "32220eca",
  null
  
)

/* ESM default export */ var VabQueryForm = (component.exports);

}),
11084: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ VabMenuItem; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabSide/components/VabMenuItem.vue?vue&type=template&id=6ab177fa&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-menu-item',{attrs:{"index":_vm.handlePath(_vm.routeChildren.path)},on:{"click":_vm.handleLink}},[(_vm.routeChildren.meta.icon)?_c('vab-icon',{staticClass:"vab-fas-icon",attrs:{"icon":['fas', _vm.routeChildren.meta.icon]}}):_vm._e(),_c('span',[_vm._v(_vm._s(_vm.routeChildren.meta.title))]),(_vm.routeChildren.meta && _vm.routeChildren.meta.badge)?_c('el-tag',{attrs:{"effect":"dark","type":"danger"}},[_vm._v("\n    "+_vm._s(_vm.routeChildren.meta.badge)+"\n  ")]):_vm._e()],1)}
var staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.44.0/node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(45088);
// EXTERNAL MODULE: ./src/utils/validate.js
var validate = __webpack_require__(36010);
// EXTERNAL MODULE: ./node_modules/.pnpm/path-browserify@1.0.1/node_modules/path-browserify/index.js
var path_browserify = __webpack_require__(62005);
var path_browserify_default = /*#__PURE__*/__webpack_require__.n(path_browserify);
;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@10.0.0_@babel+core@7.23.3_webpack@5.100.1/node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabSide/components/VabMenuItem.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* ESM default export */ var VabMenuItemvue_type_script_lang_js_ = ({
  name: 'VabMenuItem',
  props: {
    routeChildren: {
      type: Object,
      default() {
        return null;
      }
    },
    item: {
      type: Object,
      default() {
        return null;
      }
    },
    fullPath: {
      type: String,
      default: ''
    }
  },
  methods: {
    handlePath(routePath) {
      if ((0,validate.isExternal)(routePath)) {
        return routePath;
      }
      if ((0,validate.isExternal)(this.fullPath)) {
        return this.fullPath;
      }
      return path_browserify_default().resolve(this.fullPath, routePath);
    },
    handleLink() {
      const routePath = this.routeChildren.path;
      const target = this.routeChildren.meta.target;
      if (target === '_blank') {
        if ((0,validate.isExternal)(routePath)) {
          window.open(routePath);
        } else if ((0,validate.isExternal)(this.fullPath)) {
          window.open(this.fullPath);
        } else if (this.$route.path !== path_browserify_default().resolve(this.fullPath, routePath)) {
          let routeData = this.$router.resolve(path_browserify_default().resolve(this.fullPath, routePath));
          window.open(routeData.href);
        }
      } else {
        if ((0,validate.isExternal)(routePath)) {
          window.location.href = routePath;
        } else if ((0,validate.isExternal)(this.fullPath)) {
          window.location.href = this.fullPath;
        } else if (this.$route.path !== path_browserify_default().resolve(this.fullPath, routePath)) {
          this.$router.push(path_browserify_default().resolve(this.fullPath, routePath));
        }
      }
    }
  }
});
;// CONCATENATED MODULE: ./src/layouts/components/VabSide/components/VabMenuItem.vue?vue&type=script&lang=js&
 /* ESM default export */ var components_VabMenuItemvue_type_script_lang_js_ = (VabMenuItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(71294);
;// CONCATENATED MODULE: ./src/layouts/components/VabSide/components/VabMenuItem.vue





/* normalize component */
;
var component = (0,componentNormalizer["default"])(
  components_VabMenuItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* ESM default export */ var VabMenuItem = (component.exports);

}),
60950: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ VabSideItem; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabSide/components/VabSideItem.vue?vue&type=template&id=6cc009ce&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (!_vm.item.hidden)?_c(_vm.menuComponent,{tag:"component",attrs:{"full-path":_vm.fullPath,"item":_vm.item,"route-children":_vm.routeChildren}},[(_vm.item.children && _vm.item.children.length)?_vm._l((_vm.item.children),function(route){return _c('vab-side-item',{key:route.path,attrs:{"full-path":_vm.handlePath(route.path),"item":route}})}):_vm._e()],2):_vm._e()}
var staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.44.0/node_modules/core-js/modules/es.iterator.constructor.js
var es_iterator_constructor = __webpack_require__(46846);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.44.0/node_modules/core-js/modules/es.iterator.filter.js
var es_iterator_filter = __webpack_require__(25885);
// EXTERNAL MODULE: ./src/utils/validate.js
var validate = __webpack_require__(36010);
// EXTERNAL MODULE: ./node_modules/.pnpm/path-browserify@1.0.1/node_modules/path-browserify/index.js
var path_browserify = __webpack_require__(62005);
var path_browserify_default = /*#__PURE__*/__webpack_require__.n(path_browserify);
;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@10.0.0_@babel+core@7.23.3_webpack@5.100.1/node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabSide/components/VabSideItem.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//



/* ESM default export */ var VabSideItemvue_type_script_lang_js_ = ({
  name: 'VabSideItem',
  props: {
    item: {
      type: Object,
      required: true
    },
    fullPath: {
      type: String,
      default: ''
    }
  },
  data() {
    this.onlyOneChild = null;
    return {};
  },
  computed: {
    menuComponent() {
      if (this.handleChildren(this.item.children, this.item) && (!this.routeChildren.children || this.routeChildren.notShowChildren) && !this.item.alwaysShow) {
        return 'VabMenuItem';
      } else {
        return 'VabSubmenu';
      }
    }
  },
  methods: {
    handleChildren(children = [], parent) {
      if (children === null) children = [];
      const showChildren = children.filter(item => {
        if (item.hidden) {
          return false;
        } else {
          this.routeChildren = item;
          return true;
        }
      });
      if (showChildren.length === 1) {
        return true;
      }
      if (showChildren.length === 0) {
        this.routeChildren = {
          ...parent,
          path: '',
          notShowChildren: true
        };
        return true;
      }
      return false;
    },
    handlePath(routePath) {
      if ((0,validate.isExternal)(routePath)) {
        return routePath;
      }
      if ((0,validate.isExternal)(this.fullPath)) {
        return this.fullPath;
      }
      return path_browserify_default().resolve(this.fullPath, routePath);
    }
  }
});
;// CONCATENATED MODULE: ./src/layouts/components/VabSide/components/VabSideItem.vue?vue&type=script&lang=js&
 /* ESM default export */ var components_VabSideItemvue_type_script_lang_js_ = (VabSideItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(96453);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(88072);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(71420);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(8900);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(9911);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(27264);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.4.10_webpack@5.100.1/node_modules/css-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/sass-loader@10.4.1_sass@1.32.13_webpack@5.100.1/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[2]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabSide/components/VabSideItem.vue?vue&type=style&index=0&id=6cc009ce&lang=scss&scoped=true&
var VabSideItemvue_type_style_index_0_id_6cc009ce_lang_scss_scoped_true_ = __webpack_require__(52693);
;// CONCATENATED MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/cjs.js!./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.4.10_webpack@5.100.1/node_modules/css-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/sass-loader@10.4.1_sass@1.32.13_webpack@5.100.1/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[2]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabSide/components/VabSideItem.vue?vue&type=style&index=0&id=6cc009ce&lang=scss&scoped=true&

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(VabSideItemvue_type_style_index_0_id_6cc009ce_lang_scss_scoped_true_["default"], options);




       /* ESM default export */ var components_VabSideItemvue_type_style_index_0_id_6cc009ce_lang_scss_scoped_true_ = (VabSideItemvue_type_style_index_0_id_6cc009ce_lang_scss_scoped_true_["default"] && VabSideItemvue_type_style_index_0_id_6cc009ce_lang_scss_scoped_true_["default"].locals ? VabSideItemvue_type_style_index_0_id_6cc009ce_lang_scss_scoped_true_["default"].locals : undefined);

;// CONCATENATED MODULE: ./src/layouts/components/VabSide/components/VabSideItem.vue?vue&type=style&index=0&id=6cc009ce&lang=scss&scoped=true&

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(71294);
;// CONCATENATED MODULE: ./src/layouts/components/VabSide/components/VabSideItem.vue



;


/* normalize component */

var component = (0,componentNormalizer["default"])(
  components_VabSideItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "6cc009ce",
  null
  
)

/* ESM default export */ var VabSideItem = (component.exports);

}),
42838: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ VabSubmenu; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabSide/components/VabSubmenu.vue?vue&type=template&id=cc2d25e4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-submenu',{ref:"subMenu",attrs:{"index":_vm.handlePath(_vm.item.path),"popper-append-to-body":false}},[_c('template',{slot:"title"},[(_vm.item.meta && _vm.item.meta.icon)?_c('vab-icon',{staticClass:"vab-fas-icon",attrs:{"icon":['fas', _vm.item.meta.icon]}}):_vm._e(),(_vm.item.meta && _vm.item.meta.remixIcon)?_c('vab-remix-icon',{staticClass:"vab-remix-icon",attrs:{"icon-class":_vm.item.meta.remixIcon}}):_vm._e(),_c('span',[_vm._v(_vm._s(_vm.item.meta.title))])],1),_vm._t("default")],2)}
var staticRenderFns = []


// EXTERNAL MODULE: ./src/utils/validate.js
var validate = __webpack_require__(36010);
// EXTERNAL MODULE: ./node_modules/.pnpm/path-browserify@1.0.1/node_modules/path-browserify/index.js
var path_browserify = __webpack_require__(62005);
var path_browserify_default = /*#__PURE__*/__webpack_require__.n(path_browserify);
;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@10.0.0_@babel+core@7.23.3_webpack@5.100.1/node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabSide/components/VabSubmenu.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//



/* ESM default export */ var VabSubmenuvue_type_script_lang_js_ = ({
  name: 'VabSubmenu',
  props: {
    routeChildren: {
      type: Object,
      default() {
        return null;
      }
    },
    item: {
      type: Object,
      default() {
        return null;
      }
    },
    fullPath: {
      type: String,
      default: ''
    }
  },
  methods: {
    handlePath(routePath) {
      if ((0,validate.isExternal)(routePath)) {
        return routePath;
      }
      if ((0,validate.isExternal)(this.fullPath)) {
        return this.fullPath;
      }
      return path_browserify_default().resolve(this.fullPath, routePath);
    }
  }
});
;// CONCATENATED MODULE: ./src/layouts/components/VabSide/components/VabSubmenu.vue?vue&type=script&lang=js&
 /* ESM default export */ var components_VabSubmenuvue_type_script_lang_js_ = (VabSubmenuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(71294);
;// CONCATENATED MODULE: ./src/layouts/components/VabSide/components/VabSubmenu.vue





/* normalize component */
;
var component = (0,componentNormalizer["default"])(
  components_VabSubmenuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* ESM default export */ var VabSubmenu = (component.exports);

}),
11644: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ VabSide; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabSide/index.vue?vue&type=template&id=e39ba7e0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-scrollbar',{staticClass:"side-container",class:{ 'is-collapse': _vm.collapse }},[_c('vab-logo'),_c('el-menu',{attrs:{"active-text-color":" hsla(0, 0%, 100%, 0.95)","background-color":"#191a23","collapse":_vm.collapse,"collapse-transition":false,"default-active":_vm.activeMenu,"default-openeds":_vm.defaultOpens,"text-color":" hsla(0, 0%, 100%, 0.95)","unique-opened":_vm.uniqueOpened,"mode":"vertical"}},[_vm._l((_vm.routes),function(route){return [_c('vab-side-item',{attrs:{"full-path":route.path,"item":route}})]})],2)],1)}
var staticRenderFns = []


// EXTERNAL MODULE: ./src/styles/variables.scss
var variables = __webpack_require__(54480);
// EXTERNAL MODULE: ./node_modules/.pnpm/vuex@3.6.2_vue@2.7.15/node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(8507);
// EXTERNAL MODULE: ./src/config/index.js
var config = __webpack_require__(84465);
;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@10.0.0_@babel+core@7.23.3_webpack@5.100.1/node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabSide/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* ESM default export */ var VabSidevue_type_script_lang_js_ = ({
  name: 'VabSide',
  data() {
    return {
      uniqueOpened: config.uniqueOpened
    };
  },
  computed: {
    ...(0,vuex_esm.mapGetters)({
      collapse: 'settings/collapse',
      routes: 'routes/routes'
    }),
    defaultOpens() {
      if (this.collapse) {}
      return config.defaultOopeneds;
    },
    activeMenu() {
      const route = this.$route;
      const {
        meta,
        path
      } = route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    variables() {
      return variables["default"];
    }
  }
});
;// CONCATENATED MODULE: ./src/layouts/components/VabSide/index.vue?vue&type=script&lang=js&
 /* ESM default export */ var components_VabSidevue_type_script_lang_js_ = (VabSidevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(96453);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(88072);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(71420);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(8900);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(9911);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(27264);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.4.10_webpack@5.100.1/node_modules/css-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/sass-loader@10.4.1_sass@1.32.13_webpack@5.100.1/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[2]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabSide/index.vue?vue&type=style&index=0&id=e39ba7e0&lang=scss&scoped=true&
var VabSidevue_type_style_index_0_id_e39ba7e0_lang_scss_scoped_true_ = __webpack_require__(20522);
;// CONCATENATED MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/cjs.js!./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.4.10_webpack@5.100.1/node_modules/css-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/sass-loader@10.4.1_sass@1.32.13_webpack@5.100.1/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[2]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabSide/index.vue?vue&type=style&index=0&id=e39ba7e0&lang=scss&scoped=true&

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(VabSidevue_type_style_index_0_id_e39ba7e0_lang_scss_scoped_true_["default"], options);




       /* ESM default export */ var components_VabSidevue_type_style_index_0_id_e39ba7e0_lang_scss_scoped_true_ = (VabSidevue_type_style_index_0_id_e39ba7e0_lang_scss_scoped_true_["default"] && VabSidevue_type_style_index_0_id_e39ba7e0_lang_scss_scoped_true_["default"].locals ? VabSidevue_type_style_index_0_id_e39ba7e0_lang_scss_scoped_true_["default"].locals : undefined);

;// CONCATENATED MODULE: ./src/layouts/components/VabSide/index.vue?vue&type=style&index=0&id=e39ba7e0&lang=scss&scoped=true&

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(71294);
;// CONCATENATED MODULE: ./src/layouts/components/VabSide/index.vue



;


/* normalize component */

var component = (0,componentNormalizer["default"])(
  components_VabSidevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "e39ba7e0",
  null
  
)

/* ESM default export */ var VabSide = (component.exports);

}),
36894: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ VabTabs; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabTabs/index.vue?vue&type=template&id=14432d70&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tabs-container",attrs:{"id":"tabs-container"}},[_c('el-tabs',{staticClass:"tabs-content",attrs:{"type":"card"},on:{"tab-click":_vm.handleTabClick,"tab-remove":_vm.handleTabRemove},model:{value:(_vm.tabActive),callback:function ($$v) {_vm.tabActive=$$v},expression:"tabActive"}},_vm._l((_vm.visitedRoutes),function(item){return _c('el-tab-pane',{key:item.path,attrs:{"closable":!_vm.isAffix(item),"name":item.path}},[_c('template',{slot:"label"},[(_vm.getTabIcon(item))?_c('vab-icon',{staticClass:"tab-icon",attrs:{"icon":['fas', _vm.getTabIcon(item)]}}):_vm._e(),_c('span',[_vm._v(_vm._s(item.meta.title))])],1)],2)}),1),_c('el-dropdown',{on:{"command":_vm.handleCommand}},[_c('span',{staticStyle:{"cursor":"pointer"}},[_vm._v("\n      更多操作\n      "),_c('i',{staticClass:"el-icon-arrow-down el-icon--right"})]),_c('el-dropdown-menu',{staticClass:"tabs-more",attrs:{"slot":"dropdown"},slot:"dropdown"},[_c('el-dropdown-item',{attrs:{"command":"closeOtherstabs"}},[_c('vab-icon',{attrs:{"icon":['fas', 'times-circle']}}),_vm._v("\n        关闭其他\n      ")],1),_c('el-dropdown-item',{attrs:{"command":"closeLefttabs"}},[_c('vab-icon',{attrs:{"icon":['fas', 'arrow-alt-circle-left']}}),_vm._v("\n        关闭左侧\n      ")],1),_c('el-dropdown-item',{attrs:{"command":"closeRighttabs"}},[_c('vab-icon',{attrs:{"icon":['fas', 'arrow-alt-circle-right']}}),_vm._v("\n        关闭右侧\n      ")],1),_c('el-dropdown-item',{attrs:{"command":"closeAlltabs"}},[_c('vab-icon',{attrs:{"icon":['fas', 'ban']}}),_vm._v("\n        关闭全部\n      ")],1)],1)],1)],1)}
var staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.44.0/node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(45088);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.44.0/node_modules/core-js/modules/es.iterator.constructor.js
var es_iterator_constructor = __webpack_require__(46846);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.44.0/node_modules/core-js/modules/es.iterator.filter.js
var es_iterator_filter = __webpack_require__(25885);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.44.0/node_modules/core-js/modules/es.iterator.for-each.js
var es_iterator_for_each = __webpack_require__(47827);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.44.0/node_modules/core-js/modules/es.iterator.some.js
var es_iterator_some = __webpack_require__(1547);
// EXTERNAL MODULE: ./node_modules/.pnpm/path-browserify@1.0.1/node_modules/path-browserify/index.js
var path_browserify = __webpack_require__(62005);
var path_browserify_default = /*#__PURE__*/__webpack_require__.n(path_browserify);
// EXTERNAL MODULE: ./node_modules/.pnpm/vuex@3.6.2_vue@2.7.15/node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(8507);
;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@10.0.0_@babel+core@7.23.3_webpack@5.100.1/node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabTabs/index.vue?vue&type=script&lang=js&





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* ESM default export */ var VabTabsvue_type_script_lang_js_ = ({
  name: 'VabTabs',
  data() {
    return {
      affixtabs: [],
      tabActive: ''
    };
  },
  computed: {
    ...(0,vuex_esm.mapGetters)({
      visitedRoutes: 'tabsBar/visitedRoutes',
      routes: 'routes/routes'
    })
  },
  watch: {
    $route: {
      handler(route) {
        this.inittabs();
        this.addtabs();
        let tabActive = '';
        this.visitedRoutes.forEach((item, index) => {
          if (item.path === this.$route.path) {
            tabActive = item.path;
          }
        });
        this.tabActive = tabActive;
      },
      immediate: true
    }
  },
  mounted() {
    //console.log(this.visitedRoutes);
  },
  methods: {
    async handleTabRemove(tabActive) {
      let view;
      this.visitedRoutes.forEach((item, index) => {
        if (tabActive == item.path) {
          view = item;
        }
      });
      const {
        visitedRoutes
      } = await this.$store.dispatch('tabsBar/delRoute', view);
      if (this.isActive(view)) {
        this.toLastTag(visitedRoutes, view);
      }
    },
    handleTabClick(tab) {
      const route = this.visitedRoutes.filter((item, index) => {
        if (tab.index == index) return item;
      })[0];
      if (this.$route.path !== route.path) {
        this.$router.push({
          path: route.path,
          query: route.query,
          fullPath: route.fullPath
        });
      } else {
        return false;
      }
    },
    isActive(route) {
      return route.path === this.$route.path;
    },
    isAffix(tag) {
      return tag.meta && tag.meta.affix;
    },
    filterAffixtabs(routes, basePath = '/') {
      let tabs = [];
      routes.forEach(route => {
        if (route.meta && route.meta.affix) {
          const tagPath = path_browserify_default().resolve(basePath, route.path);
          tabs.push({
            fullPath: tagPath,
            path: tagPath,
            name: route.name,
            meta: {
              ...route.meta
            }
          });
        }
        if (route.children) {
          const temptabs = this.filterAffixtabs(route.children, route.path);
          if (temptabs.length >= 1) {
            tabs = [...tabs, ...temptabs];
          }
        }
      });
      return tabs;
    },
    inittabs() {
      const affixtabs = this.affixtabs = this.filterAffixtabs(this.routes);
      for (const tag of affixtabs) {
        if (tag.name) {
          this.$store.dispatch('tabsBar/addVisitedRoute', tag);
        }
      }
    },
    addtabs() {
      const {
        name
      } = this.$route;
      if (name) {
        this.$store.dispatch('tabsBar/addVisitedRoute', this.$route);
      }
      return false;
    },
    handleCommand(command) {
      switch (command) {
        case 'refreshRoute':
          this.refreshRoute();
          break;
        case 'closeOtherstabs':
          this.closeOtherstabs();
          break;
        case 'closeLefttabs':
          this.closeLefttabs();
          break;
        case 'closeRighttabs':
          this.closeRighttabs();
          break;
        case 'closeAlltabs':
          this.closeAlltabs();
          break;
      }
    },
    async refreshRoute() {
      this.$baseEventBus.$emit('reloadrouter-view');
    },
    async closeSelectedTag(view) {
      const {
        visitedRoutes
      } = await this.$store.dispatch('tabsBar/delRoute', view);
      if (this.isActive(view)) {
        this.toLastTag(visitedRoutes, view);
      }
    },
    async closeOtherstabs() {
      const view = await this.toThisTag();
      await this.$store.dispatch('tabsBar/delOthersRoutes', view);
    },
    async closeLefttabs() {
      const view = await this.toThisTag();
      await this.$store.dispatch('tabsBar/delLeftRoutes', view);
    },
    async closeRighttabs() {
      const view = await this.toThisTag();
      await this.$store.dispatch('tabsBar/delRightRoutes', view);
    },
    async closeAlltabs() {
      const view = await this.toThisTag();
      const {
        visitedRoutes
      } = await this.$store.dispatch('tabsBar/delAllRoutes');
      if (this.affixtabs.some(tag => tag.path === view.path)) {
        return;
      }
      this.toLastTag(visitedRoutes, view);
    },
    toLastTag(visitedRoutes, view) {
      const latestView = visitedRoutes.slice(-1)[0];
      if (latestView) {
        this.$router.push(latestView);
      } else {
        this.$router.push('/');
      }
    },
    async toThisTag() {
      const view = this.visitedRoutes.filter((item, index) => {
        if (item.path === this.$route.fullPath) {
          return item;
        }
      })[0];
      if (this.$route.path !== view.path) this.$router.push(view);
      return view;
    },
    getTabIcon(item) {
      // 如果当前路由有图标，直接返回
      if (item.meta && item.meta.icon) {
        return item.meta.icon;
      }

      // 查找父级路由的图标
      const parentIcon = this.findParentIcon(item.path);
      if (parentIcon) {
        return parentIcon;
      }
      return null;
    },
    findParentIcon(path) {
      // 从路径中提取父级路径
      const pathParts = path.split('/').filter(part => part);
      if (pathParts.length <= 1) {
        return null;
      }

      // 查找父级路由
      const findRouteByPath = (routes, targetPath) => {
        for (const route of routes) {
          if (route.path === targetPath) {
            return route;
          }
          if (route.children) {
            const found = findRouteByPath(route.children, targetPath);
            if (found) return found;
          }
        }
        return null;
      };

      // 尝试查找父级路径
      for (let i = pathParts.length - 1; i > 0; i--) {
        const parentPath = '/' + pathParts.slice(0, i).join('/');
        const parentRoute = findRouteByPath(this.routes, parentPath);
        if (parentRoute && parentRoute.meta && parentRoute.meta.icon) {
          return parentRoute.meta.icon;
        }
      }
      return null;
    }
  }
});
;// CONCATENATED MODULE: ./src/layouts/components/VabTabs/index.vue?vue&type=script&lang=js&
 /* ESM default export */ var components_VabTabsvue_type_script_lang_js_ = (VabTabsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(96453);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(88072);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(71420);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(8900);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(9911);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(27264);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.4.10_webpack@5.100.1/node_modules/css-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/sass-loader@10.4.1_sass@1.32.13_webpack@5.100.1/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[2]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabTabs/index.vue?vue&type=style&index=0&id=14432d70&lang=scss&scoped=true&
var VabTabsvue_type_style_index_0_id_14432d70_lang_scss_scoped_true_ = __webpack_require__(88655);
;// CONCATENATED MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/cjs.js!./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.4.10_webpack@5.100.1/node_modules/css-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/sass-loader@10.4.1_sass@1.32.13_webpack@5.100.1/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[2]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabTabs/index.vue?vue&type=style&index=0&id=14432d70&lang=scss&scoped=true&

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(VabTabsvue_type_style_index_0_id_14432d70_lang_scss_scoped_true_["default"], options);




       /* ESM default export */ var components_VabTabsvue_type_style_index_0_id_14432d70_lang_scss_scoped_true_ = (VabTabsvue_type_style_index_0_id_14432d70_lang_scss_scoped_true_["default"] && VabTabsvue_type_style_index_0_id_14432d70_lang_scss_scoped_true_["default"].locals ? VabTabsvue_type_style_index_0_id_14432d70_lang_scss_scoped_true_["default"].locals : undefined);

;// CONCATENATED MODULE: ./src/layouts/components/VabTabs/index.vue?vue&type=style&index=0&id=14432d70&lang=scss&scoped=true&

// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.4.10_webpack@5.100.1/node_modules/css-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/sass-loader@10.4.1_sass@1.32.13_webpack@5.100.1/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[2]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabTabs/index.vue?vue&type=style&index=1&lang=scss&
var VabTabsvue_type_style_index_1_lang_scss_ = __webpack_require__(26518);
;// CONCATENATED MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/cjs.js!./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.4.10_webpack@5.100.1/node_modules/css-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/sass-loader@10.4.1_sass@1.32.13_webpack@5.100.1/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[2]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabTabs/index.vue?vue&type=style&index=1&lang=scss&

      
      
      
      
      
      
      
      
      

var VabTabsvue_type_style_index_1_lang_scss_options = {};

VabTabsvue_type_style_index_1_lang_scss_options.styleTagTransform = (styleTagTransform_default());
VabTabsvue_type_style_index_1_lang_scss_options.setAttributes = (setAttributesWithoutAttributes_default());
VabTabsvue_type_style_index_1_lang_scss_options.insert = insertBySelector_default().bind(null, "head");
VabTabsvue_type_style_index_1_lang_scss_options.domAPI = (styleDomAPI_default());
VabTabsvue_type_style_index_1_lang_scss_options.insertStyleElement = (insertStyleElement_default());

var VabTabsvue_type_style_index_1_lang_scss_update = injectStylesIntoStyleTag_default()(VabTabsvue_type_style_index_1_lang_scss_["default"], VabTabsvue_type_style_index_1_lang_scss_options);




       /* ESM default export */ var components_VabTabsvue_type_style_index_1_lang_scss_ = (VabTabsvue_type_style_index_1_lang_scss_["default"] && VabTabsvue_type_style_index_1_lang_scss_["default"].locals ? VabTabsvue_type_style_index_1_lang_scss_["default"].locals : undefined);

;// CONCATENATED MODULE: ./src/layouts/components/VabTabs/index.vue?vue&type=style&index=1&lang=scss&

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(71294);
;// CONCATENATED MODULE: ./src/layouts/components/VabTabs/index.vue



;



/* normalize component */

var component = (0,componentNormalizer["default"])(
  components_VabTabsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "14432d70",
  null
  
)

/* ESM default export */ var VabTabs = (component.exports);

}),
99247: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ VabTheme; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabTheme/index.vue?vue&type=template&id=3ec093df&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.themeBar)?_c('span',[_c('vab-icon',{attrs:{"icon":['fas', 'crown'],"title":"主题配置"},on:{"click":_vm.handleOpenTheme}}),_c('div',{staticClass:"theme-setting"},[_c('div',{on:{"click":_vm.handleOpenTheme}},[_c('vab-icon',{attrs:{"icon":['fas', 'crown']}}),_c('p',[_vm._v("主题配置")])],1),_c('div',{on:{"click":_vm.handleGetCode}},[_c('vab-icon',{attrs:{"icon":['fas', 'laptop-code']}}),_c('p',[_vm._v("拷贝源码")])],1)]),_c('el-drawer',{attrs:{"visible":_vm.drawerVisible,"append-to-body":"","direction":"rtl","size":"300px","title":"主题配置"},on:{"update:visible":function($event){_vm.drawerVisible=$event}}},[_c('el-scrollbar',{staticStyle:{"height":"80vh","overflow":"hidden"}},[_c('div',{staticClass:"el-drawer__body"},[_c('div',{staticClass:"theme-config-container"},[_c('div',{staticClass:"config-section"},[_c('div',{staticClass:"section-header"},[_c('i',{staticClass:"el-icon-picture-outline"}),_c('span',[_vm._v("主题风格")])]),_c('div',{staticClass:"theme-options"},[_c('div',{staticClass:"theme-option",class:{ active: _vm.theme.name === 'default' },on:{"click":function($event){_vm.theme.name = 'default'
                  _vm.handleSaveTheme()}}},[_c('div',{staticClass:"theme-preview default-theme"},[_c('div',{staticClass:"preview-header"}),_c('div',{staticClass:"preview-sidebar"}),_c('div',{staticClass:"preview-content"})]),_c('span',{staticClass:"theme-name"},[_vm._v("默认主题")])]),_c('div',{staticClass:"theme-option",class:{ active: _vm.theme.name === 'green' },on:{"click":function($event){_vm.theme.name = 'green'
                  _vm.handleSaveTheme()}}},[_c('div',{staticClass:"theme-preview green-theme"},[_c('div',{staticClass:"preview-header"}),_c('div',{staticClass:"preview-sidebar"}),_c('div',{staticClass:"preview-content"})]),_c('span',{staticClass:"theme-name"},[_vm._v("绿荫草场")])]),_c('div',{staticClass:"theme-option",class:{ active: _vm.theme.name === 'glory' },on:{"click":function($event){_vm.theme.name = 'glory'
                  _vm.handleSaveTheme()}}},[_c('div',{staticClass:"theme-preview glory-theme"},[_c('div',{staticClass:"preview-header"}),_c('div',{staticClass:"preview-sidebar"}),_c('div',{staticClass:"preview-content"})]),_c('span',{staticClass:"theme-name"},[_vm._v("荣耀典藏")])])])]),_c('div',{staticClass:"config-section"},[_c('div',{staticClass:"section-header"},[_c('i',{staticClass:"el-icon-s-grid"}),_c('span',[_vm._v("布局设置")])]),_c('div',{staticClass:"layout-options"},[_c('div',{staticClass:"layout-option",class:{ active: _vm.theme.layout === 'vertical' },on:{"click":function($event){_vm.theme.layout = 'vertical'
                  _vm.handleSaveTheme()}}},[_c('div',{staticClass:"layout-preview vertical-layout"},[_c('div',{staticClass:"preview-header"}),_c('div',{staticClass:"preview-sidebar"}),_c('div',{staticClass:"preview-content"})]),_c('span',{staticClass:"layout-name"},[_vm._v("纵向布局")])]),_c('div',{staticClass:"layout-option",class:{ active: _vm.theme.layout === 'horizontal' },on:{"click":function($event){_vm.theme.layout = 'horizontal'
                  _vm.handleSaveTheme()}}},[_c('div',{staticClass:"layout-preview horizontal-layout"},[_c('div',{staticClass:"preview-header"}),_c('div',{staticClass:"preview-main"},[_c('div',{staticClass:"preview-sidebar"}),_c('div',{staticClass:"preview-content"})])]),_c('span',{staticClass:"layout-name"},[_vm._v("横向布局")])])])]),_c('div',{staticClass:"config-section"},[_c('div',{staticClass:"section-header"},[_c('i',{staticClass:"el-icon-setting"}),_c('span',[_vm._v("功能设置")])]),_c('div',{staticClass:"feature-options"},[_c('div',{staticClass:"feature-item"},[_c('div',{staticClass:"feature-info"},[_c('span',{staticClass:"feature-name"},[_vm._v("固定头部")]),_c('span',{staticClass:"feature-desc"},[_vm._v("头部始终固定在页面顶部")])]),_c('el-switch',{attrs:{"active-value":"fixed","inactive-value":"noFixed"},on:{"change":_vm.handleSaveTheme},model:{value:(_vm.theme.header),callback:function ($$v) {_vm.$set(_vm.theme, "header", $$v)},expression:"theme.header"}})],1),_c('div',{staticClass:"feature-item"},[_c('div',{staticClass:"feature-info"},[_c('span',{staticClass:"feature-name"},[_vm._v("多标签页")]),_c('span',{staticClass:"feature-desc"},[_vm._v("开启页面标签页功能")])]),_c('el-switch',{attrs:{"active-value":"true","inactive-value":"false"},on:{"change":_vm.handleSaveTheme},model:{value:(_vm.theme.tabsBar),callback:function ($$v) {_vm.$set(_vm.theme, "tabsBar", $$v)},expression:"theme.tabsBar"}})],1)])])])])]),_c('div',{staticClass:"el-drawer__footer"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.handleSaveTheme}},[_vm._v("保存设置")]),_c('el-button',{on:{"click":function($event){_vm.drawerVisible = false}}},[_vm._v("取消")])],1)],1)],1):_vm._e()}
var staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/.pnpm/vuex@3.6.2_vue@2.7.15/node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(8507);
// EXTERNAL MODULE: ./src/config/index.js
var config = __webpack_require__(84465);
;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@10.0.0_@babel+core@7.23.3_webpack@5.100.1/node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabTheme/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* ESM default export */ var VabThemevue_type_script_lang_js_ = ({
  name: 'VabTheme',
  data() {
    return {
      drawerVisible: false,
      theme: {
        name: 'default',
        layout: '',
        header: 'fixed',
        tabsBar: ''
      }
    };
  },
  computed: {
    ...(0,vuex_esm.mapGetters)({
      layout: 'settings/layout',
      header: 'settings/header',
      tabsBar: 'settings/tabsBar',
      themeBar: 'settings/themeBar'
    })
  },
  created() {
    const handleTheme = () => {
      this.handleOpenTheme();
    };
    this.$baseEventBus.$on('theme', handleTheme);
    const theme = localStorage.getItem('vue-admin-better-theme');
    if (null !== theme) {
      this.theme = JSON.parse(theme);
      this.handleSaveTheme();
    } else {
      this.theme.layout = this.layout;
      this.theme.header = this.header;
      this.theme.tabsBar = this.tabsBar;
    }
    this.$once('hook:beforeDestroy', () => {
      this.$baseEventBus.$off('theme', handleTheme);
    });
  },
  methods: {
    ...(0,vuex_esm.mapActions)({
      changeLayout: 'settings/changeLayout',
      changeHeader: 'settings/changeHeader',
      changeTabsBar: 'settings/changeTabsBar'
    }),
    handleIsMobile() {
      return document.body.getBoundingClientRect().width - 1 < 992;
    },
    handleOpenTheme() {
      this.drawerVisible = true;
    },
    handleSaveTheme() {
      let {
        name,
        layout,
        header,
        tabsBar
      } = this.theme;
      localStorage.setItem('vue-admin-better-theme', `{
            "name":"${name}",
            "layout":"${layout}",
            "header":"${header}",
            "tabsBar":"${tabsBar}"
          }`);
      if (!this.handleIsMobile()) this.changeLayout(layout);
      this.changeHeader(header);
      this.changeTabsBar(tabsBar);
      document.getElementsByTagName('body')[0].className = `vue-admin-better-theme-${name}`;
      this.drawerVisible = false;
    },
    handleGetCode() {
      const url = 'https://github.com/zxwk1998/vue-admin-better/tree/master/src/views';
      let path = this.$route.path + '/index.vue';
      if (path === '/vab/menu1/menu1-1/menu1-1-1/index.vue') {
        path = '/vab/nested/menu1/menu1-1/menu1-1-1/index.vue';
      }
      if (path === '/vab/icon/awesomeIcon/index.vue') {
        path = '/vab/icon/index.vue';
      }
      if (path === '/vab/icon/remixIcon/index.vue') {
        path = '/vab/icon/remixIcon.vue';
      }
      if (path === '/vab/icon/colorfulIcon/index.vue') {
        path = '/vab/icon/colorfulIcon.vue';
      }
      if (path === '/vab/table/comprehensiveTable/index.vue') {
        path = '/vab/table/index.vue';
      }
      if (path === '/vab/table/inlineEditTable/index.vue') {
        path = '/vab/table/inlineEditTable.vue';
      }
      window.open(url + path);
    }
  }
});
;// CONCATENATED MODULE: ./src/layouts/components/VabTheme/index.vue?vue&type=script&lang=js&
 /* ESM default export */ var components_VabThemevue_type_script_lang_js_ = (VabThemevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(96453);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(88072);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(71420);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(8900);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(9911);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(27264);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.4.10_webpack@5.100.1/node_modules/css-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/sass-loader@10.4.1_sass@1.32.13_webpack@5.100.1/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[2]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabTheme/index.vue?vue&type=style&index=0&id=3ec093df&lang=scss&scoped=true&
var VabThemevue_type_style_index_0_id_3ec093df_lang_scss_scoped_true_ = __webpack_require__(58849);
;// CONCATENATED MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/cjs.js!./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.4.10_webpack@5.100.1/node_modules/css-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/sass-loader@10.4.1_sass@1.32.13_webpack@5.100.1/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[2]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabTheme/index.vue?vue&type=style&index=0&id=3ec093df&lang=scss&scoped=true&

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(VabThemevue_type_style_index_0_id_3ec093df_lang_scss_scoped_true_["default"], options);




       /* ESM default export */ var components_VabThemevue_type_style_index_0_id_3ec093df_lang_scss_scoped_true_ = (VabThemevue_type_style_index_0_id_3ec093df_lang_scss_scoped_true_["default"] && VabThemevue_type_style_index_0_id_3ec093df_lang_scss_scoped_true_["default"].locals ? VabThemevue_type_style_index_0_id_3ec093df_lang_scss_scoped_true_["default"].locals : undefined);

;// CONCATENATED MODULE: ./src/layouts/components/VabTheme/index.vue?vue&type=style&index=0&id=3ec093df&lang=scss&scoped=true&

// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.4.10_webpack@5.100.1/node_modules/css-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/sass-loader@10.4.1_sass@1.32.13_webpack@5.100.1/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[2]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabTheme/index.vue?vue&type=style&index=1&lang=scss&
var VabThemevue_type_style_index_1_lang_scss_ = __webpack_require__(59747);
;// CONCATENATED MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/cjs.js!./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.4.10_webpack@5.100.1/node_modules/css-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/sass-loader@10.4.1_sass@1.32.13_webpack@5.100.1/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[2]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabTheme/index.vue?vue&type=style&index=1&lang=scss&

      
      
      
      
      
      
      
      
      

var VabThemevue_type_style_index_1_lang_scss_options = {};

VabThemevue_type_style_index_1_lang_scss_options.styleTagTransform = (styleTagTransform_default());
VabThemevue_type_style_index_1_lang_scss_options.setAttributes = (setAttributesWithoutAttributes_default());
VabThemevue_type_style_index_1_lang_scss_options.insert = insertBySelector_default().bind(null, "head");
VabThemevue_type_style_index_1_lang_scss_options.domAPI = (styleDomAPI_default());
VabThemevue_type_style_index_1_lang_scss_options.insertStyleElement = (insertStyleElement_default());

var VabThemevue_type_style_index_1_lang_scss_update = injectStylesIntoStyleTag_default()(VabThemevue_type_style_index_1_lang_scss_["default"], VabThemevue_type_style_index_1_lang_scss_options);




       /* ESM default export */ var components_VabThemevue_type_style_index_1_lang_scss_ = (VabThemevue_type_style_index_1_lang_scss_["default"] && VabThemevue_type_style_index_1_lang_scss_["default"].locals ? VabThemevue_type_style_index_1_lang_scss_["default"].locals : undefined);

;// CONCATENATED MODULE: ./src/layouts/components/VabTheme/index.vue?vue&type=style&index=1&lang=scss&

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(71294);
;// CONCATENATED MODULE: ./src/layouts/components/VabTheme/index.vue



;



/* normalize component */

var component = (0,componentNormalizer["default"])(
  components_VabThemevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "3ec093df",
  null
  
)

/* ESM default export */ var VabTheme = (component.exports);

}),
40433: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ VabTop; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabTop/index.vue?vue&type=template&id=232009d6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"top-container"},[_c('div',{staticClass:"vab-main"},[_c('el-row',[_c('el-col',{attrs:{"lg":7,"md":7,"sm":7,"xl":7,"xs":7}},[_c('vab-logo')],1),_c('el-col',{attrs:{"lg":12,"md":12,"sm":12,"xl":12,"xs":12}},[_c('el-menu',{attrs:{"active-text-color":" hsla(0, 0%, 100%, 0.95)","background-color":"#191a23","collapse":_vm.collapse,"collapse-transition":false,"default-active":_vm.activeMenu,"default-openeds":_vm.defaultOpens,"text-color":" hsla(0, 0%, 100%, 0.95)","menu-trigger":"hover","mode":"horizontal"}},[_vm._l((_vm.routes),function(route){return [(!route.hidden)?_c('vab-side-item',{key:route.path,attrs:{"full-path":route.path,"item":route}}):_vm._e()]})],2)],1),_c('el-col',{attrs:{"lg":5,"md":5,"sm":5,"xl":5,"xs":5}},[_c('div',{staticClass:"right-panel"},[_c('vab-error-log'),_c('div',{staticClass:"right-menu"},[_c('vab-full-screen',{on:{"refresh":_vm.refreshRoute}}),_c('vab-theme',{staticClass:"hidden-md-and-down"})],1),_c('vab-icon',{attrs:{"icon":['fas', 'sync-alt'],"pulse":_vm.pulse,"title":"重载路由"},on:{"click":_vm.refreshRoute}}),_c('vab-avatar')],1)])],1)],1)])}
var staticRenderFns = []


// EXTERNAL MODULE: ./src/styles/variables.scss
var variables = __webpack_require__(54480);
// EXTERNAL MODULE: ./node_modules/.pnpm/vuex@3.6.2_vue@2.7.15/node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(8507);
;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@10.0.0_@babel+core@7.23.3_webpack@5.100.1/node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabTop/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* ESM default export */ var VabTopvue_type_script_lang_js_ = ({
  name: 'VabTop',
  data() {
    return {
      pulse: false,
      menuTrigger: 'hover'
    };
  },
  computed: {
    ...(0,vuex_esm.mapGetters)({
      routes: 'routes/routes',
      visitedRoutes: 'tabsBar/visitedRoutes'
    }),
    activeMenu() {
      const route = this.$route;
      const {
        meta,
        path
      } = route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    variables() {
      return variables["default"];
    }
  },
  methods: {
    async refreshRoute() {
      this.$baseEventBus.$emit('reload-router-view');
      this.pulse = true;
      this.timeOutID = setTimeout(() => {
        this.pulse = false;
      }, 1000);
    }
  },
  beforeDestroy() {
    clearTimeout(this.timeOutID);
  }
});
;// CONCATENATED MODULE: ./src/layouts/components/VabTop/index.vue?vue&type=script&lang=js&
 /* ESM default export */ var components_VabTopvue_type_script_lang_js_ = (VabTopvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(96453);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(88072);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(71420);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(8900);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(9911);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(27264);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.4.10_webpack@5.100.1/node_modules/css-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/sass-loader@10.4.1_sass@1.32.13_webpack@5.100.1/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[2]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabTop/index.vue?vue&type=style&index=0&id=232009d6&lang=scss&scoped=true&
var VabTopvue_type_style_index_0_id_232009d6_lang_scss_scoped_true_ = __webpack_require__(64984);
;// CONCATENATED MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/cjs.js!./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.4.10_webpack@5.100.1/node_modules/css-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/sass-loader@10.4.1_sass@1.32.13_webpack@5.100.1/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[2]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/components/VabTop/index.vue?vue&type=style&index=0&id=232009d6&lang=scss&scoped=true&

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(VabTopvue_type_style_index_0_id_232009d6_lang_scss_scoped_true_["default"], options);




       /* ESM default export */ var components_VabTopvue_type_style_index_0_id_232009d6_lang_scss_scoped_true_ = (VabTopvue_type_style_index_0_id_232009d6_lang_scss_scoped_true_["default"] && VabTopvue_type_style_index_0_id_232009d6_lang_scss_scoped_true_["default"].locals ? VabTopvue_type_style_index_0_id_232009d6_lang_scss_scoped_true_["default"].locals : undefined);

;// CONCATENATED MODULE: ./src/layouts/components/VabTop/index.vue?vue&type=style&index=0&id=232009d6&lang=scss&scoped=true&

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(71294);
;// CONCATENATED MODULE: ./src/layouts/components/VabTop/index.vue



;


/* normalize component */

var component = (0,componentNormalizer["default"])(
  components_VabTopvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "232009d6",
  null
  
)

/* ESM default export */ var VabTop = (component.exports);

}),
21874: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ layouts; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/index.vue?vue&type=template&id=0e2dd9ce&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-admin-better-wrapper",class:_vm.classObj},[('horizontal' === _vm.layout)?_c('div',{staticClass:"layout-container-horizontal",class:{
      fixed: _vm.header === 'fixed',
      'no-tabs-bar': _vm.tabsBar === 'false' || _vm.tabsBar === false,
    }},[_c('div',{class:_vm.header === 'fixed' ? 'fixed-header' : ''},[_c('vab-top'),(_vm.tabsBar === 'true' || _vm.tabsBar === true)?_c('div',{class:{ 'tag-view-show': _vm.tabsBar }},[_c('el-scrollbar',[_c('vab-tabs')],1)],1):_vm._e()],1),_c('div',{staticClass:"vab-main main-padding"},[_c('vab-ad'),_c('vab-app-main')],1)]):_c('div',{staticClass:"layout-container-vertical",class:{
      fixed: _vm.header === 'fixed',
      'no-tabs-bar': _vm.tabsBar === 'false' || _vm.tabsBar === false,
    }},[(_vm.device === 'mobile' && _vm.collapse === false)?_c('div',{staticClass:"mask",on:{"click":_vm.handleFoldSideBar}}):_vm._e(),_c('vab-side'),_c('div',{staticClass:"vab-main",class:_vm.collapse ? 'is-collapse-main' : ''},[_c('div',{class:_vm.header === 'fixed' ? 'fixed-header' : ''},[_c('vab-nav'),(_vm.tabsBar === 'true' || _vm.tabsBar === true)?_c('vab-tabs'):_vm._e()],1),_c('vab-ad'),_c('vab-app-main')],1)],1),_c('el-backtop')],1)}
var staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/.pnpm/vuex@3.6.2_vue@2.7.15/node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(8507);
// EXTERNAL MODULE: ./src/config/index.js
var config = __webpack_require__(84465);
;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@10.0.0_@babel+core@7.23.3_webpack@5.100.1/node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* ESM default export */ var layoutsvue_type_script_lang_js_ = ({
  name: 'Layout',
  data() {
    return {
      oldLayout: '',
      controller: new window.AbortController(),
      timeOutID: null
    };
  },
  computed: {
    ...(0,vuex_esm.mapGetters)({
      layout: 'settings/layout',
      tabsBar: 'settings/tabsBar',
      collapse: 'settings/collapse',
      header: 'settings/header',
      device: 'settings/device'
    }),
    classObj() {
      return {
        mobile: this.device === 'mobile'
      };
    }
  },
  beforeMount() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
    this.controller.abort();
    clearTimeout(this.timeOutID);
  },
  mounted() {
    this.oldLayout = this.layout;
    const userAgent = navigator.userAgent;
    const isMobile = this.handleIsMobile();
    if (isMobile) {
      if (isMobile) {
        //横向布局时如果是手机端访问那么改成纵向版
        this.$store.dispatch('settings/changeLayout', 'vertical');
      } else {
        this.$store.dispatch('settings/changeLayout', this.oldLayout);
      }
      this.$store.dispatch('settings/toggleDevice', 'mobile');
      this.timeOutID = setTimeout(() => {
        this.$store.dispatch('settings/foldSideBar');
      }, 2000);
    } else {
      this.$store.dispatch('settings/openSideBar');
    }
    this.$nextTick(() => {
      window.addEventListener('storage', e => {
        if (e.key === config.tokenName || e.key === null) window.location.reload();
        if (e.key === config.tokenName && e.value === null) window.location.reload();
      }, {
        capture: false,
        signal: this.controller?.signal
      });
    });
  },
  methods: {
    ...(0,vuex_esm.mapActions)({
      handleFoldSideBar: 'settings/foldSideBar'
    }),
    handleIsMobile() {
      return document.body.getBoundingClientRect().width - 1 < 992;
    },
    handleResize() {
      if (!document.hidden) {
        const isMobile = this.handleIsMobile();
        if (isMobile) {
          //横向布局时如果是手机端访问那么改成纵向版
          this.$store.dispatch('settings/changeLayout', 'vertical');
        } else {
          this.$store.dispatch('settings/changeLayout', this.oldLayout);
        }
        this.$store.dispatch('settings/toggleDevice', isMobile ? 'mobile' : 'desktop');
      }
    }
  }
});
;// CONCATENATED MODULE: ./src/layouts/index.vue?vue&type=script&lang=js&
 /* ESM default export */ var src_layoutsvue_type_script_lang_js_ = (layoutsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(96453);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(88072);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(71420);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(8900);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(9911);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(27264);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.4.10_webpack@5.100.1/node_modules/css-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/sass-loader@10.4.1_sass@1.32.13_webpack@5.100.1/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[2]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/index.vue?vue&type=style&index=0&id=0e2dd9ce&lang=scss&scoped=true&
var layoutsvue_type_style_index_0_id_0e2dd9ce_lang_scss_scoped_true_ = __webpack_require__(51827);
;// CONCATENATED MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/cjs.js!./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.4.10_webpack@5.100.1/node_modules/css-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/sass-loader@10.4.1_sass@1.32.13_webpack@5.100.1/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[2]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/layouts/index.vue?vue&type=style&index=0&id=0e2dd9ce&lang=scss&scoped=true&

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(layoutsvue_type_style_index_0_id_0e2dd9ce_lang_scss_scoped_true_["default"], options);




       /* ESM default export */ var lib_vue_loader_options_src_layoutsvue_type_style_index_0_id_0e2dd9ce_lang_scss_scoped_true_ = (layoutsvue_type_style_index_0_id_0e2dd9ce_lang_scss_scoped_true_["default"] && layoutsvue_type_style_index_0_id_0e2dd9ce_lang_scss_scoped_true_["default"].locals ? layoutsvue_type_style_index_0_id_0e2dd9ce_lang_scss_scoped_true_["default"].locals : undefined);

;// CONCATENATED MODULE: ./src/layouts/index.vue?vue&type=style&index=0&id=0e2dd9ce&lang=scss&scoped=true&

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(71294);
;// CONCATENATED MODULE: ./src/layouts/index.vue



;


/* normalize component */

var component = (0,componentNormalizer["default"])(
  src_layoutsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "0e2dd9ce",
  null
  
)

/* ESM default export */ var layouts = (component.exports);

}),

}]);