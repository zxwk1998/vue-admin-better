"use strict";
(self["webpackChunkvue_admin_better"] = self["webpackChunkvue_admin_better"] || []).push([["2452"], {
94621: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  formatTime: function() { return formatTime; },
  off: function() { return off; },
  on: function() { return on; },
  paramObj: function() { return paramObj; },
  parseTime: function() { return parseTime; },
  random: function() { return random; },
  tenBitTimestamp: function() { return tenBitTimestamp; },
  thirteenBitTimestamp: function() { return thirteenBitTimestamp; },
  translateDataToTree: function() { return translateDataToTree; },
  translateTreeToData: function() { return translateTreeToData; },
  uuid: function() { return uuid; }
});
/* ESM import */var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45088);
/* ESM import */var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* ESM import */var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46846);
/* ESM import */var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* ESM import */var core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25885);
/* ESM import */var core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* ESM import */var core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47827);
/* ESM import */var core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_3__);




/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 格式化时间
 * @param time
 * @param cFormat
 * @returns {string|null}
 */
function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null;
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
  let date;
  if (typeof time === 'object') {
    date = time;
  } else {
    if (typeof time === 'string' && /^[0-9]+$/.test(time)) {
      time = parseInt(time);
    }
    if (typeof time === 'number' && time.toString().length === 10) {
      time = time * 1000;
    }
    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  };
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key];
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value];
    }
    if (result.length > 0 && value < 10) {
      value = `0${value}`;
    }
    return value || 0;
  });
  return time_str;
}

/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 格式化时间
 * @param time
 * @param option
 * @returns {string}
 */
function formatTime(time, option) {
  if (`${time}`.length === 10) {
    time = parseInt(time) * 1000;
  } else {
    time = +time;
  }
  const d = new Date(time);
  const now = Date.now();
  const diff = (now - d) / 1000;
  if (diff < 30) {
    return '刚刚';
  } else if (diff < 3600) {
    // less 1 hour
    return `${Math.ceil(diff / 60)}分钟前`;
  } else if (diff < 3600 * 24) {
    return `${Math.ceil(diff / 3600)}小时前`;
  } else if (diff < 3600 * 24 * 2) {
    return '1天前';
  }
  if (option) {
    return parseTime(time, option);
  } else {
    return `${d.getMonth() + 1}月${d.getDate()}日${d.getHours()}时${d.getMinutes()}分`;
  }
}

/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 将url请求参数转为json格式
 * @param url
 * @returns {{}|any}
 */
function paramObj(url) {
  const search = url.split('?')[1];
  if (!search) {
    return {};
  }
  return JSON.parse(`{"${decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"').replace(/\+/g, ' ')}"}`);
}

/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 父子关系的数组转换成树形结构数据
 * @param data
 * @returns {*}
 */
function translateDataToTree(data) {
  const parent = data.filter(value => value.parentId === 'undefined' || value.parentId == null);
  const children = data.filter(value => value.parentId !== 'undefined' && value.parentId != null);
  const translator = (parent, children) => {
    parent.forEach(parent => {
      children.forEach((current, index) => {
        if (current.parentId === parent.id) {
          const temp = JSON.parse(JSON.stringify(children));
          temp.splice(index, 1);
          translator([current], temp);
          typeof parent.children !== 'undefined' ? parent.children.push(current) : parent.children = [current];
        }
      });
    });
  };
  translator(parent, children);
  return parent;
}

/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 树形结构数据转换成父子关系的数组
 * @param data
 * @returns {[]}
 */
function translateTreeToData(data) {
  const result = [];
  data.forEach(item => {
    const loop = data => {
      result.push({
        id: data.id,
        name: data.name,
        parentId: data.parentId
      });
      const child = data.children;
      if (child) {
        for (let i = 0; i < child.length; i++) {
          loop(child[i]);
        }
      }
    };
    loop(item);
  });
  return result;
}

/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 10位时间戳转换
 * @param time
 * @returns {string}
 */
function tenBitTimestamp(time) {
  const date = new Date(time * 1000);
  const y = date.getFullYear();
  let m = date.getMonth() + 1;
  m = m < 10 ? `${m}` : m;
  let d = date.getDate();
  d = d < 10 ? `${d}` : d;
  let h = date.getHours();
  h = h < 10 ? `0${h}` : h;
  let minute = date.getMinutes();
  let second = date.getSeconds();
  minute = minute < 10 ? `0${minute}` : minute;
  second = second < 10 ? `0${second}` : second;
  return `${y}年${m}月${d}日 ${h}:${minute}:${second}`; //组合
}

/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 13位时间戳转换
 * @param time
 * @returns {string}
 */
function thirteenBitTimestamp(time) {
  const date = new Date(time / 1);
  const y = date.getFullYear();
  let m = date.getMonth() + 1;
  m = m < 10 ? `${m}` : m;
  let d = date.getDate();
  d = d < 10 ? `${d}` : d;
  let h = date.getHours();
  h = h < 10 ? `0${h}` : h;
  let minute = date.getMinutes();
  let second = date.getSeconds();
  minute = minute < 10 ? `0${minute}` : minute;
  second = second < 10 ? `0${second}` : second;
  return `${y}年${m}月${d}日 ${h}:${minute}:${second}`; //组合
}

/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description 获取随机id
 * @param length
 * @returns {string}
 */
function uuid(length = 32) {
  const num = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
  let str = '';
  for (let i = 0; i < length; i++) {
    str += num.charAt(Math.floor(Math.random() * num.length));
  }
  return str;
}

/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description m到n的随机数
 * @param m
 * @param n
 * @returns {number}
 */
function random(m, n) {
  return Math.floor(Math.random() * (m - n) + n);
}

/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description addEventListener
 * @type {function(...[*]=)}
 */
const on = function () {
  return function (element, event, handler, useCapture = false) {
    if (element && event && handler) {
      element.addEventListener(event, handler, useCapture);
    }
  };
}();

/**
 * @author https://github.com/zxwk1998/vue-admin-better （不想保留author可删除）
 * @description removeEventListener
 * @type {function(...[*]=)}
 */
const off = function () {
  return function (element, event, handler, useCapture = false) {
    if (element && event) {
      element.removeEventListener(event, handler, useCapture);
    }
  };
}();

}),

}]);