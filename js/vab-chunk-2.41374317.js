"use strict";
(self["webpackChunkvue_admin_better"] = self["webpackChunkvue_admin_better"] || []).push([["7947"], {
77317: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  install: function() { return /* binding */ install; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(12012);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/createSeriesData.js
var createSeriesData = __webpack_require__(91956);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Series.js
var Series = __webpack_require__(48134);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/symbol.js
var util_symbol = __webpack_require__(44421);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Group.js
var Group = __webpack_require__(58695);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/line/LineSeries.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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





var LineSeries_LineSeriesModel = /** @class */function (_super) {
  (0,tslib_es6.__extends)(LineSeriesModel, _super);
  function LineSeriesModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = LineSeriesModel.type;
    _this.hasSymbolVisual = true;
    return _this;
  }
  LineSeriesModel.prototype.getInitialData = function (option) {
    if (false) { var coordSys }
    return (0,createSeriesData["default"])(null, this, {
      useEncodeDefaulter: true
    });
  };
  LineSeriesModel.prototype.getLegendIcon = function (opt) {
    var group = new Group["default"]();
    var line = (0,util_symbol.createSymbol)('line', 0, opt.itemHeight / 2, opt.itemWidth, 0, opt.lineStyle.stroke, false);
    group.add(line);
    line.setStyle(opt.lineStyle);
    var visualType = this.getData().getVisual('symbol');
    var visualRotate = this.getData().getVisual('symbolRotate');
    var symbolType = visualType === 'none' ? 'circle' : visualType;
    // Symbol size is 80% when there is a line
    var size = opt.itemHeight * 0.8;
    var symbol = (0,util_symbol.createSymbol)(symbolType, (opt.itemWidth - size) / 2, (opt.itemHeight - size) / 2, size, size, opt.itemStyle.fill);
    group.add(symbol);
    symbol.setStyle(opt.itemStyle);
    var symbolRotate = opt.iconRotate === 'inherit' ? visualRotate : opt.iconRotate || 0;
    symbol.rotation = symbolRotate * Math.PI / 180;
    symbol.setOrigin([opt.itemWidth / 2, opt.itemHeight / 2]);
    if (symbolType.indexOf('empty') > -1) {
      symbol.style.stroke = symbol.style.fill;
      symbol.style.fill = '#fff';
      symbol.style.lineWidth = 2;
    }
    return group;
  };
  LineSeriesModel.type = 'series.line';
  LineSeriesModel.dependencies = ['grid', 'polar'];
  LineSeriesModel.defaultOption = {
    // zlevel: 0,
    z: 3,
    coordinateSystem: 'cartesian2d',
    legendHoverLink: true,
    clip: true,
    label: {
      position: 'top'
    },
    // itemStyle: {
    // },
    endLabel: {
      show: false,
      valueAnimation: true,
      distance: 8
    },
    lineStyle: {
      width: 2,
      type: 'solid'
    },
    emphasis: {
      scale: true
    },
    // areaStyle: {
    // origin of areaStyle. Valid values:
    // `'auto'/null/undefined`: from axisLine to data
    // `'start'`: from min to data
    // `'end'`: from data to max
    // origin: 'auto'
    // },
    // false, 'start', 'end', 'middle'
    step: false,
    // Disabled if step is true
    smooth: false,
    smoothMonotone: null,
    symbol: 'emptyCircle',
    symbolSize: 4,
    symbolRotate: null,
    showSymbol: true,
    // `false`: follow the label interval strategy.
    // `true`: show all symbols.
    // `'auto'`: If possible, show all symbols, otherwise
    //           follow the label interval strategy.
    showAllSymbol: 'auto',
    // Whether to connect break point.
    connectNulls: false,
    // Sampling for large data. Can be: 'average', 'max', 'min', 'sum', 'lttb'.
    sampling: 'none',
    animationEasing: 'linear',
    // Disable progressive
    progressive: 0,
    hoverLayerThreshold: Infinity,
    universalTransition: {
      divideShape: 'clone'
    },
    triggerLineEvent: false
  };
  return LineSeriesModel;
}(Series["default"]);
/* ESM default export */ var LineSeries = (LineSeries_LineSeriesModel);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(96585);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/SymbolDraw.js
var SymbolDraw = __webpack_require__(41930);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/Symbol.js
var Symbol = __webpack_require__(91971);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/data/helper/dataStackHelper.js
var dataStackHelper = __webpack_require__(93054);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/line/helper.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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


function prepareDataCoordInfo(coordSys, data, valueOrigin) {
  var baseAxis = coordSys.getBaseAxis();
  var valueAxis = coordSys.getOtherAxis(baseAxis);
  var valueStart = getValueStart(valueAxis, valueOrigin);
  var baseAxisDim = baseAxis.dim;
  var valueAxisDim = valueAxis.dim;
  var valueDim = data.mapDimension(valueAxisDim);
  var baseDim = data.mapDimension(baseAxisDim);
  var baseDataOffset = valueAxisDim === 'x' || valueAxisDim === 'radius' ? 1 : 0;
  var dims = (0,util.map)(coordSys.dimensions, function (coordDim) {
    return data.mapDimension(coordDim);
  });
  var stacked = false;
  var stackResultDim = data.getCalculationInfo('stackResultDimension');
  if ((0,dataStackHelper.isDimensionStacked)(data, dims[0] /* , dims[1] */)) {
    // jshint ignore:line
    stacked = true;
    dims[0] = stackResultDim;
  }
  if ((0,dataStackHelper.isDimensionStacked)(data, dims[1] /* , dims[0] */)) {
    // jshint ignore:line
    stacked = true;
    dims[1] = stackResultDim;
  }
  return {
    dataDimsForPoint: dims,
    valueStart: valueStart,
    valueAxisDim: valueAxisDim,
    baseAxisDim: baseAxisDim,
    stacked: !!stacked,
    valueDim: valueDim,
    baseDim: baseDim,
    baseDataOffset: baseDataOffset,
    stackedOverDimension: data.getCalculationInfo('stackedOverDimension')
  };
}
function getValueStart(valueAxis, valueOrigin) {
  var valueStart = 0;
  var extent = valueAxis.scale.getExtent();
  if (valueOrigin === 'start') {
    valueStart = extent[0];
  } else if (valueOrigin === 'end') {
    valueStart = extent[1];
  }
  // If origin is specified as a number, use it as
  // valueStart directly
  else if ((0,util.isNumber)(valueOrigin) && !isNaN(valueOrigin)) {
    valueStart = valueOrigin;
  }
  // auto
  else {
    // Both positive
    if (extent[0] > 0) {
      valueStart = extent[0];
    }
    // Both negative
    else if (extent[1] < 0) {
      valueStart = extent[1];
    }
    // If is one positive, and one negative, onZero shall be true
  }
  return valueStart;
}
function getStackedOnPoint(dataCoordInfo, coordSys, data, idx) {
  var value = NaN;
  if (dataCoordInfo.stacked) {
    value = data.get(data.getCalculationInfo('stackedOverDimension'), idx);
  }
  if (isNaN(value)) {
    value = dataCoordInfo.valueStart;
  }
  var baseDataOffset = dataCoordInfo.baseDataOffset;
  var stackedData = [];
  stackedData[baseDataOffset] = data.get(dataCoordInfo.baseDim, idx);
  stackedData[1 - baseDataOffset] = value;
  return coordSys.dataToPoint(stackedData);
}
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/vendor.js
var vendor = __webpack_require__(27129);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/line/lineAnimationDiff.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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


function diffData(oldData, newData) {
  var diffResult = [];
  newData.diff(oldData).add(function (idx) {
    diffResult.push({
      cmd: '+',
      idx: idx
    });
  }).update(function (newIdx, oldIdx) {
    diffResult.push({
      cmd: '=',
      idx: oldIdx,
      idx1: newIdx
    });
  }).remove(function (idx) {
    diffResult.push({
      cmd: '-',
      idx: idx
    });
  }).execute();
  return diffResult;
}
function lineAnimationDiff(oldData, newData, oldStackedOnPoints, newStackedOnPoints, oldCoordSys, newCoordSys, oldValueOrigin, newValueOrigin) {
  var diff = diffData(oldData, newData);
  // let newIdList = newData.mapArray(newData.getId);
  // let oldIdList = oldData.mapArray(oldData.getId);
  // convertToIntId(newIdList, oldIdList);
  // // FIXME One data ?
  // diff = arrayDiff(oldIdList, newIdList);
  var currPoints = [];
  var nextPoints = [];
  // Points for stacking base line
  var currStackedPoints = [];
  var nextStackedPoints = [];
  var status = [];
  var sortedIndices = [];
  var rawIndices = [];
  var newDataOldCoordInfo = prepareDataCoordInfo(oldCoordSys, newData, oldValueOrigin);
  // const oldDataNewCoordInfo = prepareDataCoordInfo(newCoordSys, oldData, newValueOrigin);
  var oldPoints = oldData.getLayout('points') || [];
  var newPoints = newData.getLayout('points') || [];
  for (var i = 0; i < diff.length; i++) {
    var diffItem = diff[i];
    var pointAdded = true;
    var oldIdx2 = void 0;
    var newIdx2 = void 0;
    // FIXME, animation is not so perfect when dataZoom window moves fast
    // Which is in case remvoing or add more than one data in the tail or head
    switch (diffItem.cmd) {
      case '=':
        oldIdx2 = diffItem.idx * 2;
        newIdx2 = diffItem.idx1 * 2;
        var currentX = oldPoints[oldIdx2];
        var currentY = oldPoints[oldIdx2 + 1];
        var nextX = newPoints[newIdx2];
        var nextY = newPoints[newIdx2 + 1];
        // If previous data is NaN, use next point directly
        if (isNaN(currentX) || isNaN(currentY)) {
          currentX = nextX;
          currentY = nextY;
        }
        currPoints.push(currentX, currentY);
        nextPoints.push(nextX, nextY);
        currStackedPoints.push(oldStackedOnPoints[oldIdx2], oldStackedOnPoints[oldIdx2 + 1]);
        nextStackedPoints.push(newStackedOnPoints[newIdx2], newStackedOnPoints[newIdx2 + 1]);
        rawIndices.push(newData.getRawIndex(diffItem.idx1));
        break;
      case '+':
        var newIdx = diffItem.idx;
        var newDataDimsForPoint = newDataOldCoordInfo.dataDimsForPoint;
        var oldPt = oldCoordSys.dataToPoint([newData.get(newDataDimsForPoint[0], newIdx), newData.get(newDataDimsForPoint[1], newIdx)]);
        newIdx2 = newIdx * 2;
        currPoints.push(oldPt[0], oldPt[1]);
        nextPoints.push(newPoints[newIdx2], newPoints[newIdx2 + 1]);
        var stackedOnPoint = getStackedOnPoint(newDataOldCoordInfo, oldCoordSys, newData, newIdx);
        currStackedPoints.push(stackedOnPoint[0], stackedOnPoint[1]);
        nextStackedPoints.push(newStackedOnPoints[newIdx2], newStackedOnPoints[newIdx2 + 1]);
        rawIndices.push(newData.getRawIndex(newIdx));
        break;
      case '-':
        pointAdded = false;
    }
    // Original indices
    if (pointAdded) {
      status.push(diffItem);
      sortedIndices.push(sortedIndices.length);
    }
  }
  // Diff result may be crossed if all items are changed
  // Sort by data index
  sortedIndices.sort(function (a, b) {
    return rawIndices[a] - rawIndices[b];
  });
  var len = currPoints.length;
  var sortedCurrPoints = (0,vendor.createFloat32Array)(len);
  var sortedNextPoints = (0,vendor.createFloat32Array)(len);
  var sortedCurrStackedPoints = (0,vendor.createFloat32Array)(len);
  var sortedNextStackedPoints = (0,vendor.createFloat32Array)(len);
  var sortedStatus = [];
  for (var i = 0; i < sortedIndices.length; i++) {
    var idx = sortedIndices[i];
    var i2 = i * 2;
    var idx2 = idx * 2;
    sortedCurrPoints[i2] = currPoints[idx2];
    sortedCurrPoints[i2 + 1] = currPoints[idx2 + 1];
    sortedNextPoints[i2] = nextPoints[idx2];
    sortedNextPoints[i2 + 1] = nextPoints[idx2 + 1];
    sortedCurrStackedPoints[i2] = currStackedPoints[idx2];
    sortedCurrStackedPoints[i2 + 1] = currStackedPoints[idx2 + 1];
    sortedNextStackedPoints[i2] = nextStackedPoints[idx2];
    sortedNextStackedPoints[i2 + 1] = nextStackedPoints[idx2 + 1];
    sortedStatus[i] = status[idx];
  }
  return {
    current: sortedCurrPoints,
    next: sortedNextPoints,
    stackedOnCurrent: sortedCurrStackedPoints,
    stackedOnNext: sortedNextStackedPoints,
    status: sortedStatus
  };
}
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/LinearGradient.js
var LinearGradient = __webpack_require__(71756);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/animation/basicTransition.js
var basicTransition = __webpack_require__(17524);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Text.js
var Text = __webpack_require__(97199);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/model.js
var model = __webpack_require__(46451);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/line/poly.js
var poly = __webpack_require__(74472);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/view/Chart.js
var Chart = __webpack_require__(47389);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/createClipPathFromCoordSys.js
var createClipPathFromCoordSys = __webpack_require__(92741);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/CoordinateSystem.js
var CoordinateSystem = __webpack_require__(63248);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/states.js
var states = __webpack_require__(63344);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/label/labelStyle.js
var labelStyle = __webpack_require__(77704);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/labelHelper.js
var labelHelper = __webpack_require__(8169);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/innerStore.js
var innerStore = __webpack_require__(55413);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/format.js
var format = __webpack_require__(43718);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/tool/color.js
var tool_color = __webpack_require__(67375);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/line/LineView.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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

// FIXME step not support polar


















function isPointsSame(points1, points2) {
  if (points1.length !== points2.length) {
    return;
  }
  for (var i = 0; i < points1.length; i++) {
    if (points1[i] !== points2[i]) {
      return;
    }
  }
  return true;
}
function bboxFromPoints(points) {
  var minX = Infinity;
  var minY = Infinity;
  var maxX = -Infinity;
  var maxY = -Infinity;
  for (var i = 0; i < points.length;) {
    var x = points[i++];
    var y = points[i++];
    if (!isNaN(x)) {
      minX = Math.min(x, minX);
      maxX = Math.max(x, maxX);
    }
    if (!isNaN(y)) {
      minY = Math.min(y, minY);
      maxY = Math.max(y, maxY);
    }
  }
  return [[minX, minY], [maxX, maxY]];
}
function getBoundingDiff(points1, points2) {
  var _a = bboxFromPoints(points1),
    min1 = _a[0],
    max1 = _a[1];
  var _b = bboxFromPoints(points2),
    min2 = _b[0],
    max2 = _b[1];
  // Get a max value from each corner of two boundings.
  return Math.max(Math.abs(min1[0] - min2[0]), Math.abs(min1[1] - min2[1]), Math.abs(max1[0] - max2[0]), Math.abs(max1[1] - max2[1]));
}
function getSmooth(smooth) {
  return util.isNumber(smooth) ? smooth : smooth ? 0.5 : 0;
}
function getStackedOnPoints(coordSys, data, dataCoordInfo) {
  if (!dataCoordInfo.valueDim) {
    return [];
  }
  var len = data.count();
  var points = (0,vendor.createFloat32Array)(len * 2);
  for (var idx = 0; idx < len; idx++) {
    var pt = getStackedOnPoint(dataCoordInfo, coordSys, data, idx);
    points[idx * 2] = pt[0];
    points[idx * 2 + 1] = pt[1];
  }
  return points;
}
/**
 * Filter the null data and extend data for step considering `stepTurnAt`
 *
 * @param points data to convert, that may containing null
 * @param basePoints base data to reference, used only for areaStyle points
 * @param coordSys coordinate system
 * @param stepTurnAt 'start' | 'end' | 'middle' | true
 * @param connectNulls whether to connect nulls
 * @returns converted point positions
 */
function turnPointsIntoStep(points, basePoints, coordSys, stepTurnAt, connectNulls) {
  var baseAxis = coordSys.getBaseAxis();
  var baseIndex = baseAxis.dim === 'x' || baseAxis.dim === 'radius' ? 0 : 1;
  var stepPoints = [];
  var i = 0;
  var stepPt = [];
  var pt = [];
  var nextPt = [];
  var filteredPoints = [];
  if (connectNulls) {
    for (i = 0; i < points.length; i += 2) {
      /**
       * For areaStyle of stepped lines, `stackedOnPoints` should be
       * filtered the same as `points` so that the base axis values
       * should stay the same as the lines above. See #20021
       */
      var reference = basePoints || points;
      if (!isNaN(reference[i]) && !isNaN(reference[i + 1])) {
        filteredPoints.push(points[i], points[i + 1]);
      }
    }
    points = filteredPoints;
  }
  for (i = 0; i < points.length - 2; i += 2) {
    nextPt[0] = points[i + 2];
    nextPt[1] = points[i + 3];
    pt[0] = points[i];
    pt[1] = points[i + 1];
    stepPoints.push(pt[0], pt[1]);
    switch (stepTurnAt) {
      case 'end':
        stepPt[baseIndex] = nextPt[baseIndex];
        stepPt[1 - baseIndex] = pt[1 - baseIndex];
        stepPoints.push(stepPt[0], stepPt[1]);
        break;
      case 'middle':
        var middle = (pt[baseIndex] + nextPt[baseIndex]) / 2;
        var stepPt2 = [];
        stepPt[baseIndex] = stepPt2[baseIndex] = middle;
        stepPt[1 - baseIndex] = pt[1 - baseIndex];
        stepPt2[1 - baseIndex] = nextPt[1 - baseIndex];
        stepPoints.push(stepPt[0], stepPt[1]);
        stepPoints.push(stepPt2[0], stepPt2[1]);
        break;
      default:
        // default is start
        stepPt[baseIndex] = pt[baseIndex];
        stepPt[1 - baseIndex] = nextPt[1 - baseIndex];
        stepPoints.push(stepPt[0], stepPt[1]);
    }
  }
  // Last points
  stepPoints.push(points[i++], points[i++]);
  return stepPoints;
}
/**
 * Clip color stops to edge. Avoid creating too large gradients.
 * Which may lead to blurry when GPU acceleration is enabled. See #15680
 *
 * The stops has been sorted from small to large.
 */
function clipColorStops(colorStops, maxSize) {
  var newColorStops = [];
  var len = colorStops.length;
  // coord will always < 0 in prevOutOfRangeColorStop.
  var prevOutOfRangeColorStop;
  var prevInRangeColorStop;
  function lerpStop(stop0, stop1, clippedCoord) {
    var coord0 = stop0.coord;
    var p = (clippedCoord - coord0) / (stop1.coord - coord0);
    var color = (0,tool_color.lerp)(p, [stop0.color, stop1.color]);
    return {
      coord: clippedCoord,
      color: color
    };
  }
  for (var i = 0; i < len; i++) {
    var stop_1 = colorStops[i];
    var coord = stop_1.coord;
    if (coord < 0) {
      prevOutOfRangeColorStop = stop_1;
    } else if (coord > maxSize) {
      if (prevInRangeColorStop) {
        newColorStops.push(lerpStop(prevInRangeColorStop, stop_1, maxSize));
      } else if (prevOutOfRangeColorStop) {
        // If there are two stops and coord range is between these two stops
        newColorStops.push(lerpStop(prevOutOfRangeColorStop, stop_1, 0), lerpStop(prevOutOfRangeColorStop, stop_1, maxSize));
      }
      // All following stop will be out of range. So just ignore them.
      break;
    } else {
      if (prevOutOfRangeColorStop) {
        newColorStops.push(lerpStop(prevOutOfRangeColorStop, stop_1, 0));
        // Reset
        prevOutOfRangeColorStop = null;
      }
      newColorStops.push(stop_1);
      prevInRangeColorStop = stop_1;
    }
  }
  return newColorStops;
}
function getVisualGradient(data, coordSys, api) {
  var visualMetaList = data.getVisual('visualMeta');
  if (!visualMetaList || !visualMetaList.length || !data.count()) {
    // When data.count() is 0, gradient range can not be calculated.
    return;
  }
  if (coordSys.type !== 'cartesian2d') {
    if (false) {}
    return;
  }
  var coordDim;
  var visualMeta;
  for (var i = visualMetaList.length - 1; i >= 0; i--) {
    var dimInfo = data.getDimensionInfo(visualMetaList[i].dimension);
    coordDim = dimInfo && dimInfo.coordDim;
    // Can only be x or y
    if (coordDim === 'x' || coordDim === 'y') {
      visualMeta = visualMetaList[i];
      break;
    }
  }
  if (!visualMeta) {
    if (false) {}
    return;
  }
  // If the area to be rendered is bigger than area defined by LinearGradient,
  // the canvas spec prescribes that the color of the first stop and the last
  // stop should be used. But if two stops are added at offset 0, in effect
  // browsers use the color of the second stop to render area outside
  // LinearGradient. So we can only infinitesimally extend area defined in
  // LinearGradient to render `outerColors`.
  var axis = coordSys.getAxis(coordDim);
  // dataToCoord mapping may not be linear, but must be monotonic.
  var colorStops = util.map(visualMeta.stops, function (stop) {
    // offset will be calculated later.
    return {
      coord: axis.toGlobalCoord(axis.dataToCoord(stop.value)),
      color: stop.color
    };
  });
  var stopLen = colorStops.length;
  var outerColors = visualMeta.outerColors.slice();
  if (stopLen && colorStops[0].coord > colorStops[stopLen - 1].coord) {
    colorStops.reverse();
    outerColors.reverse();
  }
  var colorStopsInRange = clipColorStops(colorStops, coordDim === 'x' ? api.getWidth() : api.getHeight());
  var inRangeStopLen = colorStopsInRange.length;
  if (!inRangeStopLen && stopLen) {
    // All stops are out of range. All will be the same color.
    return colorStops[0].coord < 0 ? outerColors[1] ? outerColors[1] : colorStops[stopLen - 1].color : outerColors[0] ? outerColors[0] : colorStops[0].color;
  }
  var tinyExtent = 10; // Arbitrary value: 10px
  var minCoord = colorStopsInRange[0].coord - tinyExtent;
  var maxCoord = colorStopsInRange[inRangeStopLen - 1].coord + tinyExtent;
  var coordSpan = maxCoord - minCoord;
  if (coordSpan < 1e-3) {
    return 'transparent';
  }
  util.each(colorStopsInRange, function (stop) {
    stop.offset = (stop.coord - minCoord) / coordSpan;
  });
  colorStopsInRange.push({
    // NOTE: inRangeStopLen may still be 0 if stoplen is zero.
    offset: inRangeStopLen ? colorStopsInRange[inRangeStopLen - 1].offset : 0.5,
    color: outerColors[1] || 'transparent'
  });
  colorStopsInRange.unshift({
    offset: inRangeStopLen ? colorStopsInRange[0].offset : 0.5,
    color: outerColors[0] || 'transparent'
  });
  var gradient = new LinearGradient["default"](0, 0, 0, 0, colorStopsInRange, true);
  gradient[coordDim] = minCoord;
  gradient[coordDim + '2'] = maxCoord;
  return gradient;
}
function getIsIgnoreFunc(seriesModel, data, coordSys) {
  var showAllSymbol = seriesModel.get('showAllSymbol');
  var isAuto = showAllSymbol === 'auto';
  if (showAllSymbol && !isAuto) {
    return;
  }
  var categoryAxis = coordSys.getAxesByScale('ordinal')[0];
  if (!categoryAxis) {
    return;
  }
  // Note that category label interval strategy might bring some weird effect
  // in some scenario: users may wonder why some of the symbols are not
  // displayed. So we show all symbols as possible as we can.
  if (isAuto
  // Simplify the logic, do not determine label overlap here.
  && canShowAllSymbolForCategory(categoryAxis, data)) {
    return;
  }
  // Otherwise follow the label interval strategy on category axis.
  var categoryDataDim = data.mapDimension(categoryAxis.dim);
  var labelMap = {};
  util.each(categoryAxis.getViewLabels(), function (labelItem) {
    var ordinalNumber = categoryAxis.scale.getRawOrdinalNumber(labelItem.tickValue);
    labelMap[ordinalNumber] = 1;
  });
  return function (dataIndex) {
    return !labelMap.hasOwnProperty(data.get(categoryDataDim, dataIndex));
  };
}
function canShowAllSymbolForCategory(categoryAxis, data) {
  // In most cases, line is monotonous on category axis, and the label size
  // is close with each other. So we check the symbol size and some of the
  // label size alone with the category axis to estimate whether all symbol
  // can be shown without overlap.
  var axisExtent = categoryAxis.getExtent();
  var availSize = Math.abs(axisExtent[1] - axisExtent[0]) / categoryAxis.scale.count();
  isNaN(availSize) && (availSize = 0); // 0/0 is NaN.
  // Sampling some points, max 5.
  var dataLen = data.count();
  var step = Math.max(1, Math.round(dataLen / 5));
  for (var dataIndex = 0; dataIndex < dataLen; dataIndex += step) {
    if (Symbol["default"].getSymbolSize(data, dataIndex
    // Only for cartesian, where `isHorizontal` exists.
    )[categoryAxis.isHorizontal() ? 1 : 0]
    // Empirical number
    * 1.5 > availSize) {
      return false;
    }
  }
  return true;
}
function isPointNull(x, y) {
  return isNaN(x) || isNaN(y);
}
function getLastIndexNotNull(points) {
  var len = points.length / 2;
  for (; len > 0; len--) {
    if (!isPointNull(points[len * 2 - 2], points[len * 2 - 1])) {
      break;
    }
  }
  return len - 1;
}
function getPointAtIndex(points, idx) {
  return [points[idx * 2], points[idx * 2 + 1]];
}
function getIndexRange(points, xOrY, dim) {
  var len = points.length / 2;
  var dimIdx = dim === 'x' ? 0 : 1;
  var a;
  var b;
  var prevIndex = 0;
  var nextIndex = -1;
  for (var i = 0; i < len; i++) {
    b = points[i * 2 + dimIdx];
    if (isNaN(b) || isNaN(points[i * 2 + 1 - dimIdx])) {
      continue;
    }
    if (i === 0) {
      a = b;
      continue;
    }
    if (a <= xOrY && b >= xOrY || a >= xOrY && b <= xOrY) {
      nextIndex = i;
      break;
    }
    prevIndex = i;
    a = b;
  }
  return {
    range: [prevIndex, nextIndex],
    t: (xOrY - a) / (b - a)
  };
}
function anyStateShowEndLabel(seriesModel) {
  if (seriesModel.get(['endLabel', 'show'])) {
    return true;
  }
  for (var i = 0; i < states.SPECIAL_STATES.length; i++) {
    if (seriesModel.get([states.SPECIAL_STATES[i], 'endLabel', 'show'])) {
      return true;
    }
  }
  return false;
}
function createLineClipPath(lineView, coordSys, hasAnimation, seriesModel) {
  if ((0,CoordinateSystem.isCoordinateSystemType)(coordSys, 'cartesian2d')) {
    var endLabelModel_1 = seriesModel.getModel('endLabel');
    var valueAnimation_1 = endLabelModel_1.get('valueAnimation');
    var data_1 = seriesModel.getData();
    var labelAnimationRecord_1 = {
      lastFrameIndex: 0
    };
    var during = anyStateShowEndLabel(seriesModel) ? function (percent, clipRect) {
      lineView._endLabelOnDuring(percent, clipRect, data_1, labelAnimationRecord_1, valueAnimation_1, endLabelModel_1, coordSys);
    } : null;
    var isHorizontal = coordSys.getBaseAxis().isHorizontal();
    var clipPath = (0,createClipPathFromCoordSys.createGridClipPath)(coordSys, hasAnimation, seriesModel, function () {
      var endLabel = lineView._endLabel;
      if (endLabel && hasAnimation) {
        if (labelAnimationRecord_1.originalX != null) {
          endLabel.attr({
            x: labelAnimationRecord_1.originalX,
            y: labelAnimationRecord_1.originalY
          });
        }
      }
    }, during);
    // Expand clip shape to avoid clipping when line value exceeds axis
    if (!seriesModel.get('clip', true)) {
      var rectShape = clipPath.shape;
      var expandSize = Math.max(rectShape.width, rectShape.height);
      if (isHorizontal) {
        rectShape.y -= expandSize;
        rectShape.height += expandSize * 2;
      } else {
        rectShape.x -= expandSize;
        rectShape.width += expandSize * 2;
      }
    }
    // Set to the final frame. To make sure label layout is right.
    if (during) {
      during(1, clipPath);
    }
    return clipPath;
  } else {
    if (false) {}
    return (0,createClipPathFromCoordSys.createPolarClipPath)(coordSys, hasAnimation, seriesModel);
  }
}
function getEndLabelStateSpecified(endLabelModel, coordSys) {
  var baseAxis = coordSys.getBaseAxis();
  var isHorizontal = baseAxis.isHorizontal();
  var isBaseInversed = baseAxis.inverse;
  var align = isHorizontal ? isBaseInversed ? 'right' : 'left' : 'center';
  var verticalAlign = isHorizontal ? 'middle' : isBaseInversed ? 'top' : 'bottom';
  return {
    normal: {
      align: endLabelModel.get('align') || align,
      verticalAlign: endLabelModel.get('verticalAlign') || verticalAlign
    }
  };
}
var LineView_LineView = /** @class */function (_super) {
  (0,tslib_es6.__extends)(LineView, _super);
  function LineView() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  LineView.prototype.init = function () {
    var lineGroup = new Group["default"]();
    var symbolDraw = new SymbolDraw["default"]();
    this.group.add(symbolDraw.group);
    this._symbolDraw = symbolDraw;
    this._lineGroup = lineGroup;
    this._changePolyState = util.bind(this._changePolyState, this);
  };
  LineView.prototype.render = function (seriesModel, ecModel, api) {
    var coordSys = seriesModel.coordinateSystem;
    var group = this.group;
    var data = seriesModel.getData();
    var lineStyleModel = seriesModel.getModel('lineStyle');
    var areaStyleModel = seriesModel.getModel('areaStyle');
    var points = data.getLayout('points') || [];
    var isCoordSysPolar = coordSys.type === 'polar';
    var prevCoordSys = this._coordSys;
    var symbolDraw = this._symbolDraw;
    var polyline = this._polyline;
    var polygon = this._polygon;
    var lineGroup = this._lineGroup;
    var hasAnimation = !ecModel.ssr && seriesModel.get('animation');
    var isAreaChart = !areaStyleModel.isEmpty();
    var valueOrigin = areaStyleModel.get('origin');
    var dataCoordInfo = prepareDataCoordInfo(coordSys, data, valueOrigin);
    var stackedOnPoints = isAreaChart && getStackedOnPoints(coordSys, data, dataCoordInfo);
    var showSymbol = seriesModel.get('showSymbol');
    var connectNulls = seriesModel.get('connectNulls');
    var isIgnoreFunc = showSymbol && !isCoordSysPolar && getIsIgnoreFunc(seriesModel, data, coordSys);
    // Remove temporary symbols
    var oldData = this._data;
    oldData && oldData.eachItemGraphicEl(function (el, idx) {
      if (el.__temp) {
        group.remove(el);
        oldData.setItemGraphicEl(idx, null);
      }
    });
    // Remove previous created symbols if showSymbol changed to false
    if (!showSymbol) {
      symbolDraw.remove();
    }
    group.add(lineGroup);
    // FIXME step not support polar
    var step = !isCoordSysPolar ? seriesModel.get('step') : false;
    var clipShapeForSymbol;
    if (coordSys && coordSys.getArea && seriesModel.get('clip', true)) {
      clipShapeForSymbol = coordSys.getArea();
      // Avoid float number rounding error for symbol on the edge of axis extent.
      // See #7913 and `test/dataZoom-clip.html`.
      if (clipShapeForSymbol.width != null) {
        clipShapeForSymbol.x -= 0.1;
        clipShapeForSymbol.y -= 0.1;
        clipShapeForSymbol.width += 0.2;
        clipShapeForSymbol.height += 0.2;
      } else if (clipShapeForSymbol.r0) {
        clipShapeForSymbol.r0 -= 0.5;
        clipShapeForSymbol.r += 0.5;
      }
    }
    this._clipShapeForSymbol = clipShapeForSymbol;
    var visualColor = getVisualGradient(data, coordSys, api) || data.getVisual('style')[data.getVisual('drawType')];
    // Initialization animation or coordinate system changed
    if (!(polyline && prevCoordSys.type === coordSys.type && step === this._step)) {
      showSymbol && symbolDraw.updateData(data, {
        isIgnore: isIgnoreFunc,
        clipShape: clipShapeForSymbol,
        disableAnimation: true,
        getSymbolPoint: function (idx) {
          return [points[idx * 2], points[idx * 2 + 1]];
        }
      });
      hasAnimation && this._initSymbolLabelAnimation(data, coordSys, clipShapeForSymbol);
      if (step) {
        if (stackedOnPoints) {
          stackedOnPoints = turnPointsIntoStep(stackedOnPoints, points, coordSys, step, connectNulls);
        }
        // TODO If stacked series is not step
        points = turnPointsIntoStep(points, null, coordSys, step, connectNulls);
      }
      polyline = this._newPolyline(points);
      if (isAreaChart) {
        polygon = this._newPolygon(points, stackedOnPoints);
      } // If areaStyle is removed
      else if (polygon) {
        lineGroup.remove(polygon);
        polygon = this._polygon = null;
      }
      // NOTE: Must update _endLabel before setClipPath.
      if (!isCoordSysPolar) {
        this._initOrUpdateEndLabel(seriesModel, coordSys, (0,format.convertToColorString)(visualColor));
      }
      lineGroup.setClipPath(createLineClipPath(this, coordSys, true, seriesModel));
    } else {
      if (isAreaChart && !polygon) {
        // If areaStyle is added
        polygon = this._newPolygon(points, stackedOnPoints);
      } else if (polygon && !isAreaChart) {
        // If areaStyle is removed
        lineGroup.remove(polygon);
        polygon = this._polygon = null;
      }
      // NOTE: Must update _endLabel before setClipPath.
      if (!isCoordSysPolar) {
        this._initOrUpdateEndLabel(seriesModel, coordSys, (0,format.convertToColorString)(visualColor));
      }
      // Update clipPath
      var oldClipPath = lineGroup.getClipPath();
      if (oldClipPath) {
        var newClipPath = createLineClipPath(this, coordSys, false, seriesModel);
        basicTransition.initProps(oldClipPath, {
          shape: newClipPath.shape
        }, seriesModel);
      } else {
        lineGroup.setClipPath(createLineClipPath(this, coordSys, true, seriesModel));
      }
      // Always update, or it is wrong in the case turning on legend
      // because points are not changed.
      showSymbol && symbolDraw.updateData(data, {
        isIgnore: isIgnoreFunc,
        clipShape: clipShapeForSymbol,
        disableAnimation: true,
        getSymbolPoint: function (idx) {
          return [points[idx * 2], points[idx * 2 + 1]];
        }
      });
      // In the case data zoom triggered refreshing frequently
      // Data may not change if line has a category axis. So it should animate nothing.
      if (!isPointsSame(this._stackedOnPoints, stackedOnPoints) || !isPointsSame(this._points, points)) {
        if (hasAnimation) {
          this._doUpdateAnimation(data, stackedOnPoints, coordSys, api, step, valueOrigin, connectNulls);
        } else {
          // Not do it in update with animation
          if (step) {
            if (stackedOnPoints) {
              stackedOnPoints = turnPointsIntoStep(stackedOnPoints, points, coordSys, step, connectNulls);
            }
            // TODO If stacked series is not step
            points = turnPointsIntoStep(points, null, coordSys, step, connectNulls);
          }
          polyline.setShape({
            points: points
          });
          polygon && polygon.setShape({
            points: points,
            stackedOnPoints: stackedOnPoints
          });
        }
      }
    }
    var emphasisModel = seriesModel.getModel('emphasis');
    var focus = emphasisModel.get('focus');
    var blurScope = emphasisModel.get('blurScope');
    var emphasisDisabled = emphasisModel.get('disabled');
    polyline.useStyle(util.defaults(
    // Use color in lineStyle first
    lineStyleModel.getLineStyle(), {
      fill: 'none',
      stroke: visualColor,
      lineJoin: 'bevel'
    }));
    (0,states.setStatesStylesFromModel)(polyline, seriesModel, 'lineStyle');
    if (polyline.style.lineWidth > 0 && seriesModel.get(['emphasis', 'lineStyle', 'width']) === 'bolder') {
      var emphasisLineStyle = polyline.getState('emphasis').style;
      emphasisLineStyle.lineWidth = +polyline.style.lineWidth + 1;
    }
    // Needs seriesIndex for focus
    (0,innerStore.getECData)(polyline).seriesIndex = seriesModel.seriesIndex;
    (0,states.toggleHoverEmphasis)(polyline, focus, blurScope, emphasisDisabled);
    var smooth = getSmooth(seriesModel.get('smooth'));
    var smoothMonotone = seriesModel.get('smoothMonotone');
    polyline.setShape({
      smooth: smooth,
      smoothMonotone: smoothMonotone,
      connectNulls: connectNulls
    });
    if (polygon) {
      var stackedOnSeries = data.getCalculationInfo('stackedOnSeries');
      var stackedOnSmooth = 0;
      polygon.useStyle(util.defaults(areaStyleModel.getAreaStyle(), {
        fill: visualColor,
        opacity: 0.7,
        lineJoin: 'bevel',
        decal: data.getVisual('style').decal
      }));
      if (stackedOnSeries) {
        stackedOnSmooth = getSmooth(stackedOnSeries.get('smooth'));
      }
      polygon.setShape({
        smooth: smooth,
        stackedOnSmooth: stackedOnSmooth,
        smoothMonotone: smoothMonotone,
        connectNulls: connectNulls
      });
      (0,states.setStatesStylesFromModel)(polygon, seriesModel, 'areaStyle');
      // Needs seriesIndex for focus
      (0,innerStore.getECData)(polygon).seriesIndex = seriesModel.seriesIndex;
      (0,states.toggleHoverEmphasis)(polygon, focus, blurScope, emphasisDisabled);
    }
    var changePolyState = this._changePolyState;
    data.eachItemGraphicEl(function (el) {
      // Switch polyline / polygon state if element changed its state.
      el && (el.onHoverStateChange = changePolyState);
    });
    this._polyline.onHoverStateChange = changePolyState;
    this._data = data;
    // Save the coordinate system for transition animation when data changed
    this._coordSys = coordSys;
    this._stackedOnPoints = stackedOnPoints;
    this._points = points;
    this._step = step;
    this._valueOrigin = valueOrigin;
    if (seriesModel.get('triggerLineEvent')) {
      this.packEventData(seriesModel, polyline);
      polygon && this.packEventData(seriesModel, polygon);
    }
  };
  LineView.prototype.packEventData = function (seriesModel, el) {
    (0,innerStore.getECData)(el).eventData = {
      componentType: 'series',
      componentSubType: 'line',
      componentIndex: seriesModel.componentIndex,
      seriesIndex: seriesModel.seriesIndex,
      seriesName: seriesModel.name,
      seriesType: 'line'
    };
  };
  LineView.prototype.highlight = function (seriesModel, ecModel, api, payload) {
    var data = seriesModel.getData();
    var dataIndex = model.queryDataIndex(data, payload);
    this._changePolyState('emphasis');
    if (!(dataIndex instanceof Array) && dataIndex != null && dataIndex >= 0) {
      var points = data.getLayout('points');
      var symbol = data.getItemGraphicEl(dataIndex);
      if (!symbol) {
        // Create a temporary symbol if it is not exists
        var x = points[dataIndex * 2];
        var y = points[dataIndex * 2 + 1];
        if (isNaN(x) || isNaN(y)) {
          // Null data
          return;
        }
        // fix #11360: shouldn't draw symbol outside clipShapeForSymbol
        if (this._clipShapeForSymbol && !this._clipShapeForSymbol.contain(x, y)) {
          return;
        }
        var zlevel = seriesModel.get('zlevel') || 0;
        var z = seriesModel.get('z') || 0;
        symbol = new Symbol["default"](data, dataIndex);
        symbol.x = x;
        symbol.y = y;
        symbol.setZ(zlevel, z);
        // ensure label text of the temporary symbol is in front of line and area polygon
        var symbolLabel = symbol.getSymbolPath().getTextContent();
        if (symbolLabel) {
          symbolLabel.zlevel = zlevel;
          symbolLabel.z = z;
          symbolLabel.z2 = this._polyline.z2 + 1;
        }
        symbol.__temp = true;
        data.setItemGraphicEl(dataIndex, symbol);
        // Stop scale animation
        symbol.stopSymbolAnimation(true);
        this.group.add(symbol);
      }
      symbol.highlight();
    } else {
      // Highlight whole series
      Chart["default"].prototype.highlight.call(this, seriesModel, ecModel, api, payload);
    }
  };
  LineView.prototype.downplay = function (seriesModel, ecModel, api, payload) {
    var data = seriesModel.getData();
    var dataIndex = model.queryDataIndex(data, payload);
    this._changePolyState('normal');
    if (dataIndex != null && dataIndex >= 0) {
      var symbol = data.getItemGraphicEl(dataIndex);
      if (symbol) {
        if (symbol.__temp) {
          data.setItemGraphicEl(dataIndex, null);
          this.group.remove(symbol);
        } else {
          symbol.downplay();
        }
      }
    } else {
      // FIXME
      // can not downplay completely.
      // Downplay whole series
      Chart["default"].prototype.downplay.call(this, seriesModel, ecModel, api, payload);
    }
  };
  LineView.prototype._changePolyState = function (toState) {
    var polygon = this._polygon;
    (0,states.setStatesFlag)(this._polyline, toState);
    polygon && (0,states.setStatesFlag)(polygon, toState);
  };
  LineView.prototype._newPolyline = function (points) {
    var polyline = this._polyline;
    // Remove previous created polyline
    if (polyline) {
      this._lineGroup.remove(polyline);
    }
    polyline = new poly.ECPolyline({
      shape: {
        points: points
      },
      segmentIgnoreThreshold: 2,
      z2: 10
    });
    this._lineGroup.add(polyline);
    this._polyline = polyline;
    return polyline;
  };
  LineView.prototype._newPolygon = function (points, stackedOnPoints) {
    var polygon = this._polygon;
    // Remove previous created polygon
    if (polygon) {
      this._lineGroup.remove(polygon);
    }
    polygon = new poly.ECPolygon({
      shape: {
        points: points,
        stackedOnPoints: stackedOnPoints
      },
      segmentIgnoreThreshold: 2
    });
    this._lineGroup.add(polygon);
    this._polygon = polygon;
    return polygon;
  };
  LineView.prototype._initSymbolLabelAnimation = function (data, coordSys, clipShape) {
    var isHorizontalOrRadial;
    var isCoordSysPolar;
    var baseAxis = coordSys.getBaseAxis();
    var isAxisInverse = baseAxis.inverse;
    if (coordSys.type === 'cartesian2d') {
      isHorizontalOrRadial = baseAxis.isHorizontal();
      isCoordSysPolar = false;
    } else if (coordSys.type === 'polar') {
      isHorizontalOrRadial = baseAxis.dim === 'angle';
      isCoordSysPolar = true;
    }
    var seriesModel = data.hostModel;
    var seriesDuration = seriesModel.get('animationDuration');
    if (util.isFunction(seriesDuration)) {
      seriesDuration = seriesDuration(null);
    }
    var seriesDelay = seriesModel.get('animationDelay') || 0;
    var seriesDelayValue = util.isFunction(seriesDelay) ? seriesDelay(null) : seriesDelay;
    data.eachItemGraphicEl(function (symbol, idx) {
      var el = symbol;
      if (el) {
        var point = [symbol.x, symbol.y];
        var start = void 0;
        var end = void 0;
        var current = void 0;
        if (clipShape) {
          if (isCoordSysPolar) {
            var polarClip = clipShape;
            var coord = coordSys.pointToCoord(point);
            if (isHorizontalOrRadial) {
              start = polarClip.startAngle;
              end = polarClip.endAngle;
              current = -coord[1] / 180 * Math.PI;
            } else {
              start = polarClip.r0;
              end = polarClip.r;
              current = coord[0];
            }
          } else {
            var gridClip = clipShape;
            if (isHorizontalOrRadial) {
              start = gridClip.x;
              end = gridClip.x + gridClip.width;
              current = symbol.x;
            } else {
              start = gridClip.y + gridClip.height;
              end = gridClip.y;
              current = symbol.y;
            }
          }
        }
        var ratio = end === start ? 0 : (current - start) / (end - start);
        if (isAxisInverse) {
          ratio = 1 - ratio;
        }
        var delay = util.isFunction(seriesDelay) ? seriesDelay(idx) : seriesDuration * ratio + seriesDelayValue;
        var symbolPath = el.getSymbolPath();
        var text = symbolPath.getTextContent();
        el.attr({
          scaleX: 0,
          scaleY: 0
        });
        el.animateTo({
          scaleX: 1,
          scaleY: 1
        }, {
          duration: 200,
          setToFinal: true,
          delay: delay
        });
        if (text) {
          text.animateFrom({
            style: {
              opacity: 0
            }
          }, {
            duration: 300,
            delay: delay
          });
        }
        symbolPath.disableLabelAnimation = true;
      }
    });
  };
  LineView.prototype._initOrUpdateEndLabel = function (seriesModel, coordSys, inheritColor) {
    var endLabelModel = seriesModel.getModel('endLabel');
    if (anyStateShowEndLabel(seriesModel)) {
      var data_2 = seriesModel.getData();
      var polyline = this._polyline;
      // series may be filtered.
      var points = data_2.getLayout('points');
      if (!points) {
        polyline.removeTextContent();
        this._endLabel = null;
        return;
      }
      var endLabel = this._endLabel;
      if (!endLabel) {
        endLabel = this._endLabel = new Text["default"]({
          z2: 200 // should be higher than item symbol
        });
        endLabel.ignoreClip = true;
        polyline.setTextContent(this._endLabel);
        polyline.disableLabelAnimation = true;
      }
      // Find last non-NaN data to display data
      var dataIndex = getLastIndexNotNull(points);
      if (dataIndex >= 0) {
        (0,labelStyle.setLabelStyle)(polyline, (0,labelStyle.getLabelStatesModels)(seriesModel, 'endLabel'), {
          inheritColor: inheritColor,
          labelFetcher: seriesModel,
          labelDataIndex: dataIndex,
          defaultText: function (dataIndex, opt, interpolatedValue) {
            return interpolatedValue != null ? (0,labelHelper.getDefaultInterpolatedLabel)(data_2, interpolatedValue) : (0,labelHelper.getDefaultLabel)(data_2, dataIndex);
          },
          enableTextSetter: true
        }, getEndLabelStateSpecified(endLabelModel, coordSys));
        polyline.textConfig.position = null;
      }
    } else if (this._endLabel) {
      this._polyline.removeTextContent();
      this._endLabel = null;
    }
  };
  LineView.prototype._endLabelOnDuring = function (percent, clipRect, data, animationRecord, valueAnimation, endLabelModel, coordSys) {
    var endLabel = this._endLabel;
    var polyline = this._polyline;
    if (endLabel) {
      // NOTE: Don't remove percent < 1. percent === 1 means the first frame during render.
      // The label is not prepared at this time.
      if (percent < 1 && animationRecord.originalX == null) {
        animationRecord.originalX = endLabel.x;
        animationRecord.originalY = endLabel.y;
      }
      var points = data.getLayout('points');
      var seriesModel = data.hostModel;
      var connectNulls = seriesModel.get('connectNulls');
      var precision = endLabelModel.get('precision');
      var distance = endLabelModel.get('distance') || 0;
      var baseAxis = coordSys.getBaseAxis();
      var isHorizontal = baseAxis.isHorizontal();
      var isBaseInversed = baseAxis.inverse;
      var clipShape = clipRect.shape;
      var xOrY = isBaseInversed ? isHorizontal ? clipShape.x : clipShape.y + clipShape.height : isHorizontal ? clipShape.x + clipShape.width : clipShape.y;
      var distanceX = (isHorizontal ? distance : 0) * (isBaseInversed ? -1 : 1);
      var distanceY = (isHorizontal ? 0 : -distance) * (isBaseInversed ? -1 : 1);
      var dim = isHorizontal ? 'x' : 'y';
      var dataIndexRange = getIndexRange(points, xOrY, dim);
      var indices = dataIndexRange.range;
      var diff = indices[1] - indices[0];
      var value = void 0;
      if (diff >= 1) {
        // diff > 1 && connectNulls, which is on the null data.
        if (diff > 1 && !connectNulls) {
          var pt = getPointAtIndex(points, indices[0]);
          endLabel.attr({
            x: pt[0] + distanceX,
            y: pt[1] + distanceY
          });
          valueAnimation && (value = seriesModel.getRawValue(indices[0]));
        } else {
          var pt = polyline.getPointOn(xOrY, dim);
          pt && endLabel.attr({
            x: pt[0] + distanceX,
            y: pt[1] + distanceY
          });
          var startValue = seriesModel.getRawValue(indices[0]);
          var endValue = seriesModel.getRawValue(indices[1]);
          valueAnimation && (value = model.interpolateRawValues(data, precision, startValue, endValue, dataIndexRange.t));
        }
        animationRecord.lastFrameIndex = indices[0];
      } else {
        // If diff <= 0, which is the range is not found(Include NaN)
        // Choose the first point or last point.
        var idx = percent === 1 || animationRecord.lastFrameIndex > 0 ? indices[0] : 0;
        var pt = getPointAtIndex(points, idx);
        valueAnimation && (value = seriesModel.getRawValue(idx));
        endLabel.attr({
          x: pt[0] + distanceX,
          y: pt[1] + distanceY
        });
      }
      if (valueAnimation) {
        var inner = (0,labelStyle.labelInner)(endLabel);
        if (typeof inner.setLabelText === 'function') {
          inner.setLabelText(value);
        }
      }
    }
  };
  /**
   * @private
   */
  // FIXME Two value axis
  LineView.prototype._doUpdateAnimation = function (data, stackedOnPoints, coordSys, api, step, valueOrigin, connectNulls) {
    var polyline = this._polyline;
    var polygon = this._polygon;
    var seriesModel = data.hostModel;
    var diff = lineAnimationDiff(this._data, data, this._stackedOnPoints, stackedOnPoints, this._coordSys, coordSys, this._valueOrigin, valueOrigin);
    var current = diff.current;
    var stackedOnCurrent = diff.stackedOnCurrent;
    var next = diff.next;
    var stackedOnNext = diff.stackedOnNext;
    if (step) {
      // TODO If stacked series is not step
      stackedOnCurrent = turnPointsIntoStep(diff.stackedOnCurrent, diff.current, coordSys, step, connectNulls);
      current = turnPointsIntoStep(diff.current, null, coordSys, step, connectNulls);
      stackedOnNext = turnPointsIntoStep(diff.stackedOnNext, diff.next, coordSys, step, connectNulls);
      next = turnPointsIntoStep(diff.next, null, coordSys, step, connectNulls);
    }
    // Don't apply animation if diff is large.
    // For better result and avoid memory explosion problems like
    // https://github.com/apache/incubator-echarts/issues/12229
    if (getBoundingDiff(current, next) > 3000 || polygon && getBoundingDiff(stackedOnCurrent, stackedOnNext) > 3000) {
      polyline.stopAnimation();
      polyline.setShape({
        points: next
      });
      if (polygon) {
        polygon.stopAnimation();
        polygon.setShape({
          points: next,
          stackedOnPoints: stackedOnNext
        });
      }
      return;
    }
    polyline.shape.__points = diff.current;
    polyline.shape.points = current;
    var target = {
      shape: {
        points: next
      }
    };
    // Also animate the original points.
    // If points reference is changed when turning into step line.
    if (diff.current !== current) {
      target.shape.__points = diff.next;
    }
    // Stop previous animation.
    polyline.stopAnimation();
    basicTransition.updateProps(polyline, target, seriesModel);
    if (polygon) {
      polygon.setShape({
        // Reuse the points with polyline.
        points: current,
        stackedOnPoints: stackedOnCurrent
      });
      polygon.stopAnimation();
      basicTransition.updateProps(polygon, {
        shape: {
          stackedOnPoints: stackedOnNext
        }
      }, seriesModel);
      // If use attr directly in updateProps.
      if (polyline.shape.points !== polygon.shape.points) {
        polygon.shape.points = polyline.shape.points;
      }
    }
    var updatedDataInfo = [];
    var diffStatus = diff.status;
    for (var i = 0; i < diffStatus.length; i++) {
      var cmd = diffStatus[i].cmd;
      if (cmd === '=') {
        var el = data.getItemGraphicEl(diffStatus[i].idx1);
        if (el) {
          updatedDataInfo.push({
            el: el,
            ptIdx: i // Index of points
          });
        }
      }
    }
    if (polyline.animators && polyline.animators.length) {
      polyline.animators[0].during(function () {
        polygon && polygon.dirtyShape();
        var points = polyline.shape.__points;
        for (var i = 0; i < updatedDataInfo.length; i++) {
          var el = updatedDataInfo[i].el;
          var offset = updatedDataInfo[i].ptIdx * 2;
          el.x = points[offset];
          el.y = points[offset + 1];
          el.markRedraw();
        }
      });
    }
  };
  LineView.prototype.remove = function (ecModel) {
    var group = this.group;
    var oldData = this._data;
    this._lineGroup.removeAll();
    this._symbolDraw.remove(true);
    // Remove temporary created elements when highlighting
    oldData && oldData.eachItemGraphicEl(function (el, idx) {
      if (el.__temp) {
        group.remove(el);
        oldData.setItemGraphicEl(idx, null);
      }
    });
    this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._endLabel = this._data = null;
  };
  LineView.type = 'line';
  return LineView;
}(Chart["default"]);
/* ESM default export */ var line_LineView = (LineView_LineView);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/layout/points.js
var layout_points = __webpack_require__(95097);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/processor/dataSample.js
var dataSample = __webpack_require__(24488);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/line/install.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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


// In case developer forget to include grid component


function install(registers) {
  registers.registerChartView(line_LineView);
  registers.registerSeriesModel(LineSeries);
  registers.registerLayout((0,layout_points["default"])('line', true));
  registers.registerVisual({
    seriesType: 'line',
    reset: function (seriesModel) {
      var data = seriesModel.getData();
      // Visual coding for legend
      var lineStyle = seriesModel.getModel('lineStyle').getLineStyle();
      if (lineStyle && !lineStyle.stroke) {
        // Fill in visual should be palette color if
        // has color callback
        lineStyle.stroke = data.getVisual('style').fill;
      }
      data.setVisual('legendLineStyle', lineStyle);
    }
  });
  // Down sample after filter
  registers.registerProcessor(registers.PRIORITY.PROCESSOR.STATISTIC, (0,dataSample["default"])('line'));
}

}),
74472: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ECPolygon: function() { return ECPolygon; },
  ECPolyline: function() { return ECPolyline; }
});
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var zrender_lib_graphic_Path_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49678);
/* ESM import */var zrender_lib_core_PathProxy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6535);
/* ESM import */var zrender_lib_core_curve_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97566);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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

// Poly path support NaN point



var mathMin = Math.min;
var mathMax = Math.max;
function isPointNull(x, y) {
  return isNaN(x) || isNaN(y);
}
/**
 * Draw smoothed line in non-monotone, in may cause undesired curve in extreme
 * situations. This should be used when points are non-monotone neither in x or
 * y dimension.
 */
function drawSegment(ctx, points, start, segLen, allLen, dir, smooth, smoothMonotone, connectNulls) {
  var prevX;
  var prevY;
  var cpx0;
  var cpy0;
  var cpx1;
  var cpy1;
  var idx = start;
  var k = 0;
  for (; k < segLen; k++) {
    var x = points[idx * 2];
    var y = points[idx * 2 + 1];
    if (idx >= allLen || idx < 0) {
      break;
    }
    if (isPointNull(x, y)) {
      if (connectNulls) {
        idx += dir;
        continue;
      }
      break;
    }
    if (idx === start) {
      ctx[dir > 0 ? 'moveTo' : 'lineTo'](x, y);
      cpx0 = x;
      cpy0 = y;
    } else {
      var dx = x - prevX;
      var dy = y - prevY;
      // Ignore tiny segment.
      if (dx * dx + dy * dy < 0.5) {
        idx += dir;
        continue;
      }
      if (smooth > 0) {
        var nextIdx = idx + dir;
        var nextX = points[nextIdx * 2];
        var nextY = points[nextIdx * 2 + 1];
        // Ignore duplicate point
        while (nextX === x && nextY === y && k < segLen) {
          k++;
          nextIdx += dir;
          idx += dir;
          nextX = points[nextIdx * 2];
          nextY = points[nextIdx * 2 + 1];
          x = points[idx * 2];
          y = points[idx * 2 + 1];
          dx = x - prevX;
          dy = y - prevY;
        }
        var tmpK = k + 1;
        if (connectNulls) {
          // Find next point not null
          while (isPointNull(nextX, nextY) && tmpK < segLen) {
            tmpK++;
            nextIdx += dir;
            nextX = points[nextIdx * 2];
            nextY = points[nextIdx * 2 + 1];
          }
        }
        var ratioNextSeg = 0.5;
        var vx = 0;
        var vy = 0;
        var nextCpx0 = void 0;
        var nextCpy0 = void 0;
        // Is last point
        if (tmpK >= segLen || isPointNull(nextX, nextY)) {
          cpx1 = x;
          cpy1 = y;
        } else {
          vx = nextX - prevX;
          vy = nextY - prevY;
          var dx0 = x - prevX;
          var dx1 = nextX - x;
          var dy0 = y - prevY;
          var dy1 = nextY - y;
          var lenPrevSeg = void 0;
          var lenNextSeg = void 0;
          if (smoothMonotone === 'x') {
            lenPrevSeg = Math.abs(dx0);
            lenNextSeg = Math.abs(dx1);
            var dir_1 = vx > 0 ? 1 : -1;
            cpx1 = x - dir_1 * lenPrevSeg * smooth;
            cpy1 = y;
            nextCpx0 = x + dir_1 * lenNextSeg * smooth;
            nextCpy0 = y;
          } else if (smoothMonotone === 'y') {
            lenPrevSeg = Math.abs(dy0);
            lenNextSeg = Math.abs(dy1);
            var dir_2 = vy > 0 ? 1 : -1;
            cpx1 = x;
            cpy1 = y - dir_2 * lenPrevSeg * smooth;
            nextCpx0 = x;
            nextCpy0 = y + dir_2 * lenNextSeg * smooth;
          } else {
            lenPrevSeg = Math.sqrt(dx0 * dx0 + dy0 * dy0);
            lenNextSeg = Math.sqrt(dx1 * dx1 + dy1 * dy1);
            // Use ratio of seg length
            ratioNextSeg = lenNextSeg / (lenNextSeg + lenPrevSeg);
            cpx1 = x - vx * smooth * (1 - ratioNextSeg);
            cpy1 = y - vy * smooth * (1 - ratioNextSeg);
            // cp0 of next segment
            nextCpx0 = x + vx * smooth * ratioNextSeg;
            nextCpy0 = y + vy * smooth * ratioNextSeg;
            // Smooth constraint between point and next point.
            // Avoid exceeding extreme after smoothing.
            nextCpx0 = mathMin(nextCpx0, mathMax(nextX, x));
            nextCpy0 = mathMin(nextCpy0, mathMax(nextY, y));
            nextCpx0 = mathMax(nextCpx0, mathMin(nextX, x));
            nextCpy0 = mathMax(nextCpy0, mathMin(nextY, y));
            // Reclaculate cp1 based on the adjusted cp0 of next seg.
            vx = nextCpx0 - x;
            vy = nextCpy0 - y;
            cpx1 = x - vx * lenPrevSeg / lenNextSeg;
            cpy1 = y - vy * lenPrevSeg / lenNextSeg;
            // Smooth constraint between point and prev point.
            // Avoid exceeding extreme after smoothing.
            cpx1 = mathMin(cpx1, mathMax(prevX, x));
            cpy1 = mathMin(cpy1, mathMax(prevY, y));
            cpx1 = mathMax(cpx1, mathMin(prevX, x));
            cpy1 = mathMax(cpy1, mathMin(prevY, y));
            // Adjust next cp0 again.
            vx = x - cpx1;
            vy = y - cpy1;
            nextCpx0 = x + vx * lenNextSeg / lenPrevSeg;
            nextCpy0 = y + vy * lenNextSeg / lenPrevSeg;
          }
        }
        ctx.bezierCurveTo(cpx0, cpy0, cpx1, cpy1, x, y);
        cpx0 = nextCpx0;
        cpy0 = nextCpy0;
      } else {
        ctx.lineTo(x, y);
      }
    }
    prevX = x;
    prevY = y;
    idx += dir;
  }
  return k;
}
var ECPolylineShape = /** @class */function () {
  function ECPolylineShape() {
    this.smooth = 0;
    this.smoothConstraint = true;
  }
  return ECPolylineShape;
}();
var ECPolyline = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(ECPolyline, _super);
  function ECPolyline(opts) {
    var _this = _super.call(this, opts) || this;
    _this.type = 'ec-polyline';
    return _this;
  }
  ECPolyline.prototype.getDefaultStyle = function () {
    return {
      stroke: '#000',
      fill: null
    };
  };
  ECPolyline.prototype.getDefaultShape = function () {
    return new ECPolylineShape();
  };
  ECPolyline.prototype.buildPath = function (ctx, shape) {
    var points = shape.points;
    var i = 0;
    var len = points.length / 2;
    // const result = getBoundingBox(points, shape.smoothConstraint);
    if (shape.connectNulls) {
      // Must remove first and last null values avoid draw error in polygon
      for (; len > 0; len--) {
        if (!isPointNull(points[len * 2 - 2], points[len * 2 - 1])) {
          break;
        }
      }
      for (; i < len; i++) {
        if (!isPointNull(points[i * 2], points[i * 2 + 1])) {
          break;
        }
      }
    }
    while (i < len) {
      i += drawSegment(ctx, points, i, len, len, 1, shape.smooth, shape.smoothMonotone, shape.connectNulls) + 1;
    }
  };
  ECPolyline.prototype.getPointOn = function (xOrY, dim) {
    if (!this.path) {
      this.createPathProxy();
      this.buildPath(this.path, this.shape);
    }
    var path = this.path;
    var data = path.data;
    var CMD = zrender_lib_core_PathProxy_js__WEBPACK_IMPORTED_MODULE_2__["default"].CMD;
    var x0;
    var y0;
    var isDimX = dim === 'x';
    var roots = [];
    for (var i = 0; i < data.length;) {
      var cmd = data[i++];
      var x = void 0;
      var y = void 0;
      var x2 = void 0;
      var y2 = void 0;
      var x3 = void 0;
      var y3 = void 0;
      var t = void 0;
      switch (cmd) {
        case CMD.M:
          x0 = data[i++];
          y0 = data[i++];
          break;
        case CMD.L:
          x = data[i++];
          y = data[i++];
          t = isDimX ? (xOrY - x0) / (x - x0) : (xOrY - y0) / (y - y0);
          if (t <= 1 && t >= 0) {
            var val = isDimX ? (y - y0) * t + y0 : (x - x0) * t + x0;
            return isDimX ? [xOrY, val] : [val, xOrY];
          }
          x0 = x;
          y0 = y;
          break;
        case CMD.C:
          x = data[i++];
          y = data[i++];
          x2 = data[i++];
          y2 = data[i++];
          x3 = data[i++];
          y3 = data[i++];
          var nRoot = isDimX ? (0,zrender_lib_core_curve_js__WEBPACK_IMPORTED_MODULE_3__.cubicRootAt)(x0, x, x2, x3, xOrY, roots) : (0,zrender_lib_core_curve_js__WEBPACK_IMPORTED_MODULE_3__.cubicRootAt)(y0, y, y2, y3, xOrY, roots);
          if (nRoot > 0) {
            for (var i_1 = 0; i_1 < nRoot; i_1++) {
              var t_1 = roots[i_1];
              if (t_1 <= 1 && t_1 >= 0) {
                var val = isDimX ? (0,zrender_lib_core_curve_js__WEBPACK_IMPORTED_MODULE_3__.cubicAt)(y0, y, y2, y3, t_1) : (0,zrender_lib_core_curve_js__WEBPACK_IMPORTED_MODULE_3__.cubicAt)(x0, x, x2, x3, t_1);
                return isDimX ? [xOrY, val] : [val, xOrY];
              }
            }
          }
          x0 = x3;
          y0 = y3;
          break;
      }
    }
  };
  return ECPolyline;
}(zrender_lib_graphic_Path_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

var ECPolygonShape = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(ECPolygonShape, _super);
  function ECPolygonShape() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  return ECPolygonShape;
}(ECPolylineShape);
var ECPolygon = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(ECPolygon, _super);
  function ECPolygon(opts) {
    var _this = _super.call(this, opts) || this;
    _this.type = 'ec-polygon';
    return _this;
  }
  ECPolygon.prototype.getDefaultShape = function () {
    return new ECPolygonShape();
  };
  ECPolygon.prototype.buildPath = function (ctx, shape) {
    var points = shape.points;
    var stackedOnPoints = shape.stackedOnPoints;
    var i = 0;
    var len = points.length / 2;
    var smoothMonotone = shape.smoothMonotone;
    if (shape.connectNulls) {
      // Must remove first and last null values avoid draw error in polygon
      for (; len > 0; len--) {
        if (!isPointNull(points[len * 2 - 2], points[len * 2 - 1])) {
          break;
        }
      }
      for (; i < len; i++) {
        if (!isPointNull(points[i * 2], points[i * 2 + 1])) {
          break;
        }
      }
    }
    while (i < len) {
      var k = drawSegment(ctx, points, i, len, len, 1, shape.smooth, smoothMonotone, shape.connectNulls);
      drawSegment(ctx, stackedOnPoints, i + k - 1, k, len, -1, shape.stackedOnSmooth, smoothMonotone, shape.connectNulls);
      i += k + 1;
      ctx.closePath();
    }
  };
  return ECPolygon;
}(zrender_lib_graphic_Path_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


}),
98364: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  install: function() { return /* binding */ install; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(12012);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/LineDraw.js
var LineDraw = __webpack_require__(37779);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/EffectLine.js
var EffectLine = __webpack_require__(6268);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/Line.js + 1 modules
var Line = __webpack_require__(63224);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/Polyline.js
var Polyline = __webpack_require__(78913);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/EffectPolyline.js
var EffectPolyline = __webpack_require__(41074);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/LargeLineDraw.js
var LargeLineDraw = __webpack_require__(7677);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/createRenderPlanner.js
var createRenderPlanner = __webpack_require__(94431);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/lines/linesLayout.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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


var linesLayout = {
  seriesType: 'lines',
  plan: (0,createRenderPlanner["default"])(),
  reset: function (seriesModel) {
    var coordSys = seriesModel.coordinateSystem;
    if (!coordSys) {
      if (false) {}
      return;
    }
    var isPolyline = seriesModel.get('polyline');
    var isLarge = seriesModel.pipelineContext.large;
    return {
      progress: function (params, lineData) {
        var lineCoords = [];
        if (isLarge) {
          var points = void 0;
          var segCount = params.end - params.start;
          if (isPolyline) {
            var totalCoordsCount = 0;
            for (var i = params.start; i < params.end; i++) {
              totalCoordsCount += seriesModel.getLineCoordsCount(i);
            }
            points = new Float32Array(segCount + totalCoordsCount * 2);
          } else {
            points = new Float32Array(segCount * 4);
          }
          var offset = 0;
          var pt = [];
          for (var i = params.start; i < params.end; i++) {
            var len = seriesModel.getLineCoords(i, lineCoords);
            if (isPolyline) {
              points[offset++] = len;
            }
            for (var k = 0; k < len; k++) {
              pt = coordSys.dataToPoint(lineCoords[k], false, pt);
              points[offset++] = pt[0];
              points[offset++] = pt[1];
            }
          }
          lineData.setLayout('linesPoints', points);
        } else {
          for (var i = params.start; i < params.end; i++) {
            var itemModel = lineData.getItemModel(i);
            var len = seriesModel.getLineCoords(i, lineCoords);
            var pts = [];
            if (isPolyline) {
              for (var j = 0; j < len; j++) {
                pts.push(coordSys.dataToPoint(lineCoords[j]));
              }
            } else {
              pts[0] = coordSys.dataToPoint(lineCoords[0]);
              pts[1] = coordSys.dataToPoint(lineCoords[1]);
              var curveness = itemModel.get(['lineStyle', 'curveness']);
              if (+curveness) {
                pts[2] = [(pts[0][0] + pts[1][0]) / 2 - (pts[0][1] - pts[1][1]) * curveness, (pts[0][1] + pts[1][1]) / 2 - (pts[1][0] - pts[0][0]) * curveness];
              }
            }
            lineData.setItemLayout(i, pts);
          }
        }
      }
    };
  }
};
/* ESM default export */ var lines_linesLayout = (linesLayout);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/createClipPathFromCoordSys.js
var createClipPathFromCoordSys = __webpack_require__(92741);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/view/Chart.js
var Chart = __webpack_require__(47389);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/lines/LinesView.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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










var LinesView_LinesView = /** @class */function (_super) {
  (0,tslib_es6.__extends)(LinesView, _super);
  function LinesView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = LinesView.type;
    return _this;
  }
  LinesView.prototype.render = function (seriesModel, ecModel, api) {
    var data = seriesModel.getData();
    var lineDraw = this._updateLineDraw(data, seriesModel);
    var zlevel = seriesModel.get('zlevel');
    var trailLength = seriesModel.get(['effect', 'trailLength']);
    var zr = api.getZr();
    // Avoid the drag cause ghost shadow
    // FIXME Better way ?
    // SVG doesn't support
    var isSvg = zr.painter.getType() === 'svg';
    if (!isSvg) {
      zr.painter.getLayer(zlevel).clear(true);
    }
    // Config layer with motion blur
    if (this._lastZlevel != null && !isSvg) {
      zr.configLayer(this._lastZlevel, {
        motionBlur: false
      });
    }
    if (this._showEffect(seriesModel) && trailLength > 0) {
      if (!isSvg) {
        zr.configLayer(zlevel, {
          motionBlur: true,
          lastFrameAlpha: Math.max(Math.min(trailLength / 10 + 0.9, 1), 0)
        });
      } else if (false) {}
    }
    lineDraw.updateData(data);
    var clipPath = seriesModel.get('clip', true) && (0,createClipPathFromCoordSys.createClipPath)(seriesModel.coordinateSystem, false, seriesModel);
    if (clipPath) {
      this.group.setClipPath(clipPath);
    } else {
      this.group.removeClipPath();
    }
    this._lastZlevel = zlevel;
    this._finished = true;
  };
  LinesView.prototype.incrementalPrepareRender = function (seriesModel, ecModel, api) {
    var data = seriesModel.getData();
    var lineDraw = this._updateLineDraw(data, seriesModel);
    lineDraw.incrementalPrepareUpdate(data);
    this._clearLayer(api);
    this._finished = false;
  };
  LinesView.prototype.incrementalRender = function (taskParams, seriesModel, ecModel) {
    this._lineDraw.incrementalUpdate(taskParams, seriesModel.getData());
    this._finished = taskParams.end === seriesModel.getData().count();
  };
  LinesView.prototype.eachRendered = function (cb) {
    this._lineDraw && this._lineDraw.eachRendered(cb);
  };
  LinesView.prototype.updateTransform = function (seriesModel, ecModel, api) {
    var data = seriesModel.getData();
    var pipelineContext = seriesModel.pipelineContext;
    if (!this._finished || pipelineContext.large || pipelineContext.progressiveRender) {
      // TODO Don't have to do update in large mode. Only do it when there are millions of data.
      return {
        update: true
      };
    } else {
      // TODO Use same logic with ScatterView.
      // Manually update layout
      var res = lines_linesLayout.reset(seriesModel, ecModel, api);
      if (res.progress) {
        res.progress({
          start: 0,
          end: data.count(),
          count: data.count()
        }, data);
      }
      // Not in large mode
      this._lineDraw.updateLayout();
      this._clearLayer(api);
    }
  };
  LinesView.prototype._updateLineDraw = function (data, seriesModel) {
    var lineDraw = this._lineDraw;
    var hasEffect = this._showEffect(seriesModel);
    var isPolyline = !!seriesModel.get('polyline');
    var pipelineContext = seriesModel.pipelineContext;
    var isLargeDraw = pipelineContext.large;
    if (false) {}
    if (!lineDraw || hasEffect !== this._hasEffet || isPolyline !== this._isPolyline || isLargeDraw !== this._isLargeDraw) {
      if (lineDraw) {
        lineDraw.remove();
      }
      lineDraw = this._lineDraw = isLargeDraw ? new LargeLineDraw["default"]() : new LineDraw["default"](isPolyline ? hasEffect ? EffectPolyline["default"] : Polyline["default"] : hasEffect ? EffectLine["default"] : Line["default"]);
      this._hasEffet = hasEffect;
      this._isPolyline = isPolyline;
      this._isLargeDraw = isLargeDraw;
    }
    this.group.add(lineDraw.group);
    return lineDraw;
  };
  LinesView.prototype._showEffect = function (seriesModel) {
    return !!seriesModel.get(['effect', 'show']);
  };
  LinesView.prototype._clearLayer = function (api) {
    // Not use motion when dragging or zooming
    var zr = api.getZr();
    var isSvg = zr.painter.getType() === 'svg';
    if (!isSvg && this._lastZlevel != null) {
      zr.painter.getLayer(this._lastZlevel).clear(true);
    }
  };
  LinesView.prototype.remove = function (ecModel, api) {
    this._lineDraw && this._lineDraw.remove();
    this._lineDraw = null;
    // Clear motion when lineDraw is removed
    this._clearLayer(api);
  };
  LinesView.prototype.dispose = function (ecModel, api) {
    this.remove(ecModel, api);
  };
  LinesView.type = 'lines';
  return LinesView;
}(Chart["default"]);
/* ESM default export */ var lines_LinesView = (LinesView_LinesView);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Series.js
var Series = __webpack_require__(48134);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/data/SeriesData.js
var SeriesData = __webpack_require__(38788);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(96585);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/tooltip/tooltipMarkup.js
var tooltipMarkup = __webpack_require__(13134);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/lines/LinesSeries.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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

/* global Uint32Array, Float64Array, Float32Array */





var Uint32Arr = typeof Uint32Array === 'undefined' ? Array : Uint32Array;
var Float64Arr = typeof Float64Array === 'undefined' ? Array : Float64Array;
function compatEc2(seriesOpt) {
  var data = seriesOpt.data;
  if (data && data[0] && data[0][0] && data[0][0].coord) {
    if (false) {}
    seriesOpt.data = (0,util.map)(data, function (itemOpt) {
      var coords = [itemOpt[0].coord, itemOpt[1].coord];
      var target = {
        coords: coords
      };
      if (itemOpt[0].name) {
        target.fromName = itemOpt[0].name;
      }
      if (itemOpt[1].name) {
        target.toName = itemOpt[1].name;
      }
      return (0,util.mergeAll)([target, itemOpt[0], itemOpt[1]]);
    });
  }
}
var LinesSeries_LinesSeriesModel = /** @class */function (_super) {
  (0,tslib_es6.__extends)(LinesSeriesModel, _super);
  function LinesSeriesModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = LinesSeriesModel.type;
    _this.visualStyleAccessPath = 'lineStyle';
    _this.visualDrawType = 'stroke';
    return _this;
  }
  LinesSeriesModel.prototype.init = function (option) {
    // The input data may be null/undefined.
    option.data = option.data || [];
    // Not using preprocessor because mergeOption may not have series.type
    compatEc2(option);
    var result = this._processFlatCoordsArray(option.data);
    this._flatCoords = result.flatCoords;
    this._flatCoordsOffset = result.flatCoordsOffset;
    if (result.flatCoords) {
      option.data = new Float32Array(result.count);
    }
    _super.prototype.init.apply(this, arguments);
  };
  LinesSeriesModel.prototype.mergeOption = function (option) {
    compatEc2(option);
    if (option.data) {
      // Only update when have option data to merge.
      var result = this._processFlatCoordsArray(option.data);
      this._flatCoords = result.flatCoords;
      this._flatCoordsOffset = result.flatCoordsOffset;
      if (result.flatCoords) {
        option.data = new Float32Array(result.count);
      }
    }
    _super.prototype.mergeOption.apply(this, arguments);
  };
  LinesSeriesModel.prototype.appendData = function (params) {
    var result = this._processFlatCoordsArray(params.data);
    if (result.flatCoords) {
      if (!this._flatCoords) {
        this._flatCoords = result.flatCoords;
        this._flatCoordsOffset = result.flatCoordsOffset;
      } else {
        this._flatCoords = (0,util.concatArray)(this._flatCoords, result.flatCoords);
        this._flatCoordsOffset = (0,util.concatArray)(this._flatCoordsOffset, result.flatCoordsOffset);
      }
      params.data = new Float32Array(result.count);
    }
    this.getRawData().appendData(params.data);
  };
  LinesSeriesModel.prototype._getCoordsFromItemModel = function (idx) {
    var itemModel = this.getData().getItemModel(idx);
    var coords = itemModel.option instanceof Array ? itemModel.option : itemModel.getShallow('coords');
    if (false) {}
    return coords;
  };
  LinesSeriesModel.prototype.getLineCoordsCount = function (idx) {
    if (this._flatCoordsOffset) {
      return this._flatCoordsOffset[idx * 2 + 1];
    } else {
      return this._getCoordsFromItemModel(idx).length;
    }
  };
  LinesSeriesModel.prototype.getLineCoords = function (idx, out) {
    if (this._flatCoordsOffset) {
      var offset = this._flatCoordsOffset[idx * 2];
      var len = this._flatCoordsOffset[idx * 2 + 1];
      for (var i = 0; i < len; i++) {
        out[i] = out[i] || [];
        out[i][0] = this._flatCoords[offset + i * 2];
        out[i][1] = this._flatCoords[offset + i * 2 + 1];
      }
      return len;
    } else {
      var coords = this._getCoordsFromItemModel(idx);
      for (var i = 0; i < coords.length; i++) {
        out[i] = out[i] || [];
        out[i][0] = coords[i][0];
        out[i][1] = coords[i][1];
      }
      return coords.length;
    }
  };
  LinesSeriesModel.prototype._processFlatCoordsArray = function (data) {
    var startOffset = 0;
    if (this._flatCoords) {
      startOffset = this._flatCoords.length;
    }
    // Stored as a typed array. In format
    // Points Count(2) | x | y | x | y | Points Count(3) | x |  y | x | y | x | y |
    if ((0,util.isNumber)(data[0])) {
      var len = data.length;
      // Store offset and len of each segment
      var coordsOffsetAndLenStorage = new Uint32Arr(len);
      var coordsStorage = new Float64Arr(len);
      var coordsCursor = 0;
      var offsetCursor = 0;
      var dataCount = 0;
      for (var i = 0; i < len;) {
        dataCount++;
        var count = data[i++];
        // Offset
        coordsOffsetAndLenStorage[offsetCursor++] = coordsCursor + startOffset;
        // Len
        coordsOffsetAndLenStorage[offsetCursor++] = count;
        for (var k = 0; k < count; k++) {
          var x = data[i++];
          var y = data[i++];
          coordsStorage[coordsCursor++] = x;
          coordsStorage[coordsCursor++] = y;
          if (i > len) {
            if (false) {}
          }
        }
      }
      return {
        flatCoordsOffset: new Uint32Array(coordsOffsetAndLenStorage.buffer, 0, offsetCursor),
        flatCoords: coordsStorage,
        count: dataCount
      };
    }
    return {
      flatCoordsOffset: null,
      flatCoords: null,
      count: data.length
    };
  };
  LinesSeriesModel.prototype.getInitialData = function (option, ecModel) {
    if (false) { var CoordSys }
    var lineData = new SeriesData["default"](['value'], this);
    lineData.hasItemOption = false;
    lineData.initData(option.data, [], function (dataItem, dimName, dataIndex, dimIndex) {
      // dataItem is simply coords
      if (dataItem instanceof Array) {
        return NaN;
      } else {
        lineData.hasItemOption = true;
        var value = dataItem.value;
        if (value != null) {
          return value instanceof Array ? value[dimIndex] : value;
        }
      }
    });
    return lineData;
  };
  LinesSeriesModel.prototype.formatTooltip = function (dataIndex, multipleSeries, dataType) {
    var data = this.getData();
    var itemModel = data.getItemModel(dataIndex);
    var name = itemModel.get('name');
    if (name) {
      return name;
    }
    var fromName = itemModel.get('fromName');
    var toName = itemModel.get('toName');
    var nameArr = [];
    fromName != null && nameArr.push(fromName);
    toName != null && nameArr.push(toName);
    return (0,tooltipMarkup.createTooltipMarkup)('nameValue', {
      name: nameArr.join(' > ')
    });
  };
  LinesSeriesModel.prototype.preventIncremental = function () {
    return !!this.get(['effect', 'show']);
  };
  LinesSeriesModel.prototype.getProgressive = function () {
    var progressive = this.option.progressive;
    if (progressive == null) {
      return this.option.large ? 1e4 : this.get('progressive');
    }
    return progressive;
  };
  LinesSeriesModel.prototype.getProgressiveThreshold = function () {
    var progressiveThreshold = this.option.progressiveThreshold;
    if (progressiveThreshold == null) {
      return this.option.large ? 2e4 : this.get('progressiveThreshold');
    }
    return progressiveThreshold;
  };
  LinesSeriesModel.prototype.getZLevelKey = function () {
    var effectModel = this.getModel('effect');
    var trailLength = effectModel.get('trailLength');
    return this.getData().count() > this.getProgressiveThreshold()
    // Each progressive series has individual key.
    ? this.id : effectModel.get('show') && trailLength > 0 ? trailLength + '' : '';
  };
  LinesSeriesModel.type = 'series.lines';
  LinesSeriesModel.dependencies = ['grid', 'polar', 'geo', 'calendar'];
  LinesSeriesModel.defaultOption = {
    coordinateSystem: 'geo',
    // zlevel: 0,
    z: 2,
    legendHoverLink: true,
    // Cartesian coordinate system
    xAxisIndex: 0,
    yAxisIndex: 0,
    symbol: ['none', 'none'],
    symbolSize: [10, 10],
    // Geo coordinate system
    geoIndex: 0,
    effect: {
      show: false,
      period: 4,
      constantSpeed: 0,
      symbol: 'circle',
      symbolSize: 3,
      loop: true,
      trailLength: 0.2
    },
    large: false,
    // Available when large is true
    largeThreshold: 2000,
    polyline: false,
    clip: true,
    label: {
      show: false,
      position: 'end'
      // distance: 5,
      // formatter: 标签文本格式器，同Tooltip.formatter，不支持异步回调
    },
    lineStyle: {
      opacity: 0.5
    }
  };
  return LinesSeriesModel;
}(Series["default"]);
/* ESM default export */ var LinesSeries = (LinesSeries_LinesSeriesModel);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/lines/linesVisual.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
function normalize(a) {
  if (!(a instanceof Array)) {
    a = [a, a];
  }
  return a;
}
var linesVisual = {
  seriesType: 'lines',
  reset: function (seriesModel) {
    var symbolType = normalize(seriesModel.get('symbol'));
    var symbolSize = normalize(seriesModel.get('symbolSize'));
    var data = seriesModel.getData();
    data.setVisual('fromSymbol', symbolType && symbolType[0]);
    data.setVisual('toSymbol', symbolType && symbolType[1]);
    data.setVisual('fromSymbolSize', symbolSize && symbolSize[0]);
    data.setVisual('toSymbolSize', symbolSize && symbolSize[1]);
    function dataEach(data, idx) {
      var itemModel = data.getItemModel(idx);
      var symbolType = normalize(itemModel.getShallow('symbol', true));
      var symbolSize = normalize(itemModel.getShallow('symbolSize', true));
      symbolType[0] && data.setItemVisual(idx, 'fromSymbol', symbolType[0]);
      symbolType[1] && data.setItemVisual(idx, 'toSymbol', symbolType[1]);
      symbolSize[0] && data.setItemVisual(idx, 'fromSymbolSize', symbolSize[0]);
      symbolSize[1] && data.setItemVisual(idx, 'toSymbolSize', symbolSize[1]);
    }
    return {
      dataEach: data.hasItemOption ? dataEach : null
    };
  }
};
/* ESM default export */ var lines_linesVisual = (linesVisual);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/lines/install.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  registers.registerChartView(lines_LinesView);
  registers.registerSeriesModel(LinesSeries);
  registers.registerLayout(lines_linesLayout);
  registers.registerVisual(lines_linesVisual);
}

}),
63210: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  install: function() { return /* binding */ install_install; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/extension.js
var extension = __webpack_require__(70392);
// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(12012);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/Circle.js
var Circle = __webpack_require__(26768);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/helper/MapDraw.js
var MapDraw = __webpack_require__(49490);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/view/Chart.js
var Chart = __webpack_require__(47389);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/label/labelStyle.js
var labelStyle = __webpack_require__(77704);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/states.js
var states = __webpack_require__(63344);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/map/MapView.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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






var MapView_MapView = /** @class */function (_super) {
  (0,tslib_es6.__extends)(MapView, _super);
  function MapView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = MapView.type;
    return _this;
  }
  MapView.prototype.render = function (mapModel, ecModel, api, payload) {
    // Not render if it is an toggleSelect action from self
    if (payload && payload.type === 'mapToggleSelect' && payload.from === this.uid) {
      return;
    }
    var group = this.group;
    group.removeAll();
    if (mapModel.getHostGeoModel()) {
      return;
    }
    if (this._mapDraw && payload && payload.type === 'geoRoam') {
      this._mapDraw.resetForLabelLayout();
    }
    // Not update map if it is an roam action from self
    if (!(payload && payload.type === 'geoRoam' && payload.componentType === 'series' && payload.seriesId === mapModel.id)) {
      if (mapModel.needsDrawMap) {
        var mapDraw = this._mapDraw || new MapDraw["default"](api);
        group.add(mapDraw.group);
        mapDraw.draw(mapModel, ecModel, api, this, payload);
        this._mapDraw = mapDraw;
      } else {
        // Remove drawn map
        this._mapDraw && this._mapDraw.remove();
        this._mapDraw = null;
      }
    } else {
      var mapDraw = this._mapDraw;
      mapDraw && group.add(mapDraw.group);
    }
    mapModel.get('showLegendSymbol') && ecModel.getComponent('legend') && this._renderSymbols(mapModel, ecModel, api);
  };
  MapView.prototype.remove = function () {
    this._mapDraw && this._mapDraw.remove();
    this._mapDraw = null;
    this.group.removeAll();
  };
  MapView.prototype.dispose = function () {
    this._mapDraw && this._mapDraw.remove();
    this._mapDraw = null;
  };
  MapView.prototype._renderSymbols = function (mapModel, ecModel, api) {
    var originalData = mapModel.originalData;
    var group = this.group;
    originalData.each(originalData.mapDimension('value'), function (value, originalDataIndex) {
      if (isNaN(value)) {
        return;
      }
      var layout = originalData.getItemLayout(originalDataIndex);
      if (!layout || !layout.point) {
        // Not exists in map
        return;
      }
      var point = layout.point;
      var offset = layout.offset;
      var circle = new Circle["default"]({
        style: {
          // Because the special of map draw.
          // Which needs statistic of multiple series and draw on one map.
          // And each series also need a symbol with legend color
          //
          // Layout and visual are put one the different data
          // TODO
          fill: mapModel.getData().getVisual('style').fill
        },
        shape: {
          cx: point[0] + offset * 9,
          cy: point[1],
          r: 3
        },
        silent: true,
        // Do not overlap the first series, on which labels are displayed.
        z2: 8 + (!offset ? states.Z2_EMPHASIS_LIFT + 1 : 0)
      });
      // Only the series that has the first value on the same region is in charge of rendering the label.
      // But consider the case:
      // series: [
      //     {id: 'X', type: 'map', map: 'm', {data: [{name: 'A', value: 11}, {name: 'B', {value: 22}]},
      //     {id: 'Y', type: 'map', map: 'm', {data: [{name: 'A', value: 21}, {name: 'C', {value: 33}]}
      // ]
      // The offset `0` of item `A` is at series `X`, but of item `C` is at series `Y`.
      // For backward compatibility, we follow the rule that render label `A` by the
      // settings on series `X` but render label `C` by the settings on series `Y`.
      if (!offset) {
        var fullData = mapModel.mainSeries.getData();
        var name_1 = originalData.getName(originalDataIndex);
        var fullIndex_1 = fullData.indexOfName(name_1);
        var itemModel = originalData.getItemModel(originalDataIndex);
        var labelModel = itemModel.getModel('label');
        var regionGroup = fullData.getItemGraphicEl(fullIndex_1);
        // `getFormattedLabel` needs to use `getData` inside. Here
        // `mapModel.getData()` is shallow cloned from `mainSeries.getData()`.
        // FIXME
        // If this is not the `mainSeries`, the item model (like label formatter)
        // set on original data item will never get. But it has been working
        // like that from the beginning, and this scenario is rarely encountered.
        // So it won't be fixed until we have to.
        (0,labelStyle.setLabelStyle)(circle, (0,labelStyle.getLabelStatesModels)(itemModel), {
          labelFetcher: {
            getFormattedLabel: function (idx, state) {
              return mapModel.getFormattedLabel(fullIndex_1, state);
            }
          },
          defaultText: name_1
        });
        circle.disableLabelAnimation = true;
        if (!labelModel.get('position')) {
          circle.setTextConfig({
            position: 'bottom'
          });
        }
        regionGroup.onHoverStateChange = function (toState) {
          (0,states.setStatesFlag)(circle, toState);
        };
      }
      group.add(circle);
    });
  };
  MapView.type = 'map';
  return MapView;
}(Chart["default"]);
/* ESM default export */ var map_MapView = (MapView_MapView);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(96585);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/createSeriesDataSimply.js
var createSeriesDataSimply = __webpack_require__(86011);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Series.js
var Series = __webpack_require__(48134);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/geo/geoSourceManager.js + 5 modules
var geoSourceManager = __webpack_require__(70932);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/data/helper/sourceHelper.js
var sourceHelper = __webpack_require__(490);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/tooltip/tooltipMarkup.js
var tooltipMarkup = __webpack_require__(13134);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/symbol.js
var symbol = __webpack_require__(44421);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/map/MapSeries.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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








var MapSeries_MapSeries = /** @class */function (_super) {
  (0,tslib_es6.__extends)(MapSeries, _super);
  function MapSeries() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = MapSeries.type;
    // Only first map series of same mapType will drawMap.
    _this.needsDrawMap = false;
    // Group of all map series with same mapType
    _this.seriesGroup = [];
    _this.getTooltipPosition = function (dataIndex) {
      if (dataIndex != null) {
        var name_1 = this.getData().getName(dataIndex);
        var geo = this.coordinateSystem;
        var region = geo.getRegion(name_1);
        return region && geo.dataToPoint(region.getCenter());
      }
    };
    return _this;
  }
  MapSeries.prototype.getInitialData = function (option) {
    var data = (0,createSeriesDataSimply["default"])(this, {
      coordDimensions: ['value'],
      encodeDefaulter: util.curry(sourceHelper.makeSeriesEncodeForNameBased, this)
    });
    var dataNameIndexMap = util.createHashMap();
    var toAppendItems = [];
    for (var i = 0, len = data.count(); i < len; i++) {
      var name_2 = data.getName(i);
      dataNameIndexMap.set(name_2, i);
    }
    var geoSource = geoSourceManager["default"].load(this.getMapType(), this.option.nameMap, this.option.nameProperty);
    util.each(geoSource.regions, function (region) {
      var name = region.name;
      var dataNameIdx = dataNameIndexMap.get(name);
      // apply specified echarts style in GeoJSON data
      var specifiedGeoJSONRegionStyle = region.properties && region.properties.echartsStyle;
      var dataItem;
      if (dataNameIdx == null) {
        dataItem = {
          name: name
        };
        toAppendItems.push(dataItem);
      } else {
        dataItem = data.getRawDataItem(dataNameIdx);
      }
      specifiedGeoJSONRegionStyle && util.merge(dataItem, specifiedGeoJSONRegionStyle);
    });
    // Complete data with missing regions. The consequent processes (like visual
    // map and render) can not be performed without a "full data". For example,
    // find `dataIndex` by name.
    data.appendData(toAppendItems);
    return data;
  };
  /**
   * If no host geo model, return null, which means using a
   * inner exclusive geo model.
   */
  MapSeries.prototype.getHostGeoModel = function () {
    var geoIndex = this.option.geoIndex;
    return geoIndex != null ? this.ecModel.getComponent('geo', geoIndex) : null;
  };
  MapSeries.prototype.getMapType = function () {
    return (this.getHostGeoModel() || this).option.map;
  };
  // _fillOption(option, mapName) {
  // Shallow clone
  // option = zrUtil.extend({}, option);
  // option.data = geoCreator.getFilledRegions(option.data, mapName, option.nameMap);
  // return option;
  // }
  MapSeries.prototype.getRawValue = function (dataIndex) {
    // Use value stored in data instead because it is calculated from multiple series
    // FIXME Provide all value of multiple series ?
    var data = this.getData();
    return data.get(data.mapDimension('value'), dataIndex);
  };
  /**
   * Get model of region
   */
  MapSeries.prototype.getRegionModel = function (regionName) {
    var data = this.getData();
    return data.getItemModel(data.indexOfName(regionName));
  };
  /**
   * Map tooltip formatter
   */
  MapSeries.prototype.formatTooltip = function (dataIndex, multipleSeries, dataType) {
    // FIXME orignalData and data is a bit confusing
    var data = this.getData();
    var value = this.getRawValue(dataIndex);
    var name = data.getName(dataIndex);
    var seriesGroup = this.seriesGroup;
    var seriesNames = [];
    for (var i = 0; i < seriesGroup.length; i++) {
      var otherIndex = seriesGroup[i].originalData.indexOfName(name);
      var valueDim = data.mapDimension('value');
      if (!isNaN(seriesGroup[i].originalData.get(valueDim, otherIndex))) {
        seriesNames.push(seriesGroup[i].name);
      }
    }
    return (0,tooltipMarkup.createTooltipMarkup)('section', {
      header: seriesNames.join(', '),
      noHeader: !seriesNames.length,
      blocks: [(0,tooltipMarkup.createTooltipMarkup)('nameValue', {
        name: name,
        value: value
      })]
    });
  };
  MapSeries.prototype.setZoom = function (zoom) {
    this.option.zoom = zoom;
  };
  MapSeries.prototype.setCenter = function (center) {
    this.option.center = center;
  };
  MapSeries.prototype.getLegendIcon = function (opt) {
    var iconType = opt.icon || 'roundRect';
    var icon = (0,symbol.createSymbol)(iconType, 0, 0, opt.itemWidth, opt.itemHeight, opt.itemStyle.fill);
    icon.setStyle(opt.itemStyle);
    // Map do not use itemStyle.borderWidth as border width
    icon.style.stroke = 'none';
    // No rotation because no series visual symbol for map
    if (iconType.indexOf('empty') > -1) {
      icon.style.stroke = icon.style.fill;
      icon.style.fill = '#fff';
      icon.style.lineWidth = 2;
    }
    return icon;
  };
  MapSeries.type = 'series.map';
  MapSeries.dependencies = ['geo'];
  MapSeries.layoutMode = 'box';
  MapSeries.defaultOption = {
    // 一级层叠
    // zlevel: 0,
    // 二级层叠
    z: 2,
    coordinateSystem: 'geo',
    // map should be explicitly specified since ec3.
    map: '',
    // If `geoIndex` is not specified, a exclusive geo will be
    // created. Otherwise use the specified geo component, and
    // `map` and `mapType` are ignored.
    // geoIndex: 0,
    // 'center' | 'left' | 'right' | 'x%' | {number}
    left: 'center',
    // 'center' | 'top' | 'bottom' | 'x%' | {number}
    top: 'center',
    // right
    // bottom
    // width:
    // height
    // Aspect is width / height. Inited to be geoJson bbox aspect
    // This parameter is used for scale this aspect
    // Default value:
    // for geoSVG source: 1,
    // for geoJSON source: 0.75.
    aspectScale: null,
    // Layout with center and size
    // If you want to put map in a fixed size box with right aspect ratio
    // This two properties may be more convenient.
    // layoutCenter: [50%, 50%]
    // layoutSize: 100
    showLegendSymbol: true,
    // Define left-top, right-bottom coords to control view
    // For example, [ [180, 90], [-180, -90] ],
    // higher priority than center and zoom
    boundingCoords: null,
    // Default on center of map
    center: null,
    zoom: 1,
    scaleLimit: null,
    selectedMode: true,
    label: {
      show: false,
      color: '#000'
    },
    // scaleLimit: null,
    itemStyle: {
      borderWidth: 0.5,
      borderColor: '#444',
      areaColor: '#eee'
    },
    emphasis: {
      label: {
        show: true,
        color: 'rgb(100,0,0)'
      },
      itemStyle: {
        areaColor: 'rgba(255,215,0,0.8)'
      }
    },
    select: {
      label: {
        show: true,
        color: 'rgb(100,0,0)'
      },
      itemStyle: {
        color: 'rgba(255,215,0,0.8)'
      }
    },
    nameProperty: 'name'
  };
  return MapSeries;
}(Series["default"]);
/* ESM default export */ var map_MapSeries = (MapSeries_MapSeries);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/map/mapDataStatistic.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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

// FIXME 公用？
function dataStatistics(datas, statisticType) {
  var dataNameMap = {};
  util.each(datas, function (data) {
    data.each(data.mapDimension('value'), function (value, idx) {
      // Add prefix to avoid conflict with Object.prototype.
      var mapKey = 'ec-' + data.getName(idx);
      dataNameMap[mapKey] = dataNameMap[mapKey] || [];
      if (!isNaN(value)) {
        dataNameMap[mapKey].push(value);
      }
    });
  });
  return datas[0].map(datas[0].mapDimension('value'), function (value, idx) {
    var mapKey = 'ec-' + datas[0].getName(idx);
    var sum = 0;
    var min = Infinity;
    var max = -Infinity;
    var len = dataNameMap[mapKey].length;
    for (var i = 0; i < len; i++) {
      min = Math.min(min, dataNameMap[mapKey][i]);
      max = Math.max(max, dataNameMap[mapKey][i]);
      sum += dataNameMap[mapKey][i];
    }
    var result;
    if (statisticType === 'min') {
      result = min;
    } else if (statisticType === 'max') {
      result = max;
    } else if (statisticType === 'average') {
      result = sum / len;
    } else {
      result = sum;
    }
    return len === 0 ? NaN : result;
  });
}
function mapDataStatistic(ecModel) {
  var seriesGroups = {};
  ecModel.eachSeriesByType('map', function (seriesModel) {
    var hostGeoModel = seriesModel.getHostGeoModel();
    var key = hostGeoModel ? 'o' + hostGeoModel.id : 'i' + seriesModel.getMapType();
    (seriesGroups[key] = seriesGroups[key] || []).push(seriesModel);
  });
  util.each(seriesGroups, function (seriesList, key) {
    var data = dataStatistics(util.map(seriesList, function (seriesModel) {
      return seriesModel.getData();
    }), seriesList[0].get('mapValueCalculation'));
    for (var i = 0; i < seriesList.length; i++) {
      seriesList[i].originalData = seriesList[i].getData();
    }
    // FIXME Put where?
    for (var i = 0; i < seriesList.length; i++) {
      seriesList[i].seriesGroup = seriesList;
      seriesList[i].needsDrawMap = i === 0 && !seriesList[i].getHostGeoModel();
      seriesList[i].setData(data.cloneShallow());
      seriesList[i].mainSeries = seriesList[0];
    }
  });
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/map/mapSymbolLayout.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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

function mapSymbolLayout(ecModel) {
  var processedMapType = {};
  ecModel.eachSeriesByType('map', function (mapSeries) {
    var mapType = mapSeries.getMapType();
    if (mapSeries.getHostGeoModel() || processedMapType[mapType]) {
      return;
    }
    var mapSymbolOffsets = {};
    util.each(mapSeries.seriesGroup, function (subMapSeries) {
      var geo = subMapSeries.coordinateSystem;
      var data = subMapSeries.originalData;
      if (subMapSeries.get('showLegendSymbol') && ecModel.getComponent('legend')) {
        data.each(data.mapDimension('value'), function (value, idx) {
          var name = data.getName(idx);
          var region = geo.getRegion(name);
          // If input series.data is [11, 22, '-'/null/undefined, 44],
          // it will be filled with NaN: [11, 22, NaN, 44] and NaN will
          // not be drawn. So here must validate if value is NaN.
          if (!region || isNaN(value)) {
            return;
          }
          var offset = mapSymbolOffsets[name] || 0;
          var point = geo.dataToPoint(region.getCenter());
          mapSymbolOffsets[name] = offset + 1;
          data.setItemLayout(idx, {
            point: point,
            offset: offset
          });
        });
      }
    });
    // Show label of those region not has legendIcon (which is offset 0)
    var data = mapSeries.getData();
    data.each(function (idx) {
      var name = data.getName(idx);
      var layout = data.getItemLayout(idx) || {};
      layout.showLabel = !mapSymbolOffsets[name];
      data.setItemLayout(idx, layout);
    });
    processedMapType[mapType] = true;
  });
}
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/legacy/dataSelectAction.js
var dataSelectAction = __webpack_require__(73453);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/geo/install.js + 1 modules
var install = __webpack_require__(89167);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/map/install.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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







function install_install(registers) {
  (0,extension.use)(install.install);
  registers.registerChartView(map_MapView);
  registers.registerSeriesModel(map_MapSeries);
  registers.registerLayout(mapSymbolLayout);
  registers.registerProcessor(registers.PRIORITY.PROCESSOR.STATISTIC, mapDataStatistic);
  (0,dataSelectAction.createLegacyDataSelectAction)('map', registers.registerAction);
}

}),
73876: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  install: function() { return /* binding */ install_install; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/extension.js
var extension = __webpack_require__(70392);
// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(12012);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Group.js
var Group = __webpack_require__(58695);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/animation/basicTransition.js
var basicTransition = __webpack_require__(17524);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/Rect.js + 1 modules
var Rect = __webpack_require__(40361);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/Polyline.js
var Polyline = __webpack_require__(56490);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/states.js
var states = __webpack_require__(63344);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/view/Chart.js
var Chart = __webpack_require__(47389);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(81731);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(96585);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/parallel/ParallelView.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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







var DEFAULT_SMOOTH = 0.3;
var ParallelView_ParallelView = /** @class */function (_super) {
  (0,tslib_es6.__extends)(ParallelView, _super);
  function ParallelView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = ParallelView.type;
    _this._dataGroup = new Group["default"]();
    _this._initialized = false;
    return _this;
  }
  ParallelView.prototype.init = function () {
    this.group.add(this._dataGroup);
  };
  /**
   * @override
   */
  ParallelView.prototype.render = function (seriesModel, ecModel, api, payload) {
    // Clear previously rendered progressive elements.
    this._progressiveEls = null;
    var dataGroup = this._dataGroup;
    var data = seriesModel.getData();
    var oldData = this._data;
    var coordSys = seriesModel.coordinateSystem;
    var dimensions = coordSys.dimensions;
    var seriesScope = makeSeriesScope(seriesModel);
    data.diff(oldData).add(add).update(update).remove(remove).execute();
    function add(newDataIndex) {
      var line = addEl(data, dataGroup, newDataIndex, dimensions, coordSys);
      updateElCommon(line, data, newDataIndex, seriesScope);
    }
    function update(newDataIndex, oldDataIndex) {
      var line = oldData.getItemGraphicEl(oldDataIndex);
      var points = createLinePoints(data, newDataIndex, dimensions, coordSys);
      data.setItemGraphicEl(newDataIndex, line);
      basicTransition.updateProps(line, {
        shape: {
          points: points
        }
      }, seriesModel, newDataIndex);
      (0,basicTransition.saveOldStyle)(line);
      updateElCommon(line, data, newDataIndex, seriesScope);
    }
    function remove(oldDataIndex) {
      var line = oldData.getItemGraphicEl(oldDataIndex);
      dataGroup.remove(line);
    }
    // First create
    if (!this._initialized) {
      this._initialized = true;
      var clipPath = createGridClipShape(coordSys, seriesModel, function () {
        // Callback will be invoked immediately if there is no animation
        setTimeout(function () {
          dataGroup.removeClipPath();
        });
      });
      dataGroup.setClipPath(clipPath);
    }
    this._data = data;
  };
  ParallelView.prototype.incrementalPrepareRender = function (seriesModel, ecModel, api) {
    this._initialized = true;
    this._data = null;
    this._dataGroup.removeAll();
  };
  ParallelView.prototype.incrementalRender = function (taskParams, seriesModel, ecModel) {
    var data = seriesModel.getData();
    var coordSys = seriesModel.coordinateSystem;
    var dimensions = coordSys.dimensions;
    var seriesScope = makeSeriesScope(seriesModel);
    var progressiveEls = this._progressiveEls = [];
    for (var dataIndex = taskParams.start; dataIndex < taskParams.end; dataIndex++) {
      var line = addEl(data, this._dataGroup, dataIndex, dimensions, coordSys);
      line.incremental = true;
      updateElCommon(line, data, dataIndex, seriesScope);
      progressiveEls.push(line);
    }
  };
  ParallelView.prototype.remove = function () {
    this._dataGroup && this._dataGroup.removeAll();
    this._data = null;
  };
  ParallelView.type = 'parallel';
  return ParallelView;
}(Chart["default"]);
function createGridClipShape(coordSys, seriesModel, cb) {
  var parallelModel = coordSys.model;
  var rect = coordSys.getRect();
  var rectEl = new Rect["default"]({
    shape: {
      x: rect.x,
      y: rect.y,
      width: rect.width,
      height: rect.height
    }
  });
  var dim = parallelModel.get('layout') === 'horizontal' ? 'width' : 'height';
  rectEl.setShape(dim, 0);
  basicTransition.initProps(rectEl, {
    shape: {
      width: rect.width,
      height: rect.height
    }
  }, seriesModel, cb);
  return rectEl;
}
function createLinePoints(data, dataIndex, dimensions, coordSys) {
  var points = [];
  for (var i = 0; i < dimensions.length; i++) {
    var dimName = dimensions[i];
    var value = data.get(data.mapDimension(dimName), dataIndex);
    if (!isEmptyValue(value, coordSys.getAxis(dimName).type)) {
      points.push(coordSys.dataToPoint(value, dimName));
    }
  }
  return points;
}
function addEl(data, dataGroup, dataIndex, dimensions, coordSys) {
  var points = createLinePoints(data, dataIndex, dimensions, coordSys);
  var line = new Polyline["default"]({
    shape: {
      points: points
    },
    // silent: true,
    z2: 10
  });
  dataGroup.add(line);
  data.setItemGraphicEl(dataIndex, line);
  return line;
}
function makeSeriesScope(seriesModel) {
  var smooth = seriesModel.get('smooth', true);
  smooth === true && (smooth = DEFAULT_SMOOTH);
  smooth = (0,number.numericToNumber)(smooth);
  (0,util.eqNaN)(smooth) && (smooth = 0);
  return {
    smooth: smooth
  };
}
function updateElCommon(el, data, dataIndex, seriesScope) {
  el.useStyle(data.getItemVisual(dataIndex, 'style'));
  el.style.fill = null;
  el.setShape('smooth', seriesScope.smooth);
  var itemModel = data.getItemModel(dataIndex);
  var emphasisModel = itemModel.getModel('emphasis');
  (0,states.setStatesStylesFromModel)(el, itemModel, 'lineStyle');
  (0,states.toggleHoverEmphasis)(el, emphasisModel.get('focus'), emphasisModel.get('blurScope'), emphasisModel.get('disabled'));
}
// function simpleDiff(oldData, newData, dimensions) {
//     let oldLen;
//     if (!oldData
//         || !oldData.__plProgressive
//         || (oldLen = oldData.count()) !== newData.count()
//     ) {
//         return true;
//     }
//     let dimLen = dimensions.length;
//     for (let i = 0; i < oldLen; i++) {
//         for (let j = 0; j < dimLen; j++) {
//             if (oldData.get(dimensions[j], i) !== newData.get(dimensions[j], i)) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }
// FIXME put in common util?
function isEmptyValue(val, axisType) {
  return axisType === 'category' ? val == null : val == null || isNaN(val); // axisType === 'value'
}
/* ESM default export */ var parallel_ParallelView = (ParallelView_ParallelView);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Series.js
var Series = __webpack_require__(48134);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/createSeriesData.js
var createSeriesData = __webpack_require__(91956);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/parallel/ParallelSeries.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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




var ParallelSeries_ParallelSeriesModel = /** @class */function (_super) {
  (0,tslib_es6.__extends)(ParallelSeriesModel, _super);
  function ParallelSeriesModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = ParallelSeriesModel.type;
    _this.visualStyleAccessPath = 'lineStyle';
    _this.visualDrawType = 'stroke';
    return _this;
  }
  ParallelSeriesModel.prototype.getInitialData = function (option, ecModel) {
    return (0,createSeriesData["default"])(null, this, {
      useEncodeDefaulter: (0,util.bind)(makeDefaultEncode, null, this)
    });
  };
  /**
   * User can get data raw indices on 'axisAreaSelected' event received.
   *
   * @return Raw indices
   */
  ParallelSeriesModel.prototype.getRawIndicesByActiveState = function (activeState) {
    var coordSys = this.coordinateSystem;
    var data = this.getData();
    var indices = [];
    coordSys.eachActiveState(data, function (theActiveState, dataIndex) {
      if (activeState === theActiveState) {
        indices.push(data.getRawIndex(dataIndex));
      }
    });
    return indices;
  };
  ParallelSeriesModel.type = 'series.parallel';
  ParallelSeriesModel.dependencies = ['parallel'];
  ParallelSeriesModel.defaultOption = {
    // zlevel: 0,
    z: 2,
    coordinateSystem: 'parallel',
    parallelIndex: 0,
    label: {
      show: false
    },
    inactiveOpacity: 0.05,
    activeOpacity: 1,
    lineStyle: {
      width: 1,
      opacity: 0.45,
      type: 'solid'
    },
    emphasis: {
      label: {
        show: false
      }
    },
    progressive: 500,
    smooth: false,
    animationEasing: 'linear'
  };
  return ParallelSeriesModel;
}(Series["default"]);
function makeDefaultEncode(seriesModel) {
  // The mapping of parallelAxis dimension to data dimension can
  // be specified in parallelAxis.option.dim. For example, if
  // parallelAxis.option.dim is 'dim3', it mapping to the third
  // dimension of data. But `data.encode` has higher priority.
  // Moreover, parallelModel.dimension should not be regarded as data
  // dimensions. Consider dimensions = ['dim4', 'dim2', 'dim6'];
  var parallelModel = seriesModel.ecModel.getComponent('parallel', seriesModel.get('parallelIndex'));
  if (!parallelModel) {
    return;
  }
  var encodeDefine = {};
  (0,util.each)(parallelModel.dimensions, function (axisDim) {
    var dataDimIndex = convertDimNameToNumber(axisDim);
    encodeDefine[axisDim] = dataDimIndex;
  });
  return encodeDefine;
}
function convertDimNameToNumber(dimName) {
  return +dimName.replace('dim', '');
}
/* ESM default export */ var ParallelSeries = (ParallelSeries_ParallelSeriesModel);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/parallel/parallelVisual.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
var opacityAccessPath = ['lineStyle', 'opacity'];
var parallelVisual = {
  seriesType: 'parallel',
  reset: function (seriesModel, ecModel) {
    var coordSys = seriesModel.coordinateSystem;
    var opacityMap = {
      normal: seriesModel.get(['lineStyle', 'opacity']),
      active: seriesModel.get('activeOpacity'),
      inactive: seriesModel.get('inactiveOpacity')
    };
    return {
      progress: function (params, data) {
        coordSys.eachActiveState(data, function (activeState, dataIndex) {
          var opacity = opacityMap[activeState];
          if (activeState === 'normal' && data.hasItemOption) {
            var itemOpacity = data.getItemModel(dataIndex).get(opacityAccessPath, true);
            itemOpacity != null && (opacity = itemOpacity);
          }
          var existsStyle = data.ensureUniqueItemVisual(dataIndex, 'style');
          existsStyle.opacity = opacity;
        }, params.start, params.end);
      }
    };
  }
};
/* ESM default export */ var parallel_parallelVisual = (parallelVisual);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/parallel/install.js + 1 modules
var install = __webpack_require__(27332);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/parallel/install.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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





function install_install(registers) {
  (0,extension.use)(install.install);
  registers.registerChartView(parallel_ParallelView);
  registers.registerSeriesModel(ParallelSeries);
  registers.registerVisual(registers.PRIORITY.VISUAL.BRUSH, parallel_parallelVisual);
}

}),
75385: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  install: function() { return /* binding */ install; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/legacy/dataSelectAction.js
var dataSelectAction = __webpack_require__(73453);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(81731);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/layout.js
var util_layout = __webpack_require__(37624);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(96585);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/PathProxy.js
var PathProxy = __webpack_require__(6535);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/model.js
var model = __webpack_require__(46451);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/pie/pieLayout.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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





var PI2 = Math.PI * 2;
var RADIAN = Math.PI / 180;
function getViewRect(seriesModel, api) {
  return util_layout.getLayoutRect(seriesModel.getBoxLayoutParams(), {
    width: api.getWidth(),
    height: api.getHeight()
  });
}
function getBasicPieLayout(seriesModel, api) {
  var viewRect = getViewRect(seriesModel, api);
  // center can be string or number when coordinateSystem is specified
  var center = seriesModel.get('center');
  var radius = seriesModel.get('radius');
  if (!util.isArray(radius)) {
    radius = [0, radius];
  }
  var width = (0,number.parsePercent)(viewRect.width, api.getWidth());
  var height = (0,number.parsePercent)(viewRect.height, api.getHeight());
  var size = Math.min(width, height);
  var r0 = (0,number.parsePercent)(radius[0], size / 2);
  var r = (0,number.parsePercent)(radius[1], size / 2);
  var cx;
  var cy;
  var coordSys = seriesModel.coordinateSystem;
  if (coordSys) {
    // percentage is not allowed when coordinate system is specified
    var point = coordSys.dataToPoint(center);
    cx = point[0] || 0;
    cy = point[1] || 0;
  } else {
    if (!util.isArray(center)) {
      center = [center, center];
    }
    cx = (0,number.parsePercent)(center[0], width) + viewRect.x;
    cy = (0,number.parsePercent)(center[1], height) + viewRect.y;
  }
  return {
    cx: cx,
    cy: cy,
    r0: r0,
    r: r
  };
}
function pieLayout(seriesType, ecModel, api) {
  ecModel.eachSeriesByType(seriesType, function (seriesModel) {
    var data = seriesModel.getData();
    var valueDim = data.mapDimension('value');
    var viewRect = getViewRect(seriesModel, api);
    var _a = getBasicPieLayout(seriesModel, api),
      cx = _a.cx,
      cy = _a.cy,
      r = _a.r,
      r0 = _a.r0;
    var startAngle = -seriesModel.get('startAngle') * RADIAN;
    var endAngle = seriesModel.get('endAngle');
    var padAngle = seriesModel.get('padAngle') * RADIAN;
    endAngle = endAngle === 'auto' ? startAngle - PI2 : -endAngle * RADIAN;
    var minAngle = seriesModel.get('minAngle') * RADIAN;
    var minAndPadAngle = minAngle + padAngle;
    var validDataCount = 0;
    data.each(valueDim, function (value) {
      !isNaN(value) && validDataCount++;
    });
    var sum = data.getSum(valueDim);
    // Sum may be 0
    var unitRadian = Math.PI / (sum || validDataCount) * 2;
    var clockwise = seriesModel.get('clockwise');
    var roseType = seriesModel.get('roseType');
    var stillShowZeroSum = seriesModel.get('stillShowZeroSum');
    // [0...max]
    var extent = data.getDataExtent(valueDim);
    extent[0] = 0;
    var dir = clockwise ? 1 : -1;
    var angles = [startAngle, endAngle];
    var halfPadAngle = dir * padAngle / 2;
    (0,PathProxy.normalizeArcAngles)(angles, !clockwise);
    startAngle = angles[0], endAngle = angles[1];
    var layoutData = getSeriesLayoutData(seriesModel);
    layoutData.startAngle = startAngle;
    layoutData.endAngle = endAngle;
    layoutData.clockwise = clockwise;
    var angleRange = Math.abs(endAngle - startAngle);
    // In the case some sector angle is smaller than minAngle
    var restAngle = angleRange;
    var valueSumLargerThanMinAngle = 0;
    var currentAngle = startAngle;
    data.setLayout({
      viewRect: viewRect,
      r: r
    });
    data.each(valueDim, function (value, idx) {
      var angle;
      if (isNaN(value)) {
        data.setItemLayout(idx, {
          angle: NaN,
          startAngle: NaN,
          endAngle: NaN,
          clockwise: clockwise,
          cx: cx,
          cy: cy,
          r0: r0,
          r: roseType ? NaN : r
        });
        return;
      }
      // FIXME 兼容 2.0 但是 roseType 是 area 的时候才是这样？
      if (roseType !== 'area') {
        angle = sum === 0 && stillShowZeroSum ? unitRadian : value * unitRadian;
      } else {
        angle = angleRange / validDataCount;
      }
      if (angle < minAndPadAngle) {
        angle = minAndPadAngle;
        restAngle -= minAndPadAngle;
      } else {
        valueSumLargerThanMinAngle += value;
      }
      var endAngle = currentAngle + dir * angle;
      // calculate display angle
      var actualStartAngle = 0;
      var actualEndAngle = 0;
      if (padAngle > angle) {
        actualStartAngle = currentAngle + dir * angle / 2;
        actualEndAngle = actualStartAngle;
      } else {
        actualStartAngle = currentAngle + halfPadAngle;
        actualEndAngle = endAngle - halfPadAngle;
      }
      data.setItemLayout(idx, {
        angle: angle,
        startAngle: actualStartAngle,
        endAngle: actualEndAngle,
        clockwise: clockwise,
        cx: cx,
        cy: cy,
        r0: r0,
        r: roseType ? (0,number.linearMap)(value, extent, [r0, r]) : r
      });
      currentAngle = endAngle;
    });
    // Some sector is constrained by minAngle and padAngle
    // Rest sectors needs recalculate angle
    if (restAngle < PI2 && validDataCount) {
      // Average the angle if rest angle is not enough after all angles is
      // Constrained by minAngle and padAngle
      if (restAngle <= 1e-3) {
        var angle_1 = angleRange / validDataCount;
        data.each(valueDim, function (value, idx) {
          if (!isNaN(value)) {
            var layout_1 = data.getItemLayout(idx);
            layout_1.angle = angle_1;
            var actualStartAngle = 0;
            var actualEndAngle = 0;
            if (angle_1 < padAngle) {
              actualStartAngle = startAngle + dir * (idx + 1 / 2) * angle_1;
              actualEndAngle = actualStartAngle;
            } else {
              actualStartAngle = startAngle + dir * idx * angle_1 + halfPadAngle;
              actualEndAngle = startAngle + dir * (idx + 1) * angle_1 - halfPadAngle;
            }
            layout_1.startAngle = actualStartAngle;
            layout_1.endAngle = actualEndAngle;
          }
        });
      } else {
        unitRadian = restAngle / valueSumLargerThanMinAngle;
        currentAngle = startAngle;
        data.each(valueDim, function (value, idx) {
          if (!isNaN(value)) {
            var layout_2 = data.getItemLayout(idx);
            var angle = layout_2.angle === minAndPadAngle ? minAndPadAngle : value * unitRadian;
            var actualStartAngle = 0;
            var actualEndAngle = 0;
            if (angle < padAngle) {
              actualStartAngle = currentAngle + dir * angle / 2;
              actualEndAngle = actualStartAngle;
            } else {
              actualStartAngle = currentAngle + halfPadAngle;
              actualEndAngle = currentAngle + dir * angle - halfPadAngle;
            }
            layout_2.startAngle = actualStartAngle;
            layout_2.endAngle = actualEndAngle;
            currentAngle += dir * angle;
          }
        });
      }
    }
  });
}
var getSeriesLayoutData = (0,model.makeInner)();
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/processor/dataFilter.js
var dataFilter = __webpack_require__(47400);
// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(12012);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Text.js
var Text = __webpack_require__(97199);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/animation/basicTransition.js
var basicTransition = __webpack_require__(17524);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/Polyline.js
var Polyline = __webpack_require__(56490);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/Sector.js + 1 modules
var Sector = __webpack_require__(98289);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/states.js
var states = __webpack_require__(63344);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/view/Chart.js
var Chart = __webpack_require__(47389);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/Point.js
var Point = __webpack_require__(12430);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/label/labelGuideHelper.js
var labelGuideHelper = __webpack_require__(34633);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/label/labelLayoutHelper.js
var labelLayoutHelper = __webpack_require__(30502);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/pie/labelLayout.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
// FIXME emphasis label position is not same with normal label position





var labelLayout_RADIAN = Math.PI / 180;
function adjustSingleSide(list, cx, cy, r, dir, viewWidth, viewHeight, viewLeft, viewTop, farthestX) {
  if (list.length < 2) {
    return;
  }
  ;
  function recalculateXOnSemiToAlignOnEllipseCurve(semi) {
    var rB = semi.rB;
    var rB2 = rB * rB;
    for (var i = 0; i < semi.list.length; i++) {
      var item = semi.list[i];
      var dy = Math.abs(item.label.y - cy);
      // horizontal r is always same with original r because x is not changed.
      var rA = r + item.len;
      var rA2 = rA * rA;
      // Use ellipse implicit function to calculate x
      var dx = Math.sqrt(Math.abs((1 - dy * dy / rB2) * rA2));
      var newX = cx + (dx + item.len2) * dir;
      var deltaX = newX - item.label.x;
      var newTargetWidth = item.targetTextWidth - deltaX * dir;
      // text x is changed, so need to recalculate width.
      constrainTextWidth(item, newTargetWidth, true);
      item.label.x = newX;
    }
  }
  // Adjust X based on the shifted y. Make tight labels aligned on an ellipse curve.
  function recalculateX(items) {
    // Extremes of
    var topSemi = {
      list: [],
      maxY: 0
    };
    var bottomSemi = {
      list: [],
      maxY: 0
    };
    for (var i = 0; i < items.length; i++) {
      if (items[i].labelAlignTo !== 'none') {
        continue;
      }
      var item = items[i];
      var semi = item.label.y > cy ? bottomSemi : topSemi;
      var dy = Math.abs(item.label.y - cy);
      if (dy >= semi.maxY) {
        var dx = item.label.x - cx - item.len2 * dir;
        // horizontal r is always same with original r because x is not changed.
        var rA = r + item.len;
        // Canculate rB based on the topest / bottemest label.
        var rB = Math.abs(dx) < rA ? Math.sqrt(dy * dy / (1 - dx * dx / rA / rA)) : rA;
        semi.rB = rB;
        semi.maxY = dy;
      }
      semi.list.push(item);
    }
    recalculateXOnSemiToAlignOnEllipseCurve(topSemi);
    recalculateXOnSemiToAlignOnEllipseCurve(bottomSemi);
  }
  var len = list.length;
  for (var i = 0; i < len; i++) {
    if (list[i].position === 'outer' && list[i].labelAlignTo === 'labelLine') {
      var dx = list[i].label.x - farthestX;
      list[i].linePoints[1][0] += dx;
      list[i].label.x = farthestX;
    }
  }
  if ((0,labelLayoutHelper.shiftLayoutOnY)(list, viewTop, viewTop + viewHeight)) {
    recalculateX(list);
  }
}
function avoidOverlap(labelLayoutList, cx, cy, r, viewWidth, viewHeight, viewLeft, viewTop) {
  var leftList = [];
  var rightList = [];
  var leftmostX = Number.MAX_VALUE;
  var rightmostX = -Number.MAX_VALUE;
  for (var i = 0; i < labelLayoutList.length; i++) {
    var label = labelLayoutList[i].label;
    if (isPositionCenter(labelLayoutList[i])) {
      continue;
    }
    if (label.x < cx) {
      leftmostX = Math.min(leftmostX, label.x);
      leftList.push(labelLayoutList[i]);
    } else {
      rightmostX = Math.max(rightmostX, label.x);
      rightList.push(labelLayoutList[i]);
    }
  }
  for (var i = 0; i < labelLayoutList.length; i++) {
    var layout = labelLayoutList[i];
    if (!isPositionCenter(layout) && layout.linePoints) {
      if (layout.labelStyleWidth != null) {
        continue;
      }
      var label = layout.label;
      var linePoints = layout.linePoints;
      var targetTextWidth = void 0;
      if (layout.labelAlignTo === 'edge') {
        if (label.x < cx) {
          targetTextWidth = linePoints[2][0] - layout.labelDistance - viewLeft - layout.edgeDistance;
        } else {
          targetTextWidth = viewLeft + viewWidth - layout.edgeDistance - linePoints[2][0] - layout.labelDistance;
        }
      } else if (layout.labelAlignTo === 'labelLine') {
        if (label.x < cx) {
          targetTextWidth = leftmostX - viewLeft - layout.bleedMargin;
        } else {
          targetTextWidth = viewLeft + viewWidth - rightmostX - layout.bleedMargin;
        }
      } else {
        if (label.x < cx) {
          targetTextWidth = label.x - viewLeft - layout.bleedMargin;
        } else {
          targetTextWidth = viewLeft + viewWidth - label.x - layout.bleedMargin;
        }
      }
      layout.targetTextWidth = targetTextWidth;
      constrainTextWidth(layout, targetTextWidth);
    }
  }
  adjustSingleSide(rightList, cx, cy, r, 1, viewWidth, viewHeight, viewLeft, viewTop, rightmostX);
  adjustSingleSide(leftList, cx, cy, r, -1, viewWidth, viewHeight, viewLeft, viewTop, leftmostX);
  for (var i = 0; i < labelLayoutList.length; i++) {
    var layout = labelLayoutList[i];
    if (!isPositionCenter(layout) && layout.linePoints) {
      var label = layout.label;
      var linePoints = layout.linePoints;
      var isAlignToEdge = layout.labelAlignTo === 'edge';
      var padding = label.style.padding;
      var paddingH = padding ? padding[1] + padding[3] : 0;
      // textRect.width already contains paddingH if bgColor is set
      var extraPaddingH = label.style.backgroundColor ? 0 : paddingH;
      var realTextWidth = layout.rect.width + extraPaddingH;
      var dist = linePoints[1][0] - linePoints[2][0];
      if (isAlignToEdge) {
        if (label.x < cx) {
          linePoints[2][0] = viewLeft + layout.edgeDistance + realTextWidth + layout.labelDistance;
        } else {
          linePoints[2][0] = viewLeft + viewWidth - layout.edgeDistance - realTextWidth - layout.labelDistance;
        }
      } else {
        if (label.x < cx) {
          linePoints[2][0] = label.x + layout.labelDistance;
        } else {
          linePoints[2][0] = label.x - layout.labelDistance;
        }
        linePoints[1][0] = linePoints[2][0] + dist;
      }
      linePoints[1][1] = linePoints[2][1] = label.y;
    }
  }
}
/**
 * Set max width of each label, and then wrap each label to the max width.
 *
 * @param layout label layout
 * @param availableWidth max width for the label to display
 * @param forceRecalculate recaculate the text layout even if the current width
 * is smaller than `availableWidth`. This is useful when the text was previously
 * wrapped by calling `constrainTextWidth` but now `availableWidth` changed, in
 * which case, previous wrapping should be redo.
 */
function constrainTextWidth(layout, availableWidth, forceRecalculate) {
  if (forceRecalculate === void 0) {
    forceRecalculate = false;
  }
  if (layout.labelStyleWidth != null) {
    // User-defined style.width has the highest priority.
    return;
  }
  var label = layout.label;
  var style = label.style;
  var textRect = layout.rect;
  var bgColor = style.backgroundColor;
  var padding = style.padding;
  var paddingH = padding ? padding[1] + padding[3] : 0;
  var overflow = style.overflow;
  // textRect.width already contains paddingH if bgColor is set
  var oldOuterWidth = textRect.width + (bgColor ? 0 : paddingH);
  if (availableWidth < oldOuterWidth || forceRecalculate) {
    var oldHeight = textRect.height;
    if (overflow && overflow.match('break')) {
      // Temporarily set background to be null to calculate
      // the bounding box without background.
      label.setStyle('backgroundColor', null);
      // Set constraining width
      label.setStyle('width', availableWidth - paddingH);
      // This is the real bounding box of the text without padding.
      var innerRect = label.getBoundingRect();
      label.setStyle('width', Math.ceil(innerRect.width));
      label.setStyle('backgroundColor', bgColor);
    } else {
      var availableInnerWidth = availableWidth - paddingH;
      var newWidth = availableWidth < oldOuterWidth
      // Current text is too wide, use `availableWidth` as max width.
      ? availableInnerWidth :
      // Current available width is enough, but the text may have
      // already been wrapped with a smaller available width.
      forceRecalculate ? availableInnerWidth > layout.unconstrainedWidth
      // Current available is larger than text width,
      // so don't constrain width (otherwise it may have
      // empty space in the background).
      ? null
      // Current available is smaller than text width, so
      // use the current available width as constraining
      // width.
      : availableInnerWidth
      // Current available width is enough, so no need to
      // constrain.
      : null;
      label.setStyle('width', newWidth);
    }
    var newRect = label.getBoundingRect();
    textRect.width = newRect.width;
    var margin = (label.style.margin || 0) + 2.1;
    textRect.height = newRect.height + margin;
    textRect.y -= (textRect.height - oldHeight) / 2;
  }
}
function isPositionCenter(sectorShape) {
  // Not change x for center label
  return sectorShape.position === 'center';
}
function pieLabelLayout(seriesModel) {
  var data = seriesModel.getData();
  var labelLayoutList = [];
  var cx;
  var cy;
  var hasLabelRotate = false;
  var minShowLabelRadian = (seriesModel.get('minShowLabelAngle') || 0) * labelLayout_RADIAN;
  var viewRect = data.getLayout('viewRect');
  var r = data.getLayout('r');
  var viewWidth = viewRect.width;
  var viewLeft = viewRect.x;
  var viewTop = viewRect.y;
  var viewHeight = viewRect.height;
  function setNotShow(el) {
    el.ignore = true;
  }
  function isLabelShown(label) {
    if (!label.ignore) {
      return true;
    }
    for (var key in label.states) {
      if (label.states[key].ignore === false) {
        return true;
      }
    }
    return false;
  }
  data.each(function (idx) {
    var sector = data.getItemGraphicEl(idx);
    var sectorShape = sector.shape;
    var label = sector.getTextContent();
    var labelLine = sector.getTextGuideLine();
    var itemModel = data.getItemModel(idx);
    var labelModel = itemModel.getModel('label');
    // Use position in normal or emphasis
    var labelPosition = labelModel.get('position') || itemModel.get(['emphasis', 'label', 'position']);
    var labelDistance = labelModel.get('distanceToLabelLine');
    var labelAlignTo = labelModel.get('alignTo');
    var edgeDistance = (0,number.parsePercent)(labelModel.get('edgeDistance'), viewWidth);
    var bleedMargin = labelModel.get('bleedMargin');
    var labelLineModel = itemModel.getModel('labelLine');
    var labelLineLen = labelLineModel.get('length');
    labelLineLen = (0,number.parsePercent)(labelLineLen, viewWidth);
    var labelLineLen2 = labelLineModel.get('length2');
    labelLineLen2 = (0,number.parsePercent)(labelLineLen2, viewWidth);
    if (Math.abs(sectorShape.endAngle - sectorShape.startAngle) < minShowLabelRadian) {
      (0,util.each)(label.states, setNotShow);
      label.ignore = true;
      if (labelLine) {
        (0,util.each)(labelLine.states, setNotShow);
        labelLine.ignore = true;
      }
      return;
    }
    if (!isLabelShown(label)) {
      return;
    }
    var midAngle = (sectorShape.startAngle + sectorShape.endAngle) / 2;
    var nx = Math.cos(midAngle);
    var ny = Math.sin(midAngle);
    var textX;
    var textY;
    var linePoints;
    var textAlign;
    cx = sectorShape.cx;
    cy = sectorShape.cy;
    var isLabelInside = labelPosition === 'inside' || labelPosition === 'inner';
    if (labelPosition === 'center') {
      textX = sectorShape.cx;
      textY = sectorShape.cy;
      textAlign = 'center';
    } else {
      var x1 = (isLabelInside ? (sectorShape.r + sectorShape.r0) / 2 * nx : sectorShape.r * nx) + cx;
      var y1 = (isLabelInside ? (sectorShape.r + sectorShape.r0) / 2 * ny : sectorShape.r * ny) + cy;
      textX = x1 + nx * 3;
      textY = y1 + ny * 3;
      if (!isLabelInside) {
        // For roseType
        var x2 = x1 + nx * (labelLineLen + r - sectorShape.r);
        var y2 = y1 + ny * (labelLineLen + r - sectorShape.r);
        var x3 = x2 + (nx < 0 ? -1 : 1) * labelLineLen2;
        var y3 = y2;
        if (labelAlignTo === 'edge') {
          // Adjust textX because text align of edge is opposite
          textX = nx < 0 ? viewLeft + edgeDistance : viewLeft + viewWidth - edgeDistance;
        } else {
          textX = x3 + (nx < 0 ? -labelDistance : labelDistance);
        }
        textY = y3;
        linePoints = [[x1, y1], [x2, y2], [x3, y3]];
      }
      textAlign = isLabelInside ? 'center' : labelAlignTo === 'edge' ? nx > 0 ? 'right' : 'left' : nx > 0 ? 'left' : 'right';
    }
    var PI = Math.PI;
    var labelRotate = 0;
    var rotate = labelModel.get('rotate');
    if ((0,util.isNumber)(rotate)) {
      labelRotate = rotate * (PI / 180);
    } else if (labelPosition === 'center') {
      labelRotate = 0;
    } else if (rotate === 'radial' || rotate === true) {
      var radialAngle = nx < 0 ? -midAngle + PI : -midAngle;
      labelRotate = radialAngle;
    } else if (rotate === 'tangential' && labelPosition !== 'outside' && labelPosition !== 'outer') {
      var rad = Math.atan2(nx, ny);
      if (rad < 0) {
        rad = PI * 2 + rad;
      }
      var isDown = ny > 0;
      if (isDown) {
        rad = PI + rad;
      }
      labelRotate = rad - PI;
    }
    hasLabelRotate = !!labelRotate;
    label.x = textX;
    label.y = textY;
    label.rotation = labelRotate;
    label.setStyle({
      verticalAlign: 'middle'
    });
    // Not sectorShape the inside label
    if (!isLabelInside) {
      var textRect = label.getBoundingRect().clone();
      textRect.applyTransform(label.getComputedTransform());
      // Text has a default 1px stroke. Exclude this.
      var margin = (label.style.margin || 0) + 2.1;
      textRect.y -= margin / 2;
      textRect.height += margin;
      labelLayoutList.push({
        label: label,
        labelLine: labelLine,
        position: labelPosition,
        len: labelLineLen,
        len2: labelLineLen2,
        minTurnAngle: labelLineModel.get('minTurnAngle'),
        maxSurfaceAngle: labelLineModel.get('maxSurfaceAngle'),
        surfaceNormal: new Point["default"](nx, ny),
        linePoints: linePoints,
        textAlign: textAlign,
        labelDistance: labelDistance,
        labelAlignTo: labelAlignTo,
        edgeDistance: edgeDistance,
        bleedMargin: bleedMargin,
        rect: textRect,
        unconstrainedWidth: textRect.width,
        labelStyleWidth: label.style.width
      });
    } else {
      label.setStyle({
        align: textAlign
      });
      var selectState = label.states.select;
      if (selectState) {
        selectState.x += label.x;
        selectState.y += label.y;
      }
    }
    sector.setTextConfig({
      inside: isLabelInside
    });
  });
  if (!hasLabelRotate && seriesModel.get('avoidLabelOverlap')) {
    avoidOverlap(labelLayoutList, cx, cy, r, viewWidth, viewHeight, viewLeft, viewTop);
  }
  for (var i = 0; i < labelLayoutList.length; i++) {
    var layout = labelLayoutList[i];
    var label = layout.label;
    var labelLine = layout.labelLine;
    var notShowLabel = isNaN(label.x) || isNaN(label.y);
    if (label) {
      label.setStyle({
        align: layout.textAlign
      });
      if (notShowLabel) {
        (0,util.each)(label.states, setNotShow);
        label.ignore = true;
      }
      var selectState = label.states.select;
      if (selectState) {
        selectState.x += label.x;
        selectState.y += label.y;
      }
    }
    if (labelLine) {
      var linePoints = layout.linePoints;
      if (notShowLabel || !linePoints) {
        (0,util.each)(labelLine.states, setNotShow);
        labelLine.ignore = true;
      } else {
        (0,labelGuideHelper.limitTurnAngle)(linePoints, layout.minTurnAngle);
        (0,labelGuideHelper.limitSurfaceAngle)(linePoints, layout.surfaceNormal, layout.maxSurfaceAngle);
        labelLine.setShape({
          points: linePoints
        });
        // Set the anchor to the midpoint of sector
        label.__hostTarget.textGuideLineConfig = {
          anchor: new Point["default"](linePoints[0][0], linePoints[0][1])
        };
      }
    }
  }
}
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/label/labelStyle.js
var labelStyle = __webpack_require__(77704);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/sectorHelper.js
var sectorHelper = __webpack_require__(55549);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/pie/PieView.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
 * Piece of pie including Sector, Label, LabelLine
 */
var PieView_PiePiece = /** @class */function (_super) {
  (0,tslib_es6.__extends)(PiePiece, _super);
  function PiePiece(data, idx, startAngle) {
    var _this = _super.call(this) || this;
    _this.z2 = 2;
    var text = new Text["default"]();
    _this.setTextContent(text);
    _this.updateData(data, idx, startAngle, true);
    return _this;
  }
  PiePiece.prototype.updateData = function (data, idx, startAngle, firstCreate) {
    var sector = this;
    var seriesModel = data.hostModel;
    var itemModel = data.getItemModel(idx);
    var emphasisModel = itemModel.getModel('emphasis');
    var layout = data.getItemLayout(idx);
    // cornerRadius & innerCornerRadius doesn't exist in the item layout. Use `0` if null value is specified.
    // see `setItemLayout` in `pieLayout.ts`.
    var sectorShape = (0,util.extend)((0,sectorHelper.getSectorCornerRadius)(itemModel.getModel('itemStyle'), layout, true), layout);
    // Ignore NaN data.
    if (isNaN(sectorShape.startAngle)) {
      // Use NaN shape to avoid drawing shape.
      sector.setShape(sectorShape);
      return;
    }
    if (firstCreate) {
      sector.setShape(sectorShape);
      var animationType = seriesModel.getShallow('animationType');
      if (seriesModel.ecModel.ssr) {
        // Use scale animation in SSR mode(opacity?)
        // Because CSS SVG animation doesn't support very customized shape animation.
        basicTransition.initProps(sector, {
          scaleX: 0,
          scaleY: 0
        }, seriesModel, {
          dataIndex: idx,
          isFrom: true
        });
        sector.originX = sectorShape.cx;
        sector.originY = sectorShape.cy;
      } else if (animationType === 'scale') {
        sector.shape.r = layout.r0;
        basicTransition.initProps(sector, {
          shape: {
            r: layout.r
          }
        }, seriesModel, idx);
      }
      // Expansion
      else {
        if (startAngle != null) {
          sector.setShape({
            startAngle: startAngle,
            endAngle: startAngle
          });
          basicTransition.initProps(sector, {
            shape: {
              startAngle: layout.startAngle,
              endAngle: layout.endAngle
            }
          }, seriesModel, idx);
        } else {
          sector.shape.endAngle = layout.startAngle;
          basicTransition.updateProps(sector, {
            shape: {
              endAngle: layout.endAngle
            }
          }, seriesModel, idx);
        }
      }
    } else {
      (0,basicTransition.saveOldStyle)(sector);
      // Transition animation from the old shape
      basicTransition.updateProps(sector, {
        shape: sectorShape
      }, seriesModel, idx);
    }
    sector.useStyle(data.getItemVisual(idx, 'style'));
    (0,states.setStatesStylesFromModel)(sector, itemModel);
    var midAngle = (layout.startAngle + layout.endAngle) / 2;
    var offset = seriesModel.get('selectedOffset');
    var dx = Math.cos(midAngle) * offset;
    var dy = Math.sin(midAngle) * offset;
    var cursorStyle = itemModel.getShallow('cursor');
    cursorStyle && sector.attr('cursor', cursorStyle);
    this._updateLabel(seriesModel, data, idx);
    sector.ensureState('emphasis').shape = (0,util.extend)({
      r: layout.r + (emphasisModel.get('scale') ? emphasisModel.get('scaleSize') || 0 : 0)
    }, (0,sectorHelper.getSectorCornerRadius)(emphasisModel.getModel('itemStyle'), layout));
    (0,util.extend)(sector.ensureState('select'), {
      x: dx,
      y: dy,
      shape: (0,sectorHelper.getSectorCornerRadius)(itemModel.getModel(['select', 'itemStyle']), layout)
    });
    (0,util.extend)(sector.ensureState('blur'), {
      shape: (0,sectorHelper.getSectorCornerRadius)(itemModel.getModel(['blur', 'itemStyle']), layout)
    });
    var labelLine = sector.getTextGuideLine();
    var labelText = sector.getTextContent();
    labelLine && (0,util.extend)(labelLine.ensureState('select'), {
      x: dx,
      y: dy
    });
    // TODO: needs dx, dy in zrender?
    (0,util.extend)(labelText.ensureState('select'), {
      x: dx,
      y: dy
    });
    (0,states.toggleHoverEmphasis)(this, emphasisModel.get('focus'), emphasisModel.get('blurScope'), emphasisModel.get('disabled'));
  };
  PiePiece.prototype._updateLabel = function (seriesModel, data, idx) {
    var sector = this;
    var itemModel = data.getItemModel(idx);
    var labelLineModel = itemModel.getModel('labelLine');
    var style = data.getItemVisual(idx, 'style');
    var visualColor = style && style.fill;
    var visualOpacity = style && style.opacity;
    (0,labelStyle.setLabelStyle)(sector, (0,labelStyle.getLabelStatesModels)(itemModel), {
      labelFetcher: data.hostModel,
      labelDataIndex: idx,
      inheritColor: visualColor,
      defaultOpacity: visualOpacity,
      defaultText: seriesModel.getFormattedLabel(idx, 'normal') || data.getName(idx)
    });
    var labelText = sector.getTextContent();
    // Set textConfig on sector.
    sector.setTextConfig({
      // reset position, rotation
      position: null,
      rotation: null
    });
    // Make sure update style on labelText after setLabelStyle.
    // Because setLabelStyle will replace a new style on it.
    labelText.attr({
      z2: 10
    });
    var labelPosition = seriesModel.get(['label', 'position']);
    if (labelPosition !== 'outside' && labelPosition !== 'outer') {
      sector.removeTextGuideLine();
    } else {
      var polyline = this.getTextGuideLine();
      if (!polyline) {
        polyline = new Polyline["default"]();
        this.setTextGuideLine(polyline);
      }
      // Default use item visual color
      (0,labelGuideHelper.setLabelLineStyle)(this, (0,labelGuideHelper.getLabelLineStatesModels)(itemModel), {
        stroke: visualColor,
        opacity: (0,util.retrieve3)(labelLineModel.get(['lineStyle', 'opacity']), visualOpacity, 1)
      });
    }
  };
  return PiePiece;
}(Sector["default"]);
// Pie view
var PieView_PieView = /** @class */function (_super) {
  (0,tslib_es6.__extends)(PieView, _super);
  function PieView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.ignoreLabelLineUpdate = true;
    return _this;
  }
  PieView.prototype.render = function (seriesModel, ecModel, api, payload) {
    var data = seriesModel.getData();
    var oldData = this._data;
    var group = this.group;
    var startAngle;
    // First render
    if (!oldData && data.count() > 0) {
      var shape = data.getItemLayout(0);
      for (var s = 1; isNaN(shape && shape.startAngle) && s < data.count(); ++s) {
        shape = data.getItemLayout(s);
      }
      if (shape) {
        startAngle = shape.startAngle;
      }
    }
    // remove empty-circle if it exists
    if (this._emptyCircleSector) {
      group.remove(this._emptyCircleSector);
    }
    // when all data are filtered, show lightgray empty circle
    if (data.count() === 0 && seriesModel.get('showEmptyCircle')) {
      var layoutData = getSeriesLayoutData(seriesModel);
      var sector = new Sector["default"]({
        shape: (0,util.extend)(getBasicPieLayout(seriesModel, api), layoutData)
      });
      sector.useStyle(seriesModel.getModel('emptyCircleStyle').getItemStyle());
      this._emptyCircleSector = sector;
      group.add(sector);
    }
    data.diff(oldData).add(function (idx) {
      var piePiece = new PieView_PiePiece(data, idx, startAngle);
      data.setItemGraphicEl(idx, piePiece);
      group.add(piePiece);
    }).update(function (newIdx, oldIdx) {
      var piePiece = oldData.getItemGraphicEl(oldIdx);
      piePiece.updateData(data, newIdx, startAngle);
      piePiece.off('click');
      group.add(piePiece);
      data.setItemGraphicEl(newIdx, piePiece);
    }).remove(function (idx) {
      var piePiece = oldData.getItemGraphicEl(idx);
      basicTransition.removeElementWithFadeOut(piePiece, seriesModel, idx);
    }).execute();
    pieLabelLayout(seriesModel);
    // Always use initial animation.
    if (seriesModel.get('animationTypeUpdate') !== 'expansion') {
      this._data = data;
    }
  };
  PieView.prototype.dispose = function () {};
  PieView.prototype.containPoint = function (point, seriesModel) {
    var data = seriesModel.getData();
    var itemLayout = data.getItemLayout(0);
    if (itemLayout) {
      var dx = point[0] - itemLayout.cx;
      var dy = point[1] - itemLayout.cy;
      var radius = Math.sqrt(dx * dx + dy * dy);
      return radius <= itemLayout.r && radius >= itemLayout.r0;
    }
  };
  PieView.type = 'pie';
  return PieView;
}(Chart["default"]);
/* ESM default export */ var pie_PieView = (PieView_PieView);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/createSeriesDataSimply.js
var createSeriesDataSimply = __webpack_require__(86011);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/data/helper/sourceHelper.js
var sourceHelper = __webpack_require__(490);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/visual/LegendVisualProvider.js
var LegendVisualProvider = __webpack_require__(57275);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Series.js
var Series = __webpack_require__(48134);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/pie/PieSeries.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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








var innerData = model.makeInner();
var PieSeries_PieSeriesModel = /** @class */function (_super) {
  (0,tslib_es6.__extends)(PieSeriesModel, _super);
  function PieSeriesModel() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  /**
   * @overwrite
   */
  PieSeriesModel.prototype.init = function (option) {
    _super.prototype.init.apply(this, arguments);
    // Enable legend selection for each data item
    // Use a function instead of direct access because data reference may changed
    this.legendVisualProvider = new LegendVisualProvider["default"](util.bind(this.getData, this), util.bind(this.getRawData, this));
    this._defaultLabelLine(option);
  };
  /**
   * @overwrite
   */
  PieSeriesModel.prototype.mergeOption = function () {
    _super.prototype.mergeOption.apply(this, arguments);
  };
  /**
   * @overwrite
   */
  PieSeriesModel.prototype.getInitialData = function () {
    return (0,createSeriesDataSimply["default"])(this, {
      coordDimensions: ['value'],
      encodeDefaulter: util.curry(sourceHelper.makeSeriesEncodeForNameBased, this)
    });
  };
  /**
   * @overwrite
   */
  PieSeriesModel.prototype.getDataParams = function (dataIndex) {
    var data = this.getData();
    // update seats when data is changed
    var dataInner = innerData(data);
    var seats = dataInner.seats;
    if (!seats) {
      var valueList_1 = [];
      data.each(data.mapDimension('value'), function (value) {
        valueList_1.push(value);
      });
      seats = dataInner.seats = (0,number.getPercentSeats)(valueList_1, data.hostModel.get('percentPrecision'));
    }
    var params = _super.prototype.getDataParams.call(this, dataIndex);
    // seats may be empty when sum is 0
    params.percent = seats[dataIndex] || 0;
    params.$vars.push('percent');
    return params;
  };
  PieSeriesModel.prototype._defaultLabelLine = function (option) {
    // Extend labelLine emphasis
    model.defaultEmphasis(option, 'labelLine', ['show']);
    var labelLineNormalOpt = option.labelLine;
    var labelLineEmphasisOpt = option.emphasis.labelLine;
    // Not show label line if `label.normal.show = false`
    labelLineNormalOpt.show = labelLineNormalOpt.show && option.label.show;
    labelLineEmphasisOpt.show = labelLineEmphasisOpt.show && option.emphasis.label.show;
  };
  PieSeriesModel.type = 'series.pie';
  PieSeriesModel.defaultOption = {
    // zlevel: 0,
    z: 2,
    legendHoverLink: true,
    colorBy: 'data',
    // 默认全局居中
    center: ['50%', '50%'],
    radius: [0, '75%'],
    // 默认顺时针
    clockwise: true,
    startAngle: 90,
    endAngle: 'auto',
    padAngle: 0,
    // 最小角度改为0
    minAngle: 0,
    // If the angle of a sector less than `minShowLabelAngle`,
    // the label will not be displayed.
    minShowLabelAngle: 0,
    // 选中时扇区偏移量
    selectedOffset: 10,
    // 选择模式，默认关闭，可选single，multiple
    // selectedMode: false,
    // 南丁格尔玫瑰图模式，'radius'（半径） | 'area'（面积）
    // roseType: null,
    percentPrecision: 2,
    // If still show when all data zero.
    stillShowZeroSum: true,
    // cursor: null,
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: null,
    height: null,
    label: {
      // color: 'inherit',
      // If rotate around circle
      rotate: 0,
      show: true,
      overflow: 'truncate',
      // 'outer', 'inside', 'center'
      position: 'outer',
      // 'none', 'labelLine', 'edge'. Works only when position is 'outer'
      alignTo: 'none',
      // Closest distance between label and chart edge.
      // Works only position is 'outer' and alignTo is 'edge'.
      edgeDistance: '25%',
      // Works only position is 'outer' and alignTo is not 'edge'.
      bleedMargin: 10,
      // Distance between text and label line.
      distanceToLabelLine: 5
      // formatter: 标签文本格式器，同 tooltip.formatter，不支持异步回调
      // 默认使用全局文本样式，详见 textStyle
      // distance: 当position为inner时有效，为label位置到圆心的距离与圆半径(环状图为内外半径和)的比例系数
    },
    // Enabled when label.normal.position is 'outer'
    labelLine: {
      show: true,
      // 引导线两段中的第一段长度
      length: 15,
      // 引导线两段中的第二段长度
      length2: 15,
      smooth: false,
      minTurnAngle: 90,
      maxSurfaceAngle: 90,
      lineStyle: {
        // color: 各异,
        width: 1,
        type: 'solid'
      }
    },
    itemStyle: {
      borderWidth: 1,
      borderJoin: 'round'
    },
    showEmptyCircle: true,
    emptyCircleStyle: {
      color: 'lightgray',
      opacity: 1
    },
    labelLayout: {
      // Hide the overlapped label.
      hideOverlap: true
    },
    emphasis: {
      scale: true,
      scaleSize: 5
    },
    // If use strategy to avoid label overlapping
    avoidLabelOverlap: true,
    // Animation type. Valid values: expansion, scale
    animationType: 'expansion',
    animationDuration: 1000,
    // Animation type when update. Valid values: transition, expansion
    animationTypeUpdate: 'transition',
    animationEasingUpdate: 'cubicInOut',
    animationDurationUpdate: 500,
    animationEasing: 'cubicInOut'
  };
  return PieSeriesModel;
}(Series["default"]);
/* ESM default export */ var PieSeries = (PieSeries_PieSeriesModel);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/processor/negativeDataFilter.js
var negativeDataFilter = __webpack_require__(79743);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/pie/install.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  registers.registerChartView(pie_PieView);
  registers.registerSeriesModel(PieSeries);
  (0,dataSelectAction.createLegacyDataSelectAction)('pie', registers.registerAction);
  registers.registerLayout((0,util.curry)(pieLayout, 'pie'));
  registers.registerProcessor((0,dataFilter["default"])('pie'));
  registers.registerProcessor((0,negativeDataFilter["default"])('pie'));
}

}),
84886: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  install: function() { return /* binding */ install_install; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/extension.js
var extension = __webpack_require__(70392);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(96585);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/radar/radarLayout.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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

function radarLayout(ecModel) {
  ecModel.eachSeriesByType('radar', function (seriesModel) {
    var data = seriesModel.getData();
    var points = [];
    var coordSys = seriesModel.coordinateSystem;
    if (!coordSys) {
      return;
    }
    var axes = coordSys.getIndicatorAxes();
    util.each(axes, function (axis, axisIndex) {
      data.each(data.mapDimension(axes[axisIndex].dim), function (val, dataIndex) {
        points[dataIndex] = points[dataIndex] || [];
        var point = coordSys.dataToPoint(val, axisIndex);
        points[dataIndex][axisIndex] = isValidPoint(point) ? point : getValueMissingPoint(coordSys);
      });
    });
    // Close polygon
    data.each(function (idx) {
      // TODO
      // Is it appropriate to connect to the next data when some data is missing?
      // Or, should trade it like `connectNull` in line chart?
      var firstPoint = util.find(points[idx], function (point) {
        return isValidPoint(point);
      }) || getValueMissingPoint(coordSys);
      // Copy the first actual point to the end of the array
      points[idx].push(firstPoint.slice());
      data.setItemLayout(idx, points[idx]);
    });
  });
}
function isValidPoint(point) {
  return !isNaN(point[0]) && !isNaN(point[1]);
}
function getValueMissingPoint(coordSys) {
  // It is error-prone to input [NaN, NaN] into polygon, polygon.
  // (probably cause problem when refreshing or animating)
  return [coordSys.cx, coordSys.cy];
}
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/processor/dataFilter.js
var dataFilter = __webpack_require__(47400);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/radar/backwardCompat.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
// @ts-nocheck
// Backward compat for radar chart in 2

function radarBackwardCompat(option) {
  var polarOptArr = option.polar;
  if (polarOptArr) {
    if (!util.isArray(polarOptArr)) {
      polarOptArr = [polarOptArr];
    }
    var polarNotRadar_1 = [];
    util.each(polarOptArr, function (polarOpt, idx) {
      if (polarOpt.indicator) {
        if (polarOpt.type && !polarOpt.shape) {
          polarOpt.shape = polarOpt.type;
        }
        option.radar = option.radar || [];
        if (!util.isArray(option.radar)) {
          option.radar = [option.radar];
        }
        option.radar.push(polarOpt);
      } else {
        polarNotRadar_1.push(polarOpt);
      }
    });
    option.polar = polarNotRadar_1;
  }
  util.each(option.series, function (seriesOpt) {
    if (seriesOpt && seriesOpt.type === 'radar' && seriesOpt.polarIndex) {
      seriesOpt.radarIndex = seriesOpt.polarIndex;
    }
  });
}
// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(12012);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/graphic.js
var graphic = __webpack_require__(16636);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/Polygon.js
var Polygon = __webpack_require__(71272);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/Polyline.js
var Polyline = __webpack_require__(56490);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/animation/basicTransition.js
var basicTransition = __webpack_require__(17524);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Group.js
var Group = __webpack_require__(58695);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/states.js
var states = __webpack_require__(63344);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/symbol.js
var symbol = __webpack_require__(44421);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/view/Chart.js
var Chart = __webpack_require__(47389);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/label/labelStyle.js
var labelStyle = __webpack_require__(77704);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Image.js
var Image = __webpack_require__(31386);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/radar/RadarView.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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









var RadarView_RadarView = /** @class */function (_super) {
  (0,tslib_es6.__extends)(RadarView, _super);
  function RadarView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = RadarView.type;
    return _this;
  }
  RadarView.prototype.render = function (seriesModel, ecModel, api) {
    var polar = seriesModel.coordinateSystem;
    var group = this.group;
    var data = seriesModel.getData();
    var oldData = this._data;
    function createSymbol(data, idx) {
      var symbolType = data.getItemVisual(idx, 'symbol') || 'circle';
      if (symbolType === 'none') {
        return;
      }
      var symbolSize = symbol.normalizeSymbolSize(data.getItemVisual(idx, 'symbolSize'));
      var symbolPath = symbol.createSymbol(symbolType, -1, -1, 2, 2);
      var symbolRotate = data.getItemVisual(idx, 'symbolRotate') || 0;
      symbolPath.attr({
        style: {
          strokeNoScale: true
        },
        z2: 100,
        scaleX: symbolSize[0] / 2,
        scaleY: symbolSize[1] / 2,
        rotation: symbolRotate * Math.PI / 180 || 0
      });
      return symbolPath;
    }
    function updateSymbols(oldPoints, newPoints, symbolGroup, data, idx, isInit) {
      // Simply rerender all
      symbolGroup.removeAll();
      for (var i = 0; i < newPoints.length - 1; i++) {
        var symbolPath = createSymbol(data, idx);
        if (symbolPath) {
          symbolPath.__dimIdx = i;
          if (oldPoints[i]) {
            symbolPath.setPosition(oldPoints[i]);
            graphic[isInit ? 'initProps' : 'updateProps'](symbolPath, {
              x: newPoints[i][0],
              y: newPoints[i][1]
            }, seriesModel, idx);
          } else {
            symbolPath.setPosition(newPoints[i]);
          }
          symbolGroup.add(symbolPath);
        }
      }
    }
    function getInitialPoints(points) {
      return util.map(points, function (pt) {
        return [polar.cx, polar.cy];
      });
    }
    data.diff(oldData).add(function (idx) {
      var points = data.getItemLayout(idx);
      if (!points) {
        return;
      }
      var polygon = new Polygon["default"]();
      var polyline = new Polyline["default"]();
      var target = {
        shape: {
          points: points
        }
      };
      polygon.shape.points = getInitialPoints(points);
      polyline.shape.points = getInitialPoints(points);
      basicTransition.initProps(polygon, target, seriesModel, idx);
      basicTransition.initProps(polyline, target, seriesModel, idx);
      var itemGroup = new Group["default"]();
      var symbolGroup = new Group["default"]();
      itemGroup.add(polyline);
      itemGroup.add(polygon);
      itemGroup.add(symbolGroup);
      updateSymbols(polyline.shape.points, points, symbolGroup, data, idx, true);
      data.setItemGraphicEl(idx, itemGroup);
    }).update(function (newIdx, oldIdx) {
      var itemGroup = oldData.getItemGraphicEl(oldIdx);
      var polyline = itemGroup.childAt(0);
      var polygon = itemGroup.childAt(1);
      var symbolGroup = itemGroup.childAt(2);
      var target = {
        shape: {
          points: data.getItemLayout(newIdx)
        }
      };
      if (!target.shape.points) {
        return;
      }
      updateSymbols(polyline.shape.points, target.shape.points, symbolGroup, data, newIdx, false);
      (0,basicTransition.saveOldStyle)(polygon);
      (0,basicTransition.saveOldStyle)(polyline);
      basicTransition.updateProps(polyline, target, seriesModel);
      basicTransition.updateProps(polygon, target, seriesModel);
      data.setItemGraphicEl(newIdx, itemGroup);
    }).remove(function (idx) {
      group.remove(oldData.getItemGraphicEl(idx));
    }).execute();
    data.eachItemGraphicEl(function (itemGroup, idx) {
      var itemModel = data.getItemModel(idx);
      var polyline = itemGroup.childAt(0);
      var polygon = itemGroup.childAt(1);
      var symbolGroup = itemGroup.childAt(2);
      // Radar uses the visual encoded from itemStyle.
      var itemStyle = data.getItemVisual(idx, 'style');
      var color = itemStyle.fill;
      group.add(itemGroup);
      polyline.useStyle(util.defaults(itemModel.getModel('lineStyle').getLineStyle(), {
        fill: 'none',
        stroke: color
      }));
      (0,states.setStatesStylesFromModel)(polyline, itemModel, 'lineStyle');
      (0,states.setStatesStylesFromModel)(polygon, itemModel, 'areaStyle');
      var areaStyleModel = itemModel.getModel('areaStyle');
      var polygonIgnore = areaStyleModel.isEmpty() && areaStyleModel.parentModel.isEmpty();
      polygon.ignore = polygonIgnore;
      util.each(['emphasis', 'select', 'blur'], function (stateName) {
        var stateModel = itemModel.getModel([stateName, 'areaStyle']);
        var stateIgnore = stateModel.isEmpty() && stateModel.parentModel.isEmpty();
        // Won't be ignore if normal state is not ignore.
        polygon.ensureState(stateName).ignore = stateIgnore && polygonIgnore;
      });
      polygon.useStyle(util.defaults(areaStyleModel.getAreaStyle(), {
        fill: color,
        opacity: 0.7,
        decal: itemStyle.decal
      }));
      var emphasisModel = itemModel.getModel('emphasis');
      var itemHoverStyle = emphasisModel.getModel('itemStyle').getItemStyle();
      symbolGroup.eachChild(function (symbolPath) {
        if (symbolPath instanceof Image["default"]) {
          var pathStyle = symbolPath.style;
          symbolPath.useStyle(util.extend({
            // TODO other properties like x, y ?
            image: pathStyle.image,
            x: pathStyle.x,
            y: pathStyle.y,
            width: pathStyle.width,
            height: pathStyle.height
          }, itemStyle));
        } else {
          symbolPath.useStyle(itemStyle);
          symbolPath.setColor(color);
          symbolPath.style.strokeNoScale = true;
        }
        var pathEmphasisState = symbolPath.ensureState('emphasis');
        pathEmphasisState.style = util.clone(itemHoverStyle);
        var defaultText = data.getStore().get(data.getDimensionIndex(symbolPath.__dimIdx), idx);
        (defaultText == null || isNaN(defaultText)) && (defaultText = '');
        (0,labelStyle.setLabelStyle)(symbolPath, (0,labelStyle.getLabelStatesModels)(itemModel), {
          labelFetcher: data.hostModel,
          labelDataIndex: idx,
          labelDimIndex: symbolPath.__dimIdx,
          defaultText: defaultText,
          inheritColor: color,
          defaultOpacity: itemStyle.opacity
        });
      });
      (0,states.toggleHoverEmphasis)(itemGroup, emphasisModel.get('focus'), emphasisModel.get('blurScope'), emphasisModel.get('disabled'));
    });
    this._data = data;
  };
  RadarView.prototype.remove = function () {
    this.group.removeAll();
    this._data = null;
  };
  RadarView.type = 'radar';
  return RadarView;
}(Chart["default"]);
/* ESM default export */ var radar_RadarView = (RadarView_RadarView);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Series.js
var Series = __webpack_require__(48134);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/createSeriesDataSimply.js
var createSeriesDataSimply = __webpack_require__(86011);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/visual/LegendVisualProvider.js
var LegendVisualProvider = __webpack_require__(57275);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/tooltip/tooltipMarkup.js
var tooltipMarkup = __webpack_require__(13134);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/radar/RadarSeries.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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






var RadarSeries_RadarSeriesModel = /** @class */function (_super) {
  (0,tslib_es6.__extends)(RadarSeriesModel, _super);
  function RadarSeriesModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = RadarSeriesModel.type;
    _this.hasSymbolVisual = true;
    return _this;
  }
  // Overwrite
  RadarSeriesModel.prototype.init = function (option) {
    _super.prototype.init.apply(this, arguments);
    // Enable legend selection for each data item
    // Use a function instead of direct access because data reference may changed
    this.legendVisualProvider = new LegendVisualProvider["default"](util.bind(this.getData, this), util.bind(this.getRawData, this));
  };
  RadarSeriesModel.prototype.getInitialData = function (option, ecModel) {
    return (0,createSeriesDataSimply["default"])(this, {
      generateCoord: 'indicator_',
      generateCoordCount: Infinity
    });
  };
  RadarSeriesModel.prototype.formatTooltip = function (dataIndex, multipleSeries, dataType) {
    var data = this.getData();
    var coordSys = this.coordinateSystem;
    var indicatorAxes = coordSys.getIndicatorAxes();
    var name = this.getData().getName(dataIndex);
    var nameToDisplay = name === '' ? this.name : name;
    var markerColor = (0,tooltipMarkup.retrieveVisualColorForTooltipMarker)(this, dataIndex);
    return (0,tooltipMarkup.createTooltipMarkup)('section', {
      header: nameToDisplay,
      sortBlocks: true,
      blocks: util.map(indicatorAxes, function (axis) {
        var val = data.get(data.mapDimension(axis.dim), dataIndex);
        return (0,tooltipMarkup.createTooltipMarkup)('nameValue', {
          markerType: 'subItem',
          markerColor: markerColor,
          name: axis.name,
          value: val,
          sortParam: val
        });
      })
    });
  };
  RadarSeriesModel.prototype.getTooltipPosition = function (dataIndex) {
    if (dataIndex != null) {
      var data_1 = this.getData();
      var coordSys = this.coordinateSystem;
      var values = data_1.getValues(util.map(coordSys.dimensions, function (dim) {
        return data_1.mapDimension(dim);
      }), dataIndex);
      for (var i = 0, len = values.length; i < len; i++) {
        if (!isNaN(values[i])) {
          var indicatorAxes = coordSys.getIndicatorAxes();
          return coordSys.coordToPoint(indicatorAxes[i].dataToCoord(values[i]), i);
        }
      }
    }
  };
  RadarSeriesModel.type = 'series.radar';
  RadarSeriesModel.dependencies = ['radar'];
  RadarSeriesModel.defaultOption = {
    // zlevel: 0,
    z: 2,
    colorBy: 'data',
    coordinateSystem: 'radar',
    legendHoverLink: true,
    radarIndex: 0,
    lineStyle: {
      width: 2,
      type: 'solid',
      join: 'round'
    },
    label: {
      position: 'top'
    },
    // areaStyle: {
    // },
    // itemStyle: {}
    symbolSize: 8
    // symbolRotate: null
  };
  return RadarSeriesModel;
}(Series["default"]);
/* ESM default export */ var RadarSeries = (RadarSeries_RadarSeriesModel);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/radar/install.js + 1 modules
var install = __webpack_require__(58344);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/radar/install.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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







function install_install(registers) {
  (0,extension.use)(install.install);
  registers.registerChartView(radar_RadarView);
  registers.registerSeriesModel(RadarSeries);
  registers.registerLayout(radarLayout);
  registers.registerProcessor((0,dataFilter["default"])('radar'));
  registers.registerPreprocessor(radarBackwardCompat);
}

}),
24391: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  install: function() { return /* binding */ install; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(12012);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Path.js + 3 modules
var Path = __webpack_require__(49678);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/Rect.js + 1 modules
var Rect = __webpack_require__(40361);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/LinearGradient.js
var LinearGradient = __webpack_require__(71756);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/animation/basicTransition.js
var basicTransition = __webpack_require__(17524);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/states.js
var states = __webpack_require__(63344);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/view/Chart.js
var Chart = __webpack_require__(47389);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/label/labelStyle.js
var labelStyle = __webpack_require__(77704);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/innerStore.js
var innerStore = __webpack_require__(55413);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(96585);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/sankey/SankeyView.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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







var SankeyView_SankeyPathShape = /** @class */function () {
  function SankeyPathShape() {
    this.x1 = 0;
    this.y1 = 0;
    this.x2 = 0;
    this.y2 = 0;
    this.cpx1 = 0;
    this.cpy1 = 0;
    this.cpx2 = 0;
    this.cpy2 = 0;
    this.extent = 0;
  }
  return SankeyPathShape;
}();
var SankeyView_SankeyPath = /** @class */function (_super) {
  (0,tslib_es6.__extends)(SankeyPath, _super);
  function SankeyPath(opts) {
    return _super.call(this, opts) || this;
  }
  SankeyPath.prototype.getDefaultShape = function () {
    return new SankeyView_SankeyPathShape();
  };
  SankeyPath.prototype.buildPath = function (ctx, shape) {
    var extent = shape.extent;
    ctx.moveTo(shape.x1, shape.y1);
    ctx.bezierCurveTo(shape.cpx1, shape.cpy1, shape.cpx2, shape.cpy2, shape.x2, shape.y2);
    if (shape.orient === 'vertical') {
      ctx.lineTo(shape.x2 + extent, shape.y2);
      ctx.bezierCurveTo(shape.cpx2 + extent, shape.cpy2, shape.cpx1 + extent, shape.cpy1, shape.x1 + extent, shape.y1);
    } else {
      ctx.lineTo(shape.x2, shape.y2 + extent);
      ctx.bezierCurveTo(shape.cpx2, shape.cpy2 + extent, shape.cpx1, shape.cpy1 + extent, shape.x1, shape.y1 + extent);
    }
    ctx.closePath();
  };
  SankeyPath.prototype.highlight = function () {
    (0,states.enterEmphasis)(this);
  };
  SankeyPath.prototype.downplay = function () {
    (0,states.leaveEmphasis)(this);
  };
  return SankeyPath;
}(Path["default"]);
var SankeyView_SankeyView = /** @class */function (_super) {
  (0,tslib_es6.__extends)(SankeyView, _super);
  function SankeyView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = SankeyView.type;
    _this._focusAdjacencyDisabled = false;
    return _this;
  }
  SankeyView.prototype.render = function (seriesModel, ecModel, api) {
    var sankeyView = this;
    var graph = seriesModel.getGraph();
    var group = this.group;
    var layoutInfo = seriesModel.layoutInfo;
    // view width
    var width = layoutInfo.width;
    // view height
    var height = layoutInfo.height;
    var nodeData = seriesModel.getData();
    var edgeData = seriesModel.getData('edge');
    var orient = seriesModel.get('orient');
    this._model = seriesModel;
    group.removeAll();
    group.x = layoutInfo.x;
    group.y = layoutInfo.y;
    // generate a bezire Curve for each edge
    graph.eachEdge(function (edge) {
      var curve = new SankeyView_SankeyPath();
      var ecData = (0,innerStore.getECData)(curve);
      ecData.dataIndex = edge.dataIndex;
      ecData.seriesIndex = seriesModel.seriesIndex;
      ecData.dataType = 'edge';
      var edgeModel = edge.getModel();
      var lineStyleModel = edgeModel.getModel('lineStyle');
      var curvature = lineStyleModel.get('curveness');
      var n1Layout = edge.node1.getLayout();
      var node1Model = edge.node1.getModel();
      var dragX1 = node1Model.get('localX');
      var dragY1 = node1Model.get('localY');
      var n2Layout = edge.node2.getLayout();
      var node2Model = edge.node2.getModel();
      var dragX2 = node2Model.get('localX');
      var dragY2 = node2Model.get('localY');
      var edgeLayout = edge.getLayout();
      var x1;
      var y1;
      var x2;
      var y2;
      var cpx1;
      var cpy1;
      var cpx2;
      var cpy2;
      curve.shape.extent = Math.max(1, edgeLayout.dy);
      curve.shape.orient = orient;
      if (orient === 'vertical') {
        x1 = (dragX1 != null ? dragX1 * width : n1Layout.x) + edgeLayout.sy;
        y1 = (dragY1 != null ? dragY1 * height : n1Layout.y) + n1Layout.dy;
        x2 = (dragX2 != null ? dragX2 * width : n2Layout.x) + edgeLayout.ty;
        y2 = dragY2 != null ? dragY2 * height : n2Layout.y;
        cpx1 = x1;
        cpy1 = y1 * (1 - curvature) + y2 * curvature;
        cpx2 = x2;
        cpy2 = y1 * curvature + y2 * (1 - curvature);
      } else {
        x1 = (dragX1 != null ? dragX1 * width : n1Layout.x) + n1Layout.dx;
        y1 = (dragY1 != null ? dragY1 * height : n1Layout.y) + edgeLayout.sy;
        x2 = dragX2 != null ? dragX2 * width : n2Layout.x;
        y2 = (dragY2 != null ? dragY2 * height : n2Layout.y) + edgeLayout.ty;
        cpx1 = x1 * (1 - curvature) + x2 * curvature;
        cpy1 = y1;
        cpx2 = x1 * curvature + x2 * (1 - curvature);
        cpy2 = y2;
      }
      curve.setShape({
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2,
        cpx1: cpx1,
        cpy1: cpy1,
        cpx2: cpx2,
        cpy2: cpy2
      });
      curve.useStyle(lineStyleModel.getItemStyle());
      // Special color, use source node color or target node color
      applyCurveStyle(curve.style, orient, edge);
      var defaultEdgeLabelText = "" + edgeModel.get('value');
      var edgeLabelStateModels = (0,labelStyle.getLabelStatesModels)(edgeModel, 'edgeLabel');
      (0,labelStyle.setLabelStyle)(curve, edgeLabelStateModels, {
        labelFetcher: {
          getFormattedLabel: function (dataIndex, stateName, dataType, labelDimIndex, formatter, extendParams) {
            return seriesModel.getFormattedLabel(dataIndex, stateName, 'edge', labelDimIndex,
            // ensure edgeLabel formatter is provided
            // to prevent the inheritance from `label.formatter` of the series
            (0,util.retrieve3)(formatter, edgeLabelStateModels.normal && edgeLabelStateModels.normal.get('formatter'), defaultEdgeLabelText), extendParams);
          }
        },
        labelDataIndex: edge.dataIndex,
        defaultText: defaultEdgeLabelText
      });
      curve.setTextConfig({
        position: 'inside'
      });
      var emphasisModel = edgeModel.getModel('emphasis');
      (0,states.setStatesStylesFromModel)(curve, edgeModel, 'lineStyle', function (model) {
        var style = model.getItemStyle();
        applyCurveStyle(style, orient, edge);
        return style;
      });
      group.add(curve);
      edgeData.setItemGraphicEl(edge.dataIndex, curve);
      var focus = emphasisModel.get('focus');
      (0,states.toggleHoverEmphasis)(curve, focus === 'adjacency' ? edge.getAdjacentDataIndices() : focus === 'trajectory' ? edge.getTrajectoryDataIndices() : focus, emphasisModel.get('blurScope'), emphasisModel.get('disabled'));
    });
    // Generate a rect for each node
    graph.eachNode(function (node) {
      var layout = node.getLayout();
      var itemModel = node.getModel();
      var dragX = itemModel.get('localX');
      var dragY = itemModel.get('localY');
      var emphasisModel = itemModel.getModel('emphasis');
      var borderRadius = itemModel.get(['itemStyle', 'borderRadius']) || 0;
      var rect = new Rect["default"]({
        shape: {
          x: dragX != null ? dragX * width : layout.x,
          y: dragY != null ? dragY * height : layout.y,
          width: layout.dx,
          height: layout.dy,
          r: borderRadius
        },
        style: itemModel.getModel('itemStyle').getItemStyle(),
        z2: 10
      });
      (0,labelStyle.setLabelStyle)(rect, (0,labelStyle.getLabelStatesModels)(itemModel), {
        labelFetcher: {
          getFormattedLabel: function (dataIndex, stateName) {
            return seriesModel.getFormattedLabel(dataIndex, stateName, 'node');
          }
        },
        labelDataIndex: node.dataIndex,
        defaultText: node.id
      });
      rect.disableLabelAnimation = true;
      rect.setStyle('fill', node.getVisual('color'));
      rect.setStyle('decal', node.getVisual('style').decal);
      (0,states.setStatesStylesFromModel)(rect, itemModel);
      group.add(rect);
      nodeData.setItemGraphicEl(node.dataIndex, rect);
      (0,innerStore.getECData)(rect).dataType = 'node';
      var focus = emphasisModel.get('focus');
      (0,states.toggleHoverEmphasis)(rect, focus === 'adjacency' ? node.getAdjacentDataIndices() : focus === 'trajectory' ? node.getTrajectoryDataIndices() : focus, emphasisModel.get('blurScope'), emphasisModel.get('disabled'));
    });
    nodeData.eachItemGraphicEl(function (el, dataIndex) {
      var itemModel = nodeData.getItemModel(dataIndex);
      if (itemModel.get('draggable')) {
        el.drift = function (dx, dy) {
          sankeyView._focusAdjacencyDisabled = true;
          this.shape.x += dx;
          this.shape.y += dy;
          this.dirty();
          api.dispatchAction({
            type: 'dragNode',
            seriesId: seriesModel.id,
            dataIndex: nodeData.getRawIndex(dataIndex),
            localX: this.shape.x / width,
            localY: this.shape.y / height
          });
        };
        el.ondragend = function () {
          sankeyView._focusAdjacencyDisabled = false;
        };
        el.draggable = true;
        el.cursor = 'move';
      }
    });
    if (!this._data && seriesModel.isAnimationEnabled()) {
      group.setClipPath(createGridClipShape(group.getBoundingRect(), seriesModel, function () {
        group.removeClipPath();
      }));
    }
    this._data = seriesModel.getData();
  };
  SankeyView.prototype.dispose = function () {};
  SankeyView.type = 'sankey';
  return SankeyView;
}(Chart["default"]);
/**
 * Special color, use source node color or target node color
 * @param curveProps curve's style to parse
 * @param orient direction
 * @param edge current curve data
 */
function applyCurveStyle(curveProps, orient, edge) {
  switch (curveProps.fill) {
    case 'source':
      curveProps.fill = edge.node1.getVisual('color');
      curveProps.decal = edge.node1.getVisual('style').decal;
      break;
    case 'target':
      curveProps.fill = edge.node2.getVisual('color');
      curveProps.decal = edge.node2.getVisual('style').decal;
      break;
    case 'gradient':
      var sourceColor = edge.node1.getVisual('color');
      var targetColor = edge.node2.getVisual('color');
      if ((0,util.isString)(sourceColor) && (0,util.isString)(targetColor)) {
        curveProps.fill = new LinearGradient["default"](0, 0, +(orient === 'horizontal'), +(orient === 'vertical'), [{
          color: sourceColor,
          offset: 0
        }, {
          color: targetColor,
          offset: 1
        }]);
      }
  }
}
// Add animation to the view
function createGridClipShape(rect, seriesModel, cb) {
  var rectEl = new Rect["default"]({
    shape: {
      x: rect.x - 10,
      y: rect.y - 10,
      width: 0,
      height: rect.height + 20
    }
  });
  basicTransition.initProps(rectEl, {
    shape: {
      width: rect.width + 20
    }
  }, seriesModel, cb);
  return rectEl;
}
/* ESM default export */ var sankey_SankeyView = (SankeyView_SankeyView);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Series.js
var Series = __webpack_require__(48134);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/createGraphFromNodeEdge.js
var createGraphFromNodeEdge = __webpack_require__(23530);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Model.js + 2 modules
var Model = __webpack_require__(84456);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/tooltip/tooltipMarkup.js
var tooltipMarkup = __webpack_require__(13134);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/sankey/SankeySeries.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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





var SankeySeries_SankeySeriesModel = /** @class */function (_super) {
  (0,tslib_es6.__extends)(SankeySeriesModel, _super);
  function SankeySeriesModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = SankeySeriesModel.type;
    return _this;
  }
  /**
   * Init a graph data structure from data in option series
   */
  SankeySeriesModel.prototype.getInitialData = function (option, ecModel) {
    var links = option.edges || option.links || [];
    var nodes = option.data || option.nodes || [];
    var levels = option.levels || [];
    this.levelModels = [];
    var levelModels = this.levelModels;
    for (var i = 0; i < levels.length; i++) {
      if (levels[i].depth != null && levels[i].depth >= 0) {
        levelModels[levels[i].depth] = new Model["default"](levels[i], this, ecModel);
      } else {
        if (false) {}
      }
    }
    var graph = (0,createGraphFromNodeEdge["default"])(nodes, links, this, true, beforeLink);
    return graph.data;
    function beforeLink(nodeData, edgeData) {
      nodeData.wrapMethod('getItemModel', function (model, idx) {
        var seriesModel = model.parentModel;
        var layout = seriesModel.getData().getItemLayout(idx);
        if (layout) {
          var nodeDepth = layout.depth;
          var levelModel = seriesModel.levelModels[nodeDepth];
          if (levelModel) {
            model.parentModel = levelModel;
          }
        }
        return model;
      });
      edgeData.wrapMethod('getItemModel', function (model, idx) {
        var seriesModel = model.parentModel;
        var edge = seriesModel.getGraph().getEdgeByIndex(idx);
        var layout = edge.node1.getLayout();
        if (layout) {
          var depth = layout.depth;
          var levelModel = seriesModel.levelModels[depth];
          if (levelModel) {
            model.parentModel = levelModel;
          }
        }
        return model;
      });
    }
  };
  SankeySeriesModel.prototype.setNodePosition = function (dataIndex, localPosition) {
    var nodes = this.option.data || this.option.nodes;
    var dataItem = nodes[dataIndex];
    dataItem.localX = localPosition[0];
    dataItem.localY = localPosition[1];
  };
  /**
   * Return the graphic data structure
   *
   * @return graphic data structure
   */
  SankeySeriesModel.prototype.getGraph = function () {
    return this.getData().graph;
  };
  /**
   * Get edge data of graphic data structure
   *
   * @return data structure of list
   */
  SankeySeriesModel.prototype.getEdgeData = function () {
    return this.getGraph().edgeData;
  };
  SankeySeriesModel.prototype.formatTooltip = function (dataIndex, multipleSeries, dataType) {
    function noValue(val) {
      return isNaN(val) || val == null;
    }
    // dataType === 'node' or empty do not show tooltip by default
    if (dataType === 'edge') {
      var params = this.getDataParams(dataIndex, dataType);
      var rawDataOpt = params.data;
      var edgeValue = params.value;
      var edgeName = rawDataOpt.source + ' -- ' + rawDataOpt.target;
      return (0,tooltipMarkup.createTooltipMarkup)('nameValue', {
        name: edgeName,
        value: edgeValue,
        noValue: noValue(edgeValue)
      });
    }
    // dataType === 'node'
    else {
      var node = this.getGraph().getNodeByIndex(dataIndex);
      var value = node.getLayout().value;
      var name_1 = this.getDataParams(dataIndex, dataType).data.name;
      return (0,tooltipMarkup.createTooltipMarkup)('nameValue', {
        name: name_1 != null ? name_1 + '' : null,
        value: value,
        noValue: noValue(value)
      });
    }
  };
  SankeySeriesModel.prototype.optionUpdated = function () {};
  // Override Series.getDataParams()
  SankeySeriesModel.prototype.getDataParams = function (dataIndex, dataType) {
    var params = _super.prototype.getDataParams.call(this, dataIndex, dataType);
    if (params.value == null && dataType === 'node') {
      var node = this.getGraph().getNodeByIndex(dataIndex);
      var nodeValue = node.getLayout().value;
      params.value = nodeValue;
    }
    return params;
  };
  SankeySeriesModel.type = 'series.sankey';
  SankeySeriesModel.defaultOption = {
    // zlevel: 0,
    z: 2,
    coordinateSystem: 'view',
    left: '5%',
    top: '5%',
    right: '20%',
    bottom: '5%',
    orient: 'horizontal',
    nodeWidth: 20,
    nodeGap: 8,
    draggable: true,
    layoutIterations: 32,
    label: {
      show: true,
      position: 'right',
      fontSize: 12
    },
    edgeLabel: {
      show: false,
      fontSize: 12
    },
    levels: [],
    nodeAlign: 'justify',
    lineStyle: {
      color: '#314656',
      opacity: 0.2,
      curveness: 0.5
    },
    emphasis: {
      label: {
        show: true
      },
      lineStyle: {
        opacity: 0.5
      }
    },
    select: {
      itemStyle: {
        borderColor: '#212121'
      }
    },
    animationEasing: 'linear',
    animationDuration: 1000
  };
  return SankeySeriesModel;
}(Series["default"]);
/* ESM default export */ var SankeySeries = (SankeySeries_SankeySeriesModel);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/layout.js
var util_layout = __webpack_require__(37624);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/model.js
var util_model = __webpack_require__(46451);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/sankey/sankeyLayout.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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



function sankeyLayout(ecModel, api) {
  ecModel.eachSeriesByType('sankey', function (seriesModel) {
    var nodeWidth = seriesModel.get('nodeWidth');
    var nodeGap = seriesModel.get('nodeGap');
    var layoutInfo = getViewRect(seriesModel, api);
    seriesModel.layoutInfo = layoutInfo;
    var width = layoutInfo.width;
    var height = layoutInfo.height;
    var graph = seriesModel.getGraph();
    var nodes = graph.nodes;
    var edges = graph.edges;
    computeNodeValues(nodes);
    var filteredNodes = util.filter(nodes, function (node) {
      return node.getLayout().value === 0;
    });
    var iterations = filteredNodes.length !== 0 ? 0 : seriesModel.get('layoutIterations');
    var orient = seriesModel.get('orient');
    var nodeAlign = seriesModel.get('nodeAlign');
    layoutSankey(nodes, edges, nodeWidth, nodeGap, width, height, iterations, orient, nodeAlign);
  });
}
/**
 * Get the layout position of the whole view
 */
function getViewRect(seriesModel, api) {
  return util_layout.getLayoutRect(seriesModel.getBoxLayoutParams(), {
    width: api.getWidth(),
    height: api.getHeight()
  });
}
function layoutSankey(nodes, edges, nodeWidth, nodeGap, width, height, iterations, orient, nodeAlign) {
  computeNodeBreadths(nodes, edges, nodeWidth, width, height, orient, nodeAlign);
  computeNodeDepths(nodes, edges, height, width, nodeGap, iterations, orient);
  computeEdgeDepths(nodes, orient);
}
/**
 * Compute the value of each node by summing the associated edge's value
 */
function computeNodeValues(nodes) {
  util.each(nodes, function (node) {
    var value1 = sankeyLayout_sum(node.outEdges, getEdgeValue);
    var value2 = sankeyLayout_sum(node.inEdges, getEdgeValue);
    var nodeRawValue = node.getValue() || 0;
    var value = Math.max(value1, value2, nodeRawValue);
    node.setLayout({
      value: value
    }, true);
  });
}
/**
 * Compute the x-position for each node.
 *
 * Here we use Kahn algorithm to detect cycle when we traverse
 * the node to computer the initial x position.
 */
function computeNodeBreadths(nodes, edges, nodeWidth, width, height, orient, nodeAlign) {
  // Used to mark whether the edge is deleted. if it is deleted,
  // the value is 0, otherwise it is 1.
  var remainEdges = [];
  // Storage each node's indegree.
  var indegreeArr = [];
  // Used to storage the node with indegree is equal to 0.
  var zeroIndegrees = [];
  var nextTargetNode = [];
  var x = 0;
  // let kx = 0;
  for (var i = 0; i < edges.length; i++) {
    remainEdges[i] = 1;
  }
  for (var i = 0; i < nodes.length; i++) {
    indegreeArr[i] = nodes[i].inEdges.length;
    if (indegreeArr[i] === 0) {
      zeroIndegrees.push(nodes[i]);
    }
  }
  var maxNodeDepth = -1;
  // Traversing nodes using topological sorting to calculate the
  // horizontal(if orient === 'horizontal') or vertical(if orient === 'vertical')
  // position of the nodes.
  while (zeroIndegrees.length) {
    for (var idx = 0; idx < zeroIndegrees.length; idx++) {
      var node = zeroIndegrees[idx];
      var item = node.hostGraph.data.getRawDataItem(node.dataIndex);
      var isItemDepth = item.depth != null && item.depth >= 0;
      if (isItemDepth && item.depth > maxNodeDepth) {
        maxNodeDepth = item.depth;
      }
      node.setLayout({
        depth: isItemDepth ? item.depth : x
      }, true);
      orient === 'vertical' ? node.setLayout({
        dy: nodeWidth
      }, true) : node.setLayout({
        dx: nodeWidth
      }, true);
      for (var edgeIdx = 0; edgeIdx < node.outEdges.length; edgeIdx++) {
        var edge = node.outEdges[edgeIdx];
        var indexEdge = edges.indexOf(edge);
        remainEdges[indexEdge] = 0;
        var targetNode = edge.node2;
        var nodeIndex = nodes.indexOf(targetNode);
        if (--indegreeArr[nodeIndex] === 0 && nextTargetNode.indexOf(targetNode) < 0) {
          nextTargetNode.push(targetNode);
        }
      }
    }
    ++x;
    zeroIndegrees = nextTargetNode;
    nextTargetNode = [];
  }
  for (var i = 0; i < remainEdges.length; i++) {
    if (remainEdges[i] === 1) {
      throw new Error('Sankey is a DAG, the original data has cycle!');
    }
  }
  var maxDepth = maxNodeDepth > x - 1 ? maxNodeDepth : x - 1;
  if (nodeAlign && nodeAlign !== 'left') {
    adjustNodeWithNodeAlign(nodes, nodeAlign, orient, maxDepth);
  }
  var kx = orient === 'vertical' ? (height - nodeWidth) / maxDepth : (width - nodeWidth) / maxDepth;
  scaleNodeBreadths(nodes, kx, orient);
}
function isNodeDepth(node) {
  var item = node.hostGraph.data.getRawDataItem(node.dataIndex);
  return item.depth != null && item.depth >= 0;
}
function adjustNodeWithNodeAlign(nodes, nodeAlign, orient, maxDepth) {
  if (nodeAlign === 'right') {
    var nextSourceNode = [];
    var remainNodes = nodes;
    var nodeHeight = 0;
    while (remainNodes.length) {
      for (var i = 0; i < remainNodes.length; i++) {
        var node = remainNodes[i];
        node.setLayout({
          skNodeHeight: nodeHeight
        }, true);
        for (var j = 0; j < node.inEdges.length; j++) {
          var edge = node.inEdges[j];
          if (nextSourceNode.indexOf(edge.node1) < 0) {
            nextSourceNode.push(edge.node1);
          }
        }
      }
      remainNodes = nextSourceNode;
      nextSourceNode = [];
      ++nodeHeight;
    }
    util.each(nodes, function (node) {
      if (!isNodeDepth(node)) {
        node.setLayout({
          depth: Math.max(0, maxDepth - node.getLayout().skNodeHeight)
        }, true);
      }
    });
  } else if (nodeAlign === 'justify') {
    moveSinksRight(nodes, maxDepth);
  }
}
/**
 * All the node without outEgdes are assigned maximum x-position and
 *     be aligned in the last column.
 *
 * @param nodes.  node of sankey view.
 * @param maxDepth.  use to assign to node without outEdges as x-position.
 */
function moveSinksRight(nodes, maxDepth) {
  util.each(nodes, function (node) {
    if (!isNodeDepth(node) && !node.outEdges.length) {
      node.setLayout({
        depth: maxDepth
      }, true);
    }
  });
}
/**
 * Scale node x-position to the width
 *
 * @param nodes  node of sankey view
 * @param kx   multiple used to scale nodes
 */
function scaleNodeBreadths(nodes, kx, orient) {
  util.each(nodes, function (node) {
    var nodeDepth = node.getLayout().depth * kx;
    orient === 'vertical' ? node.setLayout({
      y: nodeDepth
    }, true) : node.setLayout({
      x: nodeDepth
    }, true);
  });
}
/**
 * Using Gauss-Seidel iterations method to compute the node depth(y-position)
 *
 * @param nodes  node of sankey view
 * @param edges  edge of sankey view
 * @param height  the whole height of the area to draw the view
 * @param nodeGap  the vertical distance between two nodes
 *     in the same column.
 * @param iterations  the number of iterations for the algorithm
 */
function computeNodeDepths(nodes, edges, height, width, nodeGap, iterations, orient) {
  var nodesByBreadth = prepareNodesByBreadth(nodes, orient);
  initializeNodeDepth(nodesByBreadth, edges, height, width, nodeGap, orient);
  resolveCollisions(nodesByBreadth, nodeGap, height, width, orient);
  for (var alpha = 1; iterations > 0; iterations--) {
    // 0.99 is a experience parameter, ensure that each iterations of
    // changes as small as possible.
    alpha *= 0.99;
    relaxRightToLeft(nodesByBreadth, alpha, orient);
    resolveCollisions(nodesByBreadth, nodeGap, height, width, orient);
    relaxLeftToRight(nodesByBreadth, alpha, orient);
    resolveCollisions(nodesByBreadth, nodeGap, height, width, orient);
  }
}
function prepareNodesByBreadth(nodes, orient) {
  var nodesByBreadth = [];
  var keyAttr = orient === 'vertical' ? 'y' : 'x';
  var groupResult = (0,util_model.groupData)(nodes, function (node) {
    return node.getLayout()[keyAttr];
  });
  groupResult.keys.sort(function (a, b) {
    return a - b;
  });
  util.each(groupResult.keys, function (key) {
    nodesByBreadth.push(groupResult.buckets.get(key));
  });
  return nodesByBreadth;
}
/**
 * Compute the original y-position for each node
 */
function initializeNodeDepth(nodesByBreadth, edges, height, width, nodeGap, orient) {
  var minKy = Infinity;
  util.each(nodesByBreadth, function (nodes) {
    var n = nodes.length;
    var sum = 0;
    util.each(nodes, function (node) {
      sum += node.getLayout().value;
    });
    var ky = orient === 'vertical' ? (width - (n - 1) * nodeGap) / sum : (height - (n - 1) * nodeGap) / sum;
    if (ky < minKy) {
      minKy = ky;
    }
  });
  util.each(nodesByBreadth, function (nodes) {
    util.each(nodes, function (node, i) {
      var nodeDy = node.getLayout().value * minKy;
      if (orient === 'vertical') {
        node.setLayout({
          x: i
        }, true);
        node.setLayout({
          dx: nodeDy
        }, true);
      } else {
        node.setLayout({
          y: i
        }, true);
        node.setLayout({
          dy: nodeDy
        }, true);
      }
    });
  });
  util.each(edges, function (edge) {
    var edgeDy = +edge.getValue() * minKy;
    edge.setLayout({
      dy: edgeDy
    }, true);
  });
}
/**
 * Resolve the collision of initialized depth (y-position)
 */
function resolveCollisions(nodesByBreadth, nodeGap, height, width, orient) {
  var keyAttr = orient === 'vertical' ? 'x' : 'y';
  util.each(nodesByBreadth, function (nodes) {
    nodes.sort(function (a, b) {
      return a.getLayout()[keyAttr] - b.getLayout()[keyAttr];
    });
    var nodeX;
    var node;
    var dy;
    var y0 = 0;
    var n = nodes.length;
    var nodeDyAttr = orient === 'vertical' ? 'dx' : 'dy';
    for (var i = 0; i < n; i++) {
      node = nodes[i];
      dy = y0 - node.getLayout()[keyAttr];
      if (dy > 0) {
        nodeX = node.getLayout()[keyAttr] + dy;
        orient === 'vertical' ? node.setLayout({
          x: nodeX
        }, true) : node.setLayout({
          y: nodeX
        }, true);
      }
      y0 = node.getLayout()[keyAttr] + node.getLayout()[nodeDyAttr] + nodeGap;
    }
    var viewWidth = orient === 'vertical' ? width : height;
    // If the bottommost node goes outside the bounds, push it back up
    dy = y0 - nodeGap - viewWidth;
    if (dy > 0) {
      nodeX = node.getLayout()[keyAttr] - dy;
      orient === 'vertical' ? node.setLayout({
        x: nodeX
      }, true) : node.setLayout({
        y: nodeX
      }, true);
      y0 = nodeX;
      for (var i = n - 2; i >= 0; --i) {
        node = nodes[i];
        dy = node.getLayout()[keyAttr] + node.getLayout()[nodeDyAttr] + nodeGap - y0;
        if (dy > 0) {
          nodeX = node.getLayout()[keyAttr] - dy;
          orient === 'vertical' ? node.setLayout({
            x: nodeX
          }, true) : node.setLayout({
            y: nodeX
          }, true);
        }
        y0 = node.getLayout()[keyAttr];
      }
    }
  });
}
/**
 * Change the y-position of the nodes, except most the right side nodes
 * @param nodesByBreadth
 * @param alpha  parameter used to adjust the nodes y-position
 */
function relaxRightToLeft(nodesByBreadth, alpha, orient) {
  util.each(nodesByBreadth.slice().reverse(), function (nodes) {
    util.each(nodes, function (node) {
      if (node.outEdges.length) {
        var y = sankeyLayout_sum(node.outEdges, weightedTarget, orient) / sankeyLayout_sum(node.outEdges, getEdgeValue);
        if (isNaN(y)) {
          var len = node.outEdges.length;
          y = len ? sankeyLayout_sum(node.outEdges, centerTarget, orient) / len : 0;
        }
        if (orient === 'vertical') {
          var nodeX = node.getLayout().x + (y - center(node, orient)) * alpha;
          node.setLayout({
            x: nodeX
          }, true);
        } else {
          var nodeY = node.getLayout().y + (y - center(node, orient)) * alpha;
          node.setLayout({
            y: nodeY
          }, true);
        }
      }
    });
  });
}
function weightedTarget(edge, orient) {
  return center(edge.node2, orient) * edge.getValue();
}
function centerTarget(edge, orient) {
  return center(edge.node2, orient);
}
function weightedSource(edge, orient) {
  return center(edge.node1, orient) * edge.getValue();
}
function centerSource(edge, orient) {
  return center(edge.node1, orient);
}
function center(node, orient) {
  return orient === 'vertical' ? node.getLayout().x + node.getLayout().dx / 2 : node.getLayout().y + node.getLayout().dy / 2;
}
function getEdgeValue(edge) {
  return edge.getValue();
}
function sankeyLayout_sum(array, cb, orient) {
  var sum = 0;
  var len = array.length;
  var i = -1;
  while (++i < len) {
    var value = +cb(array[i], orient);
    if (!isNaN(value)) {
      sum += value;
    }
  }
  return sum;
}
/**
 * Change the y-position of the nodes, except most the left side nodes
 */
function relaxLeftToRight(nodesByBreadth, alpha, orient) {
  util.each(nodesByBreadth, function (nodes) {
    util.each(nodes, function (node) {
      if (node.inEdges.length) {
        var y = sankeyLayout_sum(node.inEdges, weightedSource, orient) / sankeyLayout_sum(node.inEdges, getEdgeValue);
        if (isNaN(y)) {
          var len = node.inEdges.length;
          y = len ? sankeyLayout_sum(node.inEdges, centerSource, orient) / len : 0;
        }
        if (orient === 'vertical') {
          var nodeX = node.getLayout().x + (y - center(node, orient)) * alpha;
          node.setLayout({
            x: nodeX
          }, true);
        } else {
          var nodeY = node.getLayout().y + (y - center(node, orient)) * alpha;
          node.setLayout({
            y: nodeY
          }, true);
        }
      }
    });
  });
}
/**
 * Compute the depth(y-position) of each edge
 */
function computeEdgeDepths(nodes, orient) {
  var keyAttr = orient === 'vertical' ? 'x' : 'y';
  util.each(nodes, function (node) {
    node.outEdges.sort(function (a, b) {
      return a.node2.getLayout()[keyAttr] - b.node2.getLayout()[keyAttr];
    });
    node.inEdges.sort(function (a, b) {
      return a.node1.getLayout()[keyAttr] - b.node1.getLayout()[keyAttr];
    });
  });
  util.each(nodes, function (node) {
    var sy = 0;
    var ty = 0;
    util.each(node.outEdges, function (edge) {
      edge.setLayout({
        sy: sy
      }, true);
      sy += edge.getLayout().dy;
    });
    util.each(node.inEdges, function (edge) {
      edge.setLayout({
        ty: ty
      }, true);
      ty += edge.getLayout().dy;
    });
  });
}
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/visual/VisualMapping.js
var VisualMapping = __webpack_require__(507);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/sankey/sankeyVisual.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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


function sankeyVisual(ecModel) {
  ecModel.eachSeriesByType('sankey', function (seriesModel) {
    var graph = seriesModel.getGraph();
    var nodes = graph.nodes;
    var edges = graph.edges;
    if (nodes.length) {
      var minValue_1 = Infinity;
      var maxValue_1 = -Infinity;
      util.each(nodes, function (node) {
        var nodeValue = node.getLayout().value;
        if (nodeValue < minValue_1) {
          minValue_1 = nodeValue;
        }
        if (nodeValue > maxValue_1) {
          maxValue_1 = nodeValue;
        }
      });
      util.each(nodes, function (node) {
        var mapping = new VisualMapping["default"]({
          type: 'color',
          mappingMethod: 'linear',
          dataExtent: [minValue_1, maxValue_1],
          visual: seriesModel.get('color')
        });
        var mapValueToColor = mapping.mapValueToVisual(node.getLayout().value);
        var customColor = node.getModel().get(['itemStyle', 'color']);
        if (customColor != null) {
          node.setVisual('color', customColor);
          node.setVisual('style', {
            fill: customColor
          });
        } else {
          node.setVisual('color', mapValueToColor);
          node.setVisual('style', {
            fill: mapValueToColor
          });
        }
      });
    }
    if (edges.length) {
      util.each(edges, function (edge) {
        var edgeStyle = edge.getModel().get('lineStyle');
        edge.setVisual('style', edgeStyle);
      });
    }
  });
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/sankey/install.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  registers.registerChartView(sankey_SankeyView);
  registers.registerSeriesModel(SankeySeries);
  registers.registerLayout(sankeyLayout);
  registers.registerVisual(sankeyVisual);
  registers.registerAction({
    type: 'dragNode',
    event: 'dragnode',
    // here can only use 'update' now, other value is not support in echarts.
    update: 'update'
  }, function (payload, ecModel) {
    ecModel.eachComponent({
      mainType: 'series',
      subType: 'sankey',
      query: payload
    }, function (seriesModel) {
      seriesModel.setNodePosition(payload.dataIndex, [payload.localX, payload.localY]);
    });
  });
}

}),
31992: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  install: function() { return /* binding */ install; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/extension.js
var extension = __webpack_require__(70392);
// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(12012);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/createSeriesData.js
var createSeriesData = __webpack_require__(91956);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Series.js
var Series = __webpack_require__(48134);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/scatter/ScatterSeries.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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



var ScatterSeries_ScatterSeriesModel = /** @class */function (_super) {
  (0,tslib_es6.__extends)(ScatterSeriesModel, _super);
  function ScatterSeriesModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = ScatterSeriesModel.type;
    _this.hasSymbolVisual = true;
    return _this;
  }
  ScatterSeriesModel.prototype.getInitialData = function (option, ecModel) {
    return (0,createSeriesData["default"])(null, this, {
      useEncodeDefaulter: true
    });
  };
  ScatterSeriesModel.prototype.getProgressive = function () {
    var progressive = this.option.progressive;
    if (progressive == null) {
      // PENDING
      return this.option.large ? 5e3 : this.get('progressive');
    }
    return progressive;
  };
  ScatterSeriesModel.prototype.getProgressiveThreshold = function () {
    var progressiveThreshold = this.option.progressiveThreshold;
    if (progressiveThreshold == null) {
      // PENDING
      return this.option.large ? 1e4 : this.get('progressiveThreshold');
    }
    return progressiveThreshold;
  };
  ScatterSeriesModel.prototype.brushSelector = function (dataIndex, data, selectors) {
    return selectors.point(data.getItemLayout(dataIndex));
  };
  ScatterSeriesModel.prototype.getZLevelKey = function () {
    // Each progressive series has individual key.
    return this.getData().count() > this.getProgressiveThreshold() ? this.id : '';
  };
  ScatterSeriesModel.type = 'series.scatter';
  ScatterSeriesModel.dependencies = ['grid', 'polar', 'geo', 'singleAxis', 'calendar'];
  ScatterSeriesModel.defaultOption = {
    coordinateSystem: 'cartesian2d',
    // zlevel: 0,
    z: 2,
    legendHoverLink: true,
    symbolSize: 10,
    // symbolRotate: null,  // 图形旋转控制
    large: false,
    // Available when large is true
    largeThreshold: 2000,
    // cursor: null,
    itemStyle: {
      opacity: 0.8
      // color: 各异
    },
    emphasis: {
      scale: true
    },
    // If clip the overflow graphics
    // Works on cartesian / polar series
    clip: true,
    select: {
      itemStyle: {
        borderColor: '#212121'
      }
    },
    universalTransition: {
      divideShape: 'clone'
    }
    // progressive: null
  };
  return ScatterSeriesModel;
}(Series["default"]);
/* ESM default export */ var ScatterSeries = (ScatterSeries_ScatterSeriesModel);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/SymbolDraw.js
var SymbolDraw = __webpack_require__(41930);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/LargeSymbolDraw.js
var LargeSymbolDraw = __webpack_require__(4145);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/layout/points.js
var points = __webpack_require__(95097);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/view/Chart.js
var Chart = __webpack_require__(47389);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/scatter/ScatterView.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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





var ScatterView_ScatterView = /** @class */function (_super) {
  (0,tslib_es6.__extends)(ScatterView, _super);
  function ScatterView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = ScatterView.type;
    return _this;
  }
  ScatterView.prototype.render = function (seriesModel, ecModel, api) {
    var data = seriesModel.getData();
    var symbolDraw = this._updateSymbolDraw(data, seriesModel);
    symbolDraw.updateData(data, {
      // TODO
      // If this parameter should be a shape or a bounding volume
      // shape will be more general.
      // But bounding volume like bounding rect will be much faster in the contain calculation
      clipShape: this._getClipShape(seriesModel)
    });
    this._finished = true;
  };
  ScatterView.prototype.incrementalPrepareRender = function (seriesModel, ecModel, api) {
    var data = seriesModel.getData();
    var symbolDraw = this._updateSymbolDraw(data, seriesModel);
    symbolDraw.incrementalPrepareUpdate(data);
    this._finished = false;
  };
  ScatterView.prototype.incrementalRender = function (taskParams, seriesModel, ecModel) {
    this._symbolDraw.incrementalUpdate(taskParams, seriesModel.getData(), {
      clipShape: this._getClipShape(seriesModel)
    });
    this._finished = taskParams.end === seriesModel.getData().count();
  };
  ScatterView.prototype.updateTransform = function (seriesModel, ecModel, api) {
    var data = seriesModel.getData();
    // Must mark group dirty and make sure the incremental layer will be cleared
    // PENDING
    this.group.dirty();
    if (!this._finished || data.count() > 1e4) {
      return {
        update: true
      };
    } else {
      var res = (0,points["default"])('').reset(seriesModel, ecModel, api);
      if (res.progress) {
        res.progress({
          start: 0,
          end: data.count(),
          count: data.count()
        }, data);
      }
      this._symbolDraw.updateLayout(data);
    }
  };
  ScatterView.prototype.eachRendered = function (cb) {
    this._symbolDraw && this._symbolDraw.eachRendered(cb);
  };
  ScatterView.prototype._getClipShape = function (seriesModel) {
    if (!seriesModel.get('clip', true)) {
      return;
    }
    var coordSys = seriesModel.coordinateSystem;
    // PENDING make `0.1` configurable, for example, `clipTolerance`?
    return coordSys && coordSys.getArea && coordSys.getArea(.1);
  };
  ScatterView.prototype._updateSymbolDraw = function (data, seriesModel) {
    var symbolDraw = this._symbolDraw;
    var pipelineContext = seriesModel.pipelineContext;
    var isLargeDraw = pipelineContext.large;
    if (!symbolDraw || isLargeDraw !== this._isLargeDraw) {
      symbolDraw && symbolDraw.remove();
      symbolDraw = this._symbolDraw = isLargeDraw ? new LargeSymbolDraw["default"]() : new SymbolDraw["default"]();
      this._isLargeDraw = isLargeDraw;
      this.group.removeAll();
    }
    this.group.add(symbolDraw.group);
    return symbolDraw;
  };
  ScatterView.prototype.remove = function (ecModel, api) {
    this._symbolDraw && this._symbolDraw.remove(true);
    this._symbolDraw = null;
  };
  ScatterView.prototype.dispose = function () {};
  ScatterView.type = 'scatter';
  return ScatterView;
}(Chart["default"]);
/* ESM default export */ var scatter_ScatterView = (ScatterView_ScatterView);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/grid/installSimple.js
var installSimple = __webpack_require__(51581);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/scatter/install.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  // In case developer forget to include grid component
  (0,extension.use)(installSimple.install);
  registers.registerSeriesModel(ScatterSeries);
  registers.registerChartView(scatter_ScatterView);
  registers.registerLayout((0,points["default"])('scatter'));
}

}),
82145: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  install: function() { return /* binding */ install; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(12012);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(96585);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/view/Chart.js
var Chart = __webpack_require__(47389);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Text.js
var Text = __webpack_require__(97199);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/animation/basicTransition.js
var basicTransition = __webpack_require__(17524);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/Sector.js + 1 modules
var Sector = __webpack_require__(98289);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/states.js
var states = __webpack_require__(63344);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/label/labelStyle.js
var labelStyle = __webpack_require__(77704);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/innerStore.js
var innerStore = __webpack_require__(55413);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/sectorHelper.js
var sectorHelper = __webpack_require__(55549);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/decal.js
var util_decal = __webpack_require__(75965);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/contain/util.js
var contain_util = __webpack_require__(29662);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(81731);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/sunburst/SunburstPiece.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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











var DEFAULT_SECTOR_Z = 2;
var DEFAULT_TEXT_Z = 4;
/**
 * Sunburstce of Sunburst including Sector, Label, LabelLine
 */
var SunburstPiece_SunburstPiece = /** @class */function (_super) {
  (0,tslib_es6.__extends)(SunburstPiece, _super);
  function SunburstPiece(node, seriesModel, ecModel, api) {
    var _this = _super.call(this) || this;
    _this.z2 = DEFAULT_SECTOR_Z;
    _this.textConfig = {
      inside: true
    };
    (0,innerStore.getECData)(_this).seriesIndex = seriesModel.seriesIndex;
    var text = new Text["default"]({
      z2: DEFAULT_TEXT_Z,
      silent: node.getModel().get(['label', 'silent'])
    });
    _this.setTextContent(text);
    _this.updateData(true, node, seriesModel, ecModel, api);
    return _this;
  }
  SunburstPiece.prototype.updateData = function (firstCreate, node,
  // state: 'emphasis' | 'normal' | 'highlight' | 'downplay',
  seriesModel, ecModel, api) {
    this.node = node;
    node.piece = this;
    seriesModel = seriesModel || this._seriesModel;
    ecModel = ecModel || this._ecModel;
    var sector = this;
    (0,innerStore.getECData)(sector).dataIndex = node.dataIndex;
    var itemModel = node.getModel();
    var emphasisModel = itemModel.getModel('emphasis');
    var layout = node.getLayout();
    var sectorShape = util.extend({}, layout);
    sectorShape.label = null;
    var normalStyle = node.getVisual('style');
    normalStyle.lineJoin = 'bevel';
    var decal = node.getVisual('decal');
    if (decal) {
      normalStyle.decal = (0,util_decal.createOrUpdatePatternFromDecal)(decal, api);
    }
    var cornerRadius = (0,sectorHelper.getSectorCornerRadius)(itemModel.getModel('itemStyle'), sectorShape, true);
    util.extend(sectorShape, cornerRadius);
    util.each(states.SPECIAL_STATES, function (stateName) {
      var state = sector.ensureState(stateName);
      var itemStyleModel = itemModel.getModel([stateName, 'itemStyle']);
      state.style = itemStyleModel.getItemStyle();
      // border radius
      var cornerRadius = (0,sectorHelper.getSectorCornerRadius)(itemStyleModel, sectorShape);
      if (cornerRadius) {
        state.shape = cornerRadius;
      }
    });
    if (firstCreate) {
      sector.setShape(sectorShape);
      sector.shape.r = layout.r0;
      basicTransition.initProps(sector, {
        shape: {
          r: layout.r
        }
      }, seriesModel, node.dataIndex);
    } else {
      // Disable animation for gradient since no interpolation method
      // is supported for gradient
      basicTransition.updateProps(sector, {
        shape: sectorShape
      }, seriesModel);
      (0,basicTransition.saveOldStyle)(sector);
    }
    sector.useStyle(normalStyle);
    this._updateLabel(seriesModel);
    var cursorStyle = itemModel.getShallow('cursor');
    cursorStyle && sector.attr('cursor', cursorStyle);
    this._seriesModel = seriesModel || this._seriesModel;
    this._ecModel = ecModel || this._ecModel;
    var focus = emphasisModel.get('focus');
    var focusOrIndices = focus === 'relative' ? util.concatArray(node.getAncestorsIndices(), node.getDescendantIndices()) : focus === 'ancestor' ? node.getAncestorsIndices() : focus === 'descendant' ? node.getDescendantIndices() : focus;
    (0,states.toggleHoverEmphasis)(this, focusOrIndices, emphasisModel.get('blurScope'), emphasisModel.get('disabled'));
  };
  SunburstPiece.prototype._updateLabel = function (seriesModel) {
    var _this = this;
    var itemModel = this.node.getModel();
    var normalLabelModel = itemModel.getModel('label');
    var layout = this.node.getLayout();
    var angle = layout.endAngle - layout.startAngle;
    var midAngle = (layout.startAngle + layout.endAngle) / 2;
    var dx = Math.cos(midAngle);
    var dy = Math.sin(midAngle);
    var sector = this;
    var label = sector.getTextContent();
    var dataIndex = this.node.dataIndex;
    var labelMinAngle = normalLabelModel.get('minAngle') / 180 * Math.PI;
    var isNormalShown = normalLabelModel.get('show') && !(labelMinAngle != null && Math.abs(angle) < labelMinAngle);
    label.ignore = !isNormalShown;
    // TODO use setLabelStyle
    util.each(states.DISPLAY_STATES, function (stateName) {
      var labelStateModel = stateName === 'normal' ? itemModel.getModel('label') : itemModel.getModel([stateName, 'label']);
      var isNormal = stateName === 'normal';
      var state = isNormal ? label : label.ensureState(stateName);
      var text = seriesModel.getFormattedLabel(dataIndex, stateName);
      if (isNormal) {
        text = text || _this.node.name;
      }
      state.style = (0,labelStyle.createTextStyle)(labelStateModel, {}, null, stateName !== 'normal', true);
      if (text) {
        state.style.text = text;
      }
      // Not displaying text when angle is too small
      var isShown = labelStateModel.get('show');
      if (isShown != null && !isNormal) {
        state.ignore = !isShown;
      }
      var labelPosition = getLabelAttr(labelStateModel, 'position');
      var sectorState = isNormal ? sector : sector.states[stateName];
      var labelColor = sectorState.style.fill;
      sectorState.textConfig = {
        outsideFill: labelStateModel.get('color') === 'inherit' ? labelColor : null,
        inside: labelPosition !== 'outside'
      };
      var r;
      var labelPadding = getLabelAttr(labelStateModel, 'distance') || 0;
      var textAlign = getLabelAttr(labelStateModel, 'align');
      var rotateType = getLabelAttr(labelStateModel, 'rotate');
      var flipStartAngle = Math.PI * 0.5;
      var flipEndAngle = Math.PI * 1.5;
      var midAngleNormal = (0,contain_util.normalizeRadian)(rotateType === 'tangential' ? Math.PI / 2 - midAngle : midAngle);
      // For text that is up-side down, rotate 180 degrees to make sure
      // it's readable
      var needsFlip = midAngleNormal > flipStartAngle && !(0,number.isRadianAroundZero)(midAngleNormal - flipStartAngle) && midAngleNormal < flipEndAngle;
      if (labelPosition === 'outside') {
        r = layout.r + labelPadding;
        textAlign = needsFlip ? 'right' : 'left';
      } else {
        if (!textAlign || textAlign === 'center') {
          // Put label in the center if it's a circle
          if (angle === 2 * Math.PI && layout.r0 === 0) {
            r = 0;
          } else {
            r = (layout.r + layout.r0) / 2;
          }
          textAlign = 'center';
        } else if (textAlign === 'left') {
          r = layout.r0 + labelPadding;
          textAlign = needsFlip ? 'right' : 'left';
        } else if (textAlign === 'right') {
          r = layout.r - labelPadding;
          textAlign = needsFlip ? 'left' : 'right';
        }
      }
      state.style.align = textAlign;
      state.style.verticalAlign = getLabelAttr(labelStateModel, 'verticalAlign') || 'middle';
      state.x = r * dx + layout.cx;
      state.y = r * dy + layout.cy;
      var rotate = 0;
      if (rotateType === 'radial') {
        rotate = (0,contain_util.normalizeRadian)(-midAngle) + (needsFlip ? Math.PI : 0);
      } else if (rotateType === 'tangential') {
        rotate = (0,contain_util.normalizeRadian)(Math.PI / 2 - midAngle) + (needsFlip ? Math.PI : 0);
      } else if (util.isNumber(rotateType)) {
        rotate = rotateType * Math.PI / 180;
      }
      state.rotation = (0,contain_util.normalizeRadian)(rotate);
    });
    function getLabelAttr(model, name) {
      var stateAttr = model.get(name);
      if (stateAttr == null) {
        return normalLabelModel.get(name);
      }
      return stateAttr;
    }
    label.dirtyStyle();
  };
  return SunburstPiece;
}(Sector["default"]);
/* ESM default export */ var sunburst_SunburstPiece = (SunburstPiece_SunburstPiece);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/data/DataDiffer.js
var DataDiffer = __webpack_require__(4055);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/treeHelper.js
var treeHelper = __webpack_require__(12438);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/sunburst/sunburstAction.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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



var ROOT_TO_NODE_ACTION = 'sunburstRootToNode';
var HIGHLIGHT_ACTION = 'sunburstHighlight';
var UNHIGHLIGHT_ACTION = 'sunburstUnhighlight';
function installSunburstAction(registers) {
  registers.registerAction({
    type: ROOT_TO_NODE_ACTION,
    update: 'updateView'
  }, function (payload, ecModel) {
    ecModel.eachComponent({
      mainType: 'series',
      subType: 'sunburst',
      query: payload
    }, handleRootToNode);
    function handleRootToNode(model, index) {
      var targetInfo = (0,treeHelper.retrieveTargetInfo)(payload, [ROOT_TO_NODE_ACTION], model);
      if (targetInfo) {
        var originViewRoot = model.getViewRoot();
        if (originViewRoot) {
          payload.direction = (0,treeHelper.aboveViewRoot)(originViewRoot, targetInfo.node) ? 'rollUp' : 'drillDown';
        }
        model.resetViewRoot(targetInfo.node);
      }
    }
  });
  registers.registerAction({
    type: HIGHLIGHT_ACTION,
    update: 'none'
  }, function (payload, ecModel, api) {
    // Clone
    payload = (0,util.extend)({}, payload);
    ecModel.eachComponent({
      mainType: 'series',
      subType: 'sunburst',
      query: payload
    }, handleHighlight);
    function handleHighlight(model) {
      var targetInfo = (0,treeHelper.retrieveTargetInfo)(payload, [HIGHLIGHT_ACTION], model);
      if (targetInfo) {
        payload.dataIndex = targetInfo.node.dataIndex;
      }
    }
    if (false) {}
    // Fast forward action
    api.dispatchAction((0,util.extend)(payload, {
      type: 'highlight'
    }));
  });
  registers.registerAction({
    type: UNHIGHLIGHT_ACTION,
    update: 'updateView'
  }, function (payload, ecModel, api) {
    payload = (0,util.extend)({}, payload);
    if (false) {}
    api.dispatchAction((0,util.extend)(payload, {
      type: 'downplay'
    }));
  });
}
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/format.js
var format = __webpack_require__(43718);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/sunburst/SunburstView.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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







var SunburstView_SunburstView = /** @class */function (_super) {
  (0,tslib_es6.__extends)(SunburstView, _super);
  function SunburstView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = SunburstView.type;
    return _this;
  }
  SunburstView.prototype.render = function (seriesModel, ecModel, api,
  // @ts-ignore
  payload) {
    var self = this;
    this.seriesModel = seriesModel;
    this.api = api;
    this.ecModel = ecModel;
    var data = seriesModel.getData();
    var virtualRoot = data.tree.root;
    var newRoot = seriesModel.getViewRoot();
    var group = this.group;
    var renderLabelForZeroData = seriesModel.get('renderLabelForZeroData');
    var newChildren = [];
    newRoot.eachNode(function (node) {
      newChildren.push(node);
    });
    var oldChildren = this._oldChildren || [];
    dualTravel(newChildren, oldChildren);
    renderRollUp(virtualRoot, newRoot);
    this._initEvents();
    this._oldChildren = newChildren;
    function dualTravel(newChildren, oldChildren) {
      if (newChildren.length === 0 && oldChildren.length === 0) {
        return;
      }
      new DataDiffer["default"](oldChildren, newChildren, getKey, getKey).add(processNode).update(processNode).remove(util.curry(processNode, null)).execute();
      function getKey(node) {
        return node.getId();
      }
      function processNode(newIdx, oldIdx) {
        var newNode = newIdx == null ? null : newChildren[newIdx];
        var oldNode = oldIdx == null ? null : oldChildren[oldIdx];
        doRenderNode(newNode, oldNode);
      }
    }
    function doRenderNode(newNode, oldNode) {
      if (!renderLabelForZeroData && newNode && !newNode.getValue()) {
        // Not render data with value 0
        newNode = null;
      }
      if (newNode !== virtualRoot && oldNode !== virtualRoot) {
        if (oldNode && oldNode.piece) {
          if (newNode) {
            // Update
            oldNode.piece.updateData(false, newNode, seriesModel, ecModel, api);
            // For tooltip
            data.setItemGraphicEl(newNode.dataIndex, oldNode.piece);
          } else {
            // Remove
            removeNode(oldNode);
          }
        } else if (newNode) {
          // Add
          var piece = new sunburst_SunburstPiece(newNode, seriesModel, ecModel, api);
          group.add(piece);
          // For tooltip
          data.setItemGraphicEl(newNode.dataIndex, piece);
        }
      }
    }
    function removeNode(node) {
      if (!node) {
        return;
      }
      if (node.piece) {
        group.remove(node.piece);
        node.piece = null;
      }
    }
    function renderRollUp(virtualRoot, viewRoot) {
      if (viewRoot.depth > 0) {
        // Render
        if (self.virtualPiece) {
          // Update
          self.virtualPiece.updateData(false, virtualRoot, seriesModel, ecModel, api);
        } else {
          // Add
          self.virtualPiece = new sunburst_SunburstPiece(virtualRoot, seriesModel, ecModel, api);
          group.add(self.virtualPiece);
        }
        // TODO event scope
        viewRoot.piece.off('click');
        self.virtualPiece.on('click', function (e) {
          self._rootToNode(viewRoot.parentNode);
        });
      } else if (self.virtualPiece) {
        // Remove
        group.remove(self.virtualPiece);
        self.virtualPiece = null;
      }
    }
  };
  /**
   * @private
   */
  SunburstView.prototype._initEvents = function () {
    var _this = this;
    this.group.off('click');
    this.group.on('click', function (e) {
      var targetFound = false;
      var viewRoot = _this.seriesModel.getViewRoot();
      viewRoot.eachNode(function (node) {
        if (!targetFound && node.piece && node.piece === e.target) {
          var nodeClick = node.getModel().get('nodeClick');
          if (nodeClick === 'rootToNode') {
            _this._rootToNode(node);
          } else if (nodeClick === 'link') {
            var itemModel = node.getModel();
            var link = itemModel.get('link');
            if (link) {
              var linkTarget = itemModel.get('target', true) || '_blank';
              (0,format.windowOpen)(link, linkTarget);
            }
          }
          targetFound = true;
        }
      });
    });
  };
  /**
   * @private
   */
  SunburstView.prototype._rootToNode = function (node) {
    if (node !== this.seriesModel.getViewRoot()) {
      this.api.dispatchAction({
        type: ROOT_TO_NODE_ACTION,
        from: this.uid,
        seriesId: this.seriesModel.id,
        targetNode: node
      });
    }
  };
  /**
   * @implement
   */
  SunburstView.prototype.containPoint = function (point, seriesModel) {
    var treeRoot = seriesModel.getData();
    var itemLayout = treeRoot.getItemLayout(0);
    if (itemLayout) {
      var dx = point[0] - itemLayout.cx;
      var dy = point[1] - itemLayout.cy;
      var radius = Math.sqrt(dx * dx + dy * dy);
      return radius <= itemLayout.r && radius >= itemLayout.r0;
    }
  };
  SunburstView.type = 'sunburst';
  return SunburstView;
}(Chart["default"]);
/* ESM default export */ var sunburst_SunburstView = (SunburstView_SunburstView);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Series.js
var Series = __webpack_require__(48134);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/data/Tree.js
var Tree = __webpack_require__(19079);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Model.js + 2 modules
var Model = __webpack_require__(84456);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/enableAriaDecalForTree.js
var enableAriaDecalForTree = __webpack_require__(57891);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/sunburst/SunburstSeries.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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







var SunburstSeries_SunburstSeriesModel = /** @class */function (_super) {
  (0,tslib_es6.__extends)(SunburstSeriesModel, _super);
  function SunburstSeriesModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = SunburstSeriesModel.type;
    _this.ignoreStyleOnData = true;
    return _this;
  }
  SunburstSeriesModel.prototype.getInitialData = function (option, ecModel) {
    // Create a virtual root.
    var root = {
      name: option.name,
      children: option.data
    };
    completeTreeValue(root);
    var levelModels = this._levelModels = util.map(option.levels || [], function (levelDefine) {
      return new Model["default"](levelDefine, this, ecModel);
    }, this);
    // Make sure always a new tree is created when setOption,
    // in TreemapView, we check whether oldTree === newTree
    // to choose mappings approach among old shapes and new shapes.
    var tree = Tree["default"].createTree(root, this, beforeLink);
    function beforeLink(nodeData) {
      nodeData.wrapMethod('getItemModel', function (model, idx) {
        var node = tree.getNodeByDataIndex(idx);
        var levelModel = levelModels[node.depth];
        levelModel && (model.parentModel = levelModel);
        return model;
      });
    }
    return tree.data;
  };
  SunburstSeriesModel.prototype.optionUpdated = function () {
    this.resetViewRoot();
  };
  /*
   * @override
   */
  SunburstSeriesModel.prototype.getDataParams = function (dataIndex) {
    var params = _super.prototype.getDataParams.apply(this, arguments);
    var node = this.getData().tree.getNodeByDataIndex(dataIndex);
    params.treePathInfo = (0,treeHelper.wrapTreePathInfo)(node, this);
    return params;
  };
  SunburstSeriesModel.prototype.getLevelModel = function (node) {
    return this._levelModels && this._levelModels[node.depth];
  };
  SunburstSeriesModel.prototype.getViewRoot = function () {
    return this._viewRoot;
  };
  SunburstSeriesModel.prototype.resetViewRoot = function (viewRoot) {
    viewRoot ? this._viewRoot = viewRoot : viewRoot = this._viewRoot;
    var root = this.getRawData().tree.root;
    if (!viewRoot || viewRoot !== root && !root.contains(viewRoot)) {
      this._viewRoot = root;
    }
  };
  SunburstSeriesModel.prototype.enableAriaDecal = function () {
    (0,enableAriaDecalForTree["default"])(this);
  };
  SunburstSeriesModel.type = 'series.sunburst';
  SunburstSeriesModel.defaultOption = {
    // zlevel: 0,
    z: 2,
    // 默认全局居中
    center: ['50%', '50%'],
    radius: [0, '75%'],
    // 默认顺时针
    clockwise: true,
    startAngle: 90,
    // 最小角度改为0
    minAngle: 0,
    // If still show when all data zero.
    stillShowZeroSum: true,
    // 'rootToNode', 'link', or false
    nodeClick: 'rootToNode',
    renderLabelForZeroData: false,
    label: {
      // could be: 'radial', 'tangential', or 'none'
      rotate: 'radial',
      show: true,
      opacity: 1,
      // 'left' is for inner side of inside, and 'right' is for outer
      // side for inside
      align: 'center',
      position: 'inside',
      distance: 5,
      silent: true
    },
    itemStyle: {
      borderWidth: 1,
      borderColor: 'white',
      borderType: 'solid',
      shadowBlur: 0,
      shadowColor: 'rgba(0, 0, 0, 0.2)',
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      opacity: 1
    },
    emphasis: {
      focus: 'descendant'
    },
    blur: {
      itemStyle: {
        opacity: 0.2
      },
      label: {
        opacity: 0.1
      }
    },
    // Animation type can be expansion, scale.
    animationType: 'expansion',
    animationDuration: 1000,
    animationDurationUpdate: 500,
    data: [],
    /**
     * Sort order.
     *
     * Valid values: 'desc', 'asc', null, or callback function.
     * 'desc' and 'asc' for descend and ascendant order;
     * null for not sorting;
     * example of callback function:
     * function(nodeA, nodeB) {
     *     return nodeA.getValue() - nodeB.getValue();
     * }
     */
    sort: 'desc'
  };
  return SunburstSeriesModel;
}(Series["default"]);
function completeTreeValue(dataNode) {
  // Postorder travel tree.
  // If value of none-leaf node is not set,
  // calculate it by suming up the value of all children.
  var sum = 0;
  util.each(dataNode.children, function (child) {
    completeTreeValue(child);
    var childValue = child.value;
    // TODO First value of array must be a number
    util.isArray(childValue) && (childValue = childValue[0]);
    sum += childValue;
  });
  var thisValue = dataNode.value;
  if (util.isArray(thisValue)) {
    thisValue = thisValue[0];
  }
  if (thisValue == null || isNaN(thisValue)) {
    thisValue = sum;
  }
  // Value should not less than 0.
  if (thisValue < 0) {
    thisValue = 0;
  }
  util.isArray(dataNode.value) ? dataNode.value[0] = thisValue : dataNode.value = thisValue;
}
/* ESM default export */ var SunburstSeries = (SunburstSeries_SunburstSeriesModel);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/sunburst/sunburstLayout.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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


// let PI2 = Math.PI * 2;
var RADIAN = Math.PI / 180;
function sunburstLayout(seriesType, ecModel, api) {
  ecModel.eachSeriesByType(seriesType, function (seriesModel) {
    var center = seriesModel.get('center');
    var radius = seriesModel.get('radius');
    if (!util.isArray(radius)) {
      radius = [0, radius];
    }
    if (!util.isArray(center)) {
      center = [center, center];
    }
    var width = api.getWidth();
    var height = api.getHeight();
    var size = Math.min(width, height);
    var cx = (0,number.parsePercent)(center[0], width);
    var cy = (0,number.parsePercent)(center[1], height);
    var r0 = (0,number.parsePercent)(radius[0], size / 2);
    var r = (0,number.parsePercent)(radius[1], size / 2);
    var startAngle = -seriesModel.get('startAngle') * RADIAN;
    var minAngle = seriesModel.get('minAngle') * RADIAN;
    var virtualRoot = seriesModel.getData().tree.root;
    var treeRoot = seriesModel.getViewRoot();
    var rootDepth = treeRoot.depth;
    var sort = seriesModel.get('sort');
    if (sort != null) {
      initChildren(treeRoot, sort);
    }
    var validDataCount = 0;
    util.each(treeRoot.children, function (child) {
      !isNaN(child.getValue()) && validDataCount++;
    });
    var sum = treeRoot.getValue();
    // Sum may be 0
    var unitRadian = Math.PI / (sum || validDataCount) * 2;
    var renderRollupNode = treeRoot.depth > 0;
    var levels = treeRoot.height - (renderRollupNode ? -1 : 1);
    var rPerLevel = (r - r0) / (levels || 1);
    var clockwise = seriesModel.get('clockwise');
    var stillShowZeroSum = seriesModel.get('stillShowZeroSum');
    // In the case some sector angle is smaller than minAngle
    // let restAngle = PI2;
    // let valueSumLargerThanMinAngle = 0;
    var dir = clockwise ? 1 : -1;
    /**
     * Render a tree
     * @return increased angle
     */
    var renderNode = function (node, startAngle) {
      if (!node) {
        return;
      }
      var endAngle = startAngle;
      // Render self
      if (node !== virtualRoot) {
        // Tree node is virtual, so it doesn't need to be drawn
        var value = node.getValue();
        var angle = sum === 0 && stillShowZeroSum ? unitRadian : value * unitRadian;
        if (angle < minAngle) {
          angle = minAngle;
          // restAngle -= minAngle;
        }
        // else {
        //     valueSumLargerThanMinAngle += value;
        // }
        endAngle = startAngle + dir * angle;
        var depth = node.depth - rootDepth - (renderRollupNode ? -1 : 1);
        var rStart = r0 + rPerLevel * depth;
        var rEnd = r0 + rPerLevel * (depth + 1);
        var levelModel = seriesModel.getLevelModel(node);
        if (levelModel) {
          var r0_1 = levelModel.get('r0', true);
          var r_1 = levelModel.get('r', true);
          var radius_1 = levelModel.get('radius', true);
          if (radius_1 != null) {
            r0_1 = radius_1[0];
            r_1 = radius_1[1];
          }
          r0_1 != null && (rStart = (0,number.parsePercent)(r0_1, size / 2));
          r_1 != null && (rEnd = (0,number.parsePercent)(r_1, size / 2));
        }
        node.setLayout({
          angle: angle,
          startAngle: startAngle,
          endAngle: endAngle,
          clockwise: clockwise,
          cx: cx,
          cy: cy,
          r0: rStart,
          r: rEnd
        });
      }
      // Render children
      if (node.children && node.children.length) {
        // currentAngle = startAngle;
        var siblingAngle_1 = 0;
        util.each(node.children, function (node) {
          siblingAngle_1 += renderNode(node, startAngle + siblingAngle_1);
        });
      }
      return endAngle - startAngle;
    };
    // Virtual root node for roll up
    if (renderRollupNode) {
      var rStart = r0;
      var rEnd = r0 + rPerLevel;
      var angle = Math.PI * 2;
      virtualRoot.setLayout({
        angle: angle,
        startAngle: startAngle,
        endAngle: startAngle + angle,
        clockwise: clockwise,
        cx: cx,
        cy: cy,
        r0: rStart,
        r: rEnd
      });
    }
    renderNode(treeRoot, startAngle);
  });
}
/**
 * Init node children by order and update visual
 */
function initChildren(node, sortOrder) {
  var children = node.children || [];
  node.children = sunburstLayout_sort(children, sortOrder);
  // Init children recursively
  if (children.length) {
    util.each(node.children, function (child) {
      initChildren(child, sortOrder);
    });
  }
}
/**
 * Sort children nodes
 *
 * @param {TreeNode[]}               children children of node to be sorted
 * @param {string | function | null} sort sort method
 *                                   See SunburstSeries.js for details.
 */
function sunburstLayout_sort(children, sortOrder) {
  if (util.isFunction(sortOrder)) {
    var sortTargets = util.map(children, function (child, idx) {
      var value = child.getValue();
      return {
        params: {
          depth: child.depth,
          height: child.height,
          dataIndex: child.dataIndex,
          getValue: function () {
            return value;
          }
        },
        index: idx
      };
    });
    sortTargets.sort(function (a, b) {
      return sortOrder(a.params, b.params);
    });
    return util.map(sortTargets, function (target) {
      return children[target.index];
    });
  } else {
    var isAsc_1 = sortOrder === 'asc';
    return children.sort(function (a, b) {
      var diff = (a.getValue() - b.getValue()) * (isAsc_1 ? 1 : -1);
      return diff === 0 ? (a.dataIndex - b.dataIndex) * (isAsc_1 ? -1 : 1) : diff;
    });
  }
}
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/tool/color.js
var tool_color = __webpack_require__(67375);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/sunburst/sunburstVisual.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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


function sunburstVisual(ecModel) {
  var paletteScope = {};
  // Default color strategy
  function pickColor(node, seriesModel, treeHeight) {
    // Choose color from palette based on the first level.
    var current = node;
    while (current && current.depth > 1) {
      current = current.parentNode;
    }
    var color = seriesModel.getColorFromPalette(current.name || current.dataIndex + '', paletteScope);
    if (node.depth > 1 && (0,util.isString)(color)) {
      // Lighter on the deeper level.
      color = (0,tool_color.lift)(color, (node.depth - 1) / (treeHeight - 1) * 0.5);
    }
    return color;
  }
  ecModel.eachSeriesByType('sunburst', function (seriesModel) {
    var data = seriesModel.getData();
    var tree = data.tree;
    tree.eachNode(function (node) {
      var model = node.getModel();
      var style = model.getModel('itemStyle').getItemStyle();
      if (!style.fill) {
        style.fill = pickColor(node, seriesModel, tree.root.height);
      }
      var existsStyle = data.ensureUniqueItemVisual(node.dataIndex, 'style');
      (0,util.extend)(existsStyle, style);
    });
  });
}
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/processor/dataFilter.js
var dataFilter = __webpack_require__(47400);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/sunburst/install.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  registers.registerChartView(sunburst_SunburstView);
  registers.registerSeriesModel(SunburstSeries);
  registers.registerLayout((0,util.curry)(sunburstLayout, 'sunburst'));
  registers.registerProcessor((0,util.curry)(dataFilter["default"], 'sunburst'));
  registers.registerVisual(sunburstVisual);
  installSunburstAction(registers);
}

}),
85669: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  install: function() { return /* binding */ install; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(12012);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/line/poly.js
var poly = __webpack_require__(74472);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Group.js
var Group = __webpack_require__(58695);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/animation/basicTransition.js
var basicTransition = __webpack_require__(17524);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/Rect.js + 1 modules
var Rect = __webpack_require__(40361);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/states.js
var states = __webpack_require__(63344);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/label/labelStyle.js
var labelStyle = __webpack_require__(77704);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(96585);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/data/DataDiffer.js
var DataDiffer = __webpack_require__(4055);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/view/Chart.js
var Chart = __webpack_require__(47389);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/themeRiver/ThemeRiverView.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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









var ThemeRiverView_ThemeRiverView = /** @class */function (_super) {
  (0,tslib_es6.__extends)(ThemeRiverView, _super);
  function ThemeRiverView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = ThemeRiverView.type;
    _this._layers = [];
    return _this;
  }
  ThemeRiverView.prototype.render = function (seriesModel, ecModel, api) {
    var data = seriesModel.getData();
    var self = this;
    var group = this.group;
    var layersSeries = seriesModel.getLayerSeries();
    var layoutInfo = data.getLayout('layoutInfo');
    var rect = layoutInfo.rect;
    var boundaryGap = layoutInfo.boundaryGap;
    group.x = 0;
    group.y = rect.y + boundaryGap[0];
    function keyGetter(item) {
      return item.name;
    }
    var dataDiffer = new DataDiffer["default"](this._layersSeries || [], layersSeries, keyGetter, keyGetter);
    var newLayersGroups = [];
    dataDiffer.add((0,util.bind)(process, this, 'add')).update((0,util.bind)(process, this, 'update')).remove((0,util.bind)(process, this, 'remove')).execute();
    function process(status, idx, oldIdx) {
      var oldLayersGroups = self._layers;
      if (status === 'remove') {
        group.remove(oldLayersGroups[idx]);
        return;
      }
      var points0 = [];
      var points1 = [];
      var style;
      var indices = layersSeries[idx].indices;
      var j = 0;
      for (; j < indices.length; j++) {
        var layout = data.getItemLayout(indices[j]);
        var x = layout.x;
        var y0 = layout.y0;
        var y = layout.y;
        points0.push(x, y0);
        points1.push(x, y0 + y);
        style = data.getItemVisual(indices[j], 'style');
      }
      var polygon;
      var textLayout = data.getItemLayout(indices[0]);
      var labelModel = seriesModel.getModel('label');
      var margin = labelModel.get('margin');
      var emphasisModel = seriesModel.getModel('emphasis');
      if (status === 'add') {
        var layerGroup = newLayersGroups[idx] = new Group["default"]();
        polygon = new poly.ECPolygon({
          shape: {
            points: points0,
            stackedOnPoints: points1,
            smooth: 0.4,
            stackedOnSmooth: 0.4,
            smoothConstraint: false
          },
          z2: 0
        });
        layerGroup.add(polygon);
        group.add(layerGroup);
        if (seriesModel.isAnimationEnabled()) {
          polygon.setClipPath(createGridClipShape(polygon.getBoundingRect(), seriesModel, function () {
            polygon.removeClipPath();
          }));
        }
      } else {
        var layerGroup = oldLayersGroups[oldIdx];
        polygon = layerGroup.childAt(0);
        group.add(layerGroup);
        newLayersGroups[idx] = layerGroup;
        basicTransition.updateProps(polygon, {
          shape: {
            points: points0,
            stackedOnPoints: points1
          }
        }, seriesModel);
        (0,basicTransition.saveOldStyle)(polygon);
      }
      (0,labelStyle.setLabelStyle)(polygon, (0,labelStyle.getLabelStatesModels)(seriesModel), {
        labelDataIndex: indices[j - 1],
        defaultText: data.getName(indices[j - 1]),
        inheritColor: style.fill
      }, {
        normal: {
          verticalAlign: 'middle'
          // align: 'right'
        }
      });
      polygon.setTextConfig({
        position: null,
        local: true
      });
      var labelEl = polygon.getTextContent();
      // TODO More label position options.
      if (labelEl) {
        labelEl.x = textLayout.x - margin;
        labelEl.y = textLayout.y0 + textLayout.y / 2;
      }
      polygon.useStyle(style);
      data.setItemGraphicEl(idx, polygon);
      (0,states.setStatesStylesFromModel)(polygon, seriesModel);
      (0,states.toggleHoverEmphasis)(polygon, emphasisModel.get('focus'), emphasisModel.get('blurScope'), emphasisModel.get('disabled'));
    }
    this._layersSeries = layersSeries;
    this._layers = newLayersGroups;
  };
  ThemeRiverView.type = 'themeRiver';
  return ThemeRiverView;
}(Chart["default"]);
;
// add animation to the view
function createGridClipShape(rect, seriesModel, cb) {
  var rectEl = new Rect["default"]({
    shape: {
      x: rect.x - 10,
      y: rect.y - 10,
      width: 0,
      height: rect.height + 20
    }
  });
  basicTransition.initProps(rectEl, {
    shape: {
      x: rect.x - 50,
      width: rect.width + 100,
      height: rect.height + 20
    }
  }, seriesModel, cb);
  return rectEl;
}
/* ESM default export */ var themeRiver_ThemeRiverView = (ThemeRiverView_ThemeRiverView);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Series.js
var Series = __webpack_require__(48134);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/data/helper/createDimensions.js
var createDimensions = __webpack_require__(66115);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/data/helper/dimensionHelper.js
var dimensionHelper = __webpack_require__(31426);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/data/SeriesData.js
var SeriesData = __webpack_require__(38788);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/model.js
var model = __webpack_require__(46451);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/visual/LegendVisualProvider.js
var LegendVisualProvider = __webpack_require__(57275);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/tooltip/tooltipMarkup.js
var tooltipMarkup = __webpack_require__(13134);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/themeRiver/ThemeRiverSeries.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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









var DATA_NAME_INDEX = 2;
var ThemeRiverSeries_ThemeRiverSeriesModel = /** @class */function (_super) {
  (0,tslib_es6.__extends)(ThemeRiverSeriesModel, _super);
  function ThemeRiverSeriesModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = ThemeRiverSeriesModel.type;
    return _this;
  }
  /**
   * @override
   */
  ThemeRiverSeriesModel.prototype.init = function (option) {
    // eslint-disable-next-line
    _super.prototype.init.apply(this, arguments);
    // Put this function here is for the sake of consistency of code style.
    // Enable legend selection for each data item
    // Use a function instead of direct access because data reference may changed
    this.legendVisualProvider = new LegendVisualProvider["default"](util.bind(this.getData, this), util.bind(this.getRawData, this));
  };
  /**
   * If there is no value of a certain point in the time for some event,set it value to 0.
   *
   * @param {Array} data  initial data in the option
   * @return {Array}
   */
  ThemeRiverSeriesModel.prototype.fixData = function (data) {
    var rawDataLength = data.length;
    /**
     * Make sure every layer data get the same keys.
     * The value index tells which layer has visited.
     * {
     *  2014/01/01: -1
     * }
     */
    var timeValueKeys = {};
    // grouped data by name
    var groupResult = (0,model.groupData)(data, function (item) {
      if (!timeValueKeys.hasOwnProperty(item[0] + '')) {
        timeValueKeys[item[0] + ''] = -1;
      }
      return item[2];
    });
    var layerData = [];
    groupResult.buckets.each(function (items, key) {
      layerData.push({
        name: key,
        dataList: items
      });
    });
    var layerNum = layerData.length;
    for (var k = 0; k < layerNum; ++k) {
      var name_1 = layerData[k].name;
      for (var j = 0; j < layerData[k].dataList.length; ++j) {
        var timeValue = layerData[k].dataList[j][0] + '';
        timeValueKeys[timeValue] = k;
      }
      for (var timeValue in timeValueKeys) {
        if (timeValueKeys.hasOwnProperty(timeValue) && timeValueKeys[timeValue] !== k) {
          timeValueKeys[timeValue] = k;
          data[rawDataLength] = [timeValue, 0, name_1];
          rawDataLength++;
        }
      }
    }
    return data;
  };
  /**
   * @override
   * @param  option  the initial option that user gave
   * @param  ecModel  the model object for themeRiver option
   */
  ThemeRiverSeriesModel.prototype.getInitialData = function (option, ecModel) {
    var singleAxisModel = this.getReferringComponents('singleAxis', model.SINGLE_REFERRING).models[0];
    var axisType = singleAxisModel.get('type');
    // filter the data item with the value of label is undefined
    var filterData = util.filter(option.data, function (dataItem) {
      return dataItem[2] !== undefined;
    });
    // ??? TODO design a stage to transfer data for themeRiver and lines?
    var data = this.fixData(filterData || []);
    var nameList = [];
    var nameMap = this.nameMap = util.createHashMap();
    var count = 0;
    for (var i = 0; i < data.length; ++i) {
      nameList.push(data[i][DATA_NAME_INDEX]);
      if (!nameMap.get(data[i][DATA_NAME_INDEX])) {
        nameMap.set(data[i][DATA_NAME_INDEX], count);
        count++;
      }
    }
    var dimensions = (0,createDimensions["default"])(data, {
      coordDimensions: ['single'],
      dimensionsDefine: [{
        name: 'time',
        type: (0,dimensionHelper.getDimensionTypeByAxis)(axisType)
      }, {
        name: 'value',
        type: 'float'
      }, {
        name: 'name',
        type: 'ordinal'
      }],
      encodeDefine: {
        single: 0,
        value: 1,
        itemName: 2
      }
    }).dimensions;
    var list = new SeriesData["default"](dimensions, this);
    list.initData(data);
    return list;
  };
  /**
   * The raw data is divided into multiple layers and each layer
   *     has same name.
   */
  ThemeRiverSeriesModel.prototype.getLayerSeries = function () {
    var data = this.getData();
    var lenCount = data.count();
    var indexArr = [];
    for (var i = 0; i < lenCount; ++i) {
      indexArr[i] = i;
    }
    var timeDim = data.mapDimension('single');
    // data group by name
    var groupResult = (0,model.groupData)(indexArr, function (index) {
      return data.get('name', index);
    });
    var layerSeries = [];
    groupResult.buckets.each(function (items, key) {
      items.sort(function (index1, index2) {
        return data.get(timeDim, index1) - data.get(timeDim, index2);
      });
      layerSeries.push({
        name: key,
        indices: items
      });
    });
    return layerSeries;
  };
  /**
   * Get data indices for show tooltip content
   */
  ThemeRiverSeriesModel.prototype.getAxisTooltipData = function (dim, value, baseAxis) {
    if (!util.isArray(dim)) {
      dim = dim ? [dim] : [];
    }
    var data = this.getData();
    var layerSeries = this.getLayerSeries();
    var indices = [];
    var layerNum = layerSeries.length;
    var nestestValue;
    for (var i = 0; i < layerNum; ++i) {
      var minDist = Number.MAX_VALUE;
      var nearestIdx = -1;
      var pointNum = layerSeries[i].indices.length;
      for (var j = 0; j < pointNum; ++j) {
        var theValue = data.get(dim[0], layerSeries[i].indices[j]);
        var dist = Math.abs(theValue - value);
        if (dist <= minDist) {
          nestestValue = theValue;
          minDist = dist;
          nearestIdx = layerSeries[i].indices[j];
        }
      }
      indices.push(nearestIdx);
    }
    return {
      dataIndices: indices,
      nestestValue: nestestValue
    };
  };
  ThemeRiverSeriesModel.prototype.formatTooltip = function (dataIndex, multipleSeries, dataType) {
    var data = this.getData();
    var name = data.getName(dataIndex);
    var value = data.get(data.mapDimension('value'), dataIndex);
    return (0,tooltipMarkup.createTooltipMarkup)('nameValue', {
      name: name,
      value: value
    });
  };
  ThemeRiverSeriesModel.type = 'series.themeRiver';
  ThemeRiverSeriesModel.dependencies = ['singleAxis'];
  ThemeRiverSeriesModel.defaultOption = {
    // zlevel: 0,
    z: 2,
    colorBy: 'data',
    coordinateSystem: 'singleAxis',
    // gap in axis's orthogonal orientation
    boundaryGap: ['10%', '10%'],
    // legendHoverLink: true,
    singleAxisIndex: 0,
    animationEasing: 'linear',
    label: {
      margin: 4,
      show: true,
      position: 'left',
      fontSize: 11
    },
    emphasis: {
      label: {
        show: true
      }
    }
  };
  return ThemeRiverSeriesModel;
}(Series["default"]);
/* ESM default export */ var ThemeRiverSeries = (ThemeRiverSeries_ThemeRiverSeriesModel);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(81731);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/themeRiver/themeRiverLayout.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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


function themeRiverLayout(ecModel, api) {
  ecModel.eachSeriesByType('themeRiver', function (seriesModel) {
    var data = seriesModel.getData();
    var single = seriesModel.coordinateSystem;
    var layoutInfo = {};
    // use the axis boundingRect for view
    var rect = single.getRect();
    layoutInfo.rect = rect;
    var boundaryGap = seriesModel.get('boundaryGap');
    var axis = single.getAxis();
    layoutInfo.boundaryGap = boundaryGap;
    if (axis.orient === 'horizontal') {
      boundaryGap[0] = number.parsePercent(boundaryGap[0], rect.height);
      boundaryGap[1] = number.parsePercent(boundaryGap[1], rect.height);
      var height = rect.height - boundaryGap[0] - boundaryGap[1];
      doThemeRiverLayout(data, seriesModel, height);
    } else {
      boundaryGap[0] = number.parsePercent(boundaryGap[0], rect.width);
      boundaryGap[1] = number.parsePercent(boundaryGap[1], rect.width);
      var width = rect.width - boundaryGap[0] - boundaryGap[1];
      doThemeRiverLayout(data, seriesModel, width);
    }
    data.setLayout('layoutInfo', layoutInfo);
  });
}
/**
 * The layout information about themeriver
 *
 * @param data  data in the series
 * @param seriesModel  the model object of themeRiver series
 * @param height  value used to compute every series height
 */
function doThemeRiverLayout(data, seriesModel, height) {
  if (!data.count()) {
    return;
  }
  var coordSys = seriesModel.coordinateSystem;
  // the data in each layer are organized into a series.
  var layerSeries = seriesModel.getLayerSeries();
  // the points in each layer.
  var timeDim = data.mapDimension('single');
  var valueDim = data.mapDimension('value');
  var layerPoints = util.map(layerSeries, function (singleLayer) {
    return util.map(singleLayer.indices, function (idx) {
      var pt = coordSys.dataToPoint(data.get(timeDim, idx));
      pt[1] = data.get(valueDim, idx);
      return pt;
    });
  });
  var base = computeBaseline(layerPoints);
  var baseLine = base.y0;
  var ky = height / base.max;
  // set layout information for each item.
  var n = layerSeries.length;
  var m = layerSeries[0].indices.length;
  var baseY0;
  for (var j = 0; j < m; ++j) {
    baseY0 = baseLine[j] * ky;
    data.setItemLayout(layerSeries[0].indices[j], {
      layerIndex: 0,
      x: layerPoints[0][j][0],
      y0: baseY0,
      y: layerPoints[0][j][1] * ky
    });
    for (var i = 1; i < n; ++i) {
      baseY0 += layerPoints[i - 1][j][1] * ky;
      data.setItemLayout(layerSeries[i].indices[j], {
        layerIndex: i,
        x: layerPoints[i][j][0],
        y0: baseY0,
        y: layerPoints[i][j][1] * ky
      });
    }
  }
}
/**
 * Compute the baseLine of the rawdata
 * Inspired by Lee Byron's paper Stacked Graphs - Geometry & Aesthetics
 *
 * @param  data  the points in each layer
 */
function computeBaseline(data) {
  var layerNum = data.length;
  var pointNum = data[0].length;
  var sums = [];
  var y0 = [];
  var max = 0;
  for (var i = 0; i < pointNum; ++i) {
    var temp = 0;
    for (var j = 0; j < layerNum; ++j) {
      temp += data[j][i][1];
    }
    if (temp > max) {
      max = temp;
    }
    sums.push(temp);
  }
  for (var k = 0; k < pointNum; ++k) {
    y0[k] = (max - sums[k]) / 2;
  }
  max = 0;
  for (var l = 0; l < pointNum; ++l) {
    var sum = sums[l] + y0[l];
    if (sum > max) {
      max = sum;
    }
  }
  return {
    y0: y0,
    max: max
  };
}
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/processor/dataFilter.js
var dataFilter = __webpack_require__(47400);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/themeRiver/install.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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





function install(registers) {
  registers.registerChartView(themeRiver_ThemeRiverView);
  registers.registerSeriesModel(ThemeRiverSeries);
  registers.registerLayout(themeRiverLayout);
  registers.registerProcessor((0,dataFilter["default"])('themeRiver'));
}

}),
94806: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  install: function() { return /* binding */ install; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(12012);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(96585);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Group.js
var Group = __webpack_require__(58695);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/animation/basicTransition.js
var basicTransition = __webpack_require__(17524);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/BezierCurve.js
var BezierCurve = __webpack_require__(80330);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/innerStore.js
var innerStore = __webpack_require__(55413);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/Symbol.js
var Symbol = __webpack_require__(91971);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/layout.js
var util_layout = __webpack_require__(37624);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/tree/layoutHelper.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
* The tree layoutHelper implementation was originally copied from
* "d3.js"(https://github.com/d3/d3-hierarchy) with
* some modifications made for this project.
* (see more details in the comment of the specific method below.)
* The use of the source code of this file is also subject to the terms
* and consitions of the licence of "d3.js" (BSD-3Clause, see
* </licenses/LICENSE-d3>).
*/
/**
 * @file The layout algorithm of node-link tree diagrams. Here we using Reingold-Tilford algorithm to drawing
 *       the tree.
 */

/**
 * Initialize all computational message for following algorithm.
 */
function init(inRoot) {
  var root = inRoot;
  root.hierNode = {
    defaultAncestor: null,
    ancestor: root,
    prelim: 0,
    modifier: 0,
    change: 0,
    shift: 0,
    i: 0,
    thread: null
  };
  var nodes = [root];
  var node;
  var children;
  while (node = nodes.pop()) {
    // jshint ignore:line
    children = node.children;
    if (node.isExpand && children.length) {
      var n = children.length;
      for (var i = n - 1; i >= 0; i--) {
        var child = children[i];
        child.hierNode = {
          defaultAncestor: null,
          ancestor: child,
          prelim: 0,
          modifier: 0,
          change: 0,
          shift: 0,
          i: i,
          thread: null
        };
        nodes.push(child);
      }
    }
  }
}
/**
 * The implementation of this function was originally copied from "d3.js"
 * <https://github.com/d3/d3-hierarchy/blob/4c1f038f2725d6eae2e49b61d01456400694bac4/src/tree.js>
 * with some modifications made for this program.
 * See the license statement at the head of this file.
 *
 * Computes a preliminary x coordinate for node. Before that, this function is
 * applied recursively to the children of node, as well as the function
 * apportion(). After spacing out the children by calling executeShifts(), the
 * node is placed to the midpoint of its outermost children.
 */
function firstWalk(node, separation) {
  var children = node.isExpand ? node.children : [];
  var siblings = node.parentNode.children;
  var subtreeW = node.hierNode.i ? siblings[node.hierNode.i - 1] : null;
  if (children.length) {
    executeShifts(node);
    var midPoint = (children[0].hierNode.prelim + children[children.length - 1].hierNode.prelim) / 2;
    if (subtreeW) {
      node.hierNode.prelim = subtreeW.hierNode.prelim + separation(node, subtreeW);
      node.hierNode.modifier = node.hierNode.prelim - midPoint;
    } else {
      node.hierNode.prelim = midPoint;
    }
  } else if (subtreeW) {
    node.hierNode.prelim = subtreeW.hierNode.prelim + separation(node, subtreeW);
  }
  node.parentNode.hierNode.defaultAncestor = apportion(node, subtreeW, node.parentNode.hierNode.defaultAncestor || siblings[0], separation);
}
/**
 * The implementation of this function was originally copied from "d3.js"
 * <https://github.com/d3/d3-hierarchy/blob/4c1f038f2725d6eae2e49b61d01456400694bac4/src/tree.js>
 * with some modifications made for this program.
 * See the license statement at the head of this file.
 *
 * Computes all real x-coordinates by summing up the modifiers recursively.
 */
function secondWalk(node) {
  var nodeX = node.hierNode.prelim + node.parentNode.hierNode.modifier;
  node.setLayout({
    x: nodeX
  }, true);
  node.hierNode.modifier += node.parentNode.hierNode.modifier;
}
function layoutHelper_separation(cb) {
  return arguments.length ? cb : defaultSeparation;
}
/**
 * Transform the common coordinate to radial coordinate.
 */
function radialCoordinate(rad, r) {
  rad -= Math.PI / 2;
  return {
    x: r * Math.cos(rad),
    y: r * Math.sin(rad)
  };
}
/**
 * Get the layout position of the whole view.
 */
function getViewRect(seriesModel, api) {
  return util_layout.getLayoutRect(seriesModel.getBoxLayoutParams(), {
    width: api.getWidth(),
    height: api.getHeight()
  });
}
/**
 * All other shifts, applied to the smaller subtrees between w- and w+, are
 * performed by this function.
 *
 * The implementation of this function was originally copied from "d3.js"
 * <https://github.com/d3/d3-hierarchy/blob/4c1f038f2725d6eae2e49b61d01456400694bac4/src/tree.js>
 * with some modifications made for this program.
 * See the license statement at the head of this file.
 */
function executeShifts(node) {
  var children = node.children;
  var n = children.length;
  var shift = 0;
  var change = 0;
  while (--n >= 0) {
    var child = children[n];
    child.hierNode.prelim += shift;
    child.hierNode.modifier += shift;
    change += child.hierNode.change;
    shift += child.hierNode.shift + change;
  }
}
/**
 * The implementation of this function was originally copied from "d3.js"
 * <https://github.com/d3/d3-hierarchy/blob/4c1f038f2725d6eae2e49b61d01456400694bac4/src/tree.js>
 * with some modifications made for this program.
 * See the license statement at the head of this file.
 *
 * The core of the algorithm. Here, a new subtree is combined with the
 * previous subtrees. Threads are used to traverse the inside and outside
 * contours of the left and right subtree up to the highest common level.
 * Whenever two nodes of the inside contours conflict, we compute the left
 * one of the greatest uncommon ancestors using the function nextAncestor()
 * and call moveSubtree() to shift the subtree and prepare the shifts of
 * smaller subtrees. Finally, we add a new thread (if necessary).
 */
function apportion(subtreeV, subtreeW, ancestor, separation) {
  if (subtreeW) {
    var nodeOutRight = subtreeV;
    var nodeInRight = subtreeV;
    var nodeOutLeft = nodeInRight.parentNode.children[0];
    var nodeInLeft = subtreeW;
    var sumOutRight = nodeOutRight.hierNode.modifier;
    var sumInRight = nodeInRight.hierNode.modifier;
    var sumOutLeft = nodeOutLeft.hierNode.modifier;
    var sumInLeft = nodeInLeft.hierNode.modifier;
    while (nodeInLeft = nextRight(nodeInLeft), nodeInRight = nextLeft(nodeInRight), nodeInLeft && nodeInRight) {
      nodeOutRight = nextRight(nodeOutRight);
      nodeOutLeft = nextLeft(nodeOutLeft);
      nodeOutRight.hierNode.ancestor = subtreeV;
      var shift = nodeInLeft.hierNode.prelim + sumInLeft - nodeInRight.hierNode.prelim - sumInRight + separation(nodeInLeft, nodeInRight);
      if (shift > 0) {
        moveSubtree(nextAncestor(nodeInLeft, subtreeV, ancestor), subtreeV, shift);
        sumInRight += shift;
        sumOutRight += shift;
      }
      sumInLeft += nodeInLeft.hierNode.modifier;
      sumInRight += nodeInRight.hierNode.modifier;
      sumOutRight += nodeOutRight.hierNode.modifier;
      sumOutLeft += nodeOutLeft.hierNode.modifier;
    }
    if (nodeInLeft && !nextRight(nodeOutRight)) {
      nodeOutRight.hierNode.thread = nodeInLeft;
      nodeOutRight.hierNode.modifier += sumInLeft - sumOutRight;
    }
    if (nodeInRight && !nextLeft(nodeOutLeft)) {
      nodeOutLeft.hierNode.thread = nodeInRight;
      nodeOutLeft.hierNode.modifier += sumInRight - sumOutLeft;
      ancestor = subtreeV;
    }
  }
  return ancestor;
}
/**
 * This function is used to traverse the right contour of a subtree.
 * It returns the rightmost child of node or the thread of node. The function
 * returns null if and only if node is on the highest depth of its subtree.
 */
function nextRight(node) {
  var children = node.children;
  return children.length && node.isExpand ? children[children.length - 1] : node.hierNode.thread;
}
/**
 * This function is used to traverse the left contour of a subtree (or a subforest).
 * It returns the leftmost child of node or the thread of node. The function
 * returns null if and only if node is on the highest depth of its subtree.
 */
function nextLeft(node) {
  var children = node.children;
  return children.length && node.isExpand ? children[0] : node.hierNode.thread;
}
/**
 * If nodeInLeft’s ancestor is a sibling of node, returns nodeInLeft’s ancestor.
 * Otherwise, returns the specified ancestor.
 */
function nextAncestor(nodeInLeft, node, ancestor) {
  return nodeInLeft.hierNode.ancestor.parentNode === node.parentNode ? nodeInLeft.hierNode.ancestor : ancestor;
}
/**
 * The implementation of this function was originally copied from "d3.js"
 * <https://github.com/d3/d3-hierarchy/blob/4c1f038f2725d6eae2e49b61d01456400694bac4/src/tree.js>
 * with some modifications made for this program.
 * See the license statement at the head of this file.
 *
 * Shifts the current subtree rooted at wr.
 * This is done by increasing prelim(w+) and modifier(w+) by shift.
 */
function moveSubtree(wl, wr, shift) {
  var change = shift / (wr.hierNode.i - wl.hierNode.i);
  wr.hierNode.change -= change;
  wr.hierNode.shift += shift;
  wr.hierNode.modifier += shift;
  wr.hierNode.prelim += shift;
  wl.hierNode.change += change;
}
/**
 * The implementation of this function was originally copied from "d3.js"
 * <https://github.com/d3/d3-hierarchy/blob/4c1f038f2725d6eae2e49b61d01456400694bac4/src/tree.js>
 * with some modifications made for this program.
 * See the license statement at the head of this file.
 */
function defaultSeparation(node1, node2) {
  return node1.parentNode === node2.parentNode ? 1 : 2;
}
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/bbox.js
var bbox = __webpack_require__(71274);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/View.js
var View = __webpack_require__(65743);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/helper/roamHelper.js
var roamHelper = __webpack_require__(72172);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/helper/RoamController.js
var RoamController = __webpack_require__(82342);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/helper/cursorHelper.js
var cursorHelper = __webpack_require__(39419);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(81731);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/view/Chart.js
var Chart = __webpack_require__(47389);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Path.js + 3 modules
var Path = __webpack_require__(49678);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/states.js
var states = __webpack_require__(63344);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/tree/TreeView.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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















var TreeView_TreeEdgeShape = /** @class */function () {
  function TreeEdgeShape() {
    this.parentPoint = [];
    this.childPoints = [];
  }
  return TreeEdgeShape;
}();
var TreeView_TreePath = /** @class */function (_super) {
  (0,tslib_es6.__extends)(TreePath, _super);
  function TreePath(opts) {
    return _super.call(this, opts) || this;
  }
  TreePath.prototype.getDefaultStyle = function () {
    return {
      stroke: '#000',
      fill: null
    };
  };
  TreePath.prototype.getDefaultShape = function () {
    return new TreeView_TreeEdgeShape();
  };
  TreePath.prototype.buildPath = function (ctx, shape) {
    var childPoints = shape.childPoints;
    var childLen = childPoints.length;
    var parentPoint = shape.parentPoint;
    var firstChildPos = childPoints[0];
    var lastChildPos = childPoints[childLen - 1];
    if (childLen === 1) {
      ctx.moveTo(parentPoint[0], parentPoint[1]);
      ctx.lineTo(firstChildPos[0], firstChildPos[1]);
      return;
    }
    var orient = shape.orient;
    var forkDim = orient === 'TB' || orient === 'BT' ? 0 : 1;
    var otherDim = 1 - forkDim;
    var forkPosition = (0,number.parsePercent)(shape.forkPosition, 1);
    var tmpPoint = [];
    tmpPoint[forkDim] = parentPoint[forkDim];
    tmpPoint[otherDim] = parentPoint[otherDim] + (lastChildPos[otherDim] - parentPoint[otherDim]) * forkPosition;
    ctx.moveTo(parentPoint[0], parentPoint[1]);
    ctx.lineTo(tmpPoint[0], tmpPoint[1]);
    ctx.moveTo(firstChildPos[0], firstChildPos[1]);
    tmpPoint[forkDim] = firstChildPos[forkDim];
    ctx.lineTo(tmpPoint[0], tmpPoint[1]);
    tmpPoint[forkDim] = lastChildPos[forkDim];
    ctx.lineTo(tmpPoint[0], tmpPoint[1]);
    ctx.lineTo(lastChildPos[0], lastChildPos[1]);
    for (var i = 1; i < childLen - 1; i++) {
      var point = childPoints[i];
      ctx.moveTo(point[0], point[1]);
      tmpPoint[forkDim] = point[forkDim];
      ctx.lineTo(tmpPoint[0], tmpPoint[1]);
    }
  };
  return TreePath;
}(Path["default"]);
var TreeView_TreeView = /** @class */function (_super) {
  (0,tslib_es6.__extends)(TreeView, _super);
  function TreeView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = TreeView.type;
    _this._mainGroup = new Group["default"]();
    return _this;
  }
  TreeView.prototype.init = function (ecModel, api) {
    this._controller = new RoamController["default"](api.getZr());
    this._controllerHost = {
      target: this.group
    };
    this.group.add(this._mainGroup);
  };
  TreeView.prototype.render = function (seriesModel, ecModel, api) {
    var data = seriesModel.getData();
    var layoutInfo = seriesModel.layoutInfo;
    var group = this._mainGroup;
    var layout = seriesModel.get('layout');
    if (layout === 'radial') {
      group.x = layoutInfo.x + layoutInfo.width / 2;
      group.y = layoutInfo.y + layoutInfo.height / 2;
    } else {
      group.x = layoutInfo.x;
      group.y = layoutInfo.y;
    }
    this._updateViewCoordSys(seriesModel, api);
    this._updateController(seriesModel, ecModel, api);
    var oldData = this._data;
    data.diff(oldData).add(function (newIdx) {
      if (symbolNeedsDraw(data, newIdx)) {
        // Create node and edge
        updateNode(data, newIdx, null, group, seriesModel);
      }
    }).update(function (newIdx, oldIdx) {
      var symbolEl = oldData.getItemGraphicEl(oldIdx);
      if (!symbolNeedsDraw(data, newIdx)) {
        symbolEl && removeNode(oldData, oldIdx, symbolEl, group, seriesModel);
        return;
      }
      // Update node and edge
      updateNode(data, newIdx, symbolEl, group, seriesModel);
    }).remove(function (oldIdx) {
      var symbolEl = oldData.getItemGraphicEl(oldIdx);
      // When remove a collapsed node of subtree, since the collapsed
      // node haven't been initialized with a symbol element,
      // you can't found it's symbol element through index.
      // so if we want to remove the symbol element we should insure
      // that the symbol element is not null.
      if (symbolEl) {
        removeNode(oldData, oldIdx, symbolEl, group, seriesModel);
      }
    }).execute();
    this._nodeScaleRatio = seriesModel.get('nodeScaleRatio');
    this._updateNodeAndLinkScale(seriesModel);
    if (seriesModel.get('expandAndCollapse') === true) {
      data.eachItemGraphicEl(function (el, dataIndex) {
        el.off('click').on('click', function () {
          api.dispatchAction({
            type: 'treeExpandAndCollapse',
            seriesId: seriesModel.id,
            dataIndex: dataIndex
          });
        });
      });
    }
    this._data = data;
  };
  TreeView.prototype._updateViewCoordSys = function (seriesModel, api) {
    var data = seriesModel.getData();
    var points = [];
    data.each(function (idx) {
      var layout = data.getItemLayout(idx);
      if (layout && !isNaN(layout.x) && !isNaN(layout.y)) {
        points.push([+layout.x, +layout.y]);
      }
    });
    var min = [];
    var max = [];
    bbox.fromPoints(points, min, max);
    // If don't Store min max when collapse the root node after roam,
    // the root node will disappear.
    var oldMin = this._min;
    var oldMax = this._max;
    // If width or height is 0
    if (max[0] - min[0] === 0) {
      min[0] = oldMin ? oldMin[0] : min[0] - 1;
      max[0] = oldMax ? oldMax[0] : max[0] + 1;
    }
    if (max[1] - min[1] === 0) {
      min[1] = oldMin ? oldMin[1] : min[1] - 1;
      max[1] = oldMax ? oldMax[1] : max[1] + 1;
    }
    var viewCoordSys = seriesModel.coordinateSystem = new View["default"]();
    viewCoordSys.zoomLimit = seriesModel.get('scaleLimit');
    viewCoordSys.setBoundingRect(min[0], min[1], max[0] - min[0], max[1] - min[1]);
    viewCoordSys.setCenter(seriesModel.get('center'), api);
    viewCoordSys.setZoom(seriesModel.get('zoom'));
    // Here we use viewCoordSys just for computing the 'position' and 'scale' of the group
    this.group.attr({
      x: viewCoordSys.x,
      y: viewCoordSys.y,
      scaleX: viewCoordSys.scaleX,
      scaleY: viewCoordSys.scaleY
    });
    this._min = min;
    this._max = max;
  };
  TreeView.prototype._updateController = function (seriesModel, ecModel, api) {
    var _this = this;
    var controller = this._controller;
    var controllerHost = this._controllerHost;
    var group = this.group;
    controller.setPointerChecker(function (e, x, y) {
      var rect = group.getBoundingRect();
      rect.applyTransform(group.transform);
      return rect.contain(x, y) && !(0,cursorHelper.onIrrelevantElement)(e, api, seriesModel);
    });
    controller.enable(seriesModel.get('roam'));
    controllerHost.zoomLimit = seriesModel.get('scaleLimit');
    controllerHost.zoom = seriesModel.coordinateSystem.getZoom();
    controller.off('pan').off('zoom').on('pan', function (e) {
      roamHelper.updateViewOnPan(controllerHost, e.dx, e.dy);
      api.dispatchAction({
        seriesId: seriesModel.id,
        type: 'treeRoam',
        dx: e.dx,
        dy: e.dy
      });
    }).on('zoom', function (e) {
      roamHelper.updateViewOnZoom(controllerHost, e.scale, e.originX, e.originY);
      api.dispatchAction({
        seriesId: seriesModel.id,
        type: 'treeRoam',
        zoom: e.scale,
        originX: e.originX,
        originY: e.originY
      });
      _this._updateNodeAndLinkScale(seriesModel);
      // Only update label layout on zoom
      api.updateLabelLayout();
    });
  };
  TreeView.prototype._updateNodeAndLinkScale = function (seriesModel) {
    var data = seriesModel.getData();
    var nodeScale = this._getNodeGlobalScale(seriesModel);
    data.eachItemGraphicEl(function (el, idx) {
      el.setSymbolScale(nodeScale);
    });
  };
  TreeView.prototype._getNodeGlobalScale = function (seriesModel) {
    var coordSys = seriesModel.coordinateSystem;
    if (coordSys.type !== 'view') {
      return 1;
    }
    var nodeScaleRatio = this._nodeScaleRatio;
    var groupZoom = coordSys.scaleX || 1;
    // Scale node when zoom changes
    var roamZoom = coordSys.getZoom();
    var nodeScale = (roamZoom - 1) * nodeScaleRatio + 1;
    return nodeScale / groupZoom;
  };
  TreeView.prototype.dispose = function () {
    this._controller && this._controller.dispose();
    this._controllerHost = null;
  };
  TreeView.prototype.remove = function () {
    this._mainGroup.removeAll();
    this._data = null;
  };
  TreeView.type = 'tree';
  return TreeView;
}(Chart["default"]);
function symbolNeedsDraw(data, dataIndex) {
  var layout = data.getItemLayout(dataIndex);
  return layout && !isNaN(layout.x) && !isNaN(layout.y);
}
function updateNode(data, dataIndex, symbolEl, group, seriesModel) {
  var isInit = !symbolEl;
  var node = data.tree.getNodeByDataIndex(dataIndex);
  var itemModel = node.getModel();
  var visualColor = node.getVisual('style').fill;
  var symbolInnerColor = node.isExpand === false && node.children.length !== 0 ? visualColor : '#fff';
  var virtualRoot = data.tree.root;
  var source = node.parentNode === virtualRoot ? node : node.parentNode || node;
  var sourceSymbolEl = data.getItemGraphicEl(source.dataIndex);
  var sourceLayout = source.getLayout();
  var sourceOldLayout = sourceSymbolEl ? {
    x: sourceSymbolEl.__oldX,
    y: sourceSymbolEl.__oldY,
    rawX: sourceSymbolEl.__radialOldRawX,
    rawY: sourceSymbolEl.__radialOldRawY
  } : sourceLayout;
  var targetLayout = node.getLayout();
  if (isInit) {
    symbolEl = new Symbol["default"](data, dataIndex, null, {
      symbolInnerColor: symbolInnerColor,
      useNameLabel: true
    });
    symbolEl.x = sourceOldLayout.x;
    symbolEl.y = sourceOldLayout.y;
  } else {
    symbolEl.updateData(data, dataIndex, null, {
      symbolInnerColor: symbolInnerColor,
      useNameLabel: true
    });
  }
  symbolEl.__radialOldRawX = symbolEl.__radialRawX;
  symbolEl.__radialOldRawY = symbolEl.__radialRawY;
  symbolEl.__radialRawX = targetLayout.rawX;
  symbolEl.__radialRawY = targetLayout.rawY;
  group.add(symbolEl);
  data.setItemGraphicEl(dataIndex, symbolEl);
  symbolEl.__oldX = symbolEl.x;
  symbolEl.__oldY = symbolEl.y;
  basicTransition.updateProps(symbolEl, {
    x: targetLayout.x,
    y: targetLayout.y
  }, seriesModel);
  var symbolPath = symbolEl.getSymbolPath();
  if (seriesModel.get('layout') === 'radial') {
    var realRoot = virtualRoot.children[0];
    var rootLayout = realRoot.getLayout();
    var length_1 = realRoot.children.length;
    var rad = void 0;
    var isLeft = void 0;
    if (targetLayout.x === rootLayout.x && node.isExpand === true && realRoot.children.length) {
      var center = {
        x: (realRoot.children[0].getLayout().x + realRoot.children[length_1 - 1].getLayout().x) / 2,
        y: (realRoot.children[0].getLayout().y + realRoot.children[length_1 - 1].getLayout().y) / 2
      };
      rad = Math.atan2(center.y - rootLayout.y, center.x - rootLayout.x);
      if (rad < 0) {
        rad = Math.PI * 2 + rad;
      }
      isLeft = center.x < rootLayout.x;
      if (isLeft) {
        rad = rad - Math.PI;
      }
    } else {
      rad = Math.atan2(targetLayout.y - rootLayout.y, targetLayout.x - rootLayout.x);
      if (rad < 0) {
        rad = Math.PI * 2 + rad;
      }
      if (node.children.length === 0 || node.children.length !== 0 && node.isExpand === false) {
        isLeft = targetLayout.x < rootLayout.x;
        if (isLeft) {
          rad = rad - Math.PI;
        }
      } else {
        isLeft = targetLayout.x > rootLayout.x;
        if (!isLeft) {
          rad = rad - Math.PI;
        }
      }
    }
    var textPosition = isLeft ? 'left' : 'right';
    var normalLabelModel = itemModel.getModel('label');
    var rotate = normalLabelModel.get('rotate');
    var labelRotateRadian = rotate * (Math.PI / 180);
    var textContent = symbolPath.getTextContent();
    if (textContent) {
      symbolPath.setTextConfig({
        position: normalLabelModel.get('position') || textPosition,
        rotation: rotate == null ? -rad : labelRotateRadian,
        origin: 'center'
      });
      textContent.setStyle('verticalAlign', 'middle');
    }
  }
  // Handle status
  var focus = itemModel.get(['emphasis', 'focus']);
  var focusDataIndices = focus === 'relative' ? util.concatArray(node.getAncestorsIndices(), node.getDescendantIndices()) : focus === 'ancestor' ? node.getAncestorsIndices() : focus === 'descendant' ? node.getDescendantIndices() : null;
  if (focusDataIndices) {
    // Modify the focus to data indices.
    (0,innerStore.getECData)(symbolEl).focus = focusDataIndices;
  }
  drawEdge(seriesModel, node, virtualRoot, symbolEl, sourceOldLayout, sourceLayout, targetLayout, group);
  if (symbolEl.__edge) {
    symbolEl.onHoverStateChange = function (toState) {
      if (toState !== 'blur') {
        // NOTE: Ensure the parent elements will been blurred firstly.
        // According to the return of getAncestorsIndices and getDescendantIndices
        // TODO: A bit tricky.
        var parentEl = node.parentNode && data.getItemGraphicEl(node.parentNode.dataIndex);
        if (!(parentEl && parentEl.hoverState === states.HOVER_STATE_BLUR)) {
          (0,states.setStatesFlag)(symbolEl.__edge, toState);
        }
      }
    };
  }
}
function drawEdge(seriesModel, node, virtualRoot, symbolEl, sourceOldLayout, sourceLayout, targetLayout, group) {
  var itemModel = node.getModel();
  var edgeShape = seriesModel.get('edgeShape');
  var layout = seriesModel.get('layout');
  var orient = seriesModel.getOrient();
  var curvature = seriesModel.get(['lineStyle', 'curveness']);
  var edgeForkPosition = seriesModel.get('edgeForkPosition');
  var lineStyle = itemModel.getModel('lineStyle').getLineStyle();
  var edge = symbolEl.__edge;
  // curve edge from node -> parent
  // polyline edge from node -> children
  if (edgeShape === 'curve') {
    if (node.parentNode && node.parentNode !== virtualRoot) {
      if (!edge) {
        edge = symbolEl.__edge = new BezierCurve["default"]({
          shape: getEdgeShape(layout, orient, curvature, sourceOldLayout, sourceOldLayout)
        });
      }
      basicTransition.updateProps(edge, {
        shape: getEdgeShape(layout, orient, curvature, sourceLayout, targetLayout)
      }, seriesModel);
    }
  } else if (edgeShape === 'polyline') {
    if (layout === 'orthogonal') {
      if (node !== virtualRoot && node.children && node.children.length !== 0 && node.isExpand === true) {
        var children = node.children;
        var childPoints = [];
        for (var i = 0; i < children.length; i++) {
          var childLayout = children[i].getLayout();
          childPoints.push([childLayout.x, childLayout.y]);
        }
        if (!edge) {
          edge = symbolEl.__edge = new TreeView_TreePath({
            shape: {
              parentPoint: [targetLayout.x, targetLayout.y],
              childPoints: [[targetLayout.x, targetLayout.y]],
              orient: orient,
              forkPosition: edgeForkPosition
            }
          });
        }
        basicTransition.updateProps(edge, {
          shape: {
            parentPoint: [targetLayout.x, targetLayout.y],
            childPoints: childPoints
          }
        }, seriesModel);
      }
    } else {
      if (false) {}
    }
  }
  // show all edge when edgeShape is 'curve', filter node `isExpand` is false when edgeShape is 'polyline'
  if (edge && !(edgeShape === 'polyline' && !node.isExpand)) {
    edge.useStyle(util.defaults({
      strokeNoScale: true,
      fill: null
    }, lineStyle));
    (0,states.setStatesStylesFromModel)(edge, itemModel, 'lineStyle');
    (0,states.setDefaultStateProxy)(edge);
    group.add(edge);
  }
}
function removeNodeEdge(node, data, group, seriesModel, removeAnimationOpt) {
  var virtualRoot = data.tree.root;
  var _a = getSourceNode(virtualRoot, node),
    source = _a.source,
    sourceLayout = _a.sourceLayout;
  var symbolEl = data.getItemGraphicEl(node.dataIndex);
  if (!symbolEl) {
    return;
  }
  var sourceSymbolEl = data.getItemGraphicEl(source.dataIndex);
  var sourceEdge = sourceSymbolEl.__edge;
  // 1. when expand the sub tree, delete the children node should delete the edge of
  // the source at the same time. because the polyline edge shape is only owned by the source.
  // 2.when the node is the only children of the source, delete the node should delete the edge of
  // the source at the same time. the same reason as above.
  var edge = symbolEl.__edge || (source.isExpand === false || source.children.length === 1 ? sourceEdge : undefined);
  var edgeShape = seriesModel.get('edgeShape');
  var layoutOpt = seriesModel.get('layout');
  var orient = seriesModel.get('orient');
  var curvature = seriesModel.get(['lineStyle', 'curveness']);
  if (edge) {
    if (edgeShape === 'curve') {
      basicTransition.removeElement(edge, {
        shape: getEdgeShape(layoutOpt, orient, curvature, sourceLayout, sourceLayout),
        style: {
          opacity: 0
        }
      }, seriesModel, {
        cb: function () {
          group.remove(edge);
        },
        removeOpt: removeAnimationOpt
      });
    } else if (edgeShape === 'polyline' && seriesModel.get('layout') === 'orthogonal') {
      basicTransition.removeElement(edge, {
        shape: {
          parentPoint: [sourceLayout.x, sourceLayout.y],
          childPoints: [[sourceLayout.x, sourceLayout.y]]
        },
        style: {
          opacity: 0
        }
      }, seriesModel, {
        cb: function () {
          group.remove(edge);
        },
        removeOpt: removeAnimationOpt
      });
    }
  }
}
function getSourceNode(virtualRoot, node) {
  var source = node.parentNode === virtualRoot ? node : node.parentNode || node;
  var sourceLayout;
  while (sourceLayout = source.getLayout(), sourceLayout == null) {
    source = source.parentNode === virtualRoot ? source : source.parentNode || source;
  }
  return {
    source: source,
    sourceLayout: sourceLayout
  };
}
function removeNode(data, dataIndex, symbolEl, group, seriesModel) {
  var node = data.tree.getNodeByDataIndex(dataIndex);
  var virtualRoot = data.tree.root;
  var sourceLayout = getSourceNode(virtualRoot, node).sourceLayout;
  // Use same duration and easing with update to have more consistent animation.
  var removeAnimationOpt = {
    duration: seriesModel.get('animationDurationUpdate'),
    easing: seriesModel.get('animationEasingUpdate')
  };
  basicTransition.removeElement(symbolEl, {
    x: sourceLayout.x + 1,
    y: sourceLayout.y + 1
  }, seriesModel, {
    cb: function () {
      group.remove(symbolEl);
      data.setItemGraphicEl(dataIndex, null);
    },
    removeOpt: removeAnimationOpt
  });
  symbolEl.fadeOut(null, data.hostModel, {
    fadeLabel: true,
    animation: removeAnimationOpt
  });
  // remove edge as parent node
  node.children.forEach(function (childNode) {
    removeNodeEdge(childNode, data, group, seriesModel, removeAnimationOpt);
  });
  // remove edge as child node
  removeNodeEdge(node, data, group, seriesModel, removeAnimationOpt);
}
function getEdgeShape(layoutOpt, orient, curvature, sourceLayout, targetLayout) {
  var cpx1;
  var cpy1;
  var cpx2;
  var cpy2;
  var x1;
  var x2;
  var y1;
  var y2;
  if (layoutOpt === 'radial') {
    x1 = sourceLayout.rawX;
    y1 = sourceLayout.rawY;
    x2 = targetLayout.rawX;
    y2 = targetLayout.rawY;
    var radialCoor1 = radialCoordinate(x1, y1);
    var radialCoor2 = radialCoordinate(x1, y1 + (y2 - y1) * curvature);
    var radialCoor3 = radialCoordinate(x2, y2 + (y1 - y2) * curvature);
    var radialCoor4 = radialCoordinate(x2, y2);
    return {
      x1: radialCoor1.x || 0,
      y1: radialCoor1.y || 0,
      x2: radialCoor4.x || 0,
      y2: radialCoor4.y || 0,
      cpx1: radialCoor2.x || 0,
      cpy1: radialCoor2.y || 0,
      cpx2: radialCoor3.x || 0,
      cpy2: radialCoor3.y || 0
    };
  } else {
    x1 = sourceLayout.x;
    y1 = sourceLayout.y;
    x2 = targetLayout.x;
    y2 = targetLayout.y;
    if (orient === 'LR' || orient === 'RL') {
      cpx1 = x1 + (x2 - x1) * curvature;
      cpy1 = y1;
      cpx2 = x2 + (x1 - x2) * curvature;
      cpy2 = y2;
    }
    if (orient === 'TB' || orient === 'BT') {
      cpx1 = x1;
      cpy1 = y1 + (y2 - y1) * curvature;
      cpx2 = x2;
      cpy2 = y2 + (y1 - y2) * curvature;
    }
  }
  return {
    x1: x1,
    y1: y1,
    x2: x2,
    y2: y2,
    cpx1: cpx1,
    cpy1: cpy1,
    cpx2: cpx2,
    cpy2: cpy2
  };
}
/* ESM default export */ var tree_TreeView = (TreeView_TreeView);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Series.js
var Series = __webpack_require__(48134);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/data/Tree.js
var Tree = __webpack_require__(19079);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Model.js + 2 modules
var Model = __webpack_require__(84456);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/tooltip/tooltipMarkup.js
var tooltipMarkup = __webpack_require__(13134);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/treeHelper.js
var treeHelper = __webpack_require__(12438);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/tree/TreeSeries.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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






var TreeSeries_TreeSeriesModel = /** @class */function (_super) {
  (0,tslib_es6.__extends)(TreeSeriesModel, _super);
  function TreeSeriesModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.hasSymbolVisual = true;
    // Do it self.
    _this.ignoreStyleOnData = true;
    return _this;
  }
  /**
   * Init a tree data structure from data in option series
   */
  TreeSeriesModel.prototype.getInitialData = function (option) {
    // create a virtual root
    var root = {
      name: option.name,
      children: option.data
    };
    var leaves = option.leaves || {};
    var leavesModel = new Model["default"](leaves, this, this.ecModel);
    var tree = Tree["default"].createTree(root, this, beforeLink);
    function beforeLink(nodeData) {
      nodeData.wrapMethod('getItemModel', function (model, idx) {
        var node = tree.getNodeByDataIndex(idx);
        if (!(node && node.children.length && node.isExpand)) {
          model.parentModel = leavesModel;
        }
        return model;
      });
    }
    var treeDepth = 0;
    tree.eachNode('preorder', function (node) {
      if (node.depth > treeDepth) {
        treeDepth = node.depth;
      }
    });
    var expandAndCollapse = option.expandAndCollapse;
    var expandTreeDepth = expandAndCollapse && option.initialTreeDepth >= 0 ? option.initialTreeDepth : treeDepth;
    tree.root.eachNode('preorder', function (node) {
      var item = node.hostTree.data.getRawDataItem(node.dataIndex);
      // Add item.collapsed != null, because users can collapse node original in the series.data.
      node.isExpand = item && item.collapsed != null ? !item.collapsed : node.depth <= expandTreeDepth;
    });
    return tree.data;
  };
  /**
   * Make the configuration 'orient' backward compatibly, with 'horizontal = LR', 'vertical = TB'.
   * @returns {string} orient
   */
  TreeSeriesModel.prototype.getOrient = function () {
    var orient = this.get('orient');
    if (orient === 'horizontal') {
      orient = 'LR';
    } else if (orient === 'vertical') {
      orient = 'TB';
    }
    return orient;
  };
  TreeSeriesModel.prototype.setZoom = function (zoom) {
    this.option.zoom = zoom;
  };
  TreeSeriesModel.prototype.setCenter = function (center) {
    this.option.center = center;
  };
  TreeSeriesModel.prototype.formatTooltip = function (dataIndex, multipleSeries, dataType) {
    var tree = this.getData().tree;
    var realRoot = tree.root.children[0];
    var node = tree.getNodeByDataIndex(dataIndex);
    var value = node.getValue();
    var name = node.name;
    while (node && node !== realRoot) {
      name = node.parentNode.name + '.' + name;
      node = node.parentNode;
    }
    return (0,tooltipMarkup.createTooltipMarkup)('nameValue', {
      name: name,
      value: value,
      noValue: isNaN(value) || value == null
    });
  };
  // Add tree path to tooltip param
  TreeSeriesModel.prototype.getDataParams = function (dataIndex) {
    var params = _super.prototype.getDataParams.apply(this, arguments);
    var node = this.getData().tree.getNodeByDataIndex(dataIndex);
    params.treeAncestors = (0,treeHelper.wrapTreePathInfo)(node, this);
    params.collapsed = !node.isExpand;
    return params;
  };
  TreeSeriesModel.type = 'series.tree';
  // can support the position parameters 'left', 'top','right','bottom', 'width',
  // 'height' in the setOption() with 'merge' mode normal.
  TreeSeriesModel.layoutMode = 'box';
  TreeSeriesModel.defaultOption = {
    // zlevel: 0,
    z: 2,
    coordinateSystem: 'view',
    // the position of the whole view
    left: '12%',
    top: '12%',
    right: '12%',
    bottom: '12%',
    // the layout of the tree, two value can be selected, 'orthogonal' or 'radial'
    layout: 'orthogonal',
    // value can be 'polyline'
    edgeShape: 'curve',
    edgeForkPosition: '50%',
    // true | false | 'move' | 'scale', see module:component/helper/RoamController.
    roam: false,
    // Symbol size scale ratio in roam
    nodeScaleRatio: 0.4,
    // Default on center of graph
    center: null,
    zoom: 1,
    orient: 'LR',
    symbol: 'emptyCircle',
    symbolSize: 7,
    expandAndCollapse: true,
    initialTreeDepth: 2,
    lineStyle: {
      color: '#ccc',
      width: 1.5,
      curveness: 0.5
    },
    itemStyle: {
      color: 'lightsteelblue',
      // borderColor: '#c23531',
      borderWidth: 1.5
    },
    label: {
      show: true
    },
    animationEasing: 'linear',
    animationDuration: 700,
    animationDurationUpdate: 500
  };
  return TreeSeriesModel;
}(Series["default"]);
/* ESM default export */ var TreeSeries = (TreeSeries_TreeSeriesModel);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/tree/traversalHelper.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
 * Traverse the tree from bottom to top and do something
 */
function eachAfter(root, callback, separation) {
  var nodes = [root];
  var next = [];
  var node;
  while (node = nodes.pop()) {
    // jshint ignore:line
    next.push(node);
    if (node.isExpand) {
      var children = node.children;
      if (children.length) {
        for (var i = 0; i < children.length; i++) {
          nodes.push(children[i]);
        }
      }
    }
  }
  while (node = next.pop()) {
    // jshint ignore:line
    callback(node, separation);
  }
}
/**
 * Traverse the tree from top to bottom and do something
 */
function eachBefore(root, callback) {
  var nodes = [root];
  var node;
  while (node = nodes.pop()) {
    // jshint ignore:line
    callback(node);
    if (node.isExpand) {
      var children = node.children;
      if (children.length) {
        for (var i = children.length - 1; i >= 0; i--) {
          nodes.push(children[i]);
        }
      }
    }
  }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/tree/treeLayout.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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


function treeLayout(ecModel, api) {
  ecModel.eachSeriesByType('tree', function (seriesModel) {
    commonLayout(seriesModel, api);
  });
}
function commonLayout(seriesModel, api) {
  var layoutInfo = getViewRect(seriesModel, api);
  seriesModel.layoutInfo = layoutInfo;
  var layout = seriesModel.get('layout');
  var width = 0;
  var height = 0;
  var separation = null;
  if (layout === 'radial') {
    width = 2 * Math.PI;
    height = Math.min(layoutInfo.height, layoutInfo.width) / 2;
    separation = layoutHelper_separation(function (node1, node2) {
      return (node1.parentNode === node2.parentNode ? 1 : 2) / node1.depth;
    });
  } else {
    width = layoutInfo.width;
    height = layoutInfo.height;
    separation = layoutHelper_separation();
  }
  var virtualRoot = seriesModel.getData().tree.root;
  var realRoot = virtualRoot.children[0];
  if (realRoot) {
    init(virtualRoot);
    eachAfter(realRoot, firstWalk, separation);
    virtualRoot.hierNode.modifier = -realRoot.hierNode.prelim;
    eachBefore(realRoot, secondWalk);
    var left_1 = realRoot;
    var right_1 = realRoot;
    var bottom_1 = realRoot;
    eachBefore(realRoot, function (node) {
      var x = node.getLayout().x;
      if (x < left_1.getLayout().x) {
        left_1 = node;
      }
      if (x > right_1.getLayout().x) {
        right_1 = node;
      }
      if (node.depth > bottom_1.depth) {
        bottom_1 = node;
      }
    });
    var delta = left_1 === right_1 ? 1 : separation(left_1, right_1) / 2;
    var tx_1 = delta - left_1.getLayout().x;
    var kx_1 = 0;
    var ky_1 = 0;
    var coorX_1 = 0;
    var coorY_1 = 0;
    if (layout === 'radial') {
      kx_1 = width / (right_1.getLayout().x + delta + tx_1);
      // here we use (node.depth - 1), bucause the real root's depth is 1
      ky_1 = height / (bottom_1.depth - 1 || 1);
      eachBefore(realRoot, function (node) {
        coorX_1 = (node.getLayout().x + tx_1) * kx_1;
        coorY_1 = (node.depth - 1) * ky_1;
        var finalCoor = radialCoordinate(coorX_1, coorY_1);
        node.setLayout({
          x: finalCoor.x,
          y: finalCoor.y,
          rawX: coorX_1,
          rawY: coorY_1
        }, true);
      });
    } else {
      var orient_1 = seriesModel.getOrient();
      if (orient_1 === 'RL' || orient_1 === 'LR') {
        ky_1 = height / (right_1.getLayout().x + delta + tx_1);
        kx_1 = width / (bottom_1.depth - 1 || 1);
        eachBefore(realRoot, function (node) {
          coorY_1 = (node.getLayout().x + tx_1) * ky_1;
          coorX_1 = orient_1 === 'LR' ? (node.depth - 1) * kx_1 : width - (node.depth - 1) * kx_1;
          node.setLayout({
            x: coorX_1,
            y: coorY_1
          }, true);
        });
      } else if (orient_1 === 'TB' || orient_1 === 'BT') {
        kx_1 = width / (right_1.getLayout().x + delta + tx_1);
        ky_1 = height / (bottom_1.depth - 1 || 1);
        eachBefore(realRoot, function (node) {
          coorX_1 = (node.getLayout().x + tx_1) * kx_1;
          coorY_1 = orient_1 === 'TB' ? (node.depth - 1) * ky_1 : height - (node.depth - 1) * ky_1;
          node.setLayout({
            x: coorX_1,
            y: coorY_1
          }, true);
        });
      }
    }
  }
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/tree/treeVisual.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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

function treeVisual(ecModel) {
  ecModel.eachSeriesByType('tree', function (seriesModel) {
    var data = seriesModel.getData();
    var tree = data.tree;
    tree.eachNode(function (node) {
      var model = node.getModel();
      // TODO Optimize
      var style = model.getModel('itemStyle').getItemStyle();
      var existsStyle = data.ensureUniqueItemVisual(node.dataIndex, 'style');
      (0,util.extend)(existsStyle, style);
    });
  });
}
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/action/roamHelper.js
var action_roamHelper = __webpack_require__(22609);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/tree/treeAction.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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

function installTreeAction(registers) {
  registers.registerAction({
    type: 'treeExpandAndCollapse',
    event: 'treeExpandAndCollapse',
    update: 'update'
  }, function (payload, ecModel) {
    ecModel.eachComponent({
      mainType: 'series',
      subType: 'tree',
      query: payload
    }, function (seriesModel) {
      var dataIndex = payload.dataIndex;
      var tree = seriesModel.getData().tree;
      var node = tree.getNodeByDataIndex(dataIndex);
      node.isExpand = !node.isExpand;
    });
  });
  registers.registerAction({
    type: 'treeRoam',
    event: 'treeRoam',
    // Here we set 'none' instead of 'update', because roam action
    // just need to update the transform matrix without having to recalculate
    // the layout. So don't need to go through the whole update process, such
    // as 'dataPrcocess', 'coordSystemUpdate', 'layout' and so on.
    update: 'none'
  }, function (payload, ecModel, api) {
    ecModel.eachComponent({
      mainType: 'series',
      subType: 'tree',
      query: payload
    }, function (seriesModel) {
      var coordSys = seriesModel.coordinateSystem;
      var res = (0,action_roamHelper.updateCenterAndZoom)(coordSys, payload, undefined, api);
      seriesModel.setCenter && seriesModel.setCenter(res.center);
      seriesModel.setZoom && seriesModel.setZoom(res.zoom);
    });
  });
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/tree/install.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  registers.registerChartView(tree_TreeView);
  registers.registerSeriesModel(TreeSeries);
  registers.registerLayout(treeLayout);
  registers.registerVisual(treeVisual);
  installTreeAction(registers);
}

}),
79277: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  install: function() { return /* binding */ install; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/treeHelper.js
var treeHelper = __webpack_require__(12438);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(96585);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/treemap/treemapAction.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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


var actionTypes = ['treemapZoomToNode', 'treemapRender', 'treemapMove'];
function installTreemapAction(registers) {
  for (var i = 0; i < actionTypes.length; i++) {
    registers.registerAction({
      type: actionTypes[i],
      update: 'updateView'
    }, util.noop);
  }
  registers.registerAction({
    type: 'treemapRootToNode',
    update: 'updateView'
  }, function (payload, ecModel) {
    ecModel.eachComponent({
      mainType: 'series',
      subType: 'treemap',
      query: payload
    }, handleRootToNode);
    function handleRootToNode(model, index) {
      var types = ['treemapZoomToNode', 'treemapRootToNode'];
      var targetInfo = treeHelper.retrieveTargetInfo(payload, types, model);
      if (targetInfo) {
        var originViewRoot = model.getViewRoot();
        if (originViewRoot) {
          payload.direction = treeHelper.aboveViewRoot(originViewRoot, targetInfo.node) ? 'rollUp' : 'drillDown';
        }
        model.resetViewRoot(targetInfo.node);
      }
    }
  });
}
// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(12012);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Series.js
var Series = __webpack_require__(48134);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/data/Tree.js
var Tree = __webpack_require__(19079);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Model.js + 2 modules
var Model = __webpack_require__(84456);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/model.js
var util_model = __webpack_require__(46451);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/tooltip/tooltipMarkup.js
var tooltipMarkup = __webpack_require__(13134);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/enableAriaDecalForTree.js
var enableAriaDecalForTree = __webpack_require__(57891);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/treemap/TreemapSeries.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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









var TreemapSeries_TreemapSeriesModel = /** @class */function (_super) {
  (0,tslib_es6.__extends)(TreemapSeriesModel, _super);
  function TreemapSeriesModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = TreemapSeriesModel.type;
    _this.preventUsingHoverLayer = true;
    return _this;
  }
  /**
   * @override
   */
  TreemapSeriesModel.prototype.getInitialData = function (option, ecModel) {
    // Create a virtual root.
    var root = {
      name: option.name,
      children: option.data
    };
    completeTreeValue(root);
    var levels = option.levels || [];
    // Used in "visual priority" in `treemapVisual.js`.
    // This way is a little tricky, must satisfy the precondition:
    //   1. There is no `treeNode.getModel('itemStyle.xxx')` used.
    //   2. The `Model.prototype.getModel()` will not use any clone-like way.
    var designatedVisualItemStyle = this.designatedVisualItemStyle = {};
    var designatedVisualModel = new Model["default"]({
      itemStyle: designatedVisualItemStyle
    }, this, ecModel);
    levels = option.levels = setDefault(levels, ecModel);
    var levelModels = util.map(levels || [], function (levelDefine) {
      return new Model["default"](levelDefine, designatedVisualModel, ecModel);
    }, this);
    // Make sure always a new tree is created when setOption,
    // in TreemapView, we check whether oldTree === newTree
    // to choose mappings approach among old shapes and new shapes.
    var tree = Tree["default"].createTree(root, this, beforeLink);
    function beforeLink(nodeData) {
      nodeData.wrapMethod('getItemModel', function (model, idx) {
        var node = tree.getNodeByDataIndex(idx);
        var levelModel = node ? levelModels[node.depth] : null;
        // If no levelModel, we also need `designatedVisualModel`.
        model.parentModel = levelModel || designatedVisualModel;
        return model;
      });
    }
    return tree.data;
  };
  TreemapSeriesModel.prototype.optionUpdated = function () {
    this.resetViewRoot();
  };
  /**
   * @override
   * @param {number} dataIndex
   * @param {boolean} [mutipleSeries=false]
   */
  TreemapSeriesModel.prototype.formatTooltip = function (dataIndex, multipleSeries, dataType) {
    var data = this.getData();
    var value = this.getRawValue(dataIndex);
    var name = data.getName(dataIndex);
    return (0,tooltipMarkup.createTooltipMarkup)('nameValue', {
      name: name,
      value: value
    });
  };
  /**
   * Add tree path to tooltip param
   *
   * @override
   * @param {number} dataIndex
   * @return {Object}
   */
  TreemapSeriesModel.prototype.getDataParams = function (dataIndex) {
    var params = _super.prototype.getDataParams.apply(this, arguments);
    var node = this.getData().tree.getNodeByDataIndex(dataIndex);
    params.treeAncestors = (0,treeHelper.wrapTreePathInfo)(node, this);
    // compatitable the previous code.
    params.treePathInfo = params.treeAncestors;
    return params;
  };
  /**
   * @public
   * @param {Object} layoutInfo {
   *                                x: containerGroup x
   *                                y: containerGroup y
   *                                width: containerGroup width
   *                                height: containerGroup height
   *                            }
   */
  TreemapSeriesModel.prototype.setLayoutInfo = function (layoutInfo) {
    /**
     * @readOnly
     * @type {Object}
     */
    this.layoutInfo = this.layoutInfo || {};
    util.extend(this.layoutInfo, layoutInfo);
  };
  /**
   * @param  {string} id
   * @return {number} index
   */
  TreemapSeriesModel.prototype.mapIdToIndex = function (id) {
    // A feature is implemented:
    // index is monotone increasing with the sequence of
    // input id at the first time.
    // This feature can make sure that each data item and its
    // mapped color have the same index between data list and
    // color list at the beginning, which is useful for user
    // to adjust data-color mapping.
    /**
     * @private
     * @type {Object}
     */
    var idIndexMap = this._idIndexMap;
    if (!idIndexMap) {
      idIndexMap = this._idIndexMap = util.createHashMap();
      /**
       * @private
       * @type {number}
       */
      this._idIndexMapCount = 0;
    }
    var index = idIndexMap.get(id);
    if (index == null) {
      idIndexMap.set(id, index = this._idIndexMapCount++);
    }
    return index;
  };
  TreemapSeriesModel.prototype.getViewRoot = function () {
    return this._viewRoot;
  };
  TreemapSeriesModel.prototype.resetViewRoot = function (viewRoot) {
    viewRoot ? this._viewRoot = viewRoot : viewRoot = this._viewRoot;
    var root = this.getRawData().tree.root;
    if (!viewRoot || viewRoot !== root && !root.contains(viewRoot)) {
      this._viewRoot = root;
    }
  };
  TreemapSeriesModel.prototype.enableAriaDecal = function () {
    (0,enableAriaDecalForTree["default"])(this);
  };
  TreemapSeriesModel.type = 'series.treemap';
  TreemapSeriesModel.layoutMode = 'box';
  TreemapSeriesModel.defaultOption = {
    // Disable progressive rendering
    progressive: 0,
    // size: ['80%', '80%'],            // deprecated, compatible with ec2.
    left: 'center',
    top: 'middle',
    width: '80%',
    height: '80%',
    sort: true,
    clipWindow: 'origin',
    squareRatio: 0.5 * (1 + Math.sqrt(5)),
    leafDepth: null,
    drillDownIcon: '▶',
    // to align specialized icon. ▷▶❒❐▼✚
    zoomToNodeRatio: 0.32 * 0.32,
    scaleLimit: null,
    roam: true,
    nodeClick: 'zoomToNode',
    animation: true,
    animationDurationUpdate: 900,
    animationEasing: 'quinticInOut',
    breadcrumb: {
      show: true,
      height: 22,
      left: 'center',
      top: 'bottom',
      // right
      // bottom
      emptyItemWidth: 25,
      itemStyle: {
        color: 'rgba(0,0,0,0.7)',
        textStyle: {
          color: '#fff'
        }
      },
      emphasis: {
        itemStyle: {
          color: 'rgba(0,0,0,0.9)' // '#5793f3',
        }
      }
    },
    label: {
      show: true,
      // Do not use textDistance, for ellipsis rect just the same as treemap node rect.
      distance: 0,
      padding: 5,
      position: 'inside',
      // formatter: null,
      color: '#fff',
      overflow: 'truncate'
      // align
      // verticalAlign
    },
    upperLabel: {
      show: false,
      position: [0, '50%'],
      height: 20,
      // formatter: null,
      // color: '#fff',
      overflow: 'truncate',
      // align: null,
      verticalAlign: 'middle'
    },
    itemStyle: {
      color: null,
      colorAlpha: null,
      colorSaturation: null,
      borderWidth: 0,
      gapWidth: 0,
      borderColor: '#fff',
      borderColorSaturation: null // If specified, borderColor will be ineffective, and the
      // border color is evaluated by color of current node and
      // borderColorSaturation.
    },
    emphasis: {
      upperLabel: {
        show: true,
        position: [0, '50%'],
        overflow: 'truncate',
        verticalAlign: 'middle'
      }
    },
    visualDimension: 0,
    visualMin: null,
    visualMax: null,
    color: [],
    // level[n].color (if necessary).
    // + Specify color list of each level. level[0].color would be global
    // color list if not specified. (see method `setDefault`).
    // + But set as a empty array to forbid fetch color from global palette
    // when using nodeModel.get('color'), otherwise nodes on deep level
    // will always has color palette set and are not able to inherit color
    // from parent node.
    // + TreemapSeries.color can not be set as 'none', otherwise effect
    // legend color fetching (see seriesColor.js).
    colorAlpha: null,
    colorSaturation: null,
    colorMappingBy: 'index',
    visibleMin: 10,
    // be rendered. Only works when sort is 'asc' or 'desc'.
    childrenVisibleMin: null,
    // grandchildren will not show.
    // Why grandchildren? If not grandchildren but children,
    // some siblings show children and some not,
    // the appearance may be mess and not consistent,
    levels: [] // Each item: {
    //     visibleMin, itemStyle, visualDimension, label
    // }
  };
  return TreemapSeriesModel;
}(Series["default"]);
/**
 * @param {Object} dataNode
 */
function completeTreeValue(dataNode) {
  // Postorder travel tree.
  // If value of none-leaf node is not set,
  // calculate it by suming up the value of all children.
  var sum = 0;
  util.each(dataNode.children, function (child) {
    completeTreeValue(child);
    var childValue = child.value;
    util.isArray(childValue) && (childValue = childValue[0]);
    sum += childValue;
  });
  var thisValue = dataNode.value;
  if (util.isArray(thisValue)) {
    thisValue = thisValue[0];
  }
  if (thisValue == null || isNaN(thisValue)) {
    thisValue = sum;
  }
  // Value should not less than 0.
  if (thisValue < 0) {
    thisValue = 0;
  }
  util.isArray(dataNode.value) ? dataNode.value[0] = thisValue : dataNode.value = thisValue;
}
/**
 * set default to level configuration
 */
function setDefault(levels, ecModel) {
  var globalColorList = (0,util_model.normalizeToArray)(ecModel.get('color'));
  var globalDecalList = (0,util_model.normalizeToArray)(ecModel.get(['aria', 'decal', 'decals']));
  if (!globalColorList) {
    return;
  }
  levels = levels || [];
  var hasColorDefine;
  var hasDecalDefine;
  util.each(levels, function (levelDefine) {
    var model = new Model["default"](levelDefine);
    var modelColor = model.get('color');
    var modelDecal = model.get('decal');
    if (model.get(['itemStyle', 'color']) || modelColor && modelColor !== 'none') {
      hasColorDefine = true;
    }
    if (model.get(['itemStyle', 'decal']) || modelDecal && modelDecal !== 'none') {
      hasDecalDefine = true;
    }
  });
  var level0 = levels[0] || (levels[0] = {});
  if (!hasColorDefine) {
    level0.color = globalColorList.slice();
  }
  if (!hasDecalDefine && globalDecalList) {
    level0.decal = globalDecalList.slice();
  }
  return levels;
}
/* ESM default export */ var TreemapSeries = (TreemapSeries_TreemapSeriesModel);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Group.js
var Group = __webpack_require__(58695);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/Rect.js + 1 modules
var Rect = __webpack_require__(40361);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/innerStore.js
var util_innerStore = __webpack_require__(55413);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/states.js
var states = __webpack_require__(63344);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/data/DataDiffer.js
var DataDiffer = __webpack_require__(4055);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/Polygon.js
var Polygon = __webpack_require__(71272);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Text.js
var Text = __webpack_require__(97199);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/layout.js
var util_layout = __webpack_require__(37624);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/label/labelStyle.js
var labelStyle = __webpack_require__(77704);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/treemap/Breadcrumb.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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








var TEXT_PADDING = 8;
var ITEM_GAP = 8;
var ARRAY_LENGTH = 5;
var Breadcrumb_Breadcrumb = /** @class */function () {
  function Breadcrumb(containerGroup) {
    this.group = new Group["default"]();
    containerGroup.add(this.group);
  }
  Breadcrumb.prototype.render = function (seriesModel, api, targetNode, onSelect) {
    var model = seriesModel.getModel('breadcrumb');
    var thisGroup = this.group;
    thisGroup.removeAll();
    if (!model.get('show') || !targetNode) {
      return;
    }
    var normalStyleModel = model.getModel('itemStyle');
    var emphasisModel = model.getModel('emphasis');
    var textStyleModel = normalStyleModel.getModel('textStyle');
    var emphasisTextStyleModel = emphasisModel.getModel(['itemStyle', 'textStyle']);
    var layoutParam = {
      pos: {
        left: model.get('left'),
        right: model.get('right'),
        top: model.get('top'),
        bottom: model.get('bottom')
      },
      box: {
        width: api.getWidth(),
        height: api.getHeight()
      },
      emptyItemWidth: model.get('emptyItemWidth'),
      totalWidth: 0,
      renderList: []
    };
    this._prepare(targetNode, layoutParam, textStyleModel);
    this._renderContent(seriesModel, layoutParam, normalStyleModel, emphasisModel, textStyleModel, emphasisTextStyleModel, onSelect);
    util_layout.positionElement(thisGroup, layoutParam.pos, layoutParam.box);
  };
  /**
   * Prepare render list and total width
   * @private
   */
  Breadcrumb.prototype._prepare = function (targetNode, layoutParam, textStyleModel) {
    for (var node = targetNode; node; node = node.parentNode) {
      var text = (0,util_model.convertOptionIdName)(node.getModel().get('name'), '');
      var textRect = textStyleModel.getTextRect(text);
      var itemWidth = Math.max(textRect.width + TEXT_PADDING * 2, layoutParam.emptyItemWidth);
      layoutParam.totalWidth += itemWidth + ITEM_GAP;
      layoutParam.renderList.push({
        node: node,
        text: text,
        width: itemWidth
      });
    }
  };
  /**
   * @private
   */
  Breadcrumb.prototype._renderContent = function (seriesModel, layoutParam, normalStyleModel, emphasisModel, textStyleModel, emphasisTextStyleModel, onSelect) {
    // Start rendering.
    var lastX = 0;
    var emptyItemWidth = layoutParam.emptyItemWidth;
    var height = seriesModel.get(['breadcrumb', 'height']);
    var availableSize = util_layout.getAvailableSize(layoutParam.pos, layoutParam.box);
    var totalWidth = layoutParam.totalWidth;
    var renderList = layoutParam.renderList;
    var emphasisItemStyle = emphasisModel.getModel('itemStyle').getItemStyle();
    for (var i = renderList.length - 1; i >= 0; i--) {
      var item = renderList[i];
      var itemNode = item.node;
      var itemWidth = item.width;
      var text = item.text;
      // Hdie text and shorten width if necessary.
      if (totalWidth > availableSize.width) {
        totalWidth -= itemWidth - emptyItemWidth;
        itemWidth = emptyItemWidth;
        text = null;
      }
      var el = new Polygon["default"]({
        shape: {
          points: makeItemPoints(lastX, 0, itemWidth, height, i === renderList.length - 1, i === 0)
        },
        style: (0,util.defaults)(normalStyleModel.getItemStyle(), {
          lineJoin: 'bevel'
        }),
        textContent: new Text["default"]({
          style: (0,labelStyle.createTextStyle)(textStyleModel, {
            text: text
          })
        }),
        textConfig: {
          position: 'inside'
        },
        z2: states.Z2_EMPHASIS_LIFT * 1e4,
        onclick: (0,util.curry)(onSelect, itemNode)
      });
      el.disableLabelAnimation = true;
      el.getTextContent().ensureState('emphasis').style = (0,labelStyle.createTextStyle)(emphasisTextStyleModel, {
        text: text
      });
      el.ensureState('emphasis').style = emphasisItemStyle;
      (0,states.toggleHoverEmphasis)(el, emphasisModel.get('focus'), emphasisModel.get('blurScope'), emphasisModel.get('disabled'));
      this.group.add(el);
      packEventData(el, seriesModel, itemNode);
      lastX += itemWidth + ITEM_GAP;
    }
  };
  Breadcrumb.prototype.remove = function () {
    this.group.removeAll();
  };
  return Breadcrumb;
}();
function makeItemPoints(x, y, itemWidth, itemHeight, head, tail) {
  var points = [[head ? x : x - ARRAY_LENGTH, y], [x + itemWidth, y], [x + itemWidth, y + itemHeight], [head ? x : x - ARRAY_LENGTH, y + itemHeight]];
  !tail && points.splice(2, 0, [x + itemWidth + ARRAY_LENGTH, y + itemHeight / 2]);
  !head && points.push([x, y + itemHeight / 2]);
  return points;
}
// Package custom mouse event.
function packEventData(el, seriesModel, itemNode) {
  (0,util_innerStore.getECData)(el).eventData = {
    componentType: 'series',
    componentSubType: 'treemap',
    componentIndex: seriesModel.componentIndex,
    seriesIndex: seriesModel.seriesIndex,
    seriesName: seriesModel.name,
    seriesType: 'treemap',
    selfType: 'breadcrumb',
    nodeData: {
      dataIndex: itemNode && itemNode.dataIndex,
      name: itemNode && itemNode.name
    },
    treePathInfo: itemNode && (0,treeHelper.wrapTreePathInfo)(itemNode, seriesModel)
  };
}
/* ESM default export */ var treemap_Breadcrumb = (Breadcrumb_Breadcrumb);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/helper/RoamController.js
var RoamController = __webpack_require__(82342);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/BoundingRect.js
var BoundingRect = __webpack_require__(44964);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/matrix.js
var matrix = __webpack_require__(85215);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/animation.js
var animation = __webpack_require__(34955);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/mixin/makeStyleMapper.js
var makeStyleMapper = __webpack_require__(12772);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/view/Chart.js
var Chart = __webpack_require__(47389);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Displayable.js
var Displayable = __webpack_require__(90635);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/format.js
var format = __webpack_require__(43718);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/treemap/TreemapView.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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


















var TreemapView_Group = Group["default"];
var TreemapView_Rect = Rect["default"];
var DRAG_THRESHOLD = 3;
var PATH_LABEL_NOAMAL = 'label';
var PATH_UPPERLABEL_NORMAL = 'upperLabel';
// Should larger than emphasis states lift z
var Z2_BASE = states.Z2_EMPHASIS_LIFT * 10; // Should bigger than every z2.
var Z2_BG = states.Z2_EMPHASIS_LIFT * 2;
var Z2_CONTENT = states.Z2_EMPHASIS_LIFT * 3;
var getStateItemStyle = (0,makeStyleMapper["default"])([['fill', 'color'],
// `borderColor` and `borderWidth` has been occupied,
// so use `stroke` to indicate the stroke of the rect.
['stroke', 'strokeColor'], ['lineWidth', 'strokeWidth'], ['shadowBlur'], ['shadowOffsetX'], ['shadowOffsetY'], ['shadowColor']
// Option decal is in `DecalObject` but style.decal is in `PatternObject`.
// So do not transfer decal directly.
]);
var getItemStyleNormal = function (model) {
  // Normal style props should include emphasis style props.
  var itemStyle = getStateItemStyle(model);
  // Clear styles set by emphasis.
  itemStyle.stroke = itemStyle.fill = itemStyle.lineWidth = null;
  return itemStyle;
};
var inner = (0,util_model.makeInner)();
var TreemapView_TreemapView = /** @class */function (_super) {
  (0,tslib_es6.__extends)(TreemapView, _super);
  function TreemapView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = TreemapView.type;
    _this._state = 'ready';
    _this._storage = createStorage();
    return _this;
  }
  /**
   * @override
   */
  TreemapView.prototype.render = function (seriesModel, ecModel, api, payload) {
    var models = ecModel.findComponents({
      mainType: 'series',
      subType: 'treemap',
      query: payload
    });
    if ((0,util.indexOf)(models, seriesModel) < 0) {
      return;
    }
    this.seriesModel = seriesModel;
    this.api = api;
    this.ecModel = ecModel;
    var types = ['treemapZoomToNode', 'treemapRootToNode'];
    var targetInfo = treeHelper.retrieveTargetInfo(payload, types, seriesModel);
    var payloadType = payload && payload.type;
    var layoutInfo = seriesModel.layoutInfo;
    var isInit = !this._oldTree;
    var thisStorage = this._storage;
    // Mark new root when action is treemapRootToNode.
    var reRoot = payloadType === 'treemapRootToNode' && targetInfo && thisStorage ? {
      rootNodeGroup: thisStorage.nodeGroup[targetInfo.node.getRawIndex()],
      direction: payload.direction
    } : null;
    var containerGroup = this._giveContainerGroup(layoutInfo);
    var hasAnimation = seriesModel.get('animation');
    var renderResult = this._doRender(containerGroup, seriesModel, reRoot);
    hasAnimation && !isInit && (!payloadType || payloadType === 'treemapZoomToNode' || payloadType === 'treemapRootToNode') ? this._doAnimation(containerGroup, renderResult, seriesModel, reRoot) : renderResult.renderFinally();
    this._resetController(api);
    this._renderBreadcrumb(seriesModel, api, targetInfo);
  };
  TreemapView.prototype._giveContainerGroup = function (layoutInfo) {
    var containerGroup = this._containerGroup;
    if (!containerGroup) {
      // FIXME
      // 加一层containerGroup是为了clip，但是现在clip功能并没有实现。
      containerGroup = this._containerGroup = new TreemapView_Group();
      this._initEvents(containerGroup);
      this.group.add(containerGroup);
    }
    containerGroup.x = layoutInfo.x;
    containerGroup.y = layoutInfo.y;
    return containerGroup;
  };
  TreemapView.prototype._doRender = function (containerGroup, seriesModel, reRoot) {
    var thisTree = seriesModel.getData().tree;
    var oldTree = this._oldTree;
    // Clear last shape records.
    var lastsForAnimation = createStorage();
    var thisStorage = createStorage();
    var oldStorage = this._storage;
    var willInvisibleEls = [];
    function doRenderNode(thisNode, oldNode, parentGroup, depth) {
      return renderNode(seriesModel, thisStorage, oldStorage, reRoot, lastsForAnimation, willInvisibleEls, thisNode, oldNode, parentGroup, depth);
    }
    // Notice: When thisTree and oldTree are the same tree (see list.cloneShallow),
    // the oldTree is actually losted, so we cannot find all of the old graphic
    // elements from tree. So we use this strategy: make element storage, move
    // from old storage to new storage, clear old storage.
    dualTravel(thisTree.root ? [thisTree.root] : [], oldTree && oldTree.root ? [oldTree.root] : [], containerGroup, thisTree === oldTree || !oldTree, 0);
    // Process all removing.
    var willDeleteEls = clearStorage(oldStorage);
    this._oldTree = thisTree;
    this._storage = thisStorage;
    if (this._controllerHost) {
      var _oldRootLayout = this.seriesModel.layoutInfo;
      var rootLayout = thisTree.root.getLayout();
      if (rootLayout.width === _oldRootLayout.width && rootLayout.height === _oldRootLayout.height) {
        this._controllerHost.zoom = 1;
      }
    }
    return {
      lastsForAnimation: lastsForAnimation,
      willDeleteEls: willDeleteEls,
      renderFinally: renderFinally
    };
    function dualTravel(thisViewChildren, oldViewChildren, parentGroup, sameTree, depth) {
      // When 'render' is triggered by action,
      // 'this' and 'old' may be the same tree,
      // we use rawIndex in that case.
      if (sameTree) {
        oldViewChildren = thisViewChildren;
        (0,util.each)(thisViewChildren, function (child, index) {
          !child.isRemoved() && processNode(index, index);
        });
      }
      // Diff hierarchically (diff only in each subtree, but not whole).
      // because, consistency of view is important.
      else {
        new DataDiffer["default"](oldViewChildren, thisViewChildren, getKey, getKey).add(processNode).update(processNode).remove((0,util.curry)(processNode, null)).execute();
      }
      function getKey(node) {
        // Identify by name or raw index.
        return node.getId();
      }
      function processNode(newIndex, oldIndex) {
        var thisNode = newIndex != null ? thisViewChildren[newIndex] : null;
        var oldNode = oldIndex != null ? oldViewChildren[oldIndex] : null;
        var group = doRenderNode(thisNode, oldNode, parentGroup, depth);
        group && dualTravel(thisNode && thisNode.viewChildren || [], oldNode && oldNode.viewChildren || [], group, sameTree, depth + 1);
      }
    }
    function clearStorage(storage) {
      var willDeleteEls = createStorage();
      storage && (0,util.each)(storage, function (store, storageName) {
        var delEls = willDeleteEls[storageName];
        (0,util.each)(store, function (el) {
          el && (delEls.push(el), inner(el).willDelete = true);
        });
      });
      return willDeleteEls;
    }
    function renderFinally() {
      (0,util.each)(willDeleteEls, function (els) {
        (0,util.each)(els, function (el) {
          el.parent && el.parent.remove(el);
        });
      });
      (0,util.each)(willInvisibleEls, function (el) {
        el.invisible = true;
        // Setting invisible is for optimizing, so no need to set dirty,
        // just mark as invisible.
        el.dirty();
      });
    }
  };
  TreemapView.prototype._doAnimation = function (containerGroup, renderResult, seriesModel, reRoot) {
    var durationOption = seriesModel.get('animationDurationUpdate');
    var easingOption = seriesModel.get('animationEasing');
    // TODO: do not support function until necessary.
    var duration = ((0,util.isFunction)(durationOption) ? 0 : durationOption) || 0;
    var easing = ((0,util.isFunction)(easingOption) ? null : easingOption) || 'cubicOut';
    var animationWrap = animation.createWrap();
    // Make delete animations.
    (0,util.each)(renderResult.willDeleteEls, function (store, storageName) {
      (0,util.each)(store, function (el, rawIndex) {
        if (el.invisible) {
          return;
        }
        var parent = el.parent; // Always has parent, and parent is nodeGroup.
        var target;
        var innerStore = inner(parent);
        if (reRoot && reRoot.direction === 'drillDown') {
          target = parent === reRoot.rootNodeGroup
          // This is the content element of view root.
          // Only `content` will enter this branch, because
          // `background` and `nodeGroup` will not be deleted.
          ? {
            shape: {
              x: 0,
              y: 0,
              width: innerStore.nodeWidth,
              height: innerStore.nodeHeight
            },
            style: {
              opacity: 0
            }
          }
          // Others.
          : {
            style: {
              opacity: 0
            }
          };
        } else {
          var targetX = 0;
          var targetY = 0;
          if (!innerStore.willDelete) {
            // Let node animate to right-bottom corner, cooperating with fadeout,
            // which is appropriate for user understanding.
            // Divided by 2 for reRoot rolling up effect.
            targetX = innerStore.nodeWidth / 2;
            targetY = innerStore.nodeHeight / 2;
          }
          target = storageName === 'nodeGroup' ? {
            x: targetX,
            y: targetY,
            style: {
              opacity: 0
            }
          } : {
            shape: {
              x: targetX,
              y: targetY,
              width: 0,
              height: 0
            },
            style: {
              opacity: 0
            }
          };
        }
        // TODO: do not support delay until necessary.
        target && animationWrap.add(el, target, duration, 0, easing);
      });
    });
    // Make other animations
    (0,util.each)(this._storage, function (store, storageName) {
      (0,util.each)(store, function (el, rawIndex) {
        var last = renderResult.lastsForAnimation[storageName][rawIndex];
        var target = {};
        if (!last) {
          return;
        }
        if (el instanceof Group["default"]) {
          if (last.oldX != null) {
            target.x = el.x;
            target.y = el.y;
            el.x = last.oldX;
            el.y = last.oldY;
          }
        } else {
          if (last.oldShape) {
            target.shape = (0,util.extend)({}, el.shape);
            el.setShape(last.oldShape);
          }
          if (last.fadein) {
            el.setStyle('opacity', 0);
            target.style = {
              opacity: 1
            };
          }
          // When animation is stopped for succedent animation starting,
          // el.style.opacity might not be 1
          else if (el.style.opacity !== 1) {
            target.style = {
              opacity: 1
            };
          }
        }
        animationWrap.add(el, target, duration, 0, easing);
      });
    }, this);
    this._state = 'animating';
    animationWrap.finished((0,util.bind)(function () {
      this._state = 'ready';
      renderResult.renderFinally();
    }, this)).start();
  };
  TreemapView.prototype._resetController = function (api) {
    var controller = this._controller;
    var controllerHost = this._controllerHost;
    if (!controllerHost) {
      this._controllerHost = {
        target: this.group
      };
      controllerHost = this._controllerHost;
    }
    // Init controller.
    if (!controller) {
      controller = this._controller = new RoamController["default"](api.getZr());
      controller.enable(this.seriesModel.get('roam'));
      controllerHost.zoomLimit = this.seriesModel.get('scaleLimit');
      controllerHost.zoom = this.seriesModel.get('zoom');
      controller.on('pan', (0,util.bind)(this._onPan, this));
      controller.on('zoom', (0,util.bind)(this._onZoom, this));
    }
    var rect = new BoundingRect["default"](0, 0, api.getWidth(), api.getHeight());
    controller.setPointerChecker(function (e, x, y) {
      return rect.contain(x, y);
    });
  };
  TreemapView.prototype._clearController = function () {
    var controller = this._controller;
    this._controllerHost = null;
    if (controller) {
      controller.dispose();
      controller = null;
    }
  };
  TreemapView.prototype._onPan = function (e) {
    if (this._state !== 'animating' && (Math.abs(e.dx) > DRAG_THRESHOLD || Math.abs(e.dy) > DRAG_THRESHOLD)) {
      // These param must not be cached.
      var root = this.seriesModel.getData().tree.root;
      if (!root) {
        return;
      }
      var rootLayout = root.getLayout();
      if (!rootLayout) {
        return;
      }
      this.api.dispatchAction({
        type: 'treemapMove',
        from: this.uid,
        seriesId: this.seriesModel.id,
        rootRect: {
          x: rootLayout.x + e.dx,
          y: rootLayout.y + e.dy,
          width: rootLayout.width,
          height: rootLayout.height
        }
      });
    }
  };
  TreemapView.prototype._onZoom = function (e) {
    var mouseX = e.originX;
    var mouseY = e.originY;
    var zoomDelta = e.scale;
    if (this._state !== 'animating') {
      // These param must not be cached.
      var root = this.seriesModel.getData().tree.root;
      if (!root) {
        return;
      }
      var rootLayout = root.getLayout();
      if (!rootLayout) {
        return;
      }
      var rect = new BoundingRect["default"](rootLayout.x, rootLayout.y, rootLayout.width, rootLayout.height);
      // scaleLimit
      var zoomLimit = null;
      var _controllerHost = this._controllerHost;
      zoomLimit = _controllerHost.zoomLimit;
      var newZoom = _controllerHost.zoom = _controllerHost.zoom || 1;
      newZoom *= zoomDelta;
      if (zoomLimit) {
        var zoomMin = zoomLimit.min || 0;
        var zoomMax = zoomLimit.max || Infinity;
        newZoom = Math.max(Math.min(zoomMax, newZoom), zoomMin);
      }
      var zoomScale = newZoom / _controllerHost.zoom;
      _controllerHost.zoom = newZoom;
      var layoutInfo = this.seriesModel.layoutInfo;
      // Transform mouse coord from global to containerGroup.
      mouseX -= layoutInfo.x;
      mouseY -= layoutInfo.y;
      // Scale root bounding rect.
      var m = matrix.create();
      matrix.translate(m, m, [-mouseX, -mouseY]);
      matrix.scale(m, m, [zoomScale, zoomScale]);
      matrix.translate(m, m, [mouseX, mouseY]);
      rect.applyTransform(m);
      this.api.dispatchAction({
        type: 'treemapRender',
        from: this.uid,
        seriesId: this.seriesModel.id,
        rootRect: {
          x: rect.x,
          y: rect.y,
          width: rect.width,
          height: rect.height
        }
      });
    }
  };
  TreemapView.prototype._initEvents = function (containerGroup) {
    var _this = this;
    containerGroup.on('click', function (e) {
      if (_this._state !== 'ready') {
        return;
      }
      var nodeClick = _this.seriesModel.get('nodeClick', true);
      if (!nodeClick) {
        return;
      }
      var targetInfo = _this.findTarget(e.offsetX, e.offsetY);
      if (!targetInfo) {
        return;
      }
      var node = targetInfo.node;
      if (node.getLayout().isLeafRoot) {
        _this._rootToNode(targetInfo);
      } else {
        if (nodeClick === 'zoomToNode') {
          _this._zoomToNode(targetInfo);
        } else if (nodeClick === 'link') {
          var itemModel = node.hostTree.data.getItemModel(node.dataIndex);
          var link = itemModel.get('link', true);
          var linkTarget = itemModel.get('target', true) || 'blank';
          link && (0,format.windowOpen)(link, linkTarget);
        }
      }
    }, this);
  };
  TreemapView.prototype._renderBreadcrumb = function (seriesModel, api, targetInfo) {
    var _this = this;
    if (!targetInfo) {
      targetInfo = seriesModel.get('leafDepth', true) != null ? {
        node: seriesModel.getViewRoot()
      }
      // FIXME
      // better way?
      // Find breadcrumb tail on center of containerGroup.
      : this.findTarget(api.getWidth() / 2, api.getHeight() / 2);
      if (!targetInfo) {
        targetInfo = {
          node: seriesModel.getData().tree.root
        };
      }
    }
    (this._breadcrumb || (this._breadcrumb = new treemap_Breadcrumb(this.group))).render(seriesModel, api, targetInfo.node, function (node) {
      if (_this._state !== 'animating') {
        treeHelper.aboveViewRoot(seriesModel.getViewRoot(), node) ? _this._rootToNode({
          node: node
        }) : _this._zoomToNode({
          node: node
        });
      }
    });
  };
  /**
   * @override
   */
  TreemapView.prototype.remove = function () {
    this._clearController();
    this._containerGroup && this._containerGroup.removeAll();
    this._storage = createStorage();
    this._state = 'ready';
    this._breadcrumb && this._breadcrumb.remove();
  };
  TreemapView.prototype.dispose = function () {
    this._clearController();
  };
  TreemapView.prototype._zoomToNode = function (targetInfo) {
    this.api.dispatchAction({
      type: 'treemapZoomToNode',
      from: this.uid,
      seriesId: this.seriesModel.id,
      targetNode: targetInfo.node
    });
  };
  TreemapView.prototype._rootToNode = function (targetInfo) {
    this.api.dispatchAction({
      type: 'treemapRootToNode',
      from: this.uid,
      seriesId: this.seriesModel.id,
      targetNode: targetInfo.node
    });
  };
  /**
   * @public
   * @param {number} x Global coord x.
   * @param {number} y Global coord y.
   * @return {Object} info If not found, return undefined;
   * @return {number} info.node Target node.
   * @return {number} info.offsetX x refer to target node.
   * @return {number} info.offsetY y refer to target node.
   */
  TreemapView.prototype.findTarget = function (x, y) {
    var targetInfo;
    var viewRoot = this.seriesModel.getViewRoot();
    viewRoot.eachNode({
      attr: 'viewChildren',
      order: 'preorder'
    }, function (node) {
      var bgEl = this._storage.background[node.getRawIndex()];
      // If invisible, there might be no element.
      if (bgEl) {
        var point = bgEl.transformCoordToLocal(x, y);
        var shape = bgEl.shape;
        // For performance consideration, don't use 'getBoundingRect'.
        if (shape.x <= point[0] && point[0] <= shape.x + shape.width && shape.y <= point[1] && point[1] <= shape.y + shape.height) {
          targetInfo = {
            node: node,
            offsetX: point[0],
            offsetY: point[1]
          };
        } else {
          return false; // Suppress visit subtree.
        }
      }
    }, this);
    return targetInfo;
  };
  TreemapView.type = 'treemap';
  return TreemapView;
}(Chart["default"]);
/**
 * @inner
 */
function createStorage() {
  return {
    nodeGroup: [],
    background: [],
    content: []
  };
}
/**
 * @inner
 * @return Return undefined means do not travel further.
 */
function renderNode(seriesModel, thisStorage, oldStorage, reRoot, lastsForAnimation, willInvisibleEls, thisNode, oldNode, parentGroup, depth) {
  // Whether under viewRoot.
  if (!thisNode) {
    // Deleting nodes will be performed finally. This method just find
    // element from old storage, or create new element, set them to new
    // storage, and set styles.
    return;
  }
  // -------------------------------------------------------------------
  // Start of closure variables available in "Procedures in renderNode".
  var thisLayout = thisNode.getLayout();
  var data = seriesModel.getData();
  var nodeModel = thisNode.getModel();
  // Only for enabling highlight/downplay. Clear firstly.
  // Because some node will not be rendered.
  data.setItemGraphicEl(thisNode.dataIndex, null);
  if (!thisLayout || !thisLayout.isInView) {
    return;
  }
  var thisWidth = thisLayout.width;
  var thisHeight = thisLayout.height;
  var borderWidth = thisLayout.borderWidth;
  var thisInvisible = thisLayout.invisible;
  var thisRawIndex = thisNode.getRawIndex();
  var oldRawIndex = oldNode && oldNode.getRawIndex();
  var thisViewChildren = thisNode.viewChildren;
  var upperHeight = thisLayout.upperHeight;
  var isParent = thisViewChildren && thisViewChildren.length;
  var itemStyleNormalModel = nodeModel.getModel('itemStyle');
  var itemStyleEmphasisModel = nodeModel.getModel(['emphasis', 'itemStyle']);
  var itemStyleBlurModel = nodeModel.getModel(['blur', 'itemStyle']);
  var itemStyleSelectModel = nodeModel.getModel(['select', 'itemStyle']);
  var borderRadius = itemStyleNormalModel.get('borderRadius') || 0;
  // End of closure ariables available in "Procedures in renderNode".
  // -----------------------------------------------------------------
  // Node group
  var group = giveGraphic('nodeGroup', TreemapView_Group);
  if (!group) {
    return;
  }
  parentGroup.add(group);
  // x,y are not set when el is above view root.
  group.x = thisLayout.x || 0;
  group.y = thisLayout.y || 0;
  group.markRedraw();
  inner(group).nodeWidth = thisWidth;
  inner(group).nodeHeight = thisHeight;
  if (thisLayout.isAboveViewRoot) {
    return group;
  }
  // Background
  var bg = giveGraphic('background', TreemapView_Rect, depth, Z2_BG);
  bg && renderBackground(group, bg, isParent && thisLayout.upperLabelHeight);
  var emphasisModel = nodeModel.getModel('emphasis');
  var focus = emphasisModel.get('focus');
  var blurScope = emphasisModel.get('blurScope');
  var isDisabled = emphasisModel.get('disabled');
  var focusOrIndices = focus === 'ancestor' ? thisNode.getAncestorsIndices() : focus === 'descendant' ? thisNode.getDescendantIndices() : focus;
  // No children, render content.
  if (isParent) {
    // Because of the implementation about "traverse" in graphic hover style, we
    // can not set hover listener on the "group" of non-leaf node. Otherwise the
    // hover event from the descendents will be listenered.
    if ((0,states.isHighDownDispatcher)(group)) {
      (0,states.setAsHighDownDispatcher)(group, false);
    }
    if (bg) {
      (0,states.setAsHighDownDispatcher)(bg, !isDisabled);
      // Only for enabling highlight/downplay.
      data.setItemGraphicEl(thisNode.dataIndex, bg);
      (0,states.enableHoverFocus)(bg, focusOrIndices, blurScope);
    }
  } else {
    var content = giveGraphic('content', TreemapView_Rect, depth, Z2_CONTENT);
    content && renderContent(group, content);
    bg.disableMorphing = true;
    if (bg && (0,states.isHighDownDispatcher)(bg)) {
      (0,states.setAsHighDownDispatcher)(bg, false);
    }
    (0,states.setAsHighDownDispatcher)(group, !isDisabled);
    // Only for enabling highlight/downplay.
    data.setItemGraphicEl(thisNode.dataIndex, group);
    var cursorStyle = nodeModel.getShallow('cursor');
    cursorStyle && content.attr('cursor', cursorStyle);
    (0,states.enableHoverFocus)(group, focusOrIndices, blurScope);
  }
  return group;
  // ----------------------------
  // | Procedures in renderNode |
  // ----------------------------
  function renderBackground(group, bg, useUpperLabel) {
    var ecData = (0,util_innerStore.getECData)(bg);
    // For tooltip.
    ecData.dataIndex = thisNode.dataIndex;
    ecData.seriesIndex = seriesModel.seriesIndex;
    bg.setShape({
      x: 0,
      y: 0,
      width: thisWidth,
      height: thisHeight,
      r: borderRadius
    });
    if (thisInvisible) {
      // If invisible, do not set visual, otherwise the element will
      // change immediately before animation. We think it is OK to
      // remain its origin color when moving out of the view window.
      processInvisible(bg);
    } else {
      bg.invisible = false;
      var style = thisNode.getVisual('style');
      var visualBorderColor = style.stroke;
      var normalStyle = getItemStyleNormal(itemStyleNormalModel);
      normalStyle.fill = visualBorderColor;
      var emphasisStyle = getStateItemStyle(itemStyleEmphasisModel);
      emphasisStyle.fill = itemStyleEmphasisModel.get('borderColor');
      var blurStyle = getStateItemStyle(itemStyleBlurModel);
      blurStyle.fill = itemStyleBlurModel.get('borderColor');
      var selectStyle = getStateItemStyle(itemStyleSelectModel);
      selectStyle.fill = itemStyleSelectModel.get('borderColor');
      if (useUpperLabel) {
        var upperLabelWidth = thisWidth - 2 * borderWidth;
        prepareText(
        // PENDING: convert ZRColor to ColorString for text.
        bg, visualBorderColor, style.opacity, {
          x: borderWidth,
          y: 0,
          width: upperLabelWidth,
          height: upperHeight
        });
      }
      // For old bg.
      else {
        bg.removeTextContent();
      }
      bg.setStyle(normalStyle);
      bg.ensureState('emphasis').style = emphasisStyle;
      bg.ensureState('blur').style = blurStyle;
      bg.ensureState('select').style = selectStyle;
      (0,states.setDefaultStateProxy)(bg);
    }
    group.add(bg);
  }
  function renderContent(group, content) {
    var ecData = (0,util_innerStore.getECData)(content);
    // For tooltip.
    ecData.dataIndex = thisNode.dataIndex;
    ecData.seriesIndex = seriesModel.seriesIndex;
    var contentWidth = Math.max(thisWidth - 2 * borderWidth, 0);
    var contentHeight = Math.max(thisHeight - 2 * borderWidth, 0);
    content.culling = true;
    content.setShape({
      x: borderWidth,
      y: borderWidth,
      width: contentWidth,
      height: contentHeight,
      r: borderRadius
    });
    if (thisInvisible) {
      // If invisible, do not set visual, otherwise the element will
      // change immediately before animation. We think it is OK to
      // remain its origin color when moving out of the view window.
      processInvisible(content);
    } else {
      content.invisible = false;
      var nodeStyle = thisNode.getVisual('style');
      var visualColor = nodeStyle.fill;
      var normalStyle = getItemStyleNormal(itemStyleNormalModel);
      normalStyle.fill = visualColor;
      normalStyle.decal = nodeStyle.decal;
      var emphasisStyle = getStateItemStyle(itemStyleEmphasisModel);
      var blurStyle = getStateItemStyle(itemStyleBlurModel);
      var selectStyle = getStateItemStyle(itemStyleSelectModel);
      // PENDING: convert ZRColor to ColorString for text.
      prepareText(content, visualColor, nodeStyle.opacity, null);
      content.setStyle(normalStyle);
      content.ensureState('emphasis').style = emphasisStyle;
      content.ensureState('blur').style = blurStyle;
      content.ensureState('select').style = selectStyle;
      (0,states.setDefaultStateProxy)(content);
    }
    group.add(content);
  }
  function processInvisible(element) {
    // Delay invisible setting utill animation finished,
    // avoid element vanish suddenly before animation.
    !element.invisible && willInvisibleEls.push(element);
  }
  function prepareText(rectEl, visualColor, visualOpacity,
  // Can be null/undefined
  upperLabelRect) {
    var normalLabelModel = nodeModel.getModel(upperLabelRect ? PATH_UPPERLABEL_NORMAL : PATH_LABEL_NOAMAL);
    var defaultText = (0,util_model.convertOptionIdName)(nodeModel.get('name'), null);
    var isShow = normalLabelModel.getShallow('show');
    (0,labelStyle.setLabelStyle)(rectEl, (0,labelStyle.getLabelStatesModels)(nodeModel, upperLabelRect ? PATH_UPPERLABEL_NORMAL : PATH_LABEL_NOAMAL), {
      defaultText: isShow ? defaultText : null,
      inheritColor: visualColor,
      defaultOpacity: visualOpacity,
      labelFetcher: seriesModel,
      labelDataIndex: thisNode.dataIndex
    });
    var textEl = rectEl.getTextContent();
    if (!textEl) {
      return;
    }
    var textStyle = textEl.style;
    var textPadding = (0,util.normalizeCssArray)(textStyle.padding || 0);
    if (upperLabelRect) {
      rectEl.setTextConfig({
        layoutRect: upperLabelRect
      });
      textEl.disableLabelLayout = true;
    }
    textEl.beforeUpdate = function () {
      var width = Math.max((upperLabelRect ? upperLabelRect.width : rectEl.shape.width) - textPadding[1] - textPadding[3], 0);
      var height = Math.max((upperLabelRect ? upperLabelRect.height : rectEl.shape.height) - textPadding[0] - textPadding[2], 0);
      if (textStyle.width !== width || textStyle.height !== height) {
        textEl.setStyle({
          width: width,
          height: height
        });
      }
    };
    textStyle.truncateMinChar = 2;
    textStyle.lineOverflow = 'truncate';
    addDrillDownIcon(textStyle, upperLabelRect, thisLayout);
    var textEmphasisState = textEl.getState('emphasis');
    addDrillDownIcon(textEmphasisState ? textEmphasisState.style : null, upperLabelRect, thisLayout);
  }
  function addDrillDownIcon(style, upperLabelRect, thisLayout) {
    var text = style ? style.text : null;
    if (!upperLabelRect && thisLayout.isLeafRoot && text != null) {
      var iconChar = seriesModel.get('drillDownIcon', true);
      style.text = iconChar ? iconChar + ' ' + text : text;
    }
  }
  function giveGraphic(storageName, Ctor, depth, z) {
    var element = oldRawIndex != null && oldStorage[storageName][oldRawIndex];
    var lasts = lastsForAnimation[storageName];
    if (element) {
      // Remove from oldStorage
      oldStorage[storageName][oldRawIndex] = null;
      prepareAnimationWhenHasOld(lasts, element);
    }
    // If invisible and no old element, do not create new element (for optimizing).
    else if (!thisInvisible) {
      element = new Ctor();
      if (element instanceof Displayable["default"]) {
        element.z2 = calculateZ2(depth, z);
      }
      prepareAnimationWhenNoOld(lasts, element);
    }
    // Set to thisStorage
    return thisStorage[storageName][thisRawIndex] = element;
  }
  function prepareAnimationWhenHasOld(lasts, element) {
    var lastCfg = lasts[thisRawIndex] = {};
    if (element instanceof TreemapView_Group) {
      lastCfg.oldX = element.x;
      lastCfg.oldY = element.y;
    } else {
      lastCfg.oldShape = (0,util.extend)({}, element.shape);
    }
  }
  // If a element is new, we need to find the animation start point carefully,
  // otherwise it will looks strange when 'zoomToNode'.
  function prepareAnimationWhenNoOld(lasts, element) {
    var lastCfg = lasts[thisRawIndex] = {};
    var parentNode = thisNode.parentNode;
    var isGroup = element instanceof Group["default"];
    if (parentNode && (!reRoot || reRoot.direction === 'drillDown')) {
      var parentOldX = 0;
      var parentOldY = 0;
      // New nodes appear from right-bottom corner in 'zoomToNode' animation.
      // For convenience, get old bounding rect from background.
      var parentOldBg = lastsForAnimation.background[parentNode.getRawIndex()];
      if (!reRoot && parentOldBg && parentOldBg.oldShape) {
        parentOldX = parentOldBg.oldShape.width;
        parentOldY = parentOldBg.oldShape.height;
      }
      // When no parent old shape found, its parent is new too,
      // so we can just use {x:0, y:0}.
      if (isGroup) {
        lastCfg.oldX = 0;
        lastCfg.oldY = parentOldY;
      } else {
        lastCfg.oldShape = {
          x: parentOldX,
          y: parentOldY,
          width: 0,
          height: 0
        };
      }
    }
    // Fade in, user can be aware that these nodes are new.
    lastCfg.fadein = !isGroup;
  }
}
// We cannot set all background with the same z, because the behaviour of
// drill down and roll up differ background creation sequence from tree
// hierarchy sequence, which cause lower background elements to overlap
// upper ones. So we calculate z based on depth.
// Moreover, we try to shrink down z interval to [0, 1] to avoid that
// treemap with large z overlaps other components.
function calculateZ2(depth, z2InLevel) {
  return depth * Z2_BASE + z2InLevel;
}
/* ESM default export */ var treemap_TreemapView = (TreemapView_TreemapView);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/visual/VisualMapping.js
var VisualMapping = __webpack_require__(507);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/tool/color.js
var tool_color = __webpack_require__(67375);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/treemap/treemapVisual.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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




var ITEM_STYLE_NORMAL = 'itemStyle';
var treemapVisual_inner = (0,util_model.makeInner)();
/* ESM default export */ var treemapVisual = ({
  seriesType: 'treemap',
  reset: function (seriesModel) {
    var tree = seriesModel.getData().tree;
    var root = tree.root;
    if (root.isRemoved()) {
      return;
    }
    travelTree(root,
    // Visual should calculate from tree root but not view root.
    {}, seriesModel.getViewRoot().getAncestors(), seriesModel);
  }
});
function travelTree(node, designatedVisual, viewRootAncestors, seriesModel) {
  var nodeModel = node.getModel();
  var nodeLayout = node.getLayout();
  var data = node.hostTree.data;
  // Optimize
  if (!nodeLayout || nodeLayout.invisible || !nodeLayout.isInView) {
    return;
  }
  var nodeItemStyleModel = nodeModel.getModel(ITEM_STYLE_NORMAL);
  var visuals = buildVisuals(nodeItemStyleModel, designatedVisual, seriesModel);
  var existsStyle = data.ensureUniqueItemVisual(node.dataIndex, 'style');
  // calculate border color
  var borderColor = nodeItemStyleModel.get('borderColor');
  var borderColorSaturation = nodeItemStyleModel.get('borderColorSaturation');
  var thisNodeColor;
  if (borderColorSaturation != null) {
    // For performance, do not always execute 'calculateColor'.
    thisNodeColor = calculateColor(visuals);
    borderColor = calculateBorderColor(borderColorSaturation, thisNodeColor);
  }
  existsStyle.stroke = borderColor;
  var viewChildren = node.viewChildren;
  if (!viewChildren || !viewChildren.length) {
    thisNodeColor = calculateColor(visuals);
    // Apply visual to this node.
    existsStyle.fill = thisNodeColor;
  } else {
    var mapping_1 = buildVisualMapping(node, nodeModel, nodeLayout, nodeItemStyleModel, visuals, viewChildren);
    // Designate visual to children.
    (0,util.each)(viewChildren, function (child, index) {
      // If higher than viewRoot, only ancestors of viewRoot is needed to visit.
      if (child.depth >= viewRootAncestors.length || child === viewRootAncestors[child.depth]) {
        var childVisual = mapVisual(nodeModel, visuals, child, index, mapping_1, seriesModel);
        travelTree(child, childVisual, viewRootAncestors, seriesModel);
      }
    });
  }
}
function buildVisuals(nodeItemStyleModel, designatedVisual, seriesModel) {
  var visuals = (0,util.extend)({}, designatedVisual);
  var designatedVisualItemStyle = seriesModel.designatedVisualItemStyle;
  (0,util.each)(['color', 'colorAlpha', 'colorSaturation'], function (visualName) {
    // Priority: thisNode > thisLevel > parentNodeDesignated > seriesModel
    designatedVisualItemStyle[visualName] = designatedVisual[visualName];
    var val = nodeItemStyleModel.get(visualName);
    designatedVisualItemStyle[visualName] = null;
    val != null && (visuals[visualName] = val);
  });
  return visuals;
}
function calculateColor(visuals) {
  var color = getValueVisualDefine(visuals, 'color');
  if (color) {
    var colorAlpha = getValueVisualDefine(visuals, 'colorAlpha');
    var colorSaturation = getValueVisualDefine(visuals, 'colorSaturation');
    if (colorSaturation) {
      color = (0,tool_color.modifyHSL)(color, null, null, colorSaturation);
    }
    if (colorAlpha) {
      color = (0,tool_color.modifyAlpha)(color, colorAlpha);
    }
    return color;
  }
}
function calculateBorderColor(borderColorSaturation, thisNodeColor) {
  return thisNodeColor != null
  // Can only be string
  ? (0,tool_color.modifyHSL)(thisNodeColor, null, null, borderColorSaturation) : null;
}
function getValueVisualDefine(visuals, name) {
  var value = visuals[name];
  if (value != null && value !== 'none') {
    return value;
  }
}
function buildVisualMapping(node, nodeModel, nodeLayout, nodeItemStyleModel, visuals, viewChildren) {
  if (!viewChildren || !viewChildren.length) {
    return;
  }
  var rangeVisual = getRangeVisual(nodeModel, 'color') || visuals.color != null && visuals.color !== 'none' && (getRangeVisual(nodeModel, 'colorAlpha') || getRangeVisual(nodeModel, 'colorSaturation'));
  if (!rangeVisual) {
    return;
  }
  var visualMin = nodeModel.get('visualMin');
  var visualMax = nodeModel.get('visualMax');
  var dataExtent = nodeLayout.dataExtent.slice();
  visualMin != null && visualMin < dataExtent[0] && (dataExtent[0] = visualMin);
  visualMax != null && visualMax > dataExtent[1] && (dataExtent[1] = visualMax);
  var colorMappingBy = nodeModel.get('colorMappingBy');
  var opt = {
    type: rangeVisual.name,
    dataExtent: dataExtent,
    visual: rangeVisual.range
  };
  if (opt.type === 'color' && (colorMappingBy === 'index' || colorMappingBy === 'id')) {
    opt.mappingMethod = 'category';
    opt.loop = true;
    // categories is ordinal, so do not set opt.categories.
  } else {
    opt.mappingMethod = 'linear';
  }
  var mapping = new VisualMapping["default"](opt);
  treemapVisual_inner(mapping).drColorMappingBy = colorMappingBy;
  return mapping;
}
// Notice: If we don't have the attribute 'colorRange', but only use
// attribute 'color' to represent both concepts of 'colorRange' and 'color',
// (It means 'colorRange' when 'color' is Array, means 'color' when not array),
// this problem will be encountered:
// If a level-1 node doesn't have children, and its siblings have children,
// and colorRange is set on level-1, then the node cannot be colored.
// So we separate 'colorRange' and 'color' to different attributes.
function getRangeVisual(nodeModel, name) {
  // 'colorRange', 'colorARange', 'colorSRange'.
  // If not exists on this node, fetch from levels and series.
  var range = nodeModel.get(name);
  return (0,util.isArray)(range) && range.length ? {
    name: name,
    range: range
  } : null;
}
function mapVisual(nodeModel, visuals, child, index, mapping, seriesModel) {
  var childVisuals = (0,util.extend)({}, visuals);
  if (mapping) {
    // Only support color, colorAlpha, colorSaturation.
    var mappingType = mapping.type;
    var colorMappingBy = mappingType === 'color' && treemapVisual_inner(mapping).drColorMappingBy;
    var value = colorMappingBy === 'index' ? index : colorMappingBy === 'id' ? seriesModel.mapIdToIndex(child.getId()) : child.getValue(nodeModel.get('visualDimension'));
    childVisuals[mappingType] = mapping.mapValueToVisual(value);
  }
  return childVisuals;
}
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(81731);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/treemap/treemapLayout.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
* The treemap layout implementation was originally copied from
* "d3.js" with some modifications made for this project.
* (See more details in the comment of the method "squarify" below.)
* The use of the source code of this file is also subject to the terms
* and consitions of the license of "d3.js" (BSD-3Clause, see
* </licenses/LICENSE-d3>).
*/





var mathMax = Math.max;
var mathMin = Math.min;
var retrieveValue = util.retrieve;
var each = util.each;
var PATH_BORDER_WIDTH = ['itemStyle', 'borderWidth'];
var PATH_GAP_WIDTH = ['itemStyle', 'gapWidth'];
var PATH_UPPER_LABEL_SHOW = ['upperLabel', 'show'];
var PATH_UPPER_LABEL_HEIGHT = ['upperLabel', 'height'];
;
/**
 * @public
 */
/* ESM default export */ var treemapLayout = ({
  seriesType: 'treemap',
  reset: function (seriesModel, ecModel, api, payload) {
    // Layout result in each node:
    // {x, y, width, height, area, borderWidth}
    var ecWidth = api.getWidth();
    var ecHeight = api.getHeight();
    var seriesOption = seriesModel.option;
    var layoutInfo = util_layout.getLayoutRect(seriesModel.getBoxLayoutParams(), {
      width: api.getWidth(),
      height: api.getHeight()
    });
    var size = seriesOption.size || []; // Compatible with ec2.
    var containerWidth = (0,number.parsePercent)(retrieveValue(layoutInfo.width, size[0]), ecWidth);
    var containerHeight = (0,number.parsePercent)(retrieveValue(layoutInfo.height, size[1]), ecHeight);
    // Fetch payload info.
    var payloadType = payload && payload.type;
    var types = ['treemapZoomToNode', 'treemapRootToNode'];
    var targetInfo = treeHelper.retrieveTargetInfo(payload, types, seriesModel);
    var rootRect = payloadType === 'treemapRender' || payloadType === 'treemapMove' ? payload.rootRect : null;
    var viewRoot = seriesModel.getViewRoot();
    var viewAbovePath = treeHelper.getPathToRoot(viewRoot);
    if (payloadType !== 'treemapMove') {
      var rootSize = payloadType === 'treemapZoomToNode' ? estimateRootSize(seriesModel, targetInfo, viewRoot, containerWidth, containerHeight) : rootRect ? [rootRect.width, rootRect.height] : [containerWidth, containerHeight];
      var sort_1 = seriesOption.sort;
      if (sort_1 && sort_1 !== 'asc' && sort_1 !== 'desc') {
        // Default to be desc order.
        sort_1 = 'desc';
      }
      var options = {
        squareRatio: seriesOption.squareRatio,
        sort: sort_1,
        leafDepth: seriesOption.leafDepth
      };
      // layout should be cleared because using updateView but not update.
      viewRoot.hostTree.clearLayouts();
      // TODO
      // optimize: if out of view clip, do not layout.
      // But take care that if do not render node out of view clip,
      // how to calculate start po
      var viewRootLayout_1 = {
        x: 0,
        y: 0,
        width: rootSize[0],
        height: rootSize[1],
        area: rootSize[0] * rootSize[1]
      };
      viewRoot.setLayout(viewRootLayout_1);
      squarify(viewRoot, options, false, 0);
      // Supplement layout.
      viewRootLayout_1 = viewRoot.getLayout();
      each(viewAbovePath, function (node, index) {
        var childValue = (viewAbovePath[index + 1] || viewRoot).getValue();
        node.setLayout(util.extend({
          dataExtent: [childValue, childValue],
          borderWidth: 0,
          upperHeight: 0
        }, viewRootLayout_1));
      });
    }
    var treeRoot = seriesModel.getData().tree.root;
    treeRoot.setLayout(calculateRootPosition(layoutInfo, rootRect, targetInfo), true);
    seriesModel.setLayoutInfo(layoutInfo);
    // FIXME
    // 现在没有clip功能，暂时取ec高宽。
    prunning(treeRoot,
    // Transform to base element coordinate system.
    new BoundingRect["default"](-layoutInfo.x, -layoutInfo.y, ecWidth, ecHeight), viewAbovePath, viewRoot, 0);
  }
});
/**
 * Layout treemap with squarify algorithm.
 * The original presentation of this algorithm
 * was made by Mark Bruls, Kees Huizing, and Jarke J. van Wijk
 * <https://graphics.ethz.ch/teaching/scivis_common/Literature/squarifiedTreeMaps.pdf>.
 * The implementation of this algorithm was originally copied from "d3.js"
 * <https://github.com/d3/d3/blob/9cc9a875e636a1dcf36cc1e07bdf77e1ad6e2c74/src/layout/treemap.js>
 * with some modifications made for this program.
 * See the license statement at the head of this file.
 *
 * @protected
 * @param {module:echarts/data/Tree~TreeNode} node
 * @param {Object} options
 * @param {string} options.sort 'asc' or 'desc'
 * @param {number} options.squareRatio
 * @param {boolean} hideChildren
 * @param {number} depth
 */
function squarify(node, options, hideChildren, depth) {
  var width;
  var height;
  if (node.isRemoved()) {
    return;
  }
  var thisLayout = node.getLayout();
  width = thisLayout.width;
  height = thisLayout.height;
  // Considering border and gap
  var nodeModel = node.getModel();
  var borderWidth = nodeModel.get(PATH_BORDER_WIDTH);
  var halfGapWidth = nodeModel.get(PATH_GAP_WIDTH) / 2;
  var upperLabelHeight = getUpperLabelHeight(nodeModel);
  var upperHeight = Math.max(borderWidth, upperLabelHeight);
  var layoutOffset = borderWidth - halfGapWidth;
  var layoutOffsetUpper = upperHeight - halfGapWidth;
  node.setLayout({
    borderWidth: borderWidth,
    upperHeight: upperHeight,
    upperLabelHeight: upperLabelHeight
  }, true);
  width = mathMax(width - 2 * layoutOffset, 0);
  height = mathMax(height - layoutOffset - layoutOffsetUpper, 0);
  var totalArea = width * height;
  var viewChildren = initChildren(node, nodeModel, totalArea, options, hideChildren, depth);
  if (!viewChildren.length) {
    return;
  }
  var rect = {
    x: layoutOffset,
    y: layoutOffsetUpper,
    width: width,
    height: height
  };
  var rowFixedLength = mathMin(width, height);
  var best = Infinity; // the best row score so far
  var row = [];
  row.area = 0;
  for (var i = 0, len = viewChildren.length; i < len;) {
    var child = viewChildren[i];
    row.push(child);
    row.area += child.getLayout().area;
    var score = worst(row, rowFixedLength, options.squareRatio);
    // continue with this orientation
    if (score <= best) {
      i++;
      best = score;
    }
    // abort, and try a different orientation
    else {
      row.area -= row.pop().getLayout().area;
      position(row, rowFixedLength, rect, halfGapWidth, false);
      rowFixedLength = mathMin(rect.width, rect.height);
      row.length = row.area = 0;
      best = Infinity;
    }
  }
  if (row.length) {
    position(row, rowFixedLength, rect, halfGapWidth, true);
  }
  if (!hideChildren) {
    var childrenVisibleMin = nodeModel.get('childrenVisibleMin');
    if (childrenVisibleMin != null && totalArea < childrenVisibleMin) {
      hideChildren = true;
    }
  }
  for (var i = 0, len = viewChildren.length; i < len; i++) {
    squarify(viewChildren[i], options, hideChildren, depth + 1);
  }
}
/**
 * Set area to each child, and calculate data extent for visual coding.
 */
function initChildren(node, nodeModel, totalArea, options, hideChildren, depth) {
  var viewChildren = node.children || [];
  var orderBy = options.sort;
  orderBy !== 'asc' && orderBy !== 'desc' && (orderBy = null);
  var overLeafDepth = options.leafDepth != null && options.leafDepth <= depth;
  // leafDepth has higher priority.
  if (hideChildren && !overLeafDepth) {
    return node.viewChildren = [];
  }
  // Sort children, order by desc.
  viewChildren = util.filter(viewChildren, function (child) {
    return !child.isRemoved();
  });
  sort(viewChildren, orderBy);
  var info = statistic(nodeModel, viewChildren, orderBy);
  if (info.sum === 0) {
    return node.viewChildren = [];
  }
  info.sum = filterByThreshold(nodeModel, totalArea, info.sum, orderBy, viewChildren);
  if (info.sum === 0) {
    return node.viewChildren = [];
  }
  // Set area to each child.
  for (var i = 0, len = viewChildren.length; i < len; i++) {
    var area = viewChildren[i].getValue() / info.sum * totalArea;
    // Do not use setLayout({...}, true), because it is needed to clear last layout.
    viewChildren[i].setLayout({
      area: area
    });
  }
  if (overLeafDepth) {
    viewChildren.length && node.setLayout({
      isLeafRoot: true
    }, true);
    viewChildren.length = 0;
  }
  node.viewChildren = viewChildren;
  node.setLayout({
    dataExtent: info.dataExtent
  }, true);
  return viewChildren;
}
/**
 * Consider 'visibleMin'. Modify viewChildren and get new sum.
 */
function filterByThreshold(nodeModel, totalArea, sum, orderBy, orderedChildren) {
  // visibleMin is not supported yet when no option.sort.
  if (!orderBy) {
    return sum;
  }
  var visibleMin = nodeModel.get('visibleMin');
  var len = orderedChildren.length;
  var deletePoint = len;
  // Always travel from little value to big value.
  for (var i = len - 1; i >= 0; i--) {
    var value = orderedChildren[orderBy === 'asc' ? len - i - 1 : i].getValue();
    if (value / sum * totalArea < visibleMin) {
      deletePoint = i;
      sum -= value;
    }
  }
  orderBy === 'asc' ? orderedChildren.splice(0, len - deletePoint) : orderedChildren.splice(deletePoint, len - deletePoint);
  return sum;
}
/**
 * Sort
 */
function sort(viewChildren, orderBy) {
  if (orderBy) {
    viewChildren.sort(function (a, b) {
      var diff = orderBy === 'asc' ? a.getValue() - b.getValue() : b.getValue() - a.getValue();
      return diff === 0 ? orderBy === 'asc' ? a.dataIndex - b.dataIndex : b.dataIndex - a.dataIndex : diff;
    });
  }
  return viewChildren;
}
/**
 * Statistic
 */
function statistic(nodeModel, children, orderBy) {
  // Calculate sum.
  var sum = 0;
  for (var i = 0, len = children.length; i < len; i++) {
    sum += children[i].getValue();
  }
  // Statistic data extent for latter visual coding.
  // Notice: data extent should be calculate based on raw children
  // but not filtered view children, otherwise visual mapping will not
  // be stable when zoom (where children is filtered by visibleMin).
  var dimension = nodeModel.get('visualDimension');
  var dataExtent;
  // The same as area dimension.
  if (!children || !children.length) {
    dataExtent = [NaN, NaN];
  } else if (dimension === 'value' && orderBy) {
    dataExtent = [children[children.length - 1].getValue(), children[0].getValue()];
    orderBy === 'asc' && dataExtent.reverse();
  }
  // Other dimension.
  else {
    dataExtent = [Infinity, -Infinity];
    each(children, function (child) {
      var value = child.getValue(dimension);
      value < dataExtent[0] && (dataExtent[0] = value);
      value > dataExtent[1] && (dataExtent[1] = value);
    });
  }
  return {
    sum: sum,
    dataExtent: dataExtent
  };
}
/**
 * Computes the score for the specified row,
 * as the worst aspect ratio.
 */
function worst(row, rowFixedLength, ratio) {
  var areaMax = 0;
  var areaMin = Infinity;
  for (var i = 0, area = void 0, len = row.length; i < len; i++) {
    area = row[i].getLayout().area;
    if (area) {
      area < areaMin && (areaMin = area);
      area > areaMax && (areaMax = area);
    }
  }
  var squareArea = row.area * row.area;
  var f = rowFixedLength * rowFixedLength * ratio;
  return squareArea ? mathMax(f * areaMax / squareArea, squareArea / (f * areaMin)) : Infinity;
}
/**
 * Positions the specified row of nodes. Modifies `rect`.
 */
function position(row, rowFixedLength, rect, halfGapWidth, flush) {
  // When rowFixedLength === rect.width,
  // it is horizontal subdivision,
  // rowFixedLength is the width of the subdivision,
  // rowOtherLength is the height of the subdivision,
  // and nodes will be positioned from left to right.
  // wh[idx0WhenH] means: when horizontal,
  //      wh[idx0WhenH] => wh[0] => 'width'.
  //      xy[idx1WhenH] => xy[1] => 'y'.
  var idx0WhenH = rowFixedLength === rect.width ? 0 : 1;
  var idx1WhenH = 1 - idx0WhenH;
  var xy = ['x', 'y'];
  var wh = ['width', 'height'];
  var last = rect[xy[idx0WhenH]];
  var rowOtherLength = rowFixedLength ? row.area / rowFixedLength : 0;
  if (flush || rowOtherLength > rect[wh[idx1WhenH]]) {
    rowOtherLength = rect[wh[idx1WhenH]]; // over+underflow
  }
  for (var i = 0, rowLen = row.length; i < rowLen; i++) {
    var node = row[i];
    var nodeLayout = {};
    var step = rowOtherLength ? node.getLayout().area / rowOtherLength : 0;
    var wh1 = nodeLayout[wh[idx1WhenH]] = mathMax(rowOtherLength - 2 * halfGapWidth, 0);
    // We use Math.max/min to avoid negative width/height when considering gap width.
    var remain = rect[xy[idx0WhenH]] + rect[wh[idx0WhenH]] - last;
    var modWH = i === rowLen - 1 || remain < step ? remain : step;
    var wh0 = nodeLayout[wh[idx0WhenH]] = mathMax(modWH - 2 * halfGapWidth, 0);
    nodeLayout[xy[idx1WhenH]] = rect[xy[idx1WhenH]] + mathMin(halfGapWidth, wh1 / 2);
    nodeLayout[xy[idx0WhenH]] = last + mathMin(halfGapWidth, wh0 / 2);
    last += modWH;
    node.setLayout(nodeLayout, true);
  }
  rect[xy[idx1WhenH]] += rowOtherLength;
  rect[wh[idx1WhenH]] -= rowOtherLength;
}
// Return [containerWidth, containerHeight] as default.
function estimateRootSize(seriesModel, targetInfo, viewRoot, containerWidth, containerHeight) {
  // If targetInfo.node exists, we zoom to the node,
  // so estimate whole width and height by target node.
  var currNode = (targetInfo || {}).node;
  var defaultSize = [containerWidth, containerHeight];
  if (!currNode || currNode === viewRoot) {
    return defaultSize;
  }
  var parent;
  var viewArea = containerWidth * containerHeight;
  var area = viewArea * seriesModel.option.zoomToNodeRatio;
  while (parent = currNode.parentNode) {
    // jshint ignore:line
    var sum = 0;
    var siblings = parent.children;
    for (var i = 0, len = siblings.length; i < len; i++) {
      sum += siblings[i].getValue();
    }
    var currNodeValue = currNode.getValue();
    if (currNodeValue === 0) {
      return defaultSize;
    }
    area *= sum / currNodeValue;
    // Considering border, suppose aspect ratio is 1.
    var parentModel = parent.getModel();
    var borderWidth = parentModel.get(PATH_BORDER_WIDTH);
    var upperHeight = Math.max(borderWidth, getUpperLabelHeight(parentModel));
    area += 4 * borderWidth * borderWidth + (3 * borderWidth + upperHeight) * Math.pow(area, 0.5);
    area > number.MAX_SAFE_INTEGER && (area = number.MAX_SAFE_INTEGER);
    currNode = parent;
  }
  area < viewArea && (area = viewArea);
  var scale = Math.pow(area / viewArea, 0.5);
  return [containerWidth * scale, containerHeight * scale];
}
// Root position based on coord of containerGroup
function calculateRootPosition(layoutInfo, rootRect, targetInfo) {
  if (rootRect) {
    return {
      x: rootRect.x,
      y: rootRect.y
    };
  }
  var defaultPosition = {
    x: 0,
    y: 0
  };
  if (!targetInfo) {
    return defaultPosition;
  }
  // If targetInfo is fetched by 'retrieveTargetInfo',
  // old tree and new tree are the same tree,
  // so the node still exists and we can visit it.
  var targetNode = targetInfo.node;
  var layout = targetNode.getLayout();
  if (!layout) {
    return defaultPosition;
  }
  // Transform coord from local to container.
  var targetCenter = [layout.width / 2, layout.height / 2];
  var node = targetNode;
  while (node) {
    var nodeLayout = node.getLayout();
    targetCenter[0] += nodeLayout.x;
    targetCenter[1] += nodeLayout.y;
    node = node.parentNode;
  }
  return {
    x: layoutInfo.width / 2 - targetCenter[0],
    y: layoutInfo.height / 2 - targetCenter[1]
  };
}
// Mark nodes visible for prunning when visual coding and rendering.
// Prunning depends on layout and root position, so we have to do it after layout.
function prunning(node, clipRect, viewAbovePath, viewRoot, depth) {
  var nodeLayout = node.getLayout();
  var nodeInViewAbovePath = viewAbovePath[depth];
  var isAboveViewRoot = nodeInViewAbovePath && nodeInViewAbovePath === node;
  if (nodeInViewAbovePath && !isAboveViewRoot || depth === viewAbovePath.length && node !== viewRoot) {
    return;
  }
  node.setLayout({
    // isInView means: viewRoot sub tree + viewAbovePath
    isInView: true,
    // invisible only means: outside view clip so that the node can not
    // see but still layout for animation preparation but not render.
    invisible: !isAboveViewRoot && !clipRect.intersect(nodeLayout),
    isAboveViewRoot: isAboveViewRoot
  }, true);
  // Transform to child coordinate.
  var childClipRect = new BoundingRect["default"](clipRect.x - nodeLayout.x, clipRect.y - nodeLayout.y, clipRect.width, clipRect.height);
  each(node.viewChildren || [], function (child) {
    prunning(child, childClipRect, viewAbovePath, viewRoot, depth + 1);
  });
}
function getUpperLabelHeight(model) {
  return model.get(PATH_UPPER_LABEL_SHOW) ? model.get(PATH_UPPER_LABEL_HEIGHT) : 0;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/treemap/install.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  registers.registerSeriesModel(TreemapSeries);
  registers.registerChartView(treemap_TreemapView);
  registers.registerVisual(treemapVisual);
  registers.registerLayout(treemapLayout);
  installTreemapAction(registers);
}

}),

}]);