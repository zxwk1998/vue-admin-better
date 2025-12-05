/*!
 * vue-admin-better
 * GitHub: https://github.com/zxwk1998/vue-admin-better
 * Gitee: https://gitee.com/chu1204505056/vue-admin-better
 *
 * 版权所有 (c) 2025 vue-admin-better
 * 本项目使用 MIT 许可证
 * 构建时间: 2025-12-5 15:46:46
 */
"use strict";
(self["webpackChunkvue_admin_better"] = self["webpackChunkvue_admin_better"] || []).push([["2643"], {
80855: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var zrender_lib_core_util_js__rspack_import_2 = __webpack_require__(9774);
/* import */ var _util_number_js__rspack_import_0 = __webpack_require__(64782);
/* import */ var _axisTickLabelBuilder_js__rspack_import_1 = __webpack_require__(59511);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/



var NORMALIZED_EXTENT = [0, 1];
/**
 * Base class of Axis.
 *
 * Lifetime: recreate for each main process.
 * [NOTICE]: Some caches is stored on the axis instance (see `axisTickLabelBuilder.ts`)
 *  which is based on this lifetime.
 */
var Axis = /** @class */function () {
  function Axis(dim, scale, extent) {
    this.onBand = false;
    // Make sure that `extent[0] > extent[1]` only if `inverse: true`.
    // `inverse` can be inferred by `extent` unless `extent[0] === extent[1]`.
    this.inverse = false;
    this.dim = dim;
    this.scale = scale;
    this._extent = extent || [0, 0];
  }
  /**
   * If axis extent contain given coord
   */
  Axis.prototype.contain = function (coord) {
    var extent = this._extent;
    var min = Math.min(extent[0], extent[1]);
    var max = Math.max(extent[0], extent[1]);
    return coord >= min && coord <= max;
  };
  /**
   * If axis extent contain given data
   */
  Axis.prototype.containData = function (data) {
    return this.scale.contain(this.scale.parse(data));
  };
  /**
   * Get coord extent.
   */
  Axis.prototype.getExtent = function () {
    return this._extent.slice();
  };
  /**
   * Get precision used for formatting
   */
  Axis.prototype.getPixelPrecision = function (dataExtent) {
    return (0,_util_number_js__rspack_import_0.getPixelPrecision)(dataExtent || this.scale.getExtent(), this._extent);
  };
  /**
   * Set coord extent
   */
  Axis.prototype.setExtent = function (start, end) {
    var extent = this._extent;
    extent[0] = start;
    extent[1] = end;
  };
  /**
   * Convert data to coord. Data is the rank if it has an ordinal scale
   */
  Axis.prototype.dataToCoord = function (data, clamp) {
    var extent = this._extent;
    var scale = this.scale;
    data = scale.normalize(scale.parse(data));
    if (this.onBand && scale.type === 'ordinal') {
      extent = extent.slice();
      fixExtentWithBands(extent, scale.count());
    }
    return (0,_util_number_js__rspack_import_0.linearMap)(data, NORMALIZED_EXTENT, extent, clamp);
  };
  /**
   * Convert coord to data. Data is the rank if it has an ordinal scale
   */
  Axis.prototype.coordToData = function (coord, clamp) {
    var extent = this._extent;
    var scale = this.scale;
    if (this.onBand && scale.type === 'ordinal') {
      extent = extent.slice();
      fixExtentWithBands(extent, scale.count());
    }
    var t = (0,_util_number_js__rspack_import_0.linearMap)(coord, extent, NORMALIZED_EXTENT, clamp);
    return this.scale.scale(t);
  };
  /**
   * Convert pixel point to data in axis
   */
  Axis.prototype.pointToData = function (point, clamp) {
    // Should be implemented in derived class if necessary.
    return;
  };
  /**
   * Different from `zrUtil.map(axis.getTicks(), axis.dataToCoord, axis)`,
   * `axis.getTicksCoords` considers `onBand`, which is used by
   * `boundaryGap:true` of category axis and splitLine and splitArea.
   * @param opt.tickModel default: axis.model.getModel('axisTick')
   * @param opt.clamp If `true`, the first and the last
   *        tick must be at the axis end points. Otherwise, clip ticks
   *        that outside the axis extent.
   */
  Axis.prototype.getTicksCoords = function (opt) {
    opt = opt || {};
    var tickModel = opt.tickModel || this.getTickModel();
    var result = (0,_axisTickLabelBuilder_js__rspack_import_1.createAxisTicks)(this, tickModel, {
      breakTicks: opt.breakTicks,
      pruneByBreak: opt.pruneByBreak
    });
    var ticks = result.ticks;
    var ticksCoords = (0,zrender_lib_core_util_js__rspack_import_2.map)(ticks, function (tickVal) {
      return {
        coord: this.dataToCoord(this.scale.type === 'ordinal' ? this.scale.getRawOrdinalNumber(tickVal) : tickVal),
        tickValue: tickVal
      };
    }, this);
    var alignWithLabel = tickModel.get('alignWithLabel');
    fixOnBandTicksCoords(this, ticksCoords, alignWithLabel, opt.clamp);
    return ticksCoords;
  };
  Axis.prototype.getMinorTicksCoords = function () {
    if (this.scale.type === 'ordinal') {
      // Category axis doesn't support minor ticks
      return [];
    }
    var minorTickModel = this.model.getModel('minorTick');
    var splitNumber = minorTickModel.get('splitNumber');
    // Protection.
    if (!(splitNumber > 0 && splitNumber < 100)) {
      splitNumber = 5;
    }
    var minorTicks = this.scale.getMinorTicks(splitNumber);
    var minorTicksCoords = (0,zrender_lib_core_util_js__rspack_import_2.map)(minorTicks, function (minorTicksGroup) {
      return (0,zrender_lib_core_util_js__rspack_import_2.map)(minorTicksGroup, function (minorTick) {
        return {
          coord: this.dataToCoord(minorTick),
          tickValue: minorTick
        };
      }, this);
    }, this);
    return minorTicksCoords;
  };
  Axis.prototype.getViewLabels = function (ctx) {
    ctx = ctx || (0,_axisTickLabelBuilder_js__rspack_import_1.createAxisLabelsComputingContext)(_axisTickLabelBuilder_js__rspack_import_1.AxisTickLabelComputingKind.determine);
    return (0,_axisTickLabelBuilder_js__rspack_import_1.createAxisLabels)(this, ctx).labels;
  };
  Axis.prototype.getLabelModel = function () {
    return this.model.getModel('axisLabel');
  };
  /**
   * Notice here we only get the default tick model. For splitLine
   * or splitArea, we should pass the splitLineModel or splitAreaModel
   * manually when calling `getTicksCoords`.
   * In GL, this method may be overridden to:
   * `axisModel.getModel('axisTick', grid3DModel.getModel('axisTick'));`
   */
  Axis.prototype.getTickModel = function () {
    return this.model.getModel('axisTick');
  };
  /**
   * Get width of band
   */
  Axis.prototype.getBandWidth = function () {
    var axisExtent = this._extent;
    var dataExtent = this.scale.getExtent();
    var len = dataExtent[1] - dataExtent[0] + (this.onBand ? 1 : 0);
    // Fix #2728, avoid NaN when only one data.
    len === 0 && (len = 1);
    var size = Math.abs(axisExtent[1] - axisExtent[0]);
    return Math.abs(size) / len;
  };
  /**
   * Only be called in category axis.
   * Can be overridden, consider other axes like in 3D.
   * @return Auto interval for cateogry axis tick and label
   */
  Axis.prototype.calculateCategoryInterval = function (ctx) {
    ctx = ctx || (0,_axisTickLabelBuilder_js__rspack_import_1.createAxisLabelsComputingContext)(_axisTickLabelBuilder_js__rspack_import_1.AxisTickLabelComputingKind.determine);
    return (0,_axisTickLabelBuilder_js__rspack_import_1.calculateCategoryInterval)(this, ctx);
  };
  return Axis;
}();
function fixExtentWithBands(extent, nTick) {
  var size = extent[1] - extent[0];
  var len = nTick;
  var margin = size / len / 2;
  extent[0] += margin;
  extent[1] -= margin;
}
// If axis has labels [1, 2, 3, 4]. Bands on the axis are
// |---1---|---2---|---3---|---4---|.
// So the displayed ticks and splitLine/splitArea should between
// each data item, otherwise cause misleading (e.g., split tow bars
// of a single data item when there are two bar series).
// Also consider if tickCategoryInterval > 0 and onBand, ticks and
// splitLine/spliteArea should layout appropriately corresponding
// to displayed labels. (So we should not use `getBandWidth` in this
// case).
function fixOnBandTicksCoords(axis, ticksCoords, alignWithLabel, clamp) {
  var ticksLen = ticksCoords.length;
  if (!axis.onBand || alignWithLabel || !ticksLen) {
    return;
  }
  var axisExtent = axis.getExtent();
  var last;
  var diffSize;
  if (ticksLen === 1) {
    ticksCoords[0].coord = axisExtent[0];
    ticksCoords[0].onBand = true;
    last = ticksCoords[1] = {
      coord: axisExtent[1],
      tickValue: ticksCoords[0].tickValue,
      onBand: true
    };
  } else {
    var crossLen = ticksCoords[ticksLen - 1].tickValue - ticksCoords[0].tickValue;
    var shift_1 = (ticksCoords[ticksLen - 1].coord - ticksCoords[0].coord) / crossLen;
    (0,zrender_lib_core_util_js__rspack_import_2.each)(ticksCoords, function (ticksItem) {
      ticksItem.coord -= shift_1 / 2;
      ticksItem.onBand = true;
    });
    var dataExtent = axis.scale.getExtent();
    diffSize = 1 + dataExtent[1] - ticksCoords[ticksLen - 1].tickValue;
    last = {
      coord: ticksCoords[ticksLen - 1].coord + shift_1 * diffSize,
      tickValue: dataExtent[1] + 1,
      onBand: true
    };
    ticksCoords.push(last);
  }
  var inverse = axisExtent[0] > axisExtent[1];
  // Handling clamp.
  if (littleThan(ticksCoords[0].coord, axisExtent[0])) {
    clamp ? ticksCoords[0].coord = axisExtent[0] : ticksCoords.shift();
  }
  if (clamp && littleThan(axisExtent[0], ticksCoords[0].coord)) {
    ticksCoords.unshift({
      coord: axisExtent[0],
      onBand: true
    });
  }
  if (littleThan(axisExtent[1], last.coord)) {
    clamp ? last.coord = axisExtent[1] : ticksCoords.pop();
  }
  if (clamp && littleThan(last.coord, axisExtent[1])) {
    ticksCoords.push({
      coord: axisExtent[1],
      onBand: true
    });
  }
  function littleThan(a, b) {
    // Avoid rounding error cause calculated tick coord different with extent.
    // It may cause an extra unnecessary tick added.
    a = (0,_util_number_js__rspack_import_0.round)(a);
    b = (0,_util_number_js__rspack_import_0.round)(b);
    return inverse ? a > b : a < b;
  }
}
/* export default */ __webpack_exports__["default"] = (Axis);

}),
92081: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  isCoordinateSystemType: function() { return isCoordinateSystemType; }
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
function isCoordinateSystemType(coordSys, type) {
  return coordSys.type === type;
}

}),
28547: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var tslib__rspack_import_2 = __webpack_require__(2492);
/* import */ var zrender_lib_core_vector_js__rspack_import_0 = __webpack_require__(44721);
/* import */ var zrender_lib_core_matrix_js__rspack_import_7 = __webpack_require__(46239);
/* import */ var zrender_lib_core_BoundingRect_js__rspack_import_3 = __webpack_require__(7544);
/* import */ var zrender_lib_core_Transformable_js__rspack_import_1 = __webpack_require__(30128);
/* import */ var _util_number_js__rspack_import_4 = __webpack_require__(64782);
/* import */ var zrender_lib_core_util_js__rspack_import_5 = __webpack_require__(9774);
/* import */ var _component_helper_roamHelper_js__rspack_import_6 = __webpack_require__(5686);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

/**
 * Simple view coordinate system
 * Mapping given x, y to transformd view x, y
 */







var v2ApplyTransform = zrender_lib_core_vector_js__rspack_import_0.applyTransform;
var View = /** @class */function (_super) {
  (0,tslib__rspack_import_2.__extends)(View, _super);
  function View(name, opt) {
    var _this = _super.call(this) || this;
    _this.type = 'view';
    _this.dimensions = ['x', 'y'];
    /**
     * Represents the transform brought by roam/zoom.
     * If `View['_viewRect']` applies roam transform,
     * we can get the final displayed rect.
     */
    _this._roamTransformable = new zrender_lib_core_Transformable_js__rspack_import_1["default"]();
    /**
     * Represents the transform from `View['_rect']` to `View['_viewRect']`.
     */
    _this._rawTransformable = new zrender_lib_core_Transformable_js__rspack_import_1["default"]();
    _this.name = name;
    _this._opt = opt;
    return _this;
  }
  View.prototype.setBoundingRect = function (x, y, width, height) {
    this._rect = new zrender_lib_core_BoundingRect_js__rspack_import_3["default"](x, y, width, height);
    this._updateCenterAndZoom();
    return this._rect;
  };
  View.prototype.getBoundingRect = function () {
    return this._rect;
  };
  /**
   * If no need to transform `View['_rect']` to `View['_viewRect']`, the calling of
   * `setViewRect` can be omitted.
   */
  View.prototype.setViewRect = function (x, y, width, height) {
    this._transformTo(x, y, width, height);
    this._viewRect = new zrender_lib_core_BoundingRect_js__rspack_import_3["default"](x, y, width, height);
  };
  /**
   * Transformed to particular position and size
   */
  View.prototype._transformTo = function (x, y, width, height) {
    var rect = this.getBoundingRect();
    var rawTransform = this._rawTransformable;
    rawTransform.transform = rect.calculateTransform(new zrender_lib_core_BoundingRect_js__rspack_import_3["default"](x, y, width, height));
    var rawParent = rawTransform.parent;
    rawTransform.parent = null;
    rawTransform.decomposeTransform();
    rawTransform.parent = rawParent;
    this._updateTransform();
  };
  /**
   * [NOTICE]
   *  The definition of this center has always been irrelevant to some other series center like
   *  'series-pie.center' - this center is a point on the same coord sys as `View['_rect'].x/y`,
   *  rather than canvas viewport, and the unit is not necessarily pixel (e.g., in geo case).
   *  @see {View['_center']} for details.
   */
  View.prototype.setCenter = function (centerCoord) {
    // #16904 introcuded percentage string here, such as '33%'. But it was based on canvas
    // width/height, which is not reasonable - the unit may incorrect, and it is unpredictable if
    // the `View['_rect']` is not calculated based on the current canvas rect. Therefore the percentage
    // value is changed to based on `View['_rect'].width/height` since v6. Under this definition, users
    // can use '0%' to map the top-left of `View['_rect']` to the center of `View['_viewRect']`.
    var opt = this._opt;
    if (opt && opt.api && opt.ecModel && opt.ecModel.getShallow('legacyViewCoordSysCenterBase') && centerCoord) {
      centerCoord = [(0,_util_number_js__rspack_import_4.parsePercent)(centerCoord[0], opt.api.getWidth()), (0,_util_number_js__rspack_import_4.parsePercent)(centerCoord[1], opt.api.getWidth())];
    }
    this._centerOption = (0,zrender_lib_core_util_js__rspack_import_5.clone)(centerCoord);
    this._updateCenterAndZoom();
  };
  View.prototype.setZoom = function (zoom) {
    this._zoom = (0,_component_helper_roamHelper_js__rspack_import_6.clampByZoomLimit)(zoom || 1, this.zoomLimit);
    this._updateCenterAndZoom();
  };
  /**
   * Get default center without roam
   */
  View.prototype.getDefaultCenter = function () {
    // Rect before any transform
    var rawRect = this.getBoundingRect();
    var cx = rawRect.x + rawRect.width / 2;
    var cy = rawRect.y + rawRect.height / 2;
    return [cx, cy];
  };
  View.prototype.getCenter = function () {
    return this._center || this.getDefaultCenter();
  };
  View.prototype.getZoom = function () {
    return this._zoom || 1;
  };
  View.prototype.getRoamTransform = function () {
    return this._roamTransformable.getLocalTransform();
  };
  /**
   * Ensure this method is idempotent, since it should be called when
   * every relevant prop (e.g. _centerOption/_zoom/_rect/_viewRect) changed.
   */
  View.prototype._updateCenterAndZoom = function () {
    var centerOption = this._centerOption;
    var rect = this._rect;
    if (centerOption && rect) {
      this._center = [(0,_util_number_js__rspack_import_4.parsePercent)(centerOption[0], rect.width, rect.x), (0,_util_number_js__rspack_import_4.parsePercent)(centerOption[1], rect.height, rect.y)];
    }
    // Must update after view transform updated
    var rawTransformMatrix = this._rawTransformable.getLocalTransform();
    var roamTransform = this._roamTransformable;
    var defaultCenter = this.getDefaultCenter();
    var center = this.getCenter();
    var zoom = this.getZoom();
    center = zrender_lib_core_vector_js__rspack_import_0.applyTransform([], center, rawTransformMatrix);
    defaultCenter = zrender_lib_core_vector_js__rspack_import_0.applyTransform([], defaultCenter, rawTransformMatrix);
    roamTransform.originX = center[0];
    roamTransform.originY = center[1];
    roamTransform.x = defaultCenter[0] - center[0];
    roamTransform.y = defaultCenter[1] - center[1];
    roamTransform.scaleX = roamTransform.scaleY = zoom;
    this._updateTransform();
  };
  /**
   * Update transform props on `this` based on the current
   * `this._roamTransformable` and `this._rawTransformable`.
   */
  View.prototype._updateTransform = function () {
    var roamTransformable = this._roamTransformable;
    var rawTransformable = this._rawTransformable;
    rawTransformable.parent = roamTransformable;
    roamTransformable.updateTransform();
    rawTransformable.updateTransform();
    zrender_lib_core_matrix_js__rspack_import_7.copy(this.transform || (this.transform = []), rawTransformable.transform || zrender_lib_core_matrix_js__rspack_import_7.create());
    this._rawTransform = rawTransformable.getLocalTransform();
    this.invTransform = this.invTransform || [];
    zrender_lib_core_matrix_js__rspack_import_7.invert(this.invTransform, this.transform);
    this.decomposeTransform();
  };
  View.prototype.getTransformInfo = function () {
    var rawTransformable = this._rawTransformable;
    var roamTransformable = this._roamTransformable;
    // Because roamTransformabel has `originX/originY` modified,
    // but the caller of `getTransformInfo` can not handle `originX/originY`,
    // so need to recalculate them.
    var dummyTransformable = new zrender_lib_core_Transformable_js__rspack_import_1["default"]();
    dummyTransformable.transform = roamTransformable.transform;
    dummyTransformable.decomposeTransform();
    return {
      roam: {
        x: dummyTransformable.x,
        y: dummyTransformable.y,
        scaleX: dummyTransformable.scaleX,
        scaleY: dummyTransformable.scaleY
      },
      raw: {
        x: rawTransformable.x,
        y: rawTransformable.y,
        scaleX: rawTransformable.scaleX,
        scaleY: rawTransformable.scaleY
      }
    };
  };
  View.prototype.getViewRect = function () {
    return this._viewRect;
  };
  /**
   * Get view rect after roam transform
   */
  View.prototype.getViewRectAfterRoam = function () {
    var rect = this.getBoundingRect().clone();
    rect.applyTransform(this.transform);
    return rect;
  };
  /**
   * Convert a single (lon, lat) data item to (x, y) point.
   */
  View.prototype.dataToPoint = function (data, noRoam, out) {
    var transform = noRoam ? this._rawTransform : this.transform;
    out = out || [];
    return transform ? v2ApplyTransform(out, data, transform) : zrender_lib_core_vector_js__rspack_import_0.copy(out, data);
  };
  /**
   * Convert a (x, y) point to (lon, lat) data
   */
  View.prototype.pointToData = function (point, reserved, out) {
    out = out || [];
    var invTransform = this.invTransform;
    return invTransform ? v2ApplyTransform(out, point, invTransform) : (out[0] = point[0], out[1] = point[1], out);
  };
  View.prototype.convertToPixel = function (ecModel, finder, value) {
    var coordSys = getCoordSys(finder);
    return coordSys === this ? coordSys.dataToPoint(value) : null;
  };
  View.prototype.convertFromPixel = function (ecModel, finder, pixel) {
    var coordSys = getCoordSys(finder);
    return coordSys === this ? coordSys.pointToData(pixel) : null;
  };
  /**
   * @implements
   */
  View.prototype.containPoint = function (point) {
    return this.getViewRectAfterRoam().contain(point[0], point[1]);
  };
  View.dimensions = ['x', 'y'];
  return View;
}(zrender_lib_core_Transformable_js__rspack_import_1["default"]);
function getCoordSys(finder) {
  var seriesModel = finder.seriesModel;
  return seriesModel ? seriesModel.coordinateSystem : null; // e.g., graph.
}
/* export default */ __webpack_exports__["default"] = (View);

}),
35590: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  alignScaleTicks: function() { return alignScaleTicks; }
});
/* import */ var _util_number_js__rspack_import_3 = __webpack_require__(64782);
/* import */ var _scale_Interval_js__rspack_import_0 = __webpack_require__(65818);
/* import */ var _axisHelper_js__rspack_import_1 = __webpack_require__(62159);
/* import */ var _scale_helper_js__rspack_import_2 = __webpack_require__(19111);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/





function alignScaleTicks(scale, axisModel, alignToScale) {
  var _a;
  var intervalScaleProto = _scale_Interval_js__rspack_import_0["default"].prototype;
  // NOTE: There is a precondition for log scale  here:
  // In log scale we store _interval and _extent of exponent value.
  // So if we use the method of InternalScale to set/get these data.
  // It process the exponent value, which is linear and what we want here.
  var alignToTicks = intervalScaleProto.getTicks.call(alignToScale);
  var alignToNicedTicks = intervalScaleProto.getTicks.call(alignToScale, {
    expandToNicedExtent: true
  });
  var alignToSplitNumber = alignToTicks.length - 1;
  var alignToInterval = intervalScaleProto.getInterval.call(alignToScale);
  var scaleExtent = (0,_axisHelper_js__rspack_import_1.getScaleExtent)(scale, axisModel);
  var rawExtent = scaleExtent.extent;
  var isMinFixed = scaleExtent.fixMin;
  var isMaxFixed = scaleExtent.fixMax;
  if (scale.type === 'log') {
    rawExtent = (0,_scale_helper_js__rspack_import_2.logTransform)(scale.base, rawExtent, true);
  }
  scale.setBreaksFromOption((0,_axisHelper_js__rspack_import_1.retrieveAxisBreaksOption)(axisModel));
  scale.setExtent(rawExtent[0], rawExtent[1]);
  scale.calcNiceExtent({
    splitNumber: alignToSplitNumber,
    fixMin: isMinFixed,
    fixMax: isMaxFixed
  });
  var extent = intervalScaleProto.getExtent.call(scale);
  // Need to update the rawExtent.
  // Because value in rawExtent may be not parsed. e.g. 'dataMin', 'dataMax'
  if (isMinFixed) {
    rawExtent[0] = extent[0];
  }
  if (isMaxFixed) {
    rawExtent[1] = extent[1];
  }
  var interval = intervalScaleProto.getInterval.call(scale);
  var min = rawExtent[0];
  var max = rawExtent[1];
  if (isMinFixed && isMaxFixed) {
    // User set min, max, divide to get new interval
    interval = (max - min) / alignToSplitNumber;
  } else if (isMinFixed) {
    max = rawExtent[0] + interval * alignToSplitNumber;
    // User set min, expand extent on the other side
    while (max < rawExtent[1] && isFinite(max) && isFinite(rawExtent[1])) {
      interval = (0,_scale_helper_js__rspack_import_2.increaseInterval)(interval);
      max = rawExtent[0] + interval * alignToSplitNumber;
    }
  } else if (isMaxFixed) {
    // User set max, expand extent on the other side
    min = rawExtent[1] - interval * alignToSplitNumber;
    while (min > rawExtent[0] && isFinite(min) && isFinite(rawExtent[0])) {
      interval = (0,_scale_helper_js__rspack_import_2.increaseInterval)(interval);
      min = rawExtent[1] - interval * alignToSplitNumber;
    }
  } else {
    var nicedSplitNumber = scale.getTicks().length - 1;
    if (nicedSplitNumber > alignToSplitNumber) {
      interval = (0,_scale_helper_js__rspack_import_2.increaseInterval)(interval);
    }
    var range = interval * alignToSplitNumber;
    max = Math.ceil(rawExtent[1] / interval) * interval;
    min = (0,_util_number_js__rspack_import_3.round)(max - range);
    // Not change the result that crossing zero.
    if (min < 0 && rawExtent[0] >= 0) {
      min = 0;
      max = (0,_util_number_js__rspack_import_3.round)(range);
    } else if (max > 0 && rawExtent[1] <= 0) {
      max = 0;
      min = -(0,_util_number_js__rspack_import_3.round)(range);
    }
  }
  // Adjust min, max based on the extent of alignTo. When min or max is set in alignTo scale
  var t0 = (alignToTicks[0].value - alignToNicedTicks[0].value) / alignToInterval;
  var t1 = (alignToTicks[alignToSplitNumber].value - alignToNicedTicks[alignToSplitNumber].value) / alignToInterval;
  // NOTE: Must in setExtent -> setInterval -> setNiceExtent order.
  intervalScaleProto.setExtent.call(scale, min + interval * t0, max + interval * t1);
  intervalScaleProto.setInterval.call(scale, interval);
  if (t0 || t1) {
    intervalScaleProto.setNiceExtent.call(scale, min + interval, max - interval);
  }
  if (false) { var ticks }
}

}),
96574: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var zrender_lib_core_util_js__rspack_import_1 = __webpack_require__(9774);
/* import */ var _visual_tokens_js__rspack_import_0 = __webpack_require__(87473);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


var defaultOption = {
  show: true,
  // zlevel: 0,
  z: 0,
  // Inverse the axis.
  inverse: false,
  // Axis name displayed.
  name: '',
  // 'start' | 'middle' | 'end'
  nameLocation: 'end',
  // By degree. By default auto rotate by nameLocation.
  nameRotate: null,
  nameTruncate: {
    maxWidth: null,
    ellipsis: '...',
    placeholder: '.'
  },
  // Use global text style by default.
  nameTextStyle: {
    // textMargin: never, // The default value will be specified based on `nameLocation`.
  },
  // The gap between axisName and axisLine.
  nameGap: 15,
  // Default `false` to support tooltip.
  silent: false,
  // Default `false` to avoid legacy user event listener fail.
  triggerEvent: false,
  tooltip: {
    show: false
  },
  axisPointer: {},
  axisLine: {
    show: true,
    onZero: true,
    onZeroAxisIndex: null,
    lineStyle: {
      color: _visual_tokens_js__rspack_import_0["default"].color.axisLine,
      width: 1,
      type: 'solid'
    },
    // The arrow at both ends the the axis.
    symbol: ['none', 'none'],
    symbolSize: [10, 15],
    breakLine: true
  },
  axisTick: {
    show: true,
    // Whether axisTick is inside the grid or outside the grid.
    inside: false,
    // The length of axisTick.
    length: 5,
    lineStyle: {
      width: 1
    }
  },
  axisLabel: {
    show: true,
    // Whether axisLabel is inside the grid or outside the grid.
    inside: false,
    rotate: 0,
    // true | false | null/undefined (auto)
    showMinLabel: null,
    // true | false | null/undefined (auto)
    showMaxLabel: null,
    margin: 8,
    // formatter: null,
    fontSize: 12,
    color: _visual_tokens_js__rspack_import_0["default"].color.axisLabel,
    // In scenarios like axis labels, when labels text's progression direction matches the label
    // layout direction (e.g., when all letters are in a single line), extra start/end margin is
    // needed to prevent the text from appearing visually joined. In the other case, when lables
    // are stacked (e.g., having rotation or horizontal labels on yAxis), the layout needs to be
    // compact, so NO extra top/bottom margin should be applied.
    textMargin: [0, 3]
  },
  splitLine: {
    show: true,
    showMinLine: true,
    showMaxLine: true,
    lineStyle: {
      color: _visual_tokens_js__rspack_import_0["default"].color.axisSplitLine,
      width: 1,
      type: 'solid'
    }
  },
  splitArea: {
    show: false,
    areaStyle: {
      color: [_visual_tokens_js__rspack_import_0["default"].color.backgroundTint, _visual_tokens_js__rspack_import_0["default"].color.backgroundTransparent]
    }
  },
  breakArea: {
    show: true,
    itemStyle: {
      color: _visual_tokens_js__rspack_import_0["default"].color.neutral00,
      // Break border color should be darker than the splitLine
      // because it has opacity and should be more prominent
      borderColor: _visual_tokens_js__rspack_import_0["default"].color.border,
      borderWidth: 1,
      borderType: [3, 3],
      opacity: 0.6
    },
    zigzagAmplitude: 4,
    zigzagMinSpan: 4,
    zigzagMaxSpan: 20,
    zigzagZ: 100,
    expandOnClick: true
  },
  breakLabelLayout: {
    moveOverlap: 'auto'
  }
};
var categoryAxis = zrender_lib_core_util_js__rspack_import_1.merge({
  // The gap at both ends of the axis. For categoryAxis, boolean.
  boundaryGap: true,
  // Set false to faster category collection.
  deduplication: null,
  jitter: 0,
  jitterOverlap: true,
  jitterMargin: 2,
  // splitArea: {
  // show: false
  // },
  splitLine: {
    show: false
  },
  axisTick: {
    // If tick is align with label when boundaryGap is true
    alignWithLabel: false,
    interval: 'auto',
    show: 'auto'
  },
  axisLabel: {
    interval: 'auto'
  }
}, defaultOption);
var valueAxis = zrender_lib_core_util_js__rspack_import_1.merge({
  boundaryGap: [0, 0],
  axisLine: {
    // Not shown when other axis is categoryAxis in cartesian
    show: 'auto'
  },
  axisTick: {
    // Not shown when other axis is categoryAxis in cartesian
    show: 'auto'
  },
  // TODO
  // min/max: [30, datamin, 60] or [20, datamin] or [datamin, 60]
  splitNumber: 5,
  minorTick: {
    // Minor tick, not available for cateogry axis.
    show: false,
    // Split number of minor ticks. The value should be in range of (0, 100)
    splitNumber: 5,
    // Length of minor tick
    length: 3,
    // Line style
    lineStyle: {
      // Default to be same with axisTick
    }
  },
  minorSplitLine: {
    show: false,
    lineStyle: {
      color: _visual_tokens_js__rspack_import_0["default"].color.axisMinorSplitLine,
      width: 1
    }
  }
}, defaultOption);
var timeAxis = zrender_lib_core_util_js__rspack_import_1.merge({
  splitNumber: 6,
  axisLabel: {
    // To eliminate labels that are not nice
    showMinLabel: false,
    showMaxLabel: false,
    rich: {
      primary: {
        fontWeight: 'bold'
      }
    }
  },
  splitLine: {
    show: false
  }
}, valueAxis);
var logAxis = zrender_lib_core_util_js__rspack_import_1.defaults({
  logBase: 10
}, valueAxis);
/* export default */ __webpack_exports__["default"] = ({
  category: categoryAxis,
  value: valueAxis,
  time: timeAxis,
  log: logAxis
});

}),
62159: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createScaleByModel: function() { return createScaleByModel; },
  getAxisRawValue: function() { return getAxisRawValue; },
  getDataDimensionsOnAxis: function() { return getDataDimensionsOnAxis; },
  getOptionCategoryInterval: function() { return getOptionCategoryInterval; },
  getScaleExtent: function() { return getScaleExtent; },
  ifAxisCrossZero: function() { return ifAxisCrossZero; },
  isNameLocationCenter: function() { return isNameLocationCenter; },
  makeLabelFormatter: function() { return makeLabelFormatter; },
  niceScaleExtent: function() { return niceScaleExtent; },
  retrieveAxisBreaksOption: function() { return retrieveAxisBreaksOption; },
  shouldAxisShow: function() { return shouldAxisShow; },
  shouldShowAllLabels: function() { return shouldShowAllLabels; },
  unionAxisExtentFromData: function() { return unionAxisExtentFromData; }
});
/* import */ var zrender_lib_core_util_js__rspack_import_2 = __webpack_require__(9774);
/* import */ var _scale_Ordinal_js__rspack_import_4 = __webpack_require__(50126);
/* import */ var _scale_Interval_js__rspack_import_7 = __webpack_require__(65818);
/* import */ var _scale_Scale_js__rspack_import_6 = __webpack_require__(5005);
/* import */ var _layout_barGrid_js__rspack_import_1 = __webpack_require__(97280);
/* import */ var _scale_Time_js__rspack_import_5 = __webpack_require__(72938);
/* import */ var _scale_Log_js__rspack_import_3 = __webpack_require__(67637);
/* import */ var _data_helper_dataStackHelper_js__rspack_import_10 = __webpack_require__(89528);
/* import */ var _scaleRawExtentInfo_js__rspack_import_0 = __webpack_require__(77646);
/* import */ var _util_time_js__rspack_import_8 = __webpack_require__(24566);
/* import */ var _scale_break_js__rspack_import_9 = __webpack_require__(8188);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/












/**
 * Get axis scale extent before niced.
 * Item of returned array can only be number (including Infinity and NaN).
 *
 * Caution:
 * Precondition of calling this method:
 * The scale extent has been initialized using series data extent via
 * `scale.setExtent` or `scale.unionExtentFromData`;
 */
function getScaleExtent(scale, model) {
  var scaleType = scale.type;
  var rawExtentResult = (0,_scaleRawExtentInfo_js__rspack_import_0.ensureScaleRawExtentInfo)(scale, model, scale.getExtent()).calculate();
  scale.setBlank(rawExtentResult.isBlank);
  var min = rawExtentResult.min;
  var max = rawExtentResult.max;
  // If bars are placed on a base axis of type time or interval account for axis boundary overflow and current axis
  // is base axis
  // FIXME
  // (1) Consider support value axis, where below zero and axis `onZero` should be handled properly.
  // (2) Refactor the logic with `barGrid`. Is it not need to `makeBarWidthAndOffsetInfo` twice with different extent?
  //     Should not depend on series type `bar`?
  // (3) Fix that might overlap when using dataZoom.
  // (4) Consider other chart types using `barGrid`?
  // See #6728, #4862, `test/bar-overflow-time-plot.html`
  var ecModel = model.ecModel;
  if (ecModel && scaleType === 'time' /* || scaleType === 'interval' */) {
    var barSeriesModels = (0,_layout_barGrid_js__rspack_import_1.prepareLayoutBarSeries)('bar', ecModel);
    var isBaseAxisAndHasBarSeries_1 = false;
    zrender_lib_core_util_js__rspack_import_2.each(barSeriesModels, function (seriesModel) {
      isBaseAxisAndHasBarSeries_1 = isBaseAxisAndHasBarSeries_1 || seriesModel.getBaseAxis() === model.axis;
    });
    if (isBaseAxisAndHasBarSeries_1) {
      // Calculate placement of bars on axis. TODO should be decoupled
      // with barLayout
      var barWidthAndOffset = (0,_layout_barGrid_js__rspack_import_1.makeColumnLayout)(barSeriesModels);
      // Adjust axis min and max to account for overflow
      var adjustedScale = adjustScaleForOverflow(min, max, model, barWidthAndOffset);
      min = adjustedScale.min;
      max = adjustedScale.max;
    }
  }
  return {
    extent: [min, max],
    // "fix" means "fixed", the value should not be
    // changed in the subsequent steps.
    fixMin: rawExtentResult.minFixed,
    fixMax: rawExtentResult.maxFixed
  };
}
function adjustScaleForOverflow(min, max, model,
// Only support cartesian coord yet.
barWidthAndOffset) {
  // Get Axis Length
  var axisExtent = model.axis.getExtent();
  var axisLength = Math.abs(axisExtent[1] - axisExtent[0]);
  // Get bars on current base axis and calculate min and max overflow
  var barsOnCurrentAxis = (0,_layout_barGrid_js__rspack_import_1.retrieveColumnLayout)(barWidthAndOffset, model.axis);
  if (barsOnCurrentAxis === undefined) {
    return {
      min: min,
      max: max
    };
  }
  var minOverflow = Infinity;
  zrender_lib_core_util_js__rspack_import_2.each(barsOnCurrentAxis, function (item) {
    minOverflow = Math.min(item.offset, minOverflow);
  });
  var maxOverflow = -Infinity;
  zrender_lib_core_util_js__rspack_import_2.each(barsOnCurrentAxis, function (item) {
    maxOverflow = Math.max(item.offset + item.width, maxOverflow);
  });
  minOverflow = Math.abs(minOverflow);
  maxOverflow = Math.abs(maxOverflow);
  var totalOverFlow = minOverflow + maxOverflow;
  // Calculate required buffer based on old range and overflow
  var oldRange = max - min;
  var oldRangePercentOfNew = 1 - (minOverflow + maxOverflow) / axisLength;
  var overflowBuffer = oldRange / oldRangePercentOfNew - oldRange;
  max += overflowBuffer * (maxOverflow / totalOverFlow);
  min -= overflowBuffer * (minOverflow / totalOverFlow);
  return {
    min: min,
    max: max
  };
}
// Precondition of calling this method:
// The scale extent has been initialized using series data extent via
// `scale.setExtent` or `scale.unionExtentFromData`;
function niceScaleExtent(scale, inModel) {
  var model = inModel;
  var extentInfo = getScaleExtent(scale, model);
  var extent = extentInfo.extent;
  var splitNumber = model.get('splitNumber');
  if (scale instanceof _scale_Log_js__rspack_import_3["default"]) {
    scale.base = model.get('logBase');
  }
  var scaleType = scale.type;
  var interval = model.get('interval');
  var isIntervalOrTime = scaleType === 'interval' || scaleType === 'time';
  scale.setBreaksFromOption(retrieveAxisBreaksOption(model));
  scale.setExtent(extent[0], extent[1]);
  scale.calcNiceExtent({
    splitNumber: splitNumber,
    fixMin: extentInfo.fixMin,
    fixMax: extentInfo.fixMax,
    minInterval: isIntervalOrTime ? model.get('minInterval') : null,
    maxInterval: isIntervalOrTime ? model.get('maxInterval') : null
  });
  // If some one specified the min, max. And the default calculated interval
  // is not good enough. He can specify the interval. It is often appeared
  // in angle axis with angle 0 - 360. Interval calculated in interval scale is hard
  // to be 60.
  // FIXME
  if (interval != null) {
    scale.setInterval && scale.setInterval(interval);
  }
}
/**
 * @param axisType Default retrieve from model.type
 */
function createScaleByModel(model, axisType) {
  axisType = axisType || model.get('type');
  if (axisType) {
    switch (axisType) {
      // Buildin scale
      case 'category':
        return new _scale_Ordinal_js__rspack_import_4["default"]({
          ordinalMeta: model.getOrdinalMeta ? model.getOrdinalMeta() : model.getCategories(),
          extent: [Infinity, -Infinity]
        });
      case 'time':
        return new _scale_Time_js__rspack_import_5["default"]({
          locale: model.ecModel.getLocaleModel(),
          useUTC: model.ecModel.get('useUTC')
        });
      default:
        // case 'value'/'interval', 'log', or others.
        return new (_scale_Scale_js__rspack_import_6["default"].getClass(axisType) || _scale_Interval_js__rspack_import_7["default"])();
    }
  }
}
/**
 * Check if the axis cross 0
 */
function ifAxisCrossZero(axis) {
  var dataExtent = axis.scale.getExtent();
  var min = dataExtent[0];
  var max = dataExtent[1];
  return !(min > 0 && max > 0 || min < 0 && max < 0);
}
/**
 * @param axis
 * @return Label formatter function.
 *         param: {number} tickValue,
 *         param: {number} idx, the index in all ticks.
 *                         If category axis, this param is not required.
 *         return: {string} label string.
 */
function makeLabelFormatter(axis) {
  var labelFormatter = axis.getLabelModel().get('formatter');
  if (axis.type === 'time') {
    var parsed_1 = (0,_util_time_js__rspack_import_8.parseTimeAxisLabelFormatter)(labelFormatter);
    return function (tick, idx) {
      return axis.scale.getFormattedLabel(tick, idx, parsed_1);
    };
  } else if (zrender_lib_core_util_js__rspack_import_2.isString(labelFormatter)) {
    return function (tick) {
      // For category axis, get raw value; for numeric axis,
      // get formatted label like '1,333,444'.
      var label = axis.scale.getLabel(tick);
      var text = labelFormatter.replace('{value}', label != null ? label : '');
      return text;
    };
  } else if (zrender_lib_core_util_js__rspack_import_2.isFunction(labelFormatter)) {
    if (axis.type === 'category') {
      return function (tick, idx) {
        // The original intention of `idx` is "the index of the tick in all ticks".
        // But the previous implementation of category axis do not consider the
        // `axisLabel.interval`, which cause that, for example, the `interval` is
        // `1`, then the ticks "name5", "name7", "name9" are displayed, where the
        // corresponding `idx` are `0`, `2`, `4`, but not `0`, `1`, `2`. So we keep
        // the definition here for back compatibility.
        return labelFormatter(getAxisRawValue(axis, tick), tick.value - axis.scale.getExtent()[0], null // Using `null` just for backward compat.
        );
      };
    }
    var scaleBreakHelper_1 = (0,_scale_break_js__rspack_import_9.getScaleBreakHelper)();
    return function (tick, idx) {
      // Using `null` just for backward compat. It's been found that in the `test/axis-customTicks.html`,
      // there is a formatter `function (value, index, revers = true) { ... }`. Although the third param
      // `revers` is incorrect and always `null`, changing it might introduce a breaking change.
      var extra = null;
      if (scaleBreakHelper_1) {
        extra = scaleBreakHelper_1.makeAxisLabelFormatterParamBreak(extra, tick["break"]);
      }
      return labelFormatter(getAxisRawValue(axis, tick), idx, extra);
    };
  } else {
    return function (tick) {
      return axis.scale.getLabel(tick);
    };
  }
}
function getAxisRawValue(axis, tick) {
  // In category axis with data zoom, tick is not the original
  // index of axis.data. So tick should not be exposed to user
  // in category axis.
  return axis.type === 'category' ? axis.scale.getLabel(tick) : tick.value;
}
/**
 * @param model axisLabelModel or axisTickModel
 * @return {number|String} Can be null|'auto'|number|function
 */
function getOptionCategoryInterval(model) {
  var interval = model.get('interval');
  return interval == null ? 'auto' : interval;
}
/**
 * Set `categoryInterval` as 0 implicitly indicates that
 * show all labels regardless of overlap.
 * @param {Object} axis axisModel.axis
 */
function shouldShowAllLabels(axis) {
  return axis.type === 'category' && getOptionCategoryInterval(axis.getLabelModel()) === 0;
}
function getDataDimensionsOnAxis(data, axisDim) {
  // Remove duplicated dat dimensions caused by `getStackedDimension`.
  var dataDimMap = {};
  // Currently `mapDimensionsAll` will contain stack result dimension ('__\0ecstackresult').
  // PENDING: is it reasonable? Do we need to remove the original dim from "coord dim" since
  // there has been stacked result dim?
  zrender_lib_core_util_js__rspack_import_2.each(data.mapDimensionsAll(axisDim), function (dataDim) {
    // For example, the extent of the original dimension
    // is [0.1, 0.5], the extent of the `stackResultDimension`
    // is [7, 9], the final extent should NOT include [0.1, 0.5],
    // because there is no graphic corresponding to [0.1, 0.5].
    // See the case in `test/area-stack.html` `main1`, where area line
    // stack needs `yAxis` not start from 0.
    dataDimMap[(0,_data_helper_dataStackHelper_js__rspack_import_10.getStackedDimension)(data, dataDim)] = true;
  });
  return zrender_lib_core_util_js__rspack_import_2.keys(dataDimMap);
}
function unionAxisExtentFromData(dataExtent, data, axisDim) {
  if (data) {
    zrender_lib_core_util_js__rspack_import_2.each(getDataDimensionsOnAxis(data, axisDim), function (dim) {
      var seriesExtent = data.getApproximateExtent(dim);
      seriesExtent[0] < dataExtent[0] && (dataExtent[0] = seriesExtent[0]);
      seriesExtent[1] > dataExtent[1] && (dataExtent[1] = seriesExtent[1]);
    });
  }
}
function isNameLocationCenter(nameLocation) {
  return nameLocation === 'middle' || nameLocation === 'center';
}
function shouldAxisShow(axisModel) {
  return axisModel.getShallow('show');
}
function retrieveAxisBreaksOption(model) {
  var option = model.get('breaks', true);
  if (option != null) {
    if (!(0,_scale_break_js__rspack_import_9.getScaleBreakHelper)()) {
      if (false) {}
      return undefined;
    }
    if (!isSupportAxisBreak(model.axis)) {
      if (false) {}
      return undefined;
    }
    return option;
  }
}
function isSupportAxisBreak(axis) {
  // The polar radius axis can also support break feasibly. Do not do it until the requirements are met.
  return (axis.dim === 'x' || axis.dim === 'y' || axis.dim === 'z' || axis.dim === 'single') && axis.type !== 'category';
}

}),
97238: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AxisModelCommonMixin: function() { return AxisModelCommonMixin; }
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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var AxisModelCommonMixin = /** @class */function () {
  function AxisModelCommonMixin() {}
  AxisModelCommonMixin.prototype.getNeedCrossZero = function () {
    var option = this.option;
    return !option.scale;
  };
  /**
   * Should be implemented by each axis model if necessary.
   * @return coordinate system model
   */
  AxisModelCommonMixin.prototype.getCoordSysModel = function () {
    return;
  };
  return AxisModelCommonMixin;
}();


}),
41381: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ axisModelCreator; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(2492);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisDefault.js
var axisDefault = __webpack_require__(96574);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/layout.js
var layout = __webpack_require__(88485);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/OrdinalMeta.js
var OrdinalMeta = __webpack_require__(49543);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisCommonTypes.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/
var AXIS_TYPES = {
  value: 1,
  category: 1,
  time: 1,
  log: 1
};
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(9774);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/axisBreakHelper.js
var axis_axisBreakHelper = __webpack_require__(874);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisModelCreator.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/







/**
 * Generate sub axis model class
 * @param axisName 'x' 'y' 'radius' 'angle' 'parallel' ...
 */
function axisModelCreator(registers, axisName, BaseAxisModelClass, extraDefaultOption) {
  (0,util.each)(AXIS_TYPES, function (v, axisType) {
    var defaultOption = (0,util.merge)((0,util.merge)({}, axisDefault["default"][axisType], true), extraDefaultOption, true);
    var AxisModel = /** @class */function (_super) {
      (0,tslib_es6.__extends)(AxisModel, _super);
      function AxisModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = axisName + 'Axis.' + axisType;
        return _this;
      }
      AxisModel.prototype.mergeDefaultAndTheme = function (option, ecModel) {
        var layoutMode = (0,layout.fetchLayoutMode)(this);
        var inputPositionParams = layoutMode ? (0,layout.getLayoutParams)(option) : {};
        var themeModel = ecModel.getTheme();
        (0,util.merge)(option, themeModel.get(axisType + 'Axis'));
        (0,util.merge)(option, this.getDefaultOption());
        option.type = getAxisType(option);
        if (layoutMode) {
          (0,layout.mergeLayoutParam)(option, inputPositionParams, layoutMode);
        }
      };
      AxisModel.prototype.optionUpdated = function () {
        var thisOption = this.option;
        if (thisOption.type === 'category') {
          this.__ordinalMeta = OrdinalMeta["default"].createByAxisModel(this);
        }
      };
      /**
       * Should not be called before all of 'getInitailData' finished.
       * Because categories are collected during initializing data.
       */
      AxisModel.prototype.getCategories = function (rawData) {
        var option = this.option;
        // FIXME
        // warning if called before all of 'getInitailData' finished.
        if (option.type === 'category') {
          if (rawData) {
            return option.data;
          }
          return this.__ordinalMeta.categories;
        }
      };
      AxisModel.prototype.getOrdinalMeta = function () {
        return this.__ordinalMeta;
      };
      AxisModel.prototype.updateAxisBreaks = function (payload) {
        var axisBreakHelper = (0,axis_axisBreakHelper.getAxisBreakHelper)();
        return axisBreakHelper ? axisBreakHelper.updateModelAxisBreak(this, payload) : {
          breaks: []
        };
      };
      AxisModel.type = axisName + 'Axis.' + axisType;
      AxisModel.defaultOption = defaultOption;
      return AxisModel;
    }(BaseAxisModelClass);
    registers.registerComponentModel(AxisModel);
  });
  registers.registerSubTypeDefaulter(axisName + 'Axis', getAxisType);
}
function getAxisType(option) {
  // Default axis with data is category axis
  return option.type || (option.data ? 'category' : 'value');
}

}),
59511: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AxisTickLabelComputingKind: function() { return AxisTickLabelComputingKind; },
  calculateCategoryInterval: function() { return calculateCategoryInterval; },
  createAxisLabels: function() { return createAxisLabels; },
  createAxisLabelsComputingContext: function() { return createAxisLabelsComputingContext; },
  createAxisTicks: function() { return createAxisTicks; }
});
/* import */ var zrender_lib_core_util_js__rspack_import_1 = __webpack_require__(9774);
/* import */ var zrender_lib_contain_text_js__rspack_import_3 = __webpack_require__(26066);
/* import */ var _util_model_js__rspack_import_0 = __webpack_require__(67698);
/* import */ var _axisHelper_js__rspack_import_2 = __webpack_require__(62159);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/




var modelInner = (0,_util_model_js__rspack_import_0.makeInner)();
var axisInner = (0,_util_model_js__rspack_import_0.makeInner)();
var AxisTickLabelComputingKind = {
  estimate: 1,
  determine: 2
};
function createAxisLabelsComputingContext(kind) {
  return {
    out: {
      noPxChangeTryDetermine: []
    },
    kind: kind
  };
}
function tickValuesToNumbers(axis, values) {
  var nums = zrender_lib_core_util_js__rspack_import_1.map(values, function (val) {
    return axis.scale.parse(val);
  });
  if (axis.type === 'time' && nums.length > 0) {
    // Time axis needs duplicate first/last tick (see TimeScale.getTicks())
    // The first and last tick/label don't get drawn
    nums.sort();
    nums.unshift(nums[0]);
    nums.push(nums[nums.length - 1]);
  }
  return nums;
}
function createAxisLabels(axis, ctx) {
  var custom = axis.getLabelModel().get('customValues');
  if (custom) {
    var labelFormatter_1 = (0,_axisHelper_js__rspack_import_2.makeLabelFormatter)(axis);
    var extent_1 = axis.scale.getExtent();
    var tickNumbers = tickValuesToNumbers(axis, custom);
    var ticks = zrender_lib_core_util_js__rspack_import_1.filter(tickNumbers, function (val) {
      return val >= extent_1[0] && val <= extent_1[1];
    });
    return {
      labels: zrender_lib_core_util_js__rspack_import_1.map(ticks, function (numval) {
        var tick = {
          value: numval
        };
        return {
          formattedLabel: labelFormatter_1(tick),
          rawLabel: axis.scale.getLabel(tick),
          tickValue: numval,
          time: undefined,
          "break": undefined
        };
      })
    };
  }
  // Only ordinal scale support tick interval
  return axis.type === 'category' ? makeCategoryLabels(axis, ctx) : makeRealNumberLabels(axis);
}
/**
 * @param tickModel For example, can be axisTick, splitLine, splitArea.
 */
function createAxisTicks(axis, tickModel, opt) {
  var custom = axis.getTickModel().get('customValues');
  if (custom) {
    var extent_2 = axis.scale.getExtent();
    var tickNumbers = tickValuesToNumbers(axis, custom);
    return {
      ticks: zrender_lib_core_util_js__rspack_import_1.filter(tickNumbers, function (val) {
        return val >= extent_2[0] && val <= extent_2[1];
      })
    };
  }
  // Only ordinal scale support tick interval
  return axis.type === 'category' ? makeCategoryTicks(axis, tickModel) : {
    ticks: zrender_lib_core_util_js__rspack_import_1.map(axis.scale.getTicks(opt), function (tick) {
      return tick.value;
    })
  };
}
function makeCategoryLabels(axis, ctx) {
  var labelModel = axis.getLabelModel();
  var result = makeCategoryLabelsActually(axis, labelModel, ctx);
  return !labelModel.get('show') || axis.scale.isBlank() ? {
    labels: []
  } : result;
}
function makeCategoryLabelsActually(axis, labelModel, ctx) {
  var labelsCache = ensureCategoryLabelCache(axis);
  var optionLabelInterval = (0,_axisHelper_js__rspack_import_2.getOptionCategoryInterval)(labelModel);
  var isEstimate = ctx.kind === AxisTickLabelComputingKind.estimate;
  // In AxisTickLabelComputingKind.estimate, the result likely varies during a single
  // pass of ec main process,due to the change of axisExtent, and will not be shared with
  // splitLine. Therefore no cache is used.
  if (!isEstimate) {
    // PENDING: check necessary?
    var result_1 = axisCacheGet(labelsCache, optionLabelInterval);
    if (result_1) {
      return result_1;
    }
  }
  var labels;
  var numericLabelInterval;
  if (zrender_lib_core_util_js__rspack_import_1.isFunction(optionLabelInterval)) {
    labels = makeLabelsByCustomizedCategoryInterval(axis, optionLabelInterval);
  } else {
    numericLabelInterval = optionLabelInterval === 'auto' ? makeAutoCategoryInterval(axis, ctx) : optionLabelInterval;
    labels = makeLabelsByNumericCategoryInterval(axis, numericLabelInterval);
  }
  var result = {
    labels: labels,
    labelCategoryInterval: numericLabelInterval
  };
  if (!isEstimate) {
    axisCacheSet(labelsCache, optionLabelInterval, result);
  } else {
    ctx.out.noPxChangeTryDetermine.push(function () {
      axisCacheSet(labelsCache, optionLabelInterval, result);
      return true;
    });
  }
  return result;
}
function makeCategoryTicks(axis, tickModel) {
  var ticksCache = ensureCategoryTickCache(axis);
  var optionTickInterval = (0,_axisHelper_js__rspack_import_2.getOptionCategoryInterval)(tickModel);
  var result = axisCacheGet(ticksCache, optionTickInterval);
  if (result) {
    return result;
  }
  var ticks;
  var tickCategoryInterval;
  // Optimize for the case that large category data and no label displayed,
  // we should not return all ticks.
  if (!tickModel.get('show') || axis.scale.isBlank()) {
    ticks = [];
  }
  if (zrender_lib_core_util_js__rspack_import_1.isFunction(optionTickInterval)) {
    ticks = makeLabelsByCustomizedCategoryInterval(axis, optionTickInterval, true);
  }
  // Always use label interval by default despite label show. Consider this
  // scenario, Use multiple grid with the xAxis sync, and only one xAxis shows
  // labels. `splitLine` and `axisTick` should be consistent in this case.
  else if (optionTickInterval === 'auto') {
    var labelsResult = makeCategoryLabelsActually(axis, axis.getLabelModel(), createAxisLabelsComputingContext(AxisTickLabelComputingKind.determine));
    tickCategoryInterval = labelsResult.labelCategoryInterval;
    ticks = zrender_lib_core_util_js__rspack_import_1.map(labelsResult.labels, function (labelItem) {
      return labelItem.tickValue;
    });
  } else {
    tickCategoryInterval = optionTickInterval;
    ticks = makeLabelsByNumericCategoryInterval(axis, tickCategoryInterval, true);
  }
  // Cache to avoid calling interval function repeatedly.
  return axisCacheSet(ticksCache, optionTickInterval, {
    ticks: ticks,
    tickCategoryInterval: tickCategoryInterval
  });
}
function makeRealNumberLabels(axis) {
  var ticks = axis.scale.getTicks();
  var labelFormatter = (0,_axisHelper_js__rspack_import_2.makeLabelFormatter)(axis);
  return {
    labels: zrender_lib_core_util_js__rspack_import_1.map(ticks, function (tick, idx) {
      return {
        formattedLabel: labelFormatter(tick, idx),
        rawLabel: axis.scale.getLabel(tick),
        tickValue: tick.value,
        time: tick.time,
        "break": tick["break"]
      };
    })
  };
}
// Large category data calculation is performance sensitive, and ticks and label probably will
// be fetched multiple times (e.g. shared by splitLine and axisTick). So we cache the result.
// axis is created each time during a ec process, so we do not need to clear cache.
var ensureCategoryTickCache = initAxisCacheMethod('axisTick');
var ensureCategoryLabelCache = initAxisCacheMethod('axisLabel');
/**
 * PENDING: refactor to JS Map? Because key can be a function or more complicated object, and
 * cache size always is small, and currently no JS Map object key polyfill, we use a simple
 * array cache instead of plain object hash.
 */
function initAxisCacheMethod(prop) {
  return function ensureCache(axis) {
    return axisInner(axis)[prop] || (axisInner(axis)[prop] = {
      list: []
    });
  };
}
function axisCacheGet(cache, key) {
  for (var i = 0; i < cache.list.length; i++) {
    if (cache.list[i].key === key) {
      return cache.list[i].value;
    }
  }
}
function axisCacheSet(cache, key, value) {
  cache.list.push({
    key: key,
    value: value
  });
  return value;
}
function makeAutoCategoryInterval(axis, ctx) {
  if (ctx.kind === AxisTickLabelComputingKind.estimate) {
    // Currently axisTick is not involved in estimate kind, and the result likely varies during a
    // single pass of ec main process, due to the change of axisExtent. Therefore no cache is used.
    var result_2 = axis.calculateCategoryInterval(ctx);
    ctx.out.noPxChangeTryDetermine.push(function () {
      axisInner(axis).autoInterval = result_2;
      return true;
    });
    return result_2;
  }
  // Both tick and label uses this result, cacah it to avoid recompute.
  var result = axisInner(axis).autoInterval;
  return result != null ? result : axisInner(axis).autoInterval = axis.calculateCategoryInterval(ctx);
}
/**
 * Calculate interval for category axis ticks and labels.
 * Use a stretegy to try to avoid overlapping.
 * To get precise result, at least one of `getRotate` and `isHorizontal`
 * should be implemented in axis.
 */
function calculateCategoryInterval(axis, ctx) {
  var kind = ctx.kind;
  var params = fetchAutoCategoryIntervalCalculationParams(axis);
  var labelFormatter = (0,_axisHelper_js__rspack_import_2.makeLabelFormatter)(axis);
  var rotation = (params.axisRotate - params.labelRotate) / 180 * Math.PI;
  var ordinalScale = axis.scale;
  var ordinalExtent = ordinalScale.getExtent();
  // Providing this method is for optimization:
  // avoid generating a long array by `getTicks`
  // in large category data case.
  var tickCount = ordinalScale.count();
  if (ordinalExtent[1] - ordinalExtent[0] < 1) {
    return 0;
  }
  var step = 1;
  // Simple optimization. Arbitrary value.
  var maxCount = 40;
  if (tickCount > maxCount) {
    step = Math.max(1, Math.floor(tickCount / maxCount));
  }
  var tickValue = ordinalExtent[0];
  var unitSpan = axis.dataToCoord(tickValue + 1) - axis.dataToCoord(tickValue);
  var unitW = Math.abs(unitSpan * Math.cos(rotation));
  var unitH = Math.abs(unitSpan * Math.sin(rotation));
  var maxW = 0;
  var maxH = 0;
  // Caution: Performance sensitive for large category data.
  // Consider dataZoom, we should make appropriate step to avoid O(n) loop.
  for (; tickValue <= ordinalExtent[1]; tickValue += step) {
    var width = 0;
    var height = 0;
    // Not precise, do not consider align and vertical align
    // and each distance from axis line yet.
    var rect = zrender_lib_contain_text_js__rspack_import_3.getBoundingRect(labelFormatter({
      value: tickValue
    }), params.font, 'center', 'top');
    // Magic number
    width = rect.width * 1.3;
    height = rect.height * 1.3;
    // Min size, void long loop.
    maxW = Math.max(maxW, width, 7);
    maxH = Math.max(maxH, height, 7);
  }
  var dw = maxW / unitW;
  var dh = maxH / unitH;
  // 0/0 is NaN, 1/0 is Infinity.
  isNaN(dw) && (dw = Infinity);
  isNaN(dh) && (dh = Infinity);
  var interval = Math.max(0, Math.floor(Math.min(dw, dh)));
  if (kind === AxisTickLabelComputingKind.estimate) {
    // In estimate kind, the inteval likely varies, thus do not erase the cache.
    ctx.out.noPxChangeTryDetermine.push(zrender_lib_core_util_js__rspack_import_1.bind(calculateCategoryIntervalTryDetermine, null, axis, interval, tickCount));
    return interval;
  }
  var lastInterval = calculateCategoryIntervalDealCache(axis, interval, tickCount);
  return lastInterval != null ? lastInterval : interval;
}
function calculateCategoryIntervalTryDetermine(axis, interval, tickCount) {
  return calculateCategoryIntervalDealCache(axis, interval, tickCount) == null;
}
// Return the lastInterval if need to use it, otherwise return NullUndefined and save cache.
function calculateCategoryIntervalDealCache(axis, interval, tickCount) {
  var cache = modelInner(axis.model);
  var axisExtent = axis.getExtent();
  var lastAutoInterval = cache.lastAutoInterval;
  var lastTickCount = cache.lastTickCount;
  // Use cache to keep interval stable while moving zoom window,
  // otherwise the calculated interval might jitter when the zoom
  // window size is close to the interval-changing size.
  // For example, if all of the axis labels are `a, b, c, d, e, f, g`.
  // The jitter will cause that sometimes the displayed labels are
  // `a, d, g` (interval: 2) sometimes `a, c, e`(interval: 1).
  if (lastAutoInterval != null && lastTickCount != null && Math.abs(lastAutoInterval - interval) <= 1 && Math.abs(lastTickCount - tickCount) <= 1
  // Always choose the bigger one, otherwise the critical
  // point is not the same when zooming in or zooming out.
  && lastAutoInterval > interval
  // If the axis change is caused by chart resize, the cache should not
  // be used. Otherwise some hidden labels might not be shown again.
  && cache.axisExtent0 === axisExtent[0] && cache.axisExtent1 === axisExtent[1]) {
    return lastAutoInterval;
  }
  // Only update cache if cache not used, otherwise the
  // changing of interval is too insensitive.
  else {
    cache.lastTickCount = tickCount;
    cache.lastAutoInterval = interval;
    cache.axisExtent0 = axisExtent[0];
    cache.axisExtent1 = axisExtent[1];
  }
}
function fetchAutoCategoryIntervalCalculationParams(axis) {
  var labelModel = axis.getLabelModel();
  return {
    axisRotate: axis.getRotate ? axis.getRotate() : axis.isHorizontal && !axis.isHorizontal() ? 90 : 0,
    labelRotate: labelModel.get('rotate') || 0,
    font: labelModel.getFont()
  };
}
function makeLabelsByNumericCategoryInterval(axis, categoryInterval, onlyTick) {
  var labelFormatter = (0,_axisHelper_js__rspack_import_2.makeLabelFormatter)(axis);
  var ordinalScale = axis.scale;
  var ordinalExtent = ordinalScale.getExtent();
  var labelModel = axis.getLabelModel();
  var result = [];
  // TODO: axisType: ordinalTime, pick the tick from each month/day/year/...
  var step = Math.max((categoryInterval || 0) + 1, 1);
  var startTick = ordinalExtent[0];
  var tickCount = ordinalScale.count();
  // Calculate start tick based on zero if possible to keep label consistent
  // while zooming and moving while interval > 0. Otherwise the selection
  // of displayable ticks and symbols probably keep changing.
  // 3 is empirical value.
  if (startTick !== 0 && step > 1 && tickCount / step > 2) {
    startTick = Math.round(Math.ceil(startTick / step) * step);
  }
  // (1) Only add min max label here but leave overlap checking
  // to render stage, which also ensure the returned list
  // suitable for splitLine and splitArea rendering.
  // (2) Scales except category always contain min max label so
  // do not need to perform this process.
  var showAllLabel = (0,_axisHelper_js__rspack_import_2.shouldShowAllLabels)(axis);
  var includeMinLabel = labelModel.get('showMinLabel') || showAllLabel;
  var includeMaxLabel = labelModel.get('showMaxLabel') || showAllLabel;
  if (includeMinLabel && startTick !== ordinalExtent[0]) {
    addItem(ordinalExtent[0]);
  }
  // Optimize: avoid generating large array by `ordinalScale.getTicks()`.
  var tickValue = startTick;
  for (; tickValue <= ordinalExtent[1]; tickValue += step) {
    addItem(tickValue);
  }
  if (includeMaxLabel && tickValue - step !== ordinalExtent[1]) {
    addItem(ordinalExtent[1]);
  }
  function addItem(tickValue) {
    var tickObj = {
      value: tickValue
    };
    result.push(onlyTick ? tickValue : {
      formattedLabel: labelFormatter(tickObj),
      rawLabel: ordinalScale.getLabel(tickObj),
      tickValue: tickValue,
      time: undefined,
      "break": undefined
    });
  }
  return result;
}
function makeLabelsByCustomizedCategoryInterval(axis, categoryInterval, onlyTick) {
  var ordinalScale = axis.scale;
  var labelFormatter = (0,_axisHelper_js__rspack_import_2.makeLabelFormatter)(axis);
  var result = [];
  zrender_lib_core_util_js__rspack_import_1.each(ordinalScale.getTicks(), function (tick) {
    var rawLabel = ordinalScale.getLabel(tick);
    var tickValue = tick.value;
    if (categoryInterval(tick.value, rawLabel)) {
      result.push(onlyTick ? tickValue : {
        formattedLabel: labelFormatter(tick),
        rawLabel: rawLabel,
        tickValue: tickValue,
        time: undefined,
        "break": undefined
      });
    }
  });
  return result;
}

}),
23181: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var zrender_lib_core_util_js__rspack_import_1 = __webpack_require__(9774);
/* import */ var _util_layout_js__rspack_import_2 = __webpack_require__(88485);
/* import */ var _util_number_js__rspack_import_0 = __webpack_require__(64782);
/* import */ var zrender_lib_core_BoundingRect_js__rspack_import_3 = __webpack_require__(7544);
/* import */ var _util_graphic_js__rspack_import_4 = __webpack_require__(87031);
/* import */ var _core_CoordinateSystem_js__rspack_import_5 = __webpack_require__(58241);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/






// (24*60*60*1000)
var PROXIMATE_ONE_DAY = 86400000;
var Calendar = /** @class */function () {
  function Calendar(calendarModel, ecModel, api) {
    this.type = 'calendar';
    this.dimensions = Calendar.dimensions;
    // Required in createListFromData
    this.getDimensionsInfo = Calendar.getDimensionsInfo;
    this._model = calendarModel;
    this._update(ecModel, api);
  }
  Calendar.getDimensionsInfo = function () {
    return [{
      name: 'time',
      type: 'time'
    }, 'value'];
  };
  Calendar.prototype.getRangeInfo = function () {
    return this._rangeInfo;
  };
  Calendar.prototype.getModel = function () {
    return this._model;
  };
  Calendar.prototype.getRect = function () {
    return this._rect;
  };
  Calendar.prototype.getCellWidth = function () {
    return this._sw;
  };
  Calendar.prototype.getCellHeight = function () {
    return this._sh;
  };
  Calendar.prototype.getOrient = function () {
    return this._orient;
  };
  /**
   * getFirstDayOfWeek
   *
   * @example
   *     0 : start at Sunday
   *     1 : start at Monday
   *
   * @return {number}
   */
  Calendar.prototype.getFirstDayOfWeek = function () {
    return this._firstDayOfWeek;
  };
  /**
   * get date info
   * }
   */
  Calendar.prototype.getDateInfo = function (date) {
    date = _util_number_js__rspack_import_0.parseDate(date);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var mStr = m < 10 ? '0' + m : '' + m;
    var d = date.getDate();
    var dStr = d < 10 ? '0' + d : '' + d;
    var day = date.getDay();
    day = Math.abs((day + 7 - this.getFirstDayOfWeek()) % 7);
    return {
      y: y + '',
      m: mStr,
      d: dStr,
      day: day,
      time: date.getTime(),
      formatedDate: y + '-' + mStr + '-' + dStr,
      date: date
    };
  };
  Calendar.prototype.getNextNDay = function (date, n) {
    n = n || 0;
    if (n === 0) {
      return this.getDateInfo(date);
    }
    date = new Date(this.getDateInfo(date).time);
    date.setDate(date.getDate() + n);
    return this.getDateInfo(date);
  };
  Calendar.prototype._update = function (ecModel, api) {
    this._firstDayOfWeek = +this._model.getModel('dayLabel').get('firstDay');
    this._orient = this._model.get('orient');
    this._lineWidth = this._model.getModel('itemStyle').getItemStyle().lineWidth || 0;
    this._rangeInfo = this._getRangeInfo(this._initRangeOption());
    var weeks = this._rangeInfo.weeks || 1;
    var whNames = ['width', 'height'];
    var cellSize = this._model.getCellSize().slice();
    var layoutParams = this._model.getBoxLayoutParams();
    var cellNumbers = this._orient === 'horizontal' ? [weeks, 7] : [7, weeks];
    zrender_lib_core_util_js__rspack_import_1.each([0, 1], function (idx) {
      if (cellSizeSpecified(cellSize, idx)) {
        layoutParams[whNames[idx]] = cellSize[idx] * cellNumbers[idx];
      }
    });
    var whGlobal = {
      width: api.getWidth(),
      height: api.getHeight()
    };
    var calendarRect = this._rect = _util_layout_js__rspack_import_2.getLayoutRect(layoutParams, whGlobal);
    zrender_lib_core_util_js__rspack_import_1.each([0, 1], function (idx) {
      if (!cellSizeSpecified(cellSize, idx)) {
        cellSize[idx] = calendarRect[whNames[idx]] / cellNumbers[idx];
      }
    });
    function cellSizeSpecified(cellSize, idx) {
      return cellSize[idx] != null && cellSize[idx] !== 'auto';
    }
    // Has been calculated out number.
    this._sw = cellSize[0];
    this._sh = cellSize[1];
  };
  /**
   * Convert a time data(time, value) item to (x, y) point.
   */
  // TODO Clamp of calendar is not same with cartesian coordinate systems.
  // It will return NaN if data exceeds.
  Calendar.prototype.dataToPoint = function (data, clamp, out) {
    out = out || [];
    zrender_lib_core_util_js__rspack_import_1.isArray(data) && (data = data[0]);
    clamp == null && (clamp = true);
    var dayInfo = this.getDateInfo(data);
    var range = this._rangeInfo;
    var date = dayInfo.formatedDate;
    // if not in range return [NaN, NaN]
    if (clamp && !(dayInfo.time >= range.start.time && dayInfo.time < range.end.time + PROXIMATE_ONE_DAY)) {
      out[0] = out[1] = NaN;
      return out;
    }
    var week = dayInfo.day;
    var nthWeek = this._getRangeInfo([range.start.time, date]).nthWeek;
    if (this._orient === 'vertical') {
      out[0] = this._rect.x + week * this._sw + this._sw / 2;
      out[1] = this._rect.y + nthWeek * this._sh + this._sh / 2;
    } else {
      out[0] = this._rect.x + nthWeek * this._sw + this._sw / 2;
      out[1] = this._rect.y + week * this._sh + this._sh / 2;
    }
    return out;
  };
  /**
   * Convert a (x, y) point to time data
   */
  Calendar.prototype.pointToData = function (point) {
    var date = this.pointToDate(point);
    return date && date.time;
  };
  Calendar.prototype.dataToLayout = function (data, clamp, out) {
    out = out || {};
    var rect = out.rect = out.rect || {};
    var contentRect = out.contentRect = out.contentRect || {};
    var point = this.dataToPoint(data, clamp);
    rect.x = point[0] - this._sw / 2;
    rect.y = point[1] - this._sh / 2;
    rect.width = this._sw;
    rect.height = this._sh;
    zrender_lib_core_BoundingRect_js__rspack_import_3["default"].copy(contentRect, rect);
    (0,_util_graphic_js__rspack_import_4.expandOrShrinkRect)(contentRect, this._lineWidth / 2, true, true);
    return out;
  };
  /**
   * Convert a time date item to (x, y) four point.
   */
  Calendar.prototype.dataToCalendarLayout = function (data, clamp) {
    var point = this.dataToPoint(data, clamp);
    return {
      center: point,
      tl: [point[0] - this._sw / 2, point[1] - this._sh / 2],
      tr: [point[0] + this._sw / 2, point[1] - this._sh / 2],
      br: [point[0] + this._sw / 2, point[1] + this._sh / 2],
      bl: [point[0] - this._sw / 2, point[1] + this._sh / 2]
    };
  };
  /**
   * Convert a (x, y) point to time date
   *
   * @param  {Array} point point
   * @return {Object}       date
   */
  Calendar.prototype.pointToDate = function (point) {
    var nthX = Math.floor((point[0] - this._rect.x) / this._sw) + 1;
    var nthY = Math.floor((point[1] - this._rect.y) / this._sh) + 1;
    var range = this._rangeInfo.range;
    if (this._orient === 'vertical') {
      return this._getDateByWeeksAndDay(nthY, nthX - 1, range);
    }
    return this._getDateByWeeksAndDay(nthX, nthY - 1, range);
  };
  Calendar.prototype.convertToPixel = function (ecModel, finder, value) {
    var coordSys = getCoordSys(finder);
    return coordSys === this ? coordSys.dataToPoint(value) : null;
  };
  Calendar.prototype.convertToLayout = function (ecModel, finder, value) {
    var coordSys = getCoordSys(finder);
    return coordSys === this ? coordSys.dataToLayout(value) : null;
  };
  Calendar.prototype.convertFromPixel = function (ecModel, finder, pixel) {
    var coordSys = getCoordSys(finder);
    return coordSys === this ? coordSys.pointToData(pixel) : null;
  };
  Calendar.prototype.containPoint = function (point) {
    console.warn('Not implemented.');
    return false;
  };
  /**
   * initRange
   * Normalize to an [start, end] array
   */
  Calendar.prototype._initRangeOption = function () {
    var range = this._model.get('range');
    var normalizedRange;
    // Convert [1990] to 1990
    if (zrender_lib_core_util_js__rspack_import_1.isArray(range) && range.length === 1) {
      range = range[0];
    }
    if (!zrender_lib_core_util_js__rspack_import_1.isArray(range)) {
      var rangeStr = range.toString();
      // One year.
      if (/^\d{4}$/.test(rangeStr)) {
        normalizedRange = [rangeStr + '-01-01', rangeStr + '-12-31'];
      }
      // One month
      if (/^\d{4}[\/|-]\d{1,2}$/.test(rangeStr)) {
        var start = this.getDateInfo(rangeStr);
        var firstDay = start.date;
        firstDay.setMonth(firstDay.getMonth() + 1);
        var end = this.getNextNDay(firstDay, -1);
        normalizedRange = [start.formatedDate, end.formatedDate];
      }
      // One day
      if (/^\d{4}[\/|-]\d{1,2}[\/|-]\d{1,2}$/.test(rangeStr)) {
        normalizedRange = [rangeStr, rangeStr];
      }
    } else {
      normalizedRange = range;
    }
    if (!normalizedRange) {
      if (false) {}
      // Not handling it.
      return range;
    }
    var tmp = this._getRangeInfo(normalizedRange);
    if (tmp.start.time > tmp.end.time) {
      normalizedRange.reverse();
    }
    return normalizedRange;
  };
  /**
   * range info
   *
   * @private
   * @param  {Array} range range ['2017-01-01', '2017-07-08']
   *  If range[0] > range[1], they will not be reversed.
   * @return {Object}       obj
   */
  Calendar.prototype._getRangeInfo = function (range) {
    var parsedRange = [this.getDateInfo(range[0]), this.getDateInfo(range[1])];
    var reversed;
    if (parsedRange[0].time > parsedRange[1].time) {
      reversed = true;
      parsedRange.reverse();
    }
    var allDay = Math.floor(parsedRange[1].time / PROXIMATE_ONE_DAY) - Math.floor(parsedRange[0].time / PROXIMATE_ONE_DAY) + 1;
    // Consider case1 (#11677 #10430):
    // Set the system timezone as "UK", set the range to `['2016-07-01', '2016-12-31']`
    // Consider case2:
    // Firstly set system timezone as "Time Zone: America/Toronto",
    // ```
    // let first = new Date(1478412000000 - 3600 * 1000 * 2.5);
    // let second = new Date(1478412000000);
    // let allDays = Math.floor(second / ONE_DAY) - Math.floor(first / ONE_DAY) + 1;
    // ```
    // will get wrong result because of DST. So we should fix it.
    var date = new Date(parsedRange[0].time);
    var startDateNum = date.getDate();
    var endDateNum = parsedRange[1].date.getDate();
    date.setDate(startDateNum + allDay - 1);
    // The bias can not over a month, so just compare date.
    var dateNum = date.getDate();
    if (dateNum !== endDateNum) {
      var sign = date.getTime() - parsedRange[1].time > 0 ? 1 : -1;
      while ((dateNum = date.getDate()) !== endDateNum && (date.getTime() - parsedRange[1].time) * sign > 0) {
        allDay -= sign;
        date.setDate(dateNum - sign);
      }
    }
    var weeks = Math.floor((allDay + parsedRange[0].day + 6) / 7);
    var nthWeek = reversed ? -weeks + 1 : weeks - 1;
    reversed && parsedRange.reverse();
    return {
      range: [parsedRange[0].formatedDate, parsedRange[1].formatedDate],
      start: parsedRange[0],
      end: parsedRange[1],
      allDay: allDay,
      weeks: weeks,
      // From 0.
      nthWeek: nthWeek,
      fweek: parsedRange[0].day,
      lweek: parsedRange[1].day
    };
  };
  /**
   * get date by nthWeeks and week day in range
   *
   * @private
   * @param  {number} nthWeek the week
   * @param  {number} day   the week day
   * @param  {Array} range [d1, d2]
   * @return {Object}
   */
  Calendar.prototype._getDateByWeeksAndDay = function (nthWeek, day, range) {
    var rangeInfo = this._getRangeInfo(range);
    if (nthWeek > rangeInfo.weeks || nthWeek === 0 && day < rangeInfo.fweek || nthWeek === rangeInfo.weeks && day > rangeInfo.lweek) {
      return null;
    }
    var nthDay = (nthWeek - 1) * 7 - rangeInfo.fweek + day;
    var date = new Date(rangeInfo.start.time);
    date.setDate(+rangeInfo.start.d + nthDay);
    return this.getDateInfo(date);
  };
  Calendar.create = function (ecModel, api) {
    var calendarList = [];
    ecModel.eachComponent('calendar', function (calendarModel) {
      var calendar = new Calendar(calendarModel, ecModel, api);
      calendarList.push(calendar);
      calendarModel.coordinateSystem = calendar;
    });
    // Inject coordinate system
    ecModel.eachComponent(function (mainType, componentModel) {
      (0,_core_CoordinateSystem_js__rspack_import_5.injectCoordSysByOption)({
        targetModel: componentModel,
        coordSysType: 'calendar',
        coordSysProvider: _core_CoordinateSystem_js__rspack_import_5.simpleCoordSysInjectionProvider
      });
    });
    return calendarList;
  };
  Calendar.dimensions = ['time', 'value'];
  return Calendar;
}();
function getCoordSys(finder) {
  var calendarModel = finder.calendarModel;
  var seriesModel = finder.seriesModel;
  var coordSys = calendarModel ? calendarModel.coordinateSystem : seriesModel ? seriesModel.coordinateSystem : null;
  return coordSys;
}
/* export default */ __webpack_exports__["default"] = (Calendar);

}),
82180: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var tslib__rspack_import_1 = __webpack_require__(2492);
/* import */ var zrender_lib_core_util_js__rspack_import_4 = __webpack_require__(9774);
/* import */ var _model_Component_js__rspack_import_0 = __webpack_require__(53075);
/* import */ var _util_layout_js__rspack_import_2 = __webpack_require__(88485);
/* import */ var _visual_tokens_js__rspack_import_3 = __webpack_require__(87473);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/





var CalendarModel = /** @class */function (_super) {
  (0,tslib__rspack_import_1.__extends)(CalendarModel, _super);
  function CalendarModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = CalendarModel.type;
    return _this;
  }
  /**
   * @override
   */
  CalendarModel.prototype.init = function (option, parentModel, ecModel) {
    var inputPositionParams = (0,_util_layout_js__rspack_import_2.getLayoutParams)(option);
    _super.prototype.init.apply(this, arguments);
    mergeAndNormalizeLayoutParams(option, inputPositionParams);
  };
  /**
   * @override
   */
  CalendarModel.prototype.mergeOption = function (option) {
    _super.prototype.mergeOption.apply(this, arguments);
    mergeAndNormalizeLayoutParams(this.option, option);
  };
  CalendarModel.prototype.getCellSize = function () {
    // Has been normalized
    return this.option.cellSize;
  };
  CalendarModel.type = 'calendar';
  CalendarModel.layoutMode = 'box';
  CalendarModel.defaultOption = {
    // zlevel: 0,
    // TODO: theoretically, the z of the calendar should be lower
    // than series, but we don't want the series to be displayed
    // on top of the borders like month split line. To align with
    // the effect of previous versions, we set the z to 2 for now
    // until better solution is found.
    z: 2,
    left: 80,
    top: 60,
    cellSize: 20,
    // horizontal vertical
    orient: 'horizontal',
    // month separate line style
    splitLine: {
      show: true,
      lineStyle: {
        color: _visual_tokens_js__rspack_import_3["default"].color.axisLine,
        width: 1,
        type: 'solid'
      }
    },
    // rect style  temporarily unused emphasis
    itemStyle: {
      color: _visual_tokens_js__rspack_import_3["default"].color.neutral00,
      borderWidth: 1,
      borderColor: _visual_tokens_js__rspack_import_3["default"].color.neutral10
    },
    // week text style
    dayLabel: {
      show: true,
      firstDay: 0,
      // start end
      position: 'start',
      margin: _visual_tokens_js__rspack_import_3["default"].size.s,
      color: _visual_tokens_js__rspack_import_3["default"].color.secondary
    },
    // month text style
    monthLabel: {
      show: true,
      // start end
      position: 'start',
      margin: _visual_tokens_js__rspack_import_3["default"].size.s,
      // center or left
      align: 'center',
      formatter: null,
      color: _visual_tokens_js__rspack_import_3["default"].color.secondary
    },
    // year text style
    yearLabel: {
      show: true,
      // top bottom left right
      position: null,
      margin: _visual_tokens_js__rspack_import_3["default"].size.xl,
      formatter: null,
      color: _visual_tokens_js__rspack_import_3["default"].color.quaternary,
      fontFamily: 'sans-serif',
      fontWeight: 'bolder',
      fontSize: 20
    }
  };
  return CalendarModel;
}(_model_Component_js__rspack_import_0["default"]);
function mergeAndNormalizeLayoutParams(target, raw) {
  // Normalize cellSize
  var cellSize = target.cellSize;
  var cellSizeArr;
  if (!zrender_lib_core_util_js__rspack_import_4.isArray(cellSize)) {
    cellSizeArr = target.cellSize = [cellSize, cellSize];
  } else {
    cellSizeArr = cellSize;
  }
  if (cellSizeArr.length === 1) {
    cellSizeArr[1] = cellSizeArr[0];
  }
  var ignoreSize = zrender_lib_core_util_js__rspack_import_4.map([0, 1], function (hvIdx) {
    // If user have set `width` or both `left` and `right`, cellSizeArr
    // will be automatically set to 'auto', otherwise the default
    // setting of cellSizeArr will make `width` setting not work.
    if ((0,_util_layout_js__rspack_import_2.sizeCalculable)(raw, hvIdx)) {
      cellSizeArr[hvIdx] = 'auto';
    }
    return cellSizeArr[hvIdx] != null && cellSizeArr[hvIdx] !== 'auto';
  });
  (0,_util_layout_js__rspack_import_2.mergeLayoutParam)(target, raw, {
    type: 'box',
    ignoreSize: ignoreSize
  });
}
/* export default */ __webpack_exports__["default"] = (CalendarModel);

}),
72827: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return calendarPrepareCustom; }
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
function calendarPrepareCustom(coordSys) {
  var rect = coordSys.getRect();
  var rangeInfo = coordSys.getRangeInfo();
  return {
    coordSys: {
      type: 'calendar',
      x: rect.x,
      y: rect.y,
      width: rect.width,
      height: rect.height,
      cellWidth: coordSys.getCellWidth(),
      cellHeight: coordSys.getCellHeight(),
      rangeInfo: {
        start: rangeInfo.start,
        end: rangeInfo.end,
        weeks: rangeInfo.weeks,
        dayCount: rangeInfo.allDay
      }
    },
    api: {
      coord: function (data, clamp) {
        return coordSys.dataToPoint(data, clamp);
      },
      layout: function (data, clamp) {
        return coordSys.dataToLayout(data, clamp);
      }
    }
  };
}

}),
76458: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var tslib__rspack_import_1 = __webpack_require__(2492);
/* import */ var _Axis_js__rspack_import_0 = __webpack_require__(80855);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


var Axis2D = /** @class */function (_super) {
  (0,tslib__rspack_import_1.__extends)(Axis2D, _super);
  function Axis2D(dim, scale, coordExtent, axisType, position) {
    var _this = _super.call(this, dim, scale, coordExtent) || this;
    /**
     * Index of axis, can be used as key
     * Injected outside.
     */
    _this.index = 0;
    _this.type = axisType || 'value';
    _this.position = position || 'bottom';
    return _this;
  }
  Axis2D.prototype.isHorizontal = function () {
    var position = this.position;
    return position === 'top' || position === 'bottom';
  };
  /**
   * Each item cooresponds to this.getExtent(), which
   * means globalExtent[0] may greater than globalExtent[1],
   * unless `asc` is input.
   *
   * @param {boolean} [asc]
   * @return {Array.<number>}
   */
  Axis2D.prototype.getGlobalExtent = function (asc) {
    var ret = this.getExtent();
    ret[0] = this.toGlobalCoord(ret[0]);
    ret[1] = this.toGlobalCoord(ret[1]);
    asc && ret[0] > ret[1] && ret.reverse();
    return ret;
  };
  Axis2D.prototype.pointToData = function (point, clamp) {
    return this.coordToData(this.toLocalCoord(point[this.dim === 'x' ? 0 : 1]), clamp);
  };
  /**
   * Set ordinalSortInfo
   * @param info new OrdinalSortInfo
   */
  Axis2D.prototype.setCategorySortInfo = function (info) {
    if (this.type !== 'category') {
      return false;
    }
    this.model.option.categorySortInfo = info;
    this.scale.setSortInfo(info);
  };
  return Axis2D;
}(_Axis_js__rspack_import_0["default"]);
/* export default */ __webpack_exports__["default"] = (Axis2D);

}),
52819: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CartesianAxisModel: function() { return CartesianAxisModel; }
});
/* import */ var tslib__rspack_import_1 = __webpack_require__(2492);
/* import */ var zrender_lib_core_util_js__rspack_import_3 = __webpack_require__(9774);
/* import */ var _model_Component_js__rspack_import_0 = __webpack_require__(53075);
/* import */ var _axisModelCommonMixin_js__rspack_import_4 = __webpack_require__(97238);
/* import */ var _util_model_js__rspack_import_2 = __webpack_require__(67698);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/





var CartesianAxisModel = /** @class */function (_super) {
  (0,tslib__rspack_import_1.__extends)(CartesianAxisModel, _super);
  function CartesianAxisModel() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  CartesianAxisModel.prototype.getCoordSysModel = function () {
    return this.getReferringComponents('grid', _util_model_js__rspack_import_2.SINGLE_REFERRING).models[0];
  };
  CartesianAxisModel.type = 'cartesian2dAxis';
  return CartesianAxisModel;
}(_model_Component_js__rspack_import_0["default"]);

zrender_lib_core_util_js__rspack_import_3.mixin(CartesianAxisModel, _axisModelCommonMixin_js__rspack_import_4.AxisModelCommonMixin);
/* export default */ __webpack_exports__["default"] = (CartesianAxisModel);

}),
89542: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  registerLegacyGridContainLabelImpl: function() { return /* binding */ registerLegacyGridContainLabelImpl; },
  "default": function() { return /* binding */ cartesian_Grid; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(9774);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/layout.js
var layout = __webpack_require__(88485);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisHelper.js
var axisHelper = __webpack_require__(62159);
// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(2492);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/BoundingRect.js
var BoundingRect = __webpack_require__(7544);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/cartesian/Cartesian.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

var Cartesian_Cartesian = /** @class */function () {
  function Cartesian(name) {
    this.type = 'cartesian';
    this._dimList = [];
    this._axes = {};
    this.name = name || '';
  }
  Cartesian.prototype.getAxis = function (dim) {
    return this._axes[dim];
  };
  Cartesian.prototype.getAxes = function () {
    return util.map(this._dimList, function (dim) {
      return this._axes[dim];
    }, this);
  };
  Cartesian.prototype.getAxesByScale = function (scaleType) {
    scaleType = scaleType.toLowerCase();
    return util.filter(this.getAxes(), function (axis) {
      return axis.scale.type === scaleType;
    });
  };
  Cartesian.prototype.addAxis = function (axis) {
    var dim = axis.dim;
    this._axes[dim] = axis;
    this._dimList.push(dim);
  };
  return Cartesian;
}();
;
/* export default */ var cartesian_Cartesian = (Cartesian_Cartesian);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/matrix.js
var matrix = __webpack_require__(46239);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/vector.js
var vector = __webpack_require__(44721);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/cartesian/Cartesian2D.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/





var cartesian2DDimensions = ['x', 'y'];
function canCalculateAffineTransform(scale) {
  return (scale.type === 'interval' || scale.type === 'time') && !scale.hasBreaks();
}
var Cartesian2D_Cartesian2D = /** @class */function (_super) {
  (0,tslib_es6.__extends)(Cartesian2D, _super);
  function Cartesian2D() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = 'cartesian2d';
    _this.dimensions = cartesian2DDimensions;
    return _this;
  }
  /**
   * Calculate an affine transform matrix if two axes are time or value.
   * It's mainly for accelartion on the large time series data.
   */
  Cartesian2D.prototype.calcAffineTransform = function () {
    this._transform = this._invTransform = null;
    var xAxisScale = this.getAxis('x').scale;
    var yAxisScale = this.getAxis('y').scale;
    if (!canCalculateAffineTransform(xAxisScale) || !canCalculateAffineTransform(yAxisScale)) {
      return;
    }
    var xScaleExtent = xAxisScale.getExtent();
    var yScaleExtent = yAxisScale.getExtent();
    var start = this.dataToPoint([xScaleExtent[0], yScaleExtent[0]]);
    var end = this.dataToPoint([xScaleExtent[1], yScaleExtent[1]]);
    var xScaleSpan = xScaleExtent[1] - xScaleExtent[0];
    var yScaleSpan = yScaleExtent[1] - yScaleExtent[0];
    if (!xScaleSpan || !yScaleSpan) {
      return;
    }
    // Accelerate data to point calculation on the special large time series data.
    var scaleX = (end[0] - start[0]) / xScaleSpan;
    var scaleY = (end[1] - start[1]) / yScaleSpan;
    var translateX = start[0] - xScaleExtent[0] * scaleX;
    var translateY = start[1] - yScaleExtent[0] * scaleY;
    var m = this._transform = [scaleX, 0, 0, scaleY, translateX, translateY];
    this._invTransform = (0,matrix.invert)([], m);
  };
  /**
   * Base axis will be used on stacking.
   */
  Cartesian2D.prototype.getBaseAxis = function () {
    return this.getAxesByScale('ordinal')[0] || this.getAxesByScale('time')[0] || this.getAxis('x');
  };
  Cartesian2D.prototype.containPoint = function (point) {
    var axisX = this.getAxis('x');
    var axisY = this.getAxis('y');
    return axisX.contain(axisX.toLocalCoord(point[0])) && axisY.contain(axisY.toLocalCoord(point[1]));
  };
  Cartesian2D.prototype.containData = function (data) {
    return this.getAxis('x').containData(data[0]) && this.getAxis('y').containData(data[1]);
  };
  Cartesian2D.prototype.containZone = function (data1, data2) {
    var zoneDiag1 = this.dataToPoint(data1);
    var zoneDiag2 = this.dataToPoint(data2);
    var area = this.getArea();
    var zone = new BoundingRect["default"](zoneDiag1[0], zoneDiag1[1], zoneDiag2[0] - zoneDiag1[0], zoneDiag2[1] - zoneDiag1[1]);
    return area.intersect(zone);
  };
  Cartesian2D.prototype.dataToPoint = function (data, clamp, out) {
    out = out || [];
    var xVal = data[0];
    var yVal = data[1];
    // [CAVEAT]: Do not add time consuming operation within and before fast path.
    // Fast path.
    if (this._transform
    // It's supported that if data is like `[Inifity, 123]`, where only Y pixel calculated.
    && xVal != null && isFinite(xVal) && yVal != null && isFinite(yVal)) {
      return (0,vector.applyTransform)(out, data, this._transform);
    }
    var xAxis = this.getAxis('x');
    var yAxis = this.getAxis('y');
    out[0] = xAxis.toGlobalCoord(xAxis.dataToCoord(xVal, clamp));
    out[1] = yAxis.toGlobalCoord(yAxis.dataToCoord(yVal, clamp));
    return out;
  };
  Cartesian2D.prototype.clampData = function (data, out) {
    var xScale = this.getAxis('x').scale;
    var yScale = this.getAxis('y').scale;
    var xAxisExtent = xScale.getExtent();
    var yAxisExtent = yScale.getExtent();
    var x = xScale.parse(data[0]);
    var y = yScale.parse(data[1]);
    out = out || [];
    out[0] = Math.min(Math.max(Math.min(xAxisExtent[0], xAxisExtent[1]), x), Math.max(xAxisExtent[0], xAxisExtent[1]));
    out[1] = Math.min(Math.max(Math.min(yAxisExtent[0], yAxisExtent[1]), y), Math.max(yAxisExtent[0], yAxisExtent[1]));
    return out;
  };
  Cartesian2D.prototype.pointToData = function (point, clamp, out) {
    out = out || [];
    if (this._invTransform) {
      return (0,vector.applyTransform)(out, point, this._invTransform);
    }
    var xAxis = this.getAxis('x');
    var yAxis = this.getAxis('y');
    out[0] = xAxis.coordToData(xAxis.toLocalCoord(point[0]), clamp);
    out[1] = yAxis.coordToData(yAxis.toLocalCoord(point[1]), clamp);
    return out;
  };
  Cartesian2D.prototype.getOtherAxis = function (axis) {
    return this.getAxis(axis.dim === 'x' ? 'y' : 'x');
  };
  /**
   * Get rect area of cartesian.
   * Area will have a contain function to determine if a point is in the coordinate system.
   */
  Cartesian2D.prototype.getArea = function (tolerance) {
    tolerance = tolerance || 0;
    var xExtent = this.getAxis('x').getGlobalExtent();
    var yExtent = this.getAxis('y').getGlobalExtent();
    var x = Math.min(xExtent[0], xExtent[1]) - tolerance;
    var y = Math.min(yExtent[0], yExtent[1]) - tolerance;
    var width = Math.max(xExtent[0], xExtent[1]) - x + tolerance;
    var height = Math.max(yExtent[0], yExtent[1]) - y + tolerance;
    return new BoundingRect["default"](x, y, width, height);
  };
  return Cartesian2D;
}(cartesian_Cartesian);
;
/* export default */ var cartesian_Cartesian2D = (Cartesian2D_Cartesian2D);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/cartesian/Axis2D.js
var Axis2D = __webpack_require__(76458);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js
var util_model = __webpack_require__(67698);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/cartesian/GridModel.js
var GridModel = __webpack_require__(87564);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/cartesian/cartesianAxisHelper.js
var cartesianAxisHelper = __webpack_require__(86982);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/scale/helper.js
var helper = __webpack_require__(19111);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisAlignTicks.js
var axisAlignTicks = __webpack_require__(35590);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js
var graphic = __webpack_require__(87031);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/AxisBuilder.js
var AxisBuilder = __webpack_require__(45430);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisTickLabelBuilder.js
var axisTickLabelBuilder = __webpack_require__(59511);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/core/CoordinateSystem.js
var CoordinateSystem = __webpack_require__(58241);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(64782);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/cartesian/Grid.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/
/**
 * Grid is a region which contains at most 4 cartesian systems
 *
 * TODO Default cartesian
 */






// Depends on GridModel, AxisModel, which performs preprocess.










// margin is [top, right, bottom, left]
var XY_TO_MARGIN_IDX = [[3, 1], [0, 2] // xyIdx 1 => 'y'
];
var Grid_Grid = /** @class */function () {
  function Grid(gridModel, ecModel, api) {
    // FIXME:TS where used (different from registered type 'cartesian2d')?
    this.type = 'grid';
    this._coordsMap = {};
    this._coordsList = [];
    this._axesMap = {};
    this._axesList = [];
    this.axisPointerEnabled = true;
    this.dimensions = cartesian2DDimensions;
    this._initCartesian(gridModel, ecModel, api);
    this.model = gridModel;
  }
  Grid.prototype.getRect = function () {
    return this._rect;
  };
  Grid.prototype.update = function (ecModel, api) {
    var axesMap = this._axesMap;
    this._updateScale(ecModel, this.model);
    function updateAxisTicks(axes) {
      var alignTo;
      // Axis is added in order of axisIndex.
      var axesIndices = (0,util.keys)(axes);
      var len = axesIndices.length;
      if (!len) {
        return;
      }
      var axisNeedsAlign = [];
      // Process once and calculate the ticks for those don't use alignTicks.
      for (var i = len - 1; i >= 0; i--) {
        var idx = +axesIndices[i]; // Convert to number.
        var axis = axes[idx];
        var model = axis.model;
        var scale = axis.scale;
        if (
        // Only value and log axis without interval support alignTicks.
        (0,helper.isIntervalOrLogScale)(scale) && model.get('alignTicks') && model.get('interval') == null) {
          axisNeedsAlign.push(axis);
        } else {
          (0,axisHelper.niceScaleExtent)(scale, model);
          if ((0,helper.isIntervalOrLogScale)(scale)) {
            // Can only align to interval or log axis.
            alignTo = axis;
          }
        }
      }
      ;
      // All axes has set alignTicks. Pick the first one.
      // PENDING. Should we find the axis that both set interval, min, max and align to this one?
      if (axisNeedsAlign.length) {
        if (!alignTo) {
          alignTo = axisNeedsAlign.pop();
          (0,axisHelper.niceScaleExtent)(alignTo.scale, alignTo.model);
        }
        (0,util.each)(axisNeedsAlign, function (axis) {
          (0,axisAlignTicks.alignScaleTicks)(axis.scale, axis.model, alignTo.scale);
        });
      }
    }
    updateAxisTicks(axesMap.x);
    updateAxisTicks(axesMap.y);
    // Key: axisDim_axisIndex, value: boolean, whether onZero target.
    var onZeroRecords = {};
    (0,util.each)(axesMap.x, function (xAxis) {
      fixAxisOnZero(axesMap, 'y', xAxis, onZeroRecords);
    });
    (0,util.each)(axesMap.y, function (yAxis) {
      fixAxisOnZero(axesMap, 'x', yAxis, onZeroRecords);
    });
    // Resize again if containLabel is enabled
    // FIXME It may cause getting wrong grid size in data processing stage
    this.resize(this.model, api);
  };
  /**
   * Resize the grid.
   *
   * [NOTE]
   * If both "grid.containLabel/grid.contain" and pixel-required-data-processing (such as, "dataSampling")
   * exist, circular dependency occurs in logic.
   * The final compromised sequence is:
   *  1. Calculate "axis.extent" (pixel extent) and AffineTransform based on only "grid layout options".
   *      Not accurate if "grid.containLabel/grid.contain" is required, but it is a compromise to avoid
   *      circular dependency.
   *  2. Perform "series data processing" (where "dataSampling" requires "axis.extent").
   *  3. Calculate "scale.extent" (data extent) based on "processed series data".
   *  4. Modify "axis.extent" for "grid.containLabel/grid.contain":
   *      4.1. Calculate "axis labels" based on "scale.extent".
   *      4.2. Modify "axis.extent" by the bounding rects of "axis labels and names".
   */
  Grid.prototype.resize = function (gridModel, api, beforeDataProcessing) {
    var layoutRef = (0,layout.createBoxLayoutReference)(gridModel, api);
    var gridRect = this._rect = (0,layout.getLayoutRect)(gridModel.getBoxLayoutParams(), layoutRef.refContainer);
    // PENDING: whether to support that if the input `coord` is out of the base coord sys,
    //  do not render anything. At present, the behavior is undefined.
    var axesMap = this._axesMap;
    var coordsList = this._coordsList;
    var optionContainLabel = gridModel.get('containLabel'); // No `.get(, true)` for backward compat.
    updateAllAxisExtentTransByGridRect(axesMap, gridRect);
    if (!beforeDataProcessing) {
      var axisBuilderSharedCtx = createAxisBiulders(gridRect, coordsList, axesMap, optionContainLabel, api);
      var noPxChange = void 0;
      if (optionContainLabel) {
        if (legacyLayOutGridByContainLabel) {
          // console.time('legacyLayOutGridByContainLabel');
          legacyLayOutGridByContainLabel(this._axesList, gridRect);
          updateAllAxisExtentTransByGridRect(axesMap, gridRect);
          // console.timeEnd('legacyLayOutGridByContainLabel');
        } else {
          if (false) {}
          noPxChange = layOutGridByOuterBounds(gridRect.clone(), 'axisLabel', null, gridRect, axesMap, axisBuilderSharedCtx, layoutRef);
        }
      } else {
        var _a = prepareOuterBounds(gridModel, gridRect, layoutRef),
          outerBoundsRect = _a.outerBoundsRect,
          parsedOuterBoundsContain = _a.parsedOuterBoundsContain,
          outerBoundsClamp = _a.outerBoundsClamp;
        if (outerBoundsRect) {
          // console.time('layOutGridByOuterBounds');
          noPxChange = layOutGridByOuterBounds(outerBoundsRect, parsedOuterBoundsContain, outerBoundsClamp, gridRect, axesMap, axisBuilderSharedCtx, layoutRef);
          // console.timeEnd('layOutGridByOuterBounds');
        }
      }
      // console.time('buildAxesView_determine');
      createOrUpdateAxesView(gridRect, axesMap, axisTickLabelBuilder.AxisTickLabelComputingKind.determine, null, noPxChange, layoutRef);
      // console.timeEnd('buildAxesView_determine');
    } // End of beforeDataProcessing
    (0,util.each)(this._coordsList, function (coord) {
      // Calculate affine matrix to accelerate the data to point transform.
      // If all the axes scales are time or value.
      coord.calcAffineTransform();
    });
  };
  Grid.prototype.getAxis = function (dim, axisIndex) {
    var axesMapOnDim = this._axesMap[dim];
    if (axesMapOnDim != null) {
      return axesMapOnDim[axisIndex || 0];
    }
  };
  Grid.prototype.getAxes = function () {
    return this._axesList.slice();
  };
  Grid.prototype.getCartesian = function (xAxisIndex, yAxisIndex) {
    if (xAxisIndex != null && yAxisIndex != null) {
      var key = 'x' + xAxisIndex + 'y' + yAxisIndex;
      return this._coordsMap[key];
    }
    if ((0,util.isObject)(xAxisIndex)) {
      yAxisIndex = xAxisIndex.yAxisIndex;
      xAxisIndex = xAxisIndex.xAxisIndex;
    }
    for (var i = 0, coordList = this._coordsList; i < coordList.length; i++) {
      if (coordList[i].getAxis('x').index === xAxisIndex || coordList[i].getAxis('y').index === yAxisIndex) {
        return coordList[i];
      }
    }
  };
  Grid.prototype.getCartesians = function () {
    return this._coordsList.slice();
  };
  /**
   * @implements
   */
  Grid.prototype.convertToPixel = function (ecModel, finder, value) {
    var target = this._findConvertTarget(finder);
    return target.cartesian ? target.cartesian.dataToPoint(value) : target.axis ? target.axis.toGlobalCoord(target.axis.dataToCoord(value)) : null;
  };
  /**
   * @implements
   */
  Grid.prototype.convertFromPixel = function (ecModel, finder, value) {
    var target = this._findConvertTarget(finder);
    return target.cartesian ? target.cartesian.pointToData(value) : target.axis ? target.axis.coordToData(target.axis.toLocalCoord(value)) : null;
  };
  Grid.prototype._findConvertTarget = function (finder) {
    var seriesModel = finder.seriesModel;
    var xAxisModel = finder.xAxisModel || seriesModel && seriesModel.getReferringComponents('xAxis', util_model.SINGLE_REFERRING).models[0];
    var yAxisModel = finder.yAxisModel || seriesModel && seriesModel.getReferringComponents('yAxis', util_model.SINGLE_REFERRING).models[0];
    var gridModel = finder.gridModel;
    var coordsList = this._coordsList;
    var cartesian;
    var axis;
    if (seriesModel) {
      cartesian = seriesModel.coordinateSystem;
      (0,util.indexOf)(coordsList, cartesian) < 0 && (cartesian = null);
    } else if (xAxisModel && yAxisModel) {
      cartesian = this.getCartesian(xAxisModel.componentIndex, yAxisModel.componentIndex);
    } else if (xAxisModel) {
      axis = this.getAxis('x', xAxisModel.componentIndex);
    } else if (yAxisModel) {
      axis = this.getAxis('y', yAxisModel.componentIndex);
    }
    // Lowest priority.
    else if (gridModel) {
      var grid = gridModel.coordinateSystem;
      if (grid === this) {
        cartesian = this._coordsList[0];
      }
    }
    return {
      cartesian: cartesian,
      axis: axis
    };
  };
  /**
   * @implements
   */
  Grid.prototype.containPoint = function (point) {
    var coord = this._coordsList[0];
    if (coord) {
      return coord.containPoint(point);
    }
  };
  /**
   * Initialize cartesian coordinate systems
   */
  Grid.prototype._initCartesian = function (gridModel, ecModel, api) {
    var _this = this;
    var grid = this;
    var axisPositionUsed = {
      left: false,
      right: false,
      top: false,
      bottom: false
    };
    var axesMap = {
      x: {},
      y: {}
    };
    var axesCount = {
      x: 0,
      y: 0
    };
    // Create axis
    ecModel.eachComponent('xAxis', createAxisCreator('x'), this);
    ecModel.eachComponent('yAxis', createAxisCreator('y'), this);
    if (!axesCount.x || !axesCount.y) {
      // Roll back when there no either x or y axis
      this._axesMap = {};
      this._axesList = [];
      return;
    }
    this._axesMap = axesMap;
    // Create cartesian2d
    (0,util.each)(axesMap.x, function (xAxis, xAxisIndex) {
      (0,util.each)(axesMap.y, function (yAxis, yAxisIndex) {
        var key = 'x' + xAxisIndex + 'y' + yAxisIndex;
        var cartesian = new cartesian_Cartesian2D(key);
        cartesian.master = _this;
        cartesian.model = gridModel;
        _this._coordsMap[key] = cartesian;
        _this._coordsList.push(cartesian);
        cartesian.addAxis(xAxis);
        cartesian.addAxis(yAxis);
      });
    });
    function createAxisCreator(dimName) {
      return function (axisModel, idx) {
        if (!isAxisUsedInTheGrid(axisModel, gridModel)) {
          return;
        }
        var axisPosition = axisModel.get('position');
        if (dimName === 'x') {
          // Fix position
          if (axisPosition !== 'top' && axisPosition !== 'bottom') {
            // Default bottom of X
            axisPosition = axisPositionUsed.bottom ? 'top' : 'bottom';
          }
        } else {
          // Fix position
          if (axisPosition !== 'left' && axisPosition !== 'right') {
            // Default left of Y
            axisPosition = axisPositionUsed.left ? 'right' : 'left';
          }
        }
        axisPositionUsed[axisPosition] = true;
        var axis = new Axis2D["default"](dimName, (0,axisHelper.createScaleByModel)(axisModel), [0, 0], axisModel.get('type'), axisPosition);
        var isCategory = axis.type === 'category';
        axis.onBand = isCategory && axisModel.get('boundaryGap');
        axis.inverse = axisModel.get('inverse');
        // Inject axis into axisModel
        axisModel.axis = axis;
        // Inject axisModel into axis
        axis.model = axisModel;
        // Inject grid info axis
        axis.grid = grid;
        // Index of axis, can be used as key
        axis.index = idx;
        grid._axesList.push(axis);
        axesMap[dimName][idx] = axis;
        axesCount[dimName]++;
      };
    }
  };
  /**
   * Update cartesian properties from series.
   */
  Grid.prototype._updateScale = function (ecModel, gridModel) {
    // Reset scale
    (0,util.each)(this._axesList, function (axis) {
      axis.scale.setExtent(Infinity, -Infinity);
      if (axis.type === 'category') {
        var categorySortInfo = axis.model.get('categorySortInfo');
        axis.scale.setSortInfo(categorySortInfo);
      }
    });
    ecModel.eachSeries(function (seriesModel) {
      // If pie (or other similar series) use cartesian2d, the unionExtent logic below is
      // wrong, therefore skip it temporarily. See also in `defaultAxisExtentFromData.ts`.
      // TODO: support union extent in this case.
      if ((0,cartesianAxisHelper.isCartesian2DInjectedAsDataCoordSys)(seriesModel)) {
        var axesModelMap = (0,cartesianAxisHelper.findAxisModels)(seriesModel);
        var xAxisModel = axesModelMap.xAxisModel;
        var yAxisModel = axesModelMap.yAxisModel;
        if (!isAxisUsedInTheGrid(xAxisModel, gridModel) || !isAxisUsedInTheGrid(yAxisModel, gridModel)) {
          return;
        }
        var cartesian = this.getCartesian(xAxisModel.componentIndex, yAxisModel.componentIndex);
        var data = seriesModel.getData();
        var xAxis = cartesian.getAxis('x');
        var yAxis = cartesian.getAxis('y');
        unionExtent(data, xAxis);
        unionExtent(data, yAxis);
      }
    }, this);
    function unionExtent(data, axis) {
      (0,util.each)((0,axisHelper.getDataDimensionsOnAxis)(data, axis.dim), function (dim) {
        axis.scale.unionExtentFromData(data, dim);
      });
    }
  };
  /**
   * @param dim 'x' or 'y' or 'auto' or null/undefined
   */
  Grid.prototype.getTooltipAxes = function (dim) {
    var baseAxes = [];
    var otherAxes = [];
    (0,util.each)(this.getCartesians(), function (cartesian) {
      var baseAxis = dim != null && dim !== 'auto' ? cartesian.getAxis(dim) : cartesian.getBaseAxis();
      var otherAxis = cartesian.getOtherAxis(baseAxis);
      (0,util.indexOf)(baseAxes, baseAxis) < 0 && baseAxes.push(baseAxis);
      (0,util.indexOf)(otherAxes, otherAxis) < 0 && otherAxes.push(otherAxis);
    });
    return {
      baseAxes: baseAxes,
      otherAxes: otherAxes
    };
  };
  Grid.create = function (ecModel, api) {
    var grids = [];
    ecModel.eachComponent('grid', function (gridModel, idx) {
      var grid = new Grid(gridModel, ecModel, api);
      grid.name = 'grid_' + idx;
      // dataSampling requires axis extent, so resize
      // should be performed in create stage.
      grid.resize(gridModel, api, true);
      gridModel.coordinateSystem = grid;
      grids.push(grid);
    });
    // Inject the coordinateSystems into seriesModel
    ecModel.eachSeries(function (seriesModel) {
      (0,CoordinateSystem.injectCoordSysByOption)({
        targetModel: seriesModel,
        coordSysType: 'cartesian2d',
        coordSysProvider: coordSysProvider
      });
      function coordSysProvider() {
        var axesModelMap = (0,cartesianAxisHelper.findAxisModels)(seriesModel);
        var xAxisModel = axesModelMap.xAxisModel;
        var yAxisModel = axesModelMap.yAxisModel;
        var gridModel = xAxisModel.getCoordSysModel();
        if (false) {}
        var grid = gridModel.coordinateSystem;
        return grid.getCartesian(xAxisModel.componentIndex, yAxisModel.componentIndex);
      }
    });
    return grids;
  };
  // For deciding which dimensions to use when creating list data
  Grid.dimensions = cartesian2DDimensions;
  return Grid;
}();
/**
 * Check if the axis is used in the specified grid.
 */
function isAxisUsedInTheGrid(axisModel, gridModel) {
  return axisModel.getCoordSysModel() === gridModel;
}
function fixAxisOnZero(axesMap, otherAxisDim, axis,
// Key: see `getOnZeroRecordKey`
onZeroRecords) {
  axis.getAxesOnZeroOf = function () {
    // TODO: onZero of multiple axes.
    return otherAxisOnZeroOf ? [otherAxisOnZeroOf] : [];
  };
  // onZero can not be enabled in these two situations:
  // 1. When any other axis is a category axis.
  // 2. When no axis is cross 0 point.
  var otherAxes = axesMap[otherAxisDim];
  var otherAxisOnZeroOf;
  var axisModel = axis.model;
  var onZero = axisModel.get(['axisLine', 'onZero']);
  var onZeroAxisIndex = axisModel.get(['axisLine', 'onZeroAxisIndex']);
  if (!onZero) {
    return;
  }
  // If target axis is specified.
  if (onZeroAxisIndex != null) {
    if (canOnZeroToAxis(otherAxes[onZeroAxisIndex])) {
      otherAxisOnZeroOf = otherAxes[onZeroAxisIndex];
    }
  } else {
    // Find the first available other axis.
    for (var idx in otherAxes) {
      if (otherAxes.hasOwnProperty(idx) && canOnZeroToAxis(otherAxes[idx])
      // Consider that two Y axes on one value axis,
      // if both onZero, the two Y axes overlap.
      && !onZeroRecords[getOnZeroRecordKey(otherAxes[idx])]) {
        otherAxisOnZeroOf = otherAxes[idx];
        break;
      }
    }
  }
  if (otherAxisOnZeroOf) {
    onZeroRecords[getOnZeroRecordKey(otherAxisOnZeroOf)] = true;
  }
  function getOnZeroRecordKey(axis) {
    return axis.dim + '_' + axis.index;
  }
}
function canOnZeroToAxis(axis) {
  return axis && axis.type !== 'category' && axis.type !== 'time' && (0,axisHelper.ifAxisCrossZero)(axis);
}
function updateAxisTransform(axis, coordBase) {
  var axisExtent = axis.getExtent();
  var axisExtentSum = axisExtent[0] + axisExtent[1];
  // Fast transform
  axis.toGlobalCoord = axis.dim === 'x' ? function (coord) {
    return coord + coordBase;
  } : function (coord) {
    return axisExtentSum - coord + coordBase;
  };
  axis.toLocalCoord = axis.dim === 'x' ? function (coord) {
    return coord - coordBase;
  } : function (coord) {
    return axisExtentSum - coord + coordBase;
  };
}
function updateAllAxisExtentTransByGridRect(axesMap, gridRect) {
  (0,util.each)(axesMap.x, function (axis) {
    return updateAxisExtentTransByGridRect(axis, gridRect.x, gridRect.width);
  });
  (0,util.each)(axesMap.y, function (axis) {
    return updateAxisExtentTransByGridRect(axis, gridRect.y, gridRect.height);
  });
}
function updateAxisExtentTransByGridRect(axis, gridXY, gridWH) {
  var extent = [0, gridWH];
  var idx = axis.inverse ? 1 : 0;
  axis.setExtent(extent[idx], extent[1 - idx]);
  updateAxisTransform(axis, gridXY);
}
var legacyLayOutGridByContainLabel;
function registerLegacyGridContainLabelImpl(impl) {
  legacyLayOutGridByContainLabel = impl;
}
// Return noPxChange.
function layOutGridByOuterBounds(outerBoundsRect, outerBoundsContain, outerBoundsClamp, gridRect, axesMap, axisBuilderSharedCtx, layoutRef) {
  if (false) {}
  // Assume `updateAllAxisExtentTransByGridRect` has been performed once before this call.
  // [NOTE]:
  // - The bounding rect of the axis elements might be sensitve to variations in `axis.extent` due to strategies
  //  like hideOverlap/moveOverlap. @see the comment in `LabelLayoutBase['suggestIgnore']`.
  // - The final `gridRect` might be slightly smaller than the ideally expected result if labels are giant and
  //  get hidden due to overlapping. More iterations could improve precision, but not performant. We consider
  //  the current result acceptable, since no alignment among charts can be guaranteed when using this feature.
  createOrUpdateAxesView(gridRect, axesMap, axisTickLabelBuilder.AxisTickLabelComputingKind.estimate, outerBoundsContain, false, layoutRef);
  var margin = [0, 0, 0, 0];
  fillLabelNameOverflowOnOneDimension(0);
  fillLabelNameOverflowOnOneDimension(1);
  // If axis is blank, no label can be used to detect overflow.
  // gridRect itself should not overflow.
  fillMarginOnOneDimension(gridRect, 0, NaN);
  fillMarginOnOneDimension(gridRect, 1, NaN);
  var noPxChange = (0,util.find)(margin, function (item) {
    return item > 0;
  }) == null;
  (0,graphic.expandOrShrinkRect)(gridRect, margin, true, true, outerBoundsClamp);
  updateAllAxisExtentTransByGridRect(axesMap, gridRect);
  return noPxChange;
  function fillLabelNameOverflowOnOneDimension(xyIdx) {
    (0,util.each)(axesMap[graphic.XY[xyIdx]], function (axis) {
      if (!(0,axisHelper.shouldAxisShow)(axis.model)) {
        return;
      }
      // FIXME: zr Group.union may wrongly union (0, 0, 0, 0) and not performant.
      // unionRect.union(axis.axisBuilder.group.getBoundingRect());
      // If ussing Group.getBoundingRect to calculate shrink space, it is not strictly accurate when
      // the outermost label is ignored and the secondary label is very long and contribute to the
      // union extension:
      //      -|---|---|---|
      //         1,000,000,000
      // Therefore we calculate them one by one.
      // Also considered axis may be blank or no labels.
      var sharedRecord = axisBuilderSharedCtx.ensureRecord(axis.model);
      var labelInfoList = sharedRecord.labelInfoList;
      if (labelInfoList) {
        for (var idx = 0; idx < labelInfoList.length; idx++) {
          var labelInfo = labelInfoList[idx];
          var proportion = axis.scale.normalize((0,AxisBuilder.getLabelInner)(labelInfo.label).tickValue);
          proportion = xyIdx === 1 ? 1 - proportion : proportion;
          // xAxis use proportion on x, yAxis use proprotion on y, otherwise not.
          fillMarginOnOneDimension(labelInfo.rect, xyIdx, proportion);
          fillMarginOnOneDimension(labelInfo.rect, 1 - xyIdx, NaN);
        }
      }
      var nameLayout = sharedRecord.nameLayout;
      if (nameLayout) {
        var proportion = (0,axisHelper.isNameLocationCenter)(sharedRecord.nameLocation) ? 0.5 : NaN;
        fillMarginOnOneDimension(nameLayout.rect, xyIdx, proportion);
        fillMarginOnOneDimension(nameLayout.rect, 1 - xyIdx, NaN);
      }
    });
  }
  function fillMarginOnOneDimension(itemRect, xyIdx, proportion // NaN mean no use proportion
  ) {
    var overflow1 = outerBoundsRect[graphic.XY[xyIdx]] - itemRect[graphic.XY[xyIdx]];
    var overflow2 = itemRect[graphic.WH[xyIdx]] + itemRect[graphic.XY[xyIdx]] - (outerBoundsRect[graphic.WH[xyIdx]] + outerBoundsRect[graphic.XY[xyIdx]]);
    overflow1 = applyProportion(overflow1, 1 - proportion);
    overflow2 = applyProportion(overflow2, proportion);
    var minIdx = XY_TO_MARGIN_IDX[xyIdx][0];
    var maxIdx = XY_TO_MARGIN_IDX[xyIdx][1];
    margin[minIdx] = (0,number.mathMax)(margin[minIdx], overflow1);
    margin[maxIdx] = (0,number.mathMax)(margin[maxIdx], overflow2);
  }
  function applyProportion(overflow, proportion) {
    // proportion is not likely to near zero. If so, give up shrink
    if (overflow > 0 && !(0,util.eqNaN)(proportion) && proportion > 1e-4) {
      overflow /= proportion;
    }
    return overflow;
  }
}
function createAxisBiulders(gridRect, cartesians, axesMap, optionContainLabel, api) {
  var axisBuilderSharedCtx = new AxisBuilder.AxisBuilderSharedContext(resolveAxisNameOverlapForGrid);
  (0,util.each)(axesMap, function (axisList) {
    return (0,util.each)(axisList, function (axis) {
      if ((0,axisHelper.shouldAxisShow)(axis.model)) {
        // See `AxisBaseOptionCommon['nameMoveOverlap']`.
        var defaultNameMoveOverlap = !optionContainLabel;
        axis.axisBuilder = (0,cartesianAxisHelper.createCartesianAxisViewCommonPartBuilder)(gridRect, cartesians, axis.model, api, axisBuilderSharedCtx, defaultNameMoveOverlap);
      }
    });
  });
  return axisBuilderSharedCtx;
}
/**
 * Promote the axis-elements-building from "view render" stage to "coordinate system resize" stage.
 * This is aimed to resovle overlap across multiple axes, since currently it's hard to reconcile
 * multiple axes in "view render" stage.
 *
 * [CAUTION] But this promotion assumes that the subsequent "visual mapping" stage does not affect
 * this axis-elements-building; otherwise we have to refactor it again.
 */
function createOrUpdateAxesView(gridRect, axesMap, kind, outerBoundsContain, noPxChange, layoutRef) {
  var isDetermine = kind === axisTickLabelBuilder.AxisTickLabelComputingKind.determine;
  (0,util.each)(axesMap, function (axisList) {
    return (0,util.each)(axisList, function (axis) {
      if ((0,axisHelper.shouldAxisShow)(axis.model)) {
        (0,cartesianAxisHelper.updateCartesianAxisViewCommonPartBuilder)(axis.axisBuilder, gridRect, axis.model);
        axis.axisBuilder.build(isDetermine ? {
          axisTickLabelDetermine: true
        } : {
          axisTickLabelEstimate: true
        }, {
          noPxChange: noPxChange
        });
      }
    });
  });
  var nameMarginLevelMap = {
    x: 0,
    y: 0
  };
  calcNameMarginLevel(0);
  calcNameMarginLevel(1);
  function calcNameMarginLevel(xyIdx) {
    nameMarginLevelMap[graphic.XY[1 - xyIdx]] = gridRect[graphic.WH[xyIdx]] <= layoutRef.refContainer[graphic.WH[xyIdx]] * 0.5 ? 0 : 1 - xyIdx === 1 ? 2 : 1;
  }
  (0,util.each)(axesMap, function (axisList, xy) {
    return (0,util.each)(axisList, function (axis) {
      if ((0,axisHelper.shouldAxisShow)(axis.model)) {
        if (outerBoundsContain === 'all' || isDetermine) {
          // To resolve overlap, `axisName` layout depends on `axisTickLabel` layout result
          // (all of the axes of the same `grid`; consider multiple x or y axes).
          axis.axisBuilder.build({
            axisName: true
          }, {
            nameMarginLevel: nameMarginLevelMap[xy]
          });
        }
        if (isDetermine) {
          axis.axisBuilder.build({
            axisLine: true
          });
        }
      }
    });
  });
}
function prepareOuterBounds(gridModel, rawRridRect, layoutRef) {
  var outerBoundsRect;
  var optionOuterBoundsMode = gridModel.get('outerBoundsMode', true);
  if (optionOuterBoundsMode === 'same') {
    outerBoundsRect = rawRridRect.clone();
  } else if (optionOuterBoundsMode == null || optionOuterBoundsMode === 'auto') {
    outerBoundsRect = (0,layout.getLayoutRect)(gridModel.get('outerBounds', true) || GridModel.OUTER_BOUNDS_DEFAULT, layoutRef.refContainer);
  } else if (optionOuterBoundsMode !== 'none') {
    if (false) {}
  }
  var optionOuterBoundsContain = gridModel.get('outerBoundsContain', true);
  var parsedOuterBoundsContain;
  if (optionOuterBoundsContain == null || optionOuterBoundsContain === 'auto') {
    parsedOuterBoundsContain = 'all';
  } else if ((0,util.indexOf)(['all', 'axisLabel'], optionOuterBoundsContain) < 0) {
    if (false) {}
    parsedOuterBoundsContain = 'all';
  } else {
    parsedOuterBoundsContain = optionOuterBoundsContain;
  }
  var outerBoundsClamp = [(0,number.parsePositionSizeOption)((0,util.retrieve2)(gridModel.get('outerBoundsClampWidth', true), GridModel.OUTER_BOUNDS_CLAMP_DEFAULT["0"]), rawRridRect.width), (0,number.parsePositionSizeOption)((0,util.retrieve2)(gridModel.get('outerBoundsClampHeight', true), GridModel.OUTER_BOUNDS_CLAMP_DEFAULT["1"]), rawRridRect.height)];
  return {
    outerBoundsRect: outerBoundsRect,
    parsedOuterBoundsContain: parsedOuterBoundsContain,
    outerBoundsClamp: outerBoundsClamp
  };
}
var resolveAxisNameOverlapForGrid = function (cfg, ctx, axisModel, nameLayoutInfo, nameMoveDirVec, thisRecord) {
  var perpendicularDim = axisModel.axis.dim === 'x' ? 'y' : 'x';
  (0,AxisBuilder.resolveAxisNameOverlapDefault)(cfg, ctx, axisModel, nameLayoutInfo, nameMoveDirVec, thisRecord);
  // If nameLocation 'center', and there are multiple axes parallel to this axis, do not adjust by
  //  other axes, because the axis name should be close to its axis line as much as possible even
  //  if overlapping; otherwise it might cause misleading.
  // If nameLocation 'center', do not adjust by perpendicular axes, since they are not likely to overlap.
  // If nameLocation 'start'/'end', move name within the same direction to escape overlap with the
  //  perpendicular axes.
  if (!(0,axisHelper.isNameLocationCenter)(cfg.nameLocation)) {
    (0,util.each)(ctx.recordMap[perpendicularDim], function (perpenRecord) {
      // perpendicular axis may be no name.
      if (perpenRecord && perpenRecord.labelInfoList && perpenRecord.dirVec) {
        (0,AxisBuilder.moveIfOverlapByLinearLabels)(perpenRecord.labelInfoList, perpenRecord.dirVec, nameLayoutInfo, nameMoveDirVec);
      }
    });
  }
};
/* export default */ var cartesian_Grid = (Grid_Grid);

}),
87564: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  OUTER_BOUNDS_CLAMP_DEFAULT: function() { return OUTER_BOUNDS_CLAMP_DEFAULT; },
  OUTER_BOUNDS_DEFAULT: function() { return OUTER_BOUNDS_DEFAULT; }
});
/* import */ var tslib__rspack_import_1 = __webpack_require__(2492);
/* import */ var _model_Component_js__rspack_import_0 = __webpack_require__(53075);
/* import */ var _util_layout_js__rspack_import_2 = __webpack_require__(88485);
/* import */ var _visual_tokens_js__rspack_import_3 = __webpack_require__(87473);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/




// For backward compatibility, do not use a margin. Although the labels might touch the edge of
// the canvas, the chart canvas probably does not have an border or a different background color within a page.
var OUTER_BOUNDS_DEFAULT = {
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};
var OUTER_BOUNDS_CLAMP_DEFAULT = ['25%', '25%'];
var GridModel = /** @class */function (_super) {
  (0,tslib__rspack_import_1.__extends)(GridModel, _super);
  function GridModel() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  GridModel.prototype.mergeDefaultAndTheme = function (option, ecModel) {
    var outerBoundsCp = (0,_util_layout_js__rspack_import_2.getLayoutParams)(option.outerBounds);
    _super.prototype.mergeDefaultAndTheme.apply(this, arguments);
    if (outerBoundsCp && option.outerBounds) {
      (0,_util_layout_js__rspack_import_2.mergeLayoutParam)(option.outerBounds, outerBoundsCp);
    }
  };
  GridModel.prototype.mergeOption = function (newOption, ecModel) {
    _super.prototype.mergeOption.apply(this, arguments);
    if (this.option.outerBounds && newOption.outerBounds) {
      (0,_util_layout_js__rspack_import_2.mergeLayoutParam)(this.option.outerBounds, newOption.outerBounds);
    }
  };
  GridModel.type = 'grid';
  GridModel.dependencies = ['xAxis', 'yAxis'];
  GridModel.layoutMode = 'box';
  GridModel.defaultOption = {
    show: false,
    // zlevel: 0,
    z: 0,
    left: '15%',
    top: 65,
    right: '10%',
    bottom: 80,
    // If grid size contain label
    containLabel: false,
    outerBoundsMode: 'auto',
    outerBounds: OUTER_BOUNDS_DEFAULT,
    outerBoundsContain: 'all',
    outerBoundsClampWidth: OUTER_BOUNDS_CLAMP_DEFAULT[0],
    outerBoundsClampHeight: OUTER_BOUNDS_CLAMP_DEFAULT[1],
    // width: {totalWidth} - left - right,
    // height: {totalHeight} - top - bottom,
    backgroundColor: _visual_tokens_js__rspack_import_3["default"].color.transparent,
    borderWidth: 1,
    borderColor: _visual_tokens_js__rspack_import_3["default"].color.neutral30
  };
  return GridModel;
}(_model_Component_js__rspack_import_0["default"]);
/* export default */ __webpack_exports__["default"] = (GridModel);

}),
86982: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createCartesianAxisViewCommonPartBuilder: function() { return createCartesianAxisViewCommonPartBuilder; },
  findAxisModels: function() { return findAxisModels; },
  isCartesian2DDeclaredSeries: function() { return isCartesian2DDeclaredSeries; },
  isCartesian2DInjectedAsDataCoordSys: function() { return isCartesian2DInjectedAsDataCoordSys; },
  layout: function() { return layout; },
  updateCartesianAxisViewCommonPartBuilder: function() { return updateCartesianAxisViewCommonPartBuilder; }
});
/* import */ var zrender_lib_core_util_js__rspack_import_0 = __webpack_require__(9774);
/* import */ var _util_model_js__rspack_import_1 = __webpack_require__(67698);
/* import */ var _component_axis_AxisBuilder_js__rspack_import_3 = __webpack_require__(45430);
/* import */ var _scale_helper_js__rspack_import_2 = __webpack_require__(19111);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/




/**
 * [__CAUTION__]
 *  MUST guarantee: if only the input `rect` and `axis.extent` changed,
 *  only `layout.position` changes.
 *  This character is replied on `grid.contain` calculation in `AxisBuilder`.
 *  @see updateCartesianAxisViewCommonPartBuilder
 *
 * Can only be called after coordinate system creation stage.
 * (Can be called before coordinate system update stage).
 */
function layout(rect, axisModel, opt) {
  opt = opt || {};
  var axis = axisModel.axis;
  var layout = {};
  var otherAxisOnZeroOf = axis.getAxesOnZeroOf()[0];
  var rawAxisPosition = axis.position;
  var axisPosition = otherAxisOnZeroOf ? 'onZero' : rawAxisPosition;
  var axisDim = axis.dim;
  var rectBound = [rect.x, rect.x + rect.width, rect.y, rect.y + rect.height];
  var idx = {
    left: 0,
    right: 1,
    top: 0,
    bottom: 1,
    onZero: 2
  };
  var axisOffset = axisModel.get('offset') || 0;
  var posBound = axisDim === 'x' ? [rectBound[2] - axisOffset, rectBound[3] + axisOffset] : [rectBound[0] - axisOffset, rectBound[1] + axisOffset];
  if (otherAxisOnZeroOf) {
    var onZeroCoord = otherAxisOnZeroOf.toGlobalCoord(otherAxisOnZeroOf.dataToCoord(0));
    posBound[idx.onZero] = Math.max(Math.min(onZeroCoord, posBound[1]), posBound[0]);
  }
  // Axis position
  layout.position = [axisDim === 'y' ? posBound[idx[axisPosition]] : rectBound[0], axisDim === 'x' ? posBound[idx[axisPosition]] : rectBound[3]];
  // Axis rotation
  layout.rotation = Math.PI / 2 * (axisDim === 'x' ? 0 : 1);
  // Tick and label direction, x y is axisDim
  var dirMap = {
    top: -1,
    bottom: 1,
    left: -1,
    right: 1
  };
  layout.labelDirection = layout.tickDirection = layout.nameDirection = dirMap[rawAxisPosition];
  layout.labelOffset = otherAxisOnZeroOf ? posBound[idx[rawAxisPosition]] - posBound[idx.onZero] : 0;
  if (axisModel.get(['axisTick', 'inside'])) {
    layout.tickDirection = -layout.tickDirection;
  }
  if (zrender_lib_core_util_js__rspack_import_0.retrieve(opt.labelInside, axisModel.get(['axisLabel', 'inside']))) {
    layout.labelDirection = -layout.labelDirection;
  }
  // Special label rotation
  var labelRotate = axisModel.get(['axisLabel', 'rotate']);
  layout.labelRotate = axisPosition === 'top' ? -labelRotate : labelRotate;
  // Over splitLine and splitArea
  layout.z2 = 1;
  return layout;
}
function isCartesian2DDeclaredSeries(seriesModel) {
  return seriesModel.get('coordinateSystem') === 'cartesian2d';
}
/**
 * Note: If pie (or other similar series) use cartesian2d, here
 *  option `seriesModel.get('coordinateSystem') === 'cartesian2d'`
 *  and `seriesModel.coordinateSystem !== cartesian2dCoordSysInstance`
 *  and `seriesModel.boxCoordinateSystem === cartesian2dCoordSysInstance`,
 *  the logic below is probably wrong, therefore skip it temporarily.
 */
function isCartesian2DInjectedAsDataCoordSys(seriesModel) {
  return seriesModel.coordinateSystem && seriesModel.coordinateSystem.type === 'cartesian2d';
}
function findAxisModels(seriesModel) {
  var axisModelMap = {
    xAxisModel: null,
    yAxisModel: null
  };
  zrender_lib_core_util_js__rspack_import_0.each(axisModelMap, function (v, key) {
    var axisType = key.replace(/Model$/, '');
    var axisModel = seriesModel.getReferringComponents(axisType, _util_model_js__rspack_import_1.SINGLE_REFERRING).models[0];
    if (false) {}
    axisModelMap[key] = axisModel;
  });
  return axisModelMap;
}
function createCartesianAxisViewCommonPartBuilder(gridRect, cartesians, axisModel, api, ctx, defaultNameMoveOverlap) {
  var layoutResult = layout(gridRect, axisModel);
  var axisLineAutoShow = false;
  var axisTickAutoShow = false;
  // Not show axisTick or axisLine if other axis is category / time
  for (var i = 0; i < cartesians.length; i++) {
    if ((0,_scale_helper_js__rspack_import_2.isIntervalOrLogScale)(cartesians[i].getOtherAxis(axisModel.axis).scale)) {
      // Still show axis tick or axisLine if other axis is value / log
      axisLineAutoShow = axisTickAutoShow = true;
      if (axisModel.axis.type === 'category' && axisModel.axis.onBand) {
        axisTickAutoShow = false;
      }
    }
  }
  layoutResult.axisLineAutoShow = axisLineAutoShow;
  layoutResult.axisTickAutoShow = axisTickAutoShow;
  layoutResult.defaultNameMoveOverlap = defaultNameMoveOverlap;
  return new _component_axis_AxisBuilder_js__rspack_import_3["default"](axisModel, api, layoutResult, ctx);
}
function updateCartesianAxisViewCommonPartBuilder(axisBuilder, gridRect, axisModel) {
  var newRaw = layout(gridRect, axisModel);
  if (false) { var oldRaw_1 }
  axisBuilder.updateCfg(newRaw);
}

}),
17556: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  installLegacyGridContainLabel: function() { return installLegacyGridContainLabel; }
});
/* import */ var zrender_lib_core_BoundingRect_js__rspack_import_4 = __webpack_require__(7544);
/* import */ var zrender_lib_core_util_js__rspack_import_1 = __webpack_require__(9774);
/* import */ var _Grid_js__rspack_import_0 = __webpack_require__(89542);
/* import */ var _scale_Ordinal_js__rspack_import_2 = __webpack_require__(50126);
/* import */ var _axisHelper_js__rspack_import_3 = __webpack_require__(62159);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/





/**
 * [CAUTION] Never export methods other than `installLegacyGridContainLabel`.
 */
function installLegacyGridContainLabel() {
  (0,_Grid_js__rspack_import_0.registerLegacyGridContainLabelImpl)(legacyLayOutGridByContained);
}
/**
 * The input gridRect and axes will be modified.
 */
function legacyLayOutGridByContained(axesList, gridRect) {
  (0,zrender_lib_core_util_js__rspack_import_1.each)(axesList, function (axis) {
    if (!axis.model.get(['axisLabel', 'inside'])) {
      var labelUnionRect = estimateLabelUnionRect(axis);
      if (labelUnionRect) {
        var dim = axis.isHorizontal() ? 'height' : 'width';
        var margin = axis.model.get(['axisLabel', 'margin']);
        gridRect[dim] -= labelUnionRect[dim] + margin;
        if (axis.position === 'top') {
          gridRect.y += labelUnionRect.height + margin;
        } else if (axis.position === 'left') {
          gridRect.x += labelUnionRect.width + margin;
        }
      }
    }
  });
}
/**
 * @return Be null/undefined if no labels.
 */
function estimateLabelUnionRect(axis) {
  var axisModel = axis.model;
  var scale = axis.scale;
  if (!axisModel.get(['axisLabel', 'show']) || scale.isBlank()) {
    return;
  }
  var realNumberScaleTicks;
  var tickCount;
  var categoryScaleExtent = scale.getExtent();
  // Optimize for large category data, avoid call `getTicks()`.
  if (scale instanceof _scale_Ordinal_js__rspack_import_2["default"]) {
    tickCount = scale.count();
  } else {
    realNumberScaleTicks = scale.getTicks();
    tickCount = realNumberScaleTicks.length;
  }
  var axisLabelModel = axis.getLabelModel();
  var labelFormatter = (0,_axisHelper_js__rspack_import_3.makeLabelFormatter)(axis);
  var rect;
  var step = 1;
  // Simple optimization for large amount of category labels
  if (tickCount > 40) {
    step = Math.ceil(tickCount / 40);
  }
  for (var i = 0; i < tickCount; i += step) {
    var tick = realNumberScaleTicks ? realNumberScaleTicks[i] : {
      value: categoryScaleExtent[0] + i
    };
    var label = labelFormatter(tick, i);
    var unrotatedSingleRect = axisLabelModel.getTextRect(label);
    var singleRect = rotateTextRect(unrotatedSingleRect, axisLabelModel.get('rotate') || 0);
    rect ? rect.union(singleRect) : rect = singleRect;
  }
  return rect;
  function rotateTextRect(textRect, rotate) {
    var rotateRadians = rotate * Math.PI / 180;
    var beforeWidth = textRect.width;
    var beforeHeight = textRect.height;
    var afterWidth = beforeWidth * Math.abs(Math.cos(rotateRadians)) + Math.abs(beforeHeight * Math.sin(rotateRadians));
    var afterHeight = beforeWidth * Math.abs(Math.sin(rotateRadians)) + Math.abs(beforeHeight * Math.cos(rotateRadians));
    var rotatedRect = new zrender_lib_core_BoundingRect_js__rspack_import_4["default"](textRect.x, textRect.y, afterWidth, afterHeight);
    return rotatedRect;
  }
}

}),
88197: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return cartesianPrepareCustom; }
});
/* import */ var zrender_lib_core_util_js__rspack_import_0 = __webpack_require__(9774);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

function dataToCoordSize(dataSize, dataItem) {
  // dataItem is necessary in log axis.
  dataItem = dataItem || [0, 0];
  return zrender_lib_core_util_js__rspack_import_0.map(['x', 'y'], function (dim, dimIdx) {
    var axis = this.getAxis(dim);
    var val = dataItem[dimIdx];
    var halfSize = dataSize[dimIdx] / 2;
    return axis.type === 'category' ? axis.getBandWidth() : Math.abs(axis.dataToCoord(val - halfSize) - axis.dataToCoord(val + halfSize));
  }, this);
}
function cartesianPrepareCustom(coordSys) {
  var rect = coordSys.master.getRect();
  return {
    coordSys: {
      // The name exposed to user is always 'cartesian2d' but not 'grid'.
      type: 'cartesian2d',
      x: rect.x,
      y: rect.y,
      width: rect.width,
      height: rect.height
    },
    api: {
      coord: function (data) {
        // do not provide "out" param
        return coordSys.dataToPoint(data);
      },
      size: zrender_lib_core_util_js__rspack_import_0.bind(dataToCoordSize, coordSys)
    }
  };
}

}),
28842: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var tslib__rspack_import_1 = __webpack_require__(2492);
/* import */ var zrender_lib_core_util_js__rspack_import_6 = __webpack_require__(9774);
/* import */ var _util_model_js__rspack_import_4 = __webpack_require__(67698);
/* import */ var _model_Component_js__rspack_import_0 = __webpack_require__(53075);
/* import */ var _model_Model_js__rspack_import_7 = __webpack_require__(37931);
/* import */ var _geoCreator_js__rspack_import_5 = __webpack_require__(83034);
/* import */ var _geoSourceManager_js__rspack_import_2 = __webpack_require__(72976);
/* import */ var _visual_tokens_js__rspack_import_3 = __webpack_require__(87473);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
var GeoModel = /** @class */function (_super) {
  (0,tslib__rspack_import_1.__extends)(GeoModel, _super);
  function GeoModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = GeoModel.type;
    return _this;
  }
  GeoModel.prototype.init = function (option, parentModel, ecModel) {
    this.mergeDefaultAndTheme(option, ecModel);
    var source = _geoSourceManager_js__rspack_import_2["default"].getGeoResource(option.map);
    if (source && source.type === 'geoJSON') {
      var itemStyle = option.itemStyle = option.itemStyle || {};
      if (!('color' in itemStyle)) {
        itemStyle.color = option.defaultItemStyleColor || _visual_tokens_js__rspack_import_3["default"].color.backgroundTint;
      }
    }
    // Default label emphasis `show`
    _util_model_js__rspack_import_4.defaultEmphasis(option, 'label', ['show']);
  };
  GeoModel.prototype.optionUpdated = function () {
    var _this = this;
    var option = this.option;
    option.regions = _geoCreator_js__rspack_import_5["default"].getFilledRegions(option.regions, option.map, option.nameMap, option.nameProperty);
    var selectedMap = {};
    this._optionModelMap = zrender_lib_core_util_js__rspack_import_6.reduce(option.regions || [], function (optionModelMap, regionOpt) {
      var regionName = regionOpt.name;
      if (regionName) {
        optionModelMap.set(regionName, new _model_Model_js__rspack_import_7["default"](regionOpt, _this, _this.ecModel));
        if (regionOpt.selected) {
          selectedMap[regionName] = true;
        }
      }
      return optionModelMap;
    }, zrender_lib_core_util_js__rspack_import_6.createHashMap());
    if (!option.selectedMap) {
      option.selectedMap = selectedMap;
    }
  };
  /**
   * Get model of region.
   */
  GeoModel.prototype.getRegionModel = function (name) {
    return this._optionModelMap.get(name) || new _model_Model_js__rspack_import_7["default"](null, this, this.ecModel);
  };
  /**
   * Format label
   * @param name Region name
   */
  GeoModel.prototype.getFormattedLabel = function (name, status) {
    var regionModel = this.getRegionModel(name);
    var formatter = status === 'normal' ? regionModel.get(['label', 'formatter']) : regionModel.get(['emphasis', 'label', 'formatter']);
    var params = {
      name: name
    };
    if (zrender_lib_core_util_js__rspack_import_6.isFunction(formatter)) {
      params.status = status;
      return formatter(params);
    } else if (zrender_lib_core_util_js__rspack_import_6.isString(formatter)) {
      return formatter.replace('{a}', name != null ? name : '');
    }
  };
  GeoModel.prototype.setZoom = function (zoom) {
    this.option.zoom = zoom;
  };
  GeoModel.prototype.setCenter = function (center) {
    this.option.center = center;
  };
  // PENGING If selectedMode is null ?
  GeoModel.prototype.select = function (name) {
    var option = this.option;
    var selectedMode = option.selectedMode;
    if (!selectedMode) {
      return;
    }
    if (selectedMode !== 'multiple') {
      option.selectedMap = null;
    }
    var selectedMap = option.selectedMap || (option.selectedMap = {});
    selectedMap[name] = true;
  };
  GeoModel.prototype.unSelect = function (name) {
    var selectedMap = this.option.selectedMap;
    if (selectedMap) {
      selectedMap[name] = false;
    }
  };
  GeoModel.prototype.toggleSelected = function (name) {
    this[this.isSelected(name) ? 'unSelect' : 'select'](name);
  };
  GeoModel.prototype.isSelected = function (name) {
    var selectedMap = this.option.selectedMap;
    return !!(selectedMap && selectedMap[name]);
  };
  GeoModel.type = 'geo';
  GeoModel.layoutMode = 'box';
  GeoModel.defaultOption = {
    // zlevel: 0,
    z: 0,
    show: true,
    left: 'center',
    top: 'center',
    // Default value:
    // for geoSVG source: 1,
    // for geoJSON source: 0.75.
    aspectScale: null,
    // /// Layout with center and size
    // If you want to put map in a fixed size box with right aspect ratio
    // This two properties may be more convenient
    // layoutCenter: [50%, 50%]
    // layoutSize: 100
    silent: false,
    // Map type
    map: '',
    // Define left-top, right-bottom coords to control view
    // For example, [ [180, 90], [-180, -90] ]
    boundingCoords: null,
    // Default on center of map
    center: null,
    zoom: 1,
    scaleLimit: null,
    // selectedMode: false
    label: {
      show: false,
      color: _visual_tokens_js__rspack_import_3["default"].color.tertiary
    },
    itemStyle: {
      borderWidth: 0.5,
      borderColor: _visual_tokens_js__rspack_import_3["default"].color.border
    },
    emphasis: {
      label: {
        show: true,
        color: _visual_tokens_js__rspack_import_3["default"].color.primary
      },
      itemStyle: {
        color: _visual_tokens_js__rspack_import_3["default"].color.highlight
      }
    },
    select: {
      label: {
        show: true,
        color: _visual_tokens_js__rspack_import_3["default"].color.primary
      },
      itemStyle: {
        color: _visual_tokens_js__rspack_import_3["default"].color.highlight
      }
    },
    regions: []
    // tooltip: {
    //     show: false
    // }
  };
  return GeoModel;
}(_model_Component_js__rspack_import_0["default"]);
/* export default */ __webpack_exports__["default"] = (GeoModel);

}),
44056: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  GeoJSONLineStringGeometry: function() { return GeoJSONLineStringGeometry; },
  GeoJSONPolygonGeometry: function() { return GeoJSONPolygonGeometry; },
  GeoJSONRegion: function() { return GeoJSONRegion; },
  GeoSVGRegion: function() { return GeoSVGRegion; },
  Region: function() { return Region; }
});
/* import */ var tslib__rspack_import_1 = __webpack_require__(2492);
/* import */ var zrender_lib_core_BoundingRect_js__rspack_import_3 = __webpack_require__(7544);
/* import */ var zrender_lib_core_vector_js__rspack_import_0 = __webpack_require__(44721);
/* import */ var zrender_lib_contain_polygon_js__rspack_import_4 = __webpack_require__(60339);
/* import */ var zrender_lib_core_matrix_js__rspack_import_5 = __webpack_require__(46239);
/* import */ var zrender_lib_core_util_js__rspack_import_2 = __webpack_require__(9774);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/






var TMP_TRANSFORM = [];
function transformPoints(points, transform) {
  for (var p = 0; p < points.length; p++) {
    zrender_lib_core_vector_js__rspack_import_0.applyTransform(points[p], points[p], transform);
  }
}
function updateBBoxFromPoints(points, min, max, projection) {
  for (var i = 0; i < points.length; i++) {
    var p = points[i];
    if (projection) {
      // projection may return null point.
      p = projection.project(p);
    }
    if (p && isFinite(p[0]) && isFinite(p[1])) {
      zrender_lib_core_vector_js__rspack_import_0.min(min, min, p);
      zrender_lib_core_vector_js__rspack_import_0.max(max, max, p);
    }
  }
}
function centroid(points) {
  var signedArea = 0;
  var cx = 0;
  var cy = 0;
  var len = points.length;
  var x0 = points[len - 1][0];
  var y0 = points[len - 1][1];
  // Polygon should been closed.
  for (var i = 0; i < len; i++) {
    var x1 = points[i][0];
    var y1 = points[i][1];
    var a = x0 * y1 - x1 * y0;
    signedArea += a;
    cx += (x0 + x1) * a;
    cy += (y0 + y1) * a;
    x0 = x1;
    y0 = y1;
  }
  return signedArea ? [cx / signedArea / 3, cy / signedArea / 3, signedArea] : [points[0][0] || 0, points[0][1] || 0];
}
var Region = /** @class */function () {
  function Region(name) {
    this.name = name;
  }
  Region.prototype.setCenter = function (center) {
    this._center = center;
  };
  /**
   * Get center point in data unit. That is,
   * for GeoJSONRegion, the unit is lat/lng,
   * for GeoSVGRegion, the unit is SVG local coord.
   */
  Region.prototype.getCenter = function () {
    var center = this._center;
    if (!center) {
      // In most cases there are no need to calculate this center.
      // So calculate only when called.
      center = this._center = this.calcCenter();
    }
    return center;
  };
  return Region;
}();

var GeoJSONPolygonGeometry = /** @class */function () {
  function GeoJSONPolygonGeometry(exterior, interiors) {
    this.type = 'polygon';
    this.exterior = exterior;
    this.interiors = interiors;
  }
  return GeoJSONPolygonGeometry;
}();

var GeoJSONLineStringGeometry = /** @class */function () {
  function GeoJSONLineStringGeometry(points) {
    this.type = 'linestring';
    this.points = points;
  }
  return GeoJSONLineStringGeometry;
}();

var GeoJSONRegion = /** @class */function (_super) {
  (0,tslib__rspack_import_1.__extends)(GeoJSONRegion, _super);
  function GeoJSONRegion(name, geometries, cp) {
    var _this = _super.call(this, name) || this;
    _this.type = 'geoJSON';
    _this.geometries = geometries;
    _this._center = cp && [cp[0], cp[1]];
    return _this;
  }
  GeoJSONRegion.prototype.calcCenter = function () {
    var geometries = this.geometries;
    var largestGeo;
    var largestGeoSize = 0;
    for (var i = 0; i < geometries.length; i++) {
      var geo = geometries[i];
      var exterior = geo.exterior;
      // Simple trick to use points count instead of polygon area as region size.
      // Ignore linestring
      var size = exterior && exterior.length;
      if (size > largestGeoSize) {
        largestGeo = geo;
        largestGeoSize = size;
      }
    }
    if (largestGeo) {
      return centroid(largestGeo.exterior);
    }
    // from bounding rect by default.
    var rect = this.getBoundingRect();
    return [rect.x + rect.width / 2, rect.y + rect.height / 2];
  };
  GeoJSONRegion.prototype.getBoundingRect = function (projection) {
    var rect = this._rect;
    // Always recalculate if using projection.
    if (rect && !projection) {
      return rect;
    }
    var min = [Infinity, Infinity];
    var max = [-Infinity, -Infinity];
    var geometries = this.geometries;
    (0,zrender_lib_core_util_js__rspack_import_2.each)(geometries, function (geo) {
      if (geo.type === 'polygon') {
        // Doesn't consider hole
        updateBBoxFromPoints(geo.exterior, min, max, projection);
      } else {
        (0,zrender_lib_core_util_js__rspack_import_2.each)(geo.points, function (points) {
          updateBBoxFromPoints(points, min, max, projection);
        });
      }
    });
    // Normalie invalid bounding.
    if (!(isFinite(min[0]) && isFinite(min[1]) && isFinite(max[0]) && isFinite(max[1]))) {
      min[0] = min[1] = max[0] = max[1] = 0;
    }
    rect = new zrender_lib_core_BoundingRect_js__rspack_import_3["default"](min[0], min[1], max[0] - min[0], max[1] - min[1]);
    if (!projection) {
      this._rect = rect;
    }
    return rect;
  };
  GeoJSONRegion.prototype.contain = function (coord) {
    var rect = this.getBoundingRect();
    var geometries = this.geometries;
    if (!rect.contain(coord[0], coord[1])) {
      return false;
    }
    loopGeo: for (var i = 0, len = geometries.length; i < len; i++) {
      var geo = geometries[i];
      // Only support polygon.
      if (geo.type !== 'polygon') {
        continue;
      }
      var exterior = geo.exterior;
      var interiors = geo.interiors;
      if (zrender_lib_contain_polygon_js__rspack_import_4.contain(exterior, coord[0], coord[1])) {
        // Not in the region if point is in the hole.
        for (var k = 0; k < (interiors ? interiors.length : 0); k++) {
          if (zrender_lib_contain_polygon_js__rspack_import_4.contain(interiors[k], coord[0], coord[1])) {
            continue loopGeo;
          }
        }
        return true;
      }
    }
    return false;
  };
  /**
   * Transform the raw coords to target bounding.
   * @param x
   * @param y
   * @param width
   * @param height
   */
  GeoJSONRegion.prototype.transformTo = function (x, y, width, height) {
    var rect = this.getBoundingRect();
    var aspect = rect.width / rect.height;
    if (!width) {
      width = aspect * height;
    } else if (!height) {
      height = width / aspect;
    }
    var target = new zrender_lib_core_BoundingRect_js__rspack_import_3["default"](x, y, width, height);
    var transform = rect.calculateTransform(target);
    var geometries = this.geometries;
    for (var i = 0; i < geometries.length; i++) {
      var geo = geometries[i];
      if (geo.type === 'polygon') {
        transformPoints(geo.exterior, transform);
        (0,zrender_lib_core_util_js__rspack_import_2.each)(geo.interiors, function (interior) {
          transformPoints(interior, transform);
        });
      } else {
        (0,zrender_lib_core_util_js__rspack_import_2.each)(geo.points, function (points) {
          transformPoints(points, transform);
        });
      }
    }
    rect = this._rect;
    rect.copy(target);
    // Update center
    this._center = [rect.x + rect.width / 2, rect.y + rect.height / 2];
  };
  GeoJSONRegion.prototype.cloneShallow = function (name) {
    name == null && (name = this.name);
    var newRegion = new GeoJSONRegion(name, this.geometries, this._center);
    newRegion._rect = this._rect;
    newRegion.transformTo = null; // Simply avoid to be called.
    return newRegion;
  };
  return GeoJSONRegion;
}(Region);

var GeoSVGRegion = /** @class */function (_super) {
  (0,tslib__rspack_import_1.__extends)(GeoSVGRegion, _super);
  function GeoSVGRegion(name, elOnlyForCalculate) {
    var _this = _super.call(this, name) || this;
    _this.type = 'geoSVG';
    _this._elOnlyForCalculate = elOnlyForCalculate;
    return _this;
  }
  GeoSVGRegion.prototype.calcCenter = function () {
    var el = this._elOnlyForCalculate;
    var rect = el.getBoundingRect();
    var center = [rect.x + rect.width / 2, rect.y + rect.height / 2];
    var mat = zrender_lib_core_matrix_js__rspack_import_5.identity(TMP_TRANSFORM);
    var target = el;
    while (target && !target.isGeoSVGGraphicRoot) {
      zrender_lib_core_matrix_js__rspack_import_5.mul(mat, target.getLocalTransform(), mat);
      target = target.parent;
    }
    zrender_lib_core_matrix_js__rspack_import_5.invert(mat, mat);
    zrender_lib_core_vector_js__rspack_import_0.applyTransform(center, center, mat);
    return center;
  };
  return GeoSVGRegion;
}(Region);


}),
83034: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ geo_geoCreator; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(9774);
// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(2492);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/BoundingRect.js
var BoundingRect = __webpack_require__(7544);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/View.js
var View = __webpack_require__(28547);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/geo/geoSourceManager.js + 5 modules
var geoSourceManager = __webpack_require__(72976);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js
var util_model = __webpack_require__(67698);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/geo/Geo.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/







var GEO_DEFAULT_PARAMS = {
  'geoJSON': {
    aspectScale: 0.75,
    invertLongitute: true
  },
  'geoSVG': {
    aspectScale: 1,
    invertLongitute: false
  }
};
var geo2DDimensions = ['lng', 'lat'];
var Geo_Geo = /** @class */function (_super) {
  (0,tslib_es6.__extends)(Geo, _super);
  function Geo(name, map, opt) {
    var _this = _super.call(this, name, {
      api: opt.api,
      ecModel: opt.ecModel
    }) || this;
    _this.dimensions = geo2DDimensions;
    _this.type = 'geo';
    // Only store specified name coord via `addGeoCoord`.
    _this._nameCoordMap = util.createHashMap();
    _this.map = map;
    var projection = opt.projection;
    var source = geoSourceManager["default"].load(map, opt.nameMap, opt.nameProperty);
    var resource = geoSourceManager["default"].getGeoResource(map);
    var resourceType = _this.resourceType = resource ? resource.type : null;
    var regions = _this.regions = source.regions;
    var defaultParams = GEO_DEFAULT_PARAMS[resource.type];
    _this._regionsMap = source.regionsMap;
    _this.regions = source.regions;
    if (false) {}
    _this.projection = projection;
    var boundingRect;
    if (projection) {
      // Can't reuse the raw bounding rect
      for (var i = 0; i < regions.length; i++) {
        var regionRect = regions[i].getBoundingRect(projection);
        boundingRect = boundingRect || regionRect.clone();
        boundingRect.union(regionRect);
      }
    } else {
      boundingRect = source.boundingRect;
    }
    _this.setBoundingRect(boundingRect.x, boundingRect.y, boundingRect.width, boundingRect.height);
    // aspectScale and invertLongitute actually is the parameters default raw projection.
    // So we ignore them if projection is given.
    // Ignore default aspect scale if projection exits.
    _this.aspectScale = projection ? 1 : util.retrieve2(opt.aspectScale, defaultParams.aspectScale);
    // Not invert longitude if projection exits.
    _this._invertLongitute = projection ? false : defaultParams.invertLongitute;
    return _this;
  }
  Geo.prototype._transformTo = function (x, y, width, height) {
    var rect = this.getBoundingRect();
    var invertLongitute = this._invertLongitute;
    rect = rect.clone();
    if (invertLongitute) {
      // Longitude is inverted.
      rect.y = -rect.y - rect.height;
    }
    var rawTransformable = this._rawTransformable;
    rawTransformable.transform = rect.calculateTransform(new BoundingRect["default"](x, y, width, height));
    var rawParent = rawTransformable.parent;
    rawTransformable.parent = null;
    rawTransformable.decomposeTransform();
    rawTransformable.parent = rawParent;
    if (invertLongitute) {
      rawTransformable.scaleY = -rawTransformable.scaleY;
    }
    this._updateTransform();
  };
  Geo.prototype.getRegion = function (name) {
    return this._regionsMap.get(name);
  };
  Geo.prototype.getRegionByCoord = function (coord) {
    var regions = this.regions;
    for (var i = 0; i < regions.length; i++) {
      var region = regions[i];
      if (region.type === 'geoJSON' && region.contain(coord)) {
        return regions[i];
      }
    }
  };
  /**
   * Add geoCoord for indexing by name
   */
  Geo.prototype.addGeoCoord = function (name, geoCoord) {
    this._nameCoordMap.set(name, geoCoord);
  };
  /**
   * Get geoCoord by name
   */
  Geo.prototype.getGeoCoord = function (name) {
    var region = this._regionsMap.get(name);
    // Calculate center only on demand.
    return this._nameCoordMap.get(name) || region && region.getCenter();
  };
  Geo.prototype.dataToPoint = function (data, noRoam, out) {
    if (util.isString(data)) {
      // Map area name to geoCoord
      data = this.getGeoCoord(data);
    }
    if (data) {
      var projection = this.projection;
      if (projection) {
        // projection may return null point.
        data = projection.project(data);
      }
      return data && this.projectedToPoint(data, noRoam, out);
    }
  };
  Geo.prototype.pointToData = function (point, reserved, out) {
    var projection = this.projection;
    if (projection) {
      // projection may return null point.
      point = projection.unproject(point);
    }
    // FIXME: if no `point`, should return [NaN, NaN], rather than undefined.
    //  null/undefined has special meaning in `convertFromPixel`.
    return point && this.pointToProjected(point, out);
  };
  /**
   * Point to projected data. Same with pointToData when projection is used.
   */
  Geo.prototype.pointToProjected = function (point, out) {
    return _super.prototype.pointToData.call(this, point, 0, out);
  };
  Geo.prototype.projectedToPoint = function (projected, noRoam, out) {
    return _super.prototype.dataToPoint.call(this, projected, noRoam, out);
  };
  Geo.prototype.convertToPixel = function (ecModel, finder, value) {
    var coordSys = getCoordSys(finder);
    return coordSys === this ? coordSys.dataToPoint(value) : null;
  };
  Geo.prototype.convertFromPixel = function (ecModel, finder, pixel) {
    var coordSys = getCoordSys(finder);
    return coordSys === this ? coordSys.pointToData(pixel) : null;
  };
  return Geo;
}(View["default"]);
;
util.mixin(Geo_Geo, View["default"]);
function getCoordSys(finder) {
  var geoModel = finder.geoModel;
  var seriesModel = finder.seriesModel;
  return geoModel ? geoModel.coordinateSystem : seriesModel ? seriesModel.coordinateSystem // For map series.
  || (seriesModel.getReferringComponents('geo', util_model.SINGLE_REFERRING).models[0] || {}).coordinateSystem : null;
}
/* export default */ var geo_Geo = (Geo_Geo);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/layout.js
var layout = __webpack_require__(88485);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(64782);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/vector.js
var vector = __webpack_require__(44721);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/core/CoordinateSystem.js
var CoordinateSystem = __webpack_require__(58241);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/geo/geoCreator.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/








/**
 * Resize method bound to the geo
 */
function resizeGeo(geoModel, api) {
  var boundingCoords = geoModel.get('boundingCoords');
  if (boundingCoords != null) {
    var leftTop_1 = boundingCoords[0];
    var rightBottom_1 = boundingCoords[1];
    if (!(isFinite(leftTop_1[0]) && isFinite(leftTop_1[1]) && isFinite(rightBottom_1[0]) && isFinite(rightBottom_1[1]))) {
      if (false) {}
    } else {
      // Sample around the lng/lat rect and use projection to calculate actual bounding rect.
      var projection_1 = this.projection;
      if (projection_1) {
        var xMin = leftTop_1[0];
        var yMin = leftTop_1[1];
        var xMax = rightBottom_1[0];
        var yMax = rightBottom_1[1];
        leftTop_1 = [Infinity, Infinity];
        rightBottom_1 = [-Infinity, -Infinity];
        // TODO better way?
        var sampleLine = function (x0, y0, x1, y1) {
          var dx = x1 - x0;
          var dy = y1 - y0;
          for (var i = 0; i <= 100; i++) {
            var p = i / 100;
            var pt = projection_1.project([x0 + dx * p, y0 + dy * p]);
            vector.min(leftTop_1, leftTop_1, pt);
            vector.max(rightBottom_1, rightBottom_1, pt);
          }
        };
        // Top
        sampleLine(xMin, yMin, xMax, yMin);
        // Right
        sampleLine(xMax, yMin, xMax, yMax);
        // Bottom
        sampleLine(xMax, yMax, xMin, yMax);
        // Left
        sampleLine(xMin, yMax, xMax, yMin);
      }
      this.setBoundingRect(leftTop_1[0], leftTop_1[1], rightBottom_1[0] - leftTop_1[0], rightBottom_1[1] - leftTop_1[1]);
    }
  }
  var rect = this.getBoundingRect();
  var centerOption = geoModel.get('layoutCenter');
  var sizeOption = geoModel.get('layoutSize');
  // Laying out geo on `dataCoordSys`, such as cartesian, works theoretically but not supported yet.
  // Therefore here we only handle cases that laying out on `boxCoordSys`, such as matrix/calendar.
  var refContainer = layout.createBoxLayoutReference(geoModel, api).refContainer;
  var aspect = rect.width / rect.height * this.aspectScale;
  var useCenterAndSize = false;
  var center;
  var size;
  if (centerOption && sizeOption) {
    center = [number.parsePercent(centerOption[0], refContainer.width) + refContainer.x, number.parsePercent(centerOption[1], refContainer.height) + refContainer.y];
    size = number.parsePercent(sizeOption, Math.min(refContainer.width, refContainer.height));
    if (!isNaN(center[0]) && !isNaN(center[1]) && !isNaN(size)) {
      useCenterAndSize = true;
    } else {
      if (false) {}
    }
  }
  var viewRect;
  if (useCenterAndSize) {
    viewRect = {};
    if (aspect > 1) {
      // Width is same with size
      viewRect.width = size;
      viewRect.height = size / aspect;
    } else {
      viewRect.height = size;
      viewRect.width = size * aspect;
    }
    viewRect.y = center[1] - viewRect.height / 2;
    viewRect.x = center[0] - viewRect.width / 2;
  } else {
    // Use left/top/width/height
    var boxLayoutOption = geoModel.getBoxLayoutParams();
    boxLayoutOption.aspect = aspect;
    viewRect = layout.getLayoutRect(boxLayoutOption, refContainer);
    viewRect = layout.applyPreserveAspect(geoModel, viewRect, aspect);
  }
  this.setViewRect(viewRect.x, viewRect.y, viewRect.width, viewRect.height);
  this.setCenter(geoModel.get('center'));
  this.setZoom(geoModel.get('zoom'));
}
// Back compat for ECharts2, where the coord map is set on map series:
// {type: 'map', geoCoord: {'cityA': [116.46,39.92], 'cityA': [119.12,24.61]}},
function setGeoCoords(geo, model) {
  util.each(model.get('geoCoord'), function (geoCoord, name) {
    geo.addGeoCoord(name, geoCoord);
  });
}
var geoCreator_GeoCreator = /** @class */function () {
  function GeoCreator() {
    // For deciding which dimensions to use when creating list data
    this.dimensions = geo2DDimensions;
  }
  GeoCreator.prototype.create = function (ecModel, api) {
    var geoList = [];
    function getCommonGeoProperties(model) {
      return {
        nameProperty: model.get('nameProperty'),
        aspectScale: model.get('aspectScale'),
        projection: model.get('projection')
      };
    }
    // FIXME Create each time may be slow
    ecModel.eachComponent('geo', function (geoModel, idx) {
      var mapName = geoModel.get('map');
      var geo = new geo_Geo(mapName + idx, mapName, util.extend({
        nameMap: geoModel.get('nameMap'),
        api: api,
        ecModel: ecModel
      }, getCommonGeoProperties(geoModel)));
      geo.zoomLimit = geoModel.get('scaleLimit');
      geoList.push(geo);
      // setGeoCoords(geo, geoModel);
      geoModel.coordinateSystem = geo;
      geo.model = geoModel;
      // Inject resize method
      geo.resize = resizeGeo;
      geo.resize(geoModel, api);
    });
    ecModel.eachSeries(function (seriesModel) {
      (0,CoordinateSystem.injectCoordSysByOption)({
        targetModel: seriesModel,
        coordSysType: 'geo',
        coordSysProvider: function () {
          var geoModel = seriesModel.subType === 'map' ? seriesModel.getHostGeoModel() : seriesModel.getReferringComponents('geo', util_model.SINGLE_REFERRING).models[0];
          return geoModel && geoModel.coordinateSystem;
        },
        allowNotFound: true
      });
    });
    // If has map series
    var mapModelGroupBySeries = {};
    ecModel.eachSeriesByType('map', function (seriesModel) {
      if (!seriesModel.getHostGeoModel()) {
        var mapType = seriesModel.getMapType();
        mapModelGroupBySeries[mapType] = mapModelGroupBySeries[mapType] || [];
        mapModelGroupBySeries[mapType].push(seriesModel);
      }
    });
    util.each(mapModelGroupBySeries, function (mapSeries, mapType) {
      var nameMapList = util.map(mapSeries, function (singleMapSeries) {
        return singleMapSeries.get('nameMap');
      });
      var geo = new geo_Geo(mapType, mapType, util.extend({
        nameMap: util.mergeAll(nameMapList),
        api: api,
        ecModel: ecModel
      }, getCommonGeoProperties(mapSeries[0])));
      geo.zoomLimit = util.retrieve.apply(null, util.map(mapSeries, function (singleMapSeries) {
        return singleMapSeries.get('scaleLimit');
      }));
      geoList.push(geo);
      // Inject resize method
      geo.resize = resizeGeo;
      geo.resize(mapSeries[0], api);
      util.each(mapSeries, function (singleMapSeries) {
        singleMapSeries.coordinateSystem = geo;
        setGeoCoords(geo, singleMapSeries);
      });
    });
    return geoList;
  };
  /**
   * Fill given regions array
   */
  GeoCreator.prototype.getFilledRegions = function (originRegionArr, mapName, nameMap, nameProperty) {
    // Not use the original
    var regionsArr = (originRegionArr || []).slice();
    var dataNameMap = util.createHashMap();
    for (var i = 0; i < regionsArr.length; i++) {
      dataNameMap.set(regionsArr[i].name, regionsArr[i]);
    }
    var source = geoSourceManager["default"].load(mapName, nameMap, nameProperty);
    util.each(source.regions, function (region) {
      var name = region.name;
      var regionOption = dataNameMap.get(name);
      // apply specified echarts style in GeoJSON data
      var specifiedGeoJSONRegionStyle = region.properties && region.properties.echartsStyle;
      if (!regionOption) {
        regionOption = {
          name: name
        };
        regionsArr.push(regionOption);
      }
      specifiedGeoJSONRegionStyle && util.merge(regionOption, specifiedGeoJSONRegionStyle);
    });
    return regionsArr;
  };
  return GeoCreator;
}();
var geoCreator = new geoCreator_GeoCreator();
/* export default */ var geo_geoCreator = (geoCreator);

}),
72976: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ geoSourceManager; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(9774);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/tool/parseSVG.js
var parseSVG = __webpack_require__(78330);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Group.js
var Group = __webpack_require__(97786);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Rect.js + 1 modules
var Rect = __webpack_require__(52721);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/BoundingRect.js
var BoundingRect = __webpack_require__(7544);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/tool/parseXML.js
var parseXML = __webpack_require__(33105);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/geo/Region.js
var Region = __webpack_require__(44056);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/geo/GeoSVGResource.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/







/**
 * "region available" means that: enable users to set attribute `name="xxx"` on those tags
 * to make it be a region.
 * 1. region styles and its label styles can be defined in echarts opton:
 * ```js
 * geo: {
 *     regions: [{
 *         name: 'xxx',
 *         itemStyle: { ... },
 *         label: { ... }
 *     }, {
 *         ...
 *     },
 *     ...]
 * };
 * ```
 * 2. name can be duplicated in different SVG tag. All of the tags with the same name share
 * a region option. For exampel if there are two <path> representing two lung lobes. They have
 * no common parents but both of them need to display label "lung" inside.
 */
var REGION_AVAILABLE_SVG_TAG_MAP = (0,util.createHashMap)(['rect', 'circle', 'line', 'ellipse', 'polygon', 'polyline', 'path',
// <text> <tspan> are also enabled because some SVG might paint text itself,
// but still need to trigger events or tooltip.
'text', 'tspan',
// <g> is also enabled because this case: if multiple tags share one name
// and need label displayed, every tags will display the name, which is not
// expected. So we can put them into a <g name="xxx">. Thereby only one label
// displayed and located based on the bounding rect of the <g>.
'g']);
var GeoSVGResource_GeoSVGResource = /** @class */function () {
  function GeoSVGResource(mapName, svg) {
    this.type = 'geoSVG';
    // All used graphics. key: hostKey, value: root
    this._usedGraphicMap = (0,util.createHashMap)();
    // All unused graphics.
    this._freedGraphics = [];
    this._mapName = mapName;
    // Only perform parse to XML object here, which might be time
    // consiming for large SVG.
    // Although convert XML to zrender element is also time consiming,
    // if we do it here, the clone of zrender elements has to be
    // required. So we do it once for each geo instance, util real
    // performance issues call for optimizing it.
    this._parsedXML = (0,parseXML.parseXML)(svg);
  }
  GeoSVGResource.prototype.load = function /* nameMap: NameMap */
  () {
    // In the "load" stage, graphic need to be built to
    // get boundingRect for geo coordinate system.
    var firstGraphic = this._firstGraphic;
    // Create the return data structure only when first graphic created.
    // Because they will be used in geo coordinate system update stage,
    // and `regions` will be mounted at `geo` coordinate system,
    // in which there is no "view" info, so that it should better not to
    // make references to graphic elements.
    if (!firstGraphic) {
      firstGraphic = this._firstGraphic = this._buildGraphic(this._parsedXML);
      this._freedGraphics.push(firstGraphic);
      this._boundingRect = this._firstGraphic.boundingRect.clone();
      // PENDING: `nameMap` will not be supported until some real requirement come.
      // if (nameMap) {
      //     named = applyNameMap(named, nameMap);
      // }
      var _a = createRegions(firstGraphic.named),
        regions = _a.regions,
        regionsMap = _a.regionsMap;
      this._regions = regions;
      this._regionsMap = regionsMap;
    }
    return {
      boundingRect: this._boundingRect,
      regions: this._regions,
      regionsMap: this._regionsMap
    };
  };
  GeoSVGResource.prototype._buildGraphic = function (svgXML) {
    var result;
    var rootFromParse;
    try {
      result = svgXML && (0,parseSVG.parseSVG)(svgXML, {
        ignoreViewBox: true,
        ignoreRootClip: true
      }) || {};
      rootFromParse = result.root;
      (0,util.assert)(rootFromParse != null);
    } catch (e) {
      throw new Error('Invalid svg format\n' + e.message);
    }
    // Note: we keep the covenant that the root has no transform. So always add an extra root.
    var root = new Group["default"]();
    root.add(rootFromParse);
    root.isGeoSVGGraphicRoot = true;
    // [THE_RULE_OF_VIEWPORT_AND_VIEWBOX]
    //
    // Consider: `<svg width="..." height="..." viewBox="...">`
    // - the `width/height` we call it `svgWidth/svgHeight` for short.
    // - `(0, 0, svgWidth, svgHeight)` defines the viewport of the SVG, or say,
    //   "viewport boundingRect", or `boundingRect` for short.
    // - `viewBox` defines the transform from the real content ot the viewport.
    //   `viewBox` has the same unit as the content of SVG.
    //   If `viewBox` exists, a transform is defined, so the unit of `svgWidth/svgHeight` become
    //   different from the content of SVG. Otherwise, they are the same.
    //
    // If both `svgWidth/svgHeight/viewBox` are specified in a SVG file, the transform rule will be:
    // 0. `boundingRect` is `(0, 0, svgWidth, svgHeight)`. Set it to Geo['_rect'] (View['_rect']).
    // 1. Make a transform from `viewBox` to `boundingRect`.
    //    Note: only support `preserveAspectRatio 'xMidYMid'` here. That is, this transform will preserve
    //    the aspect ratio.
    // 2. Make a transform from boundingRect to Geo['_viewRect'] (View['_viewRect'])
    //    (`Geo`/`View` will do this job).
    //    Note: this transform might not preserve aspect radio, which depending on how users specify
    //    viewRect in echarts option (e.g., `geo.left/top/width/height` will not preserve aspect ratio,
    //    but `geo.layoutCenter/layoutSize` will preserve aspect ratio).
    //
    // If `svgWidth/svgHeight` not specified, we use `viewBox` as the `boundingRect` to make the SVG
    // layout look good.
    //
    // If neither `svgWidth/svgHeight` nor `viewBox` are not specified, we calculate the boundingRect
    // of the SVG content and use them to make SVG layout look good.
    var svgWidth = result.width;
    var svgHeight = result.height;
    var viewBoxRect = result.viewBoxRect;
    var boundingRect = this._boundingRect;
    if (!boundingRect) {
      var bRectX = void 0;
      var bRectY = void 0;
      var bRectWidth = void 0;
      var bRectHeight = void 0;
      if (svgWidth != null) {
        bRectX = 0;
        bRectWidth = svgWidth;
      } else if (viewBoxRect) {
        bRectX = viewBoxRect.x;
        bRectWidth = viewBoxRect.width;
      }
      if (svgHeight != null) {
        bRectY = 0;
        bRectHeight = svgHeight;
      } else if (viewBoxRect) {
        bRectY = viewBoxRect.y;
        bRectHeight = viewBoxRect.height;
      }
      // If both viewBox and svgWidth/svgHeight not specified,
      // we have to determine how to layout those element to make them look good.
      if (bRectX == null || bRectY == null) {
        var calculatedBoundingRect = rootFromParse.getBoundingRect();
        if (bRectX == null) {
          bRectX = calculatedBoundingRect.x;
          bRectWidth = calculatedBoundingRect.width;
        }
        if (bRectY == null) {
          bRectY = calculatedBoundingRect.y;
          bRectHeight = calculatedBoundingRect.height;
        }
      }
      boundingRect = this._boundingRect = new BoundingRect["default"](bRectX, bRectY, bRectWidth, bRectHeight);
    }
    if (viewBoxRect) {
      var viewBoxTransform = (0,parseSVG.makeViewBoxTransform)(viewBoxRect, boundingRect);
      // Only support `preserveAspectRatio 'xMidYMid'`
      rootFromParse.scaleX = rootFromParse.scaleY = viewBoxTransform.scale;
      rootFromParse.x = viewBoxTransform.x;
      rootFromParse.y = viewBoxTransform.y;
    }
    // SVG needs to clip based on `viewBox`. And some SVG files really rely on this feature.
    // They do not strictly confine all of the content inside a display rect, but deliberately
    // use a `viewBox` to define a displayable rect.
    // PENDING:
    // The drawback of the `setClipPath` here is: the region label (genereted by echarts) near the
    // edge might also be clipped, because region labels are put as `textContent` of the SVG path.
    root.setClipPath(new Rect["default"]({
      shape: boundingRect.plain()
    }));
    var named = [];
    (0,util.each)(result.named, function (namedItem) {
      if (REGION_AVAILABLE_SVG_TAG_MAP.get(namedItem.svgNodeTagLower) != null) {
        named.push(namedItem);
        setSilent(namedItem.el);
      }
    });
    return {
      root: root,
      boundingRect: boundingRect,
      named: named
    };
  };
  /**
   * Consider:
   * (1) One graphic element can not be shared by different `geoView` running simultaneously.
   *     Notice, also need to consider multiple echarts instances share a `mapRecord`.
   * (2) Converting SVG to graphic elements is time consuming.
   * (3) In the current architecture, `load` should be called frequently to get boundingRect,
   *     and it is called without view info.
   * So we maintain graphic elements in this module, and enables `view` to use/return these
   * graphics from/to the pool with it's uid.
   */
  GeoSVGResource.prototype.useGraphic = function (hostKey /* , nameMap: NameMap */) {
    var usedRootMap = this._usedGraphicMap;
    var svgGraphic = usedRootMap.get(hostKey);
    if (svgGraphic) {
      return svgGraphic;
    }
    svgGraphic = this._freedGraphics.pop()
    // use the first boundingRect to avoid duplicated boundingRect calculation.
    || this._buildGraphic(this._parsedXML);
    usedRootMap.set(hostKey, svgGraphic);
    // PENDING: `nameMap` will not be supported until some real requirement come.
    // `nameMap` can only be obtained from echarts option.
    // The original `named` must not be modified.
    // if (nameMap) {
    //     svgGraphic = extend({}, svgGraphic);
    //     svgGraphic.named = applyNameMap(svgGraphic.named, nameMap);
    // }
    return svgGraphic;
  };
  GeoSVGResource.prototype.freeGraphic = function (hostKey) {
    var usedRootMap = this._usedGraphicMap;
    var svgGraphic = usedRootMap.get(hostKey);
    if (svgGraphic) {
      usedRootMap.removeKey(hostKey);
      this._freedGraphics.push(svgGraphic);
    }
  };
  return GeoSVGResource;
}();

function setSilent(el) {
  // Only named element has silent: false, other elements should
  // act as background and has no user interaction.
  el.silent = false;
  // text|tspan will be converted to group.
  if (el.isGroup) {
    el.traverse(function (child) {
      child.silent = false;
    });
  }
}
function createRegions(named) {
  var regions = [];
  var regionsMap = (0,util.createHashMap)();
  // Create resions only for the first graphic.
  (0,util.each)(named, function (namedItem) {
    // Region has feature to calculate center for tooltip or other features.
    // If there is a <g name="xxx">, the center should be the center of the
    // bounding rect of the g.
    if (namedItem.namedFrom != null) {
      return;
    }
    var region = new Region.GeoSVGRegion(namedItem.name, namedItem.el);
    // PENDING: if `nameMap` supported, this region can not be mounted on
    // `this`, but can only be created each time `load()` called.
    regions.push(region);
    // PENDING: if multiple tag named with the same name, only one will be
    // found by `_regionsMap`. `_regionsMap` is used to find a coordinate
    // by name. We use `region.getCenter()` as the coordinate.
    regionsMap.set(namedItem.name, region);
  });
  return {
    regions: regions,
    regionsMap: regionsMap
  };
}
// PENDING: `nameMap` will not be supported until some real requirement come.
// /**
//  * Use the alias in geoNameMap.
//  * The input `named` must not be modified.
//  */
// function applyNameMap(
//     named: GeoSVGGraphicRecord['named'],
//     nameMap: NameMap
// ): GeoSVGGraphicRecord['named'] {
//     const result = [] as GeoSVGGraphicRecord['named'];
//     for (let i = 0; i < named.length; i++) {
//         let regionGraphic = named[i];
//         const name = regionGraphic.name;
//         if (nameMap && nameMap.hasOwnProperty(name)) {
//             regionGraphic = extend({}, regionGraphic);
//             regionGraphic.name = name;
//         }
//         result.push(regionGraphic);
//     }
//     return result;
// }
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/geo/parseGeoJson.js
var parseGeoJson = __webpack_require__(48270);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/geo/fix/nanhai.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/
// Fix for 南海诸岛


var geoCoord = [126, 25];
var nanhaiName = '南海诸岛';
var points = [[[0, 3.5], [7, 11.2], [15, 11.9], [30, 7], [42, 0.7], [52, 0.7], [56, 7.7], [59, 0.7], [64, 0.7], [64, 0], [5, 0], [0, 3.5]], [[13, 16.1], [19, 14.7], [16, 21.7], [11, 23.1], [13, 16.1]], [[12, 32.2], [14, 38.5], [15, 38.5], [13, 32.2], [12, 32.2]], [[16, 47.6], [12, 53.2], [13, 53.2], [18, 47.6], [16, 47.6]], [[6, 64.4], [8, 70], [9, 70], [8, 64.4], [6, 64.4]], [[23, 82.6], [29, 79.8], [30, 79.8], [25, 82.6], [23, 82.6]], [[37, 70.7], [43, 62.3], [44, 62.3], [39, 70.7], [37, 70.7]], [[48, 51.1], [51, 45.5], [53, 45.5], [50, 51.1], [48, 51.1]], [[51, 35], [51, 28.7], [53, 28.7], [53, 35], [51, 35]], [[52, 22.4], [55, 17.5], [56, 17.5], [53, 22.4], [52, 22.4]], [[58, 12.6], [62, 7], [63, 7], [60, 12.6], [58, 12.6]], [[0, 3.5], [0, 93.1], [64, 93.1], [64, 0], [63, 0], [63, 92.4], [1, 92.4], [1, 3.5], [0, 3.5]]];
for (var nanhai_i = 0; nanhai_i < points.length; nanhai_i++) {
  for (var k = 0; k < points[nanhai_i].length; k++) {
    points[nanhai_i][k][0] /= 10.5;
    points[nanhai_i][k][1] /= -10.5 / 0.75;
    points[nanhai_i][k][0] += geoCoord[0];
    points[nanhai_i][k][1] += geoCoord[1];
  }
}
function fixNanhai(mapType, regions) {
  if (mapType === 'china') {
    for (var i = 0; i < regions.length; i++) {
      // Already exists.
      if (regions[i].name === nanhaiName) {
        return;
      }
    }
    regions.push(new Region.GeoJSONRegion(nanhaiName, util.map(points, function (exterior) {
      return {
        type: 'polygon',
        exterior: exterior
      };
    }), geoCoord));
  }
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/geo/fix/textCoord.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/
var coordsOffsetMap = {
  '南海诸岛': [32, 80],
  // 全国
  '广东': [0, -10],
  '香港': [10, 5],
  '澳门': [-10, 10],
  // '北京': [-10, 0],
  '天津': [5, 5]
};
function fixTextCoords(mapType, region) {
  if (mapType === 'china') {
    var coordFix = coordsOffsetMap[region.name];
    if (coordFix) {
      var cp = region.getCenter();
      cp[0] += coordFix[0] / 10.5;
      cp[1] += -coordFix[1] / (10.5 / 0.75);
      region.setCenter(cp);
    }
  }
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/geo/fix/diaoyuIsland.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/
// Fix for 钓鱼岛
// let Region = require('../Region');
// let zrUtil = require('zrender/lib/core/util');
// let geoCoord = [126, 25];
var diaoyuIsland_points = [[[123.45165252685547, 25.73527164402261], [123.49731445312499, 25.73527164402261], [123.49731445312499, 25.750734064600884], [123.45165252685547, 25.750734064600884], [123.45165252685547, 25.73527164402261]]];
function fixDiaoyuIsland(mapType, region) {
  if (mapType === 'china' && region.name === '台湾') {
    region.geometries.push({
      type: 'polygon',
      exterior: diaoyuIsland_points[0]
    });
  }
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/geo/GeoJSONResource.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


// Built-in GEO fixer.




var DEFAULT_NAME_PROPERTY = 'name';
var GeoJSONResource_GeoJSONResource = /** @class */function () {
  function GeoJSONResource(mapName, geoJSON, specialAreas) {
    this.type = 'geoJSON';
    this._parsedMap = (0,util.createHashMap)();
    this._mapName = mapName;
    this._specialAreas = specialAreas;
    // PENDING: delay the parse to the first usage to rapid up the FMP?
    this._geoJSON = parseInput(geoJSON);
  }
  /**
   * @param nameMap can be null/undefined
   * @param nameProperty can be null/undefined
   */
  GeoJSONResource.prototype.load = function (nameMap, nameProperty) {
    nameProperty = nameProperty || DEFAULT_NAME_PROPERTY;
    var parsed = this._parsedMap.get(nameProperty);
    if (!parsed) {
      var rawRegions = this._parseToRegions(nameProperty);
      parsed = this._parsedMap.set(nameProperty, {
        regions: rawRegions,
        boundingRect: calculateBoundingRect(rawRegions)
      });
    }
    var regionsMap = (0,util.createHashMap)();
    var finalRegions = [];
    (0,util.each)(parsed.regions, function (region) {
      var regionName = region.name;
      // Try use the alias in geoNameMap
      if (nameMap && (0,util.hasOwn)(nameMap, regionName)) {
        region = region.cloneShallow(regionName = nameMap[regionName]);
      }
      finalRegions.push(region);
      regionsMap.set(regionName, region);
    });
    return {
      regions: finalRegions,
      boundingRect: parsed.boundingRect || new BoundingRect["default"](0, 0, 0, 0),
      regionsMap: regionsMap
    };
  };
  GeoJSONResource.prototype._parseToRegions = function (nameProperty) {
    var mapName = this._mapName;
    var geoJSON = this._geoJSON;
    var rawRegions;
    // https://jsperf.com/try-catch-performance-overhead
    try {
      rawRegions = geoJSON ? (0,parseGeoJson["default"])(geoJSON, nameProperty) : [];
    } catch (e) {
      throw new Error('Invalid geoJson format\n' + e.message);
    }
    fixNanhai(mapName, rawRegions);
    (0,util.each)(rawRegions, function (region) {
      var regionName = region.name;
      fixTextCoords(mapName, region);
      fixDiaoyuIsland(mapName, region);
      // Some area like Alaska in USA map needs to be tansformed
      // to look better
      var specialArea = this._specialAreas && this._specialAreas[regionName];
      if (specialArea) {
        region.transformTo(specialArea.left, specialArea.top, specialArea.width, specialArea.height);
      }
    }, this);
    return rawRegions;
  };
  /**
   * Only for exporting to users.
   * **MUST NOT** used internally.
   */
  GeoJSONResource.prototype.getMapForUser = function () {
    return {
      // For backward compatibility, use geoJson
      // PENDING: it has been returning them without clone.
      // do we need to avoid outsite modification?
      geoJson: this._geoJSON,
      geoJSON: this._geoJSON,
      specialAreas: this._specialAreas
    };
  };
  return GeoJSONResource;
}();

function calculateBoundingRect(regions) {
  var rect;
  for (var i = 0; i < regions.length; i++) {
    var regionRect = regions[i].getBoundingRect();
    rect = rect || regionRect.clone();
    rect.union(regionRect);
  }
  return rect;
}
function parseInput(source) {
  return !(0,util.isString)(source) ? source : typeof JSON !== 'undefined' && JSON.parse ? JSON.parse(source) : new Function('return (' + source + ');')();
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/geo/geoSourceManager.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/



var storage = (0,util.createHashMap)();
/* export default */ var geoSourceManager = ({
  /**
   * Compatible with previous `echarts.registerMap`.
   *
   * @usage
   * ```js
   *
   * echarts.registerMap('USA', geoJson, specialAreas);
   *
   * echarts.registerMap('USA', {
   *     geoJson: geoJson,
   *     specialAreas: {...}
   * });
   * echarts.registerMap('USA', {
   *     geoJSON: geoJson,
   *     specialAreas: {...}
   * });
   *
   * echarts.registerMap('airport', {
   *     svg: svg
   * }
   * ```
   *
   * Note:
   * Do not support that register multiple geoJSON or SVG
   * one map name. Because different geoJSON and SVG have
   * different unit. It's not easy to make sure how those
   * units are mapping/normalize.
   * If intending to use multiple geoJSON or SVG, we can
   * use multiple geo coordinate system.
   */
  registerMap: function (mapName, rawDef, rawSpecialAreas) {
    if (rawDef.svg) {
      var resource = new GeoSVGResource_GeoSVGResource(mapName, rawDef.svg);
      storage.set(mapName, resource);
    } else {
      // Recommend:
      //     echarts.registerMap('eu', { geoJSON: xxx, specialAreas: xxx });
      // Backward compatibility:
      //     echarts.registerMap('eu', geoJSON, specialAreas);
      //     echarts.registerMap('eu', { geoJson: xxx, specialAreas: xxx });
      var geoJSON = rawDef.geoJson || rawDef.geoJSON;
      if (geoJSON && !rawDef.features) {
        rawSpecialAreas = rawDef.specialAreas;
      } else {
        geoJSON = rawDef;
      }
      var resource = new GeoJSONResource_GeoJSONResource(mapName, geoJSON, rawSpecialAreas);
      storage.set(mapName, resource);
    }
  },
  getGeoResource: function (mapName) {
    return storage.get(mapName);
  },
  /**
   * Only for exporting to users.
   * **MUST NOT** used internally.
   */
  getMapForUser: function (mapName) {
    var resource = storage.get(mapName);
    // Do not support return SVG until some real requirement come.
    return resource && resource.type === 'geoJSON' && resource.getMapForUser();
  },
  load: function (mapName, nameMap, nameProperty) {
    var resource = storage.get(mapName);
    if (!resource) {
      if (false) {}
      return;
    }
    return resource.load(nameMap, nameProperty);
  }
});

}),
48270: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return parseGeoJSON; }
});
/* import */ var zrender_lib_core_util_js__rspack_import_0 = __webpack_require__(9774);
/* import */ var _Region_js__rspack_import_1 = __webpack_require__(44056);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/
/**
 * Parse and decode geo json
 */


function decode(json) {
  if (!json.UTF8Encoding) {
    return json;
  }
  var jsonCompressed = json;
  var encodeScale = jsonCompressed.UTF8Scale;
  if (encodeScale == null) {
    encodeScale = 1024;
  }
  var features = jsonCompressed.features;
  zrender_lib_core_util_js__rspack_import_0.each(features, function (feature) {
    var geometry = feature.geometry;
    var encodeOffsets = geometry.encodeOffsets;
    var coordinates = geometry.coordinates;
    // Geometry may be appeded manually in the script after json loaded.
    // In this case this geometry is usually not encoded.
    if (!encodeOffsets) {
      return;
    }
    switch (geometry.type) {
      case 'LineString':
        geometry.coordinates = decodeRing(coordinates, encodeOffsets, encodeScale);
        break;
      case 'Polygon':
        decodeRings(coordinates, encodeOffsets, encodeScale);
        break;
      case 'MultiLineString':
        decodeRings(coordinates, encodeOffsets, encodeScale);
        break;
      case 'MultiPolygon':
        zrender_lib_core_util_js__rspack_import_0.each(coordinates, function (rings, idx) {
          return decodeRings(rings, encodeOffsets[idx], encodeScale);
        });
    }
  });
  // Has been decoded
  jsonCompressed.UTF8Encoding = false;
  return jsonCompressed;
}
function decodeRings(rings, encodeOffsets, encodeScale) {
  for (var c = 0; c < rings.length; c++) {
    rings[c] = decodeRing(rings[c], encodeOffsets[c], encodeScale);
  }
}
function decodeRing(coordinate, encodeOffsets, encodeScale) {
  var result = [];
  var prevX = encodeOffsets[0];
  var prevY = encodeOffsets[1];
  for (var i = 0; i < coordinate.length; i += 2) {
    var x = coordinate.charCodeAt(i) - 64;
    var y = coordinate.charCodeAt(i + 1) - 64;
    // ZigZag decoding
    x = x >> 1 ^ -(x & 1);
    y = y >> 1 ^ -(y & 1);
    // Delta deocding
    x += prevX;
    y += prevY;
    prevX = x;
    prevY = y;
    // Dequantize
    result.push([x / encodeScale, y / encodeScale]);
  }
  return result;
}
function parseGeoJSON(geoJson, nameProperty) {
  geoJson = decode(geoJson);
  return zrender_lib_core_util_js__rspack_import_0.map(zrender_lib_core_util_js__rspack_import_0.filter(geoJson.features, function (featureObj) {
    // Output of mapshaper may have geometry null
    return featureObj.geometry && featureObj.properties && featureObj.geometry.coordinates.length > 0;
  }), function (featureObj) {
    var properties = featureObj.properties;
    var geo = featureObj.geometry;
    var geometries = [];
    switch (geo.type) {
      case 'Polygon':
        var coordinates = geo.coordinates;
        // According to the GeoJSON specification.
        // First must be exterior, and the rest are all interior(holes).
        geometries.push(new _Region_js__rspack_import_1.GeoJSONPolygonGeometry(coordinates[0], coordinates.slice(1)));
        break;
      case 'MultiPolygon':
        zrender_lib_core_util_js__rspack_import_0.each(geo.coordinates, function (item) {
          if (item[0]) {
            geometries.push(new _Region_js__rspack_import_1.GeoJSONPolygonGeometry(item[0], item.slice(1)));
          }
        });
        break;
      case 'LineString':
        geometries.push(new _Region_js__rspack_import_1.GeoJSONLineStringGeometry([geo.coordinates]));
        break;
      case 'MultiLineString':
        geometries.push(new _Region_js__rspack_import_1.GeoJSONLineStringGeometry(geo.coordinates));
    }
    var region = new _Region_js__rspack_import_1.GeoJSONRegion(properties[nameProperty || 'name'], geometries, properties.cp);
    region.properties = properties;
    return region;
  });
}

}),
4606: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return geoPrepareCustom; }
});
/* import */ var zrender_lib_core_util_js__rspack_import_0 = __webpack_require__(9774);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

function dataToCoordSize(dataSize, dataItem) {
  dataItem = dataItem || [0, 0];
  return zrender_lib_core_util_js__rspack_import_0.map([0, 1], function (dimIdx) {
    var val = dataItem[dimIdx];
    var halfSize = dataSize[dimIdx] / 2;
    var p1 = [];
    var p2 = [];
    p1[dimIdx] = val - halfSize;
    p2[dimIdx] = val + halfSize;
    p1[1 - dimIdx] = p2[1 - dimIdx] = dataItem[1 - dimIdx];
    return Math.abs(this.dataToPoint(p1)[dimIdx] - this.dataToPoint(p2)[dimIdx]);
  }, this);
}
function geoPrepareCustom(coordSys) {
  var rect = coordSys.getBoundingRect();
  return {
    coordSys: {
      type: 'geo',
      x: rect.x,
      y: rect.y,
      width: rect.width,
      height: rect.height,
      zoom: coordSys.getZoom()
    },
    api: {
      coord: function (data) {
        // do not provide "out" and noRoam param,
        // Compatible with this usage:
        // echarts.util.map(item.points, api.coord)
        return coordSys.dataToPoint(data);
      },
      size: zrender_lib_core_util_js__rspack_import_0.bind(dataToCoordSize, coordSys)
    }
  };
}

}),
53963: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var _util_layout_js__rspack_import_1 = __webpack_require__(88485);
/* import */ var _util_model_js__rspack_import_4 = __webpack_require__(67698);
/* import */ var zrender_lib_core_util_js__rspack_import_3 = __webpack_require__(9774);
/* import */ var _util_graphic_js__rspack_import_5 = __webpack_require__(87031);
/* import */ var _model_Model_js__rspack_import_6 = __webpack_require__(37931);
/* import */ var _util_number_js__rspack_import_7 = __webpack_require__(64782);
/* import */ var _matrixCoordHelper_js__rspack_import_2 = __webpack_require__(74790);
/* import */ var _core_CoordinateSystem_js__rspack_import_0 = __webpack_require__(58241);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/









var Matrix = /** @class */function () {
  function Matrix(matrixModel, ecModel, api) {
    this.dimensions = Matrix.dimensions;
    this.type = 'matrix';
    this._model = matrixModel;
    var models = this._dimModels = {
      x: matrixModel.getDimensionModel('x'),
      y: matrixModel.getDimensionModel('y')
    };
    this._dims = {
      x: models.x.dim,
      y: models.y.dim
    };
    this._resize(matrixModel, api);
  }
  /**
   * @see fetchers in `model/referHelper.ts`,
   * which is used to parse data in ordinal way.
   * In most series only 'x' and 'y' is required,
   * but some series, such as heatmap, can specify value.
   */
  Matrix.getDimensionsInfo = function () {
    return [{
      name: 'x',
      type: 'ordinal'
    }, {
      name: 'y',
      type: 'ordinal'
    }, {
      name: 'value'
    }];
  };
  Matrix.create = function (ecModel, api) {
    var matrixList = [];
    ecModel.eachComponent('matrix', function (matrixModel) {
      var matrix = new Matrix(matrixModel, ecModel, api);
      matrixList.push(matrix);
      matrixModel.coordinateSystem = matrix;
    });
    // Inject coordinate system
    // PENDING: optimize to not to travel all components?
    //  (collect relevant components in ecModel only when model update?)
    ecModel.eachComponent(function (mainType, componentModel) {
      (0,_core_CoordinateSystem_js__rspack_import_0.injectCoordSysByOption)({
        targetModel: componentModel,
        coordSysType: 'matrix',
        coordSysProvider: _core_CoordinateSystem_js__rspack_import_0.simpleCoordSysInjectionProvider
      });
    });
    return matrixList;
  };
  Matrix.prototype.getRect = function () {
    return this._rect;
  };
  Matrix.prototype._resize = function (matrixModel, api) {
    var dims = this._dims;
    var dimModels = this._dimModels;
    var rect = this._rect = (0,_util_layout_js__rspack_import_1.getLayoutRect)(matrixModel.getBoxLayoutParams(), {
      width: api.getWidth(),
      height: api.getHeight()
    });
    layOutUnitsOnDimension(dimModels, dims, rect, 0);
    layOutUnitsOnDimension(dimModels, dims, rect, 1);
    layOutDimCellsRestInfoByUnit(0, dims);
    layOutDimCellsRestInfoByUnit(1, dims);
    layOutBodyCornerCellMerge(this._model.getBody(), dims);
    layOutBodyCornerCellMerge(this._model.getCorner(), dims);
  };
  /**
   * @implement
   * - The input is allowed to be `[NaN/null/undefined, xxx]`/`[xxx, NaN/null/undefined]`;
   *  the return is `[NaN, xxxresult]`/`[xxxresult, NaN]` or clamped boundary value if
   *  `clamp` passed. This is for the usage that only get coord on single x or y.
   * - Alwasy return an numeric array, but never be null/undefined.
   *  If it can not be located or invalid, return `[NaN, NaN]`.
   */
  Matrix.prototype.dataToPoint = function (data, opt, out) {
    out = out || [];
    this.dataToLayout(data, opt, _dtpOutDataToLayout);
    out[0] = _dtpOutDataToLayout.rect.x + _dtpOutDataToLayout.rect.width / 2;
    out[1] = _dtpOutDataToLayout.rect.y + _dtpOutDataToLayout.rect.height / 2;
    return out;
  };
  /**
   * @implement
   * - The input is allowed to be `[NaN/null/undefined, xxx]`/`[xxx, NaN/null/undefined]`;
   *  the return is `{x: NaN, width: NaN, y: xxxresulty, height: xxxresulth}`/
   *  `{y: NaN, height: NaN, x: xxxresultx, width: xxxresultw}` or clamped boundary value
   *  if `clamp` passed. This is for the usage that only get coord on single x or y.
   * - The returned `out.rect` and `out.matrixXYLocatorRange` is always an object or an 2d-array,
   *  but never be null/undefined. If it cannot be located or invalid, `NaN` is in their
   *  corresponding number props.
   * - Do not provide `out.contentRect`, because it's allowed to input non-leaf dimension x/y or
   *  a range of x/y, which determines a rect covering multiple cells (even not merged), in which
   *  case the padding and borderWidth can not be determined to make a contentRect. Therefore only
   *  return `out.rect` in any case for consistency. The caller is responsible for adding space to
   *  avoid covering cell borders, if necessary.
   */
  Matrix.prototype.dataToLayout = function (data, opt, out) {
    var dims = this._dims;
    out = out || {};
    var outRect = out.rect = out.rect || {};
    outRect.x = outRect.y = outRect.width = outRect.height = NaN;
    var outLocRange = out.matrixXYLocatorRange = (0,_matrixCoordHelper_js__rspack_import_2.resetXYLocatorRange)(out.matrixXYLocatorRange);
    if (!(0,zrender_lib_core_util_js__rspack_import_3.isArray)(data)) {
      if (false) {}
      return out;
    }
    (0,_matrixCoordHelper_js__rspack_import_2.parseCoordRangeOption)(outLocRange, null, data, dims, (0,zrender_lib_core_util_js__rspack_import_3.retrieve2)(opt && opt.clamp, _matrixCoordHelper_js__rspack_import_2.MatrixClampOption.none));
    if (!opt || !opt.ignoreMergeCells) {
      if (!opt || opt.clamp !== _matrixCoordHelper_js__rspack_import_2.MatrixClampOption.corner) {
        this._model.getBody().expandRangeByCellMerge(outLocRange);
      }
      if (!opt || opt.clamp !== _matrixCoordHelper_js__rspack_import_2.MatrixClampOption.body) {
        this._model.getCorner().expandRangeByCellMerge(outLocRange);
      }
    }
    (0,_matrixCoordHelper_js__rspack_import_2.xyLocatorRangeToRectOneDim)(outRect, outLocRange, dims, 0);
    (0,_matrixCoordHelper_js__rspack_import_2.xyLocatorRangeToRectOneDim)(outRect, outLocRange, dims, 1);
    return out;
  };
  /**
   * The returned locator pair can be the input of `dataToPoint` or `dataToLayout`.
   *
   * If point[0] is out of the matrix rect,
   *  the out[0] is NaN;
   * else if it is on the right of top-left corner of body,
   *  the out[0] is the oridinal number (>= 0).
   * else
   *  out[0] is the locator for corner or header (<= 0).
   *
   * The same rule goes for point[1] and out[1].
   *
   * But point[0] and point[1] are calculated separately, i.e.,
   * the reuslt can be `[1, NaN]` or `[NaN, 1]` if only one dimension is out of boundary.
   *
   * @implement
   */
  Matrix.prototype.pointToData = function (point, opt, out) {
    var dims = this._dims;
    pointToDataOneDimPrepareCtx(_tmpCtxPointToData, 0, dims, point, opt && opt.clamp);
    pointToDataOneDimPrepareCtx(_tmpCtxPointToData, 1, dims, point, opt && opt.clamp);
    out = out || [];
    out[0] = out[1] = NaN;
    if (_tmpCtxPointToData.y === CtxPointToDataAreaType.inCorner && _tmpCtxPointToData.x === CtxPointToDataAreaType.inBody) {
      pointToDataOnlyHeaderFillOut(_tmpCtxPointToData, out, 0, dims);
    } else if (_tmpCtxPointToData.x === CtxPointToDataAreaType.inCorner && _tmpCtxPointToData.y === CtxPointToDataAreaType.inBody) {
      pointToDataOnlyHeaderFillOut(_tmpCtxPointToData, out, 1, dims);
    } else {
      pointToDataBodyCornerFillOut(_tmpCtxPointToData, out, 0, dims);
      pointToDataBodyCornerFillOut(_tmpCtxPointToData, out, 1, dims);
    }
    return out;
  };
  Matrix.prototype.convertToPixel = function (ecModel, finder, value, opt) {
    var coordSys = getCoordSys(finder);
    return coordSys === this ? coordSys.dataToPoint(value, opt) : undefined;
  };
  Matrix.prototype.convertToLayout = function (ecModel, finder, value, opt) {
    var coordSys = getCoordSys(finder);
    return coordSys === this ? coordSys.dataToLayout(value, opt) : undefined;
  };
  Matrix.prototype.convertFromPixel = function (ecModel, finder, pixel, opt) {
    var coordSys = getCoordSys(finder);
    return coordSys === this ? coordSys.pointToData(pixel, opt) : undefined;
  };
  Matrix.prototype.containPoint = function (point) {
    return this._rect.contain(point[0], point[1]);
  };
  Matrix.dimensions = ['x', 'y', 'value'];
  return Matrix;
}();
var _dtpOutDataToLayout = {
  rect: (0,_matrixCoordHelper_js__rspack_import_2.createNaNRectLike)()
};
var _ptdLevelIt = new _util_model_js__rspack_import_4.ListIterator();
var _ptdDimCellIt = new _util_model_js__rspack_import_4.ListIterator();
function layOutUnitsOnDimension(dimModels, dims, matrixRect, dimIdx) {
  var otherDimIdx = 1 - dimIdx;
  var thisDim = dims[_util_graphic_js__rspack_import_5.XY[dimIdx]];
  var otherDim = dims[_util_graphic_js__rspack_import_5.XY[otherDimIdx]];
  // Notice: If matrix.x/y.show is false, still lay out, to ensure the
  // consistent return of `dataToLayout`.
  var otherDimShow = otherDim.shouldShow();
  // Reset
  for (var it_1 = thisDim.resetCellIterator(); it_1.next();) {
    it_1.item.wh = it_1.item.xy = NaN;
  }
  for (var it_2 = otherDim.resetLayoutIterator(null, dimIdx); it_2.next();) {
    it_2.item.wh = it_2.item.xy = NaN;
  }
  // Set specified size from option.
  var restSize = matrixRect[_util_graphic_js__rspack_import_5.WH[dimIdx]];
  var restCellsCount = thisDim.getLocatorCount(dimIdx) + otherDim.getLocatorCount(dimIdx);
  var tmpLevelModel = new _model_Model_js__rspack_import_6["default"]();
  for (var it_3 = otherDim.resetLevelIterator(); it_3.next();) {
    // Consider `matrix.x.levelSize` and `matrix.x.levels[i].levelSize`.
    tmpLevelModel.option = it_3.item.option;
    tmpLevelModel.parentModel = dimModels[_util_graphic_js__rspack_import_5.XY[otherDimIdx]];
    layOutSpecified(it_3.item, otherDimShow ? tmpLevelModel.get('levelSize') : 0);
  }
  var tmpCellModel = new _model_Model_js__rspack_import_6["default"]();
  for (var it_4 = thisDim.resetCellIterator(); it_4.next();) {
    // Only leaf support size specification, to avoid unnecessary complexity.
    if (it_4.item.type === _matrixCoordHelper_js__rspack_import_2.MatrixCellLayoutInfoType.leaf) {
      tmpCellModel.option = it_4.item.option;
      tmpCellModel.parentModel = undefined;
      layOutSpecified(it_4.item, tmpCellModel.get('size'));
    }
  }
  function layOutSpecified(item, sizeOption) {
    var size = parseSizeOption(sizeOption, dimIdx, matrixRect);
    if (!(0,zrender_lib_core_util_js__rspack_import_3.eqNaN)(size)) {
      item.wh = confineSize(size, restSize);
      restSize = confineSize(restSize - item.wh);
      restCellsCount--;
    }
  }
  // Set all sizes and positions to levels and leaf cells of which size is unspecified.
  // Contents lay out based on matrix, rather than inverse; therefore do not support
  // calculating size based on content, but allocate equally.
  var computedCellWH = restCellsCount ? restSize / restCellsCount : 0;
  // If all size specified, but some space remain (may also caused by matrix.x/y.show: false)
  // do not align to the big most edge.
  var notAlignToBigmost = !restCellsCount && restSize >= 1; // `1` for cumulative precision error.
  var currXY = matrixRect[_util_graphic_js__rspack_import_5.XY[dimIdx]];
  var maxLocator = thisDim.getLocatorCount(dimIdx) - 1;
  var it = new _util_model_js__rspack_import_4.ListIterator();
  // Lay out levels of the perpendicular dim.
  for (otherDim.resetLayoutIterator(it, dimIdx); it.next();) {
    layOutUnspecified(it.item);
  }
  for (thisDim.resetLayoutIterator(it, dimIdx); it.next();) {
    layOutUnspecified(it.item);
  }
  function layOutUnspecified(item) {
    if ((0,zrender_lib_core_util_js__rspack_import_3.eqNaN)(item.wh)) {
      item.wh = computedCellWH;
    }
    item.xy = currXY;
    if (item.id[_util_graphic_js__rspack_import_5.XY[dimIdx]] === maxLocator && !notAlignToBigmost) {
      // Align to the rightmost border, consider cumulative precision error.
      item.wh = matrixRect[_util_graphic_js__rspack_import_5.XY[dimIdx]] + matrixRect[_util_graphic_js__rspack_import_5.WH[dimIdx]] - item.xy;
    }
    currXY += item.wh;
  }
}
function layOutDimCellsRestInfoByUnit(dimIdx, dims) {
  // Finally save layout info based on the unit leaves and levels.
  for (var it_5 = dims[_util_graphic_js__rspack_import_5.XY[dimIdx]].resetCellIterator(); it_5.next();) {
    var dimCell = it_5.item;
    layOutRectOneDimBasedOnUnit(dimCell.rect, dimIdx, dimCell.id, dimCell.span, dims);
    // Consider level varitation on tree leaves, should extend the size to touch matrix body
    // to avoid weird appearance.
    layOutRectOneDimBasedOnUnit(dimCell.rect, 1 - dimIdx, dimCell.id, dimCell.span, dims);
    if (dimCell.type === _matrixCoordHelper_js__rspack_import_2.MatrixCellLayoutInfoType.nonLeaf) {
      // `xy` and `wh` need to be saved in non-leaf since it supports locating by non-leaf
      // in `dataToPoint` or `dataToLayout`.
      dimCell.xy = dimCell.rect[_util_graphic_js__rspack_import_5.XY[dimIdx]];
      dimCell.wh = dimCell.rect[_util_graphic_js__rspack_import_5.WH[dimIdx]];
    }
  }
}
function layOutBodyCornerCellMerge(bodyOrCorner, dims) {
  bodyOrCorner.travelExistingCells(function (cell) {
    var computedSpan = cell.span;
    if (computedSpan) {
      var layoutRect = cell.spanRect;
      var id = cell.id;
      layOutRectOneDimBasedOnUnit(layoutRect, 0, id, computedSpan, dims);
      layOutRectOneDimBasedOnUnit(layoutRect, 1, id, computedSpan, dims);
    }
  });
}
// Save to rect for rendering.
function layOutRectOneDimBasedOnUnit(outRect, dimIdx, id, span, dims) {
  outRect[_util_graphic_js__rspack_import_5.WH[dimIdx]] = 0;
  var locator = id[_util_graphic_js__rspack_import_5.XY[dimIdx]];
  var dim = locator < 0 ? dims[_util_graphic_js__rspack_import_5.XY[1 - dimIdx]] : dims[_util_graphic_js__rspack_import_5.XY[dimIdx]];
  var layoutUnit = dim.getUnitLayoutInfo(dimIdx, id[_util_graphic_js__rspack_import_5.XY[dimIdx]]);
  outRect[_util_graphic_js__rspack_import_5.XY[dimIdx]] = layoutUnit.xy;
  outRect[_util_graphic_js__rspack_import_5.WH[dimIdx]] = layoutUnit.wh;
  if (span[_util_graphic_js__rspack_import_5.XY[dimIdx]] > 1) {
    var layoutUnit2 = dim.getUnitLayoutInfo(dimIdx, id[_util_graphic_js__rspack_import_5.XY[dimIdx]] + span[_util_graphic_js__rspack_import_5.XY[dimIdx]] - 1);
    // Be careful the cumulative error - cell must be aligned.
    outRect[_util_graphic_js__rspack_import_5.WH[dimIdx]] = layoutUnit2.xy + layoutUnit2.wh - layoutUnit.xy;
  }
}
/**
 * Return NaN if not defined or invalid.
 */
function parseSizeOption(sizeOption, dimIdx, matrixRect) {
  var sizeNum = (0,_util_number_js__rspack_import_7.parsePositionSizeOption)(sizeOption, matrixRect[_util_graphic_js__rspack_import_5.WH[dimIdx]]);
  return confineSize(sizeNum, matrixRect[_util_graphic_js__rspack_import_5.WH[dimIdx]]);
}
function confineSize(sizeNum, sizeLimit) {
  return Math.max(Math.min(sizeNum, (0,zrender_lib_core_util_js__rspack_import_3.retrieve2)(sizeLimit, Infinity)), 0);
}
function getCoordSys(finder) {
  var matrixModel = finder.matrixModel;
  var seriesModel = finder.seriesModel;
  var coordSys = matrixModel ? matrixModel.coordinateSystem : seriesModel ? seriesModel.coordinateSystem : null;
  return coordSys;
}
var CtxPointToDataAreaType = {
  inBody: 1,
  inCorner: 2,
  outside: 3
};
// For handy performance optimization in pointToData.
var _tmpCtxPointToData = {
  x: null,
  y: null,
  point: []
};
function pointToDataOneDimPrepareCtx(ctx, dimIdx, dims, point, clamp) {
  var thisDim = dims[_util_graphic_js__rspack_import_5.XY[dimIdx]];
  var otherDim = dims[_util_graphic_js__rspack_import_5.XY[1 - dimIdx]];
  // Notice: considered cases: `matrix.x/y.show: false`, `matrix.x/y.data` is empty.
  // In this cases the `layout.xy` is on the edge and `layout.wh` is `0`; they still can be
  // use to calculate clampping.
  var bodyMaxUnit = thisDim.getUnitLayoutInfo(dimIdx, thisDim.getLocatorCount(dimIdx) - 1);
  var body0Unit = thisDim.getUnitLayoutInfo(dimIdx, 0);
  var cornerMinUnit = otherDim.getUnitLayoutInfo(dimIdx, -otherDim.getLocatorCount(dimIdx));
  var cornerMinus1Unit = otherDim.shouldShow() ? otherDim.getUnitLayoutInfo(dimIdx, -1) : null;
  var coord = ctx.point[dimIdx] = point[dimIdx]; // Transfer the oridinal coord.
  if (!body0Unit && !cornerMinus1Unit) {
    ctx[_util_graphic_js__rspack_import_5.XY[dimIdx]] = CtxPointToDataAreaType.outside;
    return;
  }
  if (clamp === _matrixCoordHelper_js__rspack_import_2.MatrixClampOption.body) {
    if (body0Unit) {
      ctx[_util_graphic_js__rspack_import_5.XY[dimIdx]] = CtxPointToDataAreaType.inBody;
      coord = (0,_util_number_js__rspack_import_7.mathMin)(bodyMaxUnit.xy + bodyMaxUnit.wh, (0,_util_number_js__rspack_import_7.mathMax)(body0Unit.xy, coord));
      ctx.point[dimIdx] = coord;
    } else {
      // If clamp to body, the result must not be in header.
      ctx[_util_graphic_js__rspack_import_5.XY[dimIdx]] = CtxPointToDataAreaType.outside;
    }
    return;
  } else if (clamp === _matrixCoordHelper_js__rspack_import_2.MatrixClampOption.corner) {
    if (cornerMinus1Unit) {
      ctx[_util_graphic_js__rspack_import_5.XY[dimIdx]] = CtxPointToDataAreaType.inCorner;
      coord = (0,_util_number_js__rspack_import_7.mathMin)(cornerMinus1Unit.xy + cornerMinus1Unit.wh, (0,_util_number_js__rspack_import_7.mathMax)(cornerMinUnit.xy, coord));
      ctx.point[dimIdx] = coord;
    } else {
      // If clamp to corner, the result must not be in body.
      ctx[_util_graphic_js__rspack_import_5.XY[dimIdx]] = CtxPointToDataAreaType.outside;
    }
    return;
  }
  var pxLoc0 = body0Unit ? body0Unit.xy : cornerMinus1Unit ? cornerMinus1Unit.xy + cornerMinus1Unit.wh : NaN;
  var pxMin = cornerMinUnit ? cornerMinUnit.xy : pxLoc0;
  var pxMax = bodyMaxUnit ? bodyMaxUnit.xy + bodyMaxUnit.wh : pxLoc0;
  if (coord < pxMin) {
    if (!clamp) {
      // Quick pass for later calc, since mouse event on any place will enter this method if use `pointToData`.
      ctx[_util_graphic_js__rspack_import_5.XY[dimIdx]] = CtxPointToDataAreaType.outside;
      return;
    }
    coord = pxMin;
  } else if (coord > pxMax) {
    if (!clamp) {
      ctx[_util_graphic_js__rspack_import_5.XY[dimIdx]] = CtxPointToDataAreaType.outside;
      return;
    }
    coord = pxMax;
  }
  ctx.point[dimIdx] = coord; // Save the updated coord.
  ctx[_util_graphic_js__rspack_import_5.XY[dimIdx]] = pxLoc0 <= coord && coord <= pxMax ? CtxPointToDataAreaType.inBody : pxMin <= coord && coord <= pxLoc0 ? CtxPointToDataAreaType.inCorner : CtxPointToDataAreaType.outside;
  // Every props in ctx must be set in every branch of this method.
}
// Assume partialOut has been set to NaN outside.
// This method may fill out[0] and out[1] in one call.
function pointToDataOnlyHeaderFillOut(ctx, partialOut, dimIdx, dims) {
  var otherDimIdx = 1 - dimIdx;
  if (ctx[_util_graphic_js__rspack_import_5.XY[dimIdx]] === CtxPointToDataAreaType.outside) {
    return;
  }
  for (dims[_util_graphic_js__rspack_import_5.XY[dimIdx]].resetCellIterator(_ptdDimCellIt); _ptdDimCellIt.next();) {
    var cell = _ptdDimCellIt.item;
    if (isCoordInRect(ctx.point[dimIdx], cell.rect, dimIdx) && isCoordInRect(ctx.point[otherDimIdx], cell.rect, otherDimIdx)) {
      // non-leaves are also allowed to be located.
      // If the point is in x or y dimension cell area, should check both x and y coord to
      // determine a cell; in this way a non-leaf cell can be determined.
      partialOut[dimIdx] = cell.ordinal;
      partialOut[otherDimIdx] = cell.id[_util_graphic_js__rspack_import_5.XY[otherDimIdx]];
      return;
    }
  }
}
// Assume partialOut has been set to NaN outside.
// This method may fill out[0] and out[1] in one call.
function pointToDataBodyCornerFillOut(ctx, partialOut, dimIdx, dims) {
  if (ctx[_util_graphic_js__rspack_import_5.XY[dimIdx]] === CtxPointToDataAreaType.outside) {
    return;
  }
  var dim = ctx[_util_graphic_js__rspack_import_5.XY[dimIdx]] === CtxPointToDataAreaType.inCorner ? dims[_util_graphic_js__rspack_import_5.XY[1 - dimIdx]] : dims[_util_graphic_js__rspack_import_5.XY[dimIdx]];
  for (dim.resetLayoutIterator(_ptdLevelIt, dimIdx); _ptdLevelIt.next();) {
    if (isCoordInLayoutInfo(ctx.point[dimIdx], _ptdLevelIt.item)) {
      partialOut[dimIdx] = _ptdLevelIt.item.id[_util_graphic_js__rspack_import_5.XY[dimIdx]];
      return;
    }
  }
}
function isCoordInLayoutInfo(coord, cell) {
  return cell.xy <= coord && coord <= cell.xy + cell.wh;
}
function isCoordInRect(coord, rect, dimIdx) {
  return rect[_util_graphic_js__rspack_import_5.XY[dimIdx]] <= coord && coord <= rect[_util_graphic_js__rspack_import_5.XY[dimIdx]] + rect[_util_graphic_js__rspack_import_5.WH[dimIdx]];
}
/* export default */ __webpack_exports__["default"] = (Matrix);

}),
33089: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  MatrixDimensionModel: function() { return /* binding */ MatrixModel_MatrixDimensionModel; },
  "default": function() { return /* binding */ matrix_MatrixModel; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(2492);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Component.js
var Component = __webpack_require__(53075);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Model.js + 2 modules
var Model = __webpack_require__(37931);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(9774);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/Point.js
var Point = __webpack_require__(97270);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/OrdinalMeta.js
var OrdinalMeta = __webpack_require__(49543);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/scale/Ordinal.js
var Ordinal = __webpack_require__(50126);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js
var graphic = __webpack_require__(87031);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js
var model = __webpack_require__(67698);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/matrix/matrixCoordHelper.js
var matrixCoordHelper = __webpack_require__(74790);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(64782);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/matrix/MatrixDim.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/









/**
 * Lifetime: the same with `MatrixModel`, but different from `coord/Matrix`.
 */
var MatrixDim_MatrixDim = /** @class */function () {
  function MatrixDim(dim, dimModel) {
    // Under the current definition, every leave corresponds a unit cell,
    // and leaves can serve as the locator of cells.
    // Therefore make sure:
    //  - The first `_leavesCount` elements in `_cells` are leaves.
    //  - `_cells[leaf.id[XY[this.dimIdx]]]` is the leaf itself.
    //  - Leaves of each subtree are placed together, that is, the leaves of a dimCell are:
    //    `this._cells.slice(dimCell.firstLeafLocator, dimCell.span[XY[this.dimIdx]])`
    this._cells = [];
    // Can be visited by `_levels[cell.level]` or `_levels[cell.id[1 - dimIdx] + _levels.length]`.
    // Items are never be null/undefined after initialized.
    this._levels = [];
    this.dim = dim;
    this.dimIdx = dim === 'x' ? 0 : 1;
    this._model = dimModel;
    this._uniqueValueGen = createUniqueValueGenerator(dim);
    var dimModelData = dimModel.get('data', true);
    if (dimModelData != null && !(0,util.isArray)(dimModelData)) {
      if (false) {}
      dimModelData = [];
    }
    if (dimModelData) {
      this._initByDimModelData(dimModelData);
    } else {
      this._initBySeriesData();
    }
  }
  MatrixDim.prototype._initByDimModelData = function (dimModelData) {
    var self = this;
    var _cells = self._cells;
    var _levels = self._levels;
    var sameLocatorCellsLists = []; // Save for sorting.
    var _cellCount = 0;
    self._leavesCount = traverseInitCells(dimModelData, 0, 0);
    postInitCells();
    return;
    function traverseInitCells(dimModelData, firstLeafLocator, level) {
      var totalSpan = 0;
      if (!dimModelData) {
        return totalSpan;
      }
      (0,util.each)(dimModelData, function (option, optionIdx) {
        var invalidOption = false;
        var cellOption;
        if ((0,util.isString)(option)) {
          cellOption = {
            value: option
          };
        } else if ((0,util.isObject)(option)) {
          cellOption = option;
          if (option.value != null && !(0,util.isString)(option.value)) {
            invalidOption = true;
            cellOption = {
              value: null
            };
          }
        } else {
          cellOption = {
            value: null
          };
          if (option != null) {
            invalidOption = true;
          }
        }
        if (invalidOption) {
          if (false) {}
        }
        var cell = {
          type: matrixCoordHelper.MatrixCellLayoutInfoType.nonLeaf,
          ordinal: NaN,
          level: level,
          firstLeafLocator: firstLeafLocator,
          id: new Point["default"](),
          span: (0,matrixCoordHelper.setDimXYValue)(new Point["default"](), self.dimIdx, 1, 1),
          option: cellOption,
          xy: NaN,
          wh: NaN,
          dim: self,
          rect: (0,matrixCoordHelper.createNaNRectLike)()
        };
        _cellCount++;
        (sameLocatorCellsLists[firstLeafLocator] || (sameLocatorCellsLists[firstLeafLocator] = [])).push(cell);
        if (!_levels[level]) {
          // Create a level only if at least one cell exists.
          _levels[level] = {
            type: matrixCoordHelper.MatrixCellLayoutInfoType.level,
            xy: NaN,
            wh: NaN,
            option: null,
            id: new Point["default"](),
            dim: self
          };
        }
        var childrenSpan = traverseInitCells(cellOption.children, firstLeafLocator, level + 1);
        var subSpan = Math.max(1, childrenSpan);
        cell.span[graphic.XY[self.dimIdx]] = subSpan;
        totalSpan += subSpan;
        firstLeafLocator += subSpan;
      });
      return totalSpan;
    }
    function postInitCells() {
      // Sort to make sure the leaves are at the beginning, so that
      // they can be used as the locator of body cells.
      var categories = [];
      while (_cells.length < _cellCount) {
        for (var locator = 0; locator < sameLocatorCellsLists.length; locator++) {
          var cell = sameLocatorCellsLists[locator].pop();
          if (cell) {
            cell.ordinal = categories.length;
            var val = cell.option.value;
            categories.push(val);
            _cells.push(cell);
            self._uniqueValueGen.calcDupBase(val);
          }
        }
      }
      self._uniqueValueGen.ensureValueUnique(categories, _cells);
      var ordinalMeta = self._ordinalMeta = new OrdinalMeta["default"]({
        categories: categories,
        needCollect: false,
        deduplication: false
      });
      self._scale = new Ordinal["default"]({
        ordinalMeta: ordinalMeta
      });
      for (var idx = 0; idx < self._leavesCount; idx++) {
        var leaf = self._cells[idx];
        leaf.type = matrixCoordHelper.MatrixCellLayoutInfoType.leaf;
        // Handle the tree level variation: enlarge the span of the leaves to reach the body cells.
        leaf.span[graphic.XY[1 - self.dimIdx]] = self._levels.length - leaf.level;
      }
      self._initCellsId();
      self._initLevelIdOptions();
    }
  };
  MatrixDim.prototype._initBySeriesData = function () {
    var self = this;
    self._leavesCount = 0;
    self._levels = [{
      type: matrixCoordHelper.MatrixCellLayoutInfoType.level,
      xy: NaN,
      wh: NaN,
      option: null,
      id: new Point["default"](),
      dim: self
    }];
    self._initLevelIdOptions();
    var ordinalMeta = self._ordinalMeta = new OrdinalMeta["default"]({
      needCollect: true,
      deduplication: true,
      onCollect: function (value, ordinalNumber) {
        var cell = self._cells[ordinalNumber] = {
          type: matrixCoordHelper.MatrixCellLayoutInfoType.leaf,
          ordinal: ordinalNumber,
          level: 0,
          firstLeafLocator: ordinalNumber,
          id: new Point["default"](),
          span: (0,matrixCoordHelper.setDimXYValue)(new Point["default"](), self.dimIdx, 1, 1),
          // Theoretically `value` is from `dataset` or `series.data`, so it may be any type.
          // Do not restrict this case for user's convenience, and here simply convert it to
          // string for display.
          option: {
            value: value + ''
          },
          xy: NaN,
          wh: NaN,
          dim: self,
          rect: (0,matrixCoordHelper.createNaNRectLike)()
        };
        self._leavesCount++;
        self._setCellId(cell);
      }
    });
    self._scale = new Ordinal["default"]({
      ordinalMeta: ordinalMeta
    });
  };
  MatrixDim.prototype._setCellId = function (cell) {
    var levelsLen = this._levels.length;
    var dimIdx = this.dimIdx;
    (0,matrixCoordHelper.setDimXYValue)(cell.id, dimIdx, cell.firstLeafLocator, cell.level - levelsLen);
  };
  MatrixDim.prototype._initCellsId = function () {
    var levelsLen = this._levels.length;
    var dimIdx = this.dimIdx;
    (0,util.each)(this._cells, function (cell) {
      (0,matrixCoordHelper.setDimXYValue)(cell.id, dimIdx, cell.firstLeafLocator, cell.level - levelsLen);
    });
  };
  MatrixDim.prototype._initLevelIdOptions = function () {
    var levelsLen = this._levels.length;
    var dimIdx = this.dimIdx;
    var levelOptionList = this._model.get('levels', true);
    levelOptionList = (0,util.isArray)(levelOptionList) ? levelOptionList : [];
    (0,util.each)(this._levels, function (levelCfg, level) {
      (0,matrixCoordHelper.setDimXYValue)(levelCfg.id, dimIdx, 0, level - levelsLen);
      levelCfg.option = levelOptionList[level];
    });
  };
  MatrixDim.prototype.shouldShow = function () {
    return !!this._model.getShallow('show', true);
  };
  /**
   * Iterate leaves (they are layout units) if dimIdx === this.dimIdx.
   * Iterate levels if dimIdx !== this.dimIdx.
   */
  MatrixDim.prototype.resetLayoutIterator = function (it, dimIdx, startLocator, count) {
    it = it || new model.ListIterator();
    if (dimIdx === this.dimIdx) {
      var len = this._leavesCount;
      var startIdx = startLocator != null ? Math.max(0, startLocator) : 0;
      count = count != null ? Math.min(count, len) : len;
      it.reset(this._cells, startIdx, startIdx + count);
    } else {
      var len = this._levels.length;
      // Corner locator is from `-this._levels.length` to `-1`.
      var startIdx = startLocator != null ? Math.max(0, startLocator + len) : 0;
      count = count != null ? Math.min(count, len) : len;
      it.reset(this._levels, startIdx, startIdx + count);
    }
    return it;
  };
  MatrixDim.prototype.resetCellIterator = function (it) {
    return (it || new model.ListIterator()).reset(this._cells, 0);
  };
  MatrixDim.prototype.resetLevelIterator = function (it) {
    return (it || new model.ListIterator()).reset(this._levels, 0);
  };
  MatrixDim.prototype.getLayout = function (outRect, dimIdx, locator) {
    var layout = this.getUnitLayoutInfo(dimIdx, locator);
    outRect[graphic.XY[dimIdx]] = layout ? layout.xy : NaN;
    outRect[graphic.WH[dimIdx]] = layout ? layout.wh : NaN;
  };
  /**
   * Get leaf cell or get level info.
   * Should be able to return null/undefined if not found on x or y, thus input `dimIdx` is needed.
   */
  MatrixDim.prototype.getUnitLayoutInfo = function (dimIdx, locator) {
    return dimIdx === this.dimIdx ? locator < this._leavesCount ? this._cells[locator] : undefined : this._levels[locator + this._levels.length];
  };
  /**
   * Get dimension cell by data, including leaves and non-leaves.
   */
  MatrixDim.prototype.getCell = function (value) {
    var ordinal = this._scale.parse(value);
    return (0,util.eqNaN)(ordinal) ? undefined : this._cells[ordinal];
  };
  /**
   * Get leaf count or get level count.
   */
  MatrixDim.prototype.getLocatorCount = function (dimIdx) {
    return dimIdx === this.dimIdx ? this._leavesCount : this._levels.length;
  };
  MatrixDim.prototype.getOrdinalMeta = function () {
    return this._ordinalMeta;
  };
  return MatrixDim;
}();

function createUniqueValueGenerator(dim) {
  var dimUpper = dim.toUpperCase();
  var defaultValReg = new RegExp("^" + dimUpper + "([0-9]+)$");
  var dupBase = 0;
  function calcDupBase(val) {
    var matchResult;
    if (val != null && (matchResult = val.match(defaultValReg))) {
      dupBase = (0,number.mathMax)(dupBase, +matchResult[1] + 1);
    }
  }
  function makeUniqueValue() {
    return "" + dimUpper + dupBase++;
  }
  // Duplicated value is allowed, because the `matrix.x/y.data` can be a tree and it's reasonable
  // that leaves in different subtrees has the same text. But only the first one is allowed to be
  // queried by the text, and the other ones can only be queried by index.
  // Additionally, `matrix.x/y.data: [null, null, ...]` is allowed.
  function ensureValueUnique(categories, cells) {
    // A simple way to deduplicate or handle illegal or not specified values to avoid unexpected behaviors.
    // The tree structure should not be broken even if duplicated.
    var cateMap = (0,util.createHashMap)();
    for (var idx = 0; idx < categories.length; idx++) {
      var value = categories[idx];
      // value may be set to NullUndefined by users or if illegal.
      if (value == null || cateMap.get(value) != null) {
        // Still display the original option.value if duplicated, but loose the ability to query by text.
        categories[idx] = value = makeUniqueValue();
        cells[idx].option = (0,util.defaults)({
          value: value
        }, cells[idx].option);
      }
      cateMap.set(value, true);
    }
  }
  return {
    calcDupBase: calcDupBase,
    ensureValueUnique: ensureValueUnique
  };
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/matrix/MatrixBodyCorner.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/




/**
 * Lifetime: the same with `MatrixModel`, but different from `coord/Matrix`.
 */
var MatrixBodyCorner_MatrixBodyCorner = /** @class */function () {
  function MatrixBodyCorner(kind, bodyOrCornerModel, dims) {
    this._model = bodyOrCornerModel;
    this._dims = dims;
    this._kind = kind;
    this._cellMergeOwnerList = [];
  }
  /**
   * Can not be called before series models initialization finished, since the ordinalMeta may
   * use collect the values from `series.data` in series initialization.
   */
  MatrixBodyCorner.prototype._ensureCellMap = function () {
    var self = this;
    var _cellMap = self._cellMap;
    if (!_cellMap) {
      _cellMap = self._cellMap = (0,util.createHashMap)();
      fillCellMap();
    }
    return _cellMap;
    function fillCellMap() {
      var parsedList = [];
      var cellOptionList = self._model.getShallow('data');
      if (cellOptionList && !(0,util.isArray)(cellOptionList)) {
        if (false) {}
        cellOptionList = null;
      }
      (0,util.each)(cellOptionList, function (option, idx) {
        if (!(0,util.isObject)(option) || !(0,util.isArray)(option.coord)) {
          if (false) {}
          return;
        }
        var locatorRange = (0,matrixCoordHelper.resetXYLocatorRange)([]);
        var reasonArr = null;
        if (false) {}
        (0,matrixCoordHelper.parseCoordRangeOption)(locatorRange, reasonArr, option.coord, self._dims, option.coordClamp ? matrixCoordHelper.MatrixClampOption[self._kind] : matrixCoordHelper.MatrixClampOption.none);
        if ((0,matrixCoordHelper.isXYLocatorRangeInvalidOnDim)(locatorRange, 0) || (0,matrixCoordHelper.isXYLocatorRangeInvalidOnDim)(locatorRange, 1)) {
          if (false) {}
          return;
        }
        var cellMergeOwner = option && option.mergeCells;
        var parsed = {
          id: new Point["default"](),
          span: new Point["default"](),
          locatorRange: locatorRange,
          option: option,
          cellMergeOwner: cellMergeOwner
        };
        (0,matrixCoordHelper.fillIdSpanFromLocatorRange)(parsed, locatorRange);
        // The order of the `parsedList` determines the precedence of the styles, if there
        // are overlaps between ranges specified in different items. Preserve the original
        // order of `matrix.body/corner/data` to make it predictable for users.
        parsedList.push(parsed);
      });
      // Resolve cell merging intersection - union to a larger rect.
      var mergedMarkList = [];
      for (var parsedIdx = 0; parsedIdx < parsedList.length; parsedIdx++) {
        var parsed = parsedList[parsedIdx];
        if (!parsed.cellMergeOwner) {
          continue;
        }
        var locatorRange = parsed.locatorRange;
        (0,matrixCoordHelper.resolveXYLocatorRangeByCellMerge)(locatorRange, mergedMarkList, parsedList, parsedIdx);
        for (var idx = 0; idx < parsedIdx; idx++) {
          if (mergedMarkList[idx]) {
            parsedList[idx].cellMergeOwner = false;
          }
        }
        if (locatorRange[0][0] !== parsed.id.x || locatorRange[1][0] !== parsed.id.y) {
          // The top-left cell of the unioned locatorRange is not this cell any more.
          parsed.cellMergeOwner = false;
          // Reconcile: simply use the last style and value option if multiple styles involved
          // in a merged area, since there might be no commonly used merge strategy.
          var newOption = (0,util.extend)({}, parsed.option);
          newOption.coord = null;
          var newParsed = {
            id: new Point["default"](),
            span: new Point["default"](),
            locatorRange: locatorRange,
            option: newOption,
            cellMergeOwner: true
          };
          (0,matrixCoordHelper.fillIdSpanFromLocatorRange)(newParsed, locatorRange);
          parsedList.push(newParsed);
        }
      }
      // Assign options to cells.
      (0,util.each)(parsedList, function (parsed) {
        var topLeftCell = ensureBodyOrCornerCell(parsed.id.x, parsed.id.y);
        if (parsed.cellMergeOwner) {
          topLeftCell.cellMergeOwner = true;
          topLeftCell.span = parsed.span;
          topLeftCell.locatorRange = parsed.locatorRange;
          topLeftCell.spanRect = (0,matrixCoordHelper.createNaNRectLike)();
          self._cellMergeOwnerList.push(topLeftCell);
        }
        if (!parsed.cellMergeOwner && !parsed.option) {
          return;
        }
        for (var yidx = 0; yidx < parsed.span.y; yidx++) {
          for (var xidx = 0; xidx < parsed.span.x; xidx++) {
            var cell = ensureBodyOrCornerCell(parsed.id.x + xidx, parsed.id.y + yidx);
            // If multiple style options are defined on a cell, the later ones takes precedence.
            cell.option = parsed.option;
            if (parsed.cellMergeOwner) {
              cell.inSpanOf = topLeftCell;
            }
          }
        }
      });
    } // End of fillCellMap
    function ensureBodyOrCornerCell(x, y) {
      var key = makeCellMapKey(x, y);
      var cell = _cellMap.get(key);
      if (!cell) {
        cell = _cellMap.set(key, {
          id: new Point["default"](x, y),
          option: null,
          inSpanOf: null,
          span: null,
          spanRect: null,
          locatorRange: null,
          cellMergeOwner: false
        });
      }
      return cell;
    }
  };
  /**
   * Body cells or corner cell are not commonly defined specifically, especially in a large
   * table, thus his is a sparse data structure - bodys or corner cells exist only if there
   * are options specified to it (in `matrix.body.data` or `matrix.corner.data`);
   * otherwise, return `NullUndefined`.
   */
  MatrixBodyCorner.prototype.getCell = function (xy) {
    // Assert xy do not contain NaN
    return this._ensureCellMap().get(makeCellMapKey(xy[0], xy[1]));
  };
  /**
   * Only cell existing (has specific definition or props) will be travelled.
   */
  MatrixBodyCorner.prototype.travelExistingCells = function (cb) {
    this._ensureCellMap().each(cb);
  };
  /**
   * @param locatorRange Must be the return of `parseCoordRangeOption`.
   */
  MatrixBodyCorner.prototype.expandRangeByCellMerge = function (locatorRange) {
    if (!(0,matrixCoordHelper.isXYLocatorRangeInvalidOnDim)(locatorRange, 0) && !(0,matrixCoordHelper.isXYLocatorRangeInvalidOnDim)(locatorRange, 1) && locatorRange[0][0] === locatorRange[0][1] && locatorRange[1][0] === locatorRange[1][1]) {
      // If it locates to a single cell, use this quick path to avoid travelling.
      // It is based on the fact that any cell is not contained by more than one cell merging rect.
      _tmpERBCMLocator[0] = locatorRange[0][0];
      _tmpERBCMLocator[1] = locatorRange[1][0];
      var cell = this.getCell(_tmpERBCMLocator);
      var inSpanOf = cell && cell.inSpanOf;
      if (inSpanOf) {
        (0,matrixCoordHelper.cloneXYLocatorRange)(locatorRange, inSpanOf.locatorRange);
        return;
      }
    }
    var list = this._cellMergeOwnerList;
    (0,matrixCoordHelper.resolveXYLocatorRangeByCellMerge)(locatorRange, null, list, list.length);
  };
  return MatrixBodyCorner;
}();

var _tmpERBCMLocator = [];
function makeCellMapKey(x, y) {
  return x + "|" + y;
}
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/tokens.js
var tokens = __webpack_require__(87473);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/matrix/MatrixModel.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/






var defaultLabelOption = {
  show: true,
  color: tokens["default"].color.secondary,
  // overflow: 'truncate',
  overflow: 'break',
  lineOverflow: 'truncate',
  padding: [2, 3, 2, 3],
  // Prefer to use `padding`, rather than distance.
  distance: 0
};
function makeDefaultCellItemStyleOption(isCorner) {
  return {
    color: 'none',
    borderWidth: 1,
    borderColor: isCorner ? 'none' : tokens["default"].color.borderTint
  };
}
;
var defaultDimOption = {
  show: true,
  label: defaultLabelOption,
  itemStyle: makeDefaultCellItemStyleOption(false),
  silent: undefined,
  dividerLineStyle: {
    width: 1,
    color: tokens["default"].color.border
  }
};
var defaultBodyOption = {
  label: defaultLabelOption,
  itemStyle: makeDefaultCellItemStyleOption(false),
  silent: undefined
};
var defaultCornerOption = {
  label: defaultLabelOption,
  itemStyle: makeDefaultCellItemStyleOption(true),
  silent: undefined
};
var defaultMatrixOption = {
  // As a most basic coord sys, `z` should be lower than
  // other series and coord sys, such as, grid.
  z: -50,
  left: '10%',
  top: '10%',
  right: '10%',
  bottom: '10%',
  x: defaultDimOption,
  y: defaultDimOption,
  body: defaultBodyOption,
  corner: defaultCornerOption,
  backgroundStyle: {
    color: 'none',
    borderColor: tokens["default"].color.axisLine,
    borderWidth: 1
  }
};
var MatrixModel_MatrixModel = /** @class */function (_super) {
  (0,tslib_es6.__extends)(MatrixModel, _super);
  function MatrixModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = MatrixModel.type;
    return _this;
  }
  MatrixModel.prototype.optionUpdated = function () {
    // Simply re-create all to follow model changes.
    var dimModels = this._dimModels = {
      // Do not use matrixModel as the parent model, for preventing from cascade-fetching options to it.
      x: new MatrixModel_MatrixDimensionModel(this.get('x', true) || {}),
      y: new MatrixModel_MatrixDimensionModel(this.get('y', true) || {})
    };
    dimModels.x.option.type = dimModels.y.option.type = 'category';
    var xDim = dimModels.x.dim = new MatrixDim_MatrixDim('x', dimModels.x);
    var yDim = dimModels.y.dim = new MatrixDim_MatrixDim('y', dimModels.y);
    var dims = {
      x: xDim,
      y: yDim
    };
    this._body = new MatrixBodyCorner_MatrixBodyCorner('body', new Model["default"](this.getShallow('body')), dims);
    this._corner = new MatrixBodyCorner_MatrixBodyCorner('corner', new Model["default"](this.getShallow('corner')), dims);
  };
  MatrixModel.prototype.getDimensionModel = function (dim) {
    return this._dimModels[dim];
  };
  MatrixModel.prototype.getBody = function () {
    return this._body;
  };
  MatrixModel.prototype.getCorner = function () {
    return this._corner;
  };
  MatrixModel.type = 'matrix';
  MatrixModel.layoutMode = 'box';
  MatrixModel.defaultOption = defaultMatrixOption;
  return MatrixModel;
}(Component["default"]);
var MatrixModel_MatrixDimensionModel = /** @class */function (_super) {
  (0,tslib_es6.__extends)(MatrixDimensionModel, _super);
  function MatrixDimensionModel() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  MatrixDimensionModel.prototype.getOrdinalMeta = function () {
    return this.dim.getOrdinalMeta();
  };
  return MatrixDimensionModel;
}(Model["default"]);

/* export default */ var matrix_MatrixModel = (MatrixModel_MatrixModel);

}),
74790: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  MatrixCellLayoutInfoType: function() { return MatrixCellLayoutInfoType; },
  MatrixClampOption: function() { return MatrixClampOption; },
  cloneXYLocatorRange: function() { return cloneXYLocatorRange; },
  coordDataToAllCellLevelLayout: function() { return coordDataToAllCellLevelLayout; },
  createNaNRectLike: function() { return createNaNRectLike; },
  fillIdSpanFromLocatorRange: function() { return fillIdSpanFromLocatorRange; },
  isXYLocatorRangeInvalidOnDim: function() { return isXYLocatorRangeInvalidOnDim; },
  parseCoordRangeOption: function() { return parseCoordRangeOption; },
  resetXYLocatorRange: function() { return resetXYLocatorRange; },
  resolveXYLocatorRangeByCellMerge: function() { return resolveXYLocatorRangeByCellMerge; },
  setDimXYValue: function() { return setDimXYValue; },
  xyLocatorRangeToRectOneDim: function() { return xyLocatorRangeToRectOneDim; }
});
/* import */ var zrender_lib_core_util_js__rspack_import_1 = __webpack_require__(9774);
/* import */ var _util_graphic_js__rspack_import_0 = __webpack_require__(87031);
/* import */ var _util_number_js__rspack_import_2 = __webpack_require__(64782);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/



var MatrixCellLayoutInfoType = {
  level: 1,
  leaf: 2,
  nonLeaf: 3
};
/**
 * @public Public to users in `chart.convertFromPixel`.
 */
var MatrixClampOption = {
  // No clamp, be falsy, equals to null/undefined. It means if the input part is
  // null/undefined/NaN/outOfBoundary, the result part is NaN, rather than clamp to
  // the boundary of the matrix.
  none: 0,
  // Clamp, where null/undefined/NaN/outOfBoundary can be used to cover the entire row/column.
  all: 1,
  body: 2,
  corner: 3
};
/**
 * For the x direction,
 *  - find dimension cell from `xMatrixDim`,
 *      - If `xDimCell` or `yDimCell` is not a leaf, return the non-leaf cell itself.
 *  - otherwise find level from `yMatrixDim`.
 *  - otherwise return `NullUndefined`.
 *
 * For the y direction, it's the opposite.
 */
function coordDataToAllCellLevelLayout(coordValue, dims, thisDimIdx // 0 | 1
) {
  // Find in body.
  var result = dims[_util_graphic_js__rspack_import_0.XY[thisDimIdx]].getCell(coordValue);
  // Find in corner or dimension area.
  if (!result && (0,zrender_lib_core_util_js__rspack_import_1.isNumber)(coordValue) && coordValue < 0) {
    result = dims[_util_graphic_js__rspack_import_0.XY[1 - thisDimIdx]].getUnitLayoutInfo(thisDimIdx, Math.round(coordValue));
  }
  return result;
}
function resetXYLocatorRange(out) {
  var rg = out || [];
  rg[0] = rg[0] || [];
  rg[1] = rg[1] || [];
  rg[0][0] = rg[0][1] = rg[1][0] = rg[1][1] = NaN;
  return rg;
}
/**
 * If illegal or out of boundary, set NaN to `locOut`. See `isXYLocatorRangeInvalidOnDim`.
 * x dimension and y dimension are calculated separately.
 */
function parseCoordRangeOption(locOut,
// If illegal input or can not find any target, save reason to it.
// Do nothing if `NullUndefined`.
reasonOut, data, dims, clamp) {
  // x and y are supported to be handled separately - if one dimension is invalid
  // (may be users do not need that), the other one should also be calculated.
  parseCoordRangeOptionOnOneDim(locOut[0], reasonOut, clamp, data, dims, 0);
  parseCoordRangeOptionOnOneDim(locOut[1], reasonOut, clamp, data, dims, 1);
}
function parseCoordRangeOptionOnOneDim(locDimOut, reasonOut, clamp, data, dims, dimIdx) {
  locDimOut[0] = Infinity;
  locDimOut[1] = -Infinity;
  var dataOnDim = data[dimIdx];
  var coordValArr = (0,zrender_lib_core_util_js__rspack_import_1.isArray)(dataOnDim) ? dataOnDim : [dataOnDim];
  var len = coordValArr.length;
  var hasClamp = !!clamp;
  if (len >= 1) {
    parseCoordRangeOptionOnOneDimOnePart(locDimOut, reasonOut, coordValArr, hasClamp, dims, dimIdx, 0);
    if (len > 1) {
      // Users may intuitively input the coords like `[[x1, x2, x3], ...]`;
      // consider the range as `[x1, x3]` in this case.
      parseCoordRangeOptionOnOneDimOnePart(locDimOut, reasonOut, coordValArr, hasClamp, dims, dimIdx, len - 1);
    }
  } else {
    if (false) {}
    locDimOut[0] = locDimOut[1] = NaN;
  }
  if (hasClamp) {
    // null/undefined/NaN or illegal data represents the entire row/column;
    // Cover the entire locator regardless of body or corner, and confine it later.
    var locLowerBound = -dims[_util_graphic_js__rspack_import_0.XY[1 - dimIdx]].getLocatorCount(dimIdx);
    var locUpperBound = dims[_util_graphic_js__rspack_import_0.XY[dimIdx]].getLocatorCount(dimIdx) - 1;
    if (clamp === MatrixClampOption.body) {
      locLowerBound = (0,_util_number_js__rspack_import_2.mathMax)(0, locLowerBound);
    } else if (clamp === MatrixClampOption.corner) {
      locUpperBound = (0,_util_number_js__rspack_import_2.mathMin)(-1, locUpperBound);
    }
    if (locUpperBound < locLowerBound) {
      // Also considered that both x and y has no cell.
      locLowerBound = locUpperBound = NaN;
    }
    if ((0,zrender_lib_core_util_js__rspack_import_1.eqNaN)(locDimOut[0])) {
      locDimOut[0] = locLowerBound;
    }
    if ((0,zrender_lib_core_util_js__rspack_import_1.eqNaN)(locDimOut[1])) {
      locDimOut[1] = locUpperBound;
    }
    locDimOut[0] = (0,_util_number_js__rspack_import_2.mathMax)((0,_util_number_js__rspack_import_2.mathMin)(locDimOut[0], locUpperBound), locLowerBound);
    locDimOut[1] = (0,_util_number_js__rspack_import_2.mathMax)((0,_util_number_js__rspack_import_2.mathMin)(locDimOut[1], locUpperBound), locLowerBound);
  }
}
// The return val must be finite or NaN.
function parseCoordRangeOptionOnOneDimOnePart(locDimOut, reasonOut, coordValArr, hasClamp, dims, dimIdx, partIdx) {
  var layout = coordDataToAllCellLevelLayout(coordValArr[partIdx], dims, dimIdx);
  if (!layout) {
    if (false) {}
    locDimOut[0] = locDimOut[1] = NaN;
    return;
  }
  var locatorA = layout.id[_util_graphic_js__rspack_import_0.XY[dimIdx]];
  var locatorB = locatorA;
  var dimCell = cellLayoutInfoToDimCell(layout);
  if (dimCell) {
    // Handle non-leaf
    locatorB += dimCell.span[_util_graphic_js__rspack_import_0.XY[dimIdx]] - 1;
  }
  locDimOut[0] = (0,_util_number_js__rspack_import_2.mathMin)(locDimOut[0], locatorA, locatorB);
  locDimOut[1] = (0,_util_number_js__rspack_import_2.mathMax)(locDimOut[1], locatorA, locatorB);
}
/**
 * @param locatorRange Must be the return of `parseCoordRangeOption`,
 *  where if not NaN, it must be a valid locator.
 */
function isXYLocatorRangeInvalidOnDim(locatorRange, dimIdx) {
  return (0,zrender_lib_core_util_js__rspack_import_1.eqNaN)(locatorRange[dimIdx][0]) || (0,zrender_lib_core_util_js__rspack_import_1.eqNaN)(locatorRange[dimIdx][1]);
}
// `locatorRange` will be expanded (modified) if an intersection is encountered.
function resolveXYLocatorRangeByCellMerge(inOutLocatorRange,
// Item indices coorespond to mergeDefList (len: mergeDefListTravelLen).
// Indicating whether each item has be merged into the `locatorRange`
outMergedMarkList, mergeDefList, mergeDefListTravelLen) {
  outMergedMarkList = outMergedMarkList || _tmpOutMergedMarkList;
  for (var idx = 0; idx < mergeDefListTravelLen; idx++) {
    outMergedMarkList[idx] = false;
  }
  // In most case, cell merging definition list length is smaller than the range extent,
  // therefore, to detection intersection, travelling cell merging definition list is probably
  // performant than traveling the four edges of the rect formed by the locator range.
  while (true) {
    var expanded = false;
    for (var idx = 0; idx < mergeDefListTravelLen; idx++) {
      var mergeDef = mergeDefList[idx];
      if (!outMergedMarkList[idx] && mergeDef.cellMergeOwner && expandXYLocatorRangeIfIntersect(inOutLocatorRange, mergeDef.locatorRange)) {
        outMergedMarkList[idx] = true;
        expanded = true;
      }
    }
    if (!expanded) {
      break;
    }
  }
}
var _tmpOutMergedMarkList = [];
// Return whether intersect.
// `thisLocRange` will be expanded (modified) if an intersection is encountered.
function expandXYLocatorRangeIfIntersect(thisLocRange, otherLocRange) {
  if (!locatorRangeIntersectOneDim(thisLocRange[0], otherLocRange[0]) || !locatorRangeIntersectOneDim(thisLocRange[1], otherLocRange[1])) {
    return false;
  }
  thisLocRange[0][0] = (0,_util_number_js__rspack_import_2.mathMin)(thisLocRange[0][0], otherLocRange[0][0]);
  thisLocRange[0][1] = (0,_util_number_js__rspack_import_2.mathMax)(thisLocRange[0][1], otherLocRange[0][1]);
  thisLocRange[1][0] = (0,_util_number_js__rspack_import_2.mathMin)(thisLocRange[1][0], otherLocRange[1][0]);
  thisLocRange[1][1] = (0,_util_number_js__rspack_import_2.mathMax)(thisLocRange[1][1], otherLocRange[1][1]);
  return true;
}
// Notice: If containing NaN, not intersect.
function locatorRangeIntersectOneDim(locRange1OneDim, locRange2OneDim) {
  return locRange1OneDim[1] >= locRange2OneDim[0] && locRange1OneDim[0] <= locRange2OneDim[1];
}
function fillIdSpanFromLocatorRange(owner, locatorRange) {
  owner.id.set(locatorRange[0][0], locatorRange[1][0]);
  owner.span.set(locatorRange[0][1] - owner.id.x + 1, locatorRange[1][1] - owner.id.y + 1);
}
function cloneXYLocatorRange(target, source) {
  target[0][0] = source[0][0];
  target[0][1] = source[0][1];
  target[1][0] = source[1][0];
  target[1][1] = source[1][1];
}
/**
 * If illegal, the corresponding x/y/width/height is set to `NaN`.
 * `x/width` or `y/height` is supported to be calculated separately,
 * i.e., one side are NaN, the other side are normal.
 * @param oneDimOut only write to `x/width` or `y/height`, depending on `dimIdx`.
 */
function xyLocatorRangeToRectOneDim(oneDimOut, locRange, dims, dimIdx) {
  var layoutMin = coordDataToAllCellLevelLayout(locRange[dimIdx][0], dims, dimIdx);
  var layoutMax = coordDataToAllCellLevelLayout(locRange[dimIdx][1], dims, dimIdx);
  oneDimOut[_util_graphic_js__rspack_import_0.XY[dimIdx]] = oneDimOut[_util_graphic_js__rspack_import_0.WH[dimIdx]] = NaN;
  if (layoutMin && layoutMax) {
    oneDimOut[_util_graphic_js__rspack_import_0.XY[dimIdx]] = layoutMin.xy;
    oneDimOut[_util_graphic_js__rspack_import_0.WH[dimIdx]] = layoutMax.xy + layoutMax.wh - layoutMin.xy;
  }
}
// No need currently, since `span` is not allowed to be defined directly by users.
// /**
//  * If either span x or y is valid and > 1, return parsed span, otherwise return `NullUndefined`.
//  */
// export function parseSpanOption(
//     spanOptionHost: MatrixCellSpanOptionHost,
//     dimCellPair: MatrixCellLayoutInfo[]
// ): Point | NullUndefined {
//     const spanX = parseSpanOnDim(spanOptionHost.spanX, dimCellPair[0], 0);
//     const spanY = parseSpanOnDim(spanOptionHost.spanY, dimCellPair[1], 1);
//     if (!eqNaN(spanX) || !eqNaN(spanY)) {
//         return new Point(spanX || 1, spanY || 1);
//     }
//     function parseSpanOnDim(spanOption: unknown, dimCell: MatrixCellLayoutInfo, dimIdx: number): number {
//         if (!isNumber(spanOption)) {
//             return NaN;
//         }
//         // Ensure positive integer (not NaN) to avoid dead loop.
//         const span = mathMax(1, Math.round(spanOption || 1)) || 1;
//         // Clamp, and consider may also be specified as `Infinity` to span the entire col/row.
//         return mathMin(span, mathMax(1, dimCell.dim.getLocatorCount(dimIdx) - dimCell.id[XY[dimIdx]]));
//     }
// }
/**
 * @usage To get/set on dimension, use:
 *  `xyVal[XY[dim]] = val;` // set on this dimension.
 *  `xyVal[XY[1 - dim]] = val;` // set on the perpendicular dimension.
 */
function setDimXYValue(out, dimIdx,
// 0 | 1
valueOnThisDim, valueOnOtherDim) {
  out[_util_graphic_js__rspack_import_0.XY[dimIdx]] = valueOnThisDim;
  out[_util_graphic_js__rspack_import_0.XY[1 - dimIdx]] = valueOnOtherDim;
  return out;
}
/**
 * Return NullUndefined if not dimension cell.
 */
function cellLayoutInfoToDimCell(cellLayoutInfo) {
  return cellLayoutInfo && (cellLayoutInfo.type === MatrixCellLayoutInfoType.leaf || cellLayoutInfo.type === MatrixCellLayoutInfoType.nonLeaf) ? cellLayoutInfo : null;
}
function createNaNRectLike() {
  return {
    x: NaN,
    y: NaN,
    width: NaN,
    height: NaN
  };
}

}),
86500: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return matrixPrepareCustom; }
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
function matrixPrepareCustom(coordSys) {
  var rect = coordSys.getRect();
  return {
    coordSys: {
      type: 'matrix',
      x: rect.x,
      y: rect.y,
      width: rect.width,
      height: rect.height
    },
    api: {
      coord: function (data, opt) {
        return coordSys.dataToPoint(data, opt);
      },
      layout: function (data, opt) {
        return coordSys.dataToLayout(data, opt);
      }
    }
  };
}

}),
62824: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var tslib__rspack_import_1 = __webpack_require__(2492);
/* import */ var zrender_lib_core_util_js__rspack_import_3 = __webpack_require__(9774);
/* import */ var _model_Component_js__rspack_import_0 = __webpack_require__(53075);
/* import */ var _model_mixin_makeStyleMapper_js__rspack_import_2 = __webpack_require__(45240);
/* import */ var _util_number_js__rspack_import_4 = __webpack_require__(64782);
/* import */ var _axisModelCommonMixin_js__rspack_import_5 = __webpack_require__(97238);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/






var ParallelAxisModel = /** @class */function (_super) {
  (0,tslib__rspack_import_1.__extends)(ParallelAxisModel, _super);
  function ParallelAxisModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = ParallelAxisModel.type;
    /**
     * @readOnly
     */
    _this.activeIntervals = [];
    return _this;
  }
  ParallelAxisModel.prototype.getAreaSelectStyle = function () {
    return (0,_model_mixin_makeStyleMapper_js__rspack_import_2["default"])([['fill', 'color'], ['lineWidth', 'borderWidth'], ['stroke', 'borderColor'], ['width', 'width'], ['opacity', 'opacity']
    // Option decal is in `DecalObject` but style.decal is in `PatternObject`.
    // So do not transfer decal directly.
    ])(this.getModel('areaSelectStyle'));
  };
  /**
   * The code of this feature is put on AxisModel but not ParallelAxis,
   * because axisModel can be alive after echarts updating but instance of
   * ParallelAxis having been disposed. this._activeInterval should be kept
   * when action dispatched (i.e. legend click).
   *
   * @param intervals `interval.length === 0` means set all active.
   */
  ParallelAxisModel.prototype.setActiveIntervals = function (intervals) {
    var activeIntervals = this.activeIntervals = zrender_lib_core_util_js__rspack_import_3.clone(intervals);
    // Normalize
    if (activeIntervals) {
      for (var i = activeIntervals.length - 1; i >= 0; i--) {
        _util_number_js__rspack_import_4.asc(activeIntervals[i]);
      }
    }
  };
  /**
   * @param value When only attempting detect whether 'no activeIntervals set',
   *        `value` is not needed to be input.
   */
  ParallelAxisModel.prototype.getActiveState = function (value) {
    var activeIntervals = this.activeIntervals;
    if (!activeIntervals.length) {
      return 'normal';
    }
    if (value == null || isNaN(+value)) {
      return 'inactive';
    }
    // Simple optimization
    if (activeIntervals.length === 1) {
      var interval = activeIntervals[0];
      if (interval[0] <= value && value <= interval[1]) {
        return 'active';
      }
    } else {
      for (var i = 0, len = activeIntervals.length; i < len; i++) {
        if (activeIntervals[i][0] <= value && value <= activeIntervals[i][1]) {
          return 'active';
        }
      }
    }
    return 'inactive';
  };
  return ParallelAxisModel;
}(_model_Component_js__rspack_import_0["default"]);
zrender_lib_core_util_js__rspack_import_3.mixin(ParallelAxisModel, _axisModelCommonMixin_js__rspack_import_5.AxisModelCommonMixin);
/* export default */ __webpack_exports__["default"] = (ParallelAxisModel);

}),
9690: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var tslib__rspack_import_1 = __webpack_require__(2492);
/* import */ var zrender_lib_core_util_js__rspack_import_2 = __webpack_require__(9774);
/* import */ var _model_Component_js__rspack_import_0 = __webpack_require__(53075);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/



var ParallelModel = /** @class */function (_super) {
  (0,tslib__rspack_import_1.__extends)(ParallelModel, _super);
  function ParallelModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = ParallelModel.type;
    return _this;
  }
  ParallelModel.prototype.init = function () {
    _super.prototype.init.apply(this, arguments);
    this.mergeOption({});
  };
  ParallelModel.prototype.mergeOption = function (newOption) {
    var thisOption = this.option;
    newOption && zrender_lib_core_util_js__rspack_import_2.merge(thisOption, newOption, true);
    this._initDimensions();
  };
  /**
   * Whether series or axis is in this coordinate system.
   */
  ParallelModel.prototype.contains = function (model, ecModel) {
    var parallelIndex = model.get('parallelIndex');
    return parallelIndex != null && ecModel.getComponent('parallel', parallelIndex) === this;
  };
  ParallelModel.prototype.setAxisExpand = function (opt) {
    zrender_lib_core_util_js__rspack_import_2.each(['axisExpandable', 'axisExpandCenter', 'axisExpandCount', 'axisExpandWidth', 'axisExpandWindow'], function (name) {
      if (opt.hasOwnProperty(name)) {
        // @ts-ignore FIXME: why "never" inferred in this.option[name]?
        this.option[name] = opt[name];
      }
    }, this);
  };
  ParallelModel.prototype._initDimensions = function () {
    var dimensions = this.dimensions = [];
    var parallelAxisIndex = this.parallelAxisIndex = [];
    var axisModels = zrender_lib_core_util_js__rspack_import_2.filter(this.ecModel.queryComponents({
      mainType: 'parallelAxis'
    }), function (axisModel) {
      // Can not use this.contains here, because
      // initialization has not been completed yet.
      return (axisModel.get('parallelIndex') || 0) === this.componentIndex;
    }, this);
    zrender_lib_core_util_js__rspack_import_2.each(axisModels, function (axisModel) {
      dimensions.push('dim' + axisModel.get('dim'));
      parallelAxisIndex.push(axisModel.componentIndex);
    });
  };
  ParallelModel.type = 'parallel';
  ParallelModel.dependencies = ['parallelAxis'];
  ParallelModel.layoutMode = 'box';
  ParallelModel.defaultOption = {
    // zlevel: 0,
    z: 0,
    left: 80,
    top: 60,
    right: 80,
    bottom: 60,
    // width: {totalWidth} - left - right,
    // height: {totalHeight} - top - bottom,
    layout: 'horizontal',
    // FIXME
    // naming?
    axisExpandable: false,
    axisExpandCenter: null,
    axisExpandCount: 0,
    axisExpandWidth: 50,
    axisExpandRate: 17,
    axisExpandDebounce: 50,
    // [out, in, jumpTarget]. In percentage. If use [null, 0.05], null means full.
    // Do not doc to user until necessary.
    axisExpandSlideTriggerArea: [-0.15, 0.05, 0.4],
    axisExpandTriggerOn: 'click',
    parallelAxisDefault: null
  };
  return ParallelModel;
}(_model_Component_js__rspack_import_0["default"]);
/* export default */ __webpack_exports__["default"] = (ParallelModel);

}),
71703: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ parallelCreator; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(9774);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/matrix.js
var matrix = __webpack_require__(46239);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/layout.js
var util_layout = __webpack_require__(88485);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisHelper.js
var axisHelper = __webpack_require__(62159);
// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(2492);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/Axis.js
var Axis = __webpack_require__(80855);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/parallel/ParallelAxis.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


var ParallelAxis_ParallelAxis = /** @class */function (_super) {
  (0,tslib_es6.__extends)(ParallelAxis, _super);
  function ParallelAxis(dim, scale, coordExtent, axisType, axisIndex) {
    var _this = _super.call(this, dim, scale, coordExtent) || this;
    _this.type = axisType || 'value';
    _this.axisIndex = axisIndex;
    return _this;
  }
  ParallelAxis.prototype.isHorizontal = function () {
    return this.coordinateSystem.getModel().get('layout') !== 'horizontal';
  };
  return ParallelAxis;
}(Axis["default"]);
/* export default */ var parallel_ParallelAxis = (ParallelAxis_ParallelAxis);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js
var graphic = __webpack_require__(87031);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(64782);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/sliderMove.js
var sliderMove = __webpack_require__(20143);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/parallel/Parallel.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/
/**
 * Parallel Coordinates
 * <https://en.wikipedia.org/wiki/Parallel_coordinates>
 */








var each = util.each;
var mathMin = Math.min;
var mathMax = Math.max;
var mathFloor = Math.floor;
var mathCeil = Math.ceil;
var round = number.round;
var PI = Math.PI;
var Parallel_Parallel = /** @class */function () {
  function Parallel(parallelModel, ecModel, api) {
    this.type = 'parallel';
    /**
     * key: dimension
     */
    this._axesMap = util.createHashMap();
    /**
     * key: dimension
     * value: {position: [], rotation, }
     */
    this._axesLayout = {};
    this.dimensions = parallelModel.dimensions;
    this._model = parallelModel;
    this._init(parallelModel, ecModel, api);
  }
  Parallel.prototype._init = function (parallelModel, ecModel, api) {
    var dimensions = parallelModel.dimensions;
    var parallelAxisIndex = parallelModel.parallelAxisIndex;
    each(dimensions, function (dim, idx) {
      var axisIndex = parallelAxisIndex[idx];
      var axisModel = ecModel.getComponent('parallelAxis', axisIndex);
      var axis = this._axesMap.set(dim, new parallel_ParallelAxis(dim, axisHelper.createScaleByModel(axisModel), [0, 0], axisModel.get('type'), axisIndex));
      var isCategory = axis.type === 'category';
      axis.onBand = isCategory && axisModel.get('boundaryGap');
      axis.inverse = axisModel.get('inverse');
      // Injection
      axisModel.axis = axis;
      axis.model = axisModel;
      axis.coordinateSystem = axisModel.coordinateSystem = this;
    }, this);
  };
  /**
   * Update axis scale after data processed
   */
  Parallel.prototype.update = function (ecModel, api) {
    this._updateAxesFromSeries(this._model, ecModel);
  };
  Parallel.prototype.containPoint = function (point) {
    var layoutInfo = this._makeLayoutInfo();
    var axisBase = layoutInfo.axisBase;
    var layoutBase = layoutInfo.layoutBase;
    var pixelDimIndex = layoutInfo.pixelDimIndex;
    var pAxis = point[1 - pixelDimIndex];
    var pLayout = point[pixelDimIndex];
    return pAxis >= axisBase && pAxis <= axisBase + layoutInfo.axisLength && pLayout >= layoutBase && pLayout <= layoutBase + layoutInfo.layoutLength;
  };
  Parallel.prototype.getModel = function () {
    return this._model;
  };
  /**
   * Update properties from series
   */
  Parallel.prototype._updateAxesFromSeries = function (parallelModel, ecModel) {
    ecModel.eachSeries(function (seriesModel) {
      if (!parallelModel.contains(seriesModel, ecModel)) {
        return;
      }
      var data = seriesModel.getData();
      each(this.dimensions, function (dim) {
        var axis = this._axesMap.get(dim);
        axis.scale.unionExtentFromData(data, data.mapDimension(dim));
        axisHelper.niceScaleExtent(axis.scale, axis.model);
      }, this);
    }, this);
  };
  /**
   * Resize the parallel coordinate system.
   */
  Parallel.prototype.resize = function (parallelModel, api) {
    var refContainer = util_layout.createBoxLayoutReference(parallelModel, api).refContainer;
    this._rect = util_layout.getLayoutRect(parallelModel.getBoxLayoutParams(), refContainer);
    this._layoutAxes();
  };
  Parallel.prototype.getRect = function () {
    return this._rect;
  };
  Parallel.prototype._makeLayoutInfo = function () {
    var parallelModel = this._model;
    var rect = this._rect;
    var xy = ['x', 'y'];
    var wh = ['width', 'height'];
    var layout = parallelModel.get('layout');
    var pixelDimIndex = layout === 'horizontal' ? 0 : 1;
    var layoutLength = rect[wh[pixelDimIndex]];
    var layoutExtent = [0, layoutLength];
    var axisCount = this.dimensions.length;
    var axisExpandWidth = restrict(parallelModel.get('axisExpandWidth'), layoutExtent);
    var axisExpandCount = restrict(parallelModel.get('axisExpandCount') || 0, [0, axisCount]);
    var axisExpandable = parallelModel.get('axisExpandable') && axisCount > 3 && axisCount > axisExpandCount && axisExpandCount > 1 && axisExpandWidth > 0 && layoutLength > 0;
    // `axisExpandWindow` is According to the coordinates of [0, axisExpandLength],
    // for sake of consider the case that axisCollapseWidth is 0 (when screen is narrow),
    // where collapsed axes should be overlapped.
    var axisExpandWindow = parallelModel.get('axisExpandWindow');
    var winSize;
    if (!axisExpandWindow) {
      winSize = restrict(axisExpandWidth * (axisExpandCount - 1), layoutExtent);
      var axisExpandCenter = parallelModel.get('axisExpandCenter') || mathFloor(axisCount / 2);
      axisExpandWindow = [axisExpandWidth * axisExpandCenter - winSize / 2];
      axisExpandWindow[1] = axisExpandWindow[0] + winSize;
    } else {
      winSize = restrict(axisExpandWindow[1] - axisExpandWindow[0], layoutExtent);
      axisExpandWindow[1] = axisExpandWindow[0] + winSize;
    }
    var axisCollapseWidth = (layoutLength - winSize) / (axisCount - axisExpandCount);
    // Avoid axisCollapseWidth is too small.
    axisCollapseWidth < 3 && (axisCollapseWidth = 0);
    // Find the first and last indices > ewin[0] and < ewin[1].
    var winInnerIndices = [mathFloor(round(axisExpandWindow[0] / axisExpandWidth, 1)) + 1, mathCeil(round(axisExpandWindow[1] / axisExpandWidth, 1)) - 1];
    // Pos in ec coordinates.
    var axisExpandWindow0Pos = axisCollapseWidth / axisExpandWidth * axisExpandWindow[0];
    return {
      layout: layout,
      pixelDimIndex: pixelDimIndex,
      layoutBase: rect[xy[pixelDimIndex]],
      layoutLength: layoutLength,
      axisBase: rect[xy[1 - pixelDimIndex]],
      axisLength: rect[wh[1 - pixelDimIndex]],
      axisExpandable: axisExpandable,
      axisExpandWidth: axisExpandWidth,
      axisCollapseWidth: axisCollapseWidth,
      axisExpandWindow: axisExpandWindow,
      axisCount: axisCount,
      winInnerIndices: winInnerIndices,
      axisExpandWindow0Pos: axisExpandWindow0Pos
    };
  };
  Parallel.prototype._layoutAxes = function () {
    var rect = this._rect;
    var axes = this._axesMap;
    var dimensions = this.dimensions;
    var layoutInfo = this._makeLayoutInfo();
    var layout = layoutInfo.layout;
    axes.each(function (axis) {
      var axisExtent = [0, layoutInfo.axisLength];
      var idx = axis.inverse ? 1 : 0;
      axis.setExtent(axisExtent[idx], axisExtent[1 - idx]);
    });
    each(dimensions, function (dim, idx) {
      var posInfo = (layoutInfo.axisExpandable ? layoutAxisWithExpand : layoutAxisWithoutExpand)(idx, layoutInfo);
      var positionTable = {
        horizontal: {
          x: posInfo.position,
          y: layoutInfo.axisLength
        },
        vertical: {
          x: 0,
          y: posInfo.position
        }
      };
      var rotationTable = {
        horizontal: PI / 2,
        vertical: 0
      };
      var position = [positionTable[layout].x + rect.x, positionTable[layout].y + rect.y];
      var rotation = rotationTable[layout];
      var transform = matrix.create();
      matrix.rotate(transform, transform, rotation);
      matrix.translate(transform, transform, position);
      // TODO
      // tick layout info
      // TODO
      // update dimensions info based on axis order.
      this._axesLayout[dim] = {
        position: position,
        rotation: rotation,
        transform: transform,
        axisNameAvailableWidth: posInfo.axisNameAvailableWidth,
        axisLabelShow: posInfo.axisLabelShow,
        nameTruncateMaxWidth: posInfo.nameTruncateMaxWidth,
        tickDirection: 1,
        labelDirection: 1
      };
    }, this);
  };
  /**
   * Get axis by dim.
   */
  Parallel.prototype.getAxis = function (dim) {
    return this._axesMap.get(dim);
  };
  /**
   * Convert a dim value of a single item of series data to Point.
   */
  Parallel.prototype.dataToPoint = function (value, dim) {
    return this.axisCoordToPoint(this._axesMap.get(dim).dataToCoord(value), dim);
  };
  /**
   * Travel data for one time, get activeState of each data item.
   * @param start the start dataIndex that travel from.
   * @param end the next dataIndex of the last dataIndex will be travel.
   */
  Parallel.prototype.eachActiveState = function (data, callback, start, end) {
    start == null && (start = 0);
    end == null && (end = data.count());
    var axesMap = this._axesMap;
    var dimensions = this.dimensions;
    var dataDimensions = [];
    var axisModels = [];
    util.each(dimensions, function (axisDim) {
      dataDimensions.push(data.mapDimension(axisDim));
      axisModels.push(axesMap.get(axisDim).model);
    });
    var hasActiveSet = this.hasAxisBrushed();
    for (var dataIndex = start; dataIndex < end; dataIndex++) {
      var activeState = void 0;
      if (!hasActiveSet) {
        activeState = 'normal';
      } else {
        activeState = 'active';
        var values = data.getValues(dataDimensions, dataIndex);
        for (var j = 0, lenj = dimensions.length; j < lenj; j++) {
          var state = axisModels[j].getActiveState(values[j]);
          if (state === 'inactive') {
            activeState = 'inactive';
            break;
          }
        }
      }
      callback(activeState, dataIndex);
    }
  };
  /**
   * Whether has any activeSet.
   */
  Parallel.prototype.hasAxisBrushed = function () {
    var dimensions = this.dimensions;
    var axesMap = this._axesMap;
    var hasActiveSet = false;
    for (var j = 0, lenj = dimensions.length; j < lenj; j++) {
      if (axesMap.get(dimensions[j]).model.getActiveState() !== 'normal') {
        hasActiveSet = true;
      }
    }
    return hasActiveSet;
  };
  /**
   * Convert coords of each axis to Point.
   *  Return point. For example: [10, 20]
   */
  Parallel.prototype.axisCoordToPoint = function (coord, dim) {
    var axisLayout = this._axesLayout[dim];
    return graphic.applyTransform([coord, 0], axisLayout.transform);
  };
  /**
   * Get axis layout.
   */
  Parallel.prototype.getAxisLayout = function (dim) {
    return util.clone(this._axesLayout[dim]);
  };
  /**
   * @return {Object} {axisExpandWindow, delta, behavior: 'jump' | 'slide' | 'none'}.
   */
  Parallel.prototype.getSlidedAxisExpandWindow = function (point) {
    var layoutInfo = this._makeLayoutInfo();
    var pixelDimIndex = layoutInfo.pixelDimIndex;
    var axisExpandWindow = layoutInfo.axisExpandWindow.slice();
    var winSize = axisExpandWindow[1] - axisExpandWindow[0];
    var extent = [0, layoutInfo.axisExpandWidth * (layoutInfo.axisCount - 1)];
    // Out of the area of coordinate system.
    if (!this.containPoint(point)) {
      return {
        behavior: 'none',
        axisExpandWindow: axisExpandWindow
      };
    }
    // Convert the point from global to expand coordinates.
    var pointCoord = point[pixelDimIndex] - layoutInfo.layoutBase - layoutInfo.axisExpandWindow0Pos;
    // For dragging operation convenience, the window should not be
    // slided when mouse is the center area of the window.
    var delta;
    var behavior = 'slide';
    var axisCollapseWidth = layoutInfo.axisCollapseWidth;
    var triggerArea = this._model.get('axisExpandSlideTriggerArea');
    // But consider touch device, jump is necessary.
    var useJump = triggerArea[0] != null;
    if (axisCollapseWidth) {
      if (useJump && axisCollapseWidth && pointCoord < winSize * triggerArea[0]) {
        behavior = 'jump';
        delta = pointCoord - winSize * triggerArea[2];
      } else if (useJump && axisCollapseWidth && pointCoord > winSize * (1 - triggerArea[0])) {
        behavior = 'jump';
        delta = pointCoord - winSize * (1 - triggerArea[2]);
      } else {
        (delta = pointCoord - winSize * triggerArea[1]) >= 0 && (delta = pointCoord - winSize * (1 - triggerArea[1])) <= 0 && (delta = 0);
      }
      delta *= layoutInfo.axisExpandWidth / axisCollapseWidth;
      delta ? (0,sliderMove["default"])(delta, axisExpandWindow, extent, 'all')
      // Avoid nonsense triger on mousemove.
      : behavior = 'none';
    }
    // When screen is too narrow, make it visible and slidable, although it is hard to interact.
    else {
      var winSize2 = axisExpandWindow[1] - axisExpandWindow[0];
      var pos = extent[1] * pointCoord / winSize2;
      axisExpandWindow = [mathMax(0, pos - winSize2 / 2)];
      axisExpandWindow[1] = mathMin(extent[1], axisExpandWindow[0] + winSize2);
      axisExpandWindow[0] = axisExpandWindow[1] - winSize2;
    }
    return {
      axisExpandWindow: axisExpandWindow,
      behavior: behavior
    };
  };
  return Parallel;
}();
function restrict(len, extent) {
  return mathMin(mathMax(len, extent[0]), extent[1]);
}
function layoutAxisWithoutExpand(axisIndex, layoutInfo) {
  var step = layoutInfo.layoutLength / (layoutInfo.axisCount - 1);
  return {
    position: step * axisIndex,
    axisNameAvailableWidth: step,
    axisLabelShow: true
  };
}
function layoutAxisWithExpand(axisIndex, layoutInfo) {
  var layoutLength = layoutInfo.layoutLength;
  var axisExpandWidth = layoutInfo.axisExpandWidth;
  var axisCount = layoutInfo.axisCount;
  var axisCollapseWidth = layoutInfo.axisCollapseWidth;
  var winInnerIndices = layoutInfo.winInnerIndices;
  var position;
  var axisNameAvailableWidth = axisCollapseWidth;
  var axisLabelShow = false;
  var nameTruncateMaxWidth;
  if (axisIndex < winInnerIndices[0]) {
    position = axisIndex * axisCollapseWidth;
    nameTruncateMaxWidth = axisCollapseWidth;
  } else if (axisIndex <= winInnerIndices[1]) {
    position = layoutInfo.axisExpandWindow0Pos + axisIndex * axisExpandWidth - layoutInfo.axisExpandWindow[0];
    axisNameAvailableWidth = axisExpandWidth;
    axisLabelShow = true;
  } else {
    position = layoutLength - (axisCount - 1 - axisIndex) * axisCollapseWidth;
    nameTruncateMaxWidth = axisCollapseWidth;
  }
  return {
    position: position,
    axisNameAvailableWidth: axisNameAvailableWidth,
    axisLabelShow: axisLabelShow,
    nameTruncateMaxWidth: nameTruncateMaxWidth
  };
}
/* export default */ var parallel_Parallel = (Parallel_Parallel);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js
var model = __webpack_require__(67698);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/parallel/parallelCreator.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/
/**
 * Parallel coordinate system creater.
 */


function createParallelCoordSys(ecModel, api) {
  var coordSysList = [];
  ecModel.eachComponent('parallel', function (parallelModel, idx) {
    var coordSys = new parallel_Parallel(parallelModel, ecModel, api);
    coordSys.name = 'parallel_' + idx;
    coordSys.resize(parallelModel, api);
    parallelModel.coordinateSystem = coordSys;
    coordSys.model = parallelModel;
    coordSysList.push(coordSys);
  });
  // Inject the coordinateSystems into seriesModel
  ecModel.eachSeries(function (seriesModel) {
    if (seriesModel.get('coordinateSystem') === 'parallel') {
      var parallelModel = seriesModel.getReferringComponents('parallel', model.SINGLE_REFERRING).models[0];
      seriesModel.coordinateSystem = parallelModel.coordinateSystem;
    }
  });
  return coordSysList;
}
var parallelCoordSysCreator = {
  create: createParallelCoordSys
};
/* export default */ var parallelCreator = (parallelCoordSysCreator);

}),
7292: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return parallelPreprocessor; }
});
/* import */ var zrender_lib_core_util_js__rspack_import_0 = __webpack_require__(9774);
/* import */ var _util_model_js__rspack_import_1 = __webpack_require__(67698);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


function parallelPreprocessor(option) {
  createParallelIfNeeded(option);
  mergeAxisOptionFromParallel(option);
}
/**
 * Create a parallel coordinate if not exists.
 * @inner
 */
function createParallelIfNeeded(option) {
  if (option.parallel) {
    return;
  }
  var hasParallelSeries = false;
  zrender_lib_core_util_js__rspack_import_0.each(option.series, function (seriesOpt) {
    if (seriesOpt && seriesOpt.type === 'parallel') {
      hasParallelSeries = true;
    }
  });
  if (hasParallelSeries) {
    option.parallel = [{}];
  }
}
/**
 * Merge aixs definition from parallel option (if exists) to axis option.
 * @inner
 */
function mergeAxisOptionFromParallel(option) {
  var axes = _util_model_js__rspack_import_1.normalizeToArray(option.parallelAxis);
  zrender_lib_core_util_js__rspack_import_0.each(axes, function (axisOption) {
    if (!zrender_lib_core_util_js__rspack_import_0.isObject(axisOption)) {
      return;
    }
    var parallelIndex = axisOption.parallelIndex || 0;
    var parallelOption = _util_model_js__rspack_import_1.normalizeToArray(option.parallel)[parallelIndex];
    if (parallelOption && parallelOption.parallelAxisDefault) {
      zrender_lib_core_util_js__rspack_import_0.merge(axisOption, parallelOption.parallelAxisDefault, false);
    }
  });
}

}),
66533: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AngleAxisModel: function() { return AngleAxisModel; },
  PolarAxisModel: function() { return PolarAxisModel; },
  RadiusAxisModel: function() { return RadiusAxisModel; }
});
/* import */ var tslib__rspack_import_1 = __webpack_require__(2492);
/* import */ var zrender_lib_core_util_js__rspack_import_3 = __webpack_require__(9774);
/* import */ var _model_Component_js__rspack_import_0 = __webpack_require__(53075);
/* import */ var _axisModelCommonMixin_js__rspack_import_4 = __webpack_require__(97238);
/* import */ var _util_model_js__rspack_import_2 = __webpack_require__(67698);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/





var PolarAxisModel = /** @class */function (_super) {
  (0,tslib__rspack_import_1.__extends)(PolarAxisModel, _super);
  function PolarAxisModel() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  PolarAxisModel.prototype.getCoordSysModel = function () {
    return this.getReferringComponents('polar', _util_model_js__rspack_import_2.SINGLE_REFERRING).models[0];
  };
  PolarAxisModel.type = 'polarAxis';
  return PolarAxisModel;
}(_model_Component_js__rspack_import_0["default"]);
zrender_lib_core_util_js__rspack_import_3.mixin(PolarAxisModel, _axisModelCommonMixin_js__rspack_import_4.AxisModelCommonMixin);

var AngleAxisModel = /** @class */function (_super) {
  (0,tslib__rspack_import_1.__extends)(AngleAxisModel, _super);
  function AngleAxisModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = AngleAxisModel.type;
    return _this;
  }
  AngleAxisModel.type = 'angleAxis';
  return AngleAxisModel;
}(PolarAxisModel);

var RadiusAxisModel = /** @class */function (_super) {
  (0,tslib__rspack_import_1.__extends)(RadiusAxisModel, _super);
  function RadiusAxisModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = RadiusAxisModel.type;
    return _this;
  }
  RadiusAxisModel.type = 'radiusAxis';
  return RadiusAxisModel;
}(PolarAxisModel);


}),
14534: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var tslib__rspack_import_1 = __webpack_require__(2492);
/* import */ var _model_Component_js__rspack_import_0 = __webpack_require__(53075);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


var PolarModel = /** @class */function (_super) {
  (0,tslib__rspack_import_1.__extends)(PolarModel, _super);
  function PolarModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = PolarModel.type;
    return _this;
  }
  PolarModel.prototype.findAxisModel = function (axisType) {
    var foundAxisModel;
    var ecModel = this.ecModel;
    ecModel.eachComponent(axisType, function (axisModel) {
      if (axisModel.getCoordSysModel() === this) {
        foundAxisModel = axisModel;
      }
    }, this);
    return foundAxisModel;
  };
  PolarModel.type = 'polar';
  PolarModel.dependencies = ['radiusAxis', 'angleAxis'];
  PolarModel.defaultOption = {
    // zlevel: 0,
    z: 0,
    center: ['50%', '50%'],
    radius: '80%'
  };
  return PolarModel;
}(_model_Component_js__rspack_import_0["default"]);
/* export default */ __webpack_exports__["default"] = (PolarModel);

}),
85047: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ polar_polarCreator; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(9774);
// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(2492);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/Axis.js
var Axis = __webpack_require__(80855);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/polar/RadiusAxis.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


var RadiusAxis_RadiusAxis = /** @class */function (_super) {
  (0,tslib_es6.__extends)(RadiusAxis, _super);
  function RadiusAxis(scale, radiusExtent) {
    return _super.call(this, 'radius', scale, radiusExtent) || this;
  }
  RadiusAxis.prototype.pointToData = function (point, clamp) {
    return this.polar.pointToData(point, clamp)[this.dim === 'radius' ? 0 : 1];
  };
  return RadiusAxis;
}(Axis["default"]);
RadiusAxis_RadiusAxis.prototype.dataToRadius = Axis["default"].prototype.dataToCoord;
RadiusAxis_RadiusAxis.prototype.radiusToData = Axis["default"].prototype.coordToData;
/* export default */ var polar_RadiusAxis = (RadiusAxis_RadiusAxis);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/contain/text.js
var contain_text = __webpack_require__(26066);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js
var model = __webpack_require__(67698);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/polar/AngleAxis.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
var AngleAxis_AngleAxis = /** @class */function (_super) {
  (0,tslib_es6.__extends)(AngleAxis, _super);
  function AngleAxis(scale, angleExtent) {
    return _super.call(this, 'angle', scale, angleExtent || [0, 360]) || this;
  }
  AngleAxis.prototype.pointToData = function (point, clamp) {
    return this.polar.pointToData(point, clamp)[this.dim === 'radius' ? 0 : 1];
  };
  /**
   * Only be called in category axis.
   * Angle axis uses text height to decide interval
   *
   * @override
   * @return {number} Auto interval for cateogry axis tick and label
   */
  AngleAxis.prototype.calculateCategoryInterval = function () {
    var axis = this;
    var labelModel = axis.getLabelModel();
    var ordinalScale = axis.scale;
    var ordinalExtent = ordinalScale.getExtent();
    // Providing this method is for optimization:
    // avoid generating a long array by `getTicks`
    // in large category data case.
    var tickCount = ordinalScale.count();
    if (ordinalExtent[1] - ordinalExtent[0] < 1) {
      return 0;
    }
    var tickValue = ordinalExtent[0];
    var unitSpan = axis.dataToCoord(tickValue + 1) - axis.dataToCoord(tickValue);
    var unitH = Math.abs(unitSpan);
    // Not precise, just use height as text width
    // and each distance from axis line yet.
    var rect = contain_text.getBoundingRect(tickValue == null ? '' : tickValue + '', labelModel.getFont(), 'center', 'top');
    var maxH = Math.max(rect.height, 7);
    var dh = maxH / unitH;
    // 0/0 is NaN, 1/0 is Infinity.
    isNaN(dh) && (dh = Infinity);
    var interval = Math.max(0, Math.floor(dh));
    var cache = inner(axis.model);
    var lastAutoInterval = cache.lastAutoInterval;
    var lastTickCount = cache.lastTickCount;
    // Use cache to keep interval stable while moving zoom window,
    // otherwise the calculated interval might jitter when the zoom
    // window size is close to the interval-changing size.
    if (lastAutoInterval != null && lastTickCount != null && Math.abs(lastAutoInterval - interval) <= 1 && Math.abs(lastTickCount - tickCount) <= 1
    // Always choose the bigger one, otherwise the critical
    // point is not the same when zooming in or zooming out.
    && lastAutoInterval > interval) {
      interval = lastAutoInterval;
    }
    // Only update cache if cache not used, otherwise the
    // changing of interval is too insensitive.
    else {
      cache.lastTickCount = tickCount;
      cache.lastAutoInterval = interval;
    }
    return interval;
  };
  return AngleAxis;
}(Axis["default"]);
AngleAxis_AngleAxis.prototype.dataToAngle = Axis["default"].prototype.dataToCoord;
AngleAxis_AngleAxis.prototype.angleToData = Axis["default"].prototype.coordToData;
/* export default */ var polar_AngleAxis = (AngleAxis_AngleAxis);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/polar/Polar.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


var polarDimensions = ['radius', 'angle'];
var Polar_Polar = /** @class */function () {
  function Polar(name) {
    this.dimensions = polarDimensions;
    this.type = 'polar';
    /**
     * x of polar center
     */
    this.cx = 0;
    /**
     * y of polar center
     */
    this.cy = 0;
    this._radiusAxis = new polar_RadiusAxis();
    this._angleAxis = new polar_AngleAxis();
    this.axisPointerEnabled = true;
    this.name = name || '';
    this._radiusAxis.polar = this._angleAxis.polar = this;
  }
  /**
   * If contain coord
   */
  Polar.prototype.containPoint = function (point) {
    var coord = this.pointToCoord(point);
    return this._radiusAxis.contain(coord[0]) && this._angleAxis.contain(coord[1]);
  };
  /**
   * If contain data
   */
  Polar.prototype.containData = function (data) {
    return this._radiusAxis.containData(data[0]) && this._angleAxis.containData(data[1]);
  };
  Polar.prototype.getAxis = function (dim) {
    var key = '_' + dim + 'Axis';
    return this[key];
  };
  Polar.prototype.getAxes = function () {
    return [this._radiusAxis, this._angleAxis];
  };
  /**
   * Get axes by type of scale
   */
  Polar.prototype.getAxesByScale = function (scaleType) {
    var axes = [];
    var angleAxis = this._angleAxis;
    var radiusAxis = this._radiusAxis;
    angleAxis.scale.type === scaleType && axes.push(angleAxis);
    radiusAxis.scale.type === scaleType && axes.push(radiusAxis);
    return axes;
  };
  Polar.prototype.getAngleAxis = function () {
    return this._angleAxis;
  };
  Polar.prototype.getRadiusAxis = function () {
    return this._radiusAxis;
  };
  Polar.prototype.getOtherAxis = function (axis) {
    var angleAxis = this._angleAxis;
    return axis === angleAxis ? this._radiusAxis : angleAxis;
  };
  /**
   * Base axis will be used on stacking.
   *
   */
  Polar.prototype.getBaseAxis = function () {
    return this.getAxesByScale('ordinal')[0] || this.getAxesByScale('time')[0] || this.getAngleAxis();
  };
  Polar.prototype.getTooltipAxes = function (dim) {
    var baseAxis = dim != null && dim !== 'auto' ? this.getAxis(dim) : this.getBaseAxis();
    return {
      baseAxes: [baseAxis],
      otherAxes: [this.getOtherAxis(baseAxis)]
    };
  };
  /**
   * Convert a single data item to (x, y) point.
   * Parameter data is an array which the first element is radius and the second is angle
   */
  Polar.prototype.dataToPoint = function (data, clamp, out) {
    return this.coordToPoint([this._radiusAxis.dataToRadius(data[0], clamp), this._angleAxis.dataToAngle(data[1], clamp)], out);
  };
  /**
   * Convert a (x, y) point to data
   */
  Polar.prototype.pointToData = function (point, clamp, out) {
    out = out || [];
    var coord = this.pointToCoord(point);
    out[0] = this._radiusAxis.radiusToData(coord[0], clamp);
    out[1] = this._angleAxis.angleToData(coord[1], clamp);
    return out;
  };
  /**
   * Convert a (x, y) point to (radius, angle) coord
   */
  Polar.prototype.pointToCoord = function (point) {
    var dx = point[0] - this.cx;
    var dy = point[1] - this.cy;
    var angleAxis = this.getAngleAxis();
    var extent = angleAxis.getExtent();
    var minAngle = Math.min(extent[0], extent[1]);
    var maxAngle = Math.max(extent[0], extent[1]);
    // Fix fixed extent in polarCreator
    // FIXME
    angleAxis.inverse ? minAngle = maxAngle - 360 : maxAngle = minAngle + 360;
    var radius = Math.sqrt(dx * dx + dy * dy);
    dx /= radius;
    dy /= radius;
    var radian = Math.atan2(-dy, dx) / Math.PI * 180;
    // move to angleExtent
    var dir = radian < minAngle ? 1 : -1;
    while (radian < minAngle || radian > maxAngle) {
      radian += dir * 360;
    }
    return [radius, radian];
  };
  /**
   * Convert a (radius, angle) coord to (x, y) point
   */
  Polar.prototype.coordToPoint = function (coord, out) {
    out = out || [];
    var radius = coord[0];
    var radian = coord[1] / 180 * Math.PI;
    out[0] = Math.cos(radian) * radius + this.cx;
    // Inverse the y
    out[1] = -Math.sin(radian) * radius + this.cy;
    return out;
  };
  /**
   * Get ring area of cartesian.
   * Area will have a contain function to determine if a point is in the coordinate system.
   */
  Polar.prototype.getArea = function () {
    var angleAxis = this.getAngleAxis();
    var radiusAxis = this.getRadiusAxis();
    var radiusExtent = radiusAxis.getExtent().slice();
    radiusExtent[0] > radiusExtent[1] && radiusExtent.reverse();
    var angleExtent = angleAxis.getExtent();
    var RADIAN = Math.PI / 180;
    var EPSILON = 1e-4;
    return {
      cx: this.cx,
      cy: this.cy,
      r0: radiusExtent[0],
      r: radiusExtent[1],
      startAngle: -angleExtent[0] * RADIAN,
      endAngle: -angleExtent[1] * RADIAN,
      clockwise: angleAxis.inverse,
      contain: function (x, y) {
        // It's a ring shape.
        // Start angle and end angle don't matter
        var dx = x - this.cx;
        var dy = y - this.cy;
        var d2 = dx * dx + dy * dy;
        var r = this.r;
        var r0 = this.r0;
        // minus a tiny value 1e-4 in double side to avoid being clipped unexpectedly
        // r == r0 contain nothing
        return r !== r0 && d2 - EPSILON <= r * r && d2 + EPSILON >= r0 * r0;
      },
      // As the bounding box
      x: this.cx - radiusExtent[1],
      y: this.cy - radiusExtent[1],
      width: radiusExtent[1] * 2,
      height: radiusExtent[1] * 2
    };
  };
  Polar.prototype.convertToPixel = function (ecModel, finder, value) {
    var coordSys = getCoordSys(finder);
    return coordSys === this ? this.dataToPoint(value) : null;
  };
  Polar.prototype.convertFromPixel = function (ecModel, finder, pixel) {
    var coordSys = getCoordSys(finder);
    return coordSys === this ? this.pointToData(pixel) : null;
  };
  return Polar;
}();
function getCoordSys(finder) {
  var seriesModel = finder.seriesModel;
  var polarModel = finder.polarModel;
  return polarModel && polarModel.coordinateSystem || seriesModel && seriesModel.coordinateSystem;
}
/* export default */ var polar_Polar = (Polar_Polar);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(64782);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisHelper.js
var axisHelper = __webpack_require__(62159);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/layout.js
var layout = __webpack_require__(88485);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/polar/polarCreator.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/
// TODO Axis scale






/**
 * Resize method bound to the polar
 */
function resizePolar(polar, polarModel, api) {
  var center = polarModel.get('center');
  var refContainer = (0,layout.createBoxLayoutReference)(polarModel, api).refContainer;
  polar.cx = (0,number.parsePercent)(center[0], refContainer.width) + refContainer.x;
  polar.cy = (0,number.parsePercent)(center[1], refContainer.height) + refContainer.y;
  var radiusAxis = polar.getRadiusAxis();
  var size = Math.min(refContainer.width, refContainer.height) / 2;
  var radius = polarModel.get('radius');
  if (radius == null) {
    radius = [0, '100%'];
  } else if (!util.isArray(radius)) {
    // r0 = 0
    radius = [0, radius];
  }
  var parsedRadius = [(0,number.parsePercent)(radius[0], size), (0,number.parsePercent)(radius[1], size)];
  radiusAxis.inverse ? radiusAxis.setExtent(parsedRadius[1], parsedRadius[0]) : radiusAxis.setExtent(parsedRadius[0], parsedRadius[1]);
}
/**
 * Update polar
 */
function updatePolarScale(ecModel, api) {
  var polar = this;
  var angleAxis = polar.getAngleAxis();
  var radiusAxis = polar.getRadiusAxis();
  // Reset scale
  angleAxis.scale.setExtent(Infinity, -Infinity);
  radiusAxis.scale.setExtent(Infinity, -Infinity);
  ecModel.eachSeries(function (seriesModel) {
    if (seriesModel.coordinateSystem === polar) {
      var data_1 = seriesModel.getData();
      util.each((0,axisHelper.getDataDimensionsOnAxis)(data_1, 'radius'), function (dim) {
        radiusAxis.scale.unionExtentFromData(data_1, dim);
      });
      util.each((0,axisHelper.getDataDimensionsOnAxis)(data_1, 'angle'), function (dim) {
        angleAxis.scale.unionExtentFromData(data_1, dim);
      });
    }
  });
  (0,axisHelper.niceScaleExtent)(angleAxis.scale, angleAxis.model);
  (0,axisHelper.niceScaleExtent)(radiusAxis.scale, radiusAxis.model);
  // Fix extent of category angle axis
  if (angleAxis.type === 'category' && !angleAxis.onBand) {
    var extent = angleAxis.getExtent();
    var diff = 360 / angleAxis.scale.count();
    angleAxis.inverse ? extent[1] += diff : extent[1] -= diff;
    angleAxis.setExtent(extent[0], extent[1]);
  }
}
function isAngleAxisModel(axisModel) {
  return axisModel.mainType === 'angleAxis';
}
/**
 * Set common axis properties
 */
function setAxis(axis, axisModel) {
  var _a;
  axis.type = axisModel.get('type');
  axis.scale = (0,axisHelper.createScaleByModel)(axisModel);
  axis.onBand = axisModel.get('boundaryGap') && axis.type === 'category';
  axis.inverse = axisModel.get('inverse');
  if (isAngleAxisModel(axisModel)) {
    axis.inverse = axis.inverse !== axisModel.get('clockwise');
    var startAngle = axisModel.get('startAngle');
    var endAngle = (_a = axisModel.get('endAngle')) !== null && _a !== void 0 ? _a : startAngle + (axis.inverse ? -360 : 360);
    axis.setExtent(startAngle, endAngle);
  }
  // Inject axis instance
  axisModel.axis = axis;
  axis.model = axisModel;
}
var polarCreator = {
  dimensions: polarDimensions,
  create: function (ecModel, api) {
    var polarList = [];
    ecModel.eachComponent('polar', function (polarModel, idx) {
      var polar = new polar_Polar(idx + '');
      // Inject resize and update method
      polar.update = updatePolarScale;
      var radiusAxis = polar.getRadiusAxis();
      var angleAxis = polar.getAngleAxis();
      var radiusAxisModel = polarModel.findAxisModel('radiusAxis');
      var angleAxisModel = polarModel.findAxisModel('angleAxis');
      setAxis(radiusAxis, radiusAxisModel);
      setAxis(angleAxis, angleAxisModel);
      resizePolar(polar, polarModel, api);
      polarList.push(polar);
      polarModel.coordinateSystem = polar;
      polar.model = polarModel;
    });
    // Inject coordinateSystem to series
    ecModel.eachSeries(function (seriesModel) {
      if (seriesModel.get('coordinateSystem') === 'polar') {
        var polarModel = seriesModel.getReferringComponents('polar', model.SINGLE_REFERRING).models[0];
        if (false) {}
        seriesModel.coordinateSystem = polarModel.coordinateSystem;
      }
    });
    return polarList;
  }
};
/* export default */ var polar_polarCreator = (polarCreator);

}),
67715: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return polarPrepareCustom; }
});
/* import */ var zrender_lib_core_util_js__rspack_import_0 = __webpack_require__(9774);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

// import AngleAxis from './AngleAxis.js';
function dataToCoordSize(dataSize, dataItem) {
  // dataItem is necessary in log axis.
  dataItem = dataItem || [0, 0];
  return zrender_lib_core_util_js__rspack_import_0.map(['Radius', 'Angle'], function (dim, dimIdx) {
    var getterName = 'get' + dim + 'Axis';
    // TODO: TYPE Check Angle Axis
    var axis = this[getterName]();
    var val = dataItem[dimIdx];
    var halfSize = dataSize[dimIdx] / 2;
    var result = axis.type === 'category' ? axis.getBandWidth() : Math.abs(axis.dataToCoord(val - halfSize) - axis.dataToCoord(val + halfSize));
    if (dim === 'Angle') {
      result = result * Math.PI / 180;
    }
    return result;
  }, this);
}
function polarPrepareCustom(coordSys) {
  var radiusAxis = coordSys.getRadiusAxis();
  var angleAxis = coordSys.getAngleAxis();
  var radius = radiusAxis.getExtent();
  radius[0] > radius[1] && radius.reverse();
  return {
    coordSys: {
      type: 'polar',
      cx: coordSys.cx,
      cy: coordSys.cy,
      r: radius[1],
      r0: radius[0]
    },
    api: {
      coord: function (data) {
        var radius = radiusAxis.dataToRadius(data[0]);
        var angle = angleAxis.dataToAngle(data[1]);
        var coord = coordSys.coordToPoint([radius, angle]);
        coord.push(radius, angle * Math.PI / 180);
        return coord;
      },
      size: zrender_lib_core_util_js__rspack_import_0.bind(dataToCoordSize, coordSys)
    }
  };
}

}),
21203: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ radar_Radar; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(2492);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/Axis.js
var Axis = __webpack_require__(80855);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/radar/IndicatorAxis.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


var IndicatorAxis_IndicatorAxis = /** @class */function (_super) {
  (0,tslib_es6.__extends)(IndicatorAxis, _super);
  function IndicatorAxis(dim, scale, radiusExtent) {
    var _this = _super.call(this, dim, scale, radiusExtent) || this;
    _this.type = 'value';
    _this.angle = 0;
    _this.name = '';
    return _this;
  }
  return IndicatorAxis;
}(Axis["default"]);
/* export default */ var radar_IndicatorAxis = (IndicatorAxis_IndicatorAxis);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/scale/Interval.js
var Interval = __webpack_require__(65818);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(64782);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(9774);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisAlignTicks.js
var axisAlignTicks = __webpack_require__(35590);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/layout.js
var layout = __webpack_require__(88485);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/radar/Radar.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/
// TODO clockwise






var Radar_Radar = /** @class */function () {
  function Radar(radarModel, ecModel, api) {
    /**
     *
     * Radar dimensions
     */
    this.dimensions = [];
    this._model = radarModel;
    this._indicatorAxes = (0,util.map)(radarModel.getIndicatorModels(), function (indicatorModel, idx) {
      var dim = 'indicator_' + idx;
      var indicatorAxis = new radar_IndicatorAxis(dim, new Interval["default"]()
      // (indicatorModel.get('axisType') === 'log') ? new LogScale() : new IntervalScale()
      );
      indicatorAxis.name = indicatorModel.get('name');
      // Inject model and axis
      indicatorAxis.model = indicatorModel;
      indicatorModel.axis = indicatorAxis;
      this.dimensions.push(dim);
      return indicatorAxis;
    }, this);
    this.resize(radarModel, api);
  }
  Radar.prototype.getIndicatorAxes = function () {
    return this._indicatorAxes;
  };
  Radar.prototype.dataToPoint = function (value, indicatorIndex) {
    var indicatorAxis = this._indicatorAxes[indicatorIndex];
    return this.coordToPoint(indicatorAxis.dataToCoord(value), indicatorIndex);
  };
  // TODO: API should be coordToPoint([coord, indicatorIndex])
  Radar.prototype.coordToPoint = function (coord, indicatorIndex) {
    var indicatorAxis = this._indicatorAxes[indicatorIndex];
    var angle = indicatorAxis.angle;
    var x = this.cx + coord * Math.cos(angle);
    var y = this.cy - coord * Math.sin(angle);
    return [x, y];
  };
  Radar.prototype.pointToData = function (pt) {
    var dx = pt[0] - this.cx;
    var dy = pt[1] - this.cy;
    var radius = Math.sqrt(dx * dx + dy * dy);
    dx /= radius;
    dy /= radius;
    var radian = Math.atan2(-dy, dx);
    // Find the closest angle
    // FIXME index can calculated directly
    var minRadianDiff = Infinity;
    var closestAxis;
    var closestAxisIdx = -1;
    for (var i = 0; i < this._indicatorAxes.length; i++) {
      var indicatorAxis = this._indicatorAxes[i];
      var diff = Math.abs(radian - indicatorAxis.angle);
      if (diff < minRadianDiff) {
        closestAxis = indicatorAxis;
        closestAxisIdx = i;
        minRadianDiff = diff;
      }
    }
    return [closestAxisIdx, +(closestAxis && closestAxis.coordToData(radius))];
  };
  Radar.prototype.resize = function (radarModel, api) {
    var refContainer = (0,layout.createBoxLayoutReference)(radarModel, api).refContainer;
    var center = radarModel.get('center');
    var viewSize = Math.min(refContainer.width, refContainer.height) / 2;
    this.cx = number.parsePercent(center[0], refContainer.width) + refContainer.x;
    this.cy = number.parsePercent(center[1], refContainer.height) + refContainer.y;
    this.startAngle = radarModel.get('startAngle') * Math.PI / 180;
    // radius may be single value like `20`, `'80%'`, or array like `[10, '80%']`
    var radius = radarModel.get('radius');
    if ((0,util.isString)(radius) || (0,util.isNumber)(radius)) {
      radius = [0, radius];
    }
    this.r0 = number.parsePercent(radius[0], viewSize);
    this.r = number.parsePercent(radius[1], viewSize);
    (0,util.each)(this._indicatorAxes, function (indicatorAxis, idx) {
      indicatorAxis.setExtent(this.r0, this.r);
      var angle = this.startAngle + idx * Math.PI * 2 / this._indicatorAxes.length;
      // Normalize to [-PI, PI]
      angle = Math.atan2(Math.sin(angle), Math.cos(angle));
      indicatorAxis.angle = angle;
    }, this);
  };
  Radar.prototype.update = function (ecModel, api) {
    var indicatorAxes = this._indicatorAxes;
    var radarModel = this._model;
    (0,util.each)(indicatorAxes, function (indicatorAxis) {
      indicatorAxis.scale.setExtent(Infinity, -Infinity);
    });
    ecModel.eachSeriesByType('radar', function (radarSeries, idx) {
      if (radarSeries.get('coordinateSystem') !== 'radar'
      // @ts-ignore
      || ecModel.getComponent('radar', radarSeries.get('radarIndex')) !== radarModel) {
        return;
      }
      var data = radarSeries.getData();
      (0,util.each)(indicatorAxes, function (indicatorAxis) {
        indicatorAxis.scale.unionExtentFromData(data, data.mapDimension(indicatorAxis.dim));
      });
    }, this);
    var splitNumber = radarModel.get('splitNumber');
    var dummyScale = new Interval["default"]();
    dummyScale.setExtent(0, splitNumber);
    dummyScale.setInterval(1);
    // Force all the axis fixing the maxSplitNumber.
    (0,util.each)(indicatorAxes, function (indicatorAxis, idx) {
      (0,axisAlignTicks.alignScaleTicks)(indicatorAxis.scale, indicatorAxis.model, dummyScale);
    });
  };
  Radar.prototype.convertToPixel = function (ecModel, finder, value) {
    console.warn('Not implemented.');
    return null;
  };
  Radar.prototype.convertFromPixel = function (ecModel, finder, pixel) {
    console.warn('Not implemented.');
    return null;
  };
  Radar.prototype.containPoint = function (point) {
    console.warn('Not implemented.');
    return false;
  };
  Radar.create = function (ecModel, api) {
    var radarList = [];
    ecModel.eachComponent('radar', function (radarModel) {
      var radar = new Radar(radarModel, ecModel, api);
      radarList.push(radar);
      radarModel.coordinateSystem = radar;
    });
    ecModel.eachSeriesByType('radar', function (radarSeries) {
      if (radarSeries.get('coordinateSystem') === 'radar') {
        // Inject coordinate system
        // @ts-ignore
        radarSeries.coordinateSystem = radarList[radarSeries.get('radarIndex') || 0];
      }
    });
    return radarList;
  };
  /**
   * Radar dimensions is based on the data
   */
  Radar.dimensions = [];
  return Radar;
}();
/* export default */ var radar_Radar = (Radar_Radar);

}),
56402: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var tslib__rspack_import_3 = __webpack_require__(2492);
/* import */ var zrender_lib_core_util_js__rspack_import_1 = __webpack_require__(9774);
/* import */ var _axisDefault_js__rspack_import_0 = __webpack_require__(96574);
/* import */ var _model_Model_js__rspack_import_4 = __webpack_require__(37931);
/* import */ var _axisModelCommonMixin_js__rspack_import_5 = __webpack_require__(97238);
/* import */ var _model_Component_js__rspack_import_2 = __webpack_require__(53075);
/* import */ var _visual_tokens_js__rspack_import_6 = __webpack_require__(87473);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/







var valueAxisDefault = _axisDefault_js__rspack_import_0["default"].value;
function defaultsShow(opt, show) {
  return zrender_lib_core_util_js__rspack_import_1.defaults({
    show: show
  }, opt);
}
var RadarModel = /** @class */function (_super) {
  (0,tslib__rspack_import_3.__extends)(RadarModel, _super);
  function RadarModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = RadarModel.type;
    return _this;
  }
  RadarModel.prototype.optionUpdated = function () {
    var boundaryGap = this.get('boundaryGap');
    var splitNumber = this.get('splitNumber');
    var scale = this.get('scale');
    var axisLine = this.get('axisLine');
    var axisTick = this.get('axisTick');
    // let axisType = this.get('axisType');
    var axisLabel = this.get('axisLabel');
    var nameTextStyle = this.get('axisName');
    var showName = this.get(['axisName', 'show']);
    var nameFormatter = this.get(['axisName', 'formatter']);
    var nameGap = this.get('axisNameGap');
    var triggerEvent = this.get('triggerEvent');
    var indicatorModels = zrender_lib_core_util_js__rspack_import_1.map(this.get('indicator') || [], function (indicatorOpt) {
      // PENDING
      if (indicatorOpt.max != null && indicatorOpt.max > 0 && !indicatorOpt.min) {
        indicatorOpt.min = 0;
      } else if (indicatorOpt.min != null && indicatorOpt.min < 0 && !indicatorOpt.max) {
        indicatorOpt.max = 0;
      }
      var iNameTextStyle = nameTextStyle;
      if (indicatorOpt.color != null) {
        iNameTextStyle = zrender_lib_core_util_js__rspack_import_1.defaults({
          color: indicatorOpt.color
        }, nameTextStyle);
      }
      // Use same configuration
      var innerIndicatorOpt = zrender_lib_core_util_js__rspack_import_1.merge(zrender_lib_core_util_js__rspack_import_1.clone(indicatorOpt), {
        boundaryGap: boundaryGap,
        splitNumber: splitNumber,
        scale: scale,
        axisLine: axisLine,
        axisTick: axisTick,
        // axisType: axisType,
        axisLabel: axisLabel,
        // Compatible with 2 and use text
        name: indicatorOpt.text,
        showName: showName,
        nameLocation: 'end',
        nameGap: nameGap,
        // min: 0,
        nameTextStyle: iNameTextStyle,
        triggerEvent: triggerEvent
      }, false);
      if (zrender_lib_core_util_js__rspack_import_1.isString(nameFormatter)) {
        var indName = innerIndicatorOpt.name;
        innerIndicatorOpt.name = nameFormatter.replace('{value}', indName != null ? indName : '');
      } else if (zrender_lib_core_util_js__rspack_import_1.isFunction(nameFormatter)) {
        innerIndicatorOpt.name = nameFormatter(innerIndicatorOpt.name, innerIndicatorOpt);
      }
      var model = new _model_Model_js__rspack_import_4["default"](innerIndicatorOpt, null, this.ecModel);
      zrender_lib_core_util_js__rspack_import_1.mixin(model, _axisModelCommonMixin_js__rspack_import_5.AxisModelCommonMixin.prototype);
      // For triggerEvent.
      model.mainType = 'radar';
      model.componentIndex = this.componentIndex;
      return model;
    }, this);
    this._indicatorModels = indicatorModels;
  };
  RadarModel.prototype.getIndicatorModels = function () {
    return this._indicatorModels;
  };
  RadarModel.type = 'radar';
  RadarModel.defaultOption = {
    // zlevel: 0,
    z: 0,
    center: ['50%', '50%'],
    radius: '50%',
    startAngle: 90,
    axisName: {
      show: true,
      color: _visual_tokens_js__rspack_import_6["default"].color.axisLabel
      // formatter: null
      // textStyle: {}
    },
    boundaryGap: [0, 0],
    splitNumber: 5,
    axisNameGap: 15,
    scale: false,
    // Polygon or circle
    shape: 'polygon',
    axisLine: zrender_lib_core_util_js__rspack_import_1.merge({
      lineStyle: {
        color: _visual_tokens_js__rspack_import_6["default"].color.neutral20
      }
    }, valueAxisDefault.axisLine),
    axisLabel: defaultsShow(valueAxisDefault.axisLabel, false),
    axisTick: defaultsShow(valueAxisDefault.axisTick, false),
    // axisType: 'value',
    splitLine: defaultsShow(valueAxisDefault.splitLine, true),
    splitArea: defaultsShow(valueAxisDefault.splitArea, true),
    // {text, min, max}
    indicator: []
  };
  return RadarModel;
}(_model_Component_js__rspack_import_2["default"]);
/* export default */ __webpack_exports__["default"] = (RadarModel);

}),
77646: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ScaleRawExtentInfo: function() { return ScaleRawExtentInfo; },
  ensureScaleRawExtentInfo: function() { return ensureScaleRawExtentInfo; },
  parseAxisModelMinMax: function() { return parseAxisModelMinMax; }
});
/* import */ var zrender_lib_core_util_js__rspack_import_0 = __webpack_require__(9774);
/* import */ var zrender_lib_contain_text_js__rspack_import_1 = __webpack_require__(26066);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


var ScaleRawExtentInfo = /** @class */function () {
  function ScaleRawExtentInfo(scale, model,
  // Usually: data extent from all series on this axis.
  originalExtent) {
    this._prepareParams(scale, model, originalExtent);
  }
  /**
   * Parameters depending on outside (like model, user callback)
   * are prepared and fixed here.
   */
  ScaleRawExtentInfo.prototype._prepareParams = function (scale, model,
  // Usually: data extent from all series on this axis.
  dataExtent) {
    if (dataExtent[1] < dataExtent[0]) {
      dataExtent = [NaN, NaN];
    }
    this._dataMin = dataExtent[0];
    this._dataMax = dataExtent[1];
    var isOrdinal = this._isOrdinal = scale.type === 'ordinal';
    this._needCrossZero = scale.type === 'interval' && model.getNeedCrossZero && model.getNeedCrossZero();
    var axisMinValue = model.get('min', true);
    if (axisMinValue == null) {
      axisMinValue = model.get('startValue', true);
    }
    var modelMinRaw = this._modelMinRaw = axisMinValue;
    if ((0,zrender_lib_core_util_js__rspack_import_0.isFunction)(modelMinRaw)) {
      // This callback always provides users the full data extent (before data is filtered).
      this._modelMinNum = parseAxisModelMinMax(scale, modelMinRaw({
        min: dataExtent[0],
        max: dataExtent[1]
      }));
    } else if (modelMinRaw !== 'dataMin') {
      this._modelMinNum = parseAxisModelMinMax(scale, modelMinRaw);
    }
    var modelMaxRaw = this._modelMaxRaw = model.get('max', true);
    if ((0,zrender_lib_core_util_js__rspack_import_0.isFunction)(modelMaxRaw)) {
      // This callback always provides users the full data extent (before data is filtered).
      this._modelMaxNum = parseAxisModelMinMax(scale, modelMaxRaw({
        min: dataExtent[0],
        max: dataExtent[1]
      }));
    } else if (modelMaxRaw !== 'dataMax') {
      this._modelMaxNum = parseAxisModelMinMax(scale, modelMaxRaw);
    }
    if (isOrdinal) {
      // FIXME: there is a flaw here: if there is no "block" data processor like `dataZoom`,
      // and progressive rendering is using, here the category result might just only contain
      // the processed chunk rather than the entire result.
      this._axisDataLen = model.getCategories().length;
    } else {
      var boundaryGap = model.get('boundaryGap');
      var boundaryGapArr = (0,zrender_lib_core_util_js__rspack_import_0.isArray)(boundaryGap) ? boundaryGap : [boundaryGap || 0, boundaryGap || 0];
      if (typeof boundaryGapArr[0] === 'boolean' || typeof boundaryGapArr[1] === 'boolean') {
        if (false) {}
        this._boundaryGapInner = [0, 0];
      } else {
        this._boundaryGapInner = [(0,zrender_lib_contain_text_js__rspack_import_1.parsePercent)(boundaryGapArr[0], 1), (0,zrender_lib_contain_text_js__rspack_import_1.parsePercent)(boundaryGapArr[1], 1)];
      }
    }
  };
  /**
   * Calculate extent by prepared parameters.
   * This method has no external dependency and can be called duplicatedly,
   * getting the same result.
   * If parameters changed, should call this method to recalcuate.
   */
  ScaleRawExtentInfo.prototype.calculate = function () {
    // Notice: When min/max is not set (that is, when there are null/undefined,
    // which is the most common case), these cases should be ensured:
    // (1) For 'ordinal', show all axis.data.
    // (2) For others:
    //      + `boundaryGap` is applied (if min/max set, boundaryGap is
    //      disabled).
    //      + If `needCrossZero`, min/max should be zero, otherwise, min/max should
    //      be the result that originalExtent enlarged by boundaryGap.
    // (3) If no data, it should be ensured that `scale.setBlank` is set.
    var isOrdinal = this._isOrdinal;
    var dataMin = this._dataMin;
    var dataMax = this._dataMax;
    var axisDataLen = this._axisDataLen;
    var boundaryGapInner = this._boundaryGapInner;
    var span = !isOrdinal ? dataMax - dataMin || Math.abs(dataMin) : null;
    // Currently if a `'value'` axis model min is specified as 'dataMin'/'dataMax',
    // `boundaryGap` will not be used. It's the different from specifying as `null`/`undefined`.
    var min = this._modelMinRaw === 'dataMin' ? dataMin : this._modelMinNum;
    var max = this._modelMaxRaw === 'dataMax' ? dataMax : this._modelMaxNum;
    // If `_modelMinNum`/`_modelMaxNum` is `null`/`undefined`, should not be fixed.
    var minFixed = min != null;
    var maxFixed = max != null;
    if (min == null) {
      min = isOrdinal ? axisDataLen ? 0 : NaN : dataMin - boundaryGapInner[0] * span;
    }
    if (max == null) {
      max = isOrdinal ? axisDataLen ? axisDataLen - 1 : NaN : dataMax + boundaryGapInner[1] * span;
    }
    (min == null || !isFinite(min)) && (min = NaN);
    (max == null || !isFinite(max)) && (max = NaN);
    var isBlank = (0,zrender_lib_core_util_js__rspack_import_0.eqNaN)(min) || (0,zrender_lib_core_util_js__rspack_import_0.eqNaN)(max) || isOrdinal && !axisDataLen;
    // If data extent modified, need to recalculated to ensure cross zero.
    if (this._needCrossZero) {
      // Axis is over zero and min is not set
      if (min > 0 && max > 0 && !minFixed) {
        min = 0;
        // minFixed = true;
      }
      // Axis is under zero and max is not set
      if (min < 0 && max < 0 && !maxFixed) {
        max = 0;
        // maxFixed = true;
      }
      // PENDING:
      // When `needCrossZero` and all data is positive/negative, should it be ensured
      // that the results processed by boundaryGap are positive/negative?
      // If so, here `minFixed`/`maxFixed` need to be set.
    }
    var determinedMin = this._determinedMin;
    var determinedMax = this._determinedMax;
    if (determinedMin != null) {
      min = determinedMin;
      minFixed = true;
    }
    if (determinedMax != null) {
      max = determinedMax;
      maxFixed = true;
    }
    // Ensure min/max be finite number or NaN here. (not to be null/undefined)
    // `NaN` means min/max axis is blank.
    return {
      min: min,
      max: max,
      minFixed: minFixed,
      maxFixed: maxFixed,
      isBlank: isBlank
    };
  };
  ScaleRawExtentInfo.prototype.modifyDataMinMax = function (minMaxName, val) {
    if (false) {}
    this[DATA_MIN_MAX_ATTR[minMaxName]] = val;
  };
  ScaleRawExtentInfo.prototype.setDeterminedMinMax = function (minMaxName, val) {
    var attr = DETERMINED_MIN_MAX_ATTR[minMaxName];
    if (false) {}
    this[attr] = val;
  };
  ScaleRawExtentInfo.prototype.freeze = function () {
    // @ts-ignore
    this.frozen = true;
  };
  return ScaleRawExtentInfo;
}();

var DETERMINED_MIN_MAX_ATTR = {
  min: '_determinedMin',
  max: '_determinedMax'
};
var DATA_MIN_MAX_ATTR = {
  min: '_dataMin',
  max: '_dataMax'
};
/**
 * Get scale min max and related info only depends on model settings.
 * This method can be called after coordinate system created.
 * For example, in data processing stage.
 *
 * Scale extent info probably be required multiple times during a workflow.
 * For example:
 * (1) `dataZoom` depends it to get the axis extent in "100%" state.
 * (2) `processor/extentCalculator` depends it to make sure whether axis extent is specified.
 * (3) `coordSys.update` use it to finally decide the scale extent.
 * But the callback of `min`/`max` should not be called multiple times.
 * The code below should not be implemented repeatedly either.
 * So we cache the result in the scale instance, which will be recreated at the beginning
 * of the workflow (because `scale` instance will be recreated each round of the workflow).
 */
function ensureScaleRawExtentInfo(scale, model,
// Usually: data extent from all series on this axis.
originalExtent) {
  // Do not permit to recreate.
  var rawExtentInfo = scale.rawExtentInfo;
  if (rawExtentInfo) {
    return rawExtentInfo;
  }
  rawExtentInfo = new ScaleRawExtentInfo(scale, model, originalExtent);
  // @ts-ignore
  scale.rawExtentInfo = rawExtentInfo;
  return rawExtentInfo;
}
function parseAxisModelMinMax(scale, minMax) {
  return minMax == null ? null : (0,zrender_lib_core_util_js__rspack_import_0.eqNaN)(minMax) ? NaN : scale.parse(minMax);
}

}),
85559: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var tslib__rspack_import_1 = __webpack_require__(2492);
/* import */ var _model_Component_js__rspack_import_0 = __webpack_require__(53075);
/* import */ var _axisModelCommonMixin_js__rspack_import_3 = __webpack_require__(97238);
/* import */ var zrender_lib_core_util_js__rspack_import_2 = __webpack_require__(9774);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/




var SingleAxisModel = /** @class */function (_super) {
  (0,tslib__rspack_import_1.__extends)(SingleAxisModel, _super);
  function SingleAxisModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = SingleAxisModel.type;
    return _this;
  }
  SingleAxisModel.prototype.getCoordSysModel = function () {
    return this;
  };
  SingleAxisModel.type = 'singleAxis';
  SingleAxisModel.layoutMode = 'box';
  SingleAxisModel.defaultOption = {
    left: '5%',
    top: '5%',
    right: '5%',
    bottom: '5%',
    type: 'value',
    position: 'bottom',
    orient: 'horizontal',
    axisLine: {
      show: true,
      lineStyle: {
        width: 1,
        type: 'solid'
      }
    },
    // Single coordinate system and single axis is the,
    // which is used as the parent tooltip model.
    // same model, so we set default tooltip show as true.
    tooltip: {
      show: true
    },
    axisTick: {
      show: true,
      length: 6,
      lineStyle: {
        width: 1
      }
    },
    axisLabel: {
      show: true,
      interval: 'auto'
    },
    splitLine: {
      show: true,
      lineStyle: {
        type: 'dashed',
        opacity: 0.2
      }
    },
    jitter: 0,
    jitterOverlap: true,
    jitterMargin: 2
  };
  return SingleAxisModel;
}(_model_Component_js__rspack_import_0["default"]);
(0,zrender_lib_core_util_js__rspack_import_2.mixin)(SingleAxisModel, _axisModelCommonMixin_js__rspack_import_3.AxisModelCommonMixin.prototype);
/* export default */ __webpack_exports__["default"] = (SingleAxisModel);

}),
81649: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return singlePrepareCustom; }
});
/* import */ var zrender_lib_core_util_js__rspack_import_0 = __webpack_require__(9774);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

function dataToCoordSize(dataSize, dataItem) {
  // dataItem is necessary in log axis.
  var axis = this.getAxis();
  var val = dataItem instanceof Array ? dataItem[0] : dataItem;
  var halfSize = (dataSize instanceof Array ? dataSize[0] : dataSize) / 2;
  return axis.type === 'category' ? axis.getBandWidth() : Math.abs(axis.dataToCoord(val - halfSize) - axis.dataToCoord(val + halfSize));
}
function singlePrepareCustom(coordSys) {
  var rect = coordSys.getRect();
  return {
    coordSys: {
      type: 'singleAxis',
      x: rect.x,
      y: rect.y,
      width: rect.width,
      height: rect.height
    },
    api: {
      coord: function (val) {
        // do not provide "out" param
        return coordSys.dataToPoint(val);
      },
      size: (0,zrender_lib_core_util_js__rspack_import_0.bind)(dataToCoordSize, coordSys)
    }
  };
}

}),
62332: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  layout: function() { return layout; }
});
/* import */ var zrender_lib_core_util_js__rspack_import_0 = __webpack_require__(9774);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

function layout(axisModel, opt) {
  opt = opt || {};
  var single = axisModel.coordinateSystem;
  var axis = axisModel.axis;
  var layout = {};
  var axisPosition = axis.position;
  var orient = axis.orient;
  var rect = single.getRect();
  var rectBound = [rect.x, rect.x + rect.width, rect.y, rect.y + rect.height];
  var positionMap = {
    horizontal: {
      top: rectBound[2],
      bottom: rectBound[3]
    },
    vertical: {
      left: rectBound[0],
      right: rectBound[1]
    }
  };
  layout.position = [orient === 'vertical' ? positionMap.vertical[axisPosition] : rectBound[0], orient === 'horizontal' ? positionMap.horizontal[axisPosition] : rectBound[3]];
  var r = {
    horizontal: 0,
    vertical: 1
  };
  layout.rotation = Math.PI / 2 * r[orient];
  var directionMap = {
    top: -1,
    bottom: 1,
    right: 1,
    left: -1
  };
  layout.labelDirection = layout.tickDirection = layout.nameDirection = directionMap[axisPosition];
  if (axisModel.get(['axisTick', 'inside'])) {
    layout.tickDirection = -layout.tickDirection;
  }
  if (zrender_lib_core_util_js__rspack_import_0.retrieve(opt.labelInside, axisModel.get(['axisLabel', 'inside']))) {
    layout.labelDirection = -layout.labelDirection;
  }
  var labelRotate = axisModel.get(['axisLabel', 'rotate']);
  layout.labelRotate = axisPosition === 'top' ? -labelRotate : labelRotate;
  layout.z2 = 1;
  return layout;
}

}),
3468: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ single_singleCreator; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(2492);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/Axis.js
var Axis = __webpack_require__(80855);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/single/SingleAxis.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


var SingleAxis_SingleAxis = /** @class */function (_super) {
  (0,tslib_es6.__extends)(SingleAxis, _super);
  function SingleAxis(dim, scale, coordExtent, axisType, position) {
    var _this = _super.call(this, dim, scale, coordExtent) || this;
    _this.type = axisType || 'value';
    _this.position = position || 'bottom';
    return _this;
  }
  /**
   * Judge the orient of the axis.
   */
  SingleAxis.prototype.isHorizontal = function () {
    var position = this.position;
    return position === 'top' || position === 'bottom';
  };
  SingleAxis.prototype.pointToData = function (point, clamp) {
    return this.coordinateSystem.pointToData(point)[0];
  };
  return SingleAxis;
}(Axis["default"]);
/* export default */ var single_SingleAxis = (SingleAxis_SingleAxis);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisHelper.js
var axisHelper = __webpack_require__(62159);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/layout.js
var layout = __webpack_require__(88485);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(9774);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/single/Single.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/
/**
 * Single coordinates system.
 */




var singleDimensions = ['single'];
/**
 * Create a single coordinates system.
 */
var Single_Single = /** @class */function () {
  function Single(axisModel, ecModel, api) {
    this.type = 'single';
    this.dimension = 'single';
    /**
     * Add it just for draw tooltip.
     */
    this.dimensions = singleDimensions;
    this.axisPointerEnabled = true;
    this.model = axisModel;
    this._init(axisModel, ecModel, api);
  }
  /**
   * Initialize single coordinate system.
   */
  Single.prototype._init = function (axisModel, ecModel, api) {
    var dim = this.dimension;
    var axis = new single_SingleAxis(dim, axisHelper.createScaleByModel(axisModel), [0, 0], axisModel.get('type'), axisModel.get('position'));
    var isCategory = axis.type === 'category';
    axis.onBand = isCategory && axisModel.get('boundaryGap');
    axis.inverse = axisModel.get('inverse');
    axis.orient = axisModel.get('orient');
    axisModel.axis = axis;
    axis.model = axisModel;
    axis.coordinateSystem = this;
    this._axis = axis;
  };
  /**
   * Update axis scale after data processed
   */
  Single.prototype.update = function (ecModel, api) {
    ecModel.eachSeries(function (seriesModel) {
      if (seriesModel.coordinateSystem === this) {
        var data_1 = seriesModel.getData();
        (0,util.each)(data_1.mapDimensionsAll(this.dimension), function (dim) {
          this._axis.scale.unionExtentFromData(data_1, dim);
        }, this);
        axisHelper.niceScaleExtent(this._axis.scale, this._axis.model);
      }
    }, this);
  };
  /**
   * Resize the single coordinate system.
   */
  Single.prototype.resize = function (axisModel, api) {
    var refContainer = (0,layout.createBoxLayoutReference)(axisModel, api).refContainer;
    this._rect = (0,layout.getLayoutRect)(axisModel.getBoxLayoutParams(), refContainer);
    this._adjustAxis();
  };
  Single.prototype.getRect = function () {
    return this._rect;
  };
  Single.prototype._adjustAxis = function () {
    var rect = this._rect;
    var axis = this._axis;
    var isHorizontal = axis.isHorizontal();
    var extent = isHorizontal ? [0, rect.width] : [0, rect.height];
    var idx = axis.inverse ? 1 : 0;
    axis.setExtent(extent[idx], extent[1 - idx]);
    this._updateAxisTransform(axis, isHorizontal ? rect.x : rect.y);
  };
  Single.prototype._updateAxisTransform = function (axis, coordBase) {
    var axisExtent = axis.getExtent();
    var extentSum = axisExtent[0] + axisExtent[1];
    var isHorizontal = axis.isHorizontal();
    axis.toGlobalCoord = isHorizontal ? function (coord) {
      return coord + coordBase;
    } : function (coord) {
      return extentSum - coord + coordBase;
    };
    axis.toLocalCoord = isHorizontal ? function (coord) {
      return coord - coordBase;
    } : function (coord) {
      return extentSum - coord + coordBase;
    };
  };
  /**
   * Get axis.
   */
  Single.prototype.getAxis = function () {
    return this._axis;
  };
  /**
   * Get axis, add it just for draw tooltip.
   */
  Single.prototype.getBaseAxis = function () {
    return this._axis;
  };
  Single.prototype.getAxes = function () {
    return [this._axis];
  };
  Single.prototype.getTooltipAxes = function () {
    return {
      baseAxes: [this.getAxis()],
      // Empty otherAxes
      otherAxes: []
    };
  };
  /**
   * If contain point.
   */
  Single.prototype.containPoint = function (point) {
    var rect = this.getRect();
    var axis = this.getAxis();
    var orient = axis.orient;
    if (orient === 'horizontal') {
      return axis.contain(axis.toLocalCoord(point[0])) && point[1] >= rect.y && point[1] <= rect.y + rect.height;
    } else {
      return axis.contain(axis.toLocalCoord(point[1])) && point[0] >= rect.y && point[0] <= rect.y + rect.height;
    }
  };
  Single.prototype.pointToData = function (point, reserved, out) {
    out = out || [];
    var axis = this.getAxis();
    out[0] = axis.coordToData(axis.toLocalCoord(point[axis.orient === 'horizontal' ? 0 : 1]));
    return out;
  };
  /**
   * Convert the series data to concrete point.
   * Can be [val] | val
   */
  Single.prototype.dataToPoint = function (val, reserved, out) {
    var axis = this.getAxis();
    var rect = this.getRect();
    out = out || [];
    var idx = axis.orient === 'horizontal' ? 0 : 1;
    if (val instanceof Array) {
      val = val[0];
    }
    out[idx] = axis.toGlobalCoord(axis.dataToCoord(+val));
    out[1 - idx] = idx === 0 ? rect.y + rect.height / 2 : rect.x + rect.width / 2;
    return out;
  };
  Single.prototype.convertToPixel = function (ecModel, finder, value) {
    var coordSys = getCoordSys(finder);
    return coordSys === this ? this.dataToPoint(value) : null;
  };
  Single.prototype.convertFromPixel = function (ecModel, finder, pixel) {
    var coordSys = getCoordSys(finder);
    return coordSys === this ? this.pointToData(pixel) : null;
  };
  return Single;
}();
function getCoordSys(finder) {
  var seriesModel = finder.seriesModel;
  var singleModel = finder.singleAxisModel;
  return singleModel && singleModel.coordinateSystem || seriesModel && seriesModel.coordinateSystem;
}
/* export default */ var single_Single = (Single_Single);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js
var model = __webpack_require__(67698);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/single/singleCreator.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/
/**
 * Single coordinate system creator.
 */


/**
 * Create single coordinate system and inject it into seriesModel.
 */
function create(ecModel, api) {
  var singles = [];
  ecModel.eachComponent('singleAxis', function (axisModel, idx) {
    var single = new single_Single(axisModel, ecModel, api);
    single.name = 'single_' + idx;
    single.resize(axisModel, api);
    axisModel.coordinateSystem = single;
    singles.push(single);
  });
  ecModel.eachSeries(function (seriesModel) {
    if (seriesModel.get('coordinateSystem') === 'singleAxis') {
      var singleAxisModel = seriesModel.getReferringComponents('singleAxis', model.SINGLE_REFERRING).models[0];
      seriesModel.coordinateSystem = singleAxisModel && singleAxisModel.coordinateSystem;
    }
  });
  return singles;
}
var singleCreator = {
  create: create,
  dimensions: singleDimensions
};
/* export default */ var single_singleCreator = (singleCreator);

}),

}]);