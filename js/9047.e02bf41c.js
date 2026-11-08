/*!
 * vue-admin-better
 * GitHub: https://github.com/zxwk1998/vue-admin-better
 * Gitee: https://gitee.com/chu1204505056/vue-admin-better
 *
 * 版权所有 (c) 2025 vue-admin-better
 * 本项目使用 MIT 许可证
 * 构建时间: 2026-11-8 08:24:59
 */
"use strict";
(self["rspackChunkvue_admin_better"] = self["rspackChunkvue_admin_better"] || []).push([[9047], {
7308: (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var _node_modules_pnpm_css_loader_7_1_5_rspack_core_2_3_1_webpack_5_112_0_clean_css_5_3_3_cssnano_5_1_15_post_febb2288d7899141871e91de754b8b49_node_modules_css_loader_dist_runtime_noSourceMaps_js__rspack_import_1 = __webpack_require__(55489);
/* import */ var _node_modules_pnpm_css_loader_7_1_5_rspack_core_2_3_1_webpack_5_112_0_clean_css_5_3_3_cssnano_5_1_15_post_febb2288d7899141871e91de754b8b49_node_modules_css_loader_dist_runtime_noSourceMaps_js__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_5_rspack_core_2_3_1_webpack_5_112_0_clean_css_5_3_3_cssnano_5_1_15_post_febb2288d7899141871e91de754b8b49_node_modules_css_loader_dist_runtime_noSourceMaps_js__rspack_import_1);
/* import */ var _node_modules_pnpm_css_loader_7_1_5_rspack_core_2_3_1_webpack_5_112_0_clean_css_5_3_3_cssnano_5_1_15_post_febb2288d7899141871e91de754b8b49_node_modules_css_loader_dist_runtime_api_js__rspack_import_0 = __webpack_require__(78122);
/* import */ var _node_modules_pnpm_css_loader_7_1_5_rspack_core_2_3_1_webpack_5_112_0_clean_css_5_3_3_cssnano_5_1_15_post_febb2288d7899141871e91de754b8b49_node_modules_css_loader_dist_runtime_api_js__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_5_rspack_core_2_3_1_webpack_5_112_0_clean_css_5_3_3_cssnano_5_1_15_post_febb2288d7899141871e91de754b8b49_node_modules_css_loader_dist_runtime_api_js__rspack_import_0);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_5_rspack_core_2_3_1_webpack_5_112_0_clean_css_5_3_3_cssnano_5_1_15_post_febb2288d7899141871e91de754b8b49_node_modules_css_loader_dist_runtime_api_js__rspack_import_0_default()((_node_modules_pnpm_css_loader_7_1_5_rspack_core_2_3_1_webpack_5_112_0_clean_css_5_3_3_cssnano_5_1_15_post_febb2288d7899141871e91de754b8b49_node_modules_css_loader_dist_runtime_noSourceMaps_js__rspack_import_1_default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".el-scrollbar .el-scrollbar__view .el-select-dropdown__item[data-v-ce773bb0]{height:auto;max-height:274px;padding:0;overflow-y:auto}.el-select-dropdown__item.selected[data-v-ce773bb0]{font-weight:normal}ul li>.el-tree .el-tree-node__content[data-v-ce773bb0]{height:auto;padding:0 20px}.el-tree-node__label[data-v-ce773bb0]{font-weight:normal}.el-tree>.is-current .el-tree-node__label[data-v-ce773bb0]{font-weight:700;color:#409eff}.el-tree>.is-current .el-tree-node__children .el-tree-node__label[data-v-ce773bb0]{font-weight:normal;color:#606266}", ""]);
// Exports
/* export default */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


}),
69514: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ SelectTree; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.44_css-loader@7.1.5_@rspack+core@2.3.1_webpack@_b2cbf52322a1d49b31c7b4debdc3f48e/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.44_css-loader@7.1.5_@rspack+core@2.3.1_webpack@_b2cbf52322a1d49b31c7b4debdc3f48e/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/SelectTree/index.vue?vue&type=template&id=ce773bb0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"select-tree-template"},[_c('el-select',{staticClass:"vab-tree-select",attrs:{"clearable":_vm.clearable,"collapse-tags":_vm.selectType == 'multiple',"multiple":_vm.selectType == 'multiple',"value-key":"id"},on:{"clear":_vm.clearHandle,"remove-tag":_vm.removeTag},model:{value:(_vm.selectValue),callback:function ($$v) {_vm.selectValue=$$v},expression:"selectValue"}},[_c('el-option',{attrs:{"value":_vm.selectKey}},[_c('el-tree',{ref:"treeOption",attrs:{"id":"treeOption","current-node-key":_vm.currentNodeKey,"data":_vm.treeOptions,"default-checked-keys":_vm.defaultSelectedKeys,"default-expanded-keys":_vm.defaultSelectedKeys,"highlight-current":true,"node-key":"id","props":_vm.defaultProps,"show-checkbox":_vm.selectType == 'multiple'},on:{"check":_vm.checkNode,"node-click":_vm.nodeClick}})],1)],1)],1)}
var staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(99260);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/modules/es.iterator.constructor.js
var es_iterator_constructor = __webpack_require__(65649);
// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/modules/es.iterator.for-each.js
var es_iterator_for_each = __webpack_require__(62922);
;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@10.1.1_@babel+core@7.29.7_supports-color@8.1.1__@rspack+core@2.3.1_webpack_df2a69db421704a5dc28c732247d8bf3/node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.44_css-loader@7.1.5_@rspack+core@2.3.1_webpack@_b2cbf52322a1d49b31c7b4debdc3f48e/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/SelectTree/index.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* export default */ var SelectTreevue_type_script_lang_js_ = ({
  name: 'SelectTreeTemplate',
  props: {
    /* 树形结构数据 */
    treeOptions: {
      type: Array,
      default: () => {
        return [];
      }
    },
    /* 单选/多选 */
    selectType: {
      type: String,
      default: () => {
        return 'single';
      }
    },
    /* 初始选中值key */
    selectedKey: {
      type: String,
      default: () => {
        return '';
      }
    },
    /* 初始选中值name */
    selectedValue: {
      type: String,
      default: () => {
        return '';
      }
    },
    /* 可做选择的层级 */
    selectLevel: {
      type: [String, Number],
      default: () => {
        return '';
      }
    },
    /* 可清空选项 */
    clearable: {
      type: Boolean,
      default: () => {
        return true;
      }
    }
  },
  data() {
    return {
      defaultProps: {
        children: 'children',
        label: 'name'
      },
      defaultSelectedKeys: [],
      //初始选中值数组
      currentNodeKey: this.selectedKey,
      selectValue: this.selectType == 'multiple' ? this.selectedValue.split(',') : this.selectedValue,
      //下拉框选中值label
      selectKey: this.selectType == 'multiple' ? this.selectedKey.split(',') : this.selectedKey //下拉框选中值value
    };
  },
  mounted() {
    this.initTree();
  },
  methods: {
    // 初始化树的值
    initTree() {
      const that = this;
      if (that.selectedKey) {
        that.defaultSelectedKeys = that.selectedKey.split(','); // 设置默认展开
        if (that.selectType == 'single') {
          that.$refs.treeOption.setCurrentKey(that.selectedKey); // 设置默认选中
        } else {
          that.$refs.treeOption.setCheckedKeys(that.defaultSelectedKeys);
        }
      }
    },
    // 清除选中
    clearHandle() {
      const that = this;
      this.selectValue = '';
      this.selectKey = '';
      this.defaultSelectedKeys = [];
      this.currentNodeKey = '';
      this.clearSelected();
      if (that.selectType == 'single') {
        that.$refs.treeOption.setCurrentKey(''); // 设置默认选中
      } else {
        that.$refs.treeOption.setCheckedKeys([]);
      }
    },
    /* 清空选中样式 */
    clearSelected() {
      const allNode = document.querySelectorAll('#treeOption .el-tree-node');
      allNode.forEach(element => element.classList.remove('is-current'));
    },
    // select多选时移除某项操作
    removeTag() {
      this.$refs.treeOption.setCheckedKeys([]);
    },
    // 点击叶子节点
    nodeClick(data) {
      if (data.rank >= this.selectLevel) {
        this.selectValue = data.name;
        this.selectKey = data.id;
      }
    },
    // 节点选中操作
    checkNode() {
      const checkedNodes = this.$refs.treeOption.getCheckedNodes();
      const keyArr = [];
      const valueArr = [];
      checkedNodes.forEach(item => {
        if (item.rank >= this.selectLevel) {
          keyArr.push(item.id);
          valueArr.push(item.name);
        }
      });
      this.selectValue = valueArr;
      this.selectKey = keyArr;
    }
  }
});
;// CONCATENATED MODULE: ./src/components/SelectTree/index.vue?vue&type=script&lang=js&
 /* export default */ var components_SelectTreevue_type_script_lang_js_ = (SelectTreevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.112.0_clean-css@5.3.3_cssnano@5.1.15_postcss@8.5.31__csso@_5e4648e6e53b394848c19cc80c3de11a/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(74274);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.112.0_clean-css@5.3.3_cssnano@5.1.15_postcss@8.5.31__csso@_5e4648e6e53b394848c19cc80c3de11a/node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(91363);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.112.0_clean-css@5.3.3_cssnano@5.1.15_postcss@8.5.31__csso@_5e4648e6e53b394848c19cc80c3de11a/node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(90353);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.112.0_clean-css@5.3.3_cssnano@5.1.15_postcss@8.5.31__csso@_5e4648e6e53b394848c19cc80c3de11a/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(60794);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.112.0_clean-css@5.3.3_cssnano@5.1.15_postcss@8.5.31__csso@_5e4648e6e53b394848c19cc80c3de11a/node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(74310);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.112.0_clean-css@5.3.3_cssnano@5.1.15_postcss@8.5.31__csso@_5e4648e6e53b394848c19cc80c3de11a/node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(89211);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@7.1.5_@rspack+core@2.3.1_webpack@5.112.0_clean-css@5.3.3_cssnano@5.1.15_post_febb2288d7899141871e91de754b8b49/node_modules/css-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.44_css-loader@7.1.5_@rspack+core@2.3.1_webpack@_b2cbf52322a1d49b31c7b4debdc3f48e/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/sass-loader@10.5.2_sass@1.32.13_webpack@5.112.0_clean-css@5.3.3_cssnano@5.1.15_postcss@_1cefcce83fe5cdf20bc5cc3c32a7e699/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[2]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.44_css-loader@7.1.5_@rspack+core@2.3.1_webpack@_b2cbf52322a1d49b31c7b4debdc3f48e/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/SelectTree/index.vue?vue&type=style&index=0&id=ce773bb0&lang=scss&scoped=true&
var SelectTreevue_type_style_index_0_id_ce773bb0_lang_scss_scoped_true_ = __webpack_require__(7308);
;// CONCATENATED MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.112.0_clean-css@5.3.3_cssnano@5.1.15_postcss@8.5.31__csso@_5e4648e6e53b394848c19cc80c3de11a/node_modules/style-loader/dist/cjs.js!./node_modules/.pnpm/css-loader@7.1.5_@rspack+core@2.3.1_webpack@5.112.0_clean-css@5.3.3_cssnano@5.1.15_post_febb2288d7899141871e91de754b8b49/node_modules/css-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[1]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.44_css-loader@7.1.5_@rspack+core@2.3.1_webpack@_b2cbf52322a1d49b31c7b4debdc3f48e/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/sass-loader@10.5.2_sass@1.32.13_webpack@5.112.0_clean-css@5.3.3_cssnano@5.1.15_postcss@_1cefcce83fe5cdf20bc5cc3c32a7e699/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[2]!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.44_css-loader@7.1.5_@rspack+core@2.3.1_webpack@_b2cbf52322a1d49b31c7b4debdc3f48e/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/SelectTree/index.vue?vue&type=style&index=0&id=ce773bb0&lang=scss&scoped=true&

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(SelectTreevue_type_style_index_0_id_ce773bb0_lang_scss_scoped_true_["default"], options);




       /* export default */ var components_SelectTreevue_type_style_index_0_id_ce773bb0_lang_scss_scoped_true_ = (SelectTreevue_type_style_index_0_id_ce773bb0_lang_scss_scoped_true_["default"] && SelectTreevue_type_style_index_0_id_ce773bb0_lang_scss_scoped_true_["default"].locals ? SelectTreevue_type_style_index_0_id_ce773bb0_lang_scss_scoped_true_["default"].locals : undefined);

;// CONCATENATED MODULE: ./src/components/SelectTree/index.vue?vue&type=style&index=0&id=ce773bb0&lang=scss&scoped=true&

// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.44_css-loader@7.1.5_@rspack+core@2.3.1_webpack@_b2cbf52322a1d49b31c7b4debdc3f48e/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(61808);
;// CONCATENATED MODULE: ./src/components/SelectTree/index.vue



;


/* normalize component */

var component = (0,componentNormalizer["default"])(
  components_SelectTreevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "ce773bb0",
  null
  
)

/* export default */ var SelectTree = (component.exports);

}),

}]);