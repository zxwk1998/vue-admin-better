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
(self["rspackChunkvue_admin_better"] = self["rspackChunkvue_admin_better"] || []).push([[9505], {
50876: (function (__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
var raf = null;
function requestAnimationFrame (callback) {
  if (!raf) {
    raf = (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function (callback) {
        return setTimeout(callback, 16)
      }
    ).bind(window);
  }
  return raf(callback)
}

var caf = null;
function cancelAnimationFrame (id) {
  if (!caf) {
    caf = (
      window.cancelAnimationFrame ||
      window.webkitCancelAnimationFrame ||
      window.mozCancelAnimationFrame ||
      function (id) {
        clearTimeout(id);
      }
    ).bind(window);
  }

  caf(id);
}

function createStyles (styleText) {
  var style = document.createElement('style');

  if (style.styleSheet) {
    style.styleSheet.cssText = styleText;
  } else {
    style.appendChild(document.createTextNode(styleText));
  }
  (document.querySelector('head') || document.body).appendChild(style);
  return style
}

function createElement (tagName, props) {
  if ( props === void 0 ) props = {};

  var elem = document.createElement(tagName);
  Object.keys(props).forEach(function (key) {
    elem[key] = props[key];
  });
  return elem
}

function getComputedStyle (elem, prop, pseudo) {
  // for older versions of Firefox, `getComputedStyle` required
  // the second argument and may return `null` for some elements
  // when `display: none`
  var computedStyle = window.getComputedStyle(elem, pseudo || null) || {
    display: 'none'
  };

  return computedStyle[prop]
}

function getRenderInfo (elem) {
  if (!document.documentElement.contains(elem)) {
    return {
      detached: true,
      rendered: false
    }
  }

  var current = elem;
  while (current !== document) {
    if (getComputedStyle(current, 'display') === 'none') {
      return {
        detached: false,
        rendered: false
      }
    }
    current = current.parentNode;
  }

  return {
    detached: false,
    rendered: true
  }
}

var css_248z = ".resize-triggers{visibility:hidden;opacity:0;pointer-events:none}.resize-contract-trigger,.resize-contract-trigger:before,.resize-expand-trigger,.resize-triggers{content:\"\";position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden}.resize-contract-trigger,.resize-expand-trigger{background:#eee;overflow:auto}.resize-contract-trigger:before{width:200%;height:200%}";

var total = 0;
var style = null;

function addListener (elem, callback) {
  if (!elem.__resize_mutation_handler__) {
    elem.__resize_mutation_handler__ = handleMutation.bind(elem);
  }

  var listeners = elem.__resize_listeners__;

  if (!listeners) {
    elem.__resize_listeners__ = [];
    if (window.ResizeObserver) {
      var offsetWidth = elem.offsetWidth;
      var offsetHeight = elem.offsetHeight;
      var ro = new ResizeObserver(function () {
        if (!elem.__resize_observer_triggered__) {
          elem.__resize_observer_triggered__ = true;
          if (elem.offsetWidth === offsetWidth && elem.offsetHeight === offsetHeight) {
            return
          }
        }
        runCallbacks(elem);
      });

      // initially display none won't trigger ResizeObserver callback
      var ref = getRenderInfo(elem);
      var detached = ref.detached;
      var rendered = ref.rendered;
      elem.__resize_observer_triggered__ = detached === false && rendered === false;
      elem.__resize_observer__ = ro;
      ro.observe(elem);
    } else if (elem.attachEvent && elem.addEventListener) {
      // targeting IE9/10
      elem.__resize_legacy_resize_handler__ = function handleLegacyResize () {
        runCallbacks(elem);
      };
      elem.attachEvent('onresize', elem.__resize_legacy_resize_handler__);
      document.addEventListener('DOMSubtreeModified', elem.__resize_mutation_handler__);
    } else {
      if (!total) {
        style = createStyles(css_248z);
      }
      initTriggers(elem);

      elem.__resize_rendered__ = getRenderInfo(elem).rendered;
      if (window.MutationObserver) {
        var mo = new MutationObserver(elem.__resize_mutation_handler__);
        mo.observe(document, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true
        });
        elem.__resize_mutation_observer__ = mo;
      }
    }
  }

  elem.__resize_listeners__.push(callback);
  total++;
}

function removeListener (elem, callback) {
  var listeners = elem.__resize_listeners__;
  if (!listeners) {
    return
  }

  if (callback) {
    listeners.splice(listeners.indexOf(callback), 1);
  }

  // no listeners exist, or removing all listeners
  if (!listeners.length || !callback) {
    // targeting IE9/10
    if (elem.detachEvent && elem.removeEventListener) {
      elem.detachEvent('onresize', elem.__resize_legacy_resize_handler__);
      document.removeEventListener('DOMSubtreeModified', elem.__resize_mutation_handler__);
      return
    }

    if (elem.__resize_observer__) {
      elem.__resize_observer__.unobserve(elem);
      elem.__resize_observer__.disconnect();
      elem.__resize_observer__ = null;
    } else {
      if (elem.__resize_mutation_observer__) {
        elem.__resize_mutation_observer__.disconnect();
        elem.__resize_mutation_observer__ = null;
      }
      elem.removeEventListener('scroll', handleScroll);
      elem.removeChild(elem.__resize_triggers__.triggers);
      elem.__resize_triggers__ = null;
    }
    elem.__resize_listeners__ = null;
  }

  if (!--total && style) {
    style.parentNode.removeChild(style);
  }
}

function getUpdatedSize (elem) {
  var ref = elem.__resize_last__;
  var width = ref.width;
  var height = ref.height;
  var offsetWidth = elem.offsetWidth;
  var offsetHeight = elem.offsetHeight;
  if (offsetWidth !== width || offsetHeight !== height) {
    return {
      width: offsetWidth,
      height: offsetHeight
    }
  }
  return null
}

function handleMutation () {
  // `this` denotes the scrolling element
  var ref = getRenderInfo(this);
  var rendered = ref.rendered;
  var detached = ref.detached;
  if (rendered !== this.__resize_rendered__) {
    if (!detached && this.__resize_triggers__) {
      resetTriggers(this);
      this.addEventListener('scroll', handleScroll, true);
    }
    this.__resize_rendered__ = rendered;
    runCallbacks(this);
  }
}

function handleScroll () {
  var this$1 = this;

  // `this` denotes the scrolling element
  resetTriggers(this);
  if (this.__resize_raf__) {
    cancelAnimationFrame(this.__resize_raf__);
  }
  this.__resize_raf__ = requestAnimationFrame(function () {
    var updated = getUpdatedSize(this$1);
    if (updated) {
      this$1.__resize_last__ = updated;
      runCallbacks(this$1);
    }
  });
}

function runCallbacks (elem) {
  if (!elem || !elem.__resize_listeners__) {
    return
  }
  elem.__resize_listeners__.forEach(function (callback) {
    callback.call(elem, elem);
  });
}

function initTriggers (elem) {
  var position = getComputedStyle(elem, 'position');
  if (!position || position === 'static') {
    elem.style.position = 'relative';
  }

  elem.__resize_old_position__ = position;
  elem.__resize_last__ = {};

  var triggers = createElement('div', {
    className: 'resize-triggers'
  });
  var expand = createElement('div', {
    className: 'resize-expand-trigger'
  });
  var expandChild = createElement('div');
  var contract = createElement('div', {
    className: 'resize-contract-trigger'
  });
  expand.appendChild(expandChild);
  triggers.appendChild(expand);
  triggers.appendChild(contract);
  elem.appendChild(triggers);

  elem.__resize_triggers__ = {
    triggers: triggers,
    expand: expand,
    expandChild: expandChild,
    contract: contract
  };

  resetTriggers(elem);
  elem.addEventListener('scroll', handleScroll, true);

  elem.__resize_last__ = {
    width: elem.offsetWidth,
    height: elem.offsetHeight
  };
}

function resetTriggers (elem) {
  var ref = elem.__resize_triggers__;
  var expand = ref.expand;
  var expandChild = ref.expandChild;
  var contract = ref.contract;

  // batch read
  var csw = contract.scrollWidth;
  var csh = contract.scrollHeight;
  var eow = expand.offsetWidth;
  var eoh = expand.offsetHeight;
  var esw = expand.scrollWidth;
  var esh = expand.scrollHeight;

  // batch write
  contract.scrollLeft = csw;
  contract.scrollTop = csh;
  expandChild.style.width = eow + 1 + 'px';
  expandChild.style.height = eoh + 1 + 'px';
  expand.scrollLeft = esw;
  expand.scrollTop = esh;
}



__webpack_require__.d(__webpack_exports__, {
}, {
  addListener: addListener,
  removeListener: removeListener
});


}),
36726: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var zrender_lib_core_util_js__rspack_import_0 = __webpack_require__(75275);
/* import */ var _clazz_js__rspack_import_1 = __webpack_require__(41874);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * Usage of query:
 * `chart.on('click', query, handler);`
 * The `query` can be:
 * + The component type query string, only `mainType` or `mainType.subType`,
 *   like: 'xAxis', 'series', 'xAxis.category' or 'series.line'.
 * + The component query object, like:
 *   `{seriesIndex: 2}`, `{seriesName: 'xx'}`, `{seriesId: 'some'}`,
 *   `{xAxisIndex: 2}`, `{xAxisName: 'xx'}`, `{xAxisId: 'some'}`.
 * + The data query object, like:
 *   `{dataIndex: 123}`, `{dataType: 'link'}`, `{name: 'some'}`.
 * + The other query object (cmponent customized query), like:
 *   `{element: 'some'}` (only available in custom series).
 *
 * Caveat: If a prop in the `query` object is `null/undefined`, it is the
 * same as there is no such prop in the `query` object.
 */
var ECEventProcessor = /** @class */function () {
  function ECEventProcessor() {}
  ECEventProcessor.prototype.normalizeQuery = function (query) {
    var cptQuery = {};
    var dataQuery = {};
    var otherQuery = {};
    // `query` is `mainType` or `mainType.subType` of component.
    if (zrender_lib_core_util_js__rspack_import_0.isString(query)) {
      var condCptType = (0,_clazz_js__rspack_import_1.parseClassType)(query);
      // `.main` and `.sub` may be ''.
      cptQuery.mainType = condCptType.main || null;
      cptQuery.subType = condCptType.sub || null;
    }
    // `query` is an object, convert to {mainType, index, name, id}.
    else {
      // `xxxIndex`, `xxxName`, `xxxId`, `name`, `dataIndex`, `dataType` is reserved,
      // can not be used in `compomentModel.filterForExposedEvent`.
      var suffixes_1 = ['Index', 'Name', 'Id'];
      var dataKeys_1 = {
        name: 1,
        dataIndex: 1,
        dataType: 1
      };
      zrender_lib_core_util_js__rspack_import_0.each(query, function (val, key) {
        var reserved = false;
        for (var i = 0; i < suffixes_1.length; i++) {
          var propSuffix = suffixes_1[i];
          var suffixPos = key.lastIndexOf(propSuffix);
          if (suffixPos > 0 && suffixPos === key.length - propSuffix.length) {
            var mainType = key.slice(0, suffixPos);
            // Consider `dataIndex`.
            if (mainType !== 'data') {
              cptQuery.mainType = mainType;
              cptQuery[propSuffix.toLowerCase()] = val;
              reserved = true;
            }
          }
        }
        if (dataKeys_1.hasOwnProperty(key)) {
          dataQuery[key] = val;
          reserved = true;
        }
        if (!reserved) {
          otherQuery[key] = val;
        }
      });
    }
    return {
      cptQuery: cptQuery,
      dataQuery: dataQuery,
      otherQuery: otherQuery
    };
  };
  ECEventProcessor.prototype.filter = function (eventType, query) {
    // They should be assigned before each trigger call.
    var eventInfo = this.eventInfo;
    if (!eventInfo) {
      return true;
    }
    var targetEl = eventInfo.targetEl;
    var packedEvent = eventInfo.packedEvent;
    var model = eventInfo.model;
    var view = eventInfo.view;
    // For event like 'globalout'.
    if (!model || !view) {
      return true;
    }
    var cptQuery = query.cptQuery;
    var dataQuery = query.dataQuery;
    return check(cptQuery, model, 'mainType') && check(cptQuery, model, 'subType') && check(cptQuery, model, 'index', 'componentIndex') && check(cptQuery, model, 'name') && check(cptQuery, model, 'id') && check(dataQuery, packedEvent, 'name') && check(dataQuery, packedEvent, 'dataIndex') && check(dataQuery, packedEvent, 'dataType') && (!view.filterForExposedEvent || view.filterForExposedEvent(eventType, query.otherQuery, targetEl, packedEvent));
    function check(query, host, prop, propOnHost) {
      return query[prop] == null || host[propOnHost || prop] === query[prop];
    }
  };
  ECEventProcessor.prototype.afterTrigger = function () {
    // Make sure the eventInfo won't be used in next trigger.
    this.eventInfo = null;
  };
  return ECEventProcessor;
}();

;
__webpack_require__.d(__webpack_exports__, {
}, {
  ECEventProcessor: ECEventProcessor
});


}),
710: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/
/**
 * Animate multiple elements with a single done-callback.
 *
 * @example
 *  animation
 *      .createWrap()
 *      .add(el1, {x: 10, y: 10})
 *      .add(el2, {shape: {width: 500}, style: {fill: 'red'}}, 400)
 *      .done(function () { // done })
 *      .start('cubicOut');
 */
var AnimationWrap = /** @class */function () {
  function AnimationWrap() {
    this._storage = [];
    this._elExistsMap = {};
  }
  /**
   * Caution: a el can only be added once, otherwise 'done'
   * might not be called. This method checks this (by el.id),
   * suppresses adding and returns false when existing el found.
   *
   * @return Whether adding succeeded.
   */
  AnimationWrap.prototype.add = function (el, target, duration, delay, easing) {
    if (this._elExistsMap[el.id]) {
      return false;
    }
    this._elExistsMap[el.id] = true;
    this._storage.push({
      el: el,
      target: target,
      duration: duration,
      delay: delay,
      easing: easing
    });
    return true;
  };
  /**
   * Only execute when animation done/aborted.
   */
  AnimationWrap.prototype.finished = function (callback) {
    this._finishedCallback = callback;
    return this;
  };
  /**
   * Will stop exist animation firstly.
   */
  AnimationWrap.prototype.start = function () {
    var _this = this;
    var count = this._storage.length;
    var checkTerminate = function () {
      count--;
      if (count <= 0) {
        // Guard.
        _this._storage.length = 0;
        _this._elExistsMap = {};
        _this._finishedCallback && _this._finishedCallback();
      }
    };
    for (var i = 0, len = this._storage.length; i < len; i++) {
      var item = this._storage[i];
      item.el.animateTo(item.target, {
        duration: item.duration,
        delay: item.delay,
        easing: item.easing,
        setToFinal: true,
        done: checkTerminate,
        aborted: checkTerminate
      });
    }
    return this;
  };
  return AnimationWrap;
}();
function createWrap() {
  return new AnimationWrap();
}
__webpack_require__.d(__webpack_exports__, {
}, {
  createWrap: createWrap
});


}),
41874: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var tslib__rspack_import_1 = __webpack_require__(2492);
/* import */ var zrender_lib_core_util_js__rspack_import_0 = __webpack_require__(75275);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


var TYPE_DELIMITER = '.';
var IS_CONTAINER = '___EC__COMPONENT__CONTAINER___';
var IS_EXTENDED_CLASS = '___EC__EXTENDED_CLASS___';
/**
 * Notice, parseClassType('') should returns {main: '', sub: ''}
 * @public
 */
function parseClassType(componentType) {
  var ret = {
    main: '',
    sub: ''
  };
  if (componentType) {
    var typeArr = componentType.split(TYPE_DELIMITER);
    ret.main = typeArr[0] || '';
    ret.sub = typeArr[1] || '';
  }
  return ret;
}
/**
 * @public
 */
function checkClassType(componentType) {
  zrender_lib_core_util_js__rspack_import_0.assert(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(componentType), 'componentType "' + componentType + '" illegal');
}
function isExtendedClass(clz) {
  return !!(clz && clz[IS_EXTENDED_CLASS]);
}
/**
 * Implements `ExtendableConstructor` for `rootClz`.
 *
 * @usage
 * ```ts
 * class Xxx {}
 * type XxxConstructor = typeof Xxx & ExtendableConstructor
 * enableClassExtend(Xxx as XxxConstructor);
 * ```
 */
function enableClassExtend(rootClz, mandatoryMethods) {
  rootClz.$constructor = rootClz; // FIXME: not necessary?
  rootClz.extend = function (proto) {
    if (false) {}
    var superClass = this;
    var ExtendedClass;
    if (isESClass(superClass)) {
      ExtendedClass = /** @class */function (_super) {
        (0,tslib__rspack_import_1.__extends)(class_1, _super);
        function class_1() {
          return _super.apply(this, arguments) || this;
        }
        return class_1;
      }(superClass);
    } else {
      // For backward compat, we both support ts class inheritance and this
      // "extend" approach.
      // The constructor should keep the same behavior as ts class inheritance:
      // If this constructor/$constructor is not declared, auto invoke the super
      // constructor.
      // If this constructor/$constructor is declared, it is responsible for
      // calling the super constructor.
      ExtendedClass = function () {
        (proto.$constructor || superClass).apply(this, arguments);
      };
      zrender_lib_core_util_js__rspack_import_0.inherits(ExtendedClass, this);
    }
    zrender_lib_core_util_js__rspack_import_0.extend(ExtendedClass.prototype, proto);
    ExtendedClass[IS_EXTENDED_CLASS] = true;
    ExtendedClass.extend = this.extend;
    ExtendedClass.superCall = superCall;
    ExtendedClass.superApply = superApply;
    ExtendedClass.superClass = superClass;
    return ExtendedClass;
  };
}
function isESClass(fn) {
  return zrender_lib_core_util_js__rspack_import_0.isFunction(fn) && /^class\s/.test(Function.prototype.toString.call(fn));
}
/**
 * A work around to both support ts extend and this extend mechanism.
 * on sub-class.
 * @usage
 * ```ts
 * class Component { ... }
 * classUtil.enableClassExtend(Component);
 * classUtil.enableClassManagement(Component, {registerWhenExtend: true});
 *
 * class Series extends Component { ... }
 * // Without calling `markExtend`, `registerWhenExtend` will not work.
 * Component.markExtend(Series);
 * ```
 */
function mountExtend(SubClz, SupperClz) {
  SubClz.extend = SupperClz.extend;
}
// A random offset.
var classBase = Math.round(Math.random() * 10);
/**
 * Implements `CheckableConstructor` for `target`.
 * Can not use instanceof, consider different scope by
 * cross domain or es module import in ec extensions.
 * Mount a method "isInstance()" to Clz.
 *
 * @usage
 * ```ts
 * class Xxx {}
 * type XxxConstructor = typeof Xxx & CheckableConstructor;
 * enableClassCheck(Xxx as XxxConstructor)
 * ```
 */
function enableClassCheck(target) {
  var classAttr = ['__\0is_clz', classBase++].join('_');
  target.prototype[classAttr] = true;
  if (false) {}
  target.isInstance = function (obj) {
    return !!(obj && obj[classAttr]);
  };
}
// superCall should have class info, which can not be fetched from 'this'.
// Consider this case:
// class A has method f,
// class B inherits class A, overrides method f, f call superApply('f'),
// class C inherits class B, does not override method f,
// then when method of class C is called, dead loop occurred.
function superCall(context, methodName) {
  var args = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    args[_i - 2] = arguments[_i];
  }
  return this.superClass.prototype[methodName].apply(context, args);
}
function superApply(context, methodName, args) {
  return this.superClass.prototype[methodName].apply(context, args);
}
/**
 * Implements `ClassManager` for `target`
 *
 * @usage
 * ```ts
 * class Xxx {}
 * type XxxConstructor = typeof Xxx & ClassManager
 * enableClassManagement(Xxx as XxxConstructor);
 * ```
 */
function enableClassManagement(target) {
  /**
   * Component model classes
   * key: componentType,
   * value:
   *     componentClass, when componentType is 'a'
   *     or Object.<subKey, componentClass>, when componentType is 'a.b'
   */
  var storage = {};
  target.registerClass = function (clz) {
    // `type` should not be a "instance member".
    // If using TS class, should better declared as `static type = 'series.pie'`.
    // otherwise users have to mount `type` on prototype manually.
    // For backward compat and enable instance visit type via `this.type`,
    // we still support fetch `type` from prototype.
    var componentFullType = clz.type || clz.prototype.type;
    if (componentFullType) {
      checkClassType(componentFullType);
      // If only static type declared, we assign it to prototype mandatorily.
      clz.prototype.type = componentFullType;
      var componentTypeInfo = parseClassType(componentFullType);
      if (!componentTypeInfo.sub) {
        if (false) {}
        storage[componentTypeInfo.main] = clz;
      } else if (componentTypeInfo.sub !== IS_CONTAINER) {
        var container = makeContainer(componentTypeInfo);
        container[componentTypeInfo.sub] = clz;
      }
    }
    return clz;
  };
  target.getClass = function (mainType, subType, throwWhenNotFound) {
    var clz = storage[mainType];
    if (clz && clz[IS_CONTAINER]) {
      clz = subType ? clz[subType] : null;
    }
    if (throwWhenNotFound && !clz) {
      throw new Error(!subType ? mainType + '.' + 'type should be specified.' : 'Component ' + mainType + '.' + (subType || '') + ' is used but not imported.');
    }
    return clz;
  };
  target.getClassesByMainType = function (componentType) {
    var componentTypeInfo = parseClassType(componentType);
    var result = [];
    var obj = storage[componentTypeInfo.main];
    if (obj && obj[IS_CONTAINER]) {
      zrender_lib_core_util_js__rspack_import_0.each(obj, function (o, type) {
        type !== IS_CONTAINER && result.push(o);
      });
    } else {
      result.push(obj);
    }
    return result;
  };
  target.hasClass = function (componentType) {
    // Just consider componentType.main.
    var componentTypeInfo = parseClassType(componentType);
    return !!storage[componentTypeInfo.main];
  };
  /**
   * @return Like ['aa', 'bb'], but can not be ['aa.xx']
   */
  target.getAllClassMainTypes = function () {
    var types = [];
    zrender_lib_core_util_js__rspack_import_0.each(storage, function (obj, type) {
      types.push(type);
    });
    return types;
  };
  /**
   * If a main type is container and has sub types
   */
  target.hasSubTypes = function (componentType) {
    var componentTypeInfo = parseClassType(componentType);
    var obj = storage[componentTypeInfo.main];
    return obj && obj[IS_CONTAINER];
  };
  function makeContainer(componentTypeInfo) {
    var container = storage[componentTypeInfo.main];
    if (!container || !container[IS_CONTAINER]) {
      container = storage[componentTypeInfo.main] = {};
      container[IS_CONTAINER] = true;
    }
    return container;
  }
}
// /**
//  * @param {string|Array.<string>} properties
//  */
// export function setReadOnly(obj, properties) {
// FIXME It seems broken in IE8 simulation of IE11
// if (!zrUtil.isArray(properties)) {
//     properties = properties != null ? [properties] : [];
// }
// zrUtil.each(properties, function (prop) {
//     let value = obj[prop];
//     Object.defineProperty
//         && Object.defineProperty(obj, prop, {
//             value: value, writable: false
//         });
//     zrUtil.isArray(obj[prop])
//         && Object.freeze
//         && Object.freeze(obj[prop]);
// });
// }
__webpack_require__.d(__webpack_exports__, {
}, {
  enableClassCheck: enableClassCheck,
  enableClassExtend: enableClassExtend,
  enableClassManagement: enableClassManagement,
  isExtendedClass: isExtendedClass,
  mountExtend: mountExtend,
  parseClassType: parseClassType
});


}),
7479: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var zrender_lib_core_util_js__rspack_import_1 = __webpack_require__(75275);
/* import */ var _clazz_js__rspack_import_0 = __webpack_require__(41874);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/



// A random offset
var base = Math.round(Math.random() * 10);
/**
 * @public
 * @param {string} type
 * @return {string}
 */
function getUID(type) {
  // Considering the case of crossing js context,
  // use Math.random to make id as unique as possible.
  return [type || '', base++].join('_');
}
/**
 * Implements `SubTypeDefaulterManager` for `target`.
 */
function enableSubTypeDefaulter(target) {
  var subTypeDefaulters = {};
  target.registerSubTypeDefaulter = function (componentType, defaulter) {
    var componentTypeInfo = (0,_clazz_js__rspack_import_0.parseClassType)(componentType);
    subTypeDefaulters[componentTypeInfo.main] = defaulter;
  };
  target.determineSubType = function (componentType, option) {
    var type = option.type;
    if (!type) {
      var componentTypeMain = (0,_clazz_js__rspack_import_0.parseClassType)(componentType).main;
      if (target.hasSubTypes(componentType) && subTypeDefaulters[componentTypeMain]) {
        type = subTypeDefaulters[componentTypeMain](option);
      }
    }
    return type;
  };
}
/**
 * Implements `TopologicalTravelable<any>` for `entity`.
 *
 * Topological travel on Activity Network (Activity On Vertices).
 * Dependencies is defined in Model.prototype.dependencies, like ['xAxis', 'yAxis'].
 * If 'xAxis' or 'yAxis' is absent in componentTypeList, just ignore it in topology.
 * If there is circular dependencey, Error will be thrown.
 */
function enableTopologicalTravel(entity, dependencyGetter) {
  /**
   * @param targetNameList Target Component type list.
   *                       Can be ['aa', 'bb', 'aa.xx']
   * @param fullNameList By which we can build dependency graph.
   * @param callback Params: componentType, dependencies.
   * @param context Scope of callback.
   */
  entity.topologicalTravel = function (targetNameList, fullNameList, callback, context) {
    if (!targetNameList.length) {
      return;
    }
    var result = makeDepndencyGraph(fullNameList);
    var graph = result.graph;
    var noEntryList = result.noEntryList;
    var targetNameSet = {};
    zrender_lib_core_util_js__rspack_import_1.each(targetNameList, function (name) {
      targetNameSet[name] = true;
    });
    while (noEntryList.length) {
      var currComponentType = noEntryList.pop();
      var currVertex = graph[currComponentType];
      var isInTargetNameSet = !!targetNameSet[currComponentType];
      if (isInTargetNameSet) {
        callback.call(context, currComponentType, currVertex.originalDeps.slice());
        delete targetNameSet[currComponentType];
      }
      zrender_lib_core_util_js__rspack_import_1.each(currVertex.successor, isInTargetNameSet ? removeEdgeAndAdd : removeEdge);
    }
    zrender_lib_core_util_js__rspack_import_1.each(targetNameSet, function () {
      var errMsg = '';
      if (false) {}
      throw new Error(errMsg);
    });
    function removeEdge(succComponentType) {
      graph[succComponentType].entryCount--;
      if (graph[succComponentType].entryCount === 0) {
        noEntryList.push(succComponentType);
      }
    }
    // Consider this case: legend depends on series, and we call
    // chart.setOption({series: [...]}), where only series is in option.
    // If we do not have 'removeEdgeAndAdd', legendModel.mergeOption will
    // not be called, but only sereis.mergeOption is called. Thus legend
    // have no chance to update its local record about series (like which
    // name of series is available in legend).
    function removeEdgeAndAdd(succComponentType) {
      targetNameSet[succComponentType] = true;
      removeEdge(succComponentType);
    }
  };
  function makeDepndencyGraph(fullNameList) {
    var graph = {};
    var noEntryList = [];
    zrender_lib_core_util_js__rspack_import_1.each(fullNameList, function (name) {
      var thisItem = createDependencyGraphItem(graph, name);
      var originalDeps = thisItem.originalDeps = dependencyGetter(name);
      var availableDeps = getAvailableDependencies(originalDeps, fullNameList);
      thisItem.entryCount = availableDeps.length;
      if (thisItem.entryCount === 0) {
        noEntryList.push(name);
      }
      zrender_lib_core_util_js__rspack_import_1.each(availableDeps, function (dependentName) {
        if (zrender_lib_core_util_js__rspack_import_1.indexOf(thisItem.predecessor, dependentName) < 0) {
          thisItem.predecessor.push(dependentName);
        }
        var thatItem = createDependencyGraphItem(graph, dependentName);
        if (zrender_lib_core_util_js__rspack_import_1.indexOf(thatItem.successor, dependentName) < 0) {
          thatItem.successor.push(name);
        }
      });
    });
    return {
      graph: graph,
      noEntryList: noEntryList
    };
  }
  function createDependencyGraphItem(graph, name) {
    if (!graph[name]) {
      graph[name] = {
        predecessor: [],
        successor: []
      };
    }
    return graph[name];
  }
  function getAvailableDependencies(originalDeps, fullNameList) {
    var availableDeps = [];
    zrender_lib_core_util_js__rspack_import_1.each(originalDeps, function (dep) {
      zrender_lib_core_util_js__rspack_import_1.indexOf(fullNameList, dep) >= 0 && availableDeps.push(dep);
    });
    return availableDeps;
  }
}
function inheritDefaultOption(superOption, subOption) {
  // See also `model/Component.ts#getDefaultOption`
  return zrender_lib_core_util_js__rspack_import_1.merge(zrender_lib_core_util_js__rspack_import_1.merge({}, superOption, true), subOption, true);
}
__webpack_require__.d(__webpack_exports__, {
}, {
  enableSubTypeDefaulter: enableSubTypeDefaulter,
  enableTopologicalTravel: enableTopologicalTravel,
  getUID: getUID,
  inheritDefaultOption: inheritDefaultOption
});


}),
67054: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var zrender_lib_core_util_js__rspack_import_0 = __webpack_require__(75275);
/* import */ var _log_js__rspack_import_1 = __webpack_require__(44002);
/* import */ var _data_helper_dataValueHelper_js__rspack_import_2 = __webpack_require__(94276);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/



;
var RELATIONAL_EXPRESSION_OP_ALIAS_MAP = {
  value: 'eq',
  // PENDING: not good for literal semantic?
  '<': 'lt',
  '<=': 'lte',
  '>': 'gt',
  '>=': 'gte',
  '=': 'eq',
  '!=': 'ne',
  '<>': 'ne'
  // Might be misleading for sake of the difference between '==' and '===',
  // so don't support them.
  // '==': 'eq',
  // '===': 'seq',
  // '!==': 'sne'
  // PENDING: Whether support some common alias "ge", "le", "neq"?
  // ge: 'gte',
  // le: 'lte',
  // neq: 'ne',
};
// type RelationalExpressionOpEvaluate = (tarVal: unknown, condVal: unknown) => boolean;
var RegExpEvaluator = /** @class */function () {
  function RegExpEvaluator(rVal) {
    // Support condVal: RegExp | string
    var condValue = this._condVal = (0,zrender_lib_core_util_js__rspack_import_0.isString)(rVal) ? new RegExp(rVal) : (0,zrender_lib_core_util_js__rspack_import_0.isRegExp)(rVal) ? rVal : null;
    if (condValue == null) {
      var errMsg = '';
      if (false) {}
      (0,_log_js__rspack_import_1.throwError)(errMsg);
    }
  }
  RegExpEvaluator.prototype.evaluate = function (lVal) {
    var type = typeof lVal;
    return (0,zrender_lib_core_util_js__rspack_import_0.isString)(type) ? this._condVal.test(lVal) : (0,zrender_lib_core_util_js__rspack_import_0.isNumber)(type) ? this._condVal.test(lVal + '') : false;
  };
  return RegExpEvaluator;
}();
var ConstConditionInternal = /** @class */function () {
  function ConstConditionInternal() {}
  ConstConditionInternal.prototype.evaluate = function () {
    return this.value;
  };
  return ConstConditionInternal;
}();
var AndConditionInternal = /** @class */function () {
  function AndConditionInternal() {}
  AndConditionInternal.prototype.evaluate = function () {
    var children = this.children;
    for (var i = 0; i < children.length; i++) {
      if (!children[i].evaluate()) {
        return false;
      }
    }
    return true;
  };
  return AndConditionInternal;
}();
var OrConditionInternal = /** @class */function () {
  function OrConditionInternal() {}
  OrConditionInternal.prototype.evaluate = function () {
    var children = this.children;
    for (var i = 0; i < children.length; i++) {
      if (children[i].evaluate()) {
        return true;
      }
    }
    return false;
  };
  return OrConditionInternal;
}();
var NotConditionInternal = /** @class */function () {
  function NotConditionInternal() {}
  NotConditionInternal.prototype.evaluate = function () {
    return !this.child.evaluate();
  };
  return NotConditionInternal;
}();
var RelationalConditionInternal = /** @class */function () {
  function RelationalConditionInternal() {}
  RelationalConditionInternal.prototype.evaluate = function () {
    var needParse = !!this.valueParser;
    // Call getValue with no `this`.
    var getValue = this.getValue;
    var tarValRaw = getValue(this.valueGetterParam);
    var tarValParsed = needParse ? this.valueParser(tarValRaw) : null;
    // Relational cond follow "and" logic internally.
    for (var i = 0; i < this.subCondList.length; i++) {
      if (!this.subCondList[i].evaluate(needParse ? tarValParsed : tarValRaw)) {
        return false;
      }
    }
    return true;
  };
  return RelationalConditionInternal;
}();
function parseOption(exprOption, getters) {
  if (exprOption === true || exprOption === false) {
    var cond = new ConstConditionInternal();
    cond.value = exprOption;
    return cond;
  }
  var errMsg = '';
  if (!isObjectNotArray(exprOption)) {
    if (false) {}
    (0,_log_js__rspack_import_1.throwError)(errMsg);
  }
  if (exprOption.and) {
    return parseAndOrOption('and', exprOption, getters);
  } else if (exprOption.or) {
    return parseAndOrOption('or', exprOption, getters);
  } else if (exprOption.not) {
    return parseNotOption(exprOption, getters);
  }
  return parseRelationalOption(exprOption, getters);
}
function parseAndOrOption(op, exprOption, getters) {
  var subOptionArr = exprOption[op];
  var errMsg = '';
  if (false) {}
  if (!(0,zrender_lib_core_util_js__rspack_import_0.isArray)(subOptionArr)) {
    (0,_log_js__rspack_import_1.throwError)(errMsg);
  }
  if (!subOptionArr.length) {
    (0,_log_js__rspack_import_1.throwError)(errMsg);
  }
  var cond = op === 'and' ? new AndConditionInternal() : new OrConditionInternal();
  cond.children = (0,zrender_lib_core_util_js__rspack_import_0.map)(subOptionArr, function (subOption) {
    return parseOption(subOption, getters);
  });
  if (!cond.children.length) {
    (0,_log_js__rspack_import_1.throwError)(errMsg);
  }
  return cond;
}
function parseNotOption(exprOption, getters) {
  var subOption = exprOption.not;
  var errMsg = '';
  if (false) {}
  if (!isObjectNotArray(subOption)) {
    (0,_log_js__rspack_import_1.throwError)(errMsg);
  }
  var cond = new NotConditionInternal();
  cond.child = parseOption(subOption, getters);
  if (!cond.child) {
    (0,_log_js__rspack_import_1.throwError)(errMsg);
  }
  return cond;
}
function parseRelationalOption(exprOption, getters) {
  var errMsg = '';
  var valueGetterParam = getters.prepareGetValue(exprOption);
  var subCondList = [];
  var exprKeys = (0,zrender_lib_core_util_js__rspack_import_0.keys)(exprOption);
  var parserName = exprOption.parser;
  var valueParser = parserName ? (0,_data_helper_dataValueHelper_js__rspack_import_2.getRawValueParser)(parserName) : null;
  for (var i = 0; i < exprKeys.length; i++) {
    var keyRaw = exprKeys[i];
    if (keyRaw === 'parser' || getters.valueGetterAttrMap.get(keyRaw)) {
      continue;
    }
    var op = (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(RELATIONAL_EXPRESSION_OP_ALIAS_MAP, keyRaw) ? RELATIONAL_EXPRESSION_OP_ALIAS_MAP[keyRaw] : keyRaw;
    var condValueRaw = exprOption[keyRaw];
    var condValueParsed = valueParser ? valueParser(condValueRaw) : condValueRaw;
    var evaluator = (0,_data_helper_dataValueHelper_js__rspack_import_2.createFilterComparator)(op, condValueParsed) || op === 'reg' && new RegExpEvaluator(condValueParsed);
    if (!evaluator) {
      if (false) {}
      (0,_log_js__rspack_import_1.throwError)(errMsg);
    }
    subCondList.push(evaluator);
  }
  if (!subCondList.length) {
    if (false) {}
    // No relational operator always disabled in case of dangers result.
    (0,_log_js__rspack_import_1.throwError)(errMsg);
  }
  var cond = new RelationalConditionInternal();
  cond.valueGetterParam = valueGetterParam;
  cond.valueParser = valueParser;
  cond.getValue = getters.getValue;
  cond.subCondList = subCondList;
  return cond;
}
function isObjectNotArray(val) {
  return (0,zrender_lib_core_util_js__rspack_import_0.isObject)(val) && !(0,zrender_lib_core_util_js__rspack_import_0.isArrayLike)(val);
}
var ConditionalExpressionParsed = /** @class */function () {
  function ConditionalExpressionParsed(exprOption, getters) {
    this._cond = parseOption(exprOption, getters);
  }
  ConditionalExpressionParsed.prototype.evaluate = function () {
    return this._cond.evaluate();
  };
  return ConditionalExpressionParsed;
}();
;
function parseConditionalExpression(exprOption, getters) {
  return new ConditionalExpressionParsed(exprOption, getters);
}
__webpack_require__.d(__webpack_exports__, {
}, {
  parseConditionalExpression: parseConditionalExpression
});


}),
51386: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var _model_js__rspack_import_0 = __webpack_require__(53781);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

var ecModelCacheInner = (0,_model_js__rspack_import_0.makeInner)();
/**
 * CAVEAT: Can only be called by `echarts.ts`
 */
function resetCachePerECPrepare(ecModel) {
  ecModelCacheInner(ecModel).prepare = {};
}
/**
 * CAVEAT: Can only be called by `echarts.ts`
 */
function resetCachePerECFullUpdate(ecModel) {
  ecModelCacheInner(ecModel).fullUpdate = {};
}
/**
 * The cache is auto cleared at the beginning of EC_PREPARE.
 * See also comments in EC_CYCLE.
 *
 * NOTICE:
 *  - EC_PREPARE is not necessarily executed before each EC_FULL_UPDATE performing.
 *    Typically, `setOption` trigger EC_PREPARE, but `dispatchAction` does not.
 *  - It is not cleared in EC_PARTIAL_UPDATE and EC_PROGRESSIVE_CYCLE.
 *
 */
function getCachePerECPrepare(ecModel) {
  return ecModelCacheInner(ecModel).prepare;
}
/**
 * @usage
 *  ```js
 *  const cycleCache = makeInner<{
 *      prop1: number;
 *      prop2: string;
 *  }, GlobalModelCachePerECFullUpdate>();
 *  function doSomthing(ecModel: GlobalModel): void {
 *      cycleCache(getCachePerECFullUpdate(ecModel)).prop1 = 123;
 *      cycleCache(getCachePerECFullUpdate(ecModel)).prop2;
 *  }
 *  ```
 *
 * The cache is auto cleared at the beginning of EC_FULL_UPDATE.
 * See also comments in EC_CYCLE.
 *
 * NOTICE:
 *  - It is not cleared in EC_PARTIAL_UPDATE and EC_PROGRESSIVE_CYCLE.
 *  - The cache should NOT be written before EC_FULL_UPDATE started, such as:
 *      - should NOT in `getTargetSeries` methods of data processors.
 *      - should NOT in `init`/`mergeOption`/`optionUpdated`/`getData` methods of component/series models.
 *  - See `getCachePerECPrepare` for details.
 */
function getCachePerECFullUpdate(ecModel) {
  return ecModelCacheInner(ecModel).fullUpdate;
}
__webpack_require__.d(__webpack_exports__, {
}, {
  getCachePerECFullUpdate: getCachePerECFullUpdate,
  getCachePerECPrepare: getCachePerECPrepare,
  resetCachePerECFullUpdate: resetCachePerECFullUpdate,
  resetCachePerECPrepare: resetCachePerECPrepare
});


}),
65409: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var zrender_lib_core_WeakMap_js__rspack_import_0 = __webpack_require__(82281);
/* import */ var zrender_lib_core_LRU_js__rspack_import_1 = __webpack_require__(68670);
/* import */ var zrender_lib_core_util_js__rspack_import_2 = __webpack_require__(75275);
/* import */ var _number_js__rspack_import_4 = __webpack_require__(46823);
/* import */ var _symbol_js__rspack_import_5 = __webpack_require__(87914);
/* import */ var zrender_lib_canvas_graphic_js__rspack_import_6 = __webpack_require__(41548);
/* import */ var zrender_lib_core_platform_js__rspack_import_3 = __webpack_require__(77592);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/







var decalMap = new zrender_lib_core_WeakMap_js__rspack_import_0["default"]();
var decalCache = new zrender_lib_core_LRU_js__rspack_import_1["default"](100);
var decalKeys = ['symbol', 'symbolSize', 'symbolKeepAspect', 'color', 'backgroundColor', 'dashArrayX', 'dashArrayY', 'maxTileWidth', 'maxTileHeight'];
/**
 * Create or update pattern image from decal options
 *
 * @param {InnerDecalObject | 'none'} decalObject decal options, 'none' if no decal
 * @return {Pattern} pattern with generated image, null if no decal
 */
function createOrUpdatePatternFromDecal(decalObject, api) {
  if (decalObject === 'none') {
    return null;
  }
  var dpr = api.getDevicePixelRatio();
  var zr = api.getZr();
  var isSVG = zr.painter.type === 'svg';
  if (decalObject.dirty) {
    decalMap["delete"](decalObject);
  }
  var oldPattern = decalMap.get(decalObject);
  if (oldPattern) {
    return oldPattern;
  }
  var decalOpt = (0,zrender_lib_core_util_js__rspack_import_2.defaults)(decalObject, {
    symbol: 'rect',
    symbolSize: 1,
    symbolKeepAspect: true,
    color: 'rgba(0, 0, 0, 0.2)',
    backgroundColor: null,
    dashArrayX: 5,
    dashArrayY: 5,
    rotation: 0,
    maxTileWidth: 512,
    maxTileHeight: 512
  });
  if (decalOpt.backgroundColor === 'none') {
    decalOpt.backgroundColor = null;
  }
  var pattern = {
    repeat: 'repeat'
  };
  setPatternnSource(pattern);
  pattern.rotation = decalOpt.rotation;
  pattern.scaleX = pattern.scaleY = isSVG ? 1 : 1 / dpr;
  decalMap.set(decalObject, pattern);
  decalObject.dirty = false;
  return pattern;
  function setPatternnSource(pattern) {
    var keys = [dpr];
    var isValidKey = true;
    for (var i = 0; i < decalKeys.length; ++i) {
      var value = decalOpt[decalKeys[i]];
      if (value != null && !(0,zrender_lib_core_util_js__rspack_import_2.isArray)(value) && !(0,zrender_lib_core_util_js__rspack_import_2.isString)(value) && !(0,zrender_lib_core_util_js__rspack_import_2.isNumber)(value) && typeof value !== 'boolean') {
        isValidKey = false;
        break;
      }
      keys.push(value);
    }
    var cacheKey;
    if (isValidKey) {
      cacheKey = keys.join(',') + (isSVG ? '-svg' : '');
      var cache = decalCache.get(cacheKey);
      if (cache) {
        isSVG ? pattern.svgElement = cache : pattern.image = cache;
      }
    }
    var dashArrayX = normalizeDashArrayX(decalOpt.dashArrayX);
    var dashArrayY = normalizeDashArrayY(decalOpt.dashArrayY);
    var symbolArray = normalizeSymbolArray(decalOpt.symbol);
    var lineBlockLengthsX = getLineBlockLengthX(dashArrayX);
    var lineBlockLengthY = getLineBlockLengthY(dashArrayY);
    var canvas = !isSVG && zrender_lib_core_platform_js__rspack_import_3.platformApi.createCanvas();
    var svgRoot = isSVG && {
      tag: 'g',
      attrs: {},
      key: 'dcl',
      children: []
    };
    var pSize = getPatternSize();
    var ctx;
    if (canvas) {
      canvas.width = pSize.width * dpr;
      canvas.height = pSize.height * dpr;
      ctx = canvas.getContext('2d');
    }
    brushDecal();
    if (isValidKey) {
      decalCache.put(cacheKey, canvas || svgRoot);
    }
    pattern.image = canvas;
    pattern.svgElement = svgRoot;
    pattern.svgWidth = pSize.width;
    pattern.svgHeight = pSize.height;
    /**
     * Get minimum length that can make a repeatable pattern.
     *
     * @return {Object} pattern width and height
     */
    function getPatternSize() {
      /**
       * For example, if dash is [[3, 2], [2, 1]] for X, it looks like
       * |---  ---  ---  ---  --- ...
       * |-- -- -- -- -- -- -- -- ...
       * |---  ---  ---  ---  --- ...
       * |-- -- -- -- -- -- -- -- ...
       * So the minimum length of X is 15,
       * which is the least common multiple of `3 + 2` and `2 + 1`
       * |---  ---  ---  |---  --- ...
       * |-- -- -- -- -- |-- -- -- ...
       */
      var width = 1;
      for (var i = 0, xlen = lineBlockLengthsX.length; i < xlen; ++i) {
        width = (0,_number_js__rspack_import_4.getLeastCommonMultiple)(width, lineBlockLengthsX[i]);
      }
      var symbolRepeats = 1;
      for (var i = 0, xlen = symbolArray.length; i < xlen; ++i) {
        symbolRepeats = (0,_number_js__rspack_import_4.getLeastCommonMultiple)(symbolRepeats, symbolArray[i].length);
      }
      width *= symbolRepeats;
      var height = lineBlockLengthY * lineBlockLengthsX.length * symbolArray.length;
      if (false) { var warn }
      return {
        width: Math.max(1, Math.min(width, decalOpt.maxTileWidth)),
        height: Math.max(1, Math.min(height, decalOpt.maxTileHeight))
      };
    }
    function brushDecal() {
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (decalOpt.backgroundColor) {
          ctx.fillStyle = decalOpt.backgroundColor;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
      }
      var ySum = 0;
      for (var i = 0; i < dashArrayY.length; ++i) {
        ySum += dashArrayY[i];
      }
      if (ySum <= 0) {
        // dashArrayY is 0, draw nothing
        return;
      }
      var y = -lineBlockLengthY;
      var yId = 0;
      var yIdTotal = 0;
      var xId0 = 0;
      while (y < pSize.height) {
        if (yId % 2 === 0) {
          var symbolYId = yIdTotal / 2 % symbolArray.length;
          var x = 0;
          var xId1 = 0;
          var xId1Total = 0;
          while (x < pSize.width * 2) {
            var xSum = 0;
            for (var i = 0; i < dashArrayX[xId0].length; ++i) {
              xSum += dashArrayX[xId0][i];
            }
            if (xSum <= 0) {
              // Skip empty line
              break;
            }
            // E.g., [15, 5, 20, 5] draws only for 15 and 20
            if (xId1 % 2 === 0) {
              var size = (1 - decalOpt.symbolSize) * 0.5;
              var left = x + dashArrayX[xId0][xId1] * size;
              var top_1 = y + dashArrayY[yId] * size;
              var width = dashArrayX[xId0][xId1] * decalOpt.symbolSize;
              var height = dashArrayY[yId] * decalOpt.symbolSize;
              var symbolXId = xId1Total / 2 % symbolArray[symbolYId].length;
              brushSymbol(left, top_1, width, height, symbolArray[symbolYId][symbolXId]);
            }
            x += dashArrayX[xId0][xId1];
            ++xId1Total;
            ++xId1;
            if (xId1 === dashArrayX[xId0].length) {
              xId1 = 0;
            }
          }
          ++xId0;
          if (xId0 === dashArrayX.length) {
            xId0 = 0;
          }
        }
        y += dashArrayY[yId];
        ++yIdTotal;
        ++yId;
        if (yId === dashArrayY.length) {
          yId = 0;
        }
      }
      function brushSymbol(x, y, width, height, symbolType) {
        var scale = isSVG ? 1 : dpr;
        var symbol = (0,_symbol_js__rspack_import_5.createSymbol)(symbolType, x * scale, y * scale, width * scale, height * scale, decalOpt.color, decalOpt.symbolKeepAspect);
        if (isSVG) {
          var symbolVNode = zr.painter.renderOneToVNode(symbol);
          if (symbolVNode) {
            svgRoot.children.push(symbolVNode);
          }
        } else {
          // Paint to canvas for all other renderers.
          (0,zrender_lib_canvas_graphic_js__rspack_import_6.brushSingle)(ctx, symbol);
        }
      }
    }
  }
}
/**
 * Convert symbol array into normalized array
 *
 * @param {string | (string | string[])[]} symbol symbol input
 * @return {string[][]} normolized symbol array
 */
function normalizeSymbolArray(symbol) {
  if (!symbol || symbol.length === 0) {
    return [['rect']];
  }
  if ((0,zrender_lib_core_util_js__rspack_import_2.isString)(symbol)) {
    return [[symbol]];
  }
  var isAllString = true;
  for (var i = 0; i < symbol.length; ++i) {
    if (!(0,zrender_lib_core_util_js__rspack_import_2.isString)(symbol[i])) {
      isAllString = false;
      break;
    }
  }
  if (isAllString) {
    return normalizeSymbolArray([symbol]);
  }
  var result = [];
  for (var i = 0; i < symbol.length; ++i) {
    if ((0,zrender_lib_core_util_js__rspack_import_2.isString)(symbol[i])) {
      result.push([symbol[i]]);
    } else {
      result.push(symbol[i]);
    }
  }
  return result;
}
/**
 * Convert dash input into dashArray
 *
 * @param {DecalDashArrayX} dash dash input
 * @return {number[][]} normolized dash array
 */
function normalizeDashArrayX(dash) {
  if (!dash || dash.length === 0) {
    return [[0, 0]];
  }
  if ((0,zrender_lib_core_util_js__rspack_import_2.isNumber)(dash)) {
    var dashValue = Math.ceil(dash);
    return [[dashValue, dashValue]];
  }
  /**
   * [20, 5] should be normalized into [[20, 5]],
   * while [20, [5, 10]] should be normalized into [[20, 20], [5, 10]]
   */
  var isAllNumber = true;
  for (var i = 0; i < dash.length; ++i) {
    if (!(0,zrender_lib_core_util_js__rspack_import_2.isNumber)(dash[i])) {
      isAllNumber = false;
      break;
    }
  }
  if (isAllNumber) {
    return normalizeDashArrayX([dash]);
  }
  var result = [];
  for (var i = 0; i < dash.length; ++i) {
    if ((0,zrender_lib_core_util_js__rspack_import_2.isNumber)(dash[i])) {
      var dashValue = Math.ceil(dash[i]);
      result.push([dashValue, dashValue]);
    } else {
      var dashValue = (0,zrender_lib_core_util_js__rspack_import_2.map)(dash[i], function (n) {
        return Math.ceil(n);
      });
      if (dashValue.length % 2 === 1) {
        // [4, 2, 1] means |----  -    -- |----  -    -- |
        // so normalize it to be [4, 2, 1, 4, 2, 1]
        result.push(dashValue.concat(dashValue));
      } else {
        result.push(dashValue);
      }
    }
  }
  return result;
}
/**
 * Convert dash input into dashArray
 *
 * @param {DecalDashArrayY} dash dash input
 * @return {number[]} normolized dash array
 */
function normalizeDashArrayY(dash) {
  if (!dash || typeof dash === 'object' && dash.length === 0) {
    return [0, 0];
  }
  if ((0,zrender_lib_core_util_js__rspack_import_2.isNumber)(dash)) {
    var dashValue_1 = Math.ceil(dash);
    return [dashValue_1, dashValue_1];
  }
  var dashValue = (0,zrender_lib_core_util_js__rspack_import_2.map)(dash, function (n) {
    return Math.ceil(n);
  });
  return dash.length % 2 ? dashValue.concat(dashValue) : dashValue;
}
/**
 * Get block length of each line. A block is the length of dash line and space.
 * For example, a line with [4, 1] has a dash line of 4 and a space of 1 after
 * that, so the block length of this line is 5.
 *
 * @param {number[][]} dash dash array of X or Y
 * @return {number[]} block length of each line
 */
function getLineBlockLengthX(dash) {
  return (0,zrender_lib_core_util_js__rspack_import_2.map)(dash, function (line) {
    return getLineBlockLengthY(line);
  });
}
function getLineBlockLengthY(dash) {
  var blockLength = 0;
  for (var i = 0; i < dash.length; ++i) {
    blockLength += dash[i];
  }
  if (dash.length % 2 === 1) {
    // [4, 2, 1] means |----  -    -- |----  -    -- |
    // So total length is (4 + 2 + 1) * 2
    return blockLength * 2;
  }
  return blockLength;
}
__webpack_require__.d(__webpack_exports__, {
}, {
  createOrUpdatePatternFromDecal: createOrUpdatePatternFromDecal
});


}),
39364: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/
function findEventDispatcher(target, det, returnFirstMatch) {
  var found;
  while (target) {
    if (det(target)) {
      found = target;
      if (returnFirstMatch) {
        break;
      }
    }
    target = target.__hostTarget || target.parent;
  }
  return found;
}
__webpack_require__.d(__webpack_exports__, {
}, {
  findEventDispatcher: findEventDispatcher
});


}),
13501: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var zrender_lib_core_util_js__rspack_import_4 = __webpack_require__(75275);
/* import */ var zrender_lib_core_dom_js__rspack_import_2 = __webpack_require__(84563);
/* import */ var _number_js__rspack_import_3 = __webpack_require__(46823);
/* import */ var _time_js__rspack_import_5 = __webpack_require__(80155);
/* import */ var zrender_lib_graphic_helper_parseText_js__rspack_import_0 = __webpack_require__(83673);
/* import */ var _legacy_getTextRect_js__rspack_import_1 = __webpack_require__(17658);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/





/**
 * Add a comma each three digit.
 */
function addCommas(x) {
  if (!(0,_number_js__rspack_import_3.isNumeric)(x)) {
    return zrender_lib_core_util_js__rspack_import_4.isString(x) ? x : '-';
  }
  var parts = (x + '').split('.');
  return parts[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,') + (parts.length > 1 ? '.' + parts[1] : '');
}
function toCamelCase(str, upperCaseFirst) {
  str = (str || '').toLowerCase().replace(/-(.)/g, function (match, group1) {
    return group1.toUpperCase();
  });
  if (upperCaseFirst && str) {
    str = str.charAt(0).toUpperCase() + str.slice(1);
  }
  return str;
}
var normalizeCssArray = zrender_lib_core_util_js__rspack_import_4.normalizeCssArray;

/**
 * Make value user readable for tooltip and label.
 * "User readable":
 *     Try to not print programmer-specific text like NaN, Infinity, null, undefined.
 *     Avoid to display an empty string, which users can not recognize there is
 *     a value and it might look like a bug.
 */
function makeValueReadable(value, valueType, useUTC) {
  var USER_READABLE_DEFUALT_TIME_PATTERN = '{yyyy}-{MM}-{dd} {HH}:{mm}:{ss}';
  function stringToUserReadable(str) {
    return str && zrender_lib_core_util_js__rspack_import_4.trim(str) ? str : '-';
  }
  function isNumberUserReadable(num) {
    return (0,_number_js__rspack_import_3.isNullableNumberFinite)(num);
  }
  var isTypeTime = valueType === 'time';
  var isValueDate = value instanceof Date;
  if (isTypeTime || isValueDate) {
    var date = isTypeTime ? (0,_number_js__rspack_import_3.parseDate)(value) : value;
    if (!isNaN(+date)) {
      return (0,_time_js__rspack_import_5.format)(date, USER_READABLE_DEFUALT_TIME_PATTERN, useUTC);
    } else if (isValueDate) {
      return '-';
    }
    // In other cases, continue to try to display the value in the following code.
  }
  if (valueType === 'ordinal') {
    return zrender_lib_core_util_js__rspack_import_4.isStringSafe(value) ? stringToUserReadable(value) : zrender_lib_core_util_js__rspack_import_4.isNumber(value) ? isNumberUserReadable(value) ? value + '' : '-' : '-';
  }
  // By default.
  var numericResult = (0,_number_js__rspack_import_3.numericToNumber)(value);
  return isNumberUserReadable(numericResult) ? addCommas(numericResult) : zrender_lib_core_util_js__rspack_import_4.isStringSafe(value) ? stringToUserReadable(value) : typeof value === 'boolean' ? value + '' : '-';
}
var TPL_VAR_ALIAS = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
var wrapVar = function (varName, seriesIdx) {
  return '{' + varName + (seriesIdx == null ? '' : seriesIdx) + '}';
};
/**
 * Template formatter
 * @param {Array.<Object>|Object} paramsList
 */
function formatTpl(tpl, paramsList, encode) {
  if (!zrender_lib_core_util_js__rspack_import_4.isArray(paramsList)) {
    paramsList = [paramsList];
  }
  var seriesLen = paramsList.length;
  if (!seriesLen) {
    return '';
  }
  var $vars = paramsList[0].$vars || [];
  for (var i = 0; i < $vars.length; i++) {
    var alias = TPL_VAR_ALIAS[i];
    tpl = tpl.replace(wrapVar(alias), wrapVar(alias, 0));
  }
  for (var seriesIdx = 0; seriesIdx < seriesLen; seriesIdx++) {
    for (var k = 0; k < $vars.length; k++) {
      var val = paramsList[seriesIdx][$vars[k]];
      tpl = tpl.replace(wrapVar(TPL_VAR_ALIAS[k], seriesIdx), encode ? (0,zrender_lib_core_dom_js__rspack_import_2.encodeHTML)(val) : val);
    }
  }
  return tpl;
}
/**
 * simple Template formatter
 */
function formatTplSimple(tpl, param, encode) {
  zrender_lib_core_util_js__rspack_import_4.each(param, function (value, key) {
    tpl = tpl.replace('{' + key + '}', encode ? (0,zrender_lib_core_dom_js__rspack_import_2.encodeHTML)(value) : value);
  });
  return tpl;
}
function getTooltipMarker(inOpt, extraCssText) {
  var opt = zrender_lib_core_util_js__rspack_import_4.isString(inOpt) ? {
    color: inOpt,
    extraCssText: extraCssText
  } : inOpt || {};
  var color = opt.color;
  var type = opt.type;
  extraCssText = opt.extraCssText;
  var renderMode = opt.renderMode || 'html';
  if (!color) {
    return '';
  }
  if (renderMode === 'html') {
    return type === 'subItem' ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;' + 'border-radius:4px;width:4px;height:4px;background-color:'
    // Only support string
    + (0,zrender_lib_core_dom_js__rspack_import_2.encodeHTML)(color) + ';' + (extraCssText || '') + '"></span>' : '<span style="display:inline-block;margin-right:4px;' + 'border-radius:10px;width:10px;height:10px;background-color:' + (0,zrender_lib_core_dom_js__rspack_import_2.encodeHTML)(color) + ';' + (extraCssText || '') + '"></span>';
  } else {
    // Should better not to auto generate style name by auto-increment number here.
    // Because this util is usually called in tooltip formatter, which is probably
    // called repeatedly when mouse move and the auto-increment number increases fast.
    // Users can make their own style name by theirselves, make it unique and readable.
    var markerId = opt.markerId || 'markerX';
    return {
      renderMode: renderMode,
      content: '{' + markerId + '|}  ',
      style: type === 'subItem' ? {
        width: 4,
        height: 4,
        borderRadius: 2,
        backgroundColor: color
      } : {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: color
      }
    };
  }
}
/**
 * @deprecated Use `time/format` instead.
 * ISO Date format
 * @param {string} tpl
 * @param {number} value
 * @param {boolean} [isUTC=false] Default in local time.
 *           see `module:echarts/scale/Time`
 *           and `module:echarts/util/number#parseDate`.
 * @inner
 */
function formatTime(tpl, value, isUTC) {
  if (false) {}
  if (tpl === 'week' || tpl === 'month' || tpl === 'quarter' || tpl === 'half-year' || tpl === 'year') {
    tpl = 'MM-dd\nyyyy';
  }
  var date = (0,_number_js__rspack_import_3.parseDate)(value);
  var getUTC = isUTC ? 'getUTC' : 'get';
  var y = date[getUTC + 'FullYear']();
  var M = date[getUTC + 'Month']() + 1;
  var d = date[getUTC + 'Date']();
  var h = date[getUTC + 'Hours']();
  var m = date[getUTC + 'Minutes']();
  var s = date[getUTC + 'Seconds']();
  var S = date[getUTC + 'Milliseconds']();
  tpl = tpl.replace('MM', (0,_time_js__rspack_import_5.pad)(M, 2)).replace('M', M).replace('yyyy', y).replace('yy', (0,_time_js__rspack_import_5.pad)(y % 100 + '', 2)).replace('dd', (0,_time_js__rspack_import_5.pad)(d, 2)).replace('d', d).replace('hh', (0,_time_js__rspack_import_5.pad)(h, 2)).replace('h', h).replace('mm', (0,_time_js__rspack_import_5.pad)(m, 2)).replace('m', m).replace('ss', (0,_time_js__rspack_import_5.pad)(s, 2)).replace('s', s).replace('SSS', (0,_time_js__rspack_import_5.pad)(S, 3));
  return tpl;
}
/**
 * Capital first
 * @param {string} str
 * @return {string}
 */
function capitalFirst(str) {
  return str ? str.charAt(0).toUpperCase() + str.substr(1) : str;
}
/**
 * @return Never be null/undefined.
 */
function convertToColorString(color, defaultColor) {
  defaultColor = defaultColor || 'transparent';
  return zrender_lib_core_util_js__rspack_import_4.isString(color) ? color : zrender_lib_core_util_js__rspack_import_4.isObject(color) ? color.colorStops && (color.colorStops[0] || {}).color || defaultColor : defaultColor;
}

/**
 * open new tab
 * @param link url
 * @param target blank or self
 */
function windowOpen(link, target) {
  /* global window */
  if (target === '_blank' || target === 'blank') {
    var blank = window.open();
    blank.opener = null;
    blank.location.href = link;
  } else {
    window.open(link, target);
  }
}

__webpack_require__.d(__webpack_exports__, {
  encodeHTML: function() { return /* reexport safe */ zrender_lib_core_dom_js__rspack_import_2.encodeHTML; },
  getTextRect: function() { return /* reexport safe */ _legacy_getTextRect_js__rspack_import_1.getTextRect; },
  truncateText: function() { return /* reexport safe */ zrender_lib_graphic_helper_parseText_js__rspack_import_0.truncateText; }
}, {
  addCommas: addCommas,
  capitalFirst: capitalFirst,
  convertToColorString: convertToColorString,
  formatTime: formatTime,
  formatTpl: formatTpl,
  formatTplSimple: formatTplSimple,
  getTooltipMarker: getTooltipMarker,
  makeValueReadable: makeValueReadable,
  normalizeCssArray: normalizeCssArray,
  toCamelCase: toCamelCase,
  windowOpen: windowOpen
});


}),
90088: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var zrender_lib_tool_path_js__rspack_import_22 = __webpack_require__(48286);
/* import */ var zrender_lib_core_matrix_js__rspack_import_24 = __webpack_require__(51938);
/* import */ var zrender_lib_core_vector_js__rspack_import_27 = __webpack_require__(69884);
/* import */ var zrender_lib_graphic_Path_js__rspack_import_21 = __webpack_require__(72043);
/* import */ var zrender_lib_core_Transformable_js__rspack_import_26 = __webpack_require__(9259);
/* import */ var zrender_lib_graphic_Image_js__rspack_import_2 = __webpack_require__(9529);
/* import */ var zrender_lib_graphic_Group_js__rspack_import_1 = __webpack_require__(80111);
/* import */ var zrender_lib_graphic_Text_js__rspack_import_3 = __webpack_require__(24261);
/* import */ var zrender_lib_graphic_shape_Circle_js__rspack_import_4 = __webpack_require__(34788);
/* import */ var zrender_lib_graphic_shape_Ellipse_js__rspack_import_5 = __webpack_require__(71264);
/* import */ var zrender_lib_graphic_shape_Sector_js__rspack_import_6 = __webpack_require__(72247);
/* import */ var zrender_lib_graphic_shape_Ring_js__rspack_import_7 = __webpack_require__(65274);
/* import */ var zrender_lib_graphic_shape_Polygon_js__rspack_import_8 = __webpack_require__(98028);
/* import */ var zrender_lib_graphic_shape_Polyline_js__rspack_import_9 = __webpack_require__(89116);
/* import */ var zrender_lib_graphic_shape_Rect_js__rspack_import_10 = __webpack_require__(67485);
/* import */ var zrender_lib_graphic_shape_Line_js__rspack_import_11 = __webpack_require__(70582);
/* import */ var zrender_lib_graphic_shape_BezierCurve_js__rspack_import_12 = __webpack_require__(63316);
/* import */ var zrender_lib_graphic_shape_Arc_js__rspack_import_13 = __webpack_require__(52994);
/* import */ var zrender_lib_graphic_CompoundPath_js__rspack_import_15 = __webpack_require__(8556);
/* import */ var zrender_lib_graphic_LinearGradient_js__rspack_import_16 = __webpack_require__(44315);
/* import */ var zrender_lib_graphic_RadialGradient_js__rspack_import_17 = __webpack_require__(61929);
/* import */ var zrender_lib_core_BoundingRect_js__rspack_import_18 = __webpack_require__(93689);
/* import */ var zrender_lib_core_OrientedBoundingRect_js__rspack_import_19 = __webpack_require__(21041);
/* import */ var zrender_lib_core_Point_js__rspack_import_20 = __webpack_require__(45841);
/* import */ var zrender_lib_graphic_IncrementalDisplayable_js__rspack_import_14 = __webpack_require__(73240);
/* import */ var zrender_lib_graphic_helper_subPixelOptimize_js__rspack_import_23 = __webpack_require__(78340);
/* import */ var zrender_lib_core_util_js__rspack_import_25 = __webpack_require__(75275);
/* import */ var _innerStore_js__rspack_import_29 = __webpack_require__(63655);
/* import */ var _animation_basicTransition_js__rspack_import_0 = __webpack_require__(13983);
/* import */ var _number_js__rspack_import_28 = __webpack_require__(46823);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/






























/**
 * @deprecated export for compatitable reason
 */

var _customShapeMap = {};
var XY = ['x', 'y'];
var WH = ['width', 'height'];
/**
 * NOTICE: Only canvas renderer can set these hoverLayer flags.
 * @see ElementCommonState['hoverLayer']
 */
var HOVER_LAYER_NO = 0;
var HOVER_LAYER_FROM_THRESHOLD = 1;
var HOVER_LAYER_FOR_INCREMENTAL = 2;
/**
 * Extend shape with parameters
 */
function extendShape(opts) {
  return zrender_lib_graphic_Path_js__rspack_import_21["default"].extend(opts);
}
var extendPathFromString = zrender_lib_tool_path_js__rspack_import_22.extendFromString;
/**
 * Extend path
 */
function extendPath(pathData, opts) {
  return extendPathFromString(pathData, opts);
}
/**
 * Register a user defined shape.
 * The shape class can be fetched by `getShapeClass`
 * This method will overwrite the registered shapes, including
 * the registered built-in shapes, if using the same `name`.
 * The shape can be used in `custom series` and
 * `graphic component` by declaring `{type: name}`.
 *
 * @param name
 * @param ShapeClass Can be generated by `extendShape`.
 */
function registerShape(name, ShapeClass) {
  _customShapeMap[name] = ShapeClass;
}
/**
 * Find shape class registered by `registerShape`. Usually used in
 * fetching user defined shape.
 *
 * [Caution]:
 * (1) This method **MUST NOT be used inside echarts !!!**, unless it is prepared
 * to use user registered shapes.
 * Because the built-in shape (see `getBuiltInShape`) will be registered by
 * `registerShape` by default. That enables users to get both built-in
 * shapes as well as the shapes belonging to themsleves. But users can overwrite
 * the built-in shapes by using names like 'circle', 'rect' via calling
 * `registerShape`. So the echarts inner featrues should not fetch shapes from here
 * in case that it is overwritten by users, except that some features, like
 * `custom series`, `graphic component`, do it deliberately.
 *
 * (2) In the features like `custom series`, `graphic component`, the user input
 * `{tpye: 'xxx'}` does not only specify shapes but also specify other graphic
 * elements like `'group'`, `'text'`, `'image'` or event `'path'`. Those names
 * are reserved names, that is, if some user registers a shape named `'image'`,
 * the shape will not be used. If we intending to add some more reserved names
 * in feature, that might bring break changes (disable some existing user shape
 * names). But that case probably rarely happens. So we don't make more mechanism
 * to resolve this issue here.
 *
 * @param name
 * @return The shape class. If not found, return nothing.
 */
function getShapeClass(name) {
  if (_customShapeMap.hasOwnProperty(name)) {
    return _customShapeMap[name];
  }
}
/**
 * Create a path element from path data string
 * @param pathData
 * @param opts
 * @param rect
 * @param layout 'center' or 'cover' default to be cover
 */
function makePath(pathData, opts, rect, layout) {
  var path = zrender_lib_tool_path_js__rspack_import_22.createFromString(pathData, opts);
  if (rect) {
    if (layout === 'center') {
      rect = centerGraphic(rect, path.getBoundingRect());
    }
    resizePath(path, rect);
  }
  return path;
}
/**
 * Create a image element from image url
 * @param imageUrl image url
 * @param opts options
 * @param rect constrain rect
 * @param layout 'center' or 'cover'. Default to be 'cover'
 */
function makeImage(imageUrl, rect, layout) {
  var zrImg = new zrender_lib_graphic_Image_js__rspack_import_2["default"]({
    style: {
      image: imageUrl,
      x: rect.x,
      y: rect.y,
      width: rect.width,
      height: rect.height
    },
    onload: function (img) {
      if (layout === 'center') {
        var boundingRect = {
          width: img.width,
          height: img.height
        };
        zrImg.setStyle(centerGraphic(rect, boundingRect));
      }
    }
  });
  return zrImg;
}
/**
 * Get position of centered element in bounding box.
 *
 * @param  rect         element local bounding box
 * @param  boundingRect constraint bounding box
 * @return element position containing x, y, width, and height
 */
function centerGraphic(rect, boundingRect) {
  // Set rect to center, keep width / height ratio.
  var aspect = boundingRect.width / boundingRect.height;
  var width = rect.height * aspect;
  var height;
  if (width <= rect.width) {
    height = rect.height;
  } else {
    width = rect.width;
    height = width / aspect;
  }
  var cx = rect.x + rect.width / 2;
  var cy = rect.y + rect.height / 2;
  return {
    x: cx - width / 2,
    y: cy - height / 2,
    width: width,
    height: height
  };
}
var mergePath = zrender_lib_tool_path_js__rspack_import_22.mergePath;
/**
 * Resize a path to fit the rect
 * @param path
 * @param rect
 */
function resizePath(path, rect) {
  if (!path.applyTransform) {
    return;
  }
  var pathRect = path.getBoundingRect();
  var m = pathRect.calculateTransform(rect);
  path.applyTransform(m);
}
/**
 * Sub pixel optimize line for canvas
 */
function subPixelOptimizeLine(shape, lineWidth) {
  zrender_lib_graphic_helper_subPixelOptimize_js__rspack_import_23.subPixelOptimizeLine(shape, shape, {
    lineWidth: lineWidth
  });
  return shape;
}
/**
 * Sub pixel optimize rect for canvas
 */
function subPixelOptimizeRect(shape, style) {
  zrender_lib_graphic_helper_subPixelOptimize_js__rspack_import_23.subPixelOptimizeRect(shape, shape, style);
  return shape;
}
/**
 * Sub pixel optimize for canvas
 *
 * @param position Coordinate, such as x, y
 * @param lineWidth Should be nonnegative integer.
 * @param positiveOrNegative Default false (negative).
 * @return Optimized position.
 */
var subPixelOptimize = zrender_lib_graphic_helper_subPixelOptimize_js__rspack_import_23.subPixelOptimize;
/**
 * Get transform matrix of target (param target),
 * in coordinate of its ancestor (param ancestor)
 *
 * @param target
 * @param [ancestor]
 */
function getTransform(target, ancestor) {
  var mat = zrender_lib_core_matrix_js__rspack_import_24.identity([]);
  while (target && target !== ancestor) {
    zrender_lib_core_matrix_js__rspack_import_24.mul(mat, target.getLocalTransform(), mat);
    target = target.parent;
  }
  return mat;
}
/**
 * Apply transform to an vertex.
 * @param target [x, y]
 * @param transform Can be:
 *      + Transform matrix: like [1, 0, 0, 1, 0, 0]
 *      + {position, rotation, scale}, the same as `zrender/Transformable`.
 * @param invert Whether use invert matrix.
 * @return [x, y]
 */
function applyTransform(target, transform, invert) {
  if (transform && !(0,zrender_lib_core_util_js__rspack_import_25.isArrayLike)(transform)) {
    transform = zrender_lib_core_Transformable_js__rspack_import_26["default"].getLocalTransform(transform);
  }
  if (invert) {
    transform = zrender_lib_core_matrix_js__rspack_import_24.invert([], transform);
  }
  return zrender_lib_core_vector_js__rspack_import_27.applyTransform([], target, transform);
}
/**
 * @param direction 'left' 'right' 'top' 'bottom'
 * @param transform Transform matrix: like [1, 0, 0, 1, 0, 0]
 * @param invert Whether use invert matrix.
 * @return Transformed direction. 'left' 'right' 'top' 'bottom'
 */
function transformDirection(direction, transform, invert) {
  // Pick a base, ensure that transform result will not be (0, 0).
  var hBase = transform[4] === 0 || transform[5] === 0 || transform[0] === 0 ? 1 : (0,_number_js__rspack_import_28.mathAbs)(2 * transform[4] / transform[0]);
  var vBase = transform[4] === 0 || transform[5] === 0 || transform[2] === 0 ? 1 : (0,_number_js__rspack_import_28.mathAbs)(2 * transform[4] / transform[2]);
  var vertex = [direction === 'left' ? -hBase : direction === 'right' ? hBase : 0, direction === 'top' ? -vBase : direction === 'bottom' ? vBase : 0];
  vertex = applyTransform(vertex, transform, invert);
  return (0,_number_js__rspack_import_28.mathAbs)(vertex[0]) > (0,_number_js__rspack_import_28.mathAbs)(vertex[1]) ? vertex[0] > 0 ? 'right' : 'left' : vertex[1] > 0 ? 'bottom' : 'top';
}
function isNotGroup(el) {
  return !el.isGroup;
}
function isPath(el) {
  return el.shape != null;
}
/**
 * Apply group transition animation from g1 to g2.
 * If no animatableModel, no animation.
 */
function groupTransition(g1, g2, animatableModel) {
  if (!g1 || !g2) {
    return;
  }
  function getElMap(g) {
    var elMap = {};
    g.traverse(function (el) {
      if (isNotGroup(el) && el.anid) {
        elMap[el.anid] = el;
      }
    });
    return elMap;
  }
  function getAnimatableProps(el) {
    var obj = {
      x: el.x,
      y: el.y,
      rotation: el.rotation
    };
    if (isPath(el)) {
      obj.shape = (0,zrender_lib_core_util_js__rspack_import_25.clone)(el.shape);
    }
    return obj;
  }
  var elMap1 = getElMap(g1);
  g2.traverse(function (el) {
    if (isNotGroup(el) && el.anid) {
      var oldEl = elMap1[el.anid];
      if (oldEl) {
        var newProp = getAnimatableProps(el);
        el.attr(getAnimatableProps(oldEl));
        (0,_animation_basicTransition_js__rspack_import_0.updateProps)(el, newProp, animatableModel, (0,_innerStore_js__rspack_import_29.getECData)(el).dataIndex);
      }
    }
  });
}
function clipPointsByRect(points, rect) {
  // FIXME: This way might be incorrect when graphic clipped by a corner
  // and when element has a border.
  return (0,zrender_lib_core_util_js__rspack_import_25.map)(points, function (point) {
    var x = point[0];
    x = (0,_number_js__rspack_import_28.mathMax)(x, rect.x);
    x = (0,_number_js__rspack_import_28.mathMin)(x, rect.x + rect.width);
    var y = point[1];
    y = (0,_number_js__rspack_import_28.mathMax)(y, rect.y);
    y = (0,_number_js__rspack_import_28.mathMin)(y, rect.y + rect.height);
    return [x, y];
  });
}
/**
 * Return a new clipped rect. If rect size are negative, return undefined.
 */
function clipRectByRect(targetRect, rect) {
  var x = (0,_number_js__rspack_import_28.mathMax)(targetRect.x, rect.x);
  var x2 = (0,_number_js__rspack_import_28.mathMin)(targetRect.x + targetRect.width, rect.x + rect.width);
  var y = (0,_number_js__rspack_import_28.mathMax)(targetRect.y, rect.y);
  var y2 = (0,_number_js__rspack_import_28.mathMin)(targetRect.y + targetRect.height, rect.y + rect.height);
  // If the total rect is cliped, nothing, including the border,
  // should be painted. So return undefined.
  if (x2 >= x && y2 >= y) {
    return {
      x: x,
      y: y,
      width: x2 - x,
      height: y2 - y
    };
  }
}
function createIcon(iconStr,
// Support 'image://' or 'path://' or direct svg path.
opt, rect) {
  var innerOpts = (0,zrender_lib_core_util_js__rspack_import_25.extend)({
    rectHover: true
  }, opt);
  var style = innerOpts.style = {
    strokeNoScale: true
  };
  rect = rect || {
    x: -1,
    y: -1,
    width: 2,
    height: 2
  };
  if (iconStr) {
    return iconStr.indexOf('image://') === 0 ? (style.image = iconStr.slice(8), (0,zrender_lib_core_util_js__rspack_import_25.defaults)(style, rect), new zrender_lib_graphic_Image_js__rspack_import_2["default"](innerOpts)) : makePath(iconStr.replace('path://', ''), innerOpts, rect, 'center');
  }
}
/**
 * Return `true` if the given line (line `a`) and the given polygon
 * are intersect.
 * Note that we do not count colinear as intersect here because no
 * requirement for that. We could do that if required in future.
 */
function linePolygonIntersect(a1x, a1y, a2x, a2y, points) {
  for (var i = 0, p2 = points[points.length - 1]; i < points.length; i++) {
    var p = points[i];
    if (lineLineIntersect(a1x, a1y, a2x, a2y, p[0], p[1], p2[0], p2[1])) {
      return true;
    }
    p2 = p;
  }
}
/**
 * Return `true` if the given two lines (line `a` and line `b`)
 * are intersect.
 * Note that we do not count colinear as intersect here because no
 * requirement for that. We could do that if required in future.
 */
function lineLineIntersect(a1x, a1y, a2x, a2y, b1x, b1y, b2x, b2y) {
  // let `vec_m` to be `vec_a2 - vec_a1` and `vec_n` to be `vec_b2 - vec_b1`.
  var mx = a2x - a1x;
  var my = a2y - a1y;
  var nx = b2x - b1x;
  var ny = b2y - b1y;
  // `vec_m` and `vec_n` are parallel iff
  //     existing `k` such that `vec_m = k · vec_n`, equivalent to `vec_m X vec_n = 0`.
  var nmCrossProduct = crossProduct2d(nx, ny, mx, my);
  if (nearZero(nmCrossProduct)) {
    return false;
  }
  // `vec_m` and `vec_n` are intersect iff
  //     existing `p` and `q` in [0, 1] such that `vec_a1 + p * vec_m = vec_b1 + q * vec_n`,
  //     such that `q = ((vec_a1 - vec_b1) X vec_m) / (vec_n X vec_m)`
  //           and `p = ((vec_a1 - vec_b1) X vec_n) / (vec_n X vec_m)`.
  var b1a1x = a1x - b1x;
  var b1a1y = a1y - b1y;
  var q = crossProduct2d(b1a1x, b1a1y, mx, my) / nmCrossProduct;
  if (q < 0 || q > 1) {
    return false;
  }
  var p = crossProduct2d(b1a1x, b1a1y, nx, ny) / nmCrossProduct;
  if (p < 0 || p > 1) {
    return false;
  }
  return true;
}
/**
 * Cross product of 2-dimension vector.
 */
function crossProduct2d(x1, y1, x2, y2) {
  return x1 * y2 - x2 * y1;
}
function nearZero(val) {
  return val <= 1e-6 && val >= -1e-6;
}
/**
 * NOTE:
 *  A negative-width/height rect (due to negative margins) is not supported;
 *  it will be clampped to zero width/height.
 *  Although negative-width/height rects can be defined reasonably following the
 *  similar sense in CSS, but they are rarely used, hard to understand and complicated.
 *
 * @param rect Assume its width/height >= 0 if existing.
 *  x/y/width/height is allowed to be NaN,
 *  for the case that only x/width or y/height is intended to be computed.
 * @param delta
 *  If be `number[]`, should be `[top, right, bottom, left]`,
 *      which can be used in padding or margin case.
 *      @see `normalizeCssArray` in `util/format.ts`
 *  If be `number`, it means [delta, delta, delta, delta],
 *      which can be used in lineWidth (borderWith) case,
 *      [NOTICE]: commonly pass lineWidth / 2, following the convention that border is
 *      half inside half outside of the rect.
 * @param shrinkOrExpand
 *  `true` - shrink if `delta[i]` is positive, commmonly used in `padding` case.
 *  `false` - expand if `delta[i]` is positive, commmonly used in `margin` case. (default)
 * @param noNegative
 *  `true` - negative `delta[i]` will be clampped to 0.
 *  `false` - No clamp to `delta`. (default).
 * @return The input `rect`.
 */
function expandOrShrinkRect(rect, delta, shrinkOrExpand, noNegative, minSize // by default [0, 0].
) {
  if (delta == null) {
    return rect;
  } else if ((0,zrender_lib_core_util_js__rspack_import_25.isNumber)(delta)) {
    _tmpExpandRectDelta[0] = _tmpExpandRectDelta[1] = _tmpExpandRectDelta[2] = _tmpExpandRectDelta[3] = delta;
  } else {
    if (false) {}
    _tmpExpandRectDelta[0] = delta[0];
    _tmpExpandRectDelta[1] = delta[1];
    _tmpExpandRectDelta[2] = delta[2];
    _tmpExpandRectDelta[3] = delta[3];
  }
  if (noNegative) {
    _tmpExpandRectDelta[0] = (0,_number_js__rspack_import_28.mathMax)(0, _tmpExpandRectDelta[0]);
    _tmpExpandRectDelta[1] = (0,_number_js__rspack_import_28.mathMax)(0, _tmpExpandRectDelta[1]);
    _tmpExpandRectDelta[2] = (0,_number_js__rspack_import_28.mathMax)(0, _tmpExpandRectDelta[2]);
    _tmpExpandRectDelta[3] = (0,_number_js__rspack_import_28.mathMax)(0, _tmpExpandRectDelta[3]);
  }
  if (shrinkOrExpand) {
    _tmpExpandRectDelta[0] = -_tmpExpandRectDelta[0];
    _tmpExpandRectDelta[1] = -_tmpExpandRectDelta[1];
    _tmpExpandRectDelta[2] = -_tmpExpandRectDelta[2];
    _tmpExpandRectDelta[3] = -_tmpExpandRectDelta[3];
  }
  expandRectOnOneDimension(rect, _tmpExpandRectDelta, 'x', 'width', 3, 1, minSize && minSize[0] || 0);
  expandRectOnOneDimension(rect, _tmpExpandRectDelta, 'y', 'height', 0, 2, minSize && minSize[1] || 0);
  return rect;
}
var _tmpExpandRectDelta = [0, 0, 0, 0];
function expandRectOnOneDimension(rect, delta, xy, wh, ltIdx, rbIdx, minSize) {
  var deltaSum = delta[rbIdx] + delta[ltIdx];
  var oldSize = rect[wh];
  rect[wh] += deltaSum;
  minSize = (0,_number_js__rspack_import_28.mathMax)(0, (0,_number_js__rspack_import_28.mathMin)(minSize, oldSize));
  if (rect[wh] < minSize) {
    rect[wh] = minSize;
    // Try to make the position of the zero rect reasonable in most visual cases.
    rect[xy] += delta[ltIdx] >= 0 ? -delta[ltIdx] : delta[rbIdx] >= 0 ? oldSize + delta[rbIdx] : (0,_number_js__rspack_import_28.mathAbs)(deltaSum) > 1e-8 ? (oldSize - minSize) * delta[ltIdx] / deltaSum : 0;
  } else {
    rect[xy] -= delta[ltIdx];
  }
}
function setTooltipConfig(opt) {
  var itemTooltipOption = opt.itemTooltipOption;
  var componentModel = opt.componentModel;
  var itemName = opt.itemName;
  var itemTooltipOptionObj = (0,zrender_lib_core_util_js__rspack_import_25.isString)(itemTooltipOption) ? {
    formatter: itemTooltipOption
  } : itemTooltipOption;
  var mainType = componentModel.mainType;
  var componentIndex = componentModel.componentIndex;
  var formatterParams = {
    componentType: mainType,
    name: itemName,
    $vars: ['name']
  };
  formatterParams[mainType + 'Index'] = componentIndex;
  var formatterParamsExtra = opt.formatterParamsExtra;
  if (formatterParamsExtra) {
    (0,zrender_lib_core_util_js__rspack_import_25.each)((0,zrender_lib_core_util_js__rspack_import_25.keys)(formatterParamsExtra), function (key) {
      if (!(0,zrender_lib_core_util_js__rspack_import_25.hasOwn)(formatterParams, key)) {
        formatterParams[key] = formatterParamsExtra[key];
        formatterParams.$vars.push(key);
      }
    });
  }
  var ecData = (0,_innerStore_js__rspack_import_29.getECData)(opt.el);
  ecData.componentMainType = mainType;
  ecData.componentIndex = componentIndex;
  ecData.tooltipConfig = {
    name: itemName,
    option: (0,zrender_lib_core_util_js__rspack_import_25.defaults)({
      content: itemName,
      encodeHTMLContent: true,
      formatterParams: formatterParams
    }, itemTooltipOptionObj)
  };
}
function traverseElement(el, cb) {
  var stopped;
  // TODO
  // Polyfill for fixing zrender group traverse don't visit it's root issue.
  if (el.isGroup) {
    stopped = cb(el);
  }
  if (!stopped) {
    el.traverse(cb);
  }
}
function traverseElements(els, cb) {
  if (els) {
    if ((0,zrender_lib_core_util_js__rspack_import_25.isArray)(els)) {
      for (var i = 0; i < els.length; i++) {
        traverseElement(els[i], cb);
      }
    } else {
      traverseElement(els, cb);
    }
  }
}
/**
 * After a boundingRect applying a `transform`, whether to be still parallel screen X and Y.
 */
function isBoundingRectAxisAligned(transform) {
  return !transform || (0,_number_js__rspack_import_28.mathAbs)(transform[1]) < AXIS_ALIGN_EPSILON && (0,_number_js__rspack_import_28.mathAbs)(transform[2]) < AXIS_ALIGN_EPSILON || (0,_number_js__rspack_import_28.mathAbs)(transform[0]) < AXIS_ALIGN_EPSILON && (0,_number_js__rspack_import_28.mathAbs)(transform[3]) < AXIS_ALIGN_EPSILON;
}
var AXIS_ALIGN_EPSILON = 1e-5;
/**
 * Create or copy to the existing bounding rect to avoid modifying `source`.
 *
 * @usage
 *  out.rect = ensureCopyRect(out.rect, sourceRect);
 */
function ensureCopyRect(target, source) {
  return target ? zrender_lib_core_BoundingRect_js__rspack_import_18["default"].copy(target, source) : source.clone();
}
/**
 * Create or copy to the existing transform to avoid modifying `source`.
 *
 * [CAUTION]: transform is `NullUndefined` if no transform, following convention of zrender,
 *  and enable to bypass some unnecessary calculation, since in most cases there is no transform.
 *
 * @usage
 *  out.transform = ensureCopyTransform(out.transform, sourceTransform);
 */
function ensureCopyTransform(target, source) {
  return source ? zrender_lib_core_matrix_js__rspack_import_24.copy(target || zrender_lib_core_matrix_js__rspack_import_24.create(), source) : undefined;
}
function retrieveZInfo(model) {
  return {
    z: model.get('z') || 0,
    zlevel: model.get('zlevel') || 0
  };
}
/**
 * Assume all of the elements has the same `z` and `zlevel`.
 */
function calcZ2Range(el) {
  var max = -Infinity;
  var min = Infinity;
  traverseElement(el, function (el) {
    visitEl(el);
    visitEl(el.getTextContent());
    visitEl(el.getTextGuideLine());
  });
  function visitEl(el) {
    if (!el || el.isGroup) {
      return;
    }
    var currentStates = el.currentStates;
    if (currentStates.length) {
      for (var idx = 0; idx < currentStates.length; idx++) {
        calcZ2(el.states[currentStates[idx]]);
      }
    }
    calcZ2(el);
  }
  function calcZ2(entity) {
    if (entity) {
      var z2 = entity.z2;
      // Consider z2 may be NullUndefined
      if (z2 > max) {
        max = z2;
      }
      if (z2 < min) {
        min = z2;
      }
    }
  }
  if (min > max) {
    min = max = 0;
  }
  return {
    min: min,
    max: max
  };
}
function traverseUpdateZ(el, z, zlevel) {
  doUpdateZ(el, z, zlevel, -Infinity);
}
function doUpdateZ(el, z, zlevel,
// FIXME: Ideally all the labels should be above all the glyphs by default,
//  e.g. in graph, edge labels should be above node elements.
//  Currently impl does not guarantee that.
maxZ2) {
  // `ignoreModelZ` is used to intentionally lift elements to cover other elements,
  // where maxZ2 (for label.z2) should also not be counted for its parents.
  if (el.ignoreModelZ) {
    return maxZ2;
  }
  // Group may also have textContent
  var label = el.getTextContent();
  var labelLine = el.getTextGuideLine();
  var isGroup = el.isGroup;
  if (isGroup) {
    // set z & zlevel of children elements of Group
    var children = el.childrenRef();
    for (var i = 0; i < children.length; i++) {
      maxZ2 = (0,_number_js__rspack_import_28.mathMax)(doUpdateZ(children[i], z, zlevel, maxZ2), maxZ2);
    }
  } else {
    // not Group
    el.z = z;
    el.zlevel = zlevel;
    maxZ2 = (0,_number_js__rspack_import_28.mathMax)(el.z2 || 0, maxZ2);
  }
  // NOTICE: Do not call any method that can set REDRAW_BIT,
  // otherwise progressive rendering is broken.
  // always set z and zlevel if label/labelLine exists
  if (label) {
    label.z = z;
    label.zlevel = zlevel;
    // lift z2 of text content
    // TODO if el.emphasis.z2 is spcefied, what about textContent.
    isFinite(maxZ2) && (label.z2 = maxZ2 + 2);
  }
  if (labelLine) {
    var textGuideLineConfig = el.textGuideLineConfig;
    labelLine.z = z;
    labelLine.zlevel = zlevel;
    isFinite(maxZ2) && (labelLine.z2 = maxZ2 + (textGuideLineConfig && textGuideLineConfig.showAbove ? 1 : -1));
  }
  return maxZ2;
}
function payloadDisableAnimation(payload) {
  // Disable animation in `updateProps` of `graphic.ts`.
  payload.animation = {
    duration: 0
  };
  return payload;
}
/**
 * Decompose an affine matrix to
 * x/y/scaleX/scaleY/rotation/skewX/skewY
 */
function decomposeTransform(out, mt) {
  mt ? zrender_lib_core_matrix_js__rspack_import_24.copy(tmpDTR.transform, mt) : zrender_lib_core_matrix_js__rspack_import_24.identity(tmpDTR.transform);
  // Use a tmp transformable to avoid effects from parent.
  tmpDTR.decomposeTransform();
  (0,zrender_lib_core_Transformable_js__rspack_import_26.copyTransform)(out, tmpDTR);
  return out;
}
var tmpDTR = new zrender_lib_core_Transformable_js__rspack_import_26["default"]();
tmpDTR.transform = zrender_lib_core_matrix_js__rspack_import_24.create();
/**
 * If not canvas painter, return null/undefined.
 */
function getCurrentCanvasPainter(api) {
  var painter = api.getZr().painter;
  return painter.getType() === 'canvas' ? painter : null;
}
// Register built-in shapes. These shapes might be overwritten
// by users, although we do not recommend that.
registerShape('circle', zrender_lib_graphic_shape_Circle_js__rspack_import_4["default"]);
registerShape('ellipse', zrender_lib_graphic_shape_Ellipse_js__rspack_import_5["default"]);
registerShape('sector', zrender_lib_graphic_shape_Sector_js__rspack_import_6["default"]);
registerShape('ring', zrender_lib_graphic_shape_Ring_js__rspack_import_7["default"]);
registerShape('polygon', zrender_lib_graphic_shape_Polygon_js__rspack_import_8["default"]);
registerShape('polyline', zrender_lib_graphic_shape_Polyline_js__rspack_import_9["default"]);
registerShape('rect', zrender_lib_graphic_shape_Rect_js__rspack_import_10["default"]);
registerShape('line', zrender_lib_graphic_shape_Line_js__rspack_import_11["default"]);
registerShape('bezierCurve', zrender_lib_graphic_shape_BezierCurve_js__rspack_import_12["default"]);
registerShape('arc', zrender_lib_graphic_shape_Arc_js__rspack_import_13["default"]);

__webpack_require__.d(__webpack_exports__, {
  Arc: function() { return /* reexport safe */ zrender_lib_graphic_shape_Arc_js__rspack_import_13["default"]; },
  BezierCurve: function() { return /* reexport safe */ zrender_lib_graphic_shape_BezierCurve_js__rspack_import_12["default"]; },
  BoundingRect: function() { return /* reexport safe */ zrender_lib_core_BoundingRect_js__rspack_import_18["default"]; },
  Circle: function() { return /* reexport safe */ zrender_lib_graphic_shape_Circle_js__rspack_import_4["default"]; },
  CompoundPath: function() { return /* reexport safe */ zrender_lib_graphic_CompoundPath_js__rspack_import_15["default"]; },
  Ellipse: function() { return /* reexport safe */ zrender_lib_graphic_shape_Ellipse_js__rspack_import_5["default"]; },
  Group: function() { return /* reexport safe */ zrender_lib_graphic_Group_js__rspack_import_1["default"]; },
  Image: function() { return /* reexport safe */ zrender_lib_graphic_Image_js__rspack_import_2["default"]; },
  IncrementalDisplayable: function() { return /* reexport safe */ zrender_lib_graphic_IncrementalDisplayable_js__rspack_import_14["default"]; },
  Line: function() { return /* reexport safe */ zrender_lib_graphic_shape_Line_js__rspack_import_11["default"]; },
  LinearGradient: function() { return /* reexport safe */ zrender_lib_graphic_LinearGradient_js__rspack_import_16["default"]; },
  OrientedBoundingRect: function() { return /* reexport safe */ zrender_lib_core_OrientedBoundingRect_js__rspack_import_19["default"]; },
  Path: function() { return /* reexport safe */ zrender_lib_graphic_Path_js__rspack_import_21["default"]; },
  Point: function() { return /* reexport safe */ zrender_lib_core_Point_js__rspack_import_20["default"]; },
  Polygon: function() { return /* reexport safe */ zrender_lib_graphic_shape_Polygon_js__rspack_import_8["default"]; },
  Polyline: function() { return /* reexport safe */ zrender_lib_graphic_shape_Polyline_js__rspack_import_9["default"]; },
  RadialGradient: function() { return /* reexport safe */ zrender_lib_graphic_RadialGradient_js__rspack_import_17["default"]; },
  Rect: function() { return /* reexport safe */ zrender_lib_graphic_shape_Rect_js__rspack_import_10["default"]; },
  Ring: function() { return /* reexport safe */ zrender_lib_graphic_shape_Ring_js__rspack_import_7["default"]; },
  Sector: function() { return /* reexport safe */ zrender_lib_graphic_shape_Sector_js__rspack_import_6["default"]; },
  Text: function() { return /* reexport safe */ zrender_lib_graphic_Text_js__rspack_import_3["default"]; },
  initProps: function() { return /* reexport safe */ _animation_basicTransition_js__rspack_import_0.initProps; },
  isElementRemoved: function() { return /* reexport safe */ _animation_basicTransition_js__rspack_import_0.isElementRemoved; },
  removeElement: function() { return /* reexport safe */ _animation_basicTransition_js__rspack_import_0.removeElement; },
  removeElementWithFadeOut: function() { return /* reexport safe */ _animation_basicTransition_js__rspack_import_0.removeElementWithFadeOut; },
  updateProps: function() { return /* reexport safe */ _animation_basicTransition_js__rspack_import_0.updateProps; }
}, {
  HOVER_LAYER_FOR_INCREMENTAL: HOVER_LAYER_FOR_INCREMENTAL,
  HOVER_LAYER_FROM_THRESHOLD: HOVER_LAYER_FROM_THRESHOLD,
  HOVER_LAYER_NO: HOVER_LAYER_NO,
  WH: WH,
  XY: XY,
  applyTransform: applyTransform,
  calcZ2Range: calcZ2Range,
  clipPointsByRect: clipPointsByRect,
  clipRectByRect: clipRectByRect,
  createIcon: createIcon,
  decomposeTransform: decomposeTransform,
  ensureCopyRect: ensureCopyRect,
  ensureCopyTransform: ensureCopyTransform,
  expandOrShrinkRect: expandOrShrinkRect,
  extendPath: extendPath,
  extendShape: extendShape,
  getCurrentCanvasPainter: getCurrentCanvasPainter,
  getShapeClass: getShapeClass,
  getTransform: getTransform,
  groupTransition: groupTransition,
  isBoundingRectAxisAligned: isBoundingRectAxisAligned,
  lineLineIntersect: lineLineIntersect,
  linePolygonIntersect: linePolygonIntersect,
  makeImage: makeImage,
  makePath: makePath,
  mergePath: mergePath,
  payloadDisableAnimation: payloadDisableAnimation,
  registerShape: registerShape,
  resizePath: resizePath,
  retrieveZInfo: retrieveZInfo,
  setTooltipConfig: setTooltipConfig,
  subPixelOptimize: subPixelOptimize,
  subPixelOptimizeLine: subPixelOptimizeLine,
  subPixelOptimizeRect: subPixelOptimizeRect,
  transformDirection: transformDirection,
  traverseElements: traverseElements,
  traverseUpdateZ: traverseUpdateZ
});


}),
63655: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var _model_js__rspack_import_0 = __webpack_require__(53781);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

var getECData = (0,_model_js__rspack_import_0.makeInner)();
var setCommonECData = function (seriesIndex, dataType, dataIdx, el) {
  if (el) {
    var ecData = getECData(el);
    // Add data index and series index for indexing the data by element
    // Useful in tooltip
    ecData.dataIndex = dataIdx;
    ecData.dataType = dataType;
    ecData.seriesIndex = seriesIndex;
    ecData.ssrType = 'chart';
    // TODO: not store dataIndex on children.
    if (el.type === 'group') {
      el.traverse(function (child) {
        var childECData = getECData(child);
        childECData.seriesIndex = seriesIndex;
        childECData.dataIndex = dataIdx;
        childECData.dataType = dataType;
        childECData.ssrType = 'chart';
      });
    }
  }
};
__webpack_require__.d(__webpack_exports__, {
}, {
  getECData: getECData,
  setCommonECData: setCommonECData
});


}),
62504: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var _coord_axisBand_js__rspack_import_5 = __webpack_require__(37371);
/* import */ var _coord_cartesian_Axis2D_js__rspack_import_3 = __webpack_require__(84045);
/* import */ var _coord_cartesian_GridModel_js__rspack_import_0 = __webpack_require__(65345);
/* import */ var _coord_single_AxisModel_js__rspack_import_1 = __webpack_require__(22040);
/* import */ var _scale_helper_js__rspack_import_4 = __webpack_require__(45620);
/* import */ var _model_js__rspack_import_2 = __webpack_require__(53781);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/






function needFixJitter(seriesModel, axis) {
  var coordinateSystem = seriesModel.coordinateSystem;
  var coordType = coordinateSystem && coordinateSystem.type;
  var baseAxis = coordinateSystem && coordinateSystem.getBaseAxis && coordinateSystem.getBaseAxis();
  var scaleType = baseAxis && baseAxis.scale && baseAxis.scale.type;
  var seriesValid = coordType === _coord_cartesian_GridModel_js__rspack_import_0.COORD_SYS_TYPE_CARTESIAN_2D && scaleType === 'ordinal' || coordType === _coord_single_AxisModel_js__rspack_import_1.COORD_SYS_TYPE_SINGLE;
  var axisValid = axis.model.get('jitter') > 0;
  return seriesValid && axisValid;
}
var inner = (0,_model_js__rspack_import_2.makeInner)();
/**
 * Fix jitter for overlapping data points.
 *
 * @param fixedAxis The axis whose coord doesn't change with jitter.
 * @param fixedCoord The coord of fixedAxis.
 * @param floatCoord The coord of the other axis, which should be changed with jittering.
 * @param radius The radius of the data point, considering the symbol is a circle.
 * @returns updated floatCoord.
 */
function fixJitter(fixedAxis, fixedCoord, floatCoord, radius) {
  if (fixedAxis instanceof _coord_cartesian_Axis2D_js__rspack_import_3["default"]) {
    var scaleType = fixedAxis.scale.type;
    if (scaleType !== 'ordinal') {
      return floatCoord;
    }
  }
  var axisModel = fixedAxis.model;
  var jitter = axisModel.get('jitter');
  if (!(jitter > 0)) {
    return floatCoord;
  }
  var jitterOverlap = axisModel.get('jitterOverlap');
  var jitterMargin = axisModel.get('jitterMargin') || 0;
  // Get band width to limit jitter range
  var bandWidth = (0,_scale_helper_js__rspack_import_4.isOrdinalScale)(fixedAxis.scale) ? (0,_coord_axisBand_js__rspack_import_5.calcBandWidth)(fixedAxis).w : null;
  if (jitterOverlap) {
    return fixJitterIgnoreOverlaps(floatCoord, jitter, bandWidth, radius);
  }
  return fixJitterAvoidOverlaps(fixedAxis, fixedCoord, floatCoord, radius, jitter, jitterMargin);
}
function fixJitterIgnoreOverlaps(floatCoord, jitter, bandWidth, radius) {
  // Don't clamp single axis
  if (bandWidth === null) {
    return floatCoord + (Math.random() - 0.5) * jitter;
  }
  var maxJitter = bandWidth - radius * 2;
  var actualJitter = Math.min(Math.max(0, jitter), maxJitter);
  return floatCoord + (Math.random() - 0.5) * actualJitter;
}
function fixJitterAvoidOverlaps(fixedAxis, fixedCoord, floatCoord, radius, jitter, margin) {
  var store = inner(fixedAxis);
  if (!store.items) {
    store.items = [];
  }
  var items = store.items;
  // Try both positive and negative directions, choose the one with smaller movement
  var overlapA = placeJitterOnDirection(items, fixedCoord, floatCoord, radius, jitter, margin, 1);
  var overlapB = placeJitterOnDirection(items, fixedCoord, floatCoord, radius, jitter, margin, -1);
  var minFloat = Math.abs(overlapA - floatCoord) < Math.abs(overlapB - floatCoord) ? overlapA : overlapB;
  // Clamp only category axis
  var bandWidth = (0,_scale_helper_js__rspack_import_4.isOrdinalScale)(fixedAxis.scale) ? (0,_coord_axisBand_js__rspack_import_5.calcBandWidth)(fixedAxis).w : null;
  var distance = Math.abs(minFloat - floatCoord);
  if (distance > jitter / 2 || bandWidth && distance > bandWidth / 2 - radius) {
    // If the new item is moved too far, then give up.
    // Fall back to random jitter.
    return fixJitterIgnoreOverlaps(floatCoord, jitter, bandWidth, radius);
  }
  // Add new point to array
  items.push({
    fixedCoord: fixedCoord,
    floatCoord: minFloat,
    r: radius
  });
  return minFloat;
}
function placeJitterOnDirection(items, fixedCoord, floatCoord, radius, jitter, margin, direction) {
  var y = floatCoord;
  // Check all existing items for overlap and find the maximum adjustment needed
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var dx = fixedCoord - item.fixedCoord;
    var dy = y - item.floatCoord;
    var d2 = dx * dx + dy * dy;
    var r = radius + item.r + margin;
    if (d2 < r * r) {
      // Has overlap, calculate required adjustment
      var requiredY = item.floatCoord + Math.sqrt(r * r - dx * dx) * direction;
      // Check if this adjustment would move too far
      if (Math.abs(requiredY - floatCoord) > jitter / 2) {
        return Number.MAX_VALUE; // Give up
      }
      // Update y only when it's larger to the center
      if (direction === 1 && requiredY > y || direction === -1 && requiredY < y) {
        y = requiredY;
        // Loop from the start again
        i = -1; // Reset index to recheck all items
        continue; // Recalculate with the new y position
      }
    }
  }
  return y;
}
__webpack_require__.d(__webpack_exports__, {
}, {
  fixJitter: fixJitter,
  needFixJitter: needFixJitter
});


}),
29268: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var zrender_lib_core_util_js__rspack_import_0 = __webpack_require__(75275);
/* import */ var zrender_lib_core_BoundingRect_js__rspack_import_4 = __webpack_require__(93689);
/* import */ var _number_js__rspack_import_2 = __webpack_require__(46823);
/* import */ var _format_js__rspack_import_3 = __webpack_require__(13501);
/* import */ var _core_CoordinateSystem_js__rspack_import_1 = __webpack_require__(31712);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/
// Layout helpers for each component positioning






var each = zrender_lib_core_util_js__rspack_import_0.each;
/**
 * @public
 */
var LOCATION_PARAMS = ['left', 'right', 'top', 'bottom', 'width', 'height'];
/**
 * @public
 */
var HV_NAMES = [['width', 'left', 'right'], ['height', 'top', 'bottom']];
function boxLayout(orient, group, gap, maxWidth, maxHeight) {
  var x = 0;
  var y = 0;
  if (maxWidth == null) {
    maxWidth = Infinity;
  }
  if (maxHeight == null) {
    maxHeight = Infinity;
  }
  var currentLineMaxSize = 0;
  group.eachChild(function (child, idx) {
    var rect = child.getBoundingRect();
    var nextChild = group.childAt(idx + 1);
    var nextChildRect = nextChild && nextChild.getBoundingRect();
    var nextX;
    var nextY;
    if (orient === 'horizontal') {
      var moveX = rect.width + (nextChildRect ? -nextChildRect.x + rect.x : 0);
      nextX = x + moveX;
      // Wrap when width exceeds maxWidth or meet a `newline` group
      // FIXME compare before adding gap?
      if (nextX > maxWidth || child.newline) {
        x = 0;
        nextX = moveX;
        y += currentLineMaxSize + gap;
        currentLineMaxSize = rect.height;
      } else {
        // FIXME: consider rect.y is not `0`?
        currentLineMaxSize = Math.max(currentLineMaxSize, rect.height);
      }
    } else {
      var moveY = rect.height + (nextChildRect ? -nextChildRect.y + rect.y : 0);
      nextY = y + moveY;
      // Wrap when width exceeds maxHeight or meet a `newline` group
      if (nextY > maxHeight || child.newline) {
        x += currentLineMaxSize + gap;
        y = 0;
        nextY = moveY;
        currentLineMaxSize = rect.width;
      } else {
        currentLineMaxSize = Math.max(currentLineMaxSize, rect.width);
      }
    }
    if (child.newline) {
      return;
    }
    child.x = x;
    child.y = y;
    child.markRedraw();
    orient === 'horizontal' ? x = nextX + gap : y = nextY + gap;
  });
}
/**
 * VBox or HBox layouting
 * @param {string} orient
 * @param {module:zrender/graphic/Group} group
 * @param {number} gap
 * @param {number} [width=Infinity]
 * @param {number} [height=Infinity]
 */
var box = boxLayout;
/**
 * VBox layouting
 * @param {module:zrender/graphic/Group} group
 * @param {number} gap
 * @param {number} [width=Infinity]
 * @param {number} [height=Infinity]
 */
var vbox = zrender_lib_core_util_js__rspack_import_0.curry(boxLayout, 'vertical');
/**
 * HBox layouting
 * @param {module:zrender/graphic/Group} group
 * @param {number} gap
 * @param {number} [width=Infinity]
 * @param {number} [height=Infinity]
 */
var hbox = zrender_lib_core_util_js__rspack_import_0.curry(boxLayout, 'horizontal');
function getBoxLayoutParams(boxLayoutModel, ignoreParent) {
  return {
    left: boxLayoutModel.getShallow('left', ignoreParent),
    top: boxLayoutModel.getShallow('top', ignoreParent),
    right: boxLayoutModel.getShallow('right', ignoreParent),
    bottom: boxLayoutModel.getShallow('bottom', ignoreParent),
    width: boxLayoutModel.getShallow('width', ignoreParent),
    height: boxLayoutModel.getShallow('height', ignoreParent)
  };
}
function getViewRectAndCenterForCircleLayout(seriesModel, api) {
  var layoutRef = createBoxLayoutReference(seriesModel, api, {
    enableLayoutOnlyByCenter: true
  });
  var boxLayoutParams = seriesModel.getBoxLayoutParams();
  var viewRect;
  var center;
  if (layoutRef.type === BoxLayoutReferenceType.point) {
    center = layoutRef.refPoint;
    // `viewRect` is required in `pie/labelLayout.ts`.
    viewRect = getLayoutRect(boxLayoutParams, {
      width: api.getWidth(),
      height: api.getHeight()
    });
  } else {
    // layoutRef.type === layout.BoxLayoutReferenceType.rect
    var centerOption = seriesModel.get('center');
    var centerOptionArr = zrender_lib_core_util_js__rspack_import_0.isArray(centerOption) ? centerOption : [centerOption, centerOption];
    viewRect = getLayoutRect(boxLayoutParams, layoutRef.refContainer);
    center = layoutRef.boxCoordFrom === _core_CoordinateSystem_js__rspack_import_1.BOX_COORD_SYS_COORD_FROM_PROP_COORD2 ? layoutRef.refPoint // option `series.center` has been used as coord.
    : [(0,_number_js__rspack_import_2.parsePercent)(centerOptionArr[0], viewRect.width) + viewRect.x, (0,_number_js__rspack_import_2.parsePercent)(centerOptionArr[1], viewRect.height) + viewRect.y];
  }
  return {
    viewRect: viewRect,
    center: center
  };
}
function getCircleLayout(seriesModel, api) {
  // center can be string or number when coordinateSystem is specified
  var _a = getViewRectAndCenterForCircleLayout(seriesModel, api),
    viewRect = _a.viewRect,
    center = _a.center;
  var radius = seriesModel.get('radius');
  if (!zrender_lib_core_util_js__rspack_import_0.isArray(radius)) {
    radius = [0, radius];
  }
  var width = (0,_number_js__rspack_import_2.parsePercent)(viewRect.width, api.getWidth());
  var height = (0,_number_js__rspack_import_2.parsePercent)(viewRect.height, api.getHeight());
  var size = Math.min(width, height);
  var r0 = (0,_number_js__rspack_import_2.parsePercent)(radius[0], size / 2);
  var r = (0,_number_js__rspack_import_2.parsePercent)(radius[1], size / 2);
  return {
    cx: center[0],
    cy: center[1],
    r0: r0,
    r: r,
    viewRect: viewRect
  };
}
/**
 * Parse position info.
 */
function getLayoutRect(positionInfo, containerRect,
// This is the space from the `containerRect` to the returned bounding rect.
// Commonly used in option `legend.padding`, `timeline.padding`, `title.padding`,
//  `visualMap.padding`, ...
// [NOTICE]:
//  It's named `margin`, because it's the space that outside the bounding rect. But from
//  the perspective of the the caller, it's commonly used as the `padding` of a component,
//  because conventionally background color covers this space.
// [BEHAVIOR]:
//  - If width/height is specified, `margin` does not effect them.
//  - Otherwise, they are calculated based on the rect that `containerRect` shrinked by `margin`.
//  - left/right/top/bottom are based on the rect that `containerRect` shrinked by `margin`.
margin) {
  margin = _format_js__rspack_import_3.normalizeCssArray(margin || 0);
  var containerWidth = containerRect.width;
  var containerHeight = containerRect.height;
  var left = (0,_number_js__rspack_import_2.parsePercent)(positionInfo.left, containerWidth);
  var top = (0,_number_js__rspack_import_2.parsePercent)(positionInfo.top, containerHeight);
  var right = (0,_number_js__rspack_import_2.parsePercent)(positionInfo.right, containerWidth);
  var bottom = (0,_number_js__rspack_import_2.parsePercent)(positionInfo.bottom, containerHeight);
  var width = (0,_number_js__rspack_import_2.parsePercent)(positionInfo.width, containerWidth);
  var height = (0,_number_js__rspack_import_2.parsePercent)(positionInfo.height, containerHeight);
  var verticalMargin = margin[2] + margin[0];
  var horizontalMargin = margin[1] + margin[3];
  var aspect = positionInfo.aspect;
  // If width is not specified, calculate width from left and right
  if (isNaN(width)) {
    width = containerWidth - right - horizontalMargin - left;
  }
  if (isNaN(height)) {
    height = containerHeight - bottom - verticalMargin - top;
  }
  if (aspect != null) {
    // If width and height are not given
    // 1. Graph should not exceeds the container
    // 2. Aspect must be keeped
    // 3. Graph should take the space as more as possible
    // FIXME
    // Margin is not considered, because there is no case that both
    // using margin and aspect so far.
    if (isNaN(width) && isNaN(height)) {
      // PENDING: if only `left` or `right` is defined, perhaps it's more preferable to
      // calculate size based on `containerWidth - left` or `containerWidth - left` here,
      // but for backward compatibility we do not change it.
      if (aspect > containerWidth / containerHeight) {
        width = containerWidth * 0.8;
      } else {
        height = containerHeight * 0.8;
      }
    }
    // Calculate width or height with given aspect
    if (isNaN(width)) {
      width = aspect * height;
    }
    if (isNaN(height)) {
      height = width / aspect;
    }
  }
  // If left is not specified, calculate left from right and width
  if (isNaN(left)) {
    left = containerWidth - right - width - horizontalMargin;
  }
  if (isNaN(top)) {
    top = containerHeight - bottom - height - verticalMargin;
  }
  // Align left and top
  switch (positionInfo.left || positionInfo.right) {
    case 'center':
      left = containerWidth / 2 - width / 2 - margin[3];
      break;
    case 'right':
      left = containerWidth - width - horizontalMargin;
      break;
  }
  switch (positionInfo.top || positionInfo.bottom) {
    case 'middle':
    case 'center':
      top = containerHeight / 2 - height / 2 - margin[0];
      break;
    case 'bottom':
      top = containerHeight - height - verticalMargin;
      break;
  }
  // If something is wrong and left, top, width, height are calculated as NaN
  left = left || 0;
  top = top || 0;
  if (isNaN(width)) {
    // Width may be NaN if only one value is given except width
    width = containerWidth - horizontalMargin - left - (right || 0);
  }
  if (isNaN(height)) {
    // Height may be NaN if only one value is given except height
    height = containerHeight - verticalMargin - top - (bottom || 0);
  }
  var rect = new zrender_lib_core_BoundingRect_js__rspack_import_4["default"]((containerRect.x || 0) + left + margin[3], (containerRect.y || 0) + top + margin[0], width, height);
  rect.margin = margin;
  return rect;
}
/**
 * PENDING:
 *  when preserveAspect: 'cover' and aspect is near Infinity
 *  or when preserveAspect: 'contain' and aspect is near 0,
 *  the result width or height is near Inifity. It's logically correct,
 *  Therefore currently we do not handle it, until bad cases arise.
 */
function applyPreserveAspect(component, layoutRect,
// That is, `width / height`.
// Assume `aspect` is positive.
aspect) {
  var preserveAspect = component.getShallow('preserveAspect', true);
  if (!preserveAspect) {
    return layoutRect;
  }
  var actualAspect = layoutRect.width / layoutRect.height;
  if (Math.abs(Math.atan(aspect) - Math.atan(actualAspect)) < 1e-9) {
    return layoutRect;
  }
  var preserveAspectAlign = component.getShallow('preserveAspectAlign', true);
  var preserveAspectVerticalAlign = component.getShallow('preserveAspectVerticalAlign', true);
  var layoutOptInner = {
    width: layoutRect.width,
    height: layoutRect.height
  };
  var isCover = preserveAspect === 'cover';
  if (actualAspect > aspect && !isCover || actualAspect < aspect && isCover) {
    layoutOptInner.width = layoutRect.height * aspect;
    preserveAspectAlign === 'left' ? layoutOptInner.left = 0 : preserveAspectAlign === 'right' ? layoutOptInner.right = 0 : layoutOptInner.left = 'center';
  } else {
    layoutOptInner.height = layoutRect.width / aspect;
    preserveAspectVerticalAlign === 'top' ? layoutOptInner.top = 0 : preserveAspectVerticalAlign === 'bottom' ? layoutOptInner.bottom = 0 : layoutOptInner.top = 'middle';
  }
  return getLayoutRect(layoutOptInner, layoutRect);
}
var BoxLayoutReferenceType = {
  rect: 1,
  point: 2
};
/**
 * Uniformly calculate layout reference (rect or center) based on either:
 *  - viewport:
 *      - Get `refContainer` as `{x: 0, y: 0, width: api.getWidth(), height: api.getHeight()}`
 *  - coordinate system, which can serve in several ways:
 *      - Use `dataToPoint` to get the `refPoint`, such as, in cartesian2d coord sys.
 *      - Use `dataToLayout` to get the `refContainer`, such as, in matrix coord sys.
 */
function createBoxLayoutReference(model, api, opt) {
  var refContainer;
  var refPoint;
  var layoutRefType;
  var boxCoordSys = model.boxCoordinateSystem;
  var boxCoordFrom;
  if (boxCoordSys) {
    var _a = (0,_core_CoordinateSystem_js__rspack_import_1.getCoordForCoordSysUsageKindBox)(model),
      coord = _a.coord,
      from = _a.from;
    // Do not use `clamp` in `dataToLayout` and `dataToPoint`, because:
    //  1. Should support overflow (such as, by dataZoom), where NaN should be in the result.
    //  2. Be consistent with the way used in `series.data`
    if (boxCoordSys.dataToLayout) {
      layoutRefType = BoxLayoutReferenceType.rect;
      boxCoordFrom = from;
      var result = boxCoordSys.dataToLayout(coord);
      refContainer = result.contentRect || result.rect;
    } else if (opt && opt.enableLayoutOnlyByCenter && boxCoordSys.dataToPoint) {
      layoutRefType = BoxLayoutReferenceType.point;
      boxCoordFrom = from;
      refPoint = boxCoordSys.dataToPoint(coord);
    } else {
      if (false) {}
    }
  }
  if (layoutRefType == null) {
    layoutRefType = BoxLayoutReferenceType.rect;
  }
  if (layoutRefType === BoxLayoutReferenceType.rect) {
    if (!refContainer) {
      refContainer = {
        x: 0,
        y: 0,
        width: api.getWidth(),
        height: api.getHeight()
      };
    }
    refPoint = [refContainer.x + refContainer.width / 2, refContainer.y + refContainer.height / 2];
  }
  return {
    type: layoutRefType,
    refContainer: refContainer,
    refPoint: refPoint,
    boxCoordFrom: boxCoordFrom
  };
}
/**
 * Position a zr element in viewport
 *  Group position is specified by either
 *  {left, top}, {right, bottom}
 *  If all properties exists, right and bottom will be igonred.
 *
 * Logic:
 *     1. Scale (against origin point in parent coord)
 *     2. Rotate (against origin point in parent coord)
 *     3. Translate (with el.position by this method)
 * So this method only fixes the last step 'Translate', which does not affect
 * scaling and rotating.
 *
 * If be called repeatedly with the same input el, the same result will be gotten.
 *
 * Return true if the layout happened.
 *
 * @param el Should have `getBoundingRect` method.
 * @param positionInfo
 * @param positionInfo.left
 * @param positionInfo.top
 * @param positionInfo.right
 * @param positionInfo.bottom
 * @param positionInfo.width Only for opt.boundingModel: 'raw'
 * @param positionInfo.height Only for opt.boundingModel: 'raw'
 * @param containerRect
 * @param margin
 * @param opt
 * @param opt.hv Only horizontal or only vertical. Default to be [1, 1]
 * @param opt.boundingMode
 *        Specify how to calculate boundingRect when locating.
 *        'all': Position the boundingRect that is transformed and uioned
 *               both itself and its descendants.
 *               This mode simplies confine the elements in the bounding
 *               of their container (e.g., using 'right: 0').
 *        'raw': Position the boundingRect that is not transformed and only itself.
 *               This mode is useful when you want a element can overflow its
 *               container. (Consider a rotated circle needs to be located in a corner.)
 *               In this mode positionInfo.width/height can only be number.
 */
function positionElement(el, positionInfo, containerRect, margin, opt, out) {
  var h = !opt || !opt.hv || opt.hv[0];
  var v = !opt || !opt.hv || opt.hv[1];
  var boundingMode = opt && opt.boundingMode || 'all';
  out = out || el;
  out.x = el.x;
  out.y = el.y;
  if (!h && !v) {
    return false;
  }
  var rect;
  if (boundingMode === 'raw') {
    rect = el.type === 'group' ? new zrender_lib_core_BoundingRect_js__rspack_import_4["default"](0, 0, +positionInfo.width || 0, +positionInfo.height || 0) : el.getBoundingRect();
  } else {
    rect = el.getBoundingRect();
    if (el.needLocalTransform()) {
      var transform = el.getLocalTransform();
      // Notice: raw rect may be inner object of el,
      // which should not be modified.
      rect = rect.clone();
      rect.applyTransform(transform);
    }
  }
  // The real width and height can not be specified but calculated by the given el.
  var layoutRect = getLayoutRect(zrender_lib_core_util_js__rspack_import_0.defaults({
    width: rect.width,
    height: rect.height
  }, positionInfo), containerRect, margin);
  // Because 'tranlate' is the last step in transform
  // (see zrender/core/Transformable#getLocalTransform),
  // we can just only modify el.position to get final result.
  var dx = h ? layoutRect.x - rect.x : 0;
  var dy = v ? layoutRect.y - rect.y : 0;
  if (boundingMode === 'raw') {
    out.x = dx;
    out.y = dy;
  } else {
    out.x += dx;
    out.y += dy;
  }
  if (out === el) {
    el.markRedraw();
  }
  return true;
}
/**
 * @param option Contains some of the properties in HV_NAMES.
 * @param hvIdx 0: horizontal; 1: vertical.
 */
function sizeCalculable(option, hvIdx) {
  return option[HV_NAMES[hvIdx][0]] != null || option[HV_NAMES[hvIdx][1]] != null && option[HV_NAMES[hvIdx][2]] != null;
}
function fetchLayoutMode(ins) {
  var layoutMode = ins.layoutMode || ins.constructor.layoutMode;
  return zrender_lib_core_util_js__rspack_import_0.isObject(layoutMode) ? layoutMode : layoutMode ? {
    type: layoutMode
  } : null;
}
/**
 * Consider Case:
 * When default option has {left: 0, width: 100}, and we set {right: 0}
 * through setOption or media query, using normal zrUtil.merge will cause
 * {right: 0} does not take effect.
 *
 * @example
 * ComponentModel.extend({
 *     init: function () {
 *         ...
 *         let inputPositionParams = layout.getLayoutParams(option);
 *         this.mergeOption(inputPositionParams);
 *     },
 *     mergeOption: function (newOption) {
 *         newOption && zrUtil.merge(thisOption, newOption, true);
 *         layout.mergeLayoutParam(thisOption, newOption);
 *     }
 * });
 *
 * @param targetOption
 * @param newOption
 * @param opt
 */
function mergeLayoutParam(targetOption, newOption, opt) {
  var ignoreSize = opt && opt.ignoreSize;
  !zrender_lib_core_util_js__rspack_import_0.isArray(ignoreSize) && (ignoreSize = [ignoreSize, ignoreSize]);
  var hResult = merge(HV_NAMES[0], 0);
  var vResult = merge(HV_NAMES[1], 1);
  copy(HV_NAMES[0], targetOption, hResult);
  copy(HV_NAMES[1], targetOption, vResult);
  function merge(names, hvIdx) {
    var newParams = {};
    var newValueCount = 0;
    var merged = {};
    var mergedValueCount = 0;
    var enoughParamNumber = 2;
    each(names, function (name) {
      merged[name] = targetOption[name];
    });
    each(names, function (name) {
      // Consider case: newOption.width is null, which is
      // set by user for removing width setting.
      zrender_lib_core_util_js__rspack_import_0.hasOwn(newOption, name) && (newParams[name] = merged[name] = newOption[name]);
      hasValue(newParams, name) && newValueCount++;
      hasValue(merged, name) && mergedValueCount++;
    });
    if (ignoreSize[hvIdx]) {
      // Only one of left/right is premitted to exist.
      if (hasValue(newOption, names[1])) {
        merged[names[2]] = null;
      } else if (hasValue(newOption, names[2])) {
        merged[names[1]] = null;
      }
      return merged;
    }
    // Case: newOption: {width: ..., right: ...},
    // or targetOption: {right: ...} and newOption: {width: ...},
    // There is no conflict when merged only has params count
    // little than enoughParamNumber.
    if (mergedValueCount === enoughParamNumber || !newValueCount) {
      return merged;
    }
    // Case: newOption: {width: ..., right: ...},
    // Than we can make sure user only want those two, and ignore
    // all origin params in targetOption.
    else if (newValueCount >= enoughParamNumber) {
      return newParams;
    } else {
      // Chose another param from targetOption by priority.
      for (var i = 0; i < names.length; i++) {
        var name_1 = names[i];
        if (!zrender_lib_core_util_js__rspack_import_0.hasOwn(newParams, name_1) && zrender_lib_core_util_js__rspack_import_0.hasOwn(targetOption, name_1)) {
          newParams[name_1] = targetOption[name_1];
          break;
        }
      }
      return newParams;
    }
  }
  function hasValue(obj, name) {
    return obj[name] != null && obj[name] !== 'auto';
  }
  function copy(names, target, source) {
    each(names, function (name) {
      target[name] = source[name];
    });
  }
}
/**
 * Retrieve 'left', 'right', 'top', 'bottom', 'width', 'height' from object.
 */
function getLayoutParams(source) {
  return copyLayoutParams({}, source);
}
/**
 * Retrieve 'left', 'right', 'top', 'bottom', 'width', 'height' from object.
 * @param {Object} source
 * @return {Object} Result contains those props.
 */
function copyLayoutParams(target, source) {
  source && target && each(LOCATION_PARAMS, function (name) {
    zrender_lib_core_util_js__rspack_import_0.hasOwn(source, name) && (target[name] = source[name]);
  });
  return target;
}
__webpack_require__.d(__webpack_exports__, {
}, {
  BoxLayoutReferenceType: BoxLayoutReferenceType,
  HV_NAMES: HV_NAMES,
  LOCATION_PARAMS: LOCATION_PARAMS,
  applyPreserveAspect: applyPreserveAspect,
  box: box,
  copyLayoutParams: copyLayoutParams,
  createBoxLayoutReference: createBoxLayoutReference,
  fetchLayoutMode: fetchLayoutMode,
  getBoxLayoutParams: getBoxLayoutParams,
  getCircleLayout: getCircleLayout,
  getLayoutParams: getLayoutParams,
  getLayoutRect: getLayoutRect,
  hbox: hbox,
  mergeLayoutParam: mergeLayoutParam,
  positionElement: positionElement,
  sizeCalculable: sizeCalculable,
  vbox: vbox
});


}),
44002: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

var ECHARTS_PREFIX = '[ECharts] ';
var storedLogs = {};
var hasConsole = typeof console !== 'undefined'
// eslint-disable-next-line
&& console.warn && console.log;
function outputLog(type, str, onlyOnce) {
  if (hasConsole) {
    if (onlyOnce) {
      if (storedLogs[str]) {
        return;
      }
      storedLogs[str] = true;
    }
    // eslint-disable-next-line
    console[type](ECHARTS_PREFIX + str);
  }
}
function log(str, onlyOnce) {
  outputLog('log', str, onlyOnce);
}
function warn(str, onlyOnce) {
  outputLog('warn', str, onlyOnce);
}
function error(str, onlyOnce) {
  outputLog('error', str, onlyOnce);
}
function deprecateLog(str) {
  if (false) {}
}
function deprecateReplaceLog(oldOpt, newOpt, scope) {
  if (false) {}
}
/**
 * If in __DEV__ environment, get console printable message for users hint.
 * Parameters are separated by ' '.
 * @usage
 * makePrintable('This is an error on', someVar, someObj);
 *
 * @param hintInfo anything about the current execution context to hint users.
 * @throws Error
 */
function makePrintable() {
  var hintInfo = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    hintInfo[_i] = arguments[_i];
  }
  var msg = '';
  if (false) { var makePrintableStringIfPossible_1 }
  return msg;
}
/**
 * @throws Error
 */
function throwError(msg) {
  throw new Error(msg);
}
__webpack_require__.d(__webpack_exports__, {
}, {
  deprecateLog: deprecateLog,
  deprecateReplaceLog: deprecateReplaceLog,
  error: error,
  log: log,
  makePrintable: makePrintable,
  throwError: throwError,
  warn: warn
});


}),
53781: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var zrender_lib_core_util_js__rspack_import_0 = __webpack_require__(75275);
/* import */ var zrender_lib_core_env_js__rspack_import_2 = __webpack_require__(26444);
/* import */ var _number_js__rspack_import_1 = __webpack_require__(46823);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/




function interpolateNumber(p0, p1, percent) {
  return (p1 - p0) * percent + p0;
}
/**
 * Make the name displayable. But we should
 * make sure it is not duplicated with user
 * specified name, so use '\0';
 */
var DUMMY_COMPONENT_NAME_PREFIX = 'series\0';
var INTERNAL_COMPONENT_ID_PREFIX = '\0_ec_\0';
/**
 * If value is not array, then translate it to array.
 * @param  {*} value
 * @return {Array} [value] or value
 */
function normalizeToArray(value) {
  return value instanceof Array ? value : value == null ? [] : [value];
}
/**
 * Sync default option between normal and emphasis like `position` and `show`
 * In case some one will write code like
 *     label: {
 *          show: false,
 *          position: 'outside',
 *          fontSize: 18
 *     },
 *     emphasis: {
 *          label: { show: true }
 *     }
 */
function defaultEmphasis(opt, key, subOpts) {
  // Caution: performance sensitive.
  if (opt) {
    opt[key] = opt[key] || {};
    opt.emphasis = opt.emphasis || {};
    opt.emphasis[key] = opt.emphasis[key] || {};
    // Default emphasis option from normal
    for (var i = 0, len = subOpts.length; i < len; i++) {
      var subOptName = subOpts[i];
      if (!opt.emphasis[key].hasOwnProperty(subOptName) && opt[key].hasOwnProperty(subOptName)) {
        opt.emphasis[key][subOptName] = opt[key][subOptName];
      }
    }
  }
}
var TEXT_STYLE_OPTIONS = ['fontStyle', 'fontWeight', 'fontSize', 'fontFamily', 'rich', 'tag', 'color', 'textBorderColor', 'textBorderWidth', 'width', 'height', 'lineHeight', 'align', 'verticalAlign', 'baseline', 'shadowColor', 'shadowBlur', 'shadowOffsetX', 'shadowOffsetY', 'textShadowColor', 'textShadowBlur', 'textShadowOffsetX', 'textShadowOffsetY', 'backgroundColor', 'borderColor', 'borderWidth', 'borderRadius', 'padding'];
// modelUtil.LABEL_OPTIONS = modelUtil.TEXT_STYLE_OPTIONS.concat([
//     'position', 'offset', 'rotate', 'origin', 'show', 'distance', 'formatter',
//     'fontStyle', 'fontWeight', 'fontSize', 'fontFamily',
//     // FIXME: deprecated, check and remove it.
//     'textStyle'
// ]);
/**
 * The method does not ensure performance.
 * data could be [12, 2323, {value: 223}, [1221, 23], {value: [2, 23]}]
 * This helper method retrieves value from data.
 */
function getDataItemValue(dataItem) {
  return (0,zrender_lib_core_util_js__rspack_import_0.isObject)(dataItem) && !(0,zrender_lib_core_util_js__rspack_import_0.isArray)(dataItem) && !(dataItem instanceof Date) ? dataItem.value : dataItem;
}
/**
 * data could be [12, 2323, {value: 223}, [1221, 23], {value: [2, 23]}]
 * This helper method determine if dataItem has extra option besides value
 */
function isDataItemOption(dataItem) {
  return (0,zrender_lib_core_util_js__rspack_import_0.isObject)(dataItem) && !(dataItem instanceof Array);
  // // markLine data can be array
  // && !(dataItem[0] && isObject(dataItem[0]) && !(dataItem[0] instanceof Array));
}
;
/**
 * Mapping to existings for merge.
 *
 * Mode "normalMege":
 *     The mapping result (merge result) will keep the order of the existing
 *     component, rather than the order of new option. Because we should ensure
 *     some specified index reference (like xAxisIndex) keep work.
 *     And in most cases, "merge option" is used to update partial option but not
 *     be expected to change the order.
 *
 * Mode "replaceMege":
 *     (1) Only the id mapped components will be merged.
 *     (2) Other existing components (except internal components) will be removed.
 *     (3) Other new options will be used to create new component.
 *     (4) The index of the existing components will not be modified.
 *     That means their might be "hole" after the removal.
 *     The new components are created first at those available index.
 *
 * Mode "replaceAll":
 *     This mode try to support that reproduce an echarts instance from another
 *     echarts instance (via `getOption`) in some simple cases.
 *     In this scenario, the `result` index are exactly the consistent with the `newCmptOptions`,
 *     which ensures the component index referring (like `xAxisIndex: ?`) corrent. That is,
 *     the "hole" in `newCmptOptions` will also be kept.
 *     On the contrary, other modes try best to eliminate holes.
 *     PENDING: This is an experimental mode yet.
 *
 * @return See the comment of <MappingResult>.
 */
function mappingToExists(existings, newCmptOptions, mode) {
  var isNormalMergeMode = mode === 'normalMerge';
  var isReplaceMergeMode = mode === 'replaceMerge';
  var isReplaceAllMode = mode === 'replaceAll';
  existings = existings || [];
  newCmptOptions = (newCmptOptions || []).slice();
  var existingIdIdxMap = (0,zrender_lib_core_util_js__rspack_import_0.createHashMap)();
  // Validate id and name on user input option.
  (0,zrender_lib_core_util_js__rspack_import_0.each)(newCmptOptions, function (cmptOption, index) {
    if (!(0,zrender_lib_core_util_js__rspack_import_0.isObject)(cmptOption)) {
      newCmptOptions[index] = null;
      return;
    }
    if (false) {}
  });
  var result = prepareResult(existings, existingIdIdxMap, mode);
  if (isNormalMergeMode || isReplaceMergeMode) {
    mappingById(result, existings, existingIdIdxMap, newCmptOptions);
  }
  if (isNormalMergeMode) {
    mappingByName(result, newCmptOptions);
  }
  if (isNormalMergeMode || isReplaceMergeMode) {
    mappingByIndex(result, newCmptOptions, isReplaceMergeMode);
  } else if (isReplaceAllMode) {
    mappingInReplaceAllMode(result, newCmptOptions);
  }
  makeIdAndName(result);
  // The array `result` MUST NOT contain elided items, otherwise the
  // forEach will omit those items and result in incorrect result.
  return result;
}
function prepareResult(existings, existingIdIdxMap, mode) {
  var result = [];
  if (mode === 'replaceAll') {
    return result;
  }
  // Do not use native `map` to in case that the array `existings`
  // contains elided items, which will be omitted.
  for (var index = 0; index < existings.length; index++) {
    var existing = existings[index];
    // Because of replaceMerge, `existing` may be null/undefined.
    if (existing && existing.id != null) {
      existingIdIdxMap.set(existing.id, index);
    }
    // For non-internal-componnets:
    //     Mode "normalMerge": all existings kept.
    //     Mode "replaceMerge": all existing removed unless mapped by id.
    // For internal-components:
    //     go with "replaceMerge" approach in both mode.
    result.push({
      existing: mode === 'replaceMerge' || isComponentIdInternal(existing) ? null : existing,
      newOption: null,
      keyInfo: null,
      brandNew: null
    });
  }
  return result;
}
function mappingById(result, existings, existingIdIdxMap, newCmptOptions) {
  // Mapping by id if specified.
  (0,zrender_lib_core_util_js__rspack_import_0.each)(newCmptOptions, function (cmptOption, index) {
    if (!cmptOption || cmptOption.id == null) {
      return;
    }
    var optionId = makeComparableKey(cmptOption.id);
    var existingIdx = existingIdIdxMap.get(optionId);
    if (existingIdx != null) {
      var resultItem = result[existingIdx];
      (0,zrender_lib_core_util_js__rspack_import_0.assert)(!resultItem.newOption, 'Duplicated option on id "' + optionId + '".');
      resultItem.newOption = cmptOption;
      // In both mode, if id matched, new option will be merged to
      // the existings rather than creating new component model.
      resultItem.existing = existings[existingIdx];
      newCmptOptions[index] = null;
    }
  });
}
function mappingByName(result, newCmptOptions) {
  // Mapping by name if specified.
  (0,zrender_lib_core_util_js__rspack_import_0.each)(newCmptOptions, function (cmptOption, index) {
    if (!cmptOption || cmptOption.name == null) {
      return;
    }
    for (var i = 0; i < result.length; i++) {
      var existing = result[i].existing;
      if (!result[i].newOption // Consider name: two map to one.
      // Can not match when both ids existing but different.
      && existing && (existing.id == null || cmptOption.id == null) && !isComponentIdInternal(cmptOption) && !isComponentIdInternal(existing) && keyExistAndEqual('name', existing, cmptOption)) {
        result[i].newOption = cmptOption;
        newCmptOptions[index] = null;
        return;
      }
    }
  });
}
function mappingByIndex(result, newCmptOptions, brandNew) {
  (0,zrender_lib_core_util_js__rspack_import_0.each)(newCmptOptions, function (cmptOption) {
    if (!cmptOption) {
      return;
    }
    // Find the first place that not mapped by id and not internal component (consider the "hole").
    var resultItem;
    var nextIdx = 0;
    while (
    // Be `!resultItem` only when `nextIdx >= result.length`.
    (resultItem = result[nextIdx]
    // (1) Existing models that already have id should be able to mapped to. Because
    // after mapping performed, model will always be assigned with an id if user not given.
    // After that all models have id.
    // (2) If new option has id, it can only set to a hole or append to the last. It should
    // not be merged to the existings with different id. Because id should not be overwritten.
    // (3) Name can be overwritten, because axis use name as 'show label text'.
    ) && (resultItem.newOption || isComponentIdInternal(resultItem.existing) ||
    // In mode "replaceMerge", here no not-mapped-non-internal-existing.
    resultItem.existing && cmptOption.id != null && !keyExistAndEqual('id', cmptOption, resultItem.existing))) {
      nextIdx++;
    }
    if (resultItem) {
      resultItem.newOption = cmptOption;
      resultItem.brandNew = brandNew;
    } else {
      result.push({
        newOption: cmptOption,
        brandNew: brandNew,
        existing: null,
        keyInfo: null
      });
    }
    nextIdx++;
  });
}
function mappingInReplaceAllMode(result, newCmptOptions) {
  (0,zrender_lib_core_util_js__rspack_import_0.each)(newCmptOptions, function (cmptOption) {
    // The feature "reproduce" requires "hole" will also reproduced
    // in case that component index referring are broken.
    result.push({
      newOption: cmptOption,
      brandNew: true,
      existing: null,
      keyInfo: null
    });
  });
}
/**
 * Make id and name for mapping result (result of mappingToExists)
 * into `keyInfo` field.
 */
function makeIdAndName(mapResult) {
  // We use this id to hash component models and view instances
  // in echarts. id can be specified by user, or auto generated.
  // The id generation rule ensures new view instance are able
  // to mapped to old instance when setOption are called in
  // no-merge mode. So we generate model id by name and plus
  // type in view id.
  // name can be duplicated among components, which is convenient
  // to specify multi components (like series) by one name.
  // Ensure that each id is distinct.
  var idMap = (0,zrender_lib_core_util_js__rspack_import_0.createHashMap)();
  (0,zrender_lib_core_util_js__rspack_import_0.each)(mapResult, function (item) {
    var existing = item.existing;
    existing && idMap.set(existing.id, item);
  });
  (0,zrender_lib_core_util_js__rspack_import_0.each)(mapResult, function (item) {
    var opt = item.newOption;
    // Force ensure id not duplicated.
    (0,zrender_lib_core_util_js__rspack_import_0.assert)(!opt || opt.id == null || !idMap.get(opt.id) || idMap.get(opt.id) === item, 'id duplicates: ' + (opt && opt.id));
    opt && opt.id != null && idMap.set(opt.id, item);
    !item.keyInfo && (item.keyInfo = {});
  });
  // Make name and id.
  (0,zrender_lib_core_util_js__rspack_import_0.each)(mapResult, function (item, index) {
    var existing = item.existing;
    var opt = item.newOption;
    var keyInfo = item.keyInfo;
    if (!(0,zrender_lib_core_util_js__rspack_import_0.isObject)(opt)) {
      return;
    }
    // Name can be overwritten. Consider case: axis.name = '20km'.
    // But id generated by name will not be changed, which affect
    // only in that case: setOption with 'not merge mode' and view
    // instance will be recreated, which can be accepted.
    keyInfo.name = opt.name != null ? makeComparableKey(opt.name) : existing ? existing.name
    // Avoid that different series has the same name,
    // because name may be used like in color pallet.
    : DUMMY_COMPONENT_NAME_PREFIX + index;
    if (existing) {
      keyInfo.id = makeComparableKey(existing.id);
    } else if (opt.id != null) {
      keyInfo.id = makeComparableKey(opt.id);
    } else {
      // Consider this situatoin:
      //  optionA: [{name: 'a'}, {name: 'a'}, {..}]
      //  optionB [{..}, {name: 'a'}, {name: 'a'}]
      // Series with the same name between optionA and optionB
      // should be mapped.
      var idNum = 0;
      do {
        keyInfo.id = '\0' + keyInfo.name + '\0' + idNum++;
      } while (idMap.get(keyInfo.id));
    }
    idMap.set(keyInfo.id, item);
  });
}
function keyExistAndEqual(attr, obj1, obj2) {
  var key1 = convertOptionIdName(obj1[attr], null);
  var key2 = convertOptionIdName(obj2[attr], null);
  // See `MappingExistingItem`. `id` and `name` trade string equals to number.
  return key1 != null && key2 != null && key1 === key2;
}
/**
 * @return return null if not exist.
 */
function makeComparableKey(val) {
  if (false) {}
  return convertOptionIdName(val, '');
}
function convertOptionIdName(idOrName, defaultValue) {
  if (idOrName == null) {
    return defaultValue;
  }
  return (0,zrender_lib_core_util_js__rspack_import_0.isString)(idOrName) ? idOrName : (0,zrender_lib_core_util_js__rspack_import_0.isNumber)(idOrName) || (0,zrender_lib_core_util_js__rspack_import_0.isStringSafe)(idOrName) ? idOrName + '' : defaultValue;
}
function warnInvalidateIdOrName(idOrName) {
  if (false) {}
}
function isValidIdOrName(idOrName) {
  return isStringSafe(idOrName) || isNumeric(idOrName);
}
function isNameSpecified(componentModel) {
  var name = componentModel.name;
  // Is specified when `indexOf` get -1 or > 0.
  return !!(name && name.indexOf(DUMMY_COMPONENT_NAME_PREFIX));
}
/**
 * @public
 * @param {Object} cmptOption
 * @return {boolean}
 */
function isComponentIdInternal(cmptOption) {
  return cmptOption && cmptOption.id != null && makeComparableKey(cmptOption.id).indexOf(INTERNAL_COMPONENT_ID_PREFIX) === 0;
}
function makeInternalComponentId(idSuffix) {
  return INTERNAL_COMPONENT_ID_PREFIX + idSuffix;
}
function setComponentTypeToKeyInfo(mappingResult, mainType, componentModelCtor) {
  // Set mainType and complete subType.
  ;(0,zrender_lib_core_util_js__rspack_import_0.each)(mappingResult, function (item) {
    var newOption = item.newOption;
    if ((0,zrender_lib_core_util_js__rspack_import_0.isObject)(newOption)) {
      item.keyInfo.mainType = mainType;
      item.keyInfo.subType = determineSubType(mainType, newOption, item.existing, componentModelCtor);
    }
  });
}
function determineSubType(mainType, newCmptOption, existComponent, componentModelCtor) {
  var subType = newCmptOption.type ? newCmptOption.type : existComponent ? existComponent.subType
  // Use determineSubType only when there is no existComponent.
  : componentModelCtor.determineSubType(mainType, newCmptOption);
  // tooltip, markline, markpoint may always has no subType
  return subType;
}
/**
 * A helper for removing duplicate items between batchA and batchB,
 * and in themselves, and categorize by series.
 *
 * @param batchA Like: [{seriesId: 2, dataIndex: [32, 4, 5]}, ...]
 * @param batchB Like: [{seriesId: 2, dataIndex: [32, 4, 5]}, ...]
 * @return result: [resultBatchA, resultBatchB]
 */
function compressBatches(batchA, batchB) {
  var mapA = {};
  var mapB = {};
  makeMap(batchA || [], mapA);
  makeMap(batchB || [], mapB, mapA);
  return [mapToArray(mapA), mapToArray(mapB)];
  function makeMap(sourceBatch, map, otherMap) {
    for (var i = 0, len = sourceBatch.length; i < len; i++) {
      var seriesId = convertOptionIdName(sourceBatch[i].seriesId, null);
      if (seriesId == null) {
        return;
      }
      var dataIndices = normalizeToArray(sourceBatch[i].dataIndex);
      var otherDataIndices = otherMap && otherMap[seriesId];
      for (var j = 0, lenj = dataIndices.length; j < lenj; j++) {
        var dataIndex = dataIndices[j];
        if (otherDataIndices && otherDataIndices[dataIndex]) {
          otherDataIndices[dataIndex] = null;
        } else {
          (map[seriesId] || (map[seriesId] = {}))[dataIndex] = 1;
        }
      }
    }
  }
  function mapToArray(map, isData) {
    var result = [];
    for (var i in map) {
      if (map.hasOwnProperty(i) && map[i] != null) {
        if (isData) {
          result.push(+i);
        } else {
          var dataIndices = mapToArray(map[i], true);
          dataIndices.length && result.push({
            seriesId: i,
            dataIndex: dataIndices
          });
        }
      }
    }
    return result;
  }
}
/**
 * @param payload Contains dataIndex (means rawIndex) / dataIndexInside / name
 *                         each of which can be Array or primary type.
 * @return dataIndex If not found, return undefined/null.
 */
function queryDataIndex(data, payload) {
  if (payload.dataIndexInside != null) {
    return payload.dataIndexInside;
  } else if (payload.dataIndex != null) {
    return (0,zrender_lib_core_util_js__rspack_import_0.isArray)(payload.dataIndex) ? (0,zrender_lib_core_util_js__rspack_import_0.map)(payload.dataIndex, function (value) {
      return data.indexOfRawIndex(value);
    }) : data.indexOfRawIndex(payload.dataIndex);
  } else if (payload.name != null) {
    return (0,zrender_lib_core_util_js__rspack_import_0.isArray)(payload.name) ? (0,zrender_lib_core_util_js__rspack_import_0.map)(payload.name, function (value) {
      return data.indexOfName(value);
    }) : data.indexOfName(payload.name);
  }
}
/**
 * [CAVEAT]:
 *  DO NOT use it in performance-sensitive scenarios.
 *  Likely a hash map lookup; not inline-cache friendly.
 *
 * Enable property storage to any host object.
 * Notice: Serialization is not supported.
 *
 * For example:
 * let inner = makeInner();
 *
 * function some1(hostObj) {
 *      inner(hostObj).someProperty = 1212;
 *      ...
 * }
 * function some2() {
 *      let fields = inner(this);
 *      fields.someProperty1 = 1212;
 *      fields.someProperty2 = 'xx';
 *      ...
 * }
 */
function makeInner() {
  var key = '__ec_inner_' + innerUniqueIndex++;
  return function (hostObj) {
    return hostObj[key] || (hostObj[key] = {});
  };
}
var innerUniqueIndex = (0,_number_js__rspack_import_1.getRandomIdBase)();
/**
 * The same behavior as `component.getReferringComponents`.
 */
function parseFinder(ecModel, finderInput, opt) {
  var _a = preParseFinder(finderInput, opt),
    mainTypeSpecified = _a.mainTypeSpecified,
    queryOptionMap = _a.queryOptionMap,
    others = _a.others;
  var result = others;
  var defaultMainType = opt ? opt.defaultMainType : null;
  if (!mainTypeSpecified && defaultMainType) {
    queryOptionMap.set(defaultMainType, {});
  }
  queryOptionMap.each(function (queryOption, mainType) {
    var queryResult = queryReferringComponents(ecModel, mainType, queryOption, {
      useDefault: defaultMainType === mainType,
      enableAll: opt && opt.enableAll != null ? opt.enableAll : true,
      enableNone: opt && opt.enableNone != null ? opt.enableNone : true
    });
    result[mainType + 'Models'] = queryResult.models;
    result[mainType + 'Model'] = queryResult.models[0];
  });
  return result;
}
function preParseFinder(finderInput, opt) {
  var finder;
  if ((0,zrender_lib_core_util_js__rspack_import_0.isString)(finderInput)) {
    var obj = {};
    obj[finderInput + 'Index'] = 0;
    finder = obj;
  } else {
    finder = finderInput;
  }
  var queryOptionMap = (0,zrender_lib_core_util_js__rspack_import_0.createHashMap)();
  var others = {};
  var mainTypeSpecified = false;
  (0,zrender_lib_core_util_js__rspack_import_0.each)(finder, function (value, key) {
    // Exclude 'dataIndex' and other illegal keys.
    if (key === 'dataIndex' || key === 'dataIndexInside') {
      others[key] = value;
      return;
    }
    var parsedKey = key.match(/^(\w+)(Index|Id|Name)$/) || [];
    var mainType = parsedKey[1];
    var queryType = (parsedKey[2] || '').toLowerCase();
    if (!mainType || !queryType || opt && opt.includeMainTypes && (0,zrender_lib_core_util_js__rspack_import_0.indexOf)(opt.includeMainTypes, mainType) < 0) {
      return;
    }
    mainTypeSpecified = mainTypeSpecified || !!mainType;
    var queryOption = queryOptionMap.get(mainType) || queryOptionMap.set(mainType, {});
    queryOption[queryType] = value;
  });
  return {
    mainTypeSpecified: mainTypeSpecified,
    queryOptionMap: queryOptionMap,
    others: others
  };
}
var SINGLE_REFERRING = {
  useDefault: true,
  enableAll: false,
  enableNone: false
};
var MULTIPLE_REFERRING = {
  useDefault: false,
  enableAll: true,
  enableNone: true
};
function queryReferringComponents(ecModel, mainType, userOption, opt) {
  opt = opt || SINGLE_REFERRING;
  var indexOption = userOption.index;
  var idOption = userOption.id;
  var nameOption = userOption.name;
  var result = {
    models: null,
    specified: indexOption != null || idOption != null || nameOption != null
  };
  if (!result.specified) {
    // Use the first as default if `useDefault`.
    var firstCmpt = void 0;
    result.models = opt.useDefault && (firstCmpt = ecModel.getComponent(mainType)) ? [firstCmpt] : [];
    return result;
  }
  if (indexOption === 'none' || indexOption === false) {
    if (opt.enableNone) {
      result.models = [];
      return result;
    } else {
      // Do not throw; consider if some component previously does not use this method,
      // and start to use it, need to be fault-tolerant for backward compatibility.
      if (false) {}
      indexOption = -1; // Can not query by index but may still query by id/name if specified.
    }
  }
  // `queryComponents` will return all components if
  // both all of index/id/name are null/undefined.
  if (indexOption === 'all') {
    if (opt.enableAll) {
      indexOption = idOption = nameOption = null;
    } else {
      if (false) {}
      indexOption = -1;
    }
  }
  result.models = ecModel.queryComponents({
    mainType: mainType,
    index: indexOption,
    id: idOption,
    name: nameOption
  });
  return result;
}
/**
 * `{{mainType}Id, {mainType}Index, {mainType}Name}` takes precedence if provided in `payload`;
 * otherwise, query by `mainType`.
 * `subType` performs futher filtering if provided.
 */
function makeQueryConditionKindA(payload,
// `mainType` is mandatory to restrict the range of query,
// since `payload` in an user input.
mainType,
// subType may be '' by `parseClassType`
subType) {
  if (false) {}
  var query = {};
  query[mainType + 'Id'] = payload[mainType + 'Id'];
  query[mainType + 'Index'] = payload[mainType + 'Index'];
  query[mainType + 'Name'] = payload[mainType + 'Name'];
  var condition = {
    mainType: mainType,
    query: query
  };
  subType && (condition.subType = subType); // subType is determined by `hasOwnProperty`.
  return condition;
}
function setAttribute(dom, key, value) {
  dom.setAttribute ? dom.setAttribute(key, value) : dom[key] = value;
}
function getAttribute(dom, key) {
  return dom.getAttribute ? dom.getAttribute(key) : dom[key];
}
function getTooltipRenderMode(renderModeOption) {
  if (renderModeOption === 'auto') {
    // Using html when `document` exists, use richText otherwise
    return zrender_lib_core_env_js__rspack_import_2["default"].domSupported ? 'html' : 'richText';
  } else {
    return renderModeOption || 'html';
  }
}
/**
 * Group a list by key.
 */
function groupData(array, getKey // return key
) {
  var buckets = (0,zrender_lib_core_util_js__rspack_import_0.createHashMap)();
  var keys = [];
  (0,zrender_lib_core_util_js__rspack_import_0.each)(array, function (item) {
    var key = getKey(item);
    (buckets.get(key) || (keys.push(key), buckets.set(key, []))).push(item);
  });
  return {
    keys: keys,
    buckets: buckets
  };
}
/**
 * Interpolate raw values of a series with percent
 *
 * @param data         data
 * @param labelModel   label model of the text element
 * @param sourceValue  start value. May be null/undefined when init.
 * @param targetValue  end value
 * @param percent      0~1 percentage; 0 uses start value while 1 uses end value
 * @return             interpolated values
 *                     If `sourceValue` and `targetValue` are `number`, return `number`.
 *                     If `sourceValue` and `targetValue` are `string`, return `string`.
 *                     If `sourceValue` and `targetValue` are `(string | number)[]`, return `(string | number)[]`.
 *                     Other cases do not supported.
 */
function interpolateRawValues(data, precision, sourceValue, targetValue, percent) {
  var isAutoPrecision = precision == null || precision === 'auto';
  if (targetValue == null) {
    return targetValue;
  }
  if ((0,zrender_lib_core_util_js__rspack_import_0.isNumber)(targetValue)) {
    var value = interpolateNumber(sourceValue || 0, targetValue, percent);
    return (0,_number_js__rspack_import_1.round)(value, isAutoPrecision ? Math.max((0,_number_js__rspack_import_1.getPrecision)(sourceValue || 0), (0,_number_js__rspack_import_1.getPrecision)(targetValue)) : precision);
  } else if ((0,zrender_lib_core_util_js__rspack_import_0.isString)(targetValue)) {
    return percent < 1 ? sourceValue : targetValue;
  } else {
    var interpolated = [];
    var leftArr = sourceValue;
    var rightArr = targetValue;
    var length_1 = Math.max(leftArr ? leftArr.length : 0, rightArr.length);
    for (var i = 0; i < length_1; ++i) {
      var info = data.getDimensionInfo(i);
      // Don't interpolate ordinal dims
      if (info && info.type === 'ordinal') {
        // In init, there is no `sourceValue`, but should better not to get undefined result.
        interpolated[i] = (percent < 1 && leftArr ? leftArr : rightArr)[i];
      } else {
        var leftVal = leftArr && leftArr[i] ? leftArr[i] : 0;
        var rightVal = rightArr[i];
        var value = interpolateNumber(leftVal, rightVal, percent);
        interpolated[i] = (0,_number_js__rspack_import_1.round)(value, isAutoPrecision ? Math.max((0,_number_js__rspack_import_1.getPrecision)(leftVal), (0,_number_js__rspack_import_1.getPrecision)(rightVal)) : precision);
      }
    }
    return interpolated;
  }
}
/**
 * Use an iterator to avoid exposing the internal list or duplicating it
 * for the outside traveller, and no extra heap allocation.
 * @usage
 *  for (const it = resetIterator(); it.next();) {
 *      const item = it.item;
 *      const key = it.key;
 *      const itIdx = it.itIdx;
 *      // ...
 *  }
 * @usage
 *  const it = resetIterator();
 *  while (it.next()) { ... }
 * @usage
 *  for (resetIterator(it); it.next();) { ... }
 */
var ListIterator = /** @class */function () {
  function ListIterator() {}
  /**
   * The loop condition is `idx < end` if `step > 0`;
   * The loop condition is `idx >= end` if `step < 0`.
   *
   * @param end By default `list.length` if `step > 0`; `0` if `step < 0`.
   * @param step By default `1`.
   */
  ListIterator.prototype.reset = function (list, start, end, step) {
    this._list = list;
    this._step = step = step || 1;
    this._idx = start;
    this._end = end != null ? end : step > 0 ? list.length : 0;
    this.item = null;
    this.key = NaN;
    return this;
  };
  ListIterator.prototype.next = function () {
    if (this._step > 0 ? this._idx < this._end : this._idx >= this._end) {
      this.item = this._list[this._idx];
      this.key = this._idx = this._idx + this._step;
      return true;
    }
    return false;
  };
  return ListIterator;
}();

function clearTmpModel(model) {
  // Clear to avoid memory leak.
  model.option = model.parentModel = model.ecModel = null;
}
function initExtentForUnion() {
  return [Infinity, -Infinity];
}
/**
 * NOTICE:
 *  - The input `val` must be a number - type checking is not performed.
 *  - `extent` should be initialized as `initExtentForUnion()`.
 */
function unionExtentFromNumber(extent, val) {
  if (isValidNumberForExtent(val)) {
    val < extent[0] && (extent[0] = val);
    val > extent[1] && (extent[1] = val);
  }
}
/**
 * NOTICE:
 *  - The input `val` must be a number - type checking is not performed.
 *  - `extent` should be initialized as `initExtentForUnion()`.
 */
function unionExtentStartFromNumber(extent, val) {
  if (isValidNumberForExtent(val) && val < extent[0]) {
    extent[0] = val;
  }
}
/**
 * NOTICE:
 *  - The input `val` must be a number - type checking is not performed.
 *  - `extent` should be initialized as `initExtentForUnion()`.
 */
function unionExtentEndFromNumber(extent, val) {
  if (isValidNumberForExtent(val) && val > extent[1]) {
    extent[1] = val;
  }
}
/**
 * NOTICE:
 *  - `extent` should be initialized as `initExtentForUnion()`.
 */
function unionExtentFromExtent(tarExtent, srcExtent) {
  // Accept both or neither.
  if (isValidBoundsForExtent(srcExtent[0], srcExtent[1])) {
    srcExtent[0] < tarExtent[0] && (tarExtent[0] = srcExtent[0]);
    srcExtent[1] > tarExtent[1] && (tarExtent[1] = srcExtent[1]);
  }
}
/**
 * PENDING: `Infinity` from user data is not necessarily meaningless, but visualizing it requires
 * special handling and it will not be supported until required. So we simply ignore it here.
 */
function isValidNumberForExtent(val) {
  // Considered that number could be `NaN` and `Infinity` and should not write into the extent.
  // Note that `Infinity` is the initialized value from `initExtentForUnion` and may be inputted.
  return val != null && isFinite(val);
}
function isValidBoundsForExtent(start, end) {
  return isValidNumberForExtent(start) && isValidNumberForExtent(end) && start <= end;
}
/**
 * `extent` should be initialized by `initExtentForUnion()`, and unioned by `unionExtent()`.
 * `extent` may contain `Infinity` / `NaN`, but assume no `null`/`undefined`.
 */
function extentHasValue(extent) {
  // Also considered extent may have `NaN` and `Infinity`.
  var span = extent[1] - extent[0];
  return isFinite(span) && span >= 0;
}
/**
 * NOTE: considered items are null/undefined/NaN - do nothing for this case.
 */
function ensureExtentAscSimply(extent) {
  if (isValidBoundsForExtent(extent[0], extent[1]) && extent[0] > extent[1]) {
    extent[0] = extent[1];
  }
}
/**
 * A util for ensuring the callback is called only once.
 * @usage
 *  const callOnlyOnce = makeCallOnlyOnce(); // Should be static (ESM top level).
 *  function someFunc(registers: EChartsExtensionInstallRegisters): void {
 *      callOnlyOnce(registers, function () {
 *          // Do something immediately and only once per registers.
 *      }
 *  }
 */
function makeCallOnlyOnce() {
  var hiddenKey = '__ec_once_' + onceUniqueIndex++;
  return function (hostObj, cb) {
    if (false) {}
    if (!(0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(hostObj, hiddenKey)) {
      hostObj[hiddenKey] = 1;
      cb();
    }
  };
}
var onceUniqueIndex = (0,_number_js__rspack_import_1.getRandomIdBase)();
/**
 * @usage
 *  - The earlier item takes precedence for duplicate items.
 *  - The input `arr` will be modified if `resolve` is null/undefined.
 *  - Callers can use `resolve` to manually modify the `currItem`.
 *    The input `arr` will not be modified if `resolve` is passed.
 *    `resolve` will be called on every item.
 *  - Callers need to handle null/undefined (if existing) in `getKey`.
 */
function removeDuplicates(arr, getKey,
// `existingCount`: the count before this item is added.
resolve) {
  var dupMap = (0,zrender_lib_core_util_js__rspack_import_0.createHashMap)();
  var writeIdx = 0;
  (0,zrender_lib_core_util_js__rspack_import_0.each)(arr, function (item) {
    var key = getKey(item);
    if (false) {}
    var count = dupMap.get(key) || 0;
    if (resolve) {
      resolve(item, count);
    }
    if (!count && !resolve) {
      arr[writeIdx++] = item;
    }
    dupMap.set(key, count + 1);
  });
  if (!resolve) {
    arr.length = writeIdx;
  }
}
function removeDuplicatesGetKeyFromValueProp(item) {
  if (false) {}
  return item.value + '';
}
function removeDuplicatesGetKeyFromItemItself(item) {
  if (false) {}
  return item + '';
}
function getIncrementalId(seriesModel, useIncremental) {
  // 0 means disable incremental.
  // 1 is preserved for backward compatibility.
  return (0,zrender_lib_core_util_js__rspack_import_0.retrieve2)(useIncremental, true) ? seriesModel.seriesIndex + 2 : 0;
}
function preparePipelineContext(seriesModel, view, pipeline) {
  var dataLen = seriesModel.getData().count();
  return {
    progressiveRender: pipeline.progressiveEnabled && view.incrementalPrepareRender && dataLen >= pipeline.threshold,
    large: seriesModel.get('large') && dataLen >= seriesModel.get('largeThreshold'),
    // TODO: modDataCount should not updated if `appendData`, otherwise cause whole repaint.
    // see `test/candlestick-large3.html`
    modDataCount: seriesModel.get('progressiveChunkMode') === 'mod' ? seriesModel.getData().count() : null
  };
}
/**
 * When some task "blocks" the upstream part of the pipeline, the upstream output (typically, a TypedArray
 * to carry layout points, e.g., `data.getLayout('points')`) range is from the start to the final end.
 * A downstream comsumer should either properly record cursors when reading from the upstream output,
 * or fail fast on that usage.
 * Otherwise, take the `data.getLayout('points')` as an example, repeatedly merging it with the existing
 * shape path can create a big path, which degrades performance but is hard to detect.
 *
 * This method provides an assertion for that.
 */
function validateUpstreamOutputRange(
// null/undefined is not allowed, otherwise bug-prone.
upstreamOutputRange, thisTaskPlannedRange) {
  ;(0,zrender_lib_core_util_js__rspack_import_0.assert)(upstreamOutputRange.start === thisTaskPlannedRange.start && upstreamOutputRange.end === thisTaskPlannedRange.end);
}
function createSimpleOverallStageHandler(seriesType, overallReset) {
  return {
    seriesType: seriesType,
    overallReset: overallReset
  };
}
function createSimpleOverallStageHandler2(overallReset) {
  return {
    overallReset: overallReset
  };
}
__webpack_require__.d(__webpack_exports__, {
}, {
  ListIterator: ListIterator,
  MULTIPLE_REFERRING: MULTIPLE_REFERRING,
  SINGLE_REFERRING: SINGLE_REFERRING,
  TEXT_STYLE_OPTIONS: TEXT_STYLE_OPTIONS,
  clearTmpModel: clearTmpModel,
  compressBatches: compressBatches,
  convertOptionIdName: convertOptionIdName,
  createSimpleOverallStageHandler: createSimpleOverallStageHandler,
  createSimpleOverallStageHandler2: createSimpleOverallStageHandler2,
  defaultEmphasis: defaultEmphasis,
  ensureExtentAscSimply: ensureExtentAscSimply,
  extentHasValue: extentHasValue,
  getAttribute: getAttribute,
  getDataItemValue: getDataItemValue,
  getIncrementalId: getIncrementalId,
  getTooltipRenderMode: getTooltipRenderMode,
  groupData: groupData,
  initExtentForUnion: initExtentForUnion,
  interpolateRawValues: interpolateRawValues,
  isComponentIdInternal: isComponentIdInternal,
  isDataItemOption: isDataItemOption,
  isNameSpecified: isNameSpecified,
  isValidBoundsForExtent: isValidBoundsForExtent,
  isValidNumberForExtent: isValidNumberForExtent,
  makeCallOnlyOnce: makeCallOnlyOnce,
  makeInner: makeInner,
  makeInternalComponentId: makeInternalComponentId,
  makeQueryConditionKindA: makeQueryConditionKindA,
  mappingToExists: mappingToExists,
  normalizeToArray: normalizeToArray,
  parseFinder: parseFinder,
  preParseFinder: preParseFinder,
  preparePipelineContext: preparePipelineContext,
  queryDataIndex: queryDataIndex,
  queryReferringComponents: queryReferringComponents,
  removeDuplicates: removeDuplicates,
  removeDuplicatesGetKeyFromItemItself: removeDuplicatesGetKeyFromItemItself,
  removeDuplicatesGetKeyFromValueProp: removeDuplicatesGetKeyFromValueProp,
  setAttribute: setAttribute,
  setComponentTypeToKeyInfo: setComponentTypeToKeyInfo,
  unionExtentEndFromNumber: unionExtentEndFromNumber,
  unionExtentFromExtent: unionExtentFromExtent,
  unionExtentFromNumber: unionExtentFromNumber,
  unionExtentStartFromNumber: unionExtentStartFromNumber,
  validateUpstreamOutputRange: validateUpstreamOutputRange
});


}),
46823: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var zrender_lib_core_util_js__rspack_import_0 = __webpack_require__(75275);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/
/*
* A third-party license is embedded for some of the code in this file:
* The method "quantile" was copied from "d3.js".
* (See more details in the comment of the method below.)
* The use of the source code of this file is also subject to the terms
* and consitions of the license of "d3.js" (BSD-3Clause, see
* </licenses/LICENSE-d3>).
*/

var RADIAN_EPSILON = 1e-4;
// A `RangeError` may be thrown if `n` is out of this range when calling `toFixed(n)`.
// Although Chrome and ES2017+ have enlarged this number to 100, but we sill follow
// the ES3~ES6 spec (0 <= n <= 20) for backward and cross-platform compatibility.
var TO_FIXED_SUPPORTED_PRECISION_MAX = 20;
// For rounding error like `2.9999999999999996`, with respect to IEEE754 64bit float.
// NOTICE: It only works when the expected result is a rational number with low
// precision. See method `round` for details.
var DEFAULT_PRECISION_FOR_ROUNDING_ERROR = 14;
function _trim(str) {
  return str.replace(/^\s+|\s+$/g, '');
}
var mathMin = Math.min;
var mathMax = Math.max;
var mathAbs = Math.abs;
var mathRound = Math.round;
var mathFloor = Math.floor;
var mathCeil = Math.ceil;
var mathPow = Math.pow;
var mathLog = Math.log;
var mathLN10 = Math.LN10;
var mathPI = Math.PI;
var mathRandom = Math.random;
/**
 * Linear mapping a value from domain to range
 * @param  val
 * @param  domain Domain extent domain[0] can be bigger than domain[1]
 * @param  range  Range extent range[0] can be bigger than range[1]
 * @param  clamp Default to be false
 */
function linearMap(val, domain, range, clamp) {
  var d0 = domain[0];
  var d1 = domain[1];
  var r0 = range[0];
  var r1 = range[1];
  var subDomain = d1 - d0;
  var subRange = r1 - r0;
  if (subDomain === 0) {
    return subRange === 0 ? r0 : (r0 + r1) / 2;
  }
  // Avoid accuracy problem in edge, such as
  // 146.39 - 62.83 === 83.55999999999999.
  // See echarts/test/ut/spec/util/number.js#linearMap#accuracyError
  // It is a little verbose for efficiency considering this method
  // is a hotspot.
  if (clamp) {
    if (subDomain > 0) {
      if (val <= d0) {
        return r0;
      } else if (val >= d1) {
        return r1;
      }
    } else {
      if (val >= d0) {
        return r0;
      } else if (val <= d1) {
        return r1;
      }
    }
  } else {
    if (val === d0) {
      return r0;
    }
    if (val === d1) {
      return r1;
    }
  }
  return (val - d0) / subDomain * subRange + r0;
}
/**
 * Preserve the name `parsePercent` for backward compatibility,
 * and it's effectively published as `echarts.number.parsePercent`.
 */
var parsePercent = parsePositionOption;
/**
 * @see {parsePositionSizeOption} and also accept a string preset.
 * @see {PositionSizeOption}
 */
function parsePositionOption(option, percentBase, percentOffset) {
  switch (option) {
    case 'center':
    case 'middle':
      option = '50%';
      break;
    case 'left':
    case 'top':
      option = '0%';
      break;
    case 'right':
    case 'bottom':
      option = '100%';
      break;
  }
  return parsePositionSizeOption(option, percentBase, percentOffset);
}
/**
 * Accept number, or numeric string (`'123'`), or percentage ('100%'), as x/y/width/height pixel number.
 * If null/undefined or invalid, return NaN.
 * (But allow JS type coercion (`+option`) due to backward compatibility)
 * @see {PositionSizeOption}
 */
function parsePositionSizeOption(option, percentBase,
// Typical usage of `percentOffset`: percent value is based on an specific rect rather than canvas viewport:
//  `parsePercent(percentOrAbsoluteLeft, rect.width, rect.x)`
percentOffset) {
  if (zrender_lib_core_util_js__rspack_import_0.isString(option)) {
    if (isOptionStringPercent(option)) {
      return parseFloat(option) / 100 * percentBase + (percentOffset || 0);
    }
    return parseFloat(option);
  }
  // Allow flexible input due to backward compatibility.
  return option == null ? NaN : +option;
}
/**
 * Perserve the same rule with `parsePositionSizeOption`.
 */
function isPositionSizeOptionPercent(option) {
  return zrender_lib_core_util_js__rspack_import_0.isString(option) && isOptionStringPercent(option);
}
function isOptionStringPercent(option) {
  return !!_trim(option).match(/%$/);
}
function round(x, precision, returnStr) {
  if (false) {}
  if (isNaN(precision)) {
    // precision utils (such as getAcceptableTickPrecision) may return NaN.
    return returnStr ? '' + x : +x;
  }
  // Avoid range error
  precision = mathMin(mathMax(0, precision), TO_FIXED_SUPPORTED_PRECISION_MAX);
  // PENDING: 1.005.toFixed(2) is '1.00' rather than '1.01'
  x = (+x).toFixed(precision);
  return returnStr ? x : +x;
}
function roundLegacy(x, precision, returnStr) {
  if (precision == null) {
    precision = 10;
  }
  return round(x, precision, returnStr);
}
/**
 * Inplacd asc sort arr.
 * The input arr will be modified.
 */
function asc(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  return arr;
}
/**
 * Get precision.
 * e.g. `getPrecisionSafe(100.123)` return `3`.
 * e.g. `getPrecisionSafe(100)` return `0`.
 */
function getPrecision(val) {
  val = +val;
  if (isNaN(val)) {
    return 0;
  }
  // It is much faster than methods converting number to string as follows
  //      let tmp = val.toString();
  //      return tmp.length - 1 - tmp.indexOf('.');
  // especially when precision is low
  // Notice:
  // (1) If the loop count is over about 20, it is slower than `getPrecisionSafe`.
  //     (see https://jsbench.me/2vkpcekkvw/1)
  // (2) If the val is less than for example 1e-15, the result may be incorrect.
  //     (see test/ut/spec/util/number.test.ts `getPrecision_equal_random`)
  if (val > 1e-14) {
    var e = 1;
    for (var i = 0; i < 15; i++, e *= 10) {
      if (mathRound(val * e) / e === val) {
        return i;
      }
    }
  }
  return getPrecisionSafe(val);
}
/**
 * Get precision with slow but safe method
 * e.g. `getPrecisionSafe(100.123)` return `3`.
 * e.g. `getPrecisionSafe(100)` return `0`.
 */
function getPrecisionSafe(val) {
  // toLowerCase for: '3.4E-12'
  var str = val.toString().toLowerCase();
  // Consider scientific notation: '3.4e-12' '3.4e+12'
  var eIndex = str.indexOf('e');
  var exp = eIndex > 0 ? +str.slice(eIndex + 1) : 0;
  var significandPartLen = eIndex > 0 ? eIndex : str.length;
  var dotIndex = str.indexOf('.');
  var decimalPartLen = dotIndex < 0 ? 0 : significandPartLen - 1 - dotIndex;
  return mathMax(0, decimalPartLen - exp);
}
/**
 * @deprecated Use `getAcceptableTickPrecision` instead. See bad case in `test/ut/spec/util/number.test.ts`
 * NOTE: originally introduced in commit `ff93e3e7f9ff24902e10d4469fd3187393b05feb`
 *
 * Minimal discernible data precision according to a single pixel.
 */
function getPixelPrecision(dataExtent, pixelExtent) {
  var dataQuantity = mathFloor(mathLog(dataExtent[1] - dataExtent[0]) / mathLN10);
  var sizeQuantity = mathRound(mathLog(mathAbs(pixelExtent[1] - pixelExtent[0])) / mathLN10);
  // toFixed() digits argument must be between 0 and 20.
  var precision = mathMin(mathMax(-dataQuantity + sizeQuantity, 0), TO_FIXED_SUPPORTED_PRECISION_MAX);
  return !isFinite(precision) ? TO_FIXED_SUPPORTED_PRECISION_MAX : precision;
}
/**
 * This method chooses a reasonable "data" precision that can be used in `round` method.
 * A reasonable precision is suitable for display; it may cause cumulative error but acceptable.
 *
 * "data" is linearly mapped to pixel according to the ratio determined by `dataSpan` and `pxSpan`.
 * The diff from the original "data" to the rounded "data" (with the result precision) should be
 * equal or less than `pxDiffAcceptable`, which is typically `1` pixel.
 * And the result precision should be as small as possible for a concise display.
 *
 * [NOTICE]: using arbitrary parameters is NOT preferable - a discernible misalign (e.g., over 1px)
 *  may occur, especially when `splitLine` is displayed.
 *
 * PENDING: Only the linear case is addressed for now; other mapping methods (like logarithm) will
 *  not be covered until necessary.
 */
function getAcceptableTickPrecision(dataExtent,
// Typically, `Math.abs(pixelExtent[1] - pixelExtent[0])`.
pxSpan,
// By default, `1`.
pxDiffAcceptable
// Return a precision >= 0
// This precision can be used in method `round`.
// Return `NaN` for edge case or illegal inputs. Callers need to handle that.
) {
  var dataSpan = mathAbs(dataExtent[1] - dataExtent[0]);
  if (!isFinite(dataSpan) || dataSpan === 0) {
    return NaN;
  }
  // Formula for choosing an acceptable precision:
  //  Let `pxDiff = abs(dataSpan - round(dataSpan, precision))`.
  //  We require `pxDiff <= dataSpan * pxDiffAcceptable / pxSpan`.
  //  Consider the nature of "round", the max `pxDiff` is: `pow(10, -precision) / 2`,
  //  Hence: `pow(10, -precision) / 2 <= dataSpan * pxDiffAcceptable / pxSpan`
  //  Hence: `precision >= -log10(2 * dataSpan * pxDiffAcceptable / pxSpan)`
  var dataExp2 = mathLog(2 * mathAbs(pxDiffAcceptable || 1) * mathAbs(dataSpan)) / mathLN10;
  var pxExp = mathLog(mathAbs(pxSpan)) / mathLN10;
  // PENDING: Rounding error generally does not matter; do not fix it before `Math.ceil`
  // until bad case occur.
  var precision = mathMax(0, mathCeil(-dataExp2 + pxExp));
  if (!isFinite(precision)) {
    // If dataSpan is near `0`, the result should not be too big or even `Infinity`.
    precision = NaN;
  }
  return precision;
}
/**
 * Get a data of given precision, assuring the sum of percentages
 * in valueList is 1.
 * The largest remainder method is used.
 * https://en.wikipedia.org/wiki/Largest_remainder_method
 *
 * @param valueList a list of all data
 * @param idx index of the data to be processed in valueList
 * @param precision integer number showing digits of precision
 * @return percent ranging from 0 to 100
 */
function getPercentWithPrecision(valueList, idx, precision) {
  if (!valueList[idx]) {
    return 0;
  }
  var seats = getPercentSeats(valueList, precision);
  return seats[idx] || 0;
}
/**
 * Get a data of given precision, assuring the sum of percentages
 * in valueList is 1.
 * The largest remainder method is used.
 * https://en.wikipedia.org/wiki/Largest_remainder_method
 *
 * @param valueList a list of all data
 * @param precision integer number showing digits of precision
 * @return {Array<number>}
 */
function getPercentSeats(valueList, precision) {
  var sum = zrender_lib_core_util_js__rspack_import_0.reduce(valueList, function (acc, val) {
    return acc + (isNaN(val) ? 0 : val);
  }, 0);
  if (sum === 0) {
    return [];
  }
  var digits = mathPow(10, precision);
  var votesPerQuota = zrender_lib_core_util_js__rspack_import_0.map(valueList, function (val) {
    return (isNaN(val) ? 0 : val) / sum * digits * 100;
  });
  var targetSeats = digits * 100;
  var seats = zrender_lib_core_util_js__rspack_import_0.map(votesPerQuota, function (votes) {
    // Assign automatic seats.
    return mathFloor(votes);
  });
  var currentSum = zrender_lib_core_util_js__rspack_import_0.reduce(seats, function (acc, val) {
    return acc + val;
  }, 0);
  var remainder = zrender_lib_core_util_js__rspack_import_0.map(votesPerQuota, function (votes, idx) {
    return votes - seats[idx];
  });
  // Has remainding votes.
  while (currentSum < targetSeats) {
    // Find next largest remainder.
    var max = Number.NEGATIVE_INFINITY;
    var maxId = null;
    for (var i = 0, len = remainder.length; i < len; ++i) {
      if (remainder[i] > max) {
        max = remainder[i];
        maxId = i;
      }
    }
    // Add a vote to max remainder.
    ++seats[maxId];
    remainder[maxId] = 0;
    ++currentSum;
  }
  return zrender_lib_core_util_js__rspack_import_0.map(seats, function (seat) {
    return seat / digits;
  });
}
/**
 * Solve the floating point adding problem like 0.1 + 0.2 === 0.30000000000000004
 * See <http://0.30000000000000004.com/>
 */
function addSafe(val0, val1) {
  var maxPrecision = mathMax(getPrecision(val0), getPrecision(val1));
  // const multiplier = Math.pow(10, maxPrecision);
  // return (mathRound(val0 * multiplier) + mathRound(val1 * multiplier)) / multiplier;
  var sum = val0 + val1;
  // // PENDING: support more?
  return maxPrecision > TO_FIXED_SUPPORTED_PRECISION_MAX ? sum : round(sum, maxPrecision);
}
// Number.MAX_SAFE_INTEGER, ie do not support.
var MAX_SAFE_INTEGER = mathPow(2, 53) - 1;
/**
 * To 0 - 2 * PI, considering negative radian.
 */
function remRadian(radian) {
  var pi2 = mathPI * 2;
  return (radian % pi2 + pi2) % pi2;
}
/**
 * @param {type} radian
 * @return {boolean}
 */
function isRadianAroundZero(val) {
  return val > -RADIAN_EPSILON && val < RADIAN_EPSILON;
}
// eslint-disable-next-line
var TIME_REG = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d{1,2})(?::(\d{1,2})(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/; // jshint ignore:line
/**
 * @param value valid type: number | string | Date, otherwise return `new Date(NaN)`
 *   These values can be accepted:
 *   + An instance of Date, represent a time in its own time zone.
 *   + Or string in a subset of ISO 8601, only including:
 *     + only year, month, date: '2012-03', '2012-03-01', '2012-03-01 05', '2012-03-01 05:06',
 *     + separated with T or space: '2012-03-01T12:22:33.123', '2012-03-01 12:22:33.123',
 *     + time zone: '2012-03-01T12:22:33Z', '2012-03-01T12:22:33+8000', '2012-03-01T12:22:33-05:00',
 *     all of which will be treated as local time if time zone is not specified
 *     (see <https://momentjs.com/>).
 *   + Or other string format, including (all of which will be treated as local time):
 *     '2012', '2012-3-1', '2012/3/1', '2012/03/01',
 *     '2009/6/12 2:00', '2009/6/12 2:05:08', '2009/6/12 2:05:08.123'
 *   + a timestamp, which represent a time in UTC.
 * @return date Never be null/undefined. If invalid, return `new Date(NaN)`.
 */
function parseDate(value) {
  if (value instanceof Date) {
    return value;
  } else if (zrender_lib_core_util_js__rspack_import_0.isString(value)) {
    // Different browsers parse date in different way, so we parse it manually.
    // Some other issues:
    // new Date('1970-01-01') is UTC,
    // new Date('1970/01/01') and new Date('1970-1-01') is local.
    // See issue #3623
    var match = TIME_REG.exec(value);
    if (!match) {
      // return Invalid Date.
      return new Date(NaN);
    }
    // Use local time when no timezone offset is specified.
    if (!match[8]) {
      // match[n] can only be string or undefined.
      // But take care of '12' + 1 => '121'.
      return new Date(+match[1], +(match[2] || 1) - 1, +match[3] || 1, +match[4] || 0, +(match[5] || 0), +match[6] || 0, match[7] ? +match[7].substring(0, 3) : 0);
    }
    // Timezoneoffset of Javascript Date has considered DST (Daylight Saving Time,
    // https://tc39.github.io/ecma262/#sec-daylight-saving-time-adjustment).
    // For example, system timezone is set as "Time Zone: America/Toronto",
    // then these code will get different result:
    // `new Date(1478411999999).getTimezoneOffset();  // get 240`
    // `new Date(1478412000000).getTimezoneOffset();  // get 300`
    // So we should not use `new Date`, but use `Date.UTC`.
    else {
      var hour = +match[4] || 0;
      if (match[8].toUpperCase() !== 'Z') {
        hour -= +match[8].slice(0, 3);
      }
      return new Date(Date.UTC(+match[1], +(match[2] || 1) - 1, +match[3] || 1, hour, +(match[5] || 0), +match[6] || 0, match[7] ? +match[7].substring(0, 3) : 0));
    }
  } else if (value == null) {
    return new Date(NaN);
  }
  return new Date(mathRound(value));
}
/**
 * Quantity of a number. e.g. 0.1, 1, 10, 100
 *
 * @param val
 * @return
 */
function quantity(val) {
  return mathPow(10, quantityExponent(val));
}
/**
 * Exponent of the quantity of a number
 * e.g., 9876 equals to 9.876*10^3, so quantityExponent(9876) is 3
 * e.g., 0.09876 equals to 9.876*10^-2, so quantityExponent(0.09876) is -2
 *
 * @param val non-negative value
 * @return
 */
function quantityExponent(val) {
  if (val === 0) {
    // PENDING: like IEEE754 use exponent `0` in this case.
    // but methematically, exponent of zero is `-Infinity`.
    return 0;
  }
  var exp = mathFloor(mathLog(val) / mathLN10);
  /**
   * exp is expected to be the rounded-down result of the base-10 log of val.
   * But due to the precision loss with Math.log(val), we need to restore it
   * using 10^exp to make sure we can get val back from exp. #11249
   */
  if (val / mathPow(10, exp) >= 10) {
    exp++;
  }
  return exp;
}
var NICE_MODE_ROUND = 1;
var NICE_MODE_MIN = 2;
/**
 * find a “nice” number approximately equal to x. Round the number if 'round',
 * take ceiling if 'round'. The primary observation is that the “nicest”
 * numbers in decimal are 1, 2, and 5, and all power-of-ten multiples of these numbers.
 *
 * See "Nice Numbers for Graph Labels" of Graphic Gems.
 *
 * @param  val Non-negative value.
 * @return Niced number
 */
function nice(val,
// All non-`NICE_MODE_MIN`-truthy values means `NICE_MODE_ROUND`, for backward compatibility.
mode) {
  // Consider the scientific notation of `val`:
  //  - `exponent` is its exponent.
  //  - `f` is its coefficient. `1 <= f < 10`.
  //  e.g., if `val` is `0.0054321`, `exponent` is `-3`, `f` is `5.4321`,
  //      The result is `0.005` on NICE_MODE_ROUND.
  //  e.g., if `val` is `987.12345`, `exponent` is `2`, `f` is `9.8712345`,
  //      The result is `1000` on NICE_MODE_ROUND.
  //  e.g., if `val` is `0`,
  //      The result is `1`.
  var exponent = quantityExponent(val);
  // No rounding error in Math.pow(10, integer).
  var exp10 = mathPow(10, exponent);
  var f = val / exp10;
  var nf;
  if (mode === NICE_MODE_MIN) {
    nf = 1;
  } else if (mode) {
    if (f < 1.5) {
      nf = 1;
    } else if (f < 2.5) {
      nf = 2;
    } else if (f < 4) {
      nf = 3;
    } else if (f < 7) {
      nf = 5;
    } else {
      nf = 10;
    }
  } else {
    if (f < 1) {
      nf = 1;
    } else if (f < 2) {
      nf = 2;
    } else if (f < 3) {
      nf = 3;
    } else if (f < 5) {
      nf = 5;
    } else {
      nf = 10;
    }
  }
  val = nf * exp10;
  // Fix IEEE 754 float rounding error
  return round(val, -exponent);
}
/**
 * This code was copied from "d3.js"
 * <https://github.com/d3/d3/blob/9cc9a875e636a1dcf36cc1e07bdf77e1ad6e2c74/src/arrays/quantile.js>.
 * See the license statement at the head of this file.
 * @param ascArr
 */
function quantile(ascArr, p) {
  var H = (ascArr.length - 1) * p + 1;
  var h = mathFloor(H);
  var v = +ascArr[h - 1];
  var e = H - h;
  return e ? v + e * (ascArr[h] - v) : v;
}
/**
 * Order intervals asc, and split them when overlap.
 * expect(numberUtil.reformIntervals([
 *     {interval: [18, 62], close: [1, 1]},
 *     {interval: [-Infinity, -70], close: [0, 0]},
 *     {interval: [-70, -26], close: [1, 1]},
 *     {interval: [-26, 18], close: [1, 1]},
 *     {interval: [62, 150], close: [1, 1]},
 *     {interval: [106, 150], close: [1, 1]},
 *     {interval: [150, Infinity], close: [0, 0]}
 * ])).toEqual([
 *     {interval: [-Infinity, -70], close: [0, 0]},
 *     {interval: [-70, -26], close: [1, 1]},
 *     {interval: [-26, 18], close: [0, 1]},
 *     {interval: [18, 62], close: [0, 1]},
 *     {interval: [62, 150], close: [0, 1]},
 *     {interval: [150, Infinity], close: [0, 0]}
 * ]);
 * @param list, where `close` mean open or close
 *        of the interval, and Infinity can be used.
 * @return The origin list, which has been reformed.
 */
function reformIntervals(list) {
  list.sort(function (a, b) {
    return littleThan(a, b, 0) ? -1 : 1;
  });
  var curr = -Infinity;
  var currClose = 1;
  for (var i = 0; i < list.length;) {
    var interval = list[i].interval;
    var close_1 = list[i].close;
    for (var lg = 0; lg < 2; lg++) {
      if (interval[lg] <= curr) {
        interval[lg] = curr;
        close_1[lg] = !lg ? 1 - currClose : 1;
      }
      curr = interval[lg];
      currClose = close_1[lg];
    }
    if (interval[0] === interval[1] && close_1[0] * close_1[1] !== 1) {
      list.splice(i, 1);
    } else {
      i++;
    }
  }
  return list;
  function littleThan(a, b, lg) {
    return a.interval[lg] < b.interval[lg] || a.interval[lg] === b.interval[lg] && (a.close[lg] - b.close[lg] === (!lg ? 1 : -1) || !lg && littleThan(a, b, 1));
  }
}
/**
 * [Numeric is defined as]:
 *     `parseFloat(val) == val`
 * For example:
 * numeric:
 *     typeof number except NaN, '-123', '123', '2e3', '-2e3', '011', 'Infinity', Infinity,
 *     and they rounded by white-spaces or line-terminal like ' -123 \n ' (see es spec)
 * not-numeric:
 *     null, undefined, [], {}, true, false, 'NaN', NaN, '123ab',
 *     empty string, string with only white-spaces or line-terminal (see es spec),
 *     0x12, '0x12', '-0x12', 012, '012', '-012',
 *     non-string, ...
 *
 * @test See full test cases in `test/ut/spec/util/number.js`.
 * @return Must be a typeof number. If not numeric, return NaN.
 */
function numericToNumber(val) {
  var valFloat = parseFloat(val);
  return valFloat == val // eslint-disable-line eqeqeq
  && (valFloat !== 0 || !zrender_lib_core_util_js__rspack_import_0.isString(val) || val.indexOf('x') <= 0) // For case ' 0x0 '.
  ? valFloat : NaN;
}
/**
 * Definition of "numeric": see `numericToNumber`.
 */
function isNumeric(val) {
  return !isNaN(numericToNumber(val));
}
/**
 * Use random base to prevent users hard code depending on
 * this auto generated marker id.
 * @return An positive integer.
 */
function getRandomIdBase() {
  return mathRound(mathRandom() * 9);
}
/**
 * Get the greatest common divisor.
 *
 * @param {number} a one number
 * @param {number} b the other number
 */
function getGreatestCommonDividor(a, b) {
  if (b === 0) {
    return a;
  }
  return getGreatestCommonDividor(b, a % b);
}
/**
 * Get the least common multiple.
 *
 * @param {number} a one number
 * @param {number} b the other number
 */
function getLeastCommonMultiple(a, b) {
  if (a == null) {
    return b;
  }
  if (b == null) {
    return a;
  }
  return a * b / getGreatestCommonDividor(a, b);
}
/**
 * NOTICE: Assume the input `val` is number or null/undefined, no type check, no support of BitInt.
 * Therefore, it is NOT suitable for processing user input, but sufficient for
 * internal usage in most cases.
 * For platform-agnosticism, `Number.isFinite` is not used.
 */
function isNullableNumberFinite(val) {
  return val != null && isFinite(val);
}
__webpack_require__.d(__webpack_exports__, {
}, {
  DEFAULT_PRECISION_FOR_ROUNDING_ERROR: DEFAULT_PRECISION_FOR_ROUNDING_ERROR,
  MAX_SAFE_INTEGER: MAX_SAFE_INTEGER,
  NICE_MODE_MIN: NICE_MODE_MIN,
  NICE_MODE_ROUND: NICE_MODE_ROUND,
  addSafe: addSafe,
  asc: asc,
  getAcceptableTickPrecision: getAcceptableTickPrecision,
  getGreatestCommonDividor: getGreatestCommonDividor,
  getLeastCommonMultiple: getLeastCommonMultiple,
  getPercentSeats: getPercentSeats,
  getPercentWithPrecision: getPercentWithPrecision,
  getPixelPrecision: getPixelPrecision,
  getPrecision: getPrecision,
  getPrecisionSafe: getPrecisionSafe,
  getRandomIdBase: getRandomIdBase,
  isNullableNumberFinite: isNullableNumberFinite,
  isNumeric: isNumeric,
  isPositionSizeOptionPercent: isPositionSizeOptionPercent,
  isRadianAroundZero: isRadianAroundZero,
  linearMap: linearMap,
  mathAbs: mathAbs,
  mathCeil: mathCeil,
  mathFloor: mathFloor,
  mathLN10: mathLN10,
  mathLog: mathLog,
  mathMax: mathMax,
  mathMin: mathMin,
  mathPI: mathPI,
  mathPow: mathPow,
  mathRandom: mathRandom,
  mathRound: mathRound,
  nice: nice,
  numericToNumber: numericToNumber,
  parseDate: parseDate,
  parsePercent: parsePercent,
  parsePositionOption: parsePositionOption,
  parsePositionSizeOption: parsePositionSizeOption,
  quantile: quantile,
  quantity: quantity,
  quantityExponent: quantityExponent,
  reformIntervals: reformIntervals,
  remRadian: remRadian,
  round: round,
  roundLegacy: roundLegacy
});


}),
87253: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var tslib__rspack_import_1 = __webpack_require__(2492);
/* import */ var _graphic_js__rspack_import_0 = __webpack_require__(72043);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * Sausage: similar to sector, but have half circle on both sides
 */
var SausageShape = /** @class */function () {
  function SausageShape() {
    this.cx = 0;
    this.cy = 0;
    this.r0 = 0;
    this.r = 0;
    this.startAngle = 0;
    this.endAngle = Math.PI * 2;
    this.clockwise = true;
  }
  return SausageShape;
}();
var SausagePath = /** @class */function (_super) {
  (0,tslib__rspack_import_1.__extends)(SausagePath, _super);
  function SausagePath(opts) {
    var _this = _super.call(this, opts) || this;
    _this.type = 'sausage';
    return _this;
  }
  SausagePath.prototype.getDefaultShape = function () {
    return new SausageShape();
  };
  SausagePath.prototype.buildPath = function (ctx, shape) {
    var cx = shape.cx;
    var cy = shape.cy;
    var r0 = Math.max(shape.r0 || 0, 0);
    var r = Math.max(shape.r, 0);
    var dr = (r - r0) * 0.5;
    var rCenter = r0 + dr;
    var startAngle = shape.startAngle;
    var endAngle = shape.endAngle;
    var clockwise = shape.clockwise;
    var PI2 = Math.PI * 2;
    var lessThanCircle = clockwise ? endAngle - startAngle < PI2 : startAngle - endAngle < PI2;
    if (!lessThanCircle) {
      // Normalize angles
      startAngle = endAngle - (clockwise ? PI2 : -PI2);
    }
    var unitStartX = Math.cos(startAngle);
    var unitStartY = Math.sin(startAngle);
    var unitEndX = Math.cos(endAngle);
    var unitEndY = Math.sin(endAngle);
    if (lessThanCircle) {
      ctx.moveTo(unitStartX * r0 + cx, unitStartY * r0 + cy);
      ctx.arc(unitStartX * rCenter + cx, unitStartY * rCenter + cy, dr, -Math.PI + startAngle, startAngle, !clockwise);
    } else {
      ctx.moveTo(unitStartX * r + cx, unitStartY * r + cy);
    }
    ctx.arc(cx, cy, r, startAngle, endAngle, !clockwise);
    ctx.arc(unitEndX * rCenter + cx, unitEndY * rCenter + cy, dr, endAngle - Math.PI * 2, endAngle - Math.PI, !clockwise);
    if (r0 !== 0) {
      ctx.arc(cx, cy, r0, endAngle, startAngle, clockwise);
    }
    // ctx.closePath();
  };
  return SausagePath;
}(_graphic_js__rspack_import_0["default"]);
/* export default */ __webpack_exports__["default"] = (SausagePath);

}),
71900: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var zrender_lib_core_util_js__rspack_import_1 = __webpack_require__(75275);
/* import */ var _innerStore_js__rspack_import_5 = __webpack_require__(63655);
/* import */ var zrender_lib_tool_color_js__rspack_import_3 = __webpack_require__(47881);
/* import */ var _model_js__rspack_import_0 = __webpack_require__(53781);
/* import */ var zrender_lib_graphic_Path_js__rspack_import_2 = __webpack_require__(72043);
/* import */ var _core_ExtensionAPI_js__rspack_import_4 = __webpack_require__(50680);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/







// Reserve 0 as default.
var _highlightNextDigit = 1;
var _highlightKeyMap = {};
var getSavedStates = (0,_model_js__rspack_import_0.makeInner)();
var getComponentStates = (0,_model_js__rspack_import_0.makeInner)();
var HOVER_STATE_NORMAL = 0;
var HOVER_STATE_BLUR = 1;
var HOVER_STATE_EMPHASIS = 2;
var SPECIAL_STATES = ['emphasis', 'blur', 'select'];
var DISPLAY_STATES = ['normal', 'emphasis', 'blur', 'select'];
var Z2_EMPHASIS_LIFT = 10;
var Z2_SELECT_LIFT = 9;
var HIGHLIGHT_ACTION_TYPE = 'highlight';
var DOWNPLAY_ACTION_TYPE = 'downplay';
var SELECT_ACTION_TYPE = 'select';
var UNSELECT_ACTION_TYPE = 'unselect';
var TOGGLE_SELECT_ACTION_TYPE = 'toggleSelect';
var SELECT_CHANGED_EVENT_TYPE = 'selectchanged';
function hasFillOrStroke(fillOrStroke) {
  return fillOrStroke != null && fillOrStroke !== 'none';
}
function doChangeHoverState(el, stateName, hoverStateEnum) {
  if (el.onHoverStateChange && (el.hoverState || 0) !== hoverStateEnum) {
    el.onHoverStateChange(stateName);
  }
  el.hoverState = hoverStateEnum;
}
function singleEnterEmphasis(el) {
  // Only mark the flag.
  // States will be applied in the echarts.ts in next frame.
  doChangeHoverState(el, 'emphasis', HOVER_STATE_EMPHASIS);
}
function singleLeaveEmphasis(el) {
  // Only mark the flag.
  // States will be applied in the echarts.ts in next frame.
  if (el.hoverState === HOVER_STATE_EMPHASIS) {
    doChangeHoverState(el, 'normal', HOVER_STATE_NORMAL);
  }
}
function singleEnterBlur(el) {
  doChangeHoverState(el, 'blur', HOVER_STATE_BLUR);
}
function singleLeaveBlur(el) {
  if (el.hoverState === HOVER_STATE_BLUR) {
    doChangeHoverState(el, 'normal', HOVER_STATE_NORMAL);
  }
}
function singleEnterSelect(el) {
  el.selected = true;
}
function singleLeaveSelect(el) {
  el.selected = false;
}
function updateElementState(el, updater, commonParam) {
  updater(el, commonParam);
}
function traverseUpdateState(el, updater, commonParam) {
  updateElementState(el, updater, commonParam);
  el.isGroup && el.traverse(function (child) {
    updateElementState(child, updater, commonParam);
  });
}
function setStatesFlag(el, stateName) {
  switch (stateName) {
    case 'emphasis':
      el.hoverState = HOVER_STATE_EMPHASIS;
      break;
    case 'normal':
      el.hoverState = HOVER_STATE_NORMAL;
      break;
    case 'blur':
      el.hoverState = HOVER_STATE_BLUR;
      break;
    case 'select':
      el.selected = true;
  }
}
/**
 * If we reuse elements when rerender.
 * DON'T forget to clearStates before we update the style and shape.
 * Or we may update on the wrong state instead of normal state.
 */
function clearStates(el) {
  if (el.isGroup) {
    el.traverse(function (child) {
      child.clearStates();
    });
  } else {
    el.clearStates();
  }
}
function getFromStateStyle(el, props, toStateName, defaultValue) {
  var style = el.style;
  var fromState = {};
  for (var i = 0; i < props.length; i++) {
    var propName = props[i];
    var val = style[propName];
    fromState[propName] = val == null ? defaultValue && defaultValue[propName] : val;
  }
  for (var i = 0; i < el.animators.length; i++) {
    var animator = el.animators[i];
    if (animator.__fromStateTransition
    // Don't consider the animation to emphasis state.
    && animator.__fromStateTransition.indexOf(toStateName) < 0 && animator.targetName === 'style') {
      animator.saveTo(fromState, props);
    }
  }
  return fromState;
}
function createEmphasisDefaultState(el, stateName, targetStates, state) {
  var hasSelect = targetStates && (0,zrender_lib_core_util_js__rspack_import_1.indexOf)(targetStates, 'select') >= 0;
  var cloned = false;
  if (el instanceof zrender_lib_graphic_Path_js__rspack_import_2["default"]) {
    var store = getSavedStates(el);
    var fromFill = hasSelect ? store.selectFill || store.normalFill : store.normalFill;
    var fromStroke = hasSelect ? store.selectStroke || store.normalStroke : store.normalStroke;
    if (hasFillOrStroke(fromFill) || hasFillOrStroke(fromStroke)) {
      state = state || {};
      var emphasisStyle = state.style || {};
      // inherit case
      if (emphasisStyle.fill === 'inherit') {
        cloned = true;
        state = (0,zrender_lib_core_util_js__rspack_import_1.extend)({}, state);
        emphasisStyle = (0,zrender_lib_core_util_js__rspack_import_1.extend)({}, emphasisStyle);
        emphasisStyle.fill = fromFill;
      }
      // Apply default color lift
      else if (!hasFillOrStroke(emphasisStyle.fill) && hasFillOrStroke(fromFill)) {
        cloned = true;
        // Not modify the original value.
        state = (0,zrender_lib_core_util_js__rspack_import_1.extend)({}, state);
        emphasisStyle = (0,zrender_lib_core_util_js__rspack_import_1.extend)({}, emphasisStyle);
        // Already being applied 'emphasis'. DON'T lift color multiple times.
        emphasisStyle.fill = (0,zrender_lib_tool_color_js__rspack_import_3.liftColor)(fromFill);
      }
      // Not highlight stroke if fill has been highlighted.
      else if (!hasFillOrStroke(emphasisStyle.stroke) && hasFillOrStroke(fromStroke)) {
        if (!cloned) {
          state = (0,zrender_lib_core_util_js__rspack_import_1.extend)({}, state);
          emphasisStyle = (0,zrender_lib_core_util_js__rspack_import_1.extend)({}, emphasisStyle);
        }
        emphasisStyle.stroke = (0,zrender_lib_tool_color_js__rspack_import_3.liftColor)(fromStroke);
      }
      state.style = emphasisStyle;
    }
  }
  if (state) {
    // TODO Share with textContent?
    if (state.z2 == null) {
      if (!cloned) {
        state = (0,zrender_lib_core_util_js__rspack_import_1.extend)({}, state);
      }
      var z2EmphasisLift = el.z2EmphasisLift;
      state.z2 = el.z2 + (z2EmphasisLift != null ? z2EmphasisLift : Z2_EMPHASIS_LIFT);
    }
  }
  return state;
}
function createSelectDefaultState(el, stateName, state) {
  // const hasSelect = indexOf(el.currentStates, stateName) >= 0;
  if (state) {
    // TODO Share with textContent?
    if (state.z2 == null) {
      state = (0,zrender_lib_core_util_js__rspack_import_1.extend)({}, state);
      var z2SelectLift = el.z2SelectLift;
      state.z2 = el.z2 + (z2SelectLift != null ? z2SelectLift : Z2_SELECT_LIFT);
    }
  }
  return state;
}
function createBlurDefaultState(el, stateName, state) {
  var hasBlur = (0,zrender_lib_core_util_js__rspack_import_1.indexOf)(el.currentStates, stateName) >= 0;
  var currentOpacity = el.style.opacity;
  var fromState = !hasBlur ? getFromStateStyle(el, ['opacity'], stateName, {
    opacity: 1
  }) : null;
  state = state || {};
  var blurStyle = state.style || {};
  if (blurStyle.opacity == null) {
    // clone state
    state = (0,zrender_lib_core_util_js__rspack_import_1.extend)({}, state);
    blurStyle = (0,zrender_lib_core_util_js__rspack_import_1.extend)({
      // Already being applied 'emphasis'. DON'T mul opacity multiple times.
      opacity: hasBlur ? currentOpacity : fromState.opacity * 0.1
    }, blurStyle);
    state.style = blurStyle;
  }
  return state;
}
function elementStateProxy(stateName, targetStates) {
  var state = this.states[stateName];
  if (this.style) {
    if (stateName === 'emphasis') {
      return createEmphasisDefaultState(this, stateName, targetStates, state);
    } else if (stateName === 'blur') {
      return createBlurDefaultState(this, stateName, state);
    } else if (stateName === 'select') {
      return createSelectDefaultState(this, stateName, state);
    }
  }
  return state;
}
/**
 * Set hover style (namely "emphasis style") of element.
 * @param el Should not be `zrender/graphic/Group`.
 * @param focus 'self' | 'selfInSeries' | 'series'
 */
function setDefaultStateProxy(el) {
  el.stateProxy = elementStateProxy;
  var textContent = el.getTextContent();
  var textGuide = el.getTextGuideLine();
  if (textContent) {
    textContent.stateProxy = elementStateProxy;
  }
  if (textGuide) {
    textGuide.stateProxy = elementStateProxy;
  }
}
function enterEmphasisWhenMouseOver(el, e) {
  !shouldSilent(el, e)
  // "emphasis" event highlight has higher priority than mouse highlight.
  && !el.__highByOuter && traverseUpdateState(el, singleEnterEmphasis);
}
function leaveEmphasisWhenMouseOut(el, e) {
  !shouldSilent(el, e)
  // "emphasis" event highlight has higher priority than mouse highlight.
  && !el.__highByOuter && traverseUpdateState(el, singleLeaveEmphasis);
}
function enterEmphasis(el, highlightDigit) {
  el.__highByOuter |= 1 << (highlightDigit || 0);
  traverseUpdateState(el, singleEnterEmphasis);
}
function leaveEmphasis(el, highlightDigit) {
  !(el.__highByOuter &= ~(1 << (highlightDigit || 0))) && traverseUpdateState(el, singleLeaveEmphasis);
}
function enterBlur(el) {
  traverseUpdateState(el, singleEnterBlur);
}
function leaveBlur(el) {
  traverseUpdateState(el, singleLeaveBlur);
}
function enterSelect(el) {
  traverseUpdateState(el, singleEnterSelect);
}
function leaveSelect(el) {
  traverseUpdateState(el, singleLeaveSelect);
}
function shouldSilent(el, e) {
  return el.__highDownSilentOnTouch && e.zrByTouch;
}
function allLeaveBlur(api) {
  var model = api.getModel();
  var leaveBlurredSeries = [];
  var allComponentViews = [];
  model.eachComponent(function (componentType, componentModel) {
    var componentStates = getComponentStates(componentModel);
    var view = (0,_core_ExtensionAPI_js__rspack_import_4.getViewOfComponentOrSeries)(api, componentModel);
    var isSeries = componentType === 'series';
    !isSeries && allComponentViews.push(view);
    if (componentStates.isBlured) {
      // Leave blur anyway
      view.group.traverse(function (child) {
        singleLeaveBlur(child);
      });
      isSeries && leaveBlurredSeries.push(componentModel);
    }
    componentStates.isBlured = false;
  });
  (0,zrender_lib_core_util_js__rspack_import_1.each)(allComponentViews, function (view) {
    if (view && view.toggleBlurSeries) {
      view.toggleBlurSeries(leaveBlurredSeries, false, model);
    }
  });
}
function blurSeries(targetSeriesIndex, focus, blurScope, api) {
  var ecModel = api.getModel();
  blurScope = blurScope || 'coordinateSystem';
  function leaveBlurOfIndices(data, dataIndices) {
    for (var i = 0; i < dataIndices.length; i++) {
      var itemEl = data.getItemGraphicEl(dataIndices[i]);
      itemEl && leaveBlur(itemEl);
    }
  }
  if (targetSeriesIndex == null) {
    return;
  }
  if (!focus || focus === 'none') {
    return;
  }
  var targetSeriesModel = ecModel.getSeriesByIndex(targetSeriesIndex);
  var targetCoordSys = targetSeriesModel.coordinateSystem;
  if (targetCoordSys && targetCoordSys.master) {
    targetCoordSys = targetCoordSys.master;
  }
  var blurredSeries = [];
  ecModel.eachSeries(function (seriesModel) {
    var sameSeries = targetSeriesModel === seriesModel;
    var coordSys = seriesModel.coordinateSystem;
    if (coordSys && coordSys.master) {
      coordSys = coordSys.master;
    }
    var sameCoordSys = coordSys && targetCoordSys ? coordSys === targetCoordSys : sameSeries; // If there is no coordinate system. use sameSeries instead.
    if (!(
    // Not blur other series if blurScope series
    blurScope === 'series' && !sameSeries
    // Not blur other coordinate system if blurScope is coordinateSystem
    || blurScope === 'coordinateSystem' && !sameCoordSys
    // Not blur self series if focus is series.
    || focus === 'series' && sameSeries
    // TODO blurScope: coordinate system
    )) {
      var view = api.getViewOfSeriesModel(seriesModel);
      view.group.traverse(function (child) {
        // For the elements that have been triggered by other components,
        // and are still required to be highlighted,
        // because the current is directly forced to blur the element,
        // it will cause the focus self to be unable to highlight, so skip the blur of this element.
        if (child.__highByOuter && sameSeries && focus === 'self') {
          return;
        }
        singleEnterBlur(child);
      });
      if ((0,zrender_lib_core_util_js__rspack_import_1.isArrayLike)(focus)) {
        leaveBlurOfIndices(seriesModel.getData(), focus);
      } else if ((0,zrender_lib_core_util_js__rspack_import_1.isObject)(focus)) {
        var dataTypes = (0,zrender_lib_core_util_js__rspack_import_1.keys)(focus);
        for (var d = 0; d < dataTypes.length; d++) {
          leaveBlurOfIndices(seriesModel.getData(dataTypes[d]), focus[dataTypes[d]]);
        }
      }
      blurredSeries.push(seriesModel);
      getComponentStates(seriesModel).isBlured = true;
    }
  });
  ecModel.eachComponent(function (componentType, componentModel) {
    if (componentType === 'series') {
      return;
    }
    var view = api.getViewOfComponentModel(componentModel);
    if (view && view.toggleBlurSeries) {
      view.toggleBlurSeries(blurredSeries, true, ecModel);
    }
  });
}
function blurComponent(componentMainType, componentIndex, api) {
  if (componentMainType == null || componentIndex == null) {
    return;
  }
  var componentModel = api.getModel().getComponent(componentMainType, componentIndex);
  if (!componentModel) {
    return;
  }
  getComponentStates(componentModel).isBlured = true;
  var view = api.getViewOfComponentModel(componentModel);
  if (!view || !view.focusBlurEnabled) {
    return;
  }
  view.group.traverse(function (child) {
    singleEnterBlur(child);
  });
}
function blurSeriesFromHighlightPayload(seriesModel, payload, api) {
  var seriesIndex = seriesModel.seriesIndex;
  var data = seriesModel.getData(payload.dataType);
  if (!data) {
    if (false) {}
    return;
  }
  var dataIndex = (0,_model_js__rspack_import_0.queryDataIndex)(data, payload);
  // Pick the first one if there is multiple/none exists.
  dataIndex = ((0,zrender_lib_core_util_js__rspack_import_1.isArray)(dataIndex) ? dataIndex[0] : dataIndex) || 0;
  var el = data.getItemGraphicEl(dataIndex);
  if (!el) {
    var count = data.count();
    var current = 0;
    // If data on dataIndex is NaN.
    while (!el && current < count) {
      el = data.getItemGraphicEl(current++);
    }
  }
  if (el) {
    var ecData = (0,_innerStore_js__rspack_import_5.getECData)(el);
    blurSeries(seriesIndex, ecData.focus, ecData.blurScope, api);
  } else {
    // If there is no element put on the data. Try getting it from raw option
    // TODO Should put it on seriesModel?
    var focus_1 = seriesModel.get(['emphasis', 'focus']);
    var blurScope = seriesModel.get(['emphasis', 'blurScope']);
    if (focus_1 != null) {
      blurSeries(seriesIndex, focus_1, blurScope, api);
    }
  }
}
function findComponentHighDownDispatchers(componentMainType, componentIndex, name, api) {
  var ret = {
    focusSelf: false,
    dispatchers: null
  };
  if (componentMainType == null || componentMainType === 'series' || componentIndex == null || name == null) {
    return ret;
  }
  var componentModel = api.getModel().getComponent(componentMainType, componentIndex);
  if (!componentModel) {
    return ret;
  }
  var view = api.getViewOfComponentModel(componentModel);
  if (!view || !view.findHighDownDispatchers) {
    return ret;
  }
  var dispatchers = view.findHighDownDispatchers(name);
  // At presnet, the component (like Geo) only blur inside itself.
  // So we do not use `blurScope` in component.
  var focusSelf;
  for (var i = 0; i < dispatchers.length; i++) {
    if (false) {}
    if ((0,_innerStore_js__rspack_import_5.getECData)(dispatchers[i]).focus === 'self') {
      focusSelf = true;
      break;
    }
  }
  return {
    focusSelf: focusSelf,
    dispatchers: dispatchers
  };
}
function handleGlobalMouseOverForHighDown(dispatcher, e, api) {
  if (false) {}
  var ecData = (0,_innerStore_js__rspack_import_5.getECData)(dispatcher);
  var _a = findComponentHighDownDispatchers(ecData.componentMainType, ecData.componentIndex, ecData.componentHighDownName, api),
    dispatchers = _a.dispatchers,
    focusSelf = _a.focusSelf;
  // If `findHighDownDispatchers` is supported on the component,
  // highlight/downplay elements with the same name.
  if (dispatchers) {
    if (focusSelf) {
      blurComponent(ecData.componentMainType, ecData.componentIndex, api);
    }
    (0,zrender_lib_core_util_js__rspack_import_1.each)(dispatchers, function (dispatcher) {
      return enterEmphasisWhenMouseOver(dispatcher, e);
    });
  } else {
    // Try blur all in the related series. Then emphasis the hoverred.
    // TODO. progressive mode.
    blurSeries(ecData.seriesIndex, ecData.focus, ecData.blurScope, api);
    if (ecData.focus === 'self') {
      blurComponent(ecData.componentMainType, ecData.componentIndex, api);
    }
    // Other than series, component that not support `findHighDownDispatcher` will
    // also use it. But in this case, highlight/downplay are only supported in
    // mouse hover but not in dispatchAction.
    enterEmphasisWhenMouseOver(dispatcher, e);
  }
}
function handleGlobalMouseOutForHighDown(dispatcher, e, api) {
  if (false) {}
  allLeaveBlur(api);
  var ecData = (0,_innerStore_js__rspack_import_5.getECData)(dispatcher);
  var dispatchers = findComponentHighDownDispatchers(ecData.componentMainType, ecData.componentIndex, ecData.componentHighDownName, api).dispatchers;
  if (dispatchers) {
    (0,zrender_lib_core_util_js__rspack_import_1.each)(dispatchers, function (dispatcher) {
      return leaveEmphasisWhenMouseOut(dispatcher, e);
    });
  } else {
    leaveEmphasisWhenMouseOut(dispatcher, e);
  }
}
function toggleSelectionFromPayload(seriesModel, payload, api) {
  if (!isSelectChangePayload(payload)) {
    return;
  }
  var dataType = payload.dataType;
  var data = seriesModel.getData(dataType);
  var dataIndex = (0,_model_js__rspack_import_0.queryDataIndex)(data, payload);
  if (!(0,zrender_lib_core_util_js__rspack_import_1.isArray)(dataIndex)) {
    dataIndex = [dataIndex];
  }
  seriesModel[payload.type === TOGGLE_SELECT_ACTION_TYPE ? 'toggleSelect' : payload.type === SELECT_ACTION_TYPE ? 'select' : 'unselect'](dataIndex, dataType);
}
function updateSeriesElementSelection(seriesModel) {
  var allData = seriesModel.getAllData();
  (0,zrender_lib_core_util_js__rspack_import_1.each)(allData, function (_a) {
    var data = _a.data,
      type = _a.type;
    data.eachItemGraphicEl(function (el, idx) {
      seriesModel.isSelected(idx, type) ? enterSelect(el) : leaveSelect(el);
    });
  });
}
function getAllSelectedIndices(ecModel) {
  var ret = [];
  ecModel.eachSeries(function (seriesModel) {
    var allData = seriesModel.getAllData();
    (0,zrender_lib_core_util_js__rspack_import_1.each)(allData, function (_a) {
      var data = _a.data,
        type = _a.type;
      var dataIndices = seriesModel.getSelectedDataIndices();
      if (dataIndices.length > 0) {
        var item = {
          dataIndex: dataIndices,
          seriesIndex: seriesModel.seriesIndex
        };
        if (type != null) {
          item.dataType = type;
        }
        ret.push(item);
      }
    });
  });
  return ret;
}
/**
 * Enable the function that mouseover will trigger the emphasis state.
 *
 * NOTE:
 * This function should be used on the element with dataIndex, seriesIndex.
 *
 */
function enableHoverEmphasis(el, focus, blurScope) {
  setAsHighDownDispatcher(el, true);
  traverseUpdateState(el, setDefaultStateProxy);
  enableHoverFocus(el, focus, blurScope);
}
function disableHoverEmphasis(el) {
  setAsHighDownDispatcher(el, false);
}
function toggleHoverEmphasis(el, focus, blurScope, isDisabled) {
  isDisabled ? disableHoverEmphasis(el) : enableHoverEmphasis(el, focus, blurScope);
}
function enableHoverFocus(el, focus, blurScope) {
  var ecData = (0,_innerStore_js__rspack_import_5.getECData)(el);
  if (focus != null) {
    // TODO dataIndex may be set after this function. This check is not useful.
    // if (ecData.dataIndex == null) {
    //     if (__DEV__) {
    //         console.warn('focus can only been set on element with dataIndex');
    //     }
    // }
    // else {
    ecData.focus = focus;
    ecData.blurScope = blurScope;
    // }
  } else if (ecData.focus) {
    ecData.focus = null;
  }
}
var OTHER_STATES = ['emphasis', 'blur', 'select'];
var defaultStyleGetterMap = {
  itemStyle: 'getItemStyle',
  lineStyle: 'getLineStyle',
  areaStyle: 'getAreaStyle'
};
/**
 * Set emphasis/blur/selected states of element.
 */
function setStatesStylesFromModel(el, itemModel, styleType,
// default itemStyle
getter) {
  styleType = styleType || 'itemStyle';
  for (var i = 0; i < OTHER_STATES.length; i++) {
    var stateName = OTHER_STATES[i];
    var model = itemModel.getModel([stateName, styleType]);
    var state = el.ensureState(stateName);
    // Let it throw error if getterType is not found.
    state.style = getter ? getter(model) : model[defaultStyleGetterMap[styleType]]();
  }
}
/**
 *
 * Set element as highlight / downplay dispatcher.
 * It will be checked when element received mouseover event or from highlight action.
 * It's in change of all highlight/downplay behavior of it's children.
 *
 * @param el
 * @param el.highDownSilentOnTouch
 *        In touch device, mouseover event will be trigger on touchstart event
 *        (see module:zrender/dom/HandlerProxy). By this mechanism, we can
 *        conveniently use hoverStyle when tap on touch screen without additional
 *        code for compatibility.
 *        But if the chart/component has select feature, which usually also use
 *        hoverStyle, there might be conflict between 'select-highlight' and
 *        'hover-highlight' especially when roam is enabled (see geo for example).
 *        In this case, `highDownSilentOnTouch` should be used to disable
 *        hover-highlight on touch device.
 * @param asDispatcher If `false`, do not set as "highDownDispatcher".
 */
function setAsHighDownDispatcher(el, asDispatcher) {
  var disable = asDispatcher === false;
  var extendedEl = el;
  // Make `highDownSilentOnTouch` and `onStateChange` only work after
  // `setAsHighDownDispatcher` called. Avoid it is modified by user unexpectedly.
  if (el.highDownSilentOnTouch) {
    extendedEl.__highDownSilentOnTouch = el.highDownSilentOnTouch;
  }
  // Simple optimize, since this method might be
  // called for each elements of a group in some cases.
  if (!disable || extendedEl.__highDownDispatcher) {
    // Emphasis, normal can be triggered manually by API or other components like hover link.
    // el[method]('emphasis', onElementEmphasisEvent)[method]('normal', onElementNormalEvent);
    // Also keep previous record.
    extendedEl.__highByOuter = extendedEl.__highByOuter || 0;
    extendedEl.__highDownDispatcher = !disable;
  }
}
function isHighDownDispatcher(el) {
  return !!(el && el.__highDownDispatcher);
}
/**
 * Enable component highlight/downplay features:
 * + hover link (within the same name)
 * + focus blur in component
 */
function enableComponentHighDownFeatures(el, componentModel, componentHighDownName) {
  var ecData = (0,_innerStore_js__rspack_import_5.getECData)(el);
  ecData.componentMainType = componentModel.mainType;
  ecData.componentIndex = componentModel.componentIndex;
  ecData.componentHighDownName = componentHighDownName;
}
/**
 * Support highlight/downplay record on each elements.
 * For the case: hover highlight/downplay (legend, visualMap, ...) and
 * user triggered highlight/downplay should not conflict.
 * Only all of the highlightDigit cleared, return to normal.
 * @param {string} highlightKey
 * @return {number} highlightDigit
 */
function getHighlightDigit(highlightKey) {
  var highlightDigit = _highlightKeyMap[highlightKey];
  if (highlightDigit == null && _highlightNextDigit <= 32) {
    highlightDigit = _highlightKeyMap[highlightKey] = _highlightNextDigit++;
  }
  return highlightDigit;
}
function isSelectChangePayload(payload) {
  var payloadType = payload.type;
  return payloadType === SELECT_ACTION_TYPE || payloadType === UNSELECT_ACTION_TYPE || payloadType === TOGGLE_SELECT_ACTION_TYPE;
}
function isHighDownPayload(payload) {
  var payloadType = payload.type;
  return payloadType === HIGHLIGHT_ACTION_TYPE || payloadType === DOWNPLAY_ACTION_TYPE;
}
function savePathStates(el) {
  var store = getSavedStates(el);
  store.normalFill = el.style.fill;
  store.normalStroke = el.style.stroke;
  var selectState = el.states.select || {};
  store.selectFill = selectState.style && selectState.style.fill || null;
  store.selectStroke = selectState.style && selectState.style.stroke || null;
}
__webpack_require__.d(__webpack_exports__, {
}, {
  DISPLAY_STATES: DISPLAY_STATES,
  DOWNPLAY_ACTION_TYPE: DOWNPLAY_ACTION_TYPE,
  HIGHLIGHT_ACTION_TYPE: HIGHLIGHT_ACTION_TYPE,
  HOVER_STATE_BLUR: HOVER_STATE_BLUR,
  HOVER_STATE_EMPHASIS: HOVER_STATE_EMPHASIS,
  HOVER_STATE_NORMAL: HOVER_STATE_NORMAL,
  SELECT_ACTION_TYPE: SELECT_ACTION_TYPE,
  SELECT_CHANGED_EVENT_TYPE: SELECT_CHANGED_EVENT_TYPE,
  SPECIAL_STATES: SPECIAL_STATES,
  TOGGLE_SELECT_ACTION_TYPE: TOGGLE_SELECT_ACTION_TYPE,
  UNSELECT_ACTION_TYPE: UNSELECT_ACTION_TYPE,
  Z2_EMPHASIS_LIFT: Z2_EMPHASIS_LIFT,
  Z2_SELECT_LIFT: Z2_SELECT_LIFT,
  allLeaveBlur: allLeaveBlur,
  blurComponent: blurComponent,
  blurSeries: blurSeries,
  blurSeriesFromHighlightPayload: blurSeriesFromHighlightPayload,
  clearStates: clearStates,
  disableHoverEmphasis: disableHoverEmphasis,
  enableComponentHighDownFeatures: enableComponentHighDownFeatures,
  enableHoverEmphasis: enableHoverEmphasis,
  enableHoverFocus: enableHoverFocus,
  enterBlur: enterBlur,
  enterEmphasis: enterEmphasis,
  enterEmphasisWhenMouseOver: enterEmphasisWhenMouseOver,
  enterSelect: enterSelect,
  findComponentHighDownDispatchers: findComponentHighDownDispatchers,
  getAllSelectedIndices: getAllSelectedIndices,
  getHighlightDigit: getHighlightDigit,
  handleGlobalMouseOutForHighDown: handleGlobalMouseOutForHighDown,
  handleGlobalMouseOverForHighDown: handleGlobalMouseOverForHighDown,
  isHighDownDispatcher: isHighDownDispatcher,
  isHighDownPayload: isHighDownPayload,
  isSelectChangePayload: isSelectChangePayload,
  leaveBlur: leaveBlur,
  leaveEmphasis: leaveEmphasis,
  leaveEmphasisWhenMouseOut: leaveEmphasisWhenMouseOut,
  leaveSelect: leaveSelect,
  savePathStates: savePathStates,
  setAsHighDownDispatcher: setAsHighDownDispatcher,
  setDefaultStateProxy: setDefaultStateProxy,
  setStatesFlag: setStatesFlag,
  setStatesStylesFromModel: setStatesStylesFromModel,
  toggleHoverEmphasis: toggleHoverEmphasis,
  toggleSelectionFromPayload: toggleSelectionFromPayload,
  updateSeriesElementSelection: updateSeriesElementSelection
});


}),
90903: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var zrender_lib_core_util_js__rspack_import_0 = __webpack_require__(75275);
/* import */ var _visual_tokens_js__rspack_import_1 = __webpack_require__(5888);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


var deprecatedLogs = (/* unused pure expression or super */ null && ({}));
/**
 * Whether need to call `convertEC4CompatibleStyle`.
 */
function isEC4CompatibleStyle(style, elType, hasOwnTextContentOption, hasOwnTextConfig) {
  // Since echarts5, `RectText` is separated from its host element and style.text
  // does not exist any more. The compat work brings some extra burden on performance.
  // So we provide:
  // `legacy: true` force make compat.
  // `legacy: false`, force do not compat.
  // `legacy` not set: auto detect whether legacy.
  //     But in this case we do not compat (difficult to detect and rare case):
  //     Because custom series and graphic component support "merge", users may firstly
  //     only set `textStrokeWidth` style or secondly only set `text`.
  return style && (style.legacy || style.legacy !== false && !hasOwnTextContentOption && !hasOwnTextConfig && elType !== 'tspan'
  // Difficult to detect whether legacy for a "text" el.
  && (elType === 'text' || (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(style, 'text')));
}
/**
 * `EC4CompatibleStyle` is style that might be in echarts4 format or echarts5 format.
 * @param hostStyle The properties might be modified.
 * @return If be text el, `textContentStyle` and `textConfig` will not be returned.
 *         Otherwise a `textContentStyle` and `textConfig` will be created, whose props area
 *         retried from the `hostStyle`.
 */
function convertFromEC4CompatibleStyle(hostStyle, elType, isNormal) {
  var srcStyle = hostStyle;
  var textConfig;
  var textContent;
  var textContentStyle;
  if (elType === 'text') {
    textContentStyle = srcStyle;
  } else {
    textContentStyle = {};
    (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(srcStyle, 'text') && (textContentStyle.text = srcStyle.text);
    (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(srcStyle, 'rich') && (textContentStyle.rich = srcStyle.rich);
    (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(srcStyle, 'textFill') && (textContentStyle.fill = srcStyle.textFill);
    (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(srcStyle, 'textStroke') && (textContentStyle.stroke = srcStyle.textStroke);
    (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(srcStyle, 'fontFamily') && (textContentStyle.fontFamily = srcStyle.fontFamily);
    (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(srcStyle, 'fontSize') && (textContentStyle.fontSize = srcStyle.fontSize);
    (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(srcStyle, 'fontStyle') && (textContentStyle.fontStyle = srcStyle.fontStyle);
    (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(srcStyle, 'fontWeight') && (textContentStyle.fontWeight = srcStyle.fontWeight);
    textContent = {
      type: 'text',
      style: textContentStyle,
      // ec4 does not support rectText trigger.
      // And when text position is different in normal and emphasis
      // => hover text trigger emphasis;
      // => text position changed, leave mouse pointer immediately;
      // That might cause incorrect state.
      silent: true
    };
    textConfig = {};
    var hasOwnPos = (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(srcStyle, 'textPosition');
    if (isNormal) {
      textConfig.position = hasOwnPos ? srcStyle.textPosition : 'inside';
    } else {
      hasOwnPos && (textConfig.position = srcStyle.textPosition);
    }
    (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(srcStyle, 'textPosition') && (textConfig.position = srcStyle.textPosition);
    (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(srcStyle, 'textOffset') && (textConfig.offset = srcStyle.textOffset);
    (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(srcStyle, 'textRotation') && (textConfig.rotation = srcStyle.textRotation);
    (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(srcStyle, 'textDistance') && (textConfig.distance = srcStyle.textDistance);
  }
  convertEC4CompatibleRichItem(textContentStyle, hostStyle);
  (0,zrender_lib_core_util_js__rspack_import_0.each)(textContentStyle.rich, function (richItem) {
    convertEC4CompatibleRichItem(richItem, richItem);
  });
  return {
    textConfig: textConfig,
    textContent: textContent
  };
}
/**
 * The result will be set to `out`.
 */
function convertEC4CompatibleRichItem(out, richItem) {
  if (!richItem) {
    return;
  }
  // (1) For simplicity, make textXXX properties (deprecated since ec5) has
  // higher priority. For example, consider in ec4 `borderColor: 5, textBorderColor: 10`
  // on a rect means `borderColor: 4` on the rect and `borderColor: 10` on an attached
  // richText in ec5.
  // (2) `out === richItem` if and only if `out` is text el or rich item.
  // So we can overwrite existing props in `out` since textXXX has higher priority.
  richItem.font = richItem.textFont || richItem.font;
  (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(richItem, 'textStrokeWidth') && (out.lineWidth = richItem.textStrokeWidth);
  (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(richItem, 'textAlign') && (out.align = richItem.textAlign);
  (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(richItem, 'textVerticalAlign') && (out.verticalAlign = richItem.textVerticalAlign);
  (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(richItem, 'textLineHeight') && (out.lineHeight = richItem.textLineHeight);
  (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(richItem, 'textWidth') && (out.width = richItem.textWidth);
  (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(richItem, 'textHeight') && (out.height = richItem.textHeight);
  (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(richItem, 'textBackgroundColor') && (out.backgroundColor = richItem.textBackgroundColor);
  (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(richItem, 'textPadding') && (out.padding = richItem.textPadding);
  (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(richItem, 'textBorderColor') && (out.borderColor = richItem.textBorderColor);
  (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(richItem, 'textBorderWidth') && (out.borderWidth = richItem.textBorderWidth);
  (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(richItem, 'textBorderRadius') && (out.borderRadius = richItem.textBorderRadius);
  (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(richItem, 'textBoxShadowColor') && (out.shadowColor = richItem.textBoxShadowColor);
  (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(richItem, 'textBoxShadowBlur') && (out.shadowBlur = richItem.textBoxShadowBlur);
  (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(richItem, 'textBoxShadowOffsetX') && (out.shadowOffsetX = richItem.textBoxShadowOffsetX);
  (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(richItem, 'textBoxShadowOffsetY') && (out.shadowOffsetY = richItem.textBoxShadowOffsetY);
}
/**
 * Convert to pure echarts4 format style.
 * `itemStyle` will be modified, added with ec4 style properties from
 * `textStyle` and `textConfig`.
 *
 * [Caveat]: For simplicity, `insideRollback` in ec4 does not compat, where
 * `styleEmphasis: {textFill: 'red'}` will remove the normal auto added stroke.
 */
function convertToEC4StyleForCustomSerise(itemStl, txStl, txCfg) {
  var out = itemStl;
  // See `custom.ts`, a trick to set extra `textPosition` firstly.
  out.textPosition = out.textPosition || txCfg.position || 'inside';
  txCfg.offset != null && (out.textOffset = txCfg.offset);
  txCfg.rotation != null && (out.textRotation = txCfg.rotation);
  txCfg.distance != null && (out.textDistance = txCfg.distance);
  var isInside = out.textPosition.indexOf('inside') >= 0;
  var hostFill = itemStl.fill || _visual_tokens_js__rspack_import_1["default"].color.neutral99;
  convertToEC4RichItem(out, txStl);
  var textFillNotSet = out.textFill == null;
  if (isInside) {
    if (textFillNotSet) {
      out.textFill = txCfg.insideFill || _visual_tokens_js__rspack_import_1["default"].color.neutral00;
      !out.textStroke && txCfg.insideStroke && (out.textStroke = txCfg.insideStroke);
      !out.textStroke && (out.textStroke = hostFill);
      out.textStrokeWidth == null && (out.textStrokeWidth = 2);
    }
  } else {
    if (textFillNotSet) {
      out.textFill = itemStl.fill || txCfg.outsideFill || _visual_tokens_js__rspack_import_1["default"].color.neutral00;
    }
    !out.textStroke && txCfg.outsideStroke && (out.textStroke = txCfg.outsideStroke);
  }
  out.text = txStl.text;
  out.rich = txStl.rich;
  (0,zrender_lib_core_util_js__rspack_import_0.each)(txStl.rich, function (richItem) {
    convertToEC4RichItem(richItem, richItem);
  });
  return out;
}
function convertToEC4RichItem(out, richItem) {
  if (!richItem) {
    return;
  }
  (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(richItem, 'fill') && (out.textFill = richItem.fill);
  (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(richItem, 'stroke') && (out.textStroke = richItem.fill);
  (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(richItem, 'lineWidth') && (out.textStrokeWidth = richItem.lineWidth);
  (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(richItem, 'font') && (out.font = richItem.font);
  (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(richItem, 'fontStyle') && (out.fontStyle = richItem.fontStyle);
  (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(richItem, 'fontWeight') && (out.fontWeight = richItem.fontWeight);
  (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(richItem, 'fontSize') && (out.fontSize = richItem.fontSize);
  (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(richItem, 'fontFamily') && (out.fontFamily = richItem.fontFamily);
  (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(richItem, 'align') && (out.textAlign = richItem.align);
  (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(richItem, 'verticalAlign') && (out.textVerticalAlign = richItem.verticalAlign);
  (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(richItem, 'lineHeight') && (out.textLineHeight = richItem.lineHeight);
  (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(richItem, 'width') && (out.textWidth = richItem.width);
  (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(richItem, 'height') && (out.textHeight = richItem.height);
  (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(richItem, 'backgroundColor') && (out.textBackgroundColor = richItem.backgroundColor);
  (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(richItem, 'padding') && (out.textPadding = richItem.padding);
  (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(richItem, 'borderColor') && (out.textBorderColor = richItem.borderColor);
  (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(richItem, 'borderWidth') && (out.textBorderWidth = richItem.borderWidth);
  (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(richItem, 'borderRadius') && (out.textBorderRadius = richItem.borderRadius);
  (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(richItem, 'shadowColor') && (out.textBoxShadowColor = richItem.shadowColor);
  (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(richItem, 'shadowBlur') && (out.textBoxShadowBlur = richItem.shadowBlur);
  (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(richItem, 'shadowOffsetX') && (out.textBoxShadowOffsetX = richItem.shadowOffsetX);
  (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(richItem, 'shadowOffsetY') && (out.textBoxShadowOffsetY = richItem.shadowOffsetY);
  (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(richItem, 'textShadowColor') && (out.textShadowColor = richItem.textShadowColor);
  (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(richItem, 'textShadowBlur') && (out.textShadowBlur = richItem.textShadowBlur);
  (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(richItem, 'textShadowOffsetX') && (out.textShadowOffsetX = richItem.textShadowOffsetX);
  (0,zrender_lib_core_util_js__rspack_import_0.hasOwn)(richItem, 'textShadowOffsetY') && (out.textShadowOffsetY = richItem.textShadowOffsetY);
}
function warnDeprecated(deprecated, insteadApproach) {
  if (false) { var key }
}
__webpack_require__.d(__webpack_exports__, {
}, {
  convertFromEC4CompatibleStyle: convertFromEC4CompatibleStyle,
  convertToEC4StyleForCustomSerise: convertToEC4StyleForCustomSerise,
  isEC4CompatibleStyle: isEC4CompatibleStyle,
  warnDeprecated: warnDeprecated
});


}),
87914: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var zrender_lib_core_util_js__rspack_import_4 = __webpack_require__(75275);
/* import */ var _graphic_js__rspack_import_0 = __webpack_require__(72043);
/* import */ var _graphic_js__rspack_import_1 = __webpack_require__(70582);
/* import */ var _graphic_js__rspack_import_2 = __webpack_require__(67485);
/* import */ var _graphic_js__rspack_import_3 = __webpack_require__(34788);
/* import */ var _graphic_js__rspack_import_7 = __webpack_require__(90088);
/* import */ var zrender_lib_core_BoundingRect_js__rspack_import_8 = __webpack_require__(93689);
/* import */ var zrender_lib_contain_text_js__rspack_import_5 = __webpack_require__(21985);
/* import */ var _number_js__rspack_import_9 = __webpack_require__(46823);
/* import */ var _visual_tokens_js__rspack_import_6 = __webpack_require__(5888);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/
// Symbol factory






/**
 * Triangle shape
 * @inner
 */
var Triangle = _graphic_js__rspack_import_0["default"].extend({
  type: 'triangle',
  shape: {
    cx: 0,
    cy: 0,
    width: 0,
    height: 0
  },
  buildPath: function (path, shape) {
    var cx = shape.cx;
    var cy = shape.cy;
    var width = shape.width / 2;
    var height = shape.height / 2;
    path.moveTo(cx, cy - height);
    path.lineTo(cx + width, cy + height);
    path.lineTo(cx - width, cy + height);
    path.closePath();
  }
});
/**
 * Diamond shape
 * @inner
 */
var Diamond = _graphic_js__rspack_import_0["default"].extend({
  type: 'diamond',
  shape: {
    cx: 0,
    cy: 0,
    width: 0,
    height: 0
  },
  buildPath: function (path, shape) {
    var cx = shape.cx;
    var cy = shape.cy;
    var width = shape.width / 2;
    var height = shape.height / 2;
    path.moveTo(cx, cy - height);
    path.lineTo(cx + width, cy);
    path.lineTo(cx, cy + height);
    path.lineTo(cx - width, cy);
    path.closePath();
  }
});
/**
 * Pin shape
 * @inner
 */
var Pin = _graphic_js__rspack_import_0["default"].extend({
  type: 'pin',
  shape: {
    // x, y on the cusp
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  buildPath: function (path, shape) {
    var x = shape.x;
    var y = shape.y;
    var w = shape.width / 5 * 3;
    // Height must be larger than width
    var h = Math.max(w, shape.height);
    var r = w / 2;
    // Dist on y with tangent point and circle center
    var dy = r * r / (h - r);
    var cy = y - h + r + dy;
    var angle = Math.asin(dy / r);
    // Dist on x with tangent point and circle center
    var dx = Math.cos(angle) * r;
    var tanX = Math.sin(angle);
    var tanY = Math.cos(angle);
    var cpLen = r * 0.6;
    var cpLen2 = r * 0.7;
    path.moveTo(x - dx, cy + dy);
    path.arc(x, cy, r, Math.PI - angle, Math.PI * 2 + angle);
    path.bezierCurveTo(x + dx - tanX * cpLen, cy + dy + tanY * cpLen, x, y - cpLen2, x, y);
    path.bezierCurveTo(x, y - cpLen2, x - dx + tanX * cpLen, cy + dy + tanY * cpLen, x - dx, cy + dy);
    path.closePath();
  }
});
/**
 * Arrow shape
 * @inner
 */
var Arrow = _graphic_js__rspack_import_0["default"].extend({
  type: 'arrow',
  shape: {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  buildPath: function (ctx, shape) {
    var height = shape.height;
    var width = shape.width;
    var x = shape.x;
    var y = shape.y;
    var dx = width / 3 * 2;
    ctx.moveTo(x, y);
    ctx.lineTo(x + dx, y + height);
    ctx.lineTo(x, y + height / 4 * 3);
    ctx.lineTo(x - dx, y + height);
    ctx.lineTo(x, y);
    ctx.closePath();
  }
});
/**
 * Map of path constructors
 */
// TODO Use function to build symbol path.
var symbolCtors = {
  line: _graphic_js__rspack_import_1["default"],
  rect: _graphic_js__rspack_import_2["default"],
  roundRect: _graphic_js__rspack_import_2["default"],
  square: _graphic_js__rspack_import_2["default"],
  circle: _graphic_js__rspack_import_3["default"],
  diamond: Diamond,
  pin: Pin,
  arrow: Arrow,
  triangle: Triangle
};
var symbolShapeMakers = {
  line: function (x, y, w, h, shape) {
    shape.x1 = x;
    shape.y1 = y + h / 2;
    shape.x2 = x + w;
    shape.y2 = y + h / 2;
  },
  rect: function (x, y, w, h, shape) {
    shape.x = x;
    shape.y = y;
    shape.width = w;
    shape.height = h;
  },
  roundRect: function (x, y, w, h, shape) {
    shape.x = x;
    shape.y = y;
    shape.width = w;
    shape.height = h;
    shape.r = Math.min(w, h) / 4;
  },
  square: function (x, y, w, h, shape) {
    var size = Math.min(w, h);
    shape.x = x;
    shape.y = y;
    shape.width = size;
    shape.height = size;
  },
  circle: function (x, y, w, h, shape) {
    // Put circle in the center of square
    shape.cx = x + w / 2;
    shape.cy = y + h / 2;
    shape.r = Math.min(w, h) / 2;
  },
  diamond: function (x, y, w, h, shape) {
    shape.cx = x + w / 2;
    shape.cy = y + h / 2;
    shape.width = w;
    shape.height = h;
  },
  pin: function (x, y, w, h, shape) {
    shape.x = x + w / 2;
    shape.y = y + h / 2;
    shape.width = w;
    shape.height = h;
  },
  arrow: function (x, y, w, h, shape) {
    shape.x = x + w / 2;
    shape.y = y + h / 2;
    shape.width = w;
    shape.height = h;
  },
  triangle: function (x, y, w, h, shape) {
    shape.cx = x + w / 2;
    shape.cy = y + h / 2;
    shape.width = w;
    shape.height = h;
  }
};
var symbolBuildProxies = {};
(0,zrender_lib_core_util_js__rspack_import_4.each)(symbolCtors, function (Ctor, name) {
  symbolBuildProxies[name] = new Ctor();
});
var SymbolClz = _graphic_js__rspack_import_0["default"].extend({
  type: 'symbol',
  shape: {
    symbolType: '',
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  calculateTextPosition: function (out, config, rect) {
    var res = (0,zrender_lib_contain_text_js__rspack_import_5.calculateTextPosition)(out, config, rect);
    var shape = this.shape;
    if (shape && shape.symbolType === 'pin' && config.position === 'inside') {
      res.y = rect.y + rect.height * 0.4;
    }
    return res;
  },
  buildPath: function (ctx, shape, inBundle) {
    var symbolType = shape.symbolType;
    if (symbolType !== 'none') {
      var proxySymbol = symbolBuildProxies[symbolType];
      if (!proxySymbol) {
        // Default rect
        symbolType = 'rect';
        proxySymbol = symbolBuildProxies[symbolType];
      }
      symbolShapeMakers[symbolType](shape.x, shape.y, shape.width, shape.height, proxySymbol.shape);
      proxySymbol.buildPath(ctx, proxySymbol.shape, inBundle);
    }
  }
});
// Provide setColor helper method to avoid determine if set the fill or stroke outside
function symbolPathSetColor(color, innerColor) {
  if (this.type !== 'image') {
    var symbolStyle = this.style;
    if (this.__isEmptyBrush) {
      symbolStyle.stroke = color;
      symbolStyle.fill = innerColor || _visual_tokens_js__rspack_import_6["default"].color.neutral00;
      // TODO Same width with lineStyle in LineView
      symbolStyle.lineWidth = 2;
    } else if (this.shape.symbolType === 'line') {
      symbolStyle.stroke = color;
    } else {
      symbolStyle.fill = color;
    }
    this.markRedraw();
  }
}
/**
 * Create a symbol element with given symbol configuration: shape, x, y, width, height, color
 */
function createSymbol(symbolType, x, y, w, h, color,
// whether to keep the ratio of w/h,
keepAspect) {
  // TODO Support image object, DynamicImage.
  var isEmpty = symbolType.indexOf('empty') === 0;
  if (isEmpty) {
    symbolType = symbolType.substr(5, 1).toLowerCase() + symbolType.substr(6);
  }
  var symbolPath;
  if (symbolType.indexOf('image://') === 0) {
    symbolPath = _graphic_js__rspack_import_7.makeImage(symbolType.slice(8), new zrender_lib_core_BoundingRect_js__rspack_import_8["default"](x, y, w, h), keepAspect ? 'center' : 'cover');
  } else if (symbolType.indexOf('path://') === 0) {
    symbolPath = _graphic_js__rspack_import_7.makePath(symbolType.slice(7), {}, new zrender_lib_core_BoundingRect_js__rspack_import_8["default"](x, y, w, h), keepAspect ? 'center' : 'cover');
  } else {
    symbolPath = new SymbolClz({
      shape: {
        symbolType: symbolType,
        x: x,
        y: y,
        width: w,
        height: h
      }
    });
  }
  symbolPath.__isEmptyBrush = isEmpty;
  // TODO Should deprecate setColor
  symbolPath.setColor = symbolPathSetColor;
  if (color) {
    symbolPath.setColor(color);
  }
  return symbolPath;
}
function normalizeSymbolSize(symbolSize) {
  if (!(0,zrender_lib_core_util_js__rspack_import_4.isArray)(symbolSize)) {
    symbolSize = [+symbolSize, +symbolSize];
  }
  return [symbolSize[0] || 0, symbolSize[1] || 0];
}
function normalizeSymbolOffset(symbolOffset, symbolSize) {
  if (symbolOffset == null) {
    return;
  }
  if (!(0,zrender_lib_core_util_js__rspack_import_4.isArray)(symbolOffset)) {
    symbolOffset = [symbolOffset, symbolOffset];
  }
  return [(0,_number_js__rspack_import_9.parsePercent)(symbolOffset[0], symbolSize[0]) || 0, (0,_number_js__rspack_import_9.parsePercent)((0,zrender_lib_core_util_js__rspack_import_4.retrieve2)(symbolOffset[1], symbolOffset[0]), symbolSize[1]) || 0];
}
__webpack_require__.d(__webpack_exports__, {
}, {
  createSymbol: createSymbol,
  normalizeSymbolOffset: normalizeSymbolOffset,
  normalizeSymbolSize: normalizeSymbolSize,
  symbolBuildProxies: symbolBuildProxies
});


}),
88790: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/
var ORIGIN_METHOD = '\0__throttleOriginMethod';
var RATE = '\0__throttleRate';
var THROTTLE_TYPE = '\0__throttleType';
;
/**
 * @public
 * @param {(Function)} fn
 * @param {number} [delay=0] Unit: ms.
 * @param {boolean} [debounce=false]
 *        true: If call interval less than `delay`, only the last call works.
 *        false: If call interval less than `delay, call works on fixed rate.
 * @return {(Function)} throttled fn.
 */
function throttle(fn, delay, debounce) {
  var currCall;
  var lastCall = 0;
  var lastExec = 0;
  var timer = null;
  var diff;
  var scope;
  var args;
  var debounceNextCall;
  delay = delay || 0;
  function exec() {
    lastExec = new Date().getTime();
    timer = null;
    fn.apply(scope, args || []);
  }
  var cb = function () {
    var cbArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      cbArgs[_i] = arguments[_i];
    }
    currCall = new Date().getTime();
    scope = this;
    args = cbArgs;
    var thisDelay = debounceNextCall || delay;
    var thisDebounce = debounceNextCall || debounce;
    debounceNextCall = null;
    diff = currCall - (thisDebounce ? lastCall : lastExec) - thisDelay;
    clearTimeout(timer);
    // Here we should make sure that: the `exec` SHOULD NOT be called later
    // than a new call of `cb`, that is, preserving the command order. Consider
    // calculating "scale rate" when roaming as an example. When a call of `cb`
    // happens, either the `exec` is called dierectly, or the call is delayed.
    // But the delayed call should never be later than next call of `cb`. Under
    // this assurance, we can simply update view state each time `dispatchAction`
    // triggered by user roaming, but not need to add extra code to avoid the
    // state being "rolled-back".
    if (thisDebounce) {
      timer = setTimeout(exec, thisDelay);
    } else {
      if (diff >= 0) {
        exec();
      } else {
        timer = setTimeout(exec, -diff);
      }
    }
    lastCall = currCall;
  };
  /**
   * Clear throttle.
   * @public
   */
  cb.clear = function () {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  };
  /**
   * Enable debounce once.
   */
  cb.debounceNextCall = function (debounceDelay) {
    debounceNextCall = debounceDelay;
  };
  return cb;
}
/**
 * Create throttle method or update throttle rate.
 *
 * @example
 * ComponentView.prototype.render = function () {
 *     ...
 *     throttle.createOrUpdate(
 *         this,
 *         '_dispatchAction',
 *         this.model.get('throttle'),
 *         'fixRate'
 *     );
 * };
 * ComponentView.prototype.remove = function () {
 *     throttle.clear(this, '_dispatchAction');
 * };
 * ComponentView.prototype.dispose = function () {
 *     throttle.clear(this, '_dispatchAction');
 * };
 *
 */
function createOrUpdate(obj, fnAttr, rate, throttleType) {
  var fn = obj[fnAttr];
  if (!fn) {
    return;
  }
  var originFn = fn[ORIGIN_METHOD] || fn;
  var lastThrottleType = fn[THROTTLE_TYPE];
  var lastRate = fn[RATE];
  if (lastRate !== rate || lastThrottleType !== throttleType) {
    if (rate == null || !throttleType) {
      return obj[fnAttr] = originFn;
    }
    fn = obj[fnAttr] = throttle(originFn, rate, throttleType === 'debounce');
    fn[ORIGIN_METHOD] = originFn;
    fn[THROTTLE_TYPE] = throttleType;
    fn[RATE] = rate;
  }
  return fn;
}
/**
 * Clear throttle. Example see throttle.createOrUpdate.
 */
function clear(obj, fnAttr) {
  var fn = obj[fnAttr];
  if (fn && fn[ORIGIN_METHOD]) {
    // Clear throttle
    fn.clear && fn.clear();
    obj[fnAttr] = fn[ORIGIN_METHOD];
  }
}
__webpack_require__.d(__webpack_exports__, {
}, {
  clear: clear,
  createOrUpdate: createOrUpdate,
  throttle: throttle
});


}),
80155: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var zrender_lib_core_util_js__rspack_import_0 = __webpack_require__(75275);
/* import */ var _number_js__rspack_import_1 = __webpack_require__(46823);
/* import */ var _core_locale_js__rspack_import_3 = __webpack_require__(58345);
/* import */ var _model_Model_js__rspack_import_2 = __webpack_require__(98899);
/* import */ var _scale_break_js__rspack_import_4 = __webpack_require__(9017);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/





var ONE_SECOND = 1000;
var ONE_MINUTE = ONE_SECOND * 60;
var ONE_HOUR = ONE_MINUTE * 60;
var ONE_DAY = ONE_HOUR * 24;
var ONE_YEAR = ONE_DAY * 365;
var primaryTimeUnitFormatterMatchers = {
  year: /({yyyy}|{yy})/,
  month: /({MMMM}|{MMM}|{MM}|{M})/,
  day: /({dd}|{d})/,
  hour: /({HH}|{H}|{hh}|{h})/,
  minute: /({mm}|{m})/,
  second: /({ss}|{s})/,
  millisecond: /({SSS}|{S})/
};
var defaultFormatterSeed = {
  year: '{yyyy}',
  month: '{MMM}',
  day: '{d}',
  hour: '{HH}:{mm}',
  minute: '{HH}:{mm}',
  second: '{HH}:{mm}:{ss}',
  millisecond: '{HH}:{mm}:{ss} {SSS}'
};
var defaultFullFormatter = '{yyyy}-{MM}-{dd} {HH}:{mm}:{ss} {SSS}';
var fullDayFormatter = '{yyyy}-{MM}-{dd}';
var fullLeveledFormatter = {
  year: '{yyyy}',
  month: '{yyyy}-{MM}',
  day: fullDayFormatter,
  hour: fullDayFormatter + ' ' + defaultFormatterSeed.hour,
  minute: fullDayFormatter + ' ' + defaultFormatterSeed.minute,
  second: fullDayFormatter + ' ' + defaultFormatterSeed.second,
  millisecond: defaultFullFormatter
};
// Order must be ensured from big to small.
var primaryTimeUnits = ['year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond'];
var timeUnits = ['year', 'half-year', 'quarter', 'month', 'week', 'half-week', 'day', 'half-day', 'quarter-day', 'hour', 'minute', 'second', 'millisecond'];
function parseTimeAxisLabelFormatter(formatter) {
  // Keep the logic the same with function `leveledFormat`.
  return !zrender_lib_core_util_js__rspack_import_0.isString(formatter) && !zrender_lib_core_util_js__rspack_import_0.isFunction(formatter) ? parseTimeAxisLabelFormatterDictionary(formatter) : formatter;
}
/**
 * The final generated dictionary is like:
 *  generated_dict = {
 *      year: {
 *          year: ['{yyyy}', ...<higher_levels_if_any>]
 *      },
 *      month: {
 *          year: ['{yyyy} {MMM}', ...<higher_levels_if_any>],
 *          month: ['{MMM}', ...<higher_levels_if_any>]
 *      },
 *      day: {
 *          year: ['{yyyy} {MMM} {d}', ...<higher_levels_if_any>],
 *          month: ['{MMM} {d}', ...<higher_levels_if_any>],
 *          day: ['{d}', ...<higher_levels_if_any>]
 *      },
 *      ...
 *  }
 *
 * In echarts option, users can specify the entire dictionary or typically just:
 *  {formatter: {
 *      year: '{yyyy}', // Or an array of leveled templates: `['{yyyy}', '{bold1|{yyyy}}', ...]`,
 *                      // corresponding to `[level0, level1, level2, ...]`.
 *      month: '{MMM}',
 *      day: '{d}',
 *      hour: '{HH}:{mm}',
 *      second: '{HH}:{mm}',
 *      ...
 *  }}
 *  If any time unit is not specified in echarts option, the default template is used,
 *  such as `['{yyyy}', {primary|{yyyy}']`.
 *
 * The `tick.level` is only used to read string from each array, meaning the style type.
 *
 * Let `lowerUnit = getUnitFromValue(tick.value)`.
 * The non-break axis ticks only use `generated_dict[lowerUnit][lowerUnit][level]`.
 * The break axis ticks may use `generated_dict[lowerUnit][upperUnit][level]`, because:
 *  Consider the case: the non-break ticks are `16th, 23th, Feb, 7th, ...`, where `Feb` is in the break
 *  range and pruned by breaks, and the break ends might be in lower time unit than day. e.g., break start
 *  is `Jan 25th 18:00`(in unit `hour`) and break end is `Feb 6th 18:30` (in unit `minute`). Thus the break
 *  label prefers `Jan 25th 18:00` and `Feb 6th 18:30` rather than only `18:00` and `18:30`, otherwise it
 *  causes misleading.
 *  In this case, the tick of the break start and end will both be:
 *      `{level: 1, lowerTimeUnit: 'minute', upperTimeUnit: 'month'}`
 *  And get the final template by `generated_dict[lowerTimeUnit][upperTimeUnit][level]`.
 *  Note that the time unit can not be calculated directly by a single tick value, since the two breaks have
 *  to be at the same time unit to avoid awkward appearance. i.e., `Jan 25th 18:00` is in the time unit "hour"
 *  but we need it to be "minute", following `Feb 6th 18:30`.
 */
function parseTimeAxisLabelFormatterDictionary(dictOption) {
  dictOption = dictOption || {};
  var dict = {};
  // Currently if any template is specified by user, it may contain rich text tag,
  // such as `'{my_bold|{YYYY}}'`, thus we do add highlight style to it.
  // (Note that nested tag (`'{some|{some2|xxx}}'`) in rich text is not supported yet.)
  var canAddHighlight = true;
  zrender_lib_core_util_js__rspack_import_0.each(primaryTimeUnits, function (lowestUnit) {
    canAddHighlight && (canAddHighlight = dictOption[lowestUnit] == null);
  });
  zrender_lib_core_util_js__rspack_import_0.each(primaryTimeUnits, function (lowestUnit, lowestUnitIdx) {
    var upperDictOption = dictOption[lowestUnit];
    dict[lowestUnit] = {};
    var lowerTpl = null;
    for (var upperUnitIdx = lowestUnitIdx; upperUnitIdx >= 0; upperUnitIdx--) {
      var upperUnit = primaryTimeUnits[upperUnitIdx];
      var upperDictItemOption = zrender_lib_core_util_js__rspack_import_0.isObject(upperDictOption) && !zrender_lib_core_util_js__rspack_import_0.isArray(upperDictOption) ? upperDictOption[upperUnit] : upperDictOption;
      var tplArr = void 0;
      if (zrender_lib_core_util_js__rspack_import_0.isArray(upperDictItemOption)) {
        tplArr = upperDictItemOption.slice();
        lowerTpl = tplArr[0] || '';
      } else if (zrender_lib_core_util_js__rspack_import_0.isString(upperDictItemOption)) {
        lowerTpl = upperDictItemOption;
        tplArr = [lowerTpl];
      } else {
        if (lowerTpl == null) {
          lowerTpl = defaultFormatterSeed[lowestUnit];
        }
        // Generate the dict by the rule as follows:
        // If the user specify (or by default):
        //  {formatter: {
        //      year: '{yyyy}',
        //      month: '{MMM}',
        //      day: '{d}',
        //      ...
        //  }}
        // Concat them to make the final dictionary:
        //  {formatter: {
        //      year: {year: ['{yyyy}']},
        //      month: {year: ['{yyyy} {MMM}'], month: ['{MMM}']},
        //      day: {year: ['{yyyy} {MMM} {d}'], month: ['{MMM} {d}'], day: ['{d}']}
        //      ...
        //  }}
        // And then add `{primary|...}` to each array if from default template.
        // This strategy is convinient for user configurating and works for most cases.
        // If bad cases encountered, users can specify the entire dictionary themselves
        // instead of going through this logic.
        else if (!primaryTimeUnitFormatterMatchers[upperUnit].test(lowerTpl)) {
          lowerTpl = dict[upperUnit][upperUnit][0] + " " + lowerTpl;
        }
        tplArr = [lowerTpl];
        if (canAddHighlight) {
          tplArr[1] = "{primary|" + lowerTpl + "}";
        }
      }
      dict[lowestUnit][upperUnit] = tplArr;
    }
  });
  return dict;
}
function pad(str, len) {
  str += '';
  return '0000'.substr(0, len - str.length) + str;
}
function getPrimaryTimeUnit(timeUnit) {
  switch (timeUnit) {
    case 'half-year':
    case 'quarter':
      return 'month';
    case 'week':
    case 'half-week':
      return 'day';
    case 'half-day':
    case 'quarter-day':
      return 'hour';
    default:
      // year, minutes, second, milliseconds
      return timeUnit;
  }
}
function isPrimaryTimeUnit(timeUnit) {
  return timeUnit === getPrimaryTimeUnit(timeUnit);
}
function getDefaultFormatPrecisionOfInterval(timeUnit) {
  switch (timeUnit) {
    case 'year':
    case 'month':
      return 'day';
    case 'millisecond':
      return 'millisecond';
    default:
      // Also for day, hour, minute, second
      return 'second';
  }
}
function format(
// Note: The result based on `isUTC` are totally different, which can not be just simply
// substituted by the result without `isUTC`. So we make the param `isUTC` mandatory.
time, template, isUTC, lang) {
  var date = _number_js__rspack_import_1.parseDate(time);
  var y = date[fullYearGetterName(isUTC)]();
  var M = date[monthGetterName(isUTC)]() + 1;
  var q = Math.floor((M - 1) / 3) + 1;
  var d = date[dateGetterName(isUTC)]();
  var e = date['get' + (isUTC ? 'UTC' : '') + 'Day']();
  var H = date[hoursGetterName(isUTC)]();
  var h = (H - 1) % 12 + 1;
  var m = date[minutesGetterName(isUTC)]();
  var s = date[secondsGetterName(isUTC)]();
  var S = date[millisecondsGetterName(isUTC)]();
  var a = H >= 12 ? 'pm' : 'am';
  var A = a.toUpperCase();
  var localeModel = lang instanceof _model_Model_js__rspack_import_2["default"] ? lang : (0,_core_locale_js__rspack_import_3.getLocaleModel)(lang || _core_locale_js__rspack_import_3.SYSTEM_LANG) || (0,_core_locale_js__rspack_import_3.getDefaultLocaleModel)();
  var timeModel = localeModel.getModel('time');
  var month = timeModel.get('month');
  var monthAbbr = timeModel.get('monthAbbr');
  var dayOfWeek = timeModel.get('dayOfWeek');
  var dayOfWeekAbbr = timeModel.get('dayOfWeekAbbr');
  return (template || '').replace(/{a}/g, a + '').replace(/{A}/g, A + '').replace(/{yyyy}/g, y + '').replace(/{yy}/g, pad(y % 100 + '', 2)).replace(/{Q}/g, q + '').replace(/{MMMM}/g, month[M - 1]).replace(/{MMM}/g, monthAbbr[M - 1]).replace(/{MM}/g, pad(M, 2)).replace(/{M}/g, M + '').replace(/{dd}/g, pad(d, 2)).replace(/{d}/g, d + '').replace(/{eeee}/g, dayOfWeek[e]).replace(/{ee}/g, dayOfWeekAbbr[e]).replace(/{e}/g, e + '').replace(/{HH}/g, pad(H, 2)).replace(/{H}/g, H + '').replace(/{hh}/g, pad(h + '', 2)).replace(/{h}/g, h + '').replace(/{mm}/g, pad(m, 2)).replace(/{m}/g, m + '').replace(/{ss}/g, pad(s, 2)).replace(/{s}/g, s + '').replace(/{SSS}/g, pad(S, 3)).replace(/{S}/g, S + '');
}
function leveledFormat(tick, idx, formatter, lang, isUTC) {
  var template = null;
  if (zrender_lib_core_util_js__rspack_import_0.isString(formatter)) {
    // Single formatter for all units at all levels
    template = formatter;
  } else if (zrender_lib_core_util_js__rspack_import_0.isFunction(formatter)) {
    var extra = {
      time: tick.time,
      level: tick.time ? tick.time.level : 0
    };
    var scaleBreakHelper = (0,_scale_break_js__rspack_import_4.getScaleBreakHelper)();
    if (scaleBreakHelper) {
      scaleBreakHelper.makeAxisLabelFormatterParamBreak(extra, tick["break"]);
    }
    template = formatter(tick.value, idx, extra);
  } else {
    var tickTime = tick.time;
    if (tickTime) {
      var leveledTplArr = formatter[tickTime.lowerTimeUnit][tickTime.upperTimeUnit];
      template = leveledTplArr[Math.min(tickTime.level, leveledTplArr.length - 1)] || '';
    } else {
      // tick may be from customTicks or timeline therefore no tick.time.
      var unit = getUnitFromValue(tick.value, isUTC);
      template = formatter[unit][unit][0];
    }
  }
  return format(new Date(tick.value), template, isUTC, lang);
}
function getUnitFromValue(value, isUTC) {
  var date = _number_js__rspack_import_1.parseDate(value);
  var M = date[monthGetterName(isUTC)]() + 1;
  var d = date[dateGetterName(isUTC)]();
  var h = date[hoursGetterName(isUTC)]();
  var m = date[minutesGetterName(isUTC)]();
  var s = date[secondsGetterName(isUTC)]();
  var S = date[millisecondsGetterName(isUTC)]();
  var isSecond = S === 0;
  var isMinute = isSecond && s === 0;
  var isHour = isMinute && m === 0;
  var isDay = isHour && h === 0;
  var isMonth = isDay && d === 1;
  var isYear = isMonth && M === 1;
  if (isYear) {
    return 'year';
  } else if (isMonth) {
    return 'month';
  } else if (isDay) {
    return 'day';
  } else if (isHour) {
    return 'hour';
  } else if (isMinute) {
    return 'minute';
  } else if (isSecond) {
    return 'second';
  } else {
    return 'millisecond';
  }
}
// export function getUnitValue(
//     value: number | Date,
//     unit: TimeUnit,
//     isUTC: boolean
// ) : number {
//     const date = zrUtil.isNumber(value)
//         ? numberUtil.parseDate(value)
//         : value;
//     unit = unit || getUnitFromValue(value, isUTC);
//     switch (unit) {
//         case 'year':
//             return date[fullYearGetterName(isUTC)]();
//         case 'half-year':
//             return date[monthGetterName(isUTC)]() >= 6 ? 1 : 0;
//         case 'quarter':
//             return Math.floor((date[monthGetterName(isUTC)]() + 1) / 4);
//         case 'month':
//             return date[monthGetterName(isUTC)]();
//         case 'day':
//             return date[dateGetterName(isUTC)]();
//         case 'half-day':
//             return date[hoursGetterName(isUTC)]() / 24;
//         case 'hour':
//             return date[hoursGetterName(isUTC)]();
//         case 'minute':
//             return date[minutesGetterName(isUTC)]();
//         case 'second':
//             return date[secondsGetterName(isUTC)]();
//         case 'millisecond':
//             return date[millisecondsGetterName(isUTC)]();
//     }
// }
/**
 * e.g.,
 * If timeUnit is 'year', return the Jan 1st 00:00:00 000 of that year.
 * If timeUnit is 'day', return the 00:00:00 000 of that day.
 *
 * @return The input date.
 */
function roundTime(date, timeUnit, isUTC) {
  switch (timeUnit) {
    case 'year':
      date[monthSetterName(isUTC)](0);
    case 'month':
      date[dateSetterName(isUTC)](1);
    case 'day':
      date[hoursSetterName(isUTC)](0);
    case 'hour':
      date[minutesSetterName(isUTC)](0);
    case 'minute':
      date[secondsSetterName(isUTC)](0);
    case 'second':
      date[millisecondsSetterName(isUTC)](0);
  }
  return date;
}
function fullYearGetterName(isUTC) {
  return isUTC ? 'getUTCFullYear' : 'getFullYear';
}
function monthGetterName(isUTC) {
  return isUTC ? 'getUTCMonth' : 'getMonth';
}
function dateGetterName(isUTC) {
  return isUTC ? 'getUTCDate' : 'getDate';
}
function hoursGetterName(isUTC) {
  return isUTC ? 'getUTCHours' : 'getHours';
}
function minutesGetterName(isUTC) {
  return isUTC ? 'getUTCMinutes' : 'getMinutes';
}
function secondsGetterName(isUTC) {
  return isUTC ? 'getUTCSeconds' : 'getSeconds';
}
function millisecondsGetterName(isUTC) {
  return isUTC ? 'getUTCMilliseconds' : 'getMilliseconds';
}
function fullYearSetterName(isUTC) {
  return isUTC ? 'setUTCFullYear' : 'setFullYear';
}
function monthSetterName(isUTC) {
  return isUTC ? 'setUTCMonth' : 'setMonth';
}
function dateSetterName(isUTC) {
  return isUTC ? 'setUTCDate' : 'setDate';
}
function hoursSetterName(isUTC) {
  return isUTC ? 'setUTCHours' : 'setHours';
}
function minutesSetterName(isUTC) {
  return isUTC ? 'setUTCMinutes' : 'setMinutes';
}
function secondsSetterName(isUTC) {
  return isUTC ? 'setUTCSeconds' : 'setSeconds';
}
function millisecondsSetterName(isUTC) {
  return isUTC ? 'setUTCMilliseconds' : 'setMilliseconds';
}
__webpack_require__.d(__webpack_exports__, {
}, {
  ONE_DAY: ONE_DAY,
  ONE_HOUR: ONE_HOUR,
  ONE_MINUTE: ONE_MINUTE,
  ONE_SECOND: ONE_SECOND,
  ONE_YEAR: ONE_YEAR,
  dateGetterName: dateGetterName,
  dateSetterName: dateSetterName,
  format: format,
  fullLeveledFormatter: fullLeveledFormatter,
  fullYearGetterName: fullYearGetterName,
  fullYearSetterName: fullYearSetterName,
  getDefaultFormatPrecisionOfInterval: getDefaultFormatPrecisionOfInterval,
  getPrimaryTimeUnit: getPrimaryTimeUnit,
  getUnitFromValue: getUnitFromValue,
  hoursGetterName: hoursGetterName,
  hoursSetterName: hoursSetterName,
  isPrimaryTimeUnit: isPrimaryTimeUnit,
  leveledFormat: leveledFormat,
  millisecondsGetterName: millisecondsGetterName,
  millisecondsSetterName: millisecondsSetterName,
  minutesGetterName: minutesGetterName,
  minutesSetterName: minutesSetterName,
  monthGetterName: monthGetterName,
  monthSetterName: monthSetterName,
  pad: pad,
  parseTimeAxisLabelFormatter: parseTimeAxisLabelFormatter,
  primaryTimeUnits: primaryTimeUnits,
  roundTime: roundTime,
  secondsGetterName: secondsGetterName,
  secondsSetterName: secondsSetterName,
  timeUnits: timeUnits
});


}),
40333: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var zrender_lib_core_util_js__rspack_import_0 = __webpack_require__(75275);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

var UNDEFINED_STR = 'undefined';
var COMPONENT_MAIN_TYPE_SERIES = 'series';
;
;
var VISUAL_DIMENSIONS = (0,zrender_lib_core_util_js__rspack_import_0.createHashMap)(['tooltip', 'label', 'itemName', 'itemId', 'itemGroupId', 'itemChildGroupId', 'seriesName']);
var SOURCE_FORMAT_ORIGINAL = 'original';
var SOURCE_FORMAT_ARRAY_ROWS = 'arrayRows';
var SOURCE_FORMAT_OBJECT_ROWS = 'objectRows';
var SOURCE_FORMAT_KEYED_COLUMNS = 'keyedColumns';
var SOURCE_FORMAT_TYPED_ARRAY = 'typedArray';
var SOURCE_FORMAT_UNKNOWN = 'unknown';
var SERIES_LAYOUT_BY_COLUMN = 'column';
var SERIES_LAYOUT_BY_ROW = 'row';
;
;
;
;
var ROAM_ACTION_TYPE_SUFFIX = 'Roam';
__webpack_require__.d(__webpack_exports__, {
}, {
  COMPONENT_MAIN_TYPE_SERIES: COMPONENT_MAIN_TYPE_SERIES,
  ROAM_ACTION_TYPE_SUFFIX: ROAM_ACTION_TYPE_SUFFIX,
  SERIES_LAYOUT_BY_COLUMN: SERIES_LAYOUT_BY_COLUMN,
  SERIES_LAYOUT_BY_ROW: SERIES_LAYOUT_BY_ROW,
  SOURCE_FORMAT_ARRAY_ROWS: SOURCE_FORMAT_ARRAY_ROWS,
  SOURCE_FORMAT_KEYED_COLUMNS: SOURCE_FORMAT_KEYED_COLUMNS,
  SOURCE_FORMAT_OBJECT_ROWS: SOURCE_FORMAT_OBJECT_ROWS,
  SOURCE_FORMAT_ORIGINAL: SOURCE_FORMAT_ORIGINAL,
  SOURCE_FORMAT_TYPED_ARRAY: SOURCE_FORMAT_TYPED_ARRAY,
  SOURCE_FORMAT_UNKNOWN: SOURCE_FORMAT_UNKNOWN,
  UNDEFINED_STR: UNDEFINED_STR,
  VISUAL_DIMENSIONS: VISUAL_DIMENSIONS
});


}),
66827: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var _types_js__rspack_import_0 = __webpack_require__(40333);
/* import */ var _number_js__rspack_import_1 = __webpack_require__(46823);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/




/* global Int8Array, Int16Array, Int32Array, Uint8Array, Uint16Array, Uint32Array,
   Uint8ClampedArray, Float32Array, Float64Array */
var Int8ArrayCtor = typeof Int8Array !== _types_js__rspack_import_0.UNDEFINED_STR ? Int8Array : undefined;
var Int16ArrayCtor = typeof Int16Array !== _types_js__rspack_import_0.UNDEFINED_STR ? Int16Array : undefined;
var Int32ArrayCtor = typeof Int32Array !== _types_js__rspack_import_0.UNDEFINED_STR ? Int32Array : undefined;
var Uint8ArrayCtor = typeof Uint8Array !== _types_js__rspack_import_0.UNDEFINED_STR ? Uint8Array : undefined;
var Uint16ArrayCtor = typeof Uint16Array !== _types_js__rspack_import_0.UNDEFINED_STR ? Uint16Array : undefined;
var Uint32ArrayCtor = typeof Uint32Array !== _types_js__rspack_import_0.UNDEFINED_STR ? Uint32Array : undefined;
var Uint8ClampedArrayCtor = typeof Uint8ClampedArray !== _types_js__rspack_import_0.UNDEFINED_STR ? Uint8ClampedArray : undefined;
var Float32ArrayCtor = typeof Float32Array !== _types_js__rspack_import_0.UNDEFINED_STR ? Float32Array : undefined;
var Float64ArrayCtor = typeof Float64Array !== _types_js__rspack_import_0.UNDEFINED_STR ? Float64Array : undefined;
function createFloat32Array(capacity) {
  return tryEnsureTypedArray({
    ctor: Float32ArrayCtor
  }, capacity).arr;
}
function tryEnsureTypedArray(tyArr,
// Can add more types if needed.
// NOTICE: Callers need to manage data length themselves.
// Do not consider `capacity` as the data length.
capacity) {
  if (false) {}
  var existingArr = tyArr.arr;
  var ctor = tyArr.ctor;
  if (capacity > _number_js__rspack_import_1.MAX_SAFE_INTEGER) {
    capacity = _number_js__rspack_import_1.MAX_SAFE_INTEGER;
  }
  if (!existingArr || tyArr.typed && existingArr.length < capacity) {
    var nextArr = void 0;
    if (ctor) {
      try {
        // A large contiguous memory allocation may cause OOM.
        nextArr = new ctor(capacity);
        tyArr.typed = true;
        existingArr && nextArr.set(existingArr);
      } catch (e) {
        if (false) {}
      }
    }
    if (!nextArr) {
      nextArr = [];
      tyArr.typed = false;
      if (existingArr) {
        for (var i = 0, len = existingArr.length; i < len; i++) {
          nextArr[i] = existingArr[i];
        }
      }
    }
    tyArr.arr = nextArr;
  }
  return tyArr;
}
__webpack_require__.d(__webpack_exports__, {
}, {
  Float32ArrayCtor: Float32ArrayCtor,
  Float64ArrayCtor: Float64ArrayCtor,
  Int16ArrayCtor: Int16ArrayCtor,
  Int32ArrayCtor: Int32ArrayCtor,
  Int8ArrayCtor: Int8ArrayCtor,
  Uint16ArrayCtor: Uint16ArrayCtor,
  Uint32ArrayCtor: Uint32ArrayCtor,
  Uint8ArrayCtor: Uint8ArrayCtor,
  Uint8ClampedArrayCtor: Uint8ClampedArrayCtor,
  createFloat32Array: createFloat32Array,
  tryEnsureTypedArray: tryEnsureTypedArray
});


}),
3861: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var zrender_lib_core_util_js__rspack_import_7 = __webpack_require__(75275);
/* import */ var zrender_lib_graphic_Group_js__rspack_import_2 = __webpack_require__(80111);
/* import */ var _util_component_js__rspack_import_3 = __webpack_require__(7479);
/* import */ var _util_clazz_js__rspack_import_8 = __webpack_require__(41874);
/* import */ var _util_model_js__rspack_import_0 = __webpack_require__(53781);
/* import */ var _util_states_js__rspack_import_6 = __webpack_require__(71900);
/* import */ var _core_task_js__rspack_import_4 = __webpack_require__(76258);
/* import */ var _chart_helper_createRenderPlanner_js__rspack_import_1 = __webpack_require__(30961);
/* import */ var _util_graphic_js__rspack_import_5 = __webpack_require__(90088);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/










var inner = _util_model_js__rspack_import_0.makeInner();
var renderPlanner = (0,_chart_helper_createRenderPlanner_js__rspack_import_1["default"])();
var ChartView = /** @class */function () {
  function ChartView() {
    this.group = new zrender_lib_graphic_Group_js__rspack_import_2["default"]();
    this.uid = _util_component_js__rspack_import_3.getUID('viewChart');
    this.renderTask = (0,_core_task_js__rspack_import_4.createTask)({
      plan: renderTaskPlan,
      reset: renderTaskReset
    });
    this.renderTask.context = {
      view: this
    };
  }
  ChartView.prototype.init = function (ecModel, api) {};
  ChartView.prototype.render = function (seriesModel, ecModel, api, payload) {
    if (false) {}
  };
  /**
   * Highlight series or specified data item.
   */
  ChartView.prototype.highlight = function (seriesModel, ecModel, api, payload) {
    var data = seriesModel.getData(payload && payload.dataType);
    if (!data) {
      if (false) {}
      return;
    }
    toggleHighlight(data, payload, 'emphasis');
  };
  /**
   * Downplay series or specified data item.
   */
  ChartView.prototype.downplay = function (seriesModel, ecModel, api, payload) {
    var data = seriesModel.getData(payload && payload.dataType);
    if (!data) {
      if (false) {}
      return;
    }
    toggleHighlight(data, payload, 'normal');
  };
  /**
   * `remove` only occurs when series is filtered out, typically by legend.
   * And theirafter the view can only be rendered again via
   * `ChartView['render']` or `ChartView['incrementalPrepareRender']`.
   */
  ChartView.prototype.remove = function (ecModel, api) {
    this.group.removeAll();
  };
  /**
   * Dispose self.
   */
  ChartView.prototype.dispose = function (ecModel, api) {};
  ChartView.prototype.updateView = function (seriesModel, ecModel, api, payload) {
    this.render(seriesModel, ecModel, api, payload);
  };
  // FIXME never used?
  // updateLayout(seriesModel: SeriesModel, ecModel: GlobalModel, api: ExtensionAPI, payload: Payload): void {
  //     this.render(seriesModel, ecModel, api, payload);
  // }
  // FIXME never used?
  ChartView.prototype.updateVisual = function (seriesModel, ecModel, api, payload) {
    this.render(seriesModel, ecModel, api, payload);
  };
  /**
   * Traverse the new rendered elements.
   *
   * It will traverse the new added element in progressive rendering.
   * And traverse all in normal rendering.
   */
  ChartView.prototype.eachRendered = function (cb) {
    (0,_util_graphic_js__rspack_import_5.traverseElements)(this.group, cb);
  };
  ChartView.markUpdateMethod = function (payload, methodName) {
    inner(payload).updateMethod = methodName;
  };
  ChartView.protoInitialize = function () {
    var proto = ChartView.prototype;
    proto.type = 'chart';
  }();
  return ChartView;
}();
;
/**
 * Set state of single element
 */
function elSetState(el, state, highlightDigit) {
  if (el && (0,_util_states_js__rspack_import_6.isHighDownDispatcher)(el)) {
    (state === 'emphasis' ? _util_states_js__rspack_import_6.enterEmphasis : _util_states_js__rspack_import_6.leaveEmphasis)(el, highlightDigit);
  }
}
function toggleHighlight(data, payload, state) {
  var dataIndex = _util_model_js__rspack_import_0.queryDataIndex(data, payload);
  var highlightDigit = payload && payload.highlightKey != null ? (0,_util_states_js__rspack_import_6.getHighlightDigit)(payload.highlightKey) : null;
  if (dataIndex != null) {
    (0,zrender_lib_core_util_js__rspack_import_7.each)(_util_model_js__rspack_import_0.normalizeToArray(dataIndex), function (dataIdx) {
      elSetState(data.getItemGraphicEl(dataIdx), state, highlightDigit);
    });
  } else {
    // In progressive mode, `data._graphicEls` has typically no items,
    // thereby skipping this hover style changing.
    // PENDING: more robust approaches?
    data.eachItemGraphicEl(function (el) {
      elSetState(el, state, highlightDigit);
    });
  }
}
_util_clazz_js__rspack_import_8.enableClassExtend(ChartView, ['dispose']);
_util_clazz_js__rspack_import_8.enableClassManagement(ChartView);
function renderTaskPlan(context) {
  return renderPlanner(context.model);
}
function renderTaskReset(context) {
  var seriesModel = context.model;
  var ecModel = context.ecModel;
  var api = context.api;
  var payload = context.payload;
  // FIXME: remove updateView updateVisual
  var progressiveRender = seriesModel.pipelineContext.progressiveRender;
  var view = context.view;
  var updateMethod = payload && inner(payload).updateMethod;
  var methodName = progressiveRender ? 'incrementalPrepareRender' : updateMethod && view[updateMethod] ? updateMethod
  // `appendData` is also supported when data amount
  // is less than progressive threshold.
  : 'render';
  if (methodName !== 'render') {
    view[methodName](seriesModel, ecModel, api, payload);
  }
  return progressMethodMap[methodName];
}
var progressMethodMap = {
  incrementalPrepareRender: {
    progress: function (params, context) {
      context.view.incrementalRender(params, context.model, context.ecModel, context.api, context.payload);
    }
  },
  render: {
    // Put view.render in `progress` to support appendData. But in this case
    // view.render should not be called in reset, otherwise it will be called
    // twise. Use `forceFirstProgress` to make sure that view.render is called
    // in any cases.
    forceFirstProgress: true,
    progress: function (params, context) {
      context.view.render(context.model, context.ecModel, context.api, context.payload);
    }
  }
};
/* export default */ __webpack_exports__["default"] = (ChartView);

}),
80734: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var zrender_lib_graphic_Group_js__rspack_import_0 = __webpack_require__(80111);
/* import */ var _util_component_js__rspack_import_1 = __webpack_require__(7479);
/* import */ var _util_clazz_js__rspack_import_2 = __webpack_require__(41874);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/



var ComponentView = /** @class */function () {
  function ComponentView() {
    this.group = new zrender_lib_graphic_Group_js__rspack_import_0["default"]();
    this.uid = _util_component_js__rspack_import_1.getUID('viewComponent');
  }
  ComponentView.prototype.init = function (ecModel, api) {};
  ComponentView.prototype.render = function (model, ecModel, api, payload) {};
  ComponentView.prototype.dispose = function (ecModel, api) {};
  ComponentView.prototype.updateView = function (model, ecModel, api, payload) {
    // Do nothing;
  };
  ComponentView.prototype.updateLayout = function (model, ecModel, api, payload) {
    // Do nothing;
  };
  ComponentView.prototype.updateVisual = function (model, ecModel, api, payload) {
    // Do nothing;
  };
  /**
   * Hook for toggle blur target series.
   * Can be used in marker for blur or leave blur the markers
   */
  ComponentView.prototype.toggleBlurSeries = function (seriesModels, isBlur, ecModel) {
    // Do nothing;
  };
  /**
   * Traverse the new rendered elements.
   *
   * It will traverse the new added element in progressive rendering.
   * And traverse all in normal rendering.
   */
  ComponentView.prototype.eachRendered = function (cb) {
    var group = this.group;
    if (group) {
      group.traverse(cb);
    }
  };
  return ComponentView;
}();
;
_util_clazz_js__rspack_import_2.enableClassExtend(ComponentView);
_util_clazz_js__rspack_import_2.enableClassManagement(ComponentView);
/* export default */ __webpack_exports__["default"] = (ComponentView);

}),
98374: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/
/**
 * LegendVisualProvider is an bridge that pick encoded color from data and
 * provide to the legend component.
 */
var LegendVisualProvider = /** @class */function () {
  function LegendVisualProvider(
  // Function to get data after filtered. It stores all the encoding info
  getDataWithEncodedVisual,
  // Function to get raw data before filtered.
  getRawData) {
    this._getDataWithEncodedVisual = getDataWithEncodedVisual;
    this._getRawData = getRawData;
  }
  LegendVisualProvider.prototype.getAllNames = function () {
    var rawData = this._getRawData();
    // We find the name from the raw data. In case it's filtered by the legend component.
    // Normally, the name can be found in rawData, but can't be found in filtered data will display as gray.
    return rawData.mapArray(rawData.getName);
  };
  LegendVisualProvider.prototype.containName = function (name) {
    var rawData = this._getRawData();
    return rawData.indexOfName(name) >= 0;
  };
  LegendVisualProvider.prototype.indexOfName = function (name) {
    // Only get data when necessary.
    // Because LegendVisualProvider constructor may be new in the stage that data is not prepared yet.
    // Invoking Series#getData immediately will throw an error.
    var dataWithEncodedVisual = this._getDataWithEncodedVisual();
    return dataWithEncodedVisual.indexOfName(name);
  };
  LegendVisualProvider.prototype.getItemVisual = function (dataIndex, key) {
    // Get encoded visual properties from final filtered data.
    var dataWithEncodedVisual = this._getDataWithEncodedVisual();
    return dataWithEncodedVisual.getItemVisual(dataIndex, key);
  };
  return LegendVisualProvider;
}();
/* export default */ __webpack_exports__["default"] = (LegendVisualProvider);

}),
28338: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var zrender_lib_core_util_js__rspack_import_0 = __webpack_require__(75275);
/* import */ var zrender_lib_tool_color_js__rspack_import_1 = __webpack_require__(47881);
/* import */ var _util_number_js__rspack_import_2 = __webpack_require__(46823);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/




var each = zrender_lib_core_util_js__rspack_import_0.each;
var isObject = zrender_lib_core_util_js__rspack_import_0.isObject;
var CATEGORY_DEFAULT_VISUAL_INDEX = -1;
var VisualMapping = /** @class */function () {
  function VisualMapping(option) {
    var mappingMethod = option.mappingMethod;
    var visualType = option.type;
    var thisOption = this.option = zrender_lib_core_util_js__rspack_import_0.clone(option);
    this.type = visualType;
    this.mappingMethod = mappingMethod;
    this._normalizeData = normalizers[mappingMethod];
    var visualHandler = VisualMapping.visualHandlers[visualType];
    this.applyVisual = visualHandler.applyVisual;
    this.getColorMapper = visualHandler.getColorMapper;
    this._normalizedToVisual = visualHandler._normalizedToVisual[mappingMethod];
    if (mappingMethod === 'piecewise') {
      normalizeVisualRange(thisOption);
      preprocessForPiecewise(thisOption);
    } else if (mappingMethod === 'category') {
      thisOption.categories ? preprocessForSpecifiedCategory(thisOption)
      // categories is ordinal when thisOption.categories not specified,
      // which need no more preprocess except normalize visual.
      : normalizeVisualRange(thisOption, true);
    } else {
      // mappingMethod === 'linear' or 'fixed'
      zrender_lib_core_util_js__rspack_import_0.assert(mappingMethod !== 'linear' || thisOption.dataExtent);
      normalizeVisualRange(thisOption);
    }
  }
  VisualMapping.prototype.mapValueToVisual = function (value) {
    var normalized = this._normalizeData(value);
    return this._normalizedToVisual(normalized, value);
  };
  VisualMapping.prototype.getNormalizer = function () {
    return zrender_lib_core_util_js__rspack_import_0.bind(this._normalizeData, this);
  };
  /**
   * List available visual types.
   *
   * @public
   * @return {Array.<string>}
   */
  VisualMapping.listVisualTypes = function () {
    return zrender_lib_core_util_js__rspack_import_0.keys(VisualMapping.visualHandlers);
  };
  // /**
  //  * @public
  //  */
  // static addVisualHandler(name, handler) {
  //     visualHandlers[name] = handler;
  // }
  /**
   * @public
   */
  VisualMapping.isValidType = function (visualType) {
    return VisualMapping.visualHandlers.hasOwnProperty(visualType);
  };
  /**
   * Convenient method.
   * Visual can be Object or Array or primary type.
   */
  VisualMapping.eachVisual = function (visual, callback, context) {
    if (zrender_lib_core_util_js__rspack_import_0.isObject(visual)) {
      zrender_lib_core_util_js__rspack_import_0.each(visual, callback, context);
    } else {
      callback.call(context, visual);
    }
  };
  VisualMapping.mapVisual = function (visual, callback, context) {
    var isPrimary;
    var newVisual = zrender_lib_core_util_js__rspack_import_0.isArray(visual) ? [] : zrender_lib_core_util_js__rspack_import_0.isObject(visual) ? {} : (isPrimary = true, null);
    VisualMapping.eachVisual(visual, function (v, key) {
      var newVal = callback.call(context, v, key);
      isPrimary ? newVisual = newVal : newVisual[key] = newVal;
    });
    return newVisual;
  };
  /**
   * Retrieve visual properties from given object.
   */
  VisualMapping.retrieveVisuals = function (obj) {
    var ret = {};
    var hasVisual;
    obj && each(VisualMapping.visualHandlers, function (h, visualType) {
      if (obj.hasOwnProperty(visualType)) {
        ret[visualType] = obj[visualType];
        hasVisual = true;
      }
    });
    return hasVisual ? ret : null;
  };
  /**
   * Give order to visual types, considering colorSaturation, colorAlpha depends on color.
   *
   * @public
   * @param {(Object|Array)} visualTypes If Object, like: {color: ..., colorSaturation: ...}
   *                                     IF Array, like: ['color', 'symbol', 'colorSaturation']
   * @return {Array.<string>} Sorted visual types.
   */
  VisualMapping.prepareVisualTypes = function (visualTypes) {
    if (zrender_lib_core_util_js__rspack_import_0.isArray(visualTypes)) {
      visualTypes = visualTypes.slice();
    } else if (isObject(visualTypes)) {
      var types_1 = [];
      each(visualTypes, function (item, type) {
        types_1.push(type);
      });
      visualTypes = types_1;
    } else {
      return [];
    }
    visualTypes.sort(function (type1, type2) {
      // color should be front of colorSaturation, colorAlpha, ...
      // symbol and symbolSize do not matter.
      return type2 === 'color' && type1 !== 'color' && type1.indexOf('color') === 0 ? 1 : -1;
    });
    return visualTypes;
  };
  /**
   * 'color', 'colorSaturation', 'colorAlpha', ... are depends on 'color'.
   * Other visuals are only depends on themself.
   */
  VisualMapping.dependsOn = function (visualType1, visualType2) {
    return visualType2 === 'color' ? !!(visualType1 && visualType1.indexOf(visualType2) === 0) : visualType1 === visualType2;
  };
  /**
   * @param value
   * @param pieceList [{value: ..., interval: [min, max]}, ...]
   *                         Always from small to big.
   * @param findClosestWhenOutside Default to be false
   * @return index
   */
  VisualMapping.findPieceIndex = function (value, pieceList, findClosestWhenOutside) {
    var possibleI;
    var abs = Infinity;
    // value has the higher priority.
    for (var i = 0, len = pieceList.length; i < len; i++) {
      var pieceValue = pieceList[i].value;
      if (pieceValue != null) {
        if (pieceValue === value
        // FIXME
        // It is supposed to compare value according to value type of dimension,
        // but currently value type can exactly be string or number.
        // Compromise for numeric-like string (like '12'), especially
        // in the case that visualMap.categories is ['22', '33'].
        || zrender_lib_core_util_js__rspack_import_0.isString(pieceValue) && pieceValue === value + '') {
          return i;
        }
        findClosestWhenOutside && updatePossible(pieceValue, i);
      }
    }
    for (var i = 0, len = pieceList.length; i < len; i++) {
      var piece = pieceList[i];
      var interval = piece.interval;
      var close_1 = piece.close;
      if (interval) {
        if (interval[0] === -Infinity) {
          if (littleThan(close_1[1], value, interval[1])) {
            return i;
          }
        } else if (interval[1] === Infinity) {
          if (littleThan(close_1[0], interval[0], value)) {
            return i;
          }
        } else if (littleThan(close_1[0], interval[0], value) && littleThan(close_1[1], value, interval[1])) {
          return i;
        }
        findClosestWhenOutside && updatePossible(interval[0], i);
        findClosestWhenOutside && updatePossible(interval[1], i);
      }
    }
    if (findClosestWhenOutside) {
      return value === Infinity ? pieceList.length - 1 : value === -Infinity ? 0 : possibleI;
    }
    function updatePossible(val, index) {
      var newAbs = Math.abs(val - value);
      if (newAbs < abs) {
        abs = newAbs;
        possibleI = index;
      }
    }
  };
  VisualMapping.visualHandlers = {
    color: {
      applyVisual: makeApplyVisual('color'),
      getColorMapper: function () {
        var thisOption = this.option;
        return zrender_lib_core_util_js__rspack_import_0.bind(thisOption.mappingMethod === 'category' ? function (value, isNormalized) {
          !isNormalized && (value = this._normalizeData(value));
          return doMapCategory.call(this, value);
        } : function (value, isNormalized, out) {
          // If output rgb array
          // which will be much faster and useful in pixel manipulation
          var returnRGBArray = !!out;
          !isNormalized && (value = this._normalizeData(value));
          out = zrender_lib_tool_color_js__rspack_import_1.fastLerp(value, thisOption.parsedVisual, out);
          return returnRGBArray ? out : zrender_lib_tool_color_js__rspack_import_1.stringify(out, 'rgba');
        }, this);
      },
      _normalizedToVisual: {
        linear: function (normalized) {
          return zrender_lib_tool_color_js__rspack_import_1.stringify(zrender_lib_tool_color_js__rspack_import_1.fastLerp(normalized, this.option.parsedVisual), 'rgba');
        },
        category: doMapCategory,
        piecewise: function (normalized, value) {
          var result = getSpecifiedVisual.call(this, value);
          if (result == null) {
            result = zrender_lib_tool_color_js__rspack_import_1.stringify(zrender_lib_tool_color_js__rspack_import_1.fastLerp(normalized, this.option.parsedVisual), 'rgba');
          }
          return result;
        },
        fixed: doMapFixed
      }
    },
    colorHue: makePartialColorVisualHandler(function (color, value) {
      return zrender_lib_tool_color_js__rspack_import_1.modifyHSL(color, value);
    }),
    colorSaturation: makePartialColorVisualHandler(function (color, value) {
      return zrender_lib_tool_color_js__rspack_import_1.modifyHSL(color, null, value);
    }),
    colorLightness: makePartialColorVisualHandler(function (color, value) {
      return zrender_lib_tool_color_js__rspack_import_1.modifyHSL(color, null, null, value);
    }),
    colorAlpha: makePartialColorVisualHandler(function (color, value) {
      return zrender_lib_tool_color_js__rspack_import_1.modifyAlpha(color, value);
    }),
    decal: {
      applyVisual: makeApplyVisual('decal'),
      _normalizedToVisual: {
        linear: null,
        category: doMapCategory,
        piecewise: null,
        fixed: null
      }
    },
    opacity: {
      applyVisual: makeApplyVisual('opacity'),
      _normalizedToVisual: createNormalizedToNumericVisual([0, 1])
    },
    liftZ: {
      applyVisual: makeApplyVisual('liftZ'),
      _normalizedToVisual: {
        linear: doMapFixed,
        category: doMapFixed,
        piecewise: doMapFixed,
        fixed: doMapFixed
      }
    },
    symbol: {
      applyVisual: function (value, getter, setter) {
        var symbolCfg = this.mapValueToVisual(value);
        setter('symbol', symbolCfg);
      },
      _normalizedToVisual: {
        linear: doMapToArray,
        category: doMapCategory,
        piecewise: function (normalized, value) {
          var result = getSpecifiedVisual.call(this, value);
          if (result == null) {
            result = doMapToArray.call(this, normalized);
          }
          return result;
        },
        fixed: doMapFixed
      }
    },
    symbolSize: {
      applyVisual: makeApplyVisual('symbolSize'),
      _normalizedToVisual: createNormalizedToNumericVisual([0, 1])
    }
  };
  return VisualMapping;
}();
function preprocessForPiecewise(thisOption) {
  var pieceList = thisOption.pieceList;
  thisOption.hasSpecialVisual = false;
  zrender_lib_core_util_js__rspack_import_0.each(pieceList, function (piece, index) {
    piece.originIndex = index;
    // piece.visual is "result visual value" but not
    // a visual range, so it does not need to be normalized.
    if (piece.visual != null) {
      thisOption.hasSpecialVisual = true;
    }
  });
}
function preprocessForSpecifiedCategory(thisOption) {
  // Hash categories.
  var categories = thisOption.categories;
  var categoryMap = thisOption.categoryMap = {};
  var visual = thisOption.visual;
  each(categories, function (cate, index) {
    categoryMap[cate] = index;
  });
  // Process visual map input.
  if (!zrender_lib_core_util_js__rspack_import_0.isArray(visual)) {
    var visualArr_1 = [];
    if (zrender_lib_core_util_js__rspack_import_0.isObject(visual)) {
      each(visual, function (v, cate) {
        var index = categoryMap[cate];
        visualArr_1[index != null ? index : CATEGORY_DEFAULT_VISUAL_INDEX] = v;
      });
    } else {
      // Is primary type, represents default visual.
      visualArr_1[CATEGORY_DEFAULT_VISUAL_INDEX] = visual;
    }
    visual = setVisualToOption(thisOption, visualArr_1);
  }
  // Remove categories that has no visual,
  // then we can mapping them to CATEGORY_DEFAULT_VISUAL_INDEX.
  for (var i = categories.length - 1; i >= 0; i--) {
    if (visual[i] == null) {
      delete categoryMap[categories[i]];
      categories.pop();
    }
  }
}
function normalizeVisualRange(thisOption, isCategory) {
  var visual = thisOption.visual;
  var visualArr = [];
  if (zrender_lib_core_util_js__rspack_import_0.isObject(visual)) {
    each(visual, function (v) {
      visualArr.push(v);
    });
  } else if (visual != null) {
    visualArr.push(visual);
  }
  var doNotNeedPair = {
    color: 1,
    symbol: 1
  };
  if (!isCategory && visualArr.length === 1 && !doNotNeedPair.hasOwnProperty(thisOption.type)) {
    // Do not care visualArr.length === 0, which is illegal.
    visualArr[1] = visualArr[0];
  }
  setVisualToOption(thisOption, visualArr);
}
function makePartialColorVisualHandler(applyValue) {
  return {
    applyVisual: function (value, getter, setter) {
      // Only used in HSL
      var colorChannel = this.mapValueToVisual(value);
      // Must not be array value
      setter('color', applyValue(getter('color'), colorChannel));
    },
    _normalizedToVisual: createNormalizedToNumericVisual([0, 1])
  };
}
function doMapToArray(normalized) {
  var visual = this.option.visual;
  return visual[Math.round((0,_util_number_js__rspack_import_2.linearMap)(normalized, [0, 1], [0, visual.length - 1], true))] || {}; // TODO {}?
}
function makeApplyVisual(visualType) {
  return function (value, getter, setter) {
    setter(visualType, this.mapValueToVisual(value));
  };
}
function doMapCategory(normalized) {
  var visual = this.option.visual;
  return visual[this.option.loop && normalized !== CATEGORY_DEFAULT_VISUAL_INDEX ? normalized % visual.length : normalized];
}
function doMapFixed() {
  // visual will be convert to array.
  return this.option.visual[0];
}
/**
 * Create mapped to numeric visual
 */
function createNormalizedToNumericVisual(sourceExtent) {
  return {
    linear: function (normalized) {
      return (0,_util_number_js__rspack_import_2.linearMap)(normalized, sourceExtent, this.option.visual, true);
    },
    category: doMapCategory,
    piecewise: function (normalized, value) {
      var result = getSpecifiedVisual.call(this, value);
      if (result == null) {
        result = (0,_util_number_js__rspack_import_2.linearMap)(normalized, sourceExtent, this.option.visual, true);
      }
      return result;
    },
    fixed: doMapFixed
  };
}
function getSpecifiedVisual(value) {
  var thisOption = this.option;
  var pieceList = thisOption.pieceList;
  if (thisOption.hasSpecialVisual) {
    var pieceIndex = VisualMapping.findPieceIndex(value, pieceList);
    var piece = pieceList[pieceIndex];
    if (piece && piece.visual) {
      return piece.visual[this.type];
    }
  }
}
function setVisualToOption(thisOption, visualArr) {
  thisOption.visual = visualArr;
  if (thisOption.type === 'color') {
    thisOption.parsedVisual = zrender_lib_core_util_js__rspack_import_0.map(visualArr, function (item) {
      var color = zrender_lib_tool_color_js__rspack_import_1.parse(item);
      if (!color && "production" !== 'production') {}
      return color || [0, 0, 0, 1];
    });
  }
  return visualArr;
}
/**
 * Normalizers by mapping methods.
 */
var normalizers = {
  linear: function (value) {
    return (0,_util_number_js__rspack_import_2.linearMap)(value, this.option.dataExtent, [0, 1], true);
  },
  piecewise: function (value) {
    var pieceList = this.option.pieceList;
    var pieceIndex = VisualMapping.findPieceIndex(value, pieceList, true);
    if (pieceIndex != null) {
      return (0,_util_number_js__rspack_import_2.linearMap)(pieceIndex, [0, pieceList.length - 1], [0, 1], true);
    }
  },
  category: function (value) {
    var index = this.option.categories ? this.option.categoryMap[value] : value; // ordinal value
    return index == null ? CATEGORY_DEFAULT_VISUAL_INDEX : index;
  },
  fixed: zrender_lib_core_util_js__rspack_import_0.noop
};
function littleThan(close, a, b) {
  return close ? a <= b : a < b;
}
/* export default */ __webpack_exports__["default"] = (VisualMapping);

}),
4111: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var zrender_lib_core_util_js__rspack_import_1 = __webpack_require__(75275);
/* import */ var _util_model_js__rspack_import_0 = __webpack_require__(53781);
/* import */ var _model_mixin_palette_js__rspack_import_2 = __webpack_require__(93384);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/



var DEFAULT_OPTION = {
  label: {
    enabled: true
  },
  decal: {
    show: false
  }
};
var innerSeries = (0,_util_model_js__rspack_import_0.makeInner)();
var innerGlobal = (0,_util_model_js__rspack_import_0.makeInner)();
var ariaVisualStageHandler = (0,_util_model_js__rspack_import_0.createSimpleOverallStageHandler2)(ariaVisual);
function ariaVisual(ecModel, api) {
  var ariaModel = ecModel.getModel('aria');
  // See "area enabled" detection code in `GlobalModel.ts`.
  if (!ariaModel.get('enabled')) {
    return;
  }
  var decalPaletteScope = innerGlobal(ecModel).scope || (innerGlobal(ecModel).scope = {});
  var defaultOption = zrender_lib_core_util_js__rspack_import_1.clone(DEFAULT_OPTION);
  zrender_lib_core_util_js__rspack_import_1.merge(defaultOption.label, ecModel.getLocaleModel().get('aria'), false);
  zrender_lib_core_util_js__rspack_import_1.merge(ariaModel.option, defaultOption, false);
  setDecal();
  setLabel();
  function setDecal() {
    var decalModel = ariaModel.getModel('decal');
    var useDecal = decalModel.get('show');
    if (useDecal) {
      // Each type of series use one scope.
      // Pie and funnel are using different scopes.
      var paletteScopeGroupByType_1 = zrender_lib_core_util_js__rspack_import_1.createHashMap();
      ecModel.eachSeries(function (seriesModel) {
        if (!seriesModel.isColorBySeries()) {
          innerSeries(seriesModel).scope = paletteScopeGroupByType_1.get(seriesModel.type) || paletteScopeGroupByType_1.set(seriesModel.type, {});
        }
      });
      ecModel.eachSeries(function (seriesModel) {
        if (zrender_lib_core_util_js__rspack_import_1.isFunction(seriesModel.enableAriaDecal)) {
          // Let series define how to use decal palette on data
          seriesModel.enableAriaDecal();
          return;
        }
        var data = seriesModel.getData();
        if (!seriesModel.isColorBySeries()) {
          var dataAll_1 = seriesModel.getRawData();
          var idxMap_1 = {};
          var decalScope_1 = innerSeries(seriesModel).scope;
          data.each(function (idx) {
            var rawIdx = data.getRawIndex(idx);
            idxMap_1[rawIdx] = idx;
          });
          var dataCount_1 = dataAll_1.count();
          dataAll_1.each(function (rawIdx) {
            var idx = idxMap_1[rawIdx];
            var name = dataAll_1.getName(rawIdx) || rawIdx + '';
            var paletteDecal = (0,_model_mixin_palette_js__rspack_import_2.getDecalFromPalette)(seriesModel.ecModel, name, decalScope_1, dataCount_1);
            var specifiedDecal = data.getItemVisual(idx, 'decal');
            data.setItemVisual(idx, 'decal', mergeDecal(specifiedDecal, paletteDecal));
          });
        } else {
          var paletteDecal = (0,_model_mixin_palette_js__rspack_import_2.getDecalFromPalette)(seriesModel.ecModel, seriesModel.name, decalPaletteScope, ecModel.getSeriesCount());
          var specifiedDecal = data.getVisual('decal');
          data.setVisual('decal', mergeDecal(specifiedDecal, paletteDecal));
        }
        function mergeDecal(specifiedDecal, paletteDecal) {
          // Merge decal from palette to decal from itemStyle.
          // User do not need to specify all of the decal props.
          var resultDecal = specifiedDecal ? zrender_lib_core_util_js__rspack_import_1.extend(zrender_lib_core_util_js__rspack_import_1.extend({}, paletteDecal), specifiedDecal) : paletteDecal;
          resultDecal.dirty = true;
          return resultDecal;
        }
      });
    }
  }
  function setLabel() {
    var dom = api.getZr().dom;
    // TODO: support for SSR
    if (!dom) {
      return;
    }
    var labelLocale = ecModel.getLocaleModel().get('aria');
    var labelModel = ariaModel.getModel('label');
    labelModel.option = zrender_lib_core_util_js__rspack_import_1.defaults(labelModel.option, labelLocale);
    if (!labelModel.get('enabled')) {
      return;
    }
    dom.setAttribute('role', 'img');
    if (labelModel.get('description')) {
      dom.setAttribute('aria-label', labelModel.get('description'));
      return;
    }
    var seriesCnt = ecModel.getSeriesCount();
    var maxDataCnt = labelModel.get(['data', 'maxCount']) || 10;
    var maxSeriesCnt = labelModel.get(['series', 'maxCount']) || 10;
    var displaySeriesCnt = Math.min(seriesCnt, maxSeriesCnt);
    var ariaLabel;
    if (seriesCnt < 1) {
      // No series, no aria label
      return;
    } else {
      var title = getTitle();
      if (title) {
        var withTitle = labelModel.get(['general', 'withTitle']);
        ariaLabel = replace(withTitle, {
          title: title
        });
      } else {
        ariaLabel = labelModel.get(['general', 'withoutTitle']);
      }
      var seriesLabels_1 = [];
      var prefix = seriesCnt > 1 ? labelModel.get(['series', 'multiple', 'prefix']) : labelModel.get(['series', 'single', 'prefix']);
      ariaLabel += replace(prefix, {
        seriesCount: seriesCnt
      });
      ecModel.eachSeries(function (seriesModel, idx) {
        if (idx < displaySeriesCnt) {
          var seriesLabel = void 0;
          var seriesName = seriesModel.get('name');
          var withName = seriesName ? 'withName' : 'withoutName';
          seriesLabel = seriesCnt > 1 ? labelModel.get(['series', 'multiple', withName]) : labelModel.get(['series', 'single', withName]);
          seriesLabel = replace(seriesLabel, {
            seriesId: seriesModel.seriesIndex,
            seriesName: seriesModel.get('name'),
            seriesType: getSeriesTypeName(seriesModel.subType)
          });
          var data = seriesModel.getData();
          if (data.count() > maxDataCnt) {
            // Show part of data
            var partialLabel = labelModel.get(['data', 'partialData']);
            seriesLabel += replace(partialLabel, {
              displayCnt: maxDataCnt
            });
          } else {
            seriesLabel += labelModel.get(['data', 'allData']);
          }
          var middleSeparator_1 = labelModel.get(['data', 'separator', 'middle']);
          var endSeparator_1 = labelModel.get(['data', 'separator', 'end']);
          var excludeDimensionId_1 = labelModel.get(['data', 'excludeDimensionId']);
          var dataLabels = [];
          for (var i = 0; i < data.count(); i++) {
            if (i < maxDataCnt) {
              var name_1 = data.getName(i);
              var value = !excludeDimensionId_1 ? data.getValues(i) : zrender_lib_core_util_js__rspack_import_1.filter(data.getValues(i), function (v, j) {
                return zrender_lib_core_util_js__rspack_import_1.indexOf(excludeDimensionId_1, j) === -1;
              });
              var dataLabel = labelModel.get(['data', name_1 ? 'withName' : 'withoutName']);
              dataLabels.push(replace(dataLabel, {
                name: name_1,
                value: value.join(middleSeparator_1)
              }));
            }
          }
          seriesLabel += dataLabels.join(middleSeparator_1) + endSeparator_1;
          seriesLabels_1.push(seriesLabel);
        }
      });
      var separatorModel = labelModel.getModel(['series', 'multiple', 'separator']);
      var middleSeparator = separatorModel.get('middle');
      var endSeparator = separatorModel.get('end');
      ariaLabel += seriesLabels_1.join(middleSeparator) + endSeparator;
      dom.setAttribute('aria-label', ariaLabel);
    }
  }
  function replace(str, keyValues) {
    if (!zrender_lib_core_util_js__rspack_import_1.isString(str)) {
      return str;
    }
    var result = str;
    zrender_lib_core_util_js__rspack_import_1.each(keyValues, function (value, key) {
      result = result.replace(new RegExp('\\{\\s*' + key + '\\s*\\}', 'g'), value);
    });
    return result;
  }
  function getTitle() {
    var title = ecModel.get('title');
    if (title && title.length) {
      title = title[0];
    }
    return title && title.text;
  }
  function getSeriesTypeName(type) {
    var typeNames = ecModel.getLocaleModel().get(['series', 'typeNames']);
    return typeNames[type] || typeNames.chart;
  }
}
__webpack_require__.d(__webpack_exports__, {
}, {
  ariaVisualStageHandler: ariaVisualStageHandler
});


}),
58177: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var _util_decal_js__rspack_import_1 = __webpack_require__(65409);
/* import */ var _util_model_js__rspack_import_0 = __webpack_require__(53781);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


var decalVisualStageHandler = (0,_util_model_js__rspack_import_0.createSimpleOverallStageHandler2)(decalVisual);
function decalVisual(ecModel, api) {
  ecModel.eachRawSeries(function (seriesModel) {
    if (ecModel.isSeriesFiltered(seriesModel)) {
      return;
    }
    var data = seriesModel.getData();
    if (data.hasItemVisual()) {
      data.each(function (idx) {
        var decal = data.getItemVisual(idx, 'decal');
        if (decal) {
          var itemStyle = data.ensureUniqueItemVisual(idx, 'style');
          itemStyle.decal = (0,_util_decal_js__rspack_import_1.createOrUpdatePatternFromDecal)(decal, api);
        }
      });
    }
    var decal = data.getVisual('decal');
    if (decal) {
      var style = data.getVisual('style');
      style.decal = (0,_util_decal_js__rspack_import_1.createOrUpdatePatternFromDecal)(decal, api);
    }
  });
}
__webpack_require__.d(__webpack_exports__, {
}, {
  decalVisualStageHandler: decalVisualStageHandler
});


}),
10014: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/
function getItemVisualFromData(data, dataIndex, key) {
  switch (key) {
    case 'color':
      var style = data.getItemVisual(dataIndex, 'style');
      return style[data.getVisual('drawType')];
    case 'opacity':
      return data.getItemVisual(dataIndex, 'style').opacity;
    case 'symbol':
    case 'symbolSize':
    case 'liftZ':
      return data.getItemVisual(dataIndex, key);
    default:
      if (false) {}
  }
}
function getVisualFromData(data, key) {
  switch (key) {
    case 'color':
      var style = data.getVisual('style');
      return style[data.getVisual('drawType')];
    case 'opacity':
      return data.getVisual('style').opacity;
    case 'symbol':
    case 'symbolSize':
    case 'liftZ':
      return data.getVisual(key);
    default:
      if (false) {}
  }
}
function setItemVisualFromData(data, dataIndex, key, value) {
  switch (key) {
    case 'color':
      // Make sure not sharing style object.
      var style = data.ensureUniqueItemVisual(dataIndex, 'style');
      style[data.getVisual('drawType')] = value;
      // Mark the color has been changed, not from palette anymore
      data.setItemVisual(dataIndex, 'colorFromPalette', false);
      break;
    case 'opacity':
      data.ensureUniqueItemVisual(dataIndex, 'style').opacity = value;
      break;
    case 'symbol':
    case 'symbolSize':
    case 'liftZ':
      data.setItemVisual(dataIndex, key, value);
      break;
    default:
      if (false) {}
  }
}
__webpack_require__.d(__webpack_exports__, {
}, {
  getItemVisualFromData: getItemVisualFromData,
  getVisualFromData: getVisualFromData,
  setItemVisualFromData: setItemVisualFromData
});


}),
65545: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var zrender_lib_core_util_js__rspack_import_4 = __webpack_require__(75275);
/* import */ var _model_mixin_makeStyleMapper_js__rspack_import_1 = __webpack_require__(65381);
/* import */ var _model_mixin_itemStyle_js__rspack_import_2 = __webpack_require__(48683);
/* import */ var _model_mixin_lineStyle_js__rspack_import_3 = __webpack_require__(20408);
/* import */ var _model_Model_js__rspack_import_5 = __webpack_require__(98899);
/* import */ var _util_model_js__rspack_import_0 = __webpack_require__(53781);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/






var inner = (0,_util_model_js__rspack_import_0.makeInner)();
var defaultStyleMappers = {
  itemStyle: (0,_model_mixin_makeStyleMapper_js__rspack_import_1["default"])(_model_mixin_itemStyle_js__rspack_import_2.ITEM_STYLE_KEY_MAP, true),
  lineStyle: (0,_model_mixin_makeStyleMapper_js__rspack_import_1["default"])(_model_mixin_lineStyle_js__rspack_import_3.LINE_STYLE_KEY_MAP, true)
};
var defaultColorKey = {
  lineStyle: 'stroke',
  itemStyle: 'fill'
};
function getStyleMapper(seriesModel, stylePath) {
  var styleMapper = seriesModel.visualStyleMapper || defaultStyleMappers[stylePath];
  if (!styleMapper) {
    console.warn("Unknown style type '" + stylePath + "'.");
    return defaultStyleMappers.itemStyle;
  }
  return styleMapper;
}
function getDefaultColorKey(seriesModel, stylePath) {
  // return defaultColorKey[stylePath] ||
  var colorKey = seriesModel.visualDrawType || defaultColorKey[stylePath];
  if (!colorKey) {
    console.warn("Unknown style type '" + stylePath + "'.");
    return 'fill';
  }
  return colorKey;
}
var seriesStyleTask = {
  createOnAllSeries: true,
  performRawSeries: true,
  reset: function (seriesModel, ecModel) {
    var data = seriesModel.getData();
    var stylePath = seriesModel.visualStyleAccessPath || 'itemStyle';
    // Set in itemStyle
    var styleModel = seriesModel.getModel(stylePath);
    var getStyle = getStyleMapper(seriesModel, stylePath);
    var globalStyle = getStyle(styleModel);
    var decalOption = styleModel.getShallow('decal');
    if (decalOption) {
      data.setVisual('decal', decalOption);
      decalOption.dirty = true;
    }
    // TODO
    var colorKey = getDefaultColorKey(seriesModel, stylePath);
    var color = globalStyle[colorKey];
    // TODO style callback
    var colorCallback = (0,zrender_lib_core_util_js__rspack_import_4.isFunction)(color) ? color : null;
    var hasAutoColor = globalStyle.fill === 'auto' || globalStyle.stroke === 'auto';
    // Get from color palette by default.
    if (!globalStyle[colorKey] || colorCallback || hasAutoColor) {
      // Note: If some series has color specified (e.g., by itemStyle.color), we DO NOT
      // make it effect palette. Because some scenarios users need to make some series
      // transparent or as background, which should better not effect the palette.
      var colorPalette = seriesModel.getColorFromPalette(
      // TODO series count changed.
      seriesModel.name, null, ecModel.getSeriesCount());
      if (!globalStyle[colorKey]) {
        globalStyle[colorKey] = colorPalette;
        data.setVisual('colorFromPalette', true);
      }
      globalStyle.fill = globalStyle.fill === 'auto' || (0,zrender_lib_core_util_js__rspack_import_4.isFunction)(globalStyle.fill) ? colorPalette : globalStyle.fill;
      globalStyle.stroke = globalStyle.stroke === 'auto' || (0,zrender_lib_core_util_js__rspack_import_4.isFunction)(globalStyle.stroke) ? colorPalette : globalStyle.stroke;
    }
    data.setVisual('style', globalStyle);
    data.setVisual('drawType', colorKey);
    // Only visible series has each data be visual encoded
    if (!ecModel.isSeriesFiltered(seriesModel) && colorCallback) {
      data.setVisual('colorFromPalette', false);
      return {
        dataEach: function (data, idx) {
          var dataParams = seriesModel.getDataParams(idx);
          var itemStyle = (0,zrender_lib_core_util_js__rspack_import_4.extend)({}, globalStyle);
          itemStyle[colorKey] = colorCallback(dataParams);
          data.setItemVisual(idx, 'style', itemStyle);
        }
      };
    }
  }
};
var sharedModel = new _model_Model_js__rspack_import_5["default"]();
var dataStyleTask = {
  createOnAllSeries: true,
  reset: function (seriesModel, ecModel) {
    if (seriesModel.ignoreStyleOnData) {
      return;
    }
    var data = seriesModel.getData();
    var stylePath = seriesModel.visualStyleAccessPath || 'itemStyle';
    // Set in itemStyle
    var getStyle = getStyleMapper(seriesModel, stylePath);
    var colorKey = data.getVisual('drawType');
    return {
      dataEach: data.hasItemOption ? function (data, idx) {
        // Not use getItemModel for performance considuration
        var rawItem = data.getRawDataItem(idx);
        if (rawItem && rawItem[stylePath]) {
          sharedModel.option = rawItem[stylePath];
          var style = getStyle(sharedModel);
          var existsStyle = data.ensureUniqueItemVisual(idx, 'style');
          (0,zrender_lib_core_util_js__rspack_import_4.extend)(existsStyle, style);
          if (sharedModel.option.decal) {
            data.setItemVisual(idx, 'decal', sharedModel.option.decal);
            sharedModel.option.decal.dirty = true;
          }
          if (colorKey in style) {
            data.setItemVisual(idx, 'colorFromPalette', false);
          }
        }
      } : null
    };
  }
};
// Pick color from palette for the data which has not been set with color yet.
// Note: do not support stream rendering. No such cases yet.
var dataColorPaletteTask = {
  performRawSeries: true,
  overallReset: function (ecModel) {
    // Each type of series uses one scope.
    // Pie and funnel are using different scopes.
    var paletteScopeGroupByType = (0,zrender_lib_core_util_js__rspack_import_4.createHashMap)();
    ecModel.eachSeries(function (seriesModel) {
      if (!seriesModel.isColorBySeries()) {
        var key = seriesModel.type + '-' + seriesModel.getColorBy();
        inner(seriesModel).scope = paletteScopeGroupByType.get(key) || paletteScopeGroupByType.set(key, {});
      }
    });
    ecModel.eachSeries(function (seriesModel) {
      if (seriesModel.isColorBySeries()) {
        return;
      }
      var dataAll = seriesModel.getRawData();
      var idxMap = {};
      var data = seriesModel.getData();
      var colorScope = inner(seriesModel).scope;
      var stylePath = seriesModel.visualStyleAccessPath || 'itemStyle';
      var colorKey = getDefaultColorKey(seriesModel, stylePath);
      data.each(function (idx) {
        var rawIdx = data.getRawIndex(idx);
        idxMap[rawIdx] = idx;
      });
      // Iterate on data before filtered. To make sure color from palette can be
      // Consistent when toggling legend.
      dataAll.each(function (rawIdx) {
        var idx = idxMap[rawIdx];
        var fromPalette = data.getItemVisual(idx, 'colorFromPalette');
        // Get color from palette for each data only when the color is inherited from series color, which is
        // also picked from color palette. So following situation is not in the case:
        // 1. series.itemStyle.color is set
        // 2. color is encoded by visualMap
        if (fromPalette) {
          var itemStyle = data.ensureUniqueItemVisual(idx, 'style');
          var name_1 = dataAll.getName(rawIdx) || rawIdx + '';
          var dataCount = dataAll.count();
          itemStyle[colorKey] = seriesModel.getColorFromPalette(name_1, colorScope, dataCount);
        }
      });
    });
  }
};

__webpack_require__.d(__webpack_exports__, {
}, {
  dataColorPaletteTask: dataColorPaletteTask,
  dataStyleTask: dataStyleTask,
  seriesStyleTask: seriesStyleTask
});


}),
27658: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var zrender_lib_core_util_js__rspack_import_0 = __webpack_require__(75275);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

var SYMBOL_PROPS_WITH_CB = ['symbol', 'symbolSize', 'symbolRotate', 'symbolOffset'];
var SYMBOL_PROPS = SYMBOL_PROPS_WITH_CB.concat(['symbolKeepAspect']);
// Encoding visual for all series include which is filtered for legend drawing
var seriesSymbolTask = {
  createOnAllSeries: true,
  // For legend.
  performRawSeries: true,
  reset: function (seriesModel, ecModel) {
    var data = seriesModel.getData();
    if (seriesModel.legendIcon) {
      data.setVisual('legendIcon', seriesModel.legendIcon);
    }
    if (!seriesModel.hasSymbolVisual) {
      return;
    }
    var symbolOptions = {};
    var symbolOptionsCb = {};
    var hasCallback = false;
    for (var i = 0; i < SYMBOL_PROPS_WITH_CB.length; i++) {
      var symbolPropName = SYMBOL_PROPS_WITH_CB[i];
      var val = seriesModel.get(symbolPropName);
      if ((0,zrender_lib_core_util_js__rspack_import_0.isFunction)(val)) {
        hasCallback = true;
        symbolOptionsCb[symbolPropName] = val;
      } else {
        symbolOptions[symbolPropName] = val;
      }
    }
    symbolOptions.symbol = symbolOptions.symbol || seriesModel.defaultSymbol;
    data.setVisual((0,zrender_lib_core_util_js__rspack_import_0.extend)({
      legendIcon: seriesModel.legendIcon || symbolOptions.symbol,
      symbolKeepAspect: seriesModel.get('symbolKeepAspect')
    }, symbolOptions));
    // Only visible series has each data be visual encoded
    if (ecModel.isSeriesFiltered(seriesModel)) {
      return;
    }
    var symbolPropsCb = (0,zrender_lib_core_util_js__rspack_import_0.keys)(symbolOptionsCb);
    function dataEach(data, idx) {
      var rawValue = seriesModel.getRawValue(idx);
      var params = seriesModel.getDataParams(idx);
      for (var i = 0; i < symbolPropsCb.length; i++) {
        var symbolPropName = symbolPropsCb[i];
        data.setItemVisual(idx, symbolPropName, symbolOptionsCb[symbolPropName](rawValue, params));
      }
    }
    return {
      dataEach: hasCallback ? dataEach : null
    };
  }
};
var dataSymbolTask = {
  createOnAllSeries: true,
  // For legend.
  performRawSeries: true,
  reset: function (seriesModel, ecModel) {
    if (!seriesModel.hasSymbolVisual) {
      return;
    }
    // Only visible series has each data be visual encoded
    if (ecModel.isSeriesFiltered(seriesModel)) {
      return;
    }
    var data = seriesModel.getData();
    function dataEach(data, idx) {
      var itemModel = data.getItemModel(idx);
      for (var i = 0; i < SYMBOL_PROPS.length; i++) {
        var symbolPropName = SYMBOL_PROPS[i];
        var val = itemModel.getShallow(symbolPropName, true);
        if (val != null) {
          data.setItemVisual(idx, symbolPropName, val);
        }
      }
    }
    return {
      dataEach: data.hasItemOption ? dataEach : null
    };
  }
};

__webpack_require__.d(__webpack_exports__, {
}, {
  dataSymbolTask: dataSymbolTask,
  seriesSymbolTask: seriesSymbolTask
});


}),
5888: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var zrender_lib_core_util_js__rspack_import_0 = __webpack_require__(75275);
/* import */ var zrender_lib_tool_color_js__rspack_import_1 = __webpack_require__(47881);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


var tokens = {
  color: {},
  darkColor: {},
  size: {}
};
var color = tokens.color = {
  theme: ['#5070dd', '#b6d634', '#505372', '#ff994d', '#0ca8df', '#ffd10a', '#fb628b', '#785db0', '#3fbe95'],
  neutral00: '#fff',
  neutral05: '#f4f7fd',
  neutral10: '#e8ebf0',
  neutral15: '#dbdee4',
  neutral20: '#cfd2d7',
  neutral25: '#c3c5cb',
  neutral30: '#b7b9be',
  neutral35: '#aaacb2',
  neutral40: '#9ea0a5',
  neutral45: '#929399',
  neutral50: '#86878c',
  neutral55: '#797b7f',
  neutral60: '#6d6e73',
  neutral65: '#616266',
  neutral70: '#54555a',
  neutral75: '#48494d',
  neutral80: '#3c3c41',
  neutral85: '#303034',
  neutral90: '#232328',
  neutral95: '#17171b',
  neutral99: '#000',
  accent05: '#eff1f9',
  accent10: '#e0e4f2',
  accent15: '#d0d6ec',
  accent20: '#c0c9e6',
  accent25: '#b1bbdf',
  accent30: '#a1aed9',
  accent35: '#91a0d3',
  accent40: '#8292cc',
  accent45: '#7285c6',
  accent50: '#6578ba',
  accent55: '#5c6da9',
  accent60: '#536298',
  accent65: '#4a5787',
  accent70: '#404c76',
  accent75: '#374165',
  accent80: '#2e3654',
  accent85: '#252b43',
  accent90: '#1b2032',
  accent95: '#121521',
  transparent: 'rgba(0,0,0,0)',
  highlight: 'rgba(255,231,130,0.8)'
};
(0,zrender_lib_core_util_js__rspack_import_0.extend)(color, {
  primary: color.neutral80,
  secondary: color.neutral70,
  tertiary: color.neutral60,
  quaternary: color.neutral50,
  disabled: color.neutral20,
  border: color.neutral30,
  borderTint: color.neutral20,
  borderShade: color.neutral40,
  background: color.neutral05,
  backgroundTint: 'rgba(234,237,245,0.5)',
  backgroundTransparent: 'rgba(255,255,255,0)',
  backgroundShade: color.neutral10,
  shadow: 'rgba(0,0,0,0.2)',
  shadowTint: 'rgba(129,130,136,0.2)',
  axisLine: color.neutral70,
  axisLineTint: color.neutral40,
  axisTick: color.neutral70,
  axisTickMinor: color.neutral60,
  axisLabel: color.neutral70,
  axisSplitLine: color.neutral15,
  axisMinorSplitLine: color.neutral05
});
for (var key in color) {
  if (color.hasOwnProperty(key)) {
    var hex = color[key];
    if (key === 'theme') {
      // Don't modify theme colors.
      tokens.darkColor.theme = color.theme.slice();
    } else if (key === 'highlight') {
      tokens.darkColor.highlight = 'rgba(255,231,130,0.4)';
    } else if (key.indexOf('accent') === 0) {
      // Desaturate and lighten accent colors.
      tokens.darkColor[key] = (0,zrender_lib_tool_color_js__rspack_import_1.modifyHSL)(hex, null, function (s) {
        return s * 0.5;
      }, function (l) {
        return Math.min(1, 1.3 - l);
      });
    } else {
      tokens.darkColor[key] = (0,zrender_lib_tool_color_js__rspack_import_1.modifyHSL)(hex, null, function (s) {
        return s * 0.9;
      }, function (l) {
        return 1 - Math.pow(l, 1.5);
      });
    }
  }
}
tokens.size = {
  xxs: 2,
  xs: 5,
  s: 10,
  m: 15,
  l: 20,
  xl: 30,
  xxl: 40,
  xxxl: 50
};
/* export default */ __webpack_exports__["default"] = (tokens);

}),
48053: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var zrender_lib_core_util_js__rspack_import_0 = __webpack_require__(75275);
/* import */ var _tokens_js__rspack_import_1 = __webpack_require__(5888);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/
/**
 * @file Visual mapping.
 */


var visualDefault = {
  /**
   * @public
   */
  get: function (visualType, key, isCategory) {
    var value = zrender_lib_core_util_js__rspack_import_0.clone((defaultOption[visualType] || {})[key]);
    return isCategory ? zrender_lib_core_util_js__rspack_import_0.isArray(value) ? value[value.length - 1] : value : value;
  }
};
var defaultOption = {
  color: {
    active: ['#006edd', '#e0ffff'],
    inactive: [_tokens_js__rspack_import_1["default"].color.transparent]
  },
  colorHue: {
    active: [0, 360],
    inactive: [0, 0]
  },
  colorSaturation: {
    active: [0.3, 1],
    inactive: [0, 0]
  },
  colorLightness: {
    active: [0.9, 0.5],
    inactive: [0, 0]
  },
  colorAlpha: {
    active: [0.3, 1],
    inactive: [0, 0]
  },
  opacity: {
    active: [0.3, 1],
    inactive: [0, 0]
  },
  symbol: {
    active: ['circle', 'roundRect', 'diamond'],
    inactive: ['none']
  },
  symbolSize: {
    active: [10, 50],
    inactive: [0, 0]
  }
};
/* export default */ __webpack_exports__["default"] = (visualDefault);

}),
59829: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var zrender_lib_core_util_js__rspack_import_0 = __webpack_require__(75275);
/* import */ var _VisualMapping_js__rspack_import_1 = __webpack_require__(28338);
/* import */ var _helper_js__rspack_import_2 = __webpack_require__(10014);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/
/**
 * @file Visual solution, for consistent option specification.
 */



var each = zrender_lib_core_util_js__rspack_import_0.each;
function hasKeys(obj) {
  if (obj) {
    for (var name_1 in obj) {
      if (obj.hasOwnProperty(name_1)) {
        return true;
      }
    }
  }
}
function createVisualMappings(option, stateList, supplementVisualOption) {
  var visualMappings = {};
  each(stateList, function (state) {
    var mappings = visualMappings[state] = createMappings();
    each(option[state], function (visualData, visualType) {
      if (!_VisualMapping_js__rspack_import_1["default"].isValidType(visualType)) {
        return;
      }
      var mappingOption = {
        type: visualType,
        visual: visualData
      };
      supplementVisualOption && supplementVisualOption(mappingOption, state);
      mappings[visualType] = new _VisualMapping_js__rspack_import_1["default"](mappingOption);
      // Prepare a alpha for opacity, for some case that opacity
      // is not supported, such as rendering using gradient color.
      if (visualType === 'opacity') {
        mappingOption = zrender_lib_core_util_js__rspack_import_0.clone(mappingOption);
        mappingOption.type = 'colorAlpha';
        mappings.__hidden.__alphaForOpacity = new _VisualMapping_js__rspack_import_1["default"](mappingOption);
      }
    });
  });
  return visualMappings;
  function createMappings() {
    var Creater = function () {};
    // Make sure hidden fields will not be visited by
    // object iteration (with hasOwnProperty checking).
    Creater.prototype.__hidden = Creater.prototype;
    var obj = new Creater();
    return obj;
  }
}
function replaceVisualOption(thisOption, newOption, keys) {
  // Visual attributes merge is not supported, otherwise it
  // brings overcomplicated merge logic. See #2853. So if
  // newOption has anyone of these keys, all of these keys
  // will be reset. Otherwise, all keys remain.
  var has;
  zrender_lib_core_util_js__rspack_import_0.each(keys, function (key) {
    if (newOption.hasOwnProperty(key) && hasKeys(newOption[key])) {
      has = true;
    }
  });
  has && zrender_lib_core_util_js__rspack_import_0.each(keys, function (key) {
    if (newOption.hasOwnProperty(key) && hasKeys(newOption[key])) {
      thisOption[key] = zrender_lib_core_util_js__rspack_import_0.clone(newOption[key]);
    } else {
      delete thisOption[key];
    }
  });
}
/**
 * @param stateList
 * @param visualMappings
 * @param list
 * @param getValueState param: valueOrIndex, return: state.
 * @param scope Scope for getValueState
 * @param dimension Concrete dimension, if used.
 */
// ???! handle brush?
function applyVisual(stateList, visualMappings, data, getValueState, scope, dimension) {
  var visualTypesMap = {};
  zrender_lib_core_util_js__rspack_import_0.each(stateList, function (state) {
    var visualTypes = _VisualMapping_js__rspack_import_1["default"].prepareVisualTypes(visualMappings[state]);
    visualTypesMap[state] = visualTypes;
  });
  var dataIndex;
  function getVisual(key) {
    return (0,_helper_js__rspack_import_2.getItemVisualFromData)(data, dataIndex, key);
  }
  function setVisual(key, value) {
    (0,_helper_js__rspack_import_2.setItemVisualFromData)(data, dataIndex, key, value);
  }
  if (dimension == null) {
    data.each(eachItem);
  } else {
    data.each([dimension], eachItem);
  }
  function eachItem(valueOrIndex, index) {
    dataIndex = dimension == null ? valueOrIndex // First argument is index
    : index;
    var rawDataItem = data.getRawDataItem(dataIndex);
    // Consider performance
    // @ts-ignore
    if (rawDataItem && rawDataItem.visualMap === false) {
      return;
    }
    var valueState = getValueState.call(scope, valueOrIndex);
    var mappings = visualMappings[valueState];
    var visualTypes = visualTypesMap[valueState];
    for (var i = 0, len = visualTypes.length; i < len; i++) {
      var type = visualTypes[i];
      mappings[type] && mappings[type].applyVisual(valueOrIndex, getVisual, setVisual);
    }
  }
}
/**
 * @param data
 * @param stateList
 * @param visualMappings <state, Object.<visualType, module:echarts/visual/VisualMapping>>
 * @param getValueState param: valueOrIndex, return: state.
 * @param dim dimension or dimension index.
 */
function incrementalApplyVisual(stateList, visualMappings, getValueState, dim) {
  var visualTypesMap = {};
  zrender_lib_core_util_js__rspack_import_0.each(stateList, function (state) {
    var visualTypes = _VisualMapping_js__rspack_import_1["default"].prepareVisualTypes(visualMappings[state]);
    visualTypesMap[state] = visualTypes;
  });
  return {
    progress: function progress(params, data) {
      var dimIndex;
      if (dim != null) {
        dimIndex = data.getDimensionIndex(dim);
      }
      function getVisual(key) {
        return (0,_helper_js__rspack_import_2.getItemVisualFromData)(data, dataIndex, key);
      }
      function setVisual(key, value) {
        (0,_helper_js__rspack_import_2.setItemVisualFromData)(data, dataIndex, key, value);
      }
      var dataIndex;
      var store = data.getStore();
      while ((dataIndex = params.next()) != null) {
        var rawDataItem = data.getRawDataItem(dataIndex);
        // Consider performance
        // @ts-ignore
        if (rawDataItem && rawDataItem.visualMap === false) {
          continue;
        }
        var value = dim != null ? store.get(dimIndex, dataIndex) : dataIndex;
        var valueState = getValueState(value);
        var mappings = visualMappings[valueState];
        var visualTypes = visualTypesMap[valueState];
        for (var i = 0, len = visualTypes.length; i < len; i++) {
          var type = visualTypes[i];
          mappings[type] && mappings[type].applyVisual(value, getVisual, setVisual);
        }
      }
    }
  };
}
__webpack_require__.d(__webpack_exports__, {
}, {
  applyVisual: applyVisual,
  createVisualMappings: createVisualMappings,
  incrementalApplyVisual: incrementalApplyVisual,
  replaceVisualOption: replaceVisualOption
});


}),

}]);