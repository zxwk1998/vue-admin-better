"use strict";
(self["webpackChunkvue_admin_better"] = self["webpackChunkvue_admin_better"] || []).push([["3036"], {
705: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  install: function() { return /* binding */ install; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/aria.js
var visual_aria = __webpack_require__(43557);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(56190);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/aria/preprocessor.js

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

function ariaPreprocessor(option) {
  if (!option || !option.aria) {
    return;
  }
  var aria = option.aria;
  // aria.show is deprecated and should use aria.enabled instead
  if (aria.show != null) {
    aria.enabled = aria.show;
  }
  aria.label = aria.label || {};
  // move description, general, series, data to be under aria.label
  util.each(['description', 'general', 'series', 'data'], function (name) {
    if (aria[name] != null) {
      aria.label[name] = aria[name];
    }
  });
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/aria/install.js

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
  registers.registerPreprocessor(ariaPreprocessor);
  registers.registerVisual(registers.PRIORITY.VISUAL.ARIA, visual_aria["default"]);
}

}),
93779: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56190);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42562);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73004);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73978);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(98856);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(80283);
/* ESM import */var _label_labelStyle_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57235);
/* ESM import */var _model_Model_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40064);
/* ESM import */var _AxisView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68463);
/* ESM import */var _AxisBuilder_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(60727);
/* ESM import */var _util_innerStore_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(12212);

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








var elementList = ['axisLine', 'axisLabel', 'axisTick', 'minorTick', 'splitLine', 'minorSplitLine', 'splitArea'];
function getAxisLineShape(polar, rExtent, angle) {
  rExtent[1] > rExtent[0] && (rExtent = rExtent.slice().reverse());
  var start = polar.coordToPoint([rExtent[0], angle]);
  var end = polar.coordToPoint([rExtent[1], angle]);
  return {
    x1: start[0],
    y1: start[1],
    x2: end[0],
    y2: end[1]
  };
}
function getRadiusIdx(polar) {
  var radiusAxis = polar.getRadiusAxis();
  return radiusAxis.inverse ? 0 : 1;
}
// Remove the last tick which will overlap the first tick
function fixAngleOverlap(list) {
  var firstItem = list[0];
  var lastItem = list[list.length - 1];
  if (firstItem && lastItem && Math.abs(Math.abs(firstItem.coord - lastItem.coord) - 360) < 1e-4) {
    list.pop();
  }
}
var AngleAxisView = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(AngleAxisView, _super);
  function AngleAxisView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = AngleAxisView.type;
    _this.axisPointerClass = 'PolarAxisPointer';
    return _this;
  }
  AngleAxisView.prototype.render = function (angleAxisModel, ecModel) {
    this.group.removeAll();
    if (!angleAxisModel.get('show')) {
      return;
    }
    var angleAxis = angleAxisModel.axis;
    var polar = angleAxis.polar;
    var radiusExtent = polar.getRadiusAxis().getExtent();
    var ticksAngles = angleAxis.getTicksCoords({
      breakTicks: 'none'
    });
    var minorTickAngles = angleAxis.getMinorTicksCoords();
    var labels = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.map(angleAxis.getViewLabels(), function (labelItem) {
      labelItem = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.clone(labelItem);
      var scale = angleAxis.scale;
      var tickValue = scale.type === 'ordinal' ? scale.getRawOrdinalNumber(labelItem.tickValue) : labelItem.tickValue;
      labelItem.coord = angleAxis.dataToCoord(tickValue);
      return labelItem;
    });
    fixAngleOverlap(labels);
    fixAngleOverlap(ticksAngles);
    zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.each(elementList, function (name) {
      if (angleAxisModel.get([name, 'show']) && (!angleAxis.scale.isBlank() || name === 'axisLine')) {
        angelAxisElementsBuilders[name](this.group, angleAxisModel, polar, ticksAngles, minorTickAngles, radiusExtent, labels);
      }
    }, this);
  };
  AngleAxisView.type = 'angleAxis';
  return AngleAxisView;
}(_AxisView_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
var angelAxisElementsBuilders = {
  axisLine: function (group, angleAxisModel, polar, ticksAngles, minorTickAngles, radiusExtent) {
    var lineStyleModel = angleAxisModel.getModel(['axisLine', 'lineStyle']);
    var angleAxis = polar.getAngleAxis();
    var RADIAN = Math.PI / 180;
    var angleExtent = angleAxis.getExtent();
    // extent id of the axis radius (r0 and r)
    var rId = getRadiusIdx(polar);
    var r0Id = rId ? 0 : 1;
    var shape;
    var shapeType = Math.abs(angleExtent[1] - angleExtent[0]) === 360 ? 'Circle' : 'Arc';
    if (radiusExtent[r0Id] === 0) {
      shape = new _util_graphic_js__WEBPACK_IMPORTED_MODULE_3__[shapeType]({
        shape: {
          cx: polar.cx,
          cy: polar.cy,
          r: radiusExtent[rId],
          startAngle: -angleExtent[0] * RADIAN,
          endAngle: -angleExtent[1] * RADIAN,
          clockwise: angleAxis.inverse
        },
        style: lineStyleModel.getLineStyle(),
        z2: 1,
        silent: true
      });
    } else {
      shape = new _util_graphic_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
        shape: {
          cx: polar.cx,
          cy: polar.cy,
          r: radiusExtent[rId],
          r0: radiusExtent[r0Id]
        },
        style: lineStyleModel.getLineStyle(),
        z2: 1,
        silent: true
      });
    }
    shape.style.fill = null;
    group.add(shape);
  },
  axisTick: function (group, angleAxisModel, polar, ticksAngles, minorTickAngles, radiusExtent) {
    var tickModel = angleAxisModel.getModel('axisTick');
    var tickLen = (tickModel.get('inside') ? -1 : 1) * tickModel.get('length');
    var radius = radiusExtent[getRadiusIdx(polar)];
    var lines = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.map(ticksAngles, function (tickAngleItem) {
      return new _util_graphic_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
        shape: getAxisLineShape(polar, [radius, radius + tickLen], tickAngleItem.coord)
      });
    });
    group.add(_util_graphic_js__WEBPACK_IMPORTED_MODULE_3__.mergePath(lines, {
      style: zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.defaults(tickModel.getModel('lineStyle').getLineStyle(), {
        stroke: angleAxisModel.get(['axisLine', 'lineStyle', 'color'])
      })
    }));
  },
  minorTick: function (group, angleAxisModel, polar, tickAngles, minorTickAngles, radiusExtent) {
    if (!minorTickAngles.length) {
      return;
    }
    var tickModel = angleAxisModel.getModel('axisTick');
    var minorTickModel = angleAxisModel.getModel('minorTick');
    var tickLen = (tickModel.get('inside') ? -1 : 1) * minorTickModel.get('length');
    var radius = radiusExtent[getRadiusIdx(polar)];
    var lines = [];
    for (var i = 0; i < minorTickAngles.length; i++) {
      for (var k = 0; k < minorTickAngles[i].length; k++) {
        lines.push(new _util_graphic_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
          shape: getAxisLineShape(polar, [radius, radius + tickLen], minorTickAngles[i][k].coord)
        }));
      }
    }
    group.add(_util_graphic_js__WEBPACK_IMPORTED_MODULE_3__.mergePath(lines, {
      style: zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.defaults(minorTickModel.getModel('lineStyle').getLineStyle(), zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.defaults(tickModel.getLineStyle(), {
        stroke: angleAxisModel.get(['axisLine', 'lineStyle', 'color'])
      }))
    }));
  },
  axisLabel: function (group, angleAxisModel, polar, ticksAngles, minorTickAngles, radiusExtent, labels) {
    var rawCategoryData = angleAxisModel.getCategories(true);
    var commonLabelModel = angleAxisModel.getModel('axisLabel');
    var labelMargin = commonLabelModel.get('margin');
    var triggerEvent = angleAxisModel.get('triggerEvent');
    // Use length of ticksAngles because it may remove the last tick to avoid overlapping
    zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.each(labels, function (labelItem, idx) {
      var labelModel = commonLabelModel;
      var tickValue = labelItem.tickValue;
      var r = radiusExtent[getRadiusIdx(polar)];
      var p = polar.coordToPoint([r + labelMargin, labelItem.coord]);
      var cx = polar.cx;
      var cy = polar.cy;
      var labelTextAlign = Math.abs(p[0] - cx) / r < 0.3 ? 'center' : p[0] > cx ? 'left' : 'right';
      var labelTextVerticalAlign = Math.abs(p[1] - cy) / r < 0.3 ? 'middle' : p[1] > cy ? 'top' : 'bottom';
      if (rawCategoryData && rawCategoryData[tickValue]) {
        var rawCategoryItem = rawCategoryData[tickValue];
        if (zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.isObject(rawCategoryItem) && rawCategoryItem.textStyle) {
          labelModel = new _model_Model_js__WEBPACK_IMPORTED_MODULE_6__["default"](rawCategoryItem.textStyle, commonLabelModel, commonLabelModel.ecModel);
        }
      }
      var textEl = new _util_graphic_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
        silent: _AxisBuilder_js__WEBPACK_IMPORTED_MODULE_8__["default"].isLabelSilent(angleAxisModel),
        style: (0,_label_labelStyle_js__WEBPACK_IMPORTED_MODULE_9__.createTextStyle)(labelModel, {
          x: p[0],
          y: p[1],
          fill: labelModel.getTextColor() || angleAxisModel.get(['axisLine', 'lineStyle', 'color']),
          text: labelItem.formattedLabel,
          align: labelTextAlign,
          verticalAlign: labelTextVerticalAlign
        })
      });
      group.add(textEl);
      _util_graphic_js__WEBPACK_IMPORTED_MODULE_3__.setTooltipConfig({
        el: textEl,
        componentModel: angleAxisModel,
        itemName: labelItem.formattedLabel,
        formatterParamsExtra: {
          isTruncated: function () {
            return textEl.isTruncated;
          },
          value: labelItem.rawLabel,
          tickIndex: idx
        }
      });
      // Pack data for mouse event
      if (triggerEvent) {
        var eventData = _AxisBuilder_js__WEBPACK_IMPORTED_MODULE_8__["default"].makeAxisEventDataBase(angleAxisModel);
        eventData.targetType = 'axisLabel';
        eventData.value = labelItem.rawLabel;
        (0,_util_innerStore_js__WEBPACK_IMPORTED_MODULE_10__.getECData)(textEl).eventData = eventData;
      }
    }, this);
  },
  splitLine: function (group, angleAxisModel, polar, ticksAngles, minorTickAngles, radiusExtent) {
    var splitLineModel = angleAxisModel.getModel('splitLine');
    var lineStyleModel = splitLineModel.getModel('lineStyle');
    var lineColors = lineStyleModel.get('color');
    var lineCount = 0;
    lineColors = lineColors instanceof Array ? lineColors : [lineColors];
    var splitLines = [];
    for (var i = 0; i < ticksAngles.length; i++) {
      var colorIndex = lineCount++ % lineColors.length;
      splitLines[colorIndex] = splitLines[colorIndex] || [];
      splitLines[colorIndex].push(new _util_graphic_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
        shape: getAxisLineShape(polar, radiusExtent, ticksAngles[i].coord)
      }));
    }
    // Simple optimization
    // Batching the lines if color are the same
    for (var i = 0; i < splitLines.length; i++) {
      group.add(_util_graphic_js__WEBPACK_IMPORTED_MODULE_3__.mergePath(splitLines[i], {
        style: zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.defaults({
          stroke: lineColors[i % lineColors.length]
        }, lineStyleModel.getLineStyle()),
        silent: true,
        z: angleAxisModel.get('z')
      }));
    }
  },
  minorSplitLine: function (group, angleAxisModel, polar, ticksAngles, minorTickAngles, radiusExtent) {
    if (!minorTickAngles.length) {
      return;
    }
    var minorSplitLineModel = angleAxisModel.getModel('minorSplitLine');
    var lineStyleModel = minorSplitLineModel.getModel('lineStyle');
    var lines = [];
    for (var i = 0; i < minorTickAngles.length; i++) {
      for (var k = 0; k < minorTickAngles[i].length; k++) {
        lines.push(new _util_graphic_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
          shape: getAxisLineShape(polar, radiusExtent, minorTickAngles[i][k].coord)
        }));
      }
    }
    group.add(_util_graphic_js__WEBPACK_IMPORTED_MODULE_3__.mergePath(lines, {
      style: lineStyleModel.getLineStyle(),
      silent: true,
      z: angleAxisModel.get('z')
    }));
  },
  splitArea: function (group, angleAxisModel, polar, ticksAngles, minorTickAngles, radiusExtent) {
    if (!ticksAngles.length) {
      return;
    }
    var splitAreaModel = angleAxisModel.getModel('splitArea');
    var areaStyleModel = splitAreaModel.getModel('areaStyle');
    var areaColors = areaStyleModel.get('color');
    var lineCount = 0;
    areaColors = areaColors instanceof Array ? areaColors : [areaColors];
    var splitAreas = [];
    var RADIAN = Math.PI / 180;
    var prevAngle = -ticksAngles[0].coord * RADIAN;
    var r0 = Math.min(radiusExtent[0], radiusExtent[1]);
    var r1 = Math.max(radiusExtent[0], radiusExtent[1]);
    var clockwise = angleAxisModel.get('clockwise');
    for (var i = 1, len = ticksAngles.length; i <= len; i++) {
      var coord = i === len ? ticksAngles[0].coord : ticksAngles[i].coord;
      var colorIndex = lineCount++ % areaColors.length;
      splitAreas[colorIndex] = splitAreas[colorIndex] || [];
      splitAreas[colorIndex].push(new _util_graphic_js__WEBPACK_IMPORTED_MODULE_11__["default"]({
        shape: {
          cx: polar.cx,
          cy: polar.cy,
          r0: r0,
          r: r1,
          startAngle: prevAngle,
          endAngle: -coord * RADIAN,
          clockwise: clockwise
        },
        silent: true
      }));
      prevAngle = -coord * RADIAN;
    }
    // Simple optimization
    // Batching the lines if color are the same
    for (var i = 0; i < splitAreas.length; i++) {
      group.add(_util_graphic_js__WEBPACK_IMPORTED_MODULE_3__.mergePath(splitAreas[i], {
        style: zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.defaults({
          fill: areaColors[i % areaColors.length]
        }, areaStyleModel.getAreaStyle()),
        silent: true
      }));
    }
  }
};
/* ESM default export */ __webpack_exports__["default"] = (AngleAxisView);

}),
60727: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AxisBuilderSharedContext: function() { return AxisBuilderSharedContext; },
  getLabelInner: function() { return getLabelInner; },
  moveIfOverlapByLinearLabels: function() { return moveIfOverlapByLinearLabels; },
  resolveAxisNameOverlapDefault: function() { return resolveAxisNameOverlapDefault; }
});
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56190);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(27208);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(73978);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(42562);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(98856);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(68903);
/* ESM import */var _util_innerStore_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(12212);
/* ESM import */var _label_labelStyle_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(57235);
/* ESM import */var _model_Model_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(40064);
/* ESM import */var _util_number_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(48843);
/* ESM import */var _util_symbol_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(42692);
/* ESM import */var zrender_lib_core_matrix_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24694);
/* ESM import */var zrender_lib_core_vector_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(25680);
/* ESM import */var _coord_axisHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5527);
/* ESM import */var _label_labelLayoutHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59044);
/* ESM import */var _util_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44244);
/* ESM import */var _axisBreakHelper_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(81230);
/* ESM import */var _axisAction_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(80753);
/* ESM import */var _scale_break_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(57593);
/* ESM import */var zrender_lib_core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48670);
/* ESM import */var zrender_lib_core_Point_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(98166);
/* ESM import */var zrender_lib_core_Transformable_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(66059);
/* ESM import */var _coord_axisTickLabelBuilder_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(38776);

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



















var PI = Math.PI;
var DEFAULT_CENTER_NAME_MARGIN_LEVELS = [[1, 2, 1, 2], [5, 3, 5, 3], [8, 3, 8, 3]];
var DEFAULT_ENDS_NAME_MARGIN_LEVELS = [[0, 1, 0, 1], [0, 3, 0, 3], [0, 3, 0, 3]];
var getLabelInner = (0,_util_model_js__WEBPACK_IMPORTED_MODULE_0__.makeInner)();
var getTickInner = (0,_util_model_js__WEBPACK_IMPORTED_MODULE_0__.makeInner)();
/**
 * A context shared by difference axisBuilder instances.
 * For cross-axes overlap resolving.
 *
 * Lifecycle constraint: should not over a pass of ec main process.
 *  If model is changed, the context must be disposed.
 *
 * @see AxisBuilderLocalContext
 */
var AxisBuilderSharedContext = /** @class */function () {
  function AxisBuilderSharedContext(resolveAxisNameOverlap) {
    /**
     * [CAUTION] Do not modify this data structure outside this class.
     */
    this.recordMap = {};
    this.resolveAxisNameOverlap = resolveAxisNameOverlap;
  }
  AxisBuilderSharedContext.prototype.ensureRecord = function (axisModel) {
    var dim = axisModel.axis.dim;
    var idx = axisModel.componentIndex;
    var recordMap = this.recordMap;
    var records = recordMap[dim] || (recordMap[dim] = []);
    return records[idx] || (records[idx] = {
      ready: {}
    });
  };
  return AxisBuilderSharedContext;
}();

;
/**
 * [CAUTION]
 *  1. The call of this function must be after axisLabel overlap handlings
 *     (such as `hideOverlap`, `fixMinMaxLabelShow`) and after transform calculating.
 *  2. Can be called multiple times and should be idempotent.
 */
function resetOverlapRecordToShared(cfg, shared, axisModel, labelLayoutList) {
  var axis = axisModel.axis;
  var record = shared.ensureRecord(axisModel);
  var labelInfoList = [];
  var stOccupiedRect;
  var useStOccupiedRect = hasAxisName(cfg.axisName) && (0,_coord_axisHelper_js__WEBPACK_IMPORTED_MODULE_1__.isNameLocationCenter)(cfg.nameLocation);
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.each)(labelLayoutList, function (layout) {
    var layoutInfo = (0,_label_labelLayoutHelper_js__WEBPACK_IMPORTED_MODULE_3__.ensureLabelLayoutWithGeometry)(layout);
    if (!layoutInfo || layoutInfo.label.ignore) {
      return;
    }
    labelInfoList.push(layoutInfo);
    var transGroup = record.transGroup;
    if (useStOccupiedRect) {
      // Transform to "standard axis" for creating stOccupiedRect (the label rects union).
      transGroup.transform ? zrender_lib_core_matrix_js__WEBPACK_IMPORTED_MODULE_4__.invert(_stTransTmp, transGroup.transform) : zrender_lib_core_matrix_js__WEBPACK_IMPORTED_MODULE_4__.identity(_stTransTmp);
      if (layoutInfo.transform) {
        zrender_lib_core_matrix_js__WEBPACK_IMPORTED_MODULE_4__.mul(_stTransTmp, _stTransTmp, layoutInfo.transform);
      }
      zrender_lib_core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_5__["default"].copy(_stLabelRectTmp, layoutInfo.localRect);
      _stLabelRectTmp.applyTransform(_stTransTmp);
      stOccupiedRect ? stOccupiedRect.union(_stLabelRectTmp) : zrender_lib_core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_5__["default"].copy(stOccupiedRect = new zrender_lib_core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_5__["default"](0, 0, 0, 0), _stLabelRectTmp);
    }
  });
  var sortByDim = Math.abs(record.dirVec.x) > 0.1 ? 'x' : 'y';
  var sortByValue = record.transGroup[sortByDim];
  labelInfoList.sort(function (info1, info2) {
    return Math.abs(info1.label[sortByDim] - sortByValue) - Math.abs(info2.label[sortByDim] - sortByValue);
  });
  if (useStOccupiedRect && stOccupiedRect) {
    var extent = axis.getExtent();
    var axisLineX = Math.min(extent[0], extent[1]);
    var axisLineWidth = Math.max(extent[0], extent[1]) - axisLineX;
    // If `nameLocation` is 'middle', enlarge axis labels boundingRect to axisLine to avoid bad
    //  case like that axis name is placed in the gap between axis labels and axis line.
    // If only one label exists, the entire band should be occupied for
    // visual consistency, so extent it to [0, canvas width].
    stOccupiedRect.union(new zrender_lib_core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_5__["default"](axisLineX, 0, axisLineWidth, 1));
  }
  record.stOccupiedRect = stOccupiedRect;
  record.labelInfoList = labelInfoList;
}
var _stTransTmp = zrender_lib_core_matrix_js__WEBPACK_IMPORTED_MODULE_4__.create();
var _stLabelRectTmp = new zrender_lib_core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_5__["default"](0, 0, 0, 0);
/**
 * The default resolver does not involve other axes within the same coordinate system.
 */
var resolveAxisNameOverlapDefault = function (cfg, ctx, axisModel, nameLayoutInfo, nameMoveDirVec, thisRecord) {
  if ((0,_coord_axisHelper_js__WEBPACK_IMPORTED_MODULE_1__.isNameLocationCenter)(cfg.nameLocation)) {
    var stOccupiedRect = thisRecord.stOccupiedRect;
    if (stOccupiedRect) {
      moveIfOverlap((0,_label_labelLayoutHelper_js__WEBPACK_IMPORTED_MODULE_3__.computeLabelGeometry2)({}, stOccupiedRect, thisRecord.transGroup.transform), nameLayoutInfo, nameMoveDirVec);
    }
  } else {
    moveIfOverlapByLinearLabels(thisRecord.labelInfoList, thisRecord.dirVec, nameLayoutInfo, nameMoveDirVec);
  }
};
// [NOTICE] not consider ignore.
function moveIfOverlap(basedLayoutInfo, movableLayoutInfo, moveDirVec) {
  var mtv = new zrender_lib_core_Point_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
  if ((0,_label_labelLayoutHelper_js__WEBPACK_IMPORTED_MODULE_3__.labelIntersect)(basedLayoutInfo, movableLayoutInfo, mtv, {
    direction: Math.atan2(moveDirVec.y, moveDirVec.x),
    bidirectional: false,
    touchThreshold: 0.05
  })) {
    (0,_label_labelLayoutHelper_js__WEBPACK_IMPORTED_MODULE_3__.labelLayoutApplyTranslation)(movableLayoutInfo, mtv);
  }
}
function moveIfOverlapByLinearLabels(baseLayoutInfoList, baseDirVec, movableLayoutInfo, moveDirVec) {
  // Detect and move from far to close.
  var sameDir = zrender_lib_core_Point_js__WEBPACK_IMPORTED_MODULE_6__["default"].dot(moveDirVec, baseDirVec) >= 0;
  for (var idx = 0, len = baseLayoutInfoList.length; idx < len; idx++) {
    var labelInfo = baseLayoutInfoList[sameDir ? idx : len - 1 - idx];
    if (!labelInfo.label.ignore) {
      moveIfOverlap(labelInfo, movableLayoutInfo, moveDirVec);
    }
  }
}
/**
 * @caution
 * - Ensure it is called after the data processing stage finished.
 * - It might be called before `CahrtView#render`, sush as called at `CoordinateSystem#update`,
 *  thus ensure the result the same whenever it is called.
 *
 * A builder for a straight-line axis.
 *
 * A final axis is translated and rotated from a "standard axis".
 * So opt.position and opt.rotation is required.
 *
 * A "standard axis" is the axis [0,0]-->[abs(axisExtent[1]-axisExtent[0]),0]
 * for example: [0,0]-->[50,0]
 */
var AxisBuilder = /** @class */function () {
  /**
   * [CAUTION]: axisModel.axis.extent/scale must be ready to use.
   */
  function AxisBuilder(axisModel, api, opt, shared) {
    this.group = new _util_graphic_js__WEBPACK_IMPORTED_MODULE_7__["default"]();
    this._axisModel = axisModel;
    this._api = api;
    this._local = {};
    this._shared = shared || new AxisBuilderSharedContext(resolveAxisNameOverlapDefault);
    this._resetCfgDetermined(opt);
  }
  /**
   * Regarding axis label related configurations, only the change of label.x/y is supported; other
   * changes are not necessary and not performant. To be specific, only `axis.position`
   * (and consequently `labelOffset`) and `axis.extent` can be changed, and assume everything in
   * `axisModel` are not changed.
   * Axis line related configurations can be changed since this method can only be called
   * before they are created.
   */
  AxisBuilder.prototype.updateCfg = function (opt) {
    if (false) { var ready }
    var raw = this._cfg.raw;
    raw.position = opt.position;
    raw.labelOffset = opt.labelOffset;
    this._resetCfgDetermined(raw);
  };
  /**
   * [CAUTION] For debug usage. Never change it outside!
   */
  AxisBuilder.prototype.__getRawCfg = function () {
    return this._cfg.raw;
  };
  AxisBuilder.prototype._resetCfgDetermined = function (raw) {
    var axisModel = this._axisModel;
    // FIXME:
    //  Currently there is no uniformed way to set default values if an option
    //  is specified null/undefined by user (intentionally or unintentionally),
    //  e.g. null/undefined is not a illegal value for `nameLocation`.
    //  Try to use `getDefaultOption` to address it. But radar has no `getDefaultOption`.
    var axisModelDefaultOption = axisModel.getDefaultOption ? axisModel.getDefaultOption() : {};
    // Default value
    var axisName = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.retrieve2)(raw.axisName, axisModel.get('name'));
    var nameMoveOverlapOption = axisModel.get('nameMoveOverlap');
    if (nameMoveOverlapOption == null || nameMoveOverlapOption === 'auto') {
      nameMoveOverlapOption = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.retrieve2)(raw.defaultNameMoveOverlap, true);
    }
    var cfg = {
      raw: raw,
      position: raw.position,
      rotation: raw.rotation,
      nameDirection: (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.retrieve2)(raw.nameDirection, 1),
      tickDirection: (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.retrieve2)(raw.tickDirection, 1),
      labelDirection: (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.retrieve2)(raw.labelDirection, 1),
      labelOffset: (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.retrieve2)(raw.labelOffset, 0),
      silent: (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.retrieve2)(raw.silent, true),
      axisName: axisName,
      nameLocation: (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.retrieve3)(axisModel.get('nameLocation'), axisModelDefaultOption.nameLocation, 'end'),
      shouldNameMoveOverlap: hasAxisName(axisName) && nameMoveOverlapOption,
      optionHideOverlap: axisModel.get(['axisLabel', 'hideOverlap']),
      showMinorTicks: axisModel.get(['minorTick', 'show'])
    };
    if (false) {}
    this._cfg = cfg;
    // FIXME Not use a separate text group?
    var transformGroup = new _util_graphic_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
      x: cfg.position[0],
      y: cfg.position[1],
      rotation: cfg.rotation
    });
    transformGroup.updateTransform();
    this._transformGroup = transformGroup;
    var record = this._shared.ensureRecord(axisModel);
    record.transGroup = this._transformGroup;
    record.dirVec = new zrender_lib_core_Point_js__WEBPACK_IMPORTED_MODULE_6__["default"](Math.cos(-cfg.rotation), Math.sin(-cfg.rotation));
  };
  AxisBuilder.prototype.build = function (axisPartNameMap, extraParams) {
    var _this = this;
    if (!axisPartNameMap) {
      axisPartNameMap = {
        axisLine: true,
        axisTickLabelEstimate: false,
        axisTickLabelDetermine: true,
        axisName: true
      };
    }
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.each)(AXIS_BUILDER_AXIS_PART_NAMES, function (partName) {
      if (axisPartNameMap[partName]) {
        builders[partName](_this._cfg, _this._local, _this._shared, _this._axisModel, _this.group, _this._transformGroup, _this._api, extraParams || {});
      }
    });
    return this;
  };
  /**
   * Currently only get text align/verticalAlign by rotation.
   * NO `position` is involved, otherwise it have to be performed for each `updateAxisLabelChangableProps`.
   */
  AxisBuilder.innerTextLayout = function (axisRotation, textRotation, direction) {
    var rotationDiff = (0,_util_number_js__WEBPACK_IMPORTED_MODULE_8__.remRadian)(textRotation - axisRotation);
    var textAlign;
    var textVerticalAlign;
    if ((0,_util_number_js__WEBPACK_IMPORTED_MODULE_8__.isRadianAroundZero)(rotationDiff)) {
      // Label is parallel with axis line.
      textVerticalAlign = direction > 0 ? 'top' : 'bottom';
      textAlign = 'center';
    } else if ((0,_util_number_js__WEBPACK_IMPORTED_MODULE_8__.isRadianAroundZero)(rotationDiff - PI)) {
      // Label is inverse parallel with axis line.
      textVerticalAlign = direction > 0 ? 'bottom' : 'top';
      textAlign = 'center';
    } else {
      textVerticalAlign = 'middle';
      if (rotationDiff > 0 && rotationDiff < PI) {
        textAlign = direction > 0 ? 'right' : 'left';
      } else {
        textAlign = direction > 0 ? 'left' : 'right';
      }
    }
    return {
      rotation: rotationDiff,
      textAlign: textAlign,
      textVerticalAlign: textVerticalAlign
    };
  };
  AxisBuilder.makeAxisEventDataBase = function (axisModel) {
    var eventData = {
      componentType: axisModel.mainType,
      componentIndex: axisModel.componentIndex
    };
    eventData[axisModel.mainType + 'Index'] = axisModel.componentIndex;
    return eventData;
  };
  AxisBuilder.isLabelSilent = function (axisModel) {
    var tooltipOpt = axisModel.get('tooltip');
    return axisModel.get('silent')
    // Consider mouse cursor, add these restrictions.
    || !(axisModel.get('triggerEvent') || tooltipOpt && tooltipOpt.show);
  };
  return AxisBuilder;
}();
;
// Sorted by dependency order.
var AXIS_BUILDER_AXIS_PART_NAMES = ['axisLine', 'axisTickLabelEstimate', 'axisTickLabelDetermine', 'axisName'];
var builders = {
  axisLine: function (cfg, local, shared, axisModel, group, transformGroup, api) {
    if (false) { var ready }
    var shown = axisModel.get(['axisLine', 'show']);
    if (shown === 'auto') {
      shown = true;
      if (cfg.raw.axisLineAutoShow != null) {
        shown = !!cfg.raw.axisLineAutoShow;
      }
    }
    if (!shown) {
      return;
    }
    var extent = axisModel.axis.getExtent();
    var matrix = transformGroup.transform;
    var pt1 = [extent[0], 0];
    var pt2 = [extent[1], 0];
    var inverse = pt1[0] > pt2[0];
    if (matrix) {
      (0,zrender_lib_core_vector_js__WEBPACK_IMPORTED_MODULE_9__.applyTransform)(pt1, pt1, matrix);
      (0,zrender_lib_core_vector_js__WEBPACK_IMPORTED_MODULE_9__.applyTransform)(pt2, pt2, matrix);
    }
    var lineStyle = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.extend)({
      lineCap: 'round'
    }, axisModel.getModel(['axisLine', 'lineStyle']).getLineStyle());
    var pathBaseProp = {
      strokeContainThreshold: cfg.raw.strokeContainThreshold || 5,
      silent: true,
      z2: 1,
      style: lineStyle
    };
    if (axisModel.get(['axisLine', 'breakLine']) && axisModel.axis.scale.hasBreaks()) {
      (0,_axisBreakHelper_js__WEBPACK_IMPORTED_MODULE_10__.getAxisBreakHelper)().buildAxisBreakLine(axisModel, group, transformGroup, pathBaseProp);
    } else {
      var line = new _util_graphic_js__WEBPACK_IMPORTED_MODULE_11__["default"]((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.extend)({
        shape: {
          x1: pt1[0],
          y1: pt1[1],
          x2: pt2[0],
          y2: pt2[1]
        }
      }, pathBaseProp));
      _util_graphic_js__WEBPACK_IMPORTED_MODULE_12__.subPixelOptimizeLine(line.shape, line.style.lineWidth);
      line.anid = 'line';
      group.add(line);
    }
    var arrows = axisModel.get(['axisLine', 'symbol']);
    if (arrows != null) {
      var arrowSize = axisModel.get(['axisLine', 'symbolSize']);
      if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.isString)(arrows)) {
        // Use the same arrow for start and end point
        arrows = [arrows, arrows];
      }
      if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.isString)(arrowSize) || (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.isNumber)(arrowSize)) {
        // Use the same size for width and height
        arrowSize = [arrowSize, arrowSize];
      }
      var arrowOffset = (0,_util_symbol_js__WEBPACK_IMPORTED_MODULE_13__.normalizeSymbolOffset)(axisModel.get(['axisLine', 'symbolOffset']) || 0, arrowSize);
      var symbolWidth_1 = arrowSize[0];
      var symbolHeight_1 = arrowSize[1];
      (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.each)([{
        rotate: cfg.rotation + Math.PI / 2,
        offset: arrowOffset[0],
        r: 0
      }, {
        rotate: cfg.rotation - Math.PI / 2,
        offset: arrowOffset[1],
        r: Math.sqrt((pt1[0] - pt2[0]) * (pt1[0] - pt2[0]) + (pt1[1] - pt2[1]) * (pt1[1] - pt2[1]))
      }], function (point, index) {
        if (arrows[index] !== 'none' && arrows[index] != null) {
          var symbol = (0,_util_symbol_js__WEBPACK_IMPORTED_MODULE_13__.createSymbol)(arrows[index], -symbolWidth_1 / 2, -symbolHeight_1 / 2, symbolWidth_1, symbolHeight_1, lineStyle.stroke, true);
          // Calculate arrow position with offset
          var r = point.r + point.offset;
          var pt = inverse ? pt2 : pt1;
          symbol.attr({
            rotation: point.rotate,
            x: pt[0] + r * Math.cos(cfg.rotation),
            y: pt[1] - r * Math.sin(cfg.rotation),
            silent: true,
            z2: 11
          });
          group.add(symbol);
        }
      });
    }
  },
  /**
   * [CAUTION] This method can be called multiple times, following the change due to `resetCfg` called
   *  in size measurement. Thus this method should be idempotent, and should be performant.
   */
  axisTickLabelEstimate: function (cfg, local, shared, axisModel, group, transformGroup, api, extraParams) {
    if (false) { var ready }
    var needCallLayout = dealLastTickLabelResultReusable(local, group, extraParams);
    if (needCallLayout) {
      layOutAxisTickLabel(cfg, local, shared, axisModel, group, transformGroup, api, _coord_axisTickLabelBuilder_js__WEBPACK_IMPORTED_MODULE_14__.AxisTickLabelComputingKind.estimate);
    }
  },
  /**
   * Finish axis tick label build.
   * Can be only called once.
   */
  axisTickLabelDetermine: function (cfg, local, shared, axisModel, group, transformGroup, api, extraParams) {
    if (false) { var ready }
    var needCallLayout = dealLastTickLabelResultReusable(local, group, extraParams);
    if (needCallLayout) {
      layOutAxisTickLabel(cfg, local, shared, axisModel, group, transformGroup, api, _coord_axisTickLabelBuilder_js__WEBPACK_IMPORTED_MODULE_14__.AxisTickLabelComputingKind.determine);
    }
    var ticksEls = buildAxisMajorTicks(cfg, group, transformGroup, axisModel);
    syncLabelIgnoreToMajorTicks(cfg, local.labelLayoutList, ticksEls);
    buildAxisMinorTicks(cfg, group, transformGroup, axisModel, cfg.tickDirection);
  },
  /**
   * [CAUTION] This method can be called multiple times, following the change due to `resetCfg` called
   *  in size measurement. Thus this method should be idempotent, and should be performant.
   */
  axisName: function (cfg, local, shared, axisModel, group, transformGroup, api, extraParams) {
    var sharedRecord = shared.ensureRecord(axisModel);
    if (false) { var ready }
    // Remove the existing name result created in estimation phase.
    if (local.nameEl) {
      group.remove(local.nameEl);
      local.nameEl = sharedRecord.nameLayout = sharedRecord.nameLocation = null;
    }
    var name = cfg.axisName;
    if (!hasAxisName(name)) {
      return;
    }
    var nameLocation = cfg.nameLocation;
    var nameDirection = cfg.nameDirection;
    var textStyleModel = axisModel.getModel('nameTextStyle');
    var gap = axisModel.get('nameGap') || 0;
    var extent = axisModel.axis.getExtent();
    var gapStartEndSignal = axisModel.axis.inverse ? -1 : 1;
    var pos = new zrender_lib_core_Point_js__WEBPACK_IMPORTED_MODULE_6__["default"](0, 0);
    var nameMoveDirVec = new zrender_lib_core_Point_js__WEBPACK_IMPORTED_MODULE_6__["default"](0, 0);
    if (nameLocation === 'start') {
      pos.x = extent[0] - gapStartEndSignal * gap;
      nameMoveDirVec.x = -gapStartEndSignal;
    } else if (nameLocation === 'end') {
      pos.x = extent[1] + gapStartEndSignal * gap;
      nameMoveDirVec.x = gapStartEndSignal;
    } else {
      // 'middle' or 'center'
      pos.x = (extent[0] + extent[1]) / 2;
      pos.y = cfg.labelOffset + nameDirection * gap;
      nameMoveDirVec.y = nameDirection;
    }
    var mt = zrender_lib_core_matrix_js__WEBPACK_IMPORTED_MODULE_4__.create();
    nameMoveDirVec.transform(zrender_lib_core_matrix_js__WEBPACK_IMPORTED_MODULE_4__.rotate(mt, mt, cfg.rotation));
    var nameRotation = axisModel.get('nameRotate');
    if (nameRotation != null) {
      nameRotation = nameRotation * PI / 180; // To radian.
    }
    var labelLayout;
    var axisNameAvailableWidth;
    if ((0,_coord_axisHelper_js__WEBPACK_IMPORTED_MODULE_1__.isNameLocationCenter)(nameLocation)) {
      labelLayout = AxisBuilder.innerTextLayout(cfg.rotation, nameRotation != null ? nameRotation : cfg.rotation,
      // Adapt to axis.
      nameDirection);
    } else {
      labelLayout = endTextLayout(cfg.rotation, nameLocation, nameRotation || 0, extent);
      axisNameAvailableWidth = cfg.raw.axisNameAvailableWidth;
      if (axisNameAvailableWidth != null) {
        axisNameAvailableWidth = Math.abs(axisNameAvailableWidth / Math.sin(labelLayout.rotation));
        !isFinite(axisNameAvailableWidth) && (axisNameAvailableWidth = null);
      }
    }
    var textFont = textStyleModel.getFont();
    var truncateOpt = axisModel.get('nameTruncate', true) || {};
    var ellipsis = truncateOpt.ellipsis;
    var maxWidth = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.retrieve)(cfg.raw.nameTruncateMaxWidth, truncateOpt.maxWidth, axisNameAvailableWidth);
    var nameMarginLevel = extraParams.nameMarginLevel || 0;
    var textEl = new _util_graphic_js__WEBPACK_IMPORTED_MODULE_15__["default"]({
      x: pos.x,
      y: pos.y,
      rotation: labelLayout.rotation,
      silent: AxisBuilder.isLabelSilent(axisModel),
      style: (0,_label_labelStyle_js__WEBPACK_IMPORTED_MODULE_16__.createTextStyle)(textStyleModel, {
        text: name,
        font: textFont,
        overflow: 'truncate',
        width: maxWidth,
        ellipsis: ellipsis,
        fill: textStyleModel.getTextColor() || axisModel.get(['axisLine', 'lineStyle', 'color']),
        align: textStyleModel.get('align') || labelLayout.textAlign,
        verticalAlign: textStyleModel.get('verticalAlign') || labelLayout.textVerticalAlign
      }),
      z2: 1
    });
    _util_graphic_js__WEBPACK_IMPORTED_MODULE_12__.setTooltipConfig({
      el: textEl,
      componentModel: axisModel,
      itemName: name
    });
    textEl.__fullText = name;
    // Id for animation
    textEl.anid = 'name';
    if (axisModel.get('triggerEvent')) {
      var eventData = AxisBuilder.makeAxisEventDataBase(axisModel);
      eventData.targetType = 'axisName';
      eventData.name = name;
      (0,_util_innerStore_js__WEBPACK_IMPORTED_MODULE_17__.getECData)(textEl).eventData = eventData;
    }
    transformGroup.add(textEl);
    textEl.updateTransform();
    local.nameEl = textEl;
    var nameLayout = sharedRecord.nameLayout = (0,_label_labelLayoutHelper_js__WEBPACK_IMPORTED_MODULE_3__.ensureLabelLayoutWithGeometry)({
      label: textEl,
      priority: textEl.z2,
      defaultAttr: {
        ignore: textEl.ignore
      },
      marginDefault: (0,_coord_axisHelper_js__WEBPACK_IMPORTED_MODULE_1__.isNameLocationCenter)(nameLocation)
      // Make axis name visually far from axis labels.
      // (but not too aggressive, consider multiple small charts)
      ? DEFAULT_CENTER_NAME_MARGIN_LEVELS[nameMarginLevel]
      // top/button margin is set to `0` to inserted the xAxis name into the indention
      // above the axis labels to save space. (see example below.)
      : DEFAULT_ENDS_NAME_MARGIN_LEVELS[nameMarginLevel]
    });
    sharedRecord.nameLocation = nameLocation;
    group.add(textEl);
    textEl.decomposeTransform();
    if (cfg.shouldNameMoveOverlap && nameLayout) {
      var record = shared.ensureRecord(axisModel);
      if (false) {}
      shared.resolveAxisNameOverlap(cfg, shared, axisModel, nameLayout, nameMoveDirVec, record);
    }
  }
};
function layOutAxisTickLabel(cfg, local, shared, axisModel, group, transformGroup, api, kind) {
  if (!axisLabelBuildResultExists(local)) {
    buildAxisLabel(cfg, local, group, kind, axisModel, api);
  }
  var labelLayoutList = local.labelLayoutList;
  updateAxisLabelChangableProps(cfg, axisModel, labelLayoutList, transformGroup);
  adjustBreakLabels(axisModel, cfg.rotation, labelLayoutList);
  var optionHideOverlap = cfg.optionHideOverlap;
  fixMinMaxLabelShow(axisModel, labelLayoutList, optionHideOverlap);
  if (optionHideOverlap) {
    // This bit fixes the label overlap issue for the time chart.
    // See https://github.com/apache/echarts/issues/14266 for more.
    (0,_label_labelLayoutHelper_js__WEBPACK_IMPORTED_MODULE_3__.hideOverlap)(
    // Filter the already ignored labels by the previous overlap resolving methods.
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.filter)(labelLayoutList, function (layout) {
      return layout && !layout.label.ignore;
    }));
  }
  // Always call it even this axis has no name, since it serves in overlapping detection
  // and grid outerBounds on other axis.
  resetOverlapRecordToShared(cfg, shared, axisModel, labelLayoutList);
}
;
function endTextLayout(rotation, textPosition, textRotate, extent) {
  var rotationDiff = (0,_util_number_js__WEBPACK_IMPORTED_MODULE_8__.remRadian)(textRotate - rotation);
  var textAlign;
  var textVerticalAlign;
  var inverse = extent[0] > extent[1];
  var onLeft = textPosition === 'start' && !inverse || textPosition !== 'start' && inverse;
  if ((0,_util_number_js__WEBPACK_IMPORTED_MODULE_8__.isRadianAroundZero)(rotationDiff - PI / 2)) {
    textVerticalAlign = onLeft ? 'bottom' : 'top';
    textAlign = 'center';
  } else if ((0,_util_number_js__WEBPACK_IMPORTED_MODULE_8__.isRadianAroundZero)(rotationDiff - PI * 1.5)) {
    textVerticalAlign = onLeft ? 'top' : 'bottom';
    textAlign = 'center';
  } else {
    textVerticalAlign = 'middle';
    if (rotationDiff < PI * 1.5 && rotationDiff > PI / 2) {
      textAlign = onLeft ? 'left' : 'right';
    } else {
      textAlign = onLeft ? 'right' : 'left';
    }
  }
  return {
    rotation: rotationDiff,
    textAlign: textAlign,
    textVerticalAlign: textVerticalAlign
  };
}
/**
 * Assume `labelLayoutList` has no `label.ignore: true`.
 * Assume `labelLayoutList` have been sorted by value ascending order.
 */
function fixMinMaxLabelShow(axisModel, labelLayoutList, optionHideOverlap) {
  if ((0,_coord_axisHelper_js__WEBPACK_IMPORTED_MODULE_1__.shouldShowAllLabels)(axisModel.axis)) {
    return;
  }
  // FIXME
  // Have not consider onBand yet, where tick els is more than label els.
  // Assert no ignore in labels.
  function deal(showMinMaxLabel, outmostLabelIdx, innerLabelIdx) {
    var outmostLabelLayout = (0,_label_labelLayoutHelper_js__WEBPACK_IMPORTED_MODULE_3__.ensureLabelLayoutWithGeometry)(labelLayoutList[outmostLabelIdx]);
    var innerLabelLayout = (0,_label_labelLayoutHelper_js__WEBPACK_IMPORTED_MODULE_3__.ensureLabelLayoutWithGeometry)(labelLayoutList[innerLabelIdx]);
    if (!outmostLabelLayout || !innerLabelLayout) {
      return;
    }
    if (showMinMaxLabel === false || outmostLabelLayout.suggestIgnore) {
      ignoreEl(outmostLabelLayout.label);
      return;
    }
    if (innerLabelLayout.suggestIgnore) {
      ignoreEl(innerLabelLayout.label);
      return;
    }
    // PENDING: Originally we thought `optionHideOverlap === false` means do not hide anything,
    //  since currently the bounding rect of text might not accurate enough and might slightly bigger,
    //  which causes false positive. But `optionHideOverlap: null/undfined` is falsy and likely
    //  be treated as false.
    // In most fonts the glyph does not reach the boundary of the bounding rect.
    // This is needed to avoid too aggressive to hide two elements that meet at the edge
    // due to compact layout by the same bounding rect or OBB.
    var touchThreshold = 0.1;
    // This treatment is for backward compatibility. And `!optionHideOverlap` implies that
    // the user accepts the visual touch between adjacent labels, thus "hide min/max label"
    // should be conservative, since the space might be sufficient in this case.
    if (!optionHideOverlap) {
      var marginForce = [0, 0, 0, 0];
      // Make a copy to apply `ignoreMargin`.
      outmostLabelLayout = (0,_label_labelLayoutHelper_js__WEBPACK_IMPORTED_MODULE_3__.newLabelLayoutWithGeometry)({
        marginForce: marginForce
      }, outmostLabelLayout);
      innerLabelLayout = (0,_label_labelLayoutHelper_js__WEBPACK_IMPORTED_MODULE_3__.newLabelLayoutWithGeometry)({
        marginForce: marginForce
      }, innerLabelLayout);
    }
    if ((0,_label_labelLayoutHelper_js__WEBPACK_IMPORTED_MODULE_3__.labelIntersect)(outmostLabelLayout, innerLabelLayout, null, {
      touchThreshold: touchThreshold
    })) {
      if (showMinMaxLabel) {
        ignoreEl(innerLabelLayout.label);
      } else {
        ignoreEl(outmostLabelLayout.label);
      }
    }
  }
  // If min or max are user set, we need to check
  // If the tick on min(max) are overlap on their neighbour tick
  // If they are overlapped, we need to hide the min(max) tick label
  var showMinLabel = axisModel.get(['axisLabel', 'showMinLabel']);
  var showMaxLabel = axisModel.get(['axisLabel', 'showMaxLabel']);
  var labelsLen = labelLayoutList.length;
  deal(showMinLabel, 0, 1);
  deal(showMaxLabel, labelsLen - 1, labelsLen - 2);
}
// PENDING: Is it necessary to display a tick while the corresponding label is ignored?
function syncLabelIgnoreToMajorTicks(cfg, labelLayoutList, tickEls) {
  if (cfg.showMinorTicks) {
    // It probably unreaasonable to hide major ticks when show minor ticks.
    return;
  }
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.each)(labelLayoutList, function (labelLayout) {
    if (labelLayout && labelLayout.label.ignore) {
      for (var idx = 0; idx < tickEls.length; idx++) {
        var tickEl = tickEls[idx];
        // Assume small array, linear search is fine for performance.
        // PENDING: measure?
        var tickInner = getTickInner(tickEl);
        var labelInner = getLabelInner(labelLayout.label);
        if (tickInner.tickValue != null && !tickInner.onBand && tickInner.tickValue === labelInner.tickValue) {
          ignoreEl(tickEl);
          return;
        }
      }
    }
  });
}
function ignoreEl(el) {
  el && (el.ignore = true);
}
function createTicks(ticksCoords, tickTransform, tickEndCoord, tickLineStyle, anidPrefix) {
  var tickEls = [];
  var pt1 = [];
  var pt2 = [];
  for (var i = 0; i < ticksCoords.length; i++) {
    var tickCoord = ticksCoords[i].coord;
    pt1[0] = tickCoord;
    pt1[1] = 0;
    pt2[0] = tickCoord;
    pt2[1] = tickEndCoord;
    if (tickTransform) {
      (0,zrender_lib_core_vector_js__WEBPACK_IMPORTED_MODULE_9__.applyTransform)(pt1, pt1, tickTransform);
      (0,zrender_lib_core_vector_js__WEBPACK_IMPORTED_MODULE_9__.applyTransform)(pt2, pt2, tickTransform);
    }
    // Tick line, Not use group transform to have better line draw
    var tickEl = new _util_graphic_js__WEBPACK_IMPORTED_MODULE_11__["default"]({
      shape: {
        x1: pt1[0],
        y1: pt1[1],
        x2: pt2[0],
        y2: pt2[1]
      },
      style: tickLineStyle,
      z2: 2,
      autoBatch: true,
      silent: true
    });
    _util_graphic_js__WEBPACK_IMPORTED_MODULE_12__.subPixelOptimizeLine(tickEl.shape, tickEl.style.lineWidth);
    tickEl.anid = anidPrefix + '_' + ticksCoords[i].tickValue;
    tickEls.push(tickEl);
    var inner = getTickInner(tickEl);
    inner.onBand = !!ticksCoords[i].onBand;
    inner.tickValue = ticksCoords[i].tickValue;
  }
  return tickEls;
}
function buildAxisMajorTicks(cfg, group, transformGroup, axisModel) {
  var axis = axisModel.axis;
  var tickModel = axisModel.getModel('axisTick');
  var shown = tickModel.get('show');
  if (shown === 'auto') {
    shown = true;
    if (cfg.raw.axisTickAutoShow != null) {
      shown = !!cfg.raw.axisTickAutoShow;
    }
  }
  if (!shown || axis.scale.isBlank()) {
    return [];
  }
  var lineStyleModel = tickModel.getModel('lineStyle');
  var tickEndCoord = cfg.tickDirection * tickModel.get('length');
  var ticksCoords = axis.getTicksCoords();
  var ticksEls = createTicks(ticksCoords, transformGroup.transform, tickEndCoord, (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.defaults)(lineStyleModel.getLineStyle(), {
    stroke: axisModel.get(['axisLine', 'lineStyle', 'color'])
  }), 'ticks');
  for (var i = 0; i < ticksEls.length; i++) {
    group.add(ticksEls[i]);
  }
  return ticksEls;
}
function buildAxisMinorTicks(cfg, group, transformGroup, axisModel, tickDirection) {
  var axis = axisModel.axis;
  var minorTickModel = axisModel.getModel('minorTick');
  if (!cfg.showMinorTicks || axis.scale.isBlank()) {
    return;
  }
  var minorTicksCoords = axis.getMinorTicksCoords();
  if (!minorTicksCoords.length) {
    return;
  }
  var lineStyleModel = minorTickModel.getModel('lineStyle');
  var tickEndCoord = tickDirection * minorTickModel.get('length');
  var minorTickLineStyle = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.defaults)(lineStyleModel.getLineStyle(), (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.defaults)(axisModel.getModel('axisTick').getLineStyle(), {
    stroke: axisModel.get(['axisLine', 'lineStyle', 'color'])
  }));
  for (var i = 0; i < minorTicksCoords.length; i++) {
    var minorTicksEls = createTicks(minorTicksCoords[i], transformGroup.transform, tickEndCoord, minorTickLineStyle, 'minorticks_' + i);
    for (var k = 0; k < minorTicksEls.length; k++) {
      group.add(minorTicksEls[k]);
    }
  }
}
// Return whether need to call `layOutAxisTickLabel` again.
function dealLastTickLabelResultReusable(local, group, extraParams) {
  if (axisLabelBuildResultExists(local)) {
    var axisLabelsCreationContext = local.axisLabelsCreationContext;
    if (false) {}
    var noPxChangeTryDetermine = axisLabelsCreationContext.out.noPxChangeTryDetermine;
    if (extraParams.noPxChange) {
      var canDetermine = true;
      for (var idx = 0; idx < noPxChangeTryDetermine.length; idx++) {
        canDetermine = canDetermine && noPxChangeTryDetermine[idx]();
      }
      if (canDetermine) {
        return false;
      }
    }
    if (noPxChangeTryDetermine.length) {
      // Remove the result of `buildAxisLabel`
      group.remove(local.labelGroup);
      axisLabelBuildResultSet(local, null, null, null);
    }
  }
  return true;
}
function buildAxisLabel(cfg, local, group, kind, axisModel, api) {
  var axis = axisModel.axis;
  var show = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.retrieve)(cfg.raw.axisLabelShow, axisModel.get(['axisLabel', 'show']));
  var labelGroup = new _util_graphic_js__WEBPACK_IMPORTED_MODULE_7__["default"]();
  group.add(labelGroup);
  var axisLabelCreationCtx = (0,_coord_axisTickLabelBuilder_js__WEBPACK_IMPORTED_MODULE_14__.createAxisLabelsComputingContext)(kind);
  if (!show || axis.scale.isBlank()) {
    axisLabelBuildResultSet(local, [], labelGroup, axisLabelCreationCtx);
    return;
  }
  var labelModel = axisModel.getModel('axisLabel');
  var labels = axis.getViewLabels(axisLabelCreationCtx);
  // Special label rotate.
  var labelRotation = ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.retrieve)(cfg.raw.labelRotate, labelModel.get('rotate')) || 0) * PI / 180;
  var labelLayout = AxisBuilder.innerTextLayout(cfg.rotation, labelRotation, cfg.labelDirection);
  var rawCategoryData = axisModel.getCategories && axisModel.getCategories(true);
  var labelEls = [];
  var triggerEvent = axisModel.get('triggerEvent');
  var z2Min = Infinity;
  var z2Max = -Infinity;
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.each)(labels, function (labelItem, index) {
    var _a;
    var tickValue = axis.scale.type === 'ordinal' ? axis.scale.getRawOrdinalNumber(labelItem.tickValue) : labelItem.tickValue;
    var formattedLabel = labelItem.formattedLabel;
    var rawLabel = labelItem.rawLabel;
    var itemLabelModel = labelModel;
    if (rawCategoryData && rawCategoryData[tickValue]) {
      var rawCategoryItem = rawCategoryData[tickValue];
      if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.isObject)(rawCategoryItem) && rawCategoryItem.textStyle) {
        itemLabelModel = new _model_Model_js__WEBPACK_IMPORTED_MODULE_18__["default"](rawCategoryItem.textStyle, labelModel, axisModel.ecModel);
      }
    }
    var textColor = itemLabelModel.getTextColor() || axisModel.get(['axisLine', 'lineStyle', 'color']);
    var align = itemLabelModel.getShallow('align', true) || labelLayout.textAlign;
    var alignMin = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.retrieve2)(itemLabelModel.getShallow('alignMinLabel', true), align);
    var alignMax = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.retrieve2)(itemLabelModel.getShallow('alignMaxLabel', true), align);
    var verticalAlign = itemLabelModel.getShallow('verticalAlign', true) || itemLabelModel.getShallow('baseline', true) || labelLayout.textVerticalAlign;
    var verticalAlignMin = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.retrieve2)(itemLabelModel.getShallow('verticalAlignMinLabel', true), verticalAlign);
    var verticalAlignMax = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.retrieve2)(itemLabelModel.getShallow('verticalAlignMaxLabel', true), verticalAlign);
    var z2 = 10 + (((_a = labelItem.time) === null || _a === void 0 ? void 0 : _a.level) || 0);
    z2Min = Math.min(z2Min, z2);
    z2Max = Math.max(z2Max, z2);
    var textEl = new _util_graphic_js__WEBPACK_IMPORTED_MODULE_15__["default"]({
      // --- transform props start ---
      // All of the transform props MUST not be set here, but should be set in
      // `updateAxisLabelChangableProps`, because they may change in estimation,
      // and need to calculate based on global coord sys by `decomposeTransform`.
      x: 0,
      y: 0,
      rotation: 0,
      // --- transform props end ---
      silent: AxisBuilder.isLabelSilent(axisModel),
      z2: z2,
      style: (0,_label_labelStyle_js__WEBPACK_IMPORTED_MODULE_16__.createTextStyle)(itemLabelModel, {
        text: formattedLabel,
        align: index === 0 ? alignMin : index === labels.length - 1 ? alignMax : align,
        verticalAlign: index === 0 ? verticalAlignMin : index === labels.length - 1 ? verticalAlignMax : verticalAlign,
        fill: (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.isFunction)(textColor) ? textColor(
        // (1) In category axis with data zoom, tick is not the original
        // index of axis.data. So tick should not be exposed to user
        // in category axis.
        // (2) Compatible with previous version, which always use formatted label as
        // input. But in interval scale the formatted label is like '223,445', which
        // maked user replace ','. So we modify it to return original val but remain
        // it as 'string' to avoid error in replacing.
        axis.type === 'category' ? rawLabel : axis.type === 'value' ? tickValue + '' : tickValue, index) : textColor
      })
    });
    textEl.anid = 'label_' + tickValue;
    var inner = getLabelInner(textEl);
    inner["break"] = labelItem["break"];
    inner.tickValue = tickValue;
    inner.layoutRotation = labelLayout.rotation;
    _util_graphic_js__WEBPACK_IMPORTED_MODULE_12__.setTooltipConfig({
      el: textEl,
      componentModel: axisModel,
      itemName: formattedLabel,
      formatterParamsExtra: {
        isTruncated: function () {
          return textEl.isTruncated;
        },
        value: rawLabel,
        tickIndex: index
      }
    });
    // Pack data for mouse event
    if (triggerEvent) {
      var eventData = AxisBuilder.makeAxisEventDataBase(axisModel);
      eventData.targetType = 'axisLabel';
      eventData.value = rawLabel;
      eventData.tickIndex = index;
      if (labelItem["break"]) {
        eventData["break"] = {
          // type: labelItem.break.type,
          start: labelItem["break"].parsedBreak.vmin,
          end: labelItem["break"].parsedBreak.vmax
        };
      }
      if (axis.type === 'category') {
        eventData.dataIndex = tickValue;
      }
      (0,_util_innerStore_js__WEBPACK_IMPORTED_MODULE_17__.getECData)(textEl).eventData = eventData;
      if (labelItem["break"]) {
        addBreakEventHandler(axisModel, api, textEl, labelItem["break"]);
      }
    }
    labelEls.push(textEl);
    labelGroup.add(textEl);
  });
  var labelLayoutList = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.map)(labelEls, function (label) {
    return {
      label: label,
      priority: getLabelInner(label)["break"] ? label.z2 + (z2Max - z2Min + 1) // Make break labels be highest priority.
      : label.z2,
      defaultAttr: {
        ignore: label.ignore
      }
    };
  });
  axisLabelBuildResultSet(local, labelLayoutList, labelGroup, axisLabelCreationCtx);
}
// Indicate that `layOutAxisTickLabel` has been called.
function axisLabelBuildResultExists(local) {
  return !!local.labelLayoutList;
}
function axisLabelBuildResultSet(local, labelLayoutList, labelGroup, axisLabelsCreationContext) {
  // Ensure the same lifetime.
  local.labelLayoutList = labelLayoutList;
  local.labelGroup = labelGroup;
  local.axisLabelsCreationContext = axisLabelsCreationContext;
}
function updateAxisLabelChangableProps(cfg, axisModel, labelLayoutList, transformGroup) {
  var labelMargin = axisModel.get(['axisLabel', 'margin']);
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.each)(labelLayoutList, function (layout, idx) {
    var geometry = (0,_label_labelLayoutHelper_js__WEBPACK_IMPORTED_MODULE_3__.ensureLabelLayoutWithGeometry)(layout);
    if (!geometry) {
      return;
    }
    var labelEl = geometry.label;
    var inner = getLabelInner(labelEl);
    // See the comment in `suggestIgnore`.
    geometry.suggestIgnore = labelEl.ignore;
    // Currently no `ignore:true` is set in `buildAxisLabel`
    // But `ignore:true` may be set subsequently for overlap handling, thus reset it here.
    labelEl.ignore = false;
    (0,zrender_lib_core_Transformable_js__WEBPACK_IMPORTED_MODULE_19__.copyTransform)(_tmpLayoutEl, _tmpLayoutElReset);
    _tmpLayoutEl.x = axisModel.axis.dataToCoord(inner.tickValue);
    _tmpLayoutEl.y = cfg.labelOffset + cfg.labelDirection * labelMargin;
    _tmpLayoutEl.rotation = inner.layoutRotation;
    transformGroup.add(_tmpLayoutEl);
    _tmpLayoutEl.updateTransform();
    transformGroup.remove(_tmpLayoutEl);
    _tmpLayoutEl.decomposeTransform();
    (0,zrender_lib_core_Transformable_js__WEBPACK_IMPORTED_MODULE_19__.copyTransform)(labelEl, _tmpLayoutEl);
    labelEl.markRedraw();
    (0,_label_labelLayoutHelper_js__WEBPACK_IMPORTED_MODULE_3__.setLabelLayoutDirty)(geometry, true);
    (0,_label_labelLayoutHelper_js__WEBPACK_IMPORTED_MODULE_3__.ensureLabelLayoutWithGeometry)(geometry);
  });
}
var _tmpLayoutEl = new _util_graphic_js__WEBPACK_IMPORTED_MODULE_20__["default"]();
var _tmpLayoutElReset = new _util_graphic_js__WEBPACK_IMPORTED_MODULE_20__["default"]();
function hasAxisName(axisName) {
  return !!axisName;
}
function addBreakEventHandler(axisModel, api, textEl, visualBreak) {
  textEl.on('click', function (params) {
    var payload = {
      type: _axisAction_js__WEBPACK_IMPORTED_MODULE_21__.AXIS_BREAK_EXPAND_ACTION_TYPE,
      breaks: [{
        start: visualBreak.parsedBreak.breakOption.start,
        end: visualBreak.parsedBreak.breakOption.end
      }]
    };
    payload[axisModel.axis.dim + "AxisIndex"] = axisModel.componentIndex;
    api.dispatchAction(payload);
  });
}
function adjustBreakLabels(axisModel, axisRotation, labelLayoutList) {
  var scaleBreakHelper = (0,_scale_break_js__WEBPACK_IMPORTED_MODULE_22__.getScaleBreakHelper)();
  if (!scaleBreakHelper) {
    return;
  }
  var breakLabelIndexPairs = scaleBreakHelper.retrieveAxisBreakPairs(labelLayoutList, function (layoutInfo) {
    return layoutInfo && getLabelInner(layoutInfo.label)["break"];
  }, true);
  var moveOverlap = axisModel.get(['breakLabelLayout', 'moveOverlap'], true);
  if (moveOverlap === true || moveOverlap === 'auto') {
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.each)(breakLabelIndexPairs, function (idxPair) {
      (0,_axisBreakHelper_js__WEBPACK_IMPORTED_MODULE_10__.getAxisBreakHelper)().adjustBreakLabelPair(axisModel.axis.inverse, axisRotation, [(0,_label_labelLayoutHelper_js__WEBPACK_IMPORTED_MODULE_3__.ensureLabelLayoutWithGeometry)(labelLayoutList[idxPair[0]]), (0,_label_labelLayoutHelper_js__WEBPACK_IMPORTED_MODULE_3__.ensureLabelLayoutWithGeometry)(labelLayoutList[idxPair[1]])]);
    });
  }
}
/* ESM default export */ __webpack_exports__["default"] = (AxisBuilder);

}),
68463: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var _axisPointer_modelHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66874);
/* ESM import */var _view_Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64989);

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



var axisPointerClazz = {};
/**
 * Base class of AxisView.
 */
var AxisView = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(AxisView, _super);
  function AxisView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = AxisView.type;
    return _this;
  }
  /**
   * @override
   */
  AxisView.prototype.render = function (axisModel, ecModel, api, payload) {
    // FIXME
    // This process should proformed after coordinate systems updated
    // (axis scale updated), and should be performed each time update.
    // So put it here temporarily, although it is not appropriate to
    // put a model-writing procedure in `view`.
    this.axisPointerClass && _axisPointer_modelHelper_js__WEBPACK_IMPORTED_MODULE_2__.fixValue(axisModel);
    _super.prototype.render.apply(this, arguments);
    this._doUpdateAxisPointerClass(axisModel, api, true);
  };
  /**
   * Action handler.
   */
  AxisView.prototype.updateAxisPointer = function (axisModel, ecModel, api, payload) {
    this._doUpdateAxisPointerClass(axisModel, api, false);
  };
  /**
   * @override
   */
  AxisView.prototype.remove = function (ecModel, api) {
    var axisPointer = this._axisPointer;
    axisPointer && axisPointer.remove(api);
  };
  /**
   * @override
   */
  AxisView.prototype.dispose = function (ecModel, api) {
    this._disposeAxisPointer(api);
    _super.prototype.dispose.apply(this, arguments);
  };
  AxisView.prototype._doUpdateAxisPointerClass = function (axisModel, api, forceRender) {
    var Clazz = AxisView.getAxisPointerClass(this.axisPointerClass);
    if (!Clazz) {
      return;
    }
    var axisPointerModel = _axisPointer_modelHelper_js__WEBPACK_IMPORTED_MODULE_2__.getAxisPointerModel(axisModel);
    axisPointerModel ? (this._axisPointer || (this._axisPointer = new Clazz())).render(axisModel, axisPointerModel, api, forceRender) : this._disposeAxisPointer(api);
  };
  AxisView.prototype._disposeAxisPointer = function (api) {
    this._axisPointer && this._axisPointer.dispose(api);
    this._axisPointer = null;
  };
  AxisView.registerAxisPointerClass = function (type, clazz) {
    if (false) {}
    axisPointerClazz[type] = clazz;
  };
  ;
  AxisView.getAxisPointerClass = function (type) {
    return type && axisPointerClazz[type];
  };
  ;
  AxisView.type = 'axis';
  return AxisView;
}(_view_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* ESM default export */ __webpack_exports__["default"] = (AxisView);

}),
2327: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CartesianXAxisView: function() { return CartesianXAxisView; },
  CartesianYAxisView: function() { return CartesianYAxisView; }
});
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56190);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27208);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42562);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73978);
/* ESM import */var _AxisView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68463);
/* ESM import */var _axisSplitHelper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92363);
/* ESM import */var _axisBreakHelper_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81230);
/* ESM import */var _coord_axisHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5527);

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







var selfBuilderAttrs = ['splitArea', 'splitLine', 'minorSplitLine', 'breakArea'];
var CartesianAxisView = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(CartesianAxisView, _super);
  function CartesianAxisView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = CartesianAxisView.type;
    _this.axisPointerClass = 'CartesianAxisPointer';
    return _this;
  }
  /**
   * @override
   */
  CartesianAxisView.prototype.render = function (axisModel, ecModel, api, payload) {
    this.group.removeAll();
    var oldAxisGroup = this._axisGroup;
    this._axisGroup = new _util_graphic_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.group.add(this._axisGroup);
    if (!(0,_coord_axisHelper_js__WEBPACK_IMPORTED_MODULE_3__.shouldAxisShow)(axisModel)) {
      return;
    }
    this._axisGroup.add(axisModel.axis.axisBuilder.group);
    zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__.each(selfBuilderAttrs, function (name) {
      if (axisModel.get([name, 'show'])) {
        axisElementBuilders[name](this, this._axisGroup, axisModel, axisModel.getCoordSysModel(), api);
      }
    }, this);
    // THIS is a special case for bar racing chart.
    // Update the axis label from the natural initial layout to
    // sorted layout should has no animation.
    var isInitialSortFromBarRacing = payload && payload.type === 'changeAxisOrder' && payload.isInitSort;
    if (!isInitialSortFromBarRacing) {
      _util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.groupTransition(oldAxisGroup, this._axisGroup, axisModel);
    }
    _super.prototype.render.call(this, axisModel, ecModel, api, payload);
  };
  CartesianAxisView.prototype.remove = function () {
    (0,_axisSplitHelper_js__WEBPACK_IMPORTED_MODULE_6__.rectCoordAxisHandleRemove)(this);
  };
  CartesianAxisView.type = 'cartesianAxis';
  return CartesianAxisView;
}(_AxisView_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
var axisElementBuilders = {
  splitLine: function (axisView, axisGroup, axisModel, gridModel, api) {
    var axis = axisModel.axis;
    if (axis.scale.isBlank()) {
      return;
    }
    var splitLineModel = axisModel.getModel('splitLine');
    var lineStyleModel = splitLineModel.getModel('lineStyle');
    var lineColors = lineStyleModel.get('color');
    var showMinLine = splitLineModel.get('showMinLine') !== false;
    var showMaxLine = splitLineModel.get('showMaxLine') !== false;
    lineColors = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__.isArray(lineColors) ? lineColors : [lineColors];
    var gridRect = gridModel.coordinateSystem.getRect();
    var isHorizontal = axis.isHorizontal();
    var lineCount = 0;
    var ticksCoords = axis.getTicksCoords({
      tickModel: splitLineModel,
      breakTicks: 'none',
      pruneByBreak: 'preserve_extent_bound'
    });
    var p1 = [];
    var p2 = [];
    var lineStyle = lineStyleModel.getLineStyle();
    for (var i = 0; i < ticksCoords.length; i++) {
      var tickCoord = axis.toGlobalCoord(ticksCoords[i].coord);
      if (i === 0 && !showMinLine || i === ticksCoords.length - 1 && !showMaxLine) {
        continue;
      }
      var tickValue = ticksCoords[i].tickValue;
      if (isHorizontal) {
        p1[0] = tickCoord;
        p1[1] = gridRect.y;
        p2[0] = tickCoord;
        p2[1] = gridRect.y + gridRect.height;
      } else {
        p1[0] = gridRect.x;
        p1[1] = tickCoord;
        p2[0] = gridRect.x + gridRect.width;
        p2[1] = tickCoord;
      }
      var colorIndex = lineCount++ % lineColors.length;
      var line = new _util_graphic_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
        anid: tickValue != null ? 'line_' + tickValue : null,
        autoBatch: true,
        shape: {
          x1: p1[0],
          y1: p1[1],
          x2: p2[0],
          y2: p2[1]
        },
        style: zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__.defaults({
          stroke: lineColors[colorIndex]
        }, lineStyle),
        silent: true
      });
      _util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.subPixelOptimizeLine(line.shape, lineStyle.lineWidth);
      axisGroup.add(line);
    }
  },
  minorSplitLine: function (axisView, axisGroup, axisModel, gridModel, api) {
    var axis = axisModel.axis;
    var minorSplitLineModel = axisModel.getModel('minorSplitLine');
    var lineStyleModel = minorSplitLineModel.getModel('lineStyle');
    var gridRect = gridModel.coordinateSystem.getRect();
    var isHorizontal = axis.isHorizontal();
    var minorTicksCoords = axis.getMinorTicksCoords();
    if (!minorTicksCoords.length) {
      return;
    }
    var p1 = [];
    var p2 = [];
    var lineStyle = lineStyleModel.getLineStyle();
    for (var i = 0; i < minorTicksCoords.length; i++) {
      for (var k = 0; k < minorTicksCoords[i].length; k++) {
        var tickCoord = axis.toGlobalCoord(minorTicksCoords[i][k].coord);
        if (isHorizontal) {
          p1[0] = tickCoord;
          p1[1] = gridRect.y;
          p2[0] = tickCoord;
          p2[1] = gridRect.y + gridRect.height;
        } else {
          p1[0] = gridRect.x;
          p1[1] = tickCoord;
          p2[0] = gridRect.x + gridRect.width;
          p2[1] = tickCoord;
        }
        var line = new _util_graphic_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
          anid: 'minor_line_' + minorTicksCoords[i][k].tickValue,
          autoBatch: true,
          shape: {
            x1: p1[0],
            y1: p1[1],
            x2: p2[0],
            y2: p2[1]
          },
          style: lineStyle,
          silent: true
        });
        _util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.subPixelOptimizeLine(line.shape, lineStyle.lineWidth);
        axisGroup.add(line);
      }
    }
  },
  splitArea: function (axisView, axisGroup, axisModel, gridModel, api) {
    (0,_axisSplitHelper_js__WEBPACK_IMPORTED_MODULE_6__.rectCoordAxisBuildSplitArea)(axisView, axisGroup, axisModel, gridModel);
  },
  breakArea: function (axisView, axisGroup, axisModel, gridModel, api) {
    var axisBreakHelper = (0,_axisBreakHelper_js__WEBPACK_IMPORTED_MODULE_8__.getAxisBreakHelper)();
    var scale = axisModel.axis.scale;
    if (axisBreakHelper && scale.type !== 'ordinal') {
      axisBreakHelper.rectCoordBuildBreakAxis(axisGroup, axisView, axisModel, gridModel.coordinateSystem.getRect(), api);
    }
  }
};
var CartesianXAxisView = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(CartesianXAxisView, _super);
  function CartesianXAxisView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = CartesianXAxisView.type;
    return _this;
  }
  CartesianXAxisView.type = 'xAxis';
  return CartesianXAxisView;
}(CartesianAxisView);

var CartesianYAxisView = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(CartesianYAxisView, _super);
  function CartesianYAxisView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = CartesianXAxisView.type;
    return _this;
  }
  CartesianYAxisView.type = 'yAxis';
  return CartesianYAxisView;
}(CartesianAxisView);

/* ESM default export */ __webpack_exports__["default"] = (CartesianAxisView);

}),
93901: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56190);
/* ESM import */var _AxisBuilder_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60727);
/* ESM import */var _helper_BrushController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97684);
/* ESM import */var _helper_brushHelper_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15066);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27208);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42562);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(48670);
/* ESM import */var _view_Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64989);

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







var ParallelAxisView = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(ParallelAxisView, _super);
  function ParallelAxisView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = ParallelAxisView.type;
    return _this;
  }
  ParallelAxisView.prototype.init = function (ecModel, api) {
    _super.prototype.init.apply(this, arguments);
    (this._brushController = new _helper_BrushController_js__WEBPACK_IMPORTED_MODULE_2__["default"](api.getZr())).on('brush', zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.bind(this._onBrush, this));
  };
  ParallelAxisView.prototype.render = function (axisModel, ecModel, api, payload) {
    if (fromAxisAreaSelect(axisModel, ecModel, payload)) {
      return;
    }
    this.axisModel = axisModel;
    this.api = api;
    this.group.removeAll();
    var oldAxisGroup = this._axisGroup;
    this._axisGroup = new _util_graphic_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
    this.group.add(this._axisGroup);
    if (!axisModel.get('show')) {
      return;
    }
    var coordSysModel = getCoordSysModel(axisModel, ecModel);
    var coordSys = coordSysModel.coordinateSystem;
    var areaSelectStyle = axisModel.getAreaSelectStyle();
    var areaWidth = areaSelectStyle.width;
    var dim = axisModel.axis.dim;
    var axisLayout = coordSys.getAxisLayout(dim);
    var builderOpt = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.extend({
      strokeContainThreshold: areaWidth
    }, axisLayout);
    var axisBuilder = new _AxisBuilder_js__WEBPACK_IMPORTED_MODULE_5__["default"](axisModel, api, builderOpt);
    axisBuilder.build();
    this._axisGroup.add(axisBuilder.group);
    this._refreshBrushController(builderOpt, areaSelectStyle, axisModel, coordSysModel, areaWidth, api);
    _util_graphic_js__WEBPACK_IMPORTED_MODULE_6__.groupTransition(oldAxisGroup, this._axisGroup, axisModel);
  };
  // /**
  //  * @override
  //  */
  // updateVisual(axisModel, ecModel, api, payload) {
  //     this._brushController && this._brushController
  //         .updateCovers(getCoverInfoList(axisModel));
  // }
  ParallelAxisView.prototype._refreshBrushController = function (builderOpt, areaSelectStyle, axisModel, coordSysModel, areaWidth, api) {
    // After filtering, axis may change, select area needs to be update.
    var extent = axisModel.axis.getExtent();
    var extentLen = extent[1] - extent[0];
    var extra = Math.min(30, Math.abs(extentLen) * 0.1); // Arbitrary value.
    // width/height might be negative, which will be
    // normalized in BoundingRect.
    var rect = _util_graphic_js__WEBPACK_IMPORTED_MODULE_7__["default"].create({
      x: extent[0],
      y: -areaWidth / 2,
      width: extentLen,
      height: areaWidth
    });
    rect.x -= extra;
    rect.width += 2 * extra;
    this._brushController.mount({
      enableGlobalPan: true,
      rotation: builderOpt.rotation,
      x: builderOpt.position[0],
      y: builderOpt.position[1]
    }).setPanels([{
      panelId: 'pl',
      clipPath: _helper_brushHelper_js__WEBPACK_IMPORTED_MODULE_8__.makeRectPanelClipPath(rect),
      isTargetByCursor: _helper_brushHelper_js__WEBPACK_IMPORTED_MODULE_8__.makeRectIsTargetByCursor(rect, api, coordSysModel),
      getLinearBrushOtherExtent: _helper_brushHelper_js__WEBPACK_IMPORTED_MODULE_8__.makeLinearBrushOtherExtent(rect, 0)
    }]).enableBrush({
      brushType: 'lineX',
      brushStyle: areaSelectStyle,
      removeOnClick: true
    }).updateCovers(getCoverInfoList(axisModel));
  };
  ParallelAxisView.prototype._onBrush = function (eventParam) {
    var coverInfoList = eventParam.areas;
    // Do not cache these object, because the mey be changed.
    var axisModel = this.axisModel;
    var axis = axisModel.axis;
    var intervals = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.map(coverInfoList, function (coverInfo) {
      return [axis.coordToData(coverInfo.range[0], true), axis.coordToData(coverInfo.range[1], true)];
    });
    // If realtime is true, action is not dispatched on drag end, because
    // the drag end emits the same params with the last drag move event,
    // and may have some delay when using touch pad.
    if (!axisModel.option.realtime === eventParam.isEnd || eventParam.removeOnClick) {
      // jshint ignore:line
      this.api.dispatchAction({
        type: 'axisAreaSelect',
        parallelAxisId: axisModel.id,
        intervals: intervals
      });
    }
  };
  ParallelAxisView.prototype.dispose = function () {
    this._brushController.dispose();
  };
  ParallelAxisView.type = 'parallelAxis';
  return ParallelAxisView;
}(_view_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
function fromAxisAreaSelect(axisModel, ecModel, payload) {
  return payload && payload.type === 'axisAreaSelect' && ecModel.findComponents({
    mainType: 'parallelAxis',
    query: payload
  })[0] === axisModel;
}
function getCoverInfoList(axisModel) {
  var axis = axisModel.axis;
  return zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.map(axisModel.activeIntervals, function (interval) {
    return {
      brushType: 'lineX',
      panelId: 'pl',
      range: [axis.dataToCoord(interval[0], true), axis.dataToCoord(interval[1], true)]
    };
  });
}
function getCoordSysModel(axisModel, ecModel) {
  return ecModel.getComponent('parallel', axisModel.get('parallelIndex'));
}
/* ESM default export */ __webpack_exports__["default"] = (ParallelAxisView);

}),
80033: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56190);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27208);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42562);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13221);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80283);
/* ESM import */var _AxisBuilder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60727);
/* ESM import */var _AxisView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68463);

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





var selfBuilderAttrs = ['splitLine', 'splitArea', 'minorSplitLine'];
var RadiusAxisView = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(RadiusAxisView, _super);
  function RadiusAxisView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = RadiusAxisView.type;
    _this.axisPointerClass = 'PolarAxisPointer';
    return _this;
  }
  RadiusAxisView.prototype.render = function (radiusAxisModel, ecModel, api) {
    this.group.removeAll();
    if (!radiusAxisModel.get('show')) {
      return;
    }
    var oldAxisGroup = this._axisGroup;
    var newAxisGroup = this._axisGroup = new _util_graphic_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.group.add(newAxisGroup);
    var radiusAxis = radiusAxisModel.axis;
    var polar = radiusAxis.polar;
    var angleAxis = polar.getAngleAxis();
    var ticksCoords = radiusAxis.getTicksCoords();
    var minorTicksCoords = radiusAxis.getMinorTicksCoords();
    var axisAngle = angleAxis.getExtent()[0];
    var radiusExtent = radiusAxis.getExtent();
    var layout = layoutAxis(polar, radiusAxisModel, axisAngle);
    var axisBuilder = new _AxisBuilder_js__WEBPACK_IMPORTED_MODULE_3__["default"](radiusAxisModel, api, layout);
    axisBuilder.build();
    newAxisGroup.add(axisBuilder.group);
    _util_graphic_js__WEBPACK_IMPORTED_MODULE_4__.groupTransition(oldAxisGroup, newAxisGroup, radiusAxisModel);
    zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_5__.each(selfBuilderAttrs, function (name) {
      if (radiusAxisModel.get([name, 'show']) && !radiusAxis.scale.isBlank()) {
        axisElementBuilders[name](this.group, radiusAxisModel, polar, axisAngle, radiusExtent, ticksCoords, minorTicksCoords);
      }
    }, this);
  };
  RadiusAxisView.type = 'radiusAxis';
  return RadiusAxisView;
}(_AxisView_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
var axisElementBuilders = {
  splitLine: function (group, radiusAxisModel, polar, axisAngle, radiusExtent, ticksCoords) {
    var splitLineModel = radiusAxisModel.getModel('splitLine');
    var lineStyleModel = splitLineModel.getModel('lineStyle');
    var lineColors = lineStyleModel.get('color');
    var lineCount = 0;
    var angleAxis = polar.getAngleAxis();
    var RADIAN = Math.PI / 180;
    var angleExtent = angleAxis.getExtent();
    var shapeType = Math.abs(angleExtent[1] - angleExtent[0]) === 360 ? 'Circle' : 'Arc';
    lineColors = lineColors instanceof Array ? lineColors : [lineColors];
    var splitLines = [];
    for (var i = 0; i < ticksCoords.length; i++) {
      var colorIndex = lineCount++ % lineColors.length;
      splitLines[colorIndex] = splitLines[colorIndex] || [];
      splitLines[colorIndex].push(new _util_graphic_js__WEBPACK_IMPORTED_MODULE_4__[shapeType]({
        shape: {
          cx: polar.cx,
          cy: polar.cy,
          // ensure circle radius >= 0
          r: Math.max(ticksCoords[i].coord, 0),
          startAngle: -angleExtent[0] * RADIAN,
          endAngle: -angleExtent[1] * RADIAN,
          clockwise: angleAxis.inverse
        }
      }));
    }
    // Simple optimization
    // Batching the lines if color are the same
    for (var i = 0; i < splitLines.length; i++) {
      group.add(_util_graphic_js__WEBPACK_IMPORTED_MODULE_4__.mergePath(splitLines[i], {
        style: zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_5__.defaults({
          stroke: lineColors[i % lineColors.length],
          fill: null
        }, lineStyleModel.getLineStyle()),
        silent: true
      }));
    }
  },
  minorSplitLine: function (group, radiusAxisModel, polar, axisAngle, radiusExtent, ticksCoords, minorTicksCoords) {
    if (!minorTicksCoords.length) {
      return;
    }
    var minorSplitLineModel = radiusAxisModel.getModel('minorSplitLine');
    var lineStyleModel = minorSplitLineModel.getModel('lineStyle');
    var lines = [];
    for (var i = 0; i < minorTicksCoords.length; i++) {
      for (var k = 0; k < minorTicksCoords[i].length; k++) {
        lines.push(new _util_graphic_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
          shape: {
            cx: polar.cx,
            cy: polar.cy,
            r: minorTicksCoords[i][k].coord
          }
        }));
      }
    }
    group.add(_util_graphic_js__WEBPACK_IMPORTED_MODULE_4__.mergePath(lines, {
      style: zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_5__.defaults({
        fill: null
      }, lineStyleModel.getLineStyle()),
      silent: true
    }));
  },
  splitArea: function (group, radiusAxisModel, polar, axisAngle, radiusExtent, ticksCoords) {
    if (!ticksCoords.length) {
      return;
    }
    var splitAreaModel = radiusAxisModel.getModel('splitArea');
    var areaStyleModel = splitAreaModel.getModel('areaStyle');
    var areaColors = areaStyleModel.get('color');
    var lineCount = 0;
    areaColors = areaColors instanceof Array ? areaColors : [areaColors];
    var splitAreas = [];
    var prevRadius = ticksCoords[0].coord;
    for (var i = 1; i < ticksCoords.length; i++) {
      var colorIndex = lineCount++ % areaColors.length;
      splitAreas[colorIndex] = splitAreas[colorIndex] || [];
      splitAreas[colorIndex].push(new _util_graphic_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
        shape: {
          cx: polar.cx,
          cy: polar.cy,
          r0: prevRadius,
          r: ticksCoords[i].coord,
          startAngle: 0,
          endAngle: Math.PI * 2
        },
        silent: true
      }));
      prevRadius = ticksCoords[i].coord;
    }
    // Simple optimization
    // Batching the lines if color are the same
    for (var i = 0; i < splitAreas.length; i++) {
      group.add(_util_graphic_js__WEBPACK_IMPORTED_MODULE_4__.mergePath(splitAreas[i], {
        style: zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_5__.defaults({
          fill: areaColors[i % areaColors.length]
        }, areaStyleModel.getAreaStyle()),
        silent: true
      }));
    }
  }
};
/**
 * @inner
 */
function layoutAxis(polar, radiusAxisModel, axisAngle) {
  return {
    position: [polar.cx, polar.cy],
    rotation: axisAngle / 180 * Math.PI,
    labelDirection: -1,
    tickDirection: -1,
    nameDirection: 1,
    labelRotate: radiusAxisModel.getModel('axisLabel').get('rotate'),
    // Over splitLine and splitArea
    z2: 1
  };
}
/* ESM default export */ __webpack_exports__["default"] = (RadiusAxisView);

}),
85111: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56190);
/* ESM import */var _AxisBuilder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60727);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27208);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42562);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73978);
/* ESM import */var _coord_single_singleAxisHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4049);
/* ESM import */var _AxisView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68463);
/* ESM import */var _axisSplitHelper_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92363);
/* ESM import */var _axisBreakHelper_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(81230);

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








var selfBuilderAttrs = ['splitArea', 'splitLine', 'breakArea'];
var SingleAxisView = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(SingleAxisView, _super);
  function SingleAxisView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = SingleAxisView.type;
    _this.axisPointerClass = 'SingleAxisPointer';
    return _this;
  }
  SingleAxisView.prototype.render = function (axisModel, ecModel, api, payload) {
    var group = this.group;
    group.removeAll();
    var oldAxisGroup = this._axisGroup;
    this._axisGroup = new _util_graphic_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    var layout = _coord_single_singleAxisHelper_js__WEBPACK_IMPORTED_MODULE_3__.layout(axisModel);
    var axisBuilder = new _AxisBuilder_js__WEBPACK_IMPORTED_MODULE_4__["default"](axisModel, api, layout);
    axisBuilder.build();
    group.add(this._axisGroup);
    group.add(axisBuilder.group);
    zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_5__.each(selfBuilderAttrs, function (name) {
      if (axisModel.get([name, 'show'])) {
        axisElementBuilders[name](this, this.group, this._axisGroup, axisModel, api);
      }
    }, this);
    _util_graphic_js__WEBPACK_IMPORTED_MODULE_6__.groupTransition(oldAxisGroup, this._axisGroup, axisModel);
    _super.prototype.render.call(this, axisModel, ecModel, api, payload);
  };
  SingleAxisView.prototype.remove = function () {
    (0,_axisSplitHelper_js__WEBPACK_IMPORTED_MODULE_7__.rectCoordAxisHandleRemove)(this);
  };
  SingleAxisView.type = 'singleAxis';
  return SingleAxisView;
}(_AxisView_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
var axisElementBuilders = {
  splitLine: function (axisView, group, axisGroup, axisModel, api) {
    var axis = axisModel.axis;
    if (axis.scale.isBlank()) {
      return;
    }
    var splitLineModel = axisModel.getModel('splitLine');
    var lineStyleModel = splitLineModel.getModel('lineStyle');
    var lineColors = lineStyleModel.get('color');
    lineColors = lineColors instanceof Array ? lineColors : [lineColors];
    var lineWidth = lineStyleModel.get('width');
    var gridRect = axisModel.coordinateSystem.getRect();
    var isHorizontal = axis.isHorizontal();
    var splitLines = [];
    var lineCount = 0;
    var ticksCoords = axis.getTicksCoords({
      tickModel: splitLineModel,
      breakTicks: 'none',
      pruneByBreak: 'preserve_extent_bound'
    });
    var p1 = [];
    var p2 = [];
    for (var i = 0; i < ticksCoords.length; ++i) {
      var tickCoord = axis.toGlobalCoord(ticksCoords[i].coord);
      if (isHorizontal) {
        p1[0] = tickCoord;
        p1[1] = gridRect.y;
        p2[0] = tickCoord;
        p2[1] = gridRect.y + gridRect.height;
      } else {
        p1[0] = gridRect.x;
        p1[1] = tickCoord;
        p2[0] = gridRect.x + gridRect.width;
        p2[1] = tickCoord;
      }
      var line = new _util_graphic_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
        shape: {
          x1: p1[0],
          y1: p1[1],
          x2: p2[0],
          y2: p2[1]
        },
        silent: true
      });
      _util_graphic_js__WEBPACK_IMPORTED_MODULE_6__.subPixelOptimizeLine(line.shape, lineWidth);
      var colorIndex = lineCount++ % lineColors.length;
      splitLines[colorIndex] = splitLines[colorIndex] || [];
      splitLines[colorIndex].push(line);
    }
    var lineStyle = lineStyleModel.getLineStyle(['color']);
    for (var i = 0; i < splitLines.length; ++i) {
      group.add(_util_graphic_js__WEBPACK_IMPORTED_MODULE_6__.mergePath(splitLines[i], {
        style: zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_5__.defaults({
          stroke: lineColors[i % lineColors.length]
        }, lineStyle),
        silent: true
      }));
    }
  },
  splitArea: function (axisView, group, axisGroup, axisModel, api) {
    (0,_axisSplitHelper_js__WEBPACK_IMPORTED_MODULE_7__.rectCoordAxisBuildSplitArea)(axisView, axisGroup, axisModel, axisModel);
  },
  breakArea: function (axisView, group, axisGroup, axisModel, api) {
    var axisBreakHelper = (0,_axisBreakHelper_js__WEBPACK_IMPORTED_MODULE_9__.getAxisBreakHelper)();
    var scale = axisModel.axis.scale;
    if (axisBreakHelper && scale.type !== 'ordinal') {
      axisBreakHelper.rectCoordBuildBreakAxis(group, axisView, axisModel, axisModel.coordinateSystem.getRect(), api);
    }
  }
};
/* ESM default export */ __webpack_exports__["default"] = (SingleAxisView);

}),
80753: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AXIS_BREAK_COLLAPSE_ACTION_TYPE: function() { return AXIS_BREAK_COLLAPSE_ACTION_TYPE; },
  AXIS_BREAK_EXPAND_ACTION_TYPE: function() { return AXIS_BREAK_EXPAND_ACTION_TYPE; },
  AXIS_BREAK_TOGGLE_ACTION_TYPE: function() { return AXIS_BREAK_TOGGLE_ACTION_TYPE; },
  registerAction: function() { return registerAction; }
});
/* ESM import */var _util_model_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44244);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56190);

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


var AXIS_BREAK_EXPAND_ACTION_TYPE = 'expandAxisBreak';
var AXIS_BREAK_COLLAPSE_ACTION_TYPE = 'collapseAxisBreak';
var AXIS_BREAK_TOGGLE_ACTION_TYPE = 'toggleAxisBreak';
var AXIS_BREAK_CHANGED_EVENT_TYPE = 'axisbreakchanged';
var expandAxisBreakActionInfo = {
  type: AXIS_BREAK_EXPAND_ACTION_TYPE,
  event: AXIS_BREAK_CHANGED_EVENT_TYPE,
  update: 'update',
  refineEvent: refineAxisBreakChangeEvent
};
var collapseAxisBreakActionInfo = {
  type: AXIS_BREAK_COLLAPSE_ACTION_TYPE,
  event: AXIS_BREAK_CHANGED_EVENT_TYPE,
  update: 'update',
  refineEvent: refineAxisBreakChangeEvent
};
var toggleAxisBreakActionInfo = {
  type: AXIS_BREAK_TOGGLE_ACTION_TYPE,
  event: AXIS_BREAK_CHANGED_EVENT_TYPE,
  update: 'update',
  refineEvent: refineAxisBreakChangeEvent
};
function refineAxisBreakChangeEvent(actionResultBatch, payload, ecModel, api) {
  var breaks = [];
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each)(actionResultBatch, function (actionResult) {
    breaks = breaks.concat(actionResult.eventBreaks);
  });
  return {
    eventContent: {
      breaks: breaks
    }
  };
}
function registerAction(registers) {
  registers.registerAction(expandAxisBreakActionInfo, actionHandler);
  registers.registerAction(collapseAxisBreakActionInfo, actionHandler);
  registers.registerAction(toggleAxisBreakActionInfo, actionHandler);
  function actionHandler(payload, ecModel) {
    var eventBreaks = [];
    var finderResult = (0,_util_model_js__WEBPACK_IMPORTED_MODULE_1__.parseFinder)(ecModel, payload);
    function dealUpdate(modelProp, indexProp) {
      (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each)(finderResult[modelProp], function (axisModel) {
        var result = axisModel.updateAxisBreaks(payload);
        (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each)(result.breaks, function (item) {
          var _a;
          eventBreaks.push((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.defaults)((_a = {}, _a[indexProp] = axisModel.componentIndex, _a), item));
        });
      });
    }
    dealUpdate('xAxisModels', 'xAxisIndex');
    dealUpdate('yAxisModels', 'yAxisIndex');
    dealUpdate('singleAxisModels', 'singleAxisIndex');
    return {
      eventBreaks: eventBreaks
    };
  }
}

}),
81230: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getAxisBreakHelper: function() { return getAxisBreakHelper; },
  registerAxisBreakHelperImpl: function() { return registerAxisBreakHelperImpl; }
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
var _impl = null;
function registerAxisBreakHelperImpl(impl) {
  if (!_impl) {
    _impl = impl;
  }
}
function getAxisBreakHelper() {
  return _impl;
}

}),
92363: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  rectCoordAxisBuildSplitArea: function() { return rectCoordAxisBuildSplitArea; },
  rectCoordAxisHandleRemove: function() { return rectCoordAxisHandleRemove; }
});
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56190);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68903);
/* ESM import */var _util_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44244);

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
function rectCoordAxisBuildSplitArea(axisView, axisGroup, axisModel, gridModel) {
  var axis = axisModel.axis;
  if (axis.scale.isBlank()) {
    return;
  }
  // TODO: TYPE
  var splitAreaModel = axisModel.getModel('splitArea');
  var areaStyleModel = splitAreaModel.getModel('areaStyle');
  var areaColors = areaStyleModel.get('color');
  var gridRect = gridModel.coordinateSystem.getRect();
  var ticksCoords = axis.getTicksCoords({
    tickModel: splitAreaModel,
    clamp: true,
    breakTicks: 'none',
    pruneByBreak: 'preserve_extent_bound'
  });
  if (!ticksCoords.length) {
    return;
  }
  // For Making appropriate splitArea animation, the color and anid
  // should be corresponding to previous one if possible.
  var areaColorsLen = areaColors.length;
  var lastSplitAreaColors = inner(axisView).splitAreaColors;
  var newSplitAreaColors = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.createHashMap();
  var colorIndex = 0;
  if (lastSplitAreaColors) {
    for (var i = 0; i < ticksCoords.length; i++) {
      var cIndex = lastSplitAreaColors.get(ticksCoords[i].tickValue);
      if (cIndex != null) {
        colorIndex = (cIndex + (areaColorsLen - 1) * i) % areaColorsLen;
        break;
      }
    }
  }
  var prev = axis.toGlobalCoord(ticksCoords[0].coord);
  var areaStyle = areaStyleModel.getAreaStyle();
  areaColors = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isArray(areaColors) ? areaColors : [areaColors];
  for (var i = 1; i < ticksCoords.length; i++) {
    var tickCoord = axis.toGlobalCoord(ticksCoords[i].coord);
    var x = void 0;
    var y = void 0;
    var width = void 0;
    var height = void 0;
    if (axis.isHorizontal()) {
      x = prev;
      y = gridRect.y;
      width = tickCoord - x;
      height = gridRect.height;
      prev = x + width;
    } else {
      x = gridRect.x;
      y = prev;
      width = gridRect.width;
      height = tickCoord - y;
      prev = y + height;
    }
    var tickValue = ticksCoords[i - 1].tickValue;
    tickValue != null && newSplitAreaColors.set(tickValue, colorIndex);
    axisGroup.add(new _util_graphic_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
      anid: tickValue != null ? 'area_' + tickValue : null,
      shape: {
        x: x,
        y: y,
        width: width,
        height: height
      },
      style: zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.defaults({
        fill: areaColors[colorIndex]
      }, areaStyle),
      autoBatch: true,
      silent: true
    }));
    colorIndex = (colorIndex + 1) % areaColorsLen;
  }
  inner(axisView).splitAreaColors = newSplitAreaColors;
}
function rectCoordAxisHandleRemove(axisView) {
  inner(axisView).splitAreaColors = null;
}

}),
47869: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  installAxisBreak: function() { return /* binding */ installAxisBreak; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/scale/breakImpl.js
var breakImpl = __webpack_require__(42830);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/axisAction.js
var axisAction = __webpack_require__(80753);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js
var util_model = __webpack_require__(44244);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(56190);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/scale/break.js
var scale_break = __webpack_require__(57593);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/helper/subPixelOptimize.js
var subPixelOptimize = __webpack_require__(99302);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/vector.js
var vector = __webpack_require__(25680);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/matrix.js
var matrix = __webpack_require__(24694);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelLayoutHelper.js
var labelLayoutHelper = __webpack_require__(59044);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/axisBreakHelper.js
var axisBreakHelper = __webpack_require__(81230);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Group.js
var Group = __webpack_require__(27208);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js
var graphic = __webpack_require__(42562);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Polyline.js
var Polyline = __webpack_require__(27092);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Polygon.js
var Polygon = __webpack_require__(84951);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Line.js
var Line = __webpack_require__(73978);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/Point.js
var Point = __webpack_require__(98166);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/axisBreakHelperImpl.js

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
 * @caution
 *  Must not export anything except `installAxisBreakHelper`
 */
/**
 * The zigzag shapes for axis breaks are generated according to some random
 * factors. It should persist as much as possible to avoid constantly
 * changing by every user operation.
 */
var viewCache = (0,util_model.makeInner)();
function ensureVisualInCache(visualList, targetBreak) {
  var visual = (0,util.find)(visualList, function (item) {
    return (0,scale_break.getScaleBreakHelper)().identifyAxisBreak(item.parsedBreak.breakOption, targetBreak.breakOption);
  });
  if (!visual) {
    visualList.push(visual = {
      zigzagRandomList: [],
      parsedBreak: targetBreak,
      shouldRemove: false
    });
  }
  return visual;
}
function resetCacheVisualRemoveFlag(visualList) {
  (0,util.each)(visualList, function (item) {
    return item.shouldRemove = true;
  });
}
function removeUnusedCacheVisual(visualList) {
  for (var i = visualList.length - 1; i >= 0; i--) {
    if (visualList[i].shouldRemove) {
      visualList.splice(i, 1);
    }
  }
}
function rectCoordBuildBreakAxis(axisGroup, axisView, axisModel, coordSysRect, api) {
  var axis = axisModel.axis;
  if (axis.scale.isBlank() || !(0,scale_break.getScaleBreakHelper)()) {
    return;
  }
  var breakPairs = (0,scale_break.getScaleBreakHelper)().retrieveAxisBreakPairs(axis.scale.getTicks({
    breakTicks: 'only_break'
  }), function (tick) {
    return tick["break"];
  }, false);
  if (!breakPairs.length) {
    return;
  }
  var breakAreaModel = axisModel.getModel('breakArea');
  var zigzagAmplitude = breakAreaModel.get('zigzagAmplitude');
  var zigzagMinSpan = breakAreaModel.get('zigzagMinSpan');
  var zigzagMaxSpan = breakAreaModel.get('zigzagMaxSpan');
  // Use arbitrary value to avoid dead loop if user gives inappropriate settings.
  zigzagMinSpan = Math.max(2, zigzagMinSpan || 0);
  zigzagMaxSpan = Math.max(zigzagMinSpan, zigzagMaxSpan || 0);
  var expandOnClick = breakAreaModel.get('expandOnClick');
  var zigzagZ = breakAreaModel.get('zigzagZ');
  var itemStyleModel = breakAreaModel.getModel('itemStyle');
  var itemStyle = itemStyleModel.getItemStyle();
  var borderColor = itemStyle.stroke;
  var borderWidth = itemStyle.lineWidth;
  var borderType = itemStyle.lineDash;
  var color = itemStyle.fill;
  var group = new Group["default"]({
    ignoreModelZ: true
  });
  var isAxisHorizontal = axis.isHorizontal();
  var cachedVisualList = viewCache(axisView).visualList || (viewCache(axisView).visualList = []);
  resetCacheVisualRemoveFlag(cachedVisualList);
  var _loop_1 = function (i) {
    var parsedBreak = breakPairs[i][0]["break"].parsedBreak;
    // Even if brk.gap is 0, we should also draw the breakArea because
    // border is sometimes required to be visible (as a line)
    var coords = [];
    coords[0] = axis.toGlobalCoord(axis.dataToCoord(parsedBreak.vmin, true));
    coords[1] = axis.toGlobalCoord(axis.dataToCoord(parsedBreak.vmax, true));
    if (coords[1] < coords[0]) {
      coords.reverse();
    }
    var cachedVisual = ensureVisualInCache(cachedVisualList, parsedBreak);
    cachedVisual.shouldRemove = false;
    var breakGroup = new Group["default"]();
    addZigzagShapes(cachedVisual.zigzagRandomList, breakGroup, coords[0], coords[1], isAxisHorizontal, parsedBreak);
    if (expandOnClick) {
      breakGroup.on('click', function () {
        var payload = {
          type: axisAction.AXIS_BREAK_EXPAND_ACTION_TYPE,
          breaks: [{
            start: parsedBreak.breakOption.start,
            end: parsedBreak.breakOption.end
          }]
        };
        payload[axis.dim + "AxisIndex"] = axisModel.componentIndex;
        api.dispatchAction(payload);
      });
    }
    breakGroup.silent = !expandOnClick;
    group.add(breakGroup);
  };
  for (var i = 0; i < breakPairs.length; i++) {
    _loop_1(i);
  }
  axisGroup.add(group);
  removeUnusedCacheVisual(cachedVisualList);
  function addZigzagShapes(zigzagRandomList, breakGroup, startCoord, endCoord, isAxisHorizontal, trimmedBreak) {
    var polylineStyle = {
      stroke: borderColor,
      lineWidth: borderWidth,
      lineDash: borderType,
      fill: 'none'
    };
    var dimBrk = isAxisHorizontal ? 0 : 1;
    var dimZigzag = 1 - dimBrk;
    var zigzagCoordMax = coordSysRect[graphic.XY[dimZigzag]] + coordSysRect[graphic.WH[dimZigzag]];
    // Apply `subPixelOptimizeLine` for alignning with break ticks.
    function subPixelOpt(brkCoord) {
      var pBrk = [];
      var dummyP = [];
      pBrk[dimBrk] = dummyP[dimBrk] = brkCoord;
      pBrk[dimZigzag] = coordSysRect[graphic.XY[dimZigzag]];
      dummyP[dimZigzag] = zigzagCoordMax;
      var dummyShape = {
        x1: pBrk[0],
        y1: pBrk[1],
        x2: dummyP[0],
        y2: dummyP[1]
      };
      (0,subPixelOptimize.subPixelOptimizeLine)(dummyShape, dummyShape, {
        lineWidth: 1
      });
      pBrk[0] = dummyShape.x1;
      pBrk[1] = dummyShape.y1;
      return pBrk[dimBrk];
    }
    startCoord = subPixelOpt(startCoord);
    endCoord = subPixelOpt(endCoord);
    var pointsA = [];
    var pointsB = [];
    var isSwap = true;
    var current = coordSysRect[graphic.XY[dimZigzag]];
    for (var idx = 0;; idx++) {
      // Use `isFirstPoint` `isLastPoint` to ensure the intersections between zigzag
      // and axis are precise, thus it can join its axis tick correctly.
      var isFirstPoint = current === coordSysRect[graphic.XY[dimZigzag]];
      var isLastPoint = current >= zigzagCoordMax;
      if (isLastPoint) {
        current = zigzagCoordMax;
      }
      var pA = [];
      var pB = [];
      pA[dimBrk] = startCoord;
      pB[dimBrk] = endCoord;
      if (!isFirstPoint && !isLastPoint) {
        pA[dimBrk] += isSwap ? -zigzagAmplitude : zigzagAmplitude;
        pB[dimBrk] -= !isSwap ? -zigzagAmplitude : zigzagAmplitude;
      }
      pA[dimZigzag] = current;
      pB[dimZigzag] = current;
      pointsA.push(pA);
      pointsB.push(pB);
      var randomVal = void 0;
      if (idx < zigzagRandomList.length) {
        randomVal = zigzagRandomList[idx];
      } else {
        randomVal = Math.random();
        zigzagRandomList.push(randomVal);
      }
      current += randomVal * (zigzagMaxSpan - zigzagMinSpan) + zigzagMinSpan;
      isSwap = !isSwap;
      if (isLastPoint) {
        break;
      }
    }
    var anidSuffix = (0,scale_break.getScaleBreakHelper)().serializeAxisBreakIdentifier(trimmedBreak.breakOption);
    // Create two polylines and add them to the breakGroup
    breakGroup.add(new Polyline["default"]({
      anid: "break_a_" + anidSuffix,
      shape: {
        points: pointsA
      },
      style: polylineStyle,
      z: zigzagZ
    }));
    /* Add the second polyline and a polygon only if the gap is not zero
     * Otherwise if the polyline is with dashed line or being opaque,
     * it may not be constant with breaks with non-zero gaps. */
    if (trimmedBreak.gapReal !== 0) {
      breakGroup.add(new Polyline["default"]({
        anid: "break_b_" + anidSuffix,
        shape: {
          // Not reverse to keep the dash stable when dragging resizing.
          points: pointsB
        },
        style: polylineStyle,
        z: zigzagZ
      }));
      // Creating the polygon that fills the area between the polylines
      // From end to start for polygon.
      var pointsB2 = pointsB.slice();
      pointsB2.reverse();
      var polygonPoints = pointsA.concat(pointsB2);
      breakGroup.add(new Polygon["default"]({
        anid: "break_c_" + anidSuffix,
        shape: {
          points: polygonPoints
        },
        style: {
          fill: color,
          opacity: itemStyle.opacity
        },
        z: zigzagZ
      }));
    }
  }
}
function buildAxisBreakLine(axisModel, group, transformGroup, pathBaseProp) {
  var axis = axisModel.axis;
  var transform = transformGroup.transform;
  (0,util.assert)(pathBaseProp.style);
  var extent = axis.getExtent();
  if (axis.inverse) {
    extent = extent.slice();
    extent.reverse();
  }
  var breakPairs = (0,scale_break.getScaleBreakHelper)().retrieveAxisBreakPairs(axis.scale.getTicks({
    breakTicks: 'only_break'
  }), function (tick) {
    return tick["break"];
  }, false);
  var brkLayoutList = (0,util.map)(breakPairs, function (breakPair) {
    var parsedBreak = breakPair[0]["break"].parsedBreak;
    var coordPair = [axis.dataToCoord(parsedBreak.vmin, true), axis.dataToCoord(parsedBreak.vmax, true)];
    coordPair[0] > coordPair[1] && coordPair.reverse();
    return {
      coordPair: coordPair,
      brkId: (0,scale_break.getScaleBreakHelper)().serializeAxisBreakIdentifier(parsedBreak.breakOption)
    };
  });
  brkLayoutList.sort(function (layout1, layout2) {
    return layout1.coordPair[0] - layout2.coordPair[0];
  });
  var ySegMin = extent[0];
  var lastLayout = null;
  for (var idx = 0; idx < brkLayoutList.length; idx++) {
    var layout = brkLayoutList[idx];
    var brkTirmmedMin = Math.max(layout.coordPair[0], extent[0]);
    var brkTirmmedMax = Math.min(layout.coordPair[1], extent[1]);
    if (ySegMin <= brkTirmmedMin) {
      addSeg(ySegMin, brkTirmmedMin, lastLayout, layout);
    }
    ySegMin = brkTirmmedMax;
    lastLayout = layout;
  }
  if (ySegMin <= extent[1]) {
    addSeg(ySegMin, extent[1], lastLayout, null);
  }
  function addSeg(min, max, layout1, layout2) {
    function trans(p1, p2) {
      if (transform) {
        (0,vector.applyTransform)(p1, p1, transform);
        (0,vector.applyTransform)(p2, p2, transform);
      }
    }
    function subPixelOptimizePP(p1, p2) {
      var shape = {
        x1: p1[0],
        y1: p1[1],
        x2: p2[0],
        y2: p2[1]
      };
      (0,subPixelOptimize.subPixelOptimizeLine)(shape, shape, pathBaseProp.style);
      p1[0] = shape.x1;
      p1[1] = shape.y1;
      p2[0] = shape.x2;
      p2[1] = shape.y2;
    }
    var lineP1 = [min, 0];
    var lineP2 = [max, 0];
    // dummy tick is used to align the line segment ends with axis ticks
    // after `subPixelOptimizeLine` being applied.
    var dummyTickEnd1 = [min, 5];
    var dummyTickEnd2 = [max, 5];
    trans(lineP1, dummyTickEnd1);
    subPixelOptimizePP(lineP1, dummyTickEnd1);
    trans(lineP2, dummyTickEnd2);
    subPixelOptimizePP(lineP2, dummyTickEnd2);
    // Apply it keeping the same as the normal axis line.
    subPixelOptimizePP(lineP1, lineP2);
    var seg = new Line["default"]((0,util.extend)({
      shape: {
        x1: lineP1[0],
        y1: lineP1[1],
        x2: lineP2[0],
        y2: lineP2[1]
      }
    }, pathBaseProp));
    group.add(seg);
    // Animation should be precise to be consistent with tick and split line animation.
    seg.anid = "breakLine_" + (layout1 ? layout1.brkId : '\0') + "_\0_" + (layout2 ? layout2.brkId : '\0');
  }
}
/**
 * Resolve the overlap of a pair of labels.
 *
 * [CAUTION] Only label.x/y are allowed to change.
 */
function adjustBreakLabelPair(axisInverse, axisRotation, layoutPair) {
  if ((0,util.find)(layoutPair, function (item) {
    return !item;
  })) {
    return;
  }
  var mtv = new Point["default"]();
  if (!(0,labelLayoutHelper.labelIntersect)(layoutPair[0], layoutPair[1], mtv, {
    // Assert `labelPair` is `[break_min, break_max]`.
    // `axis.inverse: true` means a smaller scale value corresponds to a bigger value in axis.extent.
    // The axisRotation indicates mtv direction of OBB intersecting.
    direction: -(axisInverse ? axisRotation + Math.PI : axisRotation),
    touchThreshold: 0,
    // If need to resovle intersection align axis by moving labels according to MTV,
    // the direction must not be opposite, otherwise cause misleading.
    bidirectional: false
  })) {
    return;
  }
  // Rotate axis back to (1, 0) direction, to be a standard axis.
  var axisStTrans = matrix.create();
  matrix.rotate(axisStTrans, axisStTrans, -axisRotation);
  var labelPairStTrans = (0,util.map)(layoutPair, function (layout) {
    return layout.transform ? matrix.mul(matrix.create(), axisStTrans, layout.transform) : axisStTrans;
  });
  function isParallelToAxis(whIdx) {
    // Assert label[0] and label[1] has the same rotation, so only use [0].
    var localRect = layoutPair[0].localRect;
    var labelVec0 = new Point["default"](localRect[graphic.WH[whIdx]] * labelPairStTrans[0][0], localRect[graphic.WH[whIdx]] * labelPairStTrans[0][1]);
    return Math.abs(labelVec0.y) < 1e-5;
  }
  // If overlapping, move pair[0] pair[1] apart a little. We need to calculate a ratio k to
  // distribute mtv to pair[0] and pair[1]. This is to place the text gap as close as possible
  // to the center of the break ticks, otherwise it might looks weird or misleading.
  // - When labels' width/height are not parallel to axis (usually by rotation),
  //  we can simply treat the k as `0.5`.
  var k = 0.5;
  // - When labels' width/height are parallel to axis, the width/height need to be considered,
  //  since they may differ significantly. In this case we keep textAlign as 'center' rather
  //  than 'left'/'right', due to considerations of space utilization for wide break.gap.
  //  A sample case: break on xAxis(no inverse) is [200, 300000].
  //  We calculate k based on the formula below:
  //      Rotated axis and labels to the direction of (1, 0).
  //      uval = ( (pair[0].insidePt - mtv*k) + (pair[1].insidePt + mtv*(1-k)) ) / 2 - brkCenter
  //      0 <= k <= 1
  //      |uval| should be as small as possible.
  //  Derived as follows:
  //      qval = (pair[0].insidePt + pair[1].insidePt + mtv) / 2 - brkCenter
  //      k = (qval - uval) / mtv
  //      min(qval, qval-mtv) <= uval <= max(qval, qval-mtv)
  if (isParallelToAxis(0) || isParallelToAxis(1)) {
    var rectSt = (0,util.map)(layoutPair, function (layout, idx) {
      var rect = layout.localRect.clone();
      rect.applyTransform(labelPairStTrans[idx]);
      return rect;
    });
    var brkCenterSt = new Point["default"]();
    brkCenterSt.copy(layoutPair[0].label).add(layoutPair[1].label).scale(0.5);
    brkCenterSt.transform(axisStTrans);
    var mtvSt = mtv.clone().transform(axisStTrans);
    var insidePtSum = rectSt[0].x + rectSt[1].x + (mtvSt.x >= 0 ? rectSt[0].width : rectSt[1].width);
    var qval = (insidePtSum + mtvSt.x) / 2 - brkCenterSt.x;
    var uvalMin = Math.min(qval, qval - mtvSt.x);
    var uvalMax = Math.max(qval, qval - mtvSt.x);
    var uval = uvalMax < 0 ? uvalMax : uvalMin > 0 ? uvalMin : 0;
    k = (qval - uval) / mtvSt.x;
  }
  var delta0 = new Point["default"]();
  var delta1 = new Point["default"]();
  Point["default"].scale(delta0, mtv, -k);
  Point["default"].scale(delta1, mtv, 1 - k);
  (0,labelLayoutHelper.labelLayoutApplyTranslation)(layoutPair[0], delta0);
  (0,labelLayoutHelper.labelLayoutApplyTranslation)(layoutPair[1], delta1);
}
function updateModelAxisBreak(model, payload) {
  var result = {
    breaks: []
  };
  (0,util.each)(payload.breaks, function (inputBrk) {
    if (!inputBrk) {
      return;
    }
    var breakOption = (0,util.find)(model.get('breaks', true), function (brkOption) {
      return (0,scale_break.getScaleBreakHelper)().identifyAxisBreak(brkOption, inputBrk);
    });
    if (!breakOption) {
      if (false) {}
      return;
    }
    var actionType = payload.type;
    var old = {
      isExpanded: !!breakOption.isExpanded
    };
    breakOption.isExpanded = actionType === axisAction.AXIS_BREAK_EXPAND_ACTION_TYPE ? true : actionType === axisAction.AXIS_BREAK_COLLAPSE_ACTION_TYPE ? false : actionType === axisAction.AXIS_BREAK_TOGGLE_ACTION_TYPE ? !breakOption.isExpanded : breakOption.isExpanded;
    result.breaks.push({
      start: breakOption.start,
      end: breakOption.end,
      isExpanded: !!breakOption.isExpanded,
      old: old
    });
  });
  return result;
}
function installAxisBreakHelper() {
  (0,axisBreakHelper.registerAxisBreakHelperImpl)({
    adjustBreakLabelPair: adjustBreakLabelPair,
    buildAxisBreakLine: buildAxisBreakLine,
    rectCoordBuildBreakAxis: rectCoordBuildBreakAxis,
    updateModelAxisBreak: updateModelAxisBreak
  });
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/installBreak.js

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



function installAxisBreak(registers) {
  (0,axisAction.registerAction)(registers);
  (0,breakImpl.installScaleBreakHelper)();
  installAxisBreakHelper();
}

}),
26778: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  installParallelActions: function() { return installParallelActions; }
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
var actionInfo = {
  type: 'axisAreaSelect',
  event: 'axisAreaSelected'
  // update: 'updateVisual'
};
function installParallelActions(registers) {
  registers.registerAction(actionInfo, function (payload, ecModel) {
    ecModel.eachComponent({
      mainType: 'parallelAxis',
      query: payload
    }, function (parallelAxisModel) {
      parallelAxisModel.axis.model.setActiveIntervals(payload.intervals);
    });
  });
  /**
   * @payload
   */
  registers.registerAction('parallelAxisExpand', function (payload, ecModel) {
    ecModel.eachComponent({
      mainType: 'parallel',
      query: payload
    }, function (parallelModel) {
      parallelModel.setAxisExpand(payload);
    });
  });
}

}),
704: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56190);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27208);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42562);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98856);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7309);
/* ESM import */var _modelHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66874);
/* ESM import */var zrender_lib_core_event_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85908);
/* ESM import */var _util_throttle_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26069);
/* ESM import */var _util_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44244);

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
var clone = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.clone;
var bind = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.bind;
/**
 * Base axis pointer class in 2D.
 */
var BaseAxisPointer = /** @class */function () {
  function BaseAxisPointer() {
    this._dragging = false;
    /**
     * In px, arbitrary value. Do not set too small,
     * no animation is ok for most cases.
     */
    this.animationThreshold = 15;
  }
  /**
   * @implement
   */
  BaseAxisPointer.prototype.render = function (axisModel, axisPointerModel, api, forceRender) {
    var value = axisPointerModel.get('value');
    var status = axisPointerModel.get('status');
    // Bind them to `this`, not in closure, otherwise they will not
    // be replaced when user calling setOption in not merge mode.
    this._axisModel = axisModel;
    this._axisPointerModel = axisPointerModel;
    this._api = api;
    // Optimize: `render` will be called repeatedly during mouse move.
    // So it is power consuming if performing `render` each time,
    // especially on mobile device.
    if (!forceRender && this._lastValue === value && this._lastStatus === status) {
      return;
    }
    this._lastValue = value;
    this._lastStatus = status;
    var group = this._group;
    var handle = this._handle;
    if (!status || status === 'hide') {
      // Do not clear here, for animation better.
      group && group.hide();
      handle && handle.hide();
      return;
    }
    group && group.show();
    handle && handle.show();
    // Otherwise status is 'show'
    var elOption = {};
    this.makeElOption(elOption, value, axisModel, axisPointerModel, api);
    // Enable change axis pointer type.
    var graphicKey = elOption.graphicKey;
    if (graphicKey !== this._lastGraphicKey) {
      this.clear(api);
    }
    this._lastGraphicKey = graphicKey;
    var moveAnimation = this._moveAnimation = this.determineAnimation(axisModel, axisPointerModel);
    if (!group) {
      group = this._group = new _util_graphic_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
      this.createPointerEl(group, elOption, axisModel, axisPointerModel);
      this.createLabelEl(group, elOption, axisModel, axisPointerModel);
      api.getZr().add(group);
    } else {
      var doUpdateProps = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.curry(updateProps, axisPointerModel, moveAnimation);
      this.updatePointerEl(group, elOption, doUpdateProps);
      this.updateLabelEl(group, elOption, doUpdateProps, axisPointerModel);
    }
    updateMandatoryProps(group, axisPointerModel, true);
    this._renderHandle(value);
  };
  /**
   * @implement
   */
  BaseAxisPointer.prototype.remove = function (api) {
    this.clear(api);
  };
  /**
   * @implement
   */
  BaseAxisPointer.prototype.dispose = function (api) {
    this.clear(api);
  };
  /**
   * @protected
   */
  BaseAxisPointer.prototype.determineAnimation = function (axisModel, axisPointerModel) {
    var animation = axisPointerModel.get('animation');
    var axis = axisModel.axis;
    var isCategoryAxis = axis.type === 'category';
    var useSnap = axisPointerModel.get('snap');
    // Value axis without snap always do not snap.
    if (!useSnap && !isCategoryAxis) {
      return false;
    }
    if (animation === 'auto' || animation == null) {
      var animationThreshold = this.animationThreshold;
      if (isCategoryAxis && axis.getBandWidth() > animationThreshold) {
        return true;
      }
      // It is important to auto animation when snap used. Consider if there is
      // a dataZoom, animation will be disabled when too many points exist, while
      // it will be enabled for better visual effect when little points exist.
      if (useSnap) {
        var seriesDataCount = _modelHelper_js__WEBPACK_IMPORTED_MODULE_3__.getAxisInfo(axisModel).seriesDataCount;
        var axisExtent = axis.getExtent();
        // Approximate band width
        return Math.abs(axisExtent[0] - axisExtent[1]) / seriesDataCount > animationThreshold;
      }
      return false;
    }
    return animation === true;
  };
  /**
   * add {pointer, label, graphicKey} to elOption
   * @protected
   */
  BaseAxisPointer.prototype.makeElOption = function (elOption, value, axisModel, axisPointerModel, api) {
    // Should be implemenented by sub-class.
  };
  /**
   * @protected
   */
  BaseAxisPointer.prototype.createPointerEl = function (group, elOption, axisModel, axisPointerModel) {
    var pointerOption = elOption.pointer;
    if (pointerOption) {
      var pointerEl = inner(group).pointerEl = new _util_graphic_js__WEBPACK_IMPORTED_MODULE_4__[pointerOption.type](clone(elOption.pointer));
      group.add(pointerEl);
    }
  };
  /**
   * @protected
   */
  BaseAxisPointer.prototype.createLabelEl = function (group, elOption, axisModel, axisPointerModel) {
    if (elOption.label) {
      var labelEl = inner(group).labelEl = new _util_graphic_js__WEBPACK_IMPORTED_MODULE_5__["default"](clone(elOption.label));
      group.add(labelEl);
      updateLabelShowHide(labelEl, axisPointerModel);
    }
  };
  /**
   * @protected
   */
  BaseAxisPointer.prototype.updatePointerEl = function (group, elOption, updateProps) {
    var pointerEl = inner(group).pointerEl;
    if (pointerEl && elOption.pointer) {
      pointerEl.setStyle(elOption.pointer.style);
      updateProps(pointerEl, {
        shape: elOption.pointer.shape
      });
    }
  };
  /**
   * @protected
   */
  BaseAxisPointer.prototype.updateLabelEl = function (group, elOption, updateProps, axisPointerModel) {
    var labelEl = inner(group).labelEl;
    if (labelEl) {
      labelEl.setStyle(elOption.label.style);
      updateProps(labelEl, {
        // Consider text length change in vertical axis, animation should
        // be used on shape, otherwise the effect will be weird.
        // TODOTODO
        // shape: elOption.label.shape,
        x: elOption.label.x,
        y: elOption.label.y
      });
      updateLabelShowHide(labelEl, axisPointerModel);
    }
  };
  /**
   * @private
   */
  BaseAxisPointer.prototype._renderHandle = function (value) {
    if (this._dragging || !this.updateHandleTransform) {
      return;
    }
    var axisPointerModel = this._axisPointerModel;
    var zr = this._api.getZr();
    var handle = this._handle;
    var handleModel = axisPointerModel.getModel('handle');
    var status = axisPointerModel.get('status');
    if (!handleModel.get('show') || !status || status === 'hide') {
      handle && zr.remove(handle);
      this._handle = null;
      return;
    }
    var isInit;
    if (!this._handle) {
      isInit = true;
      handle = this._handle = _util_graphic_js__WEBPACK_IMPORTED_MODULE_4__.createIcon(handleModel.get('icon'), {
        cursor: 'move',
        draggable: true,
        onmousemove: function (e) {
          // For mobile device, prevent screen slider on the button.
          zrender_lib_core_event_js__WEBPACK_IMPORTED_MODULE_6__.stop(e.event);
        },
        onmousedown: bind(this._onHandleDragMove, this, 0, 0),
        drift: bind(this._onHandleDragMove, this),
        ondragend: bind(this._onHandleDragEnd, this)
      });
      zr.add(handle);
    }
    updateMandatoryProps(handle, axisPointerModel, false);
    // update style
    handle.setStyle(handleModel.getItemStyle(null, ['color', 'borderColor', 'borderWidth', 'opacity', 'shadowColor', 'shadowBlur', 'shadowOffsetX', 'shadowOffsetY']));
    // update position
    var handleSize = handleModel.get('size');
    if (!zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isArray(handleSize)) {
      handleSize = [handleSize, handleSize];
    }
    handle.scaleX = handleSize[0] / 2;
    handle.scaleY = handleSize[1] / 2;
    _util_throttle_js__WEBPACK_IMPORTED_MODULE_7__.createOrUpdate(this, '_doDispatchAxisPointer', handleModel.get('throttle') || 0, 'fixRate');
    this._moveHandleToValue(value, isInit);
  };
  BaseAxisPointer.prototype._moveHandleToValue = function (value, isInit) {
    updateProps(this._axisPointerModel, !isInit && this._moveAnimation, this._handle, getHandleTransProps(this.getHandleTransform(value, this._axisModel, this._axisPointerModel)));
  };
  BaseAxisPointer.prototype._onHandleDragMove = function (dx, dy) {
    var handle = this._handle;
    if (!handle) {
      return;
    }
    this._dragging = true;
    // Persistent for throttle.
    var trans = this.updateHandleTransform(getHandleTransProps(handle), [dx, dy], this._axisModel, this._axisPointerModel);
    this._payloadInfo = trans;
    handle.stopAnimation();
    handle.attr(getHandleTransProps(trans));
    inner(handle).lastProp = null;
    this._doDispatchAxisPointer();
  };
  /**
   * Throttled method.
   */
  BaseAxisPointer.prototype._doDispatchAxisPointer = function () {
    var handle = this._handle;
    if (!handle) {
      return;
    }
    var payloadInfo = this._payloadInfo;
    var axisModel = this._axisModel;
    this._api.dispatchAction({
      type: 'updateAxisPointer',
      x: payloadInfo.cursorPoint[0],
      y: payloadInfo.cursorPoint[1],
      tooltipOption: payloadInfo.tooltipOption,
      axesInfo: [{
        axisDim: axisModel.axis.dim,
        axisIndex: axisModel.componentIndex
      }]
    });
  };
  BaseAxisPointer.prototype._onHandleDragEnd = function () {
    this._dragging = false;
    var handle = this._handle;
    if (!handle) {
      return;
    }
    var value = this._axisPointerModel.get('value');
    // Consider snap or categroy axis, handle may be not consistent with
    // axisPointer. So move handle to align the exact value position when
    // drag ended.
    this._moveHandleToValue(value);
    // For the effect: tooltip will be shown when finger holding on handle
    // button, and will be hidden after finger left handle button.
    this._api.dispatchAction({
      type: 'hideTip'
    });
  };
  /**
   * @private
   */
  BaseAxisPointer.prototype.clear = function (api) {
    this._lastValue = null;
    this._lastStatus = null;
    var zr = api.getZr();
    var group = this._group;
    var handle = this._handle;
    if (zr && group) {
      this._lastGraphicKey = null;
      group && zr.remove(group);
      handle && zr.remove(handle);
      this._group = null;
      this._handle = null;
      this._payloadInfo = null;
    }
    _util_throttle_js__WEBPACK_IMPORTED_MODULE_7__.clear(this, '_doDispatchAxisPointer');
  };
  /**
   * @protected
   */
  BaseAxisPointer.prototype.doClear = function () {
    // Implemented by sub-class if necessary.
  };
  BaseAxisPointer.prototype.buildLabel = function (xy, wh, xDimIndex) {
    xDimIndex = xDimIndex || 0;
    return {
      x: xy[xDimIndex],
      y: xy[1 - xDimIndex],
      width: wh[xDimIndex],
      height: wh[1 - xDimIndex]
    };
  };
  return BaseAxisPointer;
}();
function updateProps(animationModel, moveAnimation, el, props) {
  // Animation optimize.
  if (!propsEqual(inner(el).lastProp, props)) {
    inner(el).lastProp = props;
    moveAnimation ? _util_graphic_js__WEBPACK_IMPORTED_MODULE_8__.updateProps(el, props, animationModel) : (el.stopAnimation(), el.attr(props));
  }
}
function propsEqual(lastProps, newProps) {
  if (zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isObject(lastProps) && zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isObject(newProps)) {
    var equals_1 = true;
    zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.each(newProps, function (item, key) {
      equals_1 = equals_1 && propsEqual(lastProps[key], item);
    });
    return !!equals_1;
  } else {
    return lastProps === newProps;
  }
}
function updateLabelShowHide(labelEl, axisPointerModel) {
  labelEl[axisPointerModel.get(['label', 'show']) ? 'show' : 'hide']();
}
function getHandleTransProps(trans) {
  return {
    x: trans.x || 0,
    y: trans.y || 0,
    rotation: trans.rotation || 0
  };
}
function updateMandatoryProps(group, axisPointerModel, silent) {
  var z = axisPointerModel.get('z');
  var zlevel = axisPointerModel.get('zlevel');
  group && group.traverse(function (el) {
    if (el.type !== 'group') {
      z != null && (el.z = z);
      zlevel != null && (el.zlevel = zlevel);
      el.silent = silent;
    }
  });
}
/* ESM default export */ __webpack_exports__["default"] = (BaseAxisPointer);

}),
10077: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var _BaseAxisPointer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(704);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42562);
/* ESM import */var _viewHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8814);
/* ESM import */var zrender_lib_core_matrix_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24694);
/* ESM import */var _axis_AxisBuilder_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60727);

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






var PolarAxisPointer = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(PolarAxisPointer, _super);
  function PolarAxisPointer() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  /**
   * @override
   */
  PolarAxisPointer.prototype.makeElOption = function (elOption, value, axisModel, axisPointerModel, api) {
    var axis = axisModel.axis;
    if (axis.dim === 'angle') {
      this.animationThreshold = Math.PI / 18;
    }
    var polar = axis.polar;
    var otherAxis = polar.getOtherAxis(axis);
    var otherExtent = otherAxis.getExtent();
    var coordValue = axis.dataToCoord(value);
    var axisPointerType = axisPointerModel.get('type');
    if (axisPointerType && axisPointerType !== 'none') {
      var elStyle = _viewHelper_js__WEBPACK_IMPORTED_MODULE_2__.buildElStyle(axisPointerModel);
      var pointerOption = pointerShapeBuilder[axisPointerType](axis, polar, coordValue, otherExtent);
      pointerOption.style = elStyle;
      elOption.graphicKey = pointerOption.type;
      elOption.pointer = pointerOption;
    }
    var labelMargin = axisPointerModel.get(['label', 'margin']);
    var labelPos = getLabelPosition(value, axisModel, axisPointerModel, polar, labelMargin);
    _viewHelper_js__WEBPACK_IMPORTED_MODULE_2__.buildLabelElOption(elOption, axisModel, axisPointerModel, api, labelPos);
  };
  return PolarAxisPointer;
}(_BaseAxisPointer_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
;
function getLabelPosition(value, axisModel, axisPointerModel, polar, labelMargin) {
  var axis = axisModel.axis;
  var coord = axis.dataToCoord(value);
  var axisAngle = polar.getAngleAxis().getExtent()[0];
  axisAngle = axisAngle / 180 * Math.PI;
  var radiusExtent = polar.getRadiusAxis().getExtent();
  var position;
  var align;
  var verticalAlign;
  if (axis.dim === 'radius') {
    var transform = zrender_lib_core_matrix_js__WEBPACK_IMPORTED_MODULE_3__.create();
    zrender_lib_core_matrix_js__WEBPACK_IMPORTED_MODULE_3__.rotate(transform, transform, axisAngle);
    zrender_lib_core_matrix_js__WEBPACK_IMPORTED_MODULE_3__.translate(transform, transform, [polar.cx, polar.cy]);
    position = _util_graphic_js__WEBPACK_IMPORTED_MODULE_4__.applyTransform([coord, -labelMargin], transform);
    var labelRotation = axisModel.getModel('axisLabel').get('rotate') || 0;
    // @ts-ignore
    var labelLayout = _axis_AxisBuilder_js__WEBPACK_IMPORTED_MODULE_5__["default"].innerTextLayout(axisAngle, labelRotation * Math.PI / 180, -1);
    align = labelLayout.textAlign;
    verticalAlign = labelLayout.textVerticalAlign;
  } else {
    // angle axis
    var r = radiusExtent[1];
    position = polar.coordToPoint([r + labelMargin, coord]);
    var cx = polar.cx;
    var cy = polar.cy;
    align = Math.abs(position[0] - cx) / r < 0.3 ? 'center' : position[0] > cx ? 'left' : 'right';
    verticalAlign = Math.abs(position[1] - cy) / r < 0.3 ? 'middle' : position[1] > cy ? 'top' : 'bottom';
  }
  return {
    position: position,
    align: align,
    verticalAlign: verticalAlign
  };
}
var pointerShapeBuilder = {
  line: function (axis, polar, coordValue, otherExtent) {
    return axis.dim === 'angle' ? {
      type: 'Line',
      shape: _viewHelper_js__WEBPACK_IMPORTED_MODULE_2__.makeLineShape(polar.coordToPoint([otherExtent[0], coordValue]), polar.coordToPoint([otherExtent[1], coordValue]))
    } : {
      type: 'Circle',
      shape: {
        cx: polar.cx,
        cy: polar.cy,
        r: coordValue
      }
    };
  },
  shadow: function (axis, polar, coordValue, otherExtent) {
    var bandWidth = Math.max(1, axis.getBandWidth());
    var radian = Math.PI / 180;
    return axis.dim === 'angle' ? {
      type: 'Sector',
      shape: _viewHelper_js__WEBPACK_IMPORTED_MODULE_2__.makeSectorShape(polar.cx, polar.cy, otherExtent[0], otherExtent[1],
      // In ECharts y is negative if angle is positive
      (-coordValue - bandWidth / 2) * radian, (-coordValue + bandWidth / 2) * radian)
    } : {
      type: 'Sector',
      shape: _viewHelper_js__WEBPACK_IMPORTED_MODULE_2__.makeSectorShape(polar.cx, polar.cy, coordValue - bandWidth / 2, coordValue + bandWidth / 2, 0, Math.PI * 2)
    };
  }
};
/* ESM default export */ __webpack_exports__["default"] = (PolarAxisPointer);

}),
83089: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var _BaseAxisPointer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(704);
/* ESM import */var _viewHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8814);
/* ESM import */var _coord_single_singleAxisHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4049);

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




var XY = ['x', 'y'];
var WH = ['width', 'height'];
var SingleAxisPointer = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(SingleAxisPointer, _super);
  function SingleAxisPointer() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  /**
   * @override
   */
  SingleAxisPointer.prototype.makeElOption = function (elOption, value, axisModel, axisPointerModel, api) {
    var axis = axisModel.axis;
    var coordSys = axis.coordinateSystem;
    var otherExtent = getGlobalExtent(coordSys, 1 - getPointDimIndex(axis));
    var pixelValue = coordSys.dataToPoint(value)[0];
    var axisPointerType = axisPointerModel.get('type');
    if (axisPointerType && axisPointerType !== 'none') {
      var elStyle = _viewHelper_js__WEBPACK_IMPORTED_MODULE_2__.buildElStyle(axisPointerModel);
      var pointerOption = pointerShapeBuilder[axisPointerType](axis, pixelValue, otherExtent);
      pointerOption.style = elStyle;
      elOption.graphicKey = pointerOption.type;
      elOption.pointer = pointerOption;
    }
    var layoutInfo = _coord_single_singleAxisHelper_js__WEBPACK_IMPORTED_MODULE_3__.layout(axisModel);
    _viewHelper_js__WEBPACK_IMPORTED_MODULE_2__.buildCartesianSingleLabelElOption(value, elOption, layoutInfo, axisModel, axisPointerModel, api);
  };
  /**
   * @override
   */
  SingleAxisPointer.prototype.getHandleTransform = function (value, axisModel, axisPointerModel) {
    var layoutInfo = _coord_single_singleAxisHelper_js__WEBPACK_IMPORTED_MODULE_3__.layout(axisModel, {
      labelInside: false
    });
    layoutInfo.labelMargin = axisPointerModel.get(['handle', 'margin']);
    var position = _viewHelper_js__WEBPACK_IMPORTED_MODULE_2__.getTransformedPosition(axisModel.axis, value, layoutInfo);
    return {
      x: position[0],
      y: position[1],
      rotation: layoutInfo.rotation + (layoutInfo.labelDirection < 0 ? Math.PI : 0)
    };
  };
  /**
   * @override
   */
  SingleAxisPointer.prototype.updateHandleTransform = function (transform, delta, axisModel, axisPointerModel) {
    var axis = axisModel.axis;
    var coordSys = axis.coordinateSystem;
    var dimIndex = getPointDimIndex(axis);
    var axisExtent = getGlobalExtent(coordSys, dimIndex);
    var currPosition = [transform.x, transform.y];
    currPosition[dimIndex] += delta[dimIndex];
    currPosition[dimIndex] = Math.min(axisExtent[1], currPosition[dimIndex]);
    currPosition[dimIndex] = Math.max(axisExtent[0], currPosition[dimIndex]);
    var otherExtent = getGlobalExtent(coordSys, 1 - dimIndex);
    var cursorOtherValue = (otherExtent[1] + otherExtent[0]) / 2;
    var cursorPoint = [cursorOtherValue, cursorOtherValue];
    cursorPoint[dimIndex] = currPosition[dimIndex];
    return {
      x: currPosition[0],
      y: currPosition[1],
      rotation: transform.rotation,
      cursorPoint: cursorPoint,
      tooltipOption: {
        verticalAlign: 'middle'
      }
    };
  };
  return SingleAxisPointer;
}(_BaseAxisPointer_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
var pointerShapeBuilder = {
  line: function (axis, pixelValue, otherExtent) {
    var targetShape = _viewHelper_js__WEBPACK_IMPORTED_MODULE_2__.makeLineShape([pixelValue, otherExtent[0]], [pixelValue, otherExtent[1]], getPointDimIndex(axis));
    return {
      type: 'Line',
      subPixelOptimize: true,
      shape: targetShape
    };
  },
  shadow: function (axis, pixelValue, otherExtent) {
    var bandWidth = axis.getBandWidth();
    var span = otherExtent[1] - otherExtent[0];
    return {
      type: 'Rect',
      shape: _viewHelper_js__WEBPACK_IMPORTED_MODULE_2__.makeRectShape([pixelValue - bandWidth / 2, otherExtent[0]], [bandWidth, span], getPointDimIndex(axis))
    };
  }
};
function getPointDimIndex(axis) {
  return axis.isHorizontal() ? 0 : 1;
}
function getGlobalExtent(coordSys, dimIndex) {
  var rect = coordSys.getRect();
  return [rect[XY[dimIndex]], rect[XY[dimIndex]] + rect[WH[dimIndex]]];
}
/* ESM default export */ __webpack_exports__["default"] = (SingleAxisPointer);

}),
68006: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return findPointFromSeries; }
});
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56190);
/* ESM import */var _util_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44244);

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
 * @param finder contains {seriesIndex, dataIndex, dataIndexInside}
 * @param ecModel
 * @return  {point: [x, y], el: ...} point Will not be null.
 */
function findPointFromSeries(finder, ecModel) {
  var point = [];
  var seriesIndex = finder.seriesIndex;
  var seriesModel;
  if (seriesIndex == null || !(seriesModel = ecModel.getSeriesByIndex(seriesIndex))) {
    return {
      point: []
    };
  }
  var data = seriesModel.getData();
  var dataIndex = _util_model_js__WEBPACK_IMPORTED_MODULE_0__.queryDataIndex(data, finder);
  if (dataIndex == null || dataIndex < 0 || zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isArray(dataIndex)) {
    return {
      point: []
    };
  }
  var el = data.getItemGraphicEl(dataIndex);
  var coordSys = seriesModel.coordinateSystem;
  if (seriesModel.getTooltipPosition) {
    point = seriesModel.getTooltipPosition(dataIndex) || [];
  } else if (coordSys && coordSys.dataToPoint) {
    if (finder.isStacked) {
      var baseAxis = coordSys.getBaseAxis();
      var valueAxis = coordSys.getOtherAxis(baseAxis);
      var valueAxisDim = valueAxis.dim;
      var baseAxisDim = baseAxis.dim;
      var baseDataOffset = valueAxisDim === 'x' || valueAxisDim === 'radius' ? 1 : 0;
      var baseDim = data.mapDimension(baseAxisDim);
      var stackedData = [];
      stackedData[baseDataOffset] = data.get(baseDim, dataIndex);
      stackedData[1 - baseDataOffset] = data.get(data.getCalculationInfo('stackResultDimension'), dataIndex);
      point = coordSys.dataToPoint(stackedData) || [];
    } else {
      point = coordSys.dataToPoint(data.getValues(zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.map(coordSys.dimensions, function (dim) {
        return data.mapDimension(dim);
      }), dataIndex)) || [];
    }
  } else if (el) {
    // Use graphic bounding rect
    var rect = el.getBoundingRect().clone();
    rect.applyTransform(el.transform);
    point = [rect.x + rect.width / 2, rect.y + rect.height / 2];
  }
  return {
    point: point,
    el: el
  };
}

}),
94554: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  register: function() { return register; },
  unregister: function() { return unregister; }
});
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56190);
/* ESM import */var zrender_lib_core_env_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33013);
/* ESM import */var _util_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44244);

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
var each = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.each;
/**
 * @param {string} key
 * @param {module:echarts/ExtensionAPI} api
 * @param {Function} handler
 *      param: {string} currTrigger
 *      param: {Array.<number>} point
 */
function register(key, api, handler) {
  if (zrender_lib_core_env_js__WEBPACK_IMPORTED_MODULE_2__["default"].node) {
    return;
  }
  var zr = api.getZr();
  inner(zr).records || (inner(zr).records = {});
  initGlobalListeners(zr, api);
  var record = inner(zr).records[key] || (inner(zr).records[key] = {});
  record.handler = handler;
}
function initGlobalListeners(zr, api) {
  if (inner(zr).initialized) {
    return;
  }
  inner(zr).initialized = true;
  useHandler('click', zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.curry(doEnter, 'click'));
  useHandler('mousemove', zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.curry(doEnter, 'mousemove'));
  // useHandler('mouseout', onLeave);
  useHandler('globalout', onLeave);
  function useHandler(eventType, cb) {
    zr.on(eventType, function (e) {
      var dis = makeDispatchAction(api);
      each(inner(zr).records, function (record) {
        record && cb(record, e, dis.dispatchAction);
      });
      dispatchTooltipFinally(dis.pendings, api);
    });
  }
}
function dispatchTooltipFinally(pendings, api) {
  var showLen = pendings.showTip.length;
  var hideLen = pendings.hideTip.length;
  var actuallyPayload;
  if (showLen) {
    actuallyPayload = pendings.showTip[showLen - 1];
  } else if (hideLen) {
    actuallyPayload = pendings.hideTip[hideLen - 1];
  }
  if (actuallyPayload) {
    actuallyPayload.dispatchAction = null;
    api.dispatchAction(actuallyPayload);
  }
}
function onLeave(record, e, dispatchAction) {
  record.handler('leave', null, dispatchAction);
}
function doEnter(currTrigger, record, e, dispatchAction) {
  record.handler(currTrigger, e, dispatchAction);
}
function makeDispatchAction(api) {
  var pendings = {
    showTip: [],
    hideTip: []
  };
  // FIXME
  // better approach?
  // 'showTip' and 'hideTip' can be triggered by axisPointer and tooltip,
  // which may be conflict, (axisPointer call showTip but tooltip call hideTip);
  // So we have to add "final stage" to merge those dispatched actions.
  var dispatchAction = function (payload) {
    var pendingList = pendings[payload.type];
    if (pendingList) {
      pendingList.push(payload);
    } else {
      payload.dispatchAction = dispatchAction;
      api.dispatchAction(payload);
    }
  };
  return {
    dispatchAction: dispatchAction,
    pendings: pendings
  };
}
function unregister(key, api) {
  if (zrender_lib_core_env_js__WEBPACK_IMPORTED_MODULE_2__["default"].node) {
    return;
  }
  var zr = api.getZr();
  var record = (inner(zr).records || {})[key];
  if (record) {
    inner(zr).records[key] = null;
  }
}

}),
57356: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  install: function() { return /* binding */ install; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/AxisView.js
var AxisView = __webpack_require__(68463);
// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(12012);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/BaseAxisPointer.js
var BaseAxisPointer = __webpack_require__(704);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/viewHelper.js
var viewHelper = __webpack_require__(8814);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/cartesian/cartesianAxisHelper.js
var cartesianAxisHelper = __webpack_require__(88700);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/CartesianAxisPointer.js

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




var CartesianAxisPointer_CartesianAxisPointer = /** @class */function (_super) {
  (0,tslib_es6.__extends)(CartesianAxisPointer, _super);
  function CartesianAxisPointer() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  /**
   * @override
   */
  CartesianAxisPointer.prototype.makeElOption = function (elOption, value, axisModel, axisPointerModel, api) {
    var axis = axisModel.axis;
    var grid = axis.grid;
    var axisPointerType = axisPointerModel.get('type');
    var otherExtent = getCartesian(grid, axis).getOtherAxis(axis).getGlobalExtent();
    var pixelValue = axis.toGlobalCoord(axis.dataToCoord(value, true));
    if (axisPointerType && axisPointerType !== 'none') {
      var elStyle = viewHelper.buildElStyle(axisPointerModel);
      var pointerOption = pointerShapeBuilder[axisPointerType](axis, pixelValue, otherExtent);
      pointerOption.style = elStyle;
      elOption.graphicKey = pointerOption.type;
      elOption.pointer = pointerOption;
    }
    var layoutInfo = cartesianAxisHelper.layout(grid.getRect(), axisModel);
    viewHelper.buildCartesianSingleLabelElOption(value, elOption, layoutInfo, axisModel, axisPointerModel, api);
  };
  /**
   * @override
   */
  CartesianAxisPointer.prototype.getHandleTransform = function (value, axisModel, axisPointerModel) {
    var layoutInfo = cartesianAxisHelper.layout(axisModel.axis.grid.getRect(), axisModel, {
      labelInside: false
    });
    layoutInfo.labelMargin = axisPointerModel.get(['handle', 'margin']);
    var pos = viewHelper.getTransformedPosition(axisModel.axis, value, layoutInfo);
    return {
      x: pos[0],
      y: pos[1],
      rotation: layoutInfo.rotation + (layoutInfo.labelDirection < 0 ? Math.PI : 0)
    };
  };
  /**
   * @override
   */
  CartesianAxisPointer.prototype.updateHandleTransform = function (transform, delta, axisModel, axisPointerModel) {
    var axis = axisModel.axis;
    var grid = axis.grid;
    var axisExtent = axis.getGlobalExtent(true);
    var otherExtent = getCartesian(grid, axis).getOtherAxis(axis).getGlobalExtent();
    var dimIndex = axis.dim === 'x' ? 0 : 1;
    var currPosition = [transform.x, transform.y];
    currPosition[dimIndex] += delta[dimIndex];
    currPosition[dimIndex] = Math.min(axisExtent[1], currPosition[dimIndex]);
    currPosition[dimIndex] = Math.max(axisExtent[0], currPosition[dimIndex]);
    var cursorOtherValue = (otherExtent[1] + otherExtent[0]) / 2;
    var cursorPoint = [cursorOtherValue, cursorOtherValue];
    cursorPoint[dimIndex] = currPosition[dimIndex];
    // Make tooltip do not overlap axisPointer and in the middle of the grid.
    var tooltipOptions = [{
      verticalAlign: 'middle'
    }, {
      align: 'center'
    }];
    return {
      x: currPosition[0],
      y: currPosition[1],
      rotation: transform.rotation,
      cursorPoint: cursorPoint,
      tooltipOption: tooltipOptions[dimIndex]
    };
  };
  return CartesianAxisPointer;
}(BaseAxisPointer["default"]);
function getCartesian(grid, axis) {
  var opt = {};
  opt[axis.dim + 'AxisIndex'] = axis.index;
  return grid.getCartesian(opt);
}
var pointerShapeBuilder = {
  line: function (axis, pixelValue, otherExtent) {
    var targetShape = viewHelper.makeLineShape([pixelValue, otherExtent[0]], [pixelValue, otherExtent[1]], getAxisDimIndex(axis));
    return {
      type: 'Line',
      subPixelOptimize: true,
      shape: targetShape
    };
  },
  shadow: function (axis, pixelValue, otherExtent) {
    var bandWidth = Math.max(1, axis.getBandWidth());
    var span = otherExtent[1] - otherExtent[0];
    return {
      type: 'Rect',
      shape: viewHelper.makeRectShape([pixelValue - bandWidth / 2, otherExtent[0]], [bandWidth, span], getAxisDimIndex(axis))
    };
  }
};
function getAxisDimIndex(axis) {
  return axis.dim === 'x' ? 0 : 1;
}
/* ESM default export */ var axisPointer_CartesianAxisPointer = (CartesianAxisPointer_CartesianAxisPointer);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Component.js
var Component = __webpack_require__(81757);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/tokens.js
var tokens = __webpack_require__(23430);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/AxisPointerModel.js

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



var AxisPointerModel_AxisPointerModel = /** @class */function (_super) {
  (0,tslib_es6.__extends)(AxisPointerModel, _super);
  function AxisPointerModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = AxisPointerModel.type;
    return _this;
  }
  AxisPointerModel.type = 'axisPointer';
  AxisPointerModel.defaultOption = {
    // 'auto' means that show when triggered by tooltip or handle.
    show: 'auto',
    // zlevel: 0,
    z: 50,
    type: 'line',
    // axispointer triggered by tootip determine snap automatically,
    // see `modelHelper`.
    snap: false,
    triggerTooltip: true,
    triggerEmphasis: true,
    value: null,
    status: null,
    link: [],
    // Do not set 'auto' here, otherwise global animation: false
    // will not effect at this axispointer.
    animation: null,
    animationDurationUpdate: 200,
    lineStyle: {
      color: tokens["default"].color.border,
      width: 1,
      type: 'dashed'
    },
    shadowStyle: {
      color: tokens["default"].color.shadowTint
    },
    label: {
      show: true,
      formatter: null,
      precision: 'auto',
      margin: 3,
      color: tokens["default"].color.neutral00,
      padding: [5, 7, 5, 7],
      backgroundColor: tokens["default"].color.accent60,
      borderColor: null,
      borderWidth: 0,
      borderRadius: 3
    },
    handle: {
      show: false,
      // eslint-disable-next-line
      icon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z',
      size: 45,
      // handle margin is from symbol center to axis, which is stable when circular move.
      margin: 50,
      // color: '#1b8bbd'
      // color: '#2f4554'
      color: tokens["default"].color.accent40,
      // For mobile performance
      throttle: 40
    }
  };
  return AxisPointerModel;
}(Component["default"]);
/* ESM default export */ var axisPointer_AxisPointerModel = (AxisPointerModel_AxisPointerModel);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/globalListener.js
var globalListener = __webpack_require__(94554);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Component.js
var view_Component = __webpack_require__(64989);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/AxisPointerView.js

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



var AxisPointerView_AxisPointerView = /** @class */function (_super) {
  (0,tslib_es6.__extends)(AxisPointerView, _super);
  function AxisPointerView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = AxisPointerView.type;
    return _this;
  }
  AxisPointerView.prototype.render = function (globalAxisPointerModel, ecModel, api) {
    var globalTooltipModel = ecModel.getComponent('tooltip');
    var triggerOn = globalAxisPointerModel.get('triggerOn') || globalTooltipModel && globalTooltipModel.get('triggerOn') || 'mousemove|click';
    // Register global listener in AxisPointerView to enable
    // AxisPointerView to be independent to Tooltip.
    globalListener.register('axisPointer', api, function (currTrigger, e, dispatchAction) {
      // If 'none', it is not controlled by mouse totally.
      if (triggerOn !== 'none' && (currTrigger === 'leave' || triggerOn.indexOf(currTrigger) >= 0)) {
        dispatchAction({
          type: 'updateAxisPointer',
          currTrigger: currTrigger,
          x: e && e.offsetX,
          y: e && e.offsetY
        });
      }
    });
  };
  AxisPointerView.prototype.remove = function (ecModel, api) {
    globalListener.unregister('axisPointer', api);
  };
  AxisPointerView.prototype.dispose = function (ecModel, api) {
    globalListener.unregister('axisPointer', api);
  };
  AxisPointerView.type = 'axisPointer';
  return AxisPointerView;
}(view_Component["default"]);
/* ESM default export */ var axisPointer_AxisPointerView = (AxisPointerView_AxisPointerView);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(56190);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/modelHelper.js
var modelHelper = __webpack_require__(66874);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js
var model = __webpack_require__(44244);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/findPointFromSeries.js
var findPointFromSeries = __webpack_require__(68006);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/axisTrigger.js

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




var inner = (0,model.makeInner)();
/**
 * Basic logic: check all axis, if they do not demand show/highlight,
 * then hide/downplay them.
 *
 * @return content of event obj for echarts.connect.
 */
function axisTrigger(payload, ecModel, api) {
  var currTrigger = payload.currTrigger;
  var point = [payload.x, payload.y];
  var finder = payload;
  var dispatchAction = payload.dispatchAction || (0,util.bind)(api.dispatchAction, api);
  var coordSysAxesInfo = ecModel.getComponent('axisPointer').coordSysAxesInfo;
  // Pending
  // See #6121. But we are not able to reproduce it yet.
  if (!coordSysAxesInfo) {
    return;
  }
  if (illegalPoint(point)) {
    // Used in the default behavior of `connection`: use the sample seriesIndex
    // and dataIndex. And also used in the tooltipView trigger.
    point = (0,findPointFromSeries["default"])({
      seriesIndex: finder.seriesIndex,
      // Do not use dataIndexInside from other ec instance.
      // FIXME: auto detect it?
      dataIndex: finder.dataIndex
    }, ecModel).point;
  }
  var isIllegalPoint = illegalPoint(point);
  // Axis and value can be specified when calling dispatchAction({type: 'updateAxisPointer'}).
  // Notice: In this case, it is difficult to get the `point` (which is necessary to show
  // tooltip, so if point is not given, we just use the point found by sample seriesIndex
  // and dataIndex.
  var inputAxesInfo = finder.axesInfo;
  var axesInfo = coordSysAxesInfo.axesInfo;
  var shouldHide = currTrigger === 'leave' || illegalPoint(point);
  var outputPayload = {};
  var showValueMap = {};
  var dataByCoordSys = {
    list: [],
    map: {}
  };
  var updaters = {
    showPointer: (0,util.curry)(showPointer, showValueMap),
    showTooltip: (0,util.curry)(showTooltip, dataByCoordSys)
  };
  // Process for triggered axes.
  (0,util.each)(coordSysAxesInfo.coordSysMap, function (coordSys, coordSysKey) {
    // If a point given, it must be contained by the coordinate system.
    var coordSysContainsPoint = isIllegalPoint || coordSys.containPoint(point);
    (0,util.each)(coordSysAxesInfo.coordSysAxesInfo[coordSysKey], function (axisInfo, key) {
      var axis = axisInfo.axis;
      var inputAxisInfo = findInputAxisInfo(inputAxesInfo, axisInfo);
      // If no inputAxesInfo, no axis is restricted.
      if (!shouldHide && coordSysContainsPoint && (!inputAxesInfo || inputAxisInfo)) {
        var val = inputAxisInfo && inputAxisInfo.value;
        if (val == null && !isIllegalPoint) {
          val = axis.pointToData(point);
        }
        val != null && processOnAxis(axisInfo, val, updaters, false, outputPayload);
      }
    });
  });
  // Process for linked axes.
  var linkTriggers = {};
  (0,util.each)(axesInfo, function (tarAxisInfo, tarKey) {
    var linkGroup = tarAxisInfo.linkGroup;
    // If axis has been triggered in the previous stage, it should not be triggered by link.
    if (linkGroup && !showValueMap[tarKey]) {
      (0,util.each)(linkGroup.axesInfo, function (srcAxisInfo, srcKey) {
        var srcValItem = showValueMap[srcKey];
        // If srcValItem exist, source axis is triggered, so link to target axis.
        if (srcAxisInfo !== tarAxisInfo && srcValItem) {
          var val = srcValItem.value;
          linkGroup.mapper && (val = tarAxisInfo.axis.scale.parse(linkGroup.mapper(val, makeMapperParam(srcAxisInfo), makeMapperParam(tarAxisInfo))));
          linkTriggers[tarAxisInfo.key] = val;
        }
      });
    }
  });
  (0,util.each)(linkTriggers, function (val, tarKey) {
    processOnAxis(axesInfo[tarKey], val, updaters, true, outputPayload);
  });
  updateModelActually(showValueMap, axesInfo, outputPayload);
  dispatchTooltipActually(dataByCoordSys, point, payload, dispatchAction);
  dispatchHighDownActually(axesInfo, dispatchAction, api);
  return outputPayload;
}
function processOnAxis(axisInfo, newValue, updaters, noSnap, outputFinder) {
  var axis = axisInfo.axis;
  if (axis.scale.isBlank() || !axis.containData(newValue)) {
    return;
  }
  if (!axisInfo.involveSeries) {
    updaters.showPointer(axisInfo, newValue);
    return;
  }
  // Heavy calculation. So put it after axis.containData checking.
  var payloadInfo = buildPayloadsBySeries(newValue, axisInfo);
  var payloadBatch = payloadInfo.payloadBatch;
  var snapToValue = payloadInfo.snapToValue;
  // Fill content of event obj for echarts.connect.
  // By default use the first involved series data as a sample to connect.
  if (payloadBatch[0] && outputFinder.seriesIndex == null) {
    (0,util.extend)(outputFinder, payloadBatch[0]);
  }
  // If no linkSource input, this process is for collecting link
  // target, where snap should not be accepted.
  if (!noSnap && axisInfo.snap) {
    if (axis.containData(snapToValue) && snapToValue != null) {
      newValue = snapToValue;
    }
  }
  updaters.showPointer(axisInfo, newValue, payloadBatch);
  // Tooltip should always be snapToValue, otherwise there will be
  // incorrect "axis value ~ series value" mapping displayed in tooltip.
  updaters.showTooltip(axisInfo, payloadInfo, snapToValue);
}
function buildPayloadsBySeries(value, axisInfo) {
  var axis = axisInfo.axis;
  var dim = axis.dim;
  var snapToValue = value;
  var payloadBatch = [];
  var minDist = Number.MAX_VALUE;
  var minDiff = -1;
  (0,util.each)(axisInfo.seriesModels, function (series, idx) {
    var dataDim = series.getData().mapDimensionsAll(dim);
    var seriesNestestValue;
    var dataIndices;
    if (series.getAxisTooltipData) {
      var result = series.getAxisTooltipData(dataDim, value, axis);
      dataIndices = result.dataIndices;
      seriesNestestValue = result.nestestValue;
    } else {
      dataIndices = series.indicesOfNearest(dim, dataDim[0], value,
      // Add a threshold to avoid find the wrong dataIndex
      // when data length is not same.
      // false,
      axis.type === 'category' ? 0.5 : null);
      if (!dataIndices.length) {
        return;
      }
      seriesNestestValue = series.getData().get(dataDim[0], dataIndices[0]);
    }
    if (seriesNestestValue == null || !isFinite(seriesNestestValue)) {
      return;
    }
    var diff = value - seriesNestestValue;
    var dist = Math.abs(diff);
    // Consider category case
    if (dist <= minDist) {
      if (dist < minDist || diff >= 0 && minDiff < 0) {
        minDist = dist;
        minDiff = diff;
        snapToValue = seriesNestestValue;
        payloadBatch.length = 0;
      }
      (0,util.each)(dataIndices, function (dataIndex) {
        payloadBatch.push({
          seriesIndex: series.seriesIndex,
          dataIndexInside: dataIndex,
          dataIndex: series.getData().getRawIndex(dataIndex)
        });
      });
    }
  });
  return {
    payloadBatch: payloadBatch,
    snapToValue: snapToValue
  };
}
function showPointer(showValueMap, axisInfo, value, payloadBatch) {
  showValueMap[axisInfo.key] = {
    value: value,
    payloadBatch: payloadBatch
  };
}
function showTooltip(dataByCoordSys, axisInfo, payloadInfo, value) {
  var payloadBatch = payloadInfo.payloadBatch;
  var axis = axisInfo.axis;
  var axisModel = axis.model;
  var axisPointerModel = axisInfo.axisPointerModel;
  // If no data, do not create anything in dataByCoordSys,
  // whose length will be used to judge whether dispatch action.
  if (!axisInfo.triggerTooltip || !payloadBatch.length) {
    return;
  }
  var coordSysModel = axisInfo.coordSys.model;
  var coordSysKey = modelHelper.makeKey(coordSysModel);
  var coordSysItem = dataByCoordSys.map[coordSysKey];
  if (!coordSysItem) {
    coordSysItem = dataByCoordSys.map[coordSysKey] = {
      coordSysId: coordSysModel.id,
      coordSysIndex: coordSysModel.componentIndex,
      coordSysType: coordSysModel.type,
      coordSysMainType: coordSysModel.mainType,
      dataByAxis: []
    };
    dataByCoordSys.list.push(coordSysItem);
  }
  coordSysItem.dataByAxis.push({
    axisDim: axis.dim,
    axisIndex: axisModel.componentIndex,
    axisType: axisModel.type,
    axisId: axisModel.id,
    value: value,
    // Caustion: viewHelper.getValueLabel is actually on "view stage", which
    // depends that all models have been updated. So it should not be performed
    // here. Considering axisPointerModel used here is volatile, which is hard
    // to be retrieve in TooltipView, we prepare parameters here.
    valueLabelOpt: {
      precision: axisPointerModel.get(['label', 'precision']),
      formatter: axisPointerModel.get(['label', 'formatter'])
    },
    seriesDataIndices: payloadBatch.slice()
  });
}
function updateModelActually(showValueMap, axesInfo, outputPayload) {
  var outputAxesInfo = outputPayload.axesInfo = [];
  // Basic logic: If no 'show' required, 'hide' this axisPointer.
  (0,util.each)(axesInfo, function (axisInfo, key) {
    var option = axisInfo.axisPointerModel.option;
    var valItem = showValueMap[key];
    if (valItem) {
      !axisInfo.useHandle && (option.status = 'show');
      option.value = valItem.value;
      // For label formatter param and highlight.
      option.seriesDataIndices = (valItem.payloadBatch || []).slice();
    }
    // When always show (e.g., handle used), remain
    // original value and status.
    else {
      // If hide, value still need to be set, consider
      // click legend to toggle axis blank.
      !axisInfo.useHandle && (option.status = 'hide');
    }
    // If status is 'hide', should be no info in payload.
    option.status === 'show' && outputAxesInfo.push({
      axisDim: axisInfo.axis.dim,
      axisIndex: axisInfo.axis.model.componentIndex,
      value: option.value
    });
  });
}
function dispatchTooltipActually(dataByCoordSys, point, payload, dispatchAction) {
  // Basic logic: If no showTip required, hideTip will be dispatched.
  if (illegalPoint(point) || !dataByCoordSys.list.length) {
    dispatchAction({
      type: 'hideTip'
    });
    return;
  }
  // In most case only one axis (or event one series is used). It is
  // convenient to fetch payload.seriesIndex and payload.dataIndex
  // directly. So put the first seriesIndex and dataIndex of the first
  // axis on the payload.
  var sampleItem = ((dataByCoordSys.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};
  dispatchAction({
    type: 'showTip',
    escapeConnect: true,
    x: point[0],
    y: point[1],
    tooltipOption: payload.tooltipOption,
    position: payload.position,
    dataIndexInside: sampleItem.dataIndexInside,
    dataIndex: sampleItem.dataIndex,
    seriesIndex: sampleItem.seriesIndex,
    dataByCoordSys: dataByCoordSys.list
  });
}
function dispatchHighDownActually(axesInfo, dispatchAction, api) {
  // FIXME
  // highlight status modification should be a stage of main process?
  // (Consider confilct (e.g., legend and axisPointer) and setOption)
  var zr = api.getZr();
  var highDownKey = 'axisPointerLastHighlights';
  var lastHighlights = inner(zr)[highDownKey] || {};
  var newHighlights = inner(zr)[highDownKey] = {};
  // Update highlight/downplay status according to axisPointer model.
  // Build hash map and remove duplicate incidentally.
  (0,util.each)(axesInfo, function (axisInfo, key) {
    var option = axisInfo.axisPointerModel.option;
    option.status === 'show' && axisInfo.triggerEmphasis && (0,util.each)(option.seriesDataIndices, function (batchItem) {
      var key = batchItem.seriesIndex + ' | ' + batchItem.dataIndex;
      newHighlights[key] = batchItem;
    });
  });
  // Diff.
  var toHighlight = [];
  var toDownplay = [];
  (0,util.each)(lastHighlights, function (batchItem, key) {
    !newHighlights[key] && toDownplay.push(batchItem);
  });
  (0,util.each)(newHighlights, function (batchItem, key) {
    !lastHighlights[key] && toHighlight.push(batchItem);
  });
  toDownplay.length && api.dispatchAction({
    type: 'downplay',
    escapeConnect: true,
    // Not blur others when highlight in axisPointer.
    notBlur: true,
    batch: toDownplay
  });
  toHighlight.length && api.dispatchAction({
    type: 'highlight',
    escapeConnect: true,
    // Not blur others when highlight in axisPointer.
    notBlur: true,
    batch: toHighlight
  });
}
function findInputAxisInfo(inputAxesInfo, axisInfo) {
  for (var i = 0; i < (inputAxesInfo || []).length; i++) {
    var inputAxisInfo = inputAxesInfo[i];
    if (axisInfo.axis.dim === inputAxisInfo.axisDim && axisInfo.axis.model.componentIndex === inputAxisInfo.axisIndex) {
      return inputAxisInfo;
    }
  }
}
function makeMapperParam(axisInfo) {
  var axisModel = axisInfo.axis.model;
  var item = {};
  var dim = item.axisDim = axisInfo.axis.dim;
  item.axisIndex = item[dim + 'AxisIndex'] = axisModel.componentIndex;
  item.axisName = item[dim + 'AxisName'] = axisModel.name;
  item.axisId = item[dim + 'AxisId'] = axisModel.id;
  return item;
}
function illegalPoint(point) {
  return !point || point[0] == null || isNaN(point[0]) || point[1] == null || isNaN(point[1]);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/install.js

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
  // CartesianAxisPointer is not supposed to be required here. But consider
  // echarts.simple.js and online build tooltip, which only require gridSimple,
  // CartesianAxisPointer should be able to required somewhere.
  AxisView["default"].registerAxisPointerClass('CartesianAxisPointer', axisPointer_CartesianAxisPointer);
  registers.registerComponentModel(axisPointer_AxisPointerModel);
  registers.registerComponentView(axisPointer_AxisPointerView);
  registers.registerPreprocessor(function (option) {
    // Always has a global axisPointerModel for default setting.
    if (option) {
      (!option.axisPointer || option.axisPointer.length === 0) && (option.axisPointer = {});
      var link = option.axisPointer.link;
      // Normalize to array to avoid object mergin. But if link
      // is not set, remain null/undefined, otherwise it will
      // override existent link setting.
      if (link && !(0,util.isArray)(link)) {
        option.axisPointer.link = [link];
      }
    }
  });
  // This process should proformed after coordinate systems created
  // and series data processed. So put it on statistic processing stage.
  registers.registerProcessor(registers.PRIORITY.PROCESSOR.STATISTIC, function (ecModel, api) {
    // Build axisPointerModel, mergin tooltip.axisPointer model for each axis.
    // allAxesInfo should be updated when setOption performed.
    ecModel.getComponent('axisPointer').coordSysAxesInfo = (0,modelHelper.collect)(ecModel, api);
  });
  // Broadcast to all views.
  registers.registerAction({
    type: 'updateAxisPointer',
    event: 'updateAxisPointer',
    update: ':updateAxisPointer'
  }, axisTrigger);
}

}),
66874: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  collect: function() { return collect; },
  fixValue: function() { return fixValue; },
  getAxisInfo: function() { return getAxisInfo; },
  getAxisPointerModel: function() { return getAxisPointerModel; },
  makeKey: function() { return makeKey; }
});
/* ESM import */var _model_Model_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40064);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56190);

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


// Build axisPointerModel, mergin tooltip.axisPointer model for each axis.
// allAxesInfo should be updated when setOption performed.
function collect(ecModel, api) {
  var result = {
    /**
     * key: makeKey(axis.model)
     * value: {
     *      axis,
     *      coordSys,
     *      axisPointerModel,
     *      triggerTooltip,
     *      triggerEmphasis,
     *      involveSeries,
     *      snap,
     *      seriesModels,
     *      seriesDataCount
     * }
     */
    axesInfo: {},
    seriesInvolved: false,
    /**
     * key: makeKey(coordSys.model)
     * value: Object: key makeKey(axis.model), value: axisInfo
     */
    coordSysAxesInfo: {},
    coordSysMap: {}
  };
  collectAxesInfo(result, ecModel, api);
  // Check seriesInvolved for performance, in case too many series in some chart.
  result.seriesInvolved && collectSeriesInfo(result, ecModel);
  return result;
}
function collectAxesInfo(result, ecModel, api) {
  var globalTooltipModel = ecModel.getComponent('tooltip');
  var globalAxisPointerModel = ecModel.getComponent('axisPointer');
  // links can only be set on global.
  var linksOption = globalAxisPointerModel.get('link', true) || [];
  var linkGroups = [];
  // Collect axes info.
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each)(api.getCoordinateSystems(), function (coordSys) {
    // Some coordinate system do not support axes, like geo.
    if (!coordSys.axisPointerEnabled) {
      return;
    }
    var coordSysKey = makeKey(coordSys.model);
    var axesInfoInCoordSys = result.coordSysAxesInfo[coordSysKey] = {};
    result.coordSysMap[coordSysKey] = coordSys;
    // Set tooltip (like 'cross') is a convenient way to show axisPointer
    // for user. So we enable setting tooltip on coordSys model.
    var coordSysModel = coordSys.model;
    var baseTooltipModel = coordSysModel.getModel('tooltip', globalTooltipModel);
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each)(coordSys.getAxes(), (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.curry)(saveTooltipAxisInfo, false, null));
    // If axis tooltip used, choose tooltip axis for each coordSys.
    // Notice this case: coordSys is `grid` but not `cartesian2D` here.
    if (coordSys.getTooltipAxes && globalTooltipModel
    // If tooltip.showContent is set as false, tooltip will not
    // show but axisPointer will show as normal.
    && baseTooltipModel.get('show')) {
      // Compatible with previous logic. But series.tooltip.trigger: 'axis'
      // or series.data[n].tooltip.trigger: 'axis' are not support any more.
      var triggerAxis = baseTooltipModel.get('trigger') === 'axis';
      var cross = baseTooltipModel.get(['axisPointer', 'type']) === 'cross';
      var tooltipAxes = coordSys.getTooltipAxes(baseTooltipModel.get(['axisPointer', 'axis']));
      if (triggerAxis || cross) {
        (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each)(tooltipAxes.baseAxes, (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.curry)(saveTooltipAxisInfo, cross ? 'cross' : true, triggerAxis));
      }
      if (cross) {
        (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each)(tooltipAxes.otherAxes, (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.curry)(saveTooltipAxisInfo, 'cross', false));
      }
    }
    // fromTooltip: true | false | 'cross'
    // triggerTooltip: true | false | null
    function saveTooltipAxisInfo(fromTooltip, triggerTooltip, axis) {
      var axisPointerModel = axis.model.getModel('axisPointer', globalAxisPointerModel);
      var axisPointerShow = axisPointerModel.get('show');
      if (!axisPointerShow || axisPointerShow === 'auto' && !fromTooltip && !isHandleTrigger(axisPointerModel)) {
        return;
      }
      if (triggerTooltip == null) {
        triggerTooltip = axisPointerModel.get('triggerTooltip');
      }
      axisPointerModel = fromTooltip ? makeAxisPointerModel(axis, baseTooltipModel, globalAxisPointerModel, ecModel, fromTooltip, triggerTooltip) : axisPointerModel;
      var snap = axisPointerModel.get('snap');
      var triggerEmphasis = axisPointerModel.get('triggerEmphasis');
      var axisKey = makeKey(axis.model);
      var involveSeries = triggerTooltip || snap || axis.type === 'category';
      // If result.axesInfo[key] exist, override it (tooltip has higher priority).
      var axisInfo = result.axesInfo[axisKey] = {
        key: axisKey,
        axis: axis,
        coordSys: coordSys,
        axisPointerModel: axisPointerModel,
        triggerTooltip: triggerTooltip,
        triggerEmphasis: triggerEmphasis,
        involveSeries: involveSeries,
        snap: snap,
        useHandle: isHandleTrigger(axisPointerModel),
        seriesModels: [],
        linkGroup: null
      };
      axesInfoInCoordSys[axisKey] = axisInfo;
      result.seriesInvolved = result.seriesInvolved || involveSeries;
      var groupIndex = getLinkGroupIndex(linksOption, axis);
      if (groupIndex != null) {
        var linkGroup = linkGroups[groupIndex] || (linkGroups[groupIndex] = {
          axesInfo: {}
        });
        linkGroup.axesInfo[axisKey] = axisInfo;
        linkGroup.mapper = linksOption[groupIndex].mapper;
        axisInfo.linkGroup = linkGroup;
      }
    }
  });
}
function makeAxisPointerModel(axis, baseTooltipModel, globalAxisPointerModel, ecModel, fromTooltip, triggerTooltip) {
  var tooltipAxisPointerModel = baseTooltipModel.getModel('axisPointer');
  var fields = ['type', 'snap', 'lineStyle', 'shadowStyle', 'label', 'animation', 'animationDurationUpdate', 'animationEasingUpdate', 'z'];
  var volatileOption = {};
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each)(fields, function (field) {
    volatileOption[field] = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.clone)(tooltipAxisPointerModel.get(field));
  });
  // category axis do not auto snap, otherwise some tick that do not
  // has value can not be hovered. value/time/log axis default snap if
  // triggered from tooltip and trigger tooltip.
  volatileOption.snap = axis.type !== 'category' && !!triggerTooltip;
  // Compatible with previous behavior, tooltip axis does not show label by default.
  // Only these properties can be overridden from tooltip to axisPointer.
  if (tooltipAxisPointerModel.get('type') === 'cross') {
    volatileOption.type = 'line';
  }
  var labelOption = volatileOption.label || (volatileOption.label = {});
  // Follow the convention, do not show label when triggered by tooltip by default.
  labelOption.show == null && (labelOption.show = false);
  if (fromTooltip === 'cross') {
    // When 'cross', both axes show labels.
    var tooltipAxisPointerLabelShow = tooltipAxisPointerModel.get(['label', 'show']);
    labelOption.show = tooltipAxisPointerLabelShow != null ? tooltipAxisPointerLabelShow : true;
    // If triggerTooltip, this is a base axis, which should better not use cross style
    // (cross style is dashed by default)
    if (!triggerTooltip) {
      var crossStyle = volatileOption.lineStyle = tooltipAxisPointerModel.get('crossStyle');
      crossStyle && (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.defaults)(labelOption, crossStyle.textStyle);
    }
  }
  return axis.model.getModel('axisPointer', new _model_Model_js__WEBPACK_IMPORTED_MODULE_1__["default"](volatileOption, globalAxisPointerModel, ecModel));
}
function collectSeriesInfo(result, ecModel) {
  // Prepare data for axis trigger
  ecModel.eachSeries(function (seriesModel) {
    // Notice this case: this coordSys is `cartesian2D` but not `grid`.
    var coordSys = seriesModel.coordinateSystem;
    var seriesTooltipTrigger = seriesModel.get(['tooltip', 'trigger'], true);
    var seriesTooltipShow = seriesModel.get(['tooltip', 'show'], true);
    if (!coordSys || !coordSys.model // PENDING: radar do not have a model.
    || seriesTooltipTrigger === 'none' || seriesTooltipTrigger === false || seriesTooltipTrigger === 'item' || seriesTooltipShow === false || seriesModel.get(['axisPointer', 'show'], true) === false) {
      return;
    }
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each)(result.coordSysAxesInfo[makeKey(coordSys.model)], function (axisInfo) {
      var axis = axisInfo.axis;
      if (coordSys.getAxis(axis.dim) === axis) {
        axisInfo.seriesModels.push(seriesModel);
        axisInfo.seriesDataCount == null && (axisInfo.seriesDataCount = 0);
        axisInfo.seriesDataCount += seriesModel.getData().count();
      }
    });
  });
}
/**
 * For example:
 * {
 *     axisPointer: {
 *         links: [{
 *             xAxisIndex: [2, 4],
 *             yAxisIndex: 'all'
 *         }, {
 *             xAxisId: ['a5', 'a7'],
 *             xAxisName: 'xxx'
 *         }]
 *     }
 * }
 */
function getLinkGroupIndex(linksOption, axis) {
  var axisModel = axis.model;
  var dim = axis.dim;
  for (var i = 0; i < linksOption.length; i++) {
    var linkOption = linksOption[i] || {};
    if (checkPropInLink(linkOption[dim + 'AxisId'], axisModel.id) || checkPropInLink(linkOption[dim + 'AxisIndex'], axisModel.componentIndex) || checkPropInLink(linkOption[dim + 'AxisName'], axisModel.name)) {
      return i;
    }
  }
}
function checkPropInLink(linkPropValue, axisPropValue) {
  return linkPropValue === 'all' || (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(linkPropValue) && (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.indexOf)(linkPropValue, axisPropValue) >= 0 || linkPropValue === axisPropValue;
}
function fixValue(axisModel) {
  var axisInfo = getAxisInfo(axisModel);
  if (!axisInfo) {
    return;
  }
  var axisPointerModel = axisInfo.axisPointerModel;
  var scale = axisInfo.axis.scale;
  var option = axisPointerModel.option;
  var status = axisPointerModel.get('status');
  var value = axisPointerModel.get('value');
  // Parse init value for category and time axis.
  if (value != null) {
    value = scale.parse(value);
  }
  var useHandle = isHandleTrigger(axisPointerModel);
  // If `handle` used, `axisPointer` will always be displayed, so value
  // and status should be initialized.
  if (status == null) {
    option.status = useHandle ? 'show' : 'hide';
  }
  var extent = scale.getExtent().slice();
  extent[0] > extent[1] && extent.reverse();
  if (
  // Pick a value on axis when initializing.
  value == null
  // If both `handle` and `dataZoom` are used, value may be out of axis extent,
  // where we should re-pick a value to keep `handle` displaying normally.
  || value > extent[1]) {
    // Make handle displayed on the end of the axis when init, which looks better.
    value = extent[1];
  }
  if (value < extent[0]) {
    value = extent[0];
  }
  option.value = value;
  if (useHandle) {
    option.status = axisInfo.axis.scale.isBlank() ? 'hide' : 'show';
  }
}
function getAxisInfo(axisModel) {
  var coordSysAxesInfo = (axisModel.ecModel.getComponent('axisPointer') || {}).coordSysAxesInfo;
  return coordSysAxesInfo && coordSysAxesInfo.axesInfo[makeKey(axisModel)];
}
function getAxisPointerModel(axisModel) {
  var axisInfo = getAxisInfo(axisModel);
  return axisInfo && axisInfo.axisPointerModel;
}
function isHandleTrigger(axisPointerModel) {
  return !!axisPointerModel.get(['handle', 'show']);
}
/**
 * @param {module:echarts/model/Model} model
 * @return {string} unique key
 */
function makeKey(model) {
  return model.type + '||' + model.id;
}

}),
8814: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  buildCartesianSingleLabelElOption: function() { return buildCartesianSingleLabelElOption; },
  buildElStyle: function() { return buildElStyle; },
  buildLabelElOption: function() { return buildLabelElOption; },
  getTransformedPosition: function() { return getTransformedPosition; },
  getValueLabel: function() { return getValueLabel; },
  makeLineShape: function() { return makeLineShape; },
  makeRectShape: function() { return makeRectShape; },
  makeSectorShape: function() { return makeSectorShape; }
});
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56190);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42562);
/* ESM import */var zrender_lib_contain_text_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50122);
/* ESM import */var _util_format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85774);
/* ESM import */var zrender_lib_core_matrix_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24694);
/* ESM import */var _coord_axisHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5527);
/* ESM import */var _axis_AxisBuilder_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(60727);
/* ESM import */var _label_labelStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57235);

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








function buildElStyle(axisPointerModel) {
  var axisPointerType = axisPointerModel.get('type');
  var styleModel = axisPointerModel.getModel(axisPointerType + 'Style');
  var style;
  if (axisPointerType === 'line') {
    style = styleModel.getLineStyle();
    style.fill = null;
  } else if (axisPointerType === 'shadow') {
    style = styleModel.getAreaStyle();
    style.stroke = null;
  }
  return style;
}
/**
 * @param {Function} labelPos {align, verticalAlign, position}
 */
function buildLabelElOption(elOption, axisModel, axisPointerModel, api, labelPos) {
  var value = axisPointerModel.get('value');
  var text = getValueLabel(value, axisModel.axis, axisModel.ecModel, axisPointerModel.get('seriesDataIndices'), {
    precision: axisPointerModel.get(['label', 'precision']),
    formatter: axisPointerModel.get(['label', 'formatter'])
  });
  var labelModel = axisPointerModel.getModel('label');
  var paddings = _util_format_js__WEBPACK_IMPORTED_MODULE_0__.normalizeCssArray(labelModel.get('padding') || 0);
  var font = labelModel.getFont();
  var textRect = zrender_lib_contain_text_js__WEBPACK_IMPORTED_MODULE_1__.getBoundingRect(text, font);
  var position = labelPos.position;
  var width = textRect.width + paddings[1] + paddings[3];
  var height = textRect.height + paddings[0] + paddings[2];
  // Adjust by align.
  var align = labelPos.align;
  align === 'right' && (position[0] -= width);
  align === 'center' && (position[0] -= width / 2);
  var verticalAlign = labelPos.verticalAlign;
  verticalAlign === 'bottom' && (position[1] -= height);
  verticalAlign === 'middle' && (position[1] -= height / 2);
  // Not overflow ec container
  confineInContainer(position, width, height, api);
  var bgColor = labelModel.get('backgroundColor');
  if (!bgColor || bgColor === 'auto') {
    bgColor = axisModel.get(['axisLine', 'lineStyle', 'color']);
  }
  elOption.label = {
    // shape: {x: 0, y: 0, width: width, height: height, r: labelModel.get('borderRadius')},
    x: position[0],
    y: position[1],
    style: (0,_label_labelStyle_js__WEBPACK_IMPORTED_MODULE_2__.createTextStyle)(labelModel, {
      text: text,
      font: font,
      fill: labelModel.getTextColor(),
      padding: paddings,
      backgroundColor: bgColor
    }),
    // Label should be over axisPointer.
    z2: 10
  };
}
// Do not overflow ec container
function confineInContainer(position, width, height, api) {
  var viewWidth = api.getWidth();
  var viewHeight = api.getHeight();
  position[0] = Math.min(position[0] + width, viewWidth) - width;
  position[1] = Math.min(position[1] + height, viewHeight) - height;
  position[0] = Math.max(position[0], 0);
  position[1] = Math.max(position[1], 0);
}
function getValueLabel(value, axis, ecModel, seriesDataIndices, opt) {
  value = axis.scale.parse(value);
  var text = axis.scale.getLabel({
    value: value
  }, {
    // If `precision` is set, width can be fixed (like '12.00500'), which
    // helps to debounce when when moving label.
    precision: opt.precision
  });
  var formatter = opt.formatter;
  if (formatter) {
    var params_1 = {
      value: _coord_axisHelper_js__WEBPACK_IMPORTED_MODULE_3__.getAxisRawValue(axis, {
        value: value
      }),
      axisDimension: axis.dim,
      axisIndex: axis.index,
      seriesData: []
    };
    zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__.each(seriesDataIndices, function (idxItem) {
      var series = ecModel.getSeriesByIndex(idxItem.seriesIndex);
      var dataIndex = idxItem.dataIndexInside;
      var dataParams = series && series.getDataParams(dataIndex);
      dataParams && params_1.seriesData.push(dataParams);
    });
    if (zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__.isString(formatter)) {
      text = formatter.replace('{value}', text);
    } else if (zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__.isFunction(formatter)) {
      text = formatter(params_1);
    }
  }
  return text;
}
function getTransformedPosition(axis, value, layoutInfo) {
  var transform = zrender_lib_core_matrix_js__WEBPACK_IMPORTED_MODULE_5__.create();
  zrender_lib_core_matrix_js__WEBPACK_IMPORTED_MODULE_5__.rotate(transform, transform, layoutInfo.rotation);
  zrender_lib_core_matrix_js__WEBPACK_IMPORTED_MODULE_5__.translate(transform, transform, layoutInfo.position);
  return _util_graphic_js__WEBPACK_IMPORTED_MODULE_6__.applyTransform([axis.dataToCoord(value), (layoutInfo.labelOffset || 0) + (layoutInfo.labelDirection || 1) * (layoutInfo.labelMargin || 0)], transform);
}
function buildCartesianSingleLabelElOption(value, elOption, layoutInfo, axisModel, axisPointerModel, api) {
  var textLayout = _axis_AxisBuilder_js__WEBPACK_IMPORTED_MODULE_7__["default"].innerTextLayout(layoutInfo.rotation, 0, layoutInfo.labelDirection);
  layoutInfo.labelMargin = axisPointerModel.get(['label', 'margin']);
  buildLabelElOption(elOption, axisModel, axisPointerModel, api, {
    position: getTransformedPosition(axisModel.axis, value, layoutInfo),
    align: textLayout.textAlign,
    verticalAlign: textLayout.textVerticalAlign
  });
}
function makeLineShape(p1, p2, xDimIndex) {
  xDimIndex = xDimIndex || 0;
  return {
    x1: p1[xDimIndex],
    y1: p1[1 - xDimIndex],
    x2: p2[xDimIndex],
    y2: p2[1 - xDimIndex]
  };
}
function makeRectShape(xy, wh, xDimIndex) {
  xDimIndex = xDimIndex || 0;
  return {
    x: xy[xDimIndex],
    y: xy[1 - xDimIndex],
    width: wh[xDimIndex],
    height: wh[1 - xDimIndex]
  };
}
function makeSectorShape(cx, cy, r0, r, startAngle, endAngle) {
  return {
    cx: cx,
    cy: cy,
    r0: r0,
    r: r,
    startAngle: startAngle,
    endAngle: endAngle,
    clockwise: true
  };
}

}),
613: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  install: function() { return /* binding */ install; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(56190);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js
var model = __webpack_require__(44244);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/brush/preprocessor.js

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


var DEFAULT_TOOLBOX_BTNS = ['rect', 'polygon', 'keep', 'clear'];
function brushPreprocessor(option, isNew) {
  var brushComponents = (0,model.normalizeToArray)(option ? option.brush : []);
  if (!brushComponents.length) {
    return;
  }
  var brushComponentSpecifiedBtns = [];
  util.each(brushComponents, function (brushOpt) {
    var tbs = brushOpt.hasOwnProperty('toolbox') ? brushOpt.toolbox : [];
    if (tbs instanceof Array) {
      brushComponentSpecifiedBtns = brushComponentSpecifiedBtns.concat(tbs);
    }
  });
  var toolbox = option && option.toolbox;
  if (util.isArray(toolbox)) {
    toolbox = toolbox[0];
  }
  if (!toolbox) {
    toolbox = {
      feature: {}
    };
    option.toolbox = [toolbox];
  }
  var toolboxFeature = toolbox.feature || (toolbox.feature = {});
  var toolboxBrush = toolboxFeature.brush || (toolboxFeature.brush = {});
  var brushTypes = toolboxBrush.type || (toolboxBrush.type = []);
  brushTypes.push.apply(brushTypes, brushComponentSpecifiedBtns);
  removeDuplicate(brushTypes);
  if (isNew && !brushTypes.length) {
    brushTypes.push.apply(brushTypes, DEFAULT_TOOLBOX_BTNS);
  }
}
function removeDuplicate(arr) {
  var map = {};
  util.each(arr, function (val) {
    map[val] = 1;
  });
  arr.length = 0;
  util.each(map, function (flag, val) {
    arr.push(val);
  });
}
// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(12012);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/BrushController.js
var BrushController = __webpack_require__(97684);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/BoundingRect.js
var BoundingRect = __webpack_require__(48670);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/visualSolution.js
var visualSolution = __webpack_require__(5114);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/contain/polygon.js
var polygon = __webpack_require__(38519);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js
var graphic = __webpack_require__(42562);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/brush/selector.js

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



function makeBrushCommonSelectorForSeries(area) {
  var brushType = area.brushType;
  // Do not use function binding or curry for performance.
  var selectors = {
    point: function (itemLayout) {
      return selector_selector[brushType].point(itemLayout, selectors, area);
    },
    rect: function (itemLayout) {
      return selector_selector[brushType].rect(itemLayout, selectors, area);
    }
  };
  return selectors;
}
var selector_selector = {
  lineX: getLineSelectors(0),
  lineY: getLineSelectors(1),
  rect: {
    point: function (itemLayout, selectors, area) {
      return itemLayout && area.boundingRect.contain(itemLayout[0], itemLayout[1]);
    },
    rect: function (itemLayout, selectors, area) {
      return itemLayout && area.boundingRect.intersect(itemLayout);
    }
  },
  polygon: {
    point: function (itemLayout, selectors, area) {
      return itemLayout && area.boundingRect.contain(itemLayout[0], itemLayout[1]) && polygon.contain(area.range, itemLayout[0], itemLayout[1]);
    },
    rect: function (itemLayout, selectors, area) {
      var points = area.range;
      if (!itemLayout || points.length <= 1) {
        return false;
      }
      var x = itemLayout.x;
      var y = itemLayout.y;
      var width = itemLayout.width;
      var height = itemLayout.height;
      var p = points[0];
      if (polygon.contain(points, x, y) || polygon.contain(points, x + width, y) || polygon.contain(points, x, y + height) || polygon.contain(points, x + width, y + height) || BoundingRect["default"].create(itemLayout).contain(p[0], p[1]) || (0,graphic.linePolygonIntersect)(x, y, x + width, y, points) || (0,graphic.linePolygonIntersect)(x, y, x, y + height, points) || (0,graphic.linePolygonIntersect)(x + width, y, x + width, y + height, points) || (0,graphic.linePolygonIntersect)(x, y + height, x + width, y + height, points)) {
        return true;
      }
    }
  }
};
function getLineSelectors(xyIndex) {
  var xy = ['x', 'y'];
  var wh = ['width', 'height'];
  return {
    point: function (itemLayout, selectors, area) {
      if (itemLayout) {
        var range = area.range;
        var p = itemLayout[xyIndex];
        return inLineRange(p, range);
      }
    },
    rect: function (itemLayout, selectors, area) {
      if (itemLayout) {
        var range = area.range;
        var layoutRange = [itemLayout[xy[xyIndex]], itemLayout[xy[xyIndex]] + itemLayout[wh[xyIndex]]];
        layoutRange[1] < layoutRange[0] && layoutRange.reverse();
        return inLineRange(layoutRange[0], range) || inLineRange(layoutRange[1], range) || inLineRange(range[0], layoutRange) || inLineRange(range[1], layoutRange);
      }
    }
  };
}
function inLineRange(p, range) {
  return range[0] <= p && p <= range[1];
}
/* ESM default export */ var selector = (selector_selector);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/throttle.js
var throttle = __webpack_require__(26069);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/BrushTargetManager.js
var BrushTargetManager = __webpack_require__(2190);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/brush/visualEncoding.js

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






var STATE_LIST = ['inBrush', 'outOfBrush'];
var DISPATCH_METHOD = '__ecBrushSelect';
var DISPATCH_FLAG = '__ecInBrushSelectEvent';
;
function layoutCovers(ecModel) {
  ecModel.eachComponent({
    mainType: 'brush'
  }, function (brushModel) {
    var brushTargetManager = brushModel.brushTargetManager = new BrushTargetManager["default"](brushModel.option, ecModel);
    brushTargetManager.setInputRanges(brushModel.areas, ecModel);
  });
}
/**
 * Register the visual encoding if this modules required.
 */
function brushVisual(ecModel, api, payload) {
  var brushSelected = [];
  var throttleType;
  var throttleDelay;
  ecModel.eachComponent({
    mainType: 'brush'
  }, function (brushModel) {
    payload && payload.type === 'takeGlobalCursor' && brushModel.setBrushOption(payload.key === 'brush' ? payload.brushOption : {
      brushType: false
    });
  });
  layoutCovers(ecModel);
  ecModel.eachComponent({
    mainType: 'brush'
  }, function (brushModel, brushIndex) {
    var thisBrushSelected = {
      brushId: brushModel.id,
      brushIndex: brushIndex,
      brushName: brushModel.name,
      areas: util.clone(brushModel.areas),
      selected: []
    };
    // Every brush component exists in event params, convenient
    // for user to find by index.
    brushSelected.push(thisBrushSelected);
    var brushOption = brushModel.option;
    var brushLink = brushOption.brushLink;
    var linkedSeriesMap = [];
    var selectedDataIndexForLink = [];
    var rangeInfoBySeries = [];
    var hasBrushExists = false;
    if (!brushIndex) {
      // Only the first throttle setting works.
      throttleType = brushOption.throttleType;
      throttleDelay = brushOption.throttleDelay;
    }
    // Add boundingRect and selectors to range.
    var areas = util.map(brushModel.areas, function (area) {
      var builder = boundingRectBuilders[area.brushType];
      var selectableArea = util.defaults({
        boundingRect: builder ? builder(area) : void 0
      }, area);
      selectableArea.selectors = makeBrushCommonSelectorForSeries(selectableArea);
      return selectableArea;
    });
    var visualMappings = visualSolution.createVisualMappings(brushModel.option, STATE_LIST, function (mappingOption) {
      mappingOption.mappingMethod = 'fixed';
    });
    util.isArray(brushLink) && util.each(brushLink, function (seriesIndex) {
      linkedSeriesMap[seriesIndex] = 1;
    });
    function linkOthers(seriesIndex) {
      return brushLink === 'all' || !!linkedSeriesMap[seriesIndex];
    }
    // If no supported brush or no brush on the series,
    // all visuals should be in original state.
    function brushed(rangeInfoList) {
      return !!rangeInfoList.length;
    }
    /**
     * Logic for each series: (If the logic has to be modified one day, do it carefully!)
     *
     * ( brushed ┬ && ┬hasBrushExist ┬ && linkOthers  ) => StepA: ┬record, ┬ StepB: ┬visualByRecord.
     *   !brushed┘    ├hasBrushExist ┤                            └nothing,┘        ├visualByRecord.
     *                └!hasBrushExist┘                                              └nothing.
     * ( !brushed  && ┬hasBrushExist ┬ && linkOthers  ) => StepA:  nothing,  StepB: ┬visualByRecord.
     *                └!hasBrushExist┘                                              └nothing.
     * ( brushed ┬ &&                     !linkOthers ) => StepA:  nothing,  StepB: ┬visualByCheck.
     *   !brushed┘                                                                  └nothing.
     * ( !brushed  &&                     !linkOthers ) => StepA:  nothing,  StepB:  nothing.
     */
    // Step A
    ecModel.eachSeries(function (seriesModel, seriesIndex) {
      var rangeInfoList = rangeInfoBySeries[seriesIndex] = [];
      seriesModel.subType === 'parallel' ? stepAParallel(seriesModel, seriesIndex) : stepAOthers(seriesModel, seriesIndex, rangeInfoList);
    });
    function stepAParallel(seriesModel, seriesIndex) {
      var coordSys = seriesModel.coordinateSystem;
      hasBrushExists = hasBrushExists || coordSys.hasAxisBrushed();
      linkOthers(seriesIndex) && coordSys.eachActiveState(seriesModel.getData(), function (activeState, dataIndex) {
        activeState === 'active' && (selectedDataIndexForLink[dataIndex] = 1);
      });
    }
    function stepAOthers(seriesModel, seriesIndex, rangeInfoList) {
      if (!seriesModel.brushSelector || brushModelNotControll(brushModel, seriesIndex)) {
        return;
      }
      util.each(areas, function (area) {
        if (brushModel.brushTargetManager.controlSeries(area, seriesModel, ecModel)) {
          rangeInfoList.push(area);
        }
        hasBrushExists = hasBrushExists || brushed(rangeInfoList);
      });
      if (linkOthers(seriesIndex) && brushed(rangeInfoList)) {
        var data_1 = seriesModel.getData();
        data_1.each(function (dataIndex) {
          if (checkInRange(seriesModel, rangeInfoList, data_1, dataIndex)) {
            selectedDataIndexForLink[dataIndex] = 1;
          }
        });
      }
    }
    // Step B
    ecModel.eachSeries(function (seriesModel, seriesIndex) {
      var seriesBrushSelected = {
        seriesId: seriesModel.id,
        seriesIndex: seriesIndex,
        seriesName: seriesModel.name,
        dataIndex: []
      };
      // Every series exists in event params, convenient
      // for user to find series by seriesIndex.
      thisBrushSelected.selected.push(seriesBrushSelected);
      var rangeInfoList = rangeInfoBySeries[seriesIndex];
      var data = seriesModel.getData();
      var getValueState = linkOthers(seriesIndex) ? function (dataIndex) {
        return selectedDataIndexForLink[dataIndex] ? (seriesBrushSelected.dataIndex.push(data.getRawIndex(dataIndex)), 'inBrush') : 'outOfBrush';
      } : function (dataIndex) {
        return checkInRange(seriesModel, rangeInfoList, data, dataIndex) ? (seriesBrushSelected.dataIndex.push(data.getRawIndex(dataIndex)), 'inBrush') : 'outOfBrush';
      };
      // If no supported brush or no brush, all visuals are in original state.
      (linkOthers(seriesIndex) ? hasBrushExists : brushed(rangeInfoList)) && visualSolution.applyVisual(STATE_LIST, visualMappings, data, getValueState);
    });
  });
  dispatchAction(api, throttleType, throttleDelay, brushSelected, payload);
}
;
function dispatchAction(api, throttleType, throttleDelay, brushSelected, payload) {
  // This event will not be triggered when `setOpion`, otherwise dead lock may
  // triggered when do `setOption` in event listener, which we do not find
  // satisfactory way to solve yet. Some considered resolutions:
  // (a) Diff with prevoius selected data ant only trigger event when changed.
  // But store previous data and diff precisely (i.e., not only by dataIndex, but
  // also detect value changes in selected data) might bring complexity or fragility.
  // (b) Use spectial param like `silent` to suppress event triggering.
  // But such kind of volatile param may be weird in `setOption`.
  if (!payload) {
    return;
  }
  var zr = api.getZr();
  if (zr[DISPATCH_FLAG]) {
    return;
  }
  if (!zr[DISPATCH_METHOD]) {
    zr[DISPATCH_METHOD] = doDispatch;
  }
  var fn = throttle.createOrUpdate(zr, DISPATCH_METHOD, throttleDelay, throttleType);
  fn(api, brushSelected);
}
function doDispatch(api, brushSelected) {
  if (!api.isDisposed()) {
    var zr = api.getZr();
    zr[DISPATCH_FLAG] = true;
    api.dispatchAction({
      type: 'brushSelect',
      batch: brushSelected
    });
    zr[DISPATCH_FLAG] = false;
  }
}
function checkInRange(seriesModel, rangeInfoList, data, dataIndex) {
  for (var i = 0, len = rangeInfoList.length; i < len; i++) {
    var area = rangeInfoList[i];
    if (seriesModel.brushSelector(dataIndex, data, area.selectors, area)) {
      return true;
    }
  }
}
function brushModelNotControll(brushModel, seriesIndex) {
  var seriesIndices = brushModel.option.seriesIndex;
  return seriesIndices != null && seriesIndices !== 'all' && (util.isArray(seriesIndices) ? util.indexOf(seriesIndices, seriesIndex) < 0 : seriesIndex !== seriesIndices);
}
var boundingRectBuilders = {
  rect: function (area) {
    return getBoundingRectFromMinMax(area.range);
  },
  polygon: function (area) {
    var minMax;
    var range = area.range;
    for (var i = 0, len = range.length; i < len; i++) {
      minMax = minMax || [[Infinity, -Infinity], [Infinity, -Infinity]];
      var rg = range[i];
      rg[0] < minMax[0][0] && (minMax[0][0] = rg[0]);
      rg[0] > minMax[0][1] && (minMax[0][1] = rg[0]);
      rg[1] < minMax[1][0] && (minMax[1][0] = rg[1]);
      rg[1] > minMax[1][1] && (minMax[1][1] = rg[1]);
    }
    return minMax && getBoundingRectFromMinMax(minMax);
  }
};
function getBoundingRectFromMinMax(minMax) {
  return new BoundingRect["default"](minMax[0][0], minMax[1][0], minMax[0][1] - minMax[0][0], minMax[1][1] - minMax[1][0]);
}
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Component.js
var Component = __webpack_require__(64989);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/brush/BrushView.js

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





var BrushView_BrushView = /** @class */function (_super) {
  (0,tslib_es6.__extends)(BrushView, _super);
  function BrushView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = BrushView.type;
    return _this;
  }
  BrushView.prototype.init = function (ecModel, api) {
    this.ecModel = ecModel;
    this.api = api;
    this.model;
    (this._brushController = new BrushController["default"](api.getZr())).on('brush', util.bind(this._onBrush, this)).mount();
  };
  BrushView.prototype.render = function (brushModel, ecModel, api, payload) {
    this.model = brushModel;
    this._updateController(brushModel, ecModel, api, payload);
  };
  BrushView.prototype.updateTransform = function (brushModel, ecModel, api, payload) {
    // PENDING: `updateTransform` is a little tricky, whose layout need
    // to be calculate mandatorily and other stages will not be performed.
    // Take care the correctness of the logic. See #11754 .
    layoutCovers(ecModel);
    this._updateController(brushModel, ecModel, api, payload);
  };
  BrushView.prototype.updateVisual = function (brushModel, ecModel, api, payload) {
    this.updateTransform(brushModel, ecModel, api, payload);
  };
  BrushView.prototype.updateView = function (brushModel, ecModel, api, payload) {
    this._updateController(brushModel, ecModel, api, payload);
  };
  BrushView.prototype._updateController = function (brushModel, ecModel, api, payload) {
    // Do not update controller when drawing.
    (!payload || payload.$from !== brushModel.id) && this._brushController.setPanels(brushModel.brushTargetManager.makePanelOpts(api)).enableBrush(brushModel.brushOption).updateCovers(brushModel.areas.slice());
  };
  // updateLayout: updateController,
  // updateVisual: updateController,
  BrushView.prototype.dispose = function () {
    this._brushController.dispose();
  };
  BrushView.prototype._onBrush = function (eventParam) {
    var modelId = this.model.id;
    var areas = this.model.brushTargetManager.setOutputRanges(eventParam.areas, this.ecModel);
    // Action is not dispatched on drag end, because the drag end
    // emits the same params with the last drag move event, and
    // may have some delay when using touch pad, which makes
    // animation not smooth (when using debounce).
    (!eventParam.isEnd || eventParam.removeOnClick) && this.api.dispatchAction({
      type: 'brush',
      brushId: modelId,
      areas: util.clone(areas),
      $from: modelId
    });
    eventParam.isEnd && this.api.dispatchAction({
      type: 'brushEnd',
      brushId: modelId,
      areas: util.clone(areas),
      $from: modelId
    });
  };
  BrushView.type = 'brush';
  return BrushView;
}(Component["default"]);
/* ESM default export */ var brush_BrushView = (BrushView_BrushView);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Model.js + 2 modules
var Model = __webpack_require__(40064);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Component.js
var model_Component = __webpack_require__(81757);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/tokens.js
var tokens = __webpack_require__(23430);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/brush/BrushModel.js

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






var BrushModel_BrushModel = /** @class */function (_super) {
  (0,tslib_es6.__extends)(BrushModel, _super);
  function BrushModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = BrushModel.type;
    /**
     * @readOnly
     */
    _this.areas = [];
    /**
     * Current brush painting area settings.
     * @readOnly
     */
    _this.brushOption = {};
    return _this;
  }
  BrushModel.prototype.optionUpdated = function (newOption, isInit) {
    var thisOption = this.option;
    !isInit && visualSolution.replaceVisualOption(thisOption, newOption, ['inBrush', 'outOfBrush']);
    var inBrush = thisOption.inBrush = thisOption.inBrush || {};
    // Always give default visual, consider setOption at the second time.
    thisOption.outOfBrush = thisOption.outOfBrush || {
      color: this.option.defaultOutOfBrushColor
    };
    if (!inBrush.hasOwnProperty('liftZ')) {
      // Bigger than the highlight z lift, otherwise it will
      // be effected by the highlight z when brush.
      inBrush.liftZ = 5;
    }
  };
  /**
   * If `areas` is null/undefined, range state remain.
   */
  BrushModel.prototype.setAreas = function (areas) {
    if (false) {}
    // If areas is null/undefined, range state remain.
    // This helps user to dispatchAction({type: 'brush'}) with no areas
    // set but just want to get the current brush select info from a `brush` event.
    if (!areas) {
      return;
    }
    this.areas = util.map(areas, function (area) {
      return generateBrushOption(this.option, area);
    }, this);
  };
  /**
   * Set the current painting brush option.
   */
  BrushModel.prototype.setBrushOption = function (brushOption) {
    this.brushOption = generateBrushOption(this.option, brushOption);
    this.brushType = this.brushOption.brushType;
  };
  BrushModel.type = 'brush';
  BrushModel.dependencies = ['geo', 'grid', 'xAxis', 'yAxis', 'parallel', 'series'];
  BrushModel.defaultOption = {
    seriesIndex: 'all',
    brushType: 'rect',
    brushMode: 'single',
    transformable: true,
    brushStyle: {
      borderWidth: 1,
      color: tokens["default"].color.backgroundTint,
      borderColor: tokens["default"].color.borderTint
    },
    throttleType: 'fixRate',
    throttleDelay: 0,
    removeOnClick: true,
    z: 10000,
    defaultOutOfBrushColor: tokens["default"].color.disabled
  };
  return BrushModel;
}(model_Component["default"]);
function generateBrushOption(option, brushOption) {
  return util.merge({
    brushType: option.brushType,
    brushMode: option.brushMode,
    transformable: option.transformable,
    brushStyle: new Model["default"](option.brushStyle).getItemStyle(),
    removeOnClick: option.removeOnClick,
    z: option.z
  }, brushOption, true);
}
/* ESM default export */ var brush_BrushModel = (BrushModel_BrushModel);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/toolbox/feature/Brush.js
var Brush = __webpack_require__(28773);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/toolbox/featureManager.js
var featureManager = __webpack_require__(14851);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/brush/install.js

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




// TODO



function install(registers) {
  registers.registerComponentView(brush_BrushView);
  registers.registerComponentModel(brush_BrushModel);
  registers.registerPreprocessor(brushPreprocessor);
  registers.registerVisual(registers.PRIORITY.VISUAL.BRUSH, brushVisual);
  registers.registerAction({
    type: 'brush',
    event: 'brush',
    update: 'updateVisual'
  }, function (payload, ecModel) {
    ecModel.eachComponent({
      mainType: 'brush',
      query: payload
    }, function (brushModel) {
      brushModel.setAreas(payload.areas);
    });
  });
  /**
   * payload: {
   *      brushComponents: [
   *          {
   *              brushId,
   *              brushIndex,
   *              brushName,
   *              series: [
   *                  {
   *                      seriesId,
   *                      seriesIndex,
   *                      seriesName,
   *                      rawIndices: [21, 34, ...]
   *                  },
   *                  ...
   *              ]
   *          },
   *          ...
   *      ]
   * }
   */
  registers.registerAction({
    type: 'brushSelect',
    event: 'brushSelected',
    update: 'none'
  }, util.noop);
  registers.registerAction({
    type: 'brushEnd',
    event: 'brushEnd',
    update: 'none'
  }, util.noop);
  (0,featureManager.registerFeature)('brush', Brush["default"]);
}

}),
44484: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  install: function() { return /* binding */ install; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/calendar/CalendarModel.js
var CalendarModel = __webpack_require__(74041);
// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(12012);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(56190);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Rect.js + 1 modules
var Rect = __webpack_require__(68903);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Polyline.js
var Polyline = __webpack_require__(27092);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Text.js
var Text = __webpack_require__(98856);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelStyle.js
var labelStyle = __webpack_require__(57235);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/format.js
var format = __webpack_require__(85774);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(48843);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Component.js
var Component = __webpack_require__(64989);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/core/locale.js
var locale = __webpack_require__(8072);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/calendar/CalendarView.js

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








var CalendarView_CalendarView = /** @class */function (_super) {
  (0,tslib_es6.__extends)(CalendarView, _super);
  function CalendarView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = CalendarView.type;
    return _this;
  }
  CalendarView.prototype.render = function (calendarModel, ecModel, api) {
    var group = this.group;
    group.removeAll();
    var coordSys = calendarModel.coordinateSystem;
    // range info
    var rangeData = coordSys.getRangeInfo();
    var orient = coordSys.getOrient();
    // locale
    var localeModel = ecModel.getLocaleModel();
    this._renderDayRect(calendarModel, rangeData, group);
    // _renderLines must be called prior to following function
    this._renderLines(calendarModel, rangeData, orient, group);
    this._renderYearText(calendarModel, rangeData, orient, group);
    this._renderMonthText(calendarModel, localeModel, orient, group);
    this._renderWeekText(calendarModel, localeModel, rangeData, orient, group);
  };
  // render day rect
  CalendarView.prototype._renderDayRect = function (calendarModel, rangeData, group) {
    var coordSys = calendarModel.coordinateSystem;
    var itemRectStyleModel = calendarModel.getModel('itemStyle').getItemStyle();
    var sw = coordSys.getCellWidth();
    var sh = coordSys.getCellHeight();
    for (var i = rangeData.start.time; i <= rangeData.end.time; i = coordSys.getNextNDay(i, 1).time) {
      var point = coordSys.dataToCalendarLayout([i], false).tl;
      // every rect
      var rect = new Rect["default"]({
        shape: {
          x: point[0],
          y: point[1],
          width: sw,
          height: sh
        },
        cursor: 'default',
        style: itemRectStyleModel
      });
      group.add(rect);
    }
  };
  // render separate line
  CalendarView.prototype._renderLines = function (calendarModel, rangeData, orient, group) {
    var self = this;
    var coordSys = calendarModel.coordinateSystem;
    var lineStyleModel = calendarModel.getModel(['splitLine', 'lineStyle']).getLineStyle();
    var show = calendarModel.get(['splitLine', 'show']);
    var lineWidth = lineStyleModel.lineWidth;
    this._tlpoints = [];
    this._blpoints = [];
    this._firstDayOfMonth = [];
    this._firstDayPoints = [];
    var firstDay = rangeData.start;
    for (var i = 0; firstDay.time <= rangeData.end.time; i++) {
      addPoints(firstDay.formatedDate);
      if (i === 0) {
        firstDay = coordSys.getDateInfo(rangeData.start.y + '-' + rangeData.start.m);
      }
      var date = firstDay.date;
      date.setMonth(date.getMonth() + 1);
      firstDay = coordSys.getDateInfo(date);
    }
    addPoints(coordSys.getNextNDay(rangeData.end.time, 1).formatedDate);
    function addPoints(date) {
      self._firstDayOfMonth.push(coordSys.getDateInfo(date));
      self._firstDayPoints.push(coordSys.dataToCalendarLayout([date], false).tl);
      var points = self._getLinePointsOfOneWeek(calendarModel, date, orient);
      self._tlpoints.push(points[0]);
      self._blpoints.push(points[points.length - 1]);
      show && self._drawSplitline(points, lineStyleModel, group);
    }
    // render top/left line
    show && this._drawSplitline(self._getEdgesPoints(self._tlpoints, lineWidth, orient), lineStyleModel, group);
    // render bottom/right line
    show && this._drawSplitline(self._getEdgesPoints(self._blpoints, lineWidth, orient), lineStyleModel, group);
  };
  // get points at both ends
  CalendarView.prototype._getEdgesPoints = function (points, lineWidth, orient) {
    var rs = [points[0].slice(), points[points.length - 1].slice()];
    var idx = orient === 'horizontal' ? 0 : 1;
    // both ends of the line are extend half lineWidth
    rs[0][idx] = rs[0][idx] - lineWidth / 2;
    rs[1][idx] = rs[1][idx] + lineWidth / 2;
    return rs;
  };
  // render split line
  CalendarView.prototype._drawSplitline = function (points, lineStyle, group) {
    var poyline = new Polyline["default"]({
      z2: 20,
      shape: {
        points: points
      },
      style: lineStyle
    });
    group.add(poyline);
  };
  // render month line of one week points
  CalendarView.prototype._getLinePointsOfOneWeek = function (calendarModel, date, orient) {
    var coordSys = calendarModel.coordinateSystem;
    var parsedDate = coordSys.getDateInfo(date);
    var points = [];
    for (var i = 0; i < 7; i++) {
      var tmpD = coordSys.getNextNDay(parsedDate.time, i);
      var point = coordSys.dataToCalendarLayout([tmpD.time], false);
      points[2 * tmpD.day] = point.tl;
      points[2 * tmpD.day + 1] = point[orient === 'horizontal' ? 'bl' : 'tr'];
    }
    return points;
  };
  CalendarView.prototype._formatterLabel = function (formatter, params) {
    if ((0,util.isString)(formatter) && formatter) {
      return (0,format.formatTplSimple)(formatter, params);
    }
    if ((0,util.isFunction)(formatter)) {
      return formatter(params);
    }
    return params.nameMap;
  };
  CalendarView.prototype._yearTextPositionControl = function (textEl, point, orient, position, margin) {
    var x = point[0];
    var y = point[1];
    var aligns = ['center', 'bottom'];
    if (position === 'bottom') {
      y += margin;
      aligns = ['center', 'top'];
    } else if (position === 'left') {
      x -= margin;
    } else if (position === 'right') {
      x += margin;
      aligns = ['center', 'top'];
    } else {
      // top
      y -= margin;
    }
    var rotate = 0;
    if (position === 'left' || position === 'right') {
      rotate = Math.PI / 2;
    }
    return {
      rotation: rotate,
      x: x,
      y: y,
      style: {
        align: aligns[0],
        verticalAlign: aligns[1]
      }
    };
  };
  // render year
  CalendarView.prototype._renderYearText = function (calendarModel, rangeData, orient, group) {
    var yearLabel = calendarModel.getModel('yearLabel');
    if (!yearLabel.get('show')) {
      return;
    }
    var margin = yearLabel.get('margin');
    var pos = yearLabel.get('position');
    if (!pos) {
      pos = orient !== 'horizontal' ? 'top' : 'left';
    }
    var points = [this._tlpoints[this._tlpoints.length - 1], this._blpoints[0]];
    var xc = (points[0][0] + points[1][0]) / 2;
    var yc = (points[0][1] + points[1][1]) / 2;
    var idx = orient === 'horizontal' ? 0 : 1;
    var posPoints = {
      top: [xc, points[idx][1]],
      bottom: [xc, points[1 - idx][1]],
      left: [points[1 - idx][0], yc],
      right: [points[idx][0], yc]
    };
    var name = rangeData.start.y;
    if (+rangeData.end.y > +rangeData.start.y) {
      name = name + '-' + rangeData.end.y;
    }
    var formatter = yearLabel.get('formatter');
    var params = {
      start: rangeData.start.y,
      end: rangeData.end.y,
      nameMap: name
    };
    var content = this._formatterLabel(formatter, params);
    var yearText = new Text["default"]({
      z2: 30,
      style: (0,labelStyle.createTextStyle)(yearLabel, {
        text: content
      }),
      silent: yearLabel.get('silent')
    });
    yearText.attr(this._yearTextPositionControl(yearText, posPoints[pos], orient, pos, margin));
    group.add(yearText);
  };
  CalendarView.prototype._monthTextPositionControl = function (point, isCenter, orient, position, margin) {
    var align = 'left';
    var vAlign = 'top';
    var x = point[0];
    var y = point[1];
    if (orient === 'horizontal') {
      y = y + margin;
      if (isCenter) {
        align = 'center';
      }
      if (position === 'start') {
        vAlign = 'bottom';
      }
    } else {
      x = x + margin;
      if (isCenter) {
        vAlign = 'middle';
      }
      if (position === 'start') {
        align = 'right';
      }
    }
    return {
      x: x,
      y: y,
      align: align,
      verticalAlign: vAlign
    };
  };
  // render month and year text
  CalendarView.prototype._renderMonthText = function (calendarModel, localeModel, orient, group) {
    var monthLabel = calendarModel.getModel('monthLabel');
    if (!monthLabel.get('show')) {
      return;
    }
    var nameMap = monthLabel.get('nameMap');
    var margin = monthLabel.get('margin');
    var pos = monthLabel.get('position');
    var align = monthLabel.get('align');
    var termPoints = [this._tlpoints, this._blpoints];
    if (!nameMap || (0,util.isString)(nameMap)) {
      if (nameMap) {
        // case-sensitive
        localeModel = (0,locale.getLocaleModel)(nameMap) || localeModel;
      }
      // PENDING
      // for ZH locale, original form is `一月` but current form is `1月`
      nameMap = localeModel.get(['time', 'monthAbbr']) || [];
    }
    var idx = pos === 'start' ? 0 : 1;
    var axis = orient === 'horizontal' ? 0 : 1;
    margin = pos === 'start' ? -margin : margin;
    var isCenter = align === 'center';
    var labelSilent = monthLabel.get('silent');
    for (var i = 0; i < termPoints[idx].length - 1; i++) {
      var tmp = termPoints[idx][i].slice();
      var firstDay = this._firstDayOfMonth[i];
      if (isCenter) {
        var firstDayPoints = this._firstDayPoints[i];
        tmp[axis] = (firstDayPoints[axis] + termPoints[0][i + 1][axis]) / 2;
      }
      var formatter = monthLabel.get('formatter');
      var name_1 = nameMap[+firstDay.m - 1];
      var params = {
        yyyy: firstDay.y,
        yy: (firstDay.y + '').slice(2),
        MM: firstDay.m,
        M: +firstDay.m,
        nameMap: name_1
      };
      var content = this._formatterLabel(formatter, params);
      var monthText = new Text["default"]({
        z2: 30,
        style: (0,util.extend)((0,labelStyle.createTextStyle)(monthLabel, {
          text: content
        }), this._monthTextPositionControl(tmp, isCenter, orient, pos, margin)),
        silent: labelSilent
      });
      group.add(monthText);
    }
  };
  CalendarView.prototype._weekTextPositionControl = function (point, orient, position, margin, cellSize) {
    var align = 'center';
    var vAlign = 'middle';
    var x = point[0];
    var y = point[1];
    var isStart = position === 'start';
    if (orient === 'horizontal') {
      x = x + margin + (isStart ? 1 : -1) * cellSize[0] / 2;
      align = isStart ? 'right' : 'left';
    } else {
      y = y + margin + (isStart ? 1 : -1) * cellSize[1] / 2;
      vAlign = isStart ? 'bottom' : 'top';
    }
    return {
      x: x,
      y: y,
      align: align,
      verticalAlign: vAlign
    };
  };
  // render weeks
  CalendarView.prototype._renderWeekText = function (calendarModel, localeModel, rangeData, orient, group) {
    var dayLabel = calendarModel.getModel('dayLabel');
    if (!dayLabel.get('show')) {
      return;
    }
    var coordSys = calendarModel.coordinateSystem;
    var pos = dayLabel.get('position');
    var nameMap = dayLabel.get('nameMap');
    var margin = dayLabel.get('margin');
    var firstDayOfWeek = coordSys.getFirstDayOfWeek();
    if (!nameMap || (0,util.isString)(nameMap)) {
      if (nameMap) {
        // case-sensitive
        localeModel = (0,locale.getLocaleModel)(nameMap) || localeModel;
      }
      // Use the first letter of `dayOfWeekAbbr` if `dayOfWeekShort` doesn't exist in the locale file
      var dayOfWeekShort = localeModel.get(['time', 'dayOfWeekShort']);
      nameMap = dayOfWeekShort || (0,util.map)(localeModel.get(['time', 'dayOfWeekAbbr']), function (val) {
        return val[0];
      });
    }
    var start = coordSys.getNextNDay(rangeData.end.time, 7 - rangeData.lweek).time;
    var cellSize = [coordSys.getCellWidth(), coordSys.getCellHeight()];
    margin = (0,number.parsePercent)(margin, Math.min(cellSize[1], cellSize[0]));
    if (pos === 'start') {
      start = coordSys.getNextNDay(rangeData.start.time, -(7 + rangeData.fweek)).time;
      margin = -margin;
    }
    var labelSilent = dayLabel.get('silent');
    for (var i = 0; i < 7; i++) {
      var tmpD = coordSys.getNextNDay(start, i);
      var point = coordSys.dataToCalendarLayout([tmpD.time], false).center;
      var day = i;
      day = Math.abs((i + firstDayOfWeek) % 7);
      var weekText = new Text["default"]({
        z2: 30,
        style: (0,util.extend)((0,labelStyle.createTextStyle)(dayLabel, {
          text: nameMap[day]
        }), this._weekTextPositionControl(point, orient, pos, margin, cellSize)),
        silent: labelSilent
      });
      group.add(weekText);
    }
  };
  CalendarView.type = 'calendar';
  return CalendarView;
}(Component["default"]);
/* ESM default export */ var calendar_CalendarView = (CalendarView_CalendarView);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/calendar/Calendar.js
var Calendar = __webpack_require__(5708);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/calendar/install.js

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
  registers.registerComponentModel(CalendarModel["default"]);
  registers.registerComponentView(calendar_CalendarView);
  registers.registerCoordinateSystem('calendar', Calendar["default"]);
}

}),
29869: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56190);
/* ESM import */var _model_Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81757);
/* ESM import */var _helper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80018);
/* ESM import */var _util_model_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44244);

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





var DataZoomAxisInfo = /** @class */function () {
  function DataZoomAxisInfo() {
    this.indexList = [];
    this.indexMap = [];
  }
  DataZoomAxisInfo.prototype.add = function (axisCmptIdx) {
    // Remove duplication.
    if (!this.indexMap[axisCmptIdx]) {
      this.indexList.push(axisCmptIdx);
      this.indexMap[axisCmptIdx] = true;
    }
  };
  return DataZoomAxisInfo;
}();
var DataZoomModel = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(DataZoomModel, _super);
  function DataZoomModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = DataZoomModel.type;
    _this._autoThrottle = true;
    _this._noTarget = true;
    /**
     * It is `[rangeModeForMin, rangeModeForMax]`.
     * The optional values for `rangeMode`:
     * + `'value'` mode: the axis extent will always be determined by
     *     `dataZoom.startValue` and `dataZoom.endValue`, despite
     *     how data like and how `axis.min` and `axis.max` are.
     * + `'percent'` mode: `100` represents 100% of the `[dMin, dMax]`,
     *     where `dMin` is `axis.min` if `axis.min` specified, otherwise `data.extent[0]`,
     *     and `dMax` is `axis.max` if `axis.max` specified, otherwise `data.extent[1]`.
     *     Axis extent will be determined by the result of the percent of `[dMin, dMax]`.
     *
     * For example, when users are using dynamic data (update data periodically via `setOption`),
     * if in `'value`' mode, the window will be kept in a fixed value range despite how
     * data are appended, while if in `'percent'` mode, whe window range will be changed alone with
     * the appended data (suppose `axis.min` and `axis.max` are not specified).
     */
    _this._rangePropMode = ['percent', 'percent'];
    return _this;
  }
  DataZoomModel.prototype.init = function (option, parentModel, ecModel) {
    var inputRawOption = retrieveRawOption(option);
    /**
     * Suppose a "main process" start at the point that model prepared (that is,
     * model initialized or merged or method called in `action`).
     * We should keep the `main process` idempotent, that is, given a set of values
     * on `option`, we get the same result.
     *
     * But sometimes, values on `option` will be updated for providing users
     * a "final calculated value" (`dataZoomProcessor` will do that). Those value
     * should not be the base/input of the `main process`.
     *
     * So in that case we should save and keep the input of the `main process`
     * separately, called `settledOption`.
     *
     * For example, consider the case:
     * (Step_1) brush zoom the grid by `toolbox.dataZoom`,
     *     where the original input `option.startValue`, `option.endValue` are earsed by
     *     calculated value.
     * (Step)2) click the legend to hide and show a series,
     *     where the new range is calculated by the earsed `startValue` and `endValue`,
     *     which brings incorrect result.
     */
    this.settledOption = inputRawOption;
    this.mergeDefaultAndTheme(option, ecModel);
    this._doInit(inputRawOption);
  };
  DataZoomModel.prototype.mergeOption = function (newOption) {
    var inputRawOption = retrieveRawOption(newOption);
    // FIX #2591
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.merge)(this.option, newOption, true);
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.merge)(this.settledOption, inputRawOption, true);
    this._doInit(inputRawOption);
  };
  DataZoomModel.prototype._doInit = function (inputRawOption) {
    var thisOption = this.option;
    this._setDefaultThrottle(inputRawOption);
    this._updateRangeUse(inputRawOption);
    var settledOption = this.settledOption;
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.each)([['start', 'startValue'], ['end', 'endValue']], function (names, index) {
      // start/end has higher priority over startValue/endValue if they
      // both set, but we should make chart.setOption({endValue: 1000})
      // effective, rather than chart.setOption({endValue: 1000, end: null}).
      if (this._rangePropMode[index] === 'value') {
        thisOption[names[0]] = settledOption[names[0]] = null;
      }
      // Otherwise do nothing and use the merge result.
    }, this);
    this._resetTarget();
  };
  DataZoomModel.prototype._resetTarget = function () {
    var optionOrient = this.get('orient', true);
    var targetAxisIndexMap = this._targetAxisInfoMap = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.createHashMap)();
    var hasAxisSpecified = this._fillSpecifiedTargetAxis(targetAxisIndexMap);
    if (hasAxisSpecified) {
      this._orient = optionOrient || this._makeAutoOrientByTargetAxis();
    } else {
      this._orient = optionOrient || 'horizontal';
      this._fillAutoTargetAxisByOrient(targetAxisIndexMap, this._orient);
    }
    this._noTarget = true;
    targetAxisIndexMap.each(function (axisInfo) {
      if (axisInfo.indexList.length) {
        this._noTarget = false;
      }
    }, this);
  };
  DataZoomModel.prototype._fillSpecifiedTargetAxis = function (targetAxisIndexMap) {
    var hasAxisSpecified = false;
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.each)(_helper_js__WEBPACK_IMPORTED_MODULE_3__.DATA_ZOOM_AXIS_DIMENSIONS, function (axisDim) {
      var refering = this.getReferringComponents((0,_helper_js__WEBPACK_IMPORTED_MODULE_3__.getAxisMainType)(axisDim), _util_model_js__WEBPACK_IMPORTED_MODULE_4__.MULTIPLE_REFERRING);
      // When user set axisIndex as a empty array, we think that user specify axisIndex
      // but do not want use auto mode. Because empty array may be encountered when
      // some error occurred.
      if (!refering.specified) {
        return;
      }
      hasAxisSpecified = true;
      var axisInfo = new DataZoomAxisInfo();
      (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.each)(refering.models, function (axisModel) {
        axisInfo.add(axisModel.componentIndex);
      });
      targetAxisIndexMap.set(axisDim, axisInfo);
    }, this);
    return hasAxisSpecified;
  };
  DataZoomModel.prototype._fillAutoTargetAxisByOrient = function (targetAxisIndexMap, orient) {
    var ecModel = this.ecModel;
    var needAuto = true;
    // Find axis that parallel to dataZoom as default.
    if (needAuto) {
      var axisDim = orient === 'vertical' ? 'y' : 'x';
      var axisModels = ecModel.findComponents({
        mainType: axisDim + 'Axis'
      });
      setParallelAxis(axisModels, axisDim);
    }
    // Find axis that parallel to dataZoom as default.
    if (needAuto) {
      var axisModels = ecModel.findComponents({
        mainType: 'singleAxis',
        filter: function (axisModel) {
          return axisModel.get('orient', true) === orient;
        }
      });
      setParallelAxis(axisModels, 'single');
    }
    function setParallelAxis(axisModels, axisDim) {
      // At least use the first parallel axis as the target axis.
      var axisModel = axisModels[0];
      if (!axisModel) {
        return;
      }
      var axisInfo = new DataZoomAxisInfo();
      axisInfo.add(axisModel.componentIndex);
      targetAxisIndexMap.set(axisDim, axisInfo);
      needAuto = false;
      // Find parallel axes in the same grid.
      if (axisDim === 'x' || axisDim === 'y') {
        var gridModel_1 = axisModel.getReferringComponents('grid', _util_model_js__WEBPACK_IMPORTED_MODULE_4__.SINGLE_REFERRING).models[0];
        gridModel_1 && (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.each)(axisModels, function (axModel) {
          if (axisModel.componentIndex !== axModel.componentIndex && gridModel_1 === axModel.getReferringComponents('grid', _util_model_js__WEBPACK_IMPORTED_MODULE_4__.SINGLE_REFERRING).models[0]) {
            axisInfo.add(axModel.componentIndex);
          }
        });
      }
    }
    if (needAuto) {
      // If no parallel axis, find the first category axis as default. (Also consider polar).
      (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.each)(_helper_js__WEBPACK_IMPORTED_MODULE_3__.DATA_ZOOM_AXIS_DIMENSIONS, function (axisDim) {
        if (!needAuto) {
          return;
        }
        var axisModels = ecModel.findComponents({
          mainType: (0,_helper_js__WEBPACK_IMPORTED_MODULE_3__.getAxisMainType)(axisDim),
          filter: function (axisModel) {
            return axisModel.get('type', true) === 'category';
          }
        });
        if (axisModels[0]) {
          var axisInfo = new DataZoomAxisInfo();
          axisInfo.add(axisModels[0].componentIndex);
          targetAxisIndexMap.set(axisDim, axisInfo);
          needAuto = false;
        }
      }, this);
    }
  };
  DataZoomModel.prototype._makeAutoOrientByTargetAxis = function () {
    var dim;
    // Find the first axis
    this.eachTargetAxis(function (axisDim) {
      !dim && (dim = axisDim);
    }, this);
    return dim === 'y' ? 'vertical' : 'horizontal';
  };
  DataZoomModel.prototype._setDefaultThrottle = function (inputRawOption) {
    // When first time user set throttle, auto throttle ends.
    if (inputRawOption.hasOwnProperty('throttle')) {
      this._autoThrottle = false;
    }
    if (this._autoThrottle) {
      var globalOption = this.ecModel.option;
      this.option.throttle = globalOption.animation && globalOption.animationDurationUpdate > 0 ? 100 : 20;
    }
  };
  DataZoomModel.prototype._updateRangeUse = function (inputRawOption) {
    var rangePropMode = this._rangePropMode;
    var rangeModeInOption = this.get('rangeMode');
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.each)([['start', 'startValue'], ['end', 'endValue']], function (names, index) {
      var percentSpecified = inputRawOption[names[0]] != null;
      var valueSpecified = inputRawOption[names[1]] != null;
      if (percentSpecified && !valueSpecified) {
        rangePropMode[index] = 'percent';
      } else if (!percentSpecified && valueSpecified) {
        rangePropMode[index] = 'value';
      } else if (rangeModeInOption) {
        rangePropMode[index] = rangeModeInOption[index];
      } else if (percentSpecified) {
        // percentSpecified && valueSpecified
        rangePropMode[index] = 'percent';
      }
      // else remain its original setting.
    });
  };
  DataZoomModel.prototype.noTarget = function () {
    return this._noTarget;
  };
  DataZoomModel.prototype.getFirstTargetAxisModel = function () {
    var firstAxisModel;
    this.eachTargetAxis(function (axisDim, axisIndex) {
      if (firstAxisModel == null) {
        firstAxisModel = this.ecModel.getComponent((0,_helper_js__WEBPACK_IMPORTED_MODULE_3__.getAxisMainType)(axisDim), axisIndex);
      }
    }, this);
    return firstAxisModel;
  };
  /**
   * @param {Function} callback param: axisModel, dimNames, axisIndex, dataZoomModel, ecModel
   */
  DataZoomModel.prototype.eachTargetAxis = function (callback, context) {
    this._targetAxisInfoMap.each(function (axisInfo, axisDim) {
      (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.each)(axisInfo.indexList, function (axisIndex) {
        callback.call(context, axisDim, axisIndex);
      });
    });
  };
  /**
   * @return If not found, return null/undefined.
   */
  DataZoomModel.prototype.getAxisProxy = function (axisDim, axisIndex) {
    var axisModel = this.getAxisModel(axisDim, axisIndex);
    if (axisModel) {
      return axisModel.__dzAxisProxy;
    }
  };
  /**
   * @return If not found, return null/undefined.
   */
  DataZoomModel.prototype.getAxisModel = function (axisDim, axisIndex) {
    if (false) {}
    var axisInfo = this._targetAxisInfoMap.get(axisDim);
    if (axisInfo && axisInfo.indexMap[axisIndex]) {
      return this.ecModel.getComponent((0,_helper_js__WEBPACK_IMPORTED_MODULE_3__.getAxisMainType)(axisDim), axisIndex);
    }
  };
  /**
   * If not specified, set to undefined.
   */
  DataZoomModel.prototype.setRawRange = function (opt) {
    var thisOption = this.option;
    var settledOption = this.settledOption;
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.each)([['start', 'startValue'], ['end', 'endValue']], function (names) {
      // Consider the pair <start, startValue>:
      // If one has value and the other one is `null/undefined`, we both set them
      // to `settledOption`. This strategy enables the feature to clear the original
      // value in `settledOption` to `null/undefined`.
      // But if both of them are `null/undefined`, we do not set them to `settledOption`
      // and keep `settledOption` with the original value. This strategy enables users to
      // only set <end or endValue> but not set <start or startValue> when calling
      // `dispatchAction`.
      // The pair <end, endValue> is treated in the same way.
      if (opt[names[0]] != null || opt[names[1]] != null) {
        thisOption[names[0]] = settledOption[names[0]] = opt[names[0]];
        thisOption[names[1]] = settledOption[names[1]] = opt[names[1]];
      }
    }, this);
    this._updateRangeUse(opt);
  };
  DataZoomModel.prototype.setCalculatedRange = function (opt) {
    var option = this.option;
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.each)(['start', 'startValue', 'end', 'endValue'], function (name) {
      option[name] = opt[name];
    });
  };
  DataZoomModel.prototype.getPercentRange = function () {
    var axisProxy = this.findRepresentativeAxisProxy();
    if (axisProxy) {
      return axisProxy.getDataPercentWindow();
    }
  };
  /**
   * For example, chart.getModel().getComponent('dataZoom').getValueRange('y', 0);
   *
   * @return [startValue, endValue] value can only be '-' or finite number.
   */
  DataZoomModel.prototype.getValueRange = function (axisDim, axisIndex) {
    if (axisDim == null && axisIndex == null) {
      var axisProxy = this.findRepresentativeAxisProxy();
      if (axisProxy) {
        return axisProxy.getDataValueWindow();
      }
    } else {
      return this.getAxisProxy(axisDim, axisIndex).getDataValueWindow();
    }
  };
  /**
   * @param axisModel If axisModel given, find axisProxy
   *      corresponding to the axisModel
   */
  DataZoomModel.prototype.findRepresentativeAxisProxy = function (axisModel) {
    if (axisModel) {
      return axisModel.__dzAxisProxy;
    }
    // Find the first hosted axisProxy
    var firstProxy;
    var axisDimList = this._targetAxisInfoMap.keys();
    for (var i = 0; i < axisDimList.length; i++) {
      var axisDim = axisDimList[i];
      var axisInfo = this._targetAxisInfoMap.get(axisDim);
      for (var j = 0; j < axisInfo.indexList.length; j++) {
        var proxy = this.getAxisProxy(axisDim, axisInfo.indexList[j]);
        if (proxy.hostedBy(this)) {
          return proxy;
        }
        if (!firstProxy) {
          firstProxy = proxy;
        }
      }
    }
    // If no hosted proxy found, still need to return a proxy.
    // This case always happens in toolbox dataZoom, where axes are all hosted by
    // other dataZooms.
    return firstProxy;
  };
  DataZoomModel.prototype.getRangePropMode = function () {
    return this._rangePropMode.slice();
  };
  DataZoomModel.prototype.getOrient = function () {
    if (false) {}
    return this._orient;
  };
  DataZoomModel.type = 'dataZoom';
  DataZoomModel.dependencies = ['xAxis', 'yAxis', 'radiusAxis', 'angleAxis', 'singleAxis', 'series', 'toolbox'];
  DataZoomModel.defaultOption = {
    // zlevel: 0,
    z: 4,
    filterMode: 'filter',
    start: 0,
    end: 100
  };
  return DataZoomModel;
}(_model_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/**
 * Retrieve those raw params from option, which will be cached separately,
 * because they will be overwritten by normalized/calculated values in the main
 * process.
 */
function retrieveRawOption(option) {
  var ret = {};
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.each)(['start', 'end', 'startValue', 'endValue', 'throttle'], function (name) {
    option.hasOwnProperty(name) && (ret[name] = option[name]);
  });
  return ret;
}
/* ESM default export */ __webpack_exports__["default"] = (DataZoomModel);

}),
43605: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var _view_Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64989);

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


var DataZoomView = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(DataZoomView, _super);
  function DataZoomView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = DataZoomView.type;
    return _this;
  }
  DataZoomView.prototype.render = function (dataZoomModel, ecModel, api, payload) {
    this.dataZoomModel = dataZoomModel;
    this.ecModel = ecModel;
    this.api = api;
  };
  DataZoomView.type = 'dataZoom';
  return DataZoomView;
}(_view_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* ESM default export */ __webpack_exports__["default"] = (DataZoomView);

}),
80018: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DATA_ZOOM_AXIS_DIMENSIONS: function() { return DATA_ZOOM_AXIS_DIMENSIONS; },
  collectReferCoordSysModelInfo: function() { return collectReferCoordSysModelInfo; },
  findEffectedDataZooms: function() { return findEffectedDataZooms; },
  getAxisIdPropName: function() { return getAxisIdPropName; },
  getAxisIndexPropName: function() { return getAxisIndexPropName; },
  getAxisMainType: function() { return getAxisMainType; },
  isCoordSupported: function() { return isCoordSupported; }
});
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56190);

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

var DATA_ZOOM_AXIS_DIMENSIONS = ['x', 'y', 'radius', 'angle', 'single'];
// Supported coords.
// FIXME: polar has been broken (but rarely used).
var SERIES_COORDS = ['cartesian2d', 'polar', 'singleAxis'];
function isCoordSupported(seriesModel) {
  var coordType = seriesModel.get('coordinateSystem');
  return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.indexOf)(SERIES_COORDS, coordType) >= 0;
}
function getAxisMainType(axisDim) {
  if (false) {}
  return axisDim + 'Axis';
}
function getAxisIndexPropName(axisDim) {
  if (false) {}
  return axisDim + 'AxisIndex';
}
function getAxisIdPropName(axisDim) {
  if (false) {}
  return axisDim + 'AxisId';
}
/**
 * If two dataZoomModels has the same axis controlled, we say that they are 'linked'.
 * This function finds all linked dataZoomModels start from the given payload.
 */
function findEffectedDataZooms(ecModel, payload) {
  // Key: `DataZoomAxisDimension`
  var axisRecords = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.createHashMap)();
  var effectedModels = [];
  // Key: uid of dataZoomModel
  var effectedModelMap = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.createHashMap)();
  // Find the dataZooms specified by payload.
  ecModel.eachComponent({
    mainType: 'dataZoom',
    query: payload
  }, function (dataZoomModel) {
    if (!effectedModelMap.get(dataZoomModel.uid)) {
      addToEffected(dataZoomModel);
    }
  });
  // Start from the given dataZoomModels, travel the graph to find
  // all of the linked dataZoom models.
  var foundNewLink;
  do {
    foundNewLink = false;
    ecModel.eachComponent('dataZoom', processSingle);
  } while (foundNewLink);
  function processSingle(dataZoomModel) {
    if (!effectedModelMap.get(dataZoomModel.uid) && isLinked(dataZoomModel)) {
      addToEffected(dataZoomModel);
      foundNewLink = true;
    }
  }
  function addToEffected(dataZoom) {
    effectedModelMap.set(dataZoom.uid, true);
    effectedModels.push(dataZoom);
    markAxisControlled(dataZoom);
  }
  function isLinked(dataZoomModel) {
    var isLink = false;
    dataZoomModel.eachTargetAxis(function (axisDim, axisIndex) {
      var axisIdxArr = axisRecords.get(axisDim);
      if (axisIdxArr && axisIdxArr[axisIndex]) {
        isLink = true;
      }
    });
    return isLink;
  }
  function markAxisControlled(dataZoomModel) {
    dataZoomModel.eachTargetAxis(function (axisDim, axisIndex) {
      (axisRecords.get(axisDim) || axisRecords.set(axisDim, []))[axisIndex] = true;
    });
  }
  return effectedModels;
}
/**
 * Find the first target coordinate system.
 * Available after model built.
 *
 * @return Like {
 *                  grid: [
 *                      {model: coord0, axisModels: [axis1, axis3], coordIndex: 1},
 *                      {model: coord1, axisModels: [axis0, axis2], coordIndex: 0},
 *                      ...
 *                  ],  // cartesians must not be null/undefined.
 *                  polar: [
 *                      {model: coord0, axisModels: [axis4], coordIndex: 0},
 *                      ...
 *                  ],  // polars must not be null/undefined.
 *                  singleAxis: [
 *                      {model: coord0, axisModels: [], coordIndex: 0}
 *                  ]
 *              }
 */
function collectReferCoordSysModelInfo(dataZoomModel) {
  var ecModel = dataZoomModel.ecModel;
  var coordSysInfoWrap = {
    infoList: [],
    infoMap: (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.createHashMap)()
  };
  dataZoomModel.eachTargetAxis(function (axisDim, axisIndex) {
    var axisModel = ecModel.getComponent(getAxisMainType(axisDim), axisIndex);
    if (!axisModel) {
      return;
    }
    var coordSysModel = axisModel.getCoordSysModel();
    if (!coordSysModel) {
      return;
    }
    var coordSysUid = coordSysModel.uid;
    var coordSysInfo = coordSysInfoWrap.infoMap.get(coordSysUid);
    if (!coordSysInfo) {
      coordSysInfo = {
        model: coordSysModel,
        axisModels: []
      };
      coordSysInfoWrap.infoList.push(coordSysInfo);
      coordSysInfoWrap.infoMap.set(coordSysUid, coordSysInfo);
    }
    coordSysInfo.axisModels.push(axisModel);
  });
  return coordSysInfoWrap;
}

}),
36497: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  clear: function() { return clear; },
  count: function() { return count; },
  pop: function() { return pop; },
  push: function() { return push; }
});
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56190);
/* ESM import */var _util_model_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44244);

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
var inner = (0,_util_model_js__WEBPACK_IMPORTED_MODULE_1__.makeInner)();
/**
 * @param ecModel
 * @param newSnapshot key is dataZoomId
 */
function push(ecModel, newSnapshot) {
  var storedSnapshots = getStoreSnapshots(ecModel);
  // If previous dataZoom can not be found,
  // complete an range with current range.
  each(newSnapshot, function (batchItem, dataZoomId) {
    var i = storedSnapshots.length - 1;
    for (; i >= 0; i--) {
      var snapshot = storedSnapshots[i];
      if (snapshot[dataZoomId]) {
        break;
      }
    }
    if (i < 0) {
      // No origin range set, create one by current range.
      var dataZoomModel = ecModel.queryComponents({
        mainType: 'dataZoom',
        subType: 'select',
        id: dataZoomId
      })[0];
      if (dataZoomModel) {
        var percentRange = dataZoomModel.getPercentRange();
        storedSnapshots[0][dataZoomId] = {
          dataZoomId: dataZoomId,
          start: percentRange[0],
          end: percentRange[1]
        };
      }
    }
  });
  storedSnapshots.push(newSnapshot);
}
function pop(ecModel) {
  var storedSnapshots = getStoreSnapshots(ecModel);
  var head = storedSnapshots[storedSnapshots.length - 1];
  storedSnapshots.length > 1 && storedSnapshots.pop();
  // Find top for all dataZoom.
  var snapshot = {};
  each(head, function (batchItem, dataZoomId) {
    for (var i = storedSnapshots.length - 1; i >= 0; i--) {
      batchItem = storedSnapshots[i][dataZoomId];
      if (batchItem) {
        snapshot[dataZoomId] = batchItem;
        break;
      }
    }
  });
  return snapshot;
}
function clear(ecModel) {
  inner(ecModel).snapshots = null;
}
function count(ecModel) {
  return getStoreSnapshots(ecModel).length;
}
/**
 * History length of each dataZoom may be different.
 * this._history[0] is used to store origin range.
 */
function getStoreSnapshots(ecModel) {
  var store = inner(ecModel);
  if (!store.snapshots) {
    store.snapshots = [{}];
  }
  return store.snapshots;
}

}),
31085: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  install: function() { return install; }
});
/* ESM import */var _extension_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50215);
/* ESM import */var _installDataZoomInside_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75924);
/* ESM import */var _installDataZoomSlider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10556);

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
  (0,_extension_js__WEBPACK_IMPORTED_MODULE_0__.use)(_installDataZoomInside_js__WEBPACK_IMPORTED_MODULE_1__.install);
  (0,_extension_js__WEBPACK_IMPORTED_MODULE_0__.use)(_installDataZoomSlider_js__WEBPACK_IMPORTED_MODULE_2__.install);
  // Do not install './dataZoomSelect',
  // since it only work for toolbox dataZoom.
}

}),
25000: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ installCommon; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(56190);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/helper.js
var helper = __webpack_require__(80018);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(48843);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/sliderMove.js
var sliderMove = __webpack_require__(17549);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisHelper.js
var axisHelper = __webpack_require__(5527);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/scaleRawExtentInfo.js
var scaleRawExtentInfo = __webpack_require__(34920);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js
var model = __webpack_require__(44244);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/AxisProxy.js

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







var each = util.each;
var asc = number.asc;
/**
 * Operate single axis.
 * One axis can only operated by one axis operator.
 * Different dataZoomModels may be defined to operate the same axis.
 * (i.e. 'inside' data zoom and 'slider' data zoom components)
 * So dataZoomModels share one axisProxy in that case.
 */
var AxisProxy_AxisProxy = /** @class */function () {
  function AxisProxy(dimName, axisIndex, dataZoomModel, ecModel) {
    this._dimName = dimName;
    this._axisIndex = axisIndex;
    this.ecModel = ecModel;
    this._dataZoomModel = dataZoomModel;
    // /**
    //  * @readOnly
    //  * @private
    //  */
    // this.hasSeriesStacked;
  }
  /**
   * Whether the axisProxy is hosted by dataZoomModel.
   */
  AxisProxy.prototype.hostedBy = function (dataZoomModel) {
    return this._dataZoomModel === dataZoomModel;
  };
  /**
   * @return Value can only be NaN or finite value.
   */
  AxisProxy.prototype.getDataValueWindow = function () {
    return this._valueWindow.slice();
  };
  /**
   * @return {Array.<number>}
   */
  AxisProxy.prototype.getDataPercentWindow = function () {
    return this._percentWindow.slice();
  };
  AxisProxy.prototype.getTargetSeriesModels = function () {
    var seriesModels = [];
    this.ecModel.eachSeries(function (seriesModel) {
      if ((0,helper.isCoordSupported)(seriesModel)) {
        var axisMainType = (0,helper.getAxisMainType)(this._dimName);
        var axisModel = seriesModel.getReferringComponents(axisMainType, model.SINGLE_REFERRING).models[0];
        if (axisModel && this._axisIndex === axisModel.componentIndex) {
          seriesModels.push(seriesModel);
        }
      }
    }, this);
    return seriesModels;
  };
  AxisProxy.prototype.getAxisModel = function () {
    return this.ecModel.getComponent(this._dimName + 'Axis', this._axisIndex);
  };
  AxisProxy.prototype.getMinMaxSpan = function () {
    return util.clone(this._minMaxSpan);
  };
  /**
   * Only calculate by given range and this._dataExtent, do not change anything.
   */
  AxisProxy.prototype.calculateDataWindow = function (opt) {
    var dataExtent = this._dataExtent;
    var axisModel = this.getAxisModel();
    var scale = axisModel.axis.scale;
    var rangePropMode = this._dataZoomModel.getRangePropMode();
    var percentExtent = [0, 100];
    var percentWindow = [];
    var valueWindow = [];
    var hasPropModeValue;
    each(['start', 'end'], function (prop, idx) {
      var boundPercent = opt[prop];
      var boundValue = opt[prop + 'Value'];
      // Notice: dataZoom is based either on `percentProp` ('start', 'end') or
      // on `valueProp` ('startValue', 'endValue'). (They are based on the data extent
      // but not min/max of axis, which will be calculated by data window then).
      // The former one is suitable for cases that a dataZoom component controls multiple
      // axes with different unit or extent, and the latter one is suitable for accurate
      // zoom by pixel (e.g., in dataZoomSelect).
      // we use `getRangePropMode()` to mark which prop is used. `rangePropMode` is updated
      // only when setOption or dispatchAction, otherwise it remains its original value.
      // (Why not only record `percentProp` and always map to `valueProp`? Because
      // the map `valueProp` -> `percentProp` -> `valueProp` probably not the original
      // `valueProp`. consider two axes constrolled by one dataZoom. They have different
      // data extent. All of values that are overflow the `dataExtent` will be calculated
      // to percent '100%').
      if (rangePropMode[idx] === 'percent') {
        boundPercent == null && (boundPercent = percentExtent[idx]);
        // Use scale.parse to math round for category or time axis.
        boundValue = scale.parse(number.linearMap(boundPercent, percentExtent, dataExtent));
      } else {
        hasPropModeValue = true;
        boundValue = boundValue == null ? dataExtent[idx] : scale.parse(boundValue);
        // Calculating `percent` from `value` may be not accurate, because
        // This calculation can not be inversed, because all of values that
        // are overflow the `dataExtent` will be calculated to percent '100%'
        boundPercent = number.linearMap(boundValue, dataExtent, percentExtent);
      }
      // valueWindow[idx] = round(boundValue);
      // percentWindow[idx] = round(boundPercent);
      // fallback to extent start/end when parsed value or percent is invalid
      valueWindow[idx] = boundValue == null || isNaN(boundValue) ? dataExtent[idx] : boundValue;
      percentWindow[idx] = boundPercent == null || isNaN(boundPercent) ? percentExtent[idx] : boundPercent;
    });
    asc(valueWindow);
    asc(percentWindow);
    // The windows from user calling of `dispatchAction` might be out of the extent,
    // or do not obey the `min/maxSpan`, `min/maxValueSpan`. But we don't restrict window
    // by `zoomLock` here, because we see `zoomLock` just as a interaction constraint,
    // where API is able to initialize/modify the window size even though `zoomLock`
    // specified.
    var spans = this._minMaxSpan;
    hasPropModeValue ? restrictSet(valueWindow, percentWindow, dataExtent, percentExtent, false) : restrictSet(percentWindow, valueWindow, percentExtent, dataExtent, true);
    function restrictSet(fromWindow, toWindow, fromExtent, toExtent, toValue) {
      var suffix = toValue ? 'Span' : 'ValueSpan';
      (0,sliderMove["default"])(0, fromWindow, fromExtent, 'all', spans['min' + suffix], spans['max' + suffix]);
      for (var i = 0; i < 2; i++) {
        toWindow[i] = number.linearMap(fromWindow[i], fromExtent, toExtent, true);
        toValue && (toWindow[i] = scale.parse(toWindow[i]));
      }
    }
    return {
      valueWindow: valueWindow,
      percentWindow: percentWindow
    };
  };
  /**
   * Notice: reset should not be called before series.restoreData() is called,
   * so it is recommended to be called in "process stage" but not "model init
   * stage".
   */
  AxisProxy.prototype.reset = function (dataZoomModel) {
    if (dataZoomModel !== this._dataZoomModel) {
      return;
    }
    var targetSeries = this.getTargetSeriesModels();
    // Culculate data window and data extent, and record them.
    this._dataExtent = calculateDataExtent(this, this._dimName, targetSeries);
    // `calculateDataWindow` uses min/maxSpan.
    this._updateMinMaxSpan();
    var dataWindow = this.calculateDataWindow(dataZoomModel.settledOption);
    this._valueWindow = dataWindow.valueWindow;
    this._percentWindow = dataWindow.percentWindow;
    // Update axis setting then.
    this._setAxisModel();
  };
  AxisProxy.prototype.filterData = function (dataZoomModel, api) {
    if (dataZoomModel !== this._dataZoomModel) {
      return;
    }
    var axisDim = this._dimName;
    var seriesModels = this.getTargetSeriesModels();
    var filterMode = dataZoomModel.get('filterMode');
    var valueWindow = this._valueWindow;
    if (filterMode === 'none') {
      return;
    }
    // FIXME
    // Toolbox may has dataZoom injected. And if there are stacked bar chart
    // with NaN data, NaN will be filtered and stack will be wrong.
    // So we need to force the mode to be set empty.
    // In fect, it is not a big deal that do not support filterMode-'filter'
    // when using toolbox#dataZoom, utill tooltip#dataZoom support "single axis
    // selection" some day, which might need "adapt to data extent on the
    // otherAxis", which is disabled by filterMode-'empty'.
    // But currently, stack has been fixed to based on value but not index,
    // so this is not an issue any more.
    // let otherAxisModel = this.getOtherAxisModel();
    // if (dataZoomModel.get('$fromToolbox')
    //     && otherAxisModel
    //     && otherAxisModel.hasSeriesStacked
    // ) {
    //     filterMode = 'empty';
    // }
    // TODO
    // filterMode 'weakFilter' and 'empty' is not optimized for huge data yet.
    each(seriesModels, function (seriesModel) {
      var seriesData = seriesModel.getData();
      var dataDims = seriesData.mapDimensionsAll(axisDim);
      if (!dataDims.length) {
        return;
      }
      if (filterMode === 'weakFilter') {
        var store_1 = seriesData.getStore();
        var dataDimIndices_1 = util.map(dataDims, function (dim) {
          return seriesData.getDimensionIndex(dim);
        }, seriesData);
        seriesData.filterSelf(function (dataIndex) {
          var leftOut;
          var rightOut;
          var hasValue;
          for (var i = 0; i < dataDims.length; i++) {
            var value = store_1.get(dataDimIndices_1[i], dataIndex);
            var thisHasValue = !isNaN(value);
            var thisLeftOut = value < valueWindow[0];
            var thisRightOut = value > valueWindow[1];
            if (thisHasValue && !thisLeftOut && !thisRightOut) {
              return true;
            }
            thisHasValue && (hasValue = true);
            thisLeftOut && (leftOut = true);
            thisRightOut && (rightOut = true);
          }
          // If both left out and right out, do not filter.
          return hasValue && leftOut && rightOut;
        });
      } else {
        each(dataDims, function (dim) {
          if (filterMode === 'empty') {
            seriesModel.setData(seriesData = seriesData.map(dim, function (value) {
              return !isInWindow(value) ? NaN : value;
            }));
          } else {
            var range = {};
            range[dim] = valueWindow;
            // console.time('select');
            seriesData.selectRange(range);
            // console.timeEnd('select');
          }
        });
      }
      each(dataDims, function (dim) {
        seriesData.setApproximateExtent(valueWindow, dim);
      });
    });
    function isInWindow(value) {
      return value >= valueWindow[0] && value <= valueWindow[1];
    }
  };
  AxisProxy.prototype._updateMinMaxSpan = function () {
    var minMaxSpan = this._minMaxSpan = {};
    var dataZoomModel = this._dataZoomModel;
    var dataExtent = this._dataExtent;
    each(['min', 'max'], function (minMax) {
      var percentSpan = dataZoomModel.get(minMax + 'Span');
      var valueSpan = dataZoomModel.get(minMax + 'ValueSpan');
      valueSpan != null && (valueSpan = this.getAxisModel().axis.scale.parse(valueSpan));
      // minValueSpan and maxValueSpan has higher priority than minSpan and maxSpan
      if (valueSpan != null) {
        percentSpan = number.linearMap(dataExtent[0] + valueSpan, dataExtent, [0, 100], true);
      } else if (percentSpan != null) {
        valueSpan = number.linearMap(percentSpan, [0, 100], dataExtent, true) - dataExtent[0];
      }
      minMaxSpan[minMax + 'Span'] = percentSpan;
      minMaxSpan[minMax + 'ValueSpan'] = valueSpan;
    }, this);
  };
  AxisProxy.prototype._setAxisModel = function () {
    var axisModel = this.getAxisModel();
    var percentWindow = this._percentWindow;
    var valueWindow = this._valueWindow;
    if (!percentWindow) {
      return;
    }
    // [0, 500]: arbitrary value, guess axis extent.
    var precision = number.getPixelPrecision(valueWindow, [0, 500]);
    precision = Math.min(precision, 20);
    // For value axis, if min/max/scale are not set, we just use the extent obtained
    // by series data, which may be a little different from the extent calculated by
    // `axisHelper.getScaleExtent`. But the different just affects the experience a
    // little when zooming. So it will not be fixed until some users require it strongly.
    var rawExtentInfo = axisModel.axis.scale.rawExtentInfo;
    if (percentWindow[0] !== 0) {
      rawExtentInfo.setDeterminedMinMax('min', +valueWindow[0].toFixed(precision));
    }
    if (percentWindow[1] !== 100) {
      rawExtentInfo.setDeterminedMinMax('max', +valueWindow[1].toFixed(precision));
    }
    rawExtentInfo.freeze();
  };
  return AxisProxy;
}();
function calculateDataExtent(axisProxy, axisDim, seriesModels) {
  var dataExtent = [Infinity, -Infinity];
  each(seriesModels, function (seriesModel) {
    (0,axisHelper.unionAxisExtentFromData)(dataExtent, seriesModel.getData(), axisDim);
  });
  // It is important to get "consistent" extent when more then one axes is
  // controlled by a `dataZoom`, otherwise those axes will not be synchronized
  // when zooming. But it is difficult to know what is "consistent", considering
  // axes have different type or even different meanings (For example, two
  // time axes are used to compare data of the same date in different years).
  // So basically dataZoom just obtains extent by series.data (in category axis
  // extent can be obtained from axis.data).
  // Nevertheless, user can set min/max/scale on axes to make extent of axes
  // consistent.
  var axisModel = axisProxy.getAxisModel();
  var rawExtentResult = (0,scaleRawExtentInfo.ensureScaleRawExtentInfo)(axisModel.axis.scale, axisModel, dataExtent).calculate();
  return [rawExtentResult.min, rawExtentResult.max];
}
/* ESM default export */ var dataZoom_AxisProxy = (AxisProxy_AxisProxy);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/dataZoomProcessor.js

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



var dataZoomProcessor_dataZoomProcessor = {
  // `dataZoomProcessor` will only be performed in needed series. Consider if
  // there is a line series and a pie series, it is better not to update the
  // line series if only pie series is needed to be updated.
  getTargetSeries: function (ecModel) {
    function eachAxisModel(cb) {
      ecModel.eachComponent('dataZoom', function (dataZoomModel) {
        dataZoomModel.eachTargetAxis(function (axisDim, axisIndex) {
          var axisModel = ecModel.getComponent((0,helper.getAxisMainType)(axisDim), axisIndex);
          cb(axisDim, axisIndex, axisModel, dataZoomModel);
        });
      });
    }
    // FIXME: it brings side-effect to `getTargetSeries`.
    // Prepare axis proxies.
    eachAxisModel(function (axisDim, axisIndex, axisModel, dataZoomModel) {
      // dispose all last axis proxy, in case that some axis are deleted.
      axisModel.__dzAxisProxy = null;
    });
    var proxyList = [];
    eachAxisModel(function (axisDim, axisIndex, axisModel, dataZoomModel) {
      // Different dataZooms may constrol the same axis. In that case,
      // an axisProxy serves both of them.
      if (!axisModel.__dzAxisProxy) {
        // Use the first dataZoomModel as the main model of axisProxy.
        axisModel.__dzAxisProxy = new dataZoom_AxisProxy(axisDim, axisIndex, dataZoomModel, ecModel);
        proxyList.push(axisModel.__dzAxisProxy);
      }
    });
    var seriesModelMap = (0,util.createHashMap)();
    (0,util.each)(proxyList, function (axisProxy) {
      (0,util.each)(axisProxy.getTargetSeriesModels(), function (seriesModel) {
        seriesModelMap.set(seriesModel.uid, seriesModel);
      });
    });
    return seriesModelMap;
  },
  // Consider appendData, where filter should be performed. Because data process is
  // in block mode currently, it is not need to worry about that the overallProgress
  // execute every frame.
  overallReset: function (ecModel, api) {
    ecModel.eachComponent('dataZoom', function (dataZoomModel) {
      // We calculate window and reset axis here but not in model
      // init stage and not after action dispatch handler, because
      // reset should be called after seriesData.restoreData.
      dataZoomModel.eachTargetAxis(function (axisDim, axisIndex) {
        dataZoomModel.getAxisProxy(axisDim, axisIndex).reset(dataZoomModel);
      });
      // Caution: data zoom filtering is order sensitive when using
      // percent range and no min/max/scale set on axis.
      // For example, we have dataZoom definition:
      // [
      //      {xAxisIndex: 0, start: 30, end: 70},
      //      {yAxisIndex: 0, start: 20, end: 80}
      // ]
      // In this case, [20, 80] of y-dataZoom should be based on data
      // that have filtered by x-dataZoom using range of [30, 70],
      // but should not be based on full raw data. Thus sliding
      // x-dataZoom will change both ranges of xAxis and yAxis,
      // while sliding y-dataZoom will only change the range of yAxis.
      // So we should filter x-axis after reset x-axis immediately,
      // and then reset y-axis and filter y-axis.
      dataZoomModel.eachTargetAxis(function (axisDim, axisIndex) {
        dataZoomModel.getAxisProxy(axisDim, axisIndex).filterData(dataZoomModel, api);
      });
    });
    ecModel.eachComponent('dataZoom', function (dataZoomModel) {
      // Fullfill all of the range props so that user
      // is able to get them from chart.getOption().
      var axisProxy = dataZoomModel.findRepresentativeAxisProxy();
      if (axisProxy) {
        var percentRange = axisProxy.getDataPercentWindow();
        var valueRange = axisProxy.getDataValueWindow();
        dataZoomModel.setCalculatedRange({
          start: percentRange[0],
          end: percentRange[1],
          startValue: valueRange[0],
          endValue: valueRange[1]
        });
      }
    });
  }
};
/* ESM default export */ var dataZoomProcessor = (dataZoomProcessor_dataZoomProcessor);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/dataZoomAction.js

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


function installDataZoomAction(registers) {
  registers.registerAction('dataZoom', function (payload, ecModel) {
    var effectedModels = (0,helper.findEffectedDataZooms)(ecModel, payload);
    (0,util.each)(effectedModels, function (dataZoomModel) {
      dataZoomModel.setRawRange({
        start: payload.start,
        end: payload.end,
        startValue: payload.startValue,
        endValue: payload.endValue
      });
    });
  });
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/installCommon.js

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


var installed = false;
function installCommon(registers) {
  if (installed) {
    return;
  }
  installed = true;
  registers.registerProcessor(registers.PRIORITY.PROCESSOR.FILTER, dataZoomProcessor);
  installDataZoomAction(registers);
  registers.registerSubTypeDefaulter('dataZoom', function () {
    // Default 'slider' when no type specified.
    return 'slider';
  });
}

}),
75924: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  install: function() { return /* binding */ install; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(12012);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/DataZoomModel.js
var DataZoomModel = __webpack_require__(29869);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/component.js
var component = __webpack_require__(86452);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/InsideZoomModel.js

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



var InsideZoomModel_InsideZoomModel = /** @class */function (_super) {
  (0,tslib_es6.__extends)(InsideZoomModel, _super);
  function InsideZoomModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = InsideZoomModel.type;
    return _this;
  }
  InsideZoomModel.type = 'dataZoom.inside';
  InsideZoomModel.defaultOption = (0,component.inheritDefaultOption)(DataZoomModel["default"].defaultOption, {
    disabled: false,
    zoomLock: false,
    zoomOnMouseWheel: true,
    moveOnMouseMove: true,
    moveOnMouseWheel: false,
    preventDefaultMouseMove: true
  });
  return InsideZoomModel;
}(DataZoomModel["default"]);
/* ESM default export */ var dataZoom_InsideZoomModel = (InsideZoomModel_InsideZoomModel);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/DataZoomView.js
var DataZoomView = __webpack_require__(43605);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/sliderMove.js
var sliderMove = __webpack_require__(17549);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/RoamController.js
var RoamController = __webpack_require__(92645);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/throttle.js
var throttle = __webpack_require__(26069);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js
var model = __webpack_require__(44244);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(56190);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/helper.js
var helper = __webpack_require__(80018);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/roams.js

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
// Only create one roam controller for each coordinate system.
// one roam controller might be refered by two inside data zoom
// components (for example, one for x and one for y). When user
// pan or zoom, only dispatch one action for those data zoom
// components.





var inner = (0,model.makeInner)();
function setViewInfoToCoordSysRecord(api, dataZoomModel, getRange) {
  inner(api).coordSysRecordMap.each(function (coordSysRecord) {
    var dzInfo = coordSysRecord.dataZoomInfoMap.get(dataZoomModel.uid);
    if (dzInfo) {
      dzInfo.getRange = getRange;
    }
  });
}
function disposeCoordSysRecordIfNeeded(api, dataZoomModel) {
  var coordSysRecordMap = inner(api).coordSysRecordMap;
  var coordSysKeyArr = coordSysRecordMap.keys();
  for (var i = 0; i < coordSysKeyArr.length; i++) {
    var coordSysKey = coordSysKeyArr[i];
    var coordSysRecord = coordSysRecordMap.get(coordSysKey);
    var dataZoomInfoMap = coordSysRecord.dataZoomInfoMap;
    if (dataZoomInfoMap) {
      var dzUid = dataZoomModel.uid;
      var dzInfo = dataZoomInfoMap.get(dzUid);
      if (dzInfo) {
        dataZoomInfoMap.removeKey(dzUid);
        if (!dataZoomInfoMap.keys().length) {
          disposeCoordSysRecord(coordSysRecordMap, coordSysRecord);
        }
      }
    }
  }
}
function disposeCoordSysRecord(coordSysRecordMap, coordSysRecord) {
  if (coordSysRecord) {
    coordSysRecordMap.removeKey(coordSysRecord.model.uid);
    var controller = coordSysRecord.controller;
    controller && controller.dispose();
  }
}
function createCoordSysRecord(api, coordSysModel) {
  // These init props will never change after record created.
  var coordSysRecord = {
    model: coordSysModel,
    containsPoint: (0,util.curry)(containsPoint, coordSysModel),
    dispatchAction: (0,util.curry)(dispatchAction, api),
    dataZoomInfoMap: null,
    controller: null
  };
  // Must not do anything depends on coordSysRecord outside the event handler here,
  // because coordSysRecord not completed yet.
  var controller = coordSysRecord.controller = new RoamController["default"](api.getZr());
  (0,util.each)(['pan', 'zoom', 'scrollMove'], function (eventName) {
    controller.on(eventName, function (event) {
      var batch = [];
      coordSysRecord.dataZoomInfoMap.each(function (dzInfo) {
        // Check whether the behaviors (zoomOnMouseWheel, moveOnMouseMove,
        // moveOnMouseWheel, ...) enabled.
        if (!event.isAvailableBehavior(dzInfo.model.option)) {
          return;
        }
        var method = (dzInfo.getRange || {})[eventName];
        var range = method && method(dzInfo.dzReferCoordSysInfo, coordSysRecord.model.mainType, coordSysRecord.controller, event);
        !dzInfo.model.get('disabled', true) && range && batch.push({
          dataZoomId: dzInfo.model.id,
          start: range[0],
          end: range[1]
        });
      });
      batch.length && coordSysRecord.dispatchAction(batch);
    });
  });
  return coordSysRecord;
}
/**
 * This action will be throttled.
 */
function dispatchAction(api, batch) {
  if (!api.isDisposed()) {
    api.dispatchAction({
      type: 'dataZoom',
      animation: {
        easing: 'cubicOut',
        duration: 100
      },
      batch: batch
    });
  }
}
function containsPoint(coordSysModel, e, x, y) {
  return coordSysModel.coordinateSystem.containPoint([x, y]);
}
/**
 * Merge roamController settings when multiple dataZooms share one roamController.
 */
function mergeControllerParams(dataZoomInfoMap, coordSysRecord, api) {
  var controlType;
  // DO NOT use reserved word (true, false, undefined) as key literally. Even if encapsulated
  // as string, it is probably revert to reserved word by compress tool. See #7411.
  var prefix = 'type_';
  var typePriority = {
    'type_true': 2,
    'type_move': 1,
    'type_false': 0,
    'type_undefined': -1
  };
  var preventDefaultMouseMove = true;
  dataZoomInfoMap.each(function (dataZoomInfo) {
    var dataZoomModel = dataZoomInfo.model;
    var oneType = dataZoomModel.get('disabled', true) ? false : dataZoomModel.get('zoomLock', true) ? 'move' : true;
    if (typePriority[prefix + oneType] > typePriority[prefix + controlType]) {
      controlType = oneType;
    }
    // Prevent default move event by default. If one false, do not prevent. Otherwise
    // users may be confused why it does not work when multiple insideZooms exist.
    preventDefaultMouseMove = preventDefaultMouseMove && dataZoomModel.get('preventDefaultMouseMove', true);
  });
  return {
    controlType: controlType,
    opt: {
      // RoamController will enable all of these functionalities,
      // and the final behavior is determined by its event listener
      // provided by each inside zoom.
      zoomOnMouseWheel: true,
      moveOnMouseMove: true,
      moveOnMouseWheel: true,
      preventDefaultMouseMove: !!preventDefaultMouseMove,
      api: api,
      zInfo: {
        component: coordSysRecord.model
      },
      triggerInfo: {
        roamTrigger: null,
        isInSelf: coordSysRecord.containsPoint
      }
    }
  };
}
function installDataZoomRoamProcessor(registers) {
  registers.registerProcessor(registers.PRIORITY.PROCESSOR.FILTER, function (ecModel, api) {
    var apiInner = inner(api);
    var coordSysRecordMap = apiInner.coordSysRecordMap || (apiInner.coordSysRecordMap = (0,util.createHashMap)());
    coordSysRecordMap.each(function (coordSysRecord) {
      // `coordSysRecordMap` always exists (because it holds the `roam controller`, which should
      // better not re-create each time), but clear `dataZoomInfoMap` each round of the workflow.
      coordSysRecord.dataZoomInfoMap = null;
    });
    ecModel.eachComponent({
      mainType: 'dataZoom',
      subType: 'inside'
    }, function (dataZoomModel) {
      var dzReferCoordSysWrap = (0,helper.collectReferCoordSysModelInfo)(dataZoomModel);
      (0,util.each)(dzReferCoordSysWrap.infoList, function (dzCoordSysInfo) {
        var coordSysUid = dzCoordSysInfo.model.uid;
        var coordSysRecord = coordSysRecordMap.get(coordSysUid) || coordSysRecordMap.set(coordSysUid, createCoordSysRecord(api, dzCoordSysInfo.model));
        var dataZoomInfoMap = coordSysRecord.dataZoomInfoMap || (coordSysRecord.dataZoomInfoMap = (0,util.createHashMap)());
        // Notice these props might be changed each time for a single dataZoomModel.
        dataZoomInfoMap.set(dataZoomModel.uid, {
          dzReferCoordSysInfo: dzCoordSysInfo,
          model: dataZoomModel,
          getRange: null
        });
      });
    });
    // (1) Merge dataZoom settings for each coord sys and set to the roam controller.
    // (2) Clear coord sys if not refered by any dataZoom.
    coordSysRecordMap.each(function (coordSysRecord) {
      var controller = coordSysRecord.controller;
      var firstDzInfo;
      var dataZoomInfoMap = coordSysRecord.dataZoomInfoMap;
      if (dataZoomInfoMap) {
        var firstDzKey = dataZoomInfoMap.keys()[0];
        if (firstDzKey != null) {
          firstDzInfo = dataZoomInfoMap.get(firstDzKey);
        }
      }
      if (!firstDzInfo) {
        disposeCoordSysRecord(coordSysRecordMap, coordSysRecord);
        return;
      }
      var controllerParams = mergeControllerParams(dataZoomInfoMap, coordSysRecord, api);
      controller.enable(controllerParams.controlType, controllerParams.opt);
      throttle.createOrUpdate(coordSysRecord, 'dispatchAction', firstDzInfo.model.get('throttle', true), 'fixRate');
    });
  });
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/InsideZoomView.js

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





var InsideZoomView_InsideZoomView = /** @class */function (_super) {
  (0,tslib_es6.__extends)(InsideZoomView, _super);
  function InsideZoomView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = 'dataZoom.inside';
    return _this;
  }
  InsideZoomView.prototype.render = function (dataZoomModel, ecModel, api) {
    _super.prototype.render.apply(this, arguments);
    if (dataZoomModel.noTarget()) {
      this._clear();
      return;
    }
    // Hence the `throttle` util ensures to preserve command order,
    // here simply updating range all the time will not cause missing
    // any of the the roam change.
    this.range = dataZoomModel.getPercentRange();
    // Reset controllers.
    setViewInfoToCoordSysRecord(api, dataZoomModel, {
      pan: (0,util.bind)(getRangeHandlers.pan, this),
      zoom: (0,util.bind)(getRangeHandlers.zoom, this),
      scrollMove: (0,util.bind)(getRangeHandlers.scrollMove, this)
    });
  };
  InsideZoomView.prototype.dispose = function () {
    this._clear();
    _super.prototype.dispose.apply(this, arguments);
  };
  InsideZoomView.prototype._clear = function () {
    disposeCoordSysRecordIfNeeded(this.api, this.dataZoomModel);
    this.range = null;
  };
  InsideZoomView.type = 'dataZoom.inside';
  return InsideZoomView;
}(DataZoomView["default"]);
var getRangeHandlers = {
  zoom: function (coordSysInfo, coordSysMainType, controller, e) {
    var lastRange = this.range;
    var range = lastRange.slice();
    // Calculate transform by the first axis.
    var axisModel = coordSysInfo.axisModels[0];
    if (!axisModel) {
      return;
    }
    var directionInfo = getDirectionInfo[coordSysMainType](null, [e.originX, e.originY], axisModel, controller, coordSysInfo);
    var percentPoint = (directionInfo.signal > 0 ? directionInfo.pixelStart + directionInfo.pixelLength - directionInfo.pixel : directionInfo.pixel - directionInfo.pixelStart) / directionInfo.pixelLength * (range[1] - range[0]) + range[0];
    var scale = Math.max(1 / e.scale, 0);
    range[0] = (range[0] - percentPoint) * scale + percentPoint;
    range[1] = (range[1] - percentPoint) * scale + percentPoint;
    // Restrict range.
    var minMaxSpan = this.dataZoomModel.findRepresentativeAxisProxy().getMinMaxSpan();
    (0,sliderMove["default"])(0, range, [0, 100], 0, minMaxSpan.minSpan, minMaxSpan.maxSpan);
    this.range = range;
    if (lastRange[0] !== range[0] || lastRange[1] !== range[1]) {
      return range;
    }
  },
  pan: makeMover(function (range, axisModel, coordSysInfo, coordSysMainType, controller, e) {
    var directionInfo = getDirectionInfo[coordSysMainType]([e.oldX, e.oldY], [e.newX, e.newY], axisModel, controller, coordSysInfo);
    return directionInfo.signal * (range[1] - range[0]) * directionInfo.pixel / directionInfo.pixelLength;
  }),
  scrollMove: makeMover(function (range, axisModel, coordSysInfo, coordSysMainType, controller, e) {
    var directionInfo = getDirectionInfo[coordSysMainType]([0, 0], [e.scrollDelta, e.scrollDelta], axisModel, controller, coordSysInfo);
    return directionInfo.signal * (range[1] - range[0]) * e.scrollDelta;
  })
};
function makeMover(getPercentDelta) {
  return function (coordSysInfo, coordSysMainType, controller, e) {
    var lastRange = this.range;
    var range = lastRange.slice();
    // Calculate transform by the first axis.
    var axisModel = coordSysInfo.axisModels[0];
    if (!axisModel) {
      return;
    }
    var percentDelta = getPercentDelta(range, axisModel, coordSysInfo, coordSysMainType, controller, e);
    (0,sliderMove["default"])(percentDelta, range, [0, 100], 'all');
    this.range = range;
    if (lastRange[0] !== range[0] || lastRange[1] !== range[1]) {
      return range;
    }
  };
}
var getDirectionInfo = {
  grid: function (oldPoint, newPoint, axisModel, controller, coordSysInfo) {
    var axis = axisModel.axis;
    var ret = {};
    var rect = coordSysInfo.model.coordinateSystem.getRect();
    oldPoint = oldPoint || [0, 0];
    if (axis.dim === 'x') {
      ret.pixel = newPoint[0] - oldPoint[0];
      ret.pixelLength = rect.width;
      ret.pixelStart = rect.x;
      ret.signal = axis.inverse ? 1 : -1;
    } else {
      // axis.dim === 'y'
      ret.pixel = newPoint[1] - oldPoint[1];
      ret.pixelLength = rect.height;
      ret.pixelStart = rect.y;
      ret.signal = axis.inverse ? -1 : 1;
    }
    return ret;
  },
  polar: function (oldPoint, newPoint, axisModel, controller, coordSysInfo) {
    var axis = axisModel.axis;
    var ret = {};
    var polar = coordSysInfo.model.coordinateSystem;
    var radiusExtent = polar.getRadiusAxis().getExtent();
    var angleExtent = polar.getAngleAxis().getExtent();
    oldPoint = oldPoint ? polar.pointToCoord(oldPoint) : [0, 0];
    newPoint = polar.pointToCoord(newPoint);
    if (axisModel.mainType === 'radiusAxis') {
      ret.pixel = newPoint[0] - oldPoint[0];
      // ret.pixelLength = Math.abs(radiusExtent[1] - radiusExtent[0]);
      // ret.pixelStart = Math.min(radiusExtent[0], radiusExtent[1]);
      ret.pixelLength = radiusExtent[1] - radiusExtent[0];
      ret.pixelStart = radiusExtent[0];
      ret.signal = axis.inverse ? 1 : -1;
    } else {
      // 'angleAxis'
      ret.pixel = newPoint[1] - oldPoint[1];
      // ret.pixelLength = Math.abs(angleExtent[1] - angleExtent[0]);
      // ret.pixelStart = Math.min(angleExtent[0], angleExtent[1]);
      ret.pixelLength = angleExtent[1] - angleExtent[0];
      ret.pixelStart = angleExtent[0];
      ret.signal = axis.inverse ? -1 : 1;
    }
    return ret;
  },
  singleAxis: function (oldPoint, newPoint, axisModel, controller, coordSysInfo) {
    var axis = axisModel.axis;
    var rect = coordSysInfo.model.coordinateSystem.getRect();
    var ret = {};
    oldPoint = oldPoint || [0, 0];
    if (axis.orient === 'horizontal') {
      ret.pixel = newPoint[0] - oldPoint[0];
      ret.pixelLength = rect.width;
      ret.pixelStart = rect.x;
      ret.signal = axis.inverse ? 1 : -1;
    } else {
      // 'vertical'
      ret.pixel = newPoint[1] - oldPoint[1];
      ret.pixelLength = rect.height;
      ret.pixelStart = rect.y;
      ret.signal = axis.inverse ? -1 : 1;
    }
    return ret;
  }
};
/* ESM default export */ var dataZoom_InsideZoomView = (InsideZoomView_InsideZoomView);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/installCommon.js + 3 modules
var installCommon = __webpack_require__(25000);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/installDataZoomInside.js

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
  (0,installCommon["default"])(registers);
  registers.registerComponentModel(dataZoom_InsideZoomModel);
  registers.registerComponentView(dataZoom_InsideZoomView);
  installDataZoomRoamProcessor(registers);
}

}),
74344: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  install: function() { return /* binding */ install; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(12012);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/DataZoomModel.js
var DataZoomModel = __webpack_require__(29869);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/SelectZoomModel.js

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


var SelectZoomModel_SelectDataZoomModel = /** @class */function (_super) {
  (0,tslib_es6.__extends)(SelectDataZoomModel, _super);
  function SelectDataZoomModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = SelectDataZoomModel.type;
    return _this;
  }
  SelectDataZoomModel.type = 'dataZoom.select';
  return SelectDataZoomModel;
}(DataZoomModel["default"]);
/* ESM default export */ var SelectZoomModel = (SelectZoomModel_SelectDataZoomModel);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/DataZoomView.js
var DataZoomView = __webpack_require__(43605);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/SelectZoomView.js

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


var SelectZoomView_SelectDataZoomView = /** @class */function (_super) {
  (0,tslib_es6.__extends)(SelectDataZoomView, _super);
  function SelectDataZoomView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = SelectDataZoomView.type;
    return _this;
  }
  SelectDataZoomView.type = 'dataZoom.select';
  return SelectDataZoomView;
}(DataZoomView["default"]);
/* ESM default export */ var SelectZoomView = (SelectZoomView_SelectDataZoomView);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/installCommon.js + 3 modules
var installCommon = __webpack_require__(25000);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/installDataZoomSelect.js

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
  registers.registerComponentModel(SelectZoomModel);
  registers.registerComponentView(SelectZoomView);
  (0,installCommon["default"])(registers);
}

}),
10556: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  install: function() { return /* binding */ install; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(12012);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/DataZoomModel.js
var DataZoomModel = __webpack_require__(29869);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/component.js
var component = __webpack_require__(86452);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/tokens.js
var tokens = __webpack_require__(23430);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/SliderZoomModel.js

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




var SliderZoomModel_SliderZoomModel = /** @class */function (_super) {
  (0,tslib_es6.__extends)(SliderZoomModel, _super);
  function SliderZoomModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = SliderZoomModel.type;
    return _this;
  }
  SliderZoomModel.type = 'dataZoom.slider';
  SliderZoomModel.layoutMode = 'box';
  SliderZoomModel.defaultOption = (0,component.inheritDefaultOption)(DataZoomModel["default"].defaultOption, {
    show: true,
    // deault value can only be drived in view stage.
    right: 'ph',
    top: 'ph',
    width: 'ph',
    height: 'ph',
    left: null,
    bottom: null,
    borderColor: tokens["default"].color.accent10,
    borderRadius: 0,
    backgroundColor: tokens["default"].color.transparent,
    // dataBackgroundColor: '#ddd',
    dataBackground: {
      lineStyle: {
        color: tokens["default"].color.accent30,
        width: 0.5
      },
      areaStyle: {
        color: tokens["default"].color.accent20,
        opacity: 0.2
      }
    },
    selectedDataBackground: {
      lineStyle: {
        color: tokens["default"].color.accent40,
        width: 0.5
      },
      areaStyle: {
        color: tokens["default"].color.accent20,
        opacity: 0.3
      }
    },
    // Color of selected window.
    fillerColor: 'rgba(135,175,274,0.2)',
    handleIcon: 'path://M-9.35,34.56V42m0-40V9.5m-2,0h4a2,2,0,0,1,2,2v21a2,2,0,0,1-2,2h-4a2,2,0,0,1-2-2v-21A2,2,0,0,1-11.35,9.5Z',
    // Percent of the slider height
    handleSize: '100%',
    handleStyle: {
      color: tokens["default"].color.neutral00,
      borderColor: tokens["default"].color.accent20
    },
    moveHandleSize: 7,
    moveHandleIcon: 'path://M-320.9-50L-320.9-50c18.1,0,27.1,9,27.1,27.1V85.7c0,18.1-9,27.1-27.1,27.1l0,0c-18.1,0-27.1-9-27.1-27.1V-22.9C-348-41-339-50-320.9-50z M-212.3-50L-212.3-50c18.1,0,27.1,9,27.1,27.1V85.7c0,18.1-9,27.1-27.1,27.1l0,0c-18.1,0-27.1-9-27.1-27.1V-22.9C-239.4-41-230.4-50-212.3-50z M-103.7-50L-103.7-50c18.1,0,27.1,9,27.1,27.1V85.7c0,18.1-9,27.1-27.1,27.1l0,0c-18.1,0-27.1-9-27.1-27.1V-22.9C-130.9-41-121.8-50-103.7-50z',
    moveHandleStyle: {
      color: tokens["default"].color.accent40,
      opacity: 0.5
    },
    showDetail: true,
    showDataShadow: 'auto',
    realtime: true,
    zoomLock: false,
    textStyle: {
      color: tokens["default"].color.tertiary
    },
    brushSelect: true,
    brushStyle: {
      color: tokens["default"].color.accent30,
      opacity: 0.3
    },
    emphasis: {
      handleLabel: {
        show: true
      },
      handleStyle: {
        borderColor: tokens["default"].color.accent40
      },
      moveHandleStyle: {
        opacity: 0.8
      }
    },
    defaultLocationEdgeGap: 15
  });
  return SliderZoomModel;
}(DataZoomModel["default"]);
/* ESM default export */ var dataZoom_SliderZoomModel = (SliderZoomModel_SliderZoomModel);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(56190);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/event.js
var core_event = __webpack_require__(85908);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Rect.js + 1 modules
var Rect = __webpack_require__(68903);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Group.js
var Group = __webpack_require__(27208);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Polygon.js
var Polygon = __webpack_require__(84951);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Polyline.js
var Polyline = __webpack_require__(27092);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Text.js
var Text = __webpack_require__(98856);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js
var graphic = __webpack_require__(42562);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/Point.js
var Point = __webpack_require__(98166);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/throttle.js
var throttle = __webpack_require__(26069);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/DataZoomView.js
var DataZoomView = __webpack_require__(43605);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(48843);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/layout.js
var layout = __webpack_require__(22265);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/sliderMove.js
var sliderMove = __webpack_require__(17549);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/helper.js
var helper = __webpack_require__(80018);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/states.js
var states = __webpack_require__(5645);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/symbol.js
var symbol = __webpack_require__(42692);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelStyle.js
var labelStyle = __webpack_require__(57235);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/SliderZoomView.js

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















var SliderZoomView_Rect = Rect["default"];
// Constants
var DEFAULT_FRAME_BORDER_WIDTH = 1;
var DEFAULT_FILLER_SIZE = 30;
var DEFAULT_MOVE_HANDLE_SIZE = 7;
var HORIZONTAL = 'horizontal';
var VERTICAL = 'vertical';
var LABEL_GAP = 5;
var SHOW_DATA_SHADOW_SERIES_TYPE = ['line', 'bar', 'candlestick', 'scatter'];
var REALTIME_ANIMATION_CONFIG = {
  easing: 'cubicOut',
  duration: 100,
  delay: 0
};
var SliderZoomView_SliderZoomView = /** @class */function (_super) {
  (0,tslib_es6.__extends)(SliderZoomView, _super);
  function SliderZoomView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = SliderZoomView.type;
    _this._displayables = {};
    return _this;
  }
  SliderZoomView.prototype.init = function (ecModel, api) {
    this.api = api;
    // A unique handler for each dataZoom component
    this._onBrush = (0,util.bind)(this._onBrush, this);
    this._onBrushEnd = (0,util.bind)(this._onBrushEnd, this);
  };
  SliderZoomView.prototype.render = function (dataZoomModel, ecModel, api, payload) {
    _super.prototype.render.apply(this, arguments);
    throttle.createOrUpdate(this, '_dispatchZoomAction', dataZoomModel.get('throttle'), 'fixRate');
    this._orient = dataZoomModel.getOrient();
    if (dataZoomModel.get('show') === false) {
      this.group.removeAll();
      return;
    }
    if (dataZoomModel.noTarget()) {
      this._clear();
      this.group.removeAll();
      return;
    }
    // Notice: this._resetInterval() should not be executed when payload.type
    // is 'dataZoom', origin this._range should be maintained, otherwise 'pan'
    // or 'zoom' info will be missed because of 'throttle' of this.dispatchAction,
    if (!payload || payload.type !== 'dataZoom' || payload.from !== this.uid) {
      this._buildView();
    }
    this._updateView();
  };
  SliderZoomView.prototype.dispose = function () {
    this._clear();
    _super.prototype.dispose.apply(this, arguments);
  };
  SliderZoomView.prototype._clear = function () {
    throttle.clear(this, '_dispatchZoomAction');
    var zr = this.api.getZr();
    zr.off('mousemove', this._onBrush);
    zr.off('mouseup', this._onBrushEnd);
  };
  SliderZoomView.prototype._buildView = function () {
    var thisGroup = this.group;
    thisGroup.removeAll();
    this._brushing = false;
    this._displayables.brushRect = null;
    this._resetLocation();
    this._resetInterval();
    var barGroup = this._displayables.sliderGroup = new Group["default"]();
    this._renderBackground();
    this._renderHandle();
    this._renderDataShadow();
    thisGroup.add(barGroup);
    this._positionGroup();
  };
  SliderZoomView.prototype._resetLocation = function () {
    var dataZoomModel = this.dataZoomModel;
    var api = this.api;
    var showMoveHandle = dataZoomModel.get('brushSelect');
    var moveHandleSize = showMoveHandle ? DEFAULT_MOVE_HANDLE_SIZE : 0;
    var refContainer = layout.createBoxLayoutReference(dataZoomModel, api).refContainer;
    // If some of x/y/width/height are not specified,
    // auto-adapt according to target grid.
    var coordRect = this._findCoordRect();
    var edgeGap = dataZoomModel.get('defaultLocationEdgeGap', true) || 0;
    // Default align by coordinate system rect.
    var positionInfo = this._orient === HORIZONTAL ? {
      // Why using 'right', because right should be used in vertical,
      // and it is better to be consistent for dealing with position param merge.
      right: refContainer.width - coordRect.x - coordRect.width,
      top: refContainer.height - DEFAULT_FILLER_SIZE - edgeGap - moveHandleSize,
      width: coordRect.width,
      height: DEFAULT_FILLER_SIZE
    } : {
      right: edgeGap,
      top: coordRect.y,
      width: DEFAULT_FILLER_SIZE,
      height: coordRect.height
    };
    // Do not write back to option and replace value 'ph', because
    // the 'ph' value should be recalculated when resize.
    var layoutParams = layout.getLayoutParams(dataZoomModel.option);
    // Replace the placeholder value.
    (0,util.each)(['right', 'top', 'width', 'height'], function (name) {
      if (layoutParams[name] === 'ph') {
        layoutParams[name] = positionInfo[name];
      }
    });
    var layoutRect = layout.getLayoutRect(layoutParams, refContainer);
    this._location = {
      x: layoutRect.x,
      y: layoutRect.y
    };
    this._size = [layoutRect.width, layoutRect.height];
    this._orient === VERTICAL && this._size.reverse();
  };
  SliderZoomView.prototype._positionGroup = function () {
    var thisGroup = this.group;
    var location = this._location;
    var orient = this._orient;
    // Just use the first axis to determine mapping.
    var targetAxisModel = this.dataZoomModel.getFirstTargetAxisModel();
    var inverse = targetAxisModel && targetAxisModel.get('inverse');
    var sliderGroup = this._displayables.sliderGroup;
    var otherAxisInverse = (this._dataShadowInfo || {}).otherAxisInverse;
    // Transform barGroup.
    sliderGroup.attr(orient === HORIZONTAL && !inverse ? {
      scaleY: otherAxisInverse ? 1 : -1,
      scaleX: 1
    } : orient === HORIZONTAL && inverse ? {
      scaleY: otherAxisInverse ? 1 : -1,
      scaleX: -1
    } : orient === VERTICAL && !inverse ? {
      scaleY: otherAxisInverse ? -1 : 1,
      scaleX: 1,
      rotation: Math.PI / 2
    }
    // Don't use Math.PI, considering shadow direction.
    : {
      scaleY: otherAxisInverse ? -1 : 1,
      scaleX: -1,
      rotation: Math.PI / 2
    });
    // Position barGroup
    var rect = thisGroup.getBoundingRect([sliderGroup]);
    thisGroup.x = location.x - rect.x;
    thisGroup.y = location.y - rect.y;
    thisGroup.markRedraw();
  };
  SliderZoomView.prototype._getViewExtent = function () {
    return [0, this._size[0]];
  };
  SliderZoomView.prototype._renderBackground = function () {
    var dataZoomModel = this.dataZoomModel;
    var size = this._size;
    var barGroup = this._displayables.sliderGroup;
    var brushSelect = dataZoomModel.get('brushSelect');
    barGroup.add(new SliderZoomView_Rect({
      silent: true,
      shape: {
        x: 0,
        y: 0,
        width: size[0],
        height: size[1]
      },
      style: {
        fill: dataZoomModel.get('backgroundColor')
      },
      z2: -40
    }));
    // Click panel, over shadow, below handles.
    var clickPanel = new SliderZoomView_Rect({
      shape: {
        x: 0,
        y: 0,
        width: size[0],
        height: size[1]
      },
      style: {
        fill: 'transparent'
      },
      z2: 0,
      onclick: (0,util.bind)(this._onClickPanel, this)
    });
    var zr = this.api.getZr();
    if (brushSelect) {
      clickPanel.on('mousedown', this._onBrushStart, this);
      clickPanel.cursor = 'crosshair';
      zr.on('mousemove', this._onBrush);
      zr.on('mouseup', this._onBrushEnd);
    } else {
      zr.off('mousemove', this._onBrush);
      zr.off('mouseup', this._onBrushEnd);
    }
    barGroup.add(clickPanel);
  };
  SliderZoomView.prototype._renderDataShadow = function () {
    var info = this._dataShadowInfo = this._prepareDataShadowInfo();
    this._displayables.dataShadowSegs = [];
    if (!info) {
      return;
    }
    var size = this._size;
    var oldSize = this._shadowSize || [];
    var seriesModel = info.series;
    var data = seriesModel.getRawData();
    var candlestickDim = seriesModel.getShadowDim && seriesModel.getShadowDim();
    var otherDim = candlestickDim && data.getDimensionInfo(candlestickDim) ? seriesModel.getShadowDim() // @see candlestick
    : info.otherDim;
    if (otherDim == null) {
      return;
    }
    var polygonPts = this._shadowPolygonPts;
    var polylinePts = this._shadowPolylinePts;
    // Not re-render if data doesn't change.
    if (data !== this._shadowData || otherDim !== this._shadowDim || size[0] !== oldSize[0] || size[1] !== oldSize[1]) {
      var thisDataExtent_1 = data.getDataExtent(info.thisDim);
      var otherDataExtent_1 = data.getDataExtent(otherDim);
      // Nice extent.
      var otherOffset = (otherDataExtent_1[1] - otherDataExtent_1[0]) * 0.3;
      otherDataExtent_1 = [otherDataExtent_1[0] - otherOffset, otherDataExtent_1[1] + otherOffset];
      var otherShadowExtent_1 = [0, size[1]];
      var thisShadowExtent = [0, size[0]];
      var areaPoints_1 = [[size[0], 0], [0, 0]];
      var linePoints_1 = [];
      var step_1 = thisShadowExtent[1] / Math.max(1, data.count() - 1);
      var normalizationConstant_1 = size[0] / (thisDataExtent_1[1] - thisDataExtent_1[0]);
      var isTimeAxis_1 = info.thisAxis.type === 'time';
      var thisCoord_1 = -step_1;
      // Optimize for large data shadow
      var stride_1 = Math.round(data.count() / size[0]);
      var lastIsEmpty_1;
      data.each([info.thisDim, otherDim], function (thisValue, otherValue, index) {
        if (stride_1 > 0 && index % stride_1) {
          if (!isTimeAxis_1) {
            thisCoord_1 += step_1;
          }
          return;
        }
        thisCoord_1 = isTimeAxis_1 ? (+thisValue - thisDataExtent_1[0]) * normalizationConstant_1 : thisCoord_1 + step_1;
        // FIXME
        // Should consider axis.min/axis.max when drawing dataShadow.
        // FIXME
        // 应该使用统一的空判断？还是在list里进行空判断？
        var isEmpty = otherValue == null || isNaN(otherValue) || otherValue === '';
        // See #4235.
        var otherCoord = isEmpty ? 0 : (0,number.linearMap)(otherValue, otherDataExtent_1, otherShadowExtent_1, true);
        // Attempt to draw data shadow precisely when there are empty value.
        if (isEmpty && !lastIsEmpty_1 && index) {
          areaPoints_1.push([areaPoints_1[areaPoints_1.length - 1][0], 0]);
          linePoints_1.push([linePoints_1[linePoints_1.length - 1][0], 0]);
        } else if (!isEmpty && lastIsEmpty_1) {
          areaPoints_1.push([thisCoord_1, 0]);
          linePoints_1.push([thisCoord_1, 0]);
        }
        if (!isEmpty) {
          areaPoints_1.push([thisCoord_1, otherCoord]);
          linePoints_1.push([thisCoord_1, otherCoord]);
        }
        lastIsEmpty_1 = isEmpty;
      });
      polygonPts = this._shadowPolygonPts = areaPoints_1;
      polylinePts = this._shadowPolylinePts = linePoints_1;
    }
    this._shadowData = data;
    this._shadowDim = otherDim;
    this._shadowSize = [size[0], size[1]];
    var dataZoomModel = this.dataZoomModel;
    function createDataShadowGroup(isSelectedArea) {
      var model = dataZoomModel.getModel(isSelectedArea ? 'selectedDataBackground' : 'dataBackground');
      var group = new Group["default"]();
      var polygon = new Polygon["default"]({
        shape: {
          points: polygonPts
        },
        segmentIgnoreThreshold: 1,
        style: model.getModel('areaStyle').getAreaStyle(),
        silent: true,
        z2: -20
      });
      var polyline = new Polyline["default"]({
        shape: {
          points: polylinePts
        },
        segmentIgnoreThreshold: 1,
        style: model.getModel('lineStyle').getLineStyle(),
        silent: true,
        z2: -19
      });
      group.add(polygon);
      group.add(polyline);
      return group;
    }
    // let dataBackgroundModel = dataZoomModel.getModel('dataBackground');
    for (var i = 0; i < 3; i++) {
      var group = createDataShadowGroup(i === 1);
      this._displayables.sliderGroup.add(group);
      this._displayables.dataShadowSegs.push(group);
    }
  };
  SliderZoomView.prototype._prepareDataShadowInfo = function () {
    var dataZoomModel = this.dataZoomModel;
    var showDataShadow = dataZoomModel.get('showDataShadow');
    if (showDataShadow === false) {
      return;
    }
    // Find a representative series.
    var result;
    var ecModel = this.ecModel;
    dataZoomModel.eachTargetAxis(function (axisDim, axisIndex) {
      var seriesModels = dataZoomModel.getAxisProxy(axisDim, axisIndex).getTargetSeriesModels();
      (0,util.each)(seriesModels, function (seriesModel) {
        if (result) {
          return;
        }
        if (showDataShadow !== true && (0,util.indexOf)(SHOW_DATA_SHADOW_SERIES_TYPE, seriesModel.get('type')) < 0) {
          return;
        }
        var thisAxis = ecModel.getComponent((0,helper.getAxisMainType)(axisDim), axisIndex).axis;
        var otherDim = getOtherDim(axisDim);
        var otherAxisInverse;
        var coordSys = seriesModel.coordinateSystem;
        if (otherDim != null && coordSys.getOtherAxis) {
          otherAxisInverse = coordSys.getOtherAxis(thisAxis).inverse;
        }
        otherDim = seriesModel.getData().mapDimension(otherDim);
        var thisDim = seriesModel.getData().mapDimension(axisDim);
        result = {
          thisAxis: thisAxis,
          series: seriesModel,
          thisDim: thisDim,
          otherDim: otherDim,
          otherAxisInverse: otherAxisInverse
        };
      }, this);
    }, this);
    return result;
  };
  SliderZoomView.prototype._renderHandle = function () {
    var thisGroup = this.group;
    var displayables = this._displayables;
    var handles = displayables.handles = [null, null];
    var handleLabels = displayables.handleLabels = [null, null];
    var sliderGroup = this._displayables.sliderGroup;
    var size = this._size;
    var dataZoomModel = this.dataZoomModel;
    var api = this.api;
    var borderRadius = dataZoomModel.get('borderRadius') || 0;
    var brushSelect = dataZoomModel.get('brushSelect');
    var filler = displayables.filler = new SliderZoomView_Rect({
      silent: brushSelect,
      style: {
        fill: dataZoomModel.get('fillerColor')
      },
      textConfig: {
        position: 'inside'
      }
    });
    sliderGroup.add(filler);
    // Frame border.
    sliderGroup.add(new SliderZoomView_Rect({
      silent: true,
      subPixelOptimize: true,
      shape: {
        x: 0,
        y: 0,
        width: size[0],
        height: size[1],
        r: borderRadius
      },
      style: {
        // deprecated option
        stroke: dataZoomModel.get('dataBackgroundColor') || dataZoomModel.get('borderColor'),
        lineWidth: DEFAULT_FRAME_BORDER_WIDTH,
        fill: tokens["default"].color.transparent
      }
    }));
    // Left and right handle to resize
    (0,util.each)([0, 1], function (handleIndex) {
      var iconStr = dataZoomModel.get('handleIcon');
      if (!symbol.symbolBuildProxies[iconStr] && iconStr.indexOf('path://') < 0 && iconStr.indexOf('image://') < 0) {
        // Compatitable with the old icon parsers. Which can use a path string without path://
        iconStr = 'path://' + iconStr;
        if (false) {}
      }
      var path = (0,symbol.createSymbol)(iconStr, -1, 0, 2, 2, null, true);
      path.attr({
        cursor: getCursor(this._orient),
        draggable: true,
        drift: (0,util.bind)(this._onDragMove, this, handleIndex),
        ondragend: (0,util.bind)(this._onDragEnd, this),
        onmouseover: (0,util.bind)(this._showDataInfo, this, true),
        onmouseout: (0,util.bind)(this._showDataInfo, this, false),
        z2: 5
      });
      var bRect = path.getBoundingRect();
      var handleSize = dataZoomModel.get('handleSize');
      this._handleHeight = (0,number.parsePercent)(handleSize, this._size[1]);
      this._handleWidth = bRect.width / bRect.height * this._handleHeight;
      path.setStyle(dataZoomModel.getModel('handleStyle').getItemStyle());
      path.style.strokeNoScale = true;
      path.rectHover = true;
      path.ensureState('emphasis').style = dataZoomModel.getModel(['emphasis', 'handleStyle']).getItemStyle();
      (0,states.enableHoverEmphasis)(path);
      var handleColor = dataZoomModel.get('handleColor'); // deprecated option
      // Compatitable with previous version
      if (handleColor != null) {
        path.style.fill = handleColor;
      }
      sliderGroup.add(handles[handleIndex] = path);
      var textStyleModel = dataZoomModel.getModel('textStyle');
      var handleLabel = dataZoomModel.get('handleLabel') || {};
      var handleLabelShow = handleLabel.show || false;
      thisGroup.add(handleLabels[handleIndex] = new Text["default"]({
        silent: true,
        invisible: !handleLabelShow,
        style: (0,labelStyle.createTextStyle)(textStyleModel, {
          x: 0,
          y: 0,
          text: '',
          verticalAlign: 'middle',
          align: 'center',
          fill: textStyleModel.getTextColor(),
          font: textStyleModel.getFont()
        }),
        z2: 10
      }));
    }, this);
    // Handle to move. Only visible when brushSelect is set true.
    var actualMoveZone = filler;
    if (brushSelect) {
      var moveHandleHeight = (0,number.parsePercent)(dataZoomModel.get('moveHandleSize'), size[1]);
      var moveHandle_1 = displayables.moveHandle = new Rect["default"]({
        style: dataZoomModel.getModel('moveHandleStyle').getItemStyle(),
        silent: true,
        shape: {
          r: [0, 0, 2, 2],
          y: size[1] - 0.5,
          height: moveHandleHeight
        }
      });
      var iconSize = moveHandleHeight * 0.8;
      var moveHandleIcon = displayables.moveHandleIcon = (0,symbol.createSymbol)(dataZoomModel.get('moveHandleIcon'), -iconSize / 2, -iconSize / 2, iconSize, iconSize, tokens["default"].color.neutral00, true);
      moveHandleIcon.silent = true;
      moveHandleIcon.y = size[1] + moveHandleHeight / 2 - 0.5;
      moveHandle_1.ensureState('emphasis').style = dataZoomModel.getModel(['emphasis', 'moveHandleStyle']).getItemStyle();
      var moveZoneExpandSize = Math.min(size[1] / 2, Math.max(moveHandleHeight, 10));
      actualMoveZone = displayables.moveZone = new Rect["default"]({
        invisible: true,
        shape: {
          y: size[1] - moveZoneExpandSize,
          height: moveHandleHeight + moveZoneExpandSize
        }
      });
      actualMoveZone.on('mouseover', function () {
        api.enterEmphasis(moveHandle_1);
      }).on('mouseout', function () {
        api.leaveEmphasis(moveHandle_1);
      });
      sliderGroup.add(moveHandle_1);
      sliderGroup.add(moveHandleIcon);
      sliderGroup.add(actualMoveZone);
    }
    actualMoveZone.attr({
      draggable: true,
      cursor: 'default',
      drift: (0,util.bind)(this._onDragMove, this, 'all'),
      ondragstart: (0,util.bind)(this._showDataInfo, this, true),
      ondragend: (0,util.bind)(this._onDragEnd, this),
      onmouseover: (0,util.bind)(this._showDataInfo, this, true),
      onmouseout: (0,util.bind)(this._showDataInfo, this, false)
    });
  };
  SliderZoomView.prototype._resetInterval = function () {
    var range = this._range = this.dataZoomModel.getPercentRange();
    var viewExtent = this._getViewExtent();
    this._handleEnds = [(0,number.linearMap)(range[0], [0, 100], viewExtent, true), (0,number.linearMap)(range[1], [0, 100], viewExtent, true)];
  };
  SliderZoomView.prototype._updateInterval = function (handleIndex, delta) {
    var dataZoomModel = this.dataZoomModel;
    var handleEnds = this._handleEnds;
    var viewExtend = this._getViewExtent();
    var minMaxSpan = dataZoomModel.findRepresentativeAxisProxy().getMinMaxSpan();
    var percentExtent = [0, 100];
    (0,sliderMove["default"])(delta, handleEnds, viewExtend, dataZoomModel.get('zoomLock') ? 'all' : handleIndex, minMaxSpan.minSpan != null ? (0,number.linearMap)(minMaxSpan.minSpan, percentExtent, viewExtend, true) : null, minMaxSpan.maxSpan != null ? (0,number.linearMap)(minMaxSpan.maxSpan, percentExtent, viewExtend, true) : null);
    var lastRange = this._range;
    var range = this._range = (0,number.asc)([(0,number.linearMap)(handleEnds[0], viewExtend, percentExtent, true), (0,number.linearMap)(handleEnds[1], viewExtend, percentExtent, true)]);
    return !lastRange || lastRange[0] !== range[0] || lastRange[1] !== range[1];
  };
  SliderZoomView.prototype._updateView = function (nonRealtime) {
    var displaybles = this._displayables;
    var handleEnds = this._handleEnds;
    var handleInterval = (0,number.asc)(handleEnds.slice());
    var size = this._size;
    (0,util.each)([0, 1], function (handleIndex) {
      // Handles
      var handle = displaybles.handles[handleIndex];
      var handleHeight = this._handleHeight;
      handle.attr({
        scaleX: handleHeight / 2,
        scaleY: handleHeight / 2,
        // This is a trick, by adding an extra tiny offset to let the default handle's end point align to the drag window.
        // NOTE: It may affect some custom shapes a bit. But we prefer to have better result by default.
        x: handleEnds[handleIndex] + (handleIndex ? -1 : 1),
        y: size[1] / 2 - handleHeight / 2
      });
    }, this);
    // Filler
    displaybles.filler.setShape({
      x: handleInterval[0],
      y: 0,
      width: handleInterval[1] - handleInterval[0],
      height: size[1]
    });
    var viewExtent = {
      x: handleInterval[0],
      width: handleInterval[1] - handleInterval[0]
    };
    // Move handle
    if (displaybles.moveHandle) {
      displaybles.moveHandle.setShape(viewExtent);
      displaybles.moveZone.setShape(viewExtent);
      // Force update path on the invisible object
      displaybles.moveZone.getBoundingRect();
      displaybles.moveHandleIcon && displaybles.moveHandleIcon.attr('x', viewExtent.x + viewExtent.width / 2);
    }
    // update clip path of shadow.
    var dataShadowSegs = displaybles.dataShadowSegs;
    var segIntervals = [0, handleInterval[0], handleInterval[1], size[0]];
    for (var i = 0; i < dataShadowSegs.length; i++) {
      var segGroup = dataShadowSegs[i];
      var clipPath = segGroup.getClipPath();
      if (!clipPath) {
        clipPath = new Rect["default"]();
        segGroup.setClipPath(clipPath);
      }
      clipPath.setShape({
        x: segIntervals[i],
        y: 0,
        width: segIntervals[i + 1] - segIntervals[i],
        height: size[1]
      });
    }
    this._updateDataInfo(nonRealtime);
  };
  SliderZoomView.prototype._updateDataInfo = function (nonRealtime) {
    var dataZoomModel = this.dataZoomModel;
    var displaybles = this._displayables;
    var handleLabels = displaybles.handleLabels;
    var orient = this._orient;
    var labelTexts = ['', ''];
    // FIXME
    // date型，支持formatter，autoformatter（ec2 date.getAutoFormatter）
    if (dataZoomModel.get('showDetail')) {
      var axisProxy = dataZoomModel.findRepresentativeAxisProxy();
      if (axisProxy) {
        var axis = axisProxy.getAxisModel().axis;
        var range = this._range;
        var dataInterval = nonRealtime
        // See #4434, data and axis are not processed and reset yet in non-realtime mode.
        ? axisProxy.calculateDataWindow({
          start: range[0],
          end: range[1]
        }).valueWindow : axisProxy.getDataValueWindow();
        labelTexts = [this._formatLabel(dataInterval[0], axis), this._formatLabel(dataInterval[1], axis)];
      }
    }
    var orderedHandleEnds = (0,number.asc)(this._handleEnds.slice());
    setLabel.call(this, 0);
    setLabel.call(this, 1);
    function setLabel(handleIndex) {
      // Label
      // Text should not transform by barGroup.
      // Ignore handlers transform
      var barTransform = graphic.getTransform(displaybles.handles[handleIndex].parent, this.group);
      var direction = graphic.transformDirection(handleIndex === 0 ? 'right' : 'left', barTransform);
      var offset = this._handleWidth / 2 + LABEL_GAP;
      var textPoint = graphic.applyTransform([orderedHandleEnds[handleIndex] + (handleIndex === 0 ? -offset : offset), this._size[1] / 2], barTransform);
      handleLabels[handleIndex].setStyle({
        x: textPoint[0],
        y: textPoint[1],
        verticalAlign: orient === HORIZONTAL ? 'middle' : direction,
        align: orient === HORIZONTAL ? direction : 'center',
        text: labelTexts[handleIndex]
      });
    }
  };
  SliderZoomView.prototype._formatLabel = function (value, axis) {
    var dataZoomModel = this.dataZoomModel;
    var labelFormatter = dataZoomModel.get('labelFormatter');
    var labelPrecision = dataZoomModel.get('labelPrecision');
    if (labelPrecision == null || labelPrecision === 'auto') {
      labelPrecision = axis.getPixelPrecision();
    }
    var valueStr = value == null || isNaN(value) ? ''
    // FIXME Glue code
    : axis.type === 'category' || axis.type === 'time' ? axis.scale.getLabel({
      value: Math.round(value)
    })
    // param of toFixed should less then 20.
    : value.toFixed(Math.min(labelPrecision, 20));
    return (0,util.isFunction)(labelFormatter) ? labelFormatter(value, valueStr) : (0,util.isString)(labelFormatter) ? labelFormatter.replace('{value}', valueStr) : valueStr;
  };
  /**
   * @param isEmphasis true: show, false: hide
   */
  SliderZoomView.prototype._showDataInfo = function (isEmphasis) {
    var handleLabel = this.dataZoomModel.get('handleLabel') || {};
    var normalShow = handleLabel.show || false;
    var emphasisHandleLabel = this.dataZoomModel.getModel(['emphasis', 'handleLabel']);
    var emphasisShow = emphasisHandleLabel.get('show') || false;
    // Dragging is considered as emphasis, unless emphasisShow is false
    var toShow = isEmphasis || this._dragging ? emphasisShow : normalShow;
    var displayables = this._displayables;
    var handleLabels = displayables.handleLabels;
    handleLabels[0].attr('invisible', !toShow);
    handleLabels[1].attr('invisible', !toShow);
    // Highlight move handle
    displayables.moveHandle && this.api[toShow ? 'enterEmphasis' : 'leaveEmphasis'](displayables.moveHandle, 1);
  };
  SliderZoomView.prototype._onDragMove = function (handleIndex, dx, dy, event) {
    this._dragging = true;
    // For mobile device, prevent screen slider on the button.
    core_event.stop(event.event);
    // Transform dx, dy to bar coordination.
    var barTransform = this._displayables.sliderGroup.getLocalTransform();
    var vertex = graphic.applyTransform([dx, dy], barTransform, true);
    var changed = this._updateInterval(handleIndex, vertex[0]);
    var realtime = this.dataZoomModel.get('realtime');
    this._updateView(!realtime);
    // Avoid dispatch dataZoom repeatly but range not changed,
    // which cause bad visual effect when progressive enabled.
    changed && realtime && this._dispatchZoomAction(true);
  };
  SliderZoomView.prototype._onDragEnd = function () {
    this._dragging = false;
    this._showDataInfo(false);
    // While in realtime mode and stream mode, dispatch action when
    // drag end will cause the whole view rerender, which is unnecessary.
    var realtime = this.dataZoomModel.get('realtime');
    !realtime && this._dispatchZoomAction(false);
  };
  SliderZoomView.prototype._onClickPanel = function (e) {
    var size = this._size;
    var localPoint = this._displayables.sliderGroup.transformCoordToLocal(e.offsetX, e.offsetY);
    if (localPoint[0] < 0 || localPoint[0] > size[0] || localPoint[1] < 0 || localPoint[1] > size[1]) {
      return;
    }
    var handleEnds = this._handleEnds;
    var center = (handleEnds[0] + handleEnds[1]) / 2;
    var changed = this._updateInterval('all', localPoint[0] - center);
    this._updateView();
    changed && this._dispatchZoomAction(false);
  };
  SliderZoomView.prototype._onBrushStart = function (e) {
    var x = e.offsetX;
    var y = e.offsetY;
    this._brushStart = new Point["default"](x, y);
    this._brushing = true;
    this._brushStartTime = +new Date();
    // this._updateBrushRect(x, y);
  };
  SliderZoomView.prototype._onBrushEnd = function (e) {
    if (!this._brushing) {
      return;
    }
    var brushRect = this._displayables.brushRect;
    this._brushing = false;
    if (!brushRect) {
      return;
    }
    brushRect.attr('ignore', true);
    var brushShape = brushRect.shape;
    var brushEndTime = +new Date();
    // console.log(brushEndTime - this._brushStartTime);
    if (brushEndTime - this._brushStartTime < 200 && Math.abs(brushShape.width) < 5) {
      // Will treat it as a click
      return;
    }
    var viewExtend = this._getViewExtent();
    var percentExtent = [0, 100];
    var handleEnds = this._handleEnds = [brushShape.x, brushShape.x + brushShape.width];
    var minMaxSpan = this.dataZoomModel.findRepresentativeAxisProxy().getMinMaxSpan();
    // Restrict range.
    (0,sliderMove["default"])(0, handleEnds, viewExtend, 0, minMaxSpan.minSpan != null ? (0,number.linearMap)(minMaxSpan.minSpan, percentExtent, viewExtend, true) : null, minMaxSpan.maxSpan != null ? (0,number.linearMap)(minMaxSpan.maxSpan, percentExtent, viewExtend, true) : null);
    this._range = (0,number.asc)([(0,number.linearMap)(handleEnds[0], viewExtend, percentExtent, true), (0,number.linearMap)(handleEnds[1], viewExtend, percentExtent, true)]);
    this._updateView();
    this._dispatchZoomAction(false);
  };
  SliderZoomView.prototype._onBrush = function (e) {
    if (this._brushing) {
      // For mobile device, prevent screen slider on the button.
      core_event.stop(e.event);
      this._updateBrushRect(e.offsetX, e.offsetY);
    }
  };
  SliderZoomView.prototype._updateBrushRect = function (mouseX, mouseY) {
    var displayables = this._displayables;
    var dataZoomModel = this.dataZoomModel;
    var brushRect = displayables.brushRect;
    if (!brushRect) {
      brushRect = displayables.brushRect = new SliderZoomView_Rect({
        silent: true,
        style: dataZoomModel.getModel('brushStyle').getItemStyle()
      });
      displayables.sliderGroup.add(brushRect);
    }
    brushRect.attr('ignore', false);
    var brushStart = this._brushStart;
    var sliderGroup = this._displayables.sliderGroup;
    var endPoint = sliderGroup.transformCoordToLocal(mouseX, mouseY);
    var startPoint = sliderGroup.transformCoordToLocal(brushStart.x, brushStart.y);
    var size = this._size;
    endPoint[0] = Math.max(Math.min(size[0], endPoint[0]), 0);
    brushRect.setShape({
      x: startPoint[0],
      y: 0,
      width: endPoint[0] - startPoint[0],
      height: size[1]
    });
  };
  /**
   * This action will be throttled.
   */
  SliderZoomView.prototype._dispatchZoomAction = function (realtime) {
    var range = this._range;
    this.api.dispatchAction({
      type: 'dataZoom',
      from: this.uid,
      dataZoomId: this.dataZoomModel.id,
      animation: realtime ? REALTIME_ANIMATION_CONFIG : null,
      start: range[0],
      end: range[1]
    });
  };
  SliderZoomView.prototype._findCoordRect = function () {
    // Find the grid corresponding to the first axis referred by dataZoom.
    var rect;
    var coordSysInfoList = (0,helper.collectReferCoordSysModelInfo)(this.dataZoomModel).infoList;
    if (!rect && coordSysInfoList.length) {
      var coordSys = coordSysInfoList[0].model.coordinateSystem;
      rect = coordSys.getRect && coordSys.getRect();
    }
    if (!rect) {
      var width = this.api.getWidth();
      var height = this.api.getHeight();
      rect = {
        x: width * 0.2,
        y: height * 0.2,
        width: width * 0.6,
        height: height * 0.6
      };
    }
    return rect;
  };
  SliderZoomView.type = 'dataZoom.slider';
  return SliderZoomView;
}(DataZoomView["default"]);
function getOtherDim(thisDim) {
  // FIXME
  // 这个逻辑和getOtherAxis里一致，但是写在这里是否不好
  var map = {
    x: 'y',
    y: 'x',
    radius: 'angle',
    angle: 'radius'
  };
  return map[thisDim];
}
function getCursor(orient) {
  return orient === 'vertical' ? 'ns-resize' : 'ew-resize';
}
/* ESM default export */ var dataZoom_SliderZoomView = (SliderZoomView_SliderZoomView);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/installCommon.js + 3 modules
var installCommon = __webpack_require__(25000);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/installDataZoomSlider.js

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
  registers.registerComponentModel(dataZoom_SliderZoomModel);
  registers.registerComponentView(dataZoom_SliderZoomView);
  (0,installCommon["default"])(registers);
}

}),
88948: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DatasetModel: function() { return DatasetModel; },
  install: function() { return install; }
});
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var _model_Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81757);
/* ESM import */var _view_Component_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64989);
/* ESM import */var _util_types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19081);
/* ESM import */var _data_helper_sourceManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89442);

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
 * This module is imported by echarts directly.
 *
 * Notice:
 * Always keep this file exists for backward compatibility.
 * Because before 4.1.0, dataset is an optional component,
 * some users may import this module manually.
 */




var DatasetModel = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(DatasetModel, _super);
  function DatasetModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = 'dataset';
    return _this;
  }
  DatasetModel.prototype.init = function (option, parentModel, ecModel) {
    _super.prototype.init.call(this, option, parentModel, ecModel);
    this._sourceManager = new _data_helper_sourceManager_js__WEBPACK_IMPORTED_MODULE_2__.SourceManager(this);
    (0,_data_helper_sourceManager_js__WEBPACK_IMPORTED_MODULE_2__.disableTransformOptionMerge)(this);
  };
  DatasetModel.prototype.mergeOption = function (newOption, ecModel) {
    _super.prototype.mergeOption.call(this, newOption, ecModel);
    (0,_data_helper_sourceManager_js__WEBPACK_IMPORTED_MODULE_2__.disableTransformOptionMerge)(this);
  };
  DatasetModel.prototype.optionUpdated = function () {
    this._sourceManager.dirty();
  };
  DatasetModel.prototype.getSourceManager = function () {
    return this._sourceManager;
  };
  DatasetModel.type = 'dataset';
  DatasetModel.defaultOption = {
    seriesLayoutBy: _util_types_js__WEBPACK_IMPORTED_MODULE_3__.SERIES_LAYOUT_BY_COLUMN
  };
  return DatasetModel;
}(_model_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

var DatasetView = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(DatasetView, _super);
  function DatasetView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = 'dataset';
    return _this;
  }
  DatasetView.type = 'dataset';
  return DatasetView;
}(_view_Component_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
function install(registers) {
  registers.registerComponentModel(DatasetModel);
  registers.registerComponentView(DatasetView);
}

}),
64975: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  install: function() { return /* binding */ install; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/geo/GeoModel.js
var GeoModel = __webpack_require__(77513);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/geo/geoCreator.js + 1 modules
var geoCreator = __webpack_require__(6390);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(56190);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/roamHelper.js
var roamHelper = __webpack_require__(44394);
// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(12012);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/MapDraw.js
var MapDraw = __webpack_require__(62774);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Component.js
var Component = __webpack_require__(64989);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/innerStore.js
var innerStore = __webpack_require__(12212);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/event.js
var util_event = __webpack_require__(35111);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/geo/GeoView.js

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





var GeoView_GeoView = /** @class */function (_super) {
  (0,tslib_es6.__extends)(GeoView, _super);
  function GeoView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = GeoView.type;
    _this.focusBlurEnabled = true;
    return _this;
  }
  GeoView.prototype.init = function (ecModel, api) {
    this._api = api;
  };
  GeoView.prototype.render = function (geoModel, ecModel, api, payload) {
    this._model = geoModel;
    if (!geoModel.get('show')) {
      this._mapDraw && this._mapDraw.remove();
      this._mapDraw = null;
      return;
    }
    if (!this._mapDraw) {
      this._mapDraw = new MapDraw["default"](api);
    }
    var mapDraw = this._mapDraw;
    mapDraw.draw(geoModel, ecModel, api, this, payload);
    mapDraw.group.on('click', this._handleRegionClick, this);
    mapDraw.group.silent = geoModel.get('silent');
    this.group.add(mapDraw.group);
    this.updateSelectStatus(geoModel, ecModel, api);
  };
  GeoView.prototype._handleRegionClick = function (e) {
    var eventData;
    (0,util_event.findEventDispatcher)(e.target, function (current) {
      return (eventData = (0,innerStore.getECData)(current).eventData) != null;
    }, true);
    if (eventData) {
      this._api.dispatchAction({
        type: 'geoToggleSelect',
        geoId: this._model.id,
        name: eventData.name
      });
    }
  };
  GeoView.prototype.updateSelectStatus = function (model, ecModel, api) {
    var _this = this;
    this._mapDraw.group.traverse(function (node) {
      var eventData = (0,innerStore.getECData)(node).eventData;
      if (eventData) {
        _this._model.isSelected(eventData.name) ? api.enterSelect(node) : api.leaveSelect(node);
        // No need to traverse children.
        return true;
      }
    });
  };
  GeoView.prototype.findHighDownDispatchers = function (name) {
    return this._mapDraw && this._mapDraw.findHighDownDispatchers(name, this._model);
  };
  GeoView.prototype.dispose = function () {
    this._mapDraw && this._mapDraw.remove();
  };
  GeoView.type = 'geo';
  return GeoView;
}(Component["default"]);
/* ESM default export */ var geo_GeoView = (GeoView_GeoView);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/geo/geoSourceManager.js + 5 modules
var geoSourceManager = __webpack_require__(7195);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/geo/install.js

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






function registerMap(mapName, geoJson, specialAreas) {
  geoSourceManager["default"].registerMap(mapName, geoJson, specialAreas);
}
function install(registers) {
  registers.registerCoordinateSystem('geo', geoCreator["default"]);
  registers.registerComponentModel(GeoModel["default"]);
  registers.registerComponentView(geo_GeoView);
  registers.registerImpl('registerMap', registerMap);
  registers.registerImpl('getMap', function (mapName) {
    return geoSourceManager["default"].getMapForUser(mapName);
  });
  function makeAction(method, actionInfo) {
    actionInfo.update = 'geo:updateSelectStatus';
    registers.registerAction(actionInfo, function (payload, ecModel) {
      var selected = {};
      var allSelected = [];
      ecModel.eachComponent({
        mainType: 'geo',
        query: payload
      }, function (geoModel) {
        geoModel[method](payload.name);
        var geo = geoModel.coordinateSystem;
        (0,util.each)(geo.regions, function (region) {
          selected[region.name] = geoModel.isSelected(region.name) || false;
        });
        // Notice: there might be duplicated name in different regions.
        var names = [];
        (0,util.each)(selected, function (v, name) {
          selected[name] && names.push(name);
        });
        allSelected.push({
          geoIndex: geoModel.componentIndex,
          // Use singular, the same naming convention as the event `selectchanged`.
          name: names
        });
      });
      return {
        selected: selected,
        allSelected: allSelected,
        name: payload.name
      };
    });
  }
  makeAction('toggleSelected', {
    type: 'geoToggleSelect',
    event: 'geoselectchanged'
  });
  makeAction('select', {
    type: 'geoSelect',
    event: 'geoselected'
  });
  makeAction('unSelect', {
    type: 'geoUnSelect',
    event: 'geounselected'
  });
  /**
   * @payload
   * @property {string} [componentType=series]
   * @property {number} [dx]
   * @property {number} [dy]
   * @property {number} [zoom]
   * @property {number} [originX]
   * @property {number} [originY]
   */
  registers.registerAction({
    type: 'geoRoam',
    event: 'geoRoam',
    update: 'updateTransform'
  }, function (payload, ecModel, api) {
    var componentType = payload.componentType;
    if (!componentType) {
      // backward compat, but `payload.componentType` is deprecated.
      if (payload.geoId != null) {
        componentType = 'geo';
      } else if (payload.seriesId != null) {
        componentType = 'series';
      }
    }
    if (!componentType) {
      componentType = 'series';
    }
    // FIXME: payload.geoId/payload.seriesId should be required, but historically
    //  it is not mandatory, causing that all of the geo or series can be queried below,
    //  which is not reasonable.
    ecModel.eachComponent({
      mainType: componentType,
      query: payload
    }, function (componentModel) {
      var geo = componentModel.coordinateSystem;
      if (geo.type !== 'geo') {
        return;
      }
      var res = (0,roamHelper.updateCenterAndZoomInAction)(geo, payload, componentModel.get('scaleLimit'));
      componentModel.setCenter && componentModel.setCenter(res.center);
      componentModel.setZoom && componentModel.setZoom(res.zoom);
      // All map series with same `map` use the same geo coordinate system
      // So the center and zoom must be in sync. Include the series not selected by legend
      if (componentType === 'series') {
        (0,util.each)(componentModel.seriesGroup, function (seriesModel) {
          seriesModel.setCenter(res.center);
          seriesModel.setZoom(res.zoom);
        });
      }
    });
  });
}

}),

}]);