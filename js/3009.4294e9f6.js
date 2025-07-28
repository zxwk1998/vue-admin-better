"use strict";
(self["webpackChunkvue_admin_better"] = self["webpackChunkvue_admin_better"] || []).push([["3009"], {
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
57050: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ MenuManagementEdit; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/personnelManagement/menuManagement/components/MenuManagementEdit.vue?vue&type=template&id=425306d4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-dialog',{attrs:{"title":_vm.title,"visible":_vm.dialogFormVisible,"width":"500px"},on:{"update:visible":function($event){_vm.dialogFormVisible=$event},"close":_vm.close}},[_c('el-divider',{attrs:{"content-position":"left"}},[_vm._v("这里就不具体写了，请自行完善")]),_c('el-form',{ref:"form",attrs:{"label-width":"80px","model":_vm.form,"rules":_vm.rules}},[_c('el-form-item',{attrs:{"label":"name","prop":"name"}},[_c('el-input',{attrs:{"autocomplete":"off"},model:{value:(_vm.form.name),callback:function ($$v) {_vm.$set(_vm.form, "name", $$v)},expression:"form.name"}})],1),_c('el-form-item',{attrs:{"label":"路径","prop":"path"}},[_c('el-input',{attrs:{"autocomplete":"off"},model:{value:(_vm.form.path),callback:function ($$v) {_vm.$set(_vm.form, "path", $$v)},expression:"form.path"}})],1)],1),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":_vm.close}},[_vm._v("取 消")]),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.save}},[_vm._v("确 定")])],1)],1)}
var staticRenderFns = []


// EXTERNAL MODULE: ./src/api/menuManagement.js
var menuManagement = __webpack_require__(61953);
;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@10.0.0_@babel+core@7.23.3_webpack@5.100.1/node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/personnelManagement/menuManagement/components/MenuManagementEdit.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* ESM default export */ var MenuManagementEditvue_type_script_lang_js_ = ({
  name: 'MenuManagementEdit',
  data() {
    return {
      form: {},
      rules: {
        id: [{
          required: true,
          trigger: 'blur',
          message: '请输入路径'
        }]
      },
      title: '',
      dialogFormVisible: false
    };
  },
  created() {},
  methods: {
    showEdit(row) {
      if (!row) {
        this.title = '添加';
      } else {
        this.title = '编辑';
        this.form = Object.assign({}, row);
      }
      this.dialogFormVisible = true;
    },
    close() {
      this.$refs['form'].resetFields();
      this.form = this.$options.data().form;
      this.dialogFormVisible = false;
    },
    save() {
      this.$refs['form'].validate(async valid => {
        if (valid) {
          const {
            msg
          } = await (0,menuManagement.doEdit)(this.form);
          this.$baseMessage(msg, 'success');
          this.$emit('fetch-data');
          this.close();
        } else {
          return false;
        }
      });
    }
  }
});
;// CONCATENATED MODULE: ./src/views/personnelManagement/menuManagement/components/MenuManagementEdit.vue?vue&type=script&lang=js&
 /* ESM default export */ var components_MenuManagementEditvue_type_script_lang_js_ = (MenuManagementEditvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(71294);
;// CONCATENATED MODULE: ./src/views/personnelManagement/menuManagement/components/MenuManagementEdit.vue





/* normalize component */
;
var component = (0,componentNormalizer["default"])(
  components_MenuManagementEditvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* ESM default export */ var MenuManagementEdit = (component.exports);

}),
56831: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ personnelManagement_menuManagement; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/personnelManagement/menuManagement/index.vue?vue&type=template&id=2c16e50b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"menuManagement-container"},[_c('vab-page-header',{attrs:{"description":"系统菜单配置管理，支持菜单的增删改查操作","icon":['fas', 'bars'],"title":"菜单管理"}}),_c('el-divider',{attrs:{"content-position":"left"}},[_vm._v("\n    演示环境仅做基础功能展示，若想实现不同角色的真实菜单配置，需将settings.js路由加载模式改为all模式，由后端全面接管路由渲染与权限控制\n  ")]),_c('el-row',[_c('el-col',{attrs:{"lg":4,"md":8,"sm":24,"xl":4,"xs":24}},[_c('el-tree',{attrs:{"data":_vm.data,"default-expanded-keys":['root'],"node-key":"id","props":_vm.defaultProps},on:{"node-click":_vm.handleNodeClick}})],1),_c('el-col',{attrs:{"lg":20,"md":16,"sm":24,"xl":20,"xs":24}},[_c('vab-query-form',[_c('vab-query-form-top-panel',{attrs:{"span":12}},[_c('el-button',{attrs:{"icon":"el-icon-plus","type":"primary"},on:{"click":_vm.handleEdit}},[_vm._v("添加")])],1)],1),_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.listLoading),expression:"listLoading"}],attrs:{"border":"","data":_vm.list,"default-expand-all":"","element-loading-text":_vm.elementLoadingText,"row-key":"path","tree-props":{ children: 'children', hasChildren: 'hasChildren' }}},[_c('el-table-column',{attrs:{"label":"name","prop":"name","show-overflow-tooltip":""}}),_c('el-table-column',{attrs:{"label":"路径","prop":"path","show-overflow-tooltip":""}}),_c('el-table-column',{attrs:{"label":"是否隐藏","show-overflow-tooltip":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return [_c('span',[_vm._v("\n              "+_vm._s(row.hidden ? '是' : '否')+"\n            ")])]}}])}),_c('el-table-column',{attrs:{"label":"是否一直显示当前节点","show-overflow-tooltip":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return [_c('span',[_vm._v("\n              "+_vm._s(row.alwaysShow ? '是' : '否')+"\n            ")])]}}])}),_c('el-table-column',{attrs:{"label":"vue文件路径","prop":"component","show-overflow-tooltip":""}}),_c('el-table-column',{attrs:{"label":"重定向","prop":"redirect","show-overflow-tooltip":""}}),_c('el-table-column',{attrs:{"label":"标题","prop":"meta.title","show-overflow-tooltip":""}}),_c('el-table-column',{attrs:{"label":"图标","show-overflow-tooltip":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return [(row.meta)?_c('span',[(row.meta.icon)?_c('vab-icon',{attrs:{"icon":['fas', row.meta.icon]}}):_vm._e()],1):_vm._e()]}}])}),_c('el-table-column',{attrs:{"label":"是否固定","show-overflow-tooltip":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return [(row.meta)?_c('span',[_vm._v("\n              "+_vm._s(row.meta.affix ? '是' : '否')+"\n            ")]):_vm._e()]}}])}),_c('el-table-column',{attrs:{"label":"是否无缓存","show-overflow-tooltip":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return [(row.meta)?_c('span',[_vm._v("\n              "+_vm._s(row.meta.noKeepAlive ? '是' : '否')+"\n            ")]):_vm._e()]}}])}),_c('el-table-column',{attrs:{"label":"badge","show-overflow-tooltip":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return [(row.meta)?_c('span',[_vm._v("\n              "+_vm._s(row.meta.badge)+"\n            ")]):_vm._e()]}}])}),_c('el-table-column',{attrs:{"label":"操作","show-overflow-tooltip":"","width":"200"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return [_c('el-button',{attrs:{"type":"text"},on:{"click":function($event){return _vm.handleEdit(row)}}},[_vm._v("编辑")]),_c('el-button',{attrs:{"type":"text"},on:{"click":function($event){return _vm.handleDelete(row)}}},[_vm._v("删除")])]}}])})],1)],1)],1),_c('edit',{ref:"edit",on:{"fetch-data":_vm.fetchData}})],1)}
var staticRenderFns = []


// EXTERNAL MODULE: ./src/api/router.js
var router = __webpack_require__(74277);
// EXTERNAL MODULE: ./src/api/menuManagement.js
var menuManagement = __webpack_require__(61953);
// EXTERNAL MODULE: ./src/views/personnelManagement/menuManagement/components/MenuManagementEdit.vue + 3 modules
var MenuManagementEdit = __webpack_require__(57050);
// EXTERNAL MODULE: ./src/components/VabPageHeader/index.vue + 5 modules
var VabPageHeader = __webpack_require__(49505);
;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@10.0.0_@babel+core@7.23.3_webpack@5.100.1/node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/personnelManagement/menuManagement/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* ESM default export */ var menuManagementvue_type_script_lang_js_ = ({
  name: 'MenuManagement',
  components: {
    Edit: MenuManagementEdit["default"],
    VabPageHeader: VabPageHeader["default"]
  },
  data() {
    return {
      data: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      list: [],
      listLoading: true,
      elementLoadingText: '正在加载...',
      timeOutID: null
    };
  },
  async created() {
    const roleData = await (0,menuManagement.getTree)();
    this.data = roleData.data;
    this.fetchData();
  },
  beforeDestroy() {
    clearTimeout(this.timeOutID);
  },
  methods: {
    handleEdit(row) {
      if (row.path) {
        this.$refs['edit'].showEdit(row);
      } else {
        this.$refs['edit'].showEdit();
      }
    },
    handleDelete(row) {
      if (row.id) {
        this.$baseConfirm('你确定要删除当前项吗', null, async () => {
          const {
            msg
          } = await (0,menuManagement.doDelete)({
            ids: row.id
          });
          this.$baseMessage(msg, 'success');
          this.fetchData();
        });
      }
    },
    async fetchData() {
      this.listLoading = true;
      const {
        data
      } = await (0,router.getRouterList)();
      this.list = data;
      this.timeOutID = setTimeout(() => {
        this.listLoading = false;
      }, 300);
    },
    handleNodeClick() {
      this.fetchData();
    }
  }
});
;// CONCATENATED MODULE: ./src/views/personnelManagement/menuManagement/index.vue?vue&type=script&lang=js&
 /* ESM default export */ var personnelManagement_menuManagementvue_type_script_lang_js_ = (menuManagementvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(71294);
;// CONCATENATED MODULE: ./src/views/personnelManagement/menuManagement/index.vue





/* normalize component */
;
var component = (0,componentNormalizer["default"])(
  personnelManagement_menuManagementvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* ESM default export */ var personnelManagement_menuManagement = (component.exports);

}),

}]);