/*!
 * vue-admin-better
 * GitHub: https://github.com/zxwk1998/vue-admin-better
 * Gitee: https://gitee.com/chu1204505056/vue-admin-better
 *
 * 版权所有 (c) 2025 vue-admin-better
 * 本项目使用 MIT 许可证
 * 构建时间: 2025-12-22 10:58:04
 */
"use strict";
(self["webpackChunkvue_admin_better"] = self["webpackChunkvue_admin_better"] || []).push([["3238"], {
25357: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  install: function() { return /* binding */ install; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(9774);
// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(2492);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js
var model = __webpack_require__(67698);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Component.js
var Component = __webpack_require__(53075);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/layout.js
var layout = __webpack_require__(88485);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/graphic/GraphicModel.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
function setKeyInfoToNewElOption(resultItem, newElOption) {
  var existElOption = resultItem.existing;
  // Set id and type after id assigned.
  newElOption.id = resultItem.keyInfo.id;
  !newElOption.type && existElOption && (newElOption.type = existElOption.type);
  // Set parent id if not specified
  if (newElOption.parentId == null) {
    var newElParentOption = newElOption.parentOption;
    if (newElParentOption) {
      newElOption.parentId = newElParentOption.id;
    } else if (existElOption) {
      newElOption.parentId = existElOption.parentId;
    }
  }
  // Clear
  newElOption.parentOption = null;
}
function isSetLoc(obj, props) {
  var isSet;
  util.each(props, function (prop) {
    obj[prop] != null && obj[prop] !== 'auto' && (isSet = true);
  });
  return isSet;
}
function mergeNewElOptionToExist(existList, index, newElOption) {
  // Update existing options, for `getOption` feature.
  var newElOptCopy = util.extend({}, newElOption);
  var existElOption = existList[index];
  var $action = newElOption.$action || 'merge';
  if ($action === 'merge') {
    if (existElOption) {
      if (false) { var newType }
      // We can ensure that newElOptCopy and existElOption are not
      // the same object, so `merge` will not change newElOptCopy.
      util.merge(existElOption, newElOptCopy, true);
      // Rigid body, use ignoreSize.
      (0,layout.mergeLayoutParam)(existElOption, newElOptCopy, {
        ignoreSize: true
      });
      // Will be used in render.
      (0,layout.copyLayoutParams)(newElOption, existElOption);
      // Copy transition info to new option so it can be used in the transition.
      // DO IT AFTER merge
      copyTransitionInfo(newElOption, existElOption);
      copyTransitionInfo(newElOption, existElOption, 'shape');
      copyTransitionInfo(newElOption, existElOption, 'style');
      copyTransitionInfo(newElOption, existElOption, 'extra');
      // Copy clipPath
      newElOption.clipPath = existElOption.clipPath;
    } else {
      existList[index] = newElOptCopy;
    }
  } else if ($action === 'replace') {
    existList[index] = newElOptCopy;
  } else if ($action === 'remove') {
    // null will be cleaned later.
    existElOption && (existList[index] = null);
  }
}
var TRANSITION_PROPS_TO_COPY = ['transition', 'enterFrom', 'leaveTo'];
var ROOT_TRANSITION_PROPS_TO_COPY = TRANSITION_PROPS_TO_COPY.concat(['enterAnimation', 'updateAnimation', 'leaveAnimation']);
function copyTransitionInfo(target, source, targetProp) {
  if (targetProp) {
    if (!target[targetProp] && source[targetProp]) {
      // TODO avoid creating this empty object when there is no transition configuration.
      target[targetProp] = {};
    }
    target = target[targetProp];
    source = source[targetProp];
  }
  if (!target || !source) {
    return;
  }
  var props = targetProp ? TRANSITION_PROPS_TO_COPY : ROOT_TRANSITION_PROPS_TO_COPY;
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    if (target[prop] == null && source[prop] != null) {
      target[prop] = source[prop];
    }
  }
}
function setLayoutInfoToExist(existItem, newElOption) {
  if (!existItem) {
    return;
  }
  existItem.hv = newElOption.hv = [
  // Rigid body, don't care about `width`.
  isSetLoc(newElOption, ['left', 'right']),
  // Rigid body, don't care about `height`.
  isSetLoc(newElOption, ['top', 'bottom'])];
  // Give default group size. Otherwise layout error may occur.
  if (existItem.type === 'group') {
    var existingGroupOpt = existItem;
    var newGroupOpt = newElOption;
    existingGroupOpt.width == null && (existingGroupOpt.width = newGroupOpt.width = 0);
    existingGroupOpt.height == null && (existingGroupOpt.height = newGroupOpt.height = 0);
  }
}
var GraphicModel_GraphicComponentModel = /** @class */function (_super) {
  (0,tslib_es6.__extends)(GraphicComponentModel, _super);
  function GraphicComponentModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = GraphicComponentModel.type;
    _this.preventAutoZ = true;
    return _this;
  }
  GraphicComponentModel.prototype.mergeOption = function (option, ecModel) {
    // Prevent default merge to elements
    var elements = this.option.elements;
    this.option.elements = null;
    _super.prototype.mergeOption.call(this, option, ecModel);
    this.option.elements = elements;
  };
  GraphicComponentModel.prototype.optionUpdated = function (newOption, isInit) {
    var thisOption = this.option;
    var newList = (isInit ? thisOption : newOption).elements;
    var existList = thisOption.elements = isInit ? [] : thisOption.elements;
    var flattenedList = [];
    this._flatten(newList, flattenedList, null);
    var mappingResult = model.mappingToExists(existList, flattenedList, 'normalMerge');
    // Clear elOptionsToUpdate
    var elOptionsToUpdate = this._elOptionsToUpdate = [];
    util.each(mappingResult, function (resultItem, index) {
      var newElOption = resultItem.newOption;
      if (false) {}
      if (!newElOption) {
        return;
      }
      elOptionsToUpdate.push(newElOption);
      setKeyInfoToNewElOption(resultItem, newElOption);
      mergeNewElOptionToExist(existList, index, newElOption);
      setLayoutInfoToExist(existList[index], newElOption);
    }, this);
    // Clean
    thisOption.elements = util.filter(existList, function (item) {
      // $action should be volatile, otherwise option gotten from
      // `getOption` will contain unexpected $action.
      item && delete item.$action;
      return item != null;
    });
  };
  /**
   * Convert
   * [{
   *  type: 'group',
   *  id: 'xx',
   *  children: [{type: 'circle'}, {type: 'polygon'}]
   * }]
   * to
   * [
   *  {type: 'group', id: 'xx'},
   *  {type: 'circle', parentId: 'xx'},
   *  {type: 'polygon', parentId: 'xx'}
   * ]
   */
  GraphicComponentModel.prototype._flatten = function (optionList, result, parentOption) {
    util.each(optionList, function (option) {
      if (!option) {
        return;
      }
      if (parentOption) {
        option.parentOption = parentOption;
      }
      result.push(option);
      var children = option.children;
      // here we don't judge if option.type is `group`
      // when new option doesn't provide `type`, it will cause that the children can't be updated.
      if (children && children.length) {
        this._flatten(children, result, option);
      }
      // Deleting for JSON output, and for not affecting group creation.
      delete option.children;
    }, this);
  };
  // FIXME
  // Pass to view using payload? setOption has a payload?
  GraphicComponentModel.prototype.useElOptionsToUpdate = function () {
    var els = this._elOptionsToUpdate;
    // Clear to avoid render duplicately when zooming.
    this._elOptionsToUpdate = null;
    return els;
  };
  GraphicComponentModel.type = 'graphic';
  GraphicComponentModel.defaultOption = {
    elements: []
    // parentId: null
  };
  return GraphicComponentModel;
}(Component["default"]);

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Displayable.js
var Displayable = __webpack_require__(18211);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Group.js
var Group = __webpack_require__(97786);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Image.js
var Image = __webpack_require__(16440);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Text.js
var Text = __webpack_require__(62070);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js
var graphic = __webpack_require__(9412);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(64782);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Component.js
var view_Component = __webpack_require__(95421);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/innerStore.js
var innerStore = __webpack_require__(61022);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/styleCompat.js
var styleCompat = __webpack_require__(37808);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/animation/customGraphicTransition.js
var customGraphicTransition = __webpack_require__(51921);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/animation/basicTransition.js
var basicTransition = __webpack_require__(95086);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/animation/customGraphicKeyframeAnimation.js
var customGraphicKeyframeAnimation = __webpack_require__(55398);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/graphic/GraphicView.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/













var nonShapeGraphicElements = {
  // Reserved but not supported in graphic component.
  path: null,
  compoundPath: null,
  // Supported in graphic component.
  group: Group["default"],
  image: Image["default"],
  text: Text["default"]
};
var inner = model.makeInner();
// ------------------------
// View
// ------------------------
var GraphicView_GraphicComponentView = /** @class */function (_super) {
  (0,tslib_es6.__extends)(GraphicComponentView, _super);
  function GraphicComponentView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = GraphicComponentView.type;
    return _this;
  }
  GraphicComponentView.prototype.init = function () {
    this._elMap = util.createHashMap();
  };
  GraphicComponentView.prototype.render = function (graphicModel, ecModel, api) {
    // Having leveraged between use cases and algorithm complexity, a very
    // simple layout mechanism is used:
    // The size(width/height) can be determined by itself or its parent (not
    // implemented yet), but can not by its children. (Top-down travel)
    // The location(x/y) can be determined by the bounding rect of itself
    // (can including its descendants or not) and the size of its parent.
    // (Bottom-up travel)
    // When `chart.clear()` or `chart.setOption({...}, true)` with the same id,
    // view will be reused.
    if (graphicModel !== this._lastGraphicModel) {
      this._clear();
    }
    this._lastGraphicModel = graphicModel;
    this._updateElements(graphicModel);
    this._relocate(graphicModel, api);
  };
  /**
   * Update graphic elements.
   */
  GraphicComponentView.prototype._updateElements = function (graphicModel) {
    var elOptionsToUpdate = graphicModel.useElOptionsToUpdate();
    if (!elOptionsToUpdate) {
      return;
    }
    var elMap = this._elMap;
    var rootGroup = this.group;
    var globalZ = graphicModel.get('z');
    var globalZLevel = graphicModel.get('zlevel');
    // Top-down tranverse to assign graphic settings to each elements.
    util.each(elOptionsToUpdate, function (elOption) {
      var id = model.convertOptionIdName(elOption.id, null);
      var elExisting = id != null ? elMap.get(id) : null;
      var parentId = model.convertOptionIdName(elOption.parentId, null);
      var targetElParent = parentId != null ? elMap.get(parentId) : rootGroup;
      var elType = elOption.type;
      var elOptionStyle = elOption.style;
      if (elType === 'text' && elOptionStyle) {
        // In top/bottom mode, textVerticalAlign should not be used, which cause
        // inaccurately locating.
        if (elOption.hv && elOption.hv[1]) {
          elOptionStyle.textVerticalAlign = elOptionStyle.textBaseline = elOptionStyle.verticalAlign = elOptionStyle.align = null;
        }
      }
      var textContentOption = elOption.textContent;
      var textConfig = elOption.textConfig;
      if (elOptionStyle && (0,styleCompat.isEC4CompatibleStyle)(elOptionStyle, elType, !!textConfig, !!textContentOption)) {
        var convertResult = (0,styleCompat.convertFromEC4CompatibleStyle)(elOptionStyle, elType, true);
        if (!textConfig && convertResult.textConfig) {
          textConfig = elOption.textConfig = convertResult.textConfig;
        }
        if (!textContentOption && convertResult.textContent) {
          textContentOption = convertResult.textContent;
        }
      }
      // Remove unnecessary props to avoid potential problems.
      var elOptionCleaned = getCleanedElOption(elOption);
      // For simple, do not support parent change, otherwise reorder is needed.
      if (false) {}
      var $action = elOption.$action || 'merge';
      var isMerge = $action === 'merge';
      var isReplace = $action === 'replace';
      if (isMerge) {
        var isInit = !elExisting;
        var el_1 = elExisting;
        if (isInit) {
          el_1 = createEl(id, targetElParent, elOption.type, elMap);
        } else {
          el_1 && (inner(el_1).isNew = false);
          // Stop and restore before update any other attributes.
          (0,customGraphicKeyframeAnimation.stopPreviousKeyframeAnimationAndRestore)(el_1);
        }
        if (el_1) {
          (0,customGraphicTransition.applyUpdateTransition)(el_1, elOptionCleaned, graphicModel, {
            isInit: isInit
          });
          updateCommonAttrs(el_1, elOption, globalZ, globalZLevel);
        }
      } else if (isReplace) {
        removeEl(elExisting, elOption, elMap, graphicModel);
        var el_2 = createEl(id, targetElParent, elOption.type, elMap);
        if (el_2) {
          (0,customGraphicTransition.applyUpdateTransition)(el_2, elOptionCleaned, graphicModel, {
            isInit: true
          });
          updateCommonAttrs(el_2, elOption, globalZ, globalZLevel);
        }
      } else if ($action === 'remove') {
        (0,customGraphicTransition.updateLeaveTo)(elExisting, elOption);
        removeEl(elExisting, elOption, elMap, graphicModel);
      }
      var el = elMap.get(id);
      if (el && textContentOption) {
        if (isMerge) {
          var textContentExisting = el.getTextContent();
          textContentExisting ? textContentExisting.attr(textContentOption) : el.setTextContent(new Text["default"](textContentOption));
        } else if (isReplace) {
          el.setTextContent(new Text["default"](textContentOption));
        }
      }
      if (el) {
        var clipPathOption = elOption.clipPath;
        if (clipPathOption) {
          var clipPathType = clipPathOption.type;
          var clipPath = void 0;
          var isInit = false;
          if (isMerge) {
            var oldClipPath = el.getClipPath();
            isInit = !oldClipPath || inner(oldClipPath).type !== clipPathType;
            clipPath = isInit ? newEl(clipPathType) : oldClipPath;
          } else if (isReplace) {
            isInit = true;
            clipPath = newEl(clipPathType);
          }
          el.setClipPath(clipPath);
          (0,customGraphicTransition.applyUpdateTransition)(clipPath, clipPathOption, graphicModel, {
            isInit: isInit
          });
          (0,customGraphicKeyframeAnimation.applyKeyframeAnimation)(clipPath, clipPathOption.keyframeAnimation, graphicModel);
        }
        var elInner = inner(el);
        el.setTextConfig(textConfig);
        elInner.option = elOption;
        setEventData(el, graphicModel, elOption);
        graphic.setTooltipConfig({
          el: el,
          componentModel: graphicModel,
          itemName: el.name,
          itemTooltipOption: elOption.tooltip
        });
        (0,customGraphicKeyframeAnimation.applyKeyframeAnimation)(el, elOption.keyframeAnimation, graphicModel);
      }
    });
  };
  /**
   * Locate graphic elements.
   */
  GraphicComponentView.prototype._relocate = function (graphicModel, api) {
    var elOptions = graphicModel.option.elements;
    var rootGroup = this.group;
    var elMap = this._elMap;
    var apiWidth = api.getWidth();
    var apiHeight = api.getHeight();
    var xy = ['x', 'y'];
    // Top-down to calculate percentage width/height of group
    for (var i = 0; i < elOptions.length; i++) {
      var elOption = elOptions[i];
      var id = model.convertOptionIdName(elOption.id, null);
      var el = id != null ? elMap.get(id) : null;
      if (!el || !el.isGroup) {
        continue;
      }
      var parentEl = el.parent;
      var isParentRoot = parentEl === rootGroup;
      // Like 'position:absolut' in css, default 0.
      var elInner = inner(el);
      var parentElInner = inner(parentEl);
      elInner.width = (0,number.parsePercent)(elInner.option.width, isParentRoot ? apiWidth : parentElInner.width) || 0;
      elInner.height = (0,number.parsePercent)(elInner.option.height, isParentRoot ? apiHeight : parentElInner.height) || 0;
    }
    // Bottom-up tranvese all elements (consider ec resize) to locate elements.
    for (var i = elOptions.length - 1; i >= 0; i--) {
      var elOption = elOptions[i];
      var id = model.convertOptionIdName(elOption.id, null);
      var el = id != null ? elMap.get(id) : null;
      if (!el) {
        continue;
      }
      var parentEl = el.parent;
      var parentElInner = inner(parentEl);
      var containerInfo = parentEl === rootGroup ? {
        width: apiWidth,
        height: apiHeight
      } : {
        width: parentElInner.width,
        height: parentElInner.height
      };
      // PENDING
      // Currently, when `bounding: 'all'`, the union bounding rect of the group
      // does not include the rect of [0, 0, group.width, group.height], which
      // is probably weird for users. Should we make a break change for it?
      var layoutPos = {};
      var layouted = layout.positionElement(el, elOption, containerInfo, null, {
        hv: elOption.hv,
        boundingMode: elOption.bounding
      }, layoutPos);
      if (!inner(el).isNew && layouted) {
        var transition = elOption.transition;
        var animatePos = {};
        for (var k = 0; k < xy.length; k++) {
          var key = xy[k];
          var val = layoutPos[key];
          if (transition && ((0,customGraphicTransition.isTransitionAll)(transition) || util.indexOf(transition, key) >= 0)) {
            animatePos[key] = val;
          } else {
            el[key] = val;
          }
        }
        (0,basicTransition.updateProps)(el, animatePos, graphicModel, 0);
      } else {
        el.attr(layoutPos);
      }
    }
  };
  /**
   * Clear all elements.
   */
  GraphicComponentView.prototype._clear = function () {
    var _this = this;
    var elMap = this._elMap;
    elMap.each(function (el) {
      removeEl(el, inner(el).option, elMap, _this._lastGraphicModel);
    });
    this._elMap = util.createHashMap();
  };
  GraphicComponentView.prototype.dispose = function () {
    this._clear();
  };
  GraphicComponentView.type = 'graphic';
  return GraphicComponentView;
}(view_Component["default"]);

function newEl(graphicType) {
  if (false) {}
  var Clz = util.hasOwn(nonShapeGraphicElements, graphicType)
  // Those graphic elements are not shapes. They should not be
  // overwritten by users, so do them first.
  ? nonShapeGraphicElements[graphicType] : graphic.getShapeClass(graphicType);
  if (false) {}
  var el = new Clz({});
  inner(el).type = graphicType;
  return el;
}
function createEl(id, targetElParent, graphicType, elMap) {
  var el = newEl(graphicType);
  targetElParent.add(el);
  elMap.set(id, el);
  inner(el).id = id;
  inner(el).isNew = true;
  return el;
}
function removeEl(elExisting, elOption, elMap, graphicModel) {
  var existElParent = elExisting && elExisting.parent;
  if (existElParent) {
    elExisting.type === 'group' && elExisting.traverse(function (el) {
      removeEl(el, elOption, elMap, graphicModel);
    });
    (0,customGraphicTransition.applyLeaveTransition)(elExisting, elOption, graphicModel);
    elMap.removeKey(inner(elExisting).id);
  }
}
function updateCommonAttrs(el, elOption, defaultZ, defaultZlevel) {
  if (!el.isGroup) {
    util.each([['cursor', Displayable["default"].prototype.cursor],
    // We should not support configure z and zlevel in the element level.
    // But seems we didn't limit it previously. So here still use it to avoid breaking.
    ['zlevel', defaultZlevel || 0], ['z', defaultZ || 0],
    // z2 must not be null/undefined, otherwise sort error may occur.
    ['z2', 0]], function (item) {
      var prop = item[0];
      if (util.hasOwn(elOption, prop)) {
        el[prop] = util.retrieve2(elOption[prop], item[1]);
      } else if (el[prop] == null) {
        el[prop] = item[1];
      }
    });
  }
  util.each(util.keys(elOption), function (key) {
    // Assign event handlers.
    // PENDING: should enumerate all event names or use pattern matching?
    if (key.indexOf('on') === 0) {
      var val = elOption[key];
      el[key] = util.isFunction(val) ? val : null;
    }
  });
  if (util.hasOwn(elOption, 'draggable')) {
    el.draggable = elOption.draggable;
  }
  // Other attributes
  elOption.name != null && (el.name = elOption.name);
  elOption.id != null && (el.id = elOption.id);
}
// Remove unnecessary props to avoid potential problems.
function getCleanedElOption(elOption) {
  elOption = util.extend({}, elOption);
  util.each(['id', 'parentId', '$action', 'hv', 'bounding', 'textContent', 'clipPath'].concat(layout.LOCATION_PARAMS), function (name) {
    delete elOption[name];
  });
  return elOption;
}
function setEventData(el, graphicModel, elOption) {
  var eventData = (0,innerStore.getECData)(el).eventData;
  // Simple optimize for large amount of elements that no need event.
  if (!el.silent && !el.ignore && !eventData) {
    eventData = (0,innerStore.getECData)(el).eventData = {
      componentType: 'graphic',
      componentIndex: graphicModel.componentIndex,
      name: el.name
    };
  }
  // `elOption.info` enables user to mount some info on
  // elements and use them in event handlers.
  if (eventData) {
    eventData.info = elOption.info;
  }
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/graphic/install.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  registers.registerComponentModel(GraphicModel_GraphicComponentModel);
  registers.registerComponentView(GraphicView_GraphicComponentView);
  registers.registerPreprocessor(function (option) {
    var graphicOption = option.graphic;
    // Convert
    // {graphic: [{left: 10, type: 'circle'}, ...]}
    // or
    // {graphic: {left: 10, type: 'circle'}}
    // to
    // {graphic: [{elements: [{left: 10, type: 'circle'}, ...]}]}
    if ((0,util.isArray)(graphicOption)) {
      if (!graphicOption[0] || !graphicOption[0].elements) {
        option.graphic = [{
          elements: graphicOption
        }];
      } else {
        // Only one graphic instance can be instantiated. (We don't
        // want that too many views are created in echarts._viewMap.)
        option.graphic = [option.graphic[0]];
      }
    } else if (graphicOption && !graphicOption.elements) {
      option.graphic = [{
        elements: [graphicOption]
      }];
    }
  });
}

}),
12604: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  install: function() { return install; }
});
/* import */ var _installSimple_js__rspack_import_1 = __webpack_require__(77118);
/* import */ var _axisPointer_install_js__rspack_import_2 = __webpack_require__(76679);
/* import */ var _extension_js__rspack_import_0 = __webpack_require__(51799);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  (0,_extension_js__rspack_import_0.use)(_installSimple_js__rspack_import_1.install);
  (0,_extension_js__rspack_import_0.use)(_axisPointer_install_js__rspack_import_2.install);
}

}),
77118: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  install: function() { return install; }
});
/* import */ var tslib__rspack_import_1 = __webpack_require__(2492);
/* import */ var _view_Component_js__rspack_import_0 = __webpack_require__(95421);
/* import */ var _coord_cartesian_GridModel_js__rspack_import_4 = __webpack_require__(87564);
/* import */ var _util_graphic_js__rspack_import_2 = __webpack_require__(52721);
/* import */ var zrender_lib_core_util_js__rspack_import_3 = __webpack_require__(9774);
/* import */ var _coord_cartesian_AxisModel_js__rspack_import_7 = __webpack_require__(52819);
/* import */ var _coord_axisModelCreator_js__rspack_import_6 = __webpack_require__(41381);
/* import */ var _coord_cartesian_Grid_js__rspack_import_5 = __webpack_require__(89542);
/* import */ var _axis_CartesianAxisView_js__rspack_import_8 = __webpack_require__(84332);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/









// Grid view
var GridView = /** @class */function (_super) {
  (0,tslib__rspack_import_1.__extends)(GridView, _super);
  function GridView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = 'grid';
    return _this;
  }
  GridView.prototype.render = function (gridModel, ecModel) {
    this.group.removeAll();
    if (gridModel.get('show')) {
      this.group.add(new _util_graphic_js__rspack_import_2["default"]({
        shape: gridModel.coordinateSystem.getRect(),
        style: (0,zrender_lib_core_util_js__rspack_import_3.defaults)({
          fill: gridModel.get('backgroundColor')
        }, gridModel.getItemStyle()),
        silent: true,
        z2: -1
      }));
    }
  };
  GridView.type = 'grid';
  return GridView;
}(_view_Component_js__rspack_import_0["default"]);
var extraOption = {
  // gridIndex: 0,
  // gridId: '',
  offset: 0
};
function install(registers) {
  registers.registerComponentView(GridView);
  registers.registerComponentModel(_coord_cartesian_GridModel_js__rspack_import_4["default"]);
  registers.registerCoordinateSystem('cartesian2d', _coord_cartesian_Grid_js__rspack_import_5["default"]);
  (0,_coord_axisModelCreator_js__rspack_import_6["default"])(registers, 'x', _coord_cartesian_AxisModel_js__rspack_import_7.CartesianAxisModel, extraOption);
  (0,_coord_axisModelCreator_js__rspack_import_6["default"])(registers, 'y', _coord_cartesian_AxisModel_js__rspack_import_7.CartesianAxisModel, extraOption);
  registers.registerComponentView(_axis_CartesianAxisView_js__rspack_import_8.CartesianXAxisView);
  registers.registerComponentView(_axis_CartesianAxisView_js__rspack_import_8.CartesianYAxisView);
  registers.registerPreprocessor(function (option) {
    // Only create grid when need
    if (option.xAxis && option.yAxis && !option.grid) {
      option.grid = {};
    }
  });
}

}),
84283: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var tslib__rspack_import_2 = __webpack_require__(2492);
/* import */ var zrender_lib_core_util_js__rspack_import_4 = __webpack_require__(9774);
/* import */ var zrender_lib_core_Eventful_js__rspack_import_1 = __webpack_require__(31969);
/* import */ var _util_graphic_js__rspack_import_3 = __webpack_require__(97786);
/* import */ var _util_graphic_js__rspack_import_7 = __webpack_require__(52721);
/* import */ var _util_graphic_js__rspack_import_8 = __webpack_require__(9412);
/* import */ var _util_graphic_js__rspack_import_9 = __webpack_require__(69935);
/* import */ var _util_graphic_js__rspack_import_10 = __webpack_require__(69717);
/* import */ var _interactionMutex_js__rspack_import_5 = __webpack_require__(70132);
/* import */ var _data_DataDiffer_js__rspack_import_6 = __webpack_require__(64747);
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







var BRUSH_PANEL_GLOBAL = true;
var mathMin = Math.min;
var mathMax = Math.max;
var mathPow = Math.pow;
var COVER_Z = 10000;
var UNSELECT_THRESHOLD = 6;
var MIN_RESIZE_LINE_WIDTH = 6;
var MUTEX_RESOURCE_KEY = 'globalPan';
var DIRECTION_MAP = {
  w: [0, 0],
  e: [0, 1],
  n: [1, 0],
  s: [1, 1]
};
var CURSOR_MAP = {
  w: 'ew',
  e: 'ew',
  n: 'ns',
  s: 'ns',
  ne: 'nesw',
  sw: 'nesw',
  nw: 'nwse',
  se: 'nwse'
};
var DEFAULT_BRUSH_OPT = {
  brushStyle: {
    lineWidth: 2,
    stroke: _visual_tokens_js__rspack_import_0["default"].color.backgroundTint,
    fill: _visual_tokens_js__rspack_import_0["default"].color.borderTint
  },
  transformable: true,
  brushMode: 'single',
  removeOnClick: false
};
var baseUID = 0;
/**
 * params:
 *     areas: Array.<Array>, coord relates to container group,
 *                             If no container specified, to global.
 *     opt {
 *         isEnd: boolean,
 *         removeOnClick: boolean
 *     }
 */
var BrushController = /** @class */function (_super) {
  (0,tslib__rspack_import_2.__extends)(BrushController, _super);
  function BrushController(zr) {
    var _this = _super.call(this) || this;
    /**
     * @internal
     */
    _this._track = [];
    /**
     * @internal
     */
    _this._covers = [];
    _this._handlers = {};
    if (false) {}
    _this._zr = zr;
    _this.group = new _util_graphic_js__rspack_import_3["default"]();
    _this._uid = 'brushController_' + baseUID++;
    (0,zrender_lib_core_util_js__rspack_import_4.each)(pointerHandlers, function (handler, eventName) {
      this._handlers[eventName] = (0,zrender_lib_core_util_js__rspack_import_4.bind)(handler, this);
    }, _this);
    return _this;
  }
  /**
   * If set to `false`, select disabled.
   */
  BrushController.prototype.enableBrush = function (brushOption) {
    if (false) {}
    this._brushType && this._doDisableBrush();
    brushOption.brushType && this._doEnableBrush(brushOption);
    return this;
  };
  BrushController.prototype._doEnableBrush = function (brushOption) {
    var zr = this._zr;
    // Consider roam, which takes globalPan too.
    if (!this._enableGlobalPan) {
      _interactionMutex_js__rspack_import_5.take(zr, MUTEX_RESOURCE_KEY, this._uid);
    }
    (0,zrender_lib_core_util_js__rspack_import_4.each)(this._handlers, function (handler, eventName) {
      zr.on(eventName, handler);
    });
    this._brushType = brushOption.brushType;
    this._brushOption = (0,zrender_lib_core_util_js__rspack_import_4.merge)((0,zrender_lib_core_util_js__rspack_import_4.clone)(DEFAULT_BRUSH_OPT), brushOption, true);
  };
  BrushController.prototype._doDisableBrush = function () {
    var zr = this._zr;
    _interactionMutex_js__rspack_import_5.release(zr, MUTEX_RESOURCE_KEY, this._uid);
    (0,zrender_lib_core_util_js__rspack_import_4.each)(this._handlers, function (handler, eventName) {
      zr.off(eventName, handler);
    });
    this._brushType = this._brushOption = null;
  };
  /**
   * @param panelOpts If not pass, it is global brush.
   */
  BrushController.prototype.setPanels = function (panelOpts) {
    if (panelOpts && panelOpts.length) {
      var panels_1 = this._panels = {};
      (0,zrender_lib_core_util_js__rspack_import_4.each)(panelOpts, function (panelOpts) {
        panels_1[panelOpts.panelId] = (0,zrender_lib_core_util_js__rspack_import_4.clone)(panelOpts);
      });
    } else {
      this._panels = null;
    }
    return this;
  };
  BrushController.prototype.mount = function (opt) {
    opt = opt || {};
    if (false) {}
    this._enableGlobalPan = opt.enableGlobalPan;
    var thisGroup = this.group;
    this._zr.add(thisGroup);
    thisGroup.attr({
      x: opt.x || 0,
      y: opt.y || 0,
      rotation: opt.rotation || 0,
      scaleX: opt.scaleX || 1,
      scaleY: opt.scaleY || 1
    });
    this._transform = thisGroup.getLocalTransform();
    return this;
  };
  // eachCover(cb, context): void {
  //     each(this._covers, cb, context);
  // }
  /**
   * Update covers.
   * @param coverConfigList
   *        If coverConfigList is null/undefined, all covers removed.
   */
  BrushController.prototype.updateCovers = function (coverConfigList) {
    if (false) {}
    coverConfigList = (0,zrender_lib_core_util_js__rspack_import_4.map)(coverConfigList, function (coverConfig) {
      return (0,zrender_lib_core_util_js__rspack_import_4.merge)((0,zrender_lib_core_util_js__rspack_import_4.clone)(DEFAULT_BRUSH_OPT), coverConfig, true);
    });
    var tmpIdPrefix = '\0-brush-index-';
    var oldCovers = this._covers;
    var newCovers = this._covers = [];
    var controller = this;
    var creatingCover = this._creatingCover;
    new _data_DataDiffer_js__rspack_import_6["default"](oldCovers, coverConfigList, oldGetKey, getKey).add(addOrUpdate).update(addOrUpdate).remove(remove).execute();
    return this;
    function getKey(brushOption, index) {
      return (brushOption.id != null ? brushOption.id : tmpIdPrefix + index) + '-' + brushOption.brushType;
    }
    function oldGetKey(cover, index) {
      return getKey(cover.__brushOption, index);
    }
    function addOrUpdate(newIndex, oldIndex) {
      var newBrushInternal = coverConfigList[newIndex];
      // Consider setOption in event listener of brushSelect,
      // where updating cover when creating should be forbidden.
      if (oldIndex != null && oldCovers[oldIndex] === creatingCover) {
        newCovers[newIndex] = oldCovers[oldIndex];
      } else {
        var cover = newCovers[newIndex] = oldIndex != null ? (oldCovers[oldIndex].__brushOption = newBrushInternal, oldCovers[oldIndex]) : endCreating(controller, createCover(controller, newBrushInternal));
        updateCoverAfterCreation(controller, cover);
      }
    }
    function remove(oldIndex) {
      if (oldCovers[oldIndex] !== creatingCover) {
        controller.group.remove(oldCovers[oldIndex]);
      }
    }
  };
  BrushController.prototype.unmount = function () {
    if (false) {}
    this.enableBrush(false);
    // container may 'removeAll' outside.
    clearCovers(this);
    this._zr.remove(this.group);
    if (false) {}
    return this;
  };
  BrushController.prototype.dispose = function () {
    this.unmount();
    this.off();
  };
  return BrushController;
}(zrender_lib_core_Eventful_js__rspack_import_1["default"]);
function createCover(controller, brushOption) {
  var cover = coverRenderers[brushOption.brushType].createCover(controller, brushOption);
  cover.__brushOption = brushOption;
  updateZ(cover, brushOption);
  controller.group.add(cover);
  return cover;
}
function endCreating(controller, creatingCover) {
  var coverRenderer = getCoverRenderer(creatingCover);
  if (coverRenderer.endCreating) {
    coverRenderer.endCreating(controller, creatingCover);
    updateZ(creatingCover, creatingCover.__brushOption);
  }
  return creatingCover;
}
function updateCoverShape(controller, cover) {
  var brushOption = cover.__brushOption;
  getCoverRenderer(cover).updateCoverShape(controller, cover, brushOption.range, brushOption);
}
function updateZ(cover, brushOption) {
  var z = brushOption.z;
  z == null && (z = COVER_Z);
  cover.traverse(function (el) {
    el.z = z;
    el.z2 = z; // Consider in given container.
  });
}
function updateCoverAfterCreation(controller, cover) {
  getCoverRenderer(cover).updateCommon(controller, cover);
  updateCoverShape(controller, cover);
}
function getCoverRenderer(cover) {
  return coverRenderers[cover.__brushOption.brushType];
}
// return target panel or `true` (means global panel)
function getPanelByPoint(controller, e, localCursorPoint) {
  var panels = controller._panels;
  if (!panels) {
    return BRUSH_PANEL_GLOBAL; // Global panel
  }
  var panel;
  var transform = controller._transform;
  (0,zrender_lib_core_util_js__rspack_import_4.each)(panels, function (pn) {
    pn.isTargetByCursor(e, localCursorPoint, transform) && (panel = pn);
  });
  return panel;
}
// Return a panel or true
function getPanelByCover(controller, cover) {
  var panels = controller._panels;
  if (!panels) {
    return BRUSH_PANEL_GLOBAL; // Global panel
  }
  var panelId = cover.__brushOption.panelId;
  // User may give cover without coord sys info,
  // which is then treated as global panel.
  return panelId != null ? panels[panelId] : BRUSH_PANEL_GLOBAL;
}
function clearCovers(controller) {
  var covers = controller._covers;
  var originalLength = covers.length;
  (0,zrender_lib_core_util_js__rspack_import_4.each)(covers, function (cover) {
    controller.group.remove(cover);
  }, controller);
  covers.length = 0;
  return !!originalLength;
}
function trigger(controller, opt) {
  var areas = (0,zrender_lib_core_util_js__rspack_import_4.map)(controller._covers, function (cover) {
    var brushOption = cover.__brushOption;
    var range = (0,zrender_lib_core_util_js__rspack_import_4.clone)(brushOption.range);
    return {
      brushType: brushOption.brushType,
      panelId: brushOption.panelId,
      range: range
    };
  });
  controller.trigger('brush', {
    areas: areas,
    isEnd: !!opt.isEnd,
    removeOnClick: !!opt.removeOnClick
  });
}
function shouldShowCover(controller) {
  var track = controller._track;
  if (!track.length) {
    return false;
  }
  var p2 = track[track.length - 1];
  var p1 = track[0];
  var dx = p2[0] - p1[0];
  var dy = p2[1] - p1[1];
  var dist = mathPow(dx * dx + dy * dy, 0.5);
  return dist > UNSELECT_THRESHOLD;
}
function getTrackEnds(track) {
  var tail = track.length - 1;
  tail < 0 && (tail = 0);
  return [track[0], track[tail]];
}
;
function createBaseRectCover(rectRangeConverter, controller, brushOption, edgeNameSequences) {
  var cover = new _util_graphic_js__rspack_import_3["default"]();
  cover.add(new _util_graphic_js__rspack_import_7["default"]({
    name: 'main',
    style: makeStyle(brushOption),
    silent: true,
    draggable: true,
    cursor: 'move',
    drift: (0,zrender_lib_core_util_js__rspack_import_4.curry)(driftRect, rectRangeConverter, controller, cover, ['n', 's', 'w', 'e']),
    ondragend: (0,zrender_lib_core_util_js__rspack_import_4.curry)(trigger, controller, {
      isEnd: true
    })
  }));
  (0,zrender_lib_core_util_js__rspack_import_4.each)(edgeNameSequences, function (nameSequence) {
    cover.add(new _util_graphic_js__rspack_import_7["default"]({
      name: nameSequence.join(''),
      style: {
        opacity: 0
      },
      draggable: true,
      silent: true,
      invisible: true,
      drift: (0,zrender_lib_core_util_js__rspack_import_4.curry)(driftRect, rectRangeConverter, controller, cover, nameSequence),
      ondragend: (0,zrender_lib_core_util_js__rspack_import_4.curry)(trigger, controller, {
        isEnd: true
      })
    }));
  });
  return cover;
}
function updateBaseRect(controller, cover, localRange, brushOption) {
  var lineWidth = brushOption.brushStyle.lineWidth || 0;
  var handleSize = mathMax(lineWidth, MIN_RESIZE_LINE_WIDTH);
  var x = localRange[0][0];
  var y = localRange[1][0];
  var xa = x - lineWidth / 2;
  var ya = y - lineWidth / 2;
  var x2 = localRange[0][1];
  var y2 = localRange[1][1];
  var x2a = x2 - handleSize + lineWidth / 2;
  var y2a = y2 - handleSize + lineWidth / 2;
  var width = x2 - x;
  var height = y2 - y;
  var widtha = width + lineWidth;
  var heighta = height + lineWidth;
  updateRectShape(controller, cover, 'main', x, y, width, height);
  if (brushOption.transformable) {
    updateRectShape(controller, cover, 'w', xa, ya, handleSize, heighta);
    updateRectShape(controller, cover, 'e', x2a, ya, handleSize, heighta);
    updateRectShape(controller, cover, 'n', xa, ya, widtha, handleSize);
    updateRectShape(controller, cover, 's', xa, y2a, widtha, handleSize);
    updateRectShape(controller, cover, 'nw', xa, ya, handleSize, handleSize);
    updateRectShape(controller, cover, 'ne', x2a, ya, handleSize, handleSize);
    updateRectShape(controller, cover, 'sw', xa, y2a, handleSize, handleSize);
    updateRectShape(controller, cover, 'se', x2a, y2a, handleSize, handleSize);
  }
}
function updateCommon(controller, cover) {
  var brushOption = cover.__brushOption;
  var transformable = brushOption.transformable;
  var mainEl = cover.childAt(0);
  mainEl.useStyle(makeStyle(brushOption));
  mainEl.attr({
    silent: !transformable,
    cursor: transformable ? 'move' : 'default'
  });
  (0,zrender_lib_core_util_js__rspack_import_4.each)([['w'], ['e'], ['n'], ['s'], ['s', 'e'], ['s', 'w'], ['n', 'e'], ['n', 'w']], function (nameSequence) {
    var el = cover.childOfName(nameSequence.join(''));
    var globalDir = nameSequence.length === 1 ? getGlobalDirection1(controller, nameSequence[0]) : getGlobalDirection2(controller, nameSequence);
    el && el.attr({
      silent: !transformable,
      invisible: !transformable,
      cursor: transformable ? CURSOR_MAP[globalDir] + '-resize' : null
    });
  });
}
function updateRectShape(controller, cover, name, x, y, w, h) {
  var el = cover.childOfName(name);
  el && el.setShape(pointsToRect(clipByPanel(controller, cover, [[x, y], [x + w, y + h]])));
}
function makeStyle(brushOption) {
  return (0,zrender_lib_core_util_js__rspack_import_4.defaults)({
    strokeNoScale: true
  }, brushOption.brushStyle);
}
function formatRectRange(x, y, x2, y2) {
  var min = [mathMin(x, x2), mathMin(y, y2)];
  var max = [mathMax(x, x2), mathMax(y, y2)];
  return [[min[0], max[0]], [min[1], max[1]] // y range
  ];
}
function getTransform(controller) {
  return _util_graphic_js__rspack_import_8.getTransform(controller.group);
}
function getGlobalDirection1(controller, localDirName) {
  var map = {
    w: 'left',
    e: 'right',
    n: 'top',
    s: 'bottom'
  };
  var inverseMap = {
    left: 'w',
    right: 'e',
    top: 'n',
    bottom: 's'
  };
  var dir = _util_graphic_js__rspack_import_8.transformDirection(map[localDirName], getTransform(controller));
  return inverseMap[dir];
}
function getGlobalDirection2(controller, localDirNameSeq) {
  var globalDir = [getGlobalDirection1(controller, localDirNameSeq[0]), getGlobalDirection1(controller, localDirNameSeq[1])];
  (globalDir[0] === 'e' || globalDir[0] === 'w') && globalDir.reverse();
  return globalDir.join('');
}
function driftRect(rectRangeConverter, controller, cover, dirNameSequence, dx, dy) {
  var brushOption = cover.__brushOption;
  var rectRange = rectRangeConverter.toRectRange(brushOption.range);
  var localDelta = toLocalDelta(controller, dx, dy);
  (0,zrender_lib_core_util_js__rspack_import_4.each)(dirNameSequence, function (dirName) {
    var ind = DIRECTION_MAP[dirName];
    rectRange[ind[0]][ind[1]] += localDelta[ind[0]];
  });
  brushOption.range = rectRangeConverter.fromRectRange(formatRectRange(rectRange[0][0], rectRange[1][0], rectRange[0][1], rectRange[1][1]));
  updateCoverAfterCreation(controller, cover);
  trigger(controller, {
    isEnd: false
  });
}
function driftPolygon(controller, cover, dx, dy) {
  var range = cover.__brushOption.range;
  var localDelta = toLocalDelta(controller, dx, dy);
  (0,zrender_lib_core_util_js__rspack_import_4.each)(range, function (point) {
    point[0] += localDelta[0];
    point[1] += localDelta[1];
  });
  updateCoverAfterCreation(controller, cover);
  trigger(controller, {
    isEnd: false
  });
}
function toLocalDelta(controller, dx, dy) {
  var thisGroup = controller.group;
  var localD = thisGroup.transformCoordToLocal(dx, dy);
  var localZero = thisGroup.transformCoordToLocal(0, 0);
  return [localD[0] - localZero[0], localD[1] - localZero[1]];
}
function clipByPanel(controller, cover, data) {
  var panel = getPanelByCover(controller, cover);
  return panel && panel !== BRUSH_PANEL_GLOBAL ? panel.clipPath(data, controller._transform) : (0,zrender_lib_core_util_js__rspack_import_4.clone)(data);
}
function pointsToRect(points) {
  var xmin = mathMin(points[0][0], points[1][0]);
  var ymin = mathMin(points[0][1], points[1][1]);
  var xmax = mathMax(points[0][0], points[1][0]);
  var ymax = mathMax(points[0][1], points[1][1]);
  return {
    x: xmin,
    y: ymin,
    width: xmax - xmin,
    height: ymax - ymin
  };
}
function resetCursor(controller, e, localCursorPoint) {
  if (
  // Check active
  !controller._brushType
  // resetCursor should be always called when mouse is in zr area,
  // but not called when mouse is out of zr area to avoid bad influence
  // if `mousemove`, `mouseup` are triggered from `document` event.
  || isOutsideZrArea(controller, e.offsetX, e.offsetY)) {
    return;
  }
  var zr = controller._zr;
  var covers = controller._covers;
  var currPanel = getPanelByPoint(controller, e, localCursorPoint);
  // Check whether in covers.
  if (!controller._dragging) {
    for (var i = 0; i < covers.length; i++) {
      var brushOption = covers[i].__brushOption;
      if (currPanel && (currPanel === BRUSH_PANEL_GLOBAL || brushOption.panelId === currPanel.panelId) && coverRenderers[brushOption.brushType].contain(covers[i], localCursorPoint[0], localCursorPoint[1])) {
        // Use cursor style set on cover.
        return;
      }
    }
  }
  currPanel && zr.setCursorStyle('crosshair');
}
function preventDefault(e) {
  var rawE = e.event;
  rawE.preventDefault && rawE.preventDefault();
}
function mainShapeContain(cover, x, y) {
  return cover.childOfName('main').contain(x, y);
}
function updateCoverByMouse(controller, e, localCursorPoint, isEnd) {
  var creatingCover = controller._creatingCover;
  var panel = controller._creatingPanel;
  var thisBrushOption = controller._brushOption;
  var eventParams;
  controller._track.push(localCursorPoint.slice());
  if (shouldShowCover(controller) || creatingCover) {
    if (panel && !creatingCover) {
      thisBrushOption.brushMode === 'single' && clearCovers(controller);
      var brushOption = (0,zrender_lib_core_util_js__rspack_import_4.clone)(thisBrushOption);
      brushOption.brushType = determineBrushType(brushOption.brushType, panel);
      brushOption.panelId = panel === BRUSH_PANEL_GLOBAL ? null : panel.panelId;
      creatingCover = controller._creatingCover = createCover(controller, brushOption);
      controller._covers.push(creatingCover);
    }
    if (creatingCover) {
      var coverRenderer = coverRenderers[determineBrushType(controller._brushType, panel)];
      var coverBrushOption = creatingCover.__brushOption;
      coverBrushOption.range = coverRenderer.getCreatingRange(clipByPanel(controller, creatingCover, controller._track));
      if (isEnd) {
        endCreating(controller, creatingCover);
        coverRenderer.updateCommon(controller, creatingCover);
      }
      updateCoverShape(controller, creatingCover);
      eventParams = {
        isEnd: isEnd
      };
    }
  } else if (isEnd && thisBrushOption.brushMode === 'single' && thisBrushOption.removeOnClick) {
    // Help user to remove covers easily, only by a tiny drag, in 'single' mode.
    // But a single click do not clear covers, because user may have casual
    // clicks (for example, click on other component and do not expect covers
    // disappear).
    // Only some cover removed, trigger action, but not every click trigger action.
    if (getPanelByPoint(controller, e, localCursorPoint) && clearCovers(controller)) {
      eventParams = {
        isEnd: isEnd,
        removeOnClick: true
      };
    }
  }
  return eventParams;
}
function determineBrushType(brushType, panel) {
  if (brushType === 'auto') {
    if (false) {}
    return panel.defaultBrushType;
  }
  return brushType;
}
var pointerHandlers = {
  mousedown: function (e) {
    if (this._dragging) {
      // In case some browser do not support globalOut,
      // and release mouse out side the browser.
      handleDragEnd(this, e);
    } else if (!e.target || !e.target.draggable) {
      preventDefault(e);
      var localCursorPoint = this.group.transformCoordToLocal(e.offsetX, e.offsetY);
      this._creatingCover = null;
      var panel = this._creatingPanel = getPanelByPoint(this, e, localCursorPoint);
      if (panel) {
        this._dragging = true;
        this._track = [localCursorPoint.slice()];
      }
    }
  },
  mousemove: function (e) {
    var x = e.offsetX;
    var y = e.offsetY;
    var localCursorPoint = this.group.transformCoordToLocal(x, y);
    resetCursor(this, e, localCursorPoint);
    if (this._dragging) {
      preventDefault(e);
      var eventParams = updateCoverByMouse(this, e, localCursorPoint, false);
      eventParams && trigger(this, eventParams);
    }
  },
  mouseup: function (e) {
    handleDragEnd(this, e);
  }
};
function handleDragEnd(controller, e) {
  if (controller._dragging) {
    preventDefault(e);
    var x = e.offsetX;
    var y = e.offsetY;
    var localCursorPoint = controller.group.transformCoordToLocal(x, y);
    var eventParams = updateCoverByMouse(controller, e, localCursorPoint, true);
    controller._dragging = false;
    controller._track = [];
    controller._creatingCover = null;
    // trigger event should be at final, after procedure will be nested.
    eventParams && trigger(controller, eventParams);
  }
}
function isOutsideZrArea(controller, x, y) {
  var zr = controller._zr;
  return x < 0 || x > zr.getWidth() || y < 0 || y > zr.getHeight();
}
/**
 * key: brushType
 */
var coverRenderers = {
  lineX: getLineRenderer(0),
  lineY: getLineRenderer(1),
  rect: {
    createCover: function (controller, brushOption) {
      function returnInput(range) {
        return range;
      }
      return createBaseRectCover({
        toRectRange: returnInput,
        fromRectRange: returnInput
      }, controller, brushOption, [['w'], ['e'], ['n'], ['s'], ['s', 'e'], ['s', 'w'], ['n', 'e'], ['n', 'w']]);
    },
    getCreatingRange: function (localTrack) {
      var ends = getTrackEnds(localTrack);
      return formatRectRange(ends[1][0], ends[1][1], ends[0][0], ends[0][1]);
    },
    updateCoverShape: function (controller, cover, localRange, brushOption) {
      updateBaseRect(controller, cover, localRange, brushOption);
    },
    updateCommon: updateCommon,
    contain: mainShapeContain
  },
  polygon: {
    createCover: function (controller, brushOption) {
      var cover = new _util_graphic_js__rspack_import_3["default"]();
      // Do not use graphic.Polygon because graphic.Polyline do not close the
      // border of the shape when drawing, which is a better experience for user.
      cover.add(new _util_graphic_js__rspack_import_9["default"]({
        name: 'main',
        style: makeStyle(brushOption),
        silent: true
      }));
      return cover;
    },
    getCreatingRange: function (localTrack) {
      return localTrack;
    },
    endCreating: function (controller, cover) {
      cover.remove(cover.childAt(0));
      // Use graphic.Polygon close the shape.
      cover.add(new _util_graphic_js__rspack_import_10["default"]({
        name: 'main',
        draggable: true,
        drift: (0,zrender_lib_core_util_js__rspack_import_4.curry)(driftPolygon, controller, cover),
        ondragend: (0,zrender_lib_core_util_js__rspack_import_4.curry)(trigger, controller, {
          isEnd: true
        })
      }));
    },
    updateCoverShape: function (controller, cover, localRange, brushOption) {
      cover.childAt(0).setShape({
        points: clipByPanel(controller, cover, localRange)
      });
    },
    updateCommon: updateCommon,
    contain: mainShapeContain
  }
};
function getLineRenderer(xyIndex) {
  return {
    createCover: function (controller, brushOption) {
      return createBaseRectCover({
        toRectRange: function (range) {
          var rectRange = [range, [0, 100]];
          xyIndex && rectRange.reverse();
          return rectRange;
        },
        fromRectRange: function (rectRange) {
          return rectRange[xyIndex];
        }
      }, controller, brushOption, [[['w'], ['e']], [['n'], ['s']]][xyIndex]);
    },
    getCreatingRange: function (localTrack) {
      var ends = getTrackEnds(localTrack);
      var min = mathMin(ends[0][xyIndex], ends[1][xyIndex]);
      var max = mathMax(ends[0][xyIndex], ends[1][xyIndex]);
      return [min, max];
    },
    updateCoverShape: function (controller, cover, localRange, brushOption) {
      var otherExtent;
      // If brushWidth not specified, fit the panel.
      var panel = getPanelByCover(controller, cover);
      if (panel !== BRUSH_PANEL_GLOBAL && panel.getLinearBrushOtherExtent) {
        otherExtent = panel.getLinearBrushOtherExtent(xyIndex);
      } else {
        var zr = controller._zr;
        otherExtent = [0, [zr.getWidth(), zr.getHeight()][1 - xyIndex]];
      }
      var rectRange = [localRange, otherExtent];
      xyIndex && rectRange.reverse();
      updateBaseRect(controller, cover, rectRange, brushOption);
    },
    updateCommon: updateCommon,
    contain: mainShapeContain
  };
}
/* export default */ __webpack_exports__["default"] = (BrushController);

}),
33979: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var zrender_lib_core_util_js__rspack_import_0 = __webpack_require__(9774);
/* import */ var _util_graphic_js__rspack_import_3 = __webpack_require__(9412);
/* import */ var _brushHelper_js__rspack_import_1 = __webpack_require__(44307);
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




// FIXME
// how to genarialize to more coordinate systems.
var INCLUDE_FINDER_MAIN_TYPES = ['grid', 'xAxis', 'yAxis', 'geo', 'graph', 'polar', 'radiusAxis', 'angleAxis', 'bmap'];
var BrushTargetManager = /** @class */function () {
  /**
   * @param finder contains Index/Id/Name of xAxis/yAxis/geo/grid
   *        Each can be {number|Array.<number>}. like: {xAxisIndex: [3, 4]}
   * @param opt.include include coordinate system types.
   */
  function BrushTargetManager(finder, ecModel, opt) {
    var _this = this;
    this._targetInfoList = [];
    var foundCpts = parseFinder(ecModel, finder);
    (0,zrender_lib_core_util_js__rspack_import_0.each)(targetInfoBuilders, function (builder, type) {
      if (!opt || !opt.include || (0,zrender_lib_core_util_js__rspack_import_0.indexOf)(opt.include, type) >= 0) {
        builder(foundCpts, _this._targetInfoList);
      }
    });
  }
  BrushTargetManager.prototype.setOutputRanges = function (areas, ecModel) {
    this.matchOutputRanges(areas, ecModel, function (area, coordRange, coordSys) {
      (area.coordRanges || (area.coordRanges = [])).push(coordRange);
      // area.coordRange is the first of area.coordRanges
      if (!area.coordRange) {
        area.coordRange = coordRange;
        // In 'category' axis, coord to pixel is not reversible, so we can not
        // rebuild range by coordRange accrately, which may bring trouble when
        // brushing only one item. So we use __rangeOffset to rebuilding range
        // by coordRange. And this it only used in brush component so it is no
        // need to be adapted to coordRanges.
        var result = coordConvert[area.brushType](0, coordSys, coordRange);
        area.__rangeOffset = {
          offset: diffProcessor[area.brushType](result.values, area.range, [1, 1]),
          xyMinMax: result.xyMinMax
        };
      }
    });
    return areas;
  };
  BrushTargetManager.prototype.matchOutputRanges = function (areas, ecModel, cb) {
    (0,zrender_lib_core_util_js__rspack_import_0.each)(areas, function (area) {
      var targetInfo = this.findTargetInfo(area, ecModel);
      if (targetInfo && targetInfo !== true) {
        (0,zrender_lib_core_util_js__rspack_import_0.each)(targetInfo.coordSyses, function (coordSys) {
          var result = coordConvert[area.brushType](1, coordSys, area.range, true);
          cb(area, result.values, coordSys, ecModel);
        });
      }
    }, this);
  };
  /**
   * the `areas` is `BrushModel.areas`.
   * Called in layout stage.
   * convert `area.coordRange` to global range and set panelId to `area.range`.
   */
  BrushTargetManager.prototype.setInputRanges = function (areas, ecModel) {
    (0,zrender_lib_core_util_js__rspack_import_0.each)(areas, function (area) {
      var targetInfo = this.findTargetInfo(area, ecModel);
      if (false) {}
      area.range = area.range || [];
      // convert coordRange to global range and set panelId.
      if (targetInfo && targetInfo !== true) {
        area.panelId = targetInfo.panelId;
        // (1) area.range should always be calculate from coordRange but does
        // not keep its original value, for the sake of the dataZoom scenario,
        // where area.coordRange remains unchanged but area.range may be changed.
        // (2) Only support converting one coordRange to pixel range in brush
        // component. So do not consider `coordRanges`.
        // (3) About __rangeOffset, see comment above.
        var result = coordConvert[area.brushType](0, targetInfo.coordSys, area.coordRange);
        var rangeOffset = area.__rangeOffset;
        area.range = rangeOffset ? diffProcessor[area.brushType](result.values, rangeOffset.offset, getScales(result.xyMinMax, rangeOffset.xyMinMax)) : result.values;
      }
    }, this);
  };
  BrushTargetManager.prototype.makePanelOpts = function (api, getDefaultBrushType) {
    return (0,zrender_lib_core_util_js__rspack_import_0.map)(this._targetInfoList, function (targetInfo) {
      var rect = targetInfo.getPanelRect();
      return {
        panelId: targetInfo.panelId,
        defaultBrushType: getDefaultBrushType ? getDefaultBrushType(targetInfo) : null,
        clipPath: _brushHelper_js__rspack_import_1.makeRectPanelClipPath(rect),
        isTargetByCursor: _brushHelper_js__rspack_import_1.makeRectIsTargetByCursor(rect, api, targetInfo.coordSysModel),
        getLinearBrushOtherExtent: _brushHelper_js__rspack_import_1.makeLinearBrushOtherExtent(rect)
      };
    });
  };
  BrushTargetManager.prototype.controlSeries = function (area, seriesModel, ecModel) {
    // Check whether area is bound in coord, and series do not belong to that coord.
    // If do not do this check, some brush (like lineX) will controll all axes.
    var targetInfo = this.findTargetInfo(area, ecModel);
    return targetInfo === true || targetInfo && (0,zrender_lib_core_util_js__rspack_import_0.indexOf)(targetInfo.coordSyses, seriesModel.coordinateSystem) >= 0;
  };
  /**
   * If return Object, a coord found.
   * If return true, global found.
   * Otherwise nothing found.
   */
  BrushTargetManager.prototype.findTargetInfo = function (area, ecModel) {
    var targetInfoList = this._targetInfoList;
    var foundCpts = parseFinder(ecModel, area);
    for (var i = 0; i < targetInfoList.length; i++) {
      var targetInfo = targetInfoList[i];
      var areaPanelId = area.panelId;
      if (areaPanelId) {
        if (targetInfo.panelId === areaPanelId) {
          return targetInfo;
        }
      } else {
        for (var j = 0; j < targetInfoMatchers.length; j++) {
          if (targetInfoMatchers[j](foundCpts, targetInfo)) {
            return targetInfo;
          }
        }
      }
    }
    return true;
  };
  return BrushTargetManager;
}();
function formatMinMax(minMax) {
  minMax[0] > minMax[1] && minMax.reverse();
  return minMax;
}
function parseFinder(ecModel, finder) {
  return (0,_util_model_js__rspack_import_2.parseFinder)(ecModel, finder, {
    includeMainTypes: INCLUDE_FINDER_MAIN_TYPES
  });
}
var targetInfoBuilders = {
  grid: function (foundCpts, targetInfoList) {
    var xAxisModels = foundCpts.xAxisModels;
    var yAxisModels = foundCpts.yAxisModels;
    var gridModels = foundCpts.gridModels;
    // Remove duplicated.
    var gridModelMap = (0,zrender_lib_core_util_js__rspack_import_0.createHashMap)();
    var xAxesHas = {};
    var yAxesHas = {};
    if (!xAxisModels && !yAxisModels && !gridModels) {
      return;
    }
    (0,zrender_lib_core_util_js__rspack_import_0.each)(xAxisModels, function (axisModel) {
      var gridModel = axisModel.axis.grid.model;
      gridModelMap.set(gridModel.id, gridModel);
      xAxesHas[gridModel.id] = true;
    });
    (0,zrender_lib_core_util_js__rspack_import_0.each)(yAxisModels, function (axisModel) {
      var gridModel = axisModel.axis.grid.model;
      gridModelMap.set(gridModel.id, gridModel);
      yAxesHas[gridModel.id] = true;
    });
    (0,zrender_lib_core_util_js__rspack_import_0.each)(gridModels, function (gridModel) {
      gridModelMap.set(gridModel.id, gridModel);
      xAxesHas[gridModel.id] = true;
      yAxesHas[gridModel.id] = true;
    });
    gridModelMap.each(function (gridModel) {
      var grid = gridModel.coordinateSystem;
      var cartesians = [];
      (0,zrender_lib_core_util_js__rspack_import_0.each)(grid.getCartesians(), function (cartesian, index) {
        if ((0,zrender_lib_core_util_js__rspack_import_0.indexOf)(xAxisModels, cartesian.getAxis('x').model) >= 0 || (0,zrender_lib_core_util_js__rspack_import_0.indexOf)(yAxisModels, cartesian.getAxis('y').model) >= 0) {
          cartesians.push(cartesian);
        }
      });
      targetInfoList.push({
        panelId: 'grid--' + gridModel.id,
        gridModel: gridModel,
        coordSysModel: gridModel,
        // Use the first one as the representitive coordSys.
        coordSys: cartesians[0],
        coordSyses: cartesians,
        getPanelRect: panelRectBuilders.grid,
        xAxisDeclared: xAxesHas[gridModel.id],
        yAxisDeclared: yAxesHas[gridModel.id]
      });
    });
  },
  geo: function (foundCpts, targetInfoList) {
    (0,zrender_lib_core_util_js__rspack_import_0.each)(foundCpts.geoModels, function (geoModel) {
      var coordSys = geoModel.coordinateSystem;
      targetInfoList.push({
        panelId: 'geo--' + geoModel.id,
        geoModel: geoModel,
        coordSysModel: geoModel,
        coordSys: coordSys,
        coordSyses: [coordSys],
        getPanelRect: panelRectBuilders.geo
      });
    });
  }
};
var targetInfoMatchers = [
// grid
function (foundCpts, targetInfo) {
  var xAxisModel = foundCpts.xAxisModel;
  var yAxisModel = foundCpts.yAxisModel;
  var gridModel = foundCpts.gridModel;
  !gridModel && xAxisModel && (gridModel = xAxisModel.axis.grid.model);
  !gridModel && yAxisModel && (gridModel = yAxisModel.axis.grid.model);
  return gridModel && gridModel === targetInfo.gridModel;
},
// geo
function (foundCpts, targetInfo) {
  var geoModel = foundCpts.geoModel;
  return geoModel && geoModel === targetInfo.geoModel;
}];
var panelRectBuilders = {
  grid: function () {
    // grid is not Transformable.
    return this.coordSys.master.getRect().clone();
  },
  geo: function () {
    var coordSys = this.coordSys;
    var rect = coordSys.getBoundingRect().clone();
    // geo roam and zoom transform
    rect.applyTransform(_util_graphic_js__rspack_import_3.getTransform(coordSys));
    return rect;
  }
};
var coordConvert = {
  lineX: (0,zrender_lib_core_util_js__rspack_import_0.curry)(axisConvert, 0),
  lineY: (0,zrender_lib_core_util_js__rspack_import_0.curry)(axisConvert, 1),
  rect: function (to, coordSys, rangeOrCoordRange, clamp) {
    var xminymin = to ? coordSys.pointToData([rangeOrCoordRange[0][0], rangeOrCoordRange[1][0]], clamp) : coordSys.dataToPoint([rangeOrCoordRange[0][0], rangeOrCoordRange[1][0]], clamp);
    var xmaxymax = to ? coordSys.pointToData([rangeOrCoordRange[0][1], rangeOrCoordRange[1][1]], clamp) : coordSys.dataToPoint([rangeOrCoordRange[0][1], rangeOrCoordRange[1][1]], clamp);
    var values = [formatMinMax([xminymin[0], xmaxymax[0]]), formatMinMax([xminymin[1], xmaxymax[1]])];
    return {
      values: values,
      xyMinMax: values
    };
  },
  polygon: function (to, coordSys, rangeOrCoordRange, clamp) {
    var xyMinMax = [[Infinity, -Infinity], [Infinity, -Infinity]];
    var values = (0,zrender_lib_core_util_js__rspack_import_0.map)(rangeOrCoordRange, function (item) {
      var p = to ? coordSys.pointToData(item, clamp) : coordSys.dataToPoint(item, clamp);
      xyMinMax[0][0] = Math.min(xyMinMax[0][0], p[0]);
      xyMinMax[1][0] = Math.min(xyMinMax[1][0], p[1]);
      xyMinMax[0][1] = Math.max(xyMinMax[0][1], p[0]);
      xyMinMax[1][1] = Math.max(xyMinMax[1][1], p[1]);
      return p;
    });
    return {
      values: values,
      xyMinMax: xyMinMax
    };
  }
};
function axisConvert(axisNameIndex, to, coordSys, rangeOrCoordRange) {
  if (false) {}
  var axis = coordSys.getAxis(['x', 'y'][axisNameIndex]);
  var values = formatMinMax((0,zrender_lib_core_util_js__rspack_import_0.map)([0, 1], function (i) {
    return to ? axis.coordToData(axis.toLocalCoord(rangeOrCoordRange[i]), true) : axis.toGlobalCoord(axis.dataToCoord(rangeOrCoordRange[i]));
  }));
  var xyMinMax = [];
  xyMinMax[axisNameIndex] = values;
  xyMinMax[1 - axisNameIndex] = [NaN, NaN];
  return {
    values: values,
    xyMinMax: xyMinMax
  };
}
var diffProcessor = {
  lineX: (0,zrender_lib_core_util_js__rspack_import_0.curry)(axisDiffProcessor, 0),
  lineY: (0,zrender_lib_core_util_js__rspack_import_0.curry)(axisDiffProcessor, 1),
  rect: function (values, refer, scales) {
    return [[values[0][0] - scales[0] * refer[0][0], values[0][1] - scales[0] * refer[0][1]], [values[1][0] - scales[1] * refer[1][0], values[1][1] - scales[1] * refer[1][1]]];
  },
  polygon: function (values, refer, scales) {
    return (0,zrender_lib_core_util_js__rspack_import_0.map)(values, function (item, idx) {
      return [item[0] - scales[0] * refer[idx][0], item[1] - scales[1] * refer[idx][1]];
    });
  }
};
function axisDiffProcessor(axisNameIndex, values, refer, scales) {
  return [values[0] - scales[axisNameIndex] * refer[0], values[1] - scales[axisNameIndex] * refer[1]];
}
// We have to process scale caused by dataZoom manually,
// although it might be not accurate.
// Return [0~1, 0~1]
function getScales(xyMinMaxCurr, xyMinMaxOrigin) {
  var sizeCurr = getSize(xyMinMaxCurr);
  var sizeOrigin = getSize(xyMinMaxOrigin);
  var scales = [sizeCurr[0] / sizeOrigin[0], sizeCurr[1] / sizeOrigin[1]];
  isNaN(scales[0]) && (scales[0] = 1);
  isNaN(scales[1]) && (scales[1] = 1);
  return scales;
}
function getSize(xyMinMax) {
  return xyMinMax ? [xyMinMax[0][1] - xyMinMax[0][0], xyMinMax[1][1] - xyMinMax[1][0]] : [NaN, NaN];
}
/* export default */ __webpack_exports__["default"] = (BrushTargetManager);

}),
90371: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var zrender_lib_core_util_js__rspack_import_0 = __webpack_require__(9774);
/* import */ var _RoamController_js__rspack_import_4 = __webpack_require__(93874);
/* import */ var _component_helper_roamHelper_js__rspack_import_13 = __webpack_require__(5686);
/* import */ var _util_graphic_js__rspack_import_2 = __webpack_require__(97786);
/* import */ var _util_graphic_js__rspack_import_5 = __webpack_require__(52721);
/* import */ var _util_graphic_js__rspack_import_6 = __webpack_require__(95086);
/* import */ var _util_graphic_js__rspack_import_7 = __webpack_require__(69717);
/* import */ var _util_graphic_js__rspack_import_8 = __webpack_require__(69935);
/* import */ var _util_graphic_js__rspack_import_9 = __webpack_require__(93859);
/* import */ var _util_graphic_js__rspack_import_17 = __webpack_require__(9412);
/* import */ var _util_states_js__rspack_import_11 = __webpack_require__(72825);
/* import */ var _coord_geo_geoSourceManager_js__rspack_import_12 = __webpack_require__(72976);
/* import */ var _util_component_js__rspack_import_3 = __webpack_require__(98320);
/* import */ var _label_labelStyle_js__rspack_import_15 = __webpack_require__(51160);
/* import */ var _util_innerStore_js__rspack_import_16 = __webpack_require__(61022);
/* import */ var _util_decal_js__rspack_import_14 = __webpack_require__(46874);
/* import */ var zrender_lib_graphic_Displayable_js__rspack_import_10 = __webpack_require__(18211);
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
 * Only these tags enable use `itemStyle` if they are named in SVG.
 * Other tags like <text> <tspan> <image> might not suitable for `itemStyle`.
 * They will not be considered to be styled until some requirements come.
 */
var OPTION_STYLE_ENABLED_TAGS = ['rect', 'circle', 'line', 'ellipse', 'polygon', 'polyline', 'path'];
var OPTION_STYLE_ENABLED_TAG_MAP = zrender_lib_core_util_js__rspack_import_0.createHashMap(OPTION_STYLE_ENABLED_TAGS);
var STATE_TRIGGER_TAG_MAP = zrender_lib_core_util_js__rspack_import_0.createHashMap(OPTION_STYLE_ENABLED_TAGS.concat(['g']));
var LABEL_HOST_MAP = zrender_lib_core_util_js__rspack_import_0.createHashMap(OPTION_STYLE_ENABLED_TAGS.concat(['g']));
var mapLabelRaw = (0,_util_model_js__rspack_import_1.makeInner)();
function getFixedItemStyle(model) {
  var itemStyle = model.getItemStyle();
  var areaColor = model.get('areaColor');
  // If user want the color not to be changed when hover,
  // they should both set areaColor and color to be null.
  if (areaColor != null) {
    itemStyle.fill = areaColor;
  }
  return itemStyle;
}
// Only stroke can be used for line.
// Using fill in style if stroke not exits.
// TODO Not sure yet. Perhaps a separate `lineStyle`?
function fixLineStyle(styleHost) {
  var style = styleHost.style;
  if (style) {
    style.stroke = style.stroke || style.fill;
    style.fill = null;
  }
}
var MapDraw = /** @class */function () {
  function MapDraw(api) {
    var group = this.group = new _util_graphic_js__rspack_import_2["default"]();
    var transformGroup = this._transformGroup = new _util_graphic_js__rspack_import_2["default"]();
    group.add(transformGroup);
    this.uid = (0,_util_component_js__rspack_import_3.getUID)('ec_map_draw');
    this._controller = new _RoamController_js__rspack_import_4["default"](api.getZr());
    this._controllerHost = {
      target: transformGroup
    };
    transformGroup.add(this._regionsGroup = new _util_graphic_js__rspack_import_2["default"]());
    transformGroup.add(this._svgGroup = new _util_graphic_js__rspack_import_2["default"]());
  }
  MapDraw.prototype.draw = function (mapOrGeoModel, ecModel, api, fromView, payload) {
    var isGeo = mapOrGeoModel.mainType === 'geo';
    // Map series has data. GEO model that controlled by map series
    // will be assigned with map data. Other GEO model has no data.
    var data = mapOrGeoModel.getData && mapOrGeoModel.getData();
    isGeo && ecModel.eachComponent({
      mainType: 'series',
      subType: 'map'
    }, function (mapSeries) {
      if (!data && mapSeries.getHostGeoModel() === mapOrGeoModel) {
        data = mapSeries.getData();
      }
    });
    var geo = mapOrGeoModel.coordinateSystem;
    var regionsGroup = this._regionsGroup;
    var transformGroup = this._transformGroup;
    var transformInfo = geo.getTransformInfo();
    var transformInfoRaw = transformInfo.raw;
    var transformInfoRoam = transformInfo.roam;
    // No animation when first draw or in action
    var isFirstDraw = !regionsGroup.childAt(0) || payload;
    var clip = mapOrGeoModel.getShallow('clip', true);
    var clipRect;
    if (clip) {
      clipRect = geo.getViewRect().clone();
      this.group.setClipPath(new _util_graphic_js__rspack_import_5["default"]({
        shape: clipRect.clone()
      }));
    } else {
      this.group.removeClipPath();
    }
    if (isFirstDraw) {
      transformGroup.x = transformInfoRoam.x;
      transformGroup.y = transformInfoRoam.y;
      transformGroup.scaleX = transformInfoRoam.scaleX;
      transformGroup.scaleY = transformInfoRoam.scaleY;
      transformGroup.dirty();
    } else {
      _util_graphic_js__rspack_import_6.updateProps(transformGroup, transformInfoRoam, mapOrGeoModel);
    }
    var isVisualEncodedByVisualMap = data && data.getVisual('visualMeta') && data.getVisual('visualMeta').length > 0;
    var viewBuildCtx = {
      api: api,
      geo: geo,
      mapOrGeoModel: mapOrGeoModel,
      data: data,
      isVisualEncodedByVisualMap: isVisualEncodedByVisualMap,
      isGeo: isGeo,
      transformInfoRaw: transformInfoRaw
    };
    if (geo.resourceType === 'geoJSON') {
      this._buildGeoJSON(viewBuildCtx);
    } else if (geo.resourceType === 'geoSVG') {
      this._buildSVG(viewBuildCtx);
    }
    this._updateController(mapOrGeoModel, clipRect, ecModel, api);
    this._updateMapSelectHandler(mapOrGeoModel, regionsGroup, api, fromView);
  };
  MapDraw.prototype._buildGeoJSON = function (viewBuildCtx) {
    var regionsGroupByName = this._regionsGroupByName = zrender_lib_core_util_js__rspack_import_0.createHashMap();
    var regionsInfoByName = zrender_lib_core_util_js__rspack_import_0.createHashMap();
    var regionsGroup = this._regionsGroup;
    var transformInfoRaw = viewBuildCtx.transformInfoRaw;
    var mapOrGeoModel = viewBuildCtx.mapOrGeoModel;
    var data = viewBuildCtx.data;
    var projection = viewBuildCtx.geo.projection;
    var projectionStream = projection && projection.stream;
    function transformPoint(point, project) {
      if (project) {
        // projection may return null point.
        point = project(point);
      }
      return point && [point[0] * transformInfoRaw.scaleX + transformInfoRaw.x, point[1] * transformInfoRaw.scaleY + transformInfoRaw.y];
    }
    ;
    function transformPolygonPoints(inPoints) {
      var outPoints = [];
      // If projectionStream is provided. Use it instead of single point project.
      var project = !projectionStream && projection && projection.project;
      for (var i = 0; i < inPoints.length; ++i) {
        var newPt = transformPoint(inPoints[i], project);
        newPt && outPoints.push(newPt);
      }
      return outPoints;
    }
    function getPolyShape(points) {
      return {
        shape: {
          points: transformPolygonPoints(points)
        }
      };
    }
    regionsGroup.removeAll();
    // Only when the resource is GeoJSON, there is `geo.regions`.
    zrender_lib_core_util_js__rspack_import_0.each(viewBuildCtx.geo.regions, function (region) {
      var regionName = region.name;
      // Consider in GeoJson properties.name may be duplicated, for example,
      // there is multiple region named "United Kindom" or "France" (so many
      // colonies). And it is not appropriate to merge them in geo, which
      // will make them share the same label and bring trouble in label
      // location calculation.
      var regionGroup = regionsGroupByName.get(regionName);
      var _a = regionsInfoByName.get(regionName) || {},
        dataIdx = _a.dataIdx,
        regionModel = _a.regionModel;
      if (!regionGroup) {
        regionGroup = regionsGroupByName.set(regionName, new _util_graphic_js__rspack_import_2["default"]());
        regionsGroup.add(regionGroup);
        dataIdx = data ? data.indexOfName(regionName) : null;
        regionModel = viewBuildCtx.isGeo ? mapOrGeoModel.getRegionModel(regionName) : data ? data.getItemModel(dataIdx) : null;
        var silent = regionModel.get('silent', true);
        silent != null && (regionGroup.silent = silent);
        regionsInfoByName.set(regionName, {
          dataIdx: dataIdx,
          regionModel: regionModel
        });
      }
      var polygonSubpaths = [];
      var polylineSubpaths = [];
      zrender_lib_core_util_js__rspack_import_0.each(region.geometries, function (geometry) {
        // Polygon and MultiPolygon
        if (geometry.type === 'polygon') {
          var polys = [geometry.exterior].concat(geometry.interiors || []);
          if (projectionStream) {
            polys = projectPolys(polys, projectionStream);
          }
          zrender_lib_core_util_js__rspack_import_0.each(polys, function (poly) {
            polygonSubpaths.push(new _util_graphic_js__rspack_import_7["default"](getPolyShape(poly)));
          });
        }
        // LineString and MultiLineString
        else {
          var points = geometry.points;
          if (projectionStream) {
            points = projectPolys(points, projectionStream, true);
          }
          zrender_lib_core_util_js__rspack_import_0.each(points, function (points) {
            polylineSubpaths.push(new _util_graphic_js__rspack_import_8["default"](getPolyShape(points)));
          });
        }
      });
      var centerPt = transformPoint(region.getCenter(), projection && projection.project);
      function createCompoundPath(subpaths, isLine) {
        if (!subpaths.length) {
          return;
        }
        var compoundPath = new _util_graphic_js__rspack_import_9["default"]({
          culling: true,
          segmentIgnoreThreshold: 1,
          shape: {
            paths: subpaths
          }
        });
        regionGroup.add(compoundPath);
        applyOptionStyleForRegion(viewBuildCtx, compoundPath, dataIdx, regionModel);
        resetLabelForRegion(viewBuildCtx, compoundPath, regionName, regionModel, mapOrGeoModel, dataIdx, centerPt);
        if (isLine) {
          fixLineStyle(compoundPath);
          zrender_lib_core_util_js__rspack_import_0.each(compoundPath.states, fixLineStyle);
        }
      }
      createCompoundPath(polygonSubpaths);
      createCompoundPath(polylineSubpaths, true);
    });
    // Ensure children have been added to `regionGroup` before calling them.
    regionsGroupByName.each(function (regionGroup, regionName) {
      var _a = regionsInfoByName.get(regionName),
        dataIdx = _a.dataIdx,
        regionModel = _a.regionModel;
      resetEventTriggerForRegion(viewBuildCtx, regionGroup, regionName, regionModel, mapOrGeoModel, dataIdx);
      resetTooltipForRegion(viewBuildCtx, regionGroup, regionName, regionModel, mapOrGeoModel);
      resetStateTriggerForRegion(viewBuildCtx, regionGroup, regionName, regionModel, mapOrGeoModel);
    }, this);
  };
  MapDraw.prototype._buildSVG = function (viewBuildCtx) {
    var mapName = viewBuildCtx.geo.map;
    var transformInfoRaw = viewBuildCtx.transformInfoRaw;
    this._svgGroup.x = transformInfoRaw.x;
    this._svgGroup.y = transformInfoRaw.y;
    this._svgGroup.scaleX = transformInfoRaw.scaleX;
    this._svgGroup.scaleY = transformInfoRaw.scaleY;
    if (this._svgResourceChanged(mapName)) {
      this._freeSVG();
      this._useSVG(mapName);
    }
    var svgDispatcherMap = this._svgDispatcherMap = zrender_lib_core_util_js__rspack_import_0.createHashMap();
    var focusSelf = false;
    zrender_lib_core_util_js__rspack_import_0.each(this._svgGraphicRecord.named, function (namedItem) {
      // Note that we also allow different elements have the same name.
      // For example, a glyph of a city and the label of the city have
      // the same name and their tooltip info can be defined in a single
      // region option.
      var regionName = namedItem.name;
      var mapOrGeoModel = viewBuildCtx.mapOrGeoModel;
      var data = viewBuildCtx.data;
      var svgNodeTagLower = namedItem.svgNodeTagLower;
      var el = namedItem.el;
      var dataIdx = data ? data.indexOfName(regionName) : null;
      var regionModel = mapOrGeoModel.getRegionModel(regionName);
      if (OPTION_STYLE_ENABLED_TAG_MAP.get(svgNodeTagLower) != null && el instanceof zrender_lib_graphic_Displayable_js__rspack_import_10["default"]) {
        applyOptionStyleForRegion(viewBuildCtx, el, dataIdx, regionModel);
      }
      if (el instanceof zrender_lib_graphic_Displayable_js__rspack_import_10["default"]) {
        el.culling = true;
      }
      var silent = regionModel.get('silent', true);
      silent != null && (el.silent = silent);
      // We do not know how the SVG like so we'd better not to change z2.
      // Otherwise it might bring some unexpected result. For example,
      // an area hovered that make some inner city can not be clicked.
      el.z2EmphasisLift = 0;
      // If self named:
      if (!namedItem.namedFrom) {
        // label should batter to be displayed based on the center of <g>
        // if it is named rather than displayed on each child.
        if (LABEL_HOST_MAP.get(svgNodeTagLower) != null) {
          resetLabelForRegion(viewBuildCtx, el, regionName, regionModel, mapOrGeoModel, dataIdx, null);
        }
        resetEventTriggerForRegion(viewBuildCtx, el, regionName, regionModel, mapOrGeoModel, dataIdx);
        resetTooltipForRegion(viewBuildCtx, el, regionName, regionModel, mapOrGeoModel);
        if (STATE_TRIGGER_TAG_MAP.get(svgNodeTagLower) != null) {
          var focus_1 = resetStateTriggerForRegion(viewBuildCtx, el, regionName, regionModel, mapOrGeoModel);
          if (focus_1 === 'self') {
            focusSelf = true;
          }
          var els = svgDispatcherMap.get(regionName) || svgDispatcherMap.set(regionName, []);
          els.push(el);
        }
      }
    }, this);
    this._enableBlurEntireSVG(focusSelf, viewBuildCtx);
  };
  MapDraw.prototype._enableBlurEntireSVG = function (focusSelf, viewBuildCtx) {
    // It's a little complicated to support blurring the entire geoSVG in series-map.
    // So do not support it until some requirements come.
    // At present, in series-map, only regions can be blurred.
    if (focusSelf && viewBuildCtx.isGeo) {
      var blurStyle = viewBuildCtx.mapOrGeoModel.getModel(['blur', 'itemStyle']).getItemStyle();
      // Only support `opacity` here. Because not sure that other props are suitable for
      // all of the elements generated by SVG (especially for Text/TSpan/Image/... ).
      var opacity_1 = blurStyle.opacity;
      this._svgGraphicRecord.root.traverse(function (el) {
        if (!el.isGroup) {
          // PENDING: clear those settings to SVG elements when `_freeSVG`.
          // (Currently it happen not to be needed.)
          (0,_util_states_js__rspack_import_11.setDefaultStateProxy)(el);
          var style = el.ensureState('blur').style || {};
          // Do not overwrite the region style that already set from region option.
          if (style.opacity == null && opacity_1 != null) {
            style.opacity = opacity_1;
          }
          // If `ensureState('blur').style = {}`, there will be default opacity.
          // Enable `stateTransition` (animation).
          el.ensureState('emphasis');
        }
      });
    }
  };
  MapDraw.prototype.remove = function () {
    this._regionsGroup.removeAll();
    this._regionsGroupByName = null;
    this._svgGroup.removeAll();
    this._freeSVG();
    this._controller.dispose();
    this._controllerHost = null;
  };
  MapDraw.prototype.findHighDownDispatchers = function (name, geoModel) {
    if (name == null) {
      return [];
    }
    var geo = geoModel.coordinateSystem;
    if (geo.resourceType === 'geoJSON') {
      var regionsGroupByName = this._regionsGroupByName;
      if (regionsGroupByName) {
        var regionGroup = regionsGroupByName.get(name);
        return regionGroup ? [regionGroup] : [];
      }
    } else if (geo.resourceType === 'geoSVG') {
      return this._svgDispatcherMap && this._svgDispatcherMap.get(name) || [];
    }
  };
  MapDraw.prototype._svgResourceChanged = function (mapName) {
    return this._svgMapName !== mapName;
  };
  MapDraw.prototype._useSVG = function (mapName) {
    var resource = _coord_geo_geoSourceManager_js__rspack_import_12["default"].getGeoResource(mapName);
    if (resource && resource.type === 'geoSVG') {
      var svgGraphic = resource.useGraphic(this.uid);
      this._svgGroup.add(svgGraphic.root);
      this._svgGraphicRecord = svgGraphic;
      this._svgMapName = mapName;
    }
  };
  MapDraw.prototype._freeSVG = function () {
    var mapName = this._svgMapName;
    if (mapName == null) {
      return;
    }
    var resource = _coord_geo_geoSourceManager_js__rspack_import_12["default"].getGeoResource(mapName);
    if (resource && resource.type === 'geoSVG') {
      resource.freeGraphic(this.uid);
    }
    this._svgGraphicRecord = null;
    this._svgDispatcherMap = null;
    this._svgGroup.removeAll();
    this._svgMapName = null;
  };
  MapDraw.prototype._updateController = function (mapOrGeoModel, clipRect, ecModel, api) {
    var geo = mapOrGeoModel.coordinateSystem;
    var controller = this._controller;
    var controllerHost = this._controllerHost;
    controllerHost.zoomLimit = mapOrGeoModel.get('scaleLimit');
    controllerHost.zoom = geo.getZoom();
    // roamType is will be set default true if it is null
    controller.enable(mapOrGeoModel.get('roam') || false, {
      api: api,
      zInfo: {
        component: mapOrGeoModel
      },
      triggerInfo: {
        roamTrigger: mapOrGeoModel.get('roamTrigger'),
        isInSelf: function (e, x, y) {
          return geo.containPoint([x, y]);
        },
        isInClip: function (e, x, y) {
          return !clipRect || clipRect.contain(x, y);
        }
      }
    });
    var mainType = mapOrGeoModel.mainType;
    function makeActionBase() {
      var action = {
        type: 'geoRoam',
        componentType: mainType
      };
      action[mainType + 'Id'] = mapOrGeoModel.id;
      return action;
    }
    controller.off('pan').on('pan', function (e) {
      this._mouseDownFlag = false;
      _component_helper_roamHelper_js__rspack_import_13.updateViewOnPan(controllerHost, e.dx, e.dy);
      api.dispatchAction(zrender_lib_core_util_js__rspack_import_0.extend(makeActionBase(), {
        dx: e.dx,
        dy: e.dy,
        animation: {
          duration: 0
        }
      }));
    }, this);
    controller.off('zoom').on('zoom', function (e) {
      this._mouseDownFlag = false;
      _component_helper_roamHelper_js__rspack_import_13.updateViewOnZoom(controllerHost, e.scale, e.originX, e.originY);
      api.dispatchAction(zrender_lib_core_util_js__rspack_import_0.extend(makeActionBase(), {
        totalZoom: controllerHost.zoom,
        zoom: e.scale,
        originX: e.originX,
        originY: e.originY,
        animation: {
          duration: 0
        }
      }));
    }, this);
  };
  /**
   * FIXME: this is a temporarily workaround.
   * When `geoRoam` the elements need to be reset in `MapView['render']`, because the props like
   * `ignore` might have been modified by `LabelManager`, and `LabelManager#addLabelsOfSeries`
   * will subsequently cache `defaultAttr` like `ignore`. If do not do this reset, the modified
   * props will have no chance to be restored.
   * Note: This reset should be after `clearStates` in `renderSeries` because `useStates` in
   * `renderSeries` will cache the modified `ignore` to `el._normalState`.
   * TODO:
   * Use clone/immutable in `LabelManager`?
   */
  MapDraw.prototype.resetForLabelLayout = function () {
    this.group.traverse(function (el) {
      var label = el.getTextContent();
      if (label) {
        label.ignore = mapLabelRaw(label).ignore;
      }
    });
  };
  MapDraw.prototype._updateMapSelectHandler = function (mapOrGeoModel, regionsGroup, api, fromView) {
    var mapDraw = this;
    regionsGroup.off('mousedown');
    regionsGroup.off('click');
    // @ts-ignore FIXME:TS resolve type conflict
    if (mapOrGeoModel.get('selectedMode')) {
      regionsGroup.on('mousedown', function () {
        mapDraw._mouseDownFlag = true;
      });
      regionsGroup.on('click', function (e) {
        if (!mapDraw._mouseDownFlag) {
          return;
        }
        mapDraw._mouseDownFlag = false;
      });
    }
  };
  return MapDraw;
}();
;
function applyOptionStyleForRegion(viewBuildCtx, el, dataIndex, regionModel) {
  // All of the path are using `itemStyle`, because
  // (1) Some SVG also use fill on polyline (The different between
  // polyline and polygon is "open" or "close" but not fill or not).
  // (2) For the common props like opacity, if some use itemStyle
  // and some use `lineStyle`, it might confuse users.
  // (3) Most SVG use <path>, where can not detect whether to draw a "line"
  // or a filled shape, so use `itemStyle` for <path>.
  var normalStyleModel = regionModel.getModel('itemStyle');
  var emphasisStyleModel = regionModel.getModel(['emphasis', 'itemStyle']);
  var blurStyleModel = regionModel.getModel(['blur', 'itemStyle']);
  var selectStyleModel = regionModel.getModel(['select', 'itemStyle']);
  // NOTE: DON'T use 'style' in visual when drawing map.
  // This component is used for drawing underlying map for both geo component and map series.
  var normalStyle = getFixedItemStyle(normalStyleModel);
  var emphasisStyle = getFixedItemStyle(emphasisStyleModel);
  var selectStyle = getFixedItemStyle(selectStyleModel);
  var blurStyle = getFixedItemStyle(blurStyleModel);
  // Update the itemStyle if has data visual
  var data = viewBuildCtx.data;
  if (data) {
    // Only visual color of each item will be used. It can be encoded by visualMap
    // But visual color of series is used in symbol drawing
    // Visual color for each series is for the symbol draw
    var style = data.getItemVisual(dataIndex, 'style');
    var decal = data.getItemVisual(dataIndex, 'decal');
    if (viewBuildCtx.isVisualEncodedByVisualMap && style.fill) {
      normalStyle.fill = style.fill;
    }
    if (decal) {
      normalStyle.decal = (0,_util_decal_js__rspack_import_14.createOrUpdatePatternFromDecal)(decal, viewBuildCtx.api);
    }
  }
  // SVG text, tspan and image can be named but not supporeted
  // to be styled by region option yet.
  el.setStyle(normalStyle);
  el.style.strokeNoScale = true;
  el.ensureState('emphasis').style = emphasisStyle;
  el.ensureState('select').style = selectStyle;
  el.ensureState('blur').style = blurStyle;
  // Enable blur
  (0,_util_states_js__rspack_import_11.setDefaultStateProxy)(el);
}
function resetLabelForRegion(viewBuildCtx, el, regionName, regionModel, mapOrGeoModel,
// Exist only if `viewBuildCtx.data` exists.
dataIdx,
// If labelXY not provided, use `textConfig.position: 'inside'`
labelXY) {
  var data = viewBuildCtx.data;
  var isGeo = viewBuildCtx.isGeo;
  var isDataNaN = data && isNaN(data.get(data.mapDimension('value'), dataIdx));
  var itemLayout = data && data.getItemLayout(dataIdx);
  // In the following cases label will be drawn
  // 1. In map series and data value is NaN
  // 2. In geo component
  // 3. Region has no series legendIcon, which will be add a showLabel flag in mapSymbolLayout
  if (isGeo || isDataNaN || itemLayout && itemLayout.showLabel) {
    var query = !isGeo ? dataIdx : regionName;
    var labelFetcher = void 0;
    // Consider dataIdx not found.
    if (!data || dataIdx >= 0) {
      labelFetcher = mapOrGeoModel;
    }
    var specifiedTextOpt = labelXY ? {
      normal: {
        align: 'center',
        verticalAlign: 'middle'
      }
    } : null;
    // Caveat: must be called after `setDefaultStateProxy(el);` called.
    // because textContent will be assign with `el.stateProxy` inside.
    (0,_label_labelStyle_js__rspack_import_15.setLabelStyle)(el, (0,_label_labelStyle_js__rspack_import_15.getLabelStatesModels)(regionModel), {
      labelFetcher: labelFetcher,
      labelDataIndex: query,
      defaultText: regionName
    }, specifiedTextOpt);
    var textEl = el.getTextContent();
    if (textEl) {
      mapLabelRaw(textEl).ignore = textEl.ignore;
      if (el.textConfig && labelXY) {
        // Compute a relative offset based on the el bounding rect.
        var rect = el.getBoundingRect().clone();
        // Need to make sure the percent position base on the same rect in normal and
        // emphasis state. Otherwise if using boundingRect of el, but the emphasis state
        // has borderWidth (even 0.5px), the text position will be changed obviously
        // if the position is very big like ['1234%', '1345%'].
        el.textConfig.layoutRect = rect;
        el.textConfig.position = [(labelXY[0] - rect.x) / rect.width * 100 + '%', (labelXY[1] - rect.y) / rect.height * 100 + '%'];
      }
    }
    // PENDING:
    // If labelLayout is enabled (test/label-layout.html), el.dataIndex should be specified.
    // But el.dataIndex is also used to determine whether user event should be triggered,
    // where el.seriesIndex or el.dataModel must be specified. At present for a single el
    // there is not case that "only label layout enabled but user event disabled", so here
    // we depends `resetEventTriggerForRegion` to do the job of setting `el.dataIndex`.
    el.disableLabelAnimation = true;
  } else {
    el.removeTextContent();
    el.removeTextConfig();
    el.disableLabelAnimation = null;
  }
}
function resetEventTriggerForRegion(viewBuildCtx, eventTrigger, regionName, regionModel, mapOrGeoModel,
// Exist only if `viewBuildCtx.data` exists.
dataIdx) {
  // setItemGraphicEl, setHoverStyle after all polygons and labels
  // are added to the regionGroup
  if (viewBuildCtx.data) {
    // FIXME: when series-map use a SVG map, and there are duplicated name specified
    // on different SVG elements, after `data.setItemGraphicEl(...)`:
    // (1) all of them will be mounted with `dataIndex`, `seriesIndex`, so that tooltip
    // can be triggered only mouse hover. That's correct.
    // (2) only the last element will be kept in `data`, so that if trigger tooltip
    // by `dispatchAction`, only the last one can be found and triggered. That might be
    // not correct. We will fix it in future if anyone demanding that.
    viewBuildCtx.data.setItemGraphicEl(dataIdx, eventTrigger);
  }
  // series-map will not trigger "geoselectchange" no matter it is
  // based on a declared geo component. Because series-map will
  // trigger "selectchange". If it trigger both the two events,
  // If users call `chart.dispatchAction({type: 'toggleSelect'})`,
  // it not easy to also fire event "geoselectchanged".
  else {
    // Package custom mouse event for geo component
    (0,_util_innerStore_js__rspack_import_16.getECData)(eventTrigger).eventData = {
      componentType: 'geo',
      componentIndex: mapOrGeoModel.componentIndex,
      geoIndex: mapOrGeoModel.componentIndex,
      name: regionName,
      region: regionModel && regionModel.option || {}
    };
  }
}
function resetTooltipForRegion(viewBuildCtx, el, regionName, regionModel, mapOrGeoModel) {
  if (!viewBuildCtx.data) {
    _util_graphic_js__rspack_import_17.setTooltipConfig({
      el: el,
      componentModel: mapOrGeoModel,
      itemName: regionName,
      // @ts-ignore FIXME:TS fix the "compatible with each other"?
      itemTooltipOption: regionModel.get('tooltip')
    });
  }
}
function resetStateTriggerForRegion(viewBuildCtx, el, regionName, regionModel, mapOrGeoModel) {
  // @ts-ignore FIXME:TS fix the "compatible with each other"?
  el.highDownSilentOnTouch = !!mapOrGeoModel.get('selectedMode');
  // @ts-ignore FIXME:TS fix the "compatible with each other"?
  var emphasisModel = regionModel.getModel('emphasis');
  var focus = emphasisModel.get('focus');
  (0,_util_states_js__rspack_import_11.toggleHoverEmphasis)(el, focus, emphasisModel.get('blurScope'), emphasisModel.get('disabled'));
  if (viewBuildCtx.isGeo) {
    (0,_util_states_js__rspack_import_11.enableComponentHighDownFeatures)(el, mapOrGeoModel, regionName);
  }
  return focus;
}
function projectPolys(rings,
// Polygons include exterior and interiors. Or polylines.
createStream, isLine) {
  var polygons = [];
  var curPoly;
  function startPolygon() {
    curPoly = [];
  }
  function endPolygon() {
    if (curPoly.length) {
      polygons.push(curPoly);
      curPoly = [];
    }
  }
  var stream = createStream({
    polygonStart: startPolygon,
    polygonEnd: endPolygon,
    lineStart: startPolygon,
    lineEnd: endPolygon,
    point: function (x, y) {
      // May have NaN values from stream.
      if (isFinite(x) && isFinite(y)) {
        curPoly.push([x, y]);
      }
    },
    sphere: function () {}
  });
  !isLine && stream.polygonStart();
  zrender_lib_core_util_js__rspack_import_0.each(rings, function (ring) {
    stream.lineStart();
    for (var i = 0; i < ring.length; i++) {
      stream.point(ring[i][0], ring[i][1]);
    }
    stream.lineEnd();
  });
  !isLine && stream.polygonEnd();
  return polygons;
}
/* export default */ __webpack_exports__["default"] = (MapDraw);
// @ts-ignore FIXME:TS fix the "compatible with each other"?

}),
93874: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var tslib__rspack_import_1 = __webpack_require__(2492);
/* import */ var zrender_lib_core_Eventful_js__rspack_import_0 = __webpack_require__(31969);
/* import */ var zrender_lib_core_event_js__rspack_import_5 = __webpack_require__(31720);
/* import */ var _interactionMutex_js__rspack_import_6 = __webpack_require__(70132);
/* import */ var zrender_lib_core_util_js__rspack_import_2 = __webpack_require__(9774);
/* import */ var _util_model_js__rspack_import_7 = __webpack_require__(67698);
/* import */ var _util_graphic_js__rspack_import_3 = __webpack_require__(9412);
/* import */ var _cursorHelper_js__rspack_import_4 = __webpack_require__(85957);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
/**
 * An manager of zoom and pan(darg) hehavior.
 * But it is not responsible for updating the view, since view updates vary and can
 * not be handled in a uniform way.
 *
 * Note: regarding view updates:
 *  - Transformabe views typically use `coord/View` (e.g., geo and series.graph roaming).
 *    Some commonly used view update logic has been organized into `roamHelper.ts`.
 *  - Non-transformable views handle updates themselves, possibly involving re-layout,
 *    (e.g., treemap).
 *  - Some scenarios do not require transformation (e.g., dataZoom roaming for cartesian,
 *    brush component).
 */
var RoamController = /** @class */function (_super) {
  (0,tslib__rspack_import_1.__extends)(RoamController, _super);
  function RoamController(zr) {
    var _this = _super.call(this) || this;
    _this._zr = zr;
    // Avoid two roamController bind the same handler
    var mousedownHandler = (0,zrender_lib_core_util_js__rspack_import_2.bind)(_this._mousedownHandler, _this);
    var mousemoveHandler = (0,zrender_lib_core_util_js__rspack_import_2.bind)(_this._mousemoveHandler, _this);
    var mouseupHandler = (0,zrender_lib_core_util_js__rspack_import_2.bind)(_this._mouseupHandler, _this);
    var mousewheelHandler = (0,zrender_lib_core_util_js__rspack_import_2.bind)(_this._mousewheelHandler, _this);
    var pinchHandler = (0,zrender_lib_core_util_js__rspack_import_2.bind)(_this._pinchHandler, _this);
    /**
     * Notice:
     *  - only enable needed types. For example, if 'zoom'
     *    is not needed, 'zoom' should not be enabled, otherwise
     *    default mousewheel behaviour (scroll page) will be disabled.
     *  - This method is idempotent.
     */
    _this.enable = function (controlType, rawOpt) {
      var zInfo = rawOpt.zInfo;
      var _a = (0,_util_graphic_js__rspack_import_3.retrieveZInfo)(zInfo.component),
        z = _a.z,
        zlevel = _a.zlevel;
      var zInfoParsed = {
        component: zInfo.component,
        z: z,
        zlevel: zlevel,
        // By default roam controller is the lowest z2 comparing to other elememts in a component.
        z2: (0,zrender_lib_core_util_js__rspack_import_2.retrieve2)(zInfo.z2, -Infinity)
      };
      var triggerInfo = (0,zrender_lib_core_util_js__rspack_import_2.extend)({}, rawOpt.triggerInfo);
      this._opt = (0,zrender_lib_core_util_js__rspack_import_2.defaults)((0,zrender_lib_core_util_js__rspack_import_2.extend)({}, rawOpt), {
        zoomOnMouseWheel: true,
        moveOnMouseMove: true,
        // By default, wheel do not trigger move.
        moveOnMouseWheel: false,
        preventDefaultMouseMove: true,
        zInfoParsed: zInfoParsed,
        triggerInfo: triggerInfo
      });
      if (controlType == null) {
        controlType = true;
      }
      // A handy optimization for repeatedly calling `enable` during roaming.
      // Assert `disable` is only affected by `controlType`.
      if (!this._enabled || this._controlType !== controlType) {
        this._enabled = true;
        // Disable previous first
        this.disable();
        if (controlType === true || controlType === 'move' || controlType === 'pan') {
          addRoamZrListener(zr, 'mousedown', mousedownHandler, zInfoParsed);
          addRoamZrListener(zr, 'mousemove', mousemoveHandler, zInfoParsed);
          addRoamZrListener(zr, 'mouseup', mouseupHandler, zInfoParsed);
        }
        if (controlType === true || controlType === 'scale' || controlType === 'zoom') {
          addRoamZrListener(zr, 'mousewheel', mousewheelHandler, zInfoParsed);
          addRoamZrListener(zr, 'pinch', pinchHandler, zInfoParsed);
        }
      }
    };
    _this.disable = function () {
      this._enabled = false;
      removeRoamZrListener(zr, 'mousedown', mousedownHandler);
      removeRoamZrListener(zr, 'mousemove', mousemoveHandler);
      removeRoamZrListener(zr, 'mouseup', mouseupHandler);
      removeRoamZrListener(zr, 'mousewheel', mousewheelHandler);
      removeRoamZrListener(zr, 'pinch', pinchHandler);
    };
    return _this;
  }
  RoamController.prototype.isDragging = function () {
    return this._dragging;
  };
  RoamController.prototype.isPinching = function () {
    return this._pinching;
  };
  RoamController.prototype._checkPointer = function (e, x, y) {
    var opt = this._opt;
    var zInfoParsed = opt.zInfoParsed;
    if ((0,_cursorHelper_js__rspack_import_4.onIrrelevantElement)(e, opt.api, zInfoParsed.component)) {
      return false;
    }
    ;
    var triggerInfo = opt.triggerInfo;
    var roamTrigger = triggerInfo.roamTrigger;
    var inArea = false;
    if (roamTrigger === 'global') {
      inArea = true;
    }
    if (!inArea) {
      inArea = triggerInfo.isInSelf(e, x, y);
    }
    if (inArea && triggerInfo.isInClip && !triggerInfo.isInClip(e, x, y)) {
      inArea = false;
    }
    return inArea;
  };
  RoamController.prototype._decideCursorStyle = function (e, x, y, forReverse) {
    // If this cursor style decision is not strictly consistent with zrender,
    // it's fine - zr will set the cursor on the next mousemove.
    // This `grab` cursor style should take the lowest precedence. If the hovring element already
    // have a cursor, zrender will set it to be non-'default' before entering this handler.
    // (note, e.target is never silent, e.topTarget can be silent be irrelevant.)
    var target = e.target;
    if (!target && this._checkPointer(e, x, y)) {
      // To indicate users that this area is draggable, otherwise users probably cannot kwown
      // that when hovering out of the shape but still inside the bounding rect.
      return 'grab';
    }
    if (forReverse) {
      return target && target.cursor || 'default';
    }
  };
  RoamController.prototype.dispose = function () {
    this.disable();
  };
  RoamController.prototype._mousedownHandler = function (e) {
    if (zrender_lib_core_event_js__rspack_import_5.isMiddleOrRightButtonOnMouseUpDown(e) || eventConsumed(e)) {
      return;
    }
    var el = e.target;
    while (el) {
      if (el.draggable) {
        return;
      }
      // check if host is draggable
      el = el.__hostTarget || el.parent;
    }
    var x = e.offsetX;
    var y = e.offsetY;
    // To determine dragging start, only by checking on mosedown, but not mousemove.
    // Mouse can be out of target when mouse moving.
    if (this._checkPointer(e, x, y)) {
      this._x = x;
      this._y = y;
      this._dragging = true;
    }
  };
  RoamController.prototype._mousemoveHandler = function (e) {
    var zr = this._zr;
    if (e.gestureEvent === 'pinch' || _interactionMutex_js__rspack_import_6.isTaken(zr, 'globalPan') || eventConsumed(e)) {
      return;
    }
    var x = e.offsetX;
    var y = e.offsetY;
    if (!this._dragging || !isAvailableBehavior('moveOnMouseMove', e, this._opt)) {
      var cursorStyle = this._decideCursorStyle(e, x, y, false);
      if (cursorStyle) {
        zr.setCursorStyle(cursorStyle);
      }
      return;
    }
    zr.setCursorStyle('grabbing');
    var oldX = this._x;
    var oldY = this._y;
    var dx = x - oldX;
    var dy = y - oldY;
    this._x = x;
    this._y = y;
    if (this._opt.preventDefaultMouseMove) {
      zrender_lib_core_event_js__rspack_import_5.stop(e.event);
    }
    e.__ecRoamConsumed = true;
    trigger(this, 'pan', 'moveOnMouseMove', e, {
      dx: dx,
      dy: dy,
      oldX: oldX,
      oldY: oldY,
      newX: x,
      newY: y,
      isAvailableBehavior: null
    });
  };
  RoamController.prototype._mouseupHandler = function (e) {
    if (eventConsumed(e)) {
      return;
    }
    var zr = this._zr;
    if (!zrender_lib_core_event_js__rspack_import_5.isMiddleOrRightButtonOnMouseUpDown(e)) {
      this._dragging = false;
      var cursorStyle = this._decideCursorStyle(e, e.offsetX, e.offsetY, true);
      if (cursorStyle) {
        zr.setCursorStyle(cursorStyle);
      }
    }
  };
  RoamController.prototype._mousewheelHandler = function (e) {
    if (eventConsumed(e)) {
      return;
    }
    var shouldZoom = isAvailableBehavior('zoomOnMouseWheel', e, this._opt);
    var shouldMove = isAvailableBehavior('moveOnMouseWheel', e, this._opt);
    var wheelDelta = e.wheelDelta;
    var absWheelDeltaDelta = Math.abs(wheelDelta);
    var originX = e.offsetX;
    var originY = e.offsetY;
    // wheelDelta maybe -0 in chrome mac.
    if (wheelDelta === 0 || !shouldZoom && !shouldMove) {
      return;
    }
    // If both `shouldZoom` and `shouldMove` is true, trigger
    // their event both, and the final behavior is determined
    // by event listener themselves.
    if (shouldZoom) {
      // Convenience:
      // Mac and VM Windows on Mac: scroll up: zoom out.
      // Windows: scroll up: zoom in.
      // FIXME: Should do more test in different environment.
      // wheelDelta is too complicated in difference nvironment
      // (https://developer.mozilla.org/en-US/docs/Web/Events/mousewheel),
      // although it has been normallized by zrender.
      // wheelDelta of mouse wheel is bigger than touch pad.
      var factor = absWheelDeltaDelta > 3 ? 1.4 : absWheelDeltaDelta > 1 ? 1.2 : 1.1;
      var scale = wheelDelta > 0 ? factor : 1 / factor;
      this._checkTriggerMoveZoom(this, 'zoom', 'zoomOnMouseWheel', e, {
        scale: scale,
        originX: originX,
        originY: originY,
        isAvailableBehavior: null
      });
    }
    if (shouldMove) {
      // FIXME: Should do more test in different environment.
      var absDelta = Math.abs(wheelDelta);
      // wheelDelta of mouse wheel is bigger than touch pad.
      var scrollDelta = (wheelDelta > 0 ? 1 : -1) * (absDelta > 3 ? 0.4 : absDelta > 1 ? 0.15 : 0.05);
      this._checkTriggerMoveZoom(this, 'scrollMove', 'moveOnMouseWheel', e, {
        scrollDelta: scrollDelta,
        originX: originX,
        originY: originY,
        isAvailableBehavior: null
      });
    }
  };
  RoamController.prototype._pinchHandler = function (e) {
    if (_interactionMutex_js__rspack_import_6.isTaken(this._zr, 'globalPan') || eventConsumed(e)) {
      return;
    }
    var scale = e.pinchScale > 1 ? 1.1 : 1 / 1.1;
    this._checkTriggerMoveZoom(this, 'zoom', null, e, {
      scale: scale,
      originX: e.pinchX,
      originY: e.pinchY,
      isAvailableBehavior: null
    });
  };
  RoamController.prototype._checkTriggerMoveZoom = function (controller, eventName, behaviorToCheck, e, contollerEvent) {
    if (controller._checkPointer(e, contollerEvent.originX, contollerEvent.originY)) {
      // When mouse is out of roamController rect,
      // default befavoius should not be be disabled, otherwise
      // page sliding is disabled, contrary to expectation.
      zrender_lib_core_event_js__rspack_import_5.stop(e.event);
      e.__ecRoamConsumed = true;
      trigger(controller, eventName, behaviorToCheck, e, contollerEvent);
    }
  };
  return RoamController;
}(zrender_lib_core_Eventful_js__rspack_import_0["default"]);
function eventConsumed(e) {
  return e.__ecRoamConsumed;
}
var innerZrStore = (0,_util_model_js__rspack_import_7.makeInner)();
function ensureZrStore(zr) {
  var store = innerZrStore(zr);
  store.roam = store.roam || {};
  store.uniform = store.uniform || {};
  return store;
}
/**
 * Listeners are sorted by z2/z/zlevel in descending order.
 * This decides the precedence between different roam controllers if they are overlapped.
 *
 * [MEMO]: It's not easy to perfectly reconcile the conflicts caused by overlap.
 *  - Consider cases:
 *    - Multiple roam controllers overlapped.
 *      - Usually only the topmost can trigger roam.
 *    - Roam controllers overlap with other zr elements:
 *      - zr elements are relevant or irrelevent to the host of the roam controller. e.g., axis split line
 *        or series elements is relevant to a cartesian and should trigger roam.
 *      - zr elements is above or below the roam controller host, which affects the precedence of interaction.
 *      - zr elements may not silent only for triggering tooltip by hovering, which is available to roam;
 *        or may not silent for click, where roam is not preferable.
 *  - Approach - `addRoamZrListener+pointerChecker+onIrrelevantElement` (currently used):
 *    - Resolve the precedence between different roam controllers
 *    - But cannot prevent the handling on other zr elements that under the roam controller in z-order.
 *  - Approach - "use an invisible zr elements to receive the zr events to trigger roam":
 *    - More complicated in impl.
 *    - May cause bad cases where zr event cannot be receive due to other non-silient zr elements covering it.
 */
function addRoamZrListener(zr, eventType, listener, zInfoParsed) {
  var store = ensureZrStore(zr);
  var roam = store.roam;
  var listenerList = roam[eventType] = roam[eventType] || [];
  var idx = 0;
  for (; idx < listenerList.length; idx++) {
    var currZInfo = listenerList[idx].zInfoParsed;
    if ((currZInfo.zlevel - zInfoParsed.zlevel || currZInfo.z - zInfoParsed.z || currZInfo.z2 - zInfoParsed.z2
    // If all equals, the latter added one has a higher precedence.
    ) <= 0) {
      break;
    }
  }
  listenerList.splice(idx, 0, {
    listener: listener,
    zInfoParsed: zInfoParsed
  });
  ensureUniformListener(zr, eventType);
}
function removeRoamZrListener(zr, eventType, listener) {
  var store = ensureZrStore(zr);
  var listenerList = store.roam[eventType] || [];
  for (var idx = 0; idx < listenerList.length; idx++) {
    if (listenerList[idx].listener === listener) {
      listenerList.splice(idx, 1);
      if (!listenerList.length) {
        removeUniformListener(zr, eventType);
      }
      return;
    }
  }
}
function ensureUniformListener(zr, eventType) {
  var store = ensureZrStore(zr);
  if (!store.uniform[eventType]) {
    zr.on(eventType, store.uniform[eventType] = function (event) {
      var listenerList = store.roam[eventType];
      if (listenerList) {
        for (var i = 0; i < listenerList.length; i++) {
          listenerList[i].listener(event);
        }
      }
    });
  }
}
function removeUniformListener(zr, eventType) {
  var store = ensureZrStore(zr);
  var uniform = store.uniform;
  if (uniform[eventType]) {
    zr.off(eventType, uniform[eventType]);
    uniform[eventType] = null;
  }
}
function trigger(controller, eventName, behaviorToCheck, e, contollerEvent) {
  // Also provide behavior checker for event listener, for some case that
  // multiple components share one listener.
  contollerEvent.isAvailableBehavior = (0,zrender_lib_core_util_js__rspack_import_2.bind)(isAvailableBehavior, null, behaviorToCheck, e);
  // TODO should not have type issue.
  controller.trigger(eventName, contollerEvent);
}
// settings: {
//     zoomOnMouseWheel
//     moveOnMouseMove
//     moveOnMouseWheel
// }
// The value can be: true / false / 'shift' / 'ctrl' / 'alt'.
function isAvailableBehavior(behaviorToCheck, e, settings) {
  var setting = settings[behaviorToCheck];
  return !behaviorToCheck || setting && (!(0,zrender_lib_core_util_js__rspack_import_2.isString)(setting) || e.event[setting + 'Key']);
}
/* export default */ __webpack_exports__["default"] = (RoamController);

}),
44307: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  makeLinearBrushOtherExtent: function() { return makeLinearBrushOtherExtent; },
  makeRectIsTargetByCursor: function() { return makeRectIsTargetByCursor; },
  makeRectPanelClipPath: function() { return makeRectPanelClipPath; }
});
/* import */ var zrender_lib_core_BoundingRect_js__rspack_import_2 = __webpack_require__(7544);
/* import */ var _cursorHelper_js__rspack_import_1 = __webpack_require__(85957);
/* import */ var _util_graphic_js__rspack_import_0 = __webpack_require__(9412);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/



function makeRectPanelClipPath(rect) {
  rect = normalizeRect(rect);
  return function (localPoints) {
    return _util_graphic_js__rspack_import_0.clipPointsByRect(localPoints, rect);
  };
}
function makeLinearBrushOtherExtent(rect, specifiedXYIndex) {
  rect = normalizeRect(rect);
  return function (xyIndex) {
    var idx = specifiedXYIndex != null ? specifiedXYIndex : xyIndex;
    var brushWidth = idx ? rect.width : rect.height;
    var base = idx ? rect.x : rect.y;
    return [base, base + (brushWidth || 0)];
  };
}
function makeRectIsTargetByCursor(rect, api, targetModel) {
  var boundingRect = normalizeRect(rect);
  return function (e, localCursorPoint) {
    return boundingRect.contain(localCursorPoint[0], localCursorPoint[1]) && !(0,_cursorHelper_js__rspack_import_1.onIrrelevantElement)(e, api, targetModel);
  };
}
// Consider width/height is negative.
function normalizeRect(rect) {
  return zrender_lib_core_BoundingRect_js__rspack_import_2["default"].create(rect);
}

}),
85957: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  onIrrelevantElement: function() { return onIrrelevantElement; }
});
/* import */ var _util_graphic_js__rspack_import_0 = __webpack_require__(9412);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

var IRRELEVANT_EXCLUDES = {
  'axisPointer': 1,
  'tooltip': 1,
  'brush': 1
};
/**
 * Used on roam/brush triggering determination.
 * This is to avoid that: mouse clicking on an elements that is over geo or graph,
 * but roam is triggered unexpectedly.
 */
function onIrrelevantElement(e, api, targetComponent) {
  var eventElComponent = api.getComponentByElement(e.topTarget);
  if (!eventElComponent || eventElComponent === targetComponent || IRRELEVANT_EXCLUDES.hasOwnProperty(eventElComponent.mainType)) {
    return false;
  }
  // At present the `true` return is conservative. That is, the caller, such as a RoamController,
  // is more likely to get a `false` return and start a roam behavior, becuase even if the
  // `model.coordinateSystem` does not exist, the `e.topTarget` may be also a relevant element,
  // such as axis split line/area or series elements, where roam should be available. Otherwise,
  // if a dataZoom-served cartesian is full of series elements, the dataZoom-roaming can hardly
  // be triggered.
  var eventElCoordSys = eventElComponent.coordinateSystem;
  // If eventElComponent is axisModel, it works only if it is injected with coordinateSystem.
  if (!eventElCoordSys || eventElCoordSys.model === targetComponent) {
    return false;
  }
  // e.g., if a cartesian is covered by a graph, the graph has a higher presedence in roam.
  // A potential bad case is that RoamController does not prevent the cartesian from handling zr
  // event, such as click and hovering, but it's fine so far.
  // Aslo be conservative, if equals, return false.
  var eventElCmptZInfo = (0,_util_graphic_js__rspack_import_0.retrieveZInfo)(eventElComponent);
  var targetCmptZInfo = (0,_util_graphic_js__rspack_import_0.retrieveZInfo)(targetComponent);
  if ((eventElCmptZInfo.zlevel - targetCmptZInfo.zlevel || eventElCmptZInfo.z - targetCmptZInfo.z) <= 0) {
    return false;
  }
  return true;
}

}),
70132: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  isTaken: function() { return isTaken; },
  release: function() { return release; },
  take: function() { return take; }
});
/* import */ var _core_echarts_js__rspack_import_1 = __webpack_require__(8741);
/* import */ var zrender_lib_core_util_js__rspack_import_2 = __webpack_require__(9774);
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



var inner = (0,_util_model_js__rspack_import_0.makeInner)();
function take(zr, resourceKey, userKey) {
  inner(zr)[resourceKey] = userKey;
}
function release(zr, resourceKey, userKey) {
  var store = inner(zr);
  var uKey = store[resourceKey];
  if (uKey === userKey) {
    store[resourceKey] = null;
  }
}
function isTaken(zr, resourceKey) {
  return !!inner(zr)[resourceKey];
}
/**
 * payload: {
 *     type: 'takeGlobalCursor',
 *     key: 'dataZoomSelect', or 'brush', or ...,
 *         If no userKey, release global cursor.
 * }
 */
// TODO: SELF REGISTERED.
_core_echarts_js__rspack_import_1.registerAction({
  type: 'takeGlobalCursor',
  event: 'globalCursorTaken',
  update: 'update'
}, zrender_lib_core_util_js__rspack_import_2.noop);

}),
87624: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  makeBackground: function() { return makeBackground; }
});
/* import */ var _util_format_js__rspack_import_0 = __webpack_require__(10236);
/* import */ var _util_graphic_js__rspack_import_1 = __webpack_require__(52721);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
function makeBackground(rect, componentModel) {
  var padding = _util_format_js__rspack_import_0.normalizeCssArray(componentModel.get('padding'));
  var style = componentModel.getItemStyle(['color', 'opacity']);
  style.fill = componentModel.get('backgroundColor');
  var bgRect = new _util_graphic_js__rspack_import_1["default"]({
    shape: {
      x: rect.x - padding[3],
      y: rect.y - padding[0],
      width: rect.width + padding[1] + padding[3],
      height: rect.height + padding[0] + padding[2],
      r: componentModel.get('borderRadius')
    },
    style: style,
    silent: true,
    z2: -1
  });
  // FIXME
  // `subPixelOptimizeRect` may bring some gap between edge of viewpart
  // and background rect when setting like `left: 0`, `top: 0`.
  // graphic.subPixelOptimizeRect(rect);
  return bgRect;
}

}),
5686: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  clampByZoomLimit: function() { return clampByZoomLimit; },
  updateCenterAndZoomInAction: function() { return updateCenterAndZoomInAction; },
  updateController: function() { return updateController; },
  updateViewOnPan: function() { return updateViewOnPan; },
  updateViewOnZoom: function() { return updateViewOnZoom; }
});
/* import */ var _util_graphic_js__rspack_import_0 = __webpack_require__(7544);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

/**
 * [CAVEAT] `updateViewOnPan` and `updateViewOnZoom` modifies the group transform directly,
 *  but the 'center' and 'zoom' in echarts option and 'View' coordinate system are not updated yet,
 *  which must be performed later in 'xxxRoam' action by calling `updateCenterAndZoom`.
 * @see {updateCenterAndZoomInAction}
 */
function updateViewOnPan(controllerHost, dx, dy) {
  var target = controllerHost.target;
  target.x += dx;
  target.y += dy;
  target.dirty();
}
function updateViewOnZoom(controllerHost, zoomDelta, zoomX, zoomY) {
  var target = controllerHost.target;
  var zoomLimit = controllerHost.zoomLimit;
  var newZoom = controllerHost.zoom = controllerHost.zoom || 1;
  newZoom *= zoomDelta;
  newZoom = clampByZoomLimit(newZoom, zoomLimit);
  var zoomScale = newZoom / controllerHost.zoom;
  controllerHost.zoom = newZoom;
  zoomTransformableByOrigin(target, zoomX, zoomY, zoomScale);
  target.dirty();
}
/**
 * A abstraction for some similar impl in roaming.
 */
function updateController(seriesModel, api, pointerCheckerEl, controller, controllerHost, clipRect) {
  var tmpRect = new _util_graphic_js__rspack_import_0["default"](0, 0, 0, 0);
  controller.enable(seriesModel.get('roam'), {
    api: api,
    zInfo: {
      component: seriesModel
    },
    triggerInfo: {
      roamTrigger: seriesModel.get('roamTrigger'),
      isInSelf: function (e, x, y) {
        tmpRect.copy(pointerCheckerEl.getBoundingRect());
        tmpRect.applyTransform(pointerCheckerEl.getComputedTransform());
        return tmpRect.contain(x, y);
      },
      isInClip: function (e, x, y) {
        return !clipRect || clipRect.contain(x, y);
      }
    }
  });
  controllerHost.zoomLimit = seriesModel.get('scaleLimit');
  var coordinate = seriesModel.coordinateSystem;
  controllerHost.zoom = coordinate ? coordinate.getZoom() : 1;
  var type = seriesModel.subType + 'Roam';
  controller.off('pan').off('zoom').on('pan', function (e) {
    updateViewOnPan(controllerHost, e.dx, e.dy);
    api.dispatchAction({
      seriesId: seriesModel.id,
      type: type,
      dx: e.dx,
      dy: e.dy
    });
  }).on('zoom', function (e) {
    /**
     * FIXME: should do nothing except `api.dispatchAction` here, the other logic
     *  should be performed in the action handler and `updateTransform`; otherwise,
     *  they are inconsistent if user triggers this action explicitly.
     */
    updateViewOnZoom(controllerHost, e.scale, e.originX, e.originY);
    api.dispatchAction({
      seriesId: seriesModel.id,
      type: type,
      zoom: e.scale,
      originX: e.originX,
      originY: e.originY
    });
    // Only update label layout on zoom
    api.updateLabelLayout();
  });
}
function getCenterCoord(view, point) {
  // Use projected coord as center because it's linear.
  return view.pointToProjected ? view.pointToProjected(point) : view.pointToData(point);
}
/**
 * Should be called only in action handler.
 * @see {updateViewOnPan|updateViewOnZoom}
 */
function updateCenterAndZoomInAction(view, payload, zoomLimit) {
  var previousZoom = view.getZoom();
  var center = view.getCenter();
  var deltaZoom = payload.zoom;
  var point = view.projectedToPoint ? view.projectedToPoint(center) : view.dataToPoint(center);
  if (payload.dx != null && payload.dy != null) {
    point[0] -= payload.dx;
    point[1] -= payload.dy;
    view.setCenter(getCenterCoord(view, point));
  }
  if (deltaZoom != null) {
    deltaZoom = clampByZoomLimit(previousZoom * deltaZoom, zoomLimit) / previousZoom;
    zoomTransformableByOrigin(view, payload.originX, payload.originY, deltaZoom);
    view.updateTransform();
    // [NOTICE] Tricky: `getCetnerCoord` uses `this.invTransform` modified by the `updateTransform` above.
    view.setCenter(getCenterCoord(view, point));
    view.setZoom(deltaZoom * previousZoom);
  }
  return {
    center: view.getCenter(),
    zoom: view.getZoom()
  };
}
function zoomTransformableByOrigin(target, originX, originY, deltaZoom) {
  // Keep the mouse center when scaling.
  target.x -= (originX - target.x) * (deltaZoom - 1);
  target.y -= (originY - target.y) * (deltaZoom - 1);
  target.scaleX *= deltaZoom;
  target.scaleY *= deltaZoom;
}
function clampByZoomLimit(zoom, zoomLimit) {
  if (zoomLimit) {
    var zoomMin = zoomLimit.min || 0;
    var zoomMax = zoomLimit.max || Infinity;
    zoom = Math.max(Math.min(zoomMax, zoom), zoomMin);
  }
  return zoom;
}

}),
20143: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return sliderMove; }
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
 * Calculate slider move result.
 * Usage:
 * (1) If both handle0 and handle1 are needed to be moved, set minSpan the same as
 * maxSpan and the same as `Math.abs(handleEnd[1] - handleEnds[0])`.
 * (2) If handle0 is forbidden to cross handle1, set minSpan as `0`.
 *
 * @param delta Move length.
 * @param handleEnds handleEnds[0] can be bigger then handleEnds[1].
 *              handleEnds will be modified in this method.
 * @param extent handleEnds is restricted by extent.
 *              extent[0] should less or equals than extent[1].
 * @param handleIndex Can be 'all', means that both move the two handleEnds.
 * @param minSpan The range of dataZoom can not be smaller than that.
 *              If not set, handle0 and cross handle1. If set as a non-negative
 *              number (including `0`), handles will push each other when reaching
 *              the minSpan.
 * @param maxSpan The range of dataZoom can not be larger than that.
 * @return The input handleEnds.
 */
function sliderMove(delta, handleEnds, extent, handleIndex, minSpan, maxSpan) {
  delta = delta || 0;
  var extentSpan = extent[1] - extent[0];
  // Notice maxSpan and minSpan can be null/undefined.
  if (minSpan != null) {
    minSpan = restrict(minSpan, [0, extentSpan]);
  }
  if (maxSpan != null) {
    maxSpan = Math.max(maxSpan, minSpan != null ? minSpan : 0);
  }
  if (handleIndex === 'all') {
    var handleSpan = Math.abs(handleEnds[1] - handleEnds[0]);
    handleSpan = restrict(handleSpan, [0, extentSpan]);
    minSpan = maxSpan = restrict(handleSpan, [minSpan, maxSpan]);
    handleIndex = 0;
  }
  handleEnds[0] = restrict(handleEnds[0], extent);
  handleEnds[1] = restrict(handleEnds[1], extent);
  var originalDistSign = getSpanSign(handleEnds, handleIndex);
  handleEnds[handleIndex] += delta;
  // Restrict in extent.
  var extentMinSpan = minSpan || 0;
  var realExtent = extent.slice();
  originalDistSign.sign < 0 ? realExtent[0] += extentMinSpan : realExtent[1] -= extentMinSpan;
  handleEnds[handleIndex] = restrict(handleEnds[handleIndex], realExtent);
  // Expand span.
  var currDistSign;
  currDistSign = getSpanSign(handleEnds, handleIndex);
  if (minSpan != null && (currDistSign.sign !== originalDistSign.sign || currDistSign.span < minSpan)) {
    // If minSpan exists, 'cross' is forbidden.
    handleEnds[1 - handleIndex] = handleEnds[handleIndex] + originalDistSign.sign * minSpan;
  }
  // Shrink span.
  currDistSign = getSpanSign(handleEnds, handleIndex);
  if (maxSpan != null && currDistSign.span > maxSpan) {
    handleEnds[1 - handleIndex] = handleEnds[handleIndex] + currDistSign.sign * maxSpan;
  }
  return handleEnds;
}
function getSpanSign(handleEnds, handleIndex) {
  var dist = handleEnds[handleIndex] - handleEnds[1 - handleIndex];
  // If `handleEnds[0] === handleEnds[1]`, always believe that handleEnd[0]
  // is at left of handleEnds[1] for non-cross case.
  return {
    span: Math.abs(dist),
    sign: dist > 0 ? -1 : dist < 0 ? 1 : handleIndex ? -1 : 1
  };
}
function restrict(value, extend) {
  return Math.min(extend[1] != null ? extend[1] : Infinity, Math.max(extend[0] != null ? extend[0] : -Infinity, value));
}

}),
90486: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getThumbnailBridge: function() { return getThumbnailBridge; },
  injectThumbnailBridge: function() { return injectThumbnailBridge; }
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

/**
 * @caveat Do not import other `src/component/thumbnail/*` files.
 *  This file should be decoupled from them for sake of the size consideration.
 */
/**
 * FIXME: This is a temporary implmentation. May need refactor to decouple
 *  the direct call from series.graph to thumbnail.
 */
var inner = (0,_util_model_js__rspack_import_0.makeInner)();
function getThumbnailBridge(model) {
  if (model) {
    return inner(model).bridge;
  }
}
function injectThumbnailBridge(model, thumbnailBridge) {
  if (model) {
    inner(model).bridge = thumbnailBridge;
  }
}
;

}),

}]);