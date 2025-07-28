"use strict";
(self["webpackChunkvue_admin_better"] = self["webpackChunkvue_admin_better"] || []).push([["3067"], {
37643: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  install: function() { return /* binding */ install; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(12012);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Series.js
var Series = __webpack_require__(48134);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/whiskerBoxCommon.js
var whiskerBoxCommon = __webpack_require__(41306);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(96585);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/boxplot/BoxplotSeries.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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




var BoxplotSeries_BoxplotSeriesModel = /** @class */function (_super) {
  (0,tslib_es6.__extends)(BoxplotSeriesModel, _super);
  function BoxplotSeriesModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = BoxplotSeriesModel.type;
    // TODO
    // box width represents group size, so dimension should have 'size'.
    /**
     * @see <https://en.wikipedia.org/wiki/Box_plot>
     * The meanings of 'min' and 'max' depend on user,
     * and echarts do not need to know it.
     * @readOnly
     */
    _this.defaultValueDimensions = [{
      name: 'min',
      defaultTooltip: true
    }, {
      name: 'Q1',
      defaultTooltip: true
    }, {
      name: 'median',
      defaultTooltip: true
    }, {
      name: 'Q3',
      defaultTooltip: true
    }, {
      name: 'max',
      defaultTooltip: true
    }];
    _this.visualDrawType = 'stroke';
    return _this;
  }
  BoxplotSeriesModel.type = 'series.boxplot';
  BoxplotSeriesModel.dependencies = ['xAxis', 'yAxis', 'grid'];
  BoxplotSeriesModel.defaultOption = {
    // zlevel: 0,
    z: 2,
    coordinateSystem: 'cartesian2d',
    legendHoverLink: true,
    layout: null,
    boxWidth: [7, 50],
    itemStyle: {
      color: '#fff',
      borderWidth: 1
    },
    emphasis: {
      scale: true,
      itemStyle: {
        borderWidth: 2,
        shadowBlur: 5,
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowColor: 'rgba(0,0,0,0.2)'
      }
    },
    animationDuration: 800
  };
  return BoxplotSeriesModel;
}(Series["default"]);
(0,util.mixin)(BoxplotSeries_BoxplotSeriesModel, whiskerBoxCommon.WhiskerBoxCommonMixin, true);
/* ESM default export */ var BoxplotSeries = (BoxplotSeries_BoxplotSeriesModel);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/view/Chart.js
var Chart = __webpack_require__(47389);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/graphic.js
var graphic = __webpack_require__(16636);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/states.js
var states = __webpack_require__(63344);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Path.js + 3 modules
var Path = __webpack_require__(49678);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/animation/basicTransition.js
var basicTransition = __webpack_require__(17524);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/boxplot/BoxplotView.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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







var BoxplotView_BoxplotView = /** @class */function (_super) {
  (0,tslib_es6.__extends)(BoxplotView, _super);
  function BoxplotView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = BoxplotView.type;
    return _this;
  }
  BoxplotView.prototype.render = function (seriesModel, ecModel, api) {
    var data = seriesModel.getData();
    var group = this.group;
    var oldData = this._data;
    // There is no old data only when first rendering or switching from
    // stream mode to normal mode, where previous elements should be removed.
    if (!this._data) {
      group.removeAll();
    }
    var constDim = seriesModel.get('layout') === 'horizontal' ? 1 : 0;
    data.diff(oldData).add(function (newIdx) {
      if (data.hasValue(newIdx)) {
        var itemLayout = data.getItemLayout(newIdx);
        var symbolEl = createNormalBox(itemLayout, data, newIdx, constDim, true);
        data.setItemGraphicEl(newIdx, symbolEl);
        group.add(symbolEl);
      }
    }).update(function (newIdx, oldIdx) {
      var symbolEl = oldData.getItemGraphicEl(oldIdx);
      // Empty data
      if (!data.hasValue(newIdx)) {
        group.remove(symbolEl);
        return;
      }
      var itemLayout = data.getItemLayout(newIdx);
      if (!symbolEl) {
        symbolEl = createNormalBox(itemLayout, data, newIdx, constDim);
      } else {
        (0,basicTransition.saveOldStyle)(symbolEl);
        updateNormalBoxData(itemLayout, symbolEl, data, newIdx);
      }
      group.add(symbolEl);
      data.setItemGraphicEl(newIdx, symbolEl);
    }).remove(function (oldIdx) {
      var el = oldData.getItemGraphicEl(oldIdx);
      el && group.remove(el);
    }).execute();
    this._data = data;
  };
  BoxplotView.prototype.remove = function (ecModel) {
    var group = this.group;
    var data = this._data;
    this._data = null;
    data && data.eachItemGraphicEl(function (el) {
      el && group.remove(el);
    });
  };
  BoxplotView.type = 'boxplot';
  return BoxplotView;
}(Chart["default"]);
var BoxplotView_BoxPathShape = /** @class */function () {
  function BoxPathShape() {}
  return BoxPathShape;
}();
var BoxplotView_BoxPath = /** @class */function (_super) {
  (0,tslib_es6.__extends)(BoxPath, _super);
  function BoxPath(opts) {
    var _this = _super.call(this, opts) || this;
    _this.type = 'boxplotBoxPath';
    return _this;
  }
  BoxPath.prototype.getDefaultShape = function () {
    return new BoxplotView_BoxPathShape();
  };
  BoxPath.prototype.buildPath = function (ctx, shape) {
    var ends = shape.points;
    var i = 0;
    ctx.moveTo(ends[i][0], ends[i][1]);
    i++;
    for (; i < 4; i++) {
      ctx.lineTo(ends[i][0], ends[i][1]);
    }
    ctx.closePath();
    for (; i < ends.length; i++) {
      ctx.moveTo(ends[i][0], ends[i][1]);
      i++;
      ctx.lineTo(ends[i][0], ends[i][1]);
    }
  };
  return BoxPath;
}(Path["default"]);
function createNormalBox(itemLayout, data, dataIndex, constDim, isInit) {
  var ends = itemLayout.ends;
  var el = new BoxplotView_BoxPath({
    shape: {
      points: isInit ? transInit(ends, constDim, itemLayout) : ends
    }
  });
  updateNormalBoxData(itemLayout, el, data, dataIndex, isInit);
  return el;
}
function updateNormalBoxData(itemLayout, el, data, dataIndex, isInit) {
  var seriesModel = data.hostModel;
  var updateMethod = graphic[isInit ? 'initProps' : 'updateProps'];
  updateMethod(el, {
    shape: {
      points: itemLayout.ends
    }
  }, seriesModel, dataIndex);
  el.useStyle(data.getItemVisual(dataIndex, 'style'));
  el.style.strokeNoScale = true;
  el.z2 = 100;
  var itemModel = data.getItemModel(dataIndex);
  var emphasisModel = itemModel.getModel('emphasis');
  (0,states.setStatesStylesFromModel)(el, itemModel);
  (0,states.toggleHoverEmphasis)(el, emphasisModel.get('focus'), emphasisModel.get('blurScope'), emphasisModel.get('disabled'));
}
function transInit(points, dim, itemLayout) {
  return util.map(points, function (point) {
    point = point.slice();
    point[dim] = itemLayout.initBaseline;
    return point;
  });
}
/* ESM default export */ var boxplot_BoxplotView = (BoxplotView_BoxplotView);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(81731);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/boxplot/boxplotLayout.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
function boxplotLayout(ecModel) {
  var groupResult = groupSeriesByAxis(ecModel);
  each(groupResult, function (groupItem) {
    var seriesModels = groupItem.seriesModels;
    if (!seriesModels.length) {
      return;
    }
    calculateBase(groupItem);
    each(seriesModels, function (seriesModel, idx) {
      layoutSingleSeries(seriesModel, groupItem.boxOffsetList[idx], groupItem.boxWidthList[idx]);
    });
  });
}
/**
 * Group series by axis.
 */
function groupSeriesByAxis(ecModel) {
  var result = [];
  var axisList = [];
  ecModel.eachSeriesByType('boxplot', function (seriesModel) {
    var baseAxis = seriesModel.getBaseAxis();
    var idx = util.indexOf(axisList, baseAxis);
    if (idx < 0) {
      idx = axisList.length;
      axisList[idx] = baseAxis;
      result[idx] = {
        axis: baseAxis,
        seriesModels: []
      };
    }
    result[idx].seriesModels.push(seriesModel);
  });
  return result;
}
/**
 * Calculate offset and box width for each series.
 */
function calculateBase(groupItem) {
  var baseAxis = groupItem.axis;
  var seriesModels = groupItem.seriesModels;
  var seriesCount = seriesModels.length;
  var boxWidthList = groupItem.boxWidthList = [];
  var boxOffsetList = groupItem.boxOffsetList = [];
  var boundList = [];
  var bandWidth;
  if (baseAxis.type === 'category') {
    bandWidth = baseAxis.getBandWidth();
  } else {
    var maxDataCount_1 = 0;
    each(seriesModels, function (seriesModel) {
      maxDataCount_1 = Math.max(maxDataCount_1, seriesModel.getData().count());
    });
    var extent = baseAxis.getExtent();
    bandWidth = Math.abs(extent[1] - extent[0]) / maxDataCount_1;
  }
  each(seriesModels, function (seriesModel) {
    var boxWidthBound = seriesModel.get('boxWidth');
    if (!util.isArray(boxWidthBound)) {
      boxWidthBound = [boxWidthBound, boxWidthBound];
    }
    boundList.push([(0,number.parsePercent)(boxWidthBound[0], bandWidth) || 0, (0,number.parsePercent)(boxWidthBound[1], bandWidth) || 0]);
  });
  var availableWidth = bandWidth * 0.8 - 2;
  var boxGap = availableWidth / seriesCount * 0.3;
  var boxWidth = (availableWidth - boxGap * (seriesCount - 1)) / seriesCount;
  var base = boxWidth / 2 - availableWidth / 2;
  each(seriesModels, function (seriesModel, idx) {
    boxOffsetList.push(base);
    base += boxGap + boxWidth;
    boxWidthList.push(Math.min(Math.max(boxWidth, boundList[idx][0]), boundList[idx][1]));
  });
}
/**
 * Calculate points location for each series.
 */
function layoutSingleSeries(seriesModel, offset, boxWidth) {
  var coordSys = seriesModel.coordinateSystem;
  var data = seriesModel.getData();
  var halfWidth = boxWidth / 2;
  var cDimIdx = seriesModel.get('layout') === 'horizontal' ? 0 : 1;
  var vDimIdx = 1 - cDimIdx;
  var coordDims = ['x', 'y'];
  var cDim = data.mapDimension(coordDims[cDimIdx]);
  var vDims = data.mapDimensionsAll(coordDims[vDimIdx]);
  if (cDim == null || vDims.length < 5) {
    return;
  }
  for (var dataIndex = 0; dataIndex < data.count(); dataIndex++) {
    var axisDimVal = data.get(cDim, dataIndex);
    var median = getPoint(axisDimVal, vDims[2], dataIndex);
    var end1 = getPoint(axisDimVal, vDims[0], dataIndex);
    var end2 = getPoint(axisDimVal, vDims[1], dataIndex);
    var end4 = getPoint(axisDimVal, vDims[3], dataIndex);
    var end5 = getPoint(axisDimVal, vDims[4], dataIndex);
    var ends = [];
    addBodyEnd(ends, end2, false);
    addBodyEnd(ends, end4, true);
    ends.push(end1, end2, end5, end4);
    layEndLine(ends, end1);
    layEndLine(ends, end5);
    layEndLine(ends, median);
    data.setItemLayout(dataIndex, {
      initBaseline: median[vDimIdx],
      ends: ends
    });
  }
  function getPoint(axisDimVal, dim, dataIndex) {
    var val = data.get(dim, dataIndex);
    var p = [];
    p[cDimIdx] = axisDimVal;
    p[vDimIdx] = val;
    var point;
    if (isNaN(axisDimVal) || isNaN(val)) {
      point = [NaN, NaN];
    } else {
      point = coordSys.dataToPoint(p);
      point[cDimIdx] += offset;
    }
    return point;
  }
  function addBodyEnd(ends, point, start) {
    var point1 = point.slice();
    var point2 = point.slice();
    point1[cDimIdx] += halfWidth;
    point2[cDimIdx] -= halfWidth;
    start ? ends.push(point1, point2) : ends.push(point2, point1);
  }
  function layEndLine(ends, endCenter) {
    var from = endCenter.slice();
    var to = endCenter.slice();
    from[cDimIdx] -= halfWidth;
    to[cDimIdx] += halfWidth;
    ends.push(from, to);
  }
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/boxplot/prepareBoxplotData.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
 * See:
 *  <https://en.wikipedia.org/wiki/Box_plot#cite_note-frigge_hoaglin_iglewicz-2>
 *  <http://stat.ethz.ch/R-manual/R-devel/library/grDevices/html/boxplot.stats.html>
 *
 * Helper method for preparing data.
 *
 * @param rawData like
 *        [
 *            [12,232,443], (raw data set for the first box)
 *            [3843,5545,1232], (raw data set for the second box)
 *            ...
 *        ]
 * @param opt.boundIQR=1.5 Data less than min bound is outlier.
 *      default 1.5, means Q1 - 1.5 * (Q3 - Q1).
 *      If 'none'/0 passed, min bound will not be used.
 */
function prepareBoxplotData(rawData, opt) {
  opt = opt || {};
  var boxData = [];
  var outliers = [];
  var boundIQR = opt.boundIQR;
  var useExtreme = boundIQR === 'none' || boundIQR === 0;
  for (var i = 0; i < rawData.length; i++) {
    var ascList = (0,number.asc)(rawData[i].slice());
    var Q1 = (0,number.quantile)(ascList, 0.25);
    var Q2 = (0,number.quantile)(ascList, 0.5);
    var Q3 = (0,number.quantile)(ascList, 0.75);
    var min = ascList[0];
    var max = ascList[ascList.length - 1];
    var bound = (boundIQR == null ? 1.5 : boundIQR) * (Q3 - Q1);
    var low = useExtreme ? min : Math.max(min, Q1 - bound);
    var high = useExtreme ? max : Math.min(max, Q3 + bound);
    var itemNameFormatter = opt.itemNameFormatter;
    var itemName = (0,util.isFunction)(itemNameFormatter) ? itemNameFormatter({
      value: i
    }) : (0,util.isString)(itemNameFormatter) ? itemNameFormatter.replace('{value}', i + '') : i + '';
    boxData.push([itemName, low, Q1, Q2, Q3, high]);
    for (var j = 0; j < ascList.length; j++) {
      var dataItem = ascList[j];
      if (dataItem < low || dataItem > high) {
        var outlier = [itemName, dataItem];
        outliers.push(outlier);
      }
    }
  }
  return {
    boxData: boxData,
    outliers: outliers
  };
}
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/log.js
var log = __webpack_require__(99833);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/types.js
var types = __webpack_require__(15693);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/boxplot/boxplotTransform.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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



var boxplotTransform = {
  type: 'echarts:boxplot',
  transform: function transform(params) {
    var upstream = params.upstream;
    if (upstream.sourceFormat !== types.SOURCE_FORMAT_ARRAY_ROWS) {
      var errMsg = '';
      if (false) {}
      (0,log.throwError)(errMsg);
    }
    var result = prepareBoxplotData(upstream.getRawData(), params.config);
    return [{
      dimensions: ['ItemName', 'Low', 'Q1', 'Q2', 'Q3', 'High'],
      data: result.boxData
    }, {
      data: result.outliers
    }];
  }
};
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/boxplot/install.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  registers.registerSeriesModel(BoxplotSeries);
  registers.registerChartView(boxplot_BoxplotView);
  registers.registerLayout(boxplotLayout);
  registers.registerTransform(boxplotTransform);
}

}),
97025: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
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
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/graphic.js
var graphic = __webpack_require__(16636);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/animation/basicTransition.js
var basicTransition = __webpack_require__(17524);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/states.js
var states = __webpack_require__(63344);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Path.js + 3 modules
var Path = __webpack_require__(49678);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/createClipPathFromCoordSys.js
var createClipPathFromCoordSys = __webpack_require__(92741);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/createRenderPlanner.js
var createRenderPlanner = __webpack_require__(94431);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/candlestick/candlestickVisual.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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


var positiveBorderColorQuery = ['itemStyle', 'borderColor'];
var negativeBorderColorQuery = ['itemStyle', 'borderColor0'];
var dojiBorderColorQuery = ['itemStyle', 'borderColorDoji'];
var positiveColorQuery = ['itemStyle', 'color'];
var negativeColorQuery = ['itemStyle', 'color0'];
function getColor(sign, model) {
  return model.get(sign > 0 ? positiveColorQuery : negativeColorQuery);
}
function getBorderColor(sign, model) {
  return model.get(sign === 0 ? dojiBorderColorQuery : sign > 0 ? positiveBorderColorQuery : negativeBorderColorQuery);
}
var candlestickVisual_candlestickVisual = {
  seriesType: 'candlestick',
  plan: (0,createRenderPlanner["default"])(),
  // For legend.
  performRawSeries: true,
  reset: function (seriesModel, ecModel) {
    // Only visible series has each data be visual encoded
    if (ecModel.isSeriesFiltered(seriesModel)) {
      return;
    }
    var isLargeRender = seriesModel.pipelineContext.large;
    return !isLargeRender && {
      progress: function (params, data) {
        var dataIndex;
        while ((dataIndex = params.next()) != null) {
          var itemModel = data.getItemModel(dataIndex);
          var sign = data.getItemLayout(dataIndex).sign;
          var style = itemModel.getItemStyle();
          style.fill = getColor(sign, itemModel);
          style.stroke = getBorderColor(sign, itemModel) || style.fill;
          var existsStyle = data.ensureUniqueItemVisual(dataIndex, 'style');
          (0,util.extend)(existsStyle, style);
        }
      }
    };
  }
};
/* ESM default export */ var candlestickVisual = (candlestickVisual_candlestickVisual);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/candlestick/CandlestickView.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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









var SKIP_PROPS = ['color', 'borderColor'];
var CandlestickView_CandlestickView = /** @class */function (_super) {
  (0,tslib_es6.__extends)(CandlestickView, _super);
  function CandlestickView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = CandlestickView.type;
    return _this;
  }
  CandlestickView.prototype.render = function (seriesModel, ecModel, api) {
    // If there is clipPath created in large mode. Remove it.
    this.group.removeClipPath();
    // Clear previously rendered progressive elements.
    this._progressiveEls = null;
    this._updateDrawMode(seriesModel);
    this._isLargeDraw ? this._renderLarge(seriesModel) : this._renderNormal(seriesModel);
  };
  CandlestickView.prototype.incrementalPrepareRender = function (seriesModel, ecModel, api) {
    this._clear();
    this._updateDrawMode(seriesModel);
  };
  CandlestickView.prototype.incrementalRender = function (params, seriesModel, ecModel, api) {
    this._progressiveEls = [];
    this._isLargeDraw ? this._incrementalRenderLarge(params, seriesModel) : this._incrementalRenderNormal(params, seriesModel);
  };
  CandlestickView.prototype.eachRendered = function (cb) {
    graphic.traverseElements(this._progressiveEls || this.group, cb);
  };
  CandlestickView.prototype._updateDrawMode = function (seriesModel) {
    var isLargeDraw = seriesModel.pipelineContext.large;
    if (this._isLargeDraw == null || isLargeDraw !== this._isLargeDraw) {
      this._isLargeDraw = isLargeDraw;
      this._clear();
    }
  };
  CandlestickView.prototype._renderNormal = function (seriesModel) {
    var data = seriesModel.getData();
    var oldData = this._data;
    var group = this.group;
    var isSimpleBox = data.getLayout('isSimpleBox');
    var needsClip = seriesModel.get('clip', true);
    var coord = seriesModel.coordinateSystem;
    var clipArea = coord.getArea && coord.getArea();
    // There is no old data only when first rendering or switching from
    // stream mode to normal mode, where previous elements should be removed.
    if (!this._data) {
      group.removeAll();
    }
    data.diff(oldData).add(function (newIdx) {
      if (data.hasValue(newIdx)) {
        var itemLayout = data.getItemLayout(newIdx);
        if (needsClip && isNormalBoxClipped(clipArea, itemLayout)) {
          return;
        }
        var el = createNormalBox(itemLayout, newIdx, true);
        basicTransition.initProps(el, {
          shape: {
            points: itemLayout.ends
          }
        }, seriesModel, newIdx);
        setBoxCommon(el, data, newIdx, isSimpleBox);
        group.add(el);
        data.setItemGraphicEl(newIdx, el);
      }
    }).update(function (newIdx, oldIdx) {
      var el = oldData.getItemGraphicEl(oldIdx);
      // Empty data
      if (!data.hasValue(newIdx)) {
        group.remove(el);
        return;
      }
      var itemLayout = data.getItemLayout(newIdx);
      if (needsClip && isNormalBoxClipped(clipArea, itemLayout)) {
        group.remove(el);
        return;
      }
      if (!el) {
        el = createNormalBox(itemLayout, newIdx);
      } else {
        basicTransition.updateProps(el, {
          shape: {
            points: itemLayout.ends
          }
        }, seriesModel, newIdx);
        (0,basicTransition.saveOldStyle)(el);
      }
      setBoxCommon(el, data, newIdx, isSimpleBox);
      group.add(el);
      data.setItemGraphicEl(newIdx, el);
    }).remove(function (oldIdx) {
      var el = oldData.getItemGraphicEl(oldIdx);
      el && group.remove(el);
    }).execute();
    this._data = data;
  };
  CandlestickView.prototype._renderLarge = function (seriesModel) {
    this._clear();
    createLarge(seriesModel, this.group);
    var clipPath = seriesModel.get('clip', true) ? (0,createClipPathFromCoordSys.createClipPath)(seriesModel.coordinateSystem, false, seriesModel) : null;
    if (clipPath) {
      this.group.setClipPath(clipPath);
    } else {
      this.group.removeClipPath();
    }
  };
  CandlestickView.prototype._incrementalRenderNormal = function (params, seriesModel) {
    var data = seriesModel.getData();
    var isSimpleBox = data.getLayout('isSimpleBox');
    var dataIndex;
    while ((dataIndex = params.next()) != null) {
      var itemLayout = data.getItemLayout(dataIndex);
      var el = createNormalBox(itemLayout, dataIndex);
      setBoxCommon(el, data, dataIndex, isSimpleBox);
      el.incremental = true;
      this.group.add(el);
      this._progressiveEls.push(el);
    }
  };
  CandlestickView.prototype._incrementalRenderLarge = function (params, seriesModel) {
    createLarge(seriesModel, this.group, this._progressiveEls, true);
  };
  CandlestickView.prototype.remove = function (ecModel) {
    this._clear();
  };
  CandlestickView.prototype._clear = function () {
    this.group.removeAll();
    this._data = null;
  };
  CandlestickView.type = 'candlestick';
  return CandlestickView;
}(Chart["default"]);
var CandlestickView_NormalBoxPathShape = /** @class */function () {
  function NormalBoxPathShape() {}
  return NormalBoxPathShape;
}();
var CandlestickView_NormalBoxPath = /** @class */function (_super) {
  (0,tslib_es6.__extends)(NormalBoxPath, _super);
  function NormalBoxPath(opts) {
    var _this = _super.call(this, opts) || this;
    _this.type = 'normalCandlestickBox';
    return _this;
  }
  NormalBoxPath.prototype.getDefaultShape = function () {
    return new CandlestickView_NormalBoxPathShape();
  };
  NormalBoxPath.prototype.buildPath = function (ctx, shape) {
    var ends = shape.points;
    if (this.__simpleBox) {
      ctx.moveTo(ends[4][0], ends[4][1]);
      ctx.lineTo(ends[6][0], ends[6][1]);
    } else {
      ctx.moveTo(ends[0][0], ends[0][1]);
      ctx.lineTo(ends[1][0], ends[1][1]);
      ctx.lineTo(ends[2][0], ends[2][1]);
      ctx.lineTo(ends[3][0], ends[3][1]);
      ctx.closePath();
      ctx.moveTo(ends[4][0], ends[4][1]);
      ctx.lineTo(ends[5][0], ends[5][1]);
      ctx.moveTo(ends[6][0], ends[6][1]);
      ctx.lineTo(ends[7][0], ends[7][1]);
    }
  };
  return NormalBoxPath;
}(Path["default"]);
function createNormalBox(itemLayout, dataIndex, isInit) {
  var ends = itemLayout.ends;
  return new CandlestickView_NormalBoxPath({
    shape: {
      points: isInit ? transInit(ends, itemLayout) : ends
    },
    z2: 100
  });
}
function isNormalBoxClipped(clipArea, itemLayout) {
  var clipped = true;
  for (var i = 0; i < itemLayout.ends.length; i++) {
    // If any point are in the region.
    if (clipArea.contain(itemLayout.ends[i][0], itemLayout.ends[i][1])) {
      clipped = false;
      break;
    }
  }
  return clipped;
}
function setBoxCommon(el, data, dataIndex, isSimpleBox) {
  var itemModel = data.getItemModel(dataIndex);
  el.useStyle(data.getItemVisual(dataIndex, 'style'));
  el.style.strokeNoScale = true;
  el.__simpleBox = isSimpleBox;
  (0,states.setStatesStylesFromModel)(el, itemModel);
  var sign = data.getItemLayout(dataIndex).sign;
  util.each(el.states, function (state, stateName) {
    var stateModel = itemModel.getModel(stateName);
    var color = getColor(sign, stateModel);
    var borderColor = getBorderColor(sign, stateModel) || color;
    var stateStyle = state.style || (state.style = {});
    color && (stateStyle.fill = color);
    borderColor && (stateStyle.stroke = borderColor);
  });
  var emphasisModel = itemModel.getModel('emphasis');
  (0,states.toggleHoverEmphasis)(el, emphasisModel.get('focus'), emphasisModel.get('blurScope'), emphasisModel.get('disabled'));
}
function transInit(points, itemLayout) {
  return util.map(points, function (point) {
    point = point.slice();
    point[1] = itemLayout.initBaseline;
    return point;
  });
}
var CandlestickView_LargeBoxPathShape = /** @class */function () {
  function LargeBoxPathShape() {}
  return LargeBoxPathShape;
}();
var CandlestickView_LargeBoxPath = /** @class */function (_super) {
  (0,tslib_es6.__extends)(LargeBoxPath, _super);
  function LargeBoxPath(opts) {
    var _this = _super.call(this, opts) || this;
    _this.type = 'largeCandlestickBox';
    return _this;
  }
  LargeBoxPath.prototype.getDefaultShape = function () {
    return new CandlestickView_LargeBoxPathShape();
  };
  LargeBoxPath.prototype.buildPath = function (ctx, shape) {
    // Drawing lines is more efficient than drawing
    // a whole line or drawing rects.
    var points = shape.points;
    for (var i = 0; i < points.length;) {
      if (this.__sign === points[i++]) {
        var x = points[i++];
        ctx.moveTo(x, points[i++]);
        ctx.lineTo(x, points[i++]);
      } else {
        i += 3;
      }
    }
  };
  return LargeBoxPath;
}(Path["default"]);
function createLarge(seriesModel, group, progressiveEls, incremental) {
  var data = seriesModel.getData();
  var largePoints = data.getLayout('largePoints');
  var elP = new CandlestickView_LargeBoxPath({
    shape: {
      points: largePoints
    },
    __sign: 1,
    ignoreCoarsePointer: true
  });
  group.add(elP);
  var elN = new CandlestickView_LargeBoxPath({
    shape: {
      points: largePoints
    },
    __sign: -1,
    ignoreCoarsePointer: true
  });
  group.add(elN);
  var elDoji = new CandlestickView_LargeBoxPath({
    shape: {
      points: largePoints
    },
    __sign: 0,
    ignoreCoarsePointer: true
  });
  group.add(elDoji);
  setLargeStyle(1, elP, seriesModel, data);
  setLargeStyle(-1, elN, seriesModel, data);
  setLargeStyle(0, elDoji, seriesModel, data);
  if (incremental) {
    elP.incremental = true;
    elN.incremental = true;
  }
  if (progressiveEls) {
    progressiveEls.push(elP, elN);
  }
}
function setLargeStyle(sign, el, seriesModel, data) {
  // TODO put in visual?
  var borderColor = getBorderColor(sign, seriesModel)
  // Use color for border color by default.
  || getColor(sign, seriesModel);
  // Color must be excluded.
  // Because symbol provide setColor individually to set fill and stroke
  var itemStyle = seriesModel.getModel('itemStyle').getItemStyle(SKIP_PROPS);
  el.useStyle(itemStyle);
  el.style.fill = null;
  el.style.stroke = borderColor;
}
/* ESM default export */ var candlestick_CandlestickView = (CandlestickView_CandlestickView);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Series.js
var Series = __webpack_require__(48134);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/whiskerBoxCommon.js
var whiskerBoxCommon = __webpack_require__(41306);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/candlestick/CandlestickSeries.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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




var CandlestickSeries_CandlestickSeriesModel = /** @class */function (_super) {
  (0,tslib_es6.__extends)(CandlestickSeriesModel, _super);
  function CandlestickSeriesModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = CandlestickSeriesModel.type;
    _this.defaultValueDimensions = [{
      name: 'open',
      defaultTooltip: true
    }, {
      name: 'close',
      defaultTooltip: true
    }, {
      name: 'lowest',
      defaultTooltip: true
    }, {
      name: 'highest',
      defaultTooltip: true
    }];
    return _this;
  }
  /**
   * Get dimension for shadow in dataZoom
   * @return dimension name
   */
  CandlestickSeriesModel.prototype.getShadowDim = function () {
    return 'open';
  };
  CandlestickSeriesModel.prototype.brushSelector = function (dataIndex, data, selectors) {
    var itemLayout = data.getItemLayout(dataIndex);
    return itemLayout && selectors.rect(itemLayout.brushRect);
  };
  CandlestickSeriesModel.type = 'series.candlestick';
  CandlestickSeriesModel.dependencies = ['xAxis', 'yAxis', 'grid'];
  CandlestickSeriesModel.defaultOption = {
    // zlevel: 0,
    z: 2,
    coordinateSystem: 'cartesian2d',
    legendHoverLink: true,
    // xAxisIndex: 0,
    // yAxisIndex: 0,
    layout: null,
    clip: true,
    itemStyle: {
      color: '#eb5454',
      color0: '#47b262',
      borderColor: '#eb5454',
      borderColor0: '#47b262',
      borderColorDoji: null,
      // borderColor: '#d24040',
      // borderColor0: '#398f4f',
      borderWidth: 1
    },
    emphasis: {
      itemStyle: {
        borderWidth: 2
      }
    },
    barMaxWidth: null,
    barMinWidth: null,
    barWidth: null,
    large: true,
    largeThreshold: 600,
    progressive: 3e3,
    progressiveThreshold: 1e4,
    progressiveChunkMode: 'mod',
    animationEasing: 'linear',
    animationDuration: 300
  };
  return CandlestickSeriesModel;
}(Series["default"]);
(0,util.mixin)(CandlestickSeries_CandlestickSeriesModel, whiskerBoxCommon.WhiskerBoxCommonMixin, true);
/* ESM default export */ var CandlestickSeries = (CandlestickSeries_CandlestickSeriesModel);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/candlestick/preprocessor.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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

function candlestickPreprocessor(option) {
  if (!option || !util.isArray(option.series)) {
    return;
  }
  // Translate 'k' to 'candlestick'.
  util.each(option.series, function (seriesItem) {
    if (util.isObject(seriesItem) && seriesItem.type === 'k') {
      seriesItem.type = 'candlestick';
    }
  });
}
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(81731);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/vendor.js
var vendor = __webpack_require__(27129);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/candlestick/candlestickLayout.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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





var candlestickLayout_candlestickLayout = {
  seriesType: 'candlestick',
  plan: (0,createRenderPlanner["default"])(),
  reset: function (seriesModel) {
    var coordSys = seriesModel.coordinateSystem;
    var data = seriesModel.getData();
    var candleWidth = calculateCandleWidth(seriesModel, data);
    var cDimIdx = 0;
    var vDimIdx = 1;
    var coordDims = ['x', 'y'];
    var cDimI = data.getDimensionIndex(data.mapDimension(coordDims[cDimIdx]));
    var vDimsI = (0,util.map)(data.mapDimensionsAll(coordDims[vDimIdx]), data.getDimensionIndex, data);
    var openDimI = vDimsI[0];
    var closeDimI = vDimsI[1];
    var lowestDimI = vDimsI[2];
    var highestDimI = vDimsI[3];
    data.setLayout({
      candleWidth: candleWidth,
      // The value is experimented visually.
      isSimpleBox: candleWidth <= 1.3
    });
    if (cDimI < 0 || vDimsI.length < 4) {
      return;
    }
    return {
      progress: seriesModel.pipelineContext.large ? largeProgress : normalProgress
    };
    function normalProgress(params, data) {
      var dataIndex;
      var store = data.getStore();
      while ((dataIndex = params.next()) != null) {
        var axisDimVal = store.get(cDimI, dataIndex);
        var openVal = store.get(openDimI, dataIndex);
        var closeVal = store.get(closeDimI, dataIndex);
        var lowestVal = store.get(lowestDimI, dataIndex);
        var highestVal = store.get(highestDimI, dataIndex);
        var ocLow = Math.min(openVal, closeVal);
        var ocHigh = Math.max(openVal, closeVal);
        var ocLowPoint = getPoint(ocLow, axisDimVal);
        var ocHighPoint = getPoint(ocHigh, axisDimVal);
        var lowestPoint = getPoint(lowestVal, axisDimVal);
        var highestPoint = getPoint(highestVal, axisDimVal);
        var ends = [];
        addBodyEnd(ends, ocHighPoint, 0);
        addBodyEnd(ends, ocLowPoint, 1);
        ends.push(subPixelOptimizePoint(highestPoint), subPixelOptimizePoint(ocHighPoint), subPixelOptimizePoint(lowestPoint), subPixelOptimizePoint(ocLowPoint));
        var itemModel = data.getItemModel(dataIndex);
        var hasDojiColor = !!itemModel.get(['itemStyle', 'borderColorDoji']);
        data.setItemLayout(dataIndex, {
          sign: getSign(store, dataIndex, openVal, closeVal, closeDimI, hasDojiColor),
          initBaseline: openVal > closeVal ? ocHighPoint[vDimIdx] : ocLowPoint[vDimIdx],
          ends: ends,
          brushRect: makeBrushRect(lowestVal, highestVal, axisDimVal)
        });
      }
      function getPoint(val, axisDimVal) {
        var p = [];
        p[cDimIdx] = axisDimVal;
        p[vDimIdx] = val;
        return isNaN(axisDimVal) || isNaN(val) ? [NaN, NaN] : coordSys.dataToPoint(p);
      }
      function addBodyEnd(ends, point, start) {
        var point1 = point.slice();
        var point2 = point.slice();
        point1[cDimIdx] = (0,graphic.subPixelOptimize)(point1[cDimIdx] + candleWidth / 2, 1, false);
        point2[cDimIdx] = (0,graphic.subPixelOptimize)(point2[cDimIdx] - candleWidth / 2, 1, true);
        start ? ends.push(point1, point2) : ends.push(point2, point1);
      }
      function makeBrushRect(lowestVal, highestVal, axisDimVal) {
        var pmin = getPoint(lowestVal, axisDimVal);
        var pmax = getPoint(highestVal, axisDimVal);
        pmin[cDimIdx] -= candleWidth / 2;
        pmax[cDimIdx] -= candleWidth / 2;
        return {
          x: pmin[0],
          y: pmin[1],
          width: vDimIdx ? candleWidth : pmax[0] - pmin[0],
          height: vDimIdx ? pmax[1] - pmin[1] : candleWidth
        };
      }
      function subPixelOptimizePoint(point) {
        point[cDimIdx] = (0,graphic.subPixelOptimize)(point[cDimIdx], 1);
        return point;
      }
    }
    function largeProgress(params, data) {
      // Structure: [sign, x, yhigh, ylow, sign, x, yhigh, ylow, ...]
      var points = (0,vendor.createFloat32Array)(params.count * 4);
      var offset = 0;
      var point;
      var tmpIn = [];
      var tmpOut = [];
      var dataIndex;
      var store = data.getStore();
      var hasDojiColor = !!seriesModel.get(['itemStyle', 'borderColorDoji']);
      while ((dataIndex = params.next()) != null) {
        var axisDimVal = store.get(cDimI, dataIndex);
        var openVal = store.get(openDimI, dataIndex);
        var closeVal = store.get(closeDimI, dataIndex);
        var lowestVal = store.get(lowestDimI, dataIndex);
        var highestVal = store.get(highestDimI, dataIndex);
        if (isNaN(axisDimVal) || isNaN(lowestVal) || isNaN(highestVal)) {
          points[offset++] = NaN;
          offset += 3;
          continue;
        }
        points[offset++] = getSign(store, dataIndex, openVal, closeVal, closeDimI, hasDojiColor);
        tmpIn[cDimIdx] = axisDimVal;
        tmpIn[vDimIdx] = lowestVal;
        point = coordSys.dataToPoint(tmpIn, null, tmpOut);
        points[offset++] = point ? point[0] : NaN;
        points[offset++] = point ? point[1] : NaN;
        tmpIn[vDimIdx] = highestVal;
        point = coordSys.dataToPoint(tmpIn, null, tmpOut);
        points[offset++] = point ? point[1] : NaN;
      }
      data.setLayout('largePoints', points);
    }
  }
};
/**
 * Get the sign of a single data.
 *
 * @returns 0 for doji with hasDojiColor: true,
 *          1 for positive,
 *          -1 for negative.
 */
function getSign(store, dataIndex, openVal, closeVal, closeDimI, hasDojiColor) {
  var sign;
  if (openVal > closeVal) {
    sign = -1;
  } else if (openVal < closeVal) {
    sign = 1;
  } else {
    sign = hasDojiColor
    // When doji color is set, use it instead of color/color0.
    ? 0 : dataIndex > 0
    // If close === open, compare with close of last record
    ? store.get(closeDimI, dataIndex - 1) <= closeVal ? 1 : -1
    // No record of previous, set to be positive
    : 1;
  }
  return sign;
}
function calculateCandleWidth(seriesModel, data) {
  var baseAxis = seriesModel.getBaseAxis();
  var extent;
  var bandWidth = baseAxis.type === 'category' ? baseAxis.getBandWidth() : (extent = baseAxis.getExtent(), Math.abs(extent[1] - extent[0]) / data.count());
  var barMaxWidth = (0,number.parsePercent)((0,util.retrieve2)(seriesModel.get('barMaxWidth'), bandWidth), bandWidth);
  var barMinWidth = (0,number.parsePercent)((0,util.retrieve2)(seriesModel.get('barMinWidth'), 1), bandWidth);
  var barWidth = seriesModel.get('barWidth');
  return barWidth != null ? (0,number.parsePercent)(barWidth, bandWidth)
  // Put max outer to ensure bar visible in spite of overlap.
  : Math.max(Math.min(bandWidth / 2, barMaxWidth), barMinWidth);
}
/* ESM default export */ var candlestickLayout = (candlestickLayout_candlestickLayout);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/candlestick/install.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  registers.registerChartView(candlestick_CandlestickView);
  registers.registerSeriesModel(CandlestickSeries);
  registers.registerPreprocessor(candlestickPreprocessor);
  registers.registerVisual(candlestickVisual);
  registers.registerLayout(candlestickLayout);
}

}),
86734: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
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
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/model.js
var model = __webpack_require__(46451);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Series.js
var Series = __webpack_require__(48134);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/custom/CustomSeries.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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




// Also compat with ec4, where
// `visual('color') visual('borderColor')` is supported.
var STYLE_VISUAL_TYPE = {
  color: 'fill',
  borderColor: 'stroke'
};
var NON_STYLE_VISUAL_PROPS = {
  symbol: 1,
  symbolSize: 1,
  symbolKeepAspect: 1,
  legendIcon: 1,
  visualMeta: 1,
  liftZ: 1,
  decal: 1
};
;
var customInnerStore = (0,model.makeInner)();
var CustomSeries_CustomSeriesModel = /** @class */function (_super) {
  (0,tslib_es6.__extends)(CustomSeriesModel, _super);
  function CustomSeriesModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = CustomSeriesModel.type;
    return _this;
  }
  CustomSeriesModel.prototype.optionUpdated = function () {
    this.currentZLevel = this.get('zlevel', true);
    this.currentZ = this.get('z', true);
  };
  CustomSeriesModel.prototype.getInitialData = function (option, ecModel) {
    return (0,createSeriesData["default"])(null, this);
  };
  CustomSeriesModel.prototype.getDataParams = function (dataIndex, dataType, el) {
    var params = _super.prototype.getDataParams.call(this, dataIndex, dataType);
    el && (params.info = customInnerStore(el).info);
    return params;
  };
  CustomSeriesModel.type = 'series.custom';
  CustomSeriesModel.dependencies = ['grid', 'polar', 'geo', 'singleAxis', 'calendar'];
  CustomSeriesModel.defaultOption = {
    coordinateSystem: 'cartesian2d',
    // zlevel: 0,
    z: 2,
    legendHoverLink: true,
    // Custom series will not clip by default.
    // Some case will use custom series to draw label
    // For example https://echarts.apache.org/examples/en/editor.html?c=custom-gantt-flight
    clip: false
    // Cartesian coordinate system
    // xAxisIndex: 0,
    // yAxisIndex: 0,
    // Polar coordinate system
    // polarIndex: 0,
    // Geo coordinate system
    // geoIndex: 0,
  };
  return CustomSeriesModel;
}(Series["default"]);
/* ESM default export */ var CustomSeries = (CustomSeries_CustomSeriesModel);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(96585);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Path.js + 3 modules
var Path = __webpack_require__(49678);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/graphic.js
var graphic = __webpack_require__(16636);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Image.js
var Image = __webpack_require__(31386);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Text.js
var Text = __webpack_require__(97199);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Group.js
var Group = __webpack_require__(58695);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/states.js
var states = __webpack_require__(63344);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/label/labelStyle.js
var labelStyle = __webpack_require__(77704);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/labelHelper.js
var labelHelper = __webpack_require__(8169);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/layout/barGrid.js
var barGrid = __webpack_require__(12105);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/data/DataDiffer.js
var DataDiffer = __webpack_require__(4055);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/view/Chart.js
var Chart = __webpack_require__(47389);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/createClipPathFromCoordSys.js
var createClipPathFromCoordSys = __webpack_require__(92741);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/cartesian/prepareCustom.js
var prepareCustom = __webpack_require__(35371);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/geo/prepareCustom.js
var geo_prepareCustom = __webpack_require__(98493);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/single/prepareCustom.js
var single_prepareCustom = __webpack_require__(44773);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/polar/prepareCustom.js
var polar_prepareCustom = __webpack_require__(66199);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/calendar/prepareCustom.js
var calendar_prepareCustom = __webpack_require__(16355);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Displayable.js
var Displayable = __webpack_require__(90635);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/styleCompat.js
var styleCompat = __webpack_require__(26889);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/log.js
var log = __webpack_require__(99833);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/decal.js
var decal = __webpack_require__(75965);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/animation/customGraphicTransition.js
var customGraphicTransition = __webpack_require__(80844);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/animation/customGraphicKeyframeAnimation.js
var customGraphicKeyframeAnimation = __webpack_require__(68401);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/custom/CustomView.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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






















var EMPHASIS = 'emphasis';
var NORMAL = 'normal';
var BLUR = 'blur';
var SELECT = 'select';
var STATES = [NORMAL, EMPHASIS, BLUR, SELECT];
var PATH_ITEM_STYLE = {
  normal: ['itemStyle'],
  emphasis: [EMPHASIS, 'itemStyle'],
  blur: [BLUR, 'itemStyle'],
  select: [SELECT, 'itemStyle']
};
var PATH_LABEL = {
  normal: ['label'],
  emphasis: [EMPHASIS, 'label'],
  blur: [BLUR, 'label'],
  select: [SELECT, 'label']
};
var DEFAULT_TRANSITION = ['x', 'y'];
// Use prefix to avoid index to be the same as el.name,
// which will cause weird update animation.
var GROUP_DIFF_PREFIX = 'e\0\0';
var attachedTxInfoTmp = {
  normal: {},
  emphasis: {},
  blur: {},
  select: {}
};
/**
 * To reduce total package size of each coordinate systems, the modules `prepareCustom`
 * of each coordinate systems are not required by each coordinate systems directly, but
 * required by the module `custom`.
 *
 * prepareInfoForCustomSeries {Function}: optional
 *     @return {Object} {coordSys: {...}, api: {
 *         coord: function (data, clamp) {}, // return point in global.
 *         size: function (dataSize, dataItem) {} // return size of each axis in coordSys.
 *     }}
 */
var prepareCustoms = {
  cartesian2d: prepareCustom["default"],
  geo: geo_prepareCustom["default"],
  single: single_prepareCustom["default"],
  polar: polar_prepareCustom["default"],
  calendar: calendar_prepareCustom["default"]
};
function isPath(el) {
  return el instanceof Path["default"];
}
function isDisplayable(el) {
  return el instanceof Displayable["default"];
}
function copyElement(sourceEl, targetEl) {
  targetEl.copyTransform(sourceEl);
  if (isDisplayable(targetEl) && isDisplayable(sourceEl)) {
    targetEl.setStyle(sourceEl.style);
    targetEl.z = sourceEl.z;
    targetEl.z2 = sourceEl.z2;
    targetEl.zlevel = sourceEl.zlevel;
    targetEl.invisible = sourceEl.invisible;
    targetEl.ignore = sourceEl.ignore;
    if (isPath(targetEl) && isPath(sourceEl)) {
      targetEl.setShape(sourceEl.shape);
    }
  }
}
var CustomView_CustomChartView = /** @class */function (_super) {
  (0,tslib_es6.__extends)(CustomChartView, _super);
  function CustomChartView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = CustomChartView.type;
    return _this;
  }
  CustomChartView.prototype.render = function (customSeries, ecModel, api, payload) {
    // Clear previously rendered progressive elements.
    this._progressiveEls = null;
    var oldData = this._data;
    var data = customSeries.getData();
    var group = this.group;
    var renderItem = makeRenderItem(customSeries, data, ecModel, api);
    if (!oldData) {
      // Previous render is incremental render or first render.
      // Needs remove the incremental rendered elements.
      group.removeAll();
    }
    data.diff(oldData).add(function (newIdx) {
      createOrUpdateItem(api, null, newIdx, renderItem(newIdx, payload), customSeries, group, data);
    }).remove(function (oldIdx) {
      var el = oldData.getItemGraphicEl(oldIdx);
      el && (0,customGraphicTransition.applyLeaveTransition)(el, customInnerStore(el).option, customSeries);
    }).update(function (newIdx, oldIdx) {
      var oldEl = oldData.getItemGraphicEl(oldIdx);
      createOrUpdateItem(api, oldEl, newIdx, renderItem(newIdx, payload), customSeries, group, data);
    }).execute();
    // Do clipping
    var clipPath = customSeries.get('clip', true) ? (0,createClipPathFromCoordSys.createClipPath)(customSeries.coordinateSystem, false, customSeries) : null;
    if (clipPath) {
      group.setClipPath(clipPath);
    } else {
      group.removeClipPath();
    }
    this._data = data;
  };
  CustomChartView.prototype.incrementalPrepareRender = function (customSeries, ecModel, api) {
    this.group.removeAll();
    this._data = null;
  };
  CustomChartView.prototype.incrementalRender = function (params, customSeries, ecModel, api, payload) {
    var data = customSeries.getData();
    var renderItem = makeRenderItem(customSeries, data, ecModel, api);
    var progressiveEls = this._progressiveEls = [];
    function setIncrementalAndHoverLayer(el) {
      if (!el.isGroup) {
        el.incremental = true;
        el.ensureState('emphasis').hoverLayer = true;
      }
    }
    for (var idx = params.start; idx < params.end; idx++) {
      var el = createOrUpdateItem(null, null, idx, renderItem(idx, payload), customSeries, this.group, data);
      if (el) {
        el.traverse(setIncrementalAndHoverLayer);
        progressiveEls.push(el);
      }
    }
  };
  CustomChartView.prototype.eachRendered = function (cb) {
    graphic.traverseElements(this._progressiveEls || this.group, cb);
  };
  CustomChartView.prototype.filterForExposedEvent = function (eventType, query, targetEl, packedEvent) {
    var elementName = query.element;
    if (elementName == null || targetEl.name === elementName) {
      return true;
    }
    // Enable to give a name on a group made by `renderItem`, and listen
    // events that are triggered by its descendents.
    while ((targetEl = targetEl.__hostTarget || targetEl.parent) && targetEl !== this.group) {
      if (targetEl.name === elementName) {
        return true;
      }
    }
    return false;
  };
  CustomChartView.type = 'custom';
  return CustomChartView;
}(Chart["default"]);
/* ESM default export */ var CustomView = (CustomView_CustomChartView);
function createEl(elOption) {
  var graphicType = elOption.type;
  var el;
  // Those graphic elements are not shapes. They should not be
  // overwritten by users, so do them first.
  if (graphicType === 'path') {
    var shape = elOption.shape;
    // Using pathRect brings convenience to users sacle svg path.
    var pathRect = shape.width != null && shape.height != null ? {
      x: shape.x || 0,
      y: shape.y || 0,
      width: shape.width,
      height: shape.height
    } : null;
    var pathData = getPathData(shape);
    // Path is also used for icon, so layout 'center' by default.
    el = graphic.makePath(pathData, null, pathRect, shape.layout || 'center');
    customInnerStore(el).customPathData = pathData;
  } else if (graphicType === 'image') {
    el = new Image["default"]({});
    customInnerStore(el).customImagePath = elOption.style.image;
  } else if (graphicType === 'text') {
    el = new Text["default"]({});
    // customInnerStore(el).customText = (elOption.style as TextStyleProps).text;
  } else if (graphicType === 'group') {
    el = new Group["default"]();
  } else if (graphicType === 'compoundPath') {
    throw new Error('"compoundPath" is not supported yet.');
  } else {
    var Clz = graphic.getShapeClass(graphicType);
    if (!Clz) {
      var errMsg = '';
      if (false) {}
      (0,log.throwError)(errMsg);
    }
    el = new Clz();
  }
  customInnerStore(el).customGraphicType = graphicType;
  el.name = elOption.name;
  // Compat ec4: the default z2 lift is 1. If changing the number,
  // some cases probably be broken: hierarchy layout along z, like circle packing,
  // where emphasis only intending to modify color/border rather than lift z2.
  el.z2EmphasisLift = 1;
  el.z2SelectLift = 1;
  return el;
}
function updateElNormal(
// Can be null/undefined
api, el, dataIndex, elOption, attachedTxInfo, seriesModel, isInit) {
  // Stop and restore before update any other attributes.
  (0,customGraphicKeyframeAnimation.stopPreviousKeyframeAnimationAndRestore)(el);
  var txCfgOpt = attachedTxInfo && attachedTxInfo.normal.cfg;
  if (txCfgOpt) {
    // PENDING: whether use user object directly rather than clone?
    // TODO:5.0 textConfig transition animation?
    el.setTextConfig(txCfgOpt);
  }
  // Default transition ['x', 'y']
  if (elOption && elOption.transition == null) {
    elOption.transition = DEFAULT_TRANSITION;
  }
  // Do some normalization on style.
  var styleOpt = elOption && elOption.style;
  if (styleOpt) {
    if (el.type === 'text') {
      var textOptionStyle = styleOpt;
      // Compatible with ec4: if `textFill` or `textStroke` exists use them.
      (0,util.hasOwn)(textOptionStyle, 'textFill') && (textOptionStyle.fill = textOptionStyle.textFill);
      (0,util.hasOwn)(textOptionStyle, 'textStroke') && (textOptionStyle.stroke = textOptionStyle.textStroke);
    }
    var decalPattern = void 0;
    var decalObj = isPath(el) ? styleOpt.decal : null;
    if (api && decalObj) {
      decalObj.dirty = true;
      decalPattern = (0,decal.createOrUpdatePatternFromDecal)(decalObj, api);
    }
    // Always overwrite in case user specify this prop.
    styleOpt.__decalPattern = decalPattern;
  }
  if (isDisplayable(el)) {
    if (styleOpt) {
      var decalPattern = styleOpt.__decalPattern;
      if (decalPattern) {
        styleOpt.decal = decalPattern;
      }
    }
  }
  (0,customGraphicTransition.applyUpdateTransition)(el, elOption, seriesModel, {
    dataIndex: dataIndex,
    isInit: isInit,
    clearStyle: true
  });
  (0,customGraphicKeyframeAnimation.applyKeyframeAnimation)(el, elOption.keyframeAnimation, seriesModel);
}
function updateElOnState(state, el, elStateOpt, styleOpt, attachedTxInfo) {
  var elDisplayable = el.isGroup ? null : el;
  var txCfgOpt = attachedTxInfo && attachedTxInfo[state].cfg;
  // PENDING:5.0 support customize scale change and transition animation?
  if (elDisplayable) {
    // By default support auto lift color when hover whether `emphasis` specified.
    var stateObj = elDisplayable.ensureState(state);
    if (styleOpt === false) {
      var existingEmphasisState = elDisplayable.getState(state);
      if (existingEmphasisState) {
        existingEmphasisState.style = null;
      }
    } else {
      // style is needed to enable default emphasis.
      stateObj.style = styleOpt || null;
    }
    // If `elOption.styleEmphasis` or `elOption.emphasis.style` is `false`,
    // remove hover style.
    // If `elOption.textConfig` or `elOption.emphasis.textConfig` is null/undefined, it does not
    // make sense. So for simplicity, we do not ditinguish `hasOwnProperty` and null/undefined.
    if (txCfgOpt) {
      stateObj.textConfig = txCfgOpt;
    }
    (0,states.setDefaultStateProxy)(elDisplayable);
  }
}
function updateZ(el, elOption, seriesModel) {
  // Group not support textContent and not support z yet.
  if (el.isGroup) {
    return;
  }
  var elDisplayable = el;
  var currentZ = seriesModel.currentZ;
  var currentZLevel = seriesModel.currentZLevel;
  // Always erase.
  elDisplayable.z = currentZ;
  elDisplayable.zlevel = currentZLevel;
  // z2 must not be null/undefined, otherwise sort error may occur.
  var optZ2 = elOption.z2;
  optZ2 != null && (elDisplayable.z2 = optZ2 || 0);
  for (var i = 0; i < STATES.length; i++) {
    updateZForEachState(elDisplayable, elOption, STATES[i]);
  }
}
function updateZForEachState(elDisplayable, elOption, state) {
  var isNormal = state === NORMAL;
  var elStateOpt = isNormal ? elOption : retrieveStateOption(elOption, state);
  var optZ2 = elStateOpt ? elStateOpt.z2 : null;
  var stateObj;
  if (optZ2 != null) {
    // Do not `ensureState` until required.
    stateObj = isNormal ? elDisplayable : elDisplayable.ensureState(state);
    stateObj.z2 = optZ2 || 0;
  }
}
function makeRenderItem(customSeries, data, ecModel, api) {
  var renderItem = customSeries.get('renderItem');
  var coordSys = customSeries.coordinateSystem;
  var prepareResult = {};
  if (coordSys) {
    if (false) {}
    // `coordSys.prepareCustoms` is used for external coord sys like bmap.
    prepareResult = coordSys.prepareCustoms ? coordSys.prepareCustoms(coordSys) : prepareCustoms[coordSys.type](coordSys);
  }
  var userAPI = (0,util.defaults)({
    getWidth: api.getWidth,
    getHeight: api.getHeight,
    getZr: api.getZr,
    getDevicePixelRatio: api.getDevicePixelRatio,
    value: value,
    style: style,
    ordinalRawValue: ordinalRawValue,
    styleEmphasis: styleEmphasis,
    visual: visual,
    barLayout: barLayout,
    currentSeriesIndices: currentSeriesIndices,
    font: font
  }, prepareResult.api || {});
  var userParams = {
    // The life cycle of context: current round of rendering.
    // The global life cycle is probably not necessary, because
    // user can store global status by themselves.
    context: {},
    seriesId: customSeries.id,
    seriesName: customSeries.name,
    seriesIndex: customSeries.seriesIndex,
    coordSys: prepareResult.coordSys,
    dataInsideLength: data.count(),
    encode: wrapEncodeDef(customSeries.getData())
  };
  // If someday intending to refactor them to a class, should consider do not
  // break change: currently these attribute member are encapsulated in a closure
  // so that do not need to force user to call these method with a scope.
  // Do not support call `api` asynchronously without dataIndexInside input.
  var currDataIndexInside;
  var currItemModel;
  var currItemStyleModels = {};
  var currLabelModels = {};
  var seriesItemStyleModels = {};
  var seriesLabelModels = {};
  for (var i = 0; i < STATES.length; i++) {
    var stateName = STATES[i];
    seriesItemStyleModels[stateName] = customSeries.getModel(PATH_ITEM_STYLE[stateName]);
    seriesLabelModels[stateName] = customSeries.getModel(PATH_LABEL[stateName]);
  }
  function getItemModel(dataIndexInside) {
    return dataIndexInside === currDataIndexInside ? currItemModel || (currItemModel = data.getItemModel(dataIndexInside)) : data.getItemModel(dataIndexInside);
  }
  function getItemStyleModel(dataIndexInside, state) {
    return !data.hasItemOption ? seriesItemStyleModels[state] : dataIndexInside === currDataIndexInside ? currItemStyleModels[state] || (currItemStyleModels[state] = getItemModel(dataIndexInside).getModel(PATH_ITEM_STYLE[state])) : getItemModel(dataIndexInside).getModel(PATH_ITEM_STYLE[state]);
  }
  function getLabelModel(dataIndexInside, state) {
    return !data.hasItemOption ? seriesLabelModels[state] : dataIndexInside === currDataIndexInside ? currLabelModels[state] || (currLabelModels[state] = getItemModel(dataIndexInside).getModel(PATH_LABEL[state])) : getItemModel(dataIndexInside).getModel(PATH_LABEL[state]);
  }
  return function (dataIndexInside, payload) {
    currDataIndexInside = dataIndexInside;
    currItemModel = null;
    currItemStyleModels = {};
    currLabelModels = {};
    return renderItem && renderItem((0,util.defaults)({
      dataIndexInside: dataIndexInside,
      dataIndex: data.getRawIndex(dataIndexInside),
      // Can be used for optimization when zoom or roam.
      actionType: payload ? payload.type : null
    }, userParams), userAPI);
  };
  /**
   * @public
   * @param dim by default 0.
   * @param dataIndexInside by default `currDataIndexInside`.
   */
  function value(dim, dataIndexInside) {
    dataIndexInside == null && (dataIndexInside = currDataIndexInside);
    return data.getStore().get(data.getDimensionIndex(dim || 0), dataIndexInside);
  }
  /**
   * @public
   * @param dim by default 0.
   * @param dataIndexInside by default `currDataIndexInside`.
   */
  function ordinalRawValue(dim, dataIndexInside) {
    dataIndexInside == null && (dataIndexInside = currDataIndexInside);
    dim = dim || 0;
    var dimInfo = data.getDimensionInfo(dim);
    if (!dimInfo) {
      var dimIndex = data.getDimensionIndex(dim);
      return dimIndex >= 0 ? data.getStore().get(dimIndex, dataIndexInside) : undefined;
    }
    var val = data.get(dimInfo.name, dataIndexInside);
    var ordinalMeta = dimInfo && dimInfo.ordinalMeta;
    return ordinalMeta ? ordinalMeta.categories[val] : val;
  }
  /**
   * @deprecated The original intention of `api.style` is enable to set itemStyle
   * like other series. But it is not necessary and not easy to give a strict definition
   * of what it returns. And since echarts5 it needs to be make compat work. So
   * deprecates it since echarts5.
   *
   * By default, `visual` is applied to style (to support visualMap).
   * `visual.color` is applied at `fill`. If user want apply visual.color on `stroke`,
   * it can be implemented as:
   * `api.style({stroke: api.visual('color'), fill: null})`;
   *
   * [Compat]: since ec5, RectText has been separated from its hosts el.
   * so `api.style()` will only return the style from `itemStyle` but not handle `label`
   * any more. But `series.label` config is never published in doc.
   * We still compat it in `api.style()`. But not encourage to use it and will still not
   * to pulish it to doc.
   * @public
   * @param dataIndexInside by default `currDataIndexInside`.
   */
  function style(userProps, dataIndexInside) {
    if (false) {}
    dataIndexInside == null && (dataIndexInside = currDataIndexInside);
    var style = data.getItemVisual(dataIndexInside, 'style');
    var visualColor = style && style.fill;
    var opacity = style && style.opacity;
    var itemStyle = getItemStyleModel(dataIndexInside, NORMAL).getItemStyle();
    visualColor != null && (itemStyle.fill = visualColor);
    opacity != null && (itemStyle.opacity = opacity);
    var opt = {
      inheritColor: (0,util.isString)(visualColor) ? visualColor : '#000'
    };
    var labelModel = getLabelModel(dataIndexInside, NORMAL);
    // Now that the feature of "auto adjust text fill/stroke" has been migrated to zrender
    // since ec5, we should set `isAttached` as `false` here and make compat in
    // `convertToEC4StyleForCustomSerise`.
    var textStyle = labelStyle.createTextStyle(labelModel, null, opt, false, true);
    textStyle.text = labelModel.getShallow('show') ? (0,util.retrieve2)(customSeries.getFormattedLabel(dataIndexInside, NORMAL), (0,labelHelper.getDefaultLabel)(data, dataIndexInside)) : null;
    var textConfig = labelStyle.createTextConfig(labelModel, opt, false);
    preFetchFromExtra(userProps, itemStyle);
    itemStyle = (0,styleCompat.convertToEC4StyleForCustomSerise)(itemStyle, textStyle, textConfig);
    userProps && applyUserPropsAfter(itemStyle, userProps);
    itemStyle.legacy = true;
    return itemStyle;
  }
  /**
   * @deprecated The reason see `api.style()`
   * @public
   * @param dataIndexInside by default `currDataIndexInside`.
   */
  function styleEmphasis(userProps, dataIndexInside) {
    if (false) {}
    dataIndexInside == null && (dataIndexInside = currDataIndexInside);
    var itemStyle = getItemStyleModel(dataIndexInside, EMPHASIS).getItemStyle();
    var labelModel = getLabelModel(dataIndexInside, EMPHASIS);
    var textStyle = labelStyle.createTextStyle(labelModel, null, null, true, true);
    textStyle.text = labelModel.getShallow('show') ? (0,util.retrieve3)(customSeries.getFormattedLabel(dataIndexInside, EMPHASIS), customSeries.getFormattedLabel(dataIndexInside, NORMAL), (0,labelHelper.getDefaultLabel)(data, dataIndexInside)) : null;
    var textConfig = labelStyle.createTextConfig(labelModel, null, true);
    preFetchFromExtra(userProps, itemStyle);
    itemStyle = (0,styleCompat.convertToEC4StyleForCustomSerise)(itemStyle, textStyle, textConfig);
    userProps && applyUserPropsAfter(itemStyle, userProps);
    itemStyle.legacy = true;
    return itemStyle;
  }
  function applyUserPropsAfter(itemStyle, extra) {
    for (var key in extra) {
      if ((0,util.hasOwn)(extra, key)) {
        itemStyle[key] = extra[key];
      }
    }
  }
  function preFetchFromExtra(extra, itemStyle) {
    // A trick to retrieve those props firstly, which are used to
    // apply auto inside fill/stroke in `convertToEC4StyleForCustomSerise`.
    // (It's not reasonable but only for a degree of compat)
    if (extra) {
      extra.textFill && (itemStyle.textFill = extra.textFill);
      extra.textPosition && (itemStyle.textPosition = extra.textPosition);
    }
  }
  /**
   * @public
   * @param dataIndexInside by default `currDataIndexInside`.
   */
  function visual(visualType, dataIndexInside) {
    dataIndexInside == null && (dataIndexInside = currDataIndexInside);
    if ((0,util.hasOwn)(STYLE_VISUAL_TYPE, visualType)) {
      var style_1 = data.getItemVisual(dataIndexInside, 'style');
      return style_1 ? style_1[STYLE_VISUAL_TYPE[visualType]] : null;
    }
    // Only support these visuals. Other visual might be inner tricky
    // for performance (like `style`), do not expose to users.
    if ((0,util.hasOwn)(NON_STYLE_VISUAL_PROPS, visualType)) {
      return data.getItemVisual(dataIndexInside, visualType);
    }
  }
  /**
   * @public
   * @return If not support, return undefined.
   */
  function barLayout(opt) {
    if (coordSys.type === 'cartesian2d') {
      var baseAxis = coordSys.getBaseAxis();
      return (0,barGrid.getLayoutOnAxis)((0,util.defaults)({
        axis: baseAxis
      }, opt));
    }
  }
  /**
   * @public
   */
  function currentSeriesIndices() {
    return ecModel.getCurrentSeriesIndices();
  }
  /**
   * @public
   * @return font string
   */
  function font(opt) {
    return labelStyle.getFont(opt, ecModel);
  }
}
function wrapEncodeDef(data) {
  var encodeDef = {};
  (0,util.each)(data.dimensions, function (dimName) {
    var dimInfo = data.getDimensionInfo(dimName);
    if (!dimInfo.isExtraCoord) {
      var coordDim = dimInfo.coordDim;
      var dataDims = encodeDef[coordDim] = encodeDef[coordDim] || [];
      dataDims[dimInfo.coordDimIndex] = data.getDimensionIndex(dimName);
    }
  });
  return encodeDef;
}
function createOrUpdateItem(api, existsEl, dataIndex, elOption, seriesModel, group, data) {
  // [Rule]
  // If `renderItem` returns `null`/`undefined`/`false`, remove the previous el if existing.
  //     (It seems that violate the "merge" principle, but most of users probably intuitively
  //     regard "return;" as "show nothing element whatever", so make a exception to meet the
  //     most cases.)
  // The rule or "merge" see [STRATEGY_MERGE].
  // If `elOption` is `null`/`undefined`/`false` (when `renderItem` returns nothing).
  if (!elOption) {
    group.remove(existsEl);
    return;
  }
  var el = doCreateOrUpdateEl(api, existsEl, dataIndex, elOption, seriesModel, group);
  el && data.setItemGraphicEl(dataIndex, el);
  el && (0,states.toggleHoverEmphasis)(el, elOption.focus, elOption.blurScope, elOption.emphasisDisabled);
  return el;
}
function doCreateOrUpdateEl(api, existsEl, dataIndex, elOption, seriesModel, group) {
  if (false) {}
  var toBeReplacedIdx = -1;
  var oldEl = existsEl;
  if (existsEl && doesElNeedRecreate(existsEl, elOption, seriesModel)
  // || (
  //     // PENDING: even in one-to-one mapping case, if el is marked as morph,
  //     // do not sure whether the el will be mapped to another el with different
  //     // hierarchy in Group tree. So always recreate el rather than reuse the el.
  //     morphHelper && morphHelper.isOneToOneFrom(el)
  // )
  ) {
    // Should keep at the original index, otherwise "merge by index" will be incorrect.
    toBeReplacedIdx = (0,util.indexOf)(group.childrenRef(), existsEl);
    existsEl = null;
  }
  var isInit = !existsEl;
  var el = existsEl;
  if (!el) {
    el = createEl(elOption);
    if (oldEl) {
      copyElement(oldEl, el);
    }
  } else {
    // FIMXE:NEXT unified clearState?
    // If in some case the performance issue arised, consider
    // do not clearState but update cached normal state directly.
    el.clearStates();
  }
  // Need to set morph: false explictly to disable automatically morphing.
  if (elOption.morph === false) {
    el.disableMorphing = true;
  } else if (el.disableMorphing) {
    el.disableMorphing = false;
  }
  attachedTxInfoTmp.normal.cfg = attachedTxInfoTmp.normal.conOpt = attachedTxInfoTmp.emphasis.cfg = attachedTxInfoTmp.emphasis.conOpt = attachedTxInfoTmp.blur.cfg = attachedTxInfoTmp.blur.conOpt = attachedTxInfoTmp.select.cfg = attachedTxInfoTmp.select.conOpt = null;
  attachedTxInfoTmp.isLegacy = false;
  doCreateOrUpdateAttachedTx(el, dataIndex, elOption, seriesModel, isInit, attachedTxInfoTmp);
  doCreateOrUpdateClipPath(el, dataIndex, elOption, seriesModel, isInit);
  updateElNormal(api, el, dataIndex, elOption, attachedTxInfoTmp, seriesModel, isInit);
  // `elOption.info` enables user to mount some info on
  // elements and use them in event handlers.
  // Update them only when user specified, otherwise, remain.
  (0,util.hasOwn)(elOption, 'info') && (customInnerStore(el).info = elOption.info);
  for (var i = 0; i < STATES.length; i++) {
    var stateName = STATES[i];
    if (stateName !== NORMAL) {
      var otherStateOpt = retrieveStateOption(elOption, stateName);
      var otherStyleOpt = retrieveStyleOptionOnState(elOption, otherStateOpt, stateName);
      updateElOnState(stateName, el, otherStateOpt, otherStyleOpt, attachedTxInfoTmp);
    }
  }
  updateZ(el, elOption, seriesModel);
  if (elOption.type === 'group') {
    CustomView_mergeChildren(api, el, dataIndex, elOption, seriesModel);
  }
  if (toBeReplacedIdx >= 0) {
    group.replaceAt(el, toBeReplacedIdx);
  } else {
    group.add(el);
  }
  return el;
}
// `el` must not be null/undefined.
function doesElNeedRecreate(el, elOption, seriesModel) {
  var elInner = customInnerStore(el);
  var elOptionType = elOption.type;
  var elOptionShape = elOption.shape;
  var elOptionStyle = elOption.style;
  return (
    // Always create new if universal transition is enabled.
    // Because we do transition after render. It needs to know what old element is. Replacement will loose it.
    seriesModel.isUniversalTransitionEnabled()
    // If `elOptionType` is `null`, follow the merge principle.
    || elOptionType != null && elOptionType !== elInner.customGraphicType || elOptionType === 'path' && hasOwnPathData(elOptionShape) && getPathData(elOptionShape) !== elInner.customPathData || elOptionType === 'image' && (0,util.hasOwn)(elOptionStyle, 'image') && elOptionStyle.image !== elInner.customImagePath
    // // FIXME test and remove this restriction?
    // || (elOptionType === 'text'
    //     && hasOwn(elOptionStyle, 'text')
    //     && (elOptionStyle as TextStyleProps).text !== elInner.customText
    // )
  );
}
function doCreateOrUpdateClipPath(el, dataIndex, elOption, seriesModel, isInit) {
  // Based on the "merge" principle, if no clipPath provided,
  // do nothing. The exists clip will be totally removed only if
  // `el.clipPath` is `false`. Otherwise it will be merged/replaced.
  var clipPathOpt = elOption.clipPath;
  if (clipPathOpt === false) {
    if (el && el.getClipPath()) {
      el.removeClipPath();
    }
  } else if (clipPathOpt) {
    var clipPath = el.getClipPath();
    if (clipPath && doesElNeedRecreate(clipPath, clipPathOpt, seriesModel)) {
      clipPath = null;
    }
    if (!clipPath) {
      clipPath = createEl(clipPathOpt);
      if (false) {}
      el.setClipPath(clipPath);
    }
    updateElNormal(null, clipPath, dataIndex, clipPathOpt, null, seriesModel, isInit);
  }
  // If not define `clipPath` in option, do nothing unnecessary.
}
function doCreateOrUpdateAttachedTx(el, dataIndex, elOption, seriesModel, isInit, attachedTxInfo) {
  // Group does not support textContent temporarily until necessary.
  if (el.isGroup) {
    return;
  }
  // Normal must be called before emphasis, for `isLegacy` detection.
  processTxInfo(elOption, null, attachedTxInfo);
  processTxInfo(elOption, EMPHASIS, attachedTxInfo);
  // If `elOption.textConfig` or `elOption.textContent` is null/undefined, it does not make sense.
  // So for simplicity, if "elOption hasOwnProperty of them but be null/undefined", we do not
  // trade them as set to null to el.
  // Especially:
  // `elOption.textContent: false` means remove textContent.
  // `elOption.textContent.emphasis.style: false` means remove the style from emphasis state.
  var txConOptNormal = attachedTxInfo.normal.conOpt;
  var txConOptEmphasis = attachedTxInfo.emphasis.conOpt;
  var txConOptBlur = attachedTxInfo.blur.conOpt;
  var txConOptSelect = attachedTxInfo.select.conOpt;
  if (txConOptNormal != null || txConOptEmphasis != null || txConOptSelect != null || txConOptBlur != null) {
    var textContent = el.getTextContent();
    if (txConOptNormal === false) {
      textContent && el.removeTextContent();
    } else {
      txConOptNormal = attachedTxInfo.normal.conOpt = txConOptNormal || {
        type: 'text'
      };
      if (!textContent) {
        textContent = createEl(txConOptNormal);
        el.setTextContent(textContent);
      } else {
        // If in some case the performance issue arised, consider
        // do not clearState but update cached normal state directly.
        textContent.clearStates();
      }
      updateElNormal(null, textContent, dataIndex, txConOptNormal, null, seriesModel, isInit);
      var txConStlOptNormal = txConOptNormal && txConOptNormal.style;
      for (var i = 0; i < STATES.length; i++) {
        var stateName = STATES[i];
        if (stateName !== NORMAL) {
          var txConOptOtherState = attachedTxInfo[stateName].conOpt;
          updateElOnState(stateName, textContent, txConOptOtherState, retrieveStyleOptionOnState(txConOptNormal, txConOptOtherState, stateName), null);
        }
      }
      txConStlOptNormal ? textContent.dirty() : textContent.markRedraw();
    }
  }
}
function processTxInfo(elOption, state, attachedTxInfo) {
  var stateOpt = !state ? elOption : retrieveStateOption(elOption, state);
  var styleOpt = !state ? elOption.style : retrieveStyleOptionOnState(elOption, stateOpt, EMPHASIS);
  var elType = elOption.type;
  var txCfg = stateOpt ? stateOpt.textConfig : null;
  var txConOptNormal = elOption.textContent;
  var txConOpt = !txConOptNormal ? null : !state ? txConOptNormal : retrieveStateOption(txConOptNormal, state);
  if (styleOpt && (
  // Because emphasis style has little info to detect legacy,
  // if normal is legacy, emphasis is trade as legacy.
  attachedTxInfo.isLegacy || (0,styleCompat.isEC4CompatibleStyle)(styleOpt, elType, !!txCfg, !!txConOpt))) {
    attachedTxInfo.isLegacy = true;
    var convertResult = (0,styleCompat.convertFromEC4CompatibleStyle)(styleOpt, elType, !state);
    // Explicitly specified `textConfig` and `textContent` has higher priority than
    // the ones generated by legacy style. Otherwise if users use them and `api.style`
    // at the same time, they not both work and hardly to known why.
    if (!txCfg && convertResult.textConfig) {
      txCfg = convertResult.textConfig;
    }
    if (!txConOpt && convertResult.textContent) {
      txConOpt = convertResult.textContent;
    }
  }
  if (!state && txConOpt) {
    var txConOptNormal_1 = txConOpt;
    // `textContent: {type: 'text'}`, the "type" is easy to be missing. So we tolerate it.
    !txConOptNormal_1.type && (txConOptNormal_1.type = 'text');
    if (false) {}
  }
  var info = !state ? attachedTxInfo.normal : attachedTxInfo[state];
  info.cfg = txCfg;
  info.conOpt = txConOpt;
}
function retrieveStateOption(elOption, state) {
  return !state ? elOption : elOption ? elOption[state] : null;
}
function retrieveStyleOptionOnState(stateOptionNormal, stateOption, state) {
  var style = stateOption && stateOption.style;
  if (style == null && state === EMPHASIS && stateOptionNormal) {
    style = stateOptionNormal.styleEmphasis;
  }
  return style;
}
// Usage:
// (1) By default, `elOption.$mergeChildren` is `'byIndex'`, which indicates
//     that the existing children will not be removed, and enables the feature
//     that update some of the props of some of the children simply by construct
//     the returned children of `renderItem` like:
//     `var children = group.children = []; children[3] = {opacity: 0.5};`
// (2) If `elOption.$mergeChildren` is `'byName'`, add/update/remove children
//     by child.name. But that might be lower performance.
// (3) If `elOption.$mergeChildren` is `false`, the existing children will be
//     replaced totally.
// (4) If `!elOption.children`, following the "merge" principle, nothing will
//     happen.
// (5) If `elOption.$mergeChildren` is not `false` neither `'byName'` and the
//     `el` is a group, and if any of the new child is null, it means to remove
//     the element at the same index, if exists. On the other hand, if the new
//     child is and empty object `{}`, it means to keep the element not changed.
//
// For implementation simpleness, do not provide a direct way to remove single
// child (otherwise the total indices of the children array have to be modified).
// User can remove a single child by setting its `ignore` to `true`.
function CustomView_mergeChildren(api, el, dataIndex, elOption, seriesModel) {
  var newChildren = elOption.children;
  var newLen = newChildren ? newChildren.length : 0;
  var mergeChildren = elOption.$mergeChildren;
  // `diffChildrenByName` has been deprecated.
  var byName = mergeChildren === 'byName' || elOption.diffChildrenByName;
  var notMerge = mergeChildren === false;
  // For better performance on roam update, only enter if necessary.
  if (!newLen && !byName && !notMerge) {
    return;
  }
  if (byName) {
    diffGroupChildren({
      api: api,
      oldChildren: el.children() || [],
      newChildren: newChildren || [],
      dataIndex: dataIndex,
      seriesModel: seriesModel,
      group: el
    });
    return;
  }
  notMerge && el.removeAll();
  // Mapping children of a group simply by index, which
  // might be better performance.
  var index = 0;
  for (; index < newLen; index++) {
    var newChild = newChildren[index];
    var oldChild = el.childAt(index);
    if (newChild) {
      if (newChild.ignore == null) {
        // The old child is set to be ignored if null (see comments
        // below). So we need to set ignore to be false back.
        newChild.ignore = false;
      }
      doCreateOrUpdateEl(api, oldChild, dataIndex, newChild, seriesModel, el);
    } else {
      if (false) {}
      // If the new element option is null, it means to remove the old
      // element. But we cannot really remove the element from the group
      // directly, because the element order may not be stable when this
      // element is added back. So we set the element to be ignored.
      oldChild.ignore = true;
    }
  }
  for (var i = el.childCount() - 1; i >= index; i--) {
    var child = el.childAt(i);
    removeChildFromGroup(el, child, seriesModel);
  }
}
function removeChildFromGroup(group, child, seriesModel) {
  // Do not support leave elements that are not mentioned in the latest
  // `renderItem` return. Otherwise users may not have a clear and simple
  // concept that how to control all of the elements.
  child && (0,customGraphicTransition.applyLeaveTransition)(child, customInnerStore(group).option, seriesModel);
}
function diffGroupChildren(context) {
  new DataDiffer["default"](context.oldChildren, context.newChildren, getKey, getKey, context).add(processAddUpdate).update(processAddUpdate).remove(processRemove).execute();
}
function getKey(item, idx) {
  var name = item && item.name;
  return name != null ? name : GROUP_DIFF_PREFIX + idx;
}
function processAddUpdate(newIndex, oldIndex) {
  var context = this.context;
  var childOption = newIndex != null ? context.newChildren[newIndex] : null;
  var child = oldIndex != null ? context.oldChildren[oldIndex] : null;
  doCreateOrUpdateEl(context.api, child, context.dataIndex, childOption, context.seriesModel, context.group);
}
function processRemove(oldIndex) {
  var context = this.context;
  var child = context.oldChildren[oldIndex];
  child && (0,customGraphicTransition.applyLeaveTransition)(child, customInnerStore(child).option, context.seriesModel);
}
/**
 * @return SVG Path data.
 */
function getPathData(shape) {
  // "d" follows the SVG convention.
  return shape && (shape.pathData || shape.d);
}
function hasOwnPathData(shape) {
  return shape && ((0,util.hasOwn)(shape, 'pathData') || (0,util.hasOwn)(shape, 'd'));
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/custom/install.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  registers.registerChartView(CustomView);
  registers.registerSeriesModel(CustomSeries);
}

}),
37651: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  install: function() { return /* binding */ install; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(12012);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/SymbolDraw.js
var SymbolDraw = __webpack_require__(41930);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/symbol.js
var util_symbol = __webpack_require__(44421);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Group.js
var Group = __webpack_require__(58695);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/states.js
var states = __webpack_require__(63344);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/Symbol.js
var Symbol = __webpack_require__(91971);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/EffectSymbol.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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





function updateRipplePath(rippleGroup, effectCfg) {
  var color = effectCfg.rippleEffectColor || effectCfg.color;
  rippleGroup.eachChild(function (ripplePath) {
    ripplePath.attr({
      z: effectCfg.z,
      zlevel: effectCfg.zlevel,
      style: {
        stroke: effectCfg.brushType === 'stroke' ? color : null,
        fill: effectCfg.brushType === 'fill' ? color : null
      }
    });
  });
}
var EffectSymbol_EffectSymbol = /** @class */function (_super) {
  (0,tslib_es6.__extends)(EffectSymbol, _super);
  function EffectSymbol(data, idx) {
    var _this = _super.call(this) || this;
    var symbol = new Symbol["default"](data, idx);
    var rippleGroup = new Group["default"]();
    _this.add(symbol);
    _this.add(rippleGroup);
    _this.updateData(data, idx);
    return _this;
  }
  EffectSymbol.prototype.stopEffectAnimation = function () {
    this.childAt(1).removeAll();
  };
  EffectSymbol.prototype.startEffectAnimation = function (effectCfg) {
    var symbolType = effectCfg.symbolType;
    var color = effectCfg.color;
    var rippleNumber = effectCfg.rippleNumber;
    var rippleGroup = this.childAt(1);
    for (var i = 0; i < rippleNumber; i++) {
      // If width/height are set too small (e.g., set to 1) on ios10
      // and macOS Sierra, a circle stroke become a rect, no matter what
      // the scale is set. So we set width/height as 2. See #4136.
      var ripplePath = (0,util_symbol.createSymbol)(symbolType, -1, -1, 2, 2, color);
      ripplePath.attr({
        style: {
          strokeNoScale: true
        },
        z2: 99,
        silent: true,
        scaleX: 0.5,
        scaleY: 0.5
      });
      var delay = -i / rippleNumber * effectCfg.period + effectCfg.effectOffset;
      ripplePath.animate('', true).when(effectCfg.period, {
        scaleX: effectCfg.rippleScale / 2,
        scaleY: effectCfg.rippleScale / 2
      }).delay(delay).start();
      ripplePath.animateStyle(true).when(effectCfg.period, {
        opacity: 0
      }).delay(delay).start();
      rippleGroup.add(ripplePath);
    }
    updateRipplePath(rippleGroup, effectCfg);
  };
  /**
   * Update effect symbol
   */
  EffectSymbol.prototype.updateEffectAnimation = function (effectCfg) {
    var oldEffectCfg = this._effectCfg;
    var rippleGroup = this.childAt(1);
    // Must reinitialize effect if following configuration changed
    var DIFFICULT_PROPS = ['symbolType', 'period', 'rippleScale', 'rippleNumber'];
    for (var i = 0; i < DIFFICULT_PROPS.length; i++) {
      var propName = DIFFICULT_PROPS[i];
      if (oldEffectCfg[propName] !== effectCfg[propName]) {
        this.stopEffectAnimation();
        this.startEffectAnimation(effectCfg);
        return;
      }
    }
    updateRipplePath(rippleGroup, effectCfg);
  };
  /**
   * Highlight symbol
   */
  EffectSymbol.prototype.highlight = function () {
    (0,states.enterEmphasis)(this);
  };
  /**
   * Downplay symbol
   */
  EffectSymbol.prototype.downplay = function () {
    (0,states.leaveEmphasis)(this);
  };
  EffectSymbol.prototype.getSymbolType = function () {
    var symbol = this.childAt(0);
    return symbol && symbol.getSymbolType();
  };
  /**
   * Update symbol properties
   */
  EffectSymbol.prototype.updateData = function (data, idx) {
    var _this = this;
    var seriesModel = data.hostModel;
    this.childAt(0).updateData(data, idx);
    var rippleGroup = this.childAt(1);
    var itemModel = data.getItemModel(idx);
    var symbolType = data.getItemVisual(idx, 'symbol');
    var symbolSize = (0,util_symbol.normalizeSymbolSize)(data.getItemVisual(idx, 'symbolSize'));
    var symbolStyle = data.getItemVisual(idx, 'style');
    var color = symbolStyle && symbolStyle.fill;
    var emphasisModel = itemModel.getModel('emphasis');
    rippleGroup.setScale(symbolSize);
    rippleGroup.traverse(function (ripplePath) {
      ripplePath.setStyle('fill', color);
    });
    var symbolOffset = (0,util_symbol.normalizeSymbolOffset)(data.getItemVisual(idx, 'symbolOffset'), symbolSize);
    if (symbolOffset) {
      rippleGroup.x = symbolOffset[0];
      rippleGroup.y = symbolOffset[1];
    }
    var symbolRotate = data.getItemVisual(idx, 'symbolRotate');
    rippleGroup.rotation = (symbolRotate || 0) * Math.PI / 180 || 0;
    var effectCfg = {};
    effectCfg.showEffectOn = seriesModel.get('showEffectOn');
    effectCfg.rippleScale = itemModel.get(['rippleEffect', 'scale']);
    effectCfg.brushType = itemModel.get(['rippleEffect', 'brushType']);
    effectCfg.period = itemModel.get(['rippleEffect', 'period']) * 1000;
    effectCfg.effectOffset = idx / data.count();
    effectCfg.z = seriesModel.getShallow('z') || 0;
    effectCfg.zlevel = seriesModel.getShallow('zlevel') || 0;
    effectCfg.symbolType = symbolType;
    effectCfg.color = color;
    effectCfg.rippleEffectColor = itemModel.get(['rippleEffect', 'color']);
    effectCfg.rippleNumber = itemModel.get(['rippleEffect', 'number']);
    if (effectCfg.showEffectOn === 'render') {
      this._effectCfg ? this.updateEffectAnimation(effectCfg) : this.startEffectAnimation(effectCfg);
      this._effectCfg = effectCfg;
    } else {
      // Not keep old effect config
      this._effectCfg = null;
      this.stopEffectAnimation();
      this.onHoverStateChange = function (toState) {
        if (toState === 'emphasis') {
          if (effectCfg.showEffectOn !== 'render') {
            _this.startEffectAnimation(effectCfg);
          }
        } else if (toState === 'normal') {
          if (effectCfg.showEffectOn !== 'render') {
            _this.stopEffectAnimation();
          }
        }
      };
    }
    this._effectCfg = effectCfg;
    (0,states.toggleHoverEmphasis)(this, emphasisModel.get('focus'), emphasisModel.get('blurScope'), emphasisModel.get('disabled'));
  };
  ;
  EffectSymbol.prototype.fadeOut = function (cb) {
    cb && cb();
  };
  ;
  return EffectSymbol;
}(Group["default"]);
/* ESM default export */ var helper_EffectSymbol = (EffectSymbol_EffectSymbol);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/matrix.js
var matrix = __webpack_require__(85215);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/layout/points.js
var points = __webpack_require__(95097);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/view/Chart.js
var Chart = __webpack_require__(47389);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/effectScatter/EffectScatterView.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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






var EffectScatterView_EffectScatterView = /** @class */function (_super) {
  (0,tslib_es6.__extends)(EffectScatterView, _super);
  function EffectScatterView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = EffectScatterView.type;
    return _this;
  }
  EffectScatterView.prototype.init = function () {
    this._symbolDraw = new SymbolDraw["default"](helper_EffectSymbol);
  };
  EffectScatterView.prototype.render = function (seriesModel, ecModel, api) {
    var data = seriesModel.getData();
    var effectSymbolDraw = this._symbolDraw;
    effectSymbolDraw.updateData(data, {
      clipShape: this._getClipShape(seriesModel)
    });
    this.group.add(effectSymbolDraw.group);
  };
  EffectScatterView.prototype._getClipShape = function (seriesModel) {
    var coordSys = seriesModel.coordinateSystem;
    var clipArea = coordSys && coordSys.getArea && coordSys.getArea();
    return seriesModel.get('clip', true) ? clipArea : null;
  };
  EffectScatterView.prototype.updateTransform = function (seriesModel, ecModel, api) {
    var data = seriesModel.getData();
    this.group.dirty();
    var res = (0,points["default"])('').reset(seriesModel, ecModel, api);
    if (res.progress) {
      res.progress({
        start: 0,
        end: data.count(),
        count: data.count()
      }, data);
    }
    this._symbolDraw.updateLayout();
  };
  EffectScatterView.prototype._updateGroupTransform = function (seriesModel) {
    var coordSys = seriesModel.coordinateSystem;
    if (coordSys && coordSys.getRoamTransform) {
      this.group.transform = matrix.clone(coordSys.getRoamTransform());
      this.group.decomposeTransform();
    }
  };
  EffectScatterView.prototype.remove = function (ecModel, api) {
    this._symbolDraw && this._symbolDraw.remove(true);
  };
  EffectScatterView.type = 'effectScatter';
  return EffectScatterView;
}(Chart["default"]);
/* ESM default export */ var effectScatter_EffectScatterView = (EffectScatterView_EffectScatterView);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/createSeriesData.js
var createSeriesData = __webpack_require__(91956);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Series.js
var Series = __webpack_require__(48134);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/effectScatter/EffectScatterSeries.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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



var EffectScatterSeries_EffectScatterSeriesModel = /** @class */function (_super) {
  (0,tslib_es6.__extends)(EffectScatterSeriesModel, _super);
  function EffectScatterSeriesModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = EffectScatterSeriesModel.type;
    _this.hasSymbolVisual = true;
    return _this;
  }
  EffectScatterSeriesModel.prototype.getInitialData = function (option, ecModel) {
    return (0,createSeriesData["default"])(null, this, {
      useEncodeDefaulter: true
    });
  };
  EffectScatterSeriesModel.prototype.brushSelector = function (dataIndex, data, selectors) {
    return selectors.point(data.getItemLayout(dataIndex));
  };
  EffectScatterSeriesModel.type = 'series.effectScatter';
  EffectScatterSeriesModel.dependencies = ['grid', 'polar'];
  EffectScatterSeriesModel.defaultOption = {
    coordinateSystem: 'cartesian2d',
    // zlevel: 0,
    z: 2,
    legendHoverLink: true,
    effectType: 'ripple',
    progressive: 0,
    // When to show the effect, option: 'render'|'emphasis'
    showEffectOn: 'render',
    clip: true,
    // Ripple effect config
    rippleEffect: {
      period: 4,
      // Scale of ripple
      scale: 2.5,
      // Brush type can be fill or stroke
      brushType: 'fill',
      // Ripple number
      number: 3
    },
    universalTransition: {
      divideShape: 'clone'
    },
    // Cartesian coordinate system
    // xAxisIndex: 0,
    // yAxisIndex: 0,
    // Polar coordinate system
    // polarIndex: 0,
    // Geo coordinate system
    // geoIndex: 0,
    // symbol: null,        // 图形类型
    symbolSize: 10 // 图形大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2
    // symbolRotate: null,  // 图形旋转控制
    // itemStyle: {
    //     opacity: 1
    // }
  };
  return EffectScatterSeriesModel;
}(Series["default"]);
/* ESM default export */ var EffectScatterSeries = (EffectScatterSeries_EffectScatterSeriesModel);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/effectScatter/install.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  registers.registerChartView(effectScatter_EffectScatterView);
  registers.registerSeriesModel(EffectScatterSeries);
  registers.registerLayout((0,points["default"])('effectScatter'));
}

}),
84740: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  install: function() { return /* binding */ install; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(12012);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/Polyline.js
var Polyline = __webpack_require__(56490);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Text.js
var Text = __webpack_require__(97199);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/animation/basicTransition.js
var basicTransition = __webpack_require__(17524);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/Point.js
var Point = __webpack_require__(12430);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/Polygon.js
var Polygon = __webpack_require__(71272);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/states.js
var states = __webpack_require__(63344);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/view/Chart.js
var Chart = __webpack_require__(47389);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/label/labelGuideHelper.js
var labelGuideHelper = __webpack_require__(34633);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/label/labelStyle.js
var labelStyle = __webpack_require__(77704);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/funnel/FunnelView.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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







var opacityAccessPath = ['itemStyle', 'opacity'];
/**
 * Piece of pie including Sector, Label, LabelLine
 */
var FunnelView_FunnelPiece = /** @class */function (_super) {
  (0,tslib_es6.__extends)(FunnelPiece, _super);
  function FunnelPiece(data, idx) {
    var _this = _super.call(this) || this;
    var polygon = _this;
    var labelLine = new Polyline["default"]();
    var text = new Text["default"]();
    polygon.setTextContent(text);
    _this.setTextGuideLine(labelLine);
    _this.updateData(data, idx, true);
    return _this;
  }
  FunnelPiece.prototype.updateData = function (data, idx, firstCreate) {
    var polygon = this;
    var seriesModel = data.hostModel;
    var itemModel = data.getItemModel(idx);
    var layout = data.getItemLayout(idx);
    var emphasisModel = itemModel.getModel('emphasis');
    var opacity = itemModel.get(opacityAccessPath);
    opacity = opacity == null ? 1 : opacity;
    if (!firstCreate) {
      (0,basicTransition.saveOldStyle)(polygon);
    }
    // Update common style
    polygon.useStyle(data.getItemVisual(idx, 'style'));
    polygon.style.lineJoin = 'round';
    if (firstCreate) {
      polygon.setShape({
        points: layout.points
      });
      polygon.style.opacity = 0;
      basicTransition.initProps(polygon, {
        style: {
          opacity: opacity
        }
      }, seriesModel, idx);
    } else {
      basicTransition.updateProps(polygon, {
        style: {
          opacity: opacity
        },
        shape: {
          points: layout.points
        }
      }, seriesModel, idx);
    }
    (0,states.setStatesStylesFromModel)(polygon, itemModel);
    this._updateLabel(data, idx);
    (0,states.toggleHoverEmphasis)(this, emphasisModel.get('focus'), emphasisModel.get('blurScope'), emphasisModel.get('disabled'));
  };
  FunnelPiece.prototype._updateLabel = function (data, idx) {
    var polygon = this;
    var labelLine = this.getTextGuideLine();
    var labelText = polygon.getTextContent();
    var seriesModel = data.hostModel;
    var itemModel = data.getItemModel(idx);
    var layout = data.getItemLayout(idx);
    var labelLayout = layout.label;
    var style = data.getItemVisual(idx, 'style');
    var visualColor = style.fill;
    (0,labelStyle.setLabelStyle)(
    // position will not be used in setLabelStyle
    labelText, (0,labelStyle.getLabelStatesModels)(itemModel), {
      labelFetcher: data.hostModel,
      labelDataIndex: idx,
      defaultOpacity: style.opacity,
      defaultText: data.getName(idx)
    }, {
      normal: {
        align: labelLayout.textAlign,
        verticalAlign: labelLayout.verticalAlign
      }
    });
    polygon.setTextConfig({
      local: true,
      inside: !!labelLayout.inside,
      insideStroke: visualColor,
      // insideFill: 'auto',
      outsideFill: visualColor
    });
    var linePoints = labelLayout.linePoints;
    labelLine.setShape({
      points: linePoints
    });
    polygon.textGuideLineConfig = {
      anchor: linePoints ? new Point["default"](linePoints[0][0], linePoints[0][1]) : null
    };
    // Make sure update style on labelText after setLabelStyle.
    // Because setLabelStyle will replace a new style on it.
    basicTransition.updateProps(labelText, {
      style: {
        x: labelLayout.x,
        y: labelLayout.y
      }
    }, seriesModel, idx);
    labelText.attr({
      rotation: labelLayout.rotation,
      originX: labelLayout.x,
      originY: labelLayout.y,
      z2: 10
    });
    (0,labelGuideHelper.setLabelLineStyle)(polygon, (0,labelGuideHelper.getLabelLineStatesModels)(itemModel), {
      // Default use item visual color
      stroke: visualColor
    });
  };
  return FunnelPiece;
}(Polygon["default"]);
var FunnelView_FunnelView = /** @class */function (_super) {
  (0,tslib_es6.__extends)(FunnelView, _super);
  function FunnelView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = FunnelView.type;
    _this.ignoreLabelLineUpdate = true;
    return _this;
  }
  FunnelView.prototype.render = function (seriesModel, ecModel, api) {
    var data = seriesModel.getData();
    var oldData = this._data;
    var group = this.group;
    data.diff(oldData).add(function (idx) {
      var funnelPiece = new FunnelView_FunnelPiece(data, idx);
      data.setItemGraphicEl(idx, funnelPiece);
      group.add(funnelPiece);
    }).update(function (newIdx, oldIdx) {
      var piece = oldData.getItemGraphicEl(oldIdx);
      piece.updateData(data, newIdx);
      group.add(piece);
      data.setItemGraphicEl(newIdx, piece);
    }).remove(function (idx) {
      var piece = oldData.getItemGraphicEl(idx);
      basicTransition.removeElementWithFadeOut(piece, seriesModel, idx);
    }).execute();
    this._data = data;
  };
  FunnelView.prototype.remove = function () {
    this.group.removeAll();
    this._data = null;
  };
  FunnelView.prototype.dispose = function () {};
  FunnelView.type = 'funnel';
  return FunnelView;
}(Chart["default"]);
/* ESM default export */ var funnel_FunnelView = (FunnelView_FunnelView);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(96585);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/createSeriesDataSimply.js
var createSeriesDataSimply = __webpack_require__(86011);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/model.js
var model = __webpack_require__(46451);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/data/helper/sourceHelper.js
var sourceHelper = __webpack_require__(490);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/visual/LegendVisualProvider.js
var LegendVisualProvider = __webpack_require__(57275);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Series.js
var Series = __webpack_require__(48134);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/funnel/FunnelSeries.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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







var FunnelSeries_FunnelSeriesModel = /** @class */function (_super) {
  (0,tslib_es6.__extends)(FunnelSeriesModel, _super);
  function FunnelSeriesModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = FunnelSeriesModel.type;
    return _this;
  }
  FunnelSeriesModel.prototype.init = function (option) {
    _super.prototype.init.apply(this, arguments);
    // Enable legend selection for each data item
    // Use a function instead of direct access because data reference may changed
    this.legendVisualProvider = new LegendVisualProvider["default"](util.bind(this.getData, this), util.bind(this.getRawData, this));
    // Extend labelLine emphasis
    this._defaultLabelLine(option);
  };
  FunnelSeriesModel.prototype.getInitialData = function (option, ecModel) {
    return (0,createSeriesDataSimply["default"])(this, {
      coordDimensions: ['value'],
      encodeDefaulter: util.curry(sourceHelper.makeSeriesEncodeForNameBased, this)
    });
  };
  FunnelSeriesModel.prototype._defaultLabelLine = function (option) {
    // Extend labelLine emphasis
    (0,model.defaultEmphasis)(option, 'labelLine', ['show']);
    var labelLineNormalOpt = option.labelLine;
    var labelLineEmphasisOpt = option.emphasis.labelLine;
    // Not show label line if `label.normal.show = false`
    labelLineNormalOpt.show = labelLineNormalOpt.show && option.label.show;
    labelLineEmphasisOpt.show = labelLineEmphasisOpt.show && option.emphasis.label.show;
  };
  // Overwrite
  FunnelSeriesModel.prototype.getDataParams = function (dataIndex) {
    var data = this.getData();
    var params = _super.prototype.getDataParams.call(this, dataIndex);
    var valueDim = data.mapDimension('value');
    var sum = data.getSum(valueDim);
    // Percent is 0 if sum is 0
    params.percent = !sum ? 0 : +(data.get(valueDim, dataIndex) / sum * 100).toFixed(2);
    params.$vars.push('percent');
    return params;
  };
  FunnelSeriesModel.type = 'series.funnel';
  FunnelSeriesModel.defaultOption = {
    // zlevel: 0,                  // 一级层叠
    z: 2,
    legendHoverLink: true,
    colorBy: 'data',
    left: 80,
    top: 60,
    right: 80,
    bottom: 60,
    // width: {totalWidth} - left - right,
    // height: {totalHeight} - top - bottom,
    // 默认取数据最小最大值
    // min: 0,
    // max: 100,
    minSize: '0%',
    maxSize: '100%',
    sort: 'descending',
    orient: 'vertical',
    gap: 0,
    funnelAlign: 'center',
    label: {
      show: true,
      position: 'outer'
      // formatter: 标签文本格式器，同Tooltip.formatter，不支持异步回调
    },
    labelLine: {
      show: true,
      length: 20,
      lineStyle: {
        // color: 各异,
        width: 1
      }
    },
    itemStyle: {
      // color: 各异,
      borderColor: '#fff',
      borderWidth: 1
    },
    emphasis: {
      label: {
        show: true
      }
    },
    select: {
      itemStyle: {
        borderColor: '#212121'
      }
    }
  };
  return FunnelSeriesModel;
}(Series["default"]);
/* ESM default export */ var FunnelSeries = (FunnelSeries_FunnelSeriesModel);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/layout.js
var util_layout = __webpack_require__(37624);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(81731);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/funnel/funnelLayout.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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



function getViewRect(seriesModel, api) {
  return util_layout.getLayoutRect(seriesModel.getBoxLayoutParams(), {
    width: api.getWidth(),
    height: api.getHeight()
  });
}
function getSortedIndices(data, sort) {
  var valueDim = data.mapDimension('value');
  var valueArr = data.mapArray(valueDim, function (val) {
    return val;
  });
  var indices = [];
  var isAscending = sort === 'ascending';
  for (var i = 0, len = data.count(); i < len; i++) {
    indices[i] = i;
  }
  // Add custom sortable function & none sortable opetion by "options.sort"
  if ((0,util.isFunction)(sort)) {
    indices.sort(sort);
  } else if (sort !== 'none') {
    indices.sort(function (a, b) {
      return isAscending ? valueArr[a] - valueArr[b] : valueArr[b] - valueArr[a];
    });
  }
  return indices;
}
function funnelLayout_labelLayout(data) {
  var seriesModel = data.hostModel;
  var orient = seriesModel.get('orient');
  data.each(function (idx) {
    var itemModel = data.getItemModel(idx);
    var labelModel = itemModel.getModel('label');
    var labelPosition = labelModel.get('position');
    var labelLineModel = itemModel.getModel('labelLine');
    var layout = data.getItemLayout(idx);
    var points = layout.points;
    var isLabelInside = labelPosition === 'inner' || labelPosition === 'inside' || labelPosition === 'center' || labelPosition === 'insideLeft' || labelPosition === 'insideRight';
    var textAlign;
    var textX;
    var textY;
    var linePoints;
    if (isLabelInside) {
      if (labelPosition === 'insideLeft') {
        textX = (points[0][0] + points[3][0]) / 2 + 5;
        textY = (points[0][1] + points[3][1]) / 2;
        textAlign = 'left';
      } else if (labelPosition === 'insideRight') {
        textX = (points[1][0] + points[2][0]) / 2 - 5;
        textY = (points[1][1] + points[2][1]) / 2;
        textAlign = 'right';
      } else {
        textX = (points[0][0] + points[1][0] + points[2][0] + points[3][0]) / 4;
        textY = (points[0][1] + points[1][1] + points[2][1] + points[3][1]) / 4;
        textAlign = 'center';
      }
      linePoints = [[textX, textY], [textX, textY]];
    } else {
      var x1 = void 0;
      var y1 = void 0;
      var x2 = void 0;
      var y2 = void 0;
      var labelLineLen = labelLineModel.get('length');
      if (false) {}
      if (labelPosition === 'left') {
        // Left side
        x1 = (points[3][0] + points[0][0]) / 2;
        y1 = (points[3][1] + points[0][1]) / 2;
        x2 = x1 - labelLineLen;
        textX = x2 - 5;
        textAlign = 'right';
      } else if (labelPosition === 'right') {
        // Right side
        x1 = (points[1][0] + points[2][0]) / 2;
        y1 = (points[1][1] + points[2][1]) / 2;
        x2 = x1 + labelLineLen;
        textX = x2 + 5;
        textAlign = 'left';
      } else if (labelPosition === 'top') {
        // Top side
        x1 = (points[3][0] + points[0][0]) / 2;
        y1 = (points[3][1] + points[0][1]) / 2;
        y2 = y1 - labelLineLen;
        textY = y2 - 5;
        textAlign = 'center';
      } else if (labelPosition === 'bottom') {
        // Bottom side
        x1 = (points[1][0] + points[2][0]) / 2;
        y1 = (points[1][1] + points[2][1]) / 2;
        y2 = y1 + labelLineLen;
        textY = y2 + 5;
        textAlign = 'center';
      } else if (labelPosition === 'rightTop') {
        // RightTop side
        x1 = orient === 'horizontal' ? points[3][0] : points[1][0];
        y1 = orient === 'horizontal' ? points[3][1] : points[1][1];
        if (orient === 'horizontal') {
          y2 = y1 - labelLineLen;
          textY = y2 - 5;
          textAlign = 'center';
        } else {
          x2 = x1 + labelLineLen;
          textX = x2 + 5;
          textAlign = 'top';
        }
      } else if (labelPosition === 'rightBottom') {
        // RightBottom side
        x1 = points[2][0];
        y1 = points[2][1];
        if (orient === 'horizontal') {
          y2 = y1 + labelLineLen;
          textY = y2 + 5;
          textAlign = 'center';
        } else {
          x2 = x1 + labelLineLen;
          textX = x2 + 5;
          textAlign = 'bottom';
        }
      } else if (labelPosition === 'leftTop') {
        // LeftTop side
        x1 = points[0][0];
        y1 = orient === 'horizontal' ? points[0][1] : points[1][1];
        if (orient === 'horizontal') {
          y2 = y1 - labelLineLen;
          textY = y2 - 5;
          textAlign = 'center';
        } else {
          x2 = x1 - labelLineLen;
          textX = x2 - 5;
          textAlign = 'right';
        }
      } else if (labelPosition === 'leftBottom') {
        // LeftBottom side
        x1 = orient === 'horizontal' ? points[1][0] : points[3][0];
        y1 = orient === 'horizontal' ? points[1][1] : points[2][1];
        if (orient === 'horizontal') {
          y2 = y1 + labelLineLen;
          textY = y2 + 5;
          textAlign = 'center';
        } else {
          x2 = x1 - labelLineLen;
          textX = x2 - 5;
          textAlign = 'right';
        }
      } else {
        // Right side or Bottom side
        x1 = (points[1][0] + points[2][0]) / 2;
        y1 = (points[1][1] + points[2][1]) / 2;
        if (orient === 'horizontal') {
          y2 = y1 + labelLineLen;
          textY = y2 + 5;
          textAlign = 'center';
        } else {
          x2 = x1 + labelLineLen;
          textX = x2 + 5;
          textAlign = 'left';
        }
      }
      if (orient === 'horizontal') {
        x2 = x1;
        textX = x2;
      } else {
        y2 = y1;
        textY = y2;
      }
      linePoints = [[x1, y1], [x2, y2]];
    }
    layout.label = {
      linePoints: linePoints,
      x: textX,
      y: textY,
      verticalAlign: 'middle',
      textAlign: textAlign,
      inside: isLabelInside
    };
  });
}
function funnelLayout(ecModel, api) {
  ecModel.eachSeriesByType('funnel', function (seriesModel) {
    var data = seriesModel.getData();
    var valueDim = data.mapDimension('value');
    var sort = seriesModel.get('sort');
    var viewRect = getViewRect(seriesModel, api);
    var orient = seriesModel.get('orient');
    var viewWidth = viewRect.width;
    var viewHeight = viewRect.height;
    var indices = getSortedIndices(data, sort);
    var x = viewRect.x;
    var y = viewRect.y;
    var sizeExtent = orient === 'horizontal' ? [(0,number.parsePercent)(seriesModel.get('minSize'), viewHeight), (0,number.parsePercent)(seriesModel.get('maxSize'), viewHeight)] : [(0,number.parsePercent)(seriesModel.get('minSize'), viewWidth), (0,number.parsePercent)(seriesModel.get('maxSize'), viewWidth)];
    var dataExtent = data.getDataExtent(valueDim);
    var min = seriesModel.get('min');
    var max = seriesModel.get('max');
    if (min == null) {
      min = Math.min(dataExtent[0], 0);
    }
    if (max == null) {
      max = dataExtent[1];
    }
    var funnelAlign = seriesModel.get('funnelAlign');
    var gap = seriesModel.get('gap');
    var viewSize = orient === 'horizontal' ? viewWidth : viewHeight;
    var itemSize = (viewSize - gap * (data.count() - 1)) / data.count();
    var getLinePoints = function (idx, offset) {
      // End point index is data.count() and we assign it 0
      if (orient === 'horizontal') {
        var val_1 = data.get(valueDim, idx) || 0;
        var itemHeight = (0,number.linearMap)(val_1, [min, max], sizeExtent, true);
        var y0 = void 0;
        switch (funnelAlign) {
          case 'top':
            y0 = y;
            break;
          case 'center':
            y0 = y + (viewHeight - itemHeight) / 2;
            break;
          case 'bottom':
            y0 = y + (viewHeight - itemHeight);
            break;
        }
        return [[offset, y0], [offset, y0 + itemHeight]];
      }
      var val = data.get(valueDim, idx) || 0;
      var itemWidth = (0,number.linearMap)(val, [min, max], sizeExtent, true);
      var x0;
      switch (funnelAlign) {
        case 'left':
          x0 = x;
          break;
        case 'center':
          x0 = x + (viewWidth - itemWidth) / 2;
          break;
        case 'right':
          x0 = x + viewWidth - itemWidth;
          break;
      }
      return [[x0, offset], [x0 + itemWidth, offset]];
    };
    if (sort === 'ascending') {
      // From bottom to top
      itemSize = -itemSize;
      gap = -gap;
      if (orient === 'horizontal') {
        x += viewWidth;
      } else {
        y += viewHeight;
      }
      indices = indices.reverse();
    }
    for (var i = 0; i < indices.length; i++) {
      var idx = indices[i];
      var nextIdx = indices[i + 1];
      var itemModel = data.getItemModel(idx);
      if (orient === 'horizontal') {
        var width = itemModel.get(['itemStyle', 'width']);
        if (width == null) {
          width = itemSize;
        } else {
          width = (0,number.parsePercent)(width, viewWidth);
          if (sort === 'ascending') {
            width = -width;
          }
        }
        var start = getLinePoints(idx, x);
        var end = getLinePoints(nextIdx, x + width);
        x += width + gap;
        data.setItemLayout(idx, {
          points: start.concat(end.slice().reverse())
        });
      } else {
        var height = itemModel.get(['itemStyle', 'height']);
        if (height == null) {
          height = itemSize;
        } else {
          height = (0,number.parsePercent)(height, viewHeight);
          if (sort === 'ascending') {
            height = -height;
          }
        }
        var start = getLinePoints(idx, y);
        var end = getLinePoints(nextIdx, y + height);
        y += height + gap;
        data.setItemLayout(idx, {
          points: start.concat(end.slice().reverse())
        });
      }
    }
    funnelLayout_labelLayout(data);
  });
}
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/processor/dataFilter.js
var dataFilter = __webpack_require__(47400);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/funnel/install.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  registers.registerChartView(funnel_FunnelView);
  registers.registerSeriesModel(FunnelSeries);
  registers.registerLayout(funnelLayout);
  registers.registerProcessor((0,dataFilter["default"])('funnel'));
}

}),
22110: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/gauge/PointerPath.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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


var PointerPath_PointerShape = /** @class */function () {
  function PointerShape() {
    this.angle = 0;
    this.width = 10;
    this.r = 10;
    this.x = 0;
    this.y = 0;
  }
  return PointerShape;
}();
var PointerPath_PointerPath = /** @class */function (_super) {
  (0,tslib_es6.__extends)(PointerPath, _super);
  function PointerPath(opts) {
    var _this = _super.call(this, opts) || this;
    _this.type = 'pointer';
    return _this;
  }
  PointerPath.prototype.getDefaultShape = function () {
    return new PointerPath_PointerShape();
  };
  PointerPath.prototype.buildPath = function (ctx, shape) {
    var mathCos = Math.cos;
    var mathSin = Math.sin;
    var r = shape.r;
    var width = shape.width;
    var angle = shape.angle;
    var x = shape.x - mathCos(angle) * width * (width >= r / 3 ? 1 : 2);
    var y = shape.y - mathSin(angle) * width * (width >= r / 3 ? 1 : 2);
    angle = shape.angle - Math.PI / 2;
    ctx.moveTo(x, y);
    ctx.lineTo(shape.x + mathCos(angle) * width, shape.y + mathSin(angle) * width);
    ctx.lineTo(shape.x + mathCos(shape.angle) * r, shape.y + mathSin(shape.angle) * r);
    ctx.lineTo(shape.x - mathCos(angle) * width, shape.y - mathSin(angle) * width);
    ctx.lineTo(x, y);
  };
  return PointerPath;
}(Path["default"]);
/* ESM default export */ var gauge_PointerPath = (PointerPath_PointerPath);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/Sector.js + 1 modules
var Sector = __webpack_require__(98289);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/Line.js
var Line = __webpack_require__(16504);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Text.js
var Text = __webpack_require__(97199);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/animation/basicTransition.js
var basicTransition = __webpack_require__(17524);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Group.js
var Group = __webpack_require__(58695);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/states.js
var states = __webpack_require__(63344);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/label/labelStyle.js
var labelStyle = __webpack_require__(77704);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/view/Chart.js
var Chart = __webpack_require__(47389);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(81731);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/shape/sausage.js
var sausage = __webpack_require__(35083);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/symbol.js
var symbol = __webpack_require__(44421);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Image.js
var Image = __webpack_require__(31386);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(96585);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/innerStore.js
var innerStore = __webpack_require__(55413);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/PathProxy.js
var PathProxy = __webpack_require__(6535);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/gauge/GaugeView.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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













function parsePosition(seriesModel, api) {
  var center = seriesModel.get('center');
  var width = api.getWidth();
  var height = api.getHeight();
  var size = Math.min(width, height);
  var cx = (0,number.parsePercent)(center[0], api.getWidth());
  var cy = (0,number.parsePercent)(center[1], api.getHeight());
  var r = (0,number.parsePercent)(seriesModel.get('radius'), size / 2);
  return {
    cx: cx,
    cy: cy,
    r: r
  };
}
function formatLabel(value, labelFormatter) {
  var label = value == null ? '' : value + '';
  if (labelFormatter) {
    if ((0,util.isString)(labelFormatter)) {
      label = labelFormatter.replace('{value}', label);
    } else if ((0,util.isFunction)(labelFormatter)) {
      label = labelFormatter(value);
    }
  }
  return label;
}
var GaugeView_GaugeView = /** @class */function (_super) {
  (0,tslib_es6.__extends)(GaugeView, _super);
  function GaugeView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = GaugeView.type;
    return _this;
  }
  GaugeView.prototype.render = function (seriesModel, ecModel, api) {
    this.group.removeAll();
    var colorList = seriesModel.get(['axisLine', 'lineStyle', 'color']);
    var posInfo = parsePosition(seriesModel, api);
    this._renderMain(seriesModel, ecModel, api, colorList, posInfo);
    this._data = seriesModel.getData();
  };
  GaugeView.prototype.dispose = function () {};
  GaugeView.prototype._renderMain = function (seriesModel, ecModel, api, colorList, posInfo) {
    var group = this.group;
    var clockwise = seriesModel.get('clockwise');
    var startAngle = -seriesModel.get('startAngle') / 180 * Math.PI;
    var endAngle = -seriesModel.get('endAngle') / 180 * Math.PI;
    var axisLineModel = seriesModel.getModel('axisLine');
    var roundCap = axisLineModel.get('roundCap');
    var MainPath = roundCap ? sausage["default"] : Sector["default"];
    var showAxis = axisLineModel.get('show');
    var lineStyleModel = axisLineModel.getModel('lineStyle');
    var axisLineWidth = lineStyleModel.get('width');
    var angles = [startAngle, endAngle];
    (0,PathProxy.normalizeArcAngles)(angles, !clockwise);
    startAngle = angles[0];
    endAngle = angles[1];
    var angleRangeSpan = endAngle - startAngle;
    var prevEndAngle = startAngle;
    var sectors = [];
    for (var i = 0; showAxis && i < colorList.length; i++) {
      // Clamp
      var percent = Math.min(Math.max(colorList[i][0], 0), 1);
      endAngle = startAngle + angleRangeSpan * percent;
      var sector = new MainPath({
        shape: {
          startAngle: prevEndAngle,
          endAngle: endAngle,
          cx: posInfo.cx,
          cy: posInfo.cy,
          clockwise: clockwise,
          r0: posInfo.r - axisLineWidth,
          r: posInfo.r
        },
        silent: true
      });
      sector.setStyle({
        fill: colorList[i][1]
      });
      sector.setStyle(lineStyleModel.getLineStyle(
      // Because we use sector to simulate arc
      // so the properties for stroking are useless
      ['color', 'width']));
      sectors.push(sector);
      prevEndAngle = endAngle;
    }
    sectors.reverse();
    (0,util.each)(sectors, function (sector) {
      return group.add(sector);
    });
    var getColor = function (percent) {
      // Less than 0
      if (percent <= 0) {
        return colorList[0][1];
      }
      var i;
      for (i = 0; i < colorList.length; i++) {
        if (colorList[i][0] >= percent && (i === 0 ? 0 : colorList[i - 1][0]) < percent) {
          return colorList[i][1];
        }
      }
      // More than 1
      return colorList[i - 1][1];
    };
    this._renderTicks(seriesModel, ecModel, api, getColor, posInfo, startAngle, endAngle, clockwise, axisLineWidth);
    this._renderTitleAndDetail(seriesModel, ecModel, api, getColor, posInfo);
    this._renderAnchor(seriesModel, posInfo);
    this._renderPointer(seriesModel, ecModel, api, getColor, posInfo, startAngle, endAngle, clockwise, axisLineWidth);
  };
  GaugeView.prototype._renderTicks = function (seriesModel, ecModel, api, getColor, posInfo, startAngle, endAngle, clockwise, axisLineWidth) {
    var group = this.group;
    var cx = posInfo.cx;
    var cy = posInfo.cy;
    var r = posInfo.r;
    var minVal = +seriesModel.get('min');
    var maxVal = +seriesModel.get('max');
    var splitLineModel = seriesModel.getModel('splitLine');
    var tickModel = seriesModel.getModel('axisTick');
    var labelModel = seriesModel.getModel('axisLabel');
    var splitNumber = seriesModel.get('splitNumber');
    var subSplitNumber = tickModel.get('splitNumber');
    var splitLineLen = (0,number.parsePercent)(splitLineModel.get('length'), r);
    var tickLen = (0,number.parsePercent)(tickModel.get('length'), r);
    var angle = startAngle;
    var step = (endAngle - startAngle) / splitNumber;
    var subStep = step / subSplitNumber;
    var splitLineStyle = splitLineModel.getModel('lineStyle').getLineStyle();
    var tickLineStyle = tickModel.getModel('lineStyle').getLineStyle();
    var splitLineDistance = splitLineModel.get('distance');
    var unitX;
    var unitY;
    for (var i = 0; i <= splitNumber; i++) {
      unitX = Math.cos(angle);
      unitY = Math.sin(angle);
      // Split line
      if (splitLineModel.get('show')) {
        var distance = splitLineDistance ? splitLineDistance + axisLineWidth : axisLineWidth;
        var splitLine = new Line["default"]({
          shape: {
            x1: unitX * (r - distance) + cx,
            y1: unitY * (r - distance) + cy,
            x2: unitX * (r - splitLineLen - distance) + cx,
            y2: unitY * (r - splitLineLen - distance) + cy
          },
          style: splitLineStyle,
          silent: true
        });
        if (splitLineStyle.stroke === 'auto') {
          splitLine.setStyle({
            stroke: getColor(i / splitNumber)
          });
        }
        group.add(splitLine);
      }
      // Label
      if (labelModel.get('show')) {
        var distance = labelModel.get('distance') + splitLineDistance;
        var label = formatLabel((0,number.round)(i / splitNumber * (maxVal - minVal) + minVal), labelModel.get('formatter'));
        var autoColor = getColor(i / splitNumber);
        var textStyleX = unitX * (r - splitLineLen - distance) + cx;
        var textStyleY = unitY * (r - splitLineLen - distance) + cy;
        var rotateType = labelModel.get('rotate');
        var rotate = 0;
        if (rotateType === 'radial') {
          rotate = -angle + 2 * Math.PI;
          if (rotate > Math.PI / 2) {
            rotate += Math.PI;
          }
        } else if (rotateType === 'tangential') {
          rotate = -angle - Math.PI / 2;
        } else if ((0,util.isNumber)(rotateType)) {
          rotate = rotateType * Math.PI / 180;
        }
        if (rotate === 0) {
          group.add(new Text["default"]({
            style: (0,labelStyle.createTextStyle)(labelModel, {
              text: label,
              x: textStyleX,
              y: textStyleY,
              verticalAlign: unitY < -0.8 ? 'top' : unitY > 0.8 ? 'bottom' : 'middle',
              align: unitX < -0.4 ? 'left' : unitX > 0.4 ? 'right' : 'center'
            }, {
              inheritColor: autoColor
            }),
            silent: true
          }));
        } else {
          group.add(new Text["default"]({
            style: (0,labelStyle.createTextStyle)(labelModel, {
              text: label,
              x: textStyleX,
              y: textStyleY,
              verticalAlign: 'middle',
              align: 'center'
            }, {
              inheritColor: autoColor
            }),
            silent: true,
            originX: textStyleX,
            originY: textStyleY,
            rotation: rotate
          }));
        }
      }
      // Axis tick
      if (tickModel.get('show') && i !== splitNumber) {
        var distance = tickModel.get('distance');
        distance = distance ? distance + axisLineWidth : axisLineWidth;
        for (var j = 0; j <= subSplitNumber; j++) {
          unitX = Math.cos(angle);
          unitY = Math.sin(angle);
          var tickLine = new Line["default"]({
            shape: {
              x1: unitX * (r - distance) + cx,
              y1: unitY * (r - distance) + cy,
              x2: unitX * (r - tickLen - distance) + cx,
              y2: unitY * (r - tickLen - distance) + cy
            },
            silent: true,
            style: tickLineStyle
          });
          if (tickLineStyle.stroke === 'auto') {
            tickLine.setStyle({
              stroke: getColor((i + j / subSplitNumber) / splitNumber)
            });
          }
          group.add(tickLine);
          angle += subStep;
        }
        angle -= subStep;
      } else {
        angle += step;
      }
    }
  };
  GaugeView.prototype._renderPointer = function (seriesModel, ecModel, api, getColor, posInfo, startAngle, endAngle, clockwise, axisLineWidth) {
    var group = this.group;
    var oldData = this._data;
    var oldProgressData = this._progressEls;
    var progressList = [];
    var showPointer = seriesModel.get(['pointer', 'show']);
    var progressModel = seriesModel.getModel('progress');
    var showProgress = progressModel.get('show');
    var data = seriesModel.getData();
    var valueDim = data.mapDimension('value');
    var minVal = +seriesModel.get('min');
    var maxVal = +seriesModel.get('max');
    var valueExtent = [minVal, maxVal];
    var angleExtent = [startAngle, endAngle];
    function createPointer(idx, angle) {
      var itemModel = data.getItemModel(idx);
      var pointerModel = itemModel.getModel('pointer');
      var pointerWidth = (0,number.parsePercent)(pointerModel.get('width'), posInfo.r);
      var pointerLength = (0,number.parsePercent)(pointerModel.get('length'), posInfo.r);
      var pointerStr = seriesModel.get(['pointer', 'icon']);
      var pointerOffset = pointerModel.get('offsetCenter');
      var pointerOffsetX = (0,number.parsePercent)(pointerOffset[0], posInfo.r);
      var pointerOffsetY = (0,number.parsePercent)(pointerOffset[1], posInfo.r);
      var pointerKeepAspect = pointerModel.get('keepAspect');
      var pointer;
      // not exist icon type will be set 'rect'
      if (pointerStr) {
        pointer = (0,symbol.createSymbol)(pointerStr, pointerOffsetX - pointerWidth / 2, pointerOffsetY - pointerLength, pointerWidth, pointerLength, null, pointerKeepAspect);
      } else {
        pointer = new gauge_PointerPath({
          shape: {
            angle: -Math.PI / 2,
            width: pointerWidth,
            r: pointerLength,
            x: pointerOffsetX,
            y: pointerOffsetY
          }
        });
      }
      pointer.rotation = -(angle + Math.PI / 2);
      pointer.x = posInfo.cx;
      pointer.y = posInfo.cy;
      return pointer;
    }
    function createProgress(idx, endAngle) {
      var roundCap = progressModel.get('roundCap');
      var ProgressPath = roundCap ? sausage["default"] : Sector["default"];
      var isOverlap = progressModel.get('overlap');
      var progressWidth = isOverlap ? progressModel.get('width') : axisLineWidth / data.count();
      var r0 = isOverlap ? posInfo.r - progressWidth : posInfo.r - (idx + 1) * progressWidth;
      var r = isOverlap ? posInfo.r : posInfo.r - idx * progressWidth;
      var progress = new ProgressPath({
        shape: {
          startAngle: startAngle,
          endAngle: endAngle,
          cx: posInfo.cx,
          cy: posInfo.cy,
          clockwise: clockwise,
          r0: r0,
          r: r
        }
      });
      isOverlap && (progress.z2 = (0,number.linearMap)(data.get(valueDim, idx), [minVal, maxVal], [100, 0], true));
      return progress;
    }
    if (showProgress || showPointer) {
      data.diff(oldData).add(function (idx) {
        var val = data.get(valueDim, idx);
        if (showPointer) {
          var pointer = createPointer(idx, startAngle);
          // TODO hide pointer on NaN value?
          basicTransition.initProps(pointer, {
            rotation: -((isNaN(+val) ? angleExtent[0] : (0,number.linearMap)(val, valueExtent, angleExtent, true)) + Math.PI / 2)
          }, seriesModel);
          group.add(pointer);
          data.setItemGraphicEl(idx, pointer);
        }
        if (showProgress) {
          var progress = createProgress(idx, startAngle);
          var isClip = progressModel.get('clip');
          basicTransition.initProps(progress, {
            shape: {
              endAngle: (0,number.linearMap)(val, valueExtent, angleExtent, isClip)
            }
          }, seriesModel);
          group.add(progress);
          // Add data index and series index for indexing the data by element
          // Useful in tooltip
          (0,innerStore.setCommonECData)(seriesModel.seriesIndex, data.dataType, idx, progress);
          progressList[idx] = progress;
        }
      }).update(function (newIdx, oldIdx) {
        var val = data.get(valueDim, newIdx);
        if (showPointer) {
          var previousPointer = oldData.getItemGraphicEl(oldIdx);
          var previousRotate = previousPointer ? previousPointer.rotation : startAngle;
          var pointer = createPointer(newIdx, previousRotate);
          pointer.rotation = previousRotate;
          basicTransition.updateProps(pointer, {
            rotation: -((isNaN(+val) ? angleExtent[0] : (0,number.linearMap)(val, valueExtent, angleExtent, true)) + Math.PI / 2)
          }, seriesModel);
          group.add(pointer);
          data.setItemGraphicEl(newIdx, pointer);
        }
        if (showProgress) {
          var previousProgress = oldProgressData[oldIdx];
          var previousEndAngle = previousProgress ? previousProgress.shape.endAngle : startAngle;
          var progress = createProgress(newIdx, previousEndAngle);
          var isClip = progressModel.get('clip');
          basicTransition.updateProps(progress, {
            shape: {
              endAngle: (0,number.linearMap)(val, valueExtent, angleExtent, isClip)
            }
          }, seriesModel);
          group.add(progress);
          // Add data index and series index for indexing the data by element
          // Useful in tooltip
          (0,innerStore.setCommonECData)(seriesModel.seriesIndex, data.dataType, newIdx, progress);
          progressList[newIdx] = progress;
        }
      }).execute();
      data.each(function (idx) {
        var itemModel = data.getItemModel(idx);
        var emphasisModel = itemModel.getModel('emphasis');
        var focus = emphasisModel.get('focus');
        var blurScope = emphasisModel.get('blurScope');
        var emphasisDisabled = emphasisModel.get('disabled');
        if (showPointer) {
          var pointer = data.getItemGraphicEl(idx);
          var symbolStyle = data.getItemVisual(idx, 'style');
          var visualColor = symbolStyle.fill;
          if (pointer instanceof Image["default"]) {
            var pathStyle = pointer.style;
            pointer.useStyle((0,util.extend)({
              image: pathStyle.image,
              x: pathStyle.x,
              y: pathStyle.y,
              width: pathStyle.width,
              height: pathStyle.height
            }, symbolStyle));
          } else {
            pointer.useStyle(symbolStyle);
            pointer.type !== 'pointer' && pointer.setColor(visualColor);
          }
          pointer.setStyle(itemModel.getModel(['pointer', 'itemStyle']).getItemStyle());
          if (pointer.style.fill === 'auto') {
            pointer.setStyle('fill', getColor((0,number.linearMap)(data.get(valueDim, idx), valueExtent, [0, 1], true)));
          }
          pointer.z2EmphasisLift = 0;
          (0,states.setStatesStylesFromModel)(pointer, itemModel);
          (0,states.toggleHoverEmphasis)(pointer, focus, blurScope, emphasisDisabled);
        }
        if (showProgress) {
          var progress = progressList[idx];
          progress.useStyle(data.getItemVisual(idx, 'style'));
          progress.setStyle(itemModel.getModel(['progress', 'itemStyle']).getItemStyle());
          progress.z2EmphasisLift = 0;
          (0,states.setStatesStylesFromModel)(progress, itemModel);
          (0,states.toggleHoverEmphasis)(progress, focus, blurScope, emphasisDisabled);
        }
      });
      this._progressEls = progressList;
    }
  };
  GaugeView.prototype._renderAnchor = function (seriesModel, posInfo) {
    var anchorModel = seriesModel.getModel('anchor');
    var showAnchor = anchorModel.get('show');
    if (showAnchor) {
      var anchorSize = anchorModel.get('size');
      var anchorType = anchorModel.get('icon');
      var offsetCenter = anchorModel.get('offsetCenter');
      var anchorKeepAspect = anchorModel.get('keepAspect');
      var anchor = (0,symbol.createSymbol)(anchorType, posInfo.cx - anchorSize / 2 + (0,number.parsePercent)(offsetCenter[0], posInfo.r), posInfo.cy - anchorSize / 2 + (0,number.parsePercent)(offsetCenter[1], posInfo.r), anchorSize, anchorSize, null, anchorKeepAspect);
      anchor.z2 = anchorModel.get('showAbove') ? 1 : 0;
      anchor.setStyle(anchorModel.getModel('itemStyle').getItemStyle());
      this.group.add(anchor);
    }
  };
  GaugeView.prototype._renderTitleAndDetail = function (seriesModel, ecModel, api, getColor, posInfo) {
    var _this = this;
    var data = seriesModel.getData();
    var valueDim = data.mapDimension('value');
    var minVal = +seriesModel.get('min');
    var maxVal = +seriesModel.get('max');
    var contentGroup = new Group["default"]();
    var newTitleEls = [];
    var newDetailEls = [];
    var hasAnimation = seriesModel.isAnimationEnabled();
    var showPointerAbove = seriesModel.get(['pointer', 'showAbove']);
    data.diff(this._data).add(function (idx) {
      newTitleEls[idx] = new Text["default"]({
        silent: true
      });
      newDetailEls[idx] = new Text["default"]({
        silent: true
      });
    }).update(function (idx, oldIdx) {
      newTitleEls[idx] = _this._titleEls[oldIdx];
      newDetailEls[idx] = _this._detailEls[oldIdx];
    }).execute();
    data.each(function (idx) {
      var itemModel = data.getItemModel(idx);
      var value = data.get(valueDim, idx);
      var itemGroup = new Group["default"]();
      var autoColor = getColor((0,number.linearMap)(value, [minVal, maxVal], [0, 1], true));
      var itemTitleModel = itemModel.getModel('title');
      if (itemTitleModel.get('show')) {
        var titleOffsetCenter = itemTitleModel.get('offsetCenter');
        var titleX = posInfo.cx + (0,number.parsePercent)(titleOffsetCenter[0], posInfo.r);
        var titleY = posInfo.cy + (0,number.parsePercent)(titleOffsetCenter[1], posInfo.r);
        var labelEl = newTitleEls[idx];
        labelEl.attr({
          z2: showPointerAbove ? 0 : 2,
          style: (0,labelStyle.createTextStyle)(itemTitleModel, {
            x: titleX,
            y: titleY,
            text: data.getName(idx),
            align: 'center',
            verticalAlign: 'middle'
          }, {
            inheritColor: autoColor
          })
        });
        itemGroup.add(labelEl);
      }
      var itemDetailModel = itemModel.getModel('detail');
      if (itemDetailModel.get('show')) {
        var detailOffsetCenter = itemDetailModel.get('offsetCenter');
        var detailX = posInfo.cx + (0,number.parsePercent)(detailOffsetCenter[0], posInfo.r);
        var detailY = posInfo.cy + (0,number.parsePercent)(detailOffsetCenter[1], posInfo.r);
        var width = (0,number.parsePercent)(itemDetailModel.get('width'), posInfo.r);
        var height = (0,number.parsePercent)(itemDetailModel.get('height'), posInfo.r);
        var detailColor = seriesModel.get(['progress', 'show']) ? data.getItemVisual(idx, 'style').fill : autoColor;
        var labelEl = newDetailEls[idx];
        var formatter_1 = itemDetailModel.get('formatter');
        labelEl.attr({
          z2: showPointerAbove ? 0 : 2,
          style: (0,labelStyle.createTextStyle)(itemDetailModel, {
            x: detailX,
            y: detailY,
            text: formatLabel(value, formatter_1),
            width: isNaN(width) ? null : width,
            height: isNaN(height) ? null : height,
            align: 'center',
            verticalAlign: 'middle'
          }, {
            inheritColor: detailColor
          })
        });
        (0,labelStyle.setLabelValueAnimation)(labelEl, {
          normal: itemDetailModel
        }, value, function (value) {
          return formatLabel(value, formatter_1);
        });
        hasAnimation && (0,labelStyle.animateLabelValue)(labelEl, idx, data, seriesModel, {
          getFormattedLabel: function (labelDataIndex, status, dataType, labelDimIndex, fmt, extendParams) {
            return formatLabel(extendParams ? extendParams.interpolatedValue : value, formatter_1);
          }
        });
        itemGroup.add(labelEl);
      }
      contentGroup.add(itemGroup);
    });
    this.group.add(contentGroup);
    this._titleEls = newTitleEls;
    this._detailEls = newDetailEls;
  };
  GaugeView.type = 'gauge';
  return GaugeView;
}(Chart["default"]);
/* ESM default export */ var gauge_GaugeView = (GaugeView_GaugeView);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/createSeriesDataSimply.js
var createSeriesDataSimply = __webpack_require__(86011);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Series.js
var Series = __webpack_require__(48134);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/gauge/GaugeSeries.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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



var GaugeSeries_GaugeSeriesModel = /** @class */function (_super) {
  (0,tslib_es6.__extends)(GaugeSeriesModel, _super);
  function GaugeSeriesModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = GaugeSeriesModel.type;
    _this.visualStyleAccessPath = 'itemStyle';
    return _this;
  }
  GaugeSeriesModel.prototype.getInitialData = function (option, ecModel) {
    return (0,createSeriesDataSimply["default"])(this, ['value']);
  };
  GaugeSeriesModel.type = 'series.gauge';
  GaugeSeriesModel.defaultOption = {
    // zlevel: 0,
    z: 2,
    colorBy: 'data',
    // 默认全局居中
    center: ['50%', '50%'],
    legendHoverLink: true,
    radius: '75%',
    startAngle: 225,
    endAngle: -45,
    clockwise: true,
    // 最小值
    min: 0,
    // 最大值
    max: 100,
    // 分割段数，默认为10
    splitNumber: 10,
    // 坐标轴线
    axisLine: {
      // 默认显示，属性show控制显示与否
      show: true,
      roundCap: false,
      lineStyle: {
        color: [[1, '#E6EBF8']],
        width: 10
      }
    },
    // 坐标轴线
    progress: {
      // 默认显示，属性show控制显示与否
      show: false,
      overlap: true,
      width: 10,
      roundCap: false,
      clip: true
    },
    // 分隔线
    splitLine: {
      // 默认显示，属性show控制显示与否
      show: true,
      // 属性length控制线长
      length: 10,
      distance: 10,
      // 属性lineStyle（详见lineStyle）控制线条样式
      lineStyle: {
        color: '#63677A',
        width: 3,
        type: 'solid'
      }
    },
    // 坐标轴小标记
    axisTick: {
      // 属性show控制显示与否，默认不显示
      show: true,
      // 每份split细分多少段
      splitNumber: 5,
      // 属性length控制线长
      length: 6,
      distance: 10,
      // 属性lineStyle控制线条样式
      lineStyle: {
        color: '#63677A',
        width: 1,
        type: 'solid'
      }
    },
    axisLabel: {
      show: true,
      distance: 15,
      // formatter: null,
      color: '#464646',
      fontSize: 12,
      rotate: 0
    },
    pointer: {
      icon: null,
      offsetCenter: [0, 0],
      show: true,
      showAbove: true,
      length: '60%',
      width: 6,
      keepAspect: false
    },
    anchor: {
      show: false,
      showAbove: false,
      size: 6,
      icon: 'circle',
      offsetCenter: [0, 0],
      keepAspect: false,
      itemStyle: {
        color: '#fff',
        borderWidth: 0,
        borderColor: '#5470c6'
      }
    },
    title: {
      show: true,
      // x, y，单位px
      offsetCenter: [0, '20%'],
      // 其余属性默认使用全局文本样式，详见TEXTSTYLE
      color: '#464646',
      fontSize: 16,
      valueAnimation: false
    },
    detail: {
      show: true,
      backgroundColor: 'rgba(0,0,0,0)',
      borderWidth: 0,
      borderColor: '#ccc',
      width: 100,
      height: null,
      padding: [5, 10],
      // x, y，单位px
      offsetCenter: [0, '40%'],
      // formatter: null,
      // 其余属性默认使用全局文本样式，详见TEXTSTYLE
      color: '#464646',
      fontSize: 30,
      fontWeight: 'bold',
      lineHeight: 30,
      valueAnimation: false
    }
  };
  return GaugeSeriesModel;
}(Series["default"]);
/* ESM default export */ var GaugeSeries = (GaugeSeries_GaugeSeriesModel);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/gauge/install.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  registers.registerChartView(gauge_GaugeView);
  registers.registerSeriesModel(GaugeSeries);
}

}),
97706: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  install: function() { return /* binding */ install; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(96585);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/graph/categoryFilter.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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

function categoryFilter(ecModel) {
  var legendModels = ecModel.findComponents({
    mainType: 'legend'
  });
  if (!legendModels || !legendModels.length) {
    return;
  }
  ecModel.eachSeriesByType('graph', function (graphSeries) {
    var categoriesData = graphSeries.getCategoriesData();
    var graph = graphSeries.getGraph();
    var data = graph.data;
    var categoryNames = categoriesData.mapArray(categoriesData.getName);
    data.filterSelf(function (idx) {
      var model = data.getItemModel(idx);
      var category = model.getShallow('category');
      if (category != null) {
        if ((0,util.isNumber)(category)) {
          category = categoryNames[category];
        }
        // If in any legend component the status is not selected.
        for (var i = 0; i < legendModels.length; i++) {
          if (!legendModels[i].isSelected(category)) {
            return false;
          }
        }
      }
      return true;
    });
  });
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/graph/categoryVisual.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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

function categoryVisual(ecModel) {
  var paletteScope = {};
  ecModel.eachSeriesByType('graph', function (seriesModel) {
    var categoriesData = seriesModel.getCategoriesData();
    var data = seriesModel.getData();
    var categoryNameIdxMap = {};
    categoriesData.each(function (idx) {
      var name = categoriesData.getName(idx);
      // Add prefix to avoid conflict with Object.prototype.
      categoryNameIdxMap['ec-' + name] = idx;
      var itemModel = categoriesData.getItemModel(idx);
      var style = itemModel.getModel('itemStyle').getItemStyle();
      if (!style.fill) {
        // Get color from palette.
        style.fill = seriesModel.getColorFromPalette(name, paletteScope);
      }
      categoriesData.setItemVisual(idx, 'style', style);
      var symbolVisualList = ['symbol', 'symbolSize', 'symbolKeepAspect'];
      for (var i = 0; i < symbolVisualList.length; i++) {
        var symbolVisual = itemModel.getShallow(symbolVisualList[i], true);
        if (symbolVisual != null) {
          categoriesData.setItemVisual(idx, symbolVisualList[i], symbolVisual);
        }
      }
    });
    // Assign category color to visual
    if (categoriesData.count()) {
      data.each(function (idx) {
        var model = data.getItemModel(idx);
        var categoryIdx = model.getShallow('category');
        if (categoryIdx != null) {
          if ((0,util.isString)(categoryIdx)) {
            categoryIdx = categoryNameIdxMap['ec-' + categoryIdx];
          }
          var categoryStyle = categoriesData.getItemVisual(categoryIdx, 'style');
          var style = data.ensureUniqueItemVisual(idx, 'style');
          (0,util.extend)(style, categoryStyle);
          var visualList = ['symbol', 'symbolSize', 'symbolKeepAspect'];
          for (var i = 0; i < visualList.length; i++) {
            data.setItemVisual(idx, visualList[i], categoriesData.getItemVisual(categoryIdx, visualList[i]));
          }
        }
      });
    }
  });
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/graph/edgeVisual.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
function graphEdgeVisual(ecModel) {
  ecModel.eachSeriesByType('graph', function (seriesModel) {
    var graph = seriesModel.getGraph();
    var edgeData = seriesModel.getEdgeData();
    var symbolType = normalize(seriesModel.get('edgeSymbol'));
    var symbolSize = normalize(seriesModel.get('edgeSymbolSize'));
    // const colorQuery = ['lineStyle', 'color'] as const;
    // const opacityQuery = ['lineStyle', 'opacity'] as const;
    edgeData.setVisual('fromSymbol', symbolType && symbolType[0]);
    edgeData.setVisual('toSymbol', symbolType && symbolType[1]);
    edgeData.setVisual('fromSymbolSize', symbolSize && symbolSize[0]);
    edgeData.setVisual('toSymbolSize', symbolSize && symbolSize[1]);
    edgeData.setVisual('style', seriesModel.getModel('lineStyle').getLineStyle());
    edgeData.each(function (idx) {
      var itemModel = edgeData.getItemModel(idx);
      var edge = graph.getEdgeByIndex(idx);
      var symbolType = normalize(itemModel.getShallow('symbol', true));
      var symbolSize = normalize(itemModel.getShallow('symbolSize', true));
      // Edge visual must after node visual
      var style = itemModel.getModel('lineStyle').getLineStyle();
      var existsStyle = edgeData.ensureUniqueItemVisual(idx, 'style');
      (0,util.extend)(existsStyle, style);
      switch (existsStyle.stroke) {
        case 'source':
          {
            var nodeStyle = edge.node1.getVisual('style');
            existsStyle.stroke = nodeStyle && nodeStyle.fill;
            break;
          }
        case 'target':
          {
            var nodeStyle = edge.node2.getVisual('style');
            existsStyle.stroke = nodeStyle && nodeStyle.fill;
            break;
          }
      }
      symbolType[0] && edge.setVisual('fromSymbol', symbolType[0]);
      symbolType[1] && edge.setVisual('toSymbol', symbolType[1]);
      symbolSize[0] && edge.setVisual('fromSymbolSize', symbolSize[0]);
      symbolSize[1] && edge.setVisual('toSymbolSize', symbolSize[1]);
    });
  });
}
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/vector.js
var vector = __webpack_require__(63261);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/multipleGraphEdgeHelper.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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

var KEY_DELIMITER = '-->';
/**
 * params handler
 * @param {module:echarts/model/SeriesModel} seriesModel
 * @returns {*}
 */
var getAutoCurvenessParams = function (seriesModel) {
  return seriesModel.get('autoCurveness') || null;
};
/**
 * Generate a list of edge curvatures, 20 is the default
 * @param {module:echarts/model/SeriesModel} seriesModel
 * @param {number} appendLength
 * @return  20 => [0, -0.2, 0.2, -0.4, 0.4, -0.6, 0.6, -0.8, 0.8, -1, 1, -1.2, 1.2, -1.4, 1.4, -1.6, 1.6, -1.8, 1.8, -2]
 */
var createCurveness = function (seriesModel, appendLength) {
  var autoCurvenessParmas = getAutoCurvenessParams(seriesModel);
  var length = 20;
  var curvenessList = [];
  // handler the function set
  if (util.isNumber(autoCurvenessParmas)) {
    length = autoCurvenessParmas;
  } else if (util.isArray(autoCurvenessParmas)) {
    seriesModel.__curvenessList = autoCurvenessParmas;
    return;
  }
  // append length
  if (appendLength > length) {
    length = appendLength;
  }
  // make sure the length is even
  var len = length % 2 ? length + 2 : length + 3;
  curvenessList = [];
  for (var i = 0; i < len; i++) {
    curvenessList.push((i % 2 ? i + 1 : i) / 10 * (i % 2 ? -1 : 1));
  }
  seriesModel.__curvenessList = curvenessList;
};
/**
 * Create different cache key data in the positive and negative directions, in order to set the curvature later
 * @param {number|string|module:echarts/data/Graph.Node} n1
 * @param {number|string|module:echarts/data/Graph.Node} n2
 * @param {module:echarts/model/SeriesModel} seriesModel
 * @returns {string} key
 */
var getKeyOfEdges = function (n1, n2, seriesModel) {
  var source = [n1.id, n1.dataIndex].join('.');
  var target = [n2.id, n2.dataIndex].join('.');
  return [seriesModel.uid, source, target].join(KEY_DELIMITER);
};
/**
 * get opposite key
 * @param {string} key
 * @returns {string}
 */
var getOppositeKey = function (key) {
  var keys = key.split(KEY_DELIMITER);
  return [keys[0], keys[2], keys[1]].join(KEY_DELIMITER);
};
/**
 * get edgeMap with key
 * @param edge
 * @param {module:echarts/model/SeriesModel} seriesModel
 */
var getEdgeFromMap = function (edge, seriesModel) {
  var key = getKeyOfEdges(edge.node1, edge.node2, seriesModel);
  return seriesModel.__edgeMap[key];
};
/**
 * calculate all cases total length
 * @param edge
 * @param seriesModel
 * @returns {number}
 */
var getTotalLengthBetweenNodes = function (edge, seriesModel) {
  var len = getEdgeMapLengthWithKey(getKeyOfEdges(edge.node1, edge.node2, seriesModel), seriesModel);
  var lenV = getEdgeMapLengthWithKey(getKeyOfEdges(edge.node2, edge.node1, seriesModel), seriesModel);
  return len + lenV;
};
/**
 *
 * @param key
 */
var getEdgeMapLengthWithKey = function (key, seriesModel) {
  var edgeMap = seriesModel.__edgeMap;
  return edgeMap[key] ? edgeMap[key].length : 0;
};
/**
 * Count the number of edges between the same two points, used to obtain the curvature table and the parity of the edge
 * @see /graph/GraphSeries.js@getInitialData
 * @param {module:echarts/model/SeriesModel} seriesModel
 */
function initCurvenessList(seriesModel) {
  if (!getAutoCurvenessParams(seriesModel)) {
    return;
  }
  seriesModel.__curvenessList = [];
  seriesModel.__edgeMap = {};
  // calc the array of curveness List
  createCurveness(seriesModel);
}
/**
 * set edgeMap with key
 * @param {number|string|module:echarts/data/Graph.Node} n1
 * @param {number|string|module:echarts/data/Graph.Node} n2
 * @param {module:echarts/model/SeriesModel} seriesModel
 * @param {number} index
 */
function createEdgeMapForCurveness(n1, n2, seriesModel, index) {
  if (!getAutoCurvenessParams(seriesModel)) {
    return;
  }
  var key = getKeyOfEdges(n1, n2, seriesModel);
  var edgeMap = seriesModel.__edgeMap;
  var oppositeEdges = edgeMap[getOppositeKey(key)];
  // set direction
  if (edgeMap[key] && !oppositeEdges) {
    edgeMap[key].isForward = true;
  } else if (oppositeEdges && edgeMap[key]) {
    oppositeEdges.isForward = true;
    edgeMap[key].isForward = false;
  }
  edgeMap[key] = edgeMap[key] || [];
  edgeMap[key].push(index);
}
/**
 * get curvature for edge
 * @param edge
 * @param {module:echarts/model/SeriesModel} seriesModel
 * @param index
 */
function getCurvenessForEdge(edge, seriesModel, index, needReverse) {
  var autoCurvenessParams = getAutoCurvenessParams(seriesModel);
  var isArrayParam = util.isArray(autoCurvenessParams);
  if (!autoCurvenessParams) {
    return null;
  }
  var edgeArray = getEdgeFromMap(edge, seriesModel);
  if (!edgeArray) {
    return null;
  }
  var edgeIndex = -1;
  for (var i = 0; i < edgeArray.length; i++) {
    if (edgeArray[i] === index) {
      edgeIndex = i;
      break;
    }
  }
  // if totalLen is Longer createCurveness
  var totalLen = getTotalLengthBetweenNodes(edge, seriesModel);
  createCurveness(seriesModel, totalLen);
  edge.lineStyle = edge.lineStyle || {};
  // if is opposite edge, must set curvenss to opposite number
  var curKey = getKeyOfEdges(edge.node1, edge.node2, seriesModel);
  var curvenessList = seriesModel.__curvenessList;
  // if pass array no need parity
  var parityCorrection = isArrayParam ? 0 : totalLen % 2 ? 0 : 1;
  if (!edgeArray.isForward) {
    // the opposite edge show outside
    var oppositeKey = getOppositeKey(curKey);
    var len = getEdgeMapLengthWithKey(oppositeKey, seriesModel);
    var resValue = curvenessList[edgeIndex + len + parityCorrection];
    // isNeedReverse, simple, force type need reverse the curveness in the junction of the forword and the opposite
    if (needReverse) {
      // set as array may make the parity handle with the len of opposite
      if (isArrayParam) {
        if (autoCurvenessParams && autoCurvenessParams[0] === 0) {
          return (len + parityCorrection) % 2 ? resValue : -resValue;
        } else {
          return ((len % 2 ? 0 : 1) + parityCorrection) % 2 ? resValue : -resValue;
        }
      } else {
        return (len + parityCorrection) % 2 ? resValue : -resValue;
      }
    } else {
      return curvenessList[edgeIndex + len + parityCorrection];
    }
  } else {
    return curvenessList[parityCorrection + edgeIndex];
  }
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/graph/simpleLayoutHelper.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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



function simpleLayout(seriesModel) {
  var coordSys = seriesModel.coordinateSystem;
  if (coordSys && coordSys.type !== 'view') {
    return;
  }
  var graph = seriesModel.getGraph();
  graph.eachNode(function (node) {
    var model = node.getModel();
    node.setLayout([+model.get('x'), +model.get('y')]);
  });
  simpleLayoutEdge(graph, seriesModel);
}
function simpleLayoutEdge(graph, seriesModel) {
  graph.eachEdge(function (edge, index) {
    var curveness = util.retrieve3(edge.getModel().get(['lineStyle', 'curveness']), -getCurvenessForEdge(edge, seriesModel, index, true), 0);
    var p1 = vector.clone(edge.node1.getLayout());
    var p2 = vector.clone(edge.node2.getLayout());
    var points = [p1, p2];
    if (+curveness) {
      points.push([(p1[0] + p2[0]) / 2 - (p1[1] - p2[1]) * curveness, (p1[1] + p2[1]) / 2 - (p2[0] - p1[0]) * curveness]);
    }
    edge.setLayout(points);
  });
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/graph/simpleLayout.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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


function graphSimpleLayout(ecModel, api) {
  ecModel.eachSeriesByType('graph', function (seriesModel) {
    var layout = seriesModel.get('layout');
    var coordSys = seriesModel.coordinateSystem;
    if (coordSys && coordSys.type !== 'view') {
      var data_1 = seriesModel.getData();
      var dimensions_1 = [];
      (0,util.each)(coordSys.dimensions, function (coordDim) {
        dimensions_1 = dimensions_1.concat(data_1.mapDimensionsAll(coordDim));
      });
      for (var dataIndex = 0; dataIndex < data_1.count(); dataIndex++) {
        var value = [];
        var hasValue = false;
        for (var i = 0; i < dimensions_1.length; i++) {
          var val = data_1.get(dimensions_1[i], dataIndex);
          if (!isNaN(val)) {
            hasValue = true;
          }
          value.push(val);
        }
        if (hasValue) {
          data_1.setItemLayout(dataIndex, coordSys.dataToPoint(value));
        } else {
          // Also {Array.<number>}, not undefined to avoid if...else... statement
          data_1.setItemLayout(dataIndex, [NaN, NaN]);
        }
      }
      simpleLayoutEdge(data_1.graph, seriesModel);
    } else if (!layout || layout === 'none') {
      simpleLayout(seriesModel);
    }
  });
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/graph/graphHelper.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
function getNodeGlobalScale(seriesModel) {
  var coordSys = seriesModel.coordinateSystem;
  if (coordSys.type !== 'view') {
    return 1;
  }
  var nodeScaleRatio = seriesModel.option.nodeScaleRatio;
  var groupZoom = coordSys.scaleX;
  // Scale node when zoom changes
  var roamZoom = coordSys.getZoom();
  var nodeScale = (roamZoom - 1) * nodeScaleRatio + 1;
  return nodeScale / groupZoom;
}
function getSymbolSize(node) {
  var symbolSize = node.getVisual('symbolSize');
  if (symbolSize instanceof Array) {
    symbolSize = (symbolSize[0] + symbolSize[1]) / 2;
  }
  return +symbolSize;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/graph/circularLayoutHelper.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
var _symbolRadiansHalf = [];
/**
 * `basedOn` can be:
 * 'value':
 *     This layout is not accurate and have same bad case. For example,
 *     if the min value is very smaller than the max value, the nodes
 *     with the min value probably overlap even though there is enough
 *     space to layout them. So we only use this approach in the as the
 *     init layout of the force layout.
 *     FIXME
 *     Probably we do not need this method any more but use
 *     `basedOn: 'symbolSize'` in force layout if
 *     delay its init operations to GraphView.
 * 'symbolSize':
 *     This approach work only if all of the symbol size calculated.
 *     That is, the progressive rendering is not applied to graph.
 *     FIXME
 *     If progressive rendering is applied to graph some day,
 *     probably we have to use `basedOn: 'value'`.
 */
function circularLayout(seriesModel, basedOn, draggingNode, pointer) {
  var coordSys = seriesModel.coordinateSystem;
  if (coordSys && coordSys.type !== 'view') {
    return;
  }
  var rect = coordSys.getBoundingRect();
  var nodeData = seriesModel.getData();
  var graph = nodeData.graph;
  var cx = rect.width / 2 + rect.x;
  var cy = rect.height / 2 + rect.y;
  var r = Math.min(rect.width, rect.height) / 2;
  var count = nodeData.count();
  nodeData.setLayout({
    cx: cx,
    cy: cy
  });
  if (!count) {
    return;
  }
  if (draggingNode) {
    var _a = coordSys.pointToData(pointer),
      tempX = _a[0],
      tempY = _a[1];
    var v = [tempX - cx, tempY - cy];
    vector.normalize(v, v);
    vector.scale(v, v, r);
    draggingNode.setLayout([cx + v[0], cy + v[1]], true);
    var circularRotateLabel = seriesModel.get(['circular', 'rotateLabel']);
    rotateNodeLabel(draggingNode, circularRotateLabel, cx, cy);
  }
  _layoutNodesBasedOn[basedOn](seriesModel, graph, nodeData, r, cx, cy, count);
  graph.eachEdge(function (edge, index) {
    var curveness = util.retrieve3(edge.getModel().get(['lineStyle', 'curveness']), getCurvenessForEdge(edge, seriesModel, index), 0);
    var p1 = vector.clone(edge.node1.getLayout());
    var p2 = vector.clone(edge.node2.getLayout());
    var cp1;
    var x12 = (p1[0] + p2[0]) / 2;
    var y12 = (p1[1] + p2[1]) / 2;
    if (+curveness) {
      curveness *= 3;
      cp1 = [cx * curveness + x12 * (1 - curveness), cy * curveness + y12 * (1 - curveness)];
    }
    edge.setLayout([p1, p2, cp1]);
  });
}
var _layoutNodesBasedOn = {
  value: function (seriesModel, graph, nodeData, r, cx, cy, count) {
    var angle = 0;
    var sum = nodeData.getSum('value');
    var unitAngle = Math.PI * 2 / (sum || count);
    graph.eachNode(function (node) {
      var value = node.getValue('value');
      var radianHalf = unitAngle * (sum ? value : 1) / 2;
      angle += radianHalf;
      node.setLayout([r * Math.cos(angle) + cx, r * Math.sin(angle) + cy]);
      angle += radianHalf;
    });
  },
  symbolSize: function (seriesModel, graph, nodeData, r, cx, cy, count) {
    var sumRadian = 0;
    _symbolRadiansHalf.length = count;
    var nodeScale = getNodeGlobalScale(seriesModel);
    graph.eachNode(function (node) {
      var symbolSize = getSymbolSize(node);
      // Normally this case will not happen, but we still add
      // some the defensive code (2px is an arbitrary value).
      isNaN(symbolSize) && (symbolSize = 2);
      symbolSize < 0 && (symbolSize = 0);
      symbolSize *= nodeScale;
      var symbolRadianHalf = Math.asin(symbolSize / 2 / r);
      // when `symbolSize / 2` is bigger than `r`.
      isNaN(symbolRadianHalf) && (symbolRadianHalf = PI / 2);
      _symbolRadiansHalf[node.dataIndex] = symbolRadianHalf;
      sumRadian += symbolRadianHalf * 2;
    });
    var halfRemainRadian = (2 * PI - sumRadian) / count / 2;
    var angle = 0;
    graph.eachNode(function (node) {
      var radianHalf = halfRemainRadian + _symbolRadiansHalf[node.dataIndex];
      angle += radianHalf;
      // init circular layout for
      // 1. layout undefined node
      // 2. not fixed node
      (!node.getLayout() || !node.getLayout().fixed) && node.setLayout([r * Math.cos(angle) + cx, r * Math.sin(angle) + cy]);
      angle += radianHalf;
    });
  }
};
function rotateNodeLabel(node, circularRotateLabel, cx, cy) {
  var el = node.getGraphicEl();
  // need to check if el exists. '-' value may not create node element.
  if (!el) {
    return;
  }
  var nodeModel = node.getModel();
  var labelRotate = nodeModel.get(['label', 'rotate']) || 0;
  var symbolPath = el.getSymbolPath();
  if (circularRotateLabel) {
    var pos = node.getLayout();
    var rad = Math.atan2(pos[1] - cy, pos[0] - cx);
    if (rad < 0) {
      rad = Math.PI * 2 + rad;
    }
    var isLeft = pos[0] < cx;
    if (isLeft) {
      rad = rad - Math.PI;
    }
    var textPosition = isLeft ? 'left' : 'right';
    symbolPath.setTextConfig({
      rotation: -rad,
      position: textPosition,
      origin: 'center'
    });
    var emphasisState = symbolPath.ensureState('emphasis');
    util.extend(emphasisState.textConfig || (emphasisState.textConfig = {}), {
      position: textPosition
    });
  } else {
    symbolPath.setTextConfig({
      rotation: labelRotate *= Math.PI / 180
    });
  }
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/graph/circularLayout.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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

function graphCircularLayout(ecModel) {
  ecModel.eachSeriesByType('graph', function (seriesModel) {
    if (seriesModel.get('layout') === 'circular') {
      circularLayout(seriesModel, 'symbolSize');
    }
  });
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/graph/forceHelper.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
* Some formulas were originally copied from "d3.js" with some
* modifications made for this project.
* (See more details in the comment of the method "step" below.)
* The use of the source code of this file is also subject to the terms
* and consitions of the license of "d3.js" (BSD-3Clause, see
* </licenses/LICENSE-d3>).
*/

var scaleAndAdd = vector.scaleAndAdd;
// function adjacentNode(n, e) {
//     return e.n1 === n ? e.n2 : e.n1;
// }
function forceHelper_forceLayout(inNodes, inEdges, opts) {
  var nodes = inNodes;
  var edges = inEdges;
  var rect = opts.rect;
  var width = rect.width;
  var height = rect.height;
  var center = [rect.x + width / 2, rect.y + height / 2];
  // let scale = opts.scale || 1;
  var gravity = opts.gravity == null ? 0.1 : opts.gravity;
  // for (let i = 0; i < edges.length; i++) {
  //     let e = edges[i];
  //     let n1 = e.n1;
  //     let n2 = e.n2;
  //     n1.edges = n1.edges || [];
  //     n2.edges = n2.edges || [];
  //     n1.edges.push(e);
  //     n2.edges.push(e);
  // }
  // Init position
  for (var i = 0; i < nodes.length; i++) {
    var n = nodes[i];
    if (!n.p) {
      n.p = vector.create(width * (Math.random() - 0.5) + center[0], height * (Math.random() - 0.5) + center[1]);
    }
    n.pp = vector.clone(n.p);
    n.edges = null;
  }
  // Formula in 'Graph Drawing by Force-directed Placement'
  // let k = scale * Math.sqrt(width * height / nodes.length);
  // let k2 = k * k;
  var initialFriction = opts.friction == null ? 0.6 : opts.friction;
  var friction = initialFriction;
  var beforeStepCallback;
  var afterStepCallback;
  return {
    warmUp: function () {
      friction = initialFriction * 0.8;
    },
    setFixed: function (idx) {
      nodes[idx].fixed = true;
    },
    setUnfixed: function (idx) {
      nodes[idx].fixed = false;
    },
    /**
     * Before step hook
     */
    beforeStep: function (cb) {
      beforeStepCallback = cb;
    },
    /**
     * After step hook
     */
    afterStep: function (cb) {
      afterStepCallback = cb;
    },
    /**
     * Some formulas were originally copied from "d3.js"
     * https://github.com/d3/d3/blob/b516d77fb8566b576088e73410437494717ada26/src/layout/force.js
     * with some modifications made for this project.
     * See the license statement at the head of this file.
     */
    step: function (cb) {
      beforeStepCallback && beforeStepCallback(nodes, edges);
      var v12 = [];
      var nLen = nodes.length;
      for (var i = 0; i < edges.length; i++) {
        var e = edges[i];
        if (e.ignoreForceLayout) {
          continue;
        }
        var n1 = e.n1;
        var n2 = e.n2;
        vector.sub(v12, n2.p, n1.p);
        var d = vector.len(v12) - e.d;
        var w = n2.w / (n1.w + n2.w);
        if (isNaN(w)) {
          w = 0;
        }
        vector.normalize(v12, v12);
        !n1.fixed && scaleAndAdd(n1.p, n1.p, v12, w * d * friction);
        !n2.fixed && scaleAndAdd(n2.p, n2.p, v12, -(1 - w) * d * friction);
      }
      // Gravity
      for (var i = 0; i < nLen; i++) {
        var n = nodes[i];
        if (!n.fixed) {
          vector.sub(v12, center, n.p);
          // let d = vec2.len(v12);
          // vec2.scale(v12, v12, 1 / d);
          // let gravityFactor = gravity;
          scaleAndAdd(n.p, n.p, v12, gravity * friction);
        }
      }
      // Repulsive
      // PENDING
      for (var i = 0; i < nLen; i++) {
        var n1 = nodes[i];
        for (var j = i + 1; j < nLen; j++) {
          var n2 = nodes[j];
          vector.sub(v12, n2.p, n1.p);
          var d = vector.len(v12);
          if (d === 0) {
            // Random repulse
            vector.set(v12, Math.random() - 0.5, Math.random() - 0.5);
            d = 1;
          }
          var repFact = (n1.rep + n2.rep) / d / d;
          !n1.fixed && scaleAndAdd(n1.pp, n1.pp, v12, repFact);
          !n2.fixed && scaleAndAdd(n2.pp, n2.pp, v12, -repFact);
        }
      }
      var v = [];
      for (var i = 0; i < nLen; i++) {
        var n = nodes[i];
        if (!n.fixed) {
          vector.sub(v, n.p, n.pp);
          scaleAndAdd(n.p, n.p, v, friction);
          vector.copy(n.pp, n.p);
        }
      }
      friction = friction * 0.992;
      var finished = friction < 0.01;
      afterStepCallback && afterStepCallback(nodes, edges, finished);
      cb && cb(finished);
    }
  };
}
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(81731);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/graph/forceLayout.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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







function graphForceLayout(ecModel) {
  ecModel.eachSeriesByType('graph', function (graphSeries) {
    var coordSys = graphSeries.coordinateSystem;
    if (coordSys && coordSys.type !== 'view') {
      return;
    }
    if (graphSeries.get('layout') === 'force') {
      var preservedPoints_1 = graphSeries.preservedPoints || {};
      var graph_1 = graphSeries.getGraph();
      var nodeData_1 = graph_1.data;
      var edgeData = graph_1.edgeData;
      var forceModel = graphSeries.getModel('force');
      var initLayout = forceModel.get('initLayout');
      if (graphSeries.preservedPoints) {
        nodeData_1.each(function (idx) {
          var id = nodeData_1.getId(idx);
          nodeData_1.setItemLayout(idx, preservedPoints_1[id] || [NaN, NaN]);
        });
      } else if (!initLayout || initLayout === 'none') {
        simpleLayout(graphSeries);
      } else if (initLayout === 'circular') {
        circularLayout(graphSeries, 'value');
      }
      var nodeDataExtent_1 = nodeData_1.getDataExtent('value');
      var edgeDataExtent_1 = edgeData.getDataExtent('value');
      // let edgeDataExtent = edgeData.getDataExtent('value');
      var repulsion = forceModel.get('repulsion');
      var edgeLength = forceModel.get('edgeLength');
      var repulsionArr_1 = util.isArray(repulsion) ? repulsion : [repulsion, repulsion];
      var edgeLengthArr_1 = util.isArray(edgeLength) ? edgeLength : [edgeLength, edgeLength];
      // Larger value has smaller length
      edgeLengthArr_1 = [edgeLengthArr_1[1], edgeLengthArr_1[0]];
      var nodes_1 = nodeData_1.mapArray('value', function (value, idx) {
        var point = nodeData_1.getItemLayout(idx);
        var rep = (0,number.linearMap)(value, nodeDataExtent_1, repulsionArr_1);
        if (isNaN(rep)) {
          rep = (repulsionArr_1[0] + repulsionArr_1[1]) / 2;
        }
        return {
          w: rep,
          rep: rep,
          fixed: nodeData_1.getItemModel(idx).get('fixed'),
          p: !point || isNaN(point[0]) || isNaN(point[1]) ? null : point
        };
      });
      var edges = edgeData.mapArray('value', function (value, idx) {
        var edge = graph_1.getEdgeByIndex(idx);
        var d = (0,number.linearMap)(value, edgeDataExtent_1, edgeLengthArr_1);
        if (isNaN(d)) {
          d = (edgeLengthArr_1[0] + edgeLengthArr_1[1]) / 2;
        }
        var edgeModel = edge.getModel();
        var curveness = util.retrieve3(edge.getModel().get(['lineStyle', 'curveness']), -getCurvenessForEdge(edge, graphSeries, idx, true), 0);
        return {
          n1: nodes_1[edge.node1.dataIndex],
          n2: nodes_1[edge.node2.dataIndex],
          d: d,
          curveness: curveness,
          ignoreForceLayout: edgeModel.get('ignoreForceLayout')
        };
      });
      // let coordSys = graphSeries.coordinateSystem;
      var rect = coordSys.getBoundingRect();
      var forceInstance = forceHelper_forceLayout(nodes_1, edges, {
        rect: rect,
        gravity: forceModel.get('gravity'),
        friction: forceModel.get('friction')
      });
      forceInstance.beforeStep(function (nodes, edges) {
        for (var i = 0, l = nodes.length; i < l; i++) {
          if (nodes[i].fixed) {
            // Write back to layout instance
            vector.copy(nodes[i].p, graph_1.getNodeByIndex(i).getLayout());
          }
        }
      });
      forceInstance.afterStep(function (nodes, edges, stopped) {
        for (var i = 0, l = nodes.length; i < l; i++) {
          if (!nodes[i].fixed) {
            graph_1.getNodeByIndex(i).setLayout(nodes[i].p);
          }
          preservedPoints_1[nodeData_1.getId(i)] = nodes[i].p;
        }
        for (var i = 0, l = edges.length; i < l; i++) {
          var e = edges[i];
          var edge = graph_1.getEdgeByIndex(i);
          var p1 = e.n1.p;
          var p2 = e.n2.p;
          var points = edge.getLayout();
          points = points ? points.slice() : [];
          points[0] = points[0] || [];
          points[1] = points[1] || [];
          vector.copy(points[0], p1);
          vector.copy(points[1], p2);
          if (+e.curveness) {
            points[2] = [(p1[0] + p2[0]) / 2 - (p1[1] - p2[1]) * e.curveness, (p1[1] + p2[1]) / 2 - (p2[0] - p1[0]) * e.curveness];
          }
          edge.setLayout(points);
        }
      });
      graphSeries.forceLayout = forceInstance;
      graphSeries.preservedPoints = preservedPoints_1;
      // Step to get the layout
      forceInstance.step();
    } else {
      // Remove prev injected forceLayout instance
      graphSeries.forceLayout = null;
    }
  });
}
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/View.js
var View = __webpack_require__(65743);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/layout.js
var util_layout = __webpack_require__(37624);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/bbox.js
var bbox = __webpack_require__(71274);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/graph/createView.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
// FIXME Where to create the simple view coordinate system




function getViewRect(seriesModel, api, aspect) {
  var option = (0,util.extend)(seriesModel.getBoxLayoutParams(), {
    aspect: aspect
  });
  return (0,util_layout.getLayoutRect)(option, {
    width: api.getWidth(),
    height: api.getHeight()
  });
}
function createViewCoordSys(ecModel, api) {
  var viewList = [];
  ecModel.eachSeriesByType('graph', function (seriesModel) {
    var coordSysType = seriesModel.get('coordinateSystem');
    if (!coordSysType || coordSysType === 'view') {
      var data_1 = seriesModel.getData();
      var positions = data_1.mapArray(function (idx) {
        var itemModel = data_1.getItemModel(idx);
        return [+itemModel.get('x'), +itemModel.get('y')];
      });
      var min = [];
      var max = [];
      bbox.fromPoints(positions, min, max);
      // If width or height is 0
      if (max[0] - min[0] === 0) {
        max[0] += 1;
        min[0] -= 1;
      }
      if (max[1] - min[1] === 0) {
        max[1] += 1;
        min[1] -= 1;
      }
      var aspect = (max[0] - min[0]) / (max[1] - min[1]);
      // FIXME If get view rect after data processed?
      var viewRect = getViewRect(seriesModel, api, aspect);
      // Position may be NaN, use view rect instead
      if (isNaN(aspect)) {
        min = [viewRect.x, viewRect.y];
        max = [viewRect.x + viewRect.width, viewRect.y + viewRect.height];
      }
      var bbWidth = max[0] - min[0];
      var bbHeight = max[1] - min[1];
      var viewWidth = viewRect.width;
      var viewHeight = viewRect.height;
      var viewCoordSys = seriesModel.coordinateSystem = new View["default"]();
      viewCoordSys.zoomLimit = seriesModel.get('scaleLimit');
      viewCoordSys.setBoundingRect(min[0], min[1], bbWidth, bbHeight);
      viewCoordSys.setViewRect(viewRect.x, viewRect.y, viewWidth, viewHeight);
      // Update roam info
      viewCoordSys.setCenter(seriesModel.get('center'), api);
      viewCoordSys.setZoom(seriesModel.get('zoom'));
      viewList.push(viewCoordSys);
    }
  });
  return viewList;
}
// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(12012);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/SymbolDraw.js
var SymbolDraw = __webpack_require__(41930);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/LineDraw.js
var LineDraw = __webpack_require__(37779);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/helper/RoamController.js
var RoamController = __webpack_require__(82342);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/helper/roamHelper.js
var roamHelper = __webpack_require__(72172);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/helper/cursorHelper.js
var cursorHelper = __webpack_require__(39419);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/animation/basicTransition.js
var basicTransition = __webpack_require__(17524);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/curve.js
var curve = __webpack_require__(97566);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/graph/adjustEdge.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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



var v1 = [];
var v2 = [];
var v3 = [];
var quadraticAt = curve.quadraticAt;
var v2DistSquare = vector.distSquare;
var mathAbs = Math.abs;
function intersectCurveCircle(curvePoints, center, radius) {
  var p0 = curvePoints[0];
  var p1 = curvePoints[1];
  var p2 = curvePoints[2];
  var d = Infinity;
  var t;
  var radiusSquare = radius * radius;
  var interval = 0.1;
  for (var _t = 0.1; _t <= 0.9; _t += 0.1) {
    v1[0] = quadraticAt(p0[0], p1[0], p2[0], _t);
    v1[1] = quadraticAt(p0[1], p1[1], p2[1], _t);
    var diff = mathAbs(v2DistSquare(v1, center) - radiusSquare);
    if (diff < d) {
      d = diff;
      t = _t;
    }
  }
  // Assume the segment is monotone，Find root through Bisection method
  // At most 32 iteration
  for (var i = 0; i < 32; i++) {
    // let prev = t - interval;
    var next = t + interval;
    // v1[0] = quadraticAt(p0[0], p1[0], p2[0], prev);
    // v1[1] = quadraticAt(p0[1], p1[1], p2[1], prev);
    v2[0] = quadraticAt(p0[0], p1[0], p2[0], t);
    v2[1] = quadraticAt(p0[1], p1[1], p2[1], t);
    v3[0] = quadraticAt(p0[0], p1[0], p2[0], next);
    v3[1] = quadraticAt(p0[1], p1[1], p2[1], next);
    var diff = v2DistSquare(v2, center) - radiusSquare;
    if (mathAbs(diff) < 1e-2) {
      break;
    }
    // let prevDiff = v2DistSquare(v1, center) - radiusSquare;
    var nextDiff = v2DistSquare(v3, center) - radiusSquare;
    interval /= 2;
    if (diff < 0) {
      if (nextDiff >= 0) {
        t = t + interval;
      } else {
        t = t - interval;
      }
    } else {
      if (nextDiff >= 0) {
        t = t - interval;
      } else {
        t = t + interval;
      }
    }
  }
  return t;
}
// Adjust edge to avoid
function adjustEdge(graph, scale) {
  var tmp0 = [];
  var quadraticSubdivide = curve.quadraticSubdivide;
  var pts = [[], [], []];
  var pts2 = [[], []];
  var v = [];
  scale /= 2;
  graph.eachEdge(function (edge, idx) {
    var linePoints = edge.getLayout();
    var fromSymbol = edge.getVisual('fromSymbol');
    var toSymbol = edge.getVisual('toSymbol');
    if (!linePoints.__original) {
      linePoints.__original = [vector.clone(linePoints[0]), vector.clone(linePoints[1])];
      if (linePoints[2]) {
        linePoints.__original.push(vector.clone(linePoints[2]));
      }
    }
    var originalPoints = linePoints.__original;
    // Quadratic curve
    if (linePoints[2] != null) {
      vector.copy(pts[0], originalPoints[0]);
      vector.copy(pts[1], originalPoints[2]);
      vector.copy(pts[2], originalPoints[1]);
      if (fromSymbol && fromSymbol !== 'none') {
        var symbolSize = getSymbolSize(edge.node1);
        var t = intersectCurveCircle(pts, originalPoints[0], symbolSize * scale);
        // Subdivide and get the second
        quadraticSubdivide(pts[0][0], pts[1][0], pts[2][0], t, tmp0);
        pts[0][0] = tmp0[3];
        pts[1][0] = tmp0[4];
        quadraticSubdivide(pts[0][1], pts[1][1], pts[2][1], t, tmp0);
        pts[0][1] = tmp0[3];
        pts[1][1] = tmp0[4];
      }
      if (toSymbol && toSymbol !== 'none') {
        var symbolSize = getSymbolSize(edge.node2);
        var t = intersectCurveCircle(pts, originalPoints[1], symbolSize * scale);
        // Subdivide and get the first
        quadraticSubdivide(pts[0][0], pts[1][0], pts[2][0], t, tmp0);
        pts[1][0] = tmp0[1];
        pts[2][0] = tmp0[2];
        quadraticSubdivide(pts[0][1], pts[1][1], pts[2][1], t, tmp0);
        pts[1][1] = tmp0[1];
        pts[2][1] = tmp0[2];
      }
      // Copy back to layout
      vector.copy(linePoints[0], pts[0]);
      vector.copy(linePoints[1], pts[2]);
      vector.copy(linePoints[2], pts[1]);
    }
    // Line
    else {
      vector.copy(pts2[0], originalPoints[0]);
      vector.copy(pts2[1], originalPoints[1]);
      vector.sub(v, pts2[1], pts2[0]);
      vector.normalize(v, v);
      if (fromSymbol && fromSymbol !== 'none') {
        var symbolSize = getSymbolSize(edge.node1);
        vector.scaleAndAdd(pts2[0], pts2[0], v, symbolSize * scale);
      }
      if (toSymbol && toSymbol !== 'none') {
        var symbolSize = getSymbolSize(edge.node2);
        vector.scaleAndAdd(pts2[1], pts2[1], v, -symbolSize * scale);
      }
      vector.copy(linePoints[0], pts2[0]);
      vector.copy(linePoints[1], pts2[1]);
    }
  });
}
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/view/Chart.js
var Chart = __webpack_require__(47389);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/innerStore.js
var innerStore = __webpack_require__(55413);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/graph/GraphView.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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













function isViewCoordSys(coordSys) {
  return coordSys.type === 'view';
}
var GraphView_GraphView = /** @class */function (_super) {
  (0,tslib_es6.__extends)(GraphView, _super);
  function GraphView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = GraphView.type;
    return _this;
  }
  GraphView.prototype.init = function (ecModel, api) {
    var symbolDraw = new SymbolDraw["default"]();
    var lineDraw = new LineDraw["default"]();
    var group = this.group;
    this._controller = new RoamController["default"](api.getZr());
    this._controllerHost = {
      target: group
    };
    group.add(symbolDraw.group);
    group.add(lineDraw.group);
    this._symbolDraw = symbolDraw;
    this._lineDraw = lineDraw;
    this._firstRender = true;
  };
  GraphView.prototype.render = function (seriesModel, ecModel, api) {
    var _this = this;
    var coordSys = seriesModel.coordinateSystem;
    this._model = seriesModel;
    var symbolDraw = this._symbolDraw;
    var lineDraw = this._lineDraw;
    var group = this.group;
    if (isViewCoordSys(coordSys)) {
      var groupNewProp = {
        x: coordSys.x,
        y: coordSys.y,
        scaleX: coordSys.scaleX,
        scaleY: coordSys.scaleY
      };
      if (this._firstRender) {
        group.attr(groupNewProp);
      } else {
        basicTransition.updateProps(group, groupNewProp, seriesModel);
      }
    }
    // Fix edge contact point with node
    adjustEdge(seriesModel.getGraph(), getNodeGlobalScale(seriesModel));
    var data = seriesModel.getData();
    symbolDraw.updateData(data);
    var edgeData = seriesModel.getEdgeData();
    // TODO: TYPE
    lineDraw.updateData(edgeData);
    this._updateNodeAndLinkScale();
    this._updateController(seriesModel, ecModel, api);
    clearTimeout(this._layoutTimeout);
    var forceLayout = seriesModel.forceLayout;
    var layoutAnimation = seriesModel.get(['force', 'layoutAnimation']);
    if (forceLayout) {
      this._startForceLayoutIteration(forceLayout, layoutAnimation);
    }
    var layout = seriesModel.get('layout');
    data.graph.eachNode(function (node) {
      var idx = node.dataIndex;
      var el = node.getGraphicEl();
      var itemModel = node.getModel();
      if (!el) {
        return;
      }
      // Update draggable
      el.off('drag').off('dragend');
      var draggable = itemModel.get('draggable');
      if (draggable) {
        el.on('drag', function (e) {
          switch (layout) {
            case 'force':
              forceLayout.warmUp();
              !_this._layouting && _this._startForceLayoutIteration(forceLayout, layoutAnimation);
              forceLayout.setFixed(idx);
              // Write position back to layout
              data.setItemLayout(idx, [el.x, el.y]);
              break;
            case 'circular':
              data.setItemLayout(idx, [el.x, el.y]);
              // mark node fixed
              node.setLayout({
                fixed: true
              }, true);
              // recalculate circular layout
              circularLayout(seriesModel, 'symbolSize', node, [e.offsetX, e.offsetY]);
              _this.updateLayout(seriesModel);
              break;
            case 'none':
            default:
              data.setItemLayout(idx, [el.x, el.y]);
              // update edge
              simpleLayoutEdge(seriesModel.getGraph(), seriesModel);
              _this.updateLayout(seriesModel);
              break;
          }
        }).on('dragend', function () {
          if (forceLayout) {
            forceLayout.setUnfixed(idx);
          }
        });
      }
      el.setDraggable(draggable, !!itemModel.get('cursor'));
      var focus = itemModel.get(['emphasis', 'focus']);
      if (focus === 'adjacency') {
        (0,innerStore.getECData)(el).focus = node.getAdjacentDataIndices();
      }
    });
    data.graph.eachEdge(function (edge) {
      var el = edge.getGraphicEl();
      var focus = edge.getModel().get(['emphasis', 'focus']);
      if (!el) {
        return;
      }
      if (focus === 'adjacency') {
        (0,innerStore.getECData)(el).focus = {
          edge: [edge.dataIndex],
          node: [edge.node1.dataIndex, edge.node2.dataIndex]
        };
      }
    });
    var circularRotateLabel = seriesModel.get('layout') === 'circular' && seriesModel.get(['circular', 'rotateLabel']);
    var cx = data.getLayout('cx');
    var cy = data.getLayout('cy');
    data.graph.eachNode(function (node) {
      rotateNodeLabel(node, circularRotateLabel, cx, cy);
    });
    this._firstRender = false;
  };
  GraphView.prototype.dispose = function () {
    this.remove();
    this._controller && this._controller.dispose();
    this._controllerHost = null;
  };
  GraphView.prototype._startForceLayoutIteration = function (forceLayout, layoutAnimation) {
    var self = this;
    (function step() {
      forceLayout.step(function (stopped) {
        self.updateLayout(self._model);
        (self._layouting = !stopped) && (layoutAnimation ? self._layoutTimeout = setTimeout(step, 16) : step());
      });
    })();
  };
  GraphView.prototype._updateController = function (seriesModel, ecModel, api) {
    var _this = this;
    var controller = this._controller;
    var controllerHost = this._controllerHost;
    var group = this.group;
    controller.setPointerChecker(function (e, x, y) {
      var rect = group.getBoundingRect();
      rect.applyTransform(group.transform);
      return rect.contain(x, y) && !(0,cursorHelper.onIrrelevantElement)(e, api, seriesModel);
    });
    if (!isViewCoordSys(seriesModel.coordinateSystem)) {
      controller.disable();
      return;
    }
    controller.enable(seriesModel.get('roam'));
    controllerHost.zoomLimit = seriesModel.get('scaleLimit');
    controllerHost.zoom = seriesModel.coordinateSystem.getZoom();
    controller.off('pan').off('zoom').on('pan', function (e) {
      roamHelper.updateViewOnPan(controllerHost, e.dx, e.dy);
      api.dispatchAction({
        seriesId: seriesModel.id,
        type: 'graphRoam',
        dx: e.dx,
        dy: e.dy
      });
    }).on('zoom', function (e) {
      roamHelper.updateViewOnZoom(controllerHost, e.scale, e.originX, e.originY);
      api.dispatchAction({
        seriesId: seriesModel.id,
        type: 'graphRoam',
        zoom: e.scale,
        originX: e.originX,
        originY: e.originY
      });
      _this._updateNodeAndLinkScale();
      adjustEdge(seriesModel.getGraph(), getNodeGlobalScale(seriesModel));
      _this._lineDraw.updateLayout();
      // Only update label layout on zoom
      api.updateLabelLayout();
    });
  };
  GraphView.prototype._updateNodeAndLinkScale = function () {
    var seriesModel = this._model;
    var data = seriesModel.getData();
    var nodeScale = getNodeGlobalScale(seriesModel);
    data.eachItemGraphicEl(function (el, idx) {
      el && el.setSymbolScale(nodeScale);
    });
  };
  GraphView.prototype.updateLayout = function (seriesModel) {
    adjustEdge(seriesModel.getGraph(), getNodeGlobalScale(seriesModel));
    this._symbolDraw.updateLayout();
    this._lineDraw.updateLayout();
  };
  GraphView.prototype.remove = function () {
    clearTimeout(this._layoutTimeout);
    this._layouting = false;
    this._layoutTimeout = null;
    this._symbolDraw && this._symbolDraw.remove();
    this._lineDraw && this._lineDraw.remove();
  };
  GraphView.type = 'graph';
  return GraphView;
}(Chart["default"]);
/* ESM default export */ var graph_GraphView = (GraphView_GraphView);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/data/SeriesData.js
var SeriesData = __webpack_require__(38788);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/model.js
var util_model = __webpack_require__(46451);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Model.js + 2 modules
var Model = __webpack_require__(84456);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/createGraphFromNodeEdge.js
var createGraphFromNodeEdge = __webpack_require__(23530);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/visual/LegendVisualProvider.js
var LegendVisualProvider = __webpack_require__(57275);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Series.js
var Series = __webpack_require__(48134);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/tooltip/tooltipMarkup.js
var tooltipMarkup = __webpack_require__(13134);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/tooltip/seriesFormatTooltip.js
var seriesFormatTooltip = __webpack_require__(27636);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/graph/GraphSeries.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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











var GraphSeries_GraphSeriesModel = /** @class */function (_super) {
  (0,tslib_es6.__extends)(GraphSeriesModel, _super);
  function GraphSeriesModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = GraphSeriesModel.type;
    _this.hasSymbolVisual = true;
    return _this;
  }
  GraphSeriesModel.prototype.init = function (option) {
    _super.prototype.init.apply(this, arguments);
    var self = this;
    function getCategoriesData() {
      return self._categoriesData;
    }
    // Provide data for legend select
    this.legendVisualProvider = new LegendVisualProvider["default"](getCategoriesData, getCategoriesData);
    this.fillDataTextStyle(option.edges || option.links);
    this._updateCategoriesData();
  };
  GraphSeriesModel.prototype.mergeOption = function (option) {
    _super.prototype.mergeOption.apply(this, arguments);
    this.fillDataTextStyle(option.edges || option.links);
    this._updateCategoriesData();
  };
  GraphSeriesModel.prototype.mergeDefaultAndTheme = function (option) {
    _super.prototype.mergeDefaultAndTheme.apply(this, arguments);
    (0,util_model.defaultEmphasis)(option, 'edgeLabel', ['show']);
  };
  GraphSeriesModel.prototype.getInitialData = function (option, ecModel) {
    var edges = option.edges || option.links || [];
    var nodes = option.data || option.nodes || [];
    var self = this;
    if (nodes && edges) {
      // auto curveness
      initCurvenessList(this);
      var graph = (0,createGraphFromNodeEdge["default"])(nodes, edges, this, true, beforeLink);
      util.each(graph.edges, function (edge) {
        createEdgeMapForCurveness(edge.node1, edge.node2, this, edge.dataIndex);
      }, this);
      return graph.data;
    }
    function beforeLink(nodeData, edgeData) {
      // Overwrite nodeData.getItemModel to
      nodeData.wrapMethod('getItemModel', function (model) {
        var categoriesModels = self._categoriesModels;
        var categoryIdx = model.getShallow('category');
        var categoryModel = categoriesModels[categoryIdx];
        if (categoryModel) {
          categoryModel.parentModel = model.parentModel;
          model.parentModel = categoryModel;
        }
        return model;
      });
      // TODO Inherit resolveParentPath by default in Model#getModel?
      var oldGetModel = Model["default"].prototype.getModel;
      function newGetModel(path, parentModel) {
        var model = oldGetModel.call(this, path, parentModel);
        model.resolveParentPath = resolveParentPath;
        return model;
      }
      edgeData.wrapMethod('getItemModel', function (model) {
        model.resolveParentPath = resolveParentPath;
        model.getModel = newGetModel;
        return model;
      });
      function resolveParentPath(pathArr) {
        if (pathArr && (pathArr[0] === 'label' || pathArr[1] === 'label')) {
          var newPathArr = pathArr.slice();
          if (pathArr[0] === 'label') {
            newPathArr[0] = 'edgeLabel';
          } else if (pathArr[1] === 'label') {
            newPathArr[1] = 'edgeLabel';
          }
          return newPathArr;
        }
        return pathArr;
      }
    }
  };
  GraphSeriesModel.prototype.getGraph = function () {
    return this.getData().graph;
  };
  GraphSeriesModel.prototype.getEdgeData = function () {
    return this.getGraph().edgeData;
  };
  GraphSeriesModel.prototype.getCategoriesData = function () {
    return this._categoriesData;
  };
  GraphSeriesModel.prototype.formatTooltip = function (dataIndex, multipleSeries, dataType) {
    if (dataType === 'edge') {
      var nodeData = this.getData();
      var params = this.getDataParams(dataIndex, dataType);
      var edge = nodeData.graph.getEdgeByIndex(dataIndex);
      var sourceName = nodeData.getName(edge.node1.dataIndex);
      var targetName = nodeData.getName(edge.node2.dataIndex);
      var nameArr = [];
      sourceName != null && nameArr.push(sourceName);
      targetName != null && nameArr.push(targetName);
      return (0,tooltipMarkup.createTooltipMarkup)('nameValue', {
        name: nameArr.join(' > '),
        value: params.value,
        noValue: params.value == null
      });
    }
    // dataType === 'node' or empty
    var nodeMarkup = (0,seriesFormatTooltip.defaultSeriesFormatTooltip)({
      series: this,
      dataIndex: dataIndex,
      multipleSeries: multipleSeries
    });
    return nodeMarkup;
  };
  GraphSeriesModel.prototype._updateCategoriesData = function () {
    var categories = util.map(this.option.categories || [], function (category) {
      // Data must has value
      return category.value != null ? category : util.extend({
        value: 0
      }, category);
    });
    var categoriesData = new SeriesData["default"](['value'], this);
    categoriesData.initData(categories);
    this._categoriesData = categoriesData;
    this._categoriesModels = categoriesData.mapArray(function (idx) {
      return categoriesData.getItemModel(idx);
    });
  };
  GraphSeriesModel.prototype.setZoom = function (zoom) {
    this.option.zoom = zoom;
  };
  GraphSeriesModel.prototype.setCenter = function (center) {
    this.option.center = center;
  };
  GraphSeriesModel.prototype.isAnimationEnabled = function () {
    return _super.prototype.isAnimationEnabled.call(this)
    // Not enable animation when do force layout
    && !(this.get('layout') === 'force' && this.get(['force', 'layoutAnimation']));
  };
  GraphSeriesModel.type = 'series.graph';
  GraphSeriesModel.dependencies = ['grid', 'polar', 'geo', 'singleAxis', 'calendar'];
  GraphSeriesModel.defaultOption = {
    // zlevel: 0,
    z: 2,
    coordinateSystem: 'view',
    // Default option for all coordinate systems
    // xAxisIndex: 0,
    // yAxisIndex: 0,
    // polarIndex: 0,
    // geoIndex: 0,
    legendHoverLink: true,
    layout: null,
    // Configuration of circular layout
    circular: {
      rotateLabel: false
    },
    // Configuration of force directed layout
    force: {
      initLayout: null,
      // Node repulsion. Can be an array to represent range.
      repulsion: [0, 50],
      gravity: 0.1,
      // Initial friction
      friction: 0.6,
      // Edge length. Can be an array to represent range.
      edgeLength: 30,
      layoutAnimation: true
    },
    left: 'center',
    top: 'center',
    // right: null,
    // bottom: null,
    // width: '80%',
    // height: '80%',
    symbol: 'circle',
    symbolSize: 10,
    edgeSymbol: ['none', 'none'],
    edgeSymbolSize: 10,
    edgeLabel: {
      position: 'middle',
      distance: 5
    },
    draggable: false,
    roam: false,
    // Default on center of graph
    center: null,
    zoom: 1,
    // Symbol size scale ratio in roam
    nodeScaleRatio: 0.6,
    // cursor: null,
    // categories: [],
    // data: []
    // Or
    // nodes: []
    //
    // links: []
    // Or
    // edges: []
    label: {
      show: false,
      formatter: '{b}'
    },
    itemStyle: {},
    lineStyle: {
      color: '#aaa',
      width: 1,
      opacity: 0.5
    },
    emphasis: {
      scale: true,
      label: {
        show: true
      }
    },
    select: {
      itemStyle: {
        borderColor: '#212121'
      }
    }
  };
  return GraphSeriesModel;
}(Series["default"]);
/* ESM default export */ var GraphSeries = (GraphSeries_GraphSeriesModel);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/action/roamHelper.js
var action_roamHelper = __webpack_require__(22609);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/graph/install.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  type: 'graphRoam',
  event: 'graphRoam',
  update: 'none'
};
function install(registers) {
  registers.registerChartView(graph_GraphView);
  registers.registerSeriesModel(GraphSeries);
  registers.registerProcessor(categoryFilter);
  registers.registerVisual(categoryVisual);
  registers.registerVisual(graphEdgeVisual);
  registers.registerLayout(graphSimpleLayout);
  registers.registerLayout(registers.PRIORITY.VISUAL.POST_CHART_LAYOUT, graphCircularLayout);
  registers.registerLayout(graphForceLayout);
  registers.registerCoordinateSystem('graphView', {
    dimensions: View["default"].dimensions,
    create: createViewCoordSys
  });
  // Register legacy focus actions
  registers.registerAction({
    type: 'focusNodeAdjacency',
    event: 'focusNodeAdjacency',
    update: 'series:focusNodeAdjacency'
  }, util.noop);
  registers.registerAction({
    type: 'unfocusNodeAdjacency',
    event: 'unfocusNodeAdjacency',
    update: 'series:unfocusNodeAdjacency'
  }, util.noop);
  // Register roam action.
  registers.registerAction(actionInfo, function (payload, ecModel, api) {
    ecModel.eachComponent({
      mainType: 'series',
      query: payload
    }, function (seriesModel) {
      var coordSys = seriesModel.coordinateSystem;
      var res = (0,action_roamHelper.updateCenterAndZoom)(coordSys, payload, undefined, api);
      seriesModel.setCenter && seriesModel.setCenter(res.center);
      seriesModel.setZoom && seriesModel.setZoom(res.zoom);
    });
  });
}

}),
62567: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  install: function() { return /* binding */ install; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(12012);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/graphic.js
var graphic = __webpack_require__(16636);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/Rect.js + 1 modules
var Rect = __webpack_require__(40361);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Image.js
var Image = __webpack_require__(31386);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/states.js
var states = __webpack_require__(63344);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/platform.js
var platform = __webpack_require__(82379);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/heatmap/HeatmapLayer.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
/* global Uint8ClampedArray */

var GRADIENT_LEVELS = 256;
var HeatmapLayer_HeatmapLayer = /** @class */function () {
  function HeatmapLayer() {
    this.blurSize = 30;
    this.pointSize = 20;
    this.maxOpacity = 1;
    this.minOpacity = 0;
    this._gradientPixels = {
      inRange: null,
      outOfRange: null
    };
    var canvas = platform.platformApi.createCanvas();
    this.canvas = canvas;
  }
  /**
   * Renders Heatmap and returns the rendered canvas
   * @param data array of data, each has x, y, value
   * @param width canvas width
   * @param height canvas height
   */
  HeatmapLayer.prototype.update = function (data, width, height, normalize, colorFunc, isInRange) {
    var brush = this._getBrush();
    var gradientInRange = this._getGradient(colorFunc, 'inRange');
    var gradientOutOfRange = this._getGradient(colorFunc, 'outOfRange');
    var r = this.pointSize + this.blurSize;
    var canvas = this.canvas;
    var ctx = canvas.getContext('2d');
    var len = data.length;
    canvas.width = width;
    canvas.height = height;
    for (var i = 0; i < len; ++i) {
      var p = data[i];
      var x = p[0];
      var y = p[1];
      var value = p[2];
      // calculate alpha using value
      var alpha = normalize(value);
      // draw with the circle brush with alpha
      ctx.globalAlpha = alpha;
      ctx.drawImage(brush, x - r, y - r);
    }
    if (!canvas.width || !canvas.height) {
      // Avoid "Uncaught DOMException: Failed to execute 'getImageData' on
      // 'CanvasRenderingContext2D': The source height is 0."
      return canvas;
    }
    // colorize the canvas using alpha value and set with gradient
    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var pixels = imageData.data;
    var offset = 0;
    var pixelLen = pixels.length;
    var minOpacity = this.minOpacity;
    var maxOpacity = this.maxOpacity;
    var diffOpacity = maxOpacity - minOpacity;
    while (offset < pixelLen) {
      var alpha = pixels[offset + 3] / 256;
      var gradientOffset = Math.floor(alpha * (GRADIENT_LEVELS - 1)) * 4;
      // Simple optimize to ignore the empty data
      if (alpha > 0) {
        var gradient = isInRange(alpha) ? gradientInRange : gradientOutOfRange;
        // Any alpha > 0 will be mapped to [minOpacity, maxOpacity]
        alpha > 0 && (alpha = alpha * diffOpacity + minOpacity);
        pixels[offset++] = gradient[gradientOffset];
        pixels[offset++] = gradient[gradientOffset + 1];
        pixels[offset++] = gradient[gradientOffset + 2];
        pixels[offset++] = gradient[gradientOffset + 3] * alpha * 256;
      } else {
        offset += 4;
      }
    }
    ctx.putImageData(imageData, 0, 0);
    return canvas;
  };
  /**
   * get canvas of a black circle brush used for canvas to draw later
   */
  HeatmapLayer.prototype._getBrush = function () {
    var brushCanvas = this._brushCanvas || (this._brushCanvas = platform.platformApi.createCanvas());
    // set brush size
    var r = this.pointSize + this.blurSize;
    var d = r * 2;
    brushCanvas.width = d;
    brushCanvas.height = d;
    var ctx = brushCanvas.getContext('2d');
    ctx.clearRect(0, 0, d, d);
    // in order to render shadow without the distinct circle,
    // draw the distinct circle in an invisible place,
    // and use shadowOffset to draw shadow in the center of the canvas
    ctx.shadowOffsetX = d;
    ctx.shadowBlur = this.blurSize;
    // draw the shadow in black, and use alpha and shadow blur to generate
    // color in color map
    ctx.shadowColor = '#000';
    // draw circle in the left to the canvas
    ctx.beginPath();
    ctx.arc(-r, r, this.pointSize, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
    return brushCanvas;
  };
  /**
   * get gradient color map
   * @private
   */
  HeatmapLayer.prototype._getGradient = function (colorFunc, state) {
    var gradientPixels = this._gradientPixels;
    var pixelsSingleState = gradientPixels[state] || (gradientPixels[state] = new Uint8ClampedArray(256 * 4));
    var color = [0, 0, 0, 0];
    var off = 0;
    for (var i = 0; i < 256; i++) {
      colorFunc[state](i / 255, true, color);
      pixelsSingleState[off++] = color[0];
      pixelsSingleState[off++] = color[1];
      pixelsSingleState[off++] = color[2];
      pixelsSingleState[off++] = color[3];
    }
    return pixelsSingleState;
  };
  return HeatmapLayer;
}();
/* ESM default export */ var heatmap_HeatmapLayer = (HeatmapLayer_HeatmapLayer);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(96585);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/view/Chart.js
var Chart = __webpack_require__(47389);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/CoordinateSystem.js
var CoordinateSystem = __webpack_require__(63248);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/label/labelStyle.js
var labelStyle = __webpack_require__(77704);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/heatmap/HeatmapView.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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








function getIsInPiecewiseRange(dataExtent, pieceList, selected) {
  var dataSpan = dataExtent[1] - dataExtent[0];
  pieceList = util.map(pieceList, function (piece) {
    return {
      interval: [(piece.interval[0] - dataExtent[0]) / dataSpan, (piece.interval[1] - dataExtent[0]) / dataSpan]
    };
  });
  var len = pieceList.length;
  var lastIndex = 0;
  return function (val) {
    var i;
    // Try to find in the location of the last found
    for (i = lastIndex; i < len; i++) {
      var interval = pieceList[i].interval;
      if (interval[0] <= val && val <= interval[1]) {
        lastIndex = i;
        break;
      }
    }
    if (i === len) {
      // Not found, back interation
      for (i = lastIndex - 1; i >= 0; i--) {
        var interval = pieceList[i].interval;
        if (interval[0] <= val && val <= interval[1]) {
          lastIndex = i;
          break;
        }
      }
    }
    return i >= 0 && i < len && selected[i];
  };
}
function getIsInContinuousRange(dataExtent, range) {
  var dataSpan = dataExtent[1] - dataExtent[0];
  range = [(range[0] - dataExtent[0]) / dataSpan, (range[1] - dataExtent[0]) / dataSpan];
  return function (val) {
    return val >= range[0] && val <= range[1];
  };
}
function isGeoCoordSys(coordSys) {
  var dimensions = coordSys.dimensions;
  // Not use coordSys.type === 'geo' because coordSys maybe extended
  return dimensions[0] === 'lng' && dimensions[1] === 'lat';
}
var HeatmapView_HeatmapView = /** @class */function (_super) {
  (0,tslib_es6.__extends)(HeatmapView, _super);
  function HeatmapView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = HeatmapView.type;
    return _this;
  }
  HeatmapView.prototype.render = function (seriesModel, ecModel, api) {
    var visualMapOfThisSeries;
    ecModel.eachComponent('visualMap', function (visualMap) {
      visualMap.eachTargetSeries(function (targetSeries) {
        if (targetSeries === seriesModel) {
          visualMapOfThisSeries = visualMap;
        }
      });
    });
    if (false) {}
    // Clear previously rendered progressive elements.
    this._progressiveEls = null;
    this.group.removeAll();
    var coordSys = seriesModel.coordinateSystem;
    if (coordSys.type === 'cartesian2d' || coordSys.type === 'calendar') {
      this._renderOnCartesianAndCalendar(seriesModel, api, 0, seriesModel.getData().count());
    } else if (isGeoCoordSys(coordSys)) {
      this._renderOnGeo(coordSys, seriesModel, visualMapOfThisSeries, api);
    }
  };
  HeatmapView.prototype.incrementalPrepareRender = function (seriesModel, ecModel, api) {
    this.group.removeAll();
  };
  HeatmapView.prototype.incrementalRender = function (params, seriesModel, ecModel, api) {
    var coordSys = seriesModel.coordinateSystem;
    if (coordSys) {
      // geo does not support incremental rendering?
      if (isGeoCoordSys(coordSys)) {
        this.render(seriesModel, ecModel, api);
      } else {
        this._progressiveEls = [];
        this._renderOnCartesianAndCalendar(seriesModel, api, params.start, params.end, true);
      }
    }
  };
  HeatmapView.prototype.eachRendered = function (cb) {
    graphic.traverseElements(this._progressiveEls || this.group, cb);
  };
  HeatmapView.prototype._renderOnCartesianAndCalendar = function (seriesModel, api, start, end, incremental) {
    var coordSys = seriesModel.coordinateSystem;
    var isCartesian2d = (0,CoordinateSystem.isCoordinateSystemType)(coordSys, 'cartesian2d');
    var width;
    var height;
    var xAxisExtent;
    var yAxisExtent;
    if (isCartesian2d) {
      var xAxis = coordSys.getAxis('x');
      var yAxis = coordSys.getAxis('y');
      if (false) {}
      // add 0.5px to avoid the gaps
      width = xAxis.getBandWidth() + .5;
      height = yAxis.getBandWidth() + .5;
      xAxisExtent = xAxis.scale.getExtent();
      yAxisExtent = yAxis.scale.getExtent();
    }
    var group = this.group;
    var data = seriesModel.getData();
    var emphasisStyle = seriesModel.getModel(['emphasis', 'itemStyle']).getItemStyle();
    var blurStyle = seriesModel.getModel(['blur', 'itemStyle']).getItemStyle();
    var selectStyle = seriesModel.getModel(['select', 'itemStyle']).getItemStyle();
    var borderRadius = seriesModel.get(['itemStyle', 'borderRadius']);
    var labelStatesModels = (0,labelStyle.getLabelStatesModels)(seriesModel);
    var emphasisModel = seriesModel.getModel('emphasis');
    var focus = emphasisModel.get('focus');
    var blurScope = emphasisModel.get('blurScope');
    var emphasisDisabled = emphasisModel.get('disabled');
    var dataDims = isCartesian2d ? [data.mapDimension('x'), data.mapDimension('y'), data.mapDimension('value')] : [data.mapDimension('time'), data.mapDimension('value')];
    for (var idx = start; idx < end; idx++) {
      var rect = void 0;
      var style = data.getItemVisual(idx, 'style');
      if (isCartesian2d) {
        var dataDimX = data.get(dataDims[0], idx);
        var dataDimY = data.get(dataDims[1], idx);
        // Ignore empty data and out of extent data
        if (isNaN(data.get(dataDims[2], idx)) || isNaN(dataDimX) || isNaN(dataDimY) || dataDimX < xAxisExtent[0] || dataDimX > xAxisExtent[1] || dataDimY < yAxisExtent[0] || dataDimY > yAxisExtent[1]) {
          continue;
        }
        var point = coordSys.dataToPoint([dataDimX, dataDimY]);
        rect = new Rect["default"]({
          shape: {
            x: point[0] - width / 2,
            y: point[1] - height / 2,
            width: width,
            height: height
          },
          style: style
        });
      } else {
        // Ignore empty data
        if (isNaN(data.get(dataDims[1], idx))) {
          continue;
        }
        rect = new Rect["default"]({
          z2: 1,
          shape: coordSys.dataToRect([data.get(dataDims[0], idx)]).contentShape,
          style: style
        });
      }
      // Optimization for large dataset
      if (data.hasItemOption) {
        var itemModel = data.getItemModel(idx);
        var emphasisModel_1 = itemModel.getModel('emphasis');
        emphasisStyle = emphasisModel_1.getModel('itemStyle').getItemStyle();
        blurStyle = itemModel.getModel(['blur', 'itemStyle']).getItemStyle();
        selectStyle = itemModel.getModel(['select', 'itemStyle']).getItemStyle();
        // Each item value struct in the data would be firstly
        // {
        //     itemStyle: { borderRadius: [30, 30] },
        //     value: [2022, 02, 22]
        // }
        borderRadius = itemModel.get(['itemStyle', 'borderRadius']);
        focus = emphasisModel_1.get('focus');
        blurScope = emphasisModel_1.get('blurScope');
        emphasisDisabled = emphasisModel_1.get('disabled');
        labelStatesModels = (0,labelStyle.getLabelStatesModels)(itemModel);
      }
      rect.shape.r = borderRadius;
      var rawValue = seriesModel.getRawValue(idx);
      var defaultText = '-';
      if (rawValue && rawValue[2] != null) {
        defaultText = rawValue[2] + '';
      }
      (0,labelStyle.setLabelStyle)(rect, labelStatesModels, {
        labelFetcher: seriesModel,
        labelDataIndex: idx,
        defaultOpacity: style.opacity,
        defaultText: defaultText
      });
      rect.ensureState('emphasis').style = emphasisStyle;
      rect.ensureState('blur').style = blurStyle;
      rect.ensureState('select').style = selectStyle;
      (0,states.toggleHoverEmphasis)(rect, focus, blurScope, emphasisDisabled);
      rect.incremental = incremental;
      // PENDING
      if (incremental) {
        // Rect must use hover layer if it's incremental.
        rect.states.emphasis.hoverLayer = true;
      }
      group.add(rect);
      data.setItemGraphicEl(idx, rect);
      if (this._progressiveEls) {
        this._progressiveEls.push(rect);
      }
    }
  };
  HeatmapView.prototype._renderOnGeo = function (geo, seriesModel, visualMapModel, api) {
    var inRangeVisuals = visualMapModel.targetVisuals.inRange;
    var outOfRangeVisuals = visualMapModel.targetVisuals.outOfRange;
    // if (!visualMapping) {
    //     throw new Error('Data range must have color visuals');
    // }
    var data = seriesModel.getData();
    var hmLayer = this._hmLayer || this._hmLayer || new heatmap_HeatmapLayer();
    hmLayer.blurSize = seriesModel.get('blurSize');
    hmLayer.pointSize = seriesModel.get('pointSize');
    hmLayer.minOpacity = seriesModel.get('minOpacity');
    hmLayer.maxOpacity = seriesModel.get('maxOpacity');
    var rect = geo.getViewRect().clone();
    var roamTransform = geo.getRoamTransform();
    rect.applyTransform(roamTransform);
    // Clamp on viewport
    var x = Math.max(rect.x, 0);
    var y = Math.max(rect.y, 0);
    var x2 = Math.min(rect.width + rect.x, api.getWidth());
    var y2 = Math.min(rect.height + rect.y, api.getHeight());
    var width = x2 - x;
    var height = y2 - y;
    var dims = [data.mapDimension('lng'), data.mapDimension('lat'), data.mapDimension('value')];
    var points = data.mapArray(dims, function (lng, lat, value) {
      var pt = geo.dataToPoint([lng, lat]);
      pt[0] -= x;
      pt[1] -= y;
      pt.push(value);
      return pt;
    });
    var dataExtent = visualMapModel.getExtent();
    var isInRange = visualMapModel.type === 'visualMap.continuous' ? getIsInContinuousRange(dataExtent, visualMapModel.option.range) : getIsInPiecewiseRange(dataExtent, visualMapModel.getPieceList(), visualMapModel.option.selected);
    hmLayer.update(points, width, height, inRangeVisuals.color.getNormalizer(), {
      inRange: inRangeVisuals.color.getColorMapper(),
      outOfRange: outOfRangeVisuals.color.getColorMapper()
    }, isInRange);
    var img = new Image["default"]({
      style: {
        width: width,
        height: height,
        x: x,
        y: y,
        image: hmLayer.canvas
      },
      silent: true
    });
    this.group.add(img);
  };
  HeatmapView.type = 'heatmap';
  return HeatmapView;
}(Chart["default"]);
/* ESM default export */ var heatmap_HeatmapView = (HeatmapView_HeatmapView);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Series.js
var Series = __webpack_require__(48134);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/createSeriesData.js
var createSeriesData = __webpack_require__(91956);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/core/CoordinateSystem.js
var core_CoordinateSystem = __webpack_require__(44733);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/heatmap/HeatmapSeries.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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




var HeatmapSeries_HeatmapSeriesModel = /** @class */function (_super) {
  (0,tslib_es6.__extends)(HeatmapSeriesModel, _super);
  function HeatmapSeriesModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = HeatmapSeriesModel.type;
    return _this;
  }
  HeatmapSeriesModel.prototype.getInitialData = function (option, ecModel) {
    return (0,createSeriesData["default"])(null, this, {
      generateCoord: 'value'
    });
  };
  HeatmapSeriesModel.prototype.preventIncremental = function () {
    var coordSysCreator = core_CoordinateSystem["default"].get(this.get('coordinateSystem'));
    if (coordSysCreator && coordSysCreator.dimensions) {
      return coordSysCreator.dimensions[0] === 'lng' && coordSysCreator.dimensions[1] === 'lat';
    }
  };
  HeatmapSeriesModel.type = 'series.heatmap';
  HeatmapSeriesModel.dependencies = ['grid', 'geo', 'calendar'];
  HeatmapSeriesModel.defaultOption = {
    coordinateSystem: 'cartesian2d',
    // zlevel: 0,
    z: 2,
    // Cartesian coordinate system
    // xAxisIndex: 0,
    // yAxisIndex: 0,
    // Geo coordinate system
    geoIndex: 0,
    blurSize: 30,
    pointSize: 20,
    maxOpacity: 1,
    minOpacity: 0,
    select: {
      itemStyle: {
        borderColor: '#212121'
      }
    }
  };
  return HeatmapSeriesModel;
}(Series["default"]);
/* ESM default export */ var HeatmapSeries = (HeatmapSeries_HeatmapSeriesModel);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/heatmap/install.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  registers.registerChartView(heatmap_HeatmapView);
  registers.registerSeriesModel(HeatmapSeries);
}

}),
6268: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58695);
/* ESM import */var _Line_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63224);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96585);
/* ESM import */var _util_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44421);
/* ESM import */var zrender_lib_core_vector_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63261);
/* ESM import */var zrender_lib_core_curve_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97566);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
 * Provide effect for line
 */






var EffectLine = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(EffectLine, _super);
  function EffectLine(lineData, idx, seriesScope) {
    var _this = _super.call(this) || this;
    _this.add(_this.createLine(lineData, idx, seriesScope));
    _this._updateEffectSymbol(lineData, idx);
    return _this;
  }
  EffectLine.prototype.createLine = function (lineData, idx, seriesScope) {
    return new _Line_js__WEBPACK_IMPORTED_MODULE_2__["default"](lineData, idx, seriesScope);
  };
  EffectLine.prototype._updateEffectSymbol = function (lineData, idx) {
    var itemModel = lineData.getItemModel(idx);
    var effectModel = itemModel.getModel('effect');
    var size = effectModel.get('symbolSize');
    var symbolType = effectModel.get('symbol');
    if (!zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.isArray(size)) {
      size = [size, size];
    }
    var lineStyle = lineData.getItemVisual(idx, 'style');
    var color = effectModel.get('color') || lineStyle && lineStyle.stroke;
    var symbol = this.childAt(1);
    if (this._symbolType !== symbolType) {
      // Remove previous
      this.remove(symbol);
      symbol = (0,_util_symbol_js__WEBPACK_IMPORTED_MODULE_4__.createSymbol)(symbolType, -0.5, -0.5, 1, 1, color);
      symbol.z2 = 100;
      symbol.culling = true;
      this.add(symbol);
    }
    // Symbol may be removed if loop is false
    if (!symbol) {
      return;
    }
    // Shadow color is same with color in default
    symbol.setStyle('shadowColor', color);
    symbol.setStyle(effectModel.getItemStyle(['color']));
    symbol.scaleX = size[0];
    symbol.scaleY = size[1];
    symbol.setColor(color);
    this._symbolType = symbolType;
    this._symbolScale = size;
    this._updateEffectAnimation(lineData, effectModel, idx);
  };
  EffectLine.prototype._updateEffectAnimation = function (lineData, effectModel, idx) {
    var symbol = this.childAt(1);
    if (!symbol) {
      return;
    }
    var points = lineData.getItemLayout(idx);
    var period = effectModel.get('period') * 1000;
    var loop = effectModel.get('loop');
    var roundTrip = effectModel.get('roundTrip');
    var constantSpeed = effectModel.get('constantSpeed');
    var delayExpr = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.retrieve(effectModel.get('delay'), function (idx) {
      return idx / lineData.count() * period / 3;
    });
    // Ignore when updating
    symbol.ignore = true;
    this._updateAnimationPoints(symbol, points);
    if (constantSpeed > 0) {
      period = this._getLineLength(symbol) / constantSpeed * 1000;
    }
    if (period !== this._period || loop !== this._loop || roundTrip !== this._roundTrip) {
      symbol.stopAnimation();
      var delayNum = void 0;
      if (zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.isFunction(delayExpr)) {
        delayNum = delayExpr(idx);
      } else {
        delayNum = delayExpr;
      }
      if (symbol.__t > 0) {
        delayNum = -period * symbol.__t;
      }
      this._animateSymbol(symbol, period, delayNum, loop, roundTrip);
    }
    this._period = period;
    this._loop = loop;
    this._roundTrip = roundTrip;
  };
  EffectLine.prototype._animateSymbol = function (symbol, period, delayNum, loop, roundTrip) {
    if (period > 0) {
      symbol.__t = 0;
      var self_1 = this;
      var animator = symbol.animate('', loop).when(roundTrip ? period * 2 : period, {
        __t: roundTrip ? 2 : 1
      }).delay(delayNum).during(function () {
        self_1._updateSymbolPosition(symbol);
      });
      if (!loop) {
        animator.done(function () {
          self_1.remove(symbol);
        });
      }
      animator.start();
    }
  };
  EffectLine.prototype._getLineLength = function (symbol) {
    // Not so accurate
    return zrender_lib_core_vector_js__WEBPACK_IMPORTED_MODULE_5__.dist(symbol.__p1, symbol.__cp1) + zrender_lib_core_vector_js__WEBPACK_IMPORTED_MODULE_5__.dist(symbol.__cp1, symbol.__p2);
  };
  EffectLine.prototype._updateAnimationPoints = function (symbol, points) {
    symbol.__p1 = points[0];
    symbol.__p2 = points[1];
    symbol.__cp1 = points[2] || [(points[0][0] + points[1][0]) / 2, (points[0][1] + points[1][1]) / 2];
  };
  EffectLine.prototype.updateData = function (lineData, idx, seriesScope) {
    this.childAt(0).updateData(lineData, idx, seriesScope);
    this._updateEffectSymbol(lineData, idx);
  };
  EffectLine.prototype._updateSymbolPosition = function (symbol) {
    var p1 = symbol.__p1;
    var p2 = symbol.__p2;
    var cp1 = symbol.__cp1;
    var t = symbol.__t < 1 ? symbol.__t : 2 - symbol.__t;
    var pos = [symbol.x, symbol.y];
    var lastPos = pos.slice();
    var quadraticAt = zrender_lib_core_curve_js__WEBPACK_IMPORTED_MODULE_6__.quadraticAt;
    var quadraticDerivativeAt = zrender_lib_core_curve_js__WEBPACK_IMPORTED_MODULE_6__.quadraticDerivativeAt;
    pos[0] = quadraticAt(p1[0], cp1[0], p2[0], t);
    pos[1] = quadraticAt(p1[1], cp1[1], p2[1], t);
    // Tangent
    var tx = symbol.__t < 1 ? quadraticDerivativeAt(p1[0], cp1[0], p2[0], t) : quadraticDerivativeAt(p2[0], cp1[0], p1[0], 1 - t);
    var ty = symbol.__t < 1 ? quadraticDerivativeAt(p1[1], cp1[1], p2[1], t) : quadraticDerivativeAt(p2[1], cp1[1], p1[1], 1 - t);
    symbol.rotation = -Math.atan2(ty, tx) - Math.PI / 2;
    // enable continuity trail for 'line', 'rect', 'roundRect' symbolType
    if (this._symbolType === 'line' || this._symbolType === 'rect' || this._symbolType === 'roundRect') {
      if (symbol.__lastT !== undefined && symbol.__lastT < symbol.__t) {
        symbol.scaleY = zrender_lib_core_vector_js__WEBPACK_IMPORTED_MODULE_5__.dist(lastPos, pos) * 1.05;
        // make sure the last segment render within endPoint
        if (t === 1) {
          pos[0] = lastPos[0] + (pos[0] - lastPos[0]) / 2;
          pos[1] = lastPos[1] + (pos[1] - lastPos[1]) / 2;
        }
      } else if (symbol.__lastT === 1) {
        // After first loop, symbol.__t does NOT start with 0, so connect p1 to pos directly.
        symbol.scaleY = 2 * zrender_lib_core_vector_js__WEBPACK_IMPORTED_MODULE_5__.dist(p1, pos);
      } else {
        symbol.scaleY = this._symbolScale[1];
      }
    }
    symbol.__lastT = symbol.__t;
    symbol.ignore = false;
    symbol.x = pos[0];
    symbol.y = pos[1];
  };
  EffectLine.prototype.updateLayout = function (lineData, idx) {
    this.childAt(0).updateLayout(lineData, idx);
    var effectModel = lineData.getItemModel(idx).getModel('effect');
    this._updateEffectAnimation(lineData, effectModel, idx);
  };
  return EffectLine;
}(_util_graphic_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* ESM default export */ __webpack_exports__["default"] = (EffectLine);

}),
41074: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var _Polyline_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78913);
/* ESM import */var _EffectLine_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6268);
/* ESM import */var zrender_lib_core_vector_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63261);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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




var EffectPolyline = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(EffectPolyline, _super);
  function EffectPolyline() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this._lastFrame = 0;
    _this._lastFramePercent = 0;
    return _this;
  }
  // Override
  EffectPolyline.prototype.createLine = function (lineData, idx, seriesScope) {
    return new _Polyline_js__WEBPACK_IMPORTED_MODULE_2__["default"](lineData, idx, seriesScope);
  };
  ;
  // Override
  EffectPolyline.prototype._updateAnimationPoints = function (symbol, points) {
    this._points = points;
    var accLenArr = [0];
    var len = 0;
    for (var i = 1; i < points.length; i++) {
      var p1 = points[i - 1];
      var p2 = points[i];
      len += zrender_lib_core_vector_js__WEBPACK_IMPORTED_MODULE_3__.dist(p1, p2);
      accLenArr.push(len);
    }
    if (len === 0) {
      this._length = 0;
      return;
    }
    for (var i = 0; i < accLenArr.length; i++) {
      accLenArr[i] /= len;
    }
    this._offsets = accLenArr;
    this._length = len;
  };
  ;
  // Override
  EffectPolyline.prototype._getLineLength = function () {
    return this._length;
  };
  ;
  // Override
  EffectPolyline.prototype._updateSymbolPosition = function (symbol) {
    var t = symbol.__t < 1 ? symbol.__t : 2 - symbol.__t;
    var points = this._points;
    var offsets = this._offsets;
    var len = points.length;
    if (!offsets) {
      // Has length 0
      return;
    }
    var lastFrame = this._lastFrame;
    var frame;
    if (t < this._lastFramePercent) {
      // Start from the next frame
      // PENDING start from lastFrame ?
      var start = Math.min(lastFrame + 1, len - 1);
      for (frame = start; frame >= 0; frame--) {
        if (offsets[frame] <= t) {
          break;
        }
      }
      // PENDING really need to do this ?
      frame = Math.min(frame, len - 2);
    } else {
      for (frame = lastFrame; frame < len; frame++) {
        if (offsets[frame] > t) {
          break;
        }
      }
      frame = Math.min(frame - 1, len - 2);
    }
    var p = (t - offsets[frame]) / (offsets[frame + 1] - offsets[frame]);
    var p0 = points[frame];
    var p1 = points[frame + 1];
    symbol.x = p0[0] * (1 - p) + p * p1[0];
    symbol.y = p0[1] * (1 - p) + p * p1[1];
    var tx = symbol.__t < 1 ? p1[0] - p0[0] : p0[0] - p1[0];
    var ty = symbol.__t < 1 ? p1[1] - p0[1] : p0[1] - p1[1];
    symbol.rotation = -Math.atan2(ty, tx) - Math.PI / 2;
    this._lastFrame = frame;
    this._lastFramePercent = t;
    symbol.ignore = false;
  };
  ;
  return EffectPolyline;
}(_EffectLine_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* ESM default export */ __webpack_exports__["default"] = (EffectPolyline);

}),
7677: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49678);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44964);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58695);
/* ESM import */var zrender_lib_contain_line_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40343);
/* ESM import */var zrender_lib_contain_quadratic_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37186);
/* ESM import */var _util_innerStore_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55413);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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

// TODO Batch by color




var LargeLinesPathShape = /** @class */function () {
  function LargeLinesPathShape() {
    this.polyline = false;
    this.curveness = 0;
    this.segs = [];
  }
  return LargeLinesPathShape;
}();
var LargeLinesPath = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(LargeLinesPath, _super);
  function LargeLinesPath(opts) {
    var _this = _super.call(this, opts) || this;
    _this._off = 0;
    _this.hoverDataIdx = -1;
    return _this;
  }
  LargeLinesPath.prototype.reset = function () {
    this.notClear = false;
    this._off = 0;
  };
  LargeLinesPath.prototype.getDefaultStyle = function () {
    return {
      stroke: '#000',
      fill: null
    };
  };
  LargeLinesPath.prototype.getDefaultShape = function () {
    return new LargeLinesPathShape();
  };
  LargeLinesPath.prototype.buildPath = function (ctx, shape) {
    var segs = shape.segs;
    var curveness = shape.curveness;
    var i;
    if (shape.polyline) {
      for (i = this._off; i < segs.length;) {
        var count = segs[i++];
        if (count > 0) {
          ctx.moveTo(segs[i++], segs[i++]);
          for (var k = 1; k < count; k++) {
            ctx.lineTo(segs[i++], segs[i++]);
          }
        }
      }
    } else {
      for (i = this._off; i < segs.length;) {
        var x0 = segs[i++];
        var y0 = segs[i++];
        var x1 = segs[i++];
        var y1 = segs[i++];
        ctx.moveTo(x0, y0);
        if (curveness > 0) {
          var x2 = (x0 + x1) / 2 - (y0 - y1) * curveness;
          var y2 = (y0 + y1) / 2 - (x1 - x0) * curveness;
          ctx.quadraticCurveTo(x2, y2, x1, y1);
        } else {
          ctx.lineTo(x1, y1);
        }
      }
    }
    if (this.incremental) {
      this._off = i;
      this.notClear = true;
    }
  };
  LargeLinesPath.prototype.findDataIndex = function (x, y) {
    var shape = this.shape;
    var segs = shape.segs;
    var curveness = shape.curveness;
    var lineWidth = this.style.lineWidth;
    if (shape.polyline) {
      var dataIndex = 0;
      for (var i = 0; i < segs.length;) {
        var count = segs[i++];
        if (count > 0) {
          var x0 = segs[i++];
          var y0 = segs[i++];
          for (var k = 1; k < count; k++) {
            var x1 = segs[i++];
            var y1 = segs[i++];
            if (zrender_lib_contain_line_js__WEBPACK_IMPORTED_MODULE_2__.containStroke(x0, y0, x1, y1, lineWidth, x, y)) {
              return dataIndex;
            }
          }
        }
        dataIndex++;
      }
    } else {
      var dataIndex = 0;
      for (var i = 0; i < segs.length;) {
        var x0 = segs[i++];
        var y0 = segs[i++];
        var x1 = segs[i++];
        var y1 = segs[i++];
        if (curveness > 0) {
          var x2 = (x0 + x1) / 2 - (y0 - y1) * curveness;
          var y2 = (y0 + y1) / 2 - (x1 - x0) * curveness;
          if (zrender_lib_contain_quadratic_js__WEBPACK_IMPORTED_MODULE_3__.containStroke(x0, y0, x2, y2, x1, y1, lineWidth, x, y)) {
            return dataIndex;
          }
        } else {
          if (zrender_lib_contain_line_js__WEBPACK_IMPORTED_MODULE_2__.containStroke(x0, y0, x1, y1, lineWidth, x, y)) {
            return dataIndex;
          }
        }
        dataIndex++;
      }
    }
    return -1;
  };
  LargeLinesPath.prototype.contain = function (x, y) {
    var localPos = this.transformCoordToLocal(x, y);
    var rect = this.getBoundingRect();
    x = localPos[0];
    y = localPos[1];
    if (rect.contain(x, y)) {
      // Cache found data index.
      var dataIdx = this.hoverDataIdx = this.findDataIndex(x, y);
      return dataIdx >= 0;
    }
    this.hoverDataIdx = -1;
    return false;
  };
  LargeLinesPath.prototype.getBoundingRect = function () {
    // Ignore stroke for large symbol draw.
    var rect = this._rect;
    if (!rect) {
      var shape = this.shape;
      var points = shape.segs;
      var minX = Infinity;
      var minY = Infinity;
      var maxX = -Infinity;
      var maxY = -Infinity;
      for (var i = 0; i < points.length;) {
        var x = points[i++];
        var y = points[i++];
        minX = Math.min(x, minX);
        maxX = Math.max(x, maxX);
        minY = Math.min(y, minY);
        maxY = Math.max(y, maxY);
      }
      rect = this._rect = new _util_graphic_js__WEBPACK_IMPORTED_MODULE_4__["default"](minX, minY, maxX, maxY);
    }
    return rect;
  };
  return LargeLinesPath;
}(_util_graphic_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
var LargeLineDraw = /** @class */function () {
  function LargeLineDraw() {
    this.group = new _util_graphic_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
  }
  /**
   * Update symbols draw by new data
   */
  LargeLineDraw.prototype.updateData = function (data) {
    this._clear();
    var lineEl = this._create();
    lineEl.setShape({
      segs: data.getLayout('linesPoints')
    });
    this._setCommon(lineEl, data);
  };
  ;
  /**
   * @override
   */
  LargeLineDraw.prototype.incrementalPrepareUpdate = function (data) {
    this.group.removeAll();
    this._clear();
  };
  ;
  /**
   * @override
   */
  LargeLineDraw.prototype.incrementalUpdate = function (taskParams, data) {
    var lastAdded = this._newAdded[0];
    var linePoints = data.getLayout('linesPoints');
    var oldSegs = lastAdded && lastAdded.shape.segs;
    // Merging the exists. Each element has 1e4 points.
    // Consider the performance balance between too much elements and too much points in one shape(may affect hover optimization)
    if (oldSegs && oldSegs.length < 2e4) {
      var oldLen = oldSegs.length;
      var newSegs = new Float32Array(oldLen + linePoints.length);
      // Concat two array
      newSegs.set(oldSegs);
      newSegs.set(linePoints, oldLen);
      lastAdded.setShape({
        segs: newSegs
      });
    } else {
      // Clear
      this._newAdded = [];
      var lineEl = this._create();
      lineEl.incremental = true;
      lineEl.setShape({
        segs: linePoints
      });
      this._setCommon(lineEl, data);
      lineEl.__startIndex = taskParams.start;
    }
  };
  /**
   * @override
   */
  LargeLineDraw.prototype.remove = function () {
    this._clear();
  };
  LargeLineDraw.prototype.eachRendered = function (cb) {
    this._newAdded[0] && cb(this._newAdded[0]);
  };
  LargeLineDraw.prototype._create = function () {
    var lineEl = new LargeLinesPath({
      cursor: 'default',
      ignoreCoarsePointer: true
    });
    this._newAdded.push(lineEl);
    this.group.add(lineEl);
    return lineEl;
  };
  LargeLineDraw.prototype._setCommon = function (lineEl, data, isIncremental) {
    var hostModel = data.hostModel;
    lineEl.setShape({
      polyline: hostModel.get('polyline'),
      curveness: hostModel.get(['lineStyle', 'curveness'])
    });
    lineEl.useStyle(hostModel.getModel('lineStyle').getLineStyle());
    lineEl.style.strokeNoScale = true;
    var style = data.getVisual('style');
    if (style && style.stroke) {
      lineEl.setStyle('stroke', style.stroke);
    }
    lineEl.setStyle('fill', null);
    var ecData = (0,_util_innerStore_js__WEBPACK_IMPORTED_MODULE_6__.getECData)(lineEl);
    // Enable tooltip
    // PENDING May have performance issue when path is extremely large
    ecData.seriesIndex = hostModel.seriesIndex;
    lineEl.on('mousemove', function (e) {
      ecData.dataIndex = null;
      var dataIndex = lineEl.hoverDataIdx;
      if (dataIndex > 0) {
        // Provide dataIndex for tooltip
        ecData.dataIndex = dataIndex + lineEl.__startIndex;
      }
    });
  };
  ;
  LargeLineDraw.prototype._clear = function () {
    this._newAdded = [];
    this.group.removeAll();
  };
  ;
  return LargeLineDraw;
}();
/* ESM default export */ __webpack_exports__["default"] = (LargeLineDraw);

}),
4145: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49678);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44964);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58695);
/* ESM import */var _util_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44421);
/* ESM import */var _util_innerStore_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55413);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
// TODO Batch by color



var BOOST_SIZE_THRESHOLD = 4;
var LargeSymbolPathShape = /** @class */function () {
  function LargeSymbolPathShape() {}
  return LargeSymbolPathShape;
}();
var LargeSymbolPath = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(LargeSymbolPath, _super);
  function LargeSymbolPath(opts) {
    var _this = _super.call(this, opts) || this;
    _this._off = 0;
    _this.hoverDataIdx = -1;
    return _this;
  }
  LargeSymbolPath.prototype.getDefaultShape = function () {
    return new LargeSymbolPathShape();
  };
  LargeSymbolPath.prototype.reset = function () {
    this.notClear = false;
    this._off = 0;
  };
  LargeSymbolPath.prototype.buildPath = function (path, shape) {
    var points = shape.points;
    var size = shape.size;
    var symbolProxy = this.symbolProxy;
    var symbolProxyShape = symbolProxy.shape;
    var ctx = path.getContext ? path.getContext() : path;
    var canBoost = ctx && size[0] < BOOST_SIZE_THRESHOLD;
    var softClipShape = this.softClipShape;
    var i;
    // Do draw in afterBrush.
    if (canBoost) {
      this._ctx = ctx;
      return;
    }
    this._ctx = null;
    for (i = this._off; i < points.length;) {
      var x = points[i++];
      var y = points[i++];
      if (isNaN(x) || isNaN(y)) {
        continue;
      }
      if (softClipShape && !softClipShape.contain(x, y)) {
        continue;
      }
      symbolProxyShape.x = x - size[0] / 2;
      symbolProxyShape.y = y - size[1] / 2;
      symbolProxyShape.width = size[0];
      symbolProxyShape.height = size[1];
      symbolProxy.buildPath(path, symbolProxyShape, true);
    }
    if (this.incremental) {
      this._off = i;
      this.notClear = true;
    }
  };
  LargeSymbolPath.prototype.afterBrush = function () {
    var shape = this.shape;
    var points = shape.points;
    var size = shape.size;
    var ctx = this._ctx;
    var softClipShape = this.softClipShape;
    var i;
    if (!ctx) {
      return;
    }
    // PENDING If style or other canvas status changed?
    for (i = this._off; i < points.length;) {
      var x = points[i++];
      var y = points[i++];
      if (isNaN(x) || isNaN(y)) {
        continue;
      }
      if (softClipShape && !softClipShape.contain(x, y)) {
        continue;
      }
      // fillRect is faster than building a rect path and draw.
      // And it support light globalCompositeOperation.
      ctx.fillRect(x - size[0] / 2, y - size[1] / 2, size[0], size[1]);
    }
    if (this.incremental) {
      this._off = i;
      this.notClear = true;
    }
  };
  LargeSymbolPath.prototype.findDataIndex = function (x, y) {
    // TODO ???
    // Consider transform
    var shape = this.shape;
    var points = shape.points;
    var size = shape.size;
    var w = Math.max(size[0], 4);
    var h = Math.max(size[1], 4);
    // Not consider transform
    // Treat each element as a rect
    // top down traverse
    for (var idx = points.length / 2 - 1; idx >= 0; idx--) {
      var i = idx * 2;
      var x0 = points[i] - w / 2;
      var y0 = points[i + 1] - h / 2;
      if (x >= x0 && y >= y0 && x <= x0 + w && y <= y0 + h) {
        return idx;
      }
    }
    return -1;
  };
  LargeSymbolPath.prototype.contain = function (x, y) {
    var localPos = this.transformCoordToLocal(x, y);
    var rect = this.getBoundingRect();
    x = localPos[0];
    y = localPos[1];
    if (rect.contain(x, y)) {
      // Cache found data index.
      var dataIdx = this.hoverDataIdx = this.findDataIndex(x, y);
      return dataIdx >= 0;
    }
    this.hoverDataIdx = -1;
    return false;
  };
  LargeSymbolPath.prototype.getBoundingRect = function () {
    // Ignore stroke for large symbol draw.
    var rect = this._rect;
    if (!rect) {
      var shape = this.shape;
      var points = shape.points;
      var size = shape.size;
      var w = size[0];
      var h = size[1];
      var minX = Infinity;
      var minY = Infinity;
      var maxX = -Infinity;
      var maxY = -Infinity;
      for (var i = 0; i < points.length;) {
        var x = points[i++];
        var y = points[i++];
        minX = Math.min(x, minX);
        maxX = Math.max(x, maxX);
        minY = Math.min(y, minY);
        maxY = Math.max(y, maxY);
      }
      rect = this._rect = new _util_graphic_js__WEBPACK_IMPORTED_MODULE_2__["default"](minX - w / 2, minY - h / 2, maxX - minX + w, maxY - minY + h);
    }
    return rect;
  };
  return LargeSymbolPath;
}(_util_graphic_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
var LargeSymbolDraw = /** @class */function () {
  function LargeSymbolDraw() {
    this.group = new _util_graphic_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
  }
  /**
   * Update symbols draw by new data
   */
  LargeSymbolDraw.prototype.updateData = function (data, opt) {
    this._clear();
    var symbolEl = this._create();
    symbolEl.setShape({
      points: data.getLayout('points')
    });
    this._setCommon(symbolEl, data, opt);
  };
  LargeSymbolDraw.prototype.updateLayout = function (data) {
    var points = data.getLayout('points');
    this.group.eachChild(function (child) {
      if (child.startIndex != null) {
        var len = (child.endIndex - child.startIndex) * 2;
        var byteOffset = child.startIndex * 4 * 2;
        points = new Float32Array(points.buffer, byteOffset, len);
      }
      child.setShape('points', points);
      // Reset draw cursor.
      child.reset();
    });
  };
  LargeSymbolDraw.prototype.incrementalPrepareUpdate = function (data) {
    this._clear();
  };
  LargeSymbolDraw.prototype.incrementalUpdate = function (taskParams, data, opt) {
    var lastAdded = this._newAdded[0];
    var points = data.getLayout('points');
    var oldPoints = lastAdded && lastAdded.shape.points;
    // Merging the exists. Each element has 1e4 points.
    // Consider the performance balance between too much elements and too much points in one shape(may affect hover optimization)
    if (oldPoints && oldPoints.length < 2e4) {
      var oldLen = oldPoints.length;
      var newPoints = new Float32Array(oldLen + points.length);
      // Concat two array
      newPoints.set(oldPoints);
      newPoints.set(points, oldLen);
      // Update endIndex
      lastAdded.endIndex = taskParams.end;
      lastAdded.setShape({
        points: newPoints
      });
    } else {
      // Clear
      this._newAdded = [];
      var symbolEl = this._create();
      symbolEl.startIndex = taskParams.start;
      symbolEl.endIndex = taskParams.end;
      symbolEl.incremental = true;
      symbolEl.setShape({
        points: points
      });
      this._setCommon(symbolEl, data, opt);
    }
  };
  LargeSymbolDraw.prototype.eachRendered = function (cb) {
    this._newAdded[0] && cb(this._newAdded[0]);
  };
  LargeSymbolDraw.prototype._create = function () {
    var symbolEl = new LargeSymbolPath({
      cursor: 'default'
    });
    symbolEl.ignoreCoarsePointer = true;
    this.group.add(symbolEl);
    this._newAdded.push(symbolEl);
    return symbolEl;
  };
  LargeSymbolDraw.prototype._setCommon = function (symbolEl, data, opt) {
    var hostModel = data.hostModel;
    opt = opt || {};
    var size = data.getVisual('symbolSize');
    symbolEl.setShape('size', size instanceof Array ? size : [size, size]);
    symbolEl.softClipShape = opt.clipShape || null;
    // Create symbolProxy to build path for each data
    symbolEl.symbolProxy = (0,_util_symbol_js__WEBPACK_IMPORTED_MODULE_4__.createSymbol)(data.getVisual('symbol'), 0, 0, 0, 0);
    // Use symbolProxy setColor method
    symbolEl.setColor = symbolEl.symbolProxy.setColor;
    var extrudeShadow = symbolEl.shape.size[0] < BOOST_SIZE_THRESHOLD;
    symbolEl.useStyle(
    // Draw shadow when doing fillRect is extremely slow.
    hostModel.getModel('itemStyle').getItemStyle(extrudeShadow ? ['color', 'shadowBlur', 'shadowColor'] : ['color']));
    var globalStyle = data.getVisual('style');
    var visualColor = globalStyle && globalStyle.fill;
    if (visualColor) {
      symbolEl.setColor(visualColor);
    }
    var ecData = (0,_util_innerStore_js__WEBPACK_IMPORTED_MODULE_5__.getECData)(symbolEl);
    // Enable tooltip
    // PENDING May have performance issue when path is extremely large
    ecData.seriesIndex = hostModel.seriesIndex;
    symbolEl.on('mousemove', function (e) {
      ecData.dataIndex = null;
      var dataIndex = symbolEl.hoverDataIdx;
      if (dataIndex >= 0) {
        // Provide dataIndex for tooltip
        ecData.dataIndex = dataIndex + (symbolEl.startIndex || 0);
      }
    });
  };
  LargeSymbolDraw.prototype.remove = function () {
    this._clear();
  };
  LargeSymbolDraw.prototype._clear = function () {
    this._newAdded = [];
    this.group.removeAll();
  };
  return LargeSymbolDraw;
}();
/* ESM default export */ __webpack_exports__["default"] = (LargeSymbolDraw);

}),
63224: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ helper_Line; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(12012);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(96585);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/vector.js
var vector = __webpack_require__(63261);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/symbol.js
var util_symbol = __webpack_require__(44421);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/Line.js
var shape_Line = __webpack_require__(16504);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/BezierCurve.js
var BezierCurve = __webpack_require__(80330);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Path.js + 3 modules
var Path = __webpack_require__(49678);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/LinePath.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
 * Line path for bezier and straight line draw
 */


var straightLineProto = shape_Line["default"].prototype;
var bezierCurveProto = BezierCurve["default"].prototype;
var LinePath_StraightLineShape = /** @class */function () {
  function StraightLineShape() {
    // Start point
    this.x1 = 0;
    this.y1 = 0;
    // End point
    this.x2 = 0;
    this.y2 = 0;
    this.percent = 1;
  }
  return StraightLineShape;
}();
var LinePath_CurveShape = /** @class */function (_super) {
  (0,tslib_es6.__extends)(CurveShape, _super);
  function CurveShape() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  return CurveShape;
}(LinePath_StraightLineShape);
function isStraightLine(shape) {
  return isNaN(+shape.cpx1) || isNaN(+shape.cpy1);
}
var LinePath_ECLinePath = /** @class */function (_super) {
  (0,tslib_es6.__extends)(ECLinePath, _super);
  function ECLinePath(opts) {
    var _this = _super.call(this, opts) || this;
    _this.type = 'ec-line';
    return _this;
  }
  ECLinePath.prototype.getDefaultStyle = function () {
    return {
      stroke: '#000',
      fill: null
    };
  };
  ECLinePath.prototype.getDefaultShape = function () {
    return new LinePath_StraightLineShape();
  };
  ECLinePath.prototype.buildPath = function (ctx, shape) {
    if (isStraightLine(shape)) {
      straightLineProto.buildPath.call(this, ctx, shape);
    } else {
      bezierCurveProto.buildPath.call(this, ctx, shape);
    }
  };
  ECLinePath.prototype.pointAt = function (t) {
    if (isStraightLine(this.shape)) {
      return straightLineProto.pointAt.call(this, t);
    } else {
      return bezierCurveProto.pointAt.call(this, t);
    }
  };
  ECLinePath.prototype.tangentAt = function (t) {
    var shape = this.shape;
    var p = isStraightLine(shape) ? [shape.x2 - shape.x1, shape.y2 - shape.y1] : bezierCurveProto.tangentAt.call(this, t);
    return vector.normalize(p, p);
  };
  return ECLinePath;
}(Path["default"]);
/* ESM default export */ var LinePath = (LinePath_ECLinePath);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/animation/basicTransition.js
var basicTransition = __webpack_require__(17524);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Group.js
var Group = __webpack_require__(58695);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/states.js
var states = __webpack_require__(63344);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/label/labelStyle.js
var labelStyle = __webpack_require__(77704);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(81731);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/Line.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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









var SYMBOL_CATEGORIES = ['fromSymbol', 'toSymbol'];
function makeSymbolTypeKey(symbolCategory) {
  return '_' + symbolCategory + 'Type';
}
function makeSymbolTypeValue(name, lineData, idx) {
  var symbolType = lineData.getItemVisual(idx, name);
  if (!symbolType || symbolType === 'none') {
    return symbolType;
  }
  var symbolSize = lineData.getItemVisual(idx, name + 'Size');
  var symbolRotate = lineData.getItemVisual(idx, name + 'Rotate');
  var symbolOffset = lineData.getItemVisual(idx, name + 'Offset');
  var symbolKeepAspect = lineData.getItemVisual(idx, name + 'KeepAspect');
  var symbolSizeArr = util_symbol.normalizeSymbolSize(symbolSize);
  var symbolOffsetArr = util_symbol.normalizeSymbolOffset(symbolOffset || 0, symbolSizeArr);
  return symbolType + symbolSizeArr + symbolOffsetArr + (symbolRotate || '') + (symbolKeepAspect || '');
}
/**
 * @inner
 */
function createSymbol(name, lineData, idx) {
  var symbolType = lineData.getItemVisual(idx, name);
  if (!symbolType || symbolType === 'none') {
    return;
  }
  var symbolSize = lineData.getItemVisual(idx, name + 'Size');
  var symbolRotate = lineData.getItemVisual(idx, name + 'Rotate');
  var symbolOffset = lineData.getItemVisual(idx, name + 'Offset');
  var symbolKeepAspect = lineData.getItemVisual(idx, name + 'KeepAspect');
  var symbolSizeArr = util_symbol.normalizeSymbolSize(symbolSize);
  var symbolOffsetArr = util_symbol.normalizeSymbolOffset(symbolOffset || 0, symbolSizeArr);
  var symbolPath = util_symbol.createSymbol(symbolType, -symbolSizeArr[0] / 2 + symbolOffsetArr[0], -symbolSizeArr[1] / 2 + symbolOffsetArr[1], symbolSizeArr[0], symbolSizeArr[1], null, symbolKeepAspect);
  symbolPath.__specifiedRotation = symbolRotate == null || isNaN(symbolRotate) ? void 0 : +symbolRotate * Math.PI / 180 || 0;
  symbolPath.name = name;
  return symbolPath;
}
function createLine(points) {
  var line = new LinePath({
    name: 'line',
    subPixelOptimize: true
  });
  setLinePoints(line.shape, points);
  return line;
}
function setLinePoints(targetShape, points) {
  targetShape.x1 = points[0][0];
  targetShape.y1 = points[0][1];
  targetShape.x2 = points[1][0];
  targetShape.y2 = points[1][1];
  targetShape.percent = 1;
  var cp1 = points[2];
  if (cp1) {
    targetShape.cpx1 = cp1[0];
    targetShape.cpy1 = cp1[1];
  } else {
    targetShape.cpx1 = NaN;
    targetShape.cpy1 = NaN;
  }
}
var Line_Line = /** @class */function (_super) {
  (0,tslib_es6.__extends)(Line, _super);
  function Line(lineData, idx, seriesScope) {
    var _this = _super.call(this) || this;
    _this._createLine(lineData, idx, seriesScope);
    return _this;
  }
  Line.prototype._createLine = function (lineData, idx, seriesScope) {
    var seriesModel = lineData.hostModel;
    var linePoints = lineData.getItemLayout(idx);
    var line = createLine(linePoints);
    line.shape.percent = 0;
    basicTransition.initProps(line, {
      shape: {
        percent: 1
      }
    }, seriesModel, idx);
    this.add(line);
    (0,util.each)(SYMBOL_CATEGORIES, function (symbolCategory) {
      var symbol = createSymbol(symbolCategory, lineData, idx);
      // symbols must added after line to make sure
      // it will be updated after line#update.
      // Or symbol position and rotation update in line#beforeUpdate will be one frame slow
      this.add(symbol);
      this[makeSymbolTypeKey(symbolCategory)] = makeSymbolTypeValue(symbolCategory, lineData, idx);
    }, this);
    this._updateCommonStl(lineData, idx, seriesScope);
  };
  // TODO More strict on the List type in parameters?
  Line.prototype.updateData = function (lineData, idx, seriesScope) {
    var seriesModel = lineData.hostModel;
    var line = this.childOfName('line');
    var linePoints = lineData.getItemLayout(idx);
    var target = {
      shape: {}
    };
    setLinePoints(target.shape, linePoints);
    basicTransition.updateProps(line, target, seriesModel, idx);
    (0,util.each)(SYMBOL_CATEGORIES, function (symbolCategory) {
      var symbolType = makeSymbolTypeValue(symbolCategory, lineData, idx);
      var key = makeSymbolTypeKey(symbolCategory);
      // Symbol changed
      if (this[key] !== symbolType) {
        this.remove(this.childOfName(symbolCategory));
        var symbol = createSymbol(symbolCategory, lineData, idx);
        this.add(symbol);
      }
      this[key] = symbolType;
    }, this);
    this._updateCommonStl(lineData, idx, seriesScope);
  };
  ;
  Line.prototype.getLinePath = function () {
    return this.childAt(0);
  };
  Line.prototype._updateCommonStl = function (lineData, idx, seriesScope) {
    var seriesModel = lineData.hostModel;
    var line = this.childOfName('line');
    var emphasisLineStyle = seriesScope && seriesScope.emphasisLineStyle;
    var blurLineStyle = seriesScope && seriesScope.blurLineStyle;
    var selectLineStyle = seriesScope && seriesScope.selectLineStyle;
    var labelStatesModels = seriesScope && seriesScope.labelStatesModels;
    var emphasisDisabled = seriesScope && seriesScope.emphasisDisabled;
    var focus = seriesScope && seriesScope.focus;
    var blurScope = seriesScope && seriesScope.blurScope;
    // Optimization for large dataset
    if (!seriesScope || lineData.hasItemOption) {
      var itemModel = lineData.getItemModel(idx);
      var emphasisModel = itemModel.getModel('emphasis');
      emphasisLineStyle = emphasisModel.getModel('lineStyle').getLineStyle();
      blurLineStyle = itemModel.getModel(['blur', 'lineStyle']).getLineStyle();
      selectLineStyle = itemModel.getModel(['select', 'lineStyle']).getLineStyle();
      emphasisDisabled = emphasisModel.get('disabled');
      focus = emphasisModel.get('focus');
      blurScope = emphasisModel.get('blurScope');
      labelStatesModels = (0,labelStyle.getLabelStatesModels)(itemModel);
    }
    var lineStyle = lineData.getItemVisual(idx, 'style');
    var visualColor = lineStyle.stroke;
    line.useStyle(lineStyle);
    line.style.fill = null;
    line.style.strokeNoScale = true;
    line.ensureState('emphasis').style = emphasisLineStyle;
    line.ensureState('blur').style = blurLineStyle;
    line.ensureState('select').style = selectLineStyle;
    // Update symbol
    (0,util.each)(SYMBOL_CATEGORIES, function (symbolCategory) {
      var symbol = this.childOfName(symbolCategory);
      if (symbol) {
        // Share opacity and color with line.
        symbol.setColor(visualColor);
        symbol.style.opacity = lineStyle.opacity;
        for (var i = 0; i < states.SPECIAL_STATES.length; i++) {
          var stateName = states.SPECIAL_STATES[i];
          var lineState = line.getState(stateName);
          if (lineState) {
            var lineStateStyle = lineState.style || {};
            var state = symbol.ensureState(stateName);
            var stateStyle = state.style || (state.style = {});
            if (lineStateStyle.stroke != null) {
              stateStyle[symbol.__isEmptyBrush ? 'stroke' : 'fill'] = lineStateStyle.stroke;
            }
            if (lineStateStyle.opacity != null) {
              stateStyle.opacity = lineStateStyle.opacity;
            }
          }
        }
        symbol.markRedraw();
      }
    }, this);
    var rawVal = seriesModel.getRawValue(idx);
    (0,labelStyle.setLabelStyle)(this, labelStatesModels, {
      labelDataIndex: idx,
      labelFetcher: {
        getFormattedLabel: function (dataIndex, stateName) {
          return seriesModel.getFormattedLabel(dataIndex, stateName, lineData.dataType);
        }
      },
      inheritColor: visualColor || '#000',
      defaultOpacity: lineStyle.opacity,
      defaultText: (rawVal == null ? lineData.getName(idx) : isFinite(rawVal) ? (0,number.round)(rawVal) : rawVal) + ''
    });
    var label = this.getTextContent();
    // Always set `textStyle` even if `normalStyle.text` is null, because default
    // values have to be set on `normalStyle`.
    if (label) {
      var labelNormalModel = labelStatesModels.normal;
      label.__align = label.style.align;
      label.__verticalAlign = label.style.verticalAlign;
      // 'start', 'middle', 'end'
      label.__position = labelNormalModel.get('position') || 'middle';
      var distance = labelNormalModel.get('distance');
      if (!(0,util.isArray)(distance)) {
        distance = [distance, distance];
      }
      label.__labelDistance = distance;
    }
    this.setTextConfig({
      position: null,
      local: true,
      inside: false // Can't be inside for stroke element.
    });
    (0,states.toggleHoverEmphasis)(this, focus, blurScope, emphasisDisabled);
  };
  Line.prototype.highlight = function () {
    (0,states.enterEmphasis)(this);
  };
  Line.prototype.downplay = function () {
    (0,states.leaveEmphasis)(this);
  };
  Line.prototype.updateLayout = function (lineData, idx) {
    this.setLinePoints(lineData.getItemLayout(idx));
  };
  Line.prototype.setLinePoints = function (points) {
    var linePath = this.childOfName('line');
    setLinePoints(linePath.shape, points);
    linePath.dirty();
  };
  Line.prototype.beforeUpdate = function () {
    var lineGroup = this;
    var symbolFrom = lineGroup.childOfName('fromSymbol');
    var symbolTo = lineGroup.childOfName('toSymbol');
    var label = lineGroup.getTextContent();
    // Quick reject
    if (!symbolFrom && !symbolTo && (!label || label.ignore)) {
      return;
    }
    var invScale = 1;
    var parentNode = this.parent;
    while (parentNode) {
      if (parentNode.scaleX) {
        invScale /= parentNode.scaleX;
      }
      parentNode = parentNode.parent;
    }
    var line = lineGroup.childOfName('line');
    // If line not changed
    // FIXME Parent scale changed
    if (!this.__dirty && !line.__dirty) {
      return;
    }
    var percent = line.shape.percent;
    var fromPos = line.pointAt(0);
    var toPos = line.pointAt(percent);
    var d = vector.sub([], toPos, fromPos);
    vector.normalize(d, d);
    function setSymbolRotation(symbol, percent) {
      // Fix #12388
      // when symbol is set to be 'arrow' in markLine,
      // symbolRotate value will be ignored, and compulsively use tangent angle.
      // rotate by default if symbol rotation is not specified
      var specifiedRotation = symbol.__specifiedRotation;
      if (specifiedRotation == null) {
        var tangent = line.tangentAt(percent);
        symbol.attr('rotation', (percent === 1 ? -1 : 1) * Math.PI / 2 - Math.atan2(tangent[1], tangent[0]));
      } else {
        symbol.attr('rotation', specifiedRotation);
      }
    }
    if (symbolFrom) {
      symbolFrom.setPosition(fromPos);
      setSymbolRotation(symbolFrom, 0);
      symbolFrom.scaleX = symbolFrom.scaleY = invScale * percent;
      symbolFrom.markRedraw();
    }
    if (symbolTo) {
      symbolTo.setPosition(toPos);
      setSymbolRotation(symbolTo, 1);
      symbolTo.scaleX = symbolTo.scaleY = invScale * percent;
      symbolTo.markRedraw();
    }
    if (label && !label.ignore) {
      label.x = label.y = 0;
      label.originX = label.originY = 0;
      var textAlign = void 0;
      var textVerticalAlign = void 0;
      var distance = label.__labelDistance;
      var distanceX = distance[0] * invScale;
      var distanceY = distance[1] * invScale;
      var halfPercent = percent / 2;
      var tangent = line.tangentAt(halfPercent);
      var n = [tangent[1], -tangent[0]];
      var cp = line.pointAt(halfPercent);
      if (n[1] > 0) {
        n[0] = -n[0];
        n[1] = -n[1];
      }
      var dir = tangent[0] < 0 ? -1 : 1;
      if (label.__position !== 'start' && label.__position !== 'end') {
        var rotation = -Math.atan2(tangent[1], tangent[0]);
        if (toPos[0] < fromPos[0]) {
          rotation = Math.PI + rotation;
        }
        label.rotation = rotation;
      }
      var dy = void 0;
      switch (label.__position) {
        case 'insideStartTop':
        case 'insideMiddleTop':
        case 'insideEndTop':
        case 'middle':
          dy = -distanceY;
          textVerticalAlign = 'bottom';
          break;
        case 'insideStartBottom':
        case 'insideMiddleBottom':
        case 'insideEndBottom':
          dy = distanceY;
          textVerticalAlign = 'top';
          break;
        default:
          dy = 0;
          textVerticalAlign = 'middle';
      }
      switch (label.__position) {
        case 'end':
          label.x = d[0] * distanceX + toPos[0];
          label.y = d[1] * distanceY + toPos[1];
          textAlign = d[0] > 0.8 ? 'left' : d[0] < -0.8 ? 'right' : 'center';
          textVerticalAlign = d[1] > 0.8 ? 'top' : d[1] < -0.8 ? 'bottom' : 'middle';
          break;
        case 'start':
          label.x = -d[0] * distanceX + fromPos[0];
          label.y = -d[1] * distanceY + fromPos[1];
          textAlign = d[0] > 0.8 ? 'right' : d[0] < -0.8 ? 'left' : 'center';
          textVerticalAlign = d[1] > 0.8 ? 'bottom' : d[1] < -0.8 ? 'top' : 'middle';
          break;
        case 'insideStartTop':
        case 'insideStart':
        case 'insideStartBottom':
          label.x = distanceX * dir + fromPos[0];
          label.y = fromPos[1] + dy;
          textAlign = tangent[0] < 0 ? 'right' : 'left';
          label.originX = -distanceX * dir;
          label.originY = -dy;
          break;
        case 'insideMiddleTop':
        case 'insideMiddle':
        case 'insideMiddleBottom':
        case 'middle':
          label.x = cp[0];
          label.y = cp[1] + dy;
          textAlign = 'center';
          label.originY = -dy;
          break;
        case 'insideEndTop':
        case 'insideEnd':
        case 'insideEndBottom':
          label.x = -distanceX * dir + toPos[0];
          label.y = toPos[1] + dy;
          textAlign = tangent[0] >= 0 ? 'right' : 'left';
          label.originX = distanceX * dir;
          label.originY = -dy;
          break;
      }
      label.scaleX = label.scaleY = invScale;
      label.setStyle({
        // Use the user specified text align and baseline first
        verticalAlign: label.__verticalAlign || textVerticalAlign,
        align: label.__align || textAlign
      });
    }
  };
  return Line;
}(Group["default"]);
/* ESM default export */ var helper_Line = (Line_Line);

}),
37779: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58695);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16636);
/* ESM import */var _Line_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63224);
/* ESM import */var _label_labelStyle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77704);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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



var LineDraw = /** @class */function () {
  function LineDraw(LineCtor) {
    this.group = new _util_graphic_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this._LineCtor = LineCtor || _Line_js__WEBPACK_IMPORTED_MODULE_1__["default"];
  }
  LineDraw.prototype.updateData = function (lineData) {
    var _this = this;
    // Remove progressive els.
    this._progressiveEls = null;
    var lineDraw = this;
    var group = lineDraw.group;
    var oldLineData = lineDraw._lineData;
    lineDraw._lineData = lineData;
    // There is no oldLineData only when first rendering or switching from
    // stream mode to normal mode, where previous elements should be removed.
    if (!oldLineData) {
      group.removeAll();
    }
    var seriesScope = makeSeriesScope(lineData);
    lineData.diff(oldLineData).add(function (idx) {
      _this._doAdd(lineData, idx, seriesScope);
    }).update(function (newIdx, oldIdx) {
      _this._doUpdate(oldLineData, lineData, oldIdx, newIdx, seriesScope);
    }).remove(function (idx) {
      group.remove(oldLineData.getItemGraphicEl(idx));
    }).execute();
  };
  ;
  LineDraw.prototype.updateLayout = function () {
    var lineData = this._lineData;
    // Do not support update layout in incremental mode.
    if (!lineData) {
      return;
    }
    lineData.eachItemGraphicEl(function (el, idx) {
      el.updateLayout(lineData, idx);
    }, this);
  };
  ;
  LineDraw.prototype.incrementalPrepareUpdate = function (lineData) {
    this._seriesScope = makeSeriesScope(lineData);
    this._lineData = null;
    this.group.removeAll();
  };
  ;
  LineDraw.prototype.incrementalUpdate = function (taskParams, lineData) {
    this._progressiveEls = [];
    function updateIncrementalAndHover(el) {
      if (!el.isGroup && !isEffectObject(el)) {
        el.incremental = true;
        el.ensureState('emphasis').hoverLayer = true;
      }
    }
    for (var idx = taskParams.start; idx < taskParams.end; idx++) {
      var itemLayout = lineData.getItemLayout(idx);
      if (lineNeedsDraw(itemLayout)) {
        var el = new this._LineCtor(lineData, idx, this._seriesScope);
        el.traverse(updateIncrementalAndHover);
        this.group.add(el);
        lineData.setItemGraphicEl(idx, el);
        this._progressiveEls.push(el);
      }
    }
  };
  ;
  LineDraw.prototype.remove = function () {
    this.group.removeAll();
  };
  ;
  LineDraw.prototype.eachRendered = function (cb) {
    _util_graphic_js__WEBPACK_IMPORTED_MODULE_2__.traverseElements(this._progressiveEls || this.group, cb);
  };
  LineDraw.prototype._doAdd = function (lineData, idx, seriesScope) {
    var itemLayout = lineData.getItemLayout(idx);
    if (!lineNeedsDraw(itemLayout)) {
      return;
    }
    var el = new this._LineCtor(lineData, idx, seriesScope);
    lineData.setItemGraphicEl(idx, el);
    this.group.add(el);
  };
  LineDraw.prototype._doUpdate = function (oldLineData, newLineData, oldIdx, newIdx, seriesScope) {
    var itemEl = oldLineData.getItemGraphicEl(oldIdx);
    if (!lineNeedsDraw(newLineData.getItemLayout(newIdx))) {
      this.group.remove(itemEl);
      return;
    }
    if (!itemEl) {
      itemEl = new this._LineCtor(newLineData, newIdx, seriesScope);
    } else {
      itemEl.updateData(newLineData, newIdx, seriesScope);
    }
    newLineData.setItemGraphicEl(newIdx, itemEl);
    this.group.add(itemEl);
  };
  return LineDraw;
}();
function isEffectObject(el) {
  return el.animators && el.animators.length > 0;
}
function makeSeriesScope(lineData) {
  var hostModel = lineData.hostModel;
  var emphasisModel = hostModel.getModel('emphasis');
  return {
    lineStyle: hostModel.getModel('lineStyle').getLineStyle(),
    emphasisLineStyle: emphasisModel.getModel(['lineStyle']).getLineStyle(),
    blurLineStyle: hostModel.getModel(['blur', 'lineStyle']).getLineStyle(),
    selectLineStyle: hostModel.getModel(['select', 'lineStyle']).getLineStyle(),
    emphasisDisabled: emphasisModel.get('disabled'),
    blurScope: emphasisModel.get('blurScope'),
    focus: emphasisModel.get('focus'),
    labelStatesModels: (0,_label_labelStyle_js__WEBPACK_IMPORTED_MODULE_3__.getLabelStatesModels)(hostModel)
  };
}
function isPointNaN(pt) {
  return isNaN(pt[0]) || isNaN(pt[1]);
}
function lineNeedsDraw(pts) {
  return pts && !isPointNaN(pts[0]) && !isPointNaN(pts[1]);
}
/* ESM default export */ __webpack_exports__["default"] = (LineDraw);

}),
78913: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58695);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56490);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17524);
/* ESM import */var _util_states_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63344);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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



var Polyline = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(Polyline, _super);
  function Polyline(lineData, idx, seriesScope) {
    var _this = _super.call(this) || this;
    _this._createPolyline(lineData, idx, seriesScope);
    return _this;
  }
  Polyline.prototype._createPolyline = function (lineData, idx, seriesScope) {
    // let seriesModel = lineData.hostModel;
    var points = lineData.getItemLayout(idx);
    var line = new _util_graphic_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
      shape: {
        points: points
      }
    });
    this.add(line);
    this._updateCommonStl(lineData, idx, seriesScope);
  };
  ;
  Polyline.prototype.updateData = function (lineData, idx, seriesScope) {
    var seriesModel = lineData.hostModel;
    var line = this.childAt(0);
    var target = {
      shape: {
        points: lineData.getItemLayout(idx)
      }
    };
    _util_graphic_js__WEBPACK_IMPORTED_MODULE_3__.updateProps(line, target, seriesModel, idx);
    this._updateCommonStl(lineData, idx, seriesScope);
  };
  ;
  Polyline.prototype._updateCommonStl = function (lineData, idx, seriesScope) {
    var line = this.childAt(0);
    var itemModel = lineData.getItemModel(idx);
    var emphasisLineStyle = seriesScope && seriesScope.emphasisLineStyle;
    var focus = seriesScope && seriesScope.focus;
    var blurScope = seriesScope && seriesScope.blurScope;
    var emphasisDisabled = seriesScope && seriesScope.emphasisDisabled;
    if (!seriesScope || lineData.hasItemOption) {
      var emphasisModel = itemModel.getModel('emphasis');
      emphasisLineStyle = emphasisModel.getModel('lineStyle').getLineStyle();
      emphasisDisabled = emphasisModel.get('disabled');
      focus = emphasisModel.get('focus');
      blurScope = emphasisModel.get('blurScope');
    }
    line.useStyle(lineData.getItemVisual(idx, 'style'));
    line.style.fill = null;
    line.style.strokeNoScale = true;
    var lineEmphasisState = line.ensureState('emphasis');
    lineEmphasisState.style = emphasisLineStyle;
    (0,_util_states_js__WEBPACK_IMPORTED_MODULE_4__.toggleHoverEmphasis)(this, focus, blurScope, emphasisDisabled);
  };
  ;
  Polyline.prototype.updateLayout = function (lineData, idx) {
    var polyline = this.childAt(0);
    polyline.setShape('points', lineData.getItemLayout(idx));
  };
  ;
  return Polyline;
}(_util_graphic_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* ESM default export */ __webpack_exports__["default"] = (Polyline);

}),
91971: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var _util_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44421);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58695);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17524);
/* ESM import */var _util_innerStore_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(55413);
/* ESM import */var _util_states_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63344);
/* ESM import */var _labelHelper_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8169);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(96585);
/* ESM import */var _label_labelStyle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77704);
/* ESM import */var zrender_lib_graphic_Image_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31386);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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










var Symbol = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(Symbol, _super);
  function Symbol(data, idx, seriesScope, opts) {
    var _this = _super.call(this) || this;
    _this.updateData(data, idx, seriesScope, opts);
    return _this;
  }
  Symbol.prototype._createSymbol = function (symbolType, data, idx, symbolSize, keepAspect) {
    // Remove paths created before
    this.removeAll();
    // let symbolPath = createSymbol(
    //     symbolType, -0.5, -0.5, 1, 1, color
    // );
    // If width/height are set too small (e.g., set to 1) on ios10
    // and macOS Sierra, a circle stroke become a rect, no matter what
    // the scale is set. So we set width/height as 2. See #4150.
    var symbolPath = (0,_util_symbol_js__WEBPACK_IMPORTED_MODULE_2__.createSymbol)(symbolType, -1, -1, 2, 2, null, keepAspect);
    symbolPath.attr({
      z2: 100,
      culling: true,
      scaleX: symbolSize[0] / 2,
      scaleY: symbolSize[1] / 2
    });
    // Rewrite drift method
    symbolPath.drift = driftSymbol;
    this._symbolType = symbolType;
    this.add(symbolPath);
  };
  /**
   * Stop animation
   * @param {boolean} toLastFrame
   */
  Symbol.prototype.stopSymbolAnimation = function (toLastFrame) {
    this.childAt(0).stopAnimation(null, toLastFrame);
  };
  Symbol.prototype.getSymbolType = function () {
    return this._symbolType;
  };
  /**
   * FIXME:
   * Caution: This method breaks the encapsulation of this module,
   * but it indeed brings convenience. So do not use the method
   * unless you detailedly know all the implements of `Symbol`,
   * especially animation.
   *
   * Get symbol path element.
   */
  Symbol.prototype.getSymbolPath = function () {
    return this.childAt(0);
  };
  /**
   * Highlight symbol
   */
  Symbol.prototype.highlight = function () {
    (0,_util_states_js__WEBPACK_IMPORTED_MODULE_3__.enterEmphasis)(this.childAt(0));
  };
  /**
   * Downplay symbol
   */
  Symbol.prototype.downplay = function () {
    (0,_util_states_js__WEBPACK_IMPORTED_MODULE_3__.leaveEmphasis)(this.childAt(0));
  };
  /**
   * @param {number} zlevel
   * @param {number} z
   */
  Symbol.prototype.setZ = function (zlevel, z) {
    var symbolPath = this.childAt(0);
    symbolPath.zlevel = zlevel;
    symbolPath.z = z;
  };
  Symbol.prototype.setDraggable = function (draggable, hasCursorOption) {
    var symbolPath = this.childAt(0);
    symbolPath.draggable = draggable;
    symbolPath.cursor = !hasCursorOption && draggable ? 'move' : symbolPath.cursor;
  };
  /**
   * Update symbol properties
   */
  Symbol.prototype.updateData = function (data, idx, seriesScope, opts) {
    this.silent = false;
    var symbolType = data.getItemVisual(idx, 'symbol') || 'circle';
    var seriesModel = data.hostModel;
    var symbolSize = Symbol.getSymbolSize(data, idx);
    var isInit = symbolType !== this._symbolType;
    var disableAnimation = opts && opts.disableAnimation;
    if (isInit) {
      var keepAspect = data.getItemVisual(idx, 'symbolKeepAspect');
      this._createSymbol(symbolType, data, idx, symbolSize, keepAspect);
    } else {
      var symbolPath = this.childAt(0);
      symbolPath.silent = false;
      var target = {
        scaleX: symbolSize[0] / 2,
        scaleY: symbolSize[1] / 2
      };
      disableAnimation ? symbolPath.attr(target) : _util_graphic_js__WEBPACK_IMPORTED_MODULE_4__.updateProps(symbolPath, target, seriesModel, idx);
      (0,_util_graphic_js__WEBPACK_IMPORTED_MODULE_4__.saveOldStyle)(symbolPath);
    }
    this._updateCommon(data, idx, symbolSize, seriesScope, opts);
    if (isInit) {
      var symbolPath = this.childAt(0);
      if (!disableAnimation) {
        var target = {
          scaleX: this._sizeX,
          scaleY: this._sizeY,
          style: {
            // Always fadeIn. Because it has fadeOut animation when symbol is removed..
            opacity: symbolPath.style.opacity
          }
        };
        symbolPath.scaleX = symbolPath.scaleY = 0;
        symbolPath.style.opacity = 0;
        _util_graphic_js__WEBPACK_IMPORTED_MODULE_4__.initProps(symbolPath, target, seriesModel, idx);
      }
    }
    if (disableAnimation) {
      // Must stop leave transition manually if don't call initProps or updateProps.
      this.childAt(0).stopAnimation('leave');
    }
  };
  Symbol.prototype._updateCommon = function (data, idx, symbolSize, seriesScope, opts) {
    var symbolPath = this.childAt(0);
    var seriesModel = data.hostModel;
    var emphasisItemStyle;
    var blurItemStyle;
    var selectItemStyle;
    var focus;
    var blurScope;
    var emphasisDisabled;
    var labelStatesModels;
    var hoverScale;
    var cursorStyle;
    if (seriesScope) {
      emphasisItemStyle = seriesScope.emphasisItemStyle;
      blurItemStyle = seriesScope.blurItemStyle;
      selectItemStyle = seriesScope.selectItemStyle;
      focus = seriesScope.focus;
      blurScope = seriesScope.blurScope;
      labelStatesModels = seriesScope.labelStatesModels;
      hoverScale = seriesScope.hoverScale;
      cursorStyle = seriesScope.cursorStyle;
      emphasisDisabled = seriesScope.emphasisDisabled;
    }
    if (!seriesScope || data.hasItemOption) {
      var itemModel = seriesScope && seriesScope.itemModel ? seriesScope.itemModel : data.getItemModel(idx);
      var emphasisModel = itemModel.getModel('emphasis');
      emphasisItemStyle = emphasisModel.getModel('itemStyle').getItemStyle();
      selectItemStyle = itemModel.getModel(['select', 'itemStyle']).getItemStyle();
      blurItemStyle = itemModel.getModel(['blur', 'itemStyle']).getItemStyle();
      focus = emphasisModel.get('focus');
      blurScope = emphasisModel.get('blurScope');
      emphasisDisabled = emphasisModel.get('disabled');
      labelStatesModels = (0,_label_labelStyle_js__WEBPACK_IMPORTED_MODULE_5__.getLabelStatesModels)(itemModel);
      hoverScale = emphasisModel.getShallow('scale');
      cursorStyle = itemModel.getShallow('cursor');
    }
    var symbolRotate = data.getItemVisual(idx, 'symbolRotate');
    symbolPath.attr('rotation', (symbolRotate || 0) * Math.PI / 180 || 0);
    var symbolOffset = (0,_util_symbol_js__WEBPACK_IMPORTED_MODULE_2__.normalizeSymbolOffset)(data.getItemVisual(idx, 'symbolOffset'), symbolSize);
    if (symbolOffset) {
      symbolPath.x = symbolOffset[0];
      symbolPath.y = symbolOffset[1];
    }
    cursorStyle && symbolPath.attr('cursor', cursorStyle);
    var symbolStyle = data.getItemVisual(idx, 'style');
    var visualColor = symbolStyle.fill;
    if (symbolPath instanceof zrender_lib_graphic_Image_js__WEBPACK_IMPORTED_MODULE_6__["default"]) {
      var pathStyle = symbolPath.style;
      symbolPath.useStyle((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_7__.extend)({
        // TODO other properties like x, y ?
        image: pathStyle.image,
        x: pathStyle.x,
        y: pathStyle.y,
        width: pathStyle.width,
        height: pathStyle.height
      }, symbolStyle));
    } else {
      if (symbolPath.__isEmptyBrush) {
        // fill and stroke will be swapped if it's empty.
        // So we cloned a new style to avoid it affecting the original style in visual storage.
        // TODO Better implementation. No empty logic!
        symbolPath.useStyle((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_7__.extend)({}, symbolStyle));
      } else {
        symbolPath.useStyle(symbolStyle);
      }
      // Disable decal because symbol scale will been applied on the decal.
      symbolPath.style.decal = null;
      symbolPath.setColor(visualColor, opts && opts.symbolInnerColor);
      symbolPath.style.strokeNoScale = true;
    }
    var liftZ = data.getItemVisual(idx, 'liftZ');
    var z2Origin = this._z2;
    if (liftZ != null) {
      if (z2Origin == null) {
        this._z2 = symbolPath.z2;
        symbolPath.z2 += liftZ;
      }
    } else if (z2Origin != null) {
      symbolPath.z2 = z2Origin;
      this._z2 = null;
    }
    var useNameLabel = opts && opts.useNameLabel;
    (0,_label_labelStyle_js__WEBPACK_IMPORTED_MODULE_5__.setLabelStyle)(symbolPath, labelStatesModels, {
      labelFetcher: seriesModel,
      labelDataIndex: idx,
      defaultText: getLabelDefaultText,
      inheritColor: visualColor,
      defaultOpacity: symbolStyle.opacity
    });
    // Do not execute util needed.
    function getLabelDefaultText(idx) {
      return useNameLabel ? data.getName(idx) : (0,_labelHelper_js__WEBPACK_IMPORTED_MODULE_8__.getDefaultLabel)(data, idx);
    }
    this._sizeX = symbolSize[0] / 2;
    this._sizeY = symbolSize[1] / 2;
    var emphasisState = symbolPath.ensureState('emphasis');
    emphasisState.style = emphasisItemStyle;
    symbolPath.ensureState('select').style = selectItemStyle;
    symbolPath.ensureState('blur').style = blurItemStyle;
    // null / undefined / true means to use default strategy.
    // 0 / false / negative number / NaN / Infinity means no scale.
    var scaleRatio = hoverScale == null || hoverScale === true ? Math.max(1.1, 3 / this._sizeY)
    // PENDING: restrict hoverScale > 1? It seems unreasonable to scale down
    : isFinite(hoverScale) && hoverScale > 0 ? +hoverScale : 1;
    // always set scale to allow resetting
    emphasisState.scaleX = this._sizeX * scaleRatio;
    emphasisState.scaleY = this._sizeY * scaleRatio;
    this.setSymbolScale(1);
    (0,_util_states_js__WEBPACK_IMPORTED_MODULE_3__.toggleHoverEmphasis)(this, focus, blurScope, emphasisDisabled);
  };
  Symbol.prototype.setSymbolScale = function (scale) {
    this.scaleX = this.scaleY = scale;
  };
  Symbol.prototype.fadeOut = function (cb, seriesModel, opt) {
    var symbolPath = this.childAt(0);
    var dataIndex = (0,_util_innerStore_js__WEBPACK_IMPORTED_MODULE_9__.getECData)(this).dataIndex;
    var animationOpt = opt && opt.animation;
    // Avoid mistaken hover when fading out
    this.silent = symbolPath.silent = true;
    // Not show text when animating
    if (opt && opt.fadeLabel) {
      var textContent = symbolPath.getTextContent();
      if (textContent) {
        _util_graphic_js__WEBPACK_IMPORTED_MODULE_4__.removeElement(textContent, {
          style: {
            opacity: 0
          }
        }, seriesModel, {
          dataIndex: dataIndex,
          removeOpt: animationOpt,
          cb: function () {
            symbolPath.removeTextContent();
          }
        });
      }
    } else {
      symbolPath.removeTextContent();
    }
    _util_graphic_js__WEBPACK_IMPORTED_MODULE_4__.removeElement(symbolPath, {
      style: {
        opacity: 0
      },
      scaleX: 0,
      scaleY: 0
    }, seriesModel, {
      dataIndex: dataIndex,
      cb: cb,
      removeOpt: animationOpt
    });
  };
  Symbol.getSymbolSize = function (data, idx) {
    return (0,_util_symbol_js__WEBPACK_IMPORTED_MODULE_2__.normalizeSymbolSize)(data.getItemVisual(idx, 'symbolSize'));
  };
  return Symbol;
}(_util_graphic_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
function driftSymbol(dx, dy) {
  this.parent.drift(dx, dy);
}
/* ESM default export */ __webpack_exports__["default"] = (Symbol);

}),
41930: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58695);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17524);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16636);
/* ESM import */var _Symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91971);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96585);
/* ESM import */var _label_labelStyle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77704);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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




function symbolNeedsDraw(data, point, idx, opt) {
  return point && !isNaN(point[0]) && !isNaN(point[1]) && !(opt.isIgnore && opt.isIgnore(idx))
  // We do not set clipShape on group, because it will cut part of
  // the symbol element shape. We use the same clip shape here as
  // the line clip.
  && !(opt.clipShape && !opt.clipShape.contain(point[0], point[1])) && data.getItemVisual(idx, 'symbol') !== 'none';
}
function normalizeUpdateOpt(opt) {
  if (opt != null && !(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(opt)) {
    opt = {
      isIgnore: opt
    };
  }
  return opt || {};
}
function makeSeriesScope(data) {
  var seriesModel = data.hostModel;
  var emphasisModel = seriesModel.getModel('emphasis');
  return {
    emphasisItemStyle: emphasisModel.getModel('itemStyle').getItemStyle(),
    blurItemStyle: seriesModel.getModel(['blur', 'itemStyle']).getItemStyle(),
    selectItemStyle: seriesModel.getModel(['select', 'itemStyle']).getItemStyle(),
    focus: emphasisModel.get('focus'),
    blurScope: emphasisModel.get('blurScope'),
    emphasisDisabled: emphasisModel.get('disabled'),
    hoverScale: emphasisModel.get('scale'),
    labelStatesModels: (0,_label_labelStyle_js__WEBPACK_IMPORTED_MODULE_1__.getLabelStatesModels)(seriesModel),
    cursorStyle: seriesModel.get('cursor')
  };
}
var SymbolDraw = /** @class */function () {
  function SymbolDraw(SymbolCtor) {
    this.group = new _util_graphic_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this._SymbolCtor = SymbolCtor || _Symbol_js__WEBPACK_IMPORTED_MODULE_3__["default"];
  }
  /**
   * Update symbols draw by new data
   */
  SymbolDraw.prototype.updateData = function (data, opt) {
    // Remove progressive els.
    this._progressiveEls = null;
    opt = normalizeUpdateOpt(opt);
    var group = this.group;
    var seriesModel = data.hostModel;
    var oldData = this._data;
    var SymbolCtor = this._SymbolCtor;
    var disableAnimation = opt.disableAnimation;
    var seriesScope = makeSeriesScope(data);
    var symbolUpdateOpt = {
      disableAnimation: disableAnimation
    };
    var getSymbolPoint = opt.getSymbolPoint || function (idx) {
      return data.getItemLayout(idx);
    };
    // There is no oldLineData only when first rendering or switching from
    // stream mode to normal mode, where previous elements should be removed.
    if (!oldData) {
      group.removeAll();
    }
    data.diff(oldData).add(function (newIdx) {
      var point = getSymbolPoint(newIdx);
      if (symbolNeedsDraw(data, point, newIdx, opt)) {
        var symbolEl = new SymbolCtor(data, newIdx, seriesScope, symbolUpdateOpt);
        symbolEl.setPosition(point);
        data.setItemGraphicEl(newIdx, symbolEl);
        group.add(symbolEl);
      }
    }).update(function (newIdx, oldIdx) {
      var symbolEl = oldData.getItemGraphicEl(oldIdx);
      var point = getSymbolPoint(newIdx);
      if (!symbolNeedsDraw(data, point, newIdx, opt)) {
        group.remove(symbolEl);
        return;
      }
      var newSymbolType = data.getItemVisual(newIdx, 'symbol') || 'circle';
      var oldSymbolType = symbolEl && symbolEl.getSymbolType && symbolEl.getSymbolType();
      if (!symbolEl
      // Create a new if symbol type changed.
      || oldSymbolType && oldSymbolType !== newSymbolType) {
        group.remove(symbolEl);
        symbolEl = new SymbolCtor(data, newIdx, seriesScope, symbolUpdateOpt);
        symbolEl.setPosition(point);
      } else {
        symbolEl.updateData(data, newIdx, seriesScope, symbolUpdateOpt);
        var target = {
          x: point[0],
          y: point[1]
        };
        disableAnimation ? symbolEl.attr(target) : _util_graphic_js__WEBPACK_IMPORTED_MODULE_4__.updateProps(symbolEl, target, seriesModel);
      }
      // Add back
      group.add(symbolEl);
      data.setItemGraphicEl(newIdx, symbolEl);
    }).remove(function (oldIdx) {
      var el = oldData.getItemGraphicEl(oldIdx);
      el && el.fadeOut(function () {
        group.remove(el);
      }, seriesModel);
    }).execute();
    this._getSymbolPoint = getSymbolPoint;
    this._data = data;
  };
  ;
  SymbolDraw.prototype.updateLayout = function () {
    var _this = this;
    var data = this._data;
    if (data) {
      // Not use animation
      data.eachItemGraphicEl(function (el, idx) {
        var point = _this._getSymbolPoint(idx);
        el.setPosition(point);
        el.markRedraw();
      });
    }
  };
  ;
  SymbolDraw.prototype.incrementalPrepareUpdate = function (data) {
    this._seriesScope = makeSeriesScope(data);
    this._data = null;
    this.group.removeAll();
  };
  ;
  /**
   * Update symbols draw by new data
   */
  SymbolDraw.prototype.incrementalUpdate = function (taskParams, data, opt) {
    // Clear
    this._progressiveEls = [];
    opt = normalizeUpdateOpt(opt);
    function updateIncrementalAndHover(el) {
      if (!el.isGroup) {
        el.incremental = true;
        el.ensureState('emphasis').hoverLayer = true;
      }
    }
    for (var idx = taskParams.start; idx < taskParams.end; idx++) {
      var point = data.getItemLayout(idx);
      if (symbolNeedsDraw(data, point, idx, opt)) {
        var el = new this._SymbolCtor(data, idx, this._seriesScope);
        el.traverse(updateIncrementalAndHover);
        el.setPosition(point);
        this.group.add(el);
        data.setItemGraphicEl(idx, el);
        this._progressiveEls.push(el);
      }
    }
  };
  ;
  SymbolDraw.prototype.eachRendered = function (cb) {
    _util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.traverseElements(this._progressiveEls || this.group, cb);
  };
  SymbolDraw.prototype.remove = function (enableAnimation) {
    var group = this.group;
    var data = this._data;
    // Incremental model do not have this._data.
    if (data && enableAnimation) {
      data.eachItemGraphicEl(function (el) {
        el.fadeOut(function () {
          group.remove(el);
        }, data.hostModel);
      });
    } else {
      group.removeAll();
    }
  };
  ;
  return SymbolDraw;
}();
/* ESM default export */ __webpack_exports__["default"] = (SymbolDraw);

}),
92741: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createClipPath: function() { return createClipPath; },
  createGridClipPath: function() { return createGridClipPath; },
  createPolarClipPath: function() { return createPolarClipPath; }
});
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40361);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17524);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98289);
/* ESM import */var _util_number_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81731);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96585);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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



function createGridClipPath(cartesian, hasAnimation, seriesModel, done, during) {
  var rect = cartesian.getArea();
  var x = rect.x;
  var y = rect.y;
  var width = rect.width;
  var height = rect.height;
  var lineWidth = seriesModel.get(['lineStyle', 'width']) || 0;
  // Expand the clip path a bit to avoid the border is clipped and looks thinner
  x -= lineWidth / 2;
  y -= lineWidth / 2;
  width += lineWidth;
  height += lineWidth;
  // fix: https://github.com/apache/incubator-echarts/issues/11369
  width = Math.ceil(width);
  if (x !== Math.floor(x)) {
    x = Math.floor(x);
    // if no extra 1px on `width`, it will still be clipped since `x` is floored
    width++;
  }
  var clipPath = new _util_graphic_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
    shape: {
      x: x,
      y: y,
      width: width,
      height: height
    }
  });
  if (hasAnimation) {
    var baseAxis = cartesian.getBaseAxis();
    var isHorizontal = baseAxis.isHorizontal();
    var isAxisInversed = baseAxis.inverse;
    if (isHorizontal) {
      if (isAxisInversed) {
        clipPath.shape.x += width;
      }
      clipPath.shape.width = 0;
    } else {
      if (!isAxisInversed) {
        clipPath.shape.y += height;
      }
      clipPath.shape.height = 0;
    }
    var duringCb = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isFunction)(during) ? function (percent) {
      during(percent, clipPath);
    } : null;
    _util_graphic_js__WEBPACK_IMPORTED_MODULE_2__.initProps(clipPath, {
      shape: {
        width: width,
        height: height,
        x: x,
        y: y
      }
    }, seriesModel, null, done, duringCb);
  }
  return clipPath;
}
function createPolarClipPath(polar, hasAnimation, seriesModel) {
  var sectorArea = polar.getArea();
  // Avoid float number rounding error for symbol on the edge of axis extent.
  var r0 = (0,_util_number_js__WEBPACK_IMPORTED_MODULE_3__.round)(sectorArea.r0, 1);
  var r = (0,_util_number_js__WEBPACK_IMPORTED_MODULE_3__.round)(sectorArea.r, 1);
  var clipPath = new _util_graphic_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
    shape: {
      cx: (0,_util_number_js__WEBPACK_IMPORTED_MODULE_3__.round)(polar.cx, 1),
      cy: (0,_util_number_js__WEBPACK_IMPORTED_MODULE_3__.round)(polar.cy, 1),
      r0: r0,
      r: r,
      startAngle: sectorArea.startAngle,
      endAngle: sectorArea.endAngle,
      clockwise: sectorArea.clockwise
    }
  });
  if (hasAnimation) {
    var isRadial = polar.getBaseAxis().dim === 'angle';
    if (isRadial) {
      clipPath.shape.endAngle = sectorArea.startAngle;
    } else {
      clipPath.shape.r = r0;
    }
    _util_graphic_js__WEBPACK_IMPORTED_MODULE_2__.initProps(clipPath, {
      shape: {
        endAngle: sectorArea.endAngle,
        r: r
      }
    }, seriesModel);
  }
  return clipPath;
}
function createClipPath(coordSys, hasAnimation, seriesModel, done, during) {
  if (!coordSys) {
    return null;
  } else if (coordSys.type === 'polar') {
    return createPolarClipPath(coordSys, hasAnimation, seriesModel);
  } else if (coordSys.type === 'cartesian2d') {
    return createGridClipPath(coordSys, hasAnimation, seriesModel, done, during);
  }
  return null;
}


}),
23530: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return createGraphFromNodeEdge; }
});
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96585);
/* ESM import */var _data_SeriesData_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38788);
/* ESM import */var _data_Graph_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39447);
/* ESM import */var _data_helper_linkSeriesData_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72781);
/* ESM import */var _data_helper_createDimensions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66115);
/* ESM import */var _core_CoordinateSystem_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44733);
/* ESM import */var _createSeriesData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91956);
/* ESM import */var _util_model_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46451);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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








function createGraphFromNodeEdge(nodes, edges, seriesModel, directed, beforeLink) {
  // ??? TODO
  // support dataset?
  var graph = new _data_Graph_js__WEBPACK_IMPORTED_MODULE_0__["default"](directed);
  for (var i = 0; i < nodes.length; i++) {
    graph.addNode(zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.retrieve(
    // Id, name, dataIndex
    nodes[i].id, nodes[i].name, i), i);
  }
  var linkNameList = [];
  var validEdges = [];
  var linkCount = 0;
  for (var i = 0; i < edges.length; i++) {
    var link = edges[i];
    var source = link.source;
    var target = link.target;
    // addEdge may fail when source or target not exists
    if (graph.addEdge(source, target, linkCount)) {
      validEdges.push(link);
      linkNameList.push(zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.retrieve((0,_util_model_js__WEBPACK_IMPORTED_MODULE_2__.convertOptionIdName)(link.id, null), source + ' > ' + target));
      linkCount++;
    }
  }
  var coordSys = seriesModel.get('coordinateSystem');
  var nodeData;
  if (coordSys === 'cartesian2d' || coordSys === 'polar') {
    nodeData = (0,_createSeriesData_js__WEBPACK_IMPORTED_MODULE_3__["default"])(nodes, seriesModel);
  } else {
    var coordSysCtor = _core_CoordinateSystem_js__WEBPACK_IMPORTED_MODULE_4__["default"].get(coordSys);
    var coordDimensions = coordSysCtor ? coordSysCtor.dimensions || [] : [];
    // FIXME: Some geo do not need `value` dimenson, whereas `calendar` needs
    // `value` dimension, but graph need `value` dimension. It's better to
    // uniform this behavior.
    if (zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.indexOf(coordDimensions, 'value') < 0) {
      coordDimensions.concat(['value']);
    }
    var dimensions = (0,_data_helper_createDimensions_js__WEBPACK_IMPORTED_MODULE_5__["default"])(nodes, {
      coordDimensions: coordDimensions,
      encodeDefine: seriesModel.getEncode()
    }).dimensions;
    nodeData = new _data_SeriesData_js__WEBPACK_IMPORTED_MODULE_6__["default"](dimensions, seriesModel);
    nodeData.initData(nodes);
  }
  var edgeData = new _data_SeriesData_js__WEBPACK_IMPORTED_MODULE_6__["default"](['value'], seriesModel);
  edgeData.initData(validEdges, linkNameList);
  beforeLink && beforeLink(nodeData, edgeData);
  (0,_data_helper_linkSeriesData_js__WEBPACK_IMPORTED_MODULE_7__["default"])({
    mainData: nodeData,
    struct: graph,
    structAttr: 'graph',
    datas: {
      node: nodeData,
      edge: edgeData
    },
    datasAttr: {
      node: 'data',
      edge: 'edgeData'
    }
  });
  // Update dataIndex of nodes and edges because invalid edge may be removed
  graph.update();
  return graph;
}

}),
94431: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return createRenderPlanner; }
});
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

/**
 * @return {string} If large mode changed, return string 'reset';
 */
function createRenderPlanner() {
  var inner = (0,_util_model_js__WEBPACK_IMPORTED_MODULE_0__.makeInner)();
  return function (seriesModel) {
    var fields = inner(seriesModel);
    var pipelineContext = seriesModel.pipelineContext;
    var originalLarge = !!fields.large;
    var originalProgressive = !!fields.progressiveRender;
    // FIXME: if the planner works on a filtered series, `pipelineContext` does not
    // exists. See #11611 . Probably we need to modify this structure, see the comment
    // on `performRawSeries` in `Schedular.js`.
    var large = fields.large = !!(pipelineContext && pipelineContext.large);
    var progressive = fields.progressiveRender = !!(pipelineContext && pipelineContext.progressiveRender);
    return !!(originalLarge !== large || originalProgressive !== progressive) && 'reset';
  };
}

}),
91956: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96585);
/* ESM import */var _data_SeriesData_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38788);
/* ESM import */var _data_helper_createDimensions_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(66115);
/* ESM import */var _data_helper_dimensionHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31426);
/* ESM import */var _util_model_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(46451);
/* ESM import */var _core_CoordinateSystem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44733);
/* ESM import */var _model_referHelper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27770);
/* ESM import */var _data_Source_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58136);
/* ESM import */var _data_helper_dataStackHelper_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(93054);
/* ESM import */var _data_helper_sourceHelper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(490);
/* ESM import */var _util_types_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15693);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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











function getCoordSysDimDefs(seriesModel, coordSysInfo) {
  var coordSysName = seriesModel.get('coordinateSystem');
  var registeredCoordSys = _core_CoordinateSystem_js__WEBPACK_IMPORTED_MODULE_0__["default"].get(coordSysName);
  var coordSysDimDefs;
  if (coordSysInfo && coordSysInfo.coordSysDims) {
    coordSysDimDefs = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.map(coordSysInfo.coordSysDims, function (dim) {
      var dimInfo = {
        name: dim
      };
      var axisModel = coordSysInfo.axisMap.get(dim);
      if (axisModel) {
        var axisType = axisModel.get('type');
        dimInfo.type = (0,_data_helper_dimensionHelper_js__WEBPACK_IMPORTED_MODULE_2__.getDimensionTypeByAxis)(axisType);
      }
      return dimInfo;
    });
  }
  if (!coordSysDimDefs) {
    // Get dimensions from registered coordinate system
    coordSysDimDefs = registeredCoordSys && (registeredCoordSys.getDimensionsInfo ? registeredCoordSys.getDimensionsInfo() : registeredCoordSys.dimensions.slice()) || ['x', 'y'];
  }
  return coordSysDimDefs;
}
function injectOrdinalMeta(dimInfoList, createInvertedIndices, coordSysInfo) {
  var firstCategoryDimIndex;
  var hasNameEncode;
  coordSysInfo && zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.each(dimInfoList, function (dimInfo, dimIndex) {
    var coordDim = dimInfo.coordDim;
    var categoryAxisModel = coordSysInfo.categoryAxisMap.get(coordDim);
    if (categoryAxisModel) {
      if (firstCategoryDimIndex == null) {
        firstCategoryDimIndex = dimIndex;
      }
      dimInfo.ordinalMeta = categoryAxisModel.getOrdinalMeta();
      if (createInvertedIndices) {
        dimInfo.createInvertedIndices = true;
      }
    }
    if (dimInfo.otherDims.itemName != null) {
      hasNameEncode = true;
    }
  });
  if (!hasNameEncode && firstCategoryDimIndex != null) {
    dimInfoList[firstCategoryDimIndex].otherDims.itemName = 0;
  }
  return firstCategoryDimIndex;
}
/**
 * Caution: there are side effects to `sourceManager` in this method.
 * Should better only be called in `Series['getInitialData']`.
 */
function createSeriesData(sourceRaw, seriesModel, opt) {
  opt = opt || {};
  var sourceManager = seriesModel.getSourceManager();
  var source;
  var isOriginalSource = false;
  if (sourceRaw) {
    isOriginalSource = true;
    source = (0,_data_Source_js__WEBPACK_IMPORTED_MODULE_3__.createSourceFromSeriesDataOption)(sourceRaw);
  } else {
    source = sourceManager.getSource();
    // Is series.data. not dataset.
    isOriginalSource = source.sourceFormat === _util_types_js__WEBPACK_IMPORTED_MODULE_4__.SOURCE_FORMAT_ORIGINAL;
  }
  var coordSysInfo = (0,_model_referHelper_js__WEBPACK_IMPORTED_MODULE_5__.getCoordSysInfoBySeries)(seriesModel);
  var coordSysDimDefs = getCoordSysDimDefs(seriesModel, coordSysInfo);
  var useEncodeDefaulter = opt.useEncodeDefaulter;
  var encodeDefaulter = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isFunction(useEncodeDefaulter) ? useEncodeDefaulter : useEncodeDefaulter ? zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.curry(_data_helper_sourceHelper_js__WEBPACK_IMPORTED_MODULE_6__.makeSeriesEncodeForAxisCoordSys, coordSysDimDefs, seriesModel) : null;
  var createDimensionOptions = {
    coordDimensions: coordSysDimDefs,
    generateCoord: opt.generateCoord,
    encodeDefine: seriesModel.getEncode(),
    encodeDefaulter: encodeDefaulter,
    canOmitUnusedDimensions: !isOriginalSource
  };
  var schema = (0,_data_helper_createDimensions_js__WEBPACK_IMPORTED_MODULE_7__["default"])(source, createDimensionOptions);
  var firstCategoryDimIndex = injectOrdinalMeta(schema.dimensions, opt.createInvertedIndices, coordSysInfo);
  var store = !isOriginalSource ? sourceManager.getSharedDataStore(schema) : null;
  var stackCalculationInfo = (0,_data_helper_dataStackHelper_js__WEBPACK_IMPORTED_MODULE_8__.enableDataStack)(seriesModel, {
    schema: schema,
    store: store
  });
  var data = new _data_SeriesData_js__WEBPACK_IMPORTED_MODULE_9__["default"](schema, seriesModel);
  data.setCalculationInfo(stackCalculationInfo);
  var dimValueGetter = firstCategoryDimIndex != null && isNeedCompleteOrdinalData(source) ? function (itemOpt, dimName, dataIndex, dimIndex) {
    // Use dataIndex as ordinal value in categoryAxis
    return dimIndex === firstCategoryDimIndex ? dataIndex : this.defaultDimValueGetter(itemOpt, dimName, dataIndex, dimIndex);
  } : null;
  data.hasItemOption = false;
  data.initData(
  // Try to reuse the data store in sourceManager if using dataset.
  isOriginalSource ? source : store, null, dimValueGetter);
  return data;
}
function isNeedCompleteOrdinalData(source) {
  if (source.sourceFormat === _util_types_js__WEBPACK_IMPORTED_MODULE_4__.SOURCE_FORMAT_ORIGINAL) {
    var sampleItem = firstDataNotNull(source.data || []);
    return !zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isArray((0,_util_model_js__WEBPACK_IMPORTED_MODULE_10__.getDataItemValue)(sampleItem));
  }
}
function firstDataNotNull(arr) {
  var i = 0;
  while (i < arr.length && arr[i] == null) {
    i++;
  }
  return arr[i];
}
/* ESM default export */ __webpack_exports__["default"] = (createSeriesData);

}),
86011: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return createSeriesDataSimply; }
});
/* ESM import */var _data_helper_createDimensions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66115);
/* ESM import */var _data_SeriesData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38788);
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
 * [Usage]:
 * (1)
 * createListSimply(seriesModel, ['value']);
 * (2)
 * createListSimply(seriesModel, {
 *     coordDimensions: ['value'],
 *     dimensionsCount: 5
 * });
 */
function createSeriesDataSimply(seriesModel, opt, nameList) {
  opt = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(opt) && {
    coordDimensions: opt
  } || (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.extend)({
    encodeDefine: seriesModel.getEncode()
  }, opt);
  var source = seriesModel.getSource();
  var dimensions = (0,_data_helper_createDimensions_js__WEBPACK_IMPORTED_MODULE_1__["default"])(source, opt).dimensions;
  var list = new _data_SeriesData_js__WEBPACK_IMPORTED_MODULE_2__["default"](dimensions, seriesModel);
  list.initData(source, nameList);
  return list;
}

}),
57891: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return enableAriaDecalForTree; }
});
/* ESM import */var _model_mixin_palette_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14937);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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

function enableAriaDecalForTree(seriesModel) {
  var data = seriesModel.getData();
  var tree = data.tree;
  var decalPaletteScope = {};
  tree.eachNode(function (node) {
    // Use decal of level 1 node
    var current = node;
    while (current && current.depth > 1) {
      current = current.parentNode;
    }
    var decal = (0,_model_mixin_palette_js__WEBPACK_IMPORTED_MODULE_0__.getDecalFromPalette)(seriesModel.ecModel, current.name || current.dataIndex + '', decalPaletteScope);
    node.setVisual('decal', decal);
  });
}

}),
8169: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getDefaultInterpolatedLabel: function() { return getDefaultInterpolatedLabel; },
  getDefaultLabel: function() { return getDefaultLabel; }
});
/* ESM import */var _data_helper_dataProvider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32658);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96585);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
 * @return label string. Not null/undefined
 */
function getDefaultLabel(data, dataIndex) {
  var labelDims = data.mapDimensionsAll('defaultedLabel');
  var len = labelDims.length;
  // Simple optimization (in lots of cases, label dims length is 1)
  if (len === 1) {
    var rawVal = (0,_data_helper_dataProvider_js__WEBPACK_IMPORTED_MODULE_0__.retrieveRawValue)(data, dataIndex, labelDims[0]);
    return rawVal != null ? rawVal + '' : null;
  } else if (len) {
    var vals = [];
    for (var i = 0; i < labelDims.length; i++) {
      vals.push((0,_data_helper_dataProvider_js__WEBPACK_IMPORTED_MODULE_0__.retrieveRawValue)(data, dataIndex, labelDims[i]));
    }
    return vals.join(' ');
  }
}
function getDefaultInterpolatedLabel(data, interpolatedValue) {
  var labelDims = data.mapDimensionsAll('defaultedLabel');
  if (!(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isArray)(interpolatedValue)) {
    return interpolatedValue + '';
  }
  var vals = [];
  for (var i = 0; i < labelDims.length; i++) {
    var dimIndex = data.getDimensionIndex(labelDims[i]);
    if (dimIndex >= 0) {
      vals.push(interpolatedValue[dimIndex]);
    }
  }
  return vals.join(' ');
}

}),
55549: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getSectorCornerRadius: function() { return getSectorCornerRadius; }
});
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96585);
/* ESM import */var zrender_lib_contain_text_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45258);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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


function getSectorCornerRadius(model, shape, zeroIfNull) {
  var cornerRadius = model.get('borderRadius');
  if (cornerRadius == null) {
    return zeroIfNull ? {
      cornerRadius: 0
    } : null;
  }
  if (!(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(cornerRadius)) {
    cornerRadius = [cornerRadius, cornerRadius, cornerRadius, cornerRadius];
  }
  var dr = Math.abs(shape.r || 0 - shape.r0 || 0);
  return {
    cornerRadius: (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.map)(cornerRadius, function (cr) {
      return (0,zrender_lib_contain_text_js__WEBPACK_IMPORTED_MODULE_1__.parsePercent)(cr, dr);
    })
  };
}

}),
12438: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  aboveViewRoot: function() { return aboveViewRoot; },
  getPathToRoot: function() { return getPathToRoot; },
  retrieveTargetInfo: function() { return retrieveTargetInfo; },
  wrapTreePathInfo: function() { return wrapTreePathInfo; }
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

function retrieveTargetInfo(payload, validPayloadTypes, seriesModel) {
  if (payload && zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.indexOf(validPayloadTypes, payload.type) >= 0) {
    var root = seriesModel.getData().tree.root;
    var targetNode = payload.targetNode;
    if (zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isString(targetNode)) {
      targetNode = root.getNodeById(targetNode);
    }
    if (targetNode && root.contains(targetNode)) {
      return {
        node: targetNode
      };
    }
    var targetNodeId = payload.targetNodeId;
    if (targetNodeId != null && (targetNode = root.getNodeById(targetNodeId))) {
      return {
        node: targetNode
      };
    }
  }
}
// Not includes the given node at the last item.
function getPathToRoot(node) {
  var path = [];
  while (node) {
    node = node.parentNode;
    node && path.push(node);
  }
  return path.reverse();
}
function aboveViewRoot(viewRoot, node) {
  var viewPath = getPathToRoot(viewRoot);
  return zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.indexOf(viewPath, node) >= 0;
}
// From root to the input node (the input node will be included).
function wrapTreePathInfo(node, seriesModel) {
  var treePathInfo = [];
  while (node) {
    var nodeDataIndex = node.dataIndex;
    treePathInfo.push({
      name: node.name,
      dataIndex: nodeDataIndex,
      value: seriesModel.getRawValue(nodeDataIndex)
    });
    node = node.parentNode;
  }
  treePathInfo.reverse();
  return treePathInfo;
}

}),
41306: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  WhiskerBoxCommonMixin: function() { return WhiskerBoxCommonMixin; }
});
/* ESM import */var _createSeriesDataSimply_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86011);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96585);
/* ESM import */var _data_helper_dimensionHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31426);
/* ESM import */var _data_helper_sourceHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(490);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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




var WhiskerBoxCommonMixin = /** @class */function () {
  function WhiskerBoxCommonMixin() {}
  /**
   * @private
   */
  WhiskerBoxCommonMixin.prototype._hasEncodeRule = function (key) {
    var encodeRules = this.getEncode();
    return encodeRules && encodeRules.get(key) != null;
  };
  /**
   * @override
   */
  WhiskerBoxCommonMixin.prototype.getInitialData = function (option, ecModel) {
    // When both types of xAxis and yAxis are 'value', layout is
    // needed to be specified by user. Otherwise, layout can be
    // judged by which axis is category.
    var ordinalMeta;
    var xAxisModel = ecModel.getComponent('xAxis', this.get('xAxisIndex'));
    var yAxisModel = ecModel.getComponent('yAxis', this.get('yAxisIndex'));
    var xAxisType = xAxisModel.get('type');
    var yAxisType = yAxisModel.get('type');
    var addOrdinal;
    // FIXME
    // Consider time axis.
    if (xAxisType === 'category') {
      option.layout = 'horizontal';
      ordinalMeta = xAxisModel.getOrdinalMeta();
      addOrdinal = !this._hasEncodeRule('x');
    } else if (yAxisType === 'category') {
      option.layout = 'vertical';
      ordinalMeta = yAxisModel.getOrdinalMeta();
      addOrdinal = !this._hasEncodeRule('y');
    } else {
      option.layout = option.layout || 'horizontal';
    }
    var coordDims = ['x', 'y'];
    var baseAxisDimIndex = option.layout === 'horizontal' ? 0 : 1;
    var baseAxisDim = this._baseAxisDim = coordDims[baseAxisDimIndex];
    var otherAxisDim = coordDims[1 - baseAxisDimIndex];
    var axisModels = [xAxisModel, yAxisModel];
    var baseAxisType = axisModels[baseAxisDimIndex].get('type');
    var otherAxisType = axisModels[1 - baseAxisDimIndex].get('type');
    var data = option.data;
    // Clone a new data for next setOption({}) usage.
    // Avoid modifying current data will affect further update.
    if (data && addOrdinal) {
      var newOptionData_1 = [];
      zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each(data, function (item, index) {
        var newItem;
        if (zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isArray(item)) {
          newItem = item.slice();
          // Modify current using data.
          item.unshift(index);
        } else if (zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isArray(item.value)) {
          newItem = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.extend({}, item);
          newItem.value = newItem.value.slice();
          // Modify current using data.
          item.value.unshift(index);
        } else {
          newItem = item;
        }
        newOptionData_1.push(newItem);
      });
      option.data = newOptionData_1;
    }
    var defaultValueDimensions = this.defaultValueDimensions;
    var coordDimensions = [{
      name: baseAxisDim,
      type: (0,_data_helper_dimensionHelper_js__WEBPACK_IMPORTED_MODULE_1__.getDimensionTypeByAxis)(baseAxisType),
      ordinalMeta: ordinalMeta,
      otherDims: {
        tooltip: false,
        itemName: 0
      },
      dimsDef: ['base']
    }, {
      name: otherAxisDim,
      type: (0,_data_helper_dimensionHelper_js__WEBPACK_IMPORTED_MODULE_1__.getDimensionTypeByAxis)(otherAxisType),
      dimsDef: defaultValueDimensions.slice()
    }];
    return (0,_createSeriesDataSimply_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, {
      coordDimensions: coordDimensions,
      dimensionsCount: defaultValueDimensions.length + 1,
      encodeDefaulter: zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.curry(_data_helper_sourceHelper_js__WEBPACK_IMPORTED_MODULE_3__.makeSeriesEncodeForAxisCoordSys, coordDimensions, this)
    });
  };
  /**
   * If horizontal, base axis is x, otherwise y.
   * @override
   */
  WhiskerBoxCommonMixin.prototype.getBaseAxis = function () {
    var dim = this._baseAxisDim;
    return this.ecModel.getComponent(dim + 'Axis', this.get(dim + 'AxisIndex')).axis;
  };
  return WhiskerBoxCommonMixin;
}();
;


}),

}]);