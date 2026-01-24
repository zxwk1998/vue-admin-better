/*!
 * vue-admin-better
 * GitHub: https://github.com/zxwk1998/vue-admin-better
 * Gitee: https://gitee.com/chu1204505056/vue-admin-better
 *
 * 版权所有 (c) 2025 vue-admin-better
 * 本项目使用 MIT 许可证
 * 构建时间: 2026-1-24 09:38:17
 */
"use strict";
(self["webpackChunkvue_admin_better"] = self["webpackChunkvue_admin_better"] || []).push([["6304"], {
2492: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  __assign: function() { return __assign; },
  __asyncDelegator: function() { return __asyncDelegator; },
  __asyncGenerator: function() { return __asyncGenerator; },
  __asyncValues: function() { return __asyncValues; },
  __await: function() { return __await; },
  __awaiter: function() { return __awaiter; },
  __classPrivateFieldGet: function() { return __classPrivateFieldGet; },
  __classPrivateFieldSet: function() { return __classPrivateFieldSet; },
  __createBinding: function() { return __createBinding; },
  __decorate: function() { return __decorate; },
  __exportStar: function() { return __exportStar; },
  __extends: function() { return __extends; },
  __generator: function() { return __generator; },
  __importDefault: function() { return __importDefault; },
  __importStar: function() { return __importStar; },
  __makeTemplateObject: function() { return __makeTemplateObject; },
  __metadata: function() { return __metadata; },
  __param: function() { return __param; },
  __read: function() { return __read; },
  __rest: function() { return __rest; },
  __spread: function() { return __spread; },
  __spreadArray: function() { return __spreadArray; },
  __spreadArrays: function() { return __spreadArrays; },
  __values: function() { return __values; }
});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || from);
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


}),
85007: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  THEME_KEY: function() { return /* binding */ D; },
  UPDATE_OPTIONS_KEY: function() { return /* binding */ B; },
  "default": function() { return /* binding */ index_esm_min_H; },
  LOADING_OPTIONS_KEY: function() { return /* binding */ A; },
  INIT_OPTIONS_KEY: function() { return /* binding */ k; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@2.7.16/node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__(15091);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-demi@0.13.11_vue@2.7.16/node_modules/vue-demi/lib/index.mjs


var isVue2 = false
var isVue3 = true
var Vue2 = undefined

function install() {}

function set(target, key, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key)
    target.splice(key, 1, val)
    return val
  }
  target[key] = val
  return val
}

function del(target, key) {
  if (Array.isArray(target)) {
    target.splice(key, 1)
    return
  }
  delete target[key]
}




// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/core/echarts.js + 3 modules
var echarts = __webpack_require__(8741);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/throttle.js
var throttle = __webpack_require__(19007);
// EXTERNAL MODULE: ./node_modules/.pnpm/resize-detector@0.3.0/node_modules/resize-detector/esm/index.js
var esm = __webpack_require__(50876);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-echarts@6.7.3_echarts@6.0.0_vue@2.7.16/node_modules/vue-echarts/dist/index.esm.min.js
var b=function(){return b=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},b.apply(this,arguments)};"function"==typeof SuppressedError&&SuppressedError;var index_esm_min_y=["getWidth","getHeight","getDom","getOption","resize","dispatchAction","convertToPixel","convertFromPixel","containPixel","getDataURL","getConnectedDataURL","appendData","clear","isDisposed","dispose"];function E(e){return t=Object.create(null),index_esm_min_y.forEach((function(n){t[n]=function(t){return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];if(!e.value)throw new Error("ECharts is not initialized yet.");return e.value[t].apply(e.value,n)}}(n)})),t;var t}var index_esm_min_={autoresize:[Boolean,Object]},index_esm_min_x=/^on[^a-z]/,j=function(e){return index_esm_min_x.test(e)};function w(e,r){var i=(0,vue_esm.isRef)(e)?(0,vue_esm.unref)(e):e;return i&&"object"==typeof i&&"value"in i?i.value||r:i||r}var A="ecLoadingOptions";var index_esm_min_L={loading:Boolean,loadingOptions:Object},index_esm_min_z=null,index_esm_min_C="x-vue-echarts";var index_esm_min_T=[],index_esm_min_S=[];!function(e,t){if(e&&"undefined"!=typeof document){var n,r=!0===t.prepend?"prepend":"append",i=!0===t.singleTag,o="string"==typeof t.container?document.querySelector(t.container):document.getElementsByTagName("head")[0];if(i){var a=index_esm_min_T.indexOf(o);-1===a&&(a=index_esm_min_T.push(o)-1,index_esm_min_S[a]={}),n=index_esm_min_S[a]&&index_esm_min_S[a][r]?index_esm_min_S[a][r]:index_esm_min_S[a][r]=u()}else n=u();65279===e.charCodeAt(0)&&(e=e.substring(1)),n.styleSheet?n.styleSheet.cssText+=e:n.appendChild(document.createTextNode(e))}function u(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),t.attributes)for(var n=Object.keys(t.attributes),i=0;i<n.length;i++)e.setAttribute(n[i],t.attributes[n[i]]);var a="prepend"===r?"afterbegin":"beforeend";return o.insertAdjacentElement(a,e),e}}("x-vue-echarts{display:flex;flex-direction:column;width:100%;height:100%;min-width:0}\n.vue-echarts-inner{flex-grow:1;min-width:0;width:auto!important;height:auto!important}\n",{});var U=function(){if(null!=index_esm_min_z)return index_esm_min_z;if("undefined"==typeof HTMLElement||"undefined"==typeof customElements)return index_esm_min_z=!1;try{new Function("tag","class EChartsElement extends HTMLElement {\n  __dispose = null;\n\n  disconnectedCallback() {\n    if (this.__dispose) {\n      this.__dispose();\n      this.__dispose = null;\n    }\n  }\n}\n\nif (customElements.get(tag) == null) {\n  customElements.define(tag, EChartsElement);\n}\n")(index_esm_min_C)}catch(e){return index_esm_min_z=!1}return index_esm_min_z=!0}();Vue2&&Vue2.config.ignoredElements.push(index_esm_min_C);var D="ecTheme",k="ecInitOptions",B="ecUpdateOptions",P=/(^&?~?!?)native:/,index_esm_min_H=(0,vue_esm.defineComponent)({name:"echarts",props:b(b({option:Object,theme:{type:[Object,String]},initOptions:Object,updateOptions:Object,group:String,manualUpdate:Boolean},index_esm_min_),index_esm_min_L),emits:{},inheritAttrs:!1,setup:function(t,n){var a=n.attrs,u=(0,vue_esm.shallowRef)(),v=(0,vue_esm.shallowRef)(),y=(0,vue_esm.shallowRef)(),_=(0,vue_esm.shallowRef)(),x=(0,vue_esm.inject)(D,null),L=(0,vue_esm.inject)(k,null),z=(0,vue_esm.inject)(B,null),C=(0,vue_esm.toRefs)(t),T=C.autoresize,S=C.manualUpdate,H=C.loading,M=C.loadingOptions,R=(0,vue_esm.computed)((function(){return _.value||t.option||null})),F=(0,vue_esm.computed)((function(){return t.theme||w(x,{})})),N=(0,vue_esm.computed)((function(){return t.initOptions||w(L,{})})),$=(0,vue_esm.computed)((function(){return t.updateOptions||w(z,{})})),q=(0,vue_esm.computed)((function(){return function(e){var t={};for(var n in e)j(n)||(t[n]=e[n]);return t}(a)})),I={},W=(0,vue_esm.getCurrentInstance)().proxy.$listeners,Z={};function G(e){if(v.value){var n=y.value=(0,echarts.init)(v.value,F.value,N.value);t.group&&(n.group=t.group),Object.keys(Z).forEach((function(e){var t=Z[e];if(t){var r=e.toLowerCase();"~"===r.charAt(0)&&(r=r.substring(1),t.__once__=!0);var i=n;if(0===r.indexOf("zr:")&&(i=n.getZr(),r=r.substring(3)),t.__once__){delete t.__once__;var o=t;t=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];o.apply(void 0,e),i.off(r,t)}}i.on(r,t)}})),T.value?(0,vue_esm.nextTick)((function(){n&&!n.isDisposed()&&n.resize(),r()})):r()}function r(){var t=e||R.value;t&&n.setOption(t,$.value)}}function J(){y.value&&(y.value.dispose(),y.value=void 0)}W?Object.keys(W).forEach((function(e){P.test(e)?I[e.replace(P,"$1")]=W[e]:Z[e]=W[e]})):Object.keys(a).filter((function(e){return j(e)})).forEach((function(e){var t=e.charAt(2).toLowerCase()+e.slice(3);if(0!==t.indexOf("native:"))"Once"===t.substring(t.length-4)&&(t="~".concat(t.substring(0,t.length-4))),Z[t]=a[e];else{var n="on".concat(t.charAt(7).toUpperCase()).concat(t.slice(8));I[n]=a[e]}}));var K=null;(0,vue_esm.watch)(S,(function(n){"function"==typeof K&&(K(),K=null),n||(K=(0,vue_esm.watch)((function(){return t.option}),(function(e,t){e&&(y.value?y.value.setOption(e,b({notMerge:e!==t},$.value)):G())}),{deep:!0}))}),{immediate:!0}),(0,vue_esm.watch)([F,N],(function(){J(),G()}),{deep:!0}),(0,vue_esm.watchEffect)((function(){t.group&&y.value&&(y.value.group=t.group)}));var Q=E(y);return function(e,t,n){var a=(0,vue_esm.inject)(A,{}),u=(0,vue_esm.computed)((function(){return b(b({},w(a,{})),null==n?void 0:n.value)}));(0,vue_esm.watchEffect)((function(){var n=e.value;n&&(t.value?n.showLoading(u.value):n.hideLoading())}))}(y,H,M),function(t,n,r){var i=null;(0,vue_esm.watch)([r,t,n],(function(e,t,n){var r=e[0],o=e[1],a=e[2];if(r&&o&&a){var u=!0===a?{}:a,s=u.throttle,c=void 0===s?100:s,l=u.onResize,f=function(){o.resize(),null==l||l()};i=c?(0,throttle.throttle)(f,c):f,(0,esm.addListener)(r,i)}n((function(){r&&i&&(0,esm.removeListener)(r,i)}))}))}(y,T,v),(0,vue_esm.onMounted)((function(){G()})),(0,vue_esm.onBeforeUnmount)((function(){U&&u.value?u.value.__dispose=J:J()})),b({chart:y,root:u,inner:v,setOption:function(e,n){t.manualUpdate&&(_.value=e),y.value?y.value.setOption(e,n||{}):G(e)},nonEventAttrs:q,nativeListeners:I},Q)},render:function(){var e=Vue2?{attrs:this.nonEventAttrs,on:this.nativeListeners}:b(b({},this.nonEventAttrs),this.nativeListeners);return e.ref="root",e.class=e.class?["echarts"].concat(e.class):"echarts",(0,vue_esm.h)(index_esm_min_C,e,[(0,vue_esm.h)("div",{ref:"inner",class:"vue-echarts-inner"})])}});
//# sourceMappingURL=index.esm.min.js.map


}),
68994: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PRESERVED_NORMAL_STATE: function() { return PRESERVED_NORMAL_STATE; }
});
/* import */ var _core_Transformable_js__rspack_import_0 = __webpack_require__(30128);
/* import */ var _animation_Animator_js__rspack_import_8 = __webpack_require__(27089);
/* import */ var _core_BoundingRect_js__rspack_import_2 = __webpack_require__(7544);
/* import */ var _core_Eventful_js__rspack_import_9 = __webpack_require__(31969);
/* import */ var _contain_text_js__rspack_import_3 = __webpack_require__(26066);
/* import */ var _core_util_js__rspack_import_1 = __webpack_require__(9774);
/* import */ var _config_js__rspack_import_6 = __webpack_require__(76486);
/* import */ var _tool_color_js__rspack_import_7 = __webpack_require__(59886);
/* import */ var _graphic_constants_js__rspack_import_5 = __webpack_require__(66684);
/* import */ var _core_matrix_js__rspack_import_4 = __webpack_require__(46239);










var PRESERVED_NORMAL_STATE = '__zr_normal__';
var PRIMARY_STATES_KEYS = _core_Transformable_js__rspack_import_0.TRANSFORMABLE_PROPS.concat(['ignore']);
var DEFAULT_ANIMATABLE_MAP = (0,_core_util_js__rspack_import_1.reduce)(_core_Transformable_js__rspack_import_0.TRANSFORMABLE_PROPS, function (obj, key) {
    obj[key] = true;
    return obj;
}, { ignore: false });
var tmpTextPosCalcRes = {};
var tmpBoundingRect = new _core_BoundingRect_js__rspack_import_2["default"](0, 0, 0, 0);
var tmpInnerTextTrans = [];
var Element = (function () {
    function Element(props) {
        this.id = (0,_core_util_js__rspack_import_1.guid)();
        this.animators = [];
        this.currentStates = [];
        this.states = {};
        this._init(props);
    }
    Element.prototype._init = function (props) {
        this.attr(props);
    };
    Element.prototype.drift = function (dx, dy, e) {
        switch (this.draggable) {
            case 'horizontal':
                dy = 0;
                break;
            case 'vertical':
                dx = 0;
                break;
        }
        var m = this.transform;
        if (!m) {
            m = this.transform = [1, 0, 0, 1, 0, 0];
        }
        m[4] += dx;
        m[5] += dy;
        this.decomposeTransform();
        this.markRedraw();
    };
    Element.prototype.beforeUpdate = function () { };
    Element.prototype.afterUpdate = function () { };
    Element.prototype.update = function () {
        this.updateTransform();
        if (this.__dirty) {
            this.updateInnerText();
        }
    };
    Element.prototype.updateInnerText = function (forceUpdate) {
        var textEl = this._textContent;
        if (textEl && (!textEl.ignore || forceUpdate)) {
            if (!this.textConfig) {
                this.textConfig = {};
            }
            var textConfig = this.textConfig;
            var isLocal = textConfig.local;
            var innerTransformable = textEl.innerTransformable;
            var textAlign = void 0;
            var textVerticalAlign = void 0;
            var textStyleChanged = false;
            innerTransformable.parent = isLocal ? this : null;
            var innerOrigin = false;
            innerTransformable.copyTransform(textEl);
            var hasPosition = textConfig.position != null;
            var autoOverflowArea = textConfig.autoOverflowArea;
            var layoutRect = void 0;
            if (autoOverflowArea || hasPosition) {
                layoutRect = tmpBoundingRect;
                if (textConfig.layoutRect) {
                    layoutRect.copy(textConfig.layoutRect);
                }
                else {
                    layoutRect.copy(this.getBoundingRect());
                }
                if (!isLocal) {
                    layoutRect.applyTransform(this.transform);
                }
            }
            if (hasPosition) {
                if (this.calculateTextPosition) {
                    this.calculateTextPosition(tmpTextPosCalcRes, textConfig, layoutRect);
                }
                else {
                    (0,_contain_text_js__rspack_import_3.calculateTextPosition)(tmpTextPosCalcRes, textConfig, layoutRect);
                }
                innerTransformable.x = tmpTextPosCalcRes.x;
                innerTransformable.y = tmpTextPosCalcRes.y;
                textAlign = tmpTextPosCalcRes.align;
                textVerticalAlign = tmpTextPosCalcRes.verticalAlign;
                var textOrigin = textConfig.origin;
                if (textOrigin && textConfig.rotation != null) {
                    var relOriginX = void 0;
                    var relOriginY = void 0;
                    if (textOrigin === 'center') {
                        relOriginX = layoutRect.width * 0.5;
                        relOriginY = layoutRect.height * 0.5;
                    }
                    else {
                        relOriginX = (0,_contain_text_js__rspack_import_3.parsePercent)(textOrigin[0], layoutRect.width);
                        relOriginY = (0,_contain_text_js__rspack_import_3.parsePercent)(textOrigin[1], layoutRect.height);
                    }
                    innerOrigin = true;
                    innerTransformable.originX = -innerTransformable.x + relOriginX + (isLocal ? 0 : layoutRect.x);
                    innerTransformable.originY = -innerTransformable.y + relOriginY + (isLocal ? 0 : layoutRect.y);
                }
            }
            if (textConfig.rotation != null) {
                innerTransformable.rotation = textConfig.rotation;
            }
            var textOffset = textConfig.offset;
            if (textOffset) {
                innerTransformable.x += textOffset[0];
                innerTransformable.y += textOffset[1];
                if (!innerOrigin) {
                    innerTransformable.originX = -textOffset[0];
                    innerTransformable.originY = -textOffset[1];
                }
            }
            var innerTextDefaultStyle = this._innerTextDefaultStyle || (this._innerTextDefaultStyle = {});
            if (autoOverflowArea) {
                var overflowRect = innerTextDefaultStyle.overflowRect =
                    innerTextDefaultStyle.overflowRect || new _core_BoundingRect_js__rspack_import_2["default"](0, 0, 0, 0);
                innerTransformable.getLocalTransform(tmpInnerTextTrans);
                (0,_core_matrix_js__rspack_import_4.invert)(tmpInnerTextTrans, tmpInnerTextTrans);
                _core_BoundingRect_js__rspack_import_2["default"].copy(overflowRect, layoutRect);
                overflowRect.applyTransform(tmpInnerTextTrans);
            }
            else {
                innerTextDefaultStyle.overflowRect = null;
            }
            var isInside = textConfig.inside == null
                ? (typeof textConfig.position === 'string' && textConfig.position.indexOf('inside') >= 0)
                : textConfig.inside;
            var textFill = void 0;
            var textStroke = void 0;
            var autoStroke = void 0;
            if (isInside && this.canBeInsideText()) {
                textFill = textConfig.insideFill;
                textStroke = textConfig.insideStroke;
                if (textFill == null || textFill === 'auto') {
                    textFill = this.getInsideTextFill();
                }
                if (textStroke == null || textStroke === 'auto') {
                    textStroke = this.getInsideTextStroke(textFill);
                    autoStroke = true;
                }
            }
            else {
                textFill = textConfig.outsideFill;
                textStroke = textConfig.outsideStroke;
                if (textFill == null || textFill === 'auto') {
                    textFill = this.getOutsideFill();
                }
                if (textStroke == null || textStroke === 'auto') {
                    textStroke = this.getOutsideStroke(textFill);
                    autoStroke = true;
                }
            }
            textFill = textFill || '#000';
            if (textFill !== innerTextDefaultStyle.fill
                || textStroke !== innerTextDefaultStyle.stroke
                || autoStroke !== innerTextDefaultStyle.autoStroke
                || textAlign !== innerTextDefaultStyle.align
                || textVerticalAlign !== innerTextDefaultStyle.verticalAlign) {
                textStyleChanged = true;
                innerTextDefaultStyle.fill = textFill;
                innerTextDefaultStyle.stroke = textStroke;
                innerTextDefaultStyle.autoStroke = autoStroke;
                innerTextDefaultStyle.align = textAlign;
                innerTextDefaultStyle.verticalAlign = textVerticalAlign;
                textEl.setDefaultTextStyle(innerTextDefaultStyle);
            }
            textEl.__dirty |= _graphic_constants_js__rspack_import_5.REDRAW_BIT;
            if (textStyleChanged) {
                textEl.dirtyStyle(true);
            }
        }
    };
    Element.prototype.canBeInsideText = function () {
        return true;
    };
    Element.prototype.getInsideTextFill = function () {
        return '#fff';
    };
    Element.prototype.getInsideTextStroke = function (textFill) {
        return '#000';
    };
    Element.prototype.getOutsideFill = function () {
        return this.__zr && this.__zr.isDarkMode() ? _config_js__rspack_import_6.LIGHT_LABEL_COLOR : _config_js__rspack_import_6.DARK_LABEL_COLOR;
    };
    Element.prototype.getOutsideStroke = function (textFill) {
        var backgroundColor = this.__zr && this.__zr.getBackgroundColor();
        var colorArr = typeof backgroundColor === 'string' && (0,_tool_color_js__rspack_import_7.parse)(backgroundColor);
        if (!colorArr) {
            colorArr = [255, 255, 255, 1];
        }
        var alpha = colorArr[3];
        var isDark = this.__zr.isDarkMode();
        for (var i = 0; i < 3; i++) {
            colorArr[i] = colorArr[i] * alpha + (isDark ? 0 : 255) * (1 - alpha);
        }
        colorArr[3] = 1;
        return (0,_tool_color_js__rspack_import_7.stringify)(colorArr, 'rgba');
    };
    Element.prototype.traverse = function (cb, context) { };
    Element.prototype.attrKV = function (key, value) {
        if (key === 'textConfig') {
            this.setTextConfig(value);
        }
        else if (key === 'textContent') {
            this.setTextContent(value);
        }
        else if (key === 'clipPath') {
            this.setClipPath(value);
        }
        else if (key === 'extra') {
            this.extra = this.extra || {};
            (0,_core_util_js__rspack_import_1.extend)(this.extra, value);
        }
        else {
            this[key] = value;
        }
    };
    Element.prototype.hide = function () {
        this.ignore = true;
        this.markRedraw();
    };
    Element.prototype.show = function () {
        this.ignore = false;
        this.markRedraw();
    };
    Element.prototype.attr = function (keyOrObj, value) {
        if (typeof keyOrObj === 'string') {
            this.attrKV(keyOrObj, value);
        }
        else if ((0,_core_util_js__rspack_import_1.isObject)(keyOrObj)) {
            var obj = keyOrObj;
            var keysArr = (0,_core_util_js__rspack_import_1.keys)(obj);
            for (var i = 0; i < keysArr.length; i++) {
                var key = keysArr[i];
                this.attrKV(key, keyOrObj[key]);
            }
        }
        this.markRedraw();
        return this;
    };
    Element.prototype.saveCurrentToNormalState = function (toState) {
        this._innerSaveToNormal(toState);
        var normalState = this._normalState;
        for (var i = 0; i < this.animators.length; i++) {
            var animator = this.animators[i];
            var fromStateTransition = animator.__fromStateTransition;
            if (animator.getLoop() || fromStateTransition && fromStateTransition !== PRESERVED_NORMAL_STATE) {
                continue;
            }
            var targetName = animator.targetName;
            var target = targetName
                ? normalState[targetName] : normalState;
            animator.saveTo(target);
        }
    };
    Element.prototype._innerSaveToNormal = function (toState) {
        var normalState = this._normalState;
        if (!normalState) {
            normalState = this._normalState = {};
        }
        if (toState.textConfig && !normalState.textConfig) {
            normalState.textConfig = this.textConfig;
        }
        this._savePrimaryToNormal(toState, normalState, PRIMARY_STATES_KEYS);
    };
    Element.prototype._savePrimaryToNormal = function (toState, normalState, primaryKeys) {
        for (var i = 0; i < primaryKeys.length; i++) {
            var key = primaryKeys[i];
            if (toState[key] != null && !(key in normalState)) {
                normalState[key] = this[key];
            }
        }
    };
    Element.prototype.hasState = function () {
        return this.currentStates.length > 0;
    };
    Element.prototype.getState = function (name) {
        return this.states[name];
    };
    Element.prototype.ensureState = function (name) {
        var states = this.states;
        if (!states[name]) {
            states[name] = {};
        }
        return states[name];
    };
    Element.prototype.clearStates = function (noAnimation) {
        this.useState(PRESERVED_NORMAL_STATE, false, noAnimation);
    };
    Element.prototype.useState = function (stateName, keepCurrentStates, noAnimation, forceUseHoverLayer) {
        var toNormalState = stateName === PRESERVED_NORMAL_STATE;
        var hasStates = this.hasState();
        if (!hasStates && toNormalState) {
            return;
        }
        var currentStates = this.currentStates;
        var animationCfg = this.stateTransition;
        if ((0,_core_util_js__rspack_import_1.indexOf)(currentStates, stateName) >= 0 && (keepCurrentStates || currentStates.length === 1)) {
            return;
        }
        var state;
        if (this.stateProxy && !toNormalState) {
            state = this.stateProxy(stateName);
        }
        if (!state) {
            state = (this.states && this.states[stateName]);
        }
        if (!state && !toNormalState) {
            (0,_core_util_js__rspack_import_1.logError)("State " + stateName + " not exists.");
            return;
        }
        if (!toNormalState) {
            this.saveCurrentToNormalState(state);
        }
        var useHoverLayer = !!((state && state.hoverLayer) || forceUseHoverLayer);
        if (useHoverLayer) {
            this._toggleHoverLayerFlag(true);
        }
        this._applyStateObj(stateName, state, this._normalState, keepCurrentStates, !noAnimation && !this.__inHover && animationCfg && animationCfg.duration > 0, animationCfg);
        var textContent = this._textContent;
        var textGuide = this._textGuide;
        if (textContent) {
            textContent.useState(stateName, keepCurrentStates, noAnimation, useHoverLayer);
        }
        if (textGuide) {
            textGuide.useState(stateName, keepCurrentStates, noAnimation, useHoverLayer);
        }
        if (toNormalState) {
            this.currentStates = [];
            this._normalState = {};
        }
        else {
            if (!keepCurrentStates) {
                this.currentStates = [stateName];
            }
            else {
                this.currentStates.push(stateName);
            }
        }
        this._updateAnimationTargets();
        this.markRedraw();
        if (!useHoverLayer && this.__inHover) {
            this._toggleHoverLayerFlag(false);
            this.__dirty &= ~_graphic_constants_js__rspack_import_5.REDRAW_BIT;
        }
        return state;
    };
    Element.prototype.useStates = function (states, noAnimation, forceUseHoverLayer) {
        if (!states.length) {
            this.clearStates();
        }
        else {
            var stateObjects = [];
            var currentStates = this.currentStates;
            var len = states.length;
            var notChange = len === currentStates.length;
            if (notChange) {
                for (var i = 0; i < len; i++) {
                    if (states[i] !== currentStates[i]) {
                        notChange = false;
                        break;
                    }
                }
            }
            if (notChange) {
                return;
            }
            for (var i = 0; i < len; i++) {
                var stateName = states[i];
                var stateObj = void 0;
                if (this.stateProxy) {
                    stateObj = this.stateProxy(stateName, states);
                }
                if (!stateObj) {
                    stateObj = this.states[stateName];
                }
                if (stateObj) {
                    stateObjects.push(stateObj);
                }
            }
            var lastStateObj = stateObjects[len - 1];
            var useHoverLayer = !!((lastStateObj && lastStateObj.hoverLayer) || forceUseHoverLayer);
            if (useHoverLayer) {
                this._toggleHoverLayerFlag(true);
            }
            var mergedState = this._mergeStates(stateObjects);
            var animationCfg = this.stateTransition;
            this.saveCurrentToNormalState(mergedState);
            this._applyStateObj(states.join(','), mergedState, this._normalState, false, !noAnimation && !this.__inHover && animationCfg && animationCfg.duration > 0, animationCfg);
            var textContent = this._textContent;
            var textGuide = this._textGuide;
            if (textContent) {
                textContent.useStates(states, noAnimation, useHoverLayer);
            }
            if (textGuide) {
                textGuide.useStates(states, noAnimation, useHoverLayer);
            }
            this._updateAnimationTargets();
            this.currentStates = states.slice();
            this.markRedraw();
            if (!useHoverLayer && this.__inHover) {
                this._toggleHoverLayerFlag(false);
                this.__dirty &= ~_graphic_constants_js__rspack_import_5.REDRAW_BIT;
            }
        }
    };
    Element.prototype.isSilent = function () {
        var el = this;
        while (el) {
            if (el.silent) {
                return true;
            }
            var hostEl = el.__hostTarget;
            el = hostEl ? (el.ignoreHostSilent ? null : hostEl) : el.parent;
        }
        return false;
    };
    Element.prototype._updateAnimationTargets = function () {
        for (var i = 0; i < this.animators.length; i++) {
            var animator = this.animators[i];
            if (animator.targetName) {
                animator.changeTarget(this[animator.targetName]);
            }
        }
    };
    Element.prototype.removeState = function (state) {
        var idx = (0,_core_util_js__rspack_import_1.indexOf)(this.currentStates, state);
        if (idx >= 0) {
            var currentStates = this.currentStates.slice();
            currentStates.splice(idx, 1);
            this.useStates(currentStates);
        }
    };
    Element.prototype.replaceState = function (oldState, newState, forceAdd) {
        var currentStates = this.currentStates.slice();
        var idx = (0,_core_util_js__rspack_import_1.indexOf)(currentStates, oldState);
        var newStateExists = (0,_core_util_js__rspack_import_1.indexOf)(currentStates, newState) >= 0;
        if (idx >= 0) {
            if (!newStateExists) {
                currentStates[idx] = newState;
            }
            else {
                currentStates.splice(idx, 1);
            }
        }
        else if (forceAdd && !newStateExists) {
            currentStates.push(newState);
        }
        this.useStates(currentStates);
    };
    Element.prototype.toggleState = function (state, enable) {
        if (enable) {
            this.useState(state, true);
        }
        else {
            this.removeState(state);
        }
    };
    Element.prototype._mergeStates = function (states) {
        var mergedState = {};
        var mergedTextConfig;
        for (var i = 0; i < states.length; i++) {
            var state = states[i];
            (0,_core_util_js__rspack_import_1.extend)(mergedState, state);
            if (state.textConfig) {
                mergedTextConfig = mergedTextConfig || {};
                (0,_core_util_js__rspack_import_1.extend)(mergedTextConfig, state.textConfig);
            }
        }
        if (mergedTextConfig) {
            mergedState.textConfig = mergedTextConfig;
        }
        return mergedState;
    };
    Element.prototype._applyStateObj = function (stateName, state, normalState, keepCurrentStates, transition, animationCfg) {
        var needsRestoreToNormal = !(state && keepCurrentStates);
        if (state && state.textConfig) {
            this.textConfig = (0,_core_util_js__rspack_import_1.extend)({}, keepCurrentStates ? this.textConfig : normalState.textConfig);
            (0,_core_util_js__rspack_import_1.extend)(this.textConfig, state.textConfig);
        }
        else if (needsRestoreToNormal) {
            if (normalState.textConfig) {
                this.textConfig = normalState.textConfig;
            }
        }
        var transitionTarget = {};
        var hasTransition = false;
        for (var i = 0; i < PRIMARY_STATES_KEYS.length; i++) {
            var key = PRIMARY_STATES_KEYS[i];
            var propNeedsTransition = transition && DEFAULT_ANIMATABLE_MAP[key];
            if (state && state[key] != null) {
                if (propNeedsTransition) {
                    hasTransition = true;
                    transitionTarget[key] = state[key];
                }
                else {
                    this[key] = state[key];
                }
            }
            else if (needsRestoreToNormal) {
                if (normalState[key] != null) {
                    if (propNeedsTransition) {
                        hasTransition = true;
                        transitionTarget[key] = normalState[key];
                    }
                    else {
                        this[key] = normalState[key];
                    }
                }
            }
        }
        if (!transition) {
            for (var i = 0; i < this.animators.length; i++) {
                var animator = this.animators[i];
                var targetName = animator.targetName;
                if (!animator.getLoop()) {
                    animator.__changeFinalValue(targetName
                        ? (state || normalState)[targetName]
                        : (state || normalState));
                }
            }
        }
        if (hasTransition) {
            this._transitionState(stateName, transitionTarget, animationCfg);
        }
    };
    Element.prototype._attachComponent = function (componentEl) {
        if (componentEl.__zr && !componentEl.__hostTarget) {
            if (false) {}
            return;
        }
        if (componentEl === this) {
            if (false) {}
            return;
        }
        var zr = this.__zr;
        if (zr) {
            componentEl.addSelfToZr(zr);
        }
        componentEl.__zr = zr;
        componentEl.__hostTarget = this;
    };
    Element.prototype._detachComponent = function (componentEl) {
        if (componentEl.__zr) {
            componentEl.removeSelfFromZr(componentEl.__zr);
        }
        componentEl.__zr = null;
        componentEl.__hostTarget = null;
    };
    Element.prototype.getClipPath = function () {
        return this._clipPath;
    };
    Element.prototype.setClipPath = function (clipPath) {
        if (this._clipPath && this._clipPath !== clipPath) {
            this.removeClipPath();
        }
        this._attachComponent(clipPath);
        this._clipPath = clipPath;
        this.markRedraw();
    };
    Element.prototype.removeClipPath = function () {
        var clipPath = this._clipPath;
        if (clipPath) {
            this._detachComponent(clipPath);
            this._clipPath = null;
            this.markRedraw();
        }
    };
    Element.prototype.getTextContent = function () {
        return this._textContent;
    };
    Element.prototype.setTextContent = function (textEl) {
        var previousTextContent = this._textContent;
        if (previousTextContent === textEl) {
            return;
        }
        if (previousTextContent && previousTextContent !== textEl) {
            this.removeTextContent();
        }
        if (false) {}
        textEl.innerTransformable = new _core_Transformable_js__rspack_import_0["default"]();
        this._attachComponent(textEl);
        this._textContent = textEl;
        this.markRedraw();
    };
    Element.prototype.setTextConfig = function (cfg) {
        if (!this.textConfig) {
            this.textConfig = {};
        }
        (0,_core_util_js__rspack_import_1.extend)(this.textConfig, cfg);
        this.markRedraw();
    };
    Element.prototype.removeTextConfig = function () {
        this.textConfig = null;
        this.markRedraw();
    };
    Element.prototype.removeTextContent = function () {
        var textEl = this._textContent;
        if (textEl) {
            textEl.innerTransformable = null;
            this._detachComponent(textEl);
            this._textContent = null;
            this._innerTextDefaultStyle = null;
            this.markRedraw();
        }
    };
    Element.prototype.getTextGuideLine = function () {
        return this._textGuide;
    };
    Element.prototype.setTextGuideLine = function (guideLine) {
        if (this._textGuide && this._textGuide !== guideLine) {
            this.removeTextGuideLine();
        }
        this._attachComponent(guideLine);
        this._textGuide = guideLine;
        this.markRedraw();
    };
    Element.prototype.removeTextGuideLine = function () {
        var textGuide = this._textGuide;
        if (textGuide) {
            this._detachComponent(textGuide);
            this._textGuide = null;
            this.markRedraw();
        }
    };
    Element.prototype.markRedraw = function () {
        this.__dirty |= _graphic_constants_js__rspack_import_5.REDRAW_BIT;
        var zr = this.__zr;
        if (zr) {
            if (this.__inHover) {
                zr.refreshHover();
            }
            else {
                zr.refresh();
            }
        }
        if (this.__hostTarget) {
            this.__hostTarget.markRedraw();
        }
    };
    Element.prototype.dirty = function () {
        this.markRedraw();
    };
    Element.prototype._toggleHoverLayerFlag = function (inHover) {
        this.__inHover = inHover;
        var textContent = this._textContent;
        var textGuide = this._textGuide;
        if (textContent) {
            textContent.__inHover = inHover;
        }
        if (textGuide) {
            textGuide.__inHover = inHover;
        }
    };
    Element.prototype.addSelfToZr = function (zr) {
        if (this.__zr === zr) {
            return;
        }
        this.__zr = zr;
        var animators = this.animators;
        if (animators) {
            for (var i = 0; i < animators.length; i++) {
                zr.animation.addAnimator(animators[i]);
            }
        }
        if (this._clipPath) {
            this._clipPath.addSelfToZr(zr);
        }
        if (this._textContent) {
            this._textContent.addSelfToZr(zr);
        }
        if (this._textGuide) {
            this._textGuide.addSelfToZr(zr);
        }
    };
    Element.prototype.removeSelfFromZr = function (zr) {
        if (!this.__zr) {
            return;
        }
        this.__zr = null;
        var animators = this.animators;
        if (animators) {
            for (var i = 0; i < animators.length; i++) {
                zr.animation.removeAnimator(animators[i]);
            }
        }
        if (this._clipPath) {
            this._clipPath.removeSelfFromZr(zr);
        }
        if (this._textContent) {
            this._textContent.removeSelfFromZr(zr);
        }
        if (this._textGuide) {
            this._textGuide.removeSelfFromZr(zr);
        }
    };
    Element.prototype.animate = function (key, loop, allowDiscreteAnimation) {
        var target = key ? this[key] : this;
        if (false) {}
        var animator = new _animation_Animator_js__rspack_import_8["default"](target, loop, allowDiscreteAnimation);
        key && (animator.targetName = key);
        this.addAnimator(animator, key);
        return animator;
    };
    Element.prototype.addAnimator = function (animator, key) {
        var zr = this.__zr;
        var el = this;
        animator.during(function () {
            el.updateDuringAnimation(key);
        }).done(function () {
            var animators = el.animators;
            var idx = (0,_core_util_js__rspack_import_1.indexOf)(animators, animator);
            if (idx >= 0) {
                animators.splice(idx, 1);
            }
        });
        this.animators.push(animator);
        if (zr) {
            zr.animation.addAnimator(animator);
        }
        zr && zr.wakeUp();
    };
    Element.prototype.updateDuringAnimation = function (key) {
        this.markRedraw();
    };
    Element.prototype.stopAnimation = function (scope, forwardToLast) {
        var animators = this.animators;
        var len = animators.length;
        var leftAnimators = [];
        for (var i = 0; i < len; i++) {
            var animator = animators[i];
            if (!scope || scope === animator.scope) {
                animator.stop(forwardToLast);
            }
            else {
                leftAnimators.push(animator);
            }
        }
        this.animators = leftAnimators;
        return this;
    };
    Element.prototype.animateTo = function (target, cfg, animationProps) {
        animateTo(this, target, cfg, animationProps);
    };
    Element.prototype.animateFrom = function (target, cfg, animationProps) {
        animateTo(this, target, cfg, animationProps, true);
    };
    Element.prototype._transitionState = function (stateName, target, cfg, animationProps) {
        var animators = animateTo(this, target, cfg, animationProps);
        for (var i = 0; i < animators.length; i++) {
            animators[i].__fromStateTransition = stateName;
        }
    };
    Element.prototype.getBoundingRect = function () {
        return null;
    };
    Element.prototype.getPaintRect = function () {
        return null;
    };
    Element.initDefaultProps = (function () {
        var elProto = Element.prototype;
        elProto.type = 'element';
        elProto.name = '';
        elProto.ignore =
            elProto.silent =
                elProto.ignoreHostSilent =
                    elProto.isGroup =
                        elProto.draggable =
                            elProto.dragging =
                                elProto.ignoreClip =
                                    elProto.__inHover = false;
        elProto.__dirty = _graphic_constants_js__rspack_import_5.REDRAW_BIT;
        var logs = {};
        function logDeprecatedError(key, xKey, yKey) {
            if (!logs[key + xKey + yKey]) {
                console.warn("DEPRECATED: '" + key + "' has been deprecated. use '" + xKey + "', '" + yKey + "' instead");
                logs[key + xKey + yKey] = true;
            }
        }
        function createLegacyProperty(key, privateKey, xKey, yKey) {
            Object.defineProperty(elProto, key, {
                get: function () {
                    if (false) {}
                    if (!this[privateKey]) {
                        var pos = this[privateKey] = [];
                        enhanceArray(this, pos);
                    }
                    return this[privateKey];
                },
                set: function (pos) {
                    if (false) {}
                    this[xKey] = pos[0];
                    this[yKey] = pos[1];
                    this[privateKey] = pos;
                    enhanceArray(this, pos);
                }
            });
            function enhanceArray(self, pos) {
                Object.defineProperty(pos, 0, {
                    get: function () {
                        return self[xKey];
                    },
                    set: function (val) {
                        self[xKey] = val;
                    }
                });
                Object.defineProperty(pos, 1, {
                    get: function () {
                        return self[yKey];
                    },
                    set: function (val) {
                        self[yKey] = val;
                    }
                });
            }
        }
        if (Object.defineProperty) {
            createLegacyProperty('position', '_legacyPos', 'x', 'y');
            createLegacyProperty('scale', '_legacyScale', 'scaleX', 'scaleY');
            createLegacyProperty('origin', '_legacyOrigin', 'originX', 'originY');
        }
    })();
    return Element;
}());
(0,_core_util_js__rspack_import_1.mixin)(Element, _core_Eventful_js__rspack_import_9["default"]);
(0,_core_util_js__rspack_import_1.mixin)(Element, _core_Transformable_js__rspack_import_0["default"]);
function animateTo(animatable, target, cfg, animationProps, reverse) {
    cfg = cfg || {};
    var animators = [];
    animateToShallow(animatable, '', animatable, target, cfg, animationProps, animators, reverse);
    var finishCount = animators.length;
    var doneHappened = false;
    var cfgDone = cfg.done;
    var cfgAborted = cfg.aborted;
    var doneCb = function () {
        doneHappened = true;
        finishCount--;
        if (finishCount <= 0) {
            doneHappened
                ? (cfgDone && cfgDone())
                : (cfgAborted && cfgAborted());
        }
    };
    var abortedCb = function () {
        finishCount--;
        if (finishCount <= 0) {
            doneHappened
                ? (cfgDone && cfgDone())
                : (cfgAborted && cfgAborted());
        }
    };
    if (!finishCount) {
        cfgDone && cfgDone();
    }
    if (animators.length > 0 && cfg.during) {
        animators[0].during(function (target, percent) {
            cfg.during(percent);
        });
    }
    for (var i = 0; i < animators.length; i++) {
        var animator = animators[i];
        if (doneCb) {
            animator.done(doneCb);
        }
        if (abortedCb) {
            animator.aborted(abortedCb);
        }
        if (cfg.force) {
            animator.duration(cfg.duration);
        }
        animator.start(cfg.easing);
    }
    return animators;
}
function copyArrShallow(source, target, len) {
    for (var i = 0; i < len; i++) {
        source[i] = target[i];
    }
}
function is2DArray(value) {
    return (0,_core_util_js__rspack_import_1.isArrayLike)(value[0]);
}
function copyValue(target, source, key) {
    if ((0,_core_util_js__rspack_import_1.isArrayLike)(source[key])) {
        if (!(0,_core_util_js__rspack_import_1.isArrayLike)(target[key])) {
            target[key] = [];
        }
        if ((0,_core_util_js__rspack_import_1.isTypedArray)(source[key])) {
            var len = source[key].length;
            if (target[key].length !== len) {
                target[key] = new (source[key].constructor)(len);
                copyArrShallow(target[key], source[key], len);
            }
        }
        else {
            var sourceArr = source[key];
            var targetArr = target[key];
            var len0 = sourceArr.length;
            if (is2DArray(sourceArr)) {
                var len1 = sourceArr[0].length;
                for (var i = 0; i < len0; i++) {
                    if (!targetArr[i]) {
                        targetArr[i] = Array.prototype.slice.call(sourceArr[i]);
                    }
                    else {
                        copyArrShallow(targetArr[i], sourceArr[i], len1);
                    }
                }
            }
            else {
                copyArrShallow(targetArr, sourceArr, len0);
            }
            targetArr.length = sourceArr.length;
        }
    }
    else {
        target[key] = source[key];
    }
}
function isValueSame(val1, val2) {
    return val1 === val2
        || (0,_core_util_js__rspack_import_1.isArrayLike)(val1) && (0,_core_util_js__rspack_import_1.isArrayLike)(val2) && is1DArraySame(val1, val2);
}
function is1DArraySame(arr0, arr1) {
    var len = arr0.length;
    if (len !== arr1.length) {
        return false;
    }
    for (var i = 0; i < len; i++) {
        if (arr0[i] !== arr1[i]) {
            return false;
        }
    }
    return true;
}
function animateToShallow(animatable, topKey, animateObj, target, cfg, animationProps, animators, reverse) {
    var targetKeys = (0,_core_util_js__rspack_import_1.keys)(target);
    var duration = cfg.duration;
    var delay = cfg.delay;
    var additive = cfg.additive;
    var setToFinal = cfg.setToFinal;
    var animateAll = !(0,_core_util_js__rspack_import_1.isObject)(animationProps);
    var existsAnimators = animatable.animators;
    var animationKeys = [];
    for (var k = 0; k < targetKeys.length; k++) {
        var innerKey = targetKeys[k];
        var targetVal = target[innerKey];
        if (targetVal != null && animateObj[innerKey] != null
            && (animateAll || animationProps[innerKey])) {
            if ((0,_core_util_js__rspack_import_1.isObject)(targetVal)
                && !(0,_core_util_js__rspack_import_1.isArrayLike)(targetVal)
                && !(0,_core_util_js__rspack_import_1.isGradientObject)(targetVal)) {
                if (topKey) {
                    if (!reverse) {
                        animateObj[innerKey] = targetVal;
                        animatable.updateDuringAnimation(topKey);
                    }
                    continue;
                }
                animateToShallow(animatable, innerKey, animateObj[innerKey], targetVal, cfg, animationProps && animationProps[innerKey], animators, reverse);
            }
            else {
                animationKeys.push(innerKey);
            }
        }
        else if (!reverse) {
            animateObj[innerKey] = targetVal;
            animatable.updateDuringAnimation(topKey);
            animationKeys.push(innerKey);
        }
    }
    var keyLen = animationKeys.length;
    if (!additive && keyLen) {
        for (var i = 0; i < existsAnimators.length; i++) {
            var animator = existsAnimators[i];
            if (animator.targetName === topKey) {
                var allAborted = animator.stopTracks(animationKeys);
                if (allAborted) {
                    var idx = (0,_core_util_js__rspack_import_1.indexOf)(existsAnimators, animator);
                    existsAnimators.splice(idx, 1);
                }
            }
        }
    }
    if (!cfg.force) {
        animationKeys = (0,_core_util_js__rspack_import_1.filter)(animationKeys, function (key) { return !isValueSame(target[key], animateObj[key]); });
        keyLen = animationKeys.length;
    }
    if (keyLen > 0
        || (cfg.force && !animators.length)) {
        var revertedSource = void 0;
        var reversedTarget = void 0;
        var sourceClone = void 0;
        if (reverse) {
            reversedTarget = {};
            if (setToFinal) {
                revertedSource = {};
            }
            for (var i = 0; i < keyLen; i++) {
                var innerKey = animationKeys[i];
                reversedTarget[innerKey] = animateObj[innerKey];
                if (setToFinal) {
                    revertedSource[innerKey] = target[innerKey];
                }
                else {
                    animateObj[innerKey] = target[innerKey];
                }
            }
        }
        else if (setToFinal) {
            sourceClone = {};
            for (var i = 0; i < keyLen; i++) {
                var innerKey = animationKeys[i];
                sourceClone[innerKey] = (0,_animation_Animator_js__rspack_import_8.cloneValue)(animateObj[innerKey]);
                copyValue(animateObj, target, innerKey);
            }
        }
        var animator = new _animation_Animator_js__rspack_import_8["default"](animateObj, false, false, additive ? (0,_core_util_js__rspack_import_1.filter)(existsAnimators, function (animator) { return animator.targetName === topKey; }) : null);
        animator.targetName = topKey;
        if (cfg.scope) {
            animator.scope = cfg.scope;
        }
        if (setToFinal && revertedSource) {
            animator.whenWithKeys(0, revertedSource, animationKeys);
        }
        if (sourceClone) {
            animator.whenWithKeys(0, sourceClone, animationKeys);
        }
        animator.whenWithKeys(duration == null ? 500 : duration, reverse ? reversedTarget : target, animationKeys).delay(delay || 0);
        animatable.addAnimator(animator, topKey);
        animators.push(animator);
    }
}
/* export default */ __webpack_exports__["default"] = (Element);


}),
60194: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var tslib__rspack_import_2 = __webpack_require__(2492);
/* import */ var _core_util_js__rspack_import_5 = __webpack_require__(9774);
/* import */ var _core_vector_js__rspack_import_7 = __webpack_require__(44721);
/* import */ var _mixin_Draggable_js__rspack_import_4 = __webpack_require__(66687);
/* import */ var _core_Eventful_js__rspack_import_1 = __webpack_require__(31969);
/* import */ var _core_event_js__rspack_import_0 = __webpack_require__(31720);
/* import */ var _core_GestureMgr_js__rspack_import_6 = __webpack_require__(20161);
/* import */ var _core_BoundingRect_js__rspack_import_3 = __webpack_require__(7544);








var SILENT = 'silent';
function makeEventPacket(eveType, targetInfo, event) {
    return {
        type: eveType,
        event: event,
        target: targetInfo.target,
        topTarget: targetInfo.topTarget,
        cancelBubble: false,
        offsetX: event.zrX,
        offsetY: event.zrY,
        gestureEvent: event.gestureEvent,
        pinchX: event.pinchX,
        pinchY: event.pinchY,
        pinchScale: event.pinchScale,
        wheelDelta: event.zrDelta,
        zrByTouch: event.zrByTouch,
        which: event.which,
        stop: stopEvent
    };
}
function stopEvent() {
    _core_event_js__rspack_import_0.stop(this.event);
}
var EmptyProxy = (function (_super) {
    (0,tslib__rspack_import_2.__extends)(EmptyProxy, _super);
    function EmptyProxy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handler = null;
        return _this;
    }
    EmptyProxy.prototype.dispose = function () { };
    EmptyProxy.prototype.setCursor = function () { };
    return EmptyProxy;
}(_core_Eventful_js__rspack_import_1["default"]));
var HoveredResult = (function () {
    function HoveredResult(x, y) {
        this.x = x;
        this.y = y;
    }
    return HoveredResult;
}());
var handlerNames = [
    'click', 'dblclick', 'mousewheel', 'mouseout',
    'mouseup', 'mousedown', 'mousemove', 'contextmenu'
];
var tmpRect = new _core_BoundingRect_js__rspack_import_3["default"](0, 0, 0, 0);
var Handler = (function (_super) {
    (0,tslib__rspack_import_2.__extends)(Handler, _super);
    function Handler(storage, painter, proxy, painterRoot, pointerSize) {
        var _this = _super.call(this) || this;
        _this._hovered = new HoveredResult(0, 0);
        _this.storage = storage;
        _this.painter = painter;
        _this.painterRoot = painterRoot;
        _this._pointerSize = pointerSize;
        proxy = proxy || new EmptyProxy();
        _this.proxy = null;
        _this.setHandlerProxy(proxy);
        _this._draggingMgr = new _mixin_Draggable_js__rspack_import_4["default"](_this);
        return _this;
    }
    Handler.prototype.setHandlerProxy = function (proxy) {
        if (this.proxy) {
            this.proxy.dispose();
        }
        if (proxy) {
            _core_util_js__rspack_import_5.each(handlerNames, function (name) {
                proxy.on && proxy.on(name, this[name], this);
            }, this);
            proxy.handler = this;
        }
        this.proxy = proxy;
    };
    Handler.prototype.mousemove = function (event) {
        var x = event.zrX;
        var y = event.zrY;
        var isOutside = isOutsideBoundary(this, x, y);
        var lastHovered = this._hovered;
        var lastHoveredTarget = lastHovered.target;
        if (lastHoveredTarget && !lastHoveredTarget.__zr) {
            lastHovered = this.findHover(lastHovered.x, lastHovered.y);
            lastHoveredTarget = lastHovered.target;
        }
        var hovered = this._hovered = isOutside ? new HoveredResult(x, y) : this.findHover(x, y);
        var hoveredTarget = hovered.target;
        var proxy = this.proxy;
        proxy.setCursor && proxy.setCursor(hoveredTarget ? hoveredTarget.cursor : 'default');
        if (lastHoveredTarget && hoveredTarget !== lastHoveredTarget) {
            this.dispatchToElement(lastHovered, 'mouseout', event);
        }
        this.dispatchToElement(hovered, 'mousemove', event);
        if (hoveredTarget && hoveredTarget !== lastHoveredTarget) {
            this.dispatchToElement(hovered, 'mouseover', event);
        }
    };
    Handler.prototype.mouseout = function (event) {
        var eventControl = event.zrEventControl;
        if (eventControl !== 'only_globalout') {
            this.dispatchToElement(this._hovered, 'mouseout', event);
        }
        if (eventControl !== 'no_globalout') {
            this.trigger('globalout', { type: 'globalout', event: event });
        }
    };
    Handler.prototype.resize = function () {
        this._hovered = new HoveredResult(0, 0);
    };
    Handler.prototype.dispatch = function (eventName, eventArgs) {
        var handler = this[eventName];
        handler && handler.call(this, eventArgs);
    };
    Handler.prototype.dispose = function () {
        this.proxy.dispose();
        this.storage = null;
        this.proxy = null;
        this.painter = null;
    };
    Handler.prototype.setCursorStyle = function (cursorStyle) {
        var proxy = this.proxy;
        proxy.setCursor && proxy.setCursor(cursorStyle);
    };
    Handler.prototype.dispatchToElement = function (targetInfo, eventName, event) {
        targetInfo = targetInfo || {};
        var el = targetInfo.target;
        if (el && el.silent) {
            return;
        }
        var eventKey = ('on' + eventName);
        var eventPacket = makeEventPacket(eventName, targetInfo, event);
        while (el) {
            el[eventKey]
                && (eventPacket.cancelBubble = !!el[eventKey].call(el, eventPacket));
            el.trigger(eventName, eventPacket);
            el = el.__hostTarget ? el.__hostTarget : el.parent;
            if (eventPacket.cancelBubble) {
                break;
            }
        }
        if (!eventPacket.cancelBubble) {
            this.trigger(eventName, eventPacket);
            if (this.painter && this.painter.eachOtherLayer) {
                this.painter.eachOtherLayer(function (layer) {
                    if (typeof (layer[eventKey]) === 'function') {
                        layer[eventKey].call(layer, eventPacket);
                    }
                    if (layer.trigger) {
                        layer.trigger(eventName, eventPacket);
                    }
                });
            }
        }
    };
    Handler.prototype.findHover = function (x, y, exclude) {
        var list = this.storage.getDisplayList();
        var out = new HoveredResult(x, y);
        setHoverTarget(list, out, x, y, exclude);
        if (this._pointerSize && !out.target) {
            var candidates = [];
            var pointerSize = this._pointerSize;
            var targetSizeHalf = pointerSize / 2;
            var pointerRect = new _core_BoundingRect_js__rspack_import_3["default"](x - targetSizeHalf, y - targetSizeHalf, pointerSize, pointerSize);
            for (var i = list.length - 1; i >= 0; i--) {
                var el = list[i];
                if (el !== exclude
                    && !el.ignore
                    && !el.ignoreCoarsePointer
                    && (!el.parent || !el.parent.ignoreCoarsePointer)) {
                    tmpRect.copy(el.getBoundingRect());
                    if (el.transform) {
                        tmpRect.applyTransform(el.transform);
                    }
                    if (tmpRect.intersect(pointerRect)) {
                        candidates.push(el);
                    }
                }
            }
            if (candidates.length) {
                var rStep = 4;
                var thetaStep = Math.PI / 12;
                var PI2 = Math.PI * 2;
                for (var r = 0; r < targetSizeHalf; r += rStep) {
                    for (var theta = 0; theta < PI2; theta += thetaStep) {
                        var x1 = x + r * Math.cos(theta);
                        var y1 = y + r * Math.sin(theta);
                        setHoverTarget(candidates, out, x1, y1, exclude);
                        if (out.target) {
                            return out;
                        }
                    }
                }
            }
        }
        return out;
    };
    Handler.prototype.processGesture = function (event, stage) {
        if (!this._gestureMgr) {
            this._gestureMgr = new _core_GestureMgr_js__rspack_import_6.GestureMgr();
        }
        var gestureMgr = this._gestureMgr;
        stage === 'start' && gestureMgr.clear();
        var gestureInfo = gestureMgr.recognize(event, this.findHover(event.zrX, event.zrY, null).target, this.proxy.dom);
        stage === 'end' && gestureMgr.clear();
        if (gestureInfo) {
            var type = gestureInfo.type;
            event.gestureEvent = type;
            var res = new HoveredResult();
            res.target = gestureInfo.target;
            this.dispatchToElement(res, type, gestureInfo.event);
        }
    };
    return Handler;
}(_core_Eventful_js__rspack_import_1["default"]));
_core_util_js__rspack_import_5.each(['click', 'mousedown', 'mouseup', 'mousewheel', 'dblclick', 'contextmenu'], function (name) {
    Handler.prototype[name] = function (event) {
        var x = event.zrX;
        var y = event.zrY;
        var isOutside = isOutsideBoundary(this, x, y);
        var hovered;
        var hoveredTarget;
        if (name !== 'mouseup' || !isOutside) {
            hovered = this.findHover(x, y);
            hoveredTarget = hovered.target;
        }
        if (name === 'mousedown') {
            this._downEl = hoveredTarget;
            this._downPoint = [event.zrX, event.zrY];
            this._upEl = hoveredTarget;
        }
        else if (name === 'mouseup') {
            this._upEl = hoveredTarget;
        }
        else if (name === 'click') {
            if (this._downEl !== this._upEl
                || !this._downPoint
                || _core_vector_js__rspack_import_7.dist(this._downPoint, [event.zrX, event.zrY]) > 4) {
                return;
            }
            this._downPoint = null;
        }
        this.dispatchToElement(hovered, name, event);
    };
});
function isHover(displayable, x, y) {
    if (displayable[displayable.rectHover ? 'rectContain' : 'contain'](x, y)) {
        var el = displayable;
        var isSilent = void 0;
        var ignoreClip = false;
        while (el) {
            if (el.ignoreClip) {
                ignoreClip = true;
            }
            if (!ignoreClip) {
                var clipPath = el.getClipPath();
                if (clipPath && !clipPath.contain(x, y)) {
                    return false;
                }
            }
            if (el.silent) {
                isSilent = true;
            }
            var hostEl = el.__hostTarget;
            el = hostEl ? (el.ignoreHostSilent ? null : hostEl) : el.parent;
        }
        return isSilent ? SILENT : true;
    }
    return false;
}
function setHoverTarget(list, out, x, y, exclude) {
    for (var i = list.length - 1; i >= 0; i--) {
        var el = list[i];
        var hoverCheckResult = void 0;
        if (el !== exclude
            && !el.ignore
            && (hoverCheckResult = isHover(el, x, y))) {
            !out.topTarget && (out.topTarget = el);
            if (hoverCheckResult !== SILENT) {
                out.target = el;
                break;
            }
        }
    }
}
function isOutsideBoundary(handlerInstance, x, y) {
    var painter = handlerInstance.painter;
    return x < 0 || x > painter.getWidth() || y < 0 || y > painter.getHeight();
}
/* export default */ __webpack_exports__["default"] = (Handler);


}),
93323: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var _core_util_js__rspack_import_2 = __webpack_require__(9774);
/* import */ var _core_timsort_js__rspack_import_0 = __webpack_require__(25874);
/* import */ var _graphic_constants_js__rspack_import_1 = __webpack_require__(66684);



var invalidZErrorLogged = false;
function logInvalidZError() {
    if (invalidZErrorLogged) {
        return;
    }
    invalidZErrorLogged = true;
    console.warn('z / z2 / zlevel of displayable is invalid, which may cause unexpected errors');
}
function shapeCompareFunc(a, b) {
    if (a.zlevel === b.zlevel) {
        if (a.z === b.z) {
            return a.z2 - b.z2;
        }
        return a.z - b.z;
    }
    return a.zlevel - b.zlevel;
}
var Storage = (function () {
    function Storage() {
        this._roots = [];
        this._displayList = [];
        this._displayListLen = 0;
        this.displayableSortFunc = shapeCompareFunc;
    }
    Storage.prototype.traverse = function (cb, context) {
        for (var i = 0; i < this._roots.length; i++) {
            this._roots[i].traverse(cb, context);
        }
    };
    Storage.prototype.getDisplayList = function (update, includeIgnore) {
        includeIgnore = includeIgnore || false;
        var displayList = this._displayList;
        if (update || !displayList.length) {
            this.updateDisplayList(includeIgnore);
        }
        return displayList;
    };
    Storage.prototype.updateDisplayList = function (includeIgnore) {
        this._displayListLen = 0;
        var roots = this._roots;
        var displayList = this._displayList;
        for (var i = 0, len = roots.length; i < len; i++) {
            this._updateAndAddDisplayable(roots[i], null, includeIgnore);
        }
        displayList.length = this._displayListLen;
        (0,_core_timsort_js__rspack_import_0["default"])(displayList, shapeCompareFunc);
    };
    Storage.prototype._updateAndAddDisplayable = function (el, parentClipPaths, includeIgnore) {
        if (el.ignore && !includeIgnore) {
            return;
        }
        el.beforeUpdate();
        el.update();
        el.afterUpdate();
        var userSetClipPath = el.getClipPath();
        var parentHasClipPaths = parentClipPaths && parentClipPaths.length;
        var clipPathIdx = 0;
        var thisClipPaths = el.__clipPaths;
        if (!el.ignoreClip
            && (parentHasClipPaths || userSetClipPath)) {
            if (!thisClipPaths) {
                thisClipPaths = el.__clipPaths = [];
            }
            if (parentHasClipPaths) {
                for (var idx = 0; idx < parentClipPaths.length; idx++) {
                    thisClipPaths[clipPathIdx++] = parentClipPaths[idx];
                }
            }
            var currentClipPath = userSetClipPath;
            var parentClipPath = el;
            while (currentClipPath) {
                currentClipPath.parent = parentClipPath;
                currentClipPath.updateTransform();
                thisClipPaths[clipPathIdx++] = currentClipPath;
                parentClipPath = currentClipPath;
                currentClipPath = currentClipPath.getClipPath();
            }
        }
        if (thisClipPaths) {
            thisClipPaths.length = clipPathIdx;
        }
        if (el.childrenRef) {
            var children = el.childrenRef();
            for (var i = 0; i < children.length; i++) {
                var child = children[i];
                if (el.__dirty) {
                    child.__dirty |= _graphic_constants_js__rspack_import_1.REDRAW_BIT;
                }
                this._updateAndAddDisplayable(child, thisClipPaths, includeIgnore);
            }
            el.__dirty = 0;
        }
        else {
            var disp = el;
            if (isNaN(disp.z)) {
                logInvalidZError();
                disp.z = 0;
            }
            if (isNaN(disp.z2)) {
                logInvalidZError();
                disp.z2 = 0;
            }
            if (isNaN(disp.zlevel)) {
                logInvalidZError();
                disp.zlevel = 0;
            }
            this._displayList[this._displayListLen++] = disp;
        }
        var decalEl = el.getDecalElement && el.getDecalElement();
        if (decalEl) {
            this._updateAndAddDisplayable(decalEl, thisClipPaths, includeIgnore);
        }
        var textGuide = el.getTextGuideLine();
        if (textGuide) {
            this._updateAndAddDisplayable(textGuide, thisClipPaths, includeIgnore);
        }
        var textEl = el.getTextContent();
        if (textEl) {
            this._updateAndAddDisplayable(textEl, thisClipPaths, includeIgnore);
        }
    };
    Storage.prototype.addRoot = function (el) {
        if (el.__zr && el.__zr.storage === this) {
            return;
        }
        this._roots.push(el);
    };
    Storage.prototype.delRoot = function (el) {
        if (el instanceof Array) {
            for (var i = 0, l = el.length; i < l; i++) {
                this.delRoot(el[i]);
            }
            return;
        }
        var idx = _core_util_js__rspack_import_2.indexOf(this._roots, el);
        if (idx >= 0) {
            this._roots.splice(idx, 1);
        }
    };
    Storage.prototype.delAllRoots = function () {
        this._roots = [];
        this._displayList = [];
        this._displayListLen = 0;
        return;
    };
    Storage.prototype.getRoots = function () {
        return this._roots;
    };
    Storage.prototype.dispose = function () {
        this._displayList = null;
        this._roots = null;
    };
    return Storage;
}());
/* export default */ __webpack_exports__["default"] = (Storage);


}),
18825: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getTime: function() { return getTime; }
});
/* import */ var tslib__rspack_import_1 = __webpack_require__(2492);
/* import */ var _core_Eventful_js__rspack_import_0 = __webpack_require__(31969);
/* import */ var _requestAnimationFrame_js__rspack_import_2 = __webpack_require__(53717);
/* import */ var _Animator_js__rspack_import_3 = __webpack_require__(27089);




function getTime() {
    return new Date().getTime();
}
var Animation = (function (_super) {
    (0,tslib__rspack_import_1.__extends)(Animation, _super);
    function Animation(opts) {
        var _this = _super.call(this) || this;
        _this._running = false;
        _this._time = 0;
        _this._pausedTime = 0;
        _this._pauseStart = 0;
        _this._paused = false;
        opts = opts || {};
        _this.stage = opts.stage || {};
        return _this;
    }
    Animation.prototype.addClip = function (clip) {
        if (clip.animation) {
            this.removeClip(clip);
        }
        if (!this._head) {
            this._head = this._tail = clip;
        }
        else {
            this._tail.next = clip;
            clip.prev = this._tail;
            clip.next = null;
            this._tail = clip;
        }
        clip.animation = this;
    };
    Animation.prototype.addAnimator = function (animator) {
        animator.animation = this;
        var clip = animator.getClip();
        if (clip) {
            this.addClip(clip);
        }
    };
    Animation.prototype.removeClip = function (clip) {
        if (!clip.animation) {
            return;
        }
        var prev = clip.prev;
        var next = clip.next;
        if (prev) {
            prev.next = next;
        }
        else {
            this._head = next;
        }
        if (next) {
            next.prev = prev;
        }
        else {
            this._tail = prev;
        }
        clip.next = clip.prev = clip.animation = null;
    };
    Animation.prototype.removeAnimator = function (animator) {
        var clip = animator.getClip();
        if (clip) {
            this.removeClip(clip);
        }
        animator.animation = null;
    };
    Animation.prototype.update = function (notTriggerFrameAndStageUpdate) {
        var time = getTime() - this._pausedTime;
        var delta = time - this._time;
        var clip = this._head;
        while (clip) {
            var nextClip = clip.next;
            var finished = clip.step(time, delta);
            if (finished) {
                clip.ondestroy();
                this.removeClip(clip);
                clip = nextClip;
            }
            else {
                clip = nextClip;
            }
        }
        this._time = time;
        if (!notTriggerFrameAndStageUpdate) {
            this.trigger('frame', delta);
            this.stage.update && this.stage.update();
        }
    };
    Animation.prototype._startLoop = function () {
        var self = this;
        this._running = true;
        function step() {
            if (self._running) {
                (0,_requestAnimationFrame_js__rspack_import_2["default"])(step);
                !self._paused && self.update();
            }
        }
        (0,_requestAnimationFrame_js__rspack_import_2["default"])(step);
    };
    Animation.prototype.start = function () {
        if (this._running) {
            return;
        }
        this._time = getTime();
        this._pausedTime = 0;
        this._startLoop();
    };
    Animation.prototype.stop = function () {
        this._running = false;
    };
    Animation.prototype.pause = function () {
        if (!this._paused) {
            this._pauseStart = getTime();
            this._paused = true;
        }
    };
    Animation.prototype.resume = function () {
        if (this._paused) {
            this._pausedTime += getTime() - this._pauseStart;
            this._paused = false;
        }
    };
    Animation.prototype.clear = function () {
        var clip = this._head;
        while (clip) {
            var nextClip = clip.next;
            clip.prev = clip.next = clip.animation = null;
            clip = nextClip;
        }
        this._head = this._tail = null;
    };
    Animation.prototype.isFinished = function () {
        return this._head == null;
    };
    Animation.prototype.animate = function (target, options) {
        options = options || {};
        this.start();
        var animator = new _Animator_js__rspack_import_3["default"](target, options.loop);
        this.addAnimator(animator);
        return animator;
    };
    return Animation;
}(_core_Eventful_js__rspack_import_0["default"]));
/* export default */ __webpack_exports__["default"] = (Animation);


}),
27089: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  cloneValue: function() { return /* binding */ cloneValue; },
  "default": function() { return /* binding */ animation_Animator; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/animation/easing.js
var easingFuncs = {
    linear: function (k) {
        return k;
    },
    quadraticIn: function (k) {
        return k * k;
    },
    quadraticOut: function (k) {
        return k * (2 - k);
    },
    quadraticInOut: function (k) {
        if ((k *= 2) < 1) {
            return 0.5 * k * k;
        }
        return -0.5 * (--k * (k - 2) - 1);
    },
    cubicIn: function (k) {
        return k * k * k;
    },
    cubicOut: function (k) {
        return --k * k * k + 1;
    },
    cubicInOut: function (k) {
        if ((k *= 2) < 1) {
            return 0.5 * k * k * k;
        }
        return 0.5 * ((k -= 2) * k * k + 2);
    },
    quarticIn: function (k) {
        return k * k * k * k;
    },
    quarticOut: function (k) {
        return 1 - (--k * k * k * k);
    },
    quarticInOut: function (k) {
        if ((k *= 2) < 1) {
            return 0.5 * k * k * k * k;
        }
        return -0.5 * ((k -= 2) * k * k * k - 2);
    },
    quinticIn: function (k) {
        return k * k * k * k * k;
    },
    quinticOut: function (k) {
        return --k * k * k * k * k + 1;
    },
    quinticInOut: function (k) {
        if ((k *= 2) < 1) {
            return 0.5 * k * k * k * k * k;
        }
        return 0.5 * ((k -= 2) * k * k * k * k + 2);
    },
    sinusoidalIn: function (k) {
        return 1 - Math.cos(k * Math.PI / 2);
    },
    sinusoidalOut: function (k) {
        return Math.sin(k * Math.PI / 2);
    },
    sinusoidalInOut: function (k) {
        return 0.5 * (1 - Math.cos(Math.PI * k));
    },
    exponentialIn: function (k) {
        return k === 0 ? 0 : Math.pow(1024, k - 1);
    },
    exponentialOut: function (k) {
        return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
    },
    exponentialInOut: function (k) {
        if (k === 0) {
            return 0;
        }
        if (k === 1) {
            return 1;
        }
        if ((k *= 2) < 1) {
            return 0.5 * Math.pow(1024, k - 1);
        }
        return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
    },
    circularIn: function (k) {
        return 1 - Math.sqrt(1 - k * k);
    },
    circularOut: function (k) {
        return Math.sqrt(1 - (--k * k));
    },
    circularInOut: function (k) {
        if ((k *= 2) < 1) {
            return -0.5 * (Math.sqrt(1 - k * k) - 1);
        }
        return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
    },
    elasticIn: function (k) {
        var s;
        var a = 0.1;
        var p = 0.4;
        if (k === 0) {
            return 0;
        }
        if (k === 1) {
            return 1;
        }
        if (!a || a < 1) {
            a = 1;
            s = p / 4;
        }
        else {
            s = p * Math.asin(1 / a) / (2 * Math.PI);
        }
        return -(a * Math.pow(2, 10 * (k -= 1))
            * Math.sin((k - s) * (2 * Math.PI) / p));
    },
    elasticOut: function (k) {
        var s;
        var a = 0.1;
        var p = 0.4;
        if (k === 0) {
            return 0;
        }
        if (k === 1) {
            return 1;
        }
        if (!a || a < 1) {
            a = 1;
            s = p / 4;
        }
        else {
            s = p * Math.asin(1 / a) / (2 * Math.PI);
        }
        return (a * Math.pow(2, -10 * k)
            * Math.sin((k - s) * (2 * Math.PI) / p) + 1);
    },
    elasticInOut: function (k) {
        var s;
        var a = 0.1;
        var p = 0.4;
        if (k === 0) {
            return 0;
        }
        if (k === 1) {
            return 1;
        }
        if (!a || a < 1) {
            a = 1;
            s = p / 4;
        }
        else {
            s = p * Math.asin(1 / a) / (2 * Math.PI);
        }
        if ((k *= 2) < 1) {
            return -0.5 * (a * Math.pow(2, 10 * (k -= 1))
                * Math.sin((k - s) * (2 * Math.PI) / p));
        }
        return a * Math.pow(2, -10 * (k -= 1))
            * Math.sin((k - s) * (2 * Math.PI) / p) * 0.5 + 1;
    },
    backIn: function (k) {
        var s = 1.70158;
        return k * k * ((s + 1) * k - s);
    },
    backOut: function (k) {
        var s = 1.70158;
        return --k * k * ((s + 1) * k + s) + 1;
    },
    backInOut: function (k) {
        var s = 1.70158 * 1.525;
        if ((k *= 2) < 1) {
            return 0.5 * (k * k * ((s + 1) * k - s));
        }
        return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
    },
    bounceIn: function (k) {
        return 1 - easingFuncs.bounceOut(1 - k);
    },
    bounceOut: function (k) {
        if (k < (1 / 2.75)) {
            return 7.5625 * k * k;
        }
        else if (k < (2 / 2.75)) {
            return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
        }
        else if (k < (2.5 / 2.75)) {
            return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;
        }
        else {
            return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;
        }
    },
    bounceInOut: function (k) {
        if (k < 0.5) {
            return easingFuncs.bounceIn(k * 2) * 0.5;
        }
        return easingFuncs.bounceOut(k * 2 - 1) * 0.5 + 0.5;
    }
};
/* export default */ var animation_easing = (easingFuncs);

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(9774);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/animation/cubicEasing.js
var cubicEasing = __webpack_require__(11316);
;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/animation/Clip.js



var Clip_Clip = (function () {
    function Clip(opts) {
        this._inited = false;
        this._startTime = 0;
        this._pausedTime = 0;
        this._paused = false;
        this._life = opts.life || 1000;
        this._delay = opts.delay || 0;
        this.loop = opts.loop || false;
        this.onframe = opts.onframe || util.noop;
        this.ondestroy = opts.ondestroy || util.noop;
        this.onrestart = opts.onrestart || util.noop;
        opts.easing && this.setEasing(opts.easing);
    }
    Clip.prototype.step = function (globalTime, deltaTime) {
        if (!this._inited) {
            this._startTime = globalTime + this._delay;
            this._inited = true;
        }
        if (this._paused) {
            this._pausedTime += deltaTime;
            return;
        }
        var life = this._life;
        var elapsedTime = globalTime - this._startTime - this._pausedTime;
        var percent = elapsedTime / life;
        if (percent < 0) {
            percent = 0;
        }
        percent = Math.min(percent, 1);
        var easingFunc = this.easingFunc;
        var schedule = easingFunc ? easingFunc(percent) : percent;
        this.onframe(schedule);
        if (percent === 1) {
            if (this.loop) {
                var remainder = elapsedTime % life;
                this._startTime = globalTime - remainder;
                this._pausedTime = 0;
                this.onrestart();
            }
            else {
                return true;
            }
        }
        return false;
    };
    Clip.prototype.pause = function () {
        this._paused = true;
    };
    Clip.prototype.resume = function () {
        this._paused = false;
    };
    Clip.prototype.setEasing = function (easing) {
        this.easing = easing;
        this.easingFunc = (0,util.isFunction)(easing)
            ? easing
            : animation_easing[easing] || (0,cubicEasing.createCubicEasingFunc)(easing);
    };
    return Clip;
}());
/* export default */ var animation_Clip = (Clip_Clip);

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/tool/color.js
var color = __webpack_require__(59886);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/svg/helper.js
var helper = __webpack_require__(25483);
;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/animation/Animator.js






;
var arraySlice = Array.prototype.slice;
function interpolateNumber(p0, p1, percent) {
    return (p1 - p0) * percent + p0;
}
function interpolate1DArray(out, p0, p1, percent) {
    var len = p0.length;
    for (var i = 0; i < len; i++) {
        out[i] = interpolateNumber(p0[i], p1[i], percent);
    }
    return out;
}
function interpolate2DArray(out, p0, p1, percent) {
    var len = p0.length;
    var len2 = len && p0[0].length;
    for (var i = 0; i < len; i++) {
        if (!out[i]) {
            out[i] = [];
        }
        for (var j = 0; j < len2; j++) {
            out[i][j] = interpolateNumber(p0[i][j], p1[i][j], percent);
        }
    }
    return out;
}
function add1DArray(out, p0, p1, sign) {
    var len = p0.length;
    for (var i = 0; i < len; i++) {
        out[i] = p0[i] + p1[i] * sign;
    }
    return out;
}
function add2DArray(out, p0, p1, sign) {
    var len = p0.length;
    var len2 = len && p0[0].length;
    for (var i = 0; i < len; i++) {
        if (!out[i]) {
            out[i] = [];
        }
        for (var j = 0; j < len2; j++) {
            out[i][j] = p0[i][j] + p1[i][j] * sign;
        }
    }
    return out;
}
function fillColorStops(val0, val1) {
    var len0 = val0.length;
    var len1 = val1.length;
    var shorterArr = len0 > len1 ? val1 : val0;
    var shorterLen = Math.min(len0, len1);
    var last = shorterArr[shorterLen - 1] || { color: [0, 0, 0, 0], offset: 0 };
    for (var i = shorterLen; i < Math.max(len0, len1); i++) {
        shorterArr.push({
            offset: last.offset,
            color: last.color.slice()
        });
    }
}
function fillArray(val0, val1, arrDim) {
    var arr0 = val0;
    var arr1 = val1;
    if (!arr0.push || !arr1.push) {
        return;
    }
    var arr0Len = arr0.length;
    var arr1Len = arr1.length;
    if (arr0Len !== arr1Len) {
        var isPreviousLarger = arr0Len > arr1Len;
        if (isPreviousLarger) {
            arr0.length = arr1Len;
        }
        else {
            for (var i = arr0Len; i < arr1Len; i++) {
                arr0.push(arrDim === 1 ? arr1[i] : arraySlice.call(arr1[i]));
            }
        }
    }
    var len2 = arr0[0] && arr0[0].length;
    for (var i = 0; i < arr0.length; i++) {
        if (arrDim === 1) {
            if (isNaN(arr0[i])) {
                arr0[i] = arr1[i];
            }
        }
        else {
            for (var j = 0; j < len2; j++) {
                if (isNaN(arr0[i][j])) {
                    arr0[i][j] = arr1[i][j];
                }
            }
        }
    }
}
function cloneValue(value) {
    if ((0,util.isArrayLike)(value)) {
        var len = value.length;
        if ((0,util.isArrayLike)(value[0])) {
            var ret = [];
            for (var i = 0; i < len; i++) {
                ret.push(arraySlice.call(value[i]));
            }
            return ret;
        }
        return arraySlice.call(value);
    }
    return value;
}
function rgba2String(rgba) {
    rgba[0] = Math.floor(rgba[0]) || 0;
    rgba[1] = Math.floor(rgba[1]) || 0;
    rgba[2] = Math.floor(rgba[2]) || 0;
    rgba[3] = rgba[3] == null ? 1 : rgba[3];
    return 'rgba(' + rgba.join(',') + ')';
}
function guessArrayDim(value) {
    return (0,util.isArrayLike)(value && value[0]) ? 2 : 1;
}
var VALUE_TYPE_NUMBER = 0;
var VALUE_TYPE_1D_ARRAY = 1;
var VALUE_TYPE_2D_ARRAY = 2;
var VALUE_TYPE_COLOR = 3;
var VALUE_TYPE_LINEAR_GRADIENT = 4;
var VALUE_TYPE_RADIAL_GRADIENT = 5;
var VALUE_TYPE_UNKOWN = 6;
function isGradientValueType(valType) {
    return valType === VALUE_TYPE_LINEAR_GRADIENT || valType === VALUE_TYPE_RADIAL_GRADIENT;
}
function isArrayValueType(valType) {
    return valType === VALUE_TYPE_1D_ARRAY || valType === VALUE_TYPE_2D_ARRAY;
}
var tmpRgba = [0, 0, 0, 0];
var Animator_Track = (function () {
    function Track(propName) {
        this.keyframes = [];
        this.discrete = false;
        this._invalid = false;
        this._needsSort = false;
        this._lastFr = 0;
        this._lastFrP = 0;
        this.propName = propName;
    }
    Track.prototype.isFinished = function () {
        return this._finished;
    };
    Track.prototype.setFinished = function () {
        this._finished = true;
        if (this._additiveTrack) {
            this._additiveTrack.setFinished();
        }
    };
    Track.prototype.needsAnimate = function () {
        return this.keyframes.length >= 1;
    };
    Track.prototype.getAdditiveTrack = function () {
        return this._additiveTrack;
    };
    Track.prototype.addKeyframe = function (time, rawValue, easing) {
        this._needsSort = true;
        var keyframes = this.keyframes;
        var len = keyframes.length;
        var discrete = false;
        var valType = VALUE_TYPE_UNKOWN;
        var value = rawValue;
        if ((0,util.isArrayLike)(rawValue)) {
            var arrayDim = guessArrayDim(rawValue);
            valType = arrayDim;
            if (arrayDim === 1 && !(0,util.isNumber)(rawValue[0])
                || arrayDim === 2 && !(0,util.isNumber)(rawValue[0][0])) {
                discrete = true;
            }
        }
        else {
            if ((0,util.isNumber)(rawValue) && !(0,util.eqNaN)(rawValue)) {
                valType = VALUE_TYPE_NUMBER;
            }
            else if ((0,util.isString)(rawValue)) {
                if (!isNaN(+rawValue)) {
                    valType = VALUE_TYPE_NUMBER;
                }
                else {
                    var colorArray = color.parse(rawValue);
                    if (colorArray) {
                        value = colorArray;
                        valType = VALUE_TYPE_COLOR;
                    }
                }
            }
            else if ((0,util.isGradientObject)(rawValue)) {
                var parsedGradient = (0,util.extend)({}, value);
                parsedGradient.colorStops = (0,util.map)(rawValue.colorStops, function (colorStop) { return ({
                    offset: colorStop.offset,
                    color: color.parse(colorStop.color)
                }); });
                if ((0,helper.isLinearGradient)(rawValue)) {
                    valType = VALUE_TYPE_LINEAR_GRADIENT;
                }
                else if ((0,helper.isRadialGradient)(rawValue)) {
                    valType = VALUE_TYPE_RADIAL_GRADIENT;
                }
                value = parsedGradient;
            }
        }
        if (len === 0) {
            this.valType = valType;
        }
        else if (valType !== this.valType || valType === VALUE_TYPE_UNKOWN) {
            discrete = true;
        }
        this.discrete = this.discrete || discrete;
        var kf = {
            time: time,
            value: value,
            rawValue: rawValue,
            percent: 0
        };
        if (easing) {
            kf.easing = easing;
            kf.easingFunc = (0,util.isFunction)(easing)
                ? easing
                : animation_easing[easing] || (0,cubicEasing.createCubicEasingFunc)(easing);
        }
        keyframes.push(kf);
        return kf;
    };
    Track.prototype.prepare = function (maxTime, additiveTrack) {
        var kfs = this.keyframes;
        if (this._needsSort) {
            kfs.sort(function (a, b) {
                return a.time - b.time;
            });
        }
        var valType = this.valType;
        var kfsLen = kfs.length;
        var lastKf = kfs[kfsLen - 1];
        var isDiscrete = this.discrete;
        var isArr = isArrayValueType(valType);
        var isGradient = isGradientValueType(valType);
        for (var i = 0; i < kfsLen; i++) {
            var kf = kfs[i];
            var value = kf.value;
            var lastValue = lastKf.value;
            kf.percent = kf.time / maxTime;
            if (!isDiscrete) {
                if (isArr && i !== kfsLen - 1) {
                    fillArray(value, lastValue, valType);
                }
                else if (isGradient) {
                    fillColorStops(value.colorStops, lastValue.colorStops);
                }
            }
        }
        if (!isDiscrete
            && valType !== VALUE_TYPE_RADIAL_GRADIENT
            && additiveTrack
            && this.needsAnimate()
            && additiveTrack.needsAnimate()
            && valType === additiveTrack.valType
            && !additiveTrack._finished) {
            this._additiveTrack = additiveTrack;
            var startValue = kfs[0].value;
            for (var i = 0; i < kfsLen; i++) {
                if (valType === VALUE_TYPE_NUMBER) {
                    kfs[i].additiveValue = kfs[i].value - startValue;
                }
                else if (valType === VALUE_TYPE_COLOR) {
                    kfs[i].additiveValue =
                        add1DArray([], kfs[i].value, startValue, -1);
                }
                else if (isArrayValueType(valType)) {
                    kfs[i].additiveValue = valType === VALUE_TYPE_1D_ARRAY
                        ? add1DArray([], kfs[i].value, startValue, -1)
                        : add2DArray([], kfs[i].value, startValue, -1);
                }
            }
        }
    };
    Track.prototype.step = function (target, percent) {
        if (this._finished) {
            return;
        }
        if (this._additiveTrack && this._additiveTrack._finished) {
            this._additiveTrack = null;
        }
        var isAdditive = this._additiveTrack != null;
        var valueKey = isAdditive ? 'additiveValue' : 'value';
        var valType = this.valType;
        var keyframes = this.keyframes;
        var kfsNum = keyframes.length;
        var propName = this.propName;
        var isValueColor = valType === VALUE_TYPE_COLOR;
        var frameIdx;
        var lastFrame = this._lastFr;
        var mathMin = Math.min;
        var frame;
        var nextFrame;
        if (kfsNum === 1) {
            frame = nextFrame = keyframes[0];
        }
        else {
            if (percent < 0) {
                frameIdx = 0;
            }
            else if (percent < this._lastFrP) {
                var start = mathMin(lastFrame + 1, kfsNum - 1);
                for (frameIdx = start; frameIdx >= 0; frameIdx--) {
                    if (keyframes[frameIdx].percent <= percent) {
                        break;
                    }
                }
                frameIdx = mathMin(frameIdx, kfsNum - 2);
            }
            else {
                for (frameIdx = lastFrame; frameIdx < kfsNum; frameIdx++) {
                    if (keyframes[frameIdx].percent > percent) {
                        break;
                    }
                }
                frameIdx = mathMin(frameIdx - 1, kfsNum - 2);
            }
            nextFrame = keyframes[frameIdx + 1];
            frame = keyframes[frameIdx];
        }
        if (!(frame && nextFrame)) {
            return;
        }
        this._lastFr = frameIdx;
        this._lastFrP = percent;
        var interval = (nextFrame.percent - frame.percent);
        var w = interval === 0 ? 1 : mathMin((percent - frame.percent) / interval, 1);
        if (nextFrame.easingFunc) {
            w = nextFrame.easingFunc(w);
        }
        var targetArr = isAdditive ? this._additiveValue
            : (isValueColor ? tmpRgba : target[propName]);
        if ((isArrayValueType(valType) || isValueColor) && !targetArr) {
            targetArr = this._additiveValue = [];
        }
        if (this.discrete) {
            target[propName] = w < 1 ? frame.rawValue : nextFrame.rawValue;
        }
        else if (isArrayValueType(valType)) {
            valType === VALUE_TYPE_1D_ARRAY
                ? interpolate1DArray(targetArr, frame[valueKey], nextFrame[valueKey], w)
                : interpolate2DArray(targetArr, frame[valueKey], nextFrame[valueKey], w);
        }
        else if (isGradientValueType(valType)) {
            var val = frame[valueKey];
            var nextVal_1 = nextFrame[valueKey];
            var isLinearGradient_1 = valType === VALUE_TYPE_LINEAR_GRADIENT;
            target[propName] = {
                type: isLinearGradient_1 ? 'linear' : 'radial',
                x: interpolateNumber(val.x, nextVal_1.x, w),
                y: interpolateNumber(val.y, nextVal_1.y, w),
                colorStops: (0,util.map)(val.colorStops, function (colorStop, idx) {
                    var nextColorStop = nextVal_1.colorStops[idx];
                    return {
                        offset: interpolateNumber(colorStop.offset, nextColorStop.offset, w),
                        color: rgba2String(interpolate1DArray([], colorStop.color, nextColorStop.color, w))
                    };
                }),
                global: nextVal_1.global
            };
            if (isLinearGradient_1) {
                target[propName].x2 = interpolateNumber(val.x2, nextVal_1.x2, w);
                target[propName].y2 = interpolateNumber(val.y2, nextVal_1.y2, w);
            }
            else {
                target[propName].r = interpolateNumber(val.r, nextVal_1.r, w);
            }
        }
        else if (isValueColor) {
            interpolate1DArray(targetArr, frame[valueKey], nextFrame[valueKey], w);
            if (!isAdditive) {
                target[propName] = rgba2String(targetArr);
            }
        }
        else {
            var value = interpolateNumber(frame[valueKey], nextFrame[valueKey], w);
            if (isAdditive) {
                this._additiveValue = value;
            }
            else {
                target[propName] = value;
            }
        }
        if (isAdditive) {
            this._addToTarget(target);
        }
    };
    Track.prototype._addToTarget = function (target) {
        var valType = this.valType;
        var propName = this.propName;
        var additiveValue = this._additiveValue;
        if (valType === VALUE_TYPE_NUMBER) {
            target[propName] = target[propName] + additiveValue;
        }
        else if (valType === VALUE_TYPE_COLOR) {
            color.parse(target[propName], tmpRgba);
            add1DArray(tmpRgba, tmpRgba, additiveValue, 1);
            target[propName] = rgba2String(tmpRgba);
        }
        else if (valType === VALUE_TYPE_1D_ARRAY) {
            add1DArray(target[propName], target[propName], additiveValue, 1);
        }
        else if (valType === VALUE_TYPE_2D_ARRAY) {
            add2DArray(target[propName], target[propName], additiveValue, 1);
        }
    };
    return Track;
}());
var Animator_Animator = (function () {
    function Animator(target, loop, allowDiscreteAnimation, additiveTo) {
        this._tracks = {};
        this._trackKeys = [];
        this._maxTime = 0;
        this._started = 0;
        this._clip = null;
        this._target = target;
        this._loop = loop;
        if (loop && additiveTo) {
            (0,util.logError)('Can\' use additive animation on looped animation.');
            return;
        }
        this._additiveAnimators = additiveTo;
        this._allowDiscrete = allowDiscreteAnimation;
    }
    Animator.prototype.getMaxTime = function () {
        return this._maxTime;
    };
    Animator.prototype.getDelay = function () {
        return this._delay;
    };
    Animator.prototype.getLoop = function () {
        return this._loop;
    };
    Animator.prototype.getTarget = function () {
        return this._target;
    };
    Animator.prototype.changeTarget = function (target) {
        this._target = target;
    };
    Animator.prototype.when = function (time, props, easing) {
        return this.whenWithKeys(time, props, (0,util.keys)(props), easing);
    };
    Animator.prototype.whenWithKeys = function (time, props, propNames, easing) {
        var tracks = this._tracks;
        for (var i = 0; i < propNames.length; i++) {
            var propName = propNames[i];
            var track = tracks[propName];
            if (!track) {
                track = tracks[propName] = new Animator_Track(propName);
                var initialValue = void 0;
                var additiveTrack = this._getAdditiveTrack(propName);
                if (additiveTrack) {
                    var addtiveTrackKfs = additiveTrack.keyframes;
                    var lastFinalKf = addtiveTrackKfs[addtiveTrackKfs.length - 1];
                    initialValue = lastFinalKf && lastFinalKf.value;
                    if (additiveTrack.valType === VALUE_TYPE_COLOR && initialValue) {
                        initialValue = rgba2String(initialValue);
                    }
                }
                else {
                    initialValue = this._target[propName];
                }
                if (initialValue == null) {
                    continue;
                }
                if (time > 0) {
                    track.addKeyframe(0, cloneValue(initialValue), easing);
                }
                this._trackKeys.push(propName);
            }
            track.addKeyframe(time, cloneValue(props[propName]), easing);
        }
        this._maxTime = Math.max(this._maxTime, time);
        return this;
    };
    Animator.prototype.pause = function () {
        this._clip.pause();
        this._paused = true;
    };
    Animator.prototype.resume = function () {
        this._clip.resume();
        this._paused = false;
    };
    Animator.prototype.isPaused = function () {
        return !!this._paused;
    };
    Animator.prototype.duration = function (duration) {
        this._maxTime = duration;
        this._force = true;
        return this;
    };
    Animator.prototype._doneCallback = function () {
        this._setTracksFinished();
        this._clip = null;
        var doneList = this._doneCbs;
        if (doneList) {
            var len = doneList.length;
            for (var i = 0; i < len; i++) {
                doneList[i].call(this);
            }
        }
    };
    Animator.prototype._abortedCallback = function () {
        this._setTracksFinished();
        var animation = this.animation;
        var abortedList = this._abortedCbs;
        if (animation) {
            animation.removeClip(this._clip);
        }
        this._clip = null;
        if (abortedList) {
            for (var i = 0; i < abortedList.length; i++) {
                abortedList[i].call(this);
            }
        }
    };
    Animator.prototype._setTracksFinished = function () {
        var tracks = this._tracks;
        var tracksKeys = this._trackKeys;
        for (var i = 0; i < tracksKeys.length; i++) {
            tracks[tracksKeys[i]].setFinished();
        }
    };
    Animator.prototype._getAdditiveTrack = function (trackName) {
        var additiveTrack;
        var additiveAnimators = this._additiveAnimators;
        if (additiveAnimators) {
            for (var i = 0; i < additiveAnimators.length; i++) {
                var track = additiveAnimators[i].getTrack(trackName);
                if (track) {
                    additiveTrack = track;
                }
            }
        }
        return additiveTrack;
    };
    Animator.prototype.start = function (easing) {
        if (this._started > 0) {
            return;
        }
        this._started = 1;
        var self = this;
        var tracks = [];
        var maxTime = this._maxTime || 0;
        for (var i = 0; i < this._trackKeys.length; i++) {
            var propName = this._trackKeys[i];
            var track = this._tracks[propName];
            var additiveTrack = this._getAdditiveTrack(propName);
            var kfs = track.keyframes;
            var kfsNum = kfs.length;
            track.prepare(maxTime, additiveTrack);
            if (track.needsAnimate()) {
                if (!this._allowDiscrete && track.discrete) {
                    var lastKf = kfs[kfsNum - 1];
                    if (lastKf) {
                        self._target[track.propName] = lastKf.rawValue;
                    }
                    track.setFinished();
                }
                else {
                    tracks.push(track);
                }
            }
        }
        if (tracks.length || this._force) {
            var clip = new animation_Clip({
                life: maxTime,
                loop: this._loop,
                delay: this._delay || 0,
                onframe: function (percent) {
                    self._started = 2;
                    var additiveAnimators = self._additiveAnimators;
                    if (additiveAnimators) {
                        var stillHasAdditiveAnimator = false;
                        for (var i = 0; i < additiveAnimators.length; i++) {
                            if (additiveAnimators[i]._clip) {
                                stillHasAdditiveAnimator = true;
                                break;
                            }
                        }
                        if (!stillHasAdditiveAnimator) {
                            self._additiveAnimators = null;
                        }
                    }
                    for (var i = 0; i < tracks.length; i++) {
                        tracks[i].step(self._target, percent);
                    }
                    var onframeList = self._onframeCbs;
                    if (onframeList) {
                        for (var i = 0; i < onframeList.length; i++) {
                            onframeList[i](self._target, percent);
                        }
                    }
                },
                ondestroy: function () {
                    self._doneCallback();
                }
            });
            this._clip = clip;
            if (this.animation) {
                this.animation.addClip(clip);
            }
            if (easing) {
                clip.setEasing(easing);
            }
        }
        else {
            this._doneCallback();
        }
        return this;
    };
    Animator.prototype.stop = function (forwardToLast) {
        if (!this._clip) {
            return;
        }
        var clip = this._clip;
        if (forwardToLast) {
            clip.onframe(1);
        }
        this._abortedCallback();
    };
    Animator.prototype.delay = function (time) {
        this._delay = time;
        return this;
    };
    Animator.prototype.during = function (cb) {
        if (cb) {
            if (!this._onframeCbs) {
                this._onframeCbs = [];
            }
            this._onframeCbs.push(cb);
        }
        return this;
    };
    Animator.prototype.done = function (cb) {
        if (cb) {
            if (!this._doneCbs) {
                this._doneCbs = [];
            }
            this._doneCbs.push(cb);
        }
        return this;
    };
    Animator.prototype.aborted = function (cb) {
        if (cb) {
            if (!this._abortedCbs) {
                this._abortedCbs = [];
            }
            this._abortedCbs.push(cb);
        }
        return this;
    };
    Animator.prototype.getClip = function () {
        return this._clip;
    };
    Animator.prototype.getTrack = function (propName) {
        return this._tracks[propName];
    };
    Animator.prototype.getTracks = function () {
        var _this = this;
        return (0,util.map)(this._trackKeys, function (key) { return _this._tracks[key]; });
    };
    Animator.prototype.stopTracks = function (propNames, forwardToLast) {
        if (!propNames.length || !this._clip) {
            return true;
        }
        var tracks = this._tracks;
        var tracksKeys = this._trackKeys;
        for (var i = 0; i < propNames.length; i++) {
            var track = tracks[propNames[i]];
            if (track && !track.isFinished()) {
                if (forwardToLast) {
                    track.step(this._target, 1);
                }
                else if (this._started === 1) {
                    track.step(this._target, 0);
                }
                track.setFinished();
            }
        }
        var allAborted = true;
        for (var i = 0; i < tracksKeys.length; i++) {
            if (!tracks[tracksKeys[i]].isFinished()) {
                allAborted = false;
                break;
            }
        }
        if (allAborted) {
            this._abortedCallback();
        }
        return allAborted;
    };
    Animator.prototype.saveTo = function (target, trackKeys, firstOrLast) {
        if (!target) {
            return;
        }
        trackKeys = trackKeys || this._trackKeys;
        for (var i = 0; i < trackKeys.length; i++) {
            var propName = trackKeys[i];
            var track = this._tracks[propName];
            if (!track || track.isFinished()) {
                continue;
            }
            var kfs = track.keyframes;
            var kf = kfs[firstOrLast ? 0 : kfs.length - 1];
            if (kf) {
                target[propName] = cloneValue(kf.rawValue);
            }
        }
    };
    Animator.prototype.__changeFinalValue = function (finalProps, trackKeys) {
        trackKeys = trackKeys || (0,util.keys)(finalProps);
        for (var i = 0; i < trackKeys.length; i++) {
            var propName = trackKeys[i];
            var track = this._tracks[propName];
            if (!track) {
                continue;
            }
            var kfs = track.keyframes;
            if (kfs.length > 1) {
                var lastKf = kfs.pop();
                track.addKeyframe(lastKf.time, finalProps[propName]);
                track.prepare(this._maxTime, track.getAdditiveTrack());
            }
        }
    };
    return Animator;
}());
/* export default */ var animation_Animator = (Animator_Animator);


}),
11316: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createCubicEasingFunc: function() { return createCubicEasingFunc; }
});
/* import */ var _core_curve_js__rspack_import_1 = __webpack_require__(50631);
/* import */ var _core_util_js__rspack_import_0 = __webpack_require__(9774);


var regexp = /cubic-bezier\(([0-9,\.e ]+)\)/;
function createCubicEasingFunc(cubicEasingStr) {
    var cubic = cubicEasingStr && regexp.exec(cubicEasingStr);
    if (cubic) {
        var points = cubic[1].split(',');
        var a_1 = +(0,_core_util_js__rspack_import_0.trim)(points[0]);
        var b_1 = +(0,_core_util_js__rspack_import_0.trim)(points[1]);
        var c_1 = +(0,_core_util_js__rspack_import_0.trim)(points[2]);
        var d_1 = +(0,_core_util_js__rspack_import_0.trim)(points[3]);
        if (isNaN(a_1 + b_1 + c_1 + d_1)) {
            return;
        }
        var roots_1 = [];
        return function (p) {
            return p <= 0
                ? 0 : p >= 1
                ? 1
                : (0,_core_curve_js__rspack_import_1.cubicRootAt)(0, a_1, c_1, 1, p, roots_1) && (0,_core_curve_js__rspack_import_1.cubicAt)(0, b_1, d_1, 1, roots_1[0]);
        };
    }
}


}),
53717: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var _core_env_js__rspack_import_0 = __webpack_require__(18311);

var requestAnimationFrame;
requestAnimationFrame = (_core_env_js__rspack_import_0["default"].hasGlobalWindow
    && ((window.requestAnimationFrame && window.requestAnimationFrame.bind(window))
        || (window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window))
        || window.mozRequestAnimationFrame
        || window.webkitRequestAnimationFrame)) || function (func) {
    return setTimeout(func, 16);
};
/* export default */ __webpack_exports__["default"] = (requestAnimationFrame);


}),
819: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Painter; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/config.js
var lib_config = __webpack_require__(76486);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(9774);
// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(2492);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/Eventful.js
var Eventful = __webpack_require__(31969);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/canvas/helper.js
var helper = __webpack_require__(69291);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/canvas/graphic.js
var graphic = __webpack_require__(96111);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/BoundingRect.js
var BoundingRect = __webpack_require__(7544);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/constants.js
var constants = __webpack_require__(66684);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/platform.js
var platform = __webpack_require__(70145);
;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/canvas/Layer.js









function createDom(id, painter, dpr) {
    var newDom = platform.platformApi.createCanvas();
    var width = painter.getWidth();
    var height = painter.getHeight();
    var newDomStyle = newDom.style;
    if (newDomStyle) {
        newDomStyle.position = 'absolute';
        newDomStyle.left = '0';
        newDomStyle.top = '0';
        newDomStyle.width = width + 'px';
        newDomStyle.height = height + 'px';
        newDom.setAttribute('data-zr-dom-id', id);
    }
    newDom.width = width * dpr;
    newDom.height = height * dpr;
    return newDom;
}
;
var Layer_Layer = (function (_super) {
    (0,tslib_es6.__extends)(Layer, _super);
    function Layer(id, painter, dpr) {
        var _this = _super.call(this) || this;
        _this.motionBlur = false;
        _this.lastFrameAlpha = 0.7;
        _this.dpr = 1;
        _this.virtual = false;
        _this.config = {};
        _this.incremental = false;
        _this.zlevel = 0;
        _this.maxRepaintRectCount = 5;
        _this.__dirty = true;
        _this.__firstTimePaint = true;
        _this.__used = false;
        _this.__drawIndex = 0;
        _this.__startIndex = 0;
        _this.__endIndex = 0;
        _this.__prevStartIndex = null;
        _this.__prevEndIndex = null;
        var dom;
        dpr = dpr || lib_config.devicePixelRatio;
        if (typeof id === 'string') {
            dom = createDom(id, painter, dpr);
        }
        else if (util.isObject(id)) {
            dom = id;
            id = dom.id;
        }
        _this.id = id;
        _this.dom = dom;
        var domStyle = dom.style;
        if (domStyle) {
            util.disableUserSelect(dom);
            dom.onselectstart = function () { return false; };
            domStyle.padding = '0';
            domStyle.margin = '0';
            domStyle.borderWidth = '0';
        }
        _this.painter = painter;
        _this.dpr = dpr;
        return _this;
    }
    Layer.prototype.getElementCount = function () {
        return this.__endIndex - this.__startIndex;
    };
    Layer.prototype.afterBrush = function () {
        this.__prevStartIndex = this.__startIndex;
        this.__prevEndIndex = this.__endIndex;
    };
    Layer.prototype.initContext = function () {
        this.ctx = this.dom.getContext('2d');
        this.ctx.dpr = this.dpr;
    };
    Layer.prototype.setUnpainted = function () {
        this.__firstTimePaint = true;
    };
    Layer.prototype.createBackBuffer = function () {
        var dpr = this.dpr;
        this.domBack = createDom('back-' + this.id, this.painter, dpr);
        this.ctxBack = this.domBack.getContext('2d');
        if (dpr !== 1) {
            this.ctxBack.scale(dpr, dpr);
        }
    };
    Layer.prototype.createRepaintRects = function (displayList, prevList, viewWidth, viewHeight) {
        if (this.__firstTimePaint) {
            this.__firstTimePaint = false;
            return null;
        }
        var mergedRepaintRects = [];
        var maxRepaintRectCount = this.maxRepaintRectCount;
        var full = false;
        var pendingRect = new BoundingRect["default"](0, 0, 0, 0);
        function addRectToMergePool(rect) {
            if (!rect.isFinite() || rect.isZero()) {
                return;
            }
            if (mergedRepaintRects.length === 0) {
                var boundingRect = new BoundingRect["default"](0, 0, 0, 0);
                boundingRect.copy(rect);
                mergedRepaintRects.push(boundingRect);
            }
            else {
                var isMerged = false;
                var minDeltaArea = Infinity;
                var bestRectToMergeIdx = 0;
                for (var i = 0; i < mergedRepaintRects.length; ++i) {
                    var mergedRect = mergedRepaintRects[i];
                    if (mergedRect.intersect(rect)) {
                        var pendingRect_1 = new BoundingRect["default"](0, 0, 0, 0);
                        pendingRect_1.copy(mergedRect);
                        pendingRect_1.union(rect);
                        mergedRepaintRects[i] = pendingRect_1;
                        isMerged = true;
                        break;
                    }
                    else if (full) {
                        pendingRect.copy(rect);
                        pendingRect.union(mergedRect);
                        var aArea = rect.width * rect.height;
                        var bArea = mergedRect.width * mergedRect.height;
                        var pendingArea = pendingRect.width * pendingRect.height;
                        var deltaArea = pendingArea - aArea - bArea;
                        if (deltaArea < minDeltaArea) {
                            minDeltaArea = deltaArea;
                            bestRectToMergeIdx = i;
                        }
                    }
                }
                if (full) {
                    mergedRepaintRects[bestRectToMergeIdx].union(rect);
                    isMerged = true;
                }
                if (!isMerged) {
                    var boundingRect = new BoundingRect["default"](0, 0, 0, 0);
                    boundingRect.copy(rect);
                    mergedRepaintRects.push(boundingRect);
                }
                if (!full) {
                    full = mergedRepaintRects.length >= maxRepaintRectCount;
                }
            }
        }
        for (var i = this.__startIndex; i < this.__endIndex; ++i) {
            var el = displayList[i];
            if (el) {
                var shouldPaint = el.shouldBePainted(viewWidth, viewHeight, true, true);
                var prevRect = el.__isRendered && ((el.__dirty & constants.REDRAW_BIT) || !shouldPaint)
                    ? el.getPrevPaintRect()
                    : null;
                if (prevRect) {
                    addRectToMergePool(prevRect);
                }
                var curRect = shouldPaint && ((el.__dirty & constants.REDRAW_BIT) || !el.__isRendered)
                    ? el.getPaintRect()
                    : null;
                if (curRect) {
                    addRectToMergePool(curRect);
                }
            }
        }
        for (var i = this.__prevStartIndex; i < this.__prevEndIndex; ++i) {
            var el = prevList[i];
            var shouldPaint = el && el.shouldBePainted(viewWidth, viewHeight, true, true);
            if (el && (!shouldPaint || !el.__zr) && el.__isRendered) {
                var prevRect = el.getPrevPaintRect();
                if (prevRect) {
                    addRectToMergePool(prevRect);
                }
            }
        }
        var hasIntersections;
        do {
            hasIntersections = false;
            for (var i = 0; i < mergedRepaintRects.length;) {
                if (mergedRepaintRects[i].isZero()) {
                    mergedRepaintRects.splice(i, 1);
                    continue;
                }
                for (var j = i + 1; j < mergedRepaintRects.length;) {
                    if (mergedRepaintRects[i].intersect(mergedRepaintRects[j])) {
                        hasIntersections = true;
                        mergedRepaintRects[i].union(mergedRepaintRects[j]);
                        mergedRepaintRects.splice(j, 1);
                    }
                    else {
                        j++;
                    }
                }
                i++;
            }
        } while (hasIntersections);
        this._paintRects = mergedRepaintRects;
        return mergedRepaintRects;
    };
    Layer.prototype.debugGetPaintRects = function () {
        return (this._paintRects || []).slice();
    };
    Layer.prototype.resize = function (width, height) {
        var dpr = this.dpr;
        var dom = this.dom;
        var domStyle = dom.style;
        var domBack = this.domBack;
        if (domStyle) {
            domStyle.width = width + 'px';
            domStyle.height = height + 'px';
        }
        dom.width = width * dpr;
        dom.height = height * dpr;
        if (domBack) {
            domBack.width = width * dpr;
            domBack.height = height * dpr;
            if (dpr !== 1) {
                this.ctxBack.scale(dpr, dpr);
            }
        }
    };
    Layer.prototype.clear = function (clearAll, clearColor, repaintRects) {
        var dom = this.dom;
        var ctx = this.ctx;
        var width = dom.width;
        var height = dom.height;
        clearColor = clearColor || this.clearColor;
        var haveMotionBLur = this.motionBlur && !clearAll;
        var lastFrameAlpha = this.lastFrameAlpha;
        var dpr = this.dpr;
        var self = this;
        if (haveMotionBLur) {
            if (!this.domBack) {
                this.createBackBuffer();
            }
            this.ctxBack.globalCompositeOperation = 'copy';
            this.ctxBack.drawImage(dom, 0, 0, width / dpr, height / dpr);
        }
        var domBack = this.domBack;
        function doClear(x, y, width, height) {
            ctx.clearRect(x, y, width, height);
            if (clearColor && clearColor !== 'transparent') {
                var clearColorGradientOrPattern = void 0;
                if (util.isGradientObject(clearColor)) {
                    var shouldCache = clearColor.global || (clearColor.__width === width
                        && clearColor.__height === height);
                    clearColorGradientOrPattern = shouldCache
                        && clearColor.__canvasGradient
                        || (0,helper.getCanvasGradient)(ctx, clearColor, {
                            x: 0,
                            y: 0,
                            width: width,
                            height: height
                        });
                    clearColor.__canvasGradient = clearColorGradientOrPattern;
                    clearColor.__width = width;
                    clearColor.__height = height;
                }
                else if (util.isImagePatternObject(clearColor)) {
                    clearColor.scaleX = clearColor.scaleX || dpr;
                    clearColor.scaleY = clearColor.scaleY || dpr;
                    clearColorGradientOrPattern = (0,graphic.createCanvasPattern)(ctx, clearColor, {
                        dirty: function () {
                            self.setUnpainted();
                            self.painter.refresh();
                        }
                    });
                }
                ctx.save();
                ctx.fillStyle = clearColorGradientOrPattern || clearColor;
                ctx.fillRect(x, y, width, height);
                ctx.restore();
            }
            if (haveMotionBLur) {
                ctx.save();
                ctx.globalAlpha = lastFrameAlpha;
                ctx.drawImage(domBack, x, y, width, height);
                ctx.restore();
            }
        }
        ;
        if (!repaintRects || haveMotionBLur) {
            doClear(0, 0, width, height);
        }
        else if (repaintRects.length) {
            util.each(repaintRects, function (rect) {
                doClear(rect.x * dpr, rect.y * dpr, rect.width * dpr, rect.height * dpr);
            });
        }
    };
    return Layer;
}(Eventful["default"]));
/* export default */ var canvas_Layer = (Layer_Layer);

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/animation/requestAnimationFrame.js
var requestAnimationFrame = __webpack_require__(53717);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/env.js
var env = __webpack_require__(18311);
;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/canvas/Painter.js








var HOVER_LAYER_ZLEVEL = 1e5;
var CANVAS_ZLEVEL = 314159;
var EL_AFTER_INCREMENTAL_INC = 0.01;
var INCREMENTAL_INC = 0.001;
function isLayerValid(layer) {
    if (!layer) {
        return false;
    }
    if (layer.__builtin__) {
        return true;
    }
    if (typeof (layer.resize) !== 'function'
        || typeof (layer.refresh) !== 'function') {
        return false;
    }
    return true;
}
function createRoot(width, height) {
    var domRoot = document.createElement('div');
    domRoot.style.cssText = [
        'position:relative',
        'width:' + width + 'px',
        'height:' + height + 'px',
        'padding:0',
        'margin:0',
        'border-width:0'
    ].join(';') + ';';
    return domRoot;
}
var Painter_CanvasPainter = (function () {
    function CanvasPainter(root, storage, opts, id) {
        this.type = 'canvas';
        this._zlevelList = [];
        this._prevDisplayList = [];
        this._layers = {};
        this._layerConfig = {};
        this._needsManuallyCompositing = false;
        this.type = 'canvas';
        var singleCanvas = !root.nodeName
            || root.nodeName.toUpperCase() === 'CANVAS';
        this._opts = opts = util.extend({}, opts || {});
        this.dpr = opts.devicePixelRatio || lib_config.devicePixelRatio;
        this._singleCanvas = singleCanvas;
        this.root = root;
        var rootStyle = root.style;
        if (rootStyle) {
            util.disableUserSelect(root);
            root.innerHTML = '';
        }
        this.storage = storage;
        var zlevelList = this._zlevelList;
        this._prevDisplayList = [];
        var layers = this._layers;
        if (!singleCanvas) {
            this._width = (0,helper.getSize)(root, 0, opts);
            this._height = (0,helper.getSize)(root, 1, opts);
            var domRoot = this._domRoot = createRoot(this._width, this._height);
            root.appendChild(domRoot);
        }
        else {
            var rootCanvas = root;
            var width = rootCanvas.width;
            var height = rootCanvas.height;
            if (opts.width != null) {
                width = opts.width;
            }
            if (opts.height != null) {
                height = opts.height;
            }
            this.dpr = opts.devicePixelRatio || 1;
            rootCanvas.width = width * this.dpr;
            rootCanvas.height = height * this.dpr;
            this._width = width;
            this._height = height;
            var mainLayer = new canvas_Layer(rootCanvas, this, this.dpr);
            mainLayer.__builtin__ = true;
            mainLayer.initContext();
            layers[CANVAS_ZLEVEL] = mainLayer;
            mainLayer.zlevel = CANVAS_ZLEVEL;
            zlevelList.push(CANVAS_ZLEVEL);
            this._domRoot = root;
        }
    }
    CanvasPainter.prototype.getType = function () {
        return 'canvas';
    };
    CanvasPainter.prototype.isSingleCanvas = function () {
        return this._singleCanvas;
    };
    CanvasPainter.prototype.getViewportRoot = function () {
        return this._domRoot;
    };
    CanvasPainter.prototype.getViewportRootOffset = function () {
        var viewportRoot = this.getViewportRoot();
        if (viewportRoot) {
            return {
                offsetLeft: viewportRoot.offsetLeft || 0,
                offsetTop: viewportRoot.offsetTop || 0
            };
        }
    };
    CanvasPainter.prototype.refresh = function (paintAll) {
        var list = this.storage.getDisplayList(true);
        var prevList = this._prevDisplayList;
        var zlevelList = this._zlevelList;
        this._redrawId = Math.random();
        this._paintList(list, prevList, paintAll, this._redrawId);
        for (var i = 0; i < zlevelList.length; i++) {
            var z = zlevelList[i];
            var layer = this._layers[z];
            if (!layer.__builtin__ && layer.refresh) {
                var clearColor = i === 0 ? this._backgroundColor : null;
                layer.refresh(clearColor);
            }
        }
        if (this._opts.useDirtyRect) {
            this._prevDisplayList = list.slice();
        }
        return this;
    };
    CanvasPainter.prototype.refreshHover = function () {
        this._paintHoverList(this.storage.getDisplayList(false));
    };
    CanvasPainter.prototype._paintHoverList = function (list) {
        var len = list.length;
        var hoverLayer = this._hoverlayer;
        hoverLayer && hoverLayer.clear();
        if (!len) {
            return;
        }
        var scope = {
            inHover: true,
            viewWidth: this._width,
            viewHeight: this._height
        };
        var ctx;
        for (var i = 0; i < len; i++) {
            var el = list[i];
            if (el.__inHover) {
                if (!hoverLayer) {
                    hoverLayer = this._hoverlayer = this.getLayer(HOVER_LAYER_ZLEVEL);
                }
                if (!ctx) {
                    ctx = hoverLayer.ctx;
                    ctx.save();
                }
                (0,graphic.brush)(ctx, el, scope, i === len - 1);
            }
        }
        if (ctx) {
            ctx.restore();
        }
    };
    CanvasPainter.prototype.getHoverLayer = function () {
        return this.getLayer(HOVER_LAYER_ZLEVEL);
    };
    CanvasPainter.prototype.paintOne = function (ctx, el) {
        (0,graphic.brushSingle)(ctx, el);
    };
    CanvasPainter.prototype._paintList = function (list, prevList, paintAll, redrawId) {
        if (this._redrawId !== redrawId) {
            return;
        }
        paintAll = paintAll || false;
        this._updateLayerStatus(list);
        var _a = this._doPaintList(list, prevList, paintAll), finished = _a.finished, needsRefreshHover = _a.needsRefreshHover;
        if (this._needsManuallyCompositing) {
            this._compositeManually();
        }
        if (needsRefreshHover) {
            this._paintHoverList(list);
        }
        if (!finished) {
            var self_1 = this;
            (0,requestAnimationFrame["default"])(function () {
                self_1._paintList(list, prevList, paintAll, redrawId);
            });
        }
        else {
            this.eachLayer(function (layer) {
                layer.afterBrush && layer.afterBrush();
            });
        }
    };
    CanvasPainter.prototype._compositeManually = function () {
        var ctx = this.getLayer(CANVAS_ZLEVEL).ctx;
        var width = this._domRoot.width;
        var height = this._domRoot.height;
        ctx.clearRect(0, 0, width, height);
        this.eachBuiltinLayer(function (layer) {
            if (layer.virtual) {
                ctx.drawImage(layer.dom, 0, 0, width, height);
            }
        });
    };
    CanvasPainter.prototype._doPaintList = function (list, prevList, paintAll) {
        var _this = this;
        var layerList = [];
        var useDirtyRect = this._opts.useDirtyRect;
        for (var zi = 0; zi < this._zlevelList.length; zi++) {
            var zlevel = this._zlevelList[zi];
            var layer = this._layers[zlevel];
            if (layer.__builtin__
                && layer !== this._hoverlayer
                && (layer.__dirty || paintAll)) {
                layerList.push(layer);
            }
        }
        var finished = true;
        var needsRefreshHover = false;
        var _loop_1 = function (k) {
            var layer = layerList[k];
            var ctx = layer.ctx;
            var repaintRects = useDirtyRect
                && layer.createRepaintRects(list, prevList, this_1._width, this_1._height);
            var start = paintAll ? layer.__startIndex : layer.__drawIndex;
            var useTimer = !paintAll && layer.incremental && Date.now;
            var startTime = useTimer && Date.now();
            var clearColor = layer.zlevel === this_1._zlevelList[0]
                ? this_1._backgroundColor : null;
            if (layer.__startIndex === layer.__endIndex) {
                layer.clear(false, clearColor, repaintRects);
            }
            else if (start === layer.__startIndex) {
                var firstEl = list[start];
                if (!firstEl.incremental || !firstEl.notClear || paintAll) {
                    layer.clear(false, clearColor, repaintRects);
                }
            }
            if (start === -1) {
                console.error('For some unknown reason. drawIndex is -1');
                start = layer.__startIndex;
            }
            var i;
            var repaint = function (repaintRect) {
                var scope = {
                    inHover: false,
                    allClipped: false,
                    prevEl: null,
                    viewWidth: _this._width,
                    viewHeight: _this._height
                };
                for (i = start; i < layer.__endIndex; i++) {
                    var el = list[i];
                    if (el.__inHover) {
                        needsRefreshHover = true;
                    }
                    _this._doPaintEl(el, layer, useDirtyRect, repaintRect, scope, i === layer.__endIndex - 1);
                    if (useTimer) {
                        var dTime = Date.now() - startTime;
                        if (dTime > 15) {
                            break;
                        }
                    }
                }
                if (scope.prevElClipPaths) {
                    ctx.restore();
                }
            };
            if (repaintRects) {
                if (repaintRects.length === 0) {
                    i = layer.__endIndex;
                }
                else {
                    var dpr = this_1.dpr;
                    for (var r = 0; r < repaintRects.length; ++r) {
                        var rect = repaintRects[r];
                        ctx.save();
                        ctx.beginPath();
                        ctx.rect(rect.x * dpr, rect.y * dpr, rect.width * dpr, rect.height * dpr);
                        ctx.clip();
                        repaint(rect);
                        ctx.restore();
                    }
                }
            }
            else {
                ctx.save();
                repaint();
                ctx.restore();
            }
            layer.__drawIndex = i;
            if (layer.__drawIndex < layer.__endIndex) {
                finished = false;
            }
        };
        var this_1 = this;
        for (var k = 0; k < layerList.length; k++) {
            _loop_1(k);
        }
        if (env["default"].wxa) {
            util.each(this._layers, function (layer) {
                if (layer && layer.ctx && layer.ctx.draw) {
                    layer.ctx.draw();
                }
            });
        }
        return {
            finished: finished,
            needsRefreshHover: needsRefreshHover
        };
    };
    CanvasPainter.prototype._doPaintEl = function (el, currentLayer, useDirtyRect, repaintRect, scope, isLast) {
        var ctx = currentLayer.ctx;
        if (useDirtyRect) {
            var paintRect = el.getPaintRect();
            if (!repaintRect || paintRect && paintRect.intersect(repaintRect)) {
                (0,graphic.brush)(ctx, el, scope, isLast);
                el.setPrevPaintRect(paintRect);
            }
        }
        else {
            (0,graphic.brush)(ctx, el, scope, isLast);
        }
    };
    CanvasPainter.prototype.getLayer = function (zlevel, virtual) {
        if (this._singleCanvas && !this._needsManuallyCompositing) {
            zlevel = CANVAS_ZLEVEL;
        }
        var layer = this._layers[zlevel];
        if (!layer) {
            layer = new canvas_Layer('zr_' + zlevel, this, this.dpr);
            layer.zlevel = zlevel;
            layer.__builtin__ = true;
            if (this._layerConfig[zlevel]) {
                util.merge(layer, this._layerConfig[zlevel], true);
            }
            else if (this._layerConfig[zlevel - EL_AFTER_INCREMENTAL_INC]) {
                util.merge(layer, this._layerConfig[zlevel - EL_AFTER_INCREMENTAL_INC], true);
            }
            if (virtual) {
                layer.virtual = virtual;
            }
            this.insertLayer(zlevel, layer);
            layer.initContext();
        }
        return layer;
    };
    CanvasPainter.prototype.insertLayer = function (zlevel, layer) {
        var layersMap = this._layers;
        var zlevelList = this._zlevelList;
        var len = zlevelList.length;
        var domRoot = this._domRoot;
        var prevLayer = null;
        var i = -1;
        if (layersMap[zlevel]) {
            if (false) {}
            return;
        }
        if (!isLayerValid(layer)) {
            if (false) {}
            return;
        }
        if (len > 0 && zlevel > zlevelList[0]) {
            for (i = 0; i < len - 1; i++) {
                if (zlevelList[i] < zlevel
                    && zlevelList[i + 1] > zlevel) {
                    break;
                }
            }
            prevLayer = layersMap[zlevelList[i]];
        }
        zlevelList.splice(i + 1, 0, zlevel);
        layersMap[zlevel] = layer;
        if (!layer.virtual) {
            if (prevLayer) {
                var prevDom = prevLayer.dom;
                if (prevDom.nextSibling) {
                    domRoot.insertBefore(layer.dom, prevDom.nextSibling);
                }
                else {
                    domRoot.appendChild(layer.dom);
                }
            }
            else {
                if (domRoot.firstChild) {
                    domRoot.insertBefore(layer.dom, domRoot.firstChild);
                }
                else {
                    domRoot.appendChild(layer.dom);
                }
            }
        }
        layer.painter || (layer.painter = this);
    };
    CanvasPainter.prototype.eachLayer = function (cb, context) {
        var zlevelList = this._zlevelList;
        for (var i = 0; i < zlevelList.length; i++) {
            var z = zlevelList[i];
            cb.call(context, this._layers[z], z);
        }
    };
    CanvasPainter.prototype.eachBuiltinLayer = function (cb, context) {
        var zlevelList = this._zlevelList;
        for (var i = 0; i < zlevelList.length; i++) {
            var z = zlevelList[i];
            var layer = this._layers[z];
            if (layer.__builtin__) {
                cb.call(context, layer, z);
            }
        }
    };
    CanvasPainter.prototype.eachOtherLayer = function (cb, context) {
        var zlevelList = this._zlevelList;
        for (var i = 0; i < zlevelList.length; i++) {
            var z = zlevelList[i];
            var layer = this._layers[z];
            if (!layer.__builtin__) {
                cb.call(context, layer, z);
            }
        }
    };
    CanvasPainter.prototype.getLayers = function () {
        return this._layers;
    };
    CanvasPainter.prototype._updateLayerStatus = function (list) {
        this.eachBuiltinLayer(function (layer, z) {
            layer.__dirty = layer.__used = false;
        });
        function updatePrevLayer(idx) {
            if (prevLayer) {
                if (prevLayer.__endIndex !== idx) {
                    prevLayer.__dirty = true;
                }
                prevLayer.__endIndex = idx;
            }
        }
        if (this._singleCanvas) {
            for (var i_1 = 1; i_1 < list.length; i_1++) {
                var el = list[i_1];
                if (el.zlevel !== list[i_1 - 1].zlevel || el.incremental) {
                    this._needsManuallyCompositing = true;
                    break;
                }
            }
        }
        var prevLayer = null;
        var incrementalLayerCount = 0;
        var prevZlevel;
        var i;
        for (i = 0; i < list.length; i++) {
            var el = list[i];
            var zlevel = el.zlevel;
            var layer = void 0;
            if (prevZlevel !== zlevel) {
                prevZlevel = zlevel;
                incrementalLayerCount = 0;
            }
            if (el.incremental) {
                layer = this.getLayer(zlevel + INCREMENTAL_INC, this._needsManuallyCompositing);
                layer.incremental = true;
                incrementalLayerCount = 1;
            }
            else {
                layer = this.getLayer(zlevel + (incrementalLayerCount > 0 ? EL_AFTER_INCREMENTAL_INC : 0), this._needsManuallyCompositing);
            }
            if (!layer.__builtin__) {
                util.logError('ZLevel ' + zlevel + ' has been used by unkown layer ' + layer.id);
            }
            if (layer !== prevLayer) {
                layer.__used = true;
                if (layer.__startIndex !== i) {
                    layer.__dirty = true;
                }
                layer.__startIndex = i;
                if (!layer.incremental) {
                    layer.__drawIndex = i;
                }
                else {
                    layer.__drawIndex = -1;
                }
                updatePrevLayer(i);
                prevLayer = layer;
            }
            if ((el.__dirty & constants.REDRAW_BIT) && !el.__inHover) {
                layer.__dirty = true;
                if (layer.incremental && layer.__drawIndex < 0) {
                    layer.__drawIndex = i;
                }
            }
        }
        updatePrevLayer(i);
        this.eachBuiltinLayer(function (layer, z) {
            if (!layer.__used && layer.getElementCount() > 0) {
                layer.__dirty = true;
                layer.__startIndex = layer.__endIndex = layer.__drawIndex = 0;
            }
            if (layer.__dirty && layer.__drawIndex < 0) {
                layer.__drawIndex = layer.__startIndex;
            }
        });
    };
    CanvasPainter.prototype.clear = function () {
        this.eachBuiltinLayer(this._clearLayer);
        return this;
    };
    CanvasPainter.prototype._clearLayer = function (layer) {
        layer.clear();
    };
    CanvasPainter.prototype.setBackgroundColor = function (backgroundColor) {
        this._backgroundColor = backgroundColor;
        util.each(this._layers, function (layer) {
            layer.setUnpainted();
        });
    };
    CanvasPainter.prototype.configLayer = function (zlevel, config) {
        if (config) {
            var layerConfig = this._layerConfig;
            if (!layerConfig[zlevel]) {
                layerConfig[zlevel] = config;
            }
            else {
                util.merge(layerConfig[zlevel], config, true);
            }
            for (var i = 0; i < this._zlevelList.length; i++) {
                var _zlevel = this._zlevelList[i];
                if (_zlevel === zlevel || _zlevel === zlevel + EL_AFTER_INCREMENTAL_INC) {
                    var layer = this._layers[_zlevel];
                    util.merge(layer, layerConfig[zlevel], true);
                }
            }
        }
    };
    CanvasPainter.prototype.delLayer = function (zlevel) {
        var layers = this._layers;
        var zlevelList = this._zlevelList;
        var layer = layers[zlevel];
        if (!layer) {
            return;
        }
        layer.dom.parentNode.removeChild(layer.dom);
        delete layers[zlevel];
        zlevelList.splice(util.indexOf(zlevelList, zlevel), 1);
    };
    CanvasPainter.prototype.resize = function (width, height) {
        if (!this._domRoot.style) {
            if (width == null || height == null) {
                return;
            }
            this._width = width;
            this._height = height;
            this.getLayer(CANVAS_ZLEVEL).resize(width, height);
        }
        else {
            var domRoot = this._domRoot;
            domRoot.style.display = 'none';
            var opts = this._opts;
            var root = this.root;
            width != null && (opts.width = width);
            height != null && (opts.height = height);
            width = (0,helper.getSize)(root, 0, opts);
            height = (0,helper.getSize)(root, 1, opts);
            domRoot.style.display = '';
            if (this._width !== width || height !== this._height) {
                domRoot.style.width = width + 'px';
                domRoot.style.height = height + 'px';
                for (var id in this._layers) {
                    if (this._layers.hasOwnProperty(id)) {
                        this._layers[id].resize(width, height);
                    }
                }
                this.refresh(true);
            }
            this._width = width;
            this._height = height;
        }
        return this;
    };
    CanvasPainter.prototype.clearLayer = function (zlevel) {
        var layer = this._layers[zlevel];
        if (layer) {
            layer.clear();
        }
    };
    CanvasPainter.prototype.dispose = function () {
        this.root.innerHTML = '';
        this.root =
            this.storage =
                this._domRoot =
                    this._layers = null;
    };
    CanvasPainter.prototype.getRenderedCanvas = function (opts) {
        opts = opts || {};
        if (this._singleCanvas && !this._compositeManually) {
            return this._layers[CANVAS_ZLEVEL].dom;
        }
        var imageLayer = new canvas_Layer('image', this, opts.pixelRatio || this.dpr);
        imageLayer.initContext();
        imageLayer.clear(false, opts.backgroundColor || this._backgroundColor);
        var ctx = imageLayer.ctx;
        if (opts.pixelRatio <= this.dpr) {
            this.refresh();
            var width_1 = imageLayer.dom.width;
            var height_1 = imageLayer.dom.height;
            this.eachLayer(function (layer) {
                if (layer.__builtin__) {
                    ctx.drawImage(layer.dom, 0, 0, width_1, height_1);
                }
                else if (layer.renderToCanvas) {
                    ctx.save();
                    layer.renderToCanvas(ctx);
                    ctx.restore();
                }
            });
        }
        else {
            var scope = {
                inHover: false,
                viewWidth: this._width,
                viewHeight: this._height
            };
            var displayList = this.storage.getDisplayList(true);
            for (var i = 0, len = displayList.length; i < len; i++) {
                var el = displayList[i];
                (0,graphic.brush)(ctx, el, scope, i === len - 1);
            }
        }
        return imageLayer.dom;
    };
    CanvasPainter.prototype.getWidth = function () {
        return this._width;
    };
    CanvasPainter.prototype.getHeight = function () {
        return this._height;
    };
    return CanvasPainter;
}());
/* export default */ var Painter = (Painter_CanvasPainter);
;


}),
70022: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getLineDash: function() { return getLineDash; },
  normalizeLineDash: function() { return normalizeLineDash; }
});
/* import */ var _core_util_js__rspack_import_0 = __webpack_require__(9774);

function normalizeLineDash(lineType, lineWidth) {
    if (!lineType || lineType === 'solid' || !(lineWidth > 0)) {
        return null;
    }
    return lineType === 'dashed'
        ? [4 * lineWidth, 2 * lineWidth]
        : lineType === 'dotted'
            ? [lineWidth]
            : (0,_core_util_js__rspack_import_0.isNumber)(lineType)
                ? [lineType] : (0,_core_util_js__rspack_import_0.isArray)(lineType) ? lineType : null;
}
function getLineDash(el) {
    var style = el.style;
    var lineDash = style.lineDash && style.lineWidth > 0 && normalizeLineDash(style.lineDash, style.lineWidth);
    var lineDashOffset = style.lineDashOffset;
    if (lineDash) {
        var lineScale_1 = (style.strokeNoScale && el.getLineScale) ? el.getLineScale() : 1;
        if (lineScale_1 && lineScale_1 !== 1) {
            lineDash = (0,_core_util_js__rspack_import_0.map)(lineDash, function (rawVal) {
                return rawVal / lineScale_1;
            });
            lineDashOffset /= lineScale_1;
        }
    }
    return [lineDash, lineDashOffset];
}


}),
96111: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  brush: function() { return brush; },
  brushSingle: function() { return brushSingle; },
  createCanvasPattern: function() { return createCanvasPattern; }
});
/* import */ var _graphic_Displayable_js__rspack_import_7 = __webpack_require__(18211);
/* import */ var _core_PathProxy_js__rspack_import_0 = __webpack_require__(99585);
/* import */ var _graphic_helper_image_js__rspack_import_1 = __webpack_require__(85027);
/* import */ var _helper_js__rspack_import_3 = __webpack_require__(69291);
/* import */ var _graphic_Path_js__rspack_import_8 = __webpack_require__(17907);
/* import */ var _graphic_Image_js__rspack_import_10 = __webpack_require__(16440);
/* import */ var _graphic_TSpan_js__rspack_import_9 = __webpack_require__(67881);
/* import */ var _core_util_js__rspack_import_2 = __webpack_require__(9774);
/* import */ var _dashStyle_js__rspack_import_4 = __webpack_require__(70022);
/* import */ var _graphic_constants_js__rspack_import_5 = __webpack_require__(66684);
/* import */ var _core_platform_js__rspack_import_6 = __webpack_require__(70145);











var pathProxyForDraw = new _core_PathProxy_js__rspack_import_0["default"](true);
function styleHasStroke(style) {
    var stroke = style.stroke;
    return !(stroke == null || stroke === 'none' || !(style.lineWidth > 0));
}
function isValidStrokeFillStyle(strokeOrFill) {
    return typeof strokeOrFill === 'string' && strokeOrFill !== 'none';
}
function styleHasFill(style) {
    var fill = style.fill;
    return fill != null && fill !== 'none';
}
function doFillPath(ctx, style) {
    if (style.fillOpacity != null && style.fillOpacity !== 1) {
        var originalGlobalAlpha = ctx.globalAlpha;
        ctx.globalAlpha = style.fillOpacity * style.opacity;
        ctx.fill();
        ctx.globalAlpha = originalGlobalAlpha;
    }
    else {
        ctx.fill();
    }
}
function doStrokePath(ctx, style) {
    if (style.strokeOpacity != null && style.strokeOpacity !== 1) {
        var originalGlobalAlpha = ctx.globalAlpha;
        ctx.globalAlpha = style.strokeOpacity * style.opacity;
        ctx.stroke();
        ctx.globalAlpha = originalGlobalAlpha;
    }
    else {
        ctx.stroke();
    }
}
function createCanvasPattern(ctx, pattern, el) {
    var image = (0,_graphic_helper_image_js__rspack_import_1.createOrUpdateImage)(pattern.image, pattern.__image, el);
    if ((0,_graphic_helper_image_js__rspack_import_1.isImageReady)(image)) {
        var canvasPattern = ctx.createPattern(image, pattern.repeat || 'repeat');
        if (typeof DOMMatrix === 'function'
            && canvasPattern
            && canvasPattern.setTransform) {
            var matrix = new DOMMatrix();
            matrix.translateSelf((pattern.x || 0), (pattern.y || 0));
            matrix.rotateSelf(0, 0, (pattern.rotation || 0) * _core_util_js__rspack_import_2.RADIAN_TO_DEGREE);
            matrix.scaleSelf((pattern.scaleX || 1), (pattern.scaleY || 1));
            canvasPattern.setTransform(matrix);
        }
        return canvasPattern;
    }
}
function brushPath(ctx, el, style, inBatch) {
    var _a;
    var hasStroke = styleHasStroke(style);
    var hasFill = styleHasFill(style);
    var strokePercent = style.strokePercent;
    var strokePart = strokePercent < 1;
    var firstDraw = !el.path;
    if ((!el.silent || strokePart) && firstDraw) {
        el.createPathProxy();
    }
    var path = el.path || pathProxyForDraw;
    var dirtyFlag = el.__dirty;
    if (!inBatch) {
        var fill = style.fill;
        var stroke = style.stroke;
        var hasFillGradient = hasFill && !!fill.colorStops;
        var hasStrokeGradient = hasStroke && !!stroke.colorStops;
        var hasFillPattern = hasFill && !!fill.image;
        var hasStrokePattern = hasStroke && !!stroke.image;
        var fillGradient = void 0;
        var strokeGradient = void 0;
        var fillPattern = void 0;
        var strokePattern = void 0;
        var rect = void 0;
        if (hasFillGradient || hasStrokeGradient) {
            rect = el.getBoundingRect();
        }
        if (hasFillGradient) {
            fillGradient = dirtyFlag
                ? (0,_helper_js__rspack_import_3.getCanvasGradient)(ctx, fill, rect)
                : el.__canvasFillGradient;
            el.__canvasFillGradient = fillGradient;
        }
        if (hasStrokeGradient) {
            strokeGradient = dirtyFlag
                ? (0,_helper_js__rspack_import_3.getCanvasGradient)(ctx, stroke, rect)
                : el.__canvasStrokeGradient;
            el.__canvasStrokeGradient = strokeGradient;
        }
        if (hasFillPattern) {
            fillPattern = (dirtyFlag || !el.__canvasFillPattern)
                ? createCanvasPattern(ctx, fill, el)
                : el.__canvasFillPattern;
            el.__canvasFillPattern = fillPattern;
        }
        if (hasStrokePattern) {
            strokePattern = (dirtyFlag || !el.__canvasStrokePattern)
                ? createCanvasPattern(ctx, stroke, el)
                : el.__canvasStrokePattern;
            el.__canvasStrokePattern = strokePattern;
        }
        if (hasFillGradient) {
            ctx.fillStyle = fillGradient;
        }
        else if (hasFillPattern) {
            if (fillPattern) {
                ctx.fillStyle = fillPattern;
            }
            else {
                hasFill = false;
            }
        }
        if (hasStrokeGradient) {
            ctx.strokeStyle = strokeGradient;
        }
        else if (hasStrokePattern) {
            if (strokePattern) {
                ctx.strokeStyle = strokePattern;
            }
            else {
                hasStroke = false;
            }
        }
    }
    var scale = el.getGlobalScale();
    path.setScale(scale[0], scale[1], el.segmentIgnoreThreshold);
    var lineDash;
    var lineDashOffset;
    if (ctx.setLineDash && style.lineDash) {
        _a = (0,_dashStyle_js__rspack_import_4.getLineDash)(el), lineDash = _a[0], lineDashOffset = _a[1];
    }
    var needsRebuild = true;
    if (firstDraw || (dirtyFlag & _graphic_constants_js__rspack_import_5.SHAPE_CHANGED_BIT)) {
        path.setDPR(ctx.dpr);
        if (strokePart) {
            path.setContext(null);
        }
        else {
            path.setContext(ctx);
            needsRebuild = false;
        }
        path.reset();
        el.buildPath(path, el.shape, inBatch);
        path.toStatic();
        el.pathUpdated();
    }
    if (needsRebuild) {
        path.rebuildPath(ctx, strokePart ? strokePercent : 1);
    }
    if (lineDash) {
        ctx.setLineDash(lineDash);
        ctx.lineDashOffset = lineDashOffset;
    }
    if (!inBatch) {
        if (style.strokeFirst) {
            if (hasStroke) {
                doStrokePath(ctx, style);
            }
            if (hasFill) {
                doFillPath(ctx, style);
            }
        }
        else {
            if (hasFill) {
                doFillPath(ctx, style);
            }
            if (hasStroke) {
                doStrokePath(ctx, style);
            }
        }
    }
    if (lineDash) {
        ctx.setLineDash([]);
    }
}
function brushImage(ctx, el, style) {
    var image = el.__image = (0,_graphic_helper_image_js__rspack_import_1.createOrUpdateImage)(style.image, el.__image, el, el.onload);
    if (!image || !(0,_graphic_helper_image_js__rspack_import_1.isImageReady)(image)) {
        return;
    }
    var x = style.x || 0;
    var y = style.y || 0;
    var width = el.getWidth();
    var height = el.getHeight();
    var aspect = image.width / image.height;
    if (width == null && height != null) {
        width = height * aspect;
    }
    else if (height == null && width != null) {
        height = width / aspect;
    }
    else if (width == null && height == null) {
        width = image.width;
        height = image.height;
    }
    if (style.sWidth && style.sHeight) {
        var sx = style.sx || 0;
        var sy = style.sy || 0;
        ctx.drawImage(image, sx, sy, style.sWidth, style.sHeight, x, y, width, height);
    }
    else if (style.sx && style.sy) {
        var sx = style.sx;
        var sy = style.sy;
        var sWidth = width - sx;
        var sHeight = height - sy;
        ctx.drawImage(image, sx, sy, sWidth, sHeight, x, y, width, height);
    }
    else {
        ctx.drawImage(image, x, y, width, height);
    }
}
function brushText(ctx, el, style) {
    var _a;
    var text = style.text;
    text != null && (text += '');
    if (text) {
        ctx.font = style.font || _core_platform_js__rspack_import_6.DEFAULT_FONT;
        ctx.textAlign = style.textAlign;
        ctx.textBaseline = style.textBaseline;
        var lineDash = void 0;
        var lineDashOffset = void 0;
        if (ctx.setLineDash && style.lineDash) {
            _a = (0,_dashStyle_js__rspack_import_4.getLineDash)(el), lineDash = _a[0], lineDashOffset = _a[1];
        }
        if (lineDash) {
            ctx.setLineDash(lineDash);
            ctx.lineDashOffset = lineDashOffset;
        }
        if (style.strokeFirst) {
            if (styleHasStroke(style)) {
                ctx.strokeText(text, style.x, style.y);
            }
            if (styleHasFill(style)) {
                ctx.fillText(text, style.x, style.y);
            }
        }
        else {
            if (styleHasFill(style)) {
                ctx.fillText(text, style.x, style.y);
            }
            if (styleHasStroke(style)) {
                ctx.strokeText(text, style.x, style.y);
            }
        }
        if (lineDash) {
            ctx.setLineDash([]);
        }
    }
}
var SHADOW_NUMBER_PROPS = ['shadowBlur', 'shadowOffsetX', 'shadowOffsetY'];
var STROKE_PROPS = [
    ['lineCap', 'butt'], ['lineJoin', 'miter'], ['miterLimit', 10]
];
function bindCommonProps(ctx, style, prevStyle, forceSetAll, scope) {
    var styleChanged = false;
    if (!forceSetAll) {
        prevStyle = prevStyle || {};
        if (style === prevStyle) {
            return false;
        }
    }
    if (forceSetAll || style.opacity !== prevStyle.opacity) {
        flushPathDrawn(ctx, scope);
        styleChanged = true;
        var opacity = Math.max(Math.min(style.opacity, 1), 0);
        ctx.globalAlpha = isNaN(opacity) ? _graphic_Displayable_js__rspack_import_7.DEFAULT_COMMON_STYLE.opacity : opacity;
    }
    if (forceSetAll || style.blend !== prevStyle.blend) {
        if (!styleChanged) {
            flushPathDrawn(ctx, scope);
            styleChanged = true;
        }
        ctx.globalCompositeOperation = style.blend || _graphic_Displayable_js__rspack_import_7.DEFAULT_COMMON_STYLE.blend;
    }
    for (var i = 0; i < SHADOW_NUMBER_PROPS.length; i++) {
        var propName = SHADOW_NUMBER_PROPS[i];
        if (forceSetAll || style[propName] !== prevStyle[propName]) {
            if (!styleChanged) {
                flushPathDrawn(ctx, scope);
                styleChanged = true;
            }
            ctx[propName] = ctx.dpr * (style[propName] || 0);
        }
    }
    if (forceSetAll || style.shadowColor !== prevStyle.shadowColor) {
        if (!styleChanged) {
            flushPathDrawn(ctx, scope);
            styleChanged = true;
        }
        ctx.shadowColor = style.shadowColor || _graphic_Displayable_js__rspack_import_7.DEFAULT_COMMON_STYLE.shadowColor;
    }
    return styleChanged;
}
function bindPathAndTextCommonStyle(ctx, el, prevEl, forceSetAll, scope) {
    var style = getStyle(el, scope.inHover);
    var prevStyle = forceSetAll
        ? null
        : (prevEl && getStyle(prevEl, scope.inHover) || {});
    if (style === prevStyle) {
        return false;
    }
    var styleChanged = bindCommonProps(ctx, style, prevStyle, forceSetAll, scope);
    if (forceSetAll || style.fill !== prevStyle.fill) {
        if (!styleChanged) {
            flushPathDrawn(ctx, scope);
            styleChanged = true;
        }
        isValidStrokeFillStyle(style.fill) && (ctx.fillStyle = style.fill);
    }
    if (forceSetAll || style.stroke !== prevStyle.stroke) {
        if (!styleChanged) {
            flushPathDrawn(ctx, scope);
            styleChanged = true;
        }
        isValidStrokeFillStyle(style.stroke) && (ctx.strokeStyle = style.stroke);
    }
    if (forceSetAll || style.opacity !== prevStyle.opacity) {
        if (!styleChanged) {
            flushPathDrawn(ctx, scope);
            styleChanged = true;
        }
        ctx.globalAlpha = style.opacity == null ? 1 : style.opacity;
    }
    if (el.hasStroke()) {
        var lineWidth = style.lineWidth;
        var newLineWidth = lineWidth / ((style.strokeNoScale && el.getLineScale) ? el.getLineScale() : 1);
        if (ctx.lineWidth !== newLineWidth) {
            if (!styleChanged) {
                flushPathDrawn(ctx, scope);
                styleChanged = true;
            }
            ctx.lineWidth = newLineWidth;
        }
    }
    for (var i = 0; i < STROKE_PROPS.length; i++) {
        var prop = STROKE_PROPS[i];
        var propName = prop[0];
        if (forceSetAll || style[propName] !== prevStyle[propName]) {
            if (!styleChanged) {
                flushPathDrawn(ctx, scope);
                styleChanged = true;
            }
            ctx[propName] = style[propName] || prop[1];
        }
    }
    return styleChanged;
}
function bindImageStyle(ctx, el, prevEl, forceSetAll, scope) {
    return bindCommonProps(ctx, getStyle(el, scope.inHover), prevEl && getStyle(prevEl, scope.inHover), forceSetAll, scope);
}
function setContextTransform(ctx, el) {
    var m = el.transform;
    var dpr = ctx.dpr || 1;
    if (m) {
        ctx.setTransform(dpr * m[0], dpr * m[1], dpr * m[2], dpr * m[3], dpr * m[4], dpr * m[5]);
    }
    else {
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
}
function updateClipStatus(clipPaths, ctx, scope) {
    var allClipped = false;
    for (var i = 0; i < clipPaths.length; i++) {
        var clipPath = clipPaths[i];
        allClipped = allClipped || clipPath.isZeroArea();
        setContextTransform(ctx, clipPath);
        ctx.beginPath();
        clipPath.buildPath(ctx, clipPath.shape);
        ctx.clip();
    }
    scope.allClipped = allClipped;
}
function isTransformChanged(m0, m1) {
    if (m0 && m1) {
        return m0[0] !== m1[0]
            || m0[1] !== m1[1]
            || m0[2] !== m1[2]
            || m0[3] !== m1[3]
            || m0[4] !== m1[4]
            || m0[5] !== m1[5];
    }
    else if (!m0 && !m1) {
        return false;
    }
    return true;
}
var DRAW_TYPE_PATH = 1;
var DRAW_TYPE_IMAGE = 2;
var DRAW_TYPE_TEXT = 3;
var DRAW_TYPE_INCREMENTAL = 4;
function canPathBatch(style) {
    var hasFill = styleHasFill(style);
    var hasStroke = styleHasStroke(style);
    return !(style.lineDash
        || !(+hasFill ^ +hasStroke)
        || (hasFill && typeof style.fill !== 'string')
        || (hasStroke && typeof style.stroke !== 'string')
        || style.strokePercent < 1
        || style.strokeOpacity < 1
        || style.fillOpacity < 1);
}
function flushPathDrawn(ctx, scope) {
    scope.batchFill && ctx.fill();
    scope.batchStroke && ctx.stroke();
    scope.batchFill = '';
    scope.batchStroke = '';
}
function getStyle(el, inHover) {
    return inHover ? (el.__hoverStyle || el.style) : el.style;
}
function brushSingle(ctx, el) {
    brush(ctx, el, { inHover: false, viewWidth: 0, viewHeight: 0 }, true);
}
function brush(ctx, el, scope, isLast) {
    var m = el.transform;
    if (!el.shouldBePainted(scope.viewWidth, scope.viewHeight, false, false)) {
        el.__dirty &= ~_graphic_constants_js__rspack_import_5.REDRAW_BIT;
        el.__isRendered = false;
        return;
    }
    var clipPaths = el.__clipPaths;
    var prevElClipPaths = scope.prevElClipPaths;
    var forceSetTransform = false;
    var forceSetStyle = false;
    if (!prevElClipPaths || (0,_helper_js__rspack_import_3.isClipPathChanged)(clipPaths, prevElClipPaths)) {
        if (prevElClipPaths && prevElClipPaths.length) {
            flushPathDrawn(ctx, scope);
            ctx.restore();
            forceSetStyle = forceSetTransform = true;
            scope.prevElClipPaths = null;
            scope.allClipped = false;
            scope.prevEl = null;
        }
        if (clipPaths && clipPaths.length) {
            flushPathDrawn(ctx, scope);
            ctx.save();
            updateClipStatus(clipPaths, ctx, scope);
            forceSetTransform = true;
        }
        scope.prevElClipPaths = clipPaths;
    }
    if (scope.allClipped) {
        el.__isRendered = false;
        return;
    }
    el.beforeBrush && el.beforeBrush();
    el.innerBeforeBrush();
    var prevEl = scope.prevEl;
    if (!prevEl) {
        forceSetStyle = forceSetTransform = true;
    }
    var canBatchPath = el instanceof _graphic_Path_js__rspack_import_8["default"]
        && el.autoBatch
        && canPathBatch(el.style);
    if (forceSetTransform || isTransformChanged(m, prevEl.transform)) {
        flushPathDrawn(ctx, scope);
        setContextTransform(ctx, el);
    }
    else if (!canBatchPath) {
        flushPathDrawn(ctx, scope);
    }
    var style = getStyle(el, scope.inHover);
    if (el instanceof _graphic_Path_js__rspack_import_8["default"]) {
        if (scope.lastDrawType !== DRAW_TYPE_PATH) {
            forceSetStyle = true;
            scope.lastDrawType = DRAW_TYPE_PATH;
        }
        bindPathAndTextCommonStyle(ctx, el, prevEl, forceSetStyle, scope);
        if (!canBatchPath || (!scope.batchFill && !scope.batchStroke)) {
            ctx.beginPath();
        }
        brushPath(ctx, el, style, canBatchPath);
        if (canBatchPath) {
            scope.batchFill = style.fill || '';
            scope.batchStroke = style.stroke || '';
        }
    }
    else {
        if (el instanceof _graphic_TSpan_js__rspack_import_9["default"]) {
            if (scope.lastDrawType !== DRAW_TYPE_TEXT) {
                forceSetStyle = true;
                scope.lastDrawType = DRAW_TYPE_TEXT;
            }
            bindPathAndTextCommonStyle(ctx, el, prevEl, forceSetStyle, scope);
            brushText(ctx, el, style);
        }
        else if (el instanceof _graphic_Image_js__rspack_import_10["default"]) {
            if (scope.lastDrawType !== DRAW_TYPE_IMAGE) {
                forceSetStyle = true;
                scope.lastDrawType = DRAW_TYPE_IMAGE;
            }
            bindImageStyle(ctx, el, prevEl, forceSetStyle, scope);
            brushImage(ctx, el, style);
        }
        else if (el.getTemporalDisplayables) {
            if (scope.lastDrawType !== DRAW_TYPE_INCREMENTAL) {
                forceSetStyle = true;
                scope.lastDrawType = DRAW_TYPE_INCREMENTAL;
            }
            brushIncremental(ctx, el, scope);
        }
    }
    if (canBatchPath && isLast) {
        flushPathDrawn(ctx, scope);
    }
    el.innerAfterBrush();
    el.afterBrush && el.afterBrush();
    scope.prevEl = el;
    el.__dirty = 0;
    el.__isRendered = true;
}
function brushIncremental(ctx, el, scope) {
    var displayables = el.getDisplayables();
    var temporalDisplayables = el.getTemporalDisplayables();
    ctx.save();
    var innerScope = {
        prevElClipPaths: null,
        prevEl: null,
        allClipped: false,
        viewWidth: scope.viewWidth,
        viewHeight: scope.viewHeight,
        inHover: scope.inHover
    };
    var i;
    var len;
    for (i = el.getCursor(), len = displayables.length; i < len; i++) {
        var displayable = displayables[i];
        displayable.beforeBrush && displayable.beforeBrush();
        displayable.innerBeforeBrush();
        brush(ctx, displayable, innerScope, i === len - 1);
        displayable.innerAfterBrush();
        displayable.afterBrush && displayable.afterBrush();
        innerScope.prevEl = displayable;
    }
    for (var i_1 = 0, len_1 = temporalDisplayables.length; i_1 < len_1; i_1++) {
        var displayable = temporalDisplayables[i_1];
        displayable.beforeBrush && displayable.beforeBrush();
        displayable.innerBeforeBrush();
        brush(ctx, displayable, innerScope, i_1 === len_1 - 1);
        displayable.innerAfterBrush();
        displayable.afterBrush && displayable.afterBrush();
        innerScope.prevEl = displayable;
    }
    el.clearTemporalDisplayables();
    el.notClear = true;
    ctx.restore();
}


}),
69291: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createLinearGradient: function() { return createLinearGradient; },
  createRadialGradient: function() { return createRadialGradient; },
  getCanvasGradient: function() { return getCanvasGradient; },
  getSize: function() { return getSize; },
  isClipPathChanged: function() { return isClipPathChanged; }
});
function isSafeNum(num) {
    return isFinite(num);
}
function createLinearGradient(ctx, obj, rect) {
    var x = obj.x == null ? 0 : obj.x;
    var x2 = obj.x2 == null ? 1 : obj.x2;
    var y = obj.y == null ? 0 : obj.y;
    var y2 = obj.y2 == null ? 0 : obj.y2;
    if (!obj.global) {
        x = x * rect.width + rect.x;
        x2 = x2 * rect.width + rect.x;
        y = y * rect.height + rect.y;
        y2 = y2 * rect.height + rect.y;
    }
    x = isSafeNum(x) ? x : 0;
    x2 = isSafeNum(x2) ? x2 : 1;
    y = isSafeNum(y) ? y : 0;
    y2 = isSafeNum(y2) ? y2 : 0;
    var canvasGradient = ctx.createLinearGradient(x, y, x2, y2);
    return canvasGradient;
}
function createRadialGradient(ctx, obj, rect) {
    var width = rect.width;
    var height = rect.height;
    var min = Math.min(width, height);
    var x = obj.x == null ? 0.5 : obj.x;
    var y = obj.y == null ? 0.5 : obj.y;
    var r = obj.r == null ? 0.5 : obj.r;
    if (!obj.global) {
        x = x * width + rect.x;
        y = y * height + rect.y;
        r = r * min;
    }
    x = isSafeNum(x) ? x : 0.5;
    y = isSafeNum(y) ? y : 0.5;
    r = r >= 0 && isSafeNum(r) ? r : 0.5;
    var canvasGradient = ctx.createRadialGradient(x, y, 0, x, y, r);
    return canvasGradient;
}
function getCanvasGradient(ctx, obj, rect) {
    var canvasGradient = obj.type === 'radial'
        ? createRadialGradient(ctx, obj, rect)
        : createLinearGradient(ctx, obj, rect);
    var colorStops = obj.colorStops;
    for (var i = 0; i < colorStops.length; i++) {
        canvasGradient.addColorStop(colorStops[i].offset, colorStops[i].color);
    }
    return canvasGradient;
}
function isClipPathChanged(clipPaths, prevClipPaths) {
    if (clipPaths === prevClipPaths || (!clipPaths && !prevClipPaths)) {
        return false;
    }
    if (!clipPaths || !prevClipPaths || (clipPaths.length !== prevClipPaths.length)) {
        return true;
    }
    for (var i = 0; i < clipPaths.length; i++) {
        if (clipPaths[i] !== prevClipPaths[i]) {
            return true;
        }
    }
    return false;
}
function parseInt10(val) {
    return parseInt(val, 10);
}
function getSize(root, whIdx, opts) {
    var wh = ['width', 'height'][whIdx];
    var cwh = ['clientWidth', 'clientHeight'][whIdx];
    var plt = ['paddingLeft', 'paddingTop'][whIdx];
    var prb = ['paddingRight', 'paddingBottom'][whIdx];
    if (opts[wh] != null && opts[wh] !== 'auto') {
        return parseFloat(opts[wh]);
    }
    var stl = document.defaultView.getComputedStyle(root);
    return ((root[cwh] || parseInt10(stl[wh]) || parseInt10(root.style[wh]))
        - (parseInt10(stl[plt]) || 0)
        - (parseInt10(stl[prb]) || 0)) | 0;
}


}),

}]);