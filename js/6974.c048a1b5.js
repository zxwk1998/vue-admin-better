"use strict";
(self["webpackChunkvue_admin_better"] = self["webpackChunkvue_admin_better"] || []).push([["6974"], {
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
84863: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ vab_form; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/vab/form/index.vue?vue&type=template&id=dfc15e3a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-container"},[_c('vab-page-header',{attrs:{"description":"Element UI 表单组件的使用示例，包含验证、重置等功能","icon":['fas', 'edit'],"title":"表单组件"}}),_c('el-row',{attrs:{"gutter":20}},[_c('el-col',{attrs:{"lg":8,"md":12,"sm":24,"xl":8,"xs":24}},[_c('el-form',{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{"label-width":"100px","model":_vm.ruleForm,"rules":_vm.rules}},[_c('el-form-item',{attrs:{"label":"活动名称","prop":"name"}},[_c('el-input',{model:{value:(_vm.ruleForm.name),callback:function ($$v) {_vm.$set(_vm.ruleForm, "name", $$v)},expression:"ruleForm.name"}})],1),_c('el-form-item',{attrs:{"label":"活动区域","prop":"region"}},[_c('el-select',{attrs:{"placeholder":"请选择活动区域"},model:{value:(_vm.ruleForm.region),callback:function ($$v) {_vm.$set(_vm.ruleForm, "region", $$v)},expression:"ruleForm.region"}},[_c('el-option',{attrs:{"label":"区域一","value":"shanghai"}}),_c('el-option',{attrs:{"label":"区域二","value":"beijing"}})],1)],1),_c('el-form-item',{attrs:{"label":"即时配送","prop":"delivery"}},[_c('el-switch',{model:{value:(_vm.ruleForm.delivery),callback:function ($$v) {_vm.$set(_vm.ruleForm, "delivery", $$v)},expression:"ruleForm.delivery"}})],1),_c('el-form-item',{attrs:{"label":"活动性质","prop":"type"}},[_c('el-checkbox-group',{model:{value:(_vm.ruleForm.type),callback:function ($$v) {_vm.$set(_vm.ruleForm, "type", $$v)},expression:"ruleForm.type"}},[_c('el-checkbox',{attrs:{"label":"美食/餐厅线上活动","name":"type"}}),_c('el-checkbox',{attrs:{"label":"地推活动","name":"type"}}),_c('el-checkbox',{attrs:{"label":"线下主题活动","name":"type"}}),_c('el-checkbox',{attrs:{"label":"单纯品牌曝光","name":"type"}})],1)],1),_c('el-form-item',{attrs:{"label":"特殊资源","prop":"resource"}},[_c('el-radio-group',{model:{value:(_vm.ruleForm.resource),callback:function ($$v) {_vm.$set(_vm.ruleForm, "resource", $$v)},expression:"ruleForm.resource"}},[_c('el-radio',{attrs:{"label":"线上品牌商赞助"}}),_c('el-radio',{attrs:{"label":"线下场地免费"}})],1)],1),_c('el-form-item',{attrs:{"label":"活动形式","prop":"desc"}},[_c('el-input',{attrs:{"type":"textarea"},model:{value:(_vm.ruleForm.desc),callback:function ($$v) {_vm.$set(_vm.ruleForm, "desc", $$v)},expression:"ruleForm.desc"}})],1),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){return _vm.submitForm('ruleForm')}}},[_vm._v("立即创建")]),_c('el-button',{on:{"click":function($event){return _vm.resetForm('ruleForm')}}},[_vm._v("重置")])],1)],1)],1)],1)],1)}
var staticRenderFns = []


// EXTERNAL MODULE: ./src/components/VabPageHeader/index.vue + 5 modules
var VabPageHeader = __webpack_require__(49505);
;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@10.0.0_@babel+core@7.23.3_webpack@5.100.1/node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/vab/form/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* ESM default export */ var formvue_type_script_lang_js_ = ({
  name: 'Form',
  components: {
    VabPageHeader: VabPageHeader["default"]
  },
  data() {
    return {
      ruleForm: {
        name: '',
        region: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [{
          required: true,
          message: '请输入活动名称',
          trigger: 'blur'
        }, {
          min: 3,
          max: 5,
          message: '长度在 3 到 5 个字符',
          trigger: 'blur'
        }],
        region: [{
          required: true,
          message: '请选择活动区域',
          trigger: 'change'
        }],
        type: [{
          type: 'array',
          required: true,
          message: '请至少选择一个活动性质',
          trigger: 'change'
        }],
        resource: [{
          required: true,
          message: '请选择活动资源',
          trigger: 'change'
        }],
        desc: [{
          required: true,
          message: '请填写活动形式',
          trigger: 'blur'
        }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!');
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
});
;// CONCATENATED MODULE: ./src/views/vab/form/index.vue?vue&type=script&lang=js&
 /* ESM default export */ var vab_formvue_type_script_lang_js_ = (formvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.17_css-loader@7.1.2_@rspack+core@1.4.10_webpack_7c2248ad496371444e09c1cf38d8ad44/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(71294);
;// CONCATENATED MODULE: ./src/views/vab/form/index.vue





/* normalize component */
;
var component = (0,componentNormalizer["default"])(
  vab_formvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* ESM default export */ var vab_form = (component.exports);

}),

}]);