"use strict";
(self["webpackChunkvue_admin_better"] = self["webpackChunkvue_admin_better"] || []).push([["4942"], {
6699: (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  addListener: function() { return addListener; },
  removeListener: function() { return removeListener; }
});
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




}),
47400: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return dataFilter; }
});

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
function dataFilter(seriesType) {
  return {
    seriesType: seriesType,
    reset: function (seriesModel, ecModel) {
      var legendModels = ecModel.findComponents({
        mainType: 'legend'
      });
      if (!legendModels || !legendModels.length) {
        return;
      }
      var data = seriesModel.getData();
      data.filterSelf(function (idx) {
        var name = data.getName(idx);
        // If in any legend component the status is not selected.
        for (var i = 0; i < legendModels.length; i++) {
          // @ts-ignore FIXME: LegendModel
          if (!legendModels[i].isSelected(name)) {
            return false;
          }
        }
        return true;
      });
    }
  };
}

}),
24488: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return dataSample; }
});
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96585);

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

var samplers = {
  average: function (frame) {
    var sum = 0;
    var count = 0;
    for (var i = 0; i < frame.length; i++) {
      if (!isNaN(frame[i])) {
        sum += frame[i];
        count++;
      }
    }
    // Return NaN if count is 0
    return count === 0 ? NaN : sum / count;
  },
  sum: function (frame) {
    var sum = 0;
    for (var i = 0; i < frame.length; i++) {
      // Ignore NaN
      sum += frame[i] || 0;
    }
    return sum;
  },
  max: function (frame) {
    var max = -Infinity;
    for (var i = 0; i < frame.length; i++) {
      frame[i] > max && (max = frame[i]);
    }
    // NaN will cause illegal axis extent.
    return isFinite(max) ? max : NaN;
  },
  min: function (frame) {
    var min = Infinity;
    for (var i = 0; i < frame.length; i++) {
      frame[i] < min && (min = frame[i]);
    }
    // NaN will cause illegal axis extent.
    return isFinite(min) ? min : NaN;
  },
  // TODO
  // Median
  nearest: function (frame) {
    return frame[0];
  }
};
var indexSampler = function (frame) {
  return Math.round(frame.length / 2);
};
function dataSample(seriesType) {
  return {
    seriesType: seriesType,
    // FIXME:TS never used, so comment it
    // modifyOutputEnd: true,
    reset: function (seriesModel, ecModel, api) {
      var data = seriesModel.getData();
      var sampling = seriesModel.get('sampling');
      var coordSys = seriesModel.coordinateSystem;
      var count = data.count();
      // Only cartesian2d support down sampling. Disable it when there is few data.
      if (count > 10 && coordSys.type === 'cartesian2d' && sampling) {
        var baseAxis = coordSys.getBaseAxis();
        var valueAxis = coordSys.getOtherAxis(baseAxis);
        var extent = baseAxis.getExtent();
        var dpr = api.getDevicePixelRatio();
        // Coordinste system has been resized
        var size = Math.abs(extent[1] - extent[0]) * (dpr || 1);
        var rate = Math.round(count / size);
        if (isFinite(rate) && rate > 1) {
          if (sampling === 'lttb') {
            seriesModel.setData(data.lttbDownSample(data.mapDimension(valueAxis.dim), 1 / rate));
          } else if (sampling === 'minmax') {
            seriesModel.setData(data.minmaxDownSample(data.mapDimension(valueAxis.dim), 1 / rate));
          }
          var sampler = void 0;
          if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isString)(sampling)) {
            sampler = samplers[sampling];
          } else if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isFunction)(sampling)) {
            sampler = sampling;
          }
          if (sampler) {
            // Only support sample the first dim mapped from value axis.
            seriesModel.setData(data.downSample(data.mapDimension(valueAxis.dim), 1 / rate, sampler, indexSampler));
          }
        }
      }
    }
  };
}

}),
63029: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return dataStack; }
});
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96585);
/* ESM import */var _util_number_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81731);

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


// (1) [Caution]: the logic is correct based on the premises:
//     data processing stage is blocked in stream.
//     See <module:echarts/stream/Scheduler#performDataProcessorTasks>
// (2) Only register once when import repeatedly.
//     Should be executed after series is filtered and before stack calculation.
function dataStack(ecModel) {
  var stackInfoMap = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.createHashMap)();
  ecModel.eachSeries(function (seriesModel) {
    var stack = seriesModel.get('stack');
    // Compatible: when `stack` is set as '', do not stack.
    if (stack) {
      var stackInfoList = stackInfoMap.get(stack) || stackInfoMap.set(stack, []);
      var data = seriesModel.getData();
      var stackInfo = {
        // Used for calculate axis extent automatically.
        // TODO: Type getCalculationInfo return more specific type?
        stackResultDimension: data.getCalculationInfo('stackResultDimension'),
        stackedOverDimension: data.getCalculationInfo('stackedOverDimension'),
        stackedDimension: data.getCalculationInfo('stackedDimension'),
        stackedByDimension: data.getCalculationInfo('stackedByDimension'),
        isStackedByIndex: data.getCalculationInfo('isStackedByIndex'),
        data: data,
        seriesModel: seriesModel
      };
      // If stacked on axis that do not support data stack.
      if (!stackInfo.stackedDimension || !(stackInfo.isStackedByIndex || stackInfo.stackedByDimension)) {
        return;
      }
      stackInfoList.length && data.setCalculationInfo('stackedOnSeries', stackInfoList[stackInfoList.length - 1].seriesModel);
      stackInfoList.push(stackInfo);
    }
  });
  stackInfoMap.each(calculateStack);
}
function calculateStack(stackInfoList) {
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each)(stackInfoList, function (targetStackInfo, idxInStack) {
    var resultVal = [];
    var resultNaN = [NaN, NaN];
    var dims = [targetStackInfo.stackResultDimension, targetStackInfo.stackedOverDimension];
    var targetData = targetStackInfo.data;
    var isStackedByIndex = targetStackInfo.isStackedByIndex;
    var stackStrategy = targetStackInfo.seriesModel.get('stackStrategy') || 'samesign';
    // Should not write on raw data, because stack series model list changes
    // depending on legend selection.
    targetData.modify(dims, function (v0, v1, dataIndex) {
      var sum = targetData.get(targetStackInfo.stackedDimension, dataIndex);
      // Consider `connectNulls` of line area, if value is NaN, stackedOver
      // should also be NaN, to draw a appropriate belt area.
      if (isNaN(sum)) {
        return resultNaN;
      }
      var byValue;
      var stackedDataRawIndex;
      if (isStackedByIndex) {
        stackedDataRawIndex = targetData.getRawIndex(dataIndex);
      } else {
        byValue = targetData.get(targetStackInfo.stackedByDimension, dataIndex);
      }
      // If stackOver is NaN, chart view will render point on value start.
      var stackedOver = NaN;
      for (var j = idxInStack - 1; j >= 0; j--) {
        var stackInfo = stackInfoList[j];
        // Has been optimized by inverted indices on `stackedByDimension`.
        if (!isStackedByIndex) {
          stackedDataRawIndex = stackInfo.data.rawIndexOf(stackInfo.stackedByDimension, byValue);
        }
        if (stackedDataRawIndex >= 0) {
          var val = stackInfo.data.getByRawIndex(stackInfo.stackResultDimension, stackedDataRawIndex);
          // Considering positive stack, negative stack and empty data
          if (stackStrategy === 'all' // single stack group
          || stackStrategy === 'positive' && val > 0 || stackStrategy === 'negative' && val < 0 || stackStrategy === 'samesign' && sum >= 0 && val > 0 // All positive stack
          || stackStrategy === 'samesign' && sum <= 0 && val < 0 // All negative stack
          ) {
            // The sum has to be very small to be affected by the
            // floating arithmetic problem. An incorrect result will probably
            // cause axis min/max to be filtered incorrectly.
            sum = (0,_util_number_js__WEBPACK_IMPORTED_MODULE_1__.addSafe)(sum, val);
            stackedOver = val;
            break;
          }
        }
      }
      resultVal[0] = sum;
      resultVal[1] = stackedOver;
      return resultVal;
    });
  });
}

}),
79743: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return negativeDataFilter; }
});
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96585);

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

function negativeDataFilter(seriesType) {
  return {
    seriesType: seriesType,
    reset: function (seriesModel, ecModel) {
      var data = seriesModel.getData();
      data.filterSelf(function (idx) {
        // handle negative value condition
        var valueDim = data.mapDimension('value');
        var curValue = data.get(valueDim, idx);
        if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isNumber)(curValue) && !isNaN(curValue) && curValue < 0) {
          return false;
        }
        return true;
      });
    }
  };
}

}),
59551: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  install: function() { return install; }
});
/* ESM import */var zrender_lib_canvas_Painter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72706);

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

function install(registers) {
  registers.registerPainter('canvas', zrender_lib_canvas_Painter_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
}

}),
62743: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  install: function() { return install; }
});
/* ESM import */var zrender_lib_svg_Painter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35988);

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

function install(registers) {
  registers.registerPainter('svg', zrender_lib_svg_Painter_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
}

}),
36700: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12012);
/* ESM import */var _util_number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81731);
/* ESM import */var _util_format_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43718);
/* ESM import */var _Scale_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47765);
/* ESM import */var _helper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72034);

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





var roundNumber = _util_number_js__WEBPACK_IMPORTED_MODULE_0__.round;
var IntervalScale = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(IntervalScale, _super);
  function IntervalScale() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = 'interval';
    // Step is calculated in adjustExtent.
    _this._interval = 0;
    _this._intervalPrecision = 2;
    return _this;
  }
  IntervalScale.prototype.parse = function (val) {
    return val;
  };
  IntervalScale.prototype.contain = function (val) {
    return _helper_js__WEBPACK_IMPORTED_MODULE_3__.contain(val, this._extent);
  };
  IntervalScale.prototype.normalize = function (val) {
    return _helper_js__WEBPACK_IMPORTED_MODULE_3__.normalize(val, this._extent);
  };
  IntervalScale.prototype.scale = function (val) {
    return _helper_js__WEBPACK_IMPORTED_MODULE_3__.scale(val, this._extent);
  };
  IntervalScale.prototype.setExtent = function (start, end) {
    var thisExtent = this._extent;
    // start,end may be a Number like '25',so...
    if (!isNaN(start)) {
      thisExtent[0] = parseFloat(start);
    }
    if (!isNaN(end)) {
      thisExtent[1] = parseFloat(end);
    }
  };
  IntervalScale.prototype.unionExtent = function (other) {
    var extent = this._extent;
    other[0] < extent[0] && (extent[0] = other[0]);
    other[1] > extent[1] && (extent[1] = other[1]);
    // unionExtent may called by it's sub classes
    this.setExtent(extent[0], extent[1]);
  };
  IntervalScale.prototype.getInterval = function () {
    return this._interval;
  };
  IntervalScale.prototype.setInterval = function (interval) {
    this._interval = interval;
    // Dropped auto calculated niceExtent and use user-set extent.
    // We assume user wants to set both interval, min, max to get a better result.
    this._niceExtent = this._extent.slice();
    this._intervalPrecision = _helper_js__WEBPACK_IMPORTED_MODULE_3__.getIntervalPrecision(interval);
  };
  /**
   * @param expandToNicedExtent Whether expand the ticks to niced extent.
   */
  IntervalScale.prototype.getTicks = function (expandToNicedExtent) {
    var interval = this._interval;
    var extent = this._extent;
    var niceTickExtent = this._niceExtent;
    var intervalPrecision = this._intervalPrecision;
    var ticks = [];
    // If interval is 0, return [];
    if (!interval) {
      return ticks;
    }
    // Consider this case: using dataZoom toolbox, zoom and zoom.
    var safeLimit = 10000;
    if (extent[0] < niceTickExtent[0]) {
      if (expandToNicedExtent) {
        ticks.push({
          value: roundNumber(niceTickExtent[0] - interval, intervalPrecision)
        });
      } else {
        ticks.push({
          value: extent[0]
        });
      }
    }
    var tick = niceTickExtent[0];
    while (tick <= niceTickExtent[1]) {
      ticks.push({
        value: tick
      });
      // Avoid rounding error
      tick = roundNumber(tick + interval, intervalPrecision);
      if (tick === ticks[ticks.length - 1].value) {
        // Consider out of safe float point, e.g.,
        // -3711126.9907707 + 2e-10 === -3711126.9907707
        break;
      }
      if (ticks.length > safeLimit) {
        return [];
      }
    }
    // Consider this case: the last item of ticks is smaller
    // than niceTickExtent[1] and niceTickExtent[1] === extent[1].
    var lastNiceTick = ticks.length ? ticks[ticks.length - 1].value : niceTickExtent[1];
    if (extent[1] > lastNiceTick) {
      if (expandToNicedExtent) {
        ticks.push({
          value: roundNumber(lastNiceTick + interval, intervalPrecision)
        });
      } else {
        ticks.push({
          value: extent[1]
        });
      }
    }
    return ticks;
  };
  IntervalScale.prototype.getMinorTicks = function (splitNumber) {
    var ticks = this.getTicks(true);
    var minorTicks = [];
    var extent = this.getExtent();
    for (var i = 1; i < ticks.length; i++) {
      var nextTick = ticks[i];
      var prevTick = ticks[i - 1];
      var count = 0;
      var minorTicksGroup = [];
      var interval = nextTick.value - prevTick.value;
      var minorInterval = interval / splitNumber;
      while (count < splitNumber - 1) {
        var minorTick = roundNumber(prevTick.value + (count + 1) * minorInterval);
        // For the first and last interval. The count may be less than splitNumber.
        if (minorTick > extent[0] && minorTick < extent[1]) {
          minorTicksGroup.push(minorTick);
        }
        count++;
      }
      minorTicks.push(minorTicksGroup);
    }
    return minorTicks;
  };
  /**
   * @param opt.precision If 'auto', use nice presision.
   * @param opt.pad returns 1.50 but not 1.5 if precision is 2.
   */
  IntervalScale.prototype.getLabel = function (data, opt) {
    if (data == null) {
      return '';
    }
    var precision = opt && opt.precision;
    if (precision == null) {
      precision = _util_number_js__WEBPACK_IMPORTED_MODULE_0__.getPrecision(data.value) || 0;
    } else if (precision === 'auto') {
      // Should be more precise then tick.
      precision = this._intervalPrecision;
    }
    // (1) If `precision` is set, 12.005 should be display as '12.00500'.
    // (2) Use roundNumber (toFixed) to avoid scientific notation like '3.5e-7'.
    var dataNum = roundNumber(data.value, precision, true);
    return _util_format_js__WEBPACK_IMPORTED_MODULE_4__.addCommas(dataNum);
  };
  /**
   * @param splitNumber By default `5`.
   */
  IntervalScale.prototype.calcNiceTicks = function (splitNumber, minInterval, maxInterval) {
    splitNumber = splitNumber || 5;
    var extent = this._extent;
    var span = extent[1] - extent[0];
    if (!isFinite(span)) {
      return;
    }
    // User may set axis min 0 and data are all negative
    // FIXME If it needs to reverse ?
    if (span < 0) {
      span = -span;
      extent.reverse();
    }
    var result = _helper_js__WEBPACK_IMPORTED_MODULE_3__.intervalScaleNiceTicks(extent, splitNumber, minInterval, maxInterval);
    this._intervalPrecision = result.intervalPrecision;
    this._interval = result.interval;
    this._niceExtent = result.niceTickExtent;
  };
  IntervalScale.prototype.calcNiceExtent = function (opt) {
    var extent = this._extent;
    // If extent start and end are same, expand them
    if (extent[0] === extent[1]) {
      if (extent[0] !== 0) {
        // Expand extent
        // Note that extents can be both negative. See #13154
        var expandSize = Math.abs(extent[0]);
        // In the fowllowing case
        //      Axis has been fixed max 100
        //      Plus data are all 100 and axis extent are [100, 100].
        // Extend to the both side will cause expanded max is larger than fixed max.
        // So only expand to the smaller side.
        if (!opt.fixMax) {
          extent[1] += expandSize / 2;
          extent[0] -= expandSize / 2;
        } else {
          extent[0] -= expandSize / 2;
        }
      } else {
        extent[1] = 1;
      }
    }
    var span = extent[1] - extent[0];
    // If there are no data and extent are [Infinity, -Infinity]
    if (!isFinite(span)) {
      extent[0] = 0;
      extent[1] = 1;
    }
    this.calcNiceTicks(opt.splitNumber, opt.minInterval, opt.maxInterval);
    // let extent = this._extent;
    var interval = this._interval;
    if (!opt.fixMin) {
      extent[0] = roundNumber(Math.floor(extent[0] / interval) * interval);
    }
    if (!opt.fixMax) {
      extent[1] = roundNumber(Math.ceil(extent[1] / interval) * interval);
    }
  };
  IntervalScale.prototype.setNiceExtent = function (min, max) {
    this._niceExtent = [min, max];
  };
  IntervalScale.type = 'interval';
  return IntervalScale;
}(_Scale_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
_Scale_js__WEBPACK_IMPORTED_MODULE_1__["default"].registerClass(IntervalScale);
/* ESM default export */ __webpack_exports__["default"] = (IntervalScale);

}),
32137: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12012);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96585);
/* ESM import */var _Scale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47765);
/* ESM import */var _util_number_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81731);
/* ESM import */var _helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72034);
/* ESM import */var _Interval_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36700);

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





// Use some method of IntervalScale

var scaleProto = _Scale_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype;
// FIXME:TS refactor: not good to call it directly with `this`?
var intervalScaleProto = _Interval_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype;
var roundingErrorFix = _util_number_js__WEBPACK_IMPORTED_MODULE_2__.round;
var mathFloor = Math.floor;
var mathCeil = Math.ceil;
var mathPow = Math.pow;
var mathLog = Math.log;
var LogScale = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(LogScale, _super);
  function LogScale() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = 'log';
    _this.base = 10;
    _this._originalScale = new _Interval_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    // FIXME:TS actually used by `IntervalScale`
    _this._interval = 0;
    return _this;
  }
  /**
   * @param Whether expand the ticks to niced extent.
   */
  LogScale.prototype.getTicks = function (expandToNicedExtent) {
    var originalScale = this._originalScale;
    var extent = this._extent;
    var originalExtent = originalScale.getExtent();
    var ticks = intervalScaleProto.getTicks.call(this, expandToNicedExtent);
    return zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__.map(ticks, function (tick) {
      var val = tick.value;
      var powVal = _util_number_js__WEBPACK_IMPORTED_MODULE_2__.round(mathPow(this.base, val));
      // Fix #4158
      powVal = val === extent[0] && this._fixMin ? fixRoundingError(powVal, originalExtent[0]) : powVal;
      powVal = val === extent[1] && this._fixMax ? fixRoundingError(powVal, originalExtent[1]) : powVal;
      return {
        value: powVal
      };
    }, this);
  };
  LogScale.prototype.setExtent = function (start, end) {
    var base = mathLog(this.base);
    // log(-Infinity) is NaN, so safe guard here
    start = mathLog(Math.max(0, start)) / base;
    end = mathLog(Math.max(0, end)) / base;
    intervalScaleProto.setExtent.call(this, start, end);
  };
  /**
   * @return {number} end
   */
  LogScale.prototype.getExtent = function () {
    var base = this.base;
    var extent = scaleProto.getExtent.call(this);
    extent[0] = mathPow(base, extent[0]);
    extent[1] = mathPow(base, extent[1]);
    // Fix #4158
    var originalScale = this._originalScale;
    var originalExtent = originalScale.getExtent();
    this._fixMin && (extent[0] = fixRoundingError(extent[0], originalExtent[0]));
    this._fixMax && (extent[1] = fixRoundingError(extent[1], originalExtent[1]));
    return extent;
  };
  LogScale.prototype.unionExtent = function (extent) {
    this._originalScale.unionExtent(extent);
    var base = this.base;
    extent[0] = mathLog(extent[0]) / mathLog(base);
    extent[1] = mathLog(extent[1]) / mathLog(base);
    scaleProto.unionExtent.call(this, extent);
  };
  LogScale.prototype.unionExtentFromData = function (data, dim) {
    // TODO
    // filter value that <= 0
    this.unionExtent(data.getApproximateExtent(dim));
  };
  /**
   * Update interval and extent of intervals for nice ticks
   * @param approxTickNum default 10 Given approx tick number
   */
  LogScale.prototype.calcNiceTicks = function (approxTickNum) {
    approxTickNum = approxTickNum || 10;
    var extent = this._extent;
    var span = extent[1] - extent[0];
    if (span === Infinity || span <= 0) {
      return;
    }
    var interval = _util_number_js__WEBPACK_IMPORTED_MODULE_2__.quantity(span);
    var err = approxTickNum / span * interval;
    // Filter ticks to get closer to the desired count.
    if (err <= 0.5) {
      interval *= 10;
    }
    // Interval should be integer
    while (!isNaN(interval) && Math.abs(interval) < 1 && Math.abs(interval) > 0) {
      interval *= 10;
    }
    var niceExtent = [_util_number_js__WEBPACK_IMPORTED_MODULE_2__.round(mathCeil(extent[0] / interval) * interval), _util_number_js__WEBPACK_IMPORTED_MODULE_2__.round(mathFloor(extent[1] / interval) * interval)];
    this._interval = interval;
    this._niceExtent = niceExtent;
  };
  LogScale.prototype.calcNiceExtent = function (opt) {
    intervalScaleProto.calcNiceExtent.call(this, opt);
    this._fixMin = opt.fixMin;
    this._fixMax = opt.fixMax;
  };
  LogScale.prototype.parse = function (val) {
    return val;
  };
  LogScale.prototype.contain = function (val) {
    val = mathLog(val) / mathLog(this.base);
    return _helper_js__WEBPACK_IMPORTED_MODULE_5__.contain(val, this._extent);
  };
  LogScale.prototype.normalize = function (val) {
    val = mathLog(val) / mathLog(this.base);
    return _helper_js__WEBPACK_IMPORTED_MODULE_5__.normalize(val, this._extent);
  };
  LogScale.prototype.scale = function (val) {
    val = _helper_js__WEBPACK_IMPORTED_MODULE_5__.scale(val, this._extent);
    return mathPow(this.base, val);
  };
  LogScale.type = 'log';
  return LogScale;
}(_Scale_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
var proto = LogScale.prototype;
proto.getMinorTicks = intervalScaleProto.getMinorTicks;
proto.getLabel = intervalScaleProto.getLabel;
function fixRoundingError(val, originalVal) {
  return roundingErrorFix(val, _util_number_js__WEBPACK_IMPORTED_MODULE_2__.getPrecision(originalVal));
}
_Scale_js__WEBPACK_IMPORTED_MODULE_0__["default"].registerClass(LogScale);
/* ESM default export */ __webpack_exports__["default"] = (LogScale);

}),
39621: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var _Scale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47765);
/* ESM import */var _data_OrdinalMeta_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16436);
/* ESM import */var _helper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72034);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96585);

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
 * Linear continuous scale
 * http://en.wikipedia.org/wiki/Level_of_measurement
 */
// FIXME only one data




var OrdinalScale = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(OrdinalScale, _super);
  function OrdinalScale(setting) {
    var _this = _super.call(this, setting) || this;
    _this.type = 'ordinal';
    var ordinalMeta = _this.getSetting('ordinalMeta');
    // Caution: Should not use instanceof, consider ec-extensions using
    // import approach to get OrdinalMeta class.
    if (!ordinalMeta) {
      ordinalMeta = new _data_OrdinalMeta_js__WEBPACK_IMPORTED_MODULE_2__["default"]({});
    }
    if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.isArray)(ordinalMeta)) {
      ordinalMeta = new _data_OrdinalMeta_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        categories: (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.map)(ordinalMeta, function (item) {
          return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.isObject)(item) ? item.value : item;
        })
      });
    }
    _this._ordinalMeta = ordinalMeta;
    _this._extent = _this.getSetting('extent') || [0, ordinalMeta.categories.length - 1];
    return _this;
  }
  OrdinalScale.prototype.parse = function (val) {
    // Caution: Math.round(null) will return `0` rather than `NaN`
    if (val == null) {
      return NaN;
    }
    return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.isString)(val) ? this._ordinalMeta.getOrdinal(val)
    // val might be float.
    : Math.round(val);
  };
  OrdinalScale.prototype.contain = function (rank) {
    rank = this.parse(rank);
    return _helper_js__WEBPACK_IMPORTED_MODULE_4__.contain(rank, this._extent) && this._ordinalMeta.categories[rank] != null;
  };
  /**
   * Normalize given rank or name to linear [0, 1]
   * @param val raw ordinal number.
   * @return normalized value in [0, 1].
   */
  OrdinalScale.prototype.normalize = function (val) {
    val = this._getTickNumber(this.parse(val));
    return _helper_js__WEBPACK_IMPORTED_MODULE_4__.normalize(val, this._extent);
  };
  /**
   * @param val normalized value in [0, 1].
   * @return raw ordinal number.
   */
  OrdinalScale.prototype.scale = function (val) {
    val = Math.round(_helper_js__WEBPACK_IMPORTED_MODULE_4__.scale(val, this._extent));
    return this.getRawOrdinalNumber(val);
  };
  OrdinalScale.prototype.getTicks = function () {
    var ticks = [];
    var extent = this._extent;
    var rank = extent[0];
    while (rank <= extent[1]) {
      ticks.push({
        value: rank
      });
      rank++;
    }
    return ticks;
  };
  OrdinalScale.prototype.getMinorTicks = function (splitNumber) {
    // Not support.
    return;
  };
  /**
   * @see `Ordinal['_ordinalNumbersByTick']`
   */
  OrdinalScale.prototype.setSortInfo = function (info) {
    if (info == null) {
      this._ordinalNumbersByTick = this._ticksByOrdinalNumber = null;
      return;
    }
    var infoOrdinalNumbers = info.ordinalNumbers;
    var ordinalsByTick = this._ordinalNumbersByTick = [];
    var ticksByOrdinal = this._ticksByOrdinalNumber = [];
    // Unnecessary support negative tick in `realtimeSort`.
    var tickNum = 0;
    var allCategoryLen = this._ordinalMeta.categories.length;
    for (var len = Math.min(allCategoryLen, infoOrdinalNumbers.length); tickNum < len; ++tickNum) {
      var ordinalNumber = infoOrdinalNumbers[tickNum];
      ordinalsByTick[tickNum] = ordinalNumber;
      ticksByOrdinal[ordinalNumber] = tickNum;
    }
    // Handle that `series.data` only covers part of the `axis.category.data`.
    var unusedOrdinal = 0;
    for (; tickNum < allCategoryLen; ++tickNum) {
      while (ticksByOrdinal[unusedOrdinal] != null) {
        unusedOrdinal++;
      }
      ;
      ordinalsByTick.push(unusedOrdinal);
      ticksByOrdinal[unusedOrdinal] = tickNum;
    }
  };
  OrdinalScale.prototype._getTickNumber = function (ordinal) {
    var ticksByOrdinalNumber = this._ticksByOrdinalNumber;
    // also support ordinal out of range of `ordinalMeta.categories.length`,
    // where ordinal numbers are used as tick value directly.
    return ticksByOrdinalNumber && ordinal >= 0 && ordinal < ticksByOrdinalNumber.length ? ticksByOrdinalNumber[ordinal] : ordinal;
  };
  /**
   * @usage
   * ```js
   * const ordinalNumber = ordinalScale.getRawOrdinalNumber(tickVal);
   *
   * // case0
   * const rawOrdinalValue = axisModel.getCategories()[ordinalNumber];
   * // case1
   * const rawOrdinalValue = this._ordinalMeta.categories[ordinalNumber];
   * // case2
   * const coord = axis.dataToCoord(ordinalNumber);
   * ```
   *
   * @param {OrdinalNumber} tickNumber index of display
   */
  OrdinalScale.prototype.getRawOrdinalNumber = function (tickNumber) {
    var ordinalNumbersByTick = this._ordinalNumbersByTick;
    // tickNumber may be out of range, e.g., when axis max is larger than `ordinalMeta.categories.length`.,
    // where ordinal numbers are used as tick value directly.
    return ordinalNumbersByTick && tickNumber >= 0 && tickNumber < ordinalNumbersByTick.length ? ordinalNumbersByTick[tickNumber] : tickNumber;
  };
  /**
   * Get item on tick
   */
  OrdinalScale.prototype.getLabel = function (tick) {
    if (!this.isBlank()) {
      var ordinalNumber = this.getRawOrdinalNumber(tick.value);
      var cateogry = this._ordinalMeta.categories[ordinalNumber];
      // Note that if no data, ordinalMeta.categories is an empty array.
      // Return empty if it's not exist.
      return cateogry == null ? '' : cateogry + '';
    }
  };
  OrdinalScale.prototype.count = function () {
    return this._extent[1] - this._extent[0] + 1;
  };
  OrdinalScale.prototype.unionExtentFromData = function (data, dim) {
    this.unionExtent(data.getApproximateExtent(dim));
  };
  /**
   * @override
   * If value is in extent range
   */
  OrdinalScale.prototype.isInExtentRange = function (value) {
    value = this._getTickNumber(value);
    return this._extent[0] <= value && this._extent[1] >= value;
  };
  OrdinalScale.prototype.getOrdinalMeta = function () {
    return this._ordinalMeta;
  };
  OrdinalScale.prototype.calcNiceTicks = function () {};
  OrdinalScale.prototype.calcNiceExtent = function () {};
  OrdinalScale.type = 'ordinal';
  return OrdinalScale;
}(_Scale_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
_Scale_js__WEBPACK_IMPORTED_MODULE_0__["default"].registerClass(OrdinalScale);
/* ESM default export */ __webpack_exports__["default"] = (OrdinalScale);

}),
47765: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _util_clazz_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35350);

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

var Scale = /** @class */function () {
  function Scale(setting) {
    this._setting = setting || {};
    this._extent = [Infinity, -Infinity];
  }
  Scale.prototype.getSetting = function (name) {
    return this._setting[name];
  };
  /**
   * Set extent from data
   */
  Scale.prototype.unionExtent = function (other) {
    var extent = this._extent;
    other[0] < extent[0] && (extent[0] = other[0]);
    other[1] > extent[1] && (extent[1] = other[1]);
    // not setExtent because in log axis it may transformed to power
    // this.setExtent(extent[0], extent[1]);
  };
  /**
   * Set extent from data
   */
  Scale.prototype.unionExtentFromData = function (data, dim) {
    this.unionExtent(data.getApproximateExtent(dim));
  };
  /**
   * Get extent
   *
   * Extent is always in increase order.
   */
  Scale.prototype.getExtent = function () {
    return this._extent.slice();
  };
  /**
   * Set extent
   */
  Scale.prototype.setExtent = function (start, end) {
    var thisExtent = this._extent;
    if (!isNaN(start)) {
      thisExtent[0] = start;
    }
    if (!isNaN(end)) {
      thisExtent[1] = end;
    }
  };
  /**
   * If value is in extent range
   */
  Scale.prototype.isInExtentRange = function (value) {
    return this._extent[0] <= value && this._extent[1] >= value;
  };
  /**
   * When axis extent depends on data and no data exists,
   * axis ticks should not be drawn, which is named 'blank'.
   */
  Scale.prototype.isBlank = function () {
    return this._isBlank;
  };
  /**
   * When axis extent depends on data and no data exists,
   * axis ticks should not be drawn, which is named 'blank'.
   */
  Scale.prototype.setBlank = function (isBlank) {
    this._isBlank = isBlank;
  };
  return Scale;
}();
_util_clazz_js__WEBPACK_IMPORTED_MODULE_0__.enableClassManagement(Scale);
/* ESM default export */ __webpack_exports__["default"] = (Scale);

}),
49988: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var _util_number_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81731);
/* ESM import */var _util_time_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41070);
/* ESM import */var _helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72034);
/* ESM import */var _Interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36700);
/* ESM import */var _Scale_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(47765);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96585);

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
* The "scaleLevels" was originally copied from "d3.js" with some
* modifications made for this project.
* (See more details in the comment on the definition of "scaleLevels" below.)
* The use of the source code of this file is also subject to the terms
* and consitions of the license of "d3.js" (BSD-3Clause, see
* </licenses/LICENSE-d3>).
*/
// [About UTC and local time zone]:
// In most cases, `number.parseDate` will treat input data string as local time
// (except time zone is specified in time string). And `format.formateTime` returns
// local time by default. option.useUTC is false by default. This design has
// considered these common cases:
// (1) Time that is persistent in server is in UTC, but it is needed to be displayed
// in local time by default.
// (2) By default, the input data string (e.g., '2011-01-02') should be displayed
// as its original time, without any time difference.







// FIXME 公用？
var bisect = function (a, x, lo, hi) {
  while (lo < hi) {
    var mid = lo + hi >>> 1;
    if (a[mid][1] < x) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  return lo;
};
var TimeScale = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(TimeScale, _super);
  function TimeScale(settings) {
    var _this = _super.call(this, settings) || this;
    _this.type = 'time';
    return _this;
  }
  /**
   * Get label is mainly for other components like dataZoom, tooltip.
   */
  TimeScale.prototype.getLabel = function (tick) {
    var useUTC = this.getSetting('useUTC');
    return (0,_util_time_js__WEBPACK_IMPORTED_MODULE_2__.format)(tick.value, _util_time_js__WEBPACK_IMPORTED_MODULE_2__.fullLeveledFormatter[(0,_util_time_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultFormatPrecisionOfInterval)((0,_util_time_js__WEBPACK_IMPORTED_MODULE_2__.getPrimaryTimeUnit)(this._minLevelUnit))] || _util_time_js__WEBPACK_IMPORTED_MODULE_2__.fullLeveledFormatter.second, useUTC, this.getSetting('locale'));
  };
  TimeScale.prototype.getFormattedLabel = function (tick, idx, labelFormatter) {
    var isUTC = this.getSetting('useUTC');
    var lang = this.getSetting('locale');
    return (0,_util_time_js__WEBPACK_IMPORTED_MODULE_2__.leveledFormat)(tick, idx, labelFormatter, lang, isUTC);
  };
  /**
   * @override
   */
  TimeScale.prototype.getTicks = function () {
    var interval = this._interval;
    var extent = this._extent;
    var ticks = [];
    // If interval is 0, return [];
    if (!interval) {
      return ticks;
    }
    ticks.push({
      value: extent[0],
      level: 0
    });
    var useUTC = this.getSetting('useUTC');
    var innerTicks = getIntervalTicks(this._minLevelUnit, this._approxInterval, useUTC, extent);
    ticks = ticks.concat(innerTicks);
    ticks.push({
      value: extent[1],
      level: 0
    });
    return ticks;
  };
  TimeScale.prototype.calcNiceExtent = function (opt) {
    var extent = this._extent;
    // If extent start and end are same, expand them
    if (extent[0] === extent[1]) {
      // Expand extent
      extent[0] -= _util_time_js__WEBPACK_IMPORTED_MODULE_2__.ONE_DAY;
      extent[1] += _util_time_js__WEBPACK_IMPORTED_MODULE_2__.ONE_DAY;
    }
    // If there are no data and extent are [Infinity, -Infinity]
    if (extent[1] === -Infinity && extent[0] === Infinity) {
      var d = new Date();
      extent[1] = +new Date(d.getFullYear(), d.getMonth(), d.getDate());
      extent[0] = extent[1] - _util_time_js__WEBPACK_IMPORTED_MODULE_2__.ONE_DAY;
    }
    this.calcNiceTicks(opt.splitNumber, opt.minInterval, opt.maxInterval);
  };
  TimeScale.prototype.calcNiceTicks = function (approxTickNum, minInterval, maxInterval) {
    approxTickNum = approxTickNum || 10;
    var extent = this._extent;
    var span = extent[1] - extent[0];
    this._approxInterval = span / approxTickNum;
    if (minInterval != null && this._approxInterval < minInterval) {
      this._approxInterval = minInterval;
    }
    if (maxInterval != null && this._approxInterval > maxInterval) {
      this._approxInterval = maxInterval;
    }
    var scaleIntervalsLen = scaleIntervals.length;
    var idx = Math.min(bisect(scaleIntervals, this._approxInterval, 0, scaleIntervalsLen), scaleIntervalsLen - 1);
    // Interval that can be used to calculate ticks
    this._interval = scaleIntervals[idx][1];
    // Min level used when picking ticks from top down.
    // We check one more level to avoid the ticks are to sparse in some case.
    this._minLevelUnit = scaleIntervals[Math.max(idx - 1, 0)][0];
  };
  TimeScale.prototype.parse = function (val) {
    // val might be float.
    return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.isNumber)(val) ? val : +_util_number_js__WEBPACK_IMPORTED_MODULE_4__.parseDate(val);
  };
  TimeScale.prototype.contain = function (val) {
    return _helper_js__WEBPACK_IMPORTED_MODULE_5__.contain(this.parse(val), this._extent);
  };
  TimeScale.prototype.normalize = function (val) {
    return _helper_js__WEBPACK_IMPORTED_MODULE_5__.normalize(this.parse(val), this._extent);
  };
  TimeScale.prototype.scale = function (val) {
    return _helper_js__WEBPACK_IMPORTED_MODULE_5__.scale(val, this._extent);
  };
  TimeScale.type = 'time';
  return TimeScale;
}(_Interval_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/**
 * This implementation was originally copied from "d3.js"
 * <https://github.com/d3/d3/blob/b516d77fb8566b576088e73410437494717ada26/src/time/scale.js>
 * with some modifications made for this program.
 * See the license statement at the head of this file.
 */
var scaleIntervals = [
// Format                           interval
['second', _util_time_js__WEBPACK_IMPORTED_MODULE_2__.ONE_SECOND], ['minute', _util_time_js__WEBPACK_IMPORTED_MODULE_2__.ONE_MINUTE], ['hour', _util_time_js__WEBPACK_IMPORTED_MODULE_2__.ONE_HOUR], ['quarter-day', _util_time_js__WEBPACK_IMPORTED_MODULE_2__.ONE_HOUR * 6], ['half-day', _util_time_js__WEBPACK_IMPORTED_MODULE_2__.ONE_HOUR * 12], ['day', _util_time_js__WEBPACK_IMPORTED_MODULE_2__.ONE_DAY * 1.2], ['half-week', _util_time_js__WEBPACK_IMPORTED_MODULE_2__.ONE_DAY * 3.5], ['week', _util_time_js__WEBPACK_IMPORTED_MODULE_2__.ONE_DAY * 7], ['month', _util_time_js__WEBPACK_IMPORTED_MODULE_2__.ONE_DAY * 31], ['quarter', _util_time_js__WEBPACK_IMPORTED_MODULE_2__.ONE_DAY * 95], ['half-year', _util_time_js__WEBPACK_IMPORTED_MODULE_2__.ONE_YEAR / 2], ['year', _util_time_js__WEBPACK_IMPORTED_MODULE_2__.ONE_YEAR] // 1Y
];
function isUnitValueSame(unit, valueA, valueB, isUTC) {
  var dateA = _util_number_js__WEBPACK_IMPORTED_MODULE_4__.parseDate(valueA);
  var dateB = _util_number_js__WEBPACK_IMPORTED_MODULE_4__.parseDate(valueB);
  var isSame = function (unit) {
    return (0,_util_time_js__WEBPACK_IMPORTED_MODULE_2__.getUnitValue)(dateA, unit, isUTC) === (0,_util_time_js__WEBPACK_IMPORTED_MODULE_2__.getUnitValue)(dateB, unit, isUTC);
  };
  var isSameYear = function () {
    return isSame('year');
  };
  // const isSameHalfYear = () => isSameYear() && isSame('half-year');
  // const isSameQuater = () => isSameYear() && isSame('quarter');
  var isSameMonth = function () {
    return isSameYear() && isSame('month');
  };
  var isSameDay = function () {
    return isSameMonth() && isSame('day');
  };
  // const isSameHalfDay = () => isSameDay() && isSame('half-day');
  var isSameHour = function () {
    return isSameDay() && isSame('hour');
  };
  var isSameMinute = function () {
    return isSameHour() && isSame('minute');
  };
  var isSameSecond = function () {
    return isSameMinute() && isSame('second');
  };
  var isSameMilliSecond = function () {
    return isSameSecond() && isSame('millisecond');
  };
  switch (unit) {
    case 'year':
      return isSameYear();
    case 'month':
      return isSameMonth();
    case 'day':
      return isSameDay();
    case 'hour':
      return isSameHour();
    case 'minute':
      return isSameMinute();
    case 'second':
      return isSameSecond();
    case 'millisecond':
      return isSameMilliSecond();
  }
}
// const primaryUnitGetters = {
//     year: fullYearGetterName(),
//     month: monthGetterName(),
//     day: dateGetterName(),
//     hour: hoursGetterName(),
//     minute: minutesGetterName(),
//     second: secondsGetterName(),
//     millisecond: millisecondsGetterName()
// };
// const primaryUnitUTCGetters = {
//     year: fullYearGetterName(true),
//     month: monthGetterName(true),
//     day: dateGetterName(true),
//     hour: hoursGetterName(true),
//     minute: minutesGetterName(true),
//     second: secondsGetterName(true),
//     millisecond: millisecondsGetterName(true)
// };
// function moveTick(date: Date, unitName: TimeUnit, step: number, isUTC: boolean) {
//     step = step || 1;
//     switch (getPrimaryTimeUnit(unitName)) {
//         case 'year':
//             date[fullYearSetterName(isUTC)](date[fullYearGetterName(isUTC)]() + step);
//             break;
//         case 'month':
//             date[monthSetterName(isUTC)](date[monthGetterName(isUTC)]() + step);
//             break;
//         case 'day':
//             date[dateSetterName(isUTC)](date[dateGetterName(isUTC)]() + step);
//             break;
//         case 'hour':
//             date[hoursSetterName(isUTC)](date[hoursGetterName(isUTC)]() + step);
//             break;
//         case 'minute':
//             date[minutesSetterName(isUTC)](date[minutesGetterName(isUTC)]() + step);
//             break;
//         case 'second':
//             date[secondsSetterName(isUTC)](date[secondsGetterName(isUTC)]() + step);
//             break;
//         case 'millisecond':
//             date[millisecondsSetterName(isUTC)](date[millisecondsGetterName(isUTC)]() + step);
//             break;
//     }
//     return date.getTime();
// }
// const DATE_INTERVALS = [[8, 7.5], [4, 3.5], [2, 1.5]];
// const MONTH_INTERVALS = [[6, 5.5], [3, 2.5], [2, 1.5]];
// const MINUTES_SECONDS_INTERVALS = [[30, 30], [20, 20], [15, 15], [10, 10], [5, 5], [2, 2]];
function getDateInterval(approxInterval, daysInMonth) {
  approxInterval /= _util_time_js__WEBPACK_IMPORTED_MODULE_2__.ONE_DAY;
  return approxInterval > 16 ? 16
  // Math.floor(daysInMonth / 2) + 1  // In this case we only want one tick between two months.
  : approxInterval > 7.5 ? 7 // TODO week 7 or day 8?
  : approxInterval > 3.5 ? 4 : approxInterval > 1.5 ? 2 : 1;
}
function getMonthInterval(approxInterval) {
  var APPROX_ONE_MONTH = 30 * _util_time_js__WEBPACK_IMPORTED_MODULE_2__.ONE_DAY;
  approxInterval /= APPROX_ONE_MONTH;
  return approxInterval > 6 ? 6 : approxInterval > 3 ? 3 : approxInterval > 2 ? 2 : 1;
}
function getHourInterval(approxInterval) {
  approxInterval /= _util_time_js__WEBPACK_IMPORTED_MODULE_2__.ONE_HOUR;
  return approxInterval > 12 ? 12 : approxInterval > 6 ? 6 : approxInterval > 3.5 ? 4 : approxInterval > 2 ? 2 : 1;
}
function getMinutesAndSecondsInterval(approxInterval, isMinutes) {
  approxInterval /= isMinutes ? _util_time_js__WEBPACK_IMPORTED_MODULE_2__.ONE_MINUTE : _util_time_js__WEBPACK_IMPORTED_MODULE_2__.ONE_SECOND;
  return approxInterval > 30 ? 30 : approxInterval > 20 ? 20 : approxInterval > 15 ? 15 : approxInterval > 10 ? 10 : approxInterval > 5 ? 5 : approxInterval > 2 ? 2 : 1;
}
function getMillisecondsInterval(approxInterval) {
  return _util_number_js__WEBPACK_IMPORTED_MODULE_4__.nice(approxInterval, true);
}
function getFirstTimestampOfUnit(date, unitName, isUTC) {
  var outDate = new Date(date);
  switch ((0,_util_time_js__WEBPACK_IMPORTED_MODULE_2__.getPrimaryTimeUnit)(unitName)) {
    case 'year':
    case 'month':
      outDate[(0,_util_time_js__WEBPACK_IMPORTED_MODULE_2__.monthSetterName)(isUTC)](0);
    case 'day':
      outDate[(0,_util_time_js__WEBPACK_IMPORTED_MODULE_2__.dateSetterName)(isUTC)](1);
    case 'hour':
      outDate[(0,_util_time_js__WEBPACK_IMPORTED_MODULE_2__.hoursSetterName)(isUTC)](0);
    case 'minute':
      outDate[(0,_util_time_js__WEBPACK_IMPORTED_MODULE_2__.minutesSetterName)(isUTC)](0);
    case 'second':
      outDate[(0,_util_time_js__WEBPACK_IMPORTED_MODULE_2__.secondsSetterName)(isUTC)](0);
      outDate[(0,_util_time_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsSetterName)(isUTC)](0);
  }
  return outDate.getTime();
}
function getIntervalTicks(bottomUnitName, approxInterval, isUTC, extent) {
  var safeLimit = 10000;
  var unitNames = _util_time_js__WEBPACK_IMPORTED_MODULE_2__.timeUnits;
  var iter = 0;
  function addTicksInSpan(interval, minTimestamp, maxTimestamp, getMethodName, setMethodName, isDate, out) {
    var date = new Date(minTimestamp);
    var dateTime = minTimestamp;
    var d = date[getMethodName]();
    // if (isDate) {
    //     d -= 1; // Starts with 0;   PENDING
    // }
    while (dateTime < maxTimestamp && dateTime <= extent[1]) {
      out.push({
        value: dateTime
      });
      d += interval;
      date[setMethodName](d);
      dateTime = date.getTime();
    }
    // This extra tick is for calcuating ticks of next level. Will not been added to the final result
    out.push({
      value: dateTime,
      notAdd: true
    });
  }
  function addLevelTicks(unitName, lastLevelTicks, levelTicks) {
    var newAddedTicks = [];
    var isFirstLevel = !lastLevelTicks.length;
    if (isUnitValueSame((0,_util_time_js__WEBPACK_IMPORTED_MODULE_2__.getPrimaryTimeUnit)(unitName), extent[0], extent[1], isUTC)) {
      return;
    }
    if (isFirstLevel) {
      lastLevelTicks = [{
        // TODO Optimize. Not include so may ticks.
        value: getFirstTimestampOfUnit(new Date(extent[0]), unitName, isUTC)
      }, {
        value: extent[1]
      }];
    }
    for (var i = 0; i < lastLevelTicks.length - 1; i++) {
      var startTick = lastLevelTicks[i].value;
      var endTick = lastLevelTicks[i + 1].value;
      if (startTick === endTick) {
        continue;
      }
      var interval = void 0;
      var getterName = void 0;
      var setterName = void 0;
      var isDate = false;
      switch (unitName) {
        case 'year':
          interval = Math.max(1, Math.round(approxInterval / _util_time_js__WEBPACK_IMPORTED_MODULE_2__.ONE_DAY / 365));
          getterName = (0,_util_time_js__WEBPACK_IMPORTED_MODULE_2__.fullYearGetterName)(isUTC);
          setterName = (0,_util_time_js__WEBPACK_IMPORTED_MODULE_2__.fullYearSetterName)(isUTC);
          break;
        case 'half-year':
        case 'quarter':
        case 'month':
          interval = getMonthInterval(approxInterval);
          getterName = (0,_util_time_js__WEBPACK_IMPORTED_MODULE_2__.monthGetterName)(isUTC);
          setterName = (0,_util_time_js__WEBPACK_IMPORTED_MODULE_2__.monthSetterName)(isUTC);
          break;
        case 'week': // PENDING If week is added. Ignore day.
        case 'half-week':
        case 'day':
          interval = getDateInterval(approxInterval, 31); // Use 32 days and let interval been 16
          getterName = (0,_util_time_js__WEBPACK_IMPORTED_MODULE_2__.dateGetterName)(isUTC);
          setterName = (0,_util_time_js__WEBPACK_IMPORTED_MODULE_2__.dateSetterName)(isUTC);
          isDate = true;
          break;
        case 'half-day':
        case 'quarter-day':
        case 'hour':
          interval = getHourInterval(approxInterval);
          getterName = (0,_util_time_js__WEBPACK_IMPORTED_MODULE_2__.hoursGetterName)(isUTC);
          setterName = (0,_util_time_js__WEBPACK_IMPORTED_MODULE_2__.hoursSetterName)(isUTC);
          break;
        case 'minute':
          interval = getMinutesAndSecondsInterval(approxInterval, true);
          getterName = (0,_util_time_js__WEBPACK_IMPORTED_MODULE_2__.minutesGetterName)(isUTC);
          setterName = (0,_util_time_js__WEBPACK_IMPORTED_MODULE_2__.minutesSetterName)(isUTC);
          break;
        case 'second':
          interval = getMinutesAndSecondsInterval(approxInterval, false);
          getterName = (0,_util_time_js__WEBPACK_IMPORTED_MODULE_2__.secondsGetterName)(isUTC);
          setterName = (0,_util_time_js__WEBPACK_IMPORTED_MODULE_2__.secondsSetterName)(isUTC);
          break;
        case 'millisecond':
          interval = getMillisecondsInterval(approxInterval);
          getterName = (0,_util_time_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsGetterName)(isUTC);
          setterName = (0,_util_time_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsSetterName)(isUTC);
          break;
      }
      addTicksInSpan(interval, startTick, endTick, getterName, setterName, isDate, newAddedTicks);
      if (unitName === 'year' && levelTicks.length > 1 && i === 0) {
        // Add nearest years to the left extent.
        levelTicks.unshift({
          value: levelTicks[0].value - interval
        });
      }
    }
    for (var i = 0; i < newAddedTicks.length; i++) {
      levelTicks.push(newAddedTicks[i]);
    }
    // newAddedTicks.length && console.log(unitName, newAddedTicks);
    return newAddedTicks;
  }
  var levelsTicks = [];
  var currentLevelTicks = [];
  var tickCount = 0;
  var lastLevelTickCount = 0;
  for (var i = 0; i < unitNames.length && iter++ < safeLimit; ++i) {
    var primaryTimeUnit = (0,_util_time_js__WEBPACK_IMPORTED_MODULE_2__.getPrimaryTimeUnit)(unitNames[i]);
    if (!(0,_util_time_js__WEBPACK_IMPORTED_MODULE_2__.isPrimaryTimeUnit)(unitNames[i])) {
      // TODO
      continue;
    }
    addLevelTicks(unitNames[i], levelsTicks[levelsTicks.length - 1] || [], currentLevelTicks);
    var nextPrimaryTimeUnit = unitNames[i + 1] ? (0,_util_time_js__WEBPACK_IMPORTED_MODULE_2__.getPrimaryTimeUnit)(unitNames[i + 1]) : null;
    if (primaryTimeUnit !== nextPrimaryTimeUnit) {
      if (currentLevelTicks.length) {
        lastLevelTickCount = tickCount;
        // Remove the duplicate so the tick count can be precisely.
        currentLevelTicks.sort(function (a, b) {
          return a.value - b.value;
        });
        var levelTicksRemoveDuplicated = [];
        for (var i_1 = 0; i_1 < currentLevelTicks.length; ++i_1) {
          var tickValue = currentLevelTicks[i_1].value;
          if (i_1 === 0 || currentLevelTicks[i_1 - 1].value !== tickValue) {
            levelTicksRemoveDuplicated.push(currentLevelTicks[i_1]);
            if (tickValue >= extent[0] && tickValue <= extent[1]) {
              tickCount++;
            }
          }
        }
        var targetTickNum = (extent[1] - extent[0]) / approxInterval;
        // Added too much in this level and not too less in last level
        if (tickCount > targetTickNum * 1.5 && lastLevelTickCount > targetTickNum / 1.5) {
          break;
        }
        // Only treat primary time unit as one level.
        levelsTicks.push(levelTicksRemoveDuplicated);
        if (tickCount > targetTickNum || bottomUnitName === unitNames[i]) {
          break;
        }
      }
      // Reset if next unitName is primary
      currentLevelTicks = [];
    }
  }
  if (false) {}
  var levelsTicksInExtent = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.filter)((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.map)(levelsTicks, function (levelTicks) {
    return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.filter)(levelTicks, function (tick) {
      return tick.value >= extent[0] && tick.value <= extent[1] && !tick.notAdd;
    });
  }), function (levelTicks) {
    return levelTicks.length > 0;
  });
  var ticks = [];
  var maxLevel = levelsTicksInExtent.length - 1;
  for (var i = 0; i < levelsTicksInExtent.length; ++i) {
    var levelTicks = levelsTicksInExtent[i];
    for (var k = 0; k < levelTicks.length; ++k) {
      ticks.push({
        value: levelTicks[k].value,
        level: maxLevel - i
      });
    }
  }
  ticks.sort(function (a, b) {
    return a.value - b.value;
  });
  // Remove duplicates
  var result = [];
  for (var i = 0; i < ticks.length; ++i) {
    if (i === 0 || ticks[i].value !== ticks[i - 1].value) {
      result.push(ticks[i]);
    }
  }
  return result;
}
_Scale_js__WEBPACK_IMPORTED_MODULE_6__["default"].registerClass(TimeScale);
/* ESM default export */ __webpack_exports__["default"] = (TimeScale);

}),
72034: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  contain: function() { return contain; },
  fixExtent: function() { return fixExtent; },
  getIntervalPrecision: function() { return getIntervalPrecision; },
  increaseInterval: function() { return increaseInterval; },
  intervalScaleNiceTicks: function() { return intervalScaleNiceTicks; },
  isIntervalOrLogScale: function() { return isIntervalOrLogScale; },
  isValueNice: function() { return isValueNice; },
  normalize: function() { return normalize; },
  scale: function() { return scale; }
});
/* ESM import */var _util_number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81731);

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

function isValueNice(val) {
  var exp10 = Math.pow(10, (0,_util_number_js__WEBPACK_IMPORTED_MODULE_0__.quantityExponent)(Math.abs(val)));
  var f = Math.abs(val / exp10);
  return f === 0 || f === 1 || f === 2 || f === 3 || f === 5;
}
function isIntervalOrLogScale(scale) {
  return scale.type === 'interval' || scale.type === 'log';
}
/**
 * @param extent Both extent[0] and extent[1] should be valid number.
 *               Should be extent[0] < extent[1].
 * @param splitNumber splitNumber should be >= 1.
 */
function intervalScaleNiceTicks(extent, splitNumber, minInterval, maxInterval) {
  var result = {};
  var span = extent[1] - extent[0];
  var interval = result.interval = (0,_util_number_js__WEBPACK_IMPORTED_MODULE_0__.nice)(span / splitNumber, true);
  if (minInterval != null && interval < minInterval) {
    interval = result.interval = minInterval;
  }
  if (maxInterval != null && interval > maxInterval) {
    interval = result.interval = maxInterval;
  }
  // Tow more digital for tick.
  var precision = result.intervalPrecision = getIntervalPrecision(interval);
  // Niced extent inside original extent
  var niceTickExtent = result.niceTickExtent = [(0,_util_number_js__WEBPACK_IMPORTED_MODULE_0__.round)(Math.ceil(extent[0] / interval) * interval, precision), (0,_util_number_js__WEBPACK_IMPORTED_MODULE_0__.round)(Math.floor(extent[1] / interval) * interval, precision)];
  fixExtent(niceTickExtent, extent);
  return result;
}
function increaseInterval(interval) {
  var exp10 = Math.pow(10, (0,_util_number_js__WEBPACK_IMPORTED_MODULE_0__.quantityExponent)(interval));
  // Increase interval
  var f = interval / exp10;
  if (!f) {
    f = 1;
  } else if (f === 2) {
    f = 3;
  } else if (f === 3) {
    f = 5;
  } else {
    // f is 1 or 5
    f *= 2;
  }
  return (0,_util_number_js__WEBPACK_IMPORTED_MODULE_0__.round)(f * exp10);
}
/**
 * @return interval precision
 */
function getIntervalPrecision(interval) {
  // Tow more digital for tick.
  return (0,_util_number_js__WEBPACK_IMPORTED_MODULE_0__.getPrecision)(interval) + 2;
}
function clamp(niceTickExtent, idx, extent) {
  niceTickExtent[idx] = Math.max(Math.min(niceTickExtent[idx], extent[1]), extent[0]);
}
// In some cases (e.g., splitNumber is 1), niceTickExtent may be out of extent.
function fixExtent(niceTickExtent, extent) {
  !isFinite(niceTickExtent[0]) && (niceTickExtent[0] = extent[0]);
  !isFinite(niceTickExtent[1]) && (niceTickExtent[1] = extent[1]);
  clamp(niceTickExtent, 0, extent);
  clamp(niceTickExtent, 1, extent);
  if (niceTickExtent[0] > niceTickExtent[1]) {
    niceTickExtent[0] = niceTickExtent[1];
  }
}
function contain(val, extent) {
  return val >= extent[0] && val <= extent[1];
}
function normalize(val, extent) {
  if (extent[1] === extent[0]) {
    return 0.5;
  }
  return (val - extent[0]) / (extent[1] - extent[0]);
}
function scale(val, extent) {
  return val * (extent[1] - extent[0]) + extent[0];
}

}),
80797: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
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
var contrastColor = '#B9B8CE';
var backgroundColor = '#100C2A';
var axisCommon = function () {
  return {
    axisLine: {
      lineStyle: {
        color: contrastColor
      }
    },
    splitLine: {
      lineStyle: {
        color: '#484753'
      }
    },
    splitArea: {
      areaStyle: {
        color: ['rgba(255,255,255,0.02)', 'rgba(255,255,255,0.05)']
      }
    },
    minorSplitLine: {
      lineStyle: {
        color: '#20203B'
      }
    }
  };
};
var colorPalette = ['#4992ff', '#7cffb2', '#fddd60', '#ff6e76', '#58d9f9', '#05c091', '#ff8a45', '#8d48e3', '#dd79ff'];
var theme = {
  darkMode: true,
  color: colorPalette,
  backgroundColor: backgroundColor,
  axisPointer: {
    lineStyle: {
      color: '#817f91'
    },
    crossStyle: {
      color: '#817f91'
    },
    label: {
      // TODO Contrast of label backgorundColor
      color: '#fff'
    }
  },
  legend: {
    textStyle: {
      color: contrastColor
    },
    pageTextStyle: {
      color: contrastColor
    }
  },
  textStyle: {
    color: contrastColor
  },
  title: {
    textStyle: {
      color: '#EEF1FA'
    },
    subtextStyle: {
      color: '#B9B8CE'
    }
  },
  toolbox: {
    iconStyle: {
      borderColor: contrastColor
    }
  },
  dataZoom: {
    borderColor: '#71708A',
    textStyle: {
      color: contrastColor
    },
    brushStyle: {
      color: 'rgba(135,163,206,0.3)'
    },
    handleStyle: {
      color: '#353450',
      borderColor: '#C5CBE3'
    },
    moveHandleStyle: {
      color: '#B0B6C3',
      opacity: 0.3
    },
    fillerColor: 'rgba(135,163,206,0.2)',
    emphasis: {
      handleStyle: {
        borderColor: '#91B7F2',
        color: '#4D587D'
      },
      moveHandleStyle: {
        color: '#636D9A',
        opacity: 0.7
      }
    },
    dataBackground: {
      lineStyle: {
        color: '#71708A',
        width: 1
      },
      areaStyle: {
        color: '#71708A'
      }
    },
    selectedDataBackground: {
      lineStyle: {
        color: '#87A3CE'
      },
      areaStyle: {
        color: '#87A3CE'
      }
    }
  },
  visualMap: {
    textStyle: {
      color: contrastColor
    }
  },
  timeline: {
    lineStyle: {
      color: contrastColor
    },
    label: {
      color: contrastColor
    },
    controlStyle: {
      color: contrastColor,
      borderColor: contrastColor
    }
  },
  calendar: {
    itemStyle: {
      color: backgroundColor
    },
    dayLabel: {
      color: contrastColor
    },
    monthLabel: {
      color: contrastColor
    },
    yearLabel: {
      color: contrastColor
    }
  },
  timeAxis: axisCommon(),
  logAxis: axisCommon(),
  valueAxis: axisCommon(),
  categoryAxis: axisCommon(),
  line: {
    symbol: 'circle'
  },
  graph: {
    color: colorPalette
  },
  gauge: {
    title: {
      color: contrastColor
    },
    axisLine: {
      lineStyle: {
        color: [[1, 'rgba(207,212,219,0.2)']]
      }
    },
    axisLabel: {
      color: contrastColor
    },
    detail: {
      color: '#EEF1FA'
    }
  },
  candlestick: {
    itemStyle: {
      color: '#f64e56',
      color0: '#54ea92',
      borderColor: '#f64e56',
      borderColor0: '#54ea92'
      // borderColor: '#ca2824',
      // borderColor0: '#09a443'
    }
  }
};
theme.categoryAxis.splitLine.show = false;
/* ESM default export */ __webpack_exports__["default"] = (theme);

}),
81920: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
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
var colorAll = ['#37A2DA', '#32C5E9', '#67E0E3', '#9FE6B8', '#FFDB5C', '#ff9f7f', '#fb7293', '#E062AE', '#E690D1', '#e7bcf3', '#9d96f5', '#8378EA', '#96BFFF'];
/* ESM default export */ __webpack_exports__["default"] = ({
  color: colorAll,
  colorLayer: [['#37A2DA', '#ffd85c', '#fd7b5f'], ['#37A2DA', '#67E0E3', '#FFDB5C', '#ff9f7f', '#E062AE', '#9d96f5'], ['#37A2DA', '#32C5E9', '#9FE6B8', '#FFDB5C', '#ff9f7f', '#fb7293', '#e7bcf3', '#8378EA', '#96BFFF'], colorAll]
});

}),
5897: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ECEventProcessor: function() { return ECEventProcessor; }
});
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96585);
/* ESM import */var _clazz_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35350);

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
    if (zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isString(query)) {
      var condCptType = (0,_clazz_js__WEBPACK_IMPORTED_MODULE_1__.parseClassType)(query);
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
      zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each(query, function (val, key) {
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

}),
34955: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createWrap: function() { return createWrap; }
});

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

}),
35350: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  enableClassCheck: function() { return enableClassCheck; },
  enableClassExtend: function() { return enableClassExtend; },
  enableClassManagement: function() { return enableClassManagement; },
  isExtendedClass: function() { return isExtendedClass; },
  mountExtend: function() { return mountExtend; },
  parseClassType: function() { return parseClassType; }
});
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96585);

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
  zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.assert(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(componentType), 'componentType "' + componentType + '" illegal');
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
        (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(class_1, _super);
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
      zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.inherits(ExtendedClass, this);
    }
    zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.extend(ExtendedClass.prototype, proto);
    ExtendedClass[IS_EXTENDED_CLASS] = true;
    ExtendedClass.extend = this.extend;
    ExtendedClass.superCall = superCall;
    ExtendedClass.superApply = superApply;
    ExtendedClass.superClass = superClass;
    return ExtendedClass;
  };
}
function isESClass(fn) {
  return zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isFunction(fn) && /^class\s/.test(Function.prototype.toString.call(fn));
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
      zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each(obj, function (o, type) {
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
    zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each(storage, function (obj, type) {
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

}),
95202: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  enableSubTypeDefaulter: function() { return enableSubTypeDefaulter; },
  enableTopologicalTravel: function() { return enableTopologicalTravel; },
  getUID: function() { return getUID; },
  inheritDefaultOption: function() { return inheritDefaultOption; }
});
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96585);
/* ESM import */var _clazz_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35350);

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
    var componentTypeInfo = (0,_clazz_js__WEBPACK_IMPORTED_MODULE_0__.parseClassType)(componentType);
    subTypeDefaulters[componentTypeInfo.main] = defaulter;
  };
  target.determineSubType = function (componentType, option) {
    var type = option.type;
    if (!type) {
      var componentTypeMain = (0,_clazz_js__WEBPACK_IMPORTED_MODULE_0__.parseClassType)(componentType).main;
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
    zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.each(targetNameList, function (name) {
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
      zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.each(currVertex.successor, isInTargetNameSet ? removeEdgeAndAdd : removeEdge);
    }
    zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.each(targetNameSet, function () {
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
    zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.each(fullNameList, function (name) {
      var thisItem = createDependencyGraphItem(graph, name);
      var originalDeps = thisItem.originalDeps = dependencyGetter(name);
      var availableDeps = getAvailableDependencies(originalDeps, fullNameList);
      thisItem.entryCount = availableDeps.length;
      if (thisItem.entryCount === 0) {
        noEntryList.push(name);
      }
      zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.each(availableDeps, function (dependentName) {
        if (zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.indexOf(thisItem.predecessor, dependentName) < 0) {
          thisItem.predecessor.push(dependentName);
        }
        var thatItem = createDependencyGraphItem(graph, dependentName);
        if (zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.indexOf(thatItem.successor, dependentName) < 0) {
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
    zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.each(originalDeps, function (dep) {
      zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.indexOf(fullNameList, dep) >= 0 && availableDeps.push(dep);
    });
    return availableDeps;
  }
}
function inheritDefaultOption(superOption, subOption) {
  // See also `model/Component.ts#getDefaultOption`
  return zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.merge(zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.merge({}, superOption, true), subOption, true);
}

}),
53846: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  parseConditionalExpression: function() { return parseConditionalExpression; }
});
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96585);
/* ESM import */var _log_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99833);
/* ESM import */var _data_helper_dataValueHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15615);

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
    var condValue = this._condVal = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isString)(rVal) ? new RegExp(rVal) : (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isRegExp)(rVal) ? rVal : null;
    if (condValue == null) {
      var errMsg = '';
      if (false) {}
      (0,_log_js__WEBPACK_IMPORTED_MODULE_1__.throwError)(errMsg);
    }
  }
  RegExpEvaluator.prototype.evaluate = function (lVal) {
    var type = typeof lVal;
    return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isString)(type) ? this._condVal.test(lVal) : (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isNumber)(type) ? this._condVal.test(lVal + '') : false;
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
    (0,_log_js__WEBPACK_IMPORTED_MODULE_1__.throwError)(errMsg);
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
  if (!(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(subOptionArr)) {
    (0,_log_js__WEBPACK_IMPORTED_MODULE_1__.throwError)(errMsg);
  }
  if (!subOptionArr.length) {
    (0,_log_js__WEBPACK_IMPORTED_MODULE_1__.throwError)(errMsg);
  }
  var cond = op === 'and' ? new AndConditionInternal() : new OrConditionInternal();
  cond.children = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.map)(subOptionArr, function (subOption) {
    return parseOption(subOption, getters);
  });
  if (!cond.children.length) {
    (0,_log_js__WEBPACK_IMPORTED_MODULE_1__.throwError)(errMsg);
  }
  return cond;
}
function parseNotOption(exprOption, getters) {
  var subOption = exprOption.not;
  var errMsg = '';
  if (false) {}
  if (!isObjectNotArray(subOption)) {
    (0,_log_js__WEBPACK_IMPORTED_MODULE_1__.throwError)(errMsg);
  }
  var cond = new NotConditionInternal();
  cond.child = parseOption(subOption, getters);
  if (!cond.child) {
    (0,_log_js__WEBPACK_IMPORTED_MODULE_1__.throwError)(errMsg);
  }
  return cond;
}
function parseRelationalOption(exprOption, getters) {
  var errMsg = '';
  var valueGetterParam = getters.prepareGetValue(exprOption);
  var subCondList = [];
  var exprKeys = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.keys)(exprOption);
  var parserName = exprOption.parser;
  var valueParser = parserName ? (0,_data_helper_dataValueHelper_js__WEBPACK_IMPORTED_MODULE_2__.getRawValueParser)(parserName) : null;
  for (var i = 0; i < exprKeys.length; i++) {
    var keyRaw = exprKeys[i];
    if (keyRaw === 'parser' || getters.valueGetterAttrMap.get(keyRaw)) {
      continue;
    }
    var op = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(RELATIONAL_EXPRESSION_OP_ALIAS_MAP, keyRaw) ? RELATIONAL_EXPRESSION_OP_ALIAS_MAP[keyRaw] : keyRaw;
    var condValueRaw = exprOption[keyRaw];
    var condValueParsed = valueParser ? valueParser(condValueRaw) : condValueRaw;
    var evaluator = (0,_data_helper_dataValueHelper_js__WEBPACK_IMPORTED_MODULE_2__.createFilterComparator)(op, condValueParsed) || op === 'reg' && new RegExpEvaluator(condValueParsed);
    if (!evaluator) {
      if (false) {}
      (0,_log_js__WEBPACK_IMPORTED_MODULE_1__.throwError)(errMsg);
    }
    subCondList.push(evaluator);
  }
  if (!subCondList.length) {
    if (false) {}
    // No relational operator always disabled in case of dangers result.
    (0,_log_js__WEBPACK_IMPORTED_MODULE_1__.throwError)(errMsg);
  }
  var cond = new RelationalConditionInternal();
  cond.valueGetterParam = valueGetterParam;
  cond.valueParser = valueParser;
  cond.getValue = getters.getValue;
  cond.subCondList = subCondList;
  return cond;
}
function isObjectNotArray(val) {
  return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(val) && !(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isArrayLike)(val);
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

}),
75965: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createOrUpdatePatternFromDecal: function() { return createOrUpdatePatternFromDecal; }
});
/* ESM import */var zrender_lib_core_WeakMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2054);
/* ESM import */var zrender_lib_core_LRU_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45671);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96585);
/* ESM import */var _number_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81731);
/* ESM import */var _symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44421);
/* ESM import */var zrender_lib_canvas_graphic_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36711);
/* ESM import */var zrender_lib_core_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82379);

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







var decalMap = new zrender_lib_core_WeakMap_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
var decalCache = new zrender_lib_core_LRU_js__WEBPACK_IMPORTED_MODULE_1__["default"](100);
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
  var decalOpt = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.defaults)(decalObject, {
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
      if (value != null && !(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.isArray)(value) && !(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.isString)(value) && !(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.isNumber)(value) && typeof value !== 'boolean') {
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
    var canvas = !isSVG && zrender_lib_core_platform_js__WEBPACK_IMPORTED_MODULE_3__.platformApi.createCanvas();
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
        width = (0,_number_js__WEBPACK_IMPORTED_MODULE_4__.getLeastCommonMultiple)(width, lineBlockLengthsX[i]);
      }
      var symbolRepeats = 1;
      for (var i = 0, xlen = symbolArray.length; i < xlen; ++i) {
        symbolRepeats = (0,_number_js__WEBPACK_IMPORTED_MODULE_4__.getLeastCommonMultiple)(symbolRepeats, symbolArray[i].length);
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
        var symbol = (0,_symbol_js__WEBPACK_IMPORTED_MODULE_5__.createSymbol)(symbolType, x * scale, y * scale, width * scale, height * scale, decalOpt.color, decalOpt.symbolKeepAspect);
        if (isSVG) {
          var symbolVNode = zr.painter.renderOneToVNode(symbol);
          if (symbolVNode) {
            svgRoot.children.push(symbolVNode);
          }
        } else {
          // Paint to canvas for all other renderers.
          (0,zrender_lib_canvas_graphic_js__WEBPACK_IMPORTED_MODULE_6__.brushSingle)(ctx, symbol);
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
  if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.isString)(symbol)) {
    return [[symbol]];
  }
  var isAllString = true;
  for (var i = 0; i < symbol.length; ++i) {
    if (!(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.isString)(symbol[i])) {
      isAllString = false;
      break;
    }
  }
  if (isAllString) {
    return normalizeSymbolArray([symbol]);
  }
  var result = [];
  for (var i = 0; i < symbol.length; ++i) {
    if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.isString)(symbol[i])) {
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
  if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.isNumber)(dash)) {
    var dashValue = Math.ceil(dash);
    return [[dashValue, dashValue]];
  }
  /**
   * [20, 5] should be normalized into [[20, 5]],
   * while [20, [5, 10]] should be normalized into [[20, 20], [5, 10]]
   */
  var isAllNumber = true;
  for (var i = 0; i < dash.length; ++i) {
    if (!(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.isNumber)(dash[i])) {
      isAllNumber = false;
      break;
    }
  }
  if (isAllNumber) {
    return normalizeDashArrayX([dash]);
  }
  var result = [];
  for (var i = 0; i < dash.length; ++i) {
    if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.isNumber)(dash[i])) {
      var dashValue = Math.ceil(dash[i]);
      result.push([dashValue, dashValue]);
    } else {
      var dashValue = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.map)(dash[i], function (n) {
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
  if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.isNumber)(dash)) {
    var dashValue_1 = Math.ceil(dash);
    return [dashValue_1, dashValue_1];
  }
  var dashValue = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.map)(dash, function (n) {
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
  return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.map)(dash, function (line) {
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

}),
89114: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  findEventDispatcher: function() { return findEventDispatcher; }
});

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

}),
43718: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  addCommas: function() { return addCommas; },
  capitalFirst: function() { return capitalFirst; },
  convertToColorString: function() { return convertToColorString; },
  encodeHTML: function() { return /* reexport safe */ zrender_lib_core_dom_js__WEBPACK_IMPORTED_MODULE_0__.encodeHTML; },
  formatTime: function() { return formatTime; },
  formatTpl: function() { return formatTpl; },
  formatTplSimple: function() { return formatTplSimple; },
  getTextRect: function() { return /* reexport safe */ _legacy_getTextRect_js__WEBPACK_IMPORTED_MODULE_2__.getTextRect; },
  getTooltipMarker: function() { return getTooltipMarker; },
  makeValueReadable: function() { return makeValueReadable; },
  normalizeCssArray: function() { return normalizeCssArray; },
  toCamelCase: function() { return toCamelCase; },
  truncateText: function() { return /* reexport safe */ zrender_lib_graphic_helper_parseText_js__WEBPACK_IMPORTED_MODULE_1__.truncateText; },
  windowOpen: function() { return windowOpen; }
});
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96585);
/* ESM import */var zrender_lib_core_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75225);
/* ESM import */var _number_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81731);
/* ESM import */var _time_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41070);
/* ESM import */var zrender_lib_graphic_helper_parseText_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4199);
/* ESM import */var _legacy_getTextRect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67662);

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
  if (!(0,_number_js__WEBPACK_IMPORTED_MODULE_3__.isNumeric)(x)) {
    return zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__.isString(x) ? x : '-';
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
var normalizeCssArray = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__.normalizeCssArray;

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
    return str && zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__.trim(str) ? str : '-';
  }
  function isNumberUserReadable(num) {
    return !!(num != null && !isNaN(num) && isFinite(num));
  }
  var isTypeTime = valueType === 'time';
  var isValueDate = value instanceof Date;
  if (isTypeTime || isValueDate) {
    var date = isTypeTime ? (0,_number_js__WEBPACK_IMPORTED_MODULE_3__.parseDate)(value) : value;
    if (!isNaN(+date)) {
      return (0,_time_js__WEBPACK_IMPORTED_MODULE_5__.format)(date, USER_READABLE_DEFUALT_TIME_PATTERN, useUTC);
    } else if (isValueDate) {
      return '-';
    }
    // In other cases, continue to try to display the value in the following code.
  }
  if (valueType === 'ordinal') {
    return zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__.isStringSafe(value) ? stringToUserReadable(value) : zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__.isNumber(value) ? isNumberUserReadable(value) ? value + '' : '-' : '-';
  }
  // By default.
  var numericResult = (0,_number_js__WEBPACK_IMPORTED_MODULE_3__.numericToNumber)(value);
  return isNumberUserReadable(numericResult) ? addCommas(numericResult) : zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__.isStringSafe(value) ? stringToUserReadable(value) : typeof value === 'boolean' ? value + '' : '-';
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
  if (!zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__.isArray(paramsList)) {
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
      tpl = tpl.replace(wrapVar(TPL_VAR_ALIAS[k], seriesIdx), encode ? (0,zrender_lib_core_dom_js__WEBPACK_IMPORTED_MODULE_0__.encodeHTML)(val) : val);
    }
  }
  return tpl;
}
/**
 * simple Template formatter
 */
function formatTplSimple(tpl, param, encode) {
  zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__.each(param, function (value, key) {
    tpl = tpl.replace('{' + key + '}', encode ? (0,zrender_lib_core_dom_js__WEBPACK_IMPORTED_MODULE_0__.encodeHTML)(value) : value);
  });
  return tpl;
}
function getTooltipMarker(inOpt, extraCssText) {
  var opt = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__.isString(inOpt) ? {
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
    + (0,zrender_lib_core_dom_js__WEBPACK_IMPORTED_MODULE_0__.encodeHTML)(color) + ';' + (extraCssText || '') + '"></span>' : '<span style="display:inline-block;margin-right:4px;' + 'border-radius:10px;width:10px;height:10px;background-color:' + (0,zrender_lib_core_dom_js__WEBPACK_IMPORTED_MODULE_0__.encodeHTML)(color) + ';' + (extraCssText || '') + '"></span>';
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
  var date = (0,_number_js__WEBPACK_IMPORTED_MODULE_3__.parseDate)(value);
  var getUTC = isUTC ? 'getUTC' : 'get';
  var y = date[getUTC + 'FullYear']();
  var M = date[getUTC + 'Month']() + 1;
  var d = date[getUTC + 'Date']();
  var h = date[getUTC + 'Hours']();
  var m = date[getUTC + 'Minutes']();
  var s = date[getUTC + 'Seconds']();
  var S = date[getUTC + 'Milliseconds']();
  tpl = tpl.replace('MM', (0,_time_js__WEBPACK_IMPORTED_MODULE_5__.pad)(M, 2)).replace('M', M).replace('yyyy', y).replace('yy', (0,_time_js__WEBPACK_IMPORTED_MODULE_5__.pad)(y % 100 + '', 2)).replace('dd', (0,_time_js__WEBPACK_IMPORTED_MODULE_5__.pad)(d, 2)).replace('d', d).replace('hh', (0,_time_js__WEBPACK_IMPORTED_MODULE_5__.pad)(h, 2)).replace('h', h).replace('mm', (0,_time_js__WEBPACK_IMPORTED_MODULE_5__.pad)(m, 2)).replace('m', m).replace('ss', (0,_time_js__WEBPACK_IMPORTED_MODULE_5__.pad)(s, 2)).replace('s', s).replace('SSS', (0,_time_js__WEBPACK_IMPORTED_MODULE_5__.pad)(S, 3));
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
  return zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__.isString(color) ? color : zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__.isObject(color) ? color.colorStops && (color.colorStops[0] || {}).color || defaultColor : defaultColor;
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


}),
16636: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Arc: function() { return /* reexport safe */ zrender_lib_graphic_shape_Arc_js__WEBPACK_IMPORTED_MODULE_13__["default"]; },
  BezierCurve: function() { return /* reexport safe */ zrender_lib_graphic_shape_BezierCurve_js__WEBPACK_IMPORTED_MODULE_12__["default"]; },
  BoundingRect: function() { return /* reexport safe */ zrender_lib_core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_18__["default"]; },
  Circle: function() { return /* reexport safe */ zrender_lib_graphic_shape_Circle_js__WEBPACK_IMPORTED_MODULE_4__["default"]; },
  CompoundPath: function() { return /* reexport safe */ zrender_lib_graphic_CompoundPath_js__WEBPACK_IMPORTED_MODULE_15__["default"]; },
  Ellipse: function() { return /* reexport safe */ zrender_lib_graphic_shape_Ellipse_js__WEBPACK_IMPORTED_MODULE_5__["default"]; },
  Group: function() { return /* reexport safe */ zrender_lib_graphic_Group_js__WEBPACK_IMPORTED_MODULE_1__["default"]; },
  Image: function() { return /* reexport safe */ zrender_lib_graphic_Image_js__WEBPACK_IMPORTED_MODULE_2__["default"]; },
  IncrementalDisplayable: function() { return /* reexport safe */ zrender_lib_graphic_IncrementalDisplayable_js__WEBPACK_IMPORTED_MODULE_14__["default"]; },
  Line: function() { return /* reexport safe */ zrender_lib_graphic_shape_Line_js__WEBPACK_IMPORTED_MODULE_11__["default"]; },
  LinearGradient: function() { return /* reexport safe */ zrender_lib_graphic_LinearGradient_js__WEBPACK_IMPORTED_MODULE_16__["default"]; },
  OrientedBoundingRect: function() { return /* reexport safe */ zrender_lib_core_OrientedBoundingRect_js__WEBPACK_IMPORTED_MODULE_19__["default"]; },
  Path: function() { return /* reexport safe */ zrender_lib_graphic_Path_js__WEBPACK_IMPORTED_MODULE_21__["default"]; },
  Point: function() { return /* reexport safe */ zrender_lib_core_Point_js__WEBPACK_IMPORTED_MODULE_20__["default"]; },
  Polygon: function() { return /* reexport safe */ zrender_lib_graphic_shape_Polygon_js__WEBPACK_IMPORTED_MODULE_8__["default"]; },
  Polyline: function() { return /* reexport safe */ zrender_lib_graphic_shape_Polyline_js__WEBPACK_IMPORTED_MODULE_9__["default"]; },
  RadialGradient: function() { return /* reexport safe */ zrender_lib_graphic_RadialGradient_js__WEBPACK_IMPORTED_MODULE_17__["default"]; },
  Rect: function() { return /* reexport safe */ zrender_lib_graphic_shape_Rect_js__WEBPACK_IMPORTED_MODULE_10__["default"]; },
  Ring: function() { return /* reexport safe */ zrender_lib_graphic_shape_Ring_js__WEBPACK_IMPORTED_MODULE_7__["default"]; },
  Sector: function() { return /* reexport safe */ zrender_lib_graphic_shape_Sector_js__WEBPACK_IMPORTED_MODULE_6__["default"]; },
  Text: function() { return /* reexport safe */ zrender_lib_graphic_Text_js__WEBPACK_IMPORTED_MODULE_3__["default"]; },
  applyTransform: function() { return applyTransform; },
  clipPointsByRect: function() { return clipPointsByRect; },
  clipRectByRect: function() { return clipRectByRect; },
  createIcon: function() { return createIcon; },
  extendPath: function() { return extendPath; },
  extendShape: function() { return extendShape; },
  getShapeClass: function() { return getShapeClass; },
  getTransform: function() { return getTransform; },
  groupTransition: function() { return groupTransition; },
  initProps: function() { return /* reexport safe */ _animation_basicTransition_js__WEBPACK_IMPORTED_MODULE_0__.initProps; },
  isElementRemoved: function() { return /* reexport safe */ _animation_basicTransition_js__WEBPACK_IMPORTED_MODULE_0__.isElementRemoved; },
  lineLineIntersect: function() { return lineLineIntersect; },
  linePolygonIntersect: function() { return linePolygonIntersect; },
  makeImage: function() { return makeImage; },
  makePath: function() { return makePath; },
  mergePath: function() { return mergePath; },
  registerShape: function() { return registerShape; },
  removeElement: function() { return /* reexport safe */ _animation_basicTransition_js__WEBPACK_IMPORTED_MODULE_0__.removeElement; },
  removeElementWithFadeOut: function() { return /* reexport safe */ _animation_basicTransition_js__WEBPACK_IMPORTED_MODULE_0__.removeElementWithFadeOut; },
  resizePath: function() { return resizePath; },
  setTooltipConfig: function() { return setTooltipConfig; },
  subPixelOptimize: function() { return subPixelOptimize; },
  subPixelOptimizeLine: function() { return subPixelOptimizeLine; },
  subPixelOptimizeRect: function() { return subPixelOptimizeRect; },
  transformDirection: function() { return transformDirection; },
  traverseElements: function() { return traverseElements; },
  updateProps: function() { return /* reexport safe */ _animation_basicTransition_js__WEBPACK_IMPORTED_MODULE_0__.updateProps; }
});
/* ESM import */var zrender_lib_tool_path_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(20743);
/* ESM import */var zrender_lib_core_matrix_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(85215);
/* ESM import */var zrender_lib_core_vector_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(63261);
/* ESM import */var zrender_lib_graphic_Path_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(49678);
/* ESM import */var zrender_lib_core_Transformable_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(9757);
/* ESM import */var zrender_lib_graphic_Image_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31386);
/* ESM import */var zrender_lib_graphic_Group_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58695);
/* ESM import */var zrender_lib_graphic_Text_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97199);
/* ESM import */var zrender_lib_graphic_shape_Circle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26768);
/* ESM import */var zrender_lib_graphic_shape_Ellipse_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28939);
/* ESM import */var zrender_lib_graphic_shape_Sector_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(98289);
/* ESM import */var zrender_lib_graphic_shape_Ring_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92183);
/* ESM import */var zrender_lib_graphic_shape_Polygon_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71272);
/* ESM import */var zrender_lib_graphic_shape_Polyline_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(56490);
/* ESM import */var zrender_lib_graphic_shape_Rect_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(40361);
/* ESM import */var zrender_lib_graphic_shape_Line_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16504);
/* ESM import */var zrender_lib_graphic_shape_BezierCurve_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(80330);
/* ESM import */var zrender_lib_graphic_shape_Arc_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(52902);
/* ESM import */var zrender_lib_graphic_CompoundPath_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(33401);
/* ESM import */var zrender_lib_graphic_LinearGradient_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(71756);
/* ESM import */var zrender_lib_graphic_RadialGradient_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(20094);
/* ESM import */var zrender_lib_core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(44964);
/* ESM import */var zrender_lib_core_OrientedBoundingRect_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(70431);
/* ESM import */var zrender_lib_core_Point_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(12430);
/* ESM import */var zrender_lib_graphic_IncrementalDisplayable_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(99057);
/* ESM import */var zrender_lib_graphic_helper_subPixelOptimize_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(37763);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(96585);
/* ESM import */var _innerStore_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(55413);
/* ESM import */var _animation_basicTransition_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17524);

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

var mathMax = Math.max;
var mathMin = Math.min;
var _customShapeMap = {};
/**
 * Extend shape with parameters
 */
function extendShape(opts) {
  return zrender_lib_graphic_Path_js__WEBPACK_IMPORTED_MODULE_21__["default"].extend(opts);
}
var extendPathFromString = zrender_lib_tool_path_js__WEBPACK_IMPORTED_MODULE_22__.extendFromString;
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
  var path = zrender_lib_tool_path_js__WEBPACK_IMPORTED_MODULE_22__.createFromString(pathData, opts);
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
  var zrImg = new zrender_lib_graphic_Image_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
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
var mergePath = zrender_lib_tool_path_js__WEBPACK_IMPORTED_MODULE_22__.mergePath;
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
  zrender_lib_graphic_helper_subPixelOptimize_js__WEBPACK_IMPORTED_MODULE_23__.subPixelOptimizeLine(shape, shape, {
    lineWidth: lineWidth
  });
  return shape;
}
/**
 * Sub pixel optimize rect for canvas
 */
function subPixelOptimizeRect(param) {
  zrender_lib_graphic_helper_subPixelOptimize_js__WEBPACK_IMPORTED_MODULE_23__.subPixelOptimizeRect(param.shape, param.shape, param.style);
  return param;
}
/**
 * Sub pixel optimize for canvas
 *
 * @param position Coordinate, such as x, y
 * @param lineWidth Should be nonnegative integer.
 * @param positiveOrNegative Default false (negative).
 * @return Optimized position.
 */
var subPixelOptimize = zrender_lib_graphic_helper_subPixelOptimize_js__WEBPACK_IMPORTED_MODULE_23__.subPixelOptimize;
/**
 * Get transform matrix of target (param target),
 * in coordinate of its ancestor (param ancestor)
 *
 * @param target
 * @param [ancestor]
 */
function getTransform(target, ancestor) {
  var mat = zrender_lib_core_matrix_js__WEBPACK_IMPORTED_MODULE_24__.identity([]);
  while (target && target !== ancestor) {
    zrender_lib_core_matrix_js__WEBPACK_IMPORTED_MODULE_24__.mul(mat, target.getLocalTransform(), mat);
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
  if (transform && !(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_25__.isArrayLike)(transform)) {
    transform = zrender_lib_core_Transformable_js__WEBPACK_IMPORTED_MODULE_26__["default"].getLocalTransform(transform);
  }
  if (invert) {
    transform = zrender_lib_core_matrix_js__WEBPACK_IMPORTED_MODULE_24__.invert([], transform);
  }
  return zrender_lib_core_vector_js__WEBPACK_IMPORTED_MODULE_27__.applyTransform([], target, transform);
}
/**
 * @param direction 'left' 'right' 'top' 'bottom'
 * @param transform Transform matrix: like [1, 0, 0, 1, 0, 0]
 * @param invert Whether use invert matrix.
 * @return Transformed direction. 'left' 'right' 'top' 'bottom'
 */
function transformDirection(direction, transform, invert) {
  // Pick a base, ensure that transform result will not be (0, 0).
  var hBase = transform[4] === 0 || transform[5] === 0 || transform[0] === 0 ? 1 : Math.abs(2 * transform[4] / transform[0]);
  var vBase = transform[4] === 0 || transform[5] === 0 || transform[2] === 0 ? 1 : Math.abs(2 * transform[4] / transform[2]);
  var vertex = [direction === 'left' ? -hBase : direction === 'right' ? hBase : 0, direction === 'top' ? -vBase : direction === 'bottom' ? vBase : 0];
  vertex = applyTransform(vertex, transform, invert);
  return Math.abs(vertex[0]) > Math.abs(vertex[1]) ? vertex[0] > 0 ? 'right' : 'left' : vertex[1] > 0 ? 'bottom' : 'top';
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
      obj.shape = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_25__.extend)({}, el.shape);
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
        (0,_animation_basicTransition_js__WEBPACK_IMPORTED_MODULE_0__.updateProps)(el, newProp, animatableModel, (0,_innerStore_js__WEBPACK_IMPORTED_MODULE_28__.getECData)(el).dataIndex);
      }
    }
  });
}
function clipPointsByRect(points, rect) {
  // FIXME: This way might be incorrect when graphic clipped by a corner
  // and when element has a border.
  return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_25__.map)(points, function (point) {
    var x = point[0];
    x = mathMax(x, rect.x);
    x = mathMin(x, rect.x + rect.width);
    var y = point[1];
    y = mathMax(y, rect.y);
    y = mathMin(y, rect.y + rect.height);
    return [x, y];
  });
}
/**
 * Return a new clipped rect. If rect size are negative, return undefined.
 */
function clipRectByRect(targetRect, rect) {
  var x = mathMax(targetRect.x, rect.x);
  var x2 = mathMin(targetRect.x + targetRect.width, rect.x + rect.width);
  var y = mathMax(targetRect.y, rect.y);
  var y2 = mathMin(targetRect.y + targetRect.height, rect.y + rect.height);
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
  var innerOpts = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_25__.extend)({
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
    return iconStr.indexOf('image://') === 0 ? (style.image = iconStr.slice(8), (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_25__.defaults)(style, rect), new zrender_lib_graphic_Image_js__WEBPACK_IMPORTED_MODULE_2__["default"](innerOpts)) : makePath(iconStr.replace('path://', ''), innerOpts, rect, 'center');
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
function setTooltipConfig(opt) {
  var itemTooltipOption = opt.itemTooltipOption;
  var componentModel = opt.componentModel;
  var itemName = opt.itemName;
  var itemTooltipOptionObj = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_25__.isString)(itemTooltipOption) ? {
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
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_25__.each)((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_25__.keys)(formatterParamsExtra), function (key) {
      if (!(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_25__.hasOwn)(formatterParams, key)) {
        formatterParams[key] = formatterParamsExtra[key];
        formatterParams.$vars.push(key);
      }
    });
  }
  var ecData = (0,_innerStore_js__WEBPACK_IMPORTED_MODULE_28__.getECData)(opt.el);
  ecData.componentMainType = mainType;
  ecData.componentIndex = componentIndex;
  ecData.tooltipConfig = {
    name: itemName,
    option: (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_25__.defaults)({
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
    if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_25__.isArray)(els)) {
      for (var i = 0; i < els.length; i++) {
        traverseElement(els[i], cb);
      }
    } else {
      traverseElement(els, cb);
    }
  }
}
// Register built-in shapes. These shapes might be overwritten
// by users, although we do not recommend that.
registerShape('circle', zrender_lib_graphic_shape_Circle_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
registerShape('ellipse', zrender_lib_graphic_shape_Ellipse_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
registerShape('sector', zrender_lib_graphic_shape_Sector_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
registerShape('ring', zrender_lib_graphic_shape_Ring_js__WEBPACK_IMPORTED_MODULE_7__["default"]);
registerShape('polygon', zrender_lib_graphic_shape_Polygon_js__WEBPACK_IMPORTED_MODULE_8__["default"]);
registerShape('polyline', zrender_lib_graphic_shape_Polyline_js__WEBPACK_IMPORTED_MODULE_9__["default"]);
registerShape('rect', zrender_lib_graphic_shape_Rect_js__WEBPACK_IMPORTED_MODULE_10__["default"]);
registerShape('line', zrender_lib_graphic_shape_Line_js__WEBPACK_IMPORTED_MODULE_11__["default"]);
registerShape('bezierCurve', zrender_lib_graphic_shape_BezierCurve_js__WEBPACK_IMPORTED_MODULE_12__["default"]);
registerShape('arc', zrender_lib_graphic_shape_Arc_js__WEBPACK_IMPORTED_MODULE_13__["default"]);


}),
55413: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getECData: function() { return getECData; },
  setCommonECData: function() { return setCommonECData; }
});
/* ESM import */var _model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46451);

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

var getECData = (0,_model_js__WEBPACK_IMPORTED_MODULE_0__.makeInner)();
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

}),
37624: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  HV_NAMES: function() { return HV_NAMES; },
  LOCATION_PARAMS: function() { return LOCATION_PARAMS; },
  box: function() { return box; },
  copyLayoutParams: function() { return copyLayoutParams; },
  fetchLayoutMode: function() { return fetchLayoutMode; },
  getAvailableSize: function() { return getAvailableSize; },
  getLayoutParams: function() { return getLayoutParams; },
  getLayoutRect: function() { return getLayoutRect; },
  hbox: function() { return hbox; },
  mergeLayoutParam: function() { return mergeLayoutParam; },
  positionElement: function() { return positionElement; },
  sizeCalculable: function() { return sizeCalculable; },
  vbox: function() { return vbox; }
});
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96585);
/* ESM import */var zrender_lib_core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44964);
/* ESM import */var _number_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81731);
/* ESM import */var _format_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43718);

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




var each = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each;
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
var vbox = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.curry(boxLayout, 'vertical');
/**
 * HBox layouting
 * @param {module:zrender/graphic/Group} group
 * @param {number} gap
 * @param {number} [width=Infinity]
 * @param {number} [height=Infinity]
 */
var hbox = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.curry(boxLayout, 'horizontal');
/**
 * If x or x2 is not specified or 'center' 'left' 'right',
 * the width would be as long as possible.
 * If y or y2 is not specified or 'middle' 'top' 'bottom',
 * the height would be as long as possible.
 */
function getAvailableSize(positionInfo, containerRect, margin) {
  var containerWidth = containerRect.width;
  var containerHeight = containerRect.height;
  var x = (0,_number_js__WEBPACK_IMPORTED_MODULE_1__.parsePercent)(positionInfo.left, containerWidth);
  var y = (0,_number_js__WEBPACK_IMPORTED_MODULE_1__.parsePercent)(positionInfo.top, containerHeight);
  var x2 = (0,_number_js__WEBPACK_IMPORTED_MODULE_1__.parsePercent)(positionInfo.right, containerWidth);
  var y2 = (0,_number_js__WEBPACK_IMPORTED_MODULE_1__.parsePercent)(positionInfo.bottom, containerHeight);
  (isNaN(x) || isNaN(parseFloat(positionInfo.left))) && (x = 0);
  (isNaN(x2) || isNaN(parseFloat(positionInfo.right))) && (x2 = containerWidth);
  (isNaN(y) || isNaN(parseFloat(positionInfo.top))) && (y = 0);
  (isNaN(y2) || isNaN(parseFloat(positionInfo.bottom))) && (y2 = containerHeight);
  margin = _format_js__WEBPACK_IMPORTED_MODULE_2__.normalizeCssArray(margin || 0);
  return {
    width: Math.max(x2 - x - margin[1] - margin[3], 0),
    height: Math.max(y2 - y - margin[0] - margin[2], 0)
  };
}
/**
 * Parse position info.
 */
function getLayoutRect(positionInfo, containerRect, margin) {
  margin = _format_js__WEBPACK_IMPORTED_MODULE_2__.normalizeCssArray(margin || 0);
  var containerWidth = containerRect.width;
  var containerHeight = containerRect.height;
  var left = (0,_number_js__WEBPACK_IMPORTED_MODULE_1__.parsePercent)(positionInfo.left, containerWidth);
  var top = (0,_number_js__WEBPACK_IMPORTED_MODULE_1__.parsePercent)(positionInfo.top, containerHeight);
  var right = (0,_number_js__WEBPACK_IMPORTED_MODULE_1__.parsePercent)(positionInfo.right, containerWidth);
  var bottom = (0,_number_js__WEBPACK_IMPORTED_MODULE_1__.parsePercent)(positionInfo.bottom, containerHeight);
  var width = (0,_number_js__WEBPACK_IMPORTED_MODULE_1__.parsePercent)(positionInfo.width, containerWidth);
  var height = (0,_number_js__WEBPACK_IMPORTED_MODULE_1__.parsePercent)(positionInfo.height, containerHeight);
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
  var rect = new zrender_lib_core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_3__["default"](left + margin[3], top + margin[0], width, height);
  rect.margin = margin;
  return rect;
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
    rect = el.type === 'group' ? new zrender_lib_core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_3__["default"](0, 0, +positionInfo.width || 0, +positionInfo.height || 0) : el.getBoundingRect();
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
  var layoutRect = getLayoutRect(zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.defaults({
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
  return zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isObject(layoutMode) ? layoutMode : layoutMode ? {
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
  !zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isArray(ignoreSize) && (ignoreSize = [ignoreSize, ignoreSize]);
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
      hasProp(newOption, name) && (newParams[name] = merged[name] = newOption[name]);
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
        if (!hasProp(newParams, name_1) && hasProp(targetOption, name_1)) {
          newParams[name_1] = targetOption[name_1];
          break;
        }
      }
      return newParams;
    }
  }
  function hasProp(obj, name) {
    return obj.hasOwnProperty(name);
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
    source.hasOwnProperty(name) && (target[name] = source[name]);
  });
  return target;
}

}),
99833: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  deprecateLog: function() { return deprecateLog; },
  deprecateReplaceLog: function() { return deprecateReplaceLog; },
  error: function() { return error; },
  log: function() { return log; },
  makePrintable: function() { return makePrintable; },
  throwError: function() { return throwError; },
  warn: function() { return warn; }
});

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

}),
46451: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  MULTIPLE_REFERRING: function() { return MULTIPLE_REFERRING; },
  SINGLE_REFERRING: function() { return SINGLE_REFERRING; },
  TEXT_STYLE_OPTIONS: function() { return TEXT_STYLE_OPTIONS; },
  compressBatches: function() { return compressBatches; },
  convertOptionIdName: function() { return convertOptionIdName; },
  defaultEmphasis: function() { return defaultEmphasis; },
  getAttribute: function() { return getAttribute; },
  getDataItemValue: function() { return getDataItemValue; },
  getTooltipRenderMode: function() { return getTooltipRenderMode; },
  groupData: function() { return groupData; },
  interpolateRawValues: function() { return interpolateRawValues; },
  isComponentIdInternal: function() { return isComponentIdInternal; },
  isDataItemOption: function() { return isDataItemOption; },
  isNameSpecified: function() { return isNameSpecified; },
  makeInner: function() { return makeInner; },
  makeInternalComponentId: function() { return makeInternalComponentId; },
  mappingToExists: function() { return mappingToExists; },
  normalizeToArray: function() { return normalizeToArray; },
  parseFinder: function() { return parseFinder; },
  preParseFinder: function() { return preParseFinder; },
  queryDataIndex: function() { return queryDataIndex; },
  queryReferringComponents: function() { return queryReferringComponents; },
  setAttribute: function() { return setAttribute; },
  setComponentTypeToKeyInfo: function() { return setComponentTypeToKeyInfo; }
});
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96585);
/* ESM import */var zrender_lib_core_env_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76226);
/* ESM import */var _number_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81731);

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
  return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(dataItem) && !(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(dataItem) && !(dataItem instanceof Date) ? dataItem.value : dataItem;
}
/**
 * data could be [12, 2323, {value: 223}, [1221, 23], {value: [2, 23]}]
 * This helper method determine if dataItem has extra option besides value
 */
function isDataItemOption(dataItem) {
  return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(dataItem) && !(dataItem instanceof Array);
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
  var existingIdIdxMap = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.createHashMap)();
  // Validate id and name on user input option.
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each)(newCmptOptions, function (cmptOption, index) {
    if (!(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(cmptOption)) {
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
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each)(newCmptOptions, function (cmptOption, index) {
    if (!cmptOption || cmptOption.id == null) {
      return;
    }
    var optionId = makeComparableKey(cmptOption.id);
    var existingIdx = existingIdIdxMap.get(optionId);
    if (existingIdx != null) {
      var resultItem = result[existingIdx];
      (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.assert)(!resultItem.newOption, 'Duplicated option on id "' + optionId + '".');
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
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each)(newCmptOptions, function (cmptOption, index) {
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
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each)(newCmptOptions, function (cmptOption) {
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
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each)(newCmptOptions, function (cmptOption) {
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
  var idMap = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.createHashMap)();
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each)(mapResult, function (item) {
    var existing = item.existing;
    existing && idMap.set(existing.id, item);
  });
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each)(mapResult, function (item) {
    var opt = item.newOption;
    // Force ensure id not duplicated.
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.assert)(!opt || opt.id == null || !idMap.get(opt.id) || idMap.get(opt.id) === item, 'id duplicates: ' + (opt && opt.id));
    opt && opt.id != null && idMap.set(opt.id, item);
    !item.keyInfo && (item.keyInfo = {});
  });
  // Make name and id.
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each)(mapResult, function (item, index) {
    var existing = item.existing;
    var opt = item.newOption;
    var keyInfo = item.keyInfo;
    if (!(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(opt)) {
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
  return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isString)(idOrName) ? idOrName : (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isNumber)(idOrName) || (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isStringSafe)(idOrName) ? idOrName + '' : defaultValue;
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
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each)(mappingResult, function (item) {
    var newOption = item.newOption;
    if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(newOption)) {
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
    return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(payload.dataIndex) ? (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.map)(payload.dataIndex, function (value) {
      return data.indexOfRawIndex(value);
    }) : data.indexOfRawIndex(payload.dataIndex);
  } else if (payload.name != null) {
    return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(payload.name) ? (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.map)(payload.name, function (value) {
      return data.indexOfName(value);
    }) : data.indexOfName(payload.name);
  }
}
/**
 * Enable property storage to any host object.
 * Notice: Serialization is not supported.
 *
 * For example:
 * let inner = zrUitl.makeInner();
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
 *
 * @return {Function}
 */
function makeInner() {
  var key = '__ec_inner_' + innerUniqueIndex++;
  return function (hostObj) {
    return hostObj[key] || (hostObj[key] = {});
  };
}
var innerUniqueIndex = (0,_number_js__WEBPACK_IMPORTED_MODULE_1__.getRandomIdBase)();
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
  if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isString)(finderInput)) {
    var obj = {};
    obj[finderInput + 'Index'] = 0;
    finder = obj;
  } else {
    finder = finderInput;
  }
  var queryOptionMap = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.createHashMap)();
  var others = {};
  var mainTypeSpecified = false;
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each)(finder, function (value, key) {
    // Exclude 'dataIndex' and other illgal keys.
    if (key === 'dataIndex' || key === 'dataIndexInside') {
      others[key] = value;
      return;
    }
    var parsedKey = key.match(/^(\w+)(Index|Id|Name)$/) || [];
    var mainType = parsedKey[1];
    var queryType = (parsedKey[2] || '').toLowerCase();
    if (!mainType || !queryType || opt && opt.includeMainTypes && (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.indexOf)(opt.includeMainTypes, mainType) < 0) {
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
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.assert)(opt.enableNone, '`"none"` or `false` is not a valid value on index option.');
    result.models = [];
    return result;
  }
  // `queryComponents` will return all components if
  // both all of index/id/name are null/undefined.
  if (indexOption === 'all') {
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.assert)(opt.enableAll, '`"all"` is not a valid value on index option.');
    indexOption = idOption = nameOption = null;
  }
  result.models = ecModel.queryComponents({
    mainType: mainType,
    index: indexOption,
    id: idOption,
    name: nameOption
  });
  return result;
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
    return zrender_lib_core_env_js__WEBPACK_IMPORTED_MODULE_2__["default"].domSupported ? 'html' : 'richText';
  } else {
    return renderModeOption || 'html';
  }
}
/**
 * Group a list by key.
 */
function groupData(array, getKey // return key
) {
  var buckets = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.createHashMap)();
  var keys = [];
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each)(array, function (item) {
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
  if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isNumber)(targetValue)) {
    var value = interpolateNumber(sourceValue || 0, targetValue, percent);
    return (0,_number_js__WEBPACK_IMPORTED_MODULE_1__.round)(value, isAutoPrecision ? Math.max((0,_number_js__WEBPACK_IMPORTED_MODULE_1__.getPrecision)(sourceValue || 0), (0,_number_js__WEBPACK_IMPORTED_MODULE_1__.getPrecision)(targetValue)) : precision);
  } else if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isString)(targetValue)) {
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
        interpolated[i] = (0,_number_js__WEBPACK_IMPORTED_MODULE_1__.round)(value, isAutoPrecision ? Math.max((0,_number_js__WEBPACK_IMPORTED_MODULE_1__.getPrecision)(leftVal), (0,_number_js__WEBPACK_IMPORTED_MODULE_1__.getPrecision)(rightVal)) : precision);
      }
    }
    return interpolated;
  }
}

}),
81731: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  MAX_SAFE_INTEGER: function() { return MAX_SAFE_INTEGER; },
  addSafe: function() { return addSafe; },
  asc: function() { return asc; },
  getGreatestCommonDividor: function() { return getGreatestCommonDividor; },
  getLeastCommonMultiple: function() { return getLeastCommonMultiple; },
  getPercentSeats: function() { return getPercentSeats; },
  getPercentWithPrecision: function() { return getPercentWithPrecision; },
  getPixelPrecision: function() { return getPixelPrecision; },
  getPrecision: function() { return getPrecision; },
  getPrecisionSafe: function() { return getPrecisionSafe; },
  getRandomIdBase: function() { return getRandomIdBase; },
  isNumeric: function() { return isNumeric; },
  isRadianAroundZero: function() { return isRadianAroundZero; },
  linearMap: function() { return linearMap; },
  nice: function() { return nice; },
  numericToNumber: function() { return numericToNumber; },
  parseDate: function() { return parseDate; },
  parsePercent: function() { return parsePercent; },
  quantile: function() { return quantile; },
  quantity: function() { return quantity; },
  quantityExponent: function() { return quantityExponent; },
  reformIntervals: function() { return reformIntervals; },
  remRadian: function() { return remRadian; },
  round: function() { return round; }
});
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96585);

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
// Although chrome already enlarge this number to 100 for `toFixed`, but
// we sill follow the spec for compatibility.
var ROUND_SUPPORTED_PRECISION_MAX = 20;
function _trim(str) {
  return str.replace(/^\s+|\s+$/g, '');
}
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
 * Convert a percent string to absolute number.
 * Returns NaN if percent is not a valid string or number
 */
function parsePercent(percent, all) {
  switch (percent) {
    case 'center':
    case 'middle':
      percent = '50%';
      break;
    case 'left':
    case 'top':
      percent = '0%';
      break;
    case 'right':
    case 'bottom':
      percent = '100%';
      break;
  }
  if (zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isString(percent)) {
    if (_trim(percent).match(/%$/)) {
      return parseFloat(percent) / 100 * all;
    }
    return parseFloat(percent);
  }
  return percent == null ? NaN : +percent;
}
function round(x, precision, returnStr) {
  if (precision == null) {
    precision = 10;
  }
  // Avoid range error
  precision = Math.min(Math.max(0, precision), ROUND_SUPPORTED_PRECISION_MAX);
  // PENDING: 1.005.toFixed(2) is '1.00' rather than '1.01'
  x = (+x).toFixed(precision);
  return returnStr ? x : +x;
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
      if (Math.round(val * e) / e === val) {
        return i;
      }
    }
  }
  return getPrecisionSafe(val);
}
/**
 * Get precision with slow but safe method
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
  return Math.max(0, decimalPartLen - exp);
}
/**
 * Minimal dicernible data precisioin according to a single pixel.
 */
function getPixelPrecision(dataExtent, pixelExtent) {
  var log = Math.log;
  var LN10 = Math.LN10;
  var dataQuantity = Math.floor(log(dataExtent[1] - dataExtent[0]) / LN10);
  var sizeQuantity = Math.round(log(Math.abs(pixelExtent[1] - pixelExtent[0])) / LN10);
  // toFixed() digits argument must be between 0 and 20.
  var precision = Math.min(Math.max(-dataQuantity + sizeQuantity, 0), 20);
  return !isFinite(precision) ? 20 : precision;
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
  var sum = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.reduce(valueList, function (acc, val) {
    return acc + (isNaN(val) ? 0 : val);
  }, 0);
  if (sum === 0) {
    return [];
  }
  var digits = Math.pow(10, precision);
  var votesPerQuota = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.map(valueList, function (val) {
    return (isNaN(val) ? 0 : val) / sum * digits * 100;
  });
  var targetSeats = digits * 100;
  var seats = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.map(votesPerQuota, function (votes) {
    // Assign automatic seats.
    return Math.floor(votes);
  });
  var currentSum = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.reduce(seats, function (acc, val) {
    return acc + val;
  }, 0);
  var remainder = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.map(votesPerQuota, function (votes, idx) {
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
  return zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.map(seats, function (seat) {
    return seat / digits;
  });
}
/**
 * Solve the floating point adding problem like 0.1 + 0.2 === 0.30000000000000004
 * See <http://0.30000000000000004.com/>
 */
function addSafe(val0, val1) {
  var maxPrecision = Math.max(getPrecision(val0), getPrecision(val1));
  // const multiplier = Math.pow(10, maxPrecision);
  // return (Math.round(val0 * multiplier) + Math.round(val1 * multiplier)) / multiplier;
  var sum = val0 + val1;
  // // PENDING: support more?
  return maxPrecision > ROUND_SUPPORTED_PRECISION_MAX ? sum : round(sum, maxPrecision);
}
// Number.MAX_SAFE_INTEGER, ie do not support.
var MAX_SAFE_INTEGER = 9007199254740991;
/**
 * To 0 - 2 * PI, considering negative radian.
 */
function remRadian(radian) {
  var pi2 = Math.PI * 2;
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
  } else if (zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isString(value)) {
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
  return new Date(Math.round(value));
}
/**
 * Quantity of a number. e.g. 0.1, 1, 10, 100
 *
 * @param val
 * @return
 */
function quantity(val) {
  return Math.pow(10, quantityExponent(val));
}
/**
 * Exponent of the quantity of a number
 * e.g., 1234 equals to 1.234*10^3, so quantityExponent(1234) is 3
 *
 * @param val non-negative value
 * @return
 */
function quantityExponent(val) {
  if (val === 0) {
    return 0;
  }
  var exp = Math.floor(Math.log(val) / Math.LN10);
  /**
   * exp is expected to be the rounded-down result of the base-10 log of val.
   * But due to the precision loss with Math.log(val), we need to restore it
   * using 10^exp to make sure we can get val back from exp. #11249
   */
  if (val / Math.pow(10, exp) >= 10) {
    exp++;
  }
  return exp;
}
/**
 * find a “nice” number approximately equal to x. Round the number if round = true,
 * take ceiling if round = false. The primary observation is that the “nicest”
 * numbers in decimal are 1, 2, and 5, and all power-of-ten multiples of these numbers.
 *
 * See "Nice Numbers for Graph Labels" of Graphic Gems.
 *
 * @param  val Non-negative value.
 * @param  round
 * @return Niced number
 */
function nice(val, round) {
  var exponent = quantityExponent(val);
  var exp10 = Math.pow(10, exponent);
  var f = val / exp10; // 1 <= f < 10
  var nf;
  if (round) {
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
  // Fix 3 * 0.1 === 0.30000000000000004 issue (see IEEE 754).
  // 20 is the uppper bound of toFixed.
  return exponent >= -20 ? +val.toFixed(exponent < 0 ? -exponent : 0) : val;
}
/**
 * This code was copied from "d3.js"
 * <https://github.com/d3/d3/blob/9cc9a875e636a1dcf36cc1e07bdf77e1ad6e2c74/src/arrays/quantile.js>.
 * See the license statement at the head of this file.
 * @param ascArr
 */
function quantile(ascArr, p) {
  var H = (ascArr.length - 1) * p + 1;
  var h = Math.floor(H);
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
  && (valFloat !== 0 || !zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isString(val) || val.indexOf('x') <= 0) // For case ' 0x0 '.
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
  return Math.round(Math.random() * 9);
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

}),
35083: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var _graphic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49678);

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
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(SausagePath, _super);
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
}(_graphic_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* ESM default export */ __webpack_exports__["default"] = (SausagePath);

}),
63344: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DISPLAY_STATES: function() { return DISPLAY_STATES; },
  DOWNPLAY_ACTION_TYPE: function() { return DOWNPLAY_ACTION_TYPE; },
  HIGHLIGHT_ACTION_TYPE: function() { return HIGHLIGHT_ACTION_TYPE; },
  HOVER_STATE_BLUR: function() { return HOVER_STATE_BLUR; },
  HOVER_STATE_EMPHASIS: function() { return HOVER_STATE_EMPHASIS; },
  HOVER_STATE_NORMAL: function() { return HOVER_STATE_NORMAL; },
  SELECT_ACTION_TYPE: function() { return SELECT_ACTION_TYPE; },
  SPECIAL_STATES: function() { return SPECIAL_STATES; },
  TOGGLE_SELECT_ACTION_TYPE: function() { return TOGGLE_SELECT_ACTION_TYPE; },
  UNSELECT_ACTION_TYPE: function() { return UNSELECT_ACTION_TYPE; },
  Z2_EMPHASIS_LIFT: function() { return Z2_EMPHASIS_LIFT; },
  Z2_SELECT_LIFT: function() { return Z2_SELECT_LIFT; },
  allLeaveBlur: function() { return allLeaveBlur; },
  blurComponent: function() { return blurComponent; },
  blurSeries: function() { return blurSeries; },
  blurSeriesFromHighlightPayload: function() { return blurSeriesFromHighlightPayload; },
  clearStates: function() { return clearStates; },
  disableHoverEmphasis: function() { return disableHoverEmphasis; },
  enableComponentHighDownFeatures: function() { return enableComponentHighDownFeatures; },
  enableHoverEmphasis: function() { return enableHoverEmphasis; },
  enableHoverFocus: function() { return enableHoverFocus; },
  enterBlur: function() { return enterBlur; },
  enterEmphasis: function() { return enterEmphasis; },
  enterEmphasisWhenMouseOver: function() { return enterEmphasisWhenMouseOver; },
  enterSelect: function() { return enterSelect; },
  findComponentHighDownDispatchers: function() { return findComponentHighDownDispatchers; },
  getAllSelectedIndices: function() { return getAllSelectedIndices; },
  getHighlightDigit: function() { return getHighlightDigit; },
  handleGlobalMouseOutForHighDown: function() { return handleGlobalMouseOutForHighDown; },
  handleGlobalMouseOverForHighDown: function() { return handleGlobalMouseOverForHighDown; },
  isHighDownDispatcher: function() { return isHighDownDispatcher; },
  isHighDownPayload: function() { return isHighDownPayload; },
  isSelectChangePayload: function() { return isSelectChangePayload; },
  leaveBlur: function() { return leaveBlur; },
  leaveEmphasis: function() { return leaveEmphasis; },
  leaveEmphasisWhenMouseOut: function() { return leaveEmphasisWhenMouseOut; },
  leaveSelect: function() { return leaveSelect; },
  savePathStates: function() { return savePathStates; },
  setAsHighDownDispatcher: function() { return setAsHighDownDispatcher; },
  setDefaultStateProxy: function() { return setDefaultStateProxy; },
  setStatesFlag: function() { return setStatesFlag; },
  setStatesStylesFromModel: function() { return setStatesStylesFromModel; },
  toggleHoverEmphasis: function() { return toggleHoverEmphasis; },
  toggleSelectionFromPayload: function() { return toggleSelectionFromPayload; },
  updateSeriesElementSelection: function() { return updateSeriesElementSelection; }
});
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96585);
/* ESM import */var _innerStore_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55413);
/* ESM import */var zrender_lib_tool_color_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67375);
/* ESM import */var _model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46451);
/* ESM import */var zrender_lib_graphic_Path_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49678);

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
var getSavedStates = (0,_model_js__WEBPACK_IMPORTED_MODULE_0__.makeInner)();
var getComponentStates = (0,_model_js__WEBPACK_IMPORTED_MODULE_0__.makeInner)();
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
  var hasSelect = targetStates && (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.indexOf)(targetStates, 'select') >= 0;
  var cloned = false;
  if (el instanceof zrender_lib_graphic_Path_js__WEBPACK_IMPORTED_MODULE_2__["default"]) {
    var store = getSavedStates(el);
    var fromFill = hasSelect ? store.selectFill || store.normalFill : store.normalFill;
    var fromStroke = hasSelect ? store.selectStroke || store.normalStroke : store.normalStroke;
    if (hasFillOrStroke(fromFill) || hasFillOrStroke(fromStroke)) {
      state = state || {};
      var emphasisStyle = state.style || {};
      // inherit case
      if (emphasisStyle.fill === 'inherit') {
        cloned = true;
        state = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.extend)({}, state);
        emphasisStyle = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.extend)({}, emphasisStyle);
        emphasisStyle.fill = fromFill;
      }
      // Apply default color lift
      else if (!hasFillOrStroke(emphasisStyle.fill) && hasFillOrStroke(fromFill)) {
        cloned = true;
        // Not modify the original value.
        state = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.extend)({}, state);
        emphasisStyle = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.extend)({}, emphasisStyle);
        // Already being applied 'emphasis'. DON'T lift color multiple times.
        emphasisStyle.fill = (0,zrender_lib_tool_color_js__WEBPACK_IMPORTED_MODULE_3__.liftColor)(fromFill);
      }
      // Not highlight stroke if fill has been highlighted.
      else if (!hasFillOrStroke(emphasisStyle.stroke) && hasFillOrStroke(fromStroke)) {
        if (!cloned) {
          state = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.extend)({}, state);
          emphasisStyle = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.extend)({}, emphasisStyle);
        }
        emphasisStyle.stroke = (0,zrender_lib_tool_color_js__WEBPACK_IMPORTED_MODULE_3__.liftColor)(fromStroke);
      }
      state.style = emphasisStyle;
    }
  }
  if (state) {
    // TODO Share with textContent?
    if (state.z2 == null) {
      if (!cloned) {
        state = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.extend)({}, state);
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
      state = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.extend)({}, state);
      var z2SelectLift = el.z2SelectLift;
      state.z2 = el.z2 + (z2SelectLift != null ? z2SelectLift : Z2_SELECT_LIFT);
    }
  }
  return state;
}
function createBlurDefaultState(el, stateName, state) {
  var hasBlur = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.indexOf)(el.currentStates, stateName) >= 0;
  var currentOpacity = el.style.opacity;
  var fromState = !hasBlur ? getFromStateStyle(el, ['opacity'], stateName, {
    opacity: 1
  }) : null;
  state = state || {};
  var blurStyle = state.style || {};
  if (blurStyle.opacity == null) {
    // clone state
    state = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.extend)({}, state);
    blurStyle = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.extend)({
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
    var isSeries = componentType === 'series';
    var view = isSeries ? api.getViewOfSeriesModel(componentModel) : api.getViewOfComponentModel(componentModel);
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
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.each)(allComponentViews, function (view) {
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
      if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isArrayLike)(focus)) {
        leaveBlurOfIndices(seriesModel.getData(), focus);
      } else if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isObject)(focus)) {
        var dataTypes = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.keys)(focus);
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
  var dataIndex = (0,_model_js__WEBPACK_IMPORTED_MODULE_0__.queryDataIndex)(data, payload);
  // Pick the first one if there is multiple/none exists.
  dataIndex = ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isArray)(dataIndex) ? dataIndex[0] : dataIndex) || 0;
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
    var ecData = (0,_innerStore_js__WEBPACK_IMPORTED_MODULE_4__.getECData)(el);
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
    if ((0,_innerStore_js__WEBPACK_IMPORTED_MODULE_4__.getECData)(dispatchers[i]).focus === 'self') {
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
  var ecData = (0,_innerStore_js__WEBPACK_IMPORTED_MODULE_4__.getECData)(dispatcher);
  var _a = findComponentHighDownDispatchers(ecData.componentMainType, ecData.componentIndex, ecData.componentHighDownName, api),
    dispatchers = _a.dispatchers,
    focusSelf = _a.focusSelf;
  // If `findHighDownDispatchers` is supported on the component,
  // highlight/downplay elements with the same name.
  if (dispatchers) {
    if (focusSelf) {
      blurComponent(ecData.componentMainType, ecData.componentIndex, api);
    }
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.each)(dispatchers, function (dispatcher) {
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
  var ecData = (0,_innerStore_js__WEBPACK_IMPORTED_MODULE_4__.getECData)(dispatcher);
  var dispatchers = findComponentHighDownDispatchers(ecData.componentMainType, ecData.componentIndex, ecData.componentHighDownName, api).dispatchers;
  if (dispatchers) {
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.each)(dispatchers, function (dispatcher) {
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
  var dataIndex = (0,_model_js__WEBPACK_IMPORTED_MODULE_0__.queryDataIndex)(data, payload);
  if (!(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isArray)(dataIndex)) {
    dataIndex = [dataIndex];
  }
  seriesModel[payload.type === TOGGLE_SELECT_ACTION_TYPE ? 'toggleSelect' : payload.type === SELECT_ACTION_TYPE ? 'select' : 'unselect'](dataIndex, dataType);
}
function updateSeriesElementSelection(seriesModel) {
  var allData = seriesModel.getAllData();
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.each)(allData, function (_a) {
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
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.each)(allData, function (_a) {
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
  var ecData = (0,_innerStore_js__WEBPACK_IMPORTED_MODULE_4__.getECData)(el);
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
  var ecData = (0,_innerStore_js__WEBPACK_IMPORTED_MODULE_4__.getECData)(el);
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

}),
26889: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  convertFromEC4CompatibleStyle: function() { return convertFromEC4CompatibleStyle; },
  convertToEC4StyleForCustomSerise: function() { return convertToEC4StyleForCustomSerise; },
  isEC4CompatibleStyle: function() { return isEC4CompatibleStyle; },
  warnDeprecated: function() { return warnDeprecated; }
});
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96585);

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
  //     Becuse custom series and graphic component support "merge", users may firstly
  //     only set `textStrokeWidth` style or secondly only set `text`.
  return style && (style.legacy || style.legacy !== false && !hasOwnTextContentOption && !hasOwnTextConfig && elType !== 'tspan'
  // Difficult to detect whether legacy for a "text" el.
  && (elType === 'text' || (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(style, 'text')));
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
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(srcStyle, 'text') && (textContentStyle.text = srcStyle.text);
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(srcStyle, 'rich') && (textContentStyle.rich = srcStyle.rich);
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(srcStyle, 'textFill') && (textContentStyle.fill = srcStyle.textFill);
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(srcStyle, 'textStroke') && (textContentStyle.stroke = srcStyle.textStroke);
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(srcStyle, 'fontFamily') && (textContentStyle.fontFamily = srcStyle.fontFamily);
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(srcStyle, 'fontSize') && (textContentStyle.fontSize = srcStyle.fontSize);
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(srcStyle, 'fontStyle') && (textContentStyle.fontStyle = srcStyle.fontStyle);
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(srcStyle, 'fontWeight') && (textContentStyle.fontWeight = srcStyle.fontWeight);
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
    var hasOwnPos = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(srcStyle, 'textPosition');
    if (isNormal) {
      textConfig.position = hasOwnPos ? srcStyle.textPosition : 'inside';
    } else {
      hasOwnPos && (textConfig.position = srcStyle.textPosition);
    }
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(srcStyle, 'textPosition') && (textConfig.position = srcStyle.textPosition);
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(srcStyle, 'textOffset') && (textConfig.offset = srcStyle.textOffset);
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(srcStyle, 'textRotation') && (textConfig.rotation = srcStyle.textRotation);
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(srcStyle, 'textDistance') && (textConfig.distance = srcStyle.textDistance);
  }
  convertEC4CompatibleRichItem(textContentStyle, hostStyle);
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each)(textContentStyle.rich, function (richItem) {
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
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(richItem, 'textStrokeWidth') && (out.lineWidth = richItem.textStrokeWidth);
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(richItem, 'textAlign') && (out.align = richItem.textAlign);
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(richItem, 'textVerticalAlign') && (out.verticalAlign = richItem.textVerticalAlign);
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(richItem, 'textLineHeight') && (out.lineHeight = richItem.textLineHeight);
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(richItem, 'textWidth') && (out.width = richItem.textWidth);
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(richItem, 'textHeight') && (out.height = richItem.textHeight);
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(richItem, 'textBackgroundColor') && (out.backgroundColor = richItem.textBackgroundColor);
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(richItem, 'textPadding') && (out.padding = richItem.textPadding);
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(richItem, 'textBorderColor') && (out.borderColor = richItem.textBorderColor);
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(richItem, 'textBorderWidth') && (out.borderWidth = richItem.textBorderWidth);
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(richItem, 'textBorderRadius') && (out.borderRadius = richItem.textBorderRadius);
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(richItem, 'textBoxShadowColor') && (out.shadowColor = richItem.textBoxShadowColor);
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(richItem, 'textBoxShadowBlur') && (out.shadowBlur = richItem.textBoxShadowBlur);
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(richItem, 'textBoxShadowOffsetX') && (out.shadowOffsetX = richItem.textBoxShadowOffsetX);
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(richItem, 'textBoxShadowOffsetY') && (out.shadowOffsetY = richItem.textBoxShadowOffsetY);
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
  var hostFill = itemStl.fill || '#000';
  convertToEC4RichItem(out, txStl);
  var textFillNotSet = out.textFill == null;
  if (isInside) {
    if (textFillNotSet) {
      out.textFill = txCfg.insideFill || '#fff';
      !out.textStroke && txCfg.insideStroke && (out.textStroke = txCfg.insideStroke);
      !out.textStroke && (out.textStroke = hostFill);
      out.textStrokeWidth == null && (out.textStrokeWidth = 2);
    }
  } else {
    if (textFillNotSet) {
      out.textFill = itemStl.fill || txCfg.outsideFill || '#000';
    }
    !out.textStroke && txCfg.outsideStroke && (out.textStroke = txCfg.outsideStroke);
  }
  out.text = txStl.text;
  out.rich = txStl.rich;
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each)(txStl.rich, function (richItem) {
    convertToEC4RichItem(richItem, richItem);
  });
  return out;
}
function convertToEC4RichItem(out, richItem) {
  if (!richItem) {
    return;
  }
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(richItem, 'fill') && (out.textFill = richItem.fill);
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(richItem, 'stroke') && (out.textStroke = richItem.fill);
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(richItem, 'lineWidth') && (out.textStrokeWidth = richItem.lineWidth);
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(richItem, 'font') && (out.font = richItem.font);
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(richItem, 'fontStyle') && (out.fontStyle = richItem.fontStyle);
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(richItem, 'fontWeight') && (out.fontWeight = richItem.fontWeight);
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(richItem, 'fontSize') && (out.fontSize = richItem.fontSize);
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(richItem, 'fontFamily') && (out.fontFamily = richItem.fontFamily);
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(richItem, 'align') && (out.textAlign = richItem.align);
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(richItem, 'verticalAlign') && (out.textVerticalAlign = richItem.verticalAlign);
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(richItem, 'lineHeight') && (out.textLineHeight = richItem.lineHeight);
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(richItem, 'width') && (out.textWidth = richItem.width);
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(richItem, 'height') && (out.textHeight = richItem.height);
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(richItem, 'backgroundColor') && (out.textBackgroundColor = richItem.backgroundColor);
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(richItem, 'padding') && (out.textPadding = richItem.padding);
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(richItem, 'borderColor') && (out.textBorderColor = richItem.borderColor);
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(richItem, 'borderWidth') && (out.textBorderWidth = richItem.borderWidth);
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(richItem, 'borderRadius') && (out.textBorderRadius = richItem.borderRadius);
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(richItem, 'shadowColor') && (out.textBoxShadowColor = richItem.shadowColor);
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(richItem, 'shadowBlur') && (out.textBoxShadowBlur = richItem.shadowBlur);
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(richItem, 'shadowOffsetX') && (out.textBoxShadowOffsetX = richItem.shadowOffsetX);
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(richItem, 'shadowOffsetY') && (out.textBoxShadowOffsetY = richItem.shadowOffsetY);
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(richItem, 'textShadowColor') && (out.textShadowColor = richItem.textShadowColor);
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(richItem, 'textShadowBlur') && (out.textShadowBlur = richItem.textShadowBlur);
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(richItem, 'textShadowOffsetX') && (out.textShadowOffsetX = richItem.textShadowOffsetX);
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(richItem, 'textShadowOffsetY') && (out.textShadowOffsetY = richItem.textShadowOffsetY);
}
function warnDeprecated(deprecated, insteadApproach) {
  if (false) { var key }
}

}),
44421: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createSymbol: function() { return createSymbol; },
  normalizeSymbolOffset: function() { return normalizeSymbolOffset; },
  normalizeSymbolSize: function() { return normalizeSymbolSize; },
  symbolBuildProxies: function() { return symbolBuildProxies; }
});
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96585);
/* ESM import */var _graphic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49678);
/* ESM import */var _graphic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16504);
/* ESM import */var _graphic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40361);
/* ESM import */var _graphic_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26768);
/* ESM import */var _graphic_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16636);
/* ESM import */var zrender_lib_core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(44964);
/* ESM import */var zrender_lib_contain_text_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45258);
/* ESM import */var _number_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81731);

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
var Triangle = _graphic_js__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
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
var Diamond = _graphic_js__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
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
var Pin = _graphic_js__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
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
var Arrow = _graphic_js__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
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
  line: _graphic_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  rect: _graphic_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  roundRect: _graphic_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  square: _graphic_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  circle: _graphic_js__WEBPACK_IMPORTED_MODULE_3__["default"],
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
(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__.each)(symbolCtors, function (Ctor, name) {
  symbolBuildProxies[name] = new Ctor();
});
var SymbolClz = _graphic_js__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
  type: 'symbol',
  shape: {
    symbolType: '',
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  calculateTextPosition: function (out, config, rect) {
    var res = (0,zrender_lib_contain_text_js__WEBPACK_IMPORTED_MODULE_5__.calculateTextPosition)(out, config, rect);
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
      symbolStyle.fill = innerColor || '#fff';
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
    symbolPath = _graphic_js__WEBPACK_IMPORTED_MODULE_6__.makeImage(symbolType.slice(8), new zrender_lib_core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_7__["default"](x, y, w, h), keepAspect ? 'center' : 'cover');
  } else if (symbolType.indexOf('path://') === 0) {
    symbolPath = _graphic_js__WEBPACK_IMPORTED_MODULE_6__.makePath(symbolType.slice(7), {}, new zrender_lib_core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_7__["default"](x, y, w, h), keepAspect ? 'center' : 'cover');
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
  if (!(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__.isArray)(symbolSize)) {
    symbolSize = [+symbolSize, +symbolSize];
  }
  return [symbolSize[0] || 0, symbolSize[1] || 0];
}
function normalizeSymbolOffset(symbolOffset, symbolSize) {
  if (symbolOffset == null) {
    return;
  }
  if (!(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__.isArray)(symbolOffset)) {
    symbolOffset = [symbolOffset, symbolOffset];
  }
  return [(0,_number_js__WEBPACK_IMPORTED_MODULE_8__.parsePercent)(symbolOffset[0], symbolSize[0]) || 0, (0,_number_js__WEBPACK_IMPORTED_MODULE_8__.parsePercent)((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__.retrieve2)(symbolOffset[1], symbolOffset[0]), symbolSize[1]) || 0];
}

}),
59524: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  clear: function() { return clear; },
  createOrUpdate: function() { return createOrUpdate; },
  throttle: function() { return throttle; }
});

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

}),
41070: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ONE_DAY: function() { return ONE_DAY; },
  ONE_HOUR: function() { return ONE_HOUR; },
  ONE_MINUTE: function() { return ONE_MINUTE; },
  ONE_SECOND: function() { return ONE_SECOND; },
  ONE_YEAR: function() { return ONE_YEAR; },
  dateGetterName: function() { return dateGetterName; },
  dateSetterName: function() { return dateSetterName; },
  defaultLeveledFormatter: function() { return defaultLeveledFormatter; },
  format: function() { return format; },
  fullLeveledFormatter: function() { return fullLeveledFormatter; },
  fullYearGetterName: function() { return fullYearGetterName; },
  fullYearSetterName: function() { return fullYearSetterName; },
  getDefaultFormatPrecisionOfInterval: function() { return getDefaultFormatPrecisionOfInterval; },
  getPrimaryTimeUnit: function() { return getPrimaryTimeUnit; },
  getUnitFromValue: function() { return getUnitFromValue; },
  getUnitValue: function() { return getUnitValue; },
  hoursGetterName: function() { return hoursGetterName; },
  hoursSetterName: function() { return hoursSetterName; },
  isPrimaryTimeUnit: function() { return isPrimaryTimeUnit; },
  leveledFormat: function() { return leveledFormat; },
  millisecondsGetterName: function() { return millisecondsGetterName; },
  millisecondsSetterName: function() { return millisecondsSetterName; },
  minutesGetterName: function() { return minutesGetterName; },
  minutesSetterName: function() { return minutesSetterName; },
  monthGetterName: function() { return monthGetterName; },
  monthSetterName: function() { return monthSetterName; },
  pad: function() { return pad; },
  primaryTimeUnits: function() { return primaryTimeUnits; },
  secondsGetterName: function() { return secondsGetterName; },
  secondsSetterName: function() { return secondsSetterName; },
  timeUnits: function() { return timeUnits; }
});
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96585);
/* ESM import */var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81731);
/* ESM import */var _core_locale_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94760);
/* ESM import */var _model_Model_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84456);

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
var defaultLeveledFormatter = {
  year: '{yyyy}',
  month: '{MMM}',
  day: '{d}',
  hour: '{HH}:{mm}',
  minute: '{HH}:{mm}',
  second: '{HH}:{mm}:{ss}',
  millisecond: '{HH}:{mm}:{ss} {SSS}',
  none: '{yyyy}-{MM}-{dd} {HH}:{mm}:{ss} {SSS}'
};
var fullDayFormatter = '{yyyy}-{MM}-{dd}';
var fullLeveledFormatter = {
  year: '{yyyy}',
  month: '{yyyy}-{MM}',
  day: fullDayFormatter,
  hour: fullDayFormatter + ' ' + defaultLeveledFormatter.hour,
  minute: fullDayFormatter + ' ' + defaultLeveledFormatter.minute,
  second: fullDayFormatter + ' ' + defaultLeveledFormatter.second,
  millisecond: defaultLeveledFormatter.none
};
var primaryTimeUnits = ['year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond'];
var timeUnits = ['year', 'half-year', 'quarter', 'month', 'week', 'half-week', 'day', 'half-day', 'quarter-day', 'hour', 'minute', 'second', 'millisecond'];
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
  var date = _number_js__WEBPACK_IMPORTED_MODULE_0__.parseDate(time);
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
  var localeModel = lang instanceof _model_Model_js__WEBPACK_IMPORTED_MODULE_1__["default"] ? lang : (0,_core_locale_js__WEBPACK_IMPORTED_MODULE_2__.getLocaleModel)(lang || _core_locale_js__WEBPACK_IMPORTED_MODULE_2__.SYSTEM_LANG) || (0,_core_locale_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultLocaleModel)();
  var timeModel = localeModel.getModel('time');
  var month = timeModel.get('month');
  var monthAbbr = timeModel.get('monthAbbr');
  var dayOfWeek = timeModel.get('dayOfWeek');
  var dayOfWeekAbbr = timeModel.get('dayOfWeekAbbr');
  return (template || '').replace(/{a}/g, a + '').replace(/{A}/g, A + '').replace(/{yyyy}/g, y + '').replace(/{yy}/g, pad(y % 100 + '', 2)).replace(/{Q}/g, q + '').replace(/{MMMM}/g, month[M - 1]).replace(/{MMM}/g, monthAbbr[M - 1]).replace(/{MM}/g, pad(M, 2)).replace(/{M}/g, M + '').replace(/{dd}/g, pad(d, 2)).replace(/{d}/g, d + '').replace(/{eeee}/g, dayOfWeek[e]).replace(/{ee}/g, dayOfWeekAbbr[e]).replace(/{e}/g, e + '').replace(/{HH}/g, pad(H, 2)).replace(/{H}/g, H + '').replace(/{hh}/g, pad(h + '', 2)).replace(/{h}/g, h + '').replace(/{mm}/g, pad(m, 2)).replace(/{m}/g, m + '').replace(/{ss}/g, pad(s, 2)).replace(/{s}/g, s + '').replace(/{SSS}/g, pad(S, 3)).replace(/{S}/g, S + '');
}
function leveledFormat(tick, idx, formatter, lang, isUTC) {
  var template = null;
  if (zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.isString(formatter)) {
    // Single formatter for all units at all levels
    template = formatter;
  } else if (zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.isFunction(formatter)) {
    // Callback formatter
    template = formatter(tick.value, idx, {
      level: tick.level
    });
  } else {
    var defaults = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.extend({}, defaultLeveledFormatter);
    if (tick.level > 0) {
      for (var i = 0; i < primaryTimeUnits.length; ++i) {
        defaults[primaryTimeUnits[i]] = "{primary|" + defaults[primaryTimeUnits[i]] + "}";
      }
    }
    var mergedFormatter = formatter ? formatter.inherit === false ? formatter // Use formatter with bigger units
    : zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.defaults(formatter, defaults) : defaults;
    var unit = getUnitFromValue(tick.value, isUTC);
    if (mergedFormatter[unit]) {
      template = mergedFormatter[unit];
    } else if (mergedFormatter.inherit) {
      // Unit formatter is not defined and should inherit from bigger units
      var targetId = timeUnits.indexOf(unit);
      for (var i = targetId - 1; i >= 0; --i) {
        if (mergedFormatter[unit]) {
          template = mergedFormatter[unit];
          break;
        }
      }
      template = template || defaults.none;
    }
    if (zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.isArray(template)) {
      var levelId = tick.level == null ? 0 : tick.level >= 0 ? tick.level : template.length + tick.level;
      levelId = Math.min(levelId, template.length - 1);
      template = template[levelId];
    }
  }
  return format(new Date(tick.value), template, isUTC, lang);
}
function getUnitFromValue(value, isUTC) {
  var date = _number_js__WEBPACK_IMPORTED_MODULE_0__.parseDate(value);
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
function getUnitValue(value, unit, isUTC) {
  var date = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.isNumber(value) ? _number_js__WEBPACK_IMPORTED_MODULE_0__.parseDate(value) : value;
  unit = unit || getUnitFromValue(value, isUTC);
  switch (unit) {
    case 'year':
      return date[fullYearGetterName(isUTC)]();
    case 'half-year':
      return date[monthGetterName(isUTC)]() >= 6 ? 1 : 0;
    case 'quarter':
      return Math.floor((date[monthGetterName(isUTC)]() + 1) / 4);
    case 'month':
      return date[monthGetterName(isUTC)]();
    case 'day':
      return date[dateGetterName(isUTC)]();
    case 'half-day':
      return date[hoursGetterName(isUTC)]() / 24;
    case 'hour':
      return date[hoursGetterName(isUTC)]();
    case 'minute':
      return date[minutesGetterName(isUTC)]();
    case 'second':
      return date[secondsGetterName(isUTC)]();
    case 'millisecond':
      return date[millisecondsGetterName(isUTC)]();
  }
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

}),
15693: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SERIES_LAYOUT_BY_COLUMN: function() { return SERIES_LAYOUT_BY_COLUMN; },
  SERIES_LAYOUT_BY_ROW: function() { return SERIES_LAYOUT_BY_ROW; },
  SOURCE_FORMAT_ARRAY_ROWS: function() { return SOURCE_FORMAT_ARRAY_ROWS; },
  SOURCE_FORMAT_KEYED_COLUMNS: function() { return SOURCE_FORMAT_KEYED_COLUMNS; },
  SOURCE_FORMAT_OBJECT_ROWS: function() { return SOURCE_FORMAT_OBJECT_ROWS; },
  SOURCE_FORMAT_ORIGINAL: function() { return SOURCE_FORMAT_ORIGINAL; },
  SOURCE_FORMAT_TYPED_ARRAY: function() { return SOURCE_FORMAT_TYPED_ARRAY; },
  SOURCE_FORMAT_UNKNOWN: function() { return SOURCE_FORMAT_UNKNOWN; },
  VISUAL_DIMENSIONS: function() { return VISUAL_DIMENSIONS; }
});
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96585);

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
;
;
var VISUAL_DIMENSIONS = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.createHashMap)(['tooltip', 'label', 'itemName', 'itemId', 'itemGroupId', 'itemChildGroupId', 'seriesName']);
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

}),
27129: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createFloat32Array: function() { return createFloat32Array; }
});
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96585);

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

/* global Float32Array */
var supportFloat32Array = typeof Float32Array !== 'undefined';
var Float32ArrayCtor = !supportFloat32Array ? Array : Float32Array;
function createFloat32Array(arg) {
  if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(arg)) {
    // Return self directly if don't support TypedArray.
    return supportFloat32Array ? new Float32Array(arg) : arg;
  }
  // Else is number
  return new Float32ArrayCtor(arg);
}

}),
47389: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(96585);
/* ESM import */var zrender_lib_graphic_Group_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58695);
/* ESM import */var _util_component_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95202);
/* ESM import */var _util_clazz_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(35350);
/* ESM import */var _util_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46451);
/* ESM import */var _util_states_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63344);
/* ESM import */var _core_task_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72739);
/* ESM import */var _chart_helper_createRenderPlanner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94431);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16636);

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










var inner = _util_model_js__WEBPACK_IMPORTED_MODULE_0__.makeInner();
var renderPlanner = (0,_chart_helper_createRenderPlanner_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
var ChartView = /** @class */function () {
  function ChartView() {
    this.group = new zrender_lib_graphic_Group_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.uid = _util_component_js__WEBPACK_IMPORTED_MODULE_3__.getUID('viewChart');
    this.renderTask = (0,_core_task_js__WEBPACK_IMPORTED_MODULE_4__.createTask)({
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
   * Remove self.
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
  ChartView.prototype.updateLayout = function (seriesModel, ecModel, api, payload) {
    this.render(seriesModel, ecModel, api, payload);
  };
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
    (0,_util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.traverseElements)(this.group, cb);
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
  if (el && (0,_util_states_js__WEBPACK_IMPORTED_MODULE_6__.isHighDownDispatcher)(el)) {
    (state === 'emphasis' ? _util_states_js__WEBPACK_IMPORTED_MODULE_6__.enterEmphasis : _util_states_js__WEBPACK_IMPORTED_MODULE_6__.leaveEmphasis)(el, highlightDigit);
  }
}
function toggleHighlight(data, payload, state) {
  var dataIndex = _util_model_js__WEBPACK_IMPORTED_MODULE_0__.queryDataIndex(data, payload);
  var highlightDigit = payload && payload.highlightKey != null ? (0,_util_states_js__WEBPACK_IMPORTED_MODULE_6__.getHighlightDigit)(payload.highlightKey) : null;
  if (dataIndex != null) {
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_7__.each)(_util_model_js__WEBPACK_IMPORTED_MODULE_0__.normalizeToArray(dataIndex), function (dataIdx) {
      elSetState(data.getItemGraphicEl(dataIdx), state, highlightDigit);
    });
  } else {
    data.eachItemGraphicEl(function (el) {
      elSetState(el, state, highlightDigit);
    });
  }
}
_util_clazz_js__WEBPACK_IMPORTED_MODULE_8__.enableClassExtend(ChartView, ['dispose']);
_util_clazz_js__WEBPACK_IMPORTED_MODULE_8__.enableClassManagement(ChartView);
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
/* ESM default export */ __webpack_exports__["default"] = (ChartView);

}),
28440: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var zrender_lib_graphic_Group_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58695);
/* ESM import */var _util_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95202);
/* ESM import */var _util_clazz_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35350);

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
    this.group = new zrender_lib_graphic_Group_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.uid = _util_component_js__WEBPACK_IMPORTED_MODULE_1__.getUID('viewComponent');
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
_util_clazz_js__WEBPACK_IMPORTED_MODULE_2__.enableClassExtend(ComponentView);
_util_clazz_js__WEBPACK_IMPORTED_MODULE_2__.enableClassManagement(ComponentView);
/* ESM default export */ __webpack_exports__["default"] = (ComponentView);

}),
57275: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
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
/* ESM default export */ __webpack_exports__["default"] = (LegendVisualProvider);

}),
507: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96585);
/* ESM import */var zrender_lib_tool_color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67375);
/* ESM import */var _util_number_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81731);

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




var each = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each;
var isObject = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isObject;
var CATEGORY_DEFAULT_VISUAL_INDEX = -1;
var VisualMapping = /** @class */function () {
  function VisualMapping(option) {
    var mappingMethod = option.mappingMethod;
    var visualType = option.type;
    var thisOption = this.option = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.clone(option);
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
      zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.assert(mappingMethod !== 'linear' || thisOption.dataExtent);
      normalizeVisualRange(thisOption);
    }
  }
  VisualMapping.prototype.mapValueToVisual = function (value) {
    var normalized = this._normalizeData(value);
    return this._normalizedToVisual(normalized, value);
  };
  VisualMapping.prototype.getNormalizer = function () {
    return zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.bind(this._normalizeData, this);
  };
  /**
   * List available visual types.
   *
   * @public
   * @return {Array.<string>}
   */
  VisualMapping.listVisualTypes = function () {
    return zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.keys(VisualMapping.visualHandlers);
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
    if (zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isObject(visual)) {
      zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each(visual, callback, context);
    } else {
      callback.call(context, visual);
    }
  };
  VisualMapping.mapVisual = function (visual, callback, context) {
    var isPrimary;
    var newVisual = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isArray(visual) ? [] : zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isObject(visual) ? {} : (isPrimary = true, null);
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
    if (zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isArray(visualTypes)) {
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
        || zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isString(pieceValue) && pieceValue === value + '') {
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
        return zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.bind(thisOption.mappingMethod === 'category' ? function (value, isNormalized) {
          !isNormalized && (value = this._normalizeData(value));
          return doMapCategory.call(this, value);
        } : function (value, isNormalized, out) {
          // If output rgb array
          // which will be much faster and useful in pixel manipulation
          var returnRGBArray = !!out;
          !isNormalized && (value = this._normalizeData(value));
          out = zrender_lib_tool_color_js__WEBPACK_IMPORTED_MODULE_1__.fastLerp(value, thisOption.parsedVisual, out);
          return returnRGBArray ? out : zrender_lib_tool_color_js__WEBPACK_IMPORTED_MODULE_1__.stringify(out, 'rgba');
        }, this);
      },
      _normalizedToVisual: {
        linear: function (normalized) {
          return zrender_lib_tool_color_js__WEBPACK_IMPORTED_MODULE_1__.stringify(zrender_lib_tool_color_js__WEBPACK_IMPORTED_MODULE_1__.fastLerp(normalized, this.option.parsedVisual), 'rgba');
        },
        category: doMapCategory,
        piecewise: function (normalized, value) {
          var result = getSpecifiedVisual.call(this, value);
          if (result == null) {
            result = zrender_lib_tool_color_js__WEBPACK_IMPORTED_MODULE_1__.stringify(zrender_lib_tool_color_js__WEBPACK_IMPORTED_MODULE_1__.fastLerp(normalized, this.option.parsedVisual), 'rgba');
          }
          return result;
        },
        fixed: doMapFixed
      }
    },
    colorHue: makePartialColorVisualHandler(function (color, value) {
      return zrender_lib_tool_color_js__WEBPACK_IMPORTED_MODULE_1__.modifyHSL(color, value);
    }),
    colorSaturation: makePartialColorVisualHandler(function (color, value) {
      return zrender_lib_tool_color_js__WEBPACK_IMPORTED_MODULE_1__.modifyHSL(color, null, value);
    }),
    colorLightness: makePartialColorVisualHandler(function (color, value) {
      return zrender_lib_tool_color_js__WEBPACK_IMPORTED_MODULE_1__.modifyHSL(color, null, null, value);
    }),
    colorAlpha: makePartialColorVisualHandler(function (color, value) {
      return zrender_lib_tool_color_js__WEBPACK_IMPORTED_MODULE_1__.modifyAlpha(color, value);
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
  zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each(pieceList, function (piece, index) {
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
  if (!zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isArray(visual)) {
    var visualArr_1 = [];
    if (zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isObject(visual)) {
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
  if (zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isObject(visual)) {
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
  return visual[Math.round((0,_util_number_js__WEBPACK_IMPORTED_MODULE_2__.linearMap)(normalized, [0, 1], [0, visual.length - 1], true))] || {}; // TODO {}?
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
      return (0,_util_number_js__WEBPACK_IMPORTED_MODULE_2__.linearMap)(normalized, sourceExtent, this.option.visual, true);
    },
    category: doMapCategory,
    piecewise: function (normalized, value) {
      var result = getSpecifiedVisual.call(this, value);
      if (result == null) {
        result = (0,_util_number_js__WEBPACK_IMPORTED_MODULE_2__.linearMap)(normalized, sourceExtent, this.option.visual, true);
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
    thisOption.parsedVisual = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.map(visualArr, function (item) {
      var color = zrender_lib_tool_color_js__WEBPACK_IMPORTED_MODULE_1__.parse(item);
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
    return (0,_util_number_js__WEBPACK_IMPORTED_MODULE_2__.linearMap)(value, this.option.dataExtent, [0, 1], true);
  },
  piecewise: function (value) {
    var pieceList = this.option.pieceList;
    var pieceIndex = VisualMapping.findPieceIndex(value, pieceList, true);
    if (pieceIndex != null) {
      return (0,_util_number_js__WEBPACK_IMPORTED_MODULE_2__.linearMap)(pieceIndex, [0, pieceList.length - 1], [0, 1], true);
    }
  },
  category: function (value) {
    var index = this.option.categories ? this.option.categoryMap[value] : value; // ordinal value
    return index == null ? CATEGORY_DEFAULT_VISUAL_INDEX : index;
  },
  fixed: zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.noop
};
function littleThan(close, a, b) {
  return close ? a <= b : a < b;
}
/* ESM default export */ __webpack_exports__["default"] = (VisualMapping);

}),
54207: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return ariaVisual; }
});
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96585);
/* ESM import */var _util_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46451);
/* ESM import */var _model_mixin_palette_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14937);

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
var inner = (0,_util_model_js__WEBPACK_IMPORTED_MODULE_0__.makeInner)();
var decalPaletteScope = {};
function ariaVisual(ecModel, api) {
  var ariaModel = ecModel.getModel('aria');
  // See "area enabled" detection code in `GlobalModel.ts`.
  if (!ariaModel.get('enabled')) {
    return;
  }
  var defaultOption = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.clone(DEFAULT_OPTION);
  zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.merge(defaultOption.label, ecModel.getLocaleModel().get('aria'), false);
  zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.merge(ariaModel.option, defaultOption, false);
  setDecal();
  setLabel();
  function setDecal() {
    var decalModel = ariaModel.getModel('decal');
    var useDecal = decalModel.get('show');
    if (useDecal) {
      // Each type of series use one scope.
      // Pie and funnel are using different scopes.
      var paletteScopeGroupByType_1 = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.createHashMap();
      ecModel.eachSeries(function (seriesModel) {
        if (seriesModel.isColorBySeries()) {
          return;
        }
        var decalScope = paletteScopeGroupByType_1.get(seriesModel.type);
        if (!decalScope) {
          decalScope = {};
          paletteScopeGroupByType_1.set(seriesModel.type, decalScope);
        }
        inner(seriesModel).scope = decalScope;
      });
      ecModel.eachRawSeries(function (seriesModel) {
        if (ecModel.isSeriesFiltered(seriesModel)) {
          return;
        }
        if (zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isFunction(seriesModel.enableAriaDecal)) {
          // Let series define how to use decal palette on data
          seriesModel.enableAriaDecal();
          return;
        }
        var data = seriesModel.getData();
        if (!seriesModel.isColorBySeries()) {
          var dataAll_1 = seriesModel.getRawData();
          var idxMap_1 = {};
          var decalScope_1 = inner(seriesModel).scope;
          data.each(function (idx) {
            var rawIdx = data.getRawIndex(idx);
            idxMap_1[rawIdx] = idx;
          });
          var dataCount_1 = dataAll_1.count();
          dataAll_1.each(function (rawIdx) {
            var idx = idxMap_1[rawIdx];
            var name = dataAll_1.getName(rawIdx) || rawIdx + '';
            var paletteDecal = (0,_model_mixin_palette_js__WEBPACK_IMPORTED_MODULE_2__.getDecalFromPalette)(seriesModel.ecModel, name, decalScope_1, dataCount_1);
            var specifiedDecal = data.getItemVisual(idx, 'decal');
            data.setItemVisual(idx, 'decal', mergeDecal(specifiedDecal, paletteDecal));
          });
        } else {
          var paletteDecal = (0,_model_mixin_palette_js__WEBPACK_IMPORTED_MODULE_2__.getDecalFromPalette)(seriesModel.ecModel, seriesModel.name, decalPaletteScope, ecModel.getSeriesCount());
          var specifiedDecal = data.getVisual('decal');
          data.setVisual('decal', mergeDecal(specifiedDecal, paletteDecal));
        }
        function mergeDecal(specifiedDecal, paletteDecal) {
          // Merge decal from palette to decal from itemStyle.
          // User do not need to specify all of the decal props.
          var resultDecal = specifiedDecal ? zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.extend(zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.extend({}, paletteDecal), specifiedDecal) : paletteDecal;
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
    labelModel.option = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.defaults(labelModel.option, labelLocale);
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
              var value = !excludeDimensionId_1 ? data.getValues(i) : zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.filter(data.getValues(i), function (v, j) {
                return zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.indexOf(excludeDimensionId_1, j) === -1;
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
    if (!zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isString(str)) {
      return str;
    }
    var result = str;
    zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.each(keyValues, function (value, key) {
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

}),
14761: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return decalVisual; }
});
/* ESM import */var _util_decal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75965);

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
          itemStyle.decal = (0,_util_decal_js__WEBPACK_IMPORTED_MODULE_0__.createOrUpdatePatternFromDecal)(decal, api);
        }
      });
    }
    var decal = data.getVisual('decal');
    if (decal) {
      var style = data.getVisual('style');
      style.decal = (0,_util_decal_js__WEBPACK_IMPORTED_MODULE_0__.createOrUpdatePatternFromDecal)(decal, api);
    }
  });
}

}),
54500: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getItemVisualFromData: function() { return getItemVisualFromData; },
  getVisualFromData: function() { return getVisualFromData; },
  setItemVisualFromData: function() { return setItemVisualFromData; }
});

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

}),
74507: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  dataColorPaletteTask: function() { return dataColorPaletteTask; },
  dataStyleTask: function() { return dataStyleTask; },
  seriesStyleTask: function() { return seriesStyleTask; }
});
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96585);
/* ESM import */var _model_mixin_makeStyleMapper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12772);
/* ESM import */var _model_mixin_itemStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22154);
/* ESM import */var _model_mixin_lineStyle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70259);
/* ESM import */var _model_Model_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84456);
/* ESM import */var _util_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46451);

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






var inner = (0,_util_model_js__WEBPACK_IMPORTED_MODULE_0__.makeInner)();
var defaultStyleMappers = {
  itemStyle: (0,_model_mixin_makeStyleMapper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_model_mixin_itemStyle_js__WEBPACK_IMPORTED_MODULE_2__.ITEM_STYLE_KEY_MAP, true),
  lineStyle: (0,_model_mixin_makeStyleMapper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_model_mixin_lineStyle_js__WEBPACK_IMPORTED_MODULE_3__.LINE_STYLE_KEY_MAP, true)
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
    var colorCallback = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__.isFunction)(color) ? color : null;
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
      globalStyle.fill = globalStyle.fill === 'auto' || (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__.isFunction)(globalStyle.fill) ? colorPalette : globalStyle.fill;
      globalStyle.stroke = globalStyle.stroke === 'auto' || (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__.isFunction)(globalStyle.stroke) ? colorPalette : globalStyle.stroke;
    }
    data.setVisual('style', globalStyle);
    data.setVisual('drawType', colorKey);
    // Only visible series has each data be visual encoded
    if (!ecModel.isSeriesFiltered(seriesModel) && colorCallback) {
      data.setVisual('colorFromPalette', false);
      return {
        dataEach: function (data, idx) {
          var dataParams = seriesModel.getDataParams(idx);
          var itemStyle = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__.extend)({}, globalStyle);
          itemStyle[colorKey] = colorCallback(dataParams);
          data.setItemVisual(idx, 'style', itemStyle);
        }
      };
    }
  }
};
var sharedModel = new _model_Model_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
var dataStyleTask = {
  createOnAllSeries: true,
  performRawSeries: true,
  reset: function (seriesModel, ecModel) {
    if (seriesModel.ignoreStyleOnData || ecModel.isSeriesFiltered(seriesModel)) {
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
          (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__.extend)(existsStyle, style);
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
    var paletteScopeGroupByType = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__.createHashMap)();
    ecModel.eachSeries(function (seriesModel) {
      var colorBy = seriesModel.getColorBy();
      if (seriesModel.isColorBySeries()) {
        return;
      }
      var key = seriesModel.type + '-' + colorBy;
      var colorScope = paletteScopeGroupByType.get(key);
      if (!colorScope) {
        colorScope = {};
        paletteScopeGroupByType.set(key, colorScope);
      }
      inner(seriesModel).scope = colorScope;
    });
    ecModel.eachSeries(function (seriesModel) {
      if (seriesModel.isColorBySeries() || ecModel.isSeriesFiltered(seriesModel)) {
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


}),
49548: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  dataSymbolTask: function() { return dataSymbolTask; },
  seriesSymbolTask: function() { return seriesSymbolTask; }
});
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96585);

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
      if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isFunction)(val)) {
        hasCallback = true;
        symbolOptionsCb[symbolPropName] = val;
      } else {
        symbolOptions[symbolPropName] = val;
      }
    }
    symbolOptions.symbol = symbolOptions.symbol || seriesModel.defaultSymbol;
    data.setVisual((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.extend)({
      legendIcon: seriesModel.legendIcon || symbolOptions.symbol,
      symbolKeepAspect: seriesModel.get('symbolKeepAspect')
    }, symbolOptions));
    // Only visible series has each data be visual encoded
    if (ecModel.isSeriesFiltered(seriesModel)) {
      return;
    }
    var symbolPropsCb = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.keys)(symbolOptionsCb);
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


}),
55927: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96585);

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
    var value = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.clone((defaultOption[visualType] || {})[key]);
    return isCategory ? zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isArray(value) ? value[value.length - 1] : value : value;
  }
};
var defaultOption = {
  color: {
    active: ['#006edd', '#e0ffff'],
    inactive: ['rgba(0,0,0,0)']
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
/* ESM default export */ __webpack_exports__["default"] = (visualDefault);

}),
23831: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  applyVisual: function() { return applyVisual; },
  createVisualMappings: function() { return createVisualMappings; },
  incrementalApplyVisual: function() { return incrementalApplyVisual; },
  replaceVisualOption: function() { return replaceVisualOption; }
});
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96585);
/* ESM import */var _VisualMapping_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(507);
/* ESM import */var _helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54500);

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



var each = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each;
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
      if (!_VisualMapping_js__WEBPACK_IMPORTED_MODULE_1__["default"].isValidType(visualType)) {
        return;
      }
      var mappingOption = {
        type: visualType,
        visual: visualData
      };
      supplementVisualOption && supplementVisualOption(mappingOption, state);
      mappings[visualType] = new _VisualMapping_js__WEBPACK_IMPORTED_MODULE_1__["default"](mappingOption);
      // Prepare a alpha for opacity, for some case that opacity
      // is not supported, such as rendering using gradient color.
      if (visualType === 'opacity') {
        mappingOption = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.clone(mappingOption);
        mappingOption.type = 'colorAlpha';
        mappings.__hidden.__alphaForOpacity = new _VisualMapping_js__WEBPACK_IMPORTED_MODULE_1__["default"](mappingOption);
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
  zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each(keys, function (key) {
    if (newOption.hasOwnProperty(key) && hasKeys(newOption[key])) {
      has = true;
    }
  });
  has && zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each(keys, function (key) {
    if (newOption.hasOwnProperty(key) && hasKeys(newOption[key])) {
      thisOption[key] = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.clone(newOption[key]);
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
  zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each(stateList, function (state) {
    var visualTypes = _VisualMapping_js__WEBPACK_IMPORTED_MODULE_1__["default"].prepareVisualTypes(visualMappings[state]);
    visualTypesMap[state] = visualTypes;
  });
  var dataIndex;
  function getVisual(key) {
    return (0,_helper_js__WEBPACK_IMPORTED_MODULE_2__.getItemVisualFromData)(data, dataIndex, key);
  }
  function setVisual(key, value) {
    (0,_helper_js__WEBPACK_IMPORTED_MODULE_2__.setItemVisualFromData)(data, dataIndex, key, value);
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
  zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each(stateList, function (state) {
    var visualTypes = _VisualMapping_js__WEBPACK_IMPORTED_MODULE_1__["default"].prepareVisualTypes(visualMappings[state]);
    visualTypesMap[state] = visualTypes;
  });
  return {
    progress: function progress(params, data) {
      var dimIndex;
      if (dim != null) {
        dimIndex = data.getDimensionIndex(dim);
      }
      function getVisual(key) {
        return (0,_helper_js__WEBPACK_IMPORTED_MODULE_2__.getItemVisualFromData)(data, dataIndex, key);
      }
      function setVisual(key, value) {
        (0,_helper_js__WEBPACK_IMPORTED_MODULE_2__.setItemVisualFromData)(data, dataIndex, key, value);
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

}),

}]);