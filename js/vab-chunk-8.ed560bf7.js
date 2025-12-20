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
(self["webpackChunkvue_admin_better"] = self["webpackChunkvue_admin_better"] || []).push([["8226"], {
58241: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BoxCoordinateSystemCoordFrom: function() { return BoxCoordinateSystemCoordFrom; },
  CoordinateSystemUsageKind: function() { return CoordinateSystemUsageKind; },
  decideCoordSysUsageKind: function() { return decideCoordSysUsageKind; },
  getCoordForBoxCoordSys: function() { return getCoordForBoxCoordSys; },
  injectCoordSysByOption: function() { return injectCoordSysByOption; },
  registerLayOutOnCoordSysUsage: function() { return registerLayOutOnCoordSysUsage; },
  simpleCoordSysInjectionProvider: function() { return simpleCoordSysInjectionProvider; }
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
 * FIXME:
 * `nonSeriesBoxCoordSysCreators` and `_nonSeriesBoxMasterList` are hardcoded implementations.
 * Regarding "coord sys layout based on another coord sys", currently we only exprimentally support one level
 * dpendency, such as, "grid(cartesian)s can be laid out based on matrix/calendar coord sys."
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
var BoxCoordinateSystemCoordFrom = {
  // By default fetch coord from `model.get('coord')`.
  coord: 1,
  // Some model/series, such as pie, is allowed to also get coord from `model.get('center')`,
  // if cannot get from `model.get('coord')`. But historically pie use `center` option, but
  // geo use `layoutCenter` option to specify layout center; they are not able to be unified.
  // Therefor it is not recommended.
  coord2: 2
};
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
function getCoordForBoxCoordSys(model) {
  var coord = model.getShallow('coord', true);
  var from = BoxCoordinateSystemCoordFrom.coord;
  if (coord == null) {
    var store = coordSysUseMap.get(model.type);
    if (store && store.getCoord2) {
      from = BoxCoordinateSystemCoordFrom.coord2;
      coord = store.getCoord2(model);
    }
  }
  return {
    coord: coord,
    from: from
  };
}
/**
 * - "dataCoordSys": each data item is laid out based on a coord sys.
 * - "boxCoordSys": the overall bounding rect or anchor point is calculated based on a coord sys.
 *   e.g.,
 *      grid rect (cartesian rect) is calculate based on matrix/calendar coord sys;
 *      pie center is calculated based on calendar/cartesian;
 *
 * The default value (if not declared in option `coordinateSystemUsage`):
 *  For series, use `dataCoordSys`, since this is the most case and backward compatible.
 *  For non-series components, use `boxCoordSys`, since `dataCoordSys` is not applicable.
 */
var CoordinateSystemUsageKind = {
  none: 0,
  dataCoordSys: 1,
  boxCoordSys: 2
};
function decideCoordSysUsageKind(
// Component or series
model, printError) {
  // For backward compat, still not use `true` in model.get.
  var coordSysType = model.getShallow('coordinateSystem');
  var coordSysUsageOption = model.getShallow('coordinateSystemUsage', true);
  var isDeclaredExplicitly = coordSysUsageOption != null;
  var kind = CoordinateSystemUsageKind.none;
  if (coordSysType) {
    var isSeries = model.mainType === 'series';
    if (coordSysUsageOption == null) {
      coordSysUsageOption = isSeries ? 'data' : 'box';
    }
    if (coordSysUsageOption === 'data') {
      kind = CoordinateSystemUsageKind.dataCoordSys;
      if (!isSeries) {
        if (false) {}
        kind = CoordinateSystemUsageKind.none;
      }
    } else if (coordSysUsageOption === 'box') {
      kind = CoordinateSystemUsageKind.boxCoordSys;
      if (!isSeries && !canBeNonSeriesBoxCoordSys(coordSysType)) {
        if (false) {}
        kind = CoordinateSystemUsageKind.none;
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
 *  (A) Most series can use only "dataCoordSys", but "boxCoordSys" is not applicable:
 *    - e.g., series.heatmap, series.line, series.bar, series.scatter, ...
 *  (B) Some series and most components can use only "boxCoordSys", but "dataCoordSys" is not applicable:
 *    - e.g., series.pie, series.funnel, ...
 *    - e.g., grid, polar, geo, title, ...
 *  (C) Several series can use both "boxCoordSys" and "dataCoordSys", even at the same time:
 *    - e.g., series.graph, series.map
 *      - If graph or map series use a "boxCoordSys", it creates a internal "dataCoordSys" to lay out its data.
 *      - Graph series can use matrix coord sys as either the "dataCoordSys" (each item layout on one cell)
 *        or "boxCoordSys" (the entire series are layout within one cell).
 *    - To achieve this effect,
 *      `series.coordinateSystemUsage: 'box'` needs to be specified explicitly.
 *
 * Check these echarts option settings:
 *  - If `series: {type: 'bar'}`:
 *      dataCoordSys: "cartesian2d", boxCoordSys: "none".
 *      (since `coordinateSystem: 'cartesian2d'` is the default option in bar.)
 *  - If `grid: {coordinateSystem: 'matrix'}`
 *      dataCoordSys: "none", boxCoordSys: "matrix".
 *  - If `series: {type: 'pie', coordinateSystem: 'matrix'}`:
 *      dataCoordSys: "none", boxCoordSys: "matrix".
 *      (since `coordinateSystemUsage: 'box'` is the default option in pie.)
 *  - If `series: {type: 'graph', coordinateSystem: 'matrix'}`:
 *      dataCoordSys: "matrix", boxCoordSys: "none"
 *  - If `series: {type: 'graph', coordinateSystem: 'matrix', coordinateSystemUsage: 'box'}`:
 *      dataCoordSys: "an internal view", boxCoordSys: "the internal view is laid out on a matrix"
 *  - If `series: {type: 'map'}`:
 *      dataCoordSys: "a internal geo", boxCoordSys: "none"
 *  - If `series: {type: 'map', coordinateSystem: 'geo', geoIndex: 0}`:
 *      dataCoordSys: "a geo", boxCoordSys: "none"
 *  - If `series: {type: 'map', coordinateSystem: 'matrix'}`:
 *      not_applicable
 *  - If `series: {type: 'map', coordinateSystem: 'matrix', coordinateSystemUsage: 'box'}`:
 *      dataCoordSys: "an internal geo", boxCoordSys: "the internal geo is laid out on a matrix"
 *
 * @usage
 * For case (A) & (B),
 *  call `injectCoordSysByOption({coordSysType: 'aaa', ...})` once for each series/components.
 * For case (C),
 *  call `injectCoordSysByOption({coordSysType: 'aaa', ...})` once for each series/components,
 *  and then call `injectCoordSysByOption({coordSysType: 'bbb', ..., isDefaultDataCoordSys: true})`
 *  once for each series/components.
 *
 * @return Whether injected.
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
  if (isDefaultDataCoordSys && kind !== CoordinateSystemUsageKind.dataCoordSys) {
    // If both dataCoordSys and boxCoordSys declared in one model.
    // There is the only case in series-graph, and no other cases yet.
    kind = CoordinateSystemUsageKind.dataCoordSys;
    declaredType = coordSysType;
  }
  if (kind === CoordinateSystemUsageKind.none || declaredType !== coordSysType) {
    return false;
  }
  var coordSys = coordSysProvider(coordSysType, targetModel);
  if (!coordSys) {
    if (false) {}
    return false;
  }
  if (kind === CoordinateSystemUsageKind.dataCoordSys) {
    if (false) {}
    targetModel.coordinateSystem = coordSys;
  } else {
    // kind === 'boxCoordSys'
    targetModel.boxCoordinateSystem = coordSys;
  }
  return true;
}
var simpleCoordSysInjectionProvider = function (coordSysType, injectTargetModel) {
  var coordSysModel = injectTargetModel.getReferringComponents(coordSysType, _util_model_js__rspack_import_1.SINGLE_REFERRING).models[0];
  return coordSysModel && coordSysModel.coordinateSystem;
};
/* export default */ __webpack_exports__["default"] = (CoordinateSystemManager);

}),
8741: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  version: function() { return /* binding */ version; },
  registerLayout: function() { return /* binding */ registerLayout; },
  getInstanceById: function() { return /* binding */ getInstanceById; },
  getMap: function() { return /* binding */ echarts_getMap; },
  registerUpdateLifecycle: function() { return /* binding */ registerUpdateLifecycle; },
  registerProcessor: function() { return /* binding */ registerProcessor; },
  registerCustomSeries: function() { return /* binding */ registerCustomSeries; },
  registerMap: function() { return /* binding */ echarts_registerMap; },
  registerVisual: function() { return /* binding */ registerVisual; },
  dispose: function() { return /* binding */ dispose; },
  init: function() { return /* binding */ init; },
  registerCoordinateSystem: function() { return /* binding */ registerCoordinateSystem; },
  registerPostUpdate: function() { return /* binding */ registerPostUpdate; },
  dependencies: function() { return /* binding */ dependencies; },
  disConnect: function() { return /* binding */ disConnect; },
  registerLocale: function() { return /* reexport */ locale.registerLocale; },
  getInstanceByDom: function() { return /* binding */ getInstanceByDom; },
  registerPreprocessor: function() { return /* binding */ registerPreprocessor; },
  getCoordinateSystemDimensions: function() { return /* binding */ getCoordinateSystemDimensions; },
  disconnect: function() { return /* binding */ disconnect; },
  PRIORITY: function() { return /* binding */ PRIORITY; },
  registerTheme: function() { return /* binding */ registerTheme; },
  registerPostInit: function() { return /* binding */ registerPostInit; },
  registerLoading: function() { return /* binding */ registerLoading; },
  setCanvasCreator: function() { return /* binding */ setCanvasCreator; },
  registerTransform: function() { return /* binding */ registerTransform; },
  connect: function() { return /* binding */ connect; },
  registerAction: function() { return /* binding */ registerAction; },
  dataTool: function() { return /* binding */ dataTool; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/tslib@2.3.0/node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(2492);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/zrender.js + 1 modules
var zrender = __webpack_require__(80151);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(9774);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/env.js
var env = __webpack_require__(18311);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/timsort.js
var timsort = __webpack_require__(25874);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/Eventful.js
var Eventful = __webpack_require__(31969);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Global.js + 1 modules
var Global = __webpack_require__(39984);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/core/ExtensionAPI.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

var availableMethods = ['getDom', 'getZr', 'getWidth', 'getHeight', 'getDevicePixelRatio', 'dispatchAction', 'isSSR', 'isDisposed', 'on', 'off', 'getDataURL', 'getConnectedDataURL',
// 'getModel',
'getOption',
// 'getViewOfComponentModel',
// 'getViewOfSeriesModel',
'getId', 'updateLabelLayout'];
var ExtensionAPI_ExtensionAPI = /** @class */function () {
  function ExtensionAPI(ecInstance) {
    util.each(availableMethods, function (methodName) {
      this[methodName] = util.bind(ecInstance[methodName], ecInstance);
    }, this);
  }
  return ExtensionAPI;
}();
/* export default */ var core_ExtensionAPI = (ExtensionAPI_ExtensionAPI);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/core/CoordinateSystem.js
var CoordinateSystem = __webpack_require__(58241);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/OptionManager.js
var OptionManager = __webpack_require__(75476);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/preprocessor/backwardCompat.js + 1 modules
var backwardCompat = __webpack_require__(38906);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/processor/dataStack.js
var dataStack = __webpack_require__(87077);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/model/Series.js
var Series = __webpack_require__(32019);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Component.js
var Component = __webpack_require__(95421);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/view/Chart.js
var Chart = __webpack_require__(7426);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/shape/Rect.js + 1 modules
var Rect = __webpack_require__(52721);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Image.js
var Image = __webpack_require__(16440);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/animation/basicTransition.js
var basicTransition = __webpack_require__(95086);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/graphic.js
var graphic = __webpack_require__(9412);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/graphic/Path.js + 3 modules
var Path = __webpack_require__(17907);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/innerStore.js
var innerStore = __webpack_require__(61022);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/states.js
var states = __webpack_require__(72825);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/model.js
var util_model = __webpack_require__(67698);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/throttle.js
var throttle = __webpack_require__(19007);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/style.js
var style = __webpack_require__(35650);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/loading/default.js
var loading_default = __webpack_require__(23796);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/core/task.js
var core_task = __webpack_require__(93439);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/component.js
var util_component = __webpack_require__(98320);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/core/Scheduler.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
var Scheduler_Scheduler = /** @class */function () {
  function Scheduler(ecInstance, api, dataProcessorHandlers, visualHandlers) {
    // key: handlerUID
    this._stageTaskMap = (0,util.createHashMap)();
    this.ecInstance = ecInstance;
    this.api = api;
    // Fix current processors in case that in some rear cases that
    // processors might be registered after echarts instance created.
    // Register processors incrementally for a echarts instance is
    // not supported by this stream architecture.
    dataProcessorHandlers = this._dataProcessorHandlers = dataProcessorHandlers.slice();
    visualHandlers = this._visualHandlers = visualHandlers.slice();
    this._allHandlers = dataProcessorHandlers.concat(visualHandlers);
  }
  Scheduler.prototype.restoreData = function (ecModel, payload) {
    // TODO: Only restore needed series and components, but not all components.
    // Currently `restoreData` of all of the series and component will be called.
    // But some independent components like `title`, `legend`, `graphic`, `toolbox`,
    // `tooltip`, `axisPointer`, etc, do not need series refresh when `setOption`,
    // and some components like coordinate system, axes, dataZoom, visualMap only
    // need their target series refresh.
    // (1) If we are implementing this feature some day, we should consider these cases:
    // if a data processor depends on a component (e.g., dataZoomProcessor depends
    // on the settings of `dataZoom`), it should be re-performed if the component
    // is modified by `setOption`.
    // (2) If a processor depends on sevral series, speicified by its `getTargetSeries`,
    // it should be re-performed when the result array of `getTargetSeries` changed.
    // We use `dependencies` to cover these issues.
    // (3) How to update target series when coordinate system related components modified.
    // TODO: simply the dirty mechanism? Check whether only the case here can set tasks dirty,
    // and this case all of the tasks will be set as dirty.
    ecModel.restoreData(payload);
    // Theoretically an overall task not only depends on each of its target series, but also
    // depends on all of the series.
    // The overall task is not in pipeline, and `ecModel.restoreData` only set pipeline tasks
    // dirty. If `getTargetSeries` of an overall task returns nothing, we should also ensure
    // that the overall task is set as dirty and to be performed, otherwise it probably cause
    // state chaos. So we have to set dirty of all of the overall tasks manually, otherwise it
    // probably cause state chaos (consider `dataZoomProcessor`).
    this._stageTaskMap.each(function (taskRecord) {
      var overallTask = taskRecord.overallTask;
      overallTask && overallTask.dirty();
    });
  };
  // If seriesModel provided, incremental threshold is check by series data.
  Scheduler.prototype.getPerformArgs = function (task, isBlock) {
    // For overall task
    if (!task.__pipeline) {
      return;
    }
    var pipeline = this._pipelineMap.get(task.__pipeline.id);
    var pCtx = pipeline.context;
    var incremental = !isBlock && pipeline.progressiveEnabled && (!pCtx || pCtx.progressiveRender) && task.__idxInPipeline > pipeline.blockIndex;
    var step = incremental ? pipeline.step : null;
    var modDataCount = pCtx && pCtx.modDataCount;
    var modBy = modDataCount != null ? Math.ceil(modDataCount / step) : null;
    return {
      step: step,
      modBy: modBy,
      modDataCount: modDataCount
    };
  };
  Scheduler.prototype.getPipeline = function (pipelineId) {
    return this._pipelineMap.get(pipelineId);
  };
  /**
   * Current, progressive rendering starts from visual and layout.
   * Always detect render mode in the same stage, avoiding that incorrect
   * detection caused by data filtering.
   * Caution:
   * `updateStreamModes` use `seriesModel.getData()`.
   */
  Scheduler.prototype.updateStreamModes = function (seriesModel, view) {
    var pipeline = this._pipelineMap.get(seriesModel.uid);
    var data = seriesModel.getData();
    var dataLen = data.count();
    // `progressiveRender` means that can render progressively in each
    // animation frame. Note that some types of series do not provide
    // `view.incrementalPrepareRender` but support `chart.appendData`. We
    // use the term `incremental` but not `progressive` to describe the
    // case that `chart.appendData`.
    var progressiveRender = pipeline.progressiveEnabled && view.incrementalPrepareRender && dataLen >= pipeline.threshold;
    var large = seriesModel.get('large') && dataLen >= seriesModel.get('largeThreshold');
    // TODO: modDataCount should not updated if `appendData`, otherwise cause whole repaint.
    // see `test/candlestick-large3.html`
    var modDataCount = seriesModel.get('progressiveChunkMode') === 'mod' ? dataLen : null;
    seriesModel.pipelineContext = pipeline.context = {
      progressiveRender: progressiveRender,
      modDataCount: modDataCount,
      large: large
    };
  };
  Scheduler.prototype.restorePipelines = function (ecModel) {
    var scheduler = this;
    var pipelineMap = scheduler._pipelineMap = (0,util.createHashMap)();
    ecModel.eachSeries(function (seriesModel) {
      var progressive = seriesModel.getProgressive();
      var pipelineId = seriesModel.uid;
      pipelineMap.set(pipelineId, {
        id: pipelineId,
        head: null,
        tail: null,
        threshold: seriesModel.getProgressiveThreshold(),
        progressiveEnabled: progressive && !(seriesModel.preventIncremental && seriesModel.preventIncremental()),
        blockIndex: -1,
        step: Math.round(progressive || 700),
        count: 0
      });
      scheduler._pipe(seriesModel, seriesModel.dataTask);
    });
  };
  Scheduler.prototype.prepareStageTasks = function () {
    var stageTaskMap = this._stageTaskMap;
    var ecModel = this.api.getModel();
    var api = this.api;
    (0,util.each)(this._allHandlers, function (handler) {
      var record = stageTaskMap.get(handler.uid) || stageTaskMap.set(handler.uid, {});
      var errMsg = '';
      if (false) {}
      (0,util.assert)(!(handler.reset && handler.overallReset), errMsg);
      handler.reset && this._createSeriesStageTask(handler, record, ecModel, api);
      handler.overallReset && this._createOverallStageTask(handler, record, ecModel, api);
    }, this);
  };
  Scheduler.prototype.prepareView = function (view, model, ecModel, api) {
    var renderTask = view.renderTask;
    var context = renderTask.context;
    context.model = model;
    context.ecModel = ecModel;
    context.api = api;
    renderTask.__block = !view.incrementalPrepareRender;
    this._pipe(model, renderTask);
  };
  Scheduler.prototype.performDataProcessorTasks = function (ecModel, payload) {
    // If we do not use `block` here, it should be considered when to update modes.
    this._performStageTasks(this._dataProcessorHandlers, ecModel, payload, {
      block: true
    });
  };
  Scheduler.prototype.performVisualTasks = function (ecModel, payload, opt) {
    this._performStageTasks(this._visualHandlers, ecModel, payload, opt);
  };
  Scheduler.prototype._performStageTasks = function (stageHandlers, ecModel, payload, opt) {
    opt = opt || {};
    var unfinished = false;
    var scheduler = this;
    (0,util.each)(stageHandlers, function (stageHandler, idx) {
      if (opt.visualType && opt.visualType !== stageHandler.visualType) {
        return;
      }
      var stageHandlerRecord = scheduler._stageTaskMap.get(stageHandler.uid);
      var seriesTaskMap = stageHandlerRecord.seriesTaskMap;
      var overallTask = stageHandlerRecord.overallTask;
      if (overallTask) {
        var overallNeedDirty_1;
        var agentStubMap = overallTask.agentStubMap;
        agentStubMap.each(function (stub) {
          if (needSetDirty(opt, stub)) {
            stub.dirty();
            overallNeedDirty_1 = true;
          }
        });
        overallNeedDirty_1 && overallTask.dirty();
        scheduler.updatePayload(overallTask, payload);
        var performArgs_1 = scheduler.getPerformArgs(overallTask, opt.block);
        // Execute stubs firstly, which may set the overall task dirty,
        // then execute the overall task. And stub will call seriesModel.setData,
        // which ensures that in the overallTask seriesModel.getData() will not
        // return incorrect data.
        agentStubMap.each(function (stub) {
          stub.perform(performArgs_1);
        });
        if (overallTask.perform(performArgs_1)) {
          unfinished = true;
        }
      } else if (seriesTaskMap) {
        seriesTaskMap.each(function (task, pipelineId) {
          if (needSetDirty(opt, task)) {
            task.dirty();
          }
          var performArgs = scheduler.getPerformArgs(task, opt.block);
          // FIXME
          // if intending to declare `performRawSeries` in handlers, only
          // stream-independent (specifically, data item independent) operations can be
          // performed. Because if a series is filtered, most of the tasks will not
          // be performed. A stream-dependent operation probably cause wrong biz logic.
          // Perhaps we should not provide a separate callback for this case instead
          // of providing the config `performRawSeries`. The stream-dependent operations
          // and stream-independent operations should better not be mixed.
          performArgs.skip = !stageHandler.performRawSeries && ecModel.isSeriesFiltered(task.context.model);
          scheduler.updatePayload(task, payload);
          if (task.perform(performArgs)) {
            unfinished = true;
          }
        });
      }
    });
    function needSetDirty(opt, task) {
      return opt.setDirty && (!opt.dirtyMap || opt.dirtyMap.get(task.__pipeline.id));
    }
    this.unfinished = unfinished || this.unfinished;
  };
  Scheduler.prototype.performSeriesTasks = function (ecModel) {
    var unfinished;
    ecModel.eachSeries(function (seriesModel) {
      // Progress to the end for dataInit and dataRestore.
      unfinished = seriesModel.dataTask.perform() || unfinished;
    });
    this.unfinished = unfinished || this.unfinished;
  };
  Scheduler.prototype.plan = function () {
    // Travel pipelines, check block.
    this._pipelineMap.each(function (pipeline) {
      var task = pipeline.tail;
      do {
        if (task.__block) {
          pipeline.blockIndex = task.__idxInPipeline;
          break;
        }
        task = task.getUpstream();
      } while (task);
    });
  };
  Scheduler.prototype.updatePayload = function (task, payload) {
    payload !== 'remain' && (task.context.payload = payload);
  };
  Scheduler.prototype._createSeriesStageTask = function (stageHandler, stageHandlerRecord, ecModel, api) {
    var scheduler = this;
    var oldSeriesTaskMap = stageHandlerRecord.seriesTaskMap;
    // The count of stages are totally about only several dozen, so
    // do not need to reuse the map.
    var newSeriesTaskMap = stageHandlerRecord.seriesTaskMap = (0,util.createHashMap)();
    var seriesType = stageHandler.seriesType;
    var getTargetSeries = stageHandler.getTargetSeries;
    // If a stageHandler should cover all series, `createOnAllSeries` should be declared mandatorily,
    // to avoid some typo or abuse. Otherwise if an extension do not specify a `seriesType`,
    // it works but it may cause other irrelevant charts blocked.
    if (stageHandler.createOnAllSeries) {
      ecModel.eachRawSeries(create);
    } else if (seriesType) {
      ecModel.eachRawSeriesByType(seriesType, create);
    } else if (getTargetSeries) {
      getTargetSeries(ecModel, api).each(create);
    }
    function create(seriesModel) {
      var pipelineId = seriesModel.uid;
      // Init tasks for each seriesModel only once.
      // Reuse original task instance.
      var task = newSeriesTaskMap.set(pipelineId, oldSeriesTaskMap && oldSeriesTaskMap.get(pipelineId) || (0,core_task.createTask)({
        plan: seriesTaskPlan,
        reset: seriesTaskReset,
        count: seriesTaskCount
      }));
      task.context = {
        model: seriesModel,
        ecModel: ecModel,
        api: api,
        // PENDING: `useClearVisual` not used?
        useClearVisual: stageHandler.isVisual && !stageHandler.isLayout,
        plan: stageHandler.plan,
        reset: stageHandler.reset,
        scheduler: scheduler
      };
      scheduler._pipe(seriesModel, task);
    }
  };
  Scheduler.prototype._createOverallStageTask = function (stageHandler, stageHandlerRecord, ecModel, api) {
    var scheduler = this;
    var overallTask = stageHandlerRecord.overallTask = stageHandlerRecord.overallTask
    // For overall task, the function only be called on reset stage.
    || (0,core_task.createTask)({
      reset: overallTaskReset
    });
    overallTask.context = {
      ecModel: ecModel,
      api: api,
      overallReset: stageHandler.overallReset,
      scheduler: scheduler
    };
    var oldAgentStubMap = overallTask.agentStubMap;
    // The count of stages are totally about only several dozen, so
    // do not need to reuse the map.
    var newAgentStubMap = overallTask.agentStubMap = (0,util.createHashMap)();
    var seriesType = stageHandler.seriesType;
    var getTargetSeries = stageHandler.getTargetSeries;
    var overallProgress = true;
    var shouldOverallTaskDirty = false;
    // FIXME:TS never used, so comment it
    // let modifyOutputEnd = stageHandler.modifyOutputEnd;
    // An overall task with seriesType detected or has `getTargetSeries`, we add
    // stub in each pipelines, it will set the overall task dirty when the pipeline
    // progress. Moreover, to avoid call the overall task each frame (too frequent),
    // we set the pipeline block.
    var errMsg = '';
    if (false) {}
    (0,util.assert)(!stageHandler.createOnAllSeries, errMsg);
    if (seriesType) {
      ecModel.eachRawSeriesByType(seriesType, createStub);
    } else if (getTargetSeries) {
      getTargetSeries(ecModel, api).each(createStub);
    }
    // Otherwise, (usually it is legacy case), the overall task will only be
    // executed when upstream is dirty. Otherwise the progressive rendering of all
    // pipelines will be disabled unexpectedly. But it still needs stubs to receive
    // dirty info from upstream.
    else {
      overallProgress = false;
      (0,util.each)(ecModel.getSeries(), createStub);
    }
    function createStub(seriesModel) {
      var pipelineId = seriesModel.uid;
      var stub = newAgentStubMap.set(pipelineId, oldAgentStubMap && oldAgentStubMap.get(pipelineId) || (
      // When the result of `getTargetSeries` changed, the overallTask
      // should be set as dirty and re-performed.
      shouldOverallTaskDirty = true, (0,core_task.createTask)({
        reset: stubReset,
        onDirty: stubOnDirty
      })));
      stub.context = {
        model: seriesModel,
        overallProgress: overallProgress
        // FIXME:TS never used, so comment it
        // modifyOutputEnd: modifyOutputEnd
      };
      stub.agent = overallTask;
      stub.__block = overallProgress;
      scheduler._pipe(seriesModel, stub);
    }
    if (shouldOverallTaskDirty) {
      overallTask.dirty();
    }
  };
  Scheduler.prototype._pipe = function (seriesModel, task) {
    var pipelineId = seriesModel.uid;
    var pipeline = this._pipelineMap.get(pipelineId);
    !pipeline.head && (pipeline.head = task);
    pipeline.tail && pipeline.tail.pipe(task);
    pipeline.tail = task;
    task.__idxInPipeline = pipeline.count++;
    task.__pipeline = pipeline;
  };
  Scheduler.wrapStageHandler = function (stageHandler, visualType) {
    if ((0,util.isFunction)(stageHandler)) {
      stageHandler = {
        overallReset: stageHandler,
        seriesType: detectSeriseType(stageHandler)
      };
    }
    stageHandler.uid = (0,util_component.getUID)('stageHandler');
    visualType && (stageHandler.visualType = visualType);
    return stageHandler;
  };
  ;
  return Scheduler;
}();
function overallTaskReset(context) {
  context.overallReset(context.ecModel, context.api, context.payload);
}
function stubReset(context) {
  return context.overallProgress && stubProgress;
}
function stubProgress() {
  this.agent.dirty();
  this.getDownstream().dirty();
}
function stubOnDirty() {
  this.agent && this.agent.dirty();
}
function seriesTaskPlan(context) {
  return context.plan ? context.plan(context.model, context.ecModel, context.api, context.payload) : null;
}
function seriesTaskReset(context) {
  if (context.useClearVisual) {
    context.data.clearAllVisual();
  }
  var resetDefines = context.resetDefines = (0,util_model.normalizeToArray)(context.reset(context.model, context.ecModel, context.api, context.payload));
  return resetDefines.length > 1 ? (0,util.map)(resetDefines, function (v, idx) {
    return makeSeriesTaskProgress(idx);
  }) : singleSeriesTaskProgress;
}
var singleSeriesTaskProgress = makeSeriesTaskProgress(0);
function makeSeriesTaskProgress(resetDefineIdx) {
  return function (params, context) {
    var data = context.data;
    var resetDefine = context.resetDefines[resetDefineIdx];
    if (resetDefine && resetDefine.dataEach) {
      for (var i = params.start; i < params.end; i++) {
        resetDefine.dataEach(data, i);
      }
    } else if (resetDefine && resetDefine.progress) {
      resetDefine.progress(params, data);
    }
  };
}
function seriesTaskCount(context) {
  return context.data.count();
}
/**
 * Only some legacy stage handlers (usually in echarts extensions) are pure function.
 * To ensure that they can work normally, they should work in block mode, that is,
 * they should not be started util the previous tasks finished. So they cause the
 * progressive rendering disabled. We try to detect the series type, to narrow down
 * the block range to only the series type they concern, but not all series.
 */
function detectSeriseType(legacyFunc) {
  Scheduler_seriesType = null;
  try {
    // Assume there is no async when calling `eachSeriesByType`.
    legacyFunc(ecModelMock, apiMock);
  } catch (e) {}
  return Scheduler_seriesType;
}
var ecModelMock = {};
var apiMock = {};
var Scheduler_seriesType;
mockMethods(ecModelMock, Global["default"]);
mockMethods(apiMock, core_ExtensionAPI);
ecModelMock.eachSeriesByType = ecModelMock.eachRawSeriesByType = function (type) {
  Scheduler_seriesType = type;
};
ecModelMock.eachComponent = function (cond) {
  if (cond.mainType === 'series' && cond.subType) {
    Scheduler_seriesType = cond.subType;
  }
};
function mockMethods(target, Clz) {
  /* eslint-disable */
  for (var name_1 in Clz.prototype) {
    // Do not use hasOwnProperty
    target[name_1] = util.noop;
  }
  /* eslint-enable */
}
/* export default */ var core_Scheduler = (Scheduler_Scheduler);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/theme/dark.js
var dark = __webpack_require__(32646);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/clazz.js
var clazz = __webpack_require__(72749);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/ECEventProcessor.js
var ECEventProcessor = __webpack_require__(83595);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/symbol.js
var symbol = __webpack_require__(34295);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/helper.js
var helper = __webpack_require__(34235);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/log.js
var log = __webpack_require__(54137);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/legacy/dataSelectAction.js
var dataSelectAction = __webpack_require__(27644);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/data/helper/transform.js
var transform = __webpack_require__(90144);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/core/locale.js
var locale = __webpack_require__(57216);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/util/event.js
var util_event = __webpack_require__(86075);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/visual/decal.js
var decal = __webpack_require__(70450);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/core/lifecycle.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
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
var lifecycle = new Eventful["default"]();
/* export default */ var core_lifecycle = (lifecycle);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@6.0.0/node_modules/zrender/lib/core/platform.js
var platform = __webpack_require__(70145);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/core/impl.js
var impl = __webpack_require__(18816);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/chart/custom/customSeriesRegister.js
var customSeriesRegister = __webpack_require__(15462);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/core/echarts.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */


/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/





































var version = '6.0.0';
var dependencies = {
  zrender: '6.0.0'
};
var TEST_FRAME_REMAIN_TIME = 1;
var PRIORITY_PROCESSOR_SERIES_FILTER = 800;
// Some data processors depends on the stack result dimension (to calculate data extent).
// So data stack stage should be in front of data processing stage.
var PRIORITY_PROCESSOR_DATASTACK = 900;
// "Data filter" will block the stream, so it should be
// put at the beginning of data processing.
var PRIORITY_PROCESSOR_FILTER = 1000;
var PRIORITY_PROCESSOR_DEFAULT = 2000;
var PRIORITY_PROCESSOR_STATISTIC = 5000;
var PRIORITY_VISUAL_LAYOUT = 1000;
var PRIORITY_VISUAL_PROGRESSIVE_LAYOUT = 1100;
var PRIORITY_VISUAL_GLOBAL = 2000;
var PRIORITY_VISUAL_CHART = 3000;
var PRIORITY_VISUAL_COMPONENT = 4000;
// Visual property in data. Greater than `PRIORITY_VISUAL_COMPONENT` to enable to
// overwrite the viusal result of component (like `visualMap`)
// using data item specific setting (like itemStyle.xxx on data item)
var PRIORITY_VISUAL_CHART_DATA_CUSTOM = 4500;
// Greater than `PRIORITY_VISUAL_CHART_DATA_CUSTOM` to enable to layout based on
// visual result like `symbolSize`.
var PRIORITY_VISUAL_POST_CHART_LAYOUT = 4600;
var PRIORITY_VISUAL_BRUSH = 5000;
var PRIORITY_VISUAL_ARIA = 6000;
var PRIORITY_VISUAL_DECAL = 7000;
var PRIORITY = {
  PROCESSOR: {
    FILTER: PRIORITY_PROCESSOR_FILTER,
    SERIES_FILTER: PRIORITY_PROCESSOR_SERIES_FILTER,
    STATISTIC: PRIORITY_PROCESSOR_STATISTIC
  },
  VISUAL: {
    LAYOUT: PRIORITY_VISUAL_LAYOUT,
    PROGRESSIVE_LAYOUT: PRIORITY_VISUAL_PROGRESSIVE_LAYOUT,
    GLOBAL: PRIORITY_VISUAL_GLOBAL,
    CHART: PRIORITY_VISUAL_CHART,
    POST_CHART_LAYOUT: PRIORITY_VISUAL_POST_CHART_LAYOUT,
    COMPONENT: PRIORITY_VISUAL_COMPONENT,
    BRUSH: PRIORITY_VISUAL_BRUSH,
    CHART_ITEM: PRIORITY_VISUAL_CHART_DATA_CUSTOM,
    ARIA: PRIORITY_VISUAL_ARIA,
    DECAL: PRIORITY_VISUAL_DECAL
  }
};
// Main process have three entries: `setOption`, `dispatchAction` and `resize`,
// where they must not be invoked nestedly, except the only case: invoke
// dispatchAction with updateMethod "none" in main process.
// This flag is used to carry out this rule.
// All events will be triggered out side main process (i.e. when !this[IN_MAIN_PROCESS]).
var IN_MAIN_PROCESS_KEY = '__flagInMainProcess';
// Useful for detecting outdated rendering results in scenarios that these issues are involved:
//  - Use shortcut (such as, updateTransform, or no update) to start a main process.
//  - Asynchronously update rendered view (e.g., graph force layout).
//  - Multiple ChartView/ComponentView render to one group cooperatively.
var MAIN_PROCESS_VERSION_KEY = '__mainProcessVersion';
var PENDING_UPDATE = '__pendingUpdate';
var STATUS_NEEDS_UPDATE_KEY = '__needsUpdateStatus';
var ACTION_REG = /^[a-zA-Z0-9_]+$/;
var CONNECT_STATUS_KEY = '__connectUpdateStatus';
var CONNECT_STATUS_PENDING = 0;
var CONNECT_STATUS_UPDATING = 1;
var CONNECT_STATUS_UPDATED = 2;
;
;
function createRegisterEventWithLowercaseECharts(method) {
  return function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (this.isDisposed()) {
      disposedWarning(this.id);
      return;
    }
    return toLowercaseNameAndCallEventful(this, method, args);
  };
}
function createRegisterEventWithLowercaseMessageCenter(method) {
  return function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    return toLowercaseNameAndCallEventful(this, method, args);
  };
}
function toLowercaseNameAndCallEventful(host, method, args) {
  // `args[0]` is event name. Event name is all lowercase.
  args[0] = args[0] && args[0].toLowerCase();
  return Eventful["default"].prototype[method].apply(host, args);
}
var echarts_MessageCenter = /** @class */function (_super) {
  (0,tslib_es6.__extends)(MessageCenter, _super);
  function MessageCenter() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  return MessageCenter;
}(Eventful["default"]);
var messageCenterProto = echarts_MessageCenter.prototype;
messageCenterProto.on = createRegisterEventWithLowercaseMessageCenter('on');
messageCenterProto.off = createRegisterEventWithLowercaseMessageCenter('off');
// ---------------------------------------
// Internal method names for class ECharts
// ---------------------------------------
var prepare;
var prepareView;
var updateDirectly;
var updateMethods;
var doConvertPixel;
var updateStreamModes;
var doDispatchAction;
var flushPendingActions;
var triggerUpdatedEvent;
var bindRenderedEvent;
var bindMouseEvent;
var render;
var renderComponents;
var renderSeries;
var createExtensionAPI;
var enableConnect;
var markStatusToUpdate;
var applyChangedStates;
var updateMainProcessVersion;
var echarts_ECharts = /** @class */function (_super) {
  (0,tslib_es6.__extends)(ECharts, _super);
  function ECharts(dom,
  // Theme name or themeOption.
  theme, opts) {
    var _this = _super.call(this, new ECEventProcessor.ECEventProcessor()) || this;
    _this._chartsViews = [];
    _this._chartsMap = {};
    _this._componentsViews = [];
    _this._componentsMap = {};
    // Can't dispatch action during rendering procedure
    _this._pendingActions = [];
    opts = opts || {};
    _this._dom = dom;
    var defaultRenderer = 'canvas';
    var defaultCoarsePointer = 'auto';
    var defaultUseDirtyRect = false;
    _this[MAIN_PROCESS_VERSION_KEY] = 1;
    if (false) { var root }
    if (opts.ssr) {
      zrender.registerSSRDataGetter(function (el) {
        var ecData = (0,innerStore.getECData)(el);
        var dataIndex = ecData.dataIndex;
        if (dataIndex == null) {
          return;
        }
        var hashMap = (0,util.createHashMap)();
        hashMap.set('series_index', ecData.seriesIndex);
        hashMap.set('data_index', dataIndex);
        ecData.ssrType && hashMap.set('ssr_type', ecData.ssrType);
        return hashMap;
      });
    }
    var zr = _this._zr = zrender.init(dom, {
      renderer: opts.renderer || defaultRenderer,
      devicePixelRatio: opts.devicePixelRatio,
      width: opts.width,
      height: opts.height,
      ssr: opts.ssr,
      useDirtyRect: (0,util.retrieve2)(opts.useDirtyRect, defaultUseDirtyRect),
      useCoarsePointer: (0,util.retrieve2)(opts.useCoarsePointer, defaultCoarsePointer),
      pointerSize: opts.pointerSize
    });
    _this._ssr = opts.ssr;
    // Expect 60 fps.
    _this._throttledZrFlush = (0,throttle.throttle)((0,util.bind)(zr.flush, zr), 17);
    _this._updateTheme(theme);
    _this._locale = (0,locale.createLocaleObject)(opts.locale || locale.SYSTEM_LANG);
    _this._coordSysMgr = new CoordinateSystem["default"]();
    var api = _this._api = createExtensionAPI(_this);
    // Sort on demand
    function prioritySortFunc(a, b) {
      return a.__prio - b.__prio;
    }
    (0,timsort["default"])(visualFuncs, prioritySortFunc);
    (0,timsort["default"])(dataProcessorFuncs, prioritySortFunc);
    _this._scheduler = new core_Scheduler(_this, api, dataProcessorFuncs, visualFuncs);
    _this._messageCenter = new echarts_MessageCenter();
    // Init mouse events
    _this._initEvents();
    // In case some people write `window.onresize = chart.resize`
    _this.resize = (0,util.bind)(_this.resize, _this);
    zr.animation.on('frame', _this._onframe, _this);
    bindRenderedEvent(zr, _this);
    bindMouseEvent(zr, _this);
    // ECharts instance can be used as value.
    (0,util.setAsPrimitive)(_this);
    return _this;
  }
  ECharts.prototype._onframe = function () {
    if (this._disposed) {
      return;
    }
    applyChangedStates(this);
    var scheduler = this._scheduler;
    // Lazy update
    if (this[PENDING_UPDATE]) {
      var silent = this[PENDING_UPDATE].silent;
      this[IN_MAIN_PROCESS_KEY] = true;
      updateMainProcessVersion(this);
      try {
        prepare(this);
        updateMethods.update.call(this, null, this[PENDING_UPDATE].updateParams);
      } catch (e) {
        this[IN_MAIN_PROCESS_KEY] = false;
        this[PENDING_UPDATE] = null;
        throw e;
      }
      // At present, in each frame, zrender performs:
      //   (1) animation step forward.
      //   (2) trigger('frame') (where this `_onframe` is called)
      //   (3) zrender flush (render).
      // If we do nothing here, since we use `setToFinal: true`, the step (3) above
      // will render the final state of the elements before the real animation started.
      this._zr.flush();
      this[IN_MAIN_PROCESS_KEY] = false;
      this[PENDING_UPDATE] = null;
      flushPendingActions.call(this, silent);
      triggerUpdatedEvent.call(this, silent);
    }
    // Avoid do both lazy update and progress in one frame.
    else if (scheduler.unfinished) {
      // Stream progress.
      var remainTime = TEST_FRAME_REMAIN_TIME;
      var ecModel = this._model;
      var api = this._api;
      scheduler.unfinished = false;
      do {
        var startTime = +new Date();
        scheduler.performSeriesTasks(ecModel);
        // Currently dataProcessorFuncs do not check threshold.
        scheduler.performDataProcessorTasks(ecModel);
        updateStreamModes(this, ecModel);
        // Do not update coordinate system here. Because that coord system update in
        // each frame is not a good user experience. So we follow the rule that
        // the extent of the coordinate system is determined in the first frame (the
        // frame is executed immediately after task reset.
        // this._coordSysMgr.update(ecModel, api);
        // console.log('--- ec frame visual ---', remainTime);
        scheduler.performVisualTasks(ecModel);
        renderSeries(this, this._model, api, 'remain', {});
        remainTime -= +new Date() - startTime;
      } while (remainTime > 0 && scheduler.unfinished);
      // Call flush explicitly for trigger finished event.
      if (!scheduler.unfinished) {
        this._zr.flush();
      }
      // Else, zr flushing be ensue within the same frame,
      // because zr flushing is after onframe event.
    }
  };
  ECharts.prototype.getDom = function () {
    return this._dom;
  };
  ECharts.prototype.getId = function () {
    return this.id;
  };
  ECharts.prototype.getZr = function () {
    return this._zr;
  };
  ECharts.prototype.isSSR = function () {
    return this._ssr;
  };
  /* eslint-disable-next-line */
  ECharts.prototype.setOption = function (option, notMerge, lazyUpdate) {
    if (this[IN_MAIN_PROCESS_KEY]) {
      if (false) {}
      return;
    }
    if (this._disposed) {
      disposedWarning(this.id);
      return;
    }
    var silent;
    var replaceMerge;
    var transitionOpt;
    if ((0,util.isObject)(notMerge)) {
      lazyUpdate = notMerge.lazyUpdate;
      silent = notMerge.silent;
      replaceMerge = notMerge.replaceMerge;
      transitionOpt = notMerge.transition;
      notMerge = notMerge.notMerge;
    }
    this[IN_MAIN_PROCESS_KEY] = true;
    updateMainProcessVersion(this);
    if (!this._model || notMerge) {
      var optionManager = new OptionManager["default"](this._api);
      var theme = this._theme;
      var ecModel = this._model = new Global["default"]();
      ecModel.scheduler = this._scheduler;
      ecModel.ssr = this._ssr;
      ecModel.init(null, null, null, theme, this._locale, optionManager);
    }
    this._model.setOption(option, {
      replaceMerge: replaceMerge
    }, optionPreprocessorFuncs);
    var updateParams = {
      seriesTransition: transitionOpt,
      optionChanged: true
    };
    if (lazyUpdate) {
      this[PENDING_UPDATE] = {
        silent: silent,
        updateParams: updateParams
      };
      this[IN_MAIN_PROCESS_KEY] = false;
      // `setOption(option, {lazyMode: true})` may be called when zrender has been slept.
      // It should wake it up to make sure zrender start to render at the next frame.
      this.getZr().wakeUp();
    } else {
      try {
        prepare(this);
        updateMethods.update.call(this, null, updateParams);
      } catch (e) {
        this[PENDING_UPDATE] = null;
        this[IN_MAIN_PROCESS_KEY] = false;
        throw e;
      }
      // Ensure zr refresh sychronously, and then pixel in canvas can be
      // fetched after `setOption`.
      if (!this._ssr) {
        // not use flush when using ssr mode.
        this._zr.flush();
      }
      this[PENDING_UPDATE] = null;
      this[IN_MAIN_PROCESS_KEY] = false;
      flushPendingActions.call(this, silent);
      triggerUpdatedEvent.call(this, silent);
    }
  };
  /**
   * Update theme with name or theme option and repaint the chart.
   * @param theme Theme name or theme option.
   * @param opts Optional settings
   */
  ECharts.prototype.setTheme = function (theme, opts) {
    if (this[IN_MAIN_PROCESS_KEY]) {
      if (false) {}
      return;
    }
    if (this._disposed) {
      disposedWarning(this.id);
      return;
    }
    var ecModel = this._model;
    if (!ecModel) {
      return;
    }
    var silent = opts && opts.silent;
    var updateParams = null;
    if (this[PENDING_UPDATE]) {
      if (silent == null) {
        silent = this[PENDING_UPDATE].silent;
      }
      updateParams = this[PENDING_UPDATE].updateParams;
      this[PENDING_UPDATE] = null;
    }
    this[IN_MAIN_PROCESS_KEY] = true;
    updateMainProcessVersion(this);
    try {
      this._updateTheme(theme);
      ecModel.setTheme(this._theme);
      prepare(this);
      updateMethods.update.call(this, {
        type: 'setTheme'
      }, updateParams);
    } catch (e) {
      this[IN_MAIN_PROCESS_KEY] = false;
      throw e;
    }
    this[IN_MAIN_PROCESS_KEY] = false;
    flushPendingActions.call(this, silent);
    triggerUpdatedEvent.call(this, silent);
  };
  ECharts.prototype._updateTheme = function (theme) {
    if ((0,util.isString)(theme)) {
      theme = themeStorage[theme];
    }
    if (theme) {
      theme = (0,util.clone)(theme);
      theme && (0,backwardCompat["default"])(theme, true);
      this._theme = theme;
    }
  };
  // We don't want developers to use getModel directly.
  ECharts.prototype.getModel = function () {
    return this._model;
  };
  ECharts.prototype.getOption = function () {
    return this._model && this._model.getOption();
  };
  ECharts.prototype.getWidth = function () {
    return this._zr.getWidth();
  };
  ECharts.prototype.getHeight = function () {
    return this._zr.getHeight();
  };
  ECharts.prototype.getDevicePixelRatio = function () {
    return this._zr.painter.dpr
    /* eslint-disable-next-line */ || env["default"].hasGlobalWindow && window.devicePixelRatio || 1;
  };
  /**
   * Get canvas which has all thing rendered
   * @deprecated Use renderToCanvas instead.
   */
  ECharts.prototype.getRenderedCanvas = function (opts) {
    if (false) {}
    return this.renderToCanvas(opts);
  };
  ECharts.prototype.renderToCanvas = function (opts) {
    opts = opts || {};
    var painter = this._zr.painter;
    if (false) {}
    return painter.getRenderedCanvas({
      backgroundColor: opts.backgroundColor || this._model.get('backgroundColor'),
      pixelRatio: opts.pixelRatio || this.getDevicePixelRatio()
    });
  };
  ECharts.prototype.renderToSVGString = function (opts) {
    opts = opts || {};
    var painter = this._zr.painter;
    if (false) {}
    return painter.renderToString({
      useViewBox: opts.useViewBox
    });
  };
  /**
   * Get svg data url
   */
  ECharts.prototype.getSvgDataURL = function () {
    var zr = this._zr;
    var list = zr.storage.getDisplayList();
    // Stop animations
    (0,util.each)(list, function (el) {
      el.stopAnimation(null, true);
    });
    return zr.painter.toDataURL();
  };
  ECharts.prototype.getDataURL = function (opts) {
    if (this._disposed) {
      disposedWarning(this.id);
      return;
    }
    opts = opts || {};
    var excludeComponents = opts.excludeComponents;
    var ecModel = this._model;
    var excludesComponentViews = [];
    var self = this;
    (0,util.each)(excludeComponents, function (componentType) {
      ecModel.eachComponent({
        mainType: componentType
      }, function (component) {
        var view = self._componentsMap[component.__viewId];
        if (!view.group.ignore) {
          excludesComponentViews.push(view);
          view.group.ignore = true;
        }
      });
    });
    var url = this._zr.painter.getType() === 'svg' ? this.getSvgDataURL() : this.renderToCanvas(opts).toDataURL('image/' + (opts && opts.type || 'png'));
    (0,util.each)(excludesComponentViews, function (view) {
      view.group.ignore = false;
    });
    return url;
  };
  ECharts.prototype.getConnectedDataURL = function (opts) {
    if (this._disposed) {
      disposedWarning(this.id);
      return;
    }
    var isSvg = opts.type === 'svg';
    var groupId = this.group;
    var mathMin = Math.min;
    var mathMax = Math.max;
    var MAX_NUMBER = Infinity;
    if (connectedGroups[groupId]) {
      var left_1 = MAX_NUMBER;
      var top_1 = MAX_NUMBER;
      var right_1 = -MAX_NUMBER;
      var bottom_1 = -MAX_NUMBER;
      var canvasList_1 = [];
      var dpr_1 = opts && opts.pixelRatio || this.getDevicePixelRatio();
      (0,util.each)(instances, function (chart, id) {
        if (chart.group === groupId) {
          var canvas = isSvg ? chart.getZr().painter.getSvgDom().innerHTML : chart.renderToCanvas((0,util.clone)(opts));
          var boundingRect = chart.getDom().getBoundingClientRect();
          left_1 = mathMin(boundingRect.left, left_1);
          top_1 = mathMin(boundingRect.top, top_1);
          right_1 = mathMax(boundingRect.right, right_1);
          bottom_1 = mathMax(boundingRect.bottom, bottom_1);
          canvasList_1.push({
            dom: canvas,
            left: boundingRect.left,
            top: boundingRect.top
          });
        }
      });
      left_1 *= dpr_1;
      top_1 *= dpr_1;
      right_1 *= dpr_1;
      bottom_1 *= dpr_1;
      var width = right_1 - left_1;
      var height = bottom_1 - top_1;
      var targetCanvas = platform.platformApi.createCanvas();
      var zr_1 = zrender.init(targetCanvas, {
        renderer: isSvg ? 'svg' : 'canvas'
      });
      zr_1.resize({
        width: width,
        height: height
      });
      if (isSvg) {
        var content_1 = '';
        (0,util.each)(canvasList_1, function (item) {
          var x = item.left - left_1;
          var y = item.top - top_1;
          content_1 += '<g transform="translate(' + x + ',' + y + ')">' + item.dom + '</g>';
        });
        zr_1.painter.getSvgRoot().innerHTML = content_1;
        if (opts.connectedBackgroundColor) {
          zr_1.painter.setBackgroundColor(opts.connectedBackgroundColor);
        }
        zr_1.refreshImmediately();
        return zr_1.painter.toDataURL();
      } else {
        // Background between the charts
        if (opts.connectedBackgroundColor) {
          zr_1.add(new Rect["default"]({
            shape: {
              x: 0,
              y: 0,
              width: width,
              height: height
            },
            style: {
              fill: opts.connectedBackgroundColor
            }
          }));
        }
        (0,util.each)(canvasList_1, function (item) {
          var img = new Image["default"]({
            style: {
              x: item.left * dpr_1 - left_1,
              y: item.top * dpr_1 - top_1,
              image: item.dom
            }
          });
          zr_1.add(img);
        });
        zr_1.refreshImmediately();
        return targetCanvas.toDataURL('image/' + (opts && opts.type || 'png'));
      }
    } else {
      return this.getDataURL(opts);
    }
  };
  ECharts.prototype.convertToPixel = function (finder, value, opt) {
    return doConvertPixel(this, 'convertToPixel', finder, value, opt);
  };
  /**
   * Convert from logical coordinate system to pixel coordinate system.
   * See CoordinateSystem#convertToPixel.
   *
   * @see CoordinateSystem['dataToLayout'] for parameters and return.
   * @see CoordinateSystemDataCoord
   */
  ECharts.prototype.convertToLayout = function (finder, value, opt) {
    return doConvertPixel(this, 'convertToLayout', finder, value, opt);
  };
  // The above are signatures from before v6, thus they should be preserved for backward compat.
  ECharts.prototype.convertFromPixel = function (finder, value, opt) {
    return doConvertPixel(this, 'convertFromPixel', finder, value, opt);
  };
  /**
   * Is the specified coordinate systems or components contain the given pixel point.
   * @param {Array|number} value
   * @return {boolean} result
   */
  ECharts.prototype.containPixel = function (finder, value) {
    if (this._disposed) {
      disposedWarning(this.id);
      return;
    }
    var ecModel = this._model;
    var result;
    var findResult = util_model.parseFinder(ecModel, finder);
    (0,util.each)(findResult, function (models, key) {
      key.indexOf('Models') >= 0 && (0,util.each)(models, function (model) {
        var coordSys = model.coordinateSystem;
        if (coordSys && coordSys.containPoint) {
          result = result || !!coordSys.containPoint(value);
        } else if (key === 'seriesModels') {
          var view = this._chartsMap[model.__viewId];
          if (view && view.containPoint) {
            result = result || view.containPoint(value, model);
          } else {
            if (false) {}
          }
        } else {
          if (false) {}
        }
      }, this);
    }, this);
    return !!result;
  };
  /**
   * Get visual from series or data.
   * @param finder
   *        If string, e.g., 'series', means {seriesIndex: 0}.
   *        If Object, could contain some of these properties below:
   *        {
   *            seriesIndex / seriesId / seriesName,
   *            dataIndex / dataIndexInside
   *        }
   *        If dataIndex is not specified, series visual will be fetched,
   *        but not data item visual.
   *        If all of seriesIndex, seriesId, seriesName are not specified,
   *        visual will be fetched from first series.
   * @param visualType 'color', 'symbol', 'symbolSize'
   */
  ECharts.prototype.getVisual = function (finder, visualType) {
    var ecModel = this._model;
    var parsedFinder = util_model.parseFinder(ecModel, finder, {
      defaultMainType: 'series'
    });
    var seriesModel = parsedFinder.seriesModel;
    if (false) {}
    var data = seriesModel.getData();
    var dataIndexInside = parsedFinder.hasOwnProperty('dataIndexInside') ? parsedFinder.dataIndexInside : parsedFinder.hasOwnProperty('dataIndex') ? data.indexOfRawIndex(parsedFinder.dataIndex) : null;
    return dataIndexInside != null ? (0,helper.getItemVisualFromData)(data, dataIndexInside, visualType) : (0,helper.getVisualFromData)(data, visualType);
  };
  /**
   * Get view of corresponding component model
   */
  ECharts.prototype.getViewOfComponentModel = function (componentModel) {
    return this._componentsMap[componentModel.__viewId];
  };
  /**
   * Get view of corresponding series model
   */
  ECharts.prototype.getViewOfSeriesModel = function (seriesModel) {
    return this._chartsMap[seriesModel.__viewId];
  };
  ECharts.prototype._initEvents = function () {
    var _this = this;
    (0,util.each)(MOUSE_EVENT_NAMES, function (eveName) {
      var handler = function (e) {
        var ecModel = _this.getModel();
        var el = e.target;
        var params;
        var isGlobalOut = eveName === 'globalout';
        // no e.target when 'globalout'.
        if (isGlobalOut) {
          params = {};
        } else {
          el && (0,util_event.findEventDispatcher)(el, function (parent) {
            var ecData = (0,innerStore.getECData)(parent);
            if (ecData && ecData.dataIndex != null) {
              var dataModel = ecData.dataModel || ecModel.getSeriesByIndex(ecData.seriesIndex);
              params = dataModel && dataModel.getDataParams(ecData.dataIndex, ecData.dataType, el) || {};
              return true;
            }
            // If element has custom eventData of components
            else if (ecData.eventData) {
              params = (0,util.extend)({}, ecData.eventData);
              return true;
            }
          }, true);
        }
        // Contract: if params prepared in mouse event,
        // these properties must be specified:
        // {
        //    componentType: string (component main type)
        //    componentIndex: number
        // }
        // Otherwise event query can not work.
        if (params) {
          var componentType = params.componentType;
          var componentIndex = params.componentIndex;
          // Special handling for historic reason: when trigger by
          // markLine/markPoint/markArea, the componentType is
          // 'markLine'/'markPoint'/'markArea', but we should better
          // enable them to be queried by seriesIndex, since their
          // option is set in each series.
          if (componentType === 'markLine' || componentType === 'markPoint' || componentType === 'markArea') {
            componentType = 'series';
            componentIndex = params.seriesIndex;
          }
          var model = componentType && componentIndex != null && ecModel.getComponent(componentType, componentIndex);
          var view = model && _this[model.mainType === 'series' ? '_chartsMap' : '_componentsMap'][model.__viewId];
          if (false) {}
          params.event = e;
          params.type = eveName;
          _this._$eventProcessor.eventInfo = {
            targetEl: el,
            packedEvent: params,
            model: model,
            view: view
          };
          _this.trigger(eveName, params);
        }
      };
      // Consider that some component (like tooltip, brush, ...)
      // register zr event handler, but user event handler might
      // do anything, such as call `setOption` or `dispatchAction`,
      // which probably update any of the content and probably
      // cause problem if it is called previous other inner handlers.
      handler.zrEventfulCallAtLast = true;
      _this._zr.on(eveName, handler, _this);
    });
    var messageCenter = this._messageCenter;
    (0,util.each)(publicEventTypeMap, function (_, eventType) {
      messageCenter.on(eventType, function (event) {
        _this.trigger(eventType, event);
      });
    });
    (0,dataSelectAction.handleLegacySelectEvents)(messageCenter, this, this._api);
  };
  ECharts.prototype.isDisposed = function () {
    return this._disposed;
  };
  ECharts.prototype.clear = function () {
    if (this._disposed) {
      disposedWarning(this.id);
      return;
    }
    this.setOption({
      series: []
    }, true);
  };
  ECharts.prototype.dispose = function () {
    if (this._disposed) {
      disposedWarning(this.id);
      return;
    }
    this._disposed = true;
    var dom = this.getDom();
    if (dom) {
      util_model.setAttribute(this.getDom(), DOM_ATTRIBUTE_KEY, '');
    }
    var chart = this;
    var api = chart._api;
    var ecModel = chart._model;
    (0,util.each)(chart._componentsViews, function (component) {
      component.dispose(ecModel, api);
    });
    (0,util.each)(chart._chartsViews, function (chart) {
      chart.dispose(ecModel, api);
    });
    // Dispose after all views disposed
    chart._zr.dispose();
    // Set properties to null.
    // To reduce the memory cost in case the top code still holds this instance unexpectedly.
    chart._dom = chart._model = chart._chartsMap = chart._componentsMap = chart._chartsViews = chart._componentsViews = chart._scheduler = chart._api = chart._zr = chart._throttledZrFlush = chart._theme = chart._coordSysMgr = chart._messageCenter = null;
    delete instances[chart.id];
  };
  /**
   * Resize the chart
   */
  ECharts.prototype.resize = function (opts) {
    if (this[IN_MAIN_PROCESS_KEY]) {
      if (false) {}
      return;
    }
    if (this._disposed) {
      disposedWarning(this.id);
      return;
    }
    this._zr.resize(opts);
    var ecModel = this._model;
    // Resize loading effect
    this._loadingFX && this._loadingFX.resize();
    if (!ecModel) {
      return;
    }
    var needPrepare = ecModel.resetOption('media');
    var silent = opts && opts.silent;
    // There is some real cases that:
    // chart.setOption(option, { lazyUpdate: true });
    // chart.resize();
    if (this[PENDING_UPDATE]) {
      if (silent == null) {
        silent = this[PENDING_UPDATE].silent;
      }
      needPrepare = true;
      this[PENDING_UPDATE] = null;
    }
    this[IN_MAIN_PROCESS_KEY] = true;
    updateMainProcessVersion(this);
    try {
      needPrepare && prepare(this);
      updateMethods.update.call(this, {
        type: 'resize',
        animation: (0,util.extend)({
          // Disable animation
          duration: 0
        }, opts && opts.animation)
      });
    } catch (e) {
      this[IN_MAIN_PROCESS_KEY] = false;
      throw e;
    }
    this[IN_MAIN_PROCESS_KEY] = false;
    flushPendingActions.call(this, silent);
    triggerUpdatedEvent.call(this, silent);
  };
  ECharts.prototype.showLoading = function (name, cfg) {
    if (this._disposed) {
      disposedWarning(this.id);
      return;
    }
    if ((0,util.isObject)(name)) {
      cfg = name;
      name = '';
    }
    name = name || 'default';
    this.hideLoading();
    if (!loadingEffects[name]) {
      if (false) {}
      return;
    }
    var el = loadingEffects[name](this._api, cfg);
    var zr = this._zr;
    this._loadingFX = el;
    zr.add(el);
  };
  /**
   * Hide loading effect
   */
  ECharts.prototype.hideLoading = function () {
    if (this._disposed) {
      disposedWarning(this.id);
      return;
    }
    this._loadingFX && this._zr.remove(this._loadingFX);
    this._loadingFX = null;
  };
  ECharts.prototype.makeActionFromEvent = function (eventObj) {
    var payload = (0,util.extend)({}, eventObj);
    payload.type = connectionEventRevertMap[eventObj.type];
    return payload;
  };
  /**
   * @param opt If pass boolean, means opt.silent
   * @param opt.silent Default `false`. Whether trigger events.
   * @param opt.flush Default `undefined`.
   *        true: Flush immediately, and then pixel in canvas can be fetched
   *            immediately. Caution: it might affect performance.
   *        false: Not flush.
   *        undefined: Auto decide whether perform flush.
   */
  ECharts.prototype.dispatchAction = function (payload, opt) {
    if (this._disposed) {
      disposedWarning(this.id);
      return;
    }
    if (!(0,util.isObject)(opt)) {
      opt = {
        silent: !!opt
      };
    }
    if (!actions[payload.type]) {
      return;
    }
    // Avoid dispatch action before setOption. Especially in `connect`.
    if (!this._model) {
      return;
    }
    // May dispatchAction in rendering procedure
    if (this[IN_MAIN_PROCESS_KEY]) {
      this._pendingActions.push(payload);
      return;
    }
    var silent = opt.silent;
    doDispatchAction.call(this, payload, silent);
    var flush = opt.flush;
    if (flush) {
      this._zr.flush();
    } else if (flush !== false && env["default"].browser.weChat) {
      // In WeChat embedded browser, `requestAnimationFrame` and `setInterval`
      // hang when sliding page (on touch event), which cause that zr does not
      // refresh until user interaction finished, which is not expected.
      // But `dispatchAction` may be called too frequently when pan on touch
      // screen, which impacts performance if do not throttle them.
      this._throttledZrFlush();
    }
    flushPendingActions.call(this, silent);
    triggerUpdatedEvent.call(this, silent);
  };
  ECharts.prototype.updateLabelLayout = function () {
    core_lifecycle.trigger('series:layoutlabels', this._model, this._api, {
      // Not adding series labels.
      // TODO
      updatedSeries: []
    });
  };
  ECharts.prototype.appendData = function (params) {
    if (this._disposed) {
      disposedWarning(this.id);
      return;
    }
    var seriesIndex = params.seriesIndex;
    var ecModel = this.getModel();
    var seriesModel = ecModel.getSeriesByIndex(seriesIndex);
    if (false) {}
    seriesModel.appendData(params);
    // Note: `appendData` does not support that update extent of coordinate
    // system, util some scenario require that. In the expected usage of
    // `appendData`, the initial extent of coordinate system should better
    // be fixed by axis `min`/`max` setting or initial data, otherwise if
    // the extent changed while `appendData`, the location of the painted
    // graphic elements have to be changed, which make the usage of
    // `appendData` meaningless.
    this._scheduler.unfinished = true;
    this.getZr().wakeUp();
  };
  // A work around for no `internal` modifier in ts yet but
  // need to strictly hide private methods to JS users.
  ECharts.internalField = function () {
    prepare = function (ecIns) {
      var scheduler = ecIns._scheduler;
      scheduler.restorePipelines(ecIns._model);
      scheduler.prepareStageTasks();
      prepareView(ecIns, true);
      prepareView(ecIns, false);
      scheduler.plan();
    };
    /**
     * Prepare view instances of charts and components
     */
    prepareView = function (ecIns, isComponent) {
      var ecModel = ecIns._model;
      var scheduler = ecIns._scheduler;
      var viewList = isComponent ? ecIns._componentsViews : ecIns._chartsViews;
      var viewMap = isComponent ? ecIns._componentsMap : ecIns._chartsMap;
      var zr = ecIns._zr;
      var api = ecIns._api;
      for (var i = 0; i < viewList.length; i++) {
        viewList[i].__alive = false;
      }
      isComponent ? ecModel.eachComponent(function (componentType, model) {
        componentType !== 'series' && doPrepare(model);
      }) : ecModel.eachSeries(doPrepare);
      function doPrepare(model) {
        // By default view will be reused if possible for the case that `setOption` with "notMerge"
        // mode and need to enable transition animation. (Usually, when they have the same id, or
        // especially no id but have the same type & name & index. See the `model.id` generation
        // rule in `makeIdAndName` and `viewId` generation rule here).
        // But in `replaceMerge` mode, this feature should be able to disabled when it is clear that
        // the new model has nothing to do with the old model.
        var requireNewView = model.__requireNewView;
        // This command should not work twice.
        model.__requireNewView = false;
        // Consider: id same and type changed.
        var viewId = '_ec_' + model.id + '_' + model.type;
        var view = !requireNewView && viewMap[viewId];
        if (!view) {
          var classType = (0,clazz.parseClassType)(model.type);
          var Clazz = isComponent ? Component["default"].getClass(classType.main, classType.sub) :
          // FIXME:TS
          // (ChartView as ChartViewConstructor).getClass('series', classType.sub)
          // For backward compat, still support a chart type declared as only subType
          // like "liquidfill", but recommend "series.liquidfill"
          // But need a base class to make a type series.
          Chart["default"].getClass(classType.sub);
          if (false) {}
          view = new Clazz();
          view.init(ecModel, api);
          viewMap[viewId] = view;
          viewList.push(view);
          zr.add(view.group);
        }
        model.__viewId = view.__id = viewId;
        view.__alive = true;
        view.__model = model;
        view.group.__ecComponentInfo = {
          mainType: model.mainType,
          index: model.componentIndex
        };
        !isComponent && scheduler.prepareView(view, model, ecModel, api);
      }
      for (var i = 0; i < viewList.length;) {
        var view = viewList[i];
        if (!view.__alive) {
          !isComponent && view.renderTask.dispose();
          zr.remove(view.group);
          view.dispose(ecModel, api);
          viewList.splice(i, 1);
          if (viewMap[view.__id] === view) {
            delete viewMap[view.__id];
          }
          view.__id = view.group.__ecComponentInfo = null;
        } else {
          i++;
        }
      }
    };
    updateDirectly = function (ecIns, method, payload, mainType, subType) {
      var ecModel = ecIns._model;
      ecModel.setUpdatePayload(payload);
      // broadcast
      if (!mainType) {
        // FIXME
        // Chart will not be update directly here, except set dirty.
        // But there is no such scenario now.
        (0,util.each)([].concat(ecIns._componentsViews).concat(ecIns._chartsViews), callView);
        return;
      }
      var query = {};
      query[mainType + 'Id'] = payload[mainType + 'Id'];
      query[mainType + 'Index'] = payload[mainType + 'Index'];
      query[mainType + 'Name'] = payload[mainType + 'Name'];
      var condition = {
        mainType: mainType,
        query: query
      };
      subType && (condition.subType = subType); // subType may be '' by parseClassType;
      var excludeSeriesId = payload.excludeSeriesId;
      var excludeSeriesIdMap;
      if (excludeSeriesId != null) {
        excludeSeriesIdMap = (0,util.createHashMap)();
        (0,util.each)(util_model.normalizeToArray(excludeSeriesId), function (id) {
          var modelId = util_model.convertOptionIdName(id, null);
          if (modelId != null) {
            excludeSeriesIdMap.set(modelId, true);
          }
        });
      }
      // If dispatchAction before setOption, do nothing.
      ecModel && ecModel.eachComponent(condition, function (model) {
        var isExcluded = excludeSeriesIdMap && excludeSeriesIdMap.get(model.id) != null;
        if (isExcluded) {
          return;
        }
        ;
        if ((0,states.isHighDownPayload)(payload)) {
          if (model instanceof Series["default"]) {
            if (payload.type === states.HIGHLIGHT_ACTION_TYPE && !payload.notBlur && !model.get(['emphasis', 'disabled'])) {
              (0,states.blurSeriesFromHighlightPayload)(model, payload, ecIns._api);
            }
          } else {
            var _a = (0,states.findComponentHighDownDispatchers)(model.mainType, model.componentIndex, payload.name, ecIns._api),
              focusSelf = _a.focusSelf,
              dispatchers = _a.dispatchers;
            if (payload.type === states.HIGHLIGHT_ACTION_TYPE && focusSelf && !payload.notBlur) {
              (0,states.blurComponent)(model.mainType, model.componentIndex, ecIns._api);
            }
            // PENDING:
            // Whether to put this "enter emphasis" code in `ComponentView`,
            // which will be the same as `ChartView` but might be not necessary
            // and will be far from this logic.
            if (dispatchers) {
              (0,util.each)(dispatchers, function (dispatcher) {
                payload.type === states.HIGHLIGHT_ACTION_TYPE ? (0,states.enterEmphasis)(dispatcher) : (0,states.leaveEmphasis)(dispatcher);
              });
            }
          }
        } else if ((0,states.isSelectChangePayload)(payload)) {
          // TODO geo
          if (model instanceof Series["default"]) {
            (0,states.toggleSelectionFromPayload)(model, payload, ecIns._api);
            (0,states.updateSeriesElementSelection)(model);
            markStatusToUpdate(ecIns);
          }
        }
      }, ecIns);
      ecModel && ecModel.eachComponent(condition, function (model) {
        var isExcluded = excludeSeriesIdMap && excludeSeriesIdMap.get(model.id) != null;
        if (isExcluded) {
          return;
        }
        ;
        callView(ecIns[mainType === 'series' ? '_chartsMap' : '_componentsMap'][model.__viewId]);
      }, ecIns);
      function callView(view) {
        view && view.__alive && view[method] && view[method](view.__model, ecModel, ecIns._api, payload);
      }
    };
    updateMethods = {
      prepareAndUpdate: function (payload) {
        prepare(this);
        updateMethods.update.call(this, payload, payload && {
          // Needs to mark option changed if newOption is given.
          // It's from MagicType.
          // TODO If use a separate flag optionChanged in payload?
          optionChanged: payload.newOption != null
        });
      },
      update: function (payload, updateParams) {
        var ecModel = this._model;
        var api = this._api;
        var zr = this._zr;
        var coordSysMgr = this._coordSysMgr;
        var scheduler = this._scheduler;
        // update before setOption
        if (!ecModel) {
          return;
        }
        ecModel.setUpdatePayload(payload);
        scheduler.restoreData(ecModel, payload);
        scheduler.performSeriesTasks(ecModel);
        // TODO
        // Save total ecModel here for undo/redo (after restoring data and before processing data).
        // Undo (restoration of total ecModel) can be carried out in 'action' or outside API call.
        // Create new coordinate system each update
        // In LineView may save the old coordinate system and use it to get the original point.
        coordSysMgr.create(ecModel, api);
        scheduler.performDataProcessorTasks(ecModel, payload);
        // Current stream render is not supported in data process. So we can update
        // stream modes after data processing, where the filtered data is used to
        // determine whether to use progressive rendering.
        updateStreamModes(this, ecModel);
        // We update stream modes before coordinate system updated, then the modes info
        // can be fetched when coord sys updating (consider the barGrid extent fix). But
        // the drawback is the full coord info can not be fetched. Fortunately this full
        // coord is not required in stream mode updater currently.
        coordSysMgr.update(ecModel, api);
        clearColorPalette(ecModel);
        scheduler.performVisualTasks(ecModel, payload);
        // Set background and dark mode before rendering, because they affect auto-color-determination
        // in zrender Text, and consequently affect the bounding rect if stroke is added.
        var backgroundColor = ecModel.get('backgroundColor') || 'transparent';
        zr.setBackgroundColor(backgroundColor);
        // Force set dark mode.
        var darkMode = ecModel.get('darkMode');
        if (darkMode != null && darkMode !== 'auto') {
          zr.setDarkMode(darkMode);
        }
        render(this, ecModel, api, payload, updateParams);
        core_lifecycle.trigger('afterupdate', ecModel, api);
      },
      updateTransform: function (payload) {
        var _this = this;
        var ecModel = this._model;
        var api = this._api;
        // update before setOption
        if (!ecModel) {
          return;
        }
        ecModel.setUpdatePayload(payload);
        // ChartView.markUpdateMethod(payload, 'updateTransform');
        var componentDirtyList = [];
        ecModel.eachComponent(function (componentType, componentModel) {
          if (componentType === 'series') {
            return;
          }
          var componentView = _this.getViewOfComponentModel(componentModel);
          if (componentView && componentView.__alive) {
            if (componentView.updateTransform) {
              var result = componentView.updateTransform(componentModel, ecModel, api, payload);
              result && result.update && componentDirtyList.push(componentView);
            } else {
              componentDirtyList.push(componentView);
            }
          }
        });
        var seriesDirtyMap = (0,util.createHashMap)();
        ecModel.eachSeries(function (seriesModel) {
          var chartView = _this._chartsMap[seriesModel.__viewId];
          if (chartView.updateTransform) {
            var result = chartView.updateTransform(seriesModel, ecModel, api, payload);
            result && result.update && seriesDirtyMap.set(seriesModel.uid, 1);
          } else {
            seriesDirtyMap.set(seriesModel.uid, 1);
          }
        });
        clearColorPalette(ecModel);
        // Keep pipe to the exist pipeline because it depends on the render task of the full pipeline.
        // this._scheduler.performVisualTasks(ecModel, payload, 'layout', true);
        this._scheduler.performVisualTasks(ecModel, payload, {
          setDirty: true,
          dirtyMap: seriesDirtyMap
        });
        // Currently, not call render of components. Geo render cost a lot.
        // renderComponents(ecIns, ecModel, api, payload, componentDirtyList);
        renderSeries(this, ecModel, api, payload, {}, seriesDirtyMap);
        core_lifecycle.trigger('afterupdate', ecModel, api);
      },
      updateView: function (payload) {
        var ecModel = this._model;
        // update before setOption
        if (!ecModel) {
          return;
        }
        ecModel.setUpdatePayload(payload);
        Chart["default"].markUpdateMethod(payload, 'updateView');
        clearColorPalette(ecModel);
        // Keep pipe to the exist pipeline because it depends on the render task of the full pipeline.
        this._scheduler.performVisualTasks(ecModel, payload, {
          setDirty: true
        });
        render(this, ecModel, this._api, payload, {});
        core_lifecycle.trigger('afterupdate', ecModel, this._api);
      },
      updateVisual: function (payload) {
        // updateMethods.update.call(this, payload);
        var _this = this;
        var ecModel = this._model;
        // update before setOption
        if (!ecModel) {
          return;
        }
        ecModel.setUpdatePayload(payload);
        // clear all visual
        ecModel.eachSeries(function (seriesModel) {
          seriesModel.getData().clearAllVisual();
        });
        // Perform visual
        Chart["default"].markUpdateMethod(payload, 'updateVisual');
        clearColorPalette(ecModel);
        // Keep pipe to the exist pipeline because it depends on the render task of the full pipeline.
        this._scheduler.performVisualTasks(ecModel, payload, {
          visualType: 'visual',
          setDirty: true
        });
        ecModel.eachComponent(function (componentType, componentModel) {
          if (componentType !== 'series') {
            var componentView = _this.getViewOfComponentModel(componentModel);
            componentView && componentView.__alive && componentView.updateVisual(componentModel, ecModel, _this._api, payload);
          }
        });
        ecModel.eachSeries(function (seriesModel) {
          var chartView = _this._chartsMap[seriesModel.__viewId];
          chartView.updateVisual(seriesModel, ecModel, _this._api, payload);
        });
        core_lifecycle.trigger('afterupdate', ecModel, this._api);
      },
      updateLayout: function (payload) {
        updateMethods.update.call(this, payload);
      }
    };
    function doConvertPixelImpl(ecIns, methodName, finder, value, opt) {
      if (ecIns._disposed) {
        disposedWarning(ecIns.id);
        return;
      }
      var ecModel = ecIns._model;
      var coordSysList = ecIns._coordSysMgr.getCoordinateSystems();
      var result;
      var parsedFinder = util_model.parseFinder(ecModel, finder);
      for (var i = 0; i < coordSysList.length; i++) {
        var coordSys = coordSysList[i];
        if (coordSys[methodName] && (result = coordSys[methodName](ecModel, parsedFinder, value, opt)) != null) {
          return result;
        }
      }
      if (false) {}
    }
    ;
    doConvertPixel = doConvertPixelImpl;
    updateStreamModes = function (ecIns, ecModel) {
      var chartsMap = ecIns._chartsMap;
      var scheduler = ecIns._scheduler;
      ecModel.eachSeries(function (seriesModel) {
        scheduler.updateStreamModes(seriesModel, chartsMap[seriesModel.__viewId]);
      });
    };
    doDispatchAction = function (payload, silent) {
      var _this = this;
      var ecModel = this.getModel();
      var payloadType = payload.type;
      var escapeConnect = payload.escapeConnect;
      var actionInfo = actions[payloadType];
      var cptTypeTmp = (actionInfo.update || 'update').split(':');
      var updateMethod = cptTypeTmp.pop();
      var cptType = cptTypeTmp[0] != null && (0,clazz.parseClassType)(cptTypeTmp[0]);
      this[IN_MAIN_PROCESS_KEY] = true;
      updateMainProcessVersion(this);
      var payloads = [payload];
      var batched = false;
      // Batch action
      if (payload.batch) {
        batched = true;
        payloads = (0,util.map)(payload.batch, function (item) {
          item = (0,util.defaults)((0,util.extend)({}, item), payload);
          item.batch = null;
          return item;
        });
      }
      var eventObjBatch = [];
      var eventObj;
      var actionResultBatch = [];
      var nonRefinedEventType = actionInfo.nonRefinedEventType;
      var isSelectChange = (0,states.isSelectChangePayload)(payload);
      var isHighDown = (0,states.isHighDownPayload)(payload);
      // Only leave blur once if there are multiple batches.
      if (isHighDown) {
        (0,states.allLeaveBlur)(this._api);
      }
      (0,util.each)(payloads, function (batchItem) {
        // Action can specify the event by return it.
        var actionResult = actionInfo.action(batchItem, ecModel, _this._api);
        if (actionInfo.refineEvent) {
          actionResultBatch.push(actionResult);
        } else {
          eventObj = actionResult;
        }
        eventObj = eventObj || (0,util.extend)({}, batchItem);
        eventObj.type = nonRefinedEventType;
        eventObjBatch.push(eventObj);
        // light update does not perform data process, layout and visual.
        if (isHighDown) {
          var _a = util_model.preParseFinder(payload),
            queryOptionMap = _a.queryOptionMap,
            mainTypeSpecified = _a.mainTypeSpecified;
          var componentMainType = mainTypeSpecified ? queryOptionMap.keys()[0] : 'series';
          updateDirectly(_this, updateMethod, batchItem, componentMainType);
          markStatusToUpdate(_this);
        } else if (isSelectChange) {
          // At present `dispatchAction({ type: 'select', ... })` is not supported on components.
          // geo still use 'geoselect'.
          updateDirectly(_this, updateMethod, batchItem, 'series');
          markStatusToUpdate(_this);
        } else if (cptType) {
          updateDirectly(_this, updateMethod, batchItem, cptType.main, cptType.sub);
        }
      });
      if (updateMethod !== 'none' && !isHighDown && !isSelectChange && !cptType) {
        try {
          // Still dirty
          if (this[PENDING_UPDATE]) {
            prepare(this);
            updateMethods.update.call(this, payload);
            this[PENDING_UPDATE] = null;
          } else {
            updateMethods[updateMethod].call(this, payload);
          }
        } catch (e) {
          this[IN_MAIN_PROCESS_KEY] = false;
          throw e;
        }
      }
      // Follow the rule of action batch
      if (batched) {
        eventObj = {
          type: nonRefinedEventType,
          escapeConnect: escapeConnect,
          batch: eventObjBatch
        };
      } else {
        eventObj = eventObjBatch[0];
      }
      this[IN_MAIN_PROCESS_KEY] = false;
      if (!silent) {
        var refinedEvent = void 0;
        if (actionInfo.refineEvent) {
          var eventContent = actionInfo.refineEvent(actionResultBatch, payload, ecModel, this._api).eventContent;
          (0,util.assert)((0,util.isObject)(eventContent));
          refinedEvent = (0,util.defaults)({
            type: actionInfo.refinedEventType
          }, eventContent);
          refinedEvent.fromAction = payload.type;
          refinedEvent.fromActionPayload = payload;
          refinedEvent.escapeConnect = true;
        }
        var messageCenter = this._messageCenter;
        // - If `refineEvent` created a `refinedEvent`, `eventObj` (replicated from the original payload)
        //  is still needed to be triggered for the feature `connect`. But it will not be triggered to
        //  users in this case.
        // - If no `refineEvent` used, `eventObj` will be triggered for both `connect` and users.
        messageCenter.trigger(eventObj.type, eventObj);
        if (refinedEvent) {
          messageCenter.trigger(refinedEvent.type, refinedEvent);
        }
      }
    };
    flushPendingActions = function (silent) {
      var pendingActions = this._pendingActions;
      while (pendingActions.length) {
        var payload = pendingActions.shift();
        doDispatchAction.call(this, payload, silent);
      }
    };
    triggerUpdatedEvent = function (silent) {
      !silent && this.trigger('updated');
    };
    /**
     * Event `rendered` is triggered when zr
     * rendered. It is useful for realtime
     * snapshot (reflect animation).
     *
     * Event `finished` is triggered when:
     * (1) zrender rendering finished.
     * (2) initial animation finished.
     * (3) progressive rendering finished.
     * (4) no pending action.
     * (5) no delayed setOption needs to be processed.
     */
    bindRenderedEvent = function (zr, ecIns) {
      zr.on('rendered', function (params) {
        ecIns.trigger('rendered', params);
        // The `finished` event should not be triggered repeatedly,
        // so it should only be triggered when rendering indeed happens
        // in zrender. (Consider the case that dipatchAction is keep
        // triggering when mouse move).
        if (
        // Although zr is dirty if initial animation is not finished
        // and this checking is called on frame, we also check
        // animation finished for robustness.
        zr.animation.isFinished() && !ecIns[PENDING_UPDATE] && !ecIns._scheduler.unfinished && !ecIns._pendingActions.length) {
          ecIns.trigger('finished');
        }
      });
    };
    bindMouseEvent = function (zr, ecIns) {
      zr.on('mouseover', function (e) {
        var el = e.target;
        var dispatcher = (0,util_event.findEventDispatcher)(el, states.isHighDownDispatcher);
        if (dispatcher) {
          (0,states.handleGlobalMouseOverForHighDown)(dispatcher, e, ecIns._api);
          markStatusToUpdate(ecIns);
        }
      }).on('mouseout', function (e) {
        var el = e.target;
        var dispatcher = (0,util_event.findEventDispatcher)(el, states.isHighDownDispatcher);
        if (dispatcher) {
          (0,states.handleGlobalMouseOutForHighDown)(dispatcher, e, ecIns._api);
          markStatusToUpdate(ecIns);
        }
      }).on('click', function (e) {
        var el = e.target;
        var dispatcher = (0,util_event.findEventDispatcher)(el, function (target) {
          return (0,innerStore.getECData)(target).dataIndex != null;
        }, true);
        if (dispatcher) {
          var actionType = dispatcher.selected ? 'unselect' : 'select';
          var ecData = (0,innerStore.getECData)(dispatcher);
          ecIns._api.dispatchAction({
            type: actionType,
            dataType: ecData.dataType,
            dataIndexInside: ecData.dataIndex,
            seriesIndex: ecData.seriesIndex,
            isFromClick: true
          });
        }
      });
    };
    function clearColorPalette(ecModel) {
      ecModel.clearColorPalette();
      ecModel.eachSeries(function (seriesModel) {
        seriesModel.clearColorPalette();
      });
    }
    ;
    // Allocate zlevels for series and components
    function allocateZlevels(ecModel) {
      ;
      var componentZLevels = [];
      var seriesZLevels = [];
      var hasSeparateZLevel = false;
      ecModel.eachComponent(function (componentType, componentModel) {
        var zlevel = componentModel.get('zlevel') || 0;
        var z = componentModel.get('z') || 0;
        var zlevelKey = componentModel.getZLevelKey();
        hasSeparateZLevel = hasSeparateZLevel || !!zlevelKey;
        (componentType === 'series' ? seriesZLevels : componentZLevels).push({
          zlevel: zlevel,
          z: z,
          idx: componentModel.componentIndex,
          type: componentType,
          key: zlevelKey
        });
      });
      if (hasSeparateZLevel) {
        // Series after component
        var zLevels = componentZLevels.concat(seriesZLevels);
        var lastSeriesZLevel_1;
        var lastSeriesKey_1;
        (0,timsort["default"])(zLevels, function (a, b) {
          if (a.zlevel === b.zlevel) {
            return a.z - b.z;
          }
          return a.zlevel - b.zlevel;
        });
        (0,util.each)(zLevels, function (item) {
          var componentModel = ecModel.getComponent(item.type, item.idx);
          var zlevel = item.zlevel;
          var key = item.key;
          if (lastSeriesZLevel_1 != null) {
            zlevel = Math.max(lastSeriesZLevel_1, zlevel);
          }
          if (key) {
            if (zlevel === lastSeriesZLevel_1 && key !== lastSeriesKey_1) {
              zlevel++;
            }
            lastSeriesKey_1 = key;
          } else if (lastSeriesKey_1) {
            if (zlevel === lastSeriesZLevel_1) {
              zlevel++;
            }
            lastSeriesKey_1 = '';
          }
          lastSeriesZLevel_1 = zlevel;
          componentModel.setZLevel(zlevel);
        });
      }
    }
    render = function (ecIns, ecModel, api, payload, updateParams) {
      allocateZlevels(ecModel);
      renderComponents(ecIns, ecModel, api, payload, updateParams);
      (0,util.each)(ecIns._chartsViews, function (chart) {
        chart.__alive = false;
      });
      renderSeries(ecIns, ecModel, api, payload, updateParams);
      // Remove groups of unrendered charts
      (0,util.each)(ecIns._chartsViews, function (chart) {
        if (!chart.__alive) {
          chart.remove(ecModel, api);
        }
      });
    };
    renderComponents = function (ecIns, ecModel, api, payload, updateParams, dirtyList) {
      (0,util.each)(dirtyList || ecIns._componentsViews, function (componentView) {
        var componentModel = componentView.__model;
        clearStates(componentModel, componentView);
        componentView.render(componentModel, ecModel, api, payload);
        updateZ(componentModel, componentView);
        updateStates(componentModel, componentView);
      });
    };
    /**
     * Render each chart and component
     */
    renderSeries = function (ecIns, ecModel, api, payload, updateParams, dirtyMap) {
      // Render all charts
      var scheduler = ecIns._scheduler;
      updateParams = (0,util.extend)(updateParams || {}, {
        updatedSeries: ecModel.getSeries()
      });
      // TODO progressive?
      core_lifecycle.trigger('series:beforeupdate', ecModel, api, updateParams);
      var unfinished = false;
      ecModel.eachSeries(function (seriesModel) {
        var chartView = ecIns._chartsMap[seriesModel.__viewId];
        chartView.__alive = true;
        var renderTask = chartView.renderTask;
        scheduler.updatePayload(renderTask, payload);
        // TODO states on marker.
        clearStates(seriesModel, chartView);
        if (dirtyMap && dirtyMap.get(seriesModel.uid)) {
          renderTask.dirty();
        }
        if (renderTask.perform(scheduler.getPerformArgs(renderTask))) {
          unfinished = true;
        }
        chartView.group.silent = !!seriesModel.get('silent');
        // Should not call markRedraw on group, because it will disable zrender
        // incremental render (always render from the __startIndex each frame)
        // chartView.group.markRedraw();
        updateBlend(seriesModel, chartView);
        (0,states.updateSeriesElementSelection)(seriesModel);
      });
      scheduler.unfinished = unfinished || scheduler.unfinished;
      core_lifecycle.trigger('series:layoutlabels', ecModel, api, updateParams);
      // transition after label is layouted.
      core_lifecycle.trigger('series:transition', ecModel, api, updateParams);
      ecModel.eachSeries(function (seriesModel) {
        var chartView = ecIns._chartsMap[seriesModel.__viewId];
        // Update Z after labels updated. Before applying states.
        updateZ(seriesModel, chartView);
        // NOTE: Update states after label is updated.
        // label should be in normal status when layouting.
        updateStates(seriesModel, chartView);
      });
      // If use hover layer
      updateHoverLayerStatus(ecIns, ecModel);
      core_lifecycle.trigger('series:afterupdate', ecModel, api, updateParams);
    };
    markStatusToUpdate = function (ecIns) {
      ecIns[STATUS_NEEDS_UPDATE_KEY] = true;
      // Wake up zrender if it's sleep. Let it update states in the next frame.
      ecIns.getZr().wakeUp();
    };
    updateMainProcessVersion = function (ecIns) {
      ecIns[MAIN_PROCESS_VERSION_KEY] = (ecIns[MAIN_PROCESS_VERSION_KEY] + 1) % 1000;
    };
    applyChangedStates = function (ecIns) {
      if (!ecIns[STATUS_NEEDS_UPDATE_KEY]) {
        return;
      }
      ecIns.getZr().storage.traverse(function (el) {
        // Not applied on removed elements, it may still in fading.
        if (basicTransition.isElementRemoved(el)) {
          return;
        }
        applyElementStates(el);
      });
      ecIns[STATUS_NEEDS_UPDATE_KEY] = false;
    };
    function applyElementStates(el) {
      var newStates = [];
      var oldStates = el.currentStates;
      // Keep other states.
      for (var i = 0; i < oldStates.length; i++) {
        var stateName = oldStates[i];
        if (!(stateName === 'emphasis' || stateName === 'blur' || stateName === 'select')) {
          newStates.push(stateName);
        }
      }
      // Only use states when it's exists.
      if (el.selected && el.states.select) {
        newStates.push('select');
      }
      if (el.hoverState === states.HOVER_STATE_EMPHASIS && el.states.emphasis) {
        newStates.push('emphasis');
      } else if (el.hoverState === states.HOVER_STATE_BLUR && el.states.blur) {
        newStates.push('blur');
      }
      el.useStates(newStates);
    }
    function updateHoverLayerStatus(ecIns, ecModel) {
      var zr = ecIns._zr;
      var storage = zr.storage;
      var elCount = 0;
      storage.traverse(function (el) {
        if (!el.isGroup) {
          elCount++;
        }
      });
      if (elCount > ecModel.get('hoverLayerThreshold') && !env["default"].node && !env["default"].worker) {
        ecModel.eachSeries(function (seriesModel) {
          if (seriesModel.preventUsingHoverLayer) {
            return;
          }
          var chartView = ecIns._chartsMap[seriesModel.__viewId];
          if (chartView.__alive) {
            chartView.eachRendered(function (el) {
              if (el.states.emphasis) {
                el.states.emphasis.hoverLayer = true;
              }
            });
          }
        });
      }
    }
    ;
    /**
     * Update chart and blend.
     */
    function updateBlend(seriesModel, chartView) {
      var blendMode = seriesModel.get('blendMode') || null;
      chartView.eachRendered(function (el) {
        // FIXME marker and other components
        if (!el.isGroup) {
          // DON'T mark the element dirty. In case element is incremental and don't want to rerender.
          el.style.blend = blendMode;
        }
      });
    }
    ;
    function updateZ(model, view) {
      if (model.preventAutoZ) {
        return;
      }
      var zInfo = graphic.retrieveZInfo(model);
      // Set z and zlevel
      view.eachRendered(function (el) {
        graphic.traverseUpdateZ(el, zInfo.z, zInfo.zlevel);
        // Don't traverse the children because it has been traversed in _updateZ.
        return true;
      });
    }
    ;
    // Clear states without animation.
    // TODO States on component.
    function clearStates(model, view) {
      view.eachRendered(function (el) {
        // Not applied on removed elements, it may still in fading.
        if (basicTransition.isElementRemoved(el)) {
          return;
        }
        var textContent = el.getTextContent();
        var textGuide = el.getTextGuideLine();
        if (el.stateTransition) {
          el.stateTransition = null;
        }
        if (textContent && textContent.stateTransition) {
          textContent.stateTransition = null;
        }
        if (textGuide && textGuide.stateTransition) {
          textGuide.stateTransition = null;
        }
        // TODO If el is incremental.
        if (el.hasState()) {
          el.prevStates = el.currentStates;
          el.clearStates();
        } else if (el.prevStates) {
          el.prevStates = null;
        }
      });
    }
    function updateStates(model, view) {
      var stateAnimationModel = model.getModel('stateAnimation');
      var enableAnimation = model.isAnimationEnabled();
      var duration = stateAnimationModel.get('duration');
      var stateTransition = duration > 0 ? {
        duration: duration,
        delay: stateAnimationModel.get('delay'),
        easing: stateAnimationModel.get('easing')
        // additive: stateAnimationModel.get('additive')
      } : null;
      view.eachRendered(function (el) {
        if (el.states && el.states.emphasis) {
          // Not applied on removed elements, it may still in fading.
          if (basicTransition.isElementRemoved(el)) {
            return;
          }
          if (el instanceof Path["default"]) {
            (0,states.savePathStates)(el);
          }
          // Only updated on changed element. In case element is incremental and don't want to rerender.
          // TODO, a more proper way?
          if (el.__dirty) {
            var prevStates = el.prevStates;
            // Restore states without animation
            if (prevStates) {
              el.useStates(prevStates);
            }
          }
          // Update state transition and enable animation again.
          if (enableAnimation) {
            el.stateTransition = stateTransition;
            var textContent = el.getTextContent();
            var textGuide = el.getTextGuideLine();
            // TODO Is it necessary to animate label?
            if (textContent) {
              textContent.stateTransition = stateTransition;
            }
            if (textGuide) {
              textGuide.stateTransition = stateTransition;
            }
          }
          // Use highlighted and selected flag to toggle states.
          if (el.__dirty) {
            applyElementStates(el);
          }
        }
      });
    }
    ;
    createExtensionAPI = function (ecIns) {
      return new (/** @class */function (_super) {
        (0,tslib_es6.__extends)(class_1, _super);
        function class_1() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.getCoordinateSystems = function () {
          return ecIns._coordSysMgr.getCoordinateSystems();
        };
        class_1.prototype.getComponentByElement = function (el) {
          while (el) {
            var modelInfo = el.__ecComponentInfo;
            if (modelInfo != null) {
              return ecIns._model.getComponent(modelInfo.mainType, modelInfo.index);
            }
            el = el.parent;
          }
        };
        class_1.prototype.enterEmphasis = function (el, highlightDigit) {
          (0,states.enterEmphasis)(el, highlightDigit);
          markStatusToUpdate(ecIns);
        };
        class_1.prototype.leaveEmphasis = function (el, highlightDigit) {
          (0,states.leaveEmphasis)(el, highlightDigit);
          markStatusToUpdate(ecIns);
        };
        class_1.prototype.enterBlur = function (el) {
          (0,states.enterBlur)(el);
          markStatusToUpdate(ecIns);
        };
        class_1.prototype.leaveBlur = function (el) {
          (0,states.leaveBlur)(el);
          markStatusToUpdate(ecIns);
        };
        class_1.prototype.enterSelect = function (el) {
          (0,states.enterSelect)(el);
          markStatusToUpdate(ecIns);
        };
        class_1.prototype.leaveSelect = function (el) {
          (0,states.leaveSelect)(el);
          markStatusToUpdate(ecIns);
        };
        class_1.prototype.getModel = function () {
          return ecIns.getModel();
        };
        class_1.prototype.getViewOfComponentModel = function (componentModel) {
          return ecIns.getViewOfComponentModel(componentModel);
        };
        class_1.prototype.getViewOfSeriesModel = function (seriesModel) {
          return ecIns.getViewOfSeriesModel(seriesModel);
        };
        class_1.prototype.getMainProcessVersion = function () {
          return ecIns[MAIN_PROCESS_VERSION_KEY];
        };
        return class_1;
      }(core_ExtensionAPI))(ecIns);
    };
    enableConnect = function (chart) {
      function updateConnectedChartsStatus(charts, status) {
        for (var i = 0; i < charts.length; i++) {
          var otherChart = charts[i];
          otherChart[CONNECT_STATUS_KEY] = status;
        }
      }
      (0,util.each)(connectionEventRevertMap, function (_, eventType) {
        chart._messageCenter.on(eventType, function (event) {
          if (connectedGroups[chart.group] && chart[CONNECT_STATUS_KEY] !== CONNECT_STATUS_PENDING) {
            if (event && event.escapeConnect) {
              return;
            }
            var action_1 = chart.makeActionFromEvent(event);
            var otherCharts_1 = [];
            (0,util.each)(instances, function (otherChart) {
              if (otherChart !== chart && otherChart.group === chart.group) {
                otherCharts_1.push(otherChart);
              }
            });
            updateConnectedChartsStatus(otherCharts_1, CONNECT_STATUS_PENDING);
            (0,util.each)(otherCharts_1, function (otherChart) {
              if (otherChart[CONNECT_STATUS_KEY] !== CONNECT_STATUS_UPDATING) {
                otherChart.dispatchAction(action_1);
              }
            });
            updateConnectedChartsStatus(otherCharts_1, CONNECT_STATUS_UPDATED);
          }
        });
      });
    };
  }();
  return ECharts;
}(Eventful["default"]);
var echartsProto = echarts_ECharts.prototype;
echartsProto.on = createRegisterEventWithLowercaseECharts('on');
echartsProto.off = createRegisterEventWithLowercaseECharts('off');
/**
 * @deprecated
 */
// @ts-ignore
echartsProto.one = function (eventName, cb, ctx) {
  var self = this;
  (0,log.deprecateLog)('ECharts#one is deprecated.');
  function wrapped() {
    var args2 = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args2[_i] = arguments[_i];
    }
    cb && cb.apply && cb.apply(this, args2);
    // @ts-ignore
    self.off(eventName, wrapped);
  }
  ;
  // @ts-ignore
  this.on.call(this, eventName, wrapped, ctx);
};
var MOUSE_EVENT_NAMES = ['click', 'dblclick', 'mouseover', 'mouseout', 'mousemove', 'mousedown', 'mouseup', 'globalout', 'contextmenu'];
function disposedWarning(id) {
  if (false) {}
}
var actions = {};
/**
 * Map event type to action type for reproducing action from event for `connect`.
 */
var connectionEventRevertMap = {};
/**
 * To remove duplication.
 */
var publicEventTypeMap = {};
var dataProcessorFuncs = [];
var optionPreprocessorFuncs = [];
var visualFuncs = [];
var themeStorage = {};
var loadingEffects = {};
var instances = {};
var connectedGroups = {};
var idBase = +new Date() - 0;
var groupIdBase = +new Date() - 0;
var DOM_ATTRIBUTE_KEY = '_echarts_instance_';
/**
 * @param opts.devicePixelRatio Use window.devicePixelRatio by default
 * @param opts.renderer Can choose 'canvas' or 'svg' to render the chart.
 * @param opts.width Use clientWidth of the input `dom` by default.
 *        Can be 'auto' (the same as null/undefined)
 * @param opts.height Use clientHeight of the input `dom` by default.
 *        Can be 'auto' (the same as null/undefined)
 * @param opts.locale Specify the locale.
 * @param opts.useDirtyRect Enable dirty rectangle rendering or not.
 */
function init(dom, theme, opts) {
  var isClient = !(opts && opts.ssr);
  if (isClient) {
    if (false) {}
    var existInstance = getInstanceByDom(dom);
    if (existInstance) {
      if (false) {}
      return existInstance;
    }
    if (false) {}
  }
  var chart = new echarts_ECharts(dom, theme, opts);
  chart.id = 'ec_' + idBase++;
  instances[chart.id] = chart;
  isClient && util_model.setAttribute(dom, DOM_ATTRIBUTE_KEY, chart.id);
  enableConnect(chart);
  core_lifecycle.trigger('afterinit', chart);
  return chart;
}
/**
 * @usage
 * (A)
 * ```js
 * let chart1 = echarts.init(dom1);
 * let chart2 = echarts.init(dom2);
 * chart1.group = 'xxx';
 * chart2.group = 'xxx';
 * echarts.connect('xxx');
 * ```
 * (B)
 * ```js
 * let chart1 = echarts.init(dom1);
 * let chart2 = echarts.init(dom2);
 * echarts.connect('xxx', [chart1, chart2]);
 * ```
 */
function connect(groupId) {
  // Is array of charts
  if ((0,util.isArray)(groupId)) {
    var charts = groupId;
    groupId = null;
    // If any chart has group
    (0,util.each)(charts, function (chart) {
      if (chart.group != null) {
        groupId = chart.group;
      }
    });
    groupId = groupId || 'g_' + groupIdBase++;
    (0,util.each)(charts, function (chart) {
      chart.group = groupId;
    });
  }
  connectedGroups[groupId] = true;
  return groupId;
}
function disconnect(groupId) {
  connectedGroups[groupId] = false;
}
/**
 * Alias and backward compatibility
 * @deprecated
 */
var disConnect = disconnect;
/**
 * Dispose a chart instance
 */
function dispose(chart) {
  if ((0,util.isString)(chart)) {
    chart = instances[chart];
  } else if (!(chart instanceof echarts_ECharts)) {
    // Try to treat as dom
    chart = getInstanceByDom(chart);
  }
  if (chart instanceof echarts_ECharts && !chart.isDisposed()) {
    chart.dispose();
  }
}
function getInstanceByDom(dom) {
  return instances[util_model.getAttribute(dom, DOM_ATTRIBUTE_KEY)];
}
function getInstanceById(key) {
  return instances[key];
}
/**
 * Register theme
 */
function registerTheme(name, theme) {
  themeStorage[name] = theme;
}
/**
 * Register option preprocessor
 */
function registerPreprocessor(preprocessorFunc) {
  if ((0,util.indexOf)(optionPreprocessorFuncs, preprocessorFunc) < 0) {
    optionPreprocessorFuncs.push(preprocessorFunc);
  }
}
function registerProcessor(priority, processor) {
  normalizeRegister(dataProcessorFuncs, priority, processor, PRIORITY_PROCESSOR_DEFAULT);
}
/**
 * Register postIniter
 * @param {Function} postInitFunc
 */
function registerPostInit(postInitFunc) {
  registerUpdateLifecycle('afterinit', postInitFunc);
}
/**
 * Register postUpdater
 * @param {Function} postUpdateFunc
 */
function registerPostUpdate(postUpdateFunc) {
  registerUpdateLifecycle('afterupdate', postUpdateFunc);
}
function registerUpdateLifecycle(name, cb) {
  core_lifecycle.on(name, cb);
}
function registerAction(arg0, arg1, action) {
  var actionType;
  var publicEventType;
  var refineEvent;
  var update;
  var publishNonRefinedEvent;
  if ((0,util.isFunction)(arg1)) {
    action = arg1;
    arg1 = '';
  }
  if ((0,util.isObject)(arg0)) {
    actionType = arg0.type;
    publicEventType = arg0.event;
    update = arg0.update;
    publishNonRefinedEvent = arg0.publishNonRefinedEvent;
    if (!action) {
      action = arg0.action;
    }
    refineEvent = arg0.refineEvent;
  } else {
    actionType = arg0;
    publicEventType = arg1;
  }
  function createEventType(actionOrEventType) {
    // Event type should be all lowercase
    return actionOrEventType.toLowerCase();
  }
  publicEventType = createEventType(publicEventType || actionType);
  // See comments on {ActionInfo} for the reason.
  var nonRefinedEventType = refineEvent ? createEventType(actionType) : publicEventType;
  // Support calling `registerAction` multiple times with the same action
  // type; subsequent calls have no effect.
  if (actions[actionType]) {
    return;
  }
  // Validate action type and event name.
  (0,util.assert)(ACTION_REG.test(actionType) && ACTION_REG.test(publicEventType));
  if (refineEvent) {
    // An event replicated from the action will be triggered internally for `connect` in this case.
    (0,util.assert)(publicEventType !== actionType);
  }
  actions[actionType] = {
    actionType: actionType,
    refinedEventType: publicEventType,
    nonRefinedEventType: nonRefinedEventType,
    update: update,
    action: action,
    refineEvent: refineEvent
  };
  publicEventTypeMap[publicEventType] = 1;
  if (refineEvent && publishNonRefinedEvent) {
    publicEventTypeMap[nonRefinedEventType] = 1;
  }
  if (false) {}
  connectionEventRevertMap[nonRefinedEventType] = actionType;
}
function registerCoordinateSystem(type, coordSysCreator) {
  CoordinateSystem["default"].register(type, coordSysCreator);
}
/**
 * Get dimensions of specified coordinate system.
 * @param {string} type
 * @return {Array.<string|Object>}
 */
function getCoordinateSystemDimensions(type) {
  var coordSysCreator = CoordinateSystem["default"].get(type);
  if (coordSysCreator) {
    return coordSysCreator.getDimensionsInfo ? coordSysCreator.getDimensionsInfo() : coordSysCreator.dimensions.slice();
  }
}
function registerCustomSeries(seriesType, renderItem) {
  (0,customSeriesRegister.registerCustomSeries)(seriesType, renderItem);
}

function registerLayout(priority, layoutTask) {
  normalizeRegister(visualFuncs, priority, layoutTask, PRIORITY_VISUAL_LAYOUT, 'layout');
}
function registerVisual(priority, visualTask) {
  normalizeRegister(visualFuncs, priority, visualTask, PRIORITY_VISUAL_CHART, 'visual');
}

var registeredTasks = [];
function normalizeRegister(targetList, priority, fn, defaultPriority, visualType) {
  if ((0,util.isFunction)(priority) || (0,util.isObject)(priority)) {
    fn = priority;
    priority = defaultPriority;
  }
  if (false) {}
  // Already registered
  if ((0,util.indexOf)(registeredTasks, fn) >= 0) {
    return;
  }
  registeredTasks.push(fn);
  var stageHandler = core_Scheduler.wrapStageHandler(fn, visualType);
  stageHandler.__prio = priority;
  stageHandler.__raw = fn;
  targetList.push(stageHandler);
}
function registerLoading(name, loadingFx) {
  loadingEffects[name] = loadingFx;
}
/**
 * ZRender need a canvas context to do measureText.
 * But in node environment canvas may be created by node-canvas.
 * So we need to specify how to create a canvas instead of using document.createElement('canvas')
 *
 *
 * @deprecated use setPlatformAPI({ createCanvas }) instead.
 *
 * @example
 *     let Canvas = require('canvas');
 *     let echarts = require('echarts');
 *     echarts.setCanvasCreator(function () {
 *         // Small size is enough.
 *         return new Canvas(32, 32);
 *     });
 */
function setCanvasCreator(creator) {
  if (false) {}
  (0,platform.setPlatformAPI)({
    createCanvas: creator
  });
}
/**
 * The parameters and usage: see `geoSourceManager.registerMap`.
 * Compatible with previous `echarts.registerMap`.
 */
function echarts_registerMap(mapName, geoJson, specialAreas) {
  var registerMap = (0,impl.getImpl)('registerMap');
  registerMap && registerMap(mapName, geoJson, specialAreas);
}
function echarts_getMap(mapName) {
  var getMap = (0,impl.getImpl)('getMap');
  return getMap && getMap(mapName);
}
var registerTransform = transform.registerExternalTransform;
/**
 * Globa dispatchAction to a specified chart instance.
 */
// export function dispatchAction(payload: { chartId: string } & Payload, opt?: Parameters<ECharts['dispatchAction']>[1]) {
//     if (!payload || !payload.chartId) {
//         // Must have chartId to find chart
//         return;
//     }
//     const chart = instances[payload.chartId];
//     if (chart) {
//         chart.dispatchAction(payload, opt);
//     }
// }
// Builtin global visual
registerVisual(PRIORITY_VISUAL_GLOBAL, style.seriesStyleTask);
registerVisual(PRIORITY_VISUAL_CHART_DATA_CUSTOM, style.dataStyleTask);
registerVisual(PRIORITY_VISUAL_CHART_DATA_CUSTOM, style.dataColorPaletteTask);
registerVisual(PRIORITY_VISUAL_GLOBAL, symbol.seriesSymbolTask);
registerVisual(PRIORITY_VISUAL_CHART_DATA_CUSTOM, symbol.dataSymbolTask);
registerVisual(PRIORITY_VISUAL_DECAL, decal["default"]);
registerPreprocessor(backwardCompat["default"]);
registerProcessor(PRIORITY_PROCESSOR_DATASTACK, dataStack["default"]);
registerLoading('default', loading_default["default"]);
// Default actions
registerAction({
  type: states.HIGHLIGHT_ACTION_TYPE,
  event: states.HIGHLIGHT_ACTION_TYPE,
  update: states.HIGHLIGHT_ACTION_TYPE
}, util.noop);
registerAction({
  type: states.DOWNPLAY_ACTION_TYPE,
  event: states.DOWNPLAY_ACTION_TYPE,
  update: states.DOWNPLAY_ACTION_TYPE
}, util.noop);
registerAction({
  type: states.SELECT_ACTION_TYPE,
  event: states.SELECT_CHANGED_EVENT_TYPE,
  update: states.SELECT_ACTION_TYPE,
  action: util.noop,
  refineEvent: makeSelectChangedEvent,
  publishNonRefinedEvent: true
});
registerAction({
  type: states.UNSELECT_ACTION_TYPE,
  event: states.SELECT_CHANGED_EVENT_TYPE,
  update: states.UNSELECT_ACTION_TYPE,
  action: util.noop,
  refineEvent: makeSelectChangedEvent,
  publishNonRefinedEvent: true
});
registerAction({
  type: states.TOGGLE_SELECT_ACTION_TYPE,
  event: states.SELECT_CHANGED_EVENT_TYPE,
  update: states.TOGGLE_SELECT_ACTION_TYPE,
  action: util.noop,
  refineEvent: makeSelectChangedEvent,
  publishNonRefinedEvent: true
});
function makeSelectChangedEvent(actionResultBatch, payload, ecModel, api) {
  return {
    eventContent: {
      selected: (0,states.getAllSelectedIndices)(ecModel),
      isFromClick: payload.isFromClick || false
    }
  };
}
// Default theme, so that we can use `chart.setTheme('default')` to revert to
// the default theme after changing to other themes.
registerTheme('default', {});
registerTheme('dark', dark["default"]);
// For backward compatibility, where the namespace `dataTool` will
// be mounted on `echarts` is the extension `dataTool` is imported.
var dataTool = {};

}),
18816: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getImpl: function() { return getImpl; },
  registerImpl: function() { return registerImpl; }
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

// Implementation of exported APIs. For example registerMap, getMap.
// The implementations will be registered when installing the component.
// Avoid these code being bundled to the core module.
var implsStore = {};
// TODO Type
function registerImpl(name, impl) {
  if (false) {}
  implsStore[name] = impl;
}
function getImpl(name) {
  if (false) {}
  return implsStore[name];
}

}),
57216: (function (__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SYSTEM_LANG: function() { return SYSTEM_LANG; },
  createLocaleObject: function() { return createLocaleObject; },
  getDefaultLocaleModel: function() { return getDefaultLocaleModel; },
  getLocaleModel: function() { return getLocaleModel; },
  registerLocale: function() { return registerLocale; }
});
/* import */ var _model_Model_js__rspack_import_1 = __webpack_require__(37931);
/* import */ var zrender_lib_core_env_js__rspack_import_0 = __webpack_require__(18311);
/* import */ var _i18n_langEN_js__rspack_import_3 = __webpack_require__(92044);
/* import */ var _i18n_langZH_js__rspack_import_4 = __webpack_require__(55449);
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


// default import ZH and EN lang



var LOCALE_ZH = 'ZH';
var LOCALE_EN = 'EN';
var DEFAULT_LOCALE = LOCALE_EN;
var localeStorage = {};
var localeModels = {};
var SYSTEM_LANG = !zrender_lib_core_env_js__rspack_import_0["default"].domSupported ? DEFAULT_LOCALE : function () {
  var langStr = (/* eslint-disable-next-line */
  document.documentElement.lang || navigator.language || navigator.browserLanguage || DEFAULT_LOCALE).toUpperCase();
  return langStr.indexOf(LOCALE_ZH) > -1 ? LOCALE_ZH : DEFAULT_LOCALE;
}();
function registerLocale(locale, localeObj) {
  locale = locale.toUpperCase();
  localeModels[locale] = new _model_Model_js__rspack_import_1["default"](localeObj);
  localeStorage[locale] = localeObj;
}
// export function getLocale(locale: string) {
//     return localeStorage[locale];
// }
function createLocaleObject(locale) {
  if ((0,zrender_lib_core_util_js__rspack_import_2.isString)(locale)) {
    var localeObj = localeStorage[locale.toUpperCase()] || {};
    if (locale === LOCALE_ZH || locale === LOCALE_EN) {
      return (0,zrender_lib_core_util_js__rspack_import_2.clone)(localeObj);
    } else {
      return (0,zrender_lib_core_util_js__rspack_import_2.merge)((0,zrender_lib_core_util_js__rspack_import_2.clone)(localeObj), (0,zrender_lib_core_util_js__rspack_import_2.clone)(localeStorage[DEFAULT_LOCALE]), false);
    }
  } else {
    return (0,zrender_lib_core_util_js__rspack_import_2.merge)((0,zrender_lib_core_util_js__rspack_import_2.clone)(locale), (0,zrender_lib_core_util_js__rspack_import_2.clone)(localeStorage[DEFAULT_LOCALE]), false);
  }
}
function getLocaleModel(lang) {
  return localeModels[lang];
}
function getDefaultLocaleModel() {
  return localeModels[DEFAULT_LOCALE];
}
// Default locale
registerLocale(LOCALE_EN, _i18n_langEN_js__rspack_import_3["default"]);
registerLocale(LOCALE_ZH, _i18n_langZH_js__rspack_import_4["default"]);

}),

}]);