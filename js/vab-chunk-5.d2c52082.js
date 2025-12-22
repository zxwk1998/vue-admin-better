/*!
 * vue-admin-better
 * GitHub: https://github.com/zxwk1998/vue-admin-better
 * Gitee: https://gitee.com/chu1204505056/vue-admin-better
 *
 * 版权所有 (c) 2025 vue-admin-better
 * 本项目使用 MIT 许可证
 * 构建时间: 2025-12-22 10:31:55
 */
"use strict";
(self["webpackChunkvue_admin_better"] = self["webpackChunkvue_admin_better"] || []).push([["6589"], {
91779: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  install: function() { return /* binding */ install_install; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/extension.js
var extension = __webpack_require__(51799);
// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(2492);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(9774);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Model.js + 2 modules
var Model = __webpack_require__(37931);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js
var util_model = __webpack_require__(67698);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Component.js
var Component = __webpack_require__(53075);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/tokens.js
var tokens = __webpack_require__(87473);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/legend/LegendModel.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
    // top: 0,
    bottom: tokens["default"].size.m,
    align: 'auto',
    backgroundColor: tokens["default"].color.transparent,
    borderColor: tokens["default"].color.border,
    borderRadius: 0,
    borderWidth: 0,
    padding: 5,
    itemGap: 8,
    itemWidth: 25,
    itemHeight: 14,
    symbolRotate: 'inherit',
    symbolKeepAspect: true,
    inactiveColor: tokens["default"].color.disabled,
    inactiveBorderColor: tokens["default"].color.disabled,
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
      inactiveColor: tokens["default"].color.disabled,
      inactiveWidth: 2,
      opacity: 'inherit',
      type: 'inherit',
      cap: 'inherit',
      join: 'inherit',
      dashOffset: 'inherit',
      miterLimit: 'inherit'
    },
    textStyle: {
      color: tokens["default"].color.secondary
    },
    selectedMode: true,
    selector: false,
    selectorLabel: {
      show: true,
      borderRadius: 10,
      padding: [3, 5, 3, 5],
      fontSize: 12,
      fontFamily: 'sans-serif',
      color: tokens["default"].color.tertiary,
      borderWidth: 1,
      borderColor: tokens["default"].color.border
    },
    emphasis: {
      selectorLabel: {
        show: true,
        color: tokens["default"].color.quaternary
      }
    },
    selectorPosition: 'auto',
    selectorItemGap: 7,
    selectorButtonGap: 10,
    tooltip: {
      show: false
    },
    triggerEvent: false
  };
  return LegendModel;
}(Component["default"]);
/* export default */ var legend_LegendModel = (LegendModel_LegendModel);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/tool/color.js
var color = __webpack_require__(59886);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Group.js
var Group = __webpack_require__(97786);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Text.js
var Text = __webpack_require__(62070);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Rect.js + 1 modules
var Rect = __webpack_require__(52721);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js
var graphic = __webpack_require__(9412);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/states.js
var states = __webpack_require__(72825);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelStyle.js
var labelStyle = __webpack_require__(51160);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/helper/listComponent.js
var listComponent = __webpack_require__(87624);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/layout.js
var layout = __webpack_require__(88485);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Component.js
var view_Component = __webpack_require__(95421);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/symbol.js
var symbol = __webpack_require__(40991);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/decal.js
var decal = __webpack_require__(46874);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/innerStore.js
var innerStore = __webpack_require__(61022);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/legend/LegendView.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
    var refContainer = layout.createBoxLayoutReference(legendModel, api).refContainer;
    var positionInfo = legendModel.getBoxLayoutParams();
    var padding = legendModel.get('padding');
    var maxSize = layout.getLayoutRect(positionInfo, refContainer, padding);
    var mainRect = this.layoutInner(legendModel, itemAlign, maxSize, isFirstRender, selector, selectorPosition);
    // Place mainGroup, based on the calculated `mainRect`.
    var layoutRect = layout.getLayoutRect(util.defaults({
      width: mainRect.width,
      height: mainRect.height
    }, positionInfo), refContainer, padding);
    this.group.x = layoutRect.x - mainRect.x;
    this.group.y = layoutRect.y - mainRect.y;
    this.group.markRedraw();
    // Render background after group is layout.
    this.group.add(this._backgroundEl = (0,listComponent.makeBackground)(mainRect,
    // FXIME: most itemStyle options does not work in background because inherit is not handled yet.
    legendModel));
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
    var triggerEvent = legendModel.get('triggerEvent');
    var excludeSeriesId = [];
    ecModel.eachRawSeries(function (seriesModel) {
      !seriesModel.get('legendHoverLink') && excludeSeriesId.push(seriesModel.id);
    });
    each(legendModel.getData(), function (legendItemModel, dataIndex) {
      var _this = this;
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
        if (triggerEvent) {
          itemGroup.eachChild(function (child) {
            _this.packEventData(child, legendModel, seriesModel, dataIndex, name);
          });
        }
        legendDrawnMap.set(name, true);
      } else {
        // Legend to control data. In pie and funnel.
        ecModel.eachRawSeries(function (seriesModel) {
          var _this = this;
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
            if (triggerEvent) {
              itemGroup.eachChild(function (child) {
                _this.packEventData(child, legendModel, seriesModel, dataIndex, name);
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
  LegendView.prototype.packEventData = function (el, legendModel, seriesModel, dataIndex, name) {
    var eventData = {
      componentType: 'legend',
      componentIndex: legendModel.componentIndex,
      dataIndex: dataIndex,
      value: name,
      seriesIndex: seriesModel.seriesIndex
    };
    (0,innerStore.getECData)(el).eventData = eventData;
  };
  ;
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
    icon.style.fill = tokens["default"].color.neutral00;
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
/* export default */ var legend_LegendView = (LegendView_LegendView);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/legend/legendFilter.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/legend/legendAction.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/legend/installLegendPlain.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/component.js
var component = __webpack_require__(98320);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/legend/ScrollableLegendModel.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
    pageIconColor: tokens["default"].color.accent50,
    pageIconInactiveColor: tokens["default"].color.accent10,
    pageIconSize: 15,
    pageTextStyle: {
      color: tokens["default"].color.tertiary
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
/* export default */ var legend_ScrollableLegendModel = (ScrollableLegendModel_ScrollableLegendModel);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/animation/basicTransition.js
var basicTransition = __webpack_require__(95086);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/legend/ScrollableLegendView.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
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
/* export default */ var legend_ScrollableLegendView = (ScrollableLegendView_ScrollableLegendView);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/legend/scrollableLegendAction.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/legend/installLegendScroll.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/legend/install.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
45274: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var tslib__rspack_import_2 = __webpack_require__(2492);
/* import */ var zrender_lib_core_util_js__rspack_import_4 = __webpack_require__(9774);
/* import */ var zrender_lib_core_env_js__rspack_import_3 = __webpack_require__(18311);
/* import */ var _model_mixin_dataFormat_js__rspack_import_6 = __webpack_require__(60731);
/* import */ var _model_Component_js__rspack_import_1 = __webpack_require__(53075);
/* import */ var _util_model_js__rspack_import_0 = __webpack_require__(67698);
/* import */ var _tooltip_tooltipMarkup_js__rspack_import_5 = __webpack_require__(69089);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  (0,_util_model_js__rspack_import_0.defaultEmphasis)(opt, 'label', ['show']);
}
// { [componentType]: MarkerModel }
var inner = (0,_util_model_js__rspack_import_0.makeInner)();
var MarkerModel = /** @class */function (_super) {
  (0,tslib__rspack_import_2.__extends)(MarkerModel, _super);
  function MarkerModel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = MarkerModel.type;
    /**
     * If marker model is created by self from series
     */
    _this.createdBySelf = false;
    _this.preventAutoZ = true;
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
    if (zrender_lib_core_env_js__rspack_import_3["default"].node) {
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
          zrender_lib_core_util_js__rspack_import_4.each(markerOpt.data, function (item) {
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
          zrender_lib_core_util_js__rspack_import_4.extend(markerModel, {
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
    return (0,_tooltip_tooltipMarkup_js__rspack_import_5.createTooltipMarkup)('section', {
      header: this.name,
      blocks: [(0,_tooltip_tooltipMarkup_js__rspack_import_5.createTooltipMarkup)('nameValue', {
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
    var params = _model_mixin_dataFormat_js__rspack_import_6.DataFormatMixin.prototype.getDataParams.call(this, dataIndex, dataType);
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
}(_model_Component_js__rspack_import_1["default"]);
zrender_lib_core_util_js__rspack_import_4.mixin(MarkerModel, _model_mixin_dataFormat_js__rspack_import_6.DataFormatMixin.prototype);
/* export default */ __webpack_exports__["default"] = (MarkerModel);

}),
9846: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var tslib__rspack_import_2 = __webpack_require__(2492);
/* import */ var _view_Component_js__rspack_import_1 = __webpack_require__(95421);
/* import */ var zrender_lib_core_util_js__rspack_import_3 = __webpack_require__(9774);
/* import */ var _MarkerModel_js__rspack_import_4 = __webpack_require__(45274);
/* import */ var _util_model_js__rspack_import_0 = __webpack_require__(67698);
/* import */ var _util_states_js__rspack_import_5 = __webpack_require__(72825);
/* import */ var _util_graphic_js__rspack_import_6 = __webpack_require__(9412);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
var MarkerView = /** @class */function (_super) {
  (0,tslib__rspack_import_2.__extends)(MarkerView, _super);
  function MarkerView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = MarkerView.type;
    return _this;
  }
  MarkerView.prototype.init = function () {
    this.markerGroupMap = (0,zrender_lib_core_util_js__rspack_import_3.createHashMap)();
  };
  MarkerView.prototype.render = function (markerModel, ecModel, api) {
    var _this = this;
    var markerGroupMap = this.markerGroupMap;
    markerGroupMap.each(function (item) {
      inner(item).keep = false;
    });
    ecModel.eachSeries(function (seriesModel) {
      var markerModel = _MarkerModel_js__rspack_import_4["default"].getMarkerModelFromSeries(seriesModel, _this.type);
      markerModel && _this.renderSeries(seriesModel, markerModel, ecModel, api);
    });
    markerGroupMap.each(function (item) {
      !inner(item).keep && _this.group.remove(item.group);
    });
    updateZ(ecModel, markerGroupMap, this.type);
  };
  MarkerView.prototype.markKeep = function (drawGroup) {
    inner(drawGroup).keep = true;
  };
  MarkerView.prototype.toggleBlurSeries = function (seriesModelList, isBlur) {
    var _this = this;
    (0,zrender_lib_core_util_js__rspack_import_3.each)(seriesModelList, function (seriesModel) {
      var markerModel = _MarkerModel_js__rspack_import_4["default"].getMarkerModelFromSeries(seriesModel, _this.type);
      if (markerModel) {
        var data = markerModel.getData();
        data.eachItemGraphicEl(function (el) {
          if (el) {
            isBlur ? (0,_util_states_js__rspack_import_5.enterBlur)(el) : (0,_util_states_js__rspack_import_5.leaveBlur)(el);
          }
        });
      }
    });
  };
  MarkerView.type = 'marker';
  return MarkerView;
}(_view_Component_js__rspack_import_1["default"]);
function updateZ(ecModel, markerGroupMap, type) {
  ecModel.eachSeries(function (seriesModel) {
    var markerModel = _MarkerModel_js__rspack_import_4["default"].getMarkerModelFromSeries(seriesModel, type);
    var markerDraw = markerGroupMap.get(seriesModel.id);
    if (markerModel && markerDraw && markerDraw.group) {
      var _a = (0,_util_graphic_js__rspack_import_6.retrieveZInfo)(markerModel),
        z = _a.z,
        zlevel = _a.zlevel;
      (0,_util_graphic_js__rspack_import_6.traverseUpdateZ)(markerDraw.group, z, zlevel);
    }
  });
}
/* export default */ __webpack_exports__["default"] = (MarkerView);

}),
38285: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return checkMarkerInSeries; }
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

function checkMarkerInSeries(seriesOpts, markerType) {
  if (!seriesOpts) {
    return false;
  }
  var seriesOptArr = (0,zrender_lib_core_util_js__rspack_import_0.isArray)(seriesOpts) ? seriesOpts : [seriesOpts];
  for (var idx = 0; idx < seriesOptArr.length; idx++) {
    if (seriesOptArr[idx] && seriesOptArr[idx][markerType]) {
      return true;
    }
  }
  return false;
}

}),
41900: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  install: function() { return /* binding */ install; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/checkMarkerInSeries.js
var checkMarkerInSeries = __webpack_require__(38285);
// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(2492);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/MarkerModel.js
var MarkerModel = __webpack_require__(45274);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/MarkAreaModel.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
/* export default */ var marker_MarkAreaModel = (MarkAreaModel_MarkAreaModel);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/tool/color.js
var tool_color = __webpack_require__(59886);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/SeriesData.js
var SeriesData = __webpack_require__(33902);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(64782);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Group.js
var Group = __webpack_require__(97786);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Polygon.js
var Polygon = __webpack_require__(69717);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/animation/basicTransition.js
var basicTransition = __webpack_require__(95086);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/states.js
var states = __webpack_require__(72825);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/markerHelper.js
var markerHelper = __webpack_require__(15787);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/MarkerView.js
var MarkerView = __webpack_require__(9846);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(9774);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/CoordinateSystem.js
var CoordinateSystem = __webpack_require__(92081);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js
var model = __webpack_require__(67698);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/helper.js
var helper = __webpack_require__(34235);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelStyle.js
var labelStyle = __webpack_require__(51160);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/innerStore.js
var innerStore = __webpack_require__(61022);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/helper/dataValueHelper.js
var dataValueHelper = __webpack_require__(5657);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/tokens.js
var tokens = __webpack_require__(87473);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/MarkAreaView.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
      var itemModel = areaData.getItemModel(idx);
      var style = itemModel.getModel('itemStyle').getItemStyle();
      var z2 = itemModel.get('z2');
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
      areaData.setItemVisual(idx, 'z2', (0,util.retrieve2)(z2, 0));
    });
    areaData.diff(inner(polygonGroup).data).add(function (idx) {
      var layout = areaData.getItemLayout(idx);
      var z2 = areaData.getItemVisual(idx, 'z2');
      if (!layout.allClipped) {
        var polygon = new Polygon["default"]({
          z2: (0,util.retrieve2)(z2, 0),
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
      var z2 = areaData.getItemVisual(newIdx, 'z2');
      if (!layout.allClipped) {
        if (polygon) {
          basicTransition.updateProps(polygon, {
            z2: (0,util.retrieve2)(z2, 0),
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
        inheritColor: (0,util.isString)(style.fill) ? tool_color.modifyAlpha(style.fill, 1) : tokens["default"].color.neutral99
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
/* export default */ var marker_MarkAreaView = (MarkAreaView_MarkAreaView);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/installMarkArea.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
2994: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  install: function() { return /* binding */ install; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/checkMarkerInSeries.js
var checkMarkerInSeries = __webpack_require__(38285);
// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(2492);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/MarkerModel.js
var MarkerModel = __webpack_require__(45274);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/MarkLineModel.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
/* export default */ var marker_MarkLineModel = (MarkLineModel_MarkLineModel);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/SeriesData.js
var SeriesData = __webpack_require__(33902);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(64782);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/markerHelper.js
var markerHelper = __webpack_require__(15787);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/LineDraw.js
var LineDraw = __webpack_require__(11636);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/MarkerView.js
var MarkerView = __webpack_require__(9846);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/helper/dataStackHelper.js
var dataStackHelper = __webpack_require__(89528);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/CoordinateSystem.js
var CoordinateSystem = __webpack_require__(92081);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/innerStore.js
var innerStore = __webpack_require__(61022);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(9774);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js
var model = __webpack_require__(67698);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/helper.js
var helper = __webpack_require__(34235);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/MarkLineView.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
      var itemModel = lineData.getItemModel(idx);
      var lineStyle = itemModel.getModel('lineStyle').getLineStyle();
      // lineData.setItemVisual(idx, {
      //     color: lineColor || fromData.getItemVisual(idx, 'color')
      // });
      lineData.setItemLayout(idx, [fromData.getItemLayout(idx), toData.getItemLayout(idx)]);
      var z2 = itemModel.get('z2');
      if (lineStyle.stroke == null) {
        lineStyle.stroke = fromData.getItemVisual(idx, 'style').fill;
      }
      lineData.setItemVisual(idx, {
        z2: (0,util.retrieve2)(z2, 0),
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
/* export default */ var marker_MarkLineView = (MarkLineView_MarkLineView);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/installMarkLine.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
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
84731: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  install: function() { return /* binding */ install; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/checkMarkerInSeries.js
var checkMarkerInSeries = __webpack_require__(38285);
// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(2492);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/MarkerModel.js
var MarkerModel = __webpack_require__(45274);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/MarkPointModel.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
/* export default */ var marker_MarkPointModel = (MarkPointModel_MarkPointModel);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/helper/SymbolDraw.js
var SymbolDraw = __webpack_require__(29370);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/number.js
var number = __webpack_require__(64782);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/SeriesData.js
var SeriesData = __webpack_require__(33902);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/markerHelper.js
var markerHelper = __webpack_require__(15787);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/MarkerView.js
var MarkerView = __webpack_require__(9846);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(9774);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/innerStore.js
var innerStore = __webpack_require__(61022);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/helper.js
var helper = __webpack_require__(34235);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/MarkPointView.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  var apiWidth = api.getWidth();
  var apiHeight = api.getHeight();
  var coordRect = coordSys && coordSys.getArea && coordSys.getArea();
  mpData.each(function (idx) {
    var itemModel = mpData.getItemModel(idx);
    var isRelativeToCoordinate = itemModel.get('relativeTo') === 'coordinate';
    var width = isRelativeToCoordinate ? coordRect ? coordRect.width : 0 : apiWidth;
    var height = isRelativeToCoordinate ? coordRect ? coordRect.height : 0 : apiHeight;
    var left = isRelativeToCoordinate && coordRect ? coordRect.x : 0;
    var top = isRelativeToCoordinate && coordRect ? coordRect.y : 0;
    var point;
    var xPx = number.parsePercent(itemModel.get('x'), width) + left;
    var yPx = number.parsePercent(itemModel.get('y'), height) + top;
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
      var z2 = itemModel.get('z2');
      var color = (0,helper.getVisualFromData)(seriesData, 'color');
      if (!style.fill) {
        style.fill = color;
      }
      mpData.setItemVisual(idx, {
        z2: (0,util.retrieve2)(z2, 0),
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
/* export default */ var marker_MarkPointView = (MarkPointView_MarkPointView);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/marker/installMarkPoint.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
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
15787: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createMarkerDimValueGetter: function() { return createMarkerDimValueGetter; },
  dataFilter: function() { return dataFilter; },
  dataTransform: function() { return dataTransform; },
  getAxisInfo: function() { return getAxisInfo; },
  numCalculate: function() { return numCalculate; },
  zoneFilter: function() { return zoneFilter; }
});
/* import */ var _util_number_js__rspack_import_1 = __webpack_require__(64782);
/* import */ var _data_helper_dataStackHelper_js__rspack_import_0 = __webpack_require__(89528);
/* import */ var zrender_lib_core_util_js__rspack_import_2 = __webpack_require__(9774);
/* import */ var _data_helper_dataValueHelper_js__rspack_import_3 = __webpack_require__(5657);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
function markerTypeCalculatorWithExtent(markerType, data, axisDim, otherDataDim, targetDataDim, otherCoordIndex, targetCoordIndex) {
  var coordArr = [];
  var stacked = (0,_data_helper_dataStackHelper_js__rspack_import_0.isDimensionStacked)(data, targetDataDim /* , otherDataDim */);
  var calcDataDim = stacked ? data.getCalculationInfo('stackResultDimension') : targetDataDim;
  var value = numCalculate(data, calcDataDim, markerType);
  var seriesModel = data.hostModel;
  var dataIndex = seriesModel.indicesOfNearest(axisDim, calcDataDim, value)[0];
  coordArr[otherCoordIndex] = data.get(otherDataDim, dataIndex);
  coordArr[targetCoordIndex] = data.get(calcDataDim, dataIndex);
  var coordArrValue = data.get(targetDataDim, dataIndex);
  // Make it simple, do not visit all stacked value to count precision.
  var precision = _util_number_js__rspack_import_1.getPrecision(data.get(targetDataDim, dataIndex));
  precision = Math.min(precision, 20);
  if (precision >= 0) {
    coordArr[targetCoordIndex] = +coordArr[targetCoordIndex].toFixed(precision);
  }
  return [coordArr, coordArrValue];
}
// TODO Specified percent
var markerTypeCalculator = {
  min: (0,zrender_lib_core_util_js__rspack_import_2.curry)(markerTypeCalculatorWithExtent, 'min'),
  max: (0,zrender_lib_core_util_js__rspack_import_2.curry)(markerTypeCalculatorWithExtent, 'max'),
  average: (0,zrender_lib_core_util_js__rspack_import_2.curry)(markerTypeCalculatorWithExtent, 'average'),
  median: (0,zrender_lib_core_util_js__rspack_import_2.curry)(markerTypeCalculatorWithExtent, 'median')
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
  if (!hasXAndY(item) && !(0,zrender_lib_core_util_js__rspack_import_2.isArray)(item.coord) && (0,zrender_lib_core_util_js__rspack_import_2.isArray)(dims)) {
    var axisInfo = getAxisInfo(item, data, coordSys, seriesModel);
    // Clone the option
    // Transform the properties xAxis, yAxis, radiusAxis, angleAxis, geoCoord to value
    item = (0,zrender_lib_core_util_js__rspack_import_2.clone)(item);
    if (item.type && markerTypeCalculator[item.type] && axisInfo.baseAxis && axisInfo.valueAxis) {
      var otherCoordIndex = (0,zrender_lib_core_util_js__rspack_import_2.indexOf)(dims, axisInfo.baseAxis.dim);
      var targetCoordIndex = (0,zrender_lib_core_util_js__rspack_import_2.indexOf)(dims, axisInfo.valueAxis.dim);
      var coordInfo = markerTypeCalculator[item.type](data, axisInfo.valueAxis.dim, axisInfo.baseDataDim, axisInfo.valueDataDim, otherCoordIndex, targetCoordIndex);
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
  if (item.coord == null || !(0,zrender_lib_core_util_js__rspack_import_2.isArray)(dims)) {
    item.coord = [];
    var baseAxis = seriesModel.getBaseAxis();
    if (baseAxis && item.type && markerTypeCalculator[item.type]) {
      var otherAxis = coordSys.getOtherAxis(baseAxis);
      if (otherAxis) {
        item.value = numCalculate(data, data.mapDimension(otherAxis.dim), item.type);
      }
    }
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
    return (0,_data_helper_dataValueHelper_js__rspack_import_3.parseDataValue)(rawVal, dims[dimIndex]);
  } : function (item, dimName, dataIndex, dimIndex) {
    return (0,_data_helper_dataValueHelper_js__rspack_import_3.parseDataValue)(item.value, dims[dimIndex]);
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
42356: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  install: function() { return /* binding */ install; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/matrix/MatrixModel.js + 2 modules
var MatrixModel = __webpack_require__(33089);
// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(2492);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Component.js
var Component = __webpack_require__(95421);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Model.js + 2 modules
var Model = __webpack_require__(37931);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/BoundingRect.js
var BoundingRect = __webpack_require__(7544);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/vector.js
var vector = __webpack_require__(44721);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/helper/subPixelOptimize.js
var subPixelOptimize = __webpack_require__(92653);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js
var graphic = __webpack_require__(9412);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Rect.js + 1 modules
var Rect = __webpack_require__(52721);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Line.js
var Line = __webpack_require__(38401);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js
var model = __webpack_require__(67698);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(9774);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/matrix.js
var matrix = __webpack_require__(46239);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/label/labelStyle.js
var labelStyle = __webpack_require__(51160);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/matrix/MatrixView.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/











var round = Math.round;
var Z2_BACKGROUND = 0;
var Z2_OUTER_BORDER = 99;
var Z2_BODY_CORNER_CELL_DEFAULT = {
  normal: 25,
  special: 100
};
var Z2_DIMENSION_CELL_DEFAULT = {
  normal: 50,
  special: 125
};
var MatrixView_MatrixView = /** @class */function (_super) {
  (0,tslib_es6.__extends)(MatrixView, _super);
  function MatrixView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = MatrixView.type;
    return _this;
  }
  MatrixView.prototype.render = function (matrixModel, ecModel) {
    this.group.removeAll();
    var group = this.group;
    var coordSys = matrixModel.coordinateSystem;
    var rect = coordSys.getRect();
    var xDimModel = matrixModel.getDimensionModel('x');
    var yDimModel = matrixModel.getDimensionModel('y');
    var xDim = xDimModel.dim;
    var yDim = yDimModel.dim;
    // PENDING:
    //  reuse the existing text and rect elements for performance?
    renderDimensionCells(group, matrixModel, ecModel);
    createBodyAndCorner(group, matrixModel, xDim, yDim, ecModel);
    var borderZ2Option = matrixModel.getShallow('borderZ2', true);
    var outerBorderZ2 = (0,util.retrieve2)(borderZ2Option, Z2_OUTER_BORDER);
    var dividerLineZ2 = outerBorderZ2 - 1;
    // Outer border and overall background. Use separate elements because of z-order:
    // The overall background should appear below any other elements.
    // But in most cases, the outer border and the divider line should be above the normal cell borders -
    // especially when cell borders have different colors. But users may highlight some specific cells by
    // overstirking their border, in which case it should be above the outer border.
    var bgStyle = matrixModel.getModel('backgroundStyle').getItemStyle(['borderWidth']);
    bgStyle.lineWidth = 0;
    var borderStyle = matrixModel.getModel('backgroundStyle').getItemStyle(['color', 'decal', 'shadowColor', 'shadowBlur', 'shadowOffsetX', 'shadowOffsetY']);
    borderStyle.fill = 'none';
    var bgRect = createMatrixRect(rect.clone(), bgStyle, Z2_BACKGROUND);
    var borderRect = createMatrixRect(rect.clone(), borderStyle, outerBorderZ2);
    bgRect.silent = true;
    borderRect.silent = true;
    group.add(bgRect);
    group.add(borderRect);
    // Header split line.
    var xDimCell0 = xDim.getUnitLayoutInfo(0, 0);
    var yDimCell0 = yDim.getUnitLayoutInfo(1, 0);
    if (xDimCell0 && yDimCell0) {
      if (xDim.shouldShow()) {
        group.add(createMatrixLine({
          x1: rect.x,
          y1: yDimCell0.xy,
          x2: rect.x + rect.width,
          y2: yDimCell0.xy
        }, xDimModel.getModel('dividerLineStyle').getLineStyle(), dividerLineZ2));
      }
      if (yDim.shouldShow()) {
        group.add(createMatrixLine({
          x1: xDimCell0.xy,
          y1: rect.y,
          x2: xDimCell0.xy,
          y2: rect.y + rect.height
        }, yDimModel.getModel('dividerLineStyle').getLineStyle(), dividerLineZ2));
      }
    }
  };
  MatrixView.type = 'matrix';
  return MatrixView;
}(Component["default"]);
function renderDimensionCells(group, matrixModel, ecModel) {
  renderOnDimension(0);
  renderOnDimension(1);
  function renderOnDimension(dimIdx) {
    var thisDimModel = matrixModel.getDimensionModel(graphic.XY[dimIdx]);
    var thisDim = thisDimModel.dim;
    if (!thisDim.shouldShow()) {
      return;
    }
    var thisDimBgStyleModel = thisDimModel.getModel('itemStyle');
    var thisDimLabelModel = thisDimModel.getModel('label');
    var tooltipOption = matrixModel.getShallow('tooltip', true);
    var xyLocator = [];
    for (var it_1 = thisDim.resetCellIterator(); it_1.next();) {
      var dimCell = it_1.item;
      var shape = {};
      BoundingRect["default"].copy(shape, dimCell.rect);
      vector.set(xyLocator, dimCell.id.x, dimCell.id.y);
      createMatrixCell(xyLocator, matrixModel, group, ecModel, dimCell.option, thisDimBgStyleModel, thisDimLabelModel, thisDimModel, shape, dimCell.option.value, Z2_DIMENSION_CELL_DEFAULT, tooltipOption);
    }
  }
}
function createBodyAndCorner(group, matrixModel, xDim, yDim, ecModel) {
  createBodyOrCornerCells('body', matrixModel.getBody(), xDim, yDim);
  if (xDim.shouldShow() && yDim.shouldShow()) {
    createBodyOrCornerCells('corner', matrixModel.getCorner(), yDim, xDim);
  }
  function createBodyOrCornerCells(bodyCornerOptionRoot, bodyOrCorner, dimForCoordX,
  // Can be `matrix.y` (transposed) for corners.
  dimForCoordY) {
    // Prevent inheriting from ancestor.
    var parentCellModel = new Model["default"](matrixModel.getShallow(bodyCornerOptionRoot, true));
    var parentItemStyleModel = parentCellModel.getModel('itemStyle');
    var parentLabelModel = parentCellModel.getModel('label');
    var itx = new model.ListIterator();
    var ity = new model.ListIterator();
    var xyLocator = [];
    var tooltipOption = matrixModel.getShallow('tooltip', true);
    for (dimForCoordY.resetLayoutIterator(ity, 1); ity.next();) {
      for (dimForCoordX.resetLayoutIterator(itx, 0); itx.next();) {
        var xLayout = itx.item;
        var yLayout = ity.item;
        vector.set(xyLocator, xLayout.id.x, yLayout.id.y);
        var bodyCornerCell = bodyOrCorner.getCell(xyLocator);
        // If in span of an other body or corner cell, never render it.
        if (bodyCornerCell && bodyCornerCell.inSpanOf && bodyCornerCell.inSpanOf !== bodyCornerCell) {
          continue;
        }
        var shape = {};
        if (bodyCornerCell && bodyCornerCell.span) {
          BoundingRect["default"].copy(shape, bodyCornerCell.spanRect);
        } else {
          xLayout.dim.getLayout(shape, 0, xyLocator[0]);
          yLayout.dim.getLayout(shape, 1, xyLocator[1]);
        }
        var bodyCornerCellOption = bodyCornerCell ? bodyCornerCell.option : null;
        createMatrixCell(xyLocator, matrixModel, group, ecModel, bodyCornerCellOption, parentItemStyleModel, parentLabelModel, parentCellModel, shape, bodyCornerCellOption ? bodyCornerCellOption.value : null, Z2_BODY_CORNER_CELL_DEFAULT, tooltipOption);
      }
    }
  } // End of createBodyOrCornerCells
}
function createMatrixCell(xyLocator, matrixModel, group, ecModel, cellOption, parentItemStyleModel, parentLabelModel, parentCellModel, shape, textValue, zrCellDefault, tooltipOption) {
  var _a;
  // Do not use getModel for handy performance optimization.
  _tmpCellItemStyleModel.option = cellOption ? cellOption.itemStyle : null;
  _tmpCellItemStyleModel.parentModel = parentItemStyleModel;
  _tmpCellModel.option = cellOption;
  _tmpCellModel.parentModel = parentCellModel;
  // Use different z2 because special border may be defined in itemStyle.
  var z2 = (0,util.retrieve2)(_tmpCellModel.getShallow('z2'), cellOption && cellOption.itemStyle ? zrCellDefault.special : zrCellDefault.normal);
  var tooltipOptionShow = tooltipOption && tooltipOption.show;
  var cellRect = createMatrixRect(shape, _tmpCellItemStyleModel.getItemStyle(), z2);
  group.add(cellRect);
  var cursorOption = _tmpCellModel.get('cursor');
  if (cursorOption != null) {
    cellRect.attr('cursor', cursorOption);
  }
  var cellText;
  if (textValue != null) {
    var text = textValue + '';
    _tmpCellLabelModel.option = cellOption ? cellOption.label : null;
    _tmpCellLabelModel.parentModel = parentLabelModel;
    // This is to accept `option.textStyle` as the default.
    _tmpCellLabelModel.ecModel = ecModel;
    (0,labelStyle.setLabelStyle)(cellRect,
    // Currently do not support other states (`emphasis`, `select`, `blur`)
    {
      normal: _tmpCellLabelModel
    }, {
      defaultText: text,
      autoOverflowArea: true,
      // By default based on boundingRect. But boundingRect contains borderWidth,
      // and borderWidth is half outside the cell. Thus specific `layoutRect` explicitly.
      layoutRect: (0,util.clone)(cellRect.shape)
    });
    cellText = cellRect.getTextContent();
    if (cellText) {
      cellText.z2 = z2 + 1;
      var style = cellText.style;
      if (style && style.overflow && style.overflow !== 'none' && style.lineOverflow) {
        // `overflow: 'break'/'breakAll'/'truncate'` does not guarantee prevention of overflow
        // when space is insufficient. Use a `clipPath` in such case.
        var clipShape = {};
        BoundingRect["default"].copy(clipShape, shape);
        // `lineWidth` is half outside half inside the bounding rect.
        (0,graphic.expandOrShrinkRect)(clipShape, (((_a = cellRect.style) === null || _a === void 0 ? void 0 : _a.lineWidth) || 0) / 2, true, true);
        cellRect.updateInnerText();
        cellText.getLocalTransform(_tmpInnerTextTrans);
        (0,matrix.invert)(_tmpInnerTextTrans, _tmpInnerTextTrans);
        BoundingRect["default"].applyTransform(clipShape, clipShape, _tmpInnerTextTrans);
        cellText.setClipPath(new Rect["default"]({
          shape: clipShape
        }));
      }
    }
    (0,graphic.setTooltipConfig)({
      el: cellRect,
      componentModel: matrixModel,
      itemName: text,
      itemTooltipOption: tooltipOption,
      formatterParamsExtra: {
        xyLocator: xyLocator.slice()
      }
    });
  }
  // Set silent
  if (cellText) {
    var labelSilent = _tmpCellLabelModel.get('silent');
    // auto, tooltip of text cells need silient: false, but non-text cells
    // do not need a special cursor in most cases.
    if (labelSilent == null) {
      labelSilent = !tooltipOptionShow;
    }
    cellText.silent = labelSilent;
    cellText.ignoreHostSilent = true;
  }
  var rectSilent = _tmpCellModel.get('silent');
  if (rectSilent == null) {
    rectSilent =
    // If no background color in cell, set `rect.silent: false` will cause that only
    // the border response to mouse hovering, which is probably weird.
    !cellRect.style || cellRect.style.fill === 'none' || !cellRect.style.fill;
  }
  cellRect.silent = rectSilent;
  (0,model.clearTmpModel)(_tmpCellModel);
  (0,model.clearTmpModel)(_tmpCellItemStyleModel);
  (0,model.clearTmpModel)(_tmpCellLabelModel);
}
var _tmpCellModel = new Model["default"]();
var _tmpCellItemStyleModel = new Model["default"]();
var _tmpCellLabelModel = new Model["default"]();
var _tmpInnerTextTrans = [];
// FIXME: move all of the subpixel process to Matrix.ts resize, otherwise the result of
// `dataToLayout` is not consistent with this rendering, and the caller (like heatmap) can
// not precisely align with the matrix border.
function createMatrixRect(shape, style, z2) {
  // Currently `subPixelOptimizeRect` can not be used here because it will break rect alignment.
  // Optimize line and rect with the same direction.
  var lineWidth = style.lineWidth;
  if (lineWidth) {
    var x2Original = shape.x + shape.width;
    var y2Original = shape.y + shape.height;
    shape.x = (0,subPixelOptimize.subPixelOptimize)(shape.x, lineWidth, true);
    shape.y = (0,subPixelOptimize.subPixelOptimize)(shape.y, lineWidth, true);
    shape.width = (0,subPixelOptimize.subPixelOptimize)(x2Original, lineWidth, true) - shape.x;
    shape.height = (0,subPixelOptimize.subPixelOptimize)(y2Original, lineWidth, true) - shape.y;
  }
  return new Rect["default"]({
    shape: shape,
    style: style,
    z2: z2
  });
}
function createMatrixLine(shape, style, z2) {
  var lineWidth = style.lineWidth;
  if (lineWidth) {
    if (round(shape.x1 * 2) === round(shape.x2 * 2)) {
      shape.x1 = shape.x2 = (0,subPixelOptimize.subPixelOptimize)(shape.x1, lineWidth, true);
    }
    if (round(shape.y1 * 2) === round(shape.y2 * 2)) {
      shape.y1 = shape.y2 = (0,subPixelOptimize.subPixelOptimize)(shape.y1, lineWidth, true);
    }
  }
  return new Line["default"]({
    shape: shape,
    style: style,
    silent: true,
    z2: z2
  });
}
/* export default */ var matrix_MatrixView = (MatrixView_MatrixView);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/matrix/Matrix.js
var Matrix = __webpack_require__(53963);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/matrix/install.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  registers.registerComponentModel(MatrixModel["default"]);
  registers.registerComponentView(matrix_MatrixView);
  registers.registerCoordinateSystem('matrix', Matrix["default"]);
}

}),
16461: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  install: function() { return /* binding */ install; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/parallel/parallelPreprocessor.js
var parallelPreprocessor = __webpack_require__(7292);
// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(2492);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Component.js
var Component = __webpack_require__(95421);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(9774);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/throttle.js
var throttle = __webpack_require__(19007);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/parallel/ParallelView.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
/* export default */ var parallel_ParallelView = (ParallelView_ParallelView);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/parallel/ParallelModel.js
var ParallelModel = __webpack_require__(9690);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/parallel/parallelCreator.js + 2 modules
var parallelCreator = __webpack_require__(71703);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/axisModelCreator.js + 1 modules
var axisModelCreator = __webpack_require__(41381);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/parallel/AxisModel.js
var AxisModel = __webpack_require__(62824);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/ParallelAxisView.js
var ParallelAxisView = __webpack_require__(11579);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/parallelAxisAction.js
var parallelAxisAction = __webpack_require__(59408);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/parallel/install.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
54982: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  install: function() { return install; }
});
/* import */ var tslib__rspack_import_1 = __webpack_require__(2492);
/* import */ var _extension_js__rspack_import_2 = __webpack_require__(51799);
/* import */ var _axis_AxisView_js__rspack_import_4 = __webpack_require__(40616);
/* import */ var _axisPointer_PolarAxisPointer_js__rspack_import_5 = __webpack_require__(12617);
/* import */ var _axisPointer_install_js__rspack_import_3 = __webpack_require__(76679);
/* import */ var _coord_polar_PolarModel_js__rspack_import_7 = __webpack_require__(14534);
/* import */ var _coord_axisModelCreator_js__rspack_import_8 = __webpack_require__(41381);
/* import */ var _coord_polar_AxisModel_js__rspack_import_9 = __webpack_require__(66533);
/* import */ var _coord_polar_polarCreator_js__rspack_import_6 = __webpack_require__(85047);
/* import */ var _axis_AngleAxisView_js__rspack_import_10 = __webpack_require__(71777);
/* import */ var _axis_RadiusAxisView_js__rspack_import_11 = __webpack_require__(88118);
/* import */ var _view_Component_js__rspack_import_0 = __webpack_require__(95421);
/* import */ var zrender_lib_core_util_js__rspack_import_12 = __webpack_require__(9774);
/* import */ var _layout_barPolar_js__rspack_import_13 = __webpack_require__(96686);

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  (0,tslib__rspack_import_1.__extends)(PolarView, _super);
  function PolarView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.type = PolarView.type;
    return _this;
  }
  PolarView.type = 'polar';
  return PolarView;
}(_view_Component_js__rspack_import_0["default"]);
function install(registers) {
  (0,_extension_js__rspack_import_2.use)(_axisPointer_install_js__rspack_import_3.install);
  _axis_AxisView_js__rspack_import_4["default"].registerAxisPointerClass('PolarAxisPointer', _axisPointer_PolarAxisPointer_js__rspack_import_5["default"]);
  registers.registerCoordinateSystem('polar', _coord_polar_polarCreator_js__rspack_import_6["default"]);
  registers.registerComponentModel(_coord_polar_PolarModel_js__rspack_import_7["default"]);
  registers.registerComponentView(PolarView);
  // Model and view for angleAxis and radiusAxis
  (0,_coord_axisModelCreator_js__rspack_import_8["default"])(registers, 'angle', _coord_polar_AxisModel_js__rspack_import_9.AngleAxisModel, angleAxisExtraOption);
  (0,_coord_axisModelCreator_js__rspack_import_8["default"])(registers, 'radius', _coord_polar_AxisModel_js__rspack_import_9.RadiusAxisModel, radiusAxisExtraOption);
  registers.registerComponentView(_axis_AngleAxisView_js__rspack_import_10["default"]);
  registers.registerComponentView(_axis_RadiusAxisView_js__rspack_import_11["default"]);
  registers.registerLayout((0,zrender_lib_core_util_js__rspack_import_12.curry)(_layout_barPolar_js__rspack_import_13["default"], 'bar'));
}

}),
18433: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  install: function() { return /* binding */ install; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/radar/RadarModel.js
var RadarModel = __webpack_require__(56402);
// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(2492);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(9774);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/axis/AxisBuilder.js
var AxisBuilder = __webpack_require__(45430);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Circle.js
var Circle = __webpack_require__(29471);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Ring.js
var Ring = __webpack_require__(98577);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Polyline.js
var Polyline = __webpack_require__(69935);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Polygon.js
var Polygon = __webpack_require__(69717);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js
var graphic = __webpack_require__(9412);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Component.js
var Component = __webpack_require__(95421);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/radar/RadarView.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
  RadarView.prototype.render = function (radarModel, ecModel, api) {
    var group = this.group;
    group.removeAll();
    this._buildAxes(radarModel, api);
    this._buildSplitLineAndArea(radarModel);
  };
  RadarView.prototype._buildAxes = function (radarModel, api) {
    var radar = radarModel.coordinateSystem;
    var indicatorAxes = radar.getIndicatorAxes();
    var axisBuilders = util.map(indicatorAxes, function (indicatorAxis) {
      var axisName = indicatorAxis.model.get('showName') ? indicatorAxis.name : ''; // hide name
      var axisBuilder = new AxisBuilder["default"](indicatorAxis.model, api, {
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
      axisBuilder.build();
      this.group.add(axisBuilder.group);
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
/* export default */ var radar_RadarView = (RadarView_RadarView);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/coord/radar/Radar.js + 1 modules
var Radar = __webpack_require__(21203);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/component/radar/install.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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

}]);