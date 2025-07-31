"use strict";
(self["webpackChunkvue_admin_better"] = self["webpackChunkvue_admin_better"] || []).push([["3067"], {
96456: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27208);
/* ESM import */var _Line_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31987);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56190);
/* ESM import */var _util_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42692);
/* ESM import */var zrender_lib_core_vector_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25680);
/* ESM import */var zrender_lib_core_curve_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86688);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
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
9850: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var _Polyline_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88189);
/* ESM import */var _EffectLine_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96456);
/* ESM import */var zrender_lib_core_vector_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25680);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
25672: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var _util_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42692);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27208);
/* ESM import */var _util_states_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5645);
/* ESM import */var _Symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97903);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
var EffectSymbol = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(EffectSymbol, _super);
  function EffectSymbol(data, idx) {
    var _this = _super.call(this) || this;
    var symbol = new _Symbol_js__WEBPACK_IMPORTED_MODULE_2__["default"](data, idx);
    var rippleGroup = new _util_graphic_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
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
      var ripplePath = (0,_util_symbol_js__WEBPACK_IMPORTED_MODULE_3__.createSymbol)(symbolType, -1, -1, 2, 2, color);
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
    (0,_util_states_js__WEBPACK_IMPORTED_MODULE_4__.enterEmphasis)(this);
  };
  /**
   * Downplay symbol
   */
  EffectSymbol.prototype.downplay = function () {
    (0,_util_states_js__WEBPACK_IMPORTED_MODULE_4__.leaveEmphasis)(this);
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
    var symbolSize = (0,_util_symbol_js__WEBPACK_IMPORTED_MODULE_3__.normalizeSymbolSize)(data.getItemVisual(idx, 'symbolSize'));
    var symbolStyle = data.getItemVisual(idx, 'style');
    var color = symbolStyle && symbolStyle.fill;
    var emphasisModel = itemModel.getModel('emphasis');
    rippleGroup.setScale(symbolSize);
    rippleGroup.traverse(function (ripplePath) {
      ripplePath.setStyle('fill', color);
    });
    var symbolOffset = (0,_util_symbol_js__WEBPACK_IMPORTED_MODULE_3__.normalizeSymbolOffset)(data.getItemVisual(idx, 'symbolOffset'), symbolSize);
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
    (0,_util_states_js__WEBPACK_IMPORTED_MODULE_4__.toggleHoverEmphasis)(this, emphasisModel.get('focus'), emphasisModel.get('blurScope'), emphasisModel.get('disabled'));
  };
  ;
  EffectSymbol.prototype.fadeOut = function (cb) {
    cb && cb();
  };
  ;
  return EffectSymbol;
}(_util_graphic_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* ESM default export */ __webpack_exports__["default"] = (EffectSymbol);

}),
33668: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62217);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48670);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27208);
/* ESM import */var zrender_lib_contain_line_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65359);
/* ESM import */var zrender_lib_contain_quadratic_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7615);
/* ESM import */var _util_innerStore_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12212);
/* ESM import */var _visual_tokens_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23430);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
      stroke: _visual_tokens_js__WEBPACK_IMPORTED_MODULE_2__["default"].color.neutral99,
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
            if (zrender_lib_contain_line_js__WEBPACK_IMPORTED_MODULE_3__.containStroke(x0, y0, x1, y1, lineWidth, x, y)) {
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
          if (zrender_lib_contain_quadratic_js__WEBPACK_IMPORTED_MODULE_4__.containStroke(x0, y0, x2, y2, x1, y1, lineWidth, x, y)) {
            return dataIndex;
          }
        } else {
          if (zrender_lib_contain_line_js__WEBPACK_IMPORTED_MODULE_3__.containStroke(x0, y0, x1, y1, lineWidth, x, y)) {
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
      rect = this._rect = new _util_graphic_js__WEBPACK_IMPORTED_MODULE_5__["default"](minX, minY, maxX, maxY);
    }
    return rect;
  };
  return LargeLinesPath;
}(_util_graphic_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
var LargeLineDraw = /** @class */function () {
  function LargeLineDraw() {
    this.group = new _util_graphic_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
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
    var ecData = (0,_util_innerStore_js__WEBPACK_IMPORTED_MODULE_7__.getECData)(lineEl);
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
86345: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62217);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48670);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27208);
/* ESM import */var _util_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42692);
/* ESM import */var _util_innerStore_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12212);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
31987: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12012);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56190);
/* ESM import */var zrender_lib_core_vector_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(25680);
/* ESM import */var _util_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42692);
/* ESM import */var _LinePath_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71325);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27208);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7309);
/* ESM import */var _util_states_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5645);
/* ESM import */var _label_labelStyle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57235);
/* ESM import */var _util_number_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(48843);
/* ESM import */var _visual_tokens_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23430);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  var symbolSizeArr = _util_symbol_js__WEBPACK_IMPORTED_MODULE_0__.normalizeSymbolSize(symbolSize);
  var symbolOffsetArr = _util_symbol_js__WEBPACK_IMPORTED_MODULE_0__.normalizeSymbolOffset(symbolOffset || 0, symbolSizeArr);
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
  var symbolSizeArr = _util_symbol_js__WEBPACK_IMPORTED_MODULE_0__.normalizeSymbolSize(symbolSize);
  var symbolOffsetArr = _util_symbol_js__WEBPACK_IMPORTED_MODULE_0__.normalizeSymbolOffset(symbolOffset || 0, symbolSizeArr);
  var symbolPath = _util_symbol_js__WEBPACK_IMPORTED_MODULE_0__.createSymbol(symbolType, -symbolSizeArr[0] / 2 + symbolOffsetArr[0], -symbolSizeArr[1] / 2 + symbolOffsetArr[1], symbolSizeArr[0], symbolSizeArr[1], null, symbolKeepAspect);
  symbolPath.__specifiedRotation = symbolRotate == null || isNaN(symbolRotate) ? void 0 : +symbolRotate * Math.PI / 180 || 0;
  symbolPath.name = name;
  return symbolPath;
}
function createLine(points) {
  var line = new _LinePath_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
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
var Line = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(Line, _super);
  function Line(lineData, idx, seriesScope) {
    var _this = _super.call(this) || this;
    _this._createLine(lineData, idx, seriesScope);
    return _this;
  }
  Line.prototype._createLine = function (lineData, idx, seriesScope) {
    var seriesModel = lineData.hostModel;
    var linePoints = lineData.getItemLayout(idx);
    var z2 = lineData.getItemVisual(idx, 'z2');
    var line = createLine(linePoints);
    line.shape.percent = 0;
    _util_graphic_js__WEBPACK_IMPORTED_MODULE_4__.initProps(line, {
      z2: (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_5__.retrieve2)(z2, 0),
      shape: {
        percent: 1
      }
    }, seriesModel, idx);
    this.add(line);
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_5__.each)(SYMBOL_CATEGORIES, function (symbolCategory) {
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
    _util_graphic_js__WEBPACK_IMPORTED_MODULE_4__.updateProps(line, target, seriesModel, idx);
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_5__.each)(SYMBOL_CATEGORIES, function (symbolCategory) {
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
      labelStatesModels = (0,_label_labelStyle_js__WEBPACK_IMPORTED_MODULE_6__.getLabelStatesModels)(itemModel);
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
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_5__.each)(SYMBOL_CATEGORIES, function (symbolCategory) {
      var symbol = this.childOfName(symbolCategory);
      if (symbol) {
        // Share opacity and color with line.
        symbol.setColor(visualColor);
        symbol.style.opacity = lineStyle.opacity;
        for (var i = 0; i < _util_states_js__WEBPACK_IMPORTED_MODULE_7__.SPECIAL_STATES.length; i++) {
          var stateName = _util_states_js__WEBPACK_IMPORTED_MODULE_7__.SPECIAL_STATES[i];
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
    (0,_label_labelStyle_js__WEBPACK_IMPORTED_MODULE_6__.setLabelStyle)(this, labelStatesModels, {
      labelDataIndex: idx,
      labelFetcher: {
        getFormattedLabel: function (dataIndex, stateName) {
          return seriesModel.getFormattedLabel(dataIndex, stateName, lineData.dataType);
        }
      },
      inheritColor: visualColor || _visual_tokens_js__WEBPACK_IMPORTED_MODULE_8__["default"].color.neutral99,
      defaultOpacity: lineStyle.opacity,
      defaultText: (rawVal == null ? lineData.getName(idx) : isFinite(rawVal) ? (0,_util_number_js__WEBPACK_IMPORTED_MODULE_9__.round)(rawVal) : rawVal) + ''
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
      if (!(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_5__.isArray)(distance)) {
        distance = [distance, distance];
      }
      label.__labelDistance = distance;
    }
    this.setTextConfig({
      position: null,
      local: true,
      inside: false // Can't be inside for stroke element.
    });
    (0,_util_states_js__WEBPACK_IMPORTED_MODULE_7__.toggleHoverEmphasis)(this, focus, blurScope, emphasisDisabled);
  };
  Line.prototype.highlight = function () {
    (0,_util_states_js__WEBPACK_IMPORTED_MODULE_7__.enterEmphasis)(this);
  };
  Line.prototype.downplay = function () {
    (0,_util_states_js__WEBPACK_IMPORTED_MODULE_7__.leaveEmphasis)(this);
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
    var d = zrender_lib_core_vector_js__WEBPACK_IMPORTED_MODULE_10__.sub([], toPos, fromPos);
    zrender_lib_core_vector_js__WEBPACK_IMPORTED_MODULE_10__.normalize(d, d);
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
}(_util_graphic_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* ESM default export */ __webpack_exports__["default"] = (Line);

}),
50253: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27208);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42562);
/* ESM import */var _Line_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31987);
/* ESM import */var _label_labelStyle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57235);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
71325: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12012);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73978);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18200);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62217);
/* ESM import */var zrender_lib_core_vector_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25680);
/* ESM import */var _visual_tokens_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23430);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
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



var straightLineProto = _util_graphic_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype;
var bezierCurveProto = _util_graphic_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype;
var StraightLineShape = /** @class */function () {
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
var CurveShape = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(CurveShape, _super);
  function CurveShape() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  return CurveShape;
}(StraightLineShape);
function isStraightLine(shape) {
  return isNaN(+shape.cpx1) || isNaN(+shape.cpy1);
}
var ECLinePath = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(ECLinePath, _super);
  function ECLinePath(opts) {
    var _this = _super.call(this, opts) || this;
    _this.type = 'ec-line';
    return _this;
  }
  ECLinePath.prototype.getDefaultStyle = function () {
    return {
      stroke: _visual_tokens_js__WEBPACK_IMPORTED_MODULE_4__["default"].color.neutral99,
      fill: null
    };
  };
  ECLinePath.prototype.getDefaultShape = function () {
    return new StraightLineShape();
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
    return zrender_lib_core_vector_js__WEBPACK_IMPORTED_MODULE_5__.normalize(p, p);
  };
  return ECLinePath;
}(_util_graphic_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
/* ESM default export */ __webpack_exports__["default"] = (ECLinePath);

}),
88189: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27208);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27092);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7309);
/* ESM import */var _util_states_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5645);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
97903: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var _util_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42692);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27208);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7309);
/* ESM import */var _util_innerStore_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(12212);
/* ESM import */var _util_states_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5645);
/* ESM import */var _labelHelper_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(74744);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56190);
/* ESM import */var _label_labelStyle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57235);
/* ESM import */var zrender_lib_graphic_Image_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12262);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  Symbol.prototype._createSymbol = function (symbolType, data, idx, symbolSize, z2, keepAspect) {
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
      z2: (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.retrieve2)(z2, 100),
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
    (0,_util_states_js__WEBPACK_IMPORTED_MODULE_4__.enterEmphasis)(this.childAt(0));
  };
  /**
   * Downplay symbol
   */
  Symbol.prototype.downplay = function () {
    (0,_util_states_js__WEBPACK_IMPORTED_MODULE_4__.leaveEmphasis)(this.childAt(0));
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
    var z2 = Symbol.getSymbolZ2(data, idx);
    var isInit = symbolType !== this._symbolType;
    var disableAnimation = opts && opts.disableAnimation;
    if (isInit) {
      var keepAspect = data.getItemVisual(idx, 'symbolKeepAspect');
      this._createSymbol(symbolType, data, idx, symbolSize, z2, keepAspect);
    } else {
      var symbolPath = this.childAt(0);
      symbolPath.silent = false;
      var target = {
        scaleX: symbolSize[0] / 2,
        scaleY: symbolSize[1] / 2
      };
      disableAnimation ? symbolPath.attr(target) : _util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.updateProps(symbolPath, target, seriesModel, idx);
      (0,_util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.saveOldStyle)(symbolPath);
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
        _util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.initProps(symbolPath, target, seriesModel, idx);
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
      labelStatesModels = (0,_label_labelStyle_js__WEBPACK_IMPORTED_MODULE_6__.getLabelStatesModels)(itemModel);
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
    if (symbolPath instanceof zrender_lib_graphic_Image_js__WEBPACK_IMPORTED_MODULE_7__["default"]) {
      var pathStyle = symbolPath.style;
      symbolPath.useStyle((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.extend)({
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
        symbolPath.useStyle((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.extend)({}, symbolStyle));
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
    (0,_label_labelStyle_js__WEBPACK_IMPORTED_MODULE_6__.setLabelStyle)(symbolPath, labelStatesModels, {
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
    (0,_util_states_js__WEBPACK_IMPORTED_MODULE_4__.toggleHoverEmphasis)(this, focus, blurScope, emphasisDisabled);
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
        _util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.removeElement(textContent, {
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
    _util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.removeElement(symbolPath, {
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
  Symbol.getSymbolZ2 = function (data, idx) {
    return data.getItemVisual(idx, 'z2');
  };
  return Symbol;
}(_util_graphic_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
function driftSymbol(dx, dy) {
  this.parent.drift(dx, dy);
}
/* ESM default export */ __webpack_exports__["default"] = (Symbol);

}),
69144: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27208);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7309);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42562);
/* ESM import */var _Symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97903);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56190);
/* ESM import */var _label_labelStyle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57235);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
92981: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createClipPath: function() { return createClipPath; },
  createGridClipPath: function() { return createGridClipPath; },
  createPolarClipPath: function() { return createPolarClipPath; }
});
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68903);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7309);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80283);
/* ESM import */var _util_number_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48843);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56190);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
83516: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return createGraphFromNodeEdge; }
});
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56190);
/* ESM import */var _data_SeriesData_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21137);
/* ESM import */var _data_Graph_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51669);
/* ESM import */var _data_helper_linkSeriesData_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37316);
/* ESM import */var _data_helper_createDimensions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71245);
/* ESM import */var _core_CoordinateSystem_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67053);
/* ESM import */var _createSeriesData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28423);
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
  if (coordSys === 'cartesian2d' || coordSys === 'polar' || coordSys === 'matrix') {
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
3186: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return createRenderPlanner; }
});
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
28423: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56190);
/* ESM import */var _data_SeriesData_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(21137);
/* ESM import */var _data_helper_createDimensions_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71245);
/* ESM import */var _data_helper_dimensionHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7676);
/* ESM import */var _util_model_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(44244);
/* ESM import */var _core_CoordinateSystem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67053);
/* ESM import */var _model_referHelper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36762);
/* ESM import */var _data_Source_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7056);
/* ESM import */var _data_helper_dataStackHelper_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45413);
/* ESM import */var _data_helper_sourceHelper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56562);
/* ESM import */var _util_types_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19081);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  var dimValueGetter = firstCategoryDimIndex != null && isNeedCompleteOrdinalData(source)
  /**
   * This serves this case:
   *  var echarts_option = {
   *      xAxis: { data: ['a', 'b', 'c'] },
   *      yAxis: {}
   *      series: { data: [555, 666, 777] }
   *  };
   * The `series.data` is completed to:
   *  [[0, 555], [1, 666], [2, 777]]
   */ ? function (itemOpt, dimName, dataIndex, dimIndex) {
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
45013: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return createSeriesDataSimply; }
});
/* ESM import */var _data_helper_createDimensions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71245);
/* ESM import */var _data_SeriesData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21137);
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
50744: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return enableAriaDecalForTree; }
});
/* ESM import */var _model_mixin_palette_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56055);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
74744: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getDefaultInterpolatedLabel: function() { return getDefaultInterpolatedLabel; },
  getDefaultLabel: function() { return getDefaultLabel; }
});
/* ESM import */var _data_helper_dataProvider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54127);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56190);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
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
23091: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createEdgeMapForCurveness: function() { return createEdgeMapForCurveness; },
  getCurvenessForEdge: function() { return getCurvenessForEdge; },
  initCurvenessList: function() { return initCurvenessList; }
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
  if (zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isNumber(autoCurvenessParmas)) {
    length = autoCurvenessParmas;
  } else if (zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isArray(autoCurvenessParmas)) {
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
  var isArrayParam = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isArray(autoCurvenessParams);
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

}),
49205: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getSectorCornerRadius: function() { return getSectorCornerRadius; }
});
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56190);
/* ESM import */var zrender_lib_contain_text_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50122);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
44202: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  aboveViewRoot: function() { return aboveViewRoot; },
  getPathToRoot: function() { return getPathToRoot; },
  retrieveTargetInfo: function() { return retrieveTargetInfo; },
  wrapTreePathInfo: function() { return wrapTreePathInfo; }
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
11246: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  WhiskerBoxCommonMixin: function() { return WhiskerBoxCommonMixin; }
});
/* ESM import */var _createSeriesDataSimply_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45013);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56190);
/* ESM import */var _data_helper_dimensionHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7676);
/* ESM import */var _data_helper_sourceHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56562);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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