"use strict";
(self["webpackChunkvue_admin_better"] = self["webpackChunkvue_admin_better"] || []).push([["803"], {
59562: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56190);
/* ESM import */var _util_number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48843);
/* ESM import */var _axisTickLabelBuilder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38776);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
    return (0,_util_number_js__WEBPACK_IMPORTED_MODULE_0__.getPixelPrecision)(dataExtent || this.scale.getExtent(), this._extent);
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
    return (0,_util_number_js__WEBPACK_IMPORTED_MODULE_0__.linearMap)(data, NORMALIZED_EXTENT, extent, clamp);
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
    var t = (0,_util_number_js__WEBPACK_IMPORTED_MODULE_0__.linearMap)(coord, extent, NORMALIZED_EXTENT, clamp);
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
    var result = (0,_axisTickLabelBuilder_js__WEBPACK_IMPORTED_MODULE_1__.createAxisTicks)(this, tickModel, {
      breakTicks: opt.breakTicks,
      pruneByBreak: opt.pruneByBreak
    });
    var ticks = result.ticks;
    var ticksCoords = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.map)(ticks, function (tickVal) {
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
    var minorTicksCoords = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.map)(minorTicks, function (minorTicksGroup) {
      return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.map)(minorTicksGroup, function (minorTick) {
        return {
          coord: this.dataToCoord(minorTick),
          tickValue: minorTick
        };
      }, this);
    }, this);
    return minorTicksCoords;
  };
  Axis.prototype.getViewLabels = function (ctx) {
    ctx = ctx || (0,_axisTickLabelBuilder_js__WEBPACK_IMPORTED_MODULE_1__.createAxisLabelsComputingContext)(_axisTickLabelBuilder_js__WEBPACK_IMPORTED_MODULE_1__.AxisTickLabelComputingKind.determine);
    return (0,_axisTickLabelBuilder_js__WEBPACK_IMPORTED_MODULE_1__.createAxisLabels)(this, ctx).labels;
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
    ctx = ctx || (0,_axisTickLabelBuilder_js__WEBPACK_IMPORTED_MODULE_1__.createAxisLabelsComputingContext)(_axisTickLabelBuilder_js__WEBPACK_IMPORTED_MODULE_1__.AxisTickLabelComputingKind.determine);
    return (0,_axisTickLabelBuilder_js__WEBPACK_IMPORTED_MODULE_1__.calculateCategoryInterval)(this, ctx);
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
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.each)(ticksCoords, function (ticksItem) {
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
    a = (0,_util_number_js__WEBPACK_IMPORTED_MODULE_0__.round)(a);
    b = (0,_util_number_js__WEBPACK_IMPORTED_MODULE_0__.round)(b);
    return inverse ? a > b : a < b;
  }
}
/* ESM default export */ __webpack_exports__["default"] = (Axis);

}),
17775: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
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
96165: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12012);
/* ESM import */var zrender_lib_core_vector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25680);
/* ESM import */var zrender_lib_core_matrix_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24694);
/* ESM import */var zrender_lib_core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48670);
/* ESM import */var zrender_lib_core_Transformable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66059);
/* ESM import */var _util_number_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48843);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56190);
/* ESM import */var _component_helper_roamHelper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44394);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
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







var v2ApplyTransform = zrender_lib_core_vector_js__WEBPACK_IMPORTED_MODULE_0__.applyTransform;
var View = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(View, _super);
  function View(name, opt) {
    var _this = _super.call(this) || this;
    _this.type = 'view';
    _this.dimensions = ['x', 'y'];
    /**
     * Represents the transform brought by roam/zoom.
     * If `View['_viewRect']` applies roam transform,
     * we can get the final displayed rect.
     */
    _this._roamTransformable = new zrender_lib_core_Transformable_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    /**
     * Represents the transform from `View['_rect']` to `View['_viewRect']`.
     */
    _this._rawTransformable = new zrender_lib_core_Transformable_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    _this.name = name;
    _this._opt = opt;
    return _this;
  }
  View.prototype.setBoundingRect = function (x, y, width, height) {
    this._rect = new zrender_lib_core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_3__["default"](x, y, width, height);
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
    this._viewRect = new zrender_lib_core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_3__["default"](x, y, width, height);
  };
  /**
   * Transformed to particular position and size
   */
  View.prototype._transformTo = function (x, y, width, height) {
    var rect = this.getBoundingRect();
    var rawTransform = this._rawTransformable;
    rawTransform.transform = rect.calculateTransform(new zrender_lib_core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_3__["default"](x, y, width, height));
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
      centerCoord = [(0,_util_number_js__WEBPACK_IMPORTED_MODULE_4__.parsePercent)(centerCoord[0], opt.api.getWidth()), (0,_util_number_js__WEBPACK_IMPORTED_MODULE_4__.parsePercent)(centerCoord[1], opt.api.getWidth())];
    }
    this._centerOption = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_5__.clone)(centerCoord);
    this._updateCenterAndZoom();
  };
  View.prototype.setZoom = function (zoom) {
    this._zoom = (0,_component_helper_roamHelper_js__WEBPACK_IMPORTED_MODULE_6__.clampByZoomLimit)(zoom || 1, this.zoomLimit);
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
      this._center = [(0,_util_number_js__WEBPACK_IMPORTED_MODULE_4__.parsePercent)(centerOption[0], rect.width, rect.x), (0,_util_number_js__WEBPACK_IMPORTED_MODULE_4__.parsePercent)(centerOption[1], rect.height, rect.y)];
    }
    // Must update after view transform updated
    var rawTransformMatrix = this._rawTransformable.getLocalTransform();
    var roamTransform = this._roamTransformable;
    var defaultCenter = this.getDefaultCenter();
    var center = this.getCenter();
    var zoom = this.getZoom();
    center = zrender_lib_core_vector_js__WEBPACK_IMPORTED_MODULE_0__.applyTransform([], center, rawTransformMatrix);
    defaultCenter = zrender_lib_core_vector_js__WEBPACK_IMPORTED_MODULE_0__.applyTransform([], defaultCenter, rawTransformMatrix);
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
    zrender_lib_core_matrix_js__WEBPACK_IMPORTED_MODULE_7__.copy(this.transform || (this.transform = []), rawTransformable.transform || zrender_lib_core_matrix_js__WEBPACK_IMPORTED_MODULE_7__.create());
    this._rawTransform = rawTransformable.getLocalTransform();
    this.invTransform = this.invTransform || [];
    zrender_lib_core_matrix_js__WEBPACK_IMPORTED_MODULE_7__.invert(this.invTransform, this.transform);
    this.decomposeTransform();
  };
  View.prototype.getTransformInfo = function () {
    var rawTransformable = this._rawTransformable;
    var roamTransformable = this._roamTransformable;
    // Because roamTransformabel has `originX/originY` modified,
    // but the caller of `getTransformInfo` can not handle `originX/originY`,
    // so need to recalculate them.
    var dummyTransformable = new zrender_lib_core_Transformable_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
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
    return transform ? v2ApplyTransform(out, data, transform) : zrender_lib_core_vector_js__WEBPACK_IMPORTED_MODULE_0__.copy(out, data);
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
}(zrender_lib_core_Transformable_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
function getCoordSys(finder) {
  var seriesModel = finder.seriesModel;
  return seriesModel ? seriesModel.coordinateSystem : null; // e.g., graph.
}
/* ESM default export */ __webpack_exports__["default"] = (View);

}),
35604: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  alignScaleTicks: function() { return alignScaleTicks; }
});
/* ESM import */var _util_number_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48843);
/* ESM import */var _scale_Interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31588);
/* ESM import */var _axisHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5527);
/* ESM import */var _scale_helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63759);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  var intervalScaleProto = _scale_Interval_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype;
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
  var scaleExtent = (0,_axisHelper_js__WEBPACK_IMPORTED_MODULE_1__.getScaleExtent)(scale, axisModel);
  var rawExtent = scaleExtent.extent;
  var isMinFixed = scaleExtent.fixMin;
  var isMaxFixed = scaleExtent.fixMax;
  if (scale.type === 'log') {
    rawExtent = (0,_scale_helper_js__WEBPACK_IMPORTED_MODULE_2__.logTransform)(scale.base, rawExtent, true);
  }
  scale.setBreaksFromOption((0,_axisHelper_js__WEBPACK_IMPORTED_MODULE_1__.retrieveAxisBreaksOption)(axisModel));
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
      interval = (0,_scale_helper_js__WEBPACK_IMPORTED_MODULE_2__.increaseInterval)(interval);
      max = rawExtent[0] + interval * alignToSplitNumber;
    }
  } else if (isMaxFixed) {
    // User set max, expand extent on the other side
    min = rawExtent[1] - interval * alignToSplitNumber;
    while (min > rawExtent[0] && isFinite(min) && isFinite(rawExtent[0])) {
      interval = (0,_scale_helper_js__WEBPACK_IMPORTED_MODULE_2__.increaseInterval)(interval);
      min = rawExtent[1] - interval * alignToSplitNumber;
    }
  } else {
    var nicedSplitNumber = scale.getTicks().length - 1;
    if (nicedSplitNumber > alignToSplitNumber) {
      interval = (0,_scale_helper_js__WEBPACK_IMPORTED_MODULE_2__.increaseInterval)(interval);
    }
    var range = interval * alignToSplitNumber;
    max = Math.ceil(rawExtent[1] / interval) * interval;
    min = (0,_util_number_js__WEBPACK_IMPORTED_MODULE_3__.round)(max - range);
    // Not change the result that crossing zero.
    if (min < 0 && rawExtent[0] >= 0) {
      min = 0;
      max = (0,_util_number_js__WEBPACK_IMPORTED_MODULE_3__.round)(range);
    } else if (max > 0 && rawExtent[1] <= 0) {
      max = 0;
      min = -(0,_util_number_js__WEBPACK_IMPORTED_MODULE_3__.round)(range);
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
24833: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56190);
/* ESM import */var _visual_tokens_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23430);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
      color: _visual_tokens_js__WEBPACK_IMPORTED_MODULE_0__["default"].color.axisLine,
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
    color: _visual_tokens_js__WEBPACK_IMPORTED_MODULE_0__["default"].color.axisLabel,
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
      color: _visual_tokens_js__WEBPACK_IMPORTED_MODULE_0__["default"].color.axisSplitLine,
      width: 1,
      type: 'solid'
    }
  },
  splitArea: {
    show: false,
    areaStyle: {
      color: [_visual_tokens_js__WEBPACK_IMPORTED_MODULE_0__["default"].color.backgroundTint, _visual_tokens_js__WEBPACK_IMPORTED_MODULE_0__["default"].color.backgroundTransparent]
    }
  },
  breakArea: {
    show: true,
    itemStyle: {
      color: _visual_tokens_js__WEBPACK_IMPORTED_MODULE_0__["default"].color.neutral00,
      // Break border color should be darker than the splitLine
      // because it has opacity and should be more prominent
      borderColor: _visual_tokens_js__WEBPACK_IMPORTED_MODULE_0__["default"].color.border,
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
var categoryAxis = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.merge({
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
var valueAxis = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.merge({
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
      color: _visual_tokens_js__WEBPACK_IMPORTED_MODULE_0__["default"].color.axisMinorSplitLine,
      width: 1
    }
  }
}, defaultOption);
var timeAxis = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.merge({
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
var logAxis = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.defaults({
  logBase: 10
}, valueAxis);
/* ESM default export */ __webpack_exports__["default"] = ({
  category: categoryAxis,
  value: valueAxis,
  time: timeAxis,
  log: logAxis
});

}),
5527: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
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
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56190);
/* ESM import */var _scale_Ordinal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48975);
/* ESM import */var _scale_Interval_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31588);
/* ESM import */var _scale_Scale_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33993);
/* ESM import */var _layout_barGrid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95253);
/* ESM import */var _scale_Time_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41958);
/* ESM import */var _scale_Log_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52648);
/* ESM import */var _data_helper_dataStackHelper_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(45413);
/* ESM import */var _scaleRawExtentInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34920);
/* ESM import */var _util_time_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56899);
/* ESM import */var _scale_break_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57593);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
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
  var rawExtentResult = (0,_scaleRawExtentInfo_js__WEBPACK_IMPORTED_MODULE_0__.ensureScaleRawExtentInfo)(scale, model, scale.getExtent()).calculate();
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
    var barSeriesModels = (0,_layout_barGrid_js__WEBPACK_IMPORTED_MODULE_1__.prepareLayoutBarSeries)('bar', ecModel);
    var isBaseAxisAndHasBarSeries_1 = false;
    zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.each(barSeriesModels, function (seriesModel) {
      isBaseAxisAndHasBarSeries_1 = isBaseAxisAndHasBarSeries_1 || seriesModel.getBaseAxis() === model.axis;
    });
    if (isBaseAxisAndHasBarSeries_1) {
      // Calculate placement of bars on axis. TODO should be decoupled
      // with barLayout
      var barWidthAndOffset = (0,_layout_barGrid_js__WEBPACK_IMPORTED_MODULE_1__.makeColumnLayout)(barSeriesModels);
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
  var barsOnCurrentAxis = (0,_layout_barGrid_js__WEBPACK_IMPORTED_MODULE_1__.retrieveColumnLayout)(barWidthAndOffset, model.axis);
  if (barsOnCurrentAxis === undefined) {
    return {
      min: min,
      max: max
    };
  }
  var minOverflow = Infinity;
  zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.each(barsOnCurrentAxis, function (item) {
    minOverflow = Math.min(item.offset, minOverflow);
  });
  var maxOverflow = -Infinity;
  zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.each(barsOnCurrentAxis, function (item) {
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
  if (scale instanceof _scale_Log_js__WEBPACK_IMPORTED_MODULE_3__["default"]) {
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
        return new _scale_Ordinal_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
          ordinalMeta: model.getOrdinalMeta ? model.getOrdinalMeta() : model.getCategories(),
          extent: [Infinity, -Infinity]
        });
      case 'time':
        return new _scale_Time_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
          locale: model.ecModel.getLocaleModel(),
          useUTC: model.ecModel.get('useUTC')
        });
      default:
        // case 'value'/'interval', 'log', or others.
        return new (_scale_Scale_js__WEBPACK_IMPORTED_MODULE_6__["default"].getClass(axisType) || _scale_Interval_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
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
    var parsed_1 = (0,_util_time_js__WEBPACK_IMPORTED_MODULE_8__.parseTimeAxisLabelFormatter)(labelFormatter);
    return function (tick, idx) {
      return axis.scale.getFormattedLabel(tick, idx, parsed_1);
    };
  } else if (zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.isString(labelFormatter)) {
    return function (tick) {
      // For category axis, get raw value; for numeric axis,
      // get formatted label like '1,333,444'.
      var label = axis.scale.getLabel(tick);
      var text = labelFormatter.replace('{value}', label != null ? label : '');
      return text;
    };
  } else if (zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.isFunction(labelFormatter)) {
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
    var scaleBreakHelper_1 = (0,_scale_break_js__WEBPACK_IMPORTED_MODULE_9__.getScaleBreakHelper)();
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
  zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.each(data.mapDimensionsAll(axisDim), function (dataDim) {
    // For example, the extent of the original dimension
    // is [0.1, 0.5], the extent of the `stackResultDimension`
    // is [7, 9], the final extent should NOT include [0.1, 0.5],
    // because there is no graphic corresponding to [0.1, 0.5].
    // See the case in `test/area-stack.html` `main1`, where area line
    // stack needs `yAxis` not start from 0.
    dataDimMap[(0,_data_helper_dataStackHelper_js__WEBPACK_IMPORTED_MODULE_10__.getStackedDimension)(data, dataDim)] = true;
  });
  return zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.keys(dataDimMap);
}
function unionAxisExtentFromData(dataExtent, data, axisDim) {
  if (data) {
    zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.each(getDataDimensionsOnAxis(data, axisDim), function (dim) {
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
    if (!(0,_scale_break_js__WEBPACK_IMPORTED_MODULE_9__.getScaleBreakHelper)()) {
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
14373: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
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
52337: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ axisModelCreator; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(12012);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisDefault.js
var axisDefault = __webpack_require__(24833);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/layout.js
var layout = __webpack_require__(22265);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/OrdinalMeta.js
var OrdinalMeta = __webpack_require__(41862);
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
var util = __webpack_require__(56190);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/axisBreakHelper.js
var axis_axisBreakHelper = __webpack_require__(81230);
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
38776: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AxisTickLabelComputingKind: function() { return AxisTickLabelComputingKind; },
  calculateCategoryInterval: function() { return calculateCategoryInterval; },
  createAxisLabels: function() { return createAxisLabels; },
  createAxisLabelsComputingContext: function() { return createAxisLabelsComputingContext; },
  createAxisTicks: function() { return createAxisTicks; }
});
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56190);
/* ESM import */var zrender_lib_contain_text_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50122);
/* ESM import */var _util_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44244);
/* ESM import */var _axisHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5527);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/




var modelInner = (0,_util_model_js__WEBPACK_IMPORTED_MODULE_0__.makeInner)();
var axisInner = (0,_util_model_js__WEBPACK_IMPORTED_MODULE_0__.makeInner)();
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
  var nums = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.map(values, function (val) {
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
    var labelFormatter_1 = (0,_axisHelper_js__WEBPACK_IMPORTED_MODULE_2__.makeLabelFormatter)(axis);
    var extent_1 = axis.scale.getExtent();
    var tickNumbers = tickValuesToNumbers(axis, custom);
    var ticks = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.filter(tickNumbers, function (val) {
      return val >= extent_1[0] && val <= extent_1[1];
    });
    return {
      labels: zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.map(ticks, function (numval) {
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
      ticks: zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.filter(tickNumbers, function (val) {
        return val >= extent_2[0] && val <= extent_2[1];
      })
    };
  }
  // Only ordinal scale support tick interval
  return axis.type === 'category' ? makeCategoryTicks(axis, tickModel) : {
    ticks: zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.map(axis.scale.getTicks(opt), function (tick) {
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
  var optionLabelInterval = (0,_axisHelper_js__WEBPACK_IMPORTED_MODULE_2__.getOptionCategoryInterval)(labelModel);
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
  if (zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isFunction(optionLabelInterval)) {
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
  var optionTickInterval = (0,_axisHelper_js__WEBPACK_IMPORTED_MODULE_2__.getOptionCategoryInterval)(tickModel);
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
  if (zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isFunction(optionTickInterval)) {
    ticks = makeLabelsByCustomizedCategoryInterval(axis, optionTickInterval, true);
  }
  // Always use label interval by default despite label show. Consider this
  // scenario, Use multiple grid with the xAxis sync, and only one xAxis shows
  // labels. `splitLine` and `axisTick` should be consistent in this case.
  else if (optionTickInterval === 'auto') {
    var labelsResult = makeCategoryLabelsActually(axis, axis.getLabelModel(), createAxisLabelsComputingContext(AxisTickLabelComputingKind.determine));
    tickCategoryInterval = labelsResult.labelCategoryInterval;
    ticks = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.map(labelsResult.labels, function (labelItem) {
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
  var labelFormatter = (0,_axisHelper_js__WEBPACK_IMPORTED_MODULE_2__.makeLabelFormatter)(axis);
  return {
    labels: zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.map(ticks, function (tick, idx) {
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
  var labelFormatter = (0,_axisHelper_js__WEBPACK_IMPORTED_MODULE_2__.makeLabelFormatter)(axis);
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
    var rect = zrender_lib_contain_text_js__WEBPACK_IMPORTED_MODULE_3__.getBoundingRect(labelFormatter({
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
    ctx.out.noPxChangeTryDetermine.push(zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.bind(calculateCategoryIntervalTryDetermine, null, axis, interval, tickCount));
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
  var labelFormatter = (0,_axisHelper_js__WEBPACK_IMPORTED_MODULE_2__.makeLabelFormatter)(axis);
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
  var showAllLabel = (0,_axisHelper_js__WEBPACK_IMPORTED_MODULE_2__.shouldShowAllLabels)(axis);
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
  var labelFormatter = (0,_axisHelper_js__WEBPACK_IMPORTED_MODULE_2__.makeLabelFormatter)(axis);
  var result = [];
  zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.each(ordinalScale.getTicks(), function (tick) {
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
5708: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56190);
/* ESM import */var _util_layout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22265);
/* ESM import */var _util_number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48843);
/* ESM import */var zrender_lib_core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48670);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42562);
/* ESM import */var _core_CoordinateSystem_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67053);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
    date = _util_number_js__WEBPACK_IMPORTED_MODULE_0__.parseDate(date);
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
    zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.each([0, 1], function (idx) {
      if (cellSizeSpecified(cellSize, idx)) {
        layoutParams[whNames[idx]] = cellSize[idx] * cellNumbers[idx];
      }
    });
    var whGlobal = {
      width: api.getWidth(),
      height: api.getHeight()
    };
    var calendarRect = this._rect = _util_layout_js__WEBPACK_IMPORTED_MODULE_2__.getLayoutRect(layoutParams, whGlobal);
    zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.each([0, 1], function (idx) {
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
    zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isArray(data) && (data = data[0]);
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
    zrender_lib_core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_3__["default"].copy(contentRect, rect);
    (0,_util_graphic_js__WEBPACK_IMPORTED_MODULE_4__.expandOrShrinkRect)(contentRect, this._lineWidth / 2, true, true);
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
    if (zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isArray(range) && range.length === 1) {
      range = range[0];
    }
    if (!zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isArray(range)) {
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
      (0,_core_CoordinateSystem_js__WEBPACK_IMPORTED_MODULE_5__.injectCoordSysByOption)({
        targetModel: componentModel,
        coordSysType: 'calendar',
        coordSysProvider: _core_CoordinateSystem_js__WEBPACK_IMPORTED_MODULE_5__.simpleCoordSysInjectionProvider
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
/* ESM default export */ __webpack_exports__["default"] = (Calendar);

}),
74041: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56190);
/* ESM import */var _model_Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81757);
/* ESM import */var _util_layout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22265);
/* ESM import */var _visual_tokens_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23430);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(CalendarModel, _super);
  function CalendarModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = CalendarModel.type;
    return _this;
  }
  /**
   * @override
   */
  CalendarModel.prototype.init = function (option, parentModel, ecModel) {
    var inputPositionParams = (0,_util_layout_js__WEBPACK_IMPORTED_MODULE_2__.getLayoutParams)(option);
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
        color: _visual_tokens_js__WEBPACK_IMPORTED_MODULE_3__["default"].color.axisLine,
        width: 1,
        type: 'solid'
      }
    },
    // rect style  temporarily unused emphasis
    itemStyle: {
      color: _visual_tokens_js__WEBPACK_IMPORTED_MODULE_3__["default"].color.neutral00,
      borderWidth: 1,
      borderColor: _visual_tokens_js__WEBPACK_IMPORTED_MODULE_3__["default"].color.neutral10
    },
    // week text style
    dayLabel: {
      show: true,
      firstDay: 0,
      // start end
      position: 'start',
      margin: _visual_tokens_js__WEBPACK_IMPORTED_MODULE_3__["default"].size.s,
      color: _visual_tokens_js__WEBPACK_IMPORTED_MODULE_3__["default"].color.secondary
    },
    // month text style
    monthLabel: {
      show: true,
      // start end
      position: 'start',
      margin: _visual_tokens_js__WEBPACK_IMPORTED_MODULE_3__["default"].size.s,
      // center or left
      align: 'center',
      formatter: null,
      color: _visual_tokens_js__WEBPACK_IMPORTED_MODULE_3__["default"].color.secondary
    },
    // year text style
    yearLabel: {
      show: true,
      // top bottom left right
      position: null,
      margin: _visual_tokens_js__WEBPACK_IMPORTED_MODULE_3__["default"].size.xl,
      formatter: null,
      color: _visual_tokens_js__WEBPACK_IMPORTED_MODULE_3__["default"].color.quaternary,
      fontFamily: 'sans-serif',
      fontWeight: 'bolder',
      fontSize: 20
    }
  };
  return CalendarModel;
}(_model_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
function mergeAndNormalizeLayoutParams(target, raw) {
  // Normalize cellSize
  var cellSize = target.cellSize;
  var cellSizeArr;
  if (!zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__.isArray(cellSize)) {
    cellSizeArr = target.cellSize = [cellSize, cellSize];
  } else {
    cellSizeArr = cellSize;
  }
  if (cellSizeArr.length === 1) {
    cellSizeArr[1] = cellSizeArr[0];
  }
  var ignoreSize = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__.map([0, 1], function (hvIdx) {
    // If user have set `width` or both `left` and `right`, cellSizeArr
    // will be automatically set to 'auto', otherwise the default
    // setting of cellSizeArr will make `width` setting not work.
    if ((0,_util_layout_js__WEBPACK_IMPORTED_MODULE_2__.sizeCalculable)(raw, hvIdx)) {
      cellSizeArr[hvIdx] = 'auto';
    }
    return cellSizeArr[hvIdx] != null && cellSizeArr[hvIdx] !== 'auto';
  });
  (0,_util_layout_js__WEBPACK_IMPORTED_MODULE_2__.mergeLayoutParam)(target, raw, {
    type: 'box',
    ignoreSize: ignoreSize
  });
}
/* ESM default export */ __webpack_exports__["default"] = (CalendarModel);

}),
16902: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
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
92809: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var _Axis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59562);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(Axis2D, _super);
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
}(_Axis_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* ESM default export */ __webpack_exports__["default"] = (Axis2D);

}),
58531: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CartesianAxisModel: function() { return CartesianAxisModel; }
});
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56190);
/* ESM import */var _model_Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81757);
/* ESM import */var _axisModelCommonMixin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14373);
/* ESM import */var _util_model_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44244);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(CartesianAxisModel, _super);
  function CartesianAxisModel() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  CartesianAxisModel.prototype.getCoordSysModel = function () {
    return this.getReferringComponents('grid', _util_model_js__WEBPACK_IMPORTED_MODULE_2__.SINGLE_REFERRING).models[0];
  };
  CartesianAxisModel.type = 'cartesian2dAxis';
  return CartesianAxisModel;
}(_model_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.mixin(CartesianAxisModel, _axisModelCommonMixin_js__WEBPACK_IMPORTED_MODULE_4__.AxisModelCommonMixin);
/* ESM default export */ __webpack_exports__["default"] = (CartesianAxisModel);

}),
75938: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ cartesian_Grid; },
  registerLegacyGridContainLabelImpl: function() { return /* binding */ registerLegacyGridContainLabelImpl; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(56190);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/layout.js
var layout = __webpack_require__(22265);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisHelper.js
var axisHelper = __webpack_require__(5527);
// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(12012);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/BoundingRect.js
var BoundingRect = __webpack_require__(48670);
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
/* ESM default export */ var cartesian_Cartesian = (Cartesian_Cartesian);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/matrix.js
var matrix = __webpack_require__(24694);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/vector.js
var vector = __webpack_require__(25680);
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
/* ESM default export */ var cartesian_Cartesian2D = (Cartesian2D_Cartesian2D);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/cartesian/Axis2D.js
var Axis2D = __webpack_require__(92809);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js
var util_model = __webpack_require__(44244);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/cartesian/GridModel.js
var GridModel = __webpack_require__(24570);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/cartesian/cartesianAxisHelper.js
var cartesianAxisHelper = __webpack_require__(88700);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/scale/helper.js
var helper = __webpack_require__(63759);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisAlignTicks.js
var axisAlignTicks = __webpack_require__(35604);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js
var graphic = __webpack_require__(42562);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/AxisBuilder.js
var AxisBuilder = __webpack_require__(60727);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisTickLabelBuilder.js
var axisTickLabelBuilder = __webpack_require__(38776);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/core/CoordinateSystem.js
var CoordinateSystem = __webpack_require__(67053);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(48843);
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
/* ESM default export */ var cartesian_Grid = (Grid_Grid);

}),
24570: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  OUTER_BOUNDS_CLAMP_DEFAULT: function() { return OUTER_BOUNDS_CLAMP_DEFAULT; },
  OUTER_BOUNDS_DEFAULT: function() { return OUTER_BOUNDS_DEFAULT; }
});
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var _model_Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81757);
/* ESM import */var _util_layout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22265);
/* ESM import */var _visual_tokens_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23430);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(GridModel, _super);
  function GridModel() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  GridModel.prototype.mergeDefaultAndTheme = function (option, ecModel) {
    var outerBoundsCp = (0,_util_layout_js__WEBPACK_IMPORTED_MODULE_2__.getLayoutParams)(option.outerBounds);
    _super.prototype.mergeDefaultAndTheme.apply(this, arguments);
    if (outerBoundsCp && option.outerBounds) {
      (0,_util_layout_js__WEBPACK_IMPORTED_MODULE_2__.mergeLayoutParam)(option.outerBounds, outerBoundsCp);
    }
  };
  GridModel.prototype.mergeOption = function (newOption, ecModel) {
    _super.prototype.mergeOption.apply(this, arguments);
    if (this.option.outerBounds && newOption.outerBounds) {
      (0,_util_layout_js__WEBPACK_IMPORTED_MODULE_2__.mergeLayoutParam)(this.option.outerBounds, newOption.outerBounds);
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
    backgroundColor: _visual_tokens_js__WEBPACK_IMPORTED_MODULE_3__["default"].color.transparent,
    borderWidth: 1,
    borderColor: _visual_tokens_js__WEBPACK_IMPORTED_MODULE_3__["default"].color.neutral30
  };
  return GridModel;
}(_model_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* ESM default export */ __webpack_exports__["default"] = (GridModel);

}),
88700: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createCartesianAxisViewCommonPartBuilder: function() { return createCartesianAxisViewCommonPartBuilder; },
  findAxisModels: function() { return findAxisModels; },
  isCartesian2DDeclaredSeries: function() { return isCartesian2DDeclaredSeries; },
  isCartesian2DInjectedAsDataCoordSys: function() { return isCartesian2DInjectedAsDataCoordSys; },
  layout: function() { return layout; },
  updateCartesianAxisViewCommonPartBuilder: function() { return updateCartesianAxisViewCommonPartBuilder; }
});
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56190);
/* ESM import */var _util_model_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44244);
/* ESM import */var _component_axis_AxisBuilder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60727);
/* ESM import */var _scale_helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63759);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
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
  if (zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.retrieve(opt.labelInside, axisModel.get(['axisLabel', 'inside']))) {
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
  zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each(axisModelMap, function (v, key) {
    var axisType = key.replace(/Model$/, '');
    var axisModel = seriesModel.getReferringComponents(axisType, _util_model_js__WEBPACK_IMPORTED_MODULE_1__.SINGLE_REFERRING).models[0];
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
    if ((0,_scale_helper_js__WEBPACK_IMPORTED_MODULE_2__.isIntervalOrLogScale)(cartesians[i].getOtherAxis(axisModel.axis).scale)) {
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
  return new _component_axis_AxisBuilder_js__WEBPACK_IMPORTED_MODULE_3__["default"](axisModel, api, layoutResult, ctx);
}
function updateCartesianAxisViewCommonPartBuilder(axisBuilder, gridRect, axisModel) {
  var newRaw = layout(gridRect, axisModel);
  if (false) { var oldRaw_1 }
  axisBuilder.updateCfg(newRaw);
}

}),
71695: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  installLegacyGridContainLabel: function() { return installLegacyGridContainLabel; }
});
/* ESM import */var zrender_lib_core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48670);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56190);
/* ESM import */var _Grid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75938);
/* ESM import */var _scale_Ordinal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48975);
/* ESM import */var _axisHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5527);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
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
  (0,_Grid_js__WEBPACK_IMPORTED_MODULE_0__.registerLegacyGridContainLabelImpl)(legacyLayOutGridByContained);
}
/**
 * The input gridRect and axes will be modified.
 */
function legacyLayOutGridByContained(axesList, gridRect) {
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.each)(axesList, function (axis) {
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
  if (scale instanceof _scale_Ordinal_js__WEBPACK_IMPORTED_MODULE_2__["default"]) {
    tickCount = scale.count();
  } else {
    realNumberScaleTicks = scale.getTicks();
    tickCount = realNumberScaleTicks.length;
  }
  var axisLabelModel = axis.getLabelModel();
  var labelFormatter = (0,_axisHelper_js__WEBPACK_IMPORTED_MODULE_3__.makeLabelFormatter)(axis);
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
    var rotatedRect = new zrender_lib_core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_4__["default"](textRect.x, textRect.y, afterWidth, afterHeight);
    return rotatedRect;
  }
}

}),
26484: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return cartesianPrepareCustom; }
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

function dataToCoordSize(dataSize, dataItem) {
  // dataItem is necessary in log axis.
  dataItem = dataItem || [0, 0];
  return zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.map(['x', 'y'], function (dim, dimIdx) {
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
      size: zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.bind(dataToCoordSize, coordSys)
    }
  };
}

}),

}]);