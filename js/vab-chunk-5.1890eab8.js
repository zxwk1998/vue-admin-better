"use strict";
(self["webpackChunkvue_admin_better"] = self["webpackChunkvue_admin_better"] || []).push([["4414"], {
28773: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56190);
/* ESM import */var _featureManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14851);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/



var ICON_TYPES = ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'];
var BrushFeature = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(BrushFeature, _super);
  function BrushFeature() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  BrushFeature.prototype.render = function (featureModel, ecModel, api) {
    var brushType;
    var brushMode;
    var isBrushed;
    ecModel.eachComponent({
      mainType: 'brush'
    }, function (brushModel) {
      brushType = brushModel.brushType;
      brushMode = brushModel.brushOption.brushMode || 'single';
      isBrushed = isBrushed || !!brushModel.areas.length;
    });
    this._brushType = brushType;
    this._brushMode = brushMode;
    zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.each(featureModel.get('type', true), function (type) {
      featureModel.setIconStatus(type, (type === 'keep' ? brushMode === 'multiple' : type === 'clear' ? isBrushed : type === brushType) ? 'emphasis' : 'normal');
    });
  };
  BrushFeature.prototype.updateView = function (featureModel, ecModel, api) {
    this.render(featureModel, ecModel, api);
  };
  BrushFeature.prototype.getIcons = function () {
    var model = this.model;
    var availableIcons = model.get('icon', true);
    var icons = {};
    zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.each(model.get('type', true), function (type) {
      if (availableIcons[type]) {
        icons[type] = availableIcons[type];
      }
    });
    return icons;
  };
  ;
  BrushFeature.prototype.onclick = function (ecModel, api, type) {
    var brushType = this._brushType;
    var brushMode = this._brushMode;
    if (type === 'clear') {
      // Trigger parallel action firstly
      api.dispatchAction({
        type: 'axisAreaSelect',
        intervals: []
      });
      api.dispatchAction({
        type: 'brush',
        command: 'clear',
        // Clear all areas of all brush components.
        areas: []
      });
    } else {
      api.dispatchAction({
        type: 'takeGlobalCursor',
        key: 'brush',
        brushOption: {
          brushType: type === 'keep' ? brushType : brushType === type ? false : type,
          brushMode: type === 'keep' ? brushMode === 'multiple' ? 'single' : 'multiple' : brushMode
        }
      });
    }
  };
  ;
  BrushFeature.getDefaultOption = function (ecModel) {
    var defaultOption = {
      show: true,
      type: ICON_TYPES.slice(),
      icon: {
        /* eslint-disable */
        rect: 'M7.3,34.7 M0.4,10V-0.2h9.8 M89.6,10V-0.2h-9.8 M0.4,60v10.2h9.8 M89.6,60v10.2h-9.8 M12.3,22.4V10.5h13.1 M33.6,10.5h7.8 M49.1,10.5h7.8 M77.5,22.4V10.5h-13 M12.3,31.1v8.2 M77.7,31.1v8.2 M12.3,47.6v11.9h13.1 M33.6,59.5h7.6 M49.1,59.5 h7.7 M77.5,47.6v11.9h-13',
        polygon: 'M55.2,34.9c1.7,0,3.1,1.4,3.1,3.1s-1.4,3.1-3.1,3.1 s-3.1-1.4-3.1-3.1S53.5,34.9,55.2,34.9z M50.4,51c1.7,0,3.1,1.4,3.1,3.1c0,1.7-1.4,3.1-3.1,3.1c-1.7,0-3.1-1.4-3.1-3.1 C47.3,52.4,48.7,51,50.4,51z M55.6,37.1l1.5-7.8 M60.1,13.5l1.6-8.7l-7.8,4 M59,19l-1,5.3 M24,16.1l6.4,4.9l6.4-3.3 M48.5,11.6 l-5.9,3.1 M19.1,12.8L9.7,5.1l1.1,7.7 M13.4,29.8l1,7.3l6.6,1.6 M11.6,18.4l1,6.1 M32.8,41.9 M26.6,40.4 M27.3,40.2l6.1,1.6 M49.9,52.1l-5.6-7.6l-4.9-1.2',
        lineX: 'M15.2,30 M19.7,15.6V1.9H29 M34.8,1.9H40.4 M55.3,15.6V1.9H45.9 M19.7,44.4V58.1H29 M34.8,58.1H40.4 M55.3,44.4 V58.1H45.9 M12.5,20.3l-9.4,9.6l9.6,9.8 M3.1,29.9h16.5 M62.5,20.3l9.4,9.6L62.3,39.7 M71.9,29.9H55.4',
        lineY: 'M38.8,7.7 M52.7,12h13.2v9 M65.9,26.6V32 M52.7,46.3h13.2v-9 M24.9,12H11.8v9 M11.8,26.6V32 M24.9,46.3H11.8v-9 M48.2,5.1l-9.3-9l-9.4,9.2 M38.9-3.9V12 M48.2,53.3l-9.3,9l-9.4-9.2 M38.9,62.3V46.4',
        keep: 'M4,10.5V1h10.3 M20.7,1h6.1 M33,1h6.1 M55.4,10.5V1H45.2 M4,17.3v6.6 M55.6,17.3v6.6 M4,30.5V40h10.3 M20.7,40 h6.1 M33,40h6.1 M55.4,30.5V40H45.2 M21,18.9h62.9v48.6H21V18.9z',
        clear: 'M22,14.7l30.9,31 M52.9,14.7L22,45.7 M4.7,16.8V4.2h13.1 M26,4.2h7.8 M41.6,4.2h7.8 M70.3,16.8V4.2H57.2 M4.7,25.9v8.6 M70.3,25.9v8.6 M4.7,43.2v12.6h13.1 M26,55.8h7.8 M41.6,55.8h7.8 M70.3,43.2v12.6H57.2' // jshint ignore:line
        /* eslint-enable */
      },
      // `rect`, `polygon`, `lineX`, `lineY`, `keep`, `clear`
      title: ecModel.getLocaleModel().get(['toolbox', 'brush', 'title'])
    };
    return defaultOption;
  };
  return BrushFeature;
}(_featureManager_js__WEBPACK_IMPORTED_MODULE_0__.ToolboxFeature);
/* ESM default export */ __webpack_exports__["default"] = (BrushFeature);

}),
14851: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ToolboxFeature: function() { return ToolboxFeature; },
  getFeature: function() { return getFeature; },
  registerFeature: function() { return registerFeature; }
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

var ToolboxFeature = /** @class */function () {
  function ToolboxFeature() {}
  return ToolboxFeature;
}();

var features = {};
function registerFeature(name, ctor) {
  features[name] = ctor;
}
function getFeature(name) {
  return features[name];
}

}),
52384: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  install: function() { return /* binding */ install; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/extension.js
var extension = __webpack_require__(50215);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/installDataZoomSelect.js + 2 modules
var installDataZoomSelect = __webpack_require__(74344);
// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(12012);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(56190);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/toolbox/featureManager.js
var featureManager = __webpack_require__(14851);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Component.js
var Component = __webpack_require__(81757);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/tokens.js
var tokens = __webpack_require__(23430);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/toolbox/ToolboxModel.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/





var ToolboxModel_ToolboxModel = /** @class */function (_super) {
  (0,tslib_es6.__extends)(ToolboxModel, _super);
  function ToolboxModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = ToolboxModel.type;
    return _this;
  }
  ToolboxModel.prototype.optionUpdated = function () {
    _super.prototype.optionUpdated.apply(this, arguments);
    var ecModel = this.ecModel;
    util.each(this.option.feature, function (featureOpt, featureName) {
      var Feature = featureManager.getFeature(featureName);
      if (Feature) {
        if (Feature.getDefaultOption) {
          Feature.defaultOption = Feature.getDefaultOption(ecModel);
        }
        util.merge(featureOpt, Feature.defaultOption);
      }
    });
  };
  ToolboxModel.type = 'toolbox';
  ToolboxModel.layoutMode = {
    type: 'box',
    ignoreSize: true
  };
  ToolboxModel.defaultOption = {
    show: true,
    z: 6,
    // zlevel: 0,
    orient: 'horizontal',
    left: 'right',
    top: 'top',
    // right
    // bottom
    backgroundColor: 'transparent',
    borderColor: tokens["default"].color.border,
    borderRadius: 0,
    borderWidth: 0,
    padding: tokens["default"].size.m,
    itemSize: 15,
    itemGap: tokens["default"].size.s,
    showTitle: true,
    iconStyle: {
      borderColor: tokens["default"].color.accent50,
      color: 'none'
    },
    emphasis: {
      iconStyle: {
        borderColor: tokens["default"].color.accent50
      }
    },
    // textStyle: {},
    // feature
    tooltip: {
      show: false,
      position: 'bottom'
    }
  };
  return ToolboxModel;
}(Component["default"]);
/* ESM default export */ var toolbox_ToolboxModel = (ToolboxModel_ToolboxModel);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/contain/text.js
var contain_text = __webpack_require__(50122);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js
var graphic = __webpack_require__(42562);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/states.js
var states = __webpack_require__(5645);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Model.js + 2 modules
var Model = __webpack_require__(40064);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/DataDiffer.js
var DataDiffer = __webpack_require__(75704);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/listComponent.js
var listComponent = __webpack_require__(93712);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Component.js
var view_Component = __webpack_require__(64989);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/component.js
var component = __webpack_require__(86452);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Text.js
var Text = __webpack_require__(98856);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelStyle.js
var labelStyle = __webpack_require__(57235);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/layout.js
var layout = __webpack_require__(22265);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/toolbox/ToolboxView.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/















var ToolboxView_ToolboxView = /** @class */function (_super) {
  (0,tslib_es6.__extends)(ToolboxView, _super);
  function ToolboxView() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  ToolboxView.prototype.render = function (toolboxModel, ecModel, api, payload) {
    var group = this.group;
    group.removeAll();
    if (!toolboxModel.get('show')) {
      return;
    }
    var itemSize = +toolboxModel.get('itemSize');
    var isVertical = toolboxModel.get('orient') === 'vertical';
    var featureOpts = toolboxModel.get('feature') || {};
    var features = this._features || (this._features = {});
    var featureNames = [];
    util.each(featureOpts, function (opt, name) {
      featureNames.push(name);
    });
    new DataDiffer["default"](this._featureNames || [], featureNames).add(processFeature).update(processFeature).remove(util.curry(processFeature, null)).execute();
    // Keep for diff.
    this._featureNames = featureNames;
    function processFeature(newIndex, oldIndex) {
      var featureName = featureNames[newIndex];
      var oldName = featureNames[oldIndex];
      var featureOpt = featureOpts[featureName];
      var featureModel = new Model["default"](featureOpt, toolboxModel, toolboxModel.ecModel);
      var feature;
      // FIX#11236, merge feature title from MagicType newOption. TODO: consider seriesIndex ?
      if (payload && payload.newTitle != null && payload.featureName === featureName) {
        featureOpt.title = payload.newTitle;
      }
      if (featureName && !oldName) {
        // Create
        if (isUserFeatureName(featureName)) {
          feature = {
            onclick: featureModel.option.onclick,
            featureName: featureName
          };
        } else {
          var Feature = (0,featureManager.getFeature)(featureName);
          if (!Feature) {
            return;
          }
          feature = new Feature();
        }
        features[featureName] = feature;
      } else {
        feature = features[oldName];
        // If feature does not exist.
        if (!feature) {
          return;
        }
      }
      feature.uid = (0,component.getUID)('toolbox-feature');
      feature.model = featureModel;
      feature.ecModel = ecModel;
      feature.api = api;
      var isToolboxFeature = feature instanceof featureManager.ToolboxFeature;
      if (!featureName && oldName) {
        isToolboxFeature && feature.dispose && feature.dispose(ecModel, api);
        return;
      }
      if (!featureModel.get('show') || isToolboxFeature && feature.unusable) {
        isToolboxFeature && feature.remove && feature.remove(ecModel, api);
        return;
      }
      createIconPaths(featureModel, feature, featureName);
      featureModel.setIconStatus = function (iconName, status) {
        var option = this.option;
        var iconPaths = this.iconPaths;
        option.iconStatus = option.iconStatus || {};
        option.iconStatus[iconName] = status;
        if (iconPaths[iconName]) {
          (status === 'emphasis' ? states.enterEmphasis : states.leaveEmphasis)(iconPaths[iconName]);
        }
      };
      if (feature instanceof featureManager.ToolboxFeature) {
        if (feature.render) {
          feature.render(featureModel, ecModel, api, payload);
        }
      }
    }
    function createIconPaths(featureModel, feature, featureName) {
      var iconStyleModel = featureModel.getModel('iconStyle');
      var iconStyleEmphasisModel = featureModel.getModel(['emphasis', 'iconStyle']);
      // If one feature has multiple icons, they are organized as
      // {
      //     icon: {
      //         foo: '',
      //         bar: ''
      //     },
      //     title: {
      //         foo: '',
      //         bar: ''
      //     }
      // }
      var icons = feature instanceof featureManager.ToolboxFeature && feature.getIcons ? feature.getIcons() : featureModel.get('icon');
      var titles = featureModel.get('title') || {};
      var iconsMap;
      var titlesMap;
      if (util.isString(icons)) {
        iconsMap = {};
        iconsMap[featureName] = icons;
      } else {
        iconsMap = icons;
      }
      if (util.isString(titles)) {
        titlesMap = {};
        titlesMap[featureName] = titles;
      } else {
        titlesMap = titles;
      }
      var iconPaths = featureModel.iconPaths = {};
      util.each(iconsMap, function (iconStr, iconName) {
        var path = graphic.createIcon(iconStr, {}, {
          x: -itemSize / 2,
          y: -itemSize / 2,
          width: itemSize,
          height: itemSize
        }); // TODO handling image
        path.setStyle(iconStyleModel.getItemStyle());
        var pathEmphasisState = path.ensureState('emphasis');
        pathEmphasisState.style = iconStyleEmphasisModel.getItemStyle();
        // Text position calculation
        // TODO: extract `textStyle` from `iconStyle` and use `createTextStyle`
        var textContent = new Text["default"]({
          style: {
            text: titlesMap[iconName],
            align: iconStyleEmphasisModel.get('textAlign'),
            borderRadius: iconStyleEmphasisModel.get('textBorderRadius'),
            padding: iconStyleEmphasisModel.get('textPadding'),
            fill: null,
            font: (0,labelStyle.getFont)({
              fontStyle: iconStyleEmphasisModel.get('textFontStyle'),
              fontFamily: iconStyleEmphasisModel.get('textFontFamily'),
              fontSize: iconStyleEmphasisModel.get('textFontSize'),
              fontWeight: iconStyleEmphasisModel.get('textFontWeight')
            }, ecModel)
          },
          ignore: true
        });
        path.setTextContent(textContent);
        graphic.setTooltipConfig({
          el: path,
          componentModel: toolboxModel,
          itemName: iconName,
          formatterParamsExtra: {
            title: titlesMap[iconName]
          }
        });
        path.__title = titlesMap[iconName];
        path.on('mouseover', function () {
          // Should not reuse above hoverStyle, which might be modified.
          var hoverStyle = iconStyleEmphasisModel.getItemStyle();
          var defaultTextPosition = isVertical ? toolboxModel.get('right') == null && toolboxModel.get('left') !== 'right' ? 'right' : 'left' : toolboxModel.get('bottom') == null && toolboxModel.get('top') !== 'bottom' ? 'bottom' : 'top';
          textContent.setStyle({
            fill: iconStyleEmphasisModel.get('textFill') || hoverStyle.fill || hoverStyle.stroke || tokens["default"].color.neutral99,
            backgroundColor: iconStyleEmphasisModel.get('textBackgroundColor')
          });
          path.setTextConfig({
            position: iconStyleEmphasisModel.get('textPosition') || defaultTextPosition
          });
          textContent.ignore = !toolboxModel.get('showTitle');
          // Use enterEmphasis and leaveEmphasis provide by ec.
          // There are flags managed by the echarts.
          api.enterEmphasis(this);
        }).on('mouseout', function () {
          if (featureModel.get(['iconStatus', iconName]) !== 'emphasis') {
            api.leaveEmphasis(this);
          }
          textContent.hide();
        });
        (featureModel.get(['iconStatus', iconName]) === 'emphasis' ? states.enterEmphasis : states.leaveEmphasis)(path);
        group.add(path);
        path.on('click', util.bind(feature.onclick, feature, ecModel, api, iconName));
        iconPaths[iconName] = path;
      });
    }
    var refContainer = (0,layout.createBoxLayoutReference)(toolboxModel, api).refContainer;
    var boxLayoutParams = toolboxModel.getBoxLayoutParams();
    var padding = toolboxModel.get('padding');
    var viewRect = (0,layout.getLayoutRect)(boxLayoutParams, refContainer, padding);
    (0,layout.box)(toolboxModel.get('orient'), group, toolboxModel.get('itemGap'), viewRect.width, viewRect.height);
    (0,layout.positionElement)(group, boxLayoutParams, refContainer, padding);
    // Render background after group is layout
    // FIXME
    group.add(listComponent.makeBackground(group.getBoundingRect(), toolboxModel));
    // Adjust icon title positions to avoid them out of screen
    isVertical || group.eachChild(function (icon) {
      var titleText = icon.__title;
      // const hoverStyle = icon.hoverStyle;
      // TODO simplify code?
      var emphasisState = icon.ensureState('emphasis');
      var emphasisTextConfig = emphasisState.textConfig || (emphasisState.textConfig = {});
      var textContent = icon.getTextContent();
      var emphasisTextState = textContent && textContent.ensureState('emphasis');
      // May be background element
      if (emphasisTextState && !util.isFunction(emphasisTextState) && titleText) {
        var emphasisTextStyle = emphasisTextState.style || (emphasisTextState.style = {});
        var rect = contain_text.getBoundingRect(titleText, Text["default"].makeFont(emphasisTextStyle));
        var offsetX = icon.x + group.x;
        var offsetY = icon.y + group.y + itemSize;
        var needPutOnTop = false;
        if (offsetY + rect.height > api.getHeight()) {
          emphasisTextConfig.position = 'top';
          needPutOnTop = true;
        }
        var topOffset = needPutOnTop ? -5 - rect.height : itemSize + 10;
        if (offsetX + rect.width / 2 > api.getWidth()) {
          emphasisTextConfig.position = ['100%', topOffset];
          emphasisTextStyle.align = 'right';
        } else if (offsetX - rect.width / 2 < 0) {
          emphasisTextConfig.position = [0, topOffset];
          emphasisTextStyle.align = 'left';
        }
      }
    });
  };
  ToolboxView.prototype.updateView = function (toolboxModel, ecModel, api, payload) {
    util.each(this._features, function (feature) {
      feature instanceof featureManager.ToolboxFeature && feature.updateView && feature.updateView(feature.model, ecModel, api, payload);
    });
  };
  // updateLayout(toolboxModel, ecModel, api, payload) {
  //     zrUtil.each(this._features, function (feature) {
  //         feature.updateLayout && feature.updateLayout(feature.model, ecModel, api, payload);
  //     });
  // },
  ToolboxView.prototype.remove = function (ecModel, api) {
    util.each(this._features, function (feature) {
      feature instanceof featureManager.ToolboxFeature && feature.remove && feature.remove(ecModel, api);
    });
    this.group.removeAll();
  };
  ToolboxView.prototype.dispose = function (ecModel, api) {
    util.each(this._features, function (feature) {
      feature instanceof featureManager.ToolboxFeature && feature.dispose && feature.dispose(ecModel, api);
    });
  };
  ToolboxView.type = 'toolbox';
  return ToolboxView;
}(view_Component["default"]);
function isUserFeatureName(featureName) {
  return featureName.indexOf('my') === 0;
}
/* ESM default export */ var toolbox_ToolboxView = (ToolboxView_ToolboxView);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/env.js
var env = __webpack_require__(33013);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/toolbox/feature/SaveAsImage.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

/* global window, Uint8Array, document */



var SaveAsImage_SaveAsImage = /** @class */function (_super) {
  (0,tslib_es6.__extends)(SaveAsImage, _super);
  function SaveAsImage() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  SaveAsImage.prototype.onclick = function (ecModel, api) {
    var model = this.model;
    var title = model.get('name') || ecModel.get('title.0.text') || 'echarts';
    var isSvg = api.getZr().painter.getType() === 'svg';
    var type = isSvg ? 'svg' : model.get('type', true) || 'png';
    var url = api.getConnectedDataURL({
      type: type,
      backgroundColor: model.get('backgroundColor', true) || ecModel.get('backgroundColor') || tokens["default"].color.neutral00,
      connectedBackgroundColor: model.get('connectedBackgroundColor'),
      excludeComponents: model.get('excludeComponents'),
      pixelRatio: model.get('pixelRatio')
    });
    var browser = env["default"].browser;
    // Chrome, Firefox, New Edge
    if (typeof MouseEvent === 'function' && (browser.newEdge || !browser.ie && !browser.edge)) {
      var $a = document.createElement('a');
      $a.download = title + '.' + type;
      $a.target = '_blank';
      $a.href = url;
      var evt = new MouseEvent('click', {
        // some micro front-end framework， window maybe is a Proxy
        view: document.defaultView,
        bubbles: true,
        cancelable: false
      });
      $a.dispatchEvent(evt);
    }
    // IE or old Edge
    else {
      // @ts-ignore
      if (window.navigator.msSaveOrOpenBlob || isSvg) {
        var parts = url.split(',');
        // data:[<mime type>][;charset=<charset>][;base64],<encoded data>
        var base64Encoded = parts[0].indexOf('base64') > -1;
        var bstr = isSvg
        // should decode the svg data uri first
        ? decodeURIComponent(parts[1]) : parts[1];
        // only `atob` when the data uri is encoded with base64
        // otherwise, like `svg` data uri exported by zrender,
        // there will be an error, for it's not encoded with base64.
        // (just a url-encoded string through `encodeURIComponent`)
        base64Encoded && (bstr = window.atob(bstr));
        var filename = title + '.' + type;
        // @ts-ignore
        if (window.navigator.msSaveOrOpenBlob) {
          var n = bstr.length;
          var u8arr = new Uint8Array(n);
          while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
          }
          var blob = new Blob([u8arr]); // @ts-ignore
          window.navigator.msSaveOrOpenBlob(blob, filename);
        } else {
          var frame = document.createElement('iframe');
          document.body.appendChild(frame);
          var cw = frame.contentWindow;
          var doc = cw.document;
          doc.open('image/svg+xml', 'replace');
          doc.write(bstr);
          doc.close();
          cw.focus();
          doc.execCommand('SaveAs', true, filename);
          document.body.removeChild(frame);
        }
      } else {
        var lang = model.get('lang');
        var html = '' + '<body style="margin:0;">' + '<img src="' + url + '" style="max-width:100%;" title="' + (lang && lang[0] || '') + '" />' + '</body>';
        var tab = window.open();
        tab.document.write(html);
        tab.document.title = title;
      }
    }
  };
  SaveAsImage.getDefaultOption = function (ecModel) {
    var defaultOption = {
      show: true,
      icon: 'M4.7,22.9L29.3,45.5L54.7,23.4M4.6,43.6L4.6,58L53.8,58L53.8,43.6M29.2,45.1L29.2,0',
      title: ecModel.getLocaleModel().get(['toolbox', 'saveAsImage', 'title']),
      type: 'png',
      // Default use option.backgroundColor
      // backgroundColor: '#fff',
      connectedBackgroundColor: tokens["default"].color.neutral00,
      name: '',
      excludeComponents: ['toolbox'],
      // use current pixel ratio of device by default
      // pixelRatio: 1,
      lang: ecModel.getLocaleModel().get(['toolbox', 'saveAsImage', 'lang'])
    };
    return defaultOption;
  };
  return SaveAsImage;
}(featureManager.ToolboxFeature);
/* ESM default export */ var feature_SaveAsImage = (SaveAsImage_SaveAsImage);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/core/echarts.js + 3 modules
var echarts = __webpack_require__(83524);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js
var util_model = __webpack_require__(44244);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/toolbox/feature/MagicType.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/





var INNER_STACK_KEYWORD = '__ec_magicType_stack__';
var ICON_TYPES = (/* unused pure expression or super */ null && (['line', 'bar', 'stack']));
// stack and tiled appears in pair for the title
var TITLE_TYPES = (/* unused pure expression or super */ null && (['line', 'bar', 'stack', 'tiled']));
var radioTypes = [['line', 'bar'], ['stack']];
var MagicType_MagicType = /** @class */function (_super) {
  (0,tslib_es6.__extends)(MagicType, _super);
  function MagicType() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  MagicType.prototype.getIcons = function () {
    var model = this.model;
    var availableIcons = model.get('icon');
    var icons = {};
    util.each(model.get('type'), function (type) {
      if (availableIcons[type]) {
        icons[type] = availableIcons[type];
      }
    });
    return icons;
  };
  MagicType.getDefaultOption = function (ecModel) {
    var defaultOption = {
      show: true,
      type: [],
      // Icon group
      icon: {
        line: 'M4.1,28.9h7.1l9.3-22l7.4,38l9.7-19.7l3,12.8h14.9M4.1,58h51.4',
        bar: 'M6.7,22.9h10V48h-10V22.9zM24.9,13h10v35h-10V13zM43.2,2h10v46h-10V2zM3.1,58h53.7',
        // eslint-disable-next-line
        stack: 'M8.2,38.4l-8.4,4.1l30.6,15.3L60,42.5l-8.1-4.1l-21.5,11L8.2,38.4z M51.9,30l-8.1,4.2l-13.4,6.9l-13.9-6.9L8.2,30l-8.4,4.2l8.4,4.2l22.2,11l21.5-11l8.1-4.2L51.9,30z M51.9,21.7l-8.1,4.2L35.7,30l-5.3,2.8L24.9,30l-8.4-4.1l-8.3-4.2l-8.4,4.2L8.2,30l8.3,4.2l13.9,6.9l13.4-6.9l8.1-4.2l8.1-4.1L51.9,21.7zM30.4,2.2L-0.2,17.5l8.4,4.1l8.3,4.2l8.4,4.2l5.5,2.7l5.3-2.7l8.1-4.2l8.1-4.2l8.1-4.1L30.4,2.2z' // jshint ignore:line
      },
      // `line`, `bar`, `stack`, `tiled`
      title: ecModel.getLocaleModel().get(['toolbox', 'magicType', 'title']),
      option: {},
      seriesIndex: {}
    };
    return defaultOption;
  };
  MagicType.prototype.onclick = function (ecModel, api, type) {
    var model = this.model;
    var seriesIndex = model.get(['seriesIndex', type]);
    // Not supported magicType
    if (!seriesOptGenreator[type]) {
      return;
    }
    var newOption = {
      series: []
    };
    var generateNewSeriesTypes = function (seriesModel) {
      var seriesType = seriesModel.subType;
      var seriesId = seriesModel.id;
      var newSeriesOpt = seriesOptGenreator[type](seriesType, seriesId, seriesModel, model);
      if (newSeriesOpt) {
        // PENDING If merge original option?
        util.defaults(newSeriesOpt, seriesModel.option);
        newOption.series.push(newSeriesOpt);
      }
      // Modify boundaryGap
      var coordSys = seriesModel.coordinateSystem;
      if (coordSys && coordSys.type === 'cartesian2d' && (type === 'line' || type === 'bar')) {
        var categoryAxis = coordSys.getAxesByScale('ordinal')[0];
        if (categoryAxis) {
          var axisDim = categoryAxis.dim;
          var axisType = axisDim + 'Axis';
          var axisModel = seriesModel.getReferringComponents(axisType, util_model.SINGLE_REFERRING).models[0];
          var axisIndex = axisModel.componentIndex;
          newOption[axisType] = newOption[axisType] || [];
          for (var i = 0; i <= axisIndex; i++) {
            newOption[axisType][axisIndex] = newOption[axisType][axisIndex] || {};
          }
          newOption[axisType][axisIndex].boundaryGap = type === 'bar';
        }
      }
    };
    util.each(radioTypes, function (radio) {
      if (util.indexOf(radio, type) >= 0) {
        util.each(radio, function (item) {
          model.setIconStatus(item, 'normal');
        });
      }
    });
    model.setIconStatus(type, 'emphasis');
    ecModel.eachComponent({
      mainType: 'series',
      query: seriesIndex == null ? null : {
        seriesIndex: seriesIndex
      }
    }, generateNewSeriesTypes);
    var newTitle;
    var currentType = type;
    // Change title of stack
    if (type === 'stack') {
      // use titles in model instead of ecModel
      // as stack and tiled appears in pair, just flip them
      // no need of checking stack state
      newTitle = util.merge({
        stack: model.option.title.tiled,
        tiled: model.option.title.stack
      }, model.option.title);
      if (model.get(['iconStatus', type]) !== 'emphasis') {
        currentType = 'tiled';
      }
    }
    api.dispatchAction({
      type: 'changeMagicType',
      currentType: currentType,
      newOption: newOption,
      newTitle: newTitle,
      featureName: 'magicType'
    });
  };
  return MagicType;
}(featureManager.ToolboxFeature);
var seriesOptGenreator = {
  'line': function (seriesType, seriesId, seriesModel, model) {
    if (seriesType === 'bar') {
      return util.merge({
        id: seriesId,
        type: 'line',
        // Preserve data related option
        data: seriesModel.get('data'),
        stack: seriesModel.get('stack'),
        markPoint: seriesModel.get('markPoint'),
        markLine: seriesModel.get('markLine')
      }, model.get(['option', 'line']) || {}, true);
    }
  },
  'bar': function (seriesType, seriesId, seriesModel, model) {
    if (seriesType === 'line') {
      return util.merge({
        id: seriesId,
        type: 'bar',
        // Preserve data related option
        data: seriesModel.get('data'),
        stack: seriesModel.get('stack'),
        markPoint: seriesModel.get('markPoint'),
        markLine: seriesModel.get('markLine')
      }, model.get(['option', 'bar']) || {}, true);
    }
  },
  'stack': function (seriesType, seriesId, seriesModel, model) {
    var isStack = seriesModel.get('stack') === INNER_STACK_KEYWORD;
    if (seriesType === 'line' || seriesType === 'bar') {
      model.setIconStatus('stack', isStack ? 'normal' : 'emphasis');
      return util.merge({
        id: seriesId,
        stack: isStack ? '' : INNER_STACK_KEYWORD
      }, model.get(['option', 'stack']) || {}, true);
    }
  }
};
// TODO: SELF REGISTERED.
echarts.registerAction({
  type: 'changeMagicType',
  event: 'magicTypeChanged',
  update: 'prepareAndUpdate'
}, function (payload, ecModel) {
  ecModel.mergeOption(payload.newOption);
});
/* ESM default export */ var feature_MagicType = (MagicType_MagicType);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/event.js
var core_event = __webpack_require__(85908);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/toolbox/feature/DataView.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

/* global document */






/* global document */
var BLOCK_SPLITER = new Array(60).join('-');
var ITEM_SPLITER = '\t';
/**
 * Group series into two types
 *  1. on category axis, like line, bar
 *  2. others, like scatter, pie
 */
function groupSeries(ecModel) {
  var seriesGroupByCategoryAxis = {};
  var otherSeries = [];
  var meta = [];
  ecModel.eachRawSeries(function (seriesModel) {
    var coordSys = seriesModel.coordinateSystem;
    if (coordSys && (coordSys.type === 'cartesian2d' || coordSys.type === 'polar')) {
      // TODO: TYPE Consider polar? Include polar may increase unecessary bundle size.
      var baseAxis = coordSys.getBaseAxis();
      if (baseAxis.type === 'category') {
        var key = baseAxis.dim + '_' + baseAxis.index;
        if (!seriesGroupByCategoryAxis[key]) {
          seriesGroupByCategoryAxis[key] = {
            categoryAxis: baseAxis,
            valueAxis: coordSys.getOtherAxis(baseAxis),
            series: []
          };
          meta.push({
            axisDim: baseAxis.dim,
            axisIndex: baseAxis.index
          });
        }
        seriesGroupByCategoryAxis[key].series.push(seriesModel);
      } else {
        otherSeries.push(seriesModel);
      }
    } else {
      otherSeries.push(seriesModel);
    }
  });
  return {
    seriesGroupByCategoryAxis: seriesGroupByCategoryAxis,
    other: otherSeries,
    meta: meta
  };
}
/**
 * Assemble content of series on cateogory axis
 * @inner
 */
function assembleSeriesWithCategoryAxis(groups) {
  var tables = [];
  util.each(groups, function (group, key) {
    var categoryAxis = group.categoryAxis;
    var valueAxis = group.valueAxis;
    var valueAxisDim = valueAxis.dim;
    var headers = [' '].concat(util.map(group.series, function (series) {
      return series.name;
    }));
    // @ts-ignore TODO Polar
    var columns = [categoryAxis.model.getCategories()];
    util.each(group.series, function (series) {
      var rawData = series.getRawData();
      columns.push(series.getRawData().mapArray(rawData.mapDimension(valueAxisDim), function (val) {
        return val;
      }));
    });
    // Assemble table content
    var lines = [headers.join(ITEM_SPLITER)];
    for (var i = 0; i < columns[0].length; i++) {
      var items = [];
      for (var j = 0; j < columns.length; j++) {
        items.push(columns[j][i]);
      }
      lines.push(items.join(ITEM_SPLITER));
    }
    tables.push(lines.join('\n'));
  });
  return tables.join('\n\n' + BLOCK_SPLITER + '\n\n');
}
/**
 * Assemble content of other series
 */
function assembleOtherSeries(series) {
  return util.map(series, function (series) {
    var data = series.getRawData();
    var lines = [series.name];
    var vals = [];
    data.each(data.dimensions, function () {
      var argLen = arguments.length;
      var dataIndex = arguments[argLen - 1];
      var name = data.getName(dataIndex);
      for (var i = 0; i < argLen - 1; i++) {
        vals[i] = arguments[i];
      }
      lines.push((name ? name + ITEM_SPLITER : '') + vals.join(ITEM_SPLITER));
    });
    return lines.join('\n');
  }).join('\n\n' + BLOCK_SPLITER + '\n\n');
}
function getContentFromModel(ecModel) {
  var result = groupSeries(ecModel);
  return {
    value: util.filter([assembleSeriesWithCategoryAxis(result.seriesGroupByCategoryAxis), assembleOtherSeries(result.other)], function (str) {
      return !!str.replace(/[\n\t\s]/g, '');
    }).join('\n\n' + BLOCK_SPLITER + '\n\n'),
    meta: result.meta
  };
}
function trim(str) {
  return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}
/**
 * If a block is tsv format
 */
function isTSVFormat(block) {
  // Simple method to find out if a block is tsv format
  var firstLine = block.slice(0, block.indexOf('\n'));
  if (firstLine.indexOf(ITEM_SPLITER) >= 0) {
    return true;
  }
}
var itemSplitRegex = new RegExp('[' + ITEM_SPLITER + ']+', 'g');
/**
 * @param {string} tsv
 * @return {Object}
 */
function parseTSVContents(tsv) {
  var tsvLines = tsv.split(/\n+/g);
  var headers = trim(tsvLines.shift()).split(itemSplitRegex);
  var categories = [];
  var series = util.map(headers, function (header) {
    return {
      name: header,
      data: []
    };
  });
  for (var i = 0; i < tsvLines.length; i++) {
    var items = trim(tsvLines[i]).split(itemSplitRegex);
    categories.push(items.shift());
    for (var j = 0; j < items.length; j++) {
      series[j] && (series[j].data[i] = items[j]);
    }
  }
  return {
    series: series,
    categories: categories
  };
}
function parseListContents(str) {
  var lines = str.split(/\n+/g);
  var seriesName = trim(lines.shift());
  var data = [];
  for (var i = 0; i < lines.length; i++) {
    // if line is empty, ignore it.
    // there is a case that a user forgot to delete `\n`.
    var line = trim(lines[i]);
    if (!line) {
      continue;
    }
    var items = line.split(itemSplitRegex);
    var name_1 = '';
    var value = void 0;
    var hasName = false;
    if (isNaN(items[0])) {
      // First item is name
      hasName = true;
      name_1 = items[0];
      items = items.slice(1);
      data[i] = {
        name: name_1,
        value: []
      };
      value = data[i].value;
    } else {
      value = data[i] = [];
    }
    for (var j = 0; j < items.length; j++) {
      value.push(+items[j]);
    }
    if (value.length === 1) {
      hasName ? data[i].value = value[0] : data[i] = value[0];
    }
  }
  return {
    name: seriesName,
    data: data
  };
}
function parseContents(str, blockMetaList) {
  var blocks = str.split(new RegExp('\n*' + BLOCK_SPLITER + '\n*', 'g'));
  var newOption = {
    series: []
  };
  util.each(blocks, function (block, idx) {
    if (isTSVFormat(block)) {
      var result = parseTSVContents(block);
      var blockMeta = blockMetaList[idx];
      var axisKey = blockMeta.axisDim + 'Axis';
      if (blockMeta) {
        newOption[axisKey] = newOption[axisKey] || [];
        newOption[axisKey][blockMeta.axisIndex] = {
          data: result.categories
        };
        newOption.series = newOption.series.concat(result.series);
      }
    } else {
      var result = parseListContents(block);
      newOption.series.push(result);
    }
  });
  return newOption;
}
var DataView_DataView = /** @class */function (_super) {
  (0,tslib_es6.__extends)(DataView, _super);
  function DataView() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  DataView.prototype.onclick = function (ecModel, api) {
    // FIXME: better way?
    setTimeout(function () {
      api.dispatchAction({
        type: 'hideTip'
      });
    });
    var container = api.getDom();
    var model = this.model;
    if (this._dom) {
      container.removeChild(this._dom);
    }
    var root = document.createElement('div');
    // use padding to avoid 5px whitespace
    root.style.cssText = 'position:absolute;top:0;bottom:0;left:0;right:0;padding:5px';
    root.style.backgroundColor = model.get('backgroundColor') || tokens["default"].color.neutral00;
    // Create elements
    var header = document.createElement('h4');
    var lang = model.get('lang') || [];
    header.innerHTML = lang[0] || model.get('title');
    header.style.cssText = 'margin:10px 20px';
    header.style.color = model.get('textColor');
    var viewMain = document.createElement('div');
    var textarea = document.createElement('textarea');
    viewMain.style.cssText = 'overflow:auto';
    var optionToContent = model.get('optionToContent');
    var contentToOption = model.get('contentToOption');
    var result = getContentFromModel(ecModel);
    if (util.isFunction(optionToContent)) {
      var htmlOrDom = optionToContent(api.getOption());
      if (util.isString(htmlOrDom)) {
        viewMain.innerHTML = htmlOrDom;
      } else if (util.isDom(htmlOrDom)) {
        viewMain.appendChild(htmlOrDom);
      }
    } else {
      // Use default textarea
      textarea.readOnly = model.get('readOnly');
      var style = textarea.style;
      // eslint-disable-next-line max-len
      style.cssText = 'display:block;width:100%;height:100%;font-family:monospace;font-size:14px;line-height:1.6rem;resize:none;box-sizing:border-box;outline:none';
      style.color = model.get('textColor');
      style.borderColor = model.get('textareaBorderColor');
      style.backgroundColor = model.get('textareaColor');
      textarea.value = result.value;
      viewMain.appendChild(textarea);
    }
    var blockMetaList = result.meta;
    var buttonContainer = document.createElement('div');
    buttonContainer.style.cssText = 'position:absolute;bottom:5px;left:0;right:0';
    // eslint-disable-next-line max-len
    var buttonStyle = 'float:right;margin-right:20px;border:none;cursor:pointer;padding:2px 5px;font-size:12px;border-radius:3px';
    var closeButton = document.createElement('div');
    var refreshButton = document.createElement('div');
    buttonStyle += ';background-color:' + model.get('buttonColor');
    buttonStyle += ';color:' + model.get('buttonTextColor');
    var self = this;
    function close() {
      container.removeChild(root);
      self._dom = null;
    }
    (0,core_event.addEventListener)(closeButton, 'click', close);
    (0,core_event.addEventListener)(refreshButton, 'click', function () {
      if (contentToOption == null && optionToContent != null || contentToOption != null && optionToContent == null) {
        if (false) {}
        close();
        return;
      }
      var newOption;
      try {
        if (util.isFunction(contentToOption)) {
          newOption = contentToOption(viewMain, api.getOption());
        } else {
          newOption = parseContents(textarea.value, blockMetaList);
        }
      } catch (e) {
        close();
        throw new Error('Data view format error ' + e);
      }
      if (newOption) {
        api.dispatchAction({
          type: 'changeDataView',
          newOption: newOption
        });
      }
      close();
    });
    closeButton.innerHTML = lang[1];
    refreshButton.innerHTML = lang[2];
    refreshButton.style.cssText = closeButton.style.cssText = buttonStyle;
    !model.get('readOnly') && buttonContainer.appendChild(refreshButton);
    buttonContainer.appendChild(closeButton);
    root.appendChild(header);
    root.appendChild(viewMain);
    root.appendChild(buttonContainer);
    viewMain.style.height = container.clientHeight - 80 + 'px';
    container.appendChild(root);
    this._dom = root;
  };
  DataView.prototype.remove = function (ecModel, api) {
    this._dom && api.getDom().removeChild(this._dom);
  };
  DataView.prototype.dispose = function (ecModel, api) {
    this.remove(ecModel, api);
  };
  DataView.getDefaultOption = function (ecModel) {
    var defaultOption = {
      show: true,
      readOnly: false,
      optionToContent: null,
      contentToOption: null,
      // eslint-disable-next-line
      icon: 'M17.5,17.3H33 M17.5,17.3H33 M45.4,29.5h-28 M11.5,2v56H51V14.8L38.4,2H11.5z M38.4,2.2v12.7H51 M45.4,41.7h-28',
      title: ecModel.getLocaleModel().get(['toolbox', 'dataView', 'title']),
      lang: ecModel.getLocaleModel().get(['toolbox', 'dataView', 'lang']),
      backgroundColor: tokens["default"].color.background,
      textColor: tokens["default"].color.primary,
      textareaColor: tokens["default"].color.background,
      textareaBorderColor: tokens["default"].color.border,
      buttonColor: tokens["default"].color.accent50,
      buttonTextColor: tokens["default"].color.neutral00
    };
    return defaultOption;
  };
  return DataView;
}(featureManager.ToolboxFeature);
/**
 * @inner
 */
function tryMergeDataOption(newData, originalData) {
  return util.map(newData, function (newVal, idx) {
    var original = originalData && originalData[idx];
    if (util.isObject(original) && !util.isArray(original)) {
      var newValIsObject = util.isObject(newVal) && !util.isArray(newVal);
      if (!newValIsObject) {
        newVal = {
          value: newVal
        };
      }
      // original data has name but new data has no name
      var shouldDeleteName = original.name != null && newVal.name == null;
      // Original data has option
      newVal = util.defaults(newVal, original);
      shouldDeleteName && delete newVal.name;
      return newVal;
    } else {
      return newVal;
    }
  });
}
// TODO: SELF REGISTERED.
echarts.registerAction({
  type: 'changeDataView',
  event: 'dataViewChanged',
  update: 'prepareAndUpdate'
}, function (payload, ecModel) {
  var newSeriesOptList = [];
  util.each(payload.newOption.series, function (seriesOpt) {
    var seriesModel = ecModel.getSeriesByName(seriesOpt.name)[0];
    if (!seriesModel) {
      // New created series
      // Geuss the series type
      newSeriesOptList.push(util.extend({
        // Default is scatter
        type: 'scatter'
      }, seriesOpt));
    } else {
      var originalData = seriesModel.get('data');
      newSeriesOptList.push({
        name: seriesOpt.name,
        data: tryMergeDataOption(seriesOpt.data, originalData)
      });
    }
  });
  ecModel.mergeOption(util.defaults({
    series: newSeriesOptList
  }, payload.newOption));
});
/* ESM default export */ var feature_DataView = (DataView_DataView);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/dataZoom/history.js
var dataZoom_history = __webpack_require__(36497);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/toolbox/feature/Restore.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/




var Restore_RestoreOption = /** @class */function (_super) {
  (0,tslib_es6.__extends)(RestoreOption, _super);
  function RestoreOption() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  RestoreOption.prototype.onclick = function (ecModel, api) {
    dataZoom_history.clear(ecModel);
    api.dispatchAction({
      type: 'restore',
      from: this.uid
    });
  };
  RestoreOption.getDefaultOption = function (ecModel) {
    var defaultOption = {
      show: true,
      // eslint-disable-next-line
      icon: 'M3.8,33.4 M47,18.9h9.8V8.7 M56.3,20.1 C52.1,9,40.5,0.6,26.8,2.1C12.6,3.7,1.6,16.2,2.1,30.6 M13,41.1H3.1v10.2 M3.7,39.9c4.2,11.1,15.8,19.5,29.5,18 c14.2-1.6,25.2-14.1,24.7-28.5',
      title: ecModel.getLocaleModel().get(['toolbox', 'restore', 'title'])
    };
    return defaultOption;
  };
  return RestoreOption;
}(featureManager.ToolboxFeature);
// TODO: SELF REGISTERED.
echarts.registerAction({
  type: 'restore',
  event: 'restore',
  update: 'prepareAndUpdate'
}, function (payload, ecModel) {
  ecModel.resetOption('recreate');
});
/* ESM default export */ var Restore = (Restore_RestoreOption);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/BrushController.js
var BrushController = __webpack_require__(97684);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/BrushTargetManager.js
var BrushTargetManager = __webpack_require__(2190);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/sliderMove.js
var sliderMove = __webpack_require__(17549);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/internalComponentCreator.js
var internalComponentCreator = __webpack_require__(19542);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/toolbox/feature/DataZoom.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

// TODO depends on DataZoom and Brush









var each = util.each;
var DATA_ZOOM_ID_BASE = (0,util_model.makeInternalComponentId)('toolbox-dataZoom_');
var DataZoom_ICON_TYPES = (/* unused pure expression or super */ null && (['zoom', 'back']));
var DataZoom_DataZoomFeature = /** @class */function (_super) {
  (0,tslib_es6.__extends)(DataZoomFeature, _super);
  function DataZoomFeature() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  DataZoomFeature.prototype.render = function (featureModel, ecModel, api, payload) {
    if (!this._brushController) {
      this._brushController = new BrushController["default"](api.getZr());
      this._brushController.on('brush', util.bind(this._onBrush, this)).mount();
    }
    updateZoomBtnStatus(featureModel, ecModel, this, payload, api);
    updateBackBtnStatus(featureModel, ecModel);
  };
  DataZoomFeature.prototype.onclick = function (ecModel, api, type) {
    handlers[type].call(this);
  };
  DataZoomFeature.prototype.remove = function (ecModel, api) {
    this._brushController && this._brushController.unmount();
  };
  DataZoomFeature.prototype.dispose = function (ecModel, api) {
    this._brushController && this._brushController.dispose();
  };
  DataZoomFeature.prototype._onBrush = function (eventParam) {
    var areas = eventParam.areas;
    if (!eventParam.isEnd || !areas.length) {
      return;
    }
    var snapshot = {};
    var ecModel = this.ecModel;
    this._brushController.updateCovers([]); // remove cover
    var brushTargetManager = new BrushTargetManager["default"](makeAxisFinder(this.model), ecModel, {
      include: ['grid']
    });
    brushTargetManager.matchOutputRanges(areas, ecModel, function (area, coordRange, coordSys) {
      if (coordSys.type !== 'cartesian2d') {
        return;
      }
      var brushType = area.brushType;
      if (brushType === 'rect') {
        setBatch('x', coordSys, coordRange[0]);
        setBatch('y', coordSys, coordRange[1]);
      } else {
        setBatch({
          lineX: 'x',
          lineY: 'y'
        }[brushType], coordSys, coordRange);
      }
    });
    dataZoom_history.push(ecModel, snapshot);
    this._dispatchZoomAction(snapshot);
    function setBatch(dimName, coordSys, minMax) {
      var axis = coordSys.getAxis(dimName);
      var axisModel = axis.model;
      var dataZoomModel = findDataZoom(dimName, axisModel, ecModel);
      // Restrict range.
      var minMaxSpan = dataZoomModel.findRepresentativeAxisProxy(axisModel).getMinMaxSpan();
      if (minMaxSpan.minValueSpan != null || minMaxSpan.maxValueSpan != null) {
        minMax = (0,sliderMove["default"])(0, minMax.slice(), axis.scale.getExtent(), 0, minMaxSpan.minValueSpan, minMaxSpan.maxValueSpan);
      }
      dataZoomModel && (snapshot[dataZoomModel.id] = {
        dataZoomId: dataZoomModel.id,
        startValue: minMax[0],
        endValue: minMax[1]
      });
    }
    function findDataZoom(dimName, axisModel, ecModel) {
      var found;
      ecModel.eachComponent({
        mainType: 'dataZoom',
        subType: 'select'
      }, function (dzModel) {
        var has = dzModel.getAxisModel(dimName, axisModel.componentIndex);
        has && (found = dzModel);
      });
      return found;
    }
  };
  ;
  DataZoomFeature.prototype._dispatchZoomAction = function (snapshot) {
    var batch = [];
    // Convert from hash map to array.
    each(snapshot, function (batchItem, dataZoomId) {
      batch.push(util.clone(batchItem));
    });
    batch.length && this.api.dispatchAction({
      type: 'dataZoom',
      from: this.uid,
      batch: batch
    });
  };
  DataZoomFeature.getDefaultOption = function (ecModel) {
    var defaultOption = {
      show: true,
      filterMode: 'filter',
      // Icon group
      icon: {
        zoom: 'M0,13.5h26.9 M13.5,26.9V0 M32.1,13.5H58V58H13.5 V32.1',
        back: 'M22,1.4L9.9,13.5l12.3,12.3 M10.3,13.5H54.9v44.6 H10.3v-26'
      },
      // `zoom`, `back`
      title: ecModel.getLocaleModel().get(['toolbox', 'dataZoom', 'title']),
      brushStyle: {
        borderWidth: 0,
        color: tokens["default"].color.backgroundTint
      }
    };
    return defaultOption;
  };
  return DataZoomFeature;
}(featureManager.ToolboxFeature);
var handlers = {
  zoom: function () {
    var nextActive = !this._isZoomActive;
    this.api.dispatchAction({
      type: 'takeGlobalCursor',
      key: 'dataZoomSelect',
      dataZoomSelectActive: nextActive
    });
  },
  back: function () {
    this._dispatchZoomAction(dataZoom_history.pop(this.ecModel));
  }
};
function makeAxisFinder(dzFeatureModel) {
  var setting = {
    xAxisIndex: dzFeatureModel.get('xAxisIndex', true),
    yAxisIndex: dzFeatureModel.get('yAxisIndex', true),
    xAxisId: dzFeatureModel.get('xAxisId', true),
    yAxisId: dzFeatureModel.get('yAxisId', true)
  };
  // If both `xAxisIndex` `xAxisId` not set, it means 'all'.
  // If both `yAxisIndex` `yAxisId` not set, it means 'all'.
  // Some old cases set like this below to close yAxis control but leave xAxis control:
  // `{ feature: { dataZoom: { yAxisIndex: false } }`.
  if (setting.xAxisIndex == null && setting.xAxisId == null) {
    setting.xAxisIndex = 'all';
  }
  if (setting.yAxisIndex == null && setting.yAxisId == null) {
    setting.yAxisIndex = 'all';
  }
  return setting;
}
function updateBackBtnStatus(featureModel, ecModel) {
  featureModel.setIconStatus('back', dataZoom_history.count(ecModel) > 1 ? 'emphasis' : 'normal');
}
function updateZoomBtnStatus(featureModel, ecModel, view, payload, api) {
  var zoomActive = view._isZoomActive;
  if (payload && payload.type === 'takeGlobalCursor') {
    zoomActive = payload.key === 'dataZoomSelect' ? payload.dataZoomSelectActive : false;
  }
  view._isZoomActive = zoomActive;
  featureModel.setIconStatus('zoom', zoomActive ? 'emphasis' : 'normal');
  var brushTargetManager = new BrushTargetManager["default"](makeAxisFinder(featureModel), ecModel, {
    include: ['grid']
  });
  var panels = brushTargetManager.makePanelOpts(api, function (targetInfo) {
    return targetInfo.xAxisDeclared && !targetInfo.yAxisDeclared ? 'lineX' : !targetInfo.xAxisDeclared && targetInfo.yAxisDeclared ? 'lineY' : 'rect';
  });
  view._brushController.setPanels(panels).enableBrush(zoomActive && panels.length ? {
    brushType: 'auto',
    brushStyle: featureModel.getModel('brushStyle').getItemStyle()
  } : false);
}
(0,internalComponentCreator.registerInternalOptionCreator)('dataZoom', function (ecModel) {
  var toolboxModel = ecModel.getComponent('toolbox', 0);
  var featureDataZoomPath = ['feature', 'dataZoom'];
  if (!toolboxModel || toolboxModel.get(featureDataZoomPath) == null) {
    return;
  }
  var dzFeatureModel = toolboxModel.getModel(featureDataZoomPath);
  var dzOptions = [];
  var finder = makeAxisFinder(dzFeatureModel);
  var finderResult = (0,util_model.parseFinder)(ecModel, finder);
  each(finderResult.xAxisModels, function (axisModel) {
    return buildInternalOptions(axisModel, 'xAxis', 'xAxisIndex');
  });
  each(finderResult.yAxisModels, function (axisModel) {
    return buildInternalOptions(axisModel, 'yAxis', 'yAxisIndex');
  });
  function buildInternalOptions(axisModel, axisMainType, axisIndexPropName) {
    var axisIndex = axisModel.componentIndex;
    var newOpt = {
      type: 'select',
      $fromToolbox: true,
      // Default to be filter
      filterMode: dzFeatureModel.get('filterMode', true) || 'filter',
      // Id for merge mapping.
      id: DATA_ZOOM_ID_BASE + axisMainType + axisIndex
    };
    newOpt[axisIndexPropName] = axisIndex;
    dzOptions.push(newOpt);
  }
  return dzOptions;
});
/* ESM default export */ var DataZoom = (DataZoom_DataZoomFeature);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/toolbox/install.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/




// TODOD: REGISTER IN INSTALL






function install(registers) {
  registers.registerComponentModel(toolbox_ToolboxModel);
  registers.registerComponentView(toolbox_ToolboxView);
  (0,featureManager.registerFeature)('saveAsImage', feature_SaveAsImage);
  (0,featureManager.registerFeature)('magicType', feature_MagicType);
  (0,featureManager.registerFeature)('dataView', feature_DataView);
  (0,featureManager.registerFeature)('dataZoom', DataZoom);
  (0,featureManager.registerFeature)('restore', Restore);
  (0,extension.use)(installDataZoomSelect.install);
}

}),
1887: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  install: function() { return /* binding */ install_install; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/install.js + 4 modules
var install = __webpack_require__(57356);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/extension.js
var extension = __webpack_require__(50215);
// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(12012);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Component.js
var Component = __webpack_require__(81757);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/tokens.js
var tokens = __webpack_require__(23430);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/tooltip/TooltipModel.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/



var TooltipModel_TooltipModel = /** @class */function (_super) {
  (0,tslib_es6.__extends)(TooltipModel, _super);
  function TooltipModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = TooltipModel.type;
    return _this;
  }
  TooltipModel.type = 'tooltip';
  TooltipModel.dependencies = ['axisPointer'];
  TooltipModel.defaultOption = {
    // zlevel: 0,
    z: 60,
    show: true,
    // tooltip main content
    showContent: true,
    // 'trigger' only works on coordinate system.
    // 'item' | 'axis' | 'none'
    trigger: 'item',
    // 'click' | 'mousemove' | 'none'
    triggerOn: 'mousemove|click',
    alwaysShowContent: false,
    renderMode: 'auto',
    // whether restraint content inside viewRect.
    // If renderMode: 'richText', default true.
    // If renderMode: 'html', defaults to `false` (for backward compat).
    confine: null,
    showDelay: 0,
    hideDelay: 100,
    // Animation transition time, unit is second
    transitionDuration: 0.4,
    displayTransition: true,
    enterable: false,
    backgroundColor: tokens["default"].color.neutral00,
    // box shadow
    shadowBlur: 10,
    shadowColor: 'rgba(0, 0, 0, .2)',
    shadowOffsetX: 1,
    shadowOffsetY: 2,
    // tooltip border radius, unit is px, default is 4
    borderRadius: 4,
    // tooltip border width, unit is px, default is 0 (no border)
    borderWidth: 1,
    defaultBorderColor: tokens["default"].color.border,
    // Tooltip inside padding, default is 5 for all direction
    // Array is allowed to set up, right, bottom, left, same with css
    // The default value: See `tooltip/tooltipMarkup.ts#getPaddingFromTooltipModel`.
    padding: null,
    // Extra css text
    extraCssText: '',
    // axis indicator, trigger by axis
    axisPointer: {
      // default is line
      // legal values: 'line' | 'shadow' | 'cross'
      type: 'line',
      // Valid when type is line, appoint tooltip line locate on which line. Optional
      // legal values: 'x' | 'y' | 'angle' | 'radius' | 'auto'
      // default is 'auto', chose the axis which type is category.
      // for multiply y axis, cartesian coord chose x axis, polar chose angle axis
      axis: 'auto',
      animation: 'auto',
      animationDurationUpdate: 200,
      animationEasingUpdate: 'exponentialOut',
      crossStyle: {
        color: tokens["default"].color.borderShade,
        width: 1,
        type: 'dashed',
        // TODO formatter
        textStyle: {}
      }
      // lineStyle and shadowStyle should not be specified here,
      // otherwise it will always override those styles on option.axisPointer.
    },
    textStyle: {
      color: tokens["default"].color.tertiary,
      fontSize: 14
    }
  };
  return TooltipModel;
}(Component["default"]);
/* ESM default export */ var tooltip_TooltipModel = (TooltipModel_TooltipModel);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(56190);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/env.js
var env = __webpack_require__(33013);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/event.js
var core_event = __webpack_require__(85908);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/dom.js + 1 modules
var dom = __webpack_require__(10887);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/format.js
var format = __webpack_require__(85774);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/tooltip/helper.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/* global document */
function shouldTooltipConfine(tooltipModel) {
  var confineOption = tooltipModel.get('confine');
  return confineOption != null ? !!confineOption
  // In richText mode, the outside part can not be visible.
  : tooltipModel.get('renderMode') === 'richText';
}
function testStyle(styleProps) {
  if (!env["default"].domSupported) {
    return;
  }
  var style = document.documentElement.style;
  for (var i = 0, len = styleProps.length; i < len; i++) {
    if (styleProps[i] in style) {
      return styleProps[i];
    }
  }
}
var TRANSFORM_VENDOR = testStyle(['transform', 'webkitTransform', 'OTransform', 'MozTransform', 'msTransform']);
var TRANSITION_VENDOR = testStyle(['webkitTransition', 'transition', 'OTransition', 'MozTransition', 'msTransition']);
function toCSSVendorPrefix(styleVendor, styleProp) {
  if (!styleVendor) {
    return styleProp;
  }
  styleProp = (0,format.toCamelCase)(styleProp, true);
  var idx = styleVendor.indexOf(styleProp);
  styleVendor = idx === -1 ? styleProp : "-" + styleVendor.slice(0, idx) + "-" + styleProp;
  return styleVendor.toLowerCase();
}
function getComputedStyle(el, style) {
  var stl = el.currentStyle || document.defaultView && document.defaultView.getComputedStyle(el);
  return stl ? style ? stl[style] : stl : null;
}
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/tooltip/tooltipMarkup.js
var tooltipMarkup = __webpack_require__(77330);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/tooltip/TooltipHTMLContent.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/







/* global document, window */
var CSS_TRANSITION_VENDOR = toCSSVendorPrefix(TRANSITION_VENDOR, 'transition');
var CSS_TRANSFORM_VENDOR = toCSSVendorPrefix(TRANSFORM_VENDOR, 'transform');
// eslint-disable-next-line
var gCssText = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;" + (env["default"].transform3dSupported ? 'will-change:transform;' : '');
function mirrorPos(pos) {
  pos = pos === 'left' ? 'right' : pos === 'right' ? 'left' : pos === 'top' ? 'bottom' : 'top';
  return pos;
}
function assembleArrow(tooltipModel, borderColor, arrowPosition) {
  if (!(0,util.isString)(arrowPosition) || arrowPosition === 'inside') {
    return '';
  }
  var backgroundColor = tooltipModel.get('backgroundColor');
  var borderWidth = tooltipModel.get('borderWidth');
  borderColor = (0,format.convertToColorString)(borderColor);
  var arrowPos = mirrorPos(arrowPosition);
  var arrowSize = Math.max(Math.round(borderWidth) * 1.5, 6);
  var positionStyle = '';
  var transformStyle = CSS_TRANSFORM_VENDOR + ':';
  var rotateDeg;
  if ((0,util.indexOf)(['left', 'right'], arrowPos) > -1) {
    positionStyle += 'top:50%';
    transformStyle += "translateY(-50%) rotate(" + (rotateDeg = arrowPos === 'left' ? -225 : -45) + "deg)";
  } else {
    positionStyle += 'left:50%';
    transformStyle += "translateX(-50%) rotate(" + (rotateDeg = arrowPos === 'top' ? 225 : 45) + "deg)";
  }
  var rotateRadian = rotateDeg * Math.PI / 180;
  var arrowWH = arrowSize + borderWidth;
  var rotatedWH = arrowWH * Math.abs(Math.cos(rotateRadian)) + arrowWH * Math.abs(Math.sin(rotateRadian));
  var arrowOffset = Math.round(((rotatedWH - Math.SQRT2 * borderWidth) / 2 + Math.SQRT2 * borderWidth - (rotatedWH - arrowWH) / 2) * 100) / 100;
  positionStyle += ";" + arrowPos + ":-" + arrowOffset + "px";
  var borderStyle = borderColor + " solid " + borderWidth + "px;";
  var styleCss = ["position:absolute;width:" + arrowSize + "px;height:" + arrowSize + "px;z-index:-1;", positionStyle + ";" + transformStyle + ";", "border-bottom:" + borderStyle, "border-right:" + borderStyle, "background-color:" + backgroundColor + ";"];
  return "<div style=\"" + styleCss.join('') + "\"></div>";
}
function assembleTransition(duration, onlyFadeTransition, enableDisplayTransition) {
  var transitionCurve = 'cubic-bezier(0.23,1,0.32,1)';
  var transitionOption = '';
  var transitionText = '';
  if (enableDisplayTransition) {
    transitionOption = " " + duration / 2 + "s " + transitionCurve;
    transitionText = "opacity" + transitionOption + ",visibility" + transitionOption;
  }
  if (!onlyFadeTransition) {
    transitionOption = " " + duration + "s " + transitionCurve;
    transitionText += (transitionText.length ? ',' : '') + (env["default"].transformSupported ? "" + CSS_TRANSFORM_VENDOR + transitionOption : ",left" + transitionOption + ",top" + transitionOption);
  }
  return CSS_TRANSITION_VENDOR + ':' + transitionText;
}
function assembleTransform(x, y, toString) {
  // If using float on style, the final width of the dom might
  // keep changing slightly while mouse move. So `toFixed(0)` them.
  var x0 = x.toFixed(0) + 'px';
  var y0 = y.toFixed(0) + 'px';
  // not support transform, use `left` and `top` instead.
  if (!env["default"].transformSupported) {
    return toString ? "top:" + y0 + ";left:" + x0 + ";" : [['top', y0], ['left', x0]];
  }
  // support transform
  var is3d = env["default"].transform3dSupported;
  var translate = "translate" + (is3d ? '3d' : '') + "(" + x0 + "," + y0 + (is3d ? ',0' : '') + ")";
  return toString ? 'top:0;left:0;' + CSS_TRANSFORM_VENDOR + ':' + translate + ';' : [['top', 0], ['left', 0], [TRANSFORM_VENDOR, translate]];
}
/**
 * @param {Object} textStyle
 * @return {string}
 * @inner
 */
function assembleFont(textStyleModel) {
  var cssText = [];
  var fontSize = textStyleModel.get('fontSize');
  var color = textStyleModel.getTextColor();
  color && cssText.push('color:' + color);
  cssText.push('font:' + textStyleModel.getFont());
  // @ts-ignore, leave it to the tooltip refactor.
  var lineHeight = (0,util.retrieve2)(textStyleModel.get('lineHeight'), Math.round(fontSize * 3 / 2));
  fontSize && cssText.push('line-height:' + lineHeight + 'px');
  var shadowColor = textStyleModel.get('textShadowColor');
  var shadowBlur = textStyleModel.get('textShadowBlur') || 0;
  var shadowOffsetX = textStyleModel.get('textShadowOffsetX') || 0;
  var shadowOffsetY = textStyleModel.get('textShadowOffsetY') || 0;
  shadowColor && shadowBlur && cssText.push('text-shadow:' + shadowOffsetX + 'px ' + shadowOffsetY + 'px ' + shadowBlur + 'px ' + shadowColor);
  (0,util.each)(['decoration', 'align'], function (name) {
    var val = textStyleModel.get(name);
    val && cssText.push('text-' + name + ':' + val);
  });
  return cssText.join(';');
}
function assembleCssText(tooltipModel, enableTransition, onlyFadeTransition, enableDisplayTransition) {
  var cssText = [];
  var transitionDuration = tooltipModel.get('transitionDuration');
  var backgroundColor = tooltipModel.get('backgroundColor');
  var shadowBlur = tooltipModel.get('shadowBlur');
  var shadowColor = tooltipModel.get('shadowColor');
  var shadowOffsetX = tooltipModel.get('shadowOffsetX');
  var shadowOffsetY = tooltipModel.get('shadowOffsetY');
  var textStyleModel = tooltipModel.getModel('textStyle');
  var padding = (0,tooltipMarkup.getPaddingFromTooltipModel)(tooltipModel, 'html');
  var boxShadow = shadowOffsetX + "px " + shadowOffsetY + "px " + shadowBlur + "px " + shadowColor;
  cssText.push('box-shadow:' + boxShadow);
  // Animation transition. Do not animate when transitionDuration <= 0.
  enableTransition && transitionDuration > 0 && cssText.push(assembleTransition(transitionDuration, onlyFadeTransition, enableDisplayTransition));
  if (backgroundColor) {
    cssText.push('background-color:' + backgroundColor);
  }
  // Border style
  (0,util.each)(['width', 'color', 'radius'], function (name) {
    var borderName = 'border-' + name;
    var camelCase = (0,format.toCamelCase)(borderName);
    var val = tooltipModel.get(camelCase);
    val != null && cssText.push(borderName + ':' + val + (name === 'color' ? '' : 'px'));
  });
  // Text style
  cssText.push(assembleFont(textStyleModel));
  // Padding
  if (padding != null) {
    cssText.push('padding:' + (0,format.normalizeCssArray)(padding).join('px ') + 'px');
  }
  return cssText.join(';') + ';';
}
// If not able to make, do not modify the input `out`.
function makeStyleCoord(out, zr, container, zrX, zrY) {
  var zrPainter = zr && zr.painter;
  if (container) {
    var zrViewportRoot = zrPainter && zrPainter.getViewportRoot();
    if (zrViewportRoot) {
      // Some APPs might use scale on body, so we support CSS transform here.
      (0,dom.transformLocalCoord)(out, zrViewportRoot, container, zrX, zrY);
    }
  } else {
    out[0] = zrX;
    out[1] = zrY;
    // xy should be based on canvas root. But tooltipContent is
    // the sibling of canvas root. So padding of ec container
    // should be considered here.
    var viewportRootOffset = zrPainter && zrPainter.getViewportRootOffset();
    if (viewportRootOffset) {
      out[0] += viewportRootOffset.offsetLeft;
      out[1] += viewportRootOffset.offsetTop;
    }
  }
  out[2] = out[0] / zr.getWidth();
  out[3] = out[1] / zr.getHeight();
}
var TooltipHTMLContent_TooltipHTMLContent = /** @class */function () {
  function TooltipHTMLContent(api, opt) {
    this._show = false;
    this._styleCoord = [0, 0, 0, 0];
    this._enterable = true;
    this._alwaysShowContent = false;
    this._firstShow = true;
    this._longHide = true;
    if (env["default"].wxa) {
      return null;
    }
    var el = document.createElement('div');
    // TODO: TYPE
    el.domBelongToZr = true;
    this.el = el;
    var zr = this._zr = api.getZr();
    var appendTo = opt.appendTo;
    var container = appendTo && ((0,util.isString)(appendTo) ? document.querySelector(appendTo) : (0,util.isDom)(appendTo) ? appendTo : (0,util.isFunction)(appendTo) && appendTo(api.getDom()));
    makeStyleCoord(this._styleCoord, zr, container, api.getWidth() / 2, api.getHeight() / 2);
    (container || api.getDom()).appendChild(el);
    this._api = api;
    this._container = container;
    // FIXME
    // Is it needed to trigger zr event manually if
    // the browser do not support `pointer-events: none`.
    var self = this;
    el.onmouseenter = function () {
      // clear the timeout in hideLater and keep showing tooltip
      if (self._enterable) {
        clearTimeout(self._hideTimeout);
        self._show = true;
      }
      self._inContent = true;
    };
    el.onmousemove = function (e) {
      e = e || window.event;
      if (!self._enterable) {
        // `pointer-events: none` is set to tooltip content div
        // if `enterable` is set as `false`, and `el.onmousemove`
        // can not be triggered. But in browser that do not
        // support `pointer-events`, we need to do this:
        // Try trigger zrender event to avoid mouse
        // in and out shape too frequently
        var handler = zr.handler;
        var zrViewportRoot = zr.painter.getViewportRoot();
        (0,core_event.normalizeEvent)(zrViewportRoot, e, true);
        handler.dispatch('mousemove', e);
      }
    };
    el.onmouseleave = function () {
      // set `_inContent` to `false` before `hideLater`
      self._inContent = false;
      if (self._enterable) {
        if (self._show) {
          self.hideLater(self._hideDelay);
        }
      }
    };
  }
  /**
   * Update when tooltip is rendered
   */
  TooltipHTMLContent.prototype.update = function (tooltipModel) {
    // FIXME
    // Move this logic to ec main?
    if (!this._container) {
      var container = this._api.getDom();
      var position = getComputedStyle(container, 'position');
      var domStyle = container.style;
      if (domStyle.position !== 'absolute' && position !== 'absolute') {
        domStyle.position = 'relative';
      }
    }
    // move tooltip if chart resized
    var alwaysShowContent = tooltipModel.get('alwaysShowContent');
    alwaysShowContent && this._moveIfResized();
    // update alwaysShowContent
    this._alwaysShowContent = alwaysShowContent;
    this._enableDisplayTransition = tooltipModel.get('displayTransition') && tooltipModel.get('transitionDuration') > 0;
    // update className
    this.el.className = tooltipModel.get('className') || '';
    // Hide the tooltip
    // PENDING
    // this.hide();
  };
  TooltipHTMLContent.prototype.show = function (tooltipModel, nearPointColor) {
    clearTimeout(this._hideTimeout);
    clearTimeout(this._longHideTimeout);
    var el = this.el;
    var style = el.style;
    var styleCoord = this._styleCoord;
    if (!el.innerHTML) {
      style.display = 'none';
    } else {
      style.cssText = gCssText + assembleCssText(tooltipModel, !this._firstShow, this._longHide, this._enableDisplayTransition)
      // initial transform
      + assembleTransform(styleCoord[0], styleCoord[1], true) + ("border-color:" + (0,format.convertToColorString)(nearPointColor) + ";") + (tooltipModel.get('extraCssText') || '')
      // If mouse occasionally move over the tooltip, a mouseout event will be
      // triggered by canvas, and cause some unexpectable result like dragging
      // stop, "unfocusAdjacency". Here `pointer-events: none` is used to solve
      // it. Although it is not supported by IE8~IE10, fortunately it is a rare
      // scenario.
      + (";pointer-events:" + (this._enterable ? 'auto' : 'none'));
    }
    this._show = true;
    this._firstShow = false;
    this._longHide = false;
  };
  TooltipHTMLContent.prototype.setContent = function (content, markers, tooltipModel, borderColor, arrowPosition) {
    var el = this.el;
    if (content == null) {
      el.innerHTML = '';
      return;
    }
    var arrow = '';
    if ((0,util.isString)(arrowPosition) && tooltipModel.get('trigger') === 'item' && !shouldTooltipConfine(tooltipModel)) {
      arrow = assembleArrow(tooltipModel, borderColor, arrowPosition);
    }
    if ((0,util.isString)(content)) {
      el.innerHTML = content + arrow;
    } else if (content) {
      // Clear previous
      el.innerHTML = '';
      if (!(0,util.isArray)(content)) {
        content = [content];
      }
      for (var i = 0; i < content.length; i++) {
        if ((0,util.isDom)(content[i]) && content[i].parentNode !== el) {
          el.appendChild(content[i]);
        }
      }
      // no arrow if empty
      if (arrow && el.childNodes.length) {
        // no need to create a new parent element, but it's not supported by IE 10 and older.
        // const arrowEl = document.createRange().createContextualFragment(arrow);
        var arrowEl = document.createElement('div');
        arrowEl.innerHTML = arrow;
        el.appendChild(arrowEl);
      }
    }
  };
  TooltipHTMLContent.prototype.setEnterable = function (enterable) {
    this._enterable = enterable;
  };
  TooltipHTMLContent.prototype.getSize = function () {
    var el = this.el;
    return el ? [el.offsetWidth, el.offsetHeight] : [0, 0];
  };
  TooltipHTMLContent.prototype.moveTo = function (zrX, zrY) {
    if (!this.el) {
      return;
    }
    var styleCoord = this._styleCoord;
    makeStyleCoord(styleCoord, this._zr, this._container, zrX, zrY);
    if (styleCoord[0] != null && styleCoord[1] != null) {
      var style_1 = this.el.style;
      var transforms = assembleTransform(styleCoord[0], styleCoord[1]);
      (0,util.each)(transforms, function (transform) {
        style_1[transform[0]] = transform[1];
      });
    }
  };
  /**
   * when `alwaysShowContent` is true,
   * move the tooltip after chart resized
   */
  TooltipHTMLContent.prototype._moveIfResized = function () {
    // The ratio of left to width
    var ratioX = this._styleCoord[2];
    // The ratio of top to height
    var ratioY = this._styleCoord[3];
    this.moveTo(ratioX * this._zr.getWidth(), ratioY * this._zr.getHeight());
  };
  TooltipHTMLContent.prototype.hide = function () {
    var _this = this;
    var style = this.el.style;
    if (this._enableDisplayTransition) {
      style.visibility = 'hidden';
      style.opacity = '0';
    } else {
      style.display = 'none';
    }
    env["default"].transform3dSupported && (style.willChange = '');
    this._show = false;
    this._longHideTimeout = setTimeout(function () {
      return _this._longHide = true;
    }, 500);
  };
  TooltipHTMLContent.prototype.hideLater = function (time) {
    if (this._show && !(this._inContent && this._enterable) && !this._alwaysShowContent) {
      if (time) {
        this._hideDelay = time;
        // Set show false to avoid invoke hideLater multiple times
        this._show = false;
        this._hideTimeout = setTimeout((0,util.bind)(this.hide, this), time);
      } else {
        this.hide();
      }
    }
  };
  TooltipHTMLContent.prototype.isShow = function () {
    return this._show;
  };
  TooltipHTMLContent.prototype.dispose = function () {
    clearTimeout(this._hideTimeout);
    clearTimeout(this._longHideTimeout);
    var zr = this._zr;
    (0,dom.transformLocalCoordClear)(zr && zr.painter && zr.painter.getViewportRoot(), this._container);
    var el = this.el;
    if (el) {
      el.onmouseenter = el.onmousemove = el.onmouseleave = null;
      var parentNode = el.parentNode;
      parentNode && parentNode.removeChild(el);
    }
    this.el = this._container = null;
  };
  return TooltipHTMLContent;
}();
/* ESM default export */ var tooltip_TooltipHTMLContent = (TooltipHTMLContent_TooltipHTMLContent);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Text.js
var Text = __webpack_require__(98856);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/log.js
var log = __webpack_require__(29692);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/tooltip/TooltipRichContent.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/




var TooltipRichContent_TooltipRichContent = /** @class */function () {
  function TooltipRichContent(api) {
    this._show = false;
    this._styleCoord = [0, 0, 0, 0];
    this._alwaysShowContent = false;
    this._enterable = true;
    this._zr = api.getZr();
    TooltipRichContent_makeStyleCoord(this._styleCoord, this._zr, api.getWidth() / 2, api.getHeight() / 2);
  }
  /**
   * Update when tooltip is rendered
   */
  TooltipRichContent.prototype.update = function (tooltipModel) {
    var alwaysShowContent = tooltipModel.get('alwaysShowContent');
    alwaysShowContent && this._moveIfResized();
    // update alwaysShowContent
    this._alwaysShowContent = alwaysShowContent;
  };
  TooltipRichContent.prototype.show = function () {
    if (this._hideTimeout) {
      clearTimeout(this._hideTimeout);
    }
    this.el.show();
    this._show = true;
  };
  /**
   * Set tooltip content
   */
  TooltipRichContent.prototype.setContent = function (content, markupStyleCreator, tooltipModel, borderColor, arrowPosition) {
    var _this = this;
    if (util.isObject(content)) {
      (0,log.throwError)( false ? 0 : '');
    }
    if (this.el) {
      this._zr.remove(this.el);
    }
    var textStyleModel = tooltipModel.getModel('textStyle');
    this.el = new Text["default"]({
      style: {
        rich: markupStyleCreator.richTextStyles,
        text: content,
        lineHeight: 22,
        borderWidth: 1,
        borderColor: borderColor,
        textShadowColor: textStyleModel.get('textShadowColor'),
        fill: tooltipModel.get(['textStyle', 'color']),
        padding: (0,tooltipMarkup.getPaddingFromTooltipModel)(tooltipModel, 'richText'),
        verticalAlign: 'top',
        align: 'left'
      },
      z: tooltipModel.get('z')
    });
    util.each(['backgroundColor', 'borderRadius', 'shadowColor', 'shadowBlur', 'shadowOffsetX', 'shadowOffsetY'], function (propName) {
      _this.el.style[propName] = tooltipModel.get(propName);
    });
    util.each(['textShadowBlur', 'textShadowOffsetX', 'textShadowOffsetY'], function (propName) {
      _this.el.style[propName] = textStyleModel.get(propName) || 0;
    });
    this._zr.add(this.el);
    var self = this;
    this.el.on('mouseover', function () {
      // clear the timeout in hideLater and keep showing tooltip
      if (self._enterable) {
        clearTimeout(self._hideTimeout);
        self._show = true;
      }
      self._inContent = true;
    });
    this.el.on('mouseout', function () {
      if (self._enterable) {
        if (self._show) {
          self.hideLater(self._hideDelay);
        }
      }
      self._inContent = false;
    });
  };
  TooltipRichContent.prototype.setEnterable = function (enterable) {
    this._enterable = enterable;
  };
  TooltipRichContent.prototype.getSize = function () {
    var el = this.el;
    var bounding = this.el.getBoundingRect();
    // bounding rect does not include shadow. For renderMode richText,
    // if overflow, it will be cut. So calculate them accurately.
    var shadowOuterSize = calcShadowOuterSize(el.style);
    return [bounding.width + shadowOuterSize.left + shadowOuterSize.right, bounding.height + shadowOuterSize.top + shadowOuterSize.bottom];
  };
  TooltipRichContent.prototype.moveTo = function (x, y) {
    var el = this.el;
    if (el) {
      var styleCoord = this._styleCoord;
      TooltipRichContent_makeStyleCoord(styleCoord, this._zr, x, y);
      x = styleCoord[0];
      y = styleCoord[1];
      var style = el.style;
      var borderWidth = mathMaxWith0(style.borderWidth || 0);
      var shadowOuterSize = calcShadowOuterSize(style);
      // rich text x, y do not include border.
      el.x = x + borderWidth + shadowOuterSize.left;
      el.y = y + borderWidth + shadowOuterSize.top;
      el.markRedraw();
    }
  };
  /**
   * when `alwaysShowContent` is true,
   * move the tooltip after chart resized
   */
  TooltipRichContent.prototype._moveIfResized = function () {
    // The ratio of left to width
    var ratioX = this._styleCoord[2];
    // The ratio of top to height
    var ratioY = this._styleCoord[3];
    this.moveTo(ratioX * this._zr.getWidth(), ratioY * this._zr.getHeight());
  };
  TooltipRichContent.prototype.hide = function () {
    if (this.el) {
      this.el.hide();
    }
    this._show = false;
  };
  TooltipRichContent.prototype.hideLater = function (time) {
    if (this._show && !(this._inContent && this._enterable) && !this._alwaysShowContent) {
      if (time) {
        this._hideDelay = time;
        // Set show false to avoid invoke hideLater multiple times
        this._show = false;
        this._hideTimeout = setTimeout(util.bind(this.hide, this), time);
      } else {
        this.hide();
      }
    }
  };
  TooltipRichContent.prototype.isShow = function () {
    return this._show;
  };
  TooltipRichContent.prototype.dispose = function () {
    this._zr.remove(this.el);
  };
  return TooltipRichContent;
}();
function mathMaxWith0(val) {
  return Math.max(0, val);
}
function calcShadowOuterSize(style) {
  var shadowBlur = mathMaxWith0(style.shadowBlur || 0);
  var shadowOffsetX = mathMaxWith0(style.shadowOffsetX || 0);
  var shadowOffsetY = mathMaxWith0(style.shadowOffsetY || 0);
  return {
    left: mathMaxWith0(shadowBlur - shadowOffsetX),
    right: mathMaxWith0(shadowBlur + shadowOffsetX),
    top: mathMaxWith0(shadowBlur - shadowOffsetY),
    bottom: mathMaxWith0(shadowBlur + shadowOffsetY)
  };
}
function TooltipRichContent_makeStyleCoord(out, zr, zrX, zrY) {
  out[0] = zrX;
  out[1] = zrY;
  out[2] = out[0] / zr.getWidth();
  out[3] = out[1] / zr.getHeight();
}
/* ESM default export */ var tooltip_TooltipRichContent = (TooltipRichContent_TooltipRichContent);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(48843);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Rect.js + 1 modules
var Rect = __webpack_require__(68903);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/findPointFromSeries.js
var findPointFromSeries = __webpack_require__(68006);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/layout.js
var layout = __webpack_require__(22265);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Model.js + 2 modules
var Model = __webpack_require__(40064);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/globalListener.js
var globalListener = __webpack_require__(94554);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisHelper.js
var axisHelper = __webpack_require__(5527);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axisPointer/viewHelper.js
var viewHelper = __webpack_require__(8814);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js
var util_model = __webpack_require__(44244);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Component.js
var view_Component = __webpack_require__(64989);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/time.js
var util_time = __webpack_require__(56899);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/innerStore.js
var innerStore = __webpack_require__(12212);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/mixin/dataFormat.js
var dataFormat = __webpack_require__(47963);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/event.js
var util_event = __webpack_require__(35111);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/throttle.js
var throttle = __webpack_require__(26069);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/tooltip/TooltipView.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */


/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/






















var proxyRect = new Rect["default"]({
  shape: {
    x: -1,
    y: -1,
    width: 2,
    height: 2
  }
});
var TooltipView_TooltipView = /** @class */function (_super) {
  (0,tslib_es6.__extends)(TooltipView, _super);
  function TooltipView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = TooltipView.type;
    return _this;
  }
  TooltipView.prototype.init = function (ecModel, api) {
    if (env["default"].node || !api.getDom()) {
      return;
    }
    var tooltipModel = ecModel.getComponent('tooltip');
    var renderMode = this._renderMode = (0,util_model.getTooltipRenderMode)(tooltipModel.get('renderMode'));
    this._tooltipContent = renderMode === 'richText' ? new tooltip_TooltipRichContent(api) : new tooltip_TooltipHTMLContent(api, {
      appendTo: tooltipModel.get('appendToBody', true) ? 'body' : tooltipModel.get('appendTo', true)
    });
  };
  TooltipView.prototype.render = function (tooltipModel, ecModel, api) {
    if (env["default"].node || !api.getDom()) {
      return;
    }
    // Reset
    this.group.removeAll();
    this._tooltipModel = tooltipModel;
    this._ecModel = ecModel;
    this._api = api;
    var tooltipContent = this._tooltipContent;
    tooltipContent.update(tooltipModel);
    tooltipContent.setEnterable(tooltipModel.get('enterable'));
    this._initGlobalListener();
    this._keepShow();
    // PENDING
    // `mousemove` event will be triggered very frequently when the mouse moves fast,
    // which causes that the `updatePosition` function was also called frequently.
    // In Chrome with devtools open and Firefox, tooltip looks laggy and shakes. See #14695 #16101
    // To avoid frequent triggering,
    // consider throttling it in 50ms when transition is enabled
    if (this._renderMode !== 'richText' && tooltipModel.get('transitionDuration')) {
      (0,throttle.createOrUpdate)(this, '_updatePosition', 50, 'fixRate');
    } else {
      (0,throttle.clear)(this, '_updatePosition');
    }
  };
  TooltipView.prototype._initGlobalListener = function () {
    var tooltipModel = this._tooltipModel;
    var triggerOn = tooltipModel.get('triggerOn');
    globalListener.register('itemTooltip', this._api, (0,util.bind)(function (currTrigger, e, dispatchAction) {
      // If 'none', it is not controlled by mouse totally.
      if (triggerOn !== 'none') {
        if (triggerOn.indexOf(currTrigger) >= 0) {
          this._tryShow(e, dispatchAction);
        } else if (currTrigger === 'leave') {
          this._hide(dispatchAction);
        }
      }
    }, this));
  };
  TooltipView.prototype._keepShow = function () {
    var tooltipModel = this._tooltipModel;
    var ecModel = this._ecModel;
    var api = this._api;
    var triggerOn = tooltipModel.get('triggerOn');
    // Try to keep the tooltip show when refreshing
    if (this._lastX != null && this._lastY != null
    // When user is willing to control tooltip totally using API,
    // self.manuallyShowTip({x, y}) might cause tooltip hide,
    // which is not expected.
    && triggerOn !== 'none' && triggerOn !== 'click') {
      var self_1 = this;
      clearTimeout(this._refreshUpdateTimeout);
      this._refreshUpdateTimeout = setTimeout(function () {
        // Show tip next tick after other charts are rendered
        // In case highlight action has wrong result
        // FIXME
        !api.isDisposed() && self_1.manuallyShowTip(tooltipModel, ecModel, api, {
          x: self_1._lastX,
          y: self_1._lastY,
          dataByCoordSys: self_1._lastDataByCoordSys
        });
      });
    }
  };
  /**
   * Show tip manually by
   * dispatchAction({
   *     type: 'showTip',
   *     x: 10,
   *     y: 10
   * });
   * Or
   * dispatchAction({
   *      type: 'showTip',
   *      seriesIndex: 0,
   *      dataIndex or dataIndexInside or name
   * });
   *
   *  TODO Batch
   */
  TooltipView.prototype.manuallyShowTip = function (tooltipModel, ecModel, api, payload) {
    if (payload.from === this.uid || env["default"].node || !api.getDom()) {
      return;
    }
    var dispatchAction = makeDispatchAction(payload, api);
    // Reset ticket
    this._ticket = '';
    // When triggered from axisPointer.
    var dataByCoordSys = payload.dataByCoordSys;
    var cmptRef = findComponentReference(payload, ecModel, api);
    if (cmptRef) {
      var rect = cmptRef.el.getBoundingRect().clone();
      rect.applyTransform(cmptRef.el.transform);
      this._tryShow({
        offsetX: rect.x + rect.width / 2,
        offsetY: rect.y + rect.height / 2,
        target: cmptRef.el,
        position: payload.position,
        // When manully trigger, the mouse is not on the el, so we'd better to
        // position tooltip on the bottom of the el and display arrow is possible.
        positionDefault: 'bottom'
      }, dispatchAction);
    } else if (payload.tooltip && payload.x != null && payload.y != null) {
      var el = proxyRect;
      el.x = payload.x;
      el.y = payload.y;
      el.update();
      (0,innerStore.getECData)(el).tooltipConfig = {
        name: null,
        option: payload.tooltip
      };
      // Manually show tooltip while view is not using zrender elements.
      this._tryShow({
        offsetX: payload.x,
        offsetY: payload.y,
        target: el
      }, dispatchAction);
    } else if (dataByCoordSys) {
      this._tryShow({
        offsetX: payload.x,
        offsetY: payload.y,
        position: payload.position,
        dataByCoordSys: dataByCoordSys,
        tooltipOption: payload.tooltipOption
      }, dispatchAction);
    } else if (payload.seriesIndex != null) {
      if (this._manuallyAxisShowTip(tooltipModel, ecModel, api, payload)) {
        return;
      }
      var pointInfo = (0,findPointFromSeries["default"])(payload, ecModel);
      var cx = pointInfo.point[0];
      var cy = pointInfo.point[1];
      if (cx != null && cy != null) {
        this._tryShow({
          offsetX: cx,
          offsetY: cy,
          target: pointInfo.el,
          position: payload.position,
          // When manully trigger, the mouse is not on the el, so we'd better to
          // position tooltip on the bottom of the el and display arrow is possible.
          positionDefault: 'bottom'
        }, dispatchAction);
      }
    } else if (payload.x != null && payload.y != null) {
      // FIXME
      // should wrap dispatchAction like `axisPointer/globalListener` ?
      api.dispatchAction({
        type: 'updateAxisPointer',
        x: payload.x,
        y: payload.y
      });
      this._tryShow({
        offsetX: payload.x,
        offsetY: payload.y,
        position: payload.position,
        target: api.getZr().findHover(payload.x, payload.y).target
      }, dispatchAction);
    }
  };
  TooltipView.prototype.manuallyHideTip = function (tooltipModel, ecModel, api, payload) {
    var tooltipContent = this._tooltipContent;
    if (this._tooltipModel) {
      tooltipContent.hideLater(this._tooltipModel.get('hideDelay'));
    }
    this._lastX = this._lastY = this._lastDataByCoordSys = null;
    if (payload.from !== this.uid) {
      this._hide(makeDispatchAction(payload, api));
    }
  };
  // Be compatible with previous design, that is, when tooltip.type is 'axis' and
  // dispatchAction 'showTip' with seriesIndex and dataIndex will trigger axis pointer
  // and tooltip.
  TooltipView.prototype._manuallyAxisShowTip = function (tooltipModel, ecModel, api, payload) {
    var seriesIndex = payload.seriesIndex;
    var dataIndex = payload.dataIndex;
    // @ts-ignore
    var coordSysAxesInfo = ecModel.getComponent('axisPointer').coordSysAxesInfo;
    if (seriesIndex == null || dataIndex == null || coordSysAxesInfo == null) {
      return;
    }
    var seriesModel = ecModel.getSeriesByIndex(seriesIndex);
    if (!seriesModel) {
      return;
    }
    var data = seriesModel.getData();
    var tooltipCascadedModel = buildTooltipModel([data.getItemModel(dataIndex), seriesModel, (seriesModel.coordinateSystem || {}).model], this._tooltipModel);
    if (tooltipCascadedModel.get('trigger') !== 'axis') {
      return;
    }
    api.dispatchAction({
      type: 'updateAxisPointer',
      seriesIndex: seriesIndex,
      dataIndex: dataIndex,
      position: payload.position
    });
    return true;
  };
  TooltipView.prototype._tryShow = function (e, dispatchAction) {
    var el = e.target;
    var tooltipModel = this._tooltipModel;
    if (!tooltipModel) {
      return;
    }
    // Save mouse x, mouse y. So we can try to keep showing the tip if chart is refreshed
    this._lastX = e.offsetX;
    this._lastY = e.offsetY;
    var dataByCoordSys = e.dataByCoordSys;
    if (dataByCoordSys && dataByCoordSys.length) {
      this._showAxisTooltip(dataByCoordSys, e);
    } else if (el) {
      var ecData = (0,innerStore.getECData)(el);
      if (ecData.ssrType === 'legend') {
        // Don't trigger tooltip for legend tooltip item
        return;
      }
      this._lastDataByCoordSys = null;
      var seriesDispatcher_1;
      var cmptDispatcher_1;
      (0,util_event.findEventDispatcher)(el, function (target) {
        if (target.tooltipDisabled) {
          seriesDispatcher_1 = cmptDispatcher_1 = null;
          return true;
        }
        if (seriesDispatcher_1 || cmptDispatcher_1) {
          return;
        }
        // Always show item tooltip if mouse is on the element with dataIndex
        if ((0,innerStore.getECData)(target).dataIndex != null) {
          seriesDispatcher_1 = target;
        }
        // Tooltip provided directly. Like legend.
        else if ((0,innerStore.getECData)(target).tooltipConfig != null) {
          cmptDispatcher_1 = target;
        }
      }, true);
      if (seriesDispatcher_1) {
        this._showSeriesItemTooltip(e, seriesDispatcher_1, dispatchAction);
      } else if (cmptDispatcher_1) {
        this._showComponentItemTooltip(e, cmptDispatcher_1, dispatchAction);
      } else {
        this._hide(dispatchAction);
      }
    } else {
      this._lastDataByCoordSys = null;
      this._hide(dispatchAction);
    }
  };
  TooltipView.prototype._showOrMove = function (tooltipModel, cb) {
    // showDelay is used in this case: tooltip.enterable is set
    // as true. User intent to move mouse into tooltip and click
    // something. `showDelay` makes it easier to enter the content
    // but tooltip do not move immediately.
    var delay = tooltipModel.get('showDelay');
    cb = (0,util.bind)(cb, this);
    clearTimeout(this._showTimout);
    delay > 0 ? this._showTimout = setTimeout(cb, delay) : cb();
  };
  TooltipView.prototype._showAxisTooltip = function (dataByCoordSys, e) {
    var ecModel = this._ecModel;
    var globalTooltipModel = this._tooltipModel;
    var point = [e.offsetX, e.offsetY];
    var singleTooltipModel = buildTooltipModel([e.tooltipOption], globalTooltipModel);
    var renderMode = this._renderMode;
    var cbParamsList = [];
    var articleMarkup = (0,tooltipMarkup.createTooltipMarkup)('section', {
      blocks: [],
      noHeader: true
    });
    // Only for legacy: `Serise['formatTooltip']` returns a string.
    var markupTextArrLegacy = [];
    var markupStyleCreator = new tooltipMarkup.TooltipMarkupStyleCreator();
    (0,util.each)(dataByCoordSys, function (itemCoordSys) {
      (0,util.each)(itemCoordSys.dataByAxis, function (axisItem) {
        var axisModel = ecModel.getComponent(axisItem.axisDim + 'Axis', axisItem.axisIndex);
        var axisValue = axisItem.value;
        if (!axisModel || axisValue == null) {
          return;
        }
        // FIXME: when using `tooltip.trigger: 'axis'`, the precision of the axis value displayed in tooltip
        //  should match the original series values rather than using the default stretegy in Interval.ts
        //  (getPrecision(interval) + 2); otherwise it may cuase confusion.
        var axisValueLabel = viewHelper.getValueLabel(axisValue, axisModel.axis, ecModel, axisItem.seriesDataIndices, axisItem.valueLabelOpt);
        var axisSectionMarkup = (0,tooltipMarkup.createTooltipMarkup)('section', {
          header: axisValueLabel,
          noHeader: !(0,util.trim)(axisValueLabel),
          sortBlocks: true,
          blocks: []
        });
        articleMarkup.blocks.push(axisSectionMarkup);
        (0,util.each)(axisItem.seriesDataIndices, function (idxItem) {
          var series = ecModel.getSeriesByIndex(idxItem.seriesIndex);
          var dataIndex = idxItem.dataIndexInside;
          var cbParams = series.getDataParams(dataIndex);
          // Can't find data.
          if (cbParams.dataIndex < 0) {
            return;
          }
          cbParams.axisDim = axisItem.axisDim;
          cbParams.axisIndex = axisItem.axisIndex;
          cbParams.axisType = axisItem.axisType;
          cbParams.axisId = axisItem.axisId;
          cbParams.axisValue = axisHelper.getAxisRawValue(axisModel.axis, {
            value: axisValue
          });
          cbParams.axisValueLabel = axisValueLabel;
          // Pre-create marker style for makers. Users can assemble richText
          // text in `formatter` callback and use those markers style.
          cbParams.marker = markupStyleCreator.makeTooltipMarker('item', (0,format.convertToColorString)(cbParams.color), renderMode);
          var seriesTooltipResult = (0,dataFormat.normalizeTooltipFormatResult)(series.formatTooltip(dataIndex, true, null));
          var frag = seriesTooltipResult.frag;
          if (frag) {
            var valueFormatter = buildTooltipModel([series], globalTooltipModel).get('valueFormatter');
            axisSectionMarkup.blocks.push(valueFormatter ? (0,util.extend)({
              valueFormatter: valueFormatter
            }, frag) : frag);
          }
          if (seriesTooltipResult.text) {
            markupTextArrLegacy.push(seriesTooltipResult.text);
          }
          cbParamsList.push(cbParams);
        });
      });
    });
    // In most cases, the second axis is displays upper on the first one.
    // So we reverse it to look better.
    articleMarkup.blocks.reverse();
    markupTextArrLegacy.reverse();
    var positionExpr = e.position;
    var orderMode = singleTooltipModel.get('order');
    var builtMarkupText = (0,tooltipMarkup.buildTooltipMarkup)(articleMarkup, markupStyleCreator, renderMode, orderMode, ecModel.get('useUTC'), singleTooltipModel.get('textStyle'));
    builtMarkupText && markupTextArrLegacy.unshift(builtMarkupText);
    var blockBreak = renderMode === 'richText' ? '\n\n' : '<br/>';
    var allMarkupText = markupTextArrLegacy.join(blockBreak);
    this._showOrMove(singleTooltipModel, function () {
      if (this._updateContentNotChangedOnAxis(dataByCoordSys, cbParamsList)) {
        this._updatePosition(singleTooltipModel, positionExpr, point[0], point[1], this._tooltipContent, cbParamsList);
      } else {
        this._showTooltipContent(singleTooltipModel, allMarkupText, cbParamsList, Math.random() + '', point[0], point[1], positionExpr, null, markupStyleCreator);
      }
    });
    // Do not trigger events here, because this branch only be entered
    // from dispatchAction.
  };
  TooltipView.prototype._showSeriesItemTooltip = function (e, dispatcher, dispatchAction) {
    var ecModel = this._ecModel;
    var ecData = (0,innerStore.getECData)(dispatcher);
    // Use dataModel in element if possible
    // Used when mouseover on a element like markPoint or edge
    // In which case, the data is not main data in series.
    var seriesIndex = ecData.seriesIndex;
    var seriesModel = ecModel.getSeriesByIndex(seriesIndex);
    // For example, graph link.
    var dataModel = ecData.dataModel || seriesModel;
    var dataIndex = ecData.dataIndex;
    var dataType = ecData.dataType;
    var data = dataModel.getData(dataType);
    var renderMode = this._renderMode;
    var positionDefault = e.positionDefault;
    var tooltipModel = buildTooltipModel([data.getItemModel(dataIndex), dataModel, seriesModel && (seriesModel.coordinateSystem || {}).model], this._tooltipModel, positionDefault ? {
      position: positionDefault
    } : null);
    var tooltipTrigger = tooltipModel.get('trigger');
    if (tooltipTrigger != null && tooltipTrigger !== 'item') {
      return;
    }
    var params = dataModel.getDataParams(dataIndex, dataType);
    var markupStyleCreator = new tooltipMarkup.TooltipMarkupStyleCreator();
    // Pre-create marker style for makers. Users can assemble richText
    // text in `formatter` callback and use those markers style.
    params.marker = markupStyleCreator.makeTooltipMarker('item', (0,format.convertToColorString)(params.color), renderMode);
    var seriesTooltipResult = (0,dataFormat.normalizeTooltipFormatResult)(dataModel.formatTooltip(dataIndex, false, dataType));
    var orderMode = tooltipModel.get('order');
    var valueFormatter = tooltipModel.get('valueFormatter');
    var frag = seriesTooltipResult.frag;
    var markupText = frag ? (0,tooltipMarkup.buildTooltipMarkup)(valueFormatter ? (0,util.extend)({
      valueFormatter: valueFormatter
    }, frag) : frag, markupStyleCreator, renderMode, orderMode, ecModel.get('useUTC'), tooltipModel.get('textStyle')) : seriesTooltipResult.text;
    var asyncTicket = 'item_' + dataModel.name + '_' + dataIndex;
    this._showOrMove(tooltipModel, function () {
      this._showTooltipContent(tooltipModel, markupText, params, asyncTicket, e.offsetX, e.offsetY, e.position, e.target, markupStyleCreator);
    });
    // FIXME
    // duplicated showtip if manuallyShowTip is called from dispatchAction.
    dispatchAction({
      type: 'showTip',
      dataIndexInside: dataIndex,
      dataIndex: data.getRawIndex(dataIndex),
      seriesIndex: seriesIndex,
      from: this.uid
    });
  };
  TooltipView.prototype._showComponentItemTooltip = function (e, el, dispatchAction) {
    var isHTMLRenderMode = this._renderMode === 'html';
    var ecData = (0,innerStore.getECData)(el);
    var tooltipConfig = ecData.tooltipConfig;
    var tooltipOpt = tooltipConfig.option || {};
    var encodeHTMLContent = tooltipOpt.encodeHTMLContent;
    if ((0,util.isString)(tooltipOpt)) {
      var content = tooltipOpt;
      tooltipOpt = {
        content: content,
        // Fixed formatter
        formatter: content
      };
      // when `tooltipConfig.option` is a string rather than an object,
      // we can't know if the content needs to be encoded
      // for the sake of security, encode it by default.
      encodeHTMLContent = true;
    }
    if (encodeHTMLContent && isHTMLRenderMode && tooltipOpt.content) {
      // clone might be unnecessary?
      tooltipOpt = (0,util.clone)(tooltipOpt);
      tooltipOpt.content = (0,dom.encodeHTML)(tooltipOpt.content);
    }
    var tooltipModelCascade = [tooltipOpt];
    var cmpt = this._ecModel.getComponent(ecData.componentMainType, ecData.componentIndex);
    if (cmpt) {
      tooltipModelCascade.push(cmpt);
    }
    // In most cases, component tooltip formatter has different params with series tooltip formatter,
    // so that they cannot share the same formatter. Since the global tooltip formatter is used for series
    // by convention, we do not use it as the default formatter for component.
    tooltipModelCascade.push({
      formatter: tooltipOpt.content
    });
    var positionDefault = e.positionDefault;
    var subTooltipModel = buildTooltipModel(tooltipModelCascade, this._tooltipModel, positionDefault ? {
      position: positionDefault
    } : null);
    var defaultHtml = subTooltipModel.get('content');
    var asyncTicket = Math.random() + '';
    // PENDING: this case do not support richText style yet.
    var markupStyleCreator = new tooltipMarkup.TooltipMarkupStyleCreator();
    // Do not check whether `trigger` is 'none' here, because `trigger`
    // only works on coordinate system. In fact, we have not found case
    // that requires setting `trigger` nothing on component yet.
    this._showOrMove(subTooltipModel, function () {
      // Use formatterParams from element defined in component
      // Avoid users modify it.
      var formatterParams = (0,util.clone)(subTooltipModel.get('formatterParams') || {});
      this._showTooltipContent(subTooltipModel, defaultHtml, formatterParams, asyncTicket, e.offsetX, e.offsetY, e.position, el, markupStyleCreator);
    });
    // If not dispatch showTip, tip may be hide triggered by axis.
    dispatchAction({
      type: 'showTip',
      from: this.uid
    });
  };
  TooltipView.prototype._showTooltipContent = function (
  // Use Model<TooltipOption> insteadof TooltipModel because this model may be from series or other options.
  // Instead of top level tooltip.
  tooltipModel, defaultHtml, params, asyncTicket, x, y, positionExpr, el, markupStyleCreator) {
    // Reset ticket
    this._ticket = '';
    if (!tooltipModel.get('showContent') || !tooltipModel.get('show')) {
      return;
    }
    var tooltipContent = this._tooltipContent;
    tooltipContent.setEnterable(tooltipModel.get('enterable'));
    var formatter = tooltipModel.get('formatter');
    positionExpr = positionExpr || tooltipModel.get('position');
    var html = defaultHtml;
    var nearPoint = this._getNearestPoint([x, y], params, tooltipModel.get('trigger'), tooltipModel.get('borderColor'), tooltipModel.get('defaultBorderColor', true));
    var nearPointColor = nearPoint.color;
    if (formatter) {
      if ((0,util.isString)(formatter)) {
        var useUTC = tooltipModel.ecModel.get('useUTC');
        var params0 = (0,util.isArray)(params) ? params[0] : params;
        var isTimeAxis = params0 && params0.axisType && params0.axisType.indexOf('time') >= 0;
        html = formatter;
        if (isTimeAxis) {
          html = (0,util_time.format)(params0.axisValue, html, useUTC);
        }
        html = (0,format.formatTpl)(html, params, true);
      } else if ((0,util.isFunction)(formatter)) {
        var callback = (0,util.bind)(function (cbTicket, html) {
          if (cbTicket === this._ticket) {
            tooltipContent.setContent(html, markupStyleCreator, tooltipModel, nearPointColor, positionExpr);
            this._updatePosition(tooltipModel, positionExpr, x, y, tooltipContent, params, el);
          }
        }, this);
        this._ticket = asyncTicket;
        html = formatter(params, asyncTicket, callback);
      } else {
        html = formatter;
      }
    }
    tooltipContent.setContent(html, markupStyleCreator, tooltipModel, nearPointColor, positionExpr);
    tooltipContent.show(tooltipModel, nearPointColor);
    this._updatePosition(tooltipModel, positionExpr, x, y, tooltipContent, params, el);
  };
  TooltipView.prototype._getNearestPoint = function (point, tooltipDataParams, trigger, borderColor, defaultBorderColor) {
    if (trigger === 'axis' || (0,util.isArray)(tooltipDataParams)) {
      return {
        color: borderColor || defaultBorderColor
      };
    }
    if (!(0,util.isArray)(tooltipDataParams)) {
      return {
        color: borderColor || tooltipDataParams.color || tooltipDataParams.borderColor
      };
    }
  };
  TooltipView.prototype._updatePosition = function (tooltipModel, positionExpr, x,
  // Mouse x
  y,
  // Mouse y
  content, params, el) {
    var viewWidth = this._api.getWidth();
    var viewHeight = this._api.getHeight();
    positionExpr = positionExpr || tooltipModel.get('position');
    var contentSize = content.getSize();
    var align = tooltipModel.get('align');
    var vAlign = tooltipModel.get('verticalAlign');
    var rect = el && el.getBoundingRect().clone();
    el && rect.applyTransform(el.transform);
    if ((0,util.isFunction)(positionExpr)) {
      // Callback of position can be an array or a string specify the position
      positionExpr = positionExpr([x, y], params, content.el, rect, {
        viewSize: [viewWidth, viewHeight],
        contentSize: contentSize.slice()
      });
    }
    if ((0,util.isArray)(positionExpr)) {
      x = (0,number.parsePercent)(positionExpr[0], viewWidth);
      y = (0,number.parsePercent)(positionExpr[1], viewHeight);
    } else if ((0,util.isObject)(positionExpr)) {
      var boxLayoutPosition = positionExpr;
      boxLayoutPosition.width = contentSize[0];
      boxLayoutPosition.height = contentSize[1];
      var layoutRect = (0,layout.getLayoutRect)(boxLayoutPosition, {
        width: viewWidth,
        height: viewHeight
      });
      x = layoutRect.x;
      y = layoutRect.y;
      align = null;
      // When positionExpr is left/top/right/bottom,
      // align and verticalAlign will not work.
      vAlign = null;
    }
    // Specify tooltip position by string 'top' 'bottom' 'left' 'right' around graphic element
    else if ((0,util.isString)(positionExpr) && el) {
      var pos = calcTooltipPosition(positionExpr, rect, contentSize, tooltipModel.get('borderWidth'));
      x = pos[0];
      y = pos[1];
    } else {
      var pos = refixTooltipPosition(x, y, content, viewWidth, viewHeight, align ? null : 20, vAlign ? null : 20);
      x = pos[0];
      y = pos[1];
    }
    align && (x -= isCenterAlign(align) ? contentSize[0] / 2 : align === 'right' ? contentSize[0] : 0);
    vAlign && (y -= isCenterAlign(vAlign) ? contentSize[1] / 2 : vAlign === 'bottom' ? contentSize[1] : 0);
    if (shouldTooltipConfine(tooltipModel)) {
      var pos = confineTooltipPosition(x, y, content, viewWidth, viewHeight);
      x = pos[0];
      y = pos[1];
    }
    content.moveTo(x, y);
  };
  // FIXME
  // Should we remove this but leave this to user?
  TooltipView.prototype._updateContentNotChangedOnAxis = function (dataByCoordSys, cbParamsList) {
    var lastCoordSys = this._lastDataByCoordSys;
    var lastCbParamsList = this._cbParamsList;
    var contentNotChanged = !!lastCoordSys && lastCoordSys.length === dataByCoordSys.length;
    contentNotChanged && (0,util.each)(lastCoordSys, function (lastItemCoordSys, indexCoordSys) {
      var lastDataByAxis = lastItemCoordSys.dataByAxis || [];
      var thisItemCoordSys = dataByCoordSys[indexCoordSys] || {};
      var thisDataByAxis = thisItemCoordSys.dataByAxis || [];
      contentNotChanged = contentNotChanged && lastDataByAxis.length === thisDataByAxis.length;
      contentNotChanged && (0,util.each)(lastDataByAxis, function (lastItem, indexAxis) {
        var thisItem = thisDataByAxis[indexAxis] || {};
        var lastIndices = lastItem.seriesDataIndices || [];
        var newIndices = thisItem.seriesDataIndices || [];
        contentNotChanged = contentNotChanged && lastItem.value === thisItem.value && lastItem.axisType === thisItem.axisType && lastItem.axisId === thisItem.axisId && lastIndices.length === newIndices.length;
        contentNotChanged && (0,util.each)(lastIndices, function (lastIdxItem, j) {
          var newIdxItem = newIndices[j];
          contentNotChanged = contentNotChanged && lastIdxItem.seriesIndex === newIdxItem.seriesIndex && lastIdxItem.dataIndex === newIdxItem.dataIndex;
        });
        // check is cbParams data value changed
        lastCbParamsList && (0,util.each)(lastItem.seriesDataIndices, function (idxItem) {
          var seriesIdx = idxItem.seriesIndex;
          var cbParams = cbParamsList[seriesIdx];
          var lastCbParams = lastCbParamsList[seriesIdx];
          if (cbParams && lastCbParams && lastCbParams.data !== cbParams.data) {
            contentNotChanged = false;
          }
        });
      });
    });
    this._lastDataByCoordSys = dataByCoordSys;
    this._cbParamsList = cbParamsList;
    return !!contentNotChanged;
  };
  TooltipView.prototype._hide = function (dispatchAction) {
    // Do not directly hideLater here, because this behavior may be prevented
    // in dispatchAction when showTip is dispatched.
    // FIXME
    // duplicated hideTip if manuallyHideTip is called from dispatchAction.
    this._lastDataByCoordSys = null;
    dispatchAction({
      type: 'hideTip',
      from: this.uid
    });
  };
  TooltipView.prototype.dispose = function (ecModel, api) {
    if (env["default"].node || !api.getDom()) {
      return;
    }
    (0,throttle.clear)(this, '_updatePosition');
    this._tooltipContent.dispose();
    globalListener.unregister('itemTooltip', api);
  };
  TooltipView.type = 'tooltip';
  return TooltipView;
}(view_Component["default"]);
/**
 * From top to bottom. (the last one should be globalTooltipModel);
 */
function buildTooltipModel(modelCascade, globalTooltipModel, defaultTooltipOption) {
  // Last is always tooltip model.
  var ecModel = globalTooltipModel.ecModel;
  var resultModel;
  if (defaultTooltipOption) {
    resultModel = new Model["default"](defaultTooltipOption, ecModel, ecModel);
    resultModel = new Model["default"](globalTooltipModel.option, resultModel, ecModel);
  } else {
    resultModel = globalTooltipModel;
  }
  for (var i = modelCascade.length - 1; i >= 0; i--) {
    var tooltipOpt = modelCascade[i];
    if (tooltipOpt) {
      if (tooltipOpt instanceof Model["default"]) {
        tooltipOpt = tooltipOpt.get('tooltip', true);
      }
      // In each data item tooltip can be simply write:
      // {
      //  value: 10,
      //  tooltip: 'Something you need to know'
      // }
      if ((0,util.isString)(tooltipOpt)) {
        tooltipOpt = {
          formatter: tooltipOpt
        };
      }
      if (tooltipOpt) {
        resultModel = new Model["default"](tooltipOpt, resultModel, ecModel);
      }
    }
  }
  return resultModel;
}
function makeDispatchAction(payload, api) {
  return payload.dispatchAction || (0,util.bind)(api.dispatchAction, api);
}
function refixTooltipPosition(x, y, content, viewWidth, viewHeight, gapH, gapV) {
  var size = content.getSize();
  var width = size[0];
  var height = size[1];
  if (gapH != null) {
    // Add extra 2 pixels for this case:
    // At present the "values" in default tooltip are using CSS `float: right`.
    // When the right edge of the tooltip box is on the right side of the
    // viewport, the `float` layout might push the "values" to the second line.
    if (x + width + gapH + 2 > viewWidth) {
      x -= width + gapH;
    } else {
      x += gapH;
    }
  }
  if (gapV != null) {
    if (y + height + gapV > viewHeight) {
      y -= height + gapV;
    } else {
      y += gapV;
    }
  }
  return [x, y];
}
function confineTooltipPosition(x, y, content, viewWidth, viewHeight) {
  var size = content.getSize();
  var width = size[0];
  var height = size[1];
  x = Math.min(x + width, viewWidth) - width;
  y = Math.min(y + height, viewHeight) - height;
  x = Math.max(x, 0);
  y = Math.max(y, 0);
  return [x, y];
}
function calcTooltipPosition(position, rect, contentSize, borderWidth) {
  var domWidth = contentSize[0];
  var domHeight = contentSize[1];
  var offset = Math.ceil(Math.SQRT2 * borderWidth) + 8;
  var x = 0;
  var y = 0;
  var rectWidth = rect.width;
  var rectHeight = rect.height;
  switch (position) {
    case 'inside':
      x = rect.x + rectWidth / 2 - domWidth / 2;
      y = rect.y + rectHeight / 2 - domHeight / 2;
      break;
    case 'top':
      x = rect.x + rectWidth / 2 - domWidth / 2;
      y = rect.y - domHeight - offset;
      break;
    case 'bottom':
      x = rect.x + rectWidth / 2 - domWidth / 2;
      y = rect.y + rectHeight + offset;
      break;
    case 'left':
      x = rect.x - domWidth - offset;
      y = rect.y + rectHeight / 2 - domHeight / 2;
      break;
    case 'right':
      x = rect.x + rectWidth + offset;
      y = rect.y + rectHeight / 2 - domHeight / 2;
  }
  return [x, y];
}
function isCenterAlign(align) {
  return align === 'center' || align === 'middle';
}
/**
 * Find target component by payload like:
 * ```js
 * { legendId: 'some_id', name: 'xxx' }
 * { toolboxIndex: 1, name: 'xxx' }
 * { geoName: 'some_name', name: 'xxx' }
 * ```
 * PENDING: at present only
 *
 * If not found, return null/undefined.
 */
function findComponentReference(payload, ecModel, api) {
  var queryOptionMap = (0,util_model.preParseFinder)(payload).queryOptionMap;
  var componentMainType = queryOptionMap.keys()[0];
  if (!componentMainType || componentMainType === 'series') {
    return;
  }
  var queryResult = (0,util_model.queryReferringComponents)(ecModel, componentMainType, queryOptionMap.get(componentMainType), {
    useDefault: false,
    enableAll: false,
    enableNone: false
  });
  var model = queryResult.models[0];
  if (!model) {
    return;
  }
  var view = api.getViewOfComponentModel(model);
  var el;
  view.group.traverse(function (subEl) {
    var tooltipConfig = (0,innerStore.getECData)(subEl).tooltipConfig;
    if (tooltipConfig && tooltipConfig.name === payload.name) {
      el = subEl;
      return true; // stop
    }
  });
  if (el) {
    return {
      componentMainType: componentMainType,
      componentIndex: model.componentIndex,
      el: el
    };
  }
}
/* ESM default export */ var tooltip_TooltipView = (TooltipView_TooltipView);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/tooltip/install.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  registers.registerComponentModel(tooltip_TooltipModel);
  registers.registerComponentView(tooltip_TooltipView);
  /**
   * @action
   * @property {string} type
   * @property {number} seriesIndex
   * @property {number} dataIndex
   * @property {number} [x]
   * @property {number} [y]
   */
  registers.registerAction({
    type: 'showTip',
    event: 'showTip',
    update: 'tooltip:manuallyShowTip'
  }, util.noop);
  registers.registerAction({
    type: 'hideTip',
    event: 'hideTip',
    update: 'tooltip:manuallyHideTip'
  }, util.noop);
}

}),
51629: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  defaultSeriesFormatTooltip: function() { return defaultSeriesFormatTooltip; }
});
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56190);
/* ESM import */var _tooltipMarkup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77330);
/* ESM import */var _data_helper_dataProvider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54127);
/* ESM import */var _util_model_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44244);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/




function defaultSeriesFormatTooltip(opt) {
  var series = opt.series;
  var dataIndex = opt.dataIndex;
  var multipleSeries = opt.multipleSeries;
  var data = series.getData();
  var tooltipDims = data.mapDimensionsAll('defaultedTooltip');
  var tooltipDimLen = tooltipDims.length;
  var value = series.getRawValue(dataIndex);
  var isValueArr = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(value);
  var markerColor = (0,_tooltipMarkup_js__WEBPACK_IMPORTED_MODULE_1__.retrieveVisualColorForTooltipMarker)(series, dataIndex);
  // Complicated rule for pretty tooltip.
  var inlineValue;
  var inlineValueType;
  var subBlocks;
  var sortParam;
  if (tooltipDimLen > 1 || isValueArr && !tooltipDimLen) {
    var formatArrResult = formatTooltipArrayValue(value, series, dataIndex, tooltipDims, markerColor);
    inlineValue = formatArrResult.inlineValues;
    inlineValueType = formatArrResult.inlineValueTypes;
    subBlocks = formatArrResult.blocks;
    // Only support tooltip sort by the first inline value. It's enough in most cases.
    sortParam = formatArrResult.inlineValues[0];
  } else if (tooltipDimLen) {
    var dimInfo = data.getDimensionInfo(tooltipDims[0]);
    sortParam = inlineValue = (0,_data_helper_dataProvider_js__WEBPACK_IMPORTED_MODULE_2__.retrieveRawValue)(data, dataIndex, tooltipDims[0]);
    inlineValueType = dimInfo.type;
  } else {
    sortParam = inlineValue = isValueArr ? value[0] : value;
  }
  // Do not show generated series name. It might not be readable.
  var seriesNameSpecified = (0,_util_model_js__WEBPACK_IMPORTED_MODULE_3__.isNameSpecified)(series);
  var seriesName = seriesNameSpecified && series.name || '';
  var itemName = data.getName(dataIndex);
  var inlineName = multipleSeries ? seriesName : itemName;
  return (0,_tooltipMarkup_js__WEBPACK_IMPORTED_MODULE_1__.createTooltipMarkup)('section', {
    header: seriesName,
    // When series name is not specified, do not show a header line with only '-'.
    // This case always happens in tooltip.trigger: 'item'.
    noHeader: multipleSeries || !seriesNameSpecified,
    sortParam: sortParam,
    blocks: [(0,_tooltipMarkup_js__WEBPACK_IMPORTED_MODULE_1__.createTooltipMarkup)('nameValue', {
      markerType: 'item',
      markerColor: markerColor,
      // Do not mix display seriesName and itemName in one tooltip,
      // which might confuses users.
      name: inlineName,
      // name dimension might be auto assigned, where the name might
      // be not readable. So we check trim here.
      noName: !(0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.trim)(inlineName),
      value: inlineValue,
      valueType: inlineValueType,
      dataIndex: dataIndex
    })].concat(subBlocks || [])
  });
}
function formatTooltipArrayValue(value, series, dataIndex, tooltipDims, colorStr) {
  // check: category-no-encode-has-axis-data in dataset.html
  var data = series.getData();
  var isValueMultipleLine = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.reduce)(value, function (isValueMultipleLine, val, idx) {
    var dimItem = data.getDimensionInfo(idx);
    return isValueMultipleLine = isValueMultipleLine || dimItem && dimItem.tooltip !== false && dimItem.displayName != null;
  }, false);
  var inlineValues = [];
  var inlineValueTypes = [];
  var blocks = [];
  tooltipDims.length ? (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each)(tooltipDims, function (dim) {
    setEachItem((0,_data_helper_dataProvider_js__WEBPACK_IMPORTED_MODULE_2__.retrieveRawValue)(data, dataIndex, dim), dim);
  })
  // By default, all dims is used on tooltip.
  : (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_0__.each)(value, setEachItem);
  function setEachItem(val, dim) {
    var dimInfo = data.getDimensionInfo(dim);
    // If `dimInfo.tooltip` is not set, show tooltip.
    if (!dimInfo || dimInfo.otherDims.tooltip === false) {
      return;
    }
    if (isValueMultipleLine) {
      blocks.push((0,_tooltipMarkup_js__WEBPACK_IMPORTED_MODULE_1__.createTooltipMarkup)('nameValue', {
        markerType: 'subItem',
        markerColor: colorStr,
        name: dimInfo.displayName,
        value: val,
        valueType: dimInfo.type
      }));
    } else {
      inlineValues.push(val);
      inlineValueTypes.push(dimInfo.type);
    }
  }
  return {
    inlineValues: inlineValues,
    inlineValueTypes: inlineValueTypes,
    blocks: blocks
  };
}

}),
77330: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  TooltipMarkupStyleCreator: function() { return TooltipMarkupStyleCreator; },
  buildTooltipMarkup: function() { return buildTooltipMarkup; },
  createTooltipMarkup: function() { return createTooltipMarkup; },
  getPaddingFromTooltipModel: function() { return getPaddingFromTooltipModel; },
  retrieveVisualColorForTooltipMarker: function() { return retrieveVisualColorForTooltipMarker; }
});
/* ESM import */var _util_format_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10887);
/* ESM import */var _util_format_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85774);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56190);
/* ESM import */var _data_helper_dataValueHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67918);
/* ESM import */var _util_number_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48843);
/* ESM import */var _visual_tokens_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23430);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/





var TOOLTIP_LINE_HEIGHT_CSS = 'line-height:1';
function getTooltipLineHeight(textStyle) {
  var lineHeight = textStyle.lineHeight;
  if (lineHeight == null) {
    return TOOLTIP_LINE_HEIGHT_CSS;
  } else {
    return "line-height:" + (0,_util_format_js__WEBPACK_IMPORTED_MODULE_0__.encodeHTML)(lineHeight + '') + "px";
  }
}
// TODO: more textStyle option
function getTooltipTextStyle(textStyle, renderMode) {
  var nameFontColor = textStyle.color || _visual_tokens_js__WEBPACK_IMPORTED_MODULE_1__["default"].color.tertiary;
  var nameFontSize = textStyle.fontSize || 12;
  var nameFontWeight = textStyle.fontWeight || '400';
  var valueFontColor = textStyle.color || _visual_tokens_js__WEBPACK_IMPORTED_MODULE_1__["default"].color.secondary;
  var valueFontSize = textStyle.fontSize || 14;
  var valueFontWeight = textStyle.fontWeight || '900';
  if (renderMode === 'html') {
    // `textStyle` is probably from user input, should be encoded to reduce security risk.
    return {
      // eslint-disable-next-line max-len
      nameStyle: "font-size:" + (0,_util_format_js__WEBPACK_IMPORTED_MODULE_0__.encodeHTML)(nameFontSize + '') + "px;color:" + (0,_util_format_js__WEBPACK_IMPORTED_MODULE_0__.encodeHTML)(nameFontColor) + ";font-weight:" + (0,_util_format_js__WEBPACK_IMPORTED_MODULE_0__.encodeHTML)(nameFontWeight + ''),
      // eslint-disable-next-line max-len
      valueStyle: "font-size:" + (0,_util_format_js__WEBPACK_IMPORTED_MODULE_0__.encodeHTML)(valueFontSize + '') + "px;color:" + (0,_util_format_js__WEBPACK_IMPORTED_MODULE_0__.encodeHTML)(valueFontColor) + ";font-weight:" + (0,_util_format_js__WEBPACK_IMPORTED_MODULE_0__.encodeHTML)(valueFontWeight + '')
    };
  } else {
    return {
      nameStyle: {
        fontSize: nameFontSize,
        fill: nameFontColor,
        fontWeight: nameFontWeight
      },
      valueStyle: {
        fontSize: valueFontSize,
        fill: valueFontColor,
        fontWeight: valueFontWeight
      }
    };
  }
}
// See `TooltipMarkupLayoutIntent['innerGapLevel']`.
// (value from UI design)
var HTML_GAPS = [0, 10, 20, 30];
var RICH_TEXT_GAPS = ['', '\n', '\n\n', '\n\n\n'];
// eslint-disable-next-line max-len
function createTooltipMarkup(type, option) {
  option.type = type;
  return option;
}
function isSectionFragment(frag) {
  return frag.type === 'section';
}
function getBuilder(frag) {
  return isSectionFragment(frag) ? buildSection : buildNameValue;
}
function getBlockGapLevel(frag) {
  if (isSectionFragment(frag)) {
    var gapLevel_1 = 0;
    var subBlockLen = frag.blocks.length;
    var hasInnerGap_1 = subBlockLen > 1 || subBlockLen > 0 && !frag.noHeader;
    (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.each)(frag.blocks, function (subBlock) {
      var subGapLevel = getBlockGapLevel(subBlock);
      // If the some of the sub-blocks have some gaps (like 10px) inside, this block
      // should use a larger gap (like 20px) to distinguish those sub-blocks.
      if (subGapLevel >= gapLevel_1) {
        gapLevel_1 = subGapLevel + +(hasInnerGap_1 && (
        // 0 always can not be readable gap level.
        !subGapLevel
        // If no header, always keep the sub gap level. Otherwise
        // look weird in case `multipleSeries`.
        || isSectionFragment(subBlock) && !subBlock.noHeader));
      }
    });
    return gapLevel_1;
  }
  return 0;
}
function buildSection(ctx, fragment, topMarginForOuterGap, toolTipTextStyle) {
  var noHeader = fragment.noHeader;
  var gaps = getGap(getBlockGapLevel(fragment));
  var subMarkupTextList = [];
  var subBlocks = fragment.blocks || [];
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.assert)(!subBlocks || (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.isArray)(subBlocks));
  subBlocks = subBlocks || [];
  var orderMode = ctx.orderMode;
  if (fragment.sortBlocks && orderMode) {
    subBlocks = subBlocks.slice();
    var orderMap = {
      valueAsc: 'asc',
      valueDesc: 'desc'
    };
    if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.hasOwn)(orderMap, orderMode)) {
      var comparator_1 = new _data_helper_dataValueHelper_js__WEBPACK_IMPORTED_MODULE_3__.SortOrderComparator(orderMap[orderMode], null);
      subBlocks.sort(function (a, b) {
        return comparator_1.evaluate(a.sortParam, b.sortParam);
      });
    }
    // FIXME 'seriesDesc' necessary?
    else if (orderMode === 'seriesDesc') {
      subBlocks.reverse();
    }
  }
  (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.each)(subBlocks, function (subBlock, idx) {
    var valueFormatter = fragment.valueFormatter;
    var subMarkupText = getBuilder(subBlock)(
    // Inherit valueFormatter
    valueFormatter ? (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.extend)((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.extend)({}, ctx), {
      valueFormatter: valueFormatter
    }) : ctx, subBlock, idx > 0 ? gaps.html : 0, toolTipTextStyle);
    subMarkupText != null && subMarkupTextList.push(subMarkupText);
  });
  var subMarkupText = ctx.renderMode === 'richText' ? subMarkupTextList.join(gaps.richText) : wrapBlockHTML(toolTipTextStyle, subMarkupTextList.join(''), noHeader ? topMarginForOuterGap : gaps.html);
  if (noHeader) {
    return subMarkupText;
  }
  var displayableHeader = (0,_util_format_js__WEBPACK_IMPORTED_MODULE_4__.makeValueReadable)(fragment.header, 'ordinal', ctx.useUTC);
  var nameStyle = getTooltipTextStyle(toolTipTextStyle, ctx.renderMode).nameStyle;
  var tooltipLineHeight = getTooltipLineHeight(toolTipTextStyle);
  if (ctx.renderMode === 'richText') {
    return wrapInlineNameRichText(ctx, displayableHeader, nameStyle) + gaps.richText + subMarkupText;
  } else {
    return wrapBlockHTML(toolTipTextStyle, "<div style=\"" + nameStyle + ";" + tooltipLineHeight + ";\">" + (0,_util_format_js__WEBPACK_IMPORTED_MODULE_0__.encodeHTML)(displayableHeader) + '</div>' + subMarkupText, topMarginForOuterGap);
  }
}
function buildNameValue(ctx, fragment, topMarginForOuterGap, toolTipTextStyle) {
  var renderMode = ctx.renderMode;
  var noName = fragment.noName;
  var noValue = fragment.noValue;
  var noMarker = !fragment.markerType;
  var name = fragment.name;
  var useUTC = ctx.useUTC;
  var valueFormatter = fragment.valueFormatter || ctx.valueFormatter || function (value) {
    value = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.isArray)(value) ? value : [value];
    return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.map)(value, function (val, idx) {
      return (0,_util_format_js__WEBPACK_IMPORTED_MODULE_4__.makeValueReadable)(val, (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.isArray)(valueTypeOption) ? valueTypeOption[idx] : valueTypeOption, useUTC);
    });
  };
  if (noName && noValue) {
    return;
  }
  var markerStr = noMarker ? '' : ctx.markupStyleCreator.makeTooltipMarker(fragment.markerType, fragment.markerColor || _visual_tokens_js__WEBPACK_IMPORTED_MODULE_1__["default"].color.secondary, renderMode);
  var readableName = noName ? '' : (0,_util_format_js__WEBPACK_IMPORTED_MODULE_4__.makeValueReadable)(name, 'ordinal', useUTC);
  var valueTypeOption = fragment.valueType;
  var readableValueList = noValue ? [] : valueFormatter(fragment.value, fragment.dataIndex);
  var valueAlignRight = !noMarker || !noName;
  // It little weird if only value next to marker but far from marker.
  var valueCloseToMarker = !noMarker && noName;
  var _a = getTooltipTextStyle(toolTipTextStyle, renderMode),
    nameStyle = _a.nameStyle,
    valueStyle = _a.valueStyle;
  return renderMode === 'richText' ? (noMarker ? '' : markerStr) + (noName ? '' : wrapInlineNameRichText(ctx, readableName, nameStyle))
  // Value has commas inside, so use ' ' as delimiter for multiple values.
  + (noValue ? '' : wrapInlineValueRichText(ctx, readableValueList, valueAlignRight, valueCloseToMarker, valueStyle)) : wrapBlockHTML(toolTipTextStyle, (noMarker ? '' : markerStr) + (noName ? '' : wrapInlineNameHTML(readableName, !noMarker, nameStyle)) + (noValue ? '' : wrapInlineValueHTML(readableValueList, valueAlignRight, valueCloseToMarker, valueStyle)), topMarginForOuterGap);
}
/**
 * @return markupText. null/undefined means no content.
 */
function buildTooltipMarkup(fragment, markupStyleCreator, renderMode, orderMode, useUTC, toolTipTextStyle) {
  if (!fragment) {
    return;
  }
  var builder = getBuilder(fragment);
  var ctx = {
    useUTC: useUTC,
    renderMode: renderMode,
    orderMode: orderMode,
    markupStyleCreator: markupStyleCreator,
    valueFormatter: fragment.valueFormatter
  };
  return builder(ctx, fragment, 0, toolTipTextStyle);
}
function getGap(gapLevel) {
  return {
    html: HTML_GAPS[gapLevel],
    richText: RICH_TEXT_GAPS[gapLevel]
  };
}
function wrapBlockHTML(textStyle, encodedContent, topGap) {
  var clearfix = '<div style="clear:both"></div>';
  var marginCSS = "margin: " + topGap + "px 0 0";
  var tooltipLineHeight = getTooltipLineHeight(textStyle);
  return "<div style=\"" + marginCSS + ";" + tooltipLineHeight + ";\">" + encodedContent + clearfix + '</div>';
}
function wrapInlineNameHTML(name, leftHasMarker, style) {
  var marginCss = leftHasMarker ? 'margin-left:2px' : '';
  return "<span style=\"" + style + ";" + marginCss + "\">" + (0,_util_format_js__WEBPACK_IMPORTED_MODULE_0__.encodeHTML)(name) + '</span>';
}
function wrapInlineValueHTML(valueList, alignRight, valueCloseToMarker, style) {
  // Do not too close to marker, considering there are multiple values separated by spaces.
  var paddingStr = valueCloseToMarker ? '10px' : '20px';
  var alignCSS = alignRight ? "float:right;margin-left:" + paddingStr : '';
  valueList = (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.isArray)(valueList) ? valueList : [valueList];
  return "<span style=\"" + alignCSS + ";" + style + "\">"
  // Value has commas inside, so use '  ' as delimiter for multiple values.
  + (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.map)(valueList, function (value) {
    return (0,_util_format_js__WEBPACK_IMPORTED_MODULE_0__.encodeHTML)(value);
  }).join('&nbsp;&nbsp;') + '</span>';
}
function wrapInlineNameRichText(ctx, name, style) {
  return ctx.markupStyleCreator.wrapRichTextStyle(name, style);
}
function wrapInlineValueRichText(ctx, values, alignRight, valueCloseToMarker, style) {
  var styles = [style];
  var paddingLeft = valueCloseToMarker ? 10 : 20;
  alignRight && styles.push({
    padding: [0, 0, 0, paddingLeft],
    align: 'right'
  });
  // Value has commas inside, so use '  ' as delimiter for multiple values.
  return ctx.markupStyleCreator.wrapRichTextStyle((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.isArray)(values) ? values.join('  ') : values, styles);
}
function retrieveVisualColorForTooltipMarker(series, dataIndex) {
  var style = series.getData().getItemVisual(dataIndex, 'style');
  var color = style[series.visualDrawType];
  return (0,_util_format_js__WEBPACK_IMPORTED_MODULE_4__.convertToColorString)(color);
}
function getPaddingFromTooltipModel(model, renderMode) {
  var padding = model.get('padding');
  return padding != null ? padding
  // We give slightly different to look pretty.
  : renderMode === 'richText' ? [8, 10] : 10;
}
/**
 * The major feature is generate styles for `renderMode: 'richText'`.
 * But it also serves `renderMode: 'html'` to provide
 * "renderMode-independent" API.
 */
var TooltipMarkupStyleCreator = /** @class */function () {
  function TooltipMarkupStyleCreator() {
    this.richTextStyles = {};
    // Notice that "generate a style name" usually happens repeatedly when mouse is moving and
    // a tooltip is displayed. So we put the `_nextStyleNameId` as a member of each creator
    // rather than static shared by all creators (which will cause it increase to fast).
    this._nextStyleNameId = (0,_util_number_js__WEBPACK_IMPORTED_MODULE_5__.getRandomIdBase)();
  }
  TooltipMarkupStyleCreator.prototype._generateStyleName = function () {
    return '__EC_aUTo_' + this._nextStyleNameId++;
  };
  TooltipMarkupStyleCreator.prototype.makeTooltipMarker = function (markerType, colorStr, renderMode) {
    var markerId = renderMode === 'richText' ? this._generateStyleName() : null;
    var marker = (0,_util_format_js__WEBPACK_IMPORTED_MODULE_4__.getTooltipMarker)({
      color: colorStr,
      type: markerType,
      renderMode: renderMode,
      markerId: markerId
    });
    if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.isString)(marker)) {
      return marker;
    } else {
      if (false) {}
      this.richTextStyles[markerId] = marker.style;
      return marker.content;
    }
  };
  /**
   * @usage
   * ```ts
   * const styledText = markupStyleCreator.wrapRichTextStyle([
   *     // The styles will be auto merged.
   *     {
   *         fontSize: 12,
   *         color: 'blue'
   *     },
   *     {
   *         padding: 20
   *     }
   * ]);
   * ```
   */
  TooltipMarkupStyleCreator.prototype.wrapRichTextStyle = function (text, styles) {
    var finalStl = {};
    if ((0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.isArray)(styles)) {
      (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.each)(styles, function (stl) {
        return (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.extend)(finalStl, stl);
      });
    } else {
      (0,zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_2__.extend)(finalStl, styles);
    }
    var styleName = this._generateStyleName();
    this.richTextStyles[styleName] = finalStl;
    return "{" + styleName + "|" + text + "}";
  };
  return TooltipMarkupStyleCreator;
}();


}),
35534: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  install: function() { return /* binding */ install; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/conditionalExpression.js
var conditionalExpression = __webpack_require__(26128);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(56190);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/log.js
var log = __webpack_require__(29692);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/transform/filterTransform.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/



var filterTransform = {
  type: 'echarts:filter',
  // PENDING: enhance to filter by index rather than create new data
  transform: function (params) {
    // [Caveat] Fail-Fast:
    // Do not return the whole dataset unless user config indicates it explicitly.
    // For example, if no condition is specified by mistake, returning an empty result
    // is better than returning the entire raw source for the user to find the mistake.
    var upstream = params.upstream;
    var rawItem;
    var condition = (0,conditionalExpression.parseConditionalExpression)(params.config, {
      valueGetterAttrMap: (0,util.createHashMap)({
        dimension: true
      }),
      prepareGetValue: function (exprOption) {
        var errMsg = '';
        var dimLoose = exprOption.dimension;
        if (!(0,util.hasOwn)(exprOption, 'dimension')) {
          if (false) {}
          (0,log.throwError)(errMsg);
        }
        var dimInfo = upstream.getDimensionInfo(dimLoose);
        if (!dimInfo) {
          if (false) {}
          (0,log.throwError)(errMsg);
        }
        return {
          dimIdx: dimInfo.index
        };
      },
      getValue: function (param) {
        return upstream.retrieveValueFromItem(rawItem, param.dimIdx);
      }
    });
    var resultData = [];
    for (var i = 0, len = upstream.count(); i < len; i++) {
      rawItem = upstream.getRawDataItem(i);
      if (condition.evaluate()) {
        resultData.push(rawItem);
      }
    }
    return {
      data: resultData
    };
  }
};
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/types.js
var types = __webpack_require__(19081);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js
var model = __webpack_require__(44244);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/helper/dataValueHelper.js
var dataValueHelper = __webpack_require__(67918);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/transform/sortTransform.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/





var sampleLog = '';
if (false) {}
var sortTransform = {
  type: 'echarts:sort',
  transform: function (params) {
    var upstream = params.upstream;
    var config = params.config;
    var errMsg = '';
    // Normalize
    // const orderExprList: OrderExpression[] = isArray(config[0])
    //     ? config as OrderExpression[]
    //     : [config as OrderExpression];
    var orderExprList = (0,model.normalizeToArray)(config);
    if (!orderExprList.length) {
      if (false) {}
      (0,log.throwError)(errMsg);
    }
    var orderDefList = [];
    (0,util.each)(orderExprList, function (orderExpr) {
      var dimLoose = orderExpr.dimension;
      var order = orderExpr.order;
      var parserName = orderExpr.parser;
      var incomparable = orderExpr.incomparable;
      if (dimLoose == null) {
        if (false) {}
        (0,log.throwError)(errMsg);
      }
      if (order !== 'asc' && order !== 'desc') {
        if (false) {}
        (0,log.throwError)(errMsg);
      }
      if (incomparable && incomparable !== 'min' && incomparable !== 'max') {
        var errMsg_1 = '';
        if (false) {}
        (0,log.throwError)(errMsg_1);
      }
      if (order !== 'asc' && order !== 'desc') {
        var errMsg_2 = '';
        if (false) {}
        (0,log.throwError)(errMsg_2);
      }
      var dimInfo = upstream.getDimensionInfo(dimLoose);
      if (!dimInfo) {
        if (false) {}
        (0,log.throwError)(errMsg);
      }
      var parser = parserName ? (0,dataValueHelper.getRawValueParser)(parserName) : null;
      if (parserName && !parser) {
        if (false) {}
        (0,log.throwError)(errMsg);
      }
      orderDefList.push({
        dimIdx: dimInfo.index,
        parser: parser,
        comparator: new dataValueHelper.SortOrderComparator(order, incomparable)
      });
    });
    // TODO: support it?
    var sourceFormat = upstream.sourceFormat;
    if (sourceFormat !== types.SOURCE_FORMAT_ARRAY_ROWS && sourceFormat !== types.SOURCE_FORMAT_OBJECT_ROWS) {
      if (false) {}
      (0,log.throwError)(errMsg);
    }
    // Other upstream format are all array.
    var resultData = [];
    for (var i = 0, len = upstream.count(); i < len; i++) {
      resultData.push(upstream.getRawDataItem(i));
    }
    resultData.sort(function (item0, item1) {
      for (var i = 0; i < orderDefList.length; i++) {
        var orderDef = orderDefList[i];
        var val0 = upstream.retrieveValueFromItem(item0, orderDef.dimIdx);
        var val1 = upstream.retrieveValueFromItem(item1, orderDef.dimIdx);
        if (orderDef.parser) {
          val0 = orderDef.parser(val0);
          val1 = orderDef.parser(val1);
        }
        var result = orderDef.comparator.evaluate(val0, val1);
        if (result !== 0) {
          return result;
        }
      }
      return 0;
    });
    return {
      data: resultData
    };
  }
};
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/transform/install.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  registers.registerTransform(filterTransform);
  registers.registerTransform(sortTransform);
}

}),
71278: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12012);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56190);
/* ESM import */var _visual_visualDefault_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2842);
/* ESM import */var _visual_VisualMapping_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44538);
/* ESM import */var _visual_visualSolution_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5114);
/* ESM import */var _util_model_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44244);
/* ESM import */var _util_number_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48843);
/* ESM import */var _model_Component_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81757);
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









var mapVisual = _visual_VisualMapping_js__WEBPACK_IMPORTED_MODULE_0__["default"].mapVisual;
var eachVisual = _visual_VisualMapping_js__WEBPACK_IMPORTED_MODULE_0__["default"].eachVisual;
var isArray = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isArray;
var each = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.each;
var asc = _util_number_js__WEBPACK_IMPORTED_MODULE_2__.asc;
var linearMap = _util_number_js__WEBPACK_IMPORTED_MODULE_2__.linearMap;
var VisualMapModel = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__extends)(VisualMapModel, _super);
  function VisualMapModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = VisualMapModel.type;
    _this.stateList = ['inRange', 'outOfRange'];
    _this.replacableOptionKeys = ['inRange', 'outOfRange', 'target', 'controller', 'color'];
    _this.layoutMode = {
      type: 'box',
      ignoreSize: true
    };
    /**
     * [lowerBound, upperBound]
     */
    _this.dataBound = [-Infinity, Infinity];
    _this.targetVisuals = {};
    _this.controllerVisuals = {};
    return _this;
  }
  VisualMapModel.prototype.init = function (option, parentModel, ecModel) {
    this.mergeDefaultAndTheme(option, ecModel);
  };
  /**
   * @protected
   */
  VisualMapModel.prototype.optionUpdated = function (newOption, isInit) {
    var thisOption = this.option;
    !isInit && _visual_visualSolution_js__WEBPACK_IMPORTED_MODULE_5__.replaceVisualOption(thisOption, newOption, this.replacableOptionKeys);
    this.textStyleModel = this.getModel('textStyle');
    this.resetItemSize();
    this.completeVisualOption();
  };
  /**
   * @protected
   */
  VisualMapModel.prototype.resetVisual = function (supplementVisualOption) {
    var stateList = this.stateList;
    supplementVisualOption = zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.bind(supplementVisualOption, this);
    this.controllerVisuals = _visual_visualSolution_js__WEBPACK_IMPORTED_MODULE_5__.createVisualMappings(this.option.controller, stateList, supplementVisualOption);
    this.targetVisuals = _visual_visualSolution_js__WEBPACK_IMPORTED_MODULE_5__.createVisualMappings(this.option.target, stateList, supplementVisualOption);
  };
  /**
   * @public
   */
  VisualMapModel.prototype.getItemSymbol = function () {
    return null;
  };
  /**
   * @return An array of series indices.
   */
  VisualMapModel.prototype.getTargetSeriesIndices = function () {
    var optionSeriesId = this.option.seriesId;
    var optionSeriesIndex = this.option.seriesIndex;
    if (optionSeriesIndex == null && optionSeriesId == null) {
      optionSeriesIndex = 'all';
    }
    var seriesModels = _util_model_js__WEBPACK_IMPORTED_MODULE_6__.queryReferringComponents(this.ecModel, 'series', {
      index: optionSeriesIndex,
      id: optionSeriesId
    }, {
      useDefault: false,
      enableAll: true,
      enableNone: false
    }).models;
    return zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.map(seriesModels, function (seriesModel) {
      return seriesModel.componentIndex;
    });
  };
  /**
   * @public
   */
  VisualMapModel.prototype.eachTargetSeries = function (callback, context) {
    zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.each(this.getTargetSeriesIndices(), function (seriesIndex) {
      var seriesModel = this.ecModel.getSeriesByIndex(seriesIndex);
      if (seriesModel) {
        callback.call(context, seriesModel);
      }
    }, this);
  };
  /**
   * @pubilc
   */
  VisualMapModel.prototype.isTargetSeries = function (seriesModel) {
    var is = false;
    this.eachTargetSeries(function (model) {
      model === seriesModel && (is = true);
    });
    return is;
  };
  /**
   * @example
   * this.formatValueText(someVal); // format single numeric value to text.
   * this.formatValueText(someVal, true); // format single category value to text.
   * this.formatValueText([min, max]); // format numeric min-max to text.
   * this.formatValueText([this.dataBound[0], max]); // using data lower bound.
   * this.formatValueText([min, this.dataBound[1]]); // using data upper bound.
   *
   * @param value Real value, or this.dataBound[0 or 1].
   * @param isCategory Only available when value is number.
   * @param edgeSymbols Open-close symbol when value is interval.
   * @protected
   */
  VisualMapModel.prototype.formatValueText = function (value, isCategory, edgeSymbols) {
    var option = this.option;
    var precision = option.precision;
    var dataBound = this.dataBound;
    var formatter = option.formatter;
    var isMinMax;
    edgeSymbols = edgeSymbols || ['<', '>'];
    if (zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isArray(value)) {
      value = value.slice();
      isMinMax = true;
    }
    var textValue = isCategory ? value // Value is string when isCategory
    : isMinMax ? [toFixed(value[0]), toFixed(value[1])] : toFixed(value);
    if (zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isString(formatter)) {
      return formatter.replace('{value}', isMinMax ? textValue[0] : textValue).replace('{value2}', isMinMax ? textValue[1] : textValue);
    } else if (zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.isFunction(formatter)) {
      return isMinMax ? formatter(value[0], value[1]) : formatter(value);
    }
    if (isMinMax) {
      if (value[0] === dataBound[0]) {
        return edgeSymbols[0] + ' ' + textValue[1];
      } else if (value[1] === dataBound[1]) {
        return edgeSymbols[1] + ' ' + textValue[0];
      } else {
        return textValue[0] + ' - ' + textValue[1];
      }
    } else {
      // Format single value (includes category case).
      return textValue;
    }
    function toFixed(val) {
      return val === dataBound[0] ? 'min' : val === dataBound[1] ? 'max' : (+val).toFixed(Math.min(precision, 20));
    }
  };
  /**
   * @protected
   */
  VisualMapModel.prototype.resetExtent = function () {
    var thisOption = this.option;
    // Can not calculate data extent by data here.
    // Because series and data may be modified in processing stage.
    // So we do not support the feature "auto min/max".
    var extent = asc([thisOption.min, thisOption.max]);
    this._dataExtent = extent;
  };
  /**
   * PENDING:
   * delete this method if no outer usage.
   *
   * Return  Concrete dimension. If null/undefined is returned, no dimension is used.
   */
  // getDataDimension(data: SeriesData) {
  //     const optDim = this.option.dimension;
  //     if (optDim != null) {
  //         return data.getDimension(optDim);
  //     }
  //     const dimNames = data.dimensions;
  //     for (let i = dimNames.length - 1; i >= 0; i--) {
  //         const dimName = dimNames[i];
  //         const dimInfo = data.getDimensionInfo(dimName);
  //         if (!dimInfo.isCalculationCoord) {
  //             return dimName;
  //         }
  //     }
  // }
  VisualMapModel.prototype.getDataDimensionIndex = function (data) {
    var optDim = this.option.dimension;
    if (optDim != null) {
      return data.getDimensionIndex(optDim);
    }
    var dimNames = data.dimensions;
    for (var i = dimNames.length - 1; i >= 0; i--) {
      var dimName = dimNames[i];
      var dimInfo = data.getDimensionInfo(dimName);
      if (!dimInfo.isCalculationCoord) {
        return dimInfo.storeDimIndex;
      }
    }
  };
  VisualMapModel.prototype.getExtent = function () {
    return this._dataExtent.slice();
  };
  VisualMapModel.prototype.completeVisualOption = function () {
    var ecModel = this.ecModel;
    var thisOption = this.option;
    var base = {
      inRange: thisOption.inRange,
      outOfRange: thisOption.outOfRange
    };
    var target = thisOption.target || (thisOption.target = {});
    var controller = thisOption.controller || (thisOption.controller = {});
    zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.merge(target, base); // Do not override
    zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.merge(controller, base); // Do not override
    var isCategory = this.isCategory();
    completeSingle.call(this, target);
    completeSingle.call(this, controller);
    completeInactive.call(this, target, 'inRange', 'outOfRange');
    // completeInactive.call(this, target, 'outOfRange', 'inRange');
    completeController.call(this, controller);
    function completeSingle(base) {
      // Compatible with ec2 dataRange.color.
      // The mapping order of dataRange.color is: [high value, ..., low value]
      // whereas inRange.color and outOfRange.color is [low value, ..., high value]
      // Notice: ec2 has no inverse.
      if (isArray(thisOption.color)
      // If there has been inRange: {symbol: ...}, adding color is a mistake.
      // So adding color only when no inRange defined.
      && !base.inRange) {
        base.inRange = {
          color: thisOption.color.slice().reverse()
        };
      }
      // Compatible with previous logic, always give a default color, otherwise
      // simple config with no inRange and outOfRange will not work.
      // Originally we use visualMap.color as the default color, but setOption at
      // the second time the default color will be erased. So we change to use
      // constant DEFAULT_COLOR.
      // If user do not want the default color, set inRange: {color: null}.
      base.inRange = base.inRange || {
        color: ecModel.get('gradientColor')
      };
    }
    function completeInactive(base, stateExist, stateAbsent) {
      var optExist = base[stateExist];
      var optAbsent = base[stateAbsent];
      if (optExist && !optAbsent) {
        optAbsent = base[stateAbsent] = {};
        each(optExist, function (visualData, visualType) {
          if (!_visual_VisualMapping_js__WEBPACK_IMPORTED_MODULE_0__["default"].isValidType(visualType)) {
            return;
          }
          var defa = _visual_visualDefault_js__WEBPACK_IMPORTED_MODULE_7__["default"].get(visualType, 'inactive', isCategory);
          if (defa != null) {
            optAbsent[visualType] = defa;
            // Compatibable with ec2:
            // Only inactive color to rgba(0,0,0,0) can not
            // make label transparent, so use opacity also.
            if (visualType === 'color' && !optAbsent.hasOwnProperty('opacity') && !optAbsent.hasOwnProperty('colorAlpha')) {
              optAbsent.opacity = [0, 0];
            }
          }
        });
      }
    }
    function completeController(controller) {
      var symbolExists = (controller.inRange || {}).symbol || (controller.outOfRange || {}).symbol;
      var symbolSizeExists = (controller.inRange || {}).symbolSize || (controller.outOfRange || {}).symbolSize;
      var inactiveColor = this.get('inactiveColor');
      var itemSymbol = this.getItemSymbol();
      var defaultSymbol = itemSymbol || 'roundRect';
      each(this.stateList, function (state) {
        var itemSize = this.itemSize;
        var visuals = controller[state];
        // Set inactive color for controller if no other color
        // attr (like colorAlpha) specified.
        if (!visuals) {
          visuals = controller[state] = {
            color: isCategory ? inactiveColor : [inactiveColor]
          };
        }
        // Consistent symbol and symbolSize if not specified.
        if (visuals.symbol == null) {
          visuals.symbol = symbolExists && zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.clone(symbolExists) || (isCategory ? defaultSymbol : [defaultSymbol]);
        }
        if (visuals.symbolSize == null) {
          visuals.symbolSize = symbolSizeExists && zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.clone(symbolSizeExists) || (isCategory ? itemSize[0] : [itemSize[0], itemSize[0]]);
        }
        // Filter none
        visuals.symbol = mapVisual(visuals.symbol, function (symbol) {
          return symbol === 'none' ? defaultSymbol : symbol;
        });
        // Normalize symbolSize
        var symbolSize = visuals.symbolSize;
        if (symbolSize != null) {
          var max_1 = -Infinity;
          // symbolSize can be object when categories defined.
          eachVisual(symbolSize, function (value) {
            value > max_1 && (max_1 = value);
          });
          visuals.symbolSize = mapVisual(symbolSize, function (value) {
            return linearMap(value, [0, max_1], [0, itemSize[0]], true);
          });
        }
      }, this);
    }
  };
  VisualMapModel.prototype.resetItemSize = function () {
    this.itemSize = [parseFloat(this.get('itemWidth')), parseFloat(this.get('itemHeight'))];
  };
  VisualMapModel.prototype.isCategory = function () {
    return !!this.option.categories;
  };
  /**
   * @public
   * @abstract
   */
  VisualMapModel.prototype.setSelected = function (selected) {};
  VisualMapModel.prototype.getSelected = function () {
    return null;
  };
  /**
   * @public
   * @abstract
   */
  VisualMapModel.prototype.getValueState = function (value) {
    return null;
  };
  /**
   * FIXME
   * Do not publish to thirt-part-dev temporarily
   * util the interface is stable. (Should it return
   * a function but not visual meta?)
   *
   * @pubilc
   * @abstract
   * @param getColorVisual
   *        params: value, valueState
   *        return: color
   * @return {Object} visualMeta
   *        should includes {stops, outerColors}
   *        outerColor means [colorBeyondMinValue, colorBeyondMaxValue]
   */
  VisualMapModel.prototype.getVisualMeta = function (getColorVisual) {
    return null;
  };
  VisualMapModel.type = 'visualMap';
  VisualMapModel.dependencies = ['series'];
  VisualMapModel.defaultOption = {
    show: true,
    // zlevel: 0,
    z: 4,
    // seriesIndex: 'all',
    min: 0,
    max: 200,
    left: 0,
    right: null,
    top: null,
    bottom: 0,
    itemWidth: null,
    itemHeight: null,
    inverse: false,
    orient: 'vertical',
    backgroundColor: _visual_tokens_js__WEBPACK_IMPORTED_MODULE_8__["default"].color.transparent,
    borderColor: _visual_tokens_js__WEBPACK_IMPORTED_MODULE_8__["default"].color.borderTint,
    contentColor: _visual_tokens_js__WEBPACK_IMPORTED_MODULE_8__["default"].color.theme["0"],
    inactiveColor: _visual_tokens_js__WEBPACK_IMPORTED_MODULE_8__["default"].color.disabled,
    borderWidth: 0,
    padding: _visual_tokens_js__WEBPACK_IMPORTED_MODULE_8__["default"].size.m,
    // 接受数组分别设定上右下左边距，同css
    textGap: 10,
    precision: 0,
    textStyle: {
      color: _visual_tokens_js__WEBPACK_IMPORTED_MODULE_8__["default"].color.secondary // 值域文字颜色
    }
  };
  return VisualMapModel;
}(_model_Component_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
/* ESM default export */ __webpack_exports__["default"] = (VisualMapModel);

}),
55168: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* ESM import */var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12012);
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56190);
/* ESM import */var _util_graphic_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68903);
/* ESM import */var _util_format_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85774);
/* ESM import */var _util_layout_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22265);
/* ESM import */var _visual_VisualMapping_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44538);
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







var VisualMapView = /** @class */function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(VisualMapView, _super);
  function VisualMapView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = VisualMapView.type;
    _this.autoPositionValues = {
      left: 1,
      right: 1,
      top: 1,
      bottom: 1
    };
    return _this;
  }
  VisualMapView.prototype.init = function (ecModel, api) {
    this.ecModel = ecModel;
    this.api = api;
  };
  /**
   * @protected
   */
  VisualMapView.prototype.render = function (visualMapModel, ecModel, api, payload // TODO: TYPE
  ) {
    this.visualMapModel = visualMapModel;
    if (visualMapModel.get('show') === false) {
      this.group.removeAll();
      return;
    }
    this.doRender(visualMapModel, ecModel, api, payload);
  };
  /**
   * @protected
   */
  VisualMapView.prototype.renderBackground = function (group) {
    var visualMapModel = this.visualMapModel;
    var padding = _util_format_js__WEBPACK_IMPORTED_MODULE_2__.normalizeCssArray(visualMapModel.get('padding') || 0);
    var rect = group.getBoundingRect();
    group.add(new _util_graphic_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
      z2: -1,
      silent: true,
      shape: {
        x: rect.x - padding[3],
        y: rect.y - padding[0],
        width: rect.width + padding[3] + padding[1],
        height: rect.height + padding[0] + padding[2]
      },
      style: {
        fill: visualMapModel.get('backgroundColor'),
        stroke: visualMapModel.get('borderColor'),
        lineWidth: visualMapModel.get('borderWidth')
      }
    }));
  };
  /**
   * @protected
   * @param targetValue can be Infinity or -Infinity
   * @param visualCluster Only can be 'color' 'opacity' 'symbol' 'symbolSize'
   * @param opts
   * @param opts.forceState Specify state, instead of using getValueState method.
   * @param opts.convertOpacityToAlpha For color gradient in controller widget.
   * @return {*} Visual value.
   */
  VisualMapView.prototype.getControllerVisual = function (targetValue, visualCluster, opts) {
    opts = opts || {};
    var forceState = opts.forceState;
    var visualMapModel = this.visualMapModel;
    var visualObj = {};
    // Default values.
    if (visualCluster === 'color') {
      var defaultColor = visualMapModel.get('contentColor');
      visualObj.color = defaultColor;
    }
    function getter(key) {
      return visualObj[key];
    }
    function setter(key, value) {
      visualObj[key] = value;
    }
    var mappings = visualMapModel.controllerVisuals[forceState || visualMapModel.getValueState(targetValue)];
    var visualTypes = _visual_VisualMapping_js__WEBPACK_IMPORTED_MODULE_4__["default"].prepareVisualTypes(mappings);
    zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_5__.each(visualTypes, function (type) {
      var visualMapping = mappings[type];
      if (opts.convertOpacityToAlpha && type === 'opacity') {
        type = 'colorAlpha';
        visualMapping = mappings.__alphaForOpacity;
      }
      if (_visual_VisualMapping_js__WEBPACK_IMPORTED_MODULE_4__["default"].dependsOn(type, visualCluster)) {
        visualMapping && visualMapping.applyVisual(targetValue, getter, setter);
      }
    });
    return visualObj[visualCluster];
  };
  VisualMapView.prototype.positionGroup = function (group) {
    var model = this.visualMapModel;
    var api = this.api;
    var refContainer = _util_layout_js__WEBPACK_IMPORTED_MODULE_6__.createBoxLayoutReference(model, api).refContainer;
    _util_layout_js__WEBPACK_IMPORTED_MODULE_6__.positionElement(group, model.getBoxLayoutParams(), refContainer);
  };
  VisualMapView.prototype.doRender = function (visualMapModel, ecModel, api, payload) {};
  VisualMapView.type = 'visualMap';
  return VisualMapView;
}(_view_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* ESM default export */ __webpack_exports__["default"] = (VisualMapView);

}),
97787: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getItemAlign: function() { return getItemAlign; },
  makeHighDownBatch: function() { return makeHighDownBatch; }
});
/* ESM import */var zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56190);
/* ESM import */var _util_layout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22265);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


var paramsSet = [['left', 'right', 'width'], ['top', 'bottom', 'height']];
/**
 * @param visualMapModel
 * @param api
 * @param itemSize always [short, long]
 * @return {string} 'left' or 'right' or 'top' or 'bottom'
 */
function getItemAlign(visualMapModel, api, itemSize) {
  var modelOption = visualMapModel.option;
  var itemAlign = modelOption.align;
  if (itemAlign != null && itemAlign !== 'auto') {
    return itemAlign;
  }
  // Auto decision align.
  var ecSize = {
    width: api.getWidth(),
    height: api.getHeight()
  };
  var realIndex = modelOption.orient === 'horizontal' ? 1 : 0;
  var reals = paramsSet[realIndex];
  var fakeValue = [0, null, 10];
  var layoutInput = {};
  for (var i = 0; i < 3; i++) {
    layoutInput[paramsSet[1 - realIndex][i]] = fakeValue[i];
    layoutInput[reals[i]] = i === 2 ? itemSize[0] : modelOption[reals[i]];
  }
  var rParam = [['x', 'width', 3], ['y', 'height', 0]][realIndex];
  var rect = (0,_util_layout_js__WEBPACK_IMPORTED_MODULE_0__.getLayoutRect)(layoutInput, ecSize, modelOption.padding);
  return reals[(rect.margin[rParam[2]] || 0) + rect[rParam[0]] + rect[rParam[1]] * 0.5 < ecSize[rParam[1]] * 0.5 ? 0 : 1];
}
/**
 * Prepare dataIndex for outside usage, where dataIndex means rawIndex, and
 * dataIndexInside means filtered index.
 */
// TODO: TYPE more specified payload types.
function makeHighDownBatch(batch, visualMapModel) {
  zrender_lib_core_util_js__WEBPACK_IMPORTED_MODULE_1__.each(batch || [], function (batchItem) {
    if (batchItem.dataIndex != null) {
      batchItem.dataIndexInside = batchItem.dataIndex;
      batchItem.dataIndex = null;
    }
    batchItem.highlightKey = 'visualMap' + (visualMapModel ? visualMapModel.componentIndex : '');
  });
  return batch;
}

}),
83024: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  install: function() { return install; }
});
/* ESM import */var _extension_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50215);
/* ESM import */var _installVisualMapContinuous_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34442);
/* ESM import */var _installVisualMapPiecewise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54688);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  (0,_extension_js__WEBPACK_IMPORTED_MODULE_0__.use)(_installVisualMapContinuous_js__WEBPACK_IMPORTED_MODULE_1__.install);
  (0,_extension_js__WEBPACK_IMPORTED_MODULE_0__.use)(_installVisualMapPiecewise_js__WEBPACK_IMPORTED_MODULE_2__.install);
  // Do not install './dataZoomSelect',
  // since it only work for toolbox dataZoom.
}

}),
72507: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ installCommon; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/visualMapAction.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/
var visualMapActionInfo = {
  type: 'selectDataRange',
  event: 'dataRangeSelected',
  // FIXME use updateView appears wrong
  update: 'update'
};
var visualMapActionHander = function (payload, ecModel) {
  ecModel.eachComponent({
    mainType: 'visualMap',
    query: payload
  }, function (model) {
    model.setSelected(payload.selected);
  });
};
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(56190);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/visualSolution.js
var visualSolution = __webpack_require__(5114);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/VisualMapping.js
var VisualMapping = __webpack_require__(44538);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/helper.js
var helper = __webpack_require__(54912);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/visualEncoding.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/




var visualMapEncodingHandlers = [{
  createOnAllSeries: true,
  reset: function (seriesModel, ecModel) {
    var resetDefines = [];
    ecModel.eachComponent('visualMap', function (visualMapModel) {
      var pipelineContext = seriesModel.pipelineContext;
      if (!visualMapModel.isTargetSeries(seriesModel) || pipelineContext && pipelineContext.large) {
        return;
      }
      resetDefines.push(visualSolution.incrementalApplyVisual(visualMapModel.stateList, visualMapModel.targetVisuals, util.bind(visualMapModel.getValueState, visualMapModel), visualMapModel.getDataDimensionIndex(seriesModel.getData())));
    });
    return resetDefines;
  }
},
// Only support color.
{
  createOnAllSeries: true,
  reset: function (seriesModel, ecModel) {
    var data = seriesModel.getData();
    var visualMetaList = [];
    ecModel.eachComponent('visualMap', function (visualMapModel) {
      if (visualMapModel.isTargetSeries(seriesModel)) {
        var visualMeta = visualMapModel.getVisualMeta(util.bind(getColorVisual, null, seriesModel, visualMapModel)) || {
          stops: [],
          outerColors: []
        };
        var dimIdx = visualMapModel.getDataDimensionIndex(data);
        if (dimIdx >= 0) {
          // visualMeta.dimension should be dimension index, but not concrete dimension.
          visualMeta.dimension = dimIdx;
          visualMetaList.push(visualMeta);
        }
      }
    });
    // console.log(JSON.stringify(visualMetaList.map(a => a.stops)));
    seriesModel.getData().setVisual('visualMeta', visualMetaList);
  }
}];
// FIXME
// performance and export for heatmap?
// value can be Infinity or -Infinity
function getColorVisual(seriesModel, visualMapModel, value, valueState) {
  var mappings = visualMapModel.targetVisuals[valueState];
  var visualTypes = VisualMapping["default"].prepareVisualTypes(mappings);
  var resultVisual = {
    color: (0,helper.getVisualFromData)(seriesModel.getData(), 'color') // default color.
  };
  for (var i = 0, len = visualTypes.length; i < len; i++) {
    var type = visualTypes[i];
    var mapping = mappings[type === 'opacity' ? '__alphaForOpacity' : type];
    mapping && mapping.applyVisual(value, getVisual, setVisual);
  }
  return resultVisual.color;
  function getVisual(key) {
    return resultVisual[key];
  }
  function setVisual(key, value) {
    resultVisual[key] = value;
  }
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/preprocessor.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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

var each = util.each;
function visualMapPreprocessor(option) {
  var visualMap = option && option.visualMap;
  if (!util.isArray(visualMap)) {
    visualMap = visualMap ? [visualMap] : [];
  }
  each(visualMap, function (opt) {
    if (!opt) {
      return;
    }
    // rename splitList to pieces
    if (has(opt, 'splitList') && !has(opt, 'pieces')) {
      opt.pieces = opt.splitList;
      delete opt.splitList;
    }
    var pieces = opt.pieces;
    if (pieces && util.isArray(pieces)) {
      each(pieces, function (piece) {
        if (util.isObject(piece)) {
          if (has(piece, 'start') && !has(piece, 'min')) {
            piece.min = piece.start;
          }
          if (has(piece, 'end') && !has(piece, 'max')) {
            piece.max = piece.end;
          }
        }
      });
    }
  });
}
function has(obj, name) {
  return obj && obj.hasOwnProperty && obj.hasOwnProperty(name);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/installCommon.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  registers.registerSubTypeDefaulter('visualMap', function (option) {
    // Compatible with ec2, when splitNumber === 0, continuous visualMap will be used.
    return !option.categories && (!(option.pieces ? option.pieces.length > 0 : option.splitNumber > 0) || option.calculable) ? 'continuous' : 'piecewise';
  });
  registers.registerAction(visualMapActionInfo, visualMapActionHander);
  (0,util.each)(visualMapEncodingHandlers, function (handler) {
    registers.registerVisual(registers.PRIORITY.VISUAL.COMPONENT, handler);
  });
  registers.registerPreprocessor(visualMapPreprocessor);
}

}),
34442: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  install: function() { return /* binding */ install; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(12012);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(56190);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/VisualMapModel.js
var VisualMapModel = __webpack_require__(71278);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(48843);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/component.js
var component = __webpack_require__(86452);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/tokens.js
var tokens = __webpack_require__(23430);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/ContinuousModel.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/






// Constant
var DEFAULT_BAR_BOUND = [20, 140];
var ContinuousModel_ContinuousModel = /** @class */function (_super) {
  (0,tslib_es6.__extends)(ContinuousModel, _super);
  function ContinuousModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = ContinuousModel.type;
    return _this;
  }
  /**
   * @override
   */
  ContinuousModel.prototype.optionUpdated = function (newOption, isInit) {
    _super.prototype.optionUpdated.apply(this, arguments);
    this.resetExtent();
    this.resetVisual(function (mappingOption) {
      mappingOption.mappingMethod = 'linear';
      mappingOption.dataExtent = this.getExtent();
    });
    this._resetRange();
  };
  /**
   * @protected
   * @override
   */
  ContinuousModel.prototype.resetItemSize = function () {
    _super.prototype.resetItemSize.apply(this, arguments);
    var itemSize = this.itemSize;
    (itemSize[0] == null || isNaN(itemSize[0])) && (itemSize[0] = DEFAULT_BAR_BOUND[0]);
    (itemSize[1] == null || isNaN(itemSize[1])) && (itemSize[1] = DEFAULT_BAR_BOUND[1]);
  };
  /**
   * @private
   */
  ContinuousModel.prototype._resetRange = function () {
    var dataExtent = this.getExtent();
    var range = this.option.range;
    if (!range || range.auto) {
      // `range` should always be array (so we don't use other
      // value like 'auto') for user-friend. (consider getOption).
      dataExtent.auto = 1;
      this.option.range = dataExtent;
    } else if (util.isArray(range)) {
      if (range[0] > range[1]) {
        range.reverse();
      }
      range[0] = Math.max(range[0], dataExtent[0]);
      range[1] = Math.min(range[1], dataExtent[1]);
    }
  };
  /**
   * @protected
   * @override
   */
  ContinuousModel.prototype.completeVisualOption = function () {
    _super.prototype.completeVisualOption.apply(this, arguments);
    util.each(this.stateList, function (state) {
      var symbolSize = this.option.controller[state].symbolSize;
      if (symbolSize && symbolSize[0] !== symbolSize[1]) {
        symbolSize[0] = symbolSize[1] / 3; // For good looking.
      }
    }, this);
  };
  /**
   * @override
   */
  ContinuousModel.prototype.setSelected = function (selected) {
    this.option.range = selected.slice();
    this._resetRange();
  };
  /**
   * @public
   */
  ContinuousModel.prototype.getSelected = function () {
    var dataExtent = this.getExtent();
    var dataInterval = number.asc((this.get('range') || []).slice());
    // Clamp
    dataInterval[0] > dataExtent[1] && (dataInterval[0] = dataExtent[1]);
    dataInterval[1] > dataExtent[1] && (dataInterval[1] = dataExtent[1]);
    dataInterval[0] < dataExtent[0] && (dataInterval[0] = dataExtent[0]);
    dataInterval[1] < dataExtent[0] && (dataInterval[1] = dataExtent[0]);
    return dataInterval;
  };
  /**
   * @override
   */
  ContinuousModel.prototype.getValueState = function (value) {
    var range = this.option.range;
    var dataExtent = this.getExtent();
    var unboundedRange = util.retrieve2(this.option.unboundedRange, true);
    return (unboundedRange && range[0] <= dataExtent[0] || range[0] <= value) && (unboundedRange && range[1] >= dataExtent[1] || value <= range[1]) ? 'inRange' : 'outOfRange';
  };
  ContinuousModel.prototype.findTargetDataIndices = function (range) {
    var result = [];
    this.eachTargetSeries(function (seriesModel) {
      var dataIndices = [];
      var data = seriesModel.getData();
      data.each(this.getDataDimensionIndex(data), function (value, dataIndex) {
        range[0] <= value && value <= range[1] && dataIndices.push(dataIndex);
      }, this);
      result.push({
        seriesId: seriesModel.id,
        dataIndex: dataIndices
      });
    }, this);
    return result;
  };
  /**
   * @implement
   */
  ContinuousModel.prototype.getVisualMeta = function (getColorVisual) {
    var oVals = getColorStopValues(this, 'outOfRange', this.getExtent());
    var iVals = getColorStopValues(this, 'inRange', this.option.range.slice());
    var stops = [];
    function setStop(value, valueState) {
      stops.push({
        value: value,
        color: getColorVisual(value, valueState)
      });
    }
    // Format to: outOfRange -- inRange -- outOfRange.
    var iIdx = 0;
    var oIdx = 0;
    var iLen = iVals.length;
    var oLen = oVals.length;
    for (; oIdx < oLen && (!iVals.length || oVals[oIdx] <= iVals[0]); oIdx++) {
      // If oVal[oIdx] === iVals[iIdx], oVal[oIdx] should be ignored.
      if (oVals[oIdx] < iVals[iIdx]) {
        setStop(oVals[oIdx], 'outOfRange');
      }
    }
    for (var first = 1; iIdx < iLen; iIdx++, first = 0) {
      // If range is full, value beyond min, max will be clamped.
      // make a singularity
      first && stops.length && setStop(iVals[iIdx], 'outOfRange');
      setStop(iVals[iIdx], 'inRange');
    }
    for (var first = 1; oIdx < oLen; oIdx++) {
      if (!iVals.length || iVals[iVals.length - 1] < oVals[oIdx]) {
        // make a singularity
        if (first) {
          stops.length && setStop(stops[stops.length - 1].value, 'outOfRange');
          first = 0;
        }
        setStop(oVals[oIdx], 'outOfRange');
      }
    }
    var stopsLen = stops.length;
    return {
      stops: stops,
      outerColors: [stopsLen ? stops[0].color : 'transparent', stopsLen ? stops[stopsLen - 1].color : 'transparent']
    };
  };
  ContinuousModel.type = 'visualMap.continuous';
  ContinuousModel.defaultOption = (0,component.inheritDefaultOption)(VisualMapModel["default"].defaultOption, {
    align: 'auto',
    calculable: false,
    hoverLink: true,
    realtime: true,
    handleIcon: 'path://M-11.39,9.77h0a3.5,3.5,0,0,1-3.5,3.5h-22a3.5,3.5,0,0,1-3.5-3.5h0a3.5,3.5,0,0,1,3.5-3.5h22A3.5,3.5,0,0,1-11.39,9.77Z',
    handleSize: '120%',
    handleStyle: {
      borderColor: tokens["default"].color.neutral00,
      borderWidth: 1
    },
    indicatorIcon: 'circle',
    indicatorSize: '50%',
    indicatorStyle: {
      borderColor: tokens["default"].color.neutral00,
      borderWidth: 2,
      shadowBlur: 2,
      shadowOffsetX: 1,
      shadowOffsetY: 1,
      shadowColor: tokens["default"].color.shadow
    }
    // emphasis: {
    //     handleStyle: {
    //         shadowBlur: 3,
    //         shadowOffsetX: 1,
    //         shadowOffsetY: 1,
    //         shadowColor: tokens.color.shadow
    //     }
    // }
  });
  return ContinuousModel;
}(VisualMapModel["default"]);
function getColorStopValues(visualMapModel, valueState, dataExtent) {
  if (dataExtent[0] === dataExtent[1]) {
    return dataExtent.slice();
  }
  // When using colorHue mapping, it is not linear color any more.
  // Moreover, canvas gradient seems not to be accurate linear.
  // FIXME
  // Should be arbitrary value 100? or based on pixel size?
  var count = 200;
  var step = (dataExtent[1] - dataExtent[0]) / count;
  var value = dataExtent[0];
  var stopValues = [];
  for (var i = 0; i <= count && value < dataExtent[1]; i++) {
    stopValues.push(value);
    value += step;
  }
  stopValues.push(dataExtent[1]);
  return stopValues;
}
/* ESM default export */ var visualMap_ContinuousModel = (ContinuousModel_ContinuousModel);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/LinearGradient.js
var LinearGradient = __webpack_require__(30930);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/event.js
var core_event = __webpack_require__(85908);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/VisualMapView.js
var VisualMapView = __webpack_require__(55168);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Text.js
var Text = __webpack_require__(98856);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Group.js
var Group = __webpack_require__(27208);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Rect.js + 1 modules
var Rect = __webpack_require__(68903);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js
var graphic = __webpack_require__(42562);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Polygon.js
var Polygon = __webpack_require__(84951);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/sliderMove.js
var sliderMove = __webpack_require__(17549);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/helper.js
var helper = __webpack_require__(97787);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js
var model = __webpack_require__(44244);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/contain/text.js
var contain_text = __webpack_require__(50122);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/states.js
var states = __webpack_require__(5645);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/symbol.js
var symbol = __webpack_require__(42692);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Image.js
var Image = __webpack_require__(12262);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/innerStore.js
var innerStore = __webpack_require__(12212);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelStyle.js
var labelStyle = __webpack_require__(57235);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/event.js
var util_event = __webpack_require__(35111);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/ContinuousView.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

















var linearMap = number.linearMap;
var each = util.each;
var mathMin = Math.min;
var mathMax = Math.max;
// Arbitrary value
var HOVER_LINK_SIZE = 12;
var HOVER_LINK_OUT = 6;
// Notice:
// Any "interval" should be by the order of [low, high].
// "handle0" (handleIndex === 0) maps to
// low data value: this._dataInterval[0] and has low coord.
// "handle1" (handleIndex === 1) maps to
// high data value: this._dataInterval[1] and has high coord.
// The logic of transform is implemented in this._createBarGroup.
var ContinuousView_ContinuousView = /** @class */function (_super) {
  (0,tslib_es6.__extends)(ContinuousView, _super);
  function ContinuousView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = ContinuousView.type;
    _this._shapes = {};
    _this._dataInterval = [];
    _this._handleEnds = [];
    _this._hoverLinkDataIndices = [];
    return _this;
  }
  ContinuousView.prototype.init = function (ecModel, api) {
    _super.prototype.init.call(this, ecModel, api);
    this._hoverLinkFromSeriesMouseOver = util.bind(this._hoverLinkFromSeriesMouseOver, this);
    this._hideIndicator = util.bind(this._hideIndicator, this);
  };
  ContinuousView.prototype.doRender = function (visualMapModel, ecModel, api, payload) {
    if (!payload || payload.type !== 'selectDataRange' || payload.from !== this.uid) {
      this._buildView();
    }
  };
  ContinuousView.prototype._buildView = function () {
    this.group.removeAll();
    var visualMapModel = this.visualMapModel;
    var thisGroup = this.group;
    this._orient = visualMapModel.get('orient');
    this._useHandle = visualMapModel.get('calculable');
    this._resetInterval();
    this._renderBar(thisGroup);
    var dataRangeText = visualMapModel.get('text');
    this._renderEndsText(thisGroup, dataRangeText, 0);
    this._renderEndsText(thisGroup, dataRangeText, 1);
    // Do this for background size calculation.
    this._updateView(true);
    // After updating view, inner shapes is built completely,
    // and then background can be rendered.
    this.renderBackground(thisGroup);
    // Real update view
    this._updateView();
    this._enableHoverLinkToSeries();
    this._enableHoverLinkFromSeries();
    this.positionGroup(thisGroup);
  };
  ContinuousView.prototype._renderEndsText = function (group, dataRangeText, endsIndex) {
    if (!dataRangeText) {
      return;
    }
    // Compatible with ec2, text[0] map to high value, text[1] map low value.
    var text = dataRangeText[1 - endsIndex];
    text = text != null ? text + '' : '';
    var visualMapModel = this.visualMapModel;
    var textGap = visualMapModel.get('textGap');
    var itemSize = visualMapModel.itemSize;
    var barGroup = this._shapes.mainGroup;
    var position = this._applyTransform([itemSize[0] / 2, endsIndex === 0 ? -textGap : itemSize[1] + textGap], barGroup);
    var align = this._applyTransform(endsIndex === 0 ? 'bottom' : 'top', barGroup);
    var orient = this._orient;
    var textStyleModel = this.visualMapModel.textStyleModel;
    this.group.add(new Text["default"]({
      style: (0,labelStyle.createTextStyle)(textStyleModel, {
        x: position[0],
        y: position[1],
        verticalAlign: textStyleModel.get('verticalAlign') || (orient === 'horizontal' ? 'middle' : align),
        align: textStyleModel.get('align') || (orient === 'horizontal' ? align : 'center'),
        text: text
      })
    }));
  };
  ContinuousView.prototype._renderBar = function (targetGroup) {
    var visualMapModel = this.visualMapModel;
    var shapes = this._shapes;
    var itemSize = visualMapModel.itemSize;
    var orient = this._orient;
    var useHandle = this._useHandle;
    var itemAlign = helper.getItemAlign(visualMapModel, this.api, itemSize);
    var mainGroup = shapes.mainGroup = this._createBarGroup(itemAlign);
    var gradientBarGroup = new Group["default"]();
    mainGroup.add(gradientBarGroup);
    // Bar
    gradientBarGroup.add(shapes.outOfRange = createPolygon());
    gradientBarGroup.add(shapes.inRange = createPolygon(null, useHandle ? getCursor(this._orient) : null, util.bind(this._dragHandle, this, 'all', false), util.bind(this._dragHandle, this, 'all', true)));
    // A border radius clip.
    gradientBarGroup.setClipPath(new Rect["default"]({
      shape: {
        x: 0,
        y: 0,
        width: itemSize[0],
        height: itemSize[1],
        r: 3
      }
    }));
    var textRect = visualMapModel.textStyleModel.getTextRect('国');
    var textSize = mathMax(textRect.width, textRect.height);
    // Handle
    if (useHandle) {
      shapes.handleThumbs = [];
      shapes.handleLabels = [];
      shapes.handleLabelPoints = [];
      this._createHandle(visualMapModel, mainGroup, 0, itemSize, textSize, orient);
      this._createHandle(visualMapModel, mainGroup, 1, itemSize, textSize, orient);
    }
    this._createIndicator(visualMapModel, mainGroup, itemSize, textSize, orient);
    targetGroup.add(mainGroup);
  };
  ContinuousView.prototype._createHandle = function (visualMapModel, mainGroup, handleIndex, itemSize, textSize, orient) {
    var onDrift = util.bind(this._dragHandle, this, handleIndex, false);
    var onDragEnd = util.bind(this._dragHandle, this, handleIndex, true);
    var handleSize = (0,contain_text.parsePercent)(visualMapModel.get('handleSize'), itemSize[0]);
    var handleThumb = (0,symbol.createSymbol)(visualMapModel.get('handleIcon'), -handleSize / 2, -handleSize / 2, handleSize, handleSize, null, true);
    var cursor = getCursor(this._orient);
    handleThumb.attr({
      cursor: cursor,
      draggable: true,
      drift: onDrift,
      ondragend: onDragEnd,
      onmousemove: function (e) {
        core_event.stop(e.event);
      }
    });
    handleThumb.x = itemSize[0] / 2;
    handleThumb.useStyle(visualMapModel.getModel('handleStyle').getItemStyle());
    handleThumb.setStyle({
      strokeNoScale: true,
      strokeFirst: true
    });
    handleThumb.style.lineWidth *= 2;
    handleThumb.ensureState('emphasis').style = visualMapModel.getModel(['emphasis', 'handleStyle']).getItemStyle();
    (0,states.setAsHighDownDispatcher)(handleThumb, true);
    mainGroup.add(handleThumb);
    // Text is always horizontal layout but should not be effected by
    // transform (orient/inverse). So label is built separately but not
    // use zrender/graphic/helper/RectText, and is located based on view
    // group (according to handleLabelPoint) but not barGroup.
    var textStyleModel = this.visualMapModel.textStyleModel;
    var handleLabel = new Text["default"]({
      cursor: cursor,
      draggable: true,
      drift: onDrift,
      onmousemove: function (e) {
        // For mobile device, prevent screen slider on the button.
        core_event.stop(e.event);
      },
      ondragend: onDragEnd,
      style: (0,labelStyle.createTextStyle)(textStyleModel, {
        x: 0,
        y: 0,
        text: ''
      })
    });
    handleLabel.ensureState('blur').style = {
      opacity: 0.1
    };
    handleLabel.stateTransition = {
      duration: 200
    };
    this.group.add(handleLabel);
    var handleLabelPoint = [handleSize, 0];
    var shapes = this._shapes;
    shapes.handleThumbs[handleIndex] = handleThumb;
    shapes.handleLabelPoints[handleIndex] = handleLabelPoint;
    shapes.handleLabels[handleIndex] = handleLabel;
  };
  ContinuousView.prototype._createIndicator = function (visualMapModel, mainGroup, itemSize, textSize, orient) {
    var scale = (0,contain_text.parsePercent)(visualMapModel.get('indicatorSize'), itemSize[0]);
    var indicator = (0,symbol.createSymbol)(visualMapModel.get('indicatorIcon'), -scale / 2, -scale / 2, scale, scale, null, true);
    indicator.attr({
      cursor: 'move',
      invisible: true,
      silent: true,
      x: itemSize[0] / 2
    });
    var indicatorStyle = visualMapModel.getModel('indicatorStyle').getItemStyle();
    if (indicator instanceof Image["default"]) {
      var pathStyle = indicator.style;
      indicator.useStyle(util.extend({
        // TODO other properties like x, y ?
        image: pathStyle.image,
        x: pathStyle.x,
        y: pathStyle.y,
        width: pathStyle.width,
        height: pathStyle.height
      }, indicatorStyle));
    } else {
      indicator.useStyle(indicatorStyle);
    }
    mainGroup.add(indicator);
    var textStyleModel = this.visualMapModel.textStyleModel;
    var indicatorLabel = new Text["default"]({
      silent: true,
      invisible: true,
      style: (0,labelStyle.createTextStyle)(textStyleModel, {
        x: 0,
        y: 0,
        text: ''
      })
    });
    this.group.add(indicatorLabel);
    var indicatorLabelPoint = [(orient === 'horizontal' ? textSize / 2 : HOVER_LINK_OUT) + itemSize[0] / 2, 0];
    var shapes = this._shapes;
    shapes.indicator = indicator;
    shapes.indicatorLabel = indicatorLabel;
    shapes.indicatorLabelPoint = indicatorLabelPoint;
    this._firstShowIndicator = true;
  };
  ContinuousView.prototype._dragHandle = function (handleIndex, isEnd,
  // dx is event from ondragend if isEnd is true. It's not used
  dx, dy) {
    if (!this._useHandle) {
      return;
    }
    this._dragging = !isEnd;
    if (!isEnd) {
      // Transform dx, dy to bar coordination.
      var vertex = this._applyTransform([dx, dy], this._shapes.mainGroup, true);
      this._updateInterval(handleIndex, vertex[1]);
      this._hideIndicator();
      // Considering realtime, update view should be executed
      // before dispatch action.
      this._updateView();
    }
    // dragEnd do not dispatch action when realtime.
    if (isEnd === !this.visualMapModel.get('realtime')) {
      // jshint ignore:line
      this.api.dispatchAction({
        type: 'selectDataRange',
        from: this.uid,
        visualMapId: this.visualMapModel.id,
        selected: this._dataInterval.slice()
      });
    }
    if (isEnd) {
      !this._hovering && this._clearHoverLinkToSeries();
    } else if (useHoverLinkOnHandle(this.visualMapModel)) {
      this._doHoverLinkToSeries(this._handleEnds[handleIndex], false);
    }
  };
  ContinuousView.prototype._resetInterval = function () {
    var visualMapModel = this.visualMapModel;
    var dataInterval = this._dataInterval = visualMapModel.getSelected();
    var dataExtent = visualMapModel.getExtent();
    var sizeExtent = [0, visualMapModel.itemSize[1]];
    this._handleEnds = [linearMap(dataInterval[0], dataExtent, sizeExtent, true), linearMap(dataInterval[1], dataExtent, sizeExtent, true)];
  };
  /**
   * @private
   * @param {(number|string)} handleIndex 0 or 1 or 'all'
   * @param {number} dx
   * @param {number} dy
   */
  ContinuousView.prototype._updateInterval = function (handleIndex, delta) {
    delta = delta || 0;
    var visualMapModel = this.visualMapModel;
    var handleEnds = this._handleEnds;
    var sizeExtent = [0, visualMapModel.itemSize[1]];
    (0,sliderMove["default"])(delta, handleEnds, sizeExtent, handleIndex,
    // cross is forbidden
    0);
    var dataExtent = visualMapModel.getExtent();
    // Update data interval.
    this._dataInterval = [linearMap(handleEnds[0], sizeExtent, dataExtent, true), linearMap(handleEnds[1], sizeExtent, dataExtent, true)];
  };
  ContinuousView.prototype._updateView = function (forSketch) {
    var visualMapModel = this.visualMapModel;
    var dataExtent = visualMapModel.getExtent();
    var shapes = this._shapes;
    var outOfRangeHandleEnds = [0, visualMapModel.itemSize[1]];
    var inRangeHandleEnds = forSketch ? outOfRangeHandleEnds : this._handleEnds;
    var visualInRange = this._createBarVisual(this._dataInterval, dataExtent, inRangeHandleEnds, 'inRange');
    var visualOutOfRange = this._createBarVisual(dataExtent, dataExtent, outOfRangeHandleEnds, 'outOfRange');
    shapes.inRange.setStyle({
      fill: visualInRange.barColor
      // opacity: visualInRange.opacity
    }).setShape('points', visualInRange.barPoints);
    shapes.outOfRange.setStyle({
      fill: visualOutOfRange.barColor
      // opacity: visualOutOfRange.opacity
    }).setShape('points', visualOutOfRange.barPoints);
    this._updateHandle(inRangeHandleEnds, visualInRange);
  };
  ContinuousView.prototype._createBarVisual = function (dataInterval, dataExtent, handleEnds, forceState) {
    var opts = {
      forceState: forceState,
      convertOpacityToAlpha: true
    };
    var colorStops = this._makeColorGradient(dataInterval, opts);
    var symbolSizes = [this.getControllerVisual(dataInterval[0], 'symbolSize', opts), this.getControllerVisual(dataInterval[1], 'symbolSize', opts)];
    var barPoints = this._createBarPoints(handleEnds, symbolSizes);
    return {
      barColor: new LinearGradient["default"](0, 0, 0, 1, colorStops),
      barPoints: barPoints,
      handlesColor: [colorStops[0].color, colorStops[colorStops.length - 1].color]
    };
  };
  ContinuousView.prototype._makeColorGradient = function (dataInterval, opts) {
    // Considering colorHue, which is not linear, so we have to sample
    // to calculate gradient color stops, but not only calculate head
    // and tail.
    var sampleNumber = 100; // Arbitrary value.
    var colorStops = [];
    var step = (dataInterval[1] - dataInterval[0]) / sampleNumber;
    colorStops.push({
      color: this.getControllerVisual(dataInterval[0], 'color', opts),
      offset: 0
    });
    for (var i = 1; i < sampleNumber; i++) {
      var currValue = dataInterval[0] + step * i;
      if (currValue > dataInterval[1]) {
        break;
      }
      colorStops.push({
        color: this.getControllerVisual(currValue, 'color', opts),
        offset: i / sampleNumber
      });
    }
    colorStops.push({
      color: this.getControllerVisual(dataInterval[1], 'color', opts),
      offset: 1
    });
    return colorStops;
  };
  ContinuousView.prototype._createBarPoints = function (handleEnds, symbolSizes) {
    var itemSize = this.visualMapModel.itemSize;
    return [[itemSize[0] - symbolSizes[0], handleEnds[0]], [itemSize[0], handleEnds[0]], [itemSize[0], handleEnds[1]], [itemSize[0] - symbolSizes[1], handleEnds[1]]];
  };
  ContinuousView.prototype._createBarGroup = function (itemAlign) {
    var orient = this._orient;
    var inverse = this.visualMapModel.get('inverse');
    return new Group["default"](orient === 'horizontal' && !inverse ? {
      scaleX: itemAlign === 'bottom' ? 1 : -1,
      rotation: Math.PI / 2
    } : orient === 'horizontal' && inverse ? {
      scaleX: itemAlign === 'bottom' ? -1 : 1,
      rotation: -Math.PI / 2
    } : orient === 'vertical' && !inverse ? {
      scaleX: itemAlign === 'left' ? 1 : -1,
      scaleY: -1
    } : {
      scaleX: itemAlign === 'left' ? 1 : -1
    });
  };
  ContinuousView.prototype._updateHandle = function (handleEnds, visualInRange) {
    if (!this._useHandle) {
      return;
    }
    var shapes = this._shapes;
    var visualMapModel = this.visualMapModel;
    var handleThumbs = shapes.handleThumbs;
    var handleLabels = shapes.handleLabels;
    var itemSize = visualMapModel.itemSize;
    var dataExtent = visualMapModel.getExtent();
    var align = this._applyTransform('left', shapes.mainGroup);
    each([0, 1], function (handleIndex) {
      var handleThumb = handleThumbs[handleIndex];
      handleThumb.setStyle('fill', visualInRange.handlesColor[handleIndex]);
      handleThumb.y = handleEnds[handleIndex];
      var val = linearMap(handleEnds[handleIndex], [0, itemSize[1]], dataExtent, true);
      var symbolSize = this.getControllerVisual(val, 'symbolSize');
      handleThumb.scaleX = handleThumb.scaleY = symbolSize / itemSize[0];
      handleThumb.x = itemSize[0] - symbolSize / 2;
      // Update handle label position.
      var textPoint = graphic.applyTransform(shapes.handleLabelPoints[handleIndex], graphic.getTransform(handleThumb, this.group));
      if (this._orient === 'horizontal') {
        // If visualMap controls symbol size, an additional offset needs to be added to labels to avoid collision at minimum size.
        // Offset reaches value of 0 at "maximum" position, so maximum position is not altered at all.
        var minimumOffset = align === 'left' || align === 'top' ? (itemSize[0] - symbolSize) / 2 : (itemSize[0] - symbolSize) / -2;
        textPoint[1] += minimumOffset;
      }
      handleLabels[handleIndex].setStyle({
        x: textPoint[0],
        y: textPoint[1],
        text: visualMapModel.formatValueText(this._dataInterval[handleIndex]),
        verticalAlign: 'middle',
        align: this._orient === 'vertical' ? this._applyTransform('left', shapes.mainGroup) : 'center'
      });
    }, this);
  };
  ContinuousView.prototype._showIndicator = function (cursorValue, textValue, rangeSymbol, halfHoverLinkSize) {
    var visualMapModel = this.visualMapModel;
    var dataExtent = visualMapModel.getExtent();
    var itemSize = visualMapModel.itemSize;
    var sizeExtent = [0, itemSize[1]];
    var shapes = this._shapes;
    var indicator = shapes.indicator;
    if (!indicator) {
      return;
    }
    indicator.attr('invisible', false);
    var opts = {
      convertOpacityToAlpha: true
    };
    var color = this.getControllerVisual(cursorValue, 'color', opts);
    var symbolSize = this.getControllerVisual(cursorValue, 'symbolSize');
    var y = linearMap(cursorValue, dataExtent, sizeExtent, true);
    var x = itemSize[0] - symbolSize / 2;
    var oldIndicatorPos = {
      x: indicator.x,
      y: indicator.y
    };
    // Update handle label position.
    indicator.y = y;
    indicator.x = x;
    var textPoint = graphic.applyTransform(shapes.indicatorLabelPoint, graphic.getTransform(indicator, this.group));
    var indicatorLabel = shapes.indicatorLabel;
    indicatorLabel.attr('invisible', false);
    var align = this._applyTransform('left', shapes.mainGroup);
    var orient = this._orient;
    var isHorizontal = orient === 'horizontal';
    indicatorLabel.setStyle({
      text: (rangeSymbol ? rangeSymbol : '') + visualMapModel.formatValueText(textValue),
      verticalAlign: isHorizontal ? align : 'middle',
      align: isHorizontal ? 'center' : align
    });
    var indicatorNewProps = {
      x: x,
      y: y,
      style: {
        fill: color
      }
    };
    var labelNewProps = {
      style: {
        x: textPoint[0],
        y: textPoint[1]
      }
    };
    if (visualMapModel.ecModel.isAnimationEnabled() && !this._firstShowIndicator) {
      var animationCfg = {
        duration: 100,
        easing: 'cubicInOut',
        additive: true
      };
      indicator.x = oldIndicatorPos.x;
      indicator.y = oldIndicatorPos.y;
      indicator.animateTo(indicatorNewProps, animationCfg);
      indicatorLabel.animateTo(labelNewProps, animationCfg);
    } else {
      indicator.attr(indicatorNewProps);
      indicatorLabel.attr(labelNewProps);
    }
    this._firstShowIndicator = false;
    var handleLabels = this._shapes.handleLabels;
    if (handleLabels) {
      for (var i = 0; i < handleLabels.length; i++) {
        // Fade out handle labels.
        // NOTE: Must use api enter/leave on emphasis/blur/select state. Or the global states manager will change it.
        this.api.enterBlur(handleLabels[i]);
      }
    }
  };
  ContinuousView.prototype._enableHoverLinkToSeries = function () {
    var self = this;
    this._shapes.mainGroup.on('mousemove', function (e) {
      self._hovering = true;
      if (!self._dragging) {
        var itemSize = self.visualMapModel.itemSize;
        var pos = self._applyTransform([e.offsetX, e.offsetY], self._shapes.mainGroup, true, true);
        // For hover link show when hover handle, which might be
        // below or upper than sizeExtent.
        pos[1] = mathMin(mathMax(0, pos[1]), itemSize[1]);
        self._doHoverLinkToSeries(pos[1], 0 <= pos[0] && pos[0] <= itemSize[0]);
      }
    }).on('mouseout', function () {
      // When mouse is out of handle, hoverLink still need
      // to be displayed when realtime is set as false.
      self._hovering = false;
      !self._dragging && self._clearHoverLinkToSeries();
    });
  };
  ContinuousView.prototype._enableHoverLinkFromSeries = function () {
    var zr = this.api.getZr();
    if (this.visualMapModel.option.hoverLink) {
      zr.on('mouseover', this._hoverLinkFromSeriesMouseOver, this);
      zr.on('mouseout', this._hideIndicator, this);
    } else {
      this._clearHoverLinkFromSeries();
    }
  };
  ContinuousView.prototype._doHoverLinkToSeries = function (cursorPos, hoverOnBar) {
    var visualMapModel = this.visualMapModel;
    var itemSize = visualMapModel.itemSize;
    if (!visualMapModel.option.hoverLink) {
      return;
    }
    var sizeExtent = [0, itemSize[1]];
    var dataExtent = visualMapModel.getExtent();
    // For hover link show when hover handle, which might be below or upper than sizeExtent.
    cursorPos = mathMin(mathMax(sizeExtent[0], cursorPos), sizeExtent[1]);
    var halfHoverLinkSize = getHalfHoverLinkSize(visualMapModel, dataExtent, sizeExtent);
    var hoverRange = [cursorPos - halfHoverLinkSize, cursorPos + halfHoverLinkSize];
    var cursorValue = linearMap(cursorPos, sizeExtent, dataExtent, true);
    var valueRange = [linearMap(hoverRange[0], sizeExtent, dataExtent, true), linearMap(hoverRange[1], sizeExtent, dataExtent, true)];
    // Consider data range is out of visualMap range, see test/visualMap-continuous.html,
    // where china and india has very large population.
    hoverRange[0] < sizeExtent[0] && (valueRange[0] = -Infinity);
    hoverRange[1] > sizeExtent[1] && (valueRange[1] = Infinity);
    // Do not show indicator when mouse is over handle,
    // otherwise labels overlap, especially when dragging.
    if (hoverOnBar) {
      if (valueRange[0] === -Infinity) {
        this._showIndicator(cursorValue, valueRange[1], '< ', halfHoverLinkSize);
      } else if (valueRange[1] === Infinity) {
        this._showIndicator(cursorValue, valueRange[0], '> ', halfHoverLinkSize);
      } else {
        this._showIndicator(cursorValue, cursorValue, '≈ ', halfHoverLinkSize);
      }
    }
    // When realtime is set as false, handles, which are in barGroup,
    // also trigger hoverLink, which help user to realize where they
    // focus on when dragging. (see test/heatmap-large.html)
    // When realtime is set as true, highlight will not show when hover
    // handle, because the label on handle, which displays a exact value
    // but not range, might mislead users.
    var oldBatch = this._hoverLinkDataIndices;
    var newBatch = [];
    if (hoverOnBar || useHoverLinkOnHandle(visualMapModel)) {
      newBatch = this._hoverLinkDataIndices = visualMapModel.findTargetDataIndices(valueRange);
    }
    var resultBatches = model.compressBatches(oldBatch, newBatch);
    this._dispatchHighDown('downplay', helper.makeHighDownBatch(resultBatches[0], visualMapModel));
    this._dispatchHighDown('highlight', helper.makeHighDownBatch(resultBatches[1], visualMapModel));
  };
  ContinuousView.prototype._hoverLinkFromSeriesMouseOver = function (e) {
    var ecData;
    (0,util_event.findEventDispatcher)(e.target, function (target) {
      var currECData = (0,innerStore.getECData)(target);
      if (currECData.dataIndex != null) {
        ecData = currECData;
        return true;
      }
    }, true);
    if (!ecData) {
      return;
    }
    var dataModel = this.ecModel.getSeriesByIndex(ecData.seriesIndex);
    var visualMapModel = this.visualMapModel;
    if (!visualMapModel.isTargetSeries(dataModel)) {
      return;
    }
    var data = dataModel.getData(ecData.dataType);
    var value = data.getStore().get(visualMapModel.getDataDimensionIndex(data), ecData.dataIndex);
    if (!isNaN(value)) {
      this._showIndicator(value, value);
    }
  };
  ContinuousView.prototype._hideIndicator = function () {
    var shapes = this._shapes;
    shapes.indicator && shapes.indicator.attr('invisible', true);
    shapes.indicatorLabel && shapes.indicatorLabel.attr('invisible', true);
    var handleLabels = this._shapes.handleLabels;
    if (handleLabels) {
      for (var i = 0; i < handleLabels.length; i++) {
        // Fade out handle labels.
        // NOTE: Must use api enter/leave on emphasis/blur/select state. Or the global states manager will change it.
        this.api.leaveBlur(handleLabels[i]);
      }
    }
  };
  ContinuousView.prototype._clearHoverLinkToSeries = function () {
    this._hideIndicator();
    var indices = this._hoverLinkDataIndices;
    this._dispatchHighDown('downplay', helper.makeHighDownBatch(indices, this.visualMapModel));
    indices.length = 0;
  };
  ContinuousView.prototype._clearHoverLinkFromSeries = function () {
    this._hideIndicator();
    var zr = this.api.getZr();
    zr.off('mouseover', this._hoverLinkFromSeriesMouseOver);
    zr.off('mouseout', this._hideIndicator);
  };
  ContinuousView.prototype._applyTransform = function (vertex, element, inverse, global) {
    var transform = graphic.getTransform(element, global ? null : this.group);
    return util.isArray(vertex) ? graphic.applyTransform(vertex, transform, inverse) : graphic.transformDirection(vertex, transform, inverse);
  };
  // TODO: TYPE more specified payload types.
  ContinuousView.prototype._dispatchHighDown = function (type, batch) {
    batch && batch.length && this.api.dispatchAction({
      type: type,
      batch: batch
    });
  };
  /**
   * @override
   */
  ContinuousView.prototype.dispose = function () {
    this._clearHoverLinkFromSeries();
    this._clearHoverLinkToSeries();
  };
  ContinuousView.type = 'visualMap.continuous';
  return ContinuousView;
}(VisualMapView["default"]);
function createPolygon(points, cursor, onDrift, onDragEnd) {
  return new Polygon["default"]({
    shape: {
      points: points
    },
    draggable: !!onDrift,
    cursor: cursor,
    drift: onDrift,
    onmousemove: function (e) {
      // For mobile device, prevent screen slider on the button.
      core_event.stop(e.event);
    },
    ondragend: onDragEnd
  });
}
function getHalfHoverLinkSize(visualMapModel, dataExtent, sizeExtent) {
  var halfHoverLinkSize = HOVER_LINK_SIZE / 2;
  var hoverLinkDataSize = visualMapModel.get('hoverLinkDataSize');
  if (hoverLinkDataSize) {
    halfHoverLinkSize = linearMap(hoverLinkDataSize, dataExtent, sizeExtent, true) / 2;
  }
  return halfHoverLinkSize;
}
function useHoverLinkOnHandle(visualMapModel) {
  var hoverLinkOnHandle = visualMapModel.get('hoverLinkOnHandle');
  return !!(hoverLinkOnHandle == null ? visualMapModel.get('realtime') : hoverLinkOnHandle);
}
function getCursor(orient) {
  return orient === 'vertical' ? 'ns-resize' : 'ew-resize';
}
/* ESM default export */ var visualMap_ContinuousView = (ContinuousView_ContinuousView);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/installCommon.js + 3 modules
var installCommon = __webpack_require__(72507);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/installVisualMapContinuous.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  registers.registerComponentModel(visualMap_ContinuousModel);
  registers.registerComponentView(visualMap_ContinuousView);
  (0,installCommon["default"])(registers);
}

}),
54688: (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  install: function() { return /* binding */ install; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(12012);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(56190);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/VisualMapModel.js
var VisualMapModel = __webpack_require__(71278);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/VisualMapping.js
var VisualMapping = __webpack_require__(44538);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/visualDefault.js
var visualDefault = __webpack_require__(2842);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(48843);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/component.js
var component = __webpack_require__(86452);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/PiecewiseModel.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/







var PiecewiseModel_PiecewiseModel = /** @class */function (_super) {
  (0,tslib_es6.__extends)(PiecewiseModel, _super);
  function PiecewiseModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = PiecewiseModel.type;
    /**
     * The order is always [low, ..., high].
     * [{text: string, interval: Array.<number>}, ...]
     */
    _this._pieceList = [];
    return _this;
  }
  PiecewiseModel.prototype.optionUpdated = function (newOption, isInit) {
    _super.prototype.optionUpdated.apply(this, arguments);
    this.resetExtent();
    var mode = this._mode = this._determineMode();
    this._pieceList = [];
    resetMethods[this._mode].call(this, this._pieceList);
    this._resetSelected(newOption, isInit);
    var categories = this.option.categories;
    this.resetVisual(function (mappingOption, state) {
      if (mode === 'categories') {
        mappingOption.mappingMethod = 'category';
        mappingOption.categories = util.clone(categories);
      } else {
        mappingOption.dataExtent = this.getExtent();
        mappingOption.mappingMethod = 'piecewise';
        mappingOption.pieceList = util.map(this._pieceList, function (piece) {
          piece = util.clone(piece);
          if (state !== 'inRange') {
            // FIXME
            // outOfRange do not support special visual in pieces.
            piece.visual = null;
          }
          return piece;
        });
      }
    });
  };
  /**
   * @protected
   * @override
   */
  PiecewiseModel.prototype.completeVisualOption = function () {
    // Consider this case:
    // visualMap: {
    //      pieces: [{symbol: 'circle', lt: 0}, {symbol: 'rect', gte: 0}]
    // }
    // where no inRange/outOfRange set but only pieces. So we should make
    // default inRange/outOfRange for this case, otherwise visuals that only
    // appear in `pieces` will not be taken into account in visual encoding.
    var option = this.option;
    var visualTypesInPieces = {};
    var visualTypes = VisualMapping["default"].listVisualTypes();
    var isCategory = this.isCategory();
    util.each(option.pieces, function (piece) {
      util.each(visualTypes, function (visualType) {
        if (piece.hasOwnProperty(visualType)) {
          visualTypesInPieces[visualType] = 1;
        }
      });
    });
    util.each(visualTypesInPieces, function (v, visualType) {
      var exists = false;
      util.each(this.stateList, function (state) {
        exists = exists || has(option, state, visualType) || has(option.target, state, visualType);
      }, this);
      !exists && util.each(this.stateList, function (state) {
        (option[state] || (option[state] = {}))[visualType] = visualDefault["default"].get(visualType, state === 'inRange' ? 'active' : 'inactive', isCategory);
      });
    }, this);
    function has(obj, state, visualType) {
      return obj && obj[state] && obj[state].hasOwnProperty(visualType);
    }
    _super.prototype.completeVisualOption.apply(this, arguments);
  };
  PiecewiseModel.prototype._resetSelected = function (newOption, isInit) {
    var thisOption = this.option;
    var pieceList = this._pieceList;
    // Selected do not merge but all override.
    var selected = (isInit ? thisOption : newOption).selected || {};
    thisOption.selected = selected;
    // Consider 'not specified' means true.
    util.each(pieceList, function (piece, index) {
      var key = this.getSelectedMapKey(piece);
      if (!selected.hasOwnProperty(key)) {
        selected[key] = true;
      }
    }, this);
    if (thisOption.selectedMode === 'single') {
      // Ensure there is only one selected.
      var hasSel_1 = false;
      util.each(pieceList, function (piece, index) {
        var key = this.getSelectedMapKey(piece);
        if (selected[key]) {
          hasSel_1 ? selected[key] = false : hasSel_1 = true;
        }
      }, this);
    }
    // thisOption.selectedMode === 'multiple', default: all selected.
  };
  /**
   * @public
   */
  PiecewiseModel.prototype.getItemSymbol = function () {
    return this.get('itemSymbol');
  };
  /**
   * @public
   */
  PiecewiseModel.prototype.getSelectedMapKey = function (piece) {
    return this._mode === 'categories' ? piece.value + '' : piece.index + '';
  };
  /**
   * @public
   */
  PiecewiseModel.prototype.getPieceList = function () {
    return this._pieceList;
  };
  /**
   * @return {string}
   */
  PiecewiseModel.prototype._determineMode = function () {
    var option = this.option;
    return option.pieces && option.pieces.length > 0 ? 'pieces' : this.option.categories ? 'categories' : 'splitNumber';
  };
  /**
   * @override
   */
  PiecewiseModel.prototype.setSelected = function (selected) {
    this.option.selected = util.clone(selected);
  };
  /**
   * @override
   */
  PiecewiseModel.prototype.getValueState = function (value) {
    var index = VisualMapping["default"].findPieceIndex(value, this._pieceList);
    return index != null ? this.option.selected[this.getSelectedMapKey(this._pieceList[index])] ? 'inRange' : 'outOfRange' : 'outOfRange';
  };
  /**
   * @public
   * @param pieceIndex piece index in visualMapModel.getPieceList()
   */
  PiecewiseModel.prototype.findTargetDataIndices = function (pieceIndex) {
    var result = [];
    var pieceList = this._pieceList;
    this.eachTargetSeries(function (seriesModel) {
      var dataIndices = [];
      var data = seriesModel.getData();
      data.each(this.getDataDimensionIndex(data), function (value, dataIndex) {
        // Should always base on model pieceList, because it is order sensitive.
        var pIdx = VisualMapping["default"].findPieceIndex(value, pieceList);
        pIdx === pieceIndex && dataIndices.push(dataIndex);
      }, this);
      result.push({
        seriesId: seriesModel.id,
        dataIndex: dataIndices
      });
    }, this);
    return result;
  };
  /**
   * @private
   * @param piece piece.value or piece.interval is required.
   * @return  Can be Infinity or -Infinity
   */
  PiecewiseModel.prototype.getRepresentValue = function (piece) {
    var representValue;
    if (this.isCategory()) {
      representValue = piece.value;
    } else {
      if (piece.value != null) {
        representValue = piece.value;
      } else {
        var pieceInterval = piece.interval || [];
        representValue = pieceInterval[0] === -Infinity && pieceInterval[1] === Infinity ? 0 : (pieceInterval[0] + pieceInterval[1]) / 2;
      }
    }
    return representValue;
  };
  PiecewiseModel.prototype.getVisualMeta = function (getColorVisual) {
    // Do not support category. (category axis is ordinal, numerical)
    if (this.isCategory()) {
      return;
    }
    var stops = [];
    var outerColors = ['', ''];
    var visualMapModel = this;
    function setStop(interval, valueState) {
      var representValue = visualMapModel.getRepresentValue({
        interval: interval
      }); // Not category
      if (!valueState) {
        valueState = visualMapModel.getValueState(representValue);
      }
      var color = getColorVisual(representValue, valueState);
      if (interval[0] === -Infinity) {
        outerColors[0] = color;
      } else if (interval[1] === Infinity) {
        outerColors[1] = color;
      } else {
        stops.push({
          value: interval[0],
          color: color
        }, {
          value: interval[1],
          color: color
        });
      }
    }
    // Suplement
    var pieceList = this._pieceList.slice();
    if (!pieceList.length) {
      pieceList.push({
        interval: [-Infinity, Infinity]
      });
    } else {
      var edge = pieceList[0].interval[0];
      edge !== -Infinity && pieceList.unshift({
        interval: [-Infinity, edge]
      });
      edge = pieceList[pieceList.length - 1].interval[1];
      edge !== Infinity && pieceList.push({
        interval: [edge, Infinity]
      });
    }
    var curr = -Infinity;
    util.each(pieceList, function (piece) {
      var interval = piece.interval;
      if (interval) {
        // Fulfill gap.
        interval[0] > curr && setStop([curr, interval[0]], 'outOfRange');
        setStop(interval.slice());
        curr = interval[1];
      }
    }, this);
    return {
      stops: stops,
      outerColors: outerColors
    };
  };
  PiecewiseModel.type = 'visualMap.piecewise';
  PiecewiseModel.defaultOption = (0,component.inheritDefaultOption)(VisualMapModel["default"].defaultOption, {
    selected: null,
    minOpen: false,
    maxOpen: false,
    align: 'auto',
    itemWidth: 20,
    itemHeight: 14,
    itemSymbol: 'roundRect',
    pieces: null,
    categories: null,
    splitNumber: 5,
    selectedMode: 'multiple',
    itemGap: 10,
    hoverLink: true // Enable hover highlight.
  });
  return PiecewiseModel;
}(VisualMapModel["default"]);
;
/**
 * Key is this._mode
 * @type {Object}
 * @this {module:echarts/component/viusalMap/PiecewiseMode}
 */
var resetMethods = {
  splitNumber: function (outPieceList) {
    var thisOption = this.option;
    var precision = Math.min(thisOption.precision, 20);
    var dataExtent = this.getExtent();
    var splitNumber = thisOption.splitNumber;
    splitNumber = Math.max(parseInt(splitNumber, 10), 1);
    thisOption.splitNumber = splitNumber;
    var splitStep = (dataExtent[1] - dataExtent[0]) / splitNumber;
    // Precision auto-adaption
    while (+splitStep.toFixed(precision) !== splitStep && precision < 5) {
      precision++;
    }
    thisOption.precision = precision;
    splitStep = +splitStep.toFixed(precision);
    if (thisOption.minOpen) {
      outPieceList.push({
        interval: [-Infinity, dataExtent[0]],
        close: [0, 0]
      });
    }
    for (var index = 0, curr = dataExtent[0]; index < splitNumber; curr += splitStep, index++) {
      var max = index === splitNumber - 1 ? dataExtent[1] : curr + splitStep;
      outPieceList.push({
        interval: [curr, max],
        close: [1, 1]
      });
    }
    if (thisOption.maxOpen) {
      outPieceList.push({
        interval: [dataExtent[1], Infinity],
        close: [0, 0]
      });
    }
    (0,number.reformIntervals)(outPieceList);
    util.each(outPieceList, function (piece, index) {
      piece.index = index;
      piece.text = this.formatValueText(piece.interval);
    }, this);
  },
  categories: function (outPieceList) {
    var thisOption = this.option;
    util.each(thisOption.categories, function (cate) {
      // FIXME category模式也使用pieceList，但在visualMapping中不是使用pieceList。
      // 是否改一致。
      outPieceList.push({
        text: this.formatValueText(cate, true),
        value: cate
      });
    }, this);
    // See "Order Rule".
    normalizeReverse(thisOption, outPieceList);
  },
  pieces: function (outPieceList) {
    var thisOption = this.option;
    util.each(thisOption.pieces, function (pieceListItem, index) {
      if (!util.isObject(pieceListItem)) {
        pieceListItem = {
          value: pieceListItem
        };
      }
      var item = {
        text: '',
        index: index
      };
      if (pieceListItem.label != null) {
        item.text = pieceListItem.label;
      }
      if (pieceListItem.hasOwnProperty('value')) {
        var value = item.value = pieceListItem.value;
        item.interval = [value, value];
        item.close = [1, 1];
      } else {
        // `min` `max` is legacy option.
        // `lt` `gt` `lte` `gte` is recommended.
        var interval = item.interval = [];
        var close_1 = item.close = [0, 0];
        var closeList = [1, 0, 1];
        var infinityList = [-Infinity, Infinity];
        var useMinMax = [];
        for (var lg = 0; lg < 2; lg++) {
          var names = [['gte', 'gt', 'min'], ['lte', 'lt', 'max']][lg];
          for (var i = 0; i < 3 && interval[lg] == null; i++) {
            interval[lg] = pieceListItem[names[i]];
            close_1[lg] = closeList[i];
            useMinMax[lg] = i === 2;
          }
          interval[lg] == null && (interval[lg] = infinityList[lg]);
        }
        useMinMax[0] && interval[1] === Infinity && (close_1[0] = 0);
        useMinMax[1] && interval[0] === -Infinity && (close_1[1] = 0);
        if (false) {}
        if (interval[0] === interval[1] && close_1[0] && close_1[1]) {
          // Consider: [{min: 5, max: 5, visual: {...}}, {min: 0, max: 5}],
          // we use value to lift the priority when min === max
          item.value = interval[0];
        }
      }
      item.visual = VisualMapping["default"].retrieveVisuals(pieceListItem);
      outPieceList.push(item);
    }, this);
    // See "Order Rule".
    normalizeReverse(thisOption, outPieceList);
    // Only pieces
    (0,number.reformIntervals)(outPieceList);
    util.each(outPieceList, function (piece) {
      var close = piece.close;
      var edgeSymbols = [['<', '≤'][close[1]], ['>', '≥'][close[0]]];
      piece.text = piece.text || this.formatValueText(piece.value != null ? piece.value : piece.interval, false, edgeSymbols);
    }, this);
  }
};
function normalizeReverse(thisOption, pieceList) {
  var inverse = thisOption.inverse;
  if (thisOption.orient === 'vertical' ? !inverse : inverse) {
    pieceList.reverse();
  }
}
/* ESM default export */ var visualMap_PiecewiseModel = (PiecewiseModel_PiecewiseModel);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/VisualMapView.js
var VisualMapView = __webpack_require__(55168);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Group.js
var Group = __webpack_require__(27208);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Text.js
var Text = __webpack_require__(98856);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/symbol.js
var symbol = __webpack_require__(42692);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/layout.js
var layout = __webpack_require__(22265);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/helper.js
var helper = __webpack_require__(97787);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelStyle.js
var labelStyle = __webpack_require__(57235);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/PiecewiseView.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/








var PiecewiseView_PiecewiseVisualMapView = /** @class */function (_super) {
  (0,tslib_es6.__extends)(PiecewiseVisualMapView, _super);
  function PiecewiseVisualMapView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = PiecewiseVisualMapView.type;
    return _this;
  }
  PiecewiseVisualMapView.prototype.doRender = function () {
    var thisGroup = this.group;
    thisGroup.removeAll();
    var visualMapModel = this.visualMapModel;
    var textGap = visualMapModel.get('textGap');
    var textStyleModel = visualMapModel.textStyleModel;
    var itemAlign = this._getItemAlign();
    var itemSize = visualMapModel.itemSize;
    var viewData = this._getViewData();
    var endsText = viewData.endsText;
    var showLabel = util.retrieve(visualMapModel.get('showLabel', true), !endsText);
    var silent = !visualMapModel.get('selectedMode');
    endsText && this._renderEndsText(thisGroup, endsText[0], itemSize, showLabel, itemAlign);
    util.each(viewData.viewPieceList, function (item) {
      var piece = item.piece;
      var itemGroup = new Group["default"]();
      itemGroup.onclick = util.bind(this._onItemClick, this, piece);
      this._enableHoverLink(itemGroup, item.indexInModelPieceList);
      // TODO Category
      var representValue = visualMapModel.getRepresentValue(piece);
      this._createItemSymbol(itemGroup, representValue, [0, 0, itemSize[0], itemSize[1]], silent);
      if (showLabel) {
        var visualState = this.visualMapModel.getValueState(representValue);
        var align = textStyleModel.get('align') || itemAlign;
        itemGroup.add(new Text["default"]({
          style: (0,labelStyle.createTextStyle)(textStyleModel, {
            x: align === 'right' ? -textGap : itemSize[0] + textGap,
            y: itemSize[1] / 2,
            text: piece.text,
            verticalAlign: textStyleModel.get('verticalAlign') || 'middle',
            align: align,
            opacity: util.retrieve2(textStyleModel.get('opacity'), visualState === 'outOfRange' ? 0.5 : 1)
          }),
          silent: silent
        }));
      }
      thisGroup.add(itemGroup);
    }, this);
    endsText && this._renderEndsText(thisGroup, endsText[1], itemSize, showLabel, itemAlign);
    layout.box(visualMapModel.get('orient'), thisGroup, visualMapModel.get('itemGap'));
    this.renderBackground(thisGroup);
    this.positionGroup(thisGroup);
  };
  PiecewiseVisualMapView.prototype._enableHoverLink = function (itemGroup, pieceIndex) {
    var _this = this;
    itemGroup.on('mouseover', function () {
      return onHoverLink('highlight');
    }).on('mouseout', function () {
      return onHoverLink('downplay');
    });
    var onHoverLink = function (method) {
      var visualMapModel = _this.visualMapModel;
      // TODO: TYPE More detailed action types
      visualMapModel.option.hoverLink && _this.api.dispatchAction({
        type: method,
        batch: helper.makeHighDownBatch(visualMapModel.findTargetDataIndices(pieceIndex), visualMapModel)
      });
    };
  };
  PiecewiseVisualMapView.prototype._getItemAlign = function () {
    var visualMapModel = this.visualMapModel;
    var modelOption = visualMapModel.option;
    if (modelOption.orient === 'vertical') {
      return helper.getItemAlign(visualMapModel, this.api, visualMapModel.itemSize);
    } else {
      // horizontal, most case left unless specifying right.
      var align = modelOption.align;
      if (!align || align === 'auto') {
        align = 'left';
      }
      return align;
    }
  };
  PiecewiseVisualMapView.prototype._renderEndsText = function (group, text, itemSize, showLabel, itemAlign) {
    if (!text) {
      return;
    }
    var itemGroup = new Group["default"]();
    var textStyleModel = this.visualMapModel.textStyleModel;
    itemGroup.add(new Text["default"]({
      style: (0,labelStyle.createTextStyle)(textStyleModel, {
        x: showLabel ? itemAlign === 'right' ? itemSize[0] : 0 : itemSize[0] / 2,
        y: itemSize[1] / 2,
        verticalAlign: 'middle',
        align: showLabel ? itemAlign : 'center',
        text: text
      })
    }));
    group.add(itemGroup);
  };
  /**
   * @private
   * @return {Object} {peiceList, endsText} The order is the same as screen pixel order.
   */
  PiecewiseVisualMapView.prototype._getViewData = function () {
    var visualMapModel = this.visualMapModel;
    var viewPieceList = util.map(visualMapModel.getPieceList(), function (piece, index) {
      return {
        piece: piece,
        indexInModelPieceList: index
      };
    });
    var endsText = visualMapModel.get('text');
    // Consider orient and inverse.
    var orient = visualMapModel.get('orient');
    var inverse = visualMapModel.get('inverse');
    // Order of model pieceList is always [low, ..., high]
    if (orient === 'horizontal' ? inverse : !inverse) {
      viewPieceList.reverse();
    }
    // Origin order of endsText is [high, low]
    else if (endsText) {
      endsText = endsText.slice().reverse();
    }
    return {
      viewPieceList: viewPieceList,
      endsText: endsText
    };
  };
  PiecewiseVisualMapView.prototype._createItemSymbol = function (group, representValue, shapeParam, silent) {
    var itemSymbol = (0,symbol.createSymbol)(
    // symbol will be string
    this.getControllerVisual(representValue, 'symbol'), shapeParam[0], shapeParam[1], shapeParam[2], shapeParam[3],
    // color will be string
    this.getControllerVisual(representValue, 'color'));
    itemSymbol.silent = silent;
    group.add(itemSymbol);
  };
  PiecewiseVisualMapView.prototype._onItemClick = function (piece) {
    var visualMapModel = this.visualMapModel;
    var option = visualMapModel.option;
    var selectedMode = option.selectedMode;
    if (!selectedMode) {
      return;
    }
    var selected = util.clone(option.selected);
    var newKey = visualMapModel.getSelectedMapKey(piece);
    if (selectedMode === 'single' || selectedMode === true) {
      selected[newKey] = true;
      util.each(selected, function (o, key) {
        selected[key] = key === newKey;
      });
    } else {
      selected[newKey] = !selected[newKey];
    }
    this.api.dispatchAction({
      type: 'selectDataRange',
      from: this.uid,
      visualMapId: this.visualMapModel.id,
      selected: selected
    });
  };
  PiecewiseVisualMapView.type = 'visualMap.piecewise';
  return PiecewiseVisualMapView;
}(VisualMapView["default"]);
/* ESM default export */ var PiecewiseView = (PiecewiseView_PiecewiseVisualMapView);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/installCommon.js + 3 modules
var installCommon = __webpack_require__(72507);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/visualMap/installVisualMapPiecewise.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  registers.registerComponentModel(visualMap_PiecewiseModel);
  registers.registerComponentView(PiecewiseView);
  (0,installCommon["default"])(registers);
}

}),

}]);