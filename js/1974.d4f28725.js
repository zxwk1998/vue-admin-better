"use strict";
(self["webpackChunkvue_admin_better"] = self["webpackChunkvue_admin_better"] || []).push([["1974"], {
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
53351: (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2610);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44206);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_10_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".page-header{background:linear-gradient(135deg, #4d8af0 0%, #1a56db 100%);border-radius:12px;padding:30px;margin-bottom:24px;color:#fff;box-shadow:0 8px 32px rgba(102,126,234,.3)}.page-header .header-content{display:flex;justify-content:space-between;align-items:center}.page-header .header-content .header-left .page-title{font-size:2rem;font-weight:700;margin:0 0 8px 0;display:flex;align-items:center;gap:12px}.page-header .header-content .header-left .page-title .vab-icon{font-size:1.8rem}.page-header .header-content .header-left .page-description{font-size:1rem;opacity:.9;margin:0}.page-header .header-content .header-right{display:flex;align-items:center;gap:8px;font-size:1.1rem;font-weight:600}.page-header .header-content .header-right .vab-icon{font-size:1.3rem}@media(max-width: 768px){.page-header{padding:20px}.page-header .header-content{flex-direction:column;gap:16px;text-align:center}.page-header .header-content .header-left .page-title{font-size:1.5rem}}", ""]);
// Exports
/* ESM default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


}),
49505: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ VabPageHeader; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/VabPageHeader/index.vue?vue&type=template&id=1775637e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-header",class:_vm.customClass},[_c('div',{staticClass:"header-content"},[_c('div',{staticClass:"header-left"},[_c('h1',{staticClass:"page-title"},[(_vm.icon)?_c('vab-icon',{attrs:{"icon":_vm.icon}}):_vm._e(),_vm._v("\n        "+_vm._s(_vm.title)+"\n      ")],1),(_vm.description)?_c('p',{staticClass:"page-description",domProps:{"innerHTML":_vm._s(_vm.description)}}):_vm._e()]),(_vm.rightIcon || _vm.rightText)?_c('div',{staticClass:"header-right"},[_vm._t("right",function(){return [(_vm.rightIcon)?_c('vab-icon',{attrs:{"icon":_vm.rightIcon}}):_vm._e(),(_vm.rightText)?_c('span',[_vm._v(_vm._s(_vm.rightText))]):_vm._e()]})],2):_vm._e()])])}
var staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@10.0.0_@babel+core@7.23.3_webpack@5.100.1/node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/VabPageHeader/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* ESM default export */ var VabPageHeadervue_type_script_lang_js_ = ({
  name: 'VabPageHeader',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    icon: {
      type: Array,
      default: () => []
    },
    rightIcon: {
      type: Array,
      default: () => []
    },
    rightText: {
      type: String,
      default: ''
    },
    customClass: {
      type: String,
      default: ''
    }
  }
});
;// CONCATENATED MODULE: ./src/components/VabPageHeader/index.vue?vue&type=script&lang=js&
 /* ESM default export */ var components_VabPageHeadervue_type_script_lang_js_ = (VabPageHeadervue_type_script_lang_js_); 
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
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.4.10_webpack@5.100.1/node_modules/css-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/sass-loader@10.4.1_sass@1.32.13_webpack@5.100.1/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[2]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/VabPageHeader/index.vue?vue&type=style&index=0&lang=scss&
var VabPageHeadervue_type_style_index_0_lang_scss_ = __webpack_require__(53351);
;// CONCATENATED MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/cjs.js!./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.4.10_webpack@5.100.1/node_modules/css-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/sass-loader@10.4.1_sass@1.32.13_webpack@5.100.1/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[2]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/VabPageHeader/index.vue?vue&type=style&index=0&lang=scss&

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(VabPageHeadervue_type_style_index_0_lang_scss_["default"], options);




       /* ESM default export */ var components_VabPageHeadervue_type_style_index_0_lang_scss_ = (VabPageHeadervue_type_style_index_0_lang_scss_["default"] && VabPageHeadervue_type_style_index_0_lang_scss_["default"].locals ? VabPageHeadervue_type_style_index_0_lang_scss_["default"].locals : undefined);

;// CONCATENATED MODULE: ./src/components/VabPageHeader/index.vue?vue&type=style&index=0&lang=scss&

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(71294);
;// CONCATENATED MODULE: ./src/components/VabPageHeader/index.vue



;


/* normalize component */

var component = (0,componentNormalizer["default"])(
  components_VabPageHeadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* ESM default export */ var VabPageHeader = (component.exports);

}),
32277: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ vab_tree; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/vab/tree/index.vue?vue&type=template&id=683eb712&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tree-container"},[_c('vab-page-header',{attrs:{"description":"Element UI 树形组件的使用示例，包含常规树、懒加载树、单选树、多选树","icon":['fas', 'tree'],"title":"树形组件"}}),_c('el-row',{attrs:{"gutter":20}},[_c('el-col',{attrs:{"lg":6,"md":24,"sm":24,"xl":6,"xs":24}},[_c('el-divider',{attrs:{"content-position":"left"}},[_vm._v("常规树")]),_c('el-input',{attrs:{"placeholder":"输入关键字过滤"},model:{value:(_vm.filterText),callback:function ($$v) {_vm.filterText=$$v},expression:"filterText"}}),_c('el-tree',{ref:"demoTree",staticClass:"vab-filter-tree",attrs:{"data":_vm.data2,"default-checked-keys":_vm.defaultCheckedKeys,"default-expanded-keys":_vm.defaultExpendedKeys,"expand-on-click-node":false,"filter-node-method":_vm.filterNode,"highlight-current":true,"node-key":"id","props":_vm.defaultProps,"show-checkbox":""},on:{"check":_vm.checkNode,"node-click":_vm.nodeClick,"node-collapse":_vm.nodeCollapse,"node-expand":_vm.nodeExpand},scopedSlots:_vm._u([{key:"defalut",fn:function(ref){
var node = ref.node;
var data = ref.data;
return [_c('span',{staticClass:"vab-tree-item"},[(node.data.rank == 4)?_c('i',{staticClass:"el-icon-s-custom"}):_vm._e(),_vm._v("\n            "+_vm._s(node.label)+"\n          ")]),_c('span',{staticClass:"vab-tree-options"},[(node.data.rank !== 4)?_c('a',{staticClass:"vab-tree-btn",attrs:{"title":"添加"},on:{"click":function () { return _vm.append(node, data, 0); }}},[_c('i',{staticClass:"el-icon-plus"})]):_vm._e(),_c('a',{staticClass:"vab-tree-btn",attrs:{"title":"编辑"},on:{"click":function () { return _vm.edit(node, data, 1); }}},[_c('i',{staticClass:"el-icon-edit"})]),(node.data.rank !== 1)?_c('a',{staticClass:"vab-tree-btn",attrs:{"title":"刪除"},on:{"click":function () { return _vm.remove(node, data); }}},[_c('i',{staticClass:"el-icon-delete"})]):_vm._e()])]}}])})],1),_c('el-col',{attrs:{"lg":6,"md":24,"sm":24,"xl":6,"xs":24}},[_c('el-divider',{attrs:{"content-position":"left"}},[_vm._v("懒加载树")]),_c('el-input',{staticClass:"input-with-select",attrs:{"placeholder":"请输入内容","value":_vm.keyW},nativeOn:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.showTreeList.apply(null, arguments)}},model:{value:(_vm.keyW),callback:function ($$v) {_vm.keyW=$$v},expression:"keyW"}}),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShow),expression:"isShow"}],staticClass:"blur-tree"},[_c('el-tree',{ref:"treeFilter",staticClass:"vab-filter-tree",attrs:{"data":_vm.filterDevLlist,"default-expand-all":"","expand-on-click-node":false,"highlight-current":"","node-key":"indexCode","props":_vm.defaultProps},on:{"node-click":_vm.nodeClick},scopedSlots:_vm._u([{key:"defalut",fn:function(ref){
var node = ref.node;
return [_c('span',{staticClass:"vab-tree-item"},[(node.data.rank == 4)?_c('i',{staticClass:"el-icon-s-custom"}):_vm._e(),_vm._v("\n              "+_vm._s(node.label)+"\n            ")]),_c('span',{staticClass:"vab-tree-options"},[(node.data.rank !== 4)?_c('a',{staticClass:"vab-tree-btn",attrs:{"title":"添加"}},[_c('i',{staticClass:"el-icon-plus"})]):_vm._e(),_c('a',{staticClass:"vab-tree-btn",attrs:{"title":"编辑"}},[_c('i',{staticClass:"el-icon-edit"})]),(node.data.rank !== 1)?_c('a',{staticClass:"vab-tree-btn",attrs:{"title":"刪除"}},[_c('i',{staticClass:"el-icon-delete"})]):_vm._e()])]}}])})],1),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isShow),expression:"!isShow"}],staticClass:"el-tree-wrap"},[_c('el-tree',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],ref:"tree",staticClass:"vab-filter-tree",attrs:{"expand-on-click-node":false,"highlight-current":"","lazy":"","load":_vm.loadNode,"node-key":"indexCode","props":_vm.defaultProps},on:{"node-click":_vm.nodeClick},scopedSlots:_vm._u([{key:"defalut",fn:function(ref){
var node = ref.node;
return [_c('span',{staticClass:"vab-tree-item"},[(node.data.rank == 4)?_c('i',{staticClass:"el-icon-s-custom"}):_vm._e(),_vm._v("\n              "+_vm._s(node.label)+"\n            ")]),_c('span',{staticClass:"vab-tree-options"},[_c('a',{staticClass:"vab-tree-btn",attrs:{"title":"编辑"}},[_c('i',{staticClass:"el-icon-edit"})]),(node.data.rank !== 1)?_c('a',{staticClass:"vab-tree-btn",attrs:{"title":"刪除"}},[_c('i',{staticClass:"el-icon-delete"})]):_vm._e()])]}}])})],1)],1),_c('el-col',{attrs:{"lg":6,"md":24,"sm":24,"xl":6,"xs":24}},[_c('el-divider',{attrs:{"content-position":"left"}},[_vm._v("单选树")]),_c('el-select',{ref:"singleTree",staticClass:"vab-tree-select",attrs:{"clearable":"","popper-class":"select-tree-popper","value-key":"id"},on:{"clear":function($event){return _vm.selectTreeClearHandle('single')}},model:{value:(_vm.singleSelectTreeVal),callback:function ($$v) {_vm.singleSelectTreeVal=$$v},expression:"singleSelectTreeVal"}},[_c('el-option',{attrs:{"value":_vm.singleSelectTreeKey}},[_c('el-tree',{ref:"singleSelectTree",attrs:{"id":"singleSelectTree","current-node-key":_vm.singleSelectTreeKey,"data":_vm.selectTreeData,"default-expanded-keys":_vm.selectTreeDefaultSelectedKeys,"highlight-current":true,"node-key":"id","props":_vm.selectTreeDefaultProps},on:{"node-click":_vm.selectTreeNodeClick},scopedSlots:_vm._u([{key:"defalut",fn:function(ref){
var node = ref.node;
return [_c('span',{staticClass:"vab-tree-item"},[_vm._v(_vm._s(node.label))])]}}])})],1)],1)],1),_c('el-col',{attrs:{"lg":6,"md":24,"sm":24,"xl":6,"xs":24}},[_c('el-divider',{attrs:{"content-position":"left"}},[_vm._v("多选树")]),_c('el-select',{staticClass:"vab-tree-select",attrs:{"clearable":"","collapse-tags":"","multiple":"","popper-class":"select-tree-popper"},on:{"change":_vm.changeMultipleSelectTreeHandle,"clear":function($event){return _vm.selectTreeClearHandle('multiple')},"remove-tag":_vm.removeSelectTreeTag},model:{value:(_vm.multipleSelectTreeVal),callback:function ($$v) {_vm.multipleSelectTreeVal=$$v},expression:"multipleSelectTreeVal"}},[_c('el-option',{attrs:{"value":_vm.multipleSelectTreeKey}},[_c('el-tree',{ref:"multipleSelectTree",attrs:{"id":"multipleSelectTree","current-node-key":_vm.multipleSelectTreeKey,"data":_vm.selectTreeData,"default-checked-keys":_vm.selectTreeDefaultSelectedKeys,"default-expanded-keys":_vm.selectTreeDefaultSelectedKeys,"highlight-current":true,"node-key":"id","props":_vm.selectTreeDefaultProps,"show-checkbox":""},on:{"check":_vm.multipleSelectTreeCheckNode}})],1)],1)],1)],1),_c('el-dialog',{staticClass:"tree-operate-dialog",attrs:{"title":_vm.dialogTitle,"visible":_vm.treeDialogVisible,"width":"400px"},on:{"update:visible":function($event){_vm.treeDialogVisible=$event},"close":function($event){_vm.treeDialogVisible = false}}},[_c('el-form',{ref:"treeForm",attrs:{"model":_vm.treeForm}},[_c('el-form-item',{attrs:{"label":"节点名称","required":""}},[_c('el-input',{model:{value:(_vm.treeForm.name),callback:function ($$v) {_vm.$set(_vm.treeForm, "name", $$v)},expression:"treeForm.name"}})],1)],1),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.treeDialogVisible = false}}},[_vm._v("取 消")]),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.saveTree}},[_vm._v("确 定")])],1)],1)],1)}
var staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.44.0/node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(45088);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.44.0/node_modules/core-js/modules/es.iterator.constructor.js
var es_iterator_constructor = __webpack_require__(46846);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.44.0/node_modules/core-js/modules/es.iterator.filter.js
var es_iterator_filter = __webpack_require__(25885);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.44.0/node_modules/core-js/modules/es.iterator.for-each.js
var es_iterator_for_each = __webpack_require__(47827);
// EXTERNAL MODULE: ./src/api/tree.js
var tree = __webpack_require__(57492);
// EXTERNAL MODULE: ./src/components/VabPageHeader/index.vue + 5 modules
var VabPageHeader = __webpack_require__(49505);
;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@10.0.0_@babel+core@7.23.3_webpack@5.100.1/node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/vab/tree/index.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* ESM default export */ var treevue_type_script_lang_js_ = ({
  name: 'Tree',
  components: {
    VabPageHeader: VabPageHeader["default"]
  },
  data() {
    return {
      dialogTitle: '添加节点',
      treeFlag: 0,
      treeDialogVisible: false,
      treeForm: {
        id: '',
        name: ''
      },
      checkNodeKeys: [],
      filterText: '',
      data2: [],
      defaultProps: {
        children: 'children',
        label: 'name'
      },
      defaultExpendedKeys: [],
      defaultCheckedKeys: [],
      loading: true,
      keyW: '',
      filterDevLlist: [],
      isShow: false,
      updateTree: true,
      /* 单选树-多选树---------开始 */
      selectLevel: 4,
      // 树可选叶子level等级
      singleSelectTreeVal: '',
      //单选树默认label值
      singleSelectTreeKey: '',
      //单选树默认key值
      selectTreeData: [],
      //单选树的值
      selectTreeDefaultSelectedKeys: [],
      //单选树默认展开的key值数组
      selectTreeDefaultProps: {
        children: 'children',
        label: 'name'
      },
      multipleSelectTreeVal: [],
      //多选树默认label值
      multipleSelectTreeKey: '' //多选树默认key值
      /* 单选树-多选树---------结束 */
    };
  },

  watch: {
    filterText(val) {
      this.$refs.demoTree.filter(val);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.getTreeListFuc(1);
      this.setCheckedKeys();
      // 初始化单选树
      this.initSingleTree('single');
      // 初始化多选树
      this.initSingleTree('multiple');
    });
  },
  methods: {
    // 树level小于n级展开方法
    openTree(treeData, n) {
      const each = data => {
        data.forEach(e => {
          if (e.rank <= n) {
            this.defaultExpendedKeys.push(e.id);
          }
          if (e.children.length > 0) {
            each(e.children);
          }
        });
      };
      each(treeData);
    },
    // 获取tree数据
    async getTreeListFuc(flag) {
      const {
        data
      } = await (0,tree.getTreeList)();
      this.data2 = data;
      if (flag) {
        this.openTree(this.data2, 2);
      }
    },
    // 节点过滤操作
    filterNode(value, data) {
      if (!value) return true;
      return data.name.indexOf(value) !== -1;
    },
    // 添加节点操作
    append(node, data, flag) {
      this.treeFlag = flag;
      this.dialogTitle = '添加节点';
      this.treeForm = {
        id: '',
        name: ''
      };
      this.treeDialogVisible = true;
    },
    // 编辑节点操作
    edit(node, data, flag) {
      this.treeFlag = flag;
      this.dialogTitle = '编辑节点';
      this.treeForm = {
        id: data.id,
        name: data.name
      };
      this.treeDialogVisible = true;
    },
    // 删除节点操作
    remove(node, data) {
      this.$baseConfirm('你确定要删除该节点?', null, async () => {
        const {
          msg
        } = (0,tree.getTreeList)();
        this.$baseMessage(msg, 'success');
        this.getTreeListFuc(0);
      });
    },
    // 保存添加和编辑
    saveTree() {
      this.$refs.treeForm.validate(async valid => {
        if (valid) {
          const {
            msg
          } = await (0,tree.getTreeList)();
          this.$baseMessage(msg, 'success');
          this.treeDialogVisible = false;
          this.getTreeListFuc(0);
        }
      });
    },
    // 设置节点选中
    setCheckedKeys() {
      this.$refs.demoTree.setCheckedKeys([1]);
    },
    // 点击叶子节点
    nodeClick(data, node, el) {},
    // 节点选中操作
    checkNode(data, node, el) {
      this.checkNodeKeys = node.checkedKeys;
    },
    // 节点展开操作
    nodeExpand(data, node, el) {
      this.defaultExpendedKeys.push(data.id);
    },
    // 节点关闭操作
    nodeCollapse(data, node, el) {
      this.defaultExpendedKeys.splice(this.defaultExpendedKeys.findIndex(item => item.id === data.id), 1);
    },
    async loadNode(node, resolve) {
      if (node.level === 0) {
        const {
          data
        } = await (0,tree.getTreeList)();
        this.loading = false;
        return resolve(data);
      } else {
        const {
          data
        } = await (0,tree.getTreeList)();
        return resolve(res.data);
      }
    },
    //懒加载树输入框筛选方法
    async showTreeList(value) {
      if (typeof value === 'string') {
        this.keyW = value.trim();
      }
      if (this.keyW.length !== 0) {
        // 请求后台返回查询结果
        let treeOption = {};
        treeOption = {
          keyWord: this.keyW
        };
        const {
          data
        } = await (0,tree.getTreeList)();
        this.filterDevLlist = data;
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },
    /* 单选/多选树方法-------------------开始 */
    // 初始化单选树的值
    async initSingleTree(treeType) {
      const {
        data
      } = await (0,tree.getTreeList)();
      this.selectTreeData = data;
      this.$nextTick(() => {
        this.selectTreeDefaultSelectedKeys = this.singleSelectTreeKey.split(','); // 设置默认展开
        if (treeType == 'single') {
          //单选树
          this.$refs.singleSelectTree.setCurrentKey(this.singleSelectTreeKey); // 设置默认选中
        } else {
          // 多选树
          this.$refs.multipleSelectTree.setCheckedKeys(this.selectTreeDefaultSelectedKeys);
        }
      });
    },
    // 清除单选树选中
    selectTreeClearHandle(type) {
      this.selectTreeDefaultSelectedKeys = [];
      this.clearSelected();
      if (type == 'single') {
        this.singleSelectTreeVal = '';
        this.singleSelectTreeKey = '';
        this.$refs.singleSelectTree.setCurrentKey(''); // 设置默认选中
      } else {
        this.multipleSelectTreeVal = [];
        this.multipleSelectTreeKey = '';
        this.$refs.multipleSelectTree.setCheckedKeys([]);
      }
    },
    /* 清空选中样式 */
    clearSelected() {
      const allNode = document.querySelectorAll('#singleSelectTree .el-tree-node');
      allNode.forEach(element => element.classList.remove('is-current'));
    },
    // select多选时移除某项操作
    removeSelectTreeTag(val) {
      const stack = JSON.parse(JSON.stringify(this.selectTreeData));
      while (stack.length) {
        const curr = stack.shift();
        if (curr.name == val) {
          return this.$refs.multipleSelectTree.setChecked(curr.id, false);
        }
        if (curr.children && curr.children.length) {
          stack.unshift(...curr.children);
        }
      }
    },
    changeMultipleSelectTreeHandle(val) {},
    // 点击叶子节点
    selectTreeNodeClick(data, node, el) {
      if (data.rank >= this.selectLevel) {
        this.singleSelectTreeVal = data.name;
        this.singleSelectTreeKey = data.id;
        this.$refs.singleTree.blur();
      }
    },
    // 节点选中操作
    multipleSelectTreeCheckNode(data, node, el) {
      const checkedNodes = this.$refs.multipleSelectTree.getCheckedNodes();
      const keyArr = [];
      const valueArr = [];
      checkedNodes.forEach(item => {
        if (item.rank >= this.selectLevel) {
          keyArr.push(item.id);
          valueArr.push(item.name);
        }
      });
      this.multipleSelectTreeVal = valueArr;
      this.multipleSelectTreeKey = keyArr.join(',');
    }
    /* 单选/多选树方法-------------------结束 */
  }
});
;// CONCATENATED MODULE: ./src/views/vab/tree/index.vue?vue&type=script&lang=js&
 /* ESM default export */ var vab_treevue_type_script_lang_js_ = (treevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(71294);
;// CONCATENATED MODULE: ./src/views/vab/tree/index.vue





/* normalize component */
;
var component = (0,componentNormalizer["default"])(
  vab_treevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* ESM default export */ var vab_tree = (component.exports);

}),

}]);