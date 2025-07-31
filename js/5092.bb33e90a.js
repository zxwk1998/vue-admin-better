"use strict";
(self["webpackChunkvue_admin_better"] = self["webpackChunkvue_admin_better"] || []).push([["5092"], {
44277: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  doDelete: function() { return doDelete; },
  doEdit: function() { return doEdit; },
  getList: function() { return getList; }
});
/* ESM import */var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95508);

function getList(data) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/roleManagement/getList',
    method: 'post',
    data
  });
}
function doEdit(data) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/roleManagement/doEdit',
    method: 'post',
    data
  });
}
function doDelete(data) {
  return (0,_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/roleManagement/doDelete',
    method: 'post',
    data
  });
}

}),
82131: (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_11_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74748);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_11_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_11_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_11_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49490);
/* ESM import */var _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_11_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_11_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_11_webpack_5_100_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_7_1_2_rspack_core_1_4_11_webpack_5_100_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".page-header{background:linear-gradient(135deg, #4d8af0 0%, #1a56db 100%);border-radius:12px;padding:30px;margin-bottom:24px;color:#fff;box-shadow:0 8px 32px rgba(102,126,234,.3)}.page-header .header-content{display:flex;justify-content:space-between;align-items:center}.page-header .header-content .header-left .page-title{font-size:2rem;font-weight:700;margin:0 0 8px 0;display:flex;align-items:center;gap:12px}.page-header .header-content .header-left .page-title .vab-icon{font-size:1.8rem}.page-header .header-content .header-left .page-description{font-size:1rem;opacity:.9;margin:0}.page-header .header-content .header-right{display:flex;align-items:center;gap:8px;font-size:1.1rem;font-weight:600}.page-header .header-content .header-right .vab-icon{font-size:1.3rem}@media(max-width: 768px){.page-header{padding:20px}.page-header .header-content{flex-direction:column;gap:16px;text-align:center}.page-header .header-content .header-left .page-title{font-size:1.5rem}}", ""]);
// Exports
/* ESM default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


}),
19979: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ VabPageHeader; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.11_webpack_e74202fe94519cb18203d881d7737545/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.11_webpack_e74202fe94519cb18203d881d7737545/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/VabPageHeader/index.vue?vue&type=template&id=1775637e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-header",class:_vm.customClass},[_c('div',{staticClass:"header-content"},[_c('div',{staticClass:"header-left"},[_c('h1',{staticClass:"page-title"},[(_vm.icon)?_c('vab-icon',{attrs:{"icon":_vm.icon}}):_vm._e(),_vm._v("\n        "+_vm._s(_vm.title)+"\n      ")],1),(_vm.description)?_c('p',{staticClass:"page-description",domProps:{"innerHTML":_vm._s(_vm.description)}}):_vm._e()]),(_vm.rightIcon || _vm.rightText)?_c('div',{staticClass:"header-right"},[_vm._t("right",function(){return [(_vm.rightIcon)?_c('vab-icon',{attrs:{"icon":_vm.rightIcon}}):_vm._e(),(_vm.rightText)?_c('span',[_vm._v(_vm._s(_vm.rightText))]):_vm._e()]})],2):_vm._e()])])}
var staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@10.0.0_@babel+core@7.23.3_webpack@5.100.1/node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.11_webpack_e74202fe94519cb18203d881d7737545/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/VabPageHeader/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
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
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.4.11_webpack@5.100.1/node_modules/css-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.11_webpack_e74202fe94519cb18203d881d7737545/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/sass-loader@10.4.1_sass@1.32.13_webpack@5.100.1/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[2]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.11_webpack_e74202fe94519cb18203d881d7737545/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/VabPageHeader/index.vue?vue&type=style&index=0&lang=scss&
var VabPageHeadervue_type_style_index_0_lang_scss_ = __webpack_require__(82131);
;// CONCATENATED MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.100.1/node_modules/style-loader/dist/cjs.js!./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.4.11_webpack@5.100.1/node_modules/css-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.11_webpack_e74202fe94519cb18203d881d7737545/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/sass-loader@10.4.1_sass@1.32.13_webpack@5.100.1/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[2]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.11_webpack_e74202fe94519cb18203d881d7737545/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/VabPageHeader/index.vue?vue&type=style&index=0&lang=scss&

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(VabPageHeadervue_type_style_index_0_lang_scss_["default"], options);




       /* ESM default export */ var components_VabPageHeadervue_type_style_index_0_lang_scss_ = (VabPageHeadervue_type_style_index_0_lang_scss_["default"] && VabPageHeadervue_type_style_index_0_lang_scss_["default"].locals ? VabPageHeadervue_type_style_index_0_lang_scss_["default"].locals : undefined);

;// CONCATENATED MODULE: ./src/components/VabPageHeader/index.vue?vue&type=style&index=0&lang=scss&

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.11_webpack_e74202fe94519cb18203d881d7737545/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(74712);
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
46476: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ RoleManagementEdit; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.11_webpack_e74202fe94519cb18203d881d7737545/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.11_webpack_e74202fe94519cb18203d881d7737545/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/personnelManagement/roleManagement/components/RoleManagementEdit.vue?vue&type=template&id=edf530c2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-dialog',{attrs:{"title":_vm.title,"visible":_vm.dialogFormVisible,"width":"500px"},on:{"update:visible":function($event){_vm.dialogFormVisible=$event},"close":_vm.close}},[_c('el-form',{ref:"form",attrs:{"label-width":"80px","model":_vm.form,"rules":_vm.rules}},[_c('el-form-item',{attrs:{"label":"权限码","prop":"permission"}},[_c('el-input',{attrs:{"autocomplete":"off"},model:{value:(_vm.form.permission),callback:function ($$v) {_vm.$set(_vm.form, "permission", $$v)},expression:"form.permission"}})],1)],1),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":_vm.close}},[_vm._v("取 消")]),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.save}},[_vm._v("确 定")])],1)],1)}
var staticRenderFns = []


// EXTERNAL MODULE: ./src/api/roleManagement.js
var roleManagement = __webpack_require__(44277);
;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@10.0.0_@babel+core@7.23.3_webpack@5.100.1/node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.11_webpack_e74202fe94519cb18203d881d7737545/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/personnelManagement/roleManagement/components/RoleManagementEdit.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* ESM default export */ var RoleManagementEditvue_type_script_lang_js_ = ({
  name: 'RoleManagementEdit',
  data() {
    return {
      form: {
        id: ''
      },
      rules: {
        permission: [{
          required: true,
          trigger: 'blur',
          message: '请输入权限码'
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
          } = await (0,roleManagement.doEdit)(this.form);
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
;// CONCATENATED MODULE: ./src/views/personnelManagement/roleManagement/components/RoleManagementEdit.vue?vue&type=script&lang=js&
 /* ESM default export */ var components_RoleManagementEditvue_type_script_lang_js_ = (RoleManagementEditvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.11_webpack_e74202fe94519cb18203d881d7737545/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(74712);
;// CONCATENATED MODULE: ./src/views/personnelManagement/roleManagement/components/RoleManagementEdit.vue





/* normalize component */
;
var component = (0,componentNormalizer["default"])(
  components_RoleManagementEditvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* ESM default export */ var RoleManagementEdit = (component.exports);

}),
69909: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ personnelManagement_roleManagement; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.11_webpack_e74202fe94519cb18203d881d7737545/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.11_webpack_e74202fe94519cb18203d881d7737545/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/personnelManagement/roleManagement/index.vue?vue&type=template&id=c01f9836&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"roleManagement-container"},[_c('vab-page-header',{attrs:{"description":"系统角色权限管理，支持角色的增删改查操作","icon":['fas', 'user-shield'],"title":"角色管理"}}),_c('el-divider',{attrs:{"content-position":"left"}},[_vm._v("\n    演示环境仅做基础功能展示，若想实现不同角色的真实菜单配置，需将settings.js路由加载模式改为all模式，由后端全面接管路由渲染与权限控制\n  ")]),_c('vab-query-form',[_c('vab-query-form-left-panel',{attrs:{"span":12}},[_c('el-button',{attrs:{"icon":"el-icon-plus","type":"primary"},on:{"click":_vm.handleEdit}},[_vm._v("添加")]),_c('el-button',{attrs:{"icon":"el-icon-delete","type":"danger"},on:{"click":_vm.handleDelete}},[_vm._v("批量删除")])],1),_c('vab-query-form-right-panel',{attrs:{"span":12}},[_c('el-form',{attrs:{"inline":true,"model":_vm.queryForm},nativeOn:{"submit":function($event){$event.preventDefault();}}},[_c('el-form-item',[_c('el-input',{attrs:{"clearable":"","placeholder":"请输入查询条件"},model:{value:(_vm.queryForm.permission),callback:function ($$v) {_vm.$set(_vm.queryForm, "permission", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"queryForm.permission"}})],1),_c('el-form-item',[_c('el-button',{attrs:{"icon":"el-icon-search","type":"primary"},on:{"click":_vm.queryData}},[_vm._v("查询")])],1)],1)],1)],1),_c('el-table',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.listLoading),expression:"listLoading"}],attrs:{"data":_vm.list,"element-loading-text":_vm.elementLoadingText},on:{"selection-change":_vm.setSelectRows}},[_c('el-table-column',{attrs:{"show-overflow-tooltip":"","type":"selection"}}),_c('el-table-column',{attrs:{"label":"id","prop":"id","show-overflow-tooltip":""}}),_c('el-table-column',{attrs:{"label":"权限码","prop":"permission","show-overflow-tooltip":""}}),_c('el-table-column',{attrs:{"label":"操作","show-overflow-tooltip":"","width":"200"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var row = ref.row;
return [_c('el-button',{attrs:{"type":"text"},on:{"click":function($event){return _vm.handleEdit(row)}}},[_vm._v("编辑")]),_c('el-button',{attrs:{"type":"text"},on:{"click":function($event){return _vm.handleDelete(row)}}},[_vm._v("删除")])]}}])})],1),_c('el-pagination',{attrs:{"background":"","current-page":_vm.queryForm.pageNo,"layout":_vm.layout,"page-size":_vm.queryForm.pageSize,"total":_vm.total},on:{"current-change":_vm.handleCurrentChange,"size-change":_vm.handleSizeChange}}),_c('edit',{ref:"edit",on:{"fetch-data":_vm.fetchData}})],1)}
var staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.44.0/node_modules/core-js/modules/es.iterator.constructor.js
var es_iterator_constructor = __webpack_require__(46846);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.44.0/node_modules/core-js/modules/es.iterator.map.js
var es_iterator_map = __webpack_require__(20429);
// EXTERNAL MODULE: ./src/api/roleManagement.js
var roleManagement = __webpack_require__(44277);
// EXTERNAL MODULE: ./src/views/personnelManagement/roleManagement/components/RoleManagementEdit.vue + 3 modules
var RoleManagementEdit = __webpack_require__(46476);
// EXTERNAL MODULE: ./src/components/VabPageHeader/index.vue + 5 modules
var VabPageHeader = __webpack_require__(19979);
;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@10.0.0_@babel+core@7.23.3_webpack@5.100.1/node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.11_webpack_e74202fe94519cb18203d881d7737545/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/personnelManagement/roleManagement/index.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* ESM default export */ var roleManagementvue_type_script_lang_js_ = ({
  name: 'RoleManagement',
  components: {
    Edit: RoleManagementEdit["default"],
    VabPageHeader: VabPageHeader["default"]
  },
  data() {
    return {
      list: null,
      listLoading: true,
      layout: 'total, sizes, prev, pager, next, jumper',
      total: 0,
      selectRows: '',
      elementLoadingText: '正在加载...',
      queryForm: {
        pageNo: 1,
        pageSize: 10,
        permission: ''
      },
      timeOutID: null
    };
  },
  created() {
    this.fetchData();
  },
  beforeDestroy() {
    clearTimeout(this.timeOutID);
  },
  methods: {
    setSelectRows(val) {
      this.selectRows = val;
    },
    handleEdit(row) {
      if (row.id) {
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
          } = await (0,roleManagement.doDelete)({
            ids: row.id
          });
          this.$baseMessage(msg, 'success');
          this.fetchData();
        });
      } else {
        if (this.selectRows.length > 0) {
          const ids = this.selectRows.map(item => item.id).join();
          this.$baseConfirm('你确定要删除选中项吗', null, async () => {
            const {
              msg
            } = await (0,roleManagement.doDelete)({
              ids
            });
            this.$baseMessage(msg, 'success');
            this.fetchData();
          });
        } else {
          this.$baseMessage('未选中任何行', 'error');
          return false;
        }
      }
    },
    handleSizeChange(val) {
      this.queryForm.pageSize = val;
      this.fetchData();
    },
    handleCurrentChange(val) {
      this.queryForm.pageNo = val;
      this.fetchData();
    },
    queryData() {
      this.queryForm.pageNo = 1;
      this.fetchData();
    },
    async fetchData() {
      this.listLoading = true;
      const {
        data,
        totalCount
      } = await (0,roleManagement.getList)(this.queryForm);
      this.list = data;
      this.total = totalCount;
      this.timeOutID = setTimeout(() => {
        this.listLoading = false;
      }, 300);
    }
  }
});
;// CONCATENATED MODULE: ./src/views/personnelManagement/roleManagement/index.vue?vue&type=script&lang=js&
 /* ESM default export */ var personnelManagement_roleManagementvue_type_script_lang_js_ = (roleManagementvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.11_webpack_e74202fe94519cb18203d881d7737545/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(74712);
;// CONCATENATED MODULE: ./src/views/personnelManagement/roleManagement/index.vue





/* normalize component */
;
var component = (0,componentNormalizer["default"])(
  personnelManagement_roleManagementvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* ESM default export */ var personnelManagement_roleManagement = (component.exports);

}),

}]);