/*!
 * vue-admin-better
 * GitHub: https://github.com/zxwk1998/vue-admin-better
 * Gitee: https://gitee.com/chu1204505056/vue-admin-better
 *
 * 版权所有 (c) 2025 vue-admin-better
 * 本项目使用 MIT 许可证
 * 构建时间: 2025-12-20 05:35:16
 */
"use strict";
(self["webpackChunkvue_admin_better"] = self["webpackChunkvue_admin_better"] || []).push([["9898"], {
62527: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  installLabelLayout: function() { return /* binding */ installLabelLayout; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js
var model = __webpack_require__(67698);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/BoundingRect.js
var BoundingRect = __webpack_require__(7544);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/animation/basicTransition.js
var basicTransition = __webpack_require__(95086);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/innerStore.js
var innerStore = __webpack_require__(61022);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(64782);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/Transformable.js
var Transformable = __webpack_require__(30128);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelGuideHelper.js
var labelGuideHelper = __webpack_require__(19509);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(9774);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelLayoutHelper.js
var labelLayoutHelper = __webpack_require__(86031);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelStyle.js
var label_labelStyle = __webpack_require__(51160);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/contain/util.js
var contain_util = __webpack_require__(28977);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/LabelManager.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/
// TODO: move labels out of viewport.










function cloneArr(points) {
  if (points) {
    var newPoints = [];
    for (var i = 0; i < points.length; i++) {
      newPoints.push(points[i].slice());
    }
    return newPoints;
  }
}
function prepareLayoutCallbackParams(labelItem, hostEl) {
  var label = labelItem.label;
  var labelLine = hostEl && hostEl.getTextGuideLine();
  return {
    dataIndex: labelItem.dataIndex,
    dataType: labelItem.dataType,
    seriesIndex: labelItem.seriesModel.seriesIndex,
    text: labelItem.label.style.text,
    rect: labelItem.hostRect,
    labelRect: labelItem.rect,
    // x: labelAttr.x,
    // y: labelAttr.y,
    align: label.style.align,
    verticalAlign: label.style.verticalAlign,
    labelLinePoints: cloneArr(labelLine && labelLine.shape.points)
  };
}
var LABEL_OPTION_TO_STYLE_KEYS = ['align', 'verticalAlign', 'width', 'height', 'fontSize'];
var dummyTransformable = new Transformable["default"]();
var labelLayoutInnerStore = (0,model.makeInner)();
var labelLineAnimationStore = (0,model.makeInner)();
function extendWithKeys(target, source, keys) {
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (source[key] != null) {
      target[key] = source[key];
    }
  }
}
var LABEL_LAYOUT_PROPS = ['x', 'y', 'rotation'];
var LabelManager_LabelManager = /** @class */function () {
  function LabelManager() {
    this._labelList = [];
    this._chartViewList = [];
  }
  LabelManager.prototype.clearLabels = function () {
    this._labelList = [];
    this._chartViewList = [];
  };
  /**
   * Add label to manager
   */
  LabelManager.prototype._addLabel = function (dataIndex, dataType, seriesModel, label, layoutOptionOrCb) {
    var labelStyle = label.style;
    var hostEl = label.__hostTarget;
    var textConfig = hostEl.textConfig || {};
    // TODO: If label is in other state.
    var labelTransform = label.getComputedTransform();
    var labelRect = label.getBoundingRect().plain();
    BoundingRect["default"].applyTransform(labelRect, labelRect, labelTransform);
    if (labelTransform) {
      dummyTransformable.setLocalTransform(labelTransform);
    } else {
      // Identity transform.
      dummyTransformable.x = dummyTransformable.y = dummyTransformable.rotation = dummyTransformable.originX = dummyTransformable.originY = 0;
      dummyTransformable.scaleX = dummyTransformable.scaleY = 1;
    }
    dummyTransformable.rotation = (0,contain_util.normalizeRadian)(dummyTransformable.rotation);
    var host = label.__hostTarget;
    var hostRect;
    if (host) {
      hostRect = host.getBoundingRect().plain();
      var transform = host.getComputedTransform();
      BoundingRect["default"].applyTransform(hostRect, hostRect, transform);
    }
    var labelGuide = hostRect && host.getTextGuideLine();
    this._labelList.push({
      label: label,
      labelLine: labelGuide,
      seriesModel: seriesModel,
      dataIndex: dataIndex,
      dataType: dataType,
      layoutOptionOrCb: layoutOptionOrCb,
      layoutOption: null,
      rect: labelRect,
      hostRect: hostRect,
      // Label with lower priority will be hidden when overlapped
      // Use rect size as default priority
      priority: hostRect ? hostRect.width * hostRect.height : 0,
      // Save default label attributes.
      // For restore if developers want get back to default value in callback.
      defaultAttr: {
        ignore: label.ignore,
        labelGuideIgnore: labelGuide && labelGuide.ignore,
        x: dummyTransformable.x,
        y: dummyTransformable.y,
        scaleX: dummyTransformable.scaleX,
        scaleY: dummyTransformable.scaleY,
        rotation: dummyTransformable.rotation,
        style: {
          x: labelStyle.x,
          y: labelStyle.y,
          align: labelStyle.align,
          verticalAlign: labelStyle.verticalAlign,
          width: labelStyle.width,
          height: labelStyle.height,
          fontSize: labelStyle.fontSize
        },
        cursor: label.cursor,
        attachedPos: textConfig.position,
        attachedRot: textConfig.rotation
      }
    });
  };
  LabelManager.prototype.addLabelsOfSeries = function (chartView) {
    var _this = this;
    this._chartViewList.push(chartView);
    var seriesModel = chartView.__model;
    var layoutOption = seriesModel.get('labelLayout');
    /**
     * Ignore layouting if it's not specified anything.
     */
    if (!((0,util.isFunction)(layoutOption) || (0,util.keys)(layoutOption).length)) {
      return;
    }
    chartView.group.traverse(function (child) {
      if (child.ignore) {
        return true; // Stop traverse descendants.
      }
      // Only support label being hosted on graphic elements.
      var textEl = child.getTextContent();
      var ecData = (0,innerStore.getECData)(child);
      // Can only attach the text on the element with dataIndex
      if (textEl && !textEl.disableLabelLayout) {
        _this._addLabel(ecData.dataIndex, ecData.dataType, seriesModel, textEl, layoutOption);
      }
    });
  };
  LabelManager.prototype.updateLayoutConfig = function (api) {
    var width = api.getWidth();
    var height = api.getHeight();
    function createDragHandler(el, labelLineModel) {
      return function () {
        (0,labelGuideHelper.updateLabelLinePoints)(el, labelLineModel);
      };
    }
    for (var i = 0; i < this._labelList.length; i++) {
      var labelItem = this._labelList[i];
      var label = labelItem.label;
      var hostEl = label.__hostTarget;
      var defaultLabelAttr = labelItem.defaultAttr;
      var layoutOption = void 0;
      // TODO A global layout option?
      if ((0,util.isFunction)(labelItem.layoutOptionOrCb)) {
        layoutOption = labelItem.layoutOptionOrCb(prepareLayoutCallbackParams(labelItem, hostEl));
      } else {
        layoutOption = labelItem.layoutOptionOrCb;
      }
      layoutOption = layoutOption || {};
      labelItem.layoutOption = layoutOption;
      var degreeToRadian = Math.PI / 180;
      // TODO hostEl should always exists.
      // Or label should not have parent because the x, y is all in global space.
      if (hostEl) {
        hostEl.setTextConfig({
          // Force to set local false.
          local: false,
          // Ignore position and rotation config on the host el if x or y is changed.
          position: layoutOption.x != null || layoutOption.y != null ? null : defaultLabelAttr.attachedPos,
          // Ignore rotation config on the host el if rotation is changed.
          rotation: layoutOption.rotate != null ? layoutOption.rotate * degreeToRadian : defaultLabelAttr.attachedRot,
          offset: [layoutOption.dx || 0, layoutOption.dy || 0]
        });
      }
      var needsUpdateLabelLine = false;
      if (layoutOption.x != null) {
        // TODO width of chart view.
        label.x = (0,number.parsePercent)(layoutOption.x, width);
        label.setStyle('x', 0); // Ignore movement in style. TODO: origin.
        needsUpdateLabelLine = true;
      } else {
        label.x = defaultLabelAttr.x;
        label.setStyle('x', defaultLabelAttr.style.x);
      }
      if (layoutOption.y != null) {
        // TODO height of chart view.
        label.y = (0,number.parsePercent)(layoutOption.y, height);
        label.setStyle('y', 0); // Ignore movement in style.
        needsUpdateLabelLine = true;
      } else {
        label.y = defaultLabelAttr.y;
        label.setStyle('y', defaultLabelAttr.style.y);
      }
      if (layoutOption.labelLinePoints) {
        var guideLine = hostEl.getTextGuideLine();
        if (guideLine) {
          guideLine.setShape({
            points: layoutOption.labelLinePoints
          });
          // Not update
          needsUpdateLabelLine = false;
        }
      }
      var labelLayoutStore = labelLayoutInnerStore(label);
      labelLayoutStore.needsUpdateLabelLine = needsUpdateLabelLine;
      label.rotation = layoutOption.rotate != null ? layoutOption.rotate * degreeToRadian : defaultLabelAttr.rotation;
      label.scaleX = defaultLabelAttr.scaleX;
      label.scaleY = defaultLabelAttr.scaleY;
      for (var k = 0; k < LABEL_OPTION_TO_STYLE_KEYS.length; k++) {
        var key = LABEL_OPTION_TO_STYLE_KEYS[k];
        label.setStyle(key, layoutOption[key] != null ? layoutOption[key] : defaultLabelAttr.style[key]);
      }
      if (layoutOption.draggable) {
        label.draggable = true;
        label.cursor = 'move';
        if (hostEl) {
          var hostModel = labelItem.seriesModel;
          if (labelItem.dataIndex != null) {
            var data = labelItem.seriesModel.getData(labelItem.dataType);
            hostModel = data.getItemModel(labelItem.dataIndex);
          }
          label.on('drag', createDragHandler(hostEl, hostModel.getModel('labelLine')));
        }
      } else {
        // TODO Other drag functions?
        label.off('drag');
        label.cursor = defaultLabelAttr.cursor;
      }
    }
  };
  LabelManager.prototype.layout = function (api) {
    var width = api.getWidth();
    var height = api.getHeight();
    var labelList = [];
    (0,util.each)(this._labelList, function (inputItem) {
      if (!inputItem.defaultAttr.ignore) {
        labelList.push((0,labelLayoutHelper.newLabelLayoutWithGeometry)({}, inputItem));
      }
    });
    var labelsNeedsAdjustOnX = (0,util.filter)(labelList, function (item) {
      return item.layoutOption.moveOverlap === 'shiftX';
    });
    var labelsNeedsAdjustOnY = (0,util.filter)(labelList, function (item) {
      return item.layoutOption.moveOverlap === 'shiftY';
    });
    (0,labelLayoutHelper.shiftLayoutOnXY)(labelsNeedsAdjustOnX, 0, 0, width);
    (0,labelLayoutHelper.shiftLayoutOnXY)(labelsNeedsAdjustOnY, 1, 0, height);
    var labelsNeedsHideOverlap = (0,util.filter)(labelList, function (item) {
      return item.layoutOption.hideOverlap;
    });
    (0,labelLayoutHelper.restoreIgnore)(labelsNeedsHideOverlap);
    (0,labelLayoutHelper.hideOverlap)(labelsNeedsHideOverlap);
  };
  /**
   * Process all labels. Not only labels with layoutOption.
   */
  LabelManager.prototype.processLabelsOverall = function () {
    var _this = this;
    (0,util.each)(this._chartViewList, function (chartView) {
      var seriesModel = chartView.__model;
      var ignoreLabelLineUpdate = chartView.ignoreLabelLineUpdate;
      var animationEnabled = seriesModel.isAnimationEnabled();
      chartView.group.traverse(function (child) {
        if (child.ignore && !child.forceLabelAnimation) {
          return true; // Stop traverse descendants.
        }
        var needsUpdateLabelLine = !ignoreLabelLineUpdate;
        var label = child.getTextContent();
        if (!needsUpdateLabelLine && label) {
          needsUpdateLabelLine = labelLayoutInnerStore(label).needsUpdateLabelLine;
        }
        if (needsUpdateLabelLine) {
          _this._updateLabelLine(child, seriesModel);
        }
        if (animationEnabled) {
          _this._animateLabels(child, seriesModel);
        }
      });
    });
  };
  LabelManager.prototype._updateLabelLine = function (el, seriesModel) {
    // Only support label being hosted on graphic elements.
    var textEl = el.getTextContent();
    // Update label line style.
    var ecData = (0,innerStore.getECData)(el);
    var dataIndex = ecData.dataIndex;
    // Only support labelLine on the labels represent data.
    if (textEl && dataIndex != null) {
      var data = seriesModel.getData(ecData.dataType);
      var itemModel = data.getItemModel(dataIndex);
      var defaultStyle = {};
      var visualStyle = data.getItemVisual(dataIndex, 'style');
      if (visualStyle) {
        var visualType = data.getVisual('drawType');
        // Default to be same with main color
        defaultStyle.stroke = visualStyle[visualType];
      }
      var labelLineModel = itemModel.getModel('labelLine');
      (0,labelGuideHelper.setLabelLineStyle)(el, (0,labelGuideHelper.getLabelLineStatesModels)(itemModel), defaultStyle);
      (0,labelGuideHelper.updateLabelLinePoints)(el, labelLineModel);
    }
  };
  LabelManager.prototype._animateLabels = function (el, seriesModel) {
    var textEl = el.getTextContent();
    var guideLine = el.getTextGuideLine();
    // Animate
    if (textEl
    // `forceLabelAnimation` has the highest priority
    && (el.forceLabelAnimation || !textEl.ignore && !textEl.invisible && !el.disableLabelAnimation && !(0,basicTransition.isElementRemoved)(el))) {
      var layoutStore = labelLayoutInnerStore(textEl);
      var oldLayout = layoutStore.oldLayout;
      var ecData = (0,innerStore.getECData)(el);
      var dataIndex = ecData.dataIndex;
      var newProps = {
        x: textEl.x,
        y: textEl.y,
        rotation: textEl.rotation
      };
      var data = seriesModel.getData(ecData.dataType);
      if (!oldLayout) {
        textEl.attr(newProps);
        // Disable fade in animation if value animation is enabled.
        if (!(0,label_labelStyle.labelInner)(textEl).valueAnimation) {
          var oldOpacity = (0,util.retrieve2)(textEl.style.opacity, 1);
          // Fade in animation
          textEl.style.opacity = 0;
          (0,basicTransition.initProps)(textEl, {
            style: {
              opacity: oldOpacity
            }
          }, seriesModel, dataIndex);
        }
      } else {
        textEl.attr(oldLayout);
        // Make sure the animation from is in the right status.
        var prevStates = el.prevStates;
        if (prevStates) {
          if ((0,util.indexOf)(prevStates, 'select') >= 0) {
            textEl.attr(layoutStore.oldLayoutSelect);
          }
          if ((0,util.indexOf)(prevStates, 'emphasis') >= 0) {
            textEl.attr(layoutStore.oldLayoutEmphasis);
          }
        }
        (0,basicTransition.updateProps)(textEl, newProps, seriesModel, dataIndex);
      }
      layoutStore.oldLayout = newProps;
      if (textEl.states.select) {
        var layoutSelect = layoutStore.oldLayoutSelect = {};
        extendWithKeys(layoutSelect, newProps, LABEL_LAYOUT_PROPS);
        extendWithKeys(layoutSelect, textEl.states.select, LABEL_LAYOUT_PROPS);
      }
      if (textEl.states.emphasis) {
        var layoutEmphasis = layoutStore.oldLayoutEmphasis = {};
        extendWithKeys(layoutEmphasis, newProps, LABEL_LAYOUT_PROPS);
        extendWithKeys(layoutEmphasis, textEl.states.emphasis, LABEL_LAYOUT_PROPS);
      }
      (0,label_labelStyle.animateLabelValue)(textEl, dataIndex, data, seriesModel, seriesModel);
    }
    if (guideLine && !guideLine.ignore && !guideLine.invisible) {
      var layoutStore = labelLineAnimationStore(guideLine);
      var oldLayout = layoutStore.oldLayout;
      var newLayout = {
        points: guideLine.shape.points
      };
      if (!oldLayout) {
        guideLine.setShape(newLayout);
        guideLine.style.strokePercent = 0;
        (0,basicTransition.initProps)(guideLine, {
          style: {
            strokePercent: 1
          }
        }, seriesModel);
      } else {
        guideLine.attr({
          shape: oldLayout
        });
        (0,basicTransition.updateProps)(guideLine, {
          shape: newLayout
        }, seriesModel);
      }
      layoutStore.oldLayout = newLayout;
    }
  };
  return LabelManager;
}();
/* export default */ var label_LabelManager = (LabelManager_LabelManager);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/installLabelLayout.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


var getLabelManager = (0,model.makeInner)();
function installLabelLayout(registers) {
  registers.registerUpdateLifecycle('series:beforeupdate', function (ecModel, api, params) {
    // TODO api provide an namespace that can save stuff per instance
    var labelManager = getLabelManager(api).labelManager;
    if (!labelManager) {
      labelManager = getLabelManager(api).labelManager = new label_LabelManager();
    }
    labelManager.clearLabels();
  });
  registers.registerUpdateLifecycle('series:layoutlabels', function (ecModel, api, params) {
    var labelManager = getLabelManager(api).labelManager;
    params.updatedSeries.forEach(function (series) {
      labelManager.addLabelsOfSeries(api.getViewOfSeriesModel(series));
    });
    labelManager.updateLayoutConfig(api);
    labelManager.layout(api);
    labelManager.processLabelsOverall();
  });
}

}),
19509: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getLabelLineStatesModels: function() { return getLabelLineStatesModels; },
  limitSurfaceAngle: function() { return limitSurfaceAngle; },
  limitTurnAngle: function() { return limitTurnAngle; },
  setLabelLineStyle: function() { return setLabelLineStyle; },
  updateLabelLinePoints: function() { return updateLabelLinePoints; }
});
/* import */ var _util_graphic_js__rspack_import_3 = __webpack_require__(97270);
/* import */ var _util_graphic_js__rspack_import_5 = __webpack_require__(17907);
/* import */ var _util_graphic_js__rspack_import_9 = __webpack_require__(69935);
/* import */ var zrender_lib_core_PathProxy_js__rspack_import_0 = __webpack_require__(99585);
/* import */ var zrender_lib_contain_util_js__rspack_import_1 = __webpack_require__(28977);
/* import */ var zrender_lib_core_curve_js__rspack_import_2 = __webpack_require__(50631);
/* import */ var zrender_lib_core_util_js__rspack_import_8 = __webpack_require__(9774);
/* import */ var zrender_lib_core_matrix_js__rspack_import_4 = __webpack_require__(46239);
/* import */ var zrender_lib_core_vector_js__rspack_import_6 = __webpack_require__(44721);
/* import */ var _util_states_js__rspack_import_7 = __webpack_require__(72825);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
var CMD = zrender_lib_core_PathProxy_js__rspack_import_0["default"].CMD;
var DEFAULT_SEARCH_SPACE = ['top', 'right', 'bottom', 'left'];
function getCandidateAnchor(pos, distance, rect, outPt, outDir) {
  var width = rect.width;
  var height = rect.height;
  switch (pos) {
    case 'top':
      outPt.set(rect.x + width / 2, rect.y - distance);
      outDir.set(0, -1);
      break;
    case 'bottom':
      outPt.set(rect.x + width / 2, rect.y + height + distance);
      outDir.set(0, 1);
      break;
    case 'left':
      outPt.set(rect.x - distance, rect.y + height / 2);
      outDir.set(-1, 0);
      break;
    case 'right':
      outPt.set(rect.x + width + distance, rect.y + height / 2);
      outDir.set(1, 0);
      break;
  }
}
function projectPointToArc(cx, cy, r, startAngle, endAngle, anticlockwise, x, y, out) {
  x -= cx;
  y -= cy;
  var d = Math.sqrt(x * x + y * y);
  x /= d;
  y /= d;
  // Intersect point.
  var ox = x * r + cx;
  var oy = y * r + cy;
  if (Math.abs(startAngle - endAngle) % PI2 < 1e-4) {
    // Is a circle
    out[0] = ox;
    out[1] = oy;
    return d - r;
  }
  if (anticlockwise) {
    var tmp = startAngle;
    startAngle = (0,zrender_lib_contain_util_js__rspack_import_1.normalizeRadian)(endAngle);
    endAngle = (0,zrender_lib_contain_util_js__rspack_import_1.normalizeRadian)(tmp);
  } else {
    startAngle = (0,zrender_lib_contain_util_js__rspack_import_1.normalizeRadian)(startAngle);
    endAngle = (0,zrender_lib_contain_util_js__rspack_import_1.normalizeRadian)(endAngle);
  }
  if (startAngle > endAngle) {
    endAngle += PI2;
  }
  var angle = Math.atan2(y, x);
  if (angle < 0) {
    angle += PI2;
  }
  if (angle >= startAngle && angle <= endAngle || angle + PI2 >= startAngle && angle + PI2 <= endAngle) {
    // Project point is on the arc.
    out[0] = ox;
    out[1] = oy;
    return d - r;
  }
  var x1 = r * Math.cos(startAngle) + cx;
  var y1 = r * Math.sin(startAngle) + cy;
  var x2 = r * Math.cos(endAngle) + cx;
  var y2 = r * Math.sin(endAngle) + cy;
  var d1 = (x1 - x) * (x1 - x) + (y1 - y) * (y1 - y);
  var d2 = (x2 - x) * (x2 - x) + (y2 - y) * (y2 - y);
  if (d1 < d2) {
    out[0] = x1;
    out[1] = y1;
    return Math.sqrt(d1);
  } else {
    out[0] = x2;
    out[1] = y2;
    return Math.sqrt(d2);
  }
}
function projectPointToLine(x1, y1, x2, y2, x, y, out, limitToEnds) {
  var dx = x - x1;
  var dy = y - y1;
  var dx1 = x2 - x1;
  var dy1 = y2 - y1;
  var lineLen = Math.sqrt(dx1 * dx1 + dy1 * dy1);
  dx1 /= lineLen;
  dy1 /= lineLen;
  // dot product
  var projectedLen = dx * dx1 + dy * dy1;
  var t = projectedLen / lineLen;
  if (limitToEnds) {
    t = Math.min(Math.max(t, 0), 1);
  }
  t *= lineLen;
  var ox = out[0] = x1 + t * dx1;
  var oy = out[1] = y1 + t * dy1;
  return Math.sqrt((ox - x) * (ox - x) + (oy - y) * (oy - y));
}
function projectPointToRect(x1, y1, width, height, x, y, out) {
  if (width < 0) {
    x1 = x1 + width;
    width = -width;
  }
  if (height < 0) {
    y1 = y1 + height;
    height = -height;
  }
  var x2 = x1 + width;
  var y2 = y1 + height;
  var ox = out[0] = Math.min(Math.max(x, x1), x2);
  var oy = out[1] = Math.min(Math.max(y, y1), y2);
  return Math.sqrt((ox - x) * (ox - x) + (oy - y) * (oy - y));
}
var tmpPt = [];
function nearestPointOnRect(pt, rect, out) {
  var dist = projectPointToRect(rect.x, rect.y, rect.width, rect.height, pt.x, pt.y, tmpPt);
  out.set(tmpPt[0], tmpPt[1]);
  return dist;
}
/**
 * Calculate min distance corresponding point.
 * This method won't evaluate if point is in the path.
 */
function nearestPointOnPath(pt, path, out) {
  var xi = 0;
  var yi = 0;
  var x0 = 0;
  var y0 = 0;
  var x1;
  var y1;
  var minDist = Infinity;
  var data = path.data;
  var x = pt.x;
  var y = pt.y;
  for (var i = 0; i < data.length;) {
    var cmd = data[i++];
    if (i === 1) {
      xi = data[i];
      yi = data[i + 1];
      x0 = xi;
      y0 = yi;
    }
    var d = minDist;
    switch (cmd) {
      case CMD.M:
        // moveTo 命令重新创建一个新的 subpath, 并且更新新的起点
        // 在 closePath 的时候使用
        x0 = data[i++];
        y0 = data[i++];
        xi = x0;
        yi = y0;
        break;
      case CMD.L:
        d = projectPointToLine(xi, yi, data[i], data[i + 1], x, y, tmpPt, true);
        xi = data[i++];
        yi = data[i++];
        break;
      case CMD.C:
        d = (0,zrender_lib_core_curve_js__rspack_import_2.cubicProjectPoint)(xi, yi, data[i++], data[i++], data[i++], data[i++], data[i], data[i + 1], x, y, tmpPt);
        xi = data[i++];
        yi = data[i++];
        break;
      case CMD.Q:
        d = (0,zrender_lib_core_curve_js__rspack_import_2.quadraticProjectPoint)(xi, yi, data[i++], data[i++], data[i], data[i + 1], x, y, tmpPt);
        xi = data[i++];
        yi = data[i++];
        break;
      case CMD.A:
        // TODO Arc 判断的开销比较大
        var cx = data[i++];
        var cy = data[i++];
        var rx = data[i++];
        var ry = data[i++];
        var theta = data[i++];
        var dTheta = data[i++];
        // TODO Arc 旋转
        i += 1;
        var anticlockwise = !!(1 - data[i++]);
        x1 = Math.cos(theta) * rx + cx;
        y1 = Math.sin(theta) * ry + cy;
        // 不是直接使用 arc 命令
        if (i <= 1) {
          // 第一个命令起点还未定义
          x0 = x1;
          y0 = y1;
        }
        // zr 使用scale来模拟椭圆, 这里也对x做一定的缩放
        var _x = (x - cx) * ry / rx + cx;
        d = projectPointToArc(cx, cy, ry, theta, theta + dTheta, anticlockwise, _x, y, tmpPt);
        xi = Math.cos(theta + dTheta) * rx + cx;
        yi = Math.sin(theta + dTheta) * ry + cy;
        break;
      case CMD.R:
        x0 = xi = data[i++];
        y0 = yi = data[i++];
        var width = data[i++];
        var height = data[i++];
        d = projectPointToRect(x0, y0, width, height, x, y, tmpPt);
        break;
      case CMD.Z:
        d = projectPointToLine(xi, yi, x0, y0, x, y, tmpPt, true);
        xi = x0;
        yi = y0;
        break;
    }
    if (d < minDist) {
      minDist = d;
      out.set(tmpPt[0], tmpPt[1]);
    }
  }
  return minDist;
}
// Temporal variable for intermediate usage.
var pt0 = new _util_graphic_js__rspack_import_3["default"]();
var pt1 = new _util_graphic_js__rspack_import_3["default"]();
var pt2 = new _util_graphic_js__rspack_import_3["default"]();
var dir = new _util_graphic_js__rspack_import_3["default"]();
var dir2 = new _util_graphic_js__rspack_import_3["default"]();
/**
 * Calculate a proper guide line based on the label position and graphic element definition
 * @param label
 * @param labelRect
 * @param target
 * @param targetRect
 */
function updateLabelLinePoints(target, labelLineModel) {
  if (!target) {
    return;
  }
  var labelLine = target.getTextGuideLine();
  var label = target.getTextContent();
  // Needs to create text guide in each charts.
  if (!(label && labelLine)) {
    return;
  }
  var labelGuideConfig = target.textGuideLineConfig || {};
  var points = [[0, 0], [0, 0], [0, 0]];
  var searchSpace = labelGuideConfig.candidates || DEFAULT_SEARCH_SPACE;
  var labelRect = label.getBoundingRect().clone();
  labelRect.applyTransform(label.getComputedTransform());
  var minDist = Infinity;
  var anchorPoint = labelGuideConfig.anchor;
  var targetTransform = target.getComputedTransform();
  var targetInversedTransform = targetTransform && (0,zrender_lib_core_matrix_js__rspack_import_4.invert)([], targetTransform);
  var len = labelLineModel.get('length2') || 0;
  if (anchorPoint) {
    pt2.copy(anchorPoint);
  }
  for (var i = 0; i < searchSpace.length; i++) {
    var candidate = searchSpace[i];
    getCandidateAnchor(candidate, 0, labelRect, pt0, dir);
    _util_graphic_js__rspack_import_3["default"].scaleAndAdd(pt1, pt0, dir, len);
    // Transform to target coord space.
    pt1.transform(targetInversedTransform);
    // Note: getBoundingRect will ensure the `path` being created.
    var boundingRect = target.getBoundingRect();
    var dist = anchorPoint ? anchorPoint.distance(pt1) : target instanceof _util_graphic_js__rspack_import_5["default"] ? nearestPointOnPath(pt1, target.path, pt2) : nearestPointOnRect(pt1, boundingRect, pt2);
    // TODO pt2 is in the path
    if (dist < minDist) {
      minDist = dist;
      // Transform back to global space.
      pt1.transform(targetTransform);
      pt2.transform(targetTransform);
      pt2.toArray(points[0]);
      pt1.toArray(points[1]);
      pt0.toArray(points[2]);
    }
  }
  limitTurnAngle(points, labelLineModel.get('minTurnAngle'));
  labelLine.setShape({
    points: points
  });
}
// Temporal variable for the limitTurnAngle function
var tmpArr = [];
var tmpProjPoint = new _util_graphic_js__rspack_import_3["default"]();
/**
 * Reduce the line segment attached to the label to limit the turn angle between two segments.
 * @param linePoints
 * @param minTurnAngle Radian of minimum turn angle. 0 - 180
 */
function limitTurnAngle(linePoints, minTurnAngle) {
  if (!(minTurnAngle <= 180 && minTurnAngle > 0)) {
    return;
  }
  minTurnAngle = minTurnAngle / 180 * Math.PI;
  // The line points can be
  //      /pt1----pt2 (label)
  //     /
  // pt0/
  pt0.fromArray(linePoints[0]);
  pt1.fromArray(linePoints[1]);
  pt2.fromArray(linePoints[2]);
  _util_graphic_js__rspack_import_3["default"].sub(dir, pt0, pt1);
  _util_graphic_js__rspack_import_3["default"].sub(dir2, pt2, pt1);
  var len1 = dir.len();
  var len2 = dir2.len();
  if (len1 < 1e-3 || len2 < 1e-3) {
    return;
  }
  dir.scale(1 / len1);
  dir2.scale(1 / len2);
  var angleCos = dir.dot(dir2);
  var minTurnAngleCos = Math.cos(minTurnAngle);
  if (minTurnAngleCos < angleCos) {
    // Smaller than minTurnAngle
    // Calculate project point of pt0 on pt1-pt2
    var d = projectPointToLine(pt1.x, pt1.y, pt2.x, pt2.y, pt0.x, pt0.y, tmpArr, false);
    tmpProjPoint.fromArray(tmpArr);
    // Calculate new projected length with limited minTurnAngle and get the new connect point
    tmpProjPoint.scaleAndAdd(dir2, d / Math.tan(Math.PI - minTurnAngle));
    // Limit the new calculated connect point between pt1 and pt2.
    var t = pt2.x !== pt1.x ? (tmpProjPoint.x - pt1.x) / (pt2.x - pt1.x) : (tmpProjPoint.y - pt1.y) / (pt2.y - pt1.y);
    if (isNaN(t)) {
      return;
    }
    if (t < 0) {
      _util_graphic_js__rspack_import_3["default"].copy(tmpProjPoint, pt1);
    } else if (t > 1) {
      _util_graphic_js__rspack_import_3["default"].copy(tmpProjPoint, pt2);
    }
    tmpProjPoint.toArray(linePoints[1]);
  }
}
/**
 * Limit the angle of line and the surface
 * @param maxSurfaceAngle Radian of minimum turn angle. 0 - 180. 0 is same direction to normal. 180 is opposite
 */
function limitSurfaceAngle(linePoints, surfaceNormal, maxSurfaceAngle) {
  if (!(maxSurfaceAngle <= 180 && maxSurfaceAngle > 0)) {
    return;
  }
  maxSurfaceAngle = maxSurfaceAngle / 180 * Math.PI;
  pt0.fromArray(linePoints[0]);
  pt1.fromArray(linePoints[1]);
  pt2.fromArray(linePoints[2]);
  _util_graphic_js__rspack_import_3["default"].sub(dir, pt1, pt0);
  _util_graphic_js__rspack_import_3["default"].sub(dir2, pt2, pt1);
  var len1 = dir.len();
  var len2 = dir2.len();
  if (len1 < 1e-3 || len2 < 1e-3) {
    return;
  }
  dir.scale(1 / len1);
  dir2.scale(1 / len2);
  var angleCos = dir.dot(surfaceNormal);
  var maxSurfaceAngleCos = Math.cos(maxSurfaceAngle);
  if (angleCos < maxSurfaceAngleCos) {
    // Calculate project point of pt0 on pt1-pt2
    var d = projectPointToLine(pt1.x, pt1.y, pt2.x, pt2.y, pt0.x, pt0.y, tmpArr, false);
    tmpProjPoint.fromArray(tmpArr);
    var HALF_PI = Math.PI / 2;
    var angle2 = Math.acos(dir2.dot(surfaceNormal));
    var newAngle = HALF_PI + angle2 - maxSurfaceAngle;
    if (newAngle >= HALF_PI) {
      // parallel
      _util_graphic_js__rspack_import_3["default"].copy(tmpProjPoint, pt2);
    } else {
      // Calculate new projected length with limited minTurnAngle and get the new connect point
      tmpProjPoint.scaleAndAdd(dir2, d / Math.tan(Math.PI / 2 - newAngle));
      // Limit the new calculated connect point between pt1 and pt2.
      var t = pt2.x !== pt1.x ? (tmpProjPoint.x - pt1.x) / (pt2.x - pt1.x) : (tmpProjPoint.y - pt1.y) / (pt2.y - pt1.y);
      if (isNaN(t)) {
        return;
      }
      if (t < 0) {
        _util_graphic_js__rspack_import_3["default"].copy(tmpProjPoint, pt1);
      } else if (t > 1) {
        _util_graphic_js__rspack_import_3["default"].copy(tmpProjPoint, pt2);
      }
    }
    tmpProjPoint.toArray(linePoints[1]);
  }
}
function setLabelLineState(labelLine, ignore, stateName, stateModel) {
  var isNormal = stateName === 'normal';
  var stateObj = isNormal ? labelLine : labelLine.ensureState(stateName);
  // Make sure display.
  stateObj.ignore = ignore;
  // Set smooth
  var smooth = stateModel.get('smooth');
  if (smooth && smooth === true) {
    smooth = 0.3;
  }
  stateObj.shape = stateObj.shape || {};
  if (smooth > 0) {
    stateObj.shape.smooth = smooth;
  }
  var styleObj = stateModel.getModel('lineStyle').getLineStyle();
  isNormal ? labelLine.useStyle(styleObj) : stateObj.style = styleObj;
}
function buildLabelLinePath(path, shape) {
  var smooth = shape.smooth;
  var points = shape.points;
  if (!points) {
    return;
  }
  path.moveTo(points[0][0], points[0][1]);
  if (smooth > 0 && points.length >= 3) {
    var len1 = zrender_lib_core_vector_js__rspack_import_6.dist(points[0], points[1]);
    var len2 = zrender_lib_core_vector_js__rspack_import_6.dist(points[1], points[2]);
    if (!len1 || !len2) {
      path.lineTo(points[1][0], points[1][1]);
      path.lineTo(points[2][0], points[2][1]);
      return;
    }
    var moveLen = Math.min(len1, len2) * smooth;
    var midPoint0 = zrender_lib_core_vector_js__rspack_import_6.lerp([], points[1], points[0], moveLen / len1);
    var midPoint2 = zrender_lib_core_vector_js__rspack_import_6.lerp([], points[1], points[2], moveLen / len2);
    var midPoint1 = zrender_lib_core_vector_js__rspack_import_6.lerp([], midPoint0, midPoint2, 0.5);
    path.bezierCurveTo(midPoint0[0], midPoint0[1], midPoint0[0], midPoint0[1], midPoint1[0], midPoint1[1]);
    path.bezierCurveTo(midPoint2[0], midPoint2[1], midPoint2[0], midPoint2[1], points[2][0], points[2][1]);
  } else {
    for (var i = 1; i < points.length; i++) {
      path.lineTo(points[i][0], points[i][1]);
    }
  }
}
/**
 * Create a label line if necessary and set it's style.
 */
function setLabelLineStyle(targetEl, statesModels, defaultStyle) {
  var labelLine = targetEl.getTextGuideLine();
  var label = targetEl.getTextContent();
  if (!label) {
    // Not show label line if there is no label.
    if (labelLine) {
      targetEl.removeTextGuideLine();
    }
    return;
  }
  var normalModel = statesModels.normal;
  var showNormal = normalModel.get('show');
  var labelIgnoreNormal = label.ignore;
  for (var i = 0; i < _util_states_js__rspack_import_7.DISPLAY_STATES.length; i++) {
    var stateName = _util_states_js__rspack_import_7.DISPLAY_STATES[i];
    var stateModel = statesModels[stateName];
    var isNormal = stateName === 'normal';
    if (stateModel) {
      var stateShow = stateModel.get('show');
      var isLabelIgnored = isNormal ? labelIgnoreNormal : (0,zrender_lib_core_util_js__rspack_import_8.retrieve2)(label.states[stateName] && label.states[stateName].ignore, labelIgnoreNormal);
      if (isLabelIgnored // Not show when label is not shown in this state.
      || !(0,zrender_lib_core_util_js__rspack_import_8.retrieve2)(stateShow, showNormal) // Use normal state by default if not set.
      ) {
        var stateObj = isNormal ? labelLine : labelLine && labelLine.states[stateName];
        if (stateObj) {
          stateObj.ignore = true;
        }
        if (!!labelLine) {
          setLabelLineState(labelLine, true, stateName, stateModel);
        }
        continue;
      }
      // Create labelLine if not exists
      if (!labelLine) {
        labelLine = new _util_graphic_js__rspack_import_9["default"]();
        targetEl.setTextGuideLine(labelLine);
        // Reset state of normal because it's new created.
        // NOTE: NORMAL should always been the first!
        if (!isNormal && (labelIgnoreNormal || !showNormal)) {
          setLabelLineState(labelLine, true, 'normal', statesModels.normal);
        }
        // Use same state proxy.
        if (targetEl.stateProxy) {
          labelLine.stateProxy = targetEl.stateProxy;
        }
      }
      setLabelLineState(labelLine, false, stateName, stateModel);
    }
  }
  if (labelLine) {
    (0,zrender_lib_core_util_js__rspack_import_8.defaults)(labelLine.style, defaultStyle);
    // Not fill.
    labelLine.style.fill = null;
    var showAbove = normalModel.get('showAbove');
    var labelLineConfig = targetEl.textGuideLineConfig = targetEl.textGuideLineConfig || {};
    labelLineConfig.showAbove = showAbove || false;
    // Custom the buildPath.
    labelLine.buildPath = buildLabelLinePath;
  }
}
function getLabelLineStatesModels(itemModel, labelLineName) {
  labelLineName = labelLineName || 'labelLine';
  var statesModels = {
    normal: itemModel.getModel(labelLineName)
  };
  for (var i = 0; i < _util_states_js__rspack_import_7.SPECIAL_STATES.length; i++) {
    var stateName = _util_states_js__rspack_import_7.SPECIAL_STATES[i];
    statesModels[stateName] = itemModel.getModel([stateName, labelLineName]);
  }
  return statesModels;
}

}),
86031: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  computeLabelGeometry: function() { return computeLabelGeometry; },
  computeLabelGeometry2: function() { return computeLabelGeometry2; },
  ensureLabelLayoutWithGeometry: function() { return ensureLabelLayoutWithGeometry; },
  hideOverlap: function() { return hideOverlap; },
  labelIntersect: function() { return labelIntersect; },
  labelLayoutApplyTranslation: function() { return labelLayoutApplyTranslation; },
  newLabelLayoutWithGeometry: function() { return newLabelLayoutWithGeometry; },
  restoreIgnore: function() { return restoreIgnore; },
  setLabelLayoutDirty: function() { return setLabelLayoutDirty; },
  shiftLayoutOnXY: function() { return shiftLayoutOnXY; }
});
/* import */ var _util_graphic_js__rspack_import_0 = __webpack_require__(9412);
/* import */ var _util_graphic_js__rspack_import_2 = __webpack_require__(84632);
/* import */ var _labelStyle_js__rspack_import_1 = __webpack_require__(51160);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


var LABEL_LAYOUT_BASE_PROPS = ['label', 'labelLine', 'layoutOption', 'priority', 'defaultAttr', 'marginForce', 'minMarginForce', 'marginDefault', 'suggestIgnore'];
var LABEL_LAYOUT_DIRTY_BIT_OTHERS = 1;
var LABEL_LAYOUT_DIRTY_BIT_OBB = 2;
var LABEL_LAYOUT_DIRTY_ALL = LABEL_LAYOUT_DIRTY_BIT_OTHERS | LABEL_LAYOUT_DIRTY_BIT_OBB;
function setLabelLayoutDirty(labelGeometry, dirtyOrClear, dirtyBits) {
  dirtyBits = dirtyBits || LABEL_LAYOUT_DIRTY_ALL;
  dirtyOrClear ? labelGeometry.dirty |= dirtyBits : labelGeometry.dirty &= ~dirtyBits;
}
function isLabelLayoutDirty(labelGeometry, dirtyBits) {
  dirtyBits = dirtyBits || LABEL_LAYOUT_DIRTY_ALL;
  return labelGeometry.dirty == null || !!(labelGeometry.dirty & dirtyBits);
}
/**
 * [CAUTION]
 *  - No auto dirty propagation mechanism yet. If the transform of the raw label or any of its ancestors is
 *    changed, must sync the changes to the props of `LabelGeometry` by:
 *    either explicitly call:
 *      `setLabelLayoutDirty(labelLayout, true); ensureLabelLayoutWithGeometry(labelLayout);`
 *    or call (if only translation is performed):
 *      `labelLayoutApplyTranslation(labelLayout);`
 *  - `label.ignore` is not necessarily falsy, and not considered in computing `LabelGeometry`,
 *    since it might be modified by some overlap resolving handling.
 *  - To duplicate or make a variation:
 *    use `newLabelLayoutWithGeometry`.
 *
 * The result can also be the input of this method.
 * @return `NullUndefined` if and only if `labelLayout` is `NullUndefined`.
 */
function ensureLabelLayoutWithGeometry(labelLayout) {
  if (!labelLayout) {
    return;
  }
  if (isLabelLayoutDirty(labelLayout)) {
    computeLabelGeometry(labelLayout, labelLayout.label, labelLayout);
  }
  return labelLayout;
}
/**
 * The props in `out` will be filled if existing, or created.
 */
function computeLabelGeometry(out, label, opt) {
  // [CAUTION] These props may be modified directly for performance consideration,
  //  therefore, do not output the internal data structure of zrender Element.
  var rawTransform = label.getComputedTransform();
  out.transform = (0,_util_graphic_js__rspack_import_0.ensureCopyTransform)(out.transform, rawTransform);
  // NOTE: should call `getBoundingRect` after `getComputedTransform`, or may get an inaccurate bounding rect.
  //  The reason is that `getComputedTransform` calls `__host.updateInnerText()` internally, which updates the label
  //  by `textConfig` mounted on the host.
  // PENDING: add a dirty bit for that in zrender?
  var outLocalRect = out.localRect = (0,_util_graphic_js__rspack_import_0.ensureCopyRect)(out.localRect, label.getBoundingRect());
  var labelStyleExt = label.style;
  var margin = labelStyleExt.margin;
  var marginForce = opt && opt.marginForce;
  var minMarginForce = opt && opt.minMarginForce;
  var marginDefault = opt && opt.marginDefault;
  var marginType = labelStyleExt.__marginType;
  if (marginType == null && marginDefault) {
    margin = marginDefault;
    marginType = _labelStyle_js__rspack_import_1.LabelMarginType.textMargin;
  }
  // `textMargin` and `minMargin` can not exist both.
  for (var i = 0; i < 4; i++) {
    _tmpLabelMargin[i] = marginType === _labelStyle_js__rspack_import_1.LabelMarginType.minMargin && minMarginForce && minMarginForce[i] != null ? minMarginForce[i] : marginForce && marginForce[i] != null ? marginForce[i] : margin ? margin[i] : 0;
  }
  if (marginType === _labelStyle_js__rspack_import_1.LabelMarginType.textMargin) {
    (0,_util_graphic_js__rspack_import_0.expandOrShrinkRect)(outLocalRect, _tmpLabelMargin, false, false);
  }
  var outGlobalRect = out.rect = (0,_util_graphic_js__rspack_import_0.ensureCopyRect)(out.rect, outLocalRect);
  if (rawTransform) {
    outGlobalRect.applyTransform(rawTransform);
  }
  // Notice: label.style.margin is actually `minMargin / 2`, handled by `setTextStyleCommon`.
  if (marginType === _labelStyle_js__rspack_import_1.LabelMarginType.minMargin) {
    (0,_util_graphic_js__rspack_import_0.expandOrShrinkRect)(outGlobalRect, _tmpLabelMargin, false, false);
  }
  out.axisAligned = (0,_util_graphic_js__rspack_import_0.isBoundingRectAxisAligned)(rawTransform);
  (out.label = out.label || {}).ignore = label.ignore;
  setLabelLayoutDirty(out, false);
  setLabelLayoutDirty(out, true, LABEL_LAYOUT_DIRTY_BIT_OBB);
  // Do not remove `obb` (if existing) for reuse, just reset the dirty bit.
  return out;
}
var _tmpLabelMargin = [0, 0, 0, 0];
/**
 * The props in `out` will be filled if existing, or created.
 */
function computeLabelGeometry2(out, rawLocalRect, rawTransform) {
  out.transform = (0,_util_graphic_js__rspack_import_0.ensureCopyTransform)(out.transform, rawTransform);
  out.localRect = (0,_util_graphic_js__rspack_import_0.ensureCopyRect)(out.localRect, rawLocalRect);
  out.rect = (0,_util_graphic_js__rspack_import_0.ensureCopyRect)(out.rect, rawLocalRect);
  if (rawTransform) {
    out.rect.applyTransform(rawTransform);
  }
  out.axisAligned = (0,_util_graphic_js__rspack_import_0.isBoundingRectAxisAligned)(rawTransform);
  out.obb = undefined; // Reset to undefined, will be created by `ensureOBB` when using.
  (out.label = out.label || {}).ignore = false;
  return out;
}
/**
 * This is a shortcut of
 *   ```js
 *   labelLayout.label.x = newX;
 *   labelLayout.label.y = newY;
 *   setLabelLayoutDirty(labelLayout, true);
 *   ensureLabelLayoutWithGeometry(labelLayout);
 *   ```
 * and provide better performance in this common case.
 */
function labelLayoutApplyTranslation(labelLayout, offset) {
  if (!labelLayout) {
    return;
  }
  labelLayout.label.x += offset.x;
  labelLayout.label.y += offset.y;
  labelLayout.label.markRedraw();
  var transform = labelLayout.transform;
  if (transform) {
    transform[4] += offset.x;
    transform[5] += offset.y;
  }
  var globalRect = labelLayout.rect;
  if (globalRect) {
    globalRect.x += offset.x;
    globalRect.y += offset.y;
  }
  var obb = labelLayout.obb;
  if (obb) {
    obb.fromBoundingRect(labelLayout.localRect, transform);
  }
}
/**
 * To duplicate or make a variation of a label layout.
 * Copy the only relevant properties to avoid the conflict or wrongly reuse of the props of `LabelLayoutWithGeometry`.
 */
function newLabelLayoutWithGeometry(newBaseWithDefaults, source) {
  for (var i = 0; i < LABEL_LAYOUT_BASE_PROPS.length; i++) {
    var prop = LABEL_LAYOUT_BASE_PROPS[i];
    if (newBaseWithDefaults[prop] == null) {
      newBaseWithDefaults[prop] = source[prop];
    }
  }
  return ensureLabelLayoutWithGeometry(newBaseWithDefaults);
}
/**
 * Create obb if no one, can cache it.
 */
function ensureOBB(labelGeometry) {
  var obb = labelGeometry.obb;
  if (!obb || isLabelLayoutDirty(labelGeometry, LABEL_LAYOUT_DIRTY_BIT_OBB)) {
    labelGeometry.obb = obb = obb || new _util_graphic_js__rspack_import_2["default"]();
    obb.fromBoundingRect(labelGeometry.localRect, labelGeometry.transform);
    setLabelLayoutDirty(labelGeometry, false, LABEL_LAYOUT_DIRTY_BIT_OBB);
  }
  return obb;
}
/**
 * Adjust labels on x/y direction to avoid overlap.
 *
 * PENDING: the current implementation is based on the global bounding rect rather than the local rect,
 *  which may be not preferable in some edge cases when the label has rotation, but works for most cases,
 *  since rotation is unnecessary when there is sufficient space, while squeezing is applied regardless
 *  of overlapping when there is no enough space.
 *
 * NOTICE:
 *  - The input `list` and its content will be modified (sort, label.x/y, rect).
 *  - The caller should sync the modifications to the other parts by
 *    `setLabelLayoutDirty` and `ensureLabelLayoutWithGeometry` if needed.
 *
 * @return adjusted
 */
function shiftLayoutOnXY(list, xyDimIdx,
// 0 for x, 1 for y
minBound,
// for x, leftBound; for y, topBound
maxBound,
// for x, rightBound; for y, bottomBound
// If average the shifts on all labels and add them to 0
// TODO: Not sure if should enable it.
// Pros: The angle of lines will distribute more equally
// Cons: In some layout. It may not what user wanted. like in pie. the label of last sector is usually changed unexpectedly.
balanceShift) {
  var len = list.length;
  var xyDim = _util_graphic_js__rspack_import_0.XY[xyDimIdx];
  var sizeDim = _util_graphic_js__rspack_import_0.WH[xyDimIdx];
  if (len < 2) {
    return false;
  }
  list.sort(function (a, b) {
    return a.rect[xyDim] - b.rect[xyDim];
  });
  var lastPos = 0;
  var delta;
  var adjusted = false;
  // const shifts = [];
  var totalShifts = 0;
  for (var i = 0; i < len; i++) {
    var item = list[i];
    var rect = item.rect;
    delta = rect[xyDim] - lastPos;
    if (delta < 0) {
      // shiftForward(i, len, -delta);
      rect[xyDim] -= delta;
      item.label[xyDim] -= delta;
      adjusted = true;
    }
    var shift = Math.max(-delta, 0);
    // shifts.push(shift);
    totalShifts += shift;
    lastPos = rect[xyDim] + rect[sizeDim];
  }
  if (totalShifts > 0 && balanceShift) {
    // Shift back to make the distribution more equally.
    shiftList(-totalShifts / len, 0, len);
  }
  // TODO bleedMargin?
  var first = list[0];
  var last = list[len - 1];
  var minGap;
  var maxGap;
  updateMinMaxGap();
  // If ends exceed two bounds, squeeze at most 80%, then take the gap of two bounds.
  minGap < 0 && squeezeGaps(-minGap, 0.8);
  maxGap < 0 && squeezeGaps(maxGap, 0.8);
  updateMinMaxGap();
  takeBoundsGap(minGap, maxGap, 1);
  takeBoundsGap(maxGap, minGap, -1);
  // Handle bailout when there is not enough space.
  updateMinMaxGap();
  if (minGap < 0) {
    squeezeWhenBailout(-minGap);
  }
  if (maxGap < 0) {
    squeezeWhenBailout(maxGap);
  }
  function updateMinMaxGap() {
    minGap = first.rect[xyDim] - minBound;
    maxGap = maxBound - last.rect[xyDim] - last.rect[sizeDim];
  }
  function takeBoundsGap(gapThisBound, gapOtherBound, moveDir) {
    if (gapThisBound < 0) {
      // Move from other gap if can.
      var moveFromMaxGap = Math.min(gapOtherBound, -gapThisBound);
      if (moveFromMaxGap > 0) {
        shiftList(moveFromMaxGap * moveDir, 0, len);
        var remained = moveFromMaxGap + gapThisBound;
        if (remained < 0) {
          squeezeGaps(-remained * moveDir, 1);
        }
      } else {
        squeezeGaps(-gapThisBound * moveDir, 1);
      }
    }
  }
  function shiftList(delta, start, end) {
    if (delta !== 0) {
      adjusted = true;
    }
    for (var i = start; i < end; i++) {
      var item = list[i];
      var rect = item.rect;
      rect[xyDim] += delta;
      item.label[xyDim] += delta;
    }
  }
  // Squeeze gaps if the labels exceed margin.
  function squeezeGaps(delta, maxSqeezePercent) {
    var gaps = [];
    var totalGaps = 0;
    for (var i = 1; i < len; i++) {
      var prevItemRect = list[i - 1].rect;
      var gap = Math.max(list[i].rect[xyDim] - prevItemRect[xyDim] - prevItemRect[sizeDim], 0);
      gaps.push(gap);
      totalGaps += gap;
    }
    if (!totalGaps) {
      return;
    }
    var squeezePercent = Math.min(Math.abs(delta) / totalGaps, maxSqeezePercent);
    if (delta > 0) {
      for (var i = 0; i < len - 1; i++) {
        // Distribute the shift delta to all gaps.
        var movement = gaps[i] * squeezePercent;
        // Forward
        shiftList(movement, 0, i + 1);
      }
    } else {
      // Backward
      for (var i = len - 1; i > 0; i--) {
        // Distribute the shift delta to all gaps.
        var movement = gaps[i - 1] * squeezePercent;
        shiftList(-movement, i, len);
      }
    }
  }
  /**
   * Squeeze to allow overlap if there is no more space available.
   * Let other overlapping strategy like hideOverlap do the job instead of keep exceeding the bounds.
   */
  function squeezeWhenBailout(delta) {
    var dir = delta < 0 ? -1 : 1;
    delta = Math.abs(delta);
    var moveForEachLabel = Math.ceil(delta / (len - 1));
    for (var i = 0; i < len - 1; i++) {
      if (dir > 0) {
        // Forward
        shiftList(moveForEachLabel, 0, i + 1);
      } else {
        // Backward
        shiftList(-moveForEachLabel, len - i - 1, len);
      }
      delta -= moveForEachLabel;
      if (delta <= 0) {
        return;
      }
    }
  }
  return adjusted;
}
/**
 * @see `SavedLabelAttr` in `LabelManager.ts`
 * @see `hideOverlap`
 */
function restoreIgnore(labelList) {
  for (var i = 0; i < labelList.length; i++) {
    var labelItem = labelList[i];
    var defaultAttr = labelItem.defaultAttr;
    var labelLine = labelItem.labelLine;
    labelItem.label.attr('ignore', defaultAttr.ignore);
    labelLine && labelLine.attr('ignore', defaultAttr.labelGuideIgnore);
  }
}
/**
 * [NOTICE - restore]:
 *  'series:layoutlabels' may be triggered during some shortcut passes, such as zooming in series.graph/geo
 *  (`updateLabelLayout`), where the modified `Element` props should be restorable from `defaultAttr`.
 *  @see `SavedLabelAttr` in `LabelManager.ts`
 *  `restoreIgnore` can be called to perform the restore, if needed.
 *
 * [NOTICE - state]:
 *  Regarding Element's states, this method is only designed for the normal state.
 *  PENDING: although currently this method is effectively called in other states in `updateLabelLayout` case,
 *      the bad case is not noticeable in the zooming scenario.
 */
function hideOverlap(labelList) {
  var displayedLabels = [];
  // TODO, render overflow visible first, put in the displayedLabels.
  labelList.sort(function (a, b) {
    return (b.suggestIgnore ? 1 : 0) - (a.suggestIgnore ? 1 : 0) || b.priority - a.priority;
  });
  function hideEl(el) {
    if (!el.ignore) {
      // Show on emphasis.
      var emphasisState = el.ensureState('emphasis');
      if (emphasisState.ignore == null) {
        emphasisState.ignore = false;
      }
    }
    el.ignore = true;
  }
  for (var i = 0; i < labelList.length; i++) {
    var labelItem = ensureLabelLayoutWithGeometry(labelList[i]);
    // The current `el.ignore` is involved, since some previous overlap
    // resolving strategies may have set `el.ignore` to true.
    if (labelItem.label.ignore) {
      continue;
    }
    var label = labelItem.label;
    var labelLine = labelItem.labelLine;
    // NOTICE: even when the with/height of globalRect of a label is 0, the label line should
    // still be displayed, since we should follow the concept of "truncation", meaning that
    // something exists even if it cannot be fully displayed. A visible label line is necessary
    // to allow users to get a tooltip with label info on hover.
    var overlapped = false;
    for (var j = 0; j < displayedLabels.length; j++) {
      if (labelIntersect(labelItem, displayedLabels[j], null, {
        touchThreshold: 0.05
      })) {
        overlapped = true;
        break;
      }
    }
    // TODO Callback to determine if this overlap should be handled?
    if (overlapped) {
      hideEl(label);
      labelLine && hideEl(labelLine);
    } else {
      displayedLabels.push(labelItem);
    }
  }
}
/**
 * Enable fast check for performance; use obb if inevitable.
 * If `mtv` is used, `targetLayoutInfo` can be moved based on the values filled into `mtv`.
 *
 * This method is based only on the current `Element` states (regardless of other states).
 * Typically this method (and the entire layout process) is performed in normal state.
 */
function labelIntersect(baseLayoutInfo, targetLayoutInfo, mtv, intersectOpt) {
  if (!baseLayoutInfo || !targetLayoutInfo) {
    return false;
  }
  if (baseLayoutInfo.label && baseLayoutInfo.label.ignore || targetLayoutInfo.label && targetLayoutInfo.label.ignore) {
    return false;
  }
  // Fast rejection.
  if (!baseLayoutInfo.rect.intersect(targetLayoutInfo.rect, mtv, intersectOpt)) {
    return false;
  }
  if (baseLayoutInfo.axisAligned && targetLayoutInfo.axisAligned) {
    return true; // obb is the same as the normal bounding rect.
  }
  return ensureOBB(baseLayoutInfo).intersect(ensureOBB(targetLayoutInfo), mtv, intersectOpt);
}

}),
51160: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  LabelMarginType: function() { return LabelMarginType; },
  animateLabelValue: function() { return animateLabelValue; },
  createTextConfig: function() { return createTextConfig; },
  createTextStyle: function() { return createTextStyle; },
  getFont: function() { return getFont; },
  getLabelStatesModels: function() { return getLabelStatesModels; },
  labelInner: function() { return labelInner; },
  setLabelStyle: function() { return setLabelStyle; },
  setLabelText: function() { return setLabelText; },
  setLabelValueAnimation: function() { return setLabelValueAnimation; }
});
/* import */ var zrender_lib_graphic_Text_js__rspack_import_2 = __webpack_require__(62070);
/* import */ var zrender_lib_core_util_js__rspack_import_1 = __webpack_require__(9774);
/* import */ var _util_states_js__rspack_import_0 = __webpack_require__(72825);
/* import */ var _util_model_js__rspack_import_3 = __webpack_require__(67698);
/* import */ var _util_graphic_js__rspack_import_4 = __webpack_require__(95086);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/






var EMPTY_OBJ = {};
function setLabelText(label, labelTexts) {
  for (var i = 0; i < _util_states_js__rspack_import_0.SPECIAL_STATES.length; i++) {
    var stateName = _util_states_js__rspack_import_0.SPECIAL_STATES[i];
    var text = labelTexts[stateName];
    var state = label.ensureState(stateName);
    state.style = state.style || {};
    state.style.text = text;
  }
  var oldStates = label.currentStates.slice();
  label.clearStates(true);
  label.setStyle({
    text: labelTexts.normal
  });
  label.useStates(oldStates, true);
}
function getLabelText(opt, stateModels, interpolatedValue) {
  var labelFetcher = opt.labelFetcher;
  var labelDataIndex = opt.labelDataIndex;
  var labelDimIndex = opt.labelDimIndex;
  var normalModel = stateModels.normal;
  var baseText;
  if (labelFetcher) {
    baseText = labelFetcher.getFormattedLabel(labelDataIndex, 'normal', null, labelDimIndex, normalModel && normalModel.get('formatter'), interpolatedValue != null ? {
      interpolatedValue: interpolatedValue
    } : null);
  }
  if (baseText == null) {
    baseText = (0,zrender_lib_core_util_js__rspack_import_1.isFunction)(opt.defaultText) ? opt.defaultText(labelDataIndex, opt, interpolatedValue) : opt.defaultText;
  }
  var statesText = {
    normal: baseText
  };
  for (var i = 0; i < _util_states_js__rspack_import_0.SPECIAL_STATES.length; i++) {
    var stateName = _util_states_js__rspack_import_0.SPECIAL_STATES[i];
    var stateModel = stateModels[stateName];
    statesText[stateName] = (0,zrender_lib_core_util_js__rspack_import_1.retrieve2)(labelFetcher ? labelFetcher.getFormattedLabel(labelDataIndex, stateName, null, labelDimIndex, stateModel && stateModel.get('formatter')) : null, baseText);
  }
  return statesText;
}
function setLabelStyle(targetEl, labelStatesModels, opt, stateSpecified
// TODO specified position?
) {
  opt = opt || EMPTY_OBJ;
  var isSetOnText = targetEl instanceof zrender_lib_graphic_Text_js__rspack_import_2["default"];
  var needsCreateText = false;
  for (var i = 0; i < _util_states_js__rspack_import_0.DISPLAY_STATES.length; i++) {
    var stateModel = labelStatesModels[_util_states_js__rspack_import_0.DISPLAY_STATES[i]];
    if (stateModel && stateModel.getShallow('show')) {
      needsCreateText = true;
      break;
    }
  }
  var textContent = isSetOnText ? targetEl : targetEl.getTextContent();
  if (needsCreateText) {
    if (!isSetOnText) {
      // Reuse the previous
      if (!textContent) {
        textContent = new zrender_lib_graphic_Text_js__rspack_import_2["default"]();
        targetEl.setTextContent(textContent);
      }
      // Use same state proxy
      if (targetEl.stateProxy) {
        textContent.stateProxy = targetEl.stateProxy;
      }
    }
    var labelStatesTexts = getLabelText(opt, labelStatesModels);
    var normalModel = labelStatesModels.normal;
    var showNormal = !!normalModel.getShallow('show');
    var normalStyle = createTextStyle(normalModel, stateSpecified && stateSpecified.normal, opt, false, !isSetOnText);
    normalStyle.text = labelStatesTexts.normal;
    if (!isSetOnText) {
      // Always create new
      targetEl.setTextConfig(createTextConfig(normalModel, opt, false));
    }
    for (var i = 0; i < _util_states_js__rspack_import_0.SPECIAL_STATES.length; i++) {
      var stateName = _util_states_js__rspack_import_0.SPECIAL_STATES[i];
      var stateModel = labelStatesModels[stateName];
      if (stateModel) {
        var stateObj = textContent.ensureState(stateName);
        var stateShow = !!(0,zrender_lib_core_util_js__rspack_import_1.retrieve2)(stateModel.getShallow('show'), showNormal);
        if (stateShow !== showNormal) {
          stateObj.ignore = !stateShow;
        }
        stateObj.style = createTextStyle(stateModel, stateSpecified && stateSpecified[stateName], opt, true, !isSetOnText);
        stateObj.style.text = labelStatesTexts[stateName];
        if (!isSetOnText) {
          var targetElEmphasisState = targetEl.ensureState(stateName);
          targetElEmphasisState.textConfig = createTextConfig(stateModel, opt, true);
        }
      }
    }
    // PENDING: if there is many requirements that emphasis position
    // need to be different from normal position, we might consider
    // auto silent is those cases.
    textContent.silent = !!normalModel.getShallow('silent');
    // Keep x and y
    if (textContent.style.x != null) {
      normalStyle.x = textContent.style.x;
    }
    if (textContent.style.y != null) {
      normalStyle.y = textContent.style.y;
    }
    textContent.ignore = !showNormal;
    // Always create new style.
    textContent.useStyle(normalStyle);
    textContent.dirty();
    if (opt.enableTextSetter) {
      labelInner(textContent).setLabelText = function (interpolatedValue) {
        var labelStatesTexts = getLabelText(opt, labelStatesModels, interpolatedValue);
        setLabelText(textContent, labelStatesTexts);
      };
    }
  } else if (textContent) {
    // Not display rich text.
    textContent.ignore = true;
  }
  targetEl.dirty();
}

function getLabelStatesModels(itemModel, labelName) {
  labelName = labelName || 'label';
  var statesModels = {
    normal: itemModel.getModel(labelName)
  };
  for (var i = 0; i < _util_states_js__rspack_import_0.SPECIAL_STATES.length; i++) {
    var stateName = _util_states_js__rspack_import_0.SPECIAL_STATES[i];
    statesModels[stateName] = itemModel.getModel([stateName, labelName]);
  }
  return statesModels;
}
/**
 * Set basic textStyle properties.
 */
function createTextStyle(textStyleModel, specifiedTextStyle,
// Fixed style in the code. Can't be set by model.
opt, isNotNormal, isAttached // If text is attached on an element. If so, auto color will handling in zrender.
) {
  var textStyle = {};
  setTextStyleCommon(textStyle, textStyleModel, opt, isNotNormal, isAttached);
  specifiedTextStyle && (0,zrender_lib_core_util_js__rspack_import_1.extend)(textStyle, specifiedTextStyle);
  // textStyle.host && textStyle.host.dirty && textStyle.host.dirty(false);
  return textStyle;
}
function createTextConfig(textStyleModel, opt, isNotNormal) {
  opt = opt || {};
  var textConfig = {};
  var labelPosition;
  var labelRotate = textStyleModel.getShallow('rotate');
  var labelDistance = (0,zrender_lib_core_util_js__rspack_import_1.retrieve2)(textStyleModel.getShallow('distance'), isNotNormal ? null : 5);
  var labelOffset = textStyleModel.getShallow('offset');
  labelPosition = textStyleModel.getShallow('position') || (isNotNormal ? null : 'inside');
  // 'outside' is not a valid zr textPostion value, but used
  // in bar series, and magic type should be considered.
  labelPosition === 'outside' && (labelPosition = opt.defaultOutsidePosition || 'top');
  if (labelPosition != null) {
    textConfig.position = labelPosition;
  }
  if (labelOffset != null) {
    textConfig.offset = labelOffset;
  }
  if (labelRotate != null) {
    labelRotate *= Math.PI / 180;
    textConfig.rotation = labelRotate;
  }
  if (labelDistance != null) {
    textConfig.distance = labelDistance;
  }
  // fill and auto is determined by the color of path fill if it's not specified by developers.
  textConfig.outsideFill = textStyleModel.get('color') === 'inherit' ? opt.inheritColor || null : 'auto';
  if (opt.autoOverflowArea != null) {
    textConfig.autoOverflowArea = opt.autoOverflowArea;
  }
  if (opt.layoutRect != null) {
    textConfig.layoutRect = opt.layoutRect;
  }
  return textConfig;
}
/**
 * The uniform entry of set text style, that is, retrieve style definitions
 * from `model` and set to `textStyle` object.
 *
 * Never in merge mode, but in overwrite mode, that is, all of the text style
 * properties will be set. (Consider the states of normal and emphasis and
 * default value can be adopted, merge would make the logic too complicated
 * to manage.)
 */
function setTextStyleCommon(textStyle, textStyleModel, opt, isNotNormal, isAttached) {
  // Consider there will be abnormal when merge hover style to normal style if given default value.
  opt = opt || EMPTY_OBJ;
  var ecModel = textStyleModel.ecModel;
  var globalTextStyle = ecModel && ecModel.option.textStyle;
  // Consider case:
  // {
  //     data: [{
  //         value: 12,
  //         label: {
  //             rich: {
  //                 // no 'a' here but using parent 'a'.
  //             }
  //         }
  //     }],
  //     rich: {
  //         a: { ... }
  //     }
  // }
  var richItemNames = getRichItemNames(textStyleModel);
  var richResult;
  if (richItemNames) {
    richResult = {};
    var richInheritPlainLabelOptionName = 'richInheritPlainLabel';
    var richInheritPlainLabel = (0,zrender_lib_core_util_js__rspack_import_1.retrieve2)(textStyleModel.get(richInheritPlainLabelOptionName), ecModel ? ecModel.get(richInheritPlainLabelOptionName) : undefined);
    for (var name_1 in richItemNames) {
      if (richItemNames.hasOwnProperty(name_1)) {
        // Cascade is supported in rich.
        var richTextStyle = textStyleModel.getModel(['rich', name_1]);
        // In rich, never `disableBox`.
        // consider `label: {formatter: '{a|xx}', color: 'blue', rich: {a: {}}}`,
        // the default color `'blue'` will not be adopted if no color declared in `rich`.
        // That might confuses users. So probably we should put `textStyleModel` as the
        // root ancestor of the `richTextStyle`. But that would be a break change.
        // Since v6, the rich style inherits plain label by default
        // but this behavior can be disabled by setting `richInheritPlainLabel` to `false`.
        setTokenTextStyle(richResult[name_1] = {}, richTextStyle, globalTextStyle, textStyleModel, richInheritPlainLabel, opt, isNotNormal, isAttached, false, true);
      }
    }
  }
  if (richResult) {
    textStyle.rich = richResult;
  }
  var overflow = textStyleModel.get('overflow');
  if (overflow) {
    textStyle.overflow = overflow;
  }
  var lineOverflow = textStyleModel.get('lineOverflow');
  if (lineOverflow) {
    textStyle.lineOverflow = lineOverflow;
  }
  var labelTextStyle = textStyle;
  // `minMargin` has a higher precedence than `textMargin`, because `textMargin` is allowed
  // to be set in `defaultOption`.
  var minMargin = textStyleModel.get('minMargin');
  if (minMargin != null) {
    // `minMargin` only support number value.
    minMargin = !(0,zrender_lib_core_util_js__rspack_import_1.isNumber)(minMargin) ? 0 : minMargin / 2;
    labelTextStyle.margin = [minMargin, minMargin, minMargin, minMargin];
    labelTextStyle.__marginType = LabelMarginType.minMargin;
  } else {
    var textMargin = textStyleModel.get('textMargin');
    if (textMargin != null) {
      labelTextStyle.margin = (0,zrender_lib_core_util_js__rspack_import_1.normalizeCssArray)(textMargin);
      labelTextStyle.__marginType = LabelMarginType.textMargin;
    }
  }
  setTokenTextStyle(textStyle, textStyleModel, globalTextStyle, null, null, opt, isNotNormal, isAttached, true, false);
}
// Consider case:
// {
//     data: [{
//         value: 12,
//         label: {
//             rich: {
//                 // no 'a' here but using parent 'a'.
//             }
//         }
//     }],
//     rich: {
//         a: { ... }
//     }
// }
// TODO TextStyleModel
function getRichItemNames(textStyleModel) {
  // Use object to remove duplicated names.
  var richItemNameMap;
  while (textStyleModel && textStyleModel !== textStyleModel.ecModel) {
    var rich = (textStyleModel.option || EMPTY_OBJ).rich;
    if (rich) {
      richItemNameMap = richItemNameMap || {};
      var richKeys = (0,zrender_lib_core_util_js__rspack_import_1.keys)(rich);
      for (var i = 0; i < richKeys.length; i++) {
        var richKey = richKeys[i];
        richItemNameMap[richKey] = 1;
      }
    }
    textStyleModel = textStyleModel.parentModel;
  }
  return richItemNameMap;
}
var TEXT_PROPS_WITH_GLOBAL = ['fontStyle', 'fontWeight', 'fontSize', 'fontFamily', 'textShadowColor', 'textShadowBlur', 'textShadowOffsetX', 'textShadowOffsetY'];
var TEXT_PROPS_SELF = ['align', 'lineHeight', 'width', 'height', 'tag', 'verticalAlign', 'ellipsis'];
var TEXT_PROPS_BOX = ['padding', 'borderWidth', 'borderRadius', 'borderDashOffset', 'backgroundColor', 'borderColor', 'shadowColor', 'shadowBlur', 'shadowOffsetX', 'shadowOffsetY'];
function setTokenTextStyle(textStyle,
// FIXME: check/refactor for ellipsis handling of rich text.
textStyleModel, globalTextStyle, plainTextModel, richInheritPlainLabel, opt, isNotNormal, isAttached, isBlock, inRich) {
  // In merge mode, default value should not be given.
  globalTextStyle = !isNotNormal && globalTextStyle || EMPTY_OBJ;
  var inheritColor = opt && opt.inheritColor;
  var fillColor = textStyleModel.getShallow('color');
  var strokeColor = textStyleModel.getShallow('textBorderColor');
  var opacity = (0,zrender_lib_core_util_js__rspack_import_1.retrieve2)(textStyleModel.getShallow('opacity'), globalTextStyle.opacity);
  if (fillColor === 'inherit' || fillColor === 'auto') {
    if (false) {}
    if (inheritColor) {
      fillColor = inheritColor;
    } else {
      fillColor = null;
    }
  }
  if (strokeColor === 'inherit' || strokeColor === 'auto') {
    if (false) {}
    if (inheritColor) {
      strokeColor = inheritColor;
    } else {
      strokeColor = null;
    }
  }
  if (!isAttached) {
    // Only use default global textStyle.color if text is individual.
    // Otherwise it will use the strategy of attached text color because text may be on a path.
    fillColor = fillColor || globalTextStyle.color;
    strokeColor = strokeColor || globalTextStyle.textBorderColor;
  }
  if (fillColor != null) {
    // Might not be a string, e.g, it's a function in axisLabel case; but assume that it will
    // be erased by a correct value outside.
    textStyle.fill = fillColor;
  }
  if (strokeColor != null) {
    textStyle.stroke = strokeColor;
  }
  var textBorderWidth = (0,zrender_lib_core_util_js__rspack_import_1.retrieve2)(textStyleModel.getShallow('textBorderWidth'), globalTextStyle.textBorderWidth);
  if (textBorderWidth != null) {
    textStyle.lineWidth = textBorderWidth;
  }
  var textBorderType = (0,zrender_lib_core_util_js__rspack_import_1.retrieve2)(textStyleModel.getShallow('textBorderType'), globalTextStyle.textBorderType);
  if (textBorderType != null) {
    textStyle.lineDash = textBorderType;
  }
  var textBorderDashOffset = (0,zrender_lib_core_util_js__rspack_import_1.retrieve2)(textStyleModel.getShallow('textBorderDashOffset'), globalTextStyle.textBorderDashOffset);
  if (textBorderDashOffset != null) {
    textStyle.lineDashOffset = textBorderDashOffset;
  }
  if (!isNotNormal && opacity == null && !inRich) {
    opacity = opt && opt.defaultOpacity;
  }
  if (opacity != null) {
    textStyle.opacity = opacity;
  }
  // TODO
  if (!isNotNormal && !isAttached) {
    // Set default finally.
    if (textStyle.fill == null && opt.inheritColor) {
      textStyle.fill = opt.inheritColor;
    }
  }
  // Do not use `getFont` here, because merge should be supported, where
  // part of these properties may be changed in emphasis style, and the
  // others should remain their original value got from normal style.
  for (var i = 0; i < TEXT_PROPS_WITH_GLOBAL.length; i++) {
    var key = TEXT_PROPS_WITH_GLOBAL[i];
    // props width, height, padding, margin, tag, backgroundColor, borderColor,
    // borderWidth, borderRadius, shadowColor, shadowBlur, shadowOffsetX, shadowOffsetY
    // may inappropriate to inherit from plainTextStyle.
    // And if some props is specified in default options, users may have to reset them one by one.
    // Therefore, we only allow these props to inherit from plainTextStyle.
    // `richInheritPlainLabel` is switch for backward compatibility
    var val = richInheritPlainLabel !== false && plainTextModel ? (0,zrender_lib_core_util_js__rspack_import_1.retrieve3)(textStyleModel.getShallow(key), plainTextModel.getShallow(key), globalTextStyle[key]) : (0,zrender_lib_core_util_js__rspack_import_1.retrieve2)(textStyleModel.getShallow(key), globalTextStyle[key]);
    if (val != null) {
      textStyle[key] = val;
    }
  }
  for (var i = 0; i < TEXT_PROPS_SELF.length; i++) {
    var key = TEXT_PROPS_SELF[i];
    var val = textStyleModel.getShallow(key);
    if (val != null) {
      textStyle[key] = val;
    }
  }
  if (textStyle.verticalAlign == null) {
    var baseline = textStyleModel.getShallow('baseline');
    if (baseline != null) {
      textStyle.verticalAlign = baseline;
    }
  }
  if (!isBlock || !opt.disableBox) {
    for (var i = 0; i < TEXT_PROPS_BOX.length; i++) {
      var key = TEXT_PROPS_BOX[i];
      var val = textStyleModel.getShallow(key);
      if (val != null) {
        textStyle[key] = val;
      }
    }
    var borderType = textStyleModel.getShallow('borderType');
    if (borderType != null) {
      textStyle.borderDash = borderType;
    }
    if ((textStyle.backgroundColor === 'auto' || textStyle.backgroundColor === 'inherit') && inheritColor) {
      if (false) {}
      textStyle.backgroundColor = inheritColor;
    }
    if ((textStyle.borderColor === 'auto' || textStyle.borderColor === 'inherit') && inheritColor) {
      if (false) {}
      textStyle.borderColor = inheritColor;
    }
  }
}
function getFont(opt, ecModel) {
  var gTextStyleModel = ecModel && ecModel.getModel('textStyle');
  return (0,zrender_lib_core_util_js__rspack_import_1.trim)([
  // FIXME in node-canvas fontWeight is before fontStyle
  opt.fontStyle || gTextStyleModel && gTextStyleModel.getShallow('fontStyle') || '', opt.fontWeight || gTextStyleModel && gTextStyleModel.getShallow('fontWeight') || '', (opt.fontSize || gTextStyleModel && gTextStyleModel.getShallow('fontSize') || 12) + 'px', opt.fontFamily || gTextStyleModel && gTextStyleModel.getShallow('fontFamily') || 'sans-serif'].join(' '));
}
var labelInner = (0,_util_model_js__rspack_import_3.makeInner)();
function setLabelValueAnimation(label, labelStatesModels, value, getDefaultText) {
  if (!label) {
    return;
  }
  var obj = labelInner(label);
  obj.prevValue = obj.value;
  obj.value = value;
  var normalLabelModel = labelStatesModels.normal;
  obj.valueAnimation = normalLabelModel.get('valueAnimation');
  if (obj.valueAnimation) {
    obj.precision = normalLabelModel.get('precision');
    obj.defaultInterpolatedText = getDefaultText;
    obj.statesModels = labelStatesModels;
  }
}
function animateLabelValue(textEl, dataIndex, data, animatableModel, labelFetcher) {
  var labelInnerStore = labelInner(textEl);
  if (!labelInnerStore.valueAnimation || labelInnerStore.prevValue === labelInnerStore.value) {
    // Value not changed, no new label animation
    return;
  }
  var defaultInterpolatedText = labelInnerStore.defaultInterpolatedText;
  // Consider the case that being animating, do not use the `obj.value`,
  // Otherwise it will jump to the `obj.value` when this new animation started.
  var currValue = (0,zrender_lib_core_util_js__rspack_import_1.retrieve2)(labelInnerStore.interpolatedValue, labelInnerStore.prevValue);
  var targetValue = labelInnerStore.value;
  function during(percent) {
    var interpolated = (0,_util_model_js__rspack_import_3.interpolateRawValues)(data, labelInnerStore.precision, currValue, targetValue, percent);
    labelInnerStore.interpolatedValue = percent === 1 ? null : interpolated;
    var labelText = getLabelText({
      labelDataIndex: dataIndex,
      labelFetcher: labelFetcher,
      defaultText: defaultInterpolatedText ? defaultInterpolatedText(interpolated) : interpolated + ''
    }, labelInnerStore.statesModels, interpolated);
    setLabelText(textEl, labelText);
  }
  textEl.percent = 0;
  (labelInnerStore.prevValue == null ? _util_graphic_js__rspack_import_4.initProps : _util_graphic_js__rspack_import_4.updateProps)(textEl, {
    // percent is used to prevent animation from being aborted #15916
    percent: 1
  }, animatableModel, dataIndex, null, during);
}
/**
 * PENDING: Temporary impl. unify them?
 * @see {LabelCommonOption['textMargin']}
 * @see {LabelCommonOption['minMargin']}
 */
var LabelMarginType = {
  minMargin: 1,
  textMargin: 2
};

}),
38671: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createSectorCalculateTextPosition: function() { return createSectorCalculateTextPosition; },
  setSectorTextRotation: function() { return setSectorTextRotation; }
});
/* import */ var zrender_lib_contain_text_js__rspack_import_0 = __webpack_require__(26066);
/* import */ var zrender_lib_core_util_js__rspack_import_1 = __webpack_require__(9774);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


function createSectorCalculateTextPosition(positionMapping, opts) {
  opts = opts || {};
  var isRoundCap = opts.isRoundCap;
  return function (out, opts, boundingRect) {
    var textPosition = opts.position;
    if (!textPosition || textPosition instanceof Array) {
      return (0,zrender_lib_contain_text_js__rspack_import_0.calculateTextPosition)(out, opts, boundingRect);
    }
    var mappedSectorPosition = positionMapping(textPosition);
    var distance = opts.distance != null ? opts.distance : 5;
    var sector = this.shape;
    var cx = sector.cx;
    var cy = sector.cy;
    var r = sector.r;
    var r0 = sector.r0;
    var middleR = (r + r0) / 2;
    var startAngle = sector.startAngle;
    var endAngle = sector.endAngle;
    var middleAngle = (startAngle + endAngle) / 2;
    var extraDist = isRoundCap ? Math.abs(r - r0) / 2 : 0;
    var mathCos = Math.cos;
    var mathSin = Math.sin;
    // base position: top-left
    var x = cx + r * mathCos(startAngle);
    var y = cy + r * mathSin(startAngle);
    var textAlign = 'left';
    var textVerticalAlign = 'top';
    switch (mappedSectorPosition) {
      case 'startArc':
        x = cx + (r0 - distance) * mathCos(middleAngle);
        y = cy + (r0 - distance) * mathSin(middleAngle);
        textAlign = 'center';
        textVerticalAlign = 'top';
        break;
      case 'insideStartArc':
        x = cx + (r0 + distance) * mathCos(middleAngle);
        y = cy + (r0 + distance) * mathSin(middleAngle);
        textAlign = 'center';
        textVerticalAlign = 'bottom';
        break;
      case 'startAngle':
        x = cx + middleR * mathCos(startAngle) + adjustAngleDistanceX(startAngle, distance + extraDist, false);
        y = cy + middleR * mathSin(startAngle) + adjustAngleDistanceY(startAngle, distance + extraDist, false);
        textAlign = 'right';
        textVerticalAlign = 'middle';
        break;
      case 'insideStartAngle':
        x = cx + middleR * mathCos(startAngle) + adjustAngleDistanceX(startAngle, -distance + extraDist, false);
        y = cy + middleR * mathSin(startAngle) + adjustAngleDistanceY(startAngle, -distance + extraDist, false);
        textAlign = 'left';
        textVerticalAlign = 'middle';
        break;
      case 'middle':
        x = cx + middleR * mathCos(middleAngle);
        y = cy + middleR * mathSin(middleAngle);
        textAlign = 'center';
        textVerticalAlign = 'middle';
        break;
      case 'endArc':
        x = cx + (r + distance) * mathCos(middleAngle);
        y = cy + (r + distance) * mathSin(middleAngle);
        textAlign = 'center';
        textVerticalAlign = 'bottom';
        break;
      case 'insideEndArc':
        x = cx + (r - distance) * mathCos(middleAngle);
        y = cy + (r - distance) * mathSin(middleAngle);
        textAlign = 'center';
        textVerticalAlign = 'top';
        break;
      case 'endAngle':
        x = cx + middleR * mathCos(endAngle) + adjustAngleDistanceX(endAngle, distance + extraDist, true);
        y = cy + middleR * mathSin(endAngle) + adjustAngleDistanceY(endAngle, distance + extraDist, true);
        textAlign = 'left';
        textVerticalAlign = 'middle';
        break;
      case 'insideEndAngle':
        x = cx + middleR * mathCos(endAngle) + adjustAngleDistanceX(endAngle, -distance + extraDist, true);
        y = cy + middleR * mathSin(endAngle) + adjustAngleDistanceY(endAngle, -distance + extraDist, true);
        textAlign = 'right';
        textVerticalAlign = 'middle';
        break;
      default:
        return (0,zrender_lib_contain_text_js__rspack_import_0.calculateTextPosition)(out, opts, boundingRect);
    }
    out = out || {};
    out.x = x;
    out.y = y;
    out.align = textAlign;
    out.verticalAlign = textVerticalAlign;
    return out;
  };
}
function setSectorTextRotation(sector, textPosition, positionMapping, rotateType) {
  if ((0,zrender_lib_core_util_js__rspack_import_1.isNumber)(rotateType)) {
    // user-set rotation
    sector.setTextConfig({
      rotation: rotateType
    });
    return;
  } else if ((0,zrender_lib_core_util_js__rspack_import_1.isArray)(textPosition)) {
    // user-set position, use 0 as auto rotation
    sector.setTextConfig({
      rotation: 0
    });
    return;
  }
  var shape = sector.shape;
  var startAngle = shape.clockwise ? shape.startAngle : shape.endAngle;
  var endAngle = shape.clockwise ? shape.endAngle : shape.startAngle;
  var middleAngle = (startAngle + endAngle) / 2;
  var anchorAngle;
  var mappedSectorPosition = positionMapping(textPosition);
  switch (mappedSectorPosition) {
    case 'startArc':
    case 'insideStartArc':
    case 'middle':
    case 'insideEndArc':
    case 'endArc':
      anchorAngle = middleAngle;
      break;
    case 'startAngle':
    case 'insideStartAngle':
      anchorAngle = startAngle;
      break;
    case 'endAngle':
    case 'insideEndAngle':
      anchorAngle = endAngle;
      break;
    default:
      sector.setTextConfig({
        rotation: 0
      });
      return;
  }
  var rotate = Math.PI * 1.5 - anchorAngle;
  /**
   * TODO: labels with rotate > Math.PI / 2 should be rotate another
   * half round flipped to increase readability. However, only middle
   * position supports this for now, because in other positions, the
   * anchor point is not at the center of the text, so the positions
   * after rotating is not as expected.
   */
  if (mappedSectorPosition === 'middle' && rotate > Math.PI / 2 && rotate < Math.PI * 1.5) {
    rotate -= Math.PI;
  }
  sector.setTextConfig({
    rotation: rotate
  });
}
function adjustAngleDistanceX(angle, distance, isEnd) {
  return distance * Math.sin(angle) * (isEnd ? -1 : 1);
}
function adjustAngleDistanceY(angle, distance, isEnd) {
  return distance * Math.cos(angle) * (isEnd ? 1 : -1);
}

}),
97280: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createProgressiveLayout: function() { return createProgressiveLayout; },
  getLayoutOnAxis: function() { return getLayoutOnAxis; },
  layout: function() { return layout; },
  makeColumnLayout: function() { return makeColumnLayout; },
  prepareLayoutBarSeries: function() { return prepareLayoutBarSeries; },
  retrieveColumnLayout: function() { return retrieveColumnLayout; }
});
/* import */ var zrender_lib_core_util_js__rspack_import_0 = __webpack_require__(9774);
/* import */ var _util_number_js__rspack_import_1 = __webpack_require__(64782);
/* import */ var _data_helper_dataStackHelper_js__rspack_import_3 = __webpack_require__(89528);
/* import */ var _chart_helper_createRenderPlanner_js__rspack_import_2 = __webpack_require__(26070);
/* import */ var _util_vendor_js__rspack_import_4 = __webpack_require__(94917);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/





var STACK_PREFIX = '__ec_stack_';
function getSeriesStackId(seriesModel) {
  return seriesModel.get('stack') || STACK_PREFIX + seriesModel.seriesIndex;
}
function getAxisKey(axis) {
  return axis.dim + axis.index;
}
/**
 * @return {Object} {width, offset, offsetCenter} If axis.type is not 'category', return undefined.
 */
function getLayoutOnAxis(opt) {
  var params = [];
  var baseAxis = opt.axis;
  var axisKey = 'axis0';
  if (baseAxis.type !== 'category') {
    return;
  }
  var bandWidth = baseAxis.getBandWidth();
  for (var i = 0; i < opt.count || 0; i++) {
    params.push((0,zrender_lib_core_util_js__rspack_import_0.defaults)({
      bandWidth: bandWidth,
      axisKey: axisKey,
      stackId: STACK_PREFIX + i
    }, opt));
  }
  var widthAndOffsets = doCalBarWidthAndOffset(params);
  var result = [];
  for (var i = 0; i < opt.count; i++) {
    var item = widthAndOffsets[axisKey][STACK_PREFIX + i];
    item.offsetCenter = item.offset + item.width / 2;
    result.push(item);
  }
  return result;
}
function prepareLayoutBarSeries(seriesType, ecModel) {
  var seriesModels = [];
  ecModel.eachSeriesByType(seriesType, function (seriesModel) {
    // Check series coordinate, do layout for cartesian2d only
    if (isOnCartesian(seriesModel)) {
      seriesModels.push(seriesModel);
    }
  });
  return seriesModels;
}
/**
 * Map from (baseAxis.dim + '_' + baseAxis.index) to min gap of two adjacent
 * values.
 * This works for time axes, value axes, and log axes.
 * For a single time axis, return value is in the form like
 * {'x_0': [1000000]}.
 * The value of 1000000 is in milliseconds.
 */
function getValueAxesMinGaps(barSeries) {
  /**
   * Map from axis.index to values.
   * For a single time axis, axisValues is in the form like
   * {'x_0': [1495555200000, 1495641600000, 1495728000000]}.
   * Items in axisValues[x], e.g. 1495555200000, are time values of all
   * series.
   */
  var axisValues = {};
  (0,zrender_lib_core_util_js__rspack_import_0.each)(barSeries, function (seriesModel) {
    var cartesian = seriesModel.coordinateSystem;
    var baseAxis = cartesian.getBaseAxis();
    if (baseAxis.type !== 'time' && baseAxis.type !== 'value') {
      return;
    }
    var data = seriesModel.getData();
    var key = baseAxis.dim + '_' + baseAxis.index;
    var dimIdx = data.getDimensionIndex(data.mapDimension(baseAxis.dim));
    var store = data.getStore();
    for (var i = 0, cnt = store.count(); i < cnt; ++i) {
      var value = store.get(dimIdx, i);
      if (!axisValues[key]) {
        // No previous data for the axis
        axisValues[key] = [value];
      } else {
        // No value in previous series
        axisValues[key].push(value);
      }
      // Ignore duplicated time values in the same axis
    }
  });
  var axisMinGaps = {};
  for (var key in axisValues) {
    if (axisValues.hasOwnProperty(key)) {
      var valuesInAxis = axisValues[key];
      if (valuesInAxis) {
        // Sort axis values into ascending order to calculate gaps
        valuesInAxis.sort(function (a, b) {
          return a - b;
        });
        var min = null;
        for (var j = 1; j < valuesInAxis.length; ++j) {
          var delta = valuesInAxis[j] - valuesInAxis[j - 1];
          if (delta > 0) {
            // Ignore 0 delta because they are of the same axis value
            min = min === null ? delta : Math.min(min, delta);
          }
        }
        // Set to null if only have one data
        axisMinGaps[key] = min;
      }
    }
  }
  return axisMinGaps;
}
function makeColumnLayout(barSeries) {
  var axisMinGaps = getValueAxesMinGaps(barSeries);
  var seriesInfoList = [];
  (0,zrender_lib_core_util_js__rspack_import_0.each)(barSeries, function (seriesModel) {
    var cartesian = seriesModel.coordinateSystem;
    var baseAxis = cartesian.getBaseAxis();
    var axisExtent = baseAxis.getExtent();
    var bandWidth;
    if (baseAxis.type === 'category') {
      bandWidth = baseAxis.getBandWidth();
    } else if (baseAxis.type === 'value' || baseAxis.type === 'time') {
      var key = baseAxis.dim + '_' + baseAxis.index;
      var minGap = axisMinGaps[key];
      var extentSpan = Math.abs(axisExtent[1] - axisExtent[0]);
      var scale = baseAxis.scale.getExtent();
      var scaleSpan = Math.abs(scale[1] - scale[0]);
      bandWidth = minGap ? extentSpan / scaleSpan * minGap : extentSpan; // When there is only one data value
    } else {
      var data = seriesModel.getData();
      bandWidth = Math.abs(axisExtent[1] - axisExtent[0]) / data.count();
    }
    var barWidth = (0,_util_number_js__rspack_import_1.parsePercent)(seriesModel.get('barWidth'), bandWidth);
    var barMaxWidth = (0,_util_number_js__rspack_import_1.parsePercent)(seriesModel.get('barMaxWidth'), bandWidth);
    var barMinWidth = (0,_util_number_js__rspack_import_1.parsePercent)(
    // barMinWidth by default is 0.5 / 1 in cartesian. Because in value axis,
    // the auto-calculated bar width might be less than 0.5 / 1.
    seriesModel.get('barMinWidth') || (isInLargeMode(seriesModel) ? 0.5 : 1), bandWidth);
    var barGap = seriesModel.get('barGap');
    var barCategoryGap = seriesModel.get('barCategoryGap');
    var defaultBarGap = seriesModel.get('defaultBarGap');
    seriesInfoList.push({
      bandWidth: bandWidth,
      barWidth: barWidth,
      barMaxWidth: barMaxWidth,
      barMinWidth: barMinWidth,
      barGap: barGap,
      barCategoryGap: barCategoryGap,
      defaultBarGap: defaultBarGap,
      axisKey: getAxisKey(baseAxis),
      stackId: getSeriesStackId(seriesModel)
    });
  });
  return doCalBarWidthAndOffset(seriesInfoList);
}
function doCalBarWidthAndOffset(seriesInfoList) {
  // Columns info on each category axis. Key is cartesian name
  var columnsMap = {};
  (0,zrender_lib_core_util_js__rspack_import_0.each)(seriesInfoList, function (seriesInfo, idx) {
    var axisKey = seriesInfo.axisKey;
    var bandWidth = seriesInfo.bandWidth;
    var columnsOnAxis = columnsMap[axisKey] || {
      bandWidth: bandWidth,
      remainedWidth: bandWidth,
      autoWidthCount: 0,
      categoryGap: null,
      gap: seriesInfo.defaultBarGap || 0,
      stacks: {}
    };
    var stacks = columnsOnAxis.stacks;
    columnsMap[axisKey] = columnsOnAxis;
    var stackId = seriesInfo.stackId;
    if (!stacks[stackId]) {
      columnsOnAxis.autoWidthCount++;
    }
    stacks[stackId] = stacks[stackId] || {
      width: 0,
      maxWidth: 0
    };
    // Caution: In a single coordinate system, these barGrid attributes
    // will be shared by series. Consider that they have default values,
    // only the attributes set on the last series will work.
    // Do not change this fact unless there will be a break change.
    var barWidth = seriesInfo.barWidth;
    if (barWidth && !stacks[stackId].width) {
      // See #6312, do not restrict width.
      stacks[stackId].width = barWidth;
      barWidth = Math.min(columnsOnAxis.remainedWidth, barWidth);
      columnsOnAxis.remainedWidth -= barWidth;
    }
    var barMaxWidth = seriesInfo.barMaxWidth;
    barMaxWidth && (stacks[stackId].maxWidth = barMaxWidth);
    var barMinWidth = seriesInfo.barMinWidth;
    barMinWidth && (stacks[stackId].minWidth = barMinWidth);
    var barGap = seriesInfo.barGap;
    barGap != null && (columnsOnAxis.gap = barGap);
    var barCategoryGap = seriesInfo.barCategoryGap;
    barCategoryGap != null && (columnsOnAxis.categoryGap = barCategoryGap);
  });
  var result = {};
  (0,zrender_lib_core_util_js__rspack_import_0.each)(columnsMap, function (columnsOnAxis, coordSysName) {
    result[coordSysName] = {};
    var stacks = columnsOnAxis.stacks;
    var bandWidth = columnsOnAxis.bandWidth;
    var categoryGapPercent = columnsOnAxis.categoryGap;
    if (categoryGapPercent == null) {
      var columnCount = (0,zrender_lib_core_util_js__rspack_import_0.keys)(stacks).length;
      // More columns in one group
      // the spaces between group is smaller. Or the column will be too thin.
      categoryGapPercent = Math.max(35 - columnCount * 4, 15) + '%';
    }
    var categoryGap = (0,_util_number_js__rspack_import_1.parsePercent)(categoryGapPercent, bandWidth);
    var barGapPercent = (0,_util_number_js__rspack_import_1.parsePercent)(columnsOnAxis.gap, 1);
    var remainedWidth = columnsOnAxis.remainedWidth;
    var autoWidthCount = columnsOnAxis.autoWidthCount;
    var autoWidth = (remainedWidth - categoryGap) / (autoWidthCount + (autoWidthCount - 1) * barGapPercent);
    autoWidth = Math.max(autoWidth, 0);
    // Find if any auto calculated bar exceeded maxBarWidth
    (0,zrender_lib_core_util_js__rspack_import_0.each)(stacks, function (column) {
      var maxWidth = column.maxWidth;
      var minWidth = column.minWidth;
      if (!column.width) {
        var finalWidth = autoWidth;
        if (maxWidth && maxWidth < finalWidth) {
          finalWidth = Math.min(maxWidth, remainedWidth);
        }
        // `minWidth` has higher priority. `minWidth` decide that whether the
        // bar is able to be visible. So `minWidth` should not be restricted
        // by `maxWidth` or `remainedWidth` (which is from `bandWidth`). In
        // the extreme cases for `value` axis, bars are allowed to overlap
        // with each other if `minWidth` specified.
        if (minWidth && minWidth > finalWidth) {
          finalWidth = minWidth;
        }
        if (finalWidth !== autoWidth) {
          column.width = finalWidth;
          remainedWidth -= finalWidth + barGapPercent * finalWidth;
          autoWidthCount--;
        }
      } else {
        // `barMinWidth/barMaxWidth` has higher priority than `barWidth`, as
        // CSS does. Because barWidth can be a percent value, where
        // `barMaxWidth` can be used to restrict the final width.
        var finalWidth = column.width;
        if (maxWidth) {
          finalWidth = Math.min(finalWidth, maxWidth);
        }
        // `minWidth` has higher priority, as described above
        if (minWidth) {
          finalWidth = Math.max(finalWidth, minWidth);
        }
        column.width = finalWidth;
        remainedWidth -= finalWidth + barGapPercent * finalWidth;
        autoWidthCount--;
      }
    });
    // Recalculate width again
    autoWidth = (remainedWidth - categoryGap) / (autoWidthCount + (autoWidthCount - 1) * barGapPercent);
    autoWidth = Math.max(autoWidth, 0);
    var widthSum = 0;
    var lastColumn;
    (0,zrender_lib_core_util_js__rspack_import_0.each)(stacks, function (column, idx) {
      if (!column.width) {
        column.width = autoWidth;
      }
      lastColumn = column;
      widthSum += column.width * (1 + barGapPercent);
    });
    if (lastColumn) {
      widthSum -= lastColumn.width * barGapPercent;
    }
    var offset = -widthSum / 2;
    (0,zrender_lib_core_util_js__rspack_import_0.each)(stacks, function (column, stackId) {
      result[coordSysName][stackId] = result[coordSysName][stackId] || {
        bandWidth: bandWidth,
        offset: offset,
        width: column.width
      };
      offset += column.width * (1 + barGapPercent);
    });
  });
  return result;
}
function retrieveColumnLayout(barWidthAndOffset, axis, seriesModel) {
  if (barWidthAndOffset && axis) {
    var result = barWidthAndOffset[getAxisKey(axis)];
    if (result != null && seriesModel != null) {
      return result[getSeriesStackId(seriesModel)];
    }
    return result;
  }
}

function layout(seriesType, ecModel) {
  var seriesModels = prepareLayoutBarSeries(seriesType, ecModel);
  var barWidthAndOffset = makeColumnLayout(seriesModels);
  (0,zrender_lib_core_util_js__rspack_import_0.each)(seriesModels, function (seriesModel) {
    var data = seriesModel.getData();
    var cartesian = seriesModel.coordinateSystem;
    var baseAxis = cartesian.getBaseAxis();
    var stackId = getSeriesStackId(seriesModel);
    var columnLayoutInfo = barWidthAndOffset[getAxisKey(baseAxis)][stackId];
    var columnOffset = columnLayoutInfo.offset;
    var columnWidth = columnLayoutInfo.width;
    data.setLayout({
      bandWidth: columnLayoutInfo.bandWidth,
      offset: columnOffset,
      size: columnWidth
    });
  });
}
// TODO: Do not support stack in large mode yet.
function createProgressiveLayout(seriesType) {
  return {
    seriesType: seriesType,
    plan: (0,_chart_helper_createRenderPlanner_js__rspack_import_2["default"])(),
    reset: function (seriesModel) {
      if (!isOnCartesian(seriesModel)) {
        return;
      }
      var data = seriesModel.getData();
      var cartesian = seriesModel.coordinateSystem;
      var baseAxis = cartesian.getBaseAxis();
      var valueAxis = cartesian.getOtherAxis(baseAxis);
      var valueDimIdx = data.getDimensionIndex(data.mapDimension(valueAxis.dim));
      var baseDimIdx = data.getDimensionIndex(data.mapDimension(baseAxis.dim));
      var drawBackground = seriesModel.get('showBackground', true);
      var valueDim = data.mapDimension(valueAxis.dim);
      var stackResultDim = data.getCalculationInfo('stackResultDimension');
      var stacked = (0,_data_helper_dataStackHelper_js__rspack_import_3.isDimensionStacked)(data, valueDim) && !!data.getCalculationInfo('stackedOnSeries');
      var isValueAxisH = valueAxis.isHorizontal();
      var valueAxisStart = getValueAxisStart(baseAxis, valueAxis);
      var isLarge = isInLargeMode(seriesModel);
      var barMinHeight = seriesModel.get('barMinHeight') || 0;
      var stackedDimIdx = stackResultDim && data.getDimensionIndex(stackResultDim);
      // Layout info.
      var columnWidth = data.getLayout('size');
      var columnOffset = data.getLayout('offset');
      return {
        progress: function (params, data) {
          var count = params.count;
          var largePoints = isLarge && (0,_util_vendor_js__rspack_import_4.createFloat32Array)(count * 3);
          var largeBackgroundPoints = isLarge && drawBackground && (0,_util_vendor_js__rspack_import_4.createFloat32Array)(count * 3);
          var largeDataIndices = isLarge && (0,_util_vendor_js__rspack_import_4.createFloat32Array)(count);
          var coordLayout = cartesian.master.getRect();
          var bgSize = isValueAxisH ? coordLayout.width : coordLayout.height;
          var dataIndex;
          var store = data.getStore();
          var idxOffset = 0;
          while ((dataIndex = params.next()) != null) {
            var value = store.get(stacked ? stackedDimIdx : valueDimIdx, dataIndex);
            var baseValue = store.get(baseDimIdx, dataIndex);
            var baseCoord = valueAxisStart;
            var stackStartValue = void 0;
            // Because of the barMinHeight, we can not use the value in
            // stackResultDimension directly.
            if (stacked) {
              stackStartValue = +value - store.get(valueDimIdx, dataIndex);
            }
            var x = void 0;
            var y = void 0;
            var width = void 0;
            var height = void 0;
            if (isValueAxisH) {
              var coord = cartesian.dataToPoint([value, baseValue]);
              if (stacked) {
                var startCoord = cartesian.dataToPoint([stackStartValue, baseValue]);
                baseCoord = startCoord[0];
              }
              x = baseCoord;
              y = coord[1] + columnOffset;
              width = coord[0] - baseCoord;
              height = columnWidth;
              if (Math.abs(width) < barMinHeight) {
                width = (width < 0 ? -1 : 1) * barMinHeight;
              }
            } else {
              var coord = cartesian.dataToPoint([baseValue, value]);
              if (stacked) {
                var startCoord = cartesian.dataToPoint([baseValue, stackStartValue]);
                baseCoord = startCoord[1];
              }
              x = coord[0] + columnOffset;
              y = baseCoord;
              width = columnWidth;
              height = coord[1] - baseCoord;
              if (Math.abs(height) < barMinHeight) {
                // Include zero to has a positive bar
                height = (height <= 0 ? -1 : 1) * barMinHeight;
              }
            }
            if (!isLarge) {
              data.setItemLayout(dataIndex, {
                x: x,
                y: y,
                width: width,
                height: height
              });
            } else {
              largePoints[idxOffset] = x;
              largePoints[idxOffset + 1] = y;
              largePoints[idxOffset + 2] = isValueAxisH ? width : height;
              if (largeBackgroundPoints) {
                largeBackgroundPoints[idxOffset] = isValueAxisH ? coordLayout.x : x;
                largeBackgroundPoints[idxOffset + 1] = isValueAxisH ? y : coordLayout.y;
                largeBackgroundPoints[idxOffset + 2] = bgSize;
              }
              largeDataIndices[dataIndex] = dataIndex;
            }
            idxOffset += 3;
          }
          if (isLarge) {
            data.setLayout({
              largePoints: largePoints,
              largeDataIndices: largeDataIndices,
              largeBackgroundPoints: largeBackgroundPoints,
              valueAxisHorizontal: isValueAxisH
            });
          }
        }
      };
    }
  };
}
function isOnCartesian(seriesModel) {
  return seriesModel.coordinateSystem && seriesModel.coordinateSystem.type === 'cartesian2d';
}
function isInLargeMode(seriesModel) {
  return seriesModel.pipelineContext && seriesModel.pipelineContext.large;
}
// See cases in `test/bar-start.html` and `#7412`, `#8747`.
function getValueAxisStart(baseAxis, valueAxis) {
  var startValue = valueAxis.model.get('startValue');
  if (!startValue) {
    startValue = 0;
  }
  return valueAxis.toGlobalCoord(valueAxis.dataToCoord(valueAxis.type === 'log' ? startValue > 0 ? startValue : 1 : startValue));
}

}),
96686: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var zrender_lib_core_util_js__rspack_import_0 = __webpack_require__(9774);
/* import */ var _util_number_js__rspack_import_2 = __webpack_require__(64782);
/* import */ var _data_helper_dataStackHelper_js__rspack_import_1 = __webpack_require__(89528);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/



function getSeriesStackId(seriesModel) {
  return seriesModel.get('stack') || '__ec_stack_' + seriesModel.seriesIndex;
}
function getAxisKey(polar, axis) {
  return axis.dim + polar.model.componentIndex;
}
function barLayoutPolar(seriesType, ecModel, api) {
  var lastStackCoords = {};
  var barWidthAndOffset = calRadialBar(zrender_lib_core_util_js__rspack_import_0.filter(ecModel.getSeriesByType(seriesType), function (seriesModel) {
    return !ecModel.isSeriesFiltered(seriesModel) && seriesModel.coordinateSystem && seriesModel.coordinateSystem.type === 'polar';
  }));
  ecModel.eachSeriesByType(seriesType, function (seriesModel) {
    // Check series coordinate, do layout for polar only
    if (seriesModel.coordinateSystem.type !== 'polar') {
      return;
    }
    var data = seriesModel.getData();
    var polar = seriesModel.coordinateSystem;
    var baseAxis = polar.getBaseAxis();
    var axisKey = getAxisKey(polar, baseAxis);
    var stackId = getSeriesStackId(seriesModel);
    var columnLayoutInfo = barWidthAndOffset[axisKey][stackId];
    var columnOffset = columnLayoutInfo.offset;
    var columnWidth = columnLayoutInfo.width;
    var valueAxis = polar.getOtherAxis(baseAxis);
    var cx = seriesModel.coordinateSystem.cx;
    var cy = seriesModel.coordinateSystem.cy;
    var barMinHeight = seriesModel.get('barMinHeight') || 0;
    var barMinAngle = seriesModel.get('barMinAngle') || 0;
    lastStackCoords[stackId] = lastStackCoords[stackId] || [];
    var valueDim = data.mapDimension(valueAxis.dim);
    var baseDim = data.mapDimension(baseAxis.dim);
    var stacked = (0,_data_helper_dataStackHelper_js__rspack_import_1.isDimensionStacked)(data, valueDim /* , baseDim */);
    var clampLayout = baseAxis.dim !== 'radius' || !seriesModel.get('roundCap', true);
    var valueAxisModel = valueAxis.model;
    var startValue = valueAxisModel.get('startValue');
    var valueAxisStart = valueAxis.dataToCoord(startValue || 0);
    for (var idx = 0, len = data.count(); idx < len; idx++) {
      var value = data.get(valueDim, idx);
      var baseValue = data.get(baseDim, idx);
      var sign = value >= 0 ? 'p' : 'n';
      var baseCoord = valueAxisStart;
      // Because of the barMinHeight, we can not use the value in
      // stackResultDimension directly.
      // Only ordinal axis can be stacked.
      if (stacked) {
        if (!lastStackCoords[stackId][baseValue]) {
          lastStackCoords[stackId][baseValue] = {
            p: valueAxisStart,
            n: valueAxisStart // Negative stack
          };
        }
        // Should also consider #4243
        baseCoord = lastStackCoords[stackId][baseValue][sign];
      }
      var r0 = void 0;
      var r = void 0;
      var startAngle = void 0;
      var endAngle = void 0;
      // radial sector
      if (valueAxis.dim === 'radius') {
        var radiusSpan = valueAxis.dataToCoord(value) - valueAxisStart;
        var angle = baseAxis.dataToCoord(baseValue);
        if (Math.abs(radiusSpan) < barMinHeight) {
          radiusSpan = (radiusSpan < 0 ? -1 : 1) * barMinHeight;
        }
        r0 = baseCoord;
        r = baseCoord + radiusSpan;
        startAngle = angle - columnOffset;
        endAngle = startAngle - columnWidth;
        stacked && (lastStackCoords[stackId][baseValue][sign] = r);
      }
      // tangential sector
      else {
        var angleSpan = valueAxis.dataToCoord(value, clampLayout) - valueAxisStart;
        var radius = baseAxis.dataToCoord(baseValue);
        if (Math.abs(angleSpan) < barMinAngle) {
          angleSpan = (angleSpan < 0 ? -1 : 1) * barMinAngle;
        }
        r0 = radius + columnOffset;
        r = r0 + columnWidth;
        startAngle = baseCoord;
        endAngle = baseCoord + angleSpan;
        // if the previous stack is at the end of the ring,
        // add a round to differentiate it from origin
        // let extent = angleAxis.getExtent();
        // let stackCoord = angle;
        // if (stackCoord === extent[0] && value > 0) {
        //     stackCoord = extent[1];
        // }
        // else if (stackCoord === extent[1] && value < 0) {
        //     stackCoord = extent[0];
        // }
        stacked && (lastStackCoords[stackId][baseValue][sign] = endAngle);
      }
      data.setItemLayout(idx, {
        cx: cx,
        cy: cy,
        r0: r0,
        r: r,
        // Consider that positive angle is anti-clockwise,
        // while positive radian of sector is clockwise
        startAngle: -startAngle * Math.PI / 180,
        endAngle: -endAngle * Math.PI / 180,
        /**
         * Keep the same logic with bar in catesion: use end value to
         * control direction. Notice that if clockwise is true (by
         * default), the sector will always draw clockwisely, no matter
         * whether endAngle is greater or less than startAngle.
         */
        clockwise: startAngle >= endAngle
      });
    }
  });
}
/**
 * Calculate bar width and offset for radial bar charts
 */
function calRadialBar(barSeries) {
  // Columns info on each category axis. Key is polar name
  var columnsMap = {};
  zrender_lib_core_util_js__rspack_import_0.each(barSeries, function (seriesModel, idx) {
    var data = seriesModel.getData();
    var polar = seriesModel.coordinateSystem;
    var baseAxis = polar.getBaseAxis();
    var axisKey = getAxisKey(polar, baseAxis);
    var axisExtent = baseAxis.getExtent();
    var bandWidth = baseAxis.type === 'category' ? baseAxis.getBandWidth() : Math.abs(axisExtent[1] - axisExtent[0]) / data.count();
    var columnsOnAxis = columnsMap[axisKey] || {
      bandWidth: bandWidth,
      remainedWidth: bandWidth,
      autoWidthCount: 0,
      categoryGap: '20%',
      gap: '30%',
      stacks: {}
    };
    var stacks = columnsOnAxis.stacks;
    columnsMap[axisKey] = columnsOnAxis;
    var stackId = getSeriesStackId(seriesModel);
    if (!stacks[stackId]) {
      columnsOnAxis.autoWidthCount++;
    }
    stacks[stackId] = stacks[stackId] || {
      width: 0,
      maxWidth: 0
    };
    var barWidth = (0,_util_number_js__rspack_import_2.parsePercent)(seriesModel.get('barWidth'), bandWidth);
    var barMaxWidth = (0,_util_number_js__rspack_import_2.parsePercent)(seriesModel.get('barMaxWidth'), bandWidth);
    var barGap = seriesModel.get('barGap');
    var barCategoryGap = seriesModel.get('barCategoryGap');
    if (barWidth && !stacks[stackId].width) {
      barWidth = Math.min(columnsOnAxis.remainedWidth, barWidth);
      stacks[stackId].width = barWidth;
      columnsOnAxis.remainedWidth -= barWidth;
    }
    barMaxWidth && (stacks[stackId].maxWidth = barMaxWidth);
    barGap != null && (columnsOnAxis.gap = barGap);
    barCategoryGap != null && (columnsOnAxis.categoryGap = barCategoryGap);
  });
  var result = {};
  zrender_lib_core_util_js__rspack_import_0.each(columnsMap, function (columnsOnAxis, coordSysName) {
    result[coordSysName] = {};
    var stacks = columnsOnAxis.stacks;
    var bandWidth = columnsOnAxis.bandWidth;
    var categoryGap = (0,_util_number_js__rspack_import_2.parsePercent)(columnsOnAxis.categoryGap, bandWidth);
    var barGapPercent = (0,_util_number_js__rspack_import_2.parsePercent)(columnsOnAxis.gap, 1);
    var remainedWidth = columnsOnAxis.remainedWidth;
    var autoWidthCount = columnsOnAxis.autoWidthCount;
    var autoWidth = (remainedWidth - categoryGap) / (autoWidthCount + (autoWidthCount - 1) * barGapPercent);
    autoWidth = Math.max(autoWidth, 0);
    // Find if any auto calculated bar exceeded maxBarWidth
    zrender_lib_core_util_js__rspack_import_0.each(stacks, function (column, stack) {
      var maxWidth = column.maxWidth;
      if (maxWidth && maxWidth < autoWidth) {
        maxWidth = Math.min(maxWidth, remainedWidth);
        if (column.width) {
          maxWidth = Math.min(maxWidth, column.width);
        }
        remainedWidth -= maxWidth;
        column.width = maxWidth;
        autoWidthCount--;
      }
    });
    // Recalculate width again
    autoWidth = (remainedWidth - categoryGap) / (autoWidthCount + (autoWidthCount - 1) * barGapPercent);
    autoWidth = Math.max(autoWidth, 0);
    var widthSum = 0;
    var lastColumn;
    zrender_lib_core_util_js__rspack_import_0.each(stacks, function (column, idx) {
      if (!column.width) {
        column.width = autoWidth;
      }
      lastColumn = column;
      widthSum += column.width * (1 + barGapPercent);
    });
    if (lastColumn) {
      widthSum -= lastColumn.width * barGapPercent;
    }
    var offset = -widthSum / 2;
    zrender_lib_core_util_js__rspack_import_0.each(stacks, function (column, stackId) {
      result[coordSysName][stackId] = result[coordSysName][stackId] || {
        offset: offset,
        width: column.width
      };
      offset += column.width * (1 + barGapPercent);
    });
  });
  return result;
}
/* export default */ __webpack_exports__["default"] = (barLayoutPolar);

}),
98018: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return pointsLayout; }
});
/* import */ var zrender_lib_core_util_js__rspack_import_1 = __webpack_require__(9774);
/* import */ var _chart_helper_createRenderPlanner_js__rspack_import_0 = __webpack_require__(26070);
/* import */ var _data_helper_dataStackHelper_js__rspack_import_2 = __webpack_require__(89528);
/* import */ var _util_vendor_js__rspack_import_3 = __webpack_require__(94917);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/




function pointsLayout(seriesType, forceStoreInTypedArray) {
  return {
    seriesType: seriesType,
    plan: (0,_chart_helper_createRenderPlanner_js__rspack_import_0["default"])(),
    reset: function (seriesModel) {
      var data = seriesModel.getData();
      var coordSys = seriesModel.coordinateSystem;
      var pipelineContext = seriesModel.pipelineContext;
      var useTypedArray = forceStoreInTypedArray || pipelineContext.large;
      if (!coordSys) {
        return;
      }
      var dims = (0,zrender_lib_core_util_js__rspack_import_1.map)(coordSys.dimensions, function (dim) {
        return data.mapDimension(dim);
      }).slice(0, 2);
      var dimLen = dims.length;
      var stackResultDim = data.getCalculationInfo('stackResultDimension');
      if ((0,_data_helper_dataStackHelper_js__rspack_import_2.isDimensionStacked)(data, dims[0])) {
        dims[0] = stackResultDim;
      }
      if ((0,_data_helper_dataStackHelper_js__rspack_import_2.isDimensionStacked)(data, dims[1])) {
        dims[1] = stackResultDim;
      }
      var store = data.getStore();
      var dimIdx0 = data.getDimensionIndex(dims[0]);
      var dimIdx1 = data.getDimensionIndex(dims[1]);
      return dimLen && {
        progress: function (params, data) {
          var segCount = params.end - params.start;
          var points = useTypedArray && (0,_util_vendor_js__rspack_import_3.createFloat32Array)(segCount * dimLen);
          var tmpIn = [];
          var tmpOut = [];
          for (var i = params.start, offset = 0; i < params.end; i++) {
            var point = void 0;
            if (dimLen === 1) {
              var x = store.get(dimIdx0, i);
              // NOTE: Make sure the second parameter is null to use default strategy.
              point = coordSys.dataToPoint(x, null, tmpOut);
            } else {
              tmpIn[0] = store.get(dimIdx0, i);
              tmpIn[1] = store.get(dimIdx1, i);
              // Let coordinate system to handle the NaN data.
              point = coordSys.dataToPoint(tmpIn, null, tmpOut);
            }
            if (useTypedArray) {
              points[offset++] = point[0];
              points[offset++] = point[1];
            } else {
              data.setItemLayout(i, point.slice());
            }
          }
          useTypedArray && data.setLayout('points', points);
        }
      };
    }
  };
}
;

}),
27644: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createLegacyDataSelectAction: function() { return createLegacyDataSelectAction; },
  handleLegacySelectEvents: function() { return handleLegacySelectEvents; }
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



// Legacy data selection action.
// Includes: pieSelect, pieUnSelect, pieToggleSelect, mapSelect, mapUnSelect, mapToggleSelect
function createLegacyDataSelectAction(seriesType, ecRegisterAction) {
  function getSeriesIndices(ecModel, payload) {
    var seriesIndices = [];
    ecModel.eachComponent({
      mainType: 'series',
      subType: seriesType,
      query: payload
    }, function (seriesModel) {
      seriesIndices.push(seriesModel.seriesIndex);
    });
    return seriesIndices;
  }
  (0,zrender_lib_core_util_js__rspack_import_0.each)([[seriesType + 'ToggleSelect', 'toggleSelect'], [seriesType + 'Select', 'select'], [seriesType + 'UnSelect', 'unselect']], function (eventsMap) {
    ecRegisterAction(eventsMap[0], function (payload, ecModel, api) {
      payload = (0,zrender_lib_core_util_js__rspack_import_0.extend)({}, payload);
      if (false) {}
      api.dispatchAction((0,zrender_lib_core_util_js__rspack_import_0.extend)(payload, {
        type: eventsMap[1],
        seriesIndex: getSeriesIndices(ecModel, payload)
      }));
    });
  });
}
function handleSeriesLegacySelectEvents(type, eventPostfix, ecIns, ecModel, payload) {
  var legacyEventName = type + eventPostfix;
  if (!ecIns.isSilent(legacyEventName)) {
    if (false) {}
    ecModel.eachComponent({
      mainType: 'series',
      subType: 'pie'
    }, function (seriesModel) {
      var seriesIndex = seriesModel.seriesIndex;
      var selectedMap = seriesModel.option.selectedMap;
      var selected = payload.selected;
      for (var i = 0; i < selected.length; i++) {
        if (selected[i].seriesIndex === seriesIndex) {
          var data = seriesModel.getData();
          var dataIndex = (0,_util_model_js__rspack_import_1.queryDataIndex)(data, payload.fromActionPayload);
          ecIns.trigger(legacyEventName, {
            type: legacyEventName,
            seriesId: seriesModel.id,
            name: (0,zrender_lib_core_util_js__rspack_import_0.isArray)(dataIndex) ? data.getName(dataIndex[0]) : data.getName(dataIndex),
            selected: (0,zrender_lib_core_util_js__rspack_import_0.isString)(selectedMap) ? selectedMap : (0,zrender_lib_core_util_js__rspack_import_0.extend)({}, selectedMap)
          });
        }
      }
    });
  }
}
function handleLegacySelectEvents(messageCenter, ecIns, api) {
  messageCenter.on('selectchanged', function (params) {
    var ecModel = api.getModel();
    if (params.isFromClick) {
      handleSeriesLegacySelectEvents('map', 'selectchanged', ecIns, ecModel, params);
      handleSeriesLegacySelectEvents('pie', 'selectchanged', ecIns, ecModel, params);
    } else if (params.fromAction === 'select') {
      handleSeriesLegacySelectEvents('map', 'selected', ecIns, ecModel, params);
      handleSeriesLegacySelectEvents('pie', 'selected', ecIns, ecModel, params);
    } else if (params.fromAction === 'unselect') {
      handleSeriesLegacySelectEvents('map', 'unselected', ecIns, ecModel, params);
      handleSeriesLegacySelectEvents('pie', 'unselected', ecIns, ecModel, params);
    }
  });
}

}),
71745: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getTextRect: function() { return getTextRect; }
});
/* import */ var _util_graphic_js__rspack_import_0 = __webpack_require__(62070);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

function getTextRect(text, font, align, verticalAlign, padding, rich, truncate, lineHeight) {
  var textEl = new _util_graphic_js__rspack_import_0["default"]({
    style: {
      text: text,
      font: font,
      align: align,
      verticalAlign: verticalAlign,
      padding: padding,
      rich: rich,
      overflow: truncate ? 'truncate' : null,
      lineHeight: lineHeight
    }
  });
  return textEl.getBoundingRect();
}

}),
23796: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return defaultLoading; }
});
/* import */ var zrender_lib_core_util_js__rspack_import_0 = __webpack_require__(9774);
/* import */ var _util_graphic_js__rspack_import_2 = __webpack_require__(97786);
/* import */ var _util_graphic_js__rspack_import_3 = __webpack_require__(52721);
/* import */ var _util_graphic_js__rspack_import_4 = __webpack_require__(62070);
/* import */ var _util_graphic_js__rspack_import_5 = __webpack_require__(9987);
/* import */ var _visual_tokens_js__rspack_import_1 = __webpack_require__(87473);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
/**
 * @param {module:echarts/ExtensionAPI} api
 * @param {Object} [opts]
 * @param {string} [opts.text]
 * @param {string} [opts.color]
 * @param {string} [opts.textColor]
 * @return {module:zrender/Element}
 */
function defaultLoading(api, opts) {
  opts = opts || {};
  zrender_lib_core_util_js__rspack_import_0.defaults(opts, {
    text: 'loading',
    textColor: _visual_tokens_js__rspack_import_1["default"].color.primary,
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontFamily: 'sans-serif',
    maskColor: 'rgba(255,255,255,0.8)',
    showSpinner: true,
    color: _visual_tokens_js__rspack_import_1["default"].color.theme["0"],
    spinnerRadius: 10,
    lineWidth: 5,
    zlevel: 0
  });
  var group = new _util_graphic_js__rspack_import_2["default"]();
  var mask = new _util_graphic_js__rspack_import_3["default"]({
    style: {
      fill: opts.maskColor
    },
    zlevel: opts.zlevel,
    z: 10000
  });
  group.add(mask);
  var textContent = new _util_graphic_js__rspack_import_4["default"]({
    style: {
      text: opts.text,
      fill: opts.textColor,
      fontSize: opts.fontSize,
      fontWeight: opts.fontWeight,
      fontStyle: opts.fontStyle,
      fontFamily: opts.fontFamily
    },
    zlevel: opts.zlevel,
    z: 10001
  });
  var labelRect = new _util_graphic_js__rspack_import_3["default"]({
    style: {
      fill: 'none'
    },
    textContent: textContent,
    textConfig: {
      position: 'right',
      distance: 10
    },
    zlevel: opts.zlevel,
    z: 10001
  });
  group.add(labelRect);
  var arc;
  if (opts.showSpinner) {
    arc = new _util_graphic_js__rspack_import_5["default"]({
      shape: {
        startAngle: -PI / 2,
        endAngle: -PI / 2 + 0.1,
        r: opts.spinnerRadius
      },
      style: {
        stroke: opts.color,
        lineCap: 'round',
        lineWidth: opts.lineWidth
      },
      zlevel: opts.zlevel,
      z: 10001
    });
    arc.animateShape(true).when(1000, {
      endAngle: PI * 3 / 2
    }).start('circularInOut');
    arc.animateShape(true).when(1000, {
      startAngle: PI * 3 / 2
    }).delay(300).start('circularInOut');
    group.add(arc);
  }
  // Inject resize
  group.resize = function () {
    var textWidth = textContent.getBoundingRect().width;
    var r = opts.showSpinner ? opts.spinnerRadius : 0;
    // cx = (containerWidth - arcDiameter - textDistance - textWidth) / 2
    // textDistance needs to be calculated when both animation and text exist
    var cx = (api.getWidth() - r * 2 - (opts.showSpinner && textWidth ? 10 : 0) - textWidth) / 2 - (opts.showSpinner && textWidth ? 0 : 5 + textWidth / 2)
    // only show the text
    + (opts.showSpinner ? 0 : textWidth / 2)
    // only show the spinner
    + (textWidth ? 0 : r);
    var cy = api.getHeight() / 2;
    opts.showSpinner && arc.setShape({
      cx: cx,
      cy: cy
    });
    labelRect.setShape({
      x: cx - r,
      y: cy - r,
      width: r * 2,
      height: r * 2
    });
    mask.setShape({
      x: 0,
      y: 0,
      width: api.getWidth(),
      height: api.getHeight()
    });
  };
  group.resize();
  return group;
}

}),
53075: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var tslib__rspack_import_2 = __webpack_require__(2492);
/* import */ var zrender_lib_core_util_js__rspack_import_5 = __webpack_require__(9774);
/* import */ var _Model_js__rspack_import_1 = __webpack_require__(37931);
/* import */ var _util_component_js__rspack_import_3 = __webpack_require__(98320);
/* import */ var _util_clazz_js__rspack_import_6 = __webpack_require__(72749);
/* import */ var _util_model_js__rspack_import_0 = __webpack_require__(67698);
/* import */ var _util_layout_js__rspack_import_4 = __webpack_require__(88485);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
var ComponentModel = /** @class */function (_super) {
  (0,tslib__rspack_import_2.__extends)(ComponentModel, _super);
  function ComponentModel(option, parentModel, ecModel) {
    var _this = _super.call(this, option, parentModel, ecModel) || this;
    _this.uid = _util_component_js__rspack_import_3.getUID('ec_cpt_model');
    return _this;
  }
  ComponentModel.prototype.init = function (option, parentModel, ecModel) {
    this.mergeDefaultAndTheme(option, ecModel);
  };
  ComponentModel.prototype.mergeDefaultAndTheme = function (option, ecModel) {
    var layoutMode = _util_layout_js__rspack_import_4.fetchLayoutMode(this);
    var inputPositionParams = layoutMode ? _util_layout_js__rspack_import_4.getLayoutParams(option) : {};
    var themeModel = ecModel.getTheme();
    zrender_lib_core_util_js__rspack_import_5.merge(option, themeModel.get(this.mainType));
    zrender_lib_core_util_js__rspack_import_5.merge(option, this.getDefaultOption());
    if (layoutMode) {
      _util_layout_js__rspack_import_4.mergeLayoutParam(option, inputPositionParams, layoutMode);
    }
  };
  ComponentModel.prototype.mergeOption = function (option, ecModel) {
    zrender_lib_core_util_js__rspack_import_5.merge(this.option, option, true);
    var layoutMode = _util_layout_js__rspack_import_4.fetchLayoutMode(this);
    if (layoutMode) {
      _util_layout_js__rspack_import_4.mergeLayoutParam(this.option, option, layoutMode);
    }
  };
  /**
   * Called immediately after `init` or `mergeOption` of this instance called.
   */
  ComponentModel.prototype.optionUpdated = function (newCptOption, isInit) {};
  /**
   * [How to declare defaultOption]:
   *
   * (A) If using class declaration in typescript (since echarts 5):
   * ```ts
   * import {ComponentOption} from '../model/option.js';
   * export interface XxxOption extends ComponentOption {
   *     aaa: number
   * }
   * export class XxxModel extends Component {
   *     static type = 'xxx';
   *     static defaultOption: XxxOption = {
   *         aaa: 123
   *     }
   * }
   * Component.registerClass(XxxModel);
   * ```
   * ```ts
   * import {inheritDefaultOption} from '../util/component.js';
   * import {XxxModel, XxxOption} from './XxxModel.js';
   * export interface XxxSubOption extends XxxOption {
   *     bbb: number
   * }
   * class XxxSubModel extends XxxModel {
   *     static defaultOption: XxxSubOption = inheritDefaultOption(XxxModel.defaultOption, {
   *         bbb: 456
   *     })
   *     fn() {
   *         let opt = this.getDefaultOption();
   *         // opt is {aaa: 123, bbb: 456}
   *     }
   * }
   * ```
   *
   * (B) If using class extend (previous approach in echarts 3 & 4):
   * ```js
   * let XxxComponent = Component.extend({
   *     defaultOption: {
   *         xx: 123
   *     }
   * })
   * ```
   * ```js
   * let XxxSubComponent = XxxComponent.extend({
   *     defaultOption: {
   *         yy: 456
   *     },
   *     fn: function () {
   *         let opt = this.getDefaultOption();
   *         // opt is {xx: 123, yy: 456}
   *     }
   * })
   * ```
   */
  ComponentModel.prototype.getDefaultOption = function () {
    var ctor = this.constructor;
    if (!(0,_util_clazz_js__rspack_import_6.isExtendedClass)(ctor)) {
      // When using ES class declaration, defaultOption must be declared as static.
      // And manually inherit the defaultOption from its parent class if needed, such as,
      //  ```ts
      //  static defaultOption = inheritDefaultOption(ParentModel.defaultOption, {...});
      //  ```
      return ctor.defaultOption;
    }
    // FIXME: remove this approach?
    // Legacy: auto merge defaultOption from ancestor classes if using ParentClass.extend(subProto)
    var fields = inner(this);
    if (!fields.defaultOption) {
      var optList = [];
      var clz = ctor;
      while (clz) {
        var opt = clz.prototype.defaultOption;
        opt && optList.push(opt);
        clz = clz.superClass;
      }
      var defaultOption = {};
      for (var i = optList.length - 1; i >= 0; i--) {
        defaultOption = zrender_lib_core_util_js__rspack_import_5.merge(defaultOption, optList[i], true);
      }
      fields.defaultOption = defaultOption;
    }
    return fields.defaultOption;
  };
  /**
   * Notice: always force to input param `useDefault` in case that forget to consider it.
   * The same behavior as `modelUtil.parseFinder`.
   *
   * @param useDefault In many cases like series refer axis and axis refer grid,
   *        If axis index / axis id not specified, use the first target as default.
   *        In other cases like dataZoom refer axis, if not specified, measn no refer.
   */
  ComponentModel.prototype.getReferringComponents = function (mainType, opt) {
    var indexKey = mainType + 'Index';
    var idKey = mainType + 'Id';
    return (0,_util_model_js__rspack_import_0.queryReferringComponents)(this.ecModel, mainType, {
      index: this.get(indexKey, true),
      id: this.get(idKey, true)
    }, opt);
  };
  ComponentModel.prototype.getBoxLayoutParams = function () {
    // Consider itself having box layout configs.
    // For backward compatibility, by default do not `ignoreParent`.
    return _util_layout_js__rspack_import_4.getBoxLayoutParams(this, false);
  };
  /**
   * Get key for zlevel.
   * If developers don't configure zlevel. We will assign zlevel to series based on the key.
   * For example, lines with trail effect and progressive series will in an individual zlevel.
   */
  ComponentModel.prototype.getZLevelKey = function () {
    return '';
  };
  ComponentModel.prototype.setZLevel = function (zlevel) {
    this.option.zlevel = zlevel;
  };
  ComponentModel.protoInitialize = function () {
    var proto = ComponentModel.prototype;
    proto.type = 'component';
    proto.id = '';
    proto.name = '';
    proto.mainType = '';
    proto.subType = '';
    proto.componentIndex = 0;
  }();
  return ComponentModel;
}(_Model_js__rspack_import_1["default"]);
(0,_util_clazz_js__rspack_import_6.mountExtend)(ComponentModel, _Model_js__rspack_import_1["default"]);
(0,_util_clazz_js__rspack_import_6.enableClassManagement)(ComponentModel);
_util_component_js__rspack_import_3.enableSubTypeDefaulter(ComponentModel);
_util_component_js__rspack_import_3.enableTopologicalTravel(ComponentModel, getDependencies);
function getDependencies(componentType) {
  var deps = [];
  zrender_lib_core_util_js__rspack_import_5.each(ComponentModel.getClassesByMainType(componentType), function (clz) {
    deps = deps.concat(clz.dependencies || clz.prototype.dependencies || []);
  });
  // Ensure main type.
  deps = zrender_lib_core_util_js__rspack_import_5.map(deps, function (type) {
    return (0,_util_clazz_js__rspack_import_6.parseClassType)(type).main;
  });
  // Hack dataset for convenience.
  if (componentType !== 'dataset' && zrender_lib_core_util_js__rspack_import_5.indexOf(deps, 'dataset') <= 0) {
    deps.unshift('dataset');
  }
  return deps;
}
/* export default */ __webpack_exports__["default"] = (ComponentModel);

}),
39984: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Global; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(2492);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(9774);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js
var model = __webpack_require__(67698);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Model.js + 2 modules
var Model = __webpack_require__(37931);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Component.js
var Component = __webpack_require__(53075);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/tool/color.js
var color = __webpack_require__(59886);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/tokens.js
var tokens = __webpack_require__(87473);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/globalDefault.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


var platform = '';
// Navigator not exists in node
if (typeof navigator !== 'undefined') {
  /* global navigator */
  platform = navigator.platform || '';
}
var decalColor = 'rgba(0, 0, 0, 0.2)';
var themeColor = tokens["default"].color.theme["0"];
var lightThemeColor = (0,color.modifyHSL)(themeColor, null, null, 0.9);
/* export default */ var globalDefault = ({
  darkMode: 'auto',
  // backgroundColor: 'rgba(0,0,0,0)',
  colorBy: 'series',
  color: tokens["default"].color.theme,
  gradientColor: [lightThemeColor, themeColor],
  aria: {
    decal: {
      decals: [{
        color: decalColor,
        dashArrayX: [1, 0],
        dashArrayY: [2, 5],
        symbolSize: 1,
        rotation: Math.PI / 6
      }, {
        color: decalColor,
        symbol: 'circle',
        dashArrayX: [[8, 8], [0, 8, 8, 0]],
        dashArrayY: [6, 0],
        symbolSize: 0.8
      }, {
        color: decalColor,
        dashArrayX: [1, 0],
        dashArrayY: [4, 3],
        rotation: -Math.PI / 4
      }, {
        color: decalColor,
        dashArrayX: [[6, 6], [0, 6, 6, 0]],
        dashArrayY: [6, 0]
      }, {
        color: decalColor,
        dashArrayX: [[1, 0], [1, 6]],
        dashArrayY: [1, 0, 6, 0],
        rotation: Math.PI / 4
      }, {
        color: decalColor,
        symbol: 'triangle',
        dashArrayX: [[9, 9], [0, 9, 9, 0]],
        dashArrayY: [7, 2],
        symbolSize: 0.75
      }]
    }
  },
  // If xAxis and yAxis declared, grid is created by default.
  // grid: {},
  textStyle: {
    // color: '#000',
    // decoration: 'none',
    // PENDING
    fontFamily: platform.match(/^Win/) ? 'Microsoft YaHei' : 'sans-serif',
    // fontFamily: 'Arial, Verdana, sans-serif',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: 'normal'
  },
  // http://blogs.adobe.com/webplatform/2014/02/24/using-blend-modes-in-html-canvas/
  // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation
  // Default is source-over
  blendMode: null,
  stateAnimation: {
    duration: 300,
    easing: 'cubicOut'
  },
  animation: 'auto',
  animationDuration: 1000,
  animationDurationUpdate: 500,
  animationEasing: 'cubicInOut',
  animationEasingUpdate: 'cubicInOut',
  animationThreshold: 2000,
  // Configuration for progressive/incremental rendering
  progressiveThreshold: 3000,
  progressive: 400,
  // Threshold of if use single hover layer to optimize.
  // It is recommended that `hoverLayerThreshold` is equivalent to or less than
  // `progressiveThreshold`, otherwise hover will cause restart of progressive,
  // which is unexpected.
  // see example <echarts/test/heatmap-large.html>.
  hoverLayerThreshold: 3000,
  // See: module:echarts/scale/Time
  useUTC: false
});
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/helper/sourceHelper.js
var sourceHelper = __webpack_require__(44055);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/internalComponentCreator.js
var internalComponentCreator = __webpack_require__(9754);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/mixin/palette.js
var palette = __webpack_require__(77885);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Global.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

/**
 * Caution: If the mechanism should be changed some day, these cases
 * should be considered:
 *
 * (1) In `merge option` mode, if using the same option to call `setOption`
 * many times, the result should be the same (try our best to ensure that).
 * (2) In `merge option` mode, if a component has no id/name specified, it
 * will be merged by index, and the result sequence of the components is
 * consistent to the original sequence.
 * (3) In `replaceMerge` mode, keep the result sequence of the components is
 * consistent to the original sequence, even though there might result in "hole".
 * (4) `reset` feature (in toolbox). Find detailed info in comments about
 * `mergeOption` in module:echarts/model/OptionManager.
 */









// -----------------------
// Internal method names:
// -----------------------
var reCreateSeriesIndices;
var assertSeriesInitialized;
var initBase;
var OPTION_INNER_KEY = '\0_ec_inner';
var OPTION_INNER_VALUE = 1;
var BUITIN_COMPONENTS_MAP = (/* unused pure expression or super */ null && ({
  grid: 'GridComponent',
  polar: 'PolarComponent',
  geo: 'GeoComponent',
  singleAxis: 'SingleAxisComponent',
  parallel: 'ParallelComponent',
  calendar: 'CalendarComponent',
  matrix: 'MatrixComponent',
  graphic: 'GraphicComponent',
  toolbox: 'ToolboxComponent',
  tooltip: 'TooltipComponent',
  axisPointer: 'AxisPointerComponent',
  brush: 'BrushComponent',
  title: 'TitleComponent',
  timeline: 'TimelineComponent',
  markPoint: 'MarkPointComponent',
  markLine: 'MarkLineComponent',
  markArea: 'MarkAreaComponent',
  legend: 'LegendComponent',
  dataZoom: 'DataZoomComponent',
  visualMap: 'VisualMapComponent',
  // aria: 'AriaComponent',
  // dataset: 'DatasetComponent',
  // Dependencies
  xAxis: 'GridComponent',
  yAxis: 'GridComponent',
  angleAxis: 'PolarComponent',
  radiusAxis: 'PolarComponent'
}));
var BUILTIN_CHARTS_MAP = (/* unused pure expression or super */ null && ({
  line: 'LineChart',
  bar: 'BarChart',
  pie: 'PieChart',
  scatter: 'ScatterChart',
  radar: 'RadarChart',
  map: 'MapChart',
  tree: 'TreeChart',
  treemap: 'TreemapChart',
  graph: 'GraphChart',
  chord: 'ChordChart',
  gauge: 'GaugeChart',
  funnel: 'FunnelChart',
  parallel: 'ParallelChart',
  sankey: 'SankeyChart',
  boxplot: 'BoxplotChart',
  candlestick: 'CandlestickChart',
  effectScatter: 'EffectScatterChart',
  lines: 'LinesChart',
  heatmap: 'HeatmapChart',
  pictorialBar: 'PictorialBarChart',
  themeRiver: 'ThemeRiverChart',
  sunburst: 'SunburstChart',
  custom: 'CustomChart'
}));
var componetsMissingLogPrinted = (/* unused pure expression or super */ null && ({}));
function checkMissingComponents(option) {
  each(option, function (componentOption, mainType) {
    if (!ComponentModel.hasClass(mainType)) {
      var componentImportName = BUITIN_COMPONENTS_MAP[mainType];
      if (componentImportName && !componetsMissingLogPrinted[componentImportName]) {
        error("Component " + mainType + " is used but not imported.\nimport { " + componentImportName + " } from 'echarts/components';\necharts.use([" + componentImportName + "]);");
        componetsMissingLogPrinted[componentImportName] = true;
      }
    }
  });
}
var Global_GlobalModel = /** @class */function (_super) {
  (0,tslib_es6.__extends)(GlobalModel, _super);
  function GlobalModel() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  GlobalModel.prototype.init = function (option, parentModel, ecModel, theme, locale, optionManager) {
    theme = theme || {};
    this.option = null; // Mark as not initialized.
    this._theme = new Model["default"](theme);
    this._locale = new Model["default"](locale);
    this._optionManager = optionManager;
  };
  GlobalModel.prototype.setOption = function (option, opts, optionPreprocessorFuncs) {
    if (false) {}
    var innerOpt = normalizeSetOptionInput(opts);
    this._optionManager.setOption(option, optionPreprocessorFuncs, innerOpt);
    this._resetOption(null, innerOpt);
  };
  /**
   * @param type null/undefined: reset all.
   *        'recreate': force recreate all.
   *        'timeline': only reset timeline option
   *        'media': only reset media query option
   * @return Whether option changed.
   */
  GlobalModel.prototype.resetOption = function (type, opt) {
    return this._resetOption(type, normalizeSetOptionInput(opt));
  };
  GlobalModel.prototype._resetOption = function (type, opt) {
    var optionChanged = false;
    var optionManager = this._optionManager;
    if (!type || type === 'recreate') {
      var baseOption = optionManager.mountOption(type === 'recreate');
      if (false) {}
      if (!this.option || type === 'recreate') {
        initBase(this, baseOption);
      } else {
        this.restoreData();
        this._mergeOption(baseOption, opt);
      }
      optionChanged = true;
    }
    if (type === 'timeline' || type === 'media') {
      this.restoreData();
    }
    // By design, if `setOption(option2)` at the second time, and `option2` is a `ECUnitOption`,
    // it should better not have the same props with `MediaUnit['option']`.
    // Because either `option2` or `MediaUnit['option']` will be always merged to "current option"
    // rather than original "baseOption". If they both override a prop, the result might be
    // unexpected when media state changed after `setOption` called.
    // If we really need to modify a props in each `MediaUnit['option']`, use the full version
    // (`{baseOption, media}`) in `setOption`.
    // For `timeline`, the case is the same.
    if (!type || type === 'recreate' || type === 'timeline') {
      var timelineOption = optionManager.getTimelineOption(this);
      if (timelineOption) {
        optionChanged = true;
        this._mergeOption(timelineOption, opt);
      }
    }
    if (!type || type === 'recreate' || type === 'media') {
      var mediaOptions = optionManager.getMediaOption(this);
      if (mediaOptions.length) {
        (0,util.each)(mediaOptions, function (mediaOption) {
          optionChanged = true;
          this._mergeOption(mediaOption, opt);
        }, this);
      }
    }
    return optionChanged;
  };
  GlobalModel.prototype.mergeOption = function (option) {
    this._mergeOption(option, null);
  };
  GlobalModel.prototype._mergeOption = function (newOption, opt) {
    var option = this.option;
    var componentsMap = this._componentsMap;
    var componentsCount = this._componentsCount;
    var newCmptTypes = [];
    var newCmptTypeMap = (0,util.createHashMap)();
    var replaceMergeMainTypeMap = opt && opt.replaceMergeMainTypeMap;
    (0,sourceHelper.resetSourceDefaulter)(this);
    // If no component class, merge directly.
    // For example: color, animaiton options, etc.
    (0,util.each)(newOption, function (componentOption, mainType) {
      if (componentOption == null) {
        return;
      }
      if (!Component["default"].hasClass(mainType)) {
        // globalSettingTask.dirty();
        option[mainType] = option[mainType] == null ? (0,util.clone)(componentOption) : (0,util.merge)(option[mainType], componentOption, true);
      } else if (mainType) {
        newCmptTypes.push(mainType);
        newCmptTypeMap.set(mainType, true);
      }
    });
    if (replaceMergeMainTypeMap) {
      // If there is a mainType `xxx` in `replaceMerge` but not declared in option,
      // we trade it as it is declared in option as `{xxx: []}`. Because:
      // (1) for normal merge, `{xxx: null/undefined}` are the same meaning as `{xxx: []}`.
      // (2) some preprocessor may convert some of `{xxx: null/undefined}` to `{xxx: []}`.
      replaceMergeMainTypeMap.each(function (val, mainTypeInReplaceMerge) {
        if (Component["default"].hasClass(mainTypeInReplaceMerge) && !newCmptTypeMap.get(mainTypeInReplaceMerge)) {
          newCmptTypes.push(mainTypeInReplaceMerge);
          newCmptTypeMap.set(mainTypeInReplaceMerge, true);
        }
      });
    }
    Component["default"].topologicalTravel(newCmptTypes, Component["default"].getAllClassMainTypes(), visitComponent, this);
    function visitComponent(mainType) {
      var newCmptOptionList = (0,internalComponentCreator.concatInternalOptions)(this, mainType, model.normalizeToArray(newOption[mainType]));
      var oldCmptList = componentsMap.get(mainType);
      var mergeMode =
      // `!oldCmptList` means init. See the comment in `mappingToExists`
      !oldCmptList ? 'replaceAll' : replaceMergeMainTypeMap && replaceMergeMainTypeMap.get(mainType) ? 'replaceMerge' : 'normalMerge';
      var mappingResult = model.mappingToExists(oldCmptList, newCmptOptionList, mergeMode);
      // Set mainType and complete subType.
      model.setComponentTypeToKeyInfo(mappingResult, mainType, Component["default"]);
      // Empty it before the travel, in order to prevent `this._componentsMap`
      // from being used in the `init`/`mergeOption`/`optionUpdated` of some
      // components, which is probably incorrect logic.
      option[mainType] = null;
      componentsMap.set(mainType, null);
      componentsCount.set(mainType, 0);
      var optionsByMainType = [];
      var cmptsByMainType = [];
      var cmptsCountByMainType = 0;
      var tooltipExists;
      var tooltipWarningLogged;
      (0,util.each)(mappingResult, function (resultItem, index) {
        var componentModel = resultItem.existing;
        var newCmptOption = resultItem.newOption;
        if (!newCmptOption) {
          if (componentModel) {
            // Consider where is no new option and should be merged using {},
            // see removeEdgeAndAdd in topologicalTravel and
            // ComponentModel.getAllClassMainTypes.
            componentModel.mergeOption({}, this);
            componentModel.optionUpdated({}, false);
          }
          // If no both `resultItem.exist` and `resultItem.option`,
          // either it is in `replaceMerge` and not matched by any id,
          // or it has been removed in previous `replaceMerge` and left a "hole" in this component index.
        } else {
          var isSeriesType = mainType === 'series';
          var ComponentModelClass = Component["default"].getClass(mainType, resultItem.keyInfo.subType, !isSeriesType // Give a more detailed warn later if series don't exists
          );
          if (!ComponentModelClass) {
            if (false) { var subType, seriesImportName }
            return;
          }
          // TODO Before multiple tooltips get supported, we do this check to avoid unexpected exception.
          if (mainType === 'tooltip') {
            if (tooltipExists) {
              if (false) {}
              return;
            }
            tooltipExists = true;
          }
          if (componentModel && componentModel.constructor === ComponentModelClass) {
            componentModel.name = resultItem.keyInfo.name;
            // componentModel.settingTask && componentModel.settingTask.dirty();
            componentModel.mergeOption(newCmptOption, this);
            componentModel.optionUpdated(newCmptOption, false);
          } else {
            // PENDING Global as parent ?
            var extraOpt = (0,util.extend)({
              componentIndex: index
            }, resultItem.keyInfo);
            componentModel = new ComponentModelClass(newCmptOption, this, this, extraOpt);
            // Assign `keyInfo`
            (0,util.extend)(componentModel, extraOpt);
            if (resultItem.brandNew) {
              componentModel.__requireNewView = true;
            }
            componentModel.init(newCmptOption, this, this);
            // Call optionUpdated after init.
            // newCmptOption has been used as componentModel.option
            // and may be merged with theme and default, so pass null
            // to avoid confusion.
            componentModel.optionUpdated(null, true);
          }
        }
        if (componentModel) {
          optionsByMainType.push(componentModel.option);
          cmptsByMainType.push(componentModel);
          cmptsCountByMainType++;
        } else {
          // Always do assign to avoid elided item in array.
          optionsByMainType.push(void 0);
          cmptsByMainType.push(void 0);
        }
      }, this);
      option[mainType] = optionsByMainType;
      componentsMap.set(mainType, cmptsByMainType);
      componentsCount.set(mainType, cmptsCountByMainType);
      // Backup series for filtering.
      if (mainType === 'series') {
        reCreateSeriesIndices(this);
      }
    }
    // If no series declared, ensure `_seriesIndices` initialized.
    if (!this._seriesIndices) {
      reCreateSeriesIndices(this);
    }
  };
  /**
   * Get option for output (cloned option and inner info removed)
   */
  GlobalModel.prototype.getOption = function () {
    var option = (0,util.clone)(this.option);
    (0,util.each)(option, function (optInMainType, mainType) {
      if (Component["default"].hasClass(mainType)) {
        var opts = model.normalizeToArray(optInMainType);
        // Inner cmpts need to be removed.
        // Inner cmpts might not be at last since ec5.0, but still
        // compatible for users: if inner cmpt at last, splice the returned array.
        var realLen = opts.length;
        var metNonInner = false;
        for (var i = realLen - 1; i >= 0; i--) {
          // Remove options with inner id.
          if (opts[i] && !model.isComponentIdInternal(opts[i])) {
            metNonInner = true;
          } else {
            opts[i] = null;
            !metNonInner && realLen--;
          }
        }
        opts.length = realLen;
        option[mainType] = opts;
      }
    });
    delete option[OPTION_INNER_KEY];
    return option;
  };
  GlobalModel.prototype.setTheme = function (theme) {
    this._theme = new Model["default"](theme);
    this._resetOption('recreate', null);
  };
  GlobalModel.prototype.getTheme = function () {
    return this._theme;
  };
  GlobalModel.prototype.getLocaleModel = function () {
    return this._locale;
  };
  GlobalModel.prototype.setUpdatePayload = function (payload) {
    this._payload = payload;
  };
  GlobalModel.prototype.getUpdatePayload = function () {
    return this._payload;
  };
  /**
   * @param idx If not specified, return the first one.
   */
  GlobalModel.prototype.getComponent = function (mainType, idx) {
    var list = this._componentsMap.get(mainType);
    if (list) {
      var cmpt = list[idx || 0];
      if (cmpt) {
        return cmpt;
      } else if (idx == null) {
        for (var i = 0; i < list.length; i++) {
          if (list[i]) {
            return list[i];
          }
        }
      }
    }
  };
  /**
   * @return Never be null/undefined.
   */
  GlobalModel.prototype.queryComponents = function (condition) {
    var mainType = condition.mainType;
    if (!mainType) {
      return [];
    }
    var index = condition.index;
    var id = condition.id;
    var name = condition.name;
    var cmpts = this._componentsMap.get(mainType);
    if (!cmpts || !cmpts.length) {
      return [];
    }
    var result;
    if (index != null) {
      result = [];
      (0,util.each)(model.normalizeToArray(index), function (idx) {
        cmpts[idx] && result.push(cmpts[idx]);
      });
    } else if (id != null) {
      result = queryByIdOrName('id', id, cmpts);
    } else if (name != null) {
      result = queryByIdOrName('name', name, cmpts);
    } else {
      // Return all non-empty components in that mainType
      result = (0,util.filter)(cmpts, function (cmpt) {
        return !!cmpt;
      });
    }
    return filterBySubType(result, condition);
  };
  /**
   * The interface is different from queryComponents,
   * which is convenient for inner usage.
   *
   * @usage
   * let result = findComponents(
   *     {mainType: 'dataZoom', query: {dataZoomId: 'abc'}}
   * );
   * let result = findComponents(
   *     {mainType: 'series', subType: 'pie', query: {seriesName: 'uio'}}
   * );
   * let result = findComponents(
   *     {mainType: 'series',
   *     filter: function (model, index) {...}}
   * );
   * // result like [component0, componnet1, ...]
   */
  GlobalModel.prototype.findComponents = function (condition) {
    var query = condition.query;
    var mainType = condition.mainType;
    var queryCond = getQueryCond(query);
    var result = queryCond ? this.queryComponents(queryCond)
    // Retrieve all non-empty components.
    : (0,util.filter)(this._componentsMap.get(mainType), function (cmpt) {
      return !!cmpt;
    });
    return doFilter(filterBySubType(result, condition));
    function getQueryCond(q) {
      var indexAttr = mainType + 'Index';
      var idAttr = mainType + 'Id';
      var nameAttr = mainType + 'Name';
      return q && (q[indexAttr] != null || q[idAttr] != null || q[nameAttr] != null) ? {
        mainType: mainType,
        // subType will be filtered finally.
        index: q[indexAttr],
        id: q[idAttr],
        name: q[nameAttr]
      } : null;
    }
    function doFilter(res) {
      return condition.filter ? (0,util.filter)(res, condition.filter) : res;
    }
  };
  GlobalModel.prototype.eachComponent = function (mainType, cb, context) {
    var componentsMap = this._componentsMap;
    if ((0,util.isFunction)(mainType)) {
      var ctxForAll_1 = cb;
      var cbForAll_1 = mainType;
      componentsMap.each(function (cmpts, componentType) {
        for (var i = 0; cmpts && i < cmpts.length; i++) {
          var cmpt = cmpts[i];
          cmpt && cbForAll_1.call(ctxForAll_1, componentType, cmpt, cmpt.componentIndex);
        }
      });
    } else {
      var cmpts = (0,util.isString)(mainType) ? componentsMap.get(mainType) : (0,util.isObject)(mainType) ? this.findComponents(mainType) : null;
      for (var i = 0; cmpts && i < cmpts.length; i++) {
        var cmpt = cmpts[i];
        cmpt && cb.call(context, cmpt, cmpt.componentIndex);
      }
    }
  };
  /**
   * Get series list before filtered by name.
   */
  GlobalModel.prototype.getSeriesByName = function (name) {
    var nameStr = model.convertOptionIdName(name, null);
    return (0,util.filter)(this._componentsMap.get('series'), function (oneSeries) {
      return !!oneSeries && nameStr != null && oneSeries.name === nameStr;
    });
  };
  /**
   * Get series list before filtered by index.
   */
  GlobalModel.prototype.getSeriesByIndex = function (seriesIndex) {
    return this._componentsMap.get('series')[seriesIndex];
  };
  /**
   * Get series list before filtered by type.
   * FIXME: rename to getRawSeriesByType?
   */
  GlobalModel.prototype.getSeriesByType = function (subType) {
    return (0,util.filter)(this._componentsMap.get('series'), function (oneSeries) {
      return !!oneSeries && oneSeries.subType === subType;
    });
  };
  /**
   * Get all series before filtered.
   */
  GlobalModel.prototype.getSeries = function () {
    return (0,util.filter)(this._componentsMap.get('series'), function (oneSeries) {
      return !!oneSeries;
    });
  };
  /**
   * Count series before filtered.
   */
  GlobalModel.prototype.getSeriesCount = function () {
    return this._componentsCount.get('series');
  };
  /**
   * After filtering, series may be different
   * from raw series.
   */
  GlobalModel.prototype.eachSeries = function (cb, context) {
    assertSeriesInitialized(this);
    (0,util.each)(this._seriesIndices, function (rawSeriesIndex) {
      var series = this._componentsMap.get('series')[rawSeriesIndex];
      cb.call(context, series, rawSeriesIndex);
    }, this);
  };
  /**
   * Iterate raw series before filtered.
   *
   * @param {Function} cb
   * @param {*} context
   */
  GlobalModel.prototype.eachRawSeries = function (cb, context) {
    (0,util.each)(this._componentsMap.get('series'), function (series) {
      series && cb.call(context, series, series.componentIndex);
    });
  };
  /**
   * After filtering, series may be different.
   * from raw series.
   */
  GlobalModel.prototype.eachSeriesByType = function (subType, cb, context) {
    assertSeriesInitialized(this);
    (0,util.each)(this._seriesIndices, function (rawSeriesIndex) {
      var series = this._componentsMap.get('series')[rawSeriesIndex];
      if (series.subType === subType) {
        cb.call(context, series, rawSeriesIndex);
      }
    }, this);
  };
  /**
   * Iterate raw series before filtered of given type.
   */
  GlobalModel.prototype.eachRawSeriesByType = function (subType, cb, context) {
    return (0,util.each)(this.getSeriesByType(subType), cb, context);
  };
  GlobalModel.prototype.isSeriesFiltered = function (seriesModel) {
    assertSeriesInitialized(this);
    return this._seriesIndicesMap.get(seriesModel.componentIndex) == null;
  };
  GlobalModel.prototype.getCurrentSeriesIndices = function () {
    return (this._seriesIndices || []).slice();
  };
  GlobalModel.prototype.filterSeries = function (cb, context) {
    assertSeriesInitialized(this);
    var newSeriesIndices = [];
    (0,util.each)(this._seriesIndices, function (seriesRawIdx) {
      var series = this._componentsMap.get('series')[seriesRawIdx];
      cb.call(context, series, seriesRawIdx) && newSeriesIndices.push(seriesRawIdx);
    }, this);
    this._seriesIndices = newSeriesIndices;
    this._seriesIndicesMap = (0,util.createHashMap)(newSeriesIndices);
  };
  GlobalModel.prototype.restoreData = function (payload) {
    reCreateSeriesIndices(this);
    var componentsMap = this._componentsMap;
    var componentTypes = [];
    componentsMap.each(function (components, componentType) {
      if (Component["default"].hasClass(componentType)) {
        componentTypes.push(componentType);
      }
    });
    Component["default"].topologicalTravel(componentTypes, Component["default"].getAllClassMainTypes(), function (componentType) {
      (0,util.each)(componentsMap.get(componentType), function (component) {
        if (component && (componentType !== 'series' || !isNotTargetSeries(component, payload))) {
          component.restoreData();
        }
      });
    });
  };
  GlobalModel.internalField = function () {
    reCreateSeriesIndices = function (ecModel) {
      var seriesIndices = ecModel._seriesIndices = [];
      (0,util.each)(ecModel._componentsMap.get('series'), function (series) {
        // series may have been removed by `replaceMerge`.
        series && seriesIndices.push(series.componentIndex);
      });
      ecModel._seriesIndicesMap = (0,util.createHashMap)(seriesIndices);
    };
    assertSeriesInitialized = function (ecModel) {
      // Components that use _seriesIndices should depends on series component,
      // which make sure that their initialization is after series.
      if (false) {}
    };
    initBase = function (ecModel, baseOption) {
      // Using OPTION_INNER_KEY to mark that this option cannot be used outside,
      // i.e. `chart.setOption(chart.getModel().option);` is forbidden.
      ecModel.option = {};
      ecModel.option[OPTION_INNER_KEY] = OPTION_INNER_VALUE;
      // Init with series: [], in case of calling findSeries method
      // before series initialized.
      ecModel._componentsMap = (0,util.createHashMap)({
        series: []
      });
      ecModel._componentsCount = (0,util.createHashMap)();
      // If user spefied `option.aria`, aria will be enable. This detection should be
      // performed before theme and globalDefault merge.
      var airaOption = baseOption.aria;
      if ((0,util.isObject)(airaOption) && airaOption.enabled == null) {
        airaOption.enabled = true;
      }
      mergeTheme(baseOption, ecModel._theme.option);
      // TODO Needs clone when merging to the unexisted property
      (0,util.merge)(baseOption, globalDefault, false);
      ecModel._mergeOption(baseOption, null);
    };
  }();
  return GlobalModel;
}(Model["default"]);
function isNotTargetSeries(seriesModel, payload) {
  if (payload) {
    var index = payload.seriesIndex;
    var id = payload.seriesId;
    var name_1 = payload.seriesName;
    return index != null && seriesModel.componentIndex !== index || id != null && seriesModel.id !== id || name_1 != null && seriesModel.name !== name_1;
  }
}
function mergeTheme(option, theme) {
  // PENDING
  // NOT use `colorLayer` in theme if option has `color`
  var notMergeColorLayer = option.color && !option.colorLayer;
  (0,util.each)(theme, function (themeItem, name) {
    if (name === 'colorLayer' && notMergeColorLayer || name === 'color' && option.color) {
      return;
    }
    // If it is component model mainType, the model handles that merge later.
    // otherwise, merge them here.
    if (!Component["default"].hasClass(name)) {
      if (typeof themeItem === 'object') {
        option[name] = !option[name] ? (0,util.clone)(themeItem) : (0,util.merge)(option[name], themeItem, false);
      } else {
        if (option[name] == null) {
          option[name] = themeItem;
        }
      }
    }
  });
}
function queryByIdOrName(attr, idOrName, cmpts) {
  // Here is a break from echarts4: string and number are
  // treated as equal.
  if ((0,util.isArray)(idOrName)) {
    var keyMap_1 = (0,util.createHashMap)();
    (0,util.each)(idOrName, function (idOrNameItem) {
      if (idOrNameItem != null) {
        var idName = model.convertOptionIdName(idOrNameItem, null);
        idName != null && keyMap_1.set(idOrNameItem, true);
      }
    });
    return (0,util.filter)(cmpts, function (cmpt) {
      return cmpt && keyMap_1.get(cmpt[attr]);
    });
  } else {
    var idName_1 = model.convertOptionIdName(idOrName, null);
    return (0,util.filter)(cmpts, function (cmpt) {
      return cmpt && idName_1 != null && cmpt[attr] === idName_1;
    });
  }
}
function filterBySubType(components, condition) {
  // Using hasOwnProperty for restrict. Consider
  // subType is undefined in user payload.
  return condition.hasOwnProperty('subType') ? (0,util.filter)(components, function (cmpt) {
    return cmpt && cmpt.subType === condition.subType;
  }) : components;
}
function normalizeSetOptionInput(opts) {
  var replaceMergeMainTypeMap = (0,util.createHashMap)();
  opts && (0,util.each)(model.normalizeToArray(opts.replaceMerge), function (mainType) {
    if (false) {}
    replaceMergeMainTypeMap.set(mainType, true);
  });
  return {
    replaceMergeMainTypeMap: replaceMergeMainTypeMap
  };
}
(0,util.mixin)(Global_GlobalModel, palette.PaletteMixin);
/* export default */ var Global = (Global_GlobalModel);

}),
37931: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ model_Model; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/env.js
var env = __webpack_require__(18311);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/clazz.js
var clazz = __webpack_require__(72749);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/mixin/makeStyleMapper.js
var makeStyleMapper = __webpack_require__(45240);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/mixin/areaStyle.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

var AREA_STYLE_KEY_MAP = [['fill', 'color'], ['shadowBlur'], ['shadowOffsetX'], ['shadowOffsetY'], ['opacity'], ['shadowColor']
// Option decal is in `DecalObject` but style.decal is in `PatternObject`.
// So do not transfer decal directly.
];
var getAreaStyle = (0,makeStyleMapper["default"])(AREA_STYLE_KEY_MAP);
var areaStyle_AreaStyleMixin = /** @class */function () {
  function AreaStyleMixin() {}
  AreaStyleMixin.prototype.getAreaStyle = function (excludes, includes) {
    return getAreaStyle(this, excludes, includes);
  };
  return AreaStyleMixin;
}();
;

// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelStyle.js
var labelStyle = __webpack_require__(51160);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Text.js
var Text = __webpack_require__(62070);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/mixin/textStyle.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


var PATH_COLOR = ['textStyle', 'color'];
var textStyleParams = ['fontStyle', 'fontWeight', 'fontSize', 'fontFamily', 'padding', 'lineHeight', 'rich', 'width', 'height', 'overflow'];
// TODO Performance improvement?
var tmpText = new Text["default"]();
var textStyle_TextStyleMixin = /** @class */function () {
  function TextStyleMixin() {}
  /**
   * Get color property or get color from option.textStyle.color
   */
  // TODO Callback
  TextStyleMixin.prototype.getTextColor = function (isEmphasis) {
    var ecModel = this.ecModel;
    return this.getShallow('color') || (!isEmphasis && ecModel ? ecModel.get(PATH_COLOR) : null);
  };
  /**
   * Create font string from fontStyle, fontWeight, fontSize, fontFamily
   * @return {string}
   */
  TextStyleMixin.prototype.getFont = function () {
    return (0,labelStyle.getFont)({
      fontStyle: this.getShallow('fontStyle'),
      fontWeight: this.getShallow('fontWeight'),
      fontSize: this.getShallow('fontSize'),
      fontFamily: this.getShallow('fontFamily')
    }, this.ecModel);
  };
  TextStyleMixin.prototype.getTextRect = function (text) {
    var style = {
      text: text,
      verticalAlign: this.getShallow('verticalAlign') || this.getShallow('baseline')
    };
    for (var i = 0; i < textStyleParams.length; i++) {
      style[textStyleParams[i]] = this.getShallow(textStyleParams[i]);
    }
    tmpText.useStyle(style);
    tmpText.update();
    return tmpText.getBoundingRect();
  };
  return TextStyleMixin;
}();
;
/* export default */ var textStyle = (textStyle_TextStyleMixin);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/mixin/lineStyle.js
var lineStyle = __webpack_require__(56709);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/mixin/itemStyle.js
var itemStyle = __webpack_require__(70538);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(9774);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Model.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/







var Model_Model = /** @class */function () {
  function Model(option, parentModel, ecModel) {
    this.parentModel = parentModel;
    this.ecModel = ecModel;
    this.option = option;
    // Simple optimization
    // if (this.init) {
    //     if (arguments.length <= 4) {
    //         this.init(option, parentModel, ecModel, extraOpt);
    //     }
    //     else {
    //         this.init.apply(this, arguments);
    //     }
    // }
  }
  Model.prototype.init = function (option, parentModel, ecModel) {
    var rest = [];
    for (var _i = 3; _i < arguments.length; _i++) {
      rest[_i - 3] = arguments[_i];
    }
  };
  /**
   * Merge the input option to me.
   */
  Model.prototype.mergeOption = function (option, ecModel) {
    (0,util.merge)(this.option, option, true);
  };
  // `path` can be 'a.b.c', so the return value type have to be `ModelOption`
  // TODO: TYPE strict key check?
  // get(path: string | string[], ignoreParent?: boolean): ModelOption;
  Model.prototype.get = function (path, ignoreParent) {
    if (path == null) {
      return this.option;
    }
    return this._doGet(this.parsePath(path), !ignoreParent && this.parentModel);
  };
  Model.prototype.getShallow = function (key, ignoreParent) {
    var option = this.option;
    var val = option == null ? option : option[key];
    if (val == null && !ignoreParent) {
      var parentModel = this.parentModel;
      if (parentModel) {
        // FIXME:TS do not know how to make it works
        val = parentModel.getShallow(key);
      }
    }
    return val;
  };
  // `path` can be 'a.b.c', so the return value type have to be `Model<ModelOption>`
  // getModel(path: string | string[], parentModel?: Model): Model;
  // TODO 'a.b.c' is deprecated
  Model.prototype.getModel = function (path, parentModel) {
    var hasPath = path != null;
    var pathFinal = hasPath ? this.parsePath(path) : null;
    var obj = hasPath ? this._doGet(pathFinal) : this.option;
    parentModel = parentModel || this.parentModel && this.parentModel.getModel(this.resolveParentPath(pathFinal));
    return new Model(obj, parentModel, this.ecModel);
  };
  /**
   * If model has option
   */
  Model.prototype.isEmpty = function () {
    return this.option == null;
  };
  Model.prototype.restoreData = function () {};
  // Pending
  Model.prototype.clone = function () {
    var Ctor = this.constructor;
    return new Ctor((0,util.clone)(this.option));
  };
  // setReadOnly(properties): void {
  // clazzUtil.setReadOnly(this, properties);
  // }
  // If path is null/undefined, return null/undefined.
  Model.prototype.parsePath = function (path) {
    if (typeof path === 'string') {
      return path.split('.');
    }
    return path;
  };
  // Resolve path for parent. Perhaps useful when parent use a different property.
  // Default to be a identity resolver.
  // Can be modified to a different resolver.
  Model.prototype.resolveParentPath = function (path) {
    return path;
  };
  // FIXME:TS check whether put this method here
  Model.prototype.isAnimationEnabled = function () {
    if (!env["default"].node && this.option) {
      if (this.option.animation != null) {
        return !!this.option.animation;
      } else if (this.parentModel) {
        return this.parentModel.isAnimationEnabled();
      }
    }
  };
  Model.prototype._doGet = function (pathArr, parentModel) {
    var obj = this.option;
    if (!pathArr) {
      return obj;
    }
    for (var i = 0; i < pathArr.length; i++) {
      // Ignore empty
      if (!pathArr[i]) {
        continue;
      }
      // obj could be number/string/... (like 0)
      obj = obj && typeof obj === 'object' ? obj[pathArr[i]] : null;
      if (obj == null) {
        break;
      }
    }
    if (obj == null && parentModel) {
      obj = parentModel._doGet(this.resolveParentPath(pathArr), parentModel.parentModel);
    }
    return obj;
  };
  return Model;
}();
;
// Enable Model.extend.
(0,clazz.enableClassExtend)(Model_Model);
(0,clazz.enableClassCheck)(Model_Model);
(0,util.mixin)(Model_Model, lineStyle.LineStyleMixin);
(0,util.mixin)(Model_Model, itemStyle.ItemStyleMixin);
(0,util.mixin)(Model_Model, areaStyle_AreaStyleMixin);
(0,util.mixin)(Model_Model, textStyle);
/* export default */ var model_Model = (Model_Model);

}),
75476: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var _util_model_js__rspack_import_1 = __webpack_require__(67698);
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



var QUERY_REG = /^(min|max)?(.+)$/;
// Key: mainType
// type FakeComponentsMap = HashMap<(MappingExistingItem & { subType: string })[]>;
/**
 * TERM EXPLANATIONS:
 * See `ECOption` and `ECUnitOption` in `src/util/types.ts`.
 */
var OptionManager = /** @class */function () {
  // timeline.notMerge is not supported in ec3. Firstly there is rearly
  // case that notMerge is needed. Secondly supporting 'notMerge' requires
  // rawOption cloned and backuped when timeline changed, which does no
  // good to performance. What's more, that both timeline and setOption
  // method supply 'notMerge' brings complex and some problems.
  // Consider this case:
  // (step1) chart.setOption({timeline: {notMerge: false}, ...}, false);
  // (step2) chart.setOption({timeline: {notMerge: true}, ...}, false);
  function OptionManager(api) {
    this._timelineOptions = [];
    this._mediaList = [];
    /**
     * -1, means default.
     * empty means no media.
     */
    this._currentMediaIndices = [];
    this._api = api;
  }
  OptionManager.prototype.setOption = function (rawOption, optionPreprocessorFuncs, opt) {
    if (rawOption) {
      // That set dat primitive is dangerous if user reuse the data when setOption again.
      (0,zrender_lib_core_util_js__rspack_import_0.each)((0,_util_model_js__rspack_import_1.normalizeToArray)(rawOption.series), function (series) {
        series && series.data && (0,zrender_lib_core_util_js__rspack_import_0.isTypedArray)(series.data) && (0,zrender_lib_core_util_js__rspack_import_0.setAsPrimitive)(series.data);
      });
      (0,zrender_lib_core_util_js__rspack_import_0.each)((0,_util_model_js__rspack_import_1.normalizeToArray)(rawOption.dataset), function (dataset) {
        dataset && dataset.source && (0,zrender_lib_core_util_js__rspack_import_0.isTypedArray)(dataset.source) && (0,zrender_lib_core_util_js__rspack_import_0.setAsPrimitive)(dataset.source);
      });
    }
    // Caution: some series modify option data, if do not clone,
    // it should ensure that the repeat modify correctly
    // (create a new object when modify itself).
    rawOption = (0,zrender_lib_core_util_js__rspack_import_0.clone)(rawOption);
    // FIXME
    // If some property is set in timeline options or media option but
    // not set in baseOption, a warning should be given.
    var optionBackup = this._optionBackup;
    var newParsedOption = parseRawOption(rawOption, optionPreprocessorFuncs, !optionBackup);
    this._newBaseOption = newParsedOption.baseOption;
    // For setOption at second time (using merge mode);
    if (optionBackup) {
      // FIXME
      // the restore merge solution is essentially incorrect.
      // the mapping can not be 100% consistent with ecModel, which probably brings
      // potential bug!
      // The first merge is delayed, because in most cases, users do not call `setOption` twice.
      // let fakeCmptsMap = this._fakeCmptsMap;
      // if (!fakeCmptsMap) {
      //     fakeCmptsMap = this._fakeCmptsMap = createHashMap();
      //     mergeToBackupOption(fakeCmptsMap, null, optionBackup.baseOption, null);
      // }
      // mergeToBackupOption(
      //     fakeCmptsMap, optionBackup.baseOption, newParsedOption.baseOption, opt
      // );
      // For simplicity, timeline options and media options do not support merge,
      // that is, if you `setOption` twice and both has timeline options, the latter
      // timeline options will not be merged to the former, but just substitute them.
      if (newParsedOption.timelineOptions.length) {
        optionBackup.timelineOptions = newParsedOption.timelineOptions;
      }
      if (newParsedOption.mediaList.length) {
        optionBackup.mediaList = newParsedOption.mediaList;
      }
      if (newParsedOption.mediaDefault) {
        optionBackup.mediaDefault = newParsedOption.mediaDefault;
      }
    } else {
      this._optionBackup = newParsedOption;
    }
  };
  OptionManager.prototype.mountOption = function (isRecreate) {
    var optionBackup = this._optionBackup;
    this._timelineOptions = optionBackup.timelineOptions;
    this._mediaList = optionBackup.mediaList;
    this._mediaDefault = optionBackup.mediaDefault;
    this._currentMediaIndices = [];
    return (0,zrender_lib_core_util_js__rspack_import_0.clone)(isRecreate
    // this._optionBackup.baseOption, which is created at the first `setOption`
    // called, and is merged into every new option by inner method `mergeToBackupOption`
    // each time `setOption` called, can be only used in `isRecreate`, because
    // its reliability is under suspicion. In other cases option merge is
    // performed by `model.mergeOption`.
    ? optionBackup.baseOption : this._newBaseOption);
  };
  OptionManager.prototype.getTimelineOption = function (ecModel) {
    var option;
    var timelineOptions = this._timelineOptions;
    if (timelineOptions.length) {
      // getTimelineOption can only be called after ecModel inited,
      // so we can get currentIndex from timelineModel.
      var timelineModel = ecModel.getComponent('timeline');
      if (timelineModel) {
        option = (0,zrender_lib_core_util_js__rspack_import_0.clone)(
        // FIXME:TS as TimelineModel or quivlant interface
        timelineOptions[timelineModel.getCurrentIndex()]);
      }
    }
    return option;
  };
  OptionManager.prototype.getMediaOption = function (ecModel) {
    var ecWidth = this._api.getWidth();
    var ecHeight = this._api.getHeight();
    var mediaList = this._mediaList;
    var mediaDefault = this._mediaDefault;
    var indices = [];
    var result = [];
    // No media defined.
    if (!mediaList.length && !mediaDefault) {
      return result;
    }
    // Multi media may be applied, the latter defined media has higher priority.
    for (var i = 0, len = mediaList.length; i < len; i++) {
      if (applyMediaQuery(mediaList[i].query, ecWidth, ecHeight)) {
        indices.push(i);
      }
    }
    // FIXME
    // Whether mediaDefault should force users to provide? Otherwise
    // the change by media query can not be recorvered.
    if (!indices.length && mediaDefault) {
      indices = [-1];
    }
    if (indices.length && !indicesEquals(indices, this._currentMediaIndices)) {
      result = (0,zrender_lib_core_util_js__rspack_import_0.map)(indices, function (index) {
        return (0,zrender_lib_core_util_js__rspack_import_0.clone)(index === -1 ? mediaDefault.option : mediaList[index].option);
      });
    }
    // Otherwise return nothing.
    this._currentMediaIndices = indices;
    return result;
  };
  return OptionManager;
}();
/**
 * [RAW_OPTION_PATTERNS]
 * (Note: "series: []" represents all other props in `ECUnitOption`)
 *
 * (1) No prop "baseOption" declared:
 * Root option is used as "baseOption" (except prop "options" and "media").
 * ```js
 * option = {
 *     series: [],
 *     timeline: {},
 *     options: [],
 * };
 * option = {
 *     series: [],
 *     media: {},
 * };
 * option = {
 *     series: [],
 *     timeline: {},
 *     options: [],
 *     media: {},
 * }
 * ```
 *
 * (2) Prop "baseOption" declared:
 * If "baseOption" declared, `ECUnitOption` props can only be declared
 * inside "baseOption" except prop "timeline" (compat ec2).
 * ```js
 * option = {
 *     baseOption: {
 *         timeline: {},
 *         series: [],
 *     },
 *     options: []
 * };
 * option = {
 *     baseOption: {
 *         series: [],
 *     },
 *     media: []
 * };
 * option = {
 *     baseOption: {
 *         timeline: {},
 *         series: [],
 *     },
 *     options: []
 *     media: []
 * };
 * option = {
 *     // ec3 compat ec2: allow (only) `timeline` declared
 *     // outside baseOption. Keep this setting for compat.
 *     timeline: {},
 *     baseOption: {
 *         series: [],
 *     },
 *     options: [],
 *     media: []
 * };
 * ```
 */
function parseRawOption(
// `rawOption` May be modified
rawOption, optionPreprocessorFuncs, isNew) {
  var mediaList = [];
  var mediaDefault;
  var baseOption;
  var declaredBaseOption = rawOption.baseOption;
  // Compatible with ec2, [RAW_OPTION_PATTERNS] above.
  var timelineOnRoot = rawOption.timeline;
  var timelineOptionsOnRoot = rawOption.options;
  var mediaOnRoot = rawOption.media;
  var hasMedia = !!rawOption.media;
  var hasTimeline = !!(timelineOptionsOnRoot || timelineOnRoot || declaredBaseOption && declaredBaseOption.timeline);
  if (declaredBaseOption) {
    baseOption = declaredBaseOption;
    // For merge option.
    if (!baseOption.timeline) {
      baseOption.timeline = timelineOnRoot;
    }
  }
  // For convenience, enable to use the root option as the `baseOption`:
  // `{ ...normalOptionProps, media: [{ ... }, { ... }] }`
  else {
    if (hasTimeline || hasMedia) {
      rawOption.options = rawOption.media = null;
    }
    baseOption = rawOption;
  }
  if (hasMedia) {
    if ((0,zrender_lib_core_util_js__rspack_import_0.isArray)(mediaOnRoot)) {
      (0,zrender_lib_core_util_js__rspack_import_0.each)(mediaOnRoot, function (singleMedia) {
        if (false) {}
        if (singleMedia && singleMedia.option) {
          if (singleMedia.query) {
            mediaList.push(singleMedia);
          } else if (!mediaDefault) {
            // Use the first media default.
            mediaDefault = singleMedia;
          }
        }
      });
    } else {
      if (false) {}
    }
  }
  doPreprocess(baseOption);
  (0,zrender_lib_core_util_js__rspack_import_0.each)(timelineOptionsOnRoot, function (option) {
    return doPreprocess(option);
  });
  (0,zrender_lib_core_util_js__rspack_import_0.each)(mediaList, function (media) {
    return doPreprocess(media.option);
  });
  function doPreprocess(option) {
    (0,zrender_lib_core_util_js__rspack_import_0.each)(optionPreprocessorFuncs, function (preProcess) {
      preProcess(option, isNew);
    });
  }
  return {
    baseOption: baseOption,
    timelineOptions: timelineOptionsOnRoot || [],
    mediaDefault: mediaDefault,
    mediaList: mediaList
  };
}
/**
 * @see <http://www.w3.org/TR/css3-mediaqueries/#media1>
 * Support: width, height, aspectRatio
 * Can use max or min as prefix.
 */
function applyMediaQuery(query, ecWidth, ecHeight) {
  var realMap = {
    width: ecWidth,
    height: ecHeight,
    aspectratio: ecWidth / ecHeight // lower case for convenience.
  };
  var applicable = true;
  (0,zrender_lib_core_util_js__rspack_import_0.each)(query, function (value, attr) {
    var matched = attr.match(QUERY_REG);
    if (!matched || !matched[1] || !matched[2]) {
      return;
    }
    var operator = matched[1];
    var realAttr = matched[2].toLowerCase();
    if (!compare(realMap[realAttr], value, operator)) {
      applicable = false;
    }
  });
  return applicable;
}
function compare(real, expect, operator) {
  if (operator === 'min') {
    return real >= expect;
  } else if (operator === 'max') {
    return real <= expect;
  } else {
    // Equals
    return real === expect;
  }
}
function indicesEquals(indices1, indices2) {
  // indices is always order by asc and has only finite number.
  return indices1.join(',') === indices2.join(',');
}
/**
 * Consider case:
 * `chart.setOption(opt1);`
 * Then user do some interaction like dataZoom, dataView changing.
 * `chart.setOption(opt2);`
 * Then user press 'reset button' in toolbox.
 *
 * After doing that all of the interaction effects should be reset, the
 * chart should be the same as the result of invoke
 * `chart.setOption(opt1); chart.setOption(opt2);`.
 *
 * Although it is not able ensure that
 * `chart.setOption(opt1); chart.setOption(opt2);` is equivalents to
 * `chart.setOption(merge(opt1, opt2));` exactly,
 * this might be the only simple way to implement that feature.
 *
 * MEMO: We've considered some other approaches:
 * 1. Each model handles its self restoration but not uniform treatment.
 *     (Too complex in logic and error-prone)
 * 2. Use a shadow ecModel. (Performance expensive)
 *
 * FIXME: A possible solution:
 * Add a extra level of model for each component model. The inheritance chain would be:
 * ecModel <- componentModel <- componentActionModel <- dataItemModel
 * And all of the actions can only modify the `componentActionModel` rather than
 * `componentModel`. `setOption` will only modify the `ecModel` and `componentModel`.
 * When "resotre" action triggered, model from `componentActionModel` will be discarded
 * instead of recreating the "ecModel" from the "_optionBackup".
 */
// function mergeToBackupOption(
//     fakeCmptsMap: FakeComponentsMap,
//     // `tarOption` Can be null/undefined, means init
//     tarOption: ECUnitOption,
//     newOption: ECUnitOption,
//     // Can be null/undefined
//     opt: InnerSetOptionOpts
// ): void {
//     newOption = newOption || {} as ECUnitOption;
//     const notInit = !!tarOption;
//     each(newOption, function (newOptsInMainType, mainType) {
//         if (newOptsInMainType == null) {
//             return;
//         }
//         if (!ComponentModel.hasClass(mainType)) {
//             if (tarOption) {
//                 tarOption[mainType] = merge(tarOption[mainType], newOptsInMainType, true);
//             }
//         }
//         else {
//             const oldTarOptsInMainType = notInit ? normalizeToArray(tarOption[mainType]) : null;
//             const oldFakeCmptsInMainType = fakeCmptsMap.get(mainType) || [];
//             const resultTarOptsInMainType = notInit ? (tarOption[mainType] = [] as ComponentOption[]) : null;
//             const resultFakeCmptsInMainType = fakeCmptsMap.set(mainType, []);
//             const mappingResult = mappingToExists(
//                 oldFakeCmptsInMainType,
//                 normalizeToArray(newOptsInMainType),
//                 (opt && opt.replaceMergeMainTypeMap.get(mainType)) ? 'replaceMerge' : 'normalMerge'
//             );
//             setComponentTypeToKeyInfo(mappingResult, mainType, ComponentModel as ComponentModelConstructor);
//             each(mappingResult, function (resultItem, index) {
//                 // The same logic as `Global.ts#_mergeOption`.
//                 let fakeCmpt = resultItem.existing;
//                 const newOption = resultItem.newOption;
//                 const keyInfo = resultItem.keyInfo;
//                 let fakeCmptOpt;
//                 if (!newOption) {
//                     fakeCmptOpt = oldTarOptsInMainType[index];
//                 }
//                 else {
//                     if (fakeCmpt && fakeCmpt.subType === keyInfo.subType) {
//                         fakeCmpt.name = keyInfo.name;
//                         if (notInit) {
//                             fakeCmptOpt = merge(oldTarOptsInMainType[index], newOption, true);
//                         }
//                     }
//                     else {
//                         fakeCmpt = extend({}, keyInfo);
//                         if (notInit) {
//                             fakeCmptOpt = clone(newOption);
//                         }
//                     }
//                 }
//                 if (fakeCmpt) {
//                     notInit && resultTarOptsInMainType.push(fakeCmptOpt);
//                     resultFakeCmptsInMainType.push(fakeCmpt);
//                 }
//                 else {
//                     notInit && resultTarOptsInMainType.push(void 0);
//                     resultFakeCmptsInMainType.push(void 0);
//                 }
//             });
//         }
//     });
// }
/* export default */ __webpack_exports__["default"] = (OptionManager);

}),
32019: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SERIES_UNIVERSAL_TRANSITION_PROP: function() { return SERIES_UNIVERSAL_TRANSITION_PROP; }
});
/* import */ var tslib__rspack_import_2 = __webpack_require__(2492);
/* import */ var zrender_lib_core_util_js__rspack_import_6 = __webpack_require__(9774);
/* import */ var zrender_lib_core_env_js__rspack_import_8 = __webpack_require__(18311);
/* import */ var _util_model_js__rspack_import_0 = __webpack_require__(67698);
/* import */ var _Component_js__rspack_import_1 = __webpack_require__(53075);
/* import */ var _mixin_palette_js__rspack_import_9 = __webpack_require__(77885);
/* import */ var _model_mixin_dataFormat_js__rspack_import_10 = __webpack_require__(60731);
/* import */ var _util_layout_js__rspack_import_5 = __webpack_require__(88485);
/* import */ var _core_task_js__rspack_import_3 = __webpack_require__(93439);
/* import */ var _util_clazz_js__rspack_import_11 = __webpack_require__(72749);
/* import */ var _data_helper_sourceManager_js__rspack_import_4 = __webpack_require__(88404);
/* import */ var _component_tooltip_seriesFormatTooltip_js__rspack_import_7 = __webpack_require__(89091);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
function getSelectionKey(data, dataIndex) {
  return data.getName(dataIndex) || data.getId(dataIndex);
}
var SERIES_UNIVERSAL_TRANSITION_PROP = '__universalTransitionEnabled';
var SeriesModel = /** @class */function (_super) {
  (0,tslib__rspack_import_2.__extends)(SeriesModel, _super);
  function SeriesModel() {
    // [Caution]: Because this class or desecendants can be used as `XXX.extend(subProto)`,
    // the class members must not be initialized in constructor or declaration place.
    // Otherwise there is bad case:
    //   class A {xxx = 1;}
    //   enableClassExtend(A);
    //   class B extends A {}
    //   var C = B.extend({xxx: 5});
    //   var c = new C();
    //   console.log(c.xxx); // expect 5 but always 1.
    var _this = _super !== null && _super.apply(this, arguments) || this;
    // ---------------------------------------
    // Props about data selection
    // ---------------------------------------
    _this._selectedDataIndicesMap = {};
    return _this;
  }
  SeriesModel.prototype.init = function (option, parentModel, ecModel) {
    this.seriesIndex = this.componentIndex;
    this.dataTask = (0,_core_task_js__rspack_import_3.createTask)({
      count: dataTaskCount,
      reset: dataTaskReset
    });
    this.dataTask.context = {
      model: this
    };
    this.mergeDefaultAndTheme(option, ecModel);
    var sourceManager = inner(this).sourceManager = new _data_helper_sourceManager_js__rspack_import_4.SourceManager(this);
    sourceManager.prepareSource();
    var data = this.getInitialData(option, ecModel);
    wrapData(data, this);
    this.dataTask.context.data = data;
    if (false) {}
    inner(this).dataBeforeProcessed = data;
    // If we reverse the order (make data firstly, and then make
    // dataBeforeProcessed by cloneShallow), cloneShallow will
    // cause data.graph.data !== data when using
    // module:echarts/data/Graph or module:echarts/data/Tree.
    // See module:echarts/data/helper/linkSeriesData
    // Theoretically, it is unreasonable to call `seriesModel.getData()` in the model
    // init or merge stage, because the data can be restored. So we do not `restoreData`
    // and `setData` here, which forbids calling `seriesModel.getData()` in this stage.
    // Call `seriesModel.getRawData()` instead.
    // this.restoreData();
    autoSeriesName(this);
    this._initSelectedMapFromData(data);
  };
  /**
   * Util for merge default and theme to option
   */
  SeriesModel.prototype.mergeDefaultAndTheme = function (option, ecModel) {
    var layoutMode = (0,_util_layout_js__rspack_import_5.fetchLayoutMode)(this);
    var inputPositionParams = layoutMode ? (0,_util_layout_js__rspack_import_5.getLayoutParams)(option) : {};
    // Backward compat: using subType on theme.
    // But if name duplicate between series subType
    // (for example: parallel) add component mainType,
    // add suffix 'Series'.
    var themeSubType = this.subType;
    if (_Component_js__rspack_import_1["default"].hasClass(themeSubType)) {
      themeSubType += 'Series';
    }
    zrender_lib_core_util_js__rspack_import_6.merge(option, ecModel.getTheme().get(this.subType));
    zrender_lib_core_util_js__rspack_import_6.merge(option, this.getDefaultOption());
    // Default label emphasis `show`
    _util_model_js__rspack_import_0.defaultEmphasis(option, 'label', ['show']);
    this.fillDataTextStyle(option.data);
    if (layoutMode) {
      (0,_util_layout_js__rspack_import_5.mergeLayoutParam)(option, inputPositionParams, layoutMode);
    }
  };
  SeriesModel.prototype.mergeOption = function (newSeriesOption, ecModel) {
    // this.settingTask.dirty();
    newSeriesOption = zrender_lib_core_util_js__rspack_import_6.merge(this.option, newSeriesOption, true);
    this.fillDataTextStyle(newSeriesOption.data);
    var layoutMode = (0,_util_layout_js__rspack_import_5.fetchLayoutMode)(this);
    if (layoutMode) {
      (0,_util_layout_js__rspack_import_5.mergeLayoutParam)(this.option, newSeriesOption, layoutMode);
    }
    var sourceManager = inner(this).sourceManager;
    sourceManager.dirty();
    sourceManager.prepareSource();
    var data = this.getInitialData(newSeriesOption, ecModel);
    wrapData(data, this);
    this.dataTask.dirty();
    this.dataTask.context.data = data;
    inner(this).dataBeforeProcessed = data;
    autoSeriesName(this);
    this._initSelectedMapFromData(data);
  };
  SeriesModel.prototype.fillDataTextStyle = function (data) {
    // Default data label emphasis `show`
    // FIXME Tree structure data ?
    // FIXME Performance ?
    if (data && !zrender_lib_core_util_js__rspack_import_6.isTypedArray(data)) {
      var props = ['show'];
      for (var i = 0; i < data.length; i++) {
        if (data[i] && data[i].label) {
          _util_model_js__rspack_import_0.defaultEmphasis(data[i], 'label', props);
        }
      }
    }
  };
  /**
   * Init a data structure from data related option in series
   * Must be overridden.
   */
  SeriesModel.prototype.getInitialData = function (option, ecModel) {
    return;
  };
  /**
   * Append data to list
   */
  SeriesModel.prototype.appendData = function (params) {
    // FIXME ???
    // (1) If data from dataset, forbidden append.
    // (2) support append data of dataset.
    var data = this.getRawData();
    data.appendData(params.data);
  };
  /**
   * Consider some method like `filter`, `map` need make new data,
   * We should make sure that `seriesModel.getData()` get correct
   * data in the stream procedure. So we fetch data from upstream
   * each time `task.perform` called.
   */
  SeriesModel.prototype.getData = function (dataType) {
    var task = getCurrentTask(this);
    if (task) {
      var data = task.context.data;
      return dataType == null || !data.getLinkedData ? data : data.getLinkedData(dataType);
    } else {
      // When series is not alive (that may happen when click toolbox
      // restore or setOption with not merge mode), series data may
      // be still need to judge animation or something when graphic
      // elements want to know whether fade out.
      return inner(this).data;
    }
  };
  SeriesModel.prototype.getAllData = function () {
    var mainData = this.getData();
    return mainData && mainData.getLinkedDataAll ? mainData.getLinkedDataAll() : [{
      data: mainData
    }];
  };
  SeriesModel.prototype.setData = function (data) {
    var task = getCurrentTask(this);
    if (task) {
      var context = task.context;
      // Consider case: filter, data sample.
      // FIXME:TS never used, so comment it
      // if (context.data !== data && task.modifyOutputEnd) {
      //     task.setOutputEnd(data.count());
      // }
      context.outputData = data;
      // Caution: setData should update context.data,
      // Because getData may be called multiply in a
      // single stage and expect to get the data just
      // set. (For example, AxisProxy, x y both call
      // getData and setDate sequentially).
      // So the context.data should be fetched from
      // upstream each time when a stage starts to be
      // performed.
      if (task !== this.dataTask) {
        context.data = data;
      }
    }
    inner(this).data = data;
  };
  SeriesModel.prototype.getEncode = function () {
    var encode = this.get('encode', true);
    if (encode) {
      return zrender_lib_core_util_js__rspack_import_6.createHashMap(encode);
    }
  };
  SeriesModel.prototype.getSourceManager = function () {
    return inner(this).sourceManager;
  };
  SeriesModel.prototype.getSource = function () {
    return this.getSourceManager().getSource();
  };
  /**
   * Get data before processed
   */
  SeriesModel.prototype.getRawData = function () {
    return inner(this).dataBeforeProcessed;
  };
  SeriesModel.prototype.getColorBy = function () {
    var colorBy = this.get('colorBy');
    return colorBy || 'series';
  };
  SeriesModel.prototype.isColorBySeries = function () {
    return this.getColorBy() === 'series';
  };
  /**
   * Get base axis if has coordinate system and has axis.
   * By default use coordSys.getBaseAxis();
   * Can be overridden for some chart.
   * @return {type} description
   */
  SeriesModel.prototype.getBaseAxis = function () {
    var coordSys = this.coordinateSystem;
    // @ts-ignore
    return coordSys && coordSys.getBaseAxis && coordSys.getBaseAxis();
  };
  /**
   * Retrieve the index of nearest value in the view coordinate.
   * Data position is compared with each axis's dataToCoord.
   *
   * @param axisDim axis dimension
   * @param dim data dimension
   * @param value
   * @param [maxDistance=Infinity] The maximum distance in view coordinate space
   * @return If and only if multiple indices has
   *         the same value, they are put to the result.
   */
  SeriesModel.prototype.indicesOfNearest = function (axisDim, dim, value, maxDistance) {
    var data = this.getData();
    var coordSys = this.coordinateSystem;
    var axis = coordSys && coordSys.getAxis(axisDim);
    if (!coordSys || !axis) {
      return [];
    }
    var targetCoord = axis.dataToCoord(value);
    if (maxDistance == null) {
      maxDistance = Infinity;
    }
    var nearestIndices = [];
    var minDist = Infinity;
    var minDiff = -1;
    var nearestIndicesLen = 0;
    data.each(dim, function (dimValue, idx) {
      var dataCoord = axis.dataToCoord(dimValue);
      var diff = targetCoord - dataCoord;
      var dist = Math.abs(diff);
      if (dist <= maxDistance) {
        // When the `value` is at the middle of `this.get(dim, i)` and `this.get(dim, i+1)`,
        // we'd better not push both of them to `nearestIndices`, otherwise it is easy to
        // get more than one item in `nearestIndices` (more specifically, in `tooltip`).
        // So we choose the one that `diff >= 0` in this case.
        // But if `this.get(dim, i)` and `this.get(dim, j)` get the same value, both of them
        // should be push to `nearestIndices`.
        if (dist < minDist || dist === minDist && diff >= 0 && minDiff < 0) {
          minDist = dist;
          minDiff = diff;
          nearestIndicesLen = 0;
        }
        if (diff === minDiff) {
          nearestIndices[nearestIndicesLen++] = idx;
        }
      }
    });
    nearestIndices.length = nearestIndicesLen;
    return nearestIndices;
  };
  /**
   * Default tooltip formatter
   *
   * @param dataIndex
   * @param multipleSeries
   * @param dataType
   * @param renderMode valid values: 'html'(by default) and 'richText'.
   *        'html' is used for rendering tooltip in extra DOM form, and the result
   *        string is used as DOM HTML content.
   *        'richText' is used for rendering tooltip in rich text form, for those where
   *        DOM operation is not supported.
   * @return formatted tooltip with `html` and `markers`
   *        Notice: The override method can also return string
   */
  SeriesModel.prototype.formatTooltip = function (dataIndex, multipleSeries, dataType) {
    return (0,_component_tooltip_seriesFormatTooltip_js__rspack_import_7.defaultSeriesFormatTooltip)({
      series: this,
      dataIndex: dataIndex,
      multipleSeries: multipleSeries
    });
  };
  SeriesModel.prototype.isAnimationEnabled = function () {
    var ecModel = this.ecModel;
    // Disable animation if using echarts in node but not give ssr flag.
    // In ssr mode, renderToString will generate svg with css animation.
    if (zrender_lib_core_env_js__rspack_import_8["default"].node && !(ecModel && ecModel.ssr)) {
      return false;
    }
    var animationEnabled = this.getShallow('animation');
    if (animationEnabled) {
      if (this.getData().count() > this.getShallow('animationThreshold')) {
        animationEnabled = false;
      }
    }
    return !!animationEnabled;
  };
  SeriesModel.prototype.restoreData = function () {
    this.dataTask.dirty();
  };
  SeriesModel.prototype.getColorFromPalette = function (name, scope, requestColorNum) {
    var ecModel = this.ecModel;
    // PENDING
    var color = _mixin_palette_js__rspack_import_9.PaletteMixin.prototype.getColorFromPalette.call(this, name, scope, requestColorNum);
    if (!color) {
      color = ecModel.getColorFromPalette(name, scope, requestColorNum);
    }
    return color;
  };
  /**
   * Use `data.mapDimensionsAll(coordDim)` instead.
   * @deprecated
   */
  SeriesModel.prototype.coordDimToDataDim = function (coordDim) {
    return this.getRawData().mapDimensionsAll(coordDim);
  };
  /**
   * Get progressive rendering count each step
   */
  SeriesModel.prototype.getProgressive = function () {
    return this.get('progressive');
  };
  /**
   * Get progressive rendering count each step
   */
  SeriesModel.prototype.getProgressiveThreshold = function () {
    return this.get('progressiveThreshold');
  };
  // PENGING If selectedMode is null ?
  SeriesModel.prototype.select = function (innerDataIndices, dataType) {
    this._innerSelect(this.getData(dataType), innerDataIndices);
  };
  SeriesModel.prototype.unselect = function (innerDataIndices, dataType) {
    var selectedMap = this.option.selectedMap;
    if (!selectedMap) {
      return;
    }
    var selectedMode = this.option.selectedMode;
    var data = this.getData(dataType);
    if (selectedMode === 'series' || selectedMap === 'all') {
      this.option.selectedMap = {};
      this._selectedDataIndicesMap = {};
      return;
    }
    for (var i = 0; i < innerDataIndices.length; i++) {
      var dataIndex = innerDataIndices[i];
      var nameOrId = getSelectionKey(data, dataIndex);
      selectedMap[nameOrId] = false;
      this._selectedDataIndicesMap[nameOrId] = -1;
    }
  };
  SeriesModel.prototype.toggleSelect = function (innerDataIndices, dataType) {
    var tmpArr = [];
    for (var i = 0; i < innerDataIndices.length; i++) {
      tmpArr[0] = innerDataIndices[i];
      this.isSelected(innerDataIndices[i], dataType) ? this.unselect(tmpArr, dataType) : this.select(tmpArr, dataType);
    }
  };
  SeriesModel.prototype.getSelectedDataIndices = function () {
    if (this.option.selectedMap === 'all') {
      return [].slice.call(this.getData().getIndices());
    }
    var selectedDataIndicesMap = this._selectedDataIndicesMap;
    var nameOrIds = zrender_lib_core_util_js__rspack_import_6.keys(selectedDataIndicesMap);
    var dataIndices = [];
    for (var i = 0; i < nameOrIds.length; i++) {
      var dataIndex = selectedDataIndicesMap[nameOrIds[i]];
      if (dataIndex >= 0) {
        dataIndices.push(dataIndex);
      }
    }
    return dataIndices;
  };
  SeriesModel.prototype.isSelected = function (dataIndex, dataType) {
    var selectedMap = this.option.selectedMap;
    if (!selectedMap) {
      return false;
    }
    var data = this.getData(dataType);
    return (selectedMap === 'all' || selectedMap[getSelectionKey(data, dataIndex)]) && !data.getItemModel(dataIndex).get(['select', 'disabled']);
  };
  SeriesModel.prototype.isUniversalTransitionEnabled = function () {
    if (this[SERIES_UNIVERSAL_TRANSITION_PROP]) {
      return true;
    }
    var universalTransitionOpt = this.option.universalTransition;
    // Quick reject
    if (!universalTransitionOpt) {
      return false;
    }
    if (universalTransitionOpt === true) {
      return true;
    }
    // Can be simply 'universalTransition: true'
    return universalTransitionOpt && universalTransitionOpt.enabled;
  };
  SeriesModel.prototype._innerSelect = function (data, innerDataIndices) {
    var _a, _b;
    var option = this.option;
    var selectedMode = option.selectedMode;
    var len = innerDataIndices.length;
    if (!selectedMode || !len) {
      return;
    }
    if (selectedMode === 'series') {
      option.selectedMap = 'all';
    } else if (selectedMode === 'multiple') {
      if (!zrender_lib_core_util_js__rspack_import_6.isObject(option.selectedMap)) {
        option.selectedMap = {};
      }
      var selectedMap = option.selectedMap;
      for (var i = 0; i < len; i++) {
        var dataIndex = innerDataIndices[i];
        // TODO different types of data share same object.
        var nameOrId = getSelectionKey(data, dataIndex);
        selectedMap[nameOrId] = true;
        this._selectedDataIndicesMap[nameOrId] = data.getRawIndex(dataIndex);
      }
    } else if (selectedMode === 'single' || selectedMode === true) {
      var lastDataIndex = innerDataIndices[len - 1];
      var nameOrId = getSelectionKey(data, lastDataIndex);
      option.selectedMap = (_a = {}, _a[nameOrId] = true, _a);
      this._selectedDataIndicesMap = (_b = {}, _b[nameOrId] = data.getRawIndex(lastDataIndex), _b);
    }
  };
  SeriesModel.prototype._initSelectedMapFromData = function (data) {
    // Ignore select info in data if selectedMap exists.
    // NOTE It's only for legacy usage. edge data is not supported.
    if (this.option.selectedMap) {
      return;
    }
    var dataIndices = [];
    if (data.hasItemOption) {
      data.each(function (idx) {
        var rawItem = data.getRawDataItem(idx);
        if (rawItem && rawItem.selected) {
          dataIndices.push(idx);
        }
      });
    }
    if (dataIndices.length > 0) {
      this._innerSelect(data, dataIndices);
    }
  };
  // /**
  //  * @see {module:echarts/stream/Scheduler}
  //  */
  // abstract pipeTask: null
  SeriesModel.registerClass = function (clz) {
    return _Component_js__rspack_import_1["default"].registerClass(clz);
  };
  SeriesModel.protoInitialize = function () {
    var proto = SeriesModel.prototype;
    proto.type = 'series.__base__';
    proto.seriesIndex = 0;
    proto.ignoreStyleOnData = false;
    proto.hasSymbolVisual = false;
    proto.defaultSymbol = 'circle';
    // Make sure the values can be accessed!
    proto.visualStyleAccessPath = 'itemStyle';
    proto.visualDrawType = 'fill';
  }();
  return SeriesModel;
}(_Component_js__rspack_import_1["default"]);
zrender_lib_core_util_js__rspack_import_6.mixin(SeriesModel, _model_mixin_dataFormat_js__rspack_import_10.DataFormatMixin);
zrender_lib_core_util_js__rspack_import_6.mixin(SeriesModel, _mixin_palette_js__rspack_import_9.PaletteMixin);
(0,_util_clazz_js__rspack_import_11.mountExtend)(SeriesModel, _Component_js__rspack_import_1["default"]);
/**
 * MUST be called after `prepareSource` called
 * Here we need to make auto series, especially for auto legend. But we
 * do not modify series.name in option to avoid side effects.
 */
function autoSeriesName(seriesModel) {
  // User specified name has higher priority, otherwise it may cause
  // series can not be queried unexpectedly.
  var name = seriesModel.name;
  if (!_util_model_js__rspack_import_0.isNameSpecified(seriesModel)) {
    seriesModel.name = getSeriesAutoName(seriesModel) || name;
  }
}
function getSeriesAutoName(seriesModel) {
  var data = seriesModel.getRawData();
  var dataDims = data.mapDimensionsAll('seriesName');
  var nameArr = [];
  zrender_lib_core_util_js__rspack_import_6.each(dataDims, function (dataDim) {
    var dimInfo = data.getDimensionInfo(dataDim);
    dimInfo.displayName && nameArr.push(dimInfo.displayName);
  });
  return nameArr.join(' ');
}
function dataTaskCount(context) {
  return context.model.getRawData().count();
}
function dataTaskReset(context) {
  var seriesModel = context.model;
  seriesModel.setData(seriesModel.getRawData().cloneShallow());
  return dataTaskProgress;
}
function dataTaskProgress(param, context) {
  // Avoid repeat cloneShallow when data just created in reset.
  if (context.outputData && param.end > context.outputData.count()) {
    context.model.getRawData().cloneShallow(context.outputData);
  }
}
// TODO refactor
function wrapData(data, seriesModel) {
  zrender_lib_core_util_js__rspack_import_6.each(zrender_lib_core_util_js__rspack_import_6.concatArray(data.CHANGABLE_METHODS, data.DOWNSAMPLE_METHODS), function (methodName) {
    data.wrapMethod(methodName, zrender_lib_core_util_js__rspack_import_6.curry(onDataChange, seriesModel));
  });
}
function onDataChange(seriesModel, newList) {
  var task = getCurrentTask(seriesModel);
  if (task) {
    // Consider case: filter, selectRange
    task.setOutputEnd((newList || this).count());
  }
  return newList;
}
function getCurrentTask(seriesModel) {
  var scheduler = (seriesModel.ecModel || {}).scheduler;
  var pipeline = scheduler && scheduler.getPipeline(seriesModel.uid);
  if (pipeline) {
    // When pipline finished, the currrentTask keep the last
    // task (renderTask).
    var task = pipeline.currentTask;
    if (task) {
      var agentStubMap = task.agentStubMap;
      if (agentStubMap) {
        task = agentStubMap.get(seriesModel.uid);
      }
    }
    return task;
  }
}
/* export default */ __webpack_exports__["default"] = (SeriesModel);

}),
9754: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  concatInternalOptions: function() { return concatInternalOptions; },
  registerInternalOptionCreator: function() { return registerInternalOptionCreator; }
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


var internalOptionCreatorMap = (0,zrender_lib_core_util_js__rspack_import_0.createHashMap)();
function registerInternalOptionCreator(mainType, creator) {
  (0,zrender_lib_core_util_js__rspack_import_0.assert)(internalOptionCreatorMap.get(mainType) == null && creator);
  internalOptionCreatorMap.set(mainType, creator);
}
function concatInternalOptions(ecModel, mainType, newCmptOptionList) {
  var internalOptionCreator = internalOptionCreatorMap.get(mainType);
  if (!internalOptionCreator) {
    return newCmptOptionList;
  }
  var internalOptions = internalOptionCreator(ecModel);
  if (!internalOptions) {
    return newCmptOptionList;
  }
  if (false) { var i }
  return newCmptOptionList.concat(internalOptions);
}

}),
60731: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DataFormatMixin: function() { return DataFormatMixin; },
  normalizeTooltipFormatResult: function() { return normalizeTooltipFormatResult; }
});
/* import */ var zrender_lib_core_util_js__rspack_import_0 = __webpack_require__(9774);
/* import */ var _data_helper_dataProvider_js__rspack_import_2 = __webpack_require__(10403);
/* import */ var _util_format_js__rspack_import_1 = __webpack_require__(10236);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/




var DIMENSION_LABEL_REG = /\{@(.+?)\}/g;
var DataFormatMixin = /** @class */function () {
  function DataFormatMixin() {}
  /**
   * Get params for formatter
   */
  DataFormatMixin.prototype.getDataParams = function (dataIndex, dataType) {
    var data = this.getData(dataType);
    var rawValue = this.getRawValue(dataIndex, dataType);
    var rawDataIndex = data.getRawIndex(dataIndex);
    var name = data.getName(dataIndex);
    var itemOpt = data.getRawDataItem(dataIndex);
    var style = data.getItemVisual(dataIndex, 'style');
    var color = style && style[data.getItemVisual(dataIndex, 'drawType') || 'fill'];
    var borderColor = style && style.stroke;
    var mainType = this.mainType;
    var isSeries = mainType === 'series';
    var userOutput = data.userOutput && data.userOutput.get();
    return {
      componentType: mainType,
      componentSubType: this.subType,
      componentIndex: this.componentIndex,
      seriesType: isSeries ? this.subType : null,
      seriesIndex: this.seriesIndex,
      seriesId: isSeries ? this.id : null,
      seriesName: isSeries ? this.name : null,
      name: name,
      dataIndex: rawDataIndex,
      data: itemOpt,
      dataType: dataType,
      value: rawValue,
      color: color,
      borderColor: borderColor,
      dimensionNames: userOutput ? userOutput.fullDimensions : null,
      encode: userOutput ? userOutput.encode : null,
      // Param name list for mapping `a`, `b`, `c`, `d`, `e`
      $vars: ['seriesName', 'name', 'value']
    };
  };
  /**
   * Format label
   * @param dataIndex
   * @param status 'normal' by default
   * @param dataType
   * @param labelDimIndex Only used in some chart that
   *        use formatter in different dimensions, like radar.
   * @param formatter Formatter given outside.
   * @return return null/undefined if no formatter
   */
  DataFormatMixin.prototype.getFormattedLabel = function (dataIndex, status, dataType, labelDimIndex, formatter, extendParams) {
    status = status || 'normal';
    var data = this.getData(dataType);
    var params = this.getDataParams(dataIndex, dataType);
    if (extendParams) {
      params.value = extendParams.interpolatedValue;
    }
    if (labelDimIndex != null && zrender_lib_core_util_js__rspack_import_0.isArray(params.value)) {
      params.value = params.value[labelDimIndex];
    }
    if (!formatter) {
      var itemModel = data.getItemModel(dataIndex);
      // @ts-ignore
      formatter = itemModel.get(status === 'normal' ? ['label', 'formatter'] : [status, 'label', 'formatter']);
    }
    if (zrender_lib_core_util_js__rspack_import_0.isFunction(formatter)) {
      params.status = status;
      params.dimensionIndex = labelDimIndex;
      return formatter(params);
    } else if (zrender_lib_core_util_js__rspack_import_0.isString(formatter)) {
      var str = (0,_util_format_js__rspack_import_1.formatTpl)(formatter, params);
      // Support 'aaa{@[3]}bbb{@product}ccc'.
      // Do not support '}' in dim name util have to.
      return str.replace(DIMENSION_LABEL_REG, function (origin, dimStr) {
        var len = dimStr.length;
        var dimLoose = dimStr;
        if (dimLoose.charAt(0) === '[' && dimLoose.charAt(len - 1) === ']') {
          dimLoose = +dimLoose.slice(1, len - 1); // Also support: '[]' => 0
          if (false) {}
        }
        var val = (0,_data_helper_dataProvider_js__rspack_import_2.retrieveRawValue)(data, dataIndex, dimLoose);
        if (extendParams && zrender_lib_core_util_js__rspack_import_0.isArray(extendParams.interpolatedValue)) {
          var dimIndex = data.getDimensionIndex(dimLoose);
          if (dimIndex >= 0) {
            val = extendParams.interpolatedValue[dimIndex];
          }
        }
        return val != null ? val + '' : '';
      });
    }
  };
  /**
   * Get raw value in option
   */
  DataFormatMixin.prototype.getRawValue = function (idx, dataType) {
    return (0,_data_helper_dataProvider_js__rspack_import_2.retrieveRawValue)(this.getData(dataType), idx);
  };
  /**
   * Should be implemented.
   * @param {number} dataIndex
   * @param {boolean} [multipleSeries=false]
   * @param {string} [dataType]
   */
  DataFormatMixin.prototype.formatTooltip = function (dataIndex, multipleSeries, dataType) {
    // Empty function
    return;
  };
  return DataFormatMixin;
}();

;
// PENDING: previously we accept this type when calling `formatTooltip`,
// but guess little chance has been used outside. Do we need to backward
// compat it?
// type TooltipFormatResultLegacyObject = {
//     // `html` means the markup language text, either in 'html' or 'richText'.
//     // The name `html` is not appropriate because in 'richText' it is not a HTML
//     // string. But still support it for backward compatibility.
//     html: string;
//     markers: Dictionary<ColorString>;
// };
/**
 * For backward compat, normalize the return from `formatTooltip`.
 */
function normalizeTooltipFormatResult(result) {
  var markupText;
  // let markers: Dictionary<ColorString>;
  var markupFragment;
  if (zrender_lib_core_util_js__rspack_import_0.isObject(result)) {
    if (result.type) {
      markupFragment = result;
    } else {
      if (false) {}
    }
    // else {
    //     markupText = (result as TooltipFormatResultLegacyObject).html;
    //     markers = (result as TooltipFormatResultLegacyObject).markers;
    //     if (markersExisting) {
    //         markers = zrUtil.merge(markersExisting, markers);
    //     }
    // }
  } else {
    markupText = result;
  }
  return {
    text: markupText,
    // markers: markers || markersExisting,
    frag: markupFragment
  };
}

}),
70538: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ITEM_STYLE_KEY_MAP: function() { return ITEM_STYLE_KEY_MAP; },
  ItemStyleMixin: function() { return ItemStyleMixin; }
});
/* import */ var _makeStyleMapper_js__rspack_import_0 = __webpack_require__(45240);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

var ITEM_STYLE_KEY_MAP = [['fill', 'color'], ['stroke', 'borderColor'], ['lineWidth', 'borderWidth'], ['opacity'], ['shadowBlur'], ['shadowOffsetX'], ['shadowOffsetY'], ['shadowColor'], ['lineDash', 'borderType'], ['lineDashOffset', 'borderDashOffset'], ['lineCap', 'borderCap'], ['lineJoin', 'borderJoin'], ['miterLimit', 'borderMiterLimit']
// Option decal is in `DecalObject` but style.decal is in `PatternObject`.
// So do not transfer decal directly.
];
var getItemStyle = (0,_makeStyleMapper_js__rspack_import_0["default"])(ITEM_STYLE_KEY_MAP);
var ItemStyleMixin = /** @class */function () {
  function ItemStyleMixin() {}
  ItemStyleMixin.prototype.getItemStyle = function (excludes, includes) {
    return getItemStyle(this, excludes, includes);
  };
  return ItemStyleMixin;
}();


}),
56709: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  LINE_STYLE_KEY_MAP: function() { return LINE_STYLE_KEY_MAP; },
  LineStyleMixin: function() { return LineStyleMixin; }
});
/* import */ var _makeStyleMapper_js__rspack_import_0 = __webpack_require__(45240);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

var LINE_STYLE_KEY_MAP = [['lineWidth', 'width'], ['stroke', 'color'], ['opacity'], ['shadowBlur'], ['shadowOffsetX'], ['shadowOffsetY'], ['shadowColor'], ['lineDash', 'type'], ['lineDashOffset', 'dashOffset'], ['lineCap', 'cap'], ['lineJoin', 'join'], ['miterLimit']
// Option decal is in `DecalObject` but style.decal is in `PatternObject`.
// So do not transfer decal directly.
];
var getLineStyle = (0,_makeStyleMapper_js__rspack_import_0["default"])(LINE_STYLE_KEY_MAP);
var LineStyleMixin = /** @class */function () {
  function LineStyleMixin() {}
  LineStyleMixin.prototype.getLineStyle = function (excludes) {
    return getLineStyle(this, excludes);
  };
  return LineStyleMixin;
}();
;


}),
45240: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return makeStyleMapper; }
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
// TODO Parse shadow style
// TODO Only shallow path support

function makeStyleMapper(properties, ignoreParent) {
  // Normalize
  for (var i = 0; i < properties.length; i++) {
    if (!properties[i][1]) {
      properties[i][1] = properties[i][0];
    }
  }
  ignoreParent = ignoreParent || false;
  return function (model, excludes, includes) {
    var style = {};
    for (var i = 0; i < properties.length; i++) {
      var propName = properties[i][1];
      if (excludes && zrender_lib_core_util_js__rspack_import_0.indexOf(excludes, propName) >= 0 || includes && zrender_lib_core_util_js__rspack_import_0.indexOf(includes, propName) < 0) {
        continue;
      }
      var val = model.getShallow(propName, ignoreParent);
      if (val != null) {
        style[properties[i][0]] = val;
      }
    }
    // TODO Text or image?
    return style;
  };
}

}),
77885: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PaletteMixin: function() { return PaletteMixin; },
  getDecalFromPalette: function() { return getDecalFromPalette; }
});
/* import */ var _util_model_js__rspack_import_0 = __webpack_require__(67698);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

var innerColor = (0,_util_model_js__rspack_import_0.makeInner)();
var innerDecal = (0,_util_model_js__rspack_import_0.makeInner)();
var PaletteMixin = /** @class */function () {
  function PaletteMixin() {}
  PaletteMixin.prototype.getColorFromPalette = function (name, scope, requestNum) {
    var defaultPalette = (0,_util_model_js__rspack_import_0.normalizeToArray)(this.get('color', true));
    var layeredPalette = this.get('colorLayer', true);
    return getFromPalette(this, innerColor, defaultPalette, layeredPalette, name, scope, requestNum);
  };
  PaletteMixin.prototype.clearColorPalette = function () {
    clearPalette(this, innerColor);
  };
  return PaletteMixin;
}();
function getDecalFromPalette(ecModel, name, scope, requestNum) {
  var defaultDecals = (0,_util_model_js__rspack_import_0.normalizeToArray)(ecModel.get(['aria', 'decal', 'decals']));
  return getFromPalette(ecModel, innerDecal, defaultDecals, null, name, scope, requestNum);
}
function getNearestPalette(palettes, requestColorNum) {
  var paletteNum = palettes.length;
  // TODO palettes must be in order
  for (var i = 0; i < paletteNum; i++) {
    if (palettes[i].length > requestColorNum) {
      return palettes[i];
    }
  }
  return palettes[paletteNum - 1];
}
/**
 * @param name MUST NOT be null/undefined. Otherwise call this function
 *             twise with the same parameters will get different result.
 * @param scope default this.
 * @return Can be null/undefined
 */
function getFromPalette(that, inner, defaultPalette, layeredPalette, name, scope, requestNum) {
  scope = scope || that;
  var scopeFields = inner(scope);
  var paletteIdx = scopeFields.paletteIdx || 0;
  var paletteNameMap = scopeFields.paletteNameMap = scopeFields.paletteNameMap || {};
  // Use `hasOwnProperty` to avoid conflict with Object.prototype.
  if (paletteNameMap.hasOwnProperty(name)) {
    return paletteNameMap[name];
  }
  var palette = requestNum == null || !layeredPalette ? defaultPalette : getNearestPalette(layeredPalette, requestNum);
  // In case can't find in layered color palette.
  palette = palette || defaultPalette;
  if (!palette || !palette.length) {
    return;
  }
  var pickedPaletteItem = palette[paletteIdx];
  if (name) {
    paletteNameMap[name] = pickedPaletteItem;
  }
  scopeFields.paletteIdx = (paletteIdx + 1) % palette.length;
  return pickedPaletteItem;
}
function clearPalette(that, inner) {
  inner(that).paletteIdx = 0;
  inner(that).paletteNameMap = {};
}


}),
20658: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getCoordSysInfoBySeries: function() { return getCoordSysInfoBySeries; }
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
/**
 * Helper for model references.
 * There are many manners to refer axis/coordSys.
 */
// TODO
// merge relevant logic to this file?
// check: "modelHelper" of tooltip and "BrushTargetManager".


/**
 * @class
 * For example:
 * {
 *     coordSysName: 'cartesian2d',
 *     coordSysDims: ['x', 'y', ...],
 *     axisMap: HashMap({
 *         x: xAxisModel,
 *         y: yAxisModel
 *     }),
 *     categoryAxisMap: HashMap({
 *         x: xAxisModel,
 *         y: undefined
 *     }),
 *     // The index of the first category axis in `coordSysDims`.
 *     // `null/undefined` means no category axis exists.
 *     firstCategoryDimIndex: 1,
 *     // To replace user specified encode.
 * }
 */
var CoordSysInfo = /** @class */function () {
  function CoordSysInfo(coordSysName) {
    this.coordSysDims = [];
    this.axisMap = (0,zrender_lib_core_util_js__rspack_import_0.createHashMap)();
    this.categoryAxisMap = (0,zrender_lib_core_util_js__rspack_import_0.createHashMap)();
    this.coordSysName = coordSysName;
  }
  return CoordSysInfo;
}();
function getCoordSysInfoBySeries(seriesModel) {
  var coordSysName = seriesModel.get('coordinateSystem');
  var result = new CoordSysInfo(coordSysName);
  var fetch = fetchers[coordSysName];
  if (fetch) {
    fetch(seriesModel, result, result.axisMap, result.categoryAxisMap);
    return result;
  }
}
// TODO: refactor them to static member of each coord sys, rather than hard code here.
var fetchers = {
  cartesian2d: function (seriesModel, result, axisMap, categoryAxisMap) {
    var xAxisModel = seriesModel.getReferringComponents('xAxis', _util_model_js__rspack_import_1.SINGLE_REFERRING).models[0];
    var yAxisModel = seriesModel.getReferringComponents('yAxis', _util_model_js__rspack_import_1.SINGLE_REFERRING).models[0];
    if (false) {}
    result.coordSysDims = ['x', 'y'];
    axisMap.set('x', xAxisModel);
    axisMap.set('y', yAxisModel);
    if (isCategory(xAxisModel)) {
      categoryAxisMap.set('x', xAxisModel);
      result.firstCategoryDimIndex = 0;
    }
    if (isCategory(yAxisModel)) {
      categoryAxisMap.set('y', yAxisModel);
      result.firstCategoryDimIndex == null && (result.firstCategoryDimIndex = 1);
    }
  },
  singleAxis: function (seriesModel, result, axisMap, categoryAxisMap) {
    var singleAxisModel = seriesModel.getReferringComponents('singleAxis', _util_model_js__rspack_import_1.SINGLE_REFERRING).models[0];
    if (false) {}
    result.coordSysDims = ['single'];
    axisMap.set('single', singleAxisModel);
    if (isCategory(singleAxisModel)) {
      categoryAxisMap.set('single', singleAxisModel);
      result.firstCategoryDimIndex = 0;
    }
  },
  polar: function (seriesModel, result, axisMap, categoryAxisMap) {
    var polarModel = seriesModel.getReferringComponents('polar', _util_model_js__rspack_import_1.SINGLE_REFERRING).models[0];
    var radiusAxisModel = polarModel.findAxisModel('radiusAxis');
    var angleAxisModel = polarModel.findAxisModel('angleAxis');
    if (false) {}
    result.coordSysDims = ['radius', 'angle'];
    axisMap.set('radius', radiusAxisModel);
    axisMap.set('angle', angleAxisModel);
    if (isCategory(radiusAxisModel)) {
      categoryAxisMap.set('radius', radiusAxisModel);
      result.firstCategoryDimIndex = 0;
    }
    if (isCategory(angleAxisModel)) {
      categoryAxisMap.set('angle', angleAxisModel);
      result.firstCategoryDimIndex == null && (result.firstCategoryDimIndex = 1);
    }
  },
  geo: function (seriesModel, result, axisMap, categoryAxisMap) {
    result.coordSysDims = ['lng', 'lat'];
  },
  parallel: function (seriesModel, result, axisMap, categoryAxisMap) {
    var ecModel = seriesModel.ecModel;
    var parallelModel = ecModel.getComponent('parallel', seriesModel.get('parallelIndex'));
    var coordSysDims = result.coordSysDims = parallelModel.dimensions.slice();
    (0,zrender_lib_core_util_js__rspack_import_0.each)(parallelModel.parallelAxisIndex, function (axisIndex, index) {
      var axisModel = ecModel.getComponent('parallelAxis', axisIndex);
      var axisDim = coordSysDims[index];
      axisMap.set(axisDim, axisModel);
      if (isCategory(axisModel)) {
        categoryAxisMap.set(axisDim, axisModel);
        if (result.firstCategoryDimIndex == null) {
          result.firstCategoryDimIndex = index;
        }
      }
    });
  },
  matrix: function (seriesModel, result, axisMap, categoryAxisMap) {
    var matrixModel = seriesModel.getReferringComponents('matrix', _util_model_js__rspack_import_1.SINGLE_REFERRING).models[0];
    if (false) {}
    result.coordSysDims = ['x', 'y'];
    var xModel = matrixModel.getDimensionModel('x');
    var yModel = matrixModel.getDimensionModel('y');
    axisMap.set('x', xModel);
    axisMap.set('y', yModel);
    categoryAxisMap.set('x', xModel);
    categoryAxisMap.set('y', yModel);
  }
};
function isCategory(axisModel) {
  return axisModel.get('type') === 'category';
}

}),
38906: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ globalBackwardCompat; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(9774);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js
var model = __webpack_require__(67698);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/preprocessor/helper/compatStyle.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
var isObject = util.isObject;
var POSSIBLE_STYLES = ['areaStyle', 'lineStyle', 'nodeStyle', 'linkStyle', 'chordStyle', 'label', 'labelLine'];
function compatEC2ItemStyle(opt) {
  var itemStyleOpt = opt && opt.itemStyle;
  if (!itemStyleOpt) {
    return;
  }
  for (var i = 0, len = POSSIBLE_STYLES.length; i < len; i++) {
    var styleName = POSSIBLE_STYLES[i];
    var normalItemStyleOpt = itemStyleOpt.normal;
    var emphasisItemStyleOpt = itemStyleOpt.emphasis;
    if (normalItemStyleOpt && normalItemStyleOpt[styleName]) {
      if (false) {}
      opt[styleName] = opt[styleName] || {};
      if (!opt[styleName].normal) {
        opt[styleName].normal = normalItemStyleOpt[styleName];
      } else {
        util.merge(opt[styleName].normal, normalItemStyleOpt[styleName]);
      }
      normalItemStyleOpt[styleName] = null;
    }
    if (emphasisItemStyleOpt && emphasisItemStyleOpt[styleName]) {
      if (false) {}
      opt[styleName] = opt[styleName] || {};
      if (!opt[styleName].emphasis) {
        opt[styleName].emphasis = emphasisItemStyleOpt[styleName];
      } else {
        util.merge(opt[styleName].emphasis, emphasisItemStyleOpt[styleName]);
      }
      emphasisItemStyleOpt[styleName] = null;
    }
  }
}
function convertNormalEmphasis(opt, optType, useExtend) {
  if (opt && opt[optType] && (opt[optType].normal || opt[optType].emphasis)) {
    var normalOpt = opt[optType].normal;
    var emphasisOpt = opt[optType].emphasis;
    if (normalOpt) {
      if (false) {}
      // Timeline controlStyle has other properties besides normal and emphasis
      if (useExtend) {
        opt[optType].normal = opt[optType].emphasis = null;
        util.defaults(opt[optType], normalOpt);
      } else {
        opt[optType] = normalOpt;
      }
    }
    if (emphasisOpt) {
      if (false) {}
      opt.emphasis = opt.emphasis || {};
      opt.emphasis[optType] = emphasisOpt;
      // Also compat the case user mix the style and focus together in ec3 style
      // for example: { itemStyle: { normal: {}, emphasis: {focus, shadowBlur} } }
      if (emphasisOpt.focus) {
        opt.emphasis.focus = emphasisOpt.focus;
      }
      if (emphasisOpt.blurScope) {
        opt.emphasis.blurScope = emphasisOpt.blurScope;
      }
    }
  }
}
function removeEC3NormalStatus(opt) {
  convertNormalEmphasis(opt, 'itemStyle');
  convertNormalEmphasis(opt, 'lineStyle');
  convertNormalEmphasis(opt, 'areaStyle');
  convertNormalEmphasis(opt, 'label');
  convertNormalEmphasis(opt, 'labelLine');
  // treemap
  convertNormalEmphasis(opt, 'upperLabel');
  // graph
  convertNormalEmphasis(opt, 'edgeLabel');
}
function compatTextStyle(opt, propName) {
  // Check whether is not object (string\null\undefined ...)
  var labelOptSingle = isObject(opt) && opt[propName];
  var textStyle = isObject(labelOptSingle) && labelOptSingle.textStyle;
  if (textStyle) {
    if (false) {}
    for (var i = 0, len = model.TEXT_STYLE_OPTIONS.length; i < len; i++) {
      var textPropName = model.TEXT_STYLE_OPTIONS[i];
      if (textStyle.hasOwnProperty(textPropName)) {
        labelOptSingle[textPropName] = textStyle[textPropName];
      }
    }
  }
}
function compatEC3CommonStyles(opt) {
  if (opt) {
    removeEC3NormalStatus(opt);
    compatTextStyle(opt, 'label');
    opt.emphasis && compatTextStyle(opt.emphasis, 'label');
  }
}
function processSeries(seriesOpt) {
  if (!isObject(seriesOpt)) {
    return;
  }
  compatEC2ItemStyle(seriesOpt);
  removeEC3NormalStatus(seriesOpt);
  compatTextStyle(seriesOpt, 'label');
  // treemap
  compatTextStyle(seriesOpt, 'upperLabel');
  // graph
  compatTextStyle(seriesOpt, 'edgeLabel');
  if (seriesOpt.emphasis) {
    compatTextStyle(seriesOpt.emphasis, 'label');
    // treemap
    compatTextStyle(seriesOpt.emphasis, 'upperLabel');
    // graph
    compatTextStyle(seriesOpt.emphasis, 'edgeLabel');
  }
  var markPoint = seriesOpt.markPoint;
  if (markPoint) {
    compatEC2ItemStyle(markPoint);
    compatEC3CommonStyles(markPoint);
  }
  var markLine = seriesOpt.markLine;
  if (markLine) {
    compatEC2ItemStyle(markLine);
    compatEC3CommonStyles(markLine);
  }
  var markArea = seriesOpt.markArea;
  if (markArea) {
    compatEC3CommonStyles(markArea);
  }
  var data = seriesOpt.data;
  // Break with ec3: if `setOption` again, there may be no `type` in option,
  // then the backward compat based on option type will not be performed.
  if (seriesOpt.type === 'graph') {
    data = data || seriesOpt.nodes;
    var edgeData = seriesOpt.links || seriesOpt.edges;
    if (edgeData && !util.isTypedArray(edgeData)) {
      for (var i = 0; i < edgeData.length; i++) {
        compatEC3CommonStyles(edgeData[i]);
      }
    }
    util.each(seriesOpt.categories, function (opt) {
      removeEC3NormalStatus(opt);
    });
  }
  if (data && !util.isTypedArray(data)) {
    for (var i = 0; i < data.length; i++) {
      compatEC3CommonStyles(data[i]);
    }
  }
  // mark point data
  markPoint = seriesOpt.markPoint;
  if (markPoint && markPoint.data) {
    var mpData = markPoint.data;
    for (var i = 0; i < mpData.length; i++) {
      compatEC3CommonStyles(mpData[i]);
    }
  }
  // mark line data
  markLine = seriesOpt.markLine;
  if (markLine && markLine.data) {
    var mlData = markLine.data;
    for (var i = 0; i < mlData.length; i++) {
      if (util.isArray(mlData[i])) {
        compatEC3CommonStyles(mlData[i][0]);
        compatEC3CommonStyles(mlData[i][1]);
      } else {
        compatEC3CommonStyles(mlData[i]);
      }
    }
  }
  // Series
  if (seriesOpt.type === 'gauge') {
    compatTextStyle(seriesOpt, 'axisLabel');
    compatTextStyle(seriesOpt, 'title');
    compatTextStyle(seriesOpt, 'detail');
  } else if (seriesOpt.type === 'treemap') {
    convertNormalEmphasis(seriesOpt.breadcrumb, 'itemStyle');
    util.each(seriesOpt.levels, function (opt) {
      removeEC3NormalStatus(opt);
    });
  } else if (seriesOpt.type === 'tree') {
    removeEC3NormalStatus(seriesOpt.leaves);
  }
  // sunburst starts from ec4, so it does not need to compat levels.
}
function toArr(o) {
  return util.isArray(o) ? o : o ? [o] : [];
}
function toObj(o) {
  return (util.isArray(o) ? o[0] : o) || {};
}
function globalCompatStyle(option, isTheme) {
  each(toArr(option.series), function (seriesOpt) {
    isObject(seriesOpt) && processSeries(seriesOpt);
  });
  var axes = ['xAxis', 'yAxis', 'radiusAxis', 'angleAxis', 'singleAxis', 'parallelAxis', 'radar'];
  isTheme && axes.push('valueAxis', 'categoryAxis', 'logAxis', 'timeAxis');
  each(axes, function (axisName) {
    each(toArr(option[axisName]), function (axisOpt) {
      if (axisOpt) {
        compatTextStyle(axisOpt, 'axisLabel');
        compatTextStyle(axisOpt.axisPointer, 'label');
      }
    });
  });
  each(toArr(option.parallel), function (parallelOpt) {
    var parallelAxisDefault = parallelOpt && parallelOpt.parallelAxisDefault;
    compatTextStyle(parallelAxisDefault, 'axisLabel');
    compatTextStyle(parallelAxisDefault && parallelAxisDefault.axisPointer, 'label');
  });
  each(toArr(option.calendar), function (calendarOpt) {
    convertNormalEmphasis(calendarOpt, 'itemStyle');
    compatTextStyle(calendarOpt, 'dayLabel');
    compatTextStyle(calendarOpt, 'monthLabel');
    compatTextStyle(calendarOpt, 'yearLabel');
  });
  // radar.name.textStyle
  each(toArr(option.radar), function (radarOpt) {
    compatTextStyle(radarOpt, 'name');
    // Use axisName instead of name because component has name property
    if (radarOpt.name && radarOpt.axisName == null) {
      radarOpt.axisName = radarOpt.name;
      delete radarOpt.name;
      if (false) {}
    }
    if (radarOpt.nameGap != null && radarOpt.axisNameGap == null) {
      radarOpt.axisNameGap = radarOpt.nameGap;
      delete radarOpt.nameGap;
      if (false) {}
    }
    if (false) {}
  });
  each(toArr(option.geo), function (geoOpt) {
    if (isObject(geoOpt)) {
      compatEC3CommonStyles(geoOpt);
      each(toArr(geoOpt.regions), function (regionObj) {
        compatEC3CommonStyles(regionObj);
      });
    }
  });
  each(toArr(option.timeline), function (timelineOpt) {
    compatEC3CommonStyles(timelineOpt);
    convertNormalEmphasis(timelineOpt, 'label');
    convertNormalEmphasis(timelineOpt, 'itemStyle');
    convertNormalEmphasis(timelineOpt, 'controlStyle', true);
    var data = timelineOpt.data;
    util.isArray(data) && util.each(data, function (item) {
      if (util.isObject(item)) {
        convertNormalEmphasis(item, 'label');
        convertNormalEmphasis(item, 'itemStyle');
      }
    });
  });
  each(toArr(option.toolbox), function (toolboxOpt) {
    convertNormalEmphasis(toolboxOpt, 'iconStyle');
    each(toolboxOpt.feature, function (featureOpt) {
      convertNormalEmphasis(featureOpt, 'iconStyle');
    });
  });
  compatTextStyle(toObj(option.axisPointer), 'label');
  compatTextStyle(toObj(option.tooltip).axisPointer, 'label');
  // Clean logs
  // storedLogs = {};
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/preprocessor/backwardCompat.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/




function get(opt, path) {
  var pathArr = path.split(',');
  var obj = opt;
  for (var i = 0; i < pathArr.length; i++) {
    obj = obj && obj[pathArr[i]];
    if (obj == null) {
      break;
    }
  }
  return obj;
}
function set(opt, path, val, overwrite) {
  var pathArr = path.split(',');
  var obj = opt;
  var key;
  var i = 0;
  for (; i < pathArr.length - 1; i++) {
    key = pathArr[i];
    if (obj[key] == null) {
      obj[key] = {};
    }
    obj = obj[key];
  }
  if (overwrite || obj[pathArr[i]] == null) {
    obj[pathArr[i]] = val;
  }
}
function compatLayoutProperties(option) {
  option && (0,util.each)(LAYOUT_PROPERTIES, function (prop) {
    if (prop[0] in option && !(prop[1] in option)) {
      option[prop[1]] = option[prop[0]];
    }
  });
}
var LAYOUT_PROPERTIES = [['x', 'left'], ['y', 'top'], ['x2', 'right'], ['y2', 'bottom']];
var COMPATITABLE_COMPONENTS = ['grid', 'geo', 'parallel', 'legend', 'toolbox', 'title', 'visualMap', 'dataZoom', 'timeline'];
var BAR_ITEM_STYLE_MAP = [['borderRadius', 'barBorderRadius'], ['borderColor', 'barBorderColor'], ['borderWidth', 'barBorderWidth']];
function compatBarItemStyle(option) {
  var itemStyle = option && option.itemStyle;
  if (itemStyle) {
    for (var i = 0; i < BAR_ITEM_STYLE_MAP.length; i++) {
      var oldName = BAR_ITEM_STYLE_MAP[i][1];
      var newName = BAR_ITEM_STYLE_MAP[i][0];
      if (itemStyle[oldName] != null) {
        itemStyle[newName] = itemStyle[oldName];
        if (false) {}
      }
    }
  }
}
function compatPieLabel(option) {
  if (!option) {
    return;
  }
  if (option.alignTo === 'edge' && option.margin != null && option.edgeDistance == null) {
    if (false) {}
    option.edgeDistance = option.margin;
  }
}
function compatSunburstState(option) {
  if (!option) {
    return;
  }
  if (option.downplay && !option.blur) {
    option.blur = option.downplay;
    if (false) {}
  }
}
function compatGraphFocus(option) {
  if (!option) {
    return;
  }
  if (option.focusNodeAdjacency != null) {
    option.emphasis = option.emphasis || {};
    if (option.emphasis.focus == null) {
      if (false) {}
      option.emphasis.focus = 'adjacency';
    }
  }
}
function traverseTree(data, cb) {
  if (data) {
    for (var i = 0; i < data.length; i++) {
      cb(data[i]);
      data[i] && traverseTree(data[i].children, cb);
    }
  }
}
function globalBackwardCompat(option, isTheme) {
  globalCompatStyle(option, isTheme);
  // Make sure series array for model initialization.
  option.series = (0,model.normalizeToArray)(option.series);
  (0,util.each)(option.series, function (seriesOpt) {
    if (!(0,util.isObject)(seriesOpt)) {
      return;
    }
    var seriesType = seriesOpt.type;
    if (seriesType === 'line') {
      if (seriesOpt.clipOverflow != null) {
        seriesOpt.clip = seriesOpt.clipOverflow;
        if (false) {}
      }
    } else if (seriesType === 'pie' || seriesType === 'gauge') {
      if (seriesOpt.clockWise != null) {
        seriesOpt.clockwise = seriesOpt.clockWise;
        if (false) {}
      }
      compatPieLabel(seriesOpt.label);
      var data = seriesOpt.data;
      if (data && !(0,util.isTypedArray)(data)) {
        for (var i = 0; i < data.length; i++) {
          compatPieLabel(data[i]);
        }
      }
      if (seriesOpt.hoverOffset != null) {
        seriesOpt.emphasis = seriesOpt.emphasis || {};
        if (seriesOpt.emphasis.scaleSize = null) {
          if (false) {}
          seriesOpt.emphasis.scaleSize = seriesOpt.hoverOffset;
        }
      }
    } else if (seriesType === 'gauge') {
      var pointerColor = get(seriesOpt, 'pointer.color');
      pointerColor != null && set(seriesOpt, 'itemStyle.color', pointerColor);
    } else if (seriesType === 'bar') {
      compatBarItemStyle(seriesOpt);
      compatBarItemStyle(seriesOpt.backgroundStyle);
      compatBarItemStyle(seriesOpt.emphasis);
      var data = seriesOpt.data;
      if (data && !(0,util.isTypedArray)(data)) {
        for (var i = 0; i < data.length; i++) {
          if (typeof data[i] === 'object') {
            compatBarItemStyle(data[i]);
            compatBarItemStyle(data[i] && data[i].emphasis);
          }
        }
      }
    } else if (seriesType === 'sunburst') {
      var highlightPolicy = seriesOpt.highlightPolicy;
      if (highlightPolicy) {
        seriesOpt.emphasis = seriesOpt.emphasis || {};
        if (!seriesOpt.emphasis.focus) {
          seriesOpt.emphasis.focus = highlightPolicy;
          if (false) {}
        }
      }
      compatSunburstState(seriesOpt);
      traverseTree(seriesOpt.data, compatSunburstState);
    } else if (seriesType === 'graph' || seriesType === 'sankey') {
      compatGraphFocus(seriesOpt);
      // TODO nodes, edges?
    } else if (seriesType === 'map') {
      if (seriesOpt.mapType && !seriesOpt.map) {
        if (false) {}
        seriesOpt.map = seriesOpt.mapType;
      }
      if (seriesOpt.mapLocation) {
        if (false) {}
        (0,util.defaults)(seriesOpt, seriesOpt.mapLocation);
      }
    }
    if (seriesOpt.hoverAnimation != null) {
      seriesOpt.emphasis = seriesOpt.emphasis || {};
      if (seriesOpt.emphasis && seriesOpt.emphasis.scale == null) {
        if (false) {}
        seriesOpt.emphasis.scale = seriesOpt.hoverAnimation;
      }
    }
    compatLayoutProperties(seriesOpt);
  });
  // dataRange has changed to visualMap
  if (option.dataRange) {
    option.visualMap = option.dataRange;
  }
  (0,util.each)(COMPATITABLE_COMPONENTS, function (componentName) {
    var options = option[componentName];
    if (options) {
      if (!(0,util.isArray)(options)) {
        options = [options];
      }
      (0,util.each)(options, function (option) {
        compatLayoutProperties(option);
      });
    }
  });
}

}),
95187: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
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
70719: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return dataSample; }
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
          if ((0,zrender_lib_core_util_js__rspack_import_0.isString)(sampling)) {
            sampler = samplers[sampling];
          } else if ((0,zrender_lib_core_util_js__rspack_import_0.isFunction)(sampling)) {
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
87077: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return dataStack; }
});
/* import */ var zrender_lib_core_util_js__rspack_import_0 = __webpack_require__(9774);
/* import */ var _util_number_js__rspack_import_1 = __webpack_require__(64782);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  var stackInfoMap = (0,zrender_lib_core_util_js__rspack_import_0.createHashMap)();
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
      stackInfoList.push(stackInfo);
    }
  });
  // Process each stack group
  stackInfoMap.each(function (stackInfoList) {
    if (stackInfoList.length === 0) {
      return;
    }
    // Check if stack order needs to be reversed
    var firstSeries = stackInfoList[0].seriesModel;
    var stackOrder = firstSeries.get('stackOrder') || 'seriesAsc';
    if (stackOrder === 'seriesDesc') {
      stackInfoList.reverse();
    }
    // Set stackedOnSeries for each series in the final order
    (0,zrender_lib_core_util_js__rspack_import_0.each)(stackInfoList, function (stackInfo, index) {
      stackInfo.data.setCalculationInfo('stackedOnSeries', index > 0 ? stackInfoList[index - 1].seriesModel : null);
    });
    // Calculate stack values
    calculateStack(stackInfoList);
  });
}
function calculateStack(stackInfoList) {
  (0,zrender_lib_core_util_js__rspack_import_0.each)(stackInfoList, function (targetStackInfo, idxInStack) {
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
            sum = (0,_util_number_js__rspack_import_1.addSafe)(sum, val);
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
26052: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return negativeDataFilter; }
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

function negativeDataFilter(seriesType) {
  return {
    seriesType: seriesType,
    reset: function (seriesModel, ecModel) {
      var data = seriesModel.getData();
      data.filterSelf(function (idx) {
        // handle negative value condition
        var valueDim = data.mapDimension('value');
        var curValue = data.get(valueDim, idx);
        if ((0,zrender_lib_core_util_js__rspack_import_0.isNumber)(curValue) && !isNaN(curValue) && curValue < 0) {
          return false;
        }
        return true;
      });
    }
  };
}

}),
98888: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  install: function() { return install; }
});
/* import */ var zrender_lib_canvas_Painter_js__rspack_import_0 = __webpack_require__(819);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  registers.registerPainter('canvas', zrender_lib_canvas_Painter_js__rspack_import_0["default"]);
}

}),
85574: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  install: function() { return install; }
});
/* import */ var zrender_lib_svg_Painter_js__rspack_import_0 = __webpack_require__(91921);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  registers.registerPainter('svg', zrender_lib_svg_Painter_js__rspack_import_0["default"]);
}

}),
65818: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var tslib__rspack_import_2 = __webpack_require__(2492);
/* import */ var _util_number_js__rspack_import_0 = __webpack_require__(64782);
/* import */ var _util_format_js__rspack_import_5 = __webpack_require__(10236);
/* import */ var _Scale_js__rspack_import_1 = __webpack_require__(5005);
/* import */ var _helper_js__rspack_import_3 = __webpack_require__(19111);
/* import */ var _break_js__rspack_import_4 = __webpack_require__(8188);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/






var roundNumber = _util_number_js__rspack_import_0.round;
var IntervalScale = /** @class */function (_super) {
  (0,tslib__rspack_import_2.__extends)(IntervalScale, _super);
  function IntervalScale() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = 'interval';
    // Step is calculated in adjustExtent.
    _this._interval = 0;
    _this._intervalPrecision = 2;
    return _this;
  }
  IntervalScale.prototype.parse = function (val) {
    // `Scale#parse` (and its overrids) are typically applied at the axis values input
    // in echarts option. e.g., `axis.min/max`, `dataZoom.min/max`, etc.
    // but `series.data` is not included, which uses `dataValueHelper.ts`#`parseDataValue`.
    // `Scale#parse` originally introduced in fb8c813215098b9d2458966229bb95c510883d5e
    // at 2016 for dataZoom start/end settings (See `parseAxisModelMinMax`).
    //
    // Historically `scale/Interval.ts` returns the input value directly. But numeric
    // values (such as a number-like string '123') effectively passed through here and
    // were involved in calculations, which was error-prone and inconsistent with the
    // declared TS return type. Previously such issues are fixed separately in different
    // places case by case (such as #2475).
    //
    // Now, we perform actual parse to ensure its `number` type here. The parsing rule
    // follows the series data parsing rule (`dataValueHelper.ts`#`parseDataValue`)
    // and maintains compatibility as much as possible (thus a more strict parsing
    // `number.ts`#`numericToNumber` is not used here.)
    //
    // FIXME: `ScaleDataValue` also need to be modified to include numeric string type,
    //  since it effectively does.
    return val == null || val === '' ? NaN
    // If string (like '-'), using '+' parse to NaN
    // If object, also parse to NaN
    : Number(val);
  };
  IntervalScale.prototype.contain = function (val) {
    return _helper_js__rspack_import_3.contain(val, this._extent);
  };
  IntervalScale.prototype.normalize = function (val) {
    return this._calculator.normalize(val, this._extent);
  };
  IntervalScale.prototype.scale = function (val) {
    return this._calculator.scale(val, this._extent);
  };
  IntervalScale.prototype.getInterval = function () {
    return this._interval;
  };
  IntervalScale.prototype.setInterval = function (interval) {
    this._interval = interval;
    // Dropped auto calculated niceExtent and use user-set extent.
    // We assume user wants to set both interval, min, max to get a better result.
    this._niceExtent = this._extent.slice();
    this._intervalPrecision = _helper_js__rspack_import_3.getIntervalPrecision(interval);
  };
  /**
   * @override
   */
  IntervalScale.prototype.getTicks = function (opt) {
    opt = opt || {};
    var interval = this._interval;
    var extent = this._extent;
    var niceTickExtent = this._niceExtent;
    var intervalPrecision = this._intervalPrecision;
    var scaleBreakHelper = (0,_break_js__rspack_import_4.getScaleBreakHelper)();
    var ticks = [];
    // If interval is 0, return [];
    if (!interval) {
      return ticks;
    }
    if (opt.breakTicks === 'only_break' && scaleBreakHelper) {
      scaleBreakHelper.addBreaksToTicks(ticks, this._brkCtx.breaks, this._extent);
      return ticks;
    }
    // Consider this case: using dataZoom toolbox, zoom and zoom.
    var safeLimit = 10000;
    if (extent[0] < niceTickExtent[0]) {
      if (opt.expandToNicedExtent) {
        ticks.push({
          value: roundNumber(niceTickExtent[0] - interval, intervalPrecision)
        });
      } else {
        ticks.push({
          value: extent[0]
        });
      }
    }
    var estimateNiceMultiple = function (tickVal, targetTick) {
      return Math.round((targetTick - tickVal) / interval);
    };
    var tick = niceTickExtent[0];
    while (tick <= niceTickExtent[1]) {
      ticks.push({
        value: tick
      });
      // Avoid rounding error
      tick = roundNumber(tick + interval, intervalPrecision);
      if (this._brkCtx) {
        var moreMultiple = this._brkCtx.calcNiceTickMultiple(tick, estimateNiceMultiple);
        if (moreMultiple >= 0) {
          tick = roundNumber(tick + moreMultiple * interval, intervalPrecision);
        }
      }
      if (ticks.length > 0 && tick === ticks[ticks.length - 1].value) {
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
      if (opt.expandToNicedExtent) {
        ticks.push({
          value: roundNumber(lastNiceTick + interval, intervalPrecision)
        });
      } else {
        ticks.push({
          value: extent[1]
        });
      }
    }
    if (scaleBreakHelper) {
      scaleBreakHelper.pruneTicksByBreak(opt.pruneByBreak, ticks, this._brkCtx.breaks, function (item) {
        return item.value;
      }, this._interval, this._extent);
    }
    if (opt.breakTicks !== 'none' && scaleBreakHelper) {
      scaleBreakHelper.addBreaksToTicks(ticks, this._brkCtx.breaks, this._extent);
    }
    return ticks;
  };
  IntervalScale.prototype.getMinorTicks = function (splitNumber) {
    var ticks = this.getTicks({
      expandToNicedExtent: true
    });
    // NOTE: In log-scale, do not support minor ticks when breaks exist.
    //  because currently log-scale minor ticks is calculated based on raw values
    //  rather than log-transformed value, due to an odd effect when breaks exist.
    var minorTicks = [];
    var extent = this.getExtent();
    for (var i = 1; i < ticks.length; i++) {
      var nextTick = ticks[i];
      var prevTick = ticks[i - 1];
      if (prevTick["break"] || nextTick["break"]) {
        // Do not build minor ticks to the adjacent ticks to breaks ticks,
        // since the interval might be irregular.
        continue;
      }
      var count = 0;
      var minorTicksGroup = [];
      var interval = nextTick.value - prevTick.value;
      var minorInterval = interval / splitNumber;
      var minorIntervalPrecision = _helper_js__rspack_import_3.getIntervalPrecision(minorInterval);
      while (count < splitNumber - 1) {
        var minorTick = roundNumber(prevTick.value + (count + 1) * minorInterval, minorIntervalPrecision);
        // For the first and last interval. The count may be less than splitNumber.
        if (minorTick > extent[0] && minorTick < extent[1]) {
          minorTicksGroup.push(minorTick);
        }
        count++;
      }
      var scaleBreakHelper = (0,_break_js__rspack_import_4.getScaleBreakHelper)();
      scaleBreakHelper && scaleBreakHelper.pruneTicksByBreak('auto', minorTicksGroup, this._getNonTransBreaks(), function (value) {
        return value;
      }, this._interval, extent);
      minorTicks.push(minorTicksGroup);
    }
    return minorTicks;
  };
  IntervalScale.prototype._getNonTransBreaks = function () {
    return this._brkCtx ? this._brkCtx.breaks : [];
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
      precision = _util_number_js__rspack_import_0.getPrecision(data.value) || 0;
    } else if (precision === 'auto') {
      // Should be more precise then tick.
      precision = this._intervalPrecision;
    }
    // (1) If `precision` is set, 12.005 should be display as '12.00500'.
    // (2) Use roundNumber (toFixed) to avoid scientific notation like '3.5e-7'.
    var dataNum = roundNumber(data.value, precision, true);
    return _util_format_js__rspack_import_5.addCommas(dataNum);
  };
  /**
   * FIXME: refactor - disallow override, use composition instead.
   *
   * The override of `calcNiceTicks` should ensure these members are provided:
   *  this._intervalPrecision
   *  this._interval
   *
   * @param splitNumber By default `5`.
   */
  IntervalScale.prototype.calcNiceTicks = function (splitNumber, minInterval, maxInterval) {
    splitNumber = splitNumber || 5;
    var extent = this._extent.slice();
    var span = this._getExtentSpanWithBreaks();
    if (!isFinite(span)) {
      return;
    }
    // User may set axis min 0 and data are all negative
    // FIXME If it needs to reverse ?
    if (span < 0) {
      span = -span;
      extent.reverse();
      this._innerSetExtent(extent[0], extent[1]);
      extent = this._extent.slice();
    }
    var result = _helper_js__rspack_import_3.intervalScaleNiceTicks(extent, span, splitNumber, minInterval, maxInterval);
    this._intervalPrecision = result.intervalPrecision;
    this._interval = result.interval;
    this._niceExtent = result.niceTickExtent;
  };
  IntervalScale.prototype.calcNiceExtent = function (opt) {
    var extent = this._extent.slice();
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
    this._innerSetExtent(extent[0], extent[1]);
    extent = this._extent.slice();
    this.calcNiceTicks(opt.splitNumber, opt.minInterval, opt.maxInterval);
    var interval = this._interval;
    var intervalPrecition = this._intervalPrecision;
    if (!opt.fixMin) {
      extent[0] = roundNumber(Math.floor(extent[0] / interval) * interval, intervalPrecition);
    }
    if (!opt.fixMax) {
      extent[1] = roundNumber(Math.ceil(extent[1] / interval) * interval, intervalPrecition);
    }
    this._innerSetExtent(extent[0], extent[1]);
  };
  IntervalScale.prototype.setNiceExtent = function (min, max) {
    this._niceExtent = [min, max];
  };
  IntervalScale.type = 'interval';
  return IntervalScale;
}(_Scale_js__rspack_import_1["default"]);
_Scale_js__rspack_import_1["default"].registerClass(IntervalScale);
/* export default */ __webpack_exports__["default"] = (IntervalScale);

}),
67637: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var tslib__rspack_import_2 = __webpack_require__(2492);
/* import */ var zrender_lib_core_util_js__rspack_import_4 = __webpack_require__(9774);
/* import */ var _Scale_js__rspack_import_6 = __webpack_require__(5005);
/* import */ var _util_number_js__rspack_import_0 = __webpack_require__(64782);
/* import */ var _Interval_js__rspack_import_1 = __webpack_require__(65818);
/* import */ var _helper_js__rspack_import_5 = __webpack_require__(19111);
/* import */ var _break_js__rspack_import_3 = __webpack_require__(8188);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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



var fixRound = _util_number_js__rspack_import_0.round;
var mathFloor = Math.floor;
var mathCeil = Math.ceil;
var mathPow = Math.pow;
var mathLog = Math.log;
var LogScale = /** @class */function (_super) {
  (0,tslib__rspack_import_2.__extends)(LogScale, _super);
  function LogScale() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = 'log';
    _this.base = 10;
    _this._originalScale = new _Interval_js__rspack_import_1["default"]();
    return _this;
  }
  /**
   * @param Whether expand the ticks to niced extent.
   */
  LogScale.prototype.getTicks = function (opt) {
    opt = opt || {};
    var extent = this._extent.slice();
    var originalExtent = this._originalScale.getExtent();
    var ticks = _super.prototype.getTicks.call(this, opt);
    var base = this.base;
    var originalBreaks = this._originalScale._innerGetBreaks();
    var scaleBreakHelper = (0,_break_js__rspack_import_3.getScaleBreakHelper)();
    return zrender_lib_core_util_js__rspack_import_4.map(ticks, function (tick) {
      var val = tick.value;
      var roundingCriterion = null;
      var powVal = mathPow(base, val);
      // Fix #4158
      if (val === extent[0] && this._fixMin) {
        roundingCriterion = originalExtent[0];
      } else if (val === extent[1] && this._fixMax) {
        roundingCriterion = originalExtent[1];
      }
      var vBreak;
      if (scaleBreakHelper) {
        var transformed = scaleBreakHelper.getTicksLogTransformBreak(tick, base, originalBreaks, fixRoundingError);
        vBreak = transformed.vBreak;
        if (roundingCriterion == null) {
          roundingCriterion = transformed.brkRoundingCriterion;
        }
      }
      if (roundingCriterion != null) {
        powVal = fixRoundingError(powVal, roundingCriterion);
      }
      return {
        value: powVal,
        "break": vBreak
      };
    }, this);
  };
  LogScale.prototype._getNonTransBreaks = function () {
    return this._originalScale._innerGetBreaks();
  };
  LogScale.prototype.setExtent = function (start, end) {
    this._originalScale.setExtent(start, end);
    var loggedExtent = (0,_helper_js__rspack_import_5.logTransform)(this.base, [start, end]);
    _super.prototype.setExtent.call(this, loggedExtent[0], loggedExtent[1]);
  };
  /**
   * @return {number} end
   */
  LogScale.prototype.getExtent = function () {
    var base = this.base;
    var extent = _super.prototype.getExtent.call(this);
    extent[0] = mathPow(base, extent[0]);
    extent[1] = mathPow(base, extent[1]);
    // Fix #4158
    var originalExtent = this._originalScale.getExtent();
    this._fixMin && (extent[0] = fixRoundingError(extent[0], originalExtent[0]));
    this._fixMax && (extent[1] = fixRoundingError(extent[1], originalExtent[1]));
    return extent;
  };
  LogScale.prototype.unionExtentFromData = function (data, dim) {
    this._originalScale.unionExtentFromData(data, dim);
    var loggedOther = (0,_helper_js__rspack_import_5.logTransform)(this.base, data.getApproximateExtent(dim), true);
    this._innerUnionExtent(loggedOther);
  };
  /**
   * Update interval and extent of intervals for nice ticks
   * @param approxTickNum default 10 Given approx tick number
   */
  LogScale.prototype.calcNiceTicks = function (approxTickNum) {
    approxTickNum = approxTickNum || 10;
    var extent = this._extent.slice();
    var span = this._getExtentSpanWithBreaks();
    if (!isFinite(span) || span <= 0) {
      return;
    }
    var interval = _util_number_js__rspack_import_0.quantity(span);
    var err = approxTickNum / span * interval;
    // Filter ticks to get closer to the desired count.
    if (err <= 0.5) {
      interval *= 10;
    }
    // Interval should be integer
    while (!isNaN(interval) && Math.abs(interval) < 1 && Math.abs(interval) > 0) {
      interval *= 10;
    }
    var niceExtent = [fixRound(mathCeil(extent[0] / interval) * interval), fixRound(mathFloor(extent[1] / interval) * interval)];
    this._interval = interval;
    this._intervalPrecision = (0,_helper_js__rspack_import_5.getIntervalPrecision)(interval);
    this._niceExtent = niceExtent;
  };
  LogScale.prototype.calcNiceExtent = function (opt) {
    _super.prototype.calcNiceExtent.call(this, opt);
    this._fixMin = opt.fixMin;
    this._fixMax = opt.fixMax;
  };
  LogScale.prototype.contain = function (val) {
    val = mathLog(val) / mathLog(this.base);
    return _super.prototype.contain.call(this, val);
  };
  LogScale.prototype.normalize = function (val) {
    val = mathLog(val) / mathLog(this.base);
    return _super.prototype.normalize.call(this, val);
  };
  LogScale.prototype.scale = function (val) {
    val = _super.prototype.scale.call(this, val);
    return mathPow(this.base, val);
  };
  LogScale.prototype.setBreaksFromOption = function (breakOptionList) {
    var scaleBreakHelper = (0,_break_js__rspack_import_3.getScaleBreakHelper)();
    if (!scaleBreakHelper) {
      return;
    }
    var _a = scaleBreakHelper.logarithmicParseBreaksFromOption(breakOptionList, this.base, zrender_lib_core_util_js__rspack_import_4.bind(this.parse, this)),
      parsedOriginal = _a.parsedOriginal,
      parsedLogged = _a.parsedLogged;
    this._originalScale._innerSetBreak(parsedOriginal);
    this._innerSetBreak(parsedLogged);
  };
  LogScale.type = 'log';
  return LogScale;
}(_Interval_js__rspack_import_1["default"]);
function fixRoundingError(val, originalVal) {
  return fixRound(val, _util_number_js__rspack_import_0.getPrecision(originalVal));
}
_Scale_js__rspack_import_6["default"].registerClass(LogScale);
/* export default */ __webpack_exports__["default"] = (LogScale);

}),
50126: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var tslib__rspack_import_1 = __webpack_require__(2492);
/* import */ var _Scale_js__rspack_import_0 = __webpack_require__(5005);
/* import */ var _data_OrdinalMeta_js__rspack_import_2 = __webpack_require__(49543);
/* import */ var _helper_js__rspack_import_4 = __webpack_require__(19111);
/* import */ var zrender_lib_core_util_js__rspack_import_3 = __webpack_require__(9774);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
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
  (0,tslib__rspack_import_1.__extends)(OrdinalScale, _super);
  function OrdinalScale(setting) {
    var _this = _super.call(this, setting) || this;
    _this.type = 'ordinal';
    var ordinalMeta = _this.getSetting('ordinalMeta');
    // Caution: Should not use instanceof, consider ec-extensions using
    // import approach to get OrdinalMeta class.
    if (!ordinalMeta) {
      ordinalMeta = new _data_OrdinalMeta_js__rspack_import_2["default"]({});
    }
    if ((0,zrender_lib_core_util_js__rspack_import_3.isArray)(ordinalMeta)) {
      ordinalMeta = new _data_OrdinalMeta_js__rspack_import_2["default"]({
        categories: (0,zrender_lib_core_util_js__rspack_import_3.map)(ordinalMeta, function (item) {
          return (0,zrender_lib_core_util_js__rspack_import_3.isObject)(item) ? item.value : item;
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
    return (0,zrender_lib_core_util_js__rspack_import_3.isString)(val) ? this._ordinalMeta.getOrdinal(val)
    // val might be float.
    : Math.round(val);
  };
  OrdinalScale.prototype.contain = function (val) {
    return _helper_js__rspack_import_4.contain(val, this._extent) && val >= 0 && val < this._ordinalMeta.categories.length;
  };
  /**
   * Normalize given rank or name to linear [0, 1]
   * @param val raw ordinal number.
   * @return normalized value in [0, 1].
   */
  OrdinalScale.prototype.normalize = function (val) {
    val = this._getTickNumber(val);
    return this._calculator.normalize(val, this._extent);
  };
  /**
   * @param val normalized value in [0, 1].
   * @return raw ordinal number.
   */
  OrdinalScale.prototype.scale = function (val) {
    val = Math.round(this._calculator.scale(val, this._extent));
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
}(_Scale_js__rspack_import_0["default"]);
_Scale_js__rspack_import_0["default"].registerClass(OrdinalScale);
/* export default */ __webpack_exports__["default"] = (OrdinalScale);

}),
5005: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var _util_clazz_js__rspack_import_3 = __webpack_require__(72749);
/* import */ var _helper_js__rspack_import_0 = __webpack_require__(19111);
/* import */ var zrender_lib_core_util_js__rspack_import_2 = __webpack_require__(9774);
/* import */ var _break_js__rspack_import_1 = __webpack_require__(8188);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
    this._calculator = new _helper_js__rspack_import_0.ScaleCalculator();
    this._setting = setting || {};
    this._extent = [Infinity, -Infinity];
    var scaleBreakHelper = (0,_break_js__rspack_import_1.getScaleBreakHelper)();
    if (scaleBreakHelper) {
      this._brkCtx = scaleBreakHelper.createScaleBreakContext();
      this._brkCtx.update(this._extent);
    }
  }
  Scale.prototype.getSetting = function (name) {
    return this._setting[name];
  };
  /**
   * [CAVEAT]: It should not be overridden!
   */
  Scale.prototype._innerUnionExtent = function (other) {
    var extent = this._extent;
    // Considered that number could be NaN and should not write into the extent.
    this._innerSetExtent(other[0] < extent[0] ? other[0] : extent[0], other[1] > extent[1] ? other[1] : extent[1]);
  };
  /**
   * Set extent from data
   */
  Scale.prototype.unionExtentFromData = function (data, dim) {
    this._innerUnionExtent(data.getApproximateExtent(dim));
  };
  /**
   * Get a new slice of extent.
   * Extent is always in increase order.
   */
  Scale.prototype.getExtent = function () {
    return this._extent.slice();
  };
  Scale.prototype.setExtent = function (start, end) {
    this._innerSetExtent(start, end);
  };
  /**
   * [CAVEAT]: It should not be overridden!
   */
  Scale.prototype._innerSetExtent = function (start, end) {
    var thisExtent = this._extent;
    if (!isNaN(start)) {
      thisExtent[0] = start;
    }
    if (!isNaN(end)) {
      thisExtent[1] = end;
    }
    this._brkCtx && this._brkCtx.update(thisExtent);
  };
  /**
   * Prerequisite: Scale#parse is ready.
   */
  Scale.prototype.setBreaksFromOption = function (breakOptionList) {
    var scaleBreakHelper = (0,_break_js__rspack_import_1.getScaleBreakHelper)();
    if (scaleBreakHelper) {
      this._innerSetBreak(scaleBreakHelper.parseAxisBreakOption(breakOptionList, (0,zrender_lib_core_util_js__rspack_import_2.bind)(this.parse, this)));
    }
  };
  /**
   * [CAVEAT]: It should not be overridden!
   */
  Scale.prototype._innerSetBreak = function (parsed) {
    if (this._brkCtx) {
      this._brkCtx.setBreaks(parsed);
      this._calculator.updateMethods(this._brkCtx);
      this._brkCtx.update(this._extent);
    }
  };
  /**
   * [CAVEAT]: It should not be overridden!
   */
  Scale.prototype._innerGetBreaks = function () {
    return this._brkCtx ? this._brkCtx.breaks : [];
  };
  /**
   * Do not expose the internal `_breaks` unless necessary.
   */
  Scale.prototype.hasBreaks = function () {
    return this._brkCtx ? this._brkCtx.hasBreaks() : false;
  };
  Scale.prototype._getExtentSpanWithBreaks = function () {
    return this._brkCtx && this._brkCtx.hasBreaks() ? this._brkCtx.getExtentSpan() : this._extent[1] - this._extent[0];
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
_util_clazz_js__rspack_import_3.enableClassManagement(Scale);
/* export default */ __webpack_exports__["default"] = (Scale);

}),
72938: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var tslib__rspack_import_1 = __webpack_require__(2492);
/* import */ var _util_number_js__rspack_import_6 = __webpack_require__(64782);
/* import */ var _util_time_js__rspack_import_2 = __webpack_require__(24566);
/* import */ var _helper_js__rspack_import_5 = __webpack_require__(19111);
/* import */ var _Interval_js__rspack_import_0 = __webpack_require__(65818);
/* import */ var _Scale_js__rspack_import_7 = __webpack_require__(5005);
/* import */ var zrender_lib_core_util_js__rspack_import_4 = __webpack_require__(9774);
/* import */ var _break_js__rspack_import_3 = __webpack_require__(8188);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  (0,tslib__rspack_import_1.__extends)(TimeScale, _super);
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
    return (0,_util_time_js__rspack_import_2.format)(tick.value, _util_time_js__rspack_import_2.fullLeveledFormatter[(0,_util_time_js__rspack_import_2.getDefaultFormatPrecisionOfInterval)((0,_util_time_js__rspack_import_2.getPrimaryTimeUnit)(this._minLevelUnit))] || _util_time_js__rspack_import_2.fullLeveledFormatter.second, useUTC, this.getSetting('locale'));
  };
  TimeScale.prototype.getFormattedLabel = function (tick, idx, labelFormatter) {
    var isUTC = this.getSetting('useUTC');
    var lang = this.getSetting('locale');
    return (0,_util_time_js__rspack_import_2.leveledFormat)(tick, idx, labelFormatter, lang, isUTC);
  };
  /**
   * @override
   */
  TimeScale.prototype.getTicks = function (opt) {
    opt = opt || {};
    var interval = this._interval;
    var extent = this._extent;
    var scaleBreakHelper = (0,_break_js__rspack_import_3.getScaleBreakHelper)();
    var ticks = [];
    // If interval is 0, return [];
    if (!interval) {
      return ticks;
    }
    var useUTC = this.getSetting('useUTC');
    if (scaleBreakHelper && opt.breakTicks === 'only_break') {
      (0,_break_js__rspack_import_3.getScaleBreakHelper)().addBreaksToTicks(ticks, this._brkCtx.breaks, this._extent);
      return ticks;
    }
    var extent0Unit = (0,_util_time_js__rspack_import_2.getUnitFromValue)(extent[1], useUTC);
    ticks.push({
      value: extent[0],
      time: {
        level: 0,
        upperTimeUnit: extent0Unit,
        lowerTimeUnit: extent0Unit
      }
    });
    var innerTicks = getIntervalTicks(this._minLevelUnit, this._approxInterval, useUTC, extent, this._getExtentSpanWithBreaks(), this._brkCtx);
    ticks = ticks.concat(innerTicks);
    var extent1Unit = (0,_util_time_js__rspack_import_2.getUnitFromValue)(extent[1], useUTC);
    ticks.push({
      value: extent[1],
      time: {
        level: 0,
        upperTimeUnit: extent1Unit,
        lowerTimeUnit: extent1Unit
      }
    });
    var isUTC = this.getSetting('useUTC');
    var upperUnitIndex = _util_time_js__rspack_import_2.primaryTimeUnits.length - 1;
    var maxLevel = 0;
    (0,zrender_lib_core_util_js__rspack_import_4.each)(ticks, function (tick) {
      upperUnitIndex = Math.min(upperUnitIndex, (0,zrender_lib_core_util_js__rspack_import_4.indexOf)(_util_time_js__rspack_import_2.primaryTimeUnits, tick.time.upperTimeUnit));
      maxLevel = Math.max(maxLevel, tick.time.level);
    });
    if (scaleBreakHelper) {
      (0,_break_js__rspack_import_3.getScaleBreakHelper)().pruneTicksByBreak(opt.pruneByBreak, ticks, this._brkCtx.breaks, function (item) {
        return item.value;
      }, this._approxInterval, this._extent);
    }
    if (scaleBreakHelper && opt.breakTicks !== 'none') {
      (0,_break_js__rspack_import_3.getScaleBreakHelper)().addBreaksToTicks(ticks, this._brkCtx.breaks, this._extent, function (trimmedBrk) {
        // @see `parseTimeAxisLabelFormatterDictionary`.
        var lowerBrkUnitIndex = Math.max((0,zrender_lib_core_util_js__rspack_import_4.indexOf)(_util_time_js__rspack_import_2.primaryTimeUnits, (0,_util_time_js__rspack_import_2.getUnitFromValue)(trimmedBrk.vmin, isUTC)), (0,zrender_lib_core_util_js__rspack_import_4.indexOf)(_util_time_js__rspack_import_2.primaryTimeUnits, (0,_util_time_js__rspack_import_2.getUnitFromValue)(trimmedBrk.vmax, isUTC)));
        var upperBrkUnitIndex = 0;
        for (var unitIdx = 0; unitIdx < _util_time_js__rspack_import_2.primaryTimeUnits.length; unitIdx++) {
          if (!isPrimaryUnitValueAndGreaterSame(_util_time_js__rspack_import_2.primaryTimeUnits[unitIdx], trimmedBrk.vmin, trimmedBrk.vmax, isUTC)) {
            upperBrkUnitIndex = unitIdx;
            break;
          }
        }
        var upperIdx = Math.min(upperBrkUnitIndex, upperUnitIndex);
        var lowerIdx = Math.max(upperIdx, lowerBrkUnitIndex);
        return {
          level: maxLevel,
          lowerTimeUnit: _util_time_js__rspack_import_2.primaryTimeUnits[lowerIdx],
          upperTimeUnit: _util_time_js__rspack_import_2.primaryTimeUnits[upperIdx]
        };
      });
    }
    return ticks;
  };
  TimeScale.prototype.calcNiceExtent = function (opt) {
    var extent = this.getExtent();
    // If extent start and end are same, expand them
    if (extent[0] === extent[1]) {
      // Expand extent
      extent[0] -= _util_time_js__rspack_import_2.ONE_DAY;
      extent[1] += _util_time_js__rspack_import_2.ONE_DAY;
    }
    // If there are no data and extent are [Infinity, -Infinity]
    if (extent[1] === -Infinity && extent[0] === Infinity) {
      var d = new Date();
      extent[1] = +new Date(d.getFullYear(), d.getMonth(), d.getDate());
      extent[0] = extent[1] - _util_time_js__rspack_import_2.ONE_DAY;
    }
    this._innerSetExtent(extent[0], extent[1]);
    this.calcNiceTicks(opt.splitNumber, opt.minInterval, opt.maxInterval);
  };
  TimeScale.prototype.calcNiceTicks = function (approxTickNum, minInterval, maxInterval) {
    approxTickNum = approxTickNum || 10;
    var span = this._getExtentSpanWithBreaks();
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
    this._intervalPrecision = _helper_js__rspack_import_5.getIntervalPrecision(this._interval);
    // Min level used when picking ticks from top down.
    // We check one more level to avoid the ticks are to sparse in some case.
    this._minLevelUnit = scaleIntervals[Math.max(idx - 1, 0)][0];
  };
  TimeScale.prototype.parse = function (val) {
    // val might be float.
    return (0,zrender_lib_core_util_js__rspack_import_4.isNumber)(val) ? val : +_util_number_js__rspack_import_6.parseDate(val);
  };
  TimeScale.prototype.contain = function (val) {
    return _helper_js__rspack_import_5.contain(val, this._extent);
  };
  TimeScale.prototype.normalize = function (val) {
    return this._calculator.normalize(val, this._extent);
  };
  TimeScale.prototype.scale = function (val) {
    return this._calculator.scale(val, this._extent);
  };
  TimeScale.type = 'time';
  return TimeScale;
}(_Interval_js__rspack_import_0["default"]);
/**
 * This implementation was originally copied from "d3.js"
 * <https://github.com/d3/d3/blob/b516d77fb8566b576088e73410437494717ada26/src/time/scale.js>
 * with some modifications made for this program.
 * See the license statement at the head of this file.
 */
var scaleIntervals = [
// Format                           interval
['second', _util_time_js__rspack_import_2.ONE_SECOND], ['minute', _util_time_js__rspack_import_2.ONE_MINUTE], ['hour', _util_time_js__rspack_import_2.ONE_HOUR], ['quarter-day', _util_time_js__rspack_import_2.ONE_HOUR * 6], ['half-day', _util_time_js__rspack_import_2.ONE_HOUR * 12], ['day', _util_time_js__rspack_import_2.ONE_DAY * 1.2], ['half-week', _util_time_js__rspack_import_2.ONE_DAY * 3.5], ['week', _util_time_js__rspack_import_2.ONE_DAY * 7], ['month', _util_time_js__rspack_import_2.ONE_DAY * 31], ['quarter', _util_time_js__rspack_import_2.ONE_DAY * 95], ['half-year', _util_time_js__rspack_import_2.ONE_YEAR / 2], ['year', _util_time_js__rspack_import_2.ONE_YEAR] // 1Y
];
function isPrimaryUnitValueAndGreaterSame(unit, valueA, valueB, isUTC) {
  return (0,_util_time_js__rspack_import_2.roundTime)(new Date(valueA), unit, isUTC).getTime() === (0,_util_time_js__rspack_import_2.roundTime)(new Date(valueB), unit, isUTC).getTime();
}
// function isUnitValueSame(
//     unit: PrimaryTimeUnit,
//     valueA: number,
//     valueB: number,
//     isUTC: boolean
// ): boolean {
//     const dateA = numberUtil.parseDate(valueA) as any;
//     const dateB = numberUtil.parseDate(valueB) as any;
//     const isSame = (unit: PrimaryTimeUnit) => {
//         return getUnitValue(dateA, unit, isUTC)
//             === getUnitValue(dateB, unit, isUTC);
//     };
//     const isSameYear = () => isSame('year');
//     // const isSameHalfYear = () => isSameYear() && isSame('half-year');
//     // const isSameQuater = () => isSameYear() && isSame('quarter');
//     const isSameMonth = () => isSameYear() && isSame('month');
//     const isSameDay = () => isSameMonth() && isSame('day');
//     // const isSameHalfDay = () => isSameDay() && isSame('half-day');
//     const isSameHour = () => isSameDay() && isSame('hour');
//     const isSameMinute = () => isSameHour() && isSame('minute');
//     const isSameSecond = () => isSameMinute() && isSame('second');
//     const isSameMilliSecond = () => isSameSecond() && isSame('millisecond');
//     switch (unit) {
//         case 'year':
//             return isSameYear();
//         case 'month':
//             return isSameMonth();
//         case 'day':
//             return isSameDay();
//         case 'hour':
//             return isSameHour();
//         case 'minute':
//             return isSameMinute();
//         case 'second':
//             return isSameSecond();
//         case 'millisecond':
//             return isSameMilliSecond();
//     }
// }
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
  approxInterval /= _util_time_js__rspack_import_2.ONE_DAY;
  return approxInterval > 16 ? 16
  // Math.floor(daysInMonth / 2) + 1  // In this case we only want one tick between two months.
  : approxInterval > 7.5 ? 7 // TODO week 7 or day 8?
  : approxInterval > 3.5 ? 4 : approxInterval > 1.5 ? 2 : 1;
}
function getMonthInterval(approxInterval) {
  var APPROX_ONE_MONTH = 30 * _util_time_js__rspack_import_2.ONE_DAY;
  approxInterval /= APPROX_ONE_MONTH;
  return approxInterval > 6 ? 6 : approxInterval > 3 ? 3 : approxInterval > 2 ? 2 : 1;
}
function getHourInterval(approxInterval) {
  approxInterval /= _util_time_js__rspack_import_2.ONE_HOUR;
  return approxInterval > 12 ? 12 : approxInterval > 6 ? 6 : approxInterval > 3.5 ? 4 : approxInterval > 2 ? 2 : 1;
}
function getMinutesAndSecondsInterval(approxInterval, isMinutes) {
  approxInterval /= isMinutes ? _util_time_js__rspack_import_2.ONE_MINUTE : _util_time_js__rspack_import_2.ONE_SECOND;
  return approxInterval > 30 ? 30 : approxInterval > 20 ? 20 : approxInterval > 15 ? 15 : approxInterval > 10 ? 10 : approxInterval > 5 ? 5 : approxInterval > 2 ? 2 : 1;
}
function getMillisecondsInterval(approxInterval) {
  return _util_number_js__rspack_import_6.nice(approxInterval, true);
}
// e.g., if the input unit is 'day', start calculate ticks from the first day of
// that month to make ticks "nice".
function getFirstTimestampOfUnit(timestamp, unitName, isUTC) {
  var upperUnitIdx = Math.max(0, (0,zrender_lib_core_util_js__rspack_import_4.indexOf)(_util_time_js__rspack_import_2.primaryTimeUnits, unitName) - 1);
  return (0,_util_time_js__rspack_import_2.roundTime)(new Date(timestamp), _util_time_js__rspack_import_2.primaryTimeUnits[upperUnitIdx], isUTC).getTime();
}
function createEstimateNiceMultiple(setMethodName, dateMethodInterval) {
  var tmpDate = new Date(0);
  tmpDate[setMethodName](1);
  var tmpTime = tmpDate.getTime();
  tmpDate[setMethodName](1 + dateMethodInterval);
  var approxTimeInterval = tmpDate.getTime() - tmpTime;
  return function (tickVal, targetValue) {
    // Only in month that accurate result can not get by division of
    // timestamp interval, but no need accurate here.
    return Math.max(0, Math.round((targetValue - tickVal) / approxTimeInterval));
  };
}
function getIntervalTicks(bottomUnitName, approxInterval, isUTC, extent, extentSpanWithBreaks, brkCtx) {
  var safeLimit = 10000;
  var unitNames = _util_time_js__rspack_import_2.timeUnits;
  var iter = 0;
  function addTicksInSpan(interval, minTimestamp, maxTimestamp, getMethodName, setMethodName, isDate, out) {
    var estimateNiceMultiple = createEstimateNiceMultiple(setMethodName, interval);
    var dateTime = minTimestamp;
    var date = new Date(dateTime);
    // if (isDate) {
    //     d -= 1; // Starts with 0;   PENDING
    // }
    while (dateTime < maxTimestamp && dateTime <= extent[1]) {
      out.push({
        value: dateTime
      });
      if (iter++ > safeLimit) {
        if (false) {}
        break;
      }
      date[setMethodName](date[getMethodName]() + interval);
      dateTime = date.getTime();
      if (brkCtx) {
        var moreMultiple = brkCtx.calcNiceTickMultiple(dateTime, estimateNiceMultiple);
        if (moreMultiple > 0) {
          date[setMethodName](date[getMethodName]() + moreMultiple * interval);
          dateTime = date.getTime();
        }
      }
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
    if (isPrimaryUnitValueAndGreaterSame((0,_util_time_js__rspack_import_2.getPrimaryTimeUnit)(unitName), extent[0], extent[1], isUTC)) {
      return;
    }
    if (isFirstLevel) {
      lastLevelTicks = [{
        value: getFirstTimestampOfUnit(extent[0], unitName, isUTC)
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
          interval = Math.max(1, Math.round(approxInterval / _util_time_js__rspack_import_2.ONE_DAY / 365));
          getterName = (0,_util_time_js__rspack_import_2.fullYearGetterName)(isUTC);
          setterName = (0,_util_time_js__rspack_import_2.fullYearSetterName)(isUTC);
          break;
        case 'half-year':
        case 'quarter':
        case 'month':
          interval = getMonthInterval(approxInterval);
          getterName = (0,_util_time_js__rspack_import_2.monthGetterName)(isUTC);
          setterName = (0,_util_time_js__rspack_import_2.monthSetterName)(isUTC);
          break;
        case 'week': // PENDING If week is added. Ignore day.
        case 'half-week':
        case 'day':
          interval = getDateInterval(approxInterval, 31); // Use 32 days and let interval been 16
          getterName = (0,_util_time_js__rspack_import_2.dateGetterName)(isUTC);
          setterName = (0,_util_time_js__rspack_import_2.dateSetterName)(isUTC);
          isDate = true;
          break;
        case 'half-day':
        case 'quarter-day':
        case 'hour':
          interval = getHourInterval(approxInterval);
          getterName = (0,_util_time_js__rspack_import_2.hoursGetterName)(isUTC);
          setterName = (0,_util_time_js__rspack_import_2.hoursSetterName)(isUTC);
          break;
        case 'minute':
          interval = getMinutesAndSecondsInterval(approxInterval, true);
          getterName = (0,_util_time_js__rspack_import_2.minutesGetterName)(isUTC);
          setterName = (0,_util_time_js__rspack_import_2.minutesSetterName)(isUTC);
          break;
        case 'second':
          interval = getMinutesAndSecondsInterval(approxInterval, false);
          getterName = (0,_util_time_js__rspack_import_2.secondsGetterName)(isUTC);
          setterName = (0,_util_time_js__rspack_import_2.secondsSetterName)(isUTC);
          break;
        case 'millisecond':
          interval = getMillisecondsInterval(approxInterval);
          getterName = (0,_util_time_js__rspack_import_2.millisecondsGetterName)(isUTC);
          setterName = (0,_util_time_js__rspack_import_2.millisecondsSetterName)(isUTC);
          break;
      }
      // Notice: This expansion by `getFirstTimestampOfUnit` may cause too many ticks and
      // iteration. e.g., when three levels of ticks is displayed, which can be caused by
      // data zoom and axis breaks. Thus trim them here.
      if (endTick >= extent[0] && startTick <= extent[1]) {
        addTicksInSpan(interval, startTick, endTick, getterName, setterName, isDate, newAddedTicks);
      }
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
  }
  var levelsTicks = [];
  var currentLevelTicks = [];
  var tickCount = 0;
  var lastLevelTickCount = 0;
  for (var i = 0; i < unitNames.length; ++i) {
    var primaryTimeUnit = (0,_util_time_js__rspack_import_2.getPrimaryTimeUnit)(unitNames[i]);
    if (!(0,_util_time_js__rspack_import_2.isPrimaryTimeUnit)(unitNames[i])) {
      // TODO
      continue;
    }
    addLevelTicks(unitNames[i], levelsTicks[levelsTicks.length - 1] || [], currentLevelTicks);
    var nextPrimaryTimeUnit = unitNames[i + 1] ? (0,_util_time_js__rspack_import_2.getPrimaryTimeUnit)(unitNames[i + 1]) : null;
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
        var targetTickNum = extentSpanWithBreaks / approxInterval;
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
  var levelsTicksInExtent = (0,zrender_lib_core_util_js__rspack_import_4.filter)((0,zrender_lib_core_util_js__rspack_import_4.map)(levelsTicks, function (levelTicks) {
    return (0,zrender_lib_core_util_js__rspack_import_4.filter)(levelTicks, function (tick) {
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
      var unit = (0,_util_time_js__rspack_import_2.getUnitFromValue)(levelTicks[k].value, isUTC);
      ticks.push({
        value: levelTicks[k].value,
        time: {
          level: maxLevel - i,
          upperTimeUnit: unit,
          lowerTimeUnit: unit
        }
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
_Scale_js__rspack_import_7["default"].registerClass(TimeScale);
/* export default */ __webpack_exports__["default"] = (TimeScale);

}),
8188: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getScaleBreakHelper: function() { return getScaleBreakHelper; },
  registerScaleBreakHelperImpl: function() { return registerScaleBreakHelperImpl; }
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
;
var _impl = null;
function registerScaleBreakHelperImpl(impl) {
  if (!_impl) {
    _impl = impl;
  }
}
function getScaleBreakHelper() {
  return _impl;
}

}),
59690: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  installScaleBreakHelper: function() { return installScaleBreakHelper; }
});
/* import */ var zrender_lib_core_util_js__rspack_import_0 = __webpack_require__(9774);
/* import */ var _break_js__rspack_import_2 = __webpack_require__(8188);
/* import */ var _util_number_js__rspack_import_1 = __webpack_require__(64782);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
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
 *  Must not export anything except `installScaleBreakHelper`
 */
var ScaleBreakContextImpl = /** @class */function () {
  function ScaleBreakContextImpl() {
    // [CAVEAT]: Should set only by `ScaleBreakContext#setBreaks`!
    this.breaks = [];
    // [CAVEAT]: Should update only by `ScaleBreakContext#update`!
    // They are the values that scaleExtent[0] and scaleExtent[1] are mapped to a numeric axis
    // that breaks are applied, primarily for optimization of `Scale#normalize`.
    this._elapsedExtent = [Infinity, -Infinity];
  }
  ScaleBreakContextImpl.prototype.setBreaks = function (parsed) {
    // @ts-ignore
    this.breaks = parsed.breaks;
  };
  /**
   * [CAVEAT]: Must be called immediately each time scale extent and breaks are updated!
   */
  ScaleBreakContextImpl.prototype.update = function (scaleExtent) {
    updateAxisBreakGapReal(this, scaleExtent);
    var elapsedExtent = this._elapsedExtent;
    elapsedExtent[0] = this.elapse(scaleExtent[0]);
    elapsedExtent[1] = this.elapse(scaleExtent[1]);
  };
  ScaleBreakContextImpl.prototype.hasBreaks = function () {
    return !!this.breaks.length;
  };
  /**
   * When iteratively generating ticks by nice interval, currently the `interval`, which is
   * calculated by break-elapsed extent span, is probably very small comparing to the original
   * extent, leading to a large number of iteration and tick generation, even over `safeLimit`.
   * Thus stepping over breaks is necessary in that loop.
   *
   * "Nice" should be ensured on ticks when step over the breaks. Thus this method returns
   * a integer multiple of the "nice tick interval".
   *
   * This method does little work; it is just for unifying and restricting the behavior.
   */
  ScaleBreakContextImpl.prototype.calcNiceTickMultiple = function (tickVal, estimateNiceMultiple) {
    for (var idx = 0; idx < this.breaks.length; idx++) {
      var brk = this.breaks[idx];
      if (brk.vmin < tickVal && tickVal < brk.vmax) {
        var multiple = estimateNiceMultiple(tickVal, brk.vmax);
        if (false) {}
        return multiple;
      }
    }
    return 0;
  };
  ScaleBreakContextImpl.prototype.getExtentSpan = function () {
    return this._elapsedExtent[1] - this._elapsedExtent[0];
  };
  ScaleBreakContextImpl.prototype.normalize = function (val) {
    var elapsedSpan = this._elapsedExtent[1] - this._elapsedExtent[0];
    // The same logic as `Scale#normalize`.
    if (elapsedSpan === 0) {
      return 0.5;
    }
    return (this.elapse(val) - this._elapsedExtent[0]) / elapsedSpan;
  };
  ScaleBreakContextImpl.prototype.scale = function (val) {
    return this.unelapse(val * (this._elapsedExtent[1] - this._elapsedExtent[0]) + this._elapsedExtent[0]);
  };
  /**
   * Suppose:
   *    AXIS_BREAK_LAST_BREAK_END_BASE: 0
   *    AXIS_BREAK_ELAPSED_BASE: 0
   *    breaks: [
   *        {start: -400, end: -300, gap: 27},
   *        {start: -100, end: 100, gap: 10},
   *        {start: 200, end: 400, gap: 300},
   *    ]
   * The mapping will be:
   *        |        |
   *    400 +   ->   +  237
   *     |  |        |   |  (gap: 300)
   *    200 +   ->   + -63
   *        |        |
   *    100 +   ->   + -163
   *     |  |        |   |  (gap: 10)
   *   -100 +   ->   + -173
   *        |        |
   *   -300 +   ->   + -373
   *     |  |        |   |  (gap: 27)
   *   -400 +   ->   + -400
   *        |        |
   *   origianl     elapsed
   *
   * Note:
   *   The mapping has nothing to do with "scale extent".
   */
  ScaleBreakContextImpl.prototype.elapse = function (val) {
    // If the value is in the break, return the normalized value in the break
    var elapsedVal = AXIS_BREAK_ELAPSED_BASE;
    var lastBreakEnd = AXIS_BREAK_LAST_BREAK_END_BASE;
    var stillOver = true;
    for (var i = 0; i < this.breaks.length; i++) {
      var brk = this.breaks[i];
      if (val <= brk.vmax) {
        if (val > brk.vmin) {
          elapsedVal += brk.vmin - lastBreakEnd + (val - brk.vmin) / (brk.vmax - brk.vmin) * brk.gapReal;
        } else {
          elapsedVal += val - lastBreakEnd;
        }
        lastBreakEnd = brk.vmax;
        stillOver = false;
        break;
      }
      elapsedVal += brk.vmin - lastBreakEnd + brk.gapReal;
      lastBreakEnd = brk.vmax;
    }
    if (stillOver) {
      elapsedVal += val - lastBreakEnd;
    }
    return elapsedVal;
  };
  ScaleBreakContextImpl.prototype.unelapse = function (elapsedVal) {
    var lastElapsedEnd = AXIS_BREAK_ELAPSED_BASE;
    var lastBreakEnd = AXIS_BREAK_LAST_BREAK_END_BASE;
    var stillOver = true;
    var unelapsedVal = 0;
    for (var i = 0; i < this.breaks.length; i++) {
      var brk = this.breaks[i];
      var elapsedStart = lastElapsedEnd + brk.vmin - lastBreakEnd;
      var elapsedEnd = elapsedStart + brk.gapReal;
      if (elapsedVal <= elapsedEnd) {
        if (elapsedVal > elapsedStart) {
          unelapsedVal = brk.vmin + (elapsedVal - elapsedStart) / (elapsedEnd - elapsedStart) * (brk.vmax - brk.vmin);
        } else {
          unelapsedVal = lastBreakEnd + elapsedVal - lastElapsedEnd;
        }
        lastBreakEnd = brk.vmax;
        stillOver = false;
        break;
      }
      lastElapsedEnd = elapsedEnd;
      lastBreakEnd = brk.vmax;
    }
    if (stillOver) {
      unelapsedVal = lastBreakEnd + elapsedVal - lastElapsedEnd;
    }
    return unelapsedVal;
  };
  return ScaleBreakContextImpl;
}();
;
function createScaleBreakContext() {
  return new ScaleBreakContextImpl();
}
// Both can start with any finite value, and are not necessaryily equal. But they need to
// be the same in `axisBreakElapse` and `axisBreakUnelapse` respectively.
var AXIS_BREAK_ELAPSED_BASE = 0;
var AXIS_BREAK_LAST_BREAK_END_BASE = 0;
/**
 * `gapReal` in brkCtx.breaks will be calculated.
 */
function updateAxisBreakGapReal(brkCtx, scaleExtent) {
  // Considered the effect:
  //  - Use dataZoom to move some of the breaks outside the extent.
  //  - Some scenarios that `series.clip: false`.
  //
  // How to calculate `prctBrksGapRealSum`:
  //  Based on the formula:
  //      xxx.span = brk.vmax - brk.vmin
  //      xxx.tpPrct.val / xxx.tpAbs.val means ParsedAxisBreak['gapParsed']['val']
  //      .S/.E means a break that is semi in scaleExtent[0] or scaleExtent[1]
  //      valP = (
  //          + (fullyInExtBrksSum.tpAbs.gapReal - fullyInExtBrksSum.tpAbs.span)
  //          + (semiInExtBrk.S.tpAbs.gapReal - semiInExtBrk.S.tpAbs.span) * semiInExtBrk.S.tpAbs.inExtFrac
  //          + (semiInExtBrk.E.tpAbs.gapReal - semiInExtBrk.E.tpAbs.span) * semiInExtBrk.E.tpAbs.inExtFrac
  //      )
  //      valQ = (
  //          - fullyInExtBrksSum.tpPrct.span
  //          - semiInExtBrk.S.tpPrct.span * semiInExtBrk.S.tpPrct.inExtFrac
  //          - semiInExtBrk.E.tpPrct.span * semiInExtBrk.E.tpPrct.inExtFrac
  //      )
  //      gapPrctSum = sum(xxx.tpPrct.val)
  //      gapPrctSum = prctBrksGapRealSum / (
  //          + (scaleExtent[1] - scaleExtent[0]) + valP + valQ
  //          + fullyInExtBrksSum.tpPrct.gapReal
  //          + semiInExtBrk.S.tpPrct.gapReal * semiInExtBrk.S.tpPrct.inExtFrac
  //          + semiInExtBrk.E.tpPrct.gapReal * semiInExtBrk.E.tpPrct.inExtFrac
  //      )
  //  Assume:
  //      xxx.tpPrct.gapReal = xxx.tpPrct.val / gapPrctSum * prctBrksGapRealSum
  //         (NOTE: This is not accurate when semi-in-extent break exist because its
  //         proportion is not linear, but this assumption approximately works.)
  //  Derived as follows:
  //      prctBrksGapRealSum = gapPrctSum * ( (scaleExtent[1] - scaleExtent[0]) + valP + valQ )
  //          / (1
  //              - fullyInExtBrksSum.tpPrct.val
  //              - semiInExtBrk.S.tpPrct.val * semiInExtBrk.S.tpPrct.inExtFrac
  //              - semiInExtBrk.E.tpPrct.val * semiInExtBrk.E.tpPrct.inExtFrac
  //          )
  var gapPrctSum = 0;
  var fullyInExtBrksSum = {
    tpAbs: {
      span: 0,
      val: 0
    },
    tpPrct: {
      span: 0,
      val: 0
    }
  };
  var init = function () {
    return {
      has: false,
      span: NaN,
      inExtFrac: NaN,
      val: NaN
    };
  };
  var semiInExtBrk = {
    S: {
      tpAbs: init(),
      tpPrct: init()
    },
    E: {
      tpAbs: init(),
      tpPrct: init()
    }
  };
  (0,zrender_lib_core_util_js__rspack_import_0.each)(brkCtx.breaks, function (brk) {
    var gapParsed = brk.gapParsed;
    if (gapParsed.type === 'tpPrct') {
      gapPrctSum += gapParsed.val;
    }
    var clampedBrk = clampBreakByExtent(brk, scaleExtent);
    if (clampedBrk) {
      var vminClamped = clampedBrk.vmin !== brk.vmin;
      var vmaxClamped = clampedBrk.vmax !== brk.vmax;
      var clampedSpan = clampedBrk.vmax - clampedBrk.vmin;
      if (vminClamped && vmaxClamped) {
        // Do nothing, which simply makes the result `gapReal` cover the entire scaleExtent.
        // This transform is not consistent with the other cases but practically works.
      } else if (vminClamped || vmaxClamped) {
        var sOrE = vminClamped ? 'S' : 'E';
        semiInExtBrk[sOrE][gapParsed.type].has = true;
        semiInExtBrk[sOrE][gapParsed.type].span = clampedSpan;
        semiInExtBrk[sOrE][gapParsed.type].inExtFrac = clampedSpan / (brk.vmax - brk.vmin);
        semiInExtBrk[sOrE][gapParsed.type].val = gapParsed.val;
      } else {
        fullyInExtBrksSum[gapParsed.type].span += clampedSpan;
        fullyInExtBrksSum[gapParsed.type].val += gapParsed.val;
      }
    }
  });
  var prctBrksGapRealSum = gapPrctSum * (0 + (scaleExtent[1] - scaleExtent[0]) + (fullyInExtBrksSum.tpAbs.val - fullyInExtBrksSum.tpAbs.span) + (semiInExtBrk.S.tpAbs.has ? (semiInExtBrk.S.tpAbs.val - semiInExtBrk.S.tpAbs.span) * semiInExtBrk.S.tpAbs.inExtFrac : 0) + (semiInExtBrk.E.tpAbs.has ? (semiInExtBrk.E.tpAbs.val - semiInExtBrk.E.tpAbs.span) * semiInExtBrk.E.tpAbs.inExtFrac : 0) - fullyInExtBrksSum.tpPrct.span - (semiInExtBrk.S.tpPrct.has ? semiInExtBrk.S.tpPrct.span * semiInExtBrk.S.tpPrct.inExtFrac : 0) - (semiInExtBrk.E.tpPrct.has ? semiInExtBrk.E.tpPrct.span * semiInExtBrk.E.tpPrct.inExtFrac : 0)) / (1 - fullyInExtBrksSum.tpPrct.val - (semiInExtBrk.S.tpPrct.has ? semiInExtBrk.S.tpPrct.val * semiInExtBrk.S.tpPrct.inExtFrac : 0) - (semiInExtBrk.E.tpPrct.has ? semiInExtBrk.E.tpPrct.val * semiInExtBrk.E.tpPrct.inExtFrac : 0));
  (0,zrender_lib_core_util_js__rspack_import_0.each)(brkCtx.breaks, function (brk) {
    var gapParsed = brk.gapParsed;
    if (gapParsed.type === 'tpPrct') {
      brk.gapReal = gapPrctSum !== 0
      // prctBrksGapRealSum is supposed to be non-negative but add a safe guard
      ? Math.max(prctBrksGapRealSum, 0) * gapParsed.val / gapPrctSum : 0;
    }
    if (gapParsed.type === 'tpAbs') {
      brk.gapReal = gapParsed.val;
    }
    if (brk.gapReal == null) {
      brk.gapReal = 0;
    }
  });
}
function pruneTicksByBreak(pruneByBreak, ticks, breaks, getValue, interval, scaleExtent) {
  if (pruneByBreak === 'no') {
    return;
  }
  (0,zrender_lib_core_util_js__rspack_import_0.each)(breaks, function (brk) {
    // break.vmin/vmax that out of extent must not impact the visible of
    // normal ticks and labels.
    var clampedBrk = clampBreakByExtent(brk, scaleExtent);
    if (!clampedBrk) {
      return;
    }
    // Remove some normal ticks to avoid zigzag shapes overlapping with split lines
    // and to avoid break labels overlapping with normal tick labels (thouth it can
    // also be avoided by `axisLabel.hideOverlap`).
    // It's OK to O(n^2) since the number of `ticks` are small.
    for (var j = ticks.length - 1; j >= 0; j--) {
      var tick = ticks[j];
      var val = getValue(tick);
      // 1. Ensure there is no ticks inside `break.vmin` and `break.vmax`.
      // 2. Use an empirically gap value here. Theoritically `zigzagAmplitude` is
      //  supposed to be involved to provide better precision but it will brings
      //  more complexity. The empirically gap value is conservative because break
      //  labels and normal tick lables are prone to overlapping.
      var gap = interval * 3 / 4;
      if (val > clampedBrk.vmin - gap && val < clampedBrk.vmax + gap && (pruneByBreak !== 'preserve_extent_bound' || val !== scaleExtent[0] && val !== scaleExtent[1])) {
        ticks.splice(j, 1);
      }
    }
  });
}
function addBreaksToTicks(
// The input ticks should be in accending order.
ticks, breaks, scaleExtent,
// Keep the break ends at the same level to avoid an awkward appearance.
getTimeProps) {
  (0,zrender_lib_core_util_js__rspack_import_0.each)(breaks, function (brk) {
    var clampedBrk = clampBreakByExtent(brk, scaleExtent);
    if (!clampedBrk) {
      return;
    }
    // - When neight `break.vmin` nor `break.vmax` is in scale extent,
    //  break label should not be displayed and we do not add them to the result.
    // - When only one of `break.vmin` and `break.vmax` is inside the extent and the
    //  other is outsite, we comply with the extent and display only part of the breaks area,
    //  because the extent might be determined by user settings (such as `axis.min/max`)
    ticks.push({
      value: clampedBrk.vmin,
      "break": {
        type: 'vmin',
        parsedBreak: clampedBrk
      },
      time: getTimeProps ? getTimeProps(clampedBrk) : undefined
    });
    // When gap is 0, start tick overlap with end tick, but we still count both of them. Break
    // area shape can address that overlapping. `axisLabel` need draw both start and end separately,
    // otherwise it brings complexity to the logic of label overlapping resolving (e.g., when label
    // rotated), and introduces inconsistency to users in `axisLabel.formatter` between gap is 0 or not.
    ticks.push({
      value: clampedBrk.vmax,
      "break": {
        type: 'vmax',
        parsedBreak: clampedBrk
      },
      time: getTimeProps ? getTimeProps(clampedBrk) : undefined
    });
  });
  if (breaks.length) {
    ticks.sort(function (a, b) {
      return a.value - b.value;
    });
  }
}
/**
 * If break and extent does not intersect, return null/undefined.
 * If the intersection is only a point at scaleExtent[0] or scaleExtent[1], return null/undefined.
 */
function clampBreakByExtent(brk, scaleExtent) {
  var vmin = Math.max(brk.vmin, scaleExtent[0]);
  var vmax = Math.min(brk.vmax, scaleExtent[1]);
  return vmin < vmax || vmin === vmax && vmin > scaleExtent[0] && vmin < scaleExtent[1] ? {
    vmin: vmin,
    vmax: vmax,
    breakOption: brk.breakOption,
    gapParsed: brk.gapParsed,
    gapReal: brk.gapReal
  } : null;
}
function parseAxisBreakOption(
// raw user input breaks, retrieved from axis model.
breakOptionList, parse, opt) {
  var parsedBreaks = [];
  if (!breakOptionList) {
    return {
      breaks: parsedBreaks
    };
  }
  function validatePercent(normalizedPercent, msg) {
    if (normalizedPercent >= 0 && normalizedPercent < 1 - 1e-5) {
      // Avoid division error.
      return true;
    }
    if (false) {}
    return false;
  }
  (0,zrender_lib_core_util_js__rspack_import_0.each)(breakOptionList, function (brkOption) {
    if (!brkOption || brkOption.start == null || brkOption.end == null) {
      if (false) {}
      return;
    }
    if (brkOption.isExpanded) {
      return;
    }
    var parsedBrk = {
      breakOption: (0,zrender_lib_core_util_js__rspack_import_0.clone)(brkOption),
      vmin: parse(brkOption.start),
      vmax: parse(brkOption.end),
      gapParsed: {
        type: 'tpAbs',
        val: 0
      },
      gapReal: null
    };
    if (brkOption.gap != null) {
      var isPrct = false;
      if ((0,zrender_lib_core_util_js__rspack_import_0.isString)(brkOption.gap)) {
        var trimmedGap = (0,zrender_lib_core_util_js__rspack_import_0.trim)(brkOption.gap);
        if (trimmedGap.match(/%$/)) {
          var normalizedPercent = parseFloat(trimmedGap) / 100;
          if (!validatePercent(normalizedPercent, 'Percent gap')) {
            normalizedPercent = 0;
          }
          parsedBrk.gapParsed.type = 'tpPrct';
          parsedBrk.gapParsed.val = normalizedPercent;
          isPrct = true;
        }
      }
      if (!isPrct) {
        var absolute = parse(brkOption.gap);
        if (!isFinite(absolute) || absolute < 0) {
          if (false) {}
          absolute = 0;
        }
        parsedBrk.gapParsed.type = 'tpAbs';
        parsedBrk.gapParsed.val = absolute;
      }
    }
    if (parsedBrk.vmin === parsedBrk.vmax) {
      parsedBrk.gapParsed.type = 'tpAbs';
      parsedBrk.gapParsed.val = 0;
    }
    if (opt && opt.noNegative) {
      (0,zrender_lib_core_util_js__rspack_import_0.each)(['vmin', 'vmax'], function (se) {
        if (parsedBrk[se] < 0) {
          if (false) {}
          parsedBrk[se] = 0;
        }
      });
    }
    // Ascending numerical order is the prerequisite of the calculation in Scale#normalize.
    // User are allowed to input desending vmin/vmax for simplifying the usage.
    if (parsedBrk.vmin > parsedBrk.vmax) {
      var tmp = parsedBrk.vmax;
      parsedBrk.vmax = parsedBrk.vmin;
      parsedBrk.vmin = tmp;
    }
    parsedBreaks.push(parsedBrk);
  });
  // Ascending numerical order is the prerequisite of the calculation in Scale#normalize.
  parsedBreaks.sort(function (item1, item2) {
    return item1.vmin - item2.vmin;
  });
  // Make sure that the intervals in breaks are not overlap.
  var lastEnd = -Infinity;
  (0,zrender_lib_core_util_js__rspack_import_0.each)(parsedBreaks, function (brk, idx) {
    if (lastEnd > brk.vmin) {
      if (false) {}
      parsedBreaks[idx] = null;
    }
    lastEnd = brk.vmax;
  });
  return {
    breaks: parsedBreaks.filter(function (brk) {
      return !!brk;
    })
  };
}
function identifyAxisBreak(brk, identifier) {
  return serializeAxisBreakIdentifier(identifier) === serializeAxisBreakIdentifier(brk);
}
function serializeAxisBreakIdentifier(identifier) {
  // We use user input start/end to identify break. Considered cases like `start: new Date(xxx)`,
  // Theoretically `Scale#parse` should be used here, but not used currently to reduce dependencies,
  // since simply converting to string happens to be correct.
  return identifier.start + '_\0_' + identifier.end;
}
/**
 * - A break pair represents `[vmin, vmax]`,
 * - Only both vmin and vmax item exist, they are counted as a pair.
 */
function retrieveAxisBreakPairs(itemList, getVisualAxisBreak, returnIdx) {
  var idxPairList = [];
  (0,zrender_lib_core_util_js__rspack_import_0.each)(itemList, function (el, idx) {
    var vBreak = getVisualAxisBreak(el);
    if (vBreak && vBreak.type === 'vmin') {
      idxPairList.push([idx]);
    }
  });
  (0,zrender_lib_core_util_js__rspack_import_0.each)(itemList, function (el, idx) {
    var vBreak = getVisualAxisBreak(el);
    if (vBreak && vBreak.type === 'vmax') {
      var idxPair = (0,zrender_lib_core_util_js__rspack_import_0.find)(idxPairList,
      // parsedBreak may be changed, can only use breakOption to match them.
      function (pr) {
        return identifyAxisBreak(getVisualAxisBreak(itemList[pr[0]]).parsedBreak.breakOption, vBreak.parsedBreak.breakOption);
      });
      idxPair && idxPair.push(idx);
    }
  });
  var result = [];
  (0,zrender_lib_core_util_js__rspack_import_0.each)(idxPairList, function (idxPair) {
    if (idxPair.length === 2) {
      result.push(returnIdx ? idxPair : [itemList[idxPair[0]], itemList[idxPair[1]]]);
    }
  });
  return result;
}
function getTicksLogTransformBreak(tick, logBase, logOriginalBreaks, fixRoundingError) {
  var vBreak;
  var brkRoundingCriterion;
  if (tick["break"]) {
    var brk = tick["break"].parsedBreak;
    var originalBreak = (0,zrender_lib_core_util_js__rspack_import_0.find)(logOriginalBreaks, function (brk) {
      return identifyAxisBreak(brk.breakOption, tick["break"].parsedBreak.breakOption);
    });
    var vmin = fixRoundingError(Math.pow(logBase, brk.vmin), originalBreak.vmin);
    var vmax = fixRoundingError(Math.pow(logBase, brk.vmax), originalBreak.vmax);
    var gapParsed = {
      type: brk.gapParsed.type,
      val: brk.gapParsed.type === 'tpAbs' ? (0,_util_number_js__rspack_import_1.round)(Math.pow(logBase, brk.vmin + brk.gapParsed.val)) - vmin : brk.gapParsed.val
    };
    vBreak = {
      type: tick["break"].type,
      parsedBreak: {
        breakOption: brk.breakOption,
        vmin: vmin,
        vmax: vmax,
        gapParsed: gapParsed,
        gapReal: brk.gapReal
      }
    };
    brkRoundingCriterion = originalBreak[tick["break"].type];
  }
  return {
    brkRoundingCriterion: brkRoundingCriterion,
    vBreak: vBreak
  };
}
function logarithmicParseBreaksFromOption(breakOptionList, logBase, parse) {
  var opt = {
    noNegative: true
  };
  var parsedOriginal = parseAxisBreakOption(breakOptionList, parse, opt);
  var parsedLogged = parseAxisBreakOption(breakOptionList, parse, opt);
  var loggedBase = Math.log(logBase);
  parsedLogged.breaks = (0,zrender_lib_core_util_js__rspack_import_0.map)(parsedLogged.breaks, function (brk) {
    var vmin = Math.log(brk.vmin) / loggedBase;
    var vmax = Math.log(brk.vmax) / loggedBase;
    var gapParsed = {
      type: brk.gapParsed.type,
      val: brk.gapParsed.type === 'tpAbs' ? Math.log(brk.vmin + brk.gapParsed.val) / loggedBase - vmin : brk.gapParsed.val
    };
    return {
      vmin: vmin,
      vmax: vmax,
      gapParsed: gapParsed,
      gapReal: brk.gapReal,
      breakOption: brk.breakOption
    };
  });
  return {
    parsedOriginal: parsedOriginal,
    parsedLogged: parsedLogged
  };
}
var BREAK_MIN_MAX_TO_PARAM = {
  vmin: 'start',
  vmax: 'end'
};
function makeAxisLabelFormatterParamBreak(extraParam, vBreak) {
  if (vBreak) {
    extraParam = extraParam || {};
    extraParam["break"] = {
      type: BREAK_MIN_MAX_TO_PARAM[vBreak.type],
      start: vBreak.parsedBreak.vmin,
      end: vBreak.parsedBreak.vmax
    };
  }
  return extraParam;
}
function installScaleBreakHelper() {
  (0,_break_js__rspack_import_2.registerScaleBreakHelperImpl)({
    createScaleBreakContext: createScaleBreakContext,
    pruneTicksByBreak: pruneTicksByBreak,
    addBreaksToTicks: addBreaksToTicks,
    parseAxisBreakOption: parseAxisBreakOption,
    identifyAxisBreak: identifyAxisBreak,
    serializeAxisBreakIdentifier: serializeAxisBreakIdentifier,
    retrieveAxisBreakPairs: retrieveAxisBreakPairs,
    getTicksLogTransformBreak: getTicksLogTransformBreak,
    logarithmicParseBreaksFromOption: logarithmicParseBreaksFromOption,
    makeAxisLabelFormatterParamBreak: makeAxisLabelFormatterParamBreak
  });
}

}),
19111: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ScaleCalculator: function() { return ScaleCalculator; },
  contain: function() { return contain; },
  fixExtent: function() { return fixExtent; },
  getIntervalPrecision: function() { return getIntervalPrecision; },
  increaseInterval: function() { return increaseInterval; },
  intervalScaleNiceTicks: function() { return intervalScaleNiceTicks; },
  isIntervalOrLogScale: function() { return isIntervalOrLogScale; },
  isValueNice: function() { return isValueNice; },
  logTransform: function() { return logTransform; }
});
/* import */ var _util_number_js__rspack_import_0 = __webpack_require__(64782);
/* import */ var zrender_lib_core_util_js__rspack_import_1 = __webpack_require__(9774);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  var exp10 = Math.pow(10, (0,_util_number_js__rspack_import_0.quantityExponent)(Math.abs(val)));
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
function intervalScaleNiceTicks(extent, spanWithBreaks, splitNumber, minInterval, maxInterval) {
  var result = {};
  var interval = result.interval = (0,_util_number_js__rspack_import_0.nice)(spanWithBreaks / splitNumber, true);
  if (minInterval != null && interval < minInterval) {
    interval = result.interval = minInterval;
  }
  if (maxInterval != null && interval > maxInterval) {
    interval = result.interval = maxInterval;
  }
  // Tow more digital for tick.
  var precision = result.intervalPrecision = getIntervalPrecision(interval);
  // Niced extent inside original extent
  var niceTickExtent = result.niceTickExtent = [(0,_util_number_js__rspack_import_0.round)(Math.ceil(extent[0] / interval) * interval, precision), (0,_util_number_js__rspack_import_0.round)(Math.floor(extent[1] / interval) * interval, precision)];
  fixExtent(niceTickExtent, extent);
  return result;
}
function increaseInterval(interval) {
  var exp10 = Math.pow(10, (0,_util_number_js__rspack_import_0.quantityExponent)(interval));
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
  return (0,_util_number_js__rspack_import_0.round)(f * exp10);
}
/**
 * @return interval precision
 */
function getIntervalPrecision(interval) {
  // Tow more digital for tick.
  return (0,_util_number_js__rspack_import_0.getPrecision)(interval) + 2;
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
var ScaleCalculator = /** @class */function () {
  function ScaleCalculator() {
    this.normalize = normalize;
    this.scale = scale;
  }
  ScaleCalculator.prototype.updateMethods = function (brkCtx) {
    if (brkCtx.hasBreaks()) {
      this.normalize = (0,zrender_lib_core_util_js__rspack_import_1.bind)(brkCtx.normalize, brkCtx);
      this.scale = (0,zrender_lib_core_util_js__rspack_import_1.bind)(brkCtx.scale, brkCtx);
    } else {
      this.normalize = normalize;
      this.scale = scale;
    }
  };
  return ScaleCalculator;
}();

function normalize(val, extent) {
  if (extent[1] === extent[0]) {
    return 0.5;
  }
  return (val - extent[0]) / (extent[1] - extent[0]);
}
function scale(val, extent) {
  return val * (extent[1] - extent[0]) + extent[0];
}
function logTransform(base, extent, noClampNegative) {
  var loggedBase = Math.log(base);
  return [
  // log(negative) is NaN, so safe guard here.
  // PENDING: But even getting a -Infinity still does not make sense in extent.
  //  Just keep it as is, getting a NaN to make some previous cases works by coincidence.
  Math.log(noClampNegative ? extent[0] : Math.max(0, extent[0])) / loggedBase, Math.log(noClampNegative ? extent[1] : Math.max(0, extent[1])) / loggedBase];
}

}),
32646: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
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

var color = _visual_tokens_js__rspack_import_0["default"].darkColor;
var backgroundColor = color.background;
var axisCommon = function () {
  return {
    axisLine: {
      lineStyle: {
        color: color.axisLine
      }
    },
    splitLine: {
      lineStyle: {
        color: color.axisSplitLine
      }
    },
    splitArea: {
      areaStyle: {
        color: [color.backgroundTint, color.backgroundTransparent]
      }
    },
    minorSplitLine: {
      lineStyle: {
        color: color.axisMinorSplitLine
      }
    },
    axisLabel: {
      color: color.axisLabel
    },
    axisName: {}
  };
};
var matrixAxis = {
  label: {
    color: color.secondary
  },
  itemStyle: {
    borderColor: color.borderTint
  },
  dividerLineStyle: {
    color: color.border
  }
};
var theme = {
  darkMode: true,
  color: color.theme,
  backgroundColor: backgroundColor,
  axisPointer: {
    lineStyle: {
      color: color.border
    },
    crossStyle: {
      color: color.borderShade
    },
    label: {
      color: color.tertiary
    }
  },
  legend: {
    textStyle: {
      color: color.secondary
    },
    pageTextStyle: {
      color: color.tertiary
    }
  },
  textStyle: {
    color: color.secondary
  },
  title: {
    textStyle: {
      color: color.primary
    },
    subtextStyle: {
      color: color.quaternary
    }
  },
  toolbox: {
    iconStyle: {
      borderColor: color.accent50
    }
  },
  tooltip: {
    backgroundColor: color.neutral20,
    defaultBorderColor: color.border,
    textStyle: {
      color: color.tertiary
    }
  },
  dataZoom: {
    borderColor: color.accent10,
    textStyle: {
      color: color.tertiary
    },
    brushStyle: {
      color: color.backgroundTint
    },
    handleStyle: {
      color: color.neutral00,
      borderColor: color.accent20
    },
    moveHandleStyle: {
      color: color.accent40
    },
    emphasis: {
      handleStyle: {
        borderColor: color.accent50
      }
    },
    dataBackground: {
      lineStyle: {
        color: color.accent30
      },
      areaStyle: {
        color: color.accent20
      }
    },
    selectedDataBackground: {
      lineStyle: {
        color: color.accent50
      },
      areaStyle: {
        color: color.accent30
      }
    }
  },
  visualMap: {
    textStyle: {
      color: color.secondary
    },
    handleStyle: {
      borderColor: color.neutral30
    }
  },
  timeline: {
    lineStyle: {
      color: color.accent10
    },
    label: {
      color: color.tertiary
    },
    controlStyle: {
      color: color.accent30,
      borderColor: color.accent30
    }
  },
  calendar: {
    itemStyle: {
      color: color.neutral00,
      borderColor: color.neutral20
    },
    dayLabel: {
      color: color.tertiary
    },
    monthLabel: {
      color: color.secondary
    },
    yearLabel: {
      color: color.secondary
    }
  },
  matrix: {
    x: matrixAxis,
    y: matrixAxis,
    backgroundColor: {
      borderColor: color.axisLine
    },
    body: {
      itemStyle: {
        borderColor: color.borderTint
      }
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
    color: color.theme
  },
  gauge: {
    title: {
      color: color.secondary
    },
    axisLine: {
      lineStyle: {
        color: [[1, color.neutral05]]
      }
    },
    axisLabel: {
      color: color.axisLabel
    },
    detail: {
      color: color.primary
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
  },
  funnel: {
    itemStyle: {
      borderColor: color.background
    }
  },
  radar: function () {
    var radar = axisCommon();
    radar.axisName = {
      color: color.axisLabel
    };
    radar.axisLine.lineStyle.color = color.neutral20;
    return radar;
  }(),
  treemap: {
    breadcrumb: {
      itemStyle: {
        color: color.neutral20,
        textStyle: {
          color: color.secondary
        }
      },
      emphasis: {
        itemStyle: {
          color: color.neutral30
        }
      }
    }
  },
  sunburst: {
    itemStyle: {
      borderColor: color.background
    }
  },
  map: {
    itemStyle: {
      borderColor: color.border,
      areaColor: color.neutral10
    },
    label: {
      color: color.tertiary
    },
    emphasis: {
      label: {
        color: color.primary
      },
      itemStyle: {
        areaColor: color.highlight
      }
    },
    select: {
      label: {
        color: color.primary
      },
      itemStyle: {
        areaColor: color.highlight
      }
    }
  },
  geo: {
    itemStyle: {
      borderColor: color.border,
      areaColor: color.neutral10
    },
    emphasis: {
      label: {
        color: color.primary
      },
      itemStyle: {
        areaColor: color.highlight
      }
    },
    select: {
      label: {
        color: color.primary
      },
      itemStyle: {
        color: color.highlight
      }
    }
  }
};
theme.categoryAxis.splitLine.show = false;
/* export default */ __webpack_exports__["default"] = (theme);

}),

}]);