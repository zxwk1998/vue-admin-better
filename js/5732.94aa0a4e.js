/*!
 * vue-admin-better
 * GitHub: https://github.com/zxwk1998/vue-admin-better
 * Gitee: https://gitee.com/chu1204505056/vue-admin-better
 *
 * 版权所有 (c) 2025 vue-admin-better
 * 本项目使用 MIT 许可证
 * 构建时间: 2025-12-22 10:58:04
 */
"use strict";
(self["webpackChunkvue_admin_better"] = self["webpackChunkvue_admin_better"] || []).push([["5732"], {
37640: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  doDelete: function() { return doDelete; },
  doEdit: function() { return doEdit; },
  getList: function() { return getList; }
});
/* import */ var _utils_request__rspack_import_0 = __webpack_require__(51860);

function getList(data) {
  return (0,_utils_request__rspack_import_0["default"])({
    url: '/table/getList',
    method: 'post',
    data
  });
}
function doEdit(data) {
  return (0,_utils_request__rspack_import_0["default"])({
    url: '/table/doEdit',
    method: 'post',
    data
  });
}
function doDelete(data) {
  return (0,_utils_request__rspack_import_0["default"])({
    url: '/table/doDelete',
    method: 'post',
    data
  });
}

}),
93359: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ TableEdit; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.26_css-loader@7.1.2_@rspack+core@1.6.8_webpack@_627e006248d04719becae5a8a0ffece3/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.26_css-loader@7.1.2_@rspack+core@1.6.8_webpack@_627e006248d04719becae5a8a0ffece3/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/vab/table/components/TableEdit.vue?vue&type=template&id=8da4573c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-dialog',{attrs:{"title":_vm.title,"visible":_vm.dialogFormVisible,"width":"500px"},on:{"update:visible":function($event){_vm.dialogFormVisible=$event},"close":_vm.close}},[_c('el-form',{ref:"form",attrs:{"label-width":"80px","model":_vm.form,"rules":_vm.rules}},[_c('el-form-item',{attrs:{"label":"标题","prop":"title"}},[_c('el-input',{attrs:{"autocomplete":"off"},model:{value:(_vm.form.title),callback:function ($$v) {_vm.$set(_vm.form, "title", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"form.title"}})],1),_c('el-form-item',{attrs:{"label":"作者","prop":"author"}},[_c('el-input',{attrs:{"autocomplete":"off"},model:{value:(_vm.form.author),callback:function ($$v) {_vm.$set(_vm.form, "author", (typeof $$v === 'string'? $$v.trim(): $$v))},expression:"form.author"}})],1)],1),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":_vm.close}},[_vm._v("取 消")]),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.save}},[_vm._v("确 定")])],1)],1)}
var staticRenderFns = []


// EXTERNAL MODULE: ./src/api/table.js
var table = __webpack_require__(37640);
;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@10.0.0_@babel+core@7.28.5_webpack@5.104.1/node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use!./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.26_css-loader@7.1.2_@rspack+core@1.6.8_webpack@_627e006248d04719becae5a8a0ffece3/node_modules/vue-loader/lib/index.js??vue-loader-options!./src/views/vab/table/components/TableEdit.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* export default */ var TableEditvue_type_script_lang_js_ = ({
  name: 'TableEdit',
  data() {
    return {
      form: {
        title: '',
        author: ''
      },
      rules: {
        title: [{
          required: true,
          trigger: 'blur',
          message: '请输入标题'
        }],
        author: [{
          required: true,
          trigger: 'blur',
          message: '请输入作者'
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
      this.$emit('fetch-data');
    },
    save() {
      this.$refs['form'].validate(async valid => {
        if (valid) {
          const {
            msg
          } = await (0,table.doEdit)(this.form);
          this.$baseMessage(msg, 'success');
          this.$refs['form'].resetFields();
          this.dialogFormVisible = false;
          this.$emit('fetch-data');
          this.form = this.$options.data().form;
        } else {
          return false;
        }
      });
    }
  }
});
;// CONCATENATED MODULE: ./src/views/vab/table/components/TableEdit.vue?vue&type=script&lang=js&
 /* export default */ var components_TableEditvue_type_script_lang_js_ = (TableEditvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@15.9.8_@vue+compiler-sfc@3.5.26_css-loader@7.1.2_@rspack+core@1.6.8_webpack@_627e006248d04719becae5a8a0ffece3/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(42574);
;// CONCATENATED MODULE: ./src/views/vab/table/components/TableEdit.vue





/* normalize component */
;
var component = (0,componentNormalizer["default"])(
  components_TableEditvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* export default */ var TableEdit = (component.exports);

}),

}]);