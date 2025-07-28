"use strict";
(self["webpackChunkvue_admin_better"] = self["webpackChunkvue_admin_better"] || []).push([["2612"], {
12012: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
22273: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  THEME_KEY: function() { return /* binding */ D; },
  LOADING_OPTIONS_KEY: function() { return /* binding */ A; },
  "default": function() { return /* binding */ index_esm_min_H; },
  UPDATE_OPTIONS_KEY: function() { return /* binding */ B; },
  INIT_OPTIONS_KEY: function() { return /* binding */ k; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/vue@2.7.15/node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__(55384);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-demi@0.13.11_@vue+composition-api@1.7.2_vue@2.7.15__vue@2.7.15/node_modules/vue-demi/lib/index.mjs


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




// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/core/echarts.js + 3 modules
var echarts = __webpack_require__(17509);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/throttle.js
var throttle = __webpack_require__(59524);
// EXTERNAL MODULE: ./node_modules/.pnpm/resize-detector@0.3.0/node_modules/resize-detector/esm/index.js
var esm = __webpack_require__(6699);
;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-echarts@6.7.3_@vue+composition-api@1.7.2_vue@2.7.15__echarts@5.6.0_vue@2.7.15/node_modules/vue-echarts/dist/index.esm.min.js
var b=function(){return b=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},b.apply(this,arguments)};"function"==typeof SuppressedError&&SuppressedError;var index_esm_min_y=["getWidth","getHeight","getDom","getOption","resize","dispatchAction","convertToPixel","convertFromPixel","containPixel","getDataURL","getConnectedDataURL","appendData","clear","isDisposed","dispose"];function E(e){return t=Object.create(null),index_esm_min_y.forEach((function(n){t[n]=function(t){return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];if(!e.value)throw new Error("ECharts is not initialized yet.");return e.value[t].apply(e.value,n)}}(n)})),t;var t}var index_esm_min_={autoresize:[Boolean,Object]},index_esm_min_x=/^on[^a-z]/,j=function(e){return index_esm_min_x.test(e)};function w(e,r){var i=(0,vue_esm.isRef)(e)?(0,vue_esm.unref)(e):e;return i&&"object"==typeof i&&"value"in i?i.value||r:i||r}var A="ecLoadingOptions";var index_esm_min_L={loading:Boolean,loadingOptions:Object},index_esm_min_z=null,index_esm_min_C="x-vue-echarts";var index_esm_min_T=[],index_esm_min_S=[];!function(e,t){if(e&&"undefined"!=typeof document){var n,r=!0===t.prepend?"prepend":"append",i=!0===t.singleTag,o="string"==typeof t.container?document.querySelector(t.container):document.getElementsByTagName("head")[0];if(i){var a=index_esm_min_T.indexOf(o);-1===a&&(a=index_esm_min_T.push(o)-1,index_esm_min_S[a]={}),n=index_esm_min_S[a]&&index_esm_min_S[a][r]?index_esm_min_S[a][r]:index_esm_min_S[a][r]=u()}else n=u();65279===e.charCodeAt(0)&&(e=e.substring(1)),n.styleSheet?n.styleSheet.cssText+=e:n.appendChild(document.createTextNode(e))}function u(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),t.attributes)for(var n=Object.keys(t.attributes),i=0;i<n.length;i++)e.setAttribute(n[i],t.attributes[n[i]]);var a="prepend"===r?"afterbegin":"beforeend";return o.insertAdjacentElement(a,e),e}}("x-vue-echarts{display:flex;flex-direction:column;width:100%;height:100%;min-width:0}\n.vue-echarts-inner{flex-grow:1;min-width:0;width:auto!important;height:auto!important}\n",{});var U=function(){if(null!=index_esm_min_z)return index_esm_min_z;if("undefined"==typeof HTMLElement||"undefined"==typeof customElements)return index_esm_min_z=!1;try{new Function("tag","class EChartsElement extends HTMLElement {\n  __dispose = null;\n\n  disconnectedCallback() {\n    if (this.__dispose) {\n      this.__dispose();\n      this.__dispose = null;\n    }\n  }\n}\n\nif (customElements.get(tag) == null) {\n  customElements.define(tag, EChartsElement);\n}\n")(index_esm_min_C)}catch(e){return index_esm_min_z=!1}return index_esm_min_z=!0}();Vue2&&Vue2.config.ignoredElements.push(index_esm_min_C);var D="ecTheme",k="ecInitOptions",B="ecUpdateOptions",P=/(^&?~?!?)native:/,index_esm_min_H=(0,vue_esm.defineComponent)({name:"echarts",props:b(b({option:Object,theme:{type:[Object,String]},initOptions:Object,updateOptions:Object,group:String,manualUpdate:Boolean},index_esm_min_),index_esm_min_L),emits:{},inheritAttrs:!1,setup:function(t,n){var a=n.attrs,u=(0,vue_esm.shallowRef)(),v=(0,vue_esm.shallowRef)(),y=(0,vue_esm.shallowRef)(),_=(0,vue_esm.shallowRef)(),x=(0,vue_esm.inject)(D,null),L=(0,vue_esm.inject)(k,null),z=(0,vue_esm.inject)(B,null),C=(0,vue_esm.toRefs)(t),T=C.autoresize,S=C.manualUpdate,H=C.loading,M=C.loadingOptions,R=(0,vue_esm.computed)((function(){return _.value||t.option||null})),F=(0,vue_esm.computed)((function(){return t.theme||w(x,{})})),N=(0,vue_esm.computed)((function(){return t.initOptions||w(L,{})})),$=(0,vue_esm.computed)((function(){return t.updateOptions||w(z,{})})),q=(0,vue_esm.computed)((function(){return function(e){var t={};for(var n in e)j(n)||(t[n]=e[n]);return t}(a)})),I={},W=(0,vue_esm.getCurrentInstance)().proxy.$listeners,Z={};function G(e){if(v.value){var n=y.value=(0,echarts.init)(v.value,F.value,N.value);t.group&&(n.group=t.group),Object.keys(Z).forEach((function(e){var t=Z[e];if(t){var r=e.toLowerCase();"~"===r.charAt(0)&&(r=r.substring(1),t.__once__=!0);var i=n;if(0===r.indexOf("zr:")&&(i=n.getZr(),r=r.substring(3)),t.__once__){delete t.__once__;var o=t;t=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];o.apply(void 0,e),i.off(r,t)}}i.on(r,t)}})),T.value?(0,vue_esm.nextTick)((function(){n&&!n.isDisposed()&&n.resize(),r()})):r()}function r(){var t=e||R.value;t&&n.setOption(t,$.value)}}function J(){y.value&&(y.value.dispose(),y.value=void 0)}W?Object.keys(W).forEach((function(e){P.test(e)?I[e.replace(P,"$1")]=W[e]:Z[e]=W[e]})):Object.keys(a).filter((function(e){return j(e)})).forEach((function(e){var t=e.charAt(2).toLowerCase()+e.slice(3);if(0!==t.indexOf("native:"))"Once"===t.substring(t.length-4)&&(t="~".concat(t.substring(0,t.length-4))),Z[t]=a[e];else{var n="on".concat(t.charAt(7).toUpperCase()).concat(t.slice(8));I[n]=a[e]}}));var K=null;(0,vue_esm.watch)(S,(function(n){"function"==typeof K&&(K(),K=null),n||(K=(0,vue_esm.watch)((function(){return t.option}),(function(e,t){e&&(y.value?y.value.setOption(e,b({notMerge:e!==t},$.value)):G())}),{deep:!0}))}),{immediate:!0}),(0,vue_esm.watch)([F,N],(function(){J(),G()}),{deep:!0}),(0,vue_esm.watchEffect)((function(){t.group&&y.value&&(y.value.group=t.group)}));var Q=E(y);return function(e,t,n){var a=(0,vue_esm.inject)(A,{}),u=(0,vue_esm.computed)((function(){return b(b({},w(a,{})),null==n?void 0:n.value)}));(0,vue_esm.watchEffect)((function(){var n=e.value;n&&(t.value?n.showLoading(u.value):n.hideLoading())}))}(y,H,M),function(t,n,r){var i=null;(0,vue_esm.watch)([r,t,n],(function(e,t,n){var r=e[0],o=e[1],a=e[2];if(r&&o&&a){var u=!0===a?{}:a,s=u.throttle,c=void 0===s?100:s,l=u.onResize,f=function(){o.resize(),null==l||l()};i=c?(0,throttle.throttle)(f,c):f,(0,esm.addListener)(r,i)}n((function(){r&&i&&(0,esm.removeListener)(r,i)}))}))}(y,T,v),(0,vue_esm.onMounted)((function(){G()})),(0,vue_esm.onBeforeUnmount)((function(){U&&u.value?u.value.__dispose=J:J()})),b({chart:y,root:u,inner:v,setOption:function(e,n){t.manualUpdate&&(_.value=e),y.value?y.value.setOption(e,n||{}):G(e)},nonEventAttrs:q,nativeListeners:I},Q)},render:function(){var e=Vue2?{attrs:this.nonEventAttrs,on:this.nativeListeners}:b(b({},this.nonEventAttrs),this.nativeListeners);return e.ref="root",e.class=e.class?["echarts"].concat(e.class):"echarts",(0,vue_esm.h)(index_esm_min_C,e,[(0,vue_esm.h)("div",{ref:"inner",class:"vue-echarts-inner"})])}});
//# sourceMappingURL=index.esm.min.js.map


}),
75742: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PRESERVED_NORMAL_STATE: function() { return PRESERVED_NORMAL_STATE; }
});
/* ESM import */var _core_Transformable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9757);
/* ESM import */var _animation_Animator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2076);
/* ESM import */var _core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44964);
/* ESM import */var _core_Eventful_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(46606);
/* ESM import */var _contain_text_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45258);
/* ESM import */var _core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96585);
/* ESM import */var _config_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8473);
/* ESM import */var _tool_color_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67375);
/* ESM import */var _graphic_constants_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59177);









var PRESERVED_NORMAL_STATE = '__zr_normal__';
var PRIMARY_STATES_KEYS = _core_Transformable_js__WEBPACK_IMPORTED_MODULE_0__.TRANSFORMABLE_PROPS.concat(['ignore']);
var DEFAULT_ANIMATABLE_MAP = (0,_core_util_js__WEBPACK_IMPORTED_MODULE_1__.reduce)(_core_Transformable_js__WEBPACK_IMPORTED_MODULE_0__.TRANSFORMABLE_PROPS, function (obj, key) {
    obj[key] = true;
    return obj;
}, { ignore: false });
var tmpTextPosCalcRes = {};
var tmpBoundingRect = new _core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_2__["default"](0, 0, 0, 0);
var Element = (function () {
    function Element(props) {
        this.id = (0,_core_util_js__WEBPACK_IMPORTED_MODULE_1__.guid)();
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
            if (textConfig.position != null) {
                var layoutRect = tmpBoundingRect;
                if (textConfig.layoutRect) {
                    layoutRect.copy(textConfig.layoutRect);
                }
                else {
                    layoutRect.copy(this.getBoundingRect());
                }
                if (!isLocal) {
                    layoutRect.applyTransform(this.transform);
                }
                if (this.calculateTextPosition) {
                    this.calculateTextPosition(tmpTextPosCalcRes, textConfig, layoutRect);
                }
                else {
                    (0,_contain_text_js__WEBPACK_IMPORTED_MODULE_3__.calculateTextPosition)(tmpTextPosCalcRes, textConfig, layoutRect);
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
                        relOriginX = (0,_contain_text_js__WEBPACK_IMPORTED_MODULE_3__.parsePercent)(textOrigin[0], layoutRect.width);
                        relOriginY = (0,_contain_text_js__WEBPACK_IMPORTED_MODULE_3__.parsePercent)(textOrigin[1], layoutRect.height);
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
            var isInside = textConfig.inside == null
                ? (typeof textConfig.position === 'string' && textConfig.position.indexOf('inside') >= 0)
                : textConfig.inside;
            var innerTextDefaultStyle = this._innerTextDefaultStyle || (this._innerTextDefaultStyle = {});
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
            textEl.__dirty |= _graphic_constants_js__WEBPACK_IMPORTED_MODULE_4__.REDRAW_BIT;
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
        return this.__zr && this.__zr.isDarkMode() ? _config_js__WEBPACK_IMPORTED_MODULE_5__.LIGHT_LABEL_COLOR : _config_js__WEBPACK_IMPORTED_MODULE_5__.DARK_LABEL_COLOR;
    };
    Element.prototype.getOutsideStroke = function (textFill) {
        var backgroundColor = this.__zr && this.__zr.getBackgroundColor();
        var colorArr = typeof backgroundColor === 'string' && (0,_tool_color_js__WEBPACK_IMPORTED_MODULE_6__.parse)(backgroundColor);
        if (!colorArr) {
            colorArr = [255, 255, 255, 1];
        }
        var alpha = colorArr[3];
        var isDark = this.__zr.isDarkMode();
        for (var i = 0; i < 3; i++) {
            colorArr[i] = colorArr[i] * alpha + (isDark ? 0 : 255) * (1 - alpha);
        }
        colorArr[3] = 1;
        return (0,_tool_color_js__WEBPACK_IMPORTED_MODULE_6__.stringify)(colorArr, 'rgba');
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
            (0,_core_util_js__WEBPACK_IMPORTED_MODULE_1__.extend)(this.extra, value);
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
        else if ((0,_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isObject)(keyOrObj)) {
            var obj = keyOrObj;
            var keysArr = (0,_core_util_js__WEBPACK_IMPORTED_MODULE_1__.keys)(obj);
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
        if ((0,_core_util_js__WEBPACK_IMPORTED_MODULE_1__.indexOf)(currentStates, stateName) >= 0 && (keepCurrentStates || currentStates.length === 1)) {
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
            (0,_core_util_js__WEBPACK_IMPORTED_MODULE_1__.logError)("State " + stateName + " not exists.");
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
            this.__dirty &= ~_graphic_constants_js__WEBPACK_IMPORTED_MODULE_4__.REDRAW_BIT;
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
                this.__dirty &= ~_graphic_constants_js__WEBPACK_IMPORTED_MODULE_4__.REDRAW_BIT;
            }
        }
    };
    Element.prototype.isSilent = function () {
        var isSilent = this.silent;
        var ancestor = this.parent;
        while (!isSilent && ancestor) {
            if (ancestor.silent) {
                isSilent = true;
                break;
            }
            ancestor = ancestor.parent;
        }
        return isSilent;
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
        var idx = (0,_core_util_js__WEBPACK_IMPORTED_MODULE_1__.indexOf)(this.currentStates, state);
        if (idx >= 0) {
            var currentStates = this.currentStates.slice();
            currentStates.splice(idx, 1);
            this.useStates(currentStates);
        }
    };
    Element.prototype.replaceState = function (oldState, newState, forceAdd) {
        var currentStates = this.currentStates.slice();
        var idx = (0,_core_util_js__WEBPACK_IMPORTED_MODULE_1__.indexOf)(currentStates, oldState);
        var newStateExists = (0,_core_util_js__WEBPACK_IMPORTED_MODULE_1__.indexOf)(currentStates, newState) >= 0;
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
            (0,_core_util_js__WEBPACK_IMPORTED_MODULE_1__.extend)(mergedState, state);
            if (state.textConfig) {
                mergedTextConfig = mergedTextConfig || {};
                (0,_core_util_js__WEBPACK_IMPORTED_MODULE_1__.extend)(mergedTextConfig, state.textConfig);
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
            this.textConfig = (0,_core_util_js__WEBPACK_IMPORTED_MODULE_1__.extend)({}, keepCurrentStates ? this.textConfig : normalState.textConfig);
            (0,_core_util_js__WEBPACK_IMPORTED_MODULE_1__.extend)(this.textConfig, state.textConfig);
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
        textEl.innerTransformable = new _core_Transformable_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this._attachComponent(textEl);
        this._textContent = textEl;
        this.markRedraw();
    };
    Element.prototype.setTextConfig = function (cfg) {
        if (!this.textConfig) {
            this.textConfig = {};
        }
        (0,_core_util_js__WEBPACK_IMPORTED_MODULE_1__.extend)(this.textConfig, cfg);
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
        this.__dirty |= _graphic_constants_js__WEBPACK_IMPORTED_MODULE_4__.REDRAW_BIT;
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
        var animator = new _animation_Animator_js__WEBPACK_IMPORTED_MODULE_7__["default"](target, loop, allowDiscreteAnimation);
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
            var idx = (0,_core_util_js__WEBPACK_IMPORTED_MODULE_1__.indexOf)(animators, animator);
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
                elProto.isGroup =
                    elProto.draggable =
                        elProto.dragging =
                            elProto.ignoreClip =
                                elProto.__inHover = false;
        elProto.__dirty = _graphic_constants_js__WEBPACK_IMPORTED_MODULE_4__.REDRAW_BIT;
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
(0,_core_util_js__WEBPACK_IMPORTED_MODULE_1__.mixin)(Element, _core_Eventful_js__WEBPACK_IMPORTED_MODULE_8__["default"]);
(0,_core_util_js__WEBPACK_IMPORTED_MODULE_1__.mixin)(Element, _core_Transformable_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
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
    return (0,_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isArrayLike)(value[0]);
}
function copyValue(target, source, key) {
    if ((0,_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isArrayLike)(source[key])) {
        if (!(0,_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isArrayLike)(target[key])) {
            target[key] = [];
        }
        if ((0,_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isTypedArray)(source[key])) {
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
        || (0,_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isArrayLike)(val1) && (0,_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isArrayLike)(val2) && is1DArraySame(val1, val2);
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
    var targetKeys = (0,_core_util_js__WEBPACK_IMPORTED_MODULE_1__.keys)(target);
    var duration = cfg.duration;
    var delay = cfg.delay;
    var additive = cfg.additive;
    var setToFinal = cfg.setToFinal;
    var animateAll = !(0,_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isObject)(animationProps);
    var existsAnimators = animatable.animators;
    var animationKeys = [];
    for (var k = 0; k < targetKeys.length; k++) {
        var innerKey = targetKeys[k];
        var targetVal = target[innerKey];
        if (targetVal != null && animateObj[innerKey] != null
            && (animateAll || animationProps[innerKey])) {
            if ((0,_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isObject)(targetVal)
                && !(0,_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isArrayLike)(targetVal)
                && !(0,_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isGradientObject)(targetVal)) {
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
                    var idx = (0,_core_util_js__WEBPACK_IMPORTED_MODULE_1__.indexOf)(existsAnimators, animator);
                    existsAnimators.splice(idx, 1);
                }
            }
        }
    }
    if (!cfg.force) {
        animationKeys = (0,_core_util_js__WEBPACK_IMPORTED_MODULE_1__.filter)(animationKeys, function (key) { return !isValueSame(target[key], animateObj[key]); });
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
                sourceClone[innerKey] = (0,_animation_Animator_js__WEBPACK_IMPORTED_MODULE_7__.cloneValue)(animateObj[innerKey]);
                copyValue(animateObj, target, innerKey);
            }
        }
        var animator = new _animation_Animator_js__WEBPACK_IMPORTED_MODULE_7__["default"](animateObj, false, false, additive ? (0,_core_util_js__WEBPACK_IMPORTED_MODULE_1__.filter)(existsAnimators, function (animator) { return animator.targetName === topKey; }) : null);
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
/* ESM default export */ __webpack_exports__["default"] = (Element);


}),
7895: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ lib_Handler; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(12012);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(96585);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/vector.js
var vector = __webpack_require__(63261);
;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/mixin/Draggable.js
var Draggable_Param = (function () {
    function Param(target, e) {
        this.target = target;
        this.topTarget = e && e.topTarget;
    }
    return Param;
}());
var Draggable_Draggable = (function () {
    function Draggable(handler) {
        this.handler = handler;
        handler.on('mousedown', this._dragStart, this);
        handler.on('mousemove', this._drag, this);
        handler.on('mouseup', this._dragEnd, this);
    }
    Draggable.prototype._dragStart = function (e) {
        var draggingTarget = e.target;
        while (draggingTarget && !draggingTarget.draggable) {
            draggingTarget = draggingTarget.parent || draggingTarget.__hostTarget;
        }
        if (draggingTarget) {
            this._draggingTarget = draggingTarget;
            draggingTarget.dragging = true;
            this._x = e.offsetX;
            this._y = e.offsetY;
            this.handler.dispatchToElement(new Draggable_Param(draggingTarget, e), 'dragstart', e.event);
        }
    };
    Draggable.prototype._drag = function (e) {
        var draggingTarget = this._draggingTarget;
        if (draggingTarget) {
            var x = e.offsetX;
            var y = e.offsetY;
            var dx = x - this._x;
            var dy = y - this._y;
            this._x = x;
            this._y = y;
            draggingTarget.drift(dx, dy, e);
            this.handler.dispatchToElement(new Draggable_Param(draggingTarget, e), 'drag', e.event);
            var dropTarget = this.handler.findHover(x, y, draggingTarget).target;
            var lastDropTarget = this._dropTarget;
            this._dropTarget = dropTarget;
            if (draggingTarget !== dropTarget) {
                if (lastDropTarget && dropTarget !== lastDropTarget) {
                    this.handler.dispatchToElement(new Draggable_Param(lastDropTarget, e), 'dragleave', e.event);
                }
                if (dropTarget && dropTarget !== lastDropTarget) {
                    this.handler.dispatchToElement(new Draggable_Param(dropTarget, e), 'dragenter', e.event);
                }
            }
        }
    };
    Draggable.prototype._dragEnd = function (e) {
        var draggingTarget = this._draggingTarget;
        if (draggingTarget) {
            draggingTarget.dragging = false;
        }
        this.handler.dispatchToElement(new Draggable_Param(draggingTarget, e), 'dragend', e.event);
        if (this._dropTarget) {
            this.handler.dispatchToElement(new Draggable_Param(this._dropTarget, e), 'drop', e.event);
        }
        this._draggingTarget = null;
        this._dropTarget = null;
    };
    return Draggable;
}());
/* ESM default export */ var mixin_Draggable = (Draggable_Draggable);

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/Eventful.js
var Eventful = __webpack_require__(46606);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/event.js
var core_event = __webpack_require__(3036);
;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/GestureMgr.js

var GestureMgr_GestureMgr = (function () {
    function GestureMgr() {
        this._track = [];
    }
    GestureMgr.prototype.recognize = function (event, target, root) {
        this._doTrack(event, target, root);
        return this._recognize(event);
    };
    GestureMgr.prototype.clear = function () {
        this._track.length = 0;
        return this;
    };
    GestureMgr.prototype._doTrack = function (event, target, root) {
        var touches = event.touches;
        if (!touches) {
            return;
        }
        var trackItem = {
            points: [],
            touches: [],
            target: target,
            event: event
        };
        for (var i = 0, len = touches.length; i < len; i++) {
            var touch = touches[i];
            var pos = core_event.clientToLocal(root, touch, {});
            trackItem.points.push([pos.zrX, pos.zrY]);
            trackItem.touches.push(touch);
        }
        this._track.push(trackItem);
    };
    GestureMgr.prototype._recognize = function (event) {
        for (var eventName in recognizers) {
            if (recognizers.hasOwnProperty(eventName)) {
                var gestureInfo = recognizers[eventName](this._track, event);
                if (gestureInfo) {
                    return gestureInfo;
                }
            }
        }
    };
    return GestureMgr;
}());

function dist(pointPair) {
    var dx = pointPair[1][0] - pointPair[0][0];
    var dy = pointPair[1][1] - pointPair[0][1];
    return Math.sqrt(dx * dx + dy * dy);
}
function center(pointPair) {
    return [
        (pointPair[0][0] + pointPair[1][0]) / 2,
        (pointPair[0][1] + pointPair[1][1]) / 2
    ];
}
var recognizers = {
    pinch: function (tracks, event) {
        var trackLen = tracks.length;
        if (!trackLen) {
            return;
        }
        var pinchEnd = (tracks[trackLen - 1] || {}).points;
        var pinchPre = (tracks[trackLen - 2] || {}).points || pinchEnd;
        if (pinchPre
            && pinchPre.length > 1
            && pinchEnd
            && pinchEnd.length > 1) {
            var pinchScale = dist(pinchEnd) / dist(pinchPre);
            !isFinite(pinchScale) && (pinchScale = 1);
            event.pinchScale = pinchScale;
            var pinchCenter = center(pinchEnd);
            event.pinchX = pinchCenter[0];
            event.pinchY = pinchCenter[1];
            return {
                type: 'pinch',
                target: tracks[0].target,
                event: event
            };
        }
    }
};

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/BoundingRect.js
var BoundingRect = __webpack_require__(44964);
;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/Handler.js








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
    core_event.stop(this.event);
}
var Handler_EmptyProxy = (function (_super) {
    (0,tslib_es6.__extends)(EmptyProxy, _super);
    function EmptyProxy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handler = null;
        return _this;
    }
    EmptyProxy.prototype.dispose = function () { };
    EmptyProxy.prototype.setCursor = function () { };
    return EmptyProxy;
}(Eventful["default"]));
var Handler_HoveredResult = (function () {
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
var tmpRect = new BoundingRect["default"](0, 0, 0, 0);
var Handler_Handler = (function (_super) {
    (0,tslib_es6.__extends)(Handler, _super);
    function Handler(storage, painter, proxy, painterRoot, pointerSize) {
        var _this = _super.call(this) || this;
        _this._hovered = new Handler_HoveredResult(0, 0);
        _this.storage = storage;
        _this.painter = painter;
        _this.painterRoot = painterRoot;
        _this._pointerSize = pointerSize;
        proxy = proxy || new Handler_EmptyProxy();
        _this.proxy = null;
        _this.setHandlerProxy(proxy);
        _this._draggingMgr = new mixin_Draggable(_this);
        return _this;
    }
    Handler.prototype.setHandlerProxy = function (proxy) {
        if (this.proxy) {
            this.proxy.dispose();
        }
        if (proxy) {
            util.each(handlerNames, function (name) {
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
        var hovered = this._hovered = isOutside ? new Handler_HoveredResult(x, y) : this.findHover(x, y);
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
        this._hovered = new Handler_HoveredResult(0, 0);
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
        var out = new Handler_HoveredResult(x, y);
        setHoverTarget(list, out, x, y, exclude);
        if (this._pointerSize && !out.target) {
            var candidates = [];
            var pointerSize = this._pointerSize;
            var targetSizeHalf = pointerSize / 2;
            var pointerRect = new BoundingRect["default"](x - targetSizeHalf, y - targetSizeHalf, pointerSize, pointerSize);
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
            this._gestureMgr = new GestureMgr_GestureMgr();
        }
        var gestureMgr = this._gestureMgr;
        stage === 'start' && gestureMgr.clear();
        var gestureInfo = gestureMgr.recognize(event, this.findHover(event.zrX, event.zrY, null).target, this.proxy.dom);
        stage === 'end' && gestureMgr.clear();
        if (gestureInfo) {
            var type = gestureInfo.type;
            event.gestureEvent = type;
            var res = new Handler_HoveredResult();
            res.target = gestureInfo.target;
            this.dispatchToElement(res, type, gestureInfo.event);
        }
    };
    return Handler;
}(Eventful["default"]));
util.each(['click', 'mousedown', 'mouseup', 'mousewheel', 'dblclick', 'contextmenu'], function (name) {
    Handler_Handler.prototype[name] = function (event) {
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
                || vector.dist(this._downPoint, [event.zrX, event.zrY]) > 4) {
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
            el = hostEl ? hostEl : el.parent;
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
/* ESM default export */ var lib_Handler = (Handler_Handler);


}),
31814: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _core_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96585);
/* ESM import */var _core_timsort_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22137);
/* ESM import */var _graphic_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59177);



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
        (0,_core_timsort_js__WEBPACK_IMPORTED_MODULE_0__["default"])(displayList, shapeCompareFunc);
    };
    Storage.prototype._updateAndAddDisplayable = function (el, clipPaths, includeIgnore) {
        if (el.ignore && !includeIgnore) {
            return;
        }
        el.beforeUpdate();
        el.update();
        el.afterUpdate();
        var userSetClipPath = el.getClipPath();
        if (el.ignoreClip) {
            clipPaths = null;
        }
        else if (userSetClipPath) {
            if (clipPaths) {
                clipPaths = clipPaths.slice();
            }
            else {
                clipPaths = [];
            }
            var currentClipPath = userSetClipPath;
            var parentClipPath = el;
            while (currentClipPath) {
                currentClipPath.parent = parentClipPath;
                currentClipPath.updateTransform();
                clipPaths.push(currentClipPath);
                parentClipPath = currentClipPath;
                currentClipPath = currentClipPath.getClipPath();
            }
        }
        if (el.childrenRef) {
            var children = el.childrenRef();
            for (var i = 0; i < children.length; i++) {
                var child = children[i];
                if (el.__dirty) {
                    child.__dirty |= _graphic_constants_js__WEBPACK_IMPORTED_MODULE_1__.REDRAW_BIT;
                }
                this._updateAndAddDisplayable(child, clipPaths, includeIgnore);
            }
            el.__dirty = 0;
        }
        else {
            var disp = el;
            if (clipPaths && clipPaths.length) {
                disp.__clipPaths = clipPaths;
            }
            else if (disp.__clipPaths && disp.__clipPaths.length > 0) {
                disp.__clipPaths = [];
            }
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
            this._updateAndAddDisplayable(decalEl, clipPaths, includeIgnore);
        }
        var textGuide = el.getTextGuideLine();
        if (textGuide) {
            this._updateAndAddDisplayable(textGuide, clipPaths, includeIgnore);
        }
        var textEl = el.getTextContent();
        if (textEl) {
            this._updateAndAddDisplayable(textEl, clipPaths, includeIgnore);
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
        var idx = _core_util_js__WEBPACK_IMPORTED_MODULE_2__.indexOf(this._roots, el);
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
/* ESM default export */ __webpack_exports__["default"] = (Storage);


}),
98635: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getTime: function() { return getTime; }
});
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var _core_Eventful_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46606);
/* ESM import */var _requestAnimationFrame_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98279);
/* ESM import */var _Animator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2076);




function getTime() {
    return new Date().getTime();
}
var Animation = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(Animation, _super);
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
                (0,_requestAnimationFrame_js__WEBPACK_IMPORTED_MODULE_2__["default"])(step);
                !self._paused && self.update();
            }
        }
        (0,_requestAnimationFrame_js__WEBPACK_IMPORTED_MODULE_2__["default"])(step);
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
        var animator = new _Animator_js__WEBPACK_IMPORTED_MODULE_3__["default"](target, options.loop);
        this.addAnimator(animator);
        return animator;
    };
    return Animation;
}(_core_Eventful_js__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* ESM default export */ __webpack_exports__["default"] = (Animation);


}),
2076: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  cloneValue: function() { return /* binding */ cloneValue; },
  "default": function() { return /* binding */ animation_Animator; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/animation/easing.js
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
/* ESM default export */ var animation_easing = (easingFuncs);

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(96585);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/animation/cubicEasing.js
var cubicEasing = __webpack_require__(28255);
;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/animation/Clip.js



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
/* ESM default export */ var animation_Clip = (Clip_Clip);

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/tool/color.js
var color = __webpack_require__(67375);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/svg/helper.js
var helper = __webpack_require__(67206);
;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/animation/Animator.js






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
/* ESM default export */ var animation_Animator = (Animator_Animator);


}),
28255: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createCubicEasingFunc: function() { return createCubicEasingFunc; }
});
/* ESM import */var _core_curve_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97566);
/* ESM import */var _core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96585);


var regexp = /cubic-bezier\(([0-9,\.e ]+)\)/;
function createCubicEasingFunc(cubicEasingStr) {
    var cubic = cubicEasingStr && regexp.exec(cubicEasingStr);
    if (cubic) {
        var points = cubic[1].split(',');
        var a_1 = +(0,_core_util_js__WEBPACK_IMPORTED_MODULE_0__.trim)(points[0]);
        var b_1 = +(0,_core_util_js__WEBPACK_IMPORTED_MODULE_0__.trim)(points[1]);
        var c_1 = +(0,_core_util_js__WEBPACK_IMPORTED_MODULE_0__.trim)(points[2]);
        var d_1 = +(0,_core_util_js__WEBPACK_IMPORTED_MODULE_0__.trim)(points[3]);
        if (isNaN(a_1 + b_1 + c_1 + d_1)) {
            return;
        }
        var roots_1 = [];
        return function (p) {
            return p <= 0
                ? 0 : p >= 1
                ? 1
                : (0,_core_curve_js__WEBPACK_IMPORTED_MODULE_1__.cubicRootAt)(0, a_1, c_1, 1, p, roots_1) && (0,_core_curve_js__WEBPACK_IMPORTED_MODULE_1__.cubicAt)(0, b_1, d_1, 1, roots_1[0]);
        };
    }
}


}),
98279: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _core_env_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76226);

var requestAnimationFrame;
requestAnimationFrame = (_core_env_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasGlobalWindow
    && ((window.requestAnimationFrame && window.requestAnimationFrame.bind(window))
        || (window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window))
        || window.mozRequestAnimationFrame
        || window.webkitRequestAnimationFrame)) || function (func) {
    return setTimeout(func, 16);
};
/* ESM default export */ __webpack_exports__["default"] = (requestAnimationFrame);


}),
72706: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Painter; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/config.js
var lib_config = __webpack_require__(8473);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(96585);
// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(12012);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/Eventful.js
var Eventful = __webpack_require__(46606);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/canvas/helper.js
var helper = __webpack_require__(31516);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/canvas/graphic.js
var graphic = __webpack_require__(36711);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/BoundingRect.js
var BoundingRect = __webpack_require__(44964);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/constants.js
var constants = __webpack_require__(59177);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/platform.js
var platform = __webpack_require__(82379);
;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/canvas/Layer.js









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
/* ESM default export */ var canvas_Layer = (Layer_Layer);

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/animation/requestAnimationFrame.js
var requestAnimationFrame = __webpack_require__(98279);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/env.js
var env = __webpack_require__(76226);
;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/canvas/Painter.js








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
/* ESM default export */ var Painter = (Painter_CanvasPainter);
;


}),
75422: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getLineDash: function() { return getLineDash; },
  normalizeLineDash: function() { return normalizeLineDash; }
});
/* ESM import */var _core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96585);

function normalizeLineDash(lineType, lineWidth) {
    if (!lineType || lineType === 'solid' || !(lineWidth > 0)) {
        return null;
    }
    return lineType === 'dashed'
        ? [4 * lineWidth, 2 * lineWidth]
        : lineType === 'dotted'
            ? [lineWidth]
            : (0,_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isNumber)(lineType)
                ? [lineType] : (0,_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(lineType) ? lineType : null;
}
function getLineDash(el) {
    var style = el.style;
    var lineDash = style.lineDash && style.lineWidth > 0 && normalizeLineDash(style.lineDash, style.lineWidth);
    var lineDashOffset = style.lineDashOffset;
    if (lineDash) {
        var lineScale_1 = (style.strokeNoScale && el.getLineScale) ? el.getLineScale() : 1;
        if (lineScale_1 && lineScale_1 !== 1) {
            lineDash = (0,_core_util_js__WEBPACK_IMPORTED_MODULE_0__.map)(lineDash, function (rawVal) {
                return rawVal / lineScale_1;
            });
            lineDashOffset /= lineScale_1;
        }
    }
    return [lineDash, lineDashOffset];
}


}),
36711: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  brush: function() { return brush; },
  brushSingle: function() { return brushSingle; },
  createCanvasPattern: function() { return createCanvasPattern; }
});
/* ESM import */var _graphic_Displayable_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90635);
/* ESM import */var _core_PathProxy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6535);
/* ESM import */var _graphic_helper_image_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25259);
/* ESM import */var _helper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31516);
/* ESM import */var _graphic_Path_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(49678);
/* ESM import */var _graphic_Image_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(31386);
/* ESM import */var _graphic_TSpan_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(39183);
/* ESM import */var _core_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96585);
/* ESM import */var _dashStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75422);
/* ESM import */var _graphic_constants_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59177);
/* ESM import */var _core_platform_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(82379);











var pathProxyForDraw = new _core_PathProxy_js__WEBPACK_IMPORTED_MODULE_0__["default"](true);
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
    var image = (0,_graphic_helper_image_js__WEBPACK_IMPORTED_MODULE_1__.createOrUpdateImage)(pattern.image, pattern.__image, el);
    if ((0,_graphic_helper_image_js__WEBPACK_IMPORTED_MODULE_1__.isImageReady)(image)) {
        var canvasPattern = ctx.createPattern(image, pattern.repeat || 'repeat');
        if (typeof DOMMatrix === 'function'
            && canvasPattern
            && canvasPattern.setTransform) {
            var matrix = new DOMMatrix();
            matrix.translateSelf((pattern.x || 0), (pattern.y || 0));
            matrix.rotateSelf(0, 0, (pattern.rotation || 0) * _core_util_js__WEBPACK_IMPORTED_MODULE_2__.RADIAN_TO_DEGREE);
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
                ? (0,_helper_js__WEBPACK_IMPORTED_MODULE_3__.getCanvasGradient)(ctx, fill, rect)
                : el.__canvasFillGradient;
            el.__canvasFillGradient = fillGradient;
        }
        if (hasStrokeGradient) {
            strokeGradient = dirtyFlag
                ? (0,_helper_js__WEBPACK_IMPORTED_MODULE_3__.getCanvasGradient)(ctx, stroke, rect)
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
            el.__canvasStrokePattern = fillPattern;
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
        _a = (0,_dashStyle_js__WEBPACK_IMPORTED_MODULE_4__.getLineDash)(el), lineDash = _a[0], lineDashOffset = _a[1];
    }
    var needsRebuild = true;
    if (firstDraw || (dirtyFlag & _graphic_constants_js__WEBPACK_IMPORTED_MODULE_5__.SHAPE_CHANGED_BIT)) {
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
    var image = el.__image = (0,_graphic_helper_image_js__WEBPACK_IMPORTED_MODULE_1__.createOrUpdateImage)(style.image, el.__image, el, el.onload);
    if (!image || !(0,_graphic_helper_image_js__WEBPACK_IMPORTED_MODULE_1__.isImageReady)(image)) {
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
        ctx.font = style.font || _core_platform_js__WEBPACK_IMPORTED_MODULE_6__.DEFAULT_FONT;
        ctx.textAlign = style.textAlign;
        ctx.textBaseline = style.textBaseline;
        var lineDash = void 0;
        var lineDashOffset = void 0;
        if (ctx.setLineDash && style.lineDash) {
            _a = (0,_dashStyle_js__WEBPACK_IMPORTED_MODULE_4__.getLineDash)(el), lineDash = _a[0], lineDashOffset = _a[1];
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
        ctx.globalAlpha = isNaN(opacity) ? _graphic_Displayable_js__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_COMMON_STYLE.opacity : opacity;
    }
    if (forceSetAll || style.blend !== prevStyle.blend) {
        if (!styleChanged) {
            flushPathDrawn(ctx, scope);
            styleChanged = true;
        }
        ctx.globalCompositeOperation = style.blend || _graphic_Displayable_js__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_COMMON_STYLE.blend;
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
        ctx.shadowColor = style.shadowColor || _graphic_Displayable_js__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_COMMON_STYLE.shadowColor;
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
        el.__dirty &= ~_graphic_constants_js__WEBPACK_IMPORTED_MODULE_5__.REDRAW_BIT;
        el.__isRendered = false;
        return;
    }
    var clipPaths = el.__clipPaths;
    var prevElClipPaths = scope.prevElClipPaths;
    var forceSetTransform = false;
    var forceSetStyle = false;
    if (!prevElClipPaths || (0,_helper_js__WEBPACK_IMPORTED_MODULE_3__.isClipPathChanged)(clipPaths, prevElClipPaths)) {
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
    var canBatchPath = el instanceof _graphic_Path_js__WEBPACK_IMPORTED_MODULE_8__["default"]
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
    if (el instanceof _graphic_Path_js__WEBPACK_IMPORTED_MODULE_8__["default"]) {
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
        if (el instanceof _graphic_TSpan_js__WEBPACK_IMPORTED_MODULE_9__["default"]) {
            if (scope.lastDrawType !== DRAW_TYPE_TEXT) {
                forceSetStyle = true;
                scope.lastDrawType = DRAW_TYPE_TEXT;
            }
            bindPathAndTextCommonStyle(ctx, el, prevEl, forceSetStyle, scope);
            brushText(ctx, el, style);
        }
        else if (el instanceof _graphic_Image_js__WEBPACK_IMPORTED_MODULE_10__["default"]) {
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
31516: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
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
8473: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DARK_LABEL_COLOR: function() { return DARK_LABEL_COLOR; },
  DARK_MODE_THRESHOLD: function() { return DARK_MODE_THRESHOLD; },
  LIGHTER_LABEL_COLOR: function() { return LIGHTER_LABEL_COLOR; },
  LIGHT_LABEL_COLOR: function() { return LIGHT_LABEL_COLOR; },
  debugMode: function() { return debugMode; },
  devicePixelRatio: function() { return devicePixelRatio; }
});
/* ESM import */var _core_env_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76226);

var dpr = 1;
if (_core_env_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasGlobalWindow) {
    dpr = Math.max(window.devicePixelRatio
        || (window.screen && window.screen.deviceXDPI / window.screen.logicalXDPI)
        || 1, 1);
}
var debugMode = 0;
var devicePixelRatio = dpr;
var DARK_MODE_THRESHOLD = 0.4;
var DARK_LABEL_COLOR = '#333';
var LIGHT_LABEL_COLOR = '#ccc';
var LIGHTER_LABEL_COLOR = '#eee';


}),
40343: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  containStroke: function() { return containStroke; }
});
function containStroke(x0, y0, x1, y1, lineWidth, x, y) {
    if (lineWidth === 0) {
        return false;
    }
    var _l = lineWidth;
    var _a = 0;
    var _b = x0;
    if ((y > y0 + _l && y > y1 + _l)
        || (y < y0 - _l && y < y1 - _l)
        || (x > x0 + _l && x > x1 + _l)
        || (x < x0 - _l && x < x1 - _l)) {
        return false;
    }
    if (x0 !== x1) {
        _a = (y0 - y1) / (x0 - x1);
        _b = (x0 * y1 - x1 * y0) / (x0 - x1);
    }
    else {
        return Math.abs(x - x0) <= _l / 2;
    }
    var tmp = _a * x - y + _b;
    var _s = tmp * tmp / (_a * _a + 1);
    return _s <= _l / 2 * _l / 2;
}


}),
92603: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  contain: function() { return contain; }
});
/* ESM import */var _windingLine_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93349);

var EPSILON = 1e-8;
function isAroundEqual(a, b) {
    return Math.abs(a - b) < EPSILON;
}
function contain(points, x, y) {
    var w = 0;
    var p = points[0];
    if (!p) {
        return false;
    }
    for (var i = 1; i < points.length; i++) {
        var p2 = points[i];
        w += (0,_windingLine_js__WEBPACK_IMPORTED_MODULE_0__["default"])(p[0], p[1], p2[0], p2[1], x, y);
        p = p2;
    }
    var p0 = points[0];
    if (!isAroundEqual(p[0], p0[0]) || !isAroundEqual(p[1], p0[1])) {
        w += (0,_windingLine_js__WEBPACK_IMPORTED_MODULE_0__["default"])(p[0], p[1], p0[0], p0[1], x, y);
    }
    return w !== 0;
}


}),
37186: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  containStroke: function() { return containStroke; }
});
/* ESM import */var _core_curve_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97566);

function containStroke(x0, y0, x1, y1, x2, y2, lineWidth, x, y) {
    if (lineWidth === 0) {
        return false;
    }
    var _l = lineWidth;
    if ((y > y0 + _l && y > y1 + _l && y > y2 + _l)
        || (y < y0 - _l && y < y1 - _l && y < y2 - _l)
        || (x > x0 + _l && x > x1 + _l && x > x2 + _l)
        || (x < x0 - _l && x < x1 - _l && x < x2 - _l)) {
        return false;
    }
    var d = (0,_core_curve_js__WEBPACK_IMPORTED_MODULE_0__.quadraticProjectPoint)(x0, y0, x1, y1, x2, y2, x, y, null);
    return d <= _l / 2;
}


}),
45258: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  adjustTextX: function() { return adjustTextX; },
  adjustTextY: function() { return adjustTextY; },
  calculateTextPosition: function() { return calculateTextPosition; },
  getBoundingRect: function() { return getBoundingRect; },
  getLineHeight: function() { return getLineHeight; },
  getWidth: function() { return getWidth; },
  innerGetBoundingRect: function() { return innerGetBoundingRect; },
  measureText: function() { return measureText; },
  parsePercent: function() { return parsePercent; }
});
/* ESM import */var _core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44964);
/* ESM import */var _core_LRU_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45671);
/* ESM import */var _core_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82379);



var textWidthCache = {};
function getWidth(text, font) {
    font = font || _core_platform_js__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_FONT;
    var cacheOfFont = textWidthCache[font];
    if (!cacheOfFont) {
        cacheOfFont = textWidthCache[font] = new _core_LRU_js__WEBPACK_IMPORTED_MODULE_1__["default"](500);
    }
    var width = cacheOfFont.get(text);
    if (width == null) {
        width = _core_platform_js__WEBPACK_IMPORTED_MODULE_0__.platformApi.measureText(text, font).width;
        cacheOfFont.put(text, width);
    }
    return width;
}
function innerGetBoundingRect(text, font, textAlign, textBaseline) {
    var width = getWidth(text, font);
    var height = getLineHeight(font);
    var x = adjustTextX(0, width, textAlign);
    var y = adjustTextY(0, height, textBaseline);
    var rect = new _core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_2__["default"](x, y, width, height);
    return rect;
}
function getBoundingRect(text, font, textAlign, textBaseline) {
    var textLines = ((text || '') + '').split('\n');
    var len = textLines.length;
    if (len === 1) {
        return innerGetBoundingRect(textLines[0], font, textAlign, textBaseline);
    }
    else {
        var uniondRect = new _core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_2__["default"](0, 0, 0, 0);
        for (var i = 0; i < textLines.length; i++) {
            var rect = innerGetBoundingRect(textLines[i], font, textAlign, textBaseline);
            i === 0 ? uniondRect.copy(rect) : uniondRect.union(rect);
        }
        return uniondRect;
    }
}
function adjustTextX(x, width, textAlign) {
    if (textAlign === 'right') {
        x -= width;
    }
    else if (textAlign === 'center') {
        x -= width / 2;
    }
    return x;
}
function adjustTextY(y, height, verticalAlign) {
    if (verticalAlign === 'middle') {
        y -= height / 2;
    }
    else if (verticalAlign === 'bottom') {
        y -= height;
    }
    return y;
}
function getLineHeight(font) {
    return getWidth('国', font);
}
function measureText(text, font) {
    return _core_platform_js__WEBPACK_IMPORTED_MODULE_0__.platformApi.measureText(text, font);
}
function parsePercent(value, maxValue) {
    if (typeof value === 'string') {
        if (value.lastIndexOf('%') >= 0) {
            return parseFloat(value) / 100 * maxValue;
        }
        return parseFloat(value);
    }
    return value;
}
function calculateTextPosition(out, opts, rect) {
    var textPosition = opts.position || 'inside';
    var distance = opts.distance != null ? opts.distance : 5;
    var height = rect.height;
    var width = rect.width;
    var halfHeight = height / 2;
    var x = rect.x;
    var y = rect.y;
    var textAlign = 'left';
    var textVerticalAlign = 'top';
    if (textPosition instanceof Array) {
        x += parsePercent(textPosition[0], rect.width);
        y += parsePercent(textPosition[1], rect.height);
        textAlign = null;
        textVerticalAlign = null;
    }
    else {
        switch (textPosition) {
            case 'left':
                x -= distance;
                y += halfHeight;
                textAlign = 'right';
                textVerticalAlign = 'middle';
                break;
            case 'right':
                x += distance + width;
                y += halfHeight;
                textVerticalAlign = 'middle';
                break;
            case 'top':
                x += width / 2;
                y -= distance;
                textAlign = 'center';
                textVerticalAlign = 'bottom';
                break;
            case 'bottom':
                x += width / 2;
                y += height + distance;
                textAlign = 'center';
                break;
            case 'inside':
                x += width / 2;
                y += halfHeight;
                textAlign = 'center';
                textVerticalAlign = 'middle';
                break;
            case 'insideLeft':
                x += distance;
                y += halfHeight;
                textVerticalAlign = 'middle';
                break;
            case 'insideRight':
                x += width - distance;
                y += halfHeight;
                textAlign = 'right';
                textVerticalAlign = 'middle';
                break;
            case 'insideTop':
                x += width / 2;
                y += distance;
                textAlign = 'center';
                break;
            case 'insideBottom':
                x += width / 2;
                y += height - distance;
                textAlign = 'center';
                textVerticalAlign = 'bottom';
                break;
            case 'insideTopLeft':
                x += distance;
                y += distance;
                break;
            case 'insideTopRight':
                x += width - distance;
                y += distance;
                textAlign = 'right';
                break;
            case 'insideBottomLeft':
                x += distance;
                y += height - distance;
                textVerticalAlign = 'bottom';
                break;
            case 'insideBottomRight':
                x += width - distance;
                y += height - distance;
                textAlign = 'right';
                textVerticalAlign = 'bottom';
                break;
        }
    }
    out = out || {};
    out.x = x;
    out.y = y;
    out.align = textAlign;
    out.verticalAlign = textVerticalAlign;
    return out;
}


}),
29662: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  normalizeRadian: function() { return normalizeRadian; }
});
var PI2 = Math.PI * 2;
function normalizeRadian(angle) {
    angle %= PI2;
    if (angle < 0) {
        angle += PI2;
    }
    return angle;
}


}),
93349: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return windingLine; }
});
function windingLine(x0, y0, x1, y1, x, y) {
    if ((y > y0 && y > y1) || (y < y0 && y < y1)) {
        return 0;
    }
    if (y1 === y0) {
        return 0;
    }
    var t = (y - y0) / (y1 - y0);
    var dir = y1 < y0 ? 1 : -1;
    if (t === 1 || t === 0) {
        dir = y1 < y0 ? 0.5 : -0.5;
    }
    var x_ = t * (x1 - x0) + x0;
    return x_ === x ? Infinity : x_ > x ? dir : 0;
}


}),
44964: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _matrix_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85215);
/* ESM import */var _Point_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12430);


var mathMin = Math.min;
var mathMax = Math.max;
var lt = new _Point_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
var rb = new _Point_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
var lb = new _Point_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
var rt = new _Point_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
var minTv = new _Point_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
var maxTv = new _Point_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
var BoundingRect = (function () {
    function BoundingRect(x, y, width, height) {
        if (width < 0) {
            x = x + width;
            width = -width;
        }
        if (height < 0) {
            y = y + height;
            height = -height;
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    BoundingRect.prototype.union = function (other) {
        var x = mathMin(other.x, this.x);
        var y = mathMin(other.y, this.y);
        if (isFinite(this.x) && isFinite(this.width)) {
            this.width = mathMax(other.x + other.width, this.x + this.width) - x;
        }
        else {
            this.width = other.width;
        }
        if (isFinite(this.y) && isFinite(this.height)) {
            this.height = mathMax(other.y + other.height, this.y + this.height) - y;
        }
        else {
            this.height = other.height;
        }
        this.x = x;
        this.y = y;
    };
    BoundingRect.prototype.applyTransform = function (m) {
        BoundingRect.applyTransform(this, this, m);
    };
    BoundingRect.prototype.calculateTransform = function (b) {
        var a = this;
        var sx = b.width / a.width;
        var sy = b.height / a.height;
        var m = _matrix_js__WEBPACK_IMPORTED_MODULE_1__.create();
        _matrix_js__WEBPACK_IMPORTED_MODULE_1__.translate(m, m, [-a.x, -a.y]);
        _matrix_js__WEBPACK_IMPORTED_MODULE_1__.scale(m, m, [sx, sy]);
        _matrix_js__WEBPACK_IMPORTED_MODULE_1__.translate(m, m, [b.x, b.y]);
        return m;
    };
    BoundingRect.prototype.intersect = function (b, mtv) {
        if (!b) {
            return false;
        }
        if (!(b instanceof BoundingRect)) {
            b = BoundingRect.create(b);
        }
        var a = this;
        var ax0 = a.x;
        var ax1 = a.x + a.width;
        var ay0 = a.y;
        var ay1 = a.y + a.height;
        var bx0 = b.x;
        var bx1 = b.x + b.width;
        var by0 = b.y;
        var by1 = b.y + b.height;
        var overlap = !(ax1 < bx0 || bx1 < ax0 || ay1 < by0 || by1 < ay0);
        if (mtv) {
            var dMin = Infinity;
            var dMax = 0;
            var d0 = Math.abs(ax1 - bx0);
            var d1 = Math.abs(bx1 - ax0);
            var d2 = Math.abs(ay1 - by0);
            var d3 = Math.abs(by1 - ay0);
            var dx = Math.min(d0, d1);
            var dy = Math.min(d2, d3);
            if (ax1 < bx0 || bx1 < ax0) {
                if (dx > dMax) {
                    dMax = dx;
                    if (d0 < d1) {
                        _Point_js__WEBPACK_IMPORTED_MODULE_0__["default"].set(maxTv, -d0, 0);
                    }
                    else {
                        _Point_js__WEBPACK_IMPORTED_MODULE_0__["default"].set(maxTv, d1, 0);
                    }
                }
            }
            else {
                if (dx < dMin) {
                    dMin = dx;
                    if (d0 < d1) {
                        _Point_js__WEBPACK_IMPORTED_MODULE_0__["default"].set(minTv, d0, 0);
                    }
                    else {
                        _Point_js__WEBPACK_IMPORTED_MODULE_0__["default"].set(minTv, -d1, 0);
                    }
                }
            }
            if (ay1 < by0 || by1 < ay0) {
                if (dy > dMax) {
                    dMax = dy;
                    if (d2 < d3) {
                        _Point_js__WEBPACK_IMPORTED_MODULE_0__["default"].set(maxTv, 0, -d2);
                    }
                    else {
                        _Point_js__WEBPACK_IMPORTED_MODULE_0__["default"].set(maxTv, 0, d3);
                    }
                }
            }
            else {
                if (dx < dMin) {
                    dMin = dx;
                    if (d2 < d3) {
                        _Point_js__WEBPACK_IMPORTED_MODULE_0__["default"].set(minTv, 0, d2);
                    }
                    else {
                        _Point_js__WEBPACK_IMPORTED_MODULE_0__["default"].set(minTv, 0, -d3);
                    }
                }
            }
        }
        if (mtv) {
            _Point_js__WEBPACK_IMPORTED_MODULE_0__["default"].copy(mtv, overlap ? minTv : maxTv);
        }
        return overlap;
    };
    BoundingRect.prototype.contain = function (x, y) {
        var rect = this;
        return x >= rect.x
            && x <= (rect.x + rect.width)
            && y >= rect.y
            && y <= (rect.y + rect.height);
    };
    BoundingRect.prototype.clone = function () {
        return new BoundingRect(this.x, this.y, this.width, this.height);
    };
    BoundingRect.prototype.copy = function (other) {
        BoundingRect.copy(this, other);
    };
    BoundingRect.prototype.plain = function () {
        return {
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height
        };
    };
    BoundingRect.prototype.isFinite = function () {
        return isFinite(this.x)
            && isFinite(this.y)
            && isFinite(this.width)
            && isFinite(this.height);
    };
    BoundingRect.prototype.isZero = function () {
        return this.width === 0 || this.height === 0;
    };
    BoundingRect.create = function (rect) {
        return new BoundingRect(rect.x, rect.y, rect.width, rect.height);
    };
    BoundingRect.copy = function (target, source) {
        target.x = source.x;
        target.y = source.y;
        target.width = source.width;
        target.height = source.height;
    };
    BoundingRect.applyTransform = function (target, source, m) {
        if (!m) {
            if (target !== source) {
                BoundingRect.copy(target, source);
            }
            return;
        }
        if (m[1] < 1e-5 && m[1] > -1e-5 && m[2] < 1e-5 && m[2] > -1e-5) {
            var sx = m[0];
            var sy = m[3];
            var tx = m[4];
            var ty = m[5];
            target.x = source.x * sx + tx;
            target.y = source.y * sy + ty;
            target.width = source.width * sx;
            target.height = source.height * sy;
            if (target.width < 0) {
                target.x += target.width;
                target.width = -target.width;
            }
            if (target.height < 0) {
                target.y += target.height;
                target.height = -target.height;
            }
            return;
        }
        lt.x = lb.x = source.x;
        lt.y = rt.y = source.y;
        rb.x = rt.x = source.x + source.width;
        rb.y = lb.y = source.y + source.height;
        lt.transform(m);
        rt.transform(m);
        rb.transform(m);
        lb.transform(m);
        target.x = mathMin(lt.x, rb.x, lb.x, rt.x);
        target.y = mathMin(lt.y, rb.y, lb.y, rt.y);
        var maxX = mathMax(lt.x, rb.x, lb.x, rt.x);
        var maxY = mathMax(lt.y, rb.y, lb.y, rt.y);
        target.width = maxX - target.x;
        target.height = maxY - target.y;
    };
    return BoundingRect;
}());
/* ESM default export */ __webpack_exports__["default"] = (BoundingRect);


}),
46606: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
var Eventful = (function () {
    function Eventful(eventProcessors) {
        if (eventProcessors) {
            this._$eventProcessor = eventProcessors;
        }
    }
    Eventful.prototype.on = function (event, query, handler, context) {
        if (!this._$handlers) {
            this._$handlers = {};
        }
        var _h = this._$handlers;
        if (typeof query === 'function') {
            context = handler;
            handler = query;
            query = null;
        }
        if (!handler || !event) {
            return this;
        }
        var eventProcessor = this._$eventProcessor;
        if (query != null && eventProcessor && eventProcessor.normalizeQuery) {
            query = eventProcessor.normalizeQuery(query);
        }
        if (!_h[event]) {
            _h[event] = [];
        }
        for (var i = 0; i < _h[event].length; i++) {
            if (_h[event][i].h === handler) {
                return this;
            }
        }
        var wrap = {
            h: handler,
            query: query,
            ctx: (context || this),
            callAtLast: handler.zrEventfulCallAtLast
        };
        var lastIndex = _h[event].length - 1;
        var lastWrap = _h[event][lastIndex];
        (lastWrap && lastWrap.callAtLast)
            ? _h[event].splice(lastIndex, 0, wrap)
            : _h[event].push(wrap);
        return this;
    };
    Eventful.prototype.isSilent = function (eventName) {
        var _h = this._$handlers;
        return !_h || !_h[eventName] || !_h[eventName].length;
    };
    Eventful.prototype.off = function (eventType, handler) {
        var _h = this._$handlers;
        if (!_h) {
            return this;
        }
        if (!eventType) {
            this._$handlers = {};
            return this;
        }
        if (handler) {
            if (_h[eventType]) {
                var newList = [];
                for (var i = 0, l = _h[eventType].length; i < l; i++) {
                    if (_h[eventType][i].h !== handler) {
                        newList.push(_h[eventType][i]);
                    }
                }
                _h[eventType] = newList;
            }
            if (_h[eventType] && _h[eventType].length === 0) {
                delete _h[eventType];
            }
        }
        else {
            delete _h[eventType];
        }
        return this;
    };
    Eventful.prototype.trigger = function (eventType) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!this._$handlers) {
            return this;
        }
        var _h = this._$handlers[eventType];
        var eventProcessor = this._$eventProcessor;
        if (_h) {
            var argLen = args.length;
            var len = _h.length;
            for (var i = 0; i < len; i++) {
                var hItem = _h[i];
                if (eventProcessor
                    && eventProcessor.filter
                    && hItem.query != null
                    && !eventProcessor.filter(eventType, hItem.query)) {
                    continue;
                }
                switch (argLen) {
                    case 0:
                        hItem.h.call(hItem.ctx);
                        break;
                    case 1:
                        hItem.h.call(hItem.ctx, args[0]);
                        break;
                    case 2:
                        hItem.h.call(hItem.ctx, args[0], args[1]);
                        break;
                    default:
                        hItem.h.apply(hItem.ctx, args);
                        break;
                }
            }
        }
        eventProcessor && eventProcessor.afterTrigger
            && eventProcessor.afterTrigger(eventType);
        return this;
    };
    Eventful.prototype.triggerWithContext = function (type) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!this._$handlers) {
            return this;
        }
        var _h = this._$handlers[type];
        var eventProcessor = this._$eventProcessor;
        if (_h) {
            var argLen = args.length;
            var ctx = args[argLen - 1];
            var len = _h.length;
            for (var i = 0; i < len; i++) {
                var hItem = _h[i];
                if (eventProcessor
                    && eventProcessor.filter
                    && hItem.query != null
                    && !eventProcessor.filter(type, hItem.query)) {
                    continue;
                }
                switch (argLen) {
                    case 0:
                        hItem.h.call(ctx);
                        break;
                    case 1:
                        hItem.h.call(ctx, args[0]);
                        break;
                    case 2:
                        hItem.h.call(ctx, args[0], args[1]);
                        break;
                    default:
                        hItem.h.apply(ctx, args.slice(1, argLen - 1));
                        break;
                }
            }
        }
        eventProcessor && eventProcessor.afterTrigger
            && eventProcessor.afterTrigger(type);
        return this;
    };
    return Eventful;
}());
/* ESM default export */ __webpack_exports__["default"] = (Eventful);


}),
45671: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Entry: function() { return Entry; },
  LinkedList: function() { return LinkedList; }
});
var Entry = (function () {
    function Entry(val) {
        this.value = val;
    }
    return Entry;
}());

var LinkedList = (function () {
    function LinkedList() {
        this._len = 0;
    }
    LinkedList.prototype.insert = function (val) {
        var entry = new Entry(val);
        this.insertEntry(entry);
        return entry;
    };
    LinkedList.prototype.insertEntry = function (entry) {
        if (!this.head) {
            this.head = this.tail = entry;
        }
        else {
            this.tail.next = entry;
            entry.prev = this.tail;
            entry.next = null;
            this.tail = entry;
        }
        this._len++;
    };
    LinkedList.prototype.remove = function (entry) {
        var prev = entry.prev;
        var next = entry.next;
        if (prev) {
            prev.next = next;
        }
        else {
            this.head = next;
        }
        if (next) {
            next.prev = prev;
        }
        else {
            this.tail = prev;
        }
        entry.next = entry.prev = null;
        this._len--;
    };
    LinkedList.prototype.len = function () {
        return this._len;
    };
    LinkedList.prototype.clear = function () {
        this.head = this.tail = null;
        this._len = 0;
    };
    return LinkedList;
}());

var LRU = (function () {
    function LRU(maxSize) {
        this._list = new LinkedList();
        this._maxSize = 10;
        this._map = {};
        this._maxSize = maxSize;
    }
    LRU.prototype.put = function (key, value) {
        var list = this._list;
        var map = this._map;
        var removed = null;
        if (map[key] == null) {
            var len = list.len();
            var entry = this._lastRemovedEntry;
            if (len >= this._maxSize && len > 0) {
                var leastUsedEntry = list.head;
                list.remove(leastUsedEntry);
                delete map[leastUsedEntry.key];
                removed = leastUsedEntry.value;
                this._lastRemovedEntry = leastUsedEntry;
            }
            if (entry) {
                entry.value = value;
            }
            else {
                entry = new Entry(value);
            }
            entry.key = key;
            list.insertEntry(entry);
            map[key] = entry;
        }
        return removed;
    };
    LRU.prototype.get = function (key) {
        var entry = this._map[key];
        var list = this._list;
        if (entry != null) {
            if (entry !== list.tail) {
                list.remove(entry);
                list.insertEntry(entry);
            }
            return entry.value;
        }
    };
    LRU.prototype.clear = function () {
        this._list.clear();
        this._map = {};
    };
    LRU.prototype.len = function () {
        return this._list.len();
    };
    return LRU;
}());
/* ESM default export */ __webpack_exports__["default"] = (LRU);


}),
70431: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _Point_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12430);

var extent = [0, 0];
var extent2 = [0, 0];
var minTv = new _Point_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
var maxTv = new _Point_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
var OrientedBoundingRect = (function () {
    function OrientedBoundingRect(rect, transform) {
        this._corners = [];
        this._axes = [];
        this._origin = [0, 0];
        for (var i = 0; i < 4; i++) {
            this._corners[i] = new _Point_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
        }
        for (var i = 0; i < 2; i++) {
            this._axes[i] = new _Point_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
        }
        if (rect) {
            this.fromBoundingRect(rect, transform);
        }
    }
    OrientedBoundingRect.prototype.fromBoundingRect = function (rect, transform) {
        var corners = this._corners;
        var axes = this._axes;
        var x = rect.x;
        var y = rect.y;
        var x2 = x + rect.width;
        var y2 = y + rect.height;
        corners[0].set(x, y);
        corners[1].set(x2, y);
        corners[2].set(x2, y2);
        corners[3].set(x, y2);
        if (transform) {
            for (var i = 0; i < 4; i++) {
                corners[i].transform(transform);
            }
        }
        _Point_js__WEBPACK_IMPORTED_MODULE_0__["default"].sub(axes[0], corners[1], corners[0]);
        _Point_js__WEBPACK_IMPORTED_MODULE_0__["default"].sub(axes[1], corners[3], corners[0]);
        axes[0].normalize();
        axes[1].normalize();
        for (var i = 0; i < 2; i++) {
            this._origin[i] = axes[i].dot(corners[0]);
        }
    };
    OrientedBoundingRect.prototype.intersect = function (other, mtv) {
        var overlapped = true;
        var noMtv = !mtv;
        minTv.set(Infinity, Infinity);
        maxTv.set(0, 0);
        if (!this._intersectCheckOneSide(this, other, minTv, maxTv, noMtv, 1)) {
            overlapped = false;
            if (noMtv) {
                return overlapped;
            }
        }
        if (!this._intersectCheckOneSide(other, this, minTv, maxTv, noMtv, -1)) {
            overlapped = false;
            if (noMtv) {
                return overlapped;
            }
        }
        if (!noMtv) {
            _Point_js__WEBPACK_IMPORTED_MODULE_0__["default"].copy(mtv, overlapped ? minTv : maxTv);
        }
        return overlapped;
    };
    OrientedBoundingRect.prototype._intersectCheckOneSide = function (self, other, minTv, maxTv, noMtv, inverse) {
        var overlapped = true;
        for (var i = 0; i < 2; i++) {
            var axis = this._axes[i];
            this._getProjMinMaxOnAxis(i, self._corners, extent);
            this._getProjMinMaxOnAxis(i, other._corners, extent2);
            if (extent[1] < extent2[0] || extent[0] > extent2[1]) {
                overlapped = false;
                if (noMtv) {
                    return overlapped;
                }
                var dist0 = Math.abs(extent2[0] - extent[1]);
                var dist1 = Math.abs(extent[0] - extent2[1]);
                if (Math.min(dist0, dist1) > maxTv.len()) {
                    if (dist0 < dist1) {
                        _Point_js__WEBPACK_IMPORTED_MODULE_0__["default"].scale(maxTv, axis, -dist0 * inverse);
                    }
                    else {
                        _Point_js__WEBPACK_IMPORTED_MODULE_0__["default"].scale(maxTv, axis, dist1 * inverse);
                    }
                }
            }
            else if (minTv) {
                var dist0 = Math.abs(extent2[0] - extent[1]);
                var dist1 = Math.abs(extent[0] - extent2[1]);
                if (Math.min(dist0, dist1) < minTv.len()) {
                    if (dist0 < dist1) {
                        _Point_js__WEBPACK_IMPORTED_MODULE_0__["default"].scale(minTv, axis, dist0 * inverse);
                    }
                    else {
                        _Point_js__WEBPACK_IMPORTED_MODULE_0__["default"].scale(minTv, axis, -dist1 * inverse);
                    }
                }
            }
        }
        return overlapped;
    };
    OrientedBoundingRect.prototype._getProjMinMaxOnAxis = function (dim, corners, out) {
        var axis = this._axes[dim];
        var origin = this._origin;
        var proj = corners[0].dot(axis) + origin[dim];
        var min = proj;
        var max = proj;
        for (var i = 1; i < corners.length; i++) {
            var proj_1 = corners[i].dot(axis) + origin[dim];
            min = Math.min(proj_1, min);
            max = Math.max(proj_1, max);
        }
        out[0] = min;
        out[1] = max;
    };
    return OrientedBoundingRect;
}());
/* ESM default export */ __webpack_exports__["default"] = (OrientedBoundingRect);


}),
6535: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  normalizeArcAngles: function() { return normalizeArcAngles; }
});
/* ESM import */var _vector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63261);
/* ESM import */var _BoundingRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44964);
/* ESM import */var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8473);
/* ESM import */var _bbox_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71274);
/* ESM import */var _curve_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97566);





var CMD = {
    M: 1,
    L: 2,
    C: 3,
    Q: 4,
    A: 5,
    Z: 6,
    R: 7
};
var tmpOutX = [];
var tmpOutY = [];
var min = [];
var max = [];
var min2 = [];
var max2 = [];
var mathMin = Math.min;
var mathMax = Math.max;
var mathCos = Math.cos;
var mathSin = Math.sin;
var mathAbs = Math.abs;
var PI = Math.PI;
var PI2 = PI * 2;
var hasTypedArray = typeof Float32Array !== 'undefined';
var tmpAngles = [];
function modPI2(radian) {
    var n = Math.round(radian / PI * 1e8) / 1e8;
    return (n % 2) * PI;
}
function normalizeArcAngles(angles, anticlockwise) {
    var newStartAngle = modPI2(angles[0]);
    if (newStartAngle < 0) {
        newStartAngle += PI2;
    }
    var delta = newStartAngle - angles[0];
    var newEndAngle = angles[1];
    newEndAngle += delta;
    if (!anticlockwise && newEndAngle - newStartAngle >= PI2) {
        newEndAngle = newStartAngle + PI2;
    }
    else if (anticlockwise && newStartAngle - newEndAngle >= PI2) {
        newEndAngle = newStartAngle - PI2;
    }
    else if (!anticlockwise && newStartAngle > newEndAngle) {
        newEndAngle = newStartAngle + (PI2 - modPI2(newStartAngle - newEndAngle));
    }
    else if (anticlockwise && newStartAngle < newEndAngle) {
        newEndAngle = newStartAngle - (PI2 - modPI2(newEndAngle - newStartAngle));
    }
    angles[0] = newStartAngle;
    angles[1] = newEndAngle;
}
var PathProxy = (function () {
    function PathProxy(notSaveData) {
        this.dpr = 1;
        this._xi = 0;
        this._yi = 0;
        this._x0 = 0;
        this._y0 = 0;
        this._len = 0;
        if (notSaveData) {
            this._saveData = false;
        }
        if (this._saveData) {
            this.data = [];
        }
    }
    PathProxy.prototype.increaseVersion = function () {
        this._version++;
    };
    PathProxy.prototype.getVersion = function () {
        return this._version;
    };
    PathProxy.prototype.setScale = function (sx, sy, segmentIgnoreThreshold) {
        segmentIgnoreThreshold = segmentIgnoreThreshold || 0;
        if (segmentIgnoreThreshold > 0) {
            this._ux = mathAbs(segmentIgnoreThreshold / _config_js__WEBPACK_IMPORTED_MODULE_0__.devicePixelRatio / sx) || 0;
            this._uy = mathAbs(segmentIgnoreThreshold / _config_js__WEBPACK_IMPORTED_MODULE_0__.devicePixelRatio / sy) || 0;
        }
    };
    PathProxy.prototype.setDPR = function (dpr) {
        this.dpr = dpr;
    };
    PathProxy.prototype.setContext = function (ctx) {
        this._ctx = ctx;
    };
    PathProxy.prototype.getContext = function () {
        return this._ctx;
    };
    PathProxy.prototype.beginPath = function () {
        this._ctx && this._ctx.beginPath();
        this.reset();
        return this;
    };
    PathProxy.prototype.reset = function () {
        if (this._saveData) {
            this._len = 0;
        }
        if (this._pathSegLen) {
            this._pathSegLen = null;
            this._pathLen = 0;
        }
        this._version++;
    };
    PathProxy.prototype.moveTo = function (x, y) {
        this._drawPendingPt();
        this.addData(CMD.M, x, y);
        this._ctx && this._ctx.moveTo(x, y);
        this._x0 = x;
        this._y0 = y;
        this._xi = x;
        this._yi = y;
        return this;
    };
    PathProxy.prototype.lineTo = function (x, y) {
        var dx = mathAbs(x - this._xi);
        var dy = mathAbs(y - this._yi);
        var exceedUnit = dx > this._ux || dy > this._uy;
        this.addData(CMD.L, x, y);
        if (this._ctx && exceedUnit) {
            this._ctx.lineTo(x, y);
        }
        if (exceedUnit) {
            this._xi = x;
            this._yi = y;
            this._pendingPtDist = 0;
        }
        else {
            var d2 = dx * dx + dy * dy;
            if (d2 > this._pendingPtDist) {
                this._pendingPtX = x;
                this._pendingPtY = y;
                this._pendingPtDist = d2;
            }
        }
        return this;
    };
    PathProxy.prototype.bezierCurveTo = function (x1, y1, x2, y2, x3, y3) {
        this._drawPendingPt();
        this.addData(CMD.C, x1, y1, x2, y2, x3, y3);
        if (this._ctx) {
            this._ctx.bezierCurveTo(x1, y1, x2, y2, x3, y3);
        }
        this._xi = x3;
        this._yi = y3;
        return this;
    };
    PathProxy.prototype.quadraticCurveTo = function (x1, y1, x2, y2) {
        this._drawPendingPt();
        this.addData(CMD.Q, x1, y1, x2, y2);
        if (this._ctx) {
            this._ctx.quadraticCurveTo(x1, y1, x2, y2);
        }
        this._xi = x2;
        this._yi = y2;
        return this;
    };
    PathProxy.prototype.arc = function (cx, cy, r, startAngle, endAngle, anticlockwise) {
        this._drawPendingPt();
        tmpAngles[0] = startAngle;
        tmpAngles[1] = endAngle;
        normalizeArcAngles(tmpAngles, anticlockwise);
        startAngle = tmpAngles[0];
        endAngle = tmpAngles[1];
        var delta = endAngle - startAngle;
        this.addData(CMD.A, cx, cy, r, r, startAngle, delta, 0, anticlockwise ? 0 : 1);
        this._ctx && this._ctx.arc(cx, cy, r, startAngle, endAngle, anticlockwise);
        this._xi = mathCos(endAngle) * r + cx;
        this._yi = mathSin(endAngle) * r + cy;
        return this;
    };
    PathProxy.prototype.arcTo = function (x1, y1, x2, y2, radius) {
        this._drawPendingPt();
        if (this._ctx) {
            this._ctx.arcTo(x1, y1, x2, y2, radius);
        }
        return this;
    };
    PathProxy.prototype.rect = function (x, y, w, h) {
        this._drawPendingPt();
        this._ctx && this._ctx.rect(x, y, w, h);
        this.addData(CMD.R, x, y, w, h);
        return this;
    };
    PathProxy.prototype.closePath = function () {
        this._drawPendingPt();
        this.addData(CMD.Z);
        var ctx = this._ctx;
        var x0 = this._x0;
        var y0 = this._y0;
        if (ctx) {
            ctx.closePath();
        }
        this._xi = x0;
        this._yi = y0;
        return this;
    };
    PathProxy.prototype.fill = function (ctx) {
        ctx && ctx.fill();
        this.toStatic();
    };
    PathProxy.prototype.stroke = function (ctx) {
        ctx && ctx.stroke();
        this.toStatic();
    };
    PathProxy.prototype.len = function () {
        return this._len;
    };
    PathProxy.prototype.setData = function (data) {
        var len = data.length;
        if (!(this.data && this.data.length === len) && hasTypedArray) {
            this.data = new Float32Array(len);
        }
        for (var i = 0; i < len; i++) {
            this.data[i] = data[i];
        }
        this._len = len;
    };
    PathProxy.prototype.appendPath = function (path) {
        if (!(path instanceof Array)) {
            path = [path];
        }
        var len = path.length;
        var appendSize = 0;
        var offset = this._len;
        for (var i = 0; i < len; i++) {
            appendSize += path[i].len();
        }
        if (hasTypedArray && (this.data instanceof Float32Array)) {
            this.data = new Float32Array(offset + appendSize);
        }
        for (var i = 0; i < len; i++) {
            var appendPathData = path[i].data;
            for (var k = 0; k < appendPathData.length; k++) {
                this.data[offset++] = appendPathData[k];
            }
        }
        this._len = offset;
    };
    PathProxy.prototype.addData = function (cmd, a, b, c, d, e, f, g, h) {
        if (!this._saveData) {
            return;
        }
        var data = this.data;
        if (this._len + arguments.length > data.length) {
            this._expandData();
            data = this.data;
        }
        for (var i = 0; i < arguments.length; i++) {
            data[this._len++] = arguments[i];
        }
    };
    PathProxy.prototype._drawPendingPt = function () {
        if (this._pendingPtDist > 0) {
            this._ctx && this._ctx.lineTo(this._pendingPtX, this._pendingPtY);
            this._pendingPtDist = 0;
        }
    };
    PathProxy.prototype._expandData = function () {
        if (!(this.data instanceof Array)) {
            var newData = [];
            for (var i = 0; i < this._len; i++) {
                newData[i] = this.data[i];
            }
            this.data = newData;
        }
    };
    PathProxy.prototype.toStatic = function () {
        if (!this._saveData) {
            return;
        }
        this._drawPendingPt();
        var data = this.data;
        if (data instanceof Array) {
            data.length = this._len;
            if (hasTypedArray && this._len > 11) {
                this.data = new Float32Array(data);
            }
        }
    };
    PathProxy.prototype.getBoundingRect = function () {
        min[0] = min[1] = min2[0] = min2[1] = Number.MAX_VALUE;
        max[0] = max[1] = max2[0] = max2[1] = -Number.MAX_VALUE;
        var data = this.data;
        var xi = 0;
        var yi = 0;
        var x0 = 0;
        var y0 = 0;
        var i;
        for (i = 0; i < this._len;) {
            var cmd = data[i++];
            var isFirst = i === 1;
            if (isFirst) {
                xi = data[i];
                yi = data[i + 1];
                x0 = xi;
                y0 = yi;
            }
            switch (cmd) {
                case CMD.M:
                    xi = x0 = data[i++];
                    yi = y0 = data[i++];
                    min2[0] = x0;
                    min2[1] = y0;
                    max2[0] = x0;
                    max2[1] = y0;
                    break;
                case CMD.L:
                    (0,_bbox_js__WEBPACK_IMPORTED_MODULE_1__.fromLine)(xi, yi, data[i], data[i + 1], min2, max2);
                    xi = data[i++];
                    yi = data[i++];
                    break;
                case CMD.C:
                    (0,_bbox_js__WEBPACK_IMPORTED_MODULE_1__.fromCubic)(xi, yi, data[i++], data[i++], data[i++], data[i++], data[i], data[i + 1], min2, max2);
                    xi = data[i++];
                    yi = data[i++];
                    break;
                case CMD.Q:
                    (0,_bbox_js__WEBPACK_IMPORTED_MODULE_1__.fromQuadratic)(xi, yi, data[i++], data[i++], data[i], data[i + 1], min2, max2);
                    xi = data[i++];
                    yi = data[i++];
                    break;
                case CMD.A:
                    var cx = data[i++];
                    var cy = data[i++];
                    var rx = data[i++];
                    var ry = data[i++];
                    var startAngle = data[i++];
                    var endAngle = data[i++] + startAngle;
                    i += 1;
                    var anticlockwise = !data[i++];
                    if (isFirst) {
                        x0 = mathCos(startAngle) * rx + cx;
                        y0 = mathSin(startAngle) * ry + cy;
                    }
                    (0,_bbox_js__WEBPACK_IMPORTED_MODULE_1__.fromArc)(cx, cy, rx, ry, startAngle, endAngle, anticlockwise, min2, max2);
                    xi = mathCos(endAngle) * rx + cx;
                    yi = mathSin(endAngle) * ry + cy;
                    break;
                case CMD.R:
                    x0 = xi = data[i++];
                    y0 = yi = data[i++];
                    var width = data[i++];
                    var height = data[i++];
                    (0,_bbox_js__WEBPACK_IMPORTED_MODULE_1__.fromLine)(x0, y0, x0 + width, y0 + height, min2, max2);
                    break;
                case CMD.Z:
                    xi = x0;
                    yi = y0;
                    break;
            }
            _vector_js__WEBPACK_IMPORTED_MODULE_2__.min(min, min, min2);
            _vector_js__WEBPACK_IMPORTED_MODULE_2__.max(max, max, max2);
        }
        if (i === 0) {
            min[0] = min[1] = max[0] = max[1] = 0;
        }
        return new _BoundingRect_js__WEBPACK_IMPORTED_MODULE_3__["default"](min[0], min[1], max[0] - min[0], max[1] - min[1]);
    };
    PathProxy.prototype._calculateLength = function () {
        var data = this.data;
        var len = this._len;
        var ux = this._ux;
        var uy = this._uy;
        var xi = 0;
        var yi = 0;
        var x0 = 0;
        var y0 = 0;
        if (!this._pathSegLen) {
            this._pathSegLen = [];
        }
        var pathSegLen = this._pathSegLen;
        var pathTotalLen = 0;
        var segCount = 0;
        for (var i = 0; i < len;) {
            var cmd = data[i++];
            var isFirst = i === 1;
            if (isFirst) {
                xi = data[i];
                yi = data[i + 1];
                x0 = xi;
                y0 = yi;
            }
            var l = -1;
            switch (cmd) {
                case CMD.M:
                    xi = x0 = data[i++];
                    yi = y0 = data[i++];
                    break;
                case CMD.L: {
                    var x2 = data[i++];
                    var y2 = data[i++];
                    var dx = x2 - xi;
                    var dy = y2 - yi;
                    if (mathAbs(dx) > ux || mathAbs(dy) > uy || i === len - 1) {
                        l = Math.sqrt(dx * dx + dy * dy);
                        xi = x2;
                        yi = y2;
                    }
                    break;
                }
                case CMD.C: {
                    var x1 = data[i++];
                    var y1 = data[i++];
                    var x2 = data[i++];
                    var y2 = data[i++];
                    var x3 = data[i++];
                    var y3 = data[i++];
                    l = (0,_curve_js__WEBPACK_IMPORTED_MODULE_4__.cubicLength)(xi, yi, x1, y1, x2, y2, x3, y3, 10);
                    xi = x3;
                    yi = y3;
                    break;
                }
                case CMD.Q: {
                    var x1 = data[i++];
                    var y1 = data[i++];
                    var x2 = data[i++];
                    var y2 = data[i++];
                    l = (0,_curve_js__WEBPACK_IMPORTED_MODULE_4__.quadraticLength)(xi, yi, x1, y1, x2, y2, 10);
                    xi = x2;
                    yi = y2;
                    break;
                }
                case CMD.A:
                    var cx = data[i++];
                    var cy = data[i++];
                    var rx = data[i++];
                    var ry = data[i++];
                    var startAngle = data[i++];
                    var delta = data[i++];
                    var endAngle = delta + startAngle;
                    i += 1;
                    if (isFirst) {
                        x0 = mathCos(startAngle) * rx + cx;
                        y0 = mathSin(startAngle) * ry + cy;
                    }
                    l = mathMax(rx, ry) * mathMin(PI2, Math.abs(delta));
                    xi = mathCos(endAngle) * rx + cx;
                    yi = mathSin(endAngle) * ry + cy;
                    break;
                case CMD.R: {
                    x0 = xi = data[i++];
                    y0 = yi = data[i++];
                    var width = data[i++];
                    var height = data[i++];
                    l = width * 2 + height * 2;
                    break;
                }
                case CMD.Z: {
                    var dx = x0 - xi;
                    var dy = y0 - yi;
                    l = Math.sqrt(dx * dx + dy * dy);
                    xi = x0;
                    yi = y0;
                    break;
                }
            }
            if (l >= 0) {
                pathSegLen[segCount++] = l;
                pathTotalLen += l;
            }
        }
        this._pathLen = pathTotalLen;
        return pathTotalLen;
    };
    PathProxy.prototype.rebuildPath = function (ctx, percent) {
        var d = this.data;
        var ux = this._ux;
        var uy = this._uy;
        var len = this._len;
        var x0;
        var y0;
        var xi;
        var yi;
        var x;
        var y;
        var drawPart = percent < 1;
        var pathSegLen;
        var pathTotalLen;
        var accumLength = 0;
        var segCount = 0;
        var displayedLength;
        var pendingPtDist = 0;
        var pendingPtX;
        var pendingPtY;
        if (drawPart) {
            if (!this._pathSegLen) {
                this._calculateLength();
            }
            pathSegLen = this._pathSegLen;
            pathTotalLen = this._pathLen;
            displayedLength = percent * pathTotalLen;
            if (!displayedLength) {
                return;
            }
        }
        lo: for (var i = 0; i < len;) {
            var cmd = d[i++];
            var isFirst = i === 1;
            if (isFirst) {
                xi = d[i];
                yi = d[i + 1];
                x0 = xi;
                y0 = yi;
            }
            if (cmd !== CMD.L && pendingPtDist > 0) {
                ctx.lineTo(pendingPtX, pendingPtY);
                pendingPtDist = 0;
            }
            switch (cmd) {
                case CMD.M:
                    x0 = xi = d[i++];
                    y0 = yi = d[i++];
                    ctx.moveTo(xi, yi);
                    break;
                case CMD.L: {
                    x = d[i++];
                    y = d[i++];
                    var dx = mathAbs(x - xi);
                    var dy = mathAbs(y - yi);
                    if (dx > ux || dy > uy) {
                        if (drawPart) {
                            var l = pathSegLen[segCount++];
                            if (accumLength + l > displayedLength) {
                                var t = (displayedLength - accumLength) / l;
                                ctx.lineTo(xi * (1 - t) + x * t, yi * (1 - t) + y * t);
                                break lo;
                            }
                            accumLength += l;
                        }
                        ctx.lineTo(x, y);
                        xi = x;
                        yi = y;
                        pendingPtDist = 0;
                    }
                    else {
                        var d2 = dx * dx + dy * dy;
                        if (d2 > pendingPtDist) {
                            pendingPtX = x;
                            pendingPtY = y;
                            pendingPtDist = d2;
                        }
                    }
                    break;
                }
                case CMD.C: {
                    var x1 = d[i++];
                    var y1 = d[i++];
                    var x2 = d[i++];
                    var y2 = d[i++];
                    var x3 = d[i++];
                    var y3 = d[i++];
                    if (drawPart) {
                        var l = pathSegLen[segCount++];
                        if (accumLength + l > displayedLength) {
                            var t = (displayedLength - accumLength) / l;
                            (0,_curve_js__WEBPACK_IMPORTED_MODULE_4__.cubicSubdivide)(xi, x1, x2, x3, t, tmpOutX);
                            (0,_curve_js__WEBPACK_IMPORTED_MODULE_4__.cubicSubdivide)(yi, y1, y2, y3, t, tmpOutY);
                            ctx.bezierCurveTo(tmpOutX[1], tmpOutY[1], tmpOutX[2], tmpOutY[2], tmpOutX[3], tmpOutY[3]);
                            break lo;
                        }
                        accumLength += l;
                    }
                    ctx.bezierCurveTo(x1, y1, x2, y2, x3, y3);
                    xi = x3;
                    yi = y3;
                    break;
                }
                case CMD.Q: {
                    var x1 = d[i++];
                    var y1 = d[i++];
                    var x2 = d[i++];
                    var y2 = d[i++];
                    if (drawPart) {
                        var l = pathSegLen[segCount++];
                        if (accumLength + l > displayedLength) {
                            var t = (displayedLength - accumLength) / l;
                            (0,_curve_js__WEBPACK_IMPORTED_MODULE_4__.quadraticSubdivide)(xi, x1, x2, t, tmpOutX);
                            (0,_curve_js__WEBPACK_IMPORTED_MODULE_4__.quadraticSubdivide)(yi, y1, y2, t, tmpOutY);
                            ctx.quadraticCurveTo(tmpOutX[1], tmpOutY[1], tmpOutX[2], tmpOutY[2]);
                            break lo;
                        }
                        accumLength += l;
                    }
                    ctx.quadraticCurveTo(x1, y1, x2, y2);
                    xi = x2;
                    yi = y2;
                    break;
                }
                case CMD.A:
                    var cx = d[i++];
                    var cy = d[i++];
                    var rx = d[i++];
                    var ry = d[i++];
                    var startAngle = d[i++];
                    var delta = d[i++];
                    var psi = d[i++];
                    var anticlockwise = !d[i++];
                    var r = (rx > ry) ? rx : ry;
                    var isEllipse = mathAbs(rx - ry) > 1e-3;
                    var endAngle = startAngle + delta;
                    var breakBuild = false;
                    if (drawPart) {
                        var l = pathSegLen[segCount++];
                        if (accumLength + l > displayedLength) {
                            endAngle = startAngle + delta * (displayedLength - accumLength) / l;
                            breakBuild = true;
                        }
                        accumLength += l;
                    }
                    if (isEllipse && ctx.ellipse) {
                        ctx.ellipse(cx, cy, rx, ry, psi, startAngle, endAngle, anticlockwise);
                    }
                    else {
                        ctx.arc(cx, cy, r, startAngle, endAngle, anticlockwise);
                    }
                    if (breakBuild) {
                        break lo;
                    }
                    if (isFirst) {
                        x0 = mathCos(startAngle) * rx + cx;
                        y0 = mathSin(startAngle) * ry + cy;
                    }
                    xi = mathCos(endAngle) * rx + cx;
                    yi = mathSin(endAngle) * ry + cy;
                    break;
                case CMD.R:
                    x0 = xi = d[i];
                    y0 = yi = d[i + 1];
                    x = d[i++];
                    y = d[i++];
                    var width = d[i++];
                    var height = d[i++];
                    if (drawPart) {
                        var l = pathSegLen[segCount++];
                        if (accumLength + l > displayedLength) {
                            var d_1 = displayedLength - accumLength;
                            ctx.moveTo(x, y);
                            ctx.lineTo(x + mathMin(d_1, width), y);
                            d_1 -= width;
                            if (d_1 > 0) {
                                ctx.lineTo(x + width, y + mathMin(d_1, height));
                            }
                            d_1 -= height;
                            if (d_1 > 0) {
                                ctx.lineTo(x + mathMax(width - d_1, 0), y + height);
                            }
                            d_1 -= width;
                            if (d_1 > 0) {
                                ctx.lineTo(x, y + mathMax(height - d_1, 0));
                            }
                            break lo;
                        }
                        accumLength += l;
                    }
                    ctx.rect(x, y, width, height);
                    break;
                case CMD.Z:
                    if (drawPart) {
                        var l = pathSegLen[segCount++];
                        if (accumLength + l > displayedLength) {
                            var t = (displayedLength - accumLength) / l;
                            ctx.lineTo(xi * (1 - t) + x0 * t, yi * (1 - t) + y0 * t);
                            break lo;
                        }
                        accumLength += l;
                    }
                    ctx.closePath();
                    xi = x0;
                    yi = y0;
            }
        }
    };
    PathProxy.prototype.clone = function () {
        var newProxy = new PathProxy();
        var data = this.data;
        newProxy.data = data.slice ? data.slice()
            : Array.prototype.slice.call(data);
        newProxy._len = this._len;
        return newProxy;
    };
    PathProxy.CMD = CMD;
    PathProxy.initDefaultProps = (function () {
        var proto = PathProxy.prototype;
        proto._saveData = true;
        proto._ux = 0;
        proto._uy = 0;
        proto._pendingPtDist = 0;
        proto._version = 0;
    })();
    return PathProxy;
}());
/* ESM default export */ __webpack_exports__["default"] = (PathProxy);


}),
12430: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
var Point = (function () {
    function Point(x, y) {
        this.x = x || 0;
        this.y = y || 0;
    }
    Point.prototype.copy = function (other) {
        this.x = other.x;
        this.y = other.y;
        return this;
    };
    Point.prototype.clone = function () {
        return new Point(this.x, this.y);
    };
    Point.prototype.set = function (x, y) {
        this.x = x;
        this.y = y;
        return this;
    };
    Point.prototype.equal = function (other) {
        return other.x === this.x && other.y === this.y;
    };
    Point.prototype.add = function (other) {
        this.x += other.x;
        this.y += other.y;
        return this;
    };
    Point.prototype.scale = function (scalar) {
        this.x *= scalar;
        this.y *= scalar;
    };
    Point.prototype.scaleAndAdd = function (other, scalar) {
        this.x += other.x * scalar;
        this.y += other.y * scalar;
    };
    Point.prototype.sub = function (other) {
        this.x -= other.x;
        this.y -= other.y;
        return this;
    };
    Point.prototype.dot = function (other) {
        return this.x * other.x + this.y * other.y;
    };
    Point.prototype.len = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    Point.prototype.lenSquare = function () {
        return this.x * this.x + this.y * this.y;
    };
    Point.prototype.normalize = function () {
        var len = this.len();
        this.x /= len;
        this.y /= len;
        return this;
    };
    Point.prototype.distance = function (other) {
        var dx = this.x - other.x;
        var dy = this.y - other.y;
        return Math.sqrt(dx * dx + dy * dy);
    };
    Point.prototype.distanceSquare = function (other) {
        var dx = this.x - other.x;
        var dy = this.y - other.y;
        return dx * dx + dy * dy;
    };
    Point.prototype.negate = function () {
        this.x = -this.x;
        this.y = -this.y;
        return this;
    };
    Point.prototype.transform = function (m) {
        if (!m) {
            return;
        }
        var x = this.x;
        var y = this.y;
        this.x = m[0] * x + m[2] * y + m[4];
        this.y = m[1] * x + m[3] * y + m[5];
        return this;
    };
    Point.prototype.toArray = function (out) {
        out[0] = this.x;
        out[1] = this.y;
        return out;
    };
    Point.prototype.fromArray = function (input) {
        this.x = input[0];
        this.y = input[1];
    };
    Point.set = function (p, x, y) {
        p.x = x;
        p.y = y;
    };
    Point.copy = function (p, p2) {
        p.x = p2.x;
        p.y = p2.y;
    };
    Point.len = function (p) {
        return Math.sqrt(p.x * p.x + p.y * p.y);
    };
    Point.lenSquare = function (p) {
        return p.x * p.x + p.y * p.y;
    };
    Point.dot = function (p0, p1) {
        return p0.x * p1.x + p0.y * p1.y;
    };
    Point.add = function (out, p0, p1) {
        out.x = p0.x + p1.x;
        out.y = p0.y + p1.y;
    };
    Point.sub = function (out, p0, p1) {
        out.x = p0.x - p1.x;
        out.y = p0.y - p1.y;
    };
    Point.scale = function (out, p0, scalar) {
        out.x = p0.x * scalar;
        out.y = p0.y * scalar;
    };
    Point.scaleAndAdd = function (out, p0, p1, scalar) {
        out.x = p0.x + p1.x * scalar;
        out.y = p0.y + p1.y * scalar;
    };
    Point.lerp = function (out, p0, p1, t) {
        var onet = 1 - t;
        out.x = onet * p0.x + t * p1.x;
        out.y = onet * p0.y + t * p1.y;
    };
    return Point;
}());
/* ESM default export */ __webpack_exports__["default"] = (Point);


}),
9757: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  TRANSFORMABLE_PROPS: function() { return TRANSFORMABLE_PROPS; },
  copyTransform: function() { return copyTransform; }
});
/* ESM import */var _matrix_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85215);
/* ESM import */var _vector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63261);


var mIdentity = _matrix_js__WEBPACK_IMPORTED_MODULE_0__.identity;
var EPSILON = 5e-5;
function isNotAroundZero(val) {
    return val > EPSILON || val < -EPSILON;
}
var scaleTmp = [];
var tmpTransform = [];
var originTransform = _matrix_js__WEBPACK_IMPORTED_MODULE_0__.create();
var abs = Math.abs;
var Transformable = (function () {
    function Transformable() {
    }
    Transformable.prototype.getLocalTransform = function (m) {
        return Transformable.getLocalTransform(this, m);
    };
    Transformable.prototype.setPosition = function (arr) {
        this.x = arr[0];
        this.y = arr[1];
    };
    Transformable.prototype.setScale = function (arr) {
        this.scaleX = arr[0];
        this.scaleY = arr[1];
    };
    Transformable.prototype.setSkew = function (arr) {
        this.skewX = arr[0];
        this.skewY = arr[1];
    };
    Transformable.prototype.setOrigin = function (arr) {
        this.originX = arr[0];
        this.originY = arr[1];
    };
    Transformable.prototype.needLocalTransform = function () {
        return isNotAroundZero(this.rotation)
            || isNotAroundZero(this.x)
            || isNotAroundZero(this.y)
            || isNotAroundZero(this.scaleX - 1)
            || isNotAroundZero(this.scaleY - 1)
            || isNotAroundZero(this.skewX)
            || isNotAroundZero(this.skewY);
    };
    Transformable.prototype.updateTransform = function () {
        var parentTransform = this.parent && this.parent.transform;
        var needLocalTransform = this.needLocalTransform();
        var m = this.transform;
        if (!(needLocalTransform || parentTransform)) {
            if (m) {
                mIdentity(m);
                this.invTransform = null;
            }
            return;
        }
        m = m || _matrix_js__WEBPACK_IMPORTED_MODULE_0__.create();
        if (needLocalTransform) {
            this.getLocalTransform(m);
        }
        else {
            mIdentity(m);
        }
        if (parentTransform) {
            if (needLocalTransform) {
                _matrix_js__WEBPACK_IMPORTED_MODULE_0__.mul(m, parentTransform, m);
            }
            else {
                _matrix_js__WEBPACK_IMPORTED_MODULE_0__.copy(m, parentTransform);
            }
        }
        this.transform = m;
        this._resolveGlobalScaleRatio(m);
    };
    Transformable.prototype._resolveGlobalScaleRatio = function (m) {
        var globalScaleRatio = this.globalScaleRatio;
        if (globalScaleRatio != null && globalScaleRatio !== 1) {
            this.getGlobalScale(scaleTmp);
            var relX = scaleTmp[0] < 0 ? -1 : 1;
            var relY = scaleTmp[1] < 0 ? -1 : 1;
            var sx = ((scaleTmp[0] - relX) * globalScaleRatio + relX) / scaleTmp[0] || 0;
            var sy = ((scaleTmp[1] - relY) * globalScaleRatio + relY) / scaleTmp[1] || 0;
            m[0] *= sx;
            m[1] *= sx;
            m[2] *= sy;
            m[3] *= sy;
        }
        this.invTransform = this.invTransform || _matrix_js__WEBPACK_IMPORTED_MODULE_0__.create();
        _matrix_js__WEBPACK_IMPORTED_MODULE_0__.invert(this.invTransform, m);
    };
    Transformable.prototype.getComputedTransform = function () {
        var transformNode = this;
        var ancestors = [];
        while (transformNode) {
            ancestors.push(transformNode);
            transformNode = transformNode.parent;
        }
        while (transformNode = ancestors.pop()) {
            transformNode.updateTransform();
        }
        return this.transform;
    };
    Transformable.prototype.setLocalTransform = function (m) {
        if (!m) {
            return;
        }
        var sx = m[0] * m[0] + m[1] * m[1];
        var sy = m[2] * m[2] + m[3] * m[3];
        var rotation = Math.atan2(m[1], m[0]);
        var shearX = Math.PI / 2 + rotation - Math.atan2(m[3], m[2]);
        sy = Math.sqrt(sy) * Math.cos(shearX);
        sx = Math.sqrt(sx);
        this.skewX = shearX;
        this.skewY = 0;
        this.rotation = -rotation;
        this.x = +m[4];
        this.y = +m[5];
        this.scaleX = sx;
        this.scaleY = sy;
        this.originX = 0;
        this.originY = 0;
    };
    Transformable.prototype.decomposeTransform = function () {
        if (!this.transform) {
            return;
        }
        var parent = this.parent;
        var m = this.transform;
        if (parent && parent.transform) {
            parent.invTransform = parent.invTransform || _matrix_js__WEBPACK_IMPORTED_MODULE_0__.create();
            _matrix_js__WEBPACK_IMPORTED_MODULE_0__.mul(tmpTransform, parent.invTransform, m);
            m = tmpTransform;
        }
        var ox = this.originX;
        var oy = this.originY;
        if (ox || oy) {
            originTransform[4] = ox;
            originTransform[5] = oy;
            _matrix_js__WEBPACK_IMPORTED_MODULE_0__.mul(tmpTransform, m, originTransform);
            tmpTransform[4] -= ox;
            tmpTransform[5] -= oy;
            m = tmpTransform;
        }
        this.setLocalTransform(m);
    };
    Transformable.prototype.getGlobalScale = function (out) {
        var m = this.transform;
        out = out || [];
        if (!m) {
            out[0] = 1;
            out[1] = 1;
            return out;
        }
        out[0] = Math.sqrt(m[0] * m[0] + m[1] * m[1]);
        out[1] = Math.sqrt(m[2] * m[2] + m[3] * m[3]);
        if (m[0] < 0) {
            out[0] = -out[0];
        }
        if (m[3] < 0) {
            out[1] = -out[1];
        }
        return out;
    };
    Transformable.prototype.transformCoordToLocal = function (x, y) {
        var v2 = [x, y];
        var invTransform = this.invTransform;
        if (invTransform) {
            _vector_js__WEBPACK_IMPORTED_MODULE_1__.applyTransform(v2, v2, invTransform);
        }
        return v2;
    };
    Transformable.prototype.transformCoordToGlobal = function (x, y) {
        var v2 = [x, y];
        var transform = this.transform;
        if (transform) {
            _vector_js__WEBPACK_IMPORTED_MODULE_1__.applyTransform(v2, v2, transform);
        }
        return v2;
    };
    Transformable.prototype.getLineScale = function () {
        var m = this.transform;
        return m && abs(m[0] - 1) > 1e-10 && abs(m[3] - 1) > 1e-10
            ? Math.sqrt(abs(m[0] * m[3] - m[2] * m[1]))
            : 1;
    };
    Transformable.prototype.copyTransform = function (source) {
        copyTransform(this, source);
    };
    Transformable.getLocalTransform = function (target, m) {
        m = m || [];
        var ox = target.originX || 0;
        var oy = target.originY || 0;
        var sx = target.scaleX;
        var sy = target.scaleY;
        var ax = target.anchorX;
        var ay = target.anchorY;
        var rotation = target.rotation || 0;
        var x = target.x;
        var y = target.y;
        var skewX = target.skewX ? Math.tan(target.skewX) : 0;
        var skewY = target.skewY ? Math.tan(-target.skewY) : 0;
        if (ox || oy || ax || ay) {
            var dx = ox + ax;
            var dy = oy + ay;
            m[4] = -dx * sx - skewX * dy * sy;
            m[5] = -dy * sy - skewY * dx * sx;
        }
        else {
            m[4] = m[5] = 0;
        }
        m[0] = sx;
        m[3] = sy;
        m[1] = skewY * sx;
        m[2] = skewX * sy;
        rotation && _matrix_js__WEBPACK_IMPORTED_MODULE_0__.rotate(m, m, rotation);
        m[4] += ox + x;
        m[5] += oy + y;
        return m;
    };
    Transformable.initDefaultProps = (function () {
        var proto = Transformable.prototype;
        proto.scaleX =
            proto.scaleY =
                proto.globalScaleRatio = 1;
        proto.x =
            proto.y =
                proto.originX =
                    proto.originY =
                        proto.skewX =
                            proto.skewY =
                                proto.rotation =
                                    proto.anchorX =
                                        proto.anchorY = 0;
    })();
    return Transformable;
}());
;
var TRANSFORMABLE_PROPS = [
    'x', 'y', 'originX', 'originY', 'anchorX', 'anchorY', 'rotation', 'scaleX', 'scaleY', 'skewX', 'skewY'
];
function copyTransform(target, source) {
    for (var i = 0; i < TRANSFORMABLE_PROPS.length; i++) {
        var propName = TRANSFORMABLE_PROPS[i];
        target[propName] = source[propName];
    }
}
/* ESM default export */ __webpack_exports__["default"] = (Transformable);


}),
2054: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
var wmUniqueIndex = Math.round(Math.random() * 9);
var supportDefineProperty = typeof Object.defineProperty === 'function';
var WeakMap = (function () {
    function WeakMap() {
        this._id = '__ec_inner_' + wmUniqueIndex++;
    }
    WeakMap.prototype.get = function (key) {
        return this._guard(key)[this._id];
    };
    WeakMap.prototype.set = function (key, value) {
        var target = this._guard(key);
        if (supportDefineProperty) {
            Object.defineProperty(target, this._id, {
                value: value,
                enumerable: false,
                configurable: true
            });
        }
        else {
            target[this._id] = value;
        }
        return this;
    };
    WeakMap.prototype["delete"] = function (key) {
        if (this.has(key)) {
            delete this._guard(key)[this._id];
            return true;
        }
        return false;
    };
    WeakMap.prototype.has = function (key) {
        return !!this._guard(key)[this._id];
    };
    WeakMap.prototype._guard = function (key) {
        if (key !== Object(key)) {
            throw TypeError('Value of WeakMap is not a non-null object.');
        }
        return key;
    };
    return WeakMap;
}());
/* ESM default export */ __webpack_exports__["default"] = (WeakMap);


}),
71274: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  fromArc: function() { return fromArc; },
  fromCubic: function() { return fromCubic; },
  fromLine: function() { return fromLine; },
  fromPoints: function() { return fromPoints; },
  fromQuadratic: function() { return fromQuadratic; }
});
/* ESM import */var _vector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63261);
/* ESM import */var _curve_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97566);


var mathMin = Math.min;
var mathMax = Math.max;
var mathSin = Math.sin;
var mathCos = Math.cos;
var PI2 = Math.PI * 2;
var start = _vector_js__WEBPACK_IMPORTED_MODULE_0__.create();
var end = _vector_js__WEBPACK_IMPORTED_MODULE_0__.create();
var extremity = _vector_js__WEBPACK_IMPORTED_MODULE_0__.create();
function fromPoints(points, min, max) {
    if (points.length === 0) {
        return;
    }
    var p = points[0];
    var left = p[0];
    var right = p[0];
    var top = p[1];
    var bottom = p[1];
    for (var i = 1; i < points.length; i++) {
        p = points[i];
        left = mathMin(left, p[0]);
        right = mathMax(right, p[0]);
        top = mathMin(top, p[1]);
        bottom = mathMax(bottom, p[1]);
    }
    min[0] = left;
    min[1] = top;
    max[0] = right;
    max[1] = bottom;
}
function fromLine(x0, y0, x1, y1, min, max) {
    min[0] = mathMin(x0, x1);
    min[1] = mathMin(y0, y1);
    max[0] = mathMax(x0, x1);
    max[1] = mathMax(y0, y1);
}
var xDim = [];
var yDim = [];
function fromCubic(x0, y0, x1, y1, x2, y2, x3, y3, min, max) {
    var cubicExtrema = _curve_js__WEBPACK_IMPORTED_MODULE_1__.cubicExtrema;
    var cubicAt = _curve_js__WEBPACK_IMPORTED_MODULE_1__.cubicAt;
    var n = cubicExtrema(x0, x1, x2, x3, xDim);
    min[0] = Infinity;
    min[1] = Infinity;
    max[0] = -Infinity;
    max[1] = -Infinity;
    for (var i = 0; i < n; i++) {
        var x = cubicAt(x0, x1, x2, x3, xDim[i]);
        min[0] = mathMin(x, min[0]);
        max[0] = mathMax(x, max[0]);
    }
    n = cubicExtrema(y0, y1, y2, y3, yDim);
    for (var i = 0; i < n; i++) {
        var y = cubicAt(y0, y1, y2, y3, yDim[i]);
        min[1] = mathMin(y, min[1]);
        max[1] = mathMax(y, max[1]);
    }
    min[0] = mathMin(x0, min[0]);
    max[0] = mathMax(x0, max[0]);
    min[0] = mathMin(x3, min[0]);
    max[0] = mathMax(x3, max[0]);
    min[1] = mathMin(y0, min[1]);
    max[1] = mathMax(y0, max[1]);
    min[1] = mathMin(y3, min[1]);
    max[1] = mathMax(y3, max[1]);
}
function fromQuadratic(x0, y0, x1, y1, x2, y2, min, max) {
    var quadraticExtremum = _curve_js__WEBPACK_IMPORTED_MODULE_1__.quadraticExtremum;
    var quadraticAt = _curve_js__WEBPACK_IMPORTED_MODULE_1__.quadraticAt;
    var tx = mathMax(mathMin(quadraticExtremum(x0, x1, x2), 1), 0);
    var ty = mathMax(mathMin(quadraticExtremum(y0, y1, y2), 1), 0);
    var x = quadraticAt(x0, x1, x2, tx);
    var y = quadraticAt(y0, y1, y2, ty);
    min[0] = mathMin(x0, x2, x);
    min[1] = mathMin(y0, y2, y);
    max[0] = mathMax(x0, x2, x);
    max[1] = mathMax(y0, y2, y);
}
function fromArc(x, y, rx, ry, startAngle, endAngle, anticlockwise, min, max) {
    var vec2Min = _vector_js__WEBPACK_IMPORTED_MODULE_0__.min;
    var vec2Max = _vector_js__WEBPACK_IMPORTED_MODULE_0__.max;
    var diff = Math.abs(startAngle - endAngle);
    if (diff % PI2 < 1e-4 && diff > 1e-4) {
        min[0] = x - rx;
        min[1] = y - ry;
        max[0] = x + rx;
        max[1] = y + ry;
        return;
    }
    start[0] = mathCos(startAngle) * rx + x;
    start[1] = mathSin(startAngle) * ry + y;
    end[0] = mathCos(endAngle) * rx + x;
    end[1] = mathSin(endAngle) * ry + y;
    vec2Min(min, start, end);
    vec2Max(max, start, end);
    startAngle = startAngle % (PI2);
    if (startAngle < 0) {
        startAngle = startAngle + PI2;
    }
    endAngle = endAngle % (PI2);
    if (endAngle < 0) {
        endAngle = endAngle + PI2;
    }
    if (startAngle > endAngle && !anticlockwise) {
        endAngle += PI2;
    }
    else if (startAngle < endAngle && anticlockwise) {
        startAngle += PI2;
    }
    if (anticlockwise) {
        var tmp = endAngle;
        endAngle = startAngle;
        startAngle = tmp;
    }
    for (var angle = 0; angle < endAngle; angle += Math.PI / 2) {
        if (angle > startAngle) {
            extremity[0] = mathCos(angle) * rx + x;
            extremity[1] = mathSin(angle) * ry + y;
            vec2Min(min, extremity, min);
            vec2Max(max, extremity, max);
        }
    }
}


}),
97566: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  cubicAt: function() { return cubicAt; },
  cubicDerivativeAt: function() { return cubicDerivativeAt; },
  cubicExtrema: function() { return cubicExtrema; },
  cubicLength: function() { return cubicLength; },
  cubicProjectPoint: function() { return cubicProjectPoint; },
  cubicRootAt: function() { return cubicRootAt; },
  cubicSubdivide: function() { return cubicSubdivide; },
  quadraticAt: function() { return quadraticAt; },
  quadraticDerivativeAt: function() { return quadraticDerivativeAt; },
  quadraticExtremum: function() { return quadraticExtremum; },
  quadraticLength: function() { return quadraticLength; },
  quadraticProjectPoint: function() { return quadraticProjectPoint; },
  quadraticRootAt: function() { return quadraticRootAt; },
  quadraticSubdivide: function() { return quadraticSubdivide; }
});
/* ESM import */var _vector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63261);

var mathPow = Math.pow;
var mathSqrt = Math.sqrt;
var EPSILON = 1e-8;
var EPSILON_NUMERIC = 1e-4;
var THREE_SQRT = mathSqrt(3);
var ONE_THIRD = 1 / 3;
var _v0 = (0,_vector_js__WEBPACK_IMPORTED_MODULE_0__.create)();
var _v1 = (0,_vector_js__WEBPACK_IMPORTED_MODULE_0__.create)();
var _v2 = (0,_vector_js__WEBPACK_IMPORTED_MODULE_0__.create)();
function isAroundZero(val) {
    return val > -EPSILON && val < EPSILON;
}
function isNotAroundZero(val) {
    return val > EPSILON || val < -EPSILON;
}
function cubicAt(p0, p1, p2, p3, t) {
    var onet = 1 - t;
    return onet * onet * (onet * p0 + 3 * t * p1)
        + t * t * (t * p3 + 3 * onet * p2);
}
function cubicDerivativeAt(p0, p1, p2, p3, t) {
    var onet = 1 - t;
    return 3 * (((p1 - p0) * onet + 2 * (p2 - p1) * t) * onet
        + (p3 - p2) * t * t);
}
function cubicRootAt(p0, p1, p2, p3, val, roots) {
    var a = p3 + 3 * (p1 - p2) - p0;
    var b = 3 * (p2 - p1 * 2 + p0);
    var c = 3 * (p1 - p0);
    var d = p0 - val;
    var A = b * b - 3 * a * c;
    var B = b * c - 9 * a * d;
    var C = c * c - 3 * b * d;
    var n = 0;
    if (isAroundZero(A) && isAroundZero(B)) {
        if (isAroundZero(b)) {
            roots[0] = 0;
        }
        else {
            var t1 = -c / b;
            if (t1 >= 0 && t1 <= 1) {
                roots[n++] = t1;
            }
        }
    }
    else {
        var disc = B * B - 4 * A * C;
        if (isAroundZero(disc)) {
            var K = B / A;
            var t1 = -b / a + K;
            var t2 = -K / 2;
            if (t1 >= 0 && t1 <= 1) {
                roots[n++] = t1;
            }
            if (t2 >= 0 && t2 <= 1) {
                roots[n++] = t2;
            }
        }
        else if (disc > 0) {
            var discSqrt = mathSqrt(disc);
            var Y1 = A * b + 1.5 * a * (-B + discSqrt);
            var Y2 = A * b + 1.5 * a * (-B - discSqrt);
            if (Y1 < 0) {
                Y1 = -mathPow(-Y1, ONE_THIRD);
            }
            else {
                Y1 = mathPow(Y1, ONE_THIRD);
            }
            if (Y2 < 0) {
                Y2 = -mathPow(-Y2, ONE_THIRD);
            }
            else {
                Y2 = mathPow(Y2, ONE_THIRD);
            }
            var t1 = (-b - (Y1 + Y2)) / (3 * a);
            if (t1 >= 0 && t1 <= 1) {
                roots[n++] = t1;
            }
        }
        else {
            var T = (2 * A * b - 3 * a * B) / (2 * mathSqrt(A * A * A));
            var theta = Math.acos(T) / 3;
            var ASqrt = mathSqrt(A);
            var tmp = Math.cos(theta);
            var t1 = (-b - 2 * ASqrt * tmp) / (3 * a);
            var t2 = (-b + ASqrt * (tmp + THREE_SQRT * Math.sin(theta))) / (3 * a);
            var t3 = (-b + ASqrt * (tmp - THREE_SQRT * Math.sin(theta))) / (3 * a);
            if (t1 >= 0 && t1 <= 1) {
                roots[n++] = t1;
            }
            if (t2 >= 0 && t2 <= 1) {
                roots[n++] = t2;
            }
            if (t3 >= 0 && t3 <= 1) {
                roots[n++] = t3;
            }
        }
    }
    return n;
}
function cubicExtrema(p0, p1, p2, p3, extrema) {
    var b = 6 * p2 - 12 * p1 + 6 * p0;
    var a = 9 * p1 + 3 * p3 - 3 * p0 - 9 * p2;
    var c = 3 * p1 - 3 * p0;
    var n = 0;
    if (isAroundZero(a)) {
        if (isNotAroundZero(b)) {
            var t1 = -c / b;
            if (t1 >= 0 && t1 <= 1) {
                extrema[n++] = t1;
            }
        }
    }
    else {
        var disc = b * b - 4 * a * c;
        if (isAroundZero(disc)) {
            extrema[0] = -b / (2 * a);
        }
        else if (disc > 0) {
            var discSqrt = mathSqrt(disc);
            var t1 = (-b + discSqrt) / (2 * a);
            var t2 = (-b - discSqrt) / (2 * a);
            if (t1 >= 0 && t1 <= 1) {
                extrema[n++] = t1;
            }
            if (t2 >= 0 && t2 <= 1) {
                extrema[n++] = t2;
            }
        }
    }
    return n;
}
function cubicSubdivide(p0, p1, p2, p3, t, out) {
    var p01 = (p1 - p0) * t + p0;
    var p12 = (p2 - p1) * t + p1;
    var p23 = (p3 - p2) * t + p2;
    var p012 = (p12 - p01) * t + p01;
    var p123 = (p23 - p12) * t + p12;
    var p0123 = (p123 - p012) * t + p012;
    out[0] = p0;
    out[1] = p01;
    out[2] = p012;
    out[3] = p0123;
    out[4] = p0123;
    out[5] = p123;
    out[6] = p23;
    out[7] = p3;
}
function cubicProjectPoint(x0, y0, x1, y1, x2, y2, x3, y3, x, y, out) {
    var t;
    var interval = 0.005;
    var d = Infinity;
    var prev;
    var next;
    var d1;
    var d2;
    _v0[0] = x;
    _v0[1] = y;
    for (var _t = 0; _t < 1; _t += 0.05) {
        _v1[0] = cubicAt(x0, x1, x2, x3, _t);
        _v1[1] = cubicAt(y0, y1, y2, y3, _t);
        d1 = (0,_vector_js__WEBPACK_IMPORTED_MODULE_0__.distSquare)(_v0, _v1);
        if (d1 < d) {
            t = _t;
            d = d1;
        }
    }
    d = Infinity;
    for (var i = 0; i < 32; i++) {
        if (interval < EPSILON_NUMERIC) {
            break;
        }
        prev = t - interval;
        next = t + interval;
        _v1[0] = cubicAt(x0, x1, x2, x3, prev);
        _v1[1] = cubicAt(y0, y1, y2, y3, prev);
        d1 = (0,_vector_js__WEBPACK_IMPORTED_MODULE_0__.distSquare)(_v1, _v0);
        if (prev >= 0 && d1 < d) {
            t = prev;
            d = d1;
        }
        else {
            _v2[0] = cubicAt(x0, x1, x2, x3, next);
            _v2[1] = cubicAt(y0, y1, y2, y3, next);
            d2 = (0,_vector_js__WEBPACK_IMPORTED_MODULE_0__.distSquare)(_v2, _v0);
            if (next <= 1 && d2 < d) {
                t = next;
                d = d2;
            }
            else {
                interval *= 0.5;
            }
        }
    }
    if (out) {
        out[0] = cubicAt(x0, x1, x2, x3, t);
        out[1] = cubicAt(y0, y1, y2, y3, t);
    }
    return mathSqrt(d);
}
function cubicLength(x0, y0, x1, y1, x2, y2, x3, y3, iteration) {
    var px = x0;
    var py = y0;
    var d = 0;
    var step = 1 / iteration;
    for (var i = 1; i <= iteration; i++) {
        var t = i * step;
        var x = cubicAt(x0, x1, x2, x3, t);
        var y = cubicAt(y0, y1, y2, y3, t);
        var dx = x - px;
        var dy = y - py;
        d += Math.sqrt(dx * dx + dy * dy);
        px = x;
        py = y;
    }
    return d;
}
function quadraticAt(p0, p1, p2, t) {
    var onet = 1 - t;
    return onet * (onet * p0 + 2 * t * p1) + t * t * p2;
}
function quadraticDerivativeAt(p0, p1, p2, t) {
    return 2 * ((1 - t) * (p1 - p0) + t * (p2 - p1));
}
function quadraticRootAt(p0, p1, p2, val, roots) {
    var a = p0 - 2 * p1 + p2;
    var b = 2 * (p1 - p0);
    var c = p0 - val;
    var n = 0;
    if (isAroundZero(a)) {
        if (isNotAroundZero(b)) {
            var t1 = -c / b;
            if (t1 >= 0 && t1 <= 1) {
                roots[n++] = t1;
            }
        }
    }
    else {
        var disc = b * b - 4 * a * c;
        if (isAroundZero(disc)) {
            var t1 = -b / (2 * a);
            if (t1 >= 0 && t1 <= 1) {
                roots[n++] = t1;
            }
        }
        else if (disc > 0) {
            var discSqrt = mathSqrt(disc);
            var t1 = (-b + discSqrt) / (2 * a);
            var t2 = (-b - discSqrt) / (2 * a);
            if (t1 >= 0 && t1 <= 1) {
                roots[n++] = t1;
            }
            if (t2 >= 0 && t2 <= 1) {
                roots[n++] = t2;
            }
        }
    }
    return n;
}
function quadraticExtremum(p0, p1, p2) {
    var divider = p0 + p2 - 2 * p1;
    if (divider === 0) {
        return 0.5;
    }
    else {
        return (p0 - p1) / divider;
    }
}
function quadraticSubdivide(p0, p1, p2, t, out) {
    var p01 = (p1 - p0) * t + p0;
    var p12 = (p2 - p1) * t + p1;
    var p012 = (p12 - p01) * t + p01;
    out[0] = p0;
    out[1] = p01;
    out[2] = p012;
    out[3] = p012;
    out[4] = p12;
    out[5] = p2;
}
function quadraticProjectPoint(x0, y0, x1, y1, x2, y2, x, y, out) {
    var t;
    var interval = 0.005;
    var d = Infinity;
    _v0[0] = x;
    _v0[1] = y;
    for (var _t = 0; _t < 1; _t += 0.05) {
        _v1[0] = quadraticAt(x0, x1, x2, _t);
        _v1[1] = quadraticAt(y0, y1, y2, _t);
        var d1 = (0,_vector_js__WEBPACK_IMPORTED_MODULE_0__.distSquare)(_v0, _v1);
        if (d1 < d) {
            t = _t;
            d = d1;
        }
    }
    d = Infinity;
    for (var i = 0; i < 32; i++) {
        if (interval < EPSILON_NUMERIC) {
            break;
        }
        var prev = t - interval;
        var next = t + interval;
        _v1[0] = quadraticAt(x0, x1, x2, prev);
        _v1[1] = quadraticAt(y0, y1, y2, prev);
        var d1 = (0,_vector_js__WEBPACK_IMPORTED_MODULE_0__.distSquare)(_v1, _v0);
        if (prev >= 0 && d1 < d) {
            t = prev;
            d = d1;
        }
        else {
            _v2[0] = quadraticAt(x0, x1, x2, next);
            _v2[1] = quadraticAt(y0, y1, y2, next);
            var d2 = (0,_vector_js__WEBPACK_IMPORTED_MODULE_0__.distSquare)(_v2, _v0);
            if (next <= 1 && d2 < d) {
                t = next;
                d = d2;
            }
            else {
                interval *= 0.5;
            }
        }
    }
    if (out) {
        out[0] = quadraticAt(x0, x1, x2, t);
        out[1] = quadraticAt(y0, y1, y2, t);
    }
    return mathSqrt(d);
}
function quadraticLength(x0, y0, x1, y1, x2, y2, iteration) {
    var px = x0;
    var py = y0;
    var d = 0;
    var step = 1 / iteration;
    for (var i = 1; i <= iteration; i++) {
        var t = i * step;
        var x = quadraticAt(x0, x1, x2, t);
        var y = quadraticAt(y0, y1, y2, t);
        var dx = x - px;
        var dy = y - py;
        d += Math.sqrt(dx * dx + dy * dy);
        px = x;
        py = y;
    }
    return d;
}


}),
75225: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  transformLocalCoord: function() { return /* binding */ transformLocalCoord; },
  encodeHTML: function() { return /* binding */ encodeHTML; },
  isCanvasEl: function() { return /* binding */ isCanvasEl; },
  transformCoordWithViewport: function() { return /* binding */ transformCoordWithViewport; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/env.js
var env = __webpack_require__(76226);
;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/fourPointsTransform.js
var LN2 = Math.log(2);
function determinant(rows, rank, rowStart, rowMask, colMask, detCache) {
    var cacheKey = rowMask + '-' + colMask;
    var fullRank = rows.length;
    if (detCache.hasOwnProperty(cacheKey)) {
        return detCache[cacheKey];
    }
    if (rank === 1) {
        var colStart = Math.round(Math.log(((1 << fullRank) - 1) & ~colMask) / LN2);
        return rows[rowStart][colStart];
    }
    var subRowMask = rowMask | (1 << rowStart);
    var subRowStart = rowStart + 1;
    while (rowMask & (1 << subRowStart)) {
        subRowStart++;
    }
    var sum = 0;
    for (var j = 0, colLocalIdx = 0; j < fullRank; j++) {
        var colTag = 1 << j;
        if (!(colTag & colMask)) {
            sum += (colLocalIdx % 2 ? -1 : 1) * rows[rowStart][j]
                * determinant(rows, rank - 1, subRowStart, subRowMask, colMask | colTag, detCache);
            colLocalIdx++;
        }
    }
    detCache[cacheKey] = sum;
    return sum;
}
function buildTransformer(src, dest) {
    var mA = [
        [src[0], src[1], 1, 0, 0, 0, -dest[0] * src[0], -dest[0] * src[1]],
        [0, 0, 0, src[0], src[1], 1, -dest[1] * src[0], -dest[1] * src[1]],
        [src[2], src[3], 1, 0, 0, 0, -dest[2] * src[2], -dest[2] * src[3]],
        [0, 0, 0, src[2], src[3], 1, -dest[3] * src[2], -dest[3] * src[3]],
        [src[4], src[5], 1, 0, 0, 0, -dest[4] * src[4], -dest[4] * src[5]],
        [0, 0, 0, src[4], src[5], 1, -dest[5] * src[4], -dest[5] * src[5]],
        [src[6], src[7], 1, 0, 0, 0, -dest[6] * src[6], -dest[6] * src[7]],
        [0, 0, 0, src[6], src[7], 1, -dest[7] * src[6], -dest[7] * src[7]]
    ];
    var detCache = {};
    var det = determinant(mA, 8, 0, 0, 0, detCache);
    if (det === 0) {
        return;
    }
    var vh = [];
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            vh[j] == null && (vh[j] = 0);
            vh[j] += ((i + j) % 2 ? -1 : 1)
                * determinant(mA, 7, i === 0 ? 1 : 0, 1 << i, 1 << j, detCache)
                / det * dest[i];
        }
    }
    return function (out, srcPointX, srcPointY) {
        var pk = srcPointX * vh[6] + srcPointY * vh[7] + 1;
        out[0] = (srcPointX * vh[0] + srcPointY * vh[1] + vh[2]) / pk;
        out[1] = (srcPointX * vh[3] + srcPointY * vh[4] + vh[5]) / pk;
    };
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/dom.js


var EVENT_SAVED_PROP = '___zrEVENTSAVED';
var _calcOut = [];
function transformLocalCoord(out, elFrom, elTarget, inX, inY) {
    return transformCoordWithViewport(_calcOut, elFrom, inX, inY, true)
        && transformCoordWithViewport(out, elTarget, _calcOut[0], _calcOut[1]);
}
function transformCoordWithViewport(out, el, inX, inY, inverse) {
    if (el.getBoundingClientRect && env["default"].domSupported && !isCanvasEl(el)) {
        var saved = el[EVENT_SAVED_PROP] || (el[EVENT_SAVED_PROP] = {});
        var markers = prepareCoordMarkers(el, saved);
        var transformer = preparePointerTransformer(markers, saved, inverse);
        if (transformer) {
            transformer(out, inX, inY);
            return true;
        }
    }
    return false;
}
function prepareCoordMarkers(el, saved) {
    var markers = saved.markers;
    if (markers) {
        return markers;
    }
    markers = saved.markers = [];
    var propLR = ['left', 'right'];
    var propTB = ['top', 'bottom'];
    for (var i = 0; i < 4; i++) {
        var marker = document.createElement('div');
        var stl = marker.style;
        var idxLR = i % 2;
        var idxTB = (i >> 1) % 2;
        stl.cssText = [
            'position: absolute',
            'visibility: hidden',
            'padding: 0',
            'margin: 0',
            'border-width: 0',
            'user-select: none',
            'width:0',
            'height:0',
            propLR[idxLR] + ':0',
            propTB[idxTB] + ':0',
            propLR[1 - idxLR] + ':auto',
            propTB[1 - idxTB] + ':auto',
            ''
        ].join('!important;');
        el.appendChild(marker);
        markers.push(marker);
    }
    return markers;
}
function preparePointerTransformer(markers, saved, inverse) {
    var transformerName = inverse ? 'invTrans' : 'trans';
    var transformer = saved[transformerName];
    var oldSrcCoords = saved.srcCoords;
    var srcCoords = [];
    var destCoords = [];
    var oldCoordTheSame = true;
    for (var i = 0; i < 4; i++) {
        var rect = markers[i].getBoundingClientRect();
        var ii = 2 * i;
        var x = rect.left;
        var y = rect.top;
        srcCoords.push(x, y);
        oldCoordTheSame = oldCoordTheSame && oldSrcCoords && x === oldSrcCoords[ii] && y === oldSrcCoords[ii + 1];
        destCoords.push(markers[i].offsetLeft, markers[i].offsetTop);
    }
    return (oldCoordTheSame && transformer)
        ? transformer
        : (saved.srcCoords = srcCoords,
            saved[transformerName] = inverse
                ? buildTransformer(destCoords, srcCoords)
                : buildTransformer(srcCoords, destCoords));
}
function isCanvasEl(el) {
    return el.nodeName.toUpperCase() === 'CANVAS';
}
var replaceReg = /([&<>"'])/g;
var replaceMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&#39;'
};
function encodeHTML(source) {
    return source == null
        ? ''
        : (source + '').replace(replaceReg, function (str, c) {
            return replaceMap[c];
        });
}


}),
76226: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
var Browser = (function () {
    function Browser() {
        this.firefox = false;
        this.ie = false;
        this.edge = false;
        this.newEdge = false;
        this.weChat = false;
    }
    return Browser;
}());
var Env = (function () {
    function Env() {
        this.browser = new Browser();
        this.node = false;
        this.wxa = false;
        this.worker = false;
        this.svgSupported = false;
        this.touchEventsSupported = false;
        this.pointerEventsSupported = false;
        this.domSupported = false;
        this.transformSupported = false;
        this.transform3dSupported = false;
        this.hasGlobalWindow = typeof window !== 'undefined';
    }
    return Env;
}());
var env = new Env();
if (typeof wx === 'object' && typeof wx.getSystemInfoSync === 'function') {
    env.wxa = true;
    env.touchEventsSupported = true;
}
else if (typeof document === 'undefined' && typeof self !== 'undefined') {
    env.worker = true;
}
else if (!env.hasGlobalWindow || 'Deno' in window) {
    env.node = true;
    env.svgSupported = true;
}
else {
    detect(navigator.userAgent, env);
}
function detect(ua, env) {
    var browser = env.browser;
    var firefox = ua.match(/Firefox\/([\d.]+)/);
    var ie = ua.match(/MSIE\s([\d.]+)/)
        || ua.match(/Trident\/.+?rv:(([\d.]+))/);
    var edge = ua.match(/Edge?\/([\d.]+)/);
    var weChat = (/micromessenger/i).test(ua);
    if (firefox) {
        browser.firefox = true;
        browser.version = firefox[1];
    }
    if (ie) {
        browser.ie = true;
        browser.version = ie[1];
    }
    if (edge) {
        browser.edge = true;
        browser.version = edge[1];
        browser.newEdge = +edge[1].split('.')[0] > 18;
    }
    if (weChat) {
        browser.weChat = true;
    }
    env.svgSupported = typeof SVGRect !== 'undefined';
    env.touchEventsSupported = 'ontouchstart' in window && !browser.ie && !browser.edge;
    env.pointerEventsSupported = 'onpointerdown' in window
        && (browser.edge || (browser.ie && +browser.version >= 11));
    env.domSupported = typeof document !== 'undefined';
    var style = document.documentElement.style;
    env.transform3dSupported = ((browser.ie && 'transition' in style)
        || browser.edge
        || (('WebKitCSSMatrix' in window) && ('m11' in new WebKitCSSMatrix()))
        || 'MozPerspective' in style)
        && !('OTransition' in style);
    env.transformSupported = env.transform3dSupported
        || (browser.ie && +browser.version >= 9);
}
/* ESM default export */ __webpack_exports__["default"] = (env);


}),
3036: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Dispatcher: function() { return /* reexport safe */ _Eventful_js__WEBPACK_IMPORTED_MODULE_0__["default"]; },
  addEventListener: function() { return addEventListener; },
  clientToLocal: function() { return clientToLocal; },
  getNativeEvent: function() { return getNativeEvent; },
  isMiddleOrRightButtonOnMouseUpDown: function() { return isMiddleOrRightButtonOnMouseUpDown; },
  normalizeEvent: function() { return normalizeEvent; },
  removeEventListener: function() { return removeEventListener; },
  stop: function() { return stop; }
});
/* ESM import */var _Eventful_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46606);
/* ESM import */var _env_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76226);
/* ESM import */var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75225);



var MOUSE_EVENT_REG = /^(?:mouse|pointer|contextmenu|drag|drop)|click/;
var _calcOut = [];
var firefoxNotSupportOffsetXY = _env_js__WEBPACK_IMPORTED_MODULE_1__["default"].browser.firefox
    && +_env_js__WEBPACK_IMPORTED_MODULE_1__["default"].browser.version.split('.')[0] < 39;
function clientToLocal(el, e, out, calculate) {
    out = out || {};
    if (calculate) {
        calculateZrXY(el, e, out);
    }
    else if (firefoxNotSupportOffsetXY
        && e.layerX != null
        && e.layerX !== e.offsetX) {
        out.zrX = e.layerX;
        out.zrY = e.layerY;
    }
    else if (e.offsetX != null) {
        out.zrX = e.offsetX;
        out.zrY = e.offsetY;
    }
    else {
        calculateZrXY(el, e, out);
    }
    return out;
}
function calculateZrXY(el, e, out) {
    if (_env_js__WEBPACK_IMPORTED_MODULE_1__["default"].domSupported && el.getBoundingClientRect) {
        var ex = e.clientX;
        var ey = e.clientY;
        if ((0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.isCanvasEl)(el)) {
            var box = el.getBoundingClientRect();
            out.zrX = ex - box.left;
            out.zrY = ey - box.top;
            return;
        }
        else {
            if ((0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.transformCoordWithViewport)(_calcOut, el, ex, ey)) {
                out.zrX = _calcOut[0];
                out.zrY = _calcOut[1];
                return;
            }
        }
    }
    out.zrX = out.zrY = 0;
}
function getNativeEvent(e) {
    return e
        || window.event;
}
function normalizeEvent(el, e, calculate) {
    e = getNativeEvent(e);
    if (e.zrX != null) {
        return e;
    }
    var eventType = e.type;
    var isTouch = eventType && eventType.indexOf('touch') >= 0;
    if (!isTouch) {
        clientToLocal(el, e, e, calculate);
        var wheelDelta = getWheelDeltaMayPolyfill(e);
        e.zrDelta = wheelDelta ? wheelDelta / 120 : -(e.detail || 0) / 3;
    }
    else {
        var touch = eventType !== 'touchend'
            ? e.targetTouches[0]
            : e.changedTouches[0];
        touch && clientToLocal(el, touch, e, calculate);
    }
    var button = e.button;
    if (e.which == null && button !== undefined && MOUSE_EVENT_REG.test(e.type)) {
        e.which = (button & 1 ? 1 : (button & 2 ? 3 : (button & 4 ? 2 : 0)));
    }
    return e;
}
function getWheelDeltaMayPolyfill(e) {
    var rawWheelDelta = e.wheelDelta;
    if (rawWheelDelta) {
        return rawWheelDelta;
    }
    var deltaX = e.deltaX;
    var deltaY = e.deltaY;
    if (deltaX == null || deltaY == null) {
        return rawWheelDelta;
    }
    var delta = deltaY !== 0 ? Math.abs(deltaY) : Math.abs(deltaX);
    var sign = deltaY > 0 ? -1
        : deltaY < 0 ? 1
            : deltaX > 0 ? -1
                : 1;
    return 3 * delta * sign;
}
function addEventListener(el, name, handler, opt) {
    el.addEventListener(name, handler, opt);
}
function removeEventListener(el, name, handler, opt) {
    el.removeEventListener(name, handler, opt);
}
var stop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    e.cancelBubble = true;
};
function isMiddleOrRightButtonOnMouseUpDown(e) {
    return e.which === 2 || e.which === 3;
}



}),
85215: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  clone: function() { return clone; },
  copy: function() { return copy; },
  create: function() { return create; },
  identity: function() { return identity; },
  invert: function() { return invert; },
  mul: function() { return mul; },
  rotate: function() { return rotate; },
  scale: function() { return scale; },
  translate: function() { return translate; }
});
function create() {
    return [1, 0, 0, 1, 0, 0];
}
function identity(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    out[4] = 0;
    out[5] = 0;
    return out;
}
function copy(out, m) {
    out[0] = m[0];
    out[1] = m[1];
    out[2] = m[2];
    out[3] = m[3];
    out[4] = m[4];
    out[5] = m[5];
    return out;
}
function mul(out, m1, m2) {
    var out0 = m1[0] * m2[0] + m1[2] * m2[1];
    var out1 = m1[1] * m2[0] + m1[3] * m2[1];
    var out2 = m1[0] * m2[2] + m1[2] * m2[3];
    var out3 = m1[1] * m2[2] + m1[3] * m2[3];
    var out4 = m1[0] * m2[4] + m1[2] * m2[5] + m1[4];
    var out5 = m1[1] * m2[4] + m1[3] * m2[5] + m1[5];
    out[0] = out0;
    out[1] = out1;
    out[2] = out2;
    out[3] = out3;
    out[4] = out4;
    out[5] = out5;
    return out;
}
function translate(out, a, v) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4] + v[0];
    out[5] = a[5] + v[1];
    return out;
}
function rotate(out, a, rad, pivot) {
    if (pivot === void 0) { pivot = [0, 0]; }
    var aa = a[0];
    var ac = a[2];
    var atx = a[4];
    var ab = a[1];
    var ad = a[3];
    var aty = a[5];
    var st = Math.sin(rad);
    var ct = Math.cos(rad);
    out[0] = aa * ct + ab * st;
    out[1] = -aa * st + ab * ct;
    out[2] = ac * ct + ad * st;
    out[3] = -ac * st + ct * ad;
    out[4] = ct * (atx - pivot[0]) + st * (aty - pivot[1]) + pivot[0];
    out[5] = ct * (aty - pivot[1]) - st * (atx - pivot[0]) + pivot[1];
    return out;
}
function scale(out, a, v) {
    var vx = v[0];
    var vy = v[1];
    out[0] = a[0] * vx;
    out[1] = a[1] * vy;
    out[2] = a[2] * vx;
    out[3] = a[3] * vy;
    out[4] = a[4] * vx;
    out[5] = a[5] * vy;
    return out;
}
function invert(out, a) {
    var aa = a[0];
    var ac = a[2];
    var atx = a[4];
    var ab = a[1];
    var ad = a[3];
    var aty = a[5];
    var det = aa * ad - ab * ac;
    if (!det) {
        return null;
    }
    det = 1.0 / det;
    out[0] = ad * det;
    out[1] = -ab * det;
    out[2] = -ac * det;
    out[3] = aa * det;
    out[4] = (ac * aty - ad * atx) * det;
    out[5] = (ab * atx - aa * aty) * det;
    return out;
}
function clone(a) {
    var b = create();
    copy(b, a);
    return b;
}


}),
82379: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DEFAULT_FONT: function() { return DEFAULT_FONT; },
  DEFAULT_FONT_FAMILY: function() { return DEFAULT_FONT_FAMILY; },
  DEFAULT_FONT_SIZE: function() { return DEFAULT_FONT_SIZE; },
  DEFAULT_TEXT_WIDTH_MAP: function() { return DEFAULT_TEXT_WIDTH_MAP; },
  platformApi: function() { return platformApi; },
  setPlatformAPI: function() { return setPlatformAPI; }
});
var DEFAULT_FONT_SIZE = 12;
var DEFAULT_FONT_FAMILY = 'sans-serif';
var DEFAULT_FONT = DEFAULT_FONT_SIZE + "px " + DEFAULT_FONT_FAMILY;
var OFFSET = 20;
var SCALE = 100;
var defaultWidthMapStr = "007LLmW'55;N0500LLLLLLLLLL00NNNLzWW\\\\WQb\\0FWLg\\bWb\\WQ\\WrWWQ000CL5LLFLL0LL**F*gLLLL5F0LF\\FFF5.5N";
function getTextWidthMap(mapStr) {
    var map = {};
    if (typeof JSON === 'undefined') {
        return map;
    }
    for (var i = 0; i < mapStr.length; i++) {
        var char = String.fromCharCode(i + 32);
        var size = (mapStr.charCodeAt(i) - OFFSET) / SCALE;
        map[char] = size;
    }
    return map;
}
var DEFAULT_TEXT_WIDTH_MAP = getTextWidthMap(defaultWidthMapStr);
var platformApi = {
    createCanvas: function () {
        return typeof document !== 'undefined'
            && document.createElement('canvas');
    },
    measureText: (function () {
        var _ctx;
        var _cachedFont;
        return function (text, font) {
            if (!_ctx) {
                var canvas = platformApi.createCanvas();
                _ctx = canvas && canvas.getContext('2d');
            }
            if (_ctx) {
                if (_cachedFont !== font) {
                    _cachedFont = _ctx.font = font || DEFAULT_FONT;
                }
                return _ctx.measureText(text);
            }
            else {
                text = text || '';
                font = font || DEFAULT_FONT;
                var res = /((?:\d+)?\.?\d*)px/.exec(font);
                var fontSize = res && +res[1] || DEFAULT_FONT_SIZE;
                var width = 0;
                if (font.indexOf('mono') >= 0) {
                    width = fontSize * text.length;
                }
                else {
                    for (var i = 0; i < text.length; i++) {
                        var preCalcWidth = DEFAULT_TEXT_WIDTH_MAP[text[i]];
                        width += preCalcWidth == null ? fontSize : (preCalcWidth * fontSize);
                    }
                }
                return { width: width };
            }
        };
    })(),
    loadImage: function (src, onload, onerror) {
        var image = new Image();
        image.onload = onload;
        image.onerror = onerror;
        image.src = src;
        return image;
    }
};
function setPlatformAPI(newPlatformApis) {
    for (var key in platformApi) {
        if (newPlatformApis[key]) {
            platformApi[key] = newPlatformApis[key];
        }
    }
}


}),
22137: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return sort; }
});
var DEFAULT_MIN_MERGE = 32;
var DEFAULT_MIN_GALLOPING = 7;
function minRunLength(n) {
    var r = 0;
    while (n >= DEFAULT_MIN_MERGE) {
        r |= n & 1;
        n >>= 1;
    }
    return n + r;
}
function makeAscendingRun(array, lo, hi, compare) {
    var runHi = lo + 1;
    if (runHi === hi) {
        return 1;
    }
    if (compare(array[runHi++], array[lo]) < 0) {
        while (runHi < hi && compare(array[runHi], array[runHi - 1]) < 0) {
            runHi++;
        }
        reverseRun(array, lo, runHi);
    }
    else {
        while (runHi < hi && compare(array[runHi], array[runHi - 1]) >= 0) {
            runHi++;
        }
    }
    return runHi - lo;
}
function reverseRun(array, lo, hi) {
    hi--;
    while (lo < hi) {
        var t = array[lo];
        array[lo++] = array[hi];
        array[hi--] = t;
    }
}
function binaryInsertionSort(array, lo, hi, start, compare) {
    if (start === lo) {
        start++;
    }
    for (; start < hi; start++) {
        var pivot = array[start];
        var left = lo;
        var right = start;
        var mid;
        while (left < right) {
            mid = left + right >>> 1;
            if (compare(pivot, array[mid]) < 0) {
                right = mid;
            }
            else {
                left = mid + 1;
            }
        }
        var n = start - left;
        switch (n) {
            case 3:
                array[left + 3] = array[left + 2];
            case 2:
                array[left + 2] = array[left + 1];
            case 1:
                array[left + 1] = array[left];
                break;
            default:
                while (n > 0) {
                    array[left + n] = array[left + n - 1];
                    n--;
                }
        }
        array[left] = pivot;
    }
}
function gallopLeft(value, array, start, length, hint, compare) {
    var lastOffset = 0;
    var maxOffset = 0;
    var offset = 1;
    if (compare(value, array[start + hint]) > 0) {
        maxOffset = length - hint;
        while (offset < maxOffset && compare(value, array[start + hint + offset]) > 0) {
            lastOffset = offset;
            offset = (offset << 1) + 1;
            if (offset <= 0) {
                offset = maxOffset;
            }
        }
        if (offset > maxOffset) {
            offset = maxOffset;
        }
        lastOffset += hint;
        offset += hint;
    }
    else {
        maxOffset = hint + 1;
        while (offset < maxOffset && compare(value, array[start + hint - offset]) <= 0) {
            lastOffset = offset;
            offset = (offset << 1) + 1;
            if (offset <= 0) {
                offset = maxOffset;
            }
        }
        if (offset > maxOffset) {
            offset = maxOffset;
        }
        var tmp = lastOffset;
        lastOffset = hint - offset;
        offset = hint - tmp;
    }
    lastOffset++;
    while (lastOffset < offset) {
        var m = lastOffset + (offset - lastOffset >>> 1);
        if (compare(value, array[start + m]) > 0) {
            lastOffset = m + 1;
        }
        else {
            offset = m;
        }
    }
    return offset;
}
function gallopRight(value, array, start, length, hint, compare) {
    var lastOffset = 0;
    var maxOffset = 0;
    var offset = 1;
    if (compare(value, array[start + hint]) < 0) {
        maxOffset = hint + 1;
        while (offset < maxOffset && compare(value, array[start + hint - offset]) < 0) {
            lastOffset = offset;
            offset = (offset << 1) + 1;
            if (offset <= 0) {
                offset = maxOffset;
            }
        }
        if (offset > maxOffset) {
            offset = maxOffset;
        }
        var tmp = lastOffset;
        lastOffset = hint - offset;
        offset = hint - tmp;
    }
    else {
        maxOffset = length - hint;
        while (offset < maxOffset && compare(value, array[start + hint + offset]) >= 0) {
            lastOffset = offset;
            offset = (offset << 1) + 1;
            if (offset <= 0) {
                offset = maxOffset;
            }
        }
        if (offset > maxOffset) {
            offset = maxOffset;
        }
        lastOffset += hint;
        offset += hint;
    }
    lastOffset++;
    while (lastOffset < offset) {
        var m = lastOffset + (offset - lastOffset >>> 1);
        if (compare(value, array[start + m]) < 0) {
            offset = m;
        }
        else {
            lastOffset = m + 1;
        }
    }
    return offset;
}
function TimSort(array, compare) {
    var minGallop = DEFAULT_MIN_GALLOPING;
    var runStart;
    var runLength;
    var stackSize = 0;
    var tmp = [];
    runStart = [];
    runLength = [];
    function pushRun(_runStart, _runLength) {
        runStart[stackSize] = _runStart;
        runLength[stackSize] = _runLength;
        stackSize += 1;
    }
    function mergeRuns() {
        while (stackSize > 1) {
            var n = stackSize - 2;
            if ((n >= 1 && runLength[n - 1] <= runLength[n] + runLength[n + 1])
                || (n >= 2 && runLength[n - 2] <= runLength[n] + runLength[n - 1])) {
                if (runLength[n - 1] < runLength[n + 1]) {
                    n--;
                }
            }
            else if (runLength[n] > runLength[n + 1]) {
                break;
            }
            mergeAt(n);
        }
    }
    function forceMergeRuns() {
        while (stackSize > 1) {
            var n = stackSize - 2;
            if (n > 0 && runLength[n - 1] < runLength[n + 1]) {
                n--;
            }
            mergeAt(n);
        }
    }
    function mergeAt(i) {
        var start1 = runStart[i];
        var length1 = runLength[i];
        var start2 = runStart[i + 1];
        var length2 = runLength[i + 1];
        runLength[i] = length1 + length2;
        if (i === stackSize - 3) {
            runStart[i + 1] = runStart[i + 2];
            runLength[i + 1] = runLength[i + 2];
        }
        stackSize--;
        var k = gallopRight(array[start2], array, start1, length1, 0, compare);
        start1 += k;
        length1 -= k;
        if (length1 === 0) {
            return;
        }
        length2 = gallopLeft(array[start1 + length1 - 1], array, start2, length2, length2 - 1, compare);
        if (length2 === 0) {
            return;
        }
        if (length1 <= length2) {
            mergeLow(start1, length1, start2, length2);
        }
        else {
            mergeHigh(start1, length1, start2, length2);
        }
    }
    function mergeLow(start1, length1, start2, length2) {
        var i = 0;
        for (i = 0; i < length1; i++) {
            tmp[i] = array[start1 + i];
        }
        var cursor1 = 0;
        var cursor2 = start2;
        var dest = start1;
        array[dest++] = array[cursor2++];
        if (--length2 === 0) {
            for (i = 0; i < length1; i++) {
                array[dest + i] = tmp[cursor1 + i];
            }
            return;
        }
        if (length1 === 1) {
            for (i = 0; i < length2; i++) {
                array[dest + i] = array[cursor2 + i];
            }
            array[dest + length2] = tmp[cursor1];
            return;
        }
        var _minGallop = minGallop;
        var count1;
        var count2;
        var exit;
        while (1) {
            count1 = 0;
            count2 = 0;
            exit = false;
            do {
                if (compare(array[cursor2], tmp[cursor1]) < 0) {
                    array[dest++] = array[cursor2++];
                    count2++;
                    count1 = 0;
                    if (--length2 === 0) {
                        exit = true;
                        break;
                    }
                }
                else {
                    array[dest++] = tmp[cursor1++];
                    count1++;
                    count2 = 0;
                    if (--length1 === 1) {
                        exit = true;
                        break;
                    }
                }
            } while ((count1 | count2) < _minGallop);
            if (exit) {
                break;
            }
            do {
                count1 = gallopRight(array[cursor2], tmp, cursor1, length1, 0, compare);
                if (count1 !== 0) {
                    for (i = 0; i < count1; i++) {
                        array[dest + i] = tmp[cursor1 + i];
                    }
                    dest += count1;
                    cursor1 += count1;
                    length1 -= count1;
                    if (length1 <= 1) {
                        exit = true;
                        break;
                    }
                }
                array[dest++] = array[cursor2++];
                if (--length2 === 0) {
                    exit = true;
                    break;
                }
                count2 = gallopLeft(tmp[cursor1], array, cursor2, length2, 0, compare);
                if (count2 !== 0) {
                    for (i = 0; i < count2; i++) {
                        array[dest + i] = array[cursor2 + i];
                    }
                    dest += count2;
                    cursor2 += count2;
                    length2 -= count2;
                    if (length2 === 0) {
                        exit = true;
                        break;
                    }
                }
                array[dest++] = tmp[cursor1++];
                if (--length1 === 1) {
                    exit = true;
                    break;
                }
                _minGallop--;
            } while (count1 >= DEFAULT_MIN_GALLOPING || count2 >= DEFAULT_MIN_GALLOPING);
            if (exit) {
                break;
            }
            if (_minGallop < 0) {
                _minGallop = 0;
            }
            _minGallop += 2;
        }
        minGallop = _minGallop;
        minGallop < 1 && (minGallop = 1);
        if (length1 === 1) {
            for (i = 0; i < length2; i++) {
                array[dest + i] = array[cursor2 + i];
            }
            array[dest + length2] = tmp[cursor1];
        }
        else if (length1 === 0) {
            throw new Error();
        }
        else {
            for (i = 0; i < length1; i++) {
                array[dest + i] = tmp[cursor1 + i];
            }
        }
    }
    function mergeHigh(start1, length1, start2, length2) {
        var i = 0;
        for (i = 0; i < length2; i++) {
            tmp[i] = array[start2 + i];
        }
        var cursor1 = start1 + length1 - 1;
        var cursor2 = length2 - 1;
        var dest = start2 + length2 - 1;
        var customCursor = 0;
        var customDest = 0;
        array[dest--] = array[cursor1--];
        if (--length1 === 0) {
            customCursor = dest - (length2 - 1);
            for (i = 0; i < length2; i++) {
                array[customCursor + i] = tmp[i];
            }
            return;
        }
        if (length2 === 1) {
            dest -= length1;
            cursor1 -= length1;
            customDest = dest + 1;
            customCursor = cursor1 + 1;
            for (i = length1 - 1; i >= 0; i--) {
                array[customDest + i] = array[customCursor + i];
            }
            array[dest] = tmp[cursor2];
            return;
        }
        var _minGallop = minGallop;
        while (true) {
            var count1 = 0;
            var count2 = 0;
            var exit = false;
            do {
                if (compare(tmp[cursor2], array[cursor1]) < 0) {
                    array[dest--] = array[cursor1--];
                    count1++;
                    count2 = 0;
                    if (--length1 === 0) {
                        exit = true;
                        break;
                    }
                }
                else {
                    array[dest--] = tmp[cursor2--];
                    count2++;
                    count1 = 0;
                    if (--length2 === 1) {
                        exit = true;
                        break;
                    }
                }
            } while ((count1 | count2) < _minGallop);
            if (exit) {
                break;
            }
            do {
                count1 = length1 - gallopRight(tmp[cursor2], array, start1, length1, length1 - 1, compare);
                if (count1 !== 0) {
                    dest -= count1;
                    cursor1 -= count1;
                    length1 -= count1;
                    customDest = dest + 1;
                    customCursor = cursor1 + 1;
                    for (i = count1 - 1; i >= 0; i--) {
                        array[customDest + i] = array[customCursor + i];
                    }
                    if (length1 === 0) {
                        exit = true;
                        break;
                    }
                }
                array[dest--] = tmp[cursor2--];
                if (--length2 === 1) {
                    exit = true;
                    break;
                }
                count2 = length2 - gallopLeft(array[cursor1], tmp, 0, length2, length2 - 1, compare);
                if (count2 !== 0) {
                    dest -= count2;
                    cursor2 -= count2;
                    length2 -= count2;
                    customDest = dest + 1;
                    customCursor = cursor2 + 1;
                    for (i = 0; i < count2; i++) {
                        array[customDest + i] = tmp[customCursor + i];
                    }
                    if (length2 <= 1) {
                        exit = true;
                        break;
                    }
                }
                array[dest--] = array[cursor1--];
                if (--length1 === 0) {
                    exit = true;
                    break;
                }
                _minGallop--;
            } while (count1 >= DEFAULT_MIN_GALLOPING || count2 >= DEFAULT_MIN_GALLOPING);
            if (exit) {
                break;
            }
            if (_minGallop < 0) {
                _minGallop = 0;
            }
            _minGallop += 2;
        }
        minGallop = _minGallop;
        if (minGallop < 1) {
            minGallop = 1;
        }
        if (length2 === 1) {
            dest -= length1;
            cursor1 -= length1;
            customDest = dest + 1;
            customCursor = cursor1 + 1;
            for (i = length1 - 1; i >= 0; i--) {
                array[customDest + i] = array[customCursor + i];
            }
            array[dest] = tmp[cursor2];
        }
        else if (length2 === 0) {
            throw new Error();
        }
        else {
            customCursor = dest - (length2 - 1);
            for (i = 0; i < length2; i++) {
                array[customCursor + i] = tmp[i];
            }
        }
    }
    return {
        mergeRuns: mergeRuns,
        forceMergeRuns: forceMergeRuns,
        pushRun: pushRun
    };
}
function sort(array, compare, lo, hi) {
    if (!lo) {
        lo = 0;
    }
    if (!hi) {
        hi = array.length;
    }
    var remaining = hi - lo;
    if (remaining < 2) {
        return;
    }
    var runLength = 0;
    if (remaining < DEFAULT_MIN_MERGE) {
        runLength = makeAscendingRun(array, lo, hi, compare);
        binaryInsertionSort(array, lo, hi, lo + runLength, compare);
        return;
    }
    var ts = TimSort(array, compare);
    var minRun = minRunLength(remaining);
    do {
        runLength = makeAscendingRun(array, lo, hi, compare);
        if (runLength < minRun) {
            var force = remaining;
            if (force > minRun) {
                force = minRun;
            }
            binaryInsertionSort(array, lo, lo + force, lo + runLength, compare);
            runLength = force;
        }
        ts.pushRun(lo, runLength);
        ts.mergeRuns();
        remaining -= runLength;
        lo += runLength;
    } while (remaining !== 0);
    ts.forceMergeRuns();
}


}),
96585: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  HashMap: function() { return HashMap; },
  RADIAN_TO_DEGREE: function() { return RADIAN_TO_DEGREE; },
  assert: function() { return assert; },
  bind: function() { return bind; },
  clone: function() { return clone; },
  concatArray: function() { return concatArray; },
  createCanvas: function() { return createCanvas; },
  createHashMap: function() { return createHashMap; },
  createObject: function() { return createObject; },
  curry: function() { return curry; },
  defaults: function() { return defaults; },
  disableUserSelect: function() { return disableUserSelect; },
  each: function() { return each; },
  eqNaN: function() { return eqNaN; },
  extend: function() { return extend; },
  filter: function() { return filter; },
  find: function() { return find; },
  guid: function() { return guid; },
  hasOwn: function() { return hasOwn; },
  indexOf: function() { return indexOf; },
  inherits: function() { return inherits; },
  isArray: function() { return isArray; },
  isArrayLike: function() { return isArrayLike; },
  isBuiltInObject: function() { return isBuiltInObject; },
  isDom: function() { return isDom; },
  isFunction: function() { return isFunction; },
  isGradientObject: function() { return isGradientObject; },
  isImagePatternObject: function() { return isImagePatternObject; },
  isNumber: function() { return isNumber; },
  isObject: function() { return isObject; },
  isPrimitive: function() { return isPrimitive; },
  isRegExp: function() { return isRegExp; },
  isString: function() { return isString; },
  isStringSafe: function() { return isStringSafe; },
  isTypedArray: function() { return isTypedArray; },
  keys: function() { return keys; },
  logError: function() { return logError; },
  map: function() { return map; },
  merge: function() { return merge; },
  mergeAll: function() { return mergeAll; },
  mixin: function() { return mixin; },
  noop: function() { return noop; },
  normalizeCssArray: function() { return normalizeCssArray; },
  reduce: function() { return reduce; },
  retrieve: function() { return retrieve; },
  retrieve2: function() { return retrieve2; },
  retrieve3: function() { return retrieve3; },
  setAsPrimitive: function() { return setAsPrimitive; },
  slice: function() { return slice; },
  trim: function() { return trim; }
});
/* ESM import */var _platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82379);

var BUILTIN_OBJECT = reduce([
    'Function',
    'RegExp',
    'Date',
    'Error',
    'CanvasGradient',
    'CanvasPattern',
    'Image',
    'Canvas'
], function (obj, val) {
    obj['[object ' + val + ']'] = true;
    return obj;
}, {});
var TYPED_ARRAY = reduce([
    'Int8',
    'Uint8',
    'Uint8Clamped',
    'Int16',
    'Uint16',
    'Int32',
    'Uint32',
    'Float32',
    'Float64'
], function (obj, val) {
    obj['[object ' + val + 'Array]'] = true;
    return obj;
}, {});
var objToString = Object.prototype.toString;
var arrayProto = Array.prototype;
var nativeForEach = arrayProto.forEach;
var nativeFilter = arrayProto.filter;
var nativeSlice = arrayProto.slice;
var nativeMap = arrayProto.map;
var ctorFunction = function () { }.constructor;
var protoFunction = ctorFunction ? ctorFunction.prototype : null;
var protoKey = '__proto__';
var idStart = 0x0907;
function guid() {
    return idStart++;
}
function logError() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (typeof console !== 'undefined') {
        console.error.apply(console, args);
    }
}
function clone(source) {
    if (source == null || typeof source !== 'object') {
        return source;
    }
    var result = source;
    var typeStr = objToString.call(source);
    if (typeStr === '[object Array]') {
        if (!isPrimitive(source)) {
            result = [];
            for (var i = 0, len = source.length; i < len; i++) {
                result[i] = clone(source[i]);
            }
        }
    }
    else if (TYPED_ARRAY[typeStr]) {
        if (!isPrimitive(source)) {
            var Ctor = source.constructor;
            if (Ctor.from) {
                result = Ctor.from(source);
            }
            else {
                result = new Ctor(source.length);
                for (var i = 0, len = source.length; i < len; i++) {
                    result[i] = source[i];
                }
            }
        }
    }
    else if (!BUILTIN_OBJECT[typeStr] && !isPrimitive(source) && !isDom(source)) {
        result = {};
        for (var key in source) {
            if (source.hasOwnProperty(key) && key !== protoKey) {
                result[key] = clone(source[key]);
            }
        }
    }
    return result;
}
function merge(target, source, overwrite) {
    if (!isObject(source) || !isObject(target)) {
        return overwrite ? clone(source) : target;
    }
    for (var key in source) {
        if (source.hasOwnProperty(key) && key !== protoKey) {
            var targetProp = target[key];
            var sourceProp = source[key];
            if (isObject(sourceProp)
                && isObject(targetProp)
                && !isArray(sourceProp)
                && !isArray(targetProp)
                && !isDom(sourceProp)
                && !isDom(targetProp)
                && !isBuiltInObject(sourceProp)
                && !isBuiltInObject(targetProp)
                && !isPrimitive(sourceProp)
                && !isPrimitive(targetProp)) {
                merge(targetProp, sourceProp, overwrite);
            }
            else if (overwrite || !(key in target)) {
                target[key] = clone(source[key]);
            }
        }
    }
    return target;
}
function mergeAll(targetAndSources, overwrite) {
    var result = targetAndSources[0];
    for (var i = 1, len = targetAndSources.length; i < len; i++) {
        result = merge(result, targetAndSources[i], overwrite);
    }
    return result;
}
function extend(target, source) {
    if (Object.assign) {
        Object.assign(target, source);
    }
    else {
        for (var key in source) {
            if (source.hasOwnProperty(key) && key !== protoKey) {
                target[key] = source[key];
            }
        }
    }
    return target;
}
function defaults(target, source, overlay) {
    var keysArr = keys(source);
    for (var i = 0, len = keysArr.length; i < len; i++) {
        var key = keysArr[i];
        if ((overlay ? source[key] != null : target[key] == null)) {
            target[key] = source[key];
        }
    }
    return target;
}
var createCanvas = _platform_js__WEBPACK_IMPORTED_MODULE_0__.platformApi.createCanvas;
function indexOf(array, value) {
    if (array) {
        if (array.indexOf) {
            return array.indexOf(value);
        }
        for (var i = 0, len = array.length; i < len; i++) {
            if (array[i] === value) {
                return i;
            }
        }
    }
    return -1;
}
function inherits(clazz, baseClazz) {
    var clazzPrototype = clazz.prototype;
    function F() { }
    F.prototype = baseClazz.prototype;
    clazz.prototype = new F();
    for (var prop in clazzPrototype) {
        if (clazzPrototype.hasOwnProperty(prop)) {
            clazz.prototype[prop] = clazzPrototype[prop];
        }
    }
    clazz.prototype.constructor = clazz;
    clazz.superClass = baseClazz;
}
function mixin(target, source, override) {
    target = 'prototype' in target ? target.prototype : target;
    source = 'prototype' in source ? source.prototype : source;
    if (Object.getOwnPropertyNames) {
        var keyList = Object.getOwnPropertyNames(source);
        for (var i = 0; i < keyList.length; i++) {
            var key = keyList[i];
            if (key !== 'constructor') {
                if ((override ? source[key] != null : target[key] == null)) {
                    target[key] = source[key];
                }
            }
        }
    }
    else {
        defaults(target, source, override);
    }
}
function isArrayLike(data) {
    if (!data) {
        return false;
    }
    if (typeof data === 'string') {
        return false;
    }
    return typeof data.length === 'number';
}
function each(arr, cb, context) {
    if (!(arr && cb)) {
        return;
    }
    if (arr.forEach && arr.forEach === nativeForEach) {
        arr.forEach(cb, context);
    }
    else if (arr.length === +arr.length) {
        for (var i = 0, len = arr.length; i < len; i++) {
            cb.call(context, arr[i], i, arr);
        }
    }
    else {
        for (var key in arr) {
            if (arr.hasOwnProperty(key)) {
                cb.call(context, arr[key], key, arr);
            }
        }
    }
}
function map(arr, cb, context) {
    if (!arr) {
        return [];
    }
    if (!cb) {
        return slice(arr);
    }
    if (arr.map && arr.map === nativeMap) {
        return arr.map(cb, context);
    }
    else {
        var result = [];
        for (var i = 0, len = arr.length; i < len; i++) {
            result.push(cb.call(context, arr[i], i, arr));
        }
        return result;
    }
}
function reduce(arr, cb, memo, context) {
    if (!(arr && cb)) {
        return;
    }
    for (var i = 0, len = arr.length; i < len; i++) {
        memo = cb.call(context, memo, arr[i], i, arr);
    }
    return memo;
}
function filter(arr, cb, context) {
    if (!arr) {
        return [];
    }
    if (!cb) {
        return slice(arr);
    }
    if (arr.filter && arr.filter === nativeFilter) {
        return arr.filter(cb, context);
    }
    else {
        var result = [];
        for (var i = 0, len = arr.length; i < len; i++) {
            if (cb.call(context, arr[i], i, arr)) {
                result.push(arr[i]);
            }
        }
        return result;
    }
}
function find(arr, cb, context) {
    if (!(arr && cb)) {
        return;
    }
    for (var i = 0, len = arr.length; i < len; i++) {
        if (cb.call(context, arr[i], i, arr)) {
            return arr[i];
        }
    }
}
function keys(obj) {
    if (!obj) {
        return [];
    }
    if (Object.keys) {
        return Object.keys(obj);
    }
    var keyList = [];
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            keyList.push(key);
        }
    }
    return keyList;
}
function bindPolyfill(func, context) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    return function () {
        return func.apply(context, args.concat(nativeSlice.call(arguments)));
    };
}
var bind = (protoFunction && isFunction(protoFunction.bind))
    ? protoFunction.call.bind(protoFunction.bind)
    : bindPolyfill;
function curry(func) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return function () {
        return func.apply(this, args.concat(nativeSlice.call(arguments)));
    };
}

function isArray(value) {
    if (Array.isArray) {
        return Array.isArray(value);
    }
    return objToString.call(value) === '[object Array]';
}
function isFunction(value) {
    return typeof value === 'function';
}
function isString(value) {
    return typeof value === 'string';
}
function isStringSafe(value) {
    return objToString.call(value) === '[object String]';
}
function isNumber(value) {
    return typeof value === 'number';
}
function isObject(value) {
    var type = typeof value;
    return type === 'function' || (!!value && type === 'object');
}
function isBuiltInObject(value) {
    return !!BUILTIN_OBJECT[objToString.call(value)];
}
function isTypedArray(value) {
    return !!TYPED_ARRAY[objToString.call(value)];
}
function isDom(value) {
    return typeof value === 'object'
        && typeof value.nodeType === 'number'
        && typeof value.ownerDocument === 'object';
}
function isGradientObject(value) {
    return value.colorStops != null;
}
function isImagePatternObject(value) {
    return value.image != null;
}
function isRegExp(value) {
    return objToString.call(value) === '[object RegExp]';
}
function eqNaN(value) {
    return value !== value;
}
function retrieve() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    for (var i = 0, len = args.length; i < len; i++) {
        if (args[i] != null) {
            return args[i];
        }
    }
}
function retrieve2(value0, value1) {
    return value0 != null
        ? value0
        : value1;
}
function retrieve3(value0, value1, value2) {
    return value0 != null
        ? value0
        : value1 != null
            ? value1
            : value2;
}
function slice(arr) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return nativeSlice.apply(arr, args);
}
function normalizeCssArray(val) {
    if (typeof (val) === 'number') {
        return [val, val, val, val];
    }
    var len = val.length;
    if (len === 2) {
        return [val[0], val[1], val[0], val[1]];
    }
    else if (len === 3) {
        return [val[0], val[1], val[2], val[1]];
    }
    return val;
}
function assert(condition, message) {
    if (!condition) {
        throw new Error(message);
    }
}
function trim(str) {
    if (str == null) {
        return null;
    }
    else if (typeof str.trim === 'function') {
        return str.trim();
    }
    else {
        return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    }
}
var primitiveKey = '__ec_primitive__';
function setAsPrimitive(obj) {
    obj[primitiveKey] = true;
}
function isPrimitive(obj) {
    return obj[primitiveKey];
}
var MapPolyfill = (function () {
    function MapPolyfill() {
        this.data = {};
    }
    MapPolyfill.prototype["delete"] = function (key) {
        var existed = this.has(key);
        if (existed) {
            delete this.data[key];
        }
        return existed;
    };
    MapPolyfill.prototype.has = function (key) {
        return this.data.hasOwnProperty(key);
    };
    MapPolyfill.prototype.get = function (key) {
        return this.data[key];
    };
    MapPolyfill.prototype.set = function (key, value) {
        this.data[key] = value;
        return this;
    };
    MapPolyfill.prototype.keys = function () {
        return keys(this.data);
    };
    MapPolyfill.prototype.forEach = function (callback) {
        var data = this.data;
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                callback(data[key], key);
            }
        }
    };
    return MapPolyfill;
}());
var isNativeMapSupported = typeof Map === 'function';
function maybeNativeMap() {
    return (isNativeMapSupported ? new Map() : new MapPolyfill());
}
var HashMap = (function () {
    function HashMap(obj) {
        var isArr = isArray(obj);
        this.data = maybeNativeMap();
        var thisMap = this;
        (obj instanceof HashMap)
            ? obj.each(visit)
            : (obj && each(obj, visit));
        function visit(value, key) {
            isArr ? thisMap.set(value, key) : thisMap.set(key, value);
        }
    }
    HashMap.prototype.hasKey = function (key) {
        return this.data.has(key);
    };
    HashMap.prototype.get = function (key) {
        return this.data.get(key);
    };
    HashMap.prototype.set = function (key, value) {
        this.data.set(key, value);
        return value;
    };
    HashMap.prototype.each = function (cb, context) {
        this.data.forEach(function (value, key) {
            cb.call(context, value, key);
        });
    };
    HashMap.prototype.keys = function () {
        var keys = this.data.keys();
        return isNativeMapSupported
            ? Array.from(keys)
            : keys;
    };
    HashMap.prototype.removeKey = function (key) {
        this.data["delete"](key);
    };
    return HashMap;
}());

function createHashMap(obj) {
    return new HashMap(obj);
}
function concatArray(a, b) {
    var newArray = new a.constructor(a.length + b.length);
    for (var i = 0; i < a.length; i++) {
        newArray[i] = a[i];
    }
    var offset = a.length;
    for (var i = 0; i < b.length; i++) {
        newArray[i + offset] = b[i];
    }
    return newArray;
}
function createObject(proto, properties) {
    var obj;
    if (Object.create) {
        obj = Object.create(proto);
    }
    else {
        var StyleCtor = function () { };
        StyleCtor.prototype = proto;
        obj = new StyleCtor();
    }
    if (properties) {
        extend(obj, properties);
    }
    return obj;
}
function disableUserSelect(dom) {
    var domStyle = dom.style;
    domStyle.webkitUserSelect = 'none';
    domStyle.userSelect = 'none';
    domStyle.webkitTapHighlightColor = 'rgba(0,0,0,0)';
    domStyle['-webkit-touch-callout'] = 'none';
}
function hasOwn(own, prop) {
    return own.hasOwnProperty(prop);
}
function noop() { }
var RADIAN_TO_DEGREE = 180 / Math.PI;


}),
63261: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  add: function() { return add; },
  applyTransform: function() { return applyTransform; },
  clone: function() { return clone; },
  copy: function() { return copy; },
  create: function() { return create; },
  dist: function() { return dist; },
  distSquare: function() { return distSquare; },
  distance: function() { return distance; },
  distanceSquare: function() { return distanceSquare; },
  div: function() { return div; },
  dot: function() { return dot; },
  len: function() { return len; },
  lenSquare: function() { return lenSquare; },
  length: function() { return length; },
  lengthSquare: function() { return lengthSquare; },
  lerp: function() { return lerp; },
  max: function() { return max; },
  min: function() { return min; },
  mul: function() { return mul; },
  negate: function() { return negate; },
  normalize: function() { return normalize; },
  scale: function() { return scale; },
  scaleAndAdd: function() { return scaleAndAdd; },
  set: function() { return set; },
  sub: function() { return sub; }
});
function create(x, y) {
    if (x == null) {
        x = 0;
    }
    if (y == null) {
        y = 0;
    }
    return [x, y];
}
function copy(out, v) {
    out[0] = v[0];
    out[1] = v[1];
    return out;
}
function clone(v) {
    return [v[0], v[1]];
}
function set(out, a, b) {
    out[0] = a;
    out[1] = b;
    return out;
}
function add(out, v1, v2) {
    out[0] = v1[0] + v2[0];
    out[1] = v1[1] + v2[1];
    return out;
}
function scaleAndAdd(out, v1, v2, a) {
    out[0] = v1[0] + v2[0] * a;
    out[1] = v1[1] + v2[1] * a;
    return out;
}
function sub(out, v1, v2) {
    out[0] = v1[0] - v2[0];
    out[1] = v1[1] - v2[1];
    return out;
}
function len(v) {
    return Math.sqrt(lenSquare(v));
}
var length = len;
function lenSquare(v) {
    return v[0] * v[0] + v[1] * v[1];
}
var lengthSquare = lenSquare;
function mul(out, v1, v2) {
    out[0] = v1[0] * v2[0];
    out[1] = v1[1] * v2[1];
    return out;
}
function div(out, v1, v2) {
    out[0] = v1[0] / v2[0];
    out[1] = v1[1] / v2[1];
    return out;
}
function dot(v1, v2) {
    return v1[0] * v2[0] + v1[1] * v2[1];
}
function scale(out, v, s) {
    out[0] = v[0] * s;
    out[1] = v[1] * s;
    return out;
}
function normalize(out, v) {
    var d = len(v);
    if (d === 0) {
        out[0] = 0;
        out[1] = 0;
    }
    else {
        out[0] = v[0] / d;
        out[1] = v[1] / d;
    }
    return out;
}
function distance(v1, v2) {
    return Math.sqrt((v1[0] - v2[0]) * (v1[0] - v2[0])
        + (v1[1] - v2[1]) * (v1[1] - v2[1]));
}
var dist = distance;
function distanceSquare(v1, v2) {
    return (v1[0] - v2[0]) * (v1[0] - v2[0])
        + (v1[1] - v2[1]) * (v1[1] - v2[1]);
}
var distSquare = distanceSquare;
function negate(out, v) {
    out[0] = -v[0];
    out[1] = -v[1];
    return out;
}
function lerp(out, v1, v2, t) {
    out[0] = v1[0] + t * (v2[0] - v1[0]);
    out[1] = v1[1] + t * (v2[1] - v1[1]);
    return out;
}
function applyTransform(out, v, m) {
    var x = v[0];
    var y = v[1];
    out[0] = m[0] * x + m[2] * y + m[4];
    out[1] = m[1] * x + m[3] * y + m[5];
    return out;
}
function min(out, v1, v2) {
    out[0] = Math.min(v1[0], v2[0]);
    out[1] = Math.min(v1[1], v2[1]);
    return out;
}
function max(out, v1, v2) {
    out[0] = Math.max(v1[0], v2[0]);
    out[1] = Math.max(v1[1], v2[1]);
    return out;
}


}),
57852: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12012);
/* ESM import */var _core_event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3036);
/* ESM import */var _core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96585);
/* ESM import */var _core_Eventful_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46606);
/* ESM import */var _core_env_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76226);





var TOUCH_CLICK_DELAY = 300;
var globalEventSupported = _core_env_js__WEBPACK_IMPORTED_MODULE_0__["default"].domSupported;
var localNativeListenerNames = (function () {
    var mouseHandlerNames = [
        'click', 'dblclick', 'mousewheel', 'wheel', 'mouseout',
        'mouseup', 'mousedown', 'mousemove', 'contextmenu'
    ];
    var touchHandlerNames = [
        'touchstart', 'touchend', 'touchmove'
    ];
    var pointerEventNameMap = {
        pointerdown: 1, pointerup: 1, pointermove: 1, pointerout: 1
    };
    var pointerHandlerNames = _core_util_js__WEBPACK_IMPORTED_MODULE_1__.map(mouseHandlerNames, function (name) {
        var nm = name.replace('mouse', 'pointer');
        return pointerEventNameMap.hasOwnProperty(nm) ? nm : name;
    });
    return {
        mouse: mouseHandlerNames,
        touch: touchHandlerNames,
        pointer: pointerHandlerNames
    };
})();
var globalNativeListenerNames = {
    mouse: ['mousemove', 'mouseup'],
    pointer: ['pointermove', 'pointerup']
};
var wheelEventSupported = false;
function isPointerFromTouch(event) {
    var pointerType = event.pointerType;
    return pointerType === 'pen' || pointerType === 'touch';
}
function setTouchTimer(scope) {
    scope.touching = true;
    if (scope.touchTimer != null) {
        clearTimeout(scope.touchTimer);
        scope.touchTimer = null;
    }
    scope.touchTimer = setTimeout(function () {
        scope.touching = false;
        scope.touchTimer = null;
    }, 700);
}
function markTouch(event) {
    event && (event.zrByTouch = true);
}
function normalizeGlobalEvent(instance, event) {
    return (0,_core_event_js__WEBPACK_IMPORTED_MODULE_2__.normalizeEvent)(instance.dom, new FakeGlobalEvent(instance, event), true);
}
function isLocalEl(instance, el) {
    var elTmp = el;
    var isLocal = false;
    while (elTmp && elTmp.nodeType !== 9
        && !(isLocal = elTmp.domBelongToZr
            || (elTmp !== el && elTmp === instance.painterRoot))) {
        elTmp = elTmp.parentNode;
    }
    return isLocal;
}
var FakeGlobalEvent = (function () {
    function FakeGlobalEvent(instance, event) {
        this.stopPropagation = _core_util_js__WEBPACK_IMPORTED_MODULE_1__.noop;
        this.stopImmediatePropagation = _core_util_js__WEBPACK_IMPORTED_MODULE_1__.noop;
        this.preventDefault = _core_util_js__WEBPACK_IMPORTED_MODULE_1__.noop;
        this.type = event.type;
        this.target = this.currentTarget = instance.dom;
        this.pointerType = event.pointerType;
        this.clientX = event.clientX;
        this.clientY = event.clientY;
    }
    return FakeGlobalEvent;
}());
var localDOMHandlers = {
    mousedown: function (event) {
        event = (0,_core_event_js__WEBPACK_IMPORTED_MODULE_2__.normalizeEvent)(this.dom, event);
        this.__mayPointerCapture = [event.zrX, event.zrY];
        this.trigger('mousedown', event);
    },
    mousemove: function (event) {
        event = (0,_core_event_js__WEBPACK_IMPORTED_MODULE_2__.normalizeEvent)(this.dom, event);
        var downPoint = this.__mayPointerCapture;
        if (downPoint && (event.zrX !== downPoint[0] || event.zrY !== downPoint[1])) {
            this.__togglePointerCapture(true);
        }
        this.trigger('mousemove', event);
    },
    mouseup: function (event) {
        event = (0,_core_event_js__WEBPACK_IMPORTED_MODULE_2__.normalizeEvent)(this.dom, event);
        this.__togglePointerCapture(false);
        this.trigger('mouseup', event);
    },
    mouseout: function (event) {
        event = (0,_core_event_js__WEBPACK_IMPORTED_MODULE_2__.normalizeEvent)(this.dom, event);
        var element = event.toElement || event.relatedTarget;
        if (!isLocalEl(this, element)) {
            if (this.__pointerCapturing) {
                event.zrEventControl = 'no_globalout';
            }
            this.trigger('mouseout', event);
        }
    },
    wheel: function (event) {
        wheelEventSupported = true;
        event = (0,_core_event_js__WEBPACK_IMPORTED_MODULE_2__.normalizeEvent)(this.dom, event);
        this.trigger('mousewheel', event);
    },
    mousewheel: function (event) {
        if (wheelEventSupported) {
            return;
        }
        event = (0,_core_event_js__WEBPACK_IMPORTED_MODULE_2__.normalizeEvent)(this.dom, event);
        this.trigger('mousewheel', event);
    },
    touchstart: function (event) {
        event = (0,_core_event_js__WEBPACK_IMPORTED_MODULE_2__.normalizeEvent)(this.dom, event);
        markTouch(event);
        this.__lastTouchMoment = new Date();
        this.handler.processGesture(event, 'start');
        localDOMHandlers.mousemove.call(this, event);
        localDOMHandlers.mousedown.call(this, event);
    },
    touchmove: function (event) {
        event = (0,_core_event_js__WEBPACK_IMPORTED_MODULE_2__.normalizeEvent)(this.dom, event);
        markTouch(event);
        this.handler.processGesture(event, 'change');
        localDOMHandlers.mousemove.call(this, event);
    },
    touchend: function (event) {
        event = (0,_core_event_js__WEBPACK_IMPORTED_MODULE_2__.normalizeEvent)(this.dom, event);
        markTouch(event);
        this.handler.processGesture(event, 'end');
        localDOMHandlers.mouseup.call(this, event);
        if (+new Date() - (+this.__lastTouchMoment) < TOUCH_CLICK_DELAY) {
            localDOMHandlers.click.call(this, event);
        }
    },
    pointerdown: function (event) {
        localDOMHandlers.mousedown.call(this, event);
    },
    pointermove: function (event) {
        if (!isPointerFromTouch(event)) {
            localDOMHandlers.mousemove.call(this, event);
        }
    },
    pointerup: function (event) {
        localDOMHandlers.mouseup.call(this, event);
    },
    pointerout: function (event) {
        if (!isPointerFromTouch(event)) {
            localDOMHandlers.mouseout.call(this, event);
        }
    }
};
_core_util_js__WEBPACK_IMPORTED_MODULE_1__.each(['click', 'dblclick', 'contextmenu'], function (name) {
    localDOMHandlers[name] = function (event) {
        event = (0,_core_event_js__WEBPACK_IMPORTED_MODULE_2__.normalizeEvent)(this.dom, event);
        this.trigger(name, event);
    };
});
var globalDOMHandlers = {
    pointermove: function (event) {
        if (!isPointerFromTouch(event)) {
            globalDOMHandlers.mousemove.call(this, event);
        }
    },
    pointerup: function (event) {
        globalDOMHandlers.mouseup.call(this, event);
    },
    mousemove: function (event) {
        this.trigger('mousemove', event);
    },
    mouseup: function (event) {
        var pointerCaptureReleasing = this.__pointerCapturing;
        this.__togglePointerCapture(false);
        this.trigger('mouseup', event);
        if (pointerCaptureReleasing) {
            event.zrEventControl = 'only_globalout';
            this.trigger('mouseout', event);
        }
    }
};
function mountLocalDOMEventListeners(instance, scope) {
    var domHandlers = scope.domHandlers;
    if (_core_env_js__WEBPACK_IMPORTED_MODULE_0__["default"].pointerEventsSupported) {
        _core_util_js__WEBPACK_IMPORTED_MODULE_1__.each(localNativeListenerNames.pointer, function (nativeEventName) {
            mountSingleDOMEventListener(scope, nativeEventName, function (event) {
                domHandlers[nativeEventName].call(instance, event);
            });
        });
    }
    else {
        if (_core_env_js__WEBPACK_IMPORTED_MODULE_0__["default"].touchEventsSupported) {
            _core_util_js__WEBPACK_IMPORTED_MODULE_1__.each(localNativeListenerNames.touch, function (nativeEventName) {
                mountSingleDOMEventListener(scope, nativeEventName, function (event) {
                    domHandlers[nativeEventName].call(instance, event);
                    setTouchTimer(scope);
                });
            });
        }
        _core_util_js__WEBPACK_IMPORTED_MODULE_1__.each(localNativeListenerNames.mouse, function (nativeEventName) {
            mountSingleDOMEventListener(scope, nativeEventName, function (event) {
                event = (0,_core_event_js__WEBPACK_IMPORTED_MODULE_2__.getNativeEvent)(event);
                if (!scope.touching) {
                    domHandlers[nativeEventName].call(instance, event);
                }
            });
        });
    }
}
function mountGlobalDOMEventListeners(instance, scope) {
    if (_core_env_js__WEBPACK_IMPORTED_MODULE_0__["default"].pointerEventsSupported) {
        _core_util_js__WEBPACK_IMPORTED_MODULE_1__.each(globalNativeListenerNames.pointer, mount);
    }
    else if (!_core_env_js__WEBPACK_IMPORTED_MODULE_0__["default"].touchEventsSupported) {
        _core_util_js__WEBPACK_IMPORTED_MODULE_1__.each(globalNativeListenerNames.mouse, mount);
    }
    function mount(nativeEventName) {
        function nativeEventListener(event) {
            event = (0,_core_event_js__WEBPACK_IMPORTED_MODULE_2__.getNativeEvent)(event);
            if (!isLocalEl(instance, event.target)) {
                event = normalizeGlobalEvent(instance, event);
                scope.domHandlers[nativeEventName].call(instance, event);
            }
        }
        mountSingleDOMEventListener(scope, nativeEventName, nativeEventListener, { capture: true });
    }
}
function mountSingleDOMEventListener(scope, nativeEventName, listener, opt) {
    scope.mounted[nativeEventName] = listener;
    scope.listenerOpts[nativeEventName] = opt;
    (0,_core_event_js__WEBPACK_IMPORTED_MODULE_2__.addEventListener)(scope.domTarget, nativeEventName, listener, opt);
}
function unmountDOMEventListeners(scope) {
    var mounted = scope.mounted;
    for (var nativeEventName in mounted) {
        if (mounted.hasOwnProperty(nativeEventName)) {
            (0,_core_event_js__WEBPACK_IMPORTED_MODULE_2__.removeEventListener)(scope.domTarget, nativeEventName, mounted[nativeEventName], scope.listenerOpts[nativeEventName]);
        }
    }
    scope.mounted = {};
}
var DOMHandlerScope = (function () {
    function DOMHandlerScope(domTarget, domHandlers) {
        this.mounted = {};
        this.listenerOpts = {};
        this.touching = false;
        this.domTarget = domTarget;
        this.domHandlers = domHandlers;
    }
    return DOMHandlerScope;
}());
var HandlerDomProxy = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__extends)(HandlerDomProxy, _super);
    function HandlerDomProxy(dom, painterRoot) {
        var _this = _super.call(this) || this;
        _this.__pointerCapturing = false;
        _this.dom = dom;
        _this.painterRoot = painterRoot;
        _this._localHandlerScope = new DOMHandlerScope(dom, localDOMHandlers);
        if (globalEventSupported) {
            _this._globalHandlerScope = new DOMHandlerScope(document, globalDOMHandlers);
        }
        mountLocalDOMEventListeners(_this, _this._localHandlerScope);
        return _this;
    }
    HandlerDomProxy.prototype.dispose = function () {
        unmountDOMEventListeners(this._localHandlerScope);
        if (globalEventSupported) {
            unmountDOMEventListeners(this._globalHandlerScope);
        }
    };
    HandlerDomProxy.prototype.setCursor = function (cursorStyle) {
        this.dom.style && (this.dom.style.cursor = cursorStyle || 'default');
    };
    HandlerDomProxy.prototype.__togglePointerCapture = function (isPointerCapturing) {
        this.__mayPointerCapture = null;
        if (globalEventSupported
            && ((+this.__pointerCapturing) ^ (+isPointerCapturing))) {
            this.__pointerCapturing = isPointerCapturing;
            var globalHandlerScope = this._globalHandlerScope;
            isPointerCapturing
                ? mountGlobalDOMEventListeners(this, globalHandlerScope)
                : unmountDOMEventListeners(globalHandlerScope);
        }
    };
    return HandlerDomProxy;
}(_core_Eventful_js__WEBPACK_IMPORTED_MODULE_3__["default"]));
/* ESM default export */ __webpack_exports__["default"] = (HandlerDomProxy);


}),
33401: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var _Path_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49678);


var CompoundPath = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(CompoundPath, _super);
    function CompoundPath() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'compound';
        return _this;
    }
    CompoundPath.prototype._updatePathDirty = function () {
        var paths = this.shape.paths;
        var dirtyPath = this.shapeChanged();
        for (var i = 0; i < paths.length; i++) {
            dirtyPath = dirtyPath || paths[i].shapeChanged();
        }
        if (dirtyPath) {
            this.dirtyShape();
        }
    };
    CompoundPath.prototype.beforeBrush = function () {
        this._updatePathDirty();
        var paths = this.shape.paths || [];
        var scale = this.getGlobalScale();
        for (var i = 0; i < paths.length; i++) {
            if (!paths[i].path) {
                paths[i].createPathProxy();
            }
            paths[i].path.setScale(scale[0], scale[1], paths[i].segmentIgnoreThreshold);
        }
    };
    CompoundPath.prototype.buildPath = function (ctx, shape) {
        var paths = shape.paths || [];
        for (var i = 0; i < paths.length; i++) {
            paths[i].buildPath(ctx, paths[i].shape, true);
        }
    };
    CompoundPath.prototype.afterBrush = function () {
        var paths = this.shape.paths || [];
        for (var i = 0; i < paths.length; i++) {
            paths[i].pathUpdated();
        }
    };
    CompoundPath.prototype.getBoundingRect = function () {
        this._updatePathDirty.call(this);
        return _Path_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.getBoundingRect.call(this);
    };
    return CompoundPath;
}(_Path_js__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* ESM default export */ __webpack_exports__["default"] = (CompoundPath);


}),
90635: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DEFAULT_COMMON_ANIMATION_PROPS: function() { return DEFAULT_COMMON_ANIMATION_PROPS; },
  DEFAULT_COMMON_STYLE: function() { return DEFAULT_COMMON_STYLE; }
});
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var _Element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75742);
/* ESM import */var _core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44964);
/* ESM import */var _core_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96585);
/* ESM import */var _constants_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59177);





var STYLE_MAGIC_KEY = '__zr_style_' + Math.round((Math.random() * 10));
var DEFAULT_COMMON_STYLE = {
    shadowBlur: 0,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    shadowColor: '#000',
    opacity: 1,
    blend: 'source-over'
};
var DEFAULT_COMMON_ANIMATION_PROPS = {
    style: {
        shadowBlur: true,
        shadowOffsetX: true,
        shadowOffsetY: true,
        shadowColor: true,
        opacity: true
    }
};
DEFAULT_COMMON_STYLE[STYLE_MAGIC_KEY] = true;
var PRIMARY_STATES_KEYS = ['z', 'z2', 'invisible'];
var PRIMARY_STATES_KEYS_IN_HOVER_LAYER = ['invisible'];
var Displayable = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(Displayable, _super);
    function Displayable(props) {
        return _super.call(this, props) || this;
    }
    Displayable.prototype._init = function (props) {
        var keysArr = (0,_core_util_js__WEBPACK_IMPORTED_MODULE_2__.keys)(props);
        for (var i = 0; i < keysArr.length; i++) {
            var key = keysArr[i];
            if (key === 'style') {
                this.useStyle(props[key]);
            }
            else {
                _super.prototype.attrKV.call(this, key, props[key]);
            }
        }
        if (!this.style) {
            this.useStyle({});
        }
    };
    Displayable.prototype.beforeBrush = function () { };
    Displayable.prototype.afterBrush = function () { };
    Displayable.prototype.innerBeforeBrush = function () { };
    Displayable.prototype.innerAfterBrush = function () { };
    Displayable.prototype.shouldBePainted = function (viewWidth, viewHeight, considerClipPath, considerAncestors) {
        var m = this.transform;
        if (this.ignore
            || this.invisible
            || this.style.opacity === 0
            || (this.culling
                && isDisplayableCulled(this, viewWidth, viewHeight))
            || (m && !m[0] && !m[3])) {
            return false;
        }
        if (considerClipPath && this.__clipPaths) {
            for (var i = 0; i < this.__clipPaths.length; ++i) {
                if (this.__clipPaths[i].isZeroArea()) {
                    return false;
                }
            }
        }
        if (considerAncestors && this.parent) {
            var parent_1 = this.parent;
            while (parent_1) {
                if (parent_1.ignore) {
                    return false;
                }
                parent_1 = parent_1.parent;
            }
        }
        return true;
    };
    Displayable.prototype.contain = function (x, y) {
        return this.rectContain(x, y);
    };
    Displayable.prototype.traverse = function (cb, context) {
        cb.call(context, this);
    };
    Displayable.prototype.rectContain = function (x, y) {
        var coord = this.transformCoordToLocal(x, y);
        var rect = this.getBoundingRect();
        return rect.contain(coord[0], coord[1]);
    };
    Displayable.prototype.getPaintRect = function () {
        var rect = this._paintRect;
        if (!this._paintRect || this.__dirty) {
            var transform = this.transform;
            var elRect = this.getBoundingRect();
            var style = this.style;
            var shadowSize = style.shadowBlur || 0;
            var shadowOffsetX = style.shadowOffsetX || 0;
            var shadowOffsetY = style.shadowOffsetY || 0;
            rect = this._paintRect || (this._paintRect = new _core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_3__["default"](0, 0, 0, 0));
            if (transform) {
                _core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_3__["default"].applyTransform(rect, elRect, transform);
            }
            else {
                rect.copy(elRect);
            }
            if (shadowSize || shadowOffsetX || shadowOffsetY) {
                rect.width += shadowSize * 2 + Math.abs(shadowOffsetX);
                rect.height += shadowSize * 2 + Math.abs(shadowOffsetY);
                rect.x = Math.min(rect.x, rect.x + shadowOffsetX - shadowSize);
                rect.y = Math.min(rect.y, rect.y + shadowOffsetY - shadowSize);
            }
            var tolerance = this.dirtyRectTolerance;
            if (!rect.isZero()) {
                rect.x = Math.floor(rect.x - tolerance);
                rect.y = Math.floor(rect.y - tolerance);
                rect.width = Math.ceil(rect.width + 1 + tolerance * 2);
                rect.height = Math.ceil(rect.height + 1 + tolerance * 2);
            }
        }
        return rect;
    };
    Displayable.prototype.setPrevPaintRect = function (paintRect) {
        if (paintRect) {
            this._prevPaintRect = this._prevPaintRect || new _core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_3__["default"](0, 0, 0, 0);
            this._prevPaintRect.copy(paintRect);
        }
        else {
            this._prevPaintRect = null;
        }
    };
    Displayable.prototype.getPrevPaintRect = function () {
        return this._prevPaintRect;
    };
    Displayable.prototype.animateStyle = function (loop) {
        return this.animate('style', loop);
    };
    Displayable.prototype.updateDuringAnimation = function (targetKey) {
        if (targetKey === 'style') {
            this.dirtyStyle();
        }
        else {
            this.markRedraw();
        }
    };
    Displayable.prototype.attrKV = function (key, value) {
        if (key !== 'style') {
            _super.prototype.attrKV.call(this, key, value);
        }
        else {
            if (!this.style) {
                this.useStyle(value);
            }
            else {
                this.setStyle(value);
            }
        }
    };
    Displayable.prototype.setStyle = function (keyOrObj, value) {
        if (typeof keyOrObj === 'string') {
            this.style[keyOrObj] = value;
        }
        else {
            (0,_core_util_js__WEBPACK_IMPORTED_MODULE_2__.extend)(this.style, keyOrObj);
        }
        this.dirtyStyle();
        return this;
    };
    Displayable.prototype.dirtyStyle = function (notRedraw) {
        if (!notRedraw) {
            this.markRedraw();
        }
        this.__dirty |= _constants_js__WEBPACK_IMPORTED_MODULE_4__.STYLE_CHANGED_BIT;
        if (this._rect) {
            this._rect = null;
        }
    };
    Displayable.prototype.dirty = function () {
        this.dirtyStyle();
    };
    Displayable.prototype.styleChanged = function () {
        return !!(this.__dirty & _constants_js__WEBPACK_IMPORTED_MODULE_4__.STYLE_CHANGED_BIT);
    };
    Displayable.prototype.styleUpdated = function () {
        this.__dirty &= ~_constants_js__WEBPACK_IMPORTED_MODULE_4__.STYLE_CHANGED_BIT;
    };
    Displayable.prototype.createStyle = function (obj) {
        return (0,_core_util_js__WEBPACK_IMPORTED_MODULE_2__.createObject)(DEFAULT_COMMON_STYLE, obj);
    };
    Displayable.prototype.useStyle = function (obj) {
        if (!obj[STYLE_MAGIC_KEY]) {
            obj = this.createStyle(obj);
        }
        if (this.__inHover) {
            this.__hoverStyle = obj;
        }
        else {
            this.style = obj;
        }
        this.dirtyStyle();
    };
    Displayable.prototype.isStyleObject = function (obj) {
        return obj[STYLE_MAGIC_KEY];
    };
    Displayable.prototype._innerSaveToNormal = function (toState) {
        _super.prototype._innerSaveToNormal.call(this, toState);
        var normalState = this._normalState;
        if (toState.style && !normalState.style) {
            normalState.style = this._mergeStyle(this.createStyle(), this.style);
        }
        this._savePrimaryToNormal(toState, normalState, PRIMARY_STATES_KEYS);
    };
    Displayable.prototype._applyStateObj = function (stateName, state, normalState, keepCurrentStates, transition, animationCfg) {
        _super.prototype._applyStateObj.call(this, stateName, state, normalState, keepCurrentStates, transition, animationCfg);
        var needsRestoreToNormal = !(state && keepCurrentStates);
        var targetStyle;
        if (state && state.style) {
            if (transition) {
                if (keepCurrentStates) {
                    targetStyle = state.style;
                }
                else {
                    targetStyle = this._mergeStyle(this.createStyle(), normalState.style);
                    this._mergeStyle(targetStyle, state.style);
                }
            }
            else {
                targetStyle = this._mergeStyle(this.createStyle(), keepCurrentStates ? this.style : normalState.style);
                this._mergeStyle(targetStyle, state.style);
            }
        }
        else if (needsRestoreToNormal) {
            targetStyle = normalState.style;
        }
        if (targetStyle) {
            if (transition) {
                var sourceStyle = this.style;
                this.style = this.createStyle(needsRestoreToNormal ? {} : sourceStyle);
                if (needsRestoreToNormal) {
                    var changedKeys = (0,_core_util_js__WEBPACK_IMPORTED_MODULE_2__.keys)(sourceStyle);
                    for (var i = 0; i < changedKeys.length; i++) {
                        var key = changedKeys[i];
                        if (key in targetStyle) {
                            targetStyle[key] = targetStyle[key];
                            this.style[key] = sourceStyle[key];
                        }
                    }
                }
                var targetKeys = (0,_core_util_js__WEBPACK_IMPORTED_MODULE_2__.keys)(targetStyle);
                for (var i = 0; i < targetKeys.length; i++) {
                    var key = targetKeys[i];
                    this.style[key] = this.style[key];
                }
                this._transitionState(stateName, {
                    style: targetStyle
                }, animationCfg, this.getAnimationStyleProps());
            }
            else {
                this.useStyle(targetStyle);
            }
        }
        var statesKeys = this.__inHover ? PRIMARY_STATES_KEYS_IN_HOVER_LAYER : PRIMARY_STATES_KEYS;
        for (var i = 0; i < statesKeys.length; i++) {
            var key = statesKeys[i];
            if (state && state[key] != null) {
                this[key] = state[key];
            }
            else if (needsRestoreToNormal) {
                if (normalState[key] != null) {
                    this[key] = normalState[key];
                }
            }
        }
    };
    Displayable.prototype._mergeStates = function (states) {
        var mergedState = _super.prototype._mergeStates.call(this, states);
        var mergedStyle;
        for (var i = 0; i < states.length; i++) {
            var state = states[i];
            if (state.style) {
                mergedStyle = mergedStyle || {};
                this._mergeStyle(mergedStyle, state.style);
            }
        }
        if (mergedStyle) {
            mergedState.style = mergedStyle;
        }
        return mergedState;
    };
    Displayable.prototype._mergeStyle = function (targetStyle, sourceStyle) {
        (0,_core_util_js__WEBPACK_IMPORTED_MODULE_2__.extend)(targetStyle, sourceStyle);
        return targetStyle;
    };
    Displayable.prototype.getAnimationStyleProps = function () {
        return DEFAULT_COMMON_ANIMATION_PROPS;
    };
    Displayable.initDefaultProps = (function () {
        var dispProto = Displayable.prototype;
        dispProto.type = 'displayable';
        dispProto.invisible = false;
        dispProto.z = 0;
        dispProto.z2 = 0;
        dispProto.zlevel = 0;
        dispProto.culling = false;
        dispProto.cursor = 'pointer';
        dispProto.rectHover = false;
        dispProto.incremental = false;
        dispProto._rect = null;
        dispProto.dirtyRectTolerance = 0;
        dispProto.__dirty = _constants_js__WEBPACK_IMPORTED_MODULE_4__.REDRAW_BIT | _constants_js__WEBPACK_IMPORTED_MODULE_4__.STYLE_CHANGED_BIT;
    })();
    return Displayable;
}(_Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]));
var tmpRect = new _core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_3__["default"](0, 0, 0, 0);
var viewRect = new _core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_3__["default"](0, 0, 0, 0);
function isDisplayableCulled(el, width, height) {
    tmpRect.copy(el.getBoundingRect());
    if (el.transform) {
        tmpRect.applyTransform(el.transform);
    }
    viewRect.width = width;
    viewRect.height = height;
    return !tmpRect.intersect(viewRect);
}
/* ESM default export */ __webpack_exports__["default"] = (Displayable);


}),
75872: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
var Gradient = (function () {
    function Gradient(colorStops) {
        this.colorStops = colorStops || [];
    }
    Gradient.prototype.addColorStop = function (offset, color) {
        this.colorStops.push({
            offset: offset,
            color: color
        });
    };
    return Gradient;
}());
/* ESM default export */ __webpack_exports__["default"] = (Gradient);


}),
58695: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var _core_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96585);
/* ESM import */var _Element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75742);
/* ESM import */var _core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44964);




var Group = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(Group, _super);
    function Group(opts) {
        var _this = _super.call(this) || this;
        _this.isGroup = true;
        _this._children = [];
        _this.attr(opts);
        return _this;
    }
    Group.prototype.childrenRef = function () {
        return this._children;
    };
    Group.prototype.children = function () {
        return this._children.slice();
    };
    Group.prototype.childAt = function (idx) {
        return this._children[idx];
    };
    Group.prototype.childOfName = function (name) {
        var children = this._children;
        for (var i = 0; i < children.length; i++) {
            if (children[i].name === name) {
                return children[i];
            }
        }
    };
    Group.prototype.childCount = function () {
        return this._children.length;
    };
    Group.prototype.add = function (child) {
        if (child) {
            if (child !== this && child.parent !== this) {
                this._children.push(child);
                this._doAdd(child);
            }
            if (false) {}
        }
        return this;
    };
    Group.prototype.addBefore = function (child, nextSibling) {
        if (child && child !== this && child.parent !== this
            && nextSibling && nextSibling.parent === this) {
            var children = this._children;
            var idx = children.indexOf(nextSibling);
            if (idx >= 0) {
                children.splice(idx, 0, child);
                this._doAdd(child);
            }
        }
        return this;
    };
    Group.prototype.replace = function (oldChild, newChild) {
        var idx = _core_util_js__WEBPACK_IMPORTED_MODULE_2__.indexOf(this._children, oldChild);
        if (idx >= 0) {
            this.replaceAt(newChild, idx);
        }
        return this;
    };
    Group.prototype.replaceAt = function (child, index) {
        var children = this._children;
        var old = children[index];
        if (child && child !== this && child.parent !== this && child !== old) {
            children[index] = child;
            old.parent = null;
            var zr = this.__zr;
            if (zr) {
                old.removeSelfFromZr(zr);
            }
            this._doAdd(child);
        }
        return this;
    };
    Group.prototype._doAdd = function (child) {
        if (child.parent) {
            child.parent.remove(child);
        }
        child.parent = this;
        var zr = this.__zr;
        if (zr && zr !== child.__zr) {
            child.addSelfToZr(zr);
        }
        zr && zr.refresh();
    };
    Group.prototype.remove = function (child) {
        var zr = this.__zr;
        var children = this._children;
        var idx = _core_util_js__WEBPACK_IMPORTED_MODULE_2__.indexOf(children, child);
        if (idx < 0) {
            return this;
        }
        children.splice(idx, 1);
        child.parent = null;
        if (zr) {
            child.removeSelfFromZr(zr);
        }
        zr && zr.refresh();
        return this;
    };
    Group.prototype.removeAll = function () {
        var children = this._children;
        var zr = this.__zr;
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            if (zr) {
                child.removeSelfFromZr(zr);
            }
            child.parent = null;
        }
        children.length = 0;
        return this;
    };
    Group.prototype.eachChild = function (cb, context) {
        var children = this._children;
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            cb.call(context, child, i);
        }
        return this;
    };
    Group.prototype.traverse = function (cb, context) {
        for (var i = 0; i < this._children.length; i++) {
            var child = this._children[i];
            var stopped = cb.call(context, child);
            if (child.isGroup && !stopped) {
                child.traverse(cb, context);
            }
        }
        return this;
    };
    Group.prototype.addSelfToZr = function (zr) {
        _super.prototype.addSelfToZr.call(this, zr);
        for (var i = 0; i < this._children.length; i++) {
            var child = this._children[i];
            child.addSelfToZr(zr);
        }
    };
    Group.prototype.removeSelfFromZr = function (zr) {
        _super.prototype.removeSelfFromZr.call(this, zr);
        for (var i = 0; i < this._children.length; i++) {
            var child = this._children[i];
            child.removeSelfFromZr(zr);
        }
    };
    Group.prototype.getBoundingRect = function (includeChildren) {
        var tmpRect = new _core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_3__["default"](0, 0, 0, 0);
        var children = includeChildren || this._children;
        var tmpMat = [];
        var rect = null;
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            if (child.ignore || child.invisible) {
                continue;
            }
            var childRect = child.getBoundingRect();
            var transform = child.getLocalTransform(tmpMat);
            if (transform) {
                _core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_3__["default"].applyTransform(tmpRect, childRect, transform);
                rect = rect || tmpRect.clone();
                rect.union(tmpRect);
            }
            else {
                rect = rect || childRect.clone();
                rect.union(childRect);
            }
        }
        return rect || tmpRect;
    };
    return Group;
}(_Element_js__WEBPACK_IMPORTED_MODULE_0__["default"]));
Group.prototype.type = 'group';
/* ESM default export */ __webpack_exports__["default"] = (Group);


}),
31386: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DEFAULT_IMAGE_ANIMATION_PROPS: function() { return DEFAULT_IMAGE_ANIMATION_PROPS; },
  DEFAULT_IMAGE_STYLE: function() { return DEFAULT_IMAGE_STYLE; }
});
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12012);
/* ESM import */var _Displayable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90635);
/* ESM import */var _core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44964);
/* ESM import */var _core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96585);




var DEFAULT_IMAGE_STYLE = (0,_core_util_js__WEBPACK_IMPORTED_MODULE_0__.defaults)({
    x: 0,
    y: 0
}, _Displayable_js__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_COMMON_STYLE);
var DEFAULT_IMAGE_ANIMATION_PROPS = {
    style: (0,_core_util_js__WEBPACK_IMPORTED_MODULE_0__.defaults)({
        x: true,
        y: true,
        width: true,
        height: true,
        sx: true,
        sy: true,
        sWidth: true,
        sHeight: true
    }, _Displayable_js__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_COMMON_ANIMATION_PROPS.style)
};
function isImageLike(source) {
    return !!(source
        && typeof source !== 'string'
        && source.width && source.height);
}
var ZRImage = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(ZRImage, _super);
    function ZRImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZRImage.prototype.createStyle = function (obj) {
        return (0,_core_util_js__WEBPACK_IMPORTED_MODULE_0__.createObject)(DEFAULT_IMAGE_STYLE, obj);
    };
    ZRImage.prototype._getSize = function (dim) {
        var style = this.style;
        var size = style[dim];
        if (size != null) {
            return size;
        }
        var imageSource = isImageLike(style.image)
            ? style.image : this.__image;
        if (!imageSource) {
            return 0;
        }
        var otherDim = dim === 'width' ? 'height' : 'width';
        var otherDimSize = style[otherDim];
        if (otherDimSize == null) {
            return imageSource[dim];
        }
        else {
            return imageSource[dim] / imageSource[otherDim] * otherDimSize;
        }
    };
    ZRImage.prototype.getWidth = function () {
        return this._getSize('width');
    };
    ZRImage.prototype.getHeight = function () {
        return this._getSize('height');
    };
    ZRImage.prototype.getAnimationStyleProps = function () {
        return DEFAULT_IMAGE_ANIMATION_PROPS;
    };
    ZRImage.prototype.getBoundingRect = function () {
        var style = this.style;
        if (!this._rect) {
            this._rect = new _core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_3__["default"](style.x || 0, style.y || 0, this.getWidth(), this.getHeight());
        }
        return this._rect;
    };
    return ZRImage;
}(_Displayable_js__WEBPACK_IMPORTED_MODULE_1__["default"]));
ZRImage.prototype.type = 'image';
/* ESM default export */ __webpack_exports__["default"] = (ZRImage);


}),
99057: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var _Displayable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90635);
/* ESM import */var _core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44964);



var m = [];
var IncrementalDisplayable = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(IncrementalDisplayable, _super);
    function IncrementalDisplayable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.notClear = true;
        _this.incremental = true;
        _this._displayables = [];
        _this._temporaryDisplayables = [];
        _this._cursor = 0;
        return _this;
    }
    IncrementalDisplayable.prototype.traverse = function (cb, context) {
        cb.call(context, this);
    };
    IncrementalDisplayable.prototype.useStyle = function () {
        this.style = {};
    };
    IncrementalDisplayable.prototype.getCursor = function () {
        return this._cursor;
    };
    IncrementalDisplayable.prototype.innerAfterBrush = function () {
        this._cursor = this._displayables.length;
    };
    IncrementalDisplayable.prototype.clearDisplaybles = function () {
        this._displayables = [];
        this._temporaryDisplayables = [];
        this._cursor = 0;
        this.markRedraw();
        this.notClear = false;
    };
    IncrementalDisplayable.prototype.clearTemporalDisplayables = function () {
        this._temporaryDisplayables = [];
    };
    IncrementalDisplayable.prototype.addDisplayable = function (displayable, notPersistent) {
        if (notPersistent) {
            this._temporaryDisplayables.push(displayable);
        }
        else {
            this._displayables.push(displayable);
        }
        this.markRedraw();
    };
    IncrementalDisplayable.prototype.addDisplayables = function (displayables, notPersistent) {
        notPersistent = notPersistent || false;
        for (var i = 0; i < displayables.length; i++) {
            this.addDisplayable(displayables[i], notPersistent);
        }
    };
    IncrementalDisplayable.prototype.getDisplayables = function () {
        return this._displayables;
    };
    IncrementalDisplayable.prototype.getTemporalDisplayables = function () {
        return this._temporaryDisplayables;
    };
    IncrementalDisplayable.prototype.eachPendingDisplayable = function (cb) {
        for (var i = this._cursor; i < this._displayables.length; i++) {
            cb && cb(this._displayables[i]);
        }
        for (var i = 0; i < this._temporaryDisplayables.length; i++) {
            cb && cb(this._temporaryDisplayables[i]);
        }
    };
    IncrementalDisplayable.prototype.update = function () {
        this.updateTransform();
        for (var i = this._cursor; i < this._displayables.length; i++) {
            var displayable = this._displayables[i];
            displayable.parent = this;
            displayable.update();
            displayable.parent = null;
        }
        for (var i = 0; i < this._temporaryDisplayables.length; i++) {
            var displayable = this._temporaryDisplayables[i];
            displayable.parent = this;
            displayable.update();
            displayable.parent = null;
        }
    };
    IncrementalDisplayable.prototype.getBoundingRect = function () {
        if (!this._rect) {
            var rect = new _core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_2__["default"](Infinity, Infinity, -Infinity, -Infinity);
            for (var i = 0; i < this._displayables.length; i++) {
                var displayable = this._displayables[i];
                var childRect = displayable.getBoundingRect().clone();
                if (displayable.needLocalTransform()) {
                    childRect.applyTransform(displayable.getLocalTransform(m));
                }
                rect.union(childRect);
            }
            this._rect = rect;
        }
        return this._rect;
    };
    IncrementalDisplayable.prototype.contain = function (x, y) {
        var localPos = this.transformCoordToLocal(x, y);
        var rect = this.getBoundingRect();
        if (rect.contain(localPos[0], localPos[1])) {
            for (var i = 0; i < this._displayables.length; i++) {
                var displayable = this._displayables[i];
                if (displayable.contain(x, y)) {
                    return true;
                }
            }
        }
        return false;
    };
    return IncrementalDisplayable;
}(_Displayable_js__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* ESM default export */ __webpack_exports__["default"] = (IncrementalDisplayable);


}),
71756: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var _Gradient_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75872);


var LinearGradient = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(LinearGradient, _super);
    function LinearGradient(x, y, x2, y2, colorStops, globalCoord) {
        var _this = _super.call(this, colorStops) || this;
        _this.x = x == null ? 0 : x;
        _this.y = y == null ? 0 : y;
        _this.x2 = x2 == null ? 1 : x2;
        _this.y2 = y2 == null ? 0 : y2;
        _this.type = 'linear';
        _this.global = globalCoord || false;
        return _this;
    }
    return LinearGradient;
}(_Gradient_js__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* ESM default export */ __webpack_exports__["default"] = (LinearGradient);
;


}),
49678: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  DEFAULT_PATH_STYLE: function() { return /* binding */ DEFAULT_PATH_STYLE; },
  "default": function() { return /* binding */ graphic_Path; },
  DEFAULT_PATH_ANIMATION_PROPS: function() { return /* binding */ DEFAULT_PATH_ANIMATION_PROPS; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(12012);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Displayable.js
var Displayable = __webpack_require__(90635);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/PathProxy.js
var PathProxy = __webpack_require__(6535);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/contain/line.js
var line = __webpack_require__(40343);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/curve.js
var curve = __webpack_require__(97566);
;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/contain/cubic.js

function containStroke(x0, y0, x1, y1, x2, y2, x3, y3, lineWidth, x, y) {
    if (lineWidth === 0) {
        return false;
    }
    var _l = lineWidth;
    if ((y > y0 + _l && y > y1 + _l && y > y2 + _l && y > y3 + _l)
        || (y < y0 - _l && y < y1 - _l && y < y2 - _l && y < y3 - _l)
        || (x > x0 + _l && x > x1 + _l && x > x2 + _l && x > x3 + _l)
        || (x < x0 - _l && x < x1 - _l && x < x2 - _l && x < x3 - _l)) {
        return false;
    }
    var d = curve.cubicProjectPoint(x0, y0, x1, y1, x2, y2, x3, y3, x, y, null);
    return d <= _l / 2;
}

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/contain/quadratic.js
var quadratic = __webpack_require__(37186);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/contain/util.js
var util = __webpack_require__(29662);
;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/contain/arc.js

var PI2 = Math.PI * 2;
function arc_containStroke(cx, cy, r, startAngle, endAngle, anticlockwise, lineWidth, x, y) {
    if (lineWidth === 0) {
        return false;
    }
    var _l = lineWidth;
    x -= cx;
    y -= cy;
    var d = Math.sqrt(x * x + y * y);
    if ((d - _l > r) || (d + _l < r)) {
        return false;
    }
    if (Math.abs(startAngle - endAngle) % PI2 < 1e-4) {
        return true;
    }
    if (anticlockwise) {
        var tmp = startAngle;
        startAngle = (0,util.normalizeRadian)(endAngle);
        endAngle = (0,util.normalizeRadian)(tmp);
    }
    else {
        startAngle = (0,util.normalizeRadian)(startAngle);
        endAngle = (0,util.normalizeRadian)(endAngle);
    }
    if (startAngle > endAngle) {
        endAngle += PI2;
    }
    var angle = Math.atan2(y, x);
    if (angle < 0) {
        angle += PI2;
    }
    return (angle >= startAngle && angle <= endAngle)
        || (angle + PI2 >= startAngle && angle + PI2 <= endAngle);
}

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/contain/windingLine.js
var windingLine = __webpack_require__(93349);
;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/contain/path.js







var CMD = PathProxy["default"].CMD;
var path_PI2 = Math.PI * 2;
var EPSILON = 1e-4;
function isAroundEqual(a, b) {
    return Math.abs(a - b) < EPSILON;
}
var roots = [-1, -1, -1];
var extrema = [-1, -1];
function swapExtrema() {
    var tmp = extrema[0];
    extrema[0] = extrema[1];
    extrema[1] = tmp;
}
function windingCubic(x0, y0, x1, y1, x2, y2, x3, y3, x, y) {
    if ((y > y0 && y > y1 && y > y2 && y > y3)
        || (y < y0 && y < y1 && y < y2 && y < y3)) {
        return 0;
    }
    var nRoots = curve.cubicRootAt(y0, y1, y2, y3, y, roots);
    if (nRoots === 0) {
        return 0;
    }
    else {
        var w = 0;
        var nExtrema = -1;
        var y0_ = void 0;
        var y1_ = void 0;
        for (var i = 0; i < nRoots; i++) {
            var t = roots[i];
            var unit = (t === 0 || t === 1) ? 0.5 : 1;
            var x_ = curve.cubicAt(x0, x1, x2, x3, t);
            if (x_ < x) {
                continue;
            }
            if (nExtrema < 0) {
                nExtrema = curve.cubicExtrema(y0, y1, y2, y3, extrema);
                if (extrema[1] < extrema[0] && nExtrema > 1) {
                    swapExtrema();
                }
                y0_ = curve.cubicAt(y0, y1, y2, y3, extrema[0]);
                if (nExtrema > 1) {
                    y1_ = curve.cubicAt(y0, y1, y2, y3, extrema[1]);
                }
            }
            if (nExtrema === 2) {
                if (t < extrema[0]) {
                    w += y0_ < y0 ? unit : -unit;
                }
                else if (t < extrema[1]) {
                    w += y1_ < y0_ ? unit : -unit;
                }
                else {
                    w += y3 < y1_ ? unit : -unit;
                }
            }
            else {
                if (t < extrema[0]) {
                    w += y0_ < y0 ? unit : -unit;
                }
                else {
                    w += y3 < y0_ ? unit : -unit;
                }
            }
        }
        return w;
    }
}
function windingQuadratic(x0, y0, x1, y1, x2, y2, x, y) {
    if ((y > y0 && y > y1 && y > y2)
        || (y < y0 && y < y1 && y < y2)) {
        return 0;
    }
    var nRoots = curve.quadraticRootAt(y0, y1, y2, y, roots);
    if (nRoots === 0) {
        return 0;
    }
    else {
        var t = curve.quadraticExtremum(y0, y1, y2);
        if (t >= 0 && t <= 1) {
            var w = 0;
            var y_ = curve.quadraticAt(y0, y1, y2, t);
            for (var i = 0; i < nRoots; i++) {
                var unit = (roots[i] === 0 || roots[i] === 1) ? 0.5 : 1;
                var x_ = curve.quadraticAt(x0, x1, x2, roots[i]);
                if (x_ < x) {
                    continue;
                }
                if (roots[i] < t) {
                    w += y_ < y0 ? unit : -unit;
                }
                else {
                    w += y2 < y_ ? unit : -unit;
                }
            }
            return w;
        }
        else {
            var unit = (roots[0] === 0 || roots[0] === 1) ? 0.5 : 1;
            var x_ = curve.quadraticAt(x0, x1, x2, roots[0]);
            if (x_ < x) {
                return 0;
            }
            return y2 < y0 ? unit : -unit;
        }
    }
}
function windingArc(cx, cy, r, startAngle, endAngle, anticlockwise, x, y) {
    y -= cy;
    if (y > r || y < -r) {
        return 0;
    }
    var tmp = Math.sqrt(r * r - y * y);
    roots[0] = -tmp;
    roots[1] = tmp;
    var dTheta = Math.abs(startAngle - endAngle);
    if (dTheta < 1e-4) {
        return 0;
    }
    if (dTheta >= path_PI2 - 1e-4) {
        startAngle = 0;
        endAngle = path_PI2;
        var dir = anticlockwise ? 1 : -1;
        if (x >= roots[0] + cx && x <= roots[1] + cx) {
            return dir;
        }
        else {
            return 0;
        }
    }
    if (startAngle > endAngle) {
        var tmp_1 = startAngle;
        startAngle = endAngle;
        endAngle = tmp_1;
    }
    if (startAngle < 0) {
        startAngle += path_PI2;
        endAngle += path_PI2;
    }
    var w = 0;
    for (var i = 0; i < 2; i++) {
        var x_ = roots[i];
        if (x_ + cx > x) {
            var angle = Math.atan2(y, x_);
            var dir = anticlockwise ? 1 : -1;
            if (angle < 0) {
                angle = path_PI2 + angle;
            }
            if ((angle >= startAngle && angle <= endAngle)
                || (angle + path_PI2 >= startAngle && angle + path_PI2 <= endAngle)) {
                if (angle > Math.PI / 2 && angle < Math.PI * 1.5) {
                    dir = -dir;
                }
                w += dir;
            }
        }
    }
    return w;
}
function containPath(path, lineWidth, isStroke, x, y) {
    var data = path.data;
    var len = path.len();
    var w = 0;
    var xi = 0;
    var yi = 0;
    var x0 = 0;
    var y0 = 0;
    var x1;
    var y1;
    for (var i = 0; i < len;) {
        var cmd = data[i++];
        var isFirst = i === 1;
        if (cmd === CMD.M && i > 1) {
            if (!isStroke) {
                w += (0,windingLine["default"])(xi, yi, x0, y0, x, y);
            }
        }
        if (isFirst) {
            xi = data[i];
            yi = data[i + 1];
            x0 = xi;
            y0 = yi;
        }
        switch (cmd) {
            case CMD.M:
                x0 = data[i++];
                y0 = data[i++];
                xi = x0;
                yi = y0;
                break;
            case CMD.L:
                if (isStroke) {
                    if (line.containStroke(xi, yi, data[i], data[i + 1], lineWidth, x, y)) {
                        return true;
                    }
                }
                else {
                    w += (0,windingLine["default"])(xi, yi, data[i], data[i + 1], x, y) || 0;
                }
                xi = data[i++];
                yi = data[i++];
                break;
            case CMD.C:
                if (isStroke) {
                    if (containStroke(xi, yi, data[i++], data[i++], data[i++], data[i++], data[i], data[i + 1], lineWidth, x, y)) {
                        return true;
                    }
                }
                else {
                    w += windingCubic(xi, yi, data[i++], data[i++], data[i++], data[i++], data[i], data[i + 1], x, y) || 0;
                }
                xi = data[i++];
                yi = data[i++];
                break;
            case CMD.Q:
                if (isStroke) {
                    if (quadratic.containStroke(xi, yi, data[i++], data[i++], data[i], data[i + 1], lineWidth, x, y)) {
                        return true;
                    }
                }
                else {
                    w += windingQuadratic(xi, yi, data[i++], data[i++], data[i], data[i + 1], x, y) || 0;
                }
                xi = data[i++];
                yi = data[i++];
                break;
            case CMD.A:
                var cx = data[i++];
                var cy = data[i++];
                var rx = data[i++];
                var ry = data[i++];
                var theta = data[i++];
                var dTheta = data[i++];
                i += 1;
                var anticlockwise = !!(1 - data[i++]);
                x1 = Math.cos(theta) * rx + cx;
                y1 = Math.sin(theta) * ry + cy;
                if (!isFirst) {
                    w += (0,windingLine["default"])(xi, yi, x1, y1, x, y);
                }
                else {
                    x0 = x1;
                    y0 = y1;
                }
                var _x = (x - cx) * ry / rx + cx;
                if (isStroke) {
                    if (arc_containStroke(cx, cy, ry, theta, theta + dTheta, anticlockwise, lineWidth, _x, y)) {
                        return true;
                    }
                }
                else {
                    w += windingArc(cx, cy, ry, theta, theta + dTheta, anticlockwise, _x, y);
                }
                xi = Math.cos(theta + dTheta) * rx + cx;
                yi = Math.sin(theta + dTheta) * ry + cy;
                break;
            case CMD.R:
                x0 = xi = data[i++];
                y0 = yi = data[i++];
                var width = data[i++];
                var height = data[i++];
                x1 = x0 + width;
                y1 = y0 + height;
                if (isStroke) {
                    if (line.containStroke(x0, y0, x1, y0, lineWidth, x, y)
                        || line.containStroke(x1, y0, x1, y1, lineWidth, x, y)
                        || line.containStroke(x1, y1, x0, y1, lineWidth, x, y)
                        || line.containStroke(x0, y1, x0, y0, lineWidth, x, y)) {
                        return true;
                    }
                }
                else {
                    w += (0,windingLine["default"])(x1, y0, x1, y1, x, y);
                    w += (0,windingLine["default"])(x0, y1, x0, y0, x, y);
                }
                break;
            case CMD.Z:
                if (isStroke) {
                    if (line.containStroke(xi, yi, x0, y0, lineWidth, x, y)) {
                        return true;
                    }
                }
                else {
                    w += (0,windingLine["default"])(xi, yi, x0, y0, x, y);
                }
                xi = x0;
                yi = y0;
                break;
        }
    }
    if (!isStroke && !isAroundEqual(yi, y0)) {
        w += (0,windingLine["default"])(xi, yi, x0, y0, x, y) || 0;
    }
    return w !== 0;
}
function contain(pathProxy, x, y) {
    return containPath(pathProxy, 0, false, x, y);
}
function path_containStroke(pathProxy, lineWidth, x, y) {
    return containPath(pathProxy, lineWidth, true, x, y);
}

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js
var core_util = __webpack_require__(96585);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/tool/color.js
var color = __webpack_require__(67375);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/config.js
var config = __webpack_require__(8473);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/constants.js
var constants = __webpack_require__(59177);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/Transformable.js
var Transformable = __webpack_require__(9757);
;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Path.js









var DEFAULT_PATH_STYLE = (0,core_util.defaults)({
    fill: '#000',
    stroke: null,
    strokePercent: 1,
    fillOpacity: 1,
    strokeOpacity: 1,
    lineDashOffset: 0,
    lineWidth: 1,
    lineCap: 'butt',
    miterLimit: 10,
    strokeNoScale: false,
    strokeFirst: false
}, Displayable.DEFAULT_COMMON_STYLE);
var DEFAULT_PATH_ANIMATION_PROPS = {
    style: (0,core_util.defaults)({
        fill: true,
        stroke: true,
        strokePercent: true,
        fillOpacity: true,
        strokeOpacity: true,
        lineDashOffset: true,
        lineWidth: true,
        miterLimit: true
    }, Displayable.DEFAULT_COMMON_ANIMATION_PROPS.style)
};
var pathCopyParams = Transformable.TRANSFORMABLE_PROPS.concat(['invisible',
    'culling', 'z', 'z2', 'zlevel', 'parent'
]);
var Path_Path = (function (_super) {
    (0,tslib_es6.__extends)(Path, _super);
    function Path(opts) {
        return _super.call(this, opts) || this;
    }
    Path.prototype.update = function () {
        var _this = this;
        _super.prototype.update.call(this);
        var style = this.style;
        if (style.decal) {
            var decalEl = this._decalEl = this._decalEl || new Path();
            if (decalEl.buildPath === Path.prototype.buildPath) {
                decalEl.buildPath = function (ctx) {
                    _this.buildPath(ctx, _this.shape);
                };
            }
            decalEl.silent = true;
            var decalElStyle = decalEl.style;
            for (var key in style) {
                if (decalElStyle[key] !== style[key]) {
                    decalElStyle[key] = style[key];
                }
            }
            decalElStyle.fill = style.fill ? style.decal : null;
            decalElStyle.decal = null;
            decalElStyle.shadowColor = null;
            style.strokeFirst && (decalElStyle.stroke = null);
            for (var i = 0; i < pathCopyParams.length; ++i) {
                decalEl[pathCopyParams[i]] = this[pathCopyParams[i]];
            }
            decalEl.__dirty |= constants.REDRAW_BIT;
        }
        else if (this._decalEl) {
            this._decalEl = null;
        }
    };
    Path.prototype.getDecalElement = function () {
        return this._decalEl;
    };
    Path.prototype._init = function (props) {
        var keysArr = (0,core_util.keys)(props);
        this.shape = this.getDefaultShape();
        var defaultStyle = this.getDefaultStyle();
        if (defaultStyle) {
            this.useStyle(defaultStyle);
        }
        for (var i = 0; i < keysArr.length; i++) {
            var key = keysArr[i];
            var value = props[key];
            if (key === 'style') {
                if (!this.style) {
                    this.useStyle(value);
                }
                else {
                    (0,core_util.extend)(this.style, value);
                }
            }
            else if (key === 'shape') {
                (0,core_util.extend)(this.shape, value);
            }
            else {
                _super.prototype.attrKV.call(this, key, value);
            }
        }
        if (!this.style) {
            this.useStyle({});
        }
    };
    Path.prototype.getDefaultStyle = function () {
        return null;
    };
    Path.prototype.getDefaultShape = function () {
        return {};
    };
    Path.prototype.canBeInsideText = function () {
        return this.hasFill();
    };
    Path.prototype.getInsideTextFill = function () {
        var pathFill = this.style.fill;
        if (pathFill !== 'none') {
            if ((0,core_util.isString)(pathFill)) {
                var fillLum = (0,color.lum)(pathFill, 0);
                if (fillLum > 0.5) {
                    return config.DARK_LABEL_COLOR;
                }
                else if (fillLum > 0.2) {
                    return config.LIGHTER_LABEL_COLOR;
                }
                return config.LIGHT_LABEL_COLOR;
            }
            else if (pathFill) {
                return config.LIGHT_LABEL_COLOR;
            }
        }
        return config.DARK_LABEL_COLOR;
    };
    Path.prototype.getInsideTextStroke = function (textFill) {
        var pathFill = this.style.fill;
        if ((0,core_util.isString)(pathFill)) {
            var zr = this.__zr;
            var isDarkMode = !!(zr && zr.isDarkMode());
            var isDarkLabel = (0,color.lum)(textFill, 0) < config.DARK_MODE_THRESHOLD;
            if (isDarkMode === isDarkLabel) {
                return pathFill;
            }
        }
    };
    Path.prototype.buildPath = function (ctx, shapeCfg, inBatch) { };
    Path.prototype.pathUpdated = function () {
        this.__dirty &= ~constants.SHAPE_CHANGED_BIT;
    };
    Path.prototype.getUpdatedPathProxy = function (inBatch) {
        !this.path && this.createPathProxy();
        this.path.beginPath();
        this.buildPath(this.path, this.shape, inBatch);
        return this.path;
    };
    Path.prototype.createPathProxy = function () {
        this.path = new PathProxy["default"](false);
    };
    Path.prototype.hasStroke = function () {
        var style = this.style;
        var stroke = style.stroke;
        return !(stroke == null || stroke === 'none' || !(style.lineWidth > 0));
    };
    Path.prototype.hasFill = function () {
        var style = this.style;
        var fill = style.fill;
        return fill != null && fill !== 'none';
    };
    Path.prototype.getBoundingRect = function () {
        var rect = this._rect;
        var style = this.style;
        var needsUpdateRect = !rect;
        if (needsUpdateRect) {
            var firstInvoke = false;
            if (!this.path) {
                firstInvoke = true;
                this.createPathProxy();
            }
            var path = this.path;
            if (firstInvoke || (this.__dirty & constants.SHAPE_CHANGED_BIT)) {
                path.beginPath();
                this.buildPath(path, this.shape, false);
                this.pathUpdated();
            }
            rect = path.getBoundingRect();
        }
        this._rect = rect;
        if (this.hasStroke() && this.path && this.path.len() > 0) {
            var rectStroke = this._rectStroke || (this._rectStroke = rect.clone());
            if (this.__dirty || needsUpdateRect) {
                rectStroke.copy(rect);
                var lineScale = style.strokeNoScale ? this.getLineScale() : 1;
                var w = style.lineWidth;
                if (!this.hasFill()) {
                    var strokeContainThreshold = this.strokeContainThreshold;
                    w = Math.max(w, strokeContainThreshold == null ? 4 : strokeContainThreshold);
                }
                if (lineScale > 1e-10) {
                    rectStroke.width += w / lineScale;
                    rectStroke.height += w / lineScale;
                    rectStroke.x -= w / lineScale / 2;
                    rectStroke.y -= w / lineScale / 2;
                }
            }
            return rectStroke;
        }
        return rect;
    };
    Path.prototype.contain = function (x, y) {
        var localPos = this.transformCoordToLocal(x, y);
        var rect = this.getBoundingRect();
        var style = this.style;
        x = localPos[0];
        y = localPos[1];
        if (rect.contain(x, y)) {
            var pathProxy = this.path;
            if (this.hasStroke()) {
                var lineWidth = style.lineWidth;
                var lineScale = style.strokeNoScale ? this.getLineScale() : 1;
                if (lineScale > 1e-10) {
                    if (!this.hasFill()) {
                        lineWidth = Math.max(lineWidth, this.strokeContainThreshold);
                    }
                    if (path_containStroke(pathProxy, lineWidth / lineScale, x, y)) {
                        return true;
                    }
                }
            }
            if (this.hasFill()) {
                return contain(pathProxy, x, y);
            }
        }
        return false;
    };
    Path.prototype.dirtyShape = function () {
        this.__dirty |= constants.SHAPE_CHANGED_BIT;
        if (this._rect) {
            this._rect = null;
        }
        if (this._decalEl) {
            this._decalEl.dirtyShape();
        }
        this.markRedraw();
    };
    Path.prototype.dirty = function () {
        this.dirtyStyle();
        this.dirtyShape();
    };
    Path.prototype.animateShape = function (loop) {
        return this.animate('shape', loop);
    };
    Path.prototype.updateDuringAnimation = function (targetKey) {
        if (targetKey === 'style') {
            this.dirtyStyle();
        }
        else if (targetKey === 'shape') {
            this.dirtyShape();
        }
        else {
            this.markRedraw();
        }
    };
    Path.prototype.attrKV = function (key, value) {
        if (key === 'shape') {
            this.setShape(value);
        }
        else {
            _super.prototype.attrKV.call(this, key, value);
        }
    };
    Path.prototype.setShape = function (keyOrObj, value) {
        var shape = this.shape;
        if (!shape) {
            shape = this.shape = {};
        }
        if (typeof keyOrObj === 'string') {
            shape[keyOrObj] = value;
        }
        else {
            (0,core_util.extend)(shape, keyOrObj);
        }
        this.dirtyShape();
        return this;
    };
    Path.prototype.shapeChanged = function () {
        return !!(this.__dirty & constants.SHAPE_CHANGED_BIT);
    };
    Path.prototype.createStyle = function (obj) {
        return (0,core_util.createObject)(DEFAULT_PATH_STYLE, obj);
    };
    Path.prototype._innerSaveToNormal = function (toState) {
        _super.prototype._innerSaveToNormal.call(this, toState);
        var normalState = this._normalState;
        if (toState.shape && !normalState.shape) {
            normalState.shape = (0,core_util.extend)({}, this.shape);
        }
    };
    Path.prototype._applyStateObj = function (stateName, state, normalState, keepCurrentStates, transition, animationCfg) {
        _super.prototype._applyStateObj.call(this, stateName, state, normalState, keepCurrentStates, transition, animationCfg);
        var needsRestoreToNormal = !(state && keepCurrentStates);
        var targetShape;
        if (state && state.shape) {
            if (transition) {
                if (keepCurrentStates) {
                    targetShape = state.shape;
                }
                else {
                    targetShape = (0,core_util.extend)({}, normalState.shape);
                    (0,core_util.extend)(targetShape, state.shape);
                }
            }
            else {
                targetShape = (0,core_util.extend)({}, keepCurrentStates ? this.shape : normalState.shape);
                (0,core_util.extend)(targetShape, state.shape);
            }
        }
        else if (needsRestoreToNormal) {
            targetShape = normalState.shape;
        }
        if (targetShape) {
            if (transition) {
                this.shape = (0,core_util.extend)({}, this.shape);
                var targetShapePrimaryProps = {};
                var shapeKeys = (0,core_util.keys)(targetShape);
                for (var i = 0; i < shapeKeys.length; i++) {
                    var key = shapeKeys[i];
                    if (typeof targetShape[key] === 'object') {
                        this.shape[key] = targetShape[key];
                    }
                    else {
                        targetShapePrimaryProps[key] = targetShape[key];
                    }
                }
                this._transitionState(stateName, {
                    shape: targetShapePrimaryProps
                }, animationCfg);
            }
            else {
                this.shape = targetShape;
                this.dirtyShape();
            }
        }
    };
    Path.prototype._mergeStates = function (states) {
        var mergedState = _super.prototype._mergeStates.call(this, states);
        var mergedShape;
        for (var i = 0; i < states.length; i++) {
            var state = states[i];
            if (state.shape) {
                mergedShape = mergedShape || {};
                this._mergeStyle(mergedShape, state.shape);
            }
        }
        if (mergedShape) {
            mergedState.shape = mergedShape;
        }
        return mergedState;
    };
    Path.prototype.getAnimationStyleProps = function () {
        return DEFAULT_PATH_ANIMATION_PROPS;
    };
    Path.prototype.isZeroArea = function () {
        return false;
    };
    Path.extend = function (defaultProps) {
        var Sub = (function (_super) {
            (0,tslib_es6.__extends)(Sub, _super);
            function Sub(opts) {
                var _this = _super.call(this, opts) || this;
                defaultProps.init && defaultProps.init.call(_this, opts);
                return _this;
            }
            Sub.prototype.getDefaultStyle = function () {
                return (0,core_util.clone)(defaultProps.style);
            };
            Sub.prototype.getDefaultShape = function () {
                return (0,core_util.clone)(defaultProps.shape);
            };
            return Sub;
        }(Path));
        for (var key in defaultProps) {
            if (typeof defaultProps[key] === 'function') {
                Sub.prototype[key] = defaultProps[key];
            }
        }
        return Sub;
    };
    Path.initDefaultProps = (function () {
        var pathProto = Path.prototype;
        pathProto.type = 'path';
        pathProto.strokeContainThreshold = 5;
        pathProto.segmentIgnoreThreshold = 0;
        pathProto.subPixelOptimize = false;
        pathProto.autoBatch = false;
        pathProto.__dirty = constants.REDRAW_BIT | constants.STYLE_CHANGED_BIT | constants.SHAPE_CHANGED_BIT;
    })();
    return Path;
}(Displayable["default"]));
/* ESM default export */ var graphic_Path = (Path_Path);


}),
20094: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var _Gradient_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75872);


var RadialGradient = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(RadialGradient, _super);
    function RadialGradient(x, y, r, colorStops, globalCoord) {
        var _this = _super.call(this, colorStops) || this;
        _this.x = x == null ? 0.5 : x;
        _this.y = y == null ? 0.5 : y;
        _this.r = r == null ? 0.5 : r;
        _this.type = 'radial';
        _this.global = globalCoord || false;
        return _this;
    }
    return RadialGradient;
}(_Gradient_js__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* ESM default export */ __webpack_exports__["default"] = (RadialGradient);


}),
39183: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DEFAULT_TSPAN_STYLE: function() { return DEFAULT_TSPAN_STYLE; }
});
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12012);
/* ESM import */var _Displayable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90635);
/* ESM import */var _contain_text_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45258);
/* ESM import */var _Path_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49678);
/* ESM import */var _core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96585);
/* ESM import */var _core_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82379);






var DEFAULT_TSPAN_STYLE = (0,_core_util_js__WEBPACK_IMPORTED_MODULE_0__.defaults)({
    strokeFirst: true,
    font: _core_platform_js__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_FONT,
    x: 0,
    y: 0,
    textAlign: 'left',
    textBaseline: 'top',
    miterLimit: 2
}, _Path_js__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_PATH_STYLE);
var TSpan = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__extends)(TSpan, _super);
    function TSpan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TSpan.prototype.hasStroke = function () {
        var style = this.style;
        var stroke = style.stroke;
        return stroke != null && stroke !== 'none' && style.lineWidth > 0;
    };
    TSpan.prototype.hasFill = function () {
        var style = this.style;
        var fill = style.fill;
        return fill != null && fill !== 'none';
    };
    TSpan.prototype.createStyle = function (obj) {
        return (0,_core_util_js__WEBPACK_IMPORTED_MODULE_0__.createObject)(DEFAULT_TSPAN_STYLE, obj);
    };
    TSpan.prototype.setBoundingRect = function (rect) {
        this._rect = rect;
    };
    TSpan.prototype.getBoundingRect = function () {
        var style = this.style;
        if (!this._rect) {
            var text = style.text;
            text != null ? (text += '') : (text = '');
            var rect = (0,_contain_text_js__WEBPACK_IMPORTED_MODULE_5__.getBoundingRect)(text, style.font, style.textAlign, style.textBaseline);
            rect.x += style.x || 0;
            rect.y += style.y || 0;
            if (this.hasStroke()) {
                var w = style.lineWidth;
                rect.x -= w / 2;
                rect.y -= w / 2;
                rect.width += w;
                rect.height += w;
            }
            this._rect = rect;
        }
        return this._rect;
    };
    TSpan.initDefaultProps = (function () {
        var tspanProto = TSpan.prototype;
        tspanProto.dirtyRectTolerance = 10;
    })();
    return TSpan;
}(_Displayable_js__WEBPACK_IMPORTED_MODULE_3__["default"]));
TSpan.prototype.type = 'tspan';
/* ESM default export */ __webpack_exports__["default"] = (TSpan);


}),
97199: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DEFAULT_TEXT_ANIMATION_PROPS: function() { return DEFAULT_TEXT_ANIMATION_PROPS; },
  hasSeparateFont: function() { return hasSeparateFont; },
  normalizeTextStyle: function() { return normalizeTextStyle; },
  parseFontSize: function() { return parseFontSize; }
});
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12012);
/* ESM import */var _helper_parseText_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4199);
/* ESM import */var _TSpan_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39183);
/* ESM import */var _core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96585);
/* ESM import */var _contain_text_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45258);
/* ESM import */var _Image_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(31386);
/* ESM import */var _shape_Rect_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40361);
/* ESM import */var _core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44964);
/* ESM import */var _Displayable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90635);
/* ESM import */var _core_platform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82379);










var DEFAULT_RICH_TEXT_COLOR = {
    fill: '#000'
};
var DEFAULT_STROKE_LINE_WIDTH = 2;
var DEFAULT_TEXT_ANIMATION_PROPS = {
    style: (0,_core_util_js__WEBPACK_IMPORTED_MODULE_0__.defaults)({
        fill: true,
        stroke: true,
        fillOpacity: true,
        strokeOpacity: true,
        lineWidth: true,
        fontSize: true,
        lineHeight: true,
        width: true,
        height: true,
        textShadowColor: true,
        textShadowBlur: true,
        textShadowOffsetX: true,
        textShadowOffsetY: true,
        backgroundColor: true,
        padding: true,
        borderColor: true,
        borderWidth: true,
        borderRadius: true
    }, _Displayable_js__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_COMMON_ANIMATION_PROPS.style)
};
var ZRText = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(ZRText, _super);
    function ZRText(opts) {
        var _this = _super.call(this) || this;
        _this.type = 'text';
        _this._children = [];
        _this._defaultStyle = DEFAULT_RICH_TEXT_COLOR;
        _this.attr(opts);
        return _this;
    }
    ZRText.prototype.childrenRef = function () {
        return this._children;
    };
    ZRText.prototype.update = function () {
        _super.prototype.update.call(this);
        if (this.styleChanged()) {
            this._updateSubTexts();
        }
        for (var i = 0; i < this._children.length; i++) {
            var child = this._children[i];
            child.zlevel = this.zlevel;
            child.z = this.z;
            child.z2 = this.z2;
            child.culling = this.culling;
            child.cursor = this.cursor;
            child.invisible = this.invisible;
        }
    };
    ZRText.prototype.updateTransform = function () {
        var innerTransformable = this.innerTransformable;
        if (innerTransformable) {
            innerTransformable.updateTransform();
            if (innerTransformable.transform) {
                this.transform = innerTransformable.transform;
            }
        }
        else {
            _super.prototype.updateTransform.call(this);
        }
    };
    ZRText.prototype.getLocalTransform = function (m) {
        var innerTransformable = this.innerTransformable;
        return innerTransformable
            ? innerTransformable.getLocalTransform(m)
            : _super.prototype.getLocalTransform.call(this, m);
    };
    ZRText.prototype.getComputedTransform = function () {
        if (this.__hostTarget) {
            this.__hostTarget.getComputedTransform();
            this.__hostTarget.updateInnerText(true);
        }
        return _super.prototype.getComputedTransform.call(this);
    };
    ZRText.prototype._updateSubTexts = function () {
        this._childCursor = 0;
        normalizeTextStyle(this.style);
        this.style.rich
            ? this._updateRichTexts()
            : this._updatePlainTexts();
        this._children.length = this._childCursor;
        this.styleUpdated();
    };
    ZRText.prototype.addSelfToZr = function (zr) {
        _super.prototype.addSelfToZr.call(this, zr);
        for (var i = 0; i < this._children.length; i++) {
            this._children[i].__zr = zr;
        }
    };
    ZRText.prototype.removeSelfFromZr = function (zr) {
        _super.prototype.removeSelfFromZr.call(this, zr);
        for (var i = 0; i < this._children.length; i++) {
            this._children[i].__zr = null;
        }
    };
    ZRText.prototype.getBoundingRect = function () {
        if (this.styleChanged()) {
            this._updateSubTexts();
        }
        if (!this._rect) {
            var tmpRect = new _core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_3__["default"](0, 0, 0, 0);
            var children = this._children;
            var tmpMat = [];
            var rect = null;
            for (var i = 0; i < children.length; i++) {
                var child = children[i];
                var childRect = child.getBoundingRect();
                var transform = child.getLocalTransform(tmpMat);
                if (transform) {
                    tmpRect.copy(childRect);
                    tmpRect.applyTransform(transform);
                    rect = rect || tmpRect.clone();
                    rect.union(tmpRect);
                }
                else {
                    rect = rect || childRect.clone();
                    rect.union(childRect);
                }
            }
            this._rect = rect || tmpRect;
        }
        return this._rect;
    };
    ZRText.prototype.setDefaultTextStyle = function (defaultTextStyle) {
        this._defaultStyle = defaultTextStyle || DEFAULT_RICH_TEXT_COLOR;
    };
    ZRText.prototype.setTextContent = function (textContent) {
        if (false) {}
    };
    ZRText.prototype._mergeStyle = function (targetStyle, sourceStyle) {
        if (!sourceStyle) {
            return targetStyle;
        }
        var sourceRich = sourceStyle.rich;
        var targetRich = targetStyle.rich || (sourceRich && {});
        (0,_core_util_js__WEBPACK_IMPORTED_MODULE_0__.extend)(targetStyle, sourceStyle);
        if (sourceRich && targetRich) {
            this._mergeRich(targetRich, sourceRich);
            targetStyle.rich = targetRich;
        }
        else if (targetRich) {
            targetStyle.rich = targetRich;
        }
        return targetStyle;
    };
    ZRText.prototype._mergeRich = function (targetRich, sourceRich) {
        var richNames = (0,_core_util_js__WEBPACK_IMPORTED_MODULE_0__.keys)(sourceRich);
        for (var i = 0; i < richNames.length; i++) {
            var richName = richNames[i];
            targetRich[richName] = targetRich[richName] || {};
            (0,_core_util_js__WEBPACK_IMPORTED_MODULE_0__.extend)(targetRich[richName], sourceRich[richName]);
        }
    };
    ZRText.prototype.getAnimationStyleProps = function () {
        return DEFAULT_TEXT_ANIMATION_PROPS;
    };
    ZRText.prototype._getOrCreateChild = function (Ctor) {
        var child = this._children[this._childCursor];
        if (!child || !(child instanceof Ctor)) {
            child = new Ctor();
        }
        this._children[this._childCursor++] = child;
        child.__zr = this.__zr;
        child.parent = this;
        return child;
    };
    ZRText.prototype._updatePlainTexts = function () {
        var style = this.style;
        var textFont = style.font || _core_platform_js__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_FONT;
        var textPadding = style.padding;
        var text = getStyleText(style);
        var contentBlock = (0,_helper_parseText_js__WEBPACK_IMPORTED_MODULE_5__.parsePlainText)(text, style);
        var needDrawBg = needDrawBackground(style);
        var bgColorDrawn = !!(style.backgroundColor);
        var outerHeight = contentBlock.outerHeight;
        var outerWidth = contentBlock.outerWidth;
        var contentWidth = contentBlock.contentWidth;
        var textLines = contentBlock.lines;
        var lineHeight = contentBlock.lineHeight;
        var defaultStyle = this._defaultStyle;
        this.isTruncated = !!contentBlock.isTruncated;
        var baseX = style.x || 0;
        var baseY = style.y || 0;
        var textAlign = style.align || defaultStyle.align || 'left';
        var verticalAlign = style.verticalAlign || defaultStyle.verticalAlign || 'top';
        var textX = baseX;
        var textY = (0,_contain_text_js__WEBPACK_IMPORTED_MODULE_6__.adjustTextY)(baseY, contentBlock.contentHeight, verticalAlign);
        if (needDrawBg || textPadding) {
            var boxX = (0,_contain_text_js__WEBPACK_IMPORTED_MODULE_6__.adjustTextX)(baseX, outerWidth, textAlign);
            var boxY = (0,_contain_text_js__WEBPACK_IMPORTED_MODULE_6__.adjustTextY)(baseY, outerHeight, verticalAlign);
            needDrawBg && this._renderBackground(style, style, boxX, boxY, outerWidth, outerHeight);
        }
        textY += lineHeight / 2;
        if (textPadding) {
            textX = getTextXForPadding(baseX, textAlign, textPadding);
            if (verticalAlign === 'top') {
                textY += textPadding[0];
            }
            else if (verticalAlign === 'bottom') {
                textY -= textPadding[2];
            }
        }
        var defaultLineWidth = 0;
        var useDefaultFill = false;
        var textFill = getFill('fill' in style
            ? style.fill
            : (useDefaultFill = true, defaultStyle.fill));
        var textStroke = getStroke('stroke' in style
            ? style.stroke
            : (!bgColorDrawn
                && (!defaultStyle.autoStroke || useDefaultFill))
                ? (defaultLineWidth = DEFAULT_STROKE_LINE_WIDTH, defaultStyle.stroke)
                : null);
        var hasShadow = style.textShadowBlur > 0;
        var fixedBoundingRect = style.width != null
            && (style.overflow === 'truncate' || style.overflow === 'break' || style.overflow === 'breakAll');
        var calculatedLineHeight = contentBlock.calculatedLineHeight;
        for (var i = 0; i < textLines.length; i++) {
            var el = this._getOrCreateChild(_TSpan_js__WEBPACK_IMPORTED_MODULE_7__["default"]);
            var subElStyle = el.createStyle();
            el.useStyle(subElStyle);
            subElStyle.text = textLines[i];
            subElStyle.x = textX;
            subElStyle.y = textY;
            if (textAlign) {
                subElStyle.textAlign = textAlign;
            }
            subElStyle.textBaseline = 'middle';
            subElStyle.opacity = style.opacity;
            subElStyle.strokeFirst = true;
            if (hasShadow) {
                subElStyle.shadowBlur = style.textShadowBlur || 0;
                subElStyle.shadowColor = style.textShadowColor || 'transparent';
                subElStyle.shadowOffsetX = style.textShadowOffsetX || 0;
                subElStyle.shadowOffsetY = style.textShadowOffsetY || 0;
            }
            subElStyle.stroke = textStroke;
            subElStyle.fill = textFill;
            if (textStroke) {
                subElStyle.lineWidth = style.lineWidth || defaultLineWidth;
                subElStyle.lineDash = style.lineDash;
                subElStyle.lineDashOffset = style.lineDashOffset || 0;
            }
            subElStyle.font = textFont;
            setSeparateFont(subElStyle, style);
            textY += lineHeight;
            if (fixedBoundingRect) {
                el.setBoundingRect(new _core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_3__["default"]((0,_contain_text_js__WEBPACK_IMPORTED_MODULE_6__.adjustTextX)(subElStyle.x, contentWidth, subElStyle.textAlign), (0,_contain_text_js__WEBPACK_IMPORTED_MODULE_6__.adjustTextY)(subElStyle.y, calculatedLineHeight, subElStyle.textBaseline), contentWidth, calculatedLineHeight));
            }
        }
    };
    ZRText.prototype._updateRichTexts = function () {
        var style = this.style;
        var text = getStyleText(style);
        var contentBlock = (0,_helper_parseText_js__WEBPACK_IMPORTED_MODULE_5__.parseRichText)(text, style);
        var contentWidth = contentBlock.width;
        var outerWidth = contentBlock.outerWidth;
        var outerHeight = contentBlock.outerHeight;
        var textPadding = style.padding;
        var baseX = style.x || 0;
        var baseY = style.y || 0;
        var defaultStyle = this._defaultStyle;
        var textAlign = style.align || defaultStyle.align;
        var verticalAlign = style.verticalAlign || defaultStyle.verticalAlign;
        this.isTruncated = !!contentBlock.isTruncated;
        var boxX = (0,_contain_text_js__WEBPACK_IMPORTED_MODULE_6__.adjustTextX)(baseX, outerWidth, textAlign);
        var boxY = (0,_contain_text_js__WEBPACK_IMPORTED_MODULE_6__.adjustTextY)(baseY, outerHeight, verticalAlign);
        var xLeft = boxX;
        var lineTop = boxY;
        if (textPadding) {
            xLeft += textPadding[3];
            lineTop += textPadding[0];
        }
        var xRight = xLeft + contentWidth;
        if (needDrawBackground(style)) {
            this._renderBackground(style, style, boxX, boxY, outerWidth, outerHeight);
        }
        var bgColorDrawn = !!(style.backgroundColor);
        for (var i = 0; i < contentBlock.lines.length; i++) {
            var line = contentBlock.lines[i];
            var tokens = line.tokens;
            var tokenCount = tokens.length;
            var lineHeight = line.lineHeight;
            var remainedWidth = line.width;
            var leftIndex = 0;
            var lineXLeft = xLeft;
            var lineXRight = xRight;
            var rightIndex = tokenCount - 1;
            var token = void 0;
            while (leftIndex < tokenCount
                && (token = tokens[leftIndex], !token.align || token.align === 'left')) {
                this._placeToken(token, style, lineHeight, lineTop, lineXLeft, 'left', bgColorDrawn);
                remainedWidth -= token.width;
                lineXLeft += token.width;
                leftIndex++;
            }
            while (rightIndex >= 0
                && (token = tokens[rightIndex], token.align === 'right')) {
                this._placeToken(token, style, lineHeight, lineTop, lineXRight, 'right', bgColorDrawn);
                remainedWidth -= token.width;
                lineXRight -= token.width;
                rightIndex--;
            }
            lineXLeft += (contentWidth - (lineXLeft - xLeft) - (xRight - lineXRight) - remainedWidth) / 2;
            while (leftIndex <= rightIndex) {
                token = tokens[leftIndex];
                this._placeToken(token, style, lineHeight, lineTop, lineXLeft + token.width / 2, 'center', bgColorDrawn);
                lineXLeft += token.width;
                leftIndex++;
            }
            lineTop += lineHeight;
        }
    };
    ZRText.prototype._placeToken = function (token, style, lineHeight, lineTop, x, textAlign, parentBgColorDrawn) {
        var tokenStyle = style.rich[token.styleName] || {};
        tokenStyle.text = token.text;
        var verticalAlign = token.verticalAlign;
        var y = lineTop + lineHeight / 2;
        if (verticalAlign === 'top') {
            y = lineTop + token.height / 2;
        }
        else if (verticalAlign === 'bottom') {
            y = lineTop + lineHeight - token.height / 2;
        }
        var needDrawBg = !token.isLineHolder && needDrawBackground(tokenStyle);
        needDrawBg && this._renderBackground(tokenStyle, style, textAlign === 'right'
            ? x - token.width
            : textAlign === 'center'
                ? x - token.width / 2
                : x, y - token.height / 2, token.width, token.height);
        var bgColorDrawn = !!tokenStyle.backgroundColor;
        var textPadding = token.textPadding;
        if (textPadding) {
            x = getTextXForPadding(x, textAlign, textPadding);
            y -= token.height / 2 - textPadding[0] - token.innerHeight / 2;
        }
        var el = this._getOrCreateChild(_TSpan_js__WEBPACK_IMPORTED_MODULE_7__["default"]);
        var subElStyle = el.createStyle();
        el.useStyle(subElStyle);
        var defaultStyle = this._defaultStyle;
        var useDefaultFill = false;
        var defaultLineWidth = 0;
        var textFill = getFill('fill' in tokenStyle ? tokenStyle.fill
            : 'fill' in style ? style.fill
                : (useDefaultFill = true, defaultStyle.fill));
        var textStroke = getStroke('stroke' in tokenStyle ? tokenStyle.stroke
            : 'stroke' in style ? style.stroke
                : (!bgColorDrawn
                    && !parentBgColorDrawn
                    && (!defaultStyle.autoStroke || useDefaultFill)) ? (defaultLineWidth = DEFAULT_STROKE_LINE_WIDTH, defaultStyle.stroke)
                    : null);
        var hasShadow = tokenStyle.textShadowBlur > 0
            || style.textShadowBlur > 0;
        subElStyle.text = token.text;
        subElStyle.x = x;
        subElStyle.y = y;
        if (hasShadow) {
            subElStyle.shadowBlur = tokenStyle.textShadowBlur || style.textShadowBlur || 0;
            subElStyle.shadowColor = tokenStyle.textShadowColor || style.textShadowColor || 'transparent';
            subElStyle.shadowOffsetX = tokenStyle.textShadowOffsetX || style.textShadowOffsetX || 0;
            subElStyle.shadowOffsetY = tokenStyle.textShadowOffsetY || style.textShadowOffsetY || 0;
        }
        subElStyle.textAlign = textAlign;
        subElStyle.textBaseline = 'middle';
        subElStyle.font = token.font || _core_platform_js__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_FONT;
        subElStyle.opacity = (0,_core_util_js__WEBPACK_IMPORTED_MODULE_0__.retrieve3)(tokenStyle.opacity, style.opacity, 1);
        setSeparateFont(subElStyle, tokenStyle);
        if (textStroke) {
            subElStyle.lineWidth = (0,_core_util_js__WEBPACK_IMPORTED_MODULE_0__.retrieve3)(tokenStyle.lineWidth, style.lineWidth, defaultLineWidth);
            subElStyle.lineDash = (0,_core_util_js__WEBPACK_IMPORTED_MODULE_0__.retrieve2)(tokenStyle.lineDash, style.lineDash);
            subElStyle.lineDashOffset = style.lineDashOffset || 0;
            subElStyle.stroke = textStroke;
        }
        if (textFill) {
            subElStyle.fill = textFill;
        }
        var textWidth = token.contentWidth;
        var textHeight = token.contentHeight;
        el.setBoundingRect(new _core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_3__["default"]((0,_contain_text_js__WEBPACK_IMPORTED_MODULE_6__.adjustTextX)(subElStyle.x, textWidth, subElStyle.textAlign), (0,_contain_text_js__WEBPACK_IMPORTED_MODULE_6__.adjustTextY)(subElStyle.y, textHeight, subElStyle.textBaseline), textWidth, textHeight));
    };
    ZRText.prototype._renderBackground = function (style, topStyle, x, y, width, height) {
        var textBackgroundColor = style.backgroundColor;
        var textBorderWidth = style.borderWidth;
        var textBorderColor = style.borderColor;
        var isImageBg = textBackgroundColor && textBackgroundColor.image;
        var isPlainOrGradientBg = textBackgroundColor && !isImageBg;
        var textBorderRadius = style.borderRadius;
        var self = this;
        var rectEl;
        var imgEl;
        if (isPlainOrGradientBg || style.lineHeight || (textBorderWidth && textBorderColor)) {
            rectEl = this._getOrCreateChild(_shape_Rect_js__WEBPACK_IMPORTED_MODULE_8__["default"]);
            rectEl.useStyle(rectEl.createStyle());
            rectEl.style.fill = null;
            var rectShape = rectEl.shape;
            rectShape.x = x;
            rectShape.y = y;
            rectShape.width = width;
            rectShape.height = height;
            rectShape.r = textBorderRadius;
            rectEl.dirtyShape();
        }
        if (isPlainOrGradientBg) {
            var rectStyle = rectEl.style;
            rectStyle.fill = textBackgroundColor || null;
            rectStyle.fillOpacity = (0,_core_util_js__WEBPACK_IMPORTED_MODULE_0__.retrieve2)(style.fillOpacity, 1);
        }
        else if (isImageBg) {
            imgEl = this._getOrCreateChild(_Image_js__WEBPACK_IMPORTED_MODULE_9__["default"]);
            imgEl.onload = function () {
                self.dirtyStyle();
            };
            var imgStyle = imgEl.style;
            imgStyle.image = textBackgroundColor.image;
            imgStyle.x = x;
            imgStyle.y = y;
            imgStyle.width = width;
            imgStyle.height = height;
        }
        if (textBorderWidth && textBorderColor) {
            var rectStyle = rectEl.style;
            rectStyle.lineWidth = textBorderWidth;
            rectStyle.stroke = textBorderColor;
            rectStyle.strokeOpacity = (0,_core_util_js__WEBPACK_IMPORTED_MODULE_0__.retrieve2)(style.strokeOpacity, 1);
            rectStyle.lineDash = style.borderDash;
            rectStyle.lineDashOffset = style.borderDashOffset || 0;
            rectEl.strokeContainThreshold = 0;
            if (rectEl.hasFill() && rectEl.hasStroke()) {
                rectStyle.strokeFirst = true;
                rectStyle.lineWidth *= 2;
            }
        }
        var commonStyle = (rectEl || imgEl).style;
        commonStyle.shadowBlur = style.shadowBlur || 0;
        commonStyle.shadowColor = style.shadowColor || 'transparent';
        commonStyle.shadowOffsetX = style.shadowOffsetX || 0;
        commonStyle.shadowOffsetY = style.shadowOffsetY || 0;
        commonStyle.opacity = (0,_core_util_js__WEBPACK_IMPORTED_MODULE_0__.retrieve3)(style.opacity, topStyle.opacity, 1);
    };
    ZRText.makeFont = function (style) {
        var font = '';
        if (hasSeparateFont(style)) {
            font = [
                style.fontStyle,
                style.fontWeight,
                parseFontSize(style.fontSize),
                style.fontFamily || 'sans-serif'
            ].join(' ');
        }
        return font && (0,_core_util_js__WEBPACK_IMPORTED_MODULE_0__.trim)(font) || style.textFont || style.font;
    };
    return ZRText;
}(_Displayable_js__WEBPACK_IMPORTED_MODULE_1__["default"]));
var VALID_TEXT_ALIGN = { left: true, right: 1, center: 1 };
var VALID_TEXT_VERTICAL_ALIGN = { top: 1, bottom: 1, middle: 1 };
var FONT_PARTS = ['fontStyle', 'fontWeight', 'fontSize', 'fontFamily'];
function parseFontSize(fontSize) {
    if (typeof fontSize === 'string'
        && (fontSize.indexOf('px') !== -1
            || fontSize.indexOf('rem') !== -1
            || fontSize.indexOf('em') !== -1)) {
        return fontSize;
    }
    else if (!isNaN(+fontSize)) {
        return fontSize + 'px';
    }
    else {
        return _core_platform_js__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_FONT_SIZE + 'px';
    }
}
function setSeparateFont(targetStyle, sourceStyle) {
    for (var i = 0; i < FONT_PARTS.length; i++) {
        var fontProp = FONT_PARTS[i];
        var val = sourceStyle[fontProp];
        if (val != null) {
            targetStyle[fontProp] = val;
        }
    }
}
function hasSeparateFont(style) {
    return style.fontSize != null || style.fontFamily || style.fontWeight;
}
function normalizeTextStyle(style) {
    normalizeStyle(style);
    (0,_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each)(style.rich, normalizeStyle);
    return style;
}
function normalizeStyle(style) {
    if (style) {
        style.font = ZRText.makeFont(style);
        var textAlign = style.align;
        textAlign === 'middle' && (textAlign = 'center');
        style.align = (textAlign == null || VALID_TEXT_ALIGN[textAlign]) ? textAlign : 'left';
        var verticalAlign = style.verticalAlign;
        verticalAlign === 'center' && (verticalAlign = 'middle');
        style.verticalAlign = (verticalAlign == null || VALID_TEXT_VERTICAL_ALIGN[verticalAlign]) ? verticalAlign : 'top';
        var textPadding = style.padding;
        if (textPadding) {
            style.padding = (0,_core_util_js__WEBPACK_IMPORTED_MODULE_0__.normalizeCssArray)(style.padding);
        }
    }
}
function getStroke(stroke, lineWidth) {
    return (stroke == null || lineWidth <= 0 || stroke === 'transparent' || stroke === 'none')
        ? null
        : (stroke.image || stroke.colorStops)
            ? '#000'
            : stroke;
}
function getFill(fill) {
    return (fill == null || fill === 'none')
        ? null
        : (fill.image || fill.colorStops)
            ? '#000'
            : fill;
}
function getTextXForPadding(x, textAlign, textPadding) {
    return textAlign === 'right'
        ? (x - textPadding[1])
        : textAlign === 'center'
            ? (x + textPadding[3] / 2 - textPadding[1] / 2)
            : (x + textPadding[3]);
}
function getStyleText(style) {
    var text = style.text;
    text != null && (text += '');
    return text;
}
function needDrawBackground(style) {
    return !!(style.backgroundColor
        || style.lineHeight
        || (style.borderWidth && style.borderColor));
}
/* ESM default export */ __webpack_exports__["default"] = (ZRText);


}),
59177: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  REDRAW_BIT: function() { return REDRAW_BIT; },
  SHAPE_CHANGED_BIT: function() { return SHAPE_CHANGED_BIT; },
  STYLE_CHANGED_BIT: function() { return STYLE_CHANGED_BIT; }
});
var REDRAW_BIT = 1;
var STYLE_CHANGED_BIT = 2;
var SHAPE_CHANGED_BIT = 4;


}),
25259: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createOrUpdateImage: function() { return createOrUpdateImage; },
  findExistImage: function() { return findExistImage; },
  isImageReady: function() { return isImageReady; }
});
/* ESM import */var _core_LRU_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45671);
/* ESM import */var _core_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82379);


var globalImageCache = new _core_LRU_js__WEBPACK_IMPORTED_MODULE_0__["default"](50);
function findExistImage(newImageOrSrc) {
    if (typeof newImageOrSrc === 'string') {
        var cachedImgObj = globalImageCache.get(newImageOrSrc);
        return cachedImgObj && cachedImgObj.image;
    }
    else {
        return newImageOrSrc;
    }
}
function createOrUpdateImage(newImageOrSrc, image, hostEl, onload, cbPayload) {
    if (!newImageOrSrc) {
        return image;
    }
    else if (typeof newImageOrSrc === 'string') {
        if ((image && image.__zrImageSrc === newImageOrSrc) || !hostEl) {
            return image;
        }
        var cachedImgObj = globalImageCache.get(newImageOrSrc);
        var pendingWrap = { hostEl: hostEl, cb: onload, cbPayload: cbPayload };
        if (cachedImgObj) {
            image = cachedImgObj.image;
            !isImageReady(image) && cachedImgObj.pending.push(pendingWrap);
        }
        else {
            image = _core_platform_js__WEBPACK_IMPORTED_MODULE_1__.platformApi.loadImage(newImageOrSrc, imageOnLoad, imageOnLoad);
            image.__zrImageSrc = newImageOrSrc;
            globalImageCache.put(newImageOrSrc, image.__cachedImgObj = {
                image: image,
                pending: [pendingWrap]
            });
        }
        return image;
    }
    else {
        return newImageOrSrc;
    }
}
function imageOnLoad() {
    var cachedImgObj = this.__cachedImgObj;
    this.onload = this.onerror = this.__cachedImgObj = null;
    for (var i = 0; i < cachedImgObj.pending.length; i++) {
        var pendingWrap = cachedImgObj.pending[i];
        var cb = pendingWrap.cb;
        cb && cb(this, pendingWrap.cbPayload);
        pendingWrap.hostEl.dirty();
    }
    cachedImgObj.pending.length = 0;
}
function isImageReady(image) {
    return image && image.width && image.height;
}


}),
4199: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  RichTextContentBlock: function() { return RichTextContentBlock; },
  parsePlainText: function() { return parsePlainText; },
  parseRichText: function() { return parseRichText; },
  truncateText: function() { return truncateText; }
});
/* ESM import */var _helper_image_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25259);
/* ESM import */var _core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96585);
/* ESM import */var _contain_text_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45258);



var STYLE_REG = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g;
function truncateText(text, containerWidth, font, ellipsis, options) {
    var out = {};
    truncateText2(out, text, containerWidth, font, ellipsis, options);
    return out.text;
}
function truncateText2(out, text, containerWidth, font, ellipsis, options) {
    if (!containerWidth) {
        out.text = '';
        out.isTruncated = false;
        return;
    }
    var textLines = (text + '').split('\n');
    options = prepareTruncateOptions(containerWidth, font, ellipsis, options);
    var isTruncated = false;
    var truncateOut = {};
    for (var i = 0, len = textLines.length; i < len; i++) {
        truncateSingleLine(truncateOut, textLines[i], options);
        textLines[i] = truncateOut.textLine;
        isTruncated = isTruncated || truncateOut.isTruncated;
    }
    out.text = textLines.join('\n');
    out.isTruncated = isTruncated;
}
function prepareTruncateOptions(containerWidth, font, ellipsis, options) {
    options = options || {};
    var preparedOpts = (0,_core_util_js__WEBPACK_IMPORTED_MODULE_0__.extend)({}, options);
    preparedOpts.font = font;
    ellipsis = (0,_core_util_js__WEBPACK_IMPORTED_MODULE_0__.retrieve2)(ellipsis, '...');
    preparedOpts.maxIterations = (0,_core_util_js__WEBPACK_IMPORTED_MODULE_0__.retrieve2)(options.maxIterations, 2);
    var minChar = preparedOpts.minChar = (0,_core_util_js__WEBPACK_IMPORTED_MODULE_0__.retrieve2)(options.minChar, 0);
    preparedOpts.cnCharWidth = (0,_contain_text_js__WEBPACK_IMPORTED_MODULE_1__.getWidth)('国', font);
    var ascCharWidth = preparedOpts.ascCharWidth = (0,_contain_text_js__WEBPACK_IMPORTED_MODULE_1__.getWidth)('a', font);
    preparedOpts.placeholder = (0,_core_util_js__WEBPACK_IMPORTED_MODULE_0__.retrieve2)(options.placeholder, '');
    var contentWidth = containerWidth = Math.max(0, containerWidth - 1);
    for (var i = 0; i < minChar && contentWidth >= ascCharWidth; i++) {
        contentWidth -= ascCharWidth;
    }
    var ellipsisWidth = (0,_contain_text_js__WEBPACK_IMPORTED_MODULE_1__.getWidth)(ellipsis, font);
    if (ellipsisWidth > contentWidth) {
        ellipsis = '';
        ellipsisWidth = 0;
    }
    contentWidth = containerWidth - ellipsisWidth;
    preparedOpts.ellipsis = ellipsis;
    preparedOpts.ellipsisWidth = ellipsisWidth;
    preparedOpts.contentWidth = contentWidth;
    preparedOpts.containerWidth = containerWidth;
    return preparedOpts;
}
function truncateSingleLine(out, textLine, options) {
    var containerWidth = options.containerWidth;
    var font = options.font;
    var contentWidth = options.contentWidth;
    if (!containerWidth) {
        out.textLine = '';
        out.isTruncated = false;
        return;
    }
    var lineWidth = (0,_contain_text_js__WEBPACK_IMPORTED_MODULE_1__.getWidth)(textLine, font);
    if (lineWidth <= containerWidth) {
        out.textLine = textLine;
        out.isTruncated = false;
        return;
    }
    for (var j = 0;; j++) {
        if (lineWidth <= contentWidth || j >= options.maxIterations) {
            textLine += options.ellipsis;
            break;
        }
        var subLength = j === 0
            ? estimateLength(textLine, contentWidth, options.ascCharWidth, options.cnCharWidth)
            : lineWidth > 0
                ? Math.floor(textLine.length * contentWidth / lineWidth)
                : 0;
        textLine = textLine.substr(0, subLength);
        lineWidth = (0,_contain_text_js__WEBPACK_IMPORTED_MODULE_1__.getWidth)(textLine, font);
    }
    if (textLine === '') {
        textLine = options.placeholder;
    }
    out.textLine = textLine;
    out.isTruncated = true;
}
function estimateLength(text, contentWidth, ascCharWidth, cnCharWidth) {
    var width = 0;
    var i = 0;
    for (var len = text.length; i < len && width < contentWidth; i++) {
        var charCode = text.charCodeAt(i);
        width += (0 <= charCode && charCode <= 127) ? ascCharWidth : cnCharWidth;
    }
    return i;
}
function parsePlainText(text, style) {
    text != null && (text += '');
    var overflow = style.overflow;
    var padding = style.padding;
    var font = style.font;
    var truncate = overflow === 'truncate';
    var calculatedLineHeight = (0,_contain_text_js__WEBPACK_IMPORTED_MODULE_1__.getLineHeight)(font);
    var lineHeight = (0,_core_util_js__WEBPACK_IMPORTED_MODULE_0__.retrieve2)(style.lineHeight, calculatedLineHeight);
    var bgColorDrawn = !!(style.backgroundColor);
    var truncateLineOverflow = style.lineOverflow === 'truncate';
    var isTruncated = false;
    var width = style.width;
    var lines;
    if (width != null && (overflow === 'break' || overflow === 'breakAll')) {
        lines = text ? wrapText(text, style.font, width, overflow === 'breakAll', 0).lines : [];
    }
    else {
        lines = text ? text.split('\n') : [];
    }
    var contentHeight = lines.length * lineHeight;
    var height = (0,_core_util_js__WEBPACK_IMPORTED_MODULE_0__.retrieve2)(style.height, contentHeight);
    if (contentHeight > height && truncateLineOverflow) {
        var lineCount = Math.floor(height / lineHeight);
        isTruncated = isTruncated || (lines.length > lineCount);
        lines = lines.slice(0, lineCount);
    }
    if (text && truncate && width != null) {
        var options = prepareTruncateOptions(width, font, style.ellipsis, {
            minChar: style.truncateMinChar,
            placeholder: style.placeholder
        });
        var singleOut = {};
        for (var i = 0; i < lines.length; i++) {
            truncateSingleLine(singleOut, lines[i], options);
            lines[i] = singleOut.textLine;
            isTruncated = isTruncated || singleOut.isTruncated;
        }
    }
    var outerHeight = height;
    var contentWidth = 0;
    for (var i = 0; i < lines.length; i++) {
        contentWidth = Math.max((0,_contain_text_js__WEBPACK_IMPORTED_MODULE_1__.getWidth)(lines[i], font), contentWidth);
    }
    if (width == null) {
        width = contentWidth;
    }
    var outerWidth = contentWidth;
    if (padding) {
        outerHeight += padding[0] + padding[2];
        outerWidth += padding[1] + padding[3];
        width += padding[1] + padding[3];
    }
    if (bgColorDrawn) {
        outerWidth = width;
    }
    return {
        lines: lines,
        height: height,
        outerWidth: outerWidth,
        outerHeight: outerHeight,
        lineHeight: lineHeight,
        calculatedLineHeight: calculatedLineHeight,
        contentWidth: contentWidth,
        contentHeight: contentHeight,
        width: width,
        isTruncated: isTruncated
    };
}
var RichTextToken = (function () {
    function RichTextToken() {
    }
    return RichTextToken;
}());
var RichTextLine = (function () {
    function RichTextLine(tokens) {
        this.tokens = [];
        if (tokens) {
            this.tokens = tokens;
        }
    }
    return RichTextLine;
}());
var RichTextContentBlock = (function () {
    function RichTextContentBlock() {
        this.width = 0;
        this.height = 0;
        this.contentWidth = 0;
        this.contentHeight = 0;
        this.outerWidth = 0;
        this.outerHeight = 0;
        this.lines = [];
        this.isTruncated = false;
    }
    return RichTextContentBlock;
}());

function parseRichText(text, style) {
    var contentBlock = new RichTextContentBlock();
    text != null && (text += '');
    if (!text) {
        return contentBlock;
    }
    var topWidth = style.width;
    var topHeight = style.height;
    var overflow = style.overflow;
    var wrapInfo = (overflow === 'break' || overflow === 'breakAll') && topWidth != null
        ? { width: topWidth, accumWidth: 0, breakAll: overflow === 'breakAll' }
        : null;
    var lastIndex = STYLE_REG.lastIndex = 0;
    var result;
    while ((result = STYLE_REG.exec(text)) != null) {
        var matchedIndex = result.index;
        if (matchedIndex > lastIndex) {
            pushTokens(contentBlock, text.substring(lastIndex, matchedIndex), style, wrapInfo);
        }
        pushTokens(contentBlock, result[2], style, wrapInfo, result[1]);
        lastIndex = STYLE_REG.lastIndex;
    }
    if (lastIndex < text.length) {
        pushTokens(contentBlock, text.substring(lastIndex, text.length), style, wrapInfo);
    }
    var pendingList = [];
    var calculatedHeight = 0;
    var calculatedWidth = 0;
    var stlPadding = style.padding;
    var truncate = overflow === 'truncate';
    var truncateLine = style.lineOverflow === 'truncate';
    var tmpTruncateOut = {};
    function finishLine(line, lineWidth, lineHeight) {
        line.width = lineWidth;
        line.lineHeight = lineHeight;
        calculatedHeight += lineHeight;
        calculatedWidth = Math.max(calculatedWidth, lineWidth);
    }
    outer: for (var i = 0; i < contentBlock.lines.length; i++) {
        var line = contentBlock.lines[i];
        var lineHeight = 0;
        var lineWidth = 0;
        for (var j = 0; j < line.tokens.length; j++) {
            var token = line.tokens[j];
            var tokenStyle = token.styleName && style.rich[token.styleName] || {};
            var textPadding = token.textPadding = tokenStyle.padding;
            var paddingH = textPadding ? textPadding[1] + textPadding[3] : 0;
            var font = token.font = tokenStyle.font || style.font;
            token.contentHeight = (0,_contain_text_js__WEBPACK_IMPORTED_MODULE_1__.getLineHeight)(font);
            var tokenHeight = (0,_core_util_js__WEBPACK_IMPORTED_MODULE_0__.retrieve2)(tokenStyle.height, token.contentHeight);
            token.innerHeight = tokenHeight;
            textPadding && (tokenHeight += textPadding[0] + textPadding[2]);
            token.height = tokenHeight;
            token.lineHeight = (0,_core_util_js__WEBPACK_IMPORTED_MODULE_0__.retrieve3)(tokenStyle.lineHeight, style.lineHeight, tokenHeight);
            token.align = tokenStyle && tokenStyle.align || style.align;
            token.verticalAlign = tokenStyle && tokenStyle.verticalAlign || 'middle';
            if (truncateLine && topHeight != null && calculatedHeight + token.lineHeight > topHeight) {
                var originalLength = contentBlock.lines.length;
                if (j > 0) {
                    line.tokens = line.tokens.slice(0, j);
                    finishLine(line, lineWidth, lineHeight);
                    contentBlock.lines = contentBlock.lines.slice(0, i + 1);
                }
                else {
                    contentBlock.lines = contentBlock.lines.slice(0, i);
                }
                contentBlock.isTruncated = contentBlock.isTruncated || (contentBlock.lines.length < originalLength);
                break outer;
            }
            var styleTokenWidth = tokenStyle.width;
            var tokenWidthNotSpecified = styleTokenWidth == null || styleTokenWidth === 'auto';
            if (typeof styleTokenWidth === 'string' && styleTokenWidth.charAt(styleTokenWidth.length - 1) === '%') {
                token.percentWidth = styleTokenWidth;
                pendingList.push(token);
                token.contentWidth = (0,_contain_text_js__WEBPACK_IMPORTED_MODULE_1__.getWidth)(token.text, font);
            }
            else {
                if (tokenWidthNotSpecified) {
                    var textBackgroundColor = tokenStyle.backgroundColor;
                    var bgImg = textBackgroundColor && textBackgroundColor.image;
                    if (bgImg) {
                        bgImg = _helper_image_js__WEBPACK_IMPORTED_MODULE_2__.findExistImage(bgImg);
                        if (_helper_image_js__WEBPACK_IMPORTED_MODULE_2__.isImageReady(bgImg)) {
                            token.width = Math.max(token.width, bgImg.width * tokenHeight / bgImg.height);
                        }
                    }
                }
                var remainTruncWidth = truncate && topWidth != null
                    ? topWidth - lineWidth : null;
                if (remainTruncWidth != null && remainTruncWidth < token.width) {
                    if (!tokenWidthNotSpecified || remainTruncWidth < paddingH) {
                        token.text = '';
                        token.width = token.contentWidth = 0;
                    }
                    else {
                        truncateText2(tmpTruncateOut, token.text, remainTruncWidth - paddingH, font, style.ellipsis, { minChar: style.truncateMinChar });
                        token.text = tmpTruncateOut.text;
                        contentBlock.isTruncated = contentBlock.isTruncated || tmpTruncateOut.isTruncated;
                        token.width = token.contentWidth = (0,_contain_text_js__WEBPACK_IMPORTED_MODULE_1__.getWidth)(token.text, font);
                    }
                }
                else {
                    token.contentWidth = (0,_contain_text_js__WEBPACK_IMPORTED_MODULE_1__.getWidth)(token.text, font);
                }
            }
            token.width += paddingH;
            lineWidth += token.width;
            tokenStyle && (lineHeight = Math.max(lineHeight, token.lineHeight));
        }
        finishLine(line, lineWidth, lineHeight);
    }
    contentBlock.outerWidth = contentBlock.width = (0,_core_util_js__WEBPACK_IMPORTED_MODULE_0__.retrieve2)(topWidth, calculatedWidth);
    contentBlock.outerHeight = contentBlock.height = (0,_core_util_js__WEBPACK_IMPORTED_MODULE_0__.retrieve2)(topHeight, calculatedHeight);
    contentBlock.contentHeight = calculatedHeight;
    contentBlock.contentWidth = calculatedWidth;
    if (stlPadding) {
        contentBlock.outerWidth += stlPadding[1] + stlPadding[3];
        contentBlock.outerHeight += stlPadding[0] + stlPadding[2];
    }
    for (var i = 0; i < pendingList.length; i++) {
        var token = pendingList[i];
        var percentWidth = token.percentWidth;
        token.width = parseInt(percentWidth, 10) / 100 * contentBlock.width;
    }
    return contentBlock;
}
function pushTokens(block, str, style, wrapInfo, styleName) {
    var isEmptyStr = str === '';
    var tokenStyle = styleName && style.rich[styleName] || {};
    var lines = block.lines;
    var font = tokenStyle.font || style.font;
    var newLine = false;
    var strLines;
    var linesWidths;
    if (wrapInfo) {
        var tokenPadding = tokenStyle.padding;
        var tokenPaddingH = tokenPadding ? tokenPadding[1] + tokenPadding[3] : 0;
        if (tokenStyle.width != null && tokenStyle.width !== 'auto') {
            var outerWidth_1 = (0,_contain_text_js__WEBPACK_IMPORTED_MODULE_1__.parsePercent)(tokenStyle.width, wrapInfo.width) + tokenPaddingH;
            if (lines.length > 0) {
                if (outerWidth_1 + wrapInfo.accumWidth > wrapInfo.width) {
                    strLines = str.split('\n');
                    newLine = true;
                }
            }
            wrapInfo.accumWidth = outerWidth_1;
        }
        else {
            var res = wrapText(str, font, wrapInfo.width, wrapInfo.breakAll, wrapInfo.accumWidth);
            wrapInfo.accumWidth = res.accumWidth + tokenPaddingH;
            linesWidths = res.linesWidths;
            strLines = res.lines;
        }
    }
    else {
        strLines = str.split('\n');
    }
    for (var i = 0; i < strLines.length; i++) {
        var text = strLines[i];
        var token = new RichTextToken();
        token.styleName = styleName;
        token.text = text;
        token.isLineHolder = !text && !isEmptyStr;
        if (typeof tokenStyle.width === 'number') {
            token.width = tokenStyle.width;
        }
        else {
            token.width = linesWidths
                ? linesWidths[i]
                : (0,_contain_text_js__WEBPACK_IMPORTED_MODULE_1__.getWidth)(text, font);
        }
        if (!i && !newLine) {
            var tokens = (lines[lines.length - 1] || (lines[0] = new RichTextLine())).tokens;
            var tokensLen = tokens.length;
            (tokensLen === 1 && tokens[0].isLineHolder)
                ? (tokens[0] = token)
                : ((text || !tokensLen || isEmptyStr) && tokens.push(token));
        }
        else {
            lines.push(new RichTextLine([token]));
        }
    }
}
function isAlphabeticLetter(ch) {
    var code = ch.charCodeAt(0);
    return code >= 0x20 && code <= 0x24F
        || code >= 0x370 && code <= 0x10FF
        || code >= 0x1200 && code <= 0x13FF
        || code >= 0x1E00 && code <= 0x206F;
}
var breakCharMap = (0,_core_util_js__WEBPACK_IMPORTED_MODULE_0__.reduce)(',&?/;] '.split(''), function (obj, ch) {
    obj[ch] = true;
    return obj;
}, {});
function isWordBreakChar(ch) {
    if (isAlphabeticLetter(ch)) {
        if (breakCharMap[ch]) {
            return true;
        }
        return false;
    }
    return true;
}
function wrapText(text, font, lineWidth, isBreakAll, lastAccumWidth) {
    var lines = [];
    var linesWidths = [];
    var line = '';
    var currentWord = '';
    var currentWordWidth = 0;
    var accumWidth = 0;
    for (var i = 0; i < text.length; i++) {
        var ch = text.charAt(i);
        if (ch === '\n') {
            if (currentWord) {
                line += currentWord;
                accumWidth += currentWordWidth;
            }
            lines.push(line);
            linesWidths.push(accumWidth);
            line = '';
            currentWord = '';
            currentWordWidth = 0;
            accumWidth = 0;
            continue;
        }
        var chWidth = (0,_contain_text_js__WEBPACK_IMPORTED_MODULE_1__.getWidth)(ch, font);
        var inWord = isBreakAll ? false : !isWordBreakChar(ch);
        if (!lines.length
            ? lastAccumWidth + accumWidth + chWidth > lineWidth
            : accumWidth + chWidth > lineWidth) {
            if (!accumWidth) {
                if (inWord) {
                    lines.push(currentWord);
                    linesWidths.push(currentWordWidth);
                    currentWord = ch;
                    currentWordWidth = chWidth;
                }
                else {
                    lines.push(ch);
                    linesWidths.push(chWidth);
                }
            }
            else if (line || currentWord) {
                if (inWord) {
                    if (!line) {
                        line = currentWord;
                        currentWord = '';
                        currentWordWidth = 0;
                        accumWidth = currentWordWidth;
                    }
                    lines.push(line);
                    linesWidths.push(accumWidth - currentWordWidth);
                    currentWord += ch;
                    currentWordWidth += chWidth;
                    line = '';
                    accumWidth = currentWordWidth;
                }
                else {
                    if (currentWord) {
                        line += currentWord;
                        currentWord = '';
                        currentWordWidth = 0;
                    }
                    lines.push(line);
                    linesWidths.push(accumWidth);
                    line = ch;
                    accumWidth = chWidth;
                }
            }
            continue;
        }
        accumWidth += chWidth;
        if (inWord) {
            currentWord += ch;
            currentWordWidth += chWidth;
        }
        else {
            if (currentWord) {
                line += currentWord;
                currentWord = '';
                currentWordWidth = 0;
            }
            line += ch;
        }
    }
    if (!lines.length && !line) {
        line = text;
        currentWord = '';
        currentWordWidth = 0;
    }
    if (currentWord) {
        line += currentWord;
    }
    if (line) {
        lines.push(line);
        linesWidths.push(accumWidth);
    }
    if (lines.length === 1) {
        accumWidth += lastAccumWidth;
    }
    return {
        accumWidth: accumWidth,
        lines: lines,
        linesWidths: linesWidths
    };
}


}),
35865: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  buildPath: function() { return /* binding */ buildPath; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/vector.js
var vector = __webpack_require__(63261);
;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/helper/smoothBezier.js

function smoothBezier(points, smooth, isLoop, constraint) {
    var cps = [];
    var v = [];
    var v1 = [];
    var v2 = [];
    var prevPoint;
    var nextPoint;
    var min;
    var max;
    if (constraint) {
        min = [Infinity, Infinity];
        max = [-Infinity, -Infinity];
        for (var i = 0, len = points.length; i < len; i++) {
            (0,vector.min)(min, min, points[i]);
            (0,vector.max)(max, max, points[i]);
        }
        (0,vector.min)(min, min, constraint[0]);
        (0,vector.max)(max, max, constraint[1]);
    }
    for (var i = 0, len = points.length; i < len; i++) {
        var point = points[i];
        if (isLoop) {
            prevPoint = points[i ? i - 1 : len - 1];
            nextPoint = points[(i + 1) % len];
        }
        else {
            if (i === 0 || i === len - 1) {
                cps.push((0,vector.clone)(points[i]));
                continue;
            }
            else {
                prevPoint = points[i - 1];
                nextPoint = points[i + 1];
            }
        }
        (0,vector.sub)(v, nextPoint, prevPoint);
        (0,vector.scale)(v, v, smooth);
        var d0 = (0,vector.distance)(point, prevPoint);
        var d1 = (0,vector.distance)(point, nextPoint);
        var sum = d0 + d1;
        if (sum !== 0) {
            d0 /= sum;
            d1 /= sum;
        }
        (0,vector.scale)(v1, v, -d0);
        (0,vector.scale)(v2, v, d1);
        var cp0 = (0,vector.add)([], point, v1);
        var cp1 = (0,vector.add)([], point, v2);
        if (constraint) {
            (0,vector.max)(cp0, cp0, min);
            (0,vector.min)(cp0, cp0, max);
            (0,vector.max)(cp1, cp1, min);
            (0,vector.min)(cp1, cp1, max);
        }
        cps.push(cp0);
        cps.push(cp1);
    }
    if (isLoop) {
        cps.push(cps.shift());
    }
    return cps;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/helper/poly.js

function buildPath(ctx, shape, closePath) {
    var smooth = shape.smooth;
    var points = shape.points;
    if (points && points.length >= 2) {
        if (smooth) {
            var controlPoints = smoothBezier(points, smooth, closePath, shape.smoothConstraint);
            ctx.moveTo(points[0][0], points[0][1]);
            var len = points.length;
            for (var i = 0; i < (closePath ? len : len - 1); i++) {
                var cp1 = controlPoints[i * 2];
                var cp2 = controlPoints[i * 2 + 1];
                var p = points[(i + 1) % len];
                ctx.bezierCurveTo(cp1[0], cp1[1], cp2[0], cp2[1], p[0], p[1]);
            }
        }
        else {
            ctx.moveTo(points[0][0], points[0][1]);
            for (var i = 1, l = points.length; i < l; i++) {
                ctx.lineTo(points[i][0], points[i][1]);
            }
        }
        closePath && ctx.closePath();
    }
}


}),
37763: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  subPixelOptimize: function() { return subPixelOptimize; },
  subPixelOptimizeLine: function() { return subPixelOptimizeLine; },
  subPixelOptimizeRect: function() { return subPixelOptimizeRect; }
});
var round = Math.round;
function subPixelOptimizeLine(outputShape, inputShape, style) {
    if (!inputShape) {
        return;
    }
    var x1 = inputShape.x1;
    var x2 = inputShape.x2;
    var y1 = inputShape.y1;
    var y2 = inputShape.y2;
    outputShape.x1 = x1;
    outputShape.x2 = x2;
    outputShape.y1 = y1;
    outputShape.y2 = y2;
    var lineWidth = style && style.lineWidth;
    if (!lineWidth) {
        return outputShape;
    }
    if (round(x1 * 2) === round(x2 * 2)) {
        outputShape.x1 = outputShape.x2 = subPixelOptimize(x1, lineWidth, true);
    }
    if (round(y1 * 2) === round(y2 * 2)) {
        outputShape.y1 = outputShape.y2 = subPixelOptimize(y1, lineWidth, true);
    }
    return outputShape;
}
function subPixelOptimizeRect(outputShape, inputShape, style) {
    if (!inputShape) {
        return;
    }
    var originX = inputShape.x;
    var originY = inputShape.y;
    var originWidth = inputShape.width;
    var originHeight = inputShape.height;
    outputShape.x = originX;
    outputShape.y = originY;
    outputShape.width = originWidth;
    outputShape.height = originHeight;
    var lineWidth = style && style.lineWidth;
    if (!lineWidth) {
        return outputShape;
    }
    outputShape.x = subPixelOptimize(originX, lineWidth, true);
    outputShape.y = subPixelOptimize(originY, lineWidth, true);
    outputShape.width = Math.max(subPixelOptimize(originX + originWidth, lineWidth, false) - outputShape.x, originWidth === 0 ? 0 : 1);
    outputShape.height = Math.max(subPixelOptimize(originY + originHeight, lineWidth, false) - outputShape.y, originHeight === 0 ? 0 : 1);
    return outputShape;
}
function subPixelOptimize(position, lineWidth, positiveOrNegative) {
    if (!lineWidth) {
        return position;
    }
    var doubledPosition = round(position * 2);
    return (doubledPosition + round(lineWidth)) % 2 === 0
        ? doubledPosition / 2
        : (doubledPosition + (positiveOrNegative ? 1 : -1)) / 2;
}


}),
52902: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ArcShape: function() { return ArcShape; }
});
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var _Path_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49678);


var ArcShape = (function () {
    function ArcShape() {
        this.cx = 0;
        this.cy = 0;
        this.r = 0;
        this.startAngle = 0;
        this.endAngle = Math.PI * 2;
        this.clockwise = true;
    }
    return ArcShape;
}());

var Arc = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(Arc, _super);
    function Arc(opts) {
        return _super.call(this, opts) || this;
    }
    Arc.prototype.getDefaultStyle = function () {
        return {
            stroke: '#000',
            fill: null
        };
    };
    Arc.prototype.getDefaultShape = function () {
        return new ArcShape();
    };
    Arc.prototype.buildPath = function (ctx, shape) {
        var x = shape.cx;
        var y = shape.cy;
        var r = Math.max(shape.r, 0);
        var startAngle = shape.startAngle;
        var endAngle = shape.endAngle;
        var clockwise = shape.clockwise;
        var unitX = Math.cos(startAngle);
        var unitY = Math.sin(startAngle);
        ctx.moveTo(unitX * r + x, unitY * r + y);
        ctx.arc(x, y, r, startAngle, endAngle, !clockwise);
    };
    return Arc;
}(_Path_js__WEBPACK_IMPORTED_MODULE_0__["default"]));
Arc.prototype.type = 'arc';
/* ESM default export */ __webpack_exports__["default"] = (Arc);


}),
80330: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BezierCurveShape: function() { return BezierCurveShape; }
});
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12012);
/* ESM import */var _Path_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49678);
/* ESM import */var _core_vector_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63261);
/* ESM import */var _core_curve_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97566);




var out = [];
var BezierCurveShape = (function () {
    function BezierCurveShape() {
        this.x1 = 0;
        this.y1 = 0;
        this.x2 = 0;
        this.y2 = 0;
        this.cpx1 = 0;
        this.cpy1 = 0;
        this.percent = 1;
    }
    return BezierCurveShape;
}());

function someVectorAt(shape, t, isTangent) {
    var cpx2 = shape.cpx2;
    var cpy2 = shape.cpy2;
    if (cpx2 != null || cpy2 != null) {
        return [
            (isTangent ? _core_curve_js__WEBPACK_IMPORTED_MODULE_0__.cubicDerivativeAt : _core_curve_js__WEBPACK_IMPORTED_MODULE_0__.cubicAt)(shape.x1, shape.cpx1, shape.cpx2, shape.x2, t),
            (isTangent ? _core_curve_js__WEBPACK_IMPORTED_MODULE_0__.cubicDerivativeAt : _core_curve_js__WEBPACK_IMPORTED_MODULE_0__.cubicAt)(shape.y1, shape.cpy1, shape.cpy2, shape.y2, t)
        ];
    }
    else {
        return [
            (isTangent ? _core_curve_js__WEBPACK_IMPORTED_MODULE_0__.quadraticDerivativeAt : _core_curve_js__WEBPACK_IMPORTED_MODULE_0__.quadraticAt)(shape.x1, shape.cpx1, shape.x2, t),
            (isTangent ? _core_curve_js__WEBPACK_IMPORTED_MODULE_0__.quadraticDerivativeAt : _core_curve_js__WEBPACK_IMPORTED_MODULE_0__.quadraticAt)(shape.y1, shape.cpy1, shape.y2, t)
        ];
    }
}
var BezierCurve = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(BezierCurve, _super);
    function BezierCurve(opts) {
        return _super.call(this, opts) || this;
    }
    BezierCurve.prototype.getDefaultStyle = function () {
        return {
            stroke: '#000',
            fill: null
        };
    };
    BezierCurve.prototype.getDefaultShape = function () {
        return new BezierCurveShape();
    };
    BezierCurve.prototype.buildPath = function (ctx, shape) {
        var x1 = shape.x1;
        var y1 = shape.y1;
        var x2 = shape.x2;
        var y2 = shape.y2;
        var cpx1 = shape.cpx1;
        var cpy1 = shape.cpy1;
        var cpx2 = shape.cpx2;
        var cpy2 = shape.cpy2;
        var percent = shape.percent;
        if (percent === 0) {
            return;
        }
        ctx.moveTo(x1, y1);
        if (cpx2 == null || cpy2 == null) {
            if (percent < 1) {
                (0,_core_curve_js__WEBPACK_IMPORTED_MODULE_0__.quadraticSubdivide)(x1, cpx1, x2, percent, out);
                cpx1 = out[1];
                x2 = out[2];
                (0,_core_curve_js__WEBPACK_IMPORTED_MODULE_0__.quadraticSubdivide)(y1, cpy1, y2, percent, out);
                cpy1 = out[1];
                y2 = out[2];
            }
            ctx.quadraticCurveTo(cpx1, cpy1, x2, y2);
        }
        else {
            if (percent < 1) {
                (0,_core_curve_js__WEBPACK_IMPORTED_MODULE_0__.cubicSubdivide)(x1, cpx1, cpx2, x2, percent, out);
                cpx1 = out[1];
                cpx2 = out[2];
                x2 = out[3];
                (0,_core_curve_js__WEBPACK_IMPORTED_MODULE_0__.cubicSubdivide)(y1, cpy1, cpy2, y2, percent, out);
                cpy1 = out[1];
                cpy2 = out[2];
                y2 = out[3];
            }
            ctx.bezierCurveTo(cpx1, cpy1, cpx2, cpy2, x2, y2);
        }
    };
    BezierCurve.prototype.pointAt = function (t) {
        return someVectorAt(this.shape, t, false);
    };
    BezierCurve.prototype.tangentAt = function (t) {
        var p = someVectorAt(this.shape, t, true);
        return _core_vector_js__WEBPACK_IMPORTED_MODULE_3__.normalize(p, p);
    };
    return BezierCurve;
}(_Path_js__WEBPACK_IMPORTED_MODULE_1__["default"]));
;
BezierCurve.prototype.type = 'bezier-curve';
/* ESM default export */ __webpack_exports__["default"] = (BezierCurve);


}),
26768: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CircleShape: function() { return CircleShape; }
});
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var _Path_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49678);


var CircleShape = (function () {
    function CircleShape() {
        this.cx = 0;
        this.cy = 0;
        this.r = 0;
    }
    return CircleShape;
}());

var Circle = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(Circle, _super);
    function Circle(opts) {
        return _super.call(this, opts) || this;
    }
    Circle.prototype.getDefaultShape = function () {
        return new CircleShape();
    };
    Circle.prototype.buildPath = function (ctx, shape) {
        ctx.moveTo(shape.cx + shape.r, shape.cy);
        ctx.arc(shape.cx, shape.cy, shape.r, 0, Math.PI * 2);
    };
    return Circle;
}(_Path_js__WEBPACK_IMPORTED_MODULE_0__["default"]));
;
Circle.prototype.type = 'circle';
/* ESM default export */ __webpack_exports__["default"] = (Circle);


}),
28939: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  EllipseShape: function() { return EllipseShape; }
});
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var _Path_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49678);


var EllipseShape = (function () {
    function EllipseShape() {
        this.cx = 0;
        this.cy = 0;
        this.rx = 0;
        this.ry = 0;
    }
    return EllipseShape;
}());

var Ellipse = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(Ellipse, _super);
    function Ellipse(opts) {
        return _super.call(this, opts) || this;
    }
    Ellipse.prototype.getDefaultShape = function () {
        return new EllipseShape();
    };
    Ellipse.prototype.buildPath = function (ctx, shape) {
        var k = 0.5522848;
        var x = shape.cx;
        var y = shape.cy;
        var a = shape.rx;
        var b = shape.ry;
        var ox = a * k;
        var oy = b * k;
        ctx.moveTo(x - a, y);
        ctx.bezierCurveTo(x - a, y - oy, x - ox, y - b, x, y - b);
        ctx.bezierCurveTo(x + ox, y - b, x + a, y - oy, x + a, y);
        ctx.bezierCurveTo(x + a, y + oy, x + ox, y + b, x, y + b);
        ctx.bezierCurveTo(x - ox, y + b, x - a, y + oy, x - a, y);
        ctx.closePath();
    };
    return Ellipse;
}(_Path_js__WEBPACK_IMPORTED_MODULE_0__["default"]));
Ellipse.prototype.type = 'ellipse';
/* ESM default export */ __webpack_exports__["default"] = (Ellipse);


}),
16504: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  LineShape: function() { return LineShape; }
});
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var _Path_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49678);
/* ESM import */var _helper_subPixelOptimize_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37763);



var subPixelOptimizeOutputShape = {};
var LineShape = (function () {
    function LineShape() {
        this.x1 = 0;
        this.y1 = 0;
        this.x2 = 0;
        this.y2 = 0;
        this.percent = 1;
    }
    return LineShape;
}());

var Line = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(Line, _super);
    function Line(opts) {
        return _super.call(this, opts) || this;
    }
    Line.prototype.getDefaultStyle = function () {
        return {
            stroke: '#000',
            fill: null
        };
    };
    Line.prototype.getDefaultShape = function () {
        return new LineShape();
    };
    Line.prototype.buildPath = function (ctx, shape) {
        var x1;
        var y1;
        var x2;
        var y2;
        if (this.subPixelOptimize) {
            var optimizedShape = (0,_helper_subPixelOptimize_js__WEBPACK_IMPORTED_MODULE_2__.subPixelOptimizeLine)(subPixelOptimizeOutputShape, shape, this.style);
            x1 = optimizedShape.x1;
            y1 = optimizedShape.y1;
            x2 = optimizedShape.x2;
            y2 = optimizedShape.y2;
        }
        else {
            x1 = shape.x1;
            y1 = shape.y1;
            x2 = shape.x2;
            y2 = shape.y2;
        }
        var percent = shape.percent;
        if (percent === 0) {
            return;
        }
        ctx.moveTo(x1, y1);
        if (percent < 1) {
            x2 = x1 * (1 - percent) + x2 * percent;
            y2 = y1 * (1 - percent) + y2 * percent;
        }
        ctx.lineTo(x2, y2);
    };
    Line.prototype.pointAt = function (p) {
        var shape = this.shape;
        return [
            shape.x1 * (1 - p) + shape.x2 * p,
            shape.y1 * (1 - p) + shape.y2 * p
        ];
    };
    return Line;
}(_Path_js__WEBPACK_IMPORTED_MODULE_0__["default"]));
Line.prototype.type = 'line';
/* ESM default export */ __webpack_exports__["default"] = (Line);


}),
71272: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PolygonShape: function() { return PolygonShape; }
});
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var _Path_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49678);
/* ESM import */var _helper_poly_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35865);



var PolygonShape = (function () {
    function PolygonShape() {
        this.points = null;
        this.smooth = 0;
        this.smoothConstraint = null;
    }
    return PolygonShape;
}());

var Polygon = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(Polygon, _super);
    function Polygon(opts) {
        return _super.call(this, opts) || this;
    }
    Polygon.prototype.getDefaultShape = function () {
        return new PolygonShape();
    };
    Polygon.prototype.buildPath = function (ctx, shape) {
        _helper_poly_js__WEBPACK_IMPORTED_MODULE_2__.buildPath(ctx, shape, true);
    };
    return Polygon;
}(_Path_js__WEBPACK_IMPORTED_MODULE_0__["default"]));
;
Polygon.prototype.type = 'polygon';
/* ESM default export */ __webpack_exports__["default"] = (Polygon);


}),
56490: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PolylineShape: function() { return PolylineShape; }
});
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var _Path_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49678);
/* ESM import */var _helper_poly_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35865);



var PolylineShape = (function () {
    function PolylineShape() {
        this.points = null;
        this.percent = 1;
        this.smooth = 0;
        this.smoothConstraint = null;
    }
    return PolylineShape;
}());

var Polyline = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(Polyline, _super);
    function Polyline(opts) {
        return _super.call(this, opts) || this;
    }
    Polyline.prototype.getDefaultStyle = function () {
        return {
            stroke: '#000',
            fill: null
        };
    };
    Polyline.prototype.getDefaultShape = function () {
        return new PolylineShape();
    };
    Polyline.prototype.buildPath = function (ctx, shape) {
        _helper_poly_js__WEBPACK_IMPORTED_MODULE_2__.buildPath(ctx, shape, false);
    };
    return Polyline;
}(_Path_js__WEBPACK_IMPORTED_MODULE_0__["default"]));
Polyline.prototype.type = 'polyline';
/* ESM default export */ __webpack_exports__["default"] = (Polyline);


}),
40361: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  RectShape: function() { return /* binding */ Rect_RectShape; },
  "default": function() { return /* binding */ shape_Rect; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(12012);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Path.js + 3 modules
var Path = __webpack_require__(49678);
;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/helper/roundRect.js
function buildPath(ctx, shape) {
    var x = shape.x;
    var y = shape.y;
    var width = shape.width;
    var height = shape.height;
    var r = shape.r;
    var r1;
    var r2;
    var r3;
    var r4;
    if (width < 0) {
        x = x + width;
        width = -width;
    }
    if (height < 0) {
        y = y + height;
        height = -height;
    }
    if (typeof r === 'number') {
        r1 = r2 = r3 = r4 = r;
    }
    else if (r instanceof Array) {
        if (r.length === 1) {
            r1 = r2 = r3 = r4 = r[0];
        }
        else if (r.length === 2) {
            r1 = r3 = r[0];
            r2 = r4 = r[1];
        }
        else if (r.length === 3) {
            r1 = r[0];
            r2 = r4 = r[1];
            r3 = r[2];
        }
        else {
            r1 = r[0];
            r2 = r[1];
            r3 = r[2];
            r4 = r[3];
        }
    }
    else {
        r1 = r2 = r3 = r4 = 0;
    }
    var total;
    if (r1 + r2 > width) {
        total = r1 + r2;
        r1 *= width / total;
        r2 *= width / total;
    }
    if (r3 + r4 > width) {
        total = r3 + r4;
        r3 *= width / total;
        r4 *= width / total;
    }
    if (r2 + r3 > height) {
        total = r2 + r3;
        r2 *= height / total;
        r3 *= height / total;
    }
    if (r1 + r4 > height) {
        total = r1 + r4;
        r1 *= height / total;
        r4 *= height / total;
    }
    ctx.moveTo(x + r1, y);
    ctx.lineTo(x + width - r2, y);
    r2 !== 0 && ctx.arc(x + width - r2, y + r2, r2, -Math.PI / 2, 0);
    ctx.lineTo(x + width, y + height - r3);
    r3 !== 0 && ctx.arc(x + width - r3, y + height - r3, r3, 0, Math.PI / 2);
    ctx.lineTo(x + r4, y + height);
    r4 !== 0 && ctx.arc(x + r4, y + height - r4, r4, Math.PI / 2, Math.PI);
    ctx.lineTo(x, y + r1);
    r1 !== 0 && ctx.arc(x + r1, y + r1, r1, Math.PI, Math.PI * 1.5);
}

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/helper/subPixelOptimize.js
var subPixelOptimize = __webpack_require__(37763);
;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/Rect.js




var Rect_RectShape = (function () {
    function RectShape() {
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
    }
    return RectShape;
}());

var subPixelOptimizeOutputShape = {};
var Rect_Rect = (function (_super) {
    (0,tslib_es6.__extends)(Rect, _super);
    function Rect(opts) {
        return _super.call(this, opts) || this;
    }
    Rect.prototype.getDefaultShape = function () {
        return new Rect_RectShape();
    };
    Rect.prototype.buildPath = function (ctx, shape) {
        var x;
        var y;
        var width;
        var height;
        if (this.subPixelOptimize) {
            var optimizedShape = (0,subPixelOptimize.subPixelOptimizeRect)(subPixelOptimizeOutputShape, shape, this.style);
            x = optimizedShape.x;
            y = optimizedShape.y;
            width = optimizedShape.width;
            height = optimizedShape.height;
            optimizedShape.r = shape.r;
            shape = optimizedShape;
        }
        else {
            x = shape.x;
            y = shape.y;
            width = shape.width;
            height = shape.height;
        }
        if (!shape.r) {
            ctx.rect(x, y, width, height);
        }
        else {
            buildPath(ctx, shape);
        }
    };
    Rect.prototype.isZeroArea = function () {
        return !this.shape.width || !this.shape.height;
    };
    return Rect;
}(Path["default"]));
Rect_Rect.prototype.type = 'rect';
/* ESM default export */ var shape_Rect = (Rect_Rect);


}),
92183: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  RingShape: function() { return RingShape; }
});
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var _Path_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49678);


var RingShape = (function () {
    function RingShape() {
        this.cx = 0;
        this.cy = 0;
        this.r = 0;
        this.r0 = 0;
    }
    return RingShape;
}());

var Ring = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(Ring, _super);
    function Ring(opts) {
        return _super.call(this, opts) || this;
    }
    Ring.prototype.getDefaultShape = function () {
        return new RingShape();
    };
    Ring.prototype.buildPath = function (ctx, shape) {
        var x = shape.cx;
        var y = shape.cy;
        var PI2 = Math.PI * 2;
        ctx.moveTo(x + shape.r, y);
        ctx.arc(x, y, shape.r, 0, PI2, false);
        ctx.moveTo(x + shape.r0, y);
        ctx.arc(x, y, shape.r0, 0, PI2, true);
    };
    return Ring;
}(_Path_js__WEBPACK_IMPORTED_MODULE_0__["default"]));
Ring.prototype.type = 'ring';
/* ESM default export */ __webpack_exports__["default"] = (Ring);


}),
98289: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  SectorShape: function() { return /* binding */ Sector_SectorShape; },
  "default": function() { return /* binding */ shape_Sector; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(12012);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Path.js + 3 modules
var Path = __webpack_require__(49678);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(96585);
;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/helper/roundSector.js

var PI = Math.PI;
var PI2 = PI * 2;
var mathSin = Math.sin;
var mathCos = Math.cos;
var mathACos = Math.acos;
var mathATan2 = Math.atan2;
var mathAbs = Math.abs;
var mathSqrt = Math.sqrt;
var mathMax = Math.max;
var mathMin = Math.min;
var e = 1e-4;
function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
    var dx10 = x1 - x0;
    var dy10 = y1 - y0;
    var dx32 = x3 - x2;
    var dy32 = y3 - y2;
    var t = dy32 * dx10 - dx32 * dy10;
    if (t * t < e) {
        return;
    }
    t = (dx32 * (y0 - y2) - dy32 * (x0 - x2)) / t;
    return [x0 + t * dx10, y0 + t * dy10];
}
function computeCornerTangents(x0, y0, x1, y1, radius, cr, clockwise) {
    var x01 = x0 - x1;
    var y01 = y0 - y1;
    var lo = (clockwise ? cr : -cr) / mathSqrt(x01 * x01 + y01 * y01);
    var ox = lo * y01;
    var oy = -lo * x01;
    var x11 = x0 + ox;
    var y11 = y0 + oy;
    var x10 = x1 + ox;
    var y10 = y1 + oy;
    var x00 = (x11 + x10) / 2;
    var y00 = (y11 + y10) / 2;
    var dx = x10 - x11;
    var dy = y10 - y11;
    var d2 = dx * dx + dy * dy;
    var r = radius - cr;
    var s = x11 * y10 - x10 * y11;
    var d = (dy < 0 ? -1 : 1) * mathSqrt(mathMax(0, r * r * d2 - s * s));
    var cx0 = (s * dy - dx * d) / d2;
    var cy0 = (-s * dx - dy * d) / d2;
    var cx1 = (s * dy + dx * d) / d2;
    var cy1 = (-s * dx + dy * d) / d2;
    var dx0 = cx0 - x00;
    var dy0 = cy0 - y00;
    var dx1 = cx1 - x00;
    var dy1 = cy1 - y00;
    if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) {
        cx0 = cx1;
        cy0 = cy1;
    }
    return {
        cx: cx0,
        cy: cy0,
        x0: -ox,
        y0: -oy,
        x1: cx0 * (radius / r - 1),
        y1: cy0 * (radius / r - 1)
    };
}
function normalizeCornerRadius(cr) {
    var arr;
    if ((0,util.isArray)(cr)) {
        var len = cr.length;
        if (!len) {
            return cr;
        }
        if (len === 1) {
            arr = [cr[0], cr[0], 0, 0];
        }
        else if (len === 2) {
            arr = [cr[0], cr[0], cr[1], cr[1]];
        }
        else if (len === 3) {
            arr = cr.concat(cr[2]);
        }
        else {
            arr = cr;
        }
    }
    else {
        arr = [cr, cr, cr, cr];
    }
    return arr;
}
function buildPath(ctx, shape) {
    var _a;
    var radius = mathMax(shape.r, 0);
    var innerRadius = mathMax(shape.r0 || 0, 0);
    var hasRadius = radius > 0;
    var hasInnerRadius = innerRadius > 0;
    if (!hasRadius && !hasInnerRadius) {
        return;
    }
    if (!hasRadius) {
        radius = innerRadius;
        innerRadius = 0;
    }
    if (innerRadius > radius) {
        var tmp = radius;
        radius = innerRadius;
        innerRadius = tmp;
    }
    var startAngle = shape.startAngle, endAngle = shape.endAngle;
    if (isNaN(startAngle) || isNaN(endAngle)) {
        return;
    }
    var cx = shape.cx, cy = shape.cy;
    var clockwise = !!shape.clockwise;
    var arc = mathAbs(endAngle - startAngle);
    var mod = arc > PI2 && arc % PI2;
    mod > e && (arc = mod);
    if (!(radius > e)) {
        ctx.moveTo(cx, cy);
    }
    else if (arc > PI2 - e) {
        ctx.moveTo(cx + radius * mathCos(startAngle), cy + radius * mathSin(startAngle));
        ctx.arc(cx, cy, radius, startAngle, endAngle, !clockwise);
        if (innerRadius > e) {
            ctx.moveTo(cx + innerRadius * mathCos(endAngle), cy + innerRadius * mathSin(endAngle));
            ctx.arc(cx, cy, innerRadius, endAngle, startAngle, clockwise);
        }
    }
    else {
        var icrStart = void 0;
        var icrEnd = void 0;
        var ocrStart = void 0;
        var ocrEnd = void 0;
        var ocrs = void 0;
        var ocre = void 0;
        var icrs = void 0;
        var icre = void 0;
        var ocrMax = void 0;
        var icrMax = void 0;
        var limitedOcrMax = void 0;
        var limitedIcrMax = void 0;
        var xre = void 0;
        var yre = void 0;
        var xirs = void 0;
        var yirs = void 0;
        var xrs = radius * mathCos(startAngle);
        var yrs = radius * mathSin(startAngle);
        var xire = innerRadius * mathCos(endAngle);
        var yire = innerRadius * mathSin(endAngle);
        var hasArc = arc > e;
        if (hasArc) {
            var cornerRadius = shape.cornerRadius;
            if (cornerRadius) {
                _a = normalizeCornerRadius(cornerRadius), icrStart = _a[0], icrEnd = _a[1], ocrStart = _a[2], ocrEnd = _a[3];
            }
            var halfRd = mathAbs(radius - innerRadius) / 2;
            ocrs = mathMin(halfRd, ocrStart);
            ocre = mathMin(halfRd, ocrEnd);
            icrs = mathMin(halfRd, icrStart);
            icre = mathMin(halfRd, icrEnd);
            limitedOcrMax = ocrMax = mathMax(ocrs, ocre);
            limitedIcrMax = icrMax = mathMax(icrs, icre);
            if (ocrMax > e || icrMax > e) {
                xre = radius * mathCos(endAngle);
                yre = radius * mathSin(endAngle);
                xirs = innerRadius * mathCos(startAngle);
                yirs = innerRadius * mathSin(startAngle);
                if (arc < PI) {
                    var it_1 = intersect(xrs, yrs, xirs, yirs, xre, yre, xire, yire);
                    if (it_1) {
                        var x0 = xrs - it_1[0];
                        var y0 = yrs - it_1[1];
                        var x1 = xre - it_1[0];
                        var y1 = yre - it_1[1];
                        var a = 1 / mathSin(mathACos((x0 * x1 + y0 * y1) / (mathSqrt(x0 * x0 + y0 * y0) * mathSqrt(x1 * x1 + y1 * y1))) / 2);
                        var b = mathSqrt(it_1[0] * it_1[0] + it_1[1] * it_1[1]);
                        limitedOcrMax = mathMin(ocrMax, (radius - b) / (a + 1));
                        limitedIcrMax = mathMin(icrMax, (innerRadius - b) / (a - 1));
                    }
                }
            }
        }
        if (!hasArc) {
            ctx.moveTo(cx + xrs, cy + yrs);
        }
        else if (limitedOcrMax > e) {
            var crStart = mathMin(ocrStart, limitedOcrMax);
            var crEnd = mathMin(ocrEnd, limitedOcrMax);
            var ct0 = computeCornerTangents(xirs, yirs, xrs, yrs, radius, crStart, clockwise);
            var ct1 = computeCornerTangents(xre, yre, xire, yire, radius, crEnd, clockwise);
            ctx.moveTo(cx + ct0.cx + ct0.x0, cy + ct0.cy + ct0.y0);
            if (limitedOcrMax < ocrMax && crStart === crEnd) {
                ctx.arc(cx + ct0.cx, cy + ct0.cy, limitedOcrMax, mathATan2(ct0.y0, ct0.x0), mathATan2(ct1.y0, ct1.x0), !clockwise);
            }
            else {
                crStart > 0 && ctx.arc(cx + ct0.cx, cy + ct0.cy, crStart, mathATan2(ct0.y0, ct0.x0), mathATan2(ct0.y1, ct0.x1), !clockwise);
                ctx.arc(cx, cy, radius, mathATan2(ct0.cy + ct0.y1, ct0.cx + ct0.x1), mathATan2(ct1.cy + ct1.y1, ct1.cx + ct1.x1), !clockwise);
                crEnd > 0 && ctx.arc(cx + ct1.cx, cy + ct1.cy, crEnd, mathATan2(ct1.y1, ct1.x1), mathATan2(ct1.y0, ct1.x0), !clockwise);
            }
        }
        else {
            ctx.moveTo(cx + xrs, cy + yrs);
            ctx.arc(cx, cy, radius, startAngle, endAngle, !clockwise);
        }
        if (!(innerRadius > e) || !hasArc) {
            ctx.lineTo(cx + xire, cy + yire);
        }
        else if (limitedIcrMax > e) {
            var crStart = mathMin(icrStart, limitedIcrMax);
            var crEnd = mathMin(icrEnd, limitedIcrMax);
            var ct0 = computeCornerTangents(xire, yire, xre, yre, innerRadius, -crEnd, clockwise);
            var ct1 = computeCornerTangents(xrs, yrs, xirs, yirs, innerRadius, -crStart, clockwise);
            ctx.lineTo(cx + ct0.cx + ct0.x0, cy + ct0.cy + ct0.y0);
            if (limitedIcrMax < icrMax && crStart === crEnd) {
                ctx.arc(cx + ct0.cx, cy + ct0.cy, limitedIcrMax, mathATan2(ct0.y0, ct0.x0), mathATan2(ct1.y0, ct1.x0), !clockwise);
            }
            else {
                crEnd > 0 && ctx.arc(cx + ct0.cx, cy + ct0.cy, crEnd, mathATan2(ct0.y0, ct0.x0), mathATan2(ct0.y1, ct0.x1), !clockwise);
                ctx.arc(cx, cy, innerRadius, mathATan2(ct0.cy + ct0.y1, ct0.cx + ct0.x1), mathATan2(ct1.cy + ct1.y1, ct1.cx + ct1.x1), clockwise);
                crStart > 0 && ctx.arc(cx + ct1.cx, cy + ct1.cy, crStart, mathATan2(ct1.y1, ct1.x1), mathATan2(ct1.y0, ct1.x0), !clockwise);
            }
        }
        else {
            ctx.lineTo(cx + xire, cy + yire);
            ctx.arc(cx, cy, innerRadius, endAngle, startAngle, clockwise);
        }
    }
    ctx.closePath();
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/Sector.js



var Sector_SectorShape = (function () {
    function SectorShape() {
        this.cx = 0;
        this.cy = 0;
        this.r0 = 0;
        this.r = 0;
        this.startAngle = 0;
        this.endAngle = Math.PI * 2;
        this.clockwise = true;
        this.cornerRadius = 0;
    }
    return SectorShape;
}());

var Sector_Sector = (function (_super) {
    (0,tslib_es6.__extends)(Sector, _super);
    function Sector(opts) {
        return _super.call(this, opts) || this;
    }
    Sector.prototype.getDefaultShape = function () {
        return new Sector_SectorShape();
    };
    Sector.prototype.buildPath = function (ctx, shape) {
        buildPath(ctx, shape);
    };
    Sector.prototype.isZeroArea = function () {
        return this.shape.startAngle === this.shape.endAngle
            || this.shape.r === this.shape.r0;
    };
    return Sector;
}(Path["default"]));
Sector_Sector.prototype.type = 'sector';
/* ESM default export */ var shape_Sector = (Sector_Sector);


}),

}]);