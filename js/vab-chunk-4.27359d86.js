"use strict";
(self["webpackChunkvue_admin_better"] = self["webpackChunkvue_admin_better"] || []).push([["305"], {
53105: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  install: function() { return /* binding */ install; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(96585);
// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(12012);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/model.js
var model = __webpack_require__(46451);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Component.js
var Component = __webpack_require__(68943);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/layout.js
var layout = __webpack_require__(37624);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/graphic/GraphicModel.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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

// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Displayable.js
var Displayable = __webpack_require__(90635);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Group.js
var Group = __webpack_require__(58695);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Image.js
var Image = __webpack_require__(31386);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Text.js
var Text = __webpack_require__(97199);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/graphic.js
var graphic = __webpack_require__(16636);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(81731);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/view/Component.js
var view_Component = __webpack_require__(28440);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/innerStore.js
var innerStore = __webpack_require__(55413);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/styleCompat.js
var styleCompat = __webpack_require__(26889);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/animation/customGraphicTransition.js
var customGraphicTransition = __webpack_require__(80844);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/animation/basicTransition.js
var basicTransition = __webpack_require__(17524);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/animation/customGraphicKeyframeAnimation.js
var customGraphicKeyframeAnimation = __webpack_require__(68401);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/graphic/GraphicView.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/graphic/install.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
64483: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  install: function() { return install; }
});
/* ESM import */var _installSimple_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51581);
/* ESM import */var _axisPointer_install_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49232);
/* ESM import */var _extension_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70392);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  (0,_extension_js__WEBPACK_IMPORTED_MODULE_0__.use)(_installSimple_js__WEBPACK_IMPORTED_MODULE_1__.install);
  (0,_extension_js__WEBPACK_IMPORTED_MODULE_0__.use)(_axisPointer_install_js__WEBPACK_IMPORTED_MODULE_2__.install);
}

}),
51581: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  install: function() { return install; }
});
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var _view_Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28440);
/* ESM import */var _coord_cartesian_GridModel_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54497);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40361);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96585);
/* ESM import */var _coord_cartesian_AxisModel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22885);
/* ESM import */var _coord_axisModelCreator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(68490);
/* ESM import */var _coord_cartesian_Grid_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27826);
/* ESM import */var _axis_CartesianAxisView_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(78070);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(GridView, _super);
  function GridView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = 'grid';
    return _this;
  }
  GridView.prototype.render = function (gridModel, ecModel) {
    this.group.removeAll();
    if (gridModel.get('show')) {
      this.group.add(new _util_graphic_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        shape: gridModel.coordinateSystem.getRect(),
        style: (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.defaults)({
          fill: gridModel.get('backgroundColor')
        }, gridModel.getItemStyle()),
        silent: true,
        z2: -1
      }));
    }
  };
  GridView.type = 'grid';
  return GridView;
}(_view_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
var extraOption = {
  // gridIndex: 0,
  // gridId: '',
  offset: 0
};
function install(registers) {
  registers.registerComponentView(GridView);
  registers.registerComponentModel(_coord_cartesian_GridModel_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
  registers.registerCoordinateSystem('cartesian2d', _coord_cartesian_Grid_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
  (0,_coord_axisModelCreator_js__WEBPACK_IMPORTED_MODULE_6__["default"])(registers, 'x', _coord_cartesian_AxisModel_js__WEBPACK_IMPORTED_MODULE_7__.CartesianAxisModel, extraOption);
  (0,_coord_axisModelCreator_js__WEBPACK_IMPORTED_MODULE_6__["default"])(registers, 'y', _coord_cartesian_AxisModel_js__WEBPACK_IMPORTED_MODULE_7__.CartesianAxisModel, extraOption);
  registers.registerComponentView(_axis_CartesianAxisView_js__WEBPACK_IMPORTED_MODULE_8__.CartesianXAxisView);
  registers.registerComponentView(_axis_CartesianAxisView_js__WEBPACK_IMPORTED_MODULE_8__.CartesianYAxisView);
  registers.registerPreprocessor(function (option) {
    // Only create grid when need
    if (option.xAxis && option.yAxis && !option.grid) {
      option.grid = {};
    }
  });
}

}),
50080: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96585);
/* ESM import */var zrender_lib_core_Eventful_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46606);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58695);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40361);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16636);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56490);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(71272);
/* ESM import */var _interactionMutex_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66188);
/* ESM import */var _data_DataDiffer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4055);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
    stroke: 'rgba(210,219,238,0.3)',
    fill: '#D2DBEE'
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
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(BrushController, _super);
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
    _this.group = new _util_graphic_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    _this._uid = 'brushController_' + baseUID++;
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.each)(pointerHandlers, function (handler, eventName) {
      this._handlers[eventName] = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.bind)(handler, this);
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
      _interactionMutex_js__WEBPACK_IMPORTED_MODULE_4__.take(zr, MUTEX_RESOURCE_KEY, this._uid);
    }
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.each)(this._handlers, function (handler, eventName) {
      zr.on(eventName, handler);
    });
    this._brushType = brushOption.brushType;
    this._brushOption = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.merge)((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.clone)(DEFAULT_BRUSH_OPT), brushOption, true);
  };
  BrushController.prototype._doDisableBrush = function () {
    var zr = this._zr;
    _interactionMutex_js__WEBPACK_IMPORTED_MODULE_4__.release(zr, MUTEX_RESOURCE_KEY, this._uid);
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.each)(this._handlers, function (handler, eventName) {
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
      (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.each)(panelOpts, function (panelOpts) {
        panels_1[panelOpts.panelId] = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.clone)(panelOpts);
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
    coverConfigList = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.map)(coverConfigList, function (coverConfig) {
      return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.merge)((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.clone)(DEFAULT_BRUSH_OPT), coverConfig, true);
    });
    var tmpIdPrefix = '\0-brush-index-';
    var oldCovers = this._covers;
    var newCovers = this._covers = [];
    var controller = this;
    var creatingCover = this._creatingCover;
    new _data_DataDiffer_js__WEBPACK_IMPORTED_MODULE_5__["default"](oldCovers, coverConfigList, oldGetKey, getKey).add(addOrUpdate).update(addOrUpdate).remove(remove).execute();
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
}(zrender_lib_core_Eventful_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
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
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.each)(panels, function (pn) {
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
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.each)(covers, function (cover) {
    controller.group.remove(cover);
  }, controller);
  covers.length = 0;
  return !!originalLength;
}
function trigger(controller, opt) {
  var areas = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.map)(controller._covers, function (cover) {
    var brushOption = cover.__brushOption;
    var range = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.clone)(brushOption.range);
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
  var cover = new _util_graphic_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
  cover.add(new _util_graphic_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
    name: 'main',
    style: makeStyle(brushOption),
    silent: true,
    draggable: true,
    cursor: 'move',
    drift: (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.curry)(driftRect, rectRangeConverter, controller, cover, ['n', 's', 'w', 'e']),
    ondragend: (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.curry)(trigger, controller, {
      isEnd: true
    })
  }));
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.each)(edgeNameSequences, function (nameSequence) {
    cover.add(new _util_graphic_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
      name: nameSequence.join(''),
      style: {
        opacity: 0
      },
      draggable: true,
      silent: true,
      invisible: true,
      drift: (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.curry)(driftRect, rectRangeConverter, controller, cover, nameSequence),
      ondragend: (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.curry)(trigger, controller, {
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
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.each)([['w'], ['e'], ['n'], ['s'], ['s', 'e'], ['s', 'w'], ['n', 'e'], ['n', 'w']], function (nameSequence) {
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
  return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.defaults)({
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
  return _util_graphic_js__WEBPACK_IMPORTED_MODULE_7__.getTransform(controller.group);
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
  var dir = _util_graphic_js__WEBPACK_IMPORTED_MODULE_7__.transformDirection(map[localDirName], getTransform(controller));
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
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.each)(dirNameSequence, function (dirName) {
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
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.each)(range, function (point) {
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
  return panel && panel !== BRUSH_PANEL_GLOBAL ? panel.clipPath(data, controller._transform) : (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.clone)(data);
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
      var brushOption = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.clone)(thisBrushOption);
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
      var cover = new _util_graphic_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
      // Do not use graphic.Polygon because graphic.Polyline do not close the
      // border of the shape when drawing, which is a better experience for user.
      cover.add(new _util_graphic_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
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
      cover.add(new _util_graphic_js__WEBPACK_IMPORTED_MODULE_9__["default"]({
        name: 'main',
        draggable: true,
        drift: (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.curry)(driftPolygon, controller, cover),
        ondragend: (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.curry)(trigger, controller, {
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
/* ESM default export */ __webpack_exports__["default"] = (BrushController);

}),
27499: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96585);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16636);
/* ESM import */var _brushHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86782);
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
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each)(targetInfoBuilders, function (builder, type) {
      if (!opt || !opt.include || (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.indexOf)(opt.include, type) >= 0) {
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
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each)(areas, function (area) {
      var targetInfo = this.findTargetInfo(area, ecModel);
      if (targetInfo && targetInfo !== true) {
        (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each)(targetInfo.coordSyses, function (coordSys) {
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
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each)(areas, function (area) {
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
    return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.map)(this._targetInfoList, function (targetInfo) {
      var rect = targetInfo.getPanelRect();
      return {
        panelId: targetInfo.panelId,
        defaultBrushType: getDefaultBrushType ? getDefaultBrushType(targetInfo) : null,
        clipPath: _brushHelper_js__WEBPACK_IMPORTED_MODULE_1__.makeRectPanelClipPath(rect),
        isTargetByCursor: _brushHelper_js__WEBPACK_IMPORTED_MODULE_1__.makeRectIsTargetByCursor(rect, api, targetInfo.coordSysModel),
        getLinearBrushOtherExtent: _brushHelper_js__WEBPACK_IMPORTED_MODULE_1__.makeLinearBrushOtherExtent(rect)
      };
    });
  };
  BrushTargetManager.prototype.controlSeries = function (area, seriesModel, ecModel) {
    // Check whether area is bound in coord, and series do not belong to that coord.
    // If do not do this check, some brush (like lineX) will controll all axes.
    var targetInfo = this.findTargetInfo(area, ecModel);
    return targetInfo === true || targetInfo && (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.indexOf)(targetInfo.coordSyses, seriesModel.coordinateSystem) >= 0;
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
  return (0,_util_model_js__WEBPACK_IMPORTED_MODULE_2__.parseFinder)(ecModel, finder, {
    includeMainTypes: INCLUDE_FINDER_MAIN_TYPES
  });
}
var targetInfoBuilders = {
  grid: function (foundCpts, targetInfoList) {
    var xAxisModels = foundCpts.xAxisModels;
    var yAxisModels = foundCpts.yAxisModels;
    var gridModels = foundCpts.gridModels;
    // Remove duplicated.
    var gridModelMap = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.createHashMap)();
    var xAxesHas = {};
    var yAxesHas = {};
    if (!xAxisModels && !yAxisModels && !gridModels) {
      return;
    }
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each)(xAxisModels, function (axisModel) {
      var gridModel = axisModel.axis.grid.model;
      gridModelMap.set(gridModel.id, gridModel);
      xAxesHas[gridModel.id] = true;
    });
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each)(yAxisModels, function (axisModel) {
      var gridModel = axisModel.axis.grid.model;
      gridModelMap.set(gridModel.id, gridModel);
      yAxesHas[gridModel.id] = true;
    });
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each)(gridModels, function (gridModel) {
      gridModelMap.set(gridModel.id, gridModel);
      xAxesHas[gridModel.id] = true;
      yAxesHas[gridModel.id] = true;
    });
    gridModelMap.each(function (gridModel) {
      var grid = gridModel.coordinateSystem;
      var cartesians = [];
      (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each)(grid.getCartesians(), function (cartesian, index) {
        if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.indexOf)(xAxisModels, cartesian.getAxis('x').model) >= 0 || (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.indexOf)(yAxisModels, cartesian.getAxis('y').model) >= 0) {
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
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each)(foundCpts.geoModels, function (geoModel) {
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
    rect.applyTransform(_util_graphic_js__WEBPACK_IMPORTED_MODULE_3__.getTransform(coordSys));
    return rect;
  }
};
var coordConvert = {
  lineX: (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.curry)(axisConvert, 0),
  lineY: (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.curry)(axisConvert, 1),
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
    var values = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.map)(rangeOrCoordRange, function (item) {
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
  var values = formatMinMax((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.map)([0, 1], function (i) {
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
  lineX: (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.curry)(axisDiffProcessor, 0),
  lineY: (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.curry)(axisDiffProcessor, 1),
  rect: function (values, refer, scales) {
    return [[values[0][0] - scales[0] * refer[0][0], values[0][1] - scales[0] * refer[0][1]], [values[1][0] - scales[1] * refer[1][0], values[1][1] - scales[1] * refer[1][1]]];
  },
  polygon: function (values, refer, scales) {
    return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.map)(values, function (item, idx) {
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
/* ESM default export */ __webpack_exports__["default"] = (BrushTargetManager);

}),
49490: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96585);
/* ESM import */var _RoamController_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82342);
/* ESM import */var _component_helper_roamHelper_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(72172);
/* ESM import */var _component_helper_cursorHelper_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(39419);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58695);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17524);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71272);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56490);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33401);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(16636);
/* ESM import */var _util_states_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(63344);
/* ESM import */var _coord_geo_geoSourceManager_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(70932);
/* ESM import */var _util_component_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95202);
/* ESM import */var _label_labelStyle_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(77704);
/* ESM import */var _util_innerStore_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(55413);
/* ESM import */var _util_decal_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(75965);
/* ESM import */var zrender_lib_graphic_Displayable_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90635);
/* ESM import */var _util_model_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46451);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
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
var OPTION_STYLE_ENABLED_TAG_MAP = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.createHashMap(OPTION_STYLE_ENABLED_TAGS);
var STATE_TRIGGER_TAG_MAP = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.createHashMap(OPTION_STYLE_ENABLED_TAGS.concat(['g']));
var LABEL_HOST_MAP = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.createHashMap(OPTION_STYLE_ENABLED_TAGS.concat(['g']));
var mapLabelRaw = (0,_util_model_js__WEBPACK_IMPORTED_MODULE_1__.makeInner)();
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
    var group = new _util_graphic_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.uid = (0,_util_component_js__WEBPACK_IMPORTED_MODULE_3__.getUID)('ec_map_draw');
    this._controller = new _RoamController_js__WEBPACK_IMPORTED_MODULE_4__["default"](api.getZr());
    this._controllerHost = {
      target: group
    };
    this.group = group;
    group.add(this._regionsGroup = new _util_graphic_js__WEBPACK_IMPORTED_MODULE_2__["default"]());
    group.add(this._svgGroup = new _util_graphic_js__WEBPACK_IMPORTED_MODULE_2__["default"]());
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
    var group = this.group;
    var transformInfo = geo.getTransformInfo();
    var transformInfoRaw = transformInfo.raw;
    var transformInfoRoam = transformInfo.roam;
    // No animation when first draw or in action
    var isFirstDraw = !regionsGroup.childAt(0) || payload;
    if (isFirstDraw) {
      group.x = transformInfoRoam.x;
      group.y = transformInfoRoam.y;
      group.scaleX = transformInfoRoam.scaleX;
      group.scaleY = transformInfoRoam.scaleY;
      group.dirty();
    } else {
      _util_graphic_js__WEBPACK_IMPORTED_MODULE_5__.updateProps(group, transformInfoRoam, mapOrGeoModel);
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
    this._updateController(mapOrGeoModel, ecModel, api);
    this._updateMapSelectHandler(mapOrGeoModel, regionsGroup, api, fromView);
  };
  MapDraw.prototype._buildGeoJSON = function (viewBuildCtx) {
    var regionsGroupByName = this._regionsGroupByName = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.createHashMap();
    var regionsInfoByName = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.createHashMap();
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
    zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each(viewBuildCtx.geo.regions, function (region) {
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
        regionGroup = regionsGroupByName.set(regionName, new _util_graphic_js__WEBPACK_IMPORTED_MODULE_2__["default"]());
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
      zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each(region.geometries, function (geometry) {
        // Polygon and MultiPolygon
        if (geometry.type === 'polygon') {
          var polys = [geometry.exterior].concat(geometry.interiors || []);
          if (projectionStream) {
            polys = projectPolys(polys, projectionStream);
          }
          zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each(polys, function (poly) {
            polygonSubpaths.push(new _util_graphic_js__WEBPACK_IMPORTED_MODULE_6__["default"](getPolyShape(poly)));
          });
        }
        // LineString and MultiLineString
        else {
          var points = geometry.points;
          if (projectionStream) {
            points = projectPolys(points, projectionStream, true);
          }
          zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each(points, function (points) {
            polylineSubpaths.push(new _util_graphic_js__WEBPACK_IMPORTED_MODULE_7__["default"](getPolyShape(points)));
          });
        }
      });
      var centerPt = transformPoint(region.getCenter(), projection && projection.project);
      function createCompoundPath(subpaths, isLine) {
        if (!subpaths.length) {
          return;
        }
        var compoundPath = new _util_graphic_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
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
          zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each(compoundPath.states, fixLineStyle);
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
    var svgDispatcherMap = this._svgDispatcherMap = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.createHashMap();
    var focusSelf = false;
    zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each(this._svgGraphicRecord.named, function (namedItem) {
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
      if (OPTION_STYLE_ENABLED_TAG_MAP.get(svgNodeTagLower) != null && el instanceof zrender_lib_graphic_Displayable_js__WEBPACK_IMPORTED_MODULE_9__["default"]) {
        applyOptionStyleForRegion(viewBuildCtx, el, dataIdx, regionModel);
      }
      if (el instanceof zrender_lib_graphic_Displayable_js__WEBPACK_IMPORTED_MODULE_9__["default"]) {
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
          (0,_util_states_js__WEBPACK_IMPORTED_MODULE_10__.setDefaultStateProxy)(el);
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
    var resource = _coord_geo_geoSourceManager_js__WEBPACK_IMPORTED_MODULE_11__["default"].getGeoResource(mapName);
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
    var resource = _coord_geo_geoSourceManager_js__WEBPACK_IMPORTED_MODULE_11__["default"].getGeoResource(mapName);
    if (resource && resource.type === 'geoSVG') {
      resource.freeGraphic(this.uid);
    }
    this._svgGraphicRecord = null;
    this._svgDispatcherMap = null;
    this._svgGroup.removeAll();
    this._svgMapName = null;
  };
  MapDraw.prototype._updateController = function (mapOrGeoModel, ecModel, api) {
    var geo = mapOrGeoModel.coordinateSystem;
    var controller = this._controller;
    var controllerHost = this._controllerHost;
    // @ts-ignore FIXME:TS
    controllerHost.zoomLimit = mapOrGeoModel.get('scaleLimit');
    controllerHost.zoom = geo.getZoom();
    // roamType is will be set default true if it is null
    // @ts-ignore FIXME:TS
    controller.enable(mapOrGeoModel.get('roam') || false);
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
      _component_helper_roamHelper_js__WEBPACK_IMPORTED_MODULE_12__.updateViewOnPan(controllerHost, e.dx, e.dy);
      api.dispatchAction(zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.extend(makeActionBase(), {
        dx: e.dx,
        dy: e.dy,
        animation: {
          duration: 0
        }
      }));
    }, this);
    controller.off('zoom').on('zoom', function (e) {
      this._mouseDownFlag = false;
      _component_helper_roamHelper_js__WEBPACK_IMPORTED_MODULE_12__.updateViewOnZoom(controllerHost, e.scale, e.originX, e.originY);
      api.dispatchAction(zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.extend(makeActionBase(), {
        totalZoom: controllerHost.zoom,
        zoom: e.scale,
        originX: e.originX,
        originY: e.originY,
        animation: {
          duration: 0
        }
      }));
    }, this);
    controller.setPointerChecker(function (e, x, y) {
      return geo.containPoint([x, y]) && !(0,_component_helper_cursorHelper_js__WEBPACK_IMPORTED_MODULE_13__.onIrrelevantElement)(e, api, mapOrGeoModel);
    });
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
      normalStyle.decal = (0,_util_decal_js__WEBPACK_IMPORTED_MODULE_14__.createOrUpdatePatternFromDecal)(decal, viewBuildCtx.api);
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
  (0,_util_states_js__WEBPACK_IMPORTED_MODULE_10__.setDefaultStateProxy)(el);
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
    (0,_label_labelStyle_js__WEBPACK_IMPORTED_MODULE_15__.setLabelStyle)(el, (0,_label_labelStyle_js__WEBPACK_IMPORTED_MODULE_15__.getLabelStatesModels)(regionModel), {
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
    (0,_util_innerStore_js__WEBPACK_IMPORTED_MODULE_16__.getECData)(eventTrigger).eventData = {
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
    _util_graphic_js__WEBPACK_IMPORTED_MODULE_17__.setTooltipConfig({
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
  (0,_util_states_js__WEBPACK_IMPORTED_MODULE_10__.toggleHoverEmphasis)(el, focus, emphasisModel.get('blurScope'), emphasisModel.get('disabled'));
  if (viewBuildCtx.isGeo) {
    (0,_util_states_js__WEBPACK_IMPORTED_MODULE_10__.enableComponentHighDownFeatures)(el, mapOrGeoModel, regionName);
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
  zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each(rings, function (ring) {
    stream.lineStart();
    for (var i = 0; i < ring.length; i++) {
      stream.point(ring[i][0], ring[i][1]);
    }
    stream.lineEnd();
  });
  !isLine && stream.polygonEnd();
  return polygons;
}
/* ESM default export */ __webpack_exports__["default"] = (MapDraw);
// @ts-ignore FIXME:TS fix the "compatible with each other"?

}),
82342: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var zrender_lib_core_Eventful_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46606);
/* ESM import */var zrender_lib_core_event_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3036);
/* ESM import */var _interactionMutex_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66188);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96585);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
var RoamController = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(RoamController, _super);
  function RoamController(zr) {
    var _this = _super.call(this) || this;
    _this._zr = zr;
    // Avoid two roamController bind the same handler
    var mousedownHandler = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.bind)(_this._mousedownHandler, _this);
    var mousemoveHandler = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.bind)(_this._mousemoveHandler, _this);
    var mouseupHandler = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.bind)(_this._mouseupHandler, _this);
    var mousewheelHandler = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.bind)(_this._mousewheelHandler, _this);
    var pinchHandler = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.bind)(_this._pinchHandler, _this);
    /**
     * Notice: only enable needed types. For example, if 'zoom'
     * is not needed, 'zoom' should not be enabled, otherwise
     * default mousewheel behaviour (scroll page) will be disabled.
     */
    _this.enable = function (controlType, opt) {
      // Disable previous first
      this.disable();
      this._opt = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.defaults)((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.clone)(opt) || {}, {
        zoomOnMouseWheel: true,
        moveOnMouseMove: true,
        // By default, wheel do not trigger move.
        moveOnMouseWheel: false,
        preventDefaultMouseMove: true
      });
      if (controlType == null) {
        controlType = true;
      }
      if (controlType === true || controlType === 'move' || controlType === 'pan') {
        zr.on('mousedown', mousedownHandler);
        zr.on('mousemove', mousemoveHandler);
        zr.on('mouseup', mouseupHandler);
      }
      if (controlType === true || controlType === 'scale' || controlType === 'zoom') {
        zr.on('mousewheel', mousewheelHandler);
        zr.on('pinch', pinchHandler);
      }
    };
    _this.disable = function () {
      zr.off('mousedown', mousedownHandler);
      zr.off('mousemove', mousemoveHandler);
      zr.off('mouseup', mouseupHandler);
      zr.off('mousewheel', mousewheelHandler);
      zr.off('pinch', pinchHandler);
    };
    return _this;
  }
  RoamController.prototype.isDragging = function () {
    return this._dragging;
  };
  RoamController.prototype.isPinching = function () {
    return this._pinching;
  };
  RoamController.prototype.setPointerChecker = function (pointerChecker) {
    this.pointerChecker = pointerChecker;
  };
  RoamController.prototype.dispose = function () {
    this.disable();
  };
  RoamController.prototype._mousedownHandler = function (e) {
    if (zrender_lib_core_event_js__WEBPACK_IMPORTED_MODULE_3__.isMiddleOrRightButtonOnMouseUpDown(e)) {
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
    // Only check on mosedown, but not mousemove.
    // Mouse can be out of target when mouse moving.
    if (this.pointerChecker && this.pointerChecker(e, x, y)) {
      this._x = x;
      this._y = y;
      this._dragging = true;
    }
  };
  RoamController.prototype._mousemoveHandler = function (e) {
    if (!this._dragging || !isAvailableBehavior('moveOnMouseMove', e, this._opt) || e.gestureEvent === 'pinch' || _interactionMutex_js__WEBPACK_IMPORTED_MODULE_4__.isTaken(this._zr, 'globalPan')) {
      return;
    }
    var x = e.offsetX;
    var y = e.offsetY;
    var oldX = this._x;
    var oldY = this._y;
    var dx = x - oldX;
    var dy = y - oldY;
    this._x = x;
    this._y = y;
    this._opt.preventDefaultMouseMove && zrender_lib_core_event_js__WEBPACK_IMPORTED_MODULE_3__.stop(e.event);
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
    if (!zrender_lib_core_event_js__WEBPACK_IMPORTED_MODULE_3__.isMiddleOrRightButtonOnMouseUpDown(e)) {
      this._dragging = false;
    }
  };
  RoamController.prototype._mousewheelHandler = function (e) {
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
      checkPointerAndTrigger(this, 'zoom', 'zoomOnMouseWheel', e, {
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
      checkPointerAndTrigger(this, 'scrollMove', 'moveOnMouseWheel', e, {
        scrollDelta: scrollDelta,
        originX: originX,
        originY: originY,
        isAvailableBehavior: null
      });
    }
  };
  RoamController.prototype._pinchHandler = function (e) {
    if (_interactionMutex_js__WEBPACK_IMPORTED_MODULE_4__.isTaken(this._zr, 'globalPan')) {
      return;
    }
    var scale = e.pinchScale > 1 ? 1.1 : 1 / 1.1;
    checkPointerAndTrigger(this, 'zoom', null, e, {
      scale: scale,
      originX: e.pinchX,
      originY: e.pinchY,
      isAvailableBehavior: null
    });
  };
  return RoamController;
}(zrender_lib_core_Eventful_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
function checkPointerAndTrigger(controller, eventName, behaviorToCheck, e, contollerEvent) {
  if (controller.pointerChecker && controller.pointerChecker(e, contollerEvent.originX, contollerEvent.originY)) {
    // When mouse is out of roamController rect,
    // default befavoius should not be be disabled, otherwise
    // page sliding is disabled, contrary to expectation.
    zrender_lib_core_event_js__WEBPACK_IMPORTED_MODULE_3__.stop(e.event);
    trigger(controller, eventName, behaviorToCheck, e, contollerEvent);
  }
}
function trigger(controller, eventName, behaviorToCheck, e, contollerEvent) {
  // Also provide behavior checker for event listener, for some case that
  // multiple components share one listener.
  contollerEvent.isAvailableBehavior = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.bind)(isAvailableBehavior, null, behaviorToCheck, e);
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
  return !behaviorToCheck || setting && (!(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.isString)(setting) || e.event[setting + 'Key']);
}
/* ESM default export */ __webpack_exports__["default"] = (RoamController);

}),
86782: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  makeLinearBrushOtherExtent: function() { return makeLinearBrushOtherExtent; },
  makeRectIsTargetByCursor: function() { return makeRectIsTargetByCursor; },
  makeRectPanelClipPath: function() { return makeRectPanelClipPath; }
});
/* ESM import */var zrender_lib_core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44964);
/* ESM import */var _cursorHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39419);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16636);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
    return _util_graphic_js__WEBPACK_IMPORTED_MODULE_0__.clipPointsByRect(localPoints, rect);
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
    return boundingRect.contain(localCursorPoint[0], localCursorPoint[1]) && !(0,_cursorHelper_js__WEBPACK_IMPORTED_MODULE_1__.onIrrelevantElement)(e, api, targetModel);
  };
}
// Consider width/height is negative.
function normalizeRect(rect) {
  return zrender_lib_core_BoundingRect_js__WEBPACK_IMPORTED_MODULE_2__["default"].create(rect);
}

}),
39419: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  onIrrelevantElement: function() { return onIrrelevantElement; }
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
var IRRELEVANT_EXCLUDES = {
  'axisPointer': 1,
  'tooltip': 1,
  'brush': 1
};
/**
 * Avoid that: mouse click on a elements that is over geo or graph,
 * but roam is triggered.
 */
function onIrrelevantElement(e, api, targetCoordSysModel) {
  var model = api.getComponentByElement(e.topTarget);
  // If model is axisModel, it works only if it is injected with coordinateSystem.
  var coordSys = model && model.coordinateSystem;
  return model && model !== targetCoordSysModel && !IRRELEVANT_EXCLUDES.hasOwnProperty(model.mainType) && coordSys && coordSys.model !== targetCoordSysModel;
}

}),
66188: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  isTaken: function() { return isTaken; },
  release: function() { return release; },
  take: function() { return take; }
});
/* ESM import */var _core_echarts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17509);
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
// @ts-nocheck


var ATTR = '\0_ec_interaction_mutex';
function take(zr, resourceKey, userKey) {
  var store = getStore(zr);
  store[resourceKey] = userKey;
}
function release(zr, resourceKey, userKey) {
  var store = getStore(zr);
  var uKey = store[resourceKey];
  if (uKey === userKey) {
    store[resourceKey] = null;
  }
}
function isTaken(zr, resourceKey) {
  return !!getStore(zr)[resourceKey];
}
function getStore(zr) {
  return zr[ATTR] || (zr[ATTR] = {});
}
/**
 * payload: {
 *     type: 'takeGlobalCursor',
 *     key: 'dataZoomSelect', or 'brush', or ...,
 *         If no userKey, release global cursor.
 * }
 */
// TODO: SELF REGISTERED.
_core_echarts_js__WEBPACK_IMPORTED_MODULE_0__.registerAction({
  type: 'takeGlobalCursor',
  event: 'globalCursorTaken',
  update: 'update'
}, zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.noop);

}),
30177: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  layout: function() { return layout; },
  makeBackground: function() { return makeBackground; }
});
/* ESM import */var _util_layout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37624);
/* ESM import */var _util_format_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43718);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40361);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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



/**
 * Layout list like component.
 * It will box layout each items in group of component and then position the whole group in the viewport
 * @param {module:zrender/group/Group} group
 * @param {module:echarts/model/Component} componentModel
 * @param {module:echarts/ExtensionAPI}
 */
function layout(group, componentModel, api) {
  var boxLayoutParams = componentModel.getBoxLayoutParams();
  var padding = componentModel.get('padding');
  var viewportSize = {
    width: api.getWidth(),
    height: api.getHeight()
  };
  var rect = (0,_util_layout_js__WEBPACK_IMPORTED_MODULE_0__.getLayoutRect)(boxLayoutParams, viewportSize, padding);
  (0,_util_layout_js__WEBPACK_IMPORTED_MODULE_0__.box)(componentModel.get('orient'), group, componentModel.get('itemGap'), rect.width, rect.height);
  (0,_util_layout_js__WEBPACK_IMPORTED_MODULE_0__.positionElement)(group, boxLayoutParams, viewportSize, padding);
}
function makeBackground(rect, componentModel) {
  var padding = _util_format_js__WEBPACK_IMPORTED_MODULE_1__.normalizeCssArray(componentModel.get('padding'));
  var style = componentModel.getItemStyle(['color', 'opacity']);
  style.fill = componentModel.get('backgroundColor');
  rect = new _util_graphic_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
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
  return rect;
}

}),
72172: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  updateViewOnPan: function() { return updateViewOnPan; },
  updateViewOnZoom: function() { return updateViewOnZoom; }
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
 * For geo and graph.
 */
function updateViewOnPan(controllerHost, dx, dy) {
  var target = controllerHost.target;
  target.x += dx;
  target.y += dy;
  target.dirty();
}
/**
 * For geo and graph.
 */
function updateViewOnZoom(controllerHost, zoomDelta, zoomX, zoomY) {
  var target = controllerHost.target;
  var zoomLimit = controllerHost.zoomLimit;
  var newZoom = controllerHost.zoom = controllerHost.zoom || 1;
  newZoom *= zoomDelta;
  if (zoomLimit) {
    var zoomMin = zoomLimit.min || 0;
    var zoomMax = zoomLimit.max || Infinity;
    newZoom = Math.max(Math.min(zoomMax, newZoom), zoomMin);
  }
  var zoomScale = newZoom / controllerHost.zoom;
  controllerHost.zoom = newZoom;
  // Keep the mouse center when scaling
  target.x -= (zoomX - target.x) * (zoomScale - 1);
  target.y -= (zoomY - target.y) * (zoomScale - 1);
  target.scaleX *= zoomScale;
  target.scaleY *= zoomScale;
  target.dirty();
}

}),
71285: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
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
59817: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
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
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(96585);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Model.js + 2 modules
var Model = __webpack_require__(84456);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/model.js
var util_model = __webpack_require__(46451);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Component.js
var Component = __webpack_require__(68943);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/legend/LegendModel.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/





var getDefaultSelectorOptions = function (ecModel, type) {
  if (type === 'all') {
    return {
      type: 'all',
      title: ecModel.getLocaleModel().get(['legend', 'selector', 'all'])
    };
  } else if (type === 'inverse') {
    return {
      type: 'inverse',
      title: ecModel.getLocaleModel().get(['legend', 'selector', 'inverse'])
    };
  }
};
var LegendModel_LegendModel = /** @class */function (_super) {
  (0,tslib_es6.__extends)(LegendModel, _super);
  function LegendModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = LegendModel.type;
    _this.layoutMode = {
      type: 'box',
      // legend.width/height are maxWidth/maxHeight actually,
      // whereas real width/height is calculated by its content.
      // (Setting {left: 10, right: 10} does not make sense).
      // So consider the case:
      // `setOption({legend: {left: 10});`
      // then `setOption({legend: {right: 10});`
      // The previous `left` should be cleared by setting `ignoreSize`.
      ignoreSize: true
    };
    return _this;
  }
  LegendModel.prototype.init = function (option, parentModel, ecModel) {
    this.mergeDefaultAndTheme(option, ecModel);
    option.selected = option.selected || {};
    this._updateSelector(option);
  };
  LegendModel.prototype.mergeOption = function (option, ecModel) {
    _super.prototype.mergeOption.call(this, option, ecModel);
    this._updateSelector(option);
  };
  LegendModel.prototype._updateSelector = function (option) {
    var selector = option.selector;
    var ecModel = this.ecModel;
    if (selector === true) {
      selector = option.selector = ['all', 'inverse'];
    }
    if (util.isArray(selector)) {
      util.each(selector, function (item, index) {
        util.isString(item) && (item = {
          type: item
        });
        selector[index] = util.merge(item, getDefaultSelectorOptions(ecModel, item.type));
      });
    }
  };
  LegendModel.prototype.optionUpdated = function () {
    this._updateData(this.ecModel);
    var legendData = this._data;
    // If selectedMode is single, try to select one
    if (legendData[0] && this.get('selectedMode') === 'single') {
      var hasSelected = false;
      // If has any selected in option.selected
      for (var i = 0; i < legendData.length; i++) {
        var name_1 = legendData[i].get('name');
        if (this.isSelected(name_1)) {
          // Force to unselect others
          this.select(name_1);
          hasSelected = true;
          break;
        }
      }
      // Try select the first if selectedMode is single
      !hasSelected && this.select(legendData[0].get('name'));
    }
  };
  LegendModel.prototype._updateData = function (ecModel) {
    var potentialData = [];
    var availableNames = [];
    ecModel.eachRawSeries(function (seriesModel) {
      var seriesName = seriesModel.name;
      availableNames.push(seriesName);
      var isPotential;
      if (seriesModel.legendVisualProvider) {
        var provider = seriesModel.legendVisualProvider;
        var names = provider.getAllNames();
        if (!ecModel.isSeriesFiltered(seriesModel)) {
          availableNames = availableNames.concat(names);
        }
        if (names.length) {
          potentialData = potentialData.concat(names);
        } else {
          isPotential = true;
        }
      } else {
        isPotential = true;
      }
      if (isPotential && (0,util_model.isNameSpecified)(seriesModel)) {
        potentialData.push(seriesModel.name);
      }
    });
    /**
     * @type {Array.<string>}
     * @private
     */
    this._availableNames = availableNames;
    // If legend.data is not specified in option, use availableNames as data,
    // which is convenient for user preparing option.
    var rawData = this.get('data') || potentialData;
    var legendNameMap = util.createHashMap();
    var legendData = util.map(rawData, function (dataItem) {
      // Can be string or number
      if (util.isString(dataItem) || util.isNumber(dataItem)) {
        dataItem = {
          name: dataItem
        };
      }
      if (legendNameMap.get(dataItem.name)) {
        // remove legend name duplicate
        return null;
      }
      legendNameMap.set(dataItem.name, true);
      return new Model["default"](dataItem, this, this.ecModel);
    }, this);
    /**
     * @type {Array.<module:echarts/model/Model>}
     * @private
     */
    this._data = util.filter(legendData, function (item) {
      return !!item;
    });
  };
  LegendModel.prototype.getData = function () {
    return this._data;
  };
  LegendModel.prototype.select = function (name) {
    var selected = this.option.selected;
    var selectedMode = this.get('selectedMode');
    if (selectedMode === 'single') {
      var data = this._data;
      util.each(data, function (dataItem) {
        selected[dataItem.get('name')] = false;
      });
    }
    selected[name] = true;
  };
  LegendModel.prototype.unSelect = function (name) {
    if (this.get('selectedMode') !== 'single') {
      this.option.selected[name] = false;
    }
  };
  LegendModel.prototype.toggleSelected = function (name) {
    var selected = this.option.selected;
    // Default is true
    if (!selected.hasOwnProperty(name)) {
      selected[name] = true;
    }
    this[selected[name] ? 'unSelect' : 'select'](name);
  };
  LegendModel.prototype.allSelect = function () {
    var data = this._data;
    var selected = this.option.selected;
    util.each(data, function (dataItem) {
      selected[dataItem.get('name', true)] = true;
    });
  };
  LegendModel.prototype.inverseSelect = function () {
    var data = this._data;
    var selected = this.option.selected;
    util.each(data, function (dataItem) {
      var name = dataItem.get('name', true);
      // Initially, default value is true
      if (!selected.hasOwnProperty(name)) {
        selected[name] = true;
      }
      selected[name] = !selected[name];
    });
  };
  LegendModel.prototype.isSelected = function (name) {
    var selected = this.option.selected;
    return !(selected.hasOwnProperty(name) && !selected[name]) && util.indexOf(this._availableNames, name) >= 0;
  };
  LegendModel.prototype.getOrient = function () {
    return this.get('orient') === 'vertical' ? {
      index: 1,
      name: 'vertical'
    } : {
      index: 0,
      name: 'horizontal'
    };
  };
  LegendModel.type = 'legend.plain';
  LegendModel.dependencies = ['series'];
  LegendModel.defaultOption = {
    // zlevel: 0,
    z: 4,
    show: true,
    orient: 'horizontal',
    left: 'center',
    // right: 'center',
    top: 0,
    // bottom: null,
    align: 'auto',
    backgroundColor: 'rgba(0,0,0,0)',
    borderColor: '#ccc',
    borderRadius: 0,
    borderWidth: 0,
    padding: 5,
    itemGap: 10,
    itemWidth: 25,
    itemHeight: 14,
    symbolRotate: 'inherit',
    symbolKeepAspect: true,
    inactiveColor: '#ccc',
    inactiveBorderColor: '#ccc',
    inactiveBorderWidth: 'auto',
    itemStyle: {
      color: 'inherit',
      opacity: 'inherit',
      borderColor: 'inherit',
      borderWidth: 'auto',
      borderCap: 'inherit',
      borderJoin: 'inherit',
      borderDashOffset: 'inherit',
      borderMiterLimit: 'inherit'
    },
    lineStyle: {
      width: 'auto',
      color: 'inherit',
      inactiveColor: '#ccc',
      inactiveWidth: 2,
      opacity: 'inherit',
      type: 'inherit',
      cap: 'inherit',
      join: 'inherit',
      dashOffset: 'inherit',
      miterLimit: 'inherit'
    },
    textStyle: {
      color: '#333'
    },
    selectedMode: true,
    selector: false,
    selectorLabel: {
      show: true,
      borderRadius: 10,
      padding: [3, 5, 3, 5],
      fontSize: 12,
      fontFamily: 'sans-serif',
      color: '#666',
      borderWidth: 1,
      borderColor: '#666'
    },
    emphasis: {
      selectorLabel: {
        show: true,
        color: '#eee',
        backgroundColor: '#666'
      }
    },
    selectorPosition: 'auto',
    selectorItemGap: 7,
    selectorButtonGap: 10,
    tooltip: {
      show: false
    }
  };
  return LegendModel;
}(Component["default"]);
/* ESM default export */ var legend_LegendModel = (LegendModel_LegendModel);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/tool/color.js
var color = __webpack_require__(67375);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Group.js
var Group = __webpack_require__(58695);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Text.js
var Text = __webpack_require__(97199);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/Rect.js + 1 modules
var Rect = __webpack_require__(40361);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/graphic.js
var graphic = __webpack_require__(16636);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/states.js
var states = __webpack_require__(63344);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/label/labelStyle.js
var labelStyle = __webpack_require__(77704);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/helper/listComponent.js
var listComponent = __webpack_require__(30177);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/layout.js
var layout = __webpack_require__(37624);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/view/Component.js
var view_Component = __webpack_require__(28440);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/symbol.js
var symbol = __webpack_require__(44421);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/decal.js
var decal = __webpack_require__(75965);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/innerStore.js
var innerStore = __webpack_require__(55413);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/legend/LegendView.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/












var curry = util.curry;
var each = util.each;
var LegendView_Group = Group["default"];
var LegendView_LegendView = /** @class */function (_super) {
  (0,tslib_es6.__extends)(LegendView, _super);
  function LegendView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = LegendView.type;
    _this.newlineDisabled = false;
    return _this;
  }
  LegendView.prototype.init = function () {
    this.group.add(this._contentGroup = new LegendView_Group());
    this.group.add(this._selectorGroup = new LegendView_Group());
    this._isFirstRender = true;
  };
  /**
   * @protected
   */
  LegendView.prototype.getContentGroup = function () {
    return this._contentGroup;
  };
  /**
   * @protected
   */
  LegendView.prototype.getSelectorGroup = function () {
    return this._selectorGroup;
  };
  /**
   * @override
   */
  LegendView.prototype.render = function (legendModel, ecModel, api) {
    var isFirstRender = this._isFirstRender;
    this._isFirstRender = false;
    this.resetInner();
    if (!legendModel.get('show', true)) {
      return;
    }
    var itemAlign = legendModel.get('align');
    var orient = legendModel.get('orient');
    if (!itemAlign || itemAlign === 'auto') {
      itemAlign = legendModel.get('left') === 'right' && orient === 'vertical' ? 'right' : 'left';
    }
    // selector has been normalized to an array in model
    var selector = legendModel.get('selector', true);
    var selectorPosition = legendModel.get('selectorPosition', true);
    if (selector && (!selectorPosition || selectorPosition === 'auto')) {
      selectorPosition = orient === 'horizontal' ? 'end' : 'start';
    }
    this.renderInner(itemAlign, legendModel, ecModel, api, selector, orient, selectorPosition);
    // Perform layout.
    var positionInfo = legendModel.getBoxLayoutParams();
    var viewportSize = {
      width: api.getWidth(),
      height: api.getHeight()
    };
    var padding = legendModel.get('padding');
    var maxSize = layout.getLayoutRect(positionInfo, viewportSize, padding);
    var mainRect = this.layoutInner(legendModel, itemAlign, maxSize, isFirstRender, selector, selectorPosition);
    // Place mainGroup, based on the calculated `mainRect`.
    var layoutRect = layout.getLayoutRect(util.defaults({
      width: mainRect.width,
      height: mainRect.height
    }, positionInfo), viewportSize, padding);
    this.group.x = layoutRect.x - mainRect.x;
    this.group.y = layoutRect.y - mainRect.y;
    this.group.markRedraw();
    // Render background after group is layout.
    this.group.add(this._backgroundEl = (0,listComponent.makeBackground)(mainRect, legendModel));
  };
  LegendView.prototype.resetInner = function () {
    this.getContentGroup().removeAll();
    this._backgroundEl && this.group.remove(this._backgroundEl);
    this.getSelectorGroup().removeAll();
  };
  LegendView.prototype.renderInner = function (itemAlign, legendModel, ecModel, api, selector, orient, selectorPosition) {
    var contentGroup = this.getContentGroup();
    var legendDrawnMap = util.createHashMap();
    var selectMode = legendModel.get('selectedMode');
    var excludeSeriesId = [];
    ecModel.eachRawSeries(function (seriesModel) {
      !seriesModel.get('legendHoverLink') && excludeSeriesId.push(seriesModel.id);
    });
    each(legendModel.getData(), function (legendItemModel, dataIndex) {
      var name = legendItemModel.get('name');
      // Use empty string or \n as a newline string
      if (!this.newlineDisabled && (name === '' || name === '\n')) {
        var g = new LegendView_Group();
        // @ts-ignore
        g.newline = true;
        contentGroup.add(g);
        return;
      }
      // Representitive series.
      var seriesModel = ecModel.getSeriesByName(name)[0];
      if (legendDrawnMap.get(name)) {
        // Have been drawn
        return;
      }
      // Legend to control series.
      if (seriesModel) {
        var data = seriesModel.getData();
        var lineVisualStyle = data.getVisual('legendLineStyle') || {};
        var legendIcon = data.getVisual('legendIcon');
        /**
         * `data.getVisual('style')` may be the color from the register
         * in series. For example, for line series,
         */
        var style = data.getVisual('style');
        var itemGroup = this._createItem(seriesModel, name, dataIndex, legendItemModel, legendModel, itemAlign, lineVisualStyle, style, legendIcon, selectMode, api);
        itemGroup.on('click', curry(dispatchSelectAction, name, null, api, excludeSeriesId)).on('mouseover', curry(dispatchHighlightAction, seriesModel.name, null, api, excludeSeriesId)).on('mouseout', curry(dispatchDownplayAction, seriesModel.name, null, api, excludeSeriesId));
        if (ecModel.ssr) {
          itemGroup.eachChild(function (child) {
            var ecData = (0,innerStore.getECData)(child);
            ecData.seriesIndex = seriesModel.seriesIndex;
            ecData.dataIndex = dataIndex;
            ecData.ssrType = 'legend';
          });
        }
        legendDrawnMap.set(name, true);
      } else {
        // Legend to control data. In pie and funnel.
        ecModel.eachRawSeries(function (seriesModel) {
          // In case multiple series has same data name
          if (legendDrawnMap.get(name)) {
            return;
          }
          if (seriesModel.legendVisualProvider) {
            var provider = seriesModel.legendVisualProvider;
            if (!provider.containName(name)) {
              return;
            }
            var idx = provider.indexOfName(name);
            var style = provider.getItemVisual(idx, 'style');
            var legendIcon = provider.getItemVisual(idx, 'legendIcon');
            var colorArr = (0,color.parse)(style.fill);
            // Color may be set to transparent in visualMap when data is out of range.
            // Do not show nothing.
            if (colorArr && colorArr[3] === 0) {
              colorArr[3] = 0.2;
              // TODO color is set to 0, 0, 0, 0. Should show correct RGBA
              style = util.extend(util.extend({}, style), {
                fill: (0,color.stringify)(colorArr, 'rgba')
              });
            }
            var itemGroup = this._createItem(seriesModel, name, dataIndex, legendItemModel, legendModel, itemAlign, {}, style, legendIcon, selectMode, api);
            // FIXME: consider different series has items with the same name.
            itemGroup.on('click', curry(dispatchSelectAction, null, name, api, excludeSeriesId))
            // Should not specify the series name, consider legend controls
            // more than one pie series.
            .on('mouseover', curry(dispatchHighlightAction, null, name, api, excludeSeriesId)).on('mouseout', curry(dispatchDownplayAction, null, name, api, excludeSeriesId));
            if (ecModel.ssr) {
              itemGroup.eachChild(function (child) {
                var ecData = (0,innerStore.getECData)(child);
                ecData.seriesIndex = seriesModel.seriesIndex;
                ecData.dataIndex = dataIndex;
                ecData.ssrType = 'legend';
              });
            }
            legendDrawnMap.set(name, true);
          }
        }, this);
      }
      if (false) {}
    }, this);
    if (selector) {
      this._createSelector(selector, legendModel, api, orient, selectorPosition);
    }
  };
  LegendView.prototype._createSelector = function (selector, legendModel, api, orient, selectorPosition) {
    var selectorGroup = this.getSelectorGroup();
    each(selector, function createSelectorButton(selectorItem) {
      var type = selectorItem.type;
      var labelText = new Text["default"]({
        style: {
          x: 0,
          y: 0,
          align: 'center',
          verticalAlign: 'middle'
        },
        onclick: function () {
          api.dispatchAction({
            type: type === 'all' ? 'legendAllSelect' : 'legendInverseSelect',
            legendId: legendModel.id
          });
        }
      });
      selectorGroup.add(labelText);
      var labelModel = legendModel.getModel('selectorLabel');
      var emphasisLabelModel = legendModel.getModel(['emphasis', 'selectorLabel']);
      (0,labelStyle.setLabelStyle)(labelText, {
        normal: labelModel,
        emphasis: emphasisLabelModel
      }, {
        defaultText: selectorItem.title
      });
      (0,states.enableHoverEmphasis)(labelText);
    });
  };
  LegendView.prototype._createItem = function (seriesModel, name, dataIndex, legendItemModel, legendModel, itemAlign, lineVisualStyle, itemVisualStyle, legendIcon, selectMode, api) {
    var drawType = seriesModel.visualDrawType;
    var itemWidth = legendModel.get('itemWidth');
    var itemHeight = legendModel.get('itemHeight');
    var isSelected = legendModel.isSelected(name);
    var iconRotate = legendItemModel.get('symbolRotate');
    var symbolKeepAspect = legendItemModel.get('symbolKeepAspect');
    var legendIconType = legendItemModel.get('icon');
    legendIcon = legendIconType || legendIcon || 'roundRect';
    var style = getLegendStyle(legendIcon, legendItemModel, lineVisualStyle, itemVisualStyle, drawType, isSelected, api);
    var itemGroup = new LegendView_Group();
    var textStyleModel = legendItemModel.getModel('textStyle');
    if (util.isFunction(seriesModel.getLegendIcon) && (!legendIconType || legendIconType === 'inherit')) {
      // Series has specific way to define legend icon
      itemGroup.add(seriesModel.getLegendIcon({
        itemWidth: itemWidth,
        itemHeight: itemHeight,
        icon: legendIcon,
        iconRotate: iconRotate,
        itemStyle: style.itemStyle,
        lineStyle: style.lineStyle,
        symbolKeepAspect: symbolKeepAspect
      }));
    } else {
      // Use default legend icon policy for most series
      var rotate = legendIconType === 'inherit' && seriesModel.getData().getVisual('symbol') ? iconRotate === 'inherit' ? seriesModel.getData().getVisual('symbolRotate') : iconRotate : 0; // No rotation for no icon
      itemGroup.add(getDefaultLegendIcon({
        itemWidth: itemWidth,
        itemHeight: itemHeight,
        icon: legendIcon,
        iconRotate: rotate,
        itemStyle: style.itemStyle,
        lineStyle: style.lineStyle,
        symbolKeepAspect: symbolKeepAspect
      }));
    }
    var textX = itemAlign === 'left' ? itemWidth + 5 : -5;
    var textAlign = itemAlign;
    var formatter = legendModel.get('formatter');
    var content = name;
    if (util.isString(formatter) && formatter) {
      content = formatter.replace('{name}', name != null ? name : '');
    } else if (util.isFunction(formatter)) {
      content = formatter(name);
    }
    var textColor = isSelected ? textStyleModel.getTextColor() : legendItemModel.get('inactiveColor');
    itemGroup.add(new Text["default"]({
      style: (0,labelStyle.createTextStyle)(textStyleModel, {
        text: content,
        x: textX,
        y: itemHeight / 2,
        fill: textColor,
        align: textAlign,
        verticalAlign: 'middle'
      }, {
        inheritColor: textColor
      })
    }));
    // Add a invisible rect to increase the area of mouse hover
    var hitRect = new Rect["default"]({
      shape: itemGroup.getBoundingRect(),
      style: {
        // Cannot use 'invisible' because SVG SSR will miss the node
        fill: 'transparent'
      }
    });
    var tooltipModel = legendItemModel.getModel('tooltip');
    if (tooltipModel.get('show')) {
      graphic.setTooltipConfig({
        el: hitRect,
        componentModel: legendModel,
        itemName: name,
        itemTooltipOption: tooltipModel.option
      });
    }
    itemGroup.add(hitRect);
    itemGroup.eachChild(function (child) {
      child.silent = true;
    });
    hitRect.silent = !selectMode;
    this.getContentGroup().add(itemGroup);
    (0,states.enableHoverEmphasis)(itemGroup);
    // @ts-ignore
    itemGroup.__legendDataIndex = dataIndex;
    return itemGroup;
  };
  LegendView.prototype.layoutInner = function (legendModel, itemAlign, maxSize, isFirstRender, selector, selectorPosition) {
    var contentGroup = this.getContentGroup();
    var selectorGroup = this.getSelectorGroup();
    // Place items in contentGroup.
    layout.box(legendModel.get('orient'), contentGroup, legendModel.get('itemGap'), maxSize.width, maxSize.height);
    var contentRect = contentGroup.getBoundingRect();
    var contentPos = [-contentRect.x, -contentRect.y];
    selectorGroup.markRedraw();
    contentGroup.markRedraw();
    if (selector) {
      // Place buttons in selectorGroup
      layout.box(
      // Buttons in selectorGroup always layout horizontally
      'horizontal', selectorGroup, legendModel.get('selectorItemGap', true));
      var selectorRect = selectorGroup.getBoundingRect();
      var selectorPos = [-selectorRect.x, -selectorRect.y];
      var selectorButtonGap = legendModel.get('selectorButtonGap', true);
      var orientIdx = legendModel.getOrient().index;
      var wh = orientIdx === 0 ? 'width' : 'height';
      var hw = orientIdx === 0 ? 'height' : 'width';
      var yx = orientIdx === 0 ? 'y' : 'x';
      if (selectorPosition === 'end') {
        selectorPos[orientIdx] += contentRect[wh] + selectorButtonGap;
      } else {
        contentPos[orientIdx] += selectorRect[wh] + selectorButtonGap;
      }
      // Always align selector to content as 'middle'
      selectorPos[1 - orientIdx] += contentRect[hw] / 2 - selectorRect[hw] / 2;
      selectorGroup.x = selectorPos[0];
      selectorGroup.y = selectorPos[1];
      contentGroup.x = contentPos[0];
      contentGroup.y = contentPos[1];
      var mainRect = {
        x: 0,
        y: 0
      };
      mainRect[wh] = contentRect[wh] + selectorButtonGap + selectorRect[wh];
      mainRect[hw] = Math.max(contentRect[hw], selectorRect[hw]);
      mainRect[yx] = Math.min(0, selectorRect[yx] + selectorPos[1 - orientIdx]);
      return mainRect;
    } else {
      contentGroup.x = contentPos[0];
      contentGroup.y = contentPos[1];
      return this.group.getBoundingRect();
    }
  };
  /**
   * @protected
   */
  LegendView.prototype.remove = function () {
    this.getContentGroup().removeAll();
    this._isFirstRender = true;
  };
  LegendView.type = 'legend.plain';
  return LegendView;
}(view_Component["default"]);
function getLegendStyle(iconType, legendItemModel, lineVisualStyle, itemVisualStyle, drawType, isSelected, api) {
  /**
   * Use series style if is inherit;
   * elsewise, use legend style
   */
  function handleCommonProps(style, visualStyle) {
    // If lineStyle.width is 'auto', it is set to be 2 if series has border
    if (style.lineWidth === 'auto') {
      style.lineWidth = visualStyle.lineWidth > 0 ? 2 : 0;
    }
    each(style, function (propVal, propName) {
      style[propName] === 'inherit' && (style[propName] = visualStyle[propName]);
    });
  }
  // itemStyle
  var itemStyleModel = legendItemModel.getModel('itemStyle');
  var itemStyle = itemStyleModel.getItemStyle();
  var iconBrushType = iconType.lastIndexOf('empty', 0) === 0 ? 'fill' : 'stroke';
  var decalStyle = itemStyleModel.getShallow('decal');
  itemStyle.decal = !decalStyle || decalStyle === 'inherit' ? itemVisualStyle.decal : (0,decal.createOrUpdatePatternFromDecal)(decalStyle, api);
  if (itemStyle.fill === 'inherit') {
    /**
     * Series with visualDrawType as 'stroke' should have
     * series stroke as legend fill
     */
    itemStyle.fill = itemVisualStyle[drawType];
  }
  if (itemStyle.stroke === 'inherit') {
    /**
     * icon type with "emptyXXX" should use fill color
     * in visual style
     */
    itemStyle.stroke = itemVisualStyle[iconBrushType];
  }
  if (itemStyle.opacity === 'inherit') {
    /**
     * Use lineStyle.opacity if drawType is stroke
     */
    itemStyle.opacity = (drawType === 'fill' ? itemVisualStyle : lineVisualStyle).opacity;
  }
  handleCommonProps(itemStyle, itemVisualStyle);
  // lineStyle
  var legendLineModel = legendItemModel.getModel('lineStyle');
  var lineStyle = legendLineModel.getLineStyle();
  handleCommonProps(lineStyle, lineVisualStyle);
  // Fix auto color to real color
  itemStyle.fill === 'auto' && (itemStyle.fill = itemVisualStyle.fill);
  itemStyle.stroke === 'auto' && (itemStyle.stroke = itemVisualStyle.fill);
  lineStyle.stroke === 'auto' && (lineStyle.stroke = itemVisualStyle.fill);
  if (!isSelected) {
    var borderWidth = legendItemModel.get('inactiveBorderWidth');
    /**
     * Since stroke is set to be inactiveBorderColor, it may occur that
     * there is no border in series but border in legend, so we need to
     * use border only when series has border if is set to be auto
     */
    var visualHasBorder = itemStyle[iconBrushType];
    itemStyle.lineWidth = borderWidth === 'auto' ? itemVisualStyle.lineWidth > 0 && visualHasBorder ? 2 : 0 : itemStyle.lineWidth;
    itemStyle.fill = legendItemModel.get('inactiveColor');
    itemStyle.stroke = legendItemModel.get('inactiveBorderColor');
    lineStyle.stroke = legendLineModel.get('inactiveColor');
    lineStyle.lineWidth = legendLineModel.get('inactiveWidth');
  }
  return {
    itemStyle: itemStyle,
    lineStyle: lineStyle
  };
}
function getDefaultLegendIcon(opt) {
  var symboType = opt.icon || 'roundRect';
  var icon = (0,symbol.createSymbol)(symboType, 0, 0, opt.itemWidth, opt.itemHeight, opt.itemStyle.fill, opt.symbolKeepAspect);
  icon.setStyle(opt.itemStyle);
  icon.rotation = (opt.iconRotate || 0) * Math.PI / 180;
  icon.setOrigin([opt.itemWidth / 2, opt.itemHeight / 2]);
  if (symboType.indexOf('empty') > -1) {
    icon.style.stroke = icon.style.fill;
    icon.style.fill = '#fff';
    icon.style.lineWidth = 2;
  }
  return icon;
}
function dispatchSelectAction(seriesName, dataName, api, excludeSeriesId) {
  // downplay before unselect
  dispatchDownplayAction(seriesName, dataName, api, excludeSeriesId);
  api.dispatchAction({
    type: 'legendToggleSelect',
    name: seriesName != null ? seriesName : dataName
  });
  // highlight after select
  // TODO highlight immediately may cause animation loss.
  dispatchHighlightAction(seriesName, dataName, api, excludeSeriesId);
}
function isUseHoverLayer(api) {
  var list = api.getZr().storage.getDisplayList();
  var emphasisState;
  var i = 0;
  var len = list.length;
  while (i < len && !(emphasisState = list[i].states.emphasis)) {
    i++;
  }
  return emphasisState && emphasisState.hoverLayer;
}
function dispatchHighlightAction(seriesName, dataName, api, excludeSeriesId) {
  // If element hover will move to a hoverLayer.
  if (!isUseHoverLayer(api)) {
    api.dispatchAction({
      type: 'highlight',
      seriesName: seriesName,
      name: dataName,
      excludeSeriesId: excludeSeriesId
    });
  }
}
function dispatchDownplayAction(seriesName, dataName, api, excludeSeriesId) {
  // If element hover will move to a hoverLayer.
  if (!isUseHoverLayer(api)) {
    api.dispatchAction({
      type: 'downplay',
      seriesName: seriesName,
      name: dataName,
      excludeSeriesId: excludeSeriesId
    });
  }
}
/* ESM default export */ var legend_LegendView = (LegendView_LegendView);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/legend/legendFilter.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/
function legendFilter(ecModel) {
  var legendModels = ecModel.findComponents({
    mainType: 'legend'
  });
  if (legendModels && legendModels.length) {
    ecModel.filterSeries(function (series) {
      // If in any legend component the status is not selected.
      // Because in legend series is assumed selected when it is not in the legend data.
      for (var i = 0; i < legendModels.length; i++) {
        if (!legendModels[i].isSelected(series.name)) {
          return false;
        }
      }
      return true;
    });
  }
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/legend/legendAction.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

function legendSelectActionHandler(methodName, payload, ecModel) {
  var isAllSelect = methodName === 'allSelect' || methodName === 'inverseSelect';
  var selectedMap = {};
  var actionLegendIndices = [];
  ecModel.eachComponent({
    mainType: 'legend',
    query: payload
  }, function (legendModel) {
    if (isAllSelect) {
      legendModel[methodName]();
    } else {
      legendModel[methodName](payload.name);
    }
    makeSelectedMap(legendModel, selectedMap);
    actionLegendIndices.push(legendModel.componentIndex);
  });
  var allSelectedMap = {};
  // make selectedMap from all legend components
  ecModel.eachComponent('legend', function (legendModel) {
    (0,util.each)(selectedMap, function (isSelected, name) {
      // Force other legend has same selected status
      // Or the first is toggled to true and other are toggled to false
      // In the case one legend has some item unSelected in option. And if other legend
      // doesn't has the item, they will assume it is selected.
      legendModel[isSelected ? 'select' : 'unSelect'](name);
    });
    makeSelectedMap(legendModel, allSelectedMap);
  });
  // Return the event explicitly
  return isAllSelect ? {
    selected: allSelectedMap,
    // return legendIndex array to tell the developers which legends are allSelect / inverseSelect
    legendIndex: actionLegendIndices
  } : {
    name: payload.name,
    selected: allSelectedMap
  };
}
function makeSelectedMap(legendModel, out) {
  var selectedMap = out || {};
  (0,util.each)(legendModel.getData(), function (model) {
    var name = model.get('name');
    // Wrap element
    if (name === '\n' || name === '') {
      return;
    }
    var isItemSelected = legendModel.isSelected(name);
    if ((0,util.hasOwn)(selectedMap, name)) {
      // Unselected if any legend is unselected
      selectedMap[name] = selectedMap[name] && isItemSelected;
    } else {
      selectedMap[name] = isItemSelected;
    }
  });
  return selectedMap;
}
function installLegendAction(registers) {
  /**
   * @event legendToggleSelect
   * @type {Object}
   * @property {string} type 'legendToggleSelect'
   * @property {string} [from]
   * @property {string} name Series name or data item name
   */
  registers.registerAction('legendToggleSelect', 'legendselectchanged', (0,util.curry)(legendSelectActionHandler, 'toggleSelected'));
  registers.registerAction('legendAllSelect', 'legendselectall', (0,util.curry)(legendSelectActionHandler, 'allSelect'));
  registers.registerAction('legendInverseSelect', 'legendinverseselect', (0,util.curry)(legendSelectActionHandler, 'inverseSelect'));
  /**
   * @event legendSelect
   * @type {Object}
   * @property {string} type 'legendSelect'
   * @property {string} name Series name or data item name
   */
  registers.registerAction('legendSelect', 'legendselected', (0,util.curry)(legendSelectActionHandler, 'select'));
  /**
   * @event legendUnSelect
   * @type {Object}
   * @property {string} type 'legendUnSelect'
   * @property {string} name Series name or data item name
   */
  registers.registerAction('legendUnSelect', 'legendunselected', (0,util.curry)(legendSelectActionHandler, 'unSelect'));
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/legend/installLegendPlain.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  registers.registerComponentModel(legend_LegendModel);
  registers.registerComponentView(legend_LegendView);
  registers.registerProcessor(registers.PRIORITY.PROCESSOR.SERIES_FILTER, legendFilter);
  registers.registerSubTypeDefaulter('legend', function () {
    return 'plain';
  });
  installLegendAction(registers);
}
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/component.js
var component = __webpack_require__(95202);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/legend/ScrollableLegendModel.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/




var ScrollableLegendModel_ScrollableLegendModel = /** @class */function (_super) {
  (0,tslib_es6.__extends)(ScrollableLegendModel, _super);
  function ScrollableLegendModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = ScrollableLegendModel.type;
    return _this;
  }
  /**
   * @param {number} scrollDataIndex
   */
  ScrollableLegendModel.prototype.setScrollDataIndex = function (scrollDataIndex) {
    this.option.scrollDataIndex = scrollDataIndex;
  };
  ScrollableLegendModel.prototype.init = function (option, parentModel, ecModel) {
    var inputPositionParams = (0,layout.getLayoutParams)(option);
    _super.prototype.init.call(this, option, parentModel, ecModel);
    mergeAndNormalizeLayoutParams(this, option, inputPositionParams);
  };
  /**
   * @override
   */
  ScrollableLegendModel.prototype.mergeOption = function (option, ecModel) {
    _super.prototype.mergeOption.call(this, option, ecModel);
    mergeAndNormalizeLayoutParams(this, this.option, option);
  };
  ScrollableLegendModel.type = 'legend.scroll';
  ScrollableLegendModel.defaultOption = (0,component.inheritDefaultOption)(legend_LegendModel.defaultOption, {
    scrollDataIndex: 0,
    pageButtonItemGap: 5,
    pageButtonGap: null,
    pageButtonPosition: 'end',
    pageFormatter: '{current}/{total}',
    pageIcons: {
      horizontal: ['M0,0L12,-10L12,10z', 'M0,0L-12,-10L-12,10z'],
      vertical: ['M0,0L20,0L10,-20z', 'M0,0L20,0L10,20z']
    },
    pageIconColor: '#2f4554',
    pageIconInactiveColor: '#aaa',
    pageIconSize: 15,
    pageTextStyle: {
      color: '#333'
    },
    animationDurationUpdate: 800
  });
  return ScrollableLegendModel;
}(legend_LegendModel);
;
// Do not `ignoreSize` to enable setting {left: 10, right: 10}.
function mergeAndNormalizeLayoutParams(legendModel, target, raw) {
  var orient = legendModel.getOrient();
  var ignoreSize = [1, 1];
  ignoreSize[orient.index] = 0;
  (0,layout.mergeLayoutParam)(target, raw, {
    type: 'box',
    ignoreSize: !!ignoreSize
  });
}
/* ESM default export */ var legend_ScrollableLegendModel = (ScrollableLegendModel_ScrollableLegendModel);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/animation/basicTransition.js
var basicTransition = __webpack_require__(17524);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/legend/ScrollableLegendView.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

/**
 * Separate legend and scrollable legend to reduce package size.
 */




var ScrollableLegendView_Group = Group["default"];
var WH = ['width', 'height'];
var XY = ['x', 'y'];
var ScrollableLegendView_ScrollableLegendView = /** @class */function (_super) {
  (0,tslib_es6.__extends)(ScrollableLegendView, _super);
  function ScrollableLegendView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = ScrollableLegendView.type;
    _this.newlineDisabled = true;
    _this._currentIndex = 0;
    return _this;
  }
  ScrollableLegendView.prototype.init = function () {
    _super.prototype.init.call(this);
    this.group.add(this._containerGroup = new ScrollableLegendView_Group());
    this._containerGroup.add(this.getContentGroup());
    this.group.add(this._controllerGroup = new ScrollableLegendView_Group());
  };
  /**
   * @override
   */
  ScrollableLegendView.prototype.resetInner = function () {
    _super.prototype.resetInner.call(this);
    this._controllerGroup.removeAll();
    this._containerGroup.removeClipPath();
    this._containerGroup.__rectSize = null;
  };
  /**
   * @override
   */
  ScrollableLegendView.prototype.renderInner = function (itemAlign, legendModel, ecModel, api, selector, orient, selectorPosition) {
    var self = this;
    // Render content items.
    _super.prototype.renderInner.call(this, itemAlign, legendModel, ecModel, api, selector, orient, selectorPosition);
    var controllerGroup = this._controllerGroup;
    // FIXME: support be 'auto' adapt to size number text length,
    // e.g., '3/12345' should not overlap with the control arrow button.
    var pageIconSize = legendModel.get('pageIconSize', true);
    var pageIconSizeArr = util.isArray(pageIconSize) ? pageIconSize : [pageIconSize, pageIconSize];
    createPageButton('pagePrev', 0);
    var pageTextStyleModel = legendModel.getModel('pageTextStyle');
    controllerGroup.add(new Text["default"]({
      name: 'pageText',
      style: {
        // Placeholder to calculate a proper layout.
        text: 'xx/xx',
        fill: pageTextStyleModel.getTextColor(),
        font: pageTextStyleModel.getFont(),
        verticalAlign: 'middle',
        align: 'center'
      },
      silent: true
    }));
    createPageButton('pageNext', 1);
    function createPageButton(name, iconIdx) {
      var pageDataIndexName = name + 'DataIndex';
      var icon = graphic.createIcon(legendModel.get('pageIcons', true)[legendModel.getOrient().name][iconIdx], {
        // Buttons will be created in each render, so we do not need
        // to worry about avoiding using legendModel kept in scope.
        onclick: util.bind(self._pageGo, self, pageDataIndexName, legendModel, api)
      }, {
        x: -pageIconSizeArr[0] / 2,
        y: -pageIconSizeArr[1] / 2,
        width: pageIconSizeArr[0],
        height: pageIconSizeArr[1]
      });
      icon.name = name;
      controllerGroup.add(icon);
    }
  };
  /**
   * @override
   */
  ScrollableLegendView.prototype.layoutInner = function (legendModel, itemAlign, maxSize, isFirstRender, selector, selectorPosition) {
    var selectorGroup = this.getSelectorGroup();
    var orientIdx = legendModel.getOrient().index;
    var wh = WH[orientIdx];
    var xy = XY[orientIdx];
    var hw = WH[1 - orientIdx];
    var yx = XY[1 - orientIdx];
    selector && layout.box(
    // Buttons in selectorGroup always layout horizontally
    'horizontal', selectorGroup, legendModel.get('selectorItemGap', true));
    var selectorButtonGap = legendModel.get('selectorButtonGap', true);
    var selectorRect = selectorGroup.getBoundingRect();
    var selectorPos = [-selectorRect.x, -selectorRect.y];
    var processMaxSize = util.clone(maxSize);
    selector && (processMaxSize[wh] = maxSize[wh] - selectorRect[wh] - selectorButtonGap);
    var mainRect = this._layoutContentAndController(legendModel, isFirstRender, processMaxSize, orientIdx, wh, hw, yx, xy);
    if (selector) {
      if (selectorPosition === 'end') {
        selectorPos[orientIdx] += mainRect[wh] + selectorButtonGap;
      } else {
        var offset = selectorRect[wh] + selectorButtonGap;
        selectorPos[orientIdx] -= offset;
        mainRect[xy] -= offset;
      }
      mainRect[wh] += selectorRect[wh] + selectorButtonGap;
      selectorPos[1 - orientIdx] += mainRect[yx] + mainRect[hw] / 2 - selectorRect[hw] / 2;
      mainRect[hw] = Math.max(mainRect[hw], selectorRect[hw]);
      mainRect[yx] = Math.min(mainRect[yx], selectorRect[yx] + selectorPos[1 - orientIdx]);
      selectorGroup.x = selectorPos[0];
      selectorGroup.y = selectorPos[1];
      selectorGroup.markRedraw();
    }
    return mainRect;
  };
  ScrollableLegendView.prototype._layoutContentAndController = function (legendModel, isFirstRender, maxSize, orientIdx, wh, hw, yx, xy) {
    var contentGroup = this.getContentGroup();
    var containerGroup = this._containerGroup;
    var controllerGroup = this._controllerGroup;
    // Place items in contentGroup.
    layout.box(legendModel.get('orient'), contentGroup, legendModel.get('itemGap'), !orientIdx ? null : maxSize.width, orientIdx ? null : maxSize.height);
    layout.box(
    // Buttons in controller are layout always horizontally.
    'horizontal', controllerGroup, legendModel.get('pageButtonItemGap', true));
    var contentRect = contentGroup.getBoundingRect();
    var controllerRect = controllerGroup.getBoundingRect();
    var showController = this._showController = contentRect[wh] > maxSize[wh];
    // In case that the inner elements of contentGroup layout do not based on [0, 0]
    var contentPos = [-contentRect.x, -contentRect.y];
    // Remain contentPos when scroll animation perfroming.
    // If first rendering, `contentGroup.position` is [0, 0], which
    // does not make sense and may cause unexepcted animation if adopted.
    if (!isFirstRender) {
      contentPos[orientIdx] = contentGroup[xy];
    }
    // Layout container group based on 0.
    var containerPos = [0, 0];
    var controllerPos = [-controllerRect.x, -controllerRect.y];
    var pageButtonGap = util.retrieve2(legendModel.get('pageButtonGap', true), legendModel.get('itemGap', true));
    // Place containerGroup and controllerGroup and contentGroup.
    if (showController) {
      var pageButtonPosition = legendModel.get('pageButtonPosition', true);
      // controller is on the right / bottom.
      if (pageButtonPosition === 'end') {
        controllerPos[orientIdx] += maxSize[wh] - controllerRect[wh];
      }
      // controller is on the left / top.
      else {
        containerPos[orientIdx] += controllerRect[wh] + pageButtonGap;
      }
    }
    // Always align controller to content as 'middle'.
    controllerPos[1 - orientIdx] += contentRect[hw] / 2 - controllerRect[hw] / 2;
    contentGroup.setPosition(contentPos);
    containerGroup.setPosition(containerPos);
    controllerGroup.setPosition(controllerPos);
    // Calculate `mainRect` and set `clipPath`.
    // mainRect should not be calculated by `this.group.getBoundingRect()`
    // for sake of the overflow.
    var mainRect = {
      x: 0,
      y: 0
    };
    // Consider content may be overflow (should be clipped).
    mainRect[wh] = showController ? maxSize[wh] : contentRect[wh];
    mainRect[hw] = Math.max(contentRect[hw], controllerRect[hw]);
    // `containerRect[yx] + containerPos[1 - orientIdx]` is 0.
    mainRect[yx] = Math.min(0, controllerRect[yx] + controllerPos[1 - orientIdx]);
    containerGroup.__rectSize = maxSize[wh];
    if (showController) {
      var clipShape = {
        x: 0,
        y: 0
      };
      clipShape[wh] = Math.max(maxSize[wh] - controllerRect[wh] - pageButtonGap, 0);
      clipShape[hw] = mainRect[hw];
      containerGroup.setClipPath(new Rect["default"]({
        shape: clipShape
      }));
      // Consider content may be larger than container, container rect
      // can not be obtained from `containerGroup.getBoundingRect()`.
      containerGroup.__rectSize = clipShape[wh];
    } else {
      // Do not remove or ignore controller. Keep them set as placeholders.
      controllerGroup.eachChild(function (child) {
        child.attr({
          invisible: true,
          silent: true
        });
      });
    }
    // Content translate animation.
    var pageInfo = this._getPageInfo(legendModel);
    pageInfo.pageIndex != null && basicTransition.updateProps(contentGroup, {
      x: pageInfo.contentPosition[0],
      y: pageInfo.contentPosition[1]
    },
    // When switch from "show controller" to "not show controller", view should be
    // updated immediately without animation, otherwise causes weird effect.
    showController ? legendModel : null);
    this._updatePageInfoView(legendModel, pageInfo);
    return mainRect;
  };
  ScrollableLegendView.prototype._pageGo = function (to, legendModel, api) {
    var scrollDataIndex = this._getPageInfo(legendModel)[to];
    scrollDataIndex != null && api.dispatchAction({
      type: 'legendScroll',
      scrollDataIndex: scrollDataIndex,
      legendId: legendModel.id
    });
  };
  ScrollableLegendView.prototype._updatePageInfoView = function (legendModel, pageInfo) {
    var controllerGroup = this._controllerGroup;
    util.each(['pagePrev', 'pageNext'], function (name) {
      var key = name + 'DataIndex';
      var canJump = pageInfo[key] != null;
      var icon = controllerGroup.childOfName(name);
      if (icon) {
        icon.setStyle('fill', canJump ? legendModel.get('pageIconColor', true) : legendModel.get('pageIconInactiveColor', true));
        icon.cursor = canJump ? 'pointer' : 'default';
      }
    });
    var pageText = controllerGroup.childOfName('pageText');
    var pageFormatter = legendModel.get('pageFormatter');
    var pageIndex = pageInfo.pageIndex;
    var current = pageIndex != null ? pageIndex + 1 : 0;
    var total = pageInfo.pageCount;
    pageText && pageFormatter && pageText.setStyle('text', util.isString(pageFormatter) ? pageFormatter.replace('{current}', current == null ? '' : current + '').replace('{total}', total == null ? '' : total + '') : pageFormatter({
      current: current,
      total: total
    }));
  };
  /**
   *  contentPosition: Array.<number>, null when data item not found.
   *  pageIndex: number, null when data item not found.
   *  pageCount: number, always be a number, can be 0.
   *  pagePrevDataIndex: number, null when no previous page.
   *  pageNextDataIndex: number, null when no next page.
   * }
   */
  ScrollableLegendView.prototype._getPageInfo = function (legendModel) {
    var scrollDataIndex = legendModel.get('scrollDataIndex', true);
    var contentGroup = this.getContentGroup();
    var containerRectSize = this._containerGroup.__rectSize;
    var orientIdx = legendModel.getOrient().index;
    var wh = WH[orientIdx];
    var xy = XY[orientIdx];
    var targetItemIndex = this._findTargetItemIndex(scrollDataIndex);
    var children = contentGroup.children();
    var targetItem = children[targetItemIndex];
    var itemCount = children.length;
    var pCount = !itemCount ? 0 : 1;
    var result = {
      contentPosition: [contentGroup.x, contentGroup.y],
      pageCount: pCount,
      pageIndex: pCount - 1,
      pagePrevDataIndex: null,
      pageNextDataIndex: null
    };
    if (!targetItem) {
      return result;
    }
    var targetItemInfo = getItemInfo(targetItem);
    result.contentPosition[orientIdx] = -targetItemInfo.s;
    // Strategy:
    // (1) Always align based on the left/top most item.
    // (2) It is user-friendly that the last item shown in the
    // current window is shown at the begining of next window.
    // Otherwise if half of the last item is cut by the window,
    // it will have no chance to display entirely.
    // (3) Consider that item size probably be different, we
    // have calculate pageIndex by size rather than item index,
    // and we can not get page index directly by division.
    // (4) The window is to narrow to contain more than
    // one item, we should make sure that the page can be fliped.
    for (var i = targetItemIndex + 1, winStartItemInfo = targetItemInfo, winEndItemInfo = targetItemInfo, currItemInfo = null; i <= itemCount; ++i) {
      currItemInfo = getItemInfo(children[i]);
      if (
      // Half of the last item is out of the window.
      !currItemInfo && winEndItemInfo.e > winStartItemInfo.s + containerRectSize
      // If the current item does not intersect with the window, the new page
      // can be started at the current item or the last item.
      || currItemInfo && !intersect(currItemInfo, winStartItemInfo.s)) {
        if (winEndItemInfo.i > winStartItemInfo.i) {
          winStartItemInfo = winEndItemInfo;
        } else {
          // e.g., when page size is smaller than item size.
          winStartItemInfo = currItemInfo;
        }
        if (winStartItemInfo) {
          if (result.pageNextDataIndex == null) {
            result.pageNextDataIndex = winStartItemInfo.i;
          }
          ++result.pageCount;
        }
      }
      winEndItemInfo = currItemInfo;
    }
    for (var i = targetItemIndex - 1, winStartItemInfo = targetItemInfo, winEndItemInfo = targetItemInfo, currItemInfo = null; i >= -1; --i) {
      currItemInfo = getItemInfo(children[i]);
      if (
      // If the the end item does not intersect with the window started
      // from the current item, a page can be settled.
      (!currItemInfo || !intersect(winEndItemInfo, currItemInfo.s)
      // e.g., when page size is smaller than item size.
      ) && winStartItemInfo.i < winEndItemInfo.i) {
        winEndItemInfo = winStartItemInfo;
        if (result.pagePrevDataIndex == null) {
          result.pagePrevDataIndex = winStartItemInfo.i;
        }
        ++result.pageCount;
        ++result.pageIndex;
      }
      winStartItemInfo = currItemInfo;
    }
    return result;
    function getItemInfo(el) {
      if (el) {
        var itemRect = el.getBoundingRect();
        var start = itemRect[xy] + el[xy];
        return {
          s: start,
          e: start + itemRect[wh],
          i: el.__legendDataIndex
        };
      }
    }
    function intersect(itemInfo, winStart) {
      return itemInfo.e >= winStart && itemInfo.s <= winStart + containerRectSize;
    }
  };
  ScrollableLegendView.prototype._findTargetItemIndex = function (targetDataIndex) {
    if (!this._showController) {
      return 0;
    }
    var index;
    var contentGroup = this.getContentGroup();
    var defaultIndex;
    contentGroup.eachChild(function (child, idx) {
      var legendDataIdx = child.__legendDataIndex;
      // FIXME
      // If the given targetDataIndex (from model) is illegal,
      // we use defaultIndex. But the index on the legend model and
      // action payload is still illegal. That case will not be
      // changed until some scenario requires.
      if (defaultIndex == null && legendDataIdx != null) {
        defaultIndex = idx;
      }
      if (legendDataIdx === targetDataIndex) {
        index = idx;
      }
    });
    return index != null ? index : defaultIndex;
  };
  ScrollableLegendView.type = 'legend.scroll';
  return ScrollableLegendView;
}(legend_LegendView);
/* ESM default export */ var legend_ScrollableLegendView = (ScrollableLegendView_ScrollableLegendView);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/legend/scrollableLegendAction.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/
function installScrollableLegendAction(registers) {
  /**
   * @event legendScroll
   * @type {Object}
   * @property {string} type 'legendScroll'
   * @property {string} scrollDataIndex
   */
  registers.registerAction('legendScroll', 'legendscroll', function (payload, ecModel) {
    var scrollDataIndex = payload.scrollDataIndex;
    scrollDataIndex != null && ecModel.eachComponent({
      mainType: 'legend',
      subType: 'scroll',
      query: payload
    }, function (legendModel) {
      legendModel.setScrollDataIndex(scrollDataIndex);
    });
  });
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/legend/installLegendScroll.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/





function installLegendScroll_install(registers) {
  (0,extension.use)(install);
  registers.registerComponentModel(legend_ScrollableLegendModel);
  registers.registerComponentView(legend_ScrollableLegendView);
  installScrollableLegendAction(registers);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/legend/install.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  (0,extension.use)(install);
  (0,extension.use)(installLegendScroll_install);
}

}),
23573: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12012);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96585);
/* ESM import */var zrender_lib_core_env_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76226);
/* ESM import */var _model_mixin_dataFormat_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77178);
/* ESM import */var _model_Component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68943);
/* ESM import */var _util_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46451);
/* ESM import */var _tooltip_tooltipMarkup_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13134);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/







function fillLabel(opt) {
  (0,_util_model_js__WEBPACK_IMPORTED_MODULE_0__.defaultEmphasis)(opt, 'label', ['show']);
}
// { [componentType]: MarkerModel }
var inner = (0,_util_model_js__WEBPACK_IMPORTED_MODULE_0__.makeInner)();
var MarkerModel = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(MarkerModel, _super);
  function MarkerModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = MarkerModel.type;
    /**
     * If marker model is created by self from series
     */
    _this.createdBySelf = false;
    return _this;
  }
  /**
   * @overrite
   */
  MarkerModel.prototype.init = function (option, parentModel, ecModel) {
    if (false) {}
    this.mergeDefaultAndTheme(option, ecModel);
    this._mergeOption(option, ecModel, false, true);
  };
  MarkerModel.prototype.isAnimationEnabled = function () {
    if (zrender_lib_core_env_js__WEBPACK_IMPORTED_MODULE_3__["default"].node) {
      return false;
    }
    var hostSeries = this.__hostSeries;
    return this.getShallow('animation') && hostSeries && hostSeries.isAnimationEnabled();
  };
  /**
   * @overrite
   */
  MarkerModel.prototype.mergeOption = function (newOpt, ecModel) {
    this._mergeOption(newOpt, ecModel, false, false);
  };
  MarkerModel.prototype._mergeOption = function (newOpt, ecModel, createdBySelf, isInit) {
    var componentType = this.mainType;
    if (!createdBySelf) {
      ecModel.eachSeries(function (seriesModel) {
        // mainType can be markPoint, markLine, markArea
        var markerOpt = seriesModel.get(this.mainType, true);
        var markerModel = inner(seriesModel)[componentType];
        if (!markerOpt || !markerOpt.data) {
          inner(seriesModel)[componentType] = null;
          return;
        }
        if (!markerModel) {
          if (isInit) {
            // Default label emphasis `position` and `show`
            fillLabel(markerOpt);
          }
          zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__.each(markerOpt.data, function (item) {
            // FIXME Overwrite fillLabel method ?
            if (item instanceof Array) {
              fillLabel(item[0]);
              fillLabel(item[1]);
            } else {
              fillLabel(item);
            }
          });
          markerModel = this.createMarkerModelFromSeries(markerOpt, this, ecModel);
          // markerModel = new ImplementedMarkerModel(
          //     markerOpt, this, ecModel
          // );
          zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__.extend(markerModel, {
            mainType: this.mainType,
            // Use the same series index and name
            seriesIndex: seriesModel.seriesIndex,
            name: seriesModel.name,
            createdBySelf: true
          });
          markerModel.__hostSeries = seriesModel;
        } else {
          markerModel._mergeOption(markerOpt, ecModel, true);
        }
        inner(seriesModel)[componentType] = markerModel;
      }, this);
    }
  };
  MarkerModel.prototype.formatTooltip = function (dataIndex, multipleSeries, dataType) {
    var data = this.getData();
    var value = this.getRawValue(dataIndex);
    var itemName = data.getName(dataIndex);
    return (0,_tooltip_tooltipMarkup_js__WEBPACK_IMPORTED_MODULE_5__.createTooltipMarkup)('section', {
      header: this.name,
      blocks: [(0,_tooltip_tooltipMarkup_js__WEBPACK_IMPORTED_MODULE_5__.createTooltipMarkup)('nameValue', {
        name: itemName,
        value: value,
        noName: !itemName,
        noValue: value == null
      })]
    });
  };
  MarkerModel.prototype.getData = function () {
    return this._data;
  };
  MarkerModel.prototype.setData = function (data) {
    this._data = data;
  };
  MarkerModel.prototype.getDataParams = function (dataIndex, dataType) {
    var params = _model_mixin_dataFormat_js__WEBPACK_IMPORTED_MODULE_6__.DataFormatMixin.prototype.getDataParams.call(this, dataIndex, dataType);
    var hostSeries = this.__hostSeries;
    if (hostSeries) {
      params.seriesId = hostSeries.id;
      params.seriesName = hostSeries.name;
      params.seriesType = hostSeries.subType;
    }
    return params;
  };
  MarkerModel.getMarkerModelFromSeries = function (seriesModel,
  // Support three types of markers. Strict check.
  componentType) {
    return inner(seriesModel)[componentType];
  };
  MarkerModel.type = 'marker';
  MarkerModel.dependencies = ['series', 'grid', 'polar', 'geo'];
  return MarkerModel;
}(_model_Component_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_4__.mixin(MarkerModel, _model_mixin_dataFormat_js__WEBPACK_IMPORTED_MODULE_6__.DataFormatMixin.prototype);
/* ESM default export */ __webpack_exports__["default"] = (MarkerModel);

}),
87493: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12012);
/* ESM import */var _view_Component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28440);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96585);
/* ESM import */var _MarkerModel_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23573);
/* ESM import */var _util_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46451);
/* ESM import */var _util_states_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63344);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
var MarkerView = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(MarkerView, _super);
  function MarkerView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = MarkerView.type;
    return _this;
  }
  MarkerView.prototype.init = function () {
    this.markerGroupMap = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.createHashMap)();
  };
  MarkerView.prototype.render = function (markerModel, ecModel, api) {
    var _this = this;
    var markerGroupMap = this.markerGroupMap;
    markerGroupMap.each(function (item) {
      inner(item).keep = false;
    });
    ecModel.eachSeries(function (seriesModel) {
      var markerModel = _MarkerModel_js__WEBPACK_IMPORTED_MODULE_4__["default"].getMarkerModelFromSeries(seriesModel, _this.type);
      markerModel && _this.renderSeries(seriesModel, markerModel, ecModel, api);
    });
    markerGroupMap.each(function (item) {
      !inner(item).keep && _this.group.remove(item.group);
    });
  };
  MarkerView.prototype.markKeep = function (drawGroup) {
    inner(drawGroup).keep = true;
  };
  MarkerView.prototype.toggleBlurSeries = function (seriesModelList, isBlur) {
    var _this = this;
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.each)(seriesModelList, function (seriesModel) {
      var markerModel = _MarkerModel_js__WEBPACK_IMPORTED_MODULE_4__["default"].getMarkerModelFromSeries(seriesModel, _this.type);
      if (markerModel) {
        var data = markerModel.getData();
        data.eachItemGraphicEl(function (el) {
          if (el) {
            isBlur ? (0,_util_states_js__WEBPACK_IMPORTED_MODULE_5__.enterBlur)(el) : (0,_util_states_js__WEBPACK_IMPORTED_MODULE_5__.leaveBlur)(el);
          }
        });
      }
    });
  };
  MarkerView.type = 'marker';
  return MarkerView;
}(_view_Component_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* ESM default export */ __webpack_exports__["default"] = (MarkerView);

}),
78542: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return checkMarkerInSeries; }
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

function checkMarkerInSeries(seriesOpts, markerType) {
  if (!seriesOpts) {
    return false;
  }
  var seriesOptArr = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(seriesOpts) ? seriesOpts : [seriesOpts];
  for (var idx = 0; idx < seriesOptArr.length; idx++) {
    if (seriesOptArr[idx] && seriesOptArr[idx][markerType]) {
      return true;
    }
  }
  return false;
}

}),
15707: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  install: function() { return /* binding */ install; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/marker/checkMarkerInSeries.js
var checkMarkerInSeries = __webpack_require__(78542);
// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(12012);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/marker/MarkerModel.js
var MarkerModel = __webpack_require__(23573);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/marker/MarkAreaModel.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


var MarkAreaModel_MarkAreaModel = /** @class */function (_super) {
  (0,tslib_es6.__extends)(MarkAreaModel, _super);
  function MarkAreaModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = MarkAreaModel.type;
    return _this;
  }
  MarkAreaModel.prototype.createMarkerModelFromSeries = function (markerOpt, masterMarkerModel, ecModel) {
    return new MarkAreaModel(markerOpt, masterMarkerModel, ecModel);
  };
  MarkAreaModel.type = 'markArea';
  MarkAreaModel.defaultOption = {
    // zlevel: 0,
    // PENDING
    z: 1,
    tooltip: {
      trigger: 'item'
    },
    // markArea should fixed on the coordinate system
    animation: false,
    label: {
      show: true,
      position: 'top'
    },
    itemStyle: {
      // color and borderColor default to use color from series
      // color: 'auto'
      // borderColor: 'auto'
      borderWidth: 0
    },
    emphasis: {
      label: {
        show: true,
        position: 'top'
      }
    }
  };
  return MarkAreaModel;
}(MarkerModel["default"]);
/* ESM default export */ var marker_MarkAreaModel = (MarkAreaModel_MarkAreaModel);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/tool/color.js
var tool_color = __webpack_require__(67375);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/data/SeriesData.js
var SeriesData = __webpack_require__(38788);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(81731);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Group.js
var Group = __webpack_require__(58695);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/Polygon.js
var Polygon = __webpack_require__(71272);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/animation/basicTransition.js
var basicTransition = __webpack_require__(17524);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/states.js
var states = __webpack_require__(63344);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/marker/markerHelper.js
var markerHelper = __webpack_require__(10094);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/marker/MarkerView.js
var MarkerView = __webpack_require__(87493);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(96585);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/CoordinateSystem.js
var CoordinateSystem = __webpack_require__(63248);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/model.js
var model = __webpack_require__(46451);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/visual/helper.js
var helper = __webpack_require__(54500);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/label/labelStyle.js
var labelStyle = __webpack_require__(77704);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/innerStore.js
var innerStore = __webpack_require__(55413);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/data/helper/dataValueHelper.js
var dataValueHelper = __webpack_require__(15615);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/marker/MarkAreaView.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

// TODO Optimize on polar















var inner = (0,model.makeInner)();
var markAreaTransform = function (seriesModel, coordSys, maModel, item) {
  // item may be null
  var item0 = item[0];
  var item1 = item[1];
  if (!item0 || !item1) {
    return;
  }
  var lt = markerHelper.dataTransform(seriesModel, item0);
  var rb = markerHelper.dataTransform(seriesModel, item1);
  // FIXME make sure lt is less than rb
  var ltCoord = lt.coord;
  var rbCoord = rb.coord;
  ltCoord[0] = (0,util.retrieve)(ltCoord[0], -Infinity);
  ltCoord[1] = (0,util.retrieve)(ltCoord[1], -Infinity);
  rbCoord[0] = (0,util.retrieve)(rbCoord[0], Infinity);
  rbCoord[1] = (0,util.retrieve)(rbCoord[1], Infinity);
  // Merge option into one
  var result = (0,util.mergeAll)([{}, lt, rb]);
  result.coord = [lt.coord, rb.coord];
  result.x0 = lt.x;
  result.y0 = lt.y;
  result.x1 = rb.x;
  result.y1 = rb.y;
  return result;
};
function isInfinity(val) {
  return !isNaN(val) && !isFinite(val);
}
// If a markArea has one dim
function ifMarkAreaHasOnlyDim(dimIndex, fromCoord, toCoord, coordSys) {
  var otherDimIndex = 1 - dimIndex;
  return isInfinity(fromCoord[otherDimIndex]) && isInfinity(toCoord[otherDimIndex]);
}
function markAreaFilter(coordSys, item) {
  var fromCoord = item.coord[0];
  var toCoord = item.coord[1];
  var item0 = {
    coord: fromCoord,
    x: item.x0,
    y: item.y0
  };
  var item1 = {
    coord: toCoord,
    x: item.x1,
    y: item.y1
  };
  if ((0,CoordinateSystem.isCoordinateSystemType)(coordSys, 'cartesian2d')) {
    // In case
    // {
    //  markArea: {
    //    data: [{ yAxis: 2 }]
    //  }
    // }
    if (fromCoord && toCoord && (ifMarkAreaHasOnlyDim(1, fromCoord, toCoord, coordSys) || ifMarkAreaHasOnlyDim(0, fromCoord, toCoord, coordSys))) {
      return true;
    }
    // Directly returning true may also do the work,
    // because markArea will not be shown automatically
    // when it's not included in coordinate system.
    // But filtering ahead can avoid keeping rendering markArea
    // when there are too many of them.
    return markerHelper.zoneFilter(coordSys, item0, item1);
  }
  return markerHelper.dataFilter(coordSys, item0) || markerHelper.dataFilter(coordSys, item1);
}
// dims can be ['x0', 'y0'], ['x1', 'y1'], ['x0', 'y1'], ['x1', 'y0']
function getSingleMarkerEndPoint(data, idx, dims, seriesModel, api) {
  var coordSys = seriesModel.coordinateSystem;
  var itemModel = data.getItemModel(idx);
  var point;
  var xPx = number.parsePercent(itemModel.get(dims[0]), api.getWidth());
  var yPx = number.parsePercent(itemModel.get(dims[1]), api.getHeight());
  if (!isNaN(xPx) && !isNaN(yPx)) {
    point = [xPx, yPx];
  } else {
    // Chart like bar may have there own marker positioning logic
    if (seriesModel.getMarkerPosition) {
      // Consider the case that user input the right-bottom point first
      // Pick the larger x and y as 'x1' and 'y1'
      var pointValue0 = data.getValues(['x0', 'y0'], idx);
      var pointValue1 = data.getValues(['x1', 'y1'], idx);
      var clampPointValue0 = coordSys.clampData(pointValue0);
      var clampPointValue1 = coordSys.clampData(pointValue1);
      var pointValue = [];
      if (dims[0] === 'x0') {
        pointValue[0] = clampPointValue0[0] > clampPointValue1[0] ? pointValue1[0] : pointValue0[0];
      } else {
        pointValue[0] = clampPointValue0[0] > clampPointValue1[0] ? pointValue0[0] : pointValue1[0];
      }
      if (dims[1] === 'y0') {
        pointValue[1] = clampPointValue0[1] > clampPointValue1[1] ? pointValue1[1] : pointValue0[1];
      } else {
        pointValue[1] = clampPointValue0[1] > clampPointValue1[1] ? pointValue0[1] : pointValue1[1];
      }
      // Use the getMarkerPosition
      point = seriesModel.getMarkerPosition(pointValue, dims, true);
    } else {
      var x = data.get(dims[0], idx);
      var y = data.get(dims[1], idx);
      var pt = [x, y];
      coordSys.clampData && coordSys.clampData(pt, pt);
      point = coordSys.dataToPoint(pt, true);
    }
    if ((0,CoordinateSystem.isCoordinateSystemType)(coordSys, 'cartesian2d')) {
      // TODO: TYPE ts@4.1 may still infer it as Axis instead of Axis2D. Not sure if it's a bug
      var xAxis = coordSys.getAxis('x');
      var yAxis = coordSys.getAxis('y');
      var x = data.get(dims[0], idx);
      var y = data.get(dims[1], idx);
      if (isInfinity(x)) {
        point[0] = xAxis.toGlobalCoord(xAxis.getExtent()[dims[0] === 'x0' ? 0 : 1]);
      } else if (isInfinity(y)) {
        point[1] = yAxis.toGlobalCoord(yAxis.getExtent()[dims[1] === 'y0' ? 0 : 1]);
      }
    }
    // Use x, y if has any
    if (!isNaN(xPx)) {
      point[0] = xPx;
    }
    if (!isNaN(yPx)) {
      point[1] = yPx;
    }
  }
  return point;
}
var dimPermutations = [['x0', 'y0'], ['x1', 'y0'], ['x1', 'y1'], ['x0', 'y1']];
var MarkAreaView_MarkAreaView = /** @class */function (_super) {
  (0,tslib_es6.__extends)(MarkAreaView, _super);
  function MarkAreaView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = MarkAreaView.type;
    return _this;
  }
  MarkAreaView.prototype.updateTransform = function (markAreaModel, ecModel, api) {
    ecModel.eachSeries(function (seriesModel) {
      var maModel = MarkerModel["default"].getMarkerModelFromSeries(seriesModel, 'markArea');
      if (maModel) {
        var areaData_1 = maModel.getData();
        areaData_1.each(function (idx) {
          var points = (0,util.map)(dimPermutations, function (dim) {
            return getSingleMarkerEndPoint(areaData_1, idx, dim, seriesModel, api);
          });
          // Layout
          areaData_1.setItemLayout(idx, points);
          var el = areaData_1.getItemGraphicEl(idx);
          el.setShape('points', points);
        });
      }
    }, this);
  };
  MarkAreaView.prototype.renderSeries = function (seriesModel, maModel, ecModel, api) {
    var coordSys = seriesModel.coordinateSystem;
    var seriesId = seriesModel.id;
    var seriesData = seriesModel.getData();
    var areaGroupMap = this.markerGroupMap;
    var polygonGroup = areaGroupMap.get(seriesId) || areaGroupMap.set(seriesId, {
      group: new Group["default"]()
    });
    this.group.add(polygonGroup.group);
    this.markKeep(polygonGroup);
    var areaData = createList(coordSys, seriesModel, maModel);
    // Line data for tooltip and formatter
    maModel.setData(areaData);
    // Update visual and layout of line
    areaData.each(function (idx) {
      // Layout
      var points = (0,util.map)(dimPermutations, function (dim) {
        return getSingleMarkerEndPoint(areaData, idx, dim, seriesModel, api);
      });
      var xAxisScale = coordSys.getAxis('x').scale;
      var yAxisScale = coordSys.getAxis('y').scale;
      var xAxisExtent = xAxisScale.getExtent();
      var yAxisExtent = yAxisScale.getExtent();
      var xPointExtent = [xAxisScale.parse(areaData.get('x0', idx)), xAxisScale.parse(areaData.get('x1', idx))];
      var yPointExtent = [yAxisScale.parse(areaData.get('y0', idx)), yAxisScale.parse(areaData.get('y1', idx))];
      number.asc(xPointExtent);
      number.asc(yPointExtent);
      var overlapped = !(xAxisExtent[0] > xPointExtent[1] || xAxisExtent[1] < xPointExtent[0] || yAxisExtent[0] > yPointExtent[1] || yAxisExtent[1] < yPointExtent[0]);
      // If none of the area is inside coordSys, allClipped is set to be true
      // in layout so that label will not be displayed. See #12591
      var allClipped = !overlapped;
      areaData.setItemLayout(idx, {
        points: points,
        allClipped: allClipped
      });
      var style = areaData.getItemModel(idx).getModel('itemStyle').getItemStyle();
      var color = (0,helper.getVisualFromData)(seriesData, 'color');
      if (!style.fill) {
        style.fill = color;
        if ((0,util.isString)(style.fill)) {
          style.fill = tool_color.modifyAlpha(style.fill, 0.4);
        }
      }
      if (!style.stroke) {
        style.stroke = color;
      }
      // Visual
      areaData.setItemVisual(idx, 'style', style);
    });
    areaData.diff(inner(polygonGroup).data).add(function (idx) {
      var layout = areaData.getItemLayout(idx);
      if (!layout.allClipped) {
        var polygon = new Polygon["default"]({
          shape: {
            points: layout.points
          }
        });
        areaData.setItemGraphicEl(idx, polygon);
        polygonGroup.group.add(polygon);
      }
    }).update(function (newIdx, oldIdx) {
      var polygon = inner(polygonGroup).data.getItemGraphicEl(oldIdx);
      var layout = areaData.getItemLayout(newIdx);
      if (!layout.allClipped) {
        if (polygon) {
          basicTransition.updateProps(polygon, {
            shape: {
              points: layout.points
            }
          }, maModel, newIdx);
        } else {
          polygon = new Polygon["default"]({
            shape: {
              points: layout.points
            }
          });
        }
        areaData.setItemGraphicEl(newIdx, polygon);
        polygonGroup.group.add(polygon);
      } else if (polygon) {
        polygonGroup.group.remove(polygon);
      }
    }).remove(function (idx) {
      var polygon = inner(polygonGroup).data.getItemGraphicEl(idx);
      polygonGroup.group.remove(polygon);
    }).execute();
    areaData.eachItemGraphicEl(function (polygon, idx) {
      var itemModel = areaData.getItemModel(idx);
      var style = areaData.getItemVisual(idx, 'style');
      polygon.useStyle(areaData.getItemVisual(idx, 'style'));
      (0,labelStyle.setLabelStyle)(polygon, (0,labelStyle.getLabelStatesModels)(itemModel), {
        labelFetcher: maModel,
        labelDataIndex: idx,
        defaultText: areaData.getName(idx) || '',
        inheritColor: (0,util.isString)(style.fill) ? tool_color.modifyAlpha(style.fill, 1) : '#000'
      });
      (0,states.setStatesStylesFromModel)(polygon, itemModel);
      (0,states.toggleHoverEmphasis)(polygon, null, null, itemModel.get(['emphasis', 'disabled']));
      (0,innerStore.getECData)(polygon).dataModel = maModel;
    });
    inner(polygonGroup).data = areaData;
    polygonGroup.group.silent = maModel.get('silent') || seriesModel.get('silent');
  };
  MarkAreaView.type = 'markArea';
  return MarkAreaView;
}(MarkerView["default"]);
function createList(coordSys, seriesModel, maModel) {
  var areaData;
  var dataDims;
  var dims = ['x0', 'y0', 'x1', 'y1'];
  if (coordSys) {
    var coordDimsInfos_1 = (0,util.map)(coordSys && coordSys.dimensions, function (coordDim) {
      var data = seriesModel.getData();
      var info = data.getDimensionInfo(data.mapDimension(coordDim)) || {};
      // In map series data don't have lng and lat dimension. Fallback to same with coordSys
      return (0,util.extend)((0,util.extend)({}, info), {
        name: coordDim,
        // DON'T use ordinalMeta to parse and collect ordinal.
        ordinalMeta: null
      });
    });
    dataDims = (0,util.map)(dims, function (dim, idx) {
      return {
        name: dim,
        type: coordDimsInfos_1[idx % 2].type
      };
    });
    areaData = new SeriesData["default"](dataDims, maModel);
  } else {
    dataDims = [{
      name: 'value',
      type: 'float'
    }];
    areaData = new SeriesData["default"](dataDims, maModel);
  }
  var optData = (0,util.map)(maModel.get('data'), (0,util.curry)(markAreaTransform, seriesModel, coordSys, maModel));
  if (coordSys) {
    optData = (0,util.filter)(optData, (0,util.curry)(markAreaFilter, coordSys));
  }
  var dimValueGetter = coordSys ? function (item, dimName, dataIndex, dimIndex) {
    // TODO should convert to ParsedValue?
    var rawVal = item.coord[Math.floor(dimIndex / 2)][dimIndex % 2];
    return (0,dataValueHelper.parseDataValue)(rawVal, dataDims[dimIndex]);
  } : function (item, dimName, dataIndex, dimIndex) {
    return (0,dataValueHelper.parseDataValue)(item.value, dataDims[dimIndex]);
  };
  areaData.initData(optData, null, dimValueGetter);
  areaData.hasItemOption = true;
  return areaData;
}
/* ESM default export */ var marker_MarkAreaView = (MarkAreaView_MarkAreaView);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/marker/installMarkArea.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  registers.registerComponentModel(marker_MarkAreaModel);
  registers.registerComponentView(marker_MarkAreaView);
  registers.registerPreprocessor(function (opt) {
    if ((0,checkMarkerInSeries["default"])(opt.series, 'markArea')) {
      // Make sure markArea component is enabled
      opt.markArea = opt.markArea || {};
    }
  });
}

}),
84093: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  install: function() { return /* binding */ install; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/marker/checkMarkerInSeries.js
var checkMarkerInSeries = __webpack_require__(78542);
// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(12012);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/marker/MarkerModel.js
var MarkerModel = __webpack_require__(23573);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/marker/MarkLineModel.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


var MarkLineModel_MarkLineModel = /** @class */function (_super) {
  (0,tslib_es6.__extends)(MarkLineModel, _super);
  function MarkLineModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = MarkLineModel.type;
    return _this;
  }
  MarkLineModel.prototype.createMarkerModelFromSeries = function (markerOpt, masterMarkerModel, ecModel) {
    return new MarkLineModel(markerOpt, masterMarkerModel, ecModel);
  };
  MarkLineModel.type = 'markLine';
  MarkLineModel.defaultOption = {
    // zlevel: 0,
    z: 5,
    symbol: ['circle', 'arrow'],
    symbolSize: [8, 16],
    // symbolRotate: 0,
    symbolOffset: 0,
    precision: 2,
    tooltip: {
      trigger: 'item'
    },
    label: {
      show: true,
      position: 'end',
      distance: 5
    },
    lineStyle: {
      type: 'dashed'
    },
    emphasis: {
      label: {
        show: true
      },
      lineStyle: {
        width: 3
      }
    },
    animationEasing: 'linear'
  };
  return MarkLineModel;
}(MarkerModel["default"]);
/* ESM default export */ var marker_MarkLineModel = (MarkLineModel_MarkLineModel);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/data/SeriesData.js
var SeriesData = __webpack_require__(38788);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(81731);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/marker/markerHelper.js
var markerHelper = __webpack_require__(10094);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/LineDraw.js
var LineDraw = __webpack_require__(37779);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/marker/MarkerView.js
var MarkerView = __webpack_require__(87493);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/data/helper/dataStackHelper.js
var dataStackHelper = __webpack_require__(93054);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/CoordinateSystem.js
var CoordinateSystem = __webpack_require__(63248);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/innerStore.js
var innerStore = __webpack_require__(55413);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(96585);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/model.js
var model = __webpack_require__(46451);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/visual/helper.js
var helper = __webpack_require__(54500);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/marker/MarkLineView.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
var markLineTransform = function (seriesModel, coordSys, mlModel, item) {
  var data = seriesModel.getData();
  var itemArray;
  if (!(0,util.isArray)(item)) {
    // Special type markLine like 'min', 'max', 'average', 'median'
    var mlType = item.type;
    if (mlType === 'min' || mlType === 'max' || mlType === 'average' || mlType === 'median'
    // In case
    // data: [{
    //   yAxis: 10
    // }]
    || item.xAxis != null || item.yAxis != null) {
      var valueAxis = void 0;
      var value = void 0;
      if (item.yAxis != null || item.xAxis != null) {
        valueAxis = coordSys.getAxis(item.yAxis != null ? 'y' : 'x');
        value = (0,util.retrieve)(item.yAxis, item.xAxis);
      } else {
        var axisInfo = markerHelper.getAxisInfo(item, data, coordSys, seriesModel);
        valueAxis = axisInfo.valueAxis;
        var valueDataDim = (0,dataStackHelper.getStackedDimension)(data, axisInfo.valueDataDim);
        value = markerHelper.numCalculate(data, valueDataDim, mlType);
      }
      var valueIndex = valueAxis.dim === 'x' ? 0 : 1;
      var baseIndex = 1 - valueIndex;
      // Normized to 2d data with start and end point
      var mlFrom = (0,util.clone)(item);
      var mlTo = {
        coord: []
      };
      mlFrom.type = null;
      mlFrom.coord = [];
      mlFrom.coord[baseIndex] = -Infinity;
      mlTo.coord[baseIndex] = Infinity;
      var precision = mlModel.get('precision');
      if (precision >= 0 && (0,util.isNumber)(value)) {
        value = +value.toFixed(Math.min(precision, 20));
      }
      mlFrom.coord[valueIndex] = mlTo.coord[valueIndex] = value;
      itemArray = [mlFrom, mlTo, {
        type: mlType,
        valueIndex: item.valueIndex,
        // Force to use the value of calculated value.
        value: value
      }];
    } else {
      // Invalid data
      if (false) {}
      itemArray = [];
    }
  } else {
    itemArray = item;
  }
  var normalizedItem = [markerHelper.dataTransform(seriesModel, itemArray[0]), markerHelper.dataTransform(seriesModel, itemArray[1]), (0,util.extend)({}, itemArray[2])];
  // Avoid line data type is extended by from(to) data type
  normalizedItem[2].type = normalizedItem[2].type || null;
  // Merge from option and to option into line option
  (0,util.merge)(normalizedItem[2], normalizedItem[0]);
  (0,util.merge)(normalizedItem[2], normalizedItem[1]);
  return normalizedItem;
};
function isInfinity(val) {
  return !isNaN(val) && !isFinite(val);
}
// If a markLine has one dim
function ifMarkLineHasOnlyDim(dimIndex, fromCoord, toCoord, coordSys) {
  var otherDimIndex = 1 - dimIndex;
  var dimName = coordSys.dimensions[dimIndex];
  return isInfinity(fromCoord[otherDimIndex]) && isInfinity(toCoord[otherDimIndex]) && fromCoord[dimIndex] === toCoord[dimIndex] && coordSys.getAxis(dimName).containData(fromCoord[dimIndex]);
}
function markLineFilter(coordSys, item) {
  if (coordSys.type === 'cartesian2d') {
    var fromCoord = item[0].coord;
    var toCoord = item[1].coord;
    // In case
    // {
    //  markLine: {
    //    data: [{ yAxis: 2 }]
    //  }
    // }
    if (fromCoord && toCoord && (ifMarkLineHasOnlyDim(1, fromCoord, toCoord, coordSys) || ifMarkLineHasOnlyDim(0, fromCoord, toCoord, coordSys))) {
      return true;
    }
  }
  return markerHelper.dataFilter(coordSys, item[0]) && markerHelper.dataFilter(coordSys, item[1]);
}
function updateSingleMarkerEndLayout(data, idx, isFrom, seriesModel, api) {
  var coordSys = seriesModel.coordinateSystem;
  var itemModel = data.getItemModel(idx);
  var point;
  var xPx = number.parsePercent(itemModel.get('x'), api.getWidth());
  var yPx = number.parsePercent(itemModel.get('y'), api.getHeight());
  if (!isNaN(xPx) && !isNaN(yPx)) {
    point = [xPx, yPx];
  } else {
    // Chart like bar may have there own marker positioning logic
    if (seriesModel.getMarkerPosition) {
      // Use the getMarkerPosition
      point = seriesModel.getMarkerPosition(data.getValues(data.dimensions, idx));
    } else {
      var dims = coordSys.dimensions;
      var x = data.get(dims[0], idx);
      var y = data.get(dims[1], idx);
      point = coordSys.dataToPoint([x, y]);
    }
    // Expand line to the edge of grid if value on one axis is Inifnity
    // In case
    //  markLine: {
    //    data: [{
    //      yAxis: 2
    //      // or
    //      type: 'average'
    //    }]
    //  }
    if ((0,CoordinateSystem.isCoordinateSystemType)(coordSys, 'cartesian2d')) {
      // TODO: TYPE ts@4.1 may still infer it as Axis instead of Axis2D. Not sure if it's a bug
      var xAxis = coordSys.getAxis('x');
      var yAxis = coordSys.getAxis('y');
      var dims = coordSys.dimensions;
      if (isInfinity(data.get(dims[0], idx))) {
        point[0] = xAxis.toGlobalCoord(xAxis.getExtent()[isFrom ? 0 : 1]);
      } else if (isInfinity(data.get(dims[1], idx))) {
        point[1] = yAxis.toGlobalCoord(yAxis.getExtent()[isFrom ? 0 : 1]);
      }
    }
    // Use x, y if has any
    if (!isNaN(xPx)) {
      point[0] = xPx;
    }
    if (!isNaN(yPx)) {
      point[1] = yPx;
    }
  }
  data.setItemLayout(idx, point);
}
var MarkLineView_MarkLineView = /** @class */function (_super) {
  (0,tslib_es6.__extends)(MarkLineView, _super);
  function MarkLineView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = MarkLineView.type;
    return _this;
  }
  MarkLineView.prototype.updateTransform = function (markLineModel, ecModel, api) {
    ecModel.eachSeries(function (seriesModel) {
      var mlModel = MarkerModel["default"].getMarkerModelFromSeries(seriesModel, 'markLine');
      if (mlModel) {
        var mlData_1 = mlModel.getData();
        var fromData_1 = inner(mlModel).from;
        var toData_1 = inner(mlModel).to;
        // Update visual and layout of from symbol and to symbol
        fromData_1.each(function (idx) {
          updateSingleMarkerEndLayout(fromData_1, idx, true, seriesModel, api);
          updateSingleMarkerEndLayout(toData_1, idx, false, seriesModel, api);
        });
        // Update layout of line
        mlData_1.each(function (idx) {
          mlData_1.setItemLayout(idx, [fromData_1.getItemLayout(idx), toData_1.getItemLayout(idx)]);
        });
        this.markerGroupMap.get(seriesModel.id).updateLayout();
      }
    }, this);
  };
  MarkLineView.prototype.renderSeries = function (seriesModel, mlModel, ecModel, api) {
    var coordSys = seriesModel.coordinateSystem;
    var seriesId = seriesModel.id;
    var seriesData = seriesModel.getData();
    var lineDrawMap = this.markerGroupMap;
    var lineDraw = lineDrawMap.get(seriesId) || lineDrawMap.set(seriesId, new LineDraw["default"]());
    this.group.add(lineDraw.group);
    var mlData = createList(coordSys, seriesModel, mlModel);
    var fromData = mlData.from;
    var toData = mlData.to;
    var lineData = mlData.line;
    inner(mlModel).from = fromData;
    inner(mlModel).to = toData;
    // Line data for tooltip and formatter
    mlModel.setData(lineData);
    // TODO
    // Functionally, `symbolSize` & `symbolOffset` can also be 2D array now.
    // But the related logic and type definition are not finished yet.
    // Finish it if required
    var symbolType = mlModel.get('symbol');
    var symbolSize = mlModel.get('symbolSize');
    var symbolRotate = mlModel.get('symbolRotate');
    var symbolOffset = mlModel.get('symbolOffset');
    // TODO: support callback function like markPoint
    if (!(0,util.isArray)(symbolType)) {
      symbolType = [symbolType, symbolType];
    }
    if (!(0,util.isArray)(symbolSize)) {
      symbolSize = [symbolSize, symbolSize];
    }
    if (!(0,util.isArray)(symbolRotate)) {
      symbolRotate = [symbolRotate, symbolRotate];
    }
    if (!(0,util.isArray)(symbolOffset)) {
      symbolOffset = [symbolOffset, symbolOffset];
    }
    // Update visual and layout of from symbol and to symbol
    mlData.from.each(function (idx) {
      updateDataVisualAndLayout(fromData, idx, true);
      updateDataVisualAndLayout(toData, idx, false);
    });
    // Update visual and layout of line
    lineData.each(function (idx) {
      var lineStyle = lineData.getItemModel(idx).getModel('lineStyle').getLineStyle();
      // lineData.setItemVisual(idx, {
      //     color: lineColor || fromData.getItemVisual(idx, 'color')
      // });
      lineData.setItemLayout(idx, [fromData.getItemLayout(idx), toData.getItemLayout(idx)]);
      if (lineStyle.stroke == null) {
        lineStyle.stroke = fromData.getItemVisual(idx, 'style').fill;
      }
      lineData.setItemVisual(idx, {
        fromSymbolKeepAspect: fromData.getItemVisual(idx, 'symbolKeepAspect'),
        fromSymbolOffset: fromData.getItemVisual(idx, 'symbolOffset'),
        fromSymbolRotate: fromData.getItemVisual(idx, 'symbolRotate'),
        fromSymbolSize: fromData.getItemVisual(idx, 'symbolSize'),
        fromSymbol: fromData.getItemVisual(idx, 'symbol'),
        toSymbolKeepAspect: toData.getItemVisual(idx, 'symbolKeepAspect'),
        toSymbolOffset: toData.getItemVisual(idx, 'symbolOffset'),
        toSymbolRotate: toData.getItemVisual(idx, 'symbolRotate'),
        toSymbolSize: toData.getItemVisual(idx, 'symbolSize'),
        toSymbol: toData.getItemVisual(idx, 'symbol'),
        style: lineStyle
      });
    });
    lineDraw.updateData(lineData);
    // Set host model for tooltip
    // FIXME
    mlData.line.eachItemGraphicEl(function (el) {
      (0,innerStore.getECData)(el).dataModel = mlModel;
      el.traverse(function (child) {
        (0,innerStore.getECData)(child).dataModel = mlModel;
      });
    });
    function updateDataVisualAndLayout(data, idx, isFrom) {
      var itemModel = data.getItemModel(idx);
      updateSingleMarkerEndLayout(data, idx, isFrom, seriesModel, api);
      var style = itemModel.getModel('itemStyle').getItemStyle();
      if (style.fill == null) {
        style.fill = (0,helper.getVisualFromData)(seriesData, 'color');
      }
      data.setItemVisual(idx, {
        symbolKeepAspect: itemModel.get('symbolKeepAspect'),
        // `0` should be considered as a valid value, so use `retrieve2` instead of `||`
        symbolOffset: (0,util.retrieve2)(itemModel.get('symbolOffset', true), symbolOffset[isFrom ? 0 : 1]),
        symbolRotate: (0,util.retrieve2)(itemModel.get('symbolRotate', true), symbolRotate[isFrom ? 0 : 1]),
        // TODO: when 2d array is supported, it should ignore parent
        symbolSize: (0,util.retrieve2)(itemModel.get('symbolSize'), symbolSize[isFrom ? 0 : 1]),
        symbol: (0,util.retrieve2)(itemModel.get('symbol', true), symbolType[isFrom ? 0 : 1]),
        style: style
      });
    }
    this.markKeep(lineDraw);
    lineDraw.group.silent = mlModel.get('silent') || seriesModel.get('silent');
  };
  MarkLineView.type = 'markLine';
  return MarkLineView;
}(MarkerView["default"]);
function createList(coordSys, seriesModel, mlModel) {
  var coordDimsInfos;
  if (coordSys) {
    coordDimsInfos = (0,util.map)(coordSys && coordSys.dimensions, function (coordDim) {
      var info = seriesModel.getData().getDimensionInfo(seriesModel.getData().mapDimension(coordDim)) || {};
      // In map series data don't have lng and lat dimension. Fallback to same with coordSys
      return (0,util.extend)((0,util.extend)({}, info), {
        name: coordDim,
        // DON'T use ordinalMeta to parse and collect ordinal.
        ordinalMeta: null
      });
    });
  } else {
    coordDimsInfos = [{
      name: 'value',
      type: 'float'
    }];
  }
  var fromData = new SeriesData["default"](coordDimsInfos, mlModel);
  var toData = new SeriesData["default"](coordDimsInfos, mlModel);
  // No dimensions
  var lineData = new SeriesData["default"]([], mlModel);
  var optData = (0,util.map)(mlModel.get('data'), (0,util.curry)(markLineTransform, seriesModel, coordSys, mlModel));
  if (coordSys) {
    optData = (0,util.filter)(optData, (0,util.curry)(markLineFilter, coordSys));
  }
  var dimValueGetter = markerHelper.createMarkerDimValueGetter(!!coordSys, coordDimsInfos);
  fromData.initData((0,util.map)(optData, function (item) {
    return item[0];
  }), null, dimValueGetter);
  toData.initData((0,util.map)(optData, function (item) {
    return item[1];
  }), null, dimValueGetter);
  lineData.initData((0,util.map)(optData, function (item) {
    return item[2];
  }));
  lineData.hasItemOption = true;
  return {
    from: fromData,
    to: toData,
    line: lineData
  };
}
/* ESM default export */ var marker_MarkLineView = (MarkLineView_MarkLineView);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/marker/installMarkLine.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
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
  registers.registerComponentModel(marker_MarkLineModel);
  registers.registerComponentView(marker_MarkLineView);
  registers.registerPreprocessor(function (opt) {
    if ((0,checkMarkerInSeries["default"])(opt.series, 'markLine')) {
      // Make sure markLine component is enabled
      opt.markLine = opt.markLine || {};
    }
  });
}

}),
72378: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  install: function() { return /* binding */ install; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/marker/checkMarkerInSeries.js
var checkMarkerInSeries = __webpack_require__(78542);
// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(12012);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/marker/MarkerModel.js
var MarkerModel = __webpack_require__(23573);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/marker/MarkPointModel.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


var MarkPointModel_MarkPointModel = /** @class */function (_super) {
  (0,tslib_es6.__extends)(MarkPointModel, _super);
  function MarkPointModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = MarkPointModel.type;
    return _this;
  }
  MarkPointModel.prototype.createMarkerModelFromSeries = function (markerOpt, masterMarkerModel, ecModel) {
    return new MarkPointModel(markerOpt, masterMarkerModel, ecModel);
  };
  MarkPointModel.type = 'markPoint';
  MarkPointModel.defaultOption = {
    // zlevel: 0,
    z: 5,
    symbol: 'pin',
    symbolSize: 50,
    // symbolRotate: 0,
    // symbolOffset: [0, 0]
    tooltip: {
      trigger: 'item'
    },
    label: {
      show: true,
      position: 'inside'
    },
    itemStyle: {
      borderWidth: 2
    },
    emphasis: {
      label: {
        show: true
      }
    }
  };
  return MarkPointModel;
}(MarkerModel["default"]);
/* ESM default export */ var marker_MarkPointModel = (MarkPointModel_MarkPointModel);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/chart/helper/SymbolDraw.js
var SymbolDraw = __webpack_require__(41930);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(81731);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/data/SeriesData.js
var SeriesData = __webpack_require__(38788);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/marker/markerHelper.js
var markerHelper = __webpack_require__(10094);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/marker/MarkerView.js
var MarkerView = __webpack_require__(87493);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(96585);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/innerStore.js
var innerStore = __webpack_require__(55413);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/visual/helper.js
var helper = __webpack_require__(54500);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/marker/MarkPointView.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/










function updateMarkerLayout(mpData, seriesModel, api) {
  var coordSys = seriesModel.coordinateSystem;
  mpData.each(function (idx) {
    var itemModel = mpData.getItemModel(idx);
    var point;
    var xPx = number.parsePercent(itemModel.get('x'), api.getWidth());
    var yPx = number.parsePercent(itemModel.get('y'), api.getHeight());
    if (!isNaN(xPx) && !isNaN(yPx)) {
      point = [xPx, yPx];
    }
    // Chart like bar may have there own marker positioning logic
    else if (seriesModel.getMarkerPosition) {
      // Use the getMarkerPosition
      point = seriesModel.getMarkerPosition(mpData.getValues(mpData.dimensions, idx));
    } else if (coordSys) {
      var x = mpData.get(coordSys.dimensions[0], idx);
      var y = mpData.get(coordSys.dimensions[1], idx);
      point = coordSys.dataToPoint([x, y]);
    }
    // Use x, y if has any
    if (!isNaN(xPx)) {
      point[0] = xPx;
    }
    if (!isNaN(yPx)) {
      point[1] = yPx;
    }
    mpData.setItemLayout(idx, point);
  });
}
var MarkPointView_MarkPointView = /** @class */function (_super) {
  (0,tslib_es6.__extends)(MarkPointView, _super);
  function MarkPointView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = MarkPointView.type;
    return _this;
  }
  MarkPointView.prototype.updateTransform = function (markPointModel, ecModel, api) {
    ecModel.eachSeries(function (seriesModel) {
      var mpModel = MarkerModel["default"].getMarkerModelFromSeries(seriesModel, 'markPoint');
      if (mpModel) {
        updateMarkerLayout(mpModel.getData(), seriesModel, api);
        this.markerGroupMap.get(seriesModel.id).updateLayout();
      }
    }, this);
  };
  MarkPointView.prototype.renderSeries = function (seriesModel, mpModel, ecModel, api) {
    var coordSys = seriesModel.coordinateSystem;
    var seriesId = seriesModel.id;
    var seriesData = seriesModel.getData();
    var symbolDrawMap = this.markerGroupMap;
    var symbolDraw = symbolDrawMap.get(seriesId) || symbolDrawMap.set(seriesId, new SymbolDraw["default"]());
    var mpData = createData(coordSys, seriesModel, mpModel);
    // FIXME
    mpModel.setData(mpData);
    updateMarkerLayout(mpModel.getData(), seriesModel, api);
    mpData.each(function (idx) {
      var itemModel = mpData.getItemModel(idx);
      var symbol = itemModel.getShallow('symbol');
      var symbolSize = itemModel.getShallow('symbolSize');
      var symbolRotate = itemModel.getShallow('symbolRotate');
      var symbolOffset = itemModel.getShallow('symbolOffset');
      var symbolKeepAspect = itemModel.getShallow('symbolKeepAspect');
      // TODO: refactor needed: single data item should not support callback function
      if ((0,util.isFunction)(symbol) || (0,util.isFunction)(symbolSize) || (0,util.isFunction)(symbolRotate) || (0,util.isFunction)(symbolOffset)) {
        var rawIdx = mpModel.getRawValue(idx);
        var dataParams = mpModel.getDataParams(idx);
        if ((0,util.isFunction)(symbol)) {
          symbol = symbol(rawIdx, dataParams);
        }
        if ((0,util.isFunction)(symbolSize)) {
          // FIXME 这里不兼容 ECharts 2.x，2.x 貌似参数是整个数据？
          symbolSize = symbolSize(rawIdx, dataParams);
        }
        if ((0,util.isFunction)(symbolRotate)) {
          symbolRotate = symbolRotate(rawIdx, dataParams);
        }
        if ((0,util.isFunction)(symbolOffset)) {
          symbolOffset = symbolOffset(rawIdx, dataParams);
        }
      }
      var style = itemModel.getModel('itemStyle').getItemStyle();
      var color = (0,helper.getVisualFromData)(seriesData, 'color');
      if (!style.fill) {
        style.fill = color;
      }
      mpData.setItemVisual(idx, {
        symbol: symbol,
        symbolSize: symbolSize,
        symbolRotate: symbolRotate,
        symbolOffset: symbolOffset,
        symbolKeepAspect: symbolKeepAspect,
        style: style
      });
    });
    // TODO Text are wrong
    symbolDraw.updateData(mpData);
    this.group.add(symbolDraw.group);
    // Set host model for tooltip
    // FIXME
    mpData.eachItemGraphicEl(function (el) {
      el.traverse(function (child) {
        (0,innerStore.getECData)(child).dataModel = mpModel;
      });
    });
    this.markKeep(symbolDraw);
    symbolDraw.group.silent = mpModel.get('silent') || seriesModel.get('silent');
  };
  MarkPointView.type = 'markPoint';
  return MarkPointView;
}(MarkerView["default"]);
function createData(coordSys, seriesModel, mpModel) {
  var coordDimsInfos;
  if (coordSys) {
    coordDimsInfos = (0,util.map)(coordSys && coordSys.dimensions, function (coordDim) {
      var info = seriesModel.getData().getDimensionInfo(seriesModel.getData().mapDimension(coordDim)) || {};
      // In map series data don't have lng and lat dimension. Fallback to same with coordSys
      return (0,util.extend)((0,util.extend)({}, info), {
        name: coordDim,
        // DON'T use ordinalMeta to parse and collect ordinal.
        ordinalMeta: null
      });
    });
  } else {
    coordDimsInfos = [{
      name: 'value',
      type: 'float'
    }];
  }
  var mpData = new SeriesData["default"](coordDimsInfos, mpModel);
  var dataOpt = (0,util.map)(mpModel.get('data'), (0,util.curry)(markerHelper.dataTransform, seriesModel));
  if (coordSys) {
    dataOpt = (0,util.filter)(dataOpt, (0,util.curry)(markerHelper.dataFilter, coordSys));
  }
  var dimValueGetter = markerHelper.createMarkerDimValueGetter(!!coordSys, coordDimsInfos);
  mpData.initData(dataOpt, null, dimValueGetter);
  return mpData;
}
/* ESM default export */ var marker_MarkPointView = (MarkPointView_MarkPointView);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/marker/installMarkPoint.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
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
  registers.registerComponentModel(marker_MarkPointModel);
  registers.registerComponentView(marker_MarkPointView);
  registers.registerPreprocessor(function (opt) {
    if ((0,checkMarkerInSeries["default"])(opt.series, 'markPoint')) {
      // Make sure markPoint component is enabled
      opt.markPoint = opt.markPoint || {};
    }
  });
}

}),
10094: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createMarkerDimValueGetter: function() { return createMarkerDimValueGetter; },
  dataFilter: function() { return dataFilter; },
  dataTransform: function() { return dataTransform; },
  getAxisInfo: function() { return getAxisInfo; },
  numCalculate: function() { return numCalculate; },
  zoneFilter: function() { return zoneFilter; }
});
/* ESM import */var _util_number_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81731);
/* ESM import */var _data_helper_dataStackHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93054);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96585);
/* ESM import */var _data_helper_dataValueHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15615);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/




function hasXOrY(item) {
  return !(isNaN(parseFloat(item.x)) && isNaN(parseFloat(item.y)));
}
function hasXAndY(item) {
  return !isNaN(parseFloat(item.x)) && !isNaN(parseFloat(item.y));
}
function markerTypeCalculatorWithExtent(markerType, data, otherDataDim, targetDataDim, otherCoordIndex, targetCoordIndex) {
  var coordArr = [];
  var stacked = (0,_data_helper_dataStackHelper_js__WEBPACK_IMPORTED_MODULE_0__.isDimensionStacked)(data, targetDataDim /* , otherDataDim */);
  var calcDataDim = stacked ? data.getCalculationInfo('stackResultDimension') : targetDataDim;
  var value = numCalculate(data, calcDataDim, markerType);
  var dataIndex = data.indicesOfNearest(calcDataDim, value)[0];
  coordArr[otherCoordIndex] = data.get(otherDataDim, dataIndex);
  coordArr[targetCoordIndex] = data.get(calcDataDim, dataIndex);
  var coordArrValue = data.get(targetDataDim, dataIndex);
  // Make it simple, do not visit all stacked value to count precision.
  var precision = _util_number_js__WEBPACK_IMPORTED_MODULE_1__.getPrecision(data.get(targetDataDim, dataIndex));
  precision = Math.min(precision, 20);
  if (precision >= 0) {
    coordArr[targetCoordIndex] = +coordArr[targetCoordIndex].toFixed(precision);
  }
  return [coordArr, coordArrValue];
}
// TODO Specified percent
var markerTypeCalculator = {
  min: (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.curry)(markerTypeCalculatorWithExtent, 'min'),
  max: (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.curry)(markerTypeCalculatorWithExtent, 'max'),
  average: (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.curry)(markerTypeCalculatorWithExtent, 'average'),
  median: (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.curry)(markerTypeCalculatorWithExtent, 'median')
};
/**
 * Transform markPoint data item to format used in List by do the following
 * 1. Calculate statistic like `max`, `min`, `average`
 * 2. Convert `item.xAxis`, `item.yAxis` to `item.coord` array
 */
function dataTransform(seriesModel, item) {
  if (!item) {
    return;
  }
  var data = seriesModel.getData();
  var coordSys = seriesModel.coordinateSystem;
  var dims = coordSys && coordSys.dimensions;
  // 1. If not specify the position with pixel directly
  // 2. If `coord` is not a data array. Which uses `xAxis`,
  // `yAxis` to specify the coord on each dimension
  // parseFloat first because item.x and item.y can be percent string like '20%'
  if (!hasXAndY(item) && !(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.isArray)(item.coord) && (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.isArray)(dims)) {
    var axisInfo = getAxisInfo(item, data, coordSys, seriesModel);
    // Clone the option
    // Transform the properties xAxis, yAxis, radiusAxis, angleAxis, geoCoord to value
    item = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.clone)(item);
    if (item.type && markerTypeCalculator[item.type] && axisInfo.baseAxis && axisInfo.valueAxis) {
      var otherCoordIndex = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.indexOf)(dims, axisInfo.baseAxis.dim);
      var targetCoordIndex = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.indexOf)(dims, axisInfo.valueAxis.dim);
      var coordInfo = markerTypeCalculator[item.type](data, axisInfo.baseDataDim, axisInfo.valueDataDim, otherCoordIndex, targetCoordIndex);
      item.coord = coordInfo[0];
      // Force to use the value of calculated value.
      // let item use the value without stack.
      item.value = coordInfo[1];
    } else {
      // FIXME Only has one of xAxis and yAxis.
      item.coord = [item.xAxis != null ? item.xAxis : item.radiusAxis, item.yAxis != null ? item.yAxis : item.angleAxis];
    }
  }
  // x y is provided
  if (item.coord == null || !(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.isArray)(dims)) {
    item.coord = [];
  } else {
    // Each coord support max, min, average
    var coord = item.coord;
    for (var i = 0; i < 2; i++) {
      if (markerTypeCalculator[coord[i]]) {
        coord[i] = numCalculate(data, data.mapDimension(dims[i]), coord[i]);
      }
    }
  }
  return item;
}
function getAxisInfo(item, data, coordSys, seriesModel) {
  var ret = {};
  if (item.valueIndex != null || item.valueDim != null) {
    ret.valueDataDim = item.valueIndex != null ? data.getDimension(item.valueIndex) : item.valueDim;
    ret.valueAxis = coordSys.getAxis(dataDimToCoordDim(seriesModel, ret.valueDataDim));
    ret.baseAxis = coordSys.getOtherAxis(ret.valueAxis);
    ret.baseDataDim = data.mapDimension(ret.baseAxis.dim);
  } else {
    ret.baseAxis = seriesModel.getBaseAxis();
    ret.valueAxis = coordSys.getOtherAxis(ret.baseAxis);
    ret.baseDataDim = data.mapDimension(ret.baseAxis.dim);
    ret.valueDataDim = data.mapDimension(ret.valueAxis.dim);
  }
  return ret;
}
function dataDimToCoordDim(seriesModel, dataDim) {
  var dimItem = seriesModel.getData().getDimensionInfo(dataDim);
  return dimItem && dimItem.coordDim;
}
/**
 * Filter data which is out of coordinateSystem range
 * [dataFilter description]
 */
function dataFilter(
// Currently only polar and cartesian has containData.
coordSys, item) {
  // Always return true if there is no coordSys
  return coordSys && coordSys.containData && item.coord && !hasXOrY(item) ? coordSys.containData(item.coord) : true;
}
function zoneFilter(
// Currently only polar and cartesian has containData.
coordSys, item1, item2) {
  // Always return true if there is no coordSys
  return coordSys && coordSys.containZone && item1.coord && item2.coord && !hasXOrY(item1) && !hasXOrY(item2) ? coordSys.containZone(item1.coord, item2.coord) : true;
}
function createMarkerDimValueGetter(inCoordSys, dims) {
  return inCoordSys ? function (item, dimName, dataIndex, dimIndex) {
    var rawVal = dimIndex < 2
    // x, y, radius, angle
    ? item.coord && item.coord[dimIndex] : item.value;
    return (0,_data_helper_dataValueHelper_js__WEBPACK_IMPORTED_MODULE_3__.parseDataValue)(rawVal, dims[dimIndex]);
  } : function (item, dimName, dataIndex, dimIndex) {
    return (0,_data_helper_dataValueHelper_js__WEBPACK_IMPORTED_MODULE_3__.parseDataValue)(item.value, dims[dimIndex]);
  };
}
function numCalculate(data, valueDataDim, type) {
  if (type === 'average') {
    var sum_1 = 0;
    var count_1 = 0;
    data.each(valueDataDim, function (val, idx) {
      if (!isNaN(val)) {
        sum_1 += val;
        count_1++;
      }
    });
    return sum_1 / count_1;
  } else if (type === 'median') {
    return data.getMedian(valueDataDim);
  } else {
    // max & min
    return data.getDataExtent(valueDataDim)[type === 'max' ? 1 : 0];
  }
}

}),
27332: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  install: function() { return /* binding */ install; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/parallel/parallelPreprocessor.js
var parallelPreprocessor = __webpack_require__(21577);
// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(12012);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/view/Component.js
var Component = __webpack_require__(28440);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(96585);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/throttle.js
var throttle = __webpack_require__(59524);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/parallel/ParallelView.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/




var CLICK_THRESHOLD = 5; // > 4
var ParallelView_ParallelView = /** @class */function (_super) {
  (0,tslib_es6.__extends)(ParallelView, _super);
  function ParallelView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = ParallelView.type;
    return _this;
  }
  ParallelView.prototype.render = function (parallelModel, ecModel, api) {
    this._model = parallelModel;
    this._api = api;
    if (!this._handlers) {
      this._handlers = {};
      (0,util.each)(handlers, function (handler, eventName) {
        api.getZr().on(eventName, this._handlers[eventName] = (0,util.bind)(handler, this));
      }, this);
    }
    (0,throttle.createOrUpdate)(this, '_throttledDispatchExpand', parallelModel.get('axisExpandRate'), 'fixRate');
  };
  ParallelView.prototype.dispose = function (ecModel, api) {
    (0,throttle.clear)(this, '_throttledDispatchExpand');
    (0,util.each)(this._handlers, function (handler, eventName) {
      api.getZr().off(eventName, handler);
    });
    this._handlers = null;
  };
  /**
   * @internal
   * @param {Object} [opt] If null, cancel the last action triggering for debounce.
   */
  ParallelView.prototype._throttledDispatchExpand = function (opt) {
    this._dispatchExpand(opt);
  };
  /**
   * @internal
   */
  ParallelView.prototype._dispatchExpand = function (opt) {
    opt && this._api.dispatchAction((0,util.extend)({
      type: 'parallelAxisExpand'
    }, opt));
  };
  ParallelView.type = 'parallel';
  return ParallelView;
}(Component["default"]);
var handlers = {
  mousedown: function (e) {
    if (checkTrigger(this, 'click')) {
      this._mouseDownPoint = [e.offsetX, e.offsetY];
    }
  },
  mouseup: function (e) {
    var mouseDownPoint = this._mouseDownPoint;
    if (checkTrigger(this, 'click') && mouseDownPoint) {
      var point = [e.offsetX, e.offsetY];
      var dist = Math.pow(mouseDownPoint[0] - point[0], 2) + Math.pow(mouseDownPoint[1] - point[1], 2);
      if (dist > CLICK_THRESHOLD) {
        return;
      }
      var result = this._model.coordinateSystem.getSlidedAxisExpandWindow([e.offsetX, e.offsetY]);
      result.behavior !== 'none' && this._dispatchExpand({
        axisExpandWindow: result.axisExpandWindow
      });
    }
    this._mouseDownPoint = null;
  },
  mousemove: function (e) {
    // Should do nothing when brushing.
    if (this._mouseDownPoint || !checkTrigger(this, 'mousemove')) {
      return;
    }
    var model = this._model;
    var result = model.coordinateSystem.getSlidedAxisExpandWindow([e.offsetX, e.offsetY]);
    var behavior = result.behavior;
    behavior === 'jump' && this._throttledDispatchExpand.debounceNextCall(model.get('axisExpandDebounce'));
    this._throttledDispatchExpand(behavior === 'none' ? null // Cancel the last trigger, in case that mouse slide out of the area quickly.
    : {
      axisExpandWindow: result.axisExpandWindow,
      // Jumping uses animation, and sliding suppresses animation.
      animation: behavior === 'jump' ? null : {
        duration: 0 // Disable animation.
      }
    });
  }
};
function checkTrigger(view, triggerOn) {
  var model = view._model;
  return model.get('axisExpandable') && model.get('axisExpandTriggerOn') === triggerOn;
}
/* ESM default export */ var parallel_ParallelView = (ParallelView_ParallelView);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/parallel/ParallelModel.js
var ParallelModel = __webpack_require__(68576);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/parallel/parallelCreator.js + 2 modules
var parallelCreator = __webpack_require__(20177);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/axisModelCreator.js + 1 modules
var axisModelCreator = __webpack_require__(68490);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/parallel/AxisModel.js
var AxisModel = __webpack_require__(72860);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axis/ParallelAxisView.js
var ParallelAxisView = __webpack_require__(33224);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axis/parallelAxisAction.js
var parallelAxisAction = __webpack_require__(36690);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/parallel/install.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/








var defaultAxisOption = {
  type: 'value',
  areaSelectStyle: {
    width: 20,
    borderWidth: 1,
    borderColor: 'rgba(160,197,232)',
    color: 'rgba(160,197,232)',
    opacity: 0.3
  },
  realtime: true,
  z: 10
};
function install(registers) {
  registers.registerComponentView(parallel_ParallelView);
  registers.registerComponentModel(ParallelModel["default"]);
  registers.registerCoordinateSystem('parallel', parallelCreator["default"]);
  registers.registerPreprocessor(parallelPreprocessor["default"]);
  registers.registerComponentModel(AxisModel["default"]);
  registers.registerComponentView(ParallelAxisView["default"]);
  (0,axisModelCreator["default"])(registers, 'parallel', AxisModel["default"], defaultAxisOption);
  (0,parallelAxisAction.installParallelActions)(registers);
}

}),
39272: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  install: function() { return install; }
});
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var _extension_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70392);
/* ESM import */var _axis_AxisView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62786);
/* ESM import */var _axisPointer_PolarAxisPointer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26987);
/* ESM import */var _axisPointer_install_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49232);
/* ESM import */var _coord_polar_PolarModel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(27910);
/* ESM import */var _coord_axisModelCreator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(68490);
/* ESM import */var _coord_polar_AxisModel_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(41028);
/* ESM import */var _coord_polar_polarCreator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62101);
/* ESM import */var _axis_AngleAxisView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(33390);
/* ESM import */var _axis_RadiusAxisView_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(13201);
/* ESM import */var _view_Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28440);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(96585);
/* ESM import */var _layout_barPolar_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(95626);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/














var angleAxisExtraOption = {
  startAngle: 90,
  clockwise: true,
  splitNumber: 12,
  axisLabel: {
    rotate: 0
  }
};
var radiusAxisExtraOption = {
  splitNumber: 5
};
var PolarView = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(PolarView, _super);
  function PolarView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = PolarView.type;
    return _this;
  }
  PolarView.type = 'polar';
  return PolarView;
}(_view_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
function install(registers) {
  (0,_extension_js__WEBPACK_IMPORTED_MODULE_2__.use)(_axisPointer_install_js__WEBPACK_IMPORTED_MODULE_3__.install);
  _axis_AxisView_js__WEBPACK_IMPORTED_MODULE_4__["default"].registerAxisPointerClass('PolarAxisPointer', _axisPointer_PolarAxisPointer_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
  registers.registerCoordinateSystem('polar', _coord_polar_polarCreator_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
  registers.registerComponentModel(_coord_polar_PolarModel_js__WEBPACK_IMPORTED_MODULE_7__["default"]);
  registers.registerComponentView(PolarView);
  // Model and view for angleAxis and radiusAxis
  (0,_coord_axisModelCreator_js__WEBPACK_IMPORTED_MODULE_8__["default"])(registers, 'angle', _coord_polar_AxisModel_js__WEBPACK_IMPORTED_MODULE_9__.AngleAxisModel, angleAxisExtraOption);
  (0,_coord_axisModelCreator_js__WEBPACK_IMPORTED_MODULE_8__["default"])(registers, 'radius', _coord_polar_AxisModel_js__WEBPACK_IMPORTED_MODULE_9__.RadiusAxisModel, radiusAxisExtraOption);
  registers.registerComponentView(_axis_AngleAxisView_js__WEBPACK_IMPORTED_MODULE_10__["default"]);
  registers.registerComponentView(_axis_RadiusAxisView_js__WEBPACK_IMPORTED_MODULE_11__["default"]);
  registers.registerLayout((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_12__.curry)(_layout_barPolar_js__WEBPACK_IMPORTED_MODULE_13__["default"], 'bar'));
}

}),
58344: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  install: function() { return /* binding */ install; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/radar/RadarModel.js
var RadarModel = __webpack_require__(30744);
// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(12012);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(96585);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/axis/AxisBuilder.js
var AxisBuilder = __webpack_require__(42102);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/Circle.js
var Circle = __webpack_require__(26768);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/Ring.js
var Ring = __webpack_require__(92183);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/Polyline.js
var Polyline = __webpack_require__(56490);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/Polygon.js
var Polygon = __webpack_require__(71272);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/graphic.js
var graphic = __webpack_require__(16636);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/view/Component.js
var Component = __webpack_require__(28440);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/radar/RadarView.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/





var axisBuilderAttrs = ['axisLine', 'axisTickLabel', 'axisName'];
var RadarView_RadarView = /** @class */function (_super) {
  (0,tslib_es6.__extends)(RadarView, _super);
  function RadarView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = RadarView.type;
    return _this;
  }
  RadarView.prototype.render = function (radarModel, ecModel, api) {
    var group = this.group;
    group.removeAll();
    this._buildAxes(radarModel);
    this._buildSplitLineAndArea(radarModel);
  };
  RadarView.prototype._buildAxes = function (radarModel) {
    var radar = radarModel.coordinateSystem;
    var indicatorAxes = radar.getIndicatorAxes();
    var axisBuilders = util.map(indicatorAxes, function (indicatorAxis) {
      var axisName = indicatorAxis.model.get('showName') ? indicatorAxis.name : ''; // hide name
      var axisBuilder = new AxisBuilder["default"](indicatorAxis.model, {
        axisName: axisName,
        position: [radar.cx, radar.cy],
        rotation: indicatorAxis.angle,
        labelDirection: -1,
        tickDirection: -1,
        nameDirection: 1
      });
      return axisBuilder;
    });
    util.each(axisBuilders, function (axisBuilder) {
      util.each(axisBuilderAttrs, axisBuilder.add, axisBuilder);
      this.group.add(axisBuilder.getGroup());
    }, this);
  };
  RadarView.prototype._buildSplitLineAndArea = function (radarModel) {
    var radar = radarModel.coordinateSystem;
    var indicatorAxes = radar.getIndicatorAxes();
    if (!indicatorAxes.length) {
      return;
    }
    var shape = radarModel.get('shape');
    var splitLineModel = radarModel.getModel('splitLine');
    var splitAreaModel = radarModel.getModel('splitArea');
    var lineStyleModel = splitLineModel.getModel('lineStyle');
    var areaStyleModel = splitAreaModel.getModel('areaStyle');
    var showSplitLine = splitLineModel.get('show');
    var showSplitArea = splitAreaModel.get('show');
    var splitLineColors = lineStyleModel.get('color');
    var splitAreaColors = areaStyleModel.get('color');
    var splitLineColorsArr = util.isArray(splitLineColors) ? splitLineColors : [splitLineColors];
    var splitAreaColorsArr = util.isArray(splitAreaColors) ? splitAreaColors : [splitAreaColors];
    var splitLines = [];
    var splitAreas = [];
    function getColorIndex(areaOrLine, areaOrLineColorList, idx) {
      var colorIndex = idx % areaOrLineColorList.length;
      areaOrLine[colorIndex] = areaOrLine[colorIndex] || [];
      return colorIndex;
    }
    if (shape === 'circle') {
      var ticksRadius = indicatorAxes[0].getTicksCoords();
      var cx = radar.cx;
      var cy = radar.cy;
      for (var i = 0; i < ticksRadius.length; i++) {
        if (showSplitLine) {
          var colorIndex = getColorIndex(splitLines, splitLineColorsArr, i);
          splitLines[colorIndex].push(new Circle["default"]({
            shape: {
              cx: cx,
              cy: cy,
              r: ticksRadius[i].coord
            }
          }));
        }
        if (showSplitArea && i < ticksRadius.length - 1) {
          var colorIndex = getColorIndex(splitAreas, splitAreaColorsArr, i);
          splitAreas[colorIndex].push(new Ring["default"]({
            shape: {
              cx: cx,
              cy: cy,
              r0: ticksRadius[i].coord,
              r: ticksRadius[i + 1].coord
            }
          }));
        }
      }
    }
    // Polyyon
    else {
      var realSplitNumber_1;
      var axesTicksPoints = util.map(indicatorAxes, function (indicatorAxis, idx) {
        var ticksCoords = indicatorAxis.getTicksCoords();
        realSplitNumber_1 = realSplitNumber_1 == null ? ticksCoords.length - 1 : Math.min(ticksCoords.length - 1, realSplitNumber_1);
        return util.map(ticksCoords, function (tickCoord) {
          return radar.coordToPoint(tickCoord.coord, idx);
        });
      });
      var prevPoints = [];
      for (var i = 0; i <= realSplitNumber_1; i++) {
        var points = [];
        for (var j = 0; j < indicatorAxes.length; j++) {
          points.push(axesTicksPoints[j][i]);
        }
        // Close
        if (points[0]) {
          points.push(points[0].slice());
        } else {
          if (false) {}
        }
        if (showSplitLine) {
          var colorIndex = getColorIndex(splitLines, splitLineColorsArr, i);
          splitLines[colorIndex].push(new Polyline["default"]({
            shape: {
              points: points
            }
          }));
        }
        if (showSplitArea && prevPoints) {
          var colorIndex = getColorIndex(splitAreas, splitAreaColorsArr, i - 1);
          splitAreas[colorIndex].push(new Polygon["default"]({
            shape: {
              points: points.concat(prevPoints)
            }
          }));
        }
        prevPoints = points.slice().reverse();
      }
    }
    var lineStyle = lineStyleModel.getLineStyle();
    var areaStyle = areaStyleModel.getAreaStyle();
    // Add splitArea before splitLine
    util.each(splitAreas, function (splitAreas, idx) {
      this.group.add(graphic.mergePath(splitAreas, {
        style: util.defaults({
          stroke: 'none',
          fill: splitAreaColorsArr[idx % splitAreaColorsArr.length]
        }, areaStyle),
        silent: true
      }));
    }, this);
    util.each(splitLines, function (splitLines, idx) {
      this.group.add(graphic.mergePath(splitLines, {
        style: util.defaults({
          fill: 'none',
          stroke: splitLineColorsArr[idx % splitLineColorsArr.length]
        }, lineStyle),
        silent: true
      }));
    }, this);
  };
  RadarView.type = 'radar';
  return RadarView;
}(Component["default"]);
/* ESM default export */ var radar_RadarView = (RadarView_RadarView);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/radar/Radar.js + 1 modules
var Radar = __webpack_require__(47529);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/radar/install.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  registers.registerCoordinateSystem('radar', Radar["default"]);
  registers.registerComponentModel(RadarModel["default"]);
  registers.registerComponentView(radar_RadarView);
  registers.registerVisual({
    seriesType: 'radar',
    reset: function (seriesModel) {
      var data = seriesModel.getData();
      // itemVisual symbol is for selected data
      data.each(function (idx) {
        data.setItemVisual(idx, 'legendIcon', 'roundRect');
      });
      // visual is for unselected data
      data.setVisual('legendIcon', 'roundRect');
    }
  });
}

}),
66763: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  install: function() { return install; }
});
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var _extension_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70392);
/* ESM import */var _view_Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28440);
/* ESM import */var _axis_SingleAxisView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40846);
/* ESM import */var _coord_axisModelCreator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(68490);
/* ESM import */var _coord_single_AxisModel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(77341);
/* ESM import */var _coord_single_singleCreator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10769);
/* ESM import */var _axisPointer_install_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49232);
/* ESM import */var _axis_AxisView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62786);
/* ESM import */var _axisPointer_SingleAxisPointer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93758);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/










var SingleView = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(SingleView, _super);
  function SingleView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = SingleView.type;
    return _this;
  }
  SingleView.type = 'single';
  return SingleView;
}(_view_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
function install(registers) {
  (0,_extension_js__WEBPACK_IMPORTED_MODULE_2__.use)(_axisPointer_install_js__WEBPACK_IMPORTED_MODULE_3__.install);
  _axis_AxisView_js__WEBPACK_IMPORTED_MODULE_4__["default"].registerAxisPointerClass('SingleAxisPointer', _axisPointer_SingleAxisPointer_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
  registers.registerComponentView(SingleView);
  // Axis
  registers.registerComponentView(_axis_SingleAxisView_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
  registers.registerComponentModel(_coord_single_AxisModel_js__WEBPACK_IMPORTED_MODULE_7__["default"]);
  (0,_coord_axisModelCreator_js__WEBPACK_IMPORTED_MODULE_8__["default"])(registers, 'single', _coord_single_AxisModel_js__WEBPACK_IMPORTED_MODULE_7__["default"], _coord_single_AxisModel_js__WEBPACK_IMPORTED_MODULE_7__["default"].defaultOption);
  registers.registerCoordinateSystem('single', _coord_single_singleCreator_js__WEBPACK_IMPORTED_MODULE_9__["default"]);
}

}),
72997: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  install: function() { return /* binding */ install; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(12012);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/Component.js
var Component = __webpack_require__(68943);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/data/SeriesData.js
var SeriesData = __webpack_require__(38788);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(96585);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/model.js
var util_model = __webpack_require__(46451);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/timeline/TimelineModel.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/





var TimelineModel_TimelineModel = /** @class */function (_super) {
  (0,tslib_es6.__extends)(TimelineModel, _super);
  function TimelineModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = TimelineModel.type;
    _this.layoutMode = 'box';
    return _this;
  }
  /**
   * @override
   */
  TimelineModel.prototype.init = function (option, parentModel, ecModel) {
    this.mergeDefaultAndTheme(option, ecModel);
    this._initData();
  };
  /**
   * @override
   */
  TimelineModel.prototype.mergeOption = function (option) {
    _super.prototype.mergeOption.apply(this, arguments);
    this._initData();
  };
  TimelineModel.prototype.setCurrentIndex = function (currentIndex) {
    if (currentIndex == null) {
      currentIndex = this.option.currentIndex;
    }
    var count = this._data.count();
    if (this.option.loop) {
      currentIndex = (currentIndex % count + count) % count;
    } else {
      currentIndex >= count && (currentIndex = count - 1);
      currentIndex < 0 && (currentIndex = 0);
    }
    this.option.currentIndex = currentIndex;
  };
  /**
   * @return {number} currentIndex
   */
  TimelineModel.prototype.getCurrentIndex = function () {
    return this.option.currentIndex;
  };
  /**
   * @return {boolean}
   */
  TimelineModel.prototype.isIndexMax = function () {
    return this.getCurrentIndex() >= this._data.count() - 1;
  };
  /**
   * @param {boolean} state true: play, false: stop
   */
  TimelineModel.prototype.setPlayState = function (state) {
    this.option.autoPlay = !!state;
  };
  /**
   * @return {boolean} true: play, false: stop
   */
  TimelineModel.prototype.getPlayState = function () {
    return !!this.option.autoPlay;
  };
  /**
   * @private
   */
  TimelineModel.prototype._initData = function () {
    var thisOption = this.option;
    var dataArr = thisOption.data || [];
    var axisType = thisOption.axisType;
    var names = this._names = [];
    var processedDataArr;
    if (axisType === 'category') {
      processedDataArr = [];
      (0,util.each)(dataArr, function (item, index) {
        var value = (0,util_model.convertOptionIdName)((0,util_model.getDataItemValue)(item), '');
        var newItem;
        if ((0,util.isObject)(item)) {
          newItem = (0,util.clone)(item);
          newItem.value = index;
        } else {
          newItem = index;
        }
        processedDataArr.push(newItem);
        names.push(value);
      });
    } else {
      processedDataArr = dataArr;
    }
    var dimType = {
      category: 'ordinal',
      time: 'time',
      value: 'number'
    }[axisType] || 'number';
    var data = this._data = new SeriesData["default"]([{
      name: 'value',
      type: dimType
    }], this);
    data.initData(processedDataArr, names);
  };
  TimelineModel.prototype.getData = function () {
    return this._data;
  };
  /**
   * @public
   * @return {Array.<string>} categoreis
   */
  TimelineModel.prototype.getCategories = function () {
    if (this.get('axisType') === 'category') {
      return this._names.slice();
    }
  };
  TimelineModel.type = 'timeline';
  /**
   * @protected
   */
  TimelineModel.defaultOption = {
    // zlevel: 0,                  // 一级层叠
    z: 4,
    show: true,
    axisType: 'time',
    realtime: true,
    left: '20%',
    top: null,
    right: '20%',
    bottom: 0,
    width: null,
    height: 40,
    padding: 5,
    controlPosition: 'left',
    autoPlay: false,
    rewind: false,
    loop: true,
    playInterval: 2000,
    currentIndex: 0,
    itemStyle: {},
    label: {
      color: '#000'
    },
    data: []
  };
  return TimelineModel;
}(Component["default"]);
/* ESM default export */ var timeline_TimelineModel = (TimelineModel_TimelineModel);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/model/mixin/dataFormat.js
var dataFormat = __webpack_require__(77178);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/component.js
var component = __webpack_require__(95202);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/timeline/SliderTimelineModel.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/





var SliderTimelineModel_SliderTimelineModel = /** @class */function (_super) {
  (0,tslib_es6.__extends)(SliderTimelineModel, _super);
  function SliderTimelineModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = SliderTimelineModel.type;
    return _this;
  }
  SliderTimelineModel.type = 'timeline.slider';
  /**
   * @protected
   */
  SliderTimelineModel.defaultOption = (0,component.inheritDefaultOption)(timeline_TimelineModel.defaultOption, {
    backgroundColor: 'rgba(0,0,0,0)',
    borderColor: '#ccc',
    borderWidth: 0,
    orient: 'horizontal',
    inverse: false,
    tooltip: {
      trigger: 'item' // data item may also have tootip attr.
    },
    symbol: 'circle',
    symbolSize: 12,
    lineStyle: {
      show: true,
      width: 2,
      color: '#DAE1F5'
    },
    label: {
      position: 'auto',
      // When using number, label position is not
      // restricted by viewRect.
      // positive: right/bottom, negative: left/top
      show: true,
      interval: 'auto',
      rotate: 0,
      // formatter: null,
      // 其余属性默认使用全局文本样式，详见TEXTSTYLE
      color: '#A4B1D7'
    },
    itemStyle: {
      color: '#A4B1D7',
      borderWidth: 1
    },
    checkpointStyle: {
      symbol: 'circle',
      symbolSize: 15,
      color: '#316bf3',
      borderColor: '#fff',
      borderWidth: 2,
      shadowBlur: 2,
      shadowOffsetX: 1,
      shadowOffsetY: 1,
      shadowColor: 'rgba(0, 0, 0, 0.3)',
      // borderColor: 'rgba(194,53,49, 0.5)',
      animation: true,
      animationDuration: 300,
      animationEasing: 'quinticInOut'
    },
    controlStyle: {
      show: true,
      showPlayBtn: true,
      showPrevBtn: true,
      showNextBtn: true,
      itemSize: 24,
      itemGap: 12,
      position: 'left',
      playIcon: 'path://M31.6,53C17.5,53,6,41.5,6,27.4S17.5,1.8,31.6,1.8C45.7,1.8,57.2,13.3,57.2,27.4S45.7,53,31.6,53z M31.6,3.3 C18.4,3.3,7.5,14.1,7.5,27.4c0,13.3,10.8,24.1,24.1,24.1C44.9,51.5,55.7,40.7,55.7,27.4C55.7,14.1,44.9,3.3,31.6,3.3z M24.9,21.3 c0-2.2,1.6-3.1,3.5-2l10.5,6.1c1.899,1.1,1.899,2.9,0,4l-10.5,6.1c-1.9,1.1-3.5,0.2-3.5-2V21.3z',
      stopIcon: 'path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z',
      // eslint-disable-next-line max-len
      nextIcon: 'M2,18.5A1.52,1.52,0,0,1,.92,18a1.49,1.49,0,0,1,0-2.12L7.81,9.36,1,3.11A1.5,1.5,0,1,1,3,.89l8,7.34a1.48,1.48,0,0,1,.49,1.09,1.51,1.51,0,0,1-.46,1.1L3,18.08A1.5,1.5,0,0,1,2,18.5Z',
      // eslint-disable-next-line max-len
      prevIcon: 'M10,.5A1.52,1.52,0,0,1,11.08,1a1.49,1.49,0,0,1,0,2.12L4.19,9.64,11,15.89a1.5,1.5,0,1,1-2,2.22L1,10.77A1.48,1.48,0,0,1,.5,9.68,1.51,1.51,0,0,1,1,8.58L9,.92A1.5,1.5,0,0,1,10,.5Z',
      prevBtnSize: 18,
      nextBtnSize: 18,
      color: '#A4B1D7',
      borderColor: '#A4B1D7',
      borderWidth: 1
    },
    emphasis: {
      label: {
        show: true,
        // 其余属性默认使用全局文本样式，详见TEXTSTYLE
        color: '#6f778d'
      },
      itemStyle: {
        color: '#316BF3'
      },
      controlStyle: {
        color: '#316BF3',
        borderColor: '#316BF3',
        borderWidth: 2
      }
    },
    progress: {
      lineStyle: {
        color: '#316BF3'
      },
      itemStyle: {
        color: '#316BF3'
      },
      label: {
        color: '#6f778d'
      }
    },
    data: []
  });
  return SliderTimelineModel;
}(timeline_TimelineModel);
(0,util.mixin)(SliderTimelineModel_SliderTimelineModel, dataFormat.DataFormatMixin.prototype);
/* ESM default export */ var timeline_SliderTimelineModel = (SliderTimelineModel_SliderTimelineModel);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/BoundingRect.js
var BoundingRect = __webpack_require__(44964);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/core/matrix.js
var matrix = __webpack_require__(85215);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Group.js
var Group = __webpack_require__(58695);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/shape/Line.js
var Line = __webpack_require__(16504);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/graphic/Text.js
var Text = __webpack_require__(97199);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/graphic.js
var graphic = __webpack_require__(16636);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/label/labelStyle.js
var labelStyle = __webpack_require__(77704);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/layout.js
var layout = __webpack_require__(37624);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/view/Component.js
var view_Component = __webpack_require__(28440);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/timeline/TimelineView.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


var TimelineView_TimelineView = /** @class */function (_super) {
  (0,tslib_es6.__extends)(TimelineView, _super);
  function TimelineView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = TimelineView.type;
    return _this;
  }
  TimelineView.type = 'timeline';
  return TimelineView;
}(view_Component["default"]);
/* ESM default export */ var timeline_TimelineView = (TimelineView_TimelineView);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/coord/Axis.js + 1 modules
var Axis = __webpack_require__(63998);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/timeline/TimelineAxis.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * Extend axis 2d
 */
var TimelineAxis_TimelineAxis = /** @class */function (_super) {
  (0,tslib_es6.__extends)(TimelineAxis, _super);
  function TimelineAxis(dim, scale, coordExtent, axisType) {
    var _this = _super.call(this, dim, scale, coordExtent) || this;
    _this.type = axisType || 'value';
    return _this;
  }
  /**
   * @override
   */
  TimelineAxis.prototype.getLabelModel = function () {
    // Force override
    return this.model.getModel('label');
  };
  /**
   * @override
   */
  TimelineAxis.prototype.isHorizontal = function () {
    return this.model.get('orient') === 'horizontal';
  };
  return TimelineAxis;
}(Axis["default"]);
/* ESM default export */ var timeline_TimelineAxis = (TimelineAxis_TimelineAxis);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/symbol.js
var util_symbol = __webpack_require__(44421);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(81731);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/scale/Ordinal.js
var Ordinal = __webpack_require__(39621);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/scale/Time.js
var Time = __webpack_require__(49988);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/scale/Interval.js
var Interval = __webpack_require__(36700);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.6.1/node_modules/zrender/lib/contain/text.js
var contain_text = __webpack_require__(45258);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/innerStore.js
var innerStore = __webpack_require__(55413);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/util/states.js
var states = __webpack_require__(63344);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/tooltip/tooltipMarkup.js
var tooltipMarkup = __webpack_require__(13134);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/timeline/SliderTimelineView.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
var labelDataIndexStore = (0,util_model.makeInner)();
var SliderTimelineView_SliderTimelineView = /** @class */function (_super) {
  (0,tslib_es6.__extends)(SliderTimelineView, _super);
  function SliderTimelineView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = SliderTimelineView.type;
    return _this;
  }
  SliderTimelineView.prototype.init = function (ecModel, api) {
    this.api = api;
  };
  /**
   * @override
   */
  SliderTimelineView.prototype.render = function (timelineModel, ecModel, api) {
    this.model = timelineModel;
    this.api = api;
    this.ecModel = ecModel;
    this.group.removeAll();
    if (timelineModel.get('show', true)) {
      var layoutInfo_1 = this._layout(timelineModel, api);
      var mainGroup_1 = this._createGroup('_mainGroup');
      var labelGroup = this._createGroup('_labelGroup');
      var axis_1 = this._axis = this._createAxis(layoutInfo_1, timelineModel);
      timelineModel.formatTooltip = function (dataIndex) {
        var name = axis_1.scale.getLabel({
          value: dataIndex
        });
        return (0,tooltipMarkup.createTooltipMarkup)('nameValue', {
          noName: true,
          value: name
        });
      };
      (0,util.each)(['AxisLine', 'AxisTick', 'Control', 'CurrentPointer'], function (name) {
        this['_render' + name](layoutInfo_1, mainGroup_1, axis_1, timelineModel);
      }, this);
      this._renderAxisLabel(layoutInfo_1, labelGroup, axis_1, timelineModel);
      this._position(layoutInfo_1, timelineModel);
    }
    this._doPlayStop();
    this._updateTicksStatus();
  };
  /**
   * @override
   */
  SliderTimelineView.prototype.remove = function () {
    this._clearTimer();
    this.group.removeAll();
  };
  /**
   * @override
   */
  SliderTimelineView.prototype.dispose = function () {
    this._clearTimer();
  };
  SliderTimelineView.prototype._layout = function (timelineModel, api) {
    var labelPosOpt = timelineModel.get(['label', 'position']);
    var orient = timelineModel.get('orient');
    var viewRect = getViewRect(timelineModel, api);
    var parsedLabelPos;
    // Auto label offset.
    if (labelPosOpt == null || labelPosOpt === 'auto') {
      parsedLabelPos = orient === 'horizontal' ? viewRect.y + viewRect.height / 2 < api.getHeight() / 2 ? '-' : '+' : viewRect.x + viewRect.width / 2 < api.getWidth() / 2 ? '+' : '-';
    } else if ((0,util.isString)(labelPosOpt)) {
      parsedLabelPos = {
        horizontal: {
          top: '-',
          bottom: '+'
        },
        vertical: {
          left: '-',
          right: '+'
        }
      }[orient][labelPosOpt];
    } else {
      // is number
      parsedLabelPos = labelPosOpt;
    }
    var labelAlignMap = {
      horizontal: 'center',
      vertical: parsedLabelPos >= 0 || parsedLabelPos === '+' ? 'left' : 'right'
    };
    var labelBaselineMap = {
      horizontal: parsedLabelPos >= 0 || parsedLabelPos === '+' ? 'top' : 'bottom',
      vertical: 'middle'
    };
    var rotationMap = {
      horizontal: 0,
      vertical: PI / 2
    };
    // Position
    var mainLength = orient === 'vertical' ? viewRect.height : viewRect.width;
    var controlModel = timelineModel.getModel('controlStyle');
    var showControl = controlModel.get('show', true);
    var controlSize = showControl ? controlModel.get('itemSize') : 0;
    var controlGap = showControl ? controlModel.get('itemGap') : 0;
    var sizePlusGap = controlSize + controlGap;
    // Special label rotate.
    var labelRotation = timelineModel.get(['label', 'rotate']) || 0;
    labelRotation = labelRotation * PI / 180; // To radian.
    var playPosition;
    var prevBtnPosition;
    var nextBtnPosition;
    var controlPosition = controlModel.get('position', true);
    var showPlayBtn = showControl && controlModel.get('showPlayBtn', true);
    var showPrevBtn = showControl && controlModel.get('showPrevBtn', true);
    var showNextBtn = showControl && controlModel.get('showNextBtn', true);
    var xLeft = 0;
    var xRight = mainLength;
    // position[0] means left, position[1] means middle.
    if (controlPosition === 'left' || controlPosition === 'bottom') {
      showPlayBtn && (playPosition = [0, 0], xLeft += sizePlusGap);
      showPrevBtn && (prevBtnPosition = [xLeft, 0], xLeft += sizePlusGap);
      showNextBtn && (nextBtnPosition = [xRight - controlSize, 0], xRight -= sizePlusGap);
    } else {
      // 'top' 'right'
      showPlayBtn && (playPosition = [xRight - controlSize, 0], xRight -= sizePlusGap);
      showPrevBtn && (prevBtnPosition = [0, 0], xLeft += sizePlusGap);
      showNextBtn && (nextBtnPosition = [xRight - controlSize, 0], xRight -= sizePlusGap);
    }
    var axisExtent = [xLeft, xRight];
    if (timelineModel.get('inverse')) {
      axisExtent.reverse();
    }
    return {
      viewRect: viewRect,
      mainLength: mainLength,
      orient: orient,
      rotation: rotationMap[orient],
      labelRotation: labelRotation,
      labelPosOpt: parsedLabelPos,
      labelAlign: timelineModel.get(['label', 'align']) || labelAlignMap[orient],
      labelBaseline: timelineModel.get(['label', 'verticalAlign']) || timelineModel.get(['label', 'baseline']) || labelBaselineMap[orient],
      // Based on mainGroup.
      playPosition: playPosition,
      prevBtnPosition: prevBtnPosition,
      nextBtnPosition: nextBtnPosition,
      axisExtent: axisExtent,
      controlSize: controlSize,
      controlGap: controlGap
    };
  };
  SliderTimelineView.prototype._position = function (layoutInfo, timelineModel) {
    // Position is be called finally, because bounding rect is needed for
    // adapt content to fill viewRect (auto adapt offset).
    // Timeline may be not all in the viewRect when 'offset' is specified
    // as a number, because it is more appropriate that label aligns at
    // 'offset' but not the other edge defined by viewRect.
    var mainGroup = this._mainGroup;
    var labelGroup = this._labelGroup;
    var viewRect = layoutInfo.viewRect;
    if (layoutInfo.orient === 'vertical') {
      // transform to horizontal, inverse rotate by left-top point.
      var m = matrix.create();
      var rotateOriginX = viewRect.x;
      var rotateOriginY = viewRect.y + viewRect.height;
      matrix.translate(m, m, [-rotateOriginX, -rotateOriginY]);
      matrix.rotate(m, m, -PI / 2);
      matrix.translate(m, m, [rotateOriginX, rotateOriginY]);
      viewRect = viewRect.clone();
      viewRect.applyTransform(m);
    }
    var viewBound = getBound(viewRect);
    var mainBound = getBound(mainGroup.getBoundingRect());
    var labelBound = getBound(labelGroup.getBoundingRect());
    var mainPosition = [mainGroup.x, mainGroup.y];
    var labelsPosition = [labelGroup.x, labelGroup.y];
    labelsPosition[0] = mainPosition[0] = viewBound[0][0];
    var labelPosOpt = layoutInfo.labelPosOpt;
    if (labelPosOpt == null || (0,util.isString)(labelPosOpt)) {
      // '+' or '-'
      var mainBoundIdx = labelPosOpt === '+' ? 0 : 1;
      toBound(mainPosition, mainBound, viewBound, 1, mainBoundIdx);
      toBound(labelsPosition, labelBound, viewBound, 1, 1 - mainBoundIdx);
    } else {
      var mainBoundIdx = labelPosOpt >= 0 ? 0 : 1;
      toBound(mainPosition, mainBound, viewBound, 1, mainBoundIdx);
      labelsPosition[1] = mainPosition[1] + labelPosOpt;
    }
    mainGroup.setPosition(mainPosition);
    labelGroup.setPosition(labelsPosition);
    mainGroup.rotation = labelGroup.rotation = layoutInfo.rotation;
    setOrigin(mainGroup);
    setOrigin(labelGroup);
    function setOrigin(targetGroup) {
      targetGroup.originX = viewBound[0][0] - targetGroup.x;
      targetGroup.originY = viewBound[1][0] - targetGroup.y;
    }
    function getBound(rect) {
      // [[xmin, xmax], [ymin, ymax]]
      return [[rect.x, rect.x + rect.width], [rect.y, rect.y + rect.height]];
    }
    function toBound(fromPos, from, to, dimIdx, boundIdx) {
      fromPos[dimIdx] += to[dimIdx][boundIdx] - from[dimIdx][boundIdx];
    }
  };
  SliderTimelineView.prototype._createAxis = function (layoutInfo, timelineModel) {
    var data = timelineModel.getData();
    var axisType = timelineModel.get('axisType');
    var scale = createScaleByModel(timelineModel, axisType);
    // Customize scale. The `tickValue` is `dataIndex`.
    scale.getTicks = function () {
      return data.mapArray(['value'], function (value) {
        return {
          value: value
        };
      });
    };
    var dataExtent = data.getDataExtent('value');
    scale.setExtent(dataExtent[0], dataExtent[1]);
    scale.calcNiceTicks();
    var axis = new timeline_TimelineAxis('value', scale, layoutInfo.axisExtent, axisType);
    axis.model = timelineModel;
    return axis;
  };
  SliderTimelineView.prototype._createGroup = function (key) {
    var newGroup = this[key] = new Group["default"]();
    this.group.add(newGroup);
    return newGroup;
  };
  SliderTimelineView.prototype._renderAxisLine = function (layoutInfo, group, axis, timelineModel) {
    var axisExtent = axis.getExtent();
    if (!timelineModel.get(['lineStyle', 'show'])) {
      return;
    }
    var line = new Line["default"]({
      shape: {
        x1: axisExtent[0],
        y1: 0,
        x2: axisExtent[1],
        y2: 0
      },
      style: (0,util.extend)({
        lineCap: 'round'
      }, timelineModel.getModel('lineStyle').getLineStyle()),
      silent: true,
      z2: 1
    });
    group.add(line);
    var progressLine = this._progressLine = new Line["default"]({
      shape: {
        x1: axisExtent[0],
        x2: this._currentPointer ? this._currentPointer.x : axisExtent[0],
        y1: 0,
        y2: 0
      },
      style: (0,util.defaults)({
        lineCap: 'round',
        lineWidth: line.style.lineWidth
      }, timelineModel.getModel(['progress', 'lineStyle']).getLineStyle()),
      silent: true,
      z2: 1
    });
    group.add(progressLine);
  };
  SliderTimelineView.prototype._renderAxisTick = function (layoutInfo, group, axis, timelineModel) {
    var _this = this;
    var data = timelineModel.getData();
    // Show all ticks, despite ignoring strategy.
    var ticks = axis.scale.getTicks();
    this._tickSymbols = [];
    // The value is dataIndex, see the customized scale.
    (0,util.each)(ticks, function (tick) {
      var tickCoord = axis.dataToCoord(tick.value);
      var itemModel = data.getItemModel(tick.value);
      var itemStyleModel = itemModel.getModel('itemStyle');
      var hoverStyleModel = itemModel.getModel(['emphasis', 'itemStyle']);
      var progressStyleModel = itemModel.getModel(['progress', 'itemStyle']);
      var symbolOpt = {
        x: tickCoord,
        y: 0,
        onclick: (0,util.bind)(_this._changeTimeline, _this, tick.value)
      };
      var el = giveSymbol(itemModel, itemStyleModel, group, symbolOpt);
      el.ensureState('emphasis').style = hoverStyleModel.getItemStyle();
      el.ensureState('progress').style = progressStyleModel.getItemStyle();
      (0,states.enableHoverEmphasis)(el);
      var ecData = (0,innerStore.getECData)(el);
      if (itemModel.get('tooltip')) {
        ecData.dataIndex = tick.value;
        ecData.dataModel = timelineModel;
      } else {
        ecData.dataIndex = ecData.dataModel = null;
      }
      _this._tickSymbols.push(el);
    });
  };
  SliderTimelineView.prototype._renderAxisLabel = function (layoutInfo, group, axis, timelineModel) {
    var _this = this;
    var labelModel = axis.getLabelModel();
    if (!labelModel.get('show')) {
      return;
    }
    var data = timelineModel.getData();
    var labels = axis.getViewLabels();
    this._tickLabels = [];
    (0,util.each)(labels, function (labelItem) {
      // The tickValue is dataIndex, see the customized scale.
      var dataIndex = labelItem.tickValue;
      var itemModel = data.getItemModel(dataIndex);
      var normalLabelModel = itemModel.getModel('label');
      var hoverLabelModel = itemModel.getModel(['emphasis', 'label']);
      var progressLabelModel = itemModel.getModel(['progress', 'label']);
      var tickCoord = axis.dataToCoord(labelItem.tickValue);
      var textEl = new Text["default"]({
        x: tickCoord,
        y: 0,
        rotation: layoutInfo.labelRotation - layoutInfo.rotation,
        onclick: (0,util.bind)(_this._changeTimeline, _this, dataIndex),
        silent: false,
        style: (0,labelStyle.createTextStyle)(normalLabelModel, {
          text: labelItem.formattedLabel,
          align: layoutInfo.labelAlign,
          verticalAlign: layoutInfo.labelBaseline
        })
      });
      textEl.ensureState('emphasis').style = (0,labelStyle.createTextStyle)(hoverLabelModel);
      textEl.ensureState('progress').style = (0,labelStyle.createTextStyle)(progressLabelModel);
      group.add(textEl);
      (0,states.enableHoverEmphasis)(textEl);
      labelDataIndexStore(textEl).dataIndex = dataIndex;
      _this._tickLabels.push(textEl);
    });
  };
  SliderTimelineView.prototype._renderControl = function (layoutInfo, group, axis, timelineModel) {
    var controlSize = layoutInfo.controlSize;
    var rotation = layoutInfo.rotation;
    var itemStyle = timelineModel.getModel('controlStyle').getItemStyle();
    var hoverStyle = timelineModel.getModel(['emphasis', 'controlStyle']).getItemStyle();
    var playState = timelineModel.getPlayState();
    var inverse = timelineModel.get('inverse', true);
    makeBtn(layoutInfo.nextBtnPosition, 'next', (0,util.bind)(this._changeTimeline, this, inverse ? '-' : '+'));
    makeBtn(layoutInfo.prevBtnPosition, 'prev', (0,util.bind)(this._changeTimeline, this, inverse ? '+' : '-'));
    makeBtn(layoutInfo.playPosition, playState ? 'stop' : 'play', (0,util.bind)(this._handlePlayClick, this, !playState), true);
    function makeBtn(position, iconName, onclick, willRotate) {
      if (!position) {
        return;
      }
      var iconSize = (0,contain_text.parsePercent)((0,util.retrieve2)(timelineModel.get(['controlStyle', iconName + 'BtnSize']), controlSize), controlSize);
      var rect = [0, -iconSize / 2, iconSize, iconSize];
      var btn = makeControlIcon(timelineModel, iconName + 'Icon', rect, {
        x: position[0],
        y: position[1],
        originX: controlSize / 2,
        originY: 0,
        rotation: willRotate ? -rotation : 0,
        rectHover: true,
        style: itemStyle,
        onclick: onclick
      });
      btn.ensureState('emphasis').style = hoverStyle;
      group.add(btn);
      (0,states.enableHoverEmphasis)(btn);
    }
  };
  SliderTimelineView.prototype._renderCurrentPointer = function (layoutInfo, group, axis, timelineModel) {
    var data = timelineModel.getData();
    var currentIndex = timelineModel.getCurrentIndex();
    var pointerModel = data.getItemModel(currentIndex).getModel('checkpointStyle');
    var me = this;
    var callback = {
      onCreate: function (pointer) {
        pointer.draggable = true;
        pointer.drift = (0,util.bind)(me._handlePointerDrag, me);
        pointer.ondragend = (0,util.bind)(me._handlePointerDragend, me);
        pointerMoveTo(pointer, me._progressLine, currentIndex, axis, timelineModel, true);
      },
      onUpdate: function (pointer) {
        pointerMoveTo(pointer, me._progressLine, currentIndex, axis, timelineModel);
      }
    };
    // Reuse when exists, for animation and drag.
    this._currentPointer = giveSymbol(pointerModel, pointerModel, this._mainGroup, {}, this._currentPointer, callback);
  };
  SliderTimelineView.prototype._handlePlayClick = function (nextState) {
    this._clearTimer();
    this.api.dispatchAction({
      type: 'timelinePlayChange',
      playState: nextState,
      from: this.uid
    });
  };
  SliderTimelineView.prototype._handlePointerDrag = function (dx, dy, e) {
    this._clearTimer();
    this._pointerChangeTimeline([e.offsetX, e.offsetY]);
  };
  SliderTimelineView.prototype._handlePointerDragend = function (e) {
    this._pointerChangeTimeline([e.offsetX, e.offsetY], true);
  };
  SliderTimelineView.prototype._pointerChangeTimeline = function (mousePos, trigger) {
    var toCoord = this._toAxisCoord(mousePos)[0];
    var axis = this._axis;
    var axisExtent = number.asc(axis.getExtent().slice());
    toCoord > axisExtent[1] && (toCoord = axisExtent[1]);
    toCoord < axisExtent[0] && (toCoord = axisExtent[0]);
    this._currentPointer.x = toCoord;
    this._currentPointer.markRedraw();
    var progressLine = this._progressLine;
    if (progressLine) {
      progressLine.shape.x2 = toCoord;
      progressLine.dirty();
    }
    var targetDataIndex = this._findNearestTick(toCoord);
    var timelineModel = this.model;
    if (trigger || targetDataIndex !== timelineModel.getCurrentIndex() && timelineModel.get('realtime')) {
      this._changeTimeline(targetDataIndex);
    }
  };
  SliderTimelineView.prototype._doPlayStop = function () {
    var _this = this;
    this._clearTimer();
    if (this.model.getPlayState()) {
      this._timer = setTimeout(function () {
        // Do not cache
        var timelineModel = _this.model;
        _this._changeTimeline(timelineModel.getCurrentIndex() + (timelineModel.get('rewind', true) ? -1 : 1));
      }, this.model.get('playInterval'));
    }
  };
  SliderTimelineView.prototype._toAxisCoord = function (vertex) {
    var trans = this._mainGroup.getLocalTransform();
    return graphic.applyTransform(vertex, trans, true);
  };
  SliderTimelineView.prototype._findNearestTick = function (axisCoord) {
    var data = this.model.getData();
    var dist = Infinity;
    var targetDataIndex;
    var axis = this._axis;
    data.each(['value'], function (value, dataIndex) {
      var coord = axis.dataToCoord(value);
      var d = Math.abs(coord - axisCoord);
      if (d < dist) {
        dist = d;
        targetDataIndex = dataIndex;
      }
    });
    return targetDataIndex;
  };
  SliderTimelineView.prototype._clearTimer = function () {
    if (this._timer) {
      clearTimeout(this._timer);
      this._timer = null;
    }
  };
  SliderTimelineView.prototype._changeTimeline = function (nextIndex) {
    var currentIndex = this.model.getCurrentIndex();
    if (nextIndex === '+') {
      nextIndex = currentIndex + 1;
    } else if (nextIndex === '-') {
      nextIndex = currentIndex - 1;
    }
    this.api.dispatchAction({
      type: 'timelineChange',
      currentIndex: nextIndex,
      from: this.uid
    });
  };
  SliderTimelineView.prototype._updateTicksStatus = function () {
    var currentIndex = this.model.getCurrentIndex();
    var tickSymbols = this._tickSymbols;
    var tickLabels = this._tickLabels;
    if (tickSymbols) {
      for (var i = 0; i < tickSymbols.length; i++) {
        tickSymbols && tickSymbols[i] && tickSymbols[i].toggleState('progress', i < currentIndex);
      }
    }
    if (tickLabels) {
      for (var i = 0; i < tickLabels.length; i++) {
        tickLabels && tickLabels[i] && tickLabels[i].toggleState('progress', labelDataIndexStore(tickLabels[i]).dataIndex <= currentIndex);
      }
    }
  };
  SliderTimelineView.type = 'timeline.slider';
  return SliderTimelineView;
}(timeline_TimelineView);
function createScaleByModel(model, axisType) {
  axisType = axisType || model.get('type');
  if (axisType) {
    switch (axisType) {
      // Buildin scale
      case 'category':
        return new Ordinal["default"]({
          ordinalMeta: model.getCategories(),
          extent: [Infinity, -Infinity]
        });
      case 'time':
        return new Time["default"]({
          locale: model.ecModel.getLocaleModel(),
          useUTC: model.ecModel.get('useUTC')
        });
      default:
        // default to be value
        return new Interval["default"]();
    }
  }
}
function getViewRect(model, api) {
  return layout.getLayoutRect(model.getBoxLayoutParams(), {
    width: api.getWidth(),
    height: api.getHeight()
  }, model.get('padding'));
}
function makeControlIcon(timelineModel, objPath, rect, opts) {
  var style = opts.style;
  var icon = graphic.createIcon(timelineModel.get(['controlStyle', objPath]), opts || {}, new BoundingRect["default"](rect[0], rect[1], rect[2], rect[3]));
  // TODO createIcon won't use style in opt.
  if (style) {
    icon.setStyle(style);
  }
  return icon;
}
/**
 * Create symbol or update symbol
 * opt: basic position and event handlers
 */
function giveSymbol(hostModel, itemStyleModel, group, opt, symbol, callback) {
  var color = itemStyleModel.get('color');
  if (!symbol) {
    var symbolType = hostModel.get('symbol');
    symbol = (0,util_symbol.createSymbol)(symbolType, -1, -1, 2, 2, color);
    symbol.setStyle('strokeNoScale', true);
    group.add(symbol);
    callback && callback.onCreate(symbol);
  } else {
    symbol.setColor(color);
    group.add(symbol); // Group may be new, also need to add.
    callback && callback.onUpdate(symbol);
  }
  // Style
  var itemStyle = itemStyleModel.getItemStyle(['color']);
  symbol.setStyle(itemStyle);
  // Transform and events.
  opt = (0,util.merge)({
    rectHover: true,
    z2: 100
  }, opt, true);
  var symbolSize = (0,util_symbol.normalizeSymbolSize)(hostModel.get('symbolSize'));
  opt.scaleX = symbolSize[0] / 2;
  opt.scaleY = symbolSize[1] / 2;
  var symbolOffset = (0,util_symbol.normalizeSymbolOffset)(hostModel.get('symbolOffset'), symbolSize);
  if (symbolOffset) {
    opt.x = (opt.x || 0) + symbolOffset[0];
    opt.y = (opt.y || 0) + symbolOffset[1];
  }
  var symbolRotate = hostModel.get('symbolRotate');
  opt.rotation = (symbolRotate || 0) * Math.PI / 180 || 0;
  symbol.attr(opt);
  // FIXME
  // (1) When symbol.style.strokeNoScale is true and updateTransform is not performed,
  // getBoundingRect will return wrong result.
  // (This is supposed to be resolved in zrender, but it is a little difficult to
  // leverage performance and auto updateTransform)
  // (2) All of ancesters of symbol do not scale, so we can just updateTransform symbol.
  symbol.updateTransform();
  return symbol;
}
function pointerMoveTo(pointer, progressLine, dataIndex, axis, timelineModel, noAnimation) {
  if (pointer.dragging) {
    return;
  }
  var pointerModel = timelineModel.getModel('checkpointStyle');
  var toCoord = axis.dataToCoord(timelineModel.getData().get('value', dataIndex));
  if (noAnimation || !pointerModel.get('animation', true)) {
    pointer.attr({
      x: toCoord,
      y: 0
    });
    progressLine && progressLine.attr({
      shape: {
        x2: toCoord
      }
    });
  } else {
    var animationCfg = {
      duration: pointerModel.get('animationDuration', true),
      easing: pointerModel.get('animationEasing', true)
    };
    pointer.stopAnimation(null, true);
    pointer.animateTo({
      x: toCoord,
      y: 0
    }, animationCfg);
    progressLine && progressLine.animateTo({
      shape: {
        x2: toCoord
      }
    }, animationCfg);
  }
}
/* ESM default export */ var timeline_SliderTimelineView = (SliderTimelineView_SliderTimelineView);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/timeline/timelineAction.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

function installTimelineAction(registers) {
  registers.registerAction({
    type: 'timelineChange',
    event: 'timelineChanged',
    update: 'prepareAndUpdate'
  }, function (payload, ecModel, api) {
    var timelineModel = ecModel.getComponent('timeline');
    if (timelineModel && payload.currentIndex != null) {
      timelineModel.setCurrentIndex(payload.currentIndex);
      if (!timelineModel.get('loop', true) && timelineModel.isIndexMax() && timelineModel.getPlayState()) {
        timelineModel.setPlayState(false);
        // The timeline has played to the end, trigger event
        api.dispatchAction({
          type: 'timelinePlayChange',
          playState: false,
          from: payload.from
        });
      }
    }
    // Set normalized currentIndex to payload.
    ecModel.resetOption('timeline', {
      replaceMerge: timelineModel.get('replaceMerge', true)
    });
    return (0,util.defaults)({
      currentIndex: timelineModel.option.currentIndex
    }, payload);
  });
  registers.registerAction({
    type: 'timelinePlayChange',
    event: 'timelinePlayChanged',
    update: 'update'
  }, function (payload, ecModel) {
    var timelineModel = ecModel.getComponent('timeline');
    if (timelineModel && payload.playState != null) {
      timelineModel.setPlayState(payload.playState);
    }
  });
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/timeline/preprocessor.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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

function timelinePreprocessor(option) {
  var timelineOpt = option && option.timeline;
  if (!util.isArray(timelineOpt)) {
    timelineOpt = timelineOpt ? [timelineOpt] : [];
  }
  util.each(timelineOpt, function (opt) {
    if (!opt) {
      return;
    }
    compatibleEC2(opt);
  });
}
function compatibleEC2(opt) {
  var type = opt.type;
  var ec2Types = {
    'number': 'value',
    'time': 'time'
  };
  // Compatible with ec2
  if (ec2Types[type]) {
    opt.axisType = ec2Types[type];
    delete opt.type;
  }
  transferItem(opt);
  if (has(opt, 'controlPosition')) {
    var controlStyle = opt.controlStyle || (opt.controlStyle = {});
    if (!has(controlStyle, 'position')) {
      controlStyle.position = opt.controlPosition;
    }
    if (controlStyle.position === 'none' && !has(controlStyle, 'show')) {
      controlStyle.show = false;
      delete controlStyle.position;
    }
    delete opt.controlPosition;
  }
  util.each(opt.data || [], function (dataItem) {
    if (util.isObject(dataItem) && !util.isArray(dataItem)) {
      if (!has(dataItem, 'value') && has(dataItem, 'name')) {
        // In ec2, using name as value.
        dataItem.value = dataItem.name;
      }
      transferItem(dataItem);
    }
  });
}
function transferItem(opt) {
  var itemStyle = opt.itemStyle || (opt.itemStyle = {});
  var itemStyleEmphasis = itemStyle.emphasis || (itemStyle.emphasis = {});
  // Transfer label out
  var label = opt.label || opt.label || {};
  var labelNormal = label.normal || (label.normal = {});
  var excludeLabelAttr = {
    normal: 1,
    emphasis: 1
  };
  util.each(label, function (value, name) {
    if (!excludeLabelAttr[name] && !has(labelNormal, name)) {
      labelNormal[name] = value;
    }
  });
  if (itemStyleEmphasis.label && !has(label, 'emphasis')) {
    label.emphasis = itemStyleEmphasis.label;
    delete itemStyleEmphasis.label;
  }
}
function has(obj, attr) {
  return obj.hasOwnProperty(attr);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/lib/component/timeline/install.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
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
  registers.registerComponentModel(timeline_SliderTimelineModel);
  registers.registerComponentView(timeline_SliderTimelineView);
  registers.registerSubTypeDefaulter('timeline', function () {
    // Only slider now.
    return 'slider';
  });
  installTimelineAction(registers);
  registers.registerPreprocessor(timelinePreprocessor);
}

}),
14863: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  install: function() { return install; }
});
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96585);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97199);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(40361);
/* ESM import */var _util_innerStore_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(55413);
/* ESM import */var _label_labelStyle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77704);
/* ESM import */var _util_layout_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(37624);
/* ESM import */var _model_Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68943);
/* ESM import */var _view_Component_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28440);
/* ESM import */var _util_format_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43718);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/









var TitleModel = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(TitleModel, _super);
  function TitleModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = TitleModel.type;
    _this.layoutMode = {
      type: 'box',
      ignoreSize: true
    };
    return _this;
  }
  TitleModel.type = 'title';
  TitleModel.defaultOption = {
    // zlevel: 0,
    z: 6,
    show: true,
    text: '',
    target: 'blank',
    subtext: '',
    subtarget: 'blank',
    left: 0,
    top: 0,
    backgroundColor: 'rgba(0,0,0,0)',
    borderColor: '#ccc',
    borderWidth: 0,
    padding: 5,
    itemGap: 10,
    textStyle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#464646'
    },
    subtextStyle: {
      fontSize: 12,
      color: '#6E7079'
    }
  };
  return TitleModel;
}(_model_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
// View
var TitleView = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(TitleView, _super);
  function TitleView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = TitleView.type;
    return _this;
  }
  TitleView.prototype.render = function (titleModel, ecModel, api) {
    this.group.removeAll();
    if (!titleModel.get('show')) {
      return;
    }
    var group = this.group;
    var textStyleModel = titleModel.getModel('textStyle');
    var subtextStyleModel = titleModel.getModel('subtextStyle');
    var textAlign = titleModel.get('textAlign');
    var textVerticalAlign = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_3__.retrieve2(titleModel.get('textBaseline'), titleModel.get('textVerticalAlign'));
    var textEl = new _util_graphic_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
      style: (0,_label_labelStyle_js__WEBPACK_IMPORTED_MODULE_5__.createTextStyle)(textStyleModel, {
        text: titleModel.get('text'),
        fill: textStyleModel.getTextColor()
      }, {
        disableBox: true
      }),
      z2: 10
    });
    var textRect = textEl.getBoundingRect();
    var subText = titleModel.get('subtext');
    var subTextEl = new _util_graphic_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
      style: (0,_label_labelStyle_js__WEBPACK_IMPORTED_MODULE_5__.createTextStyle)(subtextStyleModel, {
        text: subText,
        fill: subtextStyleModel.getTextColor(),
        y: textRect.height + titleModel.get('itemGap'),
        verticalAlign: 'top'
      }, {
        disableBox: true
      }),
      z2: 10
    });
    var link = titleModel.get('link');
    var sublink = titleModel.get('sublink');
    var triggerEvent = titleModel.get('triggerEvent', true);
    textEl.silent = !link && !triggerEvent;
    subTextEl.silent = !sublink && !triggerEvent;
    if (link) {
      textEl.on('click', function () {
        (0,_util_format_js__WEBPACK_IMPORTED_MODULE_6__.windowOpen)(link, '_' + titleModel.get('target'));
      });
    }
    if (sublink) {
      subTextEl.on('click', function () {
        (0,_util_format_js__WEBPACK_IMPORTED_MODULE_6__.windowOpen)(sublink, '_' + titleModel.get('subtarget'));
      });
    }
    (0,_util_innerStore_js__WEBPACK_IMPORTED_MODULE_7__.getECData)(textEl).eventData = (0,_util_innerStore_js__WEBPACK_IMPORTED_MODULE_7__.getECData)(subTextEl).eventData = triggerEvent ? {
      componentType: 'title',
      componentIndex: titleModel.componentIndex
    } : null;
    group.add(textEl);
    subText && group.add(subTextEl);
    // If no subText, but add subTextEl, there will be an empty line.
    var groupRect = group.getBoundingRect();
    var layoutOption = titleModel.getBoxLayoutParams();
    layoutOption.width = groupRect.width;
    layoutOption.height = groupRect.height;
    var layoutRect = (0,_util_layout_js__WEBPACK_IMPORTED_MODULE_8__.getLayoutRect)(layoutOption, {
      width: api.getWidth(),
      height: api.getHeight()
    }, titleModel.get('padding'));
    // Adjust text align based on position
    if (!textAlign) {
      // Align left if title is on the left. center and right is same
      textAlign = titleModel.get('left') || titleModel.get('right');
      // @ts-ignore
      if (textAlign === 'middle') {
        textAlign = 'center';
      }
      // Adjust layout by text align
      if (textAlign === 'right') {
        layoutRect.x += layoutRect.width;
      } else if (textAlign === 'center') {
        layoutRect.x += layoutRect.width / 2;
      }
    }
    if (!textVerticalAlign) {
      textVerticalAlign = titleModel.get('top') || titleModel.get('bottom');
      // @ts-ignore
      if (textVerticalAlign === 'center') {
        textVerticalAlign = 'middle';
      }
      if (textVerticalAlign === 'bottom') {
        layoutRect.y += layoutRect.height;
      } else if (textVerticalAlign === 'middle') {
        layoutRect.y += layoutRect.height / 2;
      }
      textVerticalAlign = textVerticalAlign || 'top';
    }
    group.x = layoutRect.x;
    group.y = layoutRect.y;
    group.markRedraw();
    var alignStyle = {
      align: textAlign,
      verticalAlign: textVerticalAlign
    };
    textEl.setStyle(alignStyle);
    subTextEl.setStyle(alignStyle);
    // Render background
    // Get groupRect again because textAlign has been changed
    groupRect = group.getBoundingRect();
    var padding = layoutRect.margin;
    var style = titleModel.getItemStyle(['color', 'opacity']);
    style.fill = titleModel.get('backgroundColor');
    var rect = new _util_graphic_js__WEBPACK_IMPORTED_MODULE_9__["default"]({
      shape: {
        x: groupRect.x - padding[3],
        y: groupRect.y - padding[0],
        width: groupRect.width + padding[1] + padding[3],
        height: groupRect.height + padding[0] + padding[2],
        r: titleModel.get('borderRadius')
      },
      style: style,
      subPixelOptimize: true,
      silent: true
    });
    group.add(rect);
  };
  TitleView.type = 'title';
  return TitleView;
}(_view_Component_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
function install(registers) {
  registers.registerComponentModel(TitleModel);
  registers.registerComponentView(TitleView);
}

}),

}]);