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
(self["rspackChunkvue_admin_better"] = self["rspackChunkvue_admin_better"] || []).push([[4684], {
70808: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var zrender_lib_core_util_js__rspack_import_2 = __webpack_require__(75275);
/* import */ var _util_number_js__rspack_import_0 = __webpack_require__(46823);
/* import */ var _axisTickLabelBuilder_js__rspack_import_1 = __webpack_require__(49876);
/* import */ var _scale_helper_js__rspack_import_4 = __webpack_require__(45620);
/* import */ var _axisBand_js__rspack_import_5 = __webpack_require__(37371);
/* import */ var _axisHelper_js__rspack_import_3 = __webpack_require__(72460);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
 * [NOTICE]: Some caches is stored on the axis instance (e.g., `axisTickLabelBuilder.ts`, `scaleRawExtentInfo.ts`),
 *  which is based on this lifetime.
 */
var Axis = /** @class */function () {
  function Axis(dim, scale, extent) {
    // NOTICE: Must ensure `true` is only available on 'category' axis.
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
    var scale = this.scale;
    data = scale.normalize(scale.parse(data));
    return (0,_util_number_js__rspack_import_0.linearMap)(data, NORMALIZED_EXTENT, makeExtentWithBands(this), clamp);
  };
  /**
   * Convert coord to data. Data is the rank if it has an ordinal scale
   */
  Axis.prototype.coordToData = function (coord, clamp) {
    var t = (0,_util_number_js__rspack_import_0.linearMap)(coord, makeExtentWithBands(this), NORMALIZED_EXTENT, clamp);
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
   */
  Axis.prototype.getTicksCoords = function (opt) {
    opt = opt || {};
    var tickModel = opt.tickModel || this.getTickModel();
    var result = (0,_axisTickLabelBuilder_js__rspack_import_1.createAxisTicks)(this, tickModel, {
      breakTicks: opt.breakTicks,
      pruneByBreak: opt.pruneByBreak
    });
    var preTicksCoords = (0,zrender_lib_core_util_js__rspack_import_2.map)(result.ticks, function (tick) {
      return {
        coord: this.dataToCoord((0,_axisHelper_js__rspack_import_3.getTickValueOutermost)(this.scale, tick)),
        tick: tick
      };
    }, this);
    var alignWithLabel = tickModel.get('alignWithLabel');
    var onBandModified = fixOnBandTicksCoords(this, preTicksCoords, alignWithLabel);
    return (0,zrender_lib_core_util_js__rspack_import_2.map)(preTicksCoords, function (item) {
      return {
        coord: item.coord,
        tickValue: item.tick.value,
        onBand: onBandModified
      };
    });
  };
  Axis.prototype.getMinorTicksCoords = function () {
    if ((0,_scale_helper_js__rspack_import_4.isOrdinalScale)(this.scale)) {
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
   * @deprecated Use `calcBandWidth` instead.
   */
  Axis.prototype.getBandWidth = function () {
    return (0,_axisBand_js__rspack_import_5.calcBandWidth)(this, {
      min: 1
    }).w;
    // NOTICE: Do not add logic here. Implement everthing in `calcBandWidth`.
  };
  /**
   * Only be called in category axis.
   * Can be overridden, consider other axes like in 3D.
   * @return Auto interval for category axis tick and label
   */
  Axis.prototype.calculateCategoryInterval = function (ctx) {
    ctx = ctx || (0,_axisTickLabelBuilder_js__rspack_import_1.createAxisLabelsComputingContext)(_axisTickLabelBuilder_js__rspack_import_1.AxisTickLabelComputingKind.determine);
    return (0,_axisTickLabelBuilder_js__rspack_import_1.calculateCategoryInterval)(this, ctx);
  };
  return Axis;
}();
function makeExtentWithBands(axis) {
  var extent = axis.getExtent();
  if (axis.onBand) {
    var size = extent[1] - extent[0];
    var margin = size / axis.scale.count() / 2;
    extent[0] += margin;
    extent[1] -= margin;
  }
  return extent;
}
/**
 * `axis.onBand: true` (i.e., `boundaryGap: true` in ec option) and `CategoryTickLabelSplitIntervalOption`
 *  affects `axisTick`/`axisLabel`/`splitLine`/`splitArea`.
 *
 * Currently, the visual result is best only when `axisTick/splitLine/splitArea.interval === 0`.
 * The typical case is:
 *      |---|---|---|     <= This is the input `preTicksCoords`
 *      0   1   2   3        (having been added half band width by `makeExtentWithBands`).
 *    |---|---|---|---|  <= This is the result.
 *      0   1   2   3
 *
 * When `interval > 0`, the visual result may be odd for `axisLabel` and `customValues`, but acceptable
 * for `axisTick` `splitLine` and `splitArea`:
 *      |---~---|---~---~---|---|    <= This is the input `preTicksCoords`; `interval: 2; min: 1; max: 7`.
 *      ₁   ₂   3   ₄   ₅   6   ₇       Subscript numbers (`₀`, `₁`, `₃`) indicate axis labels are hidden
 *                                      (by default settings) due to off-interval.
 *                                      A tilde (`~`) indicates a tick ignored due to off-interval.
 *    |---~---|---~---~---|---~---|  <= This is the result.
 *      ₁   ₂   3   ₄   ₅   6   ₇
 *
 * NOTE:
 *  - A inappropriate result may cause misleading (e.g., split 2 bars of a single data item when there
 *    are two bar series).
 *  - See also #11176 #11186 .
 * PENDING:
 *  - The show/hide of `axisLabel` may be optimized when `interval > 1 and be an even number`,
 *    but that may introduce complex and still not perfect in odd number, and may not necessary if
 *    `axisTick: {show: false}` and `axisLabel` can auto hidden when overlapping.
 */
function fixOnBandTicksCoords(axis, preTicksCoords, alignWithLabel) {
  var ticksLen = preTicksCoords.length;
  if (!axis.onBand || alignWithLabel || !ticksLen) {
    return false;
  }
  // Assume:
  //  - If `onBand: true`, `bandWidth` has been calculated by `ticksLen + 1` rather than `ticksLen`.
  //  - If `interval > 0`, some ticks may be ignored, but `ticksCoords` has always included boundary
  //    ticks of axis extent, and be `offInterval: true` if off-interval.
  //  - No need to consider breaks, since axis break is not supported in category axis.
  var bandWidth = (0,_axisBand_js__rspack_import_5.calcBandWidth)(axis).w;
  if (!bandWidth) {
    return false;
  }
  (0,zrender_lib_core_util_js__rspack_import_2.each)(preTicksCoords, function (ticksItem) {
    ticksItem.coord -= bandWidth / 2;
  });
  var dataExtent = axis.scale.getExtent();
  var oldLast = preTicksCoords[ticksLen - 1];
  if (oldLast.tick.offInterval) {
    preTicksCoords.pop();
  }
  preTicksCoords.push({
    coord: oldLast.coord + bandWidth,
    tick: {
      value: dataExtent[1] + 1
    }
  });
  return true;
}
/* export default */ __webpack_exports__["default"] = (Axis);

}),
25170: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
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
function isCoordinateSystemType(coordSys, type) {
  return coordSys.type === type;
}
function isGeoLikeCoordSys(coordSys) {
  var dimensions = coordSys.dimensions;
  // Not use coordSys.type === 'geo' because coordSys maybe extended
  return dimensions[0] === 'lng' && dimensions[1] === 'lat' && !!coordSys.getViewRect;
}
__webpack_require__.d(__webpack_exports__, {
}, {
  isCoordinateSystemType: isCoordinateSystemType,
  isGeoLikeCoordSys: isGeoLikeCoordSys
});


}),
69796: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var tslib__rspack_import_1 = __webpack_require__(2492);
/* import */ var zrender_lib_core_BoundingRect_js__rspack_import_4 = __webpack_require__(93689);
/* import */ var zrender_lib_core_Transformable_js__rspack_import_0 = __webpack_require__(9259);
/* import */ var _util_number_js__rspack_import_8 = __webpack_require__(46823);
/* import */ var zrender_lib_core_util_js__rspack_import_9 = __webpack_require__(75275);
/* import */ var _core_ExtensionAPI_js__rspack_import_7 = __webpack_require__(50680);
/* import */ var _util_graphic_js__rspack_import_5 = __webpack_require__(90088);
/* import */ var _util_graphic_js__rspack_import_6 = __webpack_require__(13983);
/* import */ var zrender_lib_core_matrix_js__rspack_import_2 = __webpack_require__(51938);
/* import */ var zrender_lib_core_vector_js__rspack_import_3 = __webpack_require__(69884);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/









/**
 * @tutorial [VIEW_COORD_SYS_ANIMATION]
 *
 *  Some VIEW_COORD_SYS may need to support roaming animation, which may be required when the original
 *  inputs (such as `center/zoom/left/top/right/bottomwidth/height/etc.`) are changed via `setOption`.
 *  Roaming animation requires strict visual alignment between VIEW_COORD_SYS itself (consider "geo map")
 *  and its content (e.g., scatter series).
 *  A logically correct implementation is probably applying animation to VIEW_COORD_SYS's inputs and
 *  calculate VIEW_COORD_SYS's transformation and lay out its dependent series per frame via
 *  `dispatchAction`-ish pattern. But this approach require more mechanism to be introduced and careful
 *  refactoring.
 *  Instead, we currently still follow the conventional implementation - create animation separately on
 *  each element (typically via `graphic.updateProps`) . See VIEW_COORD_SYS_ANIMATION_PROPS_CONSTRAINT.
 *
 *  [VIEW_COORD_SYS_ANIMATION_PROPS_CONSTRAINT]:
 *    The animation should only interpolate `x/y/scaleX/scaleY`, thereby ensuring visual alignment, even
 *    though `MapDraw` applies animations only on a "VIEW_COORD_SYS_TRANS_ROAM" but scatter series applies
 *    animation on a "VIEW_COORD_SYS_TRANS_OVERALL".
 *    But this constraint must always be respected by all relevant components and series.
 *
 *  [VIEW_COORD_SYS_ANIMATION_INTERRUPTION]:
 *    The animation should be able to be interrupted, such as when users roam it by mouse or touch.
 *    When interrupted, `center` and `zoom` must be synchronized back to the VIEW_COORD_SYS and host models
 *    (e.g., geo components or map series). Otherwise, a next `setOption` can cause unexpected result due to
 *    the outdated `center` and `zoom`.
 *    But see FIXME_VIEW_COORD_SYS_SYNC_BACK for some existing bugs.
 *
 *  [VIEW_COORD_SYS_UPDATE_FLOW]:
 *    To avoid bidirectional flow, we consider the original inputs (center/zoom/dataRect/viewRect/etc.) as
 *    the single source of truth, and always calculate transformations based on that.
 *    - Roaming interactions ('pan'/'zoom') can trigger an update to the original inputs via
 *      `dispatchAction({type: 'xxxRoam', ...})`.
 *    - Roaming animation can synchronize back to the original inputs when interrupted.
 *      See `syncBackEl`: It is zrender elements that are assigned with VIEW_COORD_SYS_TRANSFORMATION,
 *      and may be modified outside, typically by animation.
 */
/**
 * @tutorial [VIEW_COORD_SYS_TRANSFORMATION]
 *
 *  @tutorial [VIEW_COORD_SYS_TRANS_RAW]
 *    It is the transformation from `ViewInner['dataRect']` to `ViewInner['viewRect']`.
 *    - ViewInner['dataRect']:
 *      A rect in a source space (or say, data space).
 *      The unit is defined by the source. For example,
 *        - for geo source, the unit defined as lat/lng,
 *        - for SVG source, the unit is the same as the width/height defined in SVG.
 *        - for series.graph/series.tree/series.sankey, the unit defined as px directly.
 *    - ViewInner['viewRect']:
 *      A rect in the canvas pixel space.
 *      For example, it can be ec option left/right/top/bottom/width/height of a component or series.
 *    NOTICE:
 *      - ViewInner['dataRect'] and ViewInner['viewRect'] affect the behavior when centerOption contains
 *        absolute values. See VIEW_COORD_SYS_CENTER_ZOOM_DEFINITION .
 *
 *  @tutorial [VIEW_COORD_SYS_TRANS_ROAM]
 *    It is built with respect to `RoamOptionMixin['center']` and `RoamOptionMixin['zoom']`.
 *    [VIEW_COORD_SYS_CENTER_ZOOM_DEFINITION]:
 *      {pxSpace} <-roamTrans- {viewRectSpace} <-rawTrans- {dataRectSpace} <-- ...
 *                     |                                         |
 *                 zoomOption                                centerOption
 *      `RoamOptionMixin['center']` is a user specified point on the space of `ViewInner['dataRect']`,
 *      which will be located to the center of `ViewInner['viewRect']`.
 *      It can also be a percent value (e.g. '50%'), based on ViewInner['dataRect'].width/height` (since v6).
 *      Under this definition, users can use '0%' to map the top-left of `ViewInner['dataRect']`
 *      to the center of `ViewInner['viewRect']`.
 *      NOTICE:
 *        - `RoamOptionMixin['center']` is in a linear space regardless of `GeoCommonOptionMixin['projection']`
 *        - Absolute values in centerOption may hardly have a rigorous meaningful definition if the layout
 *          is auto-calculated, since users are unlikely to known the exact value of the bounding rect.
 *          And it is affected by the settings of ViewInner['dataRect'] and ViewInner['viewRect'].
 *          Therefore, percent centerOption is preferred.
 *      Use cases:
 *        geo and map series (`MapDraw`) use this transformation for roamming, since the source
 *        has been converted with respect to VIEW_COORD_SYS_TRANS_RAW.
 *
 *  @tutorial [VIEW_COORD_SYS_TRANS_OVERALL]
 *    This is the result of
 *      `matrix_left_multiply(VIEW_COORD_SYS_TRANS_ROAM, VIEW_COORD_SYS_TRANS_RAW)`.
 *    Use case:
 *      sankey/tree/graph series use this transformation for roamming.
 *
 *  @tutorial [VIEW_COORD_SYS_TRANSFORMATION_FORMULA]
 *    [Basic]:
 *      {pxSpace} <-roamTrans- {viewRectSpace} <-rawTrans- {dataRectSpace} <-- ...
 *      pxPoint = roamTrans * rawTrans * dataPoint
 *      overallTrans = roamTrans * rawTrans
 *    [e.g., geo case]:
 *             pxPoint = roamTrans * (rawTrans * (projection * dataPoint))
 *      Hence: pxPoint = group_syncBackType_ROAM * (rawTrans * (projection * dataPoint))
 *      Hence: pxPoint = group_syncBackType_ROAM * rawTrans_projection_precalculated_point
 *    [e.g., graph series case]:
 *             pxPoint = (roamTrans * rawTrans) * upper_els
 *      Hence: pxPoint = group_syncBackType_OVERALL * upper_els
 *      (NOTE: upper_els can have their own transformations)
 *
 * @see viewCoordSysCopyTrans for fetching transformations.
 */
var VIEW_COORD_SYS_TRANS_RAW = 0;
var VIEW_COORD_SYS_TRANS_ROAM = 1;
var VIEW_COORD_SYS_TRANS_OVERALL = 2;
function inner(viewCoordSys) {
  return viewCoordSys;
}
var VIEW_COORD_SYS_TYPE = 'view';
/**
 * [VIEW_COORD_SYS]
 *
 * @final [NOTICE] Inheritance of this class is not recommended. Use composition instead.
 */
var View = /** @class */function (_super) {
  (0,tslib__rspack_import_1.__extends)(View, _super);
  function View(invertY, legacyCenterBase, legacyGeo) {
    var _this = _super.call(this) || this;
    _this.type = VIEW_COORD_SYS_TYPE;
    _this.dimensions = ['x', 'y'];
    var viewInner = inner(_this);
    viewInner.invertY = invertY;
    viewInner.lgCt = legacyCenterBase;
    viewInner.lgGeo = legacyGeo;
    var trans = viewInner.trans = [];
    trans[VIEW_COORD_SYS_TRANS_RAW] = (0,zrender_lib_core_Transformable_js__rspack_import_0.transformableCreate)();
    trans[VIEW_COORD_SYS_TRANS_ROAM] = (0,zrender_lib_core_Transformable_js__rspack_import_0.transformableCreate)();
    trans[VIEW_COORD_SYS_TRANS_OVERALL] = (0,zrender_lib_core_Transformable_js__rspack_import_0.transformableCreate)();
    viewInner.mtRaw = (0,zrender_lib_core_matrix_js__rspack_import_2.create)();
    viewInner.mtRawInv = (0,zrender_lib_core_matrix_js__rspack_import_2.create)();
    viewInner.mtOverall = (0,zrender_lib_core_matrix_js__rspack_import_2.create)();
    viewInner.mtOverallInv = (0,zrender_lib_core_matrix_js__rspack_import_2.create)();
    viewInner.zoom = 1;
    return _this;
  }
  /**
   * @implements CoordinateSystem['getBoundingRect']
   * @see VIEW_COORD_SYS_TRANS_RAW
   *
   * This is a rect in data space.
   * For historicall reason, the name is `getBoundingRect` - preserve it for backward compatibility.
   */
  View.prototype.getBoundingRect = function () {
    return viewCoordSysCopyBoundingRect(null, this);
  };
  /**
   * @implements CoordinateSystem['getViewRect']
   * @see VIEW_COORD_SYS_TRANS_RAW
   */
  View.prototype.getViewRect = function () {
    return viewCoordSysCopyViewRect(null, this);
  };
  /**
   * @implements CoordinateSystem['getRoamTransform']
   */
  View.prototype.getRoamTransform = function () {
    return (0,zrender_lib_core_Transformable_js__rspack_import_0.transformableGetLocalTransform)(inner(this).trans[VIEW_COORD_SYS_TRANS_ROAM]);
  };
  View.prototype.dataToPoint = function (data, noRoam, out) {
    var transform = noRoam ? inner(this).mtRaw : inner(this).mtOverall;
    out = out || [];
    return transform ? (0,zrender_lib_core_vector_js__rspack_import_3.applyTransform)(out, data, transform) : (0,zrender_lib_core_vector_js__rspack_import_3.copy)(out, data);
  };
  View.prototype.pointToData = function (point, reserved, out) {
    out = out || [];
    var invTransform = inner(this).mtOverallInv;
    return invTransform ? (0,zrender_lib_core_vector_js__rspack_import_3.applyTransform)(out, point, invTransform) : (0,zrender_lib_core_vector_js__rspack_import_3.copy)(out, point);
  };
  View.prototype.convertToPixel = function (ecModel, finder, value) {
    var coordSys = getCoordSys(finder);
    return coordSys === this ? coordSys.dataToPoint(value) : null;
  };
  View.prototype.convertFromPixel = function (ecModel, finder, pixel) {
    var coordSys = getCoordSys(finder);
    return coordSys === this ? coordSys.pointToData(pixel) : null;
  };
  View.prototype.containPoint = function (point) {
    var viewInner = inner(this);
    (0,zrender_lib_core_BoundingRect_js__rspack_import_4.boundingRectCopy)(tmpPixelRectForContain, viewInner.dataRect);
    (0,zrender_lib_core_BoundingRect_js__rspack_import_4.boundingRectApplyTransform)(tmpPixelRectForContain, tmpPixelRectForContain, viewInner.mtOverall);
    return (0,zrender_lib_core_BoundingRect_js__rspack_import_4.boundingRectContain)(tmpPixelRectForContain, point[0], point[1]);
  };
  View.dimensions = ['x', 'y'];
  return View;
}(zrender_lib_core_Transformable_js__rspack_import_0["default"]);
var tmpPixelRectForContain = (0,zrender_lib_core_BoundingRect_js__rspack_import_4.boundingRectCreate)();
function viewCoordSysCopyOverallMatrix(out, viewCoordSys) {
  return (0,zrender_lib_core_matrix_js__rspack_import_2.copy)(out || [], inner(viewCoordSys).mtOverall);
}
function viewCoordSysGetZoomOption(viewCoordSys) {
  return inner(viewCoordSys).zoom;
}
function viewCoordSysCopyBoundingRect(out, viewCoordSys) {
  return (0,zrender_lib_core_BoundingRect_js__rspack_import_4.boundingRectCopy)(out || (0,zrender_lib_core_BoundingRect_js__rspack_import_4.boundingRectCreate)(), inner(viewCoordSys).dataRect);
}
function viewCoordSysCopyViewRect(out, viewCoordSys) {
  return (0,zrender_lib_core_BoundingRect_js__rspack_import_4.boundingRectCopy)(out || (0,zrender_lib_core_BoundingRect_js__rspack_import_4.boundingRectCreate)(), inner(viewCoordSys).viewRect);
}
function viewCoordSysCopyTrans(out, viewCoordSys, transKind
// @return The input `out` or create an object.
) {
  return (0,zrender_lib_core_Transformable_js__rspack_import_0.copyTransform)(out || (0,zrender_lib_core_Transformable_js__rspack_import_0.transformableCreate)(), inner(viewCoordSys).trans[transKind]);
}
function viewCoordSysIsInputReady(viewInner) {
  return !!(viewInner.dataRect && viewInner.viewRect);
  // NOTE: Other parameters has default values. Only parameters
  // above are required to be input.
}
function calcOverallTransFromSyncBackEl(out, viewInner, syncBackEl, syncBackType) {
  if (syncBackType === VIEW_COORD_SYS_TRANS_ROAM) {
    calcOverallTrans(out, viewInner.trans[VIEW_COORD_SYS_TRANS_RAW], syncBackEl);
  } else {
    (0,zrender_lib_core_Transformable_js__rspack_import_0.copyTransform)(out, syncBackEl);
  }
}
function calcRoamTransFromOverallTrans(out, viewInner, overallTrans) {
  // Convert overallTrans to roamTrans. If update animation is applied to overallTrans,
  // we assume that rawTrans is changed instantly, and roamTrans takes that animation.
  // Formula:
  //  overallTrans = roamTrans * rawTrans
  //  overallTrans * invert(rawTrans) = roamTrans
  (0,zrender_lib_core_Transformable_js__rspack_import_0.transformableGetLocalTransform)(overallTrans, tmpMtRTO);
  (0,zrender_lib_core_matrix_js__rspack_import_2.mul)(tmpMtRTO, tmpMtRTO, viewInner.mtRawInv);
  (0,_util_graphic_js__rspack_import_5.decomposeTransform)(out, tmpMtRTO);
}
var tmpMtRTO = (0,zrender_lib_core_matrix_js__rspack_import_2.create)();
/**
 * [NOTICE]
 *  The definition of this center has always been irrelevant to some other series center like
 *  'series-pie.center' - this center is a point in the space of `ViewInner['dataRect'].x/y`,
 *  rather than canvas viewport, and the unit is not necessarily pixel (e.g., in geo case).
 */
function viewCoordSysSetRoamOptionFromModel(viewCoordSys, hostModel) {
  var viewInner = inner(viewCoordSys);
  viewInner.centerOption = hostModel.getShallow('center');
  var zoomLimit = viewInner.zoomLimit = hostModel.getShallow('scaleLimit');
  var zoomOption = hostModel.getShallow('zoom');
  viewInner.zoom = clampByZoomLimit(zoomOption || 1, zoomLimit) || 1;
  if (viewCoordSysIsInputReady(viewInner)) {
    viewCoordSysUpdateTransform(viewInner);
  }
}
/**
 * @see ViewInner['dataRect']
 */
function viewCoordSysSetBoundingRect(viewCoordSys, x, y, width, height) {
  var viewInner = inner(viewCoordSys);
  viewInner.dataRect = new zrender_lib_core_BoundingRect_js__rspack_import_4["default"](x, y, width, height);
  if (viewCoordSysIsInputReady(viewInner)) {
    viewCoordSysUpdateTransform(viewInner);
  }
}
/**
 * @see ViewInner['viewRect']
 */
function viewCoordSysSetViewRect(viewCoordSys, x, y, width, height) {
  var viewInner = inner(viewCoordSys);
  viewInner.viewRect = new zrender_lib_core_BoundingRect_js__rspack_import_4["default"](x, y, width, height);
  if (viewCoordSysIsInputReady(viewInner)) {
    viewCoordSysUpdateTransform(viewInner);
  }
}
function viewCoordSysUpdateTransform(viewInner) {
  // The order matters.
  viewCoordSysUpdateRawTrans(viewInner);
  viewCoordSysUpdateRoamTrans(viewInner);
  viewCoordSysUpdateOverallTrans(viewInner);
}
function viewCoordSysUpdateRawTrans(viewInner) {
  var dataRect = viewInner.dataRect;
  var viewRect = viewInner.viewRect;
  var rawTrans = viewInner.trans[VIEW_COORD_SYS_TRANS_RAW];
  var invertY = viewInner.invertY;
  if (invertY) {
    dataRect = (0,zrender_lib_core_BoundingRect_js__rspack_import_4.boundingRectCopy)(tmpRectURT, dataRect);
    dataRect.y = -dataRect.y - dataRect.height;
  }
  (0,zrender_lib_core_BoundingRect_js__rspack_import_4.boundingRectCalculateTransform)(tmpMtURT, dataRect, viewRect);
  (0,_util_graphic_js__rspack_import_5.decomposeTransform)(rawTrans, tmpMtURT);
  if (invertY) {
    rawTrans.scaleY = -rawTrans.scaleY;
  }
  var mtRaw = (0,zrender_lib_core_Transformable_js__rspack_import_0.transformableGetLocalTransform)(rawTrans, viewInner.mtRaw);
  (0,zrender_lib_core_matrix_js__rspack_import_2.invert)(viewInner.mtRawInv, mtRaw);
}
var tmpMtURT = (0,zrender_lib_core_matrix_js__rspack_import_2.create)();
var tmpRectURT = (0,zrender_lib_core_BoundingRect_js__rspack_import_4.boundingRectCreate)();
/**
 * NOTICE: It depends on `viewCoordSysUpdateRawTrans`.
 */
function viewCoordSysUpdateRoamTrans(viewInner) {
  var viewRectCenter = viewCoordSysGetViewRectCenter(viewInner);
  var roamViewCenter = parseCenterOption(tmpCenterURT, viewInner, viewInner.centerOption) ? (0,zrender_lib_core_vector_js__rspack_import_3.applyTransform)(tmpCenterURT, tmpCenterURT, viewInner.mtRaw) : viewRectCenter;
  var zoom = viewInner.zoom;
  var roamTrans = viewInner.trans[VIEW_COORD_SYS_TRANS_ROAM];
  roamTrans.x = viewRectCenter[0] - zoom * roamViewCenter[0];
  roamTrans.y = viewRectCenter[1] - zoom * roamViewCenter[1];
  roamTrans.scaleX = roamTrans.scaleY = zoom;
  // [VIEW_COORD_SYS_APPLY_ROAM_CENTER_AND_ZOOM]
  // Ordinarily, the definition is:
  //  roamTrans.originX = roamViewCenter[0];
  //  roamTrans.originY = roamViewCenter[1];
  //  roamTrans.x = viewRectCenter[0] - roamViewCenter[0];
  //  roamTrans.y = viewRectCenter[1] - roamViewCenter[1];
  //  roamTrans.scaleX = roamTrans.scaleY = zoom;
  // But `el.originX`/`originY` should not be set.
  // (see VIEW_COORD_SYS_ANIMATION_PROPS_CONSTRAINT for the reason),
  // so we use the above formula instead.
}
var tmpCenterURT = [];
/**
 * NOTICE: It depends on `viewCoordSysUpdateRoamTrans` and `viewCoordSysUpdateRawTrans`
 */
function viewCoordSysUpdateOverallTrans(viewInner) {
  var trans = viewInner.trans;
  var roamTrans = trans[VIEW_COORD_SYS_TRANS_ROAM];
  var rawTrans = trans[VIEW_COORD_SYS_TRANS_RAW];
  var overallTrans = trans[VIEW_COORD_SYS_TRANS_OVERALL];
  calcOverallTrans(overallTrans, rawTrans, roamTrans);
  var mtOverall = (0,zrender_lib_core_Transformable_js__rspack_import_0.transformableGetLocalTransform)(overallTrans, viewInner.mtOverall);
  var mtOverallInv = (0,zrender_lib_core_matrix_js__rspack_import_2.invert)(viewInner.mtOverallInv, mtOverall);
  legacyCopyOverallTrans(viewInner, overallTrans, mtOverall, mtOverallInv);
  legacyCopyOverallTrans(viewInner.lgGeo, overallTrans, mtOverall, mtOverallInv);
}
/**
 * [VIEW_COORD_SYS_TRANS_OVERALL_BACKWARD_COMPATIBILITY]
 *   VIEW_COORD_SYS_TRANS_OVERALL transformable has long been View or Geo instance itself.
 *   We keep backward compatibility, since some users may have visited it directly (e.g.
 *   for drawing a computed bounding rect).
 */
function legacyCopyOverallTrans(target, overallTrans, mtOverall, mtOverallInv) {
  if (target) {
    (0,zrender_lib_core_Transformable_js__rspack_import_0.copyTransform)(target, overallTrans);
    (0,zrender_lib_core_matrix_js__rspack_import_2.copy)(target.transform || (target.transform = []), mtOverall);
    (0,zrender_lib_core_matrix_js__rspack_import_2.copy)(target.invTransform || (target.invTransform = []), mtOverallInv);
  }
}
function calcOverallTrans(out, rawTrans, roamTrans) {
  (0,zrender_lib_core_Transformable_js__rspack_import_0.transformableGetLocalTransform)(rawTrans, tmpMtCOT1);
  (0,zrender_lib_core_Transformable_js__rspack_import_0.transformableGetLocalTransform)(roamTrans, tmpMtCOT2);
  (0,zrender_lib_core_matrix_js__rspack_import_2.mul)(tmpMtCOT2, tmpMtCOT2, tmpMtCOT1);
  (0,_util_graphic_js__rspack_import_5.decomposeTransform)(out, tmpMtCOT2);
}
var tmpMtCOT1 = (0,zrender_lib_core_matrix_js__rspack_import_2.create)();
var tmpMtCOT2 = (0,zrender_lib_core_matrix_js__rspack_import_2.create)();
function getCoordSys(finder) {
  var seriesModel = finder.seriesModel;
  return seriesModel ? seriesModel.coordinateSystem : null; // e.g., graph.
}
function viewCoordSysGetViewRectCenter(viewInner) {
  var viewRect = viewInner.viewRect;
  tmpViewRectCenter[0] = viewRect.x + viewRect.width / 2;
  tmpViewRectCenter[1] = viewRect.y + viewRect.height / 2;
  return tmpViewRectCenter;
}
var tmpViewRectCenter = [];
function isViewCoordSys(coordSys) {
  return coordSys && coordSys.type === 'view';
}
/**
 * NOTICE:
 *  - `syncBackEl` should be in the pixel space without any other transformation
 *    in its accesters, otherwise the roaming may incorrect.
 *  - `syncBackEl` can be a `Group`, having its own descendants and transformation.
 *    But in this case, `dataToPoint` can only reach the space of `syncBackEl` itself.
 */
function applyViewCoordSysTransToElement(syncBackEl, syncBackType, viewCoordSys,
// If NullUndefined, no animation.
// Typically, there should be no animation in the first render and in `__updateOnOwnRoam`.
animatableModel) {
  var viewInner = inner(viewCoordSys);
  viewInner.syncBackEl = syncBackEl;
  viewInner.syncBackType = syncBackType;
  if (!animatableModel) {
    viewCoordSysCopyTrans(syncBackEl, viewCoordSys, syncBackType);
    syncBackEl.dirty();
  } else {
    (0,_util_graphic_js__rspack_import_6.updateProps)(syncBackEl, viewCoordSysCopyTrans(null, viewCoordSys, syncBackType), animatableModel);
  }
}
/**
 * FIXME: [FIXME_VIEW_COORD_SYS_SYNC_BACK]
 *  Currently the "sync back" is only performed on roam action. But these cases are not
 *  covered:
 *  1. Consider both center change and series data adding is requested via `setOption`
 *    and animation is not finished, the new added series symbols should lay out based
 *    on the "intermediate state" rather than the "final state" of the VIEW_COORD_SYS,
 *    otherwise, visual artifacts can arise.
 *  2. See the case of FIXME_SYMBOL_CLIP_CONSIDERING_COORD_SYS_ALIGNMENT_DURING_ANIMATION .
 */
function viewCoordSysSyncBack(viewCoordSys, hostModel, otherModelsToSync, payload) {
  var viewInner = inner(viewCoordSys);
  var syncBackEl = viewInner.syncBackEl;
  if (syncBackEl) {
    if (false) {}
    // @see VIEW_COORD_SYS_ANIMATION_INTERRUPTION
    syncBackEl.stopAnimation();
    // syncBackEl may have been changed regardless of animation,
    // therefore, need to sync back.
    calcOverallTransFromSyncBackEl(tmpTransSB1, viewInner, syncBackEl, viewInner.syncBackType);
  } else {
    (0,zrender_lib_core_Transformable_js__rspack_import_0.copyTransform)(tmpTransSB1, viewInner.trans[VIEW_COORD_SYS_TRANS_OVERALL]);
  }
  // Sync back to model.
  calcRoamTransFromOverallTrans(tmpTransSB2, viewInner, tmpTransSB1);
  payload ? applyRoamPayloadToOverallTrans(tmpTransSB1, tmpTransSB2, viewInner, payload) : (0,zrender_lib_core_Transformable_js__rspack_import_0.copyTransform)(tmpTransSB1, tmpTransSB2);
  calcRoamTransFromOverallTrans(tmpTransSB1, viewInner, tmpTransSB1);
  syncBackToRoamOptionFromRoamTrans(viewInner, hostModel, otherModelsToSync, tmpTransSB1);
}
var tmpTransSB1 = (0,zrender_lib_core_Transformable_js__rspack_import_0.transformableCreate)();
var tmpTransSB2 = (0,zrender_lib_core_Transformable_js__rspack_import_0.transformableCreate)();
/**
 * Invert to `center` and `zoom` of VIEW_COORD_SYS and host models based on
 *  - `syncBackEl` or VIEW_COORD_SYS_TRANS_OVERALL
 *  - Delta in `payload`.
 *
 * Should be only called in action handlers.
 *
 * @see RoamHostView['__updateOnOwnRoam']
 */
function ownRoamModelCoordSysUpdateInAction(payload, hostModel,
// This is only used for MAP_SERIES_GROUP, where the change need to sync to all series,
// otherwise when legend filter some series and the other series take the responsibility
// to draw map, or roam then legend restored, the result will be incorrect.
otherModelsToSync) {
  // NOTE: VIEW_COORD_SYS instances are depended on by this action handler.
  // Under the current design, actions should not be triggered before `setOption`
  // being called, therefore coord sys instances always exist.
  var viewCoordSys = getOwnRoamViewCoordSys(hostModel);
  if (viewCoordSys) {
    // Sync back to model.
    viewCoordSysSyncBack(viewCoordSys, hostModel, otherModelsToSync, payload);
    // Recalculate from model.
    viewCoordSysSetRoamOptionFromModel(viewCoordSys, hostModel);
  }
}
function getOwnRoamViewCoordSys(hostModel) {
  return hostModel.__ownRoamView ? hostModel.__ownRoamView() : null;
}
function ownRoamViewUpdateDirectlyInAction(payload, componentOrSeries, ecModel, api) {
  // Tricky: disable animation in `updateProps` of `graphic.ts`.
  ecModel.setUpdatePayload((0,_util_graphic_js__rspack_import_5.payloadDisableAnimation)(payload));
  var componentOrSeriesView = (0,_core_ExtensionAPI_js__rspack_import_7.getViewOfComponentOrSeries)(api, componentOrSeries);
  if (componentOrSeriesView && componentOrSeriesView.__updateOnOwnRoam) {
    componentOrSeriesView.__updateOnOwnRoam(payload, componentOrSeries, api);
  }
}
function applyRoamPayloadToOverallTrans(targetOverallTrans, roamTrans, viewInner, payload) {
  // NOTE: payload.dx/dy should always applied to pixel space, i.e., "overallTrans".
  if (payload.dx != null && payload.dy != null) {
    targetOverallTrans.x += payload.dx;
    targetOverallTrans.y += payload.dy;
  }
  var deltaZoom = payload.zoom;
  if (deltaZoom != null) {
    // Although `zoomOption` is defined on roamTrans
    var oldZoom = getZoomFromRoamTrans(roamTrans);
    var newZoom = clampByZoomLimit(oldZoom * deltaZoom, viewInner.zoomLimit);
    var deltaZoom2 = newZoom / oldZoom;
    // Keep the mouse center when scaling.
    targetOverallTrans.x -= (payload.originX - targetOverallTrans.x) * (deltaZoom2 - 1);
    targetOverallTrans.y -= (payload.originY - targetOverallTrans.y) * (deltaZoom2 - 1);
    // Although `zoomOption` is defined on roamTrans,
    // deltaZoom can be applied to overallTrans directly.
    targetOverallTrans.scaleX *= deltaZoom2;
    targetOverallTrans.scaleY *= deltaZoom2;
  }
}
function getZoomFromRoamTrans(trans) {
  if (false) {}
  return trans.scaleX;
}
function parseCenterOption(
// `out` is a center in `dataRect` space.
out, viewInner, centerOption
// @return Whether a valid center is obtained.
) {
  if (false) {}
  var dataRect = viewInner.dataRect;
  if (!centerOption) {
    return false;
  }
  // #16904 introduced percentage string here, such as '33%'. But it was based on canvas
  // width/height, which is not reasonable - the unit may incorrect, and it is unpredictable if
  // the `ViewInner['dataRect']` is not calculated based on the current canvas rect. Therefore the percentage
  // value is changed to based on `ViewInner['dataRect'].width/height` since v6. Under this definition, users
  // can use '0%' to map the top-left of `ViewInner['dataRect']` to the center of `ViewInner['viewRect']`.
  var lgCt = viewInner.lgCt;
  if (lgCt) {
    (0,zrender_lib_core_vector_js__rspack_import_3.set)(out, (0,_util_number_js__rspack_import_8.parsePercent)(centerOption[0], lgCt.w), (0,_util_number_js__rspack_import_8.parsePercent)(centerOption[1], lgCt.h));
  } else if (dataRect) {
    (0,zrender_lib_core_vector_js__rspack_import_3.set)(out, (0,_util_number_js__rspack_import_8.parsePercent)(centerOption[0], dataRect.width, dataRect.x), (0,_util_number_js__rspack_import_8.parsePercent)(centerOption[1], dataRect.height, dataRect.y));
  }
  return true;
}
/**
 * An inverse operation to `parseCenterOption`.
 * Mainly for percentage center option.
 */
function invertBackToCenterOption(viewInner, center) {
  var lastCenterOption = viewInner.centerOption;
  var dataRect = viewInner.dataRect;
  if (false) {}
  return !lastCenterOption || viewInner.lgCt ? center.slice() : [invertToPercentPerCenterDim(0, center, lastCenterOption, dataRect), invertToPercentPerCenterDim(1, center, lastCenterOption, dataRect)];
}
function invertToPercentPerCenterDim(dimIdx, center, lastCenterOption, dataRect) {
  return lastCenterOption && dataRect && dataRect[_util_graphic_js__rspack_import_5.WH[dimIdx]] && (0,_util_number_js__rspack_import_8.isPositionSizeOptionPercent)(lastCenterOption[dimIdx]) ? (center[dimIdx] - dataRect[_util_graphic_js__rspack_import_5.XY[dimIdx]]) / dataRect[_util_graphic_js__rspack_import_5.WH[dimIdx]] * 100 + '%' : center[dimIdx];
}
function useLegacyViewCoordSysCenterBase(ecModel, api) {
  return api && ecModel && ecModel.getShallow('legacyViewCoordSysCenterBase') ? {
    w: api.getWidth(),
    h: api.getHeight()
  } : null;
}
/**
 * @see VIEW_COORD_SYS_ANIMATION_INTERRUPTION
 */
function syncBackToRoamOptionFromRoamTrans(viewInner, hostModel, otherModelsToSync, roamTrans) {
  // This is the inverse operation of `viewCoordSysSetRoamOptionFromModel`.
  var viewRectCenter = viewCoordSysGetViewRectCenter(viewInner);
  var zoom = getZoomFromRoamTrans(roamTrans);
  var notZoomNearZero = (0,_util_number_js__rspack_import_8.mathAbs)(zoom) > 1e-6;
  tmpCenterITR[0] = notZoomNearZero ? (viewRectCenter[0] - roamTrans.x) / zoom : viewRectCenter[0]; // Unlikely to occur.
  tmpCenterITR[1] = notZoomNearZero ? (viewRectCenter[1] - roamTrans.y) / zoom : viewRectCenter[1]; // Unlikely to occur.
  (0,zrender_lib_core_vector_js__rspack_import_3.applyTransform)(tmpCenterITR, tmpCenterITR, viewInner.mtRawInv);
  var centerOption = invertBackToCenterOption(viewInner, tmpCenterITR);
  syncBackRoamOptionToRoamHostModel(hostModel, centerOption, zoom);
  (0,zrender_lib_core_util_js__rspack_import_9.each)(otherModelsToSync, function (otherModel) {
    if (otherModel !== hostModel) {
      syncBackRoamOptionToRoamHostModel(otherModel, centerOption.slice(), zoom);
    }
  });
}
var tmpCenterITR = [];
/**
 * Models should be updated, otherwise consequent `setOption()` can cause outdated `center`
 * and `zoom` to be used.
 */
function syncBackRoamOptionToRoamHostModel(hostModel, center, zoom) {
  var option = hostModel.option;
  option.center = center;
  option.zoom = zoom;
}
function clampByZoomLimit(zoom, zoomLimit) {
  if (zoomLimit) {
    var zoomMin = zoomLimit.min || 0;
    var zoomMax = zoomLimit.max || Infinity;
    zoom = Math.max(Math.min(zoomMax, zoom), zoomMin);
  }
  return zoom;
}
function calcCompensationScaleToPreserveNodeSize(viewCoordSys, model) {
  var nodeScaleRatio = model.getShallow('nodeScaleRatio', true) || 1;
  var viewInner = inner(viewCoordSys);
  // Scale node when zoom changes
  return ((viewInner.zoom - 1) * nodeScaleRatio + 1) / (viewInner.trans[VIEW_COORD_SYS_TRANS_OVERALL].scaleX || 1);
}
/* export default */ __webpack_exports__["default"] = (View);
__webpack_require__.d(__webpack_exports__, {
}, {
  VIEW_COORD_SYS_TRANS_OVERALL: VIEW_COORD_SYS_TRANS_OVERALL,
  VIEW_COORD_SYS_TRANS_RAW: VIEW_COORD_SYS_TRANS_RAW,
  VIEW_COORD_SYS_TRANS_ROAM: VIEW_COORD_SYS_TRANS_ROAM,
  VIEW_COORD_SYS_TYPE: VIEW_COORD_SYS_TYPE,
  applyViewCoordSysTransToElement: applyViewCoordSysTransToElement,
  calcCompensationScaleToPreserveNodeSize: calcCompensationScaleToPreserveNodeSize,
  clampByZoomLimit: clampByZoomLimit,
  getOwnRoamViewCoordSys: getOwnRoamViewCoordSys,
  isViewCoordSys: isViewCoordSys,
  ownRoamModelCoordSysUpdateInAction: ownRoamModelCoordSysUpdateInAction,
  ownRoamViewUpdateDirectlyInAction: ownRoamViewUpdateDirectlyInAction,
  useLegacyViewCoordSysCenterBase: useLegacyViewCoordSysCenterBase,
  viewCoordSysCopyBoundingRect: viewCoordSysCopyBoundingRect,
  viewCoordSysCopyOverallMatrix: viewCoordSysCopyOverallMatrix,
  viewCoordSysCopyTrans: viewCoordSysCopyTrans,
  viewCoordSysCopyViewRect: viewCoordSysCopyViewRect,
  viewCoordSysGetZoomOption: viewCoordSysGetZoomOption,
  viewCoordSysSetBoundingRect: viewCoordSysSetBoundingRect,
  viewCoordSysSetRoamOptionFromModel: viewCoordSysSetRoamOptionFromModel,
  viewCoordSysSetViewRect: viewCoordSysSetViewRect
});


}),
75813: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var _util_number_js__rspack_import_2 = __webpack_require__(46823);
/* import */ var _axisHelper_js__rspack_import_3 = __webpack_require__(72460);
/* import */ var _scale_helper_js__rspack_import_1 = __webpack_require__(45620);
/* import */ var _scaleRawExtentInfo_js__rspack_import_0 = __webpack_require__(94385);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/









/**
 * NOTE: See the summary of the process of extent determination in the comment of `scaleMapper.setExtent`.
 *
 * @see SCALE_EXTENT_CONSTRUCTION for the full processing flow.
 */
function scaleCalcAlign(targetAxis, alignToScale) {
  var targetScale = targetAxis.scale;
  var targetAxisModel = targetAxis.model;
  if (false) {}
  var targetExtentInfo = (0,_scaleRawExtentInfo_js__rspack_import_0.adoptScaleRawExtentInfoAndPrepare)(targetScale, targetAxisModel, targetAxisModel.ecModel, targetAxis, null);
  // FIXME:
  //  (1) Axis inverse is not considered yet.
  //  (2) `SCALE_EXTENT_KIND_MAPPING` is not considered yet.
  var isTargetLogScale = (0,_scale_helper_js__rspack_import_1.isLogScale)(targetScale);
  var alignToScaleLinear = (0,_scale_helper_js__rspack_import_1.isLogScale)(alignToScale) ? alignToScale.intervalStub : alignToScale;
  var targetIntervalStub = isTargetLogScale ? targetScale.intervalStub : targetScale;
  var targetLogScaleBase = targetScale.base;
  var alignToTicks = alignToScaleLinear.getTicks();
  var alignToExpNiceTicks = alignToScaleLinear.getTicks({
    expandToNicedExtent: true
  });
  var alignToSegCount = alignToTicks.length - 1;
  if (false) {}
  // The Current strategy: Find a proper interval and an extent for the target scale to derive ticks
  // matching exactly to ticks of `alignTo` scale.
  // Adjust min, max based on the extent of alignTo. When min or max is set in alignTo scale
  var t0; // diff ratio on min not-nice segment. 0 <= t0 < 1
  var t1; // diff ratio on max not-nice segment. 0 <= t1 < 1
  var alignToNiceSegCount; // >= 1
  // Consider ticks of `alignTo`, only these cases below may occur:
  if (alignToSegCount === 1) {
    // `alignToTicks` is like:
    //  |--|
    // In this case, we make the corresponding 2 target ticks "nice".
    t0 = t1 = 0;
    alignToNiceSegCount = 1;
  } else if (alignToSegCount === 2) {
    // `alignToTicks` is like:
    //  |-|-----| or
    //  |-----|-| or
    //  |-----|-----|
    // Notices that nice ticks do not necessarily exist in this case.
    // In this case, we choose the larger segment as the "nice segment" and
    // the corresponding target ticks are made "nice".
    var interval0 = (0,_util_number_js__rspack_import_2.mathAbs)(alignToTicks[0].value - alignToTicks[1].value);
    var interval1 = (0,_util_number_js__rspack_import_2.mathAbs)(alignToTicks[1].value - alignToTicks[2].value);
    t0 = t1 = 0;
    if (interval0 === interval1) {
      alignToNiceSegCount = 2;
    } else {
      alignToNiceSegCount = 1;
      if (interval0 < interval1) {
        t0 = interval0 / interval1;
      } else {
        t1 = interval1 / interval0;
      }
    }
  } else {
    // alignToSegCount >= 3
    // `alignToTicks` is like:
    //  |-|-----|-----|-| or
    //  |-----|-----|-| or
    //  |-|-----|-----| or ...
    // At least one nice segment is present, and not-nice segments are only present on
    // the start and/or the end.
    // In this case, ticks corresponding to nice segments are made "nice".
    var alignToInterval = alignToScaleLinear.getConfig().interval;
    t0 = (1 - (alignToTicks[0].value - alignToExpNiceTicks[0].value) / alignToInterval) % 1;
    t1 = (1 - (alignToExpNiceTicks[alignToSegCount].value - alignToTicks[alignToSegCount].value) / alignToInterval) % 1;
    alignToNiceSegCount = alignToSegCount - (t0 ? 1 : 0) - (t1 ? 1 : 0);
  }
  if (false) {}
  // NOTE:
  //  Consider a case:
  //    dataZoom controls all Y axes;
  //    dataZoom end is 90% (maxFixed: true, dataZoomFixMinMax[0]: true);
  //    but dataZoom start is 0% (minFixed: false, dataZoomFixMinMax[1]: false);
  //  In this case,
  //    - `Interval#calcNiceTicks` only uses `targetExtentInfo.max` as the upper bound, but expand the
  //      lower bound to a "nice" tick and can get an acceptable result.
  //    - `scaleCalcAlign` has to use both `targetExtentInfo.min/max` as the bounds without any expansion,
  //      otherwise the lower bound may become negative unexpectedly, especially for all positive series data.
  var dataZoomFixMinMax = targetExtentInfo.zoomFixMM;
  var hasDataZoomFixMinMax = dataZoomFixMinMax[0] || dataZoomFixMinMax[1];
  var targetMinMaxFixed = [targetExtentInfo.fixMM[0] || hasDataZoomFixMinMax, targetExtentInfo.fixMM[1] || hasDataZoomFixMinMax];
  // MEMO: When only `xxxAxis.min` or `xxxAxis.max` is fixed,
  //  - Even a "nice" interval can be calculated, ticks accumulated based on `min`/`max` can be "nice" only if
  //    `min` or `max` is a "nice" number.
  //  - Generating a "nice" interval may cause the extent have both positive and negative ticks, which may be
  //    not preferable for all positive (very common) or all negative series data. But it can be simply resolved
  //    by specifying `xxxAxis.min: 0`/`xxxAxis.max: 0`, so we do not specially handle this case here.
  //  Therefore, we prioritize generating "nice" interval over preventing from crossing zero.
  //  e.g., if series data are all positive and the max data is `11739`,
  //      If setting `yAxis.max: 'dataMax'`, ticks may be like:
  //          `11739, 8739, 5739, 2739, -1739` (not "nice" enough)
  //      If setting `yAxis.max: 'dataMax', yAxis.min: 0`, ticks may be like:
  //          `11739, 8805, 5870, 2935, 0` (not "nice" enough but may be acceptable)
  //      If setting `yAxis.max: 12000, yAxis.min: 0`, ticks may be like:
  //          `12000, 9000, 6000, 3000, 0` ("nice")
  var targetOldOutermostExtent = targetScale.getExtent();
  var targetOldIntervalExtent = targetIntervalStub.getExtent();
  var targetExtent = (0,_scale_helper_js__rspack_import_1.intervalScaleEnsureValidExtent)(targetOldIntervalExtent, targetMinMaxFixed);
  var min;
  var max;
  var interval;
  var intervalPrecision;
  var maxNice;
  var minNice;
  function loopIncreaseInterval(cb) {
    // Typically this loop runs less than 5 times. But we still
    // use a fail-safe for future changes.
    var LOOP_MAX = 50;
    var loopGuard = 0;
    for (; loopGuard < LOOP_MAX; loopGuard++) {
      if (cb()) {
        break;
      }
      interval = isTargetLogScale
      // TODO: `mathMax(base, 2)` is a guardcode to avoid infinite loop,
      // but probably it should be guranteed by `LogScale` itself.
      ? interval * (0,_util_number_js__rspack_import_2.mathMax)(targetLogScaleBase, 2) : (0,_scale_helper_js__rspack_import_1.increaseInterval)(interval);
      intervalPrecision = (0,_scale_helper_js__rspack_import_1.getIntervalPrecision)(interval);
    }
    if (false) {}
  }
  function updateMinFromMinNice() {
    min = (0,_util_number_js__rspack_import_2.round)(minNice - interval * t0, intervalPrecision);
  }
  function updateMaxFromMaxNice() {
    max = (0,_util_number_js__rspack_import_2.round)(maxNice + interval * t1, intervalPrecision);
  }
  function updateMinNiceFromMinT0Interval() {
    minNice = t0 ? (0,_util_number_js__rspack_import_2.round)(min + interval * t0, intervalPrecision) : min;
  }
  function updateMaxNiceFromMaxT1Interval() {
    maxNice = t1 ? (0,_util_number_js__rspack_import_2.round)(max - interval * t1, intervalPrecision) : max;
  }
  // NOTE: The new calculated `min`/`max` must NOT shrink the original extent; otherwise some series
  // data may be outside of the extent. They can expand the original extent slightly to align with
  // ticks of `alignTo`. In this case, more blank space is added but visually fine.
  if (targetMinMaxFixed[0] && targetMinMaxFixed[1]) {
    // Both `min` and `max` are specified (via dataZoom or ec option; consider both Cartesian, radar and
    // other possible axes). In this case, "nice" ticks can hardly be calculated, but reasonable ticks should
    // still be calculated whenever possible, especially `intervalPrecision` should be tuned for better
    // appearance and lower cumulative error.
    min = targetExtent[0];
    max = targetExtent[1];
    interval = (max - min) / (alignToNiceSegCount + t0 + t1);
    // Typically axis pixel extent is ready here. See `create` in `Grid.ts`.
    var axisPxExtent = targetAxis.getExtent();
    // NOTICE: this pxSpan may be not accurate yet due to "outerBounds" logic, but acceptable so far.
    var pxSpan = (0,_util_number_js__rspack_import_2.mathAbs)(axisPxExtent[1] - axisPxExtent[0]);
    // We imperically choose `pxDiffAcceptable` as `0.5 / alignToNiceSegCount` for reduce cumulative
    // error, otherwise a discernible misalign (> 1px) may occur.
    // PENDING: We do not find a acceptable precision for LogScale here.
    //  Theoretically it can be addressed but introduce more complexity. Is it necessary?
    intervalPrecision = (0,_util_number_js__rspack_import_2.getAcceptableTickPrecision)([max, min], pxSpan, 0.5 / alignToNiceSegCount);
    updateMinNiceFromMinT0Interval();
    updateMaxNiceFromMaxT1Interval();
    if ((0,_util_number_js__rspack_import_2.isNullableNumberFinite)(intervalPrecision)) {
      interval = (0,_util_number_js__rspack_import_2.round)(interval, intervalPrecision);
    }
  } else {
    // Make a minimal enough `interval`, increase it later.
    // It is a similar logic as `IntervalScale#calcNiceTicks` and `LogScale#calcNiceTicks`.
    // Axis break is not supported, which is guranteed by the caller of this function.
    var targetSpan = targetExtent[1] - targetExtent[0];
    interval = isTargetLogScale ? (0,_util_number_js__rspack_import_2.mathMax)((0,_util_number_js__rspack_import_2.quantity)(targetSpan), 1) : (0,_util_number_js__rspack_import_2.nice)(targetSpan / alignToNiceSegCount, _util_number_js__rspack_import_2.NICE_MODE_MIN);
    intervalPrecision = (0,_scale_helper_js__rspack_import_1.getIntervalPrecision)(interval);
    if (targetMinMaxFixed[0]) {
      min = targetExtent[0];
      loopIncreaseInterval(function () {
        updateMinNiceFromMinT0Interval();
        maxNice = (0,_util_number_js__rspack_import_2.round)(minNice + interval * alignToNiceSegCount, intervalPrecision);
        updateMaxFromMaxNice();
        if (max >= targetExtent[1]) {
          return true;
        }
      });
    } else if (targetMinMaxFixed[1]) {
      max = targetExtent[1];
      loopIncreaseInterval(function () {
        updateMaxNiceFromMaxT1Interval();
        minNice = (0,_util_number_js__rspack_import_2.round)(maxNice - interval * alignToNiceSegCount, intervalPrecision);
        updateMinFromMinNice();
        if (min <= targetExtent[0]) {
          return true;
        }
      });
    } else {
      loopIncreaseInterval(function () {
        minNice = (0,_util_number_js__rspack_import_2.round)((0,_util_number_js__rspack_import_2.mathCeil)(targetExtent[0] / interval) * interval, intervalPrecision);
        maxNice = (0,_util_number_js__rspack_import_2.round)((0,_util_number_js__rspack_import_2.mathFloor)(targetExtent[1] / interval) * interval, intervalPrecision);
        // NOTE:
        //  - `maxNice - minNice >= -interval` here.
        //  - While `interval` increases, `currIntervalCount` decreases, minimum `-1`.
        var currIntervalCount = (0,_util_number_js__rspack_import_2.mathRound)((maxNice - minNice) / interval);
        if (currIntervalCount <= alignToNiceSegCount) {
          var moreCount = alignToNiceSegCount - currIntervalCount;
          // Consider cases that negative tick do not make sense (or vice versa), users can simply
          // specify `xxxAxis.min/max: 0` to avoid negative. But we still automatically handle it
          // for some common cases whenever possible:
          //  - When ec option is `xxxAxis.scale: false` (the default), it is usually unexpected if
          //    negative (or positive) ticks are introduced.
          //  - In LogScale, series data are usually either all > 1 or all < 1, rather than both,
          //    that is, logarithm result is typically either all positive or all negative.
          var moreCountPair = void 0;
          var mayEnhanceZero = targetExtentInfo.incl0 || isTargetLogScale;
          // `bounds < 0` or `bounds > 0` may require more complex handling, so we only auto handle
          // `bounds === 0`.
          if (mayEnhanceZero && targetExtent[0] === 0) {
            // 0 has been included in extent and all positive.
            moreCountPair = [0, moreCount];
          } else if (mayEnhanceZero && targetExtent[1] === 0) {
            // 0 has been included in extent and all negative.
            moreCountPair = [moreCount, 0];
          } else {
            // Try to center ticks in axis space whenever possible, which is especially preferable
            // in `LogScale`.
            var lessHalfCount = (0,_util_number_js__rspack_import_2.mathFloor)(moreCount / 2);
            moreCountPair = moreCount % 2 === 0 ? [lessHalfCount, lessHalfCount] : min + max < targetExtent[0] + targetExtent[1] ? [lessHalfCount, lessHalfCount + 1] : [lessHalfCount + 1, lessHalfCount];
          }
          minNice = (0,_util_number_js__rspack_import_2.round)(minNice - interval * moreCountPair[0], intervalPrecision);
          maxNice = (0,_util_number_js__rspack_import_2.round)(maxNice + interval * moreCountPair[1], intervalPrecision);
          updateMinFromMinNice();
          updateMaxFromMaxNice();
          if (min <= targetExtent[0] && max >= targetExtent[1]) {
            return true;
          }
        }
      });
    }
  }
  (0,_axisHelper_js__rspack_import_3.updateIntervalOrLogScaleForNiceOrAligned)(targetScale, targetMinMaxFixed, targetOldIntervalExtent, [min, max], targetOldOutermostExtent, {
    // NOTE: Even in LogScale, `interval` should not be in log space.
    interval: interval,
    // Force ticks count, otherwise cumulative error may cause more unexpected ticks to be generated.
    // Though the overlapping tick labels may be auto-ignored, but probably unexpected, e.g., the min
    // tick label is ignored but the secondary min tick label is shown, which is unexpected when
    // `axis.min` is user-specified or dataZoom-specified.
    intervalCount: alignToNiceSegCount,
    intervalPrecision: intervalPrecision,
    niceExtent: [minNice, maxNice]
  });
  if (false) {}
}
__webpack_require__.d(__webpack_exports__, {
}, {
  scaleCalcAlign: scaleCalcAlign
});


}),
37371: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var zrender_lib_core_util_js__rspack_import_3 = __webpack_require__(75275);
/* import */ var _scale_helper_js__rspack_import_2 = __webpack_require__(45620);
/* import */ var _util_number_js__rspack_import_1 = __webpack_require__(46823);
/* import */ var _axisStatistics_js__rspack_import_4 = __webpack_require__(84287);
/* import */ var _scale_scaleMapper_js__rspack_import_0 = __webpack_require__(76077);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/





// Arbitrary, leave some space to avoid overflowing when dataZoom moving.
var FALLBACK_BAND_WIDTH_RATIO = 0.8;
/**
 * NOTICE:
 *  - Require the axis pixel extent and the scale extent as inputs. But they
 *    can be not precise for approximation.
 *  - Can only be called after "data processing" stage.
 *
 * PENDING:
 *  Currently `bandWidth` can not be specified by users explicitly. But if we
 *  allow that in future, these issues must be considered:
 *    - Can only allow specifying a band width in data scale rather than pixel.
 *    - LogScale needs to be considered - band width can only be specified on linear
 *      (but before break) scale, similar to `axis.interval`.
 *
 * A band is required on:
 *  - series group band width in bar/boxplot/candlestick/...;
 *  - tooltip axisPointer type "shadow";
 *  - etc.
 */
function calcBandWidth(axis, opt) {
  opt = opt || {};
  var out = {
    w: NaN,
    w2: NaN
  };
  var scale = axis.scale;
  var fromStat = opt.fromStat;
  var min = opt.min;
  // [BAND_WIDTH_USED_SCALE_LINEAR_SPAN]
  //  - Band width should always respect to the currently specified extent, and `SCALE_EXTENT_KIND_MAPPING`
  //    should be used if specified.
  //    Otherwise, the result may incorrect, especially when data count is small.
  //    For example, when "containShape" is calculating, no `SCALE_EXTENT_KIND_MAPPING` is set, so here only
  //    `SCALE_EXTENT_KIND_EFFECTIVE` is returned, say, `[3, 5]`, based on which a `SCALE_EXTENT_KIND_MAPPING`
  //    is calculated, say `[2.5, 5.5]` (expanded by `0.5`). Then when rendering, that `SCALE_EXTENT_KIND_MAPPING`
  //    is returned here.
  //    See AXIS_CONTAIN_SHAPE_COMMON_STRATEGY for more details.
  //  - The span should be in the linear space (typically, the innermost space).
  //  - We use the scale extent after being zoommed and `intervalScaleEnsureValidExtent`-ish applied and
  //    "nice"/"align" applied, because:
  //    - For OrdinalScale, fine;
  //    - For numeric scale, `scaleLinearSpan` is normally not used for a consistent result when `dataZoom`
  //      is applied, but used when none or single data item case.
  var scaleLinearSpan = (0,_scale_scaleMapper_js__rspack_import_0.getScaleLinearSpanForMapping)(scale);
  if (!(0,_util_number_js__rspack_import_1.isNullableNumberFinite)(scaleLinearSpan)) {
    // scale may be `[Infinity, -Infinity]`.
    scaleLinearSpan = NaN;
  }
  var axisExtent = axis.getExtent();
  // Always use a new pxSpan because it may be changed in `grid` contain label calculation.
  var pxSpan = (0,_util_number_js__rspack_import_1.mathAbs)(axisExtent[1] - axisExtent[0]);
  if ((0,_scale_helper_js__rspack_import_2.isOrdinalScale)(scale)) {
    calcBandWidthForCategoryAxis(out, axis, scaleLinearSpan, pxSpan);
  } else if (fromStat) {
    calcBandWidthForNumericAxis(out, axis, scaleLinearSpan, pxSpan, fromStat);
  } else if (min == null) {
    if (false) {}
  }
  if (min != null) {
    out.w = (0,_util_number_js__rspack_import_1.isNullableNumberFinite)(out.w) ? (0,_util_number_js__rspack_import_1.mathMax)(min, out.w) : min;
  }
  return out;
}
function calcBandWidthForCategoryAxis(out, axis, scaleLinearSpan, pxSpan) {
  var onBand = axis.onBand;
  var len = scaleLinearSpan + (onBand ? 1 : 0);
  // Fix #2728, avoid NaN when only one data.
  len === 0 && (len = 1);
  out.w = pxSpan / len;
  // NOTE:
  //  - When `scaleLinearSpan === 0`, no need to expand extent.
  //  - `onBand: true` (`boundaryGap: true`) does not need to support `containShape`,
  //    thereby no `invRatio`.
  if (!onBand && scaleLinearSpan && pxSpan) {
    out.w2 = out.w * scaleLinearSpan / pxSpan;
  }
}
function calcBandWidthForNumericAxis(out, axis, scaleLinearSpan, pxSpan, fromStat) {
  if (false) {}
  var onlySingular = false;
  var bandWidthInData = -Infinity;
  (0,zrender_lib_core_util_js__rspack_import_3.each)(fromStat.key ? [(0,_axisStatistics_js__rspack_import_4.getAxisStat)(axis, fromStat.key)] : (0,_axisStatistics_js__rspack_import_4.getAxisStatBySeries)(axis, fromStat.sers || []), function (stat) {
    var liPosMinGap = stat.liPosMinGap;
    // NOTE: `liPosMinGap == null` may indicate that `requireAxisStatistics`
    // is not used by any series on this axis. We should not make `bandWidth`
    // for this case.
    if (liPosMinGap != null) {
      if (liPosMinGap > 0) {
        if (liPosMinGap > bandWidthInData) {
          bandWidthInData = liPosMinGap;
        }
        onlySingular = false;
      } else if (liPosMinGap === _axisStatistics_js__rspack_import_4.LINEAR_POSITIVE_MIN_GAP_SINGLE_VALID_VALUE) {
        onlySingular = true;
      }
    }
  });
  if ((0,_util_number_js__rspack_import_1.isNullableNumberFinite)(scaleLinearSpan) && scaleLinearSpan > 0 && (0,_util_number_js__rspack_import_1.isNullableNumberFinite)(bandWidthInData)) {
    out.w = pxSpan / scaleLinearSpan * bandWidthInData;
    out.w2 = bandWidthInData;
  } else if (onlySingular) {
    // This is the special handing for single value case, where min gap can not
    // be calculated, but `w` and `w2` (for "containShape") are still needed.
    out.w = pxSpan * FALLBACK_BAND_WIDTH_RATIO;
    out.w2 = out.w * scaleLinearSpan / pxSpan;
    // Consider an axis has both candlestick and bar series, where candlestick has multiple data
    // but the bar series has no data. In this case, that bar series should be ignored; otherwise,
    // the axis will be significantly expanded by "containShape" but no bar shape displayed.
  }
}
__webpack_require__.d(__webpack_exports__, {
}, {
  calcBandWidth: calcBandWidth
});


}),
14872: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
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
var AXIS_TYPES = {
  value: 1,
  category: 1,
  time: 1,
  log: 1
};
__webpack_require__.d(__webpack_exports__, {
}, {
  AXIS_TYPES: AXIS_TYPES
});


}),
38387: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var zrender_lib_core_util_js__rspack_import_1 = __webpack_require__(75275);
/* import */ var _visual_tokens_js__rspack_import_0 = __webpack_require__(5888);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
    onZero: 'auto',
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
    // The default value of TimeScale is determined in `AxisBuilder`
    // showMinLabel: false,
    // showMaxLabel: false,
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
72460: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var zrender_lib_core_util_js__rspack_import_1 = __webpack_require__(75275);
/* import */ var _scale_Ordinal_js__rspack_import_5 = __webpack_require__(55575);
/* import */ var _scale_Interval_js__rspack_import_8 = __webpack_require__(46333);
/* import */ var _scale_Scale_js__rspack_import_3 = __webpack_require__(78176);
/* import */ var _scale_Time_js__rspack_import_6 = __webpack_require__(4829);
/* import */ var _scale_Log_js__rspack_import_7 = __webpack_require__(15040);
/* import */ var _axisCommonTypes_js__rspack_import_2 = __webpack_require__(14872);
/* import */ var _data_helper_dataStackHelper_js__rspack_import_12 = __webpack_require__(58337);
/* import */ var _util_time_js__rspack_import_10 = __webpack_require__(80155);
/* import */ var _scale_break_js__rspack_import_4 = __webpack_require__(9017);
/* import */ var _scale_helper_js__rspack_import_11 = __webpack_require__(45620);
/* import */ var _util_model_js__rspack_import_0 = __webpack_require__(53781);
/* import */ var _scale_scaleMapper_js__rspack_import_9 = __webpack_require__(76077);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/















var axisInner = (0,_util_model_js__rspack_import_0.makeInner)();
function determineAxisType(model) {
  var type = model.get('type');
  if (
  // In ec option, `xxxAxis.type` may be undefined.
  type == null
  // PENDING: Theoretically, a customized `Scale` is probably impossible, since
  // the interface of `Scale` does not guarantee stability. But we still literally
  // support it for backward compat, though type incorrect.
  || !zrender_lib_core_util_js__rspack_import_1.hasOwn(_axisCommonTypes_js__rspack_import_2.AXIS_TYPES, type) && !_scale_Scale_js__rspack_import_3["default"].getClass(type)) {
    type = 'value';
  }
  return type;
}
function createScaleByModel(model, type, coordSysSupportAxisBreaks) {
  var breakHelper = (0,_scale_break_js__rspack_import_4.getScaleBreakHelper)();
  var breakOption;
  if (breakHelper) {
    breakOption = retrieveAxisBreaksOption(model, type, coordSysSupportAxisBreaks);
  }
  switch (type) {
    case 'category':
      return new _scale_Ordinal_js__rspack_import_5["default"]({
        ordinalMeta: model.getOrdinalMeta ? model.getOrdinalMeta() : model.getCategories(),
        extent: (0,_util_model_js__rspack_import_0.initExtentForUnion)()
      });
    case 'time':
      return new _scale_Time_js__rspack_import_6["default"]({
        locale: model.ecModel.getLocaleModel(),
        useUTC: model.ecModel.get('useUTC'),
        breakOption: breakOption
      });
    case 'log':
      // See also #3749
      return new _scale_Log_js__rspack_import_7["default"]({
        logBase: model.get('logBase'),
        breakOption: breakOption
      });
    case 'value':
      return new _scale_Interval_js__rspack_import_8["default"]({
        breakOption: breakOption
      });
    default:
      // case others.
      return new (_scale_Scale_js__rspack_import_3["default"].getClass(type) || _scale_Interval_js__rspack_import_8["default"])({});
  }
}
/**
 * Check if the axis cross a specific value.
 */
function getScaleValuePositionKind(scale, value, considerMappingExtent) {
  var dataExtent = considerMappingExtent ? (0,_scale_scaleMapper_js__rspack_import_9.getScaleExtentForMappingUnsafe)(scale, null) : scale.getExtentUnsafe(_scale_scaleMapper_js__rspack_import_9.SCALE_EXTENT_KIND_EFFECTIVE, null);
  var min = dataExtent[0];
  var max = dataExtent[1];
  return !(0,_util_model_js__rspack_import_0.isValidBoundsForExtent)(min, max) ? SCALE_VALUE_POSITION_KIND_OUTSIDE : min === value || max === value ? SCALE_VALUE_POSITION_KIND_EDGE : min < value && max > value ? SCALE_VALUE_POSITION_KIND_INSIDE : SCALE_VALUE_POSITION_KIND_OUTSIDE;
}
var SCALE_VALUE_POSITION_KIND_INSIDE = 1;
var SCALE_VALUE_POSITION_KIND_EDGE = 2;
var SCALE_VALUE_POSITION_KIND_OUTSIDE = 3;
function discourageOnAxisZero(axis) {
  axisInner(axis).noOnMyZero = true;
}
/**
 * `true`: Prevent orthoganal axes from positioning at the zero point of this axis.
 */
function isOnAxisZeroDiscouraged(axis) {
  return axisInner(axis).noOnMyZero;
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
    var parsed_1 = (0,_util_time_js__rspack_import_10.parseTimeAxisLabelFormatter)(labelFormatter);
    return function (tick, idx) {
      return axis.scale.getFormattedLabel(tick, idx, parsed_1);
    };
  } else if (zrender_lib_core_util_js__rspack_import_1.isString(labelFormatter)) {
    return function (tick) {
      // For category axis, get raw value; for numeric axis,
      // get formatted label like '1,333,444'.
      var label = axis.scale.getLabel(tick);
      var text = labelFormatter.replace('{value}', label != null ? label : '');
      return text;
    };
  } else if (zrender_lib_core_util_js__rspack_import_1.isFunction(labelFormatter)) {
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
    var scaleBreakHelper_1 = (0,_scale_break_js__rspack_import_4.getScaleBreakHelper)();
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
  var scale = axis.scale;
  return (0,_scale_helper_js__rspack_import_11.isOrdinalScale)(scale) ? scale.getLabel(tick) : tick.value;
}
/**
 * @param model axisLabelModel or axisTickModel
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
  zrender_lib_core_util_js__rspack_import_1.each(data.mapDimensionsAll(axisDim), function (dataDim) {
    // For example, the extent of the original dimension
    // is [0.1, 0.5], the extent of the `stackResultDimension`
    // is [7, 9], the final extent should NOT include [0.1, 0.5],
    // because there is no graphic corresponding to [0.1, 0.5].
    // See the case in `test/area-stack.html` `main1`, where area line
    // stack needs `yAxis` not start from 0.
    dataDimMap[(0,_data_helper_dataStackHelper_js__rspack_import_12.getStackedDimension)(data, dataDim)] = true;
  });
  return zrender_lib_core_util_js__rspack_import_1.keys(dataDimMap);
}
function isNameLocationCenter(nameLocation) {
  return nameLocation === 'middle' || nameLocation === 'center';
}
function shouldAxisShow(axisModel) {
  return axisModel.getShallow('show');
}
function retrieveAxisBreaksOption(model, axisType, coordSysSupportAxisBreaks) {
  var option = model.get('breaks', true);
  if (option != null) {
    if (!(0,_scale_break_js__rspack_import_4.getScaleBreakHelper)()) {
      if (false) {}
      return undefined;
    }
    if (!coordSysSupportAxisBreaks || !isAxisTypeSupportAxisBreak(axisType)) {
      if (false) { var axisInfo }
      return undefined;
    }
    return option;
  }
}
function isAxisTypeSupportAxisBreak(axisType) {
  return axisType !== 'category';
}
function updateIntervalOrLogScaleForNiceOrAligned(scale, fixMinMax, oldIntervalExtent, newIntervalExtent, oldOutermostExtent, cfg) {
  var isTargetLogScale = (0,_scale_helper_js__rspack_import_11.isLogScale)(scale);
  var intervalStub = isTargetLogScale ? scale.intervalStub : scale;
  intervalStub.setExtent(newIntervalExtent[0], newIntervalExtent[1]);
  if (isTargetLogScale) {
    // Sync intervalStub extent to the outermost extent (i.e., `powStub` for `LogScale`).
    var powStub = scale.powStub;
    var opt = {
      depth: _scale_scaleMapper_js__rspack_import_9.SCALE_MAPPER_DEPTH_OUT_OF_BREAK
    };
    var minPow = scale.transformOut(newIntervalExtent[0], opt);
    var maxPow = scale.transformOut(newIntervalExtent[1], opt);
    // Log transform is probably not inversible by rounding error, which causes min/max tick may be
    // displayed as `5.999999999999999` unexpectedly when min/max are required to be fixed (specified
    // by users or by dataZoom). Therefore we set `powStub` with respect to `oldOutermostExtent` if
    // interval extent is not changed. But `intervalStub` should not be inversely changed by this
    // handling, otherwise its monotonicity between `niceExtent` and `extent` may be broken and cause
    // unexpected ticks generation.
    var extentChanged = (0,_scale_helper_js__rspack_import_11.extentDiffers)(oldIntervalExtent, newIntervalExtent);
    // NOTE: extent may still be changed even when min/max are required to be fixed,
    // e.g., by `intervalScaleEnsureValidExtent`.
    if (fixMinMax[0] && !extentChanged[0]) {
      minPow = oldOutermostExtent[0];
    }
    if (fixMinMax[1] && !extentChanged[1]) {
      maxPow = oldOutermostExtent[1];
    }
    powStub.setExtent(minPow, maxPow);
  }
  intervalStub.setConfig(cfg);
}
function getTickValueOutermost(scale, tick) {
  return (0,_scale_helper_js__rspack_import_11.isOrdinalScale)(scale) ? scale.getRawOrdinalNumber(tick.value) : tick.value;
}
function isAxisOnBand(scale, axisModel) {
  return (0,_scale_helper_js__rspack_import_11.isOrdinalScale)(scale) && !!axisModel.get('boundaryGap');
}
__webpack_require__.d(__webpack_exports__, {
}, {
  SCALE_VALUE_POSITION_KIND_EDGE: SCALE_VALUE_POSITION_KIND_EDGE,
  SCALE_VALUE_POSITION_KIND_INSIDE: SCALE_VALUE_POSITION_KIND_INSIDE,
  SCALE_VALUE_POSITION_KIND_OUTSIDE: SCALE_VALUE_POSITION_KIND_OUTSIDE,
  createScaleByModel: createScaleByModel,
  determineAxisType: determineAxisType,
  discourageOnAxisZero: discourageOnAxisZero,
  getAxisRawValue: getAxisRawValue,
  getDataDimensionsOnAxis: getDataDimensionsOnAxis,
  getOptionCategoryInterval: getOptionCategoryInterval,
  getScaleValuePositionKind: getScaleValuePositionKind,
  getTickValueOutermost: getTickValueOutermost,
  isAxisOnBand: isAxisOnBand,
  isNameLocationCenter: isNameLocationCenter,
  isOnAxisZeroDiscouraged: isOnAxisZeroDiscouraged,
  makeLabelFormatter: makeLabelFormatter,
  retrieveAxisBreaksOption: retrieveAxisBreaksOption,
  shouldAxisShow: shouldAxisShow,
  shouldShowAllLabels: shouldShowAllLabels,
  updateIntervalOrLogScaleForNiceOrAligned: updateIntervalOrLogScaleForNiceOrAligned
});


}),
59417: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var AxisModelCommonMixin = /** @class */function () {
  function AxisModelCommonMixin() {}
  AxisModelCommonMixin.prototype.needIncludeZero = function () {
    return !this.option.scale;
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

__webpack_require__.d(__webpack_exports__, {
}, {
  AxisModelCommonMixin: AxisModelCommonMixin
});


}),
26511: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var tslib__rspack_import_3 = __webpack_require__(2492);
/* import */ var _axisDefault_js__rspack_import_2 = __webpack_require__(38387);
/* import */ var _util_layout_js__rspack_import_4 = __webpack_require__(29268);
/* import */ var _data_OrdinalMeta_js__rspack_import_5 = __webpack_require__(32536);
/* import */ var _axisCommonTypes_js__rspack_import_1 = __webpack_require__(14872);
/* import */ var zrender_lib_core_util_js__rspack_import_0 = __webpack_require__(75275);
/* import */ var _component_axis_axisBreakHelper_js__rspack_import_6 = __webpack_require__(80653);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
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
  (0,zrender_lib_core_util_js__rspack_import_0.each)(_axisCommonTypes_js__rspack_import_1.AXIS_TYPES, function (v, axisType) {
    var defaultOption = (0,zrender_lib_core_util_js__rspack_import_0.merge)((0,zrender_lib_core_util_js__rspack_import_0.merge)({}, _axisDefault_js__rspack_import_2["default"][axisType], true), extraDefaultOption, true);
    var AxisModel = /** @class */function (_super) {
      (0,tslib__rspack_import_3.__extends)(AxisModel, _super);
      function AxisModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = axisName + 'Axis.' + axisType;
        return _this;
      }
      AxisModel.prototype.mergeDefaultAndTheme = function (option, ecModel) {
        var layoutMode = (0,_util_layout_js__rspack_import_4.fetchLayoutMode)(this);
        var inputPositionParams = layoutMode ? (0,_util_layout_js__rspack_import_4.getLayoutParams)(option) : {};
        var themeModel = ecModel.getTheme();
        (0,zrender_lib_core_util_js__rspack_import_0.merge)(option, themeModel.get(axisType + 'Axis'));
        (0,zrender_lib_core_util_js__rspack_import_0.merge)(option, this.getDefaultOption());
        option.type = getAxisType(option);
        if (layoutMode) {
          (0,_util_layout_js__rspack_import_4.mergeLayoutParam)(option, inputPositionParams, layoutMode);
        }
      };
      AxisModel.prototype.optionUpdated = function () {
        var thisOption = this.option;
        if (thisOption.type === 'category') {
          this.__ordinalMeta = _data_OrdinalMeta_js__rspack_import_5["default"].createByAxisModel(this);
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
            // NOTICE: return the raw data even if not existing; never use a fallback like `[]`;
            // Its existence matters in some legacy cases.
            return option.data;
          }
          return this.__ordinalMeta.categories;
        }
      };
      AxisModel.prototype.getOrdinalMeta = function () {
        return this.__ordinalMeta;
      };
      AxisModel.prototype.updateAxisBreaks = function (payload) {
        var axisBreakHelper = (0,_component_axis_axisBreakHelper_js__rspack_import_6.getAxisBreakHelper)();
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
__webpack_require__.d(__webpack_exports__, {
}, {
  "default": axisModelCreator
});


}),
85931: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var zrender_lib_core_util_js__rspack_import_6 = __webpack_require__(75275);
/* import */ var _scale_helper_js__rspack_import_0 = __webpack_require__(45620);
/* import */ var _util_number_js__rspack_import_1 = __webpack_require__(46823);
/* import */ var _axisHelper_js__rspack_import_2 = __webpack_require__(72460);
/* import */ var _scale_Time_js__rspack_import_5 = __webpack_require__(4829);
/* import */ var _scaleRawExtentInfo_js__rspack_import_4 = __webpack_require__(94385);
/* import */ var _scale_scaleMapper_js__rspack_import_3 = __webpack_require__(76077);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/







// ------ START: LinearIntervalScaleStub Nice ------
function calcNiceForIntervalOrLogScale(scale, opt) {
  // [CAVEAT]: If updating this impl, need to sync it to `axisAlignTicks.ts`.
  var isTargetLogScale = (0,_scale_helper_js__rspack_import_0.isLogScale)(scale);
  var intervalStub = isTargetLogScale ? scale.intervalStub : scale;
  var fixMinMax = opt.fixMinMax || [];
  var oldOutermostExtent = isTargetLogScale ? scale.getExtent() : null;
  var oldIntervalExtent = intervalStub.getExtent();
  var newIntervalExtent = (0,_scale_helper_js__rspack_import_0.intervalScaleEnsureValidExtent)(oldIntervalExtent, fixMinMax, opt.rawExtentResult);
  intervalStub.setExtent(newIntervalExtent[0], newIntervalExtent[1]);
  newIntervalExtent = intervalStub.getExtent();
  var config = isTargetLogScale ? logScaleCalcNiceTicks(intervalStub, opt) : intervalScaleCalcNiceTicks(intervalStub, opt);
  var autoIntervalPrecision = config.intervalPrecision;
  var autoInterval = config.interval;
  // When auto calculated interval is not preferable, users are allowed to explicity specify
  // `interval`, `min`, `max` to customize the axis. A typical case is, in angle axis with angle
  // 0 - 360, where the internally calculated interval is not 60-based.
  // NOTICE:
  //  - In `xxxAxis.type: 'log'`, ec option `xxxAxis.interval` requires a logarithm-applied
  //    value rather than a value in the raw scale.
  //  - Follow the historical behavior:
  //    - even `interval` is specified, the scale extent is still expanded based on the auto-calculated
  //      interval.
  //    - No validation to the specified `interval`.
  var userInterval = opt.userInterval;
  if (userInterval != null) {
    config.interval = userInterval;
    config.intervalPrecision = (0,_scale_helper_js__rspack_import_0.getIntervalPrecision)(userInterval);
  }
  if (!fixMinMax[0]) {
    newIntervalExtent[0] = (0,_util_number_js__rspack_import_1.round)((0,_util_number_js__rspack_import_1.mathFloor)(newIntervalExtent[0] / autoInterval) * autoInterval, autoIntervalPrecision);
  }
  if (!fixMinMax[1]) {
    newIntervalExtent[1] = (0,_util_number_js__rspack_import_1.round)((0,_util_number_js__rspack_import_1.mathCeil)(newIntervalExtent[1] / autoInterval) * autoInterval, autoIntervalPrecision);
  }
  if (userInterval != null) {
    // Historical behavior.
    config.niceExtent = newIntervalExtent.slice();
  }
  (0,_axisHelper_js__rspack_import_2.updateIntervalOrLogScaleForNiceOrAligned)(scale, fixMinMax, oldIntervalExtent, newIntervalExtent, oldOutermostExtent, config);
}
// ------ END: LinearIntervalScaleStub Nice ------
// ------ START: IntervalScale Nice ------
function intervalScaleCalcNiceTicks(scale, opt) {
  var splitNumber = (0,_scale_helper_js__rspack_import_0.ensureValidSplitNumber)(opt.splitNumber, 5);
  // Use the span in the innermost linear space to calculate nice ticks.
  var span = (0,_scale_scaleMapper_js__rspack_import_3.getScaleLinearSpanEffective)(scale);
  if (false) {}
  var minInterval = opt.minInterval;
  var maxInterval = opt.maxInterval;
  var interval = (0,_util_number_js__rspack_import_1.nice)(span / splitNumber, true);
  if (minInterval != null && interval < minInterval) {
    interval = minInterval;
  }
  if (maxInterval != null && interval > maxInterval) {
    interval = maxInterval;
  }
  var intervalPrecision = (0,_scale_helper_js__rspack_import_0.getIntervalPrecision)(interval);
  var extent = scale.getExtent();
  // By design, the `niceExtent` is inside the original extent
  var niceExtent = [(0,_util_number_js__rspack_import_1.round)((0,_util_number_js__rspack_import_1.mathCeil)(extent[0] / interval) * interval, intervalPrecision), (0,_util_number_js__rspack_import_1.round)((0,_util_number_js__rspack_import_1.mathFloor)(extent[1] / interval) * interval, intervalPrecision)];
  return {
    interval: interval,
    intervalPrecision: intervalPrecision,
    niceExtent: niceExtent
  };
}
;
// ------ END: IntervalScale Nice ------
// ------ START: LogScale Nice ------
function logScaleCalcNiceTicks(intervalStub, opt) {
  // [CAVEAT]: If updating this impl, need to sync it to `axisAlignTicks.ts`.
  var splitNumber = (0,_scale_helper_js__rspack_import_0.ensureValidSplitNumber)(opt.splitNumber, 10);
  // Find nice ticks in the "logarithmic space". Notice that "logarithmic space" is a middle space
  // rather than the innermost linear space when axis breaks exist.
  var intervalExtent = intervalStub.getExtent();
  // But use the span in the innermost linear space to calculate nice ticks.
  var span = (0,_scale_scaleMapper_js__rspack_import_3.getScaleLinearSpanEffective)(intervalStub);
  if (false) {}
  // Interval should be integer
  var interval = (0,_util_number_js__rspack_import_1.mathMax)((0,_util_number_js__rspack_import_1.quantity)(span), 1);
  var err = splitNumber / span * interval;
  // Filter ticks to get closer to the desired count.
  if (err <= 0.5) {
    // TODO: support other bases other than 10?
    interval *= 10;
  }
  var intervalPrecision = (0,_scale_helper_js__rspack_import_0.getIntervalPrecision)(interval);
  // For LogScale, we use a `niceExtent` in the "logarithmic space" rather than
  // the original "pow space", because it is used in `intervalStub.getTicks()` thereafter.
  var niceExtent = [(0,_util_number_js__rspack_import_1.round)((0,_util_number_js__rspack_import_1.mathCeil)(intervalExtent[0] / interval) * interval, intervalPrecision), (0,_util_number_js__rspack_import_1.round)((0,_util_number_js__rspack_import_1.mathFloor)(intervalExtent[1] / interval) * interval, intervalPrecision)];
  return {
    intervalPrecision: intervalPrecision,
    interval: interval,
    niceExtent: niceExtent
  };
}
;
/**
 * NOTE: See the summary of the process of extent determination in the comment of `scaleMapper.setExtent`.
 *
 * Calculate a "nice" extent and "nice" ticks configs based on the current scale extent and ec options.
 * scale extent will be modified, and config may be set to the scale.
 *
 * @see SCALE_EXTENT_CONSTRUCTION for the full processing flow.
 */
function scaleCalcNice(axisLike) {
  var scale = axisLike.scale;
  var model = axisLike.model;
  var axis = model.axis;
  var ecModel = model.ecModel;
  if (false) {}
  scaleCalcNice2(scale, model, axis, ecModel, null);
}
/**
 * @see SCALE_EXTENT_CONSTRUCTION for the full processing flow.
 */
function scaleCalcNice2(scale, model,
// Some call from external source, such as echarts-gl, may have no `axis` and `ecModel`,
// but has `externalDataExtent`.
axis, ecModel, externalDataExtent) {
  var rawExtentResult = (0,_scaleRawExtentInfo_js__rspack_import_4.adoptScaleRawExtentInfoAndPrepare)(scale, model, ecModel, axis, externalDataExtent);
  var isIntervalOrTime = (0,_scale_helper_js__rspack_import_0.isIntervalScale)(scale) || (0,_scale_helper_js__rspack_import_0.isTimeScale)(scale);
  scaleCalcNiceDirectly(scale, {
    splitNumber: model.get('splitNumber'),
    fixMinMax: rawExtentResult.fixMM,
    userInterval: model.get('interval'),
    minInterval: isIntervalOrTime ? model.get('minInterval') : null,
    maxInterval: isIntervalOrTime ? model.get('maxInterval') : null,
    rawExtentResult: rawExtentResult
  });
  if (axis && ecModel) {
    (0,_scaleRawExtentInfo_js__rspack_import_4.adoptScaleExtentKindMapping)(axis, scale, rawExtentResult, ecModel);
  }
  if (false) {}
}
function scaleCalcNiceDirectly(scale, opt) {
  scaleCalcNiceMethods[scale.type](scale, opt);
}
var scaleCalcNiceMethods = {
  interval: calcNiceForIntervalOrLogScale,
  log: calcNiceForIntervalOrLogScale,
  time: _scale_Time_js__rspack_import_5.calcNiceForTimeScale,
  ordinal: zrender_lib_core_util_js__rspack_import_6.noop
};
// ------ END: scaleCalcNice Entry ------
__webpack_require__.d(__webpack_exports__, {
}, {
  scaleCalcNice: scaleCalcNice,
  scaleCalcNice2: scaleCalcNice2,
  scaleCalcNiceDirectly: scaleCalcNiceDirectly
});


}),
84287: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var zrender_lib_core_util_js__rspack_import_2 = __webpack_require__(75275);
/* import */ var _util_model_js__rspack_import_0 = __webpack_require__(53781);
/* import */ var _util_cycleCache_js__rspack_import_1 = __webpack_require__(51386);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/



var callOnlyOnce = (0,_util_model_js__rspack_import_0.makeCallOnlyOnce)();
// Ensure that it never appears in internal generated uid and pre-defined coordSysType.
var AXIS_STAT_KEY_DELIMITER = '|&';
var ecModelCacheFullUpdateInner = (0,_util_model_js__rspack_import_0.makeInner)();
// In this case, there are one or multiple valid data value but all the same.
var LINEAR_POSITIVE_MIN_GAP_SINGLE_VALID_VALUE = -2;
var LINEAR_POSITIVE_MIN_GAP_NO_VALID_VALUE = -1;
var ecModelCachePrepareInner = (0,_util_model_js__rspack_import_0.makeInner)();
var validateInputAxis;
if (false) {}
function getAxisStatPerKeyPerAxis(axis, axisStatKey) {
  var axisModel = axis.model;
  var keyed = ecModelCacheFullUpdateInner((0,_util_cycleCache_js__rspack_import_1.getCachePerECFullUpdate)(axisModel.ecModel)).keyed;
  var perKey = keyed && keyed.get(axisStatKey);
  return perKey && perKey.get(axisModel.uid);
}
function getAxisStat(axis, axisStatKey
// Return: Never return null/undefined.
) {
  if (false) {}
  return wrapStatResult(getAxisStatPerKeyPerAxis(axis, axisStatKey));
}
function getAxisStatBySeries(axis, seriesList
// Return: Never be null/undefined; never contain null/undefined.
) {
  if (false) {}
  var result = [];
  eachKeyEachAxis(axis.model.ecModel, function (perKeyPerAxis) {
    for (var idx = 0; idx < seriesList.length; idx++) {
      if (seriesList[idx] && perKeyPerAxis.serByIdx[seriesList[idx].seriesIndex]) {
        result.push(wrapStatResult(perKeyPerAxis));
      }
    }
  });
  return result;
}
function eachKeyEachAxis(ecModel, cb) {
  var keyed = ecModelCacheFullUpdateInner((0,_util_cycleCache_js__rspack_import_1.getCachePerECFullUpdate)(ecModel)).keyed;
  keyed && keyed.each(function (perKey, axisStatKey) {
    perKey.each(function (perKeyPerAxis, axisModelUid) {
      cb(perKeyPerAxis, axisStatKey, axisModelUid);
    });
  });
}
function wrapStatResult(record) {
  return {
    liPosMinGap: record ? record.liPosMinGap : undefined
  };
}
function eachSeriesOnAxis(axis, cb) {
  if (false) {}
  var ecModel = axis.model.ecModel;
  var seriesOnAxisMap = ecModelCacheFullUpdateInner((0,_util_cycleCache_js__rspack_import_1.getCachePerECFullUpdate)(ecModel)).axSer;
  seriesOnAxisMap && eachSeriesDealForAxisStat(ecModel, seriesOnAxisMap.get(axis.model.uid), cb);
}
/**
 * NOTE:
 *  - series declaration order is respected (some ec option precedence matters, e.g., bar series).
 *  - series filtered out are excluded.
 */
function eachSeriesOnAxisOnKey(axis, axisStatKey, cb) {
  if (false) {}
  var perKeyPerAxis = getAxisStatPerKeyPerAxis(axis, axisStatKey);
  perKeyPerAxis && eachSeriesDealForAxisStat(axis.model.ecModel, perKeyPerAxis.sers, cb);
}
function eachSeriesDealForAxisStat(ecModel, seriesList, cb) {
  if (!seriesList) {
    return;
  }
  for (var i = 0; i < seriesList.length; i++) {
    var seriesModel = seriesList[i];
    // Legend-filtered series need to be ignored since series are registered before `legendFilter`.
    if (!ecModel.isSeriesFiltered(seriesModel)) {
      cb(seriesModel);
    }
  }
}
/**
 * NOTE:
 *  - series filtered out are excluded.
 */
function countSeriesOnAxisOnKey(axis, axisStatKey) {
  if (false) {}
  var perKeyPerAxis = getAxisStatPerKeyPerAxis(axis, axisStatKey);
  if (!perKeyPerAxis || !perKeyPerAxis.sers.length) {
    return 0;
  }
  var count = 0;
  eachSeriesDealForAxisStat(axis.model.ecModel, perKeyPerAxis.sers, function () {
    count++;
  });
  return count;
}
/**
 * NOTICE: Available after `CoordinateSystem['create']` (not included).
 *
 * Query all axes that have at least one associated series (via `associateSeriesWithAxis`)
 * by the given key.
 */
function eachAxisOnKey(ecModel, axisStatKey, cb) {
  if (false) {}
  var keyed = ecModelCacheFullUpdateInner((0,_util_cycleCache_js__rspack_import_1.getCachePerECFullUpdate)(ecModel)).keyed;
  var perKey = keyed && keyed.get(axisStatKey);
  perKey && perKey.each(function (perKeyPerAxis) {
    if (false) {}
    cb(perKeyPerAxis.axis);
  });
}
/**
 * NOTICE: Available after `CoordinateSystem['create']` (not included).
 *
 * Query all `AxisStatKey`s that have at least one associated series (via `associateSeriesWithAxis`)
 * by the given axis.
 */
function eachKeyOnAxis(axis, cb) {
  if (false) {}
  var model = axis.model;
  var keysByAxisModelUid = ecModelCacheFullUpdateInner((0,_util_cycleCache_js__rspack_import_1.getCachePerECFullUpdate)(model.ecModel)).keys;
  keysByAxisModelUid && (0,zrender_lib_core_util_js__rspack_import_2.each)(keysByAxisModelUid.get(model.uid), function (axisStatKey) {
    if (false) { var stat }
    cb(axisStatKey);
  });
}
/**
 * NOTICE: this processor may be omitted - it is registered only if required.
 */
function performAxisStatisticsOnOverallReset(ecModel) {
  var ecPrepareCache = ecModelCachePrepareInner((0,_util_cycleCache_js__rspack_import_1.getCachePerECPrepare)(ecModel));
  var ecPrepareCacheKeyed = ecPrepareCache.keyed || (ecPrepareCache.keyed = (0,zrender_lib_core_util_js__rspack_import_2.createHashMap)());
  eachKeyEachAxis(ecModel, function (perKeyPerAxis, axisStatKey, axisModelUid) {
    var ecPrepareCachePerKey = ecPrepareCacheKeyed.get(axisStatKey) || ecPrepareCacheKeyed.set(axisStatKey, (0,zrender_lib_core_util_js__rspack_import_2.createHashMap)());
    var ecPreparePerKeyPerAxis = ecPrepareCachePerKey.get(axisModelUid) || ecPrepareCachePerKey.set(axisModelUid, {});
    if (perKeyPerAxis.metrics.liPosMinGap) {
      // We should assert the impl exists -- fail-fast if missing `registerMetricImpl`.
      _metricImpl.liPosMinGap(ecModel, perKeyPerAxis, ecPreparePerKeyPerAxis);
    }
  });
}
// To reduce code size from unnecessary metrics.
function registerMetricImpl(metricType, impl) {
  _metricImpl[metricType] = impl;
}
var _metricImpl = {};
/**
 * NOTICE:
 *  - It must be called in `CoordinateSystem['create']`, before series filtering.
 *  - It must be called in `seriesIndex` ascending order (series declaration order).
 *    i.e., iterated by `ecModel.eachSeries`.
 *  - Every <axis, series> pair can only call this method once.
 *
 * @see scaleRawExtentInfoCreate in `scaleRawExtentInfo.ts`
 */
function associateSeriesWithAxis(axis, seriesModel, coordSysType) {
  if (!axis) {
    return;
  }
  var ecModel = seriesModel.ecModel;
  var ecFullUpdateCache = ecModelCacheFullUpdateInner((0,_util_cycleCache_js__rspack_import_1.getCachePerECFullUpdate)(ecModel));
  var axisModelUid = axis.model.uid;
  if (false) { var axSerPairCheck, pairKey }
  var seriesOnAxisMap = ecFullUpdateCache.axSer || (ecFullUpdateCache.axSer = (0,zrender_lib_core_util_js__rspack_import_2.createHashMap)());
  var seriesListPerAxis = seriesOnAxisMap.get(axisModelUid) || seriesOnAxisMap.set(axisModelUid, []);
  if (false) { var lastSeries }
  seriesListPerAxis.push(seriesModel);
  var seriesType = seriesModel.subType;
  var isBaseAxis = seriesModel.getBaseAxis() === axis;
  var client = clientsForLookup.get(makeClientLookupKey(seriesType, isBaseAxis, coordSysType)) || clientsForLookup.get(makeClientLookupKey(seriesType, isBaseAxis, null));
  if (!client) {
    return;
  }
  var keyed = ecFullUpdateCache.keyed || (ecFullUpdateCache.keyed = (0,zrender_lib_core_util_js__rspack_import_2.createHashMap)());
  var keys = ecFullUpdateCache.keys || (ecFullUpdateCache.keys = (0,zrender_lib_core_util_js__rspack_import_2.createHashMap)());
  var axisStatKey = client.key;
  var perKey = keyed.get(axisStatKey) || keyed.set(axisStatKey, (0,zrender_lib_core_util_js__rspack_import_2.createHashMap)());
  var perKeyPerAxis = perKey.get(axisModelUid);
  if (!perKeyPerAxis) {
    perKeyPerAxis = perKey.set(axisModelUid, {
      axis: axis,
      sers: [],
      serByIdx: []
    });
    // They should only be executed for each <key, axis> pair once:
    perKeyPerAxis.metrics = client.getMetrics(axis);
    (keys.get(axisModelUid) || keys.set(axisModelUid, [])).push(axisStatKey);
  }
  // series order should respect to the input order.
  perKeyPerAxis.sers.push(seriesModel);
  perKeyPerAxis.serByIdx[seriesModel.seriesIndex] = seriesModel;
}
/**
 * NOTE: Currently, the scenario is simple enough to look up clients by hash map.
 * Otherwise, a caller-provided `filter` may be an alternative if more complex requirements arise.
 */
function makeClientLookupKey(seriesType, isBaseAxis, coordSysType) {
  return seriesType + AXIS_STAT_KEY_DELIMITER + (0,zrender_lib_core_util_js__rspack_import_2.retrieve2)(isBaseAxis, true) + AXIS_STAT_KEY_DELIMITER + (coordSysType || '');
}
/**
 * NOTICE: Can only be called in "install" stage.
 *
 * See `axisSnippets.ts` for some commonly used clients.
 */
function requireAxisStatistics(registers, client) {
  var clientKey = makeClientLookupKey(client.seriesType, client.baseAxis, client.coordSysType);
  if (false) {}
  clientsForLookup.set(clientKey, client);
  callOnlyOnce(registers, function () {
    registers.registerProcessor(registers.PRIORITY.PROCESSOR.AXIS_STATISTICS, {
      // NOTE: Theoretically, `appendData` requires `dirtyOnOverallProgress: true` here to re-calculate them.
      // But this OVERALL_STAGE_TASK is applied to all series (no `getTargetSeries` specified),
      // `dirtyOnOverallProgress: true` can cause irrelevant series (e.g., series on geo)
      // to be re-rendered when `appendData` is called, which cause `appendData` meaningless,
      // thereby not setting `dirtyOnOverallProgress: true`.
      overallReset: performAxisStatisticsOnOverallReset
    });
  });
}
var clientsForCheckingStatKey;
if (false) {}
var clientsForLookup = (0,zrender_lib_core_util_js__rspack_import_2.createHashMap)();
__webpack_require__.d(__webpack_exports__, {
}, {
  AXIS_STAT_KEY_DELIMITER: AXIS_STAT_KEY_DELIMITER,
  LINEAR_POSITIVE_MIN_GAP_NO_VALID_VALUE: LINEAR_POSITIVE_MIN_GAP_NO_VALID_VALUE,
  LINEAR_POSITIVE_MIN_GAP_SINGLE_VALID_VALUE: LINEAR_POSITIVE_MIN_GAP_SINGLE_VALID_VALUE,
  associateSeriesWithAxis: associateSeriesWithAxis,
  countSeriesOnAxisOnKey: countSeriesOnAxisOnKey,
  eachAxisOnKey: eachAxisOnKey,
  eachKeyOnAxis: eachKeyOnAxis,
  eachSeriesDealForAxisStat: eachSeriesDealForAxisStat,
  eachSeriesOnAxis: eachSeriesOnAxis,
  eachSeriesOnAxisOnKey: eachSeriesOnAxisOnKey,
  getAxisStat: getAxisStat,
  getAxisStatBySeries: getAxisStatBySeries,
  registerMetricImpl: registerMetricImpl,
  requireAxisStatistics: requireAxisStatistics
});


}),
25972: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var zrender_lib_core_util_js__rspack_import_1 = __webpack_require__(75275);
/* import */ var _util_number_js__rspack_import_4 = __webpack_require__(46823);
/* import */ var _data_helper_dataValueHelper_js__rspack_import_2 = __webpack_require__(94276);
/* import */ var _util_vendor_js__rspack_import_3 = __webpack_require__(66827);
/* import */ var _axisStatistics_js__rspack_import_0 = __webpack_require__(84287);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/





function registerMetricImplLiPosMinGap() {
  (0,_axisStatistics_js__rspack_import_0.registerMetricImpl)('liPosMinGap', metricLiPosMinGapImpl);
}
function metricLiPosMinGapImpl(ecModel, perKeyPerAxis, ecPreparePerKeyPerAxis) {
  var newSerUids = (0,zrender_lib_core_util_js__rspack_import_1.createHashMap)();
  var ecPrepareSerUids = ecPreparePerKeyPerAxis.serUids;
  var ecPrepareLiPosMinGap = ecPreparePerKeyPerAxis.liPosMinGap;
  var ecPrepareCacheMiss;
  var axis = perKeyPerAxis.axis;
  var scale = axis.scale;
  // const linearValueExtent = initExtentForUnion();
  var needTransform = scale.needTransform();
  var filter = scale.getFilter ? scale.getFilter() : null;
  var filterParsed = (0,_data_helper_dataValueHelper_js__rspack_import_2.parseSanitizationFilter)(filter);
  // const timeRetrieve: number[] = []; // _EC_PERF_
  // const timeSort: number[] = []; // _EC_PERF_
  // const timeAll: number[] = []; // _EC_PERF_
  // timeAll[0] = Date.now(); // _EC_PERF_
  function eachSeries(cb) {
    (0,_axisStatistics_js__rspack_import_0.eachSeriesDealForAxisStat)(ecModel, perKeyPerAxis.sers, function (seriesModel) {
      var rawData = seriesModel.getRawData();
      // NOTE: Currently there is no series that a "base axis" can map to multiple dimensions.
      var dimStoreIdx = rawData.getDimensionIndex(rawData.mapDimension(axis.dim));
      if (dimStoreIdx >= 0) {
        cb(dimStoreIdx, seriesModel, rawData.getStore());
      }
    });
  }
  var bufferCapacity = 0;
  eachSeries(function (dimStoreIdx, seriesModel, rawDataStore) {
    newSerUids.set(seriesModel.uid, 1);
    if (!ecPrepareSerUids || !ecPrepareSerUids.hasKey(seriesModel.uid)) {
      ecPrepareCacheMiss = true;
    }
    bufferCapacity += rawDataStore.count();
  });
  if (!ecPrepareSerUids || ecPrepareSerUids.keys().length !== newSerUids.keys().length) {
    ecPrepareCacheMiss = true;
  }
  if (!ecPrepareCacheMiss && ecPrepareLiPosMinGap != null) {
    // Consider the fact in practice:
    //  - Series data can only be changed in EC_PREPARE.
    //  - The relationship between series and axes can only be changed in EC_PREPARE and
    //    SERIES_FILTER.
    //  (See EC_CYCLE for more info)
    // Therefore, some statistics results can be cached in `GlobalModelCachePerECPrepare` to avoid
    // repeated time-consuming calculation for large data (e.g., over 1e5 data items).
    perKeyPerAxis.liPosMinGap = ecPrepareLiPosMinGap;
    return;
  }
  (0,_util_vendor_js__rspack_import_3.tryEnsureTypedArray)(tmpValueBuffer, bufferCapacity);
  // timeRetrieve[0] = Date.now(); // _EC_PERF_
  var writeIdx = 0;
  eachSeries(function (dimStoreIdx, seriesModel, store) {
    // NOTE: It appears to be optimized by traveling only in a specific window (e.g., the current window)
    // instead of the entire data, but that would likely generate inconsistent result and bring
    // jitter when dataZoom roaming.
    for (var i = 0, cnt = store.count(); i < cnt; ++i) {
      // Manually inline some code for performance, since no other optimization
      // (such as, progressive) can be applied here.
      var val = store.get(dimStoreIdx, i);
      // NOTE: in most cases, filter does not exist.
      if (isFinite(val) && (!filter || (0,_data_helper_dataValueHelper_js__rspack_import_2.passesSanitizationFilter)(filterParsed, val))) {
        if (needTransform) {
          // PENDING: time-consuming if axis break is applied.
          val = scale.transformIn(val, null);
        }
        tmpValueBuffer.arr[writeIdx++] = val;
        // val < linearValueExtent[0] && (linearValueExtent[0] = val);
        // val > linearValueExtent[1] && (linearValueExtent[1] = val);
      }
    }
  });
  // Indicatively, retrieving values above costs 40ms for 1e6 values in a certain platform.
  // timeRetrieve[1] = Date.now(); // _EC_PERF_
  var tmpValueBufferView = tmpValueBuffer.typed ? tmpValueBuffer.arr.subarray(0, writeIdx) : (tmpValueBuffer.arr.length = writeIdx, tmpValueBuffer.arr);
  // timeSort[0] = Date.now(); // _EC_PERF_
  // Sort axis values into ascending order to calculate gaps.
  if (tmpValueBuffer.typed) {
    // Indicatively, 5ms for 1e6 values in a certain platform.
    tmpValueBufferView.sort();
  } else {
    (0,_util_number_js__rspack_import_4.asc)(tmpValueBufferView);
  }
  // timeAll[1] = timeSort[1] = Date.now(); // _EC_PERF_
  // console.log('axisStatistics_minGap_retrieve', timeRetrieve[1] - timeRetrieve[0]); // _EC_PERF_
  // console.log('axisStatistics_minGap_sort', timeSort[1] - timeSort[0]); // _EC_PERF_
  // console.log('axisStatistics_minGap_all', timeAll[1] - timeAll[0]); // _EC_PERF_
  var min = Infinity;
  for (var j = 1; j < writeIdx; ++j) {
    var delta = tmpValueBufferView[j] - tmpValueBufferView[j - 1];
    if (
    // - Different series normally have the same values (e.g., barA, barB, barC),
    //   which should be ignored.
    // - A single series with multiple same values is often not meaningful to
    //   create `bandWidth`, so it is also ignored.
    delta > 0 && delta < min) {
      min = delta;
    }
  }
  ecPreparePerKeyPerAxis.liPosMinGap = perKeyPerAxis.liPosMinGap = (0,_util_number_js__rspack_import_4.isNullableNumberFinite)(min) ? min : writeIdx > 0 ? _axisStatistics_js__rspack_import_0.LINEAR_POSITIVE_MIN_GAP_SINGLE_VALID_VALUE : _axisStatistics_js__rspack_import_0.LINEAR_POSITIVE_MIN_GAP_NO_VALID_VALUE;
  ecPreparePerKeyPerAxis.serUids = newSerUids;
}
// For performance optimization.
var tmpValueBuffer = (0,_util_vendor_js__rspack_import_3.tryEnsureTypedArray)({
  ctor: _util_vendor_js__rspack_import_3.Float64ArrayCtor
}, 50 // An arbitrary initial capability.
);
__webpack_require__.d(__webpack_exports__, {
}, {
  registerMetricImplLiPosMinGap: registerMetricImplLiPosMinGap
});


}),
49876: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var zrender_lib_core_util_js__rspack_import_1 = __webpack_require__(75275);
/* import */ var zrender_lib_contain_text_js__rspack_import_4 = __webpack_require__(21985);
/* import */ var _util_model_js__rspack_import_0 = __webpack_require__(53781);
/* import */ var _axisHelper_js__rspack_import_2 = __webpack_require__(72460);
/* import */ var _util_number_js__rspack_import_3 = __webpack_require__(46823);
/* import */ var _scale_helper_js__rspack_import_5 = __webpack_require__(45620);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
/**
 * CAUTION: Do not modify the result.
 */
function createAxisLabels(axis, ctx) {
  var custom = axis.getLabelModel().get('customValues');
  if (custom) {
    var scale_1 = axis.scale;
    return {
      labels: zrender_lib_core_util_js__rspack_import_1.map(parseTickLabelCustomValues(custom, scale_1), function (tick, index) {
        return {
          formattedLabel: (0,_axisHelper_js__rspack_import_2.makeLabelFormatter)(axis)(tick, index),
          rawLabel: scale_1.getLabel(tick),
          tick: tick
        };
      })
    };
  }
  // Only ordinal scale support tick interval
  return axis.type === 'category' ? makeCategoryLabels(axis, ctx) : makeRealNumberLabels(axis);
}
/**
 * CAUTION: Do not modify the result.
 *
 * @param tickModel For example, can be axisTick, splitLine, splitArea.
 */
function createAxisTicks(axis, tickModel, opt) {
  var scale = axis.scale;
  var custom = axis.getTickModel().get('customValues');
  if (custom) {
    return {
      ticks: parseTickLabelCustomValues(custom, scale)
    };
  }
  // Only ordinal scale support tick interval
  return axis.type === 'category' ? makeCategoryTicks(axis, tickModel) : {
    ticks: scale.getTicks(opt)
  };
}
function parseTickLabelCustomValues(customValues, scale) {
  var extent = scale.getExtent();
  var tickNumbers = [];
  zrender_lib_core_util_js__rspack_import_1.each(customValues, function (val) {
    val = scale.parse(val);
    if (val >= extent[0] && val <= extent[1]) {
      tickNumbers.push(val);
    }
  });
  (0,_util_model_js__rspack_import_0.removeDuplicates)(tickNumbers, _util_model_js__rspack_import_0.removeDuplicatesGetKeyFromItemItself, null);
  (0,_util_number_js__rspack_import_3.asc)(tickNumbers);
  return zrender_lib_core_util_js__rspack_import_1.map(tickNumbers, function (tickVal) {
    return {
      value: tickVal
    };
  });
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
    labels = makeTicksLabelsByCategoryIntervalNumOrCb(axis, optionLabelInterval, false);
  } else {
    numericLabelInterval = optionLabelInterval === 'auto' ? makeAutoCategoryInterval(axis, ctx) : optionLabelInterval;
    labels = makeTicksLabelsByCategoryIntervalNumOrCb(axis, numericLabelInterval, false);
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
    ticks = makeTicksLabelsByCategoryIntervalNumOrCb(axis, optionTickInterval, true);
  }
  // Always use label interval by default despite label show. Consider this
  // scenario, Use multiple grid with the xAxis sync, and only one xAxis shows
  // labels. `splitLine` and `axisTick` should be consistent in this case.
  else if (optionTickInterval === 'auto') {
    var labelsResult = makeCategoryLabelsActually(axis, axis.getLabelModel(), createAxisLabelsComputingContext(AxisTickLabelComputingKind.determine));
    tickCategoryInterval = labelsResult.labelCategoryInterval;
    ticks = zrender_lib_core_util_js__rspack_import_1.map(labelsResult.labels, function (labelItem) {
      return labelItem.tick;
    });
  } else {
    tickCategoryInterval = optionTickInterval;
    ticks = makeTicksLabelsByCategoryIntervalNumOrCb(axis, tickCategoryInterval, true);
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
        tick: tick
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
 * Use a strategy to try to avoid overlapping.
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
    var rect = zrender_lib_contain_text_js__rspack_import_4.getBoundingRect(labelFormatter({
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
function makeTicksLabelsByCategoryIntervalNumOrCb(axis, categoryInterval, onlyTick) {
  var labelFormatter = (0,_axisHelper_js__rspack_import_2.makeLabelFormatter)(axis);
  var ordinalScale = axis.scale;
  var result = [];
  var categoryIntervalIsCb = zrender_lib_core_util_js__rspack_import_1.isFunction(categoryInterval);
  (0,_scale_helper_js__rspack_import_5.ordinalScaleCreateTicks)(ordinalScale, categoryIntervalIsCb ? 0 : categoryInterval, function (tickObj, isExtentBoundary) {
    var tickLabel = ordinalScale.getLabel(tickObj);
    if (categoryIntervalIsCb) {
      // When interval is function, a falsy return means ignore the tick.
      // It is time consuming for large category data.
      var isOnInterval = !!categoryInterval(tickObj.value, tickLabel);
      tickObj.offInterval = !isOnInterval;
      // axis extent min max labels should be always included and the display strategy
      // is adopted uniformly later in `AxisBuilder`.
      if (!isOnInterval && !isExtentBoundary) {
        return;
      }
    }
    result.push(onlyTick ? tickObj : {
      formattedLabel: labelFormatter(tickObj),
      rawLabel: tickLabel,
      tick: tickObj
    });
  });
  return result;
}
__webpack_require__.d(__webpack_exports__, {
}, {
  AxisTickLabelComputingKind: AxisTickLabelComputingKind,
  calculateCategoryInterval: calculateCategoryInterval,
  createAxisLabels: createAxisLabels,
  createAxisLabelsComputingContext: createAxisLabelsComputingContext,
  createAxisTicks: createAxisTicks
});


}),
43716: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var zrender_lib_core_util_js__rspack_import_1 = __webpack_require__(75275);
/* import */ var _util_layout_js__rspack_import_2 = __webpack_require__(29268);
/* import */ var _util_number_js__rspack_import_0 = __webpack_require__(46823);
/* import */ var zrender_lib_core_BoundingRect_js__rspack_import_3 = __webpack_require__(93689);
/* import */ var _util_graphic_js__rspack_import_4 = __webpack_require__(90088);
/* import */ var _core_CoordinateSystem_js__rspack_import_5 = __webpack_require__(31712);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
67547: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var tslib__rspack_import_1 = __webpack_require__(2492);
/* import */ var zrender_lib_core_util_js__rspack_import_4 = __webpack_require__(75275);
/* import */ var _model_Component_js__rspack_import_0 = __webpack_require__(23074);
/* import */ var _util_layout_js__rspack_import_2 = __webpack_require__(29268);
/* import */ var _visual_tokens_js__rspack_import_3 = __webpack_require__(5888);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
9844: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
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
__webpack_require__.d(__webpack_exports__, {
}, {
  "default": calendarPrepareCustom
});


}),
84045: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var tslib__rspack_import_1 = __webpack_require__(2492);
/* import */ var _Axis_js__rspack_import_0 = __webpack_require__(70808);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
30842: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var tslib__rspack_import_1 = __webpack_require__(2492);
/* import */ var zrender_lib_core_util_js__rspack_import_3 = __webpack_require__(75275);
/* import */ var _model_Component_js__rspack_import_0 = __webpack_require__(23074);
/* import */ var _axisModelCommonMixin_js__rspack_import_4 = __webpack_require__(59417);
/* import */ var _util_model_js__rspack_import_2 = __webpack_require__(53781);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
__webpack_require__.d(__webpack_exports__, {
}, {
  CartesianAxisModel: CartesianAxisModel
});


}),
89565: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ cartesian_Grid; },
  registerLegacyGridContainLabelImpl: function() { return /* binding */ registerLegacyGridContainLabelImpl; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.1.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(75275);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/util/layout.js
var layout = __webpack_require__(29268);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/axisHelper.js
var axisHelper = __webpack_require__(72460);
// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(2492);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.1.0/node_modules/zrender/lib/core/BoundingRect.js
var BoundingRect = __webpack_require__(93689);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/cartesian/Cartesian.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/cartesian/GridModel.js
var GridModel = __webpack_require__(65345);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.1.0/node_modules/zrender/lib/core/matrix.js
var matrix = __webpack_require__(51938);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.1.0/node_modules/zrender/lib/core/vector.js
var vector = __webpack_require__(69884);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/scale/scaleMapper.js
var scaleMapper = __webpack_require__(76077);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/scale/break.js
var scale_break = __webpack_require__(9017);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/cartesian/Cartesian2D.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  // Only supported on linear space.
  return (scale.type === 'interval' || scale.type === 'time') && !(0,scale_break.hasBreaks)(scale);
}
var Cartesian2D_Cartesian2D = /** @class */function (_super) {
  (0,tslib_es6.__extends)(Cartesian2D, _super);
  function Cartesian2D() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = GridModel.COORD_SYS_TYPE_CARTESIAN_2D;
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
    var xScaleExtent = (0,scaleMapper.getScaleExtentForMappingUnsafe)(xAxisScale, null);
    var yScaleExtent = (0,scaleMapper.getScaleExtentForMappingUnsafe)(yAxisScale, null);
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
   * Base axis will be used on stacking and series such as 'bar', 'pictorialBar', etc.
   */
  Cartesian2D.prototype.getBaseAxis = function () {
    // FIXME:
    //  (1) We should allow series (e.g., bar) to specify a base axis when
    //      both axes are type "value", rather than force to xAxis or angleAxis.
    //      NOTE: At present BoxplotSeries has its own overide `getBaseAxis`.
    //      `CoordinateSystem['getBaseAxis']` probably should not exist, since it
    //      may introduce inconsistency with `Series['getBaseAxis']`.
    //  (2) "base axis" info is required in "createSeriesData" stage for "stack",
    //      (see `dataStackHelper.ts` for details). Currently it is hard coded there.
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
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/cartesian/Axis2D.js
var Axis2D = __webpack_require__(84045);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/util/model.js
var model = __webpack_require__(53781);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/cartesian/cartesianAxisHelper.js
var cartesianAxisHelper = __webpack_require__(3235);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/scale/helper.js
var helper = __webpack_require__(45620);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/axisAlignTicks.js
var axisAlignTicks = __webpack_require__(75813);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/util/graphic.js
var graphic = __webpack_require__(90088);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/component/axis/AxisBuilder.js
var AxisBuilder = __webpack_require__(92237);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/axisTickLabelBuilder.js
var axisTickLabelBuilder = __webpack_require__(49876);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/core/CoordinateSystem.js
var CoordinateSystem = __webpack_require__(31712);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(46823);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/axisNiceTicks.js
var axisNiceTicks = __webpack_require__(85931);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/data/helper/SeriesDataSchema.js
var SeriesDataSchema = __webpack_require__(23619);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/scaleRawExtentInfo.js
var scaleRawExtentInfo = __webpack_require__(94385);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/axisStatistics.js
var axisStatistics = __webpack_require__(84287);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/cartesian/Grid.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
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
    (0,util.each)(this._axesList, function (axis) {
      (0,scaleRawExtentInfo.scaleRawExtentInfoCreate)(axis, scaleRawExtentInfo.AXIS_EXTENT_INFO_BUILD_FROM_COORD_SYS_UPDATE);
      var scale = axis.scale;
      if ((0,helper.isOrdinalScale)(scale)) {
        scale.setSortInfo(axis.model.get('categorySortInfo'));
      }
    });
    function updateAxisTicks(axes) {
      // Axis is added in order of axisIndex.
      var axesIndices = (0,util.keys)(axes);
      var axisNeedsAlign = [];
      for (var i = axesIndices.length - 1; i >= 0; i--) {
        // Reverse order
        var axis = axes[+axesIndices[i]];
        if (axis.__alignTo) {
          axisNeedsAlign.push(axis);
        } else {
          (0,axisNiceTicks.scaleCalcNice)(axis);
        }
      }
      ;
      (0,util.each)(axisNeedsAlign, function (axis) {
        if (incapableOfAlignNeedFallback(axis, axis.__alignTo)) {
          (0,axisNiceTicks.scaleCalcNice)(axis);
        } else {
          (0,axisAlignTicks.scaleCalcAlign)(axis, axis.__alignTo.scale);
        }
      });
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
    // NOTE: The axis pixel extent is also required by some estimation, e.g., in coord sys update stage,
    // bars on 'time'/'value' axis need it to calculate the supplementary scale extent to avoid edge bars
    // overflowing the axis (see `barGrid.ts`). Therefore, axis pixel extent need to be set early, even
    // may not be accurate.
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
      (0,util.each)(this._coordsList, function (coord) {
        // Calculate affine matrix to accelerate the data to point transform.
        // If all the axes scales are time or value.
        coord.calcAffineTransform();
      });
    } // End of beforeDataProcessing
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
    var xAxisModel = finder.xAxisModel || seriesModel && seriesModel.getReferringComponents('xAxis', model.SINGLE_REFERRING).models[0];
    var yAxisModel = finder.yAxisModel || seriesModel && seriesModel.getReferringComponents('yAxis', model.SINGLE_REFERRING).models[0];
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
    prepareAlignToInCoordSysCreate(axesMap.x);
    prepareAlignToInCoordSysCreate(axesMap.y);
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
        var axisType = (0,axisHelper.determineAxisType)(axisModel);
        var axis = new Axis2D["default"](dimName, (0,axisHelper.createScaleByModel)(axisModel, axisType, true), [0, 0], axisType, axisPosition);
        axis.onBand = (0,axisHelper.isAxisOnBand)(axis.scale, axisModel);
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
      (0,util.each)(grid._axesList, function (axis) {
        (0,scaleRawExtentInfo.scaleRawExtentInfoEnableBoxCoordSysUsage)(axis, Grid.dimIdxMap);
      });
    });
    // Inject the coordinateSystems into seriesModel
    ecModel.eachSeries(function (seriesModel) {
      var xAxis;
      var yAxis;
      (0,CoordinateSystem.injectCoordSysByOption)({
        targetModel: seriesModel,
        coordSysType: GridModel.COORD_SYS_TYPE_CARTESIAN_2D,
        coordSysProvider: coordSysProvider
      });
      function coordSysProvider() {
        var axesModelMap = (0,cartesianAxisHelper.findAxisModels)(seriesModel);
        var xAxisModel = axesModelMap.xAxisModel;
        var yAxisModel = axesModelMap.yAxisModel;
        xAxis = xAxisModel.axis;
        yAxis = yAxisModel.axis;
        var gridModel = xAxisModel.getCoordSysModel();
        if (false) {}
        var grid = gridModel.coordinateSystem;
        return grid.getCartesian(xAxisModel.componentIndex, yAxisModel.componentIndex);
      }
      if (xAxis && yAxis) {
        (0,axisStatistics.associateSeriesWithAxis)(xAxis, seriesModel, GridModel.COORD_SYS_TYPE_CARTESIAN_2D);
        (0,axisStatistics.associateSeriesWithAxis)(yAxis, seriesModel, GridModel.COORD_SYS_TYPE_CARTESIAN_2D);
      }
    }, this);
    return grids;
  };
  // For deciding which dimensions to use when creating list data
  Grid.dimensions = cartesian2DDimensions;
  Grid.dimIdxMap = (0,SeriesDataSchema.createDimNameMap)(cartesian2DDimensions);
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
  // For historical reason, ec option `axisLine.onZero: undefined` leads to "not on zero"
  // while leaving `axisLine.onZero` unspecified causes "on zero". This inconsistency goes
  // against common sense, but is preserved for backward compatibility.
  if (!onZero) {
    return;
  }
  // If target axis is specified.
  if (onZeroAxisIndex != null) {
    if (canOnZeroToAxis(onZero, otherAxes[onZeroAxisIndex])) {
      otherAxisOnZeroOf = otherAxes[onZeroAxisIndex];
    }
  } else {
    // Find the first available other axis.
    for (var idx in otherAxes) {
      if ((0,util.hasOwn)(otherAxes, idx) && canOnZeroToAxis(onZero, otherAxes[idx])
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
/**
 * CAVEAT: Must not be called before `CoordinateSystem#update` due to `__dontOnMyZero`.
 */
function canOnZeroToAxis(onZeroOption, axis) {
  if (!axis) {
    return false;
  }
  var scale = axis.scale;
  var kindEffective = (0,axisHelper.getScaleValuePositionKind)(scale, 0, false);
  var can = axis
  // PENDING: Historical behavior: `onZero` on 'category' and 'time' axis are always disabled
  // even if ec option gives `onZero: true`.
  && axis.type !== 'category' && axis.type !== 'time'
  // NOTE: Although the portion out of "effective" portion may also cross zero
  // (see `SCALE_EXTENT_KIND_MAPPING`), that is commonly meaningless, so we use
  // `SCALE_EXTENT_KIND_EFFECTIVE`
  && kindEffective !== axisHelper.SCALE_VALUE_POSITION_KIND_OUTSIDE;
  if (can && onZeroOption === 'auto'
  // Historically, "value" axis and "log" axis has been using `onZero: true` as the default.
  // It suitable for mathematic cases, even when dataZoom exists (e.g., `clip.html`), or cases
  // need to distinguish positive and negative data. However, it probably causes odd effect if
  // a "value axis" is laid on zero of a "base axis" in bar/candlestick, where the axis line
  // would likely cross shapes when `SCALE_EXTENT_KIND_MAPPING` is applied.
  // Therefore, we preserve backward compatibility of the default `onZero: true`, but exclude
  // cases that `containShape` is applied.
  && (0,axisHelper.isOnAxisZeroDiscouraged)(axis)
  // || (
  //     // Avoid axis line cross series shape (typically, bar series on "value"/"time" axis) unexpectedly.
  //     kindEffective === SCALE_VALUE_POSITION_KIND_EDGE
  //     && getScaleValuePositionKind(scale, 0, true) === SCALE_VALUE_POSITION_KIND_INSIDE
  // )
  ) {
    can = false;
  }
  // falsy value of `onZeroOption` has been handled in the previous logic.
  return can;
}
/**
 * [CAVEAT] This method is called before data processing stage.
 *  Do not rely on any info that is determined afterward.
 */
function prepareAlignToInCoordSysCreate(axes) {
  // Axis is added in order of axisIndex.
  var axesIndices = (0,util.keys)(axes);
  var alignTo;
  var axisNeedsAlign = [];
  for (var i = axesIndices.length - 1; i >= 0; i--) {
    // Reverse order
    var axis = axes[+axesIndices[i]];
    if ((0,helper.isIntervalOrLogScale)(axis.scale)
    // NOTE: `scale.hasBreaks()` is not available at this moment. Check it later.
    && (0,axisHelper.retrieveAxisBreaksOption)(axis.model, axis.type, true) == null
    // NOTE: `scale.getTicks()` is not available at this moment. Check it later.
    ) {
      // Request `alignTicks`.
      if (axis.model.get('alignTicks') && axis.model.get('interval') == null) {
        axisNeedsAlign.push(axis);
      } else {
        // `alignTo` the last one that does not request `alignTicks`
        // (This rule is retained for backward compat).
        alignTo = axis;
      }
    }
  }
  ;
  // If all axes has set alignTicks, pick the first one as alignTo.
  // PENDING. Should we find the axis that both set interval, min, max and align to this one?
  // PENDING. Should we allow specifying alignTo via ec option?
  if (!alignTo) {
    alignTo = axisNeedsAlign.pop();
  }
  if (alignTo) {
    (0,util.each)(axisNeedsAlign, function (axis) {
      axis.__alignTo = alignTo;
    });
  }
}
/**
 * This is just a defence code. They are unlikely to be actually `true`,
 * since these cases have been addressed in `prepareAlignToInCoordSysCreate`.
 *
 * Can not be called BEFORE "nice" performed.
 */
function incapableOfAlignNeedFallback(targetAxis, alignTo) {
  return (0,scale_break.hasBreaks)(targetAxis.scale) || (0,scale_break.hasBreaks)(alignTo.scale)
  // Normally ticks length are more than 2 even when axis is blank.
  // But still guard for corner cases and possible changes.
  || alignTo.scale.getTicks().length < 2;
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
          var proportion = axis.scale.normalize((0,axisHelper.getTickValueOutermost)(axis.scale, (0,AxisBuilder.getLabelInner)(labelInfo.label).labelInfo.tick));
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
function prepareOuterBounds(gridModel, rawGridRect, layoutRef) {
  var outerBoundsRect;
  var optionOuterBoundsMode = gridModel.get('outerBoundsMode', true);
  if (optionOuterBoundsMode === 'same') {
    outerBoundsRect = rawGridRect.clone();
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
  var outerBoundsClamp = [(0,number.parsePositionSizeOption)((0,util.retrieve2)(gridModel.get('outerBoundsClampWidth', true), GridModel.OUTER_BOUNDS_CLAMP_DEFAULT["0"]), rawGridRect.width), (0,number.parsePositionSizeOption)((0,util.retrieve2)(gridModel.get('outerBoundsClampHeight', true), GridModel.OUTER_BOUNDS_CLAMP_DEFAULT["1"]), rawGridRect.height)];
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
65345: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var tslib__rspack_import_1 = __webpack_require__(2492);
/* import */ var _model_Component_js__rspack_import_0 = __webpack_require__(23074);
/* import */ var _util_layout_js__rspack_import_2 = __webpack_require__(29268);
/* import */ var _visual_tokens_js__rspack_import_3 = __webpack_require__(5888);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
var COORD_SYS_TYPE_CARTESIAN_2D = 'cartesian2d';
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
__webpack_require__.d(__webpack_exports__, {
}, {
  COORD_SYS_TYPE_CARTESIAN_2D: COORD_SYS_TYPE_CARTESIAN_2D,
  OUTER_BOUNDS_CLAMP_DEFAULT: OUTER_BOUNDS_CLAMP_DEFAULT,
  OUTER_BOUNDS_DEFAULT: OUTER_BOUNDS_DEFAULT
});


}),
3235: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var zrender_lib_core_util_js__rspack_import_0 = __webpack_require__(75275);
/* import */ var _util_model_js__rspack_import_1 = __webpack_require__(53781);
/* import */ var _component_axis_AxisBuilder_js__rspack_import_3 = __webpack_require__(92237);
/* import */ var _scale_helper_js__rspack_import_2 = __webpack_require__(45620);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
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
function getCartesianAxisHashKey(axis) {
  return axis.dim + '_' + axis.index;
}
__webpack_require__.d(__webpack_exports__, {
}, {
  createCartesianAxisViewCommonPartBuilder: createCartesianAxisViewCommonPartBuilder,
  findAxisModels: findAxisModels,
  getCartesianAxisHashKey: getCartesianAxisHashKey,
  isCartesian2DDeclaredSeries: isCartesian2DDeclaredSeries,
  isCartesian2DInjectedAsDataCoordSys: isCartesian2DInjectedAsDataCoordSys,
  layout: layout,
  updateCartesianAxisViewCommonPartBuilder: updateCartesianAxisViewCommonPartBuilder
});


}),
46335: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var zrender_lib_core_BoundingRect_js__rspack_import_4 = __webpack_require__(93689);
/* import */ var zrender_lib_core_util_js__rspack_import_1 = __webpack_require__(75275);
/* import */ var _Grid_js__rspack_import_0 = __webpack_require__(89565);
/* import */ var _scale_Ordinal_js__rspack_import_2 = __webpack_require__(55575);
/* import */ var _axisHelper_js__rspack_import_3 = __webpack_require__(72460);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
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
  ;(0,zrender_lib_core_util_js__rspack_import_1.each)(axesList, function (axis) {
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
__webpack_require__.d(__webpack_exports__, {
}, {
  installLegacyGridContainLabel: installLegacyGridContainLabel
});


}),
35244: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var zrender_lib_core_util_js__rspack_import_0 = __webpack_require__(75275);
/* import */ var _axisBand_js__rspack_import_1 = __webpack_require__(37371);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
    return axis.type === 'category' ? (0,_axisBand_js__rspack_import_1.calcBandWidth)(axis).w : Math.abs(axis.dataToCoord(val - halfSize) - axis.dataToCoord(val + halfSize));
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
__webpack_require__.d(__webpack_exports__, {
}, {
  "default": cartesianPrepareCustom
});


}),
43173: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var tslib__rspack_import_1 = __webpack_require__(2492);
/* import */ var zrender_lib_core_util_js__rspack_import_6 = __webpack_require__(75275);
/* import */ var _util_model_js__rspack_import_4 = __webpack_require__(53781);
/* import */ var _model_Component_js__rspack_import_0 = __webpack_require__(23074);
/* import */ var _model_Model_js__rspack_import_7 = __webpack_require__(98899);
/* import */ var _geoCreator_js__rspack_import_5 = __webpack_require__(5585);
/* import */ var _geoSourceManager_js__rspack_import_2 = __webpack_require__(72224);
/* import */ var _visual_tokens_js__rspack_import_3 = __webpack_require__(5888);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  GeoModel.prototype.__ownRoamView = function () {
    return this.coordinateSystem.view;
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
59307: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var tslib__rspack_import_1 = __webpack_require__(2492);
/* import */ var zrender_lib_core_BoundingRect_js__rspack_import_3 = __webpack_require__(93689);
/* import */ var zrender_lib_core_vector_js__rspack_import_0 = __webpack_require__(69884);
/* import */ var zrender_lib_contain_polygon_js__rspack_import_4 = __webpack_require__(94674);
/* import */ var zrender_lib_core_matrix_js__rspack_import_5 = __webpack_require__(51938);
/* import */ var zrender_lib_core_util_js__rspack_import_2 = __webpack_require__(75275);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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

__webpack_require__.d(__webpack_exports__, {
}, {
  GeoJSONLineStringGeometry: GeoJSONLineStringGeometry,
  GeoJSONPolygonGeometry: GeoJSONPolygonGeometry,
  GeoJSONRegion: GeoJSONRegion,
  GeoSVGRegion: GeoSVGRegion,
  Region: Region
});


}),
5585: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ geo_geoCreator; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.1.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(75275);
// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(2492);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/View.js
var View = __webpack_require__(69796);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/geo/geoSourceManager.js + 5 modules
var geoSourceManager = __webpack_require__(72224);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/util/model.js
var util_model = __webpack_require__(53781);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.1.0/node_modules/zrender/lib/core/Transformable.js
var Transformable = __webpack_require__(9259);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/geo/Geo.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  (0,tslib_es6.__extends)(Geo, _super); // See VIEW_COORD_SYS_TRANS_OVERALL_BACKWARD_COMPATIBILITY
  function Geo(name, map, opt) {
    var _this = _super.call(this) || this;
    _this.dimensions = geo2DDimensions;
    _this.type = 'geo';
    // Only store specified name coord via `addGeoCoord`.
    _this._nameCoordMap = util.createHashMap();
    _this.name = name;
    var projection = opt.projection;
    var source = geoSourceManager["default"].load(map, opt.nameMap, opt.nameProperty);
    var resource = geoSourceManager["default"].getGeoResource(map);
    var resourceType = _this.resourceType = resource ? resource.type : null;
    var regions = _this.regions = source.regions;
    var defaultParams = GEO_DEFAULT_PARAMS[resource.type];
    _this._clip = opt.clip;
    // Not invert longitude if projection exits.
    var invertLongitute = projection ? false : defaultParams.invertLongitute;
    _this.view = new View["default"](invertLongitute, (0,View.useLegacyViewCoordSysCenterBase)(opt.ecModel, opt.api), _this);
    _this.map = map;
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
    (0,View.viewCoordSysSetBoundingRect)(_this.view, boundingRect.x, boundingRect.y, boundingRect.width, boundingRect.height);
    // aspectScale and invertLongitute actually is the parameters default raw projection.
    // So we ignore them if projection is given.
    // Ignore default aspect scale if projection exits.
    _this.aspectScale = projection ? 1 : util.retrieve2(opt.aspectScale, defaultParams.aspectScale);
    return _this;
  }
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
      return data && this.view.dataToPoint(data, noRoam, out);
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
    return point && this.view.pointToData(point, out);
  };
  Geo.prototype.convertToPixel = function (ecModel, finder, value) {
    var coordSys = getCoordSys(finder);
    return coordSys === this ? coordSys.dataToPoint(value) : null;
  };
  Geo.prototype.convertFromPixel = function (ecModel, finder, pixel) {
    var coordSys = getCoordSys(finder);
    return coordSys === this ? coordSys.pointToData(pixel) : null;
  };
  Geo.prototype.containPoint = function (point) {
    return this.view.containPoint(point);
  };
  Geo.prototype.getArea = function (tolerance) {
    tolerance = tolerance || 0;
    var rect = (0,View.viewCoordSysCopyViewRect)(null, this.view);
    rect.x -= tolerance;
    rect.y -= tolerance;
    rect.width += 2 * tolerance;
    rect.height += 2 * tolerance;
    return rect;
  };
  Geo.prototype.shouldClip = function () {
    return this._clip;
  };
  /**
   * @implements CoordinateSystem['getBoundingRect']
   */
  Geo.prototype.getBoundingRect = function () {
    return this.view.getBoundingRect();
  };
  /**
   * @implements CoordinateSystem['getViewRect']
   */
  Geo.prototype.getViewRect = function () {
    return this.view.getViewRect();
  };
  /**
   * @implements CoordinateSystem['getRoamTransform']
   */
  Geo.prototype.getRoamTransform = function () {
    return this.view.getRoamTransform();
  };
  return Geo;
}(Transformable["default"] // See VIEW_COORD_SYS_TRANS_OVERALL_BACKWARD_COMPATIBILITY
);
;
function getCoordSys(finder) {
  var geoModel = finder.geoModel;
  var seriesModel = finder.seriesModel;
  return geoModel ? geoModel.coordinateSystem : seriesModel ? seriesModel.coordinateSystem // For map series.
  || (seriesModel.getReferringComponents('geo', util_model.SINGLE_REFERRING).models[0] || {}).coordinateSystem : null;
}
/* export default */ var geo_Geo = (Geo_Geo);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/util/layout.js
var layout = __webpack_require__(29268);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(46823);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/chart/map/MapSeries.js
var MapSeries = __webpack_require__(6198);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.1.0/node_modules/zrender/lib/core/vector.js
var vector = __webpack_require__(69884);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/core/CoordinateSystem.js
var CoordinateSystem = __webpack_require__(31712);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/geo/geoCreator.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
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
  var viewCoordSys = this.view;
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
      (0,View.viewCoordSysSetBoundingRect)(viewCoordSys, leftTop_1[0], leftTop_1[1], rightBottom_1[0] - leftTop_1[0], rightBottom_1[1] - leftTop_1[1]);
    }
  }
  var rect = viewCoordSys.getBoundingRect();
  var centerOption = geoModel.get('layoutCenter');
  var sizeOption = geoModel.get('layoutSize');
  // Laying out geo on Cartesian works theoretically but not supported yet.
  // Currently, we only support to lay out on matrix/calendar.
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
  (0,View.viewCoordSysSetViewRect)(viewCoordSys, viewRect.x, viewRect.y, viewRect.width, viewRect.height);
  (0,View.viewCoordSysSetRoamOptionFromModel)(viewCoordSys, geoModel);
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
        projection: model.get('projection'),
        clip: model.getShallow('clip', true)
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
          var geoModel = seriesModel.subType === MapSeries.SERIES_TYPE_MAP ? seriesModel.getHostGeoModel() : seriesModel.getReferringComponents('geo', util_model.SINGLE_REFERRING).models[0];
          return geoModel && geoModel.coordinateSystem;
        },
        allowNotFound: true
      });
    });
    // If has map series
    util.each((0,MapSeries.buildAllMapSeriesGroups)(ecModel, true), function (mapSeriesGroup, groupKey) {
      if (!(0,MapSeries.mapSeriesGroupHasOwnGeo)(groupKey)) {
        return;
      }
      var firstDeclaredMapSeries = mapSeriesGroup.r[0];
      var nameMapList = [];
      util.each(mapSeriesGroup.r, function (mapSeries) {
        nameMapList.push(mapSeries.get('nameMap'));
        // MAP_SERIES_GROUP must not be set here, as series filtering is not performed.
        // Clear it first, including series to be filtered.
        mapSeries.seriesGroup = null;
      });
      var mapType = groupKey.slice(1);
      var geo = new geo_Geo(mapType, mapType, util.extend({
        nameMap: util.mergeAll(nameMapList),
        api: api,
        ecModel: ecModel
      }, getCommonGeoProperties(firstDeclaredMapSeries)));
      var scaleLimit;
      util.each(mapSeriesGroup.r, function (mapSeries) {
        scaleLimit = util.retrieve2(scaleLimit, mapSeries.get('scaleLimit'));
      });
      geoList.push(geo);
      // Inject resize method
      geo.resize = resizeGeo;
      geo.resize(firstDeclaredMapSeries, api);
      util.each(mapSeriesGroup.r, function (mapSeries) {
        mapSeries.coordinateSystem = geo;
        setGeoCoords(geo, mapSeries);
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
72224: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ geoSourceManager; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.1.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(75275);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.1.0/node_modules/zrender/lib/tool/parseSVG.js
var parseSVG = __webpack_require__(11247);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.1.0/node_modules/zrender/lib/graphic/Group.js
var Group = __webpack_require__(80111);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.1.0/node_modules/zrender/lib/graphic/shape/Rect.js + 1 modules
var Rect = __webpack_require__(67485);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.1.0/node_modules/zrender/lib/core/BoundingRect.js
var BoundingRect = __webpack_require__(93689);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.1.0/node_modules/zrender/lib/tool/parseXML.js
var parseXML = __webpack_require__(340);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/geo/Region.js
var Region = __webpack_require__(59307);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/geo/GeoSVGResource.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
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
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/geo/parseGeoJson.js
var parseGeoJson = __webpack_require__(72957);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/geo/fix/nanhai.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/geo/fix/textCoord.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/geo/fix/diaoyuIsland.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/geo/GeoJSONResource.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/geo/geoSourceManager.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
72957: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var zrender_lib_core_util_js__rspack_import_0 = __webpack_require__(75275);
/* import */ var _Region_js__rspack_import_1 = __webpack_require__(59307);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
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
__webpack_require__.d(__webpack_exports__, {
}, {
  "default": parseGeoJSON
});


}),
42583: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var zrender_lib_core_util_js__rspack_import_0 = __webpack_require__(75275);
/* import */ var _View_js__rspack_import_1 = __webpack_require__(69796);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  var viewCoordSys = coordSys.view;
  var rect = viewCoordSys.getBoundingRect();
  return {
    coordSys: {
      type: 'geo',
      x: rect.x,
      y: rect.y,
      width: rect.width,
      height: rect.height,
      zoom: (0,_View_js__rspack_import_1.viewCoordSysGetZoomOption)(viewCoordSys)
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
__webpack_require__.d(__webpack_exports__, {
}, {
  "default": geoPrepareCustom
});


}),
90758: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var _util_layout_js__rspack_import_1 = __webpack_require__(29268);
/* import */ var _util_model_js__rspack_import_4 = __webpack_require__(53781);
/* import */ var zrender_lib_core_util_js__rspack_import_3 = __webpack_require__(75275);
/* import */ var _util_graphic_js__rspack_import_5 = __webpack_require__(90088);
/* import */ var _model_Model_js__rspack_import_6 = __webpack_require__(98899);
/* import */ var _util_number_js__rspack_import_7 = __webpack_require__(46823);
/* import */ var _matrixCoordHelper_js__rspack_import_2 = __webpack_require__(34437);
/* import */ var _core_CoordinateSystem_js__rspack_import_0 = __webpack_require__(31712);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
// For quick performance optimization in pointToData.
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
67486: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  MatrixDimensionModel: function() { return /* binding */ MatrixModel_MatrixDimensionModel; },
  "default": function() { return /* binding */ matrix_MatrixModel; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(2492);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/model/Component.js
var Component = __webpack_require__(23074);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/model/Model.js + 2 modules
var Model = __webpack_require__(98899);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.1.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(75275);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.1.0/node_modules/zrender/lib/core/Point.js
var Point = __webpack_require__(45841);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/data/OrdinalMeta.js
var OrdinalMeta = __webpack_require__(32536);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/scale/Ordinal.js
var Ordinal = __webpack_require__(55575);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/util/graphic.js
var graphic = __webpack_require__(90088);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/util/model.js
var model = __webpack_require__(53781);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/matrix/matrixCoordHelper.js
var matrixCoordHelper = __webpack_require__(34437);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(46823);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/matrix/MatrixDim.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
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
    var length = dimModel.get('length', true);
    if (dimModelData != null && !(0,util.isArray)(dimModelData)) {
      if (false) {}
      dimModelData = [];
    }
    if (dimModelData) {
      this._initByDimModelData(dimModelData);
    } else if (length != null) {
      dimModelData = Array(length);
      for (var i = 0; i < length; i++) {
        dimModelData[i] = null;
      }
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/matrix/MatrixBodyCorner.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
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
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/visual/tokens.js
var tokens = __webpack_require__(5888);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/matrix/MatrixModel.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  },
  triggerEvent: false
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
34437: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var zrender_lib_core_util_js__rspack_import_1 = __webpack_require__(75275);
/* import */ var _util_graphic_js__rspack_import_0 = __webpack_require__(90088);
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
__webpack_require__.d(__webpack_exports__, {
}, {
  MatrixCellLayoutInfoType: MatrixCellLayoutInfoType,
  MatrixClampOption: MatrixClampOption,
  cloneXYLocatorRange: cloneXYLocatorRange,
  coordDataToAllCellLevelLayout: coordDataToAllCellLevelLayout,
  createNaNRectLike: createNaNRectLike,
  fillIdSpanFromLocatorRange: fillIdSpanFromLocatorRange,
  isXYLocatorRangeInvalidOnDim: isXYLocatorRangeInvalidOnDim,
  parseCoordRangeOption: parseCoordRangeOption,
  resetXYLocatorRange: resetXYLocatorRange,
  resolveXYLocatorRangeByCellMerge: resolveXYLocatorRangeByCellMerge,
  setDimXYValue: setDimXYValue,
  xyLocatorRangeToRectOneDim: xyLocatorRangeToRectOneDim
});


}),
66883: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
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
__webpack_require__.d(__webpack_exports__, {
}, {
  "default": matrixPrepareCustom
});


}),
4555: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var tslib__rspack_import_1 = __webpack_require__(2492);
/* import */ var zrender_lib_core_util_js__rspack_import_3 = __webpack_require__(75275);
/* import */ var _model_Component_js__rspack_import_0 = __webpack_require__(23074);
/* import */ var _model_mixin_makeStyleMapper_js__rspack_import_2 = __webpack_require__(65381);
/* import */ var _util_number_js__rspack_import_4 = __webpack_require__(46823);
/* import */ var _axisModelCommonMixin_js__rspack_import_5 = __webpack_require__(59417);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
65717: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var tslib__rspack_import_1 = __webpack_require__(2492);
/* import */ var zrender_lib_core_util_js__rspack_import_2 = __webpack_require__(75275);
/* import */ var _model_Component_js__rspack_import_0 = __webpack_require__(23074);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/



var COORD_SYS_TYPE_PARALLEL = 'parallel';
var COMPONENT_TYPE_PARALLEL = COORD_SYS_TYPE_PARALLEL;
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
  ParallelModel.type = COMPONENT_TYPE_PARALLEL;
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
__webpack_require__.d(__webpack_exports__, {
}, {
  COMPONENT_TYPE_PARALLEL: COMPONENT_TYPE_PARALLEL,
  COORD_SYS_TYPE_PARALLEL: COORD_SYS_TYPE_PARALLEL
});


}),
69053: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ parallelCreator; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.1.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(75275);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.1.0/node_modules/zrender/lib/core/matrix.js
var matrix = __webpack_require__(51938);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/util/layout.js
var util_layout = __webpack_require__(29268);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/axisHelper.js
var axisHelper = __webpack_require__(72460);
// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(2492);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/Axis.js
var Axis = __webpack_require__(70808);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/parallel/ParallelAxis.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/util/graphic.js
var graphic = __webpack_require__(90088);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(46823);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/component/helper/sliderMove.js
var sliderMove = __webpack_require__(56438);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/parallel/ParallelModel.js
var ParallelModel = __webpack_require__(65717);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/axisNiceTicks.js
var axisNiceTicks = __webpack_require__(85931);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/scaleRawExtentInfo.js
var scaleRawExtentInfo = __webpack_require__(94385);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/parallel/Parallel.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
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











var Parallel_Parallel = /** @class */function () {
  function Parallel(parallelModel, ecModel, api) {
    this.type = ParallelModel.COORD_SYS_TYPE_PARALLEL;
    /**
     * key: dimension
     */
    this._axesMap = (0,util.createHashMap)();
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
    (0,util.each)(dimensions, function (dim, idx) {
      var axisIndex = parallelAxisIndex[idx];
      var axisModel = ecModel.getComponent('parallelAxis', axisIndex);
      var axisType = axisHelper.determineAxisType(axisModel);
      var axis = this._axesMap.set(dim, new parallel_ParallelAxis(dim, axisHelper.createScaleByModel(axisModel, axisType, false), [0, 0], axisType, axisIndex));
      axis.onBand = axisHelper.isAxisOnBand(axis.scale, axisModel);
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
    (0,util.each)(this.dimensions, function (dim) {
      var axis = this._axesMap.get(dim);
      (0,scaleRawExtentInfo.scaleRawExtentInfoCreate)(axis, scaleRawExtentInfo.AXIS_EXTENT_INFO_BUILD_FROM_COORD_SYS_UPDATE);
      (0,axisNiceTicks.scaleCalcNice)(axis);
    }, this);
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
      var axisExpandCenter = parallelModel.get('axisExpandCenter') || (0,number.mathFloor)(axisCount / 2);
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
    var winInnerIndices = [(0,number.mathFloor)((0,number.round)(axisExpandWindow[0] / axisExpandWidth, 1)) + 1, (0,number.mathCeil)((0,number.round)(axisExpandWindow[1] / axisExpandWidth, 1)) - 1];
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
    (0,util.each)(dimensions, function (dim, idx) {
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
        horizontal: number.mathPI / 2,
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
    (0,util.each)(dimensions, function (axisDim) {
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
    return (0,util.clone)(this._axesLayout[dim]);
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
      axisExpandWindow = [(0,number.mathMax)(0, pos - winSize2 / 2)];
      axisExpandWindow[1] = (0,number.mathMin)(extent[1], axisExpandWindow[0] + winSize2);
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
  return (0,number.mathMin)((0,number.mathMax)(len, extent[0]), extent[1]);
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
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/util/model.js
var model = __webpack_require__(53781);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/axisStatistics.js
var axisStatistics = __webpack_require__(84287);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/parallel/parallelCreator.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/
/**
 * Parallel coordinate system creator.
 */





function createParallelCoordSys(ecModel, api) {
  var coordSysList = [];
  ecModel.eachComponent(ParallelModel.COMPONENT_TYPE_PARALLEL, function (parallelModel, idx) {
    var coordSys = new parallel_Parallel(parallelModel, ecModel, api);
    coordSys.name = 'parallel_' + idx;
    coordSys.resize(parallelModel, api);
    parallelModel.coordinateSystem = coordSys;
    coordSys.model = parallelModel;
    coordSysList.push(coordSys);
  });
  // Inject the coordinateSystems into seriesModel
  ecModel.eachSeries(function (seriesModel) {
    if (seriesModel.get('coordinateSystem') === ParallelModel.COORD_SYS_TYPE_PARALLEL) {
      var parallelModel = seriesModel.getReferringComponents(ParallelModel.COMPONENT_TYPE_PARALLEL, model.SINGLE_REFERRING).models[0];
      var parallel_1 = seriesModel.coordinateSystem = parallelModel.coordinateSystem;
      if (parallel_1) {
        (0,util.each)(parallel_1.dimensions, function (dim) {
          (0,axisStatistics.associateSeriesWithAxis)(parallel_1.getAxis(dim), seriesModel, ParallelModel.COORD_SYS_TYPE_PARALLEL);
        });
      }
    }
  });
  return coordSysList;
}
var parallelCoordSysCreator = {
  create: createParallelCoordSys
};
/* export default */ var parallelCreator = (parallelCoordSysCreator);

}),
55525: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var zrender_lib_core_util_js__rspack_import_0 = __webpack_require__(75275);
/* import */ var _util_model_js__rspack_import_1 = __webpack_require__(53781);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
__webpack_require__.d(__webpack_exports__, {
}, {
  "default": parallelPreprocessor
});


}),
2504: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var tslib__rspack_import_1 = __webpack_require__(2492);
/* import */ var zrender_lib_core_util_js__rspack_import_3 = __webpack_require__(75275);
/* import */ var _model_Component_js__rspack_import_0 = __webpack_require__(23074);
/* import */ var _axisModelCommonMixin_js__rspack_import_4 = __webpack_require__(59417);
/* import */ var _util_model_js__rspack_import_2 = __webpack_require__(53781);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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

__webpack_require__.d(__webpack_exports__, {
}, {
  AngleAxisModel: AngleAxisModel,
  PolarAxisModel: PolarAxisModel,
  RadiusAxisModel: RadiusAxisModel
});


}),
137: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var tslib__rspack_import_1 = __webpack_require__(2492);
/* import */ var _model_Component_js__rspack_import_0 = __webpack_require__(23074);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


var COORD_SYS_TYPE_POLAR = 'polar';
var COMPONENT_TYPE_POLAR = COORD_SYS_TYPE_POLAR;
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
  PolarModel.type = COORD_SYS_TYPE_POLAR;
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
__webpack_require__.d(__webpack_exports__, {
}, {
  COMPONENT_TYPE_POLAR: COMPONENT_TYPE_POLAR,
  COORD_SYS_TYPE_POLAR: COORD_SYS_TYPE_POLAR
});


}),
41691: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ polar_polarCreator; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.1.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(75275);
// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(2492);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/Axis.js
var Axis = __webpack_require__(70808);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/polar/RadiusAxis.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.1.0/node_modules/zrender/lib/contain/text.js
var contain_text = __webpack_require__(21985);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/util/model.js
var model = __webpack_require__(53781);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/polar/AngleAxis.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/polar/PolarModel.js
var PolarModel = __webpack_require__(137);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/polar/Polar.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
    this.type = PolarModel.COORD_SYS_TYPE_POLAR;
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
    return this.coordToPoint([
    // Must be the same order as polarDimensions
    this._radiusAxis.dataToRadius(data[0], clamp), this._angleAxis.dataToAngle(data[1], clamp)], out);
  };
  /**
   * Convert a (x, y) point to data
   */
  Polar.prototype.pointToData = function (point, clamp, out) {
    out = out || [];
    var coord = this.pointToCoord(point);
    // Must be the same order as polarDimensions
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
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(46823);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/axisHelper.js
var axisHelper = __webpack_require__(72460);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/util/layout.js
var layout = __webpack_require__(29268);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/axisNiceTicks.js
var axisNiceTicks = __webpack_require__(85931);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/scaleRawExtentInfo.js
var scaleRawExtentInfo = __webpack_require__(94385);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/axisStatistics.js
var axisStatistics = __webpack_require__(84287);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/polar/polarCreator.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/










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
  (0,scaleRawExtentInfo.scaleRawExtentInfoCreate)(angleAxis, scaleRawExtentInfo.AXIS_EXTENT_INFO_BUILD_FROM_COORD_SYS_UPDATE);
  (0,scaleRawExtentInfo.scaleRawExtentInfoCreate)(radiusAxis, scaleRawExtentInfo.AXIS_EXTENT_INFO_BUILD_FROM_COORD_SYS_UPDATE);
  (0,axisNiceTicks.scaleCalcNice)(angleAxis);
  (0,axisNiceTicks.scaleCalcNice)(radiusAxis);
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
  axis.type = (0,axisHelper.determineAxisType)(axisModel);
  axis.scale = (0,axisHelper.createScaleByModel)(axisModel, axis.type, false);
  axis.onBand = (0,axisHelper.isAxisOnBand)(axis.scale, axisModel);
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
    ecModel.eachComponent(PolarModel.COMPONENT_TYPE_POLAR, function (polarModel, idx) {
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
      if (seriesModel.get('coordinateSystem') === PolarModel.COORD_SYS_TYPE_POLAR) {
        var polarModel = seriesModel.getReferringComponents(PolarModel.COMPONENT_TYPE_POLAR, model.SINGLE_REFERRING).models[0];
        if (false) {}
        var polar = seriesModel.coordinateSystem = polarModel.coordinateSystem;
        if (polar) {
          (0,axisStatistics.associateSeriesWithAxis)(polar.getRadiusAxis(), seriesModel, PolarModel.COORD_SYS_TYPE_POLAR);
          (0,axisStatistics.associateSeriesWithAxis)(polar.getAngleAxis(), seriesModel, PolarModel.COORD_SYS_TYPE_POLAR);
        }
      }
    });
    return polarList;
  }
};
/* export default */ var polar_polarCreator = (polarCreator);

}),
53454: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var zrender_lib_core_util_js__rspack_import_0 = __webpack_require__(75275);
/* import */ var _axisBand_js__rspack_import_1 = __webpack_require__(37371);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
    var result = axis.type === 'category' ? (0,_axisBand_js__rspack_import_1.calcBandWidth)(axis).w : Math.abs(axis.dataToCoord(val - halfSize) - axis.dataToCoord(val + halfSize));
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
__webpack_require__.d(__webpack_exports__, {
}, {
  "default": polarPrepareCustom
});


}),
90898: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ radar_Radar; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(2492);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/Axis.js
var Axis = __webpack_require__(70808);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/radar/IndicatorAxis.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/scale/Interval.js
var Interval = __webpack_require__(46333);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(46823);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/radar/RadarModel.js
var RadarModel = __webpack_require__(46341);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.1.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(75275);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/axisAlignTicks.js
var axisAlignTicks = __webpack_require__(75813);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/util/layout.js
var layout = __webpack_require__(29268);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/scaleRawExtentInfo.js
var scaleRawExtentInfo = __webpack_require__(94385);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/scale/helper.js
var helper = __webpack_require__(45620);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/axisStatistics.js
var axisStatistics = __webpack_require__(84287);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/radar/Radar.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/










var Radar_Radar = /** @class */function () {
  function Radar(radarModel, ecModel, api) {
    this.type = RadarModel.COORD_SYS_TYPE_RADAR;
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
    var clockwise = radarModel.get('clockwise') || false;
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
    var sign = clockwise ? -1 : 1;
    (0,util.each)(this._indicatorAxes, function (indicatorAxis, idx) {
      indicatorAxis.setExtent(this.r0, this.r);
      var angle = this.startAngle + sign * idx * Math.PI * 2 / this._indicatorAxes.length;
      // Normalize to [-PI, PI]
      angle = Math.atan2(Math.sin(angle), Math.cos(angle));
      indicatorAxis.angle = angle;
    }, this);
  };
  Radar.prototype.update = function (ecModel, api) {
    var indicatorAxes = this._indicatorAxes;
    var radarModel = this._model;
    var splitNumber = (0,helper.ensureValidSplitNumber)(radarModel.get('splitNumber'), RadarModel.RADAR_DEFAULT_SPLIT_NUMBER);
    var dummyScale = new Interval["default"]();
    dummyScale.setExtent(0, splitNumber);
    dummyScale.setConfig({
      interval: 1
    });
    // Force all the axis fixing the maxSplitNumber.
    (0,util.each)(indicatorAxes, function (indicatorAxis) {
      (0,scaleRawExtentInfo.scaleRawExtentInfoCreate)(indicatorAxis, scaleRawExtentInfo.AXIS_EXTENT_INFO_BUILD_FROM_COORD_SYS_UPDATE);
      (0,axisAlignTicks.scaleCalcAlign)(indicatorAxis, dummyScale);
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
    ecModel.eachComponent(RadarModel.COMPONENT_TYPE_RADAR, function (radarModel) {
      var radar = new Radar(radarModel, ecModel, api);
      radarList.push(radar);
      radarModel.coordinateSystem = radar;
    });
    ecModel.eachSeriesByType(RadarModel.SERIES_TYPE_RADAR, function (radarSeries) {
      if (radarSeries.get('coordinateSystem') === RadarModel.COORD_SYS_TYPE_RADAR) {
        // Inject coordinate system
        // @ts-ignore
        var radar = radarSeries.coordinateSystem = radarList[radarSeries.get('radarIndex') || 0];
        if (radar) {
          (0,util.each)(radar.getIndicatorAxes(), function (indicatorAxis) {
            (0,axisStatistics.associateSeriesWithAxis)(indicatorAxis, radarSeries, RadarModel.COORD_SYS_TYPE_RADAR);
          });
        }
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
46341: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var tslib__rspack_import_3 = __webpack_require__(2492);
/* import */ var zrender_lib_core_util_js__rspack_import_1 = __webpack_require__(75275);
/* import */ var _axisDefault_js__rspack_import_0 = __webpack_require__(38387);
/* import */ var _model_Model_js__rspack_import_4 = __webpack_require__(98899);
/* import */ var _axisModelCommonMixin_js__rspack_import_5 = __webpack_require__(59417);
/* import */ var _model_Component_js__rspack_import_2 = __webpack_require__(23074);
/* import */ var _visual_tokens_js__rspack_import_7 = __webpack_require__(5888);
/* import */ var _util_component_js__rspack_import_6 = __webpack_require__(7479);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
var COORD_SYS_TYPE_RADAR = 'radar';
var COMPONENT_TYPE_RADAR = COORD_SYS_TYPE_RADAR;
var SERIES_TYPE_RADAR = COORD_SYS_TYPE_RADAR;
var RADAR_DEFAULT_SPLIT_NUMBER = 5;
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
    var clockwise = this.get('clockwise');
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
        clockwise: clockwise,
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
      // FIXME: construct an AxisBaseModel directly, rather than mixin.
      // @ts-ignore
      model.uid = (0,_util_component_js__rspack_import_6.getUID)('ec_radar');
      return model;
    }, this);
    this._indicatorModels = indicatorModels;
  };
  RadarModel.prototype.getIndicatorModels = function () {
    return this._indicatorModels;
  };
  RadarModel.type = COMPONENT_TYPE_RADAR;
  RadarModel.defaultOption = {
    // zlevel: 0,
    z: 0,
    center: ['50%', '50%'],
    radius: '50%',
    startAngle: 90,
    clockwise: false,
    axisName: {
      show: true,
      color: _visual_tokens_js__rspack_import_7["default"].color.axisLabel
      // formatter: null
      // textStyle: {}
    },
    boundaryGap: [0, 0],
    splitNumber: RADAR_DEFAULT_SPLIT_NUMBER,
    axisNameGap: 15,
    scale: false,
    // Polygon or circle
    shape: 'polygon',
    axisLine: zrender_lib_core_util_js__rspack_import_1.merge({
      lineStyle: {
        color: _visual_tokens_js__rspack_import_7["default"].color.neutral20
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
__webpack_require__.d(__webpack_exports__, {
}, {
  COMPONENT_TYPE_RADAR: COMPONENT_TYPE_RADAR,
  COORD_SYS_TYPE_RADAR: COORD_SYS_TYPE_RADAR,
  RADAR_DEFAULT_SPLIT_NUMBER: RADAR_DEFAULT_SPLIT_NUMBER,
  SERIES_TYPE_RADAR: SERIES_TYPE_RADAR
});


}),
94385: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var zrender_lib_core_util_js__rspack_import_2 = __webpack_require__(75275);
/* import */ var zrender_lib_contain_text_js__rspack_import_4 = __webpack_require__(21985);
/* import */ var _scale_helper_js__rspack_import_1 = __webpack_require__(45620);
/* import */ var _util_model_js__rspack_import_0 = __webpack_require__(53781);
/* import */ var _axisHelper_js__rspack_import_7 = __webpack_require__(72460);
/* import */ var _core_CoordinateSystem_js__rspack_import_6 = __webpack_require__(31712);
/* import */ var _util_number_js__rspack_import_3 = __webpack_require__(46823);
/* import */ var _scale_scaleMapper_js__rspack_import_8 = __webpack_require__(76077);
/* import */ var _axisStatistics_js__rspack_import_5 = __webpack_require__(84287);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/










/**
 * NOTICE: Can be only used in `ensureScaleStore(axisLike)`.
 *
 * In most cases the instances of `Axis` and `Scale` are one-to-one mapping and share the same lifecycle.
 * But in some external usage (such as echarts-gl), axis instance does not necessarily exist, and only
 * scale instance and axisModel are used. Therefore we store the internal info on scale instance directly.
 */
var scaleInner = (0,_util_model_js__rspack_import_0.makeInner)();
var AXIS_EXTENT_INFO_BUILD_FROM_COORD_SYS_UPDATE = 1;
var AXIS_EXTENT_INFO_BUILD_FROM_DATA_ZOOM = 2;
var AXIS_EXTENT_INFO_BUILD_FROM_EMPTY = 3;
var ScaleRawExtentInfo = /** @class */function () {
  function ScaleRawExtentInfo(scale, model,
  // Typically: data extent from all series on this axis.
  dataExtent, requireStartValue, requireContainShape) {
    var isOrdinal = (0,_scale_helper_js__rspack_import_1.isOrdinalScale)(scale);
    var axisDataLen = isOrdinal
    // FIXME: there is a flaw here: if there is no "block" data processor like `dataZoom`,
    // and progressive rendering is using, here the category result might just only contain
    // the processed chunk rather than the entire result.
    ? model.getCategories().length : null;
    // [CATEGORY_AXIS_MODEL_DATA_IS_EMPTY_ARRAY]:
    // This is only for backward compatibility - `xxxAxis: {data: []}` can declare this axis as
    // a "category" axis and use `series.data` to determine its extent but the axis is blank - only
    // axis line is displayed. This is a conincidence, but it is used in some cases.
    var categoryAxisModelDataIsEmptyArray;
    if (isOrdinal) {
      var axisModelDataArray = model.getCategories(true);
      categoryAxisModelDataIsEmptyArray = axisModelDataArray && !axisModelDataArray.length;
    }
    // NOTE: also considered the input dataExtent may be still in the initialized state `[Infinity, -Infinity]`.
    var dataMM = dataExtent.slice();
    // custom dataMin/dataMax.
    // Also considered `modelDataMinMax[0] > modelDataMinMax[1]` may occur.
    if ((0,_scale_helper_js__rspack_import_1.isIntervalScale)(scale) || (0,_scale_helper_js__rspack_import_1.isLogScale)(scale) || (0,_scale_helper_js__rspack_import_1.isTimeScale)(scale)) {
      (0,_util_model_js__rspack_import_0.unionExtentStartFromNumber)(dataMM, parseAxisModelMinMax(scale, model.get('dataMin', true)));
      (0,_util_model_js__rspack_import_0.unionExtentEndFromNumber)(dataMM, parseAxisModelMinMax(scale, model.get('dataMax', true)));
    }
    if (!(0,_util_model_js__rspack_import_0.extentHasValue)(dataMM)) {
      // dataMM may be still `[Infinity, -Infinity]`, we use `NaN` on the subsequent calculations
      // to force the `noZoomEffMM` to be `[NaN, NaN]` if needed.
      dataMM[0] = dataMM[1] = NaN;
    }
    var noZoomEffMM = [];
    var fixMM = [false, false];
    // Notice: When min/max is not set (that is, when there are null/undefined,
    // which is the most common case), these cases should be ensured:
    // (1) For 'ordinal', show all axis.data.
    // (2) For others:
    //      + `boundaryGap` is applied (if min/max set, boundaryGap is
    //      disabled).
    //      + If `needIncludeZero`, min/max should be zero, otherwise, min/max should
    //      be the result that originalExtent enlarged by boundaryGap.
    // (3) If no data, it should be ensured that `scale.setBlank` is set.
    var modelMinRaw = model.get('min', true);
    if (modelMinRaw === 'dataMin') {
      noZoomEffMM[0] = dataMM[0];
      fixMM[0] = true;
    } else {
      noZoomEffMM[0] = parseAxisModelMinMax(scale, (0,zrender_lib_core_util_js__rspack_import_2.isFunction)(modelMinRaw)
      // This callback always provides users the full data extent (before data is filtered).
      ? modelMinRaw({
        min: dataMM[0],
        max: dataMM[1]
      }) : modelMinRaw);
      // If `xxxAxis.min: null/undefined`, min should not be fixed.
      fixMM[0] = noZoomEffMM[0] != null;
    }
    var modelMaxRaw = model.get('max', true);
    if (modelMaxRaw === 'dataMax') {
      noZoomEffMM[1] = dataMM[1];
      fixMM[1] = true;
    } else {
      noZoomEffMM[1] = parseAxisModelMinMax(scale, (0,zrender_lib_core_util_js__rspack_import_2.isFunction)(modelMaxRaw)
      // This callback always provides users the full data extent (before data is filtered).
      ? modelMaxRaw({
        min: dataMM[0],
        max: dataMM[1]
      }) : modelMaxRaw);
      // If `xxxAxis.max: null/undefined`, max should not be fixed.
      fixMM[1] = noZoomEffMM[1] != null;
    }
    var boundaryGap = parseBoundaryGapOption(scale, model);
    var span = !isOrdinal
    // PENDING: Historicall behavior but may not reasonable enough.
    ? dataMM[1] - dataMM[0] || Math.abs(dataMM[0]) : null;
    // NOTE: If a numeric axis min/max is specified as 'dataMin'/'dataMax',
    // `boundaryGap` will not be used.
    if (noZoomEffMM[0] == null) {
      noZoomEffMM[0] = isOrdinal ? categoryAxisModelDataIsEmptyArray ? dataMM[0] : axisDataLen ? 0 : NaN : dataMM[0] - boundaryGap[0] * span;
    }
    if (noZoomEffMM[1] == null) {
      noZoomEffMM[1] = isOrdinal ? categoryAxisModelDataIsEmptyArray ? dataMM[1] : axisDataLen ? axisDataLen - 1 : NaN : dataMM[1] + boundaryGap[1] * span;
    }
    // Normalize to `NaN` if invalid; e.g., this may occur when `dataMM` has Infinity.
    !(0,_util_model_js__rspack_import_0.isValidNumberForExtent)(noZoomEffMM[0]) && (noZoomEffMM[0] = NaN);
    !(0,_util_model_js__rspack_import_0.isValidNumberForExtent)(noZoomEffMM[1]) && (noZoomEffMM[1] = NaN);
    var isBlank = categoryAxisModelDataIsEmptyArray || (0,zrender_lib_core_util_js__rspack_import_2.eqNaN)(noZoomEffMM[0]) || (0,zrender_lib_core_util_js__rspack_import_2.eqNaN)(noZoomEffMM[1]) || isOrdinal && !axisDataLen;
    // NOTE: `needIncludeZero` is not applicable to LogScale, TimeScale, OrdinalScale.
    var needIncludeZeroApplicable = (0,_scale_helper_js__rspack_import_1.isIntervalScale)(scale);
    var needIncludeZero = needIncludeZeroApplicable && model.needIncludeZero && model.needIncludeZero();
    if (needIncludeZero) {
      if (noZoomEffMM[0] > 0 && noZoomEffMM[1] > 0 && !fixMM[0]) {
        noZoomEffMM[0] = 0;
        // fixMM[0] = true;
      }
      if (noZoomEffMM[0] < 0 && noZoomEffMM[1] < 0 && !fixMM[1]) {
        noZoomEffMM[1] = 0;
        // fixMM[1] = true;
      }
    }
    var needToggleAxisInverse = false;
    if (noZoomEffMM[0] > noZoomEffMM[1]) {
      // Historically, if users set `xxxAxis.min > xxxAxis.max`, or `xxxAxis.max < dataExtent[0]`,
      // or `xxxAxis.min > dataExtent[1]` the behavior is sometimes like `xxxAxis.inverse = true`,
      // sometimes abnormal. We remain backward compatible with the former one, though this feature
      // may not be reasonable.
      // And handle it after "needIncludeZero" is also for backward compatibility.
      noZoomEffMM.reverse();
      needToggleAxisInverse = true;
    }
    var startValue = parseAxisModelMinMax(scale, model.get('startValue', true));
    var startValueSpecified = startValue != null;
    if (!(0,_util_number_js__rspack_import_3.isNullableNumberFinite)(startValue) && requireStartValue) {
      startValue = scale.getDefaultStartValue ? scale.getDefaultStartValue() : 0;
    }
    if ((0,_util_number_js__rspack_import_3.isNullableNumberFinite)(startValue)
    // Keep backward compatibility and enable `xxxAxis.scale: true` enabled on bar series:
    // if `xxxAxis.scale: true` and `startValue` is not specified, do not union the default `startValue`,
    && (startValueSpecified || !needIncludeZeroApplicable || needIncludeZero)) {
      if (startValue < noZoomEffMM[0] && !fixMM[0]) {
        noZoomEffMM[0] = startValue;
        fixMM[0] = true;
      } else if (startValue > noZoomEffMM[1] && !fixMM[1]) {
        noZoomEffMM[1] = startValue;
        fixMM[1] = true;
      }
    }
    var internal = this._i = {
      scale: scale,
      dataMM: dataMM,
      noZoomEffMM: noZoomEffMM,
      zoomMM: [],
      fixMM: fixMM,
      zoomFixMM: [false, false],
      startValue: startValue,
      isBlank: isBlank,
      incl0: needIncludeZero,
      tggAxInv: needToggleAxisInverse,
      ctnShp: requireContainShape
    };
    sanitizeExtent(internal, noZoomEffMM);
  }
  ScaleRawExtentInfo.prototype.makeNoZoom = function () {
    return this._i.noZoomEffMM.slice();
  };
  ScaleRawExtentInfo.prototype.makeFinal = function () {
    var internal = this._i;
    var zoomMM = internal.zoomMM;
    var noZoomEffMM = internal.noZoomEffMM;
    var zoomFixMM = internal.zoomFixMM;
    var fixMM = internal.fixMM;
    var result = {
      fixMM: fixMM,
      zoomFixMM: zoomFixMM,
      isBlank: internal.isBlank,
      incl0: internal.incl0,
      tggAxInv: internal.tggAxInv,
      ctnShp: internal.ctnShp,
      effMM: noZoomEffMM.slice()
    };
    var effMM = result.effMM;
    // NOTE: Switching `fixMM` probably leads to abrupt extent changes when draging a `dataZoom`
    //  handle, since `fixMM` impact the "nice extent" and "nice ticks" calculation.
    //  Consider a case:
    //    dataZoom `start` is 2% but its `end` is 100%, (or vice versa), we currently only set `fixMM[0]`
    //    as `true` but remain `fixMM[1]` as `false` for this case to avoid unnecessary abrupt change.
    //    Incidentally, the effect is not unacceptable if we set both `fixMM[0]/[1]` as `true`.
    if (zoomMM[0] != null) {
      effMM[0] = zoomMM[0];
      fixMM[0] = zoomFixMM[0] = true;
    }
    if (zoomMM[1] != null) {
      effMM[1] = zoomMM[1];
      fixMM[1] = zoomFixMM[1] = true;
    }
    sanitizeExtent(internal, effMM);
    return result;
  };
  ScaleRawExtentInfo.prototype.makeRenderInfo = function () {
    return {
      startValue: this._i.startValue
    };
  };
  /**
   * NOTICE:
   *  - Do not set them if the percent are 0% or 100%. (See `AxisProxy['reset']`.)
   *  - The caller must ensure `start <= end` and the range is equal or less then `noZoomEffMM`.
   *    (See `AxisProxy['calculateDataWindow']`.)
   *  - The outcome `_zoomMM` may have both `NullUndefined` and a finite value, like `[undefined, 123]`.
   */
  ScaleRawExtentInfo.prototype.setZoomMM = function (idxMinMax, val) {
    this._i.zoomMM[idxMinMax] = val;
  };
  return ScaleRawExtentInfo;
}();

/**
 * Should be called when a new extent is created or modified.
 */
function sanitizeExtent(internal, mm) {
  var scale = internal.scale;
  var dataMM = internal.dataMM;
  if (scale.sanitize) {
    mm[0] = scale.sanitize(mm[0], dataMM);
    mm[1] = scale.sanitize(mm[1], dataMM);
    (0,_util_model_js__rspack_import_0.ensureExtentAscSimply)(mm);
  }
}
function parseAxisModelMinMax(scale, minMax) {
  return minMax == null ? null // null/undefined means not specified and other default values can be applied.
  : (0,zrender_lib_core_util_js__rspack_import_2.eqNaN)(minMax) ? NaN // NaN means a deliberate invalid number.
  : scale.parse(minMax);
}
function parseBoundaryGapOption(scale, model) {
  var boundaryGapOptionArr;
  if ((0,_scale_helper_js__rspack_import_1.isOrdinalScale)(scale)) {
    boundaryGapOptionArr = [0, 0];
  } else {
    var boundaryGap = model.get('boundaryGap');
    if (typeof boundaryGap === 'boolean') {
      if (false) {}
      boundaryGap = null;
    }
    boundaryGapOptionArr = (0,zrender_lib_core_util_js__rspack_import_2.isArray)(boundaryGap) ? boundaryGap : [boundaryGap, boundaryGap];
  }
  return [parseBoundaryGapOptionItem(boundaryGapOptionArr[0]), parseBoundaryGapOptionItem(boundaryGapOptionArr[1])];
}
function parseBoundaryGapOptionItem(opt) {
  return (0,zrender_lib_contain_text_js__rspack_import_4.parsePercent)(typeof opt === 'boolean' ? 0 : opt, 1) || 0;
}
/**
 * NOTE: `associateSeriesWithAxis` is not necessarily called, e.g., when
 * an axis is not used by any series.
 */
function ensureScaleStore(axisLike) {
  var store = scaleInner(axisLike.scale);
  if (!store.extent) {
    store.extent = (0,_util_model_js__rspack_import_0.initExtentForUnion)();
  }
  return store;
}
/**
 * This supports union extent on case like: pie (or other similar series)
 * lays out on cartesian2d.
 * @see scaleRawExtentInfoCreate
 */
function scaleRawExtentInfoEnableBoxCoordSysUsage(axisLike, coordSysDimIdxMap) {
  ensureScaleStore(axisLike).dimIdxInCoord = coordSysDimIdxMap.get(axisLike.dim);
}
/**
 * @usage
 *  class SomeCoordSys {
 *      static create() {
 *          ecModel.eachSeries(function (seriesModel) {
 *              associateSeriesWithAxis(axis1, seriesModel, ...);
 *              associateSeriesWithAxis(axis2, seriesModel, ...);
 *              // ...
 *          });
 *      }
 *      update() {
 *          scaleRawExtentInfoCreate(axis1);
 *          scaleRawExtentInfoCreate(axis2);
 *      }
 *  }
 *  class AxisProxy {
 *      reset() {
 *          scaleRawExtentInfoCreate(axis1);
 *      }
 *  }
 *
 * NOTICE:
 *  - `associateSeriesWithAxis`(in `axisStatistics.ts`) should be called in:
 *    - Coord sys create method.
 *  - `scaleRawExtentInfoCreate` should be typically called in:
 *    - `dataZoom` processor. It requires processing like:
 *      1. Filter series data by dataZoom1;
 *      2. Union the filtered data and init the extent of the orthogonal axes, which is the 100% of dataZoom2;
 *      3. Filter series data by dataZoom2;
 *      4. ...
 *    - Coord sys update method, for other axes that not covered by `dataZoom`.
 *      NOTE: If a `dataZoom` covers this series, this data and its extent has been dataZoom-filtered.
 *      Therefore this handling should not before `dataZoom`.
 *  - The callback of `min`/`max` in ec option should NOT be called multiple times,
 *    therefore, we initialize `ScaleRawExtentInfo` uniformly in `scaleRawExtentInfoCreate`.
 *
 * @see SCALE_EXTENT_CONSTRUCTION for the full processing flow.
 */
function scaleRawExtentInfoCreate(axis, from) {
  var scale = axis.scale;
  var model = axis.model;
  var axisDim = axis.dim;
  if (false) {}
  if (scale.rawExtentInfo) {
    if (false) {}
    return;
  }
  scaleRawExtentInfoCreateDeal(scale, axis, axisDim, model, from);
}
function scaleRawExtentInfoCreateDeal(scale, axis, axisDim, model, from) {
  var scaleStore = ensureScaleStore(axis);
  var extent = scaleStore.extent;
  var requireStartValue = false;
  (0,_axisStatistics_js__rspack_import_5.eachSeriesOnAxis)(axis, function (seriesModel) {
    if (seriesModel.boxCoordinateSystem) {
      // This supports union extent on case like: pie (or other similar series)
      // lays out on cartesian2d.
      var coord = (0,_core_CoordinateSystem_js__rspack_import_6.getCoordForCoordSysUsageKindBox)(seriesModel).coord;
      var dimIdx = scaleStore.dimIdxInCoord;
      if (!(dimIdx >= 0)) {
        if (false) {}
      }
      // Only `[val1, val2]` case needs to be supported currently.
      else if ((0,zrender_lib_core_util_js__rspack_import_2.isArray)(coord)) {
        var coordItem = coord[dimIdx];
        if (coordItem != null && !(0,zrender_lib_core_util_js__rspack_import_2.isArray)(coordItem)) {
          (0,_util_model_js__rspack_import_0.unionExtentFromNumber)(extent, scale.parse(coordItem));
        }
      }
    } else if (seriesModel.coordinateSystem) {
      // NOTE: This data may have been filtered by dataZoom on orthogonal axes.
      var data_1 = seriesModel.getData();
      if (data_1) {
        var filter_1 = scale.getFilter ? scale.getFilter() : null;
        (0,zrender_lib_core_util_js__rspack_import_2.each)((0,_axisHelper_js__rspack_import_7.getDataDimensionsOnAxis)(data_1, axisDim), function (dim) {
          (0,_util_model_js__rspack_import_0.unionExtentFromExtent)(extent, data_1.getApproximateExtent(dim, filter_1));
        });
      }
      if (seriesModel.__requireStartValue && seriesModel.__requireStartValue(axis)) {
        requireStartValue = true;
      }
    }
  });
  var requireContainShape = determineRequireContainShape(scale, axis, model);
  var rawExtentInfo = new ScaleRawExtentInfo(scale, model, extent, requireStartValue, requireContainShape);
  injectScaleRawExtentInfo(scale, rawExtentInfo, from);
  scaleStore.extent = null; // Clean up
}
/**
 * `rawExtentInfo` may not be created in some cases, such as no series declared or extra useless
 * axes declared in ec option. In this case we still create a default one for that empty axis.
 */
function scaleRawExtentInfoBuildDefault(axisLike, dataExtent) {
  var scale = axisLike.scale;
  if (false) {}
  injectScaleRawExtentInfo(scale, new ScaleRawExtentInfo(scale, axisLike.model, dataExtent, false, false), AXIS_EXTENT_INFO_BUILD_FROM_EMPTY);
}
function injectScaleRawExtentInfo(scale, scaleRawExtentInfo, from) {
  // @ts-ignore
  scale.rawExtentInfo = scaleRawExtentInfo;
  // @ts-ignore
  scaleRawExtentInfo.from = from;
}
/**
 * See `axisSnippets.ts` for some commonly used handlers.
 *
 * FIXME:
 *  `boundaryGap: true` (i.e., `onBand: true` in code) has long been supported on category axis.
 *  And it is implemented in different code and not merged to this implementation yet.
 */
function registerAxisContainShapeHandler(
// `axisStatKey` is used to quickly omit irrelevant handlers,
// since handlers need to be iterated per axis.
axisStatKey, handler) {
  if (false) {}
  axisContainShapeHandlerMap.set(axisStatKey, handler);
}
var axisContainShapeHandlerMap = (0,zrender_lib_core_util_js__rspack_import_2.createHashMap)();
/**
 * Prepare axis scale extent before "nice".
 * Item of returned array can only be number (including Infinity and NaN).
 */
function adoptScaleRawExtentInfoAndPrepare(scale, model, ecModel, axis, externalDataExtent) {
  if (false) {}
  if (!scale.rawExtentInfo) {
    scaleRawExtentInfoBuildDefault({
      scale: scale,
      model: model
    }, externalDataExtent || (0,_util_model_js__rspack_import_0.initExtentForUnion)());
  }
  var rawExtentResult = scale.rawExtentInfo.makeFinal();
  // NOTE: This `scale.setExtent()` is required by:
  //  - `axisNiceTicks.ts` and `axisAlignTicks.ts`, where the internal `scaleMapper` may be required.
  var effectiveMinMax = rawExtentResult.effMM;
  scale.setExtent(effectiveMinMax[0], effectiveMinMax[1]);
  scale.setBlank(rawExtentResult.isBlank);
  if (axis && rawExtentResult.tggAxInv && ecModel && !ecModel.get('legacyMinMaxDontInverseAxis')) {
    axis.inverse = !axis.inverse;
  }
  return rawExtentResult;
}
function determineRequireContainShape(scale, axis, model) {
  var onBand = (0,_axisHelper_js__rspack_import_7.isAxisOnBand)(scale, model);
  var modelContainShape = model.get('containShape', true);
  if (modelContainShape == null && !onBand) {
    modelContainShape = true;
  }
  if (!modelContainShape) {
    return false;
  }
  var requireContainShape = false;
  (0,_axisStatistics_js__rspack_import_5.eachKeyOnAxis)(axis, function (axisStatKey) {
    requireContainShape = !!axisContainShapeHandlerMap.get(axisStatKey) || requireContainShape;
  });
  return requireContainShape;
}
/**
 * This implements ec option `someAxis.containShape`. That is, expand scale extent slightly to
 * ensure shapes of specific series are fully contained in the axis extent without overflow.
 *
 * NOTICE:
 *  Scale extent (data extent) and axis pixel extent (pixel extent) and are required as inputs.
 *    - See BAND_WIDTH_USED_SCALE_LINEAR_SPAN.
 *    - Axis pixel extent has been set outside, though it may be modified later (e.g., via `outerBounds`).
 *
 * @tutorial [AXIS_CONTAIN_SHAPE_PROCESSING_ORDER]
 *  This is a trade-off between the following 2 approaches:
 *    - Steps: (the current implementation)
 *        1. Process `dataZoom` based on a full window `noZoomEffMM`.
 *        2. Perform "nice" or "align" scale, where `intervalScaleEnsureValidExtent`-ish may be performed to
 *           expand extent to avoid `extent[0] === extent[1]`.
 *        3. Calculate linear supplement of containShape based on the final result.
 *      Cons:
 *        - Abrupt changes occur when zooming away from 0% or 100%.
 *        - Edge shapes are clipped in "dataZoom shadow".
 *    - Steps: (discarded)
 *        1. Calculate linear supplement of containShape based on `noZoomEffMM` and
 *           `intervalScaleEnsureValidExtent`-ish.
 *        2. Process `dataZoom` based on a full window `noZoomEffMM + linearSupplement`.
 *        3. Perform "nice"/"align" scale.
 *      Cons:
 *        - Input `startValue: 0` (in ec option or action) does not corresponds to `0%`, which is unacceptable.
 *        - Not easy to perform `intervalScaleEnsureValidExtent`-ish before "nice"/"align" processing.
 *
 * @see SCALE_EXTENT_CONSTRUCTION for the full processing flow.
 */
function adoptScaleExtentKindMapping(axis, scale, rawExtentResult, ecModel) {
  if (!rawExtentResult.ctnShp) {
    return;
  }
  var linearSupplement;
  (0,_axisStatistics_js__rspack_import_5.eachKeyOnAxis)(axis, function (axisStatKey) {
    var handler = axisContainShapeHandlerMap.get(axisStatKey);
    if (handler) {
      // This feature can be implemented by either expanding axis extent or scale extent. The choice depends
      // on whether series shape sizes are defined in pixels or data space. For example, scatter series glyph
      // sizes is mainly defined in pixel, while bar series `bandWidth` is mainly determined by given percents
      // of data scale. Since currently scatter does not require this feature, we implement it only on the
      // data scale.
      var singleLinearSupplement = handler(axis, ecModel);
      if (singleLinearSupplement) {
        linearSupplement = linearSupplement || [0, 0];
        (0,_util_model_js__rspack_import_0.unionExtentStartFromNumber)(linearSupplement, singleLinearSupplement[0]);
        (0,_util_model_js__rspack_import_0.unionExtentEndFromNumber)(linearSupplement, singleLinearSupplement[1]);
        // Consider the consistency of `onZero` behavior (not varying by series data; otherwise error-prone
        // to users), if any `containShape` really performed on this axis, discourage `onZero`.
        (0,_axisHelper_js__rspack_import_7.discourageOnAxisZero)(axis);
      }
    }
  });
  if (!linearSupplement) {
    return;
  }
  var scaleExtent = scale.getExtent();
  if ((0,_scale_helper_js__rspack_import_1.isOrdinalScale)(scale)) {
    if (!axis.onBand) {
      // - Zooming on `OrdinalScale` auto "snaps" to integer ticks, which causes edge shapes to
      //   always overlap and be clipped at the boundaries. Therefore we always supplement it with
      //   half bandWith to avoid that overlapping.
      // - `linearSupplement` is typically [-0.5, 0.5] in this case. `linearSupplement` exists only
      //   if any series call `registerAxisContainShapeHandler`.
      // - PENDING: For historical reason, `onBand: true` has another implementation to handle
      //   this case. Merge them to this?
      scale.setExtent2(_scale_scaleMapper_js__rspack_import_8.SCALE_EXTENT_KIND_MAPPING, (0,_util_number_js__rspack_import_3.mathMin)(scaleExtent[0], scaleExtent[0] + linearSupplement[0]), (0,_util_number_js__rspack_import_3.mathMax)(scaleExtent[1], scaleExtent[1] + linearSupplement[1]));
    }
  } else {
    // For other cases, `SCALE_EXTENT_KIND_MAPPING` is only used on the full window of `dataZoom`,
    // where the visual result is more intuitive when zooming: when dataZoom is applied and its ends
    // (i.e., `zoomMM`) do not reach 0% or 100%, the axis ends should exactly respect to the dataZoom
    // ends, and shapes are clipped if overflowing.
    var scaleExtentExpanded = scaleExtent.slice();
    if (!rawExtentResult.zoomFixMM[0]) {
      scaleExtentExpanded[0] = (0,_util_number_js__rspack_import_3.mathMin)(scaleExtentExpanded[0], scale.transformOut(scale.transformIn(scaleExtentExpanded[0], null) + linearSupplement[0], null));
    }
    if (!rawExtentResult.zoomFixMM[1]) {
      scaleExtentExpanded[1] = (0,_util_number_js__rspack_import_3.mathMax)(scaleExtentExpanded[1], scale.transformOut(scale.transformIn(scaleExtentExpanded[1], null) + linearSupplement[1], null));
    }
    if (scaleExtentExpanded[0] < scaleExtent[0] || scaleExtentExpanded[1] > scaleExtent[1]) {
      scale.setExtent2(_scale_scaleMapper_js__rspack_import_8.SCALE_EXTENT_KIND_MAPPING, scaleExtentExpanded[0], scaleExtentExpanded[1]);
    }
  }
  // NOTE: since currently `SCALE_EXTENT_KIND_MAPPING` is never required to be displayed, we
  // do not need to find a proper precision for that. But if it is required in the future, We
  // can use `getAcceptableTickPrecision` to find a proper precision.
}
__webpack_require__.d(__webpack_exports__, {
}, {
  AXIS_EXTENT_INFO_BUILD_FROM_COORD_SYS_UPDATE: AXIS_EXTENT_INFO_BUILD_FROM_COORD_SYS_UPDATE,
  AXIS_EXTENT_INFO_BUILD_FROM_DATA_ZOOM: AXIS_EXTENT_INFO_BUILD_FROM_DATA_ZOOM,
  ScaleRawExtentInfo: ScaleRawExtentInfo,
  adoptScaleExtentKindMapping: adoptScaleExtentKindMapping,
  adoptScaleRawExtentInfoAndPrepare: adoptScaleRawExtentInfoAndPrepare,
  registerAxisContainShapeHandler: registerAxisContainShapeHandler,
  scaleRawExtentInfoCreate: scaleRawExtentInfoCreate,
  scaleRawExtentInfoEnableBoxCoordSysUsage: scaleRawExtentInfoEnableBoxCoordSysUsage
});


}),
22040: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var tslib__rspack_import_1 = __webpack_require__(2492);
/* import */ var _model_Component_js__rspack_import_0 = __webpack_require__(23074);
/* import */ var _axisModelCommonMixin_js__rspack_import_3 = __webpack_require__(59417);
/* import */ var zrender_lib_core_util_js__rspack_import_2 = __webpack_require__(75275);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/




// PENDING: For historical reason,
//  in ec option:
//    It can only declare as `series:{coordinateSystem: "singleAxis", ...}`
//    rather than 'single'. Therefore every `.get('coordinateSystem')` must
//    match "singleAxis". (See `referHelper.ts`)
//    And the component name can only be `singleAxis: {...}`.
//  But the internal convention uses 'singe' as coordinate system name
//  and dimension name.
var COORD_SYS_TYPE_SINGLE = 'single';
var COORD_SYS_TYPE_SINGLE_AXIS_COMPATIBLE = 'singleAxis';
var COMPONENT_TYPE_SINGLE_AXIS = 'singleAxis';
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
  SingleAxisModel.type = COMPONENT_TYPE_SINGLE_AXIS;
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
__webpack_require__.d(__webpack_exports__, {
}, {
  COMPONENT_TYPE_SINGLE_AXIS: COMPONENT_TYPE_SINGLE_AXIS,
  COORD_SYS_TYPE_SINGLE: COORD_SYS_TYPE_SINGLE,
  COORD_SYS_TYPE_SINGLE_AXIS_COMPATIBLE: COORD_SYS_TYPE_SINGLE_AXIS_COMPATIBLE
});


}),
23294: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var _axisBand_js__rspack_import_0 = __webpack_require__(37371);
/* import */ var zrender_lib_core_util_js__rspack_import_1 = __webpack_require__(75275);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  return axis.type === 'category' ? (0,_axisBand_js__rspack_import_0.calcBandWidth)(axis).w : Math.abs(axis.dataToCoord(val - halfSize) - axis.dataToCoord(val + halfSize));
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
      size: (0,zrender_lib_core_util_js__rspack_import_1.bind)(dataToCoordSize, coordSys)
    }
  };
}
__webpack_require__.d(__webpack_exports__, {
}, {
  "default": singlePrepareCustom
});


}),
87557: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
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
__webpack_require__.d(__webpack_exports__, {
}, {
  layout: layout
});


}),
15359: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ single_singleCreator; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(2492);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/Axis.js
var Axis = __webpack_require__(70808);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/single/SingleAxis.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/axisHelper.js
var axisHelper = __webpack_require__(72460);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/util/layout.js
var layout = __webpack_require__(29268);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/single/AxisModel.js
var AxisModel = __webpack_require__(22040);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/axisNiceTicks.js
var axisNiceTicks = __webpack_require__(85931);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/scaleRawExtentInfo.js
var scaleRawExtentInfo = __webpack_require__(94385);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/single/Single.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
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
    this.type = AxisModel.COORD_SYS_TYPE_SINGLE;
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
    var axisType = axisHelper.determineAxisType(axisModel);
    var axis = new single_SingleAxis(dim, axisHelper.createScaleByModel(axisModel, axisType, true), [0, 0], axisType, axisModel.get('position'));
    axis.onBand = axisHelper.isAxisOnBand(axis.scale, axisModel);
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
    var axis = this._axis;
    (0,scaleRawExtentInfo.scaleRawExtentInfoCreate)(axis, scaleRawExtentInfo.AXIS_EXTENT_INFO_BUILD_FROM_COORD_SYS_UPDATE);
    (0,axisNiceTicks.scaleCalcNice)(axis);
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
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/util/model.js
var model = __webpack_require__(53781);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/axisStatistics.js
var axisStatistics = __webpack_require__(84287);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/lib/coord/single/singleCreator.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
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
  ecModel.eachComponent(AxisModel.COMPONENT_TYPE_SINGLE_AXIS, function (axisModel, idx) {
    var single = new single_Single(axisModel, ecModel, api);
    single.name = 'single_' + idx;
    single.resize(axisModel, api);
    axisModel.coordinateSystem = single;
    singles.push(single);
  });
  ecModel.eachSeries(function (seriesModel) {
    if (seriesModel.get('coordinateSystem') === AxisModel.COORD_SYS_TYPE_SINGLE_AXIS_COMPATIBLE) {
      var singleAxisModel = seriesModel.getReferringComponents(AxisModel.COMPONENT_TYPE_SINGLE_AXIS, model.SINGLE_REFERRING).models[0];
      var single = seriesModel.coordinateSystem = singleAxisModel && singleAxisModel.coordinateSystem;
      if (single) {
        (0,axisStatistics.associateSeriesWithAxis)(single.getAxis(), seriesModel, AxisModel.COORD_SYS_TYPE_SINGLE);
      }
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
31712: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var zrender_lib_core_util_js__rspack_import_0 = __webpack_require__(75275);
/* import */ var _util_model_js__rspack_import_1 = __webpack_require__(53781);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/



/**
 * FIXME:
 * `nonSeriesBoxCoordSysCreators` and `_nonSeriesBoxMasterList` are hardcoded implementations.
 * Regarding "coord sys layout based on another coord sys", currently we only experimentally support one level
 * dependency, such as, "grid(cartesian)s can be laid out based on matrix/calendar coord sys."
 * But a comprehensive implementation may need to support:
 *  - Recursive dependencies. e.g., a matrix coord sys lays out based on another matrix coord sys.
 *    That requires in the implementation `create` and `update` of coord sys are called by a dependency graph.
 *    (@see enableTopologicalTravel in `util/component.ts`)
 */
var nonSeriesBoxCoordSysCreators = {};
var normalCoordSysCreators = {};
var CoordinateSystemManager = /** @class */function () {
  function CoordinateSystemManager() {
    this._normalMasterList = [];
    this._nonSeriesBoxMasterList = [];
  }
  /**
   * Typically,
   *  - in `create`, a coord sys lays out based on a given rect;
   *  - in `update`, update the pixel and data extent of there axes (if any) based on processed `series.data`.
   * After that, a coord sys can serve (typically by `dataToPoint`/`dataToLayout`/`pointToData`).
   * If the coordinate system do not lay out based on `series.data`, `update` is not needed.
   */
  CoordinateSystemManager.prototype.create = function (ecModel, api) {
    this._nonSeriesBoxMasterList = dealCreate(nonSeriesBoxCoordSysCreators, true);
    this._normalMasterList = dealCreate(normalCoordSysCreators, false);
    function dealCreate(creatorMap, canBeNonSeriesBox) {
      var coordinateSystems = [];
      zrender_lib_core_util_js__rspack_import_0.each(creatorMap, function (creator, type) {
        var list = creator.create(ecModel, api);
        coordinateSystems = coordinateSystems.concat(list || []);
        if (false) {}
      });
      return coordinateSystems;
    }
  };
  /**
   * @see CoordinateSystem['create']
   */
  CoordinateSystemManager.prototype.update = function (ecModel, api) {
    zrender_lib_core_util_js__rspack_import_0.each(this._normalMasterList, function (coordSys) {
      coordSys.update && coordSys.update(ecModel, api);
    });
  };
  CoordinateSystemManager.prototype.getCoordinateSystems = function () {
    return this._normalMasterList.concat(this._nonSeriesBoxMasterList);
  };
  CoordinateSystemManager.register = function (type, creator) {
    if (type === 'matrix' || type === 'calendar') {
      // FIXME: hardcode, @see nonSeriesBoxCoordSysCreators
      nonSeriesBoxCoordSysCreators[type] = creator;
      return;
    }
    normalCoordSysCreators[type] = creator;
  };
  CoordinateSystemManager.get = function (type) {
    return normalCoordSysCreators[type] || nonSeriesBoxCoordSysCreators[type];
  };
  return CoordinateSystemManager;
}();
function canBeNonSeriesBoxCoordSys(coordSysType) {
  return !!nonSeriesBoxCoordSysCreators[coordSysType];
}
// By default fetch coord from `model.get('coord')`.
var BOX_COORD_SYS_COORD_FROM_PROP_COORD = 1;
// Some model/series, such as pie, is allowed to also get coord from `model.get('center')`,
// if cannot get from `model.get('coord')`. But historically pie use `center` option, but
// geo use `layoutCenter` option to specify layout center; they are not able to be unified.
// Therefor it is not recommended.
var BOX_COORD_SYS_COORD_FROM_PROP_COORD2 = 2;
/**
 * @see_also `createBoxLayoutReference`
 * @see_also `injectCoordSysByOption`
 */
function registerLayOutOnCoordSysUsage(opt) {
  if (false) {}
  coordSysUseMap.set(opt.fullType, {
    getCoord2: undefined
  }).getCoord2 = opt.getCoord2;
}
var coordSysUseMap = zrender_lib_core_util_js__rspack_import_0.createHashMap();
/**
 * @return Be an object, but never be NullUndefined.
 */
function getCoordForCoordSysUsageKindBox(model) {
  var coord = model.getShallow('coord', true);
  var from = BOX_COORD_SYS_COORD_FROM_PROP_COORD;
  if (coord == null) {
    var store = coordSysUseMap.get(model.type);
    if (store && store.getCoord2) {
      from = BOX_COORD_SYS_COORD_FROM_PROP_COORD2;
      coord = store.getCoord2(model);
    }
  }
  return {
    coord: coord,
    from: from
  };
}
/**
 * - `COORD_SYS_USAGE_KIND_DATA`: each data item is laid out based on a coord sys.
 * - `COORD_SYS_USAGE_KIND_BOX`: the overall bounding rect or anchor point is calculated based on a coord sys.
 *   e.g.,
 *      grid rect (cartesian rect) is calculate based on matrix/calendar coord sys;
 *      pie center is calculated based on calendar/cartesian;
 *
 * The default value (if not declared in option `coordinateSystemUsage`):
 *  For series, use `COORD_SYS_USAGE_KIND_DATA`, since this is the most common case and backward compatible.
 *  For non-series components, use `COORD_SYS_USAGE_KIND_BOX`, since `COORD_SYS_USAGE_KIND_DATA` is not applicable.
 */
var COORD_SYS_USAGE_KIND_NONE = 0;
var COORD_SYS_USAGE_KIND_DATA = 1;
var COORD_SYS_USAGE_KIND_BOX = 2;
function decideCoordSysUsageKind(
// Component or series
model, printError) {
  // For backward compat, still not use `true` in model.get.
  var coordSysType = model.getShallow('coordinateSystem');
  var coordSysUsageOption = model.getShallow('coordinateSystemUsage', true);
  var isDeclaredExplicitly = coordSysUsageOption != null;
  var kind = COORD_SYS_USAGE_KIND_NONE;
  if (coordSysType) {
    var isSeries = model.mainType === 'series';
    if (coordSysUsageOption == null) {
      coordSysUsageOption = isSeries ? 'data' : 'box';
    }
    if (coordSysUsageOption === 'data') {
      kind = COORD_SYS_USAGE_KIND_DATA;
      if (!isSeries) {
        if (false) {}
        kind = COORD_SYS_USAGE_KIND_NONE;
      }
    } else if (coordSysUsageOption === 'box') {
      kind = COORD_SYS_USAGE_KIND_BOX;
      if (!isSeries && !canBeNonSeriesBoxCoordSys(coordSysType)) {
        if (false) {}
        kind = COORD_SYS_USAGE_KIND_NONE;
      }
    }
  }
  return {
    coordSysType: coordSysType,
    kind: kind
  };
}
/**
 * These cases are considered:
 *  (A) Most series can use only "COORD_SYS_USAGE_KIND_DATA", but "COORD_SYS_USAGE_KIND_BOX" is not applicable:
 *    - e.g., series.heatmap, series.line, series.bar, series.scatter, ...
 *  (B) Some series and most components can use only "COORD_SYS_USAGE_KIND_BOX", but "COORD_SYS_USAGE_KIND_DATA"
 *    is not applicable:
 *    - e.g., series.pie, series.funnel, ...
 *    - e.g., grid, polar, geo, title, ...
 *  (C) Several series can use both "COORD_SYS_USAGE_KIND_BOX" and "COORD_SYS_USAGE_KIND_DATA", even at the same time:
 *    - e.g., series.graph, series.map
 *      - If graph or map series use "COORD_SYS_USAGE_KIND_BOX", it creates a internal coord sys as
 *        "COORD_SYS_USAGE_KIND_DATA" to lay out its data.
 *      - Graph series can use matrix coord sys as either the "COORD_SYS_USAGE_KIND_DATA" (each item layout
 *        on one cell) or "COORD_SYS_USAGE_KIND_BOX" (the entire series are layout within one cell).
 *    - To achieve this effect,
 *      `series.coordinateSystemUsage: 'box'` needs to be specified explicitly.
 *
 * Check these echarts option settings:
 *  - If `series: {type: 'bar'}`:
 *      COORD_SYS_USAGE_KIND_DATA: "cartesian2d",
 *      COORD_SYS_USAGE_KIND_BOX: "none".
 *      (since `coordinateSystem: 'cartesian2d'` is the default option in bar.)
 *  - If `grid: {coordinateSystem: 'matrix'}`
 *      COORD_SYS_USAGE_KIND_DATA: "none",
 *      COORD_SYS_USAGE_KIND_BOX: "matrix".
 *  - If `series: {type: 'pie', coordinateSystem: 'matrix'}`:
 *      COORD_SYS_USAGE_KIND_DATA: "none",
 *      COORD_SYS_USAGE_KIND_BOX: "matrix".
 *      (since `coordinateSystemUsage: 'box'` is the default option in pie.)
 *  - If `series: {type: 'graph', coordinateSystem: 'matrix'}`:
 *      COORD_SYS_USAGE_KIND_DATA: "matrix",
 *      COORD_SYS_USAGE_KIND_BOX: "none"
 *  - If `series: {type: 'graph', coordinateSystem: 'matrix', coordinateSystemUsage: 'box'}`:
 *      COORD_SYS_USAGE_KIND_DATA: "an internal view",
 *      COORD_SYS_USAGE_KIND_BOX: "the internal view is laid out on a matrix"
 *  - If `series: {type: 'map'}`:
 *      COORD_SYS_USAGE_KIND_DATA: "a internal geo",
 *      COORD_SYS_USAGE_KIND_BOX: "none"
 *  - If `series: {type: 'map', coordinateSystem: 'geo', geoIndex: 0}`:
 *      COORD_SYS_USAGE_KIND_DATA: "a geo",
 *      COORD_SYS_USAGE_KIND_BOX: "none"
 *  - If `series: {type: 'map', coordinateSystem: 'matrix'}`:
 *      not_applicable
 *  - If `series: {type: 'map', coordinateSystem: 'matrix', coordinateSystemUsage: 'box'}`:
 *      COORD_SYS_USAGE_KIND_DATA: "an internal geo",
 *      COORD_SYS_USAGE_KIND_BOX: "the internal geo is laid out on a matrix"
 *
 * @usage
 * For case (A) & (B),
 *  call `injectCoordSysByOption({coordSysType: 'aaa', ...})` once for each series/components.
 * For case (C),
 *  call `injectCoordSysByOption({coordSysType: 'aaa', ...})` once for each series/components,
 *  and then call `injectCoordSysByOption({coordSysType: 'bbb', ..., isDefaultDataCoordSys: true})`
 *  once for each series/components.
 */
function injectCoordSysByOption(opt) {
  var targetModel = opt.targetModel,
    coordSysType = opt.coordSysType,
    coordSysProvider = opt.coordSysProvider,
    isDefaultDataCoordSys = opt.isDefaultDataCoordSys,
    allowNotFound = opt.allowNotFound;
  if (false) {}
  var _a = decideCoordSysUsageKind(targetModel, true),
    kind = _a.kind,
    declaredType = _a.coordSysType;
  if (isDefaultDataCoordSys && kind !== COORD_SYS_USAGE_KIND_DATA) {
    // If both `COORD_SYS_USAGE_KIND_DATA` and `COORD_SYS_USAGE_KIND_BOX` declared in one model.
    // There is the only case in series-graph, and no other cases yet.
    kind = COORD_SYS_USAGE_KIND_DATA;
    declaredType = coordSysType;
  }
  if (kind === COORD_SYS_USAGE_KIND_NONE || declaredType !== coordSysType) {
    return COORD_SYS_USAGE_KIND_NONE;
  }
  var coordSys = coordSysProvider(coordSysType, targetModel);
  if (!coordSys) {
    if (false) {}
    return COORD_SYS_USAGE_KIND_NONE;
  }
  if (kind === COORD_SYS_USAGE_KIND_DATA) {
    if (false) {}
    targetModel.coordinateSystem = coordSys;
  } else {
    // kind === COORD_SYS_USAGE_KIND_BOX
    targetModel.boxCoordinateSystem = coordSys;
  }
  return kind;
}
var simpleCoordSysInjectionProvider = function (coordSysType, injectTargetModel) {
  var coordSysModel = injectTargetModel.getReferringComponents(coordSysType, _util_model_js__rspack_import_1.SINGLE_REFERRING).models[0];
  return coordSysModel && coordSysModel.coordinateSystem;
};
/* export default */ __webpack_exports__["default"] = (CoordinateSystemManager);
__webpack_require__.d(__webpack_exports__, {
}, {
  BOX_COORD_SYS_COORD_FROM_PROP_COORD: BOX_COORD_SYS_COORD_FROM_PROP_COORD,
  BOX_COORD_SYS_COORD_FROM_PROP_COORD2: BOX_COORD_SYS_COORD_FROM_PROP_COORD2,
  COORD_SYS_USAGE_KIND_BOX: COORD_SYS_USAGE_KIND_BOX,
  COORD_SYS_USAGE_KIND_DATA: COORD_SYS_USAGE_KIND_DATA,
  COORD_SYS_USAGE_KIND_NONE: COORD_SYS_USAGE_KIND_NONE,
  decideCoordSysUsageKind: decideCoordSysUsageKind,
  getCoordForCoordSysUsageKindBox: getCoordForCoordSysUsageKindBox,
  injectCoordSysByOption: injectCoordSysByOption,
  registerLayOutOnCoordSysUsage: registerLayOutOnCoordSysUsage,
  simpleCoordSysInjectionProvider: simpleCoordSysInjectionProvider
});


}),

}]);